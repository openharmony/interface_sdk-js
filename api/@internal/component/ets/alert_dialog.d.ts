/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file AlertDialog
 * @kit ArkUI
 */

/**
 * Enumerates the alignment modes of the alert dialog boxes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum DialogAlignment {
  /**
   * Vertical top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * Vertical center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * Vertical bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * Default alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Default,

  /**
   * Top left alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TopStart,

  /**
   * Top right alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TopEnd,

  /**
   * Center left alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  CenterStart,

  /**
   * Center right alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  CenterEnd,

  /**
   * Bottom left alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  BottomStart,

  /**
   * Bottom right alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  BottomEnd,
}

/**
 * Enumerates the alignment modes of the buttons in the alert dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DialogButtonDirection {
  /**
   * Buttons are laid out horizontally when there are two or fewer buttons and vertically otherwise.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO = 0,

  /**
   * Buttons are laid out horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HORIZONTAL = 1,

  /**
   * Buttons are laid out vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VERTICAL = 2,
}

/**
 * Defines the button style of the alert dialog box.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface AlertDialogButtonBaseOptions {
  /**
   * Whether to respond when the button is clicked.
   * 
   * Default value: **true**
   * 
   * **true**: Respond when the button is clicked. **false**: Do not respond when the button is clicked.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enabled?: boolean;

  /**
   * Whether the button is the default focus. Default value: **false**. **true**: The button is the default focus. 
   * **false**: The button is not the default focus.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Style of the button.
   * 
   * Default value: **DialogButtonStyle.DEFAULT**
   *
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: DialogButtonStyle;

  /**
   * Text of the button. If the value is null, the button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Font color of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Background color of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Callback upon button clicking.
   *
   * @type { function } [since 10 - 17]
   * @type { VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action: VoidCallback;
}

/**
 * Inherits from [AlertDialogButtonBaseOptions]{@link AlertDialogButtonBaseOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface AlertDialogButtonOptions extends AlertDialogButtonBaseOptions {
  /**
   * Whether the button responds to the **Enter** key by default when the dialog box has focus and the **Tab** key is 
   * not pressed for sequential focus navigation. If there are multiple buttons, set this parameter to **true** for only
   * one button. Otherwise, no button will respond. Multiple dialog boxes can automatically gain focus and respond to 
   * user interactions in a sequential manner. This parameter does not take effect when **defaultFocus** is set to 
   * **true**. **true**: The button responds to the **Enter** key by default. **false**: The button does not respond to 
   * the **Enter** key by default.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  primary?: boolean;
}

/**
 * Describes the word break rule of the message in the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextStyle {
  /**
   * Word break rule.
   * 
   * Default value: **WordBreak.BREAK_ALL**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak?: WordBreak;
}

/**
 * Defines the display order of the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type LevelOrder = import('../api/@ohos.promptAction').LevelOrder;

/**
 * Enumerates the alert dialog box styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface AlertDialogParam {
  /**
   * Title of the dialog box.
   * 
   * Prior to API version 20: The title of the dialog box is left-aligned.
   * 
   * API version 20 and later: The title of the dialog box is center-aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  title?: ResourceStr;
  
  /**
   * Subtitle of the dialog box.
   * 
   * Prior to API version 20: The subtitle of the dialog box is left-aligned.
   * 
   * API version 20 and later: The subtitle of the dialog box is center-aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * Content of the dialog box.
   * 
   * Prior to API version 20: The content of the dialog box is left-aligned.
   * 
   * API version 20 and later: The content of the dialog box is center-aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  message: ResourceStr;

  /**
   * Whether to dismiss the dialog box when the mask is touched. The value **true** means to dismiss the dialog box when
   * the mask is touched, and **false** means the opposite.
   * 
   * Default value: **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoCancel?: boolean;

  /**
   * Callback invoked when the dialog box is closed after the overlay is clicked.
   *
   * @type { ?function } [since 7 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cancel?: VoidCallback;

  /**
   * Alignment mode of the dialog box in the vertical direction.
   * 
   * Default value: **DialogAlignment.Default**
   * 
   * **NOTE**
   * 
   * If **showInSubWindow** is set to **true** in **UIExtension**, the dialog box is aligned with the host window based 
   * on **UIExtension**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box based on the **alignment** settings.
   * 
   * Default value: **{ dx: 0 , dy: 0 }**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offset?: Offset;

  /**
   * Number of grid columns occupied by the width of the dialog box.
   * 
   * Default value: **4**
   * 
   * Value range: an integer no less than 0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  gridCount?: number;

  /**
   * Mask area of the dialog box. Events outside the mask area are transparently transmitted, and events within the mask
   * area are not.
   * 
   * Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**
   * 
   * **NOTE**
   * 
   * **maskRect** does not take effect when **showInSubWindow** is set to **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;
  
  /**
   * Whether to show the dialog box in a subwindow when the dialog box needs to be displayed outside the main window. 
   * 
   * **true**: The dialog box is shown in a subwindow.
   * 
   * Default value: **false**, meaning the dialog box is displayed within the application, not in a separate subwindow
   * 
   * **NOTE**
   * 
   * A dialog box whose **showInSubWindow** attribute is **true** cannot trigger the display of another dialog box whose
   * **showInSubWindow** attribute is also **true**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * Whether the dialog box is a modal. A modal dialog box has a mask applied, while a non-modal dialog box does not. 
   * **false**: The dialog box is not a modal.
   * 
   * Default value: **true**.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  isModal?: boolean;

  /**
   * Background color of the dialog box.
   * 
   * Default value: **Color.Transparent**
   * 
   * **NOTE**
   * 
   * The background color will be visually combined with the blur effect when both properties are set. If the resulting 
   * effect does not match your design requirements, you can disable the blur effect entirely by explicitly setting the 
   * **backgroundBlurStyle** property to **BlurStyle.NONE**.
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the dialog box.
   * 
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   * 
   * **NOTE**
   * 
   * Setting this parameter to **BlurStyle.NONE** disables the background blur. When **backgroundBlurStyle** is set to a
   * value other than **NONE**, do not set **backgroundColor**. If you do, the color display may not produce the 
   * expected visual effect.
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Options for customizing the background blur style. For details about the default value, see 
   * **BackgroundBlurStyleOptions**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Options for customizing the background effect. For details about the default value, see 
   * **BackgroundEffectOptions**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Callback for interactive dismissal of the dialog box.
   * 
   * **NOTE**
   * 
   * 1. If this callback is registered, the dialog box will not be dismissed immediately after the user touches the mask or the Back button, presses the **Esc** key, or swipes left or right on the screen. The **reason** parameter in the callback is used to determine whether the dialog box can be dismissed. The reason returned by the component does not support the value **CLOSE_BUTTON**.
   * 2. In the **onWillDismiss** callback, another **onWillDismiss** callback is not allowed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissDialogAction>;

  /**
   * Transition effect for the appearance and disappearance of the dialog box.
   * 
   * **NOTE**
   * 
   * 1. If this parameter is not set, the default effect is used.
   *  2. Touching the Back button during the appearance animation pauses the appearance animation and starts the disappearance animation. The final effect is one obtained after the curves of the appearance and disappearance animations are combined.
   *  3. Touching the Back button during the exit animation does not affect the animation playback. Touching the Back button again closes the application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Corner radius of the background.
   * 
   * You can set separate radii for the four corners.
   * 
   * Default value: **{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }**
   * 
   * The radius of the rounded corners is subject to the component size. Its maximum value is half of the component 
   * width or height. If the value is negative, the default value is used.
   * 
   * When set to a percentage, the value defines the radius as a percentage of the parent dialog box's width or height.
   * 
   * **NOTE**
   * 
   * When **cornerRadius** is of type LocalizedBorderRadiuses, the layout order can be dynamically adjusted based on the
   * user's language settings.
   *
   * @default { topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Width of the dialog box.
   * 
   * **NOTE**
   * 
   * - Default maximum width of the dialog box: 400 vp
   * - When this parameter is set to a percentage, the reference width of the dialog box is the width of the window 
   * where the dialog box is located. You can decrease or increase the width as needed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * Height of the dialog box.
   * 
   * **NOTE**
   * 
   * - Default maximum height of the dialog box: 0.9 x (Window height – Safe area)
   * - When this parameter is set to a percentage, the reference height of the dialog box is the height of the window 
   * where the dialog box is located minus the safe area. You can decrease or increase the height as needed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height?: Dimension;

  /**
   * You can set the width for all four sides or set separate widths for individual sides.
   * 
   * Default value: **0**
   * 
   * When set to a percentage, the value defines the border width as a percentage of the parent dialog box's width.
   * 
   * If the left and right borders are greater than its width, or the top and bottom borders are greater than its 
   * height, the dialog box may not display as expected.
   * 
   * **NOTE**
   * 
   * When **borderWidth** is of type LocalizedEdgeWidths, the layout order can be dynamically adjusted based on the user
   * 's language settings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * Border color of the dialog box.
   * 
   * Default value: **Color.Black**
   * 
   * **borderColor** must be used with **borderWidth** in pairs.
   * 
   * **NOTE**
   * 
   * When **borderColor** is of type LocalizedEdgeColors, the layout order can be dynamically adjusted based on the user
   * 's language settings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * Border style of the dialog box.
   * 
   * Default value: **BorderStyle.Solid**.
   * 
   * **borderStyle** must be used with **borderWidth** in pairs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * Shadow of the dialog box.
   * 
   * Default value on 2-in-1 devices: **ShadowStyle.OUTER_FLOATING_MD** when the dialog box is focused and 
   * **ShadowStyle.OUTER_FLOATING_SM** otherwise On other devices, the dialog box has no shadow by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Text style of the message in the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textStyle?: TextStyle;

  /**
   * Whether to respond when the device is in semi-folded mode. The value **true** means to respond when the device is 
   * in semi-folded mode.
   * 
   * Default value: **false**, meaning not to respond when the device is in semi-folded mode.
   * 
   * **NOTE**
   * 
   * For a PC or 2-in-1 device, the dialog box is displayed on the upper half of the screen by default when 
   * **enableHoverMode** is set to **true**. You can set **hoverModeArea** to display the dialog box on the lower half 
   * of the screen. For other devices, the dialog box is displayed on the lower half of the screen by default when 
   * **enableHoverMode** is set to **true**. You can set **hoverModeArea** to display the dialog box on the upper half 
   * of the screen.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Display area of the dialog box in the hover state.
   * 
   * Default value: **HoverModeAreaType.BOTTOM_SCREEN**
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Event callback after the dialog box appears.
   * 
   * **NOTE**
   * 
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**. The settings take effect next time the dialog box appears.
   * 3. When a dialog box is dismissed immediately after being shown, **onWillDisappear** may be triggered before **onDidAppear**.
   * 4. If the dialog box is dismissed before its entrance animation is finished, the animation will be interrupted, and **onDidAppear** will not be triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onDidAppear?: Callback<void>;

  /**
   * Event callback after the dialog box disappears.
   * 
   * **NOTE**
   * 
   * The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onDidDisappear?: Callback<void>;

  /**
   * Event callback when the dialog box is about to appear.
   * 
   * **NOTE**
   * 
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onWillAppear**. The settings take effect next time the dialog box appears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onWillAppear?: Callback<void>;

  /**
   * Event callback when the dialog box is about to disappear.
   * 
   * **NOTE**
   * 
   * The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onWillDisappear?: Callback<void>;

  /**
   * Display level of the dialog box.
   * 
   * **NOTE**
   * 
   * - Default value: **LevelMode.OVERLAY**
   * - This parameter takes effect only when **showInSubWindow** is set to **false**.
   *
   * @default LevelMode.OVERLAY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  levelMode?: LevelMode;

  /**
   * [Unique ID]{@link FrameNode:FrameNode#getUniqueId} of the node under the display level for the page-level dialog 
   * box. This parameter takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.
   * 
   * Value range: a number no less than 0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  levelUniqueId?: number;

  /**
   * Overlay effect for the page-level dialog box.
   * 
   * **NOTE**
   * 
   * - Default value: **ImmersiveMode.DEFAULT**
   * - This parameter takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.
   *
   * @default ImmersiveMode.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  immersiveMode?: ImmersiveMode;

  /**
   * Display order of the dialog box.
   * 
   * **NOTE**
   * 
   * - Default value: **LevelOrder.clamp(0)**
   * - Dynamic updating is not supported.
   *
   * @default The value returns by LevelOrder.clamp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  levelOrder?: LevelOrder;

  /**
   * Set system-styled materials for dialog. Different materials have different effects, which can influence
   * backgroundColor, border, shadow, and other visual attributes of dialog.
   * 
   * Device Behavior Differences:The effect of same material may vary across different devices depending on
   * their computing power.
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * Sets the distortion animation Mode of the dialog.
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;

  /**
   * Sets the edgeLight animation Mode of the dialog.
   *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * Inherited from [AlertDialogParam]{@link AlertDialogParam}.
 * 
 * Priorities of the **confirm** parameters: **fontColor** and **backgroundColor** > **style** > **defaultFocus**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface AlertDialogParamWithConfirm extends AlertDialogParam {
  /**
   * Information about the confirm button. When the dialog box has focus and the **Tab** key is not pressed for 
   * sequential focus navigation, the button responds to the **Enter** key by default. Multiple dialog boxes can 
   * automatically gain focus and respond to user interactions in a sequential manner. The default response to the 
   * **Enter** key does not work when **defaultFocus** is set to **true**.
   *
   * @type { ?object } [since 7 - 17]
   * @type { ?AlertDialogButtonBaseOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  confirm?: AlertDialogButtonBaseOptions;
}

/**
 * Provides information about the action to dismiss the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissDialogAction {
  /**
   * Callback for dismissing the dialog box. This API is called only when the dialog box needs to be exited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;
  
  /**
   * Reason why the dialog box cannot be dismissed. You must specify whether to close the dialog box for each of the 
   * listed actions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Inherited from [AlertDialogParam]{@link AlertDialogParam}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface AlertDialogParamWithButtons extends AlertDialogParam {
  /**
   * Information about the primary button, including the enabling status, default focus, button style, text content, 
   * text color, button background color, and click callback. When the dialog box has focus and focus has not been 
   * shifted using the **Tab** key, the button responds to the **Enter** key by default, and multiple dialog boxes can 
   * gain focus consecutively to respond automatically. The default response to the **Enter** key does not work when 
   * **defaultFocus** is set to **true**. For details, see 
   * [Example 7](docroot://reference/apis-arkui/arkui-ts/ts-methods-alert-dialog-box.md#example-7-customizing-the-background-blur-effect).
   *
   * @type { object } [since 7 - 17]
   * @type { AlertDialogButtonBaseOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  primaryButton: AlertDialogButtonBaseOptions;

  /**
   * Information about the secondary button, including the enabling status, default focus, button style, text content, 
   * text color, button background color, and click callback.
   *
   * @type { object } [since 7 - 17]
   * @type { AlertDialogButtonBaseOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  secondaryButton: AlertDialogButtonBaseOptions;
}

/**
 * Inherited from [AlertDialogParam]{@link AlertDialogParam}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface AlertDialogParamWithOptions extends AlertDialogParam {
  /**
   * Buttons in the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buttons: Array<AlertDialogButtonOptions>;

  /**
   * Button layout direction. The default value is **DialogButtonDirection.AUTO**. You are advised to use the auto mode 
   * for more than three buttons. (Vertical layout is used for more than two buttons, typically accommodating more 
   * buttons.) In non-auto mode, more than three buttons may not be completely displayed, and the buttons that exceed 
   * the display range will be truncated.
   *
   * @default DialogButtonDirection.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buttonDirection?: DialogButtonDirection;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 26.0.0
 * @useinstead ohos.arkui.UIContext.UIContext#showAlertDialog
 */
declare class AlertDialog {
  /**
   * Shows an alert dialog box.
   * 
   * > **NOTE**
   * >
   * > Since API version 10, you can use the 
   * > [showAlertDialog]{@link @ohos.arkui.UIContext:UIContext#showAlertDialog} API in 
   * > [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the alert dialog box is shown in the intended UI 
   * > instance.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons } value - Defines and displays the
   *     **AlertDialog** component. [since 7 - 9]
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions} value - Defines
   *     and displays the **AlertDialog** component. [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showAlertDialog
   */
  static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions);
}
