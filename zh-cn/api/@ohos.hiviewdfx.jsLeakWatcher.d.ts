/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit PerformanceAnalysisKit
 */

/**
 * 本模块提供了监控ArkTS对象是否发生泄漏的能力，可在应用开发、测试阶段发现并定位ArkTS对象的内存泄漏问题。
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @since 12 dynamic
 * @since 26.1.0 static
 */
declare namespace jsLeakWatcher {
  /**
   * 使能ArkTS对象泄漏检测，默认关闭。开启后会收集泄漏信息，可能增加性能开销。
   *
   * @param { boolean } isEnable - 是否使能jsLeakWatcher。true：使能jsLeakWatcher；false：不使能jsLeakWatcher。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.1.0 static
   */
  function enable(isEnable: boolean): void;

  /**
   * 注册待检测泄漏的对象。
   *
   * @param { object } obj - 需要检测的对象。<br>**说明**：可传入任何非null的ArkTS对象，不支持undefined和基本类型。
   * @param { string } msg - 自定义对象信息。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.1.0 static
   */
  function watch(obj: object, msg: string): void;

  /**
   * 获取已通过jsLeakWatcher.watch注册发生泄漏的对象列表，触发GC后未被回收的对象会被标记为泄漏。
   *
   * @returns { string } 触发GC后未被回收的泄漏对象列表。
   *     <br>**说明**：check成功，返回JSON格式的泄漏对象列表；check失败，返回空字符串。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.1.0 static
   */
  function check(): string;

  /**
   * 导出泄漏列表和虚拟机内存快照。
   *
   * @param { string } filePath - 导出信息生成的文件存放的路径。<br>**说明**：从API version 24开始，进程生命周期内，仅保留最新的一份快照信息。
   * @returns { Array<string> } 导出结果。分别为文件名后缀为.jsleaklist的泄漏列表和文件名后缀为.heapsnapshot虚拟机内存快照文件。
   *     <br>**说明**：dump成功，返回泄漏列表文件路径和虚拟机内存快照路径；dump失败，返回空数组。
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.1.0 static
   */
  function dump(filePath: string): Array<string>;

