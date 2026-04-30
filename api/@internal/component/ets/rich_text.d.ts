/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Provides an interface for RichText component.
 *
 * @interface RichTextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 * @noninterop [since 12]
 */
interface RichTextInterface {
  /**
   * Set value.
   *
   * @param { string | Resource } content [since 20]
   *     { string } content [since 8 - 19]
   * @returns { RichTextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11 - 11]
   * @since 8 dynamic
   * @noninterop [since 12]
   */
  (content: string | Resource): RichTextAttribute;
}

/**
 * Defines the RichText attribute functions.
 *
 * @extends CommonMethod<RichTextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 * @noninterop [since 12]
 */
declare class RichTextAttribute extends CommonMethod<RichTextAttribute> {
  /**
   * Triggered when the RichText loading starts.
   *
   * @param { function } callback
   * @returns { RichTextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11 - 11]
   * @since 8 dynamic
   */
  onStart(callback: () => void): RichTextAttribute;

  /**
   * Triggered when the RichText loading ends.
   *
   * @param { function } callback
   * @returns { RichTextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11 - 11]
   * @since 8 dynamic
   */
  onComplete(callback: () => void): RichTextAttribute;
}

/**
 * Defines RichText Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 */
declare const RichText: RichTextInterface;

/**
 * Defines RichText Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 */
declare const RichTextInstance: RichTextAttribute;
