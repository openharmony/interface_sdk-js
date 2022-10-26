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

import { AsyncCallback } from './basic';
import * as _ErrorObserver from './application/ErrorObserver';

/**
 * This module provides the function of error manager.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @import import errorManager from '@ohos.application.errorManager'
 * @permission N/A
 * @deprecated since 9
 * @useinstead ohos.app.ability.errorManager
 */
declare namespace errorManager {
    /**
     * Register error observer.
     *
     * @default -
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param observer The error observer.
     * @return Returns the number code of the observer.
     */
    function registerErrorObserver(observer: ErrorObserver): number;

    /**
     * Unregister error observer.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param observerId Indicates the number code of the observer.
     * @return -
     */
    function unregisterErrorObserver(observerId: number,  callback: AsyncCallback<void>): void;
    function unregisterErrorObserver(observerId: number): Promise<void>;

    /**
     * The observer will be called by system when an error occurs.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    export type ErrorObserver = _ErrorObserver.default
}

export default errorManager;
