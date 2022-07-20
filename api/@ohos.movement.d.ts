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

import { Callback } from "./basic";

/**
 * Subscribe to user move status notifications
 *
 * @since 9
 * @syscap SystemCapability.Msdp.Movement
 * @import import sensor from '@ohos.movement'
 * @permission N/A
 */
declare namespace movement {
    /**
     * The basic data structure of a move state event。
     * @syscap SystemCapability.Msdp.Movement
     */
    export interface MovementResponse {
        movementValue: MovementValue
    }
	
    /**
     * Data on ride events。
     * @syscap SystemCapability.Msdp.Movement
     */
    export interface InAutoResponse extends MovementResponse {}

     /**
     * Data on cycling events。
     * @syscap SystemCapability.Msdp.Movement
     */
    export interface OnBicycleResponse extends MovementResponse {}

    /**
     * Walk the data of the event。
     * @syscap SystemCapability.Msdp.Movement
     */
    export interface WalkingResponse extends MovementResponse {}

    /**
     * Data for running events。
     * @syscap SystemCapability.Msdp.Movement
     */
    export interface RuningResponse extends MovementResponse {}
	
    /**
     * The move state type。
     * @syscap SystemCapability.Msdp.Movement
     */
    export enum MovementType {
        TYPE_IN_AUTO = "inAuto",
        TYPE_ON_BICYCLE = "inBicycle",
        TYPE_WALKING = "walking",
        TYPE_RUNNING = "running",
    }
	
    /**
     * The move status value。
     * @syscap SystemCapability.Msdp.Movement
     */
    export enum MovementValue {
        ENTER = 1,
        EXIT = 2,
        ENTER_EXIT = 3
    }
	
    /**
     * Subscribe to notifications of the mobility status of your ride。
     *
     * @since 9
     * @param type Subscribe to notifications of the mobility status of your ride, {@code type: MovementType.TYPE_IN_AUTO}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: MovementType.TYPE_IN_AUTO, eventType: MovementValue, reportLatencyNs: number, callback: Callback<InAutoResponse>): void;

    /**
     * Subscribe to notifications of the movement status of your bike。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_ON_BICYCLE}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: MovementType.TYPE_ON_BICYCLE, eventType: MovementValue, reportLatencyNs: number, callback: Callback<OnBicycleResponse>): void;

    /**
     * Subscribe to mobile status notifications for walks。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_WALKING}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: MovementType.TYPE_WALKING, eventType: MovementValue, reportLatencyNs: number, callback: Callback<WalkingResponse>): void;

    /**
     * Subscribe to notifications of the movement status of your run。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_RUNNING}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: MovementType.TYPE_RUNNING, eventType: MovementValue, reportLatencyNs: number, callback: Callback<RuningResponse>): void;

    /**
     * Check if you are in the car。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code MovementType.TYPE_IN_AUTO}.
     * @param callback callback function, receive reported data.
     */
    function once(type: MovementType.TYPE_IN_AUTO, callback: Callback<InAutoResponse>): void;


    /**
     * Check if you're riding a bike。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code MovementType.TYPE_ON_BICYCLE}.
     * @param callback callback function, receive reported data.
     */
    function once(type: MovementType.TYPE_ON_BICYCLE, callback: Callback<OnBicycleResponse>): void;


    /**
     * Query whether it is the status of walking。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code MovementType.TYPE_WALKING}.
     * @param callback callback function, receive reported data.
     */
    function once(type: MovementType.TYPE_WALKING, callback: Callback<WalkingResponse>): void;

    /**
     * Query whether it is the status of running。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code MovementType.TYPE_RUNNING}.
     * @param callback callback function, receive reported data.
     */
    function once(type: MovementType.TYPE_RUNNING, callback: Callback<RuningResponse>): void;

    /**
     * Unsubscribe from the ride's mobile status notification。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_IN_AUTO}.
     * @param eventType enter and exit event.
     * @param callback callback function, receive reported data.
     */
    function off(type: MovementType.TYPE_IN_AUTO, eventType: MovementValue, callback?: Callback<InAutoResponse>): void;
	
    /**
     * Unsubscribe from the bike's mobile status notification。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_ON_BICYCLE}.
     * @param eventType enter and exit event.
     * @param callback callback function, receive reported data.
     */
    function off(type: MovementType.TYPE_ON_BICYCLE, eventType: MovementValue, callback?: Callback<OnBicycleResponse>): void;
	
    /**
     * Unsubscribe from mobile status notifications for walks。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_WALKING}.
     * @param eventType enter and exit event.
     * @param callback callback function, receive reported data.
     */
    function off(type: MovementType.TYPE_WALKING, eventType: MovementValue, callback?: Callback<WalkingResponse>): void;

    /**
     * Unsubscribe from the run's motion status notification。
     *
     * @since 9
     * @param type The mobile state type of the subscription, {@code type: MovementType.TYPE_RUNNING}.
     * @param eventType enter and exit event.
     * @param callback callback function, receive reported data.
     */
    function off(type: MovementType.TYPE_RUNNING, eventType: MovementValue, callback?: Callback<RuningResponse>): void;
}

export default movement;

