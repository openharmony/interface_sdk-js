/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit CoreFileKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import image from './@ohos.multimedia.image';
import dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * @namespace userFileManager
 * @syscap SystemCapability.FileManagement.UserFileManager.Core
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 26.0.0
 * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper
 */
declare namespace userFileManager {
  /**
   * Returns an instance of UserFileManager
   *
   * @param { Context } context - Hap context information
   * @returns { UserFileManager } Instance of UserFileManager
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.getPhotoAccessHelper
   */
  function getUserFileMgr(context: Context): UserFileManager;

  /**
   * Enumeration types for different kinds of Files
   *
   * @enum { number } FileType
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType
   */
  enum FileType {
    /**
     * Image file type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.IMAGE
     */
    IMAGE = 1,
    /**
     * Video file type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.VIDEO
     */
    VIDEO,
    /**
     * Audio file type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    AUDIO
  }

  /**
   * Enumeration types for different types of FileAsset
   *
   * @enum { number } PhotoSubType
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubType
   */
  enum PhotoSubType {
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubType.DEFAULT
     */
    DEFAULT,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubType.SCREENSHOT
     */
    SCREENSHOT,
    /**
     * Camera Photo Type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.SOURCE_GENERIC
     */
    CAMERA
  }

  /**
   * File position
   *
   * @enum { number } File position, which indicates the file is on local device or cloud
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType
   */
  enum PositionType {
    /**
     * File exists only on local device
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType.LOCAL
     */
    LOCAL = 1,
    /**
     * File exists only on cloud
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType.CLOUD
     */
    CLOUD,
    /**
     * File exists on both local and cloud
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType.LOCAL_AND_CLOUD
     */
    BOTH
  }

  /**
   * Indicates the type of file asset member.
   *
   * @typedef { number | string | boolean } MemberType
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MemberType
   */
  type MemberType = number | string | boolean;

  /**
   * Indicates the type of notify event.
   *
   * @typedef { 'deviceChange' | 'albumChange' | 'imageChange' | 'audioChange' | 'videoChange' | 'remoteFileChange' } ChangeEvent
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData
   */
  type ChangeEvent =
    'deviceChange'
    | 'albumChange'
    | 'imageChange'
    | 'audioChange'
    | 'videoChange'
    | 'remoteFileChange';

  /**
   * Provides methods to encapsulate file attributes.
   *
   * @interface FileAsset
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset
   */
  interface FileAsset {
    /**
     * URI of the file.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.uri
     */
    readonly uri: string;
    /**
     * File type, for example, IMAGE, VIDEO, AUDIO
     *
     * @type { FileType }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.PhotoType
     */
    readonly fileType: FileType;
    /**
     * Display name (with a file name extension) of the file.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.displayName
     */
    displayName: string;
    /**
     * Return the fileAsset member parameter.
     *
     * @param { string } member - The name of the parameter. for example : get(ImageVideoKey.URI)
     * @returns { MemberType }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.get
     */
    get(member: string): MemberType;
    /**
     * Set the fileAsset member parameter.
     *
     * @param { string } member - The name of the parameter
     * @param { string } value - The value of the parameter.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.set
     * @example : Set(ImageVideoKey.TITLE, "newTitle"), call commitModify after set value
     */
    set(member: string, value: string): void;
    /**
     * Modify meta data where the file is located.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { AsyncCallback<void> } callback - No value will be returned.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.commitModify
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify meta data where the file is located.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @returns { Promise<void> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.commitModify
     */
    commitModify(): Promise<void>;
    /**
     * Open local file.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @param { AsyncCallback<number> } callback - Callback return the fd of the file.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.open
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open local file.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @returns { Promise<number> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.open
     */
    open(mode: string): Promise<number>;
    /**
     * Close the file is located.
     *
     * @param { number } fd - Fd of the file which had been opened
     * @param { AsyncCallback<void> } callback - No value will be returned.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.close
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Close the file is located.
     *
     * @param { number } fd - Fd of the file which had been opened
     * @returns { Promise<void> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.close
     */
    close(fd: number): Promise<void>;
    /**
     * Get thumbnail of the file when the file is located.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnail's pixelMap.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param { image.Size } size - Thumbnail's size
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnail's pixelMap.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param { image.Size } size - Thumbnail's size
     * @returns { Promise<image.PixelMap> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Set favorite for the file when the file is located.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { boolean } isFavorite - True is favorite file, false is not favorite file
     * @param { AsyncCallback<void> } callback - Callback used to return, No value is returned.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    favorite(isFavorite: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set favorite for the file when the file is located.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { boolean } isFavorite - isFavorite True is favorite file, false is not favorite file
     * @returns { Promise<void> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    favorite(isFavorite: boolean): Promise<void>;
    /**
     * Set file hidden state.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @param { AsyncCallback<void> } callback - Return void.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set file hidden state.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean): Promise<void>;
    /**
     * Set user comment info to the asset.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - user comment info
     * @param { AsyncCallback<void> } callback - Returns void.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string, callback: AsyncCallback<void>): void;
    /**
     * Set user comment info to the asset.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - user comment info
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string): Promise<void>;
    /**
     * Get exif info of the asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Returns exif info into a json string
     * @throws { BusinessError } 202 - Called by non-system application.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getExif
     */
    getExif(callback: AsyncCallback<string>): void;
    /**
     * Get exif info of the asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns exif info into a json string
     * @throws { BusinessError } 202 - Called by non-system application.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getExif
     */
    getExif(): Promise<string>;
  }

