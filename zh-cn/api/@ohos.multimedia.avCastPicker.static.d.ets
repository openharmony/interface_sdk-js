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
 投播组件
 * @file
 投播组件
 * @kit AVSessionKit
 */

import { PropRef } from '@ohos.arkui.stateManagement';

import { Component } from '@ohos.arkui.component';

import { PropRef } from './arkui/stateManagement/decorator';

import { Color} from '@ohos.arkui.component';
import { Component } from './arkui/component/customComponent';

import { CustomBuilder, Builder, BuilderParam } from '@ohos.arkui.component';
import { Color} from './arkui/component/enums';
import { CustomBuilder, Builder, BuilderParam } from './arkui/component/builder';
import { AVCastPickerState, AVCastPickerStyle, AVCastPickerColorMode } from './@ohos.multimedia.avCastPickerParam';

/**
 * 本模块提供创建投播组件AVCastPicker的功能，提供设备发现连接的统一入口。
 * 
 * > **说明：**
 * >
 * > - 示例效果请以真机为准，当前DevEco Studio预览器无实际投播功能。<!--Del-->
 * >
 * > - 当前组件的使用，依赖于设备支持“设备选择界面”。当前暂无OpenHarmony设备支持，需要OEM厂商实现具体的“设备选择界面”。<!--DelEnd-->
 *
 * @struct { AVCastPicker }
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @since 23 static
 */
@Component
declare struct AVCastPicker {

  /**
   * 正常状态下投播组件的颜色。
   * 
   * 未设置时，将采用colorMode下的颜色设置。
   *
   * @type { ? (Color | int | string) }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @since 23 static
   */
  @PropRef
  normalColor?: Color | int | string;

  /**
   * 设备连接成功状态下投播组件的颜色。
   * 
   * 未设置时，系统将优先根据normalColor的颜色匹配；如果normalColor也未设置，将采用colorMode下的颜色设置。
   *
   * @type { ? (Color | int | string) }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @since 23 static
   */
  @PropRef
  activeColor?: Color | int | string;

  /**
   * 投播样式。
   * 
   * - 当sessionType是audio或者video时，默认值为STYLE_PANEL。
   * - 当sessionType是voice_call或者video_call时，默认值为STYLE_MENU，且不可修改为STYLE_PANEL。
   *
   * @type { ? AVCastPickerStyle }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 static
   */
  @PropRef
  pickerStyle?: AVCastPickerStyle;

  /**
   * 显示模式。默认值为AUTO。
   * 
   * - 当colorMode设置为AUTO时，跟随系统的深浅色模式的默认色值。
   * - 当colorMode设置为DARK、LIGHT时，使用对应模式的系统预设色值。
   *
   * @type { ? AVCastPickerColorMode }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 static
   */
  @PropRef
  colorMode?: AVCastPickerColorMode;

  /**
   * 会话类型，可参考[AVSessionType]{@link @ohos.multimedia.avsession:avSession.AVSessionType}。默认值为当前应用创建的AVSessionType。
   *
   * @type { ? string }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 static
   */
  @PropRef
  sessionType?: string;

  /**
   * 自定义样式。建议使用自定义组件样式，可有效提升组件显示速度。
   *
   * If not set, system will show the default appearance for different device type.
   * @type { ? CustomBuilder }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 static
   */
  @BuilderParam
  customPicker?: CustomBuilder;

  /**
   * 投播状态更改回调。
   *
   * @type { ? OnPickerStateCallback }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 static
   */
  onStateChange?: OnPickerStateCallback;

  /**
   * 构造组件。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

/**
 * Callback for picker state.
 *
 * @typedef { function } OnPickerStateCallback
 * @param { AVCastPickerState } state - 设备列表状态。
 * @returns { void }
  * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @since 23 static
 */
export type OnPickerStateCallback =  (state: AVCastPickerState) => void;

export default AVCastPicker;