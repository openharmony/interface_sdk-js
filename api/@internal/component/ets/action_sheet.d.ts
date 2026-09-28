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
 * Defines the information about the dialog box dismissal.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissDialogAction {
  /**
   * Callback for the dialog box dismiss event. The developer calls it when the dialog box needs to be closed. If the
   * dialog box does not need to be closed, it is not called, and the dialog box remains open.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Type of the operation that triggers closing of the dialog box. The developer can determine the user's closing
   * operation based on **reason** and decide whether to call **dismiss** to close the dialog box.
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
   * Whether the button is the default focus. The value **true** indicates that the button is the default focus, and
   * **false** indicates the opposite. When the dialog box gains focus and no focus traversal is performed using the Tab
   * key, this button responds to the Enter key by default. In the case of multiple dialog boxes, the button can
   * automatically gain focus and respond continuously. The default Enter key response capability does not take effect
   * when defaultFocus is true.
   *
   * Default value: false
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
 * Defines the offset of the dialog box relative to the position of **alignment**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ActionSheetOffset {
  /**
   * Offset of the dialog box relative to the alignment position on the x-axis.
   *
   * A pixel unit can be specified, for example, '10px', or a percentage string can be set, for example, '100%'.
   *
   * **NOTE**
   *
   * When no pixel unit is specified, the default unit is vp. For example, '10' is equivalent to '10vp'.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dx: number | string | Resource;
  /**
   * Offset of the dialog box relative to the alignment position on the y-axis.
   *
   * A pixel unit can be specified, for example, '10px', or a percentage string can be set, for example, '100%'.
   *
   * **NOTE**
   *
   * When no pixel unit is specified, the default unit is vp. For example, '10' is equivalent to '10vp'.
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
 * Import the LevelMode type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').LevelMode } LevelMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type LevelMode = import('../api/@ohos.promptAction').LevelMode;

/**
 * Import the ImmersiveMode type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').ImmersiveMode } ImmersiveMode
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
interface ActionSheetOptions {
  /**
   * Dialog box title.
   *
   * When the text is too long to be displayed, an ellipsis is used to replace the part that is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  title: string | Resource;

  /**
   * Dialog box subtitle.
   *
   * When the text is too long to be displayed, an ellipsis is used to replace the part that is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * Dialog box content.
   *
   * When the text is too long, a scroll bar is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  message: string | Resource;

  /**
   * Enabling status, default focus, button style, text content, and click callback of the confirm button.
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
   * Callback invoked when the dialog box is closed by tapping the mask.
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
   * Option content. Each option supports setting an image, text, and a callback for selection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  sheets: Array<SheetInfo>;

  /**
   * Whether to close the dialog box when the mask is tapped.
   *
   * Default value: **true**
   *
   * When the value is **true**, tapping the mask closes the dialog box; when the value is **false**, tapping the mask
   * does not close the dialog box.
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
   * If **showInSubWindow** is set to true in **UIExtension**, the dialog box is aligned based on the host window of
   * **UIExtension**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box relative to the position of **alignment**.
   *
   * Default value:
   *
   * 1. When **alignment** is set to **Top**, **TopStart**, or **TopEnd**, the default value is **{dx: 0,dy: "40vp"}**.
   * 2. When **alignment** is set to **Center**, **CenterStart**, **CenterEnd**, **Bottom**, **BottomStart**, **BottomEnd**, or **Default**, the default value is **{dx: 0,dy: "-40vp"}**.
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
   * Mask area of the dialog box. Events within the mask area are not passed through, while events outside the mask area
   * are passed through.
   *
   * Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**
   *
   * **NOTE**
   *
   * When **showInSubWindow** is **true**, **maskRect** does not take effect.
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
   * Whether to display the dialog box in a subwindow when it needs to be displayed outside the main window. The value
   * **true** indicates that the dialog box is displayed in a subwindow.
   *
   * Default value: **false**, which means the dialog box is displayed within the app instead of in an independent
   * subwindow.
   *
   * **NOTE**
   *
   * A dialog box with **showInSubWindow** set to **true** cannot trigger the display of another dialog box with
   * **showInSubWindow** set to **true**.
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
   * Whether the dialog box is a modal window. A modal window has a mask, while a non-modal window does not. When the
   * value is **false**, the dialog box is a non-modal window without a mask.
   *
   * Default value: **true**, which means the dialog box has a mask.
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
   * **backgroundColor** is superimposed with the blur attribute **backgroundBlurStyle** to produce an effect. If the
   * effect does not meet expectations, set **backgroundBlurStyle** to **BlurStyle.NONE** to cancel the blur. When
   * **backgroundBlurStyle** is set to a value other than NONE, do not set **backgroundColor**; otherwise, the color
   * display will not meet expectations.
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
   * Blur material of the dialog box background.
   *
   * Default value: **BlurStyle.NONE** since API version 26.0.0, and **BlurStyle.COMPONENT_ULTRA_THICK** before API
   * version 26.0.0.
   *
   * **NOTE**
   *
   * Set this attribute to **BlurStyle.NONE** to disable background blur. When **backgroundBlurStyle** is set to a value
   * other than NONE, do not set **backgroundColor**; otherwise, the color display will not meet expectations.
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
   * Background blur effect. For the default value, see the **BackgroundBlurStyleOptions** type description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect parameters. For the default value, see the **BackgroundEffectOptions** type description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Interactive dismiss callback.
   *
   * **NOTE**
   *
   * 1. When the user performs interactive operations such as tapping the mask to close, swiping (left/right), pressing the three-key back button, or pressing ESC on the keyboard, if this callback is registered, the dialog box will not be closed immediately. In the callback, you can obtain the operation type that blocks the dialog box closure through reason, and determine whether the dialog box can be closed based on the reason. To close the dialog box, call the **dismiss** method of [DismissDialogAction]{@link DismissDialogAction} in the callback. The reason returned by the current component does not support the **CLOSE_BUTTON** enum value.
   * 2. In the **onWillDismiss** callback, **onWillDismiss** interception cannot be performed again.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissDialogAction>;

  /**
   * Transition effect for the display and exit of the dialog box.
   *
   * **NOTE**
   *
   * 1. If this attribute is not set, the default display/exit animation is used.
   * 2. If the back key is pressed during the display animation, the display animation is interrupted and the exit animation is executed. The animation effect is the result of superimposing the curves of the display animation and the exit animation.
   * 3. If the back key is pressed during the exit animation, the exit animation is not interrupted and continues to execute. Pressing the back key again exits the app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Corner radius of the dialog box background.
   *
   * The radius of the four corners can be set separately.
   *
   * Default value: **{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }**
   *
   * The corner radius is limited by the component size, and the maximum value is half of the component width or height.
   * If the value is negative, the default value is used.
   *
   * Percentage parameter: the corner radius of the dialog box is set as a percentage of the width and height of the
   * parent dialog box.
   *
   * **NOTE**
   *
   * When the **cornerRadius** attribute type is **LocalizedBorderRadiuses**, the layout order can be changed based on
   * the language habit.
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
   * Width of the dialog box background.
   *
   * **NOTE**
   *
   * - Default maximum width of the dialog box: **400vp**.
   * - Percentage parameter: the reference width of the dialog box is the width of the window where it is located, and
   * the width can be adjusted smaller or larger based on this.
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
   * Height of the dialog box background.
   *
   * **NOTE**
   *
   * - Default maximum height of the dialog box: 0.9 × (window height - safe area).
   * - Percentage parameter: the reference height of the dialog box is (window height - safe area), and the height can
   * be adjusted smaller or larger based on this.
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
   * Border width of the dialog box background.
   *
   * The width of the four borders can be set separately.
   *
   * Default value: **0**
   *
   * Percentage parameter: the border width of the dialog box is set as a percentage of the width of the parent dialog
   * box.
   *
   * When the left and right borders of the dialog box are greater than the dialog box width, or the top and bottom
   * borders are greater than the dialog box height, the display may not meet expectations.
   *
   * **NOTE**
   *
   * When the **borderWidth** attribute type is **LocalizedEdgeWidths**, the layout order can be changed based on the
   * language habit.
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
   * Border color of the dialog box background.
   *
   * Default value: **Color.Black**
   *
   * If the **borderColor** attribute is used, it must be used together with the **borderWidth** attribute.
   *
   * **NOTE**
   *
   * When the **borderColor** attribute type is **LocalizedEdgeColors**, the layout order can be changed based on the
   * language habit.
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
   * Border style of the dialog box background.
   *
   * Default value: **BorderStyle.Solid**.
   *
   * If the **borderStyle** attribute is used, it must be used together with the **borderWidth** attribute.
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
   * Shadow of the dialog box background.
   *
   * On 2-in-1 devices, in the default scenario, the shadow value when the dialog box is focused is
   * **ShadowStyle.OUTER_FLOATING_MD**, and when it loses focus, it is **ShadowStyle.OUTER_FLOATING_SM**. Other devices
   * have no shadow by default.
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
   * Whether to respond to the hover state. The value **true** indicates that the hover state is responded to.
   *
   * Default value: **false**, which means no response by default.
   *
   * **NOTE**
   *
   * On PCs/2-in-1 devices, the dialog box is displayed in the upper half of the screen by default. When
   * **enableHoverMode** is set to **true**, it can be displayed in the lower half of the screen by setting the
   * **hoverModeArea** parameter. On other devices, when **enableHoverMode** is set to **true**, the dialog box is
   * displayed in the lower half of the screen by default, and can be displayed in the upper half of the screen by
   * setting the **hoverModeArea** parameter.
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
   * Default display area of the dialog box in the hover state.
   *
   * **NOTE**
   *
   * This attribute must be used together with the **enableHoverMode** attribute.
   *
   * Default value: **HoverModeAreaType.BOTTOM_SCREEN**.
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
   * Event callback after the dialog box is displayed.
   *
   * **NOTE**
   *
   * 1. The normal sequence is: **onWillAppear** >> **onDidAppear** >> **onWillDisappear** >> **onDidDisappear**.
   * 2. Callback events that change the dialog box display effect set in **onDidAppear** take effect the second time the dialog box is displayed.
   * 3. When the dialog box is quickly displayed and closed, **onWillDisappear** takes effect before **onDidAppear**.
   * 4. If the dialog box is completely closed before the entrance animation is completed, the animation is interrupted and **onDidAppear** is not triggered.
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
   * The normal sequence is: **onWillAppear** >> **onDidAppear** >> **onWillDisappear** >> **onDidDisappear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onDidDisappear?: Callback<void>;

  /**
   * Event callback before the dialog box display animation.
   *
   * **NOTE**
   *
   * 1. The normal sequence is: **onWillAppear** >> **onDidAppear** >> **onWillDisappear** >> **onDidDisappear**.
   * 2. Callback events that change the dialog box display effect set in **onWillAppear** take effect the second time the dialog box is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onWillAppear?: Callback<void>;

  /**
   * Event callback before the dialog box exit animation.
   *
   * **NOTE**
   *
   * 1. The normal sequence is: **onWillAppear** >> **onDidAppear** >> **onWillDisappear** >> **onDidDisappear**.
   * 2. When the dialog box is quickly displayed and closed, **onWillDisappear** may take effect before **onDidAppear**.
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
   * - This attribute takes effect only when **showInSubWindow** is set to false.
   * - When set to **LevelMode.EMBEDDED**, the level of the page-level dialog box can be set through **levelUniqueId**,
   * and the mask effect of the dialog box within the page can be set through **immersiveMode**.
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
   * [getUniqueId]{@link ../../../arkui/FrameNode:FrameNode#getUniqueId} of the level where the page-level dialog box
   * needs to be displayed.
   *
   * Value range: a number greater than or equal to 0.
   *
   * **NOTE**
   *
   * - This attribute takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  levelUniqueId?: number;

  /**
   * Mask effect of the dialog box within the page.
   *
   * **NOTE**
   *
   * - Default value: **ImmersiveMode.DEFAULT**
   * - This attribute takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.
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
   * - Dynamic refresh of the order is not supported.
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
   * System material of the dialog box.
   *
   * **NOTE**
   *
   * - Default value: an ImmersiveMaterial object whose style in [ImmersiveOptions]{@link ImmersiveOptions}
   * is **ImmersiveStyle.ULTRA_THICK**. When set to **undefined**, the default value is used.
   * - Different materials have different effects. This API affects the background color
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, background blur
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)},
   * background effect [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}, border
   * color [borderColor]{@link CommonMethod#borderColor}, border width [borderWidth]{@link CommonMethod#borderWidth},
   * and shadow [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}. When the system material is
   * set, the preceding APIs do not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
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
 * Class for ActionSheet.
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
   * > Since API version 10, you can use [showActionSheet]{@link @ohos.arkui.UIContext:UIContext.showActionSheet} in
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