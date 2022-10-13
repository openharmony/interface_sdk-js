/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import {AsyncCallback, Callback} from './basic';

/**
 * Provides interfaces to sync distributed object
 *
 * @name distributedDataObject
 * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
 * @since 8
 */
declare namespace distributedDataObject {

    /**
     * Create distributed object
     *
     * @param source Init data of distributed object
     * @return Returns the distributed object
     * @since 8
     */
    function createDistributedObject(source: object): DistributedObject;

    /**
     * Create distributed object
     *
     * @param { object } source - source Init data of distributed object
     * @return Returns the distributed object
     * @throws { BusinessError } 401 - the parameter check failed
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9
     */
    function create(source: object): DistributedObjectV9;

    /**
     * Generate a random sessionId
     *
     * @return Returns the random sessionId
     * @since 8
     */
    function genSessionId(): string;

    /**
     * @since 9
     */
    interface SaveSuccessResponse {
        /**
         * sessionId of saved object
         * @since 9
         */
        sessionId: string;

        /**
         * version of saved object, can compare with DistributedObject.__version
         * @since 9
         */
        version: number;

        /**
         * deviceid that data saved
         * data is "local", means save in local device
         * otherwise, means the networkId of device
         * @since 9
         */
        deviceId: string;
    }

    /**
     * @since 9
     */
    interface RevokeSaveSuccessResponse {
        /**
         * @since 9
         */
        sessionId: string;
    }

    /**
     * Object create by {@link createDistributedObject}.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 8
     */
    interface DistributedObject {
        /*
         * Change object session
         *
         * @param sessionId The sessionId to be joined, if empty, leave all session
         * @return Operation result, true is success, false is failed
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @since 8
         */
        setSessionId(sessionId?: string): boolean;

        /**
         * On watch of change
         *
         * @param callback The callback of change
         * @since 8
         */
        on(type: 'change', callback: Callback<{ sessionId: string, fields: Array<string> }>): void;

        /**
         * Off watch of change
         *
         * @param callback If not null, off the callback, if undefined, off all callbacks
         * @since 8
         */
        off(type: 'change', callback?: Callback<{ sessionId: string, fields: Array<string> }>): void;

        /**
         * On watch of status
         *
         * @param callback Indicates the observer of object status changed.
         *                 sessionId: The sessionId of the changed object
         *                 networkId: NetworkId of the changed device
         *                 status: 'online' The object became online on the device and data can be synced to the device
         *                         'offline' The object became offline on the device and the object can not sync any data
         * @since 8
         */
        on(type: 'status', callback: Callback<{ sessionId: string, networkId: string, status: 'online' | 'offline' }>): void;

        /**
         * Off watch of status
         *
         * @param callback If not null, off the callback, if undefined, off all callbacks
         * @since 8
         */
        off(type: 'status', callback?: Callback<{ sessionId: string, deviceId: string, status: 'online' | 'offline' }>): void;
    }

    /**
     * Object create by {@link create}.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9
     */
    interface DistributedObjectV9 {
        
        /*
         * Change object session
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param { string } sessionId - sessionId The sessionId to be joined, if empty, leave all session.
         * @param { AsyncCallback<void> } callback - Indicates the callback function.
         * @throws { BusinessError } 201 - the permissions check failed.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @throws { BusinessError } 15400001 - create table failed.
         * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject.
         * @since 9
         */
        setSessionId(sessionId: string, callback: AsyncCallback<void>): void;
        setSessionId(callback: AsyncCallback<void>): void;

        /*
         * Change object session
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         * @param { string } sessionId - sessionId The sessionId to be joined, if empty, leave all session.
         * @returns { Promise<RevokeSaveSuccessResponse> } - return a promise object with void.
         * @throws { BusinessError } 201 - the permissions check failed.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @throws { BusinessError } 15400001 - create table failed.
         * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject.
         * @since 9
         */
        setSessionId(sessionId?: string): Promise<void>;

