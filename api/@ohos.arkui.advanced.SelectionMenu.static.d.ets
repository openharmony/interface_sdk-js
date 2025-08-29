'use static'
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
 * @kit ArkUI
 * @arkts 1.2
 */

import { ResourceStr, VoidCallback } from './arkui/component/units';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder, CustomBuilder } from './arkui/component/builder';
import { RichEditorSelection, RichEditorController } from './arkui/component/richEditor';
import { MenuItemOptions } from './arkui/component/menuItem';

/**
 * Construct parameter types for EditorMenuOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface EditorMenuOptions {
  /**
   * The icon of icon and text item. Passing `undefined` resets it to the default value.
   *
   * @type { ResourceStr | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  icon: ResourceStr | undefined;

  /**
   * Symbol style of menu icon.
   * @type { ?SymbolGlyphModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback function when click the icon.
   * 
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  action?: VoidCallback;

  /**
   * Callback builder when click the icon.
   * 
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  builder?: CustomBuilder;
}

/**
 * Construct parameter types for ExpandedMenuOptions.
 *
 * @extends MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface ExpandedMenuOptions extends MenuItemOptions {
  /**
   * Callback function when click the option.
   * 
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  action?: VoidCallback;
}

/**
 * Defines the editor event info.
 *
 * @interface EditorEventInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface EditorEventInfo {
  /**
   * Edit information.
   *
   * @type { ?RichEditorSelection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  content?: RichEditorSelection;
}

/**
 * Defines a SelectionMenu callback when onPaste.
 *
 * @typedef { function } SelectionMenuOnPasteCallback
 * @param { ?EditorEventInfo } [event] - the event info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type SelectionMenuOnPasteCallback = (event?: EditorEventInfo) => void;

/**
 * Defines a SelectionMenu callback when onCopy.
 *
 * @typedef { function } SelectionMenuOnCopyCallback
 * @param { ?EditorEventInfo } [event] - the event info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type SelectionMenuOnCopyCallback = (event?: EditorEventInfo) => void;

/**
 * Defines a SelectionMenu callback when onCut.
 *
 * @typedef { function } SelectionMenuOnCutCallback
 * @param { ?EditorEventInfo } [event] - the event info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type SelectionMenuOnCutCallback = (event?: EditorEventInfo) => void;

/**
 * Defines a SelectionMenu callback when onSelectAll.
 *
 * @typedef { function } SelectionMenuOnSelectAllCallback
 * @param { ?EditorEventInfo } [event] - the event info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type SelectionMenuOnSelectAllCallback = (event?: EditorEventInfo) => void;

/**
 * Construct parameter types for SelectionMenuOptions.
 *
 * @extends MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface SelectionMenuOptions {
  /**
   * The options of EditorMenu.
   *
   * @type { ?Array<EditorMenuOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  editorMenuOptions?: Array<EditorMenuOptions>;

  /**
   * Expansion of SelectionMenu.
   *
   * @type { ?Array<ExpendMenuOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  expandedMenuOptions?: Array<ExpandedMenuOptions>;

  /**
   * Expansion of SelectionMenu.
   *
   * @type { ?RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  controller?: RichEditorController;

  /**
   * Replace the built-in paste function.
   *
   * @type { ?SelectionMenuOnPasteCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onPaste?: SelectionMenuOnPasteCallback;

  /**
   * Replace the built-in replication feature.
   *
   * @type { ?SelectionMenuOnCopyCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onCopy?: SelectionMenuOnCopyCallback;

  /**
   * Replace the built-in cut function.
   *
   * @type { ?SelectionMenuOnCutCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onCut?: SelectionMenuOnCutCallback;

  /**
   * Replace the built-in select all function.
   *
   * @type { ?SelectionMenuOnSelectAllCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onSelectAll?: SelectionMenuOnSelectAllCallback;
}

/**
 * Declare Builder SelectionMenu.
 *
 * @param { SelectionMenuOptions } options - Selection menu options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Builder
export declare function SelectionMenu(options: SelectionMenuOptions): void;
