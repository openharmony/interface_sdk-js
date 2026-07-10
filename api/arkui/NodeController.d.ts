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
 * The NodeController module provides APIs for managing custom nodes, such as creating, showing, and updating
 * custom nodes, and APIs for mounting custom nodes to a {@link node_container} component.
 *
 * > **NOTE**
 * >
 * > - NodeController对象不支持使用JSON序列化。
 *
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';

import { FrameNode } from './FrameNode';

import { Size } from './Graphics';

/**
 * Implements a NodeController instance to manage the bound
 * {@link node_container} component.
 * One NodeController instance can be bound to only one {@link node_container} component.
 * For best practices, see [Dynamic Component Creation: Dynamically Adding, Updating, and Deleting Components]
 * (https://developer.huawei.com/consumer/en/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export abstract class NodeController {

  /**
   * Called when the [NodeContainer]{@link node_container} component bound to this **NodeController** instance is
   * created. This callback returns a node, which will be mounted to the **NodeContainer**.
   *
   * This callback can also be invoked through the **rebuild()** method of **NodeController**.
   *
   * > **NOTE**
   * >
   * > [NodeContainer]{@link node_container} does not support cross-instance reuse. If
   * > [NodeContainer]{@link node_container} is reused across instances and [NodeController]{@link NodeController} of
   * > [NodeContainer]{@link node_container} triggers the [makeNode]{@link NodeController#makeNode} callback method, the
   * > [UIContext]{@link @ohos.arkui.UIContext} object in the input parameter may be undefined. In this case, you need
   * > to check whether the [UIContext]{@link @ohos.arkui.UIContext} object in the input parameter is undefined, which
   * > prevents the [invalid UIContext](docroot://ui/arkts-wrong-uicontext-debug.md#identifying-uicontext-errors) when
   * > the input parameter is used.
   *
   * @param { UIContext } uiContext - UI context of the bound [NodeContainer]{@link node_container} component.
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
   * Called when the [NodeContainer]{@link node_container} component bound to this **NodeController** instance is
   * resized.
   *
   * @param { Size } size - Width and height of the component, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToResize?(size: Size): void;

  /**
   * Called after the [NodeContainer]{@link node_container} component bound to this **NodeController** instance is
   * attached and about to appear.
   *
   * > **NOTE**
   * >
   * > For details about the callback timing, see [onAppear]{@link CommonMethod#onAppear}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToAppear?(): void;

  /**
   * Called when the [NodeContainer]{@link node_container} component bound to this **NodeController** instance is
   * destroyed.
   *
   * > **NOTE**
   * >
   * > For details about the callback timing, see [onDisAppear]{@link CommonMethod#onDisAppear}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToDisappear?(): void;

  /**
   * Instructs the [NodeContainer]{@link node_container} component bound to this **NodeController** instance to call the
   * [makeNode]{@link NodeController#makeNode} API again to change child nodes.
   *
   * > **NOTE**
   * > > Since the **rebuild** API is actively called by the application and is tied to the UI, you need to ensure that
   * > the UI context is valid at the time of the call, that is, it must be consistent with the UI context of the bound
   * > NodeContainer.
   * >
   * > In cases where the [UI context is unclear](docroot://ui/arkts-global-interface.md#ambiguous-ui-context), for
   * > example, during event callbacks, you can use the
   * > [runScopedTask](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#runscopedtask) method of
   * > [UIContext]{@link @ohos.arkui.UIContext} to explicitly define the UI context at the time of the call.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  rebuild(): void;

  /**
   * Called when the [NodeContainer]{@link node_container} component bound to this **NodeController** instance receives
   * a touch event.
   *
   * @param { TouchEvent } event - Touch event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTouchEvent?(event: TouchEvent): void;

  /**
   * Called when the [NodeContainer]{@link node_container} component bound to this **NodeController** instance is
   * attached to the main node tree.
   *
   * > **NOTE**
   * >
   * > For details about the callback timing, see [onAttach]{@link CommonMethod#onAttach}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onAttach?(): void;

  /**
   * Called when the [NodeContainer]{@link node_container} component bound to this **NodeController** instance is
   * detached from the main node tree.
   *
   * > **NOTE**
   * >
   * > For details about the callback timing, see [onDetach]{@link CommonMethod#onDetach}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDetach?(): void;

  /**
   * Called when this **NodeController** instance is about to be bound to a [NodeContainer]{@link node_container}
   * component.
   *
   * @param { number } containerId - ID of the [NodeContainer]{@link node_container} component to which the
   *     **NodeController** instance is about to be bound.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillBind?(containerId: number): void;

  /**
   * Called when this **NodeController** instance is about to be unbound from a [NodeContainer]{@link node_container}
   * component.
   *
   * @param { number } containerId - ID of the [NodeContainer]{@link node_container} component from which the
   *     **NodeController** instance is about to be unbound.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillUnbind?(containerId: number): void;

  /**
   * Called after this **NodeController** instance is bound to a [NodeContainer]{@link node_container} component.
   *
   * @param { number } containerId - ID of the [NodeContainer]{@link node_container} component to which the
   *     **NodeController** instance is bound.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onBind?(containerId: number): void;

  /**
   * Called after this **NodeController** instance is unbound from a [NodeContainer]{@link node_container} component.
   *
   * @param { number } containerId - ID of the [NodeContainer]{@link node_container} component from which the
   *     **NodeController** instance is unbound.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onUnbind?(containerId: number): void;
}