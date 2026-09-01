/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * GesturePath表示手势路径信息。
 * 
 * 本模块用于创建手势路径信息，供辅助功能注入手势使用。
 * 
 * @file 手势路径
 * @kit AccessibilityKit
 */

import type { GesturePoint } from './@ohos.accessibility.GesturePoint';

/**
 * 表示手势路径信息，用于无障碍服务中模拟用户触摸手势（如点击、滑动等）。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare class GesturePath {
  /**
   * 通过传入手势总耗时创建手势路径对象。创建GesturePath实例后，还需设置必填属性points。
   *
   * @param { long } durationTime - 手势总耗时，单位：ms。取值需大于0。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  constructor(durationTime: long);
  /**
   * 手势路径上的触摸点序列，用于构成手势的移动轨迹。每个触摸点表示路径中的一个坐标位置。数组长度需大于0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  points: Array<GesturePoint>;
  /**
   * 手势总耗时，单位：ms。取值需大于0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  durationTime: long;
}