  /**
   * 使能ArkTS对象泄漏检测。
   * 
   * 此接口通过一次调用即可检测ArkTS对象的内存泄漏，比之前需要调用四个函数（enable、watch、check、dump）的方法更加简洁。
   *
   * @param { boolean } isEnabled - 是否使能ArkTS对象内存泄漏检测功能。true：开启ArkTS内存泄漏检测功能；false：关闭ArkTS内存泄漏检测功能。
   * @param { Array<string> } configs - 配置项，数组中每个元素为监测具体对象的类型。<br>可配置项包括：XComponent，NodeContainer，Window，CustomComponent
   *     和Ability。<br>**说明**：传入空数组代表监测以上全部对象。
   * @param { Callback<Array<string>> } callback - 回调函数，用于接收jsLeakWatcher.enableLeakWatcher接口返回的内存泄漏文件列表和虚拟机内存快照文件。<br>回调函数中传入一个数组
   *     对象，索引0为泄漏列表文件名，后缀为.jsleaklist；索引1为虚拟机内存快照文件名，后缀为.rawheap。
   * @throws { BusinessError } 10801001 - The parameter isEnabled is invalid.
   * @throws { BusinessError } 10801002 - The parameter config is invalid.
   * @throws { BusinessError } 10801003 - The parameter callback is invalid.
   *     Input parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function enableLeakWatcher(isEnabled: boolean, configs: Array<string>, callback: Callback<Array<string>>): void;

  /**
   * 需要监控的组件对象类型枚举。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  export declare enum MonitorObjectType {
    /**
     * 监测所有组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    ALL = -1,
    /**
     * 监测自定义组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    CUSTOM_COMPONENT = 1 << 0,
    /**
     * 监测Window组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    WINDOW = 1 << 1,
    /**
     * 监测NodeContainer组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    NODE_CONTAINER = 1 << 2,
    /**
     * 监测XComponent组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    X_COMPONENT = 1 << 3,
    /**
     * 监测Ability组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    ABILITY = 1 << 4
  }

  /**
   * LeakWatcherConfig对象类型，对象中包含多个用于内存泄漏监测的可配置属性。
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  interface LeakWatcherConfig {
    /**
     * 被监测对象类型。
     * 
     * 默认监测所有组件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    monitorObjectTypes: MonitorObjectType;
    /**
     * 被监测泄漏对象ID列表。
     * 
     * 只作用于自定义组件，不会影响其他组件类型的监测。
     * 
     * 例如：白名单中设置的对象类名ID与自定义ID列表存在相同值时，生效自定义ID列表参数。
     * 
     * 默认为空数组。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    objectUniqueIDs?: Array<int>;
    /**
     * 每轮泄漏检测间隔时间，单位：ms，取值范围为[90000, +∞)。
     * 
     * 默认为90000ms。
     * 
     * 如果应用输入的自定义检测间隔时间小于默认值，JSLeakWatcher强制将间隔设置为默认值。
     * 
     * 当前jsLeakWatcher泄漏检测性能开销较大，会导致应用卡顿，建议增大该参数，减少卡顿频率。
     * 
     * 传入不在取值范围内的值时将使用默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    checkInterval?: int;
    /**
     * 应用在前台泄漏个数达到设定值触发dump，取值范围为[0, +∞)。
     * 
     * GC/Dump阶段，大于等于5时触发Dump。
     * 
     * 阈值默认为5。
     * 
     * 传入不在取值范围内的值时将使用默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    fgLeakCountThreshold?: int;
    /**
     * 应用在后台泄漏个数达到设定值触发dump，取值范围为[0, +∞)。
     * 
     * GC/Dump阶段，大于等于1时触发Dump。
     * 
     * 阈值默认为1。
     * 
     * 传入不在取值范围内的值时将使用默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    bgLeakCountThreshold?: int;
    /**
     * 最大dump保存个数，取值范围为(0, 10]，避免磁盘空间占满，超过则删除时间戳最小的rawheap、jsleaklist文件。
     * 
     * 默认保存10个rawheap、10个jsleaklist文件。
     * 
     * 传入不在取值范围内的值时将使用默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    maxStoredHeapDumps?: int;
    /**
     * 延迟执行dump，保证GC能调度且执行完再执行dump，延迟间隔小于等于泄漏检测间隔时间，单位：ms，取值范围为[0, +∞)。
     * 
     * 设置延迟时长超过泄漏间隔时长则默认与泄漏间隔时长保持一致。
     * 
     * 若无新增泄漏对象将不会触发dump。
     * 
     * GC结束后默认延迟5秒执行dump。
     * 
     * 传入不在取值范围内的值时将使用默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    dumpHeapWaitTimeMs?: int;
    /**
     * 过滤不想监测的对象类名。
     * 
     * 作用于Window、CustomComponent和Ability组件，不会影响其他组件类型的过滤。
     * 
     * 存在混淆问题时无法进行过滤，只在开发态生效。
     * 
     * 配置项冲突优先级：ID列表 > 白名单。
     * 
     * 默认为空数组。
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    exclusionList?: Array<string>;
  }

  /**
   * 使能ArkTS对象泄漏检测。
   * 
   * 此接口通过一次调用即可检测ArkTS对象的内存泄漏，比之前需要调用四个函数（enable、watch、check、dump）的方法更加简洁；通过configs可配置项参数，自定义设置监测项各属性，相比较之前极大提升了泄漏检测性能。
   *
   * > **注意**
   * >
   * > 当前jsLeakWatcher泄漏检测性能开销较大，会导致应用卡顿，建议增大检测间隔时间，减少卡顿频率。
   *
   * @param { boolean } isEnabled - 是否使能ArkTS对象内存泄漏检测功能。<br>true：开启ArkTS内存泄漏检测功能。<br>false：关闭ArkTS内存泄漏检测功能。
   * @param { LeakWatcherConfig } configs - LeakWatcherConfig对象类型，对象中包含多个用于内存泄漏监测的可配置属性。<br>**说明**：对象中参数类型传入空值或假值代表该属性设置
   *     为默认值。
   * @param { Callback<Array<string>> } callback - 回调函数，用于接收泄漏检测的导出文件路径。<br>回调函数中传入一个数组
   *     对象，索引0为泄漏列表文件名，后缀为.jsleaklist；索引1为虚拟机内存快照文件名，后缀为.rawheap。
   * @throws { BusinessError } 10801001 - The parameter isEnabled is invalid.
   * @throws { BusinessError } 10801002 - The parameter config is invalid.
   * @throws { BusinessError } 10801003 - The parameter callback is invalid.
   *     Input parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function enableLeakWatcher(isEnabled: boolean, configs: LeakWatcherConfig, callback: Callback<Array<string>>): void;
}

export default jsLeakWatcher;