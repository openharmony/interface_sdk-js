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
 * Sets the sidebar style of showing
 * @since 8
 */
/**
 * Sets the sidebar style of showing
 * @crossplatform
 * @since 10
 */
declare enum SideBarContainerType {
  /**
   * The sidebar invisible
   * @since 8
   */
  /**
   * The sidebar invisible
   * @crossplatform
   * @since 10
   */
  Embed,

  /**
   * The sidebar visible
   * @since 8
   */
  /**
   * The sidebar visible
   * @crossplatform
   * @since 10
   */
  Overlay,
}

/**
 * Sets the sidebar position of showing
 * @since 9
 */
/**
 * Sets the sidebar position of showing
 * @crossplatform
 * @since 10
 */
declare enum SideBarPosition {
  /**
   * The sidebar is on the Start of the container
   * @since 9
   */
  /**
   * The sidebar is on the Start of the container
   * @crossplatform
   * @since 10
   */
  Start,

  /**
   * The sidebar is on the End of the container
   * @since 9
   */
  /**
   * The sidebar is on the End of the container
   * @crossplatform
   * @since 10
   */
  End,
}

/**
 * Sets the control button style
 * @since 8
 */
/**
 * Sets the control button style
 * @crossplatform
 * @since 10
 */
declare interface ButtonStyle {
  /**
   * Set the left of control button
   * @since 8
   */
  /**
   * Set the left of control button
   * @crossplatform
   * @since 10
   */
  left?: number;

  /**
   * Set the top of control button
   * @since 8
   */
  /**
   * Set the top of control button
   * @crossplatform
   * @since 10
   */
  top?: number;

  /**
   * Set the width of control button
   * @since 8
   */
  /**
   * Set the width of control button
   * @crossplatform
   * @since 10
   */
  width?: number;

  /**
   * Set the height of control button
   * @since 8
   */
  /**
   * Set the height of control button
   * @crossplatform
   * @since 10
   */
  height?: number;

  /**
   * Set the button icon when sidebar status has changed
   * @since 8
   */
  /**
   * Set the button icon when sidebar status has changed
   * @crossplatform
   * @since 10
   */
  icons?: {
    shown: string | PixelMap | Resource;
    hidden: string | PixelMap | Resource;
    switching?: string | PixelMap | Resource;
  };
}

/**
 * The construct function of sidebar
 * @since 8
 */
/**
 * The construct function of sidebar
 * @crossplatform
 * @since 10
 */
interface SideBarContainerInterface {
  /**
   * Called when showing the sidebar of a block entry.
   * @since 8
   */
  /**
   * Called when showing the sidebar of a block entry.
   * @crossplatform
   * @since 10
   */
  (type?: SideBarContainerType): SideBarContainerAttribute;
}

/**
 * Provides an interface for the style of a divider including stroke width, color, start margin
 * and end margin
 * @interface DividerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface DividerStyle {
  /**
   * Define the stroke width of the divider
   * @type { Length }
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeWidth: Length;

  /**
   * Define the color of the divider
   * @type { ResourceColor }
   * @default #08000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color?: ResourceColor;

  /**
   * Define the start margin of the divider
   * @type { Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  startMargin?: Length;

  /**
   * Define the end margin of the divider
   * @type { Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  endMargin?: Length;
}

/**
 * The attribute function of sidebar
 * @since 8
 */
/**
 * The attribute function of sidebar
 * @crossplatform
 * @since 10
 */
declare class SideBarContainerAttribute extends CommonMethod<SideBarContainerAttribute> {
  /**
   * Callback showControlButton function when setting the status of sidebar
   * @since 8
   */
  /**
   * Callback showControlButton function when setting the status of sidebar
   * @crossplatform
   * @since 10
   */
  showSideBar(value: boolean): SideBarContainerAttribute;

  /**
   * Callback controlButton function when setting the style of button
   * @since 8
   */
  /**
   * Callback controlButton function when setting the style of button
   * @crossplatform
   * @since 10
   */
  controlButton(value: ButtonStyle): SideBarContainerAttribute;

  /**
   * Callback showControlButton function when setting the status of button
   * @since 8
   */
  /**
   * Callback showControlButton function when setting the status of button
   * @crossplatform
   * @since 10
   */
  showControlButton(value: boolean): SideBarContainerAttribute;

  /**
   * Trigger callback when sidebar style of showing change finished.
   * @since 8
   */
  /**
   * Trigger callback when sidebar style of showing change finished.
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: boolean) => void): SideBarContainerAttribute;

  /**
   * Sets the length of sidebar.
   * @since 8
   */
  /**
   * Sets the length of sidebar.
   * @crossplatform
   * @since 10
   */
  sideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   * @since 8
   */
  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   * @crossplatform
   * @since 10
   */
  minSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   * @since 8
   */
  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   * @crossplatform
   * @since 10
   */
  maxSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the length of sidebar.
   * @since 9
   */
  /**
   * Sets the length of sidebar.
   * @crossplatform
   * @since 10
   */
  sideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   * @since 9
   */
  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   * @crossplatform
   * @since 10
   */
  minSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   * @since 9
   */
  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   * @crossplatform
   * @since 10
   */
  maxSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
   * default value is true.
   * @since 9
   */
  /**
   * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
   * default value is true.
   * @crossplatform
   * @since 10
   */
  autoHide(value: boolean): SideBarContainerAttribute;

  /**
   * Called when determining the location of the sidebar.
   * default value is Start.
   * @since 9
   */
  /**
   * Called when determining the location of the sidebar.
   * default value is Start.
   * @crossplatform
   * @since 10
   */
  sideBarPosition(value: SideBarPosition): SideBarContainerAttribute;

  /**
   * Set divider style for sideBarContainer
   * @param { DividerStyle | null } value - indicates the style of the divider or whether to show the divider.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  divider(value: DividerStyle | null): SideBarContainerAttribute;
}

/**
 * Defines SideBarContainer Component.
 * @since 8
 */
/**
 * Defines SideBarContainer Component.
 * @crossplatform
 * @since 10
 */
declare const SideBarContainer: SideBarContainerInterface;

/**
 * Defines SideBarContainer Component instance.
 * @since 8
 */
/**
 * Defines SideBarContainer Component instance.
 * @crossplatform
 * @since 10
 */
declare const SideBarContainerInstance: SideBarContainerAttribute;
