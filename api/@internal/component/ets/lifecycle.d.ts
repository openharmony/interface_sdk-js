
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * CustomComponent Lifecycle. It is used to monitor changes in the lifecycle of the custom component.
 *
 * @interface CustomComponentLifecycle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface CustomComponentLifecycle {

  /**
   * getCurrentState method is to get the current lifecycle state.
   *
   * @returns { CustomComponentLifecycleState } - lifecycle state
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getCurrentState(): CustomComponentLifecycleState;

  /**
   * Register a lifecycle listener. When the lifecycle state of a custom component changes, the corresponding
   * lifecycle callback will be triggered.
   *
   * @param { CustomComponentLifecycleObserver } observer - Custom component lifecycle observer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  addObserver(observer: CustomComponentLifecycleObserver): void;

  /**
   * Remove custom component lifecycle callbacks. Even if the custom component's lifecycle
   * state changes, the lifecycle callback will not be triggered.
   *
   * @param { CustomComponentLifecycleObserver } observer - Custom component lifecycle observer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  removeObserver(observer: CustomComponentLifecycleObserver): void;
}

/**
 * CustomComponent LifecycleObserver. When a user registers a custom component lifecycle callback, the
 * corresponding lifecycle callback will be triggered when the lifecycle changes.
 *
 * @interface CustomComponentLifecycleObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface CustomComponentLifecycleObserver {

  /**
   * The aboutToExpand function is executed after a new instance of the custom component is created, before
   * its build() function is executed. Developers can modify state variables at this stage.
   * Its functionality is similar to aboutToAppear, but because aboutToExpand is triggered under
   * the constraints of the custom component state machine, the aboutToExpand
   * interface is added for compatibility considerations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToExpand?(): void;

  /**
   * The onDidBuild function is executed after a new instance of the custom component
   * is built, after its build() function is executed. Developers can implement functions that do not
   * affect the actual UI, such as event data reporting at this stage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onDidBuild?(): void;

  /**
   * The aboutToDelete function executes before a custom component is destroyed. It is not allowed to
   * change state variables within the `aboutToDelete` function, especially since
   * modifying @Link variables may lead to unstable application behavior.
   * Its functionality is similar to aboutToDisappear, but because aboutToDelete is triggered under
   * the constraints of the custom component state machine, the aboutToDelete interface
   * is added for compatibility considerations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToDelete?(): void;

  /**
   * The aboutToAttach function is executed when a custom component is attached to the main tree.
   * Developers can implement functions that do not affect the actual UI, such as event data reporting at this stage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToAttach?(): void;

  /**
   * The aboutToDetach function executes when a custom component is detached from the main tree.
   * Developers can implement functions that do not affect the actual UI, such as initialization of non-state
   * variable data at this stage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToDetach?(): void;

  /**
   * Invoked when a reusable custom component is re-added to the node tree
   * from the reuse cache to receive construction parameters of the component. When param is not undefined, it is the
   * callback for reusing the V1 component. when param is undefined, it is the callback for reusing the V2 component.
   *
   * @param { Record<string, Object | undefined |null> } [params] - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToRecover?(params?: Record<string, Object | undefined | null>): void;

  /**
   * Callback function invoked from the native side function 'CustomNodeBase::SetRecycleFunction'
   * when the component is about to be recycled.
   * It first calls the `aboutToReclaim` function in the application, and performs the necessary actions
   * defined in the application before recycling.
   * Then, it freezes the component to avoid performing UI updates when its in recycle pool
   * Finally recursively traverses all subcomponents, calling `aboutToReclaim` on each subcomponent
   * that is about to be recycled, preparing them for recycling as well.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToReclaim?(): void;
}

/**
 * Enum for Lifecycle State type
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare enum CustomComponentLifecycleState {

  /**
   * Lifecycle init state. Custom components are in this state when they are created.
   * The next state after the init state is the expanding state,
   * which will trigger aboutToExpand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  INIT = 0,

  /**
   * Lifecycle expanding state. Custom components are in this stage when they are about to be built.
   * The next state after the expanding state is the expanded state, which
   * will trigger onDidExpand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  EXPANDING = 1,

  /**
   * Lifecycle expanded state. The next state after the expanded state could be the recycled state,
   * or it could transfer to the deleted state, or even transfer to the mounted state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  EXPANDED = 2,

  /**
   * Lifecycle mounted state. Custom components are in this stage when they are attached
   * to the main tree or detached from the main tree.
   * The next state after the mounted state could be the expanded state, or it could
   * transfer to the deleted state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  MOUNTED = 3,

  /**
   * Lifecycle recycled state. Custom components are in a state of being recycled or reused.
   * The next state after the recycle state could be the
   * expanded state, or it could transfer to the deleted state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  RECYCLED = 4,

  /**
   * Lifecycle deleted state. The deleted state is the end state of a custom component's lifecycle.
   * The init, expanded, recycled, or mounted states could transfer to the deleted state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DELETED = 5
}