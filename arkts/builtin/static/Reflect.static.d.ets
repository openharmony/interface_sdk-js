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
 * Core namespace for reflection operations, providing access to metadata such as classes, interfaces,
 * methods, and properties at runtime.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace reflect {
    /**
     * Determines whether an object is an interface initialized with a literal.
     *
     * @param { Object } target - an object.
     * @returns { boolean } a boolean indicating whether or not the target is an interface
     *     initialized with a literal.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function isLiteralInitializedInterface(target: Object): boolean;

    /**
     * Returns public instance getters of a class and its parents.
     *
     * @param { Class } targetClass - the target class.
     * @returns { Array<InstanceMethod> } an array of instance getters.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function getInstanceGettersRecursive(targetClass: Class): Array<InstanceMethod>;

    /**
     * Returns public instance fields of a class and its parents.
     *
     * @param { Class } targetClass - the target class.
     * @returns { Array<InstanceField> } an array of instance fields.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function getInstanceFieldsRecursive(targetClass: Class): Array<InstanceField>;

    /**
     * Determines if a functional object was lowered from an async function.
     *
     * @param { Function } target - the functional object.
     * @returns { boolean } true if the functional object was lowered from an async function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export function isFuncObjAsync(target: Function): boolean;

}
