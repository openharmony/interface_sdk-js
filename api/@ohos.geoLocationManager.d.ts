/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import { AsyncCallback, Callback } from './basic';
import { WantAgent } from './@ohos.wantAgent';

/**
 * Provides interfaces for initiating location requests, ending the location service,
 * and obtaining the location result cached by the system.
 *
 * @since 9
 */
declare namespace geoLocationManager {
    /**
     * Registering the callback function for listening to country code changes.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback Indicates the callback for reporting country code changes.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301500 - Failed to query the area information.
     */
    function on(type: 'countryCodeChange', callback: Callback<CountryCode>): void;

    /**
     * Unregistering the callback function for listening to country code changes.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback Indicates the callback for reporting country code changes.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301500 - Failed to query the area information.
     */
    function off(type: 'countryCodeChange', callback?: Callback<CountryCode>): void;

    /**
     * Enable location switch
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @param callback Indicates the callback for reporting the error message.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function enableLocation(callback: AsyncCallback<void>): void;
    function enableLocation(): Promise<void>;

    /**
     * Disable location switch
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @param callback Indicates the callback for reporting the error message.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function disableLocation(callback: AsyncCallback<void>): void;
    function disableLocation(): Promise<void>;

    /**
     * Obtain the current country code.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback Indicates the callback for reporting the country code.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301500 - Failed to query the area information.
     */
    function getCountryCode(callback: AsyncCallback<CountryCode>): void;
    function getCountryCode(): Promise<CountryCode>;

    /**
     * Enable the geographical location simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param callback Indicates a callback function, which is used to report the error message. 
     * If the enabling fails, the error message will be carried in the first parameter 
     * err of AsyncCallback, If enabling succeeds, no data will be returned.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function enableLocationMock(callback: AsyncCallback<void>): void;
    function enableLocationMock(): Promise<void>;

    /**
     * Disable the geographical location simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param callback Indicates a callback function, which is used to report the result 
     * of disabling the location simulation function. If the disabling fails, the error message will
     * be carried in the first parameter err of AsyncCallback, If disabling succeeds, no data will be returned.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function disableLocationMock(callback: AsyncCallback<void>): void;
    function disableLocationMock(): Promise<void>;

    /**
     * Set the configuration parameters for location simulation.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param config Indicates the configuration parameters for location simulation.
     * @param callback Indicates a callback function, which is used to report the result of setting 
     * the simulation locations. If the setting fails, the error message will be carried in the first 
     * parameter err of AsyncCallback. If the setting succeeds, no data will be returned.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function setMockedLocations(config: LocationMockConfig, callback: AsyncCallback<void>): void;
    function setMockedLocations(config: LocationMockConfig): Promise<void>;

    /**
     * Enable the reverse geocoding simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param callback Indicates a callback function, which is used to report the result 
     * of enabling the reverse geocode simulation function. If the enabling fails, the error message will
     * be carried in the first parameter err of AsyncCallback, If enabling succeeds, no data will be returned.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function enableReverseGeocodingMock(callback: AsyncCallback<void>): void;
    function enableReverseGeocodingMock(): Promise<void>;

    /**
     * Disable the reverse geocoding simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param callback Indicates a callback function, which is used to report the result 
     * of disabling the reverse geocode simulation function. If the disabling fails, the error message will
     * be carried in the first parameter err of AsyncCallback, If disabling succeeds, no data will be returned.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function disableReverseGeocodingMock(callback: AsyncCallback<void>): void;
    function disableReverseGeocodingMock(): Promise<void>;

    /**
     * Set the configuration parameters for simulating reverse geocoding.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param mockInfos Indicates the set of locations and place names to be simulated.
     * @param callback Indicates a callback function, which is used to report the result of setting 
     * the configuration parameters for simulating reverse geocoding. If the setting fails, 
     * the error message will be carried in the first parameter err of AsyncCallback. 
     * If the setting succeeds, no data will be returned.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function setReverseGeocodingMockInfo(mockInfos: Array<ReverseGeocodingMockInfo>, callback: AsyncCallback<void>): void;
    function setReverseGeocodingMockInfo(mockInfos: Array<ReverseGeocodingMockInfo>): Promise<void>;

    /**
     * Querying location privacy protocol confirmation status.
     *
     * @since 9
     * @systemapi
     * @syscap SystemCapability.Location.Location.Core
     * @param type indicates location privacy protocol type.
     * @param callback indicates the callback for reporting the location privacy protocol confirmation status.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function isLocationPrivacyConfirmed(type: LocationPrivacyType, callback: AsyncCallback<boolean>): void;
    function isLocationPrivacyConfirmed(type: LocationPrivacyType,): Promise<boolean>;

    /**
     * Set location privacy protocol confirmation status.
     *
     * @since 9
     * @systemapi
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @param type indicates location privacy protocol type.
     * @param isConfirmed indicates whether the location privacy protocol has been confirmed.
     * @param callback Indicates the callback for reporting error message.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 901 - The operating system or running environment does not support this api.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean, callback: AsyncCallback<void>): void;
    function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): Promise<void>;

    /**
     * Configuration parameters for simulating reverse geocoding.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     */
    export interface ReverseGeocodingMockInfo {
        location: ReverseGeoCodeRequest;
        geoAddress: GeoAddress;
    }

