/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
 * As a part of the Unified Data Management Framework (UDMF), the **uniformDataStruct** module provides data structs 
 * corresponding to certain 
 * [UniformDataTypes]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType} for service 
 * scenarios of many-to-many data sharing across applications. It helps simplify data interaction and reduce the data 
 * type adaptation workload.
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uniformDataStruct {
  /**
   * Represents data of the plain text type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface PlainText {
    /**
     * Uniform data type, which has a fixed value of **general.plain-text**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.plain-text';
    /**
     * Plaintext content.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    textContent: string;

    /**
     * Text abstract. It is an empty string by default.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     */
    abstract?: string;

    /**
     * Indicates the abstract of the PlainText.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    textAbstract?: string;
    
    /**
     * Object of the dictionary type used to describe the attributes of the text content. Both the key and value of the 
     * object are of the string type. For example, the following is a **details** object used to describe the properties
     * of a file:
     * 
     * {
     * 
     * "title":"Title of the file",
     * 
     * "content":"Content of the file"
     * 
     * }
     * 
     * By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;
  }

  /**
   * Represents data of the hyperlink type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface Hyperlink {
    /**
     * Uniform data type, which has a fixed value of **general.hyperlink**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.hyperlink';
    /**
     * URL.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * Description of the linked content. This parameter is optional. By default, it is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    description?: string;
    /**
     * Object of the dictionary type used to describe the attributes of the hyperlink. Both the key and value of the 
     * object are of the string type. For example, the following is a **details** object used to describe the properties
     * of a file:
     * 
     * {
     * 
     * "title":"Title of the file",
     * 
     * "content":"Content of the file"
     * 
     * }
     * 
     * By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;
  }

  /**
   * Represents data of the HTML type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface HTML {
    /**
     * Uniform data type, which has a fixed value of **general.html**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.html';

    /**
     * Content in HTML format.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    htmlContent: string;
    /**
     * Plaintext without HTML tags. This parameter is optional. By default, it is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    plainContent?: string;
    /**
     * Object of the dictionary type used to describe the attributes of the HTML content. Both the key and value of the 
     * object are of the string type. For example, the following is a **details** object used to describe the properties
     * of a file:
     * 
     * {
     * 
     * "title":"Title of the file",
     * 
     * "content":"Content of the file"
     * 
     * }
     * 
     * By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, string>;

    /**
     * Defines URI authorization policies for drag intention.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<int>;
  }

  /**
   * Represents data of the home screen icon type defined by the system.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface OpenHarmonyAppItem {
    /**
     * Uniform data type, which has a fixed value of **openharmony.app-item**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.app-item';
    /**
     * ID of the application, for which the icon is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    appId: string;
    /**
     * Name of the application, for which the icon is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    appName: string;
    /**
     * Image ID of the icon.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    appIconId: string;
    /**
     * Label ID corresponding to the icon name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    appLabelId: string;
    /**
     * Bundle name corresponding to the icon.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * Application ability name corresponding to the icon.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a 
     * number, a string, or a Uint8Array. By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Represents data of the content widget type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 14 dynamic
   * @since 23 static
   */
  interface ContentForm {
    /**
     * Uniform data type, which has a fixed value of **general.content-form**.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.content-form';

    /**
     * Image data in the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    thumbData?: Uint8Array;

    /**
     * Description of the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Title of the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * Application icon data in the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    appIcon?: Uint8Array;

    /**
     * Application name in the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    appName?: string;

    /**
     * Hyperlink in the content widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14 dynamic
     * @since 23 static
     */
    linkUri?: string;
  }

  /**
   * Represents data of the widget type defined by the system.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface Form {
    /**
     * Uniform data type, which has a fixed value of **openharmony.form**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.form';

    /**
     * Widget ID.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    formId: int;

    /**
     * Widget name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    formName: string;

    /**
     * Bundle to which the widget belongs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Ability name corresponding to the widget.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Module to which the widget belongs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    module: string;

    /**
     * Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a 
     * number, a string, or a Uint8Array. By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }

  /**
   * Represents data of the file URI type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface FileUri {
    /**
     * Uniform data type, which has a fixed value of **general.file-uri**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'general.file-uri';

    /**
     * File path.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    oriUri: string;

    /**
     * File type, which must be UTD. For details, see [Prebuilt UTDs]. The
     * maximum length of the value is 1024 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    fileType: string;

    /**
     * Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a 
     * number, a string, or a Uint8Array. By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * Defines URI authorization policies for drag intention.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<int>;
  }

  /**
   * Represents data of the pixel map type defined by the system.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface PixelMap {
    /**
     * Uniform data type, which has a fixed value of **openharmony.pixel-map**. For details, see 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    readonly uniformDataType: 'openharmony.pixel-map';

    /**
     * Binary data of the pixel map.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;

    /**
     * Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a 
     * number, a string, or a Uint8Array. By default, it is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15 dynamic
     * @since 23 static
     */
    details?: Record<string, int | long | double | string | Uint8Array>;
  }
}

export default uniformDataStruct;