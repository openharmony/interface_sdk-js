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
 * 订阅地理围栏的通知.
 *
 * @since 9
 * @syscap SystemCapability.Msdp.Geofence
 * @import import sensor from '@ohos.geofense'
 * @permission N/A
 */
declare namespace geofence {

    /**
     * 订阅点围栏.
     * 
     * @since 9
     * @param type Indicate the type to subscribe, {@code GeofenceType.TYPE_POINT_FENCE}.
     * @param option Optional parameters specify optional parameters for point fence, {@code Option}.
     * @param callback callback function, receive reported data.
     */
    function on(type: GeofenceType.TYPE_POINT_FENCE, option: PointOption, callback: Callback<PointFenceResponse>): void;

    /**
     * 取消点围栏的订阅.
     * 
     * @since 9
     * @param type Indicate the type to subscribe, {@code GeofenceType.TYPE_POINT_FENCE}.
     * @param option Optional parameters specify optional parameters for point fence, {@code Option}.
     * @param callback callback function, receive reported data.
     */
    function off(type: GeofenceType.TYPE_POINT_FENCE, option: PointOption, callback?: Callback<PointFenceResponse>): void;

    /**
     * 订阅多边形围栏.
     * 
     * @since 9
     * @param type Indicate the type to subscribe, {@code GeofenceType.TYPE_POLYGON_FENCE}.
     * @param option Optional parameters specify optional parameters for reporting polygon fence, {@code Option}.
     * @param callback callback function, receive reported data.
     */
    function on(type: GeofenceType.TYPE_POLYGON_FENCE, option: PolygonOption, callback: Callback<PolygonFenceResponse>): void;

    /**
     * 取消多边形围栏订阅.
     * 
     * @since 9
     * @param type Indicate the type to subscribe, {@code GeofenceType.TYPE_POLYGON_FENCE}.
     * @param option Optional parameters specify optional parameters for reporting polygon fence, {@code Option}.
     * @param callback callback function, receive reported data.
     */
    function off(type: GeofenceType.TYPE_POLYGON_FENCE, option: PolygonOption, callback?: Callback<PolygonFenceResponse>): void;

    /**
     * 设定防呆策略的时间
     * 
     * @since 9
     * @param minuteTime time, greater than or equal to 0.
     */
    function setFoolProofTime(inuteTime: number): void;


    /**
     * 地理围栏的订阅类型
     * @syscap SystemCapability.Msdp.Geofence
     */
    export enum GeofenceType{
        /**
         * Point fence
         */
        TYPE_POINT_FENCE = "typePointFence",
        /**
         * Polygon fence
         */
        TYPE_POLYGON_FENCE = "typePolygonFence",
    }

    /**
     * 地理围栏的状态值
     * @syscap SystemCapability.Msdp.Geofence
     */
    export enum GeofenceValue {
        /**
         * Outside the fence
         */
        VALUE_OUTSIDE = "outside",
        /**
         * Inside the fence
         */
        VALUE_INSIDE = "inside",
        /**
         * Enter the fence
         */
        VALUE_ENTER = "enter",
        /**
         * Exit the fence
         */
        VALUE_EXIT = "exit",
    }

    /**
     * 点围栏的选项参数 
     * @syscap SystemCapability.Msdp.Geofence
     */
    export interface PointOption {
        /**
         * Coordinates of the center point of the fence
         */
        centerCoordinate: Array<number>;
        /**
         * Radius of fence
         */
        radius: number;
    }

    /**
     * 多边形围栏的选项参数 
     * @syscap SystemCapability.Msdp.Geofence
     */
    export interface PolygonOption {
        /**
         * Keyword of fence
         */
        keyword: string;
        /**
         * Type of fence
         */
        type: string;
        /**
         * City of fence
         */
        city: string;
    }

    /**
     * 围栏的基本数据结构
     * @syscap SystemCapability.Msdp.Geofence
     */
    export interface GeofenceResponse {
        geofenceValue: GeofenceValue;
    }

    /**
     * 点围栏的数据结构
     * @syscap SystemCapability.Msdp.Geofence
     */
    export interface PointFenceResponse extends GeofenceResponse {}

    /**
     * 多边形围栏的数据结构
     * @syscap SystemCapability.Msdp.Geofence
     */
    export interface PolygonFenceResponse extends GeofenceResponse {}
}

export default geofence;