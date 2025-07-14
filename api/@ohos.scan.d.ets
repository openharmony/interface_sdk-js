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

import type { Callback } from './@ohos.base';

/**
 * System scan
 *
 * @namespace scan
 * @syscap SystemCapability.Print.PrintFramework
 * @since 20
 * @arkts 1.2
 */
declare namespace scan {
    /**
     * Enumeration of scan error codes.
     * @enum { number } ScanErrorCode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    enum ScanErrorCode {
        /**
         * No permission error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_NO_PERMISSION = 201,

        /**
         * Not system application error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_NO_SYSTEM_APPLICATION = 202,

        /**
         * Invalid parameter error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_INVALID_PARAMETER = 401,

        /**
         * Generic failure error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_GENERIC_FAILURE = 13100001,

        /**
         * RPC failure error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_RPC_FAILURE = 13100002,

        /**
         * Server failure error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_SERVER_FAILURE = 13100003,

        /**
         * Unsupported operation error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_UNSUPPORTED = 13100004,

        /**
         * Operation canceled error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_CANCELED = 13100005,

        /**
         * Device busy error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_DEVICE_BUSY = 13100006,

        /**
         * Invalid operation error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_INVALID = 13100007,

        /**
         * Paper jam error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_JAMMED = 13100008,

        /**
         * No documents error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_NO_DOCS = 13100009,

        /**
         * Cover open error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_COVER_OPEN = 13100010,

        /**
         * I/O error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_IO_ERROR = 13100011,

        /**
         * No memory error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_ERROR_NO_MEMORY = 13100012,
    };

    /**
     * Enumeration of constraint types.
     * @enum { number } ConstraintType
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    enum ConstraintType {
        /**
         * No constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_CONSTRAINT_NONE = 0,

        /**
         * Range constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_CONSTRAINT_RANGE,

        /**
         * Word list constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_CONSTRAINT_WORD_LIST,

        /**
         * String list constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_CONSTRAINT_STRING_LIST,
    };

    /**
     * Enumeration of physical units.
     * @enum { number } PhysicalUnit
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    enum PhysicalUnit {
        /**
         * No unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_NONE = 0,

        /**
         * Pixel unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_PIXEL,

        /**
         * Bit unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_BIT,

        /**
         * Millimeter unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_MM,

        /**
         * DPI unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_DPI,

        /**
         * Percentage unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_PERCENT,

        /**
         * Microsecond unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_UNIT_MICROSECOND,
    };

    /**
     * Enumeration of option value types.
     * @enum { number } OptionValueType
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    enum OptionValueType {
        /**
         * Boolean type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_TYPE_BOOL = 0,

        /**
         * Integer type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_TYPE_INT,

        /**
         * Fixed point type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_TYPE_FIXED,

        /**
         * String type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        SCAN_TYPE_STRING,
    };

    /**
     * Enumeration of scanner sync modes.
     * @enum { string } ScannerSyncMode
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    enum ScannerSyncMode {
        /**
         * Update mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @systemapi Hide this for inner system use.
         * @since 20
         * @arkts 1.2
         */
        UPDATE_STR = "update",

