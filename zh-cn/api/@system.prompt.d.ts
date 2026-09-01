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
 * @file 弹窗
 * @kit ArkUI
 */

/**
 * 定义ShowToast的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.promptAction/promptAction.ShowToastOptions
 */
export interface ShowToastOptions {
  /**
   * 显示的文本信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#message
   */
  message: string;

  /**
   * 默认值1500ms，建议区间：1500ms-10000ms。若小于1500ms则取默认值，最大取值为10000ms。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#duration
   */
  duration?: number;

  /**
   * 设置弹窗边框距离屏幕底部的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 5 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#bottom
   */
  bottom?: string | number;
}

/**
 * 定义按钮的提示信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface Button {
  /**
   * 定义按钮信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  text: string;

  /**
   * 定义按钮颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  color: string;
}

/**
 * 定义ShowDialog的响应。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface ShowDialogSuccessResponse {
  /**
   * 定义数据的索引信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  index: number;
}

/**
 * 定义显示对话框的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface ShowDialogOptions {
  /**
   * 标题文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  title?: string;

  /**
   * 文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  message?: string;

  /**
   * 对话框中按钮的数组，结构为：{text:'button', color: '#666666'}，支持1-6个按钮。大于6个按钮时弹窗不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  buttons?: [Button, Button?, Button?];

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  success?: (data: ShowDialogSuccessResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  cancel?: (data: string, code: string) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  complete?: (data: string) => void;
}

/**
 * 定义ShowActionMenu的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface ShowActionMenuOptions {
  /**
   * 标题文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  title?: string;

  /**
   * 对话框中按钮的数组，结构为：{text:'button', color: '#666666'}，支持1-6个按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  buttons: [Button, Button?, Button?, Button?, Button?, Button?];

  /**
   * 弹出对话框时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  success?: (tapIndex: number, errMsg: string) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  fail?: (errMsg: string) => void;

  /**
   * 关闭对话框时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  complete?: () => void;
}

/**
 * 创建并显示文本提示框、对话框和操作菜单。
 * 
 * > **说明：**
 * >
 * > - 从API version 8 开始，该接口不再维护，推荐使用新接口[@ohos.promptAction (弹窗)]{@link @ohos.promptAction}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export default class Prompt {
  /**
   * 显示文本弹窗。
   *
   * @param { ShowToastOptions } options - 定义ShowToast的选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  static showToast(options: ShowToastOptions): void;

  /**
   * 显示对话框。
   *
   * @param { ShowDialogOptions } options - 定义显示对话框的选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  static showDialog(options: ShowDialogOptions): void;

  /**
   * 显示操作菜单。
   *
   * @param { ShowActionMenuOptions } options - 定义ShowActionMenu的选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  static showActionMenu(options: ShowActionMenuOptions): void;
}