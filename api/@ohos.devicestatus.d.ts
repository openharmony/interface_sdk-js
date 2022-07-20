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

import { AsyncCallback } from "./basic";

/**
 * Subscribe to user device status notifications
 *
 * @since 9
 * @syscap SystemCapability.Msdp.DeviceStatus
 * @import import sensor from '@ohos.DeviceStatus'
 * @permission N/A
 */
declare namespace DeviceStatus {
    /**
     * Behavior-aware data。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export interface ActivityResponse {
        eventType: EventType
    }
	
    /**
     * Absolutely static data。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export interface StillResponse extends ActivityResponse {}
    
    /**
     * Relatively static data。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export interface RelativeStillResponse extends ActivityResponse {}
    
    /**
     * Vertically positioned data。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export interface VerticalPositionResponse extends ActivityResponse {}
    
    /**
     * Horizontal position of the data。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export interface HorizontalPositionResponse extends ActivityResponse {}
	
    /**
     * Behavior recognition type。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export enum ActivityType {
        TYPE_STILL = "still",
        TYPE_RELATIVE_STILL = "relativeStill",
        TYPE_VERTICAL_POSITION = "verticalPosition",
        TYPE_HORIZONTAL_POSITION = "horizontalPosition"
    }

    /**
     * The event type。
     * @syscap SystemCapability.Msdp.DeviceStatus
     */
    export enum EventType {
        ENTER = 1,
        EXIT = 2,
        ENTER_EXIT = 3
    }

    /**	
     * Subscriptions are absolutely static。
     *
     * @since 9
     * @param type Subscriptions are absolutely static, {@code type: ActivityType.TYPE_STILL}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: ActivityType.TYPE_STILL, eventType: EventType, reportLatencyNs: number, callback: AsyncCallback<StillResponse>): void;
	
    /**
     * Subscriptions are relatively static。
     *
     * @since 9
     * @param type Subscriptions are relatively static, {@code type: ActivityType.TYPE_RELATIVE_STILL}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: ActivityType.TYPE_RELATIVE_STILL, eventType: EventType, reportLatencyNs: number, callback: AsyncCallback<RelativeStillResponse>): void;
	
    /**
     * Subscribe to the vertical position。
     *
     * @since 9
     * @param type Subscribe to the vertical position, {@code type: ActivityType.TYPE_VERTICAL_POSITION}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: ActivityType.TYPE_VERTICAL_POSITION, eventType: EventType, reportLatencyNs: number, callback: AsyncCallback<VerticalPositionResponse>): void;
	
    /**
     * Subscribe to horizontal locations。
     *
     * @since 9
     * @param type Subscribe to horizontal locations, {@code type: ActivityType.TYPE_HORIZONTAL_POSITION}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function on(type: ActivityType.TYPE_HORIZONTAL_POSITION, eventType: EventType, reportLatencyNs: number, callback: AsyncCallback<HorizontalPositionResponse>): void;
     
    /**
     * Query whether it is absolutely static。
     *
     * @since 9
     * @param type Query whether it is absolutely static, {@code type: ActivityType.TYPE_STILL}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function once(type: ActivityType.TYPE_STILL, callback: AsyncCallback<StillResponse>): void;
	
    /**
     * Query whether it is relatively stationary。
     *
     * @since 9
     * @param type Query whether it is relatively stationary, {@code type: ActivityType.TYPE_RELATIVE_STILL}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function once(type: ActivityType.TYPE_RELATIVE_STILL, callback: AsyncCallback<RelativeStillResponse>): void;
	
    /**
     * Query whether the vertical position is。
     *
     * @since 9
     * @param type Query whether the vertical position is, {@code type: ActivityType.TYPE_VERTICAL_POSITION}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function once(type: ActivityType.TYPE_VERTICAL_POSITION, callback: AsyncCallback<VerticalPositionResponse>): void;
	
    /**
     * Query whether the horizontal position is。
     *
     * @since 9
     * @param type Query whether the horizontal position is, {@code type: ActivityType.TYPE_HORIZONTAL_POSITION}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function once(type: ActivityType.TYPE_HORIZONTAL_POSITION, callback: AsyncCallback<HorizontalPositionResponse>): void;
	
    /**
     * Unsubscribe absolutely static。
     *
     * @since 9
     * @param type Unsubscribe absolutely static, {@code type: ActivityType.TYPE_STILL}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function off(type: ActivityType.TYPE_STILL, eventType: EventType, callback?: AsyncCallback<void>): void;
    
    /**
     * Unsubscribe is relatively static。
     *
     * @since 9
     * @param type Unsubscribe is relatively static, {@code type: ActivityType.TYPE_RELATIVE_STILL}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function off(type: ActivityType.TYPE_RELATIVE_STILL, eventType: EventType, callback?: AsyncCallback<void>): void;
    
    /**
     * Unsubscribe from the vertical location。
     *
     * @since 9
     * @param type Unsubscribe from the vertical location, {@code type: ActivityType.TYPE_VERTICAL_POSITION}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function off(type: ActivityType.TYPE_VERTICAL_POSITION, eventType: EventType, callback?: AsyncCallback<void>): void;
    
    /**
     * Unsubscribe from horizontal locations。
     *
     * @since 9
     * @param type Unsubscribe from horizontal locations, {@code type: ActivityType.TYPE_HORIZONTAL_POSITION}.
     * @param eventType enter and exit event.
     * @param reportLatencyNs report event latency.
     * @param callback callback function, receive reported data.
     */
    function off(type: ActivityType.TYPE_HORIZONTAL_POSITION, eventType: EventType, callback?: AsyncCallback<void>): void;
}
export default DeviceStatus;