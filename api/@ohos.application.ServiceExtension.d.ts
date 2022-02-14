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

import rpc from "./@ohos.rpc";
import ServiceExtensionContext from "./application/ServiceExtensionContext";
import Want from './@ohos.application.Want';

/**
 * class of service extension.
 *
 * @since 9
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @systemapi hide for inner use.
 * @StageModelOnly
 */
export default class ServiceExtension {
    /**
     * Indicates service extension context.
     *
     * @since 9
     * @sysCap AAFwk
     * @systemapi hide for inner use.
     * @StageModelOnly
     */
    context: ServiceExtensionContext;

    /**
     * Called back when a service extension is started for initialization.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    onCreate(want: Want): void;

    /**
     * Called back before a service extension is destroyed.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    onDestroy(): void;

    /**
     * Called back when a service extension is started.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @param want Indicates the want of service extension to start.
     * @param startId Indicates the number of times the service extension has been started. The {@code startId} is
     *     incremented by 1 every time the service extension is started. For example, if the service extension
     *     has been started for six times.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    onRequest(want: Want, startId: number): void;

    /**
     * Called back when a service extension is first connected to an ability.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @param want Indicates connection information about the Service ability.
     * @systemapi hide for inner use.
     * @return Returns the proxy of the Service ability.
     * @StageModelOnly
     */
    onConnect(want: Want): rpc.RemoteObject;

    /**
     * Called back when all abilities connected to a service extension are disconnected.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @param want Indicates disconnection information about the service extension.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    onDisconnect(want: Want): void;

    /**
     * Called when a new client attempts to connect to a service extension after all previous client connections to it
     * are disconnected.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @param want Indicates the want of the service extension being connected.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    onReconnect(want: Want): void;
}

