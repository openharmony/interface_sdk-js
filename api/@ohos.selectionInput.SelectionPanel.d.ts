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

/**
 * Defines information about the word selection panel.
 * @typedef PanelInfo
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */

export interface PanelInfo {
  /**
   * Type of the word selection panel.
   * @type { PanelType }
   * @default MENU_PANEL
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  panelType: PanelType;

  /**
   * X-coordinate of the upper left corner of the word selection panel on the screen.
   * @type { int }
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  x: int;

  /**
   * Y-coordinate of the upper left corner of the word selection panel on the screen.
   * @type { int }
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  y: int;

  /**
   * Width of the word selection panel.
   * @type { int }
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  width: int;

  /**
   * Height of the word selection panel.
   * @type { int }
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  height: int;
}

/**
 * Enumerates the types of the word selection panel.
 * @enum { int }
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */

export enum PanelType {
  /**
   * Menu panel.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  MENU_PANEL = 1,

  /**
   * Main panel.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  MAIN_PANEL = 2
}