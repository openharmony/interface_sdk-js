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

/**
 * Provide unified data struct definition.
 *
 * @namespace unifiedDataStruct
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 12
 */
declare namespace unifiedDataStruct {
  /**
   * Describe the plain text unified data struct.
   *
   * @interface PlainText
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  interface PlainText {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'general.plain-text';
    /**
     * Indicates the content of the PlainText.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    textContent: string;

    /**
     * Indicates the abstract of the PlainText.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    abstract?: string;
    /**
     * Indicates the details of the PlainText.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
     details?: Record<string, string>;
  }

  /**
   * Describe the hyperlink unified data struct.
   *
   * @interface Hyperlink
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  interface Hyperlink {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'general.hyperlink';
    /**
     * Indicates the url of of the Hyperlink.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    url: string;
    /**
     * Indicates the description of the Hyperlink.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    description?: string;
    /**
     * Indicates the details of the Hyperlink.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
     details?: Record<string, string>;
  }

  /**
   * Describe the html unified data struct.
   *
   * @interface HTML
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  interface HTML {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'general.html';

    /**
     * Indicates the content of html, with html tags.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    htmlContent: string;
    /**
     * Indicates the plain content of html.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    plainContent?: string;
    /**
     * Indicates the details of html.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
     details?: Record<string, string>;
  }

  /**
   * Describe system defined app item unified data struct(this kind of struct is provided and bound to OpenHarmony).
   *
   * @interface OpenHarmonyAppItem
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  interface OpenHarmonyAppItem {
    /**
     * Indicates the uniform data type of this data struct.
     * 
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'openharmony.app-item';
    /**
     * Indicates the app id.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appId: string;
    /**
     * Indicates the app name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appName: string;
    /**
     * Indicates the id of app icon.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appIconId: string;
    /**
     * Indicates the id of app label.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appLabelId: string;
    /**
     * Indicates the bundle name of app.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    bundleName: string;
    /**
     * Indicates the ability name of app.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    abilityName: string;
    /**
     * Indicates the details of app.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
     details?: Record<string, number | string | Uint8Array>;
  }
}

export default unifiedDataStruct;