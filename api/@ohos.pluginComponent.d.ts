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
 * Implements a plugin component manager, which provides management capabilities such as requesting, pushing, and
 * event listening for plug-in components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare namespace pluginComponentManager {
  /**
   * Stores information in the form of key-value pairs, conforming to the JSON format.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type KVObject = { [key: string]: number | string | boolean | [] | KVObject };

  /**
   * Defines the parameters required when using the **pluginComponentManager.push** API.
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
     * Component data stored in key-value pairs, used to transfer service data to the component user. The key and value
     * types are defined by the service.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * Extra data stored in key-value pairs, used to transfer additional service information. The key and value types
     * are defined by the service.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData: KVObject;

    /**
     * Path of the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file that
     * stores the template path. This parameter is passed when the template needs to be loaded directly through an
     * external configuration file instead of being sent through Push communication. When **jsonPath** is not empty,
     * Push communication is not triggered, and the template path is read directly from **external.json** for loading.
     * When this parameter is not passed or is empty, Push communication is triggered to push the component and data to
     * the component user.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Sets the parameters to be passed in the **pluginComponentManager.push** API in the stage model.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface PushParameterForStage {
    /**
     * Ability information of the component provider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    owner: Want;

    /**
     * Ability information of the component user.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    target: Want;

    /**
     * Component name. When **jsonPath** is not empty, the component name must be consistent with the key name in the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    name: string;

    /**
     * Component data, stored in key-value pairs. It is used to transfer service data to the component user, such as the
     * page path (if **key** is **'js'**, **value** is the template path string) and custom data fields.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    data: KVObject;

    /**
     * Extra data used to transfer additional custom data when sending a component. It is distinguished from component
     * data (**data**) and can be set based on service requirements.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    extraData: KVObject;

    /**
     * Path of the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file that
     * stores the template path. When **jsonPath** is not empty, Push communication is not triggered, and the component
     * template path is read from the **external.json** file. When **jsonPath** is empty (default), the component
     * template is sent to the component user through Push communication.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Defines the parameters required when using the **pluginComponentManager.request** API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestParameters {
    /**
     * Ability information of the component provider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    want: Want;

    /**
     * Name of the requested component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    name: string;

    /**
     * Component data stored in key-value pairs, used to transfer service data to the component provider. The key and
     * value types are defined by the service.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * Path to the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file that
     * stores the template path. This parameter is passed when the template needs to be loaded directly through an
     * external configuration file instead of being obtained through Request communication. When **jsonPath** is not
     * empty, Request communication is not triggered and the template path is read directly from **external.json**.
     * When this parameter is not passed or is empty, Request communication is triggered to request the template from
     * the component provider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Sets the parameters to be passed in the **pluginComponentManager.request** API in the stage model.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface RequestParameterForStage {
    /**
     * Ability information of the component user.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    owner: Want;

    /**
     * Ability information of the component provider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    target: Want;
    /**
     * Name of the requested component. When **jsonPath** is not empty, it must be consistent with the key name in the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    name: string;

    /**
     * Extra data stored in key-value pairs, used to transfer custom service parameters to the component provider during
     * a request, so that the provider can return an appropriate component template based on the data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    data: KVObject;

    /**
     * Path of the
     * [external.json](docroot://reference/apis-arkui/js-apis-plugincomponent.md#about-the-externaljson-file) file that
     * stores the template path. This parameter is passed when the template path needs to be loaded from the
     * **external.json** file instead of being obtained through Request communication. When **jsonPath** is not empty,
     * Request communication is not triggered. When **jsonPath** is empty (default), the component template is
     * requested from the component provider through Request communication.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    jsonPath?: string;
  }

  /**
   * Provides the result returned after the **pluginComponentManager.request** API is called.
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
     * Component data stored in key-value pairs. The key and value types are defined by the service.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * Extra data. This is an optional parameter. If not provided, it is not included in the returned result by
     * default.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData: KVObject;
  }

  /**
   * Provides the data type used to respond to a request event after the request listener is registered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestEventResult {
    /**
     * Component template. This is an optional parameter. If not provided, it is not included in the return result by
     * default. Set this parameter when the component template information needs to be returned; it can be omitted when
     * the template is not required.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    template?: string;

    /**
     * Component data stored in key-value pairs, used to transfer service data when responding to a request. The key
     * and value types are defined by the service. This is an optional parameter. If not provided, it is not included
     * in the return result by default.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data?: KVObject;

    /**
     * Extra data passed in the request event. This is an optional parameter. If not provided, it is not included in
     * the return result by default.
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
   * @param { PluginComponentTemplate } template - Component template.
   * @param { KVObject } data - Data content transmitted in the push event, stored in key-value pairs. The key and value
   *     types are defined by the service.
   * @param { KVObject } extraData - Extra data transmitted in the push event, stored in key-value pairs. The key and
   *     value types are defined by the service.
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
   * @param { string } name - Name of the requested component.
   * @param { KVObject } data - Data content transmitted in the request event, stored in key-value pairs. The key and
   *     value types are defined by the service.
   * @returns { RequestEventResult } Data type for responding to a request event after the request listener is
   *     registered. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * Pushes the component and data to the component user. This API is applicable to scenarios where the provider needs
   * to proactively notify the user to refresh the display after data is updated.
   * <br>Cooperation method: The user must first call
   * [on('push', callback)](docroot://reference/apis-arkui/js-apis-plugincomponent.md#plugincomponentmanageron) to
   * register a push event listener before receiving the components and data pushed through this API. If the user does
   * not register the listener, the pushed data cannot be received.
   *
   * @param { PushParameters } param - Detailed parameters for pushing the component.
   * @param { AsyncCallback<void> } callback - Asynchronous callback used to return the result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * Requests the component from the component provider. This API is applicable to scenarios where the user needs to
   * obtain the provider's components and data on demand.
   * <br>Cooperation method: The provider must first call
   * [on('request', callback)](docroot://reference/apis-arkui/js-apis-plugincomponent.md#plugincomponentmanageron) to
   * register a request event listener before receiving the request initiated by the user through this API and
   * returning data. If the provider does not register the listener, the request cannot be responded to.
   *
   * @param { RequestParameters } param - Details about the component template request.
   * @param { AsyncCallback<RequestCallbackParameters> } callback - Asynchronous callback for this request, used to
   *     return the data obtained from the request through the parameter of the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Proactively pushes the component and data to the component user. This API applies to scenarios where the plug-in
   * component template needs to be proactively pushed, for example, cross-application content sharing and proactive
   * refresh of home screen cards. **push** is proactively initiated by the component provider, while **request** is
   * proactively initiated by the component user. Note that the two have similar parameter structures but opposite
   * meanings of **owner** and **target**, so do not confuse them. The component user must listen for the received
   * data through the **onPush** event. For details about the event listener API, see
   * [@ohos.pluginComponent (PluginComponentManager)](docroot://reference/apis-arkui/js-apis-plugincomponent.md#plugincomponentmanageron).
   *
   * @param { PushParameterForStage } param - Parameters to be sent by the component provider.
   * @param { AsyncCallback<void> } callback - Asynchronous callback used to return the result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function push(param: PushParameterForStage, callback: AsyncCallback<void>): void;

  /**
   * Requests the component from the component provider. This API applies to scenarios where the component user needs
   * to dynamically obtain the plug-in component template on demand, for example, dynamically loading plug-in content
   * provided by other applications and displaying cross-application components on demand. The component provider must
   * listen for the request response through the **onRequest** event, and return the component template information
   * through a callback. For details about the event listener API, see
   * [@ohos.pluginComponent (PluginComponentManager)](docroot://reference/apis-arkui/js-apis-plugincomponent.md#plugincomponentmanageron).
   *
   * @param { RequestParameterForStage } param - Details about the component template request.
   * @param { AsyncCallback<RequestCallbackParameters> } callback - Asynchronous callback for this request, which
   *     returns the request response data through the parameter of the callback.
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
   * @param { string } eventType - Event type to listen for. The options are as follows:<br>**"push"**: The component
   *     provider proactively pushes data to the user.<br>**"request"**: The component user proactively requests data
   *     from the provider.
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
