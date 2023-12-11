/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { PanelFlag, type PanelInfo, PanelType } from '../@ohos.inputMethod.Panel';
import { InputMethodListDialog, Pattern, PatternOptions } from '../@ohos.inputMethodList';
import {
  ActionType, type FourFingersSwipe, type Pinch, type Rotate, type ThreeFingersSwipe, type ThreeFingersTap
} from '../@ohos.multimodalInput.gestureEvent';
import inputConsumer from '../@ohos.multimodalInput.inputConsumer';
import inputDevice from '../@ohos.multimodalInput.inputDevice';
import inputDeviceCooperate from '../@ohos.multimodalInput.inputDeviceCooperate';
import { type InputEvent } from '../@ohos.multimodalInput.inputEvent';
import inputEventClient from '../@ohos.multimodalInput.inputEventClient';
import inputMonitor from '../@ohos.multimodalInput.inputMonitor';
import { IntentionCode } from '../@ohos.multimodalInput.intentionCode';
import { KeyCode } from '../@ohos.multimodalInput.keyCode';
import { Action, type Key, type KeyEvent } from '../@ohos.multimodalInput.keyEvent';
import {
  Action as MouseAction, Axis, type AxisValue, Button, type MouseEvent, ToolType as MouseToolType
} from '../@ohos.multimodalInput.mouseEvent';
import pointer from '../@ohos.multimodalInput.pointer';
import shortKey from '../@ohos.multimodalInput.shortKey';
import {
  Action as KeyAction, SourceType, ToolType, type Touch, type TouchEvent
} from '../@ohos.multimodalInput.touchEvent';

export {
  Action, ActionType, Axis, type AxisValue, Button, type FourFingersSwipe, type InputEvent, InputMethodListDialog,
  IntentionCode, type Key, KeyAction, KeyCode, type KeyEvent, MouseAction, type MouseEvent, MouseToolType, PanelFlag,
  type PanelInfo, PanelType, Pattern, PatternOptions, type Pinch, type Rotate, SourceType, type ThreeFingersSwipe,
  type ThreeFingersTap, ToolType, type Touch, type TouchEvent, inputConsumer, inputDevice, inputDeviceCooperate,
  inputEventClient, inputMonitor, pointer, shortKey
};
