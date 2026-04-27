/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';
import type Context from './application/Context';
import type { PanelInfo } from './@ohos.selectionInput.SelectionPanel';

/**
 * 本模块提供划词管理能力，包括创建窗口、显示窗口、移动窗口、隐藏窗口、销毁窗口、监听鼠标划词事件、获取选中文本等。
 * 
 * > **说明：**
 * > - 本模块仅支持PC/2in1设备。
 * > - 仅支持集成了划词扩展的应用调用。
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */

declare namespace selectionManager {
  /**
   * 订阅划词完成事件。使用callback异步回调。
   *
   * @param { 'selectionCompleted' } type - 设置监听类型，固定取值为'selectionCompleted'。
   * @param { Callback<SelectionInfo> } callback - 回调函数，返回当前划词信息。
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @since 20 dynamic
   */
  function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void;

  /**
   * 订阅划词完成事件。使用callback异步回调。
   *
   * @param { Callback<SelectionInfo> } callback - 回调函数，返回当前划词信息。
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 static
   */
  function onSelectionComplete(callback: Callback<SelectionInfo>): void;

  /**
   * 取消订阅划词完成事件。使用callback异步回调。
   *
   * @param { 'selectionCompleted' } type - 设置监听类型，固定取值为'selectionCompleted'。
   * @param { Callback<SelectionInfo> } [callback] - 回调函数，返回SelectionInfo。参数不填写时，取消订阅type对应的所有回调事件。
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @since 20 dynamic
   */
  function off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>): void;

  /**
   * 取消订阅划词完成事件。使用callback异步回调。
   *
   * @param { Callback<SelectionInfo> } [callback] - 回调函数，返回SelectionInfo。参数不填写时，取消订阅type对应的所有回调事件。
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 static
   */
  function offSelectionComplete(callback?: Callback<SelectionInfo>): void;

  /**
   * 获取选中文本的内容。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回当前选中文本的内容。
   * @throws { BusinessError } 33600001 - Selection service exception.
   * @throws { BusinessError } 33600004 - The interface is called too frequently.
   * @throws { BusinessError } 33600005 - The interface is called at the wrong time.
   * @throws { BusinessError } 33600006 - The current application is prohibited from accessing content.
   * @throws { BusinessError } 33600007 - The length of selected content is out of range.
   * @throws { BusinessError } 33600008 - Getting the selected content times out.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 22 - 23]
   * @publicapi [since 24]
   * @since 22 dynamic
   * @since 24 static
   */
  function getSelectionContent(): Promise<string>;

  /**
   * 创建划词面板。使用Promise异步回调。
   * 单个划词应用仅允许创建一个[主面板类型]{@link @ohos.selectionInput.SelectionPanel}和一个
   * [菜单面板类型]{@link @ohos.selectionInput.SelectionPanel}的窗口。
   *
   * @param { Context } ctx - 当前划词面板依赖的上下文信息。
   * @param { PanelInfo } info - 划词面板信息。
   * @returns { Promise<Panel> } Promise对象，返回当前创建的划词面板对象。
   * @throws { BusinessError } 33600001 - Selection service exception.
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>;

  /**
   * 销毁划词面板。使用Promise异步回调。
   *
   * @param { Panel } panel - 要销毁的面板对象。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 33600001 - Selection service exception.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  function destroyPanel(panel: Panel): Promise<void>;

  /**
   * 划词事件信息。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  interface SelectionInfo {
    /**
     * 触发划词类型。
     *
     * @default MOUSE_MOVE
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    selectionType: SelectionType;

    /**
     * 划词起始位置的屏幕x轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startDisplayX: int;

    /**
     * 划词起始位置的屏幕y轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startDisplayY: int;

    /**
     * 划词结束位置的屏幕x轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endDisplayX: int;

    /**
     * 划词结束位置的屏幕y轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endDisplayY: int;

    /**
     * 划词起始位置的窗口x轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startWindowX: int;

    /**
     * 划词起始位置的窗口y轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startWindowY: int;

    /**
     * 划词结束位置的窗口x轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endWindowX: int;

    /**
     * 划词结束位置的窗口y轴坐标，单位为px。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endWindowY: int;

    /**
     * 被划词应用窗口的屏幕ID。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    displayID: int;

    /**
     * 被划词应用的窗口ID。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    windowID: int;

    /**
     * 被划词应用的bundleName。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    bundleName: string;
  }

  /**
   * 划词面板。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  interface Panel {
    /**
     * 为当前的划词面板加载具体页面内容。使用Promise异步回调。
     *
     * @param { string } path - 要加载到面板中的页面内容的路径，Stage模型下该路径需添加到工程的resources/base/profile/main_pages.json文件中，不支持FA模型。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    setUiContent(path: string): Promise<void>;

    /**
     * 显示划词面板。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    show(): Promise<void>;

    /**
     * 隐藏当前划词面板。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     * @since 24 static
     */
    hide(): Promise<void>;

    /**
     * 使当前划词面板可以随鼠标拖动位置。使用Promise异步回调。该接口需要写在onTouch的回调函数中，并且事件类型为TouchType.Down。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startMoving(): Promise<void>;

    /**
     * 移动划词面板至屏幕指定位置。使用Promise异步回调。
     * 
     * > **说明：**
     * > 从API version 20开始支持，从API version 24开始废弃。建议使用
     * > [moveToGlobalDisplay]{@link selectionManager.Panel.moveToGlobalDisplay}替代。
     *
     * @param { int } x - x轴方向移动的值，单位为px。
     * @param { int } y - y轴方向移动的值，单位为px。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi
     * @since 20 dynamiconly
     * @deprecated since 24
     * @useinstead selectionManager.Panel.moveToGlobalDisplay
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * 移动划词面板至屏幕指定位置。使用Promise异步回调。
     *
     * @param { int } x - x轴方向移动的值，单位为px。
     * @param { int } y - y轴方向移动的值，单位为px。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    moveToGlobalDisplay(x: int, y: int): Promise<void>;

    /**
     * 订阅划词窗口销毁事件。使用callback异步回调。
     *
     * @param { 'destroyed' } type - 设置监听类型，固定取值为'destroyed'。
     * @param { Callback<void> } callback - 回调函数，返回值为空。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    on(type: 'destroyed', callback: Callback<void>): void;

    /**
     * 订阅划词窗口销毁事件。使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数，返回值为空。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    onDestroy(callback: Callback<void>): void;

    /**
     * 取消订阅划词窗口销毁事件。使用callback异步回调。
     *
     * @param { 'destroyed' } type - 设置监听类型，固定取值为'destroyed'。
     * @param { Callback<void> } [callback] - 回调函数，返回值为空。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    off(type: 'destroyed', callback?: Callback<void>): void;

    /**
     * 取消订阅划词窗口销毁事件。使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 回调函数，返回值为空。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    offDestroy(callback?: Callback<void>): void;

    /**
     * 订阅划词窗口隐藏事件。使用callback异步回调。
     *
     * @param { 'hidden' } type - 设置监听类型，固定取值为'hidden'。
     * @param { Callback<void> } callback - 回调函数，返回值为空。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    on(type: 'hidden', callback: Callback<void>): void;

    /**
     * 订阅划词窗口隐藏事件。使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数，返回值为空。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    onHide(callback: Callback<void>): void;

    /**
     * 取消订阅划词窗口隐藏事件。使用callback异步回调。
     *
     * @param { 'hidden' } type - 设置监听类型，固定取值为'hidden'。
     * @param { Callback<void> } [callback] - 回调函数，返回值为空。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    off(type: 'hidden', callback?: Callback<void>): void;

    /**
     * 取消订阅划词窗口隐藏事件。使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 回调函数，返回值为空。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    offHide(callback?: Callback<void>): void;
  }

  /**
   * 定义触发划词的类型枚举。
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | MOUSE_MOVE | 1 | 滑动选词类型。 |
   * | DOUBLE_CLICK   | 2 | 双击选词类型。 |
   * | TRIPLE_CLICK   | 3 | 三击选词类型。 |
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  enum SelectionType {
    /**
     * 滑动选词类型。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    MOUSE_MOVE = 1,

    /**
     * 双击选词类型。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    DOUBLE_CLICK = 2,

    /**
     * 三击选词类型。
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    TRIPLE_CLICK = 3
  }
}

export default selectionManager;