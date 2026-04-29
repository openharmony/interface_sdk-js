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

import StartupListener from './@ohos.app.appstartup.StartupListener';

/**
 * 本模块提供[应用启动框架](docroot://application-models/app-startup.md)配置信息的定义。
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export default interface StartupConfig {
  /**
   * 执行所有启动任务的超时时间（单位：毫秒），默认值为10000毫秒。
   *
   * @default 10000
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  timeoutMs?: int;

  /**
   * 表示启动框架的监听器，该监听器将在所有启动任务完成时调用。
   *
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startupListener?: StartupListener;
}