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
   * Prints debugging information in formatted output mode.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - Arguments in the message or other information to be printed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * Prints log information in formatted output mode.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - Arguments in the message or other information to be printed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * Prints log information in formatted output mode. This API is the alias of console.log ().
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments - Arguments in the message or other information to be printed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * Prints warning information in formatted output mode.
   *
   * @param { string } message - Warning information to be printed.
   * @param { any[] } arguments - Arguments in the message or other information to be printed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * Prints error information in formatted output mode.
   *
   * @param { string } message - Error information to be printed.
   * @param { any[] } arguments - Arguments in the message or other information to be printed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static error(message: string, ...arguments: any[]): void;

  /**
   * Prints assertion information.
   *
   * @param { Object } [value] - Result value. If value is false or left blank, the output starting with "Assertion
   *     failed" is printed. If value is true, no information is printed.
   * @param { Object[] } arguments - Other information to be printed when value is false. If this parameter is left
   *     blank, other information is not printed.
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
   * Maintains an internal counter. When this counter is invoked,
   * its label name and the corresponding call count are printed.
   *
   * @param { string } [label] - Counter label name. The default value is default.
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
   * Resets a counter based on the specified label name.
   *
   * @param { string } [label] - Counter label name. The default value is default.
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
   * Prints content of the specified object.
   *
   * @param { Object } [dir] - Object whose content needs to be printed.
   *     If this parameter is left blank, no information is printed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static dir(dir?: Object): void;

  /**
   * Displays an interactive tree of the descendant elements of the specified XML element.
   * This API is implemented by calling console.log() internally.
   * It does not produce any XML elements. The usage method is the same as that of console.log().
   *
   * @param { Object[] } arguments - Information to be printed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static dirxml(...arguments: Object[]): void;

  /**
   * Increases the indentation of subsequent lines by two spaces.
   * If the information to be printed is provided, the information is printed without extra indentation.
   *
   * @param { Object[] } arguments - Information to be printed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static group(...arguments: Object[]): void;

  /**
   * Creates a new inline group in collapsed mode.
   * The usage and function of this API are the same as those of console.group().
   *
   * @param { Object[] } arguments - Information to be printed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static groupCollapsed(...arguments: Object[]): void;

  /**
   * Reduces the indentation of subsequent lines by two spaces.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static groupEnd(): void;

  /**
   * Prints data in a table.
   *
   * @param { Object } [tableData] - Data to be printed in a table.
   *     If this parameter is left blank, no information is printed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static table(tableData?: Object): void;

  /**
   * Starts a timer to track the duration of an operation.
   * You can use console.timeEnd() to close the timer and print the elapsed time (in ms).
   *
   * @param { string } [label] - Timer label. The default value is default.
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
   * Stops the timer started by calling console.time() and prints the elapsed time (in ms).
   *
   * @param { string } [label] - Timer label. The default value is default.
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
   * Prints the elapsed time and other data parameters for the timer started by console.time().
   *
   * @param { string } [label] - Timer label. The default value is default.
   * @param { Object[] } arguments - Logs to be printed.
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
   * Creates a stack trace.
   *
   * @param { Object[] } arguments - Logs to be printed. If this parameter is left blank,
   *     only stack information is printed.
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
 *     to system limitations. If it exceeds 2^31 ¨C 1, the value will be **0**.
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
 *     to system limitations. If it exceeds 2^31 ¨C 1, the value will be **0**.
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
 * Cancels the repeated timer set via **setInterval()**.
 * The timer object is stored in the thread where the timer is created and must be deleted in that thread.
 *
 * @param { number } [intervalID] - ID of the repeated timer to be canceled, which must match the return value of the
 *     **setInterval** API used to create the repeated timer. If this parameter is omitted or the repeated timer ID does
 *     not exist, no timer will be canceled.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * Cancels a timer set via **setTimeout()**.
 * The timer object is stored in the thread where the timer is created and must be deleted in that thread.
 *
 * @param { number } [timeoutID] - The ID of the timer to be canceled, which must be the same as the return value of
 *     **setTimeout()**. If this parameter is omitted or the specified timer ID does not exist, no timer will be
 *     canceled.
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
 * @since 11 dynamic
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
 * The **loadNativeModule** API is used to synchronously and dynamically load a native module, that is, only load the
 * required module at a time. Using this API increases the time for loading the .so file. You need to evaluate the
 * impact on the functionality.
 *
 * > **NOTE**
 * >
 * > The name of the module loaded by **loadNativeModule** is the name provided in **dependencies** in the
 * > **oh-package.json5** file of the dependency.
 * >
 * > **loadNativeModule** can be used only to load native modules in the UI main thread.
 * >
 * > Dependencies must be configured for the API call regardless of whether the parameter is a constant string or
 * > variable expression.
 *
 * @param { string } moduleName - Name of the module to load.
 * @returns { Object } Default export of the native module.
 * @throws { BusinessError } 401 - The parameter check failed.
 * @throws { BusinessError } 10200301 - Loading native module failed.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare function loadNativeModule(moduleName: string): Object;