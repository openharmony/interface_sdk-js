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

import { ApplicationInfo } from "./applicationinfo"

/**
 * @name AbilityInfo
 * @since 6
 * @SysCap appexecfwk
 * @import NA
 * @permission NA
 * @devices phone
 * @testapi
 */
export interface AbilityInfo {
    /**
     * The ability name, only the main class name.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    name: string;

    /**
     * The label of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    label: string;

    /**
     * The description of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    description: string;

    /**
     * The path of the icon of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    iconPath: string;

    /**
     * Whether the ability can be invoked by other applications.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    visible: boolean;

    /**
     * The ability category: page, service, data.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    kind: string;

    /**
     * The type of this ability, 0 means UNKNOWN, 1 means PAGE, 2 means SERVICE, 3 means DATA.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    type: number;

    /**
     * The display orientation of this ability: 0 means UNSPECIFIED, 1 means LANDSCAPE, 2 means PORTRAIT, 3 means FOLLOWRECENT.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    orientation: number;

    /**
     * The launch mode of this ability: 0 means SINGLETON, 1 means SINGLETOP, 2 means STANDARD.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    launchMode: number;

    /**
     * Represents Ability of another application The permission that needs to be applied when this Ability is invoked.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    permissions: Array<string>;

    /**
     * The process name of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    process: string;

    /**
     * The supported device types of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    deviceTypes: Array<string>;

    /**
     * The ability of the device to limit.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    deviceCapabilities: Array<string>;

    /**
     * Uniform resource identifier representing Ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    uri: string;

    /**
     * The application information of this ability.
     * @devices phone
     */
    applicationInfo: ApplicationInfo;

    /**
     * The "module.package" in config.json.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    package: string;

    /**
     * The bundle name of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    bundleName: string;

    /**
     * The "module.name" in config.json of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    moduleName: string;

    /**
     * The "bundleName" in config.json of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    applicationName: string;

    /**
     * The device id.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    deviceId: string;

    /**
     * The main code path of this ability.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    codePath: string;

    /**
     * The resource path of this ability
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    resourcePath: string;

    /**
     * The library path of this ability
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    libPath: string;
}