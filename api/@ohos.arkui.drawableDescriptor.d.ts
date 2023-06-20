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

import image from './@ohos.multimedia.image';

/**
 * Use the DrawableDescriptor class to get drawable image.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class DrawableDescriptor {

  /**
   * Creates a new DrawableDescriptor.
   * @systemapi Hide this for inner system use.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  constructor();

  /**
   * Get pixelMap of drawable image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns {image.PixelMap} Return the PixelMap of the calling DrawableDescriptor object.
   * @since 10
   */
  getPixelMap(): image.PixelMap;
}

/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class LayeredDrawableDescriptor extends DrawableDescriptor {

  /**
  * Get DrawableDescriptor for the foreground.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @returns {DrawableDescriptor} Return the DrawableDescriptor object of foreground.
  * @since 10
  */
  getForeground(): DrawableDescriptor;

  /**
  * Get DrawableDescriptor for the background.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @returns {DrawableDescriptor} Return the DrawableDescriptor object of background.
  * @since 10
  */
  getBackground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns {DrawableDescriptor} Return the DrawableDescriptor object of mask.
   * @since 10
   */
  getMask(): DrawableDescriptor;


  /**
   * Get the clip path info of the adaptive icon mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns {String} Return the clip path info of mask.
   * @since 10
   */
  getMaskClipPath(): String;

  /**
   * Get the clip radius info of the adaptive icon mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns {number} Return the clip radius info of mask.
   * @since 10
   */
  getMaskClipRadius(): number;
}
