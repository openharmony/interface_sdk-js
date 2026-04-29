/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { ElementName } from './bundleManager/ElementName';

/**
 * 拉端成功时的回调函数。
 *
 * @param { ElementName } elementName - 被拉起应用的ElementName信息。
 * @param { string } message - 成功拉起应用时的信息。该信息采用JSON格式，样式如下：
 *     
 *     {
 *     
 *     ?"errMsg": "Succeeded."
 *     
 *     }
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnRequestSuccessFn = (elementName: ElementName, message: string) => void;

/**
 * 拉端失败时的回调函数。
 *
 * @param { ElementName } elementName - 被拉起应用的ElementName信息。
 * @param { string } message - 拉起应用失败时的信息。该信息采用JSON格式，样式如下：
 *     
 *     {
 *     
 *     ?"errMsg": "xxx"
 *     
 *     }
 *     
 *     其中，"xxx"的取值说明如下：
 *     
 *     Failed to call <api-name>：表示调用接口出错。其中，<api-name>为具体的接口名，比如startAbility。
 *     
 *     User refused redirection：表示用户关闭了应用跳转弹框。
 *     
 *     User closed the implicit startup picker：表示用户关闭了隐式启动时的应用选择弹框。
 *     
 *     User closed the app clone picker：表示用户关闭了分身应用选择弹框。
 *     
 *     Free installation failed：表示免安装失败。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
type OnRequestFailureFn = (elementName: ElementName, message: string) => void;

/**
 * CompletionHandler提供了
 * [onRequestSuccess]{@link CompletionHandler.onRequestSuccess(elementName: ElementName, message: string)}和
 * [onRequestFailure]{@link CompletionHandler.onRequestFailure(elementName: ElementName, message: string)}两个回调函数，分别用来处理拉
 * 起应用成功和失败时的结果。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare class CompletionHandler {
  /**
   * 拉起应用成功时的回调函数。
   *
   * @param { ElementName } elementName - ElementName信息用于标识被拉起应用。通常，ElementName仅包含abilityName和bundleName。moduleName和deviceId信
   *     息是否存在取决于调用方是否传入。shortName和uri为空。
   * @param { string } message - 成功拉起应用时的信息。该信息采用JSON格式，样式如下：
   *     
   *     {
   *     
   *     ?"errMsg": "Succeeded."
   *     
   *     }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onRequestSuccess(elementName: ElementName, message: string): void;

  /**
   * 拉起应用失败时的回调函数。
   *
   * @param { ElementName } elementName - ElementName信息用于标识被拉起应用。
   *     
   *     - 通常，ElementName仅包含abilityName和bundleName。moduleName和deviceId信息是否存在取决于调用方是否传入。shortName和uri为空。
   *     
   *     - 隐式启动失败时，无法获取ElementName信息。
   * @param { string } message - 拉起应用失败时的信息。该信息采用JSON格式，样式如下：
   *     
   *     {
   *     
   *     ?"errMsg": "xxx"
   *     
   *     }
   *     
   *     其中，"xxx"的取值说明如下：
   *     
   *     Failed to call <api-name>：表示调用接口出错。其中，<api-name>为具体的接口名，比如startAbility。
   *     
   *     User refused redirection：表示用户关闭了应用跳转弹框。
   *     
   *     User closed the implicit startup picker：表示用户关闭了隐式启动时的应用选择弹框。
   *     
   *     User closed the app clone picker：表示用户关闭了分身应用选择弹框。
   *     
   *     Free installation failed：表示免安装失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onRequestFailure(elementName: ElementName, message: string): void;

  /**
   * 拉端成功时的回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onRequestSuccess: OnRequestSuccessFn;

  /**
   * 拉端失败时的回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onRequestFailure: OnRequestFailureFn;
}
export default CompletionHandler;