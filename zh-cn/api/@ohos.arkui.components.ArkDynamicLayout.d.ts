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
 * 
 * > **说明：**
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
     * @param { LayoutAlgorithm } algorithm - 指定动态布局组件的布局算法。取非法值时，按照[堆叠布局算法]{@link LayoutAlgorithm:StackLayoutAlgorithm}
     *     布局子组件，子组件堆叠排列。
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
 * 支持[通用属性]{@link common}。
 * 
 * 支持[通用事件]{@link common}。
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
 * ###### 子组件
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
export declare const DynamicLayoutInstance: DynamicLayoutAttribute;/