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

/**
 * Defines the arc list item component.
 *
 * @interface ArcListItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ArcListItemInterface {
  /**
   * Creates the arc list item component.
   *
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (): ArcListItemAttribute;
}

/**
 * Defines the arc list item attribute functions.
 * 
 * @extends CommonMethod<ArcListItemAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
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
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
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
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute;
}

/**
 * Defines ArcListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListItemInstance: ArcListItemAttribute;

/**
 * Defines ArcListItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListItem: ArcListItemInterface;
