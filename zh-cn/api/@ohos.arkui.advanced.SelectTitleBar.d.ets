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
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class SelectTitleBarMenuItem {
  /**
   * 图标资源，用于设置标题栏右侧菜单项的图标，支持通过$r引用资源。当同时设置symbolStyle时，symbolStyle优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Symbol图标资源，优先级大于value。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 图标标签描述，可作为accessibilityText的默认值。同时设置label和accessibilityText时，accessibilityText优先级更高。不设置时，默认无标签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 13 dynamic
   */
  label?: ResourceStr;

  /**
   * 是否启用。
   *
   * 默认值：false。true：启用该菜单项，false：禁用该菜单项（置灰且不可点击）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * 右侧自定义按钮被点击时执行的回调函数。开发者可在此定义按钮点击后需要执行的自定义操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * 标题栏右侧自定义按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本
   * 的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值：设置了label时默认值为当前项label属性内容，未设置label时默认值为空格字符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 标题栏右侧自定义按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如
   * 果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：当前组件根据具体情况自动转换为"yes"或"no"。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * 下拉菜单标题栏是一个包含下拉菜单的标题栏组件，支持页面间的快速切换，可配置返回按钮和右侧菜单项。该组件适用于需要在不同视图或页面间进行导航切换的场景，支持一级页面、二级及其以上界面。使用该组件可以方便用户快速访问和切换不同的内容视图，
 * 提升页面导航的便捷性和用户体验。
 *
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果SelectTitleBar设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编
 * > 译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SelectTitleBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议
 * > SelectTitleBar设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct SelectTitleBar {
  /**
   * 当前选中项的索引。
   *
   * 第一项的索引为0，默认值为0。
   *
   * @type { number }. [since 10 - 19]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  selected: number;

  /**
   * 下拉菜单中的项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  options: Array<SelectOption>;

  /**
   * 右侧菜单项列表，定义标题栏右侧的菜单项。需要在右侧添加菜单项时传入此参数，缺省时不显示右侧菜单区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<SelectTitleBarMenuItem>;

  /**
   * 子标题。用于显示补充信息，需要显示子标题时传入，缺省时不显示子标题区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * 新事件标记，用于在标题栏右侧菜单图标上显示数量。
   *
   * 取值范围：[-2147483648,2147483647]，超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。
   *
   * **说明：** 不传入时或小于等于0时，不显示事件标记。
   *
   * 最大消息数99，超过最大消息时仅显示99+。超大数值属于异常值，不显示事件标记。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  badgeValue?: number;

  /**
   * 是否隐藏左侧的返回箭头。
   *
   * 默认值：false。true：隐藏，false：显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hidesBackButton?: boolean;

  /**
   * 下拉菜单项选中触发的回调函数，传入选中项的索引。下拉菜单选中后需要处理特定业务逻辑时传入此参数，无特定业务逻辑时可缺省此参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelected?: ((index: number) => void);

  /**
   * 下拉菜单项选中触发的回调函数，传入选中项的索引。下拉菜单选中后需要处理特定业务逻辑时传入此参数，无特定业务逻辑时可缺省此参数。
   *
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * 下拉菜单项选中触发的回调函数，传入选中项的索引。下拉菜单选中后需要处理特定业务逻辑时传入此参数，无特定业务逻辑时可缺省此参数。
   *
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * 下拉菜单项选中触发的回调函数，传入选中项的索引。下拉菜单选中后需要处理特定业务逻辑时传入此参数，无特定业务逻辑时可缺省此参数。
   *
   * @type { ?(index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 22 static
   */
  onSelected?: ((index: number) => void);
}