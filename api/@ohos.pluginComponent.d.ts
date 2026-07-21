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
 * The **PluginComponentManager** module provides APIs for the **PluginComponent** user to request components and data
 * and send component templates and data.
 *
 * ###### About the external.json File
 *
 * The **external.json** file is created by developers. It stores component names and template paths in key-value pairs.
 * The component name is used as the keyword, and the corresponding template path is used as the value.
 *
 * **Example**
 *
 * ```json
 * {
 *   "PluginProviderExample": "ets/pages/PluginProviderExample.js",
 *   "plugintemplate2": "ets/pages/plugintemplate2.js"
 * }
 * ```
 *
 * @file PluginComponentManager
 * @kit ArkUI
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';

/**
 * Describes the **PluginComponent** template parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
interface PluginComponentTemplate {
  /**
   * Component template name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  source: string;

  /**
   * Bundle name of the provider ability.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  ability: string;
}

/**
 * Implements a plugin component manager.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare namespace pluginComponentManager {
  /**
   * Defines a key-value pair data structure that conforms to JSON format.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type KVObject = { [key: string]: number | string | boolean | [] | KVObject };

  /**
   * Defines the parameters required when using the **PluginManager.Push** API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface PushParameters {
    /**
     * Ability information of the component user.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    want: Want;

    /**
     * Component name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    name: string;

    /**
     * Component data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * Extra data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData: KVObject;

    /**
     * Path to the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file that
     * stores the template path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Plugin component push parameters which is used in push function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface PushParameterForStage {
    /**
     * Defines owner.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    owner: Want;

    /**
     * Defines target.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    target: Want;

    /**
     * Defines name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    name: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    data: KVObject;

    /**
     * Defines extraData.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    extraData: KVObject;

    /**
     * Defines jsonPath.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Defines the parameters required when using the **PluginManager.Request** API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestParameters {
    /**
     * Ability information of the component user.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    want: Want;

    /**
     * Component name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    name: string;

    /**
     * Component data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * Path to the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file that
     * stores the template path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Plugin component request parameters which is used in request function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface RequestParameterForStage {
    /**
     * Defines owner.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    owner: Want;

    /**
     * Defines target.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    target: Want;
    /**
     * Defines name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    name: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    data: KVObject;

    /**
     * Defines jsonPath.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Provides the result returned after the **PluginManager.Request** API is called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestCallbackParameters {

    /**
     * Component template.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    componentTemplate: PluginComponentTemplate;

    /**
     * Component data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * Extra data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData: KVObject;
  }

  /**
   * Provides the result returned after the request listener is registered and the requested event is received.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestEventResult {
    /**
     * Component template.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    template?: string;

    /**
     * Component data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data?: KVObject;

    /**
     * Extra data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData?: KVObject;
  }

  /**
   * Registers the listener for the push event.
   *
   * @param { Want } source - Information about the push request sender.
   * @param { PluginComponentTemplate } template - Name of the requested component template.
   * @param { KVObject } data - Data.
   * @param { KVObject } extraData - Extra data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * Registers the listener for the request event.
   *
   * @param { Want } source - Information about the request sender.
   * @param { string } name - Template name.
   * @param { KVObject } data - Data.
   * @returns { RequestEventResult } Provides the result returned after the request listener is registered and the
   *     requested event is received. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * Pushes the component and data to the component user.
   *
   * @param { PushParameters } param
   * @param { AsyncCallback<void> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * Requests the component from the component provider.
   *
   * @param { RequestParameters } param - Information about the component request.
   * @param { AsyncCallback<RequestCallbackParameters> } callback - Asynchronous callback used to return the requested
   *     data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Plugin component push method used to send the information of the template it provides.
   *
   * @param { PushParameterForStage } param - Plugin component push parameters for stage.
   * @param { AsyncCallback<void> } callback - Plugin component push event callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function push(param: PushParameterForStage, callback: AsyncCallback<void>): void;

  /**
   * Plugin component request method used to send a request for the information of the template it wants.
   *
   * @param { RequestParameterForStage } param - Plugin component request parameters for stage.
   * @param { AsyncCallback<RequestCallbackParameters> } callback - Plugin component request event callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function request(param: RequestParameterForStage, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Listens for events of the request type and returns the requested data, or listens for events of the push type and
   * receives the data pushed by the provider.
   *
   * @param { string } eventType - Type of the event to listen for. The options are as follows:<br>**"push"**: The
   *     component provider pushes data to the component user.<br>**"request"**: The component user proactively requests
   *     data from the component provider.
   * @param { OnPushEventCallback | OnRequestEventCallback } callback - Callback used to return the result. The type is
   *     [OnPushEventCallback]{@link pluginComponentManager.OnPushEventCallback} for the push event and
   *     [OnRequestEventCallback]{@link pluginComponentManager.OnRequestEventCallback} for the request event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}

export default pluginComponentManager;

export type { PluginComponentTemplate };
