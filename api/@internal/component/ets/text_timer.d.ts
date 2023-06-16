/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Provides a way to control the process.
 * @since 8
 */
/**
 * Provides a way to control the process.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class TextTimerController {
  /**
   * constructor.
   * @since 8
   */
  /**
   * constructor.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Provides a start event for timer.
   * @since 8
   */
  /**
   * Provides a start event for timer.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  start();

  /**
   * Provides a pause event for timer.
   * @since 8
   */
  /**
   * Provides a pause event for timer.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  pause();

  /**
   * Provides an event to reset timer.
   * @since 8
   */
  /**
   * Provides an event to reset timer.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  reset();
}

/**
 * Defines the options of TextTimer.
 * @since 8
 */
/**
 * Defines the options of TextTimer.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface TextTimerOptions {
  /**
   * Sets whether to countdown.The default value is false.
   * @since 8
   */
  /**
   * Sets whether to countdown.The default value is false.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  isCountDown?: boolean;

  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   * @since 8
   */
  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  count?: number;

  /**
   * Controller of Texttimer.
   * @since 8
   */
  /**
   * Controller of Texttimer.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  controller?: TextTimerController;
}

/**
 * Provides an interface for texttimer containers.
 * @since 8
 */
/**
 * Provides an interface for texttimer containers.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface TextTimerInterface {
  /**
   * Defines the TextTimer constructor.
   * @since 8
   */
  /**
   * Defines the TextTimer constructor.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (options?: TextTimerOptions): TextTimerAttribute;
}

/**
 * Defines the TextTimer attribute functions.
 * @since 8
 */
/**
 * Defines the TextTimer attribute functions.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class TextTimerAttribute extends CommonMethod<TextTimerAttribute> {
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   * @since 8
   */
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  format(value: string): TextTimerAttribute;

  /**
   * Called when the font color is set.
   * @since 8
   */
  /**
   * Called when the font color is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontColor(value: ResourceColor): TextTimerAttribute;

  /**
   * Called when the font size is set.
   * @since 8
   */
  /**
   * Called when the font size is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontSize(value: Length): TextTimerAttribute;

  /**
   * Called when the fontStyle is set
   * @since 8
   */
  /**
   * Called when the fontStyle is set
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontStyle(value: FontStyle): TextTimerAttribute;

  /**
   * Called when the fontWeight is set
   * @since 8
   */
  /**
   * Called when the fontWeight is set
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): TextTimerAttribute;

  /**
   * Called when the fontFamily is set
   * @since 8
   */
  /**
   * Called when the fontFamily is set
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontFamily(value: ResourceStr): TextTimerAttribute;

  /**
   * Called when the timer value is returned.
   * @since 8
   */
  /**
   * Called when the timer value is returned.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onTimer(event: (utc: number, elapsedTime: number) => void): TextTimerAttribute;
}

/**
 * Defines TextTimer Component.
 * @since 8
 */
/**
 * Defines TextTimer Component.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const TextTimer: TextTimerInterface;

/**
 * Defines TextTimer Component instance.
 * @since 8
 */
/**
 * Defines TextTimer Component instance.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const TextTimerInstance: TextTimerAttribute;
