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
import { AbilityInfo } from "./abilityinfo"

/**
 * @name BundleInfo
 * @since 6
 * @SysCap appexecfwk
 * @import NA
 * @permission NA
 * @devices phone
 * @testapi
 */
export interface BundleInfo {
    /**
     * The bundle name.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    name: string;

    /**
     * The label of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    label: string;

    /**
     * The description of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    description: string;

    /**
     * The vendor of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    vendor: string;

    /**
     * The version code of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
    versionCode: number;

    /**
     * The version name of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     versionName: string;

    /**
     * The jointUserId of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     jointUserId: string;

    /**
     * The min SDK version of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     minSdkVersion: number;

    /**
     * The max SDK version of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     maxSdkVersion: number;

    /**
     * The main entry path of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     mainEntry: string;

    /**
     * The cpuAbi of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     cpuAbi:string;

    /**
     * The appId of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     appId:string;

    /**
     * The compatible version of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     compatibleVersion: number;

    /**
     * The target version of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     targetVersion: number;

    /**
     * The release type of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     releaseType: string;

    /**
     * The uid of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     uid: number;

    /**
     * The gid of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     gid: number;

    /**
    * The seInfo of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     seInfo: string;

    /**
     * The entry module name of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     entryModuleName: string;

    /**
     * Whether the bundle is keep alive.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     isKeepAlive: boolean;

    /**
     * Whether the bundle is a native application.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     isNativeApp: boolean;

    /**
     * The install time of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     installTime: number;

    /**
     * The update time of this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     updateTime: number;

    /**
     * The information of the abilities in this bundle.
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap BMS
     */
     abilityInfos: Array<AbilityInfo>;
}