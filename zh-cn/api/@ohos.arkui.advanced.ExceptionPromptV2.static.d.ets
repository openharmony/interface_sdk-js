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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MarginTypeV2 {
  /**
   * Default margin of MarginTypeV2, Margin 1: references ohos_id_card_margin_start,
   * margin 2: references ohos_id_card_margin_end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT_MARGIN = 0,

  /**
   * Margins can be adapted of MarginTypeV2, wider than the default margin.
   * Margin 1: references ohos_id_max_padding_start,
   * margin 2: references ohos_id_max_padding_end.
   *
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
   * Top margin of the ExceptionPromptV2.
   * Distance from the top to the content area of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  marginTop: Dimension;

  /**
   * Icon style of the ExceptionPromptV2.
   * If this parameter is not set or is set to undefined, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
   * Symbol icon style of the ExceptionPromptV2, which has higher priority than icon.
   * If this parameter is not set or is set to undefined, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Text content of the ExceptionPromptV2.
   * By default, the following text resources are provided:
   * 
   * 1. ohos_network_not_connected: displayed when no Internet connection.
   * 2. ohos_network_connected_unstable: displayed when the Internet connection is unstable.
   * 3. ohos_unstable_connect_server: displayed when the server fails to be connected.
   * 4. ohos_custom_network_tips_left: displayed when an Internet connection is available
   * but the location fails to be obtained.
   * If this parameter is not set or is set to undefined, the text content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  tip?: ResourceStr;

  /**
   * Text of the icon on the right of the ExceptionPromptV2.
   * If this parameter is not set or is set to undefined, the text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  actionText?: ResourceStr;

  /**
   * Whether the ExceptionPromptV2 is displayed.
   * true: The exception prompt is displayed.
   * false: The exception prompt is hidden.
   * Default value: false.
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
   * Icon style of the ExceptionPromptV2.
   * If this parameter is not set or is set to undefined, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public icon?: ResourceStr;

  /**
   * Symbol icon style of the ExceptionPromptV2, which has higher priority than icon.
   * If this parameter is not set or is set to undefined, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Text content of the ExceptionPromptV2.
   * By default, the following text resources are provided:
   * 
   * 1. ohos_network_not_connected: displayed when no Internet connection.
   * 2. ohos_network_connected_unstable: displayed when the Internet connection is unstable.
   * 3. ohos_unstable_connect_server: displayed when the server fails to be connected.
   * 4. ohos_custom_network_tips_left: displayed when an Internet connection is available
   * but the location fails to be obtained.
   * If this parameter is not set or is set to undefined, the text content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public tip?: ResourceStr;

  /**
   * Margin Type  of ExceptionPromptV2.
   * Margin from the content area to the edge of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public marginType: MarginTypeV2;

  /**
   * Text of the icon on the right of the ExceptionPromptV2.
   * If this parameter is not set or is set to undefined, the text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public actionText?: ResourceStr;

  /**
   * Top margin of the ExceptionPromptV2.
   * Distance from the top to the content area of ExceptionPromptV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public marginTop: Dimension;

  /**
   * Whether the ExceptionPromptV2 is displayed.
   * true: The exception prompt is displayed.
   * false: The exception prompt is hidden.
   * Default value: false.
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnTipClickCallback = () => void;

/**
 * Declare the callback function type to be called when clicking the icon button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnActionTextClickCallback = () => void;

/**
 * Declare struct ExceptionPromptV2 higher-order component.
 * The exception prompt component is used to show an error message when an error arises.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct ExceptionPromptV2 {

  /**
   * ExceptionPromptV2 configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  options: PromptOptionsV2;

  /**
   * Callback invoked when the prompt text on the left is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  onTipClick?: OnTipClickCallback;

  /**
   * Callback invoked when the icon on the right is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  onActionTextClick?: OnActionTextClickCallback;

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
