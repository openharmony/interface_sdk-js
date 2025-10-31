/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkData
 */

import image from './@ohos.multimedia.image';

/**
 * Provide uniform data struct definition.
 *
 * @namespace uniformDataStruct
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 12 dynamic
 */
declare namespace uniformDataStruct {
  /**
   * Describe the plain text uniform data struct.
   *
   * @interface PlainText
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   */
  interface PlainText {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @type { 'general.plain-text' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    readonly uniformDataType: 'general.plain-text';
    /**
     * Indicates the content of the PlainText.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    textContent: string;

    /**
     * Indicates the abstract of the PlainText.
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    abstract?: string;
    /**
     * Object of the dictionary type used to describe the attributes of the text content. Both the key and value of the
     * object are of the string type. For example, the following is a details object used to describe the properties of
     * a file:
     * {
     * "title":"Title of the file",
     * "content":"Content of the file"
     * }
     * By default, it is an empty dictionary object.
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
     details?: Record<string, string>;
  }

  /**
   * Describe the hyperlink uniform data struct.
   *
   * @interface Hyperlink
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   */
  interface Hyperlink {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @type { 'general.hyperlink' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    readonly uniformDataType: 'general.hyperlink';
    /**
     * Indicates the url of of the Hyperlink.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    url: string;
    /**
     * Indicates the description of the Hyperlink.
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    description?: string;
    /**
     * Object of the dictionary type used to describe the attributes of the hyperlink. Both the key and value of the
     * object are of the string type. For example, the following is a details object used to describe the properties of
     * a file:
     * {
     * "title":"Title of the hyperlink",
     * "content":"Content"
     * }
     * By default, it is an empty dictionary object.
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
     details?: Record<string, string>;
  }

  /**
   * Describe the html uniform data struct.
   *
   * @interface HTML
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   */
  interface HTML {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @type { 'general.html' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    readonly uniformDataType: 'general.html';

    /**
     * Indicates the content of html, with html tags.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    htmlContent: string;
    /**
     * Indicates the plain content of html.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    plainContent?: string;
    /**
     * Object of the dictionary type used to describe the attributes of the HTML content. Both the key and value of the
     * object are of the string type. For example, the following is a details object used to describe the properties of
     * a file:
     * {
     * "title":"Title of the HTML content",
     * "content":"Content"
     * }
     * By default, it is an empty dictionary object.
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
     details?: Record<string, string>;
  }

  /**
   * Describe system defined app item uniform data struct(this kind of struct is provided and bound to OpenHarmony).
   *
   * @interface OpenHarmonyAppItem
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   */
  interface OpenHarmonyAppItem {
    /**
     * Uniform data type, which has a fixed value of openharmony.app-item. For details, see UniformDataType.
     * 
     * @type { 'openharmony.app-item' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    readonly uniformDataType: 'openharmony.app-item';
    /**
     * Indicates the app id.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    appId: string;
    /**
     * Indicates the app name.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    appName: string;
    /**
     * Indicates the id of app icon.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    appIconId: string;
    /**
     * Indicates the id of app label.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    appLabelId: string;
    /**
     * Indicates the bundle name of app.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    bundleName: string;
    /**
     * Indicates the ability name of app.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    abilityName: string;
    /**
     * Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a
     * number, a string, or a Uint8Array. By default, it is an empty dictionary object.
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Uniform data type, which has a fixed value of general.content-form.
   *
   * @interface ContentForm
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 14 dynamic
   */
  interface ContentForm {
    /**
     * Indicates the uniform data type of this data struct.
     *
     * @type { 'general.content-form' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    readonly uniformDataType: 'general.content-form';

    /**
     * Indicates the thumb data of content form.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    thumbData?: Uint8Array;

    /**
     * Indicates the description of content form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    description?: string;

    /**
     * Indicates the title of content form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    title: string;

    /**
     * Indicates the app icon of content form.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    appIcon?: Uint8Array;

    /**
     * Indicates the app name of content form.
     *
     * @type { appName }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    appName?: string;

    /**
     * Indicates the link url of content form.
     *
     * @type { linkUri }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     */
    linkUri?: string;
  }

  /**
   * Describe form uniform data struct.
   *
   * @interface Form
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 15 dynamic
   */
  interface Form {
    /**
     * Uniform data type, which has a fixed value of openharmony.form. For details, see UniformDataType.
     *
     * @type { 'openharmony.form' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    readonly uniformDataType: 'openharmony.form';

    /**
     * Indicates the form id of form.
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    formId: int;

    /**
     * Indicates the form name of form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    formName: string;

    /**
     * Indicates the bundle name of form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    bundleName: string;

    /**
     * Indicates the ability name of form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    abilityName: string;

    /**
     * Indicates the module of form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    module: string;

    /**
     * Indicates the details of form.
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Describe the file uri uniform data struct.
   *
   * @interface FileUri
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 15 dynamic
   */
  interface FileUri {
    /**
     * Uniform data type, which has a fixed value of general.file-uri. For details, see UniformDataType.
     *
     * @type { 'general.file-uri' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    readonly uniformDataType: 'general.file-uri';

    /**
     * Indicates the oriUri of fileUri.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    oriUri: string;

    /**
     * Indicates the file type of fileUri.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    fileType: string;

    /**
     * Indicates the details of fileUri.
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Describe the pixelMap uniform data struct.
   *
   * @interface PixelMap
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 15 dynamic
   */
  interface PixelMap {
    /**
     * 	Uniform data type, which has a fixed value of openharmony.pixel-map. For details, see UniformDataType.
     *
     * @type { 'openharmony.pixel-map' }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    readonly uniformDataType: 'openharmony.pixel-map';

    /**
     * Indicates the pixelMap value of pixelMap.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    pixelMap: image.PixelMap;

    /**
     * Indicates the details of pixelMap.
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }
}

export default uniformDataStruct;