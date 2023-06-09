/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @since 10
 */
declare namespace photoAccessHelper {
  /**
   * Returns an instance of PhotoAccessHelper
   *
   * @permission ohos.permission.READ_IMAGEVIDEO
   * @param { Context } context - Hap context information
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 13900020 - if parameter is invalid
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @since 10
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
   * Enumeration types for different kinds of photos
   *
   * @enum { number } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum PhotoType {
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    IMAGE = 1,
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    VIDEO
  }

  /**
   * Enumeration types for different types of PhotoAsset
   *
   * @enum { number } PhotoSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  enum PhotoSubtype {
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    DEFAULT,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    SCREENSHOT
  }

  /**
   * Photo asset position
   *
   * @enum { number } Photo asset position, which indicates the asset is in local device or cloud
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  enum PositionType {
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    LOCAL = 1 << 0,
    /**
     * Asset exists only in cloud
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    CLOUD = 1 << 1
  }

  /**
   * Indicates the type of photo asset member.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  type MemberType = number | string | boolean;

  /**
   * Provides methods to encapsulate asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface PhotoAsset {
    /**
     * URI of the asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly uri: string;
    /**
     * Photo type, IMAGE or VIDEO
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly photoType: PhotoType;
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly displayName: string;
    /**
     * Return the photo asset member parameter.
     *
     * @param { string } member - The name of the parameter. for example : get(PhotoKeys.URI)
     * @returns { MemberType }
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    get(member: string): MemberType;
    /**
     * Set the photo asset member parameter.
     *
     * @param { string } member - The name of the parameter
     * @param { string } value - The value of the parameter.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     * @example : Set(PhotoKeys.TITLE, "newTitle"), call commitModify after set value
     */
    set(member: string, value: string): void;
    /**
     * Modify meta data of the asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - No value will be returned.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify meta data of the asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Return promise
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    commitModify(): Promise<void>;
    /**
     * Open local asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @param { AsyncCallback<number> } callback - Callback return the fd of the asset.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open local asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @returns { Promise<number> } Return promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    open(mode: string): Promise<number>;
    /**
     * Open asset in read only mode
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<number> } callback - Return the read only fd
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getReadOnlyFd(callback: AsyncCallback<number>): void;
    /**
     * Open asset in read only mode
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Return the read only fd
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getReadOnlyFd(): Promise<number>;
    /**
     * Close the asset is located.
     *
     * @param { number } fd - Fd of the asset which had been opened
     * @param { AsyncCallback<void> } callback - No value will be returned.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Close the asset is located.
     *
     * @param { number } fd - Fd of the asset which had been opened
     * @returns { Promise<void> } Return promise
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    close(fd: number): Promise<void>;
    /**
     * Get thumbnail of the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnail's pixelMap.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Thumbnail's size
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnail's pixelMap.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Thumbnail's size
     * @returns { Promise<image.PixelMap> } Return promise
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Set favorite state for the asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - true: Put the asset into favorite album; false: Remove the asset from favorite album.
     * @param { AsyncCallback<void> } callback - Callback used to return, No value is returned.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    setFavorite(favoriteState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set favorite state for the asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - true: Put the asset into favorite album; false: Remove the asset from favorite album.
     * @returns { Promise<void> } Return promise
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    setFavorite(favoriteState: boolean): Promise<void>;
    /**
     * Set asset hidden state.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @param { AsyncCallback<void> } callback - Return void.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set asset hidden state.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    setHidden(hiddenState: boolean): Promise<void>;
  }

  /**
   * Describes Image, Video TYPE FetchOptions's predicate
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum PhotoKeys {
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    URI = 'uri',
    /**
     * Photo type of the Asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    PHOTO_TYPE = 'media_type',
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DISPLAY_NAME = 'display_name',
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    SIZE = 'size',
    /**
     * Date of the asset creation, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DATE_ADDED = 'date_added',
    /**
     * Modify date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DURATION = 'duration',
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    WIDTH = 'width',
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    HEIGHT = 'height',
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DATE_TAKEN = 'date_taken',
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    ORIENTATION = 'orientation',
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    FAVORITE = 'is_favorite',
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    TITLE = 'title',
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    POSITION = 'position',
    /**
     * Trashed date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    DATE_TRASHED = 'date_trashed',
    /**
     * Hidden state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    HIDDEN = 'hidden'
  }

  /**
   * Describes Album TYPE predicate
   *
   * @enum { string } AlbumKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum AlbumKeys {
    /**
     * Album uri
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    URI = 'uri',
    /**
     * Album name
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    ALBUM_NAME = 'album_name'
  }

  /**
   * Fetch parameters
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface FetchOptions {
    /**
     * Indicates the columns to query.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    fetchColumns: Array<string>;
    /**
     * Predicate to query
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Describe additional operations for creating photo
   *
   * @interface PhotoCreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  interface PhotoCreateOptions {
    /**
     * Subtype of the photo
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Describe additional operations for creating asset
   *
   * @interface CreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface CreateOptions {
    /**
     * Title of the Asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    title?: string;
  }

  /**
   * Implements asset retrieval.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the asset retrieval result.
     *
     * @returns { number } Total number of files.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getCount(): number;
    /**
     * Checks whether the result set points to the last row.
     *
     * @returns { boolean } Whether the asset is the last one.
     * You need to check whether the asset is the last one before calling getNextObject,
     * which returns the next asset only when False is returned for this method.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    isAfterLast(): boolean;
    /**
     * Releases the FetchResult instance and invalidates it. Other methods cannot be called.
     *
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    close(): void;
    /**
     * Obtains the first PhotoAsset in the asset retrieval result. This method uses a callback to return the asset.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the asset in the format of a PhotoAsset instance.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first T in the asset retrieval result. This method uses a promise to return the asset.
     *
     * @returns { Promise<T> } A Promise instance used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next T in the asset retrieval result.
     * This method uses a callback to return the asset.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next asset only when False is returned for isAfterLast().
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next T in the asset retrieval result.
     * This method uses a promise to return the asset.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next asset only when False is returned for isAfterLast().
     *
     * @returns { Promise<T> } A Promise instance used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last T in the asset retrieval result. This method uses a callback to return the asset.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last T in the asset retrieval result. This method uses a promise to return the asset.
     *
     * @returns { Promise<T> } A Promise instance used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains the T with the specified index in the asset retrieval result.
     * This method uses a callback to return the asset.
     *
     * @param { number } index - Index of the asset to obtain.
     * @param { AsyncCallback<T> } callback - Callback used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900020 - if type index is not number
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getObjectByPosition(index: number, callback: AsyncCallback<T>): void;
    /**
     * Obtains the T with the specified index in the asset retrieval result.
     * This method uses a promise to return the asset.
     *
     * @param { number } index - Index of the asset to obtain.
     * @returns { Promise<T> } A Promise instance used to return the asset in the format of a T instance.
     * @throws { BusinessError } 13900020 - if type index is not number
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getObjectByPosition(index: number): Promise<T>;
    /**
     * Obtains all T in the asset retrieval result.
     * This method uses a callback to return the result. After this method is called,
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return a T array.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAllObjects(callback: AsyncCallback<Array<T>>): void;
    /**
     * Obtains all T in the asset retrieval result.
     * This method uses a promise to return the result. that store the selected media resources.
     *
     * @returns { Promise<Array<T>> } A Promise instance used to return a T array.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAllObjects(): Promise<Array<T>>;
  }

  /**
   * Album type.
   *
   * @enum { number } AlbumType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum AlbumType {
    /**
     * Album created by user.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    USER = 0,
    /**
     * Album created by system, which metadata cannot be modified by user.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    SYSTEM = 1024
  }

  /**
   * Album subtype
   *
   * @enum { number } AlbumSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum AlbumSubtype {
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    USER_GENERIC = 1,
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    FAVORITE = 1025,
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    VIDEO,
    /**
     * Hidden album, which assets are marked as hidden.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    TRASH,
    /**
     * Screenshot album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    SCREENSHOT,
    /**
     * Camera album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    CAMERA,
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    ANY = 2147483647
  }

  /**
   * Defines the AbsAlbum.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface AbsAlbum {
    /**
     * Album type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * Album name.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    albumName: string;
    /**
     * Album uri.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly albumUri: string;
    /**
     * Asset count for the album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly count: number;
    /**
     * CoverUri for the album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    readonly coverUri: string;
    /**
     * Obtains files in an album. This method uses an asynchronous callback to return the files.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the files in the format of a FetchResult instance.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * Obtains files in an album. This method uses a promise to return the files.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } A Promise instance used to return the files in the format of a FetchResult instance.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
  }

  /**
   * Defines the album.
   *
   * @interface Album
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface Album extends AbsAlbum {
    /**
     * Modify the meta data for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - No value will be returned.
     * @throws { BusinessError } 13900020 - if attribute to modify is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify the meta data for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Return promise
     * @throws { BusinessError } 13900020 - if attribute to modify is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    commitModify(): Promise<void>;
    /**
     * Add PhotoAssets to the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to add
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Add PhotoAssets to the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to add
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    addAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Remove PhotoAssets from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to remove
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Remove PhotoAssets from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to remove
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    removeAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Recover PhotoAssets from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to recover
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    recoverAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recover PhotoAssets from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to recover
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    recoverAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Delete PhotoAssets permanently from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to delete
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    deleteAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Delete PhotoAssets permanently from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets to delete
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    deleteAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Set coverUri for this album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - The asset uri to set
     * @param { AsyncCallback<void> } callback - Return void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    setCoverUri(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Set coverUri for this album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - The asset uri to set
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    setCoverUri(uri: string): Promise<void>;
  }

  /**
   * Defines the PhotoAccessHelper class and provides functions to access the data in user file storage.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface PhotoAccessHelper {
    /**
     * Query photo, video assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - retrieval options.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback return the FetchResult.
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * Query photo, video assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } A promise instance used to return the files in the format of a FetchResult instance
     * @throws { BusinessError } 13900020 - if type options is not FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - Asset name
     * @param { AsyncCallback<PhotoAsset> } callback - Callback used to return the PhotoAsset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    createAsset(displayName: string, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - Asset name
     * @returns { Promise<PhotoAsset> } A Promise instance used to return the PhotoAsset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if type displayName or albumUri is not string
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    createAsset(displayName: string): Promise<PhotoAsset>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - Asset name
     * @param { PhotoCreateOptions } options - Create operation
     * @returns { Promise<PhotoAsset> } A Promise instance used to return the PhotoAsset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    createAsset(displayName: string, options: PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - Asset name
     * @param { PhotoCreateOptions } options - Photo create operation
     * @param { AsyncCallback<PhotoAsset> } callback - Callback used to return the PhotoAsset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    createAsset(displayName: string, options: PhotoCreateOptions, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * Create asset:
     *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
     *   2. Get WRITE_IMAGEVIDEO permission by ACL;
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Photo asset type
     * @param { string } extension - Asset extension
     * @param { CreateOptions } options - Optional asset create option
     * @param { AsyncCallback<string> } callback - Callback used to return the asset URI
     * @throws { BusinessError } 13900020 - if type createOption is wrong
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void;
    /**
     * Create asset:
     *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
     *   2. Get WRITE_IMAGEVIDEO permission by ACL;
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Photo asset type
     * @param { string } extension - Asset extension
     * @param { AsyncCallback<string> } callback - Callback used to return the asset URI
     * @throws { BusinessError } 13900020 - if type createOption is wrong
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void;
    /**
     * Create asset:
     *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
     *   2. Get WRITE_IMAGEVIDEO permission by ACL;
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Photo asset type
     * @param { string } extension - Asset extension
     * @param { CreateOptions } [options] - Optional asset create option
     * @returns { Promise<string> } A promise instance used to return the asset URI
     * @throws { BusinessError } 13900020 - if type createOption is wrong
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>;
    /**
     * Create a generic user album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @param { AsyncCallback<Album> } callback - Returns the instance of newly created Album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Create a generic user album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @returns { Promise<Album> } Returns the instance of newly created Album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Delete generic user-created albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Delete generic user-created albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the retrieval options and album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubtype } subtype - Album subtype.
     * @param { FetchOptions } options - options to fetch albums
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void;
    /**
     * Obtains albums based on the album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubtype } subtype - Album subtype.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options and album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubtype } subtype - Album subtype.
     * @param { FetchOptions } [options] -options to fetch albums
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Delete assets
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - Uris of assets to be deleted
     * @param { AsyncCallback<void> } callback - No value returned
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    deleteAssets(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Delete assets
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - Uris of assets to be deleted
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    deleteAssets(uriList: Array<string>): Promise<void>;
    /**
     * Turn on monitor for the specified uri.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } uri - PhotoAsset's uri, album's uri or DefaultChangeUri
     * @param { boolean } forChildUris - Monitor the child uris.
     * @param { Callback<ChangeData> } callback - callback function, return the ChangeData to be monitored
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    on(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void;
    /**
     * Turn off monitor for the specified uri.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } uri - PhotoAsset's uri, Album's uri or DefaultChangeUri value
     * @param { Callback<ChangeData> } [callback] - Remove specified callback from monitoring to a specified uri
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    off(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * create a pop-up box to delete photos
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - List of the asset URIs to be deleted
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * create a pop-up box to delete photos
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - List of the asset URIs to be deleted
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    createDeleteRequest(uriList: Array<string>): Promise<void>;
    /**
     * Release PhotoAccessHelper instance
     *
     * @param { AsyncCallback<void> } callback - No value returned
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Release PhotoAccessHelper instance
     *
     * @returns { Promise<void> } Return promise
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    release(): Promise<void>;
  }

  /**
   * NotifyType subtype
   *
   * @enum { number } NotifyType subtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum NotifyType {
    /**
     * Type for add notification of the PhotoAsset or Album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    NOTIFY_ADD,
    /**
     * Type for update notification of the PhotoAsset or Album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    NOTIFY_UPDATE,
    /**
     * Type for remove notification of the PhotoAsset or Album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    NOTIFY_REMOVE,
    /**
     * Type for notification of the PhotoAsset added at an Album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * Type for notification of the PhotoAsset removed at an Album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    NOTIFY_ALBUM_REMOVE_ASSET
  }

  /**
   * DefaultChangeUri subtype
   *
   * @enum { string } DefaultChangeUri subtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  enum DefaultChangeUri {
    /**
     * Uri for default PhotoAsset, use with forDescendant{true}, will recieve all PhotoAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DEFAULT_PHOTO_URI = 'file://media/Photo',
    /**
     * Uri for default Album, use with forDescendant{true}, will recieve all Album's change notifications
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum'
  }

  /**
   * the value of the monitor callback function
   *
   * @interface ChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  interface ChangeData {
    /**
     * the NotifyType of ChangeData
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    type: NotifyType;
    /**
     * all uris of the same NotifyType, could be PhotoAssets' or Albums'
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    uris: Array<string>;
    /**
     * change details of the Album's PhotoAssets when uris is the Album's uri type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    suburis: Array<string>;
  }
}

export default photoAccessHelper;
