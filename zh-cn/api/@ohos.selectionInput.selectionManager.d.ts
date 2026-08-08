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
 * @file 划词管理
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';
import type Context from './application/Context';
import type { PanelInfo } from './@ohos.selectionInput.SelectionPanel';

/**
 * 本模块提供划词管理能力，包括创建面板、显示面板、移动面板、隐藏面板、销毁面板、监听鼠标/触控板划词事件、获取选中文本等。典型使用流程如下：
 * 1. 调用on('selectionCompleted')订阅划词完成事件。
 * 2. 在回调中调用getSelectionContent获取选中文本。
 * 3. 调用createPanel创建划词面板。
 * 4. 调用setUiContent加载页面内容。
 * 5. 调用moveToGlobalDisplay移动面板到指定位置。
 * 6. 调用show显示面板。
 * 7. 调用destroyPanel销毁面板。
 * 8. 调用off('selectionCompleted')取消订阅划词完成事件。
 *
 * > **说明：**
 * >
 * > - 本模块仅支持PC/2in1设备。开发者可通过canIUse('SystemCapability.SelectionInput.Selection')判断当前设备是否支持该功能。
 * > - 仅支持集成了划词扩展的应用调用，划词扩展的实现请参见
 * > [SelectionExtensionAbility]{@link @ohos.selectionInput.SelectionExtensionAbility}。
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
   * 订阅划词完成事件，与
   * [off('selectionCompleted')]{@link selectionManager.off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>)}
   * 搭配使用取消订阅。
   *
   * @param { 'selectionCompleted' } type - 设置监听类型，固定取值为'selectionCompleted'。
   * @param { Callback<SelectionInfo> } callback - 回调函数，返回划词事件信息[SelectionInfo]{@link selectionManager.SelectionInfo}。该回
   *     调仅在用户通过鼠标或触控板选中文本（双击/三击/滑动）后按下Ctrl键时触发。
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @since 20 dynamic
   */
  function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void;

  /**
   * 订阅划词完成事件，与[offSelectionComplete]{@link selectionManager.offSelectionComplete(callback?: Callback<SelectionInfo>)}搭配
   * 使用取消订阅。
   *
   * @param { Callback<SelectionInfo> } callback - 回调函数，返回划词事件信息[SelectionInfo]{@link selectionManager.SelectionInfo}。该回
   *     调仅在用户通过鼠标或触控板选中文本（双击/三击/滑动）后按下Ctrl键时触发。
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 static
   */
  function onSelectionComplete(callback: Callback<SelectionInfo>): void;

  /**
   * 取消订阅划词完成事件，与
   * [on('selectionCompleted')]{@link selectionManager.on(type: 'selectionCompleted', callback: Callback<SelectionInfo>)}
   * 搭配使用。
   *
   * @param { 'selectionCompleted' } type - 取消订阅的事件类型，固定取值为'selectionCompleted'。
   * @param { Callback<SelectionInfo> } [callback] - 需要取消的回调函数（即之前通过on方法订阅时的回调实例）。参数不填写时，取消订阅type对应的所有回调事件。
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @since 20 dynamic
   */
  function off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>): void;

  /**
   * 取消订阅划词完成事件，与[onSelectionComplete]{@link selectionManager.onSelectionComplete(callback: Callback<SelectionInfo>)}搭配使
   * 用。
   *
   * @param { Callback<SelectionInfo> } [callback] - 需要取消的回调函数（即之前通过onSelectionComplete方法订阅时的回调实例）。参数不填写时，取消订阅对应的所有回调事件。
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 static
   */
  function offSelectionComplete(callback?: Callback<SelectionInfo>): void;

  /**
   * 获取选中文本的内容。使用Promise异步回调。需在
   * [on('selectionCompleted')]{@link selectionManager.on(type: 'selectionCompleted', callback: Callback<SelectionInfo>)}
   * 回调中调用，且仅在划词完成事件触发后有效。
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
   * 创建划词面板，用于向用户展示业务相关的操作界面或文本处理结果，使用完毕后需调用[destroyPanel]{@link selectionManager.destroyPanel}销毁面板释放资源。使用Promise异步回调。
   * 
   * 单个划词应用仅允许创建一个[MENU_PANEL]{@link @ohos.selectionInput.SelectionPanel:PanelType}和一个
   * [MAIN_PANEL]{@link @ohos.selectionInput.SelectionPanel:PanelType}。
   *
   * @param { Context } ctx - 当前划词面板依赖的上下文信息，需使用SelectionExtensionAbility提供的上下文。
   * @param { PanelInfo } info - 划词面板的配置信息，用于指定面板类型、位置和宽高。单个划词应用仅允许创建一个MENU_PANEL和一个MAIN_PANEL。
   * @returns { Promise<Panel> } Promise对象，返回当前创建的划词面板对象，可用于面板内容设置、显示、隐藏、移动及事件订阅等管理操作。
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
   * 销毁划词面板。与[createPanel]{@link selectionManager.createPanel}搭配使用，用于销毁由createPanel()创建的面板对象。使用Promise异步回调。
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
     * 划词方式枚举值。
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
   * 划词面板对象，通过[createPanel]{@link selectionManager.createPanel}创建，提供面板内容设置、显示、隐藏、移动及事件订阅等管理能力，适用于在划词完成后向用户展示自定义操作界面的场景。
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
     * 为当前的划词面板设置界面内容，例如展示翻译结果、搜索建议或自定义操作按钮等。需通过[createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。使用Promise
     * 异步回调。
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
     * 显示划词面板，与[hide]{@link selectionManager.Panel.hide}搭配使用。需通过[createPanel]{@link selectionManager.createPanel}获取到
     * Panel实例后调用。使用Promise异步回调。
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
     * 隐藏当前划词面板，与[show]{@link selectionManager.Panel.show}搭配使用。需通过[createPanel]{@link selectionManager.createPanel}获取到
     * Panel实例后调用。使用Promise异步回调。如不主动调用，面板在失焦时会自动隐藏。
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
     * 设置划词面板可随鼠标、触控板或触屏拖动移动位置，指针释放后自动停止移动。需通过[createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。使用Promise异步
     * 回调。该接口需在onTouch的回调函数中调用，并且事件类型为TouchType.Down。
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
     * 移动划词面板至屏幕全局坐标系下的指定位置，支持移动到扩展屏上。需通过[createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 20开始支持，从API version 24开始废弃。
     *
     * @param { int } x - 目标位置在屏幕全局坐标系下的x轴坐标，单位为px。全局坐标系以主屏幕左上角为原点，x轴正方向向右；扩展屏的x坐标视屏幕布局可能为负值。
     * @param { int } y - 目标位置在屏幕全局坐标系下的y轴坐标，单位为px。全局坐标系以主屏幕左上角为原点，y轴正方向向下；扩展屏的y坐标视屏幕布局可能为负值。
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
     * 移动划词面板至屏幕全局坐标系下的指定位置，支持移动到扩展屏上。需通过[createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。使用Promise异步回调。
     *
     * @param { int } x - 目标位置在屏幕全局坐标系下的x轴坐标，单位为px。全局坐标系以主屏幕左上角为原点，x轴正方向向右；扩展屏的x坐标视屏幕布局可能为负值。
     * @param { int } y - 目标位置在屏幕全局坐标系下的y轴坐标，单位为px。全局坐标系以主屏幕左上角为原点，y轴正方向向下；扩展屏的y坐标视屏幕布局可能为负值。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    moveToGlobalDisplay(x: int, y: int): Promise<void>;

    /**
     * 订阅划词面板销毁事件，与[off('destroyed')]{@link selectionManager.Panel.off(type: 'destroyed', callback?: Callback<void>)}搭配使
     * 用。需通过[createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { 'destroyed' } type - 设置监听类型，固定取值为'destroyed'。
     * @param { Callback<void> } callback - 回调函数，调用[destroyPanel]{@link selectionManager.destroyPanel}销毁面板时触发。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    on(type: 'destroyed', callback: Callback<void>): void;

    /**
     * 订阅划词面板销毁事件，与[offDestroy]{@link selectionManager.Panel.offDestroy(callback?: Callback<void>)}搭配使用。需通过
     * [createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { Callback<void> } callback - 回调函数，调用[destroyPanel]{@link selectionManager.destroyPanel}销毁面板时触发。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    onDestroy(callback: Callback<void>): void;

    /**
     * 取消订阅划词面板销毁事件，与[on('destroyed')]{@link selectionManager.Panel.on(type: 'destroyed', callback: Callback<void>)}搭配使
     * 用。需通过[createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { 'destroyed' } type - 取消订阅的事件类型，固定取值为'destroyed'。
     * @param { Callback<void> } [callback] - 需要取消的回调函数（即之前通过on方法订阅时的回调实例）。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    off(type: 'destroyed', callback?: Callback<void>): void;

    /**
     * 取消订阅划词面板销毁事件，与[onDestroy]{@link selectionManager.Panel.onDestroy(callback: Callback<void>)}搭配使用。需通过
     * [createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { Callback<void> } [callback] - 需要取消的回调函数（即之前通过onDestroy方法订阅时的回调实例）。参数不填写时，取消订阅对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    offDestroy(callback?: Callback<void>): void;

    /**
     * 订阅划词面板隐藏事件，与[off('hidden')]{@link selectionManager.Panel.off(type: 'hidden', callback?: Callback<void>)}搭配使用。面板调用
     * [hide]{@link selectionManager.Panel.hide}隐藏或失焦自动隐藏时触发该事件。需通过[createPanel]{@link selectionManager.createPanel}获取到
     * Panel实例后调用。
     *
     * @param { 'hidden' } type - 设置监听类型，固定取值为'hidden'。
     * @param { Callback<void> } callback - 回调函数，面板隐藏时触发。面板可通过调用[hide]{@link selectionManager.Panel.hide}主动隐藏，或在失焦时自动隐藏。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    on(type: 'hidden', callback: Callback<void>): void;

    /**
     * 订阅划词面板隐藏事件，与[offHide]{@link selectionManager.Panel.offHide(callback?: Callback<void>)}搭配使用。需通过
     * [createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { Callback<void> } callback - 回调函数，面板隐藏时触发。面板可通过调用[hide]{@link selectionManager.Panel.hide}主动隐藏，或在失焦时自动隐藏。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    onHide(callback: Callback<void>): void;

    /**
     * 取消订阅划词面板隐藏事件，与[on('hidden')]{@link selectionManager.Panel.on(type: 'hidden', callback: Callback<void>)}搭配使用。需通过
     * [createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { 'hidden' } type - 取消订阅的事件类型，固定取值为'hidden'。
     * @param { Callback<void> } [callback] - 需要取消的回调函数（即之前通过on方法订阅时的回调实例）。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    off(type: 'hidden', callback?: Callback<void>): void;

    /**
     * 取消订阅划词面板隐藏事件，与[onHide]{@link selectionManager.Panel.onHide(callback: Callback<void>)}搭配使用。需通过
     * [createPanel]{@link selectionManager.createPanel}获取到Panel实例后调用。
     *
     * @param { Callback<void> } [callback] - 需要取消的回调函数（即之前通过onHide方法订阅时的回调实例）。参数不填写时，取消订阅对应的所有回调事件。
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    offHide(callback?: Callback<void>): void;
  }

  /**
   * 定义划词方式枚举值。
   * 
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | MOUSE_MOVE | 1 | 鼠标或触控板滑动划词。 |
   * | DOUBLE_CLICK   | 2 | 鼠标或触控板双击划词。 |
   * | TRIPLE_CLICK   | 3 | 鼠标或触控板三击划词。 |
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
     * 鼠标或触控板滑动划词。
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
     * 鼠标或触控板双击划词。
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
     * 鼠标或触控板三击划词。
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