/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * UDMF - Unified Data Management Framework
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @import import unifiedData from '@ohos.data.UDMF';
 */
declare namespace UDMF {
    enum Intention {

    }

    /**
     * the data type supported by unified data
     * @since 10
     */
    enum UnifiedDataType {
        /**
         * indicate the data type is text
         * @since 10
         */
        TEXT = "Text",
        /**
         * indicate the data type is plain text
         * @since 10
         */
        PLAIN_TEXT = "Text.PlainText",
        /**
         * indicate the data type is hyperlink
         * @since 10
         */
        HYPER_LINK = "Text.HyperLink",
        /**
         * indicate the data type is html
         * @since 10
         */
        HTML = "Text.HTML",
        /**
         * indicate the data type is File
         * @since 10
         */
        FILE = "File",
        /**
         * indicate the data type is image
         * @since 10
         */
        IMAGE = "File.Media.Image",
        /**
         * indicate the data type is video
         * @since 10
         */
        VIDEO = "File.Media.Video",
        /**
         * indicate the data type is Folder
         * @since 10
         */
        FOLDER = "File.Folder",
        /**
         * indicate the data type is system defined record(this kind of data is provided and bound to OpenHarmony,
         * also can be parsed by system provided API)
         * @since 10
         */
        SYSTEM_DEFINED_RECORD = "SystemDefinedType",
        /**
         * indicate the data type is system defined form(this kind of data is provided and bound to OpenHarmony,
         * also can be parsed by system provided API)
         * @since 10
         */
        SYSTEM_DEFINED_FORM = "SystemDefinedType.Form",
        /**
         * indicate the data type is system defined app item(this kind of data is provided and bound to OpenHarmony,
         * also can be parsed by system provided API)
         * @since 10
         */
        SYSTEM_DEFINED_APP_ITEM = "SystemDefinedType.AppItem",
        /**
         * indicate the data type is system defined pixel map(this kind of data is provided and bound to OpenHarmony,
         * also can be parsed by system provided API)
         * @since 10
         */
        SYSTEM_DEFINED_PIXEL_MAP = "SystemDefinedType.PixelMap",
        /**
         * indicate the data type is application defined data(this kind of data is provided and bound to OpenHarmony,
         * also can be parsed by system provided API)
         * @since 10
         */
        APPLICATION_DEFINED_RECORD = "ApplicationDefinedType",
    }

    type UnifiedKey = string;

    /**
     * describe the unified data, which can at most contains 512 unified data records, and its maximum memory is 512M.
     * @since 10
     */
    class UnifiedData {
        /**
         * create unified data with a record
         * @param {UnifiedRecord} record - Record will add into unified data.
         * @throws {BusinessError} 401 - Parameter error.
         * @since 10
         */
        constructor(record: UnifiedRecord);
        /**
         * add a record into unified data
         * @param {UnifiedRecord} record - Record will add into unified data.
         * @throws {BusinessError} 401 - Parameter error.
         * @since 10
         */
        addRecord(record: UnifiedRecord): void;
        /**
         * get all records of unified data
         * @return the records of unified data
         * @since 10
         */
        getRecords(): Array<UnifiedRecord>;
    }

    class Option {
        intention: Intention;
        key: UnifiedKey;
    }

    /**
     * the data abstract supported by unified data
     * @since 10
     */
    class Summary {
        /**
         * a map for each type and data size, key is data type, value is the corresponding data size
         * @since 10
         */
        summary: { [key: string]: number };
        /**
         * total data size of data in Bytes
         * @since 10
         */
        totalSize: number;
    }

    /**
     * describe the unified record
     * @since 10
     */
    class UnifiedRecord {
        /**
         * get type of unified record
         * @return the type of unified data
         * @since 10
         */
        getType(): string;
    }

    /**
     * describe the unified text data
     * @since 10
     */
    class Text extends UnifiedRecord {
        /**
         * indicates the details of unified text
         * @since 10
         */
        details?: { [key: string]: string };
    }

    /**
     * describe the unified plain text data
     * @since 10
     */
    class PlainText extends Text {
        /**
         * indicates the content of text
         * @since 10
         */
        textContent: string;
        /**
         * indicates the abstract of text
         * @since 10
         */
        abstract?: string;
    }

    /**
     * describe the unified link data
     * @since 10
     */
    class HyperLink extends Text {
        /**
         * indicates the url of a link
         * @since 10
         */
        url: string;
        /**
         * indicates the description of a link
         * @since 10
         */
        description?: string;
    }

    /**
     * describe the unified html data
     * @since 10
     */
    class HTML extends Text {
        /**
         * indicates the content of html, with html tags
         * @since 10
         */
        htmlContent: string;
        /**
         * indicates the plain content of html
         * @since 10
         */
        plainContent?: string;
    }

    /**
     * describe the unified file data
     * @since 10
     */
    class File extends UnifiedRecord {
        /**
         * indicates the details of unified File
         * @since 10
         */
        details?: { [key: string]: string };
        /**
         * indicates the uri of file
         * @since 10
         */
        uri: string;
    }

    /**
     * describe the unified image data
     * @since 10
     */
    class Image extends File {
        /**
         * indicates the uri of image
         * @since 10
         */
        imageUri: string;
    }

    /**
     * describe the unified video data
     * @since 10
     */
    class Video extends File {
        /**
         * indicates the uri of video
         * @since 10
         */
        videoUri: string;
    }

    /**
     * describe the unified folder data
     * @since 10
     */
    class Folder extends File {
        /**
         * indicates the uri of folder
         * @since 10
         */
        uri: string;
    }

    /**
     * describe system defined type data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     * @since 10
     */
    class SystemDefinedRecord extends UnifiedRecord {
        /**
         * indicates the details of system defined data
         * @since 10
         */
        details?: { [key: string]: number | string | Uint8Array };
    }

    /**
     * describe system defined form data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     * @since 10
     */
    class SystemDefinedForm extends SystemDefinedRecord {
        /**
         * indicates the id of form
         * @since 10
         */
        formId: number;
        /**
         * indicates the name of form
         * @since 10
         */
        formName: string;
        /**
         * indicates the bundle name of form
         * @since 10
         */
        bundleName: string;
        /**
         * indicates the ability name of form
         * @since 10
         */
        abilityName: string;
        /**
         * indicates the module of form
         * @since 10
         */
        module: string;
    }

    /**
     * describe system defined app item data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     * @since 10
     */
    class SystemDefinedAppItem extends SystemDefinedRecord {
        /**
         * indicates the app id
         * @since 10
         */
        appId: string;
        /**
         * indicates the app name
         * @since 10
         */
        appName: string;
        /**
         * indicates the id of app icon
         * @since 10
         */
        appIconId: string;
        /**
         * indicates the id of app label
         * @since 10
         */
        appLabelId: string;
        /**
         * indicates the bundle name of app
         * @since 10
         */
        bundleName: string;
        /**
         * indicates the ability name of app
         * @since 10
         */
        abilityName: string;
    }

    /**
     * describe system defined pixel map data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     * @since 10
     */
    class SystemDefinedPixelMap extends SystemDefinedRecord {
        /**
         * indicates the raw data of pixel map
         * @since 10
         */
        rawData: Uint8Array;
    }

    /**
     * describe application defined data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     * @since 10
     */
    class ApplicationDefinedRecord extends UnifiedRecord {
        /**
         * indicates the type of data, should always be started with 'ApplicationDefined.', will
         * return error otherwise
         * @since 10
         */
        applicationDefinedType: string;
        /**
         * indicates the raw data of application defined data
         * @since 10
         */
        rawData: Uint8Array;
    }
}

export default UDMF;