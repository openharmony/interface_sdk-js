'use static';
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
 * @file
 * @kit ArkUI
 */

import { Callback, ErrorCallback, BusinessError } from '../../@ohos.base';
import { CommonMethod, AttributeModifier } from "./common";
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';

/**
 * 用于在DynamicComponent构造时传递参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DynamicOptions {
  /**
   * 要加载的Abc页面入口。<br/>取值格式：'bundleName/moduleName/pagePath'，例如'com.example.myapplication/entry/ets/pages/DynamicPage'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  entryPoint: string;
  /**
   * 运行Abc的Worker。<br/>ArkTS-Sta模式下，可传入undefined，表示回拉起一个空的DynamicComponent。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  worker: EAWorker | undefined;
  /**
   * 是否启用组件背景透明。<br/>true：启用背景透明；false：不启用背景透明。<br/>默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundTransparent?: boolean;
  /**
   * 是否允许DynamicComponent跨进程嵌套UIExtensionComponent。<br/>true：允许跨进程嵌套；false：不允许跨进程嵌套。<br/>默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  allowCrossProcessNesting?: boolean;
  /**
   * 表示是否允许DynamicComponent内部避让键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  allowOccupied?: boolean;
}

/**
 * 定义DynamicComponent的属性方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DynamicComponentAttribute extends CommonMethod {
  /**
   * 设置动态组件选项。
   *
   * @param { DynamicOptions } options - 选项。
   * @returns { this } DynamicComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setDynamicComponentOptions(options: DynamicOptions): this;
  /**
   * DynamicComponent运行过程中发生异常时触发该回调。
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback - 回调函数，入参用于接收异常信息。
   *     <br/>ArkTS-Sta模式下，可传入undefined，表示取消回调函数。
   * @returns { DynamicComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onError(callback: ErrorCallback<BusinessError> | undefined): this;
}

/**
 * 创建DynamicComponent组件，用于显示Worker线程中运行的Abc UI。
 *
 * @param { DynamicOptions } options - DynamicComponent的构造配置参数，用于配置要加载的Abc页面入口、运行Worker及显示选项。
 * @returns { DynamicComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function DynamicComponent(
    options: DynamicOptions
): DynamicComponentAttribute;

/**
 * 定义DynamicComponent组件。要求在组件属性设置开始时调用setDynamicComponentOptions，
 * 在组件属性设置结束时
 * 调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<DynamicComponentAttribute> } style - 用于设置DynamicComponent属性的回调。
 * @returns { DynamicComponentAttribute } DynamicComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function DynamicComponent(
    style: CustomBuilderT<DynamicComponentAttribute>
): DynamicComponentAttribute;