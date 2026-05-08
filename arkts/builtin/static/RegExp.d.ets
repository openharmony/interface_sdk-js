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
 * Regular expression result descriptor
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class RegExpResultArray extends Array<string | undefined> {
    /**
     * Returns the first match if "0" is given and the first match exists
     *
     * @param { string } index - string index.
     * @returns { string } the first match as string or null
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_get(index: string): string;

    /**
     * Returns result string by index.
     *
     * @param { int } index - Integer index.
     * @returns { string | undefined } resulting string.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    $_get(index: int): string | undefined;
}

/**
 * Regular expression
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class RegExp extends Object {
    /**
     * Returns a string containing the source text of this regular expression
     *
     * @returns { string } return source
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    get source(): string;

    /**
     * Constructs a new RegExp using pattern and flags
     *
     * @param { string } pattern - description of a pattern
     * @param { string } [flags] - description of flags to be used
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(pattern: string, flags?: string);

    /**
     * Constructs a new RegExp by other RegExp. It uses other RegExp's flags if flags aren't provided
     *
     * @param { RegExp } regexp - other regexp
     * @param { string } [flags] - description of flags to be used
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(regexp: RegExp, flags?: string);

    /**
     * Constructs a new RegExp by RegExp or string
     *
     * @param { RegExp | string } regexp - The pattern of the regular expression or another RegExp instance.
     * @param { string } [flags] - description of flags to be used.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(regexp: RegExp | string, flags?: string);
}
