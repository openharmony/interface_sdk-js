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

import { ComponentV2 } from '@ohos.arkui.component';
import { ComponentV2 } from './arkui/component/customComponent';

import { ResourceStr } from '@ohos.arkui.component';
import { ResourceStr } from './arkui/component/units';

import { ObservedV2, Param, Require, Trace } from '@ohos.arkui.stateManagement';
import { ObservedV2, Param, Require, Trace } from './arkui/stateManagement/decorator';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { DividerModifier } from './arkui/DividerModifier';
import { ColorMetrics, LengthMetrics } from './arkui/Graphics';

import { Builder } from '@ohos.arkui.component';
import { Builder } from './arkui/component/builder';
/**
 * 工具栏子项状态枚举。
 * 
 * | 名称       | 值 | 说明              |
 * | -------- | - | --------------- |
 * | ENABLE   | 1 | 工具栏子项为正常可点击状态。  |
 * | DISABLE  | 2 | 工具栏子项为不可点击状态。   |
 * | ACTIVATE | 3 | 工具栏子项为激活状态，可点击。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum ToolBarV2ItemState {
  /**
   * Enable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ENABLE = 1,
  /**
   * Disable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DISABLE = 2,
  /**
   * Activate type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTIVATE = 3
}
/**
 * ToolBarV2SymbolGlyph定义Symbol图标的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ToolBarV2SymbolGlyph {
  /**
   * 工具栏symbol图标普通态样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public normal: SymbolGlyphModifier;
  /**
   * 工具栏symbol图标激活态样式。
   * 
   * 默认值：fontColor：$r('sys.color.icon_emphasize')，fontSize：24vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public activated?: SymbolGlyphModifier;
  /**
   * ToolBarV2SymbolGlyph的构造函数。
   *
   * @param { ToolBarV2SymbolGlyphOptions } options - symbol info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2SymbolGlyphOptions);
}
/**
 * ToolBarV2SymbolGlyphOptions定义Symbol图标的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2SymbolGlyphOptions {
  /**
   * Modifier of toolbarV2's normal symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  normal: SymbolGlyphModifier;
  /**
   * Modifier of toolbarV2's activated symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activated?: SymbolGlyphModifier;
}
/**
 * 定义工具栏子项的文本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 * @class ToolBarV2ItemText.
 */
