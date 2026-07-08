/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { TouchObject, KeyEvent, MouseEvent } from '@ohos.arkui.component';

/**
 * 发送触摸事件。
 *
 * 此接口仅用于对应用的测试。由于耗时长，不建议使用。
 * 
 * @param { TouchObject } event - 触摸事件，event参数见[TouchObject]{@link TouchObject}的介绍。
 * @returns { boolean } 事件发送失败时返回false，其余情况返回true。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;

/**
 * 发送按键事件。
 *
 * 此接口仅用于对应用的测试。由于耗时长，不建议使用。
 * 
 * @param { KeyEvent } event - 按键事件，event参数见[KeyEvent]{@link KeyEvent}介绍。
 * @returns { boolean } 事件发送失败时返回false，其余情况返回true。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;

/**
 * 发送鼠标事件。
 *
 * 此接口仅用于对应用的测试。由于耗时长，不建议使用。
 *
 * @param { MouseEvent } event - 鼠标事件，event参数见[MouseEvent]{@link MouseEvent}介绍。
 * @returns { boolean } 事件发送失败时返回false，其余情况返回true。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;