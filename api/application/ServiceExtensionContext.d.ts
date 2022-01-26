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

import { AsyncCallback } from "../basic";
import { ConnectOptions } from "../ability/connectOptions";
import ExtensionContext from "./ExtensionContext";
import Want from "../@ohos.application.Want";
import StartOptions from "../@ohos.application.StartOptions";

/**
 * The context of service extension. It allows access to
 * serviceExtension-specific resources.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @systemapi hide for inner use.
 * @permission N/A
 */
export default class ServiceExtensionContext extends ExtensionContext {
    /**
     * Service extension uses this method to start a specific ability.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param parameter Indicates the ability to start.
     * @systemapi hide for inner use.
     * @return -
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options?: StartOptions): Promise<void>;

    /**
     * Service extension uses this method to start a specific ability with account.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param parameter Indicates the ability to start.
     * @param parameter Indicates the accountId to start.
     * @systemapi hide for inner use.
     * @return -
     */
    startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;
    startAbilityWithAccount(want: Want, accountId: number, options: StartOptions, callback: AsyncCallback<void>): void;
    startAbilityWithAccount(want: Want, accountId: number, options?: StartOptions): Promise<void>;

    /**
     * Destroys this service extension.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @systemapi hide for inner use.
     * @return -
     */
    terminateSelf(callback: AsyncCallback<void>): void;
    terminateSelf(): Promise<void>;

    /**
     * Connects an ability to a Service extension.
     *
     * <p>This method can be called by an ability or service extension, but the destination of the connection must be a
     * service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
     * service extension when the Service extension is connected.</p>
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param request Indicates the service extension to connect.
     * @systemapi hide for inner use.
     * @return connection id, int value.
     */
    connectAbility(want: Want, options: ConnectOptions): number;

    /**
     * Connects an ability to a Service extension with account.
     *
     * <p>This method can be called by an ability or service extension, but the destination of the connection must be a
     * service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
     * service extension when the Service extension is connected.</p>
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param request Indicates the service extension to connect.
     * @param request Indicates the account to connect.
     * @systemapi hide for inner use.
     * @return connection id, int value.
     */
    connectAbilityWithAccount(want: Want, accountId: number, options: ConnectOptions): number;

    /**
     * Disconnects an ability to a service extension, in contrast to
     * {@link connectAbility}.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @param connection the connection id returned from connectAbility api.
     * @systemapi hide for inner use.
     * @return -
     */
    disconnectAbility(connection: number, callback:AsyncCallback<void>): void;
    disconnectAbility(connection: number): Promise<void>;
}