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
 * 提供一个简单的调试控制台，类似于浏览器提供的JavaScript控制台机制。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare class console {
  /**
   * 以格式化输出方式打印调试信息。
   *
   * @param { string } message - 要打印的文本信息。
   * @param { any[] } arguments - 其余要打印的信息或message的替换值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * 以格式化输出方式打印日志信息。
   *
   * @param { string } message - 要打印的文本信息。
   * @param { any[] } arguments - 其余要打印的信息或message的替换值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * 以格式化输出方式打印日志信息（console.log()的别名）。
   *
   * @param { string } message - 要打印的文本信息。
   * @param { any[] } arguments - 其余要打印的信息或message的替换值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * 以格式化输出方式打印警告信息。
   *
   * @param { string } message - 要打印的警告信息。
   * @param { any[] } arguments - 其余要打印的信息或message的替换值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * 以格式化输出方式打印错误信息。
   *
   * @param { string } message - 要打印的错误信息。
   * @param { any[] } arguments - 其余要打印的信息或message的替换值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  static error(message: string, ...arguments: any[]): void;

  /**
   * 断言打印。
   *
   * @param { Object } [value] - 语句结果值。若value为假（false）或者省略，则输出以"Assertion failed"开头。
   *     如果value为真值（true），则无打印。
   * @param { Object[] } arguments - value为假（false）的后续错误消息打印。省略则不打印。
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
   * 维护一个内部计数器，调用时，打印此标签名以及对应的计数次数。
   *
   * @param { string } [label] - 计数器标签名。默认值为'default'。
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
   * 清除指定标签名的计数。
   *
   * @param { string } [label] - 计数器标签名。默认值为'default'。
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
   * 打印对象内容。
   *
   * @param { Object } [dir] - 需要打印内容的对象。省略则无任何打印。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static dir(dir?: Object): void;

  /**
   * 此方法通过内部调用console.log()实现。此方法不会产生任何XML格式。使用方法与console.log()一致。
   *
   * @param { Object[] } arguments - 要打印的信息。省略则无任何打印。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static dirxml(...arguments: Object[]): void;

  /**
   * 默认将后续行的缩进增加两个空格。
   * 如果提供需要打印的信息，则首先打印信息，没有额外的缩进。
   *
   * @param { Object[] } arguments - 要打印的信息。省略则仅打印两个空格。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static group(...arguments: Object[]): void;

  /**
   * 使用与功能同console.group()一致。
   *
   * @param { Object[] } arguments - 要打印的信息。省略则仅打印两个空格。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static groupCollapsed(...arguments: Object[]): void;

  /**
   * 将后续行的缩进减少两个空格。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static groupEnd(): void;

  /**
   * 以表格形式打印数据。
   *
   * @param { Object } [tableData] - 要打印为表格形式的对象。省略则无任何打印。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static table(tableData?: Object): void;

  /**
   * 启动可用于计算操作持续时间的计时器。可使用console.timeEnd()关闭计时器并打印经过的时间（单位：ms）。
   *
   * @param { string } [label] - 计时器标识。默认值为'default'。
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
   * 停止之前通过调用console.time()启动的计时器并打印经过的时间（单位：ms）。
   *
   * @param { string } [label] - 计时器标识。默认值为'default'。
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
   * 对于先前通过调用console.time()启动的计时器，打印经过时间和其他data参数。
   *
   * @param { string } [label] - 计时器标识。默认值为'default'。
   * @param { Object[] } arguments - 需要打印的其他日志。
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
   * 打印当前堆栈。
   *
   * @param { Object[] } arguments - 需要打印的其他日志。省略则仅打印堆栈信息。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  static trace(...arguments: Object[]): void;

  /**
   * 在主线程或worker线程中打印当前线程混合堆栈信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static traceHybridStack(): void;
}

/**
 * 重复调用一个函数，在每次调用之间具有固定的时间延迟。
 * 删除该定时器需手动调用clearInterval()接口。
 *
 * @param { Function | string } handler - 类型为Function表示定时器到期后执行函数；<br>类型为string则通过Error方式
 *     打印string中内容，不进行其他处理。
 * @param { number } delay - 延迟的毫秒数，函数的调用会在该延迟之后发生。建议传入整数，若传入小数，会被向下取整。
 *     <br>**注意**<br>1. 该计时器非精准计时器，实际延迟可能会与预期延迟存在误差。<br>2. 如果值小于1，
 *     将被默认设置为0。<br>3. delay值受系统限制，超出2^31 - 1时会溢出，delay值为0。
 * @param { any[] } arguments - 附加参数，仅当handler类型为Function时生效，作为参数传递给handler。
 *     <br>arguments参数数量少于handler函数参数数量时，未被arguments覆盖的参数会被设为undefined。
 *     <br>arguments参数数量多于handler函数参数数量时，多余的arguments参数会被忽略，但可通过handler函数内部的
 *     arguments对象访问。
 * @returns { number } 该定时器的ID，定时器ID为进程共享，是从0开始顺序增加的整数，无重复值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;

/**
 * 设置一个定时器，该定时器在定时器到期后执行一个函数。
 * 该定时器在回调被执行后自动删除，或使用clearTimeout()接口手动删除。
 *
 * @param { Function | string } handler - 类型为Function表示定时器到期后执行函数；<br>类型为string则通过Error方式
 *     打印string中内容，不进行其他处理。
 * @param { number } [delay] - 延迟的毫秒数，函数的调用会在该延迟之后发生。建议传入整数，若传入小数，会被向下取整。
 *     <br>如果省略该参数，delay取默认值0。<br>**注意**<br>1. 该计时器非精准计时器，实际延迟可能会与预期延迟存在误差。
 *     <br>2. 如果值小于1，会被默认取0。<br>3. delay值受系统限制，超出2^31 - 1时会溢出，delay值为0。
 * @param { any[] } arguments - 附加参数，仅当handler类型为Function时生效，作为参数传递给handler。
 *     <br>arguments参数数量少于handler函数参数数量时，未被arguments覆盖的参数会被设为undefined。
 *     <br>arguments参数数量多于handler函数参数数量时，多余的arguments参数会被忽略，但可通过handler函数内部的
 *     arguments对象访问。[since 7 - 10]
 * @param { any[] } [arguments] - 附加参数，仅当handler类型为Function时生效，作为参数传递给handler。
 *     <br>arguments参数数量少于handler函数参数数量时，未被arguments覆盖的参数会被设为undefined。
 *     <br>arguments参数数量多于handler函数参数数量时，多余的arguments参数会被忽略，但可通过handler函数内部的
 *     arguments对象访问。[since 10]
 * @returns { number } 该定时器的ID，定时器ID为进程共享，是从0开始顺序增加的整数，无重复值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;

/**
 * 取消通过setInterval()设置的重复定时任务。
 * 定时器对象保存在创建它的线程内，删除定时器时需要在该线程中进行。
 *
 * @param { number } [intervalID] - 要取消的重复定时器的ID，需要与调用setInterval()设置重复定时器的返回值一致。
 *     如果省略该参数或指定的重复定时器ID不存在时，不会取消任何定时任务。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * 取消通过调用setTimeout()建立的定时器。
 * 定时器对象保存在创建它的线程内，删除定时器时需要在该线程中进行。
 *
 * @param { number } [timeoutID] - 要取消定时器的ID，需要与调用setTimeout()设置定时器的返回值一致。
 *     如果省略该参数或指定的定时器ID不存在时，不会取消任何定时任务。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
export declare function clearTimeout(timeoutID?: number): void;

/**
 * 查询系统是否具备某个系统能力。
 *
 * @param { string } syscap - 待查询的系统能力名称。不支持输入null、undefined。
 * @returns { boolean } 系统能力查询结果，true表示系统具备该能力，false表示系统不具备。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 查询系统是否具备某个系统能力。
 *
 * @param { string } syscap - 待查询的系统能力名称。不支持输入null、undefined。
 * @returns { boolean } 系统能力查询结果，true表示系统具备该能力，false表示系统不具备。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * 查询系统是否具备某个系统能力。
 *
 * @param { string } syscap - 待查询的系统能力名称。不支持输入null、undefined。
 * @returns { boolean } 系统能力查询结果，true表示系统具备该能力，false表示系统不具备。
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
 * 同步动态加载native模块，目的是按需加载所需要的模块。
 * 使用该接口会增加so文件的加载时间，使用前需评估其对应用性能和功能的影响。
 *
 * > **说明：**
 * >
 * > loadNativeModule加载的模块名称为依赖方oh-package.json5文件的dependencies字段中声明的依赖名称。
 * >
 * > loadNativeModule仅支持在Stage模型的UI主线程中加载native模块。
 * >
 * > 无论moduleName参数使用常量字符串还是变量表达式，都需要配置接口调用的依赖。
 *
 * @param { string } moduleName - 加载的模块名。
 * @returns { Object } native模块的默认导出，需使用ArkTS的ESObject类型去接收。
 * @throws { BusinessError } 401 - The parameter check failed.
 * @throws { BusinessError } 10200301 - Loading native module failed.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare function loadNativeModule(moduleName: string): Object;
