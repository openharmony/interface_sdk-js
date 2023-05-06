/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import Want from './@ohos.app.ability.Want';

/**
 * interface of formInfo.
 *
 * @namespace formInfo
 * @syscap SystemCapability.Ability.Form
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.form.formInfo
 */
declare namespace formInfo {
  /**
   * Provides information about a form.
   *
   * @interface FormInfo
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   */
  interface FormInfo {
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    bundleName: string;

    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    abilityName: string;

    /**
     * Obtains the name of this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    name: string;

    /**
     * Obtains the name of this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    description: string;

    /**
     * Obtains the type of this form. Currently, JS forms are supported.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    type: FormType;

    /**
     * Obtains the JS component name of this JS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    jsComponentName: string;

    /**
     * Obtains the color mode of this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    colorMode: ColorMode;

    /**
     * Checks whether this form is a default form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    isDefault: boolean;

    /**
     * Obtains the updateEnabled.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    updateEnabled: boolean;

    /**
     * Obtains whether notify visible of this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    formVisibleNotify: boolean;

    /**
     * Obtains the bundle relatedBundleName of the application to which this form belongs.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    relatedBundleName: string;

    /**
     * Obtains the scheduledUpdateTime.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    scheduledUpdateTime: string;

    /**
     * Obtains the form config ability about this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    formConfigAbility: string;

    /**
     * Obtains the updateDuration.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    updateDuration: number;

    /**
     * Obtains the default grid style of this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    defaultDimension: number;

    /**
     * Obtains the grid styles supported by this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    supportDimensions: Array<number>;

    /**
     * Obtains the custom data defined in this form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    customizeData: { [key: string]: [value: string] };
  }

  /**
   * Type of form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   */
  enum FormType {
    /**
     * JS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    JS = 1
  }

  /**
   * Color mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   */
  enum ColorMode {
    /**
     * Automatic mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    MODE_AUTO = -1,

    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    MODE_DARK = 0,

    /**
     * Light mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    MODE_LIGHT = 1
  }

  /**
   * Provides state information about a form.
   *
   * @interface FormStateInfo
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   */
  interface FormStateInfo {
    /**
     * Obtains the form state.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    formState: FormState;

    /**
     * Obtains the want form .
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    want: Want;
  }

  /**
   * Provides state about a form.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   */
  enum FormState {
    /**
     * Indicates that the form status is unknown due to an internal error.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    UNKNOWN = -1,

    /**
     * Indicates that the form is in the default state.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    DEFAULT = 0,

    /**
     * Indicates that the form is ready.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    READY = 1
  }

  /**
   * Parameter of form.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
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
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    IDENTITY_KEY = 'ohos.extra.param.key.form_identity',

    /**
     * Indicates the key specifying the grid style of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       DIMENSION_KEY: FormDimension.Dimension_1_2
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    DIMENSION_KEY = 'ohos.extra.param.key.form_dimension',

    /**
     * Indicates the key specifying the name of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       NAME_KEY: "formName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    NAME_KEY = 'ohos.extra.param.key.form_name',

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
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    MODULE_NAME_KEY = 'ohos.extra.param.key.module_name',

    /**
     * Indicates the key specifying the width of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       WIDTH_KEY: 800
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    WIDTH_KEY = 'ohos.extra.param.key.form_width',

    /**
     * Indicates the key specifying the height of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       HEIGHT_KEY: 400
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    HEIGHT_KEY = 'ohos.extra.param.key.form_height',

    /**
     * Indicates the key specifying whether a form is temporary, which is represented as
     * want: {
     *   "parameters": {
     *       TEMPORARY_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    TEMPORARY_KEY = 'ohos.extra.param.key.form_temporary'
  }
}
export default formInfo;
