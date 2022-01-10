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
import ApplicationStateObserver from './application/ApplicationStateObserver';
import AppStateData from './application/AppStateData';

/**
 * This module provides the function of app manager service.
 *
 * @since 8
 * @SysCap appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import appManager from '@ohos.application.appManager'
 * @permission N/A
 */
declare namespace appManager {
    /**
     * Register application state observer.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @SysCap appexecfwk
     * @param observer The application state observer.
     * @return Returns the number code of the observer.
     */
    function registerApplicationStateObserver(observer: ApplicationStateObserver): number;

    /**
     * Unregister application state observer.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @SysCap appexecfwk
     * @param observerId Indicates the number code of the observer.
     * @return -
     */
    function unregisterApplicationStateObserver(observerId: number,  callback: AsyncCallback<void>): void;
    function unregisterApplicationStateObserver(observerId: number): Promise<void>;

    /**
     * getForegroundApplications.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @SysCap appexecfwk
     * @return Returns the list of AppStateData.
     */
     function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void;
     function getForegroundApplications(): Promise<Array<AppStateData>>;
}

export default appManager;
