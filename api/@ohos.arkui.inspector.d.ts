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
 * @file Layout Callback
 * @kit ArkUI
 */

import { Callback } from './@ohos.base';

/**
 * Provides APIs for registering the component layout and drawing completion callbacks. By registering callbacks,
 * you can receive notifications in a timely manner after component layout or drawing is complete. It is suitable
 * for scenarios where custom logic needs to be executed after component layout or drawing is complete, helping
 * you precisely control the component rendering timing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 10 dynamic
 */
declare namespace inspector {

  /**
   * Defines the handle for component layout and drawing completion callbacks. You can call the following APIs through
   * this handle:
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  interface ComponentObserver {

    /**
     * Registers a layout completion callback through this handle. This callback is triggered when the component layout
     * is complete. Note that this API cannot listen for window size changes. For related requirements, see
     * [on('windowSizeChange')](./arkts-apis-window-Window.md#onwindowsizechange7). In addition, there is no
     * deterministic execution order dependency between the layout callback and the window size change callback.
     *
     * @param { string } type - Event type. The value is fixed at **'layout'**.<br>
     *     **layout**: completion of component layout. [since 10 - 11]
     * @param { ()=>void } callback - Layout completion callback. [since 10 - 11]
     * @param { 'layout' } type - Event type. The value is fixed at **'layout'**.<br>
     *     **layout**: completion of component layout. [since 12]
     * @param { function } callback - Layout completion callback. [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'layout', callback: () => void): void;

    /**
     * Unregisters the layout completion callback through this handle. This callback will no longer be triggered when
     * the component layout is complete.
     *
     * @param { string } type - Event type. The value is fixed at **'layout'**.<br>
     *     **layout**: completion of component layout. [since 10 - 11]
     * @param { ()=>void } callback - Callback to unregister. If this parameter is not specified, all callbacks under
     *     this handle are unregistered. The callback must be the same object as the one registered with the
     *     [on('layout')](#onlayout) API to successfully unregister. [since 10 - 11]
     * @param { 'layout' } type - Event type. The value is fixed at **'layout'**.<br>
     *     **layout**: completion of component layout. [since 12]
     * @param { function } callback - Callback to unregister. If this parameter is not specified, all callbacks under
     *     this handle are unregistered. The callback must be the same object as the one registered with the
     *     [on('layout')](#onlayout) API to successfully unregister. [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'layout', callback?: () => void): void;

    /**
     * Registers a drawing completion callback through this handle. This callback is triggered when the component
     * drawing is complete.
     *
     * @param { string } type - Event type. The value is fixed at **'draw'**.<br>
     *     **draw**: completion of component drawing. [since 10 - 11]
     * @param { ()=>void } callback - Drawing completion callback. [since 10 - 11]
     * @param { 'draw' } type - Event type. The value is fixed at **'draw'**.<br>
     *     **draw**: completion of component drawing. [since 12]
     * @param { function } callback - Drawing completion callback. [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'draw', callback: () => void): void;

    /**
     * Unregisters the drawing completion callback through this handle. This callback will no longer be triggered when
     * the component drawing is complete.
     *
     * @param { string } type - Event type. The value is fixed at **'draw'**.<br>
     *     draw: completion of component drawing. [since 10 - 11]
     * @param { ()=>void } callback - Callback to unregister. If this parameter is not specified, all callbacks under
     *     this handle are unregistered. The callback must be the same object as the one registered with the
     *     [on('draw')](#ondraw) API to successfully unregister. [since 10 - 11]
     * @param { 'draw' } type - Event type. The value is fixed at **'draw'**.<br>
     *     draw: completion of component drawing. [since 12]
     * @param { function } callback - Callback to unregister. If this parameter is not specified, all callbacks under
     *     this handle are unregistered. The callback must be the same object as the one registered with the
     *     [on('draw')](#ondraw) API to successfully unregister. [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'draw', callback?: () => void): void;

    /**
     * Registers a child component drawing completion callback through ComponentObserver. This callback is triggered
     * when the child component of the component is in the main component tree and its drawing is complete. When
     * multiple **drawChildren** callbacks exist in the component tree, only the topmost callback will be triggered.
     * After the topmost callback is canceled, other **drawChildren** callbacks will not take effect. After a callback
     * is registered on the current node, changing its hierarchical position in the main tree of the UI component is
     * not supported. If adjustment is needed, unregister the event callback first and then register it again.
     *
     * @param { 'drawChildren' } type - Event type. The value is fixed at **'drawChildren'**.<br>
     *     **drawChildren**: completion of child component drawing.
     * @param { Callback<void> } callback - Child component drawing completion callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'drawChildren', callback: Callback<void>): void;

    /**
     * Unregisters the child component drawing completion callback through this handle. This callback will no longer
     * be triggered when the child component drawing of the component is complete. When multiple **drawChildren**
     * callbacks exist in the component tree, after the topmost callback is canceled, other **drawChildren** callbacks
     * will not take effect.
     *
     * @param { 'drawChildren' } type - Event type. The value is fixed at **'drawChildren'**.<br>
     *     **drawChildren**: completion of child component drawing.
     * @param { Callback<void> } callback - Callback to unregister. If this parameter is not specified, all callbacks
     *     under this handle are unregistered. The callback must be the same object as the one registered with the
     *     [on('drawChildren')<sup>20+</sup>](#ondrawchildren20) API to successfully unregister.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'drawChildren', callback?: Callback<void>): void;

    /**
     * Registers a callback used to listen for the **drawChildren** event through ComponentObserver. This API uses an
     * asynchronous callback to return the result. Compared with [on('drawChildren')](#ondrawchildren20), this API
     * additionally returns the **uniqueId** information of the child components in the callback
     * (**Callback<number[]>**), making it easier for you to locate specific child components. If you need to obtain
     * child component identifiers, this API is recommended. If child component information is not required, either
     * API can be used.
     * <br>With the node where the event callback is currently registered being used as the root node, when the child
     * component of the component is in the main tree of the UI component and completes drawing, this callback is
     * triggered. When multiple **drawChildren** callbacks exist in the component tree, only the topmost callback will
     * be triggered. After the topmost callback is canceled, other **drawChildren** callbacks will not take effect.
     * After a callback is registered on the current node, changing its hierarchical position in the main tree of the
     * UI component is not supported. If adjustment is needed, unregister the event callback first and then register
     * it again.
     *
     * @param { Callback<int[]> } callback - Callback used to listen for the **drawChildren** event. The callback
     *     parameter is an array of unique IDs of the child components that have finished drawing.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    onDrawChildren(callback: Callback<int[]>): void;

    /**
     * Unregisters the callback used to listen for the **drawChildren** event.
     * <br>To stop triggering a specific callback after the child component drawing is complete, you only need to
     * unregister the callback through the **ComponentObserver** handle. When multiple **drawChildren** callbacks
     * exist in the component tree, after the topmost callback is canceled, other **drawChildren** callbacks will
     * not take effect.
     *
     * @param { Callback<int[]> } [callback] - Callback to unregister. If this parameter is not specified, all
     *     callbacks under this handle are unregistered. The callback must be the same object as the one registered
     *     with the [onDrawChildren](#ondrawchildren24) API to successfully unregister.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    offDrawChildren(callback?: Callback<int[]>): void;

    /**
     * Registers a callback used to listen for the **layoutChildren** event using ComponentObserver. This API uses an
     * asynchronous callback to return the result.
     * <br>With the node where the event callback is currently registered being used as the root node, when the node
     * in the subtree is in the main tree of the UI component and completes layout, this callback is triggered. When
     * multiple **layoutChildren** callbacks exist in the component tree, only the topmost callback will be triggered.
     * After the topmost callback is canceled through [offLayoutChildren](#offlayoutchildren23), other
     * **layoutChildren** callbacks will not take effect. After a callback is registered on the current node, changing
     * its hierarchical position in the main tree of the UI component is not supported. If adjustment is needed,
     * unregister the event callback first and then register it again.
     *
     * @param { Callback<void> } callback - Callback used to listen for the **layoutChildren** event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    onLayoutChildren(callback: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the **layoutChildren** event.
     * <br>To stop triggering a specific callback after the child component layout is complete, you only need to
     * unregister the callback using the **ComponentObserver** handle. When multiple **layoutChildren** callbacks
     * exist in the component tree, after the topmost callback is canceled, other **layoutChildren** callbacks will
     * not take effect.
     *
     * @param { Callback<void> } [callback] - Callback to unregister. If this parameter is not specified, all
     *     callbacks under this handle are unregistered. The callback must be the same object as the one in the
     *     [onLayoutChildren<sup>23+</sup>](#onlayoutchildren23) API to successfully unregister.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    offLayoutChildren(callback?: Callback<void>): void;
  }

  /**
   * Binds to the specified component and returns the corresponding observation handle.
   *
   * @param { string } id - ID of the target component, set using the universal attributes
   *     [id](./arkui-ts/ts-universal-attributes-component-id.md#id) or
   *     [key](./arkui-ts/ts-universal-attributes-component-id.md#key12).
   * @returns { ComponentObserver } Component observer handle, which is used to register and unregister callbacks.
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