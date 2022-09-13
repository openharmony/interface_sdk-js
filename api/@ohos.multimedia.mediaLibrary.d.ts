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
import Context from './application/Context';
import image from './@ohos.multimedia.image';

/**
 * @name mediaLibrary
 * @since 6
 * @syscap SystemCapability.Multimedia.MediaLibrary.Core
 * @import import media from '@ohos.multimedia.mediaLibrary'
 * @deprecated since 9
 * @useinstead ohos.filemanagement.UserFileManager
 */
declare namespace mediaLibrary {
  /**
   * Obtains a MediaLibrary instance.
   * @since 6
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @FAModelOnly
   * @return Returns a MediaLibrary instance if the operation is successful; returns null otherwise.
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.getUserFileMgr
   */
  function getMediaLibrary(): MediaLibrary;
  /**
   * Returns an instance of MediaLibrary
   * @since 8
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @StageModelOnly
   * @param context hap context information
   * @return Instance of MediaLibrary
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.getUserFileMgr
   */
  function getMediaLibrary(context: Context): MediaLibrary;

  /**
   * Enumeration types for different kind of Media Files
   * @since 8
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.MediaType
   */
  enum MediaType {
    /**
     * File media type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.MediaType.FILE
     */
    FILE = 0,
    /**
     * Image media type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.MediaType.IMAGE
     */
    IMAGE,
    /**
     * Video media type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.MediaType.VIDEO
     */
    VIDEO,
    /**
     * Audio media type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.MediaType.AUDIO
     */
    AUDIO
  }

