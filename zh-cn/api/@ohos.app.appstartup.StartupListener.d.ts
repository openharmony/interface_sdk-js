/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import { BusinessError } from './@ohos.base';

/**
 * 所有启动任务完成时的回调函数。
 *
 * @param { BusinessError<void> } error - 错误信息。
 * @syscap SystemCapability.Ability.AppStartup
 * @since 23 staticonly
 */
type OnCompletedFn = (error: BusinessError<void>) => void;

/**
 * 本模块提供[应用启动框架](docroot://application-models/app-startup.md)任务监听器的定义。
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare class StartupListener {
  /**
   * 在所有启动任务完成时调用。
   *
   * @param { BusinessError<void> } error - 错误信息。
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  onCompleted?(error: BusinessError<void>): void;

  /**
   * 所有启动任务完成时的回调函数。
   *
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  onCompleted?: OnCompletedFn;
}

export default StartupListener;