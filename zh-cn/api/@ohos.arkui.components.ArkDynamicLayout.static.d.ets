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
 * @arkts 1.2
 */

import { ComponentBuilder, CustomBuilder } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod } from '@ohos.arkui.component';
import { LayoutAlgorithm } from './arkui/LayoutAlgorithm';

/**
 * 动态布局容器组件，支持在运行时动态切换不同的布局算法，不改变子组件的状态。
 *
 * @extends CommonMethod
 * @interface DynamicLayoutAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
export declare interface DynamicLayoutAttribute extends CommonMethod {
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<DynamicLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     - 动态设置DynamicLayout组件的属性。
     *     取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default attributeModifier(
      modifier: AttributeModifier<DynamicLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * 动态布局容器。
 *
 * @param { LayoutAlgorithm } algorithm
 *     - 指定动态布局组件的布局算法。
 *     取非法值时，按照堆叠布局算法[StackLayoutAlgorithm](docroot://reference/apis-arkui/js-apis-arkui-layoutAlgorithm.md#stacklayoutalgorithm)布局子组件，子组件堆叠排列。
 * @param { CustomBuilder } content_
 * @returns { DynamicLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function DynamicLayout (
    algorithm: LayoutAlgorithm,
    content_: CustomBuilder,
): DynamicLayoutAttribute;
