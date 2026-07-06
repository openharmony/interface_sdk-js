'use static'
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
import { Scroller } from '@ohos.arkui.component';
import { BarState } from '@ohos.arkui.component';
import { CommonMethod } from '@ohos.arkui.component';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod } from '@ohos.arkui.component';
/**
 * Defines the arc scroll bar options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare interface ArcScrollBarOptions {
  /**
   * Describes the controller for scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  scroller: Scroller;

  /**
   * Sets the state of scroll bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  state?: BarState;
}

/**
 * The ArcScrollBarAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare interface ArcScrollBarAttribute extends CommonMethod {
  /**
   * Set ArcScrollBar options.
   *
   * @param { ArcScrollBarOptions } options - ArcScrollBar constructor options
   * @returns { ArcScrollBarAttribute } Returns the instance of the ArcScrollBarAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setArcScrollBarOptions(options: ArcScrollBarOptions): this;

  /**
   * Called attributeModifier.
   *
   * @param { AttributeModifier<ArcScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ArcScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines ArcScrollBar Component.
 *
 * @param { ArcScrollBarOptions } options
 * @param { CustomBuilder } [content_]
 * @returns { ArcScrollBarAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcScrollBar(
    options: ArcScrollBarOptions,
    content_?: CustomBuilder,
): ArcScrollBarAttribute;

/**
 * Defines ArcScrollBar Component.
 *
 * @param { CustomBuilderT<ArcScrollBarAttribute> } style_ - The style to create an ArcScrollBar.
 * @param { CustomBuilder } [content_]
 * @returns { ArcScrollBarAttribute } The attribute of the ArcScrollBar.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ArcScrollBar(
    style_: CustomBuilderT<ArcScrollBarAttribute>,
    content_?: CustomBuilder
): ArcScrollBarAttribute;
