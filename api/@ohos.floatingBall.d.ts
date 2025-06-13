/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import type BaseContext from './application/BaseContext';
import type image from './@ohos.multimedia.image';
import type Want from './@ohos.app.ability.Want';
import type { Callback } from './@ohos.base';

/**
 * Floating-ball
 *
 * @namespace floatingBall
 * @syscap SystemCapability.Window.SessionManager
 * @since 20
 */
declare namespace floatingBall {
  /**
   * If floating-ball enabled in current OS.
   *
   * @returns { boolean } true if floating-ball enabled, otherwise false.
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  function isFloatingBallEnabled(): boolean;

  /**
   * Create floating-ball controller
   *
   * @permission ohos.permission.USE_FLOAT_BALL
   * @param { FloatingBallConfiguration } config - Params for floating-ball controller creation. 
   * The config must be valid, the context in config should not be null. 
   * @returns { Promise<FloatingBallController> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed, usually returned by VerifyAccessToken.
   * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
   *                                                                2. Incorrect parameter types.
   *                                                                3. Parameter verification failed
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  function create(config: FloatingBallConfiguration): Promise<FloatingBallController>;

  /**
   * FloatingBallConfiguration
   *
   * @interface FloatingBallConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  interface FloatingBallConfiguration {
    /**
     * Indicates window context.
     *
     * @type { BaseContext }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    context: BaseContext;
  }

  /**
   * FloatingBallController
   *
   * @interface FloatingBallController
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  interface FloatingBallController {
    /**
     * Start floating-ball
     * 
     * @param { FloatingBallOptions } option - Params for floating-ball start. The config must be valid,
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
     *                                                                2. Incorrect parameter types.
     *                                                                3. Parameter verification failed
     * @throws { BusinessError } 1300019 - Failed to create the floating-Ball window.
     * @throws { BusinessError } 1300020 - Cannot start multiple floating-Ball window.
     * @throws { BusinessError } 1300021 - Repeated floating-Ball operation.
     * @throws { BusinessError } 1300022 - Floating-ball internal error.
     * @throws { BusinessError } 1300023 - The floating-ball window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    startFloatingBall(option: FloatingBallOptions): Promise<void>;

    /**
     * Update floating-ball
     * 
     * @param { FloatingBallOptions } option - Params for floating-ball update. The config must be valid,
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
     *                                                                2. Incorrect parameter types.
     *                                                                3. Parameter verification failed
     * @throws { BusinessError } 1300022 - Floating-ball internal error.
     * @throws { BusinessError } 1300023 - The floating-ball window state is abnormal.
     * @throws { BusinessError } 1300024 - The floating-ball state is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    updateFloatingBall(option: FloatingBallOptions): Promise<void>;

    /**
     * Stop floating-ball.
     * 
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300020 - Cannot start multiple floating-Ball window.
     * @throws { BusinessError } 1300022 - Floating-ball internal error.
     * @throws { BusinessError } 1300023 - The floating-ball window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    stopFloatingBall(): Promise<void>;

    /**
     * Register floating-ball lifecycle event listener.
     * 
     * @param { 'stateChange' } type - Registration type, floating-ball lifecycle state change, 'stateChange'.
     * @param { Callback<FloatingBallState> } callback - Used to handle {'stateChange'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    on(type: 'stateChange', callback: Callback<FloatingBallState>): void;

    /**
     * Unregister floating-ball lifecycle event listener.
     * 
     * @param { 'stateChange' } type - Used to unregister listener for {'stateChange'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    off(type: 'stateChange'): void;

    /**
     * Register floating-ball click event listener.
     * 
     * @param { 'clickEvent' } type - Registration type, user click event, 'clickEvent'.
     * @param { Callback<void> } callback - Used to handle {'clickEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    on(type: 'clickEvent', callback: Callback<void>): void;

    /**
     * Unregister floating-ball click event listener.
     * 
     * @param { 'clickEvent' } type - Used to unregister listener for {'clickEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    off(type: 'clickEvent'): void;

    /**
     * Get the info of floating-ball window.
     * 
     * @returns { Promise<FloatingBallWindowInfo> } - The promise used to return the floating-ball window info.
     * @throws { BusinessError } 1300022 - Floating-ball internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    getFloatingBallWindowInfo(): Promise<FloatingBallWindowInfo>;

    /**
     * Restore Ability for floating-ball creatorBundle.
     *
     * @param { Want } want - Params for floating-ball restoration. The config must be valid,
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300020 - Cannot start multiple floating-Ball window.
     * @throws { BusinessError } 1300022 - Floating-ball internal error.
     * @throws { BusinessError } 1300024 - The floating-ball state is invalid.
     * @throws { BusinessError } 1300025 - Failed to restore the ability.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    restoreAbility(want: Want): Promise<void>;
  }

  /**
   * The option of floating-ball
   *
   * @interface FloatingBallOptions
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  interface FloatingBallOptions {
    /**
     * The template of floating-ball.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    template?: number;
    
    /**
     * The title of floating-ball.
     *
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    title?: string;
    
    /**
     * The titleContent of floating-ball.
     *
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    titleContent?: string;
    
    /**
     * The icon of floating-ball.
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    icon?: image.PixelMap;
  }

  /**
   * Enum for FloatingBall window callback event type.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  enum FloatingBallState {
    /**
     * FloatingBall window started.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    STARTED = 1,
  
    /**
     * FloatingBall window stopped.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    STOPPED = 2,
  }

  /**
   * The info of floating-ball window.
   *
   * @interface FloatingBallWindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @since 20
   */
  interface FloatingBallWindowInfo {
    /**
     * Indicates target window id.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20
     */
    windowId: number;
  }
}

export default floatingBall;
