/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * Enumerates icon types for the left element of list items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum IconTypeV2 {
  /**
   * Badge icon, sized 8 × 8 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BADGE = 1,
  /**
   * Normal icon, sized 16 × 16 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NORMAL_ICON = 2,
  /**
   * System icon, sized 24 × 24 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SYSTEM_ICON = 3,
  /**
   * Head sculpture icon, sized 40 × 40 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HEAD_SCULPTURE = 4,
  /**
   * Application icon, sized 64 × 64 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  APP_ICON = 5,
  /**
   * Preview icon, sized 96 × 96 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PREVIEW = 6,
  /**
   * Icon of special horizontal ratio (width greater than height), with the longest side kept at 96 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LONGITUDINAL = 7,
  /**
   * Icon of special vertical ratio (height greater than width), with the longest side kept at 96 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  VERTICAL = 8
}
/**
 * Defines the callback triggered for the tap event of the right icon or arrow of the list item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionCallback = () => void;
/**
 * Defines the callback triggered when the state of the right element **Switch**, **CheckBox**, or **Radio** of the list
 * item changes.
 *
 * @param { boolean } value - Callback triggered when the selection state of the right element **Switch**, **CheckBox**,
 *     or **Radio** element of the list item changes.
 *     <br>The value **true** indicates that the state changes from unselected to selected.
 *     <br>The value **false** indicates that the state changes from selected to unselected.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnChangeCallback = (value: boolean) => void;

/**
 * Defines options for the **OperateIconV2** constructor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateIconV2Options {
  /**
   * Icon or arrow resource of the right element of the list item.
   *
   * Default value: **""**, which means no icon or arrow resource is displayed.
   *
   * When **symbolStyle** is also set, only the Symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  value?: ResourceStr;

  /**
   * Symbol icon or arrow resource of the right element of the list item. It has a higher priority than **value**. When
   * both are set, only the Symbol icon is displayed.
   *
   * By default, or when it is set to **undefined**, no Symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback invoked when the icon or arrow of the right element of the list item is tapped.
   *
   * By default, or when it is set to **undefined**, tapping the icon or arrow does not trigger the callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: OnActionCallback;

  /**
   * Accessibility text of the icon or arrow. When a component does not contain a text attribute, the screen reader does
   * not announce it upon selection, leaving users unaware of which component is currently selected. To address this
   * scenario, developers can set accessibility text for components that do not contain text information. When the
   * screen reader selects such a component, it announces the content of the accessibility text, helping screen reader
   * users clearly identify the selected component.
   * Default value: **""**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the icon or arrow. This description is used to explain the current component to users
   * in detail. You should provide a relatively detailed text description for this attribute to help users understand
   * the action to be performed and its possible consequences, especially when such consequences cannot be directly
   * inferred from the component's attributes and accessibility text. If a component that is selected has both a text
   * attribute and an accessibility description attribute, the system first announces the text attribute and then the
   * content of the accessibility description attribute.
   * Default value: **"Double-tap with one finger to execute."**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the icon or arrow of the right element of the list item. This attribute controls whether the
   * current item can be recognized by accessibility services.
   * Supported values:
   * **"auto"**: Whether the current component can be recognized by accessibility services is determined by the
   * accessibility service and ArkUI.
   * **"yes"**: The current component can be recognized by accessibility services.
   * **"no"**: The current component cannot be recognized by accessibility services.
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   * Default value: **"auto"**.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Defines the type of the right icon element of the list item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateIconV2 {
  /**
   * Icon or arrow resource of the right element of the list item.
   *
   * If **symbolStyle** is also set, only the Symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public value: ResourceStr;

  /**
   * Symbol icon or arrow resource, which takes precedence over **value**.
   *
   * By default, this attribute is not set or is set to **undefined**, and the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback invoked when the icon or arrow of the right element of the list item is tapped.
   *
   * If this parameter is not set or is set to **undefined**, tapping the icon or arrow does not trigger the callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: OnActionCallback;

  /**
   * Accessibility text of the icon or arrow. When a component does not contain a text attribute, the screen reader does
   * not announce it upon selection, leaving users unaware of which component is currently selected. To address this
   * issue, you can set accessibility text for components that do not contain text information. When the screen reader
   * selects such a component, it announces the content of the accessibility text, helping users clearly identify the
   * selected component.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the icon or arrow. This description is used to explain the current component to users
   * in detail. You should provide a relatively detailed text description for this attribute to help users understand
   * the action to be performed and its possible consequences, especially when such consequences cannot be directly
   * inferred from the component's attributes and accessibility text. If a component that is selected has both a text
   * attribute and an accessibility description attribute, the system first announces the text attribute and then the
   * content of the accessibility description attribute.
   *
   * Default value: **"Double-tap with one finger to execute."**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the icon or arrow of the right element of the list item. This attribute controls whether the
   * current item can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: Whether the current component can be recognized by accessibility services is determined by the
   * accessibility service and ArkUI together.
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * A constructor used to create an **OperateIconV2** object.
   *
   * @param { OperateIconV2Options } [options] - Configuration of the right icon of the list item.<br/>If this parameter
   *     is not set or is set to **undefined**, an object is created based on the default effect of each attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateIconV2Options);
}

/**
 * Defines options for the **OperateCheckV2** constructor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateCheckV2Options {
  /**
   * Selected state of the right element **Switch**, **CheckBox**, or **Radio** of the list item.
   * The value **true** indicates selected, and **false** indicates unselected.
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isCheck?: boolean;

  /**
   * Callback triggered when the selected state of the right element **Switch**, **CheckBox**, or **Radio** of the list
   * item changes.
   *
   * By default or when set to **undefined**, the callback is not triggered when the state changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onChange?: OnChangeCallback;

  /**
   * Accessibility text of the right element **Switch**, **CheckBox**, or **Radio** of the list item. When a component
   * does not contain a text attribute, the screen reader does not announce it upon selection, leaving users unaware of
   * which component is currently selected. To address this, you can set accessibility text for components without text
   * information. When the screen reader selects such a component, it announces the accessibility text, helping screen
   * reader users clearly understand which component they have selected.
   * Default value: **""**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the right element **Switch**, **CheckBox**, or **Radio** of the list item. This
   * description is used to explain the current component to users in detail. You should provide a relatively detailed
   * text description for this attribute to help users understand the operation to be performed and its possible
   * consequences, especially when such consequences cannot be directly inferred from the component's attributes and
   * accessibility text. If a component that is selected has both a text attribute and an accessibility description
   * attribute, the system first announces the text attribute, followed by the accessibility description.
   * By default, the announcement rules of the base components **Switch**, **CheckBox**, and **Radio** are followed.
   * Default value: the announcement rules of the base components **Switch**, **CheckBox**, and **Radio** are followed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the right element **Switch**, **CheckBox**, or **Radio** of the list item. This attribute
   * controls whether the current component can be recognized by accessibility services.
   * Supported values:
   * **"auto"**: Whether the component can be recognized by accessibility services is determined by the accessibility
   * service and ArkUI.
   * **"yes"**: The component can be recognized by accessibility services.
   * **"no"**: The component cannot be recognized by accessibility services.
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by accessibility
   * services.
   * Default value: **"auto"**.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Defines the **Switch**, **CheckBox**, and **Radio** types for the right element of the list item. You can set the
 * corresponding attribute based on the type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateCheckV2 {
  /**
   * Whether the right element Switch, CheckBox, or Radio of the list item is selected.
   *
   * The default value of **isCheck** is **false**.
   *
   * The value **true** indicates selected.
   *
   * The value **false** indicates not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public isCheck?: boolean;

  /**
   * Callback triggered when the selection state of the right element Switch, CheckBox, or Radio of the list item
   * changes.
   *
   * The value **true** indicates that the state changes from not selected to selected.
   *
   * The value **false** indicates that the state changes from selected to not selected.
   *
   * If this attribute is not set or is set to **undefined**, the callback is not triggered when the state changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public onChange?: OnChangeCallback;

  /**
   * Accessibility text of the right element Switch, CheckBox, or Radio of the list item. When a component does not
   * contain a text attribute, the screen reader does not announce it upon selection, leaving users unaware of which
   * component is currently selected. To address this, you can set accessibility text for components without text
   * information. When the screen reader selects such a component, it announces the accessibility text, helping screen
   * reader users clearly identify the selected component.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the right element Switch, CheckBox, or Radio of the list item. This description is
   * used to explain the current component to users in detail. You should provide a relatively detailed text description
   * for this attribute to help users understand the operation to be performed and its possible consequences, especially
   * when such consequences cannot be directly inferred from the component's attributes and accessibility text. If a
   * component that is selected has both a text attribute and an accessibility description attribute, the system first
   * announces the text attribute, followed by the accessibility description.
   *
   * By default, the announcement rules of the base components **Switch**, **CheckBox**, and **Radio** are followed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the right element Switch, CheckBox, or Radio of the list item. This attribute controls
   * whether the current item can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: Whether the component can be recognized by accessibility services is determined by the accessibility
   * service and ArkUI.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * A constructor used to create an **OperateCheckV2** object.
   *
   * @param { OperateCheckV2Options } [options] - Attribute configuration for the right element of the list item, which
   *     can be Switch, CheckBox, or Radio.<br/>If this parameter is not set or is set to **undefined**, an object is
   *     created based on the default effect of each attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateCheckV2Options);
}

/**
 * Defines options for the **OperateButtonV2** constructor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateButtonV2Options {
  /**
   * Text of the right button of the list item.
   * If this parameter is not set or is set to **undefined**, the button text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text?: ResourceStr;

  /**
   * Accessibility text of the button. When a component does not contain a text attribute, the screen reader does not
   * announce it upon selection, leaving users unaware of which component is currently selected. To address this
   * scenario, developers can set accessibility text for components that do not contain text information. When the
   * screen reader selects such a component, it announces the content of the accessibility text, helping screen reader
   * users clearly identify the selected component.
   * Default value: **""**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the button. This description is used to explain the current component to users in
   * detail. Developers should provide a relatively detailed text description for this attribute to help users
   * understand the action to be performed and its possible consequences, especially when such consequences cannot be
   * directly inferred from the component's attributes and accessibility text alone. If a component has both a text
   * attribute and an accessibility description attribute, the system first announces the text attribute and then the
   * content of the accessibility description attribute when the component is selected.
   * Default value: **"Double-tap with one finger to execute."**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the right button of the list item. This attribute controls whether the current item can be
   * recognized by accessibility services.
   * Supported values:
   * **"auto"**: Whether the current component can be recognized by accessibility services is determined by the
   * accessibility service and ArkUI together.
   * **"yes"**: The current component can be recognized by accessibility services.
   * **"no"**: The current component cannot be recognized by accessibility services.
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   * Default value: **"auto"**.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Defines the type of the right button element of the list item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateButtonV2 {
  /**
   * Button text.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public text?: ResourceStr;

  /**
   * Accessibility text of the button. When a component does not contain a text attribute, the screen reader does not
   * announce it upon selection, leaving users unaware of which component is currently selected. To address this issue,
   * you can set accessibility text for components that do not contain text information. When the screen reader selects
   * such a component, it announces the content of the accessibility text, helping screen reader users clearly identify
   * the selected component.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the button. This description is used to explain the current component to users in
   * detail. You should provide a relatively detailed text description for this attribute to help users understand the
   * action to be performed and its possible consequences, especially when such consequences cannot be directly inferred
   * from the component's attributes and accessibility text. If a component that is selected has both a text attribute
   * and an accessibility description attribute, the system first announces the text attribute and then the content of
   * the accessibility description attribute.
   *
   * Default value: **"Double-tap with one finger to execute."**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the button. This attribute controls whether the current item can be recognized by
   * accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: Whether the current component can be recognized by accessibility services is determined by the
   * accessibility service and ArkUI.
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * A constructor used to create a **OperateButtonV2** object.
   *
   * @param { OperateButtonV2Options } [options] - Configuration of the right icon of the list item.<br/>If not set or
   *     set to **undefined**, an object is created based on the default effect of each attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateButtonV2Options);
}

/**
 * Defines the options for the **ContentItemV2** constructor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContentItemV2Options {
  /**
   * Icon type of the left element.
   * Not set by default or set to **undefined**, the leading icon resource is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconStyle?: IconTypeV2;

  /**
   * Icon resource of the left element.
   * Not set by default or set to **undefined**, the icon resource is not displayed.
   * When **symbolStyle** is also set, only the Symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon resource of the left element, which takes priority over **icon**. When both are set, only the Symbol
   * icon is displayed.
   * Not set by default or set to **undefined**, the Symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Title content of the middle element.
   *
   * Not set by default or set to **undefined**, the title content is not displayed.
   *
   * The text is displayed with unlimited line wrapping when it overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  primaryText?: ResourceStr;

  /**
   * Subtitle content of the middle element.
   * Not set by default or set to **undefined**, the subtitle content is not displayed.
   * The text is displayed with unlimited line wrapping when it overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  secondaryText?: ResourceStr;

  /**
   * Description content of the middle element.
   * Not set by default or set to **undefined**, the description content is not displayed.
   * The text is displayed with unlimited line wrapping when it overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  description?: ResourceStr;
}

/**
 * Defines the left icon, icon size, and middle element text content displayed in the list item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ContentItemV2 {
  /**
   * Icon type of the left element.
   *
   * This attribute is not set or set to **undefined** by default, meaning the icon resource is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public iconStyle?: IconTypeV2;

  /**
   * Icon resource of the left element.
   *
   * This attribute is not set or set to **undefined** by default, meaning the icon resource is not displayed.
   *
   * When **symbolStyle** is also set, only the Symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public icon?: ResourceStr;

  /**
   * Symbol icon resource of the left element, which takes precedence over **icon**. If both **icon** and
   * **symbolStyle** are set, only the symbol icon is displayed.
   *
   * This attribute is not set or set to **undefined** by default, meaning the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Title content of the middle element.
   *
   * This attribute is not set or set to **undefined** by default, meaning the title is not displayed.
   *
   * **Text processing rule:** Text is displayed with unlimited line wrap when it overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public primaryText?: ResourceStr;

  /**
   * Subtitle content of the middle element.
   *
   * This attribute is not set or set to **undefined** by default, meaning the subtitle is not displayed.
   *
   * **Text processing rule:** Text is displayed with unlimited line wrap when it overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public secondaryText?: ResourceStr;

  /**
   * Description content of the middle element.
   *
   * This attribute is not set or set to **undefined** by default, meaning the description is not displayed.
   *
   * **Text processing rule:** Text is displayed with unlimited line wrap when it overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public description?: ResourceStr;

  /**
   * A constructor used to create a **ContentItemV2** object.
   *
   * @param { ContentItemV2Options } [options] - Configuration of the left element of the list item.<br/>If not set or
   *     set to **undefined**, an object is created based on the default effect of each attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: ContentItemV2Options);
}

/**
 * Defines the options for the **OperateItemV2** constructor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateItemV2Options {
  /**
   * First icon of the right element of the list item.
   * Not set by default or set to **undefined**, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: OperateIconV2;

  /**
   * Second icon of the right element of the list item.
   * Not set by default or set to **undefined**, the second icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  subIcon?: OperateIconV2;

  /**
   * Right element of the list item is a button.
   * Not set by default or set to **undefined**, the button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  button?: OperateButtonV2;

  /**
   * Right element of the list item is a toggle.
   * Not set by default or set to **undefined**, the toggle is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  toggle?: OperateCheckV2;

  /**
   * Right element of the list item is a checkbox.
   * Not set by default or set to **undefined**, the checkbox is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  checkbox?: OperateCheckV2;

  /**
   * Right element of the list item is a radio button.
   * Not set by default or set to **undefined**, the radio button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radio?: OperateCheckV2;

  /**
   * Right element of the list item is an image.
   * Not set by default or set to **undefined**, the image is not displayed.
   * When **symbolStyle** is also set, only the symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  image?: ResourceStr;

  /**
   * Right element of the list item is a symbol icon resource, which takes priority over **image**. When both are set,
   * only the symbol icon is displayed.
   * Not set by default or set to **undefined**, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Right element of the list item is text.
   * Not set by default or set to **undefined**, the text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text?: ResourceStr;

  /**
   * Right element of the list item is an arrow.
   * Not set by default or set to **undefined**, the arrow is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  arrow?: OperateIconV2;
}

/**
 * Defines the element types for the right element of list items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateItemV2 {
  /**
   * First icon, sized 24 × 24 vp.
   *
   * By default, this attribute is not set or set to **undefined**, and the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public icon?: OperateIconV2;

  /**
   * Second icon, sized 24 × 24 vp.
   *
   * By default, this attribute is not set or set to **undefined**, and the second icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public subIcon?: OperateIconV2;

  /**
   * Button.
   *
   * By default, this attribute is not set or set to **undefined**, and the button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public button?: OperateButtonV2;

  /**
   * Toggle.
   *
   * By default, this attribute is not set or set to **undefined**, and the toggle is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public toggle?: OperateCheckV2;

  /**
   * Checkbox, sized 24 × 24 vp.
   *
   * By default, this attribute is not set or set to **undefined**, and the checkbox is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public checkbox?: OperateCheckV2;

  /**
   * Radio button, sized 24 × 24 vp.
   *
   * By default, this attribute is not set or set to **undefined**, and the radio button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public radio?: OperateCheckV2;

  /**
   * Image resource, sized 48 × 48 vp.
   *
   * By default, this attribute is not set or set to **undefined**, and the image is not displayed.
   *
   * If symbolStyle is also set, only the symbol icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public image?: ResourceStr;

  /**
   * Symbol icon resource, sized 48 × 48 vp. It has a higher priority than image, and only the symbol icon is displayed
   * when both are set.
   *
   * By default, this attribute is not set or set to **undefined**, and the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Text.
   *
   * By default, this attribute is not set or set to **undefined**, and the text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public text?: ResourceStr;

  /**
   * Arrow, sized 12 × 24 vp.
   *
   * By default, this attribute is not set or set to **undefined**, and the arrow is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public arrow?: OperateIconV2;

  /**
   * A constructor used to create an **OperateItemV2** object.
   *
   * @param { OperateItemV2Options } [options] - Configuration of the right element of the list item.<br/>If not set or
   *     set to undefined, an object is created based on the default effect of each attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateItemV2Options);
}

/**
 * The **ComposeListItemV2** component is used to display a series of list items with the same width, suitable for
 * presenting continuous, multi-row combinations of similar data (such as images and text).
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1),
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no
 * longer limited to the component level. With state management V2, you can more flexibly control the data and state of
 * list items through this component, achieving more efficient UI refresh.
 *
 * > **NOTE**
 * >
 * > - If [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} are set for **ComposeListItemV2**, the compilation
 * > toolchain will generate an additional node \_\_Common\_\_ and mount the universal attributes or universal events on
 * > \_\_Common\_\_, rather than directly applying them to **ComposeListItemV2** itself. This may cause the set
 * > universal attributes or universal events to not take effect or behave unexpectedly. Therefore, it is not
 * > recommended to set universal attributes and universal events on **ComposeListItemV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ComposeListItemV2 {
  /**
   * Left and middle elements of the list item.
   *
   * If not set or set to undefined, the left and middle elements are not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  contentItemV2?: ContentItemV2;

  /**
   * Right element of the list item.
   *
   * If not set or set to **undefined**, the right element is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  operateItemV2?: OperateItemV2;
}