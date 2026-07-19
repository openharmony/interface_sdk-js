'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod, Callback } from './arkui/component/common';
import { LazyLayoutAlgorithm } from './arkui/LazyLayoutAlgorithm';

/**
 * The LazyDynamicLayoutAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface LazyDynamicLayoutAttribute extends CommonMethod {
  /**
   * Called attributeModifier.
   *
   * @param { AttributeModifier<LazyDynamicLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default attributeModifier(
      modifier: AttributeModifier<LazyDynamicLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
  /**
   * Called when visible indexes change.
   *
   * @param { Callback<int[]> | undefined } callback - The callback function to be called when
   *     visible indexes change.
   *     <br>Passing undefined will unregister the callback.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: Callback<int[]> | undefined): this;
  /**
   * Set LazyDynamicLayout options.
   *
   * @param { LazyLayoutAlgorithm } algorithm - Lazy layout algorithm.
   * @returns { this } Returns the instance of the LazyDynamicLayoutAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setLazyDynamicLayoutOptions(algorithm: LazyLayoutAlgorithm): this;
}
/**
 * Defines LazyDynamicLayout Component.
 *
 * @param { LazyLayoutAlgorithm } algorithm - Lazy layout algorithm.
 * @param { CustomBuilder } content_
 * @returns { LazyDynamicLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyDynamicLayout (
    algorithm: LazyLayoutAlgorithm,
    content_: CustomBuilder,
): LazyDynamicLayoutAttribute;

/**
 * Defines LazyDynamicLayout Component.
 *
 * @param { CustomBuilderT<LazyDynamicLayoutAttribute> } style_ - The style to create a LazyDynamicLayout.
 * @param { CustomBuilder } [content_] - content
 * @returns { LazyDynamicLayoutAttribute } The attribute of the LazyDynamicLayout.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LazyDynamicLayout(
    style_: CustomBuilderT<LazyDynamicLayoutAttribute>,
    content_?: CustomBuilder
): LazyDynamicLayoutAttribute;