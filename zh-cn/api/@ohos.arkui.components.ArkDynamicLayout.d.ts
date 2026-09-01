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
import { LayoutAlgorithm } from './arkui/LayoutAlgorithm';
/**
 * 动态布局容器组件，支持在运行时动态切换不同的布局算法，不改变子组件的状态。
 * 使用DynamicLayout可以提升布局灵活性，简化界面适配和多视图切换的开发流程。适用于响应式布局（适配不同屏幕尺寸）、多视图模式切换（如列表/网格/瀑布流切换）、用户自定义布局等场景。
 * 
 * ## 子组件
 *
 * 可以包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export interface DynamicLayoutInterface {
    /**
     * 动态布局容器。
     *
     * @param { LayoutAlgorithm } algorithm - 指定动态布局容器的布局算法。
     * 支持使用[RowLayoutAlgorithm]{@link LayoutAlgorithm:RowLayoutAlgorithm}（水平线性布局，适用于水平排列场景）、
     * [ColumnLayoutAlgorithm]{@link LayoutAlgorithm:ColumnLayoutAlgorithm}（垂直线性布局，适用于垂直排列场景）、
     * [StackLayoutAlgorithm]{@link LayoutAlgorithm:StackLayoutAlgorithm}（堆叠布局，适用于层叠覆盖场景）、
     * [GridLayoutAlgorithm]{@link LayoutAlgorithm:GridLayoutAlgorithm}（网格布局，适用于规整网格场景）
     * 和[CustomLayoutAlgorithm]{@link LayoutAlgorithm:CustomLayoutAlgorithm}（自定义布局，适用于复杂特殊布局场景）等布局算法实例，
     * 详见[LayoutAlgorithm]{@link LayoutAlgorithm:LayoutAlgorithm}。
     * 取非法值（如null、undefined或无效的布局算法对象）时，
     * 按照[StackLayoutAlgorithm]{@link LayoutAlgorithm:StackLayoutAlgorithm}布局子组件，子组件堆叠排列。
     * @returns { DynamicLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    (algorithm: LayoutAlgorithm): DynamicLayoutAttribute;
}
/**
 * 支持[通用属性]{@link CommonMethod}。
 * 
 * 支持[通用事件]{@link CommonMethod}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export declare class DynamicLayoutAttribute extends CommonMethod<DynamicLayoutAttribute> {}

/**
 * 动态布局容器组件，支持在运行时动态切换不同的布局算法，不改变子组件的状态。
 * 
 * > **说明：**
 * 
 * ## 子组件
 * 
 * 可以包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @uicomponent
 * @since 24 dynamic
 */
export declare const DynamicLayout: DynamicLayoutInterface;
/**
 * Defines DynamicLayout Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @uicomponent
 * @since 24 dynamic
 */
export declare const DynamicLayoutInstance: DynamicLayoutAttribute;