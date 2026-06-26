/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Keycode
 * @kit InputKit
 */

/**
 * 按键设备的键值，按键设备包括键盘、光盘、游戏手柄等。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum KeyCode {

  /**
   * 功能（Fn）键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FN = 0,

  /**
   * 未知按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_UNKNOWN = -1,

  /**
   * 功能（Home）键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HOME = 1,

  /**
   * 返回键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BACK = 2,

  /**
   * 搜索键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 13 dynamic
   * @since 23 static
   */
  KEYCODE_SEARCH = 9,

  /**
   * 多媒体键：播放/暂停。
   * 
   * 与KEYCODE_PLAYPAUSE的区别为：
   * 
   * KEYCODE_PLAYPAUSE是较早的定义，KEYCODE_MEDIA_PLAY_PAUSE为现代媒体键设备设计，常见于较新的媒体键设备。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_PLAY_PAUSE = 10,

  /**
   * 光盘停止键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_STOP = 11,

  /**
   * 多媒体键：下一首。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_NEXT = 12,

  /**
   * 多媒体键：上一首。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_PREVIOUS = 13,

  /**
   * 多媒体键：快退。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_REWIND = 14,

  /**
   * 多媒体键：快进。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_FAST_FORWARD = 15,

  /**
   * 音量增加键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VOLUME_UP = 16,

  /**
   * 音量减小键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VOLUME_DOWN = 17,

  /**
   * 电源键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_POWER = 18,

  /**
   * 拍照键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CAMERA = 19,

  /**
   * 扬声器静音键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VOLUME_MUTE = 22,

  /**
   * 话筒静音键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MUTE = 23,

  /**
   * 亮度调节按键：调亮。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_UP = 40,

  /**
   * 亮度调节按键：调暗。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_DOWN = 41,

  /**
   * 按键'0'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_0 = 2000,

  /**
   * 按键'1'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_1 = 2001,

  /**
   * 按键'2'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_2 = 2002,

  /**
   * 按键'3'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_3 = 2003,

  /**
   * 按键'4'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_4 = 2004,

  /**
   * 按键'5'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_5 = 2005,

  /**
   * 按键'6'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_6 = 2006,

  /**
   * 按键'7'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_7 = 2007,

  /**
   * 按键'8'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_8 = 2008,

  /**
   * 按键'9'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_9 = 2009,

  /**
   * 按键'*'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_STAR = 2010,

  /**
   * 按键'*'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_POUND = 2011,

  /**
   * 导航键：向上。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DPAD_UP = 2012,

  /**
   * 导航键：向下。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DPAD_DOWN = 2013,

  /**
   * 导航键：向左。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DPAD_LEFT = 2014,

  /**
   * 导航键：向右。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DPAD_RIGHT = 2015,

  /**
   * 导航键：确定键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DPAD_CENTER = 2016,

  /**
   * 按键'A'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_A = 2017,

  /**
   * 按键'B'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_B = 2018,

  /**
   * 按键'C'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_C = 2019,

  /**
   * 按键'D'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_D = 2020,

  /**
   * 按键'E'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_E = 2021,

  /**
   * 按键'F'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F = 2022,

  /**
   * 按键'G'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_G = 2023,

  /**
   * 按键'H'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_H = 2024,

  /**
   * 按键'I'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_I = 2025,

  /**
   * 按键'J'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_J = 2026,

  /**
   * 按键'K'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_K = 2027,

  /**
   * 按键'L'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_L = 2028,

  /**
   * 按键'M'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_M = 2029,

  /**
   * 按键'N'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_N = 2030,

  /**
   * 按键'O'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_O = 2031,

  /**
   * 按键'P'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_P = 2032,

  /**
   * 按键'Q'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_Q = 2033,

  /**
   * 按键'R'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_R = 2034,

  /**
   * 按键'S'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_S = 2035,

  /**
   * 按键'T'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_T = 2036,

  /**
   * 按键'U'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_U = 2037,

  /**
   * 按键'V'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_V = 2038,

  /**
   * 按键'W'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_W = 2039,

  /**
   * 按键'X'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_X = 2040,

  /**
   * 按键'Y'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_Y = 2041,

  /**
   * 按键'Z'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_Z = 2042,

  /**
   * 按键','。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_COMMA = 2043,

  /**
   * 按键'.'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PERIOD = 2044,

  /**
   * 左Alt键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ALT_LEFT = 2045,

  /**
   * 右Alt键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ALT_RIGHT = 2046,

  /**
   * 左Shift键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SHIFT_LEFT = 2047,

  /**
   * 右Shift键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SHIFT_RIGHT = 2048,

  /**
   * Tab键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_TAB = 2049,

  /**
   * 空格键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SPACE = 2050,

  /**
   * 符号修改器按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SYM = 2051,

  /**
   * 浏览器功能键，此键用于启动浏览器应用程序。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_EXPLORER = 2052,

  /**
   * 电子邮件功能键，此键用于启动电子邮件应用程序。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ENVELOPE = 2053,

  /**
   * 回车键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ENTER = 2054,

  /**
   * 退格键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DEL = 2055,

  /**
   * 按键'*'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_GRAVE = 2056,

  /**
   * 按键'-'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MINUS = 2057,

  /**
   * 按键'='。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_EQUALS = 2058,

  /**
   * 按键'['。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_LEFT_BRACKET = 2059,

  /**
   * 按键']'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_RIGHT_BRACKET = 2060,

  /**
   * 按键'\'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BACKSLASH = 2061,

  /**
   * 按键';'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SEMICOLON = 2062,

  /**
   * 按键''' (单引号)。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_APOSTROPHE = 2063,

  /**
   * 按键'*'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SLASH = 2064,

  /**
   * 按键'*'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_AT = 2065,

  /**
   * 按键'+'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PLUS = 2066,

  /**
   * 菜单键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MENU = 2067,

  /**
   * 向上翻页键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PAGE_UP = 2068,

  /**
   * 向下翻页键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PAGE_DOWN = 2069,

  /**
   * Esc键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ESCAPE = 2070,

  /**
   * 删除键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FORWARD_DEL = 2071,

  /**
   * 左Ctrl键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CTRL_LEFT = 2072,

  /**
   * 右Ctrl键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CTRL_RIGHT = 2073,

  /**
   * 大写锁定键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CAPS_LOCK = 2074,

  /**
   * 滚动锁定键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SCROLL_LOCK = 2075,

  /**
   * 左Meta键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_META_LEFT = 2076,

  /**
   * 右Meta键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_META_RIGHT = 2077,

  /**
   * 功能键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FUNCTION = 2078,

  /**
   * 系统请求/打印屏幕键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SYSRQ = 2079,

  /**
   * Break/Pause键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BREAK = 2080,

  /**
   * 光标移动到开始键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MOVE_HOME = 2081,

  /**
   * 光标移动到末尾键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MOVE_END = 2082,

  /**
   * 插入键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_INSERT = 2083,

  /**
   * 前进键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FORWARD = 2084,

  /**
   * 多媒体键：播放。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_PLAY = 2085,

  /**
   * 光盘暂停键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_PAUSE = 2086,

  /**
   * 光盘关闭键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_CLOSE = 2087,

  /**
   * 光盘弹出键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_EJECT = 2088,

  /**
   * 多媒体键：录音。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_RECORD = 2089,

  /**
   * 按键'F1'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F1 = 2090,

  /**
   * 按键'F2'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F2 = 2091,

  /**
   * 按键'F3'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F3 = 2092,

  /**
   * 按键'F4'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F4 = 2093,

  /**
   * 按键'F5'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F5 = 2094,

  /**
   * 按键'F6'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F6 = 2095,

  /**
   * 按键'F7'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F7 = 2096,

  /**
   * 按键'F8'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F8 = 2097,

  /**
   * 按键'F9'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F9 = 2098,

  /**
   * 按键'F10'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F10 = 2099,

  /**
   * 按键'F11'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F11 = 2100,

  /**
   * 按键'F12'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F12 = 2101,

  /**
   * 小键盘锁。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUM_LOCK = 2102,

  /**
   * 小键盘按键'0'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_0 = 2103,

  /**
   * 小键盘按键'1'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_1 = 2104,

  /**
   * 小键盘按键'2'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_2 = 2105,

  /**
   * 小键盘按键'3'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_3 = 2106,

  /**
   * 小键盘按键'4'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_4 = 2107,

  /**
   * 小键盘按键'5'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_5 = 2108,

  /**
   * 小键盘按键'6'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_6 = 2109,

  /**
   * 小键盘按键'7'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_7 = 2110,

  /**
   * 小键盘按键'8'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_8 = 2111,

  /**
   * 小键盘按键'9'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_9 = 2112,

  /**
   * 小键盘按键'/'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_DIVIDE = 2113,

  /**
   * 小键盘按键'*'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_MULTIPLY = 2114,

  /**
   * 小键盘按键'-'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_SUBTRACT = 2115,

  /**
   * 小键盘按键'+'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_ADD = 2116,

  /**
   * 小键盘按键'.'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_DOT = 2117,

  /**
   * 小键盘按键','。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_COMMA = 2118,

  /**
   * 小键盘按键回车。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_ENTER = 2119,

  /**
   * 小键盘按键'='。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_EQUALS = 2120,

  /**
   * 小键盘按键'('。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_LEFT_PAREN = 2121,

  /**
   * 小键盘按键')'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_RIGHT_PAREN = 2122,

  /**
   * 虚拟多任务键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VIRTUAL_MULTITASK = 2210,

  /**
   * 游戏手柄按键'A'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_A = 2301,

  /**
   * 游戏手柄按键'B'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_B = 2302,

  /**
   * 游戏手柄按键'X'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_X = 2304,

  /**
   * 游戏手柄按键'Y'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_Y = 2305,

  /**
   * 游戏手柄按键'L1'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_L1 = 2307,

  /**
   * 游戏手柄按键'R1'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_R1 = 2308,

  /**
   * 游戏手柄按键'L2'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_L2 = 2309,

  /**
   * 游戏手柄按键'R2'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_R2 = 2310,

  /**
   * 游戏手柄按键'Select'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_SELECT = 2311,

  /**
   * 游戏手柄按键'Start'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_START = 2312,

  /**
   * 游戏手柄按键'Mode'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_MODE = 2313,

  /**
   * 游戏手柄按键'THUMBL'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_THUMBL = 2314,

  /**
   * 游戏手柄按键'THUMBR'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 15 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTON_THUMBR = 2315,

  /**
   * 睡眠键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SLEEP = 2600,

  /**
   * 日文全宽/半宽键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ZENKAKU_HANKAKU = 2601,

  /**
   * 国际键盘扩展键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_102ND = 2602,

  /**
   * 日文Ro键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_RO = 2603,

  /**
   * 日文片假名键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KATAKANA = 2604,

  /**
   * 日文平假名键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HIRAGANA = 2605,

  /**
   * 日文转换键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HENKAN = 2606,

  /**
   * 日语片假名/平假名键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KATAKANA_HIRAGANA = 2607,

  /**
   * 日文非转换键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MUHENKAN = 2608,

  /**
   * 换行键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_LINEFEED = 2609,

  /**
   * 宏键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MACRO = 2610,

  /**
   * 数字键盘上的加号/减号键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NUMPAD_PLUSMINUS = 2611,

  /**
   * 扩展键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SCALE = 2612,

  /**
   * 日文韩语键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HANGUEL = 2613,

  /**
   * 日文汉语键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HANJA = 2614,

  /**
   * 日元键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_YEN = 2615,

  /**
   * 停止键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_STOP = 2616,

  /**
   * 重复键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_AGAIN = 2617,

  /**
   * 道具键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PROPS = 2618,

  /**
   * 撤消键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_UNDO = 2619,

  /**
   * 复制键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_COPY = 2620,

  /**
   * 打开键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_OPEN = 2621,

  /**
   * 粘贴键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PASTE = 2622,

  /**
   * 查找键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FIND = 2623,

  /**
   * 剪切键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CUT = 2624,

  /**
   * 帮助键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HELP = 2625,

  /**
   * 计算器特殊功能键，用于启动计算器应用程序。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CALC = 2626,

  /**
   * 文件按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FILE = 2627,

  /**
   * 书签键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BOOKMARKS = 2628,

  /**
   * 向下翻页键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NEXT = 2629,

  /**
   * 多媒体键：播放/暂停。
   * 
   * 与KEYCODE_MEDIA_PLAY_PAUSE的区别为：
   * 
   * KEYCODE_PLAYPAUSE是较早的定义，KEYCODE_MEDIA_PLAY_PAUSE为现代媒体键设备设计，常见于较新的媒体键设备。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PLAYPAUSE = 2630,

  /**
   * 向上翻页键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PREVIOUS = 2631,

  /**
   * CD停止键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_STOPCD = 2632,

  /**
   * 配置键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CONFIG = 2634,

  /**
   * 刷新键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_REFRESH = 2635,

  /**
   * 退出键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_EXIT = 2636,

  /**
   * 编辑键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_EDIT = 2637,

  /**
   * 向上滚动键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SCROLLUP = 2638,

  /**
   * 向下滚动键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SCROLLDOWN = 2639,

  /**
   * 新建键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NEW = 2640,

  /**
   * 恢复键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_REDO = 2641,

  /**
   * 关闭键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CLOSE = 2642,

  /**
   * 播放键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PLAY = 2643,

  /**
   * 低音增强键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BASSBOOST = 2644,

  /**
   * 打印键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PRINT = 2645,

  /**
   * 聊天键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CHAT = 2646,

  /**
   * 金融键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FINANCE = 2647,

  /**
   * 取消键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CANCEL = 2648,

  /**
   * 键盘灯光切换键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDILLUM_TOGGLE = 2649,

  /**
   * 键盘灯光调暗键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDILLUM_DOWN = 2650,

  /**
   * 键盘灯光调亮键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDILLUM_UP = 2651,

  /**
   * 发送键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SEND = 2652,

  /**
   * 答复键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_REPLY = 2653,

  /**
   * 邮件转发键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FORWARDMAIL = 2654,

  /**
   * 保存键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SAVE = 2655,

  /**
   * 文件键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DOCUMENTS = 2656,

  /**
   * 下一个视频键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VIDEO_NEXT = 2657,

  /**
   * 上一个视频键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VIDEO_PREV = 2658,

  /**
   * 背光渐变键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_CYCLE = 2659,

  /**
   * 亮度调节为0键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_ZERO = 2660,

  /**
   * 显示关闭键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DISPLAY_OFF = 2661,

  /**
   * 游戏手柄上的各种按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_MISC = 2662,

  /**
   * 进入键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_GOTO = 2663,

  /**
   * 信息查看键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_INFO = 2664,

  /**
   * 程序键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PROGRAM = 2665,

  /**
   * 个人录像机（PVR）键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PVR = 2666,

  /**
   * 字幕键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SUBTITLE = 2667,

  /**
   * 全屏键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FULL_SCREEN = 2668,

  /**
   * 键盘。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KEYBOARD = 2669,

  /**
   * 屏幕纵横比调节键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ASPECT_RATIO = 2670,

  /**
   * 端口控制键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PC = 2671,

  /**
   * TV键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_TV = 2672,

  /**
   * TV键2。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_TV2 = 2673,

  /**
   * 录像机开启键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VCR = 2674,

  /**
   * 录像机开启键2。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VCR2 = 2675,

  /**
   * SIM卡应用工具包（SAT）键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SAT = 2676,

  /**
   * CD键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CD = 2677,

  /**
   * 磁带键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_TAPE = 2678,

  /**
   * 调谐器键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_TUNER = 2679,

  /**
   * 播放器键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PLAYER = 2680,

  /**
   * DVD键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DVD = 2681,

  /**
   * 音频键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_AUDIO = 2682,

  /**
   * 视频键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VIDEO = 2683,

  /**
   * 备忘录键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEMO = 2684,

  /**
   * 日历键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CALENDAR = 2685,

  /**
   * 红色指示器。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_RED = 2686,

  /**
   * 绿色指示器。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_GREEN = 2687,

  /**
   * 黄色指示器。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_YELLOW = 2688,

  /**
   * 蓝色指示器。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BLUE = 2689,

  /**
   * 频道向上键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CHANNELUP = 2690,

  /**
   * 频道向下键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CHANNELDOWN = 2691,

  /**
   * 末尾键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_LAST = 2692,

  /**
   * 重启键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_RESTART = 2693,

  /**
   * 慢速键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SLOW = 2694,

  /**
   * 随机播放键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SHUFFLE = 2695,

  /**
   * 可视电话键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VIDEOPHONE = 2696,

  /**
   * 游戏键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_GAMES = 2697,

  /**
   * 放大键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ZOOMIN = 2698,

  /**
   * 缩小键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ZOOMOUT = 2699,

  /**
   * 缩放重置键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ZOOMRESET = 2700,

  /**
   * 文字处理键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_WORDPROCESSOR = 2701,

  /**
   * 编辑器键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_EDITOR = 2702,

  /**
   * 电子表格键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SPREADSHEET = 2703,

  /**
   * 图形编辑器键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_GRAPHICSEDITOR = 2704,

  /**
   * 演示文稿键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PRESENTATION = 2705,

  /**
   * 数据库键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DATABASE = 2706,

  /**
   * 新闻键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_NEWS = 2707,

  /**
   * 语音信箱。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_VOICEMAIL = 2708,

  /**
   * 通讯簿。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ADDRESSBOOK = 2709,

  /**
   * 通信键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MESSENGER = 2710,

  /**
   * 亮度切换键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_TOGGLE = 2711,

  /**
   * 拼写检查键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SPELLCHECK = 2712,

  /**
   * 终端锁/屏幕保护程序。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_COFFEE = 2713,

  /**
   * 媒体循环键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MEDIA_REPEAT = 2714,

  /**
   * 图像键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_IMAGES = 2715,

  /**
   * 按键配置键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BUTTONCONFIG = 2716,

  /**
   * 任务管理器。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_TASKMANAGER = 2717,

  /**
   * 日志按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_JOURNAL = 2718,

  /**
   * 控制面板键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CONTROLPANEL = 2719,

  /**
   * 应用程序选择键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_APPSELECT = 2720,

  /**
   * 屏幕保护程序键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SCREENSAVER = 2721,

  /**
   * 智慧键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ASSISTANT = 2722,

  /**
   * 下一个键盘布局键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBD_LAYOUT_NEXT = 2723,

  /**
   * 最小亮度键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_MIN = 2724,

  /**
   * 最大亮度键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BRIGHTNESS_MAX = 2725,

  /**
   * 键盘输入Assist_Previous，查看输入法输入记录。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDINPUTASSIST_PREV = 2726,

  /**
   * 键盘输入Assist_Next，查看输入法输入拓展。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDINPUTASSIST_NEXT = 2727,

  /**
   * 键盘输入Assist_Previous，切换输入组中上一个输入法。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDINPUTASSIST_PREVGROUP = 2728,

  /**
   * 键盘输入Assist_Next，切换输入组中下一个输入法。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDINPUTASSIST_NEXTGROUP = 2729,

  /**
   * 键盘输入Assist_Accept。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDINPUTASSIST_ACCEPT = 2730,

  /**
   * 键盘输入Assist_Cancel。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_KBDINPUTASSIST_CANCEL = 2731,

  /**
   * 鼠标AI助手键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  KEYCODE_MOUSE_ASSISTANT = 2732,

  /**
   * 鼠标智慧框选键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  KEYCODE_MOUSE_INTELLIGENCE_SELECTION = 2733,

  /**
   * 手机触摸屏单击事件，在熄屏显示状态下使用。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  KEYCODE_AOD_SINGLE_CLICK = 2740,

  /**
   * 挡风玻璃除雾器开关。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_FRONT = 2800,

  /**
   * 设置键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SETUP = 2801,

  /**
   * 唤醒键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_WAKEUP = 2802,

  /**
   * 发送文件按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SENDFILE = 2803,

  /**
   * 删除文件按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DELETEFILE = 2804,

  /**
   * 文件传输（XFER）按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_XFER = 2805,

  /**
   * 程序键1。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PROG1 = 2806,

  /**
   * 程序键2。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PROG2 = 2807,

  /**
   * DOS面板键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MSDOS = 2808,

  /**
   * 屏幕锁定键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SCREENLOCK = 2809,

  /**
   * 方向旋转显示键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DIRECTION_ROTATE_DISPLAY = 2810,

  /**
   * 窗口切换键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CYCLEWINDOWS = 2811,

  /**
   * 按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_COMPUTER = 2812,

  /**
   * 弹出CD键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_EJECTCLOSECD = 2813,

  /**
   * ISO键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ISO = 2814,

  /**
   * 移动键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_MOVE = 2815,

  /**
   * 按键'F13'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F13 = 2816,

  /**
   * 按键'F14'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F14 = 2817,

  /**
   * 按键'F15'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F15 = 2818,

  /**
   * 按键'F16'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F16 = 2819,

  /**
   * 按键'F17'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F17 = 2820,

  /**
   * 按键'F18'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F18 = 2821,

  /**
   * 按键'F19'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F19 = 2822,

  /**
   * 按键'F20'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F20 = 2823,

  /**
   * 按键'F21'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F21 = 2824,

  /**
   * 按键'F22'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F22 = 2825,

  /**
   * 按键'F23'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F23 = 2826,

  /**
   * 按键'F24'。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_F24 = 2827,

  /**
   * 程序键3。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PROG3 = 2828,

  /**
   * 程序键4。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_PROG4 = 2829,

  /**
   * 仪表板。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_DASHBOARD = 2830,

  /**
   * 挂起键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SUSPEND = 2831,

  /**
   * 高阶路径键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_HP = 2832,

  /**
   * 音量键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SOUND = 2833,

  /**
   * 疑问按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_QUESTION = 2834,

  /**
   * 连接键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CONNECT = 2836,

  /**
   * 运动按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SPORT = 2837,

  /**
   * 商城键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SHOP = 2838,

  /**
   * 交替键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_ALTERASE = 2839,

  /**
   * 在可用视频之间循环输出（监视器/LCD/TV输出/等）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_SWITCHVIDEOMODE = 2841,

  /**
   * 电池按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BATTERY = 2842,

  /**
   * 蓝牙按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BLUETOOTH = 2843,

  /**
   * 无线局域网。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_WLAN = 2844,

  /**
   * 超宽带控制键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_UWB = 2845,

  /**
   * 移动网络控制键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_WWAN_WIMAX = 2846,

  /**
   * 控制所有收音机的键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_RFKILL = 2847,

  /**
   * 向上频道键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_CHANNEL = 3001,

  /**
   * 按键0。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_0 = 3100,

  /**
   * 按键1。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_1 = 3101,

  /**
   * 按键2。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_2 = 3102,

  /**
   * 按键3。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_3 = 3103,

  /**
   * 按键4。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_4 = 3104,

  /**
   * 按键5。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_5 = 3105,

  /**
   * 按键6。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_6 = 3106,

  /**
   * 按键7。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_7 = 3107,

  /**
   * 按键8。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_8 = 3108,

  /**
   * 按键9。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  KEYCODE_BTN_9 = 3109,

  /**
   * 智能手表智感窗按键单击。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 18 dynamic
   * @since 23 static
   */
  KEYCODE_DAGGER_CLICK = 3211,

  /**
   * 智能手表智感窗按键双击。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 18 dynamic
   * @since 23 static
   */
  KEYCODE_DAGGER_DOUBLE_CLICK = 3212,

  /**
   * 智能手表智感窗按键长按。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 18 dynamic
   * @since 23 static
   */
  KEYCODE_DAGGER_LONG_PRESS = 3213,

  /**
   * 智能手表左按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  KEYCODE_DIV = 3220,

  /**
   * 自定义快捷键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  KEYCODE_XKEY = 3232,

  /**
   * 智控键上滑。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  KEYCODE_FINGERPRINT_SLIDE_UP = 3233,

  /**
   * 智控键下滑。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  KEYCODE_FINGERPRINT_SLIDE_DOWN = 3234
}