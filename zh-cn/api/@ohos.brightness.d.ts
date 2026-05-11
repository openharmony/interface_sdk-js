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
 * @arkts 1.1&1.2
 */

import { BusinessError } from './@ohos.base';

/**
 * 该模块提供屏幕亮度的设置接口。
 * 
 * > **说明：**
 * >
 * > - 本模块接口为系统接口。
 *
 * @syscap SystemCapability.PowerManager.DisplayPowerManager
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace brightness {
  /**
   * 设置系统的屏幕亮度。
   *
   * @param { int } value - 亮度的值。范围：0~255；该参数必须为数字类型。
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
   * 设置系统的屏幕亮度。用于连续调节亮度的场景，在连续调节亮度过程中，设置continuous为true，结束时设置continuous为false，会有更好的性能。
   *
   * @param { int } value - 亮度的值。范围：0~255。
   * @param { boolean } continuous - 亮度调节是否连续。true表示亮度调节连续，false表示亮度调节不连续，默认为false。
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