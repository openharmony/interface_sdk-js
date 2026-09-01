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
 * 表示具有length属性且可通过索引访问的对象。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ArrayLike<out T> extends Iterable<T> {
    /**
     * 获取指定索引处的元素。
     *
     * @param { int } index - 待获取元素的索引，从0开始计数。
     *     <br>取值约束：应为整数。
     * @returns { T } 指定索引处的元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_get(index: int): T;

    /**
     * 获取该ArrayLike的长度。
     *
     * @returns { int } 该ArrayLike的长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get length(): int;

    /**
     * 返回该ArrayLike对象中元素的迭代器。
     *
     * @returns { IterableIterator<T> } 迭代器实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): IterableIterator<T>;
}
