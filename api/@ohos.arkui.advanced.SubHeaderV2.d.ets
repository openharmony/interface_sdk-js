/*
  * Copyright (c) 2024 Huawei Device Co., Ltd.
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
  * limitations under the License.@
  */

/**
 * @file api/@ohos.arkui.advanced.SubHeaderV2.d.ts
 * @kit ArkUI
 */
import { TextModifier as TextModifier } from '@ohos.arkui.modifier';

/**
 * SubHeaderV2IconType
 *
 * @typedef { ResourceStr | SymbolGlyphModifier } SubHeaderV2IconType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type SubHeaderV2IconType = ResourceStr | SymbolGlyphModifier;

/**
 * Defines the options for initializing a **SubHeaderV2Title** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface SubHeaderV2TitleOptions {
  /**
   * Primary title.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  primaryTitle?: ResourceStr;
  /**
   * Text attributes of the primary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  primaryTitleModifier?: TextModifier;
  /**
   * Secondary title.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  secondaryTitle?: ResourceStr;
  /**
   * Text attributes of the secondary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  secondaryTitleModifier?: TextModifier;
  /**
   * Customized content to be read in the title.
   *
   * Default value: **undefined**
   *
   * If the value is **undefined**, the title content displayed by the component is read by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  titleAccessibilityText?: ResourceStr;
  /**
   * Set the id of the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}
/**
 * Defines the title settings for the subheader.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export declare class SubHeaderV2Title {
  /**
   * The first line text of content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  primaryTitle?: ResourceStr;
  /**
   * Text modifier for primary title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  primaryTitleModifier?: TextModifier;
  /**
   * The secondary line text of content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  secondaryTitle?: ResourceStr;
  /**
   * Text modifier for secondary title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  secondaryTitleModifier?: TextModifier;

  /**
   * Customized content to be read in the title.
   *
   * Default value: **undefined**
   *
   * If the value is **undefined**, the title content displayed by the component is read by default.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  @Trace
  titleAccessibilityText?: ResourceStr;

  /**
   * Set the id of the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  id?: string;

  /**
   * A constructor used to create a **SubHeaderV2Title** object.
   *
   * @param { SubHeaderV2TitleOptions } options - Options for initializing the title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SubHeaderV2TitleOptions);
}

/**
 * Defines the callback invoked when an item in the drop-down list box is selected.
 *
 * @param { number } selectedIndex - Index of the selected drop-down menu option.
 * @param { ?string } selectedContent - Content of the selected drop-down menu option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type SubHeaderV2SelectOnSelect = (selectedIndex: number, selectedContent?: string) => void;

/**
 * Defines the options for initializing a **SubHeaderV2Select** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface SubHeaderV2SelectOptions {
  /**
   * Options for the drop-down list box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  options: SelectOption[];
  /**
   * Index of the initially selected item in the drop-down list box.
   *
   * The index of the first item is 0.
   *
   * If this property is not set, the default value **-1** is used, indicating that no item is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedIndex?: number;
  /**
   * Text content of the drop-down button. Default value: **''**. The Resource type is supported since API version 20.
   *
   * @type { ?string } [since 18 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedContent?: ResourceStr;
  /**
   * Callback invoked when an item in the drop-down list box is selected.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelect?: SubHeaderV2SelectOnSelect;
  /**
   * Whether the drop-down button is the default focus.
   *
   * **true**: The drop-down button is the default focus.
   *
   * **false**: The drop-down button is not the default focus.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;
  /**
   * Set the id for the SubHeaderV2Select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Defines the content and events for selection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export declare class SubHeaderV2Select {
  /**
   * Sets the options of the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  options: SelectOption[];
  /**
   * Sets the selected index of the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  selectedIndex?: number;
  /**
   * Sets the selected content of the SubHeaderV2SelectOptions.
   *
   * @type { ?string } [since 18 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  selectedContent?: ResourceStr;
  /**
   * Sets the onSelect of the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onSelect?: SubHeaderV2SelectOnSelect;
  /**
   * Whether the drop-down button is the default focus.
   *
   * **true**: The drop-down button is the default focus.
   *
   * **false**: The drop-down button is not the default focus.
   *
   * Default value: **false**
   *
   * Decorator: @Trace
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  defaultFocus?: boolean;

  /**
   * Set the id for the SubHeaderV2Select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  id?: string;

  /**
   * A constructor used to create a **SubHeaderV2SelectOptions** object.
   *
   * @param { SubHeaderV2SelectOptions } options - Options of the drop-down list box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SubHeaderV2SelectOptions);
}

/**
 * Defines the style of elements in the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum SubHeaderV2OperationType {
  /**
   * Text button with a right arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_ARROW = 0,
  /**
   * Text button without a right arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  BUTTON = 1,
  /**
   * Icon-attached button (A maximum of three icons can be configured.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ICON_GROUP = 2,
  /**
   * Loading animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  LOADING = 3
}

/**
 * Defines the callback for items in the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type SubHeaderV2OperationItemAction = () => void;

/**
 * SubHeaderV2OperationItemType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type SubHeaderV2OperationItemType = ResourceStr | SymbolGlyphModifier;

/**
 * Defines the options for initializing a **SubHeaderV2OperationItem** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface SubHeaderV2OperationItemOptions {
  /**
   * Content of the item in the operation area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  content: SubHeaderV2OperationItemType;
  /**
   * Event triggered when the item is operated. Default value: **() => void**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: SubHeaderV2OperationItemAction;
  /**
   * Accessibility text of the icon on the right side of the subheader.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * Accessibility description.
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
   * Accessibility level of the icon on the right side of the subheader.
   *
   * The options are as follows:
   *
   * **"auto"**: The icon's recognizability by accessibility services is determined by the accessibility grouping
   * service and ArkUI.
   *
   * **"yes"**: The icon can be recognized by accessibility services.
   *
   * **"no"**: The icon cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: Neither the icon nor its child components can be recognized by accessibility services.
   *
   * Default value: **"yes"**
   *
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
  /**
   * Whether to receive default focus.
   *
   * **true**: Receive default focus.
   *
   * **false**: Do not receive default focus.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;
  /**
   * Set the id for SubHeaderV2OperationItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Represents an item in the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export declare class SubHeaderV2OperationItem {
  /**
   * The content of text or the address of icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  content: SubHeaderV2OperationItemType;
  /**
   * callback function when operate the text or icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  action?: SubHeaderV2OperationItemAction;
  /**
   * Constructor of **SubHeaderV2OperationItem**.
   *
   * @param { SubHeaderV2OperationItemOptions } options - Operation item configuration information. Defines the options
   *     for initializing a **SubHeaderV2OperationItem** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SubHeaderV2OperationItemOptions);
  /**
   * The accessibilityText of this text or icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of this text or icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of this text or icon.
   *
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityLevel?: string;
  /**
   * Sets the default focus state of the text or icon.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  defaultFocus?: boolean;

  /**
   * Set the id for SubHeaderV2OperationItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  id?: string;
}

/**
 * Defines the callback used to customize the content of the title area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type SubHeaderV2TitleBuilder = () => void;

/**
 * The component is positioned at the top of list items or content sections, organizing lists or content into distinct
 * groups. The subheader text summarizes the content within each respective section.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage subheader data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **SubHeaderV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **SubHeaderV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **SubHeaderV2** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct SubHeaderV2 {
  /**
   * Icon.
   *
   * Default value: **undefined**
   *
   * **icon** takes effect only when **secondaryTitle** is used for **title**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly icon?: SubHeaderV2IconType;
  /**
   * Title of the subheader.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly title?: SubHeaderV2Title;
  /**
   * Content and events for selection.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly select?: SubHeaderV2Select;
  /**
   * Style of elements in the operation area.
   *
   * Default value: **SubHeaderV2OperationType.BUTTON**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly operationType?: SubHeaderV2OperationType;
  /**
   * Items in the operation area.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly operationItems?: SubHeaderV2OperationItem[];
  /**
   * Custom content for the title area.
   *
   * Default value: **() => void**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @BuilderParam
  titleBuilder?: SubHeaderV2TitleBuilder;
}