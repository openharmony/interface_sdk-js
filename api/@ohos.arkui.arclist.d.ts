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
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

import { Scroller } from './@internal/component/ets/scroll';

/**
 * Called when the start, end and center positions of the display change.
 *
 * @typedef { function } ArcScrollIndexHandler
 * @param { number } start - the start index of the display area.
 * @param { number } end - the end index of the display area.
 * @param { number } center - the center index of the display area.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ArcScrollIndexHandler = (start: number, end: number, center: number) => void;

/**
 * Defines the arc list options.
 *
 * @interface ArkListOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ArkListOptions {
  /**
   * Describes the index of initial item, the default value is 0.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  initialIndex?: number;

  /**
   * Describes the controller for scrollable container.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scroller?: Scroller;

  /**
   * Describes the header.
   *
   * @type { ?ComponentContent }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  header?: ComponentContent;
}

/**
 * Defines the arc list component.
 *
 * @interface ArcListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface ArcListInterface {
  /**
   * Creates the arc list component.
   *
   * @param { ArkListOptions } options
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (options?: ArkListOptions): ArcListAttribute;
}

/**
 * Defines the arc list item component.
 *
 * @interface ArcListItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface ArcListItemInterface {
  /**
   * Creates the arc list item component.
   *
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (): ArcListItemAttribute;
}

/**
 * Defines the arc list attribute functions.
 * 
 * @extends CommonMethod<ArcListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ArcListAttribute extends CommonMethod<ArcListAttribute> {
  /**
   * Set the digital crown sensitivity.
   *
   * @param { Optional<CrownSensitivity> } sensitivity
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcListAttribute;

  /**
   * Set the space between items.
   *
   * @param { Optional<LengthMetrics> } space - The space between items.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  space(space: Optional<LengthMetrics>): ArcListAttribute;

  /**
   * Set the display mode of the side slider.
   *
   * @param { Optional<BarState> } status
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBar(status: Optional<BarState>): ArcListAttribute;

  /**
   * Color of the scrollbar.
   *
   * @param { Optional<ColorMetrics> } color  - Color of the scrollbar.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBarColor(color: Optional<ColorMetrics>): ArcListAttribute;

  /**
   * Width of the scrollbar.
   *
   * @param { Optional<LengthMetrics> } width  - Width of the scrollbar.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBarWidth(width: Optional<LengthMetrics>): ArcListAttribute;

  /**
   * Set the minimum number of list item caches for long list deferred loading.
   *
   * @param { Optional<number> } count
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cachedCount(count: Optional<number>): ArcListAttribute;

  /**
   * Whether to enable chain linkage dynamic effect.
   *
   * @param { Optional<boolean> } enable
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  chainAnimation(enable: Optional<boolean>): ArcListAttribute;

  /**
   * Set the children main size for arc list.
   *
   * @param { Optional<ChildrenMainSize> } size - children main size for arc list
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  childrenMainSize(size: Optional<ChildrenMainSize>): ArcListAttribute;

  /**
   * Whether to enable scroll by gesture or mouse.
   *
   * @param { Optional<boolean> } enable
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enableScrollInteraction(enable: Optional<boolean>): ArcListAttribute;

  /**
   * Whether to enable fading Edge effect.
   *
   * @param { Optional<boolean> } enable
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fadingEdge(enable: Optional<boolean>): ArcListAttribute;

  /**
   * Friction coefficient.
   *
   * @param { Optional<number> } friction - friction coefficient.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  friction(friction: Optional<number>): ArcListAttribute;

  /**
   * Limit the max speed when fling.
   *
   * @param { Optional<number> } speed - Max fling speed, the minimum value is 0, the maximum value is not limited.
   *                             The unit is vp/s.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  flingSpeedLimit(speed: Optional<number>): ArcListAttribute;

  /**
   * Called when the start, end and center positions of the display change.
   *
   * @param { Optional<ArcScrollIndexHandler> } handler
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollIndex(handler: Optional<ArcScrollIndexHandler>): ArcListAttribute;

  /**
   * Called when the list begins to arrive.
   *
   * @param { Optional<VoidCallback> } handler
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachStart(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Called when the list reaches the end.
   *
   * @param { Optional<VoidCallback> } handler
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachEnd(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Called when the slider start.
   *
   * @param { Optional<VoidCallback> } handler
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStart(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Called when the slider stops.
   *
   * @param { Optional<VoidCallback> } handler
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStop(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Called when the scrollable will scroll.
   *
   * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): ArcListAttribute;

  /**
   * Called when the scrollable did scroll.
   *
   * @param { Optional<OnScrollCallback> } handler - callback of scrollable,
   * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onDidScroll(handler: Optional<OnScrollCallback>): ArcListAttribute;
}

/**
 * Defines the arc list item attribute functions.
 * 
 * @extends CommonMethod<ArcListItemAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ArcListItemAttribute extends CommonMethod<ArcListItemAttribute> {
  /**
   * Whether to enable auto scale when layout.
   *
   * @param { Optional<boolean> } enable
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  autoScale(enable: Optional<boolean>): ArcListItemAttribute;

  /**
   * Sets the action item that appears when the list item slides in the cross axis direction of the list.
   *
   * @param { Optional<SwipeActionOptions> } options - items defines in the SwipeActionOption.
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute;
}

/**
 * Defines ArcList Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListInstance: ArcListAttribute;

/**
 * Defines ArcListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListItemInstance: ArcListItemAttribute;

/**
 * Defines ArcList Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcList: ArcListInterface;

/**
 * Defines ArcListItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListItem: ArcListItemInterface;