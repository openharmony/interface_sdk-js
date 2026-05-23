/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * Control margin status of ExceptionPromptV2.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum MarginTypeV2 {
  /**
   * Default margin of MarginTypeV2, Margin 1: references ohos_id_card_margin_start,
   * margin 2: references ohos_id_card_margin_end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT_MARGIN = 0,

  /**
   * Margins can be adapted of MarginTypeV2, wider than the default margin.
   * Margin 1: references ohos_id_max_padding_start,
   * margin 2: references ohos_id_max_padding_end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FIT_MARGIN = 1
}

/**
 * Configuration information interface for PromptOptionsV2.
 * Used to construct PromptOptionsV2 object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PromptOptionsV2Config {
  /**
   * Margin Type of ExceptionPromptV2.
   * Margin from the content area to the edge of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamic
   */
  marginType: MarginTypeV2;

  /**
   * Distance from the top to the content area of ExceptionPromptV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamic
   */
  marginTop: Dimension;

  /**
   * Icon of ExceptionPromptV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * SymbolGlyphModifier of ExceptionPromptV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Tip text of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  tip?: ResourceStr;

  /**
   * Right icon button text of ExceptionPromptV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  actionText?: ResourceStr;

  /**
   * Control concealment of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isShown?: boolean;
}

/**
 * Configuration parameter of ExceptionPromptV2.
 * Use @ObservedV2 and @Trace to support deep observation and dynamic refresh of properties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class PromptOptionsV2 {
  /**
   * Icon of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  icon?: ResourceStr;

  /**
   * SymbolGlyphModifier of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Tip text of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  tip?: ResourceStr;

  /**
   * Margin Type  of ExceptionPromptV2.
   * Margin from the content area to the edge of the container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamic
   */
  @Trace
  marginType: MarginTypeV2;

  /**
   * Right icon button text of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  actionText?: ResourceStr;

  /**
   * Distance from the top to the content area of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamic
   */
  @Trace
  marginTop: Dimension;

  /**
   * Control concealment of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  isShown?: boolean;

  /**
   * Constructor of PromptOptionsV2.
   *
   * @param { PromptOptionsV2Config } [config] - Configuration information of ExceptionPromptV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config?: PromptOptionsV2Config);
}

/**
 * Declare the callback function type to be called when clicking the text on the left.
 * @typedef { function } OnTipClickCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnTipClickCallback = () => void;

/**
 * Declare the callback function type to be called when clicking the icon button.
 * @typedef { function } OnActionTextClickCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionTextClickCallback = () => void;

/**
 * Declare struct ExceptionPromptV2 higher-order component.
 * The exception prompt component is used to show an error message when an error arises.
 * @struct { ExceptionPromptV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ExceptionPromptV2 {

  /**
   * Configuration information of ExceptionPromptV2.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  options: PromptOptionsV2;

  /**
   * Callback when clicking the text on the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  onTipClick?: OnTipClickCallback;

  /**
   * Callback when click the icon button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  onActionTextClick?: OnActionTextClickCallback;
}
