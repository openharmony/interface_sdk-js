/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 音效播放器
 * @file
 音效播放器
 * @kit AudioKit
 */

import type systemSoundManager from '../@ohos.multimedia.systemSoundManager';

/**
 * 音效播放器提供了加载、卸载和播放系统声音的功能。
 * 
 * SystemSoundPlayer需要和
 * [@ohos.multimedia.systemSoundManager]{@link @ohos.multimedia.systemSoundManager:systemSoundManager}配合使用，才能完成管理系统音效的功
 * 能。
 *
 * @typedef SystemSoundPlayer
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export interface SystemSoundPlayer {
  /**
   * 加载系统音效。使用Promise异步回调。
   *
   * @param { systemSoundManager.SystemSoundType } soundType - 系统音效类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 5400103 - I/O error.
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  load(soundType: systemSoundManager.SystemSoundType): Promise<void>;

  /**
   * 播放系统音效。使用Promise异步回调。
   *
   * @param { systemSoundManager.SystemSoundType } soundType - 系统音效类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 5400103 - I/O error.
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  play(soundType: systemSoundManager.SystemSoundType): Promise<void>;

  /**
   * 卸载之前已加载的系统音效。使用Promise异步回调。
   *
   * @param { systemSoundManager.SystemSoundType } soundType - 系统音效类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  unload(soundType: systemSoundManager.SystemSoundType): Promise<void>;

  /**
   * 释放系统音效播放器。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  release(): Promise<void>;
}