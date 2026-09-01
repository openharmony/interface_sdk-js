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
import { ResourceStr } from '@ohos.arkui.component';
import { ObservedV2, Param, Require, Trace } from '@ohos.arkui.stateManagement';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { DividerModifier } from './arkui/DividerModifier';
import { ColorMetrics, LengthMetrics } from './arkui/Graphics';
import { Builder } from '@ohos.arkui.component';
/**
 * Enumerates the states of the toolbar item.
 *
 * | Name      | Value| Description             |
 * | -------- | - | --------------- |
 * | ENABLE   | 1 | The toolbar item is enabled. |
 * | DISABLE  | 2 | The toolbar item is disabled.  |
 * | ACTIVATE | 3 | The toolbar item is activated.|
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
 * Defines the icon symbol options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ToolBarV2SymbolGlyph {
  /**
   * Icon symbol of the toolbar item in normal state.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public normal: SymbolGlyphModifier;
  /**
   * Icon symbol of the toolbar item in activated state.
   *
   * Default value:
   *
   * **fontColor**: **$r('sys.color.icon_emphasize')**, **fontSize**: **24vp**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public activated?: SymbolGlyphModifier;
  /**
   * A constructor used to create a **ToolBarV2SymbolGlyph** object.
   *
   * @param { ToolBarV2SymbolGlyphOptions } options - symbol info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2SymbolGlyphOptions);
}
/**
 * Defines the options for initializing a **ToolBarV2SymbolGlyph** object.
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
 * Defines the text of a toolbar item.
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
   * Text of the toolbar item.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public text: ResourceStr;
  /**
   * Font color of the toolbar item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public color?: ColorMetrics;
  /**
   * Font color of the toolbar item in the activated state.
   *
   * </div>Default value: **$r('sys.color.font_emphasize')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public activatedColor?: ColorMetrics;
  /**
   * A constructor used to create a **ToolBarV2ItemText** instance.
   *
   * @param { ToolBarV2ItemTextOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2ItemTextOptions);
}
/**
 * Defines the options for initializing a **ToolBarV2ItemText** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2ItemTextOptions {
  /**
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text: ResourceStr;
  /**
   * Font color of the toolbar item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ColorMetrics;
  /**
   * Font color of the toolbar item in the activated state.
   *
   * Default value: **$r('sys.color.font_emphasize')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activatedColor?: ColorMetrics;
}

/**
 * Defines the icon type of ToolBarV2 item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare type ToolBarV2ItemIconType = ToolBarV2ItemImage | ToolBarV2SymbolGlyph;

/**
 * Defines the icon content of a toolbar item.
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
   * Icon of the toolbar item.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public src: ResourceStr;
  /**
   * Color of the icon.
   *
   * Default value: **$r('sys.color.icon_primary')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public color?: ColorMetrics;
  /**
   * Color of the icon when the toolbar item is activated.
   *
   * Default value: **$r('sys.color.icon_emphasize')**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public activatedColor?: ColorMetrics;
  /**
   * A constructor used to create a **ToolBarV2ItemImage** instance.
   *
   * @param { ToolBarV2ItemImageOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2ItemImageOptions);
}
/**
 * Defines the options for initializing a **ToolBarV2ItemImage** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2ItemImageOptions {
  /**
   * Icon of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  src: ResourceStr;
  /**
   * Color of the icon.
   *
   * Default value: **$r('sys.color.icon_primary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ColorMetrics;
  /**
   * Color of the icon when the toolbar item is activated.
   *
   * Default value: **$r('sys.color.icon_emphasize')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activatedColor?: ColorMetrics;
}
/**
 * Defines an item in the toolbar.
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
   * A constructor used to create a **ToolBarV2Item** instance.
   *
   * @param { ToolBarV2ItemOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ToolBarV2ItemOptions);
}
/**
 * Defines the options for initializing a **ToolBarV2Item** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ToolBarV2ItemOptions {
  /**
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: ToolBarV2ItemText;
  /**
   * Click event of the toolbar item.
   *
   * By default, there is no click event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: ToolBarV2ItemAction;
  /**
   * Icon of the toolbar item.
   *
   * By default, there is no icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: ToolBarV2ItemIconType;
  /**
   * State of the toolbar item.
   *
   * Default value: **ToolBarV2ItemState.ENABLE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  state?: ToolBarV2ItemState;
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
   * @since 23 static
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
   * @since 23 static
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
   * @default "auto".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityLevel?: string;
}
/**
 * Defines the callback for the click event of a toolbar item.
 *
 * @param { int } index - Index of the toolbar item that triggers the click event.
 *     <br>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type ToolBarV2ItemAction = (index: int) => void;
/**
 * Provides APIs for setting the height (**height**), background color (**backgroundColor**), left and right padding (
 * **padding**, which only takes effect when there are fewer than five items) of the toolbar, and whether to display the
 * pressed state effect (**stateEffect**).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class ToolBarV2Modifier {
  /**
   * Sets the height of the toolbar. By overriding this API, you can implement custom drawing for the height of the
   * toolbar, which does not include the height of the divider.
   *
   * @param { LengthMetrics } height - toolBarV2's height.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object after the height is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public height(height: LengthMetrics): ToolBarV2Modifier;
  /**
   * Sets the background color of the toolbar. By overriding this API, you can implement custom drawing for the
   * background color of the toolbar.
   *
   * @param { ColorMetrics } backgroundColor - toolBarV2's backgroundColor.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object after the background color is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier;
  /**
   * Sets the left and right padding of the toolbar. By overriding this API, you can implement custom drawing for the
   * left and right padding of the toolbar.
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object after the padding is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public padding(padding: LengthMetrics): ToolBarV2Modifier;
  /**
   * Sets whether to display the pressed state effect.
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarV2Modifier } **ToolBarV2Modifier** object after the pressed state effect is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public stateEffect(stateEffect: boolean): ToolBarV2Modifier;
}
/**
 * The **Toolbar** component is designed to present a set of action options related to the current screen, displayed at
 * the bottom of the screen. It can display up to five child components. If there are six or more child components, the
 * first four are shown directly, and the additional ones are grouped under a **More** item on the rightmost side of the
 * toolbar.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage toolbar data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ToolBarV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **ToolBarV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **ToolBarV2** component.
 * >
 * > - The toolbar background color does not automatically switch when the system changes between light and dark modes.
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
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}