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
 * Restricted worker that runs the .abc file.
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
 * Used to pass construction parameters during **IsolatedComponent** construction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare interface IsolatedOptions {
  /**
   * The .abc file information to load. The .abc file runs in the restricted worker specified by the **worker**
   * parameter. The parameters of the **Want** object must contain the following fields: **resourcePath** (resource
   * path, which must be a .hap file path), **abcPath** (.abc file path verified by
   * [verifyAbc]{@link bundleManager.verifyAbc}, which must start with '/abcs'), and **entryPoint** (.abc entry
   * point, in the format of 'bundleName/page path').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  want: Want;
  /**
   * Restricted worker that runs the .abc file. Note that layout rendering and event delivery between the main thread
   * and the restricted worker thread are asynchronous.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  worker: RestrictedWorker;
}

/**
 * **IsolatedComponent** is designed to support the embedding and display of UIs provided by independent .abc files
 * (Ark bytecode) within the current page, with the displayed content running in a restricted Worker thread.
 *
 * This component is primarily designed for modular development scenarios that require hot updates for .abc files.
 * (The .abc files loaded by **IsolatedComponent** can be dynamically replaced, enabling content updates without
 * reinstalling the app.)
 *
 * Creates an **IsolatedComponent** component to display the .abc file executed in a restricted Worker thread.
 *
 * > **NOTE**
 *
 * > Constructor parameter updates are not supported; only the initial input is effective. Before use, ensure that the
 * > .abc file has passed [verifyAbc]{@link bundleManager.verifyAbc} verification and that the
 * > **ohos.permission.RUN_DYN_CODE** permission has been configured in **module.json5**.
 *
 * @param { IsolatedOptions } options - Constructor parameter to pass. Only valid on first input. Constructor parameter
 *     update is not supported.
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
 * Events are asynchronously passed to the restricted Worker thread after coordinate conversion. Inter-thread event
 * bubbling is not supported, and event conflicts may occur during inter-thread UI interactions.
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
   * Invoked when an error occurs during the running of the .abc file loaded by **IsolatedComponent** (which runs as
   * an Ability extension). You can obtain the error information based on the **code**, **name**, and **message**
   * parameters in the callback and rectify the error accordingly.
   *
   * @param { ErrorCallback } callback - Callback invoked when an error occurs. The error information including
   *     **code**, **name**, and **message** can be obtained through the callback parameters.
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
 * **IsolatedComponent** is designed to support the embedding and display of UIs provided by independent .abc files
 * (Ark bytecode) within the current page, with the displayed content running in a restricted Worker thread.
 *
 * This component is primarily designed for modular development scenarios that require hot updates for .abc files.
 * (The .abc files loaded by **IsolatedComponent** can be dynamically replaced, enabling content updates without
 * reinstalling the app.)
 *
 * ###### Child Components
 *
 * Not supported
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