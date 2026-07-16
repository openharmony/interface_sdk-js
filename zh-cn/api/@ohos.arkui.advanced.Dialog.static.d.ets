'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * 弹出框是一种模态窗口，用于临时展示用户需关注的信息或待处理的操作，同时保持当前上下文环境。用户必须完成交互才能退出该模式。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果Dialog设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外生
 * > 成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到Dialog本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议Dialog设置通用属性和通用事件。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * ###### DialogAttribute
 * 
 * 不支持[通用事件]{@link ./@internal/component/ets/common}。
 *
 * @file Dialog
 * @kit ArkUI
 */
import { Theme, CustomTheme } from './@ohos.arkui.theme';
import { Component, CustomDialog } from '@ohos.arkui.component';
import { ResourceStr, ResourceColor, Padding, LocalizedPadding, SizeOptions, TextAlign } from '@ohos.arkui.component';
import { ButtonStyleMode, ButtonRole } from '@ohos.arkui.component';
import { PixelMap, ThemeColorMode, CustomPopupOptions } from '@ohos.arkui.component';
import { PropRef, Link, Require } from '@ohos.arkui.stateManagement';
import { Callback } from './@ohos.base';
import { CustomDialogController } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
import { SheetInfo } from '@ohos.arkui.component';
/**
 * 按钮的样式参数，用于设置弹出框按钮属性。
 * 
 * > **说明：**
 * >
 * > buttonStyle和role优先级高于fontColor和background。当buttonStyle和role设置的是默认值时，fontColor和background生效。
 * >
 * > 若同时给多个按钮设置defaultFocus，则默认焦点为设置defaultFocus按钮中显示顺序的第一个按钮。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class ButtonOptions {
  /**
   * 按钮的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * 按钮的点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * 按钮的背景色。
   * 
   * 默认值跟随buttonStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public background?: ResourceColor;
  /**
   * 按钮的字体颜色。
   * 
   * 默认值跟随buttonStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public fontColor?: ResourceColor;
  /**
   * 按钮的样式。
   * 
   * 默认值：2in1设备为ButtonStyleMode.NORMAL，其他设备为ButtonStyleMode.TEXTUAL。
   *
   * @default ButtonStyleMode.TEXTUAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public buttonStyle?: ButtonStyleMode;
  /**
   * 按钮的角色。
   * 
   * 默认值：ButtonRole.NORMAL
   *
   * @default ButtonRole.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public role?: ButtonRole;
  /**
   * 按钮是否设置默认焦点。
   * 
   * true：按钮是默认焦点
   * 
   * false：按钮不是默认焦点
   * 
   * 默认值：false
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public defaultFocus?: boolean;
  /**
   * 按钮文本的对齐方式。
   * 
   * 默认值：TextAlign.Start
   *
   * @default { TextAlign.Start }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  public textAlign?: TextAlign;
}
/**
 * 提示弹出框，即为带图形确认弹出框，必要时可通过图形化方式展现确认弹出框。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct TipsDialog {
  /**
   * 提示弹出框控制器。
   * 
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 展示的图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageRes: ResourceStr | PixelMap;
  /**
   * 自定义图片尺寸。
   * 
   * 默认值：64*64vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageSize?: SizeOptions;
  /**
   * 提示弹出框标题。
   * 
   * 默认不设置或设置为undefined，弹出框标题不显示。
   * 
   * **说明：**  标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title?: ResourceStr;
  /**
   * 提示弹出框内容。
   * 
   * 默认不设置或设置为undefined，弹出框内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * checkbox的提示内容。
   * 
   * 默认不设置或设置为undefined，提示内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  checkTips?: ResourceStr;
  /**
   * value为true时，表示checkbox已选中，value为false时，表示未选中。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef isChecked?: boolean;
  /**
   * checkbox的选中状态改变事件。isChecked为true时，表示checkbox已选中，isChecked为false时，表示checkbox未选中。现推荐使用onCheckedChange<sup>12+</sup>。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  checkAction?: (isChecked: boolean) => void;
  /**
   * 提示弹出框左侧按钮。
   * 
   * 默认不设置或设置为undefined，左侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryButton?: ButtonOptions;
  /**
   * 提示弹出框右侧按钮。
   * 
   * 默认不设置或设置为undefined，右侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryButton?: ButtonOptions;
  /**
   * 主题信息，可以是CustomTheme或从onWillApplyTheme中获取的Theme实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * 自定义弹出框深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * checkbox的选中状态改变事件回调。回调参数类型为boolean，true表示checkbox已选中，false表示checkbox未选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCheckedChange?: Callback<boolean>;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 选择类弹出框，弹框中以列表或网格的形式提供可选的内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct SelectDialog {
  /**
   * 选择弹出框控制器。
   * 
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 选择弹出框标题。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title: ResourceStr;
  /**
   * 选择弹出框内容。
   * 
   * 默认不设置或设置为undefined，弹出框内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * 选择弹出框的选中项。
   * 
   * 取值范围：大于等于-1的整数。
   * 
   * 默认值：-1，没有选中项。若设置数值小于-1，按没有选中项处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedIndex?: int;
  /**
   * 选择弹出框底部按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  confirm?: ButtonOptions;
  /**
   * 选择弹出框的子项内容列表，每个选择项支持设置文本和选中的回调事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  radioContent: Array<SheetInfo>;
  /**
   * 主题信息，可以是CustomTheme或从onWillApplyTheme中获取的Theme实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * 自定义弹出框深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 信息确认类弹出框，操作未正确执行（如网络错误、电池电量过低），或未正确操作时（如指纹录入），反馈的错误或提示信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct ConfirmDialog {
  /**
   * 确认弹出框控制器。
   * 
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 确认弹出框标题。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title: ResourceStr;
  /**
   * 确认弹出框内容。
   * 
   * 默认不设置或设置为undefined，确认弹出框内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * checkbox的提示内容。
   * 
   * 默认不设置或设置为undefined，checkbox的提示内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  checkTips?: ResourceStr;
  /**
   * value为true时，表示checkbox已选中，value为false时，表示未选中。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef isChecked?: boolean;
  /**
   * 确认弹出框左侧按钮。
   * 
   * 默认不设置或设置为undefined，确认弹出框左侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryButton?: ButtonOptions;
  /**
   * 确认弹出框右侧按钮。
   * 
   * 默认不设置或设置为undefined，确认弹出框右侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryButton?: ButtonOptions;
  /**
   * 主题信息，可以是CustomTheme或从onWillApplyTheme中获取的Theme实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * 自定义弹出框深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * checkbox的选中状态改变事件回调。回调参数类型为boolean，true表示checkbox已选中，false表示checkbox未选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCheckedChange?: Callback<boolean>;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 操作确认类弹出框，触发一个将产生严重后果的不可逆操作时，如删除、重置、取消编辑、停止等。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct AlertDialog {
  /**
   * 确认弹出框控制器。
   * 
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 确认弹出框一级标题。
   * 
   * 默认不设置或设置为undefined，确认弹出框一级标题不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * 确认弹出框二级标题。
   * 
   * 默认不设置或设置为undefined，确认弹出框二级标题不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * 确认弹出框内容。
   * 
   * 默认不设置或设置为undefined，确认弹出框内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: ResourceStr;
  /**
   * 确认弹出框左侧按钮。
   * 
   * 默认不设置或设置为undefined，确认弹出框左侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryButton?: ButtonOptions;
  /**
   * 确认弹出框右侧按钮。
   * 
   * 默认不设置或设置为undefined，确认弹出框右侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryButton?: ButtonOptions;
  /**
   * 主题信息，可以是CustomTheme或从onWillApplyTheme中获取的Theme实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * 自定义弹出框深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 进度加载类弹出框，用于显示操作执行中的提示信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct LoadingDialog {
  /**
   * 加载弹出框控制器。
   * 
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Controller: CustomDialogController;
  /**
   * 加载弹出框内容。
   * 
   * 默认不设置或设置为undefined，加载弹出框内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * 主题信息，可以是CustomTheme或从onWillApplyTheme中获取的Theme实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * 自定义弹出框深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 自定义内容区弹出框，同时支持定义操作区按钮样式。
 * 
 * > **说明：**
 * >
 * > 当弹框高度不足时，触发全局滚动的规格为contentBuilder被压缩，压缩至小于100vp时启动全局滚动。
 * >
 * > CustomContentDialog内容区的滚动需由开发者自定义，内容区自定义滚动必须配合属性nestedScroll，nestedScroll({ scrollForward: 
 * > NestedScrollMode.PARALLEL, scrollBackward: NestedScrollMode.PARALLEL })
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct CustomContentDialog {
  /**
   * 弹出框控制器。
   * 
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 弹出框标题。
   * 
   * 默认不设置或设置为undefined，弹出框标题不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * 弹出框辅助文本。
   * 
   * 默认不设置或设置为undefined，弹出框辅助文本不显示。
   * 
   * **说明：** 辅助文本超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * 弹出框内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  contentBuilder: () => void;
  /**
   * 弹出框内容区内边距。设置了localizedContentAreaPadding属性时该属性不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentAreaPadding?: Padding;
  /**
   * 弹出框内容区内边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  localizedContentAreaPadding?: LocalizedPadding;
  /**
   * 弹出框操作区按钮，最多支持4个按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  buttons?: ButtonOptions[];
  /**
   * 主题信息，可以是CustomTheme或从onWillApplyTheme中获取的Theme实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * 自定义弹出框深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 跟手弹出框，基于目标组件位置弹出，上文中的TipsDialog、SelectDialog、ConfirmDialog、AlertDialog、LoadingDialog、CustomContentDialog都可作为弹出框内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct PopoverDialog {
  /**
   * 跟手弹出框显示状态。visible为true时，表示显示弹出框，visible为false时，表示隐藏弹出框。
   * 
   * 默认值为false，隐藏弹出框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Link visible: boolean;
  /**
   * 配置跟手弹出框的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require @PropRef
  popover: PopoverOptions;
  /**
   * 跟手弹出框基于的目标组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require @BuilderParam
  targetBuilder: () => void;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * 跟手弹出框参数，用于设置弹出框内容、位置属性等。
 * 
 * 继承自[CustomPopupOptions]{@link CustomPopupOptions}。
 * 
 * > **说明：**
 * >
 * > 气泡圆角半径radius默认值为32vp。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface PopoverOptions extends CustomPopupOptions {
}