        /**
         * On watch of change
         * @param { string } type - event type, fixed as' change ', indicates data change. 
         * @param { Callback<{ sessionId: string, fields: Array<string> }> } callback 
         *          callback indicates the observer of object data changed. 
         * @throws { BusinessError  } 401 - the parameter check failed.
         * @since 9
         */
        on(type: 'change', callback: Callback<{ sessionId: string, fields: Array<string> }>): void;

        /**
         * Off watch of change
         * @param { string } type - event type, fixed as' change ', indicates data change. 
         * @param { Callback<{ sessionId: string, fields: Array<string> }> }callback 
         *          callback indicates the observer of object data changed.
         *          callback If not null, off the callback, if undefined, off all callbacks.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        off(type: 'change', callback?: Callback<{ sessionId: string, fields: Array<string> }>): void;

        /**
         * On watch of status
         * @param { string } type - event type, fixed as' status', indicates the online and offline of the object.
         * @param { Callback<{ sessionId: string, networkId: string, status: 'online' | 'offline' }> } callback
         *          callback indicates the observer of object status changed.
         *          sessionId: the sessionId of the changed object.
         *          networkId: NetworkId of the changed device.
         *          status: 'online' The object became online on the device and data can be synced to the device.
         *                  'offline' The object became offline on the device and the object can not sync any data.
         *                  'restored' The object restored success.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        on(type: 'status', callback: Callback<{ sessionId: string, networkId: string, status: 'online' | 'offline' }>): void;

        /**
         * Off watch of status
         * @param { string } type - event type, fixed as' status', indicates the online and offline of the object.
         * @param { Callback<{ sessionId: string, networkId: string, status: 'online' | 'offline' }> } callback
         *          callback Indicates the observer of object status changed.
         *          callback If not null, off the callback, if undefined, off all callbacks.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        off(type: 'status', callback?: Callback<{ sessionId: string, deviceId: string, status: 'online' | 'offline' }>): void;

        /**
         * Save object, after save object data successfully, the object data will not release when app existed, and resume data on saved device after app existed
         * the saved data secure level is S0, it is not safe, can only save public data, if there is privacy data, you should encrypt it
         *
         * the saved data will be released when
         * 1. saved after 24h
         * 2. app uninstalled
         * 3. after resume data success, system will auto delete the saved data
         * @param { string } deviceId - Indicates the device that will resume the object data.
         * @param { AsyncCallback<SaveSuccessResponse> } callback - Indicates the callback function.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        save(deviceId: string, callback: AsyncCallback<SaveSuccessResponse>): void;

        /**
         * Save object, after save object data successfully, the object data will not release when app existed, and resume data on saved device after app existed
         * the saved data secure level is S0, it is not safe, can only save public data, if there is privacy data, you should encrypt it
         *
         * the saved data will be released when
         * 1. saved after 24h
         * 2. app uninstalled
         * 3. after resume data success, system will auto delete the saved data
         * @param { string } deviceId - Indicates the device that will resume the object data.
         * @returns { Promise<SaveSuccessResponse> } - the response of revokeSave success.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        save(deviceId: string): Promise<SaveSuccessResponse>;

        /**
         * Revoke save object, delete saved object immediately, if object is saved in local device, it will delete saved data on all trusted device
         * if object is saved in other device, it will delete data in local device.
         * @param { AsyncCallback<RevokeSaveSuccessResponse> } callback - Indicates the callback function.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        revokeSave(callback: AsyncCallback<RevokeSaveSuccessResponse>): void;

        /**
         * Revoke save object, delete saved object immediately, if object is saved in local device, it will delete saved data on all trusted device
         * if object is saved in other device, it will delete data in local device.
         * @returns { Promise<RevokeSaveSuccessResponse> } the response of revokeSave success.
         * @throws { BusinessError } 401 - the parameter check failed.
         * @since 9
         */
        revokeSave(): Promise<RevokeSaveSuccessResponse>;
    }
}

export default distributedDataObject;
