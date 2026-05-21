/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { BusinessError } from './@ohos.base';

/**
 * The **brightness** module provides an API for setting the screen brightness.
 *
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace brightness {
  /**
   * Sets the screen brightness.
   *
   * @param { int } value - Brightness value. Value range: 0 to 255. The value of this parameter must be a number.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   * @throws { BusinessError } 4700101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.DisplayPowerManager
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  function setValue(value: int): void;

  /**
   * Sets the screen brightness. This API is used for continuous brightness adjustment. To achieve a better performance,
   * set **continuous** to **true** when you start, and set it to **false** after you finish.
   *
   * @param { int } value - Brightness value. Value range: [0, 255]
   * @param { boolean } continuous - Whether the brightness adjustment is continuous. The value **true** indicates that
   *     the brightness adjustment is continuous; **false** indicates the opposite. Default value: **false**
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   * @throws { BusinessError } 4700101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.DisplayPowerManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setValue(value: int, continuous: boolean): void;
}

export default brightness;