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
 * @file 多开模式
 * @kit AbilityKit
 */
/**
 * # 使用说明
 * 
 * 通过appManager的[getRunningMultiAppInfo]{@link ./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo}来获取
 * MultiAppMode属性。
 */
/**
 * 定义应用是否支持多开模式。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export enum MultiAppMode {
  /**
   * 应用不支持多开模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  NOT_SUPPORTED = 0,

  /**
   * 应用支持多实例模式。当应用设置为此模式时，用户可以在同一设备上同时打开多个应用实例，各实例独立运行，拥有各自的运行环境和资源。
   *
   * **说明：** 只支持PC/2in1设备。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  MULTI_INSTANCE = 1,

  /**
   * 应用支持分身模式。分身模式允许为应用创建独立的副本实例，每个实例拥有独立的数据空间，适用于需要隔离用户数据的场景。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  APP_CLONE = 2
}