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

/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export default class Context {
    /**
     * Indicates the capability of accessing application resources.
     *
     * @since 8
     * @sysCap AAFwk
     */
    resourceManager: resmgr.ResourceManager;

    /**
     * Indicates configuration information about an application.
     *
     * @since 8
     * @sysCap AAFwk
     */
    applicationInfo: ApplicationInfo;

    /**
     * Indicates app cache dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    cacheDir: string;

    /**
     * Indicates app temp dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    tempDir: string;

    /**
     * Indicates app files dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    filesDir : string;

    /**
     * Indicates app database dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    databaseDir : string;

    /**
     * Indicates app storage dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    storageDir : string;

    /**
     * Indicates app bundle code dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    bundleCodeDir : string;

    /**
     * Indicates app distributed files dir.
     *
     * @since 8
     * @sysCap AAFwk
     */
    distributedFilesDir: string;

    /**
     * Create a bundle context
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @systemapi hide for inner use.
     * @param bundleName Indicates the bundle name.
     * @return application context
     */
    createBundleContext(bundleName: string): Context;

     /**
     * Get application context
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @return application context
     */
    getApplicationContext(): Context;
}