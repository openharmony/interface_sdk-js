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
 * @file 定义isolated组件
 * @kit ArkUI
 */

/**
 * 表示用于运行abc的受限worker。
 *
 * @typedef { import('../api/@ohos.worker').default.RestrictedWorker } RestrictedWorker
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type RestrictedWorker = import('../api/@ohos.worker').default.RestrictedWorker;

/**
 * 表示错误回调。
 *
 * @typedef { import('../api/@ohos.base').ErrorCallback } ErrorCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * 表示Want。
 *
 * @typedef { import('../api/@ohos.app.ability.Want').default } Want
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type Want = import('../api/@ohos.app.ability.Want').default;

/**
 * 该接口用于在构造时设置IsolatedComponentAttribute的选项。
 *
 * @interface IsolatedOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare interface IsolatedOptions {
  /**
   * 表示IsolatedOptions的Want。
   * @type { Want }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  want: Want;
  /**
   * 表示用于运行abc的受限worker。
   * @type { RestrictedWorker } worker - 运行abc的worker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  worker: RestrictedWorker;
}

/**
 * 提供IsolatedComponent的接口，用于渲染其他ABC的UI。
 *
 * @typedef { function } IsolatedComponentInterface
 * @param { IsolatedOptions } options - IsolatedComponentAttribute的构造配置
 * @returns { IsolatedComponentAttribute } IsolatedComponent的属性
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute;

/**
 * 定义IsolatedComponent的属性方法。
 *
 * @extends CommonMethod<IsolatedComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare class IsolatedComponentAttribute extends CommonMethod<IsolatedComponentAttribute> {
  /**
   * @param { ErrorCallback } callback
   * - 当发生除与IsolatedAbility断开连接之外的错误时回调。
   * @returns { IsolatedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  onError(
    callback: ErrorCallback
  ): IsolatedComponentAttribute;
}

/**
 * 定义IsolatedComponent组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare const IsolatedComponent: IsolatedComponentInterface;

/**
 * 定义IsolatedComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare const IsolatedComponentInstance: IsolatedComponentAttribute;
