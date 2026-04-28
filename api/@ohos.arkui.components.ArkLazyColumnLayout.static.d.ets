'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { LengthMetrics } from './arkui/Graphics';
import { ComponentBuilder, CustomBuilder } from '@ohos.arkui.component';

/**
 * Defines the lazy column layout attribute.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LazyColumnLayoutAttribute extends CommonMethod {
  /**
   * The spacing between rows.
   *
   * @param { LengthMetrics | undefined } space - the spacing between rows.
   *     <br>Default value 0. <br>Range: [0, +∞).
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default space(space: LengthMetrics | undefined): this;

  /**
   * Sets the horizontal alignment of the row content.
   *
   * @param { HorizontalAlign | undefined } value - the horizontal alignment of the row content.
   *     <br>Default value HorizontalAlign.Center.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default alignItems(value: HorizontalAlign | undefined): this;

  /**
   * Triggered when the index of child components in the visible area changes.
   *
   * @param { onVisibleIndexesChangeCallback | undefined } callback - callback function, triggered
   *     when the index of child components in the visible area changes.
   *     <br>Passing undefined will unregister the callback.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: onVisibleIndexesChangeCallback | undefined): this;

  /**
   * Sets the attribute modifier.
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
 * Defines LazyColumnLayout Component.
 *
 * @param { CustomBuilder } [content_] - container
 * @returns { LazyColumnLayoutAttribute } The attribute of the lazyColumnLayout
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function LazyColumnLayout(
    content_?: CustomBuilder,
): LazyColumnLayoutAttribute
