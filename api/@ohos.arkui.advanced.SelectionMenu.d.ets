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
   * Icon resource of the edit menu item. If symbolStyle is also set, this attribute does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Event callback for tapping a menu item. When both builder and action are configured, tapping the icon triggers
   * both. When not set, no response occurs on tap.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * Displays a user-defined component when tapped. The custom component is used with @Builder during construction. When
   * not set, no custom component is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  builder?: () => void;

  /**
   * Symbol icon resource. Pass this parameter when a system Symbol icon (supporting advanced features such as dynamic
   * color and multi-color) is needed. When not passed, the icon resource specified by the icon attribute is used. Has
   * higher priority than icon. When both are set, symbolStyle is used preferentially.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
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
   * Callback invoked when an option in the menu is tapped. When not set, no response occurs upon tapping.
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
   * Information about the selected content, including the selected text or image spans and the selection range.
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
 * Describes the optional menu type items and their configuration parameters for **SelectionMenu**.
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
   * When **editorMenuOptions** is not configured, the edit menu is not displayed.
   *
   * When both **action** and **builder** in **EditorMenuOptions** are configured, tapping the icon triggers both
   * responses.
   *
   * Tapping an edit menu icon does not close the entire menu by default. The app can configure **RichEditorController**
   * 's **closeSelectionMenu** through the **action** API to actively close the menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  editorMenuOptions?: Array<EditorMenuOptions>;

  /**
   * Extended dropdown menu.
   *
   * When expandedMenuOptions is empty, there is no More button and the extended dropdown menu is not displayed.
   *
   * When expandedMenuOptions is not empty, the More button is displayed, and the configured menu items are collapsed in
   * the More button. Tap the More button to display them.
   *
   * When controller is empty, the More button is not displayed. If expandedMenuOptions is not empty, the items are
   * displayed in the dropdown menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  expandedMenuOptions?: Array<ExpandedMenuOptions>;

  /**
   * When the rich text controller is not empty, the default system menu (including cut, copy, paste, and other options)
   * is displayed and the default menu functions are built-in.
   *
   * When controller is empty, the More button is not displayed. If expandedMenuOptions is not empty, the items are
   * displayed in the dropdown menu.
   *
   * By default, the system only supports copying and pasting rich text content. For mixed text and images, the app
   * needs to customize the onCopy and onPaste APIs. When the app configures the onCopy | onPaste APIs, the system menu'
   * s default copy and paste become invalid, and the app's custom functions are called instead.
   *
   * **NOTE**
   *
   * After tapping the built-in copy option in the custom text selection menu, the custom menu disappears and the
   * selected text highlight is retained.
   *
   * After tapping the built-in select all option in the custom text selection menu, the custom menu disappears and all
   * text is selected and highlighted.
   *
   * After tapping the built-in paste option in the custom text selection menu, pasting in a blank area or replacing
   * selected text with paste both retain the style of the copied text.
   *
   * When the copyOptions attribute of the rich text component [RichEditor]{@link ./@internal/component/ets/rich_editor}
   * is set to `CopyOptions.None`, the built-in copy and cut functions are not restricted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  controller?: RichEditorController;
  /**
   * Event callback that replaces the paste option of the built-in system menu.
   *
   * Prerequisite: The controller parameter must be provided. The built-in paste function can be replaced only when the
   * system default menu exists.
   *
   * **NOTE**
   *
   * event is the return information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPaste?: (event?: EditorEventInfo) => void;

  /**
   * Event callback that replaces the copy option of the built-in system menu.
   *
   * Prerequisite: The controller parameter must be provided. The built-in copy function can be replaced only when the
   * system default menu exists.
   *
   * **NOTE**
   *
   * event is the return information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCopy?: (event?: EditorEventInfo) => void;

  /**
   * Event callback that replaces the cut option of the built-in system menu.
   *
   * Prerequisite: The controller parameter must be provided. The built-in cut function can be replaced only when the
   * system default menu exists.
   *
   * **NOTE**
   *
   * event is the return information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCut?: (event?: EditorEventInfo) => void;

  /**
   * Event callback that replaces the select all option of the built-in system menu.
   *
   * Prerequisite: The controller parameter must be provided. The built-in select all function can be replaced only when
   * the system default menu exists.
   *
   * **NOTE**
   *
   * event is the return information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onSelectAll?: (event?: EditorEventInfo) => void;

  /**
   * System material used for the menu background panel, which implements visual effects (such as blur and transparency)
   * for the menu background. Different system materials contain different attributes, affecting the final display
   * effect. For specific material types and attributes, see
   * [uiMaterial.Material]{@link @ohos.arkui.uiMaterial:uiMaterial.Material}. Default value: undefined, no material
   * effect.
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
 * When the input parameter is empty, both the content area and the component size of the **SelectionMenu** component
 * are zero. For example, if the [RichEditor]{@link ./@internal/component/ets/rich_editor} component uses the
 * [bindSelectionMenu]{@link RichEditorAttribute#bindSelectionMenu} API to bind a right-click menu of **SelectionMenu**,
 * no menu will pop up when right-clicking the rich text component area.
 *
 * @param { SelectionMenuOptions } options - Configuration options for the text selection menu, used to configure the
 *     edit menu, extended dropdown menu, rich text controller, and callback events such as copy, paste, and cut.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Builder
export declare function SelectionMenu(options: SelectionMenuOptions): void;