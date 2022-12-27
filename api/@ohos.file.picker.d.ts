/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { AsyncCallback, Callback } from "./basic";

/**
 * This module provides the capability to use different types of pickers.
 *
 * @since 9
 * @syscap SystemCapability.FileManagement.UserFileService
 */
declare namespace picker {
    /**
     * PhotoPickerMIMETypes represents the type of media resource that photo picker selects.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    export enum PhotoViewMIMETypes {
        IMAGE_TYPE = "image/*",
        VIDEO_TYPE = "video/*",
        IMAGE_VIDEO_TYPE = "*/*"
    }

    /**
     * PhotoPickerSelectOption Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    interface PhotoSelectOptions {
        /**
         * @type {PhotoPickerMIMETypes}
         * @since 9
         */
        pickerMIMEType?: PhotoViewMIMETypes;
        
        /**
         * @type {number}
         * @since 9
         */
        maxSelectNumber?: number;
    }

    /**
     * PhotoPickerSelectResult Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    interface PhotoSelectResult {
        /**
         * @type {Array<string>}
         * @since 9
         */
        photoUris: Array<string>;
        
        /**
         * @type {boolean}
         * @since 9
         */
        isOriginalPhoto: boolean;
    }

    /**
     * PhotoPickerViewController Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    interface PhotoViewPicker {
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @since 9
         * @syscap SystemCapability.FileManagement.UserFileService         
         * @param PhotoPickerSelectOption represents the options provided in select mode.
         * @returns {(void | Promise<PhotoPickerSelectResult>)} Returns the selector result.
         */
        select(option: PhotoSelectOptions) : Promise<PhotoSelectResult>;
        select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>) : void;
    }

    /**
     * DocumentPickerSelectOption Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    interface DocumentSelectOption {
        /**
         * @type {string}
         * @since 9
         */
        defaultPath?: string;

        /**
         * @type {Array<string>}
         * @since 9
         */
        pickerSubMIMEType?: Array<string>;

        /**
         * @type {number}
         * @since 9
         */
        maxSelectNumber?: number;
    }

    /**
     * DocumentPickerSaveOption Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    interface DocumentSaveOption {
        /**
         * @type {Array<string>}
         * @since 9
         */
        NewFileName?: Array<string>;
    }

    /**
     * DocumentPickerViewController Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */    
    interface DocumentViewPicker {
        /**
         * Pull up the document picker based on the selection mode.
         *
         * @since 9
         * @syscap SystemCapability.FileManagement.UserFileService         
         * @param DocumentPickerSelectOption represents the options provided in select mode.
         * @returns {(void | Promise<Array<string>>)} Returns the selector result.
         */
        select(option: DocumentSelectOption) : Promise<Array<string>>;
        select(option: DocumentSelectOption, callback: AsyncCallback<Array<string>>) : void;

        /**
         * Pull up the document picker based on the save mode.
         *
         * @since 9
         * @syscap SystemCapability.FileManagement.UserFileService         
         * @param DocumentPickerSaveOption represents the options provided in save mode.
         * @returns {(void | Promise<Array<string>>)} Returns the save result.
         */
        save(option: DocumentSaveOption) : Promise<Array<string>>;
        save(option: DocumentSaveOption, callback: AsyncCallback<Array<string>>) : void;
    }

    /**
     * AudioPickerSelectOption Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */
    interface AudioSelectOption {
        /**
         * @type {number}
         * @since 9
         */
        maxSelectNumber?: number;
    }

    /**
     * AudioPickerViewController Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     */ 
    interface AudioViewPicker {
        /**
         * Pull up the audio picker based on the selection mode.
         *
         * @since 9
         * @syscap SystemCapability.FileManagement.UserFileService         
         * @param AudioPickerSelectOption represents the options provided in select mode.
         * @returns {(void | Promise<Array<string>>)} Returns the selector result.
         */
        select(option: AudioSelectOption) : Promise<Array<string>>;
        select(option: AudioSelectOption, callback: AsyncCallback<Array<string>>) : void;
    }
}