  /**
   * Describes AUDIO TYPE FetchOptions's predicate
   *
   * @enum { string } AudioKey
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.picker:picker.AudioViewPicker
   */
  enum AudioKey {
    /**
     * File uri, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    URI,
    /**
     * File name
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DISPLAY_NAME,
    /**
     * Date of the file creation, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DATE_ADDED,
    /**
     * Modify date of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DATE_MODIFIED,
    /**
     * Title of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    TITLE,
    /**
     * Artist of the audio file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    ARTIST,
    /**
     * Audio album of the audio file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    AUDIOALBUM,
    /**
     * Duration of the audio file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DURATION,
    /**
     * Favorite state of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    FAVORITE
  }

  /**
   * Describes Image, Video TYPE FetchOptions's predicate
   *
   * @enum { string } ImageVideoKey
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys
   */
  enum ImageVideoKey {
    /**
     * File uri, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.URI
     */
    URI,
    /**
     * File type of the Asset, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.PHOTO_TYPE
     */
    FILE_TYPE,
    /**
     * File name
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DISPLAY_NAME
     */
    DISPLAY_NAME,
    /**
     * Date of the file creation, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DATE_ADDED
     */
    DATE_ADDED,
    /**
     * Modify date of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys#DATE_MODIFIED
     */
    DATE_MODIFIED,
    /**
     * Title of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.TITLE
     */
    TITLE,
    /**
     * Duration of the audio and video file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DURATION
     */
    DURATION,
    /**
     * Width of the image file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.WIDTH
     */
    WIDTH,
    /**
     * Height of the image file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.HEIGHT
     */
    HEIGHT,
    /**
     * Date taken of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DATE_TAKEN
     */
    DATE_TAKEN,
    /**
     * Orientation of the image file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.ORIENTATION
     */
    ORIENTATION,
    /**
     * Favorite state of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.FAVORITE
     */
    FAVORITE,
    /**
     * File position, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.POSITION
     */
    POSITION,
    /**
     * Trashed date of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DATE_TRASHED
     */
    DATE_TRASHED,
    /**
     * Hidden state of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.HIDDEN
     */
    HIDDEN,
    /**
     * User comment info
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.USER_COMMENT
     */
    USER_COMMENT,
    /**
     * Camera shot key
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.CAMERA_SHOT_KEY
     */
    CAMERA_SHOT_KEY
  }

  /**
   * Describes Album TYPE predicate
   *
   * @enum { string } AlbumKey
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys
   */
  enum AlbumKey {
    /**
     * Album uri
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.URI
     */
    URI,
    /**
     * File type of the Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType
     */
    FILE_TYPE,
    /**
     * Album name
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.ALBUM_NAME
     */
    ALBUM_NAME,
    /**
     * Date of the Album creation
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.DATE_MODIFIED
     */
    DATE_ADDED,
    /**
     * Modify date of the Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.DATE_MODIFIED
     */
    DATE_MODIFIED
  }

