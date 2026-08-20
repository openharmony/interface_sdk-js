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
 * GesturePoint represents a gesture touch point and is the basic unit that constitutes a gesture path (GesturePath).
 * 
 * This module is used to create touch point information for gesture paths, for use by accessibility applications to 
 * inject gestures.
 * 
 * @file Gesture Point
 * @kit AccessibilityKit
 */

/**
 * Represents a gesture touch point, which is the basic unit that constitutes a GesturePath node and is used to define 
 * the touch position in the gesture trajectory for accessibility gesture injection. For details about how to use it, 
 * see [GesturePath]{@link @ohos.accessibility.GesturePath}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare class GesturePoint {
  /**
   * Creates a **GesturePoint** instance based on the given X and Y coordinates.
   *
   * @param { double } positionX - X coordinate of the touch point, in pixels (px).
   * @param { double } positionY - Y coordinate of the touch point, in pixels (px).
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  constructor(positionX: double, positionY: double);
  /**
   * X coordinate of the touch point, in pixels (px).
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  positionX: double;
  /**
   * Y coordinate of the touch point, in pixels (px).
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  positionY: double;
}