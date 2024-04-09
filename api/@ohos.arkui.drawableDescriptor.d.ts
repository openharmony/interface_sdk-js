/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 */

import image from './@ohos.multimedia.image';

/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
export class DrawableDescriptor {
  /**
   * Creates a new DrawableDescriptor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  constructor();

  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap } Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap } Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  getPixelMap(): image.PixelMap;
}

/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
export class LayeredDrawableDescriptor extends DrawableDescriptor {
  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  getForeground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  getBackground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  getMask(): DrawableDescriptor;


  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  static getMaskClipPath(): string;
}

/**
 * Animation control options
 *
 * @interface AnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface AnimationOptions {
  /**
   * The duration of animation playback once.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  duration?: number;
  /**
   * Animation playback times.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  iterations?: number;
}

/**
 * Define the data structure for PixelMap animations.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class AnimatedDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new AnimatedDrawableDescriptor.
   *
   * @param { Array<image.PixelMap> } pixelMaps - PixelMap List.
   * @param { AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions);
}