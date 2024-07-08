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

/**
 * @file
 * @kit ConnectivityKit
 */

/**
 * @typedef StartBLEScanOptions
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6
 */
export interface StartBLEScanOptions {
  /**
   * Initializes the connected NFC tag.
   *
   * @throws { BusinessError } 209 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9
   */
  initialize(): void;
}



