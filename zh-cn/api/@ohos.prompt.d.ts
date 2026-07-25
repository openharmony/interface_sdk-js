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

/**
 * @file
 * @kit ArkUI
 */


import { AsyncCallback } from './@ohos.base';

/**
 * 创建并显示文本提示框、对话框和操作菜单。
 * 
 * > **说明：**
 * >
 * > 从API version 9 开始，该接口不再维护，推荐使用新接口[@ohos.promptAction (弹窗)]{@link @ohos.promptAction}。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.promptAction/promptAction
 */
declare namespace prompt {

  /**
   * 文本提示框的选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions
   */
  interface ShowToastOptions {

    /**
     * 显示的文本信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowToastOptions#message
     */
    message: string;

    /**
     * 默认值1500ms，取值区间：1500ms-10000ms。若小于1500ms则取默认值，若大于10000ms则取上限值10000ms。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowToastOptions#duration
     */
    duration?: number;

    /**
     * 设置弹窗边框距离屏幕底部的位置，无上限值，默认单位vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowToastOptions#bottom
     */
    bottom?: string | number;
  }

  /**
   * 菜单中的菜单项按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.Button
   */
  interface Button {

    /**
     * 按钮文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.Button#text
     */
    text: string;

    /**
     * 按钮文本颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.Button#color
     */
    color: string;
  }

  /**
   * 对话框的响应结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ShowDialogSuccessResponse
   */
  interface ShowDialogSuccessResponse {

    /**
     * 选中按钮在buttons数组中的索引。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogSuccessResponse#index
     */
    index: number;
  }

  /**
   * 对话框的选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ShowDialogOptions
   */
  interface ShowDialogOptions {

    /**
     * 标题文本。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogOptions#title
     */
    title?: string;

    /**
     * 内容文本。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogOptions#message
     */
    message?: string;

    /**
     * 对话框中按钮的数组，结构为：{text:'button', color: '#666666'}，支持1-3个按钮。其中第一个为positiveButton，第二个为negativeButton，第三个为
     * neutralButton。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogOptions#buttons
     */
    buttons?: [Button, Button?, Button?];
  }

  /**
   * 操作菜单的响应结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ActionMenuSuccessResponse
   */
  interface ActionMenuSuccessResponse {

    /**
     * 选中按钮在buttons数组中的索引，从0开始。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ActionMenuSuccessResponse#index
     */
    index: number;
  }

  /**
   * 操作菜单的选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ActionMenuOptions
   */
  interface ActionMenuOptions {

    /**
     * 标题文本。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ActionMenuOptions#title
     */
    title?: string;

    /**
     * 菜单中菜单项按钮的数组，结构为：{text:'button', color: '#666666'}，支持1-6个按钮。大于6个按钮时弹窗不显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ActionMenuOptions#buttons
     */
    buttons: [Button, Button?, Button?, Button?, Button?, Button?];
  }

  /**
   * 创建并显示文本提示框。
   *
   * @param { ShowToastOptions } options - 文本弹窗选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showToast
   */
  function showToast(options: ShowToastOptions): void;

  /**
   * 创建并显示对话框，对话框响应结果异步返回。
   *
   * @param { ShowDialogOptions } options - 页面显示对话框信息描述。
   * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - 对话框响应结果回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
   */
  function showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>): void;

  /**
   * 创建并显示对话框，对话框响应后同步返回结果。
   *
   * @param { ShowDialogOptions } options - 对话框选项。
   * @returns { Promise<ShowDialogSuccessResponse> } 对话框响应结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
   */
  function showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>;

  /**
   * 创建并显示操作菜单，菜单响应结果异步返回。
   *
   * @param { ActionMenuOptions } options - 操作菜单选项。
   * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - 菜单响应结果回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
   */
  function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void;

  /**
   * 创建并显示操作菜单，菜单响应后同步返回结果。
   *
   * @param { ActionMenuOptions } options - 操作菜单选项。
   * @returns { Promise<ActionMenuSuccessResponse> } 菜单响应结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
   */
  function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>;
}

export default prompt;
