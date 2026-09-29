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
 * Defines the LazyDynamicLayout attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyDynamicLayoutAttribute extends CommonMethod<LazyDynamicLayoutAttribute> {
  /**
   * Sets the **onVisibleIndexesChange** callback. This callback is triggered
   *     when the list of child component indexes in the visible area of **LazyDynamicLayout** changes,
   *     and returns the list of child component indexes in the visible area.
   *
   * @param { Callback<int[]> | undefined } callback - Callback used to return the list of child component indexes
   *     in the visible area.
   *     When the input parameter is **undefined**, the listener is canceled.
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
 * Defines LazyDynamicLayout Component.
 *
 * ###### Child Components
 *
 * Child components are supported.
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
 * Defines LazyDynamicLayout Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyDynamicLayoutInstance: LazyDynamicLayoutAttribute;

