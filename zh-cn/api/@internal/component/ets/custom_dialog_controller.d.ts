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
 * 自定义弹窗的样式。
 * 
 * > **说明：**
 * >
 * > - 按下返回键和ESC键时会让弹窗退出。
 * >
 * > - 弹窗在避让软键盘时到达极限高度之后会压缩高度。
 * > >   需要注意：高度压缩生效在外层容器上，如果容器根节点中的子组件设置了较大的固定高度，由于容器默认不裁剪，依然可能存在超出屏幕显示的情况。
 * >
 * > - 自定义弹窗仅适用于简单提示场景，不能替代页面使用。弹窗避让软键盘时，与软键盘之间存在16vp的安全间距。
 * >
 * > - 为了达成良好的视觉体验，弹窗的显示和关闭存在默认动画，动画时长不同设备间可能存在差异。
 * > >   需要注意：在动画播放过程中，页面不响应触摸、滑动、点击操作。关闭默认弹窗动画效果可设置openAnimation和closeAnimation的duration为0。
 * >
 * > - 当前，ArkUI弹出框默认为非页面级弹出框，在页面路由跳转时，如果开发者未调用close方法将其关闭，弹出框将不会自动关闭。若需实现在跳转页面时覆盖弹出框的场景，可以使用
 * > [组件导航子页面显示类型的弹窗类型](docroot://ui/arkts-navigation-navdestination.md#页面显示类型)或者
 * > [页面级弹出框](docroot://ui/arkts-embedded-dialog.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface CustomDialogControllerOptions {
  /**
   * 自定义弹窗内容构造器。
   * 
   * **说明：** 
   * 
   * 若builder构造器使用回调函数作为入参，请注意使用this绑定问题，如builder: custombuilder({ callback: ()=> {...}})。
   * 
   * 若在builder中监听数据变化可以使用@Link或@Consume，而其他方式如@Prop、@ObjectLink不适用此场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  builder: any;

  /**
   * 返回、ESC键和点击遮障层弹窗退出时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cancel?: () => void;

  /**
   * 是否允许点击遮障层退出，true表示关闭弹窗。false表示不关闭弹窗。
   * 
   * 默认值：true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoCancel?: boolean;

  /**
   * 弹窗在竖直方向上的对齐方式。
   * 
   * 默认值：DialogAlignment.Default
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * 弹窗相对alignment所在位置的偏移量。
   * 
   * 默认值：{ dx: 0, dy: 0 }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offset?: Offset;

  /**
   * 弹窗容器样式是否自定义。值为true表示弹窗容器样式不能自定义，值为false表示弹窗容器样式能自定义。
   * 
   * 默认值：false
   * 
   * 设置为false时：
   * 
   * 1. 默认圆角为32vp。
   * 2. 未设置弹窗宽度高度：弹窗容器的宽度根据栅格系统自适应。高度自适应自定义的内容节点。
   * 3. 设置弹窗宽度高度：弹窗容器的宽度不超过默认样式下的最大宽度（自定义节点设置100%的宽度），弹窗容器的高度不超过默认样式下的最大高度（自定义节点设置100%的高度）。
   * 4. 受安全区域的影响，弹窗显示区域将排除安全区域。例如在PC/2in1设备上避让屏幕边缘以及窗口标题栏。
   * 
   * 设置为true时：
   * 
   * 1. 圆角为0，弹窗背景色为透明色。
   * 2. 不支持设置弹窗宽度、高度、边框宽度、边框样式、边框颜色以及阴影宽度。
   * 3. 弹窗显示区域为屏幕。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  customStyle?: boolean;

  /**
   * 弹窗宽度占[栅格宽度](docroot://ui/arkts-layout-development-grid-layout.md)的个数。
   * 
   * 默认为按照窗口大小自适应，异常值按默认值处理，最大栅格数为系统最大栅格数。
   * 
   * 取值范围：大于等于0的整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  gridCount?: number;

  /**
   * 自定义蒙层颜色。
   * 
   * 默认值：0x33000000
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskColor?: ResourceColor;

  /**
   * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
   * 
   * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' } 
   * 
   * **说明：**
   * 
   * showInSubWindow为true时，maskRect不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;

  /**
   * 自定义设置弹窗弹出的动画效果相关参数。
   * 
   * **说明**：
   * 
   * tempo默认值为1，当设置小于等于0的值时按默认值处理。
   * 
   * iterations默认值为1，默认播放一次，设置为其他数值时按默认值处理。
   * 
   * playMode控制动画播放模式，默认值为PlayMode.Normal，设置为其他数值时按照默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  openAnimation?: AnimateParam;

  /**
   * 自定义设置弹窗关闭的动画效果相关参数。
   * 
   * **说明**：
   * 
   * tempo默认值为1，当设置小于等于0的值时按默认值处理。
   * 
   * iterations默认值为1，默认播放一次，设置为其他数值时按默认值处理。
   * 
   * playMode控制动画播放模式，默认值为PlayMode.Normal，设置为其他数值时按照默认值处理。
   * 
   * 页面转场切换时，建议使用默认关闭动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  closeAnimation?: AnimateParam;

  /**
   * 某弹框需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。
   * 
   * 默认值：false，弹窗显示在应用内，而非独立子窗口。
   * 
   * **说明**：showInSubWindow为true的弹窗无法触发显示另一个showInSubWindow为true的弹窗。不建议在showInSubWindow为true的弹窗中使用CalendarPicker、
   * CalendarPickerDialog、DatePickerDialog、TextPickerDialog、TimePickerDialog、Toast组件，弹窗会影响上述组件行为。
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
   * 弹窗在子窗口中的显示模式。
   * 
   * 默认值：DialogDisplayMode.SCREEN_BASED
   * 
   * **说明**：
   * 
   * 仅当showInSubWindow设置为true时生效。
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
   * 设置弹窗背板填充。
   * 
   * 默认值：Color.Transparent
   * 
   * **说明：** 如果同时设置了内容构造器的背景色，则backgroundColor会被内容构造器的背景色覆盖。
   * 
   * backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 设置背板的圆角半径。
   * 
   * 可分别设置4个圆角的半径。
   * 
   * 默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
   * 
   * **说明**：自定义弹窗默认的背板圆角半径为32vp，如果需要使用cornerRadius属性，请和
   * [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}属性一起使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  cornerRadius?: Dimension | BorderRadiuses;

  /**
   * 弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。
   * 
   * 默认值：true
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
   * 交互式关闭回调函数。
   * 
   * **说明：**
   * 
   * 1.当用户执行点击遮障层关闭、侧滑（左滑/右滑）、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前组件
   * 返回的reason中，暂不支持CLOSE_BUTTON的枚举值。
   * 
   * 2.在onWillDismiss回调中，不能再做onWillDismiss拦截。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissDialogAction>;

  /**
   * 设置弹窗背板的宽度。
   * 
   * **说明：**
   * 
   * - 弹窗宽度默认最大值：400vp。
   * - 百分比参数方式：弹窗参考宽度为所在窗口的宽度，在此基础上调小或调大。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * 设置弹窗背板的高度。
   * 
   * **说明：**
   * 
   * - 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。
   * - 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height?: Dimension;

  /**
   * 设置弹窗背板的边框宽度。
   * 
   * 可分别设置4个边框宽度。
   * 
   * 默认值：0。
   * 
   * 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。
   * 
   * 当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth?: Dimension | EdgeWidths;

  /**
   * 设置弹窗背板的边框颜色。
   * 
   * 默认值：Color.Black
   * 
   * 如果使用borderColor属性，需要和borderWidth属性一起使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor?: ResourceColor | EdgeColors;

  /**
   * 设置弹窗背板的边框样式。
   * 
   * 默认值：BorderStyle.Solid
   * 
   * 如果使用borderStyle属性，需要和borderWidth属性一起使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * 设置弹窗背板的阴影。 
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 弹窗背板模糊材质。
   * 
   * 默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
   * 
   * **说明：** 
   * 
   * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
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
   * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 用于设置弹窗是否在拉起软键盘时进行自动避让。
   * 
   * 默认值：KeyboardAvoidMode.DEFAULT
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
   * 是否响应悬停态，值为true时，响应悬停态。
   * 
   * 默认值：false，默认不响应。
   * 
   * **说明：**
   * 
   * PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true时，可以通过设置hoverModeArea参数显示在下半屏。其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通
   * 过设置hoverModeArea参数显示在上半屏。
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
   * 悬停态下弹窗默认展示区域。
   * 
   * 默认值：HoverModeAreaType.BOTTOM_SCREEN。
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
   * 弹窗弹出后的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
   * 
   * 3.快速点击弹出，关闭弹窗时，onWillDisappear在onDidAppear前生效。
   * 
   * 4.弹窗入场动效未完成时彻底关闭弹窗，动效打断，onDidAppear不会触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onDidAppear?: Callback<void>;

  /**
   * 弹窗消失后的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onDidDisappear?: Callback<void>;

  /**
   * 弹窗显示动效前的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onWillAppear?: Callback<void>;

  /**
   * 弹窗退出动效前的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onWillDisappear?: Callback<void>;

  /**
   * 弹窗避让键盘后，和键盘之间的距离。
   * 
   * **说明：**
   * 
   * - 默认值：16vp。
   * - 默认单位：vp。
   * - 当且仅当keyboardAvoidMode属性设置为DEFAULT时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAvoidDistance?: LengthMetrics;

  /**
   * 设置弹窗显示层级。
   * 
   * **说明：**
   * 
   * - 默认值：LevelMode.OVERLAY。
   * - 当且仅当showInSubWindow属性设置为false时生效。
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
   * 设置页面级弹窗需要显示的层级下的节点UniqueID，UniqueID可以通过[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}获取。
   * 
   * 取值范围：大于等于0的数字。
   * 
   * **说明：**
   * 
   * - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  levelUniqueId?: number;

  /**
   * 设置页面内弹窗蒙层效果。
   * 
   * **说明：**
   * 
   * - 默认值：ImmersiveMode.DEFAULT 
   * - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
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
   * 设置弹窗显示的顺序。
   * 
   * **说明：**
   * 
   * - 默认值：LevelOrder.clamp(0) 
   * - 不支持动态刷新顺序。
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
   * 设置弹窗是否获取焦点。值为true表示获取焦点，值为false表示不获取焦点。
   * 
   * 默认值：true 
   * 
   * **说明：**
   * 
   * 只有弹出覆盖在当前窗口之上的弹窗才可以获取焦点。
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
   * 设置弹窗的系统材质。
   * 
   * **说明：**
   * 
   * - 默认值：[ImmersiveOptions](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersiveoptions)的style为
   * ImmersiveStyle.ULTRA_THICK的
   * [ImmersiveMaterial](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivematerial)对象。设置undefined时与默认值保持
   * 一致。
   * - 不同的材质具有不同的效果，该接口影响背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、背景模糊
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * 、背景效果[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、边框颜色
   * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。
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
 * Dialog关闭的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissDialogAction {
  /**
   * Dialog关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Dialog无法关闭原因。根据开发者需要选择不同操作下，Dialog是否需要关闭。
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
 * 自定义弹窗的状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 */
declare type PromptActionCommonState = import('../api/@ohos.promptAction').promptAction.CommonState;

/**
 * 自定义弹窗的控制器。
 * 
 * ###### 导入对象
 * 
 * ```ts
 * dialogController : CustomDialogController | null = new CustomDialogController(CustomDialogControllerOptions)
 * ```
 * 
 * > **说明：** 
 * >
 * > - CustomDialogController仅在作为@CustomDialog和@Component struct成员变量，且在@Component struct内部定义时赋值才有效，具体用法可参考下方示例。
 * >
 * > - 若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，那么此处需要将指向自己的controller放在所有controller的后
 * > 面。详细用法可参考[示例1（弹出嵌套弹窗）](docroot://reference/apis-arkui/arkui-ts/ts-methods-custom-dialog-box.md#示例1弹出嵌套弹窗)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class CustomDialogController {
  /**
   * 自定义弹窗的构造器。
   * 
   * > **说明：**
   * >
   * > 自定义弹窗的所有参数，不支持动态刷新，但可以通过设置customStyle为true，并在自定义组件上设置背景色
   * > [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、背景模糊
   * > [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * > 、[尺寸设置]{@link common}等属性，通过属性绑定的状态变量来实现动态刷新的效果。
   * >
   * > 在CustomDialogController作为全局变量以实现全局自定义弹窗的场景下，若对controller重新赋值，则无法通过其关闭之前的弹窗。建议在重新赋值前先关闭弹窗。
   * >
   * > 在自定义弹窗内拉起另一个自定义弹窗时，不建议直接关闭拉起方。
   *
   * @param { CustomDialogControllerOptions } value - 配置自定义弹窗的参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor(value: CustomDialogControllerOptions);

  /**
   * 显示自定义弹窗内容，允许多次使用，但如果弹框为SubWindow模式，则该弹框不允许再弹出SubWindow弹框。
   * 
   * > **说明：**
   * >
   * > 不支持在输入法类型窗口中使用子窗（showInSubwindow为true）的CustomDialog，详情见输入法框架的约束与限制说明
   * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
   * > 。
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
   * 获取自定义弹窗的状态。
   *
   * @returns { PromptActionCommonState } 返回对应的弹窗状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getState(): PromptActionCommonState;
}