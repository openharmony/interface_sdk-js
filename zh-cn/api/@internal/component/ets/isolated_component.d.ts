/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file System API
 * @kit ArkUI
 */

/**
 * 用于运行Abc的受限Worker。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type RestrictedWorker = import('../api/@ohos.worker').default.RestrictedWorker;

/**
 * 错误回调类型，用于接收异常信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * 表示Want。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare type Want = import('../api/@ohos.app.ability.Want').default;

/**
 * 用于在IsolatedComponent构造时传递构造参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 */
declare interface IsolatedOptions {
  /**
   * 要加载的Abc信息。
   * Want对象的parameters中需包含以下字段：
   * <br/>resourcePath：资源路径，需为.hap文件路径；
   * <br/>abcPath：经verifyAbc校验后的Abc文件路径，需以'/abcs'开头；
   * <br/>entryPoint：Abc入口，格式为'bundleName/页面路径'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  want: Want;
  /**
   * 运行Abc的受限Worker。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  worker: RestrictedWorker;
}

/**
 * 创建IsolatedComponent组件，用于显示受限Worker运行的Abc。
 *
 * @param { IsolatedOptions } options - 需要传递的构造参数，仅首次传入有效，不支持构造参数更新。
 * @returns { IsolatedComponentAttribute } IsolatedComponent的属性
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute;

/**
 * 仅支持[width]{@link CommonMethod#width(value: Length)}、[height]{@link CommonMethod#height(value: Length)}和[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}通用属性。
 *
 * 不支持[通用事件]{@link ./common}。
 *
 * 事件经过坐标转换后异步传递给受限Worker线程处理。不支持线程之间的事件冒泡，线程之间的UI交互存在事件冲突现象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare class IsolatedComponentAttribute extends CommonMethod<IsolatedComponentAttribute> {
  /**
   * IsolatedComponent加载的Abc（以Ability扩展形式运行）在运行过程中发生异常时触发本回调。可通过回调参数中的code、name和message获取错误信息并做处理。
   *
   * @param { ErrorCallback } callback - 异常发生时的错误回调，可通过回调参数获取code、name和message错误信息。
   * @returns { IsolatedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamiconly
   */
  onError(
    callback: ErrorCallback
  ): IsolatedComponentAttribute;
}

/**
 * IsolatedComponent用于支持在本页面内嵌入显示独立Abc（方舟字节码，.abc文件）提供的UI，展示的内容在受限Worker线程中运行。
 *
 * 通常用于有Abc热更新（可动态替换IsolatedComponent加载的Abc文件，无需通过重新安装应用的方式实现内容更新）诉求的模块化开发场景。
 *
 * > **说明：**
 * >
 * > - 使用前需确保Abc已通过verifyAbc校验，且已在module.json5中配置ohos.permission.RUN_DYN_CODE权限。
 * > - 不支持构造参数更新，仅首次传入有效。
 * > - 不支持IsolatedComponent组件嵌套场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare const IsolatedComponent: IsolatedComponentInterface;

/**
 * 定义IsolatedComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamiconly
 * @noninterop
 */
declare const IsolatedComponentInstance: IsolatedComponentAttribute;