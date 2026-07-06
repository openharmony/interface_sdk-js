/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * **inputMethod.Panel**模块提供管理输入法面板属性的API。
 *
 * @file
 * @kit IMEKit
 */

/**
 * 定义输入法面板的属性。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PanelInfo {
    /**
     * 输入法面板的类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    type: PanelType;
  
    /**
     * 输入法面板的状态类型。
     * 
     * - 默认值为**FLAG_FIXED**。
     * - 当前此参数用于描述软键盘的状态类型。
     *
     * @default FLG_FIXED
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    flag?: PanelFlag;
  }
  
  /**
   * 枚举输入法面板的状态类型。
   * 
   * > **注意**
     * >
     * > 当前仅支持**SOFT_KEYBOARD**面板。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  export enum PanelFlag {
    /**
     * 固定状态类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FLAG_FIXED = 0,
  
    /**
     * 悬浮状态类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FLAG_FLOATING,
  
    /**
     * 候选状态类型。
     * 
     * - 当处于候选状态类型时，输入法面板是一个根据用户输入显示候选词的窗口。
     * - 输入法服务不会主动控制候选面板的可见性，需要自行控制。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FLAG_CANDIDATE
  }
  
  /**
   * 枚举输入法面板的类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  export enum PanelType {
    /**
     * 软键盘。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    SOFT_KEYBOARD = 0,
  
    /**
     * 状态栏。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    STATUS_BAR
  }