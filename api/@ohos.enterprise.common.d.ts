/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit MDMKit
 */

/**
 * This module provides the common interface or enum.
 *
 * @namespace common
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 22
 */
declare namespace common {
    /**
     * Application instance data.
     *
     * @typedef ApplicationInstance
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    export interface ApplicationInstance {
      /**
       * Globally unique identifier of an application, which is allocated by the cloud.
       * AppIdentifier does not change along the application lifecycle, including version updates, certificate changes,
       * public and private key changes, and application transfer.
       *
       * @type { string }
       * @syscap SystemCapability.Customization.EnterpriseDeviceManager
       * @stagemodelonly
       * @since 22
       */
      appIdentifier: string;

      /**
       * Indicates the OS account identifier.
       *
       * @type { number }
       * @syscap SystemCapability.Customization.EnterpriseDeviceManager
       * @stagemodelonly
       * @since 22
       */
      accountId: number;
  
      /**
       * Indicates the index of clone app.
       *
       * @type { number }
       * @syscap SystemCapability.Customization.EnterpriseDeviceManager
       * @stagemodelonly
       * @since 22
       */
      appIndex: number;
    }
}

export default common;