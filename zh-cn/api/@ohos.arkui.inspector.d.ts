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
 * @file 布局回调
 * @kit ArkUI
 */

import { Callback } from './@ohos.base';

/**
 * 提供注册组件布局和组件绘制送显完成回调通知的能力。适用于需要在组件布局或绘制送显完成后执行自定义逻辑的场景，帮助开发者精准掌控组件渲染时机。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 10 dynamic
 */
declare namespace inspector {

  /**
   * 组件布局和组件绘制送显完成回调的句柄，通过该句柄可调用以下方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  interface ComponentObserver {

    /**
     * 通过句柄向对应的查询条件注册回调，当组件布局完成时会触发该回调。请注意，该接口无法监听窗口尺寸变化，相关需求请参考on('windowSizeChange')。此外，布局回调和窗口尺寸变化回调之间不存在确定的执行顺序依赖。
     *
     * @param { string } type - 必须填写字符串'layout'。<br/>layout：组件布局完成。[since 10 - 11]
     * @param { ()=>void } callback - 监听layout的回调。[since 10 - 11]
     * @param { 'layout' } type - 必须填写字符串'layout'。<br/>layout：组件布局完成。[since 12]
     * @param { function } callback - 监听layout的回调。[since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'layout', callback: () => void): void;

    /**
     * 通过句柄取消注册回调，当组件布局完成时不再触发指定的回调。
     *
     * @param { string } type - 必须填写字符串'layout'。<br/>layout：组件布局完成。[since 10 - 11]
     * @param { ()=>void } callback - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。callback需要和on('layout')方法中的callback为相同对象时才能取消回调成功。
     *     [since 10 - 11]
     * @param { 'layout' } type - 必须填写字符串'layout'。<br/>layout：组件布局完成。[since 12]
     * @param { function } callback - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。callback需要和on('layout')方法中的callback为相同对象时才能取消回调成功。
     *     [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'layout', callback?: () => void): void;

    /**
     * 通过句柄注册回调，当组件绘制送显完成时会触发该回调。
     *
     * @param { string } type - 必须填写字符串'draw'。<br/>draw：组件绘制送显完成。[since 10 - 11]
     * @param { ()=>void } callback - 监听draw的回调。[since 10 - 11]
     * @param { 'draw' } type - 必须填写字符串'draw'。<br/>draw：组件绘制送显完成。[since 12]
     * @param { function } callback - 监听draw的回调。[since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'draw', callback: () => void): void;

    /**
     * 通过句柄取消注册回调，当组件绘制送显完成时不再触发指定的回调。
     *
     * @param { string } type - 必须填写字符串'draw'。<br/>draw：组件绘制送显完成。[since 10 - 11]
     * @param { ()=>void } callback - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。callback需要和on('draw')方法中的callback为相同对象时才能取消回调成功。
     *     [since 10 - 11]
     * @param { 'draw' } type - 必须填写字符串'draw'。<br/>draw：组件绘制送显完成。[since 12]
     * @param { function } callback - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。callback需要和on('draw')方法中的callback为相同对象时才能取消回调成功。
     *     [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'draw', callback?: () => void): void;

    /**
     * 通过ComponentObserver注册drawChildren事件回调方法。当组件的子组件位于UI组件主树中且绘制送显完成时，会触发该回调方法。
     * 如果组件树中存在多个drawChildren事件回调，只会触发最顶层的drawChildren事件回调。取消最顶层的回调后，其余drawChildren事件回调也无法生效。
     * 当前节点注册回调后，不支持修改其在UI组件主树中的层级位置。如需调整，请先取消事件回调，再重新注册事件回调。
     *
     * @param { 'drawChildren' } type - 必须填写字符串'drawChildren'。<br/>drawChildren：子组件绘制送显完成。
     * @param { Callback<void> } callback - 监听drawChildren的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'drawChildren', callback: Callback<void>): void;

    /**
     * 通过句柄取消注册回调，当组件的子组件绘制送显完成时不再触发指定的回调。如果组件树中存在多个drawChildren事件回调，取消最顶层的回调后，其余drawChildren事件回调也无法生效。
     *
     * @param { 'drawChildren' } type - 必须填写字符串'drawChildren'。<br/>drawChildren：子组件绘制送显完成。
     * @param { Callback<void> } callback - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。
     *     callback需要和on('drawChildren')方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'drawChildren', callback?: Callback<void>): void;

    /**
     * 通过ComponentObserver注册drawChildren事件回调。使用callback异步回调。
     * 与on('drawChildren')相比，本方法在回调中额外返回子组件的uniqueId信息（Callback<number[]>），便于开发者定位具体子组件。
     * 如需获取子组件标识，建议使用本方法；若不需要子组件信息，两者均可使用。以当前注册事件回调的节点为根节点，当组件的子组件位于UI组件主树中且绘制送显完成时，会触发该回调。
     * 如果组件树中存在多个drawChildren事件回调，只会触发最顶层的drawChildren事件回调。取消最顶层的回调后，其余drawChildren事件回调也无法生效。
     * 当前节点注册事件回调后，不支持修改其在UI组件主树中的层级位置。如需调整，请先取消事件回调，再重新注册事件回调。
     *
     * @param { Callback<int[]> } callback - 监听drawChildren的回调，回调参数为子组件uniqueId数组，表示绘制送显完成的子组件的唯一标识列表。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    onDrawChildren(callback: Callback<int[]>): void;

    /**
     * 取消注册drawChildren事件回调。要实现在子组件绘制送显完成后停止触发特定回调，只需通过ComponentObserver句柄，取消注册该回调即可。
     * 如果组件树中存在多个drawChildren事件回调，取消最顶层的回调后，其余drawChildren事件回调也无法生效。
     *
     * @param { Callback<int[]> } [callback] - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。
     *     callback需要和onDrawChildren方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    offDrawChildren(callback?: Callback<int[]>): void;

    /**
     * 通过ComponentObserver注册layoutChildren事件回调。使用callback异步回调。以当前注册事件回调的节点为根节点，当子树中的节点位于UI组件主树中且完成布局时，会触发该回调。
     * 如果组件树中存在多个layoutChildren事件回调，只会触发最顶层的layoutChildren事件回调。通过offLayoutChildren取消最顶层的回调后，其余layoutChildren事件回调也无法生效。
     * 当前节点注册回调后，不支持修改其在UI组件主树中的层级位置。如需调整，请先取消事件回调，再重新注册事件回调。
     *
     * @param { Callback<void> } callback - 监听layoutChildren的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    onLayoutChildren(callback: Callback<void>): void;

    /**
     * 取消注册layoutChildren事件回调。要实现在子组件布局完成后停止触发特定回调，只需通过ComponentObserver句柄，取消注册该回调即可。
     * 如果组件树中存在多个layoutChildren事件回调，取消最顶层的回调后，其余layoutChildren事件回调也无法生效。
     *
     * @param { Callback<void> } [callback] - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。
     *     callback需要和onLayoutChildren方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    offLayoutChildren(callback?: Callback<void>): void;
  }

  /**
   * 绑定指定组件，返回对应的监听句柄。
   *
   * @param { string } id - 指定组件id，该id通过通用属性id或者key设置。
   * @returns { ComponentObserver } 组件回调事件监听句柄，用于注册和取消注册监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIInspector#createComponentObserver
   */
  function createComponentObserver(id: string): ComponentObserver;
}

export default inspector;