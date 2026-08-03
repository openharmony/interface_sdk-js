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
 *
 * @file
 * @kit ArkUI
 */
import { TextModifier } from './arkui/TextModifier';
import { ResourceStr } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { SelectOption } from '@ohos.arkui.component';
import { ObservedV2, Trace, Param } from '@ohos.arkui.stateManagement';
import { ComponentV2 } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
/**
 * SubHeaderV2IconType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SubHeaderV2IconType = ResourceStr | SymbolGlyphModifier;

/**
 * Defines the options for initializing a **SubHeaderV2Title** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2TitleOptions {
  /**
   * Primary title.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * Text attributes of the primary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitleModifier?: TextModifier;
  /**
   * Secondary title.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * Text attributes of the secondary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  titleAccessibilityText?: ResourceStr;
  /**
   * Set the id for the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * Defines the title settings for the subheader.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2Title {
  /**
   * Primary title.
   *
   * When **primaryTitle**, **secondaryTitle**, and **icon** are used simultaneously in
   * [SubHeaderV2]{@link SubHeaderV2}, **primaryTitle** does not take effect.
   *
   * Default value: **undefined**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public primaryTitle?: ResourceStr;
  /**
   * Text attributes of the primary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public primaryTitleModifier?: TextModifier;
  /**
   * Secondary title.
   *
   * Default value: **undefined**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public secondaryTitle?: ResourceStr;
  /**
   * Text attributes of the secondary title, such as the font color, font size, and font weight.
   *
   * Default value: **undefined**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public secondaryTitleModifier?: TextModifier;
  /**
   * A constructor used to create a **SubHeaderV2Title** object.
   *
   * @param { SubHeaderV2TitleOptions } options - Options for initializing the title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(options: SubHeaderV2TitleOptions);
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
   * @since 23 static
   */
  @Trace
  public titleAccessibilityText?: ResourceStr;
  /**
   * Set the id for the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
}
/**
 * Defines the callback invoked when an item in the drop-down list box is selected.
 *
 * @param { int } selectedIndex - Index of the selected drop-down menu option.
 * @param { string } [selectedContent] - Content of the selected drop-down menu option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type SubHeaderV2SelectOnSelect = (selectedIndex: int, selectedContent?: string) => void;
/**
 * Defines the options for initializing a **SubHeaderV2Select** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2SelectOptions {
  /**
   * Options for the drop-down list box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  selectedIndex?: int;
  /**
   * Text content of the drop-down button. Default value: **''**. The Resource type is supported since API version 20.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedContent?: ResourceStr;
  /**
   * Callback invoked when an item in the drop-down list box is selected.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * Set the id for the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * Defines the content and events for selection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2Select {
  /**
   * Options for the drop-down list box.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public options: SelectOption[];
  /**
   * Index of the initially selected item in the drop-down list box.
   *
   * The index of the first item is 0.
   *
   * If this property is not set, the default value **-1** is used, indicating that no item is selected.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public selectedIndex?: int;
  /**
   * Text content of the drop-down button. Default value: **''**. The Resource type is supported since API version 20.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public selectedContent?: ResourceStr;
  /**
   * Callback invoked when an item in the drop-down list box is selected.
   *
   * Default value: **undefined**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public onSelect?: SubHeaderV2SelectOnSelect;
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
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * Sets the id for SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
  /**
   * A constructor used to create a **SubHeaderV2SelectOptions** object.
   *
   * @param { SubHeaderV2SelectOptions } options - Options of the drop-down list box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(options: SubHeaderV2SelectOptions);
}
/**
 * Defines the style of elements in the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum SubHeaderV2OperationType {
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
 * Defines the callback for items in the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type SubHeaderV2OperationItemAction = () => void;

/**
 * SubHeaderV2OperationItemType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SubHeaderV2OperationItemType = ResourceStr | SymbolGlyphModifier;

/**
 * Defines the options for initializing a **SubHeaderV2OperationItem** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2OperationItemOptions {
  /**
   * Content of the item in the operation area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: SubHeaderV2OperationItemType;
  /**
   * Event triggered when the item is operated. Default value: **() => void**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: SubHeaderV2OperationItemAction;
  /**
   * Accessibility text of the icon on the right side of the subheader.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityText?: ResourceStr;
  /**
   * Accessibility description.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * Sets the id for operation item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * Represents an item in the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2OperationItem {
  /**
   * Content of the item in the operation area.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public content: SubHeaderV2OperationItemType;
  /**
   * Event triggered when the item is operated. Default value: **() => void**.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public action?: SubHeaderV2OperationItemAction;
  /**
   * Constructor of **SubHeaderV2OperationItem**.
   *
   * @param { SubHeaderV2OperationItemOptions } options - Operation item configuration information. Defines the options
   *     for initializing a **SubHeaderV2OperationItem** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: SubHeaderV2OperationItemOptions);
  /**
   * Accessibility text of the icon on the right side of the subheader.
   *
   * Default value: **undefined**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityText?: ResourceStr;
  /**
   * Accessibility description.
   *
   * Default value: **"Double-tap to activate"**
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;
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
   * Decorator: @Trace
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
  @Trace
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
   * Decorator: @Trace
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * Sets the id for operation item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
}
/**
 * Defines the callback used to customize the content of the title area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Builder
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
 * @since 23 static
 * @noninterop
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
   * @since 23 static
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
   * @since 23 static
   */
  @Param
  readonly title?: SubHeaderV2Title;
  /**
   * Content and events for selection.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly select?: SubHeaderV2Select;
  /**
   * Style of elements in the operation area.
   *
   * Default value: **SubHeaderV2OperationType.BUTTON**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly operationType?: SubHeaderV2OperationType;
  /**
   * Items in the operation area.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly operationItems?: SubHeaderV2OperationItem[];
  /**
   * Custom content for the title area.
   *
   * Default value: **() => void**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  titleBuilder?: SubHeaderV2TitleBuilder;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}