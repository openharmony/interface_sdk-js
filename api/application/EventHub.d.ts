/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * The event center of a context, support the subscription and publication of events.
 *
 * @since 9
 * @sysCap SystemCapability.Ability.AbilityRuntime.Core
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @StageModelOnly
 */
export default class EventHub {
   /**
    * Subscribe to an event.
    *
    * @devices phone, tablet, tv, wearable, car
    * @since 9
    * @sysCap SystemCapability.Ability.AbilityRuntime.Core
    * @param event Indicates the event.
    * @param callback Indicates the callback.
    * @return -
    * @StageModelOnly
    */
   on(event: string, callback: Function): void

   /**
    * Unsubscribe from an event.
    *
    * @devices phone, tablet, tv, wearable, car
    * @since 9
    * @sysCap SystemCapability.Ability.AbilityRuntime.Core
    * @param event Indicates the event.
    * @param callback Indicates the callback.
    * @return -
    * @StageModelOnly
    */
   off(event: string, callback?: Function): void

   /**
    * Trigger the event callbacks.
    *
    * @devices phone, tablet, tv, wearable, car
    * @since 9
    * @sysCap SystemCapability.Ability.AbilityRuntime.Core
    * @param event Indicates the event.
    * @param args Indicates the callback arguments.
    * @return -
    * @StageModelOnly
    */
   emit(event: string, ...args: Object[]): void
}