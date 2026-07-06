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
  * **inputMethodList** 模块面向系统应用和输入法应用,提供用于实现输入法列表的API。
  * 该列表展示默认输入法子类型和第三方输入法,用户可以使用此列表从默认输入法切换到其他输入法。
  * 
  * > **说明**
  * >
  * > 此组件从API version 11开始支持,更新内容将以上标标记起始API版本。
  *
  * @file
  * @kit IMEKit
  */

 /*** if arkts static */
 import { CustomDialogController, CustomDialog } from '@ohos.arkui.component';
 import { Resource } from './global/resource';
 /*** endif */

/**
 * 定义键盘的Pattern选项。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PatternOptions {
  /**
   * 可选。默认选中的Pattern。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  defaultSelected?: int;
  /**
   * 必选。Pattern选项的资源。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patterns: Array<Pattern>;
  /**
   * 必选。Pattern选项变化时的回调。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  action: (index: int) => void;
}

/**
 * 定义键盘的Pattern。调用方必须是当前输入法。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface Pattern {
  /**
   * 必选。默认图标。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  icon: Resource;
  /**
   * 必选。选中项的图标。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  selectedIcon: Resource;
}

/**
 * InputMethodListDialog({controller: CustomDialogController, patternOptions?: PatternOptions})
 * 实现显示输入法列表的对话框。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
@CustomDialog
export declare struct InputMethodListDialog {
  /**
   * 设置控制器。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 设置Pattern选项。当不是默认输入法时,此参数可以为空。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patternOptions?: PatternOptions;

  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
