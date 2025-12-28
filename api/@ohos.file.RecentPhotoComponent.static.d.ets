'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @file A component which support other applications to select recent photos or videos
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { BaseItemInfo, PickerColorMode } from '@ohos.file.PhotoPickerComponent';
import { Component, Builder } from '@ohos.arkui.component';

/**
 * Declare struct RecentPhotoComponent
 *
 * @struct { RecentPhotoComponent }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct RecentPhotoComponent {
    /**
     * recentPhotoOptions
     *
     * @type { ?RecentPhotoOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    recentPhotoOptions?: RecentPhotoOptions;

    /**
     * Callback when check whether photos or videos exists
     *
     * @type { ?RecentPhotoCheckResultCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback;

    /**
     * Callback when select photos or videos
     *
     * @type { RecentPhotoClickCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onRecentPhotoClick: RecentPhotoClickCallback;

    /**
     * Callback when check whether photos or videos exists and return the recent photo info
     *
     * @type { ?RecentPhotoCheckInfoCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback;

    /**
     * Build function of RecentPhotoComponent
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}

/**
 * The callback of onRecentPhotoCheckResult event
 *
 * @typedef { function } RecentPhotoCheckResultCallback
 * @param { boolean } recentPhotoExists - Does the recent photo exist?
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type RecentPhotoCheckResultCallback = (recentPhotoExists: boolean) => void;

/**
 * The callback of onRecentPhotoClick event
 *
 * @typedef { function } RecentPhotoClickCallback
 * @param { BaseItemInfo } recentPhotoInfo - The item information of recent photo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type RecentPhotoClickCallback = (recentPhotoInfo: BaseItemInfo) => boolean;

/**
 * The callback of onRecentPhotoCheckInfo event
 *
 * @typedef { function } RecentPhotoCheckInfoCallback
 * @param { boolean } recentPhotoExists - Does the recent photo exist?
 * @param { RecentPhotoInfo } info - the recent photo info
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void;

/**
 * RecentPhotoOptions Object
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class RecentPhotoOptions {
    /**
     * Support set period time
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public period?: int;

    /**
     * The Type of the file in the recent photo window.
     *
     * @type { ?photoAccessHelper.PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

    /**
     * PhotoSource
     *
     * @type { ?PhotoSource }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public photoSource?: PhotoSource;

    /**
     * isSupportAutoRefresh
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public isAutoRefreshSupported?: boolean;

    /**
     * color mode of recentPhotoComponent placeholder
     *
     * @type { ?PickerColorMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public colorMode?: PickerColorMode;
}

/**
 * Recent photo info
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class RecentPhotoInfo {
    /**
     * The dateTaken of photos or videos
     *
     * @type { ?long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public dateTaken?: long;

    /**
     * The identifier of photos or videos
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public identifier?: string;
}

/**
 * Enumeration of PhotoSource type
 *
 * @enum { int } PhotoSource
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PhotoSource {
    /**
     * all resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    ALL = 0,
    /**
     * camera resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    CAMERA = 1,
    /**
     * screenshot resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SCREENSHOT = 2
}
