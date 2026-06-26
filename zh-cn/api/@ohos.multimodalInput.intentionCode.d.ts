/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file Intention Code
 * @kit InputKit
 */

/**
 * 将键盘输入设备的原始事件映射为归一化交互的意图事件，如键盘上空格键映射后的事件为INTENTION_SELECT，意图为选中。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
export declare enum IntentionCode {

  /**
   * 未知意图
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_UNKNOWN = -1,

  /**
   * 上
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_UP = 1,

  /**
   * 下
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_DOWN = 2,

  /**
   * 左
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_LEFT = 3,

  /**
   * 右
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_RIGHT = 4,

  /**
   * 选中
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_SELECT = 5,

  /**
   * 退出
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_ESCAPE = 6,

  /**
   * 返回
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_BACK = 7,

  /**
   * 前进
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_FORWARD = 8,

  /**
   * 菜单
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_MENU = 9,

  /**
   * 上一页
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_PAGE_UP = 11,

  /**
   * 下一页
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_PAGE_DOWN = 12,

  /**
   * 缩小键
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_ZOOM_OUT = 13,

  /**
   * 放大键
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_ZOOM_IN = 14
}