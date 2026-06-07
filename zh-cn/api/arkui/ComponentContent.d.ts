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
 * 有两种创建实体封装组件的方式。开发者在开发过程中任选下面方式其一即可。
 * 
 * ComponentContent表示组件内容的实体封装，其对象支持在非UI组件中创建与传递，便于开发者对弹窗类组件进行解耦封装。
 * 其底层使用了BuilderNode，具体使用规格参考[BuilderNode]{@link BuilderNode}。
 * 
 * ReactiveComponentContent表示组件内容的实体封装，其对象支持在非UI组件中创建与传递，便于开发者对弹窗类组件进行解耦封装。
 * 其底层使用了ReactiveBuilderNode，具体使用规格参考[ReactiveBuilderNode]{@link BuilderNode:ReactiveBuilderNode}。
 * 
 * > **说明：**
 * >
 * > - 当前不支持在预览器中使用ComponentContent和ReactiveComponentContent。
 * >
 * > - ComponentContent对象不支持使用JSON序列化。
 *
 * @file
 * @kit ArkUI
 */

import { BuildOptions } from './BuilderNode';

import { Content } from './Content';

import { UIContext } from '../@ohos.arkui.UIContext';

import { WrappedBuilder } from 'wrappedBuilderObject';

/**
* 继承自[Content](docroot://reference/apis-arkui/js-apis-arkui-Content.md#content-1)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class ComponentContent<T extends Object> extends Content {

  /**
   * ComponentContent的构造函数。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需要的UI上下文。
   * @param { WrappedBuilder<[]> } builder - 封装不带参builder函数的WrappedBuilder对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[]>);

  /**
   * ComponentContent的构造函数。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需要的UI上下文。
   * @param { WrappedBuilder<[T]> } builder - 封装带参builder函数的WrappedBuilder对象。
   * @param { T } args - WrappedBuilder对象封装的builder函数的参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T);

  /**
   * ComponentContent的构造函数。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需要的UI上下文。
   * @param { WrappedBuilder<[T]> } builder - 封装带参builder函数的WrappedBuilder对象。
   * @param { T } args - WrappedBuilder对象封装的builder函数的参数。
   * @param { BuildOptions } options - build的配置参数，判断是否支持@Builder中嵌套@Builder的行为。*@Builder** within **@Builder**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions);

  /**
   * 用于更新[WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数参数，与constructor传入的参数类型保持一致。
   *
   * @param { T } args - 用于更新[WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数参数，与
   *     constructor传入的参数类型保持一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(args: T): void;

  /**
   * 触发ComponentContent中的自定义组件的复用。组件复用请参见[@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。关于
   * ComponentContent的解绑场景请参见[解除实体节点引用关系](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。从API版本26.
   * 0.0开始，ComponentContent中的自定义组件支持V2组件复用，请参见
   * [@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * @param { Object } [param] - 用于复用ComponentContent的参数。该参数将直接用于ComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则
   *     会导致未定义行为。调用此方法将同步触发内部自定义组件的
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命周期回调，并
   *     将该参数作为回调的入参。默认值为undefined，此时ComponentContent中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reuse(param?: Object): void;

  /**
   * - 触发ComponentContent中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见
   * [@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。
   * - ComponentContent通过reuse和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。
   * 从API版本26.0.0开始，ComponentContent中的自定义组件支持V2组件复用，请参见
   * [@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  recycle(): void;

  /**
   * 立即释放当前ComponentContent对象对[基本概念：实体节点](docroot://ui/arkts-user-defined-node.md#基本概念)的引用关系。关于ComponentContent的解绑场景请参见
   * [解除实体节点引用关系](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。
   *
   * > **说明：**
   *
   * > 当ComponentContent对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象ComponentContent无法释放，容易导致内存泄漏。建议在不再需要操作该ComponentContent对象时，开发
   * > 者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * 传递系统环境变化事件，触发节点的全量更新。系统环境变化的相关信息请参见
   * [@ohos.app.ability.Configuration (环境变量)]{@link @ohos.app.ability.Configuration:Configuration}。
   *
   * > **说明：**
   *
   * > updateConfiguration接口用于通知对象更新当前的系统环境变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConfiguration(): void;

  /**
   * 设置当前ComponentContent对象是否继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则ComponentContent对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。
   *
   * > **说明：**
   *
   * > ComponentContent设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或
   * > ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。
   *
   * @param { boolean } enabled - ComponentContent对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻结策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * 查询当前ComponentContent对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在
   * 节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;

  /**
  * 返回一个标志位，表示当前 ComponentContent 是否通过动态-静态转换获取。
  * 该转换包含两个方向：从动态转换为静态，以及从静态转换为动态。
  *
   * @returns { boolean } - 如果 ComponentContent 是经过动态与静态之间转换获得，则返回 true；否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  isTransferred(): boolean;
}

/**
* ReactiveComponentContent继承自[Content](docroot://reference/apis-arkui/js-apis-arkui-Content.md#content-1)，是一个用于动态承载和复用
* UI内容的容器组件。它通过@Builder函数构建UI，并利用[ReactiveBuilderNode]{@link BuilderNode:ReactiveBuilderNode}生成和管理组件树。该组件的核心价值在于为动态内容提供
* 完整的生命周期管理，使其能够融入ArkUI的组件复用体系，特别适用于长列表等需要高性能渲染的场景。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ReactiveComponentContent<T extends Object[]> extends Content {

  /**
   * ReactiveComponentContent的构造函数。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需的UI上下文。
   * @param { WrappedBuilder<T> } builder - 封装带参@Builder函数的WrappedBuilder对象。
   * @param { BuildOptions } config - 作用是配置Builder的构建行为，BuildOptions中所有属性都是可选的，默认值为BuildOptions中对应的默认值。
   * @param { T } args - WrappedBuilder对象封装的builder函数的参数。负责将外部数据传递给构造函数中指定的WrappedBuilder<T>构建函数。支持多个入参。默认值为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T);

  /**
   * 触发ReactiveComponentContent中的自定义组件的复用。组件复用请参见[@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。
   * 关于ReactiveComponentContent的解绑场景请参见
   * [解除实体节点引用关系](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。从API版本26.0.0开始，
   * ReactiveComponentContent中的自定义组件支持V2组件复用，请参见
   * [@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * ReactiveComponentContent通过reuse和[recycle]{@link ComponentContent#recycle}接口完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。
   *
   * @param { Object } [param] - 用于复用[ReactiveComponentContent]{@link ReactiveComponentContent}的参数。该参数将直接用于
   *     ReactiveComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则会导致未定义行为。调用此方法将同步触发内部自定义组件的
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命周期回调，并
   *     将该参数作为回调的入参。默认值为undefined，此时ReactiveComponentContent中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  reuse(param?: Object): void;

  /**
   * 触发ReactiveComponentContent中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见
   * [@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。从API版本26.0.0开始，ReactiveComponentContent中的自定义
   * 组件支持V2组件复用，请参见[@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * ReactiveComponentContent通过[reuse]{@link ComponentContent#reuse}和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  recycle(): void;

  /**
   * 立即释放当前ReactiveComponentContent对象对[实体节点](docroot://ui/arkts-user-defined-node.md#基本概念)的引用关系。关于
   * ReactiveComponentContent的解绑场景请参见[解除实体节点引用关系](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。
   *
   * > **说明：**
   *
   * > ReactiveComponentContent对象调用dispose接口后，会与后端实体节点解除引用关系。若前端ReactiveComponentContent对象无法释放，容易导致内存泄漏。建议开发者在不需要操作该
   * > ReactiveComponentContent对象时，主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏风险。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dispose(): void;

  /**
   * 传递系统环境变化事件，触发节点的全量更新。可用于通知对象更新，是否更新所使用的系统环境由应用当前的系统环境变化决定。系统环境变化的相关信息请参见
   * [@ohos.app.ability.Configuration (环境变量)]{@link @ohos.app.ability.Configuration:Configuration}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  updateConfiguration(): void;

  /**
   * 更新ReactiveComponentContent。当ReactiveComponentContent中
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数中使用的绑定参数是由V1装饰器（如@Observed）装饰的类实例
   * 时，需要在此类数据变更后手动调用本接口更新数据，当使用V2装饰器（如@ObservedV2）装饰的类实例时，支持自动更新，无需手动调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  flushState(): void;

  /**
   * 设置当前ReactiveComponentContent对象是否继承父组件中自定义组件的冻结策略[ComponentOptions]{@link ComponentOptions}。如果设置继承状态为false，则
   * ReactiveComponentContent对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。
   *
   * > **说明：**
   *
   * > ReactiveComponentContent设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或
   * > ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。
   *
   * @param { boolean } enabled - ReactiveComponentContent对象是否设置为继承父组件中自定义组件的冻结策略。<br/>true：继承父组件中自定义组件的冻结策略；false：不继承父组
   *     件中自定义组件的冻结策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * 查询当前ReactiveComponentContent对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。因为在
   * 节点dispose后可能仍存在被调用dispose接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } 后端实体节点是否解除引用。<br/>true：节点已与后端实体节点解除引用；false：节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  isDisposed(): boolean;

  /**
    * 返回一个标志位，表示当前ReactiveComponentContent是否通过动态-静态转换获取。
    * 该转换包含两个方向：从动态转换为静态，以及从静态转换为动态。
    *
   * @returns { boolean } - 如果ReactiveComponentContent是通过动态与静态状态之间转换获取的，则返回 true；否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  isTransferred(): boolean;
}