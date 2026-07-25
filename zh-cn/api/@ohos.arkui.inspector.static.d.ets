
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
 * 提供注册组件布局和组件绘制送显完成回调通知的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace inspector {

  /**
   * 组件布局和组件绘制送显完成回调的句柄，通过该句柄可调用以下方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interface ComponentObserver {

    /**
     * 通过句柄向对应的查询条件注册回调，当组件布局完成时会触发该回调。使用callback异步回调。
     *
     * @param { VoidCallback } callback - 监听layout的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLayout(callback: VoidCallback): void;

    /**
     * 通过句柄向对应的查询条件取消注册回调，当组件布局完成时不再触发指定的回调。
     *
     * @param { VoidCallback } [callback] - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。
     *     callback需要和onLayout方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offLayout(callback?: VoidCallback): void;

    /**
     * 通过句柄向对应的查询条件注册回调，当组件绘制送显完成时会触发该回调。使用callback异步回调。
     *
     * @param { VoidCallback } callback - 监听draw的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDraw(callback: VoidCallback): void;

    /**
     * 通过句柄向对应的查询条件取消注册回调，当组件绘制送显完成时不再触发指定的回调。
     *
     * @param { VoidCallback } [callback] - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。callback需要和onDraw方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offDraw(callback?: VoidCallback): void;

    /**
     * 通过ComponentObserver注册drawChildren事件回调方法，当组件的子组件绘制送显完成时会触发该回调方法。
     * 如果组件树中存在多个drawChildren事件回调，只会触发在最顶层的drawChildren事件回调。
     *
     * @param { VoidCallback } callback - 监听drawChildren的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDrawChildren(callback: VoidCallback): void;

    /**
     * 通过句柄向对应的查询条件取消注册回调，当组件的子组件绘制送显完成时不再触发指定的回调。
     *
     * @param { VoidCallback } [callback] - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。
     *     callback需要和onDrawChildren方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offDrawChildren(callback?: VoidCallback): void;

    /**
     * 通过ComponentObserver注册drawChildren事件回调。使用callback异步回调。
     * 与on('drawChildren')相比，本方法在回调中额外返回子组件的uniqueId信息（Callback<int[]>），便于开发者定位具体子组件。如需获取子组件标识，建议使用本方法；若不需要子组件信息，两者均可使用。
     *
     * @param { Callback<int[]> } callback - 监听drawChildren的回调，回调参数为子组件uniqueId数组，表示绘制送显完成的子组件的唯一标识列表。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    offDrawChildren(callback?: Callback<int[]>): void;

    /**
     * 以当前注册事件回调的节点为根节点，当子树中的节点位于UI组件主树中且完成布局时，会触发该回调。如果组件树中存在多个layoutChildren事件回调，只会触发最顶层的layoutChildren事件回调。
     * 通过offLayoutChildren取消最顶层的回调后，其余layoutChildren事件回调也无法生效。当前节点注册回调后，不支持修改其在UI组件主树中的层级位置。如需调整，请先取消事件回调，再重新注册事件回调。
     *
     * @param { VoidCallback } callback - 监听layoutChildren的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLayoutChildren(callback: VoidCallback): void;

    /**
     * 通过句柄向对应的查询条件取消注册回调，当组件的子组件布局完成时不再触发指定的回调。使用callback异步回调。
     *
     * @param { VoidCallback } [callback] - 需要取消注册的回调，如果参数缺省则取消注册该句柄下所有的回调。
     *     callback需要和onLayoutChildren方法中的callback为相同对象时才能取消回调成功。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offLayoutChildren(callback?: VoidCallback): void;
  }

  /**
   * 获取指定id组件的所有属性，不包括子组件信息。
   *
   * 此接口仅用于对应用的测试，使用时建议等应用启动且布局完成后再调用。由于耗时长，不建议测试之外的场景使用。
   *
   * @param { string } id - 要获取属性的组件id。
   * @returns { string } 组件属性列表的JSON字符串。字符串信息包含组件的tag、id、位置信息（相对于窗口左上角的坐标）以及用于测试检查的组件所包含的相关属性信息。
   *     组件中每个字段的含义请参考getInspectorInfo的返回值说明。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @test
   */
  function getInspectorByKey(id: string): string;

  /**
   * 获取组件树及组件属性。
   *
   * 此接口仅用于对应用的测试。由于耗时长，不建议测试之外的场景使用。
   *
   * @returns { RecordData } 组件树及组件属性列表的JSON对象。组件中每个字段的含义请参考getInspectorInfo的返回值说明。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @test
   */
  function getInspectorTree(): RecordData;

  /**
   * 给指定id的组件发送事件。
   *
   * 此接口仅用于对应用的测试。由于耗时长，不建议测试之外的场景使用。
   *
   * @param { string } id - 要触发事件的组件id。
   * @param { int } action - 要触发的事件类型，当前支持取值：<br/>点击事件Click：10。<br/>长按事件LongClick：11。
   * @param { string } params - 事件参数，无参数时传空字符串""。
   * @returns { boolean } 找不到指定id的组件时返回false，其余情况返回true。
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