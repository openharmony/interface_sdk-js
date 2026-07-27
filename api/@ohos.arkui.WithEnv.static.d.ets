'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Define the WithEnv component that allows setting environment properties for child components.
 * @kit ArkUI
 */

import { ComponentBuilder, CustomBuilder, Builder } from './arkui/component/builder';
import { CustomEnvKey, WritableEnvKey, WritableSystemEnvKey } from './arkui/stateManagement/decorator';


/**
 * Define the WithEnv attribute functions.
 *
 * @typedef { WithEnvAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface WithEnvAttribute {
    /**
     * Defining System Environment Variables
     *
     * @param { WritableSystemEnvKey<T> } key - Keys for system environment variables.
     * @param { T } value - Values of system environment variables.
     * @returns { WithEnvAttribute } WithEnvAttribute object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    env<T>(key: WritableSystemEnvKey<T>, value: T): this;
    /**
     * Defining Custom Environment Variables
     *
     * @param { CustomEnvKey<T> } key - Keys for custom environment variables.
     * @param { T } value - Values of custom environment variables.
     * @returns { WithEnvAttribute } WithEnvAttribute object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    customEnv<T>(key: CustomEnvKey<T>,  value: T): this;
    /**
     * Sets WithEnv options.
     *
     * @returns { this } WithEnvAttribute instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
     */
    setWithEnvOptions(): this;
    /**
     * Notify WithEnv has finished setting up its attributes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    applyAttributesFinish(): void;
}

/**
 * Define the WithEnv component that allows setting environment properties for child components.
 *
 * @param { CustomBuilder } [content_] - the content of the component
 * @returns { WithEnvAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function WithEnv(
    content_?: CustomBuilder,
): WithEnvAttribute;