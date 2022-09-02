/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';
import Context  from './application/Context';
import image from './@ohos.multimedia.image';

/**
 * @name userfile_manager
 * @since 9
 * @syscap SystemCapability.FileManagement.UserFileManager.Core
 * @import Import userfile_manager from '@ohos.filemanagement.userfile_manager'
 */
declare namespace userfile_manager {
  /**
   * Obtains a UserFileManager instance.
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @import Import userfile_manager from '@ohos.filemanagement.userfile_manager'
   * @FAModelOnly
   * @return Returns a UserFileManager instance if the operation is successful; returns null otherwise.
   */
  function getUserFileMgr(): UserFileManager;
  /**
   * Returns an instance of UserFileManager
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @StageModelOnly
   * @param context hap context information
   * @return Instance of UserFileManager
   */
  function getUserFileMgr(context: Context): UserFileManager;

  /**
   * Enumeration types for different kinds of Media Files
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum MediaType {
    /**
     * File media type
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FILE = 0,
    /**
     * Image media type
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    IMAGE,
    /**
     * Video media type
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    VIDEO,
    /**
     * Audio media type
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    AUDIO
  }

  /**
   * Provides methods to encapsulate file attributes.
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @import Import userfilemgr from '@ohos.filemanagement.userfile_manager'
   */
  interface FileAsset {
    /**
     * URI of the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly uri: string;
    /**
     * Media type, for example, IMAGE, VIDEO, FILE, AUDIO
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly mediaType: MediaType;
    /**
     * Display name (with a file name extension) of the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    displayName: string;
    /**
     * If it is a directory where the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback return the result of isDerectory.
     */
    isDirectory(callback: AsyncCallback<boolean>): void;
    /**
     * If it is a directory where the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    isDirectory():Promise<boolean>;
    /**
     * Modify meta data where the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param callback no value will be returned.
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify meta data where the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     */
    commitModify(): Promise<void>;
    /**
     * Open the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT or ohos.permission.WRITE_MEDIA or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param mode mode for open, for example: rw, r, w.
     * @param callback Callback return the fd of the file.
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT or ohos.permission.WRITE_MEDIA or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param mode mode for open, for example: rw, r, w.
     */
    open(mode: string): Promise<number>;
    /**
     * Close the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fd fd of the file which had been opened
     * @param callback no value will be returned.
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Close the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fd fd of the file which had been opened
     */
    close(fd: number): Promise<void>;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param callback Callback used to return the thumbnail's pixelmap.
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param size thumbnail's size
     * @param callback Callback used to return the thumbnail's pixelmap.
     */
    getThumbnail(size: Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param size thumbnail's size
     */
    getThumbnail(size?: Size): Promise<image.PixelMap>;
    /**
     * Set favorite for the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param isFavorite ture is favorite file, false is not favorite file
     * @param callback Callback used to return, No value is returned.
     */
    favorite(isFavorite: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set favorite for the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param isFavorite ture is favorite file, false is not favorite file
     */
    favorite(isFavorite: boolean): Promise<void>;
    /**
     * If the file is favorite when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return true or false.
     */
    isFavorite(callback: AsyncCallback<boolean>): void;
    /**
     * If the file is favorite when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    isFavorite():Promise<boolean>;
    /**
     * Set trash for the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param isTrash true is trashed file, false is not trashed file
     * @param callback Callback used to return, No value is returned.
     */
    trash(isTrash: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set trash for the file when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param isTrash true is trashed file, false is not trashed file
     */
    trash(isTrash: boolean): Promise<void>;
    /**
     * If the file is in trash when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return true or false.
     */
    isTrash(callback: AsyncCallback<boolean>): void;
    /**
     * If the file is in trash when the file is located.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    isTrash():Promise<boolean>;
  }

  /**
   * Describes MediaFetchOptions's selection
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum FileKey {
    /**
     * File uri
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI = "uri",
    /**
     * Relative Path
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    RELATIVE_PATH = "relative_path",
    /**
     * File name
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME = "display_name",
    /**
     * Date of the file creation
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED = "date_added",
    /**
     * Modify date of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED = "date_modified",
    /**
     * Title of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE = "title",
  }

  /**
   * Describes AUDIO TYPE MediaFetchOptions's predicate
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AudioKey {
    /**
     * File uri
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI = "uri",
    /**
     * Relative Path
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    RELATIVE_PATH = "relative_path",
    /**
     * File name
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME = "display_name",
    /**
     * Date of the file creation
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED = "date_added",
    /**
     * Modify date of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED = "date_modified",
    /**
     * Title of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE = "title",
    /**
     * Artist of the audio file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ARTIST = "artist",
    /**
     * Audio album of the audio file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    AUDIOALBUM = "audio_album",
    /**
     * Duration of the audio and video file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DURATION = "duration",
  }

  /**
    * Describes Image, Video TYPE MediaFetchOptions's predicate
    * @since 9
    * @syscap SystemCapability.FileManagement.UserFileManager.Core
    */
  enum ImageVideoKey {
    /**
     * File uri
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI = "uri",
    /**
     * Relative Path
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    RELATIVE_PATH = "relative_path",
    /**
     * File name
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME = "display_name",
    /**
     * Date of the file creation
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED = "date_added",
    /**
     * Modify date of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED = "date_modified",
    /**
     * Title of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE = "title",
    /**
     * Duration of the audio and video file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DURATION = "duration",
    /**
     * Width of the image file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    WIDTH = "width",
    /**
     * Height of the image file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    HEIGHT = "height",
    /**
     * Date taken of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_TAKEN = "date_taken",
  }

  /**
   * Describes Album TYPE predicate
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AlbumKey {
    /**
     * File uri
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI = "uri",
    /**
     * Relative Path
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    RELATIVE_PATH = "relative_path",
    /**
     * File name
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME = "display_name",
    /**
     * Date of the file creation
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED = "date_added",
    /**
     * Modify date of the file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED = "date_modified",
  }

  /**
   * Fetch parameters applicable on images, videos, audios, albums and other media
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @since 9
   */
  interface MediaFetchOptions {
    /**
     * Fields to retrieve, for example, selections: "media_type =? OR media_type =?".
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    selections: string;
    /**
     * Conditions for retrieval, for example, selectionArgs: [IMAGE, VIDEO].
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    selectionArgs: Array<string>;
  }

  /**
   * Implements file retrieval.
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @import Import userfilemgr from '@ohos.filemanagement.userfile_manager'
   */
  interface FetchFileResult {
    /**
     * Obtains the total number of files in the file retrieval result.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @return Total number of files.
     */
    getCount(): number;
    /**
     * Checks whether the result set points to the last row.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @return Whether the file is the last one.
     * You need to check whether the file is the last one before calling getNextObject,
     * which returns the next file only when True is returned for this method.
     */
    isAfterLast(): boolean;
    /**
     * Releases the FetchFileResult instance and invalidates it. Other methods cannot be called.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    close(): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getFirstObject(callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a promise to return the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getFirstObject(): Promise<FileAsset>;
    /**
     * Obtains the next FileAsset in the file retrieval result.
     * This method uses a callback to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when True is returned for isAfterLast().
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getNextObject(callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the next FileAsset in the file retrieval result.
     * This method uses a promise to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when True is returned for isAfterLast().
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getNextObject(): Promise<FileAsset>;
    /**
     * Obtains the last FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getLastObject(callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the last FileAsset in the file retrieval result. This method uses a promise to return the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getLastObject(): Promise<FileAsset>;
    /**
     * Obtains the FileAsset with the specified index in the file retrieval result.
     * This method uses a callback to return the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param index Index of the file to obtain.
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getPositionObject(index: number, callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the FileAsset with the specified index in the file retrieval result.
     * This method uses a promise to return the file.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param index Index of the file to obtain.
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getPositionObject(index: number): Promise<FileAsset>;
  }

  /**
   * Defines the album.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @since 9
   */
  interface Album {
    /**
     * Album name.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    albumName: string;
    /**
     * Album uri.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly albumUri: string;
    /**
     * Date (timestamp) when the album was last modified.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly dateModified: number;
    /**
     * File count for the album
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly count: number;
    /**
     * Relative path for the album
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly relativePath: string;
    /**
     * coverUri for the album
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly coverUri: string;

    /**
     * Modify the meta data for the album
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param callback, no value will be returned.
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify the meta data for the album
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     */
    commitModify(): Promise<void>;
    /**
     * SObtains files in an album. This method uses an asynchronous callback to return the files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(type: Array<MediaType>, callback: AsyncCallback<FetchFileResult>): void;
    /**
     * SObtains files in an album. This method uses an asynchronous callback to return the files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param options Media retrieval options.
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(type: Array<MediaType>, options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;
    /**
     * Obtains files in an album. This method uses a promise to return the files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param options Media retrieval options.
     * @return A Promise instance used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(type: Array<MediaType>, options?: MediaFetchOptions): Promise<FetchFileResult>;
  }

  /**
   * Enumeration public directory that predefined
   * @since 9
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum DirectoryType {
    /**
     * predefined public directory for files token by Camera.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DIR_CAMERA = 0,
    /**
     * predefined public directory for VIDEO files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DIR_VIDEO,
    /**
     * predefined public directory for IMAGE files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DIR_IMAGE,
    /**
     * predefined public directory for AUDIO files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DIR_AUDIO,
    /**
     * predefined public directory for DOCUMENTS files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DIR_DOCUMENTS,
    /**
     * predefined public directory for DOWNLOAD files.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DIR_DOWNLOAD
  }

  /**
   * Defines the UserFileManager class and provides functions to access the data in user file storage.
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @since 9
   */
  interface UserFileManager {
    /**
     * get system predefined root dir, use to create file asset by relative path
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type, public directory predefined in DirectoryType.
     * @param callback Callback return the FetchFileResult.
     */
    getPublicDirectory(type: DirectoryType, callback: AsyncCallback<string>): void;
    /**
     * get system predefined root dir, use to create file asset by relative path
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type public directory predefined in DirectoryType.
     * @return A promise instance used to return the public directory in the format of string
     */
    getPublicDirectory(type: DirectoryType): Promise<string>;
    /**
     * query all assets just for count & first cover
     * if need all data, getAllObject from FetchFileResult
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param options, Media retrieval options.
     * @param callback, Callback return the FetchFileResult.
     */
    getFileAssets(type: Array<MediaType>, options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;
    /**
     * query all assets just for count & first cover
     * if need all data, getAllObject from FetchFileResult
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param options Media retrieval options.
     * @return A promise instance used to return the files in the format of a FetchFileResult instance
     */
    getFileAssets(type: Array<MediaType>, options: MediaFetchOptions): Promise<FetchFileResult>;
    /**
     * Turn on mornitor the data changes by media type
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type one of 'deviceChange','albumChange','imageChange','audioChange','videoChange','fileChange','remoteFileChange'
     * @param callback no value returned
     */
    on(type: 'deviceChange'|'albumChange'|'imageChange'|'audioChange'|'videoChange'|'fileChange'|'remoteFileChange', callback: Callback<void>): void;
    /**
     * Turn off mornitor the data changes by media type
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type one of 'deviceChange','albumChange','imageChange','audioChange','videoChange','fileChange','remoteFileChange'
     * @param callback no value returned
     */
     off(type: 'deviceChange'|'albumChange'|'imageChange'|'audioChange'|'videoChange'|'fileChange'|'remoteFileChange', callback?: Callback<void>): void;
    /**
     * Create File Asset
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param mediaType mediaType for example:IMAGE, VIDEO, AUDIO, FILE
     * @param displayName file name
     * @param relativePath relative path
     * @param callback Callback used to return the FileAsset
     * @systemapi
     * @since 9
     */
    createAsset(mediaType: MediaType, displayName: string, relativePath: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create File Asset
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param mediaType mediaType for example:IMAGE, VIDEO, AUDIO, FILE
     * @param displayName file name
     * @param relativePath relative path
     * @return A Promise instance used to return the FileAsset
     * @systemapi
     * @since 9
     */
    createAsset(mediaType: MediaType, displayName: string, relativePath: string): Promise<FileAsset>;
    /**
     * Delete File Asset
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param uri FileAsset's URI
     * @param callback no value returned
     * @systemapi
     */
    deleteAsset(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete File Asset
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO or ohos.permission.WRITE_DOCUMENT
     * @param uri, FileAsset's URI
     * @return A Promise instance, no value returned
     * @systemapi
     */
    deleteAsset(uri: string): Promise<void>;
    /**
     * Obtains albums based on the media retrieval options. This method uses an asynchronous callback to return.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param options Media retrieval options.
     * @param callback Callback used to return an album array.
     */
    getAlbums(type: Array<MediaType>, options: MediaFetchOptions, callback: AsyncCallback<Array<Album>>): void;
    /**
     * Obtains albums based on the media retrieval options. This method uses a promise to return the albums.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENT
     * @param option Media retrieval options.
     * @return A Promise instance used to return an album array.
     */
    getAlbums(type: Array<MediaType>, options: MediaFetchOptions): Promise<Array<Album>>;
    /**
     * Obtains system private albums based on the virtual album type. This method uses an asynchronous callback to return.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENTS
     * @param type virtual album type
     * @param callback used to return a virtual album array.
     * @systemapi
     * @since 9
     */
     getPrivateAlbum(type: VirtualAlbumType, callback: AsyncCallback<Array<VirtualAlbum>>): void;
     /**
      * Obtains system private albums based on the virtual album type. This method uses a promise to return.
      * @syscap SystemCapability.FileManagement.UserFileManager.Core
      * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENTS
      * @param type virtual album type
      * @return A Promise instance used to return a virtual album array.
      * @systemapi
      * @since 9
      */
     getPrivateAlbum(type: VirtualAlbumType): Promise<Array<VirtualAlbum>>;
    /**
     * Get Active Peer device information
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @param callback, Callback return the list of the active peer devices' information
     */
    getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get Active Peer device information
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @return Promise used to return the list of the active peer devices' information
     */
    getActivePeers(): Promise<Array<PeerInfo>>;
    /**
     * Get all the peer devices' information
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @param callback Callback return the list of the all the peer devices' information
     */
    getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get all the peer devices' information
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     * @return Promise used to return the list of the all the peer devices' information
     */
    getAllPeers(): Promise<Array<PeerInfo>>;
    /**
     * Release UserFileManager instance
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback no value returned
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Release UserFileManager instance
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    release(): Promise<void>;
  }

  /**
   * thumbnail's size which have width and heigh
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @since 9
   */
  interface Size {
    /**
     * Width of image file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    width: number;
    /**
     * Height of image file
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    height: number;
  }

  /**
   * peer devices' information
   * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
   * @systemapi
   * @since 9
   */
  interface PeerInfo {
    /**
     * Peer device name
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     */
    readonly deviceName: string;
    /**
     * Peer device network id
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     */
    readonly networkId: string;
    /**
     * Peer device online status
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @systemapi
     */
    readonly isOnline: boolean;
  }

  /**
   * Virtual album type
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9
   */
   enum VirtualAlbumType {
    /**
     * System Private Album: Favorite album
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9
     */
    TYPE_FAVORITE,
    /**
     * System Private Album: Trash album
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9
     */
    TYPE_TRASH,
  }
  /**
   * Defines the virtual album
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 9
   */
  interface VirtualAlbum {
    /**
     * Obtains files in an virtual album. This method uses an asynchronous callback to return the files.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENTS
     * @param options Media retrieval options.
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     * @systemapi
     * @since 9
     */
    getFileAssets(type: Array<MediaType>, options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;
    /**
     * Obtains files in an virtual album. This method uses a promise to return the files.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.READ_DOCUMENTS
     * @param options Media retrieval options.
     * @return A Promise instance used to return the files in the format of a FetchFileResult instance.
     * @systemapi
     * @since 9
     */
    getFileAssets(type: Array<MediaType>, options: MediaFetchOptions): Promise<FetchFileResult>;
  }
}

export default userfile_manager;
