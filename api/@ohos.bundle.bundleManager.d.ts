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

import { AsyncCallback } from './basic';

/**
 * Obtains the Want for starting the main ability of an application based on the
 * given bundle name. The main ability of an application is the ability that has the
 * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
 * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
 * @param { string } bundleName - Indicates the bundle name of the application.
 * @param { number } userId - Indicates the user ID or do not pass user ID. 
 * @param { AsyncCallback } callback - The callback for starting the application's main ability.
 * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700001 - The specified bundleName is not existed.
 * @throws { BusinessError } 17700004 - The specified userId is not existed.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getLaunchWantForBundle(bundleName: string, userId: number, callback: AsyncCallback<Want>): void;

/**
 * Obtains the Want for starting the main ability of an application based on the
 * given bundle name. The main ability of an application is the ability that has the
 * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
 * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
 * @param { string } bundleName - Indicates the bundle name of the application.
 * @param { AsyncCallback } callback - The callback for starting the application's main ability.
 * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700001 - The specified bundleName is not existed.
 * @throws { BusinessError } 17700004 - The specified userId is not existed.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void;

/**
 * Obtains the Want for starting the main ability of an application based on the
 * given bundle name. The main ability of an application is the ability that has the
 * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
 * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
 * @param { string } bundleName - Indicates the bundle name of the application.
 * @param { number } userId - Indicates the user ID or do not pass user ID. 
 * @returns { Promise<Want> } the Want for starting the application's main ability.
 * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700001 - The specified bundleName is not existed.
 * @throws { BusinessError } 17700004 - The specified userId is not existed.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getLaunchWantForBundle(bundleName: string, userId?: number): Promise<Want>;

/**
 * Obtains the profile designated by metadata name, abilityName and moduleName from the current application.
 * @param { string } moduleName - Indicates the moduleName of the application.
 * @param { string } abilityName - Indicates the abilityName of the application.
 * @param { string } metadataName - Indicates the name of metadata in ability.
 * @param { AsyncCallback } callback - The callback of returning string in json-format of the corresponding config file.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700003 - The specified anilityName or moduleName is not existed.
 * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getProfileByAbility(moduleName: string, abilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

/**
 * Obtains the profile designated by metadata name, abilityName and moduleName from the current application.
 * @param { string } moduleName - Indicates the moduleName of the application.
 * @param { string } abilityName - Indicates the abilityName of the application.
 * @param { string } metadataName - Indicates the name of metadata in ability.
 * @returns { Promise<Array<string>> } Returns string in json-format of the corresponding config file.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700003 - The specified anilityName or moduleName is not existed.
 * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getProfileByAbility(moduleName: string, abilityName: string, metadataName?: string): Promise<Array<string>>;

/**
 * Obtains the profile designated by metadata name, extensionAbilityName and moduleName from the current application.
 * @param { string } moduleName - Indicates the moduleName of the application.
 * @param { string } extensionAbilityName - Indicates the extensionAbilityName of the application.
 * @param { string } metadataName - Indicates the name of metadata in ability.
 * @param { AsyncCallback } callback - The callback of returning string in json-format of the corresponding config file.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700003 - The specified extensionAbilityName or moduleName is not existed.
 * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

/**
 * Obtains the profile designated by metadata name, extensionAbilityName and moduleName from the current application.
 * @param { string } moduleName - Indicates the moduleName of the application.
 * @param { string } extensionAbilityName - Indicates the extensionAbilityName of the application.
 * @param { string } metadataName - Indicates the name of metadata in ability.
 * @returns { Promise<Array<string>> } Returns string in json-format of the corresponding config file.
 * @throws { BusinessError } 401 - Input parameters check failed.
 * @throws { BusinessError } 17700003 - The specified extensionAbilityName or moduleName is not existed.
 * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName?: string): Promise<Array<string>>;