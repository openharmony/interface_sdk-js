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
 * 本模块提供划词面板的属性信息和类型。
 * 
 * > **说明：**
 * > - 本模块仅支持PC/2in1设备。
 *
 * @file
 * @kit BasicServicesKit
 */

/**
 * 划词面板属性信息。
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
   * 划词面板类型。
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
   * 划词面板左上角的x轴坐标，单位为px。
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
   * 划词面板左上角的y轴坐标，单位为px。
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
   * 划词面板宽度，单位为px。
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
   * 划词面板高度，单位为px。
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
 * 划词面板类型枚举。
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
   * 菜单面板可以作为一级面板，显示当前应用程序可以提供的功能，如翻译、搜索等。
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
   * 主面板可以作为二级面板，当用户点击菜单面板中的功能按钮时弹出，显示特定的翻译或搜索结果等。
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