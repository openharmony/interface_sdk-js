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
import { LazyLayoutAlgorithm } from './arkui/LazyLayoutAlgorithm';

/**
 * 定义LazyDynamicLayout组件。
 *
 * @extends CommonMethod<LazyDynamicLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyDynamicLayoutAttribute extends CommonMethod<LazyDynamicLayoutAttribute> {
    /**
     * 当可见索引更改时调用。
     *
     * @param { Callback<int[]> | undefined } callback - 可见索引变化时回调的回调函数。
     *     <br>传递undefined将取消注册回调。
     * @returns { LazyDynamicLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onVisibleIndexesChange(callback: Callback<int[]> | undefined): LazyDynamicLayoutAttribute;
}

/**
 * 定义LazyDynamicLayout组件。
 *
 * @param { LazyLayoutAlgorithm } algorithm - Lazy layout algorithm.
 * @returns { LazyDynamicLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare function LazyDynamicLayout(algorithm: LazyLayoutAlgorithm): LazyDynamicLayoutAttribute;

/**
 * 定义LazyDynamicLayout组件实例。
 *
 * @type { LazyDynamicLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyDynamicLayoutInstance: LazyDynamicLayoutAttribute;
