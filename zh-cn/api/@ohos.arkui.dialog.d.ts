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
* 提供统一的Dialog API。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
declare namespace dialog {
  /**
   * 在Dialog定义文本样式属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogTextStyleOptions {
    /**
     * 设置分词类型。
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
   * 固定样式对话框的按钮配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogButton {
    /**
     * 按钮的文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    value: ResourceStr;

    /**
     * 按钮文字颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    fontColor?: ResourceColor;

    /**
     * 按钮背景色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundColor?: ResourceColor;

    /**
     * 点击按钮时是否响应。
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
     * 按钮是否为默认焦点。
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
     * 定义按钮是否默认响应回车/空格键。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    primary?: boolean;

    /**
     * 按钮的样式。
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
     * 点击按钮时执行的回调。
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
   * Dialog sheet的配置项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogSheet {
    /**
     * 标题内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    title: ResourceStr;

    /**
     * 图标内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    icon?: ResourceStr;

    /**
     * 单击选项时执行的回调。
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
   * 所有Dialog类型共享的基本选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogBaseOptions {
    /**
     * Dialog 控制器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    controller?: DialogBaseController;

    /**
     * 对话框的宽度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    width?: Dimension;

    /**
     * 对话框的高度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    height?: Dimension;

    /**
     * 对话框的背景颜色。
     * <br>当backgroundColor设置为非透明色时，backgroundBlurStyle必须设置为BlurStyle.NONE。
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
     * 对话框的背景模糊样式。
     * <br>设置为BlurStyle.NONE将禁用背景模糊。
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
     * 带选项的背景模糊样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * 带选项的背景效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * 背景的边框半径。
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
     * 对话框边框宽度。
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
     * 对话框的边框颜色。
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
     * 对话框边框样式。
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
     * 对话框的阴影。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * 对话框的对齐模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    alignment?: DialogBaseAlignment;

    /**
     * 对话框相对于对齐位置的偏移。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    offset?: Offset;

    /**
     * 对话框的蒙层区域。
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
     * 对话框的蒙层颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    maskColor?: ResourceColor;

    /**
     * 对话框是否为模态。
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
     * 是否在子窗口中显示。
     * <br>isModal = true和showInSubWindow = true不能同时使用。
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
     * 定义在子窗口中显示时的对话框显示模式。
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
     * 是否允许通过触摸面罩或按返回键退出。
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
     * 对话框是否可以获得焦点。
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
     * 用于打开/关闭对话框内容区域的对话框过渡动效参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    dialogTransition?: TransitionEffect;

    /**
     * 用于打开/关闭遮罩的蒙层过渡动效参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    maskTransition?: TransitionEffect;

    /**
     * 键盘避让模式。
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
     * 对话框与系统键盘之间的距离。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    keyboardAvoidDistance?: LengthMetrics;

    /**
     * 对话框打开动画开始前的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onWillAppear?: VoidCallback;

    /**
     * 对话框出现时的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onDidAppear?: VoidCallback;

    /**
     * 对话框关闭动画开始前的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onWillDisappear?: VoidCallback;

    /**
     * 对话框消失时的回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onDidDisappear?: VoidCallback;

    /**
     * 对话框交互关闭的回调。
     * <br>如果注册了此回调，则用户点击后对话框不会立即关闭
     * 遮罩或返回按钮。
     * 回调中的reason参数用于判断是否可以关闭对话框。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    onWillDismiss?: Callback<DialogDismissal>;

    /**
     * 是否启用悬停模式。
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
     * 悬停模式下对话框的显示区域。
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
     * 对话框的显示级别。
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
     * 页面级对话框显示层下节点的唯一标识。
     * 取值限定为整数。
     * <br>该参数仅在levelMode为LevelMode.EMBEDDED时生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    levelUniqueId?: int;

    /**
     * 页面级对话框蒙层效果。
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
     * 对话框的显示顺序。
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
     * 为对话框设置系统样式材质。不同的材料有不同的效果，会影响背景色、边框、阴影和对话框的其他视觉属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    systemMaterial?: SystemUiMaterial;

    /**
     * 设置对话框的变形动画模式。
     *
     * @default DistortionMode.DISTORTION_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    distortionMode?: DistortionMode;

    /**
     * 设置对话框的edgeLight动画模式。
     *
     * @default EdgeLightMode.EDGELIGHT_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    edgeLightMode?: EdgeLightMode;
  }

  /**
   * 对话框的消息选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogMessage extends DialogTextStyleOptions {
    /**
     * 对话框消息内容。
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
   * 固定样式对话框的选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogStyleOptions extends DialogBaseOptions {
    /**
     * 对话框标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    title?: ResourceStr;

    /**
     * 对话框的副标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    subtitle?: ResourceStr;

    /**
     * 对话框的消息内容和文字样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    message?: DialogMessage;

    /**
     * 对话框中的按钮数组。
     * 提供时，对话框显示为带有按钮的警报样式对话框。
     * 与图纸一起使用时，按钮显示在图纸列表下方。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    buttons?: Array<DialogButton>;

    /**
     * 按钮的排列。
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
     * action-sheet样式的表单项数组。
     * 提供时，对话框将显示供用户选择的工作表项目。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 dynamic
     */
    sheets?: Array<DialogSheet>;

    /**
     * 对话框的网格计数。
     * 取值限定为整数。
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
   * 自定义样式对话框的选项。
   * 对话内容作为present()方法的第一个参数提供。
   * 不在此选项对象中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  declare interface DialogCustomOptions extends DialogBaseOptions {
    /**
     * 是否开启自定义样式。
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
* 用于控制对话框的类。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class DialogBaseController {
  /**
   * 构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor();

  /**
   * 关闭相应的对话框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  close(): void;

  /**
   * 获取状态。
   *
   * @returns { DialogState } 返回状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getState(): DialogState;
}

/**
* 对话框的对齐方式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DialogBaseAlignment {
  /**
   * 垂直顶部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP = 0,
  /**
   * 垂直居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  CENTER = 1,
  /**
   * 垂直底部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM = 2,
  /**
   * 默认对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DEFAULT = 3,
  /**
   * 左上角对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_START = 4,
  /**
   * 右上角对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_END = 5,
  /**
   * 左居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  CENTER_START = 6,
  /**
   * 右居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  CENTER_END = 7,
  /**
   * 左下角对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_START = 8,
  /**
   * 右下角对齐。
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
* 对话框中按钮的排列。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DialogButtonOrientation {
  /**
   * 两个或两个以下的按钮水平排列，
   * 且两个或两个以上的按钮垂直排列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  AUTO = 0,
  /**
   * 按钮水平排列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  HORIZONTAL = 1,
  /**
   * 按钮垂直排列。
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
* Dialog状态的枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DialogState {
  /**
   * 表示它未初始化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  UNINITIALIZED = 0,
  /**
   * 表示已初始化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  INITIALIZED = 1,
  /**
   * 表示它正在出现。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  APPEARING = 2,
  /**
   * 表示它出现了。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  APPEARED = 3,
  /**
   * 表示它正在消失。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DISAPPEARING = 4,
  /**
   * 表示它消失了。
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
* 对话的响应结果。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface DialogResult {
  /**
   * 对话框的ID。
   * 取值限定为整数。
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
* 提供有关关闭对话框的操作的信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface DialogDismissal {
  /**
   * 关闭对话框的回调。只有当需要退出对话框时，才会调用此接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dismiss: VoidCallback;

  /**
   * 无法关闭对话框的原因。
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