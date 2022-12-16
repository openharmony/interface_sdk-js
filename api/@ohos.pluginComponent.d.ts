/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import Want from './@ohos.application.Want';

/**
 * Plugin component template property.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
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
   * Plugin component push parameters.
   * @since 8
   */
  interface PushParameters {
    want: Want;
    name: string;
    data: KVObject;
    extraData: KVObject;
    jsonPath?: string;
  }

  /**
 * Plugin component push parameters.
 * @since 9
 * @systemapi
 */
  interface PushParameterForStage {
    owner: Want;
    want: Want;
    name: string;
    data: KVObject;
    extraData: KVObject;
    jsonPath?: string;
  }

  /**
   * Plugin component request parameters.
   * @since 8
   */
  interface RequestParameters {
    want: Want;
    name: string;
    data: KVObject;
    jsonPath?: string;
  }

  /**
 * Plugin component request parameters.
 * @since 9
 * @systemapi
 */
  interface RequestParameterForStage {
    owner: Want;
    want: Want;
    name: string;
    data: KVObject;
    jsonPath?: string;
  }

  /**
   * Plugin component request callback parameters.
   * @since 8
   */
  interface RequestCallbackParameters {
    componentTemplate: PluginComponentTemplate;
    data: KVObject;
    extraData: KVObject;
  }

  /**
   * Plugin component request event result value.
   * @since 8
   */
  interface RequestEventResult {
    template?: string;
    data?: KVObject;
    extraData?: KVObject;
  }

  /**
   * Plugin component push event callback.
   * @since 8
   */
  type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * Plugin component request event callback.
   * @since 8
   */

  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * Plugin component push method.
   * @since 8
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * Plugin component request method.
   * @since 8
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
 * Plugin component push method.
 * @param param: Plugin component push parameters for stage.
 * @param callback: Plugin component push event callback.
 * @StageModelOnly
 * @since 9
 * @systemapi
 */
  function push(param: PushParameterForStage, callback: AsyncCallback<void>): void;

  /**
   * Plugin component request method.
   * @param param: Plugin component request parameters for stage.
   * @param callback: Plugin component request event callback.
   * @StageModelOnly
   * @since 9
   * @systemapi
   */
  function request(param: RequestParameterForStage, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Plugin component event listener.
   * @since 8
   */
  function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}

export default pluginComponentManager;
