'use static'
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

import { ResourceStr, Builder, ResourceStr, Resource,
  VoidCallback, Dimension, Length, BorderRadiuses, Direction } from '@ohos.arkui.component';
import { ImageModifier, TextModifier } from './@ohos.arkui.modifier';

/**
 * Defines the popup button
 *
 * @typedef PopupV2Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface PopupV2Button {
  /**
   * Set the button display content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  text: ResourceStr;

  /**
   * The button text attributes of Popup.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  buttonTextModifier?: TextModifier

  /**
   * Set the button callback.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action?: VoidCallback;

}

 /**
 * Defines the popup init info.
 *
 * @typedef PopupV2InitInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface PopupV2InitInfo {
  /**
   * The close button callback of Popup.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onClose?: VoidCallback;

  /**
   * The title of Popup.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  title?: ResourceStr;

  /**
   * The title attributes of Popup.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  titleModifier?: TextModifier

  /**
   * The show close of Popup.
   *
   * @type { ?(boolean | Resource) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showClose?: boolean | Resource;

  /**
   * The buttons of Popup.
   *
   * @type { ?([PopupV2Button | undefined, PopupV2Button | undefined]) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  buttons?: [PopupV2Button | undefined, PopupV2Button | undefined];

  /**
   * The message of Popup.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  message: ResourceStr;

  /**
   * The message attributes of Popup.
   *
   * @type { TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  messageModifier?: TextModifier

  /**
   * Set the max width of the popup.
   *
   * @type { ?Dimension }
   * @default 400.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maxWidth?: Dimension;

  /**
   * The icon of Popup.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
   * The icon attributes of Popup.
   *
   * @type { ?ImageModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  iconModifier?: ImageModifier;

  /**
   * Indicates the attribute of the current popup direction.
   *
   * @type { ?Direction }
   * @default Direction.Auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
   direction?: Direction;

}

 /**
 * Build function of PopupV2. This component is implemented based on state management V2
 * Compared with Popup, PopupV2 offers a higher level of observation and management over data objects.
 *
 * @param { PopupV2InitInfo } options - popup option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Builder
export declare function PopupV2(options: PopupV2InitInfo): void;
