/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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
* InputEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import InputEvent from '@ohos.multimodalInput.inputEvent';
* @permission N/A
*/

export declare interface InputEvent {
  /**
   * Event ID, generated on the server and globally unique.
   */
  id: number;

  /**
   * Id of the device that reports the input event. The value is an integer and is greater than or equal to 0.
   */
  deviceId: number;

  /**
   * Time of event.
   */
  // 事件发生时间
  actionTime: number;

  /**
   * Target screen ID, integer number, valid if the value is >=0
   */
  screenId: number;

  /**
   * Target window ID, integer number, valid value >=0
   */
  windowId: number;
}