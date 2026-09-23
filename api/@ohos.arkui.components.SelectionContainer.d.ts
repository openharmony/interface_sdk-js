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

/**
 * Provides the concatenation method for text aggregation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum SelectionContainerTextJoinStyle {
  /**
   * Joined with a newline character `\n` between different text nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NEWLINE = 0,

  /**
   * Joined directly between different text nodes without a separator.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DIRECT = 1
}

/**
 * Provides the configuration options in the selection menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface SelectionContainerMenuOptions {
  /**
   * Triggered when the selection menu appears. The callback parameter is the selected text concatenated in the visual
   * order of the Text components, and the concatenation method is determined by the textJoinStyle configuration. The
   * default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAppear?: Callback<string>;

  /**
   * Triggered when the selection menu disappears. The default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDisappear?: Callback<void>;

  /**
   * Triggered when the selection menu is shown. The callback parameter is the selected text concatenated in the visual
   * order of the Text components, and the concatenation method is determined by the textJoinStyle configuration. The
   * default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMenuShow?: Callback<string>;

  /**
   * Triggered when the selection menu is hidden. The callback parameter is the selected text concatenated in the visual
   * order of the Text components, and the concatenation method is determined by the textJoinStyle configuration. The
   * default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMenuHide?: Callback<string>;
}

/**
 * Called when a menu item is tapped. It can intercept the execution of system default menu items (such as copy and
 * paste menu items).
 *
 * @param { TextMenuItem } menuItem - Menu item that is currently clicked.
 * @param { string } value - Selected text content.
 * @returns { boolean } Processing result of the menu item click event. The value true indicates that the event has been
 *     processed, and false indicates the opposite.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnMenuItemClickWithTextCallback = (menuItem: TextMenuItem, value: string) => boolean;

/**
 * Provides the custom edit menu options of **SelectionContainer**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface SelectionContainerEditMenuOptions {
  /**
   * Triggered before the menu is displayed each time. It passes in the default menu items and returns the processed
   * menu items. The default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onCreateMenu?: OnCreateMenuCallback;

  /**
   * Triggered when a menu item is clicked. It can intercept the default menu execution behavior of the system. The
   * default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMenuItemClick?: OnMenuItemClickWithTextCallback;

  /**
   * Triggered after the selected text content changes and before the menu is displayed. The menu data can be adjusted
   * in this callback. The default value is empty, and this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onPrepareMenu?: OnPrepareMenuCallback;
}

/**
 * Provides the initial configuration options of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export interface SelectionContainerOptions {
  /**
   * Controller of the SelectionContainer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  controller: SelectionContainerController;
}

/**
 * Provides the controller of the **SelectionContainer** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export declare class SelectionContainerController {
  /**
   * Closes the custom or default selection menu of **SelectionContainer**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  closeSelectionMenu(): void;

  /**
   * Clears the current text selection state of **SelectionContainer**. If the selection menu is being displayed, it is
   * also closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  clearTextSelection(): void;
}

/**
 * The **SelectionContainer** component provides cross-node text selection, copying, and menu extension capabilities for
 * multiple text nodes. It supports unified configuration of the caret color and highlight color of selected text,
 * flexible text concatenation policies, and custom selection menus and menu extension options. It is suitable for
 * scenarios where continuous text selection, unified copying, style customization, and menu extension are required
 * across multiple **Text** components. It resolves the problem of fragmented text selection experience in multi-
 * **Text** component scenarios and improves the user interaction experience in complex text layouts.
 *
 * > **NOTE**
 * >
 * > - The text content returned by the selected text related callbacks in this component is concatenated in the top-to-
 * > bottom display order of the [Text]{@link ./@internal/component/ets/text} components.
 * >
 * > - By default, this component uses the [Stack]{@link ./@internal/component/ets/stack} layout. If other container
 * > layout requirements exist, place a container component in **SelectionContainer**.
 * >
 * > - When text is selected in **SelectionContainer**, the magnifier is not displayed, and
 * > [getMagnifier]{@link @ohos.arkui.UIContext:UIContext.getMagnifier} cannot be used to proactively set the magnifier.
 * >
 * > - Dragging is not supported when text is selected in **SelectionContainer**.
 * >
 * > - Text under the [Repeat]{@link ./@internal/component/ets/repeat} component in **SelectionContainer** does not
 * > support cross-node selection.
 * >
 * > - Only the text content in **Text** components participates in cross-node selection and text concatenation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export interface SelectionContainerInterface {
  /**
   * Initial configuration options of the component.
   *
   * @param { SelectionContainerOptions } [value] - Initialization options of the component.
   * @returns { SelectionContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  (value?: SelectionContainerOptions): SelectionContainerAttribute;
}

/**
 * [Universal attributes]{@link ./@internal/component/ets/common} are supported.
 *
 * > **NOTE**
 * >
 * > - The [obscuring]{@link ./@internal/component/ets/common} attribute is not supported.
 * >
 * > - The [transformation]{@link ./@internal/component/ets/common} attribute is not supported. In the
 * > **SelectionContainer** container, the **Text** child component does not support transformation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class SelectionContainerAttribute extends CommonMethod<SelectionContainerAttribute> {
  /**
   * Sets the copy option for the component. If this attribute is not used, the default value is **CopyOptions.InApp**.
   *
   * > **NOTE**
   * >
   * > If the **Text** child component has explicitly set [copyOption]{@link TextAttribute#copyOption}, the
   * > configuration of the **Text** child component takes precedence. If this attribute is not set, the configuration
   * > of **SelectionContainer** is used.
   *
   * @param { Optional<CopyOptions> } value - Copy and paste configuration item, used to set the copyable range of text.
   *     For details, see the CopyOptions enum.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  copyOption(value: Optional<CopyOptions>): SelectionContainerAttribute;

  /**
   * Sets the caret color of the selected text. If this attribute is not used, the default caret color is **'#007DFF'**
   * (blue).
   *
   * > **NOTE**
   * >
   * > - In the **SelectionContainer** container, this attribute is used to set the caret color of the selected text in
   * > each **Text** child component.
   * >
   * > - In the **SelectionContainer** container, the [caretColor]{@link TextAttribute#caretColor} setting of the
   * > **Text** child component does not take effect, and the configuration of **SelectionContainer** is always used.
   *
   * @param { Optional<ResourceColor> } color - Caret color.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  caretColor(color: Optional<ResourceColor>): SelectionContainerAttribute;

  /**
   * Sets the highlight color of the selected text. If this attribute is not used, the default highlight color of the
   * selected text is **'#007DFF'** (blue). If the opacity is not set or is set to fully opaque, the default opacity is
   * 20%.
   *
   * > **NOTE**
   * >
   * > - In the **SelectionContainer** container, this attribute is used to control the highlight color of the selected
   * > area of each **Text** child component.
   * >
   * > - If the **Text** child component has explicitly set
   * > [selectedBackgroundColor]{@link TextAttribute#selectedBackgroundColor}, the configuration of the **Text** child
   * > component takes preference. Otherwise, use the configuration of **SelectionContainer**.
   *
   * @param { Optional<ResourceColor> } color - Highlight color of the selected text.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedBackgroundColor(color: Optional<ResourceColor>): SelectionContainerAttribute;

  /**
   * Sets whether to enable haptic feedback. If this attribute is not used, haptic feedback is enabled by default.
   *
   * When haptic feedback is enabled, you need to set the **requestPermissions** field in the
   * [module.json5 configuration file](docroot://quick-start/module-configuration-file.md) of the project to enable the
   * vibration permission. The configuration is as follows:
   *
   * @param { Optional<boolean> } isEnabled - Whether to enable haptic feedback.
   *     <br>true indicates that haptic feedback is enabled, and false indicates that haptic feedback is disabled.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableHapticFeedback(isEnabled: Optional<boolean>): SelectionContainerAttribute;

  /**
   * Sets the concatenation method for the aggregated text in **SelectionContainer**. If this attribute is not used, the
   * default value is **SelectionContainerTextJoinStyle.NEWLINE**, which means that different text nodes are
   * concatenated with newline characters (\n).
   *
   * > **NOTE**
   * >
   * > - This configuration affects the text content returned in the callbacks of
   * > [onWillCopy]{@link SelectionContainerAttribute#onWillCopy}, [onCopy]{@link SelectionContainerAttribute#onCopy},
   * > and [bindSelectionMenu]{@link SelectionContainerAttribute#bindSelectionMenu}.
   * >
   * > - This configuration also affects the logic that depends on the text concatenation result in the built-in system
   * > menu items. For example, when text in two **Text** nodes is selected, if the configuration is
   * > **SelectionContainerTextJoinStyle.NEWLINE**, a newline character is inserted between the two text segments after
   * > copying; if the configuration is **SelectionContainerTextJoinStyle.DIRECT**, the two text segments are directly
   * > concatenated after copying.
   *
   * @param { Optional<SelectionContainerTextJoinStyle> } style - Text concatenation mode of the aggregated text.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  textJoinStyle(style: Optional<SelectionContainerTextJoinStyle>): SelectionContainerAttribute;

  /**
   * Sets a custom selection menu. If this attribute is not used, the default value of **spanType** is
   * **TextSpanType.TEXT** and the default value of **responseType** is **TextResponseType.LONG_PRESS**.
   *
   * > **NOTE**
   * >
   * > - The long-press response duration of **bindSelectionMenu** is 600 ms, while that of
   * > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   * > is 800 ms. When both are bound and both are triggered by a long press, **bindSelectionMenu** is responded to
   * > first.
   * >
   * > - When the custom menu is too long, you are advised to nest a [Scroll]{@link ./@internal/component/ets/scroll}
   * > component inside it to prevent the keyboard from being obscured.
   * >
   * > - When the selection spans non-copyable text, the menu is displayed and processed based only on the copyable text
   * > actually selected.
   * >
   * > - In the **SelectionContainer** container, the [bindSelectionMenu]{@link TextAttribute#bindSelectionMenu} setting
   * > of the **Text** child component does not take effect, and the configuration of **SelectionContainer** is always
   * > used.
   *
   * @param { Optional<TextSpanType> } spanType - Type of the selection menu. It specifies the range of text types to
   *     which the selection menu applies. Different types correspond to different menu behaviors. For details about the
   *     meaning and applicable scenarios of each enum value, see [TextSpanType]{@link TextSpanType}.
   * @param { Optional<CustomBuilder> } content - Content of the selection menu.
   * @param { Optional<TextResponseType> } responseType - Response type of the selection menu.
   * @param { Optional<SelectionContainerMenuOptions> } [options] - Options of the selection menu, used to configure
   *     callbacks for events such as menu appearance, disappearance, display, and hiding. Pass this parameter when you
   *     need to listen for these menu events. If it is not passed, menu events are not listened for by default.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bindSelectionMenu(spanType: Optional<TextSpanType>, content: Optional<CustomBuilder>,
    responseType: Optional<TextResponseType>, options?: Optional<SelectionContainerMenuOptions>): SelectionContainerAttribute;

  /**
   * Sets the edit menu options for the selected text, including the menu text, icon, and callback.
   *
   * > **NOTE**
   * >
   * > - When both [bindSelectionMenu]{@link SelectionContainerAttribute#bindSelectionMenu} and **editMenuOptions** are
   * > set for the current scenario, **bindSelectionMenu** takes precedence and **editMenuOptions** does not take
   * > effect. **bindSelectionMenu** is used to fully customize the menu style and trigger conditions, with all menu
   * > items defined by you. **editMenuOptions** is used to add extension items on top of the system default menu, with
   * > the trigger conditions unchanged. It is recommended that you choose based on the required degree of
   * > customization.
   * >
   * > - In the **SelectionContainer** container, the [editMenuOptions]{@link TextAttribute#editMenuOptions} setting of
   * > the **Text** child component does not take effect, and the configuration of **SelectionContainer** is always
   * > used.
   *
   * @param { Optional<SelectionContainerEditMenuOptions> } editMenu - Custom edit menu configuration.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  editMenuOptions(editMenu: Optional<SelectionContainerEditMenuOptions>): SelectionContainerAttribute;

  /**
   * Triggered when the selected text in **SelectionContainer** changes. This API returns the result asynchronously
   * through a callback.
   *
   * > **NOTE**
   * >
   * > - The order of items in the callback parameter array is consistent with the visual order of the **Text**
   * > components.
   * >
   * > - Each item in the array corresponds to the selected text of a **Text** child component.
   * >
   * > - The array contains only **Text** child components that have selected text. It does not include **Text** child
   * > components without selected text, nor does it include empty string placeholders for non-copyable text.
   *
   * @param { Optional<Callback<Array<string>>> } callback - Callback invoked when the selected text changes.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onTextSelectionChange(callback: Optional<Callback<Array<string>>>): SelectionContainerAttribute;

  /**
   * Triggered before a copy operation is performed. This API returns the result asynchronously through a callback.
   *
   * > **NOTE**
   * >
   * > - The callback parameter is the selected text concatenated in the visual order of the **Text** components, and
   * > the concatenation method is determined by [textJoinStyle]{@link SelectionContainerAttribute#textJoinStyle}.
   * >
   * > - Returning **false** blocks this cross-node copy operation and the container-level
   * > [onCopy]{@link SelectionContainerAttribute#onCopy} callback triggering, but does not affect the copy event logic
   * > that each **Text** child component has already processed independently.
   *
   * @param { Optional<Callback<string, boolean>> } callback - Callback invoked before copying. Returning **true**
   *     indicates that copying is allowed, and returning **false** indicates that copying is not allowed.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Optional<Callback<string, boolean>>): SelectionContainerAttribute;

  /**
   * Triggered when the copy button on the selection menu is tapped after the selection menu is displayed by long-
   * pressing the inner area of the text. Only text copying is supported. This API returns the result asynchronously
   * through a callback.
   *
   * > **NOTE**
   * >
   * > - The callback parameter is the selected text concatenated in the visual order of the **Text** components. The
   * > concatenation method is determined by [textJoinStyle]{@link SelectionContainerAttribute#textJoinStyle}.
   * >
   * > - This callback is triggered only when the container-level
   * > [onWillCopy]{@link SelectionContainerAttribute#onWillCopy} returns **true**.
   *
   * @param { Optional<Callback<string>> } callback - Callback for the copy event.
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onCopy(callback: Optional<Callback<string>>): SelectionContainerAttribute;
}

/**
 * The **SelectionContainer** component provides cross-node text selection, copying, and menu extension capabilities for
 * multiple text nodes. It supports unified configuration of the caret color and highlight color of selected text,
 * flexible text concatenation policies, and custom selection menus and menu extension options. It is suitable for
 * scenarios where continuous text selection, unified copying, style customization, and menu extension are required
 * across multiple **Text** components. It resolves the problem of fragmented text selection experience in multi-
 * **Text** component scenarios and improves the user interaction experience in complex text layouts.
 *
 * > **NOTE**
 * >
 * > - The text content returned by the selected text related callbacks in this component is concatenated in the top-to-
 * > bottom display order of the [Text]{@link ./@internal/component/ets/text} components.
 * >
 * > - By default, this component uses the [Stack]{@link ./@internal/component/ets/stack} layout. If other container
 * > layout requirements exist, place a container component in **SelectionContainer**.
 * >
 * > - When text is selected in **SelectionContainer**, the magnifier is not displayed, and
 * > [getMagnifier]{@link @ohos.arkui.UIContext:UIContext.getMagnifier} cannot be used to proactively set the magnifier.
 * >
 * > - Dragging is not supported when text is selected in **SelectionContainer**.
 * >
 * > - Text under the [Repeat]{@link ./@internal/component/ets/repeat} component in **SelectionContainer** does not
 * > support cross-node selection.
 * >
 * > - Only the text content in **Text** components participates in cross-node selection and text concatenation.
 *
 * ###### Child Components
 *
 * Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const SelectionContainer: SelectionContainerInterface;

/**
 * Defines SelectionContainer component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const SelectionContainerInstance: SelectionContainerAttribute;