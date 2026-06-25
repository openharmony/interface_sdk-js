/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * NodeController用于实现自定义节点的创建、显示、更新等操作的管理，
 * 并负责将自定义节点挂载到[NodeContainer]{@link node_container}上。
 *
 * > **说明：**
 * >
 * > - **NodeController** objects do not support JSON serialization.
 *
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';

import { FrameNode } from './FrameNode';

import { Size } from './Graphics';

/**
* 通常搭配{@link node_container}进行使用。
* 用于创建控制器管理绑定的{@link node_container}组件。
* 一个NodeController只允许与一个{@link node_container}进行绑定。
* 最佳实践请参考[组件动态创建-组件动态添加、更新和删除](https://developer.huawei.com/consumer/cn/doc/best-practices/
* bpta-ui-dynamic-operations#section153921947151012)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export abstract class NodeController {

  /**
   * 当实例绑定的[NodeContainer]{@link node_container}创建的时候进行回调。回调方法将返回一个节点，将该节点挂载至[NodeContainer]{@link node_container}。
   *
   * 或者可以通过NodeController的rebuild()方法进行回调的触发。
   *
   * > **说明：**
   * >
   * > [NodeContainer]{@link node_container}不支持跨实例复用。如果出现跨实例复用[NodeContainer]{@link node_container}，传入
   * > [NodeContainer]{@link node_container}的[NodeController]{@link NodeController}触发
   * > [makeNode]{@link NodeController#makeNode}回调方法时，入参中的[UIContext]{@link @ohos.arkui.UIContext}对象可能为undefined，此时需要开发者
   * > 判断入参中的[UIContext]{@link @ohos.arkui.UIContext}对象是否为undefined，防止后续使用此入参时出现
   * > [UIContext无效的JS异常](docroot://ui/arkts-wrong-uicontext-debug.md#定位uicontext错误问题)。
   *
   * @param { UIContext } uiContext - 回调该方法的时候，绑定[NodeContainer]{@link node_container}的UI上下文。
   * @returns { FrameNode | null } **FrameNode** object, which will be mounted to the placeholder node of the
   *     [NodeContainer]{@link node_container} component. If a null object is returned, the child nodes of the
   *     corresponding [NodeContainer]{@link node_container} component are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  abstract makeNode(uiContext: UIContext): FrameNode | null;

  /**
   * 当NodeController绑定的[NodeContainer]{@link node_container}布局的时候触发此回调。
   *
   * @param { Size } size - 用于返回组件布局大小的宽和高，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToResize?(size: Size): void;

  /**
   * 当NodeController绑定的[NodeContainer]{@link node_container}挂载显示后触发此回调。
   *
   * > **说明：**
   * >
   * > 回调时机参考[onAppear]{@link CommonMethod#onAppear}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToAppear?(): void;

  /**
   * 当NodeController绑定的[NodeContainer]{@link node_container}销毁时触发此回调。
   *
   * > **说明：**
   * >
   * > 回调时机参考[onDisAppear]{@link CommonMethod#onDisAppear}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToDisappear?(): void;

  /**
   * 调用此接口通知[NodeContainer]{@link node_container}组件重新回调[makeNode]{@link NodeController#makeNode}方法，更改子节点。
   *
   * > **说明：**
   * > > 由于rebuild方法为应用主动调用的方法，且该操作与UI相关。需要开发者自行保证调用该接口时UI上下文有效，即与绑定的NodeContainer保持UI上下文一致。
   * >
   * > 监听回调等[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)时，可以通过[UIContext]{@link @ohos.arkui.UIContext}的
   * > [runScopedTask](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#runscopedtask)方法明确调用时的UI上下文。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  rebuild(): void;

  /**
   * 当NodeController绑定的[NodeContainer]{@link node_container}收到Touch事件时触发此回调。
   *
   * @param { TouchEvent } event - 触摸事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTouchEvent?(event: TouchEvent): void;

  /**
   * 当NodeController绑定的[NodeContainer]{@link node_container}挂载至主节点树时触发此回调。
   *
   * > **说明：**
   * >
   * > 回调时机参考[onAttach]{@link CommonMethod#onAttach}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onAttach?(): void;

  /**
   * 当NodeController绑定的[NodeContainer]{@link node_container}从主节点树卸载时触发此回调。
   *
   * > **说明：**
   * >
   * > 回调时机参考[onDetach]{@link CommonMethod#onDetach}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDetach?(): void;

  /**
   * 当NodeController与[NodeContainer]{@link node_container}即将绑定前触发此回调。
   *
   * @param { number } containerId - 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]{@link node_container}即将绑定。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillBind?(containerId: number): void;

  /**
   * 当NodeController与[NodeContainer]{@link node_container}即将解绑前触发此回调。
   *
   * @param { number } containerId - 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]{@link node_container}即将解绑。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillUnbind?(containerId: number): void;

  /**
   * 当NodeController与[NodeContainer]{@link node_container}绑定后触发此回调。
   *
   * @param { number } containerId - 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]{@link node_container}绑定完成。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onBind?(containerId: number): void;

  /**
   * 当NodeController与[NodeContainer]{@link node_container}解绑后触发此回调。
   *
   * @param { number } containerId - 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]{@link node_container}解绑完成。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onUnbind?(containerId: number): void;
}