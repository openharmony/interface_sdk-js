
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

import { RecordData } from './@ohos.base';

import { VoidCallback } from '@ohos.arkui.component';

import { Callback } from './@ohos.base';

/**
* 用于观察组件的布局和绘制事件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace inspector {

  /**
   * ComponentObserver用于监听布局、绘制和绘制子节点事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface ComponentObserver {

    /**
     * 使用句柄注册具有相应查询条件的回调。
     * 当组件布局完成时会触发此回调。
     *
     * @param { VoidCallback } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLayout(callback: VoidCallback): void;

    /**
     * 使用句柄注销具有相应查询条件的回调。
     * 当组件布局完成时不再触发此回调。
     *
     * @param { VoidCallback } [callback] - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offLayout(callback?: VoidCallback): void;

    /**
     * 使用句柄注册具有相应查询条件的回调。
     * 当组件绘制完成时会触发此回调。
     *
     * @param { VoidCallback } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDraw(callback: VoidCallback): void;

    /**
     * 使用句柄注销具有相应查询条件的回调。
     * 当组件绘制完成时不再触发此回调。
     *
     * @param { VoidCallback } [callback] - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offDraw(callback?: VoidCallback): void;

    /**
     * 使用句柄注册具有相应查询条件的回调。
     * 当组件的子级绘制完成时会触发此回调。
     *
     * @param { VoidCallback } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDrawChildren(callback: VoidCallback): void;

    /**
     * 使用句柄注销具有相应查询条件的回调。
     * 当组件的子级绘制完成时不再触发此回调。
     *
     * @param { VoidCallback } [callback] - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offDrawChildren(callback?: VoidCallback): void;

    /**
     * 使用监听句柄注册指定事件的回调函数，当组件的任一子节点绘制送显完成时会触发回调。
     *
     * @param { Callback<int[]> } callback - 监听事件的回调函数，回调函数的参数为发生绘制送显节点的UniqueId。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    onDrawChildren(callback: Callback<int[]>): void;

    /**
     * 使用监听句柄取消注册指定事件的回调函数，当组件的任一子节点绘制送显完成时不再触发回调。
     *
     * @param { Callback<int[]> } [callback] - 监听事件的回调函数，该函数对象需要和onDrawChildren方法传入的函数对象一致时才能取消成功。
     *     undefined。
     *     <br>默认值：未定义。
     *     undefined     <br>Default value:undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    offDrawChildren(callback?: Callback<int[]>): void;

    /**
     * 使用监听句柄注册指定事件的回调函数，当组件的任一子节点布局完成时会触发回调。
     *
     * @param { VoidCallback } callback - 事件触发时的回调方法。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLayoutChildren(callback: VoidCallback): void;

    /**
     * 使用监听句柄取消注册指定事件的回调函数，当组件的任一子节点布局完成时不再触发回调。
     *
     * @param { VoidCallback } [callback] - 被取消的回调方法。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offLayoutChildren(callback?: VoidCallback): void;
  }

  /**
      * 获取指定ID的组件的所有属性。
      *
    * @param { string } id - 要获取属性的组件的ID。
    * @returns { string }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    * @test
    */
  function getInspectorByKey(id: string): string;

  /**
      * 获取组件树。
      *
    * @returns { RecordData }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    * @test
    */
  function getInspectorTree(): RecordData;

  /**
      * 向指定ID的组件发送事件。
      *
    * @param { string } id - 要发送事件的组件的ID。
    * @param { int } action - 要发送的事件类型。取值如下：点击事件：10 长按事件：11。
    * @param { string } params - 事件参数。如果没有参数，传入空字符串""。
    * @returns { boolean }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    * @test
    */
  function sendEventByKey(id: string, action: int, params: string): boolean;
}

export default inspector;

/**
 * 从inspector命名空间导出getInspectorByKey函数，并由ArkUI kit提供。
 * @constant
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare const GETINSPECTORBYKEY: (id: string) => string;

/**
 * 从inspector命名空间导出getInspectorTree函数，并由ArkUI kit提供。
 * @constant
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare const GETINSPECTORTREE: () => RecordData;
/** 
 * 从inspector命名空间导出sendEventByKey函数，并由ArkUI kit提供。 
 * @constant 
 * @syscap SystemCapability.ArkUI.ArkUI.Full 
 * @stagemodelonly 
 * @since 23 static 
 */ 
export declare const SENDEVENTBYKEY: (id: string, action: int, params: string) => boolean;