/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * PluginComponentTemplate
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface PluginComponentTemplate {
  /**
   * 定义插件来源名称。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  source: string;
  /**
   * 定义模板的bundleName。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  bundleName: string;
}

/**
 * 定义用于构造插件组件的选项。
 * AnonyMous Object Rectification
 *
 * @interface PluginComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare interface PluginComponentOptions {
  /**
   * 插件组件模板。
   * @type { PluginComponentTemplate }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * 插件组件模板。
   * AnonyMous Object Rectification
   * @type { PluginComponentTemplate }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  template: PluginComponentTemplate;

  /**
   * 插件组件数据。
   * @type { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * 插件组件数据。
   * AnonyMous Object Rectification
   * @type { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  data: any;
}

/**
 * 发生错误时提供的数据。
 * AnonyMous Object Rectification
 *
 * @interface PluginErrorData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare interface PluginErrorData {
  /**
   * 错误码。
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * 错误码。
   * AnonyMous Object Rectification
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  errcode: number;

  /**
   * 错误信息。
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * 错误信息。
   * AnonyMous Object Rectification
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  msg: string;
}

/**
 * 发生错误时触发的回调。
 * AnonyMous Object Rectification
 *
 * @typedef { function } PluginErrorCallback
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
 * @interface PluginComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface PluginComponentInterface {
  /**
   * 设置插件时调用。
   *
   * @param { object } value
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * 设置插件时调用。
   * AnonyMous Object Rectification
   *
   * @param { PluginComponentOptions } options - 插件组件选项
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  (options: PluginComponentOptions): PluginComponentAttribute;
}

/**
 * 定义插件组件的属性方法。
 *
 * @extends CommonMethod<PluginComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare class PluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * pluginComponent的onComplete回调，
   *
   * @param { function } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * PluginComponent的onComplete回调
   * AnonyMous Object Rectification
   *
   * @param { VoidCallback } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  onComplete(callback: VoidCallback): PluginComponentAttribute;

  /**
   * pluginComponent的onError回调，
   *
   * @param { function } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * PluginComponent的onError回调
   * AnonyMous Object Rectification
   *
   * @param { PluginErrorCallback } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  onError(callback: PluginErrorCallback): PluginComponentAttribute;
}

/**
 * 定义PluginComponent组件。
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
