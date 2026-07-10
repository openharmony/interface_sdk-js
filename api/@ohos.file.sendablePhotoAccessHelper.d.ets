/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */

import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import lang from '../arkts/@arkts.lang';
import photoAccessHelper from './@ohos.file.photoAccessHelper';

/**
 * The module provides APIs for album management, including creating an album and accessing and modifying media data in 
 * an album, based on a [Sendable](docroot://arkts-utils/arkts-sendable.md) object.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendablePhotoAccessHelper {
  /**
   * Obtains a PhotoAccessHelper instance, which can be used for accessing and modifying media files in an album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } PhotoAccessHelper instance obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
   * Obtains a PhotoAccessHelper instance for the specified user, letting you access and modify media files in an album.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Context of the ability instance.
   * @param { number } userId - ID of the user.
   * @returns { PhotoAccessHelper } PhotoAccessHelper instance obtained.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @StageModelOnly
   * @since 19 dynamiconly
   */
  function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper;

  /**
   * Enumerates media file types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const enum PhotoType {
    /**
     * Image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    IMAGE = 1,
    /**
     * Video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    VIDEO = 2
  }

  /**
   * Enumerates the [PhotoAsset]{@link sendablePhotoAccessHelper.PhotoAsset} types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamiconly
   */
  enum PhotoSubtype {
    /**
     * Photo, which is the default type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    DEFAULT = 0,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    SCREENSHOT = 1,
    /**
     * Moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    MOVING_PHOTO = 3,
    /**
     * Burst photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    BURST = 4,
  }

  /**
   * Enumerates the dynamic range types of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 14 dynamiconly
   */
  enum DynamicRangeType {
    /**
     * Standard dynamic range (SDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamiconly
     */
    SDR = 0,
    /**
     * High dynamic range (HDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamiconly
     */
    HDR = 1
  }

  /**
   * Ability to access thumbnail
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum ThumbnailVisibility {
    /**
     * Unable to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    INVISIBLE = 0,
    /**
     * able to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    VISIBLE = 1
  }

  /**
   * Photo asset position
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum PositionType {
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LOCAL = 1 << 0,
    /**
     * Asset exists only in cloud
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    CLOUD = 1 << 1
  }

  /**
   * Enumeration of moving photo effect mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum MovingPhotoEffectMode {
    /**
     * Default
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    DEFAULT = 0,

    /**
     * Bounce play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    BOUNCE_PLAY = 1,

    /**
     * Loop play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LOOP_PLAY = 2,

    /**
     * Long exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LONG_EXPOSURE = 3,

    /**
     * Multi exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    MULTI_EXPOSURE = 4,

    /**
     * Cinema graph
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    CINEMA_GRAPH = 5,

    /**
     * Image only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    IMAGE_ONLY = 10
  }

  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PhotoAsset extends lang.ISendable {
    /**
     * uri of the asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly uri: string;
    /**
     * Photo type, image or video
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly photoType: PhotoType;
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly displayName: string;
    /**
     * Obtains a **PhotoAsset** member parameter.
     *
     * @param { string } member - Name of the member parameter to obtain. 
     *     <br>Except **'uri'**, **'media_type'**, **'subtype'**, and **'display_name'**, you must pass in
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys} in **fetchColumns**. For example,
     *     to obtain the title, pass in **fetchColumns: ['title']**.
     * @returns { photoAccessHelper.MemberType } **PhotoAsset** member parameter obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    get(member: string): photoAccessHelper.MemberType;
    /**
     * Sets a **PhotoAsset** member parameter.
     *
     * @param { string } member - Name of the parameter to set, for example,
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}.TITLE. The string length ranges
     *     from 1 to 255.
     * @param { string } value - Value to set. Only the value of
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}.TITLE can be changed. The title
     *     must meet the following requirements:
     *     <br>- It must not contain a file name extension.
     *     <br>- The string length ranges from 1 to 255. (The asset file name is in the format of title + file name 
     *     extension.)
     *     <br>- It must not contain any invalid characters, which are:\ / : * ? " ' ` < > | { } [ ]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
     */
    set(member: string, value: string): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    commitModify(): Promise<void>;
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Promise used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Obtains analysis data. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Smart analysis type.
     * @returns { Promise<string> } Promise used to return the analysis result obtained.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    getAnalysisData(analysisType: photoAccessHelper.AnalysisType): Promise<string>;
    /**
     * Opens the source file and returns the FD. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Promise used to return the FD obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    requestSource(): Promise<number>;
    /**
     * Converts a Sendable PhotoAsset object to a non-Sendable PhotoAsset object.
     *
     * @returns { photoAccessHelper.PhotoAsset } [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper} of
     *     the non-Sendable type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    convertToPhotoAsset(): photoAccessHelper.PhotoAsset;
  }

  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface FetchResult<T> extends lang.ISendable {
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { number } Total number of files obtained.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getCount(): number;
    /**
     * Checks whether the cursor is in the last row of the result set.
     *
     * @returns { boolean } Returns **true** if the cursor is in the last row of the result set; returns **false**
     *     otherwise.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    isAfterLast(): boolean;
    /**
     * Obtains the first asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise used to return the first object in the result set.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next asset in the result set. This API uses a promise to return the result.
     * 
     * Before using this API, you must use [isAfterLast()]{@link sendablePhotoAccessHelper.FetchResult.isAfterLast} to 
     * check whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Promise used to return the next object in the result set.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise used to return the last object in the result set.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains the asset with the given index in the result set. This API uses a promise to return the result.
     *
     * @param { number } index - Index of the asset to obtain. The value starts from **0**.
     * @returns { Promise<T> } Promise used to return the asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getObjectByPosition(index: number): Promise<T>;
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Promise used to return all the assets in the result set.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAllObjects(): Promise<Array<T>>;
    /**
     * Closes this FetchResult instance to invalidate it. After this instance is closed, the APIs in this instance 
     * cannot be invoked.
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    close(): void;
  }

  /**
   * Enumerates the album types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  const enum AlbumType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    USER = 0,
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    SYSTEM = 1024,
    /**
     * Smart analysis album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SMART = 4096
  }

  /**
   * Enumerate the album subtypes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  const enum AlbumSubtype {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    USER_GENERIC = 1,
    /**
     * Favorites.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    FAVORITE = 1025,
    /**
     * Video album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    VIDEO,
    /**
     * Hidden album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIDDEN,
    /**
     * Trash. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    TRASH,
    /**
     * Album for screenshots and screen recording files. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SCREENSHOT,
    /**
     * Album for photos and videos taken by the camera. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    CAMERA,
    /**
     * Photo album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    IMAGE = 1031,
    /**
     * Source album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SOURCE_GENERIC = 2049,
    /**
     * Classified album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    CLASSIFY = 4097,
    /**
     * Geographic location album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * City album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GEOGRAPHY_CITY,
    /**
     * Shooting mode album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SHOOTING_MODE,
    /**
     * Portrait album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    PORTRAIT,
    /**
     * Group photo album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GROUP_PHOTO,
    /**
     * Highlights album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIGHLIGHT = 4104,
    /**
     * Highlights suggestion album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIGHLIGHT_SUGGESTIONS,
    /**
     * Any album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    ANY = 2147483647
  }

  /**
   * Defines the abstract interface of albums.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface AbsAlbum extends lang.ISendable {
    /**
     * Album type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * Album name.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    albumName: string;
    /**
     * Album uri.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumUri: string;
    /**
     * Number of assets in the album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly count: number;
    /**
     * Cover uri for the album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly coverUri: string;
    /**
     * Obtains media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the media assets obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Fetch shared photo assets in an album.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * Provides APIs to manage albums.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface Album extends AbsAlbum {
    /**
     * Number of image assets in the album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly imageCount?: number;
    /**
     * Number of video assets in the album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly videoCount?: number;
    /**
     * Commits the modification on the album attributes to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    commitModify(): Promise<void>;
    /**
     * Converts this Sendable album to a non-Sendable album.
     *
     * @returns { photoAccessHelper.Album } Album of the non-Sendable type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    convertToPhotoAlbum(): photoAccessHelper.Album;
    /**
     * Obtains the face identifier on the cover of a portrait album or group photo album. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise used to return **tag_id** of the portrait album, **group_tag** of the group
     *     photo album, or an empty string if no face identifier is found.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamiconly
     */
    getFaceId(): Promise<string>;
  }

  /**
   * Defines the shared photo asset
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  interface SharedPhotoAsset extends lang.ISendable {
    /**
     * File id of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    fileId: number;
    /**
     * URI of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    uri: string;
    /**
     * Path data of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    data: string;
    /**
     * Media type of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    mediaType: PhotoType;
    /**
     * Display name of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    displayName: string;
    /**
     * Size of photo asset
     * Unit: Byte, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    size: number;
    /**
     * Added date of photo asset
     * Unit: ms, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateAdded: number;
    /**
     * Modify date of photo asset
     * Unit: ms, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateModified: number;
    /**
     * Duration of video photo asset
     * Unit: ms, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    duration: number;
    /**
     * Width of photo asset
     * Unit: px, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    width: number;
    /**
     * Height of photo asset
     * Unit: px, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    height: number;
    /**
     * DateTaken of photo asset
     * Unit: ms, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTaken: number;
    /**
     * Orientation of photo asset
     * Unit: deg, The value must be an integer within [0,359].
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    orientation: number;
    /**
     * Favorite state of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    isFavorite: boolean;
    /**
     * Title of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    title: string;
    /**
     * Position of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    position: PositionType;
    /**
     * Trashed date of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTrashed: number;
    /**
     * Hidden state of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    hidden: boolean;
    /**
     * User comment info of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    userComment: string;
    /**
     * Camera shot key of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    cameraShotKey: string;
    /**
     * The year of the file created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateYear: string;
    /**
     * The month of the file created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateMonth: string;
    /**
     * The day of the file created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateDay: string;
    /**
     * Pending state of the asset, true means asset is pending
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    pending: boolean;
    /**
     * Added date of photo asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateAddedMs: number;
    /**
     * Modified time of the asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateModifiedMs: number;
    /**
     * Trashed time of the asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTrashedMs: number;
    /**
     * Subtype of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    subtype: PhotoSubtype;
    /**
     * Effect mode of moving photo
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * Dynamic range type of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * Ready state of thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailReady: boolean;
    /**
     * Width and height information of lcd picture
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    lcdSize: string;
    /**
     * Width and height information of thumbnail picture
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thmSize: string;
    /**
     * modified time of thumbnail status
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailModifiedMs: number;
    /**
     * visibility of thumbnails
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailVisible: ThumbnailVisibility;
  }

  /**
   * Helper functions to access photos and albums.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PhotoAccessHelper extends lang.ISendable {
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the media assets obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Obtains resources of burst photos. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - Universally Unique Identifier (UUID) of a group of burst photos, that is,
     *     **BURST_KEY** of [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}. The string
     *     contains 36 bytes.
     * @param { photoAccessHelper.FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Creates an asset with the specified file name. This API uses a promise to return the result.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > |
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the asset to create.
     * @returns { Promise<PhotoAsset> } Promise used to return the created asset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument.
     * @throws { BusinessError } 14000001 - Invalid display name.
     * @throws { BusinessError } 14000011 - Internal system error.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    createAsset(displayName: string): Promise<PhotoAsset>;
    /**
     * Creates an asset with the specified file name and options. This API uses a promise to return the result.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > |
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the asset to create.
     * @param { PhotoCreateOptions } options - Options for creating the asset.
     * @returns { Promise<PhotoAsset> } Promise used to return the created asset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument.
     * @throws { BusinessError } 14000001 - Invalid display name.
     * @throws { BusinessError } 14000011 - Internal system error.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options. This API uses a 
     * promise to return the result.
     * 
     * If you do not have the **ohos.permission.WRITE_IMAGEVIDEO** permission, you can create a media asset by using a 
     * security component. For details, see 
     * [Saving Media Assets](docroot://media/medialibrary/photoAccessHelper-savebutton.md).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be **IMAGE** or **VIDEO**.
     * @param { string } extension - File name extension, for example, **'jpg'**. The string length ranges from 1 to 255
     *     .
     * @param { CreateOptions } [options] - Options for creating the media asset, for example, **{title: 'testPhoto'}**.
     *     <br>The file name must not contain any invalid characters.
     *     <br>Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > | 
     *     <br>For API versions 10 to 17, the following characters  are considered 
     *     invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     * @returns { Promise<string> } Promise used to return the URI of the created media asset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>;
    /**
     * Obtains albums based on the specified options. This API uses a promise to return the result.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - Retrieval options.
     * @returns { Promise<FetchResult<Album>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } [options] - Retrieval options. If this parameter is not specified, the albums are
     *     obtained based on the album type by default.
     * @returns { Promise<FetchResult<Album>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>;
    /**
     * Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { FetchOptions } [options] - Options for retrieving the albums. If this parameter is not specified, the
     *     albums are retrieved based on the display mode.
     * @returns { Promise<FetchResult<Album>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>;
    /**
     * Releases the **PhotoAccessHelper** instance. Call this method when the APIs of the **PhotoAccessHelper** instance
     * are no longer used. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
    /**
     * Fetch shared photo assets.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>;
    /**
     * Converts the **ValuesBucket** record to a **PhotoAsset** object.
     *
     * @param { photoAccessHelper.ValuesBucket[] } assetsData - Array of asset records.
     *     <br>Each element in the array contains the column name and value of the asset.
     *     <br>The array can contain a maximum of 500 elements.
     *     <br>Each element in the array must contain the following asset column information: **file_id**, **data**,
     *     **display_name**, **media_type**, and **subtype**.
     * @returns { Promise<PhotoAsset[]> } Promise used to return the PhotoAsset object array (which may be empty).
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Invalid value type in ValuesBucket;
     *     <br>2. Missing required column in ValuesBucket;
     *     <br>3. Array size exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 
     *     <br>1. Database corrupted; 
     *     <br>2. The file system is abnormal; 
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>;
  }
}

export default sendablePhotoAccessHelper;