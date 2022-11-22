/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import Want from './@ohos.application.Want';

/**
 * interface of formInfo.
 *
 * @name formInfo
 * @since 8
 * @syscap SystemCapability.Ability.Form
 * @deprecated since 9
 * @useinstead ohos.app.form.formInfo
 */
declare namespace formInfo {
    /**
     * Provides information about a form.
     *
     * @name FormInfo
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    interface FormInfo {
        /**
         * Obtains the bundle name of the application to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        bundleName: string;

        /**
         * Obtains the name of the application module to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        moduleName: string;

        /**
         * Obtains the class name of the ability to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        abilityName: string;

        /**
         * Obtains the name of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        name: string;

        /**
         * Obtains the name of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        description: string;

        /**
         * Obtains the type of this form. Currently, JS forms are supported.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        type: FormType;

        /**
         * Obtains the JS component name of this JS form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        jsComponentName: string;

        /**
         * Obtains the color mode of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        colorMode: ColorMode;

        /**
         * Checks whether this form is a default form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        isDefault: boolean;

        /**
         * Obtains the updateEnabled.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        updateEnabled: boolean;

        /**
         * Obtains whether notify visible of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        formVisibleNotify: boolean;

        /**
         * Obtains the bundle relatedBundleName of the application to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        relatedBundleName: string;

        /**
         * Obtains the scheduledUpdateTime.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        scheduledUpdateTime: string;

        /**
         * Obtains the form config ability about this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        formConfigAbility: string;

        /**
         * Obtains the updateDuration.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        updateDuration: number;

        /**
         * Obtains the default grid style of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        defaultDimension: number;

        /**
         * Obtains the grid styles supported by this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        supportDimensions: Array<number>;

        /**
         * Obtains the custom data defined in this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        customizeData: {[key: string]: [value: string]};
    }

    /**
     * Type of form.
     *
     * @name FormType
     * @since 8
     * @syscap SystemCapability.Ability.Form
    */
    enum FormType {
        /**
         * JS form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        JS = 1,

        /**
         * eTS form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        eTS = 2
    }

    /**
     * Color mode.
     *
     * @name ColorMode
     * @since 8
     * @syscap SystemCapability.Ability.Form
    */
    enum ColorMode {
        /**
         * Automatic mode.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODE_AUTO = -1,

        /**
         * Dark mode.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODE_DARK = 0,

        /**
         * Light mode.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODE_LIGHT = 1
    }

    /**
     * Provides state information about a form.
     *
     * @name FormStateInfo
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    interface FormStateInfo {
        /**
         * Obtains the form state.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        formState: FormState;

        /**
         * Obtains the want form .
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        want: Want;
    }

    /**
     * Provides state about a form.
     *
     * @name FormState
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    enum FormState {
        /**
         * Indicates that the form status is unknown due to an internal error.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        UNKNOWN = -1,

        /**
         * Indicates that the form is in the default state.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        DEFAULT = 0,

        /**
         * Indicates that the form is ready.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        READY = 1,
    }

    /**
     * Parameter of form.
     *
     * @name FormParam
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    enum FormParam {
        /**
         * Indicates the key specifying the ID of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       IDENTITY_KEY: 1L
         *    }
         * }.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         * @systemapi hide for inner use.
         */
        /**
         * Indicates the key specifying the ID of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       IDENTITY_KEY: "119476135"
         *    }
         * }.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        IDENTITY_KEY = "ohos.extra.param.key.form_identity",

        /**
         * Indicates the key specifying the grid style of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       DIMENSION_KEY: FormDimension.Dimension_1_2
         *    }
         * }.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        DIMENSION_KEY = "ohos.extra.param.key.form_dimension",

        /**
         * Indicates the key specifying the name of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       NAME_KEY: "formName"
         *    }
         * }.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        NAME_KEY = "ohos.extra.param.key.form_name",

        /**
         * Indicates the key specifying the name of the module to which the form to be obtained belongs, which is
         * represented as
         * want: {
         *   "parameters": {
         *       MODULE_NAME_KEY: "formEntry"
         *    }
         * }
         * This constant is mandatory.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODULE_NAME_KEY = "ohos.extra.param.key.module_name",

        /**
         * Indicates the key specifying the width of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       WIDTH_KEY: 800
         *    }
         * }
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        WIDTH_KEY = "ohos.extra.param.key.form_width",

        /**
         * Indicates the key specifying the height of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       HEIGHT_KEY: 400
         *    }
         * }
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        HEIGHT_KEY = "ohos.extra.param.key.form_height",

        /**
         * Indicates the key specifying whether a form is temporary, which is represented as
         * want: {
         *   "parameters": {
         *       TEMPORARY_KEY: true
         *    }
         * }
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        TEMPORARY_KEY = "ohos.extra.param.key.form_temporary",

        /**
         * Indicates the key specifying the name of the bundle to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       BUNDLE_NAME_KEY: "bundleName"
         *    }
         * }
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        BUNDLE_NAME_KEY = "ohos.extra.param.key.bundle_name",

        /**
         * Indicates the key specifying the name of the ability to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       ABILITY_NAME_KEY: "abilityName"
         *    }
         * }
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        ABILITY_NAME_KEY = "ohos.extra.param.key.ability_name",

        /**
         * Indicates the key specifying the the device ID, which is represented as
         * want: {
         *   "parameters": {
         *       DEVICE_ID_KEY : "EFC11C0C53628D8CC2F8CB5052477E130D075917034613B9884C55CD22B3DEF2"
         *    }
         * }
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         * @systemapi hide for inner use.
         */
        DEVICE_ID_KEY = "ohos.extra.param.key.device_id"
    }

    /**
     * The optional options used as filters to ask
     * getFormsInfo to return formInfos from only forms that match the options.
     *
     * @name FormInfoFilter
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     */
    interface FormInfoFilter {
        /**
         * optional moduleName that used to ask getFormsInfo to return
         * form infos with the same moduleName.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        moduleName?: string;
    }

    /**
     * Defines the FormDimension enum.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     */
    enum FormDimension {
        /**
         * 1 x 2 form
         * @since 9
         */
        Dimension_1_2 = 1,

        /**
         * 2 x 2 form
         * @since 9
         */
        Dimension_2_2,

        /**
         * 2 x 4 form
         * @since 9
         */
        Dimension_2_4,

        /**
         * 4 x 4 form
         * @since 9
         */
        Dimension_4_4,

        /**
         * 2 x 1 form
         * @since 9
         */
        Dimension_2_1,
    }
    /**
     * The visibility of a form.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     */
    enum VisibilityType {
        /**
         * Indicates the type of the form is visible.
         * Often used as a condition variable in function OnVisibilityChange() to specify actions only on forms that are
         * changing to visible.
         * @since 9
         */
        FORM_VISIBLE = 1,
        /**
         * Indicates the type of the form is invisible.
         * Often used as a condition variable in function OnVisibilityChange() to specify actions only on forms that are
         * changing to invisible.
         * @since 9
         */
        FORM_INVISIBLE,
    }
}
export default formInfo;