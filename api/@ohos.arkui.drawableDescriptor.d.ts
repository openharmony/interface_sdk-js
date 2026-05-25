/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
import drawing from './@ohos.graphics.drawing';

/**
 * The result of loading image.
 *
 * @typedef DrawableDescriptorLoadedResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
export interface DrawableDescriptorLoadedResult {
  /**
   * The width of the image, in px.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  imageWidth: number
  /**
   * The height of the image, in px.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  imageHeight: number
}

/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class DrawableDescriptor {
  /**
   * Creates a new DrawableDescriptor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   */
  constructor();

  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap } Return the PixelMap of the calling DrawableDescriptor object.
   * @throws { BusinessError } 111002 - The native memory referenced by 
   *     the drawableDescriptor has been released. [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getPixelMap(): image.PixelMap;

  /**
   * Synchronously loads image and return loading result.
   *
   * @returns { DrawableDescriptorLoadedResult } The image loading result.
   * @throws { BusinessError } 111001 - resource loading failed. [since 21]
   * @throws { BusinessError } 111002 - The native memory referenced by 
   *     the drawableDescriptor has been released. [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 21]
   * @atomicservice [since 21]
   * @since 21 dynamic
   */
  loadSync(): DrawableDescriptorLoadedResult;

  /**
   * Asynchronously loads image and return loading result.
   *
   * @returns { Promise<DrawableDescriptorLoadedResult> } The image loading result.
   * @throws { BusinessError } 111001 - resource loading failed. [since 21]
   * @throws { BusinessError } 111002 - The native memory referenced by 
   *     the drawableDescriptor has been released. [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 21]
   * @atomicservice [since 21]
   * @since 21 dynamic
   */
  load(): Promise<DrawableDescriptorLoadedResult>;

  /**
   * Release the DrawableDescriptor object. After relase, any method call that
   *     Access to the object's internal data will fail.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  release(): void;
  /**
   * Checks whether the DrawableDescriptor is released. If so, then any method call that
   *     accesses the object's internal data will fail.
   *
   * @returns { boolean } Return true if the DrawableDescriptor object has been released, or false if not.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isReleased(): boolean;

  /**
   * Redraw the DrawableDescriptor. Does nothing if the DrawableDescriptor is not bound to any component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  invalidate(): void;
}

/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class LayeredDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new LayeredDrawableDescriptor.
   *
   * @param { DrawableDescriptor } [foreground] - Indicates the foreground option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [background] - Indicates the background option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [mask] - Indicates the mask option to create LayeredDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Creates a new LayeredDrawableDescriptor.
   *
   * @param { DrawableDescriptor } [foreground] - Indicates the foreground option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [background] - Indicates the background option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [mask] - Indicates the mask option to create LayeredDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  constructor(
    foreground?: DrawableDescriptor,
    background?: DrawableDescriptor,
    mask?: DrawableDescriptor
  );

  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of foreground.
   * @throws { BusinessError } 111002 - The native memory referenced by 
   *     the drawableDescriptor has been released. [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getForeground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of background.
   * @throws { BusinessError } 111002 - The native memory referenced by 
   *     the drawableDescriptor has been released. [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getBackground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of mask.
   * @throws { BusinessError } 111002 - The native memory referenced by 
   *     the drawableDescriptor has been released. [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getMask(): DrawableDescriptor;

  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static getMaskClipPath(): string;

  /**
   * Set the composition mode.
   *
   * @param { drawing.BlendMode } mode - Indicates the composition mode to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setBlendMode(mode: drawing.BlendMode): void;
}

/**
 * Use the PixelMapDrawableDescriptor class to get the resource of pixelmap or resource descriptor information.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Use the PixelMapDrawableDescriptor class to get the resource of pixelmap or resource descriptor information.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export class PixelMapDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new PixelMapDrawableDescriptor.
   * @param { image.PixelMap } src - Indicates the resource to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Creates a new PixelMapDrawableDescriptor.
   * @param { image.PixelMap } src - Indicates the resource to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  constructor(src?: image.PixelMap);

  /**
   * Creates a new PixelMapDrawableDescriptor.
   *
   * @param { image.PixelMap | ResourceStr } [src] - Pixelmap or ResourceStr to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(src?: image.PixelMap | ResourceStr);
}

/**
 * Animation stop mode.
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
export enum AnimationStopMode {
  /**
   * First frame.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  FIRST_FRAME = 0,
  /**
   * Last frame.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  LAST_FRAME = 1
}

/**
 * Animation control options
 *
 * @interface AnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AnimationOptions {
  /**
   * The duration of animation playback once.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;
  /**
   * Animation playback times.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iterations?: number;
  /**
   * Animation frames duration of playback once.
   *
   * @type { ?Array<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  frameDurations?: Array<number>;
  /**
   * Auto play animated images, default value is true.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  autoPlay?: boolean;
  /**
   * Mode in which animation stops.
   * 
   * @type { ?AnimationStopMode }
   * @default AnimationStopMode.FIRST_FRAME
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  stopMode?: AnimationStopMode;
}

/**
 * Define the data structure for PixelMap animations.
 *
 * @interface AnimationController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
export interface AnimationController {
  /**
   * Start animation playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly 
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  start(): void;

  /**
   * Stop animation playback, and reset to first frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  stop(): void;

  /**
   * Pause animation playback, and keep it to the current frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  pause(): void;

  /**
   * Resume animation playback from the current frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  resume(): void;

  /**
   * Get animation status of the current component.
   *
   * @returns { AnimationStatus } Return the status of animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  getStatus(): AnimationStatus;
}

/**
 * Define the data structure for PixelMap animations.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class AnimatedDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new AnimatedDrawableDescriptor.
   *
   * @param { Array<image.PixelMap> } pixelMaps - PixelMap List.
   * @param { AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * Creates a new AnimatedDrawableDescriptor.
   *
   * @param { ResourceStr | Array<image.PixelMap> } src - animated images or local resource.
   * @param { AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  constructor(src: ResourceStr | Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * Get the animation controller of the component based on the component id.
   *
   * @param { string } [id] - component id.
   * @returns { AnimationController | undefined } Return the component of animation controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  getAnimationController(id?: string): AnimationController | undefined;
}

/**
 * Options for HDR composition configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface HdrCompositionConfig {
/**
 * Rectangle area for HDR composition.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
rect: Rectangle;
}

/**
 * Use the PictureDrawableDescriptor class to get the resource of picture or resource descriptor information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class PictureDrawableDescriptor extends DrawableDescriptor {
  /**
  * Creates a new PictureDrawableDescriptor.
  *
  * @param { image.Picture } src - Indicates the resource to create PictureDrawableDescriptor.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @atomicservice
  * @since 26.0.0 dynamic
  */
  constructor(src: image.Picture);

  /**
  * Set HDR composition config.
  *
  * @param { HdrCompositionConfig } config - Indicates the HDR composition config.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @atomicservice
  * @since 26.0.0 dynamic
  */
  setHdrComposition(config: HdrCompositionConfig): void;
}
