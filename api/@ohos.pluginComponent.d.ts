/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import Want from './@ohos.application.want';

/**
 * Plugin component template property.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 * @systemapi Hide this for inner system use.
 */
interface PluginComponentTemplate {
  source: string;
  ability: string;
}

/**
 * Plugin component manager interface.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare namespace pluginComponentManager {
  type KVObject = {[key: string]: number | string | boolean | [] | KVObject}

  /**
   * Plugin component event listener type
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  export enum EventType {
    /**
     * Indicates the event type of push.
     * @since 9
     */
    EVENT_TYPE_PUSH = "push",

    /**
     * Indicates the event type of request.
     * @since 9
     */
    EVENT_TYPE_REQUEST = "request"
  }

  /**
   * Plugin component push parameters.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface PushParameters {
    /**
     * Indicates the want of the caller.
     */
    owner: Want;
    /**
     * Indicates the want of the plugin template App.
     */
    want: Want;
    /**
     * Indicates the name of the template.
     */
    name: string;
    /**
     * Represents the data passed to the template.
     */
    data: KVObject;
    /**
     * Represents extended data passed to the template.
     */
    extraData: KVObject;
    /**
     * Represents the path to the template json configuration file.
     */
    jsonPath?: string;
  }

  /**
   * Plugin component request parameters.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface RequestParameters {
    /**
     * Indicates the want of the caller.
     */
    owner: Want;
    /**
     * Indicates the want of the plugin template App.
     */
    want: Want;
    /**
     * Indicates the name of the template.
     */
    name: string;
    /**
     * Represents the data passed to the template.
     */
    data: KVObject;
    /**
     * Represents the path to the template's json configuration file.
     */
    jsonPath?: string;
  }

  /**
   * Plugin component request callback parameters.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface RequestCallbackParameters {
    componentTemplate: PluginComponentTemplate;
    data: KVObject;
    extraData: KVObject;
  }

  /**
   * Plugin component request event result value.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface RequestEventResult {
    template?: string;
    data?: KVObject;
    extraData?: KVObject;
  }

  /**
   * Plugin component push event callback.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * Plugin component request event callback.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * Plugin component push method.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;
  function push(param: PushParameters): Promise<void>;

  /**
   * Plugin component request method.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;
  function request(param: RequestParameters): Promise<RequestCallbackParameters>;

  /**
   * Plugin component on event listener.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;

  /**
   * Plugin component on event listener.
   * @param owner Indicates the want of the caller.
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  function on(owner: Want, eventType: EventType, callback: OnPushEventCallback | OnRequestEventCallback): void;

  /**
   * Plugin component cancel event listener.
   * @param owner Indicates the want of the caller.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function off(owner: Want, callback: AsyncCallback<void>): void;
}

export default pluginComponentManager;
