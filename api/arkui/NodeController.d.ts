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
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';
import { FrameNode } from './FrameNode';
import { Size } from './Graphics';

/**
 * The **NodeController** module provides APIs for managing custom nodes, such as creating, showing, and updating custom
 * nodes, and APIs for mounting custom nodes to a [NodeContainer]{@link ../@internal/component/ets/node_container}. It
 * is suitable for scenarios where custom nodes need to be dynamically created, updated, and reused on a page.
 *
 * > **NOTE**
 * >
 * > - NodeController objects do not support JSON serialization.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export abstract class NodeController {
  /**
   * Called when the [NodeContainer]{@link ../@internal/component/ets/node_container} component bound to this
   * **NodeController** is created. This callback returns a node, which will be mounted to the
   * [NodeContainer]{@link ../@internal/component/ets/node_container}.
   *
   * Alternatively, the callback can be triggered through the **rebuild()** API of **NodeController**.
   *
   * > **NOTE**
   * >
   * > [NodeContainer]{@link ../@internal/component/ets/node_container} does not support cross-instance reuse. If
   * > [NodeContainer]{@link ../@internal/component/ets/node_container} is reused across instances and
   * > [NodeController]{@link NodeController} passed to [NodeContainer]{@link ../@internal/component/ets/node_container}
   * > triggers the [makeNode]{@link NodeController#makeNode} callback, the [UIContext]{@link @ohos.arkui.UIContext}
   * > object in the input parameter may be **undefined**. In this case, you need to check whether the object is
   * > **undefined** to prevent
   * > [invalid UIContext](docroot://ui/arkts-wrong-uicontext-debug.md#identifying-uicontext-errors) when the input
   * > parameter is used.
   *
   * @param { UIContext } uiContext - UI context bound to
   *     [NodeContainer]{@link ../@internal/component/ets/node_container} when this API is called back. When
   *     [NodeContainer]{@link ../@internal/component/ets/node_container} is reused across instances, this parameter may
   *     be undefined, and you need to determine this yourselves.
   * @returns { FrameNode | null } **FrameNode** object. The returned node will be mounted to the placeholder node of
   *     [NodeContainer]{@link ../@internal/component/ets/node_container}. If **null** is returned, the child nodes of
   *     the corresponding [NodeContainer]{@link ../@internal/component/ets/node_container} will be cleared.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  abstract makeNode(uiContext: UIContext): FrameNode | null;

  /**
   * Called when [NodeContainer]{@link ../@internal/component/ets/node_container} bound to **NodeController** is laid
   * out.
   *
   * @param { Size } size - Width and height of the component layout size, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToResize?(size: Size): void;

  /**
   * Called when the [NodeContainer]{@link ../@internal/component/ets/node_container} bound to this **NodeController**
   * instance is attached to the main node tree. This callback is asynchronous, and its actual execution time is later
   * than the attachment.
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
   * Called when the [NodeContainer]{@link ../@internal/component/ets/node_container} bound to this **NodeController**
   * instance is detached from the main node tree. This callback is synchronous.
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
   * Notifies the [NodeContainer]{@link ../@internal/component/ets/node_container} component to call the
   * [makeNode]{@link NodeController#makeNode} API again to change the child node. For example, when the content data
   * displayed by **NodeContainer** changes and the displayed child node needs to be updated, this API can be called to
   * trigger a rebuild.
   *
   * > **NOTE**
   * >
   * > Since the **rebuild** API is proactively called by the application and the operation is UI-related, you must
   * > ensure that the UI context is valid when calling this API, that is, the UI context must be consistent with that
   * > of the bound **NodeContainer**.
   * >
   * > In cases where the [UI context is unclear](docroot://ui/arkts-global-interface.md#ambiguous-ui-context), for
   * > example, during event callbacks, you can use the
   * > [runScopedTask]{@link @ohos.arkui.UIContext:UIContext.runScopedTask} API of
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
   * Called when [NodeContainer]{@link ../@internal/component/ets/node_container} bound to **NodeController** receives a
   * touch event.
   *
   * @param { TouchEvent } event - Touch event, which contains information such as the coordinates of the touch point
   *     and the touch action type. For details, see **TouchEvent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTouchEvent?(event: TouchEvent): void;

  /**
   * Called when the [NodeContainer]{@link ../@internal/component/ets/node_container} bound to this **NodeController**
   * instance is attached to the main node tree. It is triggered at the same time as
   * [aboutToAppear]{@link NodeController#aboutToAppear} (both when the **NodeContainer** is attached to the main node
   * tree). The difference is that **onAttach** is a synchronous callback while **aboutToAppear** is an asynchronous
   * callback, so **onAttach** is executed before **aboutToAppear**.
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
   * Called when the [NodeContainer]{@link ../@internal/component/ets/node_container} bound to this **NodeController**
   * instance is detached from the main node tree. It is triggered at the same time as
   * [aboutToDisappear]{@link NodeController#aboutToDisappear} (both when the **NodeContainer** is detached from the
   * main node tree). Both are synchronous callbacks. During the detachment process, the framework triggers **onDetach**
   * first and then **aboutToDisappear**, so **onDetach** is executed before **aboutToDisappear**.
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
   * Called when **NodeController** is about to be bound to
   * [NodeContainer]{@link ../@internal/component/ets/node_container}. This callback is triggered before
   * [onBind]{@link NodeController#onBind}. Both are optional callbacks, and the corresponding logic can be executed
   * before or after binding as needed.
   *
   * @param { number } containerId - Identifier of [NodeContainer]{@link ../@internal/component/ets/node_container} that
   *     is about to be bound with **NodeController** when this API is called back.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillBind?(containerId: number): void;

  /**
   * Called when **NodeController** is about to be unbound from
   * [NodeContainer]{@link ../@internal/component/ets/node_container}. This callback is triggered before
   * [onUnbind]{@link NodeController#onUnbind}. Both are optional callbacks, and the corresponding logic can be executed
   * before or after unbinding as needed.
   *
   * @param { number } containerId - Identifier of  [NodeContainer]{@link ../@internal/component/ets/node_container}
   *     that is about to be unbound from **NodeController** when this API is called back.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillUnbind?(containerId: number): void;

  /**
   * Called after **NodeController** is bound to [NodeContainer]{@link ../@internal/component/ets/node_container}. This
   * callback is triggered after [onWillBind]{@link NodeController#onWillBind}. Both are optional callbacks, and the
   * corresponding logic can be executed before or after binding as needed.
   *
   * @param { number } containerId - Identifier of [NodeContainer]{@link ../@internal/component/ets/node_container} that
   *     has been bound to **NodeController** when this API is called back.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onBind?(containerId: number): void;

  /**
   * Called after **NodeController** is unbound from [NodeContainer]{@link ../@internal/component/ets/node_container}.
   * This callback is triggered after [onWillUnbind]{@link NodeController#onWillUnbind}. Both are optional callbacks,
   * and the corresponding logic can be executed before or after unbinding as needed.
   *
   * @param { number } containerId - Identifier of [NodeContainer]{@link ../@internal/component/ets/node_container} that
   *     has been unbound from **NodeController** when this API is called back.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onUnbind?(containerId: number): void;
}