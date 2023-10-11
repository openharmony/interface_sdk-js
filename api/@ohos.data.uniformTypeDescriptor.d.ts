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
 * Provide methods for uniform type descriptor definition and query.
 *
 * @namespace uniformTypeDescriptor
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 10
 */
declare namespace uniformTypeDescriptor {
  /**
   * The data type ids supported by uniform type descriptor
   *
   * @enum { string }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  enum UniformDataType {

    ENTITY = 'general.entity',

    OBJECT = 'general.object',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    TEXT = 'general.text',

    /**
     * Indicate the data type is plain text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    PLAIN_TEXT = 'general.plain-text',

    /**
     * Indicate the data type is html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HTML = 'general.html',

    /**
     * Indicate the data type is hyperlink
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HYPERLINK = 'general.hyperlink',

    XML = 'general.xml',

    SOURCE_CODE = 'general.source-code',

    SCRIPT = 'general.script',

    SHELL_SCRIPT = 'general.shell-script',

    CSH_SCRIPT = 'general.csh-script',

    PERL_SCRIPT = 'general.perl-script',

    PHP_SCRIPT = 'general.php-script',

    PYTHON_SCRIPT = 'general.python-script',

    RUBY_SCRIPT = 'general.ruby-script',

    MEDIA = 'general.media',

    TYPE_SCRIPT = 'general.type-script',

    JAVA_SCRIPT = 'general.java-script',

    C_HEADER = 'general.c-header',

    C_SOURCE = 'general.c-source',

    C_PLUS_PLUS_HEADER = 'general.c-plus-plus-header',

    C_PLUS_PLUS_SOURCE = 'general.c-plus-plus-source',

    JAVA_SOURCE = 'general.java-source',

    EBOOK = 'general.ebook',

    EPUB = 'general.epub',

    AZW = 'com.amazon.azw',

    AZW3 = 'com.amazon.azw3',

    KFX = 'com.amazon.kfx',

    MOBI = 'com.amazon.mobi',

    /**
     * Indicate the data type is image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    IMAGE = 'general.image',

    JPEG = 'general.jpeg',

    PNG = 'general.png',

    RAW_IMAGE = 'general.raw-image',

    TIFF = 'general.tiff',

    BMP = 'com.microsoft.bmp',

    ICO = 'com.microsoft.ico',

    PHOTOSHOP_IMAGE = 'com.adobe.photoshop-image',

    AI_IMAGE = 'com.adobe.illustrator.ai-image',

    WORD_DOC = 'com.microsoft.word.doc',

    EXCEL = 'com.microsoft.excel.xls',

    PPT = 'com.microsoft.powerpoint.ppt',

    PDF = 'com.adobe.pdf',

    POSTSCRIPT = 'com.adobe.postscript',

    ENCAPSULATED_POSTSCRIPT = 'com.adobe.encapsulated-postscript',

    /**
     * Indicate the data type is video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    VIDEO = 'general.video',

    AVI = 'general.avi',

    MPEG = 'general.mpeg',

    MPEG4 = 'general.mpeg-4',

    WINDOWS_MEDIA_WM = 'com.microsoft.windows-media-wm',

    WINDOWS_MEDIA_WMV = 'com.microsoft.windows-media-wmv',

    WINDOWS_MEDIA_WMP = 'com.microsoft.windows-media-wmp',

    WINDOWS_MEDIA_WMA = 'com.microsoft.windows-media-wma',

    /**
     * Indicate the data type is audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    AUDIO = 'general.audio',

    AAC = 'general.aac',

    AIFF = 'general.aiff',

    ALAC = 'general.alac',

    FLAC = 'general.flac',

    MP3 = 'general.mp3',

    OGG = 'general.ogg',

    PCM = 'general.pcm',

    WAV = 'general.wav',

    WAVEFORM_AUDIO = 'com.microsoft.waveform-audio',

    WINDOWS_MEDIA_WMX = 'com.microsoft.windows-media-wmx',

    WINDOWS_MEDIA_WVX = 'com.microsoft.windows-media-wvx',

    WINDOWS_MEDIA_WAX = 'com.microsoft.windows-media-wax',

    /**
     * Indicate the data type is File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FILE = 'general.file',

    DIRECTOR = 'general.director',

    /**
     * Indicate the data type is Folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FOLDER = 'general.folder',

    SYMLINK = 'general.symlink',

    ARCHIVE = 'general.archive',

    BZ2_ARCHIVE = 'general.bz2-archive',

    DISK_IMGAE = 'general.disk-image',

    TAR_ARCHIVE = 'general.tar-archive',

    ZIP_ARCHIVE = 'general.zip-archive',

    JAVA_ARCHIVE = 'com.sun.java-archive',

    GNU_TAR_ARCHIVE = 'org.gnu.gnu-tar-archive',

    GNU_ZIP_ARCHIVE = 'org.gnu.gnu-zip-archive',

    GNU_ZIP_TAR_ARCHIVE = 'org.gnu.gnu-zip-tar-archive',

    CALENDAR = 'general.calendar',

    CONTACT = 'general.contact',

    DATABASE = 'general.database',

    MESSAGE = 'general.message',

    VCARD = 'general.vcard',

    NAVIGATION = 'general.navigation',

    LOCATION = 'general.location',

    /**
     * Indicate the data type is OpenHarmony system defined form(the data is provided and bound to OpenHarmony system)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    OPENHARMONY_FORM = 'openharmony.form',

    /**
     * Indicate the data type is OpenHarmony system defined app item(the data is provided and bound to OpenHarmony system)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    OPENHARMONY_APP_ITEM = 'openharmony.app-item',

    /**
     * Indicate the data type is OpenHarmony system defined pixel map(the data is provided and bound to OpenHarmony system)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    OPENHARMONY_PIXEL_MAP = 'openharmony.pixel-map',

    OPENHARMONY_ATOMIC_SERVICE = 'openharmony.atomic-service'
  }

  /**
   * The class describe the uniform type descriptor, which consists of attributes and methods describing the uniform type
   * <br>descriptor itself and its relationships to other uniform type descriptors and other type models such as filename
   * <br>extension and MIME type.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 11
   */
  class TypeDescriptor {

