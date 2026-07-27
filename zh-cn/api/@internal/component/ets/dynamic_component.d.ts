/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
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
 * 用于运行Abc的Worker线程对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Worker = import('../api/@ohos.worker').default.Worker;

/**
 * 错误回调类型，用于接收异常信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * 用于在DynamicComponent构造时传递参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DynamicOptions {
  /**
   * 要加载的Abc页面入口。<br/>取值格式：'bundleName/moduleName/pagePath'，例如'com.example.myapplication/entry/ets/pages/DynamicPage'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  entryPoint: string;
  /**
   * 用于运行Abc的Worker线程对象，需通过worker.ThreadWorker创建。Worker在独立线程中执行Abc的UI逻辑，与主线程通信。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  worker: Worker;
  /**
   * 是否启用组件背景透明。<br/>true：启用背景透明；false：不启用背景透明。<br/>默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  backgroundTransparent?: boolean;
  /**
   * 是否允许跨进程[UIExtensionComponent]{@link ./ui_extension_component}嵌套。<br/>true：允许跨进程嵌套；false：不允许跨进程嵌套。<br/>默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  allowCrossProcessNesting?: boolean;
  /**
   * 表示是否允许DynamicComponent内部避让键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  allowOccupied?: boolean;
}

/**
 * **DynamicComponent**用于支持在本页面内嵌入显示独立Abc（.abc文件）提供的UI，展示的内容在Worker线程中运行。
 *
 * 通常用于动态加载Abc页面的模块化开发场景。通过Worker线程隔离运行Abc UI，避免阻塞主线程，提升应用流畅度。
 *
 * @returns { DynamicComponentAttribute } DynamicComponent的属性
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface DynamicComponentInterface {
  /**
   * 创建DynamicComponent组件，用于显示Worker线程中运行的Abc UI。
   *
   * @param { DynamicOptions } options - DynamicComponent的构造配置参数，用于配置要加载的Abc页面入口、运行Worker及显示选项。
   * @returns { DynamicComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  (options: DynamicOptions): DynamicComponentAttribute;
}

/**
 * 支持[通用属性]{@link ./common}。
 *
 * 支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class DynamicComponentAttribute extends CommonMethod<DynamicComponentAttribute> {
  /**
   * DynamicComponent运行过程中发生异常时触发该回调。使用callback异步回调。
   *
   * @param { ErrorCallback } callback - 回调函数，入参用于接收异常信息。
   * @returns { DynamicComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onError(
        callback: ErrorCallback
    ): DynamicComponentAttribute;
}

/**
 * **DynamicComponent**用于支持在本页面内嵌入显示独立Abc（.abc文件）提供的UI，展示的内容在Worker线程中运行。
 *
 * 通常用于动态加载Abc页面的模块化开发场景。通过Worker线程隔离运行Abc UI，避免阻塞主线程，提升应用流畅度。
 *
 * ###### 子组件
 *
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponent: DynamicComponentInterface;

/**
 * 定义DynamicComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponentInstance: DynamicComponentAttribute;