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
 * ###### Child Components
 * 
 * Not supported
 * 
 * > **NOTE**
 * >
 * > Text-related settings are not supported.
 * 
 * ###### Events
 * 
 * The [universal events]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file
 * @kit ArkUI
 */
import { TextModifier } from './arkui/TextModifier';
import { ResourceStr, Resource, ResourceColor, LocalizedMargin, LocalizedPadding } from '@ohos.arkui.component';
import { SelectOption } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component } from '@ohos.arkui.component';
import { FontWeight } from '@ohos.arkui.component';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
/**
 * Defines the style of elements in the subheader operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum OperationType {
  /**
   * Text button with a right arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXT_ARROW = 0,
  /**
   * Text button without a right arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BUTTON = 1,
  /**
   * Icon-attached button (A maximum of three icons can be configured.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ICON_GROUP = 2,
  /**
   * Loading animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LOADING = 3
}
/**
 * Declare type OperationOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class OperationOption {
  /**
   * Text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * Right-side button click event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * Accessibility text, that is, accessible label name. If a component does not contain text information, it will not
   * be announced by the screen reader when selected. In this case, the screen reader user cannot know which component
   * is selected. To solve this problem, you can set accessibility text for components without text information. When
   * such a component is selected, the screen reader announces the specified accessibility text, informing the user
   * which component is selected.
   *
   * Default value: value of the **value** property if the operation type is **TEXT_ARROW** or **BUTTON** and an empty
   * string otherwise.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * Accessible description. You can provide comprehensive text explanations to help users understand the operation
   * they are about to perform and its potential consequences, especially when these cannot be inferred from the
   * component's attributes and accessibility text alone. If a component contains both text information and the
   * accessible description, the text is announced first and then the accessible description, when the component is
   * selected.
   *
   * Default value: "Loading" when the operation type is **LOADING** and **"Double-tap to activate"** otherwise.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * Accessibility level. It determines whether the component can be recognized by accessibility services.
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
   * @since 23 static
   */
  public accessibilityLevel?: string;
  /**
   * Whether to receive default focus.
   *
   * **true**: Receive default focus.
   *
   * **false**: Do not receive default focus.
   *
   * Default value: **false**
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public defaultFocus?: boolean;
  /**
   * Set the id for operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  public id?: string;
}
/**
 * Declare type SelectOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class SelectOptions {
  /**
   * Options of an item in the drop-down list box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public options: Array<SelectOption>;
  /**
   * Index of the initially selected item in the drop-down list box.
   *
   * The value must be greater than or equal to -1.
   *
   * The index of the first item is 0.
   *
   * If this attribute is not set, the default value **-1** is used, indicating that the option is not selected.
   *
   * Values less than -1 are treated as no selection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public selected?: int;
  /**
   * Text content of the drop-down list button itself.
   *
   * The default value is an empty string.
   *
   * Note: If the text length exceeds the column width, it will be truncated. The Resource type is supported since API
   * version 20.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value?: ResourceStr;
  /**
   * Callback invoked when an item in the drop-down list box is selected.
   *
   * - **index**: index of the selected option.
   * - **value**: value of the selected option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public onSelect?: (index: int, value?: string) => void;
  /**
   * Whether the drop-down button is the default focus.
   *
   * **true**: The drop-down button is the default focus.
   *
   * **false**: The drop-down button is not the default focus.
   *
   * Default value: **false**
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public defaultFocus?: boolean;
  /**
   * Set the id for select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  public id?: string;
}
/**
 * Declare type SymbolOptions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class SymbolOptions {
  /**
   * Size of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * For the number type, the value must be greater than or equal to 0.
   *
   * For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are
   * supported.
   *
   * Default value: system default value
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public fontSize?: double | string | Resource;
  /**
   * Color of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: depending on the rendering strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public fontColor?: Array<ResourceColor>;
  /**
   * Weight of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier
   * font weight. The default value is **400**.
   *
   * For the string type, only strings of the number type are supported, for example, **"400"**, **"bold"**,
   * **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in
   * **FontWeight**.
   *
   * Default value: **FontWeight.Normal**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public fontWeight?: int | FontWeight | string;
  /**
   * Effect strategy of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **SymbolEffectStrategy.NONE**.
   *
   * **NOTE**
   *
   * For the resources referenced in **$r('sys.symbol.ohos_*')**, only **ohos_wifi** supports the hierarchical effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public effectStrategy?: SymbolEffectStrategy;
  /**
   * Rendering strategy of the [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **SymbolRenderingStrategy.SINGLE**.
   *
   * **NOTE**
   *
   * For the resources referenced in **$r('sys.symbol.ohos_*')**, only **ohos_trash_circle**,
   * **ohos_folder_badge_plus**, and **ohos_lungs** support the **MULTIPLE_COLOR** modes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public renderingStrategy?: SymbolRenderingStrategy;
}
/**
 * The **SubHeader** component is positioned at the top of list items or content sections, organizing lists or content
 * into distinct groups. The subheader text summarizes the content within each respective section.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **SubHeader** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **SubHeader** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **SubHeader** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct SubHeader {
  /**
   * Icon.
   *
   * Default value: **undefined**, indicating that no icon is displayed.
   *
   * The **icon** attribute takes effect only when the **secondaryTitle** attribute is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  icon?: ResourceStr;
  /**
   * Icon symbol options. This parameter is available when **icon** is set to a
   * [symbol glyph]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **undefined**, indicating that no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSymbolOptions?: SymbolOptions;
  /**
   * Primary title.
   *
   * Default value: **undefined**, indicating that no primary title is displayed.
   *
   * When the **primaryTitle**, **secondaryTitle**, and **icon** attributes are used simultaneously, the
   * **primaryTitle** attribute will not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  primaryTitle?: ResourceStr;
  /**
   * Secondary title.
   *
   * Default value: **undefined**, indicating that no secondary title is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  secondaryTitle?: ResourceStr;
  /**
   * Content and events for selection.
   *
   * Default value: **undefined**, indicating that no drop-down list is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  select?: SelectOptions;
  /**
   * Style of elements in the operation area (right).
   *
   * Default value: **OperationType.BUTTON**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  operationType?: OperationType;
  /**
   * Items in the operation area (right).
   *
   * Default value: **undefined**, indicating that the operation area is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  operationItem?: Array<OperationOption>;
  /**
   * Icon symbol options.
   *
   * This parameter is available when **operationType** is set to **OperationType.ICON_GROUP** and **operationItem**
   * is set to an array of [symbol glyphs]{@link ./@internal/component/ets/symbolglyph}.
   *
   * Default value: **undefined**, indicating that no symbol icon is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  operationSymbolOptions?: Array<SymbolOptions>;
  /**
   * Text attributes of the primary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**, indicating that the default style is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitleModifier?: TextModifier;
  /**
   * Text attributes of the secondary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**, indicating that the default style is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitleModifier?: TextModifier;
  /**
   * Content of the custom title area.
   *
   * Default value: **undefined**, indicating that no custom title is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  titleBuilder?: () => void;
  /**
   * Margin of the content. Negative numbers are not supported.
   *
   * Default value:
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
   * @since 23 static
   */
  @PropRef
  contentMargin?: LocalizedMargin;
  /**
   * Padding of the content.
   *
   * Default value:
   *
   * If a secondary title, with or without an icon, is displayed on the left:
   *
   * {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)}
   *
   * @default set different default values according to the width of the subHeader:
   *     <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
   *     <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  contentPadding?: LocalizedPadding;
  /**
   * Customized content to be read in the title.
   *
   * Default value: **undefined**.
   *
   * If the value is **undefined**, the title content displayed by the component is read by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  titleAccessibilityText?: ResourceStr;
  /**
   * Set the id for the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @PropRef
  titleId?: string;
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