    /**
     * The typeId of the uniform type descriptor, which corespond to the enum string in the UniformDataType.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly typeId: string;

    /**
     * The supertypes of the uniform type descriptor.
     *
     * @type { Set<TypeDescriptor> }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly supertypes: Set<TypeDescriptor>;

    /**
     * The filename extensions which the type descriptor stand for.
     *
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly filenameExtensions: Array<string>;

    /**
     * The MIME types which the type descriptor stand for.
     *
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly mimeTypes: Array<string>;

    /**
     * The description of the uniform type descriptor.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly description: string;

    /**
     * The reference URL of the uniform type descriptor, which describe the detail information of the type.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly referenceURL: string;

    /**
     * The icon file address of the uniform datatype.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly iconFile: string;

    /**
     * Check whether the descriptor is compatible whith the given descriptor.
     *
     * @param { TypeDescriptor } descriptor - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is compatible with the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    isCompatibleWith(descriptor: TypeDescriptor): boolean;

    /**
     * Check whether the descriptor is the lower hierarchy of the given descriptor.
     *
     * @param { TypeDescriptor } descriptor - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is the lower hierarchy of the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    isSubtypeOf(descriptor: TypeDescriptor): boolean;

    /**
     * Check whether the descriptor is the upper hierarchy of the given descriptor.
     *
     * @param { TypeDescriptor } descriptor - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is the upper hierarchy of the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    isSupertypeOf(descriptor: TypeDescriptor): boolean;

    /**
     * Check whether the descriptor is equal to the given descriptor.
     *
     * @param { TypeDescriptor } descriptor - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is equal to the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    equals(descriptor: TypeDescriptor): boolean;
  }

  /**
   * Query and return the uniform type descriptor by the given typeId.
   *
   * @param { string } typeId - The uniform type descriptor to be compared.
   * @returns { TypeDescriptor | null } Return true if the descriptor is equal to the given descriptor, else false.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 11
   */
  function typeDescriptor(typeId: string): TypeDescriptor | null;

  /**
   * Query and return the uniform type descriptor by the given typeId.
   *
   * @param { string } typeId - The uniform type descriptor to be compared.
   * @returns { TypeDescriptor | null } Return true if the descriptor is equal to the given descriptor, else false.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 11
   */
  function typeDescriptorByFilenameExtension(filenameExtension: string, compatibleWith?: TypeDescriptor): TypeDescriptor | null;

  /**
   * Query and return the uniform type descriptor by the given typeId.
   *
   * @param { string } typeId - The uniform type descriptor to be compared.
   * @returns { TypeDescriptor | null } Return true if the descriptor is equal to the given descriptor, else false.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 11
   */
  function typeDescriptorByMIMEType(mimeType: string, compatibleWith?: TypeDescriptor): TypeDescriptor | null;

  /**
   * Query and return the uniform type descriptor by the given typeId.
   *
   * @param { string } typeId - The uniform type descriptor to be compared.
   * @returns { TypeDescriptor | null } Return true if the descriptor is equal to the given descriptor, else false.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 11
   */
  function declareTypeDescriptor(typeId: string, isOwner: boolean): TypeDescriptor;
}

export default uniformTypeDescriptor;
