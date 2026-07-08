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
 * The **userFileManager** module provides user data management capabilities, including accessing and modifying user 
 * media data.
 *
 * @syscap SystemCapability.FileManagement.UserFileManager.Core
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 26.0.0
 * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper
 */
declare namespace userFileManager {
  /**
   * Obtains a **UserFileManager** instance. This instance can be used to access and modify user media data (such as 
   * audio and video assets, images, and documents).
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { UserFileManager } **UserFileManager** instance obtained.
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.getPhotoAccessHelper
   */
  function getUserFileMgr(context: Context): UserFileManager;

  /**
   * Enumerates media file types.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType
   */
  enum FileType {
    /**
     * Image.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType.IMAGE
     */
    IMAGE = 1,
    /**
     * Video.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType.VIDEO
     */
    VIDEO,
    /**
     * Audio.
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
   * Enumerates the [FileAsset]{@link userFileManager.FileAsset} types.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubType
   */
  enum PhotoSubType {
    /**
     * Default (photo) type.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubType.DEFAULT
     */
    DEFAULT,
    /**
     * Screenshots and screen recording files.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubType.SCREENSHOT
     */
    SCREENSHOT,
    /**
     * Photos and videos taken by a camera.
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
   * Enumerates the file location.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType
   */
  enum PositionType {
    /**
     * Stored only on a local device.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType.LOCAL
     */
    LOCAL = 1,
    /**
     * Stored only on the cloud.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PositionType.CLOUD
     */
    CLOUD,
    /**
     * Stored both on a local device and the cloud.
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
   * Represents the type of a file asset member.
   *
   * @unionmember { number } The member is a number.
   * @unionmember { string } The member is a string.
   * @unionmember { boolean } The member is a Boolean value.
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MemberType
   */
  type MemberType = number | string | boolean;

