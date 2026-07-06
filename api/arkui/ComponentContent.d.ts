/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * You can create an entity encapsulation component in either of the following ways: You can select either of the 
 * following methods during development:
 * 
 * **ComponentContent** represents an entity encapsulation of component content, which can be created and transmitted 
 * outside of UI components. It allows you to encapsulate and decouple dialog box components. Its underlying 
 * implementation uses BuilderNode. For details, see [BuilderNode]{@link BuilderNode}.
 * 
 * **ReactiveComponentContent** represents an entity encapsulation of component content, which can be created and 
 * transmitted outside of UI components. It allows you to encapsulate and decouple dialog box components. Its underlying
 * implementation uses **ReactiveBuilderNode**. For details, see 
 * [ReactiveBuilderNode]{@link BuilderNode:ReactiveBuilderNode}.
 * 
 * > **NOTE**
 * >
 * > - **ComponentContent** and **ReactiveComponentContent** are not available in DevEco Studio Previewer.
 * >
 * > - ComponentContent objects do not support JSON serialization.
 *
 * @file
 * @kit ArkUI
 */

import { BuildOptions } from './BuilderNode';

import { Content } from './Content';

import { UIContext } from '../@ohos.arkui.UIContext';

import { WrappedBuilder } from 'wrappedBuilderObject';