    /**
     * Parameters for configuring the location simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     */
    export interface LocationMockConfig {
        timeInterval: number;
        locations: Array<Location>;
    }

    /**
     * Satellite status information
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     */
    export interface SatelliteStatusInfo {
        satellitesNumber: number;
        satelliteIds: Array<number>;
        carrierToNoiseDensitys: Array<number>;
        altitudes: Array<number>;
        azimuths: Array<number>;
        carrierFrequencies: Array<number>;
    }

    /**
     * Parameters for requesting to report cache location information
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     */
    export interface CachedGnssLocationsRequest {
        reportingPeriodSec: number;
        wakeUpCacheQueueFull: boolean;
    }

    /**
     * Configuring parameters in geo fence requests
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geofence
     */
    export interface GeofenceRequest {
        priority: LocationRequestPriority;
        scenario: LocationRequestScenario;
        geofence: Geofence;
    }

    /**
     * Configuring parameters in geo fence requests
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geofence
     */
    export interface Geofence {
        latitude: number;
        longitude: number;
        radius: number;
        expiration: number;
    }

    /**
     * Configuring parameters in reverse geocode requests
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geocoder
     */
    export interface ReverseGeoCodeRequest {
        locale?: string;
        latitude: number;
        longitude: number;
        maxItems?: number;
    }

    /**
     * Configuring parameters in geocode requests
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geocoder
     */
    export interface GeoCodeRequest {
        locale?: string;
        description: string;
        maxItems?: number;
        minLatitude?: number;
        minLongitude?: number;
        maxLatitude?: number;
        maxLongitude?: number;
    }

    /**
     * Data struct describes geographic locations.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geocoder
     */
    export interface GeoAddress {
        /**
         * Indicates latitude information.
         * A positive value indicates north latitude,
         * and a negative value indicates south latitude.
         * @since 9
         */
        latitude?: number;

        /**
         * Indicates longitude information.
         * A positive value indicates east longitude ,
         * and a negative value indicates west longitude .
         * @since 9
         */
        longitude?: number;

        /**
         * Indicates language used for the location description.
         * zh indicates Chinese, and en indicates English.
         * @since 9
         */
        locale?: string;

        /**
         * Indicates landmark of the location.
         * @since 9
         */
        placeName?: string;

        /**
         * Indicates country code.
         * @since 9
         */
        countryCode?: string;

        /**
         * Indicates country name.
         * @since 9
         */
        countryName?: string;

        /**
         * Indicates administrative region name.
         * @since 9
         */
        administrativeArea?: string;

        /**
         * Indicates sub-administrative region name.
         * @since 9
         */
        subAdministrativeArea?: string;

        /**
         * Indicates locality information.
         * @since 9
         */
        locality?: string;

