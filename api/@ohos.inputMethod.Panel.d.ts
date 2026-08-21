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
 * @brief The **inputMethod.Panel** module provides APIs for managing the attributes of the input method panel.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> >The initial APIs of this module are supported since API version 11.
 *  Newly added APIs will be marked with a superscript to indicate their earliest API version.
 *
 * @file Input Method Panel
 * @kit IMEKit
 */

/**
 * @brief Defines the attributes of the input method panel.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PanelInfo {
  /**
   * @brief Type of the input method panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  type: PanelType;

  /**
   * @brief State type of the input method panel.
   * <br>
   * <br>- The default value is **FLAG_FIXED**.
   * <br>- Currently, this parameter is used to describe the state type of the soft keyboard.
   *
   * @default FLG_FIXED
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  flag?: PanelFlag;
}

/**
 * @brief Enumerates the state types of the input method panel.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > Currently, only the **SOFT_KEYBOARD** panel is supported.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export enum PanelFlag {
  /**
   * @brief Fixed state type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  FLAG_FIXED = 0,

  /**
   * @brief Floating state type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  FLAG_FLOATING,

  /**
   * @brief Candidate state type.
   * <br>
   * <br>- When in the candidate state type, the input method panel is a window displaying candidates based on user input.
   * <br>- The input method service does not proactively control the visibility of the candidate panel. You need to control 
   * the visibility on your own.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  FLAG_CANDIDATE
}

/**
 * @brief Enumerates the types of the input method panel.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export enum PanelType {
  /**
   * @brief Soft keyboard.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  SOFT_KEYBOARD = 0,

  /**
   * @brief Status bar.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  STATUS_BAR
}