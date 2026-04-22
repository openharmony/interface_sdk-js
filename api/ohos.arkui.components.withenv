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

export declare enum WritableSystemProperties {
    /**
     * System environmental breakpoint key that is used to obtain the width and height breakpoint value of the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 22
     */
    Layout_Direction = 'system.arkui.layout.direction',

};

export interface WritableEnvProperties {
    [WritableSystemProperties.Layout_Direction]: boolean,
};


/**
 * Define the WithEnv attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class WithEnvAttribute {
  env(key: WritableSystemProperties, value: WritableEnvProperties[WritableSystemProperties]): WithEnvAttribute;
  customEnv<T>(key: string, value: T): WithEnvAttribute; 
  testEnv(key: string, value: string): WithEnvAttribute; //for test
}


/**
 * Define the WithEnv component's type.
 *
 * @typedef { function }
 * @returns { WithEnvAttribute } WithEnvAttribute object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare type WithEnvInterface = () => WithEnvAttribute;
/**
 * Define the WithEnv component that allows setting environment properties for child components.
 *
 * @type { WithEnvInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const WithEnv: WithEnvInterface;
/**
 * Define WithEnv Logic Component Instance.
 *
 * @type { WithEnvAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const WithEnvInstance: WithEnvAttribute;





