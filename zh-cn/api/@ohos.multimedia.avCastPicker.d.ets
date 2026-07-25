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
 * @file
 * @kit AVSessionKit
 */

import { AVCastPickerState } from './@ohos.multimedia.avCastPickerParam';
import { AVCastPickerStyle } from './@ohos.multimedia.avCastPickerParam';
import { AVCastPickerColorMode } from './@ohos.multimedia.avCastPickerParam';

/**
 * 本模块提供创建投播组件AVCastPicker的功能，提供设备发现连接的统一入口。
 * 
 * > **说明：**
 * >
 * > - 示例效果请以真机为准，当前DevEco Studio预览器无实际投播功能。<!--Del-->
 * >
 * > - 当前组件的使用，依赖于设备支持“设备选择界面”。当前暂无OpenHarmony设备支持，需要OEM厂商实现具体的“设备选择界面”。<!--DelEnd-->
 *
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @atomicservice [since 12]
 * @since 10 dynamic
 */
@Component
declare struct AVCastPicker {
  /**
   * 正常状态下投播组件的颜色。
   * 
   * 未设置时，将采用colorMode下的颜色设置。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop
  normalColor?: Color | number | string;

  /**
   * 设备连接成功状态下投播组件的颜色。
   * 
   * 未设置时，系统将优先根据normalColor的颜色匹配；如果normalColor也未设置，将采用colorMode下的颜色设置。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop
  activeColor?: Color | number | string;

  /**
   * 投播样式。
   * 
   * - 当sessionType是audio或者video时，默认值为STYLE_PANEL。
   * - 当sessionType是voice_call或者video_call时，默认值为STYLE_MENU，且不可修改为STYLE_PANEL。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  pickerStyle?: AVCastPickerStyle;

  /**
   * 显示模式。默认值为AUTO。
   * 
   * - 当colorMode设置为AUTO时，跟随系统的深浅色模式的默认色值。
   * - 当colorMode设置为DARK、LIGHT时，使用对应模式的系统预设色值。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  colorMode?: AVCastPickerColorMode;

  /**
   * 会话类型，可参考[AVSessionType]{@link @ohos.multimedia.avsession:avSession.AVSessionType}。默认值为当前应用创建的AVSessionType。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  sessionType?: string;

  /**
   * 自定义样式。建议使用自定义组件样式，可有效提升组件显示速度。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  customPicker?: CustomBuilder;

  /**
   * 投播状态更改回调。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onStateChange?: (state: AVCastPickerState) => void;
}

export default AVCastPicker;