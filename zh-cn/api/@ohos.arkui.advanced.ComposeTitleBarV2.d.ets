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
 * 点击菜单项时触发的回调函数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionCallback = () => void;

/**
 * 菜单项参数接口，用于创建ComposeTitleBarV2MenuItem实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ComposeTitleBarV2MenuItemParams {
  /**
   * 图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  value: ResourceStr;
  /**
   * Symbol图标资源，优先级大于value，item左侧头像不支持设置该属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
  /**
   * 是否启用，默认启用。
   * 
   * isEnabled为true时，表示启用。
   * 
   * isEnabled为false时，表示禁用。
   * 
   * item属性不支持触发isEnabled属性。
   * 
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isEnabled?: boolean;
  /**
   * 触发时的动作闭包，item属性不支持触发action事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: OnActionCallback;
  /**
   * 图标标签描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本
   * 的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   * 
   * 默认值：有label默认值为当前项label属性内容，没有设置label时，默认值为" "。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：当前组件会根据情况转换成'yes'或'no'。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"。
   *
   * @default auto .The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
  /**
   * 标题栏右侧自定义按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果
   * 组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   * 
   * 默认值："单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;
}
/**
 * 菜单项类，用于定义标题栏左侧头像或右侧菜单项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ComposeTitleBarV2MenuItem {
  /**
   * 图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  value: ResourceStr;
  /**
   * Symbol图标资源，优先级大于value，item左侧头像不支持设置该属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  symbolStyle?: SymbolGlyphModifier;
  /**
   * 是否启用，默认启用。
   * 
   * isEnabled为true时，表示启用。
   * 
   * isEnabled为false时，表示禁用。
   * 
   * item属性不支持触发isEnabled属性。
   * 
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  isEnabled?: boolean;
  /**
   * 触发时的动作闭包，item属性不支持触发action事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  action?: OnActionCallback;
  /**
   * 图标标签描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  label?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本
   * 的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   * 
   * 默认值：有label默认值为当前项label属性内容，没有设置label时，默认值为" "。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  accessibilityText?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：当前组件会根据情况转换成'yes'或'no'。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"。
   *
   * @default auto .The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  accessibilityLevel?: string;
  /**
   * 标题栏右侧自定义按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果
   * 组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   * 
   * 默认值："单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  accessibilityDescription?: ResourceStr;

  /**
   * ComposeTitleBarV2MenuItem的构造函数。
   *
   * @param { ComposeTitleBarV2MenuItemParams } [params] - 菜单项参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(params?: ComposeTitleBarV2MenuItemParams);
}
/**
 * ComposeTitleBarV2组件是一种标题栏，支持设置标题、头像（可选）和副标题（可选），可用于一级页面、二级及其以上界面配置返回键。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制普通标题栏的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ComposeTitleBarV2设置[通用属性]{@link ./@internal/component/ets/common}和
 * > [通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到
 * > ComposeTitleBarV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ComposeTitleBarV2设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ComposeTitleBarV2 {
  /**
   * 用于左侧头像的单个菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  item?: ComposeTitleBarV2MenuItem;
  /**
   * 标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  title: ResourceStr;
  /**
   * 副标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  subtitle?: ResourceStr;
  /**
   * 右侧菜单项列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  menuItems?: Array<ComposeTitleBarV2MenuItem>;
}