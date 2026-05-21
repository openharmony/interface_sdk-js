'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 */

import { Callback, ErrorCallback, BusinessError } from '../../@ohos.base';
import { CommonMethod, AttributeModifier } from "./common";
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
 * This interface is used to set the options for DynamicComponentAttribute during construction
 *
 * @interface DynamicOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DynamicOptions {
    /**
     * Indicates entryPoint of the DynamicOptions
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    entryPoint: string;
    /**
     * Indicates restricted worker for run abc.
     *
     * @type { EAWorker | undefined } worker - worker which run abc
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    worker: EAWorker | undefined;
    /**
     * Indicates backgroundTransparent of the DynamicComponent.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundTransparent?: boolean;
    /**
     * Indicates allow Inter-process UEC of the DynamicComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    allowCrossProcessNesting?: boolean;
    /**
     * Indicates allow keyboard avoidance inside the DynamicComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    allowOccupied?: boolean;
}

/**
 * Define the attribute functions of DynamicComponent.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DynamicComponentAttribute extends CommonMethod {
    /**
     * Called when the dynamic component is error.
     *
     * @param { ErrorCallback<BusinessError> | undefined } callback - called when some error occurred<br/>
     *     except disconnected from DynamicAbility.
     * @returns { DynamicComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onError(callback: ErrorCallback<BusinessError> | undefined): this;
}

/**
 * Defines DynamicComponent Component.
 *
 * @param { DynamicOptions } options - The options
 * @returns { DynamicComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function DynamicComponent(
    options: DynamicOptions
): DynamicComponentAttribute;
