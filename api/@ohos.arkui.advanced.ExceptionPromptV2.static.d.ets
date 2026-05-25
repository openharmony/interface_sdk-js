'use static'
/*
 * Copyright (C) 2026 Huawei Device Co., Ltd.
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
import { ComponentV2 } from './arkui/component/customComponent';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { ResourceStr, Builder,
   Dimension, Length, BorderRadiuses, Direction } from '@ohos.arkui.component';
import { Param, ObservedV2, Trace, Event } from '@ohos.arkui.stateManagement';


/**
 * Control margin status of ExceptionPromptV2.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MarginTypeV2 {
  /**
   * Default margin of MarginTypeV2, Margin 1: references ohos_id_card_margin_start,
   * margin 2: references ohos_id_card_margin_end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT_MARGIN = 0,

  /**
   * Margins can be adapted of MarginTypeV2, wider than the default margin.
   * Margin 1: references ohos_id_max_padding_start,
   * margin 2: references ohos_id_max_padding_end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FIT_MARGIN = 1
}

/**
 * Configuration information interface for PromptOptionsV2.
 * Used to construct PromptOptionsV2 object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface PromptOptionsV2Config {
  /**
   * Margin Type of ExceptionPromptV2.
   * Margin from the content area to the edge of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  marginType: MarginTypeV2;

  /**
   * Distance from the top to the content area of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  marginTop: Dimension;

  /**
   * Icon of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
   * SymbolGlyphModifier of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Tip text of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  tip?: ResourceStr;

  /**
   * Right icon button text of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  actionText?: ResourceStr;

  /**
   * Control concealment of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isShown?: boolean;
}

/**
 * Configuration parameter of ExceptionPromptV2.
 * Use @ObservedV2 and @Trace to support deep observation and dynamic refresh of properties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class PromptOptionsV2 {
  /**
   * Icon of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public icon?: ResourceStr;

  /**
   * SymbolGlyphModifier of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Tip text of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public tip?: ResourceStr;

  /**
   * Margin Type  of ExceptionPromptV2.
   * Margin from the content area to the edge of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public marginType: MarginTypeV2;

  /**
   * Right icon button text of ExceptionPromptV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public actionText?: ResourceStr;

  /**
   * Distance from the top to the content area of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public marginTop: Dimension;

  /**
   * Control concealment of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public isShown?: boolean;

  /**
   * Constructor of PromptOptionsV2.
   *
   * @param { PromptOptionsV2Config } [config] - Configuration information of ExceptionPromptV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(config?: PromptOptionsV2Config);
}

/**
 * Declare the callback function type to be called when clicking the text on the left.
 * @typedef { function } OnTipClickCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnTipClickCallback = () => void;

/**
 * Declare the callback function type to be called when clicking the icon button.
 * @typedef { function } OnActionTextClickCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnActionTextClickCallback = () => void;

/**
 * Declare struct ExceptionPromptV2 higher-order component.
 * The exception prompt component is used to show an error message when an error arises.
 * @struct { ExceptionPromptV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct ExceptionPromptV2 {

  /**
   * Configuration information of ExceptionPromptV2.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  options: PromptOptionsV2;

  /**
   * Callback when clicking the text on the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  onTipClick?: OnTipClickCallback;

  /**
   * Callback when click the icon button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  onActionTextClick?: OnActionTextClickCallback;

  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}
