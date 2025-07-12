/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * Obtains battery information of a device.
 * <p>Battery information includes the remaining battery power,
 * voltage, temperature, model, and charger type.
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @atomicservice
 * @since 20
 */
declare class batteryInfo {
  /**
   * Battery state of charge (SoC) of the current device, in percent.
   *
   * @readonly
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @atomicservice
   * @since 20
   */
  static get batterySOC(): int;
}
export default batteryInfo;