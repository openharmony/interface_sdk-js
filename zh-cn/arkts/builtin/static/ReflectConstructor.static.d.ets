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
 * 表示类的构造函数。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class Constructor extends Method {

    /**
     * 比较当前构造函数对象是否与另一个构造函数对象相等。
     *
     * @param { Constructor } other - 待比较的另一个构造函数对象。
     * @returns { boolean } 如果两个构造函数对象相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    public equals(other: Constructor): boolean;

    /**
     * 使用该构造函数创建其所属类的新实例。
     *
     * @param { FixedArray<Any> } [args] - 构造函数的参数列表。
     * @returns { Any } 新创建的类实例。
     * @throws { OutOfMemoryError } 当内存不足无法创建对象时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    public createInstance(args?: FixedArray<Any>): Any;
}
