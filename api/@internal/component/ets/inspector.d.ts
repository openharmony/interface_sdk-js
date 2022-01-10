/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import { TouchObject } from "./common";
import { KeyEvent } from "./common";
import { MouseEvent } from "./common";

/**
 * Get inspector node infos.
 * @since 7
 * @systemapi
 * @deprecated
 */
export declare function getInspectorNodes(): object;

/**
 * Get inspector node info by node id.
 * @since 7
 * @systemapi
 * @deprecated
 */
export declare function getInspectorNodeById(id: number): object;

/**
 * Get inspector info by key.
 * @since 8
 * @systemapi
 * @test
 */
export declare function getInspectorByKey(id: string): string;

/**
 * Get inspector tree.
 * @since 8
 * @systemapi
 * @test
 */
export declare function getInspectorTree(): string;

/**
 * Send event to inspector by key. Return false if no inspector with key is found.
 * @since 8
 * @systemapi
 * @test
 */
export declare function sendEventByKey(id: string, action: number, params: string): boolean;

/**
 * Send touch event.
 * @since 8
 * @systemapi
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;

/**
 * Send key event.
 * @since 8
 * @systemapi
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;

/**
 * Send mouse event.
 * @since 8
 * @systemapi
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;

/**
 * Profiler tools for inspectors.
 * @since 8
 * @systemapi
 * @test
 */
export declare namespace Profiler {
  /**
   * Registers vsync callback for profiler.
   * @param callback the callback info is json string with ui update info.
   * @since 8
   * @systemapi
   * @test
   */
  export function registerVsyncCallback(callback: (info: string) => void): void;

  /**
   * Unregisters vsync callback.
   * @since 8
   * @systemapi
   * @test
   */
  export function unregisterVsyncCallback(): void;
}
