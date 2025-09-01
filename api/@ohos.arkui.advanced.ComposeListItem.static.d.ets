'use static'
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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */
import { Component } from '@ohos.arkui.component';
import { ResourceStr } from '@ohos.arkui.component';
import { PropRef } from './arkui/stateManagement/decorator';
import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';
import { Builder } from '@ohos.arkui.component';
/**
 * Declare enum IconType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare enum IconType {
  /**
   * Badge type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  BADGE = 1,
  /**
   * Normal icon type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  NORMAL_ICON = 2,
  /**
   * System icon type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  SYSTEM_ICON = 3,
  /**
   * HeadSculpture type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  HEAD_SCULPTURE = 4,
  /**
   * App icon type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  APP_ICON = 5,
  /**
   * Preview type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  PREVIEW = 6,
  /**
   * Longitudinal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  LONGITUDINAL = 7,
  /**
   * Vertical type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  VERTICAL = 8
}
/**
 * Declare type OperateIcon
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class OperateIcon {
  /**
   * The content of text or the address of icon.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  value: ResourceStr;
  /**
   * The content of text or the address of symbol.
   *
   * @type { ?SymbolGlyphModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback function when operate the icon.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  action?: () => void;
  /**
   * The accessibilityText of the icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of the icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of the icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityLevel?: string;
}
/**
 * Declare type OperateCheck
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class OperateCheck {
  /**
   * Whether is checked on default.
   *
   * @type { ?boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  isCheck?: boolean;
  /**
   * Callback function when operate the checkbox/switch/radio.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onChange?: (value: boolean) => void;
  /**
   * The accessibilityText of the checkbox/switch/radio.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of the checkbox/switch/radio.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of the checkbox/switch/radio.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityLevel?: string;
}
/**
 * Declare type OperateButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class OperateButton {
  /**
   * The text on the button.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  text?: ResourceStr;
  /**
   * The accessibilityText of the button.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of the button.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of the button.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityLevel?: string;
}
/**
 * Declare ContentItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class ContentItem {
  /**
   * The type of icon.
   *
   * @type { ?IconType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  iconStyle?: IconType;
  /**
   * Sets the icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  icon?: ResourceStr;
  /**
   * Sets the symbol.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  symbolStyle?: SymbolGlyphModifier;
  /**
   * Sets the primaryText.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  primaryText?: ResourceStr;
  /**
   * Sets the secondaryText.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  secondaryText?: ResourceStr;
  /**
   * Sets the description.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  description?: ResourceStr;
}
/**
 * Declare OperateItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class OperateItem {
  /**
   * Sets the icon.
   *
   * @type { ?OperateIcon }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  icon?: OperateIcon;
  /**
   * Sets the subIcon.
   *
   * @type { ?OperateIcon }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  subIcon?: OperateIcon;
  /**
   * Sets the button.
   *
   * @type { ?OperateButton }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  button?: OperateButton;
  /**
   * Sets the toggle.
   *
   * @type { ?OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  toggle?: OperateCheck;
  /**
   * Sets the checkBox.
   *
   * @type { ?OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  checkbox?: OperateCheck;
  /**
   * Sets the radio.
   *
   * @type { ?OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  radio?: OperateCheck;
  /**
   * Sets the image.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  image?: ResourceStr;
  /**
   * Sets the symbolStyle.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  symbolStyle?: SymbolGlyphModifier;
  /**
   * Sets the text.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  text?: ResourceStr;
  /**
   * Sets the arrow.
   *
   * @type { ?OperateIcon }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  arrow?: OperateIcon;
}
/**
 * Declare ComposeListItem
 *
 * @struct { ComposeListItem }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct ComposeListItem {
  /**
   * The ContentItem.
   *
   * @type { ?ContentItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef contentItem?: ContentItem;
  /**
   * The OperateItem.
   *
   * @type { ?OperateItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef operateItem?: OperateItem;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Builder build(): void;
}