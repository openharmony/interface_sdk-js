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

/**
 * Provide methods for matching monitored Ability objects that meet specified conditions.
 * The most recently matched Ability objects will be saved in the AbilityMonitor object.
 * 监听指定Ability生命周期状态变化的监听器
 *
 * @since 8
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import AbilityMonitor from 'application/abilityMonitor.d'
 * @permission N/A
 */
export interface AbilityMonitor {
    /**
     * The name of the ability to monitor.
     * 表示当前AbilityMonitor绑定的ability name
     */
    abilityName: string;

    /**
     * Called back when the ability is started for initialization.
     * ability被启动初始化时的回调函数
     */
    onAbilityCreate?:() => void;

    /**
     * Called back when the state of the ability changes to foreground.
     * ability状态变成前台时的回调函数
     */
    onAbilityForeground?:() => void;

    /**
     * Called back when the state of the ability changes to background.
     * ability状态变成后台时的回调函数
     */
    onAbilityBackground?:() => void;

    /**
     * Called back before the ability is destroyed.
     * ability被销毁前的回调函数
     */
    onAbilityDestroy?:() => void;

    /**
     * Called back when an ability window stage is created.
     * window stage被创建时的回调函数
     */
    onWindowStageCreate?:() => void;

    /**
     * Called back when an ability window stage is restored.
     * window stage被重载时的回调函数
     */
    onWindowStageRestore?:() => void;

    /**
     * Called back when an ability window stage is destroyed.
     * window stage被销毁前的回调函数
     */
    onWindowStageDestroy?:() => void;
}

export default AbilityMonitor;