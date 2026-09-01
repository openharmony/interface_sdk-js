'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import {
  AttributeModifier,
  Builder,
  Callback,
  CommonMethod,
  ComponentBuilder,
  CopyOptions,
  CustomBuilder,
  CustomBuilderT,
  OnCreateMenuCallback,
  OnPrepareMenuCallback,
  ResourceColor,
  TextMenuItem,
  TextResponseType,
  TextSpanType,
} from '@ohos.arkui.component';

/**
 * Defines text join style for SelectionContainer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SelectionContainerTextJoinStyle {
  /**
   * Join text with line break (`\n`) between text nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NEWLINE = 0,

  /**
   * Join text directly without separator between text nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DIRECT = 1
}

/**
 * Defines selection menu options for SelectionContainer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SelectionContainerMenuOptions {
  /**
   * Called when the selection menu appears.
   * The callback parameter is the selected text concatenated in the visual order of Text components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAppear?: Callback<string>;

  /**
   * Called when the selection menu disappears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDisappear?: Callback<void>;

  /**
   * Called when the selection menu is displayed.
   * The callback parameter is the selected text concatenated in the visual order of Text components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMenuShow?: Callback<string>;

  /**
   * Called when the selection menu is hidden.
   * The callback parameter is the selected text concatenated in the visual order of Text components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMenuHide?: Callback<string>;
}

/**
 * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
 *
 * @param { TextMenuItem } menuItem - current clicked menu item.
 * @param { string } value - selected text content.
 * @returns { boolean } Return true if the event is consumed; false otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnMenuItemClickWithTextCallback = (menuItem: TextMenuItem, value: string) => boolean;

/**
 * Defines custom edit menu options for SelectionContainer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SelectionContainerEditMenuOptions {
  /**
   * Passes the default menu, invokes before every display to generate a menu for triggering click events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onCreateMenu?: OnCreateMenuCallback;

  /**
   * Invoked upon clicking an item, capable of intercepting the default system menu execution behavior.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMenuItemClick?: OnMenuItemClickWithTextCallback;

  /**
   * Callback before displaying the menu when the selection text changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPrepareMenu?: OnPrepareMenuCallback;
}

/**
 * Defines the attributes of SelectionContainer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SelectionContainerAttribute extends CommonMethod {
  /**
   * Set whether to allow copy and where data can be copied.
   *
   * @param { CopyOptions | undefined } value - Copy option for selected text. Default value is CopyOptions.InApp.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default copyOption(value: CopyOptions | undefined): this;

  /**
   * Set the caret color for selected text.
   *
   * @param { ResourceColor | undefined } color - Caret color.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default caretColor(color: ResourceColor | undefined): this;

  /**
   * Set selected text background color.
   *
   * @param { ResourceColor | undefined } color - Selected text background color.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default selectedBackgroundColor(color: ResourceColor | undefined): this;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean | undefined } isEnabled - Whether to enable haptic feedback. Default value is true.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableHapticFeedback(isEnabled: boolean | undefined): this;

  /**
   * Set text join style for aggregated text in SelectionContainer.
   *
   * <p><strong>NOTE</strong>:
   * <br>This setting affects the string value used in callbacks such as onWillCopy and onCopy.
   * <br>It also affects built-in text menu item logic that depends on string concatenation, such as copy.
   * <br>The default style is SelectionContainerTextJoinStyle.NEWLINE.
   * </p>
   *
   * @param { SelectionContainerTextJoinStyle | undefined } style - Text join style for aggregated text.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default textJoinStyle(style: SelectionContainerTextJoinStyle | undefined): this;

  /**
   * Bind to the selection menu.
   *
   * <p><strong>NOTE</strong>:
   * <br>The duration required for a long-press gesture is 600 ms for bindSelectionMenu and 800 ms for bindContextMenu.
   * <br>When both bindSelectionMenu and bindContextMenu are set and both are configured to be triggered by a
   *     long-press gesture, bindSelectionMenu is triggered first.
   * <br>If the custom menu is too long, embed a Scroll component to prevent the keyboard from being blocked.
   * </p>
   *
   * @param { TextSpanType | undefined } spanType - Indicates the type of selection menu.
   *     Default value is TextSpanType.TEXT.
   * @param { CustomBuilder | undefined } content - Indicates the content of selection menu.
   * @param { TextResponseType | undefined } responseType - Indicates response type of selection menu.
   *     Default value is TextResponseType.LONG_PRESS.
   * @param { SelectionContainerMenuOptions | undefined } [options] - Indicates the options of selection menu.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default bindSelectionMenu(spanType: TextSpanType | undefined, content: CustomBuilder | undefined,
    responseType: TextResponseType | undefined, options?: SelectionContainerMenuOptions | undefined): this;

  /**
   * Set the custom text menu.
   * Sets the extended options of the custom context menu on selection,
   * including the text content, icon, and callback.
   *
   * @param { SelectionContainerEditMenuOptions | undefined } editMenu - Customize text menu options.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default editMenuOptions(editMenu: SelectionContainerEditMenuOptions | undefined): this;

  /**
   * Called when text selection changes in SelectionContainer.
   *
   * @param { Callback<Array<string>> | undefined } callback - Callback of selection change event.
   *     The order of items in the first callback parameter array is consistent with the visual order of Text
   *     components.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onTextSelectionChange(callback: Callback<Array<string>> | undefined): this;

  /**
   * Called before using the Clipboard copy menu.
   * Currently, only text can be copied.
   *
   * @param { Callback<string, boolean> | undefined } callback - Callback used to check whether copy is allowed.
   *     The first callback parameter (string) is the selected text concatenated in the visual order of Text components.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCopy(callback: Callback<string, boolean> | undefined): this;

  /**
   * Called when selected text is copied.
   * Currently, only text can be copied.
   *
   * @param { Callback<string> | undefined } callback - Callback of copy event.
   *     The first callback parameter (string) is the selected text concatenated in the visual order of Text components.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onCopy(callback: Callback<string> | undefined): this;

  /**
   * Set the attribute modifier.
   *
   * @param { AttributeModifier<SelectionContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default attributeModifier(modifier: AttributeModifier<SelectionContainerAttribute> | AttributeModifier<CommonMethod>
    | undefined): this;

  /**
   * Set SelectionContainer Options.
   *
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setSelectionContainerOptions(): this;
}

/**
 * Defines SelectionContainer component.
 *
 * @param { CustomBuilder } [content_] - container.
 * @returns { SelectionContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@ComponentBuilder
export declare function SelectionContainer(content_?: CustomBuilder): SelectionContainerAttribute;

/**
 * Defines SelectionContainer component.
 * It requires calling setSelectionContainerOptions at start of the component attribute set-up,
 * and it requires calling applyAttributesFinish at the end of the component attribute set-up.
 *
 * @param { CustomBuilderT<SelectionContainerAttribute> } style - the callback to set up SelectionContainer's
 *     attributes.
 * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function SelectionContainer(
    style: CustomBuilderT<SelectionContainerAttribute>
): SelectionContainerAttribute;
