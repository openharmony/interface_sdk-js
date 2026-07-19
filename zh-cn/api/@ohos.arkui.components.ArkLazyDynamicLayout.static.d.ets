'use static';
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
 * LazyDynamicLayout属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface LazyDynamicLayoutAttribute extends CommonMethod {
  /**
   * 调用了AttributeModifier。
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
   * 当可见索引更改时调用。
   *
   * @param { Callback<int[]> | undefined } callback - 可见索引变化时要回调的回调函数。
   *     <br>传递undefined将取消注册回调。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: Callback<int[]> | undefined): this;
  /**
   * 设置LazyDynamicLayout选项。
   *
   * @param { LazyLayoutAlgorithm } algorithm - 懒布局算法。
   * @returns { this } 返回LazyDynamicLayoutAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setLazyDynamicLayoutOptions(algorithm: LazyLayoutAlgorithm): this;
}
/**
 * 定义LazyDynamicLayout组件。
 *
 * @param { LazyLayoutAlgorithm } algorithm - 懒布局算法。
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
 * 定义LazyDynamicLayout组件。
 *
 * @param { CustomBuilderT<LazyDynamicLayoutAttribute> } style_ - The style to create a LazyDynamicLayout.
 * @param { CustomBuilder } [content_]
 * @returns { LazyDynamicLayoutAttribute } LazyDynamicLayout的属性。
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