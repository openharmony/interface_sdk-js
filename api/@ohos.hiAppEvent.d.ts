/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';

/**
 * Provides the event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @since 7
 * @syscap SystemCapability.HiviewDFX.HiAppEvent
 */
declare namespace hiAppEvent {
    /**
     * Enumerate application event types.
     *
     * @since 7
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    enum EventType {
        /**
         * Fault event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        FAULT = 1,

        /**
         * Statistic event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        STATISTIC = 2,

        /**
         * Security event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        SECURITY = 3,

        /**
         * User behavior event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        BEHAVIOR = 4
    }

    /**
     * Preset event.
     *
     * @since 7
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    namespace Event {
        /**
         * user login event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        const USER_LOGIN: string;

        /**
         * user logout event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        const USER_LOGOUT: string;

        /**
         * distributed service event.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        const DISTRIBUTED_SERVICE_START: string;
    }

    /**
     * Preset param.
     *
     * @since 7
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    namespace Param {
        /**
         * user id.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        const USER_ID: string;

        /**
         * distributed service name.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        const DISTRIBUTED_SERVICE_NAME: string;

        /**
         * distributed service instance id.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        const DISTRIBUTED_SERVICE_INSTANCE_ID: string;
    }

    /**
     * write application event.
     *
     * @since 7
     * @deprecated since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @static
     * @param {string} eventName application event name.
     * @param {EventType} eventType application event type.
     * @param {object} keyValues application event key-value pair params.
     * @param {AsyncCallback} [callback] callback function.
     * @return {void | Promise<void>} no callback return Promise otherwise return void.
     */
    function write(eventName: string, eventType: EventType, keyValues: object): Promise<void>;
    function write(eventName: string, eventType: EventType, keyValues: object, callback: AsyncCallback<void>): void;

    /**
     * application event logging configuration interface.
     *
     * @since 7
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @static
     * @param {ConfigOption} config application event logging configuration item object.
     * @return {boolean} configuration result.
     */
    function configure(config: ConfigOption): boolean;

    /**
     * Describe the options for the configuration.
     *
     * @since 7
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    interface ConfigOption {
        /**
         * configuration item: application event logging switch.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        disable?: boolean;

        /**
         * configuration item: event file directory storage quota size.
         *
         * @since 7
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         */
        maxStorage?: string;
    }

    /**
     * Definition of written application event information.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    interface AppEventInfo {
        /**
         * The domain of the event.
         */
        domain: string;

        /**
         * The name of the event.
         */
        name: string;

        /**
         * The type of the event.
         */
        eventType: EventType;

        /**
         * The params of the event.
         */
        params: object;
    }

    /**
     * write application event.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @static
     * @param {AppEventInfo} info application event information to be written.
     * @param {AsyncCallback} [callback] callback function.
     * @return {void | Promise<void>} no callback return Promise otherwise return void.
     */
     function write(info: AppEventInfo): Promise<void>;
     function write(info: AppEventInfo, callback: AsyncCallback<void>): void;

    /**
     * Definition of the read event package.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    interface AppEventPackage {
        /**
         * The id of the package.
         */
        packageId: number;

        /**
         * The number of events contained in the package.
         */
        row: number;

        /**
         * The total size of events contained in the package.
         */
        size: number;

        /**
         * The events data contained in the package.
         */
        data: string[];
    }

    /**
     * Definition of event holder object, which is used to read the event data monitored by the watcher.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    class AppEventPackageHolder {
        /**
         * Constructor for AppEventPackageHolder.
         *
         * @since 9
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @param {string} watcherName name of the watcher to read.
         */
        constructor(watcherName: string);

        /**
         * Set the threshold size per read.
         *
         * @since 9
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @param {number} size threshold size.
         */
        setSize(size: number): void;

        /**
         * Read the event data monitored by the watcher.
         *
         * @since 9
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @return {AppEventPackage} the read event package.
         */
        takeNext(): AppEventPackage;
    }

    /**
     * Definition of the condition for triggering callback when the watcher monitors event data.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    interface TriggerCondition {
        /**
         * The number of write events that trigger callback.
         */
        row?: number;

        /**
         * The size of write events that trigger callback.
         */
        size?: number;

        /**
         * The interval for triggering callback.
         */
        timeOut?: number;
    }

    /**
     * Definition of event filter object, which is used to filter events monitored by the watcher.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    interface AppEventFilter {
        /**
         * The name of the event domain to be monitored by the watcher.
         */
        domain: string;

        /**
         * The types of the events to be monitored by the watcher.
         */
        eventTypes?: EventType[];
    }

    /**
     * Definition of event watcher object, which is used to monitor written event data.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     */
    interface Watcher {
        /**
         * The name of watcher.
         */
        name: string;

        /**
         * The condition for triggering callback.
         */
        triggerCondition?: TriggerCondition;

        /**
         * The event filters for monitoring events.
         */
        appEventFilters?: AppEventFilter[];

        /**
         * The callback function of watcher.
         */
        onTrigger?: (curRow: number, curSize:number, holder:AppEventPackageHolder) => void;
    }

    /**
     * Add event watcher.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @static
     * @param {Watcher} watcher watcher object for monitoring events.
     * @return {AppEventPackageHolder} holder object, which is used to read the monitoring data of the watcher.
     */
    function addWatcher(watcher: Watcher): AppEventPackageHolder;

    /**
     * Remove event watcher.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @static
     * @param {Watcher} watcher watcher object for monitoring events.
     */
    function removeWatcher(watcher: Watcher): void;

    /**
     * Clear all local logging data of the application.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @static
     */
    function clearData(): void;
}

export default hiAppEvent;