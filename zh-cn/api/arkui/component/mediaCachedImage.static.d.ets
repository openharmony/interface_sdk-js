'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { ImageAttribute } from './image';
import { ResourceStr } from './units';
import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';
import { ComponentBuilder, CustomBuilder } from './builder';
import { PixelMap } from './common';

/**
 * 定义可使用 ASTC 的资源。
 *
 * @interface ASTCResource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface ASTCResource {
    /**
     * ASTC URI 资源数组，指示要获取的 ASTC 数据范围。
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    sources: Array<string>;
    /**
     * 列大小，指示每行拼接的 ASTC 资源数量。
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    column: int;
}

/**
 * 定义 MediaCachedImageInterface 类型。
 *
 * @typedef { function } MediaCachedImageInterface
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ASTCResource } src - mediaCachedImage 资源类型。
 * @returns { MediaCachedImageAttribute } mediaCachedImage 的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type MediaCachedImageInterface = (src: PixelMap | ResourceStr | DrawableDescriptor | ASTCResource)
    => MediaCachedImageAttribute;

/**
 * 定义 MediaCachedImage 组件属性。
 *
 * @extends ImageAttribute
 * @interface MediaCachedImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface MediaCachedImageAttribute extends ImageAttribute {
}

/**
 * 定义 MediaCachedImage 组件。
 *
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ASTCResource } src - mediaCachedImage 资源类型。
 * @param { CustomBuilder } [content_] - container
 * @returns { MediaCachedImageAttribute } mediaCachedImage 的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function MediaCachedImage(
    src: PixelMap | ResourceStr | DrawableDescriptor | ASTCResource, 
    content_?: CustomBuilder
): MediaCachedImageAttribute