        /**
         * Delete mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @systemapi Hide this for inner system use.
         * @since 20
         * @arkts 1.2
         */
        DELETE_STR = "delete",
    };

    /**
     * Enumeration of scanner discovery modes.
     * @enum { string } ScannerDiscoverMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    enum ScannerDiscoverMode {
        /**
         * TCP discovery mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        TCP_STR = "TCP",

        /**
         * USB discovery mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        USB_STR = "USB",
    };

    /**
     * Defines a range with minimum, maximum and quantization values.
     * @typedef Range
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    interface Range {
        /**
         * Minimum value of the range.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        minValue: number;

        /**
         * Maximum value of the range.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        maxValue: number;

        /**
         * Quantization value of the range.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        quantValue: number;
    };

    /**
     * Defines scanner parameters.
     * @typedef ScannerParameter
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    interface ScannerParameter {
        /**
         * Name of the option.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionName: string;

        /**
         * Index of the option.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionIndex: number;

        /**
         * Title of the option.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionTitle: string;

        /**
         * Description of the option.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionDesc: string;

        /**
         * Type of the option value.
         * @type { OptionValueType }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionType: OptionValueType;

        /**
         * Physical unit of the option.
         * @type { PhysicalUnit }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionUnit: PhysicalUnit;

        /**
         * Constraint type of the option.
         * @type { ConstraintType }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionConstraintType: ConstraintType;

        /**
         * String constraints for the option.
         * @type { ?Array<string> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionConstraintString?: Array<string>;

        /**
         * Number constraints for the option.
         * @type { ?Array<number> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionConstraintNumber?: Array<number>;

        /**
         * Range constraints for the option.
         * @type { ?Range }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        optionConstraintRange?: Range;
    };

    /**
     * Defines scanner option values.
     * @typedef ScannerOptionValue
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    interface ScannerOptionValue {
        /**
         * Type of the value.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        valueType: number;

        /**
         * Numeric value.
         * @type { ?number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        numValue?: number;

        /**
         * String value.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        strValue?: string;

        /**
         * Boolean value.
         * @type { ?boolean }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        boolValue?: boolean;
    };

    /**
     * Defines picture scan progress.
     * @typedef PictureScanProgress
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    interface PictureScanProgress {
        /**
         * Current progress percentage.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        progress: number;

        /**
         * File descriptor of the scanned picture.
         * @type { number }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        pictureFd: number;

        /**
         * Whether this is the final progress update.
         * @type { boolean }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        isFinal: boolean;
    };

    /**
     * Defines scanner device information.
     * @typedef ScannerDevice
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    interface ScannerDevice {
        /**
         * Unique identifier of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        scannerId: string;

        /**
         * Discovery mode of the scanner.
         * @type { ScannerDiscoverMode }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        discoverMode: ScannerDiscoverMode;

        /**
         * Unique ID of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        uniqueId: string;

        /**
         * Manufacturer of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        manufacturer: string;

        /**
         * Model of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        model: string;

        /**
         * Name of the scanner device.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20
         * @arkts 1.2
         */
        deviceName: string;
    };

    /**
     * Defines scanner sync device information.
     * @typedef ScannerSyncDevice
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
    */
    interface ScannerSyncDevice {
        /*
        * Scanner ID.
        * @type { string }
        * @syscap SystemCapability.Print.PrintFramework
        * @systemapi
        * @since 20
        * @arkts 1.2
        */
        scannerId: string;
            /**
         * Discovery mode.
         * @type { ScannerDiscoverMode }
         * @syscap SystemCapability.Print.PrintFramework
         * @systemapi
         * @since 20
         * @arkts 1.2
         */
        discoverMode: ScannerDiscoverMode;

        /**
         * Unique ID.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @systemapi
         * @since 20
         * @arkts 1.2
         */
        uniqueId: string;

        /**
         * Sync mode.
         * @type { ScannerSyncMode }
         * @syscap SystemCapability.Print.PrintFramework
         * @systemapi
         * @since 20
         * @arkts 1.2
         */
        syncMode: ScannerSyncMode;

        /**
         * Old device ID.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @systemapi
         * @since 20
         * @arkts 1.2
         */
        oldDeviceId: string;
    }

    /**
     * Initialize the scan service.
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function init(): Promise<void>;

    /**
     * Exit the scan service.
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function exit(): Promise<void>;

    /**
     * Start discovering scanners.
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function startScannerDiscovery(): Promise<void>;

    /**
     * Open a scanner.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner to open.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function openScanner(scannerId: string): Promise<void>;

    /**
     * Close a scanner.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner to close.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function closeScanner(scannerId: string): Promise<void>;

    /**
     * Get scanner parameters.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @returns { Promise<Array<ScannerParameter>> } the promise returned with scanner parameters.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function getScannerParameter(scannerId: string): Promise<Array<ScannerParameter>>;

    /**
     * Set scanner parameter.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { number } optionIndex - The index of the option to set.
     * @param { ScannerOptionValue } value - The value to set.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function setScannerParameter(scannerId: string, optionIndex: number, value: ScannerOptionValue): Promise<void>;

    /**
     * Set scan option to auto.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { number } optionIndex - The index of the option to set to auto.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function setScanAutoOption(scannerId: string, optionIndex: number): Promise<void>;

    /**
     * Get current scanner setting.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { number } optionIndex - The index of the option to get.
     * @returns { Promise<ScannerOptionValue> } the promise returned with the current setting.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function getScannerCurrentSetting(scannerId: string, optionIndex: number): Promise<ScannerOptionValue>;

    /**
     * Start scanning.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { boolean } batchMode - Whether to use batch mode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 24300106 - Device busy.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function startScan(scannerId: string, batchMode: boolean): Promise<void>;

    /**
     * Cancel scanning.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function cancelScan(scannerId: string): Promise<void>;

    /**
     * Get picture scan progress.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @returns { Promise<PictureScanProgress> } the promise returned with scan progress.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>;

    /**
     * Add a scanner (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - The unique ID of the scanner.
     * @param { ScannerDiscoverMode } discoverMode - The discovery mode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function addScanner(uniqueId: string, discoverMode: ScannerDiscoverMode): Promise<void>;

    /**
     * Delete a scanner (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - The unique ID of the scanner.
     * @param { ScannerDiscoverMode } discoverMode - The discovery mode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function deleteScanner(uniqueId: string, discoverMode: ScannerDiscoverMode): Promise<void>;

    /**
     * Get added scanners (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @returns { Promise<Array<ScannerDevice>> } the promise returned with scanner devices.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function getAddedScanner(): Promise<Array<ScannerDevice>>;

    /**
     * Register event callback for scanner device found.
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Callback for device found event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device found.
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20
     * @arkts 1.2
     */
    function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device sync (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - Event type.
     * @param { Callback<ScannerSyncDevice> } [callback] - Callback for device sync event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void;

    /**
     * Unregister event callback for scanner device sync (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - Event type.
     * @param { Callback<ScannerSyncDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void;

    /**
     * Register event callback for scanner device add (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Callback for device add event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function on(type: 'scanDeviceAdd', callback: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device add (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device delete (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Callback for device delete event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function on(type: 'scanDeviceDel', callback: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device delete (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20
     * @arkts 1.2
     */
    function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void;
}
export default scan;