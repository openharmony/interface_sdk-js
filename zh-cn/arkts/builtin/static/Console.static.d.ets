'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit ArkTS
 */

/**
 * 提供标准输出流和错误流访问能力的Console类。
 * 支持打印多种数据类型、计时操作以及缩进管理。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class Console {
    /**
     * 将基本类型值打印到标准输出。
     *
     * @param { boolean } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: boolean): void;

    /**
     * 打印日志。
     *
     * @param { byte } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: byte): void;

    /**
     * 打印日志。
     *
     * @param { short } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: short): void;

    /**
     * 打印日志。
     *
     * @param { char } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: char): void;

    /**
     * 打印日志。
     *
     * @param { int } i - 待打印的值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: int): void;

    /**
     * 打印日志。
     *
     * @param { long } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: long): void;

    /**
     * 打印日志。
     *
     * @param { float } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: float): void;

    /**
     * 打印日志。
     *
     * @param { double } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: double): void;

    /**
     * 打印日志。
     *
     * @param { string } i - 待打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(i: string): void;

    /**
     * 打印日志。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(): void;

    /**
     * 打印log级别的日志。如果第一个参数是字符串，则将其作为格式化字符串处理。
     *
     * @param { Any[] } vals - 待打印的可变number的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    log(...vals: Any[]): void;

    /**
     * 打印debug级别的日志。如果第一个参数是字符串，则将其作为格式化字符串处理。
     *
     * @param { Any[] } vals - 待打印的可变number的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    debug(...vals: Any[]): void;

    /**
     * 打印info级别的日志。如果第一个参数是字符串，则将其作为格式化字符串处理。
     *
     * @param { Any[] } vals - 待打印的可变number的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    info(...vals: Any[]): void;

    /**
     * 打印warn级别的日志。如果第一个参数是字符串，则将其作为格式化字符串处理。
     *
     * @param { Any[] } vals - 待打印的可变number的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    warn(...vals: Any[]): void;

    /**
     * 打印error级别的日志。如果第一个参数是字符串，则将其作为格式化字符串处理。
     *
     * @param { Any[] } vals - 待打印的可变number的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    error(...vals: Any[]): void;

    /**
     * 当断言条件为false时打印错误信息。条件取自vals中的
     * 第一个值（如果存在）。
     *
     * @param { Any[] } vals - 条件为false时需要打印的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    assert(...vals: Any[]): void;

    /**
     * 统计使用指定标识调用该方法的number，并将当前计数
     * 打印到标准输出。
     *
     * @param { string } [label] - 用于计数的标识。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    count(label?: string): void;

    /**
     * 重置指定标识对应的计数器。
     *
     * @param { string } [label] - 待重置计数器的标识。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    countReset(label?: string): void;

    /**
     * 将对象的格式化表示打印到标准输出，并过滤掉键中包含“field#”的属性。
     *
     * @param { Any } [obj] - 待查看的对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    dir(obj?: Any): void;

    /**
     * 将对象的XML表示打印到标准输出，当前实现按原样输出该对象。
     *
     * @param { Any[] } obj - 以XML形式展示的对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    dirxml(...obj: Any[]): void;

    /**
     * 开启新的日志分组，标识可选，后续日志的缩进级别会相应增加。
     *
     * @param { Any[] } objs - 用于开启新日志分组的标识。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    group(...objs: Any[]): void;

    /**
     * 结束当前日志分组，后续日志的缩进级别会相应减少。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    groupEnd(): void;

    /**
     * group()方法的别名，在支持的环境中创建折叠分组。
     *
     * @param { Any[] } objs - 用于创建折叠分组的标识。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    groupCollapsed(...objs: Any[]): void;

    /**
     * 以表格形式展示对象数组，会先将数据转换为DataFrame再进行渲染。
     *
     * @param { Any[] } data - 以表格形式展示的对象数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    table(...data: Any[]): void;

    /**
     * 启动计时器，标识可选，用于统计time()与timeEnd()调用之间的执行时间。
     *
     * @param { string } [label] - 定时器的标识。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    time(label?: string): void;

    /**
     * 打印运行中计时器的当前耗时且不停止该计时器。如果指定的计时器
     * 不存在，则打印告警信息。
     *
     * @param { string } [label] - 定时器的标识。
     * @param { Object[] } arguments - 附加的调试信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    timeLog(label?: string, ...arguments: Object[]): void;

    /**
     * 停止计时器并打印其耗时，同时移除该计时器；如果计时器不存在，则打印告警信息。
     *
     * @param { string } [label] - 定时器的标识。
     * @throws { Error } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    timeEnd(label?: string): void;

    /**
     * 打印当前调用栈，标识可选，并跳过第一个栈帧（即trace调用本身）。
     *
     * @param { Any[] } data - 附加的调试信息。
     * @throws { Error } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    trace(...data: Any[]): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { boolean } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: boolean): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { byte } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: byte): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { short } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: short): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { char } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: char): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { int } i - 待打印到标准输出的值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: int): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { long } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: long): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { float } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: float): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { double } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: double): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { string } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: string): void;

    /**
     * 将基本类型值打印到标准输出，且不换行。
     *
     * @param { Any } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public print(i: Any): void;

    /**
     * 向标准输出打印一个换行符。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { boolean } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: boolean): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { byte } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: byte): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { short } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: short): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { char } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: char): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { int } i - 待打印到标准输出的值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: int): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { long } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: long): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { float } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: float): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { double } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: double): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { string } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: string): void;

    /**
     * 将值打印到标准输出，并在其后换行。
     *
     * @param { Any } i - 待打印到标准输出的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public println(i: Any): void;

    /**
     * 获取Console的单例实例。
     *
     * @returns { Console } Console的单例实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static getInstance(): Console;
}
