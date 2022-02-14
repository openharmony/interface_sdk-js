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

import { ApplicationInfo } from "../bundle/applicationInfo";
import resmgr from "../@ohos.resourceManager";
import BaseContext from "./BaseContext";
import EventHub from "./EventHub";

/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @since 9
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @StageModelOnly
 */
export default class Context extends BaseContext {
    /**
     * Indicates the capability of accessing application resources.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    resourceManager: resmgr.ResourceManager;

    /**
     * Indicates configuration information about an application.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    applicationInfo: ApplicationInfo;

    /**
     * Indicates app cache dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    cacheDir: string;

    /**
     * Indicates app temp dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    tempDir: string;

    /**
     * Indicates app files dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    filesDir : string;

    /**
     * Indicates app database dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    databaseDir : string;

    /**
     * Indicates app storage dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    storageDir : string;

    /**
     * Indicates app bundle code dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    bundleCodeDir : string;

    /**
     * Indicates app distributed files dir.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    distributedFilesDir: string;

    /**
     * Indicates event hub.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
    eventHub: EventHub;

    /**
     * Create a bundle context
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @systemapi hide for inner use.
     * @param bundleName Indicates the bundle name.
     * @return application context
     * @StageModelOnly
     */
    createBundleContext(bundleName: string): Context;

     /**
     * Get application context
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return application context
     * @StageModelOnly
     */
    getApplicationContext(): Context;
}