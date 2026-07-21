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
 * 弹出框是一种模态窗口，通常用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作，用户在模态弹出框内完成上述交互任务。模态弹出框需要用户进行交互才能够退出模态模式。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制弹出框的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果DialogV2设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额
 * > 外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到DialogV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议DialogV2设置通用属性和通用事
 * > 件。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @file
 * @kit ArkUI
 */
import { ComponentV2 } from '@ohos.arkui.component';
import { ResourceStr, ResourceColor, LocalizedPadding, SizeOptions, TextAlign } from '@ohos.arkui.component';
import { ButtonStyleMode, ButtonRole } from '@ohos.arkui.component';
import { PixelMap, ThemeColorMode, CustomPopupOptions } from '@ohos.arkui.component';
import { Local, Param, ObservedV2, Require, Trace, Event } from '@ohos.arkui.stateManagement';
import { BuilderParam, Builder, CustomBuilder } from '@ohos.arkui.component';
import { LengthMetrics, ColorMetrics } from './arkui/Graphics';
import { SheetInfo } from '@ohos.arkui.component';
/**
 * 弹出框操作区按钮的点击事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare type AdvancedDialogV2ButtonAction = () => void;
/**
 * 弹出框操作区按钮。
 * 
 * > **说明：**
 * >
 * > buttonStyle和role优先级高于fontColor和background。如果buttonStyle和role设置的是默认值，那么fontColor和background可生效。
 * >
 * > 若同时给多个按钮设置defaultFocus，那么默认焦点为设置defaultFocus按钮显示顺序的第一个。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 * @class AdvancedDialogV2Button
 */
