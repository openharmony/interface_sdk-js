/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { Resource } from './../../../api/global/resource';

import { CommonMethod, AttributeModifier } from "./common";
import { ResourceColor, ResourceStr } from "./units";
import { FontWeight } from "./enums";
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { FontWeightConfigs } from "./textCommon";

/**
 * SymbolSpan组件定义
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface SymbolSpanAttribute {
  /**
     * Called when the SymbolSpan size is set.
     *
   * @param { double | string | Resource | undefined } value - Default value is 16fp.
     *     Passing `undefined` resets it to the default size.
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: double | string | Resource | undefined): this;
  /**
     * Called when the SymbolSpan color is set.
     *
   * @param { Array<ResourceColor> | undefined } value - Passing `undefined` resets it to the default color.
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: Array<ResourceColor> | undefined): this;
  /**
   * 设置字体fontWeight属性
   *
   * @param { int | FontWeight | string | undefined } value - 默认值为FontWeight.Normal，设置`undefined`将恢复默认值
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | string | undefined): this;
  /**
     * 设置SymbolSpan的字体粗细。
     *
   * @param { int | FontWeight | ResourceStr | undefined } value - SymbolSpan字体粗细。
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细的配置。
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined, fontWeightConfigs?: FontWeightConfigs): this;
  /**
     * Called when the SymbolSpan effect is set.
     *
   * @param { SymbolEffectStrategy | undefined } value - The default value is SymbolEffectStrategy.NONE.
     *     Passing `undefined` resets it to the default value.
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default effectStrategy(value: SymbolEffectStrategy | undefined): this;
  /**
     * Called when the SymbolSpan rendering strategy is set.
     *
   * @param { SymbolRenderingStrategy | undefined } value - The default value is 
     *     SymbolRenderingStrategy.SINGLE. Passing `undefined` resets it to the default value.
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
  /**
   * Key. User can set an key to the component to identify it.
   *
   * @param { string | undefined } value
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @test
   */
  default key(value: string | undefined): this;
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string | undefined } value
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default id(value: string | undefined): this;
  /**
   * 设置modifier属性
   *
   * @param { AttributeModifier<SymbolSpanAttribute> | undefined } modifier - 设置Symbol modifier, 设置undefined无效果。
   * @returns { SymbolSpanAttribute } 返回 SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | undefined): this;
  /**
   * 设置组件的源码跳转信息。
   *
   * @param { string } sourceLine - 源代码行。
   * @param { string } [moduleName] - 组件所属的模块。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * 定义SymbolSpan组件。
 *
 * @param { Resource } value - 符号图标资源。
 * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function SymbolSpan(
    value: Resource
): SymbolSpanAttribute;
