/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 * @arkts 1.2
 */


import { Resource } from "../../global/resource";
import image from '../../@ohos.multimedia.image';
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { AnimationStatus, FillMode } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface ImageFrameInfo {
    /**
     * Image path
     *
     * @type { string | Resource | image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    src: string | Resource | image.PixelMap;
    /**
     * Image width
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width?: number | string;
    /**
     * Image height
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height?: number | string;
    /**
     * Vertical coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    top?: number | string;
    /**
     * Horizontal coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    left?: number | string;
    /**
     * Playback duration of this image frame, in milliseconds.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    duration?: number;
}
export declare interface ImageAnimatorAttribute extends CommonMethod {
    /**
     * list images
     *
     * @param { Array<ImageFrameInfo> } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    images(value: Array<ImageFrameInfo> | undefined): this;
    /**
     * The default value is the initial state, which is used to control the playback status.
     *
     * @param { AnimationStatus } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    state(value: AnimationStatus | undefined): this;
    /**
     * The unit is millisecond.
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    duration(value: number | undefined): this;
    /**
     * Set the playback sequence.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    reverse(value: boolean | undefined): this;
    /**
     * Sets whether the image size is fixed to the component size.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fixedSize(value: boolean | undefined): this;
    /**
     * Sets the state before and after the animation starts
     *
     * @param { FillMode } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fillMode(value: FillMode | undefined): this;
    /**
     * Played once by default
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    iterations(value: number | undefined): this;
    /**
     * Determines whether to use the system onVisibleAreaChange callback to control pause and play.
     *
     * @param { boolean } monitorInvisibleArea
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    monitorInvisibleArea(monitorInvisibleArea: boolean | undefined): this;
    /**
     * Status callback, which is triggered when the animation starts to play.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onStart(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation pauses.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onPause(event: (() => void) | undefined): this;
    /**
     * Status callback, triggered when the animation is replayed
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onRepeat(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation is canceled.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onCancel(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation playback is complete.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onFinish(event: (() => void) | undefined): this;
    attributeModifier(modifier: AttributeModifier<ImageAnimatorAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIImageAnimatorAttribute extends UICommonMethod {
    /**
     * list images
     *
     * @param { Array<ImageFrameInfo> } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    images(value: Array<ImageFrameInfo> | undefined): this;
    /**
     * The default value is the initial state, which is used to control the playback status.
     *
     * @param { AnimationStatus } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    state(value: AnimationStatus | undefined): this;
    /**
     * The unit is millisecond.
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    duration(value: number | undefined): this;
    /**
     * Set the playback sequence.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    reverse(value: boolean | undefined): this;
    /**
     * Sets whether the image size is fixed to the component size.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fixedSize(value: boolean | undefined): this;
    /**
     * Sets the state before and after the animation starts
     *
     * @param { FillMode } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fillMode(value: FillMode | undefined): this;
    /**
     * Played once by default
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    iterations(value: number | undefined): this;
    /**
     * Determines whether to use the system onVisibleAreaChange callback to control pause and play.
     *
     * @param { boolean } monitorInvisibleArea
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    monitorInvisibleArea(monitorInvisibleArea: boolean | undefined): this;
    /**
     * Status callback, which is triggered when the animation starts to play.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onStart(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation pauses.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onPause(event: (() => void) | undefined): this;
    /**
     * Status callback, triggered when the animation is replayed
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onRepeat(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation is canceled.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onCancel(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation playback is complete.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onFinish(event: (() => void) | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ImageAnimatorAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function ImageAnimator(
    
    @memo
    content_?: () => void,
): UIImageAnimatorAttribute