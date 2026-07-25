/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * 通过不同的uri访问不同的页面。
 * 
 * > **说明：**
 * >
 * > - 从API version 8 开始，该接口不再维护，推荐使用新接口[@ohos.router](docroot://reference/apis-arkui/js-apis-md)。
 *
 * @file 页面路由
 * @kit ArkUI
 */

/**
 * 定义路由器的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.router#RouterOptions
 */
export interface RouterOptions {
  /**
   * 目标页面的uri，可以是以下的两种格式：
   * 
   * 1. 页面的绝对路径，由config.json文件中的页面列表提供。例如：
   * 
   * - pages/index/index
   * - pages/detail/detail
   * 
   * 2. 特定路径。如果URI为斜杠（/），则显示主页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.RouterOptions#url
   */
  uri: string;

  /**
   * 表示路由跳转时要同时传递到目标页面的数据。跳转到目标页面后，使用getParams()获取传递的参数，此外，在类web范式中，参数也可以在页面中直接使用，如this.keyValue(keyValue为跳转时params参数中的
   * key值)，如果目标页面中已有该字段，则其值会被传入的字段值覆盖。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.RouterOptions#params
   */
  params?: Object;
}

/**
 * 定义路由器返回的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#RouterOptions
 */
export interface BackRouterOptions {
  /**
   * 返回到指定uri的界面，如果页面栈上没有uri页面，则不响应该情况。如果uri未设置，则返回上一页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterOptions#url
   */
  uri?: string;

  /**
   * 返回时要同时传递到目标页面的数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 7 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.RouterOptions#params
   */
  params?: Object;
}

/**
 * 定义路由器的状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#RouterState
 */
export interface RouterState {
  /**
   * 表示当前页面在页面栈中的索引。从栈底到栈顶，index从1开始递增。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterState#index
   */
  index: number;

  /**
   * 表示当前页面的名称，即对应文件名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterState#name
   */
  name: string;

  /**
   * 表示当前页面的路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterState#path
   */
  path: string;
}

/**
 * 定义EnableAlertBeforeBackPage选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#EnableAlertOptions
 */
export interface EnableAlertBeforeBackPageOptions {
  /**
   * 询问对话框内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.EnableAlertOptions#message
   */
  message: string;

  /**
   * 用户选择对话框确认按钮时触发，errMsg表示返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#EnableAlertOptions
   */
  success?: (errMsg: string) => void;

  /**
   * 用户选择对话框取消按钮时触发，errMsg表示返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#EnableAlertOptions
   */
  cancel?: (errMsg: string) => void;

  /**
   * 当对话框关闭时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#EnableAlertOptions
   */
  complete?: () => void;
}

/**
 * 定义DisableAlertBeforeBackPage参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#RouterOptions
 */
export interface DisableAlertBeforeBackPageOptions {
  /**
   * 关闭询问对话框成功时触发，errMsg表示返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#RouterOptions
   */
  success?: (errMsg: string) => void;

  /**
   * 关闭询问对话框失败时触发，errMsg表示返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#RouterOptions
   */
  cancel?: (errMsg: string) => void;

  /**
   * 当对话框关闭时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#RouterOptions
   */
  complete?: () => void;
}

/**
 * 路由参数列表。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router.RouterOptions#params
 */
type ParamsInterface = {
  [key: string]: Object;
};

/**
 * 通过不同的uri访问不同的页面。
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#router
 */
export default class Router {
  /**
   * 跳转到应用内的指定页面。
   * 
   * > **说明：**
   * >
   * > 页面路由栈支持的最大Page数量为32。
   *
   * @param { RouterOptions } options - 页面路由参数，详细请参考RouterOptions。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#push
   */
  static push(options: RouterOptions): void;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。
   *
   * @param { RouterOptions } options - 页面路由参数，详细请参考RouterOptions。
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.router#replace
   */
  static replace(options: RouterOptions): void;

  /**
   * 返回上一页面或指定的页面。
   *
   * @param { BackRouterOptions } options - 详细请参考BackRouterOptions。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#back
   */
  static back(options?: BackRouterOptions): void;

  /**
   * 获取当前页面的参数信息。
   *
   * @returns { ParamsInterface } 详细请参见ParamsInterface。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#getParams
   */
  static getParams(): ParamsInterface;

  /**
   * 清空页面栈中的所有历史页面，仅保留当前页面作为栈顶页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#clear
   */
  static clear(): void;

  /**
   * 获取当前在页面栈内的页面数量。
   *
   * @returns { string } 页面数量，页面栈支持最大数值是32。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#getLength
   */
  static getLength(): string;

  /**
   * 获取当前页面的状态信息。
   *
   * @returns { RouterState } 详细请参见RouterState。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#getState
   */
  static getState(): RouterState;

  /**
   * 开启页面返回询问对话框。
   *
   * @param { EnableAlertBeforeBackPageOptions } options - 详细请参见EnableAlertBeforeBackPageOptions。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#showAlertBeforeBackPage
   */
  static enableAlertBeforeBackPage(options: EnableAlertBeforeBackPageOptions): void;

  /**
   * 禁用页面返回询问对话框。
   *
   * @param { DisableAlertBeforeBackPageOptions } options - 详细请参见DisableAlertBeforeBackPageOptions。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#hideAlertBeforeBackPage
   */
  static disableAlertBeforeBackPage(options?: DisableAlertBeforeBackPageOptions): void;
}