  /**
   * Fetch parameters
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions
   */
  interface FetchOptions {
    /**
     * Indicates the columns to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions.fetchColumns
     */
    fetchColumns: Array<string>;
    /**
     * Predicate to query
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions.predicates
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Fetch parameters
   *
   * @interface AlbumFetchOptions
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions
   */
  interface AlbumFetchOptions {
    /**
     * Predicate to query
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions.predicates
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Describe additional operations for creating photo
   *
   * @interface PhotoCreateOptions
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoCreateOptions
   */
  interface PhotoCreateOptions {
    /**
     * SubType of the photo
     *
     * @type { ?PhotoSubType }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoCreateOptions.subType
     */
    subType?: PhotoSubType;
    /**
     * Camera shot key
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoCreateOptions.cameraShotKey
     */
    cameraShotKey?: string;
  }

  /**
   * Implements file retrieval.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the file retrieval result.
     *
     * @returns { number } Total number of files.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getCount
     */
    getCount(): number;
    /**
     * Checks whether the result set points to the last row.
     *
     * @returns { boolean } Whether the file is the last one.
     * You need to check whether the file is the last one before calling getNextObject,
     * which returns the next file only when False is returned for this method.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.isAfterLast
     */
    isAfterLast(): boolean;
    /**
     * Releases the FetchResult instance and invalidates it. Other methods cannot be called.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.close
     */
    close(): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the file in the format of a FileAsset instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getFirstObject
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first T in the file retrieval result. This method uses a promise to return the file.
     *
     * @returns { Promise<T> } A Promise instance used to return the file in the format of a T instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getFirstObject
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next T in the file retrieval result.
     * This method uses a callback to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when False is returned for isAfterLast().
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the file in the format of a T instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getNextObject
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next T in the file retrieval result.
     * This method uses a promise to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when False is returned for isAfterLast().
     *
     * @returns { Promise<T> } A Promise instance used to return the file in the format of a T instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getNextObject
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last T in the file retrieval result. This method uses a callback to return the file.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the file in the format of a T instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getLastObject
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last T in the file retrieval result. This method uses a promise to return the file.
     *
     * @returns { Promise<T> } A Promise instance used to return the file in the format of a T instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getLastObject
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains the T with the specified index in the file retrieval result.
     * This method uses a callback to return the file.
     *
     * @param { number } index - Index of the file to obtain.
     * @param { AsyncCallback<T> } callback - Callback used to return the file in the format of a T instance.
     * @throws { BusinessError } 13900020 - if type index is not number
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getObjectByPosition
     */
    getPositionObject(index: number, callback: AsyncCallback<T>): void;
    /**
     * Obtains the T with the specified index in the file retrieval result.
     * This method uses a promise to return the file.
     *
     * @param { number } index - Index of the file to obtain.
     * @returns { Promise<T> } A Promise instance used to return the file in the format of a T instance.
     * @throws { BusinessError } 13900020 - if type index is not number
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getObjectByPosition
     */
    getPositionObject(index: number): Promise<T>;
    /**
     * Obtains all T in the file retrieval result.
     * This method uses a callback to return the result. After this method is called,
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return a T array.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getAllObjects
     */
    getAllObject(callback: AsyncCallback<Array<T>>): void;
    /**
     * Obtains all T in the file retrieval result.
     * This method uses a promise to return the result. that store the selected media resources.
     *
     * @returns { Promise<Array<T>> } A Promise instance used to return a T array.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getAllObjects
     */
    getAllObject(): Promise<Array<T>>;
  }

  /**
   * Album type.
   *
   * @enum { number } AlbumType
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType
   */
  enum AlbumType {
    /**
     * Album created by user.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType.USER
     */
    USER = 0,
    /**
     * Album created by system, which metadata cannot be modified by user.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType.SYSTEM
     */
    SYSTEM = 1024
  }

  /**
   * Album subtype
   *
   * @enum { number } AlbumSubType
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType
   */
  enum AlbumSubType {
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.USER_GENERIC
     */
    USER_GENERIC = 1,
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.FAVORITE
     */
    FAVORITE = 1025,
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.VIDEO
     */
    VIDEO,
    /**
     * Hidden album, which assets are marked as hidden.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.HIDDEN
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.TRASH
     */
    TRASH,
    /**
     * Screenshot album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.SCREENSHOT
     */
    SCREENSHOT,
    /**
     * Camera album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.CAMERA
     */
    CAMERA,
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.ANY
     */
    ANY = 2147483647
  }

