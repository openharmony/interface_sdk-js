/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit Automatic Scene Configuration Kit
 * @fileName @ohos.customization.assessment.d.ts
 */

import UIAbilityContext from './application/UIAbilityContext';

/**
 * The **assessment** module provides APIs for assessment scenario management.
 *
 * @syscap SystemCapability.Customization.AssessmentConfiguration
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace assessment {

  /**
   * Assessment scenario configuration information.
   *
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AssessmentConfig {
    /**
     * Maximum assessment duration (in milliseconds). The value 0 indicates no time limit.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    duration: int;

    /**
     * List of application bundle names allowed to run during the assessment (whitelist).
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    allowedApps: Array<string>;
  }

  /**
   * Assessment error code.
   *
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum AssessmentErrorCode {
    /**
     * Ok.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    OK = 0,

    /**
     * User cancel.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    USER_CANCEL = 1,

    /**
     * Timeout exit.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    TIMEOUT = 2,

    /**
     * System error.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SYSTEM_ERROR = 3,

    /**
     * Environment Anomaly
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ENV_ANOMALY = 4,
  }

  /**
   * Assessment error information.
   *
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AssessmentError {
    /**
     * Error code. The value 0 indicates success, and a non-zero value indicates failure.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    code: AssessmentErrorCode;

    /**
     * Error description. This field is optional and defaults to an empty string if not provided.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    message?: string;
  }

  /**
   * Assessment interrupt information.
   *
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AssessmentInterruptInfo {
    /**
     * Interrupt reason code.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    code: AssessmentErrorCode;

    /**
     * Detailed description of the interrupt reason.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    message: string;
  }

  /**
   * Assessment callback interface.
   *
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface IAssessmentCallback {
    /**
     * Assessment start notification.
     *
     * @param { AssessmentError } error - Error information. code=0 indicates success.
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    onBegin(error: AssessmentError): void;

    /**
     * Assessment interrupt notification.
     *
     * @param { AssessmentInterruptInfo } info - Interrupt information, including the
     *     reason and detailed description.
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    onInterrupted(info: AssessmentInterruptInfo): void;

    /**
     * Assessment end notification.
     *
     * @syscap SystemCapability.Customization.AssessmentConfiguration
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    onEnd(): void;
  }


  /**
   * Begins an assessment session. A confirmation dialog box will be displayed for the user to confirm
   * before the assessment session starts.
   *
   * @permission ohos.permission.ASSESSMENT_CONFIGURATION
   * @param { UIAbilityContext } context - Context of the UIAbility that needs to enter assessment mode.
   * @param { AssessmentConfig } config - Assessment configuration.
   * @param { IAssessmentCallback } callback - Assessment callback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 36700001 - Assessment internal error.
   *     Possible cause: IPC invocation failed internally.
   * @throws { BusinessError } 36700002 - Assessment configuration service is already active.
   *     Possible cause: Assessment resource conflict.
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function begin(context: UIAbilityContext, config: AssessmentConfig, callback: IAssessmentCallback): void;

  /**
   * Ends an assessment session.
   *
   * @permission ohos.permission.ASSESSMENT_CONFIGURATION
   * @param { UIAbilityContext } context - Context of the UIAbility that needs to exit assessment mode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 36700001 - Assessment internal error.
   *     Possible cause: IPC invocation failed internally.
   * @throws { BusinessError } 36700003 - Assessment configuration service is not active.
   *     Possible cause: Not in assessment state.
   * @throws { BusinessError } 36700004 - Invalid operation.
   *     Possible cause: Cannot terminate another active assessment.
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function end(context: UIAbilityContext): void;

  /**
   * Queries whether an assessment session is active.
   *
   * @permission ohos.permission.ASSESSMENT_CONFIGURATION
   * @returns { boolean } Returns true if active, false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function isActive(): boolean;

  /**
   * Queries the current assessment configuration.
   *
   * @permission ohos.permission.ASSESSMENT_CONFIGURATION
   * @returns { AssessmentConfig } Returns the current assessment configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Customization.AssessmentConfiguration
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getConfiguration(): AssessmentConfig;
}

export default assessment;