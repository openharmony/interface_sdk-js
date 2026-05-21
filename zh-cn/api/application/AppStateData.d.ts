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
 * 定义应用状态信息，使用接口
 * [on]{@link @ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}注
 * 册应用状态变化监听后，当应用、进程或组件的状态变化时，系统通过[ApplicationStateObserver]{@link ./application/ApplicationStateObserver}的
 * [onForegroundApplicationChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronforegroundapplicationchanged)
 * 等方法回调给开发者。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
declare class AppStateData {
  /**
   * Bundle名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 应用程序的uid。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * 应用状态。
   * 
   * 0：初始化状态，应用正在初始化
   * 
   * 1：就绪状态，应用已初始化完毕
   * 
   * 2：前台状态，应用位于前台
   * 
   * 3：获焦状态。（预留状态，当前暂不支持）
   * 
   * 4：后台状态，应用位于后台
   * 
   * 5：退出状态，应用已退出
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  state: int;

  /**
   * 判断应用是否处于分屏模式。
   * 
   * true:应用处于分屏模式。
   * 
   * false:应用不处于分屏模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isSplitScreenMode: boolean;

  /**
   * 判断应用是否处于悬浮窗模式。
   * 
   * true:应用处于悬浮窗模式。
   * 
   * false:应用不处于悬浮窗模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isFloatingWindowMode: boolean;
}

export default AppStateData;