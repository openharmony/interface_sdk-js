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

import { SymbolGlyphModifier, DividerModifier } from './@ohos.arkui.modifier';
import { LengthMetrics } from './@ohos.arkui.node';
/**
 * 定义工具栏子项的当前状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
export declare enum ItemState {
  /**
   * 工具栏子项为正常可点击状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ENABLE = 1,
  /**
   * 工具栏子项为不可点击状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DISABLE = 2,
  /**
   * 工具栏子项为激活状态，可点击。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ACTIVATE = 3
}

/**
 * ToolBarSymbolGlyphOptions定义图标的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice
 * @since 13 dynamic
 * @noninterop
 */
export interface ToolBarSymbolGlyphOptions {

  /**
   * 工具栏symbol图标普通态样式。
   * 
   * 默认值：fontColor：$r('sys.color.icon_primary')，fontSize：24vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * 工具栏symbol图标激活态样式。
   * 
   * 默认值：fontColor：$r('sys.color.icon_emphasize')，fontSize：24vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * 定义工具栏的列表内容和属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Observed
export declare class ToolBarOption {
  /**
   * 工具栏子项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content: ResourceStr;
  /**
   * 工具栏子项点击事件。不传入时点击子项不会触发任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;
  /**
   * 工具栏子项的图标。
   * 
   * 默认不设置或者设置为undefined，图标不显示。
   * 
   * 当设置了toolBarSymbolOptions属性时，icon属性将不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: Resource;
  /**
   * 工具栏子项的状态。
   * 
   * 默认为ItemState.ENABLE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  state?: ItemState;
  /**
   * 工具栏子项的文本颜色。
   * 
   * 默认值为$r('sys.color.font_primary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  textColor?: ResourceColor;
  /**
   * 工具栏子项激活态的文本颜色。
   * 
   * 默认值为$r('sys.color.font_emphasize')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activatedTextColor?: ResourceColor;
  /**
   * 工具栏子项的图标填充颜色。
   * 
   * 默认值为$r('sys.color.icon_primary')。
   * 
   * 当设置了toolBarSymbolOptions属性时，该参数不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  iconColor?: ResourceColor;
  /**
   * 工具栏子项激活态的图标填充颜色。
   * 
   * 默认值为$r('sys.color.icon_emphasize')。
   * 
   * 当设置了toolBarSymbolOptions属性时，该参数不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activatedIconColor?: ResourceColor;
  /**
   * 工具栏子项的图标属性，symbol类型。设置此参数后，icon属性将不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  toolBarSymbolOptions?: ToolBarSymbolGlyphOptions;
  /**
   * 工具栏子项的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报。开发人员可为不包含文字信息的组件设置无障碍文本，使屏幕朗读选中此组件时播报该文本内容。
   * 
   * 默认值为当前项content属性内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * 工具栏子项的无障碍描述。用于向用户详细解释当前组件的功能和操作后果，特别是当这些信息无法仅从组件文本直接获知时。组件被选中时，将依次播报文本属性和无障碍说明属性的内容。
   * 
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * 工具栏子项无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：当前组件会转换为"yes"。
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
}

/**
 * 继承于 Array<[ToolBarOption]{@link ToolBarOption}>。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Observed
export declare class ToolBarOptions extends Array<ToolBarOption> {}

/**
 * ToolBarModifier提供设置工具栏高度(height)、背景色(backgroundColor)、左右内边距（padding，仅在子项数量小于5个时生效）、是否显示按压态（stateEffect）的方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice
 * @since 13 dynamic
 * @noninterop
 */
export declare class ToolBarModifier {
  /**
   * 设置工具栏高度的接口，此高度不包含分割线高度。
   *
   * @param { LengthMetrics } height - 工具栏高度。<br/>工具栏高度默认为56vp（不包含分割线）。
   * @returns { ToolBarModifier } 返回当前的ToolBarModifier对象，支持链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  height(height: LengthMetrics): ToolBarModifier;
  /**
   * 设置工具栏背景色的接口。
   *
   * @param { ResourceColor } backgroundColor - 工具栏背景色。<br/>默认背景色为$r('sys.color.ohos_id_color_toolbar_bg')。
   * @returns { ToolBarModifier } 返回当前的ToolBarModifier对象，支持链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  backgroundColor(backgroundColor: ResourceColor): ToolBarModifier;
  /**
   * 设置工具栏左右内边距的接口。
   *
   * @param { LengthMetrics } padding - 工具栏左右内边距，仅在子项数量小于5个时生效。<br/>工具栏默认在子项数量小于5个时padding为24vp，大于等于5个时为0vp。
   * @returns { ToolBarModifier } 返回当前的ToolBarModifier对象，支持链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  padding(padding: LengthMetrics): ToolBarModifier;
  /**
   * 设置是否显示按压态效果的接口。
   *
   * @param { boolean } stateEffect - 工具栏是否显示按压态效果。<br/>true为显示按压态效果，false为移除按压态效果，默认为true。
   * @returns { ToolBarModifier } 返回当前的ToolBarModifier对象，支持链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  stateEffect(stateEffect: boolean): ToolBarModifier;
}

/**
 * 工具栏组件，用于展示针对当前界面内容的操作选项，在界面底部显示。适用于需要为用户提供快捷操作入口的场景，如编辑页面的复制、粘贴、分享等操作。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ToolBar设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外
 * > 生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ToolBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ToolBar设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct ToolBar {
  /**
   * 工具栏列表。
   *
   * @type { ToolBarOptions }. [since 10 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @ObjectLink
  toolBarList: ToolBarOptions;
  /**
   * 激活态的子项索引。
   * 
   * 默认值：-1，表示没有激活态的子项。设置小于-1的值时按没有激活项处理。
   *
   * @type { ?number }. [since 10 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  activateIndex?: number;
  /**
   * 工具栏控制器，用于关联Tabs组件页面切换，不支持控制工具栏子项。
   * 
   * **说明：** 
   * 
   * 根据自定义组件成员属性访问限定符[使用限制](docroot://ui/state-management/arkts-custom-components-access-restrictions.md#使用限制)，该接口属于常规成员
   * 变量，可以传参进行初始化；也可以不传。不传时，使用组件内预设值进行初始化，组件内预设值为：new TabsController()。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: TabsController;
  /**
   * 工具栏头部分割线属性，可设置分割线高度、颜色等。
   * 
   * 默认值：系统默认值。
   *
   * @type { ?DividerModifier }. [since 13 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  @Prop
  dividerModifier?: DividerModifier;
  /**
   * 工具栏属性，可设置工具栏高度、背景色、内边距（仅在工具栏子项数量小于5时生效）、是否显示按压态。
   * 
   * 默认值：
   * 
   * 工具栏高度：56vp
   * 
   * 背景色：ohos_id_toolbar_bg
   * 
   * 内边距：24vp
   * 
   * 显示按压态。
   *
   * @type { ?ToolBarModifier }. [since 13 - 17]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  @Prop
  toolBarModifier?: ToolBarModifier;
}