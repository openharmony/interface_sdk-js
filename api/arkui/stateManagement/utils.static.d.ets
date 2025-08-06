'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

/**
 * UIUtils is a state management tool class for operating the observed data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare class UIUtils {
  /**
   * Get raw object from the Object, like builtin type, objectLiteral.
   * If input parameter is a regular Object without proxy, return Object itself.
   *
   * @param { T } source input source Object data.
   * @returns { T } raw object.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  static getTarget<T extends object>(source: T): T;

  /**
   * Make non-observed data into observed data.
   * Support builtin type and objectLiteral.
   *
   * @param { T } source input source object data.
   * @returns { T } proxy object from the source object data.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
   static makeObserved<T extends object>(source: T): T;
}