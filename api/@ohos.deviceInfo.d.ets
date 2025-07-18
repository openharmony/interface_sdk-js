/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit BasicServicesKit
 */

/**
 * A static class pertaining to the product information.
 *
 * @namespace deviceInfo
 * @syscap SystemCapability.Startup.SystemInfo
 * @crossplatform
 * @since 20
 * @arkts 1.2
 */
declare class deviceInfo {
    
    /**
     * Obtains the device type represented by a string,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 20
     * @arkts 1.2
     */
    static get deviceType(): string;
    
    /**
     * Obtains the external product series represented by a string.
     *
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 20
     * @arkts 1.2
     */  
    static get brand(): string;
    
    /**
     * Obtains the product series represented by a string.
     *
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 20
     * @arkts 1.2
     */
    static get productSeries(): string;
    
    
    /**
     * Obtains the product model represented by a string.
     *
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 20
     * @arkts 1.2
     */
    static get productModel(): string;

    /**
     * Obtains the SDK API version number.
     *
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 20
     * @arkts 1.2
     */
    static get sdkApiVersion(): int;

    /**
     * Open Device Identifier (ODID): a developer-level non-permanent device identifier.
     * A developer can be an enterprise or individual developer.
     * Example: dff3cdfd-7beb-1e7d-fdf7-1dbfddd7d30c
     *
     * An ODID will be regenerate in the following scenarios:
     * Restore a phone to its factory settings.
     * Uninstall and reinstall all apps of one developer on one device.
     *
     * An ODID is generated based on the following rules:
     * For apps from the same developer, which are running on the same device, they have the same ODID.
     * For apps from different developers, which are running on the same device, each of them has its own ODID.
     * For apps from the same developer, which are running on different devices, each of them has its own ODID.
     * For apps from different developers, which are running on different devices, each of them has its own ODID.
     *
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 20
     * @arkts 1.2
     */
    static get ODID(): string;
}
export default deviceInfo;
