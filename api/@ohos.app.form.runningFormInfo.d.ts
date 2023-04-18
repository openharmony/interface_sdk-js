/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * The class of a running form information.
 *
 * @since 10
 * @syscap SystemCapability.Ability.Form
 * @systemapi hide this for inner system use
 * @permission N/A
 */
export interface RunningFormInfo {
    /**
     * Obtains the id of the this form.
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    readonly formId: string;

    /**
     * Obtains the bundle name of the application to which this form belongs.
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    readonly bundleName: string;

    /**
     * Obtains the name of the application module to which this form belongs.
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    readonly moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    readonly abilityName: string;

    /**
     * Obtains the name of this form.
     * @type { string }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    readonly formName: string;

    /**
     * Obtains the grid style of this form.
     * @type { number }
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    readonly dimension: number;
}