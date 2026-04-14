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
 * @file
 * @kit ArkUI
 */

/**
 * Indicates worker for run abc.
 * @typedef { import('../api/@ohos.worker').default.Worker } Worker
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Worker = import('../api/@ohos.worker').default.Worker;

/**
 * Indicates error callback.
 * @typedef { import('../api/@ohos.base').ErrorCallback } ErrorCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * This interface is used to set the options for DynamicComponentAttribute during construction
 * @interface DynamicOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DynamicOptions {
    /**
     * Indicates entryPoint of the DynamicOptions.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    entryPoint: string;
    /**
     * Indicates restricted worker for run abc.
     * @type { Worker } worker - worker which run abc
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    worker: Worker;
    /**
     * Indicates backgroundTransparent of the DynamicComponent.
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    backgroundTransparent?: boolean;
    /**
     * Indicates allow Inter-process UEC of the DynamicComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowCrossProcessNesting?: boolean;
}

/**
 * Provide an interface for the DynamicComponent, which is used to render UI of other ABC
 * @typedef { function } DynamicComponentInterface
 * @param { DynamicOptions } options - Construction configuration of DynamicComponentAttribute
 * @returns { DynamicComponentAttribute } Attribute of DynamicComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type DynamicComponentInterface = (options: DynamicOptions) => DynamicComponentAttribute;

/**
 * Define the attribute functions of DynamicComponent.
 *
 * @extends CommonMethod<DynamicComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class DynamicComponentAttribute extends CommonMethod<DynamicComponentAttribute> {
    /**
     * Called when the dynamic component is error.
     *
     * @param { ErrorCallback } callback - called when some error occurred except disconnected from DynamicAbility.
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
 * Defines DynamicComponent Component.
 * @type { DynamicComponentInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponent: DynamicComponentInterface;

/**
 * Defines DynamicComponent Component instance.
 * @type { DynamicComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponentInstance: DynamicComponentAttribute;