        /**
         * Indicates sub-locality information.
         * @since 9
         */
        subLocality?: string;

        /**
         * Indicates road name.
         * @since 9
         */
        roadName?: string;

        /**
         * Indicates auxiliary road information.
         * @since 9
         */
        subRoadName?: string;

        /**
         * Indicates house information.
         * @since 9
         */
        premises?: string;

        /**
         * Indicates postal code.
         * @since 9
         */
        postalCode?: string;

        /**
         * Indicates phone number.
         * @since 9
         */
        phoneNumber?: string;

        /**
         * Indicates website URL.
         * @since 9
         */
        addressUrl?: string;

        /**
         * Indicates additional information.
         * @since 9
         */
        descriptions?: Array<string>;

        /**
         * Indicates the amount of additional descriptive information.
         * @since 9
         */
        descriptionsSize?: number;

        /**
         * Indicates whether it is an mock GeoAddress
         * @since 9
         */
        isFromMock?: Boolean;
    }

    /**
     * Configuring parameters in location requests
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export interface LocationRequest {
        priority?: LocationRequestPriority;
        scenario?: LocationRequestScenario;
        timeInterval?: number;
        distanceInterval?: number;
        maxAccuracy?: number;
    }

    /**
     * Configuring parameters in current location requests
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export interface CurrentLocationRequest {
        priority?: LocationRequestPriority;
        scenario?: LocationRequestScenario;
        maxAccuracy?: number;
        timeoutMs?: number;
    }

    /**
     * Provides information about geographic locations
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export interface Location {
        /**
         * Indicates latitude information.
         * A positive value indicates north latitude,
         * and a negative value indicates south latitude.
         * @since 9
         */
        latitude: number;

        /**
         * Indicates Longitude information.
         * A positive value indicates east longitude ,
         * and a negative value indicates west longitude .
         * @since 9
         */
        longitude: number;

        /**
         * Indicates location altitude, in meters.
         * @since 9
         */
        altitude: number;

        /**
         * Indicates location accuracy, in meters.
         * @since 9
         */
        accuracy: number;

        /**
         * Indicates speed, in m/s.
         * @since 9
         */
        speed: number;

        /**
         * Indicates location timestamp in the UTC format.
         * @since 9
         */
        timeStamp: number;

        /**
         * Indicates direction information.
         * @since 9
         */
        direction: number;

        /**
         * Indicates location timestamp since boot.
         * @since 9
         */
        timeSinceBoot: number;

        /**
         * Indicates additional information.
         * @since 9
         */
        additions?: Array<string>;

        /**
         * Indicates the amount of additional descriptive information.
         * @since 9
         */
        additionSize?: number;

        /**
         * Indicates whether it is an mock location.
         * @since 9
         */
        isFromMock?: Boolean;
    }

    /**
     * Enum for location priority
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export enum LocationRequestPriority {
        UNSET = 0x200,
        ACCURACY,
        LOW_POWER,
        FIRST_FIX,
    }

    /**
     * Enum for location scenario
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export enum LocationRequestScenario {
        UNSET = 0x300,
        NAVIGATION,
        TRAJECTORY_TRACKING,
        CAR_HAILING,
        DAILY_LIFE_SERVICE,
        NO_POWER,
    }

    /**
     * Enum for location privacy type
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export enum LocationPrivacyType {
        OTHERS = 0,
        STARTUP,
        CORE_LOCATION,
    }

    /**
     * Location subsystem command structure
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export interface LocationCommand {
        scenario: LocationRequestScenario;
        command: string;
    }

    /**
     * Country code structure
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export interface CountryCode {
        country: string;
        type: CountryCodeType;
    }

    /**
     * Enum for country code type
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     */
    export enum CountryCodeType {
        COUNTRY_CODE_FROM_LOCALE = 1,
        COUNTRY_CODE_FROM_SIM,
        COUNTRY_CODE_FROM_LOCATION,
        COUNTRY_CODE_FROM_NETWORK,
    }
}

export default geoLocationManager;
