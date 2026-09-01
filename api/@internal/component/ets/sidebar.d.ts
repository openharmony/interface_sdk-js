/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * Enumerates the types of sidebar containers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SideBarContainerType {

  /**
   * The sidebar is embedded in the component and displayed side by side with the content area.
   *
   * With the overall container size unchanged, displaying the sidebar reduces the content area, and hiding the sidebar
   * expands the content area.
   *
   * If the component size is less than the sum of [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}
   * and [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)}, and **showSideBar** is not
   * set, the sidebar is automatically hidden.
   *
   * If **minSideBarWidth** or **minContentWidth** is not set, the default value will be used for calculation.
   *
   * The user can bring out the sidebar in Overlay mode by clicking the control button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Embed = 0,

  /**
   * The sidebar is overlaid on top of the content area, without affecting the size of the content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Overlay = 1,

  /**
   * The sidebar is displayed in Embed mode when the component size is greater than or equal to the sum of
   * **minSideBarWidth** and **minContentWidth**
   *
   * and in Overlay mode otherwise.
   *
   * If **minSideBarWidth** or **minContentWidth** is not set, the default value will be used for calculation. If the
   * calculation result is less than 600 vp, 600 vp will be used as the breakpoint value for mode switching.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO = 2,

  /**
   * The sideBar Displace. Sidebar is visible, content will offscreen to make space for sideBar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISPLACE = 3
}

/**
 * Enumerates the positions of the sidebar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SideBarPosition {

  /**
   * The sidebar is on the left side of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Start,

  /**
   * The sidebar is on the right side of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  End
}

/**
 * Describes the icons of the sidebar control button.
 *
 * > **NOTE**
 *
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ButtonIconOptions {

  /**
   * Icon of the control button when the sidebar is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shown: string | PixelMap | Resource;

  /**
   * Icon of the control button when the sidebar is hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hidden: string | PixelMap | Resource;

  /**
   * Icon of the control button when the sidebar is switching between the shown and hidden states.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  switching?: string | PixelMap | Resource;
}

/**
 * Describes the style of the sidebar control button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface ButtonStyle {

  /**
   * Spacing between the sidebar control button and the left of the container.
   *
   * Default value: **16vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  left?: number;

  /**
   * Spacing between the sidebar control button and the top of the container.
   *
   * Default value: **48vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  top?: number;

  /**
   * Width of the sidebar control button.
   *
   * Default value:
   *
   * API version 9 and earlier versions: **32vp**
   *
   * API version 10 and later versions: **24vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width?: number;

  /**
   * Height of the sidebar control button.
   *
   * Default value:
   *
   * API version 9 and earlier versions: **32vp**
   *
   * API version 10 and later versions: **24vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height?: number;

  /**
   * Icons of the sidebar control button.
   *
   * If the resource fails to be obtained or this attribute is not set, the default icon is used.
   *
   * @type { ?object } [since 8 - 17]
   * @type { ?ButtonIconOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icons?: ButtonIconOptions;
}

/**
 * The **SideBarContainer** component contains a sidebar and content area as its child components. The sidebar is the
 * first child component and can be shown or hidden as needed. The content area is the second child component.
 *
 * > **NOTE**
 *
 * > The APIs of this module are supported since API version 8. Updates will be marked with a superscript to indicate
 * > their
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface SideBarContainerInterface {

  /**
   * Creates a sidebar container.
   *
   * @param { SideBarContainerType } type - Display type of the sidebar.<br>Default value:
   *     **SideBarContainerType.Embed**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (type?: SideBarContainerType): SideBarContainerAttribute;
}

/**
 * Sets the divider style.
 *
 * > **NOTE**
 *
 * > The settings of the [universal size attributes]{@link common} **width** and **height** do not take effect for the
 * > sidebar child component.
 * > >  The settings do not take effect for the sidebar content area either. By default, the sidebar content area takes
 * > up the remaining space of the sidebar container.
 *
 * > If the [showSideBar]{@link SideBarContainerAttribute#showSideBar} attribute is not set, the sidebar's visibility is
 * > subject to its size.
 *
 * > - If the size is less than the sum of
 * > [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} and
 * > [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}, the sidebar is not displayed by default.
 * >
 * > - If the size is greater than or equal to the sum of **minSideBarWidth** and **minContentWidth**, the sidebar is
 * > displayed by default.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface DividerStyle {

  /**
   * Stroke width of the divider.
   *
   * Default value: **1vp**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * **NOTE**
   *
   * Percentage values are not supported. The priority of this attribute is lower than that of the universal attribute
   * [height]{@link CommonMethod#height(value: Length)}. If the value of this attribute is greater than that of
   * **height**, cropping is performed based on the **height** settings. Due to hardware limitations on some devices
   * where 1 px dividers may not display properly after rounding, you are advised to use the **2px** value.
   *
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth: Length;

  /**
   * Color of the divider.
   *
   * Default value: **#000000, 3%**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the top of the sidebar.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMargin?: Length;

  /**
   * Distance between the divider and the bottom of the sidebar.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMargin?: Length;
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SideBarContainerAttribute extends CommonMethod<SideBarContainerAttribute> {

  /**
   * Specifies whether to display the sidebar.
   *
   * Since API version 10, this attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @param { boolean } value - Whether to display the sidebar.<br>**true**: The sidebar is displayed.<br>**false**: The
   *     sidebar is not displayed.<br>Default value: **true**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  showSideBar(value: boolean): SideBarContainerAttribute;

  /**
   * Sets the attributes of the sidebar control button.
   *
   * @param { ButtonStyle } value - Attributes of the sidebar control button.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controlButton(value: ButtonStyle): SideBarContainerAttribute;

  /**
   * Specifies whether to display the sidebar control button.
   *
   * @param { boolean } value - Whether to display the sidebar control button.<br>**true**: The sidebar control button
   *     is displayed.<br>**false**: The sidebar control button is not displayed.<br>Default value: **true**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  showControlButton(value: boolean): SideBarContainerAttribute;

  /**
   * Triggered when the status of the sidebar switches between shown and hidden.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. The value of the **showSideBar** attribute changes.
   * 2. The adaptation of the **showSideBar** attribute changes.
   * 3. [autoHide]{@link SideBarContainerAttribute#autoHide} is triggered upon divider dragging.
   *
   * @param { function } callback - **true**: The sidebar is shown. **false**: The sidebar is hidden.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: boolean) => void): SideBarContainerAttribute;

  /**
   * Sets the width of the sidebar. If a value less than 0 is set, the default value is used. The value must comply with
   * the width constraints. If it is not within the valid range, the valid value closest to the set one is used.
   *
   * Since API version 18, this attribute supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md).
   *
   * @param { number } value - Width of the sidebar.<br>Default value: **240vp**<br>Unit: vp<br>Value range:
   *     [0, +∞).<br>**NOTE**<br>In API version 9 and earlier versions, the default value is **200vp**.
   *     In API version 10, the default value is **240vp**.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  sideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the minimum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead.
   *
   * **minSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **minWidth** of
   * the sidebar child components.
   *
   * @param { number } value - Minimum width of the sidebar.
   *     <br>Unit: vp. Value range: [0, +∞). Default value: In API version 9 and earlier versions,
   *     the default value is **200vp**.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the maximum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead.
   *
   * **maxSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **maxWidth** of
   * the sidebar child components.
   *
   * @param { number } value - Maximum width of the sidebar.<br>Default value: **280vp**<br>Unit: vp<br>Value range:
   *     [0, +∞).
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  maxSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the width of the sidebar. If a value less than 0 is set, the default value is used. The value must comply with
   * the width constraints. If it is not within the valid range, the valid value closest to the set one is used.
   * Compared to [sideBarWidth]{@link SideBarContainerAttribute#sideBarWidth(value: number)}, this API supports
   * percentage strings and other [pixel units]{@link common} for the **value** parameter.
   *
   * Since API version 18, this attribute supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md).
   *
   * @param { Length } value - Width of the sidebar.<br>Default value: **240vp**<br>Unit: vp<br>Value range:
   *     [0, +∞).<br>**NOTE**<br>The default value is **200vp** in API version 9 and **240vp** in API version 10.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the minimum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead. Compared to
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)}, this API supports percentage
   * strings and other [pixel units]{@link common} for the **value** parameter.
   *
   * **minSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **minWidth** of
   * the sidebar child components.
   *
   * @param { Length } value - Minimum width of the sidebar.<br>Default value: In API version 9 and earlier versions,
   *     the default value is **200vp**. In API version 10, the default value is **240vp**.<br>Value range: [0, +∞).
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the maximum width of the sidebar. If a value less than 0 is set, the default value is used. The value cannot
   * exceed the width of the sidebar container. If the specified value exceeds the sidebar container width, the
   * container width is used instead. Compared with
   * [maxSideBarWidth]{@link SideBarContainerAttribute#maxSideBarWidth(value: number)}, this API supports percentage
   * strings and other [pixel units]{@link common} for the **value** parameter.
   *
   * **maxSideBarWidth**, whether it is specified or kept at the default value, takes precedence over **maxWidth** of
   * the sidebar child components.
   *
   * @param { Length } value - Maximum width of the sidebar.<br>Default value: **280vp**<br>Unit: vp<br>Value range:
   *     [0, +∞).
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  maxSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Specifies whether to automatically hide the sidebar when it is dragged to be smaller than the minimum width. The
   * value is subject to the **minSideBarWidth** attribute method. If it is not set in **minSideBarWidth**, the default
   * value is used.
   *
   * Whether the sidebar should be hidden is determined when it is being dragged. When it is dragged to be smaller than
   * the minimum width, the damping effect is required to trigger hiding (a distance out of range).
   *
   * @param { boolean } value - Whether to automatically hide the sidebar when it is dragged to be smaller than the
   *     minimum width.<br>**true**: The sidebar is automatically hidden.<br>**false**: The sidebar is not automatically
   *     hidden.<br>Default value: **true**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  autoHide(value: boolean): SideBarContainerAttribute;

  /**
   * Sets the position of the sidebar.
   *
   * @param { SideBarPosition } value - Position of the sidebar.<br>Default value: **SideBarPosition.Start**
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sideBarPosition(value: SideBarPosition): SideBarContainerAttribute;

  /**
   * Sets the divider style.
   *
   * @param { DividerStyle | null } value - Divider style.<br>- **DividerStyle** (default): The divider is displayed.<br
   *     >- **null** or **undefined**: No action is taken, and the divider style remains consistent with the default.<br
   *     >**NOTE**<br>In API version 11 and earlier versions, **null** results in the divider not being displayed.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: DividerStyle | null): SideBarContainerAttribute;

  /**
   * Sets the minimum content area width of the sidebar container.
   *
   * If this attribute is set to a value less than 0, the default value **360vp** will be used. If this attribute is not
   * set, the width of the content area can shrink to 0.
   *
   * In Embed mode, when the component size is increased, only the content area is enlarged;
   *
   * when the component size is decreased, the content area is shrunk until its width reaches the value defined by
   * **minContentWidth**; if the component size is further decreased, while respecting the **minContentWidth** settings,
   * the sidebar is shrunk
   *
   * until its width reaches the value defined by **minSideBarWidth**; if the component size is further decreased, then:
   *
   *
   * - If [autoHide]{@link SideBarContainerAttribute#autoHide} is set to **false**, while retaining the
   * [minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} and **minContentWidth** settings,
   * the content area has its content clipped.
   * - If **autoHide** is set to **true**, the sidebar is hidden first, and then the content area is shrunk. After its
   * width reaches the value defined by **minContentWidth**, the content area has its content clipped.
   *
   * **minContentWidth** takes precedence over the
   * [maxSideBarWidth]{@link SideBarContainerAttribute#maxSideBarWidth(value: number)} and **sideBarWidth** attributes
   * of the sidebar. If **minContentWidth** is not set, **minSideBarWidth** and **maxSideBarWidth** take precedence over
   * its default value.
   *
   * @param { Dimension } value - Minimum content area width of the sidebar container.<br>Default value: **360vp**<br>
   *     Unit: vp
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minContentWidth(value: Dimension): SideBarContainerAttribute;

  /**
   * Specifies whether sideBar can be presented or dismissed by gesture.
   *
   * @param { boolean } value - Indicates whether the sidebar can be presented or dismissed by gesture.
   *     <br>Default value: **false**.
   *     **true**: Sidebar can be presented or dismissed by gesture.
   *     **false**: Sidebar cannot be presented or dismissed by gesture.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showSideBarWithGesture(value: boolean): SideBarContainerAttribute;
}

/**
 * The **SideBarContainer** component contains a sidebar and content area as its child components. The sidebar is the
 * first child component and can be shown or hidden as needed. The content area is the second child component.
 *
 * > **NOTE**
 *
 * > The APIs of this module are supported since API version 8. Updates will be marked with a superscript to indicate
 * > their
 *
 * ###### Child Components
 *
 * Supported
 *
 * > **NOTE**
 * >
 * > - Allowed child component types: built-in and custom components, excluding rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)).
 * >
 * > - This component must contain two child components.
 * >
 * > - If there are three or more child components, only the first and second child components are displayed. If there
 * > is only one child component, the sidebar is displayed, and the content area is blank.
 * >
 * > - The focus navigation is performed in the content area and then in the sidebar of the **SideBarContainer**
 * > component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const SideBarContainer: SideBarContainerInterface;

/**
 * Defines SideBarContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const SideBarContainerInstance: SideBarContainerAttribute;