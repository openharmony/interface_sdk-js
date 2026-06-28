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
 * Provides unified dialog APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
declare namespace dialog {
  /**
   * Defines DialogTextStyleOptions in the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogTextStyleOptions {
    /**
     * Set the word break type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    wordBreak?: WordBreak;
  }

  /**
   * Button configuration for fixed-style dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogButton {
    /**
     * Text content of the button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    value: ResourceStr;

    /**
     * Text color of the button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    fontColor?: ResourceColor;

    /**
     * Background color of the button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundColor?: ResourceColor;

    /**
     * Whether to respond when the button is clicked.
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    enabled?: boolean;

    /**
     * Whether the button is the default focus.
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    defaultFocus?: boolean;

    /**
     * Define whether the button responds to Enter/Space key by default.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    primary?: boolean;

    /**
     * Style of the button.
     *
     * @default DialogButtonStyle.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    style?: DialogButtonStyle;

    /**
     * Callback executed when the button is clicked.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    action: VoidCallback;
  }

  /**
   * The information of sheet item for action sheet style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogSheet {
    /**
     * Title of the sheet item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    title: ResourceStr;

    /**
     * Icon of the sheet item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    icon?: ResourceStr;

    /**
     * Callback executed when the sheet item is clicked.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    action: VoidCallback;
  }

  /**
   * Base options shared by all dialog types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogBaseOptions {
    /**
     * Dialog controller.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    controller?: DialogBaseController;

    /**
     * Width of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    width?: Dimension;

    /**
     * Height of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    height?: Dimension;

    /**
     * Background color of the dialog box.
     * <br>When backgroundColor is set to a non-transparent color, backgroundBlurStyle must be set to BlurStyle.NONE.
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundColor?: ResourceColor;

    /**
     * Background blur style of the dialog box.
     * <br>Setting this parameter to BlurStyle.NONE disables the background blur.
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundBlurStyle?: BlurStyle;

    /**
     * Background blur style with options.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Background effect with options.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * Border radius of the background.
     *
     * @default { topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    borderRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses;

    /**
     * Border width of the dialog box.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

    /**
     * Border color of the dialog box.
     *
     * @default Color.Black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

    /**
     * Border style of the dialog box.
     *
     * @default BorderStyle.Solid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    borderStyle?: BorderStyle | EdgeStyles;

    /**
     * Shadow of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Alignment of the dialog.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    alignment?: DialogBaseAlignment;

    /**
     * Offset of the dialog relative to the alignment position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    offset?: Offset;

    /**
     * Mask area of the dialog box. Events outside the mask area are transparently transmitted.
     *
     * @default { x: 0, y: 0, width: '100%', height: '100%' }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    maskRect?: Rectangle;

    /**
     * Mask color of the dialog.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    maskColor?: ResourceColor;

    /**
     * Whether the dialog box is a modal.
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    isModal?: boolean;

    /**
     * Whether to display in a subwindow.
     * <br>isModal = true and showInSubWindow = true cannot be used at the same time.
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    showInSubWindow?: boolean;

    /**
     * Defines the dialog display mode when show in subwindow.
     *
     * @default DialogDisplayMode.SCREEN_BASED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    displayModeInSubWindow?: DialogDisplayMode;

    /**
     * Whether to allow dismissal by touching the mask or pressing the Back button.
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    autoCancel?: boolean;

    /**
     * Whether the dialog box can get focus.
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    focusable?: boolean;

    /**
     * Dialog transition parameters for opening/closing the dialog content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    dialogTransition?: TransitionEffect;

    /**
     * Mask transition parameters for opening/closing the mask.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    maskTransition?: TransitionEffect;

    /**
     * Keyboard avoid mode.
     *
     * @default KeyboardAvoidMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    keyboardAvoidMode?: KeyboardAvoidMode;

    /**
     * Distance between the dialog and system keyboard.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    keyboardAvoidDistance?: LengthMetrics;

    /**
     * Callback function before the dialog open animation starts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onWillAppear?: VoidCallback;

    /**
     * Callback function when the dialog appears.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onDidAppear?: VoidCallback;

    /**
     * Callback function before the dialog close animation starts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onWillDisappear?: VoidCallback;

    /**
     * Callback function when the dialog disappears.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onDidDisappear?: VoidCallback;

    /**
     * Callback for interactive closure of the dialog box.
     * <br>If this callback is registered, the dialog box will not be closed immediately after the user touches the
     * mask or the Back button.
     * The reason parameter in the callback is used to determine whether the dialog can be closed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onWillDismiss?: Callback<DialogDismissal>;

    /**
     * Whether to enable the hover mode.
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    enableHoverMode?: boolean;

    /**
     * Display area of the dialog box in hover mode.
     *
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    hoverModeArea?: HoverModeAreaType;

    /**
     * Display level of the dialog box.
     *
     * @default LevelMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    levelMode?: LevelMode;

    /**
     * Unique ID of the node under the display level for the page-level dialog box.
     * The value should be an integer.
     * <br>This parameter takes effect only when levelMode is set to LevelMode.EMBEDDED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    levelUniqueId?: int;

    /**
     * Overlay effect for the page-level dialog box.
     *
     * @default ImmersiveMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    immersiveMode?: ImmersiveMode;

    /**
     * Display order of the dialog.
     *
     * @default The value returned by LevelOrder.clamp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    levelOrder?: LevelOrder;

    /**
     * Set system-styled materials for dialog. Different materials have different effects, which can influence
     * backgroundColor, border, shadow, and other visual attributes of dialog.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    systemMaterial?: SystemUiMaterial;

    /**
     * Sets the distortion animation Mode of the dialog.
     *
     * @default DistortionMode.DISTORTION_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    distortionMode?: DistortionMode;

    /**
     * Sets the edgeLight animation Mode of the dialog.
     *
     * @default EdgeLightMode.EDGELIGHT_DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    edgeLightMode?: EdgeLightMode;
  }

  /**
   * Message options for the dialog box, combining message content with text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogMessage extends DialogTextStyleOptions {
    /**
     * Message content of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    content: ResourceStr;
  }

  /**
   * Options for the fixed-style dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogStyleOptions extends DialogBaseOptions {
    /**
     * Title of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    title?: ResourceStr;

    /**
     * Subtitle of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    subtitle?: ResourceStr;

    /**
     * Message content and text style of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    message?: DialogMessage;

    /**
     * Array of buttons in the dialog box.
     * When provided, the dialog displays as an alert-style dialog with buttons.
     * When used together with sheets, buttons are displayed below the sheet list.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    buttons?: Array<DialogButton>;

    /**
     * The arrangement of buttons.
     *
     * @default DialogButtonOrientation.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    buttonDirection?: DialogButtonOrientation;

    /**
     * Array of sheet items for action-sheet style.
     * When provided, the dialog displays sheet items for user selection.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    sheets?: Array<DialogSheet>;

    /**
     * Grid count of dialog.
     * The value should be an integer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    gridCount?: int;
  }

  /**
   * Options for the custom-style dialog.
   * The dialog content is provided as the first parameter of present() method,
   * not inside this options object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogCustomOptions extends DialogBaseOptions {
    /**
     * Whether to enable the custom style.
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    customStyle?: boolean;
  }
}

/**
 * The class used to control dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class DialogBaseController {
  /**
   * The constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor();

  /**
   * Close the corresponding dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  close(): void;

  /**
   * Get the state.
   *
   * @returns { DialogState } return the state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getState(): DialogState;
}

/**
 * The alignment of dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DialogBaseAlignment {
  /**
   * Vertical top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP = 0,
  /**
   * Align vertically to the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  CENTER = 1,
  /**
   * Vertical bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM = 2,
  /**
   * Default alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DEFAULT = 3,
  /**
   * Align the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_START = 4,
  /**
   * Align the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_END = 5,
  /**
   * Left center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  CENTER_START = 6,
  /**
   * Right center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  CENTER_END = 7,
  /**
   * Align the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_START = 8,
  /**
   * Align the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_END = 9
}

/**
 * The arrangement of buttons in dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DialogButtonOrientation {
  /**
   * Two or fewer buttons are arranged horizontally,
   * and two or more buttons are arranged vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  AUTO = 0,
  /**
   * Buttons are arranged horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  HORIZONTAL = 1,
  /**
   * Buttons are arranged vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  VERTICAL = 2
}

/**
 * Enum for dialog state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DialogState {
  /**
   * Indicates it is uninitialized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  UNINITIALIZED = 0,
  /**
   * Indicates it is initialized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  INITIALIZED = 1,
  /**
   * Indicates it is appearing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  APPEARING = 2,
  /**
   * Indicates it is appeared.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  APPEARED = 3,
  /**
   * Indicates it is disappearing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DISAPPEARING = 4,
  /**
   * Indicates it is disappeared.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DISAPPEARED = 5
}

/**
 * Response result for dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface DialogResult {
  /**
   * Id of the dialog.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dialogId: int;
}

/**
 * Provides information about the action to dismiss the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface DialogDismissal {
  /**
   * Callback for dismissing the dialog box. This API is called only when the dialog box needs to be exited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dismiss: VoidCallback;

  /**
   * Reason why the dialog box cannot be dismissed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  reason: DismissReason;
}

export default dialog;