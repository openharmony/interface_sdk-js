'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 录音设备选择组件
 * @file
 录音设备选择组件
 * @kit AVSessionKit
 */

import { Component } from './arkui/component/customComponent';
import { CustomBuilder, Builder, BuilderParam } from './arkui/component/builder';
import { OnPickerStateCallback } from './@ohos.multimedia.avCastPicker';

/**
 * 录音设备选择组件，可用于切换音频输入设备。
 *
 * 该组件为自定义组件，开发者在使用前需要先了解[@Component](docroot://ui/state-management/arkts-create-custom-components.md#component)。
 *
 * @struct { AVInputCastPicker }
 * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
 * @since 23 static
 */
@Component
export declare struct AVInputCastPicker {

  /**
   * 自定义样式。建议开发者自定义组件样式，可有效提升组件渲染性能。
   *
   * If not set, system will show the default appearance for different device type.
   * @type { ? CustomBuilder }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 static
   */
  @BuilderParam
  customPicker?: CustomBuilder;

  /**
   * 设备列表状态变更回调。
   *
   * @type { ?OnPickerStateCallback }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 static
   */
  onStateChange?: OnPickerStateCallback;

  /**
   * 构造组件。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}