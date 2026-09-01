/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 投播组件参数
 * @file
 投播组件参数
 * @kit AVSessionKit
 */

/**
 * 投播组件设备列表状态参数选项。
 *
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
export declare enum AVCastPickerState {
  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  STATE_APPEARING = 0,

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  STATE_DISAPPEARING = 1
}

/**
 * 投播组件样式参数选项。
 *
 * @enum { int }
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export declare enum AVCastPickerStyle {
  /**
   * The picker shows in a panel style.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  STYLE_PANEL = 0,

  /**
   * The picker shows in a menu style.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  STYLE_MENU = 1
}

/**
 * 投播组件显示模式参数选项。
 *
 * @enum { int }
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export declare enum AVCastPickerColorMode {
  /**
   * Auto mode which follows the definition of system.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  AUTO = 0,

  /**
   * Dark mode.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  DARK = 1,

  /**
   * Light mode.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  LIGHT = 2
}