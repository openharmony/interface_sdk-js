/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file 标准化数据定义与描述
 * @kit ArkData
 */

/**
 * 本模块对标准化数据类型进行了抽象定义与描述，用于统一表示和管理各类数据类型的层级与归属关系（如JPEG归属于IMAGE、IMAGE归属于MEDIA等），便于跨模块/跨应用的一致化数据交互。详细设计原理参见
 * [UTD预置列表](docroot://database/uniform-data-type-list.md)。
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace uniformTypeDescriptor {
  /**
   * 标准化数据类型之间存在归属关系，例如JPEG图片类型归属于IMAGE类型。更多预置数据类型参考[UTD预置列表](docroot://database/uniform-data-type-list.md)。
   * 
   * 下表以枚举形式，列举了常用的标准化数据类型定义。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum UniformDataType {
    /**
     * 所有表示物理存储类型的基类型，无归属类型。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ENTITY = 'general.entity',

    /**
     * 所有表示逻辑内容类型的基类型，无归属类型。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    OBJECT = 'general.object',

    /**
     * 所有组合内容类型（例如PDF文件类型混合了文本和图片类数据）的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    COMPOSITE_OBJECT = 'general.composite-object',

    /**
     * 所有文本的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    TEXT = 'general.text',

    /**
     * 未指定编码的文本类型，没有标识符，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAIN_TEXT = 'general.plain-text',

    /**
     * HTML文本类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    HTML = 'general.html',

    /**
     * 超链接类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    HYPERLINK = 'general.hyperlink',

    /**
     * XML文本类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    XML = 'general.xml',

    /**
     * XHTML文本类型，归属类型为XML。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    XHTML = 'general.xhtml',

    /**
     * RSS文本类型，归属类型为XML。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    RSS = 'general.rss',

    /**
     * 同步多媒体集成语言类型，归属类型为XML。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SMIL = 'com.real.smil',

    /**
     * 所有源代码的基类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SOURCE_CODE = 'general.source-code',

    /**
     * 所有脚本语言源代码的基类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SCRIPT = 'general.script',

    /**
     * shell脚本类型，归属类型为SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SHELL_SCRIPT = 'general.shell-script',

    /**
     * C-shell脚本类型，归属类型为SHELL_SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    CSH_SCRIPT = 'general.csh-script',

    /**
     * Perl脚本类型，归属类型为SHELL_SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PERL_SCRIPT = 'general.perl-script',

    /**
     * PHP脚本类型，归属类型为SHELL_SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PHP_SCRIPT = 'general.php-script',

    /**
     * Python脚本类型，归属类型为SHELL_SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PYTHON_SCRIPT = 'general.python-script',

    /**
     * Ruby脚本类型，归属类型为SHELL_SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    RUBY_SCRIPT = 'general.ruby-script',

    /**
     * TypeScript源代码类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_SCRIPT = 'general.type-script',

    /**
     * JavaScript源代码类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    JAVA_SCRIPT = 'general.java-script',

    /**
     * CSS样式表类型，归属类型为SCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    CSS = 'general.css',

    /**
     * C头文件类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    C_HEADER = 'general.c-header',

    /**
     * C源代码类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    C_SOURCE = 'general.c-source',

    /**
     * C++头文件类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    C_PLUS_PLUS_HEADER = 'general.c-plus-plus-header',

    /**
     * C++源代码类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    C_PLUS_PLUS_SOURCE = 'general.c-plus-plus-source',

    /**
     * Java源代码类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    JAVA_SOURCE = 'general.java-source',

    /**
     * TEX源代码类型，归属类型为SOURCE_CODE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TEX = 'general.tex',

    /**
     * 标记语言文本类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MARKDOWN = 'general.markdown',

    /**
     * ASCII文本类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASC_TEXT = 'general.asc-text',

    /**
     * 富文本类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    RICH_TEXT = 'general.rich-text',

    /**
     * 所有分隔值文本的基类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DELIMITED_VALUES_TEXT = 'general.delimited-values-text',

    /**
     * CSV文本类型，归属类型为DELIMITED_VALUES_TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    COMMA_SEPARATED_VALUES_TEXT = 'general.comma-separated-values-text',

    /**
     * TSV文本类型，归属类型为DELIMITED_VALUES_TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TAB_SEPARATED_VALUES_TEXT = 'general.tab-separated-values-text',

    /**
     * 所有电子书文件格式的基类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    EBOOK = 'general.ebook',

    /**
     * 电子出版物（EPUB）文件格式类型，归属类型为EBOOK。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    EPUB = 'general.epub',

    /**
     * AZW电子书文件格式类型，归属类型为EBOOK。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AZW = 'com.amazon.azw',

    /**
     * AZW3电子书文件格式类型，归属类型为EBOOK。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AZW3 = 'com.amazon.azw3',

    /**
     * KFX电子书文件格式类型，归属类型为EBOOK。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    KFX = 'com.amazon.kfx',

    /**
     * MOBI电子书文件格式类型，归属类型为EBOOK。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    MOBI = 'com.amazon.mobi',

    /**
     * 所有媒体的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    MEDIA = 'general.media',

    /**
     * 所有图片的基类型，归属类型为MEDIA。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGE = 'general.image',

    /**
     * JPEG图片类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    JPEG = 'general.jpeg',

    /**
     * PNG图片类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PNG = 'general.png',

    /**
     * 所有原始图像格式的基类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    RAW_IMAGE = 'general.raw-image',

    /**
     * TIFF图片类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    TIFF = 'general.tiff',

    /**
     * WINDOWS位图图像类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    BMP = 'com.microsoft.bmp',

    /**
     * WINDOWS图标图像类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ICO = 'com.microsoft.ico',

    /**
     * Adobe Photoshop图片类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PHOTOSHOP_IMAGE = 'com.adobe.photoshop-image',

    /**
     * Adobe Illustrator图片类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AI_IMAGE = 'com.adobe.illustrator.ai-image',

    /**
     * 传真图像的基本类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    FAX = 'general.fax',

    /**
     * J2 jConnect传真文件类型，归属类型为FAX。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    JFX_FAX = 'com.j2.jfx-fax',

    /**
     * 电子传真文件类型，归属类型为FAX。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    EFX_FAX = 'com.js.efx-fax',

    /**
     * X Window系统（X11）中使用的位图图像格式，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    XBITMAP_IMAGE = 'general.xbitmap-image',

    /**
     * GIF图像类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    GIF = 'general.gif',

    /**
     * 标签图形（TaggedGraphics）图像类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TGA_IMAGE = 'com.truevision.tga-image',

    /**
     * 硅图（Silicon Graphics）图像类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SGI_IMAGE = 'com.sgi.sgi-image',

    /**
     * 开放标准的高动态范围图像格式类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENEXR_IMAGE = 'com.ilm.openexr-image',

    /**
     * FlashPix 图像文件类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    FLASHPIX_IMAGE = 'com.kodak.flashpix.image',

    /**
     * Microsoft Word数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WORD_DOC = 'com.microsoft.word.doc',

    /**
     * Microsoft Excel数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    EXCEL = 'com.microsoft.excel.xls',

    /**
     * Microsoft PowerPoint演示文稿类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PPT = 'com.microsoft.powerpoint.ppt',

    /**
     * Microsoft Word模板类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WORD_DOT = 'com.microsoft.word.dot',

    /**
     * Microsoft PowerPoint演示文稿幻灯片放映类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    POWERPOINT_PPS = 'com.microsoft.powerpoint.pps',

    /**
     * Microsoft PowerPoint演示文稿模板类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    POWERPOINT_POT = 'com.microsoft.powerpoint.pot',

    /**
     * Microsoft Excel模板类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    EXCEL_XLT = 'com.microsoft.excel.xlt',

    /**
     * Microsoft Visio数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    VISIO_VSD = 'com.microsoft.visio.vsd',

    /**
     * PDF数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PDF = 'com.adobe.pdf',

    /**
     * PostScript数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    POSTSCRIPT = 'com.adobe.postscript',

    /**
     * Encapsulated PostScript类型，归属类型为POSTSCRIPT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ENCAPSULATED_POSTSCRIPT = 'com.adobe.encapsulated-postscript',

    /**
     * 所有视频的基类型，归属类型为MEDIA。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    VIDEO = 'general.video',

    /**
     * AVI视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AVI = 'general.avi',

    /**
     * MPEG-1或MPEG-2视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    MPEG = 'general.mpeg',

    /**
     * MPEG-4视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    MPEG4 = 'general.mpeg-4',

    /**
     * 3GPP视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_3GPP = 'general.3gpp',

    /**
     * 3GPP2视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_3GPP2 = 'general.3gpp2',

    /**
     * MPEG-TS类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TS = 'general.ts',

    /**
     * MPEG视频播放列表文件类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MPEGURL_VIDEO = 'general.mpegurl-video',

    /**
     * WINDOWS WM视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WM = 'com.microsoft.windows-media-wm',

    /**
     * WINDOWS WMV视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WMV = 'com.microsoft.windows-media-wmv',

    /**
     * WINDOWS WMP视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WMP = 'com.microsoft.windows-media-wmp',

    /**
     * WINDOWS WVX视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WVX = 'com.microsoft.windows-media-wvx',

    /**
     * WINDOWS WMX视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WMX = 'com.microsoft.windows-media-wmx',

    /**
     * 流媒体视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    REALMEDIA = 'com.real.realmedia',

    /**
     * MKV视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MATROSKA_VIDEO = 'org.matroska.mkv',

    /**
     * FLASH视频类型，归属类型为VIDEO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    FLASH = 'com.adobe.flash',

    /**
     * 所有音频的基类型，归属类型为MEDIA。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO = 'general.audio',

    /**
     * AAC音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AAC = 'general.aac',

    /**
     * AIFF音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AIFF = 'general.aiff',

    /**
     * ALAC音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ALAC = 'general.alac',

    /**
     * FLAC音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    FLAC = 'general.flac',

    /**
     * MP3音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    MP3 = 'general.mp3',

    /**
     * OGG音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    OGG = 'general.ogg',

    /**
     * PCM音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    PCM = 'general.pcm',

        /**
     * WINDOWS WMA音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WMA = 'com.microsoft.windows-media-wma',

    /**
     * WINDOWS波形音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WAVEFORM_AUDIO = 'com.microsoft.waveform-audio',

    /**
     * WINDOWS WAX音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOWS_MEDIA_WAX = 'com.microsoft.windows-media-wax',

    /**
     * Au数据格式，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    AU_AUDIO = 'general.au-audio',

    /**
     * 音频交换数据类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    AIFC_AUDIO = 'general.aifc-audio',

    /**
     * MPEG音频播放列表文件类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MPEGURL_AUDIO = 'general.mpegurl-audio',

    /**
     * MPEG-4音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MPEG_4_AUDIO = 'general.mpeg-4-audio',

    /**
     * MP2音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MP2 = 'general.mp2',

    /**
     * MPEG音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MPEG_AUDIO = 'general.mpeg-audio',

    /**
     * ULAW音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ULAW_AUDIO = 'general.ulaw-audio',

    /**
     * 单声道/立体声音频类型（Digidesign Sound Designer II），归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SD2_AUDIO = 'com.digidesign.sd2-audio',

    /**
     * RealMedia音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    REALAUDIO = 'com.real.realaudio',

    /**
     * MKA音频类型，归属类型为AUDIO。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    MATROSKA_AUDIO = 'org.matroska.mka',

    /**
     * 所有文件的基类型，归属类型为ENTITY。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    FILE = 'general.file',

    /**
     * 所有目录的基类型，归属类型为ENTITY。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTORY = 'general.directory',

    /**
     * 所有文件夹的基类型，归属类型为DIRECTORY。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLDER = 'general.folder',

    /**
     * 所有符号链接的基类型，归属类型为ENTITY。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SYMLINK = 'general.symlink',

    /**
     * 所有文件和目录存档文件的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ARCHIVE = 'general.archive',

    /**
     * BZ2存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    BZ2_ARCHIVE = 'general.bz2-archive',

    /**
     * OPG存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPG = 'general.opg',

    /**
     * TAR压缩文件类型，归属类型为TAR_ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TAZ_ARCHIVE = 'general.taz-archive',

    /**
     * MHTML网页归档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WEB_ARCHIVE = 'general.web-archive',

    /**
     * 所有可作为卷挂载项的文件类型的基类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    DISK_IMAGE = 'general.disk-image',

    /**
     * 光盘映像文件类型，归属类型为DISK_IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ISO = 'general.iso',

    /**
     * TAR存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    TAR_ARCHIVE = 'general.tar-archive',

    /**
     * ZIP存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ZIP_ARCHIVE = 'general.zip-archive',

    /**
     * JAVA存档文件类型，归属类型为ARCHIVE和EXECUTABLE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    JAVA_ARCHIVE = 'com.sun.java-archive',

    /**
     * GNU存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    GNU_TAR_ARCHIVE = 'org.gnu.gnu-tar-archive',

    /**
     * GZIP存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    GNU_ZIP_ARCHIVE = 'org.gnu.gnu-zip-archive',

    /**
     * GZIP TAR存档文件类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    GNU_ZIP_TAR_ARCHIVE = 'org.gnu.gnu-zip-tar-archive',

    /**
     * 开源XML基类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENXML = 'org.openxmlformats.openxml',

    /**
     * 开源XML文档类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WORDPROCESSINGML_DOCUMENT = 'org.openxmlformats.wordprocessingml.document',

    /**
     * 开源XML电子表格类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SPREADSHEETML_SHEET = 'org.openxmlformats.spreadsheetml.sheet',

    /**
     * 开源XML演示文稿类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PRESENTATIONML_PRESENTATION = 'org.openxmlformats.presentationml.presentation',

    /**
     * 开源XML绘图文件类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DRAWINGML_VISIO = 'org.openxmlformats.drawingml.visio',

    /**
     * 开源XML绘图模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DRAWINGML_TEMPLATE = 'org.openxmlformats.drawingml.template',

    /**
     * 开源XML文档模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WORDPROCESSINGML_TEMPLATE = 'org.openxmlformats.wordprocessingml.template',

    /**
     * 开源XML演示文稿模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PRESENTATIONML_TEMPLATE = 'org.openxmlformats.presentationml.template',

    /**
     * 开源XML演示文稿幻灯片放映类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PRESENTATIONML_SLIDESHOW = 'org.openxmlformats.presentationml.slideshow',

    /**
     * 开源XML电子表格模板类型，归属类型为OPENXML和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SPREADSHEETML_TEMPLATE = 'org.openxmlformats.spreadsheetml.template',

    /**
     * Office应用程序的开源文档类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENDOCUMENT = 'org.oasis.opendocument',

    /**
     * 开源文档类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENDOCUMENT_TEXT = 'org.oasis.opendocument.text',

    /**
     * 开源文档电子表格类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENDOCUMENT_SPREADSHEET = 'org.oasis.opendocument.spreadsheet',

    /**
     * 开源文档演示类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENDOCUMENT_PRESENTATION = 'org.oasis.opendocument.presentation',

    /**
     * 开源文档图形类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENDOCUMENT_GRAPHICS = 'org.oasis.opendocument.graphics',

    /**
     * 开源文档公式集类型，归属类型为OPENDOCUMENT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENDOCUMENT_FORMULA = 'org.oasis.opendocument.formula',

    /**
     * Stuffit压缩格式类型（Stuffit archive），归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    STUFFIT_ARCHIVE = 'com.allume.stuffit-archive',

    /**
     * WinRAR压缩格式类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    RAR_ARCHIVE = 'com.rarlab.rar-archive',

    /**
     * 7-zip压缩格式类型，归属类型为ARCHIVE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SEVEN_ZIP_ARCHIVE = 'org.7-zip.7-zip-archive',

    /**
     * 所有日程类数据的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    CALENDAR = 'general.calendar',

    /**
     * VCalendar日历数据类型，归属类型为CALENDAR和TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    VCS = 'general.vcs',

    /**
     * ICalendar日历数据类型，归属类型为CALENDAR和TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ICS = 'general.ics',

    /**
     * 所有联系人类数据的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    CONTACT = 'general.contact',

    /**
     * 所有数据库文件的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    DATABASE = 'general.database',

    /**
     * 所有消息类数据的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    MESSAGE = 'general.message',

    /**
     * 所有可执行文件的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    EXECUTABLE = 'general.executable',

    /**
     * Microsoft Windows应用程序类型，归属类型为EXECUTABLE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PORTABLE_EXECUTABLE = 'com.microsoft.portable-executable',

    /**
     * Java类文件类型，归属类型为EXECUTABLE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SUN_JAVA_CLASS = 'com.sun.java-class',

    /**
     * 所有电子名片类数据的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    VCARD = 'general.vcard',

    /**
     * 所有导航类数据的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    NAVIGATION = 'general.navigation',

    /**
     * 导航定位类型，归属类型为NAVIGATION。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    LOCATION = 'general.location',

    /**
     * 所有字体数据类型的基础类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    FONT = 'general.font',

    /**
     * TrueType字体类型，归属类型为FONT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TRUETYPE_FONT = 'general.truetype-font',

    /**
     * TrueType collection字体类型，归属类型为FONT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TRUETYPE_COLLECTION_FONT = 'general.truetype-collection-font',

    /**
     * OpenType 字体类型，归属类型为FONT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENTYPE_FONT = 'general.opentype-font',

    /**
     * PostScript 字体类型，归属类型为FONT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    POSTSCRIPT_FONT = 'com.adobe.postscript-font',

    /**
     * PostScript Font Binary字体类型，归属类型为FONT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    POSTSCRIPT_PFB_FONT = 'com.adobe.postscript-pfb-font',

    /**
     * Adobe Type 1 字体类型，归属类型为FONT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    POSTSCRIPT_PFA_FONT = 'com.adobe.postscript-pfa-font',

    /**
     * 系统定义的卡片类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    OPENHARMONY_FORM = 'openharmony.form',

    /**
     * 系统定义的桌面图标类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    OPENHARMONY_APP_ITEM = 'openharmony.app-item',

    /**
     * 系统定义的像素图类型，归属类型为IMAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    OPENHARMONY_PIXEL_MAP = 'openharmony.pixel-map',

    /**
     * 系统定义的原子化服务类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    OPENHARMONY_ATOMIC_SERVICE = 'openharmony.atomic-service',

    /**
     * 系统定义的包（即目录的打包文件），归属类型为DIRECTORY。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    OPENHARMONY_PACKAGE = 'openharmony.package',

    /**
     * 系统定义的能力包，归属类型为OPENHARMONY_PACKAGE。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    OPENHARMONY_HAP = 'openharmony.hap',

    /**
     * 系统定义的备忘录数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENHARMONY_HDOC = 'openharmony.hdoc',

    /**
     * 系统定义的笔记数据类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENHARMONY_HINOTE = 'openharmony.hinote',

    /**
     * 系统定义的样式字符串类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENHARMONY_STYLED_STRING = 'openharmony.styled-string',

    /**
     * 系统定义的Want类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OPENHARMONY_WANT = 'openharmony.want',

    /**
     * 开放版式文档类型，归属类型为COMPOSITE_OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OFD = 'general.ofd',

    /**
     * 所有计算机辅助设计类型的基类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    CAD = 'general.cad',

    /**
     * 任意二进制数据类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    OCTET_STREAM = 'general.octet-stream',

    /**
     * 文件地址类型，归属类型为TEXT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    FILE_URI = 'general.file-uri',

    /**
     * 内容卡片类型，归属类型为OBJECT。
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    CONTENT_FORM = 'general.content-form'
  }

  /**
   * 标准化数据类型的描述类，它包含了一些属性和方法用于描述标准化数据类型自身以及和其他标准化数据类型之间的归属与层级关系，例如通过typeId与belongingToTypes维护类型映射关系，并提供层级判断等方法。详细属性与方法参见
   * 下文说明。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class TypeDescriptor {
    /**
     * Type ID of the uniform data type, which corresponds to the enum string in the {@code UniformDataType}.
     *
     * @type { string } [since 11 - 22]
     * @returns { string } Type ID of the uniform data type. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    get typeId(): string;

    /**
     * Type ID of the uniform data type, which corresponds to the enum string in the {@code UniformDataType}.
     *
     * @type { string } [since 11 - 22]
     * @param { string } value - Type ID of the uniform data type. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    set typeId(value: string);

    /**
     * Uniform data type IDs that the uniform data type belongs to.
     *
     * @type { Array<string> } [since 11 - 22]
     * @returns { Array<string> } Uniform data type IDs [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    get belongingToTypes(): Array<string>;

    /**
     * Uniform data type IDs that the uniform data type belongs to.
     *
     * @type { Array<string> } [since 11 - 22]
     * @param { Array<string> } value - Uniform data type IDs [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    set belongingToTypes(value: Array<string>);

    /**
     * A textual description for the uniform data type.
     *
     * @type { string } [since 11 - 22]
     * @returns { string } A textual description [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    get description(): string;

    /**
     * A textual description for the uniform data type.
     *
     * @type { string } [since 11 - 22]
     * @param { string } value - A textual description [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    set description(value: string);

    /**
     * Reference URL for the uniform data type, which describes the detail information of the type.
     *
     * @type { string } [since 11 - 22]
     * @returns { string } Reference URL [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    get referenceURL(): string;

    /**
     * Reference URL for the uniform data type, which describes the detail information of the type.
     *
     * @type { string } [since 11 - 22]
     * @param { string } value - Reference URL [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    set referenceURL(value: string);

    /**
     * Default icon file path for the uniform data type.
     *
     * @type { string } Default icon file path [since 11 - 22]
     * @returns { string } Default icon file path [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    get iconFile(): string;

    /**
     * Default icon file path for the uniform data type.
     *
     * @type { string } [since 11 - 22]
     * @param { string } value - Default icon file path [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    set iconFile(value: string);

    /**
     * File name extensions for the uniform data type.
     *
     * @type { Array<string> } [since 12 - 22]
     * @returns { Array<string> } File name extensions [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    get filenameExtensions(): Array<string>;

    /**
     * File name extensions for the uniform data type.
     *
     * @type { Array<string> } [since 12 - 22]
     * @param { Array<string> } value - File name extensions [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    set filenameExtensions(value: Array<string>);

        /**
     * MIMETypes of the uniform data type.
     *
     * @type { Array<string> } [since 12 - 22]
     * @returns { Array<string> } MIMETypes [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    get mimeTypes(): Array<string>;

    /**
     * MIMETypes of the uniform data type.
     *
     * @type { Array<string> } [since 12 - 22]
     * @param { Array<string> } value - MIMETypes [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    set mimeTypes(value: Array<string>);

    /**
     * 判断当前标准化数据类型是否归属于指定的标准化数据类型。
     *
     * @param { string } type - 所指定的标准化数据类型（即[UTD预置列表](docroot://database/uniform-data-type-list.md)中各类型对应的UTD-ID或自定义UTD
     *     -ID）。
     * @returns { boolean } 返回true表示当前的标准化数据类型归属于所指定的标准化数据类型，包括所指定类型与当前类型相同的情况；返回false则表示无归属关系。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    belongsTo(type: string): boolean;

    /**
     * 判断当前标准化数据类型是否是指定标准化数据类型的低层级类型。例如TYPE_SCRIPT为SOURCE_CODE的低层级类型，TYPE_SCRIPT和SOURCE_CODE为TEXT的低层级类型。
     *
     * @param { string } type - 所指定的标准化数据类型（即[UTD预置列表](docroot://database/uniform-data-type-list.md)中各类型对应的UTD-ID或自定义UTD
     *     -ID）。
     * @returns { boolean } 返回true表示当前的标准化数据类型是所指定标准化数据类型的低层级类型，否则返回false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    isLowerLevelType(type: string): boolean;

    /**
     * 判断当前标准化数据类型是否是指定标准化数据类型的高层级类型。例如SOURCE_CODE为TYPE_SCRIPT的高层级类型，TEXT为SOURCE_CODE和TYPE_SCRIPT的高层级类型。
     *
     * @param { string } type - 所指定的标准化数据类型（即[UTD预置列表](docroot://database/uniform-data-type-list.md)中各类型对应的UTD-ID或自定义UTD
     *     -ID）。
     * @returns { boolean } 返回true表示当前的标准化数据类型是所指定标准化数据类型的高层级类型，否则返回false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    isHigherLevelType(type: string): boolean;

    /**
     * 判断指定的标准化数据类型描述类对象的类型ID和当前标准化数据类型描述类对象的类型ID是否相同，即[TypeDescriptor]{@link uniformTypeDescriptor.TypeDescriptor}对象的
     * typeId。
     *
     * @param { TypeDescriptor } typeDescriptor - 待比较的标准化数据类型描述类对象。
     * @returns { boolean } 返回true表示所比较的两个TypeDescriptor相同；返回false则表示不同。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    equals(typeDescriptor: TypeDescriptor): boolean;
  }

  /**
   * 按给定的标准化数据类型ID查询并返回对应的标准化数据类型描述类对象。
   *
   * @param { string } typeId - [标准化数据类型ID](docroot://database/uniform-data-type-descriptors.md)。
   * @returns { TypeDescriptor } 返回标准化数据类型描述类对象。如果要查询的标准化数据类型不存在，则返回null。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  function getTypeDescriptor(typeId: string): TypeDescriptor;

  /**
   * Queries and returns the uniform type descriptor by the given uniform data type ID.
   *
   * @param { string } typeId - Uniform data type ID.
   * @returns { TypeDescriptor | null } Returns the uniform type descriptor corresponding to the uniform data type ID
   *     or null if the uniform data type does not exist.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  function getTypeDescriptor(typeId: string): TypeDescriptor | null;

  /**
   * 根据给定的文件后缀名和所归属的标准化数据类型查询标准化数据类型ID，若有多个符合条件的标准化数据类型ID，则返回第一个。
   *
   * @param { string } filenameExtension - 文件后缀名称，需要包含点号，如'.ts'、'.jpg'等。
   * @param { string } [belongsTo] - 要查询的标准化数据类型所归属类型ID，用于限定查询范围。当需要查询特定归属类型下的数据类型时传入此参数，无默认值，若不传入此参数则只按照文件后缀名称查询
   *     [标准化数据类型ID](docroot://database/uniform-data-type-descriptors.md)。
   * @returns { string } 返回与给定文件后缀名以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID。如果要查询的标准化数据类型不存在，则返回根据入参按指定规则生成的动态类型（动态类型是系统动态
   *     生成的类型标识，以'flex.'为前缀，用于表示未预定义的数据类型）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  function getUniformDataTypeByFilenameExtension(filenameExtension: string, belongsTo?: string): string;

  /**
   * 根据给定的MIME类型和所归属的标准化数据类型查询标准化数据类型ID，若有多个符合条件的标准化数据类型ID，则返回第一个。
   *
   * @param { string } mimeType - MIME类型名称，格式为'type/subtype'，如'image/jpeg'、'text/plain'等。
   * @param { string } [belongsTo] - 要查询的标准化数据类型所归属类型ID。无默认值，若不传入此参数则只按照MIME类型名称查询
   *     [标准化数据类型ID](docroot://database/uniform-data-type-descriptors.md)。
   * @returns { string } 返回与MIME类型名称以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  function getUniformDataTypeByMIMEType(mimeType: string, belongsTo?: string): string;

  /**
   * 根据给定的文件后缀名和所归属的标准化数据类型查询标准化数据类型ID列表。
   *
   * @param { string } filenameExtension - 文件后缀名称。
   * @param { string } [belongsTo] - 要查询的标准化数据类型所归属类型ID，无默认值，若不传入此参数则只按照文件后缀名称查询
   *     [标准化数据类型ID](docroot://database/uniform-data-type-descriptors.md)。
   * @returns { Array<string> } 返回与给定文件后缀名以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID列表，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型列
   *     表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 20]
   * @since 13 dynamic
   * @since 23 static
   */
  function getUniformDataTypesByFilenameExtension(filenameExtension: string, belongsTo?: string): Array<string>;

  /**
   * 根据给定的MIME类型和所归属的标准化数据类型查询标准化数据类型ID列表。
   *
   * @param { string } mimeType - MIME类型名称，格式为'type/subtype'，如'image/jpeg'、'text/plain'等。
   * @param { string } [belongsTo] - 要查询的标准化数据类型所归属类型ID。无默认值，若不传入此参数则只按照MIME类型名称查询
   *     [标准化数据类型ID](docroot://database/uniform-data-type-descriptors.md)。
   * @returns { Array<string> } 返回与MIME类型名称以及归属类型ID（如果设置了belongsTo参数）匹配的标准化数据类型ID列表，如果要查询的标准化数据类型不存在则返回根据入参按指定规则生成的动态类型列
   *     表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 20]
   * @since 13 dynamic
   * @since 23 static
   */
  function getUniformDataTypesByMIMEType(mimeType: string, belongsTo?: string): Array<string>;

  /**
   * Register type descriptors into the system.
   *
   * @permission ohos.permission.MANAGE_DYNAMIC_UTD_TYPE
   * @param { Array<TypeDescriptor> } typeDescriptors - The list of type descriptors to be registered.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 20400002 - The format of one or more typeDescriptors are invalid.
   * @throws { BusinessError } 20400003 - The content of one or more typeDescriptors violate rules.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function registerTypeDescriptors(typeDescriptors: Array<TypeDescriptor>): Promise<void>;

  /**
   * Unregister one or more type descriptors from the system by the given type IDs.
   *
   * @permission ohos.permission.MANAGE_DYNAMIC_UTD_TYPE
   * @param { Array<string> } typeIds - The list of type IDs to be unregistered.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 20400004 - One or more typeIds are invalid or do not exist.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function unregisterTypeDescriptors(typeIds: Array<string>): Promise<void>;
}

export default uniformTypeDescriptor;