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
 * 反射操作的核心命名空间，提供在运行时访问类、接口、
 * 方法和属性等元数据的能力。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace reflect {
    /**
     * 判断对象是否为通过字面量初始化的接口。
     *
     * @param { Object } target - 目标对象。
     * @returns { boolean } 布尔值，表示target是否为通过字面量
     *     初始化的接口。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function isLiteralInitializedInterface(target: Object): boolean;

    /**
     * 返回类及其父类的公有实例getter方法。
     *
     * @param { Class } targetClass - 目标类。
     * @returns { Array<InstanceMethod> } 实例getter方法的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function getInstanceGettersRecursive(targetClass: Class): Array<InstanceMethod>;

    /**
     * 返回类及其父类的公有实例字段。
     *
     * @param { Class } targetClass - 目标类。
     * @returns { Array<InstanceField> } 实例字段的数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function getInstanceFieldsRecursive(targetClass: Class): Array<InstanceField>;

    /**
     * 判断函数对象是否由async函数降级生成。
     *
     * @param { Function } target - 函数对象。
     * @returns { boolean } 如果该函数对象由async函数降级生成则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function isFuncObjAsync(target: Function): boolean;

}
