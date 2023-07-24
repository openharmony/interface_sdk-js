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
 * uniformTypeDescriptor - Uniform type descriptor
 *
 * @namespace uniformTypeDescriptor
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 */
declare namespace uniformTypeDescriptor {
  /**
   * the data type supported by uniform type descriptor
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  enum UniformDataType {
    /**
     * indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    TEXT = 'general.text',
    /**
     * indicate the data type is plain text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    PLAIN_TEXT = 'general.plain-text',
    /**
     * indicate the data type is hyperlink
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HYPERLINK = 'general.hyperlink',
    /**
     * indicate the data type is html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HTML = 'general.html',
    /**
     * indicate the data type is File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FILE = 'general.file',
    /**
     * indicate the data type is image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    IMAGE = 'general.image',
    /**
     * indicate the data type is video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    VIDEO = 'general.video',
    /**
     * indicate the data type is audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    AUDIO = 'general.audio',
    /**
     * indicate the data type is Folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FOLDER = 'general.folder',
    /**
     * indicate the data type is OpenHarmony system defined form(the data is provided and bound to OpenHarmony system)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    OPENHARMONY_FORM = 'openharmony.form',
    /**
     * indicate the data type is OpenHarmony system defined app item(the data is provided and bound to OpenHarmony system)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    OPENHARMONY_APP_ITEM = 'openharmony.appitem',
    /**
     * indicate the data type is OpenHarmony system defined pixel map(the data is provided and bound to OpenHarmony system)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    OPENHARMONY_PIXEL_MAP = 'openharmony.pixelmap'
  }
}

export default uniformTypeDescriptor;
