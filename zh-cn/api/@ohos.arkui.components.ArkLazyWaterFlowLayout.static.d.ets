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

import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod, OnVisibleIndexesChangeCallback, ItemFillPolicy} from '@ohos.arkui.component';
import { LengthMetrics } from './arkui/Graphics';
import { StickyStyle } from '@ohos.arkui.component';

/**
 * 懒加载瀑布流布局属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface LazyWaterFlowLayoutAttribute extends CommonMethod {
  /**
   * 行之间的间距。
   *
   * @param { LengthMetrics | undefined } value - The spacing between rows.
   *     <br>Default value: LengthMetrics.vp(0)
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default rowsGap(value: LengthMetrics | undefined): this;
  /**
   * 列之间的间距。
   *
   * @param { LengthMetrics | undefined } value - 列之间的间距。
   *     <br>默认值：LengthMetrics.vp(0)
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default columnsGap(value: LengthMetrics | undefined): this;
  /**
   * 设置懒加载瀑布流布局的header。
   *
   * @param { CustomBuilder | undefined } builder - header生成器函数
   *     <br>传递undefined将删除header。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default header(builder: CustomBuilder | undefined): this;
  /**
   * 设置懒加载瀑布流布局的footer。
   *
   * @param { CustomBuilder | undefined } builder - footer生成器函数
   *     <br>传递undefined将删除footer。
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
   * 当组件中显示的第一个或最后一个项目更改时调用。
   * 它在组件初始化时会触发一次。
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - 回调函数，当可见区域中子组件的索引发生变化时触发。
   *     <br>传递undefined将取消注册回调。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): this;
}

/**
 * LazyV WaterFlowLayout属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface LazyVWaterFlowLayoutAttribute extends LazyWaterFlowLayoutAttribute {
  /**
   * 该参数用于指定当前瀑布流布局中的列数。
   *
   * @param { string | ItemFillPolicy | undefined } value - 布局中的列数。
   *     <br>默认值：'1fr'
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default columnsTemplate(value: string | ItemFillPolicy | undefined): this;
  /**
   * 设置LazyVWaterFlowLayout选项。
   *
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setLazyVWaterFlowLayoutOptions(): this;
  /**
   * 设置属性修饰符。
   *
   * @param { AttributeModifier<LazyVWaterFlowLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default attributeModifier(
      modifier: AttributeModifier<LazyVWaterFlowLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义LazyVWaterFlowLayout组件。
 *
 * @param { CustomBuilder } [content_]
 * @returns { LazyVWaterFlowLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyVWaterFlowLayout (
    content_?: CustomBuilder,
): LazyVWaterFlowLayoutAttribute;

/**
 * 定义LazyVWaterFlowLayout组件。
 *
 * @param { CustomBuilderT<LazyVWaterFlowLayoutAttribute> } style_ - The style to create a LazyVWaterFlowLayout.
 * @param { CustomBuilder } [content_]
 * @returns { LazyVWaterFlowLayoutAttribute } LazyVWaterFlowLayout的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LazyVWaterFlowLayout(
    style_: CustomBuilderT<LazyVWaterFlowLayoutAttribute>,
    content_?: CustomBuilder
): LazyVWaterFlowLayoutAttribute;