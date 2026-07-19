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

/**
 * @file
 * @kit LocationKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/*** if arkts dynamic */
import { WantAgent } from './@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '@ohos.app.ability.wantAgent';
/*** endif */
import { NotificationRequest } from './notification/notificationRequest';

/**
 * Provides interfaces for acquiring location information, managing location switches,
 * geocoding, reverse geocoding, country code, fencing and other functions.
 *
 * @syscap SystemCapability.Location.Location.Core [since 11]
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace geoLocationManager {
  /**
   * Subscribe location changed.
   * You are advised to use the {@link onLocationChange} instead.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locationChange' } type - Indicates the location service event to be subscribed to.
   * @param { LocationRequest } request - Indicates the location request parameters. [since 9 - 11]
   * @param { LocationRequest | ContinuousLocationRequest } request - Indicates the location request
   *     parameters. [since 12]
   * @param { Callback<Location> } callback - Indicates the callback for reporting the location result.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters
   *     are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locationChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function on(type: 'locationChange', request: LocationRequest | ContinuousLocationRequest,
      callback: Callback<Location>): void;

  /**
   * Subscribe location changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 23]
   * @param { LocationRequest | ContinuousLocationRequest } request - Indicates the location request
   *     parameters. [since 23]
   * @param { Callback<Location> } callback - Indicates the callback for reporting the location result. [since 23]
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. [since 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed. [since 23]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('locationChange')} due to limited device capabilities. [since 23]
   * @throws { BusinessError } 3301000 - The location service is unavailable. [since 23]
   * @throws { BusinessError } 3301100 - The location switch is off. [since 23]
   * @syscap SystemCapability.Location.Location.Core [since 23]
   * @since 23 static
   * @since 26.0.0 dynamic
   */
  function onLocationChange(request: LocationRequest | ContinuousLocationRequest,
  callback: Callback<Location>): void;

  /**
   * Unsubscribe location changed.
   * You are advised to use the {@link offLocationChange} instead.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 9 - 24]
   * @param { 'locationChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<Location> } [callback] - Indicates the callback for reporting the location result.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. Introduced in API 9 and will not be threw above
   *     API 24. [since 9 - 24]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('locationChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   *     Introduced in API 9 and will not be threw above API 17. [since 9 - 17]
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   *     Introduced in API 9 and will not be threw above API 17. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: 'locationChange', callback?: Callback<Location>): void;

  /**
   * Unsubscribe location changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 23 - 24]
   * @param { Callback<Location> } [callback] - Indicates the callback for reporting the location result. [since 23]
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. Introduced in API 9 and
   *     will not be threw above API 24. [since 23 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('locationChange')} due to limited device capabilities. [since 23]
   * @throws { BusinessError } 3301000 - The location service is unavailable. [since 23]
   * @syscap SystemCapability.Location.Location.Core [since 23]
   * @since 23 static
   * @since 26.0.0 dynamic
   */
  function offLocationChange(callback?: Callback<Location>): void;

  /**
   * Subscribe continuous location error changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locationError' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<LocationError> } callback - Indicates the callback for reporting the
   *     continuous location error.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not
   *     have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters
   *     are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locationError')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'locationError', callback: Callback<LocationError>): void;

  /**
   * Subscribe continuous location error changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<LocationError> } callback - Indicates the callback for reporting the continuous location error.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('locationError')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onLocationError(callback: Callback<LocationError>): void;

  /**
   * Unsubscribe continuous location error changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locationError' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<LocationError> } [callback] - Indicates the callback for reporting the continuous
   *     location error.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are
   *     left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('locationError')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'locationError', callback?: Callback<LocationError>): void;

  /**
   * Unsubscribe continuous location error changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<LocationError> } [callback] - Indicates the callback for reporting the continuous location error.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('locationError')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offLocationError(callback?: Callback<LocationError>): void;

  /**
   * Subscribe location switch changed.
   *
   * @param { 'locationEnabledChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<boolean> } callback - Indicates the callback for reporting the location switch status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locationEnabledChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'locationEnabledChange', callback: Callback<boolean>): void;

  /**
   * Subscribe location switch changed.
   *
   * @param { Callback<boolean> } callback - Indicates the callback for reporting the location switch status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('locationEnabledChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onLocationEnabledChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribe location switch changed.
   *
   * @param { 'locationEnabledChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<boolean> } [callback] - Indicates the callback for reporting the location switch status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('locationEnabledChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'locationEnabledChange', callback?: Callback<boolean>): void;

  /**
   * Unsubscribe location switch changed.
   *
   * @param { Callback<boolean> } [callback] - Indicates the callback for reporting the location switch status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('locationEnabledChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offLocationEnabledChange(callback?: Callback<boolean>): void;

  /**
   * Subscribe to cache GNSS locations update messages.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cachedGnssLocationsChange' } type - Indicates the location service event to be subscribed to.
   * @param { CachedGnssLocationsRequest } request - Indicates the cached GNSS locations request parameters.
   * @param { Callback<Array<Location>> } callback - Indicates the callback for reporting the cached GNSS locations.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('cachedGnssLocationsChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'cachedGnssLocationsChange', request: CachedGnssLocationsRequest, 
      callback: Callback<Array<Location>>): void;

  /**
   * Subscribe to cache GNSS locations update messages.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { CachedGnssLocationsRequest } request - Indicates the cached GNSS locations request parameters.
   * @param { Callback<Array<Location>> } callback - Indicates the callback for reporting the cached GNSS locations.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('cachedGnssLocationsChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function onCachedGnssLocationsChange(request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void;

  /**
   * Unsubscribe to cache GNSS locations update messages.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cachedGnssLocationsChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<Array<Location>> } [callback] - Indicates the callback for reporting the cached gnss locations.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('cachedGnssLocationsChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'cachedGnssLocationsChange', callback?: Callback<Array<Location>>): void;

  /**
   * Unsubscribe to cache GNSS locations update messages.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<Location>> } [callback] - Indicates the callback for reporting the cached gnss locations.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('cachedGnssLocationsChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function offCachedGnssLocationsChange(callback?: Callback<Array<Location>>): void;

  /**
   * Subscribe satellite status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'satelliteStatusChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<SatelliteStatusInfo> } callback - Indicates the callback for reporting the satellite status.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('satelliteStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'satelliteStatusChange', callback: Callback<SatelliteStatusInfo>): void;

  /**
   * Subscribe satellite status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<SatelliteStatusInfo> } callback - Indicates the callback for reporting the satellite status.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('satelliteStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function onSatelliteStatusChange(callback: Callback<SatelliteStatusInfo>): void;

  /**
   * Unsubscribe satellite status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'satelliteStatusChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<SatelliteStatusInfo> } [callback] - Indicates the callback for reporting the satellite status.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('satelliteStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'satelliteStatusChange', callback?: Callback<SatelliteStatusInfo>): void;

  /**
   * Unsubscribe satellite status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<SatelliteStatusInfo> } [callback] - Indicates the callback for reporting the satellite status.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('satelliteStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function offSatelliteStatusChange(callback?: Callback<SatelliteStatusInfo>): void;

  /**
   * Subscribe nmea message changed.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'nmeaMessage' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<string> } callback - Indicates the callback for reporting the nmea message.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('nmeaMessage')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'nmeaMessage', callback: Callback<string>): void;
  
  /**
   * Subscribe nmea message changed.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<string> } callback - Indicates the callback for reporting the nmea message.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('nmeaMessage')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function onNmeaMessage(callback: Callback<string>): void;

  /**
   * Unsubscribe nmea message changed.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'nmeaMessage' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<string> } [callback] - Indicates the callback for reporting the nmea message.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('nmeaMessage')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'nmeaMessage', callback?: Callback<string>): void;

  /**
   * Unsubscribe nmea message changed.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<string> } [callback] - Indicates the callback for reporting the nmea message.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('nmeaMessage')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function offNmeaMessage(callback?: Callback<string>): void;

  /**
   * Add a geofence and subscribe geofence status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'gnssFenceStatusChange' } type - Indicates the location service event to be subscribed to.
   * @param { GeofenceRequest } request - Indicates the Geofence configuration parameters.
   * @param { WantAgent } want - Indicates which ability to start when the geofence event is triggered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.on('
   *     gnssFenceStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 9 dynamic
   */
  function on(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

  /**
   * Add a geofence and subscribe geofence status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { GeofenceRequest } request - Indicates the Geofence configuration parameters.
   * @param { WantAgent } want - Indicates which ability to start when the geofence event is triggered.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('gnssFenceStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 26.1.0 static
   */
  function onGnssFenceStatusChange(request: GeofenceRequest, want: WantAgent): void;

  /**
   * Remove a geofence and unsubscribe geofence status changed.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 9 - 24]
   * @param { 'gnssFenceStatusChange' } type - Indicates the location service event to be subscribed to.
   * @param { GeofenceRequest } request - Indicates the Geofence configuration parameters.
   * @param { WantAgent } want - Indicates which ability to start when the geofence event is triggered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 9 - 24]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('gnssFenceStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 9 dynamic
   */
  function off(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

  /**
   * Remove a geofence and unsubscribe geofence status changed.
   *
   * @param { GeofenceRequest } request - Indicates the Geofence configuration parameters.
   * @param { WantAgent } want - Indicates which ability to start when the geofence event is triggered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('gnssFenceStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 26.1.0 static
   */
  function offGnssFenceStatusChange(request: GeofenceRequest, want: WantAgent): void;

  /**
   * Registering the callback function for listening to country code changes.
   *
   * @param { 'countryCodeChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<CountryCode> } callback - Indicates the callback for reporting country code changes.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('countryCodeChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'countryCodeChange', callback: Callback<CountryCode>): void;

  /**
   * Registering the callback function for listening to country code changes.
   *
   * @param { Callback<CountryCode> } callback - Indicates the callback for reporting country code changes.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('countryCodeChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onCountryCodeChange(callback: Callback<CountryCode>): void;

  /**
   * Unregistering the callback function for listening to country code changes.
   *
   * @param { 'countryCodeChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<CountryCode> } [callback] - Indicates the callback for reporting country code changes.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('countryCodeChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'countryCodeChange', callback?: Callback<CountryCode>): void;

  /**
   * Unregistering the callback function for listening to country code changes.
   *
   * @param { Callback<CountryCode> } [callback] - Indicates the callback for reporting country code changes.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('countryCodeChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offCountryCodeChange(callback?: Callback<CountryCode>): void;

  /**
   * Subscribe to changes in WiFi/BT scanning information,
   * and use the WiFi/BT scanning information for localization.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locatingRequiredDataChange' } type - Indicates the location service event to be subscribed to.
   * @param { LocatingRequiredDataConfig } config - Indicates the locating required data configuration parameters.
   * @param { Callback<Array<LocatingRequiredData>> } [callback] - Indicates the
   *     callback for reporting WiFi/BT scan info.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locatingRequiredDataChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301800 - Failed to start WiFi or Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'locatingRequiredDataChange', config: LocatingRequiredDataConfig, 
      callback: Callback<Array<LocatingRequiredData>>): void;

  /**
   * Subscribe to changes in WiFi/BT scanning information,
   * and use the WiFi/BT scanning information for localization.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { LocatingRequiredDataConfig } config - Indicates the locating required data configuration parameters.
   * @param { Callback<Array<LocatingRequiredData>> } callback -
   *     Indicates the callback for reporting WiFi/BT scan info.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('locatingRequiredDataChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301800 - Failed to start WiFi or Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function onLocatingRequiredDataChange(config: LocatingRequiredDataConfig, 
      callback: Callback<Array<LocatingRequiredData>>): void;

  /**
   * Stop WiFi/BT scanning and unsubscribe from WiFi/BT scanning information changes.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locatingRequiredDataChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<Array<LocatingRequiredData>> } [callback] - Indicates the callback for reporting WiFi/BT scan
   *     info.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.off('
   *     locatingRequiredDataChange')} due to limited device capabilities.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: 'locatingRequiredDataChange', callback?: Callback<Array<LocatingRequiredData>>): void;
  
  /**
   * Stop WiFi/BT scanning and unsubscribe from WiFi/BT scanning information changes.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<LocatingRequiredData>> } [callback] -
   *     Indicates the callback for reporting WiFi/BT scan info.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('locatingRequiredDataChange')} due to limited device capabilities.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function offLocatingRequiredDataChange(callback?: Callback<Array<LocatingRequiredData>>): void;

  /**
   * Subscribe location icon status changed.
   *
   * @param { 'locationIconStatusChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<LocationIconStatus> } callback - Indicates the callback for reporting the location icon status.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.on('
   *     locationIconStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'locationIconStatusChange', callback: Callback<LocationIconStatus>): void;

  /**
   * Subscribe location icon status changed.
   *
   * @param { Callback<LocationIconStatus> } callback - Indicates the callback for reporting the location icon status.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('locationIconStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function onLocationIconStatusChange(callback: Callback<LocationIconStatus>): void;

  /**
   * Unsubscribe location icon status changed.
   *
   * @param { 'locationIconStatusChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<LocationIconStatus> } [callback] - Indicates the callback for reporting the location icon status.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.off('
   *     locationIconStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'locationIconStatusChange', callback?: Callback<LocationIconStatus>): void;

  /**
   * Unsubscribe location icon status changed.
   *
   * @param { Callback<LocationIconStatus> } [callback] -
   *     Indicates the callback for reporting the location icon status.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('locationIconStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function offLocationIconStatusChange(callback?: Callback<LocationIconStatus>): void;

  /**
   * Registers and listens to bluetooth scanning results for location services.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'bluetoothScanResultChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<BluetoothScanResult> } callback - Indicates the callback for reporting Bluetooth scan info.
   * @throws { BusinessError } 201 - Permission verification failed. The application does
   *     not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('bluetoothScanResultChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 16 dynamic
   */
  function on(type: 'bluetoothScanResultChange', callback: Callback<BluetoothScanResult>): void;

  /**
   * Registers and listens to bluetooth scanning results for location services.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<BluetoothScanResult> } callback - Indicates the callback for reporting Bluetooth scan info.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.on('bluetoothScanResultChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onBluetoothScanResultChange(callback: Callback<BluetoothScanResult>): void;

  /**
   * Stop bluetooth scanning and unregister to listen to bluetooth scanning result changes.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'bluetoothScanResultChange' } type - Indicates the location service event to be subscribed to.
   * @param { Callback<BluetoothScanResult> } [callback] - Indicates the callback for reporting Bluetooth scan info.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('bluetoothScanResultChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 16 dynamic
   */
  function off(type: 'bluetoothScanResultChange', callback?: Callback<BluetoothScanResult>): void;

  /**
   * Stop bluetooth scanning and unregister to listen to bluetooth scanning result changes.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<BluetoothScanResult> } [callback] - Indicates the callback for reporting Bluetooth scan info.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.off('bluetoothScanResultChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offBluetoothScanResultChange(callback?: Callback<BluetoothScanResult>): void;

  /**
   * Obtain current location.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { CurrentLocationRequest } request - Indicates the location request parameters. [since 9 - 11]
   * @param { CurrentLocationRequest | SingleLocationRequest } request - Indicates the location request
   *     parameters. [since 12]
   * @param { AsyncCallback<Location> } callback - Indicates the callback for reporting the location result.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentLocation(request: CurrentLocationRequest | SingleLocationRequest,
  callback: AsyncCallback<Location>): void;

  /**
   * Obtain current location.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<Location> } callback - Indicates the callback for reporting the location result.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentLocation(callback: AsyncCallback<Location>): void;

  /**
   * Obtain current location.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { CurrentLocationRequest } [request] - Indicates the location request parameters. [since 9 - 11]
   * @param { CurrentLocationRequest | SingleLocationRequest } [request] - Indicates the location request
   *     parameters. [since 12]
   * @returns { Promise<Location> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does
   *     not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentLocation(request?: CurrentLocationRequest | SingleLocationRequest):
  Promise<Location>;

  /**
   * Obtain last known location.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Location } The last known location information.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getLastLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLastLocation(): Location;

  /**
   * Obtain current location switch status.
   *
   * @returns { boolean } Returns {@code true} if the location switch on, returns {@code false} otherwise.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.isLocationEnabled} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isLocationEnabled(): boolean;

  /**
   * Obtaining the location switch status of a specified user.
   *
   * @param { int } userId - Indicates the ID of a specified user.
   * @returns { boolean } Returns {@code true} if the location switch on, returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.isLocationEnabledByUserId} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isLocationEnabledByUserId(userId: int): boolean;

  /**
   * Enable location switch.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS [since 9 - 19]
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH [since 20]
   * @param { AsyncCallback<void> } callback - Indicates the callback for reporting the error message.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableLocation(callback: AsyncCallback<void>): void;

  /**
   * Enable location switch.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS [since 9 - 19]
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH [since 20]
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableLocation(): Promise<void>;

  /**
   * Turn on the location switch for a specified user.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH
   * @param { int } userId - Indicates the ID of a specified user.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.enableLocationByUserId} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function enableLocationByUserId(userId: int): Promise<void>;

  /**
   * Disable location switch.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS [since 9 - 19]
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH [since 20]
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.disableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableLocation(): void;

  /**
   * Turn off the location switch for a specified user.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH
   * @param { int } userId - Indicates the ID of a specified user.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.disableLocationByUserId} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function disableLocationByUserId(userId: int): void;

  /**
   * Set the app locating behavior not controlled by the location switch.
   *
   * @permission ohos.permission.LOCATION_SWITCH_IGNORED
   * @param { boolean } isIgnored - True indicates that the location behavior of the app is not controlled by the
   *     location switch.
   *     Otherwise, it's the opposite.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setLocationSwitchIgnored(isIgnored: boolean): void;

  /**
   * Obtain address info from location.
   *
   * @param { ReverseGeoCodeRequest } request - Indicates the reverse geocode query parameters.
   * @param { AsyncCallback<Array<GeoAddress>> } callback - Indicates the callback for reporting the address info.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301300 - Reverse geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

  /**
   * Obtain address info from location.
   *
   * @param { ReverseGeoCodeRequest } request - Indicates the reverse geocode query parameters.
   * @returns { Promise<Array<GeoAddress>> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301300 - Reverse geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>;

  /**
   * Obtain latitude and longitude info from location address.
   *
   * @param { GeoCodeRequest } request - Indicates the geocode query parameters.
   * @param { AsyncCallback<Array<GeoAddress>> } callback - Indicates the callback for reporting the
   *     latitude and longitude result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are
   *     left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301400 - Geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

  /**
   * Obtain latitude and longitude info from location address.
   *
   * @param { GeoCodeRequest } request - Indicates the geocode query parameters.
   * @returns { Promise<Array<GeoAddress>> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301400 - Geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>;

  /**
   * Obtain geocoding service status.
   *
   * @returns { boolean } Returns {@code true} if geocoding service is available,
   *     returns {@code false} otherwise.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.isGeocoderAvailable} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function isGeocoderAvailable(): boolean;

  /**
   * Obtain the number of cached GNSS locations reported at a time.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<int> } callback - Indicates the callback for reporting the cached GNSS locations size.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCachedGnssLocationsSize(callback: AsyncCallback<int>): void;

  /**
   * Obtain the number of cached GNSS locations.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<int> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCachedGnssLocationsSize(): Promise<int>;

  /**
   * All prepared GNSS locations are returned to the application through the callback function,
   * and the bottom-layer buffer is cleared.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<void> } callback - Indicates the callback for reporting the error message.
   *     If the function fails to execute, the error message will be carried in the first parameter
   *     err of AsyncCallback,
   *     If the function executes successfully, execute the callback function only, no data will be returned.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.flushCachedGnssLocations} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function flushCachedGnssLocations(callback: AsyncCallback<void>): void;

  /**
   * All prepared GNSS locations are returned to the application,
   * and the bottom-layer buffer is cleared.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.flushCachedGnssLocations} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function flushCachedGnssLocations(): Promise<void>;

  /**
   * Send extended commands to location subsystem.
   *
   * @param { LocationCommand } command - Indicates the extended command message body.
   * @param { AsyncCallback<void> } callback - Indicates the callback for reporting the error message.
   *     If the function fails to execute, the error message will be carried in the first parameter err of
   *     AsyncCallback,
   *     If the function executes successfully, execute the callback function only, no data will be returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.sendCommand} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function sendCommand(command: LocationCommand, callback: AsyncCallback<void>): void;

  /**
   * Send extended commands to location subsystem.
   *
   * @param { LocationCommand } command - Indicates the extended command message body.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.sendCommand} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function sendCommand(command: LocationCommand): Promise<void>;

  /**
   * Obtain the current country code.
   *
   * @param { AsyncCallback<CountryCode> } callback - Indicates the callback for reporting the country code.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCountryCode} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(callback: AsyncCallback<CountryCode>): void;

  /**
   * Obtain the current country code.
   *
   * @returns { Promise<CountryCode> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCountryCode} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(): Promise<CountryCode>;

  /**
   * Enable the geographical location simulation function.
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocationMock}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableLocationMock(): void;

  /**
   * Disable the geographical location simulation function.
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.disableLocationMock}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableLocationMock(): void;

  /**
   * Set the configuration parameters for location simulation.
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @param { LocationMockConfig } config - Indicates the configuration parameters for location simulation.
   *     Contains the array of locations and reporting intervals that need to be simulated.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.setMockedLocations}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setMockedLocations(config: LocationMockConfig): void;

  /**
   * Enable the reverse geocoding simulation function.
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.enableReverseGeocodingMock} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableReverseGeocodingMock(): void;

  /**
   * Disable the reverse geocoding simulation function.
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.disableReverseGeocodingMock} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableReverseGeocodingMock(): void;

  /**
   * Set the configuration parameters for simulating reverse geocoding.
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @param { Array<ReverseGeocodingMockInfo> } mockInfos - Indicates the set of locations and place names to be
   *     simulated.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.setReverseGeocodingMockInfo} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setReverseGeocodingMockInfo(mockInfos: Array<ReverseGeocodingMockInfo>): void;

  /**
   * Querying location privacy protocol confirmation status.
   *
   * @param { LocationPrivacyType } type - Indicates location privacy protocol type.
   * @returns { boolean } Returns {@code true} if the location privacy protocol has been confirmed, returns {@code false
   *     } otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.isLocationPrivacyConfirmed} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isLocationPrivacyConfirmed(type: LocationPrivacyType): boolean;

  /**
   * Set location privacy protocol confirmation status.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @param { LocationPrivacyType } type - Indicates location privacy protocol type.
   * @param { boolean } isConfirmed - Indicates whether the location privacy protocol has been confirmed.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.setLocationPrivacyConfirmStatus} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): void;

  /**
   * Get WiFi/BT scanning information, and use the WiFi/BT scanning information for localization.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { LocatingRequiredDataConfig } config - Indicates the request parameters
   *     for obtaining the data required for locating.
   * @returns { Promise<Array<LocatingRequiredData>> } The promise returned by the function,
   *     for reporting WiFi/BT scan info.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getLocatingRequiredData} due to limited device capabilities.
   * @throws { BusinessError } 3301800 - Failed to start WiFi or Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocatingRequiredData(config: LocatingRequiredDataConfig): Promise<Array<LocatingRequiredData>>;

  /**
   * Add a geofence.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { GnssGeofenceRequest } fenceRequest - Indicates the Geofence configuration parameters.
   * @returns { Promise<int> } The promise returned by the function, for reporting the ID of geofence.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.addGnssGeofence} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301601 - The number of geofences exceeds the maximum.
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function addGnssGeofence(fenceRequest: GnssGeofenceRequest): Promise<int>;

  /**
   * Remove a geofence.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 12 - 24]
   * @param { int } geofenceId - Indicates the ID of geofence.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not
   *     have the permission required to call the API. [since 12 - 24]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters
   *     are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.removeGnssGeofence} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301602 - Failed to delete a geofence due to an incorrect ID.
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function removeGnssGeofence(geofenceId: int): Promise<void>;

  /**
   * Get all active fences.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<Map<int, Geofence>> } The promise returned by the function.
   *     The key of the map represents the fence ID. The value of the map represents
   *     the detailed information of the fence.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not
   *     have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getActiveGeoFences} due to limited device capabilities.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 23 dynamic&static
   */
  function getActiveGeoFences(): Promise<Map<int, Geofence>>;

  /**
   * Obtains the coordinate system types supported by geofence.
   *
   * @returns { Array<CoordinateSystemType> } Return the coordinate system types supported by geofence.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getGeofenceSupportedCoordTypes} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function getGeofenceSupportedCoordTypes(): Array<CoordinateSystemType>;

  /**
   * Get location icon status.
   *
   * @returns { LocationIconStatus } The location icon status.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getLocationIconStatus} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getLocationIconStatus(): LocationIconStatus;

  /**
     * Obtains the BSSID of the connected Wi-Fi hotspot.
     *
     * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
     * @returns {string} Returns the BSSID of the connected Wi-Fi hotspot.
     * @throws { BusinessError } 201 - Permission verification failed. The application
     *     does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call
     *     ${geoLocationManager.getCurrentWifiBssidForLocating()} due to limited device capabilities.
     * @throws { BusinessError } 3301000 - The location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301900 - Failed to obtain the BSSID of the Wi-Fi hotspot.
     *     The Wi-Fi network is not connected.
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    function getCurrentWifiBssidForLocating(): string;

  /**
   * Obtains the distance between two locations.
   *
   * @param { Location } location1 - Indicates first location.
   * @param { Location } location2 - Indicates second location.
   * @returns { double } Returns the distance between two locations.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getDistanceBetweenLocations(location1: Location, location2: Location): double;

  /**
   * Check whether the POI service is supported.
   *
   * @returns { boolean } Returns {@code true} if POI service is available, returns {@code false} otherwise.
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  function isPoiServiceSupported(): boolean;

  /**
   * Obtaining POI Information.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<PoiInfo> } The promise returned by the function, for reporting POI info.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getPoiInfo} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getPoiInfo(): Promise<PoiInfo>;

  /**
   * Add a beacon fence.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { BeaconFenceRequest } fenceRequest - Indicates the details of the beacon fence.
   * @returns { Promise<int> } The promise returned by the function, for reporting the ID of beacon fence.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.addBeaconFence}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3501100 - Failed to add a beacon fence because the location switch is off.
   * @throws { BusinessError } 3501101 - Failed to add a beacon fence because the bluetooth switch is off.
   * @throws { BusinessError } 3501601 - The number of beacon fences exceeds the maximum.
   * @throws { BusinessError } 3501603 - Duplicate beacon fence information.
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function addBeaconFence(fenceRequest: BeaconFenceRequest): Promise<int>;

  /**
   * Remove a beacon fence.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 20 - 24]
   * @param { BeaconFence } [beaconFence] - Indicates the details of the beacon fence.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20 - 24]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.removeBeaconFence}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3501602 - Failed to delete the fence due to incorrect beacon fence information.
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function removeBeaconFence(beaconFence?: BeaconFence): Promise<void>;

  /**
   * Check whether the BeaconFence service is supported.
   *
   * @returns { boolean } Returns {@code true} if BeaconFence service is available, returns {@code false} otherwise.
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function isBeaconFenceSupported(): boolean;

  /**
   * Check whether the WLAN scan results match the WLAN BSSID list.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Array<string> } wlanBssidArray - Indicates the list of WLAN BSSIDs that need to be matched.
   * @param { int } rssiThreshold - Indicates the WLAN RSSI threshold, only matching WLAN BSSID with
   *     RSSI greater than this threshold.
   * @param { boolean } needStartScan - Indicate whether a WLAN scan needs to be initiated.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.isWlanBssidMatched} due to limited device capabilities.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301800 - Failed to start WiFi scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function isWlanBssidMatched(
      wlanBssidArray: Array<string>, rssiThreshold: int, needStartScan: boolean): Promise<boolean>;

  /**
   * Check whether the GNSS service is supported.
   *
   * @returns { boolean } Returns {@code true} if GNSS service is available, returns {@code false} otherwise.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isGnssServiceSupported(): boolean;

  /**
   * Check whether the GNSS fence service is supported.
   *
   * @returns { boolean } Returns {@code true} if GNSS fence service is available, returns {@code false} otherwise.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isGnssFenceServiceSupported(): boolean;

  /**
   * Check whether the cached GNSS service is supported.
   *
   * @returns { boolean } Returns {@code true} if cached GNSS service is available, returns {@code false} otherwise.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isCachedGnssServiceSupported(): boolean;

  /**
   * Check whether the WLAN scan results match the WLAN BSSID list,
   * return information about the WLAN device that is successfully matched.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Array<string> } wlanBssidArray - Indicates the list of WLAN BSSIDs that need to be matched.
   * @param { int } rssiThreshold - Indicates the WLAN RSSI threshold, only matches WLAN BSSIDs with
   *     RSSI greater than this threshold.
   * @param { boolean } needStartScan - Indicates whether a WLAN scan needs to be initiated.
   * @returns { Promise<Array<MatchingWlanInfo>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.findMatchingWlan} due to limited device capabilities.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301800 - Failed to start WLAN scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function findMatchingWlan(
      wlanBssidArray: Array<string>, rssiThreshold: int, needStartScan: boolean): Promise<Array<MatchingWlanInfo>>;

  /**
   * Obtains the information about the district where the current device is located.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { DistrictRequestParams } [params] - Indicates request parameters for obtaining the district information.
   * @returns { Promise<DistrictInfo> } Promise used to return ${DistrictInfo}.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentDistrict} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301500 - Failed to query the area information because the reverse geocoding server
   *     returns an error.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function getCurrentDistrict(params?: DistrictRequestParams): Promise<DistrictInfo>;

  /**
   * Starts Bluetooth scanning and matches the device ID list in the input parameter
   * with the Bluetooth scanning result. If the matching is successful, the Bluetooth
   * device information is returned through the callback.
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { BluetoothSearchRequestParams } request - Indicates the configuration parameters
   *     for the Bluetooth search function.
   * @param { Callback<BluetoothScanResult> } callback - Callback used to return ${BluetoothScanResult}.
   * @throws { BusinessError } 201 - Permission verification failed. The application does
   *     not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.startBluetoothSearch} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301800 - Failed to start Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function startBluetoothSearch(
      request: BluetoothSearchRequestParams, callback: Callback<BluetoothScanResult>): void;
	  
  /**
   * Stop Bluetooth scanning and searching.
   *
   * @param { Callback<BluetoothScanResult> } [callback] - Callback used to return ${BluetoothScanResult}.
   *     It should be the same as the callback passed to ${geoLocationManager.startBluetoothSearch}.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.startBluetoothSearch} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function stopBluetoothSearch(callback?: Callback<BluetoothScanResult>): void;

  /**
   * Obtain post-processing trajectory information under specific sport mode. Only
   * [SKIING]{@link geoLocationManager.SportsType.SKIING} is supported currently.
   * 
   * Before calling this API, you need to call
   * [on('locationChange')]{@link geoLocationManager.on('locationChange')} and set the input parameter
   * [sportsType]{@link geoLocationManager.ContinuousLocationRequest.sportsType} to the specific sport mode to start
   * tracking.
   * 
   * Returns data within 24 hours since tracking started; Subsequent calls return only new records.
   *
   * @permission ohos.permission.LOCATION
   * @param { SportsType } sportsType - Indicate the type of sports.
   * @returns { Promise<Array<Location>> } Promise used to return `Array<Location>`.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call this API due to limited device
   *     capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the post processing track because sports type is not
   *     supported.
   * @syscap SystemCapability.Location.Location.Gnss
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function getPostProcessingTrack(sportsType: SportsType): Promise<Array<Location>>;

  /**
   * Add a fusion fence.
   *
   * @permission ohos.permission.LOCATION
   * @param { FusionFenceRequestParams } fenceRequestParams - Indicates the fusion fence request parameters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call this API due to limited device.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3501603 - Duplicate fusion fence identifier.
   * @throws { BusinessError } 3301601 - The number of geofences exceeds the maximum.
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function addFusionFence(fenceRequestParams: FusionFenceRequestParams): Promise<void>;

  /**
   * Remove a fusion fence.
   *
   * @param { string } identifier - Indicates identifier of the fusion fence.
   *     The string format should be a valid unique identifier (e.g., GUID or specific alphanumeric pattern).
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call this API due to limited device.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301602 - Failed to delete a fusion fence due to an incorrect identifier.
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function removeFusionFence(identifier: string): Promise<void>;
  
  /**
   * Check whether the fusion fence service is supported.
   *
   * @returns { boolean } Returns {@code true} if fusion fence service is available, returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function isFusionFenceSupported(): boolean;

  /**
   * Indicates request parameters for Bluetooth search function.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface BluetoothSearchRequestParams {  
    /**
     * Indicates the list of Bluetooth device ID that need to be search.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    deviceIdArray: Array<string>;

    /**
     * Indicates the Bluetooth RSSI threshold,
     * only search Bluetooth BSSID with RSSI greater than this threshold.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    rssiThreshold?: int;
  }

  /**
   * Indicates request parameters for obtaining the district information.
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface DistrictInfo {  
    /**
     * Indicates language used for the location description.
     * zh indicates Chinese, and en indicates English.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    locale?: string;

    /**
     * Indicates country code.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    countryCode?: string;

    /**
     * Indicates country name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    countryName?: string;

    /**
     * Indicates administrative region name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    administrativeArea?: string;

    /**
     * Indicates sub-administrative region name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    subAdministrativeArea?: string;

    /**
     * Indicates locality information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    locality?: string;

    /**
     * Indicates sub-locality information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    subLocality?: string;
  } 

  /**
   * Indicates request parameters for obtaining the district information.
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface DistrictRequestParams {  
    /**
     * Indicates the language area information.
     * ISO 639 alpha-2 or alpha-3 language code.
     * Example: "zh" (Chinese), "en" (English).
     * The default value is obtained from the language settings of the device (settings/system/Language & region
     * /Language).
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    locale?: string;

    /**
     * Indicates the timeout period.
     * The default value is 5000 ms.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    timeoutMs?: int;
  }

  /**
   * Configuration parameters for simulating reverse geocoding.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ReverseGeocodingMockInfo {
    /**
     * Location for which reverse geocoding query is required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    location: ReverseGeoCodeRequest;

    /**
     * Actual address information corresponding to the location.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    geoAddress: GeoAddress;
  }

  /**
   * Parameters for configuring the location simulation function.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocationMockConfig {
    /**
     * Interval for reporting simulated locations.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval: int;

    /**
     * Mock location array.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    locations: Array<Location>;
  }

  /**
   * Satellite status information.
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface SatelliteStatusInfo {
    /**
     * Number of satellites.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    satellitesNumber: int;

    /**
     * Satellite ID array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    satelliteIds: Array<int>;

    /**
     * Carrier to noise density array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    carrierToNoiseDensitys: Array<double>;

    /**
     * Satellite altitude array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    altitudes: Array<double>;

    /**
     * Satellite azimuth array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    azimuths: Array<double>;

    /**
     * Satellite carrier frequency array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    carrierFrequencies: Array<double>;

    /**
     * Satellite constellation type array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    satelliteConstellation?: Array<SatelliteConstellationCategory>;

    /**
     * Satellite additional information array.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    satelliteAdditionalInfo?: Array<int>;
  }

  /**
   * Parameters for requesting to report cache location information.
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CachedGnssLocationsRequest {
    /**
     * GNSS cache location report period.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    reportingPeriodSec: int;

    /**
     * Indicates whether to wake up the listener when the GNSS cache location queue is full.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    wakeUpCacheQueueFull: boolean;
  }

  /**
   * Cell information.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface CellInfo {  
    /**
     * Indicates timestamp since boot.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    timeSinceBoot: long;

    /**
     * Indicates ID of cell.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cellId: long;

    /**
     * Indicates location area code(LAC).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lac: int;

    /**
     * Indicates mobile country code (MCC).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mcc: int;

    /**
     * Indicates mobile network code (MNC).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mnc: int;

    /**
     * Indicates radio access technology (RAT).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rat: int;

    /**
     * Indicates signal intensity.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    signalIntensity: int;

    /**
     * Indicates absolute radio frequency channel number (ARFCN).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    arfcn: int;

    /**
     * Indicates physical cell identifier (PCI).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pci: int;

    /**
     * Indicates tracking area code (TAC).
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    tac?: int;

    /**
     * Indicates additional information map.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    additionsMap?: Map<string, string>;
  }

  /**
   * Configuring parameters in GNSS geofence requests.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export interface GnssGeofenceRequest {
    /**
     * Circular fence information.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    geofence: Geofence;

    /**
     * Indicates geofence transition status monitored.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    monitorTransitionEvents: Array<GeofenceTransitionEvent>;

    /**
     * Indicates the geofence notifications to publish.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    notifications?: Array<NotificationRequest>;

    /**
     * Indicates the callback for reporting the geofence transition status.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    geofenceTransitionCallback: AsyncCallback<GeofenceTransition>;

    /**
     * Indicates time for which a device is dwelling in the geofence, in milliseconds.
     * If the device dwelling time reaches the value specified by this parameter,
     * a GEOFENCE_TRANSITION_EVENT_DWELL event is reported.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 23 dynamic&static
     */
    loiterTimeMs?: int;

    /**
     * Indicates the name of FenceExtensionAbility.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 23 dynamic&static
     */
    fenceExtensionAbilityName?: string;
  }

  /**
   * Configuring parameters in geo fence requests.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 9 dynamic
   * @since 23 static
   */
  export interface GeofenceRequest {
    /**
     * Indicate the user scenario.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 9 dynamic
     * @since 23 static
     */
    scenario: LocationRequestScenario;

    /**
     * Circular fence information.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 9 dynamic
     * @since 23 static
     */
    geofence: Geofence;
  }

  /**
   * Circular fence information.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Geofence {
    /**
     * Latitude of the center point of the circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Longitude of the center point of the circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Coordinate system type.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    coordinateSystemType?: CoordinateSystemType;

    /**
     * Radius of the circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    radius: double;

    /**
     * Expiration of the circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    expiration: double;
  }

  /**
   * Configuring parameters in reverse geocode requests.
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ReverseGeoCodeRequest {
    /**
     * Indicates the language area information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * Indicates the country information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    country?: string;

    /**
     * Latitude for reverse geocoding query.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Longitude for reverse geocoding query.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Indicates the maximum number of addresses returned by reverse geocoding query.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxItems?: int;
  }

  /**
   * Configuring parameters in geocode requests.
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface GeoCodeRequest {
    /**
     * Indicates the language area information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * Indicates the country information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    country?: string;

    /**
     * Address information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * Indicates the maximum number of geocode query results.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxItems?: int;

    /**
     * Indicates the minimum latitude for geocoding query results.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    minLatitude?: double;

    /**
     * Indicates the minimum longitude for geocoding query results.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    minLongitude?: double;

    /**
     * Indicates the maximum latitude for geocoding query results.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxLatitude?: double;

    /**
     * Indicates the maximum longitude for geocoding query results.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxLongitude?: double;
  }

  /**
   * Data struct describes geographic locations.
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface GeoAddress {
    /**
     * Indicates latitude information.
     * A positive value indicates north latitude,
     * and a negative value indicates south latitude.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude?: double;

    /**
     * Indicates longitude information.
     * A positive value indicates east longitude ,
     * and a negative value indicates west longitude.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude?: double;

    /**
     * Indicates language used for the location description.
     * zh indicates Chinese, and en indicates English.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * Indicates detailed address information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    placeName?: string;

    /**
     * Indicates country code.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    countryCode?: string;

    /**
     * Indicates country name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    countryName?: string;

    /**
     * Indicates administrative region name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    administrativeArea?: string;

    /**
     * Indicates sub-administrative region name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    subAdministrativeArea?: string;

    /**
     * Indicates locality information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locality?: string;

    /**
     * Indicates sub-locality information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    subLocality?: string;

    /**
     * Indicates road name.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    roadName?: string;

    /**
     * Indicates auxiliary road information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    subRoadName?: string;

    /**
     * Indicates house information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    premises?: string;

    /**
     * Indicates postal code.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    postalCode?: string;

    /**
     * Indicates phone number.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    phoneNumber?: string;

    /**
     * Indicates website URL.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    addressUrl?: string;

    /**
     * Indicates additional information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    descriptions?: Array<string>;

    /**
     * Indicates the amount of additional descriptive information.
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionsSize?: int;

    /**
     * Indicates whether it is an mock GeoAddress
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    isFromMock?: Boolean;
  }

  /**
   * Configuring parameters in location requests.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocationRequest {
    /**
     * Priority of the location request.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    priority?: LocationRequestPriority;

    /**
     * User scenario of the location request.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scenario?: LocationRequestScenario;

    /**
     * Location report interval.
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?int } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval?: int;

    /**
     * Location report distance interval.
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?double } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    distanceInterval?: double;

    /**
     * Accuracy requirements for reporting locations.
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?double } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    maxAccuracy?: double;
  }

  /**
   * Configuring parameters in current location requests.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CurrentLocationRequest {
    /**
     * Priority of the location request.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    priority?: LocationRequestPriority;

    /**
     * User scenario of the location request.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scenario?: LocationRequestScenario;

    /**
     * Accuracy requirements for reporting locations.
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?double } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    maxAccuracy?: double;

    /**
     * Timeout interval of a single location request.
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?int } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeoutMs?: int;
  }

  /**
   * Geofence transition status.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export interface GeofenceTransition {
    /**
     * ID of the geofence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    geofenceId: int;

    /**
     * Indicates the geofence transition status.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    transitionEvent: GeofenceTransitionEvent;

    /**
     * Indicate the beaconFence which transitionEvent occurs.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    beaconFence?: BeaconFence;
  }

  /**
   * Configuring parameters in continuous location requests.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface ContinuousLocationRequest {
    /**
     * Location report interval, in seconds.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * Location scenario. You can select a user activity scenario or power consumption scenario.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    locationScenario: UserActivityScenario | PowerConsumptionScenario;

    /**
     * Indicates the type of sports.
     * This parameter is valid only when locationScenario is set to UserActivityScenario.SPORT.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi [since 18 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    sportsType?: SportsType;

    /**
     * Indicates whether to obtain POI information near the current location.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    needPoi?: boolean;
  }

  /**
   * Configuring parameters in single location requests.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface SingleLocationRequest {
    /**
     * Priority of the location request.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    locatingPriority: LocatingPriority;

    /**
     * Timeout of a single location request, in milliseconds.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    locatingTimeoutMs: int;

    /**
     * Indicates whether to obtain POI information near the current location.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    needPoi?: boolean;
  }

  /**
   * Provides information about geographic locations.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Location {
    /**
     * Indicates latitude information.
     * A positive value indicates north latitude,
     * and a negative value indicates south latitude.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Indicates Longitude information.
     * A positive value indicates east longitude ,
     * and a negative value indicates west longitude.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Indicates location altitude, in meters.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    altitude: double;

    /**
     * Indicates location accuracy, in meters.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    accuracy: double;

    /**
     * Indicates speed, in m/s.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    speed: double;

    /**
     * Indicates location timestamp in the UTC format.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeStamp: long;

    /**
     * Indicates direction information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    direction: double;

    /**
     * Indicates location timestamp since boot.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeSinceBoot: long;

    /**
     * Indicates additional information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    additions?: Array<string>;

    /**
     * Indicates additional information map.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    additionsMap?: Map<string, string>;

    /**
     * Indicates the amount of additional descriptive information.
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?int } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    additionSize?: int;

    /**
     * Indicates whether the location is mocked.
     *
     * @type {?boolean} [since 9 - 24]
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    isFromMock?: boolean;

    /**
     * Indicates vertical position accuracy in meters.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    altitudeAccuracy?: double;

    /**
     * Indicates speed accuracy in meter per seconds.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    speedAccuracy?: double;

    /**
     * Indicates direction accuracy in degrees.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    directionAccuracy?: double;

    /**
     * Time uncertainty Of timeSinceBoot in nanosecond.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncertaintyOfTimeSinceBoot?: long;

    /**
     * Indicates the source of the location.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    sourceType?: LocationSourceType;

    /**
     * Indicates the poi information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    poi?: PoiInfo;
  }

  /**
   * Describes the request parameters for obtaining the data required for locating.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface LocatingRequiredDataConfig {
    /**
     * Indicates the type of locating required data.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    type: LocatingRequiredDataType;

    /**
     * Indicates whether to start scanning.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    needStartScan: boolean;

    /**
     * Indicates the interval between scans. The unit is millisecond.
     * This parameter needs to be set only when scanning information is continuously monitored.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    scanInterval?: int;

    /**
     * Indicates the timeout period of a single scan. The unit is millisecond. The default value is 10000.
     * This parameter needs to be set only when getLocatingRequiredData is used.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    scanTimeout?: int;

    /**
     * Indicates SIM card slot number.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    slotId?: int;

    /**
     * Indicates absolute radio frequency channel number (ARFCN).
     * Querying Cell Information by Specified ARFCN.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    arfcn?: int[];

    /**
     * Indicates PLMN number of the SIM card.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    plmnId?: int[];
  }

  /**
   * Describes the structure of the data required for locating.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface LocatingRequiredData {
    /**
     * WiFi scan info.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    wifiData?: WifiScanInfo;

    /**
     * Bluetooth scan info.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bluetoothData?: BluetoothScanInfo;

    /**
     * Indicates the card slot index number.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    slotId?: int;

    /**
     * Indicates camped cell information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    campedCellInfo?: CellInfo;

    /**
     * Indicates neighboring cell information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    neighboringCellInfo?: CellInfo[];
  }

  /**
   * Describes the scanned WiFi information.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface WifiScanInfo {
    /**
     * WiFi SSID: the maximum length is 32.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * WiFi bssid(MAC): the length is 6.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * Received signal strength indicator (RSSI).
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * Frequency
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Time stamp.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * Describes the contents of the Bluetooth scan results.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface BluetoothScanInfo {
    /**
     * The local name of the device.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Mac address of the scanned device.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * RSSI of the remote device.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * Time stamp.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * Describes the contents of the bluetooth scan results.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 16 dynamic
   * @since 23 static
   */
  export interface BluetoothScanResult {
    /**
     * Address of the scanned device
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * RSSI of the scanned device
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * The raw data of broadcast packet
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    data?: ArrayBuffer;

    /**
     * The local name of the scanned device
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Connectable of the scanned device
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    connectable: boolean;
  }

  /**
   * Describes the information about a single POI.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export interface Poi {
    /**
     * Indicates the ID of a POI.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Indicates the confidence of POI information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    confidence: double;

    /**
     * Indicates the name of the POI.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Indicates the latitude of POI.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Indicates the longitude of POI.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Indicates administrative region name.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    administrativeArea: string;

    /**
     * Indicates sub-administrative region name.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    subAdministrativeArea: string;

    /**
     * Indicates locality information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    locality: string;

    /**
     * Indicates sub-locality information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    subLocality: string;

    /**
     * Indicates the detailed address of the POI.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * Additional information about the POI.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    additionalInfo?: string;
  }


  /**
   * Describes the POI information struct.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export interface PoiInfo {
    /**
     * Indicates POI information list.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    poiArray: Array<Poi>;

    /**
     * Indicates the timestamp when the POI information is obtained.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * Beacon equipment manufacturer data.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export interface BeaconManufactureData {
    /**
     * Manufacture id.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureId: int;

    /**
     * Manufacture data.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureData: ArrayBuffer;

    /**
     * Manufacture data mask.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureDataMask: ArrayBuffer;
  }

  /**
   * Beacon fence details.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export interface BeaconFence {
    /**
     * Identifier of the beacon fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    identifier: string;

    /**
     * Beacon fence information type.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    beaconFenceInfoType: BeaconFenceInfoType;

    /**
     * Beacon equipment manufacture data.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureData?: BeaconManufactureData;
  }

  /**
   * Configuring parameters in BeaconFence request.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  export interface BeaconFenceRequest {
    /**
     * Beacon fence information.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    beacon: BeaconFence;

    /**
     * Indicates the callback for reporting the BeaconFence transition status.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    transitionCallback?: Callback<GeofenceTransition>;

    /**
     * Indicates the name of FenceExtensionAbility.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    fenceExtensionAbilityName?: string;
  }

  /**
   * Matching WLAN information structure.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export interface MatchingWlanInfo {  
    /**
     * Indicates the index of the matched WLAN in the wlanBssidArray.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    index: int;

    /**
     * WLAN SSID.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ssid: string;
  }

  /**
   * Enum for the source of the location.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocationSourceType {
    /**
     * The location is obtained from the GNSS.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GNSS = 1,

    /**
     * The location comes from the network positioning technology.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK = 2,

    /**
     * The location comes from the indoor positioning technology.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INDOOR = 3,

    /**
     * The location comes from the GNSS RTK technology.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RTK = 4
  }

  /**
   * Enum for coordinate system type.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum CoordinateSystemType {
    /**
     * WGS84 coordinates system.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    WGS84 = 1,

    /**
     * GCJ-02 coordinates system.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GCJ02 = 2
  }

  /**
   * Enum for location icon status.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocationIconStatus {
    /**
     * The locating service is not started.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_NOT_STARTED = 0,

    /**
     * The normal locating service is started.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_STARTED = 1,

    /**
     * The HD locating service(RTK) is started.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HD_LOCATING_STARTED = 2
  }

  /**
   * Enum for location error code.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocationError {
    /**
     * Default cause for location failure.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_DEFAULT = -1,

    /**
     * Locating failed because the location permission fails to be verified.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_LOCATION_PERMISSION_DENIED = -2,

    /**
     * Locating failed because the app is in the background and the background location permission verification failed.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_BACKGROUND_PERMISSION_DENIED = -3,

    /**
     * Locating failed because the location switch is turned off.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_LOCATION_SWITCH_OFF = -4,

    /**
     * Locating failed because internet access failure.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_INTERNET_ACCESS_FAILURE = -5
  }

  /**
   * Enum for geofence transition status.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum GeofenceTransitionEvent {
    /**
     * The device is within the geofence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOFENCE_TRANSITION_EVENT_ENTER = 1,

    /**
     * The device is out of the geofence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOFENCE_TRANSITION_EVENT_EXIT = 2,

    /**
     * The device is in the geographical fence for a period of time.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOFENCE_TRANSITION_EVENT_DWELL = 4,

    /**
     * The device is approaching the geofence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GEOFENCE_TRANSITION_EVENT_APPROACHING_GEOFENCE = 8,

    /**
     * The device is leaving the geofence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GEOFENCE_TRANSITION_EVENT_LEAVING_GEOFENCE = 16,

    /**
     * The device is approaching the fence from the outside and already very near to it for long time.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GEOFENCE_TRANSITION_EVENT_NEAR_WANDER = 32
  }

  /**
   * Enum for satellite constellation category.
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SatelliteConstellationCategory {
    /**
     * Invalid value.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_UNKNOWN = 0,

    /**
     * GPS.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_GPS = 1,

    /**
     * SBAS.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_SBAS = 2,

    /**
     * GLONASS.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_GLONASS = 3,

    /**
     * QZSS.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_QZSS = 4,

    /**
     * BEIDOU.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_BEIDOU = 5,

    /**
     * GALILEO.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_GALILEO = 6,

    /**
     * IRNSS.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_IRNSS = 7
  }

  /**
   * Enum for satellite additional information.
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SatelliteAdditionalInfo {
    /**
     * Default value.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_NULL = 0,

    /**
     * Ephemeris data exist.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_EPHEMERIS_DATA_EXIST = 1,

    /**
     * Almanac data exist.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_ALMANAC_DATA_EXIST = 2,

    /**
     * This satellite is being used in location fix.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_USED_IN_FIX = 4,

    /**
     * Carrier frequency exist.
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_CARRIER_FREQUENCY_EXIST = 8
  }

  /**
   * Enum for user activity scenario.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum UserActivityScenario {
    /**
     * Navigation scenario. High positioning precision and real-time performance are required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NAVIGATION = 0x401,

    /**
     * Sport scenario. High positioning precision is required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPORT = 0x402,

    /**
     * Transport scenario. High positioning precision and real-time performance are required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSPORT = 0x403,

    /**
     * Daily life scenarios. Low requirements on positioning precision.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DAILY_LIFE_SERVICE = 0x404
  }

  /**
   * Enum for locating priority.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocatingPriority {
    /**
     * Preferentially ensure the highest locating accuracy.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PRIORITY_ACCURACY = 0x501,

    /**
     * Preferentially ensure the fastest locating speed.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PRIORITY_LOCATING_SPEED = 0x502
  }

  /**
   * Enum for location priority.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LocationRequestPriority {
    /**
     * Default priority.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSET = 0x200,

    /**
     * Preferentially ensure the locating accuracy.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACCURACY = 0x201,

    /**
     * Preferentially ensure low power consumption for locating.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LOW_POWER = 0x202,

    /**
     * Preferentially ensure that the first location is time-consuming.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FIRST_FIX = 0x203
  }

  /**
   * Enum for location scenario.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LocationRequestScenario {
    /**
     * Default scenario.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSET = 0x300,

    /**
     * Navigation scenario. High positioning precision and real-time performance are required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NAVIGATION = 0x301,


    /**
     * Trajectory tracking scenario. High positioning precision is required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TRAJECTORY_TRACKING = 0x302,

    /**
     * Car hailing scenario. High positioning precision and real-time performance are required.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CAR_HAILING = 0x303,

    /**
     * Daily life scenarios. Low requirements on positioning precision and real-time performance.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DAILY_LIFE_SERVICE = 0x304,

    /**
     * Power saving scenarios.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NO_POWER = 0x305
  }

  /**
   * Enum for power consumption scenario.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PowerConsumptionScenario {
    /**
     * High power consumption mode.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH_POWER_CONSUMPTION = 0x601,

    /**
     * Low power consumption mode.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOW_POWER_CONSUMPTION = 0x602,

    /**
     * Power saving scenarios.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NO_POWER_CONSUMPTION = 0x603
  }

  /**
   * Enum for location privacy type.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LocationPrivacyType {
    /**
     * Other scenarios.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    OTHERS = 0,

    /**
     * Privacy agreement for the startup wizard scenario.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STARTUP = 1,

    /**
     * Privacy agreement pop-up when network location is enabled.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CORE_LOCATION = 2
  }

  /**
   * Enum for sports type
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum SportsType {
    /**
     * Indicates running.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    RUNNING = 1,

    /**
     * Indicates walking.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    WALKING = 2,

    /**
     * Indicates cycling.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    CYCLING = 3,

    /**
     * Indicates Skiing.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SKIING = 4
  }

  /**
   * Location subsystem command structure.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocationCommand {
    /**
     * Information about the scenario where the command is sent.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @since 9 dynamic
     * @since 23 static
     */
    scenario: LocationRequestScenario;

    /**
     * Sent command content.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @since 9 dynamic
     * @since 23 static
     */
    command: string;
  }

  /**
   * Country code structure.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CountryCode {
    /**
     * Country code character string.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    country: string;

    /**
     * Country code source.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    type: CountryCodeType;
  }

  /**
   * Indicates fusion fence request params.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface FusionFenceRequestParams {  
    /**
     * Identifier of the fusion fence.
     * The string format should be a valid unique identifier (e.g., GUID or specific
     * alphanumeric pattern).
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    identifier: string;

    /**
     * Indicates fusion fence scene.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    scene: FusionFenceScene;

    /**
     * Indicates fusion fence type.
     * This field is in bitmap format. Multiple types of fences can be transferred.
     * The definition of each bit is as follows: [FusionFenceType]{@link geoLocationManager.FusionFenceType}.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    fenceType: int;

    /**
     * Indicates the type of POI.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    poiType?: string;

    /**
     * Indicates the location of POI.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    poiLocation: Point;

    /**
     * Indicates geofence transition status monitored.
     * This field is in bitmap format.
     * The definition of each bit is as follows {@link geoLocationManager.GeofenceTransitionEvent}.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    monitorTransitionEvents: int;
	
    /**
     * Indicates time for which a device is dwelling in the geofence, in milliseconds.
     * If the device dwelling time reaches the value specified by this parameter,
     * a GEOFENCE_TRANSITION_EVENT_DWELL event is reported.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    loiterTimeMs: int;
	
    /**
     * Indicates GNSS fence array.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    gnssFences?: Array<GnssFence>;
	
    /**
     * Indicates CELL fence array.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    cellFences?: Array<CellFence>;
	
    /**
     * Indicates Wi-Fi fence array.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    wifiFences?: Array<WifiFence>;

    /**
     * Indicates expiration of the circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    expirationMs: double;

    /**
     * Indicates the callback for reporting the fence transition status.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    fenceTransitionCallback: Callback<FusionFenceTransition>;
  }

  /**
   * Indicates fusion fence transition information.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface FusionFenceTransition {  
    /**
     * Identifier of the fusion fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    identifier: string;

    /**
     * Indicates fusion fence scene.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    scene: FusionFenceScene;

    /**
     * Indicates the fence transition event.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    transitionEvent: GeofenceTransitionEvent;
  }
  
  /**
   * Indicates GNSS fence information.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface GnssFence {  
    /**
     * Indicates GNSS fence type.
     * The value range of this field is as follows: [GnssFenceType]{@link geoLocationManager.GnssFenceType}.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    gnssFenceType: int;
	
    /**
     * Indicates circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    circularFence?: Geofence;
	
    /**
     * Indicates polygonal fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    polygon?: Array<Point>;
  }

  /**
   * Indicates CELL fence information.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface CellFence {  
    /**
     * Indicates CELL information array.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    cellInfos: Array<CellInfo>;
  }
  
  /**
   * Indicates Wi-Fi fence information.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface WifiFence {  
    /**
     * Indicates Wi-Fi fingerprint type.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    type: WifiFingerprintType;

    /**
     * Indicates Wi-Fi features.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    wifiFeatures: Array<WirelessSignalFeature>;
  }
  
  /**
   * Indicates wireless signal feature.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface WirelessSignalFeature {  
    /**
     * Indicates average RSSI value.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    rssiAvg: int;

    /**
     * Indicates RSSI standard deviation.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    rssiStandardDeviation: double;
	
    /**
     * Indicates MAC array.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    mac: Array<string>;
  }
  
  /**
   * Indicates a location point, including the longitude and latitude.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface Point {  
    /**
     * Indicates latitude.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    latitude: double;
	
    /**
     * Indicates longitude.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    longitude: double;
  }

  /**
   * Enum for country code type.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum CountryCodeType {
    /**
     * Country code obtained from the locale setting.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_LOCALE = 1,

    /**
     * Country code obtained from the SIM information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_SIM = 2,

    /**
     * Query the country code information from the reverse geocoding result.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_LOCATION = 3,

    /**
     * Obtain the country code from the cell registration information.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_NETWORK = 4
  }

  /**
   * Enum for locating required data type.
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export enum LocatingRequiredDataType {
    /**
     * Obtains WiFi scanning information for locating.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI = 1,

    /**
     * Obtains BT scanning information for locating.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    BLUETOOTH = 2,

    /**
     * Obtaining cellular cell information for locating.
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    CELLULAR = 3
  }

  /**
   * Enum for the beacon fence information type.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum BeaconFenceInfoType {
    /**
     * Identifies a beacon device using beacon device manufacture data.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    BEACON_MANUFACTURE_DATA = 1
  }

  /**
   * Enum for GNSS fence type.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum GnssFenceType {  
    /**
     * Indicates the polygon fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    POLYGON = 1,

    /**
     * Indicates the circular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    CIRCULAR = 2
  }
  
  /**
   * Enum for Wi-Fi fingerprint type.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum WifiFingerprintType {  
    /**
     * Indicates the Wi-Fi fingerprint of semantic information.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SEMANTIC = 1,

    /**
     * Indicates the Wi-Fi fingerprint corresponding to a location.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    LOCATION = 2
  }

  /**
   * Enum for fusion fence type.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum FusionFenceType {  
    /**
     * Indicates the GNSS fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GNSS = 1,
	
    /**
     * Indicates the cellular fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    CELLULAR = 2,
	
    /**
     * Indicates the Wi-Fi fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    WIFI = 4,
	
    /**
     * Indicates the Bluetooth fence.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    BLUETOOTH = 8
  }
  
  /**
   * Enum for fusion fence scene.
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum FusionFenceScene {  
    /**
     * Indicates the airport scene.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    AIRPORT = 1,

    /**
     * Indicates the train station scene.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    TRAIN_STATION = 2,
	
    /**
     * Indicates the subway scene.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SUBWAY = 3,

    /**
     * Indicates the shop scene.
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SHOP = 4
  }
}

export default geoLocationManager;
