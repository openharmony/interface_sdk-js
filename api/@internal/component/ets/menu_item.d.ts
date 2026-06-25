/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * Provides information about the menu item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare interface MenuItemOptions {
  /**
   * Start icon of the menu item. Symbol icons are not supported. If a symbol icon is used, **symbolStartIcon** must be 
   * used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  startIcon?: ResourceStr;

  /**
   * Symbol icon at the start of a menu item. When this parameter is set, the icon set through **startIcon** is not 
   * displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolStartIcon?: SymbolGlyphModifier;

  /**
   * Content of the menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  content?: ResourceStr;

  /**
   * End icon of the menu item. Symbol icons are not supported. If the symbol icon is used, **symbolEndIcon** must be 
   * used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  endIcon?: ResourceStr;

  /**
   * Symbol icon at the end of a menu item. When this parameter is set, the icon set through **endIcon** is not 
   * displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolEndIcon?: SymbolGlyphModifier;

  /**
   * Label information at the end of the menu item, such as shortcut keys like Ctrl+C.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  labelInfo?: ResourceStr;

  /**
   * Builder for a level-2 menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  builder?: CustomBuilder;
}

/**
 * The **MenuItem** component represents an item in a menu.
 * 
 * > **NOTE**
 * >
 * > This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate 
 * > their 
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface MenuItemInterface {
  /**
   *
   * @param { MenuItemOptions | CustomBuilder } value - Information about the menu item.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (value?: MenuItemOptions | CustomBuilder): MenuItemAttribute;
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class MenuItemAttribute extends CommonMethod<MenuItemAttribute> {
  /**
   * Sets whether the menu item is selected.
   * 
   * Since API version 10, this parameter supports two-way binding through 
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * Since API version 18, this parameter supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { boolean } value - Whether the menu item is selected.<br>**true**: The menu item is selected. **false**:
   *     The menu item is not selected.<br>Default value: **false**.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selected(value: boolean): MenuItemAttribute;

  /**
   * Sets whether to display the selected icon when the menu item is selected.
   *
   * @param { boolean } value - Whether to display the selected icon when the menu item is selected.<br>**true**:
   *     Display the default check mark icon. **false**: Hide the selected state icon.<br>**ResourceStr**: Display the
   *     specified custom icon resource.<br>**SymbolGlyphModifier**: Display the specified HMSymbol icon.<br>Default
   *     value: **false**. [since 9 - 9]
   * @param { boolean | ResourceStr } value - Whether to display the selected icon when the menu item is selected.<br>
   *     **true**: Display the default check mark icon. **false**: Hide the selected state icon.<br>**ResourceStr**:
   *     Display the specified custom icon resource.<br>**SymbolGlyphModifier**: Display the specified HMSymbol icon.<br
   *     >Default value: **false**. [since 10 - 11]
   * @param { boolean | ResourceStr | SymbolGlyphModifier } value - Whether to display the selected icon when the menu
   *     item is selected.<br>**true**: Display the default check mark icon. **false**: Hide the selected state icon.<br
   *     >**ResourceStr**: Display the specified custom icon resource.<br>**SymbolGlyphModifier**: Display the specified
   *     HMSymbol icon.<br>Default value: **false**. [since 12]
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier): MenuItemAttribute;

  /**
   * Triggered when the selection status of the menu item is changed manually.
   *
   * @param { function } callback - Invoked when the selected status changes.<br>**true**: selected; **false**:
   *     unselected.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onChange(callback: (selected: boolean) => void): MenuItemAttribute;

  /**
   * Sets the font style of the menu item content.
   *
   * @param { Font } value - Font style of the menu item content.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  contentFont(value: Font): MenuItemAttribute;

  /**
   * Sets the font color of the menu item content.
   *
   * @param { ResourceColor } value - Font color of the menu item content.<br>Default value: **'#E5000000'**
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  contentFontColor(value: ResourceColor): MenuItemAttribute;

  /**
   * Sets the font style of the menu item label.
   *
   * @param { Font } value - Font style of the menu item label.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelFont(value: Font): MenuItemAttribute;

  /**
   * Sets the font color of the menu item label.
   *
   * @param { ResourceColor } value - Font color of the menu item label.<br>Default value: **'#99000000'**
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelFontColor(value: ResourceColor): MenuItemAttribute;

  /**
   * Create the submenu for custom menu item.
   *
   * @param { CustomBuilder } builder - Indicates the builder function for submenu.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  subMenuBuilder(builder: CustomBuilder): MenuItemAttribute;
}

/**
 * The **MenuItem** component represents an item in a menu.
 * 
 * > **NOTE**
 * >
 * > This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate 
 * > their 
 * 
 * ###### Child Components
 * 
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare const MenuItem: MenuItemInterface;

/**
 * Defines MenuItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare const MenuItemInstance: MenuItemAttribute;