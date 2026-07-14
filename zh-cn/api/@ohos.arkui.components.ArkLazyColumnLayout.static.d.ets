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

import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT } from './arkui/component/builder';
import { AttributeModifier, CommonMethod, OnVisibleIndexesChangeCallback } from './arkui/component/common';
import { HorizontalAlign } from './arkui/component/enums';
import { StickyStyle } from './arkui/component/list';
import { LengthMetrics } from './arkui/Graphics';

/**
 * 定义懒列布局属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LazyColumnLayoutAttribute extends CommonMethod {
  /**
   * 行之间的间距。
   *
   * @param { LengthMetrics | undefined } space - 行之间的间距。
   *     <br>默认值为0。<br>范围：[0, +∞)。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default space(space: LengthMetrics | undefined): this;

  /**
   * 设置行内容的水平对齐方式。
   *
   * @param { HorizontalAlign | undefined } value - 行内容的水平对齐。
   *     <br>默认值：HorizontalAlign.Center。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default alignItems(value: HorizontalAlign | undefined): this;

  /**
   * 设置懒加载列布局的header。
   *
   * @param { CustomBuilder | undefined } builder - header生成器函数
   *     <br>传递undefined将移除header。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default header(builder: CustomBuilder | undefined): this;

  /**
   * 设置懒加载列布局的footer。
   *
   * @param { CustomBuilder | undefined } builder - footer生成器函数
   *     <br>传递undefined将移除footer。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default footer(builder: CustomBuilder | undefined): this;

  /**
   * 设置header和footer的吸顶吸底样式。
   *
   * @param { StickyStyle | undefined } sticky - header和footer的吸顶吸底样式。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default sticky(sticky: StickyStyle | undefined): this;

  /**
   * 当子组件在可见区域的索引发生变化时触发。
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - 回调函数，当可见区域中子组件的索引发生变化时触发.
   *     <br>传递undefined将取消注册回调。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): this;

  /**
   * 设置LazyColumnLayout选项。
   *
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setLazyColumnLayoutOptions(): this;

  /**
   * 设置属性修饰符。
   *
   * @param { AttributeModifier<LazyColumnLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default attributeModifier(modifier: AttributeModifier<LazyColumnLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义LazyColumnLayout组件。
 *
 * @param { CustomBuilder } [内容_] - 内容
 * @returns { LazyColumnLayoutAttribute } 懒加载列布局的属性
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function LazyColumnLayout(
    content_?: CustomBuilder,
): LazyColumnLayoutAttribute;

/**
 * 定义LazyColumnLayout组件。
 *
 * @param { CustomBuilderT<LazyColumnLayoutAttribute> } style_ - The style to create a LazyColumnLayout.
 * @param { CustomBuilder } [content_]
 * @returns { LazyColumnLayoutAttribute } LazyColumnLayout的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LazyColumnLayout(
    style_: CustomBuilderT<LazyColumnLayoutAttribute>,
    content_?: CustomBuilder
): LazyColumnLayoutAttribute;