@ObservedV2
export declare class AdvancedDialogV2Button {
  /**
   * 按钮的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public content: ResourceStr;
  /**
   * 按钮的点击事件。
   * 
   * 默认无事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public action?: AdvancedDialogV2ButtonAction;
  /**
   * 按钮的背景。
   * 
   * 默认值跟随buttonStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public background?: ColorMetrics;
  /**
   * 按钮的字体颜色。
   * 
   * 默认值跟随buttonStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public fontColor?: ColorMetrics;
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
  @Trace
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
  @Trace
  public role?: ButtonRole;
  /**
   * 是否为默认焦点。
   * 
   * true：按钮是默认焦点。
   * 
   * false：按钮不是默认焦点。
   * 
   * 默认值：false
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * 是否可用。
   * 
   * true：按钮可用。
   * 
   * false：按钮不可用。
   * 
   * 默认值：true
   *
   * @default { true }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public enabled?: boolean;
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
  @Trace
  public textAlign?: TextAlign;
  /**
   * AdvancedDialogV2Button的构造函数。
   *
   * @param { AdvancedDialogV2ButtonOptions } options - 按钮配置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: AdvancedDialogV2ButtonOptions);
}
/**
 * 用于初始化AdvancedDialogV2Button对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface AdvancedDialogV2ButtonOptions {
  /**
   * 按钮的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: ResourceStr;
  /**
   * 按钮的点击事件。
   * 
   * 默认无事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: AdvancedDialogV2ButtonAction;
  /**
   * 按钮的背景。
   * 
   * 默认值跟随buttonStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  background?: ColorMetrics;
  /**
   * 按钮的字体颜色。
   * 
   * 默认值跟随buttonStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ColorMetrics;
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
  buttonStyle?: ButtonStyleMode;
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
  role?: ButtonRole;
  /**
   * 是否为默认焦点。
   * 
   * true：按钮是默认焦点。
   * 
   * false：按钮不是默认焦点。
   * 
   * 默认值：false
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * 是否可用。
   * 
   * true：按钮可用。
   * 
   * false：按钮不可用。
   * 
   * 默认值：true
   *
   * @default { true }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enabled?: boolean;
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
  textAlign?: TextAlign;
}
/**
 * 选择框选中状态改变事件。
 *
 * @param { boolean } checked - 表示选择框选中状态。<br />checked为true时，表示选择框已选中。checked为false时，表示选择框未选中。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare type AdvancedDialogV2OnCheckedChange = (checked: boolean) => void;
/**
 * 提示弹出框，即为带图形确认弹出框，必要时可通过图形化方式展现确认弹出框。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct TipsDialogV2 {
  /**
   * 展示的图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
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
  @Param
  imageSize?: SizeOptions;
  /**
   * 图片描边颜色。
   * 
   * 默认值：Color.Black
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  imageBorderColor?: ColorMetrics;
  /**
   * 图片描边宽度。
   * 
   * 默认无描边效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  imageBorderWidth?: LengthMetrics;
  /**
   * 提示弹出框标题。
   * 
   * 默认不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  title?: ResourceStr;
  /**
   * 提示弹出框内容。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  content?: ResourceStr;
  /**
   * 选择框的提示内容。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  checkTips?: ResourceStr;
  /**
   * checked为true时，表示选择框已选中。checked为false时，表示选择框未选中。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  checked?: boolean;
  /**
   * 提示弹出框左侧按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  primaryButton?: AdvancedDialogV2Button;
  /**
   * 提示弹出框右侧按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  secondaryButton?: AdvancedDialogV2Button;
  /**
   * 选择框的选中状态改变事件。
   * 
   * 默认无事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  onCheckedChange?: AdvancedDialogV2OnCheckedChange;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 选择类弹出框，弹框中以列表或网格的形式提供可选的内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct SelectDialogV2 {
  /**
   * 选择弹出框标题。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  title: ResourceStr;
  /**
   * 选择弹出框内容。默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  content?: ResourceStr;
  /**
   * 选择弹出框的选中项。
   * 
   * 默认值：-1，没有选中项。若设置数值不在取值范围，按没有选中项处理。  
   * 
   * 取值范围：小于选择弹出框的子项内容列表长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  selectedIndex?: int;
  /**
   * 选择弹出框底部按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  confirm?: AdvancedDialogV2Button;
  /**
   * 选择弹出框的子项内容列表，每个选择项支持设置文本和选中的回调事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  radioContent: SheetInfo[];
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 信息确认类弹出框，操作未正确执行（如网络错误、电池电量过低），或未正确操作时（如指纹录入），反馈的错误或提示信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct ConfirmDialogV2 {
  /**
   * 确认弹出框标题。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  title: ResourceStr;
  /**
   * 确认弹出框内容。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  content?: ResourceStr;
  /**
   * checkbox的提示内容。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  checkTips?: ResourceStr;
  /**
   * checked为true时，表示checkbox已选中，为false时，表示未选中。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  checked?: boolean;
  /**
   * 确认弹出框左侧按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  primaryButton?: AdvancedDialogV2Button;
  /**
   * 确认弹出框右侧按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  secondaryButton?: AdvancedDialogV2Button;
  /**
   * checkbox的选中状态改变事件。
   * 
   * 默认无事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  onCheckedChange?: AdvancedDialogV2OnCheckedChange;
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 操作确认类弹出框。当触发一个将产生严重后果的不可逆操作时，如删除、重置、取消编辑、停止等，会触发该类弹出框提示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct AlertDialogV2 {
  /**
   * 确认弹出框一级标题。
   * 
   * 默认不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  primaryTitle?: ResourceStr;
  /**
   * 确认弹出框二级标题。
   * 
   * 默认不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  secondaryTitle?: ResourceStr;
  /**
   * 确认弹出框内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  content: ResourceStr;
  /**
   * 确认弹出框左侧按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  primaryButton?: AdvancedDialogV2Button;
  /**
   * 确认弹出框右侧按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  secondaryButton?: AdvancedDialogV2Button;
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/** 
 * 进度加载类弹出框，操作正在执行时的提示信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct LoadingDialogV2 {
  /**
   * 加载弹出框内容。
   * 
   * 默认为空。
   * 
   * **说明：** 内容超过十行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  content?: ResourceStr;
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 自定义内容区弹出框，同时支持定义操作区按钮样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct CustomContentDialogV2 {
  /**
   * 弹出框标题。
   * 
   * 默认不显示。
   * 
   * **说明：** 标题超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  primaryTitle?: ResourceStr;
  /**
   * 弹出框辅助文本。
   * 
   * 默认不显示。
   * 
   * **说明：** 辅助文本超过两行会显示“...”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  secondaryTitle?: ResourceStr;
  /**
   * 弹出框内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  contentBuilder: CustomBuilder;
  /**
   * 弹出框内容区内边距。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  contentAreaPadding?: LocalizedPadding;
  /**
   * 弹出框操作区按钮，最多支持4个按钮。
   * 
   * 默认不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  buttons?: AdvancedDialogV2Button[];
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 跟手弹出框，基于目标组件位置弹出，上文中的TipsDialogV2、SelectDialogV2、ConfirmDialogV2、AlertDialogV2、LoadingDialogV2、CustomContentDialogV2都
 * 可作为弹出框内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct PopoverDialogV2 {
  /**
   * 跟手弹出框的显示状态。
   * 
   * 值为true时跟手弹出框显示，为false时隐藏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  visible: boolean;
  /**
   * 修改跟手弹出框的显示状态时触发的回调函数，建议在visible后使用!!语法设置双向同步。
   * 
   * 默认无事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Event
  $visible?: PopoverDialogV2OnVisibleChange;
  /**
   * 配置跟手弹出框的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  popover: PopoverDialogV2Options;
  /**
   * 跟手弹出框基于的目标组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  targetBuilder: CustomBuilder;
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 跟手弹出框显示状态改变事件。
 *
 * @param { boolean } visible - 表示跟手弹出框显示状态。<br />值为true时跟手弹出框显示，为false时隐藏。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare type PopoverDialogV2OnVisibleChange = (visible: boolean) => void;
/**
 * 跟手弹出框参数，用于设置弹出框内容、位置属性等。
 * 
 * 继承自[CustomPopupOptions]{@link CustomPopupOptions}。
 * 
 * > **说明：**
 * >
 * > radius默认值为32vp。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface PopoverDialogV2Options extends CustomPopupOptions {
}