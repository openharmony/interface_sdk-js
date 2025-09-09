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
import { ComponentV2 } from './arkui/component/customComponent';
import { Require, Param, Once, Trace, ObservedV2 } from './arkui/stateManagement/decorator';
import { ResourceStr } from './arkui/component/units';
import { Builder } from './arkui/component/builder';
import { LengthMetrics, ColorMetrics } from './arkui/Graphics';
/**
 * Declare Component ProgressButtonV2
 * @struct { ProgressButtonV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@ComponentV2
export declare struct ProgressButtonV2 {
  /**
   * Sets the ProgressButtonV2 progress.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Require
  @Param
  readonly progress: int;
  /**
   * Sets the ProgressButtonV2 content.
   *
   * @type { ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Require
  @Param
  readonly content: ResourceStr;
  /**
   * Sets the ProgressButtonV2 progressButtonWidth.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Param
  @Once
  progressButtonWidth?: LengthMetrics;
  /**
   * Sets the ProgressButtonV2 onClicked.
   *
   * @type { ClickCallback }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Param
  readonly onClicked: ClickCallback;
  /**
   * Sets the ProgressButtonV2 isEnabled state.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Param
  readonly isEnabled: boolean;
  /**
   * Set Color options of the ProgressButtonV2.
   *
   * @type { ?ProgressButtonV2Color }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Param
  colorOptions?: ProgressButtonV2Color;
  /**
   * Set border rounded corner radius of progress.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Param
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
 * Declare ProgressButtonV2 Color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@ObservedV2
export declare class ProgressButtonV2Color {
  /**
   * Set progress color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Trace
  public progressColor?: ColorMetrics;
  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Trace
  public borderColor?: ColorMetrics;
  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Trace
  public textColor?: ColorMetrics;
  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Trace
  public backgroundColor?: ColorMetrics;
  /**
   * The constructor of ProgressButtonV2
   *
   * @param { ProgressButtonV2ColorOptions } options - the options of the ProgressButtonV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  constructor(options: ProgressButtonV2ColorOptions);
}
/**
 * Defines ClickCallback of the ProgressButtonV2.
 * @typedef { function } ClickCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export type ClickCallback = () => void;
/**
 * Declare Color options interface of the ProgressButtonV2.
 * @typedef ProgressButtonV2ColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare interface ProgressButtonV2ColorOptions {
  /**
   * Set progress color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
   progressColor?: ColorMetrics;
  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
   borderColor?: ColorMetrics;
  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
   textColor?: ColorMetrics;
  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
   backgroundColor?: ColorMetrics;
}
