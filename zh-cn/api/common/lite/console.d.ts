/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * 提供控制台。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @famodelonly
 * @since 3 dynamiconly
 */
export declare class console {
  /**
   * 打印调试信息。
   * 
   * @param { string } message - 要打印的文本信息。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @famodelonly
   * @since 3 dynamiconly
   */
  static debug(message: string): void;

  /**
   * 打印日志信息。
   * 
   * @param { string } message - 要打印的文本信息。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @famodelonly
   * @since 3 dynamiconly
   */
  static log(message: string): void;

  /**
   * 打印日志信息。
   * 
   * @param { string } message - 要打印的文本信息。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @famodelonly
   * @since 3 dynamiconly
   */
  static info(message: string): void;

  /**
   * 打印警告信息。
   * 
   * @param { string } message - 要打印的警告信息。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @famodelonly
   * @since 3 dynamiconly
   */
  static warn(message: string): void;

  /**
   * 打印错误信息。
   * 
   * @param { string } message - 要打印的错误信息。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @famodelonly
   * @since 3 dynamiconly
   */
  static error(message: string): void;
}
