/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 * @arkts 1.2
 */

 /**
  * Defines the State interface
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20
  */
@Retention({policy: "SOURCE"})
export declare @interface State {};

/**
 * Defines the Prop interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Prop {};

/**
 * Defines the Link interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Link {};

/**
 * Defines the Observed interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Observed {};

/**
 * Defines the Track interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Track {};

/**
 * Defines the ObjectLink interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface ObjectLink {};

/**
 * Defines the StorageProp interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface StorageProp { value: string };

/**
 * Defines the StorageLink interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface StorageLink { value: string };

/**
 * Defines the LocalStorageProp interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface LocalStorageProp { value: string };

/**
 * Defines the LocalStorageLink interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface LocalStorageLink { value: string };

/**
 * Defines the Provide interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Provide { value: string };

/**
 * Defines the Consume interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Consume { value: string };

/**
 * Defines the Watch interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Watch { value: string };

/**
 * Defines the Require interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@Retention({policy: "SOURCE"})
export declare @interface Require {};

/**
 * UIUtils is a state management tool class for operating the observed data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class UIUtils {
    /**
     * Get raw object from the Object wrapped with an ObservedObject.
     * If input parameter is a regular Object without ObservedObject, return Object itself.
     *
     * @param { T } source input source Object data.
     * @returns { T } raw object from the Object wrapped with an ObservedObject.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static getTarget<T extends object>(source: T): T;

    /**
     * Make non-observed data into V2 observed data.
     * Support non-observed class, JSON.parse Object and Sendable class.
     *
     * @param { T } source input source object data.
     * @returns { T } V2 proxy object from the source object data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static makeObserved<T extends object>(source: T): T;
}