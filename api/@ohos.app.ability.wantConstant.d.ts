/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * the constant for action and entity in the want
 * @namespace wantConstant
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 9
 */
declare namespace wantConstant {
  /**
   * The constant for params of the want
   * @name Params
   * @since 9
   * @syscap SystemCapability.Ability.AbilityBase
   * @permission N/A
   */
  export enum Params {
    /**
     * Indicates the param of sandbox flag.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_SANDBOX = "ohos.dlp.params.sandbox",

    /**
     * Indicates the param of dlp bundle name.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_BUNDLE_NAME = "ohos.dlp.params.bundleName",

    /**
     * Indicates the param of dlp module name.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_MODULE_NAME = "ohos.dlp.params.moduleName",

    /**
     * Indicates the param of dlp ability name.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_ABILITY_NAME = "ohos.dlp.params.abilityName",

    /**
     * Indicates the param of dlp bundle index.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_INDEX = "ohos.dlp.params.index"
  }

  export enum Flags {
    /**
     * Indicates the grant to perform read operations on the URI.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_AUTH_READ_URI_PERMISSION = 0x00000001,

    /**
     * Indicates the grant to perform write operations on the URI.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_AUTH_WRITE_URI_PERMISSION = 0x00000002,

    /**
     * Returns the result to the source ability.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITY_FORWARD_RESULT = 0x00000004,

    /**
     * Determines whether an ability on the local device can be migrated to a remote device.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITY_CONTINUATION = 0x00000008,

    /**
     * Specifies whether a component does not belong to OHOS.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_NOT_OHOS_COMPONENT = 0x00000010,

    /**
     * Specifies whether an ability is started.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITY_FORM_ENABLED = 0x00000020,

    /**
     * Indicates the grant for possible persisting on the URI.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    FLAG_AUTH_PERSISTABLE_URI_PERMISSION = 0x00000040,

    /**
     * Returns the result to the source ability slice.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    FLAG_AUTH_PREFIX_URI_PERMISSION = 0x00000080,

    /**
     * Supports multi-device startup in the distributed scheduling system.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITYSLICE_MULTI_DEVICE = 0x00000100,

    /**
     * Indicates that an ability using the Service template is started regardless of whether the host application has
     * been started.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_START_FOREGROUND_ABILITY = 0x00000200,

    /**
     * Indicates the continuation is reversible.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    FLAG_ABILITY_CONTINUATION_REVERSIBLE = 0x00000400,

    /**
     * Install the specified ability if it's not installed.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_INSTALL_ON_DEMAND = 0x00000800,

    /**
     * Install the specified ability with background mode if it's not installed.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_INSTALL_WITH_BACKGROUND_MODE = 0x80000000,

    /**
     * Indicates the operation of clearing other missions. This flag can be set for the {@code Intent} passed to
     * {@link ohos.app.Context#startAbility} and must be used together with {@link FLAG_ABILITY_NEW_MISSION}.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITY_CLEAR_MISSION = 0x00008000,

    /**
     * Indicates the operation of creating a task on the historical mission stack.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITY_NEW_MISSION = 0x10000000,

    /**
     * Indicates that the existing instance of the ability to start will be reused if it is already at the top of
     * the mission stack. Otherwise, a new ability instance will be created.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_ABILITY_MISSION_TOP = 0x20000000
  }
}

export default wantConstant;
