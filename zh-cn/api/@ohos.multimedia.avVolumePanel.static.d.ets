'use static';
/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @file 音量面板
 * @kit AudioKit
 */

import { Position } from './arkui/component/units';
import { PropRef } from './arkui/stateManagement/decorator';
import { Component } from './arkui/component/customComponent';
import { Builder } from './arkui/component/builder';

/**
 * 音量面板参数设置。
 *
 * @syscap SystemCapability.Multimedia.Audio.Volume
 * @since 23 static
 */
export declare class AVVolumePanelParameter {
  /**
   * 设置音量面板的位置。
   * 
   * 如果不设置该参数，则使用系统默认的音量面板位置。
   * 
   * 如果设置该参数且参数对应屏幕内位置，则显示应用设置的位置。
   * 
   * 如果设置该参数且参数对应屏幕外位置，例如（-1, -1），则隐藏系统默认音量面板。
   * 
   * **注意：** 若应用需隐藏系统默认音量面板，必须提供自定义音量面板，以确保用户仍可调节音量。
   *
   * @type { ?Position }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 23 static
   */
  position?: Position;
}

/**
 * 音量面板，可用于在当前应用内展示音量调节面板。
 *
 * @struct { AVVolumePanel }
 * @syscap SystemCapability.Multimedia.Audio.Volume
 * @since 23 static
 */
@Component
export declare struct AVVolumePanel {
  /**
   * 通过音量面板设置的音量值。
   * 
   * 该值应介于当前设备音量的最小值和最大值之间。
   * 
   * 如果该值大于当前设备音量的最大值，则视为设置最大音量值。
   * 
   * 如果该值小于当前设备音量的最小值，则视为设置最小音量值。
   * 
   * 获取设备的最大值、最小值和当前值，可参考[AudioVolumeGroupManager]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager}。
   *
   * @type { ?int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 23 static
   */
  @PropRef
  volumeLevel?: int;

  /**
   * 设置音量面板的自定义参数。 
   * 
   * 如果不设置该参数，则为系统音量条。
   *
   * @type { ?AVVolumePanelParameter }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 23 static
   */
  @PropRef
  volumeParameter?: AVVolumePanelParameter;

  /**
   * 用于构造组件的建造接口。
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}