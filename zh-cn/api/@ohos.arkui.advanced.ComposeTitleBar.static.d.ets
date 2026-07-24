'use static';
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
 * @file
 * @kit ArkUI
 */

import { ResourceStr } from '@ohos.arkui.component';

import { Component } from '@ohos.arkui.component';

import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';

import { Builder } from '@ohos.arkui.component';

/**
  * ###### 子组件
  * 
  * 无
  * 
  * ###### 事件
  * 
  * 不支持[通用事件]{@link ./@internal/component/ets/common}。
 *
  * @file
  * @kit ArkUI
 */
import { ResourceStr } from './arkui/component/units';
import { Component } from './arkui/component/customComponent';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder } from './arkui/component/builder';
/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class ComposeTitleBarMenuItem {
  /**
   * 图标资源。如果同时设置了symbolStyle属性，则symbolStyle优先级更高。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * Symbol图标资源，优先级大于value，item左侧头像不支持设置该属性。不设置时使用value属性指定的图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * 图标标签描述，用于设置图标的辅助文本信息。当未设置accessibilityText时，label可作为无障碍文本的默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public label?: ResourceStr;
  /**
   * 是否启用。默认值：false。
   * 
   * true表示启用，false表示禁用。
   * 
   * item参数不支持触发isEnabled属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public isEnabled?: boolean;
  /**
   * 点击菜单项时触发的回调函数。item参数不支持触发action事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * 标题栏右侧自定义按钮的无障碍文本。当组件无文本属性时，屏幕朗读不会播报，设置此属性后屏幕朗读可播报该内容，帮助用户了解选中的组件。item属性不支持设置该属性。
   * 
   * 默认值：有label时默认值为当前项label属性内容，未设置label时默认值为空字符串。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮的无障碍描述，用于向用户详细解释组件功能和操作后果。组件被选中时，系统先播报文本属性，再播报无障碍描述内容。item属性不支持设置该属性。
   * 
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮无障碍重要性，控制当前项是否可被无障碍辅助服务识别。仅适用于menuItems中的项，不适用于item参数。
   * 
   * 支持的值为：
   * 
   * "auto"：等同于"yes"。
   * 
   * "yes"：可被无障碍辅助服务识别。
   * 
   * "no"：不可被无障碍辅助服务识别。
   * 
   * "no-hide-descendants"：当前项及其子组件均不可被识别。
   * 
   * 默认值："auto"。item参数不支持设置该属性。
   *
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityLevel?: string;
}
/**
 * ComposeTitleBar是一种普通标题栏组件，支持设置标题、头像（可选）和副标题（可选），可用于一级页面、二级及其以上界面显示返回键。可快速构建统一风格的标题栏，简化页面开发，支持灵活的菜单项配置和图标自定义，帮助开发者快速实现
 * 导航和操作入口。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ComposeTitleBar设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，
 * > 编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ComposeTitleBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议
 * > ComposeTitleBar设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ComposeTitleBar {
  /**
   * 用于左侧头像的单个菜单项目。不设置时标题栏左侧不显示头像。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  item?: ComposeTitleBarMenuItem;
  /**
   * 标题栏的标题文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title: ResourceStr;
  /**
   * 副标题。不设置时不显示副标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  subtitle?: ResourceStr;
  /**
   * 右侧菜单项目列表。不设置时标题栏右侧不显示菜单项目。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  menuItems?: Array<ComposeTitleBarMenuItem>;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}