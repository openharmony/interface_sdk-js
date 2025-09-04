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
import { Component } from './arkui/component/customComponent';
import { PropRef } from './arkui/stateManagement/decorator';
import { ResourceColor, ResourceStr, Length } from './arkui/component/units';
import { Builder } from './arkui/component/builder';
import { LengthMetrics } from './arkui/Graphics';
/**
 * Declare Component ProgressButton
 * @struct { ProgressButton }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct ProgressButton {
  /**
   * Sets the content when progress.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef 
  progress: number;
  /**
   * Sets the ProgressButton content.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef 
  content: ResourceStr;
  /**
   * Sets the ProgressButton progressButtonWidth.
   *
   * @type { ?Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  progressButtonWidth?: Length;
  /**
   * Sets the ProgressButton clickCallback.
   *
   * @type { function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  clickCallback: () => void;
  /**
   * Sets the ProgressButton enable state.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef 
  enable: boolean;
  /**
   * Set Color options of the ProgressButton.
   *
   * @type { ?ProgressButtonColorOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef 
  colorOptions?: ProgressButtonColorOptions;
  /**
   * Set border rounded corner radius of progress.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef 
  progressButtonRadius?: LengthMetrics;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Builder 
  build(): void;
}
/**
 * Declare Color options of the ProgressButton.
 * @typedef ProgressButtonColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare interface ProgressButtonColorOptions {
  /**
   * Set progress color of the ProgressButton.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  progressColor?: ResourceColor;
  /**
   * Set border color of the ProgressButton.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  borderColor?: ResourceColor;
  /**
   * Set text color of the ProgressButton.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  textColor?: ResourceColor;
  /**
   * Set background color of the ProgressButton.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  backgroundColor?: ResourceColor;
}