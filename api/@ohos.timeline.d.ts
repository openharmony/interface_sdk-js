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
 * 时间线模块提供用户轨迹的预测功能。
 *
 * @since 9
 * @syscap SystemCapability.Msdp.Timeline
 * @import import timeline from '@ohos.timeline'
 * @permission N/A
 */
declare namespace timeline {
    /**
     * 时间线指定场景的基本类型
     * @syscap SystemCapability.Msdp.Timeline
     */
    export enum TimelineArea {
        AREA_HOME = "areaHome",
        AREA_COMPANY = "areaCompany",
    }

    /**
     * 时间线指定场景下返回的数据的基本结构
     * @syscap SystemCapability.Msdp.Timeline
     */
    export class TimelineResponse {
        timelineArea: TimelineArea
    }

    /**
     * 订阅在指定场景下的通知
     * 
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param type Indicate the type to subscribe, {@code TimelineArea}.
     * @param callback callback function, receive reported data.
     */
    function on(type: "areaHome" | "areaCompany", callback: Callback<TimelineResponse>): void;

    /**
     * 取消在指定场景的通知的订阅
     * 
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param type Indicate the type to subscribe, {@code TimelineArea}.
     * @param callback callback function, receive reported data.
     */
    function off(type: "areaHome" | "areaCompany", callback?: Callback<TimelineResponse>): void;

    /**
     * 时间线返回指定的异常事件类型的基本类型
     * @syscap SystemCapability.Msdp.Timeline
     */
    export enum AbnormalEventType {
        DISORDER_TRAJECTORY = "disorder",
        UNUSUAL_TRAJECTORY = "unusual",
        DIFFERENT_WITH_SETTING = "different",
    }
	
	/**
     * 时间线指定的异常事件类型的基本类型
     * @syscap SystemCapability.Msdp.Timeline
     */
    export enum AbnormalType {
        ABNORMAL = "abnormal"
    }

    /**
     * 时间线指定异常事件下返回的基本数据结构
     * @syscap SystemCapability.Msdp.Timeline
     */
    export class AbnormalEventResponse {
        abnormalEvent: string
    }

    /**
     * 订阅异常事件
     * 
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param type Indicate the type to subscribe, {@code AbnormalEventType}.
     * @param callback callback function, receive reported data.
     */
    function on(type: "abnormal", callback: Callback<AbnormalEventResponse>): void;

    /**
     * 取消异常事件的订阅
     * 
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param type Indicate the type to subscribe, {@code AbnormalEventType}.
     * @param callback callback function, receive reported data.
     */
    function off(type: "abnormal", callback?: Callback<AbnormalEventResponse>): void;

    /**
     * 设定指定场景的位置信息
     *
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param longitude longitude, ranging from -180 to 180.
     * @param latitude latitude, ranging from -90 to 90.
     */
    function setPosition(type: "areaHome" | "areaCompany", longitude: number, latitude: number): void;

    /**
     * 设定白班和晚班.
     *
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param value, 0 means day shift, 1 means night shift.
     */
    function setDayAndNightShift(value: number): void;

    /**
     * Indicates the time setting type of the timeline for predicting user area.
     * @syscap SystemCapability.Msdp.Timeline
     */
    export enum UserTime {
        SLEEPTIME = "sleepTime",
        RESTTIME = "restTime",
        WORKTIME = "workTime"
    }

    /**
     * Set the time parameter for predicting user area. 
     *
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param start Start hour , ranging from 0 to 23.
     * @param end End hour , ranging from 0 to 23.
     */
    function setTime(type: "sleepTime" | "restTime" | "workTime", start: number, end: number): void;

    /**
     * 根据用户提供的小时信息预测用户是在那个场景
     *
     * @since 9
     * @syscap SystemCapability.Msdp.Timeline
     * @param hour ranging from 0 to 23.
     * @param callback callback function, receive reported data.
     */
    function getForcecastPosition(hour: number, callback: Callback<TimelineArea>): void
    function getForcecastPosition(hour: number): Promise(TimelineArea)
}

export default timeline;
