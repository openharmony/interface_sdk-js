/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * 进程数据的对象定义。使用接口
 * [appManager.on('applicationState')]{@link @ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}
 * 注册生命周期变化监听后，当应用或组件的生命周期变化时，系统通过[ApplicationStateObserver]{@link ./application/ApplicationStateObserver}的
 * [onProcessCreated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocesscreated)
 * 等方法回调给开发者。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
declare class ProcessData {
  /**
   * 应用包名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 进程ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * 应用的uid。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * 应用的状态，取值及对应的状态为：
   * 
   * 0 - 初始化状态，进程正在初始化，
   * 
   * 1 - 就绪状态，进程已初始化完毕，
   * 
   * 2 - 前台，
   * 
   * 4 - 后台，
   * 
   * 5 - 已终止。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  state: int;

  /**
   * 是否为长时任务，true表示是，false表示不是。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isContinuousTask: boolean;

  /**
   * 是否为常驻进程，true表示是，false表示不是
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isKeepAlive: boolean;
}

export default ProcessData;