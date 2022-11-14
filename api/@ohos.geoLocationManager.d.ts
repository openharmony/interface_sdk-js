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

顺序：namespace，syscap，systemapi，since，deprecated，useinstead，example
/**
 * Provides interfaces for acquiring location information, managing location switches, 
 * geocoding, reverse geocoding, country code, geofencing and other functions.
 *@namespace geoLocationManager
 * @since 9
 * @import import geoLocationManager from '@ohos.geoLocationManager'
 */
declare namespace geoLocationManager {
    /**
     * Subscribe location changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param request indicates the location request parameters.
     * @param callback indicates the callback for reporting the location result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function on(type: 'locationChange', request: LocationRequest, callback: Callback<Location>): void;

    /**
     * Unsubscribe location changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the location result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function off(type: 'locationChange', callback?: Callback<Location>): void;

    /**
     * Subscribe location switch changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback indicates the callback for reporting the location switch status.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function on(type: 'locationEnabledChange', callback: Callback<boolean>): void;

    /**
     * Unsubscribe location switch changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback indicates the callback for reporting the location switch status.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function off(type: 'locationEnabledChange', callback?: Callback<boolean>): void;

    /**
     * Subscribe to cache GNSS locations update messages
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param request indicates the cached GNSS locations request parameters.
     * @param callback indicates the callback for reporting the cached GNSS locations.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function on(type: 'cachedGnssLocationsChange', request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void;

    /**
     * Unsubscribe to cache GNSS locations update messages
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the cached gnss locations.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function off(type: 'cachedGnssLocationsChange', callback?: Callback<Array<Location>>): void;

    /**
     * Subscribe satellite status changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the satellite status.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function on(type: 'satelliteStatusChange', callback: Callback<SatelliteStatusInfo>): void;

    /**
     * Unsubscribe satellite status changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the satellite status.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function off(type: 'satelliteStatusChange', callback?: Callback<SatelliteStatusInfo>): void;

    /**
     * Subscribe nmea message changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the nmea message.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function on(type: 'nmeaMessage', callback: Callback<string>): void;

    /**
     * Unsubscribe nmea message changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the nmea message.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function off(type: 'nmeaMessage', callback?: Callback<string>): void;

    /**
     * Add a geofence and subscribe geo fence status changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geofence
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param request indicates the Geo-fence configuration parameters.
     * @param want indicates which ability to start when the geofence event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301600 - Failed to operate the geofence.
     */
    function on(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

    /**
     * Remove a geofence and unsubscribe geo fence status changed
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geofence
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param request indicates the Geo-fence configuration parameters.
     * @param want indicates which ability to start when the geofence event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301600 - Failed to operate the geofence.
     */
    function off(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

    /**
     * Registering the callback function for listening to country code changes.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback indicates the callback for reporting country code changes.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
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
     * @param callback indicates the callback for reporting country code changes.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301500 - Failed to query the area information.
     */
    function off(type: 'countryCodeChange', callback?: Callback<CountryCode>): void;

    /**
     * Obtain current location
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param request indicates the location request parameters.
     * @param callback indicates the callback for reporting the location result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function getCurrentLocation(request: CurrentLocationRequest, callback: AsyncCallback<Location>): void;
    function getCurrentLocation(callback: AsyncCallback<Location>): void;
    function getCurrentLocation(request?: CurrentLocationRequest): Promise<Location>;

    /**
     * Obtain last known location
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @returns Return the last known {@link Location} information.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function getLastLocation(): Location;

    /**
     * Obtain current location switch status
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @returns Returns {@code true} if the location switch on, returns {@code false} otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function isLocationEnabled(): boolean;

    /**
     * Request enable location
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param { AsyncCallback<boolean> } callback - callback indicates the callback for reporting the error message. //以这个为模板
	      * @param { AsyncCallback<boolean> } [callback] - callback indicates the callback for reporting the error message. //以这个为模板，如果是可选参数，需要加[]

     * If the function fails to execute, the error message will be carried in the first parameter err of AsyncCallback, 
     * If the function executes successfully, returns {@code true} if user agrees to open the location switch, returns {@code false} otherwise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301700 - No response to the request.
     */
    function requestEnableLocation(callback: AsyncCallback<boolean>): void;
	* @returns { Promise<void> } the promise returned by the function *//promise方式需要增加returns标志。
    function requestEnableLocation(): Promise<boolean>;//callback和promise需要两段描述

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
     * @returns void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function disableLocation(): void;

    /**
     * Obtain address info from location
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geocoder
     * @param request indicates the reverse geocode query parameters.
     * @param callback indicates the callback for reporting the address info.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301300 - Reverse geocoding query failed.
     */
    function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;
    function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>;

    /**
     * Obtain latitude and longitude info from location address
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geocoder
     * @param request indicates the geocode query parameters.
     * @param callback indicates the callback for reporting the latitude and longitude result.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301400 - Geocoding query failed.
     */
    function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;
    function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>;

    /**
     * Obtain geocoding service status
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Geocoder
     * @returns Returns {@code true} if geocoding service is available, returns {@code false} otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function isGeocoderAvailable(): boolean;

    /**
     * Obtain the number of cached GNSS locations reported at a time
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the cached GNSS locations size.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function getCachedGnssLocationsSize(callback: AsyncCallback<number>): void;
    function getCachedGnssLocationsSize(): Promise<number>;

    /**
     * All prepared GNSS locations are returned to the application through the callback function,
     * and the bottom-layer buffer is cleared.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Gnss
     * @permission ohos.permission.APPROXIMATELY_LOCATION
     * @param callback indicates the callback for reporting the error message.
     * If the function fails to execute, the error message will be carried in the first parameter err of AsyncCallback, 
     * If the function executes successfully, execute the callback function only, no data will be returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
     */
    function flushCachedGnssLocations(callback: AsyncCallback<void>): void;
    function flushCachedGnssLocations(): Promise<void>;

    /**
     * Send extended commands to location subsystem.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param command indicates the extended command message body.
     * @param callback indicates the callback for reporting the error message.
     * If the function fails to execute, the error message will be carried in the first parameter err of AsyncCallback, 
     * If the function executes successfully, execute the callback function only, no data will be returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function sendCommand(command: LocationCommand, callback: AsyncCallback<void>): void;
    function sendCommand(command: LocationCommand): Promise<void>;

    /**
     * Obtain the current country code.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @param callback indicates the callback for reporting the country code.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
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
     * @returns void.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function enableLocationMock(): void;

    /**
     * Disable the geographical location simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @returns void.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function disableLocationMock(): void;

    /**
     * Set the configuration parameters for location simulation.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param config indicates the configuration parameters for location simulation.
     * Contains the array of locations and reporting intervals that need to be simulated.
     * @returns void.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     */
    function setMockedLocations(config: LocationMockConfig): void;

    /**
     * Enable the reverse geocoding simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @returns void.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function enableReverseGeocodingMock(): void;

    /**
     * Disable the reverse geocoding simulation function.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @returns void.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function disableReverseGeocodingMock(): void;

    /**
     * Set the configuration parameters for simulating reverse geocoding.
     *
     * @since 9
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @param mockInfos indicates the set of locations and place names to be simulated.
     * @returns void.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function setReverseGeocodingMockInfo(mockInfos: Array<ReverseGeocodingMockInfo>): void;

    /**
     * Querying location privacy protocol confirmation status.
     *
     * @since 9
     * @systemapi
     * @syscap SystemCapability.Location.Location.Core
     * @param type indicates location privacy protocol type.
     * @returns Returns {@code true} if the location privacy protocol has been confirmed, returns {@code false} otherwise.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function isLocationPrivacyConfirmed(type: LocationPrivacyType): boolean;

    /**
     * Set location privacy protocol confirmation status.
     *
     * @since 9
     * @systemapi
     * @syscap SystemCapability.Location.Location.Core
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @param type indicates location privacy protocol type.
     * @param isConfirmed indicates whether the location privacy protocol has been confirmed.
     * @returns void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - System API is not allowed called by third HAP.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3301000 - Location service is unavailable.
     */
    function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): void;

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
替换接口：
@useinstead ohos.一级模块[.二级]/命名空间[.类名][.interface名称]#接口名
替换模快：
@useinstead ohos.一级模块[.二级]/命名空间[.类名][.interface名称]
替换事件：
@useinstead ohos.一级模块[.二级]/命名空间[.类名][.interface名称]#event:事件名

	自定义类型的顺序：description，typedef，syscap，systemapi，since，deprecated，useinstead，example。
	类型中的每个字段都需要增加描述。
    /**
     * Data struct describes geographic locations.
     *
	 @typedef GeoAddress//按照这个模板修改

     * @syscap SystemCapability.Location.Location.Geocoder
	      * @since 9
     */
    export interface GeoAddress {
        /**
         * Indicates latitude information.
         * A positive value indicates north latitude,
         * and a negative value indicates south latitude.
		 * @type { number }//属性需要加type，并且属性是否需要定义成class，而不是interface。如果是可选的改为@type { ?number }
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
         * @systemapi
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
         * @systemapi
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
     * @systemapi
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
        COUNTRY_CODE_FROM_LOCALE = 1,//每一项都需要有注释
        COUNTRY_CODE_FROM_SIM,
        COUNTRY_CODE_FROM_LOCATION,
        COUNTRY_CODE_FROM_NETWORK,
    }
}

export default geoLocationManager;
