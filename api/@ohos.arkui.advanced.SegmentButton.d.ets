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
   * Accessibility level, which controls whether the current component can be recognized by accessibility services.
   * 
   * Supported values:
   * 
   * **"auto"**: The current component can be recognized by accessibility services.
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
   * Accessibility description, which provides further explanation of the current component for users. Developers can
   * set a relatively detailed explanatory text for this attribute to help users understand the operation to be
   * performed, such as the possible consequences of the operation, especially when these consequences cannot be learned
   * from the component's own attributes and accessibility text. If a component has both a text attribute and an
   * accessibility description attribute, when the component is selected, the text attribute is announced first,
   * followed by the content of the accessibility description attribute.
   * 
   * Default value: empty string.
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
   * Icon of the button in unselected state.
   * 
   * If the value is **undefined**, no icon is displayed.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting either alone is ineffective.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Accessibility text for the icon of the button in unselected state.
   * 
   * Default value: empty string.
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
   * Icon of the button in selected state.
   * 
   * If the value is **undefined**, no icon is displayed.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting either alone is ineffective.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * Accessibility text for the icon of the button in selected state.
   * 
   * Default value: empty string.
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
   * Accessibility level, which controls whether the current component can be recognized by accessibility services.
   * 
   * Supported values:
   * 
   * **"auto"**: The current component can be recognized by accessibility services.
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
   * Accessibility description, which provides additional explanation about the current component for users. Developers
   * can set a relatively detailed explanatory text for this attribute to help users understand the operation to be
   * performed, such as the potential consequences of the operation, especially when these consequences cannot be
   * learned from the component's own attributes and accessibility text. If a component has both a text attribute and an
   * accessibility description attribute, the text attribute is announced first when the component is selected, followed
   * by the content of the accessibility description attribute.
   * 
   * Default value: empty string.
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
   * Icon of the button in unselected state.
   * 
   * When the value is **undefined**, no icon is displayed.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting either alone is ineffective.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Accessibility text of the button icon in unselected state.
   * 
   * Default value: empty string.
   * 
   * When the value is **undefined**, the default value is used.
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
   * Icon of the button in selected state.
   * 
   * When the value is **undefined**, no icon is displayed.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting either alone is ineffective.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * Accessibility text of the button icon in selected state.
   * 
   * Default value: empty string.
   * 
   * When the value is **undefined**, the default value is used.
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
   * When the value is **undefined**, no text content is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Accessibility level, which determines whether the current component can be recognized by accessibility services.
   * 
   * Supported values:
   * 
   * **"auto"**: The current component can be recognized by accessibility services.
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
   * When the value is **undefined**, the default value is used.
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
   * Accessibility description, which provides additional explanation about the current component for users. Developers
   * can set a relatively detailed explanatory text for this attribute to help users understand the operation to be
   * performed, such as the possible consequences of the operation, especially when such consequences cannot be learned
   * from the component's own attributes and accessibility text. If a component has both a text attribute and an
   * accessibility description attribute, the text attribute is announced first when the component is selected, followed
   * by the accessibility description.
   * 
   * Default value: empty string.
   * 
   * When the value is **undefined**, the default value is used.
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
 * | Name   |Value| Description                            |
 * | ------- | - |-------------------------------- |
 * | DEFAULT | 0 |Default mode, where the framework automatically calculates the border radius.|
 * | CUSTOM  | 1 |Custom mode, where the border radius is set by the developer.|
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
   * Text color of the button in unselected state.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text color of the button in selected state.
   * 
   * Default value:
   * 
   * When type is **"tab"**, the default value is `$r('sys.color.ohos_id_color_text_primary')`.
   *
   * When type is **"capsule"**, the default value is `$r('sys.color.ohos_id_color_foreground_contrary')`.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * Font size of the button in unselected state (percentage setting is not supported).
   * 
   * Default value: **$r('sys.float.ohos_id_text_size_body2')**
   *
   * Unit: fp
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
   * Font size of the button in selected state (percentage setting is not supported).
   * 
   * Default value: **$r('sys.float.ohos_id_text_size_body2')**
   *
   * Unit: fp
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
   * Font weight of the button in unselected state.
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
   * Font weight of the button in selected state.
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
   * Color of the background.
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
   * Color of the background for the button in selected state.
   * 
   * Default value:
   * 
   * When **type** is **"tab"**, the default value is `$r('sys.color.segment_button_checked_foreground_color')`.
   *
   * When **type** is **"capsule"**, the default value is `$r('sys.color.ohos_id_color_emphasize')`.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * Image size.
   * 
   * Default value: **{ width: 24, height: 24 }**
   * 
   * Unit: vp
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * **NOTE**
   * 
   * The `imageSize` attribute takes effect only for icon buttons and icon + text buttons, and does not respond on text-
   * only buttons.
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
   * For icon-only buttons and text-only buttons: `{ top: 4, right: 8, bottom: 4, left: 8 }`
   * 
   * For icon+text buttons: `{ top: 6, right: 8, bottom: 6, left: 8 }`
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
   * Button padding, which supports adaptive adjustment based on the layout direction (LTR/RTL).
   * 
   * Default value:
   * 
   * For icon-only buttons and text-only buttons:
   * `{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }`
   * 
   * For icon + text buttons:
   * `{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }`
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
   * Text padding, which supports adaptive adjustment based on the layout direction (LTR/RTL).
   * 
   * Default value: **0**
   *
   * Unit: vp
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
   * Background blur material.
   * 
   * Default value: **BlurStyle.NONE**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Layout direction.
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
   * Border radius mode, which controls the radius calculation method.
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
   * Border radius of the overall container of the segment button.
   * 
   * **NOTE**
   * 
   * This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.
   * 
   * For capsule-type multi-select segment buttons (**type** is **"capsule"** and **multiply** is **true**), this
   * attribute does not take effect. Use **itemBorderRadius** to configure the radius instead.
   * 
   * The radius size is limited by the component size. The maximum value is half of the component width or height.
   * Percentage setting is not supported. If the value exceeds the maximum, it is automatically corrected to the
   * maximum. If a percentage is used, the default value is used.
   * 
   * Default value: `$r('sys.float.segmentbutton_container_shape')`
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
   * Border radius of the button items in the segment button.
   * 
   * **NOTE**
   * 
   * This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.
   * 
   * For capsule-type multi-select segment buttons (**type** is **"capsule"** and **multiply** is **true**), only the
   * radius of the options at both ends can be controlled.
   * 
   * The radius size is limited by the component size. The maximum value is half of the component width or height.
   * Percentage setting is not supported. If the value exceeds the maximum, it is automatically corrected to the
   * maximum. If a percentage is used, the default value is used.
   * 
   * Default value: `$r('sys.float.segmentbutton_selected_background_shape')`
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
   * System material of the background of the segment button component. Different system materials have different
   * properties and produce different effects. After a material is passed in, the animation effects of the
   * **SegmentButton** change.
   *
   * For capsule-type multi-select segment buttons (type is **"capsule"** and **multiply** is **true**), this attribute
   * does not take effect.
   *
   * Default value: no material effect.
   *
   * Since API version 26.0.0, except for capsule-type multi-select segment buttons (**type** is **"capsule"** and
   * **multiply** is **true**), when **backgroundSystemMaterial** is set to a system material with automatic inverted
   * color, **fontColor** and **selectedFontColor** use special system resources that support inverted color, and the
   * colors automatically adapt to the inverted color of the material background color.
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
 * Represents configuration options for creating a **SegmentButton** component consisting of capsule-style segment
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
   * Default value: **false**.
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
 * Provides configuration options for tab-style segment buttons. Inherits from
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
   * Type of the segment buttons, which is **"tab"** in this case.
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
 * Provides configuration options for capsule-style segment buttons. Inherits from
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
   * Type of the segment buttons, which is **"capsule"** in this case.
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
 * > **NOTE**
 * >
 * > Both the unselected icon `icon` and the selected icon `selectedIcon` must be set. Setting only one of them is
 * > invalid.
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
   * Icon for the unselected state.
   * 
   * Default value: the icon for the unselected state is not displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting either one alone does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Accessibility text for the icon in the unselected state.
   * 
   * Default value: empty string.
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
   * Icon for the selected state.
   * 
   * Default value: the icon for the selected state is not displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting either one alone does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Accessibility text for the icon in the selected state.
   * 
   * Default value: empty string.
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
   * Default value: empty string.
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
   * Accessibility level, which controls whether the current component can be recognized by accessibility services.
   *
   * Supported values:
   *
   * "auto": the current component can be recognized by accessibility services.
   *
   * "yes": the current component can be recognized by accessibility services.
   *
   * "no": the current component cannot be recognized by accessibility services.
   *
   * "no-hide-descendants": the current component and all its child components cannot be recognized by accessibility
   * services.
   * 
   * Default value: "auto"
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
   * Accessibility description, which provides additional explanation about the current component for users. Developers
   * can set a relatively detailed explanatory text for this attribute to help users understand the operation to be
   * performed, such as the possible consequences of the operation, especially when these consequences cannot be learned
   * from the component's own attributes and accessibility text. If a component has both a text attribute and an
   * accessibility description attribute, the text attribute is announced first when the component is selected, followed
   * by the content of the accessibility description attribute.
   * 
   * Default value: empty string.
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
 * Button options in a segment button.
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
   * Icon of the button in the unselected state.
   * 
   * Default value: no icon is displayed for the button in the unselected state.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting only one of them does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Accessibility text for the icon of the button in the unselected state.
   *
   * Default value: empty string.
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
   * Icon of the button in the selected state.
   *
   * Default value: no icon is displayed for the button in the selected state.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Note:** **icon** and **selectedIcon** must be set together. Setting only one of them does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Accessibility text for the icon of the button in the selected state.
   *
   * Default value: empty string.
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
   * Default value: empty string.
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
   * Accessibility level, which controls whether the current component can be recognized by accessibility services.
   *
   * Supported values are as follows:
   *
   * **"auto"**: The current component can be recognized by accessibility services.
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
   * Accessibility description, which provides further explanation of the current component for users. Developers can
   * set a relatively detailed explanatory text for this attribute to help users understand the operation to be
   * performed, such as the possible consequences of the operation, especially when such consequences cannot be learned
   * from the component's own attributes and accessibility text. If a component has both a text attribute and an
   * accessibility description attribute, the text attribute is announced first when the component is selected, followed
   * by the content of the accessibility description attribute.
   * 
   * Default value: empty string.
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
   * @param { SegmentButtonItemOptionsConstructorOptions } options - Configuration options for a single segment button,
   *     including the icon, text, and accessibility attributes.
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
   * @param { SegmentButtonItemTuple } elements - Button information tuple used to initialize the array, containing 2 to
   *     5 button option elements, each defining attributes such as the icon and text of a button.
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
   * @param { SegmentButtonItemArray } items - Array of button information to be added.
   *     <br>Default value: no button information elements are passed in.
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
   * Adds new elements to the beginning of the array and returns the length of the array after the addition.
   *
   * @param { SegmentButtonItemArray } items - Array of button information to add.
   *     <br>Default value: no button information elements are passed in.
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
   * @param { number } start - Start position of the element to delete, counting from 0.
   * @param { number } deleteCount - Number of elements to delete. The value range is greater than or equal to 0. If
   *     **deleteCount** exceeds the remaining length of the array, all remaining elements starting from the start
   *     position are deleted.
   * @param { SegmentButtonItemOptions[] } items - Element to be added to the array from start.
   *     <br>Default value: If no element is specified, the element is deleted from the array.
   * @returns { SegmentButtonItemOptions[] } An array containing the removed elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * Creates a **SegmentButtonItemOptionsArray** object. It accepts the same parameters as the constructor and has the
   * same functionality. You can choose either as required.
   *
   * @param { SegmentButtonItemTuple } elements - Button information tuple used to initialize the array. It contains 2
   *     to 5 button option elements, each defining attributes such as the icon and text of a button.
   * @returns { SegmentButtonItemOptionsArray } **SegmentButtonItemOptionsArray** object created, which is an array for
   *     storing button information.
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
 * > **NOTE**
 * >
 * > Starting from API version 26.0.0, except for capsule-style multi-select buttons (where type is **"capsule"** and
 * > **multiply** is **true**), when **backgroundSystemMaterial** is set to a system material with automatic color
 * > inversion, **fontColor** and **selectedFontColor** use special system resources that support color inversion, and
 * > the colors automatically adapt to the inverted material background color.
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
   * Type of the segment button component.
   * 
   * **Note:**
   * 
   * **"tab"**: tab-type segment button, suitable for switching between pages or content areas.
   * 
   * **"capsule"**: capsule-type segment button, suitable for single-selection or multi-selection scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "tab" | "capsule";

  /**
   * Whether the segment button component supports multi-selection.
   * 
   * **true**: multi-selection is supported; **false**: multi-selection is not supported.
   * 
   * For tab-type segment buttons (type is **"tab"**), **multiply** is forcibly set to **false**, and setting it to
   * **true** does not take effect.
   * 
   * Default value: **false**
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  multiply: boolean;

  /**
   * Button information of the segment button component, including icon and text information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * Text color of the segment button component in the unselected state.
   * 
   * When the value is **undefined**, the color is **$r('sys.color.ohos_id_color_text_secondary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor: ResourceColor;

  /**
   * Text color of the segment button component in the selected state.
   * 
   * When the value is **undefined** and **type** is **"tab"**, the color is
   * `$r('sys.color.ohos_id_color_text_primary')`.
   * 
   * When **type** is **"capsule"**, the color is `$r('sys.color.ohos_id_color_foreground_contrary')`.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontColor: ResourceColor;

  /**
   * Font size of the segment button component in the unselected state. Percentage setting is not supported.
   * 
   * Unit: fp
   *
   * When the value is **undefined**, the font size is **$r('sys.float.ohos_id_text_size_body2')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize: DimensionNoPercentage;

  /**
   * Font size of the segment button component in the selected state. Percentage setting is not supported.
   * 
   * Unit: fp
   *
   * When the value is **undefined**, the font size is **$r('sys.float.ohos_id_text_size_body2')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * Font weight of the segment button component in the unselected state.
   * 
   * When the value is **undefined**, the font weight is **FontWeight.Regular**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight: FontWeight;

  /**
   * Font weight of the segment button component in the selected state.
   * 
   * When the value is **undefined**, the font weight is **FontWeight.Medium**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontWeight: FontWeight;

  /**
   * Background color of the segment button component.
   * 
   * When the value is **undefined**, the background color is **$r('sys.color.ohos_id_color_button_normal')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor: ResourceColor;

  /**
   * Background color of the segment button component in the selected state.
   * 
   * When the value is **undefined** and type is **"tab"**, the background color is
   * `$r('sys.color.segment_button_checked_foreground_color')`.
   * 
   * When type is **"capsule"**, the background color is `$r('sys.color.ohos_id_color_emphasize')`.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedBackgroundColor: ResourceColor;

  /**
   * Image size of the segment button component.
   * 
   * When the value is **undefined**, the image size is **{ width: 24, height: 24 }**.
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * The `imageSize` attribute takes effect only for icon-only buttons and icon + text buttons, and has no effect on
   * text-only buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize: SizeOptions;

  /**
   * Button padding of the segment button component.
   * 
   * When the value is **undefined**, the padding for icon-only buttons and text-only buttons is:
   * `{ top: 4, right: 8, bottom: 4, left: 8 }`
   * 
   * The padding for icon + text buttons is: `{ top: 6, right: 8, bottom: 6, left: 8 }`
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
   * Button padding of the segment button component, which supports adaptation to the layout direction (LTR/RTL).
   * 
   * Default value:
   * 
   * For icon-only buttons and text-only buttons:
   * `{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }`
   * 
   * For icon + text buttons:
   * `{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }`
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * Text padding of the segment button component.
   * 
   * When the value is **undefined**, the text padding is **0**.
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
   * Text padding, which supports adaptation to the layout direction (LTR/RTL).
   * 
   * Default value: **0**
   * 
   * Unit: vp
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * Background blur material of the segment button component.
   * 
   * Default value: **BlurStyle.NONE**
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * System material of the background of the segment button component. Different system materials have different
   * properties and produce different effects. After a material is passed in, the animation effect of **SegmentButton**
   * changes.
   *
   * For capsule-type multi-selection segment buttons (**type** is **"capsule"** and **multiply** is **true**), this
   * attribute does not take effect.
   *
   * Default value: no material effect.
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
   *     capsule-style segment buttons.
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
   * @param { TabSegmentButtonConstructionOptions } options - Configuration options for tab-style segment buttons.
   * @returns { SegmentButtonOptions } Options of the segment button, used to define a tab-type segment button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Creates a capsule-style **SegmentButtonOptions** instance, which is used to define capsule-style segment buttons.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - Configuration options for capsule-style segment
   *     buttons.
   * @returns { SegmentButtonOptions } Segment button options for the capsule type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Layout direction of the segment button component.
   * 
   * Default value: **Direction.Auto**
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * Border radius mode, which controls how the corner radius is calculated.
   * 
   * Default value: **BorderRadiusMode.DEFAULT**
   * 
   * When the value is **undefined**, the default value is used.
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
   * Border radius of the overall container of the segment button.
   * 
   * **NOTE**
   * 
   * This attribute takes effect only when **borderRadiusMode** is **BorderRadiusMode.CUSTOM**.
   * 
   * For capsule-type multi-selection segment buttons (**type** is **"capsule"** and **multiply** is **true**), this
   * attribute does not take effect. Use **itemBorderRadius** to configure the corner radius instead.
   * 
   * The corner radius is limited by the component size. The maximum value is half of the component width or height.
   * Percentage setting is not supported. When the value exceeds the maximum, it is automatically corrected to the
   * maximum. When a percentage is used, the default value is used.
   * 
   * Default value: `$r('sys.float.segmentbutton_container_shape')`
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * Border radius of the button items in the segment button.
   * 
   * **NOTE**
   * 
   * This attribute takes effect only when **borderRadiusMode** is **BorderRadiusMode.CUSTOM**.
   * 
   * For capsule-type multi-selection segment buttons (**type** is **"capsule"** and **multiply** is **true**), only the
   * corner radius of the items at both ends can be controlled.
   * 
   * The corner radius is limited by the component size. The maximum value is half of the component width or height.
   * Percentage setting is not supported. When the value exceeds the maximum, it is automatically corrected to the
   * maximum. When a percentage is used, the default value is used.
   * 
   * Default value: `$r('sys.float.segmentbutton_selected_background_shape')`
   * 
   * When the value is **undefined**, the default value is used.
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
 * The segment button component includes tab-style segment buttons and capsule-style segment buttons. Tab-style segment
 * buttons are suitable for switching between pages or content areas. Capsule-style segment buttons are suitable for
 * single-select or multi-select scenarios, including capsule-style single-select segment buttons and capsule-style
 * multi-select segment buttons. This component supports custom appearance attributes such as text color, font size,
 * font weight, background color, image size, padding, and background blur material. It supports three button styles:
 * text-only, icon-only, and icon + text. It also provides capabilities such as accessibility reading, layout direction
 * mirroring, custom rounded corners, and property animation, making it suitable for scenarios where you need to quickly
 * build a segmented selection interface that complies with design specifications.
 * 
 * > **NOTE**
 * >
 * > - The segment button does not support [universal attributes]{@link CommonMethod}. The segment
 * > button uses the maximum available width in the current area as the component width, and evenly distributes the
 * > width among the buttons based on the number of buttons. The segment button height automatically adapts to the
 * > button content (text and images), with a minimum height of 28 vp.
 * >
 * > - Attributes decorated by **@Prop** are optional parameters. They must be passed during construction only when
 * > used together with the **@Require** decorator.
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
   * Configuration options of the segment button, used to set the button type (tab type or capsule type), appearance
   * style (color, font, size, etc.), button content, selected state, and other attributes.
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
   * Index of the selected item in the segment button. The index of the first item is 0, and subsequent items are
   * numbered sequentially.
   * 
   * **NOTE**
   * 
   * `selectedIndexes` uses the
   * [@Link decorator: two-way synchronization between parent and child](docroot://ui/state-management/arkts-link.md).
   * Only valid button indexes are supported (the first button index is 0, and subsequent indexes increase sequentially,
   * with the maximum index being the number of buttons minus 1). If an invalid index is passed in, it does not take
   * effect. If no item is selected, an empty array `[]` can be passed in.
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
   * Maximum font scale factor for the segment button option text, used to limit the upper bound of font scaling. Pass
   * in this parameter when you need to control the font scale factor to fit a specific UI layout or avoid excessively
   * large text.
   * 
   * Value range: [1, 2]
   * 
   * If the set value is less than 1, the value **1** is used. If the set value is greater than 2, the value **2** is
   * used.
   *
   * Default value: **1**
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
   * Callback invoked when a segment button option is clicked. It receives the index of the clicked option as a
   * parameter. If this parameter is not passed in, no callback is triggered upon clicking.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onItemClicked?: Callback<number>;

  /**
   * Whether to enable the attribute animation of the segment button when the **selectedIndexes** value is modified
   * through a variable.
   * 
   * The value **true** means to enable the attribute animation of the segment button, and **false** means the opposite.
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
