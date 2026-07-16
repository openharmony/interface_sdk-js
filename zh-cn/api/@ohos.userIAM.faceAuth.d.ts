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
 * @file 人脸认证
 * @kit UserAuthenticationKit
 */

/**
 * **faceAuth**模块是OpenHarmony用户身份认证体系（UserIAM）的重要组成部分，用于管理人脸录入功能。该模块提供了面部认证管理的核心API，使开发者能够在应用内录入和管理人脸信息。
 *
 * 该模块主要用于以下场景：
 *
 * - 需要实现人脸录入功能的应用。
 * - 需要与系统级身份认证服务集成的场景。
 * - 需要自定义人脸预览界面的应用。
 *
 * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace faceAuth {
  /**
   * 人脸认证管理器对象。用于提供人脸录入过程中的管理功能，包括设置人脸预览界面的Surface ID等。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  class FaceAuthManager {
    /**
     * 用于创建人脸认证管理器对象。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 用于在录入人脸时设置人脸预览界面的Surface ID。该接口需要配合
     * [addCredential]{@link @ohos.account.osAccount:osAccount.UserIdentityManager#addCredential}使用，通过
     * [getXComponentSurfaceId]{@link XComponentController#getXComponentSurfaceId}组件的Surface来显示人脸预览画面。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { string } surfaceId - [XComponent]{@link XComponentController#getXComponentSurfaceId} 持有 Surface 的 ID。用于在
     *     人脸录入过程中显示人脸预览画面，该ID需通过XComponentController的getXComponentSurfaceId方法获取。
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