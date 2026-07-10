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
 * ArcScrollBar的构造函数参数。
 *
 * > **说明：**
 * >
 * > ArcScrollBar与可滚动组件需通过scroller进行绑定后方能实现联动，且ArcScrollBar与可滚动组件仅限于一对一的绑定方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare interface ArcScrollBarOptions {

  /**
   * 可滚动组件的控制器，用于与可滚动组件进行绑定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  scroller: Scroller;

  /**
   * 滚动条状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  state?: BarState;
}

/**
 * 弧形滚动条属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare interface ArcScrollBarAttribute extends CommonMethod {

  /**
   * 设置ArcScrollBar选项。
   *
   * @param { ArcScrollBarOptions } options - ArcScrollBar constructor options
   * @returns { ArcScrollBarAttribute } 返回ArcScrollBarAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setArcScrollBarOptions(options: ArcScrollBarOptions): this;

  /**
   * 设置属性修饰器。
   *
   * @param { AttributeModifier<ArcScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ArcScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义ArcScrollBar组件。
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
 * 定义ArcScrollBar组件。
 *
 * @param { CustomBuilderT<ArcScrollBarAttribute> } style_ - 用于创建ArcScrollBar的样式
 * @param { CustomBuilder } [content_]
 * @returns { ArcScrollBarAttribute } ArcScrollBar的属性。
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