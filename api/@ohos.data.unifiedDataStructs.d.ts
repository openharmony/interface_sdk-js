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
 * Provide unified data structure definition.
 *
 * @namespace unifiedDataStructs
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 12
 */
declare namespace unifiedDataStructs {
  /**
   * Describe the unified plain text struct
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  class PlainText {
    /**
     * Indicates the data type of unified data is general.plain-text.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'general.plain-text';
    /**
     * Indicates the content of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    textContent: string;

    /**
     * Indicates the abstract of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    abstract?: string;
  }

  /**
   * Describe the unified link struct
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  class Hyperlink {
    /**
     * Indicates the data type of unified data is general.hyperlink.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'general.hyperlink';
    /**
     * Indicates the url of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    url: string;

    /**
     * Indicates the description of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    description?: string;
  }

  /**
   * Describe the unified html struct
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  class HTML {
    /**
     * Indicates the data type of unified data is general.html.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'general.html';

    /**
     * Indicates the content of html, with html tags
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    htmlContent: string;
    /**
     * Indicates the plain content of html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    plainContent?: string;
  }

  /**
   * Describe system defined app item struct(this kind of struct is provided and bound to OpenHarmony).
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 12
   */
  class OpenHarmonyAppItem {
    /**
     * Indicates the data type of unified data is openharmony.app-item.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    uniformDataType: 'openharmony.app-item';
    /**
     * Indicates the app id
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appId: string;
    /**
     * Indicates the app name
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appName: string;
    /**
     * Indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appIconId: string;
    /**
     * Indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    appLabelId: string;
    /**
     * Indicates the bundle name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    bundleName: string;
    /**
     * Indicates the ability name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    abilityName: string;
  }
}

export default unifiedDataStructs;