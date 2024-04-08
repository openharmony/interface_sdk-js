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

import Want from "./@ohos.app.ability.Want";

/**
 * Provide unified data structure definition.
 *
 * @namespace unifiedDataStructs
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @atomicservice
 * @since 12
 */
declare namespace unifiedDataStructs {
  /**
   * Describe the unified plain text struct
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class PlainText {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the content of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    textContent: string;

    /**
     * Indicates the abstract of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    abstract?: string;
  }

  /**
   * Describe the unified link struct
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class Hyperlink {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the url of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    url: string;

    /**
     * Indicates the description of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    description?: string;
  }

  /**
   * Describe the unified html struct
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class HTML {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;

    /**
     * Indicates the content of html, with html tags
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    htmlContent: string;
    /**
     * Indicates the plain content of html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    plainContent?: string;
  }

  /**
   * Describe the unified folder struct
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class Folder {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the uri of folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    folderUri: string;
  }

  /**
   * Describe system defined form struct(this kind of struct is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class OpenHarmonyForm {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the id of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    formId: number;
    /**
     * Indicates the name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    formName: string;
    /**
     * Indicates the bundle name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    bundleName: string;
    /**
     * Indicates the ability name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    abilityName: string;

    /**
     * Indicates the module of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    module: string;
  }

  /**
   * Describe system defined app item struct(this kind of struct is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class OpenHarmonyAppItem {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the app id
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    appId: string;
    /**
     * Indicates the app name
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    appName: string;
    /**
     * Indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    appIconId: string;
    /**
     * Indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    appLabelId: string;
    /**
     * Indicates the bundle name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    bundleName: string;
    /**
     * Indicates the ability name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    abilityName: string;
  }

  /**
   * Describe want struct.
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  class OpenHarmonyWant {
    /**
     * Indicates the data type of unified data, type is openharmony.want.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the content of want
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    wantContent: Want;
  }

  // 以下是否需要？

  enum UtdFormat {
    /**
     * FILE indicates that data format is file.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    FILE,
    /**
     * MEMORY_DATA indicates that data format is memory data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    MEMORY_DATA
  }


  class CustomDataStruct {
    /**
     * Indicates the data type of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdType: string;
    /**
     * Indicates the data format of unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
     utdFormat: UtdFormat;

    /**
     * Indicates the data content
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    rawData?:Record<string, number | string | Uint8Array>;;

    /**
     * Indicates the local data path
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    file?:File;
  }


    /**
   * Describe the unified file struct
   *
   * @extends UnifiedDataStruct
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
     class File {
        /**
         * Indicates the data type of unified data.
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @atomicservice
         * @since 12
         */
         utdType: string;
        /**
         * Indicates the details of unified File
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @atomicservice
         * @since 12
         */
        details?: Record<string, string>;
        /**
         * Indicates the uri of file
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @atomicservice
         * @since 12
         */
        uri: string;
    
        /**
         * Indicates the file size
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @atomicservice
         * @since 12
         */
         size: number;        
      }
}