/**
 * Inherits from [Content](docroot://reference/apis-arkui/js-apis-arkui-Content.md#content-1).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class ComponentContent<T extends Object> extends Content {

  /**
   * A constructor used to create a **ComponentContent** object.
   *
   * @param { UIContext } uiContext - UI context required for creating a node.
   * @param { WrappedBuilder<[]> } builder - **WrappedBuilder** object that encapsulates a builder function that has no
   *     parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[]>);

  /**
   * A constructor used to create a **ComponentContent** object.
   *
   * @param { UIContext } uiContext - UI context required for creating a node.
   * @param { WrappedBuilder<[T]> } builder - **WrappedBuilder** object that encapsulates a builder function that has
   *     parameters.
   * @param { T } args - Parameters of the builder function encapsulated in the **WrappedBuilder** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T);

  /**
   * A constructor used to create a **ComponentContent** object.
   *
   * @param { UIContext } uiContext - UI context required for creating a node.
   * @param { WrappedBuilder<[T]> } builder - **WrappedBuilder** object that encapsulates a builder function that has
   *     parameters.
   * @param { T } args - Parameters of the builder function encapsulated in the **WrappedBuilder** object.
   * @param { BuildOptions } options - Build options, which determine whether to support the behavior of nesting
   *     **@Builder** within **@Builder**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions);

  /**
   * Updates the builder function parameters encapsulated by the
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object. The parameter type must be the same as
   * that passed by constructor.
   *
   * @param { T } args - Updates the builder function parameters encapsulated by the
   *     [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object. The parameter type must be the
   *     same as that passed by constructor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(args: T): void;

  /**
   * Triggers component reuse for custom components under this **ComponentContent**. For details about component reuse,
   * see [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). For details
   * about the scenarios involving **ComponentContent** unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   * Since API version 26.0.0, custom components in **ComponentContent** support V2 component reuse. For details, see
   * [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * @param { Object } [param] - Parameters for **ComponentContent** reuse. This parameter is passed to all top-level
   *     custom components within the **ComponentContent** during reuse and must include all required constructor
   *     parameters for each component; otherwise, undefined behavior may occur. Calling this method synchronously
   *     triggers the
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)
   *     lifecycle callback of internal custom components, with this parameter as the callback input. The default value
   *     is undefined. In this case, the custom component in ComponentContent directly uses the data source during
   *     construction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reuse(param?: Object): void;

  /**
   * - Triggers recycling of custom components under this **ComponentContent**. Component recycling is part of the
   * component reuse mechanism. For details, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md).
   * - **ComponentContent** completes the reuse event transfer between internal and external custom components through
   * **reuse** and **recycle**. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   * Since API version 26.0.0, custom components in **ComponentContent** support V2 component reuse. For details, see
   * [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  recycle(): void;

  /**
   * Immediately releases the reference relationship between this **ComponentContent** object and its
   * [entity node](docroot://ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving
   * **ComponentContent** unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   *
   * > **NOTE**
   * >
   * > After calling **dispose()**, the **ComponentContent** object cancels its reference to the backend entity node. If
   * > the frontend object **ComponentContent** cannot be released, memory leaks may occur. To avoid this, be sure to
   * > call **dispose()** on the **ComponentContent** object when you no longer need it. This reduces the complexity of
   * > reference relationships and lowers the risk of memory leaks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Updates the configuration of the entire node by passing in a
   * [system environment change]{@link @ohos.app.ability.Configuration:Configuration} event.
   *
   * > **NOTE**
   * >
   * > The updateConfiguration API is used to notify an object of updating the current system environment change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConfiguration(): void;

  /**
   * Sets whether this **ComponentContent** object inherits the freeze policy from its parent component's custom
   * components. When inheritance is disabled (set to **false**), the **ComponentContent** object's freeze policy is set
   * to **false**, which means its associated node remains unfrozen even in an inactive state.
   *
   * > **NOTE**
   * >
   * > When **inheritFreezeOptions** is set to **true** for **ComponentContent** and the parent component is a custom
   * > component, BuilderNode, ComponentContent, ReactiveBuilderNode, or ReactiveComponentContent, the freeze policy of
   * > the parent component is inherited. If the child component is a custom component, its freeze policy is not
   * > transferred to the child component.
   *
   * @param { boolean } enabled - Whether the current **ComponentContent** object inherits the freeze policy from its
   *     parent component's custom components. The value **true** means to inherit the freeze policy from the parent
   *     component's custom components, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * Checks whether this **ComponentContent** object has released its reference to its backend entity node. Frontend
   * nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release
   * this reference, subsequent API calls may cause crashes or return default values. This API facilitates validation of
   * node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.
   *
   * @returns { boolean } Whether the reference to the backend node is released. The value **true** means that the
   *     reference to backend node is released, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;

  /**
   * Returns a flag indicating whether the current ComponentContent was obtained through dynamic-static conversion,
   * includes conversions in both directions: dynamic-to-static and static-to-dynamic.
   *
   * @returns { boolean } - Returns true if the ComponentContent was converted between dynamic and static states,
   *     otherwise, returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  isTransferred(): boolean;
}

/**
 * ReactiveComponentContent is inherited from
 * [Content](docroot://reference/apis-arkui/js-apis-arkui-Content.md#content-1) and is a container component used to
 * dynamically bear and reuse UI content. It uses the @Builder function to build the UI and uses
 * [ReactiveBuilderNode]{@link BuilderNode:ReactiveBuilderNode} to generate and manage the component tree. The core
 * value of this component is to provide complete lifecycle management for dynamic content so that it can be integrated
 * into the ArkUI component reuse system. This component is especially suitable for scenarios that require high-
 * performance rendering, such as long lists.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ReactiveComponentContent<T extends Object[]> extends Content {

  /**
   * Constructor of ReactiveComponentContent.
   *
   * @param { UIContext } uiContext - UI context required for creating a node.
   * @param { WrappedBuilder<T> } builder - Encapsulates the WrappedBuilder object of the @Builder function with
   *     parameters.
   * @param { BuildOptions } config - Configures the build behavior of the builder. All attributes in BuildOptions are
   *     optional. The default value is the corresponding default value in BuildOptions.
   * @param { T } args - Parameters of the builder function encapsulated in the **WrappedBuilder** object. Transfers
   *     external data to the WrappedBuilder<T&gt and build functions specified in the constructor. Multiple input
   *     parameters are supported. The default value is **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T);

  /**
   * Triggers component reuse for custom components under this **ReactiveComponentContent**. For details about component
   * reuse, see [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). For
   * details about the scenarios involving **ReactiveComponentContent** unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   * Since API version 26.0.0, custom components in **ReactiveComponentContent** support V2 component reuse. For
   * details, see [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * **ReactiveComponentContent** completes the reuse event transfer between internal and external custom components
   * through **reuse** and [recycle]{@link ComponentContent#recycle}. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   *
   * @param { Object } [param] - Parameter used to reuse
   *     [ReactiveComponentContent]{@link BuilderNode:ReactiveBuilderNode}. This parameter is directly used for reusing
   *     all top-level custom components in **ReactiveComponentContent**. It should contain the content required by the
   *     constructor parameters of each custom component. Otherwise, undefined behavior may occur. Calling this method
   *     synchronously triggers the
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)
   *     lifecycle callback of internal custom components, with this parameter as the callback input. The default value
   *     is undefined. In this case, the custom component in ReactiveComponentContent directly uses the data source
   *     during construction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  reuse(param?: Object): void;

  /**
   * Recycles the custom component in ReactiveComponentContent. Component recycling is part of the component reuse
   * mechanism. For details, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). Since API version 26
   * .0.0, custom components in **ReactiveComponentContent** support V2 component reuse. For details, see
   * [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * **ReactiveComponentContent** completes the reuse event transfer between internal and external custom components
   * through [reuse]{@link ComponentContent#reuse} and **recycle**. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  recycle(): void;

  /**
   * Immediately releases the reference relationship between this **ReactiveComponentContent** object and its
   * [entity node](docroot://ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving
   * **ReactiveComponentContent** unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   *
   * > **NOTE**
   * >
   * > After calling **dispose**, the **ReactiveComponentContent** object cancels its reference to the backend entity
   * > node. If the frontend object **ReactiveComponentContent** cannot be released, memory leaks may occur. To avoid
   * > this, be sure to call **dispose** on the **ReactiveComponentContent** object when you no longer need it. This
   * > reduces the complexity of reference relationships and lowers the risk of memory leaks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dispose(): void;

  /**
   * Updates the configuration of the entire node by passing in a
   * [system environment change]{@link @ohos.app.ability.Configuration:Configuration} event. This event can be used to
   * notify the object of the update. Whether the system environment used by the object is updated depends on the
   * current system environment change of the application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  updateConfiguration(): void;

  /**
   * Updates **ReactiveComponentContent**. If the bound parameters used in the **builder** function encapsulated by the
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object in **ReactiveComponentContent** are
   * class instances decorated by the V1 decorator (such as @Observed), you need to manually call this API to update
   * data after the data of this class changes. If the bound parameters are class instances decorated by the V2
   * decorator (such as @ObservedV2), the data can be automatically updated without manual calling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  flushState(): void;

  /**
   * Checks whether this **ReactiveComponentContent** object inherits the [freeze policy]{@link ComponentOptions} from
   * its parent component's custom components. When inheritance is disabled (set to **false**), the
   * **ReactiveComponentContent** object's freeze policy is set to **false**, which means its associated node remains
   * unfrozen even in an inactive state.
   *
   * > **NOTE**
   * >
   * > When **inheritFreezeOptions** is set to **true** for a **ReactiveComponentContent** object, and its parent
   * > component is a custom component, **BuilderNode**, **ComponentContent**, **ReactiveBuilderNode**, or
   * > **ReactiveComponentContent**, it will inherit the parent component's freeze policy. If the child component is a
   * > custom component, its freeze policy is not transferred to the child component.
   *
   * @param { boolean } enabled - Whether the **ReactiveComponentContent** object inherits the freeze policy from its
   *     parent component's custom components.<br>The value **true** means to inherit the freeze policy from the parent
   *     component's custom components, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * Checks whether this **ReactiveComponentContent** object has released its reference to its backend entity node.
   * Frontend nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to
   * release this reference, subsequent API calls may cause crashes or return default values. This API facilitates
   * validation of node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal
   * are required.
   *
   * @returns { boolean } Whether the reference to the backend node is released.
   *     <br>The value **true** means that the reference to backend node is released, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  isDisposed(): boolean;

  /**
   * Returns a flag indicating whether the current ReactiveComponentContent was obtained through dynamic-static
   * conversion, includes conversions in both directions: dynamic-to-static and static-to-dynamic.
   *
   * @returns { boolean } - Returns true if the ReactiveComponentContent was converted between dynamic and static
   *     states, otherwise, returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  isTransferred(): boolean;
}