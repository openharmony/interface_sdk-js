'use static'
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
  * @kit ArkWeb
  */
import { Resource } from './global/resource';
import { SizeOptions } from '@ohos.arkui.component';
import { AsyncCallback, BusinessError } from './@ohos.base';
import { Callback } from './@ohos.base';
import type cert from './@ohos.security.cert';
import type image from './@ohos.multimedia.image';
import type print from './@ohos.print';

/**
  * This module provides the capability to manage web modules.
  *
  * @namespace webview
  * @syscap SystemCapability.Web.Webview.Core
  * @since 22 static
  */
declare namespace webview {

    /**
     * Defines the Web's request/response header.
     *
     * @typedef WebHeader
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface WebHeader {
        /**
         * Gets the key of the request/response header.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        headerKey: string;

        /**
         * Gets the value of the request/response header.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        headerValue: string;
    }

    /**
     * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum WebHitTestType {
        /**
         * The edit text.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        EDIT_TEXT,

        /**
         * The email address.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        EMAIL,

        /**
         * The HTML::a tag with src=http.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HTTP_ANCHOR,

        /**
         * The HTML::a tag with src=http + HTML::img.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HTTP_ANCHOR_IMG,

        /**
         * The HTML::img tag.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        IMG,

        /**
         * The map address.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MAP,

        /**
         * The phone number.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        PHONE,

        /**
         * Other unknown HitTest.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        UNKNOWN
    }

    /**
     * Enum type for ArkWeb Engine Version.
     *
     * <strong>ArkWeb Dual Web Engine Versioning Convention</strong>:
     * <p>See [ArkWeb Dual Web Engine Versioning Convention] for switching between Legacy and Evergreen Web Engine.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum ArkWebEngineVersion {
        /**
         * Use the system default ArkWeb engine.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        SYSTEM_DEFAULT = 0,

        /**
         * ArkWeb M114 version.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        M114 = 1,

        /**
         * ArkWeb M132 version.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        M132 = 2,

        /**
         * ArkWeb auto use the newest ArkWeb Engine version.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ARKWEB_EVERGREEN = 99999
    }

    /**
     * The playback status of all audio and video.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum MediaPlaybackState {
        /**
         * No audio or video currently.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NONE = 0,

        /**
         * The audio and video on the page are being played.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        PLAYING = 1,

        /**
         * The audio and video on the page are paused.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        PAUSED = 2,

        /**
         * The audio and video on the page are stopped.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        STOPPED = 3
    }

    /**
     * The memory pressure level that can be set.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum PressureLevel {
        /**
         * Modules are advised to free buffers that are cheap to re-allocate and not immediately needed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MEMORY_PRESSURE_LEVEL_MODERATE = 1,

        /**
         * At this level, modules are advised to free all possible memory.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MEMORY_PRESSURE_LEVEL_CRITICAL = 2
    }

    /**
     * Provides element information of the click area. related to {@link getLastHitTest} method.
     *
     * @typedef HitTestValue
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface HitTestValue {
        /**
         * Get the hit test type.
         *
         * @type { WebHitTestType }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        type: WebHitTestType;

        /**
         * Get the hit test extra data.
         * If the clicked area is an image or a link, the additional parameter information is it's URL address.
         *
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        extra: string;
    }

    /**
     * Defines the callback of createPdf, related to {@link createPDF} method.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class PdfData {
        /**
         * Return the data stream generated by the webpage.
         *
         * @returns { Uint8Array } return pdf data.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        pdfArrayBuffer(): Uint8Array;
    }

    /**
     * Defines the configuration of creating pdf, related to {@Link createPdf} method.
     *
     * @typedef PdfConfiguration
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface PdfConfiguration {
        /**
         * Number of the width.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        width: double;

        /**
         * Number of the height.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        height: double;

        /**
         * Number of the marginTop.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        marginTop: double;

        /**
         * Number of the marginBottom.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        marginBottom: double;

        /**
         * Number of the marginRight.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        marginRight: double;

        /**
         * Number of the marginLeft.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        marginLeft: double;

        /**
         * Number of the scaling.
         *
         * @type { ?double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        scale?: double;

        /**
         * Whether background should be printed when creating pdf.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        shouldPrintBackground?: boolean;
    }

    /**
     * Provides basic information of web storage.
     *
     * @typedef WebStorageOrigin
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface WebStorageOrigin {
        /**
         * Url source.
         *
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        origin: string;
        /**
         * Specify the amount of storage for the source.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        usage: double;
        /**
         * the callback of getOriginUsage.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        quota: double;
    }

    /**
     * Defines the Web's request info.
     *
     * @typedef RequestInfo
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface RequestInfo {
        /**
         * Gets the url of the request.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        url: string;

        /**
         * Gets the method of the request.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        method: string;

        /**
         * Gets the form data of the request.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        formData: string;
    }

    /**
     * Defines the scroll offset of the webpage in view port, the unit is virtual pixel.
     * Related to {@link getScrollOffset} method.
     *
     * @typedef ScrollOffset
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface ScrollOffset {
        /**
         * The horizontal scroll offset of the web page. The value is the difference between
         * the x-coordinate of the left border of the web page and the x-coordinate of the
         * left border of the Web component. When the web page scrolls to the right,
         * the value range is negative.
         * When the web page is not over-scrolled or the web page is over-scrolled to the left,
         * the value is 0 or a positive value. Unit: vp.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        x: double;

        /**
         * The vertical scroll offset of the web page. The value is the difference between
         * the y-coordinate of the upper border of the web page and the y-coordinate of the
         * upper boundary of the Web component. When the web page is scrolled down,
         * the value range is negative.
         * When the web page is not over-scrolled or the web page is over-scrolled to the up,
         * the value is 0 or a positive value. Unit: vp.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        y: double;
    }

    /**
     * Subscribe to a callback of a specified type of web event once.
     *
     * @param {string} type Types of web event.
     * @param {Callback<void>} callback Indicate callback used to receive the web event.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    function once(type: string, callback: Callback<void>): void;

    /**
     * Implements a WebStorage object to manage the Web SQL database and HTML5 Web Storage APIs.
     * All Web components in an application share a WebStorage object.
     *
     * <p><strong>API Note</strong>:<br>
     * You must load the Web component before calling the APIs in WebStorage.
     * </p>
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebStorage {
        /**
         * Deletes all data in the Web SQL Database.
         *
         * @param { boolean } incognito - Whether to delete all data in the Web SQL Database in incognito mode.
         *                                {@code true} means to delete all data in the Web SQL Database in incognito mode;
         *                                {@code false} means to delete all data in the Web SQL Database in normal non-incognito mode.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static deleteAllData(incognito?: boolean): void;

        /**
         * Deletes all data in the specified origin.
         *
         * @param { string } origin - Index of the origin, which is obtained through {@link getOrigins}.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static deleteOrigin(origin: string): void;

        /**
         * Obtains information about all origins that are currently using the Web SQL Database.
         * This API uses a promise to return the result.
         *
         * @returns { Promise<Array<WebStorageOrigin>> } - Promise used to return the information about the origins.
         *                                                 For details, see {@link WebStorageOrigin}.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100012 - Invalid web storage origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getOrigins(): Promise<Array<WebStorageOrigin>>;

        /**
         * Obtains information about all origins that are currently using the Web SQL Database.
         * This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - Callback used to return the information about the
         *                                                              origins. For details, see {@link WebStorageOrigin}.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100012 - Invalid web storage origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void;

        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @returns { Promise<double> } - the promise returned by the function
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getOriginQuota(origin: string): Promise<double>;

        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @param { AsyncCallback<double> } callback - the callback of getOriginQuota.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getOriginQuota(origin: string, callback: AsyncCallback<double>): void;

        /**
         * Get the web amount of storage with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @returns { Promise<double> } - the promise returned by the function
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getOriginUsage(origin: string): Promise<double>;

        /**
         * Get the web amount of storage with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @param { AsyncCallback<double> } callback - the callback of getOriginUsage.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getOriginUsage(origin: string, callback: AsyncCallback<double>): void;
    }

    /**
     * Implements a WebDataBase object.
     *
     * <p><strong>API Note</strong>:<br>
     * You must load the Web component before calling the APIs in WebDataBase.
     * </p>
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebDataBase {
        /**
         * Get whether instances holds any http authentication credentials.
         * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static existHttpAuthCredentials(): boolean;

        /**
         * Deletes all HTTP authentication credentials saved in the cache. This API returns the result synchronously.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static deleteHttpAuthCredentials(): void;

        /**
         * Get http authentication credentials.
         * @param { string } host - The host to which the credentials apply.
         * @param { string } realm - The realm to which the credentials apply.
         * @returns { Array<string> } Return an array containing username and password.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getHttpAuthCredentials(host: string, realm: string): Array<string>;

        /**
         * Saves HTTP authentication credentials for a given host and realm. This API returns the result synchronously.
         * @param { string } host - Host to which HTTP authentication credentials apply.
         * @param { string } realm - Realm to which HTTP authentication credentials apply.
         * @param { string } username - User name.
         * @param { string } password - Password.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
    }

    /**
     * Implements a GeolocationPermissions object.
     *
     * <p><strong>API Note</strong>:<br>
     * You must load the Web component before calling the APIs in GeolocationPermissions.
     * </p>
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class GeolocationPermissions {
        /**
         * Allows the specified origin to use the geolocation information.
         * @param { string } origin - Index of the origin.
         * @param { boolean } incognito - Whether to allow the specified origin to use the geolocation information
         *                                in incognito mode. {@code true} means to allow the specified origin to use the
         *                                geolocation information in incognito mode; {@code false} means to allow the
         *                                specified origin to use the geolocation information in normal non-incognito mode.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static allowGeolocation(origin: string, incognito?: boolean): void;

        /**
         * Delete geolocation permissions for specifies source.
         * @param { string } origin - Url source.
         * @param { boolean } incognito - {@code true} delete geolocation permissions for specifies source
         *                                in incognito mode; {@code false} otherwise.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static deleteGeolocation(origin: string, incognito?: boolean): void;

        /**
         * Clears the geolocation permission status of all sources.
         *
         * @param { boolean } incognito - Whether to clear the geolocation permission status of all sources in incognito
         *                                mode. {@code true} means to clear the geolocation permission status of
         *                                all sources in incognito mode; {@code false} means to clear the geolocation
         *                                permission status of all sources in normal non-incognito mode.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static deleteAllGeolocation(incognito?: boolean): void;

        /**
         * Gets the geolocation permission status of the specified source.
         * @param { string } origin - Url source.
         * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
         *                                specified source in incognito mode; {@code false} otherwise.
         * @returns { Promise<boolean> } A Promise instance that obtains the permission
         *                               status of the specified source and obtains successfully,
         *                               true for authorization, false for access denial. Failed
         *                               to get, indicating that the permission status of the
         *                               specified source does not exist.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>;

        /**
         * Gets the geolocation permission status of the specified source.
         * @param { string } origin - Url source.
         * @param { AsyncCallback<boolean> } callback - Returns the geolocation permission status for
         *                                              the specified source. Successful acquisition,
         *                                              true means authorized, false means access is
         *                                              denied. Failed to get, indicating that the
         *                                              permission status of the specified source does
         *                                              not exist.
         * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
         *                                specified source in incognito mode; {@code false} otherwise.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void;

        /**
         * Get all stored geolocation permission url source.
         * @param { boolean } incognito - {@code true} get all stored geolocation permission url source
         *                                in incognito mode; {@code false} otherwise.
         * @returns { Promise<Array<string>> } A Promise instance that gets all source information about
         *                                     the stored geolocation permission state.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>;

        /**
         * Get all stored geolocation permission url source.
         * @param { AsyncCallback<Array<string>> } callback - Returns all source information for
         *                                                    stored geolocation permission states.
         * @param { boolean } incognito - {@code true} gets all stored geolocation permission url
         *                                source in incognito mode; {@code false} otherwise.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void;
    }

    /**
     * Provides methods for managing the web cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebCookieManager {
        /**
         * Gets all cookies for the given URL.
         *
         * @param { string } url - The URL for which the cookies are requested.
         * @param { boolean } incognito - {@code true} gets all cookies for the given URL
         *                                in incognito mode; {@code false} otherwise.
         * @returns { string } - The cookie value for the given URL.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static fetchCookieSync(url: string, incognito?: boolean): string;

        /**
         * Set a single cookie (key-value pair) for the given URL.
         *
         * @param { string } url - The URL for which the cookie is to be set.
         * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
         * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
         *                                in incognito mode; {@code false} otherwise.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
         * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
         * <br>in RFC 6265.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static configCookieSync(url: string, value: string, incognito?: boolean): void;

        /**
         * Set a single cookie (key-value pair) for the given URL.
         *
         * @param { string } url - The URL for which the cookie is to be set.
         * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
         * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
         *                                in incognito mode; {@code false} otherwise.
         * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
         *                                      {@code false} otherwise.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
         * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
         * <br>in RFC 6265.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static configCookieSync(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): void;

        /**
         * Save the cookies Asynchronously.
         * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static saveCookieAsync(): Promise<void>;

        /**
         * Save the cookies Asynchronously.
         * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static saveCookieAsync(callback: AsyncCallback<void>): void;

        /**
         * Remove all cookies.
         *
         * @param { boolean } incognito - {@code true} remove all cookies in incognito mode;
         *                                {@code false} otherwise.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static clearAllCookiesSync(incognito?: boolean): void;

        /**
         * Remove all cookies Asynchronously.
         * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static clearAllCookies(): Promise<void>;

        /**
         * Remove all cookies Asynchronously.
         * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static clearAllCookies(callback: AsyncCallback<void>): void;
    }

    /**
     * WebMessage type supplied to {@link onMessageEventExt} for indicating the type of web message.
     *
     * @typedef { ArrayBuffer | string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type WebMessage = ArrayBuffer | string;

    /**
     * Define html web message port.
     * @typedef WebMessagePort
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface WebMessagePort {
        /**
         * The flag indicates whether more formats are supported than string and array buffers.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        isExtentionType?: boolean;

        /**
         * Close port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        close(): void;

        /**
         * Post a message to other port.
         * @param { WebMessage } message - Message to send.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100010 - Failed to post messages through the port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        postMessageEvent(message: WebMessage): void;

        /**
         * Receive message from other port.
         * @param { function } callback - Callback function for receiving messages.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        onMessageEvent(callback: (result: WebMessage) => void): void;
    }

    /**
     * Provides information for history item in BackForwardList.
     * @typedef HistoryItem
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface HistoryItem {
        /**
         * Pixelmap of icon.
         * @type { image.PixelMap }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        icon: image.PixelMap;

        /**
         * Url of this history item.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        historyUrl: string;

        /**
         * Original request url of this history item.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        historyRawUrl: string;

        /**
         * Title of this history item.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        title: string;
    }

    /**
     * Provides back and forward history list information method. related to {@link HistoryItem}.
     * @typedef BackForwardList
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface BackForwardList {
        /**
         * Current index in BackForwardList.
         * @type { int }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        currentIndex: int;

        /**
         * Size of in BackForwardList.
         * @type { int }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        size: int;

        /**
         * Get history entry at given index.
         *
         * @param { int } index Index of back forward list entry.
         * @returns { HistoryItem } HistoryItem at given index in back forward list.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getItemAtIndex(index: int): HistoryItem;
    }

    /**
     * Defines the snapshot info.
     *
     * @typedef SnapshotInfo
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface SnapshotInfo {
        /**
         * Id of the snapshot.
         *
         * @type { ?string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        id?: string;

        /**
         * Size for web rendering.
         * The maximum size is 16000 px × 16000 px. The length unit can be px, vp, or %.
         * The length unit must be the consistent across parameters. The default unit is vp.
         * If the size exceeds the specifications, the maximum size is returned.
         * (Example: width: '100px', height: '200px' or width: '20%', height'30%'. If only digits are written, the unit is vp.)
         *
         * @type { ?SizeOptions }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        size?: SizeOptions;
    }

    /**
     * Represents a full drawing result.
     *
     * @typedef SnapshotResult
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface SnapshotResult {
        /**
         * Id of the snapshot.
         *
         * @type { ?string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        id?: string;

        /**
         * The status of the snapshot.
         * The value can be true (normal) or false (failure). If the full drawing result fails to be obtained,
         * the width and height of the returned size are both 0, and the map is empty.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        status?: boolean;

        /**
         * Actual size drawn on the web page.
         * The value is of the number type, and the unit is vp.
         *
         * @type { ?SizeOptions }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        size?: SizeOptions;

        /**
         * Full drawing result in image.PixelMap format.
         *
         * @type { ?image.PixelMap }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        imagePixelMap?: image.PixelMap;
    }

    /**
     * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum JsMessageType {
        /**
         * Unsupported data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NOT_SUPPORT,

        /**
         * The string data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        STRING,

        /**
         * The number data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NUMBER,

        /**
         * The boolean data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        BOOLEAN,

        /**
         * The arraybuffer data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ARRAY_BUFFER,

        /**
         * The array data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ARRAY
    }

    /**
     * The message for indicating the of result of JavaScript code execution.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class JsMessageExt {
        /**
         * Get the type of the JavaScript code execution result.
         * @returns { JsMessageType } - Returns data of JsMessageType type
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getType(): JsMessageType;

        /**
         * Get the string value of the JavaScript code execution result.
         * @returns { string } - Returns data of string type
         * @throws { BusinessError } 17100014 - The type and value of the message do not match.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getString(): string;

        /**
         * Get the number value of the JavaScript code execution result.
         * @returns { double | long } - Returns data of number type
         * @throws { BusinessError } 17100014 - The type and value of the message do not match.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getNumber(): double | long;

        /**
         * Get the boolean value of the JavaScript code execution result.
         * @returns { boolean } - Returns data of Boolean type
         * @throws { BusinessError } 17100014 - The type and value of the message do not match.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getBoolean(): boolean;

        /**
         * Get the array buffer value of the JavaScript code execution result.
         * @returns { ArrayBuffer } - Returns data of ArrayBuffer
         * @throws { BusinessError } 17100014 - The type and value of the message do not match.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getArrayBuffer(): ArrayBuffer;

        /**
         * Get the array value of the the JavaScript code execution result.
         * @returns { Array<string | double | long | boolean> } - Returns data of Array type
         * @throws { BusinessError } 17100014 - The type and value of the message do not match.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getArray(): Array<string | double | long | boolean>;

        /**
         * Get the exception or object of the the JavaScript code execution result and serialize it into a string.
         * @returns { string | null } - if an exception occurs, or the returned type is object, return the
         *     serialized string in the format of "Not support type: <{exception|object}>", Parts exceeding a length of
         *     2048 will be truncated; otherwise, return null.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getErrorDescription(): string | null;
    }

    /**
     * Defines the render process mode.
     *
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum RenderProcessMode {
        /**
         * ArkWeb single rendering subprocess mode. In this mode, multiple Web pages reuse a rendering subprocess.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        SINGLE = 0,

        /**
         * ArkWeb multi-rendering subprocess mode. In this mode, there is one rendering subprocess per Web.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MULTIPLE,
    }

    /**
     * Options of generating code cache
     * @typedef CacheOptions
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface CacheOptions {
        /**
         * Response headers used to configure the validation key of code cache.
         * Currently only support E-Tag and Last-Modified.
         *
         * @type { Array<WebHeader> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        responseHeaders: Array<WebHeader>;
    }

    /**
     * Enum type supplied to {@link OfflineResourceMap} for indicating the type of resource.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum OfflineResourceType {
        /**
         * Resource of the image type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        IMAGE,

        /**
         * Resource of the CSS type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        CSS,

        /**
         * Javascript resource loaded through the <script src="" /> tag.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        CLASSIC_JS,

        /**
         * Javascript resource loaded through the <script src="" type="module" /> tag.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MODULE_JS
    }

    /**
     * Define offline resource's content and info.
     * @typedef OfflineResourceMap
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface OfflineResourceMap {
        /**
         * Url list of resource. Url of urlList must be HTTP/HTTPS protocol and no longer than 2048.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        urlList: Array<string>,

        /**
         * Arraybuffer of resource. Size must less than 10Mb and cannot be empty.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        resource: Uint8Array,

        /**
         * Response headers of resource.
         *
         * @type { Array<WebHeader> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        responseHeaders: Array<WebHeader>,

        /**
         * Resource type
         *
         * @type { OfflineResourceType }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        type: OfflineResourceType
    }

    /**
     * Enum type supplied to {@link setScrollable} for indicating the type of scroll.
     *
     * @enum { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum ScrollType {
        /**
         * Indicates scrolling the web page through scroll event, include touch screen, touch pad, and mouse wheel.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        EVENT
    }

    /**
     * Enum type supplied to {@link getAttachState} for indicating the attach state of controller.
     *
     * @enum { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum ControllerAttachState {
        /**
         * Indicates webviewController is not attached a web component.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        UNATTACHED = 0,

        /**
         * Indicates webviewController is attached a web component.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ATTACHED = 1
    }

    /**
     * Enumerates the error codes of blankless. For details, see {@link setBlanklessLoadingWithKey} or {@link
     * BlanklessInfo}.
     *
     * @enum { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum WebBlanklessErrorCode {
        /**
         * The operation is successful.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        SUCCESS = 0,

        /**
         * Unknown error.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ERR_UNKNOWN = -1,

        /**
         * Invalid parameter.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ERR_INVALID_PARAM = -2,

        /**
         * The web controller is not bound to any component.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ERR_CONTROLLER_NOT_INITED = -3,

        /**
         * The key value is not matched. This error code is returned when the key values of
         * setBlanklessLodingWithKey and getBlanklessInfoWithKey are not matched.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ERR_KEY_NOT_MATCH = -4,

        /**
         * The system determines that the change is too large when the similarity is less than 0.33. As a result,
         * the setBlanklessLodingWithKey API fails to enable frame interpolation.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ERR_SIGNIFICANT_CHANGE = -5
    }

    /**
     * Indicates the keyboard behavior mode of the web component, default value is DEFAULT.
     * @enum {int}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum WebSoftKeyboardBehaviorMode {
        /**
         * Soft keyboard will not be hidden or shown automatically when web comes into pause/continue or blur/focus state.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        DEFAULT = 0,

        /**
         * Soft keyboard will not be hidden or shown automatically when web comes into pause/continue state
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        DISABLE_AUTO_KEYBOARD_ON_ACTIVE = 1
    }

    /**
     * Defines the blankless information.
     *
     * @typedef BlanklessInfo
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface BlanklessInfo {
        /**
         * Defines the error codes of blankless.
         * @type { WebBlanklessErrorCode }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        errCode: WebBlanklessErrorCode;

        /**
         * Obtains the similarity of snapshots generated by the blankless loading solution based on the last
         * several snapshots. The value ranges from 0 to 1.0. The value 1.0 indicates that the snapshots are the same. A
         * value closer to 1 indicates higher similarity. This value has a certain lag, meaning that the similarity of
         * the current loading will only be reflected in the next loading. It is recommended that the frame interpolation
         * functionality be disabled when the similarity is 0.
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        similarity: double;

        /**
         * Obtains the loading time based on the historical loading time. The unit is ms and the value is greater
         * than 0.
         *
         * @type { int }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        loadingTime: int;
    }

    /**
     * WebviewController can control various behaviors of Web components
     * (including page navigation, declaring cycle state, JavaScript interaction and so on).
     * A WebviewController object can only control one Web component,
     * and methods on the Webviewcontroller (except static methods) can only be called
     * after the web component is bound to the WebviewController.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebviewController {
        /**
         * A constructor used to create a WebviewController object.
         *
         * @param { string } [webTag] - specified the name of the web component, Empty by default.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        constructor(webTag?: string);

        /**
         * Initialize the web engine before loading the Web components.
         * This is a global static API that must be called on the UI thread, and it will have no effect if any
         * Web components are loaded.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static initializeWebEngine(): void;

        /**
         * Set active ArkWeb engine version.
         * If the system does not support the specified version, it will not take effect.
         * This is a global static API that must be called before initializeWebEngine, and it will have no effect if any
         * Web components are loaded.
         *
         * <strong>Legacy Web Engine Compatibility Note</strong>:
         * <p>When using legacy ArkWeb Engine, some ArkWeb newly created API will not take effect,<br>
         * see [Compatible with Legacy Web Engine in release note]  for compatibility guidelines.
         * </p>
         *
         * @param {ArkWebEngineVersion} engineVersion - the ArkWebEngineVersion
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void;

        /**
         * Get the currently active ArkWeb engine version.
         * @returns {ArkWebEngineVersion} Active ArkWeb Engine version as defined by ArkWebEngineVersion
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getActiveWebEngineVersion(): ArkWebEngineVersion;

        /**
         * Checks whether the web page can go forward.
         * @returns { boolean } True if the web page can go forward else false.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        accessForward(): boolean;

        /**
         * Checks whether the web page can go back.
         * @returns { boolean } True if the web page can go back else false.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        accessBackward(): boolean;

        /**
         * Goes forward in the history of the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        forward(): void;

        /**
         * Goes back in the history of the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        backward(): void;

        /**
         * Clears the history in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        clearHistory(): void;

        /**
         * Call this interface to notify the Web component to enter the foreground activation state.
         * The activation state is the state in which the application interacts with the user.
         * The application will remain in this state until something happens,
         * such as receiving an incoming call or closing the screen of the device,
         * to shift the focus away from the application.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        onActive(): void;

        /**
         * Call this interface to notify the Web component to enter the inactive state.
         * In this callback, the developer can realize the appropriate behavior when the application loses focus.
         * In this state, any content that can be safely paused will be paused as much as possible,
         * such as animation and geographical location. However, JavaScript will not be paused.
         * To pause JavaScript globally, please use {@link pauseAllTimers}.To reactivate the Web component, call onActive.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        onInactive(): void;

        /**
         * Refreshes the current URL.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        refresh(): void;

        /**
         * Loads the data or URL.
         *
         * @param { string } data - A string encoded according to "Base64" or "URL".
         * @param { string } mimeType - Media type. For example: "text/html".
         * @param { string } encoding - Encoding type. For example: "UTF-8".
         * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
         *                             which is assigned to window.origin by the Web component.
         * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
         *                                history records to realize the back and forth function.
         *                                This property is invalid when baseUrl is empty.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;

        /**
         * Loads the data or URL.
         *
         * @param { string | Resource } url - The URL to load.
         * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
         *                           length exceeds 2048.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;

        /**
         * Zooms in or out of this web page. This API is effective only when zoomAccess is true.
         *
         * @param { double } factor - Relative zoom ratio. The value must be greater than 0.
         *                            The value 1 indicates that the page is not zoomed.
         *                            A value smaller than 1 indicates zoom-out, and a value greater than 1 indicates zoom-in.
         *                            Value range: (0, 100].
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100004 - Function not enabled.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        zoom(factor: double): void;

        /**
         * Zooms in on this web page by 25%.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100004 - Function not enabled.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        zoomIn(): void;

        /**
         * Zooms out of this web page by 20%.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100004 - Function not enabled.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        zoomOut(): void;

        /**
         * Gets the index value of the current Web component for the management of multiple Web components.
         * @returns { int } Returns the index value of the current Web component.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getWebId(): int;

        /**
         * Gets the default user agent.
         * @returns { string } Return user agent information.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getUserAgent(): string;

        /**
         * Gets the title of current Web page.
         * @returns { string } Return to File Selector Title.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getTitle(): string;

        /**
         * Obtains the height of this web page.
         * @returns { int } Height of the current web page. Unit: vp.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getPageHeight(): int;

        /**
         * Gets the request focus.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        requestFocus(): void;

        /**
         * Create web message ports
         * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
         * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
         *                                    those ports to communication with html pages.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>;

        /**
         * Stops the current load.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        stop(): void;

        /**
         * Registers the supplied ArkTS object into this Web component.
         * The object is registered into all frames of the web page, including all iframes, using the specified name.
         * This allows the methods of the ArkTS object to be accessed from JavaScript.
         * <p><strong>API Note</strong>:<br>
         * Registed objects will not appear in JavaScript until the page is next (re)load.
         * To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.
         * To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.
         * If the same method is registered repeatedly in both synchronous and asynchronous list, it will default to an asynchronous method.
         * The synchronous function list and asynchronous function list cannot be empty at the same time.<br>
         * otherwise, this registration will fail.
         *  <p>
         *
         * @param { object } jsObject - Application side JavaScript objects participating in registration.
         * @param { string } name - The name of the registered object, which is consistent with the
         *                          object name called in the window.
         * @param { Array<string> } methodList - The method of the application side JavaScript object participating
         *                                       in the registration.
         * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
         *                                            participating in the registration.
         * @param { string } [permission] - permission configuration defining web page URLs that can access JavaScriptProxy methods.
         *                                The configuration can be defined at two levels, object level and method level.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
            asyncMethodList?: Array<string>, permission?: string): void;

        /**
         * Deletes a registered JavaScript object with given name.
         *
         * @param { string } name - The name of a registered JavaScript object to be deleted.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        deleteJavaScriptRegister(name: string): void;

        /**
         * Asynchronously execute JavaScript in the context of the currently displayed page.
         * The result of the script execution will be returned through a via Promise.
         * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
         * <p><strong>API Note</strong>:<br>
         * The state of JavaScript is no longer persisted across navigations like loadUrl.
         * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.<br>
         * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.<br>
         * If you cannot obtain the return value by executing the asynchronous method,
         * you need to determine whether to use synchronous or asynchronous mode based on the specific situation.
         * <p>
         *
         * @param { string } script - JavaScript Script.
         * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
         *                              This parameter will be the result of JavaScript script execution.
         *                              If the JavaScript script fails to execute or has no return value,
         *                              null will be returned.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        runJavaScript(script: string): Promise<string>;

        /**
         * Asynchronously execute JavaScript in the context of the currently displayed page.
         * The result of the script execution will be returned through an asynchronous callback.
         * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
         * <p><strong>API Note</strong>:<br>
         * The state of JavaScript is no longer persisted across navigations like loadUrl.
         * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
         * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.
         * <p>
         *
         * @param { string } script - JavaScript Script.
         * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        runJavaScript(script: string, callback: AsyncCallback<string>): void;

        /**
         * Execute JavaScript code in the context of the currently displayed page, and return the result.
         *
         * @param { string | ArrayBuffer } script - JavaScript Script.
         * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
         *                              This parameter will be the result of JavaScript script execution.
         *                              If the JavaScript script fails to execute or has no return value,
         *                              a none type value will be returned.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>;

        /**
         * Execute JavaScript code in the context of the currently displayed page, and return the result.
         *
         * @param { string | ArrayBuffer } script - JavaScript Script.
         * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void;

        /**
         * Rendering current Web page into Pdf data, return the result in async mode.
         *
         * @param { PdfConfiguration } configuration - configuration for createPdf,
         *                                             including page width and height, etc.
         *                                             {@Link PdfConfiguration}
         * @param { AsyncCallback<PdfData> } callback - Callbacks execute createPdf results.
         *                                              PdfData is pdf data stream of current web page in Uint8Array
         *                                              {@Link PdfData}.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void;

        /**
         * Rendering current Web page into Pdf data, return the result in promise mode.
         *
         * @param { PdfConfiguration } configuration - configuration for createPdf,
         *                                             including page width and height, etc.
         *                                             {@Link PdfConfiguration}
         * @returns { Promise<PdfData> } The promise returned by the function.
         *                               PdfData is pdf data stream of current web page in Uint8Array
         *                               {@Link PdfData}.
         *                               If createPdf fails or no return value,
         *                               a none type value will be returned.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        createPdf(configuration: PdfConfiguration): Promise<PdfData>;

        /**
         * Gets the url of current Web page.
         * @returns { string } Return the url of the current page.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getUrl(): string;

        /**
         * Scroll the contents of this Webview up by half the view size.
         *
         * @param { boolean } top - Whether to jump to the top of the page, if set to false,
         *                          the page content will scroll up half the size of the view frame,
         *                          and when set to true, it will jump to the top of the page.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        pageUp(top: boolean): void;

        /**
         * Scroll the contents of this Webview down by half the view size.
         *
         * @param { boolean } bottom - Whether to jump to the bottom of the page, if set to false,
         *                             the page content will scroll down half the size of the view frame,
         *                             and when set to true, it will jump to the bottom of the page.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        pageDown(bottom: boolean): void;

        /**
         * Gets the original url of current Web page.
         * @returns { string } Return the original url of the current page.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getOriginalUrl(): string;

        /**
         * Asynchronous search for image existence on the current page through Promise method.
         *
         * @returns { Promise<boolean> } A promise resolved after query image has finished.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        hasImage(): Promise<boolean>;

        /**
         * Asynchronous search for the presence of an image on the current page through callback method.
         *
         * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        hasImage(callback: AsyncCallback<boolean>): void;

        /**
         * Get back forward stack list from current webview.
         * @returns { BackForwardList } Back forward list for current webview.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getBackForwardEntries(): BackForwardList;

        /**
         * Scroll to the position within specified time.
         *
         * @param { double } x - the x of the position.Unit: vp.
         * @param { double } y - the y of the position.Unit: vp.
         * @param { int } duration - the scroll animation duration. Unit: millisecond.
         *                              If the value is not passed, or is negative or 0, there is no animation.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        scrollTo(x: double, y: double, duration?: int): void;

        /**
         * Scroll by the delta position within specified time.
         *
         * <p><strong>API Note</strong>:<br>
         * In nested scroll scenarios, calling scrollBy does not trigger nested scrolling in the parent component.
         * </p>
         *
         * @param { double } deltaX - the delta x of the position.Unit: vp.
         * @param { double } deltaY - the delta y of the position.Unit: vp.
         * @param { int } duration - the scroll animation duration. Unit: millisecond.
         *                              If the value is not passed, or is negative or 0, there is no animation.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        scrollBy(deltaX: double, deltaY: double, duration?: int): void;

        /**
         * Slide by the speed.
         *
         * @param { double } vx - the x speed of the speed.
         * @param { double } vy - the y speed of the speed.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        slideScroll(vx: double, vy: double): void;

        /**
         * Serialize the access stack of the web, that is, the history of access.
         * @returns { Uint8Array } Web access stack after serialization.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        serializeWebState(): Uint8Array;

        /**
         * Get certificate for the current website.
         * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getCertificate(): Promise<Array<cert.X509Cert>>;

        /**
         * Get certificate for the current website.
         * @param {AsyncCallback<Array<cert.X509Cert>>} callback - the callback of getCertificate.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void;

        /**
         * Set webpage mute.
         * @param { boolean } mute - Set the audio muted or not.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setAudioMuted(mute: boolean): void;

        /**
         * Prefetch the resources required by the page, but will not execute js or render the page.
         * <p><strong>API Note</strong>:<br>
         * ‌prefetchPage‌ does not cache resources with Cache-Control: no-store by default, and only allows one prefetch within
         * 500ms.
         * Prefetch behavior can be customized via ‌prefetchOptions‌, including ignoring Cache-Control: no-store and adjusting
         * the throttling interval.
         *
         * @param { string } url - Which url to preresolve/preconnect.
         * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
         * @param { PrefetchOptions } [prefetchOptions] - Prefetch behavior can be customized via ‌prefetchOptions‌, including
         *     ignoring Cache-Control: no-store and adjusting the throttling interval.
         * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
         *     length exceeds 2 *1024 *1024.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void;

        /**
         * Get custom user agent.
         * @returns { string } Get custom User agent information.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getCustomUserAgent(): string;

        /**
         * Set delegate for download.
         * Used to notify the progress of the download triggered from web.
         * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from web.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setDownloadDelegate(delegate: WebDownloadDelegate): void;

        /**
         * Start a download.
         * @param { string } url - The download url.
         * @throws { BusinessError } 17100001 - Init error.
         *     The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
         *     length exceeds 2 *1024 *1024.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        startDownload(url: string): void;

        /**
         * Loads the URL use "POST" method with post data.
         *
         * @param { string } url - Request the URL use "POST" method.
         * @param { ArrayBuffer } postData - This data will passed to "POST" request.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
         *                           length exceeds 2048.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        postUrl(url: string, postData: ArrayBuffer): void;

        /**
         * Creates a PrintDocumentAdapter instance to provide content for printing.
         * @param { string } jobName - Name of the file to print.
         * @returns { print.PrintDocumentAdapter } Return PrintDocumentAdapter instance created.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter;

        /**
         * Set whether scroll is allowed; default is true.
         *
         * @param { boolean } enable - Set whether scrolling is allowed
         *                             {@code true} means scrolling is allowed.
         *                             {@code false} means scrolling is disabled.
         * @param { ScrollType } type - Enable scrolling type
         *                              When the input parameter enable is false, it indicates that scrolling of the ScrollType type is prohibited.When ScrollType
         *                              is not specified,it indicates that all types of webpage scrolling are prohibited.
         *                              When the input parameter enable is true, regardless of whether ScrollType is specified, it indicates that all types
         *                              of webpage scrolling are allowed.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setScrollable(enable: boolean, type?: ScrollType): void;

        /**
         * Get whether scrolling is allowed.
         * @returns { boolean } Get scrolling is allowed information.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getScrollable(): boolean;

        /**
         * Set whether print web page background.
         *
         * @param { boolean } enable - Set whether print web page background
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setPrintBackground(enable: boolean): void;

        /**
         * Get whether print web page background.
         * @returns { boolean } Get whether print web page background.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getPrintBackground(): boolean;

        /**
         * Get the url of the last frame that calls the JavaScriptProxy.
         * This should be called on the UI thread.
         *
         * @returns { string } The url of the last frame that calls the JavaScriptProxy.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getLastJavascriptProxyCallingFrameUrl(): string;

        /**
         * Start current camera, and before using the camera function, please add the permission in module.json5: ohos.permission.CAMERA.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        startCamera(): void;

        /**
         * Stop current camera.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        stopCamera(): void;

        /**
         * Close current camera.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        closeCamera(): void;

        /**
         * Pause all WebView timers.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static pauseAllTimers(): void;

        /**
         * Resume all timers suspended from the pauseAllTimers() interface.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static resumeAllTimers(): void;

        /**
         * Stop all audio and video playback on the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        stopAllMedia(): void;

        /**
         * Resumes the playback of the audio and video that are paused by the pauseAllMedia interface.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        resumeAllMedia(): void;

        /**
         * Pause all audio and video playback on the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        pauseAllMedia(): void;

        /**
         * Closes all full-screen videos on a web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        closeAllMediaPresentations(): void;

        /**
         * View the playback status of all audio and video on the web page.
         *
         * @returns { MediaPlaybackState } The playback status of all audio and video.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getMediaPlaybackState(): MediaPlaybackState;

        /**
         * Clear all web scheme handlers for related web component.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        clearWebSchemeHandler(): void;

        /**
         * Register a callback to intercept web pages playing media.
         *
         * @param { CreateNativeMediaPlayerCallback } callback - Called everytime when web pages try to play media.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void;

        /**
         * Enables the full drawing capability for the web page.
         * This API works only during Web component initialization.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static enableWholeWebPageDrawing(): void;

        /**
         * Web page snapshot.
         *
         * <p><strong>API Note</strong>:<br>
         * Only screenshots of assets on the rendering process are supported: still images and text.
         * If there is a video on the page, the placeholder image of the video will be displayed when you take a screenshot,
         * and blank if there is no placeholder.
         * </p>
         *
         * @param { SnapshotInfo } info - The snapshot info.
         * @param { AsyncCallback<SnapshotResult> } callback - the callback of snapshot.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void;

        /**
         * Prefetches resource requests based on specified request information and additional HTTP request headers,
         * saves the requests to the memory cache, and specifies the cache key and validity period to accelerate loading.
         * Currently, only POST requests whose Content-Type is application/x-www-form-urlencoded are supported.
         * A maximum of six POST requests can be pre-obtained. To prefetch the seventh post request,
         * call API{@link clearPrefetchedResource} to clear the cache of unnecessary post requests.
         * Otherwise, the cache of the earliest prefetched POST request will be automatically cleared.
         * To use the prefetched resource cache, you need to add the key value ArkWebPostCacheKey to the header of the
         * POST request. The content of the key value is the cacheKey of the corresponding cache.
         * @param { RequestInfo } request - The information of the request.
         * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the request.
         * @param { string } [cacheKey] - The key for memory cache. Default value is the url of the request.
         *     Only support number and letters.
         * @param { int } [cacheValidTime] - The valid time of the cache for request, ranges greater than 0.
         *     The unit is second. Default value is 300s.
         *     The value of cacheValidTime must between 1 and 2147483647.
         * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
         *     length exceeds 2 *1024 *1024.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
        cacheValidTime?: int): void;

        /**
         * Clears the cache of prefetched resources based on the specified cache key list.
         * The cache key in the input parameter must be the prefetched resource cache key specified by API{@link prefetchResource}.
         * @param { Array<string> } cacheKeyList - The keys for memory cache.
         *    The key in cacheKeyList only support number and letters.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static clearPrefetchedResource(cacheKeyList: Array<string>): void;

        /**
         * Set render process mode of the ArkWeb.
         *
         * @param { RenderProcessMode } mode - The render process mode for the ArkWeb.
         *        Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device.
         *        The enumerated value  * *0 * * indicates the single render subprocess mode,
         *        and  * *1 * * indicates the multi-render subprocess mode.
         *        If an invalid number other than the enumerated value of  * *RenderProcessMode * * is passed,
         *        the multi-render subprocess mode is used by default.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setRenderProcessMode(mode: RenderProcessMode): void;

        /**
         * Get render process mode of the ArkWeb.
         *
         * @returns { RenderProcessMode } mode - The render process mode of the ArkWeb.
         *          Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device,
         *          with an enumeration value of 0 as a single subprocess mode and an enumeration value of 1 as a multi-subprocess mode.
         *          If the obtained value is not within the range of the RenderProcessMode enumeration value,
         *          it defaults to the multi-rendering subprocess mode.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getRenderProcessMode(): RenderProcessMode;

        /**
         * Destroy the rendering process.
         * Calling this interface will actively destroy the associated rendering process.
         * If the rendering process has not been started or destroyed, it has no effect.
         * In addition, destroying the rendering process will also affect all other instances associated with
         * the rendering process.
         *
         * @returns { boolean } true if it was possible to terminate the render process, otherwise false.
         *         Calling this on a not yet started, or an already terminated render will have no effect.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        terminateRenderProcess(): boolean;

        /**
         * Compile javascript and generate code cache.
         * @param { string } url - Url of the javascript. Only support HTTP/HTTPS protocol and length no longer than 2048.
         * @param { string | Uint8Array } script - Javascript source code. script must not be empty.
         * @param { CacheOptions } cacheOptions - Generate code cache option.
         * @returns { Promise<int> } - The promise returned by the function.
         *    0 means generate code cache successfully, -1 means internal error.
         * @throws { BusinessError } 401 - Invalid input parameter.
         *    Possible causes: 1. Mandatory parameters are left unspecified.
         *    2. Incorrect parameter types. 3. Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *    The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<int>;

        /**
         * Inject offline resources into cache.
         *
         * @param { Array<OfflineResourceMap> } resourceMaps - Array of offline resource info maps.
         *     The count of array must between 1 and 30.
         * @throws { BusinessError } 17100001 - Init error.
         *     The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
         *     length exceeds 2 *1024 *1024.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void;

        /**
         * Get the ID of the surface created by ArkWeb. This ID can be used for web page screenshots.
         *
         * @returns { string } The ID of the surface created by ArkWeb.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getSurfaceId(): string;

        /**
         * Sets a path list. When a file protocol accesses resources in the path list, it can access the local files across
         * domains. In addition, when a path list is set, the file protocol can access only the resources in the path list.
         * The behavior of {@link fileAccess} will be overwritten by that of this API.
         *
         * The paths in the list must be any of the following(sub path and module name must be provided):
         *
         * 1. The path of subdirectory of the application file directory, like "/data/storage/el2/base/files/example"
         *    or "/data/storage/el2/base/haps/entry/files/example".
         *    The application file directory is obtained using Context.filesDir in the Ability Kit.
         * 2. The path of application resource directory or its subdirectory, like "/data/storage/el1/bundle/entry/resource/resfile"
         *    or "/data/storage/el1/bundle/entry/resource/resfile/example".
         *    The application resource directory is obtained from Context.resourceDir in the Ability Kit.
         *
         * If a path in the list is not of the preceding paths, error code 401 is reported and the path list fails
         * to be set. When the path list is set to empty, the accessible files for the file protocol are subject to
         * the behavior of the {@link fileAccess}.
         *
         * @param { Array<string> } pathList - The path list allow universal access.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Parameter string is too long. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *     The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setPathAllowingUniversalAccess(pathList: Array<string>): void;

        /**
         * Trim memory by different memory pressure level.
         *
         * @param { PressureLevel } level - The memory pressure level for the ArkWeb.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Parameter string is too long. 3.Parameter verification failed.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static trimMemoryByPressureLevel(level: PressureLevel): void;

        /**
         * Enable the BackForwardCache and indicate features that are allowed to enter BackForwardCache.
         * Default is disabled.
         *
         * @param { BackForwardCacheSupportedFeatures } [features] - The features that supports BackForwardCache.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static enableBackForwardCache(features?: BackForwardCacheSupportedFeatures): void;

        /**
         * Configure the BackForwardCache.
         *
         * @param { BackForwardCacheOptions } [options] - The configuration of BackForwardCache.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setBackForwardCacheOptions(options?: BackForwardCacheOptions): void;
        /**
         * The current scroll offset of the web page (including the over-scroll offset).
         *
         * @returns { ScrollOffset } The current scroll offset of the web page (including the over-scroll offset).
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getScrollOffset(): ScrollOffset;

        /**
         * Scrolls by the specified delta position and returns a result indicating whether the scrolling operation was successful or not.
         *
         * @param { double } deltaX - the delta x of the position.
         * @param { double } deltaY - the delta y of the position.
         * @returns { boolean } true if the scroll operation is successful, otherwise false.
         * Return value scenario: when the Web page is in the touch state, return false, otherwise return true.
         * In the same layer rendering scene, when the same layer rendering area of ​​the Web is in the touching state, the return value is true.
         * In a nested scrolling scenario, calling scrollByWithResult will not trigger nested scrolling of the parent component.
         * This interface does not guarantee sliding frame rate performance.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types. 3.Parameter verification failed.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        scrollByWithResult(deltaX: double, deltaY: double): boolean;

        /**
         * Gets the last hit test value of HitTest.
         * @returns { HitTestValue } Return the element information of the clicked area.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getLastHitTest(): HitTestValue;

        /**
         * The current scroll offset of the web page (excluding over-scroll offset).
         *
         * @returns { ScrollOffset } The current scroll offset of the web page (excluding over-scroll offset).
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getPageOffset(): ScrollOffset;

        /**
         * Set the default User-Agent for the application.
         *
         * <p><strong>API Note</strong>:<br>
         * Unlike setCustomUserAgent, which only takes effect in the current web context, the
         * priority for pages loaded in the web is as follows:
         * 1. The User-Agent set by setCustomUserAgent is used first.
         * 2. If not set, it will check whether a specific User-Agent has been
         *    assigned to the current page via setUserAgentForHosts.
         * 3. If no specific User-Agent is assigned, the application will fall back
         *    to using the User-Agent set by setAppCustomUserAgent.
         * 4. If the app's default User-Agent is also not specified, the web's default
         *    User-Agent will be used as the final fallback.
         * </p>
         *
         * @param { string } userAgent - The User-Agent string.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setAppCustomUserAgent(userAgent: string) : void;

        /**
         * Set the User-Agent to be used for specified hosts, with a maximum of 20,000 hosts.
         * <p><strong>API Note</strong>:<br>
         * Setting the same host list multiple times for the same User-Agent will override
         * the previous settings. That is, if you want to cancel certain hosts from using
         * the specified User-Agent, you need to reset the host list for that User-Agent.
         * </p>
         *
         * @param { string } userAgent - The User-Agent string.
         * @param { Array<string> } hosts - The hosts to which the User-Agent apply.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;

        /**
         * Get whether webviewController is attached to a web component.
         * @returns { ControllerAttachState } the attach state of controller
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getAttachState(): ControllerAttachState;

        /**
         * Register the callback for controller attach state change.
         *
         * @param { Callback<ControllerAttachState> } callback Callback used to return the controller attach state.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        onControllerAttachStateChange(callback: Callback<ControllerAttachState>): void;

        /**
         * Unregister the callback for controller attach state change.
         *
         * @param { Callback<ControllerAttachState> } [callback] Callback used to return the controller attach state.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        offControllerAttachStateChange(callback?: Callback<ControllerAttachState>): void;

        /**
         * Wait for the controller to attach a web component until timeout.
         *
         * @param { int } timeout - the wait timeout, if timeout reach, promise will return, the unit is millisecond.
         * @returns { Promise<ControllerAttachState> } Promise used to return the state of attach.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        waitForAttached(timeout: int): Promise<ControllerAttachState>;

        /**
         * Gets the loading progress for the current page.
         *
         * @returns { int } The loading progress for the current page.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getProgress() : int;

        /**
         * Sets the bottom avoidance height of the web visible viewport.
         * When setting non-zero height, the position and size of the web component remain unchanged,
         * <br>and the visible viewport upward avoids avoidHeight, as manifested by the web page content raising avoidHeight.
         * <br>This interface is generally used for customizing the bottom avoidance area, and it is not recommended for
         * <br>simultaneous use with clicking the editable area of the web page showing the keyboard.
         * <br>In this case, the keyboardAvoidMode will be OVERLAYS_CONTENT.
         * When setting zero, web page content can be restored and the keyboardAvoidMode will be the value set by keyboardAvoidMode().
         *
         * @param { int } avoidHeight - the height value of the visible viewport avoidance. Unit: vp.
         * <br>The valid interval of avoidHeight is [0, the height of web component].
         * <br>When avoidHeight is out of the valid interval, it takes the boundary value of the interval.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        avoidVisibleViewportBottom(avoidHeight: int): void;

        /**
         * Obtains the prediction information about the blankless loading solution and enables the generation of
         * the transition frame for the current loading. The application determines whether to enable the blankless
         * loading solution based on the information.
         *
         * @param { string } key  The key value that uniquely identifies the page.
         * Default value: N/A.
         * The value cannot be empty or exceed 2048 characters.
         * When an invalid value is set, this API does not take effect.
         * @returns { BlanklessInfo } The prediction information about the blankless loading solution.
         * @throws { BusinessError } 801 Capability not supported.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getBlanklessInfoWithKey(key: string) : BlanklessInfo;

        /**
         * Sets whether to enable blankless page loading. This API must be used in pair with the
         * getBlanklessInfoWithKey API.
         *
         * @param { string } key  The key value that uniquely identifies the current page. It must be the same as
         * the key value of the getBlanklessInfoWithKey API.
         * Default value: N/A.
         * The value cannot be empty or exceed 2048 characters.
         * When an invalid value is set, the error code WebBlanklessErrorCode is returned, and the API does not
         * take effect.
         * @param { boolean } is_start  Whether to enable frame interpolation. The value true indicates to enable
         * frame interpolation, and the value false indicates the opposite.
         * The default value is false.
         * The value can be true or false.
         * Action for setting an invalid value: N/A.
         * @returns { WebBlanklessErrorCode } WebBlanklessErrorCode.
         * @throws { BusinessError } 801 Capability not supported.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode;

        /**
         * Clears the blankless loading cache of the page with a specified key value.
         *
         * @param { Array<string> } [keys]  The list of key values of pages cached in the blankless loading
         * solution. These key values are specified in getBlanklessInfoKey.
         * The default value is the list of key values of all pages cached in the blankless loading solution.
         * The key length cannot exceed 2048 characters, and the number of keys must be less than or equal to 100.
         * The URL is the same as that input to the Web component during page loading.
         * When the key length exceeds 2048 characters, the key does not take effect. When the number of keys
         * exceeds 100, the first 100 keys are used. If these parameters are left empty, the default values are used.
         * @throws { BusinessError } 801 Capability not supported.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static clearBlanklessLoadingCache(keys?: Array<string>) : void;

        /**
         * Sets the cache capacity of the blankless loading solution and returns the value that takes effect. If
         * this API is not called, the default capacity 30 MB is used. The maximum capacity cannot exceed 100 MB.
         *
         * @param { int } capacity  Cache capacity, in MB. The maximum value is 100 MB.
         * The default value is 30 MB.
         * The value ranges from 0 to 100. If this parameter is set to 0, no cache capacity is available and the
         * functionality is disabled globally.
         * When the value is set to a number smaller than 0, the value 0 takes effect. When the value is set to a
         * number greater than 100, the value 100 takes effect.
         * @returns { int } The effective value that ranges from 0 MB to 100 MB.
         * @throws { BusinessError } 801 Capability not supported.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setBlanklessLoadingCacheCapacity(capacity: int) : int;

        /**
         * Get whether default error page feature is enabled.
         *
         * @returns  { boolean } -  True if enable the default error page feature; else false.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getErrorPageEnabled(): boolean;

        /**
         * Set whether enable the error page. onOverrideErrorPage will be triggered when the page error.
         *
         * @param { boolean } enable - Whether to enable the default error page feature.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setErrorPageEnabled(enable: boolean): void;

        /**
         * After enable PrivateNetworkAccess feature, ArkWeb will send a CORS preflight request before issuing any
         * sub-resource private network requests to request explicit permission from the target server.
         * After disable PrivateNetworkAccess, ArkWeb will no longer check whether the private network request
         * is legitimate.
         *
         * @param {boolean} enable - {@code true} enable the private network access check; {@code false} otherwise.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static enablePrivateNetworkAccess(enable: boolean): void;

        /**
         * Get whether PrivateNetworkAccess is enabled.
         *
         * @returns {boolean} True is enable the ability to check private network access else false.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static isPrivateNetworkAccessEnabled(): boolean;

        /**
         * Set web destroy mode.
         * @param { WebDestroyMode } mode web destroy mode, default NORMAL_MODE.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setWebDestroyMode(mode: WebDestroyMode): void;

        /**
         * Configure whether to enable automatic pre-connection to high-frequency URLs accessed during the application's
         * previous lifecycle after web initialization.
         * @param { boolean } enabled - Enable if true, disable if false.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setAutoPreconnect(enabled: boolean): void;

        /**
         * ‌Retrieve whether the automatic pre-connection feature is enabled‌.
         *
         * @returns { boolean } Return true if enabled, false if disabled.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static isAutoPreconnectEnabled(): boolean;

        /**
         * Set the site isolation mode.
         *
         * @param { SiteIsolationMode } mode The site isolation mode of the application,
         *      default value depends on different devices type.
         * @throws { BusinessError } 17100001 - Init error. Possible causes:
         *     1. Site Isolation mode is already set by the developer.
         *     2. Site Isolation mode cannot be strict in single-render-process mode.
         *     3. Site Isolation mode cannot be changed while Secure Shield mode is active.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setSiteIsolationMode(mode: SiteIsolationMode): void;

        /**
         * Get the site isolation mode.
         *
         * @returns { SiteIsolationMode } The site isolation mode of the application.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static getSiteIsolationMode(): SiteIsolationMode;

        /**
         * Set web engine socket idle timeout.
         * <p><strong>API Note</strong>:<br>
         * Unit: seconds, minimum 30s, maximum 5 minutes. If not set, the default is five minutes.
         * </p>
         *
         * @param { int } timeout - Socket idle timeout.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        static setSocketIdleTimeout(timeout: int): void;

        /**
         * Set the WebSoftKeyboardBehaviorMode to decide whether the keyboard will be shown/hidden automatically
         * in particular situation, for example, when web is inactive or active.
         *
         * @param { WebSoftKeyboardBehaviorMode } mode - The WebSoftKeyboardBehaviorMode of this web.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void;

        /**
         * Sets whether to switch web scrollbar mode.
         *
         * @param { ScrollbarMode } scrollbarMode - web scrollbar mode, default OVERLAY_LAYOUT_SCROLLBAR.
         * @static
         * @syscap SystemCapability.Web.Webview.Core
         * @since 23 static
         */
        static setScrollbarMode(scrollbarMode: ScrollbarMode): void;
    }

    /**
     * Represents a download task, You can use this object to operate the corresponding download task.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebDownloadItem {
        /**
         * Get url of the web download request.
         * @returns { string } - Returns the url.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getUrl(): string;
    }

    /**
     * The download state is notified through this delegate.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebDownloadDelegate {
        /**
         * Callback will be triggered before web download start.
         * @param { Callback<WebDownloadItem> } callback - The callback of download will be start.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        onBeforeDownload(callback: Callback<WebDownloadItem>): void;
    }

    /**
     * Defines the Web resource response used for scheme handler.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class WebSchemeHandlerResponse {
        /**
         * Constructor.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        constructor();
        /**
         * Set the resolved URL after redirects or changed as a result of HSTS.
         *
         * @param { string } url - Set response url for redirects.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setUrl(url: string): void;
        /**
         * Get the resolved URL after redirects or changed as a result of HSTS.
         *
         * @returns { string } Return response url for redirects.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getUrl(): string;
    }

    /**
     * Enum type supplied to {@link handleStatusChanged} for indicating the playback status.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum PlaybackStatus {
        /**
         * Player status is paused.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        PAUSED = 0,
        /**
         * Player status is playing.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        PLAYING,
    }

    /**
     * Enum type supplied to {@link handleNetworkStateChanged} for indicating the native player network state.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum NetworkState {
        /**
         * Player does not do any download tasks.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        EMPTY = 0,
        /**
         * Player downloads finished, waiting for next task.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        IDLE,
        /**
         * Player is downloading contents.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        LOADING,
        /**
         * Player downloads failed, due to network error.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NETWORK_ERROR
    }

    /**
     * Enum type supplied to {@link handleReadyStateChanged} for indicating the native player network state.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum ReadyState {
        /**
         * Player hasn't downloaded anything.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HAVE_NOTHING = 0,
        /**
         * Player has downloaded metadata.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HAVE_METADATA,
        /**
         * Player has played all downloaded media data.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HAVE_CURRENT_DATA,
        /**
         * The buffered media data is not enough, and will cause jank.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HAVE_FUTURE_DATA,
        /**
         * The buffered media data is enough.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        HAVE_ENOUGH_DATA,
    }

    /**
     * Enum type supplied to {@link handleError} for indicating the error type of native media player.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum MediaError {
        /**
         * Network error
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NETWORK_ERROR = 1,
        /**
         * Media format error, such as not a valid file.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        FORMAT_ERROR,
        /**
         * Decode error, such as decoder doesn't support this format.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        DECODE_ERROR
    }

    /**
     * The native media player status handler.
     * Apps should use this class to handle native media player's status.
     *
     * @typedef NativeMediaPlayerHandler
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface NativeMediaPlayerHandler {

        /**
         * Handle native media player playback status.
         *
         * @param { PlaybackStatus } status - Playback status of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleStatusChanged(status: PlaybackStatus): void;

        /**
         * Handle native media player volume.
         *  volume: float
         *   value range: [0 - 1.0]
         *
         * @param { double } volume - Current volume of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleVolumeChanged(volume: double): void;

        /**
         * Handle native media player muted status.
         *
         * @param { boolean } muted - Current mute status of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleMutedChanged(muted: boolean): void;

        /**
         * Handle playback rate of native media player.
         *  playbackRate: float
         *   value range: [0 - infinity]
         *
         * @param { double } playbackRate - Current playback rate of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handlePlaybackRateChanged(playbackRate: double): void;

        /**
         * Handle duration time of media.
         *  duration: float
         *   value range: [0 - infinity]
         *
         * @param { double } duration - Duration time (in seconds) of media.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleDurationChanged(duration: double): void;

        /**
         * Handle current playing time of media.
         *  currentPlayTime: float
         *   value range: [0 - duration]
         *
         * @param { double } currentPlayTime - Current playing time (in seconds) of media.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleTimeUpdate(currentPlayTime: double): void;

        /**
         * Handle buffered end time of media.
         *  bufferedEndTime: float
         *   value range: [0 - duration]
         *
         * @param { double } bufferedEndTime - Buffered end time (in seconds) of media.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleBufferedEndTimeChanged(bufferedEndTime: double): void;

        /**
         * Handle native player ended event.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleEnded(): void;

        /**
         * Handle network state of native media player.
         *
         * @param { NetworkState } state - Network state of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleNetworkStateChanged(state: NetworkState): void;

        /**
         * Handle ready state of native media player.
         *
         * @param { ReadyState } state - Ready state of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleReadyStateChanged(state: ReadyState): void;

        /**
         * Handle native media player fullscreen state changed event.
         *
         * @param { boolean } fullscreen - Fullscreen state of native media player.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleFullscreenChanged(fullscreen: boolean): void;

        /**
         * Handle native media player seeking state.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleSeeking(): void;

        /**
         * Handle native media player seek finished state.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleSeekFinished(): void;

        /**
         * Handle native media player error event.
         *
         * @param { MediaError } error - Error type of native media player.
         * @param { string } errorMessage - Description of current error.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleError(error: MediaError, errorMessage: string): void;

        /**
         * Handle size of video.
         *
         * @param { double } width - Width of video.
         * @param { double } height - Height of video.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        handleVideoSizeChanged(width: double, height: double): void;
    }

    /**
     * The scenarios for suspending the media player.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum SuspendType {
        /**
         * Page enters the BackForwardCache.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ENTER_BACK_FORWARD_CACHE = 0,

        /**
         * Page enters background.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ENTER_BACKGROUND,

        /**
         * Cleanup when the number of paused media player over limit.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        AUTO_CLEANUP
    }

    /**
     * The function of reusme media play.
     *
     * @typedef { function } ResumePlayerFn
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type ResumePlayerFn = () => void;

    /**
     * The function of suspend media play.
     *
     * @typedef { function } SuspendPlayerFn
     * @param { SuspendType } type - The scenario for suspending the media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type SuspendPlayerFn = (type: SuspendType) => void;

    /**
     * The function of the rect of video tag has changed.
     *
     * @typedef { function } UpdateRectFn
     * @param { double } x - The x position of video tag in web component.
     * @param { double } y - The y position of video tag in web component.
     * @param { double } width - The width of video tag.
     * @param { double } height - The height of video tag.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type UpdateRectFn = (x: double, y: double, width: double, height: double) => void;

    /**
     * The bridge between web core and native media player.
     * Apps should implements this interface, and pass an instance to web core.
     * Then web core can control native media player by this bridge.
     *
     * @typedef NativeMediaPlayerBridge
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface NativeMediaPlayerBridge {
        /**
         * Notify native media player that the rect of video tag has changed.
         *
         * @typedef { UpdateRectFn }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        updateRect: UpdateRectFn;

        /**
         * Request to play.
         *
         * @typedef { ZeroParamFn<> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        play: ZeroParamFn<>;

        /**
         * Request to pause.
         *
         * @typedef { ZeroParamFn<> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        pause: ZeroParamFn<>;

        /**
         * Request to fast forward / back forward to targetTime.
         *  targetTime: float
         *   value range: [0 - duration]
         *
         * @typedef { OneParamFn<double> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        seek: OneParamFn<double>;

        /**
         * Request to change volume of native media player.
         *  volume: float
         *   value range: [0 - 1.0]
         *
         * @typedef { OneParamFn<double> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setVolume: OneParamFn<double>;

        /**
         * Request to mute native media player.
         *
         * @typedef { OneParamFn<boolean> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setMuted: OneParamFn<boolean>;

        /**
         * Request to change playback rate of native media player.
         *  playbackRate: float
         *   value range: [0 - 10.0]
         *
         * @typedef { OneParamFn<double> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        setPlaybackRate: OneParamFn<double>;

        /**
         * Request to release native media player.
         *
         * @typedef { ZeroParamFn<> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        release: ZeroParamFn<>;

        /**
         * Request to enter fullscreen.
         *
         * @typedef { ZeroParamFn<> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        enterFullscreen: ZeroParamFn<>;

        /**
         * Request to exit fullscreen.
         *
         * @typedef { ZeroParamFn<> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        exitFullscreen: ZeroParamFn<>;

        /**
         * Resume the native media player.
         *
         * @type { ?ResumePlayerFn }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        resumePlayer?: ResumePlayerFn;

        /**
         * Suspend to release native media player, not the NativeMediaPlayerBridge. The
         * embedder should save the status of player when release the native media player
         * through NativeMediaPlayerBridge.
         *
         * @type { ?SuspendPlayerFn }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        suspendPlayer?: SuspendPlayerFn;
    }

    /**
     * Enum type for indicating the media type of native media player.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum MediaType {
        /**
         * Media type is video.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        VIDEO = 0,
        /**
         * Media type is audio.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        AUDIO
    }

    /**
     * Enum type for indicating the media source type of native media player.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum SourceType {
        /**
         * The type of media source is URL.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        URL = 0,
        /**
         * The type of media source is blob.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MSE
    }

    /**
     * Media source information. Uri and format.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class MediaSourceInfo {
        /**
         * Source type, most time is URL.
         * @type { SourceType }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        type: SourceType;

        /**
         * Media source, most time is Uri.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        source: string;

        /**
         * Media format, such as mp4, webm, m3u8 etc.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        format: string;
    }

    /**
     * Rectangle definition.
     *
     * @typedef RectEvent
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface RectEvent {
        /**
         * X coordinator of top left point.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        x: double;
        /**
         * Y coordinator of top left point.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        y: double;
        /**
         * Width of this rectangle.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        width: double;
        /**
         * Height of this rectangle.
         *
         * @type { double }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        height: double;
    }

    /**
     * Surface information.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class NativeMediaPlayerSurfaceInfo {
        /**
         * Id of surface.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        id: string;

        /**
         * Surface rect info.
         * @type { RectEvent }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        rect: RectEvent;
    }

    /**
     * Enum type for indicating the preload type.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum Preload {
        /**
         * Doesn't do preload.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NONE = 0,
        /**
         * Only preload metadata.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        METADATA,
        /**
         * Preload enough data to ensure playing is smooth.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        AUTO
    }

    /**
     * Media information.
     *
     * @typedef MediaInfo
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    interface MediaInfo {
        /**
         * Id of media element.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        embedID: string,
        /**
         * Media type : Video or Audio.
         * @type { MediaType }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        mediaType: MediaType,
        /**
         * Media source list, player should choose an appropriate one to play.
         * @type { MediaSourceInfo[] }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        mediaSrcList: MediaSourceInfo[],
        /**
         * Surface to render media content on.
         * @type { NativeMediaPlayerSurfaceInfo }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        surfaceInfo: NativeMediaPlayerSurfaceInfo,
        /**
         * Should show media controls.
         * @type { boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        controlsShown: boolean,
        /**
         * Limit media controls items.
         *  Such as 'nodownload', 'nofullscreen', 'noremoteplayback'
         * @type { string[] }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        controlList: string[],
        /**
         * Player should be muted;
         * @type { boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        muted: boolean,
        /**
         * Player should show poster before media first frame shown.
         * @type { string }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        posterUrl: string,
        /**
         * Preload type.
         * @type { Preload }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        preload: Preload,
        /**
         * Header information of a media network request.
         * @type { Record<string, string> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        headers: Record<string, string>,
        /**
         * The information list of attributes of media tag.
         * @type { Record<string, string> }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        attributes: Record<string, string>,
    }

    /**
     * The callback of creating a native media player.
     *
     * @typedef { function }
     * @param { NativeMediaPlayerHandler } handler - callback information of onCreateNativeMediaPlayer.
     * @param { MediaInfo } mediaInfo - callback information of onCreateNativeMediaPlayer.
     * @returns { NativeMediaPlayerBridge } Returns whether the app takes over the media.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type CreateNativeMediaPlayerCallback =
        (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;

    /**
     * This class is used to enable back forward cache supported features.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class BackForwardCacheSupportedFeatures {
        /**
         * Whether cache the pages that use native embed.
         * Default is false;
         *
         * @type { boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        nativeEmbed: boolean;

        /**
         * Whether cache the pages that use media take over.
         * Default is false;
         *
         * @type { boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        mediaTakeOver: boolean;

        /**
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        constructor();
    }

    /**
     * This class is used to set back forward cache options.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class BackForwardCacheOptions {
        /**
         * Set the maximum size of pages that can cache.
         * Default is 1, max is 50.
         *
         * @type { int }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        size: int;

        /**
         * Set the lifetime in seconds in the BackForwardCache.
         * Default is 600.
         *
         * @type { int }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        timeToLive: int;

        /**
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        constructor();
    }

    /**
     * Defines the PrefetchOptions class.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class PrefetchOptions {

        /**
         * ‌Set prefetch page interval limit.
         * <p><strong>API Note</strong>:<br>
         * Default 500ms (ensures only one successful prefetch within 500ms).
         * The interval throttles prefetch frequency to balance performance and resource usage.
         *
         * @type { int }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        minTimeBetweenPrefetchesMs: int;

        /**
         * Set whether to ignore Cache-Control: no-store‌.
         * <p><strong>API Note</strong>:<br>
         * This setting controls whether prefetch operations bypass the HTTP Cache-Control: no-store directive.
         * Important‌: Default behavior (false) aligns with HTTP security standards. Overriding (true) requires explicit risk
         * assessment for non-sensitive resources.
         *
         * @type { boolean }
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        ignoreCacheControlNoStore: boolean;

        /**
         * Constructor for PrefetchOptions.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        constructor();
    }

    /**
     * Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.
     * @enum { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum ProxySchemeFilter {
        /**
         * This indicates all the schemes will use the proxy.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MATCH_ALL_SCHEMES = 0,
        /**
         * This indicates only the HTTP requests will use the proxy.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MATCH_HTTP = 1,
        /**
         * This indicates only the HTTPS requests will use the proxy.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        MATCH_HTTPS = 2,
    }

    /**
     * The ProxyConfig used by applyProxyOverride.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class ProxyConfig {
        /**
         * Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy, all requests will
         * use the proxy rule if schemeFilter is null.
         *
         * The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS, or SOCKS if present. Scheme defaults to HTTP.
         * Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period. Port number is optional and defaults
         * to 80 for HTTP, 443 for HTTPS and 1080 for SOCKS.
         *
         * e.g. example.com host: example.com
         *      https://example.com  scheme: https  host: example.com
         *      example.com:8888     host: example.com  port: 8888
         *      https://example.com:8888  scheme:https  host: example.com  port:8888
         *      192.168.1.1  host: 192.168.1.1
         *      192.168.1.1:8888  host:192.168.1.1 port: 8888
         *      [10:20:30:40:50:60:70:80]
         *
         * @param { string } proxyRule - The proxy rule.
         * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
         * <br>2. Incorrect parameter types.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;

        /**
         * Returns the proxy rules.
         *
         * @returns { Array<ProxyRule> } The proxy rules.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getProxyRules(): Array<ProxyRule>;
    }

    /**
     * The ProxyRule used by insertProxyRule.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    class ProxyRule {
        /**
         * Returns the scheme filter used for this rule.
         *
         * @returns { ProxySchemeFilter } The scheme filter used for this rule.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getSchemeFilter(): ProxySchemeFilter;

        /**
         * Returns the proxy URL.
         *
         * @returns { string } The proxy URL.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        getUrl(): string;
    }

    /**
     * Enum type supplied to {@link SetWebDestroyMode} for indicating the web component destroy mode.
     * @enum { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum WebDestroyMode {
        /**
         * The normal destroy mode, when the web component triggers destroy,
         * the resources will be released at the appropriate time.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        NORMAL_MODE = 0,

        /**
         * The fast destroy mode, when the web component triggers destroy, the resources will be immediately released.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        FAST_MODE = 1
    }

    /**
     * Indicates the site isolation mode of the application, default value depends on different devices type.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    enum SiteIsolationMode {
        /**
         * The partial site isolation mode
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        PARTIAL = 0,

        /**
         * The strict site isolation mode
         * @syscap SystemCapability.Web.Webview.Core
         * @since 22 static
         */
        STRICT = 1
    }

    /**
     * Enum type supplied to {@link setScrollbarMode} for indicating the web component scrollbar mode.
     * @enum { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    enum ScrollbarMode {
        /**
         * The normal scrollbar mode, A scrollbar suspended above the content,
         * appearing when scrolling and automatically hiding when stationary.
         * Draw using layout viewport, which can be dragged and dropped.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 23 static
         */
        OVERLAY_LAYOUT_SCROLLBAR = 0,

        /**
         * The Resident scrollbar mode, Always display a fixed position scrollbar in the content area.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 23 static
         */
        FORCE_DISPLAY_SCROLLBAR = 1
    }

    /**
     * The function with zero parameter.
     *
     * @typedef { function } zeroParamFn
     * @returns { V } The return value.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type ZeroParamFn<V=void> = () => V;

    /**
     * The function with one parameter.
     *
     * @typedef { function } oneParamFn
     * @param { T } param - the first param.
     * @returns { V } The return value.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type OneParamFn<T,V=void> = (param: T) => V;

    /**
     * The function with two parameter.
     *
     * @typedef { function } twoParamFn
     * @param { T } paramA - the first param.
     * @param { C } paramB - the second param.
     * @returns { V } The return value.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 static
     */
    type TwoParamFn<T,C,V=void> = (paramA: T,paramB: C) => V;
}

export default webview;