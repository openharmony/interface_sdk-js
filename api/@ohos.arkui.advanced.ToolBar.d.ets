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
 * Enumerates toolbar item states.
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
   * The toolbar item is enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ENABLE = 1,
  /**
   * The toolbar item is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DISABLE = 2,
  /**
   * The toolbar item is activated.
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
 * Defines the icon symbol options.
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
   * Icon symbol of the toolbar item in normal state.
   *
   * Default value: **fontColor: $r('sys.color.icon_primary'), fontSize: 24vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * Icon symbol of the toolbar item in activated state.
   *
   * Default value: **fontColor: $r('sys.color.icon_emphasize'), fontSize: 24vp**
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
 * Defines the content and attributes of a toolbar.
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
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content: ResourceStr;
  /**
   * Click event of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;
  /**
   * Icon of the toolbar item.
   *
   * If this parameter is not set or is set to **undefined**, the icon is not displayed.
   *
   * If **toolBarSymbolOptions** has input parameters, **icon** is ineffective.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: Resource;
  /**
   * State of the toolbar item.
   *
   * Default value: **ItemState.ENABLE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  state?: ItemState;
  /**
   * Font color of the toolbar item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  textColor?: ResourceColor;
  /**
   * Font color of the toolbar item in the activated state.
   *
   * Default value: **$r('sys.color.font_emphasize')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activatedTextColor?: ResourceColor;
  /**
   * Icon fill color of the toolbar item.
   *
   * Default value: **$r('sys.color.icon_primary')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  iconColor?: ResourceColor;
  /**
   * Icon fill color of the toolbar option in the activated state.
   *
   * Default value: **$r('sys.color.icon_emphasize')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  activatedIconColor?: ResourceColor;
  /**
   * Icon symbol options of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  toolBarSymbolOptions?: ToolBarSymbolGlyphOptions;
  /**
   * Accessibility text, that is, accessible label name, of the toolbar item. If a component does not contain text
   * information, it will not be announced by the screen reader when selected. In this case, the screen reader user
   * cannot know which component is selected. To solve this problem, you can set accessibility text for components
   * without text information. When such a component is selected, the screen reader announces the specified
   * accessibility text, informing the user which component is selected.
   *
   * Default value: value of **content**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * Accessible description of the toolbar item. You can provide comprehensive text explanations to help users
   * understand the operation they are about to perform and its potential consequences, especially when these cannot be
   * inferred from the component's attributes and accessibility text alone. If a component contains both text
   * information and the accessible description, the text is announced first and then the accessible description, when
   * the component is selected.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * Accessibility level of the toolbar item. It determines whether the component can be recognized by accessibility
   * services.
   *
   * The options are as follows:
   *
   * **"auto"**: This option is treated as "yes" by the system for this component.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
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
 * Inherits from Array<[ToolBarOption]{@link ToolBarOption}>.
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
 * Provides APIs for setting the height (**height**), background color (**backgroundColor**), left and right padding (
 * **padding**, which only takes effect when there are fewer than five items) of the toolbar, and whether to display the
 * pressed state effect (**stateEffect**).
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
   * Sets the height of the toolbar. By overriding this API, you can implement custom drawing for the height of the
   * toolbar, which does not include the height of the divider.
   *
   * @param { LengthMetrics } height - Height of the toolbar.
   *     <br>The default height of the toolbar is 56 vp, which does not include the divider.
   * @returns { ToolBarModifier } **ToolBarModifier** object after the height is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  height(height: LengthMetrics): ToolBarModifier;
  /**
   * Sets the background color of the toolbar. By overriding this API, you can implement custom drawing for the
   * background color of the toolbar.
   *
   * @param { ResourceColor } backgroundColor - Toolbar background color
   *     <br>Default value: **$r('sys.color.ohos_id_color_toolbar_bg')**
   * @returns { ToolBarModifier } **ToolBarModifier** object after the background color is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  backgroundColor(backgroundColor: ResourceColor): ToolBarModifier;
  /**
   * Sets the left and right padding of the toolbar. By overriding this API, you can implement custom drawing for the
   * left and right padding of the toolbar.
   *
   * @param { LengthMetrics } padding - Left and right padding of the toolbar, which is effective only when there are
   *     fewer than five items.
   *     <br>By default, the padding is 24 vp when there are fewer than five items and 0 when there are five or more
   *     items.
   * @returns { ToolBarModifier } **ToolBarModifier** object after the padding is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  padding(padding: LengthMetrics): ToolBarModifier;
  /**
   * Sets whether to display the pressed state effect.
   *
   * @param { boolean } stateEffect - Whether to display the pressed state effect on the toolbar.
   *     <br>The value **true** means to display the pressed state effect on the toolbar, and **false** means the
   *     opposite.
   *     <br>Default value: **true**
   * @returns { ToolBarModifier } **ToolBarModifier** object after the pressed state effect is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamic
   */
  stateEffect(stateEffect: boolean): ToolBarModifier;
}

/**
 * The **Toolbar** component is designed to present a set of action options related to the current screen, displayed at
 * the bottom of the screen. It can display up to five child components. If there are six or more child components, the
 * first four are shown directly, and the additional ones are grouped under a **More** item on the rightmost side of the
 * toolbar.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ToolBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **ToolBar** component itself. As a result, the configured universal attributes and universal events
 * > may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events with
 * > the **ToolBar** component.
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
   * Toolbar list.
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
   * Index of the active item.
   *
   * The value must be greater than or equal to -1.
   *
   * The default value is **-1**, indicating that there is no active item. Values less than -1 are treated as no active
   * item.
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
   * Toolbar controller, which cannot be used for controlling individual toolbar items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: TabsController;
  /**
   * Modifier for the toolbar header divider, which can be used to customize the divider's height, color, and other
   * attributes.
   *
   * Default value: system default value
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
   * Modifier for the toolbar, which can be used to set the toolbar's height, background color, padding (which only
   * takes effect when there are fewer than five toolbar items), and whether to display the pressed state.
   *
   * Default value:
   *
   * Height of the toolbar: **56vp**
   *
   * Background color: **ohos_id_toolbar_bg**
   *
   * Padding: **24vp**
   *
   * Whether to display the pressed state: yes
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