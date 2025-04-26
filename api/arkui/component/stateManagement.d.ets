/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod, UICommonMethod } from "./common";

/**
 * Defines the ColorMode of device.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum ColorMode {
    /**
     * Light mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    LIGHT = 0,
    /**
     * Dark mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DARK
}
/**
 * Defines the LayoutDirection of device.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum LayoutDirection {
    /**
     * Elements are laid out from left to right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    LTR,
    /**
     * Elements are laid out from right to left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    RTL,
    /**
     * Elements are laid out from auto.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    Auto
}
/**
 * Defines the base class of storage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare class Storage {
    /**
     * Constructor parameters.
     *
     * @param { boolean } needCrossThread
     * @param { string } file
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    constructor(needCrossThread?: boolean, file?: string);
    /**
     * Called when data is obtained.
     *
     * @param { string } key
     * @returns { string | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    get(key: string): string | undefined;
    /**
     * Called when setting.
     *
     * @param { string } key
     * @param { Object | undefined | null } val
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    set(key: string, val: Object | undefined | null): void;
    /**
     * Called when data is cleared.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    clear(): void;
    /**
     * Called when data is deleted.
     *
     * @param { string } key
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    delete(key: string): void;
}
