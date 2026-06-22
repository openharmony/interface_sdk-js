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
 * @file ActionSheet
 * @kit ArkUI
 */

/**
 * Defines the option content in the dialog box. You can configure the text, icon, and callback for each option.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface SheetInfo {
  /**
   * Sheet text.
   * 
   * If the text is too long to display, a scrollbar is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  title: string | Resource;

  /**
   * Sheet icon. By default, no icon is displayed.
   * 
   * The string type can be used to load local images and, more frequently, online images. The value can be a relative 
   * path to a local image, for example, **Image("common/test.jpg")**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: string | Resource;

  /**
   * Callback when the sheet is selected.
   *
   * @type { function } [since 8 - 17]
   * @type { VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  action: VoidCallback;
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
 * Provides button style configuration for the dialog box.
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
interface ActionSheetButtonOptions {
  /**
   * Whether to respond when the button is clicked. The value **true** means to respond when the button is clicked, and 
   * **false** means the opposite.
   * 
   * Default value: **true**
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
   * Whether the button is the default focus. The value **true** means that the button is the default focus, and 
   * **false** means the opposite.
   * 
   * Default value: **false**
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
   * Button style.
   * 
   * Default value: **DialogButtonStyle.DEFAULT**
   *
   * @default DialogButtonStyle.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: DialogButtonStyle;

  /**
   * Button text.
   * 
   * If the text is too long to display, it is truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: string | Resource;

  /**
   * Callback invoked when the button is selected.
   *
   * @type { function } [since 8 - 17]
   * @type { VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  action: VoidCallback;
}

/**
 * Alignment mode of the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ActionSheetOffset {
  /**
   * Offset of the action sheet along the x-axis relative to the alignment position.
   * 
   * Explicitly specify the length unit explicitly, for example, **'10px'**, or provide the length in percentage, for 
   * example, **'100%'**.
   * 
   * **NOTE**
   * 
   * If the unit is not specified, the default unit vp is used, in which case **'10'** is equivalent to **10**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dx: number | string | Resource;
  /**
   * Offset of the action sheet along the y-axis relative to the alignment position.
   * 
   * Explicitly specify the length unit explicitly, for example, **'10px'**, or provide the length in percentage, for 
   * example, **'100%'**.
   * 
   * **NOTE**
   * 
   * If the unit is not specified, the default unit vp is used, in which case **'10'** is equivalent to **10**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dy: number | string | Resource;
}

/**
 * Defines the display level mode for the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type LevelMode = import('../api/@ohos.promptAction').LevelMode;

/**
 * Defines the overlay effect for the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type ImmersiveMode = import('../api/@ohos.promptAction').ImmersiveMode;

/**
 * Provides **ActionSheet** configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface ActionSheetOptions
{
  /**
   * Title of the dialog box.
   * 
   * If the text is too long to display, it is truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  title: string | Resource;
  
  /**
   * Subtitle of the dialog box.
   * 
   * If the text is too long to display, it is truncated with an ellipsis (...).
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
   * If the text is too long to display, a scrollbar is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  message: string | Resource;

  /**
   * Information about the confirm button. When the dialog box has focus and the **Tab** key is not pressed for 
   * sequential focus navigation, the button responds to the **Enter** key by default. Multiple dialog boxes can 
   * automatically gain focus and respond to user interactions in a sequential manner. The default response to the 
   * **Enter** key does not work when **defaultFocus** is set to **true**.
   *
   * @type { ?object } [since 8 - 17]
   * @type { ?ActionSheetButtonOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  confirm?: ActionSheetButtonOptions;

  /**
   * Callback invoked when the dialog box is closed after the overlay is clicked.
   *
   * @type { ?function } [since 8 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cancel?: VoidCallback;

  /**
   * Options in the dialog box. Each option supports the image, text, and callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  sheets: Array<SheetInfo>;

  /**
   * Whether to close the dialog box when the overlay is clicked.
   * 
   * Default value: **true**
   * 
   * The value **true** means to close the dialog box when the overlay is clicked, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  autoCancel?: boolean;

  /**
   * Alignment mode of the dialog box in the vertical direction.
   * 
   * Default value: **DialogAlignment.Bottom**
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
   * @since 8 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box relative to the alignment position.
   * 
   * Default value:
   * 
   * 1. If **alignment** is set to **Top**, **TopStart**, or **TopEnd**, the default offset value is **{dx: 0,dy: "40vp"}**.
   * 2. If **alignment** is set to other values, the default offset value is **{dx: 0,dy: "-40vp"}**.
   *
   * @type { ?object } [since 8 - 17]
   * @type { ?ActionSheetOffset } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  offset?: ActionSheetOffset;

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
   * @default - {x:0,y:0, width:'100%', height:'100%'} [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;
    
  /**
   * Whether to show the dialog box in a subwindow when the dialog box needs to be displayed outside the main window. 
   * **true**: The dialog box is shown in a subwindow.
   * 
   * Default value: **false**, meaning the dialog box is displayed within the application, not in a separate subwindow.
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
   * Default value: **true**
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
   * Callback for interactive closure of the dialog box.
   * 
   * **NOTE**
   * 
   * 1. If this callback is registered, the dialog box will not be dismissed immediately after the user touches the mask or the Back button, presses the Esc key, or swipes left or right on the screen. The **reason** parameter in the callback is used to determine whether the dialog box can be closed. The reason returned by the component does not support the value **CLOSE_BUTTON**.
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
   * Transition effect for the entrance and exit of the dialog box.
   * 
   * **NOTE**
   * 
   * 1. If this parameter is not set, the default effect is used.
   * 2. Touching the Back button during the entrance animation pauses the entrance animation and starts the exit animation. The final effect is one obtained after the curves of the entrance and exit animations are combined.
   * 3. Touching the Back button during the exit animation does not affect the animation playback. Touching the Back button again closes the application.
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
   * You can set the radius for each of the four corners individually.
   * 
   * Default value: **{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }**
   * 
   * The corner radius is subject to the component size, with the maximum value being half of the component width or 
   * height. If the value is negative, the default value is used.
   * 
   * When set to a percentage, the value defines the radius as a percentage of the parent dialog box's width or height.
   * 
   * **NOTE**
   * 
   * When **cornerRadius** is of type LocalizedBorderRadiuses, the layout order can be dynamically adjusted based on the
   * user's language settings.
   *
   * @default - {topLeft:'32vp', topRight:'32vp', bottomLeft:'32vp', bottomRight:'32vp'}, The corner radius is subject
   *     to the component size, with the maximum value being half of the component width or height. If the value is
   *     negative, the default value is used. When set to a percentage, the value defines the radius as a percentage of
   *     the
   *     parent component's width or height.
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
   * @default - Default maximum width of the dialog box: 400 vp,
   *     When this parameter is set to a percentage, the reference width of the dialog box is the width of the window
   *     where the dialog box is located. You can decrease or increase the width as needed.
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
   * @default - Default maximum height of the dialog box: 0.9 x (Window height – Safe area)
   *     <br>When this parameter is set to a percentage, the reference height of the dialog box is the height of the
   *     window where the dialog box is located minus the safe area. You can decrease or increase the height as needed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height?: Dimension;

  /**
   * Border width of the dialog box.
   * 
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
   * @default 0 - When set to a percentage, the value defines the border width as a percentage of the parent dialog
   *     box's width. If the left and right borders are greater than its width, or the top and bottom borders are
   *     greater
   *     than its height, the dialog box may not display as expected.
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
   * @default Color.Black - borderColor must be used with borderWidth in pairs.
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
   * Default value: **BorderStyle.Solid**
   * 
   * **borderStyle** must be used with **borderWidth** in pairs.
   *
   * @default BorderStyle.Solid - borderStyle must be used with borderWidth in pairs.
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
   * @default - Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD when the dialog box is focused and
   *     ShadowStyle.OUTER_FLOATING_SM otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Whether to respond when the device is in semi-folded mode. The value **true** means to respond when the device is 
   * in semi-folded mode.
   * 
   * Default value: **false**, meaning not to enable the hover mode.
   * 
   * **NOTE**
   * 
   * For a PC or 2-in-1 device, the dialog box is displayed on the upper half of the screen by default when 
   * **enableHoverMode** is set to **true**. You can set **hoverModeArea** to display the dialog box on the lower half 
   * of the screen. For other devices, the dialog box is displayed on the lower half of the screen by default when 
   * **enableHoverMode** is set to **true**. You can set **hoverModeArea** to display the dialog box on the upper half 
   * of the screen.
   *
   * @default false - meaning not to enable the hover mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Display area of the dialog box in hover mode.
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
   * @default LevelMode.OVERLAY - This parameter takes effect only when showInSubWindow is set to false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  levelMode?: LevelMode;

  /**
   * [Unique ID]{@link FrameNode:FrameNode#getUniqueId} of the node under the display level for the page-level dialog 
   * box.
   * 
   * Value range: a number no less than 0
   * 
   * **NOTE**
   * 
   * - This parameter takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.
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
   * @default ImmersiveMode.DEFAULT - This parameter takes effect only when levelMode is set to LevelMode.EMBEDDED.
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 26.0.0
 * @useinstead ohos.arkui.UIContext.UIContext#showActionSheet
 */
declare class ActionSheet {
  /**
   * Shows an action sheet in the given settings.
   * 
   * > **NOTE**
   * >
   * > Since API version 10, you can use 
   * > [showActionSheet]{@link @ohos.arkui.UIContext:UIContext#showActionSheet} in 
   * > [UIContext]{@link @ohos.arkui.UIContext} to specify the UI execution context.
   *
   * @param { ActionSheetOptions } value - Parameters of the action sheet.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showActionSheet
   */
  static show(value: ActionSheetOptions);
}