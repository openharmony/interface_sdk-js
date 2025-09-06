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
import { ResourceStr, Dimension } from '@ohos.arkui.component';
import { PropRef } from './arkui/stateManagement/decorator';
import { Component } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';
import { Builder } from '@ohos.arkui.component';
/**
 * Control margin status of  ExceptionPrompt.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare enum MarginType {
  /**
   * Default margin of MarginType，Margin 1: references ohos_id_card_margin_start,
   * margin 2: references ohos_id_card_margin_end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   *
   * @since 20
   */
  DEFAULT_MARGIN = 0,
  /**
   * Margins can be adapted of MarginType，Margin 1: references ohos_id_max_padding_start,
   * margin 2: references ohos_id_max_padding_end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  FIT_MARGIN = 1,
}
/**
 * Configuration parameter of ExceptionPrompt.
 *
 * @interface PromptOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface PromptOptions {
  /**
   * Icon of PromptOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  icon?: ResourceStr;
  /**
   * SymbolGlyphModifier of PromptOptions.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  symbolStyle?: SymbolGlyphModifier;
  /**
   * Tip text of PromptOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  tip?: ResourceStr;
  /**
   * Margin Type  of ExceptionPrompt.
   *
   * @type { MarginType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  marginType: MarginType;
  /**
   * Right icon button text of PromptOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  actionText?: ResourceStr;
  /**
   * Distance from the top of PromptOptions.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  marginTop: Dimension
  /**
   * Control concealment of PromptOptions.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  isShown?: boolean
}
/**
 * Declare struct ExceptionPrompt higher-order component.
 * @struct { ExceptionPrompt }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct ExceptionPrompt {
  /**
   * Configuration information of ExceptionPrompt.
   *
   * @type { PromptOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef options: PromptOptions;
  /**
   * Callback when clicking the text on the left.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onTipClick?: () => void;
  /**
   * Callback when click the icon button.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  onActionTextClick?: () => void;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Builder build(): void;
}