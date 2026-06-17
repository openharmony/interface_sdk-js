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
 * @file CustomDialog
 * @kit ArkUI
 */

/**
 * Defines the style of the custom dialog box.
 * 
 * > **NOTE**
 * >
 * > - Pressing the Back or ESC key closes the dialog box.
 * >
 * > - If the dialog box reaches its maximum allowable height on the screen when avoiding the soft keyboard, it reduces 
 * > its height to fit.
 * > >   It should be noted that this height adjustment is applied to the outermost container. If a child component 
 * > within this container has been assigned a larger fixed height, since the container does not clip its content by 
 * > default, parts of the dialog box may still be displayed off-screen.
 * >
 * > - Use the custom dialog box to contain simple alert messages only. Do not use it as a page. When the dialog box 
 * > avoids the soft keyboard, there is a 16 vp safe spacing between the two.
 * >
 * > - For optimal visual experience, dialog box display and closing include default animations, though the animation 
 * > duration may vary by device.
 * > >   Note: During animation playback, the page does not respond to touch, swipe, or click interactions. To disable 
 * > default dialog box animations, set **duration** of both **openAnimation** and **closeAnimation** to **0**.
 * >
 * > - In ArkUI, dialog boxes do not close automatically when you switch pages unless you manually call **close**. To 
 * > enable a dialog box to be dismissed during page navigation, consider using the 
 * > [navigation subpage displayed in dialog mode](docroot://ui/arkts-navigation-navdestination.md#page-display-mode) or
 * > [page-level dialog box](docroot://ui/arkts-embedded-dialog.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface CustomDialogControllerOptions {
  /**
   * Builder of the custom dialog box content.
   * 
   * **NOTE**
   * 
   * If the builder uses a callback as the input parameter, as in **builder: custombuilder({ callback: ()=> {...}})**, 
   * pay attention to the binding of **this**.
   * 
   * To listen for data changes in the builder, use the @Link or @Consume decorator; other decorators, such as @Prop and
   * @ObjectLink, do not apply.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  builder: any;

  /**
   * Callback invoked when the dialog box is closed after the Back button or mask is touched or the Esc key is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cancel?: () => void;

  /**
   * Whether to close the dialog box when the mask is touched. The value **true** means to close the dialog box when the
   * mask is touched, and **false** means the opposite.
   * 
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoCancel?: boolean;

  /**
   * Alignment mode of the dialog box in the vertical direction.
   * 
   * Default value: **DialogAlignment.Default**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box relative to the alignment position.
   * 
   * Default value: **{dx: 0, dy: 0}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offset?: Offset;

  /**
   * Whether to use a custom style for the dialog box. **true** means a custom style cannot be used for the dialog box, 
   * and **false** means the opposite.
   * 
   * Default value: **false**
   * 
   * When this parameter is set to **false**:
   * 
   * 1. The default rounded corner radius is 32 vp.
   * 2. If the width and height of the dialog box are not set, the dialog box automatically adapts its width to the grid system and its height to the custom content node.
   * 3. The set width of the dialog box cannot exceed the maximum width in the default style (100% width for a custom node), and the set height cannot exceed the maximum height (100% height for a custom node).
   * 4. Due to safe area constraints, the dialog box display area excludes safe areas. For example, on PC/2-in-1 devices, it avoids screen edges and window title bars.
   * 
   * When this parameter is set to **true**:
   * 
   * 1. The rounded corner radius is 0, and the background color is transparent.
   * 2. The width, height, border width, border style, border color, and shadow width cannot be set for the dialog box.
   * 3. The dialog box display area covers the entire screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  customStyle?: boolean;

  /**
   * Number of [grid columns](docroot://ui/arkts-layout-development-grid-layout.md) occupied by the dialog box.
   * 
   * The default value is subject to the window size, and the maximum value is the maximum number of columns supported 
   * by the system. If this parameter is set to an invalid value, the default value is used.
   * 
   * Value range: an integer no less than 0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  gridCount?: number;

  /**
   * Custom mask color.
   * 
   * Default value: **0x33000000**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskColor?: ResourceColor;

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
   * Parameters for defining the open animation of the dialog box.
   * 
   * **NOTE**
   * 
   * **tempo**: The default value is **1**; a value less than or equal to 0 is handled as the default value.
   * 
   * **iterations**: The default value is **1**, indicating that the animation is played once; any other value is 
   * handled as the default value.
   * 
   * **playMode**: The default value is **PlayMode.Normal**; any other value is handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  openAnimation?: AnimateParam;

  /**
   * Parameters for defining the close animation of the dialog box.
   * 
   * **NOTE**
   * 
   * **tempo**: The default value is **1**; a value less than or equal to 0 is handled as the default value.
   * 
   * **iterations**: The default value is **1**, indicating that the animation is played once; any other value is 
   * handled as the default value.
   * 
   * **playMode**: The default value is **PlayMode.Normal**; any other value is handled as the default value.
   * 
   * For page transition, you are advised to use the default close animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  closeAnimation?: AnimateParam;

  /**
   * Whether to show the dialog box in a subwindow when the dialog box needs to be displayed outside the main window. 
   * **true**: The dialog box is shown in a subwindow.
   * 
   * Default value: **false**
   * 
   * **NOTE**
   * 
   * A dialog box whose **showInSubWindow** attribute is **true** cannot trigger the display of another dialog box whose
   * **showInSubWindow** attribute is also **true**. Avoid using the **CalendarPicker**, **CalendarPickerDialog**, 
   * **DatePickerDialog**, **TextPickerDialog**, **TimePickerDialog**, and **Toast** components in the dialog box where 
   * **showInSubWindow** is set to **true**, as the dialog box may affect the behavior of these components.
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * @since 26.0.0 dynamic
   */
  displayModeInSubWindow?: DialogDisplayMode;

  /**
   * Background color of the dialog box.
   * 
   * Default value: **Color.Transparent**
   * 
   * **NOTE**
   * 
   * If the content builder also has the background color set, the background color set here will be overridden by the 
   * background color of the content builder.
   * 
   * The background color will be visually combined with the blur effect when both properties are set. If the resulting 
   * effect does not match your design requirements, you can disable the blur effect entirely by explicitly setting the 
   * **backgroundBlurStyle** property to **BlurStyle.NONE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Rounded corner radius of the background.
   * 
   * You can set separate radii for the four corners.
   * 
   * Default value: **{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }**
   * 
   * Note: The default corner radius of the background is 32 vp. This attribute must be used together with the 
   * [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)} 
   * attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  cornerRadius?: Dimension | BorderRadiuses;

  /**
   * Whether the dialog box is a modal, which has a mask applied and does not allow for interaction with other 
   * components around the menu. 
   * 
   * **true**: The dialog box is a modal. 
   * 
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth?: Dimension | EdgeWidths;

  /**
   * Border color of the dialog box.
   * 
   * Default value: **Color.Black**
   * 
   * **borderColor** must be used with **borderWidth** in pairs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor?: ResourceColor | EdgeColors;

  /**
   * Border style of the dialog box.
   * 
   * Default value: **BorderStyle.Solid**
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
   * @atomicservice
   * @since 12 dynamic
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
   * How the dialog box avoids the soft keyboard when it is brought up.
   * 
   * Default value: **KeyboardAvoidMode.DEFAULT**
   *
   * @default KeyboardAvoidMode.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  keyboardAvoidMode?: KeyboardAvoidMode;

  /**
   * Whether to respond when the device is in semi-folded mode. The value **true** means to respond when the device is 
   * in semi-folded mode.
   * 
   * Default value: **false**, meaning not to enable the hover state.
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
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.
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
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onWillDisappear?: Callback<void>;

  /**
   * Distance between the dialog box and the keyboard after keyboard avoidance is applied.
   * 
   * **NOTE**
   * 
   * - Default value: **16vp**
   * - Default unit: vp
   * - This parameter takes effect only when **keyboardAvoidMode** is set to **DEFAULT**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAvoidDistance?: LengthMetrics;

  /**
   * Display level of the dialog box.
   * 
   * **NOTE**
   * 
   * - Default value: **LevelMode.OVERLAY.**
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
   * Whether the dialog box can gain focus. **true**: The dialog box can gain focus. **false**: The dialog box cannot 
   * gain focus.
   * 
   * Default value: **true**
   * 
   * **NOTE**
   * 
   * Only dialog boxes that are displayed on top of the current window can gain focus.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  focusable?: boolean;

  /**
   * System material of the dialog box. Different materials have different effects and can affect visual attributes such
   * as the background color, border, and shadow of the dialog box.
   *
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
   * @default EdgeLightMode.EDGELIGHT_DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
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
 * Defines the state of the custom dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 */
