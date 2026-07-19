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
 * @file Layout Callback
 * @kit ArkUI
 */

import { Callback } from './@ohos.base';

/**
* 用于观察组件的布局和绘制事件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 10 dynamic
 */
declare namespace inspector {

  /**
   * ComponentObserver用于监听布局和绘制事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  interface ComponentObserver {

    /**
     * 使用句柄注册具有相应查询条件的回调。
     * 当组件布局完成时会触发此回调。
     *
     * @param { string } type - 监听事件的类型。[since 10 - 11]
     * @param { ()=>void } callback - 监听事件的回调。[since 10 - 11]
     * @param { 'layout' } type - 监听事件的类型。[since 12]
     * @param { function } callback - 监听事件的回调。[since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'layout', callback: () => void): void;

    /**
     * 使用句柄注销具有相应查询条件的回调。
     * 当组件布局完成时不再触发此回调。
     *
     * @param { string } type - 监听事件的类型。[since 10 - 11]
     * @param { ()=>void } callback - 监听事件的回调。[since 10 - 11]
     * @param { 'layout' } type - 监听事件的类型。[since 12]
     * @param { function } callback - 监听事件的回调。[since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'layout', callback?: () => void): void;

    /**
     * 使用句柄注册具有相应查询条件的回调。
     * 当组件绘制完成时会触发此回调。
     *
     * @param { string } type - 监听事件的类型。[since 10 - 11]
     * @param { ()=>void } callback - 监听事件的回调。[since 10 - 11]
     * @param { 'draw' } type - 监听事件的类型。[since 12]
     * @param { function } callback - 监听事件的回调。[since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'draw', callback: () => void): void;

    /**
     * 使用句柄注销具有相应查询条件的回调。
     * 当组件绘制完成时不再触发此回调。
     *
     * @param { string } type - 监听事件的类型。[since 10 - 11]
     * @param { ()=>void } callback - 监听事件的回调。[since 10 - 11]
     * @param { 'draw' } type - 监听事件的类型。[since 12]
     * @param { function } callback - 监听事件的回调。[since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'draw', callback?: () => void): void;

    /**
     * 使用句柄注册具有相应查询条件的回调。
     * 当组件的子级绘制完成时，会触发此回调。
     *
     * @param { 'drawChildren' } type - 监听事件的类型。
     * @param { Callback<void> } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'drawChildren', callback: Callback<void>): void;

    /**
     * 使用句柄注销具有相应查询条件的回调。
     * 当组件的子级绘制完成时，不会触发此回调。
     *
     * @param { 'drawChildren' } type - 监听事件的类型。
     * @param { Callback<void> } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'drawChildren', callback?: Callback<void>): void;

    /**
     * 使用监听句柄注册指定事件的回调函数，当组件的任一子节点绘制送显完成时会触发回调。
     *
     * @param { Callback<int[]> } callback - 监听事件的回调函数，回调函数的参数为发生绘制送显节点的UniqueId。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    onDrawChildren(callback: Callback<int[]>): void;

    /**
     * 使用监听句柄取消注册指定事件的回调函数，当组件的任一子节点绘制送显完成时不再触发回调。
     *
     * @param { Callback<int[]> } [callback] - 监听事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    offDrawChildren(callback?: Callback<int[]>): void;

    /**
     * 使用监听句柄注册指定事件的回调函数，当组件的任一子节点布局完成时会触发回调。
     *
     * @param { Callback<void> } callback - 事件触发时的回调方法。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    onLayoutChildren(callback: Callback<void>): void;

    /**
     * 使用监听句柄取消注册指定事件的回调函数，当组件的任一子节点布局完成时不再触发回调。
     *
     * @param { Callback<void> } [callback] - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    offLayoutChildren(callback?: Callback<void>): void;
  }

  /**
   *
   * @param { string } id - 组件id。
   * @returns { ComponentObserver } 创建用于观察组件事件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIInspector#createComponentObserver
   */
  function createComponentObserver(id: string): ComponentObserver;
}

export default inspector;