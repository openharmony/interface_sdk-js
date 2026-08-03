/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
export declare class EditableTitleBarMenuItem {
  /**
   * 图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * 图标标签描述。不设置时不显示图标标签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  label?: ResourceStr;

  /**
   * 是否启用。
   *
   * 默认值：true，表示默认启用。
   *
   * isEnabled为true时，表示为启用。
   *
   * isEnabled为false时，表示为禁用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * 标题栏右侧自定义按钮点击事件。不设置时点击按钮无响应。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * 标题栏右侧自定义按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本
   * 的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值：未设置label属性时为“ ”；设置label属性后默认值为当前项label属性内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 标题栏右侧自定义按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果
   * 组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
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
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 是否设置为默认获焦。
   *
   * true: 获焦
   *
   * false: 不获焦
   *
   * 默认值：false
   *
   * 使用defaultFocus属性时，需提前将isEnabled属性设置为true，否则defaultFocus设置将不生效。
   *
   * **说明：** 若同时有多个可操作区域设置为默认焦点，则设置过默认焦点的可操作区域中显示顺序的第一个为默认焦点。
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Symbol图标资源，优先级大于value。不设置时使用value参数显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
}

/**
 * Declaration of the image item .
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export type EditableTitleBarItem = EditableTitleBarMenuItem;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
export declare enum EditableLeftIconType {
  /**
   * 返回按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Back = 0,

  /**
   * 取消按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Cancel = 1
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export declare interface EditableTitleBarOptions {
  /**
   * 标题栏背景色。
   *
   * 默认值：'#00000000'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式。
   *
   * 默认值：BlurStyle.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 配置扩展安全区域的类型。
   *
   * 默认值：[SafeAreaType.SYSTEM]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  safeAreaTypes?: Array<SafeAreaType>;

  /**
   * 配置扩展安全区域的方向。
   *
   * 默认值：[SafeAreaEdge.TOP]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  safeAreaEdges?: Array<SafeAreaEdge>;
}

/**
 * 编辑型标题栏组件，提供标准的编辑界面标题栏实现，支持自定义左侧按钮类型（返回/取消）、头像显示、右侧菜单项、背景模糊样式等功能。适用于需要进行内容编辑、多选操作的场景，如相册多选编辑、文本编辑器、表单编辑等界面。该组件封装了编辑场景常
 * 用的UI交互模式（左叉右勾），开发者无需自行实现标题栏布局和交互逻辑，可快速构建符合设计规范的编辑界面，提升开发效率并保证UI一致性。同时支持无障碍属性配置，满足可访问性要求。
 *
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果EditableTitleBar设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}
 * > ，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到EditableTitleBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议
 * > EditableTitleBar设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct EditableTitleBar {
  /**
   * 左侧按钮类型。
   *
   * 默认值：EditableLeftIconType.Back，表示返回。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  leftIconStyle: EditableLeftIconType;

  /**
   * 用于左侧头像的单个菜单项目。需要在标题栏左侧显示头像时传入此参数，不传入时取默认值，不显示头像。
   *
   * 默认值：undefined。
   *
   * **说明：** 左侧头像不支持配置无障碍属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  imageItem?: EditableTitleBarItem;

  /**
   * 标题。
   *
   * 默认值：''，表示标题内容为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;

  /**
   * 副标题。需要在标题下方显示补充说明信息时传入此参数，不传入时不显示。
   *
   * 默认值：''，表示副标题内容为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * 是否需要右侧的保存按钮。true表示需要右侧的保存按钮，false表示不需要右侧的保存按钮。
   *
   * 默认值：true
   *
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。当isSaveIconRequired为false时，不显示保存按钮，onSave回调不会触发。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isSaveIconRequired: boolean;

  /**
   * 右侧菜单项目列表。需要在标题栏右侧显示自定义操作按钮时传入此参数，不传入时取默认值，不显示右侧菜单项目列表。
   *
   * 默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<EditableTitleBarMenuItem>;

  /**
   * 点击保存时的事件。需要自定义保存操作逻辑时传入此参数，缺省时点击按钮无响应。
   *
   * 默认值：() => void。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSave?: () => void;

  /**
   * 当左侧按钮类型为 Cancel，触发取消时的事件。需要自定义返回/取消操作逻辑时传入此参数，缺省时点击左侧按钮无响应。
   *
   * 默认值：() => void。
   *
   * 从API version 12开始，当左侧按钮类型为 Back，触发返回时的事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onCancel?: () => void;

  /**
   * 标题样式。
   *
   * 默认值：
   *
   * {
   *
   * safeAreaTypes: [SafeAreaType.SYSTEM],
   *
   * safeAreaEdges: [SafeAreaEdge.TOP],
   *
   * backgroundColor: '#00000000'
   *
   * }。
   *
   * **说明：** 未使用@Require装饰，构造时不强制校验参数。
   *
   * @default {expandSafeAreaTypes: SafeAreaType.SYSTEM, expandSafeAreaEdges: SafeAreaEdge.TOP}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  options: EditableTitleBarOptions;

  /**
   * 标题栏外边距，不支持设置负数。
   *
   * 默认值：
   *
   * {start: LengthMetrics.resource(`$r('sys.float.margin_left')`), end: LengthMetrics.resource(
   * `$r('sys.float.margin_right')`)}。
   *
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   *     <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentMargin?: LocalizedMargin;

  /**
   * 左侧图标是否为默认焦点。true表示是默认焦点，false表示不是默认焦点。
   *
   * 默认值：false
   *
   * **说明：** 若同时有多个可操作区域设置为默认焦点，则设置过默认焦点的可操作区域中显示顺序的第一个为默认焦点。
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  leftIconDefaultFocus?: boolean;

  /**
   * 保存图标是否为默认焦点。true表示是默认焦点，false表示不是默认焦点。
   *
   * 默认值：false
   *
   * **说明：** 需要右侧保存按钮（isSaveIconRequired为true）时此属性生效。若同时有多个可操作区域设置为默认焦点，则设置过默认焦点的可操作区域中显示顺序的第一个为默认焦点。
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  saveIconDefaultFocus?: boolean;
}