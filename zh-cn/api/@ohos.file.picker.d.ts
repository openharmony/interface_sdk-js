/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit CoreFileKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Context from './application/Context';
import window from './@ohos.window';
import type { CustomColors } from './@ohos.arkui.theme';
/**
 * 选择器(Picker)是一个封装DocumentViewPicker、AudioViewPicker、PhotoViewPicker的API模块，具有选择与保存的能力。
 * 应用可以选择使用以下API来实现文件的选择和保存的功能。该类接口，需要应用在界面UIAbility中调用，否则无法拉起FilePicker应用、
 * AudioPicker应用或PhotoPicker应用。调用本模块接口返回的URI数组，
 * URI中的中文及非数字字母的特殊字符会被编码为对应的ASCII码并拼接到URI中。
 * 
 * > **说明：**
 * >
 * > 该模块接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace picker {
  /**
   * Enumerates the media file types that can be selected.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewMIMETypes
   */
  export enum PhotoViewMIMETypes {
    /**
     * 图片类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE
     */
    IMAGE_TYPE = 'image/*',

    /**
     * 视频类型。 
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewMIMETypes.VIDEO_TYPE
     */
    VIDEO_TYPE = 'video/*',

    /**
     * 图片和视频类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE
     */
    IMAGE_VIDEO_TYPE = '*/*'
  }

  /**
   * 图库选择选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions
   */
  class PhotoSelectOptions {
    /**
     * 可选择的媒体文件类型。若无此参数，则默认为图片和视频类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions#MIMEType
     */
    MIMEType?: PhotoViewMIMETypes;

    /**
     * 选择媒体文件数量的最大值，默认值为50，最大值为500。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions#maxSelectNumber
     */
    maxSelectNumber?: number;
  }

  /**
   * 返回图库选择后的结果集。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectResult
   */
  class PhotoSelectResult {
    /**
     * 返回图库选择后的媒体文件的URI数组。此URI数组只能通过临时授权的方式调用接口
     * [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * 去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectResult#photoUris
     */
    photoUris: Array<string>;

    /**
     * 返回图库选择后的媒体文件是否为原图。true为原图；false不是原图。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectResult#isOriginalPhoto
     */
    isOriginalPhoto: boolean;
  }

  /**
   * 图片或视频的保存选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead SaveButtonOptions
   */
  class PhotoSaveOptions {
    /**
     * 拉起photoPicker进行保存图片或视频资源的文件名。若无此参数，则默认需要用户自行输入。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead SaveButtonOptions
     */
    newFileNames?: Array<string>;
  }

  /**
   * 图库选择器对象，用来支撑选择图片/视频和保存图片/视频等用户场景。选择文件推荐使用
   * [PhotoAccessHelper的PhotoViewPicker]{@link @ohos.file.photoAccessHelper:photoAccessHelper}。
   * 在使用前，需要先创建PhotoViewPicker实例。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker
   */
  class PhotoViewPicker {
    /**
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker
     */
    constructor();

    /**
     *
     * @param { Context } context - 应用上下文（仅支持UIAbilityContext）。
     *     Stage模型的应用Context定义见[Context]{@link ./app/context}。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 12 dynamiconly
     * @deprecated since 18
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker
     */
    constructor(context: Context);

    /**
     * 通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用Promise异步返回形式，
     * 传入可选参数PhotoSelectOptions对象，返回PhotoSelectResult对象。
     *
     * @param { PhotoSelectOptions } option - photoPicker选择选项。若无此参数，则默认选择媒体文件类型为图片和视频类型。
     *     选择媒体文件数量的默认最大值为50。
     * @returns { Promise<PhotoSelectResult> } Promise对象。返回photoPicker选择后的结果集。 
     *     <br>**注意**：此接口返回的PhotoSelectResult对象中的photoUris只能通过临时授权的方式调用接口
     *     [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     *     去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option?: PhotoSelectOptions)
     */
    select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;

    /**
     * 通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用callback异步返回形式，
     * 传入参数PhotoSelectOptions对象，返回PhotoSelectResult对象。
     *
     * @param { PhotoSelectOptions } option - photoPicker选择选项。
     * @param { AsyncCallback<PhotoSelectResult> } callback - callback返回photoPicker选择后的结果集。
     *     <br>**注意**：此接口返回的PhotoSelectResult对象中的photoUris只能通过临时授权的方式调用接口
     *     [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     *     去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>)
     */
    select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;

    /**
     * 通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用callback异步返回形式，
     * 返回PhotoSelectResult对象。
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - callback返回photoPicker选择后的结果集。
     *     <br>**注意**：此接口返回的PhotoSelectResult对象中的photoUris只能通过临时授权的方式调用接口
     *     [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     *     去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(callback: AsyncCallback<PhotoSelectResult>)
     */
    select(callback: AsyncCallback<PhotoSelectResult>): void;

    /**
     * 通过保存模式拉起photoPicker界面，用户可以保存一个或多个图片/视频。接口采用Promise异步返回形式，
     * 传入可选参数PhotoSaveOptions对象，返回保存文件的uri数组。
     * 
     *
     * @param { PhotoSaveOptions } option - photoPicker保存图片或视频文件选项。若无此参数，
     *     则拉起photoPicker界面后需用户自行输入保存的文件名。
     * @returns { Promise<Array<string>> } Promise对象。返回photoPicker保存图片或视频文件后的结果集。
     *     <br>**注意**：此接口会将文件保存在文件管理器，而不是图库。返回的uri数组的具体使用方式参见用户文件uri介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead SaveButton
     */
    save(option?: PhotoSaveOptions): Promise<Array<string>>;

    /**
     * 通过保存模式拉起photoPicker界面，用户可以保存一个或多个图片/视频。接口采用callback异步返回形式，
     * 传入参数PhotoSaveOptions对象，返回保存文件的uri数组。
     *
     * @param { PhotoSaveOptions } option - photoPicker保存图片或视频文件选项。
     * @param { AsyncCallback<Array<string>> } callback - callback 返回photoPicker保存图片或视频文件后的结果集。
     *     <br>**注意**：此接口会将文件保存在文件管理器，而不是图库。返回的uri数组的具体使用方式参见用户文件uri介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead SaveButton
     */
    save(option: PhotoSaveOptions, callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过保存模式拉起photoPicker界面，用户可以保存一个或多个图片/视频。接口采用callback异步返回形式，返回保存文件的uri数组。
     *
     * @param { AsyncCallback<Array<string>> } callback - callback 返回photoPicker保存图片或视频文件后的结果集。
     *     <br>**注意**：此接口会将文件保存在文件管理器，而不是图库。返回的uri数组的具体使用方式参见用户文件uri介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead SaveButton
     */
    save(callback: AsyncCallback<Array<string>>): void;
  }

  /**
   * Enumerates the types of documents selected.
   *
   * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DocumentSelectMode {
    /**
     * 文件类型（默认类型）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FILE = 0,

    /**
     * 文件夹类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FOLDER = 1,

    /**
     * 文件和文件夹混合类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MIXED = 2
  }

  /**
   * Enumerates the modes for saving documents.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum DocumentPickerMode {
    /**
     * 标准模式。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 下载模式。 
     * 
     * **注意**： DOWNLOAD模式创建的目录仅用于保存文件，目录之间无访问隔离，不建议保存应用敏感数据。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOAD = 1
    }

  /**
   * Enumerates file aggregation types.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  export enum MergeTypeMode {
    /**
     * 默认模式，表示该参数不生效。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 音频文件模式。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    AUDIO = 1,

    /**
     * 视频文件模式。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    VIDEO = 2,

    /**
     * 文档文件模式。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DOCUMENT = 3,

    /**
     * 图片文件模式。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    PICTURE = 4
  }

  /**
   * 文档选择选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class DocumentSelectOptions {

    /**
     * 选择文件最大个数。
     * 
     * API version 20及之前的版本，单次文件选择的最大数量上限为500个，默认值也为500。
     * 目录选择功能仅对具备该系统能力的设备开放，且单次最多可选择1个目录。
     * 
     * API version 21及之后的版本取消文件选择数量的限制。受系统能力限制，选择文件数量过大可能会出现功能异常或处理性能较差等情况，
     * 建议单次选择文件个数不超过1万个。
     * 
     * API version 23及之后的版本取消目录选择数量的限制。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    maxSelectNumber?: number;
    /**
     * 指定选择的文件或者目录的URI。默认为空（效果为拉起最近打开页）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    defaultFilePathUri?: string;

    /**
     * 选择文件的后缀类型。传入字符串数组，每一项代表一个后缀选项，每一项内部用"|"分为两部分，第一部分为描述，
     * 第二部分为过滤后缀。没有"|"则没有描述，该项整体是一个过滤后缀。每项过滤后缀可以存在多个后缀名，则每一个后缀名之间用英
     * 文逗号进行分隔，传入数组长度不能超过100，例如：['图片(.png, .jpg)|.png,.jpg', '文档|.txt', '视频|.mp4', '.pdf']。
     * 
     * 默认不过滤，即显示所有文件。此外2in1设备支持通配符方式['所有文件(*.*)|.*']
     * （说明：从API version 17开始，手机支持该配置），表示为显示所有文件。
     * 
     * 仅对具有该系统能力的设备开放。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    fileSuffixFilters?: Array<string>;

    /**
     * Picker选择的文档类型，默认值是FILE(文件类型)。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    selectMode?: DocumentSelectMode;

    /**
     * 拉起授权Picker，默认为false（非授权模式）。当authMode为true时为授权模式，defaultFilePathUri必填，表明待授权URI。
     * 
     * 该参数在2in1设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @atomicservice
     * @since 12 dynamic
     */
    authMode?: boolean;

    /**
     * 支持批量授权模式，默认为false（非批量授权模式）。当multiAuthMode为true时为批量授权模式。当multiAuthMode为true时，
     * 只有multiUriArray参数生效，其他参数不生效。
     * 
     * 该参数在Phone设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     */
    multiAuthMode?: boolean;

    /**
     * 传入需要批量授权的URI数组（仅支持文件，文件夹不生效）。配合multiAuthMode使用。当multiAuthMode为false时，
     * 配置该参数不生效。默认为空（效果为拉起批量授权页面后展示的文件为空）。
     * 
     * 该参数在Phone设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     */
    multiUriArray?: Array<string>;

    /**
     * 开启聚合视图模式，支持拉起文件管理应用的聚合视图。默认为DEFAULT，表示该参数不生效，非聚合视图。
     * 当该参数置为非DEFAULT时，其他参数不生效。
     * 
     * 该参数在Phone设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 15 dynamic
     */
    mergeMode?: MergeTypeMode;

    /**
     * 是否支持加密（仅支持文件，文件夹不生效），默认为false。该参数为true时，在Picker界面可以选择对文件进行加密。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 19 dynamic
     */
    isEncryptionSupported?: boolean;

    /**
     * 主题色参数, 默认为空，跟随FilePicker应用颜色。当themeColor设置为特定的主题色属性
     * （[brand, fontPrimary, compBackgroundEmphasize, iconFourth]{@link @ohos.arkui.theme:Colors}）时，
     * 被拉起的FilePicker应用将适配传入的主题色参数的效果。
     *
     * 该接口在Phone设备中可正常调用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 18 dynamic
     */
    themeColor?: CustomColors;

    /**
     * 是否支持多选文件夹。true表示支持，false表示不支持，默认值为false。该参数需要与selectMode配合使用，
     * 当selectMode为FOLDER或者MIXED，并且allowsMulFolderSelection为true，多选文件夹功能生效。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    allowsMulFolderSelection?: boolean;
  }

  /**
   * 文档保存选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class DocumentSaveOptions {
    /**
     * 拉起documentPicker进行保存的文件名。若无此参数，则默认需要用户自行输入。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    newFileNames?: Array<string>;

    /**
     * 指定选择的文件或者目录的URI。默认为空（效果为拉起最近打开页）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    defaultFilePathUri?: string;

    /**
     * 保存文件的后缀类型。传入字符串数组，每一项代表一个后缀选项，每一项内部用"|"分为两部分，第一部分为描述，
     * 第二部分为要保存的后缀。没有"|"则没有描述，该项整体是一个保存的后缀。默认没有后缀类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    fileSuffixChoices?: Array<string>;
    /**
     * 拉起picker的类型, 默认为DEFAULT。当pickerMode设置为DOWNLOAD时，用户配置的参数newFileNames、
     * defaultFilePathUri和fileSuffixChoices将不会生效。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     */
    pickerMode?: DocumentPickerMode;

    /**
     * 主题色参数, 默认为空，跟随FilePicker应用颜色。当themeColor设置为特定的主题色属性
     * （[brand, fontPrimary, compBackgroundEmphasize, iconFourth]{@link @ohos.arkui.theme:Colors}）时，
     * 被拉起的FilePicker应用将适配传入的主题色参数的效果。
     *
     * 该接口在Phone设备中可正常调用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 18 dynamic
     */
    themeColor?: CustomColors;

    /**
     * 保存文件时，由应用决定是否预置空文件。默认为true，Picker会预置空文件并且返回文件的URI数组。
     * false不预置空文件，只会返回文件的URI数组。
     *
     * @default true
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @stagemodelonly
     * @since 23 dynamic
     */
    autoCreateEmptyFile?: boolean;
  }

  /**
   * 文档选择选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @stagemodelonly
   * @since 23 static
   */
  interface DocumentSelectOptions {
    /**
     * 指定选择的文件或者目录的URI。默认为空（效果为拉起最近打开页）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    defaultFilePathUri?: string;

    /**
     * 选择文件的后缀类型。传入字符串数组，每一项代表一个后缀选项，每一项内部用"|"分为两部分，第一部分为描述，
     * 第二部分为过滤后缀。没有"|"则没有描述，该项整体是一个过滤后缀。每项过滤后缀可以存在多个后缀名，则每一个后缀名之间用英
     * 文逗号进行分隔，传入数组长度不能超过100，例如：['图片(.png, .jpg)|.png,.jpg', '文档|.txt', '视频|.mp4', '.pdf']。
     * 
     * 默认不过滤，即显示所有文件。此外2in1设备支持通配符方式['所有文件(*.*)|.*']
     * （说明：从API version 17开始，手机支持该配置），表示为显示所有文件。
     * 
     * 仅对具有该系统能力的设备开放。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    fileSuffixFilters?: Array<string>;

    /**
     * 选择文件最大个数。API version 20及之前的版本，单次选择最大文件个数上限为500个，默认值是500。选择目录仅对具有该系统能力的
     * 设备开放，且目录选择的最大个数为1。API version 21及之后的版本取消限制。受系统能力限制，选择文件数量过大可能会出现功能异常
     * 或处理性能较差等情况，建议单次选择文件个数不超过1万个。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    maxSelectNumber?: int;

    /**
     * Picker选择的文档类型，默认值是FILE(文件类型)。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @stagemodelonly
     * @since 23 static
     */
    selectMode?: DocumentSelectMode;

    /**
     * 拉起授权Picker，默认为false（非授权模式）。当authMode为true时为授权模式，defaultFilePathUri必填，表明待授权URI。
     * 
     * 该参数在2in1设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @stagemodelonly
     * @since 23 static
     */
    authMode?: boolean;

    /**
     * 支持批量授权模式，默认为false（非批量授权模式）。当multiAuthMode为true时为批量授权模式。当multiAuthMode为true时，
     * 只有multiUriArray参数生效，其他参数不生效。
     * 
     * 该参数在Phone设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    multiAuthMode?: boolean;

    /**
     * 传入需要批量授权的URI数组（仅支持文件，文件夹不生效）。配合multiAuthMode使用。当multiAuthMode为false时，
     * 配置该参数不生效。默认为空（效果为拉起批量授权页面后展示的文件为空）。
     * 
     * 该参数在Phone设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    multiUriArray?: Array<string>;

    /**
     * 开启聚合视图模式，支持拉起文件管理应用的聚合视图。默认为DEFAULT，表示该参数不生效，非聚合视图。
     * 当该参数置为非DEFAULT时，其他参数不生效。
     * 
     * 该参数在Phone设备中可正常使用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    mergeMode?: MergeTypeMode;

    /**
     * 是否支持加密（仅支持文件，文件夹不生效），默认为false。该参数为true时，在Picker界面可以选择对文件进行加密。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    isEncryptionSupported?: boolean;

    /**
     * 主题色参数, 默认为空，跟随FilePicker应用颜色。当themeColor设置为特定的主题色属性
     * （[brand, fontPrimary, compBackgroundEmphasize, iconFourth]{@link @ohos.arkui.theme:Colors}）时，
     * 被拉起的FilePicker应用将适配传入的主题色参数的效果。
     *
     * 该接口在Phone设备中可正常调用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    themeColor?: CustomColors;

    /**
     * 是否支持多选文件夹。true表示支持，false表示不支持，默认值为false。该参数需要与selectMode配合使用，
     * 当selectMode为FOLDER或者MIXED，并且allowsMulFolderSelection为true，多选文件夹功能生效。
     *
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @stagemodelonly
     * @since 26.0.0 static
     */
    allowsMulFolderSelection?: boolean;
  }

  /**
   * 文档保存选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @stagemodelonly
   * @since 23 static
   */
  interface DocumentSaveOptions {
    /**
     * 拉起documentPicker进行保存的文件名。若无此参数，则默认需要用户自行输入。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    newFileNames?: Array<string>;

    /**
     * 指定保存的文件或者目录的URI。默认为空。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    defaultFilePathUri?: string;

    /**
     * 保存文件的后缀类型。传入字符串数组，每一项代表一个后缀选项，每一项内部用"|"分为两部分，第一部分为描述，
     * 第二部分为要保存的后缀。没有"|"则没有描述，该项整体是一个保存的后缀。默认没有后缀类型。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    fileSuffixChoices?: Array<string>;
    /**
     * 拉起picker的类型, 默认为DEFAULT。当pickerMode设置为DOWNLOAD时，用户配置的参数newFileNames、
     * defaultFilePathUri和fileSuffixChoices将不会生效。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    pickerMode?: DocumentPickerMode;

    /**
     * 主题色参数, 默认为空，跟随FilePicker应用颜色。当themeColor设置为特定的主题色属性
     * （[brand, fontPrimary, compBackgroundEmphasize, iconFourth]{@link @ohos.arkui.theme:Colors}）时，
     * 被拉起的FilePicker应用将适配传入的主题色参数的效果。
     *
     * 该接口在Phone设备中可正常调用，在其他设备中无效果。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    themeColor?: CustomColors;

    /**
     * 保存文件时，由应用决定是否预置空文件。默认为true，Picker会预置空文件并且返回文件的URI数组。
     * false不预置空文件，只会返回文件的URI数组。
     *
     * @default true
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @stagemodelonly
     * @since 23 static
     */
    autoCreateEmptyFile?: boolean;
  }

  /**
   * 文件选择器对象，用来支撑选择和保存各种格式文档。在使用前，需要先创建DocumentViewPicker实例。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  class DocumentViewPicker {
    /**
     * 创建DocumentViewPicker对象，不推荐使用该构造函数，会出现概率性失败问题。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 创建DocumentViewPicker对象，推荐使用该构造函数，获取context参考
     * [getHostContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#gethostcontext12)。
     *
     * @param { Context } context - 应用上下文（仅支持UIAbilityContext）。Stage模型的应用Context定义见[Context]{@link ./app/context}。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(context: Context);

    /**
     * 应用自行创建窗口中，可用通过该构造函数创建DocumentViewPicker对象。一般场景推荐使用constructor(context: Context)方法
     * 创建DocumentViewPicker对象。
     * 
     * > **说明：**
     * >
     * > 从API version 19开始，2in1和Tablet设备支持该方法。
     *
     * @param { Context } context - 应用上下文（仅支持UIAbilityContext）。Stage模型的应用Context定义见[Context]{@link ./app/context}。
     * @param { window.Window } window - 应用创建的窗口实例。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 13 dynamic
     * @since 23 static
     */
    constructor(context: Context, window: window.Window);

    /**
     * 通过选择模式拉起documentPicker界面，用户可以选择一个或多个文件。使用Promise异步回调。
     *
     * @param { DocumentSelectOptions } option - documentPicker选择选项。若无此参数，则默认拉起documentPicker主界面。
     * @returns { Promise<Array<string>> } Promise对象。返回documentPicker选择后的结果集。
     *     <br>**注意**：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    select(option?: DocumentSelectOptions): Promise<Array<string>>;

    /**
     * 通过选择模式拉起documentPicker界面，用户可以选择一个或多个文件。使用callback异步回调。
     *
     * @param { DocumentSelectOptions } option - documentPicker选择选项。
     * @param { AsyncCallback<Array<string>> } callback - callback 返回documentPicker选择后的结果集。
     *     <br>**注意**：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    select(option: DocumentSelectOptions, callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过选择模式拉起documentPicker界面，用户可以选择一个或多个文件。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - callback 返回documentPicker选择后的结果集。
     *     <br>**注意**：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    select(callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过保存模式拉起documentPicker界面，用户可以保存一个或多个文件。使用Promise异步回调。
     *
     * @param { DocumentSaveOptions } option - documentPicker保存选项。若无此参数，
     *     则拉起documentPicker界面后需用户自行输入保存的文件名。
     * @returns { Promise<Array<string>> } Promise对象。返回documentPicker保存后的结果集。
     *     <br>**注意**：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    save(option?: DocumentSaveOptions): Promise<Array<string>>;

    /**
     * 通过保存模式拉起documentPicker界面，用户可以保存一个或多个文件。使用callback异步回调。
     *
     * @param { DocumentSaveOptions } option - documentPicker保存选项。
     * @param { AsyncCallback<Array<string>> } callback - callback 返回documentPicker保存后的结果集。
     *     <br>**注意**：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    save(option: DocumentSaveOptions, callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过保存模式拉起documentPicker界面，用户可以保存一个或多个文件。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - callback 返回documentPicker保存后的结果集。
     *     <br>**注意**：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    save(callback: AsyncCallback<Array<string>>): void;

    /**
     * 获取保存成功后的文件后缀类型的下标。
     * 该方法只在调用 [save()]{@link picker.DocumentViewPicker.save(option?: DocumentSaveOptions)}时使用生效，
     * 其他场景下不适用。该方法需要配置参数[DocumentSaveOptions.fileSuffixChoices]{@link picker.DocumentSaveOptions}。
     * 该方法返回的是所选后缀类型的下标(number)。所选的后缀类型是开发者所传的参数
     * [DocumentSaveOptions.fileSuffixChoices]{@link picker.DocumentSaveOptions}里的某个后缀类型。
     * 如果没有传参，并且调用了getSelectedIndex()方法，返回值为-1。
     *
     * @returns { int } 返回所选后缀类型在[DocumentSaveOptions.fileSuffixChoices]{@link picker.DocumentSaveOptions}
     *     里的下标(number)。默认返回-1。
     * @syscap SystemCapability.FileManagement.UserFileService.FolderSelection
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getSelectedIndex(): int;
  }

  /**
   * 音频选择选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class AudioSelectOptions {
    /**
     * 选择文件最大个数，默认值为1，上限为500个，有效值范围1-500。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    maxSelectNumber?: number;
    }

  /**
   * 音频选择选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @stagemodelonly
   * @since 23 static
   */
  interface AudioSelectOptions {
    /**
     * 选择文件最大个数，默认值为1，上限为500个，有效值范围1-500。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    maxSelectNumber?: int;
  }

  /**
   * 音频保存选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class AudioSaveOptions {
    /**
     * 拉起documentPicker进行保存的文件名。若无此参数，则默认需要用户自行输入。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    newFileNames?: Array<string>;
  }
  /**
   * 音频保存选项。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @stagemodelonly
   * @since 23 static
   */
  interface AudioSaveOptions {
    /**
     * 拉起audioPicker进行保存音频资源的文件名。若无此参数，则默认需要用户自行输入。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @stagemodelonly
     * @since 23 static
     */
    newFileNames?: Array<string>;
  }
  /**
   * 音频选择器对象，用来支撑选择和保存音频类文件等用户场景。在使用前，需要先创建AudioViewPicker实例。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  class AudioViewPicker {
    /**
     * 创建AudioViewPicker对象，不推荐使用该构造函数，会出现概率性失败问题。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 创建AudioViewPicker对象，推荐使用该构造函数，获取context参考
     * [getHostContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#gethostcontext12)。
     *
     * @param { Context } context - 应用上下文（仅支持UIAbilityContext）。Stage模型的应用Context定义见[Context]{@link ./app/context}。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(context: Context);

    /**
     * 通过选择模式拉起audioPicker界面，用户可以选择一个或多个音频文件。使用Promise异步回调。
     *
     * @param { AudioSelectOptions } option - audioPicker音频选择选项。若无此参数，则默认拉起audioPicker主界面。
     * @returns { Promise<Array<string>> } Promise对象。返回audioPicker选择音频后的结果集。 
     *     <br>**注意**： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [媒体类uri的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri介绍)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    select(option?: AudioSelectOptions): Promise<Array<string>>;

    /**
     * 通过选择模式拉起audioPicker界面，用户可以选择一个或多个音频文件。使用callback异步回调。
     *
     * @param { AudioSelectOptions } option - audioPicker音频选择选项。
     * @param { AsyncCallback<Array<string>> } callback - callback 返回audioPicker选择音频后的结果集。
     *     <br>**注意**： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [媒体类uri的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri介绍)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    select(option: AudioSelectOptions, callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过选择模式拉起audioPicker界面，用户可以选择一个或多个音频文件。使用callback异步回调。
     * **系统能力**：SystemCapability.FileManagement.UserFileService
     *
     * @param { AsyncCallback<Array<string>> } callback - callback 返回audioPicker选择音频后的结果集。
     *     <br>**注意**： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [媒体类uri的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri介绍)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    select(callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过保存模式拉起audioPicker界面（目前拉起的是documentPicker，audioPicker在规划中），
     * 用户可以保存一个或多个音频文件。使用Promise异步回调。
     *
     * @param { AudioSaveOptions } option - audioPicker保存音频文件选项。若无此参数，
     *     则拉起audioPicker界面后需用户自行输入保存的文件名。
     * @returns { Promise<Array<string>> } Promise对象。返回audioPicker保存音频文件后的结果集。 
     *     <br>**注意**： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    save(option?: AudioSaveOptions): Promise<Array<string>>;

    /**
     * 通过保存模式拉起audioPicker界面（目前拉起的是documentPicker，audioPicker在规划中），
     * 用户可以保存一个或多个音频文件。使用callback异步回调。
     *
     * @param { AudioSaveOptions } option - audioPicker保存音频文件选项。
     * @param { AsyncCallback<Array<string>> } callback - callback 返回audioPicker保存音频文件后的结果集。
     *     <br>**注意**： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    save(option: AudioSaveOptions, callback: AsyncCallback<Array<string>>): void;

    /**
     * 通过保存模式拉起audioPicker界面（目前拉起的是documentPicker，audioPicker在规划中），
     * 用户可以保存一个或多个音频文件。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - callback 返回audioPicker保存音频文件后的结果集。
     *     <br>**注意**： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的
     *     [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    save(callback: AsyncCallback<Array<string>>): void;
  }
}

export default picker;