@ObservedV2
export declare class ToolBarV2ItemText {
  /**
   * 工具栏子项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public text: ResourceStr;
  /**
   * 工具栏子项的文本的颜色。
   * 
   * 默认值：$r('sys.color.font_primary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public color?: ColorMetrics;
  /**
   * 工具栏子项在激活态下文本的颜色。
   * 
   * </div>默认值：$r('sys.color.font_emphasize')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public activatedColor?: ColorMetrics;
  /**
   * ToolBarV2ItemText的构造函数。
   *
   * @param { ToolBarV2ItemTextOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2ItemTextOptions);
}
/**
 * 用于构建ToolBarV2ItemText对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2ItemTextOptions {
  /**
   * 工具栏子项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text: ResourceStr;
  /**
   * 工具栏子项的文本的颜色。
   * 
   * 默认值：$r('sys.color.font_primary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ColorMetrics;
  /**
   * 工具栏子项在激活态下文本的颜色。
   * 
   * 默认值：$r('sys.color.font_emphasize')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activatedColor?: ColorMetrics;
}

/**
 * Defines the icon type of ToolBarV2 item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare type ToolBarV2ItemIconType = ToolBarV2ItemImage | ToolBarV2SymbolGlyph;

/**
 * 定义工具栏子项的普通图标。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 * @class ToolBarV2ItemImage.
 */
@ObservedV2
export declare class ToolBarV2ItemImage {
  /**
   * 工具栏子项的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public src: ResourceStr;
  /**
   * 工具栏子项的图标的颜色。
   * 
   * 默认值：$r('sys.color.icon_primary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public color?: ColorMetrics;
  /**
   * 工具栏子项在激活态下图标的颜色。
   * 
   * 默认值：$r('sys.color.icon_emphasize')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public activatedColor?: ColorMetrics;
  /**
   * ToolBarV2ItemImage的构造函数。
   *
   * @param { ToolBarV2ItemImageOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2ItemImageOptions);
}
/**
 * 用于构建ToolBarV2ItemImage对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2ItemImageOptions {
  /**
   * 工具栏子项的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  src: ResourceStr;
  /**
   * 工具栏子项的图标的颜色。
   * 
   * 默认值：$r('sys.color.icon_primary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ColorMetrics;
  /**
   * 工具栏子项在激活态下图标的颜色。
   * 
   * 默认值：$r('sys.color.icon_emphasize')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activatedColor?: ColorMetrics;
}
/**
 * 定义工具栏子项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 * @class ToolBarV2Item
 */
@ObservedV2
export declare class ToolBarV2Item {
  /**
   * Define text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public content: ToolBarV2ItemText;
  /**
   * Define the action event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public action?: ToolBarV2ItemAction;
  /**
   * Define icon resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public icon?: ToolBarV2ItemIconType;
  /**
   * Define item type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public state?: ToolBarV2ItemState;
  /**
   * The accessibilityText of item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of item.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityLevel?: string;
  /**
   * ToolBarV2Item的构造函数。
   *
   * @param { ToolBarV2ItemOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2ItemOptions);
}
/**
 * 用于构建ToolBarV2Item对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2ItemOptions {
  /**
   * 工具栏子项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: ToolBarV2ItemText;
  /**
   * 工具栏子项点击事件。
   * 
   * 默认无点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: ToolBarV2ItemAction;
  /**
   * 工具栏子项的图标。
   * 
   * 默认不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: ToolBarV2ItemIconType;
  /**
   * 工具栏子项的状态。
   * 
   * 默认为ToolBarV2ItemState.ENABLE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  state?: ToolBarV2ItemState;
  /**
   * 工具栏子项的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮
   * 助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   * 
   * 默认值为当前项content属性内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityText?: ResourceStr;
  /**
   * 工具栏子项的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具
   * 备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   * 
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityDescription?: ResourceStr;
  /**
   * 工具栏子项无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * </div>支持的值为：
   * 
   * "auto"：当前值转换为"yes"。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"
   *
   * @default "auto".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityLevel?: string;
}
/**
 * 定义ToolBarV2Item的动作回调结构体。
 *
 * @param { int } index - toolBarV2's ItemAction.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type ToolBarV2ItemAction = (index: int) => void;
/**
 * ToolBarV2Modifier提供设置工具栏高度(height)、背景色(backgroundColor)、左右内边距（padding，仅在子项数量小于5个时生效）、是否显示按压态（stateEffect）的方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class ToolBarV2Modifier {
  /**
   * 设置工具栏高度的接口，调用该方法可自定义绘制，此高度不包含分割线高度。
   *
   * @param { LengthMetrics } height - toolBarV2's height.
   * @returns { ToolBarV2Modifier } 设置高度后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public height(height: LengthMetrics): ToolBarV2Modifier;
  /**
   * 设置工具栏背景色的接口，调用该方法可自定义绘制。
   *
   * @param { ColorMetrics } backgroundColor - toolBarV2's backgroundColor.
   * @returns { ToolBarV2Modifier } 设置背景色后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier;
  /**
   * 设置工具栏左右内边距的接口，调用该方法可自定义绘制。
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarV2Modifier } 设置内边距后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public padding(padding: LengthMetrics): ToolBarV2Modifier;
  /**
   * 设置是否显示按压态效果的接口。
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarV2Modifier } 设置按压态效果后的ToolBarV2Modifier对象，可用于链式调用其他方法进一步自定义工具栏样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public stateEffect(stateEffect: boolean): ToolBarV2Modifier;
}
/**
 * 工具栏用于展示针对当前界面内容的操作选项，在界面底部显示，适用于需要为用户提供快速操作入口的场景。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。适用于需要对当前页面内容进行快捷操作的场景，可帮助用户快速访问常用功能，
 * 提升操作效率。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制工具栏的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ToolBarV2设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会
 * > 额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ToolBarV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ToolBarV2设置通用属性和
 * > 通用事件。
 * >
 * > - 当系统切换深浅色模式时，工具栏背景色不会自动跟随切换。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct ToolBarV2 {
  /**
   * Define toolbarV2 item list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  toolBarList: ToolBarV2Item[];
  /**
   * Define toolbarV2 activate item index, default is -1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  activatedIndex?: int;
  /**
   * Define divider Modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  dividerModifier?: DividerModifier;
  /**
   * Define toolbarV2 modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  toolBarModifier?: ToolBarV2Modifier;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}