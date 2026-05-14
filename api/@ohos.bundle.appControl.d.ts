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

/**
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
/*** if arkts dynamic */
import type { ElementName } from './bundleManager/ElementName';
/*** endif */
/*** if arkts static */
import { ElementName } from './bundleManager/ElementName';
/*** endif */
import Want from './@ohos.app.ability.Want';

/**
 * The module provides APIs for setting, obtaining, and deleting the disposed status of an application. An application
 * in the disposed status is forbidden to run. When a user clicks the application icon on the home screen, the
 * corresponding page is displayed based on the disposal intent.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace appControl {
  /**
   * Enumerates the types of application components that function as the displayed page.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ComponentType {
    /**
     * UIAbility component.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY = 1,

    /**
     * UIExtensionAbility component.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UI_EXTENSION = 2
  }

  /**
   * Enumerates the types of abilities during uninstallation.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export enum UninstallComponentType {

    /**
     * ExtensionAbility component. Only
     * [ExtensionAbility](docroot://quick-start/module-configuration-file.md#extensionabilities) components of the
     * service type is supported.
     *
     * The ExtensionAbility component is determined by bundleName, moduleName, and abilityName in want.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    EXTENSION = 1,
    /**
     * UIExtensionAbility component.
     *
     * The UIExtensionAbility is determined by bundleName, moduleName, and abilityName in want, and the
     * **ability.want.params.uiExtensionType** field in **want.parameters** is set to
     * [UIExtensionAbility](docroot://application-models/uiextensionability-sys.md).
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UI_EXTENSION = 2
  }

  /**
   * Enumerates the types of application disposals.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DisposedType {
    /**
     * All abilities of the application are blocked. That is, the entire application is blocked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOCK_APPLICATION = 1,
    /**
     * A specific ability of the application is blocked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOCK_ABILITY = 2,
    /**
     * The application is not blocked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NON_BLOCK = 3
  }

  /**
   * Enumerates the control type of application disposal.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ControlType {
    /**
     * A trustlist is used, which means that the application components in the list are allowed to run.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALLOWED_LIST = 1,
    /**
     * A blocklist is used, which means that the application components in the list are forbidden to run.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DISALLOWED_LIST = 2
  }

  /**
   * Defines a disposed rule.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DisposedRule {
    /**
     * Page displayed when the application is disposed of.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * Type of application component that functions as the displayed page.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    componentType: ComponentType;

    /**
     * Type of application disposal.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    disposedType: DisposedType;

    /**
     * Control type of application disposal.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    controlType: ControlType;

    /**
     * List of application components to be disposed of or exempted.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    elementList: Array<ElementName>;

    /**
     * Priority of the disposed rule, which is used to sort the query results of the rule list. The value is an integer.
     * A smaller value indicates a higher priority.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    priority: int;
  }

  /**
   * Describes an uninstallation disposed rule.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface UninstallDisposedRule {
    /**
     * Component displayed when the application is disposed of.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * Priority of the disposed rule, which is used to sort the query results of the rule list. The value is an integer.
     * A smaller value indicates a higher priority.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    priority: int;

    /**
     * Type of the ability to start during interception.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    uninstallComponentType: UninstallComponentType;
  }

  /**
   * Describes the configurations for setting disposed rules in batches.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DisposedRuleConfiguration {
    /**
     * appId or appIdentifier of the target application. Identical appId and appIdentifier values indicate the same
     * application instance. If a rule is set using appId, it overwrites the one set with appIdentifier, and the reverse
     * is also true.
     *
     * **NOTE**
     *
     * **appId** is also the unique identifier of an app. For details, see
     * [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For
     * details about how to obtain **appIdentifier**, see
     * [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information)
     * .
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    appId: string;

    /**
     * Index of the application clone. The default value is **0**.
     *
     * The value **0** means to set the disposed rule for the main application. A value greater than 0 means to set the
     * disposed rule for the application clone with the specified index.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    appIndex: int;

    /**
     * Disposal rule of the application, including the type of the ability to be started during disposal.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    disposedRule: DisposedRule;
  }

  /**
   * Sets the disposed status for an application. This API uses an asynchronous callback to return the result. If the
   * operation is successful, **null** is returned. If the operation fails, an error message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - ID of the target application.<br> **appId** is the unique identifier of an application
   *     and is determined by the bundle name and signature information of the application. For details about how to
   *     obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { Want } disposedWant - Disposal intent of the application.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDisposedStatus(appId: string, disposedWant: Want, callback: AsyncCallback<void>): void;

  /**
   * Sets the disposed status for an application. This API uses a promise to return the result. If the operation is
   * successful, **null** is returned. If the operation fails, an error message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - ID of the target application.<br> **appId** is the unique identifier of an application
   *     and is determined by the bundle name and signature information of the application. For details about how to
   *     obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { Want } disposedWant - Disposal intent of the application.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDisposedStatus(appId: string, disposedWant: Want): Promise<void>;

  /**
   * Sets the disposed status for an application. This API returns the result synchronously. If the operation is
   * successful, **null** is returned. If the operation fails, an error message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - ID of the target application.<br> **appId** is the unique identifier of an application
   *     and is determined by the bundle name and signature information of the application. For details about how to
   *     obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { Want } disposedWant - Disposal intent of the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDisposedStatusSync(appId: string, disposedWant: Want): void;

  /**
   * Obtains the disposed status of an application. This API uses an asynchronous callback to return the result. If the
   * operation is successful, the disposed status of the application is returned. If the operation fails, an error
   * message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - ID of the target application.<br> **appId** is the unique identifier of an application
   *     and is determined by the bundle name and signature information of the application. For details about how to
   *     obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { AsyncCallback<Want> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null** and **data** is the disposed status obtained; otherwise,
   *     **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDisposedStatus(appId: string, callback: AsyncCallback<Want>): void;

  /**
   * Obtains the disposed status of an application. This API uses a promise to return the result. If the operation is
   * successful, the disposed status of the application is returned. If the operation fails, an error message is
   * returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - ID of the target application.<br> **appId** is the unique identifier of an application
   *     and is determined by the bundle name and signature information of the application. For details about how to
   *     obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @returns { Promise<Want> } Promise used to return the disposed status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDisposedStatus(appId: string): Promise<Want>;

  /**
   * Obtains the disposed status of an application. This API returns the result synchronously. If the operation is
   * successful, the disposed status of the application is returned. If the operation fails, an error message is
   * returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - ID of the target application.<br> **appId** is the unique identifier of an application
   *     and is determined by the bundle name and signature information of the application. For details about how to
   *     obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @returns { Want } Disposed status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getDisposedStatusSync(appId: string): Want;

  /**
   * Deletes the disposed status for an application. This API uses an asynchronous callback to return the result. If the
   * operation is successful, **null** is returned. If the operation fails, an error message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - appId or appIdentifier of the target application. If a rule is set using appId, it must
   *     be deleted using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique
   *     identifier of an application and is determined by the bundle name and signature information of the application.
   *     For details about how to obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .<br> [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo} is also the unique identifier of an app.
   *     For details, see
   *     [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For
   *     details about how to obtain **appIdentifier**, see
   *     [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information)
   *     .
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteDisposedStatus(appId: string, callback: AsyncCallback<void>): void;

  /**
   * Deletes the disposed status for an application. This API uses a promise to return the result. If the operation is
   * successful, **null** is returned. If the operation fails, an error message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - appId or appIdentifier of the target application. If a rule is set using appId, it must
   *     be deleted using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique
   *     identifier of an application and is determined by the bundle name and signature information of the application.
   *     For details about how to obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .<br> [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo} is also the unique identifier of an app.
   *     For details, see
   *     [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For
   *     details about how to obtain **appIdentifier**, see
   *     [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information)
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteDisposedStatus(appId: string): Promise<void>;

  /**
   * Deletes the disposed status for an application or an application clone. This API returns the result synchronously.
   * If the operation is successful, **null** is returned. If the operation fails, an error message is returned.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - appId or appIdentifier of the target application. If a rule is set using appId, it must
   *     be deleted using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique
   *     identifier of an application and is determined by the bundle name and signature information of the application.
   *     For details about how to obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .<br> [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo} is also the unique identifier of an app.
   *     For details, see
   *     [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For
   *     details about how to obtain **appIdentifier**, see
   *     [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information)
   *     .
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.<br> The value **0** means
   *     to delete the disposed status of the main application. A value greater than 0 means to delete the disposed
   *     status of the application clone. [since 12]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteDisposedStatusSync(appId: string, appIndex?: int): void;

  /**
   * Obtains the disposed rule of an application or an application clone.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - appId or appIdentifier of the target application. If a rule is set using appId, it must
   *     be obtained using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique
   *     identifier of an application and is determined by the bundle name and signature information of the application.
   *     For details about how to obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .<br> [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo} is also the unique identifier of an app.
   *     For details, see
   *     [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For
   *     details about how to obtain **appIdentifier**, see
   *     [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information)
   *     .
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.<br> The value **0** means
   *     to obtain the disposed rule of the main application. A value greater than 0 means to obtain the disposed rule
   *     of the application clone with the specified index. [since 12]
   * @returns { DisposedRule } Disposed rule of the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getDisposedRule(appId: string, appIndex?: int): DisposedRule;

  /**
   * Sets the disposed rule for an application or an application clone.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - appId or appIdentifier of the target application. If a rule is set using appId, it
   *     overwrites the one set with appIdentifier, and the reverse is also true.<br>**NOTE**<br> **appId** is the
   *     unique identifier of an application and is determined by the bundle name and signature information of the
   *     application. For details about how to obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .<br> [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo} is also the unique identifier of an app.
   *     For details, see
   *     [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For
   *     details about how to obtain **appIdentifier**, see
   *     [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information)
   *     .
   * @param { DisposedRule } rule - Disposed rule to set.
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.<br> The value **0** means
   *     to set the disposed rule for the main application. A value greater than 0 means to set the disposed rule for
   *     the application clone with the specified index. [since 12]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setDisposedRule(appId: string, rule: DisposedRule, appIndex?: int): void;

  /**
   * Sets an uninstallation disposed rule for an application or an application clone.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - appIdentifier of the target application.<br> If the application does not have an
   *     appIdentifier, use its appId instead. **appId** is the unique identifier of an application and is determined by
   *     the bundle name and signature information of the application. For details about how to obtain **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { UninstallDisposedRule } rule - Uninstallation disposed rule.
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.<br> The value **0** means
   *     to set the uninstallation disposed rule for the main application. A value greater than 0 means to set the
   *     uninstallation disposed rule for the application clone.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @throws { BusinessError } 17700075 - The specified bundleName of want is not the same with caller.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function setUninstallDisposedRule(appIdentifier: string, rule: UninstallDisposedRule, appIndex?: int): void;

  /**
   * Obtains the uninstallation disposed rule of an application or an application clone.
   *
   * @permission ohos.permission.GET_DISPOSED_APP_STATUS or ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - appIdentifier of the target application.<br> If the application does not have an
   *     appIdentifier, use its appId instead. **appId** is the unique identifier of an application and is determined by
   *     the bundle name and signature information of the application. For details about how to set **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.<br> The value **0** means
   *     to obtain the uninstallation disposed rule of the main application. A value greater than 0 means to obtain the
   *     uninstallation disposed rule of the application clone.
   * @returns { UninstallDisposedRule } Uninstallation disposed rule.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function getUninstallDisposedRule(appIdentifier: string, appIndex?: int): UninstallDisposedRule;

  /**
   * Deletes an uninstallation disposed rule for an application or an application clone.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - appIdentifier of the target application.<br> If the application does not have an
   *     appIdentifier, use its appId instead. **appId** is the unique identifier of an application and is determined by
   *     the bundle name and signature information of the application. For details about how to delete **appId**, see
   *     [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information)
   *     .
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.<br> The value **0** means
   *     to delete the uninstallation disposed rule of the main application. A value greater than 0 means to delete the
   *     uninstallation disposed rule of the application clone.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function deleteUninstallDisposedRule(appIdentifier: string, appIndex?: int): void;

  /**
   * Sets disposed rules in batches for an application or an application clone.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { Array<DisposedRuleConfiguration> } disposedRuleConfigurations - Configuration for the disposed rules in
   *     batches, including the appId of the target application, the index of the application clone, and the rules
   *     themselves. The maximum number of disposed rules in an array is 1000.<br>**NOTE**<br>1. If multiple
   *     **DisposedRuleConfiguration** entries in the array have the same appId and appIndex, the later entry will
   *     overwrite the earlier one.<br>2. If an application has already set disposed rules, re-setting the rules will
   *     replace the existing ones. Identical appId and appIndex values indicate the same application instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDisposedRules(disposedRuleConfigurations: Array<DisposedRuleConfiguration>): void;

  /**
   * Obtains all the disposed rules set for the current user.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @returns { Array<DisposedRuleConfiguration> } Array of disposed rules.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllDisposedRules(): Array<DisposedRuleConfiguration>;

  /**
   * Query all disposed rules under the current user for the specified bundle name.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } bundleName - Indicates the bundle name of the setter that sets the disposed rules.
   * @returns { Array<DisposedRuleConfiguration> } Returns disposed rules.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>;
}

export default appControl;