  /**
   * Enumerates the type of changes to observe.
   *
   * @unionmember { 'deviceChange' } Device. The value is fixed at **'deviceChange'**.
   * @unionmember { 'albumChange' } Album. The value is fixed at **'albumChange'**.
   * @unionmember { 'imageChange' } Image. The value is fixed at **'imageChange'**.
   * @unionmember { 'audioChange' } Audio. The value is fixed at **'audioChange'**.
   * @unionmember { 'videoChange' } Video. The value is fixed at **'videoChange'**.
   * @unionmember { 'remoteFileChange' } Remote file. The value is fixed at **'remoteFileChange'**.
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
   * Provides APIs for encapsulating file asset attributes.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset
   */
  interface FileAsset {
    /**
     * Media asset URI, for example, **file://media/Photo/1/IMG_datetime_0001/displayName.jpg**. For details, see 
     * [Media File URI](docroot://file-management/user-file-uri-intro.md#media-file-uri).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.uri
     */
    readonly uri: string;
    /**
     * Type of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.PhotoType
     */
    readonly fileType: FileType;
    /**
     * File name, including the file name extension, to display.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.displayName
     */
    displayName: string;
    /**
     * Obtains the value of a **FileAsset** parameter.
     *
     * @param { string } member - Member parameter name, for example, **ImageVideoKey.DISPLAY_NAME**. You need to set
     *     **PhotoKeys** to be obtained in **fetchColumns** for all attributes except **uri**, **photoType**, and
     *     **displayName**. For example, **fetchColumns: ['title']**.
     * @returns { MemberType } Returns the member parameter.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.get
     */
    get(member: string): MemberType;
    /**
     * Sets a **FileAsset** parameter.
     *
     * @param { string } member - Member parameter name, for example, **ImageVideoKey.DISPLAY_NAME**.
     * @param { string } value - Value to set. Only the values of **DISPLAY_NAME** and **TITLE** can be changed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.set
     * @example : Set(ImageVideoKey.TITLE, "newTitle"), call commitModify after set value
     */
    set(member: string, value: string): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return 
     * the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.commitModify
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.commitModify
     */
    commitModify(): Promise<void>;
    /**
     * Opens this file asset. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The write operations are mutually exclusive. After a write operation is complete, you must call **close** to 
     * > close the file.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or
     *     ohos.permission.WRITE_AUDIO
     * @param { string } mode - Mode of opening the file, for example, **'r'** (read-only), **'w'** (write-only), and
     *     **'rw'** (read-write).
     * @param { AsyncCallback<number> } callback - Callback used to return the file descriptor of the file opened.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.open
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Opens this file asset. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The write operations are mutually exclusive. After a write operation is complete, you must call **close** to 
     * > close the file.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or
     *     ohos.permission.WRITE_AUDIO
     * @param { string } mode - File open mode, which can be **r** (read-only), **w** (write-only), or **rw** (read-
     *     write).
     * @returns { Promise<number> } Promise that returns the file descriptor of the file opened.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.open
     */
    open(mode: string): Promise<number>;
    /**
     * Closes a file. This API uses an asynchronous callback to return the result.
     *
     * @param { number } fd - File descriptor of the file to close.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.close
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Closes this file. This API uses a promise to return the result.
     *
     * @param { number } fd - File descriptor of the file to close.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.fs:fileIo.close
     */
    close(fd: number): Promise<void>;
    /**
     * Obtains the thumbnail of a file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param { image.Size } size - Size of the thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param { image.Size } size - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Promise that returns the PixelMap of the thumbnail.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Favorites or unfavorites a file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { boolean } isFavorite - Whether to favorite or unfavorite the file. The value **true** means to favorite
     *     the file; the value **false** means the opposite.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    favorite(isFavorite: boolean, callback: AsyncCallback<void>): void;
    /**
     * Favorites or unfavorites this file asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param { boolean } isFavorite - Whether to favorite or unfavorite the file. The value **true** means to favorite
     *     the file; the value **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    favorite(isFavorite: boolean): Promise<void>;
    /**
     * Sets a file to hidden state. This API uses an asynchronous callback to return the result.
     * 
     * The private files set to hidden state are located in the private album (in hidden state) and are not open to 
     * third-party applications. After obtaining private files from the private album, users can set **hiddenState** to 
     * **false** to remove them from the private album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to hide the file. The value **true** means to hide the file; the value
     *     **false** means the opposite.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Sets this file asset to the hidden state. This API uses a promise to return the result.
     * 
     * The private files set to hidden state are located in the private album (in hidden state) and are not open to 
     * third-party applications. After obtaining private files from the private album, users can set **hiddenState** to 
     * **false** to remove them from the private album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to hide the file. The value **true** means to hide the file; the value
     *     **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets user comment information of an image or video. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can only be used to set user comment information of an image or video.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set, which cannot exceed 140 characters.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string, callback: AsyncCallback<void>): void;
    /**
     * Sets user comment information of an image or video. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can only be used to set user comment information of an image or video.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set, which cannot exceed 140 characters.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string): Promise<void>;
    /**
     * Obtains the EXIF data from a JPG image and returns a JSON string. This API uses an asynchronous callback to 
     * return the result.
     * 
     * For details about the EXIF tags, see [image.PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     * 
     * | Key Value                                   | Description             |
     * | --------------------------------------- | ----------------- |
     * | BitsPerSample | Number of bits per sample.|
     * | Orientation | Image orientation.|
     * | ImageLength | Image length.|
     * | ImageWidth | Image width.|
     * | GPSLatitude | GPS latitude of the image.|
     * | GPSLongitude | GPS longitude of the image.|
     * | GPSLatitudeRef | Longitude reference, for example, W or E.|
     * | GPSLongitudeRef | Latitude reference, for example, N or S.|
     * | DateTimeOriginal | Shooting time.|
     * | ExposureTime | Exposure time.|
     * | SceneType | Scene type.|
     * | ISOSpeedRatings | ISO sensitivity or speed.|
     * | FNumber | f-number.|
     * | DateTime | Modification time.|
     * | GPSTimeStamp | GPS timestamp.|
     * | GPSDateStamp | GPS date stamp.|
     * | ImageDescription | Image description.|
     * | Make | Manufacturer.|
     * | MakeNote | Manufacturer.|
     * | Model | Model.|
     * | PhotoMode | Photo mode.|
     * | SensitivityType | Sensitivity type.|
     * | StandardOutputSensitivity | Standard output sensitivity.|
     * | RecommendedExposureIndex | Recommended exposure index.|
     * | ApertureValue | Aperture value.|
     * | MeteringMode | Metering mode.|
     * | LightSource | Light source.|
     * | Flash | Flash status.|
     * | FocalLength | Focal length.|
     * | UserComment | User comments.|
     * | PixelXDimension | Pixel X dimension.|
     * | PixelYDimension | Pixel Y dimension.|
     * | WhiteBalance | White balance.|
     * | FocalLengthIn35mmFilm | Focal length in 35 mm film.|
     * | ExposureBiasValue | Exposure compensation.|
     * 
     * > **NOTE**
     * >
     * > This API returns a JSON string that contains EXIF tags. The complete Exif information consists of all_exif and 
     * > [ImageVideoKey]{@link userFileManager.ImageVideoKey}.USER_COMMENT. The two fields need to be passed to 
     * > **fetchColumns**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback that returns the EXIF data, in JSON strings.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getExif
     */
    getExif(callback: AsyncCallback<string>): void;
    /**
     * Obtains the EXIF data from a JPG image and returns a JSON string. This API uses a promise to return the result.
     * 
     * For details about the EXIF tags, see [image.PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     * 
     * | Key Value                                   | Description             |
     * | --------------------------------------- | ----------------- |
     * | BitsPerSample | Number of bits per sample.|
     * | Orientation | Image orientation.|
     * | ImageLength | Image length.|
     * | ImageWidth | Image width.|
     * | GPSLatitude | GPS latitude of the image.|
     * | GPSLongitude | GPS longitude of the image.|
     * | GPSLatitudeRef | Longitude reference, for example, W or E.|
     * | GPSLongitudeRef | Latitude reference, for example, N or S.|
     * | DateTimeOriginal | Shooting time.|
     * | ExposureTime | Exposure time.|
     * | SceneType | Scene type.|
     * | ISOSpeedRatings | ISO sensitivity or speed.|
     * | FNumber | f-number.|
     * | DateTime | Modification time.|
     * | GPSTimeStamp | GPS timestamp.|
     * | GPSDateStamp | GPS date stamp.|
     * | ImageDescription | Image description.|
     * | Make | Manufacturer.|
     * | MakeNote | Manufacturer.|
     * | Model | Model.|
     * | PhotoMode | Photo mode.|
     * | SensitivityType | Sensitivity type.|
     * | StandardOutputSensitivity | Standard output sensitivity.|
     * | RecommendedExposureIndex | Recommended exposure index.|
     * | ApertureValue | Aperture value.|
     * | MeteringMode | Metering mode.|
     * | LightSource | Light source.|
     * | Flash | Flash status.|
     * | FocalLength | Focal length.|
     * | UserComment | User comments.|
     * | PixelXDimension | Pixel X dimension.|
     * | PixelYDimension | Pixel Y dimension.|
     * | WhiteBalance | White balance.|
     * | FocalLengthIn35mmFilm | Focal length in 35 mm film.|
     * | ExposureBiasValue | Exposure compensation.|
     * 
     * > **NOTE**
     * >
     * > This API returns a JSON string that contains EXIF tags. The complete Exif information consists of all_exif and 
     * > [ImageVideoKey]{@link userFileManager.ImageVideoKey}.USER_COMMENT. The two fields need to be passed to 
     * > **fetchColumns**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise that returns the EXIF data, in JSON strings.
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
   * Defines the key information about an audio file.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.picker:picker.AudioViewPicker
   */
  enum AudioKey {
    /**
     * URI of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    URI,
    /**
     * File name displayed.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DISPLAY_NAME,
    /**
     * Date when the file was added. The value is the number of seconds elapsed since the Epoch time (00:00:00 UTC on 
     * January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DATE_ADDED,
    /**
     * Date when the file content (not the file name) was last modified. The value is the number of seconds elapsed 
     * since the Epoch time (00:00:00 UTC on January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DATE_MODIFIED,
    /**
     * Title of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    TITLE,
    /**
     * Author of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    ARTIST,
    /**
     * Audio album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    AUDIOALBUM,
    /**
     * Duration, in ms.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.picker:picker.AudioViewPicker
     */
    DURATION,
    /**
     * Whether the file is added to favorites.
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
   * Defines the key information about an image or video file.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys
   */
  enum ImageVideoKey {
    /**
     * URI of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.URI
     */
    URI,
    /**
     * Type of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.PHOTO_TYPE
     */
    FILE_TYPE,
    /**
     * File name displayed.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DISPLAY_NAME
     */
    DISPLAY_NAME,
    /**
     * Date when the file was added. The value is the number of seconds elapsed since the Epoch time (00:00:00 UTC on 
     * January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DATE_ADDED
     */
    DATE_ADDED,
    /**
     * Date when the file content (not the file name) was last modified. The value is the number of seconds elapsed 
     * since the Epoch time (00:00:00 UTC on January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys#DATE_MODIFIED
     */
    DATE_MODIFIED,
    /**
     * Title of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.TITLE
     */
    TITLE,
    /**
     * Duration, in ms.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DURATION
     */
    DURATION,
    /**
     * Image width, in pixels.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.WIDTH
     */
    WIDTH,
    /**
     * Image height, in pixels.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.HEIGHT
     */
    HEIGHT,
    /**
     * Date when the file (photo) was taken. The value is the number of seconds elapsed since the Epoch time (00:00:00 
     * UTC on January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DATE_TAKEN
     */
    DATE_TAKEN,
    /**
     * Orientation of the image file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.ORIENTATION
     */
    ORIENTATION,
    /**
     * Whether the file is added to favorites.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.FAVORITE
     */
    FAVORITE,
    /**
     * File location type.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.POSITION
     */
    POSITION,
    /**
     * Date when the file was deleted. The value is the number of seconds elapsed since the Epoch time (00:00:00 UTC on 
     * January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.DATE_TRASHED
     */
    DATE_TRASHED,
    /**
     * Whether the file is hidden.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.HIDDEN
     */
    HIDDEN,
    /**
     * User comment information.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys.USER_COMMENT
     */
    USER_COMMENT,
    /**
     * Key for the Ultra Snapshot feature.
     * 
     * This parameter is available only for the system camera, and the key value is defined by the system camera.
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
   * Defines the key album information.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys
   */
  enum AlbumKey {
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.URI
     */
    URI,
    /**
     * Type of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType
     */
    FILE_TYPE,
    /**
     * Name of the album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.ALBUM_NAME
     */
    ALBUM_NAME,
    /**
     * Date when the file was added. The value is the number of seconds elapsed since the Epoch time (00:00:00 UTC on 
     * January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumKeys.DATE_MODIFIED
     */
    DATE_ADDED,
    /**
     * Date when the file content (not the file name) was last modified. The value is the number of seconds elapsed 
     * since the Epoch time (00:00:00 UTC on January 1, 1970).
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
   * Defines the options for fetching file attributes.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions
   */
  interface FetchOptions {
    /**
     * Options for fetching files based on the attributes in columns. If this parameter is left empty, files are fetched
     * by URI, name, and type (the specific field names vary with the file asset or album object) by default. In 
     * addition, an error will be reported if 
     * [get]{@link userFileManager.UserFileManager.getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>)}
     * is called to obtain other attributes of this object. Example:
     * 
     * fetchColumns: ['uri', 'title']
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions.fetchColumns
     */
    fetchColumns: Array<string>;
    /**
     * Predicates that specify the fetch criteria.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions.predicates
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Defines the options for fetching file attributes.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions
   */
  interface AlbumFetchOptions {
    /**
     * Predicates that specify the fetch criteria.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions.predicates
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Defines the options for creating an image or video asset.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoCreateOptions
   */
  interface PhotoCreateOptions {
    /**
     * Subtype of the image or video.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoCreateOptions.subType
     */
    subType?: PhotoSubType;
    /**
     * Key for the Ultra Snapshot feature.
     * 
     * This parameter is available only for the system camera, and the key value is defined by the system camera.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoCreateOptions.cameraShotKey
     */
    cameraShotKey?: string;
  }

  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { number } Returns the total number of files obtained.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getCount
     */
    getCount(): number;
    /**
     * Checks whether the cursor is in the last row of the result set.
     *
     * @returns { boolean } Returns **true** if the cursor is in the last row of the result set; returns **false**
     *     otherwise.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.isAfterLast
     */
    isAfterLast(): boolean;
    /**
     * Releases and invalidates the **FetchFileResult** instance. After this instance is released, the APIs in this 
     * instance cannot be invoked.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.close
     */
    close(): void;
    /**
     * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getFirstObject
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise that returns the first object in the result set.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getFirstObject
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
     * 
     * Before using this API, you must use [isAfterLast()]{@link userFileManager.FetchResult.isAfterLast} to check 
     * whether the current position is the end of the result set.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the next file asset.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getNextObject
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next file asset in the result set. This API uses a promise to return the result.
     * 
     * Before using this API, you must use [isAfterLast()]{@link userFileManager.FetchResult.isAfterLast} to check 
     * whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Promise that returns the next object in the result set.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getNextObject
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getLastObject
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise that returns the last object in the result set.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getLastObject
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from **0**.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 13900020 - if type index is not number
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getObjectByPosition
     */
    getPositionObject(index: number, callback: AsyncCallback<T>): void;
    /**
     * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
     *
     * @param { number } index - Index of the file asset to obtain. The value starts from **0**.
     * @returns { Promise<T> } Promise that returns the file asset obtained.
     * @throws { BusinessError } 13900020 - if type index is not number
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getObjectByPosition
     */
    getPositionObject(index: number): Promise<T>;
    /**
     * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result
     *     set.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getAllObjects
     */
    getAllObject(callback: AsyncCallback<Array<T>>): void;
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Promise that returns an array of all file assets in the result set.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.FetchResult.getAllObjects
     */
    getAllObject(): Promise<Array<T>>;
  }

