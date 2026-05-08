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
 * @file
 * @kit ArkTS
 */

/**
 * Represents boxed long value and related operations.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
class Long extends Integral implements Comparable<Long> {

    /**
     * Constructs a new Long instance with initial value zero
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor();

    /**
     * Constructs a new Long instance with provided initial value
     *
     * @param { long } value - the initial value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    constructor(value: long);

    /**
     * Returns value of this instance
     *
     * @returns { long } value as long
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toLong(): long;

    /**
     * Returns the primitive as long value
     *
     * @param { long } value - value to cast
     * @returns { long } casted value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toLong(value: long): long;

    /**
     * Converts the primitive to a string
     *
     * @param { long } v - value to be converted
     * @returns { string } result of the conversion
     * @throws { RangeError } - - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static toString(v: long): string;

    /**
     * Converts this object to a string
     *
     * @returns { string } result of the conversion
     * @throws { RangeError } 10200011 - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    toString(): string;

}
