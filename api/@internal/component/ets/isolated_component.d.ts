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
 * @file System API
 * @kit ArkUI
 */

/**
 * Indicates restricted worker for run abc.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type RestrictedWorker = import('../api/@ohos.worker').default.RestrictedWorker;

/**
 * Indicates error callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * Indicates want.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type Want = import('../api/@ohos.app.ability.Want').default;

/**
 * Describes the optional construction parameters during **IsolatedComponent** construction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare interface IsolatedOptions {
  /**
   * .abc file information to load.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  want: Want;
  /**
   * Restricted Worker thread where the .abc file is running.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  worker: RestrictedWorker;
}

/**
 * Provide an interface for the IsolatedComponent, which is used to render UI of other ABC
 *
 * @param { IsolatedOptions } options - Construction configuration of IsolatedComponentAttribute
 * @returns { IsolatedComponentAttribute } Attribute of IsolatedComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute;

/**
 * Only the [width]{@link CommonMethod#width(value: Length)}, [height]{@link CommonMethod#height(value: Length)}, and
 * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)} universal attributes are supported.
 *
 * The [universal events]{@link ./common} are not supported.
 *
 * Events are asynchronously passed to the restricted Worker thread after coordinate conversion.
 *
 * The following events are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare class IsolatedComponentAttribute extends CommonMethod<IsolatedComponentAttribute> {
  /**
   * Invoked when an error occurs during the running of the **IsolatedComponent**. You can obtain the error information
   * based on the **code**, **name**, and **message** parameters in the callback and rectify the exception accordingly.
   *
   * @param { ErrorCallback } callback - Error information.
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
 * Defines IsolatedComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare const IsolatedComponent: IsolatedComponentInterface;

/**
 * Defines IsolatedComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare const IsolatedComponentInstance: IsolatedComponentAttribute;