  /**
   * Enumerates the album types.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType
   */
  enum AlbumType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumType.USER
     */
    USER = 0,
    /**
     * System album.
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
   * Enumerates the album subtypes.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType
   */
  enum AlbumSubType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.USER_GENERIC
     */
    USER_GENERIC = 1,
    /**
     * Favorites.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.FAVORITE
     */
    FAVORITE = 1025,
    /**
     * Video album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.VIDEO
     */
    VIDEO,
    /**
     * Hidden album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.HIDDEN
     */
    HIDDEN,
    /**
     * Trash.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.TRASH
     */
    TRASH,
    /**
     * Album for screenshots and screen recording files.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.SCREENSHOT
     */
    SCREENSHOT,
    /**
     * Album for photos and videos taken by the camera.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.CAMERA
     */
    CAMERA,
    /**
     * Any album.
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
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum
   */
  interface AbsAlbum {
    /**
     * Type of the album to obtain.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumType
     */
    readonly albumType: AlbumType;
    /**
     * Subtype of the album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumSubType
     */
    readonly albumSubType: AlbumSubType;
    /**
     * Name of the album.
     * 
     * > **NOTE**
     * >
     * > The user album is writable, but the system album is not writable. 
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumName
     */
    albumName: string;
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumUri
     */
    readonly albumUri: string;
    /**
     * Time when the album was modified.
     * Unit: ms, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.dateModified
     */
    readonly dateModified: number;
    /**
     * Number of files in the album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.count
     */
    readonly count: number;
    /**
     * URI of the cover file of the album.
     * 
     * > **NOTE**
     * >
     * > The user album is writable, but the system album is not writable.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.coverUri
     */
    coverUri: string;
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<FileAsset>> } callback - Callback used to return the image and video assets
     *     obtained.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.getAssets
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<FileAsset>> } Promise that returns the image and video assets obtained.
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
   * Provides APIs to manage albums.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album
   */
  interface Album extends AbsAlbum {
    /**
     * Commits the modification on the album attributes to the database. This API uses an asynchronous callback to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Commits the modification on the album attributes to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify
     */
    commitModify(): Promise<void>;
    /**
     * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and 
     * the album exist. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image and video assets to add.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets
     */
    addPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and 
     * the album exist. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image and video assets to add.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets
     */
    addPhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Removes image and video assets from an album. The album and file resources must exist. This API uses an 
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image and video assets to remove.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets
     */
    removePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Removes image and video assets from an album. The album and file resources must exist. This API uses a promise to
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image and video assets to remove.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets
     */
    removePhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Recovers image or video assets from the recycle bin. Before the operation, ensure that the image or video assets 
     * exist in the recycle bin. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image or video assets to recover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.recoverAssets
     */
    recoverPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recovers image or video assets from the recycle bin. Before the operation, ensure that the image or video assets 
     * exist in the recycle bin. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image or video assets to recover.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album.recoverAssets
     */
    recoverPhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Deletes image or video assets from the recycle bin. Before the operation, ensure that the image or video assets 
     * exist in the recycle bin. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image or video assets to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets
     */
    deletePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Deletes image or video assets from the recycle bin. Before the operation, ensure that the image or video assets 
     * exist in the recycle bin. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of the image or video assets to delete.
     * @returns { Promise<void> } Promise that returns no value.
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
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper
   */
  interface UserFileManager {
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<FileAsset>> } callback - Callback used to return the image and video assets
     *     obtained.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @returns { Promise<FetchResult<FileAsset>> } Promise that returns the image and video assets obtained.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Creates an image or video asset with the specified file name and URI. This API uses an asynchronous callback to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { string } albumUri - URI of the album where the image or video is located.
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the image or video created.
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
     * Creates an image or video asset with the specified file name. This API uses an asynchronous callback to return 
     * the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the image or video created.
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
     * Creates an image or video asset with the specified file name and album URI. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { string } albumUri - URI of the album where the image or video is located.
     * @returns { Promise<FileAsset> } Promise that returns the created image or video asset.
     * @throws { BusinessError } 13900020 - if type displayName or albumUri is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, albumUri?: string): Promise<FileAsset>;
    /**
     * Creates an image or video asset with the specified file name and options. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } createOption - Options for creating an image or video asset.
     * @returns { Promise<FileAsset> } Promise that returns the created image or video asset.
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset
     */
    createPhotoAsset(displayName: string, createOption: PhotoCreateOptions): Promise<FileAsset>;
    /**
     * Creates an image or video asset with the specified file name and options. This API uses an asynchronous callback 
     * to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } createOption - Options for creating an image or video asset.
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the image or video created.
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
     * Creates an audio asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_AUDIO
     * @param { string } displayName - File name of the audio asset to create.
     * @param { AsyncCallback<FileAsset> } callback - Callback used to return the created audio asset.
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     */
    createAudioAsset(displayName: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Creates an audio asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_AUDIO
     * @param { string } displayName - File name of the audio asset to create.
     * @returns { Promise<FileAsset> } Promise that returns the created audio asset.
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @ohos.file.picker:picker.AudioViewPicker
     */
    createAudioAsset(displayName: string): Promise<FileAsset>;
    /**
     * Obtains image and video albums. This API uses an asynchronous callback to return the result.
     * 
     * This API cannot be used to obtain hidden albums. Use 
     * [getHiddenAlbums]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>)}
     * to obtain hidden albums.
     * 
     * This API will be deprecated. Use 
     * [getAlbums]{@link userFileManager.UserFileManager.getAlbums( type: AlbumType, subType: AlbumSubType, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>> )}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumFetchOptions } options - Options for fetching the albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the albums obtained.
     * @throws { BusinessError } 13900020 - if type options is not AlbumFetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAlbums
     */
    getPhotoAlbums(options: AlbumFetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums. This API uses a promise to return the result.
     * 
     * This API cannot be used to obtain hidden albums. Use 
     * [getHiddenAlbums]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>)}
     * to obtain hidden albums.
     * 
     * This API will be deprecated. Use 
     * [getAlbums]{@link userFileManager.UserFileManager.getAlbums( type: AlbumType, subType: AlbumSubType, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>> )}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumFetchOptions } options - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } Promise that returns the albums obtained.
     * @throws { BusinessError } 13900020 - if type options is not AlbumFetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAlbums
     */
    getPhotoAlbums(options: AlbumFetchOptions): Promise<FetchResult<Album>>;
    /**
     * Creates an album. This API uses an asynchronous callback to return the result.
     * 
     * The album name must meet the following requirements:
     * 
     * - The album name is a string of 1 to 255 characters.
     * - The album name cannot contain any of the following characters:
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - The album name is case-insensitive.
     * - Duplicate album names are not allowed.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @param { AsyncCallback<Album> } callback - Callback used to return the created album instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Creates an album. This API uses a promise to return the result.
     * 
     * The album name must meet the following requirements:
     * 
     * - The album name is a string of 1 to 255 characters.
     * - The album name cannot contain any of the following characters:
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - The album name is case-insensitive.
     * - Duplicate album names are not allowed.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @returns { Promise<Album> } Promise that returns the created album instance.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Deletes user albums. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Deletes user albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return 
     * the result.
     * 
     * This API cannot be used to obtain hidden albums. Use 
     * [getHiddenAlbums]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>)}
     * to obtain hidden albums.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album to obtain.
     * @param { AlbumSubType } subType - Subtype of the album.
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
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
     * Obtains albums by type. This API uses an asynchronous callback to return the result.
     * 
     * This API cannot be used to obtain hidden albums. Use 
     * [getHiddenAlbums]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>)}
     * to obtain hidden albums.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album to obtain.
     * @param { AlbumSubType } subType - Subtype of the album.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * 
     * This API cannot be used to obtain hidden albums. Use 
     * [getHiddenAlbums]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>)}
     * to obtain hidden albums.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album to obtain.
     * @param { AlbumSubType } subType - Subtype of the album.
     * @param { FetchOptions } [options] - Options for fetching the albums. If this parameter is not specified, the
     *     albums are obtained based on the album type by default.
     * @returns { Promise<FetchResult<Album>> } Promise that returns the albums.
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains the system album. This API uses an asynchronous callback to return the result.
     * 
     * This API will be deprecated. Use 
     * [getAlbums]{@link userFileManager.UserFileManager.getAlbums( type: AlbumType, subType: AlbumSubType, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>> )}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PrivateAlbumType } type - Type of the system album to obtain.
     * @param { AsyncCallback<FetchResult<PrivateAlbum>> } callback - Callback used to return the albums obtained.
     * @throws { BusinessError } 13900020 - if type type is not PrivateAlbumType
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getPrivateAlbum(type: PrivateAlbumType, callback: AsyncCallback<FetchResult<PrivateAlbum>>): void;
    /**
     * Obtains the private album. This API uses a promise to return the result.
     * 
     * This API will be deprecated. Use 
     * [getAlbums]{@link userFileManager.UserFileManager.getAlbums( type: AlbumType, subType: AlbumSubType, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>> )}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PrivateAlbumType } type - Type of the system album to obtain.
     * @returns { Promise<FetchResult<PrivateAlbum>> } Promise that returns the albums obtained.
     * @throws { BusinessError } 13900020 - if type type is not PrivateAlbumType
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums
     */
    getPrivateAlbum(type: PrivateAlbumType): Promise<FetchResult<PrivateAlbum>>;
    /**
     * Obtains audio assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_AUDIO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<FileAsset>> } callback - Callback used to return the audio assets obtained.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @ohos.file.picker:picker.AudioViewPicker
     */
    getAudioAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Obtains an audio asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_AUDIO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<FileAsset>> } Promise that returns the audio assets obtained.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @ohos.file.picker:picker.AudioViewPicker
     */
    getAudioAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Deletes a media file. This API uses an asynchronous callback to return the result. The deleted file is moved to 
     * the recycle bin. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO
     *     and ohos.permission.WRITE_AUDIO
     * @param { string } uri - URI of the media file.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 13900020 - if type uri is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Deletes media assets. The deleted assets are moved to the trash. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO
     *     and ohos.permission.WRITE_AUDIO
     * @param { string } uri - URI of the media file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13900020 - if type uri is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    delete(uri: string): Promise<void>;
    /**
     * Obtains the index of an image or video in an album. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string. If it is an empty string, all the media
     *     assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Retrieval options. Only one search condition or sorting mode must be set in
     *     **predicates**. If no value is set or multiple search criteria or sorting modes are set, the API cannot be
     *     called successfully.
     * @param { AsyncCallback<number> } callback - Callback used to return the index obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getPhotoIndex
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<number>): void;
    /**
     * Obtains the index of an image or video in an album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string. If it is an empty string, all the media
     *     assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Retrieval options. Only one search condition or sorting mode must be set in
     *     **predicates**. If no value is set or multiple search criteria or sorting modes are set, the API cannot be
     *     called successfully.
     * @returns { Promise<number> } Promise that returns the index obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getPhotoIndex
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<number>;
    /**
     * Subscribes to changes of the file management library. This API uses a callback to return the result.
     * 
     * This API will be deprecated. Use 
     * [on]{@link userFileManager.UserFileManager.on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>)}
     * instead.
     *
     * @param { ChangeEvent } type - Type of event to subscribe to.
     *     <br>**'deviceChange'**: device change.
     *     <br>**'albumChange'**: album change.
     *     <br>**'imageChange'**: image change.
     *     <br>**'audioChange'**: audio file change.
     *     <br>**'videoChange'**: video file change.
     *     <br>**'remoteFileChange'**: change of the file on a registered device.
     * @param { Callback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.on
     */
    on(type: ChangeEvent, callback: Callback<void>): void;
    /**
     * Unsubscribes from changes of the file management library. This API uses a callback to return the result.
     * 
     * This API will be deprecated. Use 
     * [off]{@link userFileManager.UserFileManager.off(uri: string, callback?: Callback<ChangeData>)} 
     * instead.
     *
     * @param { ChangeEvent } type - Type of event to subscribe to.
     *     <br>**'deviceChange'**: device change.
     *     <br>**'albumChange'**: album change.
     *     <br>**'imageChange'**: image change.
     *     <br>**'audioChange'**: audio file change.
     *     <br>**'videoChange'**: video file change.
     *     <br>**'remoteFileChange'**: change of the file on a registered device.
     * @param { Callback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.off
     */
    off(type: ChangeEvent, callback?: Callback<void>): void;
    /**
     * Registers a listener for the specified URI. This API uses an asynchronous callback to return the result.
     *
     * @param { string } uri - URI of the file asset or album, or
     *     [DefaultChangeUri]{@link userFileManager.DefaultChangeUri}.
     * @param { boolean } forSubUri - Whether to perform fuzzy listening. 
     *     <br>If **uri** is the URI of the album, the
     *     value **true** means to listen for the file change in the album; the value **false** means to listen for the
     *     album change only. If **uri** is the URI of the file asset, there is no difference whether **forSubUri** is
     *     **true** or **false**. If **uri** is **DefaultChangeUri**, the value must be **true**, otherwise, the URI
     *     cannot be found and no message can be received.
     * @param { Callback<ChangeData> } callback - Callback used to return [ChangeData]{@link userFileManager.ChangeData}
     *     . 
     *     <br>Note that different callbacks can be registered for a URI. You can use
     *     [off]{@link userFileManager.UserFileManager.off(uri: string, callback?: Callback<ChangeData>)}
     *     to disable the specified callback or all callbacks for the URI.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.registerChange
     */
    on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>): void;
    /**
     * Unregisters the listener for the specified URI. Multiple callbacks can be registered for a URI for listening. You
     * can use this API to unregister the specified callbacks or all callbacks.
     *
     * @param { string } uri - URI of the file asset or album, or
     *     [DefaultChangeUri]{@link userFileManager.DefaultChangeUri}.
     * @param { Callback<ChangeData> } [callback] - Callback registered by
     *     [on]{@link userFileManager.UserFileManager.on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>)}
     *     . If this parameter is not specified, all listener callbacks registered for the URI will be unregistered. 
     *     <br>Note that the specified callback will not be invoked.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.unRegisterChange
     */
    off(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * Obtains information about online peer devices. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<PeerInfo>> } callback - Callback used to return a list of online peer devices.
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Obtains the information about online peer devices. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<PeerInfo>> } Promise that returns a list of online peer devices.
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getActivePeers(): Promise<Array<PeerInfo>>;
    /**
     * Obtains information about all peer devices. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<PeerInfo>> } callback - Callback used to return a list of online peer devices.
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Obtains the information about all peer devices. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<PeerInfo>> } Promise that returns the information obtained.
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    getAllPeers(): Promise<Array<PeerInfo>>;
    /**
     * Releases this **UserFileManager** instance. This API uses an asynchronous callback to return the result.
     * 
     * Call this API when the APIs in the **UserFileManager** instance are no longer used.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.release
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases this **UserFileManager** instance. This API uses a promise to return the result.
     * 
     * Call this API when the APIs in the **UserFileManager** instance are no longer used.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.release
     */
    release(): Promise<void>;
  }