declare type PromptActionCommonState = import('../api/@ohos.promptAction').promptAction.CommonState;

/**
 * Defines the controller of the custom dialog box.
 * 
 * ###### Objects to Import
 * 
 * ```ts
 * dialogController : CustomDialogController | null = new CustomDialogController(CustomDialogControllerOptions)
 * ```
 * 
 * > **NOTE**
 * >
 * > - **CustomDialogController** is effective only when it is a member variable of the @CustomDialog and @Component 
 * > decorated struct and is defined in the @Component decorated struct. For details, see the following example.
 * >
 * > - You can pass in multiple other controllers in the CustomDialog to open one or more other CustomDialogs in the 
 * > CustomDialog. In this case, you must place the controller pointing to the self behind all controllers. For details,
 * > see 
 * > [Example 1: Opening Nested Dialog Boxes](docroot://reference/apis-arkui/arkui-ts/ts-methods-custom-dialog-box.md#example-1-opening-nested-dialog-boxes).
 * > 
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class CustomDialogController {
  /**
   * Constructor for a custom dialog box.
   * 
   * > **NOTE**
   * >
   * > Custom dialog box parameters do not support dynamic updates. However, by setting **customStyle** to **true** and 
   * > configuring attributes such as [background color]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * > [background blur]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)},
   * > and [width/height]{@link common} on the custom component, dynamic updates can be achieved through state variables
   * > bound to these attributes.
   * >
   * > If **CustomDialogController** is used as a global variable to implement global custom dialog boxes, the previous 
   * > dialog box cannot be closed after a new value is assigned to the controller. You are advised to close the dialog 
   * > box before reassigning the value.
   * >
   * > When a custom dialog box is started within another custom dialog box, you are advised not to close the latter 
   * > custom dialog box directly.
   *
   * @param { CustomDialogControllerOptions } value - Parameters of the custom dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor(value: CustomDialogControllerOptions);

  /**
   * Opens the content of the custom dialog box. This API can be called multiple times. If the dialog box is displayed 
   * in a subwindow, no new subwindow is allowed.
   * 
   * > **NOTE**
   * >
   * > **CustomDialog** with subwindow display (**showInSubwindow** set to **true**) is not supported in input method 
   * > windows. For details, see the constraints in 
   * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
   * > of the input method framework documentation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  open();

  /**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  close();

  /**
   * Obtains the state of the custom dialog box.
   *
   * @returns { PromptActionCommonState } State of the custom dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getState(): PromptActionCommonState;
}