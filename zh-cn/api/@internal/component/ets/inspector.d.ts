/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

/**
 * 获取inspector节点信息。
 *
 * @returns { object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead getInspectorTree
 */
declare function getInspectorNodes(): object;

/**
 * 根据节点id获取inspector节点信息。
 *
 * @param { number } id
 * @returns { object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead getInspectorByKey
 */
declare function getInspectorNodeById(id: number): object;

/**
 * inspector的性能分析（Profiler）工具。
 *
 * @namespace Profiler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8 dynamic
 * @test
 */
declare namespace Profiler {
  /**
   * 为profiler注册vsync回调。
   *
   * @param { function } callback - 回调信息为带有ui更新信息的json字符串。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8 dynamic
   * @test
   */
  function registerVsyncCallback(callback: (info: string) => void): void;

  /**
   * 注销vsync回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8 dynamic
   * @test
   */
  function unregisterVsyncCallback(): void;
}

/**
 * 设置应用背景颜色。
 *
 * @param { string } value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8 dynamic
 * @test
 */
declare function setAppBgColor(value: string): void;
