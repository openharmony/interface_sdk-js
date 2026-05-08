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
 * JS ArrayBuffer API-compatible class.
 * Used to represent a generic, fixed-length raw binary data buffer.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class ArrayBuffer {

    /**
     * Creates an ArrayBuffer with size equal to the length parameter.
     *
     * @param { int } length - The size of the ArrayBuffer in bytes.
     * @param { int } [maxByteLength] - Optional maximum size the ArrayBuffer can be resized to.
     * @throws { RangeError } Throws - if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(length: int, maxByteLength?: int);
}
