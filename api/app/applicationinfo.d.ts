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
import { ModuleInfo } from "./moduleinfo"

/**
 * @name ApplicationInfo
 * @since 6
 * @SysCap appexecfwk
 * @import NA
 * @permission NA
 * @devices phone
 * @testapi
 */
export interface ApplicationInfo {
    /**
     * The application name.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    name: string;

    /**
     * The bundleName is same to the application name.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    bundleName: string;

    /**
     * The description of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    description: string;

    /**
     * The icon path of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    iconPath: string;

    /**
     * The label of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    label: string;

    /**
     * The label resource ID of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    labelId : number;

    /**
     * The icon resource ID of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    iconId : number;

    /**
     * The description resource ID of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    descriptionId : number;

    /**
     * The device id of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    deviceId: string;

    /**
     * The public key info of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    signatureKey: string;

    /**
     * Whether this application is a system application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    isSystemApp: boolean;

    /**
     * Whether this application is a launcher application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    isLauncherApp: boolean;

    /**
     * Whether the application support the driving mode, 0 means not support.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    supportedModes: number;

    /**
     * The process of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    process: string;

    /**
     * The permissions of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    permissions: Array<string>;

    /**
     * The module source directories of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    moduleSourceDirs: Array<string>;

    /**
     * The module information of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    moduleInfos: Array<ModuleInfo>;

    /**
     * The entry module path of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    entryDir: string;

    /**
     * The code path of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    codePath: string;

    /**
     * The data directory of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    dataDir: string;

    /**
    * The data base directory of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    dataBaseDir: string;

    /**
     * The cache directory of this application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    cacheDir: string;
}