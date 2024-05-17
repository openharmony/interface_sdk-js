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
 * @file
 * @kit ArkUI
 */

/**
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare enum TextDataDetectorType {
  /**
   * Detector type phone number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */  
  /**
   * Detector type phone number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */   
  PHONE_NUMBER = 0,

  /**
   * Detector type URL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */ 
  /**
   * Detector type URL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  URL = 1,

  /**
   * Detector type email.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */ 
  /**
   * Detector type email.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */ 
  EMAIL = 2,

  /**
   * Detector type address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Detector type address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  ADDRESS = 3,
}
  
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface TextDataDetectorConfig {
  /**
   * Text data detector types.
   *
   * @type { TextDataDetectorType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Text data detector types.
   *
   * @type { TextDataDetectorType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  types: TextDataDetectorType[]

  /**
   * Text data detect result callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Text data detect result callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onDetectResultUpdate?: (result: string) => void
}

/**
 * Defines range of text type component.
 *
 * @interface TextRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface TextRange {
  /**
   * Start offset.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  start?: number;

  /**
   * End offset.
   *
   * @type { ?number }
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  end?: number;
}

/**
 * Defines the inserted text value info.
 *
 * @interface InsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface InsertValue {
  /**
   * The location info where the value will be inserted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  insertOffset: number;

  /**
   * The inserted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  insertValue: string;
}

/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum TextDeleteDirection {
  /**
   * Delete backward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  BACKWARD = 0,

  /**
   * Delete forward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  FORWARD = 1,
}

/**
 * Provides an interface for deleting value from text.
 *
 * @interface DeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface DeleteValue {
  /**
   * The location info where the value will be deleted.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  deleteOffset: number;

  /**
   * The deleted direction.
   *
   * @type { TextDeleteDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  direction: TextDeleteDirection;

  /**
   * The deleted value.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  deleteValue: string;
}

/**
 * Callback after content changed.
 * 
 * @typedef { function } OnDidChangeCallback
 * @param { TextRange } rangeBefore - Range of content that had been replaced.
 * @param { TextRange } rangeAfter - Range of content that newly added.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;
