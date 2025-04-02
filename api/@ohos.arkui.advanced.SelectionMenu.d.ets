/*
  * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { SelectionMenuOptions } from './arkui/component/richEditor'
import { ResourceStr } from './arkui/component/units'
import { MenuItemOptions } from './arkui/component/menuItem'
import { RichEditorSelection, RichEditorController } from './arkui/component/richEditor'
/*** endif */

/*** if arkts 1.2 */
/**
 * Declare the callback function when click the icon.
 *
 * @typedef { function } EditorMenuActionCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type EditorMenuActionCallback = () => void;

/**
 * Declare the callback builder when click the icon.
 *
 * @typedef { function } EditorMenuBuilderCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type EditorMenuBuilderCallback = () => void;

/**
 * Declare the function for event info.
 *
 * @typedef { function } EditorMenuEventCallback
 * @param { EditorEventInfo } event - The content of event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type EditorMenuEventCallback = (event?: EditorEventInfo) => void;
/*** endif */

/**
 * Construct parameter types for EditorMenuOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Construct parameter types for EditorMenuOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */


export interface EditorMenuOptions {
  /**
   * The icon of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon: ResourceStr;

  /**
   * Symbol style of menu icon.
   * @type { ?SymbolGlyphModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback function when click the icon.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Callback function when click the icon.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  action?: () => void;

  /**
   * Callback builder when click the icon.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Callback builder when click the icon.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  builder?: () => void;

  /*** if arkts 1.2 */
  /**
   * Callback function when click the icon.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  action?: EditorMenuActionCallback;

  /**
   * Callback builder when click the icon.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  builder?: EditorMenuBuilderCallback;
  /*** endif */
}

/**
 * Construct parameter types for ExpandedMenuOptions.
 *
 * @extends MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Construct parameter types for ExpandedMenuOptions.
 *
 * @extends MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ExpandedMenuOptions extends MenuItemOptions {
  /**
   * Callback function when click the option.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Callback function when click the option.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  action?: () => void;

  /*** if arkts 1.2 */
  /**
   * Callback function when click the option.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  action?: EditorMenuActionCallback;
  /*** endif */
}

/**
 * Defines the editor event info.
 *
 * @interface EditorEventInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the editor event info.
 *
 * @interface EditorEventInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface EditorEventInfo {
  /**
   * Edit information.
   *
   * @type { ?RichEditorSelection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Edit information.
   *
   * @type { ?RichEditorSelection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  content?: RichEditorSelection;
}

/**
 * Construct parameter types for SelectionMenuOptions.
 *
 * @extends MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Construct parameter types for SelectionMenuOptions.
 *
 * @extends MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface SelectionMenuOptions {
  /**
   * The options of EditorMenu.
   *
   * @type { ?Array<EditorMenuOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The options of EditorMenu.
   *
   * @type { ?Array<EditorMenuOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  editorMenuOptions?: Array<EditorMenuOptions>;

  /**
   * Expansion of SelectionMenu.
   *
   * @type { ?Array<ExpendMenuOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Expansion of SelectionMenu.
   *
   * @type { ?Array<ExpendMenuOptions> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  expandedMenuOptions?: Array<ExpandedMenuOptions>;

  /**
   * Expansion of SelectionMenu.
   *
   * @type { ?RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Expansion of SelectionMenu.
   *
   * @type { ?RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  controller?: RichEditorController;
  /**
   * Replace the built-in paste function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Replace the built-in paste function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onPaste?: (event?: EditorEventInfo) => void;

  /**
   * Replace the built-in replication feature.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Replace the built-in replication feature.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onCopy?: (event?: EditorEventInfo) => void;

  /**
   * Replace the built-in cut function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Replace the built-in cut function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onCut?: (event?: EditorEventInfo) => void;

  /**
   * Replace the built-in select all function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Replace the built-in select all function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSelectAll?: (event?: EditorEventInfo) => void;

  /*** if arkts 1.2 */
  /**
   * Replace the built-in paste function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onPaste?: EditorMenuEventCallback;

  /**
   * Replace the built-in replication feature.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onCopy?: EditorMenuEventCallback;

  /**
   * Replace the built-in cut function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onCut?: EditorMenuEventCallback;

  /**
   * Replace the built-in select all function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onSelectAll?: EditorMenuEventCallback;
  /*** endif */
}

/**
 * Declare Builder SelectionMenu.
 *
 * @param { SelectionMenuOptions } options - Selection menu options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Declare Builder SelectionMenu.
 *
 * @param { SelectionMenuOptions } options - Selection menu options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
@Builder
export declare function SelectionMenu(options: SelectionMenuOptions): void;
