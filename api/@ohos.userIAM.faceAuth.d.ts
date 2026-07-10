/*
 * Copyright (c) 2022-2022 Huawei Device Co., Ltd.
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
 * @file Facial Authentication
 * @kit UserAuthenticationKit
 */

/**
 * The **faceAuth** module is an important part of the OpenHarmony user identity and access management (UserIAM) and is
 * used to manage face enrollment. This module provides core APIs for face authentication management, enabling
 * developers to enroll and manage face information within their applications.
 *
 * This module applies to the following scenarios:
 *
 * - Applications that need to implement the face enrollment function.
 * - Scenarios where the system-level identity authentication service needs to be integrated.
 * - Applications that need to customize the face preview page.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace faceAuth {
  /**
   * Provides APIs for facial authentication management. It provides management features during face enrollment,
   * including setting the surface ID of the face preview page.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  class FaceAuthManager {
    /**
     * Creates a face authentication manager object.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Sets the surface ID of the face preview page during face enrollment. This API must be used together with
     * [addCredential]{@link @ohos.account.osAccount:osAccount.UserIdentityManager#addCredential} to display the face
     * preview page through the surface of the
     * [getXComponentSurfaceId]{@link XComponentController#getXComponentSurfaceId} component.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { string } surfaceId - ID of the surface held by
     *     [XComponent]{@link XComponentController#getXComponentSurfaceId}. This ID is used to display the face preview
     *     page during face enrollment. It must be obtained using the **getXComponentSurfaceId** method of
     *     **XComponentController**.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
     * @throws { BusinessError } 12700001 - The service is unavailable.
     * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setSurfaceId(surfaceId: string): void;
  }
}

export default faceAuth;