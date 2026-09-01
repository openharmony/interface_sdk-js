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
 * 这是concatArray接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ConcatArray<out T> extends ArrayLike<T> {
    /**
     * 返回数组中指定索引处的元素。
     *
     * @param { int } index - 待返回元素的索引。
     *     <br>取值约束：应为整数。
     * @returns { T | undefined } 指定索引处的元素，如果索引越界则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    at(index: int): T | undefined;

    /**
     * 将数组的所有元素连接成一个字符串。
     *
     * @param { string } [separator] - 在结果字符串中用于分隔数组相邻元素的字符串。
     *     省略时，数组元素之间以逗号分隔。
     * @returns { string } 包含数组所有元素连接结果的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    join(separator?: string): string;

    /**
     * 返回数组中一部分的浅拷贝，作为一个新数组。
     *
     * @param { int } [start] - 切片的起始索引。如果为负数，则视为length + start。
     *     <br>取值约束：应为整数。
     * @param { int } [end] - 切片的结束索引（不包含）。如果为负数，则视为length + end。
     *     <br>取值约束：应为整数。
     * @returns { Array<T> } 包含所提取元素的新数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    slice(start?: int, end?: int): Array<T>;
}
