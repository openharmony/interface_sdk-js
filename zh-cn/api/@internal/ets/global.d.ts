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


/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare class console {
  /**
   * Prints "debug" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * Prints "log" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * Prints "info" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * Prints "warn" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * Prints "error" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static error(message: string, ...arguments: any[]): void;

  /**
   * Prints a message if value is false or omitted.
   *
   * @param { Object } [value] - The value tested for being truthy.
   * @param { Object[] } arguments - Used as error message to print.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static assert(value?: Object, ...arguments: Object[]): void;

  /**
   * Maintains an internal counter specific to label and print the number of times
   * console.count() has been called with the given label.
   *
   * @param { string } [label] - Counter name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static count(label?: string): void;

  /**
   * Reset the internal counter specific to label.
   *
   * @param { string } [label] - Counter name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static countReset(label?: string): void;

  /**
   * Prints properties of the specified JavaScript object.
   *
   * @param { Object } [dir] - A JavaScript object whose properties should be output.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static dir(dir?: Object): void;

  /**
   * This method calls console.log() passing it the arguments received.
   * This method does not produce any XML formatting.
   *
   * @param { Object[] } arguments - Text to print.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static dirxml(...arguments: Object[]): void;

  /**
   * Creates a new inline group, causing any subsequent console messages to be indented by an additional level.
   *
   * @param { Object[] } arguments - messages to print first.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static group(...arguments: Object[]): void;

  /**
   * Same as console.group()
   *
   * @param { Object[] } arguments - messages to print first.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static groupCollapsed(...arguments: Object[]): void;

  /**
   * Exit current inline group.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static groupEnd(): void;

  /**
   * Prints tabular data as a table.
   *
   * @param { Object } [tableData] - tabular data.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static table(tableData?: Object): void;

  /**
   * Start a timer.
   *
   * @param { string } [label] - Timer name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static time(label?: string): void;

  /**
   * End a timer and print time duration.
   *
   * @param { string } [label] - Timer name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static timeEnd(label?: string): void;

  /**
   * Print the elapsed time and other data arguments.
   *
   * @param { string } [label] - Timer name. Default: "default".
   * @param { Object[] } arguments - Text to print.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static timeLog(label?: string, ...arguments: Object[]): void;

  /**
   * Prints stack information for the current code location.
   *
   * @param { Object[] } arguments - message to print.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static trace(...arguments: Object[]): void;

  /**
   * Prints information about the current hybrid stack of the calling thread in the main thread or worker thread.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static traceHybridStack(): void;
}

/**
 * Sets a repeating timer for the system to repeatedly call a function at a fixed interval.
 * The timer can only be manually deleted when the **clearInterval** API is called.
 *
 * @param { Function | string } handler - When the type is function, this parameter specifies the callback function to
 *     be invoked upon the timer's expiration. <br>When the type is string, error information is printed with no
 *     additional processing.
 * @param { number } delay - Number of milliseconds delayed before the execution. It is recommended that an integer be
 *     passed in; a decimal will be rounded down.<br>If this parameter is omitted, the default value of **0** is used.<
 *     br>**NOTE**<br>1. This timer is not a precise timer, and there may be a discrepancy between the actual delay and
 *     the expected delay.<br>2. If the value is less than 1, it will be defaulted to **0**.<br>3. The value is subject
 *     to system limitations. If it exceeds 2^31 – 1, the value will be **0**.
 * @param { any[] } arguments - Additional parameters that are passed to **handler** only when **handler** is of the
 *     function type.<br>If the number of arguments is less than that of the **handler** function parameters, the
 *     parameters that are not overwritten by arguments are set to **undefined**.<br>If the number of arguments exceeds
 *     that of the **handler** function parameters, the excess arguments will be ignored. However, they can still be
 *     accessed via the built-in arguments object within the **handler** function.
 * @returns { number } ID of the timer. The timer ID is shared by processes and is an integer starting from 0 in
 *     ascending order.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;

/**
 * Sets a timer for the system to call a function after the timer goes off.
 * The timer is automatically deleted after callback execution, or you may manually delete it via the **clearTimeout()**
 * API.
 *
 * @param { Function | string } handler - When the type is function, this parameter specifies the callback function to
 *     be invoked upon the timer's expiration. <br>When the type is string, error information is printed with no
 *     additional processing.
 * @param { number } [delay] - Number of milliseconds delayed before the execution. It is recommended that an integer be
 *     passed in; a decimal will be rounded down.<br>If this parameter is omitted, the default value of **0** is used.<
 *     br>**NOTE**<br>1. This timer is not a precise timer, and there may be a discrepancy between the actual delay and
 *     the expected delay.<br>2. If the value is less than 1, it will be defaulted to **0**.<br>3. The value is subject
 *     to system limitations. If it exceeds 2^31 – 1, the value will be **0**.
 * @param { any[] } arguments - Additional parameters that are passed to **handler** only when **handler** is of the
 *     function type.<br>If the number of arguments is less than that of the **handler** function parameters, the
 *     parameters that are not overwritten by arguments are set to **undefined**.<br>If the number of arguments exceeds
 *     that of the **handler** function parameters, the excess arguments will be ignored. However, they can still be
 *     accessed via the built-in arguments object within the **handler** function. [since 7 - 10]
 * @param { any[] } [arguments] - Additional parameters that are passed to **handler** only when **handler** is of the
 *     function type.<br>If the number of arguments is less than that of the **handler** function parameters, the
 *     parameters that are not overwritten by arguments are set to **undefined**.<br>If the number of arguments exceeds
 *     that of the **handler** function parameters, the excess arguments will be ignored. However, they can still be
 *     accessed via the built-in arguments object within the **handler** function. [since 10]
 * @returns { number } ID of the timer. The timer ID is shared by processes and is an integer starting from 0 in
 *     ascending order.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;

/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function clearTimeout(timeoutID?: number): void;

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
 * @since 11 dynamic
 * @since 23 static
 */
export declare function canIUse(syscap: string): boolean;

/**
 * 根据id获取组件的所有属性。
 *
 * @param { string } id - ID为声明组件时通过id或者key方法传入的参数。
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * 根据id获取组件的所有属性。
 *
 * @param { string } id - ID为声明组件时通过id或者key方法传入的参数。
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * 根据id获取组件的所有属性。
 *
 * @param { string } id - ID为声明组件时通过id或者key方法传入的参数。
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @test
 */
export declare function getInspectorByKey(id: string): string;

/**
 * 获取当前组件树。
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * 获取当前组件树。
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * 获取当前组件树。
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
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
 * @since 11 dynamic
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
 * @since 11 dynamic
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
 * @since 11 dynamic
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
 * @since 11 dynamic
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;
/**
 * Mark moduleNamespace which loaded by dynamic-import is collectable.
 *
 * @param { Object } namespace - moduleNamespace to be marked.
 * @throws { BusinessError } 401 - if type of object is not moduleNameSpace.
 * @syscap SystemCapability.Utils.Lang
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamiconly
 */
export declare function markModuleCollectable(namespace: Object): void;

/**
 *
 * @param { string } moduleName - Indicates the native module name.
 * @returns { Object } Returns the default export from the native module.
 * @throws { BusinessError } 401 - The parameter check failed.
 * @throws { BusinessError } 10200301 - Loading native module failed.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare function loadNativeModule(moduleName: string): Object;