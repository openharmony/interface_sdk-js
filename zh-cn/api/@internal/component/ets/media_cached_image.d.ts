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
 * @file
 * @kit ArkUI
 */

/**
 * 定义可以使用 ASTC 的资源。
 *
 * @interface ASTCResource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
interface ASTCResource {
  /**
   * ASTC URI 资源数组，指示要获取的 ASTC 数据范围。
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  sources: Array<string>;
  /**
   * 列大小，指示每行拼接的 ASTC 资源数量。
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  column: number;
}

/**
 * @interface MediaCachedImageInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @noninterop
 */
interface MediaCachedImageInterface {
  /**
   * 要获取的图像资源。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ASTCResource } src
   * @returns { MediaCachedImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor | ASTCResource): MediaCachedImageAttribute;
}

/**
 * 从 ImageAttribute 继承的 MediaCachedImage 属性。
 *
 * @extends ImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @noninterop
 */
declare class MediaCachedImageAttribute extends ImageAttribute {}

/**
 * MediaCachedImage 组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @noninterop
 */
declare const MediaCachedImage: MediaCachedImageInterface;

/**
 * MediaCachedImage 组件的实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @noninterop
 */
declare const MediaCachedImageInstance: MediaCachedImageAttribute;
