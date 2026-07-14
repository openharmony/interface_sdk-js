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
 * @file
 * @kit AccessibilityKit
 */

import type { GesturePoint } from './@ohos.accessibility.GesturePoint';

/**
 * GesturePath表示手势路径信息。
 * 
 * 本模块用于创建辅助功能注入手势所需的手势路径信息。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare class GesturePath {
  /**
   * 构造函数。
   *
   * @param { long } durationTime - 手势总耗时，单位为毫秒。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  constructor(durationTime: long);
  /**
   * 手势触摸点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  points: Array<GesturePoint>;
  /**
   * 手势总耗时，单位为毫秒。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  durationTime: long;
}