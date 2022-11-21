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
 * This module provides the capability to manage face auth.
 *
 * @since 9
 */
declare namespace faceAuth {
    /**
     * Provides the abilities for face authentication.
     * @name FaceAuth
     * @since 9
     * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
     * @systemapi Hide this for inner system use.
     */
    class FaceAuthManager {
        /**
         * Constructor to get the FaceAuthManager class instance.
         *
         * @since 9
         * @return Returns the FaceAuthManager class instance.
         * @systemapi Hide this for inner system use.
         */
        constructor();

        /**
         * Set XComponent surface id for camera preview during enroll.
         *
         * @since 9
         * @param surfaceId Indicates surface id for face enroll preview.
         * @permission ohos.permission.MANAGE_USER_IDM
         * @systemapi Hide this for inner system use.
         * @throws { BusinessError } 201 - Permission verification failed.
         * @throws { BusinessError } 202 - The caller is not a system application.
         * @throws { BusinessError } 12700001 - The operation is failed.
         */
        setSurfaceId(surfaceId: string): void;
    }
}

export default faceAuth;