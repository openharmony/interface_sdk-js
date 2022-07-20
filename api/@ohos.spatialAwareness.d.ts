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

import { Callback } from './basic';

/**
 * Provides registration and deregistration interfaces for spatial location
       relationships between multiple devices, which are defined as follows:
 * {@link on}: Subscribe to location relationships between devices
 * {@link off}: Unsubscribe from the inter-device location relationship
 *
 * @since 9
 * @syscap SystemCapability.Msdp.SpatialAwareness
 * @permission N/A
 */
declare namespace spatialAwareness {
   /**
     * Bearing relationship definition。
     * @name DirectionResponse
     */
     export interface DirectionResponse {
        direction : Direction
    }

    /**
     * Approach the relationship definition。
     * @name NearByResponse
     */
    export interface NearByResponse {
        nearby : boolean;
    }
	
    /**
     * Distance relationship definition。
     * @name DistanceResponse
     */
    export interface DistanceBTResponse {
        distance : number;
    }
	
    /**
     * Device information definition。
     */
    export interface DeviceInfo {
        /**
         * Device ID。
         */
        deviceId: string;

        /**
         * Device name。
         */
        deviceName: string;

        /**
         * Device type。
         */
        deviceType: DeviceType;
    }

    /**
     * Location information definition。
     * @name PositionRelation
     */
    export enum PositionRelation {
        /**
         * Represents an azimuth relationship。
         */
        DIRECTION = "direction",
        /**
         * Represents a distance relationship。
         */
        DISTANCE_BT = "distanceBT",
        /**
         * Represents a proximity relationship。
         */
        NEARBY = "nearby"
    }

    /**
     * Device type definition。
     * @name DeviceType
     */
    export enum DeviceType {
        /**
         * Represents an unknown device type。
         */
        UNKNOWN_TYPE = 1,

        /**
         * Represents a speaker。
         */
        SPEAKER = 2,

        /**
         * Represents a smartphone。
         */
        PHONE = 3,

        /**
         * Represents a tablet。
         */
        TABLET = 4,

        /**
         * Represents a smart wearable device。
         */
        WEARABLE = 5,

        /**
         * Represents a car。
         */
        CAR = 6,

        /**
         * Represents a Smart TV。
         */
        TV = 7
    }

    /**
     * Azimuth relationship pattern definition。
     * @name Direction
     */
    export enum Direction {
        /**
         * Represents the left side of the requesting device。
         */
        LEFT = 1,
        /**
         * Represents the right side of the requesting device。
         */
        RIGHT = 2,
        /**
         * Represented in front of the requesting device。
         */
        FRONT = 3,
        /**
         * Represented after the requested device。
         */
        BACK = 4,
        /**
         * Represented above the requesting device。
         */
        UP = 5,
        /**
         * Represented below the requesting device。
         */
        DOWN = 6
    }
	
    /**
     * Spatial azimuth relationships between subscription devices。
     *
     * @since 9
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @param type Represents the device-to-device relationship type for a subscription {@code PositionRelation}.
     * @param deviceInfo Represents the device information to subscribe to {@code DeviceInfo}.
     * @param callback callback function, receive reported data
     */
     function on(type: PositionRelation.DIRECTION, deviceInfo : DeviceInfo,
        callback: Callback<{ directionRes : DirectionResponse }>): void;

    /**
     * Spatial proximity between subscription devices。
     *
     * @since 9
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @param type Represents the device-to-device relationship type for a subscription {@code PositionRelation}.
     * @param deviceInfo Represents the device information to subscribe to {@code DeviceInfo}.
     * @param callback callback function, receive reported data
     */
    function on(type: PositionRelation.NEARBY, deviceInfo : DeviceInfo,
        callback: Callback<{ nearbyRes: NearByResponse }>): void;
		
    /**
     * Spatial distance relationship between subscription devices。
     *
     * @since 9
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @param type Represents the device-to-device relationship type for a subscription {@code PositionRelation}.
     * @param deviceInfo Represents the device information to subscribe to {@code DeviceInfo}.
     * @param callback callback function, receive reported data
     */
    function on(type: PositionRelation.DISTANCE_BT, deviceInfo : DeviceInfo,
        callback: Callback<{ distanceRes : DistanceBTResponse }>): void;

		
	/**
     * Unsubscribe from spatial azimuth relationships between devices。
     *
     * @since 9
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @param type Unsubscribe from spatial azimuth relationships between devices {@code PositionRelation}.
     * @param deviceInfo Represents device information for unsubscribed {@code DeviceInfo}.
     * @param callback callback function, receive reported data
     */
    function off(type: PositionRelation.DIRECTION, deviceInfo : DeviceInfo, 
        callback?: Callback<{ directionRes : DirectionResponse }>): void;

    /**
     * Unsubscribe from the space proximity relationship between devices。
     *
     * @since 9
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @param type Represents the device-to-device relationship type for a subscription {@code PositionRelation}.
     * @param deviceInfo Represents device information for unsubscribed {@code DeviceInfo}.
     * @param callback callback function, receive reported data
     */
    function off(type: PositionRelation.NEARBY, deviceInfo : DeviceInfo,
        callback?: Callback<{ nearbyRes: NearByResponse }>): void;
		
    /**
     * Unsubscribe from the spatial distance relationship between devices。
     *
     * @since 9
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @param type Represents the device-to-device relationship type for a subscription {@code PositionRelation}.
     * @param deviceInfo Represents device information for unsubscribed {@code DeviceInfo}.
     * @param callback callback function, receive reported data
     */
    function off(type: PositionRelation.DISTANCE_BT, deviceInfo : DeviceInfo,
        callback?: Callback<{ distanceRes : DistanceBTResponse }>): void;
}

export default spatialAwareness;