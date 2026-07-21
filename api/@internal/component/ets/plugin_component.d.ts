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
 * @file System API
 * @kit ArkUI
 */

/**
 * PluginComponentTemplate
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface PluginComponentTemplate {
  /**
   * Component template name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  source: string;
  /**
   * Bundle name of the provider ability.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  bundleName: string;
}

/**
 * Defines options for constructing a **PluginComponent**.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 */
declare interface PluginComponentOptions {
  /**
   * Template of the **PluginComponent**, which is bound to the component defined by the provider.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  template: PluginComponentTemplate;

  /**
   * Data passed to the **PluginComponent** provider.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  data: any;
}

/**
 * Data provided when the error occurs.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 */
declare interface PluginErrorData {
  /**
   * Error code.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  errcode: number;

  /**
   * Error message.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  msg: string;
}

/**
 * Callback invoked when an error occurs.
 *
 * @param { PluginErrorData } info - Plugin error data
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * The **PluginComponent** allows an application to display external UI from another application. To implement update
 * through inter-process communication (IPC), see [@ohos.pluginComponent]{@link @ohos.pluginComponent}.
 *
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface PluginComponentInterface {
  /**
   * Creates a **PluginComponent** to display the UI provided by an external application.
   *
   * @param { object } value [since 9 - 17]
   * @param { PluginComponentOptions } options - Configuration options of the **PluginComponent**. [since 18]
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  (options: PluginComponentOptions): PluginComponentAttribute;
}

/**
 * The width and height of the component must be explicitly set to non-zero valid values.
 *
 * [Gesture events]{@link ./common} can be distributed to and processed inside the provider page.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare class PluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * Triggered when the component loading is complete.
   *
   * @param { function } callback - Callback invoked when the component loading is complete. [since 9 - 17]
   * @param { VoidCallback } callback - Callback invoked when the component loading is complete. [since 18]
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  onComplete(callback: VoidCallback): PluginComponentAttribute;

  /**
   * Triggered when an error occurs during component loading.
   *
   * @param { function } callback - Callback invoked when an error occurs. [since 9 - 17]
   * @param { PluginErrorCallback } callback - Callback invoked when an error occurs. [since 18]
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  onError(callback: PluginErrorCallback): PluginComponentAttribute;
}

/**
 * The **PluginComponent** allows an application to display external UI from another application. To implement update
 * through inter-process communication (IPC), see [@ohos.pluginComponent]{@link @ohos.pluginComponent}.
 *
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare const PluginComponent: PluginComponentInterface;

/**
 * Defines PluginComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare const PluginComponentInstance: PluginComponentAttribute;