/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { TouchObject, KeyEvent, MouseEvent } from '../../../api/arkui/component/common';

/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function setInterval(func: () => void, delay: int): int;

/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } [arguments] - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } [arguments] - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function setTimeout(func: () => void, delay?: int): int;

/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function clearInterval(intervalID: int): void;

/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function clearTimeout(timeoutID: int): void;

/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function canIUse(syscap: string): boolean;

/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function getInspectorByKey(id: string): string;

/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function getInspectorTree(): Object;

/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendEventByKey(id: string, action: number, params: string): boolean;

/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;

/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;

/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;
