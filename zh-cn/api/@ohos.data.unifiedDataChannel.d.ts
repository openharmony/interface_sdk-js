/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 标准化数据通路
 * @kit ArkData
 */

import { AsyncCallback } from './@ohos.base';
import image from "./@ohos.multimedia.image";
import Want from "./@ohos.app.ability.Want";

/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * 本模块为统一数据管理框架（Unified Data Management Framework，UDMF）的组成部分，针对多对多跨应用数据共享的不同业务场景提供了标准化的数据通路，提供了标准化的数据接入与读取接口。同时对文本、图片等数据
 * 类型提供了标准化定义，方便不同应用间进行数据交互，减少数据类型适配的工作量。
 * 
 * **设计逻辑：** UDMF采用统一数据模型，将不同类型的数据封装为UnifiedData对象，通过Intention标识不同的数据通路类型（如DATA_HUB、DRAG等），实现跨应用数据共享。数据写入时生成唯一标识符key，数据读
 * 取时通过key或intention查询获取。
 * 
 * UDMF处理数据时，不会解析用户数据的内容，存储路径安全性较低，不建议传输个人敏感数据和隐私数据。
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace unifiedDataChannel {
  /**
   * UDMF支持的设备内使用范围类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ShareOptions {
    /**
     * 表示允许在本设备同应用内使用。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    IN_APP = 0,
    /**
     * 表示允许在本设备内跨应用使用。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CROSS_APP = 1
  }

  /**
   * 对UnifiedData的延迟封装，支持延迟获取数据。当数据接收方请求特定类型数据时，系统会触发此回调函数，数据发送方可在回调中动态生成数据，而非提前准备所有数据。当前只支持同设备剪贴板场景。
   *
   * @param { string } type - 作为延迟数据类型的标识，用于区分不同类型的数据。取值见
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}，如'general.plain
   *     -text'表示纯文本类型。
   * @returns { UnifiedData } 当延迟回调触发时，返回包含相应类型数据的UnifiedData对象，可用于跨应用数据共享和传输。
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type GetDelayData = (type: string) => UnifiedData;

    /**
   * 用于表示统一数据记录允许的数据字段类型。
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } 表示string的类型。
   * @unionmember { boolean } 表示boolean的类型。
   * @unionmember { image.PixelMap } The value is of the [image.PixelMap]{@link @ohos.multimedia.image:image } 表示
   *     [image.PixelMap]{@link @ohos.multimedia.image:image.PixelMap}的类型。
   * @unionmember { Want } [Want]{@link @ohos.app.ability.Want:Want } 表示[Want]{@link @ohos.app.ability.Want:Want}的类型。
   * @unionmember { ArrayBuffer } 表示ArrayBuffer的类型。
   * @unionmember { object } 表示object的类型。
   * @unionmember { null } 表示null。
   * @unionmember { undefined } 表示undefined。
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice
   * @since 12 dynamic
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined;

  /**
   * Indicates type of value.
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @unionmember { image.PixelMap } The value is of the [image.PixelMap]{@link @ohos.multimedia.image:image} type.
   * @unionmember { Want } [Want]{@link @ohos.app.ability.Want:Want}.
   * @unionmember { ArrayBuffer } ArrayBuffer.
   * @unionmember { RecordData } RecordData.
   * @unionmember { null } Null.
   * @unionmember { undefined } Undefined.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | RecordData | null | undefined;

  /**
   * 拖拽场景下的URI授权策略。
   * 
   * > **说明：**
   * >
   * > 此授权策略仅在拖拽场景下生效，其他场景不生效。
   * > **实现机制：** 系统在拖拽数据传输时，根据UriPermission配置对目标URI进行临时授权。授权生命周期与拖拽会话绑定，拖拽完成后自动清理临时授权。接收方应用访问URI时，系统验证权限配置决定是否允许访问。
   * > PERSIST权限会将临时授权转换为持久化授权。
   * 
   * 支持不授权、读、写、持久化四种权限策略，可组合使用，仅以下组合生效：
   * 
   * - 仅使用NONE：不做任何文件授权。
   * - 仅使用READ：仅做单次只读授权。
   * - 仅使用WRITE：做单次读、写授权（写授权包含读授权）。
   * - READ+WRITE：做单次读、写授权，与仅使用WRITE的授权效果相同。
   * - READ+PERSIST：做持久化读授权。
   * - WRITE+PERSIST：做持久化读写授权。
   * - READ+WRITE+PERSIST：做持久化读写授权。
   * 
   * 拖拽授权策略应用规则（按优先级从高到低）：
   * 
   * - 单个数据级别：FileUri、HTML两个统一数据结构（UDS）以及File、Image、Video、Audio、Folder、HTML六个统一数据内容（UDC）数据结构支持配置授权策略参数，仅对单个record单次生效，优先
   * 级最高。
   * - UnifiedData级别：UnifiedDataProperties中提供的授权参数对单次拖拽有效。若某个数据中配置了授权策略，则优先按照该数据的配置进行，优先级次之。
   * - 默认级别：若单个数据和UnifiedDataProperties均未配置授权策略，则按照拖拽默认逻辑进行代理授权。默认逻辑如下：

   *    - FileUri类型数据（FileUri UDS或File、Image、Video、Audio、Folder五个UDC类型）：拖拽场景下默认授权为READ+WRITE+PERSIST（读+写+持久化授权）。
   *    - HTML类型数据，仅针对HTML文本中img标签下的uri做读授权。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export const enum UriPermission {  
    /**
     * 表示未授予任何权限。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    NONE = 0,

    /**
     * 表示读取或查看数据的权限。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    READ = 1,

    /**
     * 表示修改数据的权限（包含READ）。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    WRITE = 2,

    /**
     * 表示持久化文件的权限。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PERSIST = 3
  }

  /**
   * 定义统一数据对象中所有数据记录的属性，包含时间戳、标签、粘贴范围以及一些附加数据等。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class UnifiedDataProperties {
    /**
     * 是一个字典类型对象，用于设置其他附加属性数据。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    extras?: Record<string, object>;

    /**
     * extra property data. key-value pairs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    extras?: Record<string, RecordData>;

    /**
     * 用户自定义标签。非必填字段，默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    tag?: string;
    /**
     * [UnifiedData]{@link unifiedDataChannel.UnifiedData}的生成时间戳。默认值为1970年1月1日（UTC）。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly timestamp?: Date;
    /**
     * 指示[UnifiedData]{@link unifiedDataChannel.UnifiedData}支持的设备内使用范围，非必填字段，默认值为CROSS_APP。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    shareOptions?: ShareOptions;

    /**
     * 延迟获取数据回调。当前只支持同设备剪贴板场景，当用户从剪贴板读取数据时触发该回调。非必填字段，默认值为undefined。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getDelayData?: GetDelayData;

    /**
     * 用于拖拽场景的URI授权策略。默认值为READ+WRITE+PERSIST，只对单次数据生效，优先级较低，具体策略见[UriPermission]{@link unifiedDataChannel.UriPermission}
     * 。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<UriPermission>;
  }

  /**
   * 表示UDMF统一数据对象，提供封装一组数据记录的方法。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class UnifiedData {
    /**
     * 用于创建带有一条数据记录的统一数据对象。调用成功后，返回包含指定数据记录的UnifiedData对象。
     *
     * @param { UnifiedRecord } record - 要添加到统一数据对象中的数据记录，该记录为UnifiedRecord或其子类对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(record: UnifiedRecord);
    /**
     * 用于创建统一数据对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * 在当前统一数据对象中添加一条数据记录。调用成功后，指定的数据记录被添加到当前统一数据对象中。
     *
     * @param { UnifiedRecord } record - 要添加到统一数据对象中的数据记录，该记录为UnifiedRecord或其子类对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    addRecord(record: UnifiedRecord): void;
    /**
     * 将当前统一数据对象中的所有数据记录取出。通过本接口取出的数据为UnifiedRecord类型，需通过[getType]{@link unifiedDataChannel.UnifiedRecord#getType}获取数据类型
     * 后转为子类再使用。
     *
     * @returns { Array<UnifiedRecord> } 当前统一数据对象中包含的所有数据记录数组，每条记录可通过getType获取类型后转换为具体子类使用，用于读取和处理统一数据中的各种类型数据。
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRecords(): Array<UnifiedRecord>;

    /**
     * 检查当前统一数据对象中是否有指定的数据类型，检查范围包括使用[addEntry]{@link unifiedDataChannel.UnifiedRecord#addEntry}函数添加的数据类型。
     * 
     * 针对文件类型，若UnifiedData的类型集合中包含"general.jpeg"，在调用hasType接口判断是否包括"general.image"类型时，结果返回true（类型"general.jpeg"归属于类型"
     * general.image"）。
     *
     * @param { string } type - 要查询的数据类型，见
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     * @returns { boolean } 有指定的数据类型返回true，否则返回false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hasType(type: string): boolean;

    /**
     * 获取当前统一数据对象所有数据记录的类型。
     *
     * @returns { Array<string> }
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型的数组，表示当前记录的数
     *     据类型集合，元素值如'general.plain-text'、'general.hyperlink'、'openharmony.form'等。
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * UnifiedData properties.
     *
     * @returns { UnifiedDataProperties } Properties of all data records in a unified data. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get properties(): UnifiedDataProperties;

    /**
     * UnifiedData properties.
     *
     * @param { UnifiedDataProperties } Properties of all data records in a unified data. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    set properties(value: UnifiedDataProperties);
  }

  /**
   * 描述统一数据对象的数据摘要，包括数据类型和大小。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Summary {
    /**
     * 是一个字典类型对象，key表示数据类型（见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}），value为统一数据对象中该类型
     * 记录大小总和（单位：Byte）。
     *
     * @returns { Record<string, long> } Type and size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get summary(): Record<string, long>;

    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @param { Record<string, long> } Type and size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set summary(value: Record<string, long>);

    /**
     * 统一数据对象内记录总大小（单位：Byte）。
     *
     * @returns { long } Total size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get totalSize(): long;

    /**
     * Total data size of data in Bytes
     *
     * @param { long } Total size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set totalSize(value: long);

    /**
     * 统一数据对象中所有类型与该类型数据记录大小的映射关系，其中数据大小单位为Byte。当获取到的统一数据对象为空时，此overview属性值为空。
     *
     * @returns { Record<string, long> } Key represents the data type, and value represents the corresponding data
     *     size. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    get overview(): Record<string, long>;
  }

  /**
   * 对UDMF支持的数据内容的抽象定义，称为数据记录。一个统一数据对象内包含一条或多条数据记录，例如一条文本记录、一条图片记录、一条HTML记录等。从API version 15开始，支持往数据记录中增加同一内容的不同数据格式（例如同
   * 一文本可同时以纯文本、HTML或超链接等格式存储），数据使用方根据业务需要通过getEntry方法获取对应格式。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class UnifiedRecord {
    /**
     * 获取当前数据记录的类型。由于从统一数据对象中调用[getRecords]{@link unifiedDataChannel.UnifiedData#getRecords}所取出的数据是UnifiedRecord对象，因此需要通
     * 过本接口查询此记录的具体类型，再将该UnifiedRecord对象转换为其子类，调用子类接口。
     *
     * @returns { string } 当前数据记录对应的具体数据类型，见
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * 用于创建数据记录。调用成功后，返回一个空的UnifiedRecord对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 用于创建指定类型和值的数据记录。调用成功后，返回包含指定类型和值的UnifiedRecord对象。
     * 
     * 当参数value为[image.PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型时，参数type必须对应为
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}中
     * OPENHARMONY_PIXEL_MAP的值；
     * 
     * 当参数value为[Want]{@link @ohos.app.ability.Want:Want}类型时，参数type必须对应为
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}中OPENHARMONY_WANT的
     * 值。
     *
     * @param { string } type - 要创建的数据记录的类型，用于标识数据记录的具体类型。取值见
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}，如'
     *     general.plain-text'、'general.hyperlink'等。
     * @param { ValueType } value - 要创建的数据记录的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(type: string, value: ValueType);

    /**
     * 获取当前数据记录的值。
     *
     * @returns { ValueType } 当前数据记录对应的值。
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getValue(): ValueType;

    /**
     * 获取数据记录中数据的所有类型集合。可通过UnifiedRecord数据记录对象调用本接口，查询出此记录中数据的所有类型集合，包括使用
     * [addEntry]{@link unifiedDataChannel.UnifiedRecord#addEntry}函数添加的数据类型。
     *
     * @returns { Array<string> }
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型的数组，表示当前统一数据
     *     对象所有数据记录对应的数据类型，元素值如'general.plain-text'、'general.hyperlink'、'general.html'等。
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * 在当前数据记录中添加一条指定数据类型和内容的数据，通过该方法增加的数据类型和内容为同一内容的不同表现样式。调用成功后，指定的数据类型和内容被添加到当前数据记录中。
     *
     * @param { string } type - 要创建的数据类型，见
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     * @param { ValueType } value - 要创建的数据的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * 通过数据类型获取数据记录中的数据内容。
     *
     * @param { string } type - 要获取数据的类型，见
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     * @returns { ValueType } 当前数据记录对应的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntry(type: string): ValueType;

    /**
     * 获取当前数据记录中所有数据的类型和内容。
     *
     * @returns { Record<string, ValueType> } 当前数据记录对应的类型和内容。
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntries(): Record<string, ValueType>;
  }

  /**
   * 文本类型数据，是[UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord}的子类，也是文本类型数据的基类，用于描述文本类数据，推荐开发者优先使用Text的子类描述数据，如
   * [PlainText]{@link unifiedDataChannel.PlainText}、[Hyperlink]{@link unifiedDataChannel.Hyperlink}、
   * [HTML]{@link unifiedDataChannel.HTML}等具体子类。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Text extends UnifiedRecord {
    /**
     * 是一个字典类型对象，key和value都是string类型，用于描述文本内容。例如，可生成一个details内容为
     * 
     * {
     * 
     * "title":"标题",
     * 
     * "content":"内容"
     * 
     * }
     * 
     * 的数据对象，用于描述一篇文章。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, string>;

    /**
     * Indicates the details of unified text
     *
     * @returns { Record<string, string> | undefined } the details of unified text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * Indicates the details of unified text
     *
     * @param { Record<string, string> | undefined } the details of unified text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);
  }

  /**
   * [Text]{@link unifiedDataChannel.Text}的子类，用于描述纯文本类数据。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class PlainText extends Text {
    /**
     * 纯文本内容。
     *
     * @returns { string } the content of text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get textContent(): string;

    /**
     * Indicates the content of text
     *
     * @param { string } the content of text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set textContent(value: string);

    /**
     * 纯文本摘要，非必填字段，默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    abstract?: string;

    /**
     * Indicates the abstract of text
     *
     * @returns { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    get textAbstract(): string | undefined;

    /**
     * Indicates the abstract of text
     *
     * @param { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    set textAbstract(value: string | undefined);
  }

  /**
   * [Text]{@link unifiedDataChannel.Text}的子类，用于描述超链接类型数据。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Hyperlink extends Text {
    /**
     * 链接url。
     *
     * @returns { string } the url of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get url(): string;

    /**
     * Indicates the url of a link
     *
     * @param { string } the url of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set url(value: string);

    /**
     * 链接内容描述，非必填字段，默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    description?: string;

    /**
     * Indicates the description of a link
     *
     * @returns { string | undefined } the description of a link. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get description(): string | undefined;

    /**
     * Indicates the description of a link
     *
     * @param { string | undefined } the description of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set description(value: string | undefined);
  }

  /**
   * HTML类型数据，是[Text]{@link unifiedDataChannel.Text}的子类，用于描述超文本标记语言数据。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class HTML extends Text {
    /**
     * html格式内容。
     *
     * @returns { string } the content of html. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get htmlContent(): string;

    /**
     * Indicates the content of html, with html tags
     *
     * @param { string } the content of html. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set htmlContent(value: string);

    /**
     * 去除html标签后的纯文本内容，非必填字段，默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    plainContent?: string;

    /**
     * Indicates the plain content of html
     *
     * @returns { string | undefined } the plain content of html [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get plainContent(): string | undefined;

    /**
     * Indicates the plain content of html
     *
     * @param { string | undefined} the plain content of html [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set plainContent(value: string | undefined);

    /**
     * 用于拖拽场景的URI授权策略。默认值为READ（仅读授权），仅在img标签等场景下生效。只针对单个record使用，优先级最高，具体策略见
     * [UriPermission]{@link unifiedDataChannel.UriPermission}。
     *
     * @param { Array<UriPermission> | undefined } value - URI authorization policies.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    set uriAuthorizationPolicies(value: Array<UriPermission> | undefined);
  }

  /**
   * File类型数据，是[UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord}的子类，也是文件类型数据的基类，用于描述文件类型数据，推荐开发者优先使用File的子类描述数据，如
   * [Image]{@link unifiedDataChannel.Image}、[Video]{@link unifiedDataChannel.Video}、
   * [Folder]{@link unifiedDataChannel.Folder}等具体子类。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class File extends UnifiedRecord {
    /**
     * 是一个字典类型对象，key和value都是string类型，用于描述文件相关信息。例如，可生成一个details内容为
     * 
     * {
     * 
     * "name":"文件名",
     * 
     * "type":"文件类型"
     * 
     * }
     * 
     * 的数据对象，用于描述一个文件。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, string>;

    /**
     * Indicates the details of unified File
     *
     * @returns { Record<string, string> | undefined } the details of unified File [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * Indicates the details of unified File
     *
     * @param { Record<string, string> } the details of unified File. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);

    /**
     * 本地文件数据uri或网络文件uri，本地文件数据uri可通过[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}函数获取。
     *
     * @returns { string } the uri of file. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get uri(): string;

    /**
     * Indicates the uri of file
     *
     * @param { string } the uri of file. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set uri(value: string);

    /**
     * 用于拖拽场景的URI授权策略。默认值为READ+WRITE+PERSIST（读+写+持久化授权），只针对单个record使用，优先级最高，具体策略见
     * [UriPermission]{@link unifiedDataChannel.UriPermission}。
     *
     * @param { Array<UriPermission> | undefined } value - URI authorization policies.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    set uriAuthorizationPolicies(value: Array<UriPermission> | undefined);
  }

    /**
   * 图片类型数据，是[File]{@link unifiedDataChannel.File}的子类，用于描述图片文件。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Image extends File {
    /**
     * 本地图片数据uri或网络图片uri，本地图片数据uri可通过[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}函数获取。
     *
     * @returns { string } the uri of image. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get imageUri(): string;

    /**
     * Indicates the uri of image
     *
     * @param { string } the uri of image. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set imageUri(value: string);
  }

  /**
   * 视频类型数据，是[File]{@link unifiedDataChannel.File}的子类，用于描述视频文件。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Video extends File {
    /**
     * 本地视频数据uri或网络视频uri，本地视频数据uri可通过[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}函数获取。
     *
     * @returns { string } the uri of video. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get videoUri(): string;

    /**
     * Indicates the uri of video
     *
     * @param { string } the uri of video. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set videoUri(value: string);
  }

  /**
   * 音频类型数据，是[File]{@link unifiedDataChannel.File}的子类，用于描述音频文件。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Audio extends File {
    /**
     * 本地音频数据uri或网络音频uri，本地音频数据uri可通过[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}函数获取。
     *
     * @returns { string } the uri of audio. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get audioUri(): string;

    /**
     * Indicates the uri of audio
     *
     * @param { string } the uri of audio. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set audioUri(value: string);
  }

  /**
   * 文件夹类型数据，是[File]{@link unifiedDataChannel.File}的子类，用于描述文件夹。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Folder extends File {
    /**
     * 本地文件夹数据uri或网络文件夹uri，本地文件夹数据uri可通过[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}函数获取。
     *
     * @returns { string } the uri of folder [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get folderUri(): string;

    /**
     * Indicates the uri of folder
     *
     * @param { string } the uri of folder [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set folderUri(value: string);
  }

  /**
     * SystemDefinedRecord是[UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord}的子类，也是OpenHarmony系统特有数据类型的基类，用于描述仅在
     * OpenHarmony系统范围内流通的特有数据类型，推荐开发者优先使用SystemDefinedRecord的子类描述数据，如
     * [SystemDefinedForm]{@link unifiedDataChannel.SystemDefinedForm}、
     * [SystemDefinedAppItem]{@link unifiedDataChannel.SystemDefinedAppItem}、
     * [SystemDefinedPixelMap]{@link unifiedDataChannel.SystemDefinedPixelMap}等具体子类。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    class SystemDefinedRecord extends UnifiedRecord {
    /**
     * 是一个字典类型对象，key是string类型，value可以写入number（数值类型）、string（字符串类型）、Uint8Array（二进制字节数组）类型数据。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * Indicates the details of system defined data
     *
     * @returns { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined
     *     data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, int | long | double | string | Uint8Array> | undefined;

    /**
     * Indicates the details of system defined data
     *
     * @param { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined
     *     data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, int | long | double | string | Uint8Array> | undefined);
  }

  /**
   * 系统定义的桌面卡片类型数据，是[SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}的子类。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedForm extends SystemDefinedRecord {
    /**
     * 卡片id。
     *
     * @returns { int } the id of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get formId(): int;

    /**
     * Indicates the id of form
     *
     * @param { int } the id of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set formId(value: int);

    /**
     * 卡片名称。
     *
     * @returns { string } the name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get formName(): string;

    /**
     * Indicates the name of form
     *
     * @param { string } the name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set formName(value: string);

    /**
     * 卡片所属的bundle名。
     *
     * @returns { string } the bundle name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get bundleName(): string;

    /**
     * Indicates the bundle name of form
     *
     * @param { string } the bundle name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set bundleName(value: string);

    /**
     * 卡片对应的ability名。
     *
     * @returns { string } the ability name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get abilityName(): string;

    /**
     * Indicates the ability name of form.
     *
     * @param { string } the ability name of form [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set abilityName(value: string);

    /**
     * 卡片所属的module名。
     *
     * @returns { string } the module of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get module(): string;

    /**
     * Indicates the module of form
     *
     * @param { string } the module of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set module(value: string);
  }

  /**
   * 系统定义的桌面图标类型数据，是[SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}的子类。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedAppItem extends SystemDefinedRecord {
    /**
     * 图标对应的应用id。
     *
     * @returns { string } the app id. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appId(): string;

    /**
     * Indicates the app id
     *
     * @param { string } the app id. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appId(value: string);

    /**
     * 图标对应的应用名。
     *
     * @returns { string } the app name. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appName(): string;

    /**
     * Indicates the app name
     *
     * @param { string } the app name. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appName(value: string);

    /**
     * 图标的图片id。
     *
     * @returns { string } the id of app icon [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appIconId(): string;

    /**
     * Indicates the id of app icon.
     * This field can be sourced from BMS or customized as needed.
     *
     * @param { string } the id of app icon [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appIconId(value: string);

    /**
     * 图标名称对应的标签id。
     *
     * @returns { string } the id of app label [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appLabelId(): string;

    /**
     * Indicates the id of app label.
     * This field can be sourced from BMS or customized as needed.
     *
     * @param { string } the id of app label [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appLabelId(value: string);

    /**
     * 图标对应的应用bundle名。
     *
     * @returns { string } the bundle name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get bundleName(): string;

    /**
     * Indicates the bundle name of app
     *
     * @param { string } the bundle name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set bundleName(value: string);

    /**
     * 图标对应的应用ability名。
     *
     * @returns { string } the ability name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get abilityName(): string;

    /**
     * Indicates the ability name of app
     *
     * @param { string } the ability name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set abilityName(value: string);
  }

  /**
   * 与系统侧定义的[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}数据类型对应的图片数据类型，是
   * [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}的子类，仅保存PixelMap的二进制数据。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedPixelMap extends SystemDefinedRecord {
    /**
     * PixelMap对象的二进制数据。
     *
     * @returns { Uint8Array } the raw data of pixel map. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get rawData(): Uint8Array;

    /**
     * Indicates the raw data of pixel map
     *
     * @param { Uint8Array } the raw data of pixel map. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * ApplicationDefinedRecord是[UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord}的子类，也是应用自定义数据类型的基类，用于描述仅在应用生态内部流通的自
   * 定义数据类型，应用可基于此类进行自定义数据类型的扩展。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class ApplicationDefinedRecord extends UnifiedRecord {
    /**
     * 应用自定义类型标识符，必须以'ApplicationDefined'开头。
     *
     * @returns { string } the type of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get applicationDefinedType(): string;

    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @param { string } the type of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set applicationDefinedType(value: string);

    /**
     * 应用自定义数据类型的二进制数据。
     *
     * @returns { Uint8Array } the raw data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get rawData(): Uint8Array;

    /**
     * Indicates the raw data of application defined data
     *
     * @param { Uint8Array } the raw data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * UDMF已经支持的数据通路枚举类型。其主要用途是标识各种UDMF数据通路所面向的不同业务场景。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum Intention {
    /**
     * 公共数据通路。
     * 
     * **适用场景：** 适用于在公共数据共享场景下使用UDMF来跨应用数据共享。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    DATA_HUB = 'DataHub',

    /**
     * 拖拽类型数据通道。
     * 
     * **适用场景：** 适用于在拖拽场景下使用UDMF来跨应用数据共享。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 'Drag',

    /**
     * 系统分享类型数据通道。
     * 
     * **适用场景：** 适用于在系统分享场景下使用UDMF来跨应用数据共享。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SHARE = 'SystemShare',

    /**
     * Picker类型数据通道。
     * 
     * **适用场景：** 适用于在Picker选择器场景下使用UDMF来跨应用数据共享。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PICKER = 'Picker',

    /**
     * 菜单类型数据通道。
     * 
     * **适用场景：** 适用于在右键菜单场景下使用UDMF来跨应用数据共享。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    MENU = 'Menu'
  }

  /**
   * 表示数据的可见性等级枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum Visibility {
    /**
     * 可见性等级，所有应用可见。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ALL,

    /**
     * 可见性等级，仅数据提供者可见。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OWN_PROCESS
  }

  /**
   * UDMF提供的数据操作接口包含三个可选参数：intention、key和visibility。如果接口不需要这些参数，可以不填，具体要求请参阅该接口的参数说明。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * 表示数据操作相关的数据通路类型，取值为[Intention]{@link unifiedDataChannel.Intention}枚举类型，包括DATA_HUB、DRAG等。不填写时默认无值，具体是否必填请参阅具体接口的参数
     * 说明。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    intention?: Intention;

    /**
     * UDMF中数据对象的唯一标识符，可通过[insertData]{@link unifiedDataChannel.insertData}接口的返回值获取。不填写时默认无值，具体是否必填请参阅具体接口的参数说明。
     * 
     * 由udmf:/、intention、bundleName和groupId四部分组成，以'/'连接，比如：udmf://DataHub/com.ohos.test/0123456789。
     * 
     * 其中udmf:/固定，DataHub为对应枚举的取值，com.ohos.test为包名，0123456789为随机生成的groupId。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    key?: string;

    /**
     * 表示数据的可见性等级，仅公共数据通路可使用，取值为[Visibility]{@link unifiedDataChannel.Visibility}枚举类型。只在写入数据的时候填写才生效，若不填写默认是
     * Visibility.ALL。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    visibility?: Visibility;
  }

  /**
   * 表示文件拷贝冲突时的可选策略的枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * 目标路径存在同文件名时覆盖。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE = 0,

    /**
     * 目标路径存在同文件名时跳过。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP = 1
  }

  /**
   * 表示进度条指示选项的枚举，可选择是否采用系统默认进度显示。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * 不采用系统默认进度显示。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 采用系统默认进度显示，500ms内获取数据完成将不会拉起默认进度条。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 1
  }

  /**
   * 表示从UDMF获取数据时的状态码的枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ListenerStatus {
    /**
     * 表示已完成。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FINISHED = 0,

    /**
     * 表示正在处理中。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    PROCESSING = 1,

    /**
     * 表明本次处理已被取消。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    CANCELED = 2,

    /**
     * 表明发生了内部错误。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INNER_ERROR = 200,

    /**
     * 表示 [GetDataParams]{@link unifiedDataChannel.GetDataParams} 包含无效参数。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 201,

    /**
     * 表示没有获取到数据。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DATA_NOT_FOUND = 202,

    /**
     * 表示同步过程中出现错误。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SYNC_FAILED = 203,

    /**
     * 表示文件拷贝过程中出现错误。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    COPY_FILE_FAILED = 204,
  }

  /**
   * 定义进度上报的数据。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * 系统上报拖拽任务进度百分比。取值范围为[-1-100]的整数，其中-1时代表本次获取数据失败，100时表示本次获取数据完成。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * 系统上报拖拽任务的状态码。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    status: ListenerStatus;
  }

  /**
   * 定义获取进度信息和数据的监听回调函数。
   *
   * @param { ProgressInfo } progressInfo - 定义进度上报的进度信息，用于接收拖拽任务的进度状态和进度百分比。包含progress（进度百分比，取值范围[-1-100]）和status（任务状态码）
   *     两个字段，其中progress为-1表示获取数据失败，100表示获取数据完成。
   * @param { UnifiedData | null } data - 进度达到100时获取的数据，进度未到100时返回null。
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type DataProgressListener = (progressInfo: ProgressInfo, data: UnifiedData | null) => void;

  /**
   * 表示从UDMF获取数据时的参数，包含目标路径、文件冲突选项、进度条类型等。
   * 
   * 具体使用示例可见[拖拽异步获取数据](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-drag-drop.md#示例3拖拽异步获取数据)。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * 定义进度条指示选项，可选择是否采用系统默认进度显示。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * 表示获取统一数据时的进度和数据监听器。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    dataProgressListener: DataProgressListener;

    /**
     * 拷贝文件的目标路径。若不支持文件处理，则不需要设置此参数，默认为空；若支持文件处理，须设置一个已经存在的目录。若应用涉及复杂文件处理策略或需要区分文件多路径存储，建议不设置此参数，由应用自行完成文件copy处理。不填写时获取到
     * 的uri为源端路径URI，填写后获取到的uri为目标路径uri。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * 定义文件拷贝冲突时的选项，默认为OVERWRITE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

        /**
     * 定义接收方对数据类型和数据记录数量的接收能力。延迟加载场景下，发送方可根据此信息生成并返回更合适的数据内容。默认为空，不提供接收方数据接收能力。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    acceptableInfo?: DataLoadInfo;
  }

  /**
   * 用于描述被加载数据的类型与数量。
   * 
   * - 在**数据发送方**中使用，表示实际可提供的数据范围，必须设置该字段。
   * - 在**数据接收方**中使用，表示期望加载的数据类型与数量，可根据需要设置该字段。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadInfo {
    /**
     * 表示数据类型集合，默认为空集合。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    types?: Set<string>;

    /**
     * 表示期望或可提供的最大数据记录数，默认值为0，取值范围为[0, 2<sup>32</sup>-1]。超过取值范围时会按默认值处理。设置为浮点数时，仅使用整数部分。当用于拖拽时，会作为角标数量显示，最大支持2<sup>31</
     * sup>-1，超过此数值时不显示角标。作为角标数量时，优先级低于[DragPreviewOptions]{@link DragPreviewOptions}中的numberBadge方法。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    recordCount?: long;
  }

  /**
   * 用于延迟加载数据的处理函数。支持数据发送方根据接收方传入的信息，动态生成数据，实现更灵活、精准的数据交互策略。
   * 
   * 该处理函数为同步函数，适用于处理简单业务逻辑，若函数业务逻辑较复杂、执行时间较长（3s以上），推荐使用异步处理函数
   * [DelayedDataLoadHandler]{@link unifiedDataChannel.DelayedDataLoadHandler}。
   *
   * @param { DataLoadInfo } acceptableInfo - 表示数据接收方可以接收的数据类型和数量，默认为空。
   * @returns { UnifiedData | null } 当延迟处理函数触发时，返回根据接收方信息生成的UnifiedData对象，用于数据传输。若无法生成数据或生成失败则返回null。
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type DataLoadHandler = (acceptableInfo?: DataLoadInfo) => UnifiedData | null;

  /**
   * 用于延迟加载数据的处理函数。支持数据发送方根据接收方传入的信息，动态生成数据，实现更灵活、精准的数据交互策略。
   * 
   * 该处理函数为异步函数，返回Promise对象，不阻塞主线程，可处理复杂业务逻辑、执行长耗时任务。
   *
   * @param { DataLoadInfo } [acceptableInfo] - 表示数据接收方可以接收的数据类型和数量，默认为空。
   * @returns { Promise<UnifiedData | null> } Promise对象。resolve返回根据接收方信息生成的UnifiedData对象或null，reject返回错误信息。
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type DelayedDataLoadHandler = (acceptableInfo?: DataLoadInfo) => Promise<UnifiedData | null>;

  /**
   * 用于在延迟加载场景下描述发送方的数据加载策略。
   * 
   * 当同时传入loadHandler和delayedDataLoadHandler时，优先使用delayedDataLoadHandler，loadHandler不生效。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadParams {
    /**
     * 表示用于延迟加载数据的处理函数。该处理函数为同步函数，适用于处理简单业务逻辑，若函数业务逻辑较复杂、执行时间较长（3s以上），推荐使用
     * [DelayedDataLoadHandler]{@link unifiedDataChannel.DelayedDataLoadHandler}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    loadHandler: DataLoadHandler;

    /**
     * 用于描述当前发送方可生成的数据类型及数量信息。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    dataLoadInfo: DataLoadInfo;

    /**
     * 表示用于延迟加载数据的异步处理函数。默认值为undefined，不填写时仅使用loadHandler。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    delayedDataLoadHandler?: DelayedDataLoadHandler;
  }

  /**
   * 将数据写入UDMF的公共数据通路中，并生成数据的唯一标识符，使用callback异步回调。
   * 
   * **实现机制：** 系统接收UnifiedData对象后，验证数据完整性并序列化存储。根据intention值路由到对应存储空间，生成唯一标识符key。数据在公共数据通路中由系统管理有效期，默认策略为应用退出后自动清理。
   *
   * @param { Options } options - 配置项参数，参数中intention字段必填，且不支持DRAG，不填时会返回401错误码；其他字段是否填写均不影响接口的使用。
   * @param { UnifiedData } data - 要写入或更新的统一数据对象，用于存储数据记录及其属性信息。
   * @param { AsyncCallback<string> } callback - 回调函数，返回写入UDMF的数据的唯一标识符key的值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * 将数据写入UDMF的公共数据通路中，并生成数据的唯一标识符，使用Promise异步回调。
   *
   * @param { Options } options - 配置项参数，参数中intention字段必填，且不支持DRAG，不填时会返回401错误码；其他字段是否填写均不影响接口的使用。
   * @param { UnifiedData } data - 目标数据。
   * @returns { Promise<string> } Promise对象，返回写入UDMF的数据的唯一标识符key的值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData): Promise<string>;

  /**
   * 更新已写入UDMF的公共数据通路的数据，使用callback异步回调。
   *
   * @param { Options } options - 配置项参数，参数中key字段必填，不填时会返回401错误码；intention参数仅支持DATA_HUB；其他字段是否填写均不影响接口的使用。
   * @param { UnifiedData } data - 目标数据。
   * @param { AsyncCallback<void> } callback - 回调函数。当更新数据成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * 更新已写入UDMF的公共数据通路的数据，使用Promise异步回调。
   *
   * @param { Options } options - 配置项参数，参数中key字段必填，不填时会返回401错误码；intention参数仅支持DATA_HUB；其他字段是否填写均不影响接口的使用。
   * @param { UnifiedData } data - 目标数据。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData): Promise<void>;

  /**
   * 查询UDMF公共数据通路的数据，使用callback异步回调。
   *
   * @param { Options } options - 配置项参数，key和intention均为可选，且intention参数不支持DRAG，根据传入的参数做相应的校验以返回不同的值。
   * @param { AsyncCallback<Array<UnifiedData>> } callback - 回调函数，返回查询到的所有数据。
   *     <br>如果options中填入的是key，则返回key对应的数据；
   *     <br>如果options中填入的是intention，则返回intention下所有数据。
   *     <br>如intention和key均填写了，取两者查询数据的交集，与options只填入key的获取结果一致；如没有交集报错。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * 查询UDMF公共数据通路的数据，使用Promise异步回调。
   *
   * @param { Options } options - 配置项参数，key和intention均为可选，且intention参数不支持DRAG，根据传入的参数做相应的校验以返回不同的值。
   * @returns { Promise<Array<UnifiedData>> } Promise对象，返回查询到的所有数据。
   *     <br>如果options中填入的是key，则返回key对应的数据。
   *     <br>如果options中填入的是intention，则返回intention下所有数据。
   *     <br>如intention和key均填写了，取两者查询数据的交集，与options只填入key的获取结果一致；如没有交集报错。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function queryData(options: Options): Promise<Array<UnifiedData>>;

  /**
   * 删除UDMF公共数据通路的数据，返回删除的数据集，使用callback异步回调。
   *
   * @param { Options } options - 配置项参数，key和intention均为可选，且intention参数仅支持DATA_HUB，根据传入的参数做相应的校验以返回不同的值。
   * @param { AsyncCallback<Array<UnifiedData>> } callback - 回调函数，返回删除的所有数据。
   *     <br>如果options中填入的是key，则删除key对应的数据并返回该数据。
   *     <br>如果options中填入的是intention，则删除intention下所有数据并返回删除的数据。
   *     <br>如intention和key均填写了，取两者数据的交集进行删除，并返回删除的数据，与options只填入key的结果一致；如没有交集报错。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * 删除UDMF公共数据通路的数据，返回删除的数据集，使用Promise异步回调。
   *
   * @param { Options } options - 配置项参数，key和intention均为可选，且intention参数仅支持DATA_HUB，根据传入的参数做相应的校验以返回不同的值。
   * @returns { Promise<Array<UnifiedData>> } Promise对象，返回删除的所有数据。
   *     <br>如果options中填入的是key，则删除key对应的数据并返回该数据。
   *     <br>如果options中填入的是intention，则删除intention下所有数据并返回删除的数据。
   *     <br>如intention和key均填写了，取两者数据的交集进行删除，并返回删除的数据，与options只填入key的结果一致；如没有交集报错。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteData(options: Options): Promise<Array<UnifiedData>>;

  /**
    * 设置应用内拖拽通道数据可使用的范围[ShareOptions]{@link unifiedDataChannel.ShareOptions}，目前仅支持DRAG类型数据通道的管控设置。调用成功后，应用内拖拽通道数据的使用范围被设
    * 置为指定的ShareOptions值。
    *
    * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION [since 14]
    * @param { Intention } intention - 表示数据操作相关的数据通路类型，目前仅支持DRAG类型数据通道。
    * @param { ShareOptions } shareOptions - 指示[UnifiedData]{@link unifiedDataChannel.UnifiedData}支持的设备内使用范围。
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
    *     system API. [since 12 - 13]
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *     2. Incorrect parameter types;
    *     3. Parameter verification failed.
    * @throws { BusinessError } 20400001 - Settings already exist. To reconfigure, remove the existing sharing options.
    * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "
    *     ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION". [since 14]
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi [since 12 - 13]
    * @publicapi [since 14]
    * @stagemodelonly
    * @since 12 dynamic
    * @since 23 static
    */
   function setAppShareOptions(intention: Intention, shareOptions: ShareOptions): void;

   /**
    * 清除[setAppShareOptions]{@link unifiedDataChannel.setAppShareOptions}设置的管控信息。调用成功后，setAppShareOptions设置的管控信息被清除，应用内拖
    * 拽通道数据恢复到默认使用范围。
    *
    * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION [since 14]
    * @param { Intention } intention - 表示数据操作相关的数据通路类型，目前仅支持DRAG类型数据通道。
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
    *     uses system API. [since 12 - 13]
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *     2. Incorrect parameter types;
    *     3. Parameter verification failed.
    * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "
    *     ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION". [since 14]
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi [since 12 - 13]
    * @publicapi [since 14]
    * @stagemodelonly
    * @since 12 dynamic
    * @since 23 static
    */
   function removeAppShareOptions(intention: Intention): void;

  /**
    * 本接口用于将传入的data转换成多样式数据结构。若原data使用多个record去承载同一份数据的不同数据格式，则可以使用此接口将原data转换为多样式数据结构。
    *
    * 当满足以下规则时进行转换，传入的data经转换后变为多样式数据结构：
    *
    * 1. data中的record数量大于1；
    * 2. data中的properties中的tag值为"records_to_entries_data_format"。
    *
    * 否则不会产生任何行为。
    *
    * @param { UnifiedData } data - 需要转换为多样式数据结构的统一数据对象。
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
    *     <br>2.Incorrect parameter types;
    *     <br>3. Parameter verification failed.
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @stagemodelonly
    * @atomicservice
    * @since 17 dynamic
    * @since 23 static
    */
   function convertRecordsToEntries(data: UnifiedData): void;
}

export default unifiedDataChannel;