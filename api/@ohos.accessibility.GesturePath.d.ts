/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * GesturePath represents gesture path information.
 * 
 * This module is used to create gesture path information for accessibility gesture injection.
 * 
 * @file Gesture Path
 * @kit AccessibilityKit
 */

import type { GesturePoint } from './@ohos.accessibility.GesturePoint';

/**
 * Represents gesture path information, used to simulate user touch gestures (such as tap, swipe, etc.) in 
 * accessibility services.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare class GesturePath {
  /**
   * Creates a gesture path object by passing in the total gesture duration. After creating a GesturePath instance, you 
   * must also set the required property points.
   *
   * @param { long } durationTime - Total gesture duration, in ms. The value must be greater than 0.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  constructor(durationTime: long);
  /**
   * Sequence of touch points on the gesture path, used to form the movement trajectory of the gesture. Each touch point
   * represents a coordinate position on the path. The array length must be greater than 0.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  points: Array<GesturePoint>;
  /**
   * Total gesture duration, in ms. The value must be greater than 0.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  durationTime: long;
}