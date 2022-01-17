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
import { AbilityDelegator } from './app/abilityDelegator'
import { AbilityDelegatorArgs } from './app/abilityDelegatorArgs'

/**
 * A global register used to store the AbilityDelegator and AbilityDelegatorArgs objects registered
 * during application startup.
 * 在应用程序启动期间，保存AbilityDelegator和AbilityDelegatorArgs对象的全局存储器
 *
 * @since 8
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import abilityManager from '@ohos.app.abilityManager'
 * @permission N/A
 */
declare namespace abilityDelegatorRegistry {
    /**
     * Get the AbilityDelegator object of the application.
     * 异步方式获取应用程序的AbilityDelegator对象
     * @return the AbilityDelegator object initialized when the application is started.
     * 应用程序启动时被初始化的AbilityDelegator对象
     */
    function getAbilityDelegator(callback: AsyncCallback<AbilityDelegator>): void;
    function getAbilityDelegator(): Promise<AbilityDelegator>;

    /**
     * Get unit test parameters stored in the AbilityDelegatorArgs object.
     * 异步的方式获取单元测试参数AbilityDelegatorArgs对象
     * @return the previously registered AbilityDelegatorArgs object.
     * 单元测试参数AbilityDelegatorArgs对象
     */
    function getArguments(callback: AsyncCallback<AbilityDelegatorArgs>): void;
    function getArguments(): Promise<AbilityDelegatorArgs>;​

    /**
     * Describes all lifecycle states of an ability.
     */
    export enum AbilityLifecycleState {
        CREATE,
        FOREGROUND,
        BACKGROUND,
        DESTROY,
    }
}

export default abilityDelegatorRegistry;