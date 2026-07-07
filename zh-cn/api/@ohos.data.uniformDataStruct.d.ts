/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
 * @file 标准化数据结构
 * @kit ArkData
 */

import image from './@ohos.multimedia.image';

/**
 * 本模块为统一数据管理框架（Unified Data Management Framework，UDMF）的组成部分，针对多对多跨应用数据共享的不同业务场景提供了部分标准化数据类型
 * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}对应的数据结构，方便不同应用间进行数据交互，
 * 减少数据类型适配的工作量。
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uniformDataStruct {
  /**
   * 纯文本类型数据，用于描述和管理纯文本内容。创建PlainText对象后，可用于拖拽、复制粘贴等数据共享场景，实现跨应用的纯文本数据交互。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface PlainText {
    /**
     * 统一数据类型标识为纯文本类型数据，固定为“general.plain-text”，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.plain-text';
    /**
     * 纯文本内容。长度限制为20MB。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    textContent: string;

    /**
     * 纯文本摘要，非必填字段。当需要为文本提供简短摘要时传入此参数（如用于预览、搜索结果展示等场景），不传入时默认值为空字符串，不提供摘要信息。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     */
    abstract?: string;

    /**
     * Indicates the abstract of the PlainText.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    textAbstract?: string;
    
    /**
     * 字典类型对象，key和value均为string类型，用于描述文本内容详细属性。非必填字段，默认值为空字典对象。例如，可生成一个details内容为
     * 
     * {
     * 
     * "title":"标题",
     * 
     * "content":"内容"
     * 
     * }
     * 
     * 的数据对象。当需要存储额外的文本属性信息时传入此参数，不传入时默认值为空字典对象，不提供额外属性。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;
  }

  /**
   * 超链接类型数据，用于描述和管理超链接信息。创建Hyperlink对象后，可用于拖拽、分享等场景，实现跨应用的超链接数据传递和跳转。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface Hyperlink {
    /**
     * 统一数据类型标识为超链接类型数据，固定为“general.hyperlink”，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.hyperlink';
    /**
     * 链接URL地址，支持http、https等协议，需符合标准URL格式。例如：`https://www.example.com`或`file:///path/to/file`。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * 链接内容描述，非必填字段。当需要为超链接提供文字描述时传入此参数（如用于可访问性、链接预览等场景），不传入时默认值为空字符串，不提供描述信息。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    description?: string;
    /**
     * 字典类型对象，key和value均为string类型，用于描述Hyperlink的详细属性内容。非必填字段，默认值为空字典对象。例如，可生成一个details内容为
     * 
     * {
     * 
     * "title":"标题",
     * 
     * "content":"内容"
     * 
     * }
     * 
     * 的数据对象。当需要存储额外的超链接属性信息时传入此参数，不传入时默认值为空字典对象，不提供额外属性。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;
  }

  /**
   * HTML类型数据，用于描述超文本标记语言数据。创建HTML对象后，可在拖拽、复制粘贴等场景中传递富文本内容，支持跨应用的HTML格式数据交互，并可通过uriAuthorizationPolicies控制URI授权策略。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface HTML {
    /**
     * 统一数据类型标识为html类型数据，固定为“general.html”，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.html';

    /**
     * HTML格式的内容文本，支持标准HTML标签。可以是完整的HTML文档或HTML片段。长度限制为20MB。建议使用UTF-8编码。例如：<div>标题
     * 
     * </div>。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    htmlContent: string;
    /**
     * 去除HTML标签后的纯文本内容，非必填字段。当需要提供HTML内容的纯文本版本时传入此参数（如用于文本搜索、无HTML渲染环境的展示等场景），不传入时默认值为空字符串，不提供纯文本版本。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    plainContent?: string;
    /**
     * 字典类型对象，key和value均为string类型，用于描述HTML的详细属性内容。非必填字段，默认值为空字典对象。例如，可生成一个details内容为
     * 
     * {
     * 
     * "title":"标题",
     * 
     * "content":"内容"
     * 
     * }
     * 
     * 的数据对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;

    /**
     * 用于拖拽场景的URI授权策略。默认值为READ（仅读授权），仅在img标签等场景下生效。只针对单个record使用，优先级最高，具体策略见
     * [UriPermission]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UriPermission}。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<int>;
  }

  /**
   * 系统定义的桌面图标类型数据，用于跨应用共享桌面图标信息。典型使用场景包括：桌面启动器拖拽图标、应用商店分享应用图标或创建快捷方式等。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface OpenHarmonyAppItem {
    /**
     * 统一数据类型标识为桌面图标类型数据，固定为“openharmony.app-item”，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.app-item';
    /**
     * 图标对应的应用id。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appId: string;
    /**
     * 图标对应的应用名。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appName: string;
    /**
     * 图标的图片id。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appIconId: string;
    /**
     * 图标名称对应的标签id。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appLabelId: string;
    /**
     * 图标对应的应用bundle名，格式需符合应用包名规范。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * 图标对应的应用ability名。建议遵循Ability组件命名规范：取值为长度不超过127字节的字符串，以字母开头，可包含字母、数字、下划线（_）或点号（.）；确保该名称在整个应用中唯一。推荐使用"包名.Ability名"格式
     * （如"com.example.myapplication.MainAbility"）。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * 字典类型对象，key为string类型，value可包含number（数值类型）、string（字符串类型）或Uint8Array（二进制字节数组）类型数据。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * 内容卡片类型数据，用于跨应用共享内容卡片信息。典型使用场景包括：资讯应用分享文章卡片、电商应用分享商品卡片、社交应用分享内容预览等。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface ContentForm {
    /**
     * 统一数据类型标识为内容卡片类型数据，固定为“general.content-form”。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.content-form';

    /**
     * 内容卡片对应的图片数据。默认值为空。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    thumbData?: Uint8Array;

    /**
     * 内容卡片中的描述信息。默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 内容卡片的标题。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * 内容卡片中的应用图标数据。默认值为空。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    appIcon?: Uint8Array;

    /**
     * 内容卡片中应用的应用名。默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    appName?: string;

    /**
     * 内容卡片对应的跳转超链接，需符合URI格式规范。默认值为空字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    linkUri?: string;
  }

  /**
   * 系统定义的卡片类型数据，用于跨应用共享卡片信息。典型使用场景包括：卡片拖拽分享、卡片内容跨应用传输、桌面小组件数据共享等。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface Form {
    /**
     * 统一数据类型标识为卡片类型数据，固定为“openharmony.form”，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.form';

    /**
     * 卡片id。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    formId: int;

    /**
     * 卡片名。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    formName: string;

    /**
     * 卡片所属的bundle名，格式需符合应用包名规范。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 卡片对应的ability名。建议遵循Ability组件命名规范：取值为长度不超过127字节的字符串，以字母开头，可包含字母、数字、下划线（_）或点号（.）；确保该名称在整个应用中唯一。推荐使用"包名.Ability名"格式（如
     * "com.example.myapplication.MainAbility"）。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 卡片所属的module名。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    module: string;

    /**
     * 字典类型对象，key为string类型，value可包含number（数值类型）、string（字符串类型）或Uint8Array（二进制字节数组）类型数据。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * 文件地址类型数据，用于描述文件的URI地址信息。创建FileUri对象后，可用于文件拖拽、文件共享等场景，支持通过uriAuthorizationPolicies控制文件访问权限，实现跨应用的文件数据传递和权限管理。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface FileUri {
    /**
     * 统一数据类型标识为文件地址类型数据，固定为“general.file-uri”，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.file-uri';

    /**
     * 文件的原始URI路径。支持本地文件绝对路径、file://协议和http/https网络URL格式。长度限制为4096字节。例如：`/data/local/tmp/test.txt`、
     * `file:///data/local/tmp/test.txt`或`http://example.com/file.txt`。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    oriUri: string;

    /**
     * 文件类型（必须是标准化数据类型（即[UTD预置列表](docroot://database/uniform-data-type-list.md)中各类型对应的UTD-ID或自定义UTD-ID）。fileType最大长度限制为1
     * 024个字节，超出限制时抛出异常。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    fileType: string;

    /**
     * 字典类型对象，key为string类型，value可包含number（数值类型）、string（字符串类型）或Uint8Array（二进制字节数组）类型数据。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * 用于拖拽场景的URI授权策略。默认值为READ+WRITE+PERSIST（读+写+持久化授权）。只针对单个record使用，优先级最高，具体策略见
     * [UriPermission]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UriPermission}。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<int>;
  }

  /**
   * 系统定义的像素图类型数据，用于描述图像像素数据。创建PixelMap对象后，可用于图像拖拽、图像共享等场景，实现跨应用的图像数据传递。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface PixelMap {
    /**
     * 统一数据类型标识为像素图类型数据，固定为"openharmony.pixel-map"，数据类型描述信息见
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.pixel-map';

    /**
     * 像素图对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;

    /**
     * 字典类型对象，key为string类型，value可包含number（数值类型）、string（字符串类型）或Uint8Array（二进制字节数组）类型数据。非必填字段，默认值为空字典对象。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }
}

export default uniformDataStruct;