  /**
   * Describes media resource options.
   * @since 6
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @deprecated since 9
   */
  interface MediaAssetOption {
    /**
     * URI of the media source.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    src: string;
    /**
     * Multipurpose Internet Mail Extensions (MIME) type of the media.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    mimeType: string;
    /**
     * Relative path for storing media resources.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    relativePath?: string;
  }

  /**
   * Describes media selection options.
   * @since 6
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @deprecated since 9
   */
  interface MediaSelectOption {
    /**
     * Media type, which can be image, video, or media (indicating both image and video).
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    type: 'image' | 'video' | 'media';
    /**
     * Maximum number of media items that can be selected
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    count: number;
  }

  /**
   * Provides methods to encapsulate file attributes.
   * @since 7
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.FileAsset
   */
  interface FileAsset {
    /**
     * File ID.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly id: number;
    /**
     * URI of the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.uri
     */
    readonly uri: string;
    /**
     * MIME type, for example, video/mp4, audio/mp4, or audio/amr-wb.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.mimeType
     */
    readonly mimeType: string;
    /**
     * Media type, for example, IMAGE, VIDEO, FILE, AUDIO 
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly mediaType: MediaType;
    /**
     * Display name (with a file name extension) of the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.displayName
     */
    displayName: string;
    /**
     * File name title (without the file name extension).
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    title: string;
    /**
     * Relative Path of the file.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    relativePath: string;
    /**
     * Parent folder's file_id of the file.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly parent: number;
    /**
     * Data size of the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly size: number;
    /**
     * Date (timestamp) when the file was added.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly dateAdded: number;
    /**
     * Date (timestamp) when the file was modified.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly dateModified: number;
    /**
     * Date (timestamp) when the file was taken.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly dateTaken: number;
    /**
     * Artist of the audio file.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly artist: string;
    /**
     * audioAlbum of the audio file.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly audioAlbum: string;
    /**
     * Display width of the file. This is valid only for videos and images.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly width: number;
    /**
     * Display height of the file. This is valid only for videos and images.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly height: number;
    /**
     * Rotation angle of the file, in degrees.
     * The rotation angle can be 0, 90, 180, or 270 degrees. This is valid only for videos.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    orientation: number;
    /**
     * duration of the audio and video file.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly duration: number;
    /**
     * ID of the album where the file is located.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly albumId: number;
    /**
     * URI of the album where the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly albumUri: string;
    /**
     * Name of the album where the file is located.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly albumName: string;

    /**
     * If it is a directory where the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param callback Callback return the result of isDerectory.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.isDirectory
     */
    isDirectory(callback: AsyncCallback<boolean>): void;
    /**
     * If it is a directory where the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.isDirectory
     */
    isDirectory():Promise<boolean>;
    /**
     * Modify meta data where the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param callback no value will be returned.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.commitModify
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify meta data where the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.commitModify
     */
    commitModify(): Promise<void>;
    /**
     * Open the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA or ohos.permission.WRITE_MEDIA
     * @param mode mode for open, for example: rw, r, w.
     * @param callback Callback return the fd of the file.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.open
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA or ohos.permission.WRITE_MEDIA
     * @param mode mode for open, for example: rw, r, w.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.open
     */
    open(mode: string): Promise<number>;
    /**
     * Close the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA or ohos.permission.WRITE_MEDIA
     * @param fd fd of the file which had been opened
     * @param callback no value will be returned.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.close
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Close the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA or ohos.permission.WRITE_MEDIA
     * @param fd fd of the file which had been opened
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.close
     */
    close(fd: number): Promise<void>;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param callback Callback used to return the thumbnail's pixelmap.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.getThumbnail
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param size thumbnail's size
     * @param callback Callback used to return the thumbnail's pixelmap.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.getThumbnail
     */
    getThumbnail(size: Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param size thumbnail's size
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.getThumbnail
     */
    getThumbnail(size?: Size): Promise<image.PixelMap>;
    /**
     * Set favorite for the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param isFavorite ture is favorite file, false is not favorite file
     * @param callback Callback used to return, No value is returned.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.favorite
     */
    favorite(isFavorite: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set favorite for the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param isFavorite ture is favorite file, false is not favorite file
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.favorite
     */
    favorite(isFavorite: boolean): Promise<void>;
    /**
     * If the file is favorite when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param callback Callback used to return true or false.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.isFavorite
     */
    isFavorite(callback: AsyncCallback<boolean>): void;
    /**
     * If the file is favorite when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.isFavorite
     */
    isFavorite():Promise<boolean>;
    /**
     * Set trash for the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param isTrash true is trashed file, false is not trashed file
     * @param callback Callback used to return, No value is returned.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.trash
     */
    trash(isTrash: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set trash for the file when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param isTrash true is trashed file, false is not trashed file
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.trash
     */
    trash(isTrash: boolean): Promise<void>;
    /**
     * If the file is in trash when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param callback Callback used to return true or false.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.isTrash
     */
    isTrash(callback: AsyncCallback<boolean>): void;
    /**
     * If the file is in trash when the file is located.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileAsset.isTrash
     */
    isTrash():Promise<boolean>;
  }

  /**
   * Describes MediaFetchOptions's selection
   * @since 8
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.FileKey
   */
  enum FileKey {
    /**
     * File ID
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    ID = "file_id",
    /**
     * Relative Path
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileKey.RELATIVE_PATH
     */
    RELATIVE_PATH = "relative_path",
    /**
     * File name
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileKey.DISPLAY_NAME
     */
    DISPLAY_NAME = "display_name",
    /**
     * Parent folder file id
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    PARENT = "parent",
    /**
     * Mime type of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    MIME_TYPE = "mime_type",
    /**
     * Media type of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    MEDIA_TYPE = "media_type",
    /**
     * Size of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    SIZE = "size",
    /**
     * Date of the file creation
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileKey.DATE_ADDED
     */
    DATE_ADDED = "date_added",
    /**
     * Modify date of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileKey.DATE_MODIFIED
     */
    DATE_MODIFIED = "date_modified",
    /**
     * Date taken of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    DATE_TAKEN = "date_taken",
    /**
     * Title of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FileKey.TITLE
     */
    TITLE = "title",
    /**
     * Artist of the audio file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    ARTIST = "artist",
    /**
     * Audio album of the audio file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    AUDIOALBUM = "audio_album",
    /**
     * Duration of the audio and video file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    DURATION = "duration",
    /**
     * Width of the image file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    WIDTH = "width",
    /**
     * Height of the image file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    HEIGHT = "height",
    /**
     * Orientation of the image file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    ORIENTATION = "orientation",
    /**
     * Album id of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    ALBUM_ID = "bucket_id",
    /**
     * Album name of the file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    ALBUM_NAME = "bucket_display_name",
  }

  /**
   * Fetch parameters applicable on images, videos, audios, albums and other media
   * @since 7
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.MediaFetchOptions
   */
  interface MediaFetchOptions {
    /**
     * Fields to retrieve, for example, selections: "media_type =? OR media_type =?".
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.MediaFetchOptions.selections
     */
    selections: string;
    /**
     * Conditions for retrieval, for example, selectionArgs: [IMAGE, VIDEO].
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.MediaFetchOptions.selectionArgs
     */
    selectionArgs: Array<string>;
    /**
     * Sorting criterion of the retrieval results, for example, order: "datetaken DESC,display_name DESC, file_id DESC".
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    order?: string;
    /**
     * uri for retrieval
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    uri?: string;
    /**
     * networkId for retrieval
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    networkId?: string;
    /**
     * extendArgs for retrieval
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    extendArgs?: string;
  }

  /**
   * Implements file retrieval.
   * @since 7
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult
   */
  interface FetchFileResult {
    /**
     * Obtains the total number of files in the file retrieval result.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @return Total number of files.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getCount
     */
    getCount(): number;
    /**
     * Checks whether the result set points to the last row.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @return Whether the file is the last one.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.isAfterLast
     * You need to check whether the file is the last one before calling getNextObject,
     * which returns the next file only when True is returned for this method.
     */
    isAfterLast(): boolean;
    /**
     * Releases the FetchFileResult instance and invalidates it. Other methods cannot be called.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.close
     */
    close(): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getFirstObject
     */
    getFirstObject(callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a promise to return the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getFirstObject
     */
    getFirstObject(): Promise<FileAsset>;
    /**
     * Obtains the next FileAsset in the file retrieval result.
     * This method uses a callback to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when True is returned for isAfterLast().
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getNextObject
     */
    getNextObject(callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the next FileAsset in the file retrieval result.
     * This method uses a promise to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when True is returned for isAfterLast().
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getNextObject
     */
    getNextObject(): Promise<FileAsset>;
    /**
     * Obtains the last FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getLastObject
     */
    getLastObject(callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the last FileAsset in the file retrieval result. This method uses a promise to return the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getLastObject
     */
    getLastObject(): Promise<FileAsset>;
    /**
     * Obtains the FileAsset with the specified index in the file retrieval result.
     * This method uses a callback to return the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param index Index of the file to obtain.
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getPositionObject
     */
    getPositionObject(index: number, callback: AsyncCallback<FileAsset>): void;
    /**
     * Obtains the FileAsset with the specified index in the file retrieval result.
     * This method uses a promise to return the file.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param index Index of the file to obtain.
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.FetchFileResult.getPositionObject
     */
    getPositionObject(index: number): Promise<FileAsset>;
     /**
     * Obtains all FileAssets in the file retrieval result.
     * This method uses a callback to return the result. After this method is called, 
     * close() is automatically called to release the FetchFileResult instance and invalidate it.
     * In this case, other methods cannot be called.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param callback Callback used to return a FileAsset array.
     * @deprecated since 9
     */
    getAllObject(callback: AsyncCallback<Array<FileAsset>>): void;
    /**
     * Obtains all FileAssets in the file retrieval result.
     * This method uses a promise to return the result. that store the selected media resources.
     * close() is automatically called to release the FetchFileResult instance and invalidate it.
     * In this case, other methods cannot be called.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @return A Promise instance used to return a FileAsset array.
     * @deprecated since 9
     */
    getAllObject(): Promise<Array<FileAsset>>;
  }

  /**
   * Defines the album.
   *
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.Album
   */
  interface Album {
    /**
     * Album ID.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     */
    readonly albumId: number;
    /**
     * Album name.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.albumName
     */
    albumName: string;
    /**
     * Album uri.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.albumUri
     */
    readonly albumUri: string;
    /**
     * Date (timestamp) when the album was last modified.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.dateModified
     */
    readonly dateModified: number;
    /**
     * File count for the album
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.count
     */
    readonly count: number;
    /**
     * Relative path for the album
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.relativePath
     */
    readonly relativePath: string;
    /**
     * coverUri for the album
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.coverUri
     */
    readonly coverUri: string;

    /**
     * Modify the meta data for the album
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param callback, no value will be returned.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.commitModify
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify the meta data for the album
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.commitModify
     */
    commitModify(): Promise<void>;
    /**
     * SObtains files in an album. This method uses an asynchronous callback to return the files.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.getFileAssets
     */
    getFileAssets(callback: AsyncCallback<FetchFileResult>): void;
    /**
     * SObtains files in an album. This method uses an asynchronous callback to return the files.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param option Media retrieval options.
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.getFileAssets
     */
    getFileAssets(options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;
    /**
     * Obtains files in an album. This method uses a promise to return the files.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param option Media retrieval options.
     * @return A Promise instance used to return the files in the format of a FetchFileResult instance.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Album.getFileAssets
     */
    getFileAssets(options?: MediaFetchOptions): Promise<FetchFileResult>;
  }

  /**
   * Enumeration public directory that predefined
   * @since 8
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.DirectoryType
   */
  enum DirectoryType {
    /**
     * predefined public directory for files token by Camera.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.DirectoryType.DIR_CAMERA
     */
    DIR_CAMERA = 0,
    /**
     * predefined public directory for VIDEO files.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.DirectoryType.DIR_VIDEO
     */
    DIR_VIDEO,
    /**
     * predefined public directory for IMAGE files.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.DirectoryType.DIR_IMAGE
     */
    DIR_IMAGE,
    /**
     * predefined public directory for AUDIO files.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.DirectoryType.DIR_AUDIO
     */
    DIR_AUDIO,
    /**
     * predefined public directory for DOCUMENTS files.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.DirectoryType.DIR_DOCUMENTS
     */
    DIR_DOCUMENTS,
    /**
     * predefined public directory for DOWNLOAD files.
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.DirectoryType.DIR_DOWNLOAD
     */
    DIR_DOWNLOAD
  }

  /**
   * Defines the MediaLibrary class and provides functions to access the data in media storage.
   *
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.UserFileManager
   */
  interface MediaLibrary {
    /**
     * get system predefined root dir, use to create file asset by relative path
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param type, public directory predefined in DirectoryType.
     * @param callback Callback return the FetchFileResult.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getPublicDirectory
     */
    getPublicDirectory(type: DirectoryType, callback: AsyncCallback<string>): void;
    /**
     * get system predefined root dir, use to create file asset by relative path
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param type public directory predefined in DirectoryType.
     * @return A promise instance used to return the public directory in the format of string
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getPublicDirectory
     */
    getPublicDirectory(type: DirectoryType): Promise<string>;
    /**
     * query all assets just for count & first cover
     * if need all data, getAllObject from FetchFileResult
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param options, Media retrieval options.
     * @param callback, Callback return the FetchFileResult.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getFileAssets
     */
    getFileAssets(options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;
    /**
     * query all assets just for count & first cover
     * if need all data, getAllObject from FetchFileResult
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param options Media retrieval options.
     * @return A promise instance used to return the files in the format of a FetchFileResult instance
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getFileAssets
     */
    getFileAssets(options: MediaFetchOptions): Promise<FetchFileResult>;
    /**
     * Turn on mornitor the data changes by media type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param type one of 'deviceChange','albumChange','imageChange','audioChange','videoChange','fileChange','remoteFileChange'
     * @param callback no value returned
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.on
     */
    on(type: 'deviceChange'|'albumChange'|'imageChange'|'audioChange'|'videoChange'|'fileChange'|'remoteFileChange', callback: Callback<void>): void;
    /**
     * Turn off mornitor the data changes by media type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param type one of 'deviceChange','albumChange','imageChange','audioChange','videoChange','fileChange','remoteFileChange'
     * @param callback no value returned
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.off
     */
     off(type: 'deviceChange'|'albumChange'|'imageChange'|'audioChange'|'videoChange'|'fileChange'|'remoteFileChange', callback?: Callback<void>): void;
    /**
     * Create File Asset
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param mediaType mediaType for example:IMAGE, VIDEO, AUDIO, FILE
     * @param displayName file name
     * @param relativePath relative path
     * @param callback Callback used to return the FileAsset
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.createAsset
     */
    createAsset(mediaType: MediaType, displayName: string, relativePath: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create File Asset
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param mediaType mediaType for example:IMAGE, VIDEO, AUDIO, FILE
     * @param displayName file name
     * @param relativePath relative path
     * @return A Promise instance used to return the FileAsset
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.createAsset
     */
    createAsset(mediaType: MediaType, displayName: string, relativePath: string): Promise<FileAsset>;
    /**
     * Delete File Asset
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param uri FileAsset's URI
     * @param callback no value returned
     * @systemapi
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.deleteAsset
     */
    deleteAsset(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete File Asset
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param uri, FileAsset's URI
     * @return A Promise instance, no value returned
     * @systemapi
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.deleteAsset
     */
    deleteAsset(uri: string): Promise<void>;
    /**
     * Obtains albums based on the media retrieval options. This method uses an asynchronous callback to return.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param option Media retrieval options.
     * @param callback Callback used to return an album array.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getAlbums
     */
    getAlbums(options: MediaFetchOptions, callback: AsyncCallback<Array<Album>>): void;
    /**
     * Obtains albums based on the media retrieval options. This method uses a promise to return the albums.
     * @since 7
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @permission ohos.permission.READ_MEDIA
     * @param option Media retrieval options.
     * @return A Promise instance used to return an album array.
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getAlbums
     */
    getAlbums(options: MediaFetchOptions): Promise<Array<Album>>;
    /**
     * Stores media resources. This method uses an asynchronous callback to return the URI that stores
     * the media resources.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param option Media resource option.
     * @param callback Callback used to return the URI that stores the media resources.
     * @deprecated since 9
     */
    storeMediaAsset(option: MediaAssetOption, callback: AsyncCallback<string>): void;
    /**
     * Stores media resources. This method uses a promise to return the URI that stores the media resources.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param option Media resource option.
     * @return Promise used to return the URI that stores the media resources.
     * @deprecated since 9
     */
    storeMediaAsset(option: MediaAssetOption): Promise<string>;
    /**
     * Starts image preview, with the first image to preview specified. This method uses an asynchronous callback
     * to receive the execution result.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param images List of images to preview.
     * @param index Sequence number of the first image to preview.
     * @param callback Callback used for image preview. No value is returned.
     * @deprecated since 9
     */
    startImagePreview(images: Array<string>, index: number, callback: AsyncCallback<void>): void;
    /**
     * Starts image preview. This method uses an asynchronous callback to receive the execution result.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param images List of images to preview.
     * @param callback Callback used for image preview. No value is returned.
     * @deprecated since 9
     */
    startImagePreview(images: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Starts image preview, with the first image to preview specified.
     * This method uses a promise to return the execution result.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param images List of images to preview.
     * @param index Sequence number of the first image to preview.
     * @return Promise used to return whether the operation is successful.
     * @deprecated since 9
     */
    startImagePreview(images: Array<string>, index?: number): Promise<void>;
    /**
     * Starts media selection. This method uses an asynchronous callback to
     * return the list of URIs that store the selected media resources.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param option Media selection option.
     * @param callback Callback used to return the list of URIs that store the selected media resources.
     * @deprecated since 9
     */
    startMediaSelect(option: MediaSelectOption, callback: AsyncCallback<Array<string>>): void;
    /**
     * Starts media selection. This method uses a promise to return the list of URIs
     * that store the selected media resources.
     * @since 6
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param option Media selection option.
     * @return Promise used to return the list of URIs that store the selected media resources.
     * @deprecated since 9
     */
    startMediaSelect(option: MediaSelectOption): Promise<Array<string>>;
    /**
     * Get Active Peer device information
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @permission ohos.permission.READ_MEDIA
     * @systemapi
     * @param callback, Callback return the list of the active peer devices' information
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getActivePeers
     */
    getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get Active Peer device information
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @permission ohos.permission.READ_MEDIA
     * @systemapi
     * @return Promise used to return the list of the active peer devices' information
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getActivePeers
     */
    getActivePeers(): Promise<Array<PeerInfo>>;
    /**
     * Get all the peer devices' information
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @permission ohos.permission.READ_MEDIA
     * @systemapi
     * @param callback Callback return the list of the all the peer devices' information
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getAllPeers
     */
    getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get all the peer devices' information
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @permission ohos.permission.READ_MEDIA
     * @systemapi
     * @return Promise used to return the list of the all the peer devices' information
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.getAllPeers
     */
    getAllPeers(): Promise<Array<PeerInfo>>;
    /**
     * Release MediaLibrary instance
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @param callback no value returned
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.release
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Release MediaLibrary instance
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.UserFileManager.release
     */
    release(): Promise<void>;
  }

  /**
   * thumbnail's size which have width and heigh
   * @syscap SystemCapability.Multimedia.MediaLibrary.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.Size
   */
  interface Size {
    /**
     * Width of image file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Size.width
     */
    width: number;
    /**
     * Height of image file
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.Core
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.Size.height
     */
    height: number;
  }
  
  /**
   * peer devices' information
   * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.filemanagement.UserFileManager.PeerInfo
   */
  interface PeerInfo {
    /**
     * Peer device name
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.PeerInfo.deviceName
     * @systemapi
     */
    readonly deviceName: string;
    /**
     * Peer device network id
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.PeerInfo.networkId
     * @systemapi
     */
    readonly networkId: string;
    /**
     * Peer device type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @deprecated since 9
     * @systemapi
     */
    readonly deviceType: DeviceType;
    /**
     * Peer device online status
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     * @useinstead ohos.filemanagement.UserFileManager.PeerInfo.isOnline
     */
    readonly isOnline: boolean;
  }

  /**
   * peer device type
   * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
   * @systemapi
   * @since 8
   * @deprecated since 9
   */
  enum DeviceType {
    /**
     * Unknow device type
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_UNKNOWN = 0,
    /**
     * Laptop device
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_LAPTOP,
    /**
     * Phone device
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_PHONE,
    /**
     * Tablet device
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_TABLET,
    /**
     * Watch device
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_WATCH,
    /**
     * Car device
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_CAR,
    /**
     * TV device
     * @since 8
     * @syscap SystemCapability.Multimedia.MediaLibrary.DistributedCore
     * @systemapi
     * @deprecated since 9
     */
    TYPE_TV
  }
}

export default mediaLibrary;
