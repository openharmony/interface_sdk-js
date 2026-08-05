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

import { Component } from '@ohos.arkui.component';

import { ResourceStr } from '@ohos.arkui.component';

import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';

import { BuilderParam, Builder } from '@ohos.arkui.component';

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
import { Component } from './arkui/component/customComponent';
import { ResourceStr } from './arkui/component/units';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { BuilderParam, Builder } from './arkui/component/builder';
/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TabTitleBarMenuItem {
  /**
   * 图标资源。若设置了symbolStyle，则该属性不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * Symbol图标资源，优先级大于value。当需要使用Symbol图标时传入此参数，不传入时使用value参数设置的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * 图标标签，用于为菜单项图标提供文字说明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public label?: ResourceStr;
  /**
   * 是否启用。true：启用，false：禁用。禁用时菜单项不响应点击事件，action不会触发。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public isEnabled?: boolean;
  /**
   * 点击菜单项时触发的动作闭包。若不设置，点击菜单项无响应。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * 标题栏右侧自定义按钮的无障碍文本属性，用于为不包含文字信息的组件提供朗读文本。
   * 
   * 默认值：设置了label属性时，默认值为当前项label属性内容；未设置label属性时，默认值为空格字符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果
   * 组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   * 
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * 标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：根据组件是否可交互自动判断。若组件可交互，则等同于"yes"；若组件不可交互，则等同于"no"。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"。
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityLevel?: string;
}
/**
 * Declaration of the tab item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TabTitleBarTabItem {
  /**
   * 页签项显示的文字内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public title: ResourceStr;
  /**
   * 页签图标资源。若设置了symbolStyle，则该属性不生效。若不设置，页签仅显示文字内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public icon?: ResourceStr;
  /**
   * Symbol图标资源，优先级大于icon。当需要使用Symbol图标作为页签时传入此参数，不传入时使用icon参数设置的图片页签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;
}
/**
 * TabTitleBar是页签型标题栏组件，支持页签列表与关联内容的联动切换，并可配置右侧菜单项。适用于需要通过页签切换页面内容的场景，如顶部导航栏等。该组件通过页签和菜单项的灵活配置，可满足不同的交互需求。仅支持一级页面的页签切换。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 设置TabTitleBar的[通用属性]{@link ./@internal/component/ets/common}或[通用事件]{@link ./@internal/component/ets/common}时，编译工具
 * > 链会在__Common__节点上挂载而非直接应用到组件本身，可能导致设置不生效或不符合预期，因此不建议设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct TabTitleBar {
  /**
   * 左侧页签项目列表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tabItems: Array<TabTitleBarTabItem>;
  /**
   * 右侧菜单项目列表。若不传，则不显示右侧菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  menuItems?: Array<TabTitleBarMenuItem>;
  /**
   * 页签列表关联的页面内容构造器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  swiperContent: () => void;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}