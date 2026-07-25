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
 * @file
 * @kit ArkTS
 */

/**
 * this is a concatArray interface
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ConcatArray<out T> extends ArrayLike<T> {
    /**
     * Returns the element at the specified index in the array.
     *
     * @param { int } index - The index of the element to return.
     *     <br>The value should be an integer.
     * @returns { T | undefined } The element at the specified index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    at(index: int): T | undefined;

    /**
     * Joins all elements of an array into a string.
     *
     * @param { string } [separator] - A string used to separate one element of the array from the next in the
     *     resulting string. If omitted, the array elements are separated with a comma.
     * @returns { string } A string containing all the elements of the array joined.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    join(separator?: string): string;

    /**
     * Returns a shallow copy of a portion of an array into a new array.
     *
     * @param { int } [start] - The start index for slice. If negative, it is treated as length + start.
     *     <br>The value should be an integer.
     * @param { int } [end] - The end index for slice (exclusive). If negative, it is treated as length + end.
     *     <br>The value should be an integer.
     * @returns { Array<T> } A new array containing the extracted elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    slice(start?: int, end?: int): Array<T>;
}
