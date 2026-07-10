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
 * @file
 * @kit ArkUI
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';

/**
 * 插件组件模板属性。
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 插件组件模板属性。
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
interface PluginComponentTemplate {
  /**
   * 定义source
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 定义source
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  source: string;

  /**
   * 定义ability
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 定义ability
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  ability: string;
}

/**
 * 插件组件管理器接口。
 *
 * @namespace pluginComponentManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 插件组件管理器接口。
 *
 * @namespace pluginComponentManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare namespace pluginComponentManager {
  /**
   * 定义KVObject
   *
   * @typedef { object } KVObject
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 定义KVObject
   *
   * @typedef { object } KVObject
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  type KVObject = { [key: string]: number | string | boolean | [] | KVObject }

  /**
   * 插件组件push参数。
   *
   * @interface PushParameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件push参数。
   *
   * @interface PushParameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  interface PushParameters {
    /**
     * 定义want。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */    
    /**
     * 定义want。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */    
    want: Want;

    /**
     * 定义name。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义name。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    name: string;

    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    data: KVObject;

    /**
     * 定义extraData。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义extraData。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    extraData: KVObject;

    /**
     * 定义jsonPath。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义jsonPath。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    jsonPath?: string;
  }

  /**
   * 在push函数中使用的插件组件push参数。
   *
   * @interface PushParameterForStage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface PushParameterForStage {
    /**
     * 定义owner。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    owner: Want;

    /**
     * 定义target。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    target: Want;

    /**
     * 定义name。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    name: string;

    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    data: KVObject;

    /**
     * 定义extraData。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    extraData: KVObject;

    /**
     * 定义jsonPath。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    jsonPath?: string;
  }

  /**
   * 插件组件request参数。
   *
   * @interface RequestParameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件request参数。
   *
   * @interface RequestParameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  interface RequestParameters {
    /**
     * 定义want。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */  
    /**
     * 定义want。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */  
    want: Want;

    /**
     * 定义name。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */  
    /**
     * 定义name。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */  
    name: string;
  
    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */  
    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */  
    data: KVObject;

    /**
     * 定义jsonPath。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义jsonPath。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    jsonPath?: string;
  }

  /**
   * 在request函数中使用的插件组件request参数。
   *
   * @interface RequestParameterForStage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface RequestParameterForStage {
    /**
     * 定义owner。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */    
    owner: Want;

    /**
     * 定义target。
     *
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    target: Want;
    /**
     * 定义name。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    name: string;

    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    data: KVObject;

    /**
     * 定义jsonPath。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */  
    jsonPath?: string;
  }

  /**
   * 插件组件request回调参数。
   *
   * @interface RequestCallbackParameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件request回调参数。
   *
   * @interface RequestCallbackParameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  interface RequestCallbackParameters {

    /**
     * 定义componentTemplate。
     *
     * @type { PluginComponentTemplate }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义componentTemplate。
     *
     * @type { PluginComponentTemplate }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    componentTemplate: PluginComponentTemplate;
  
    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义data。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    data: KVObject;

    /**
     * 定义extraData。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义extraData。
     *
     * @type { KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    extraData: KVObject;
  }

  /**
   * 插件组件request事件结果值。
   *
   * @interface RequestEventResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件request事件结果值。
   *
   * @interface RequestEventResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  interface RequestEventResult {
    /**
     * 定义template。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义template。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    template?: string;

    /**
     * 定义data。
     *
     * @type { ?KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义data。
     *
     * @type { ?KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    data?: KVObject;

    /**
     * 定义extraData。
     *
     * @type { ?KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */ 
    /**
     * 定义extraData。
     *
     * @type { ?KVObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */ 
    extraData?: KVObject;
  }

  /**
   * 插件组件push事件回调。
   *
   * @typedef { function } OnPushEventCallback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件push事件回调。
   *
   * @typedef { function } OnPushEventCallback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * 插件组件request事件回调。
   *
   * @typedef { function } OnRequestEventCallback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件request事件回调。
   *
   * @typedef { function } OnRequestEventCallback
   * @returns { RequestEventResult } 返回request事件结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * 插件组件push方法。
   *
   * @param { PushParameters } param
   * @param { AsyncCallback<void> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件push方法。
   *
   * @param { PushParameters } param
   * @param { AsyncCallback<void> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * 插件组件request方法。
   *
   * @param { RequestParameters } param
   * @param { AsyncCallback<RequestCallbackParameters> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件request方法。
   *
   * @param { RequestParameters } param
   * @param { AsyncCallback<RequestCallbackParameters> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * 插件组件push方法，用于发送其提供的模板信息。
   *
   * @param { PushParameterForStage } param - stage模型的插件组件push参数。
   * @param { AsyncCallback<void> } callback - 插件组件push事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function push(param: PushParameterForStage, callback: AsyncCallback<void>): void;

  /**
   * 插件组件request方法，用于发送其所需模板信息的请求。
   *
   * @param { RequestParameterForStage } param - stage模型的插件组件request参数。
   * @param { AsyncCallback<RequestCallbackParameters> } callback - 插件组件request事件回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function request(param: RequestParameterForStage, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * 插件组件事件监听。
   *
   * @param { string } eventType
   * @param { OnPushEventCallback | OnRequestEventCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 插件组件事件监听。
   *
   * @param { string } eventType
   * @param { OnPushEventCallback | OnRequestEventCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}

export default pluginComponentManager;
export type { PluginComponentTemplate };
