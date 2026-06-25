/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Describes the edit menu options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface EditorMenuOptions {

  /**
   * Icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Symbol icon resource, which has higher priority than **icon**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Action triggered when the menu option is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * Builder of the custom component displayed upon click. It must be used with @Builder for building the custom
   * component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  builder?: () => void;
}

/**
 * Describes the expanded drop-down menu options.
 *
 * Inherits from [MenuItemOptions]{@link MenuItemOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface ExpandedMenuOptions extends MenuItemOptions {

  /**
   * Action triggered when the menu option is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;
}

/**
 * Provides the information about the selected content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface EditorEventInfo {

  /**
   * Information about the selected content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  content?: RichEditorSelection;
}

/**
 * Defines the configuration options of the **SelectionMenu** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface SelectionMenuOptions {

  /**
   * Edit menu.
   *
   * If **editorMenuOptions** is not set, the edit menu is not displayed.
   *
   * When both **action** and **builder** in **EditorMenuOptions** are configured, clicking the edit icon will trigger
   * both.
   *
   * By default, the context menu is not closed when the edit menu icon is clicked. You can configure
   * **closeSelectionMenu** of **RichEditorController** in **action** to enable the menu to be closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  editorMenuOptions?: Array<EditorMenuOptions>;

  /**
   * Expanded drop-down menu options.
   *
   * If this parameter is left empty, the expanded drop-down menu is not displayed.
   *
   * The options configured for **ExpandedMenuOptions** are displayed in the **More** menu option, and clicking **More**
   * shows the expanded drop-down menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  expandedMenuOptions?: Array<ExpandedMenuOptions>;

  /**
   * Expanded drop-down menu options.
   *
   * If this parameter is left empty, the expanded drop-down menu is not displayed.
   *
   * The options configured for **ExpandedMenuOptions** are displayed in the **More** menu option, and clicking **More**
   * shows the expanded drop-down menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  controller?: RichEditorController;

  /**
   * Event callback to take the place of the preset paste menu option.
   *
   * It is effective only when the **controller** parameter is set and the preset menu is available.
   *
   * **NOTE**
   *
   * **event** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPaste?: (event?: EditorEventInfo) => void;

  /**
   * Event callback to take the place of the preset copy menu option.
   *
   * It is effective only when the **controller** parameter is set and the preset menu is available.
   *
   * **NOTE**
   *
   * **event** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCopy?: (event?: EditorEventInfo) => void;

  /**
   * Event callback to take the place of the preset cut menu option.
   *
   * It is effective only when the **controller** parameter is set and the preset menu is available.
   *
   * **NOTE**
   *
   * **event** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCut?: (event?: EditorEventInfo) => void;

  /**
   * Event callback to take the place of the preset select-all menu option.
   *
   * It is effective only when the **controller** parameter is set and the preset menu is available.
   *
   * **NOTE**
   *
   * **event** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onSelectAll?: (event?: EditorEventInfo) => void;

  /**
   * Set system-styled materials for the component. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Defines a **SelectionMenu** component. When the input parameter is empty, both the component and its content area
 * have a zero size, making the component invisible. For example, when a **SelectionMenu** component activated via right
 * -click is bound to a [RichEditor]{@link rich_editor} component using
 * [bindSelectionMenu]{@link RichEditorAttribute#bindSelectionMenu}, it will not be displayed when the **RichEditor**
 * component receives a right-click event.
 *
 * @param { SelectionMenuOptions } options - Configuration options of the **SelectionMenu** component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Builder
export declare function SelectionMenu(options: SelectionMenuOptions): void;