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
 * uniformTypeDescriber - Uniform type describer
 *
 * @namespace uniformTypeDescriber
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 */
declare namespace uniformTypeDescriber {
  /**
   * the data type supported by uniform type describer
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
    TEXT = 'General.Text',
    /**
     * indicate the data type is plain text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    PLAIN_TEXT = 'General.PlainText',
    /**
     * indicate the data type is hyperlink
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HYPERLINK = 'General.Hyperlink',
    /**
     * indicate the data type is html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HTML = 'General.HTML',
    /**
     * indicate the data type is File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FILE = 'General.File',
    /**
     * indicate the data type is image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    IMAGE = 'General.Image',
    /**
     * indicate the data type is video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    VIDEO = 'General.Video',
    /**
     * indicate the data type is audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    AUDIO = 'General.Audio',
    /**
     * indicate the data type is Folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FOLDER = 'General.Folder',
    /**
     * indicate the data type is system defined data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_TYPE = 'SystemDefinedType',
    /**
     * indicate the data type is system defined form(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_FORM = 'SystemDefinedType.Form',
    /**
     * indicate the data type is system defined app item(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_APP_ITEM = 'SystemDefinedType.AppItem',
    /**
     * indicate the data type is system defined pixel map(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_PIXEL_MAP = 'SystemDefinedType.PixelMap',
    /**
     * indicate the data type is application defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    APPLICATION_DEFINED_TYPE = 'ApplicationDefinedType'
  }
}

export default uniformTypeDescriber;
