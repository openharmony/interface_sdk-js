/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import CompletionHandlerForAtomicService from './@ohos.app.ability.CompletionHandlerForAtomicService';
import StartOptions from './@ohos.app.ability.StartOptions';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * **AtomicServiceOptions** is used as an input parameter of
 * [openAtomicService()]{@link ./application/UIAbilityContext:UIAbilityContext.openAtomicService} to carry arguments. It
 * inherits from [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export default class AtomicServiceOptions extends StartOptions {
  /**
   * 系统处理该次启动的方式。例如通过wantConstant.Flags.FLAG_INSTALL_ON_DEMAND表示使用免安装能力。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  flags?: int;

  /**
   * 表示额外参数描述。具体描述参考[Want]{@link @ohos.app.ability.Want:Want}中parameters字段描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  parameters?: Record<string, Object>;

  /**
   * 表示额外参数描述。具体描述参考[Want]{@link @ohos.app.ability.Want:Want}中parameters字段描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  parameters?: Record<string, RecordData>;

  /**
   * 打开原子化服务结果的操作类，用于接收打开原子化服务的结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  completionHandlerForAtomicService?: CompletionHandlerForAtomicService;
}