  /**
   * Enumerates the notification event types.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType
   */
  enum NotifyType {
    /**
     * A file asset or album is added.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_ADD
     */
    NOTIFY_ADD,
    /**
     * A file asset or album is updated.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_UPDATE
     */
    NOTIFY_UPDATE,
    /**
     * A file asset or album is removed.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_REMOVE
     */
    NOTIFY_REMOVE,
    /**
     * A file asset is added to the album.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType.NOTIFY_ALBUM_ADD_ASSET
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * A file asset is removed from the album.
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
   * Enumerates the **DefaultChangeUri** subtypes.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri
   */
  enum DefaultChangeUri {
    /**
     * Default **PhotoAsset** URI. The **PhotoAsset** change notifications are received based on this parameter and 
     * **forSubUri{true}**.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri.DEFAULT_PHOTO_URI
     */
    DEFAULT_PHOTO_URI,
    /**
     * Default album URI. Album change notifications are received based on this parameter and **forSubUri{true}**.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri.DEFAULT_ALBUM_URI
     */
    DEFAULT_ALBUM_URI,
    /**
     * Default **AudioAsset** URI. The **AudioAsset** change notifications are received based on this parameter and 
     * **forSubUri{true}**.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @ohos.file.picker:picker.AudioViewPicker
     */
    DEFAULT_AUDIO_URI
  }

