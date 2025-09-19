'use static'
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
 * @file
 * @kit AVSessionKit
 * @arkts 1.2
 */

import { PropRef } from './arkui/stateManagement/decorator';
import { Component } from './arkui/component/customComponent';
import { Color} from './arkui/component/enums';
import { CustomBuilder, Builder, BuilderParam } from './arkui/component/builder';
import { AVCastPickerState, AVCastPickerStyle, AVCastPickerColorMode } from './@ohos.multimedia.avCastPickerParam';

/**
 * A picker view to show availale streaming device list.
 * @struct { AVCastPicker }
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @since 22
 */
@Component
declare struct AVCastPicker {

  /**
   * Assigns the color of picker component at normal state .
   * @type { ? (Color | int | string) }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @since 22
   */
  @PropRef
  normalColor?: Color | int | string;

  /**
   * Assigns the color of picker component at active state.
   * @type { ? (Color | int | string) }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @crossplatform
   * @since 22
   */
  @PropRef
  activeColor?: Color | int | string;

  /**
   * Set the picker style.
   * @type { ? AVCastPickerStyle }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 22
   */
  @PropRef
  pickerStyle?: AVCastPickerStyle;

  /**
   * Set the picker color mode.
   * @type { ? AVCastPickerColorMode }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 22
   */
  @PropRef
  colorMode?: AVCastPickerColorMode;

  /**
   * Set the session type used by current picker component which can refer to AVSessionType in avSession.
   * If not set, default value is 'audio'.
   * @type { ? string }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 22
   */
  @PropRef
  sessionType?: string;

  /**
   * Set the custom builder for the picker appearance.
   * If not set, system will show the default appearance for different device type.
   * @type { ? CustomBuilder }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 22
   */
  @BuilderParam
  customPicker?: CustomBuilder;

  /**
   * Picker state change callback.
   * @type { ? OnPickerStateCallback }
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 22
   */
  onStateChange?: OnPickerStateCallback;

  /**
   * The method to build component.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 22
   */
  @Builder
  build(): void;
}

/**
 * Callback for picker state
 *
 * @typedef { function } OnPickerStateCallback
 * @param { AVCastPickerState } state - the picker state.
 * @returns { void }
 * @syscap SystemCapability.Multimedia.AVSession.AVCast
 * @since 22
 */
export type OnPickerStateCallback = (state: AVCastPickerState) => void;

export default AVCastPicker;