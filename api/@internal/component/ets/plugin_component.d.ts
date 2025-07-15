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

/*** if arkts 1.2 */
import { CommonMethod } from './common'
import { VoidCallback } from './units'
/*** endif */

/**
 * PluginComponentTemplate
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'9','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PluginComponentTemplate {
  /**
   * Defines the plugin source name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'9','1.2':'20'}
   * @arkts 1.1&1.2
   */
  source: string;
  /**
   * Defines the bundle name of the Template.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'9','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bundleName: string;
}

/**
 * Define options used to construct a plugin component.
 * AnonyMous Object Rectification
 *
 * @interface PluginComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PluginComponentOptions {
  /**
   * Plugin component template.
   * @type { PluginComponentTemplate }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * Plugin component template.
   * AnonyMous Object Rectification
   * @type { PluginComponentTemplate }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  template: PluginComponentTemplate;

  /**
   * Plugin component data.
   * @type { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * Plugin component data.
   * AnonyMous Object Rectification
   * @type { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18
   */
  data: any;
  /**
   * Plugin component data.
   * AnonyMous Object Rectification
   * @type { Object|undefined|null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   * @arkts 1.2
   */
  data: Object|undefined|null;
}

/**
 * Data provided when an error occurs.
 * AnonyMous Object Rectification
 *
 * @interface PluginErrorData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PluginErrorData {
  /**
   * Error code.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * Error code.
   * AnonyMous Object Rectification
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  errcode: number;

  /**
   * Error message.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * Error message.
   * AnonyMous Object Rectification
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  msg: string;
}

/**
 * Callback invoked when an error occurs.
 * AnonyMous Object Rectification
 *
 * @typedef { function } PluginErrorCallback
 * @param { PluginErrorData } info - Plugin error data
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * Provides plugin component.
 *
 * @interface PluginComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'9','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PluginComponentInterface {
  /**
   * Called when setting the plugin.
   *
   * @param { object } value
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * Called when setting the plugin.
   * AnonyMous Object Rectification
   *
   * @param { PluginComponentOptions } options - Plugin component options
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options: PluginComponentOptions): PluginComponentAttribute;
}

/**
 * Defines the plugin component attribute functions.
 *
 * @extends CommonMethod<PluginComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'9','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class PluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * pluginComponent onComplete callback,
   *
   * @param { function } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * PluginComponent onComplete callback
   * AnonyMous Object Rectification
   *
   * @param { VoidCallback } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onComplete(callback: VoidCallback): PluginComponentAttribute;

  /**
   * pluginComponent onError callback,
   *
   * @param { function } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * PluginComponent onError callback
   * AnonyMous Object Rectification
   *
   * @param { PluginErrorCallback } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onError(callback: PluginErrorCallback): PluginComponentAttribute;
}

/**
 * Defines PluginComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9
 */
declare const PluginComponent: PluginComponentInterface;

/**
 * Defines PluginComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9
 */
declare const PluginComponentInstance: PluginComponentAttribute;