  /**
   * Defines the return value of the listener callback.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData
   */
  interface ChangeData {
    /**
     * Notification type.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData.type
     */
    type: NotifyType;
    /**
     * Array of all file asset or album URIs with the same [NotifyType]{@link userFileManager.NotifyType}.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData.uris
     */
    uris: Array<string>;
    /**
     * URIs of the changed files in the album. The value may be undefined. Check whether the value is undefined before 
     * using it.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 26.0.0
     */
    subUris: Array<string>;
  }

  /**
   * Defines information about a registered device.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   */
  interface PeerInfo {
    /**
     * Name of the registered device.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    readonly deviceName: string;
    /**
     * Network ID of the registered device.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    readonly networkId: string;
    /**
     * Whether the registered device is online. The value **true** means the registered device is online; the value 
     * **false** means the opposite.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     */
    readonly isOnline: boolean;
  }

  /**
   * Enumerates the system album types.
   * 
   * This API will be deprecated. Use [AlbumType]{@link userFileManager.AlbumType} and 
   * [AlbumSubType]{@link userFileManager.AlbumSubType} instead.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubtype
   */
  enum PrivateAlbumType {
    /**
     * Favorites.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.FAVORITE
     */
    TYPE_FAVORITE,
    /**
     * Trash.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.AlbumSubType.TRASH
     */
    TYPE_TRASH
  }

