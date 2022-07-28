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

import { AsyncCallback, Callback } from "./../basic";
import Want from "./../@ohos.application.want";

/**
 * @name Offers application software management.
 * @since 
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface ApplicationManager {

    /**
     * Add the disallowed uninstall list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param bundles Array of disallowed uninstall applications.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if add the application to the disallowed uninstall list successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    addDisallowedUninstallBundles(admin: Want, bundles: Array<string>, userId: number, callback: AsyncCallback<void>): void;
    addDisallowedUninstallBundles(admin: Want, bundles: Array<string>, callback: AsyncCallback<void>): void;
    addDisallowedUninstallBundles(admin: Want, bundles: Array<string>, userId?: number): Promise<void>;

    /**
     * Remove the disallowed uninstall list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param bundles Array of disallowed uninstall applications.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if remove the application from the the disallowed uninstall successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    removeDisallowedUninstallBundles(admin: Want, bundles: Array<string>, userId: number, callback: AsyncCallback<void>): void;
    removeDisallowedUninstallBundles(admin: Want, bundles: Array<string>, callback: AsyncCallback<void>): void;
    removeDisallowedUninstallBundles(admin: Want, bundles: Array<string>, userId?: number): Promise<void>;

    /**
     * Get the disallowed uninstall list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if get the disallowed uninstall list of applications successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
    getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
    getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

    /**
     * Add the allowed install list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param packages Array of allowed install applications.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if add application to the allowed install list successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    addAllowedInstallPackages(admin: Want, packages: Array<string>, userId: number, callback: AsyncCallback<void>): void;
    addAllowedInstallPackages(admin: Want, packages: Array<string>, callback: AsyncCallback<void>): void;
    addAllowedInstallPackages(admin: Want, packages: Array<string>, userId?: number): Promise<void>;

    /**
     * Remove allowed install list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param packages Array of allowed install packages.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if remove the allowed install package successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    removeAllowedInstallPackages(admin: Want, packages: Array<string>, userId: number, callback: AsyncCallback<void>): void;
    removeAllowedInstallPackages(admin: Want, packages: Array<string>, callback: AsyncCallback<void>): void;
    removeAllowedInstallPackages(admin: Want, packages: Array<string>, userId?: number): Promise<void>;

    /**
     * Get allowed install list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if get the allowed install package successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    getAllowedInstallPackages(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
    getAllowedInstallPackages(admin: Want, callback: AsyncCallback<Array<string>>): void;
    getAllowedInstallPackages(admin: Want, userId?: number): Promise<Array<string>>;

    /**
     * Add stop and disallowed running list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param bundles Array of stop and disallowed running applications.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if add the stop and disallowed running application successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    addStopAndDisallowedRunningBundles(admin: Want, bundles: Array<string>, userId: number, callback: AsyncCallback<void>): void;
    addStopAndDisallowedRunningBundles(admin: Want, bundles: Array<string>, callback: AsyncCallback<void>): void;
    addStopAndDisallowedRunningBundles(admin: Want, bundles: Array<string>, userId?: number): Promise<void>;

    /**
     * Remove stop and disallowed running list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param bundles Array of stop and disallowed running applications.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if remove the stop and disallowed running application successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    removeStopAndDisallowedRunningBundles(admin: Want, bundles: Array<string>, userId: number, callback: AsyncCallback<void>): void;
    removeStopAndDisallowedRunningBundles(admin: Want, bundles: Array<string>, callback: AsyncCallback<void>): void;
    removeStopAndDisallowedRunningBundles(admin: Want, bundles: Array<string>, userId?: number): Promise<void>;

    /**
     * Get stop and disallowed running list of applications.
     *
     * @since 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @param admin Indicates the administrator ability information.
     * @param userId Indicates the user ID or do not pass user ID.
     * @return {@code true} if get the stop and disallowed running application successfully.
     * @permission ohos.permission.EDM_MANAGE_APPLICATION
     */
    getStopAndDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
    getStopAndDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
    getStopAndDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;

}