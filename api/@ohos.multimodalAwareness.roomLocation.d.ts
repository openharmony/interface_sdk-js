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
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * This module provides the capability to subscribe to report the room location result.
 * @namespace roomLocation
 * @syscap SystemCapability.MultimodalAwareness.RoomLocation
 * @systemapi
 * @since 20
 * @arkts 1.1&1.2
 */
declare namespace roomLocation {
  /**
   * Interface for room location result
   * @interface RoomLocateResponse
   * @syscap SystemCapability.MultimodalAwareness.RoomLocation
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  interface RoomLocateResponse {
    /**
     * indicates roomId
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.RoomLocation
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    roomId: string;
    /**
     * indicates errorCode
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.RoomLocation
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    errorCode: int;
  }

  /**
   * Subscribe to room-level location result data.
   * @param { 'onRoomLocated' } type - Indicates the event type.
   * @param { Callback<RoomLocateResponse> } callback - Callback location result data.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 33800001 - Service exception.
   * @throws { BusinessError } 33800002 - Subscription failed.
   * @syscap SystemCapability.MultimodalAwareness.RoomLocation
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  function on(type: 'onRoomLocated', callback: Callback<RoomLocateResponse>): void;

  /**
   * Unsubscribe to room-level location result data.
   * @param { 'onRoomLocated' } type - Indicates the event type.
   * @param { Callback<RoomLocateResponse> } [callback] - Callback location result data.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 33800001 - Service exception.
   * @throws { BusinessError } 33800003 - Unsubscription failed.
   * @syscap SystemCapability.MultimodalAwareness.RoomLocation
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  function off(type: 'onRoomLocated', callback?: Callback<RoomLocateResponse>): void;

  /**
   * Get room-level location result data.
   * @returns { RoomLocateResponse } - Result of room-level location.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 33800005 - Failed to obtain room-level location information.
   * @syscap SystemCapability.MultimodalAwareness.RoomLocation
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  function getRoomLocationResult(): RoomLocateResponse;

  /**
   * Set devices informations.
   * @param { string } deviceInfos - Device informations.
   * @returns { Promise<boolean> } - Result of setting information.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 33800004 - Failed to set device information.
   * @syscap SystemCapability.MultimodalAwareness.RoomLocation
   * @systemapi
   * @since 20
   * @arkts 1.1&1.2
   */
  function setDeviceInfos(deviceInfos: string): Promise<boolean>;
}
export default roomLocation;
