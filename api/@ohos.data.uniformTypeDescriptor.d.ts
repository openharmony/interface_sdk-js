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

    /**
     * Indicate the data type is XML(Extensible Markup Language)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    XML = 'general.xml',

    /**
     * Indicate the data type is source code
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    SOURCE_CODE = 'general.source-code',

    /**
     * Indicate the data type is script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    SCRIPT = 'general.script',

    /**
     * Indicate the data type is shell script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    SHELL_SCRIPT = 'general.shell-script',

    /**
     * Indicate the data type is C-shell script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    CSH_SCRIPT = 'general.csh-script',

    /**
     * Indicate the data type is Perl script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PERL_SCRIPT = 'general.perl-script',

    /**
     * Indicate the data type is PHP script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PHP_SCRIPT = 'general.php-script',

    /**
     * Indicate the data type is Python script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PYTHON_SCRIPT = 'general.python-script',

    /**
     * Indicate the data type is Ruby script
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    RUBY_SCRIPT = 'general.ruby-script',

    /**
     * Indicate the data type is TypeScript
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    TYPE_SCRIPT = 'general.type-script',

    /**
     * Indicate the data type is JavaScript
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    JAVA_SCRIPT = 'general.java-script',

    /**
     * Indicate the data type is C header
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    C_HEADER = 'general.c-header',

    /**
     * Indicate the data type is C source code
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    C_SOURCE = 'general.c-source',

    /**
     * Indicate the data type is C++ header
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    C_PLUS_PLUS_HEADER = 'general.c-plus-plus-header',

    /**
     * Indicate the data type is C++ source code
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    C_PLUS_PLUS_SOURCE = 'general.c-plus-plus-source',

    /**
     * Indicate the data type is Java source code
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    JAVA_SOURCE = 'general.java-source',

    /**
     * Indicate the data type is ebook
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    EBOOK = 'general.ebook',

    /**
     * Indicate the data type is the EPUB ebook file format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    EPUB = 'general.epub',

    /**
     * Indicate the data type is the AZW ebook file format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    AZW = 'com.amazon.azw',

    /**
     * Indicate the data type is the AZW3 ebook file format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    AZW3 = 'com.amazon.azw3',

    /**
     * Indicate the data type is the KFX ebook file format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    KFX = 'com.amazon.kfx',

    /**
     * Indicate the data type is the MOBI ebook file format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    MOBI = 'com.amazon.mobi',

    /**
     * Indicate the data type is media
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    MEDIA = 'general.media',

    /**
     * Indicate the data type is image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    IMAGE = 'general.image',

    /**
     * Indicate the data type is the JPEG image format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    JPEG = 'general.jpeg',

    /**
     * Indicate the data type is the PNG image format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PNG = 'general.png',

    /**
     * Indicate the data type is the raw image format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    RAW_IMAGE = 'general.raw-image',

    /**
     * Indicate the data type is the TIFF image format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    TIFF = 'general.tiff',

    /**
     * Indicate the data type is the Windows bitmap image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    BMP = 'com.microsoft.bmp',

    /**
     * Indicate the data type is the Windows icon data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    ICO = 'com.microsoft.ico',

    /**
     * Indicate the data type is the Adobe Photoshop document
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PHOTOSHOP_IMAGE = 'com.adobe.photoshop-image',

    /**
     * Indicate the data type is the Adobe Illustrator document
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    AI_IMAGE = 'com.adobe.illustrator.ai-image',

    /**
     * Indicate the data type is the Microsoft Word data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WORD_DOC = 'com.microsoft.word.doc',

    /**
     * Indicate the data type is the Microsoft Excel data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    EXCEL = 'com.microsoft.excel.xls',

    /**
     * Indicate the data type is the Microsoft PowerPoint presentation
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PPT = 'com.microsoft.powerpoint.ppt',

    /**
     * Indicate the data type is the PDF data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PDF = 'com.adobe.pdf',

    /**
     * Indicate the data type is the PostScript data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    POSTSCRIPT = 'com.adobe.postscript',

    /**
     * Indicate the data type is the Encapsulated PostScript
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    ENCAPSULATED_POSTSCRIPT = 'com.adobe.encapsulated-postscript',

    /**
     * Indicate the data type is video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    VIDEO = 'general.video',

    /**
     * Indicate the data type is the AVI video format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    AVI = 'general.avi',

    /**
     * Indicate the data type is the MPEG video format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    MPEG = 'general.mpeg',

    /**
     * Indicate the data type is the MPEG4 video format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    MPEG4 = 'general.mpeg-4',

    /**
     * Indicate the data type is the 3GPP video format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    VIDEO_3GPP = 'general.3gpp',

    /**
     * Indicate the data type is the 3GPP2 video format
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    VIDEO_3GPP2 = 'general.3gpp2',

    /**
     * Indicate the data type is the Windows
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WM = 'com.microsoft.windows-media-wm',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WMV = 'com.microsoft.windows-media-wmv',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WMP = 'com.microsoft.windows-media-wmp',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WMA = 'com.microsoft.windows-media-wma',

    /**
     * Indicate the data type is audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    AUDIO = 'general.audio',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    AAC = 'general.aac',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    AIFF = 'general.aiff',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    ALAC = 'general.alac',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    FLAC = 'general.flac',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    MP3 = 'general.mp3',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    OGG = 'general.ogg',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    PCM = 'general.pcm',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WAV = 'general.wav',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WAVEFORM_AUDIO = 'com.microsoft.waveform-audio',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WMX = 'com.microsoft.windows-media-wmx',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WVX = 'com.microsoft.windows-media-wvx',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    WINDOWS_MEDIA_WAX = 'com.microsoft.windows-media-wax',

    /**
     * Indicate the data type is File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FILE = 'general.file',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    DIRECTOR = 'general.director',

    /**
     * Indicate the data type is Folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FOLDER = 'general.folder',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    SYMLINK = 'general.symlink',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    ARCHIVE = 'general.archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    BZ2_ARCHIVE = 'general.bz2-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    DISK_IMGAE = 'general.disk-image',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    TAR_ARCHIVE = 'general.tar-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    ZIP_ARCHIVE = 'general.zip-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    JAVA_ARCHIVE = 'com.sun.java-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    GNU_TAR_ARCHIVE = 'org.gnu.gnu-tar-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    GNU_ZIP_ARCHIVE = 'org.gnu.gnu-zip-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    GNU_ZIP_TAR_ARCHIVE = 'org.gnu.gnu-zip-tar-archive',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    CALENDAR = 'general.calendar',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    CONTACT = 'general.contact',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    DATABASE = 'general.database',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    MESSAGE = 'general.message',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    VCARD = 'general.vcard',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    NAVIGATION = 'general.navigation',

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
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

    /**
     * Indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
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
     * @type { Set<string> }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    readonly belongingToTypes: Set<string>;

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
     * @param { string } type - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is compatible with the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    belongsTo(type: string): boolean;

    /**
     * Check whether the descriptor is the lower hierarchy of the given descriptor.
     *
     * @param { string } type - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is the lower hierarchy of the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    isLowerLevelTypeOf(type: string): boolean;

    /**
     * Check whether the descriptor is the upper hierarchy of the given descriptor.
     *
     * @param { string } type - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is the upper hierarchy of the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    isHigherLevelTypeOf(type: string): boolean;

    /**
     * Check whether the descriptor is equal to the given descriptor.
     *
     * @param { TypeDescriptor } descriptor - The uniform type descriptor to be compared.
     * @returns { boolean } Return true if the descriptor is equal to the given descriptor, else false.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 11
     */
    equals(typeDescriptor: TypeDescriptor): boolean;
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
  function typeDescriptorByFilenameExtension(filenameExtension: string, belongsTo?: string): TypeDescriptor | null;

  /**
   * Query and return the uniform type descriptor by the given typeId.
   *
   * @param { string } typeId - The uniform type descriptor to be compared.
   * @returns { TypeDescriptor | null } Return true if the descriptor is equal to the given descriptor, else false.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 11
   */
  function typeDescriptorByMIMEType(mimeType: string, belongsTo?: string): TypeDescriptor | null;

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
