/*
* Copyright (C) 2026 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { TextModifier, ImageModifier } from './@ohos.arkui.modifier';

/**
 * @file
 * @kit ArkUI
 */

 /**
 * Defines the popup button
 *
 * @typedef PopupV2Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PopupV2Button {
  /**
   * Set the button display content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text: ResourceStr;

  /**
   * The button text attributes of Popup.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buttonTextModifier?: TextModifier

  /**
   * Set the button callback.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: Callback<void>;

}

 /**
 * Defines the popup init info.
 *
 * @typedef PopupV2InitInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PopupV2InitInfo {
  /**
   * The close button callback of Popup.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClose?: Callback<void>;

  /**
   * The title of Popup.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  title?: ResourceStr;

  /**
   * The title attributes of Popup.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  titleModifier?: TextModifier

  /**
   * The show close of Popup.
   *
   * @type { ?(boolean | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * The buttons of Popup.
   *
   * @type { ?[PopupV2Button?, PopupV2Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buttons?: [PopupV2Button?, PopupV2Button?];

  /**
   * The message of Popup.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  message: ResourceStr;

  /**
   * The message attributes of Popup.
   *
   * @type { TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  messageModifier?: TextModifier

  /**
   * Set the max width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxWidth?: Dimension;

  /**
   * The icon of Popup.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * The icon attributes of Popup.
   *
   * @type { ?ImageModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconModifier?: ImageModifier;

  /**
   * Indicates the attribute of the current popup direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
   direction?: Direction;

}

 /**
 * Build function of PopupV2. This component is implemented based on state management V2
 * Compared with Popup, PopupV2 offers a higher level of observation and management over data objects.
 *
 * @param { PopupV2InitInfo } options - popup option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@Builder
export declare function PopupV2(options: PopupV2InitInfo): void;
