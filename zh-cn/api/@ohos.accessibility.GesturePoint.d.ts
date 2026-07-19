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

/**
 * GesturePoint表示手势触摸点。
 * 
 * 本模块用于创建辅助功能注入手势所需的手势路径的触摸点信息。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare class GesturePoint {
    /**
     * 构造函数。
     *
     * @param { double } positionX - 触摸点X坐标，单位为像素（px）。
     * @param { double } positionY - 触摸点Y坐标，单位为像素（px）。
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 9 dynamiconly
     * @deprecated since 12
     */
    constructor(positionX: double, positionY: double);
    /**
     * 触摸点X坐标，单位为像素（px）。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 9 dynamiconly
     */
    positionX: double;
    /**
     * 触摸点Y坐标，单位为像素（px）。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 9 dynamiconly
     */
    positionY: double;
  }