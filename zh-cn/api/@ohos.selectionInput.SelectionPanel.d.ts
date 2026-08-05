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
 * 划词面板是用户选中文本后弹出的操作面板，适用于需要为选中文本提供翻译、搜索等快捷操作功能的场景，帮助开发者快速集成划词操作能力，提升用户交互体验。面板采用两级架构设计：菜单面板（MENU_PANEL）为一级面板，展示当前应用可提供的功
 * 能入口（如翻译、搜索等）；主面板（MAIN_PANEL）为二级面板，在用户点击菜单面板中的功能按钮后弹出，展示具体的功能结果。本模块提供划词面板的属性信息和类型，开发者可通过[PanelInfo]{@link PanelInfo}设定
 * 面板的位置和尺寸，通过[PanelType]{@link PanelType}指定面板类型。划词面板的创建与显示接口请参见
 * [createPanel]{@link @ohos.selectionInput.selectionManager:selectionManager.createPanel}、
 * [show]{@link @ohos.selectionInput.selectionManager:selectionManager.Panel.show}。
 * 
 * > **说明：**
 * >
 * > - 本模块仅支持PC/2in1设备。开发者可通过canIUse('SystemCapability.SelectionInput.Selection')判断当前设备是否支持该功能。
 *
 * @file 划词面板
 * @kit BasicServicesKit
 */

/**
 * 划词面板属性信息，包含面板类型、位置和宽高。开发者通过panelType指定面板类型（菜单面板或主面板），通过x、y设定面板左上角坐标，通过width、height设定面板尺寸，各项属性共同定义面板的呈现形态。
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */
export interface PanelInfo {
  /**
   * 划词面板类型枚举，有两种面板可供选择，详见[PanelType]{@link PanelType}。
   *
   * @default MENU_PANEL
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  panelType: PanelType;

  /**
   * 划词面板左上角的x轴坐标，单位为px。以主屏幕左上角为原点，x轴正方向向右。取值范围[0, +∞)，传入负数时面板无法正常创建。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  x: int;

  /**
   * 划词面板左上角的y轴坐标，单位为px。以主屏幕左上角为原点，y轴正方向向下。取值范围[0, +∞)，传入负数时面板无法正常创建。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  y: int;

  /**
   * 划词面板宽度，单位为px。取值范围(0, +∞)，传入0或负数时面板无法正常创建。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  width: int;

  /**
   * 划词面板高度，单位为px。取值范围(0, +∞)，传入0或负数时面板无法正常创建。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  height: int;
}

/**
 * 划词面板类型枚举，定义面板的两级架构：菜单面板（一级）和主面板（二级）。
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */
export enum PanelType {
  /**
   * 菜单面板为一级面板，显示当前应用可以提供的功能，如翻译、搜索等。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  MENU_PANEL = 1,

  /**
   * 主面板为二级面板，当用户点击菜单面板中的功能按钮时弹出，展示具体的翻译或搜索结果等内容。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  MAIN_PANEL = 2
}