/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * @file formInfo
 * @kit API10LessDeprecatedModules
 */

import Want from './@ohos.app.ability.Want';

/**
 * formInfo模块提供了卡片信息和状态等相关类型和枚举。
 * 
 * > **说明：**
 * >
 * > 从API version 9 开始废弃，
 *
 * @syscap SystemCapability.Ability.Form
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.form.formInfo/formInfo
 */
declare namespace formInfo {

  /**
   * 卡片信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.form.formInfo/formInfo#FormInfo
   */
  interface FormInfo {
    /**
     * 表示卡片所属包的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#bundleName
     */
    bundleName: string;

    /**
     * 表示卡片所属模块的模块名。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#moduleName
     */
    moduleName: string;

    /**
     * 表示卡片所属的Ability名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#abilityName
     */
    abilityName: string;

    /**
     * 表示卡片名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#name
     */
    name: string;

    /**
     * 表示卡片描述。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#description
     */
    description: string;

    /**
     * 表示卡片类型，当前支持JS卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#type
     */
    type: FormType;

    /**
     * 表示JS卡片的组件名。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#jsComponentName
     */
    jsComponentName: string;

    /**
     * 表示卡片颜色模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#colorMode
     */
    colorMode: ColorMode;

    /**
     * 表示是否是默认卡片。
     * 
     * - true：默认卡片。
     * 
     * - false：非默认卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#isDefault
     */
    isDefault: boolean;

    /**
     * 表示卡片是否使能更新。
     * 
     * - true：表示支持周期性刷新。
     * 
     * - false：表示不支持周期性刷新。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#updateEnabled
     */
    updateEnabled: boolean;

    /**
     * 表示卡片是否使能可见通知。
     * 
     * - true：通知卡片提供方可见状态变化。
     * 
     * - false：不通知卡片提供方可见状态变化。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#formVisibleNotify
     */
    formVisibleNotify: boolean;

    /**
     * 表示卡片所属的相关联Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     */
    relatedBundleName: string;

    /**
     * 表示卡片定时更新时间。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#scheduledUpdateTime
     */
    scheduledUpdateTime: string;

    /**
     * 表示卡片配置ability。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#formConfigAbility
     */
    formConfigAbility: string;

    /**
     * 表示卡片更新周期。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#updateDuration
     */
    updateDuration: number;

    /**
     * 表示卡片默认规格。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#defaultDimension
     */
    defaultDimension: number;

    /**
     * 表示卡片支持的规格。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#supportDimensions
     */
    supportDimensions: Array<number>;

    /**
     * 表示卡片自定义数据。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormInfo#customizeData
     */
    customizeData: { [key: string]: [value: string] };
  }

  /**
   * 支持的卡片类型枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.form.formInfo/formInfo#FormType
   */
  enum FormType {
    /**
     * 卡片类型为JS。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormType#JS
     */
    JS = 1
  }

  /**
   * 卡片支持的颜色模式枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.form.formInfo/formInfo#ColorMode
   */
  enum ColorMode {
    /**
     * 表示自动模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.ColorMode#MODE_AUTO
     */
    MODE_AUTO = -1,

    /**
     * 表示暗色。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.ColorMode#MODE_DARK
     */
    MODE_DARK = 0,

    /**
     * 表示亮色。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.ColorMode#MODE_LIGHT
     */
    MODE_LIGHT = 1
  }

  /**
   * 卡片状态信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.form.formInfo/formInfo#FormStateInfo
   */
  interface FormStateInfo {
    /**
     * 表示卡片状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormStateInfo#formState
     */
    formState: FormState;

    /**
     * 卡片的Want信息。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormStateInfo#want
     */
    want: Want;
  }

  /**
   * 卡片状态枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.form.formInfo/formInfo#FormState
   */
  enum FormState {
    /**
     * 表示未知状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormState#UNKNOWN
     */
    UNKNOWN = -1,

    /**
     * 表示默认状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormState#DEFAULT
     */
    DEFAULT = 0,

    /**
     * 表示就绪状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormState#READY
     */
    READY = 1
  }

  /**
   * 卡片参数枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.form.formInfo/formInfo#FormParam
   */
  enum FormParam {
    /**
     * Widget ID.
     * 
     * This is a system API.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#IDENTITY_KEY
     */
    IDENTITY_KEY = 'ohos.extra.param.key.form_identity',

    /**
     * 卡片规格样式。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#DIMENSION_KEY
     */
    DIMENSION_KEY = 'ohos.extra.param.key.form_dimension',

    /**
     * 卡片名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#NAME_KEY
     */
    NAME_KEY = 'ohos.extra.param.key.form_name',

    /**
     * 卡片所属模块名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#MODULE_NAME_KEY
     */
    MODULE_NAME_KEY = 'ohos.extra.param.key.module_name',

    /**
     * 卡片宽度。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#WIDTH_KEY
     */
    WIDTH_KEY = 'ohos.extra.param.key.form_width',

    /**
     * 卡片高度。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#HEIGHT_KEY
     */
    HEIGHT_KEY = 'ohos.extra.param.key.form_height',

    /**
     * 临时卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.form.formInfo/formInfo.FormParam#TEMPORARY_KEY
     */
    TEMPORARY_KEY = 'ohos.extra.param.key.form_temporary'
  }
}
export default formInfo;