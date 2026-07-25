/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file System API
 * @kit ArkUI
 */

/**
 * 定义插件组件模板信息，用于与提供方定义的组件绑定。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface PluginComponentTemplate {
  /**
   * 组件模板，取值可为模板绝对路径（不建议）、相对HAP包的相对路径（多HAP场景使用"相对路径&模块名称"格式）或FA模型下的AbilityName。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  source: string;
  /**
   * 提供方应用的bundleName。使用绝对路径提供模板时不需要填写，使用应用包提供模板时需要填写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  bundleName: string;
}

/**
 * 定义用于构造插件组件的选项。
 *
 * > **说明：**
 * >
 * > 为了规范化匿名对象定义，此处的元素定义已在API版本18中进行修订。
 * > 虽然为匿名对象保留了历史版本信息，但可能会出现外层元素的@since版本号高于内层元素的情况。这不影响接口的可用性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 */
declare interface PluginComponentOptions {
  /**
   * 插件组件模板。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  template: PluginComponentTemplate;

  /**
   * 传给插件组件提供方使用的数据，类型不限（支持对象、字符串等）。具体数据格式由使用方与提供方协商定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  data: any;
}

/**
 * 发生错误时提供的数据。
 *
 * > **说明：**
 * >
 * > 为了规范化匿名对象定义，此处的元素定义已在API版本18中进行修订。
 * > 虽然为匿名对象保留了历史版本信息，但可能会出现外层元素的@since版本号高于内层元素的情况。这不影响接口的可用性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 */
declare interface PluginErrorData {
  /**
   * 错误码。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  errcode: number;

  /**
   * 错误信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  msg: string;
}

/**
 * 发生错误时触发的回调。
 *
 * @param { PluginErrorData } info - 插件错误数据
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * 提供插件组件。
 *
 * > **说明：**
 * >
 * > - 本模块提供的接口为系统接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface PluginComponentInterface {
  /**
   * 创建插件组件，用于显示外部应用提供的UI。
   *
   * @param { object } value [since 9 - 17]
   * @param { PluginComponentOptions } options - 插件组件选项 [since 18]
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  (options: PluginComponentOptions): PluginComponentAttribute;
}

/**
 * 定义插件组件的属性方法。
 *
 * 组件的宽高必须显式设置为非零有效值。
 *
 * [手势事件]{@link ./common}可以分发到提供方页面内部进行处理。
 *
 * 除[通用事件]{@link ./common}外，还支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare class PluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * 组件加载完成时触发回调。
   *
   * @param { function } callback [since 9 - 17]
   * @param { VoidCallback } callback [since 18]
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  onComplete(callback: VoidCallback): PluginComponentAttribute;

  /**
   * 组件加载错误时触发回调。
   *
   * @param { function } callback [since 9 - 17]
   * @param { PluginErrorCallback } callback [since 18]
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  onError(callback: PluginErrorCallback): PluginComponentAttribute;
}

/**
 * 提供外部应用组件嵌入式显示功能，即外部应用提供的UI可在本应用内显示。适用于需要跨应用复用UI组件的场景，如嵌入其他应用的页面或卡片，实现应用间的界面协同与数据交互。如需通过跨进程通信实现更新，请参考[@ohos.pluginComponent]{@link @ohos.pluginComponent}。
 *
 *
 * ###### 子组件
 *
 * 不支持
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare const PluginComponent: PluginComponentInterface;

/**
 * 定义PluginComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare const PluginComponentInstance: PluginComponentAttribute;
