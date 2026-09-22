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
 * @file
 * @kit ArkUI
 */

import { BuildOptions } from './BuilderNode';
import { Content } from './Content';
import { UIContext } from '../@ohos.arkui.UIContext';
import { WrappedBuilder } from 'wrappedBuilderObject';

/**
 * You can create an entity encapsulation component in either of the following ways: **ComponentContent** requires
 * manual content updates through the update API, which is mainly suitable for decoupled encapsulation scenarios such as
 * dialog boxes. **ReactiveComponentContent** supports automatic updates of responsive data, complete lifecycle
 * management, and component reuse, making it suitable for high-performance rendering scenarios such as long lists.
 *
 * **ComponentContent** represents an entity encapsulation of component content, which can be created and transmitted
 * outside of UI components. It allows you to encapsulate and decouple dialog box components. Its underlying
 * implementation uses BuilderNode. For details, see [BuilderNode]{@link ./BuilderNode}.
 *
 * **ReactiveComponentContent** represents an entity encapsulation of component content, and its objects can be created
 * and transmitted outside of UI components. It supports automatic updates of responsive data, complete lifecycle
 * management, and component reuse, making it suitable for scenarios requiring high-performance rendering such as long
 * lists. Its underlying layer uses **ReactiveBuilderNode**. For specific usage specifications, see
 * [ReactiveBuilderNode]{@link ./BuilderNode:ReactiveBuilderNode}.
 *
 * > **NOTE**
 * >
 * > - **ComponentContent** and **ReactiveComponentContent** are not available in DevEco Studio Previewer.
 * >
 * > - ComponentContent objects do not support JSON serialization.
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
   * @param { T } args - Arguments of the builder function wrapped by the **WrappedBuilder** object. The type **T** must
   *     be consistent with the parameter type specified in `WrappedBuilder<[T]>`. It is used to pass external data to
   *     the builder function for building UI content.
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
   * @param { T } args - Arguments of the builder function encapsulated by the **WrappedBuilder** object. The type **T**
   *     must be consistent with the parameter type specified in `WrappedBuilder<[T]>`. It is used to pass external data
   *     to the builder function for building UI content.
   * @param { BuildOptions } options - Build options, which are used to configure the build behavior of **@Builder**.
   *     All attributes in **BuildOptions** are optional.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions);

  /**
   * Updates the arguments of the builder function encapsulated by the
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object, keeping consistent with the parameter
   * type specified in the constructor. This API is suitable for scenarios where component content needs to change
   * dynamically, such as updating dialog box content.
   *
   * @param { T } args - Arguments used to update the builder function encapsulated by the
   *     [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object. The parameter type must be the
   *     same as that passed by the constructor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(args: T): void;

  /**
   * Triggers component reuse for custom components in **ComponentContent**. For details about component reuse, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). For the unbinding
   * scenarios of **ComponentContent**, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   * **ComponentContent** transfers reuse events between its internal and external custom components through the reuse
   * and [recycle]{@link ComponentContent#recycle} APIs. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   * Since API version 26.0.0, custom components in **ComponentContent** support V2 component reuse. For details, see
   * [@Reusable V2 Decorator: Reusing V2 Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * @param { Object } [param] - Parameters for **ComponentContent** reuse. This parameter is passed to all top-level
   *     custom components within the **ComponentContent** during reuse and must include all required constructor
   *     parameters for each component; otherwise, undefined behavior may occur. Calling this method synchronously
   *     triggers the [aboutToReuse]{@link @ohos.arkui.StateManagement:CustomComponentLifecycleObserver.aboutToReuse}
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
   * > After the **ComponentContent** object calls **dispose**, the reference relationship with the backend entity node
   * > is released. Calling other APIs of this object after the call to **dispose** may cause crashes or return default
   * > values. It is recommended to check the node validity through the [isDisposed]{@link ComponentContent#isDisposed}
   * > API before operating it. If the frontend object **ComponentContent** cannot be released, memory leaks may easily
   * > occur. You are advised to proactively call **dispose** to release the backend node when the
   * > **ComponentContent object** is no longer needed, to reduce the complexity of reference relationships and lower
   * > the risk of memory leaks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Transfers a system environment change event and triggers full update of a node. This API is suitable for scenarios
   * where the node needs to respond to system configuration changes, such as switching between light and dark modes,
   * language changes, and font size adjustments. For details about system environment changes, see
   * [@ohos.app.ability.Configuration (Environment Variables)]{@link @ohos.app.ability.Configuration:Configuration}.
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
   * Sets whether the current **ComponentContent** object inherits the freeze policy from its parent component's custom
   * components. The freeze policy controls whether a component pauses state refresh when inactive. When inheritance is
   * disabled (set to **false**), the **ComponentContent** object's freeze policy is set to **false**. This API is
   * suitable for scenarios such as multi-page navigation (**Navigation**) that require freeze management of inactive
   * components.
   *
   * > **NOTE**
   * >
   * > When **inheritFreezeOptions** is set to **true** for ComponentContent and the parent component is a custom
   * > component, **BuilderNode**, **ComponentContent**, **ReactiveBuilderNode**, or **ReactiveComponentContent**, the
   * > freeze policy of the parent component is inherited. When the child component is a custom component, the freeze
   * > policy of ComponentContent is not transferred to the child component.
   *
   * @param { boolean } enabled - Whether the **ComponentContent** object inherits the freeze policy from its parent
   *     component's custom components.
   *     <br>**true**: Inherits the freeze policy from its parent component's custom components. **false**: Does not
   *     inherit the freeze policy from its parent component's custom components.
   *     <br>**Note**: The value **true** takes effect only when the parent component is a custom component,
   *     **BuilderNode**, **ComponentContent**, **ReactiveBuilderNode**, or **ReactiveComponentContent**.
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
 * [ReactiveBuilderNode]{@link ./BuilderNode:ReactiveBuilderNode} to generate and manage the component tree. The core
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
   * @param { WrappedBuilder<T> } builder - **WrappedBuilder** object that encapsulates a builder function with
   *     parameters.
   * @param { BuildOptions } config - Build options, used to configure the build behavior of **@Builder**. All
   *     attributes in **BuildOptions** are optional.
   * @param { T } args - Arguments of the builder function encapsulated by the **WrappedBuilder** object, used to
   *     transfer external data to the builder function of **WrappedBuilder<T>** specified in the constructor. The type
   *     **T** must be consistent with the parameter type specified in **WrappedBuilder<T>**. Multiple input parameters
   *     are supported. The default value is an empty array **[]** when no parameter is passed.
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
   * **ReactiveComponentContent** transfers reuse events between its internal and external custom components through the
   * reuse and [recycle]{@link ReactiveComponentContent#recycle} APIs. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   *
   * @param { Object } [param] - Parameter used to reuse [ReactiveComponentContent]{@link ReactiveComponentContent}.
   *     This parameter is directly used for reusing all top-level custom components in **ReactiveComponentContent**. It
   *     should contain the content required by the constructor parameters of each custom component. Otherwise,
   *     undefined behavior may occur. Calling this method synchronously triggers the
   *     [aboutToReuse]{@link @ohos.arkui.StateManagement:CustomComponentLifecycleObserver.aboutToReuse} lifecycle
   *     callback of internal custom components, with this parameter as the callback input. The default value is
   *     undefined. In this case, the custom component in ReactiveComponentContent directly uses the data source during
   *     construction.
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
   * **ReactiveComponentContent** transfers reuse events between its internal and external custom components through the
   * [reuse]{@link ReactiveComponentContent#reuse} and recycle APIs. For specific usage scenarios, see
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
   * > After the **ReactiveComponentContent** object calls the **dispose** API, the reference relationship with the
   * > backend entity node is released. Calling other APIs of this object after the call to **dispose** may cause
   * > crashes or return default values. It is recommended to check the node validity through the
   * > [isDisposed]{@link ReactiveComponentContent#isDisposed} API before operating it. If the frontend
   * > **ReactiveComponentContent** object cannot be released, memory leaks may easily occur. You are advised to
   * > proactively call **dispose** to release the backend node when the **ReactiveComponentContent** object is no
   * > longer needed, to reduce the complexity of reference relationships and lower the risk of memory leaks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dispose(): void;

  /**
   * Transfers a system environment change event and triggers full update of a node, which is used to notify the object
   * to update the system environment configuration in use. This API is suitable for scenarios where the node needs to
   * respond to system configuration changes, such as switching between light and dark modes, language changes, and font
   * size adjustments. For details about system environment changes, see
   * [@ohos.app.ability.Configuration (Environment Variables)]{@link @ohos.app.ability.Configuration:Configuration}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  updateConfiguration(): void;

  /**
   * Updates **ReactiveComponentContent**. If the bound parameters used in the builder function encapsulated by the
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object in **ReactiveComponentContent** are
   * class instances decorated by V1 decorators (such as **@Observed**), you need to manually call this API to update
   * data after the data of this class changes. If the bound parameters are class instances decorated by the V2
   * decorator (such as **@ObservedV2**), the data can be automatically updated without manual calling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  flushState(): void;

  /**
   * Sets whether the current **ReactiveComponentContent** object inherits the freeze policy configured by
   * [ComponentOptions]{@link ComponentOptions} from its parent component's custom components. The freeze policy
   * controls whether a component pauses state refresh when inactive. When inheritance is disabled (set to **false**),
   * the **ReactiveComponentContent** object's freeze policy is set to **false**. This API is suitable for scenarios
   * such as multi-page navigation (**Navigation**) that require freeze management of inactive components.
   *
   * > **NOTE**
   * >
   * > When **inheritFreezeOptions** is set to **true** for ReactiveComponentContent and the parent component is a
   * > custom component, **BuilderNode**, **ComponentContent**, **ReactiveBuilderNode**, or
   * > **ReactiveComponentContent**, the freeze policy of the parent component is inherited. When the child component is
   * > a custom component, the freeze policy of **ReactiveComponentContent** is not transferred to the child component.
   *
   * @param { boolean } enabled - Whether the **ReactiveComponentContent** object inherits the freeze policy from its
   *     parent component's custom components.
   *     <br>**true**: Inherits the freeze policy from its parent component's custom components. **false**: Does not
   *     inherit the freeze policy from its parent component's custom components.
   *     <br>**Note:** Only when the parent component is a custom component, **BuilderNode**, **ComponentContent**,
   *     **ReactiveBuilderNode**, or **ReactiveComponentContent**, setting the parameter to **true** will inherit the
   *     freeze policy from the parent component's custom components.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * Queries whether the current **ReactiveComponentContent** object has released the reference relationship with the
   * backend entity node. Frontend nodes are bound to corresponding backend entity nodes. After a node calls the
   * **dispose** API to release the binding, calling other APIs again may cause crashes or return default values. Due to
   * service requirements, there may be cases where a node is still called after the call to **dispose**. Therefore,
   * this API is provided for you to check the validity of the node before operating it, to avoid potential risks.
   *
   * @returns { boolean } Whether the reference to the backend entity node has been released.
   *     <br>**true**: The node has released the reference to the backend entity node; **false**: The node has not
   *     released the reference to the backend entity node.
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