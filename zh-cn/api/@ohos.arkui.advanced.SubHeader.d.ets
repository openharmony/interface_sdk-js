/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import { TextModifier } from './@ohos.arkui.modifier';

/**
 * 定义子标题操作区的元素样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum OperationType {
  /**
   * 文本按钮（带右箭头）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXT_ARROW = 0,

  /**
   * 文本按钮（不带右箭头）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BUTTON = 1,

  /**
   * 图标按钮（最多支持配置三张图标）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ICON_GROUP = 2,

  /**
   * 加载动画。当operationType为LOADING时，无需配置operationItem。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LOADING = 3
}

/**
 * Declare type OperationOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class OperationOption {
  /**
   * 操作区元素内容。当operationType为TEXT_ARROW或BUTTON时，value为文本内容；当operationType为ICON_GROUP时，value为图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * 子标题右侧按钮点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * 子标题右侧按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内
   * 容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   * 
   * 默认值：类型为TEXT_ARROW和BUTTON时默认值为当前项value属性内容，其他类型默认值为“ ”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 子标题右侧按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同
   * 时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   * 
   * 默认值：类型为LOADING时，默认值为“正在加载”，其他类型默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 子标题右侧按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：当前组件会转换"yes"。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 子标题右侧按钮是否为默认焦点。
   * 
   * true：子标题右侧按钮是默认焦点。
   * 
   * false：子标题右侧按钮不是默认焦点。
   * 
   * 默认值：false
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * 子标题右侧按钮id。需要为子标题右侧按钮设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置子标题右侧按钮id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Declare type SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class SelectOptions {
  /**
   * 下拉选项内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  options: Array<SelectOption>;

  /**
   * 设置下拉菜单初始选项的索引。
   * 
   * 取值范围：大于等于-1。
   * 
   * 第一项的索引为0。
   * 
   * 当不设置selected属性时，默认选择值为-1，菜单项不选中。
   * 
   * 若设置数值小于-1，按不选中处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected?: number;

  /**
   * 设置下拉按钮本身的文本内容。
   * 
   * 默认值：空字符串。
   * 
   * **说明**：文本超过列宽时会被截断。从API version 20开始，支持Resource类型。
   *
   * @type { string }. [since 10 - 19]
   * @type { ?ResourceStr }. [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value?: ResourceStr;

  /**
   * 下拉菜单选中某一项的回调。
   * 
   * - index：选中项的索引。
   * 
   * - value：选中项的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelect?: (index: number, value?: string) => void;

  /**
   * 下拉按钮是否为默认焦点。
   * 
   * true：下拉按钮是默认焦点。
   * 
   * false：下拉按钮不是默认焦点。
   * 
   * 默认值：false
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * 下拉按钮id。需要为下拉按钮设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置下拉按钮id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Declare type SymbolOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
export declare class SymbolOptions {
  /**
   * 设置[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}大小。
   * 
   * number类型取值范围：大于等于0。
   * 
   * 设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如："10"，"10fp"。
   * 
   * 默认值：系统默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * 设置[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}颜色。
   * 
   * 默认值：不同渲染策略下默认值不同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: Array<ResourceColor>;

  /**
   * 设置[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}粗细。
   * 
   * number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。
   * 
   * string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。
   * 
   * 默认值：FontWeight.Normal
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * 设置[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}动效策略。
   * 
   * 默认值：SymbolEffectStrategy.NONE
   * 
   * **说明：**
   * 
   * $r('sys.symbol.ohos_*')中引用的资源仅ohos_wifi支持层级动效模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  effectStrategy?: SymbolEffectStrategy;

  /**
   * 设置[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}渲染策略。
   * 
   * 默认值：SymbolRenderingStrategy.SINGLE
   * 
   * **说明：**
   * 
   * $r('sys.symbol.ohos_*')中引用的资源仅ohos_trash_circle、ohos_folder_badge_plus、ohos_lungs支持分层与多色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  renderingStrategy?: SymbolRenderingStrategy;
}

/**
 * 子标题组件，用于列表项或内容项顶部，将该列表或内容划分为一个区块，子标题名称用来概括该区块内容。支持多种样式配置，包括图标、主副标题、下拉选择器和操作按钮等，可满足不同场景下的内容分区和导航需求，提升界面的信息层次感和用户体验。适用于
 * 列表分组、内容分类展示、表单分区等场景。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果SubHeader设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会
 * > 额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SubHeader本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议SubHeader设置通用属性和
 * > 通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct SubHeader {

  /**
   * 图标资源。
   * 
   * 默认值：undefined，表示不显示图标。
   * 
   * 当使用secondaryTitle属性时，设置icon属性才会生效。当同时使用primaryTitle、secondaryTitle、icon属性时，设置primaryTitle属性不生效。
   *
   * @type { ResourceStr }. [since 10 - 17]
   * @type { ?ResourceStr }. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  icon?: ResourceStr;

  /**
   * icon为[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}时的设置项。
   * 
   * 默认值：undefined，表示不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  iconSymbolOptions?: SymbolOptions;

  /**
   * 主标题内容。
   * 
   * 默认值：undefined，表示不显示标题。
   * 
   * 当同时使用primaryTitle、secondaryTitle、icon属性时，设置primaryTitle属性不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  primaryTitle?: ResourceStr;

  /**
   * 副标题内容。
   * 
   * 默认值：undefined，表示不显示副标题。当同时使用primaryTitle、secondaryTitle、icon属性时，设置primaryTitle属性不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  secondaryTitle?: ResourceStr;

  /**
   * 下拉框内容和事件。
   * 
   * 默认值：undefined，表示不显示下拉框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  select?: SelectOptions;

  /**
   * 操作区（右侧）元素样式。
   * 
   * 默认值：OperationType.BUTTON
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  operationType?: OperationType;

  /**
   * 操作区（右侧）的设置项。当operationType为OperationType.ICON_GROUP时，最多支持配置三个图标项。
   * 
   * 默认值：undefined，表示不显示操作区。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  operationItem?: Array<OperationOption>;

  /**
   * operationType为OperationType.ICON_GROUP，
   * 
   * operationItem设置多个图标，图标为[SymbolGlyph]{@link ./@internal/component/ets/symbolglyph}时的设置项。
   * 
   * 默认值：undefined，表示不设置Symbol图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  operationSymbolOptions?: Array<SymbolOptions>;

  /**
   * 设置标题文本属性，如设置标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined，表示使用系统默认样式。
   * 
   * **说明：** 只有primaryTitle生效时，该参数才会生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  primaryTitleModifier?: TextModifier;

  /**
   * 设置副标题文本属性，如设置标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined，表示使用系统默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  secondaryTitleModifier?: TextModifier;

  /**
   * 自定义标题区内容。使用titleBuilder时，primaryTitle、secondaryTitle、icon等标题参数不生效。
   * 
   * 默认值：undefined，表示不使用自定义标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  titleBuilder?: () => void;

  /**
   * 子标题外边距，不支持设置负数。
   * 
   * 默认值：
   * 
   * `{start: LengthMetrics.resource(` 
   * 
   * `$r('sys.float.margin_left'))`, 
   * 
   * `end: LengthMetrics.resource(` 
   * 
   * `$r('sys.float.margin_right'))}`
   *
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   *     <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentMargin?: LocalizedMargin;

  /**
   * 子标题内边距，不支持设置负数。
   * 
   * 默认值：
   * 
   * 左侧为副标题或副标题加图标时：
   * 
   * {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)}。
   *
   * @default set different default values according to the width of the subHeader:
   *     <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
   *     <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentPadding?: LocalizedPadding;

  /**
   * 设置标题自定义朗读内容。
   * 
   * 默认值：undefined，表示不设置自定义朗读内容，默认朗读组件显示的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  @Prop
  titleAccessibilityText?: ResourceStr;

  /**
   * 标题标识符。需要为标题设置id时使用此参数。
   * 
   * 默认值：undefined，表示不设置标题标识。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Prop
  titleId?: string;
}