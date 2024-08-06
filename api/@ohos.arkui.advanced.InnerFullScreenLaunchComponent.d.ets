/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Defines the inner fullScreen launch component for system applications
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import Callback from '@ohos.base';

/**
 * Declare component InnerFullScreenLaunchComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
@Component
export declare struct InnerFullScreenLaunchComponent {
  /**
   * Sets the component content.
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  @BuilderParam content: Callback<void>;

  /**
   * Sets the component Controller.
   * @type { LaunchController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi  
   * @since 12
   */
  controller?: InnerLaunchController;
}

/**
 * Declare type InnerLaunchController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 */
export declare class InnerLaunchController {

  /**
   * function to launch atomicservice.
   *
   * @param { string } - appId - appId of atomicservice
   * @param { AtomicServiceOptions } options - cannot be empty options of atomicservice
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12
   **/
  launchAtomicService: (appId: string, options?: AtomicServiceOptions) => void;
}