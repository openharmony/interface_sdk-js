'use static';
/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';

/**
 * Plugin component template property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PluginComponentTemplate {
  /**
   * Defines the source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  source: string;

  /**
   * Defines the ability.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ability: string;
}

/**
 * Plugin component manager interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace pluginComponentManager {
  /**
   * Defines KVObject.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export type KVObject = Record<string, int | long | double | string | boolean | Array<KVObject> | KVObject>;
  /**
   * Plugin component push parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface PushParameters {
    /**
     * Defines want.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    want: Want;

    /**
     * Defines name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    data: KVObject;

    /**
     * Defines extraData.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraData: KVObject;

    /**
     * Defines jsonPath.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    jsonPath?: string;
  }

  /**
   * Plugin component push parameters which is used in push function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export interface PushParameterForStage {
    /**
     * Defines owner.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    owner: Want;

    /**
     * Defines target.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    target: Want;

    /**
     * Defines name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    data: KVObject;

    /**
     * Defines extraData.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    extraData: KVObject;

    /**
     * Defines jsonPath.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    jsonPath?: string;
  }

  /**
   * Plugin component request parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface RequestParameters {
    /**
     * Defines want.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    want: Want;

    /**
     * Defines name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    data: KVObject;

    /**
     * Defines jsonPath.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    jsonPath?: string;
  }

  /**
   * Plugin component request parameters which is used in request function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export interface RequestParameterForStage {
    /**
     * Defines owner.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    owner: Want;

    /**
     * Defines target.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    target: Want;
    /**
     * Defines name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    data: KVObject;

    /**
     * Defines jsonPath.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    jsonPath?: string;
  }

  /**
   * Plugin component request callback parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface RequestCallbackParameters {

    /**
     * Defines componentTemplate.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    componentTemplate: PluginComponentTemplate;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    data: KVObject;

    /**
     * Defines extraData.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraData: KVObject;
  }

  /**
   * Plugin component request event result value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface RequestEventResult {
    /**
     * Defines template.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    template?: string;

    /**
     * Defines data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    data?: KVObject;

    /**
     * Defines extraData.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraData?: KVObject;
  }

  /**
   * Plugin component push event callback.
   *
   * @param { Want } source - Push request sender's relevant information.
   * @param { PluginComponentTemplate } template - Request component template name.
   * @param { KVObject } data - data info.
   * @param { KVObject } extraData - extra data info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * Plugin component request event callback.
   *
   * @param { Want } source - Request the sender to provide relevant information.
   * @param { string } name - Template name.
   * @param { KVObject } data - data info.
   * @returns { RequestEventResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * Plugin component push method.
   *
   * @param { PushParameters } param
   * @param { AsyncCallback<void> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * Plugin component request method.
   *
   * @param { RequestParameters } param
   * @param { AsyncCallback<RequestCallbackParameters> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Plugin component push method used to send the information of the template it provides.
   *
   * @param { PushParameterForStage } param - Plugin component push parameters for stage.
   * @param { AsyncCallback<void> } callback - Plugin component push event callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export function push(param: PushParameterForStage, callback: AsyncCallback<void>): void;

  /**
   * Plugin component request method used to send a request for the information of the template it wants.
   *
   * @param { RequestParameterForStage } param - Plugin component request parameters for stage.
   * @param { AsyncCallback<RequestCallbackParameters> } callback - Plugin component request event callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export function request(param: RequestParameterForStage, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Plugin component event listener.
   *
   * @param { string } eventType
   * @param { OnPushEventCallback | OnRequestEventCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}

export default pluginComponentManager;