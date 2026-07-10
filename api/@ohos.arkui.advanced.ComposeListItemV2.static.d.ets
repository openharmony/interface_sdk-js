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

import { Builder, ComponentV2, ResourceStr } from './@ohos.arkui.component';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import { Param, ObservedV2, Require, Trace } from '@ohos.arkui.stateManagement';

/**
 * Declare enum IconTypeV2
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum IconTypeV2 {
  /**
   * Badge type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BADGE = 1,
  /**
   * Normal icon type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NORMAL_ICON = 2,
  /**
   * System icon type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SYSTEM_ICON = 3,
  /**
   * HeadSculpture type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HEAD_SCULPTURE = 4,
  /**
   * App icon type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  APP_ICON = 5,
  /**
   * Preview type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PREVIEW = 6,
  /**
   * Longitudinal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LONGITUDINAL = 7,
  /**
   * Vertical type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  VERTICAL = 8
}
/**
 * Callback function when operate the icon.
 *
 * @typedef { function } OnActionCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnActionCallback = () => void;
/**
 * Callback function when operate the checkbox/switch/radio.
 *
 * @typedef { function } OnChangeCallback
 * @param { boolean } value - The value  of checkbox/switch/radio.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnChangeCallback = (value: boolean) => void;

/**
 * Declare interface OperateIconV2Options
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface OperateIconV2Options {
  /**
   * The content of text or the address of icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  value?: ResourceStr;

  /**
   * The content of text or the address of symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback function when operate the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action?: OnActionCallback;

  /**
   * The accessibilityText of the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of the icon.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityLevel?: string;
}

/**
 * Declare type OperateIconV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class OperateIconV2 {
  /**
   * The content of text or the address of icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public value: ResourceStr;

  /**
   * The content of text or the address of symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Callback function when operate the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public action?: OnActionCallback;

  /**
   * The accessibilityText of the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of the icon.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * The constructor of OperateIconV2.
   *
   * @param { OperateIconV2Options } [options] - The options of OperateIconV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: OperateIconV2Options);
}

/**
 * Declare interface OperateCheckV2Options
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface OperateCheckV2Options {
  /**
   * Whether is checked on default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isCheck?: boolean;

  /**
   * Callback function when operate the checkbox/switch/radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onChange?: OnChangeCallback;

  /**
   * The accessibilityText of the checkbox/switch/radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of the checkbox/switch/radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of the checkbox/switch/radio.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityLevel?: string;
}

/**
 * Declare type OperateCheckV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class OperateCheckV2 {
  /**
   * Whether is checked on default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public isCheck?: boolean;

  /**
   * Callback function when operate the checkbox/switch/radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public onChange?: OnChangeCallback;

  /**
   * The accessibilityText of the checkbox/switch/radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of the checkbox/switch/radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of the checkbox/switch/radio.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * The constructor of OperateCheckV2.
   *
   * @param { OperateCheckV2Options } [options] - The options of OperateCheckV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: OperateCheckV2Options);
}

/**
 * Declare interface OperateButtonV2Options
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface OperateButtonV2Options {
  /**
   * The text on the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  text?: ResourceStr;

  /**
   * The accessibilityText of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of the button.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityLevel?: string;
}

/**
 * Declare type OperateButtonV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class OperateButtonV2 {
  /**
   * The text on the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public text?: ResourceStr;

  /**
   * The accessibilityText of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of the button.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * The constructor of OperateButtonV2.
   *
   * @param { OperateButtonV2Options } [options] - The options of OperateButtonV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: OperateButtonV2Options);
}

/**
 * Declare interface ContentItemV2Options
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface ContentItemV2Options {
  /**
   * The type of icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  iconStyle?: IconTypeV2;

  /**
   * Sets the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
   * Sets the symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Sets the primaryText.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  primaryText?: ResourceStr;

  /**
   * Sets the secondaryText.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  secondaryText?: ResourceStr;

  /**
   * Sets the description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  description?: ResourceStr;
}

/**
 * Declare ContentItemV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class ContentItemV2 {
  /**
   * The type of icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public iconStyle?: IconTypeV2;

  /**
   * Sets the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public icon?: ResourceStr;

  /**
   * Sets the symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Sets the primaryText.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public primaryText?: ResourceStr;

  /**
   * Sets the secondaryText.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public secondaryText?: ResourceStr;

  /**
   * Sets the description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public description?: ResourceStr;

  /**
   * The constructor of ContentItemV2.
   *
   * @param { ContentItemV2Options } [options] - The options of ContentItemV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: ContentItemV2Options);
}

/**
 * Declare interface OperateItemV2Options
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface OperateItemV2Options {
  /**
   * Sets the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: OperateIconV2;

  /**
   * Sets the subIcon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  subIcon?: OperateIconV2;

  /**
   * Sets the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  button?: OperateButtonV2;

  /**
   * Sets the toggle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  toggle?: OperateCheckV2;

  /**
   * Sets the checkBox.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  checkbox?: OperateCheckV2;

  /**
   * Sets the radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  radio?: OperateCheckV2;

  /**
   * Sets the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  image?: ResourceStr;

  /**
   * Sets the symbolStyle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Sets the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  text?: ResourceStr;

  /**
   * Sets the arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  arrow?: OperateIconV2;
}

/**
 * Declare OperateItemV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class OperateItemV2 {
  /**
   * Sets the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public icon?: OperateIconV2;

  /**
   * Sets the subIcon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public subIcon?: OperateIconV2;

  /**
   * Sets the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public button?: OperateButtonV2;

  /**
   * Sets the toggle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public toggle?: OperateCheckV2;

  /**
   * Sets the checkBox.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public checkbox?: OperateCheckV2;

  /**
   * Sets the radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public radio?: OperateCheckV2;

  /**
   * Sets the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public image?: ResourceStr;

  /**
   * Sets the symbolStyle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Sets the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public text?: ResourceStr;

  /**
   * Sets the arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public arrow?: OperateIconV2;

  /**
   * The constructor of OperateItemV2.
   *
   * @param { OperateItemV2Options } [options] - The options of OperateItemV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: OperateItemV2Options);
}

/**
 * Declare ComposeListItemV2
 *
 * @struct { ComposeListItemV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct ComposeListItemV2 {
  /**
   * The ContentItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  contentItemV2?: ContentItemV2;

  /**
   * The OperateItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  operateItemV2?: OperateItemV2;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}