  /**
   * Defines the AbsAlbum.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum
   */
  interface AbsAlbum {
    /**
     * Album type
     *
     * @type { AlbumType }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumType
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @type { AlbumSubType }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumSubType
     */
    readonly albumSubType: AlbumSubType;
    /**
     * Album name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumName
     */
    albumName: string;
    /**
     * Album uri.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumUri
     */
    readonly albumUri: string;
    /**
     * Date (timestamp) when the album was last modified.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.dateModified
     */
    readonly dateModified: number;
    /**
     * File count for the album
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.count
     */
    readonly count: number;
    /**
     * CoverUri for the album
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.coverUri
     */
    coverUri: string;
    /**
     * Obtains files in an album. This method uses an asynchronous callback to return the files.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<FileAsset>> } callback - Callback used to return the files in the format of a FetchResult instance.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.getAssets
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Obtains files in an album. This method uses a promise to return the files.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<FileAsset>> } A Promise instance used to return the files in the format of a FetchResult instance.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.getAssets
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
  }

  /**
   * Defines the album.
   *
   * @interface Album
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album
   */
  interface Album extends AbsAlbum {
    /**
     * Modify the meta data for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - No value will be returned.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify the meta data for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify
     */
    commitModify(): Promise<void>;
    /**
     * Add PhotoAssets to the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to add
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets
     */
    addPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Add PhotoAssets to the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to add
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets
     */
    addPhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Remove PhotoAssets from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to remove
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets
     */
    removePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Remove PhotoAssets from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to remove
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets
     */
    removePhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Recover PhotoAssets from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to recover
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.recoverAssets
     */
    recoverPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recover PhotoAssets from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to recover
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.recoverAssets
     */
    recoverPhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Delete PhotoAssets permanently from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to delete
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets
     */
    deletePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Delete PhotoAssets permanently from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to delete
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets
     */
    deletePhotoAssets(assets: Array<FileAsset>): Promise<void>;
  }

