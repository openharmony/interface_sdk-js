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
 * 本模块供插件组件的使用方请求组件与数据，供提供方发送组件模板和数据。
 * 
 * ###### 关于 external.json 文件
 * 
 * **external.json**文件由开发者创建。该文件以键值对形式存储组件名称和模板路径。
 * 组件名称作为关键字，对应的模板路径作为值。
 * 
 * **示例**
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
 * 插件组件模板参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
interface PluginComponentTemplate {
  /**
   * 组件模板名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  source: string;

  /**
   * 提供方Ability的bundleName。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  ability: string;
}

/**
 * 插件组件管理器，提供插件组件的请求、推送和事件监听等管理能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare namespace pluginComponentManager {
  /**
   * 以键值对形式存储信息，符合JSON格式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type KVObject = { [key: string]: number | string | boolean | [] | KVObject };

  /**
   * 使用pluginComponentManager.push方法时需要传递的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface PushParameters {
    /**
     * 组件使用方Ability信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    want: Want;

    /**
     * 组件名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    name: string;

    /**
     * 组件数据，以键值对形式存储，用于传递给组件使用方的业务数据，键和值类型由业务定义。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * 附加数据，以键值对形式存储，用于传递额外的业务信息，键和值类型由业务定义。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData: KVObject;

    /**
     * 存放模板路径的external.json文件的路径。
     * 当需要通过外部配置文件直接加载模板而非通过push通信发送时传入此参数；当jsonPath字段不为空时不触发push通信，直接从external.json中读取模板路径进行加载。
     * 不传入或为空时，触发push通信向组件使用方推送组件和数据。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    jsonPath?: string;
  }

  /**
   * 用于设置Stage模型下使用pluginComponentManager.push方法时需要传递的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface PushParameterForStage {
    /**
     * 组件提供方Ability信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    owner: Want;

    /**
     * 组件使用方Ability信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    target: Want;

    /**
     * 组件名称，当jsonPath不为空时需与external.json文件中的键名一致。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    name: string;

    /**
     * 组件数据，以键值对形式存储。用于向组件使用方传递业务数据，如页面路径（key为'js'，value为模板路径字符串）及自定义数据字段。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    data: KVObject;

    /**
     * 附加数据，用于在发送组件时传递额外的自定义数据，与组件数据（data）区分，可根据业务需要设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    extraData: KVObject;

    /**
     * 存放模板路径的external.json文件的路径。当需要从external.json文件加载模板路径而非通过Push通信发送模板时传入此参数。
     * 当jsonPath字段不为空时不触发Push通信，组件模板路径从external.json文件中读取；当jsonPath为空（默认）时，通过Push通信向组件使用方发送组件模板。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    jsonPath?: string;
  }

  /**
   * 使用pluginComponentManager.request方法时需要传递的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestParameters {
    /**
     * 组件提供方Ability信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    want: Want;

    /**
     * 请求组件名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    name: string;

    /**
     * 组件数据，以键值对形式存储，用于传递给组件提供方的业务数据，键和值类型由业务定义。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * 存放模板路径的external.json文件的路径。
     * 当需要通过外部配置文件直接加载模板而非通过request通信获取时传入此参数；当jsonPath字段不为空时不触发request通信，直接从external.json中读取模板路径。
     * 不传入或为空时，触发request通信向组件提供方请求模板。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    jsonPath?: string;
  }

  /**
   * 用于设置Stage模型下使用pluginComponentManager.request方法时需要传递的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  interface RequestParameterForStage {
    /**
     * 组件使用方Ability信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    owner: Want;

    /**
     * 组件提供方Ability信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    target: Want;
    /**
     * 请求组件名称，当jsonPath不为空时需与external.json文件中的键名一致。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    name: string;

    /**
     * 附加数据，以键值对形式存储。用于向组件提供方传递请求时的自定义业务参数，以便提供方根据这些数据返回合适的组件模板。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    data: KVObject;

    /**
     * 存放模板路径的external.json文件的路径。当需要从external.json文件加载模板路径而非通过Request通信获取模板时传入此参数。
     * 当jsonPath字段不为空时不触发Request通信；当jsonPath为空（默认）时，通过Request通信向组件提供方请求组件模板。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 9 dynamic
     */
    jsonPath?: string;
  }

  /**
   * pluginComponentManager.request方法接收到的回调结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestCallbackParameters {

    /**
     * 组件模板。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    componentTemplate: PluginComponentTemplate;

    /**
     * 组件数据，以键值对形式存储，键和值类型由业务定义。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data: KVObject;

    /**
     * 附加数据。该字段为可选字段，不提供时默认不包含在返回结果中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData: KVObject;
  }

  /**
   * 注册request监听方法后，接收到请求事件时回应请求的数据类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  interface RequestEventResult {
    /**
     * 组件模板。该字段为可选字段，不提供时默认不包含在返回结果中。当需要返回组件模板信息时设置此字段；不需要返回模板时可省略。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    template?: string;

    /**
     * 组件数据，以键值对形式存储，用于回应请求时传递的业务数据，键和值类型由业务定义。该字段为可选字段，不提供时默认不包含在返回结果中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    data?: KVObject;

    /**
     * request事件中传递的附加数据。该字段为可选字段，不提供时默认不包含在返回结果中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    extraData?: KVObject;
  }

  /**
   * 对应push事件的监听回调函数。
   *
   * @param { Want } source - push事件发送方相关信息。
   * @param { PluginComponentTemplate } template - 组件模板。
   * @param { KVObject } data - push事件中传递的数据内容，以键值对形式存储，键和值类型由业务定义。
   * @param { KVObject } extraData - push事件中传递的附加数据，以键值对形式存储，键和值类型由业务定义。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * 对应request事件的监听回调函数。
   *
   * @param { Want } source - request请求发送方相关信息。
   * @param { string } name - 请求的组件名称。
   * @param { KVObject } data - request事件中传递的数据内容，以键值对形式存储，键和值类型由业务定义。
   * @returns { RequestEventResult } 返回request事件结果。 [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * 组件提供方向组件使用方主动发送组件和数据。适用于提供方数据更新后需主动通知使用方刷新显示的场景。
   *
   * @param { PushParameters } param - 推送组件的详细参数。
   * @param { AsyncCallback<void> } callback - 此次接口调用的异步回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * 组件使用方向组件提供方主动请求组件。适用于使用方需按需获取提供方组件及数据的场景。
   *
   * @param { RequestParameters } param - 组件模板的详细请求信息。
   * @param { AsyncCallback<RequestCallbackParameters> } callback - 此次请求的异步回调，通过回调接口的参数返回请求所获取的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * 组件提供方向组件使用方主动发送组件与数据。组件使用方需通过onPush事件监听接收数据。
   *
   * @param { PushParameterForStage } param - 组件提供方要发送的参数。
   * @param { AsyncCallback<void> } callback - 此次接口调用的异步回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function push(param: PushParameterForStage, callback: AsyncCallback<void>): void;

  /**
   * 组件使用方向组件提供方主动请求组件。组件提供方需通过onRequest事件监听响应请求，并通过回调返回组件模板信息。
   *
   * @param { RequestParameterForStage } param - 组件模板的详细请求信息。
   * @param { AsyncCallback<RequestCallbackParameters> } callback - 此次请求的异步回调，通过回调接口的参数返回请求响应的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  function request(param: RequestParameterForStage, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * 提供方监听"request"类型的事件，给使用方返回通过request接口主动请求的数据；使用方监听"push"类型的事件，接收提供方通过push接口主动推送的数据。
   *
   * @param { string } eventType - 监听的事件类型，可选值为："push"、"request"。"push"：指组件提供方向使用方主动推送数据。"request"：指组件使用方向提供方主动请求数据。
   * @param { OnPushEventCallback | OnRequestEventCallback } callback - 对应监听回调，
   *     push事件对应回调类型为OnPushEventCallback，request事件对应回调类型为OnRequestEventCallback。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}

export default pluginComponentManager;

export type { PluginComponentTemplate };