  /**
   * Provides APIs for managing the system albums.
   * 
   * This API will be deprecated. Use [Album]{@link userFileManager.Album} instead.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 26.0.0
   * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.Album
   */
  interface PrivateAlbum extends AbsAlbum {
    /**
     * Deletes a file from the system album. Only the files in the trash can be deleted. This API uses an asynchronous 
     * callback to return the result.
     * 
     * This API will be deprecated. Use 
     * [Album.deletePhotoAssets]{@link userFileManager.Album.deletePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>)}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO
     *     and ohos.permission.WRITE_AUDIO
     * @param { string } uri - File URI.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAlbumsWithUri
     */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Deletes a file from the system album. Only the files in the trash can be deleted. This API uses a promise to 
     * return the result.
     * 
     * This API will be deprecated. Use 
     * [Album.deletePhotoAssets]{@link userFileManager.Album.deletePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>)}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO
     *     and ohos.permission.WRITE_AUDIO
     * @param { string } uri - File URI.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAlbumsWithUri
     */
    delete(uri: string): Promise<void>;
    /**
     * Recovers a file in the system album. Only the files in the trash can be recovered. This API uses an asynchronous 
     * callback to return the result.
     * 
     * This API will be deprecated. Use 
     * [Album.recoverPhotoAssets]{@link userFileManager.Album.recoverPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>)}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO
     *     and ohos.permission.WRITE_AUDIO
     * @param { string } uri - File URI.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 26.0.0
     * @useinstead @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.recoverAssetsWithUri
     */
    recover(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Recovers a file in the system album. Only the files in the trash can be recovered. This API uses a promise to 
     * return the result.
     * 
     * This API will be deprecated. Use 
     * [Album.recoverPhotoAssets]{@link userFileManager.Album.recoverPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>)}
     * instead.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO
     *     and ohos.permission.WRITE_AUDIO
     * @param { string } uri - File URI.
     * @returns { Promise<void> } Promise that returns no value.
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
