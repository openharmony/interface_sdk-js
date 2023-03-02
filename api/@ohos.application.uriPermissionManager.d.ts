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

import { AsyncCallback } from './basic';
import wantConstant from "./@ohos.ability.wantConstant";

/**
 * The management class for uri of file.
 *
 * @since 10
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 */
declare namespace uriPermissionManager {
    /**
     * Grant URI to another application
     *
     * @since 10
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param uri File URI.
     * @param flag wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION
     * @param fromTokenId Indicates the access token of the application which URI belong to.
     * @param targetTokenId Indicates the access token of the target application.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 201 - Permission denied.
     */
    function grantUriPermission(uri: string, flag: wantConstant.Flags, fromTokenId: number, targetTokenId: number, callback: AsyncCallback<number>): void;
    function grantUriPermission(uri: string, flag: wantConstant.Flags, fromTokenId: number, targetTokenId: number): Promise<number>;

    /**
     * Grant URI from self to another application
     *
     * @since 10
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param uri File URI.
     * @param flag wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION
     * @param targetTokenId Indicates the access token of the target application.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 201 - Permission denied.
     */
    function grantUriPermissionFromSelf(uri: string, flag: wantConstant.Flags, targetTokenId: number, callback: AsyncCallback<number>): void;
    function grantUriPermissionFromSelf(uri: string, flag: wantConstant.Flags, targetTokenId: number): Promise<number>;

    /**
     * Revoke specific URI from one application
     *
     * @since 10
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param uri File URI need to be revoke
     * @param { string } BundleName Indicates the bundleName of the application need to remove uri.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 201 - Permission denied.
     */
    function revokeUriPermission(uri: string, BundleName: string, callback: AsyncCallback<number>): void;
    function revokeUriPermission(uri: string, BundleName: string): Promise<number>;
}

export default uriPermissionManager;