  /**
   * Defines the UserFileManager class and provides functions to access the data in user file storage.
   *
   * @interface UserFileManager
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper
   */
  interface UserFileManager {
    /**
     * Query photo, video assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - retrieval options.
     * @param { AsyncCallback<FetchResult<FileAsset>> } callback - Callback return the FetchResult.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Query photo, video assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<FileAsset>> } A promise instance used to return the files in the format of a FetchResult instance
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name
     * @param { string } albumUri - Asset will put into the album.
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName or albumUri is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, albumUri: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name
     * @param { string } albumUri - Album uri is optional, PhotoAssets will put into the default album without albumUri
     * @returns { Promise<FileAsset> } A Promise instance used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName or albumUri is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, albumUri?: string): Promise<FileAsset>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name
     * @param { PhotoCreateOptions } createOption - Create operation
     * @returns { Promise<FileAsset> } A Promise instance used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, createOption: PhotoCreateOptions): Promise<FileAsset>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name
     * @param { PhotoCreateOptions } createOption - Photo create operation
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, createOption: PhotoCreateOptions, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Audio Asset
     *
     * @permission ohos.permission.WRITE_AUDIO
     * @param { string } displayName - File name
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     */
    createAudioAsset(displayName: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Audio Asset
     *
     * @permission ohos.permission.WRITE_AUDIO
     * @param { string } displayName - File name
     * @returns { Promise<FileAsset> } A Promise instance used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    createAudioAsset(displayName: string): Promise<FileAsset>;
    /**
     * Obtains albums based on the retrieval options. This method uses an asynchronous callback to return.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumFetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return an album array.
     * @throws { BusinessError } 13900020 - if type options is not AlbumFetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAlbums
     */
    getPhotoAlbums(options: AlbumFetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options. This method uses a promise to return the albums.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumFetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<Album>> } A Promise instance used to return an album array.
     * @throws { BusinessError } 13900020 - if type options is not AlbumFetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAlbums
     */
    getPhotoAlbums(options: AlbumFetchOptions): Promise<FetchResult<Album>>;
    /**
     * Create a generic user album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @param { AsyncCallback<Album> } callback - Returns the instance of newly created Album
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Create a generic user album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @returns { Promise<Album> } Returns the instance of newly created Album
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Delete generic user-created albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @param { AsyncCallback<void> } callback - Returns void
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Delete generic user-created albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @returns { Promise<void> } Returns the promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the retrieval options and album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { FetchOptions } options - options to fetch albums
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getAlbums(
      type: AlbumType,
      subType: AlbumSubType,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void;
    /**
     * Obtains albums based on the album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options and album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { FetchOptions } [options] -options to fetch albums
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains system private albums based on the private album type. This method uses an asynchronous callback to return.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PrivateAlbumType } type - Private album type
     * @param { AsyncCallback<FetchResult<PrivateAlbum>> } callback - Used to return a private album FetchResult.
     * @throws { BusinessError } 13900020 - if type type is not PrivateAlbumType
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getPrivateAlbum(type: PrivateAlbumType, callback: AsyncCallback<FetchResult<PrivateAlbum>>): void;
    /**
     * Obtains system private albums based on the private album type. This method uses a promise to return.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PrivateAlbumType } type - Private album type
     * @returns { Promise<FetchResult<PrivateAlbum>> } A Promise instance used to return a private album FetchResult.
     * @throws { BusinessError } 13900020 - if type type is not PrivateAlbumType
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getPrivateAlbum(type: PrivateAlbumType): Promise<FetchResult<PrivateAlbum>>;
    /**
     * Query audio assets
     *
     * @permission ohos.permission.READ_AUDIO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<FileAsset>> } callback - Callback return the FetchResult.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    getAudioAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Query audio assets
     *
     * @permission ohos.permission.READ_AUDIO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<FileAsset>> } A promise instance used to return the files in the format of a FetchResult instance
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    getAudioAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Delete Asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param { string } uri - Uri of FileAsset
     * @param { AsyncCallback<void> } callback - No value returned
     * @throws { BusinessError } 13900020 - if type uri is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete Asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param { string } uri - Uri of FileAsset
     * @returns { Promise<void> } A Promise instance, no value returned
     * @throws { BusinessError } 13900020 - if type uri is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    delete(uri: string): Promise<void>;
    /**
     * Get the index of the asset in the album
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - The photo asset uri.
     * @param { string } albumUri - The album uri.
     * @param { FetchOptions } options - fetch options
     * @param { AsyncCallback<number> } callback - Returns the index of the asset in the album
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.getPhotoIndex
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<number>): void;
    /**
     * Get the index of the asset in the album
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - The photo asset uri.
     * @param { string } albumUri - The album uri.
     * @param { FetchOptions } options - fetch options
     * @returns { Promise<number> } - Returns the index of the asset in the album
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getPhotoIndex
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<number>;
    /**
     * Turn on monitor the data changes
     *
     * @param { ChangeEvent } type - One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange'
     * @param { Callback<void> } callback - No value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.on
     */
    on(type: ChangeEvent, callback: Callback<void>): void;
    /**
     * Turn off monitor the data changes
     *
     * @param { ChangeEvent } type - One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange'
     * @param { Callback<void> } callback - No value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.off
     */
    off(type: ChangeEvent, callback?: Callback<void>): void;
    /**
     * Turn on monitor for the specified uri.
     *
     * @param { string } uri - FileAsset's uri, album's uri or DefaultChangeUri
     * @param { boolean } forSubUri - Monitor the sub uri.
     * @param { Callback<ChangeData> } callback - callback function, return the ChangeData to be monitored
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.registerChange
     */
    on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>): void;
    /**
     * Turn off monitor for the specified uri.
     *
     * @param { string } uri - FileAsset's uri, Album's uri or DefaultChangeUri value
     * @param { Callback<ChangeData> } [callback] - Remove specified callback from monitoring to a specified uri
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.unRegisterChange
     */
    off(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * Get Active Peer device information
     *
     * @param { AsyncCallback<Array<PeerInfo>> } callback - Callback return the list of the active peer devices' information
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get Active Peer device information
     *
     * @returns { Promise<Array<PeerInfo>> } Promise used to return the list of the active peer devices' information
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getActivePeers(): Promise<Array<PeerInfo>>;
    /**
     * Get all the peer devices' information
     *
     * @param { AsyncCallback<Array<PeerInfo>> } callback - Callback return the list of the all the peer devices' information
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get all the peer devices' information
     *
     * @returns { Promise<Array<PeerInfo>> } Promise used to return the list of the all the peer devices' information
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getAllPeers(): Promise<Array<PeerInfo>>;
    /**
     * Release UserFileManager instance
     *
     * @param { AsyncCallback<void> } callback - No value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.release
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Release UserFileManager instance
     *
     * @returns { Promise<void> } Return promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.release
     */
    release(): Promise<void>;
  }

