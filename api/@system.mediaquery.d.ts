/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * The **mediaquery** module provides different styles for different media types.
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module are no longer maintained since API version 7. You are advised to use 
 * > [@ohos.mediaquery]{@link @ohos.mediaquery:mediaquery} instead.
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines a media query event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface MediaQueryEvent {
  /**
   * Matching result. The value **true** means that the query condition is met, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  matches: boolean;
}

/**
 * Represents media query list information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface MediaQueryList {
  /**
   * Serialized media query condition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  media?: string;

  /**
   * Matching result. The value **true** means that the query condition is met, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  matches?: boolean;

  /**
   * Callback invoked when the match result changes. **matches** indicates whether the media query condition is met. The
   * value **true** means that the query condition is met, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  onchange?: (matches: boolean) => void;

  /**
   * Adds a listener for this **MediaQueryList** object. The listener must be added before **onShow** is called, that 
   * is, it must be added in the **onInit** or **onReady** API.
   *
   * @param { function } callback - Callback invoked when the query condition changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  addListener(callback: (event: MediaQueryEvent) => void): void;

  /**
   * Removes the listener for this **MediaQueryList** object.
   *
   * @param { function } callback - Callback invoked when the query condition changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  removeListener(callback: (event: MediaQueryEvent) => void): void;
}

/**
 * Defines the MediaQuery API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export default class MediaQuery {
  /**
   * Creates a **MediaQueryList** object based on the query condition.
   *
   * @param { string } condition - Query condition.
   * @returns { MediaQueryList } Created **MediaQueryList** object. For details, see the following description.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  static matchMedia(condition: string): MediaQueryList;
}
