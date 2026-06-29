/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Text button information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonTextItem {

  /**
   * Button text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Accessibility level, which is used to set whether the current component can be recognized by accessibility
   * services.
   *
   * The options are as follows:
   *
   * **"auto"**: The component can be recognized by accessibility services.
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
   * If the value is **undefined**, the default value is used.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility description, which is used to explain component operations to users. You can set detailed description
   * text to help users understand the operation consequences. If a component has both text and accessibility
   * description, the text is read first, and then the accessibility description is read.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Icon button information.
 *
 * > **NOTE**
 * >
 * > Both the **icon** and **selectedIcon** attributes must be set. Setting only one of them is invalid.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonIconItem {

  /**
   * Icon of the unselected item.
   *
   * If the value is undefined, no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Accessibility text of the unselected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * Icon of the selected item.
   *
   * If the value is undefined, no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * Accessibility text of the selected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * Accessibility level, which is used to set whether the current component can be recognized by accessibility
   * services.
   *
   * The options are as follows:
   *
   * **"auto"**: The component can be recognized by accessibility services.
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
   * If the value is **undefined**, the default value is used.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility description, which is used to explain component operations to users. You can set detailed description
   * text to help users understand the operation consequences. If a component has both text and accessibility
   * description, the text is read first, and then the accessibility description is read.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Icon and text button information.
 *
 * > **NOTE**
 * >
 * > Both the **icon** and **selectedIcon** attributes must be set. Setting only one of them is invalid.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonIconTextItem {

  /**
   * Icon of the unselected item.
   *
   * If the value is undefined, no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Accessibility text of the unselected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * Icon of the selected item.
   *
   * If the value is undefined, no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * Accessibility text of the selected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * Button text.
   *
   * If the value is undefined, no text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Accessibility level, which is used to set whether the current component can be recognized by accessibility
   * services.
   *
   * The options are as follows:
   *
   * **"auto"**: The component can be recognized by accessibility services.
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
   * If the value is **undefined**, the default value is used.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility description, which is used to explain component operations to users. You can set detailed description
   * text to help users understand the operation consequences. If a component has both text and accessibility
   * description, the text is read first, and then the accessibility description is read.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * The percentage length union type is not supported.
 *
 * @unionmember { PX } Length in px.
 * @unionmember { VP } Length in vp.
 * @unionmember { FP } Length in fp.
 * @unionmember { LPX } Length in lpx.
 * @unionmember { Resource } Resource reference type, which is used to set the value of a component attribute.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type DimensionNoPercentage = PX | VP | FP | LPX | Resource;

/**
 * Enumerates the border radius modes for the **SegmentButton** component, which are used to control the border radius
 * calculation method.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum BorderRadiusMode {

  /**
   * Default mode, where the framework automatically calculates the border radius.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * Custom mode, where the border radius is set by the developer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CUSTOM = 1
}

/**
 * Defines the customizable attributes of a segment button component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface CommonSegmentButtonOptions {

  /**
   * Text color of the unselected button.
   *
   * If the value is **undefined**, the color is $r('sys.color.ohos_id_color_text_secondary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text color of the selected button.
   *
   * If the value is **undefined**, the color is $r('sys.color.ohos_id_color_text_primary') when type is set to
   * **"tab"**.
   *
   * When type is set to **"capsule"**, the color is $r('sys.color.ohos_id_color_foreground_contrary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * Font size of the unselected item. It cannot be set in percentage.
   *
   * Default value: **$r('sys.float.ohos_id_text_size_body2')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: DimensionNoPercentage;

  /**
   * Font size of the selected item. It cannot be set in percentage.
   *
   * Default value: **$r('sys.float.ohos_id_text_size_body2')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontSize?: DimensionNoPercentage;

  /**
   * Font weight of the unselected item.
   *
   * Default value: **FontWeight.Regular**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight?: FontWeight;

  /**
   * Font weight of the selected item.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontWeight?: FontWeight;

  /**
   * Background color.
   *
   * Default value: **$r('sys.color.ohos_id_color_button_normal')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background color of the selected button.
   *
   * When the value is **undefined** and **type** is **"tab"**, the background color is
   * **$r('sys.color.segment_button_checked_foreground_color')**.
   *
   * When **type** is **"capsule"**, the background color is **$r('sys.color.ohos_id_color_emphasize')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * Defines the image size.
   *
   * Default value: { width: 24, height: 24 }
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * The **imageSize** property takes effect only for icon-only and icon-with-text buttons.
   *
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize?: SizeOptions;

  /**
   * Button padding.
   *
   * Default value:
   *
   * For icon buttons and text buttons: { top: 4, right: 8, bottom: 4, left: 8 }
   *
   * For icon+text buttons: { top: 6, right: 8, bottom: 6, left: 8 }
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *     For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttonPadding?: Padding | Dimension;

  /**
   * Button padding.
   *
   * Default value:
   *
   * Icon button and text button:
   * **{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }**.
   *
   * Icon + text button:
   * **{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) **}
   * .
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default For text only / icon only buttons LocalizedPadding
   *     { top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }
   *     .
   *     For text & icon buttons LocalizedPadding
   *     {{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8)
   *     }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * Text padding.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textPadding?: Padding | Dimension;

  /**
   * Text padding.
   *
   * Default value: **0**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * Background blur style of the component.
   *
   * If the value is **undefined**, it defaults to **BlurStyle.NONE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Layout direction of the component.
   *
   * Default value: **Direction.Auto**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * Border radius mode, used to control the border radius calculation method.
   *
   * Default value: **BorderRadiusMode.DEFAULT**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * Container border radius.
   *
   * **NOTE**
   *
   * This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.
   *
   * For capsule-style multi-selection segmented buttons (with **type** being **"capsule"** and **multiply** being
   * **true**), this attribute does not take effect and **itemBorderRadius** must be used to set the border radius.
   *
   * The maximum value for the border radius is half of the component's width or height, and percentage values are not
   * supported.
   *
   * Default value: **$r('sys.float.segmentbutton_container_shape')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * Individual button border radius.
   *
   * **NOTE**
   *
   * This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.
   *
   * For capsule-style multi-selection segmented buttons (with **type** being **"capsule"** and **multiply** being
   * **true**), this attribute only affects end items.
   *
   * The maximum value for the border radius is half of the component's width or height, and percentage values are not
   * supported.
   *
   * Default value: **$r('sys.float.segmentbutton_selected_background_shape')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: LengthMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Tuple type that stores button information.
 *
 * > **NOTE**
 * >
 * > A **SegmentButton** component supports two to five buttons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type ItemRestriction<T> = [T, T, T?, T?, T?];

/**
 * Represents the tuple union type used to store button information.
 *
 * @unionmember { ItemRestriction<SegmentButtonTextItem> } A tuple of text-only button information.
 * @unionmember { ItemRestriction<SegmentButtonIconItem> } A tuple of icon-only button information.
 * @unionmember { ItemRestriction<SegmentButtonIconTextItem> } A tuple of icon and text button information.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type SegmentButtonItemTuple = ItemRestriction<SegmentButtonTextItem> | ItemRestriction<SegmentButtonIconItem> | ItemRestriction<SegmentButtonIconTextItem>;

/**
 * Represents the array union type used to store button information.
 *
 * @unionmember { Array<SegmentButtonTextItem> } An array of text-only button information.
 * @unionmember { Array<SegmentButtonIconItem> } An array of icon-only button information.
 * @unionmember { Array<SegmentButtonIconTextItem> } An array of icon and text button information.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamiconly
 * @noninterop
 */
declare type SegmentButtonItemArray = Array<SegmentButtonTextItem> | Array<SegmentButtonIconItem> | Array<SegmentButtonIconTextItem>;

/**
 * Creates a SegmentButtonOptions object of the tab type.
 *
 * Inherits from [CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface TabSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * Button information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: ItemRestriction<SegmentButtonTextItem>;
}

/**
 * Represents configuration options for creating a **SegmentButton** component consisting of capsule-style segmented
 * buttons.
 *
 * Inherits from [CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface CapsuleSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * Button information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: SegmentButtonItemTuple;

  /**
   * Whether multiple items can be selected.
   *
   * Default value: **false**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **true**: Multi-selection is allowed.
   *
   * **false**: Multi-selection is not allowed.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  multiply?: boolean;
}

/**
 * Provides configuration options for tab-style segmented buttons. Inherits from
 * [TabSegmentButtonConstructionOptions]{@link TabSegmentButtonConstructionOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface TabSegmentButtonOptions extends TabSegmentButtonConstructionOptions {

  /**
   * Type of the **SegmentButton** component.
   *
   * **NOTE**
   *
   * **"tab"**: tab-style segmented buttons, designed for page or content section switching.
   *
   * **"capsule"**: capsule-style segmented buttons, suitable for single or multiple selection scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "tab";
}

/**
 * Provides configuration options for capsule-style segmented buttons. Inherits from
 * [CapsuleSegmentButtonConstructionOptions]{@link CapsuleSegmentButtonConstructionOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface CapsuleSegmentButtonOptions extends CapsuleSegmentButtonConstructionOptions {

  /**
   * Type of the **SegmentButton** component.
   *
   * **NOTE**
   *
   * **"tab"**: tab-style segmented buttons, designed for page or content section switching.
   *
   * **"capsule"**: capsule-style segmented buttons, suitable for single or multiple selection scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "capsule";
}

/**
 * Construct parameters for SegmentButtonItemOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonItemOptionsConstructorOptions {

  /**
   * Icon of the unselected item.
   *
   * If the value is undefined, no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Accessibility text of the unselected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * Icon of the selected item.
   *
   * If the value is undefined, no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Accessibility text of the selected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * Button text.
   *
   * If the value is undefined, no text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text?: ResourceStr;

  /**
   * Accessibility level, which is used to set whether the current component can be recognized by accessibility
   * services.
   *
   * The options are as follows:
   *
   * **"auto"**: The component can be recognized by accessibility services.
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
   * If the value is **undefined**, the default value is used.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility description, which is used to explain component operations to users. You can set detailed description
   * text to help users understand the operation consequences. If a component has both text and accessibility
   * description, the text is read first, and then the accessibility description is read.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Button options in a segmented button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptions {

  /**
   * Icon of the unselected item.
   *
   * Default value: The icon of the button in the unselected state is not displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Accessibility text of the unselected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * Icon of the selected item.
   *
   * Default value: no button icon in the selected state
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Accessibility text of the selected item.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * Button text.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text?: ResourceStr;

  /**
   * Accessibility level, which is used to set whether the current component can be recognized by accessibility
   * services.
   *
   * The options are as follows:
   *
   * **"auto"**: The component can be recognized by accessibility services.
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
   * If the value is **undefined**, the default value is used.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility description, which is used to explain component operations to users. You can set detailed description
   * text to help users understand the operation consequences. If a component has both text and accessibility
   * description, the text is read first, and then the accessibility description is read.
   *
   * The default value is an empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Constructor.
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - Configuration options for a single segmented
   *     button, including the icon, text, and accessibility attributes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(options: SegmentButtonItemOptionsConstructorOptions);
}

/**
 * Represents an array for storing button information.
 *
 * > **NOTE**
 * >
 * > The SegmentButtonItemOptionsArray can save only two to five button information elements.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptionsArray extends Array<SegmentButtonItemOptions> {

  /**
   * Constructor.
   *
   * @param { SegmentButtonItemTuple } elements - Button information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(elements: SegmentButtonItemTuple);

  /**
   * Adds the specified elements to the end of this array and returns the new length of the array.
   *
   * @param { SegmentButtonItemArray } items - Elements to add to the end of the array.<br>Default value: array with 0
   *     new button information items
   * @returns { number } Length of the array after the elements are added.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  push(...items: SegmentButtonItemArray): number;

  /**
   * Removes the last element from this array and returns that element.
   *
   * @returns { SegmentButtonItemOptions | undefined } Element removed from the array.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pop(): SegmentButtonItemOptions | undefined;

  /**
   * Removes the first element from this array and returns that element.
   *
   * @returns { SegmentButtonItemOptions | undefined } Element removed from the array.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shift(): SegmentButtonItemOptions | undefined;

  /**
   * Adds an element to the beginning of this array and returns the new length of the array.
   *
   * @param { SegmentButtonItemArray } items - Elements to add to the beginning of the array.<br>Default value: array
   *     with 0 new button information items
   * @returns { number } Length of the array after the elements are added.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  unshift(...items: SegmentButtonItemArray): number;

  /**
   * Changes the contents of this array by removing the specified number of elements from the specified position and
   * adding new elements in place. This API returns an array containing the removed elements.
   *
   * @param { number } start - Index of the position starting from which elements are to be removed.
   * @param { number } deleteCount - Number of elements to remove.
   * @param { SegmentButtonItemOptions[] } items - Element to be added to the array from start.<br>Default value: If no
   *     element is specified, the element is deleted from the array.
   * @returns { SegmentButtonItemOptions[] } An array containing the removed elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * Creates a **SegmentButtonItemOptionsArray** object.
   *
   * @param { SegmentButtonItemTuple } elements - Button information.
   * @returns { SegmentButtonItemOptionsArray } Created SegmentButtonItemOptionsArray object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray;
}

/**
 * > **NOTE**
 * >
 * > The component does not support custom font type settings.
 *
 * Provides initial data and custom properties for the **SegmentButton** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Observed
declare class SegmentButtonOptions {

  /**
   * Type of the **SegmentButton** component.
   *
   * **NOTE**
   *
   * **"tab"**: tab-style segmented buttons, designed for page or content section switching.
   *
   * **"capsule"**: capsule-style segmented buttons, suitable for single or multiple selection scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "tab" | "capsule";

  /**
   * Whether multiple items can be selected.
   *
   * **true**: Multiple items can be selected.
   *
   * **false**: Multiple items cannot be selected. For the **SegmentButton** component consisting of tab-style buttons,
   * only one item can be selected. In this case, setting **multiply** to **true** does not take effect.
   *
   * If the value is **undefined**, the component does not support selection of multiple items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  multiply: boolean;

  /**
   * Button information of the component, including the icon and text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * Text color of the unselected button.
   *
   * If the value is **undefined**, the color is $r('sys.color.ohos_id_color_text_secondary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor: ResourceColor;

  /**
   * Text color of the selected button.
   *
   * If the value is **undefined**, the color is $r('sys.color.ohos_id_color_text_primary') when type is set to
   * **"tab"**.
   *
   * When type is set to **"capsule"**, the color is $r('sys.color.ohos_id_color_foreground_contrary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontColor: ResourceColor;

  /**
   * Font size of the unselected button. The value cannot be set in percentage.
   *
   * If the value is **undefined**, the font size is $r('sys.float.ohos_id_text_size_body2').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize: DimensionNoPercentage;

  /**
   * Font size of the selected button. The value cannot be set in percentage.
   *
   * If the value is **undefined**, the font size is $r('sys.float.ohos_id_text_size_body2').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * Font weight of the unselected button.
   *
   * If the value is **undefined**, the font weight is **FontWeight.Regular**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight: FontWeight;

  /**
   * Font weight of the selected button.
   *
   * If the value is **undefined**, the font weight is **FontWeight.Medium**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontWeight: FontWeight;

  /**
   * Background color of the component.
   *
   * If the value is **undefined**, the background color is $r('sys.color.ohos_id_color_button_normal').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor: ResourceColor;

  /**
   * Background color of the selected button.
   *
   * When the value is **undefined** and **type** is **"tab"**, the background color is
   * **$r('sys.color.segment_button_checked_foreground_color')**.
   *
   * When **type** is **"capsule"**, the background color is **$r('sys.color.ohos_id_color_emphasize')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedBackgroundColor: ResourceColor;

  /**
   * Image size of the component.
   *
   * When the value is **undefined**, the image size is { width: 24, height: 24 }.
   *
   * Unit: vp
   *
   * **NOTE**
   *
   * The **imageSize** property takes effect only for icon-only and icon-with-text buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize: SizeOptions;

  /**
   * Button padding of the component.
   *
   * When the value is **undefined**, the button padding settings are as follows:
   *
   * Icon button and text button: **{ top: 4, right: 8, bottom: 4, left: 8 }**.
   *
   * Icon + text button: **{ top: 6, right: 8, bottom: 6, left: 8 }**.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttonPadding: Padding | Dimension;

  /**
   * Button padding of the component.
   *
   * Default value:
   *
   * Icon button and text button:
   * **{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }**.
   *
   * Icon + text button:
   * **{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) **}
   * .
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * Text padding of the component.
   *
   * When the value is **undefined**, the text padding is 0.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textPadding: Padding | Dimension;

  /**
   * Text padding.
   *
   * Default value: **0**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * Background blur style of the component.
   *
   * If the value is **undefined**, it defaults to **BlurStyle.NONE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Constructor.
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - Configuration options for tab-style or
   *     capsule-style segmented buttons.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions);

  /**
   * Creates a SegmentButtonOptions class to define tabs.
   *
   * @param { TabSegmentButtonConstructionOptions } options - Configuration options for tab-style segmented buttons.
   * @returns { SegmentButtonOptions } Options of the **SegmentButton** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Creates a **SegmentButtonOptions** object specifically for capsule-style segmented buttons.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - Configuration options for capsule-style segmented
   *     buttons.
   * @returns { SegmentButtonOptions } Options of the **SegmentButton** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Layout direction of the component.
   *
   * Default value: **Direction.Auto**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * Border radius mode, used to control the border radius calculation method.
   *
   * Default value: **BorderRadiusMode.DEFAULT**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * Container border radius.
   *
   * **NOTE**
   *
   * This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.
   *
   * For capsule-style multi-selection segmented buttons (with **type** being **"capsule"** and **multiply** being
   * **true**), this attribute does not take effect and **itemBorderRadius** must be used to set the border radius.
   *
   * The maximum value for the border radius is half of the component's width or height, and percentage values are not
   * supported.
   *
   * Default value: **$r('sys.float.segmentbutton_container_shape')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * Individual button border radius.
   *
   * **NOTE**
   *
   * This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.
   *
   * For capsule-style multi-selection segmented buttons (with **type** being **"capsule"** and **multiply** being
   * **true**), this attribute only affects end items.
   *
   * The maximum value for the border radius is half of the component's width or height, and percentage values are not
   * supported.
   *
   * Default value: **$r('sys.float.segmentbutton_selected_background_shape')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: LengthMetrics;
}

/**
 * **SegmentButton** is a versatile component that organizes related options into visually grouped buttons. It supports
 * three variants: tab-style, capsule-style single-select, and capsule-style multi-select.
 *
 * >**NOTE**
 * >
 * > - The **SegmentButton** component does not support [universal attributes]{@link CommonMethod}.
 * The component occupies the maximum available width within its content area and distributes this width evenly among
 * its items. It adapts its height automatically to the content (text and images), the minimum height being 28 vp.
 * >
 * > - Properties decorated with @Prop are optional. They are required during construction only when used together with
 * the @Require decorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
@Component
declare struct SegmentButton {

  /**
   * Options of the **SegmentButton** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @ObjectLink
  options: SegmentButtonOptions;

  /**
   * Indexes of selected items of the **SegmentButton**. The index is zero-based and increments by 1.
   *
   * **NOTE**
   *
   * **selectedIndexes** is decorated with [@Link](docroot://ui/state-management/arkts-link.md) to implement parent-
   * child two-way synchronization. If no items are selected, an empty array **[]** can be passed in.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Link
  selectedIndexes: number[];

  /**
   * Maximum font scale for the text in the **SegmentButton**.
   *
   * Value range: [1, 2]
   *
   * Values less than 1 are treated as 1, and values greater than 2 are treated as 2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @Prop
  maxFontScale: number | Resource;

  /**
   * Callback function triggered when a segment button option is tapped. The subscript of the tapped option is passed as
   * a parameter. If this parameter is not passed, no callback is triggered when the option is tapped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onItemClicked?: Callback<number>;

  /**
   * Whether to enable property animation for the segment button when the **selectedIndex** value is modified via a
   * variable.
   *
   * **true**: Property animation is enabled. **false**: Property animation is disabled and the original animation is
   * used.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Prop
  enableStateAnimation: boolean;
}

export {
  SegmentButton,
  SegmentButtonOptions,
  SegmentButtonItemOptionsArray,
  TabSegmentButtonOptions,
  TabSegmentButtonConstructionOptions,
  CapsuleSegmentButtonOptions,
  CapsuleSegmentButtonConstructionOptions,
  SegmentButtonTextItem,
  SegmentButtonIconItem,
  SegmentButtonIconTextItem,
  DimensionNoPercentage,
  CommonSegmentButtonOptions,
  ItemRestriction,
  SegmentButtonItemTuple,
  SegmentButtonItemArray,
  SegmentButtonItemOptionsConstructorOptions,
  SegmentButtonItemOptions,
  BorderRadiusMode
};