  /**
   * NotifyType subtype
   *
   * @enum { number } NotifyType subtype
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType
   */
  enum NotifyType {
    /**
     * Type for add notification of the FileAsset or Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_ADD
     */
    NOTIFY_ADD,
    /**
     * Type for update notification of the FileAsset or Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_UPDATE
     */
    NOTIFY_UPDATE,
    /**
     * Type for remove notification of the FileAsset or Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_REMOVE
     */
    NOTIFY_REMOVE,
    /**
     * Type for notification of the FileAsset added at an Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_ALBUM_ADD_ASSET
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * Type for notification of the FileAsset removed at an Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_ALBUM_REMOVE_ASSET
     */
    NOTIFY_ALBUM_REMOVE_ASSET
  }

  /**
   * DefaultChangeUri subtype
   *
   * @enum { string } DefaultChangeUri subtype
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri
   */
  enum DefaultChangeUri {
    /**
     * Uri for default PhotoAsset, use with forDescendant{true}, will recieve all PhotoAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri.DEFAULT_PHOTO_URI
     */
    DEFAULT_PHOTO_URI,
    /**
     * Uri for default Album, use with forDescendant{true}, will recieve all Album's change notifications
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri.DEFAULT_ALBUM_URI
     */
    DEFAULT_ALBUM_URI,
    /**
     * Uri for default AudioAsset, use with forDescendant{true}, will recieve all AudioAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DEFAULT_AUDIO_URI
  }

  /**
   * the value of the monitor callback function
   *
   * @interface ChangeData
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData
   */
  interface ChangeData {
    /**
     * the NotifyType of ChangeData
     * 
     * @type { NotifyType }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData.type
     */
    type: NotifyType;
    /**
     * all uris of the same NotifyType, could be FileAssets' or Albums'
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData.uris
     */
    uris: Array<string>;
    /**
     * change details of the Album's FileAssets when uris is the Album's uri type
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     */
    subUris: Array<string>;
  }

  /**
   * Peer devices' information
   *
   * @interface PeerInfo
   * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   */
  interface PeerInfo {
    /**
     * Peer device name
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    readonly deviceName: string;
    /**
     * Peer device network id
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    readonly networkId: string;
    /**
     * Peer device online status
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    readonly isOnline: boolean;
  }

  /**
   * Private album type
   *
   * @enum { string } PrivateAlbumType
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubtype
   */
  enum PrivateAlbumType {
    /**
     * System Private Album: Favorite album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FAVORITE
     */
    TYPE_FAVORITE,
    /**
     * System Private Album: Trash album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.TRASH
     */
    TYPE_TRASH
  }

  /**
   * Defines the private album
   *
   * @interface PrivateAlbum
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album
   */
  interface PrivateAlbum extends AbsAlbum {
    /**
     * Delete asset permanently from Trash bin, only support the Trash album
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param { string } uri - uri of asset
     * @param { AsyncCallback<void> } callback - No value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAlbumsWithUri
     */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete asset permanently from Trash bin, only support the Trash album
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param { string } uri - Uri of asset
     * @returns { Promise<void> } A Promise instance, no value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAlbumsWithUri
     */
    delete(uri: string): Promise<void>;
    /**
     * Recover asset from Trash bin, only support the Trash album
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param { string } uri - Uri of asset
     * @param { AsyncCallback<void> } callback - No value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.recoverAssetsWithUri
     */
    recover(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Recover asset from Trash bin, only support the Trash album
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param { string } uri - Uri of asset
     * @returns { Promise<void> } A Promise instance, no value returned
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.recoverAssetsWithUri
     */
    recover(uri: string): Promise<void>;
  }
}

export default userFileManager;
