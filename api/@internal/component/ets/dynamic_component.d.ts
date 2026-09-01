/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
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
 * Defines the worker thread object for running the .abc file.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Worker = import('../api/@ohos.worker').default.Worker;

/**
 * Defines the error callback type, which is used to receive exception information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * Defines the parameters to be passed during **DynamicComponent** construction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DynamicOptions {
  /**
   * Entry of the .abc page to be loaded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  entryPoint: string;
  /**
   * Worker for running the .abc file.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  worker: Worker;
  /**
   * Whether to enable the transparent background for the component.
   * **true**: yes; **false**: no.
   * The default value is **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  backgroundTransparent?: boolean;
  /**
   * Whether to allow cross-process [UIExtensionComponent]{@link ./ui_extension_component} nesting.
   * **true**: yes; **false**: no.
   * The default value is **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  allowCrossProcessNesting?: boolean;
  /**
   * Indicates allow keyboard avoidance inside the DynamicComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  allowOccupied?: boolean;
}

/**
 * **DynamicComponent** is designed to support the embedding and display of UIs provided by independent .abc files
 * within the current page, with the displayed content running in a worker thread.
 *
 * It is typically used in modular development scenarios where .abc pages are dynamically loaded.
 *
 * @returns { DynamicComponentAttribute } Attribute of DynamicComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface DynamicComponentInterface {
  /**
   * Creates a **DynamicComponent** component to display the .abc UI running in the worker thread.
   *
   * @param { DynamicOptions } options - Configuration parameters for constructing a **DynamicComponent**, which are
   *     used to configure the entry of the .abc page to be loaded, worker thread to run, and display options.
   * @returns { DynamicComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  (options: DynamicOptions): DynamicComponentAttribute;
}

/**
 * The [universal attributes]{@link ./common} are supported.
 *
 * The following events are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class DynamicComponentAttribute extends CommonMethod<DynamicComponentAttribute> {
  /**
   * Triggered when an exception occurs during the running of the **DynamicComponent**. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { ErrorCallback } callback - Callback used to receive exception information.
   * @returns { DynamicComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onError(
        callback: ErrorCallback
    ): DynamicComponentAttribute;
}

/**
 * **DynamicComponent** is designed to support the embedding and display of UIs provided by independent .abc files
 * within the current page, with the displayed content running in a worker thread.
 *
 * It is typically used in modular development scenarios where .abc pages are dynamically loaded.
 *
 * ###### Child Components
 *
 * None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponent: DynamicComponentInterface;

/**
 * Defines DynamicComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponentInstance: DynamicComponentAttribute;