/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file The extra config of edit box.
 * @kit IMEKit
 */

/**
 * Indicates the possible data types of the custom setting value.
 *
 * @typedef { number | string | boolean }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 21
 */
export type CustomValueType = number | string | boolean;

/**
 * The extra config of edit box.
 *
 * @typedef ExtraConfig
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 21
 */
export interface ExtraConfig {
    /**
     * <p>Indicates extra customized settings.</p>
     * <p>The size of all records can not exceed 128KB.</p>
     *
     * @type { Record<string, CustomValueType> }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21
     */
    customSettings: Record<string, CustomValueType>;
}
