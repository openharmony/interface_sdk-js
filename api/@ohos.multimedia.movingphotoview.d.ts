/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file A component which support applications to show moving photo data 
 * @kit MediaLibraryKit
 */

import photoAccessHelper from './@ohos.file.photoAccessHelper';;

/**
 * Defines the moving photo view options.
 *
 * @interface MovingPhotoViewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface MovingPhotoViewOptions {
    /**
     * data of MovingPhotoView.
     *
     * @type { photoAccessHelper.MovingPhoto }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    data: photoAccessHelper.MovingPhoto;
    /**
     * controller of MovingPhotoView.
     *
     * @type { ?MovingPhotoViewController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    controller?: MovingPhotoViewController;
}
/**
 * Defines the moving photo view interface.
 *
 * @interface MovingPhotoViewInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface MovingPhotoViewInterface {
    /**
     * Set the value.
     *
     * @param { MovingPhotoViewOptions } value
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    (value: MovingPhotoViewOptions): MovingPhotoViewAttribute;
}
/**
 * Defines the moving photo view attribute functions.
 *
 * @extends CommonMethod<MovingPhotoViewAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class MovingPhotoViewAttribute extends CommonMethod<MovingPhotoViewAttribute> {
    /**
     * Called when judging whether the video is muted.
     *
     * @param { boolean } value
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    muted(value: boolean): MovingPhotoViewAttribute;
	/**
     * Called when determining the zoom type of the view.
     *
     * @param { ImageFit } value
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    objectFit(value: ImageFit): MovingPhotoViewAttribute;
    /**
     * Called when the video is played.
     *
     * @param { function } event
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onStart(event: () => void): MovingPhotoViewAttribute;
    /**
     * Called when the video playback stopped.
     *
     * @param { function } event
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onStop(event: () => void): MovingPhotoViewAttribute;
    /**
     * Called when the video playback ends.
     *
     * @param { function } event
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onFinish(event: () => void): MovingPhotoViewAttribute;
    /**
     * Called when playback fails.
     *
     * @param { function } event
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onError(event: () => void): MovingPhotoViewAttribute;
}
/**
 * Defines the MovingPhotoView controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export class MovingPhotoViewController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Start playback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    startPlayback();
    /**
     * Stop playback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    stopPlayback();
}
/**
 * Defines MovingPhotoView Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const MovingPhotoView: MovingPhotoViewInterface;
/**
 * Defines MovingPhotoView Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const MovingPhotoViewInstance: MovingPhotoViewAttribute;
