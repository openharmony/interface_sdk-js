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
 * FrameNode表示组件树的实体节点。
 * [NodeController]{@link NodeController:NodeController}可通过[BuilderNode]{@link BuilderNode}持有的FrameNode将其挂载到[NodeContainer]{@link node_container}上，
 * 也可通过FrameNode获取[RenderNode]{@link RenderNode:RenderNode}，挂载到其他FrameNode上。
 * 最佳实践请参考[组件动态创建-组件动态添加、更新和删除](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012)。
 * 
 * > **说明：**
 * >
 * > - 当前不支持在预览器中使用FrameNode节点。
 * >
 * > - FrameNode节点暂不支持拖拽。
 * >
 * > - FrameNode对象不支持使用JSON序列化。
 * >
 * > - 在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的场景中调用[FrameNode]{@link FrameNode}对象的接口时，
 * > 建议使用[UIContext]{@link @ohos.arkui.UIContext}的[runScopedTask](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#runscopedtask)接口明确UI上下文，
 * > 参考[执行绑定UI实例的闭包](docroot://ui/arkts-global-interface.md#执行绑定ui实例的闭包)示例。
 * >
 * > - FrameNode的接口中，仅[Optional]{@link Optional}类型的必选参数支持传入null或undefined。
 *
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';

import { RenderNode } from './RenderNode';

import { Size, Position, Edges, LengthMetrics, SizeT } from './Graphics';

import { DrawContext } from './Graphics';

import { ComponentContent, ReactiveComponentContent } from './ComponentContent';

import { BusinessError } from '../@ohos.base';

/**
* 描述组件的布局约束。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LayoutConstraint {

  /**
   * 最大尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxSize: Size;

  /**
   * 最小尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minSize: Size;

  /**
   * 子节点计算百分比时的尺寸基准。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  percentReference: Size;
}

/**
* 该接口用于配置或查询FrameNode的跨语言访问权限。例如，针对ArkTS语言创建的节点，可通过该接口控制是否允许通过非ArkTS语言进行属性访问或修改。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface CrossLanguageOptions {

  /**
   * FrameNode是否支持跨ArkTS语言进行属性设置。
   *
   * true表示支持跨ArkTS语言进行属性设置，false表示不支持跨ArkTS语言进行属性设置。
   *
   * 默认值为false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  attributeSetting?: boolean;

  /**
   * FrameNode是否支持跨ArkTS语言进行组件树操作。
   *
   * true表示支持跨ArkTS语言进行组件树操作，false表示不支持跨ArkTS语言进行组件树操作。
   *
   * 默认值为false。
   *
   * **说明：** 当FrameNode启用了跨ArkTS语言进行组件树操作的选项后，支持该FrameNode跨ArkTS语言调用
   * [addChild](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#addchild)、
   * [insertChildAfter](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#insertchildafter)
   * 、[insertChildAt](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#insertchildat)、
   * [insertChildBefore](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#insertchildbefore)
   * 和[removeChild](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#removechild)。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  treeOperating?: boolean;
}

/**
* 组件的交互事件绑定状态信息。如果当前节点上绑定了所要查询的交互事件，调用查询接口时返回一个InteractionEventBindingInfo对象，指示事件绑定详细信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface InteractionEventBindingInfo {

  /**
   * 是否以声明方式绑定事件。
   *
   * true表示以声明方式绑定事件，false表示没有以声明方式绑定事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  baseEventRegistered: boolean;

  /**
   * 是否以自定义组件节点的方式绑定事件，请参考[基础事件示例](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#基础事件示例)
   *
   * true表示以自定义组件节点的方式绑定事件，false表示没有以自定义组件节点的方式绑定事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  nodeEventRegistered: boolean;

  /**
   * 是否以注册节点事件（
   * [registerNodeEvent](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#registernodeevent)
   * ）的方式绑定事件。
   *
   * true表示以注册节点事件的方式绑定事件，false表示没有以注册节点事件的方式绑定事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  nativeEventRegistered: boolean;

  /**
   * 组件是否绑定内置事件(组件内部定义的事件, 无需开发者手动绑定)。
   *
   * true表示组件绑定内置事件，false表示组件没有绑定内置事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  builtInEventRegistered: boolean;
}

/**
* 子节点展开模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
export enum ExpandMode {

  /**
   * 表示不展开当前FrameNode的子节点。如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取在主节点树上的子节点时，不展开当前FrameNode的子节点。子节点序列号按在主节
   * 点树上的子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  NOT_EXPAND = 0,

  /**
   * 表示展开当前FrameNode的子节点。如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取所有子节点时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  EXPAND = 1,

  /**
   * 表示按需展开当前FrameNode的子节点。如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取在主树上的子节点时，不展开当前FrameNode的子节点；获取不在主树上的子节点
   * 时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  LAZY_EXPAND = 2,

  /**
   * 表示不展开当前FrameNode的子节点，如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取已经展开的子节点时，可以直接获取，获取未展开的子节点时，仅创建对应位置的节点，而不
   * 展开所有子节点。子节点序列号按所有子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LAZY_NOT_EXPAND = 3
}

/**
 * 子节点计数模式枚举。用于指定获取子节点数量时的计数方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export enum ChildrenCountMode {

  /**
   * 展开模式。当遇到懒加载节点（如[LazyForEach]{@link lazy_for_each}）时，展开节点并返回所有子节点数量。
   *
   * 是否展开懒加载节点：是
   *
   * 使用场景：需要展开并返回所有子节点数量的场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ALL_EXPAND = 0,

  /**
   * 计数已展开模式。不展开懒加载节点，只返回当前已展开的子节点数量。未展开的懒加载节点不包含在计数中。
   *
   * 是否展开懒加载节点：否
   *
   * 使用场景：仅查询已展开子节点数量的场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ONLY_EXPANDED = 1,

  /**
   * 计数所有模式。不展开懒加载节点，但返回包含所有潜在子节点的数量（包括已展开和未展开的懒加载节点）。此模式提供潜在子节点总数而不触发展开操作。
   *
   * 是否展开懒加载节点：否
   *
   * 使用场景：需要获取所有子节点数量的场景，与ALL_EXPAND相比，该模式不会展开子节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ALL_NOT_EXPAND = 2
}

/**
* 多态样式状态枚举，用于处理多态样式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export enum UIState {

  /**
   * 正常状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NORMAL = 0,

  /**
   * 按下状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  PRESSED = 1 << 0,

  /**
   * 获焦状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  FOCUSED = 1 << 1,

  /**
   * 禁用状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DISABLED = 1 << 2,

  /**
   * 选中状态。
   *
   * 仅特定的组件支持此状态：Checkbox、Radio、Toggle、List、Grid、MenuItem。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SELECTED = 1 << 3,

  /**
    * 悬停状态。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HOVERED = 1 << 4
}

/**
* 当UI状态发生变化时触发的回调。接收回调触发时的[UIState]{@link UIState}状态，该参数的取值为UIState状态枚举值或其运算结果。
*
 * @param { FrameNode } node - 触发UI状态变化的节点。
 * @param { number } currentUIStates - 回调触发时当前的UI状态。<br>可以通过位与运算判断当前包含哪些[UIState]{@link UIState}状态。<br>位与运算方法：if (
*     currentState & UIState.PRESSED == UIState.PRESSED)。<br>一般的UIState状态检查可以直接判断：if (currentState == UIState.PRESSED)。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type UIStatesChangeHandler = (node: FrameNode, currentUIStates: number) => void;

/**
* 定义FrameNode。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class FrameNode {

  /**
   * FrameNode的构造函数。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需的UI上下文。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(uiContext: UIContext);

  /**
   * 获取FrameNode中持有的[RenderNode]{@link RenderNode:RenderNode}。
   *
   * @returns { RenderNode | null } **RenderNode** instance. If the current FrameNode does not hold any RenderNode,
   *     **null** is returned. If the current FrameNode is a node created by a declarative component, **null** is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getRenderNode(): RenderNode | null;

  /**
   * 判断当前节点是否可修改。
   *
   * @returns { boolean } 判断当前节点是否可修改。<br/>true表示当前节点可修改，false表示当前节点不可修改。<br/>当节点为
   *     [自定义组件节点](docroot://ui/arkts-user-defined-node.md#自定义组件节点-framenode)中的系统组件代理节点或节点已经
   *     [dispose]{@link FrameNode#dispose}时返回false。<br/>当返回false时，当前FrameNode不支持
   *     [appendChild]{@link FrameNode#appendChild}、[insertChildAfter]{@link FrameNode#insertChildAfter}、
   *     [removeChild]{@link FrameNode#removeChild}、[clearChildren]{@link FrameNode#clearChildren}、
   *     [createAnimation]{@link FrameNode#createAnimation}、[cancelAnimations]{@link FrameNode#cancelAnimations}的操作。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isModifiable(): boolean;

  /**
   * 在FrameNode最后一个子节点后添加新的子节点。当前FrameNode如果不可修改，抛出异常信息。[typeNode]{@link typeNode}在appendChild时会校验子组件类型或个数，不满足时抛出异常信息，限制
   * 情况请查看[typeNode]{@link typeNode}描述。
   *
   * @param { FrameNode } node - 需要添加的FrameNode。<br/> node节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。
   *     若子节点不符合规格，则抛出异常信息。<br/> node节点不可以拥有父节点，否则抛出异常信息。
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: it cannot be adopted.
   *     " [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  appendChild(node: FrameNode): void;

  /**
   * 在FrameNode指定子节点之后添加新的子节点。当前FrameNode如果不可修改，抛出异常信息。
   *
   * @param { FrameNode } child - 需要添加的子节点。<br/>child节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。若子节点不
   *     符合规格，则抛出异常信息。<br/> child节点不可以拥有父节点，否则抛出异常信息。
   * @param { FrameNode | null } sibling - 需要添加的子节点。<br/>child节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。若子节点不
   *     符合规格，则抛出异常信息。<br/> child节点不可以拥有父节点，否则抛出异常信息。
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be adopted.
   *     " [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertChildAfter(child: FrameNode, sibling: FrameNode | null): void;

  /**
   * 从FrameNode中删除指定的子节点。当前FrameNode如果不可修改，抛出异常信息。
   *
   * @param { FrameNode } node - 需要删除的子节点。
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeChild(node: FrameNode): void;

  /**
   * 清除当前FrameNode的所有子节点。当前FrameNode如果不可修改，抛出异常信息。
   *
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  clearChildren(): void;

  /**
   * 获取当前节点指定位置的子节点。
   *
   * @param { number } index - 需要查询的子节点的序列号。<br/>index取值范围为[0, +∞)，若当前节点有n个子节点，index取值有效范围为[0, n-1]。
   * @returns { FrameNode | null } Child node obtained. If the FrameNode does not contain the specified child node, null
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getChild(index: number): FrameNode | null;

  /**
   * 获取当前节点指定位置的子节点，支持指定子节点展开模式。
   *
   * @param { number } index - 需要查询的子节点的序列号。<br/>index取值范围为[0, +∞)，若当前节点有n个子节点，index取值有效范围为[0, n-1]。
   * @param { ExpandMode } expandMode - 指定子节点展开模式。<br/>默认值：ExpandMode.EXPAND
   * @returns { FrameNode | null } Child node obtained. If the FrameNode does not contain the specified child node, null
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getChild(index: number, expandMode?: ExpandMode): FrameNode | null;

  /**
   * 获取当前节点第一个在主节点树上的子节点的序列号。子节点序列号按所有子节点计算。
   *
   * @returns { number } 当前节点第一个在主节点树上的子节点的序列号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getFirstChildIndexWithoutExpand(): number;

  /**
   * 获取当前节点最后一个在主节点树上的子节点的序列号。子节点序列号按所有子节点计算。
   *
   * @returns { number } 当前节点最后一个在主节点树上的子节点的序列号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getLastChildIndexWithoutExpand(): number;

  /**
   * 获取当前FrameNode的第一个子节点。
   *
   * @returns {  FrameNode | null } First child node. If the FrameNode does not contain any child node, null is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFirstChild(): FrameNode | null;

  /**
   * 获取当前FrameNode的下一个同级节点。
   *
   * @returns { FrameNode | null } Next sibling node of the current FrameNode. If the FrameNode does not have the next
   *     sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getNextSibling(): FrameNode | null;

  /**
   * 获取当前FrameNode的上一个同级节点。
   *
   * @returns { FrameNode | null } Previous sibling node of the current FrameNode. If the FrameNode does not have the
   *     previous sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPreviousSibling(): FrameNode | null;

  /**
   * 获取当前FrameNode的父节点。
   *
   * @returns { FrameNode | null } Parent node of the current FrameNode. If the FrameNode does not contain a parent
   *     node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getParent(): FrameNode | null;

  /**
   * 获取当前FrameNode的子节点数量。
   *
   * @returns { number } 获取当前FrameNode的子节点数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getChildrenCount(): number;

  /**
   * 根据指定的计数模式获取当前FrameNode的子节点数量。
   *
   * @param { ChildrenCountMode } [countMode] - The children count mode. Default value is ChildrenCountMode.ALL_EXPAND.
   * @returns { int } - Returns the number of children of the current FrameNode based on the count mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getChildrenCount(countMode?: ChildrenCountMode): int;

  /**
   * 将当前FrameNode移动到目标FrameNode的指定位置。当前FrameNode如果不可修改，抛出异常信息。targetParent为[typeNode]{@link typeNode}时会校验子组件类型或个数，不满足时抛出
   * 异常信息，限制情况请查看[typeNode]{@link typeNode}描述。
   *
   * > **说明：**
   * >
   * > 当前仅支持以下类型的[TypedFrameNode]{@link TypedFrameNode}进行移动操作：[Stack]{@link typeNode.Stack}、
   * > [XComponent]{@link typeNode.XComponent}。对于其他类型的节点，移动操作不会生效。
   * >
   * > 当前仅支持根节点为以下类型组件的[BuilderNode]{@link BuilderNode:BuilderNode}进行移动操作：[Stack]{@link stack}、
   * > [XComponent]{@link xcomponent}、[EmbeddedComponent]{@link embedded_component}。对于其他类型的组件，移动操作不会生效。
   *
   * @param { FrameNode } targetParent - 目标父节点。<br/>targetParent节点不可以为声明式创建的节点，即不可修改的FrameNode。若目标父节点不符合规格，则抛出异常信息。
   * @param { number } [index] - 子节点序列号。当前FrameNode将被添加到目标FrameNode对应序列号的子节点之前，若目标FrameNode有n个节点，index取值范围为[0, n-1]。<br/
   *     >若参数无效或不指定，则添加到目标FrameNode的最后。<br/>默认值：-1
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100027 - The current node has been adopted. [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  moveTo(targetParent: FrameNode, index?: number): void;

  /**
   * 立即解除当前FrameNode对象对实体FrameNode节点的引用关系。
   *
   * > **说明：**
   * >
   * > - FrameNode对象调用dispose后，由于不对应任何实体FrameNode节点，在调用部分查询接口([getMeasuredSize]{@link FrameNode#getMeasuredSize}、
   * > [getLayoutPosition]{@link FrameNode#getLayoutPosition})的时候会导致应用出现jscrash。
   * >
   * > - 通过[getUniqueId]{@link FrameNode#getUniqueId}可以判断当前FrameNode是否对应一个实体FrameNode节点。当UniqueId大于0时表示该对象对应一个实体
   * > FrameNode节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * 获取FrameNode相对于窗口的位置偏移，单位为VP。
   *
   * @returns { Position } 节点相对于窗口的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToWindow(): Position;

  /**
   * 获取FrameNode相对于父组件的位置偏移，单位为VP。
   *
   * @returns { Position } 节点相对于父组件的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToParent(): Position;

  /**
   * 获取FrameNode测量后的大小，单位为PX。
   *
   * @returns { Size } 节点测量后的大小，单位为PX。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMeasuredSize(): Size;

  /**
   * 获取FrameNode布局后相对于父组件的位置偏移，单位为PX。该偏移是父容器对该节点进行布局之后的结果，因此布局之后生效的offset属性和不参与布局的position属性不影响该偏移值。
   *
   * @returns { Position } 节点布局后相对于父组件的位置偏移，单位为PX。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutPosition(): Position;

  /**
   * 获取用户设置的边框宽度。
   *
   * @returns { Edges<LengthMetrics> } 用户设置的边框宽度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigBorderWidth(): Edges<LengthMetrics>;

  /**
   * 获取用户设置的内边距。
   *
   * @returns { Edges<LengthMetrics> } 用户设置的内边距。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigPadding(): Edges<LengthMetrics>;

  /**
   * 获取用户设置的外边距。
   *
   * @returns { Edges<LengthMetrics> } 用户设置的外边距。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigMargin(): Edges<LengthMetrics>;

  /**
   * 获取用户设置的宽高。
   *
   * @returns { SizeT<LengthMetrics> } 用户设置的宽高。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigSize(): SizeT<LengthMetrics>;

  /**
   * 获取用户设置的节点ID（通用属性设置的[组件标识]{@link common}）。
   *
   * @returns { string } 用户设置的节点ID（通用属性设置的[组件标识]{@link common}）。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getId(): string;

  /**
   * 获取系统分配的唯一标识的节点UniqueID。
   *
   * @returns { number } 系统分配的唯一标识的节点UniqueID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUniqueId(): number;

  /**
   * 获取节点的类型。系统组件类型为组件名称，例如，按钮组件[Button]{@link button}的类型为Button。而对于自定义组件，若其有渲染内容，则其类型为__Common__。
   *
   * @returns { string } 节点的类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getNodeType(): string;

  /**
   * 获取节点的不透明度，最小值为0，最大值为1。
   *
   * @returns { number } 节点的不透明度。范围是[0, 1]，值越大透明度越低。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getOpacity(): number;

  /**
   * 获取节点是否可见。
   *
   * > **说明：**
   * >
   * > 根据组件设置的visibility属性值判断该节点是否可见。
   *
   * @returns { boolean } 节点是否可见。<br/>true表示节点可见，false表示节点不可见。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isVisible(): boolean;

  /**
   * 获取节点是否是剪裁到组件区域。当调用[dispose]{@link FrameNode#dispose}解除对实体FrameNode节点的引用关系之后，返回值为true。
   *
   * @returns { boolean } 节点是否是剪裁到组件区域。<br/>true表示节点剪裁到组件区域，false表示节点不是剪裁到组件区域。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isClipToFrame(): boolean;

  /**
   * 获取节点是否被挂载到主节点树上。
   *
   * @returns { boolean } 节点是否被挂载到主节点树上。<br/>true表示节点被挂载到主节点树上，false表示节点不是被挂载到主节点树上。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isAttached(): boolean;

  /**
   * 查询当前FrameNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
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
   * 获取节点的结构信息，该信息和DevEco Studio内置<!--RP1-->ArkUI Inspector<!--RP1End-->工具里面的一致。
   *
   * > **说明：**
   * >
   * > getInspectorInfo接口用于获取所有节点的信息，作为调试接口使用，频繁调用会导致性能下降。
   *
   * @returns { Object } 节点的结构信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getInspectorInfo(): Object;

  /**
   * 通过名称获取组件的自定义属性。
   *
   * @param { string } name - 自定义属性的名称。
   * @returns { Object | undefined } Value of the custom property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getCustomProperty(name: string): Object | undefined;

  /**
   * 获取FrameNode中持有的UICommonEvent对象，用于设置基础事件。设置的基础事件与声明式定义的事件平行，参与事件竞争；设置的基础事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。
   *
   * LazyForEach场景下，由于存在节点的销毁重建，对于重建的节点需要重新设置事件回调才能保证监听事件正常响应。
   *
   * @returns { UICommonEvent } UICommonEvent对象，用于设置基础事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get commonEvent(): UICommonEvent;

  /**
   * 获取FrameNode中持有的UIGestureEvent对象，用于设置组件绑定的手势事件。通过gestureEvent接口设置的手势不会覆盖通过[绑定手势事件]{@link common}绑定的手势，两者同时设置了手势时，优先回
   * 调绑定手势事件设置的手势事件。
   *
   * @returns { UIGestureEvent } UIGestureEvent对象，用于设置组件绑定的手势。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  get gestureEvent(): UIGestureEvent;

  /**
   * 获取FrameNode中持有的CommonAttribute接口，用于设置[通用属性]{@link common}和[通用事件]{@link common}。
   *
   * 仅可以修改自定义节点的属性。
   *
   * > **说明：**
   * >
   * > FrameNode的效果参考对齐方式为顶部起始端的[Stack]{@link stack}容器组件。
   * >
   * > FrameNode的属性支持情况参考
   * > [属性或事件对attributemodifier的支持情况](docroot://ui/arkts-user-defined-extension-attributeModifier.md#属性或事件对attributemodifier的支持情况)。
   *
   * @returns { CommonAttribute } 获取FrameNode中持有的CommonAttribute接口，用于设置通用属性和通用事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @noninterop
   */
  get commonAttribute(): CommonAttribute;

  /**
   * FrameNode的自绘制方法，该方法会重写默认绘制方法，在FrameNode进行内容绘制时被调用。
   *
   * 该接口的[DrawContext]{@link Graphics:DrawContext}中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见
   * [调整自定义绘制Canvas的变换矩阵](docroot://ui/arkts-user-defined-arktsNode-frameNode.md#调整自定义绘制canvas的变换矩阵)。
   *
   * @param { DrawContext } context - 图形绘制上下文。自绘制区域无法超出组件自身大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDraw?(context: DrawContext): void;

  /**
   * FrameNode的自定义测量方法，该方法会重写默认测量方法，在FrameNode进行测量时被调用，测量FrameNode及其内容的大小。
   *
   * @param { LayoutConstraint } constraint - 组件进行测量时使用的布局约束。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onMeasure(constraint: LayoutConstraint): void;

  /**
   * FrameNode的自定义布局方法，该方法会重写默认布局方法，在FrameNode进行布局时被调用，为FrameNode及其子节点指定位置。
   *
   * @param { Position } position - 组件进行布局时使用的位置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onLayout(position: Position): void;

  /**
   * 设置FrameNode的测量后的尺寸，默认单位PX。若设置的宽高为负数，自动取零。
   *
   * @param { Size } size - FrameNode的测量后的尺寸。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setMeasuredSize(size: Size): void;

  /**
   * 设置FrameNode的布局后的位置，默认单位PX。
   *
   * @param { Position } position - FrameNode的布局后的位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setLayoutPosition(position: Position): void;

  /**
   * 调用FrameNode的测量方法，根据父容器的布局约束，对FrameNode进行测量，计算出尺寸，如果测量方法被重写，则调用重写的方法。建议在[onMeasure]{@link FrameNode#onMeasure}方法中调用。
   *
   * @param { LayoutConstraint } constraint - 组件进行测量时使用的父容器布局约束。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  measure(constraint: LayoutConstraint): void;

  /**
   * 调用FrameNode的布局方法，为FrameNode及其子节点指定布局位置，如果布局方法被重写，则调用重写的方法。建议在[onLayout]{@link FrameNode#onLayout}方法中调用。
   *
   * @param { Position } position - 组件进行布局时使用的位置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layout(position: Position): void;

  /**
   * 该方法会将FrameNode标记为需要布局的状态，下一帧将会进行重新布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setNeedsLayout(): void;

  /**
   * 该方法会触发FrameNode自绘制内容的重新渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  invalidate(): void;

  /**
   * 获取FrameNode相对于屏幕的位置偏移，单位为VP。
   *
   * @returns { Position } 节点相对于屏幕的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToScreen(): Position;

  /**
   * 获取FrameNode相对于全局屏幕的位置偏移，单位为VP。
   *
   * @returns { Position } 节点相对于全局屏幕的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalPositionOnDisplay(): Position;

  /**
   * 获取FrameNode相对于窗口带有绘制属性的位置偏移，单位为VP，绘制属性比如[transform]{@link CommonMethod#transform(value: object)},
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}等，返回的坐标是组件布局时左上角变换后的坐标。
   *
   * @returns { Position } 节点相对于窗口的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToWindowWithTransform(): Position;

  /**
   * 获取FrameNode相对于父组件带有绘制属性的位置偏移，单位为VP，绘制属性比如[transform]{@link CommonMethod#transform(value: object)},
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}等，返回的坐标是组件布局时左上角变换后的坐标。
   *
   * @returns { Position } 节点相对于父组件的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToParentWithTransform(): Position;

  /**
   * 获取FrameNode相对于屏幕带有绘制属性的位置偏移，单位为VP，绘制属性比如[transform]{@link CommonMethod#transform(value: object)},
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}等，返回的坐标是组件布局时左上角变换后的坐标。
   *
   * @returns { Position } 节点相对于屏幕的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToScreenWithTransform(): Position;

  /**
   * 下树并递归释放当前节点为根的子树。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  disposeTree(): void;

  /**
   * 支持添加ComponentContent类型的组件内容。要求当前节点是一个可修改的节点，即[isModifiable]{@link FrameNode#isModifiable}的返回值为true，否则抛出异常信息。
   *
   * @param { ComponentContent<T> } content - Component content to display on the FrameNode. [since 12 - 21]
   * @param { ComponentContent<T> | ReactiveComponentContent<T> } content - FrameNode节点中显示的组件内容。 [since 12 - 21]
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent<T>): void;

  /**
   * 设置当前FrameNode的跨ArkTS语言访问选项。例如ArkTS语言创建的节点，设置该节点是否可通过非ArkTS语言进行属性设置，从API版本26.0.0开始支持设置是否可通过非ArkTS语言进行组件树操作。当前
   * FrameNode如果不可修改或不可设置跨ArkTS语言访问选项，抛出异常信息。
   *
   * > **说明：**
   * >
   * > 当前仅支持[Scroll]{@link typeNode.Scroll}, [Swiper]{@link typeNode.Swiper}，[List]{@link typeNode.List}，
   * > [ListItem]{@link typeNode.ListItem}，[ListItemGroup]{@link typeNode.ListItemGroup}，
   * > [WaterFlow]{@link typeNode.WaterFlow}，[FlowItem]{@link typeNode.FlowItem}，[Grid]{@link typeNode.Grid}，
   * > [GridItem]{@link typeNode.GridItem}，[TextInput]{@link typeNode.TextInput}，[TextArea]{@link typeNode.TextArea}，
   * > [Column]{@link typeNode.Column}，[Row]{@link typeNode.Row}，[Stack]{@link typeNode.Stack}，
   * > [Flex]{@link typeNode.Flex}，[RelativeContainer]{@link typeNode.RelativeContainer}，
   * > [Progress]{@link typeNode.Progress}，[LoadingProgress]{@link typeNode.LoadingProgress}，
   * > [Image]{@link typeNode.Image}，[Button]{@link typeNode.Button}，[CheckBox]{@link typeNode.Checkbox}，
   * > [Radio]{@link typeNode.Radio}，[Slider]{@link typeNode.Slider}，[Toggle]{@link typeNode.Toggle}，
   * > [XComponent]{@link typeNode.XComponent}类型的[TypedFrameNode]{@link TypedFrameNode}设置跨ArkTS语言访问选项。
   *
   * @param { CrossLanguageOptions } options - 跨ArkTS语言访问选项。
   * @throws { BusinessError } 100022 - The FrameNode cannot be set whether to support cross-language common attribute
   *     setting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  setCrossLanguageOptions(options: CrossLanguageOptions): void;

  /**
   * 获取当前FrameNode的跨ArkTS语言访问选项。例如ArkTS语言创建的节点，返回该节点是否可通过非ArkTS语言进行属性设置和跨语言组件树操作，从API版本26.0.0开始支持获取是否可通过非ArkTS语言进行组件树操作。
   *
   * @returns { CrossLanguageOptions } 跨ArkTS语言访问选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getCrossLanguageOptions(): CrossLanguageOptions;

  /**
   * 全局复用场景下，触发子组件回收，彻底释放FrameNode后端资源，以便于资源的重新复用，确保后端资源能够被有效回收并再次使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  recycle(): void;

  /**
   * 全局复用场景下，触发子组件复用，实现FrameNode后端资源的复用，提升资源利用效率。为保证资源充足，可以在recycle之后使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reuse(): void;

  /**
   * 获取目标节点的事件绑定信息，如果该组件节点上没有绑定要查询的交互事件类型时，返回 undefined。
   *
   * @param { EventQueryType } eventType - 要查询的交互事件类型。
   * @returns { InteractionEventBindingInfo | undefined } Returns an **InteractionEventBindingInfo** object containing
   *     event binding details if the interaction event is bound to the current node; returns **undefined** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined;

  /**
   * 设置组件支持的多态样式状态。
   *
   * @param { number } uiStates - 需要处理目标节点的UI状态。<br>可以通过位或计算同时指定设置多个状态，如：targetUIStates = UIState.PRESSED  |
   *     UIState.FOCUSED。
   * @param { UIStatesChangeHandler } statesChangeHandler - 状态变化时的回调函数。
   * @param { boolean } [excludeInner] - 禁止内部默认状态样式处理的标志，默认值为false。<br> true表示禁止内部默认状态样式处理，false不禁止内部默认状态样式处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void;

  /**
   * 删除组件当前注册的状态处理。
   *
   * @param { number } uiStates - 需要删除的UI状态。<br>可以通过位或计算同时指定删除多个状态，如：removeUIStates = UIState.PRESSED  |
   *     UIState.FOCUSED。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  removeSupportedUIStates(uiStates: number): void;

  /**
   * 创建FrameNode上属性的动画。
   *
   * @param { AnimationPropertyType } property - 动画属性枚举。
   * @param { Optional<number[]> } startValue - 动画属性的起始值。取值为undefined或数组，取值为数组时数组长度需要和属性枚举匹配。如果为undefined则表示不显式指定动画初值，节点
   *     上一次设置的属性终值为此次动画的起点值。如果取值为数组，<br/>- 对于AnimationPropertyType.ROTATION，取值格式为[rotationX, rotationY, rotationZ]，单位为度
   *     （°），表示绕x、y、z轴的旋转角。<br/>- 对于AnimationPropertyType.TRANSLATION，取值格式为[translateX, translateY]，单位为px，表示沿x、y轴的平移量。<
   *     br/>- 对于AnimationPropertyType.SCALE，取值格式为[scaleX, scaleY]，表示x、y方向的缩放比例。<br/>- 对于AnimationPropertyType.OPACITY，取
   *     值格式为[opacity]，表示不透明度。opacity的取值范围为[0, 1]。<br/>当节点上从未设置过该属性时，需要显式指定startValue才能正常创建动画。当节点上已经设置过属性（如第二次及之后创建动画），则
   *     推荐不显式指定startValue或者显式指定startValue为上一次的终值，表示使用上一次的终值作为新的动画起点，避免起始值跳变。
   * @param { number[] } endValue - 动画属性的终止值。取值为数组，数组长度需要和属性枚举匹配。<br/>- 对于AnimationPropertyType.ROTATION，取值格式为
   *     [rotationX, rotationY, rotationZ]，单位为度（°），表示绕x、y、z轴的旋转角。<br/>- 对于AnimationPropertyType.TRANSLATION，取值格式为
   *     [translateX, translateY]，单位为px，表示沿x、y轴的平移量。<br/>- 对于AnimationPropertyType.SCALE，取值格式为[scaleX, scaleY]，表示x、y方向的缩
   *     放比例。<br/>- 对于AnimationPropertyType.OPACITY，取值格式为[opacity]，表示不透明度。opacity的取值范围为[0, 1]。
   * @param { AnimateParam } param - 动画参数。包含时长、动画曲线、结束回调等参数。
   * @returns { boolean } 表示动画是否创建成功。<br/>返回值为true：动画创建成功，如果动画参数中设置结束回调，动画结束后会调用结束回调。<br/>返回值为false：动画创建失败，即使动画参数中设置结束回
   *     调，结束回调也不会被调用。<br/>可能导致动画创建失败的原因：<br/> 1. 节点已经释放，调用过[dispose]{@link FrameNode#dispose}方法。<br/> 2. 对于系统组件的代理节点，即对
   *     于[isModifiable]{@link FrameNode#isModifiable}为false的节点，调用该接口会失败。<br/> 3. 属性枚举非法，或属性枚举需要的长度与startValue或endValue的
   *     长度不匹配。<br/> 4. 该属性在第一次创建动画时没有显式指定startValue导致没有动画起点值，或设置的动画终值和动画起始值（当startValue为undefined时动画起始值为上一次的终值）相同，此时无动画
   *     产生。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean;

  /**
   * 请求取消FrameNode上指定属性上的所有动画，该方法需在节点所处线程中调用，会阻塞当前线程以等待取消结果。如果动画成功取消，节点上的属性值会被恢复为取消时的显示值（即当前状态）。
   *
   * @param { AnimationPropertyType[] } properties - 待取消的动画属性枚举数组。可以一次取消一个节点上的多个属性的动画。
   * @returns { boolean } 表示动画是否取消成功。<br/>返回值为true：动画取消成功。<br/>返回值为false：动画取消失败。<br/>可能导致动画取消失败的原因：<br/> 1. 节点已经释放，调用过
   *     [dispose]{@link FrameNode#dispose}方法。<br/> 2. 对于系统组件的代理节点，即对于[isModifiable]{@link FrameNode#isModifiable}为false
   *     的节点，调用该接口会失败。<br/> 3. 属性枚举数组存在非法枚举值。<br/> 4. 系统异常。如发生ipc异常导致动画取消失败。<br/> 1. 即使属性上没有动画，尝试取消该属性的动画，在无系统异常情况下调用取消接
   *     口也会返回true。<br/> 2. 如果开发者保证传入参数合法且节点正常，返回false时表明发生了系统异常。此时开发者可隔一段时间后再次尝试取消，或通过调用duration为0的
   *     [createAnimation]{@link FrameNode#createAnimation}接口停止属性上的动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  cancelAnimations(properties: AnimationPropertyType[]): boolean;

  /**
   * 获取FrameNode上的属性值。
   *
   * @param { AnimationPropertyType } property - 动画属性枚举。
   * @returns { number[] } Current property value from the render node. The array length corresponds to the property
   *     type.
   *     <br>The return value format varies by property:
   *     <br>- An empty array (length 0) is returned
   *     if the node has been disposed, the [dispose]{@link FrameNode#dispose}
   *     API has been called, or the property enumeration is invalid.
   *     <br>- **AnimationPropertyType.ROTATION**: [rotationX, rotationY, rotationZ] in degrees (°).
   *     <br>- **AnimationPropertyType.TRANSLATION**: [translateX, translateY] in px.
   *     <br>- **AnimationPropertyType.SCALE**: [scaleX, scaleY] (scale factors).
   *     <br>- **AnimationPropertyType.OPACITY**: [opacity].
   *     <br>1. After animation cancellation, the node's property value is restored to the display value at the time of
   *     cancellation, which can be obtained using this API.
   *     <br>2. During animation playback, this API returns the final target value
   *     rather than real-time interpolated values.
   *     <br>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getNodePropertyValue(property: AnimationPropertyType): number[];

  /**
   * 获取FrameNode上的属性值。
   *
   * @returns { boolean } - Returns true if the FrameNode was converted between dynamic and static states,
   *     otherwise, returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isTransferred(): boolean;

  /**
   * 获取节点是否处于渲染状态，如果一个节点的对应RenderNode在渲染树上，则处于渲染状态。
   *
   * @returns { boolean } 节点是否处于渲染状态。<br/>true：处于渲染状态；false：不处于渲染状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isInRenderState(): boolean;

  /**
   * 在当前帧触发节点属性更新。
   *
   * 当前节点的属性在构建阶段后被修改，这些改动不会立即生效，而是延迟到下一帧统一处理。
   *
   * 此功能强制当前帧内即时节点更新，确保同步应用渲染效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  invalidateAttributes(): void;

  /**
   * 当前节点接纳目标节点为附属节点。被接纳的附属节点不能已有父节点。调用该接口实际上不会将其添加为子节点，而是仅允许其接收对应子节点的生命周期回调。
   *
   * @param { FrameNode } child - 指定待被接纳的节点。
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be disposed."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  adoptChild(child: FrameNode): void;

  /**
   * 移除被接纳的目标附属节点。
   *
   * @param { FrameNode } child - 正在被接纳的节点。
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be null."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  removeAdoptedChild(child: FrameNode): void;

  /**
   * 将点的坐标从当前节点的坐标系转换为目标节点的坐标系。
   *
   * @param { Position } position - 当前节点坐标系中的相对坐标。
   * @param { FrameNode } targetNode - 本次坐标转换的目标节点，转换得到的点坐标就是该节点坐标系中的相对坐标。
   * @returns { Position } 目标节点局部坐标系中的转换坐标。
   * @throws { BusinessError } 100024 - The current FrameNode and the target FrameNode do not have a common ancestor
   *     node.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'targetNode' is invalid: it cannot be disposed."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  convertPosition(position: Position, targetNode: FrameNode): Position;

  /**
   * 将点的坐标从当前节点的坐标系转换为当前节点所在窗口的坐标系。
   *
   * @param { Position } positionByLocal - 当前节点坐标系中的相对坐标。
   * @returns { Position } 当前节点所在窗口的坐标系中的转换坐标。
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  convertPositionToWindow(positionByLocal: Position): Position;

  /**
   * 将点的坐标从当前节点所在窗口的坐标系转换为当前节点的坐标系。
   *
   * @param { Position } positionByWindow - 当前节点所在窗口的坐标系中的相对坐标。
   * @returns { Position } 当前节点坐标系中的转换坐标。
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  convertPositionFromWindow(positionByWindow: Position): Position;

  /**
   * 查询节点是否被挂载到主节点树上。
   *
   * @returns { boolean } 节点是否被挂载到主节点树上。<br/>true表示节点被挂载到主节点树上，false表示节点没有被挂载到主节点树上。
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isOnMainTree(): boolean;

  /**
   * 批量创建指定数量的FrameNode，返回FrameNode数组。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需的UI上下文。
   * @param { number } count - 指定创建节点的数量，取值范围为大于零的整型。若给定值小于等于0或不是整数，则返回空数组。
   * @returns { FrameNode[] } Array of created FrameNodes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static createFrameNodes(uiContext: UIContext, count: number): FrameNode[];

  /**
   * 以当前节点为根节点，逐层查找所有子节点，返回第一个匹配指定id的节点。查找顺序为：先查找直接子节点，再查找二级子节点，依此类推，找到后立即返回。
   *
   * @param { string } id - 查询的子节点id，为通用属性设置的[组件标识]{@link common}。
   * @returns { FrameNode | null } First node that matches the specified ID, which is returned by searching for all
   *     child nodes layer by layer from the current node (which is used as the root node). If no child node of the
   *     current node matches the specified ID, a null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * 以当前节点为根节点，查找并返回指定UniqueID（系统分配的节点唯一标识，该标识可通过[getUniqueId]{@link FrameNode#getUniqueId}接口获取）的子节点。
   *
   * @param { int } id - 查询的子节点的唯一标识UniqueID。
   *     <br>取值限定为整数。
   * @returns { FrameNode | null } Child node with the unique ID, which is found from the current node (which is used as
   *     the root node). If the child node with the unique ID cannot be found under the current node, a null is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNodeByUniqueId(id: int): FrameNode | null;
}

/**
* TypedFrameNode继承自[FrameNode]{@link FrameNode}，用于声明具体类型的FrameNode。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface TypedFrameNode<C, T> extends FrameNode {

  /**
   * 该接口用于创建对应组件的构造参数，用于设置/更新组件的初始值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initialize: C;

  /**
   * 该接口用于获取对应组件的属性设置对象，用于设置/更新组件的通用、私有属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly attribute: T;
}

/**
* typeNode提供创建具体类型的FrameNode能力，可通过FrameNode的基础接口进行自定义的挂载，使用占位容器进行显示。
*
* 使用typeNode创建[Text]{@link text}、[Image]{@link image}、[Select]{@link select}、[Toggle]{@link toggle}节点时，当传入的
* [UIContext]{@link @ohos.arkui.UIContext}对应的UI实例销毁后，调用该接口会返回一个无效的FrameNode节点，无法正常挂载和显示。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export namespace typeNode {

  /**
   * Text类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Text = TypedFrameNode<TextInterface, TextAttribute>;

  /**
   * 创建Text类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Text' } nodeType - 创建Text类型的FrameNode节点。
   * @returns { Text } Text类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Text'): Text;

  /**
   * 获取Text节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Text' } nodeType - 获取Text节点类型的属性。
   * @returns { TextAttribute | undefined } Attributes of the **Text** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Text'): TextAttribute | undefined;

  /**
   * 将文本控制器[TextController]{@link TextController}绑定到[Text]{@link typeNode.Text}节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言
   * 访问，则抛出异常。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 绑定文本控制器的目标节点。
   * @param { TextController } controller - 文本控制器。
   * @param { 'Text' } nodeType - 绑定输入框控制器的目标节点的节点类型为Text。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void;

  /**
   * Column类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Column = TypedFrameNode<ColumnInterface, ColumnAttribute>;

  /**
   * 创建Column类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Column' } nodeType - 创建Column类型的FrameNode节点。
   * @returns { Column } Column类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Column'): Column;

  /**
   * 获取Column节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Column' } nodeType - 获取Column节点类型的属性。
   * @returns { ColumnAttribute | undefined } Attributes of the **Column** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Column'): ColumnAttribute | undefined;

  /**
   * Row类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Row = TypedFrameNode<RowInterface, RowAttribute>;

  /**
   * 创建Row类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Row' } nodeType - 创建Row类型的FrameNode节点。
   * @returns { Row } Row类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Row'): Row;

  /**
   * 获取Row节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Row' } nodeType - 获取Row节点类型的属性。
   * @returns { RowAttribute | undefined } Attributes of the **Row** node, or **undefined** if they fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Row'): RowAttribute | undefined;

  /**
   * Stack类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Stack = TypedFrameNode<StackInterface, StackAttribute>;

  /**
   * 创建Stack类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Stack' } nodeType - 创建Stack类型的FrameNode节点。
   * @returns { Stack } Stack类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Stack'): Stack;

  /**
   * 获取Stack节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Stack' } nodeType - 获取Stack节点类型的属性。
   * @returns { StackAttribute | undefined } Attributes of the **Stack** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Stack'): StackAttribute | undefined;

  /**
   * GridRow类型的FrameNode节点类型。只允许添加GridCol类型子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type GridRow = TypedFrameNode<GridRowInterface, GridRowAttribute>;

  /**
   * 创建GridRow类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'GridRow' } nodeType - 创建GridRow类型的FrameNode节点。
   * @returns { GridRow } GridRow类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'GridRow'): GridRow;

  /**
   * GridCol类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type GridCol = TypedFrameNode<GridColInterface, GridColAttribute>;

  /**
   * 创建GridCol类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'GridCol' } nodeType - 创建GridCol类型的FrameNode节点。
   * @returns { GridCol } GridCol类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'GridCol'): GridCol;

  /**
   * Flex类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Flex = TypedFrameNode<FlexInterface, FlexAttribute>;

  /**
   * 创建Flex类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Flex' } nodeType - 创建Flex类型的FrameNode节点。
   * @returns { Flex } Flex类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Flex'): Flex;

  /**
   * 获取Flex节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Flex' } nodeType - 获取Flex节点类型的属性。
   * @returns { FlexAttribute | undefined } 获取Flex节点类型的属性。 If the operation fails, undefined is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Flex'): FlexAttribute | undefined;

  /**
   * Swiper类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Swiper = TypedFrameNode<SwiperInterface, SwiperAttribute>;

  /**
   * 创建Swiper类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Swiper' } nodeType - 创建Swiper类型的FrameNode节点。
   * @returns { Swiper } Swiper类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Swiper'): Swiper;

  /**
   * 获取Swiper节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Swiper' } nodeType - 获取Swiper节点类型的属性。
   * @returns { SwiperAttribute | undefined } Properties of the **Swiper** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Swiper'): SwiperAttribute | undefined;

  /**
   * 将控制器[SwiperController]{@link SwiperController}绑定到[Swiper]{@link typeNode.Swiper}节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果
   * 不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 绑定控制器的目标节点。
   * @param { SwiperController } controller - Swiper容器组件的控制器。
   * @param { 'Swiper' } nodeType - 绑定控制器的目标节点的节点类型为Swiper。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void;

  /**
   * Progress类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Progress = TypedFrameNode<ProgressInterface, ProgressAttribute>;

  /**
   * 创建Progress类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Progress' } nodeType - 创建Progress类型的FrameNode节点。
   * @returns { Progress } Progress类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Progress'): Progress;

  /**
   * 获取Progress节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Progress' } nodeType - 获取Progress节点类型的属性。
   * @returns { ProgressAttribute | undefined } Properties of the **Progress** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Progress'): ProgressAttribute | undefined;

  /**
   * Scroll类型的FrameNode节点类型。允许添加一个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Scroll = TypedFrameNode<ScrollInterface, ScrollAttribute>;

  /**
   * 创建Scroll类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Scroll' } nodeType - 创建Scroll类型的FrameNode节点。
   * @returns { Scroll } Scroll类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Scroll'): Scroll;

  /**
   * 获取Scroll节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Scroll' } nodeType - 获取Scroll节点类型的属性。
   * @returns { ScrollAttribute | undefined } Attributes of the **Scroll** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  function getAttribute(node: FrameNode, nodeType: 'Scroll'): ScrollAttribute | undefined;

  /**
   * 获取Scroll节点中持有的UIScrollEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。
   *
   * @param { FrameNode } node - 获取事件时所需的目标节点。
   * @param { 'Scroll' } nodeType - 获取Scroll节点类型的滚动事件。
   * @returns { UIScrollEvent | undefined } **UIScrollEvent** object for the **Scroll** node, or **undefined** if it
   *     fails to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'Scroll'): UIScrollEvent | undefined;

  /**
   * 将滚动控制器[Scroller]{@link Scroller}绑定到[Scroll]{@link typeNode.Scroll}节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异
   * 常。从API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。
   *
   * @param { FrameNode } node - 绑定滚动控制器的目标节点。
   * @param { Scroller } controller - the controller which is bind to 绑定滚动控制器的目标节点。
   * @param { 'Scroll' } nodeType - 绑定滚动控制器的目标节点的节点类型为Scroll。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. the type of the node is error.
   *     2. the node is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 15 and will not
   *     be threw above API version 24. [since 15 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void;

  /**
   * RelativeContainer类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type RelativeContainer = TypedFrameNode<RelativeContainerInterface, RelativeContainerAttribute>;

  /**
   * 创建RelativeContainer类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'RelativeContainer' } nodeType - 创建RelativeContainer类型的FrameNode节点。
   * @returns { RelativeContainer } RelativeContainer类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'RelativeContainer'): RelativeContainer;

  /**
   * 获取RelativeContainer节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'RelativeContainer' } nodeType - 获取RelativeContainer节点类型的属性。
   * @returns { RelativeContainerAttribute | undefined } Attributes of the **RelativeContainer** node, or **undefined**
   *     if they fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'RelativeContainer'): RelativeContainerAttribute | undefined;

  /**
   * Divider类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Divider = TypedFrameNode<DividerInterface, DividerAttribute>;

  /**
   * 创建Divider类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Divider' } nodeType - 创建Divider类型的FrameNode节点。
   * @returns { Divider } Divider类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Divider'): Divider;

  /**
   * LoadingProgress类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type LoadingProgress = TypedFrameNode<LoadingProgressInterface, LoadingProgressAttribute>;

  /**
   * 创建LoadingProgress类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'LoadingProgress' } nodeType - 创建LoadingProgress类型的FrameNode节点。
   * @returns { LoadingProgress } LoadingProgress类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'LoadingProgress'): LoadingProgress;

  /**
   * 获取[LoadingProgress]{@link loading_progress}节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创
   * 建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'LoadingProgress' } nodeType - 获取LoadingProgress节点类型的属性。
   * @returns { LoadingProgressAttribute | undefined } Properties of the **LoadingProgress** node, or **undefined** if
   *     they fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'LoadingProgress'): LoadingProgressAttribute | undefined;

  /**
   * Search类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Search = TypedFrameNode<SearchInterface, SearchAttribute>;

  /**
   * 创建Search类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Search' } nodeType - 创建Search类型的FrameNode节点。
   * @returns { Search } Search类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Search'): Search;

  /**
   * Blank类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Blank = TypedFrameNode<BlankInterface, BlankAttribute>;

  /**
   * 创建Blank类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Blank' } nodeType - 创建Blank类型的FrameNode节点。
   * @returns { Blank } Blank类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Blank'): Blank;

  /**
   * Image类型的FrameNode节点类型。不允许添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Image = TypedFrameNode<ImageInterface, ImageAttribute>;

  /**
   * 创建Image类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Image' } nodeType - 创建Image类型的节点。
   * @returns { Image } Image类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Image'): Image;

  /**
   * 获取Image节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Image' } nodeType - 获取Image节点类型的属性。
   * @returns { ImageAttribute | undefined } Properties of the **Image** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Image'): ImageAttribute | undefined;

  /**
   * List类型的FrameNode节点类型。只允许添加[ListItem]{@link typeNode.ListItem}、[ListItemGroup]{@link typeNode.ListItemGroup}类型子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type List = TypedFrameNode<ListInterface, ListAttribute>;

  /**
   * 创建List类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'List' } nodeType - 创建List类型的节点。
   * @returns { List } List类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'List'): List;

  /**
   * 获取List节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'List' } nodeType - 获取List节点类型的属性。
   * @returns { ListAttribute | undefined } Attributes of the **List** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'List'): ListAttribute | undefined;

  /**
   * 将滚动控制器[Scroller]{@link Scroller}绑定到[List]{@link typeNode.List}节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。从
   * API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。
   *
   * @param { FrameNode } node - 绑定滚动控制器的目标节点。
   * @param { Scroller } controller - 滚动控制器。
   * @param { 'List' } nodeType - 绑定滚动控制器的目标节点的节点类型为List。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node is
   *     incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 20 and will not
   *     be threw above API version 24. [since 20 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void;

  /**
   * ListItem类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type ListItem = TypedFrameNode<ListItemInterface, ListItemAttribute>;

  /**
   * 获取List节点中持有的UIListEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。
   *
   * @param { FrameNode } node - 获取事件时所需的目标节点。
   * @param { 'List' } nodeType - 获取List节点类型的滚动事件。
   * @returns { UIListEvent | undefined } **UIListEvent** object for the **List** node, or **undefined** if it fails to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'List'): UIListEvent | undefined;

  /**
   * 创建ListItem类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'ListItem' } nodeType - 创建ListItem类型的节点。
   * @returns { ListItem } ListItem类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'ListItem'): ListItem;

  /**
   * 获取ListItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'ListItem' } nodeType - 获取ListItem节点类型的属性。
   * @returns { ListItemAttribute | undefined } Attributes of the **ListItem** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'ListItem'): ListItemAttribute | undefined;

  /**
   * TextInput类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type TextInput = TypedFrameNode<TextInputInterface, TextInputAttribute>;

  /**
   * 创建TextInput类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'TextInput' } nodeType - 创建TextInput类型的节点。
   * @returns { TextInput } TextInput类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextInput'): TextInput;

  /**
   * 获取TextInput节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'TextInput' } nodeType - 获取TextInput节点类型的属性。
   * @returns { TextInputAttribute | undefined } Properties of the **TextInput** node, or **undefined** if they fail to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'TextInput'): TextInputAttribute | undefined;

  /**
   * 将输入框控制器[TextInputController]{@link TextInputController}绑定到[TextInput]{@link typeNode.TextInput}节点。若该节点非ArkTS语言创建，则需
   * 要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口从API版本26.0.0开始支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 绑定输入框控制器的目标节点。
   * @param { TextInputController } controller - 输入框控制器。
   * @param { 'TextInput' } nodeType - 绑定输入框控制器的目标节点的节点类型为TextInput。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void;

  /**
   * Button类型的FrameNode节点类型。以子组件模式创建允许添加一个子组件。以label模式创建不可以添加子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Button = TypedFrameNode<ButtonInterface, ButtonAttribute>;

  /**
   * 创建Button类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Button' } nodeType - 创建Button类型的节点。
   * @returns { Button } Button类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Button'): Button;

  /**
   * 获取Button节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Button' } nodeType - 获取Button节点类型的属性。
   * @returns { ButtonAttribute | undefined } Attributes of the **Button** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Button'): ButtonAttribute | undefined;

  /**
   * ListItemGroup类型的FrameNode节点类型。只允许添加[ListItem]{@link list_item}类型子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type ListItemGroup = TypedFrameNode<ListItemGroupInterface, ListItemGroupAttribute>;

  /**
   * 创建ListItemGroup类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'ListItemGroup' } nodeType - 创建ListItemGroup类型的节点。
   * @returns { ListItemGroup } ListItemGroup类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'ListItemGroup'): ListItemGroup;

  /**
   * 获取ListItemGroup节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'ListItemGroup' } nodeType - 获取ListItemGroup节点类型的属性。
   * @returns { ListItemGroupAttribute | undefined } Attributes of the **ListItemGroup** node, or **undefined** if they
   *     fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'ListItemGroup'): ListItemGroupAttribute | undefined;

  /**
   * WaterFlow类型的FrameNode节点类型。只允许添加[FlowItem]{@link flow_item}类型子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type WaterFlow = TypedFrameNode<WaterFlowInterface, WaterFlowAttribute>;

  /**
   * 创建WaterFlow类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'WaterFlow' } nodeType - 创建WaterFlow类型的节点。
   * @returns { WaterFlow } WaterFlow类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'WaterFlow'): WaterFlow;

  /**
   * 获取WaterFlow节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'WaterFlow' } nodeType - 获取WaterFlow节点类型的属性。
   * @returns { WaterFlowAttribute | undefined } Properties of the **WaterFlow** node, or **undefined** if they fail to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'WaterFlow'): WaterFlowAttribute | undefined;

  /**
   * 将滚动控制器[Scroller]{@link Scroller}绑定到[WaterFlow]{@link typeNode.WaterFlow}节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访
   * 问，则抛出异常。从API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。
   *
   * @param { FrameNode } node - 绑定滚动控制器的目标节点。
   * @param { Scroller } controller - 滚动控制器。
   * @param { 'WaterFlow' } nodeType - 绑定滚动控制器的目标节点的节点类型为WaterFlow。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 20 and will not
   *     be threw above API version 24. [since 20 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void;

  /**
   * 获取[WaterFlow]{@link typeNode.WaterFlow}节点中持有的UIWaterFlowEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置
   * 两个事件回调的时候，优先回调声明式事件。
   *
   * @param { FrameNode } node - 获取事件时所需的目标节点。
   * @param { 'WaterFlow' } nodeType - 获取WaterFlow节点类型的滚动事件。
   * @returns { UIWaterFlowEvent | undefined } **UIWaterFlowEvent** object for the **WaterFlow** node, or **undefined**
   *     if it fails to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'WaterFlow'): UIWaterFlowEvent | undefined;

  /**
   * FlowItem类型的FrameNode节点类型。允许添加一个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type FlowItem = TypedFrameNode<FlowItemInterface, FlowItemAttribute>;

  /**
   * 创建FlowItem类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'FlowItem' } nodeType - 创建FlowItem类型的节点。
   * @returns { FlowItem } FlowItem类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'FlowItem'): FlowItem;

  /**
   * 获取FlowItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'FlowItem' } nodeType - 获取FlowItem节点类型的属性。
   * @returns { FlowItemAttribute | undefined } Properties of the **FlowItem** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'FlowItem'): FlowItemAttribute | undefined;

  /**
   * XComponent类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type XComponent = TypedFrameNode<XComponentInterface, XComponentAttribute>;

  /**
   * 创建XComponent类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'XComponent' } nodeType - 创建XComponent类型的节点。
   * @returns { XComponent } XComponent类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'XComponent'): XComponent;

  /**
   * 按照options中的配置参数创建XComponent类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'XComponent' } nodeType - 创建XComponent类型的节点。
   * @param { XComponentOptions } options - 定义XComponent的具体配置参数。
   * @returns { XComponent } XComponent类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'XComponent', options: XComponentOptions): XComponent;

  /**
   * 按照parameters中的配置参数创建XComponent类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'XComponent' } nodeType - 创建XComponent类型的节点。
   * @param { NativeXComponentParameters } parameters - 定义XComponent的具体配置参数。
   * @returns { XComponent } XComponent类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function createNode(context: UIContext, nodeType: 'XComponent', parameters: NativeXComponentParameters): XComponent;

  /**
   * 获取XComponent节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'XComponent' } nodeType - 获取XComponent节点类型的属性。
   * @returns { XComponentAttribute | undefined } Properties of the **XComponent** node, or **undefined** if they fail
   *     to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'XComponent'): XComponentAttribute | undefined;

  /**
   * Checkbox类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Checkbox = TypedFrameNode<CheckboxInterface, CheckboxAttribute>;

  /**
   * 创建Checkbox类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Checkbox' } nodeType - 创建Checkbox类型的节点。
   * @returns { Checkbox } Checkbox类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Checkbox'): Checkbox;

  /**
   * 获取Checkbox节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Checkbox' } nodeType - 获取Checkbox节点类型的属性。
   * @returns { CheckboxAttribute | undefined } Attributes of the **Checkbox** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Checkbox'): CheckboxAttribute | undefined;

  /**
   * CheckboxGroup类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type CheckboxGroup = TypedFrameNode<CheckboxGroupInterface, CheckboxGroupAttribute>;

  /**
   * 创建CheckboxGroup类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'CheckboxGroup' } nodeType - 创建CheckboxGroup类型的节点。
   * @returns { CheckboxGroup } CheckboxGroup类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'CheckboxGroup'): CheckboxGroup;

  /**
   * Radio类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Radio = TypedFrameNode<RadioInterface, RadioAttribute>;

  /**
   * 创建Radio类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Radio' } nodeType - 创建Radio类型的节点。
   * @returns { Radio } Radio类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Radio'): Radio;

  /**
   * 获取Radio节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Radio' } nodeType - 获取Radio节点类型的属性。
   * @returns { RadioAttribute | undefined } Properties of the **Radio** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Radio'): RadioAttribute | undefined;

  /**
   * Rating类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Rating = TypedFrameNode<RatingInterface, RatingAttribute>;

  /**
   * 创建Rating类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Rating' } nodeType - 创建Rating类型的节点。
   * @returns { Rating } Rating类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Rating'): Rating;

  /**
   * Select类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Select = TypedFrameNode<SelectInterface, SelectAttribute>;

  /**
   * 创建Select类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Select' } nodeType - 创建Select类型的节点。
   * @returns { Select } Select类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Select'): Select;

  /**
   * Slider类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Slider = TypedFrameNode<SliderInterface, SliderAttribute>;

  /**
   * 创建Slider类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Slider' } nodeType - 创建Slider类型的节点。
   * @returns { Slider } Slider类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Slider'): Slider;

  /**
   * 获取Slider节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Slider' } nodeType - 获取Slider节点类型的属性。
   * @returns { SliderAttribute | undefined } Properties of the **Slider** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Slider'): SliderAttribute | undefined;

  /**
   * [Toggle]{@link toggle}类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Toggle = TypedFrameNode<ToggleInterface, ToggleAttribute>;

  /**
   * 创建Toggle类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Toggle' } nodeType - 创建Toggle类型的节点。
   * @param { ToggleOptions } [options] - 创建Toggle节点的接口参数，仅可通过ToggleOptions中的type属性设置开关样式。
   * @returns { Toggle } Toggle类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Toggle', options?: ToggleOptions): Toggle;

  /**
   * 获取Toggle节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Toggle' } nodeType - 获取Toggle节点类型的属性。
   * @returns { ToggleAttribute | undefined } Properties of the **Toggle** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Toggle'): ToggleAttribute | undefined;

  /**
   * Marquee类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type Marquee = TypedFrameNode<MarqueeInterface, MarqueeAttribute>;

  /**
   * 创建Marquee类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Marquee' } nodeType - 创建Marquee类型的节点。
   * @returns { Marquee } Marquee类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Marquee'): Marquee;

  /**
   * TextArea类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type TextArea = TypedFrameNode<TextAreaInterface, TextAreaAttribute>;

  /**
   * 创建TextArea类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'TextArea' } nodeType - 创建TextArea类型的节点。
   * @returns { TextArea } TextArea类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextArea'): TextArea;

  /**
   * 获取TextArea节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'TextArea' } nodeType - 获取TextArea节点类型的属性。
   * @returns { TextAreaAttribute | undefined } Properties of the **TextArea** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'TextArea'): TextAreaAttribute | undefined;

  /**
   * 将输入框控制器[TextAreaController]{@link TextAreaController}绑定到[TextArea]{@link typeNode.TextArea}节点。若该节点非ArkTS语言创建，则需要设置是
   * 否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口从API版本26.0.0开始支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 绑定输入框控制器的目标节点。
   * @param { TextAreaController } controller - 输入框控制器。
   * @param { 'TextArea' } nodeType - 绑定输入框控制器的目标节点的节点类型为TextArea。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void;

  /**
   * SymbolGlyph类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type SymbolGlyph = TypedFrameNode<SymbolGlyphInterface, SymbolGlyphAttribute>;

  /**
   * 创建SymbolGlyph类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'SymbolGlyph' } nodeType - 创建SymbolGlyph类型的节点。
   * @returns { SymbolGlyph } SymbolGlyph类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'SymbolGlyph'): SymbolGlyph;

  /**
   * QRCode类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type QRCode = TypedFrameNode<QRCodeInterface, QRCodeAttribute>;

  /**
   * 创建QRCode类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'QRCode' } nodeType - 创建QRCode类型的节点。
   * @returns { QRCode } QRCode类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'QRCode'): QRCode;

  /**
   * Badge类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type Badge = TypedFrameNode<BadgeInterface, BadgeAttribute>;

  /**
   * 创建Badge类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Badge' } nodeType - 创建Badge类型的节点。
   * @returns { Badge } Badge类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Badge'): Badge;

  /**
   * TextClock类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type TextClock = TypedFrameNode<TextClockInterface, TextClockAttribute>;

  /**
   * 创建TextClock类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'TextClock' } nodeType - 创建TextClock类型的节点。
   * @returns { TextClock } TextClock类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextClock'): TextClock;

  /**
   * TextTimer类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type TextTimer = TypedFrameNode<TextTimerInterface, TextTimerAttribute>;

  /**
   * 创建TextTimer类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'TextTimer' } nodeType - 创建TextTimer类型的节点。
   * @returns { TextTimer } TextTimer类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextTimer'): TextTimer;

  /**
   * Grid类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type Grid = TypedFrameNode<GridInterface, GridAttribute>;

  /**
   * 创建Grid类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'Grid' } nodeType - 创建Grid类型的节点。
   * @returns { Grid } Grid类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Grid'): Grid;

  /**
   * 获取Grid节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'Grid' } nodeType - 获取Grid节点类型的属性。
   * @returns { GridAttribute | undefined } Properties of the **Grid** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Grid'): GridAttribute | undefined;

  /**
   * 将滚动控制器[Scroller]{@link Scroller}绑定到[Grid]{@link typeNode.Grid}节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。从
   * API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。
   *
   * @param { FrameNode } node - 绑定滚动控制器的目标节点。
   * @param { Scroller } controller - 滚动控制器。
   * @param { 'Grid' } nodeType - 绑定滚动控制器的目标节点的节点类型为Grid。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 20 and will not
   *     be threw above API version 24. [since 20 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void;

  /**
   * 获取Grid节点中持有的UIGridEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。
   *
   * @param { FrameNode } node - 获取事件时所需的目标节点。
   * @param { 'Grid' } nodeType - 获取Grid节点类型的滚动事件。
   * @returns { UIGridEvent | undefined } **UIGridEvent** object for the **Grid** node, or **undefined** if it fails to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'Grid'): UIGridEvent | undefined;

  /**
   * GridItem类型的FrameNode节点类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type GridItem = TypedFrameNode<GridItemInterface, GridItemAttribute>;

  /**
   * 创建GridItem类型的FrameNode节点。
   *
   * @param { UIContext } context - 创建对应节点时所需的UI上下文。
   * @param { 'GridItem' } nodeType - 创建GridItem类型的节点。
   * @returns { GridItem } GridItem类型的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'GridItem'): GridItem;

  /**
   * 获取GridItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。
   *
   * @param { FrameNode } node - 获取属性时所需的目标节点。
   * @param { 'GridItem' } nodeType - 获取GridItem节点类型的属性。
   * @returns { GridItemAttribute | undefined } Properties of the **GridItem** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'GridItem'): GridItemAttribute | undefined;
}

/**
* NodeAdapter提供FrameNode的数据懒加载能力，通过[LazyForEach]{@link lazy_for_each}实现接口功能。
*
* > **说明：**
* >
* > 入参不能为负数，入参为负数时不做处理。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class NodeAdapter {

  /**
   * NodeAdapter的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 立即释放当前的NodeAdapter。如果是已绑定的状态，会先进行解绑操作，再释放当前的NodeAdapter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * 设置数据节点总数。
   *
   * @param { number } count - 数据节点总数。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set totalNodeCount(count: number);

  /**
   * Get the total number of node count.
   *
   * @returns { number } - Return the total number of node count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get totalNodeCount(): number;

  /**
   * 重新加载全部数据操作。实际调用了LazyForEach中的[OnDataReloaded]{@link DataChangeListener.onDataReloaded}接口通知组件重新加载所有数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reloadAllItems(): void;

  /**
   * 从索引值开始重新加载指定数量的节点数据。
   *
   * @param { number } start - 重新加载的节点开始索引值。<br/>取值范围：[0, +∞)
   * @param { number } count - 重新加载数据节点的数量。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reloadItem(start: number, count: number): void;

  /**
   * 从索引值开始删除指定数量的节点数据。
   *
   * @param { number } start - 删除的节点开始索引值。<br/>取值范围：[0, +∞)
   * @param { number } count - 删除数据节点的数量。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeItem(start: number, count: number): void;

  /**
   * 从索引值开始新增指定数量的节点数据。
   *
   * @param { number } start - 新增的节点开始索引值。<br/>取值范围：[0, +∞)
   * @param { number } count - 新增数据节点的数量。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertItem(start: number, count: number): void;

  /**
   * 将数据从原始索引移动到目的索引。
   *
   * @param { number } from - 数据移动的原始索引值。<br/>取值范围：[0, +∞)
   * @param { number } to - 数据移动的目的索引值。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  moveItem(from: number, to: number): void;

  /**
   * 获取所有有效数据。有效节点数据包括显示在屏幕上的节点以及预加载的节点。其中预加载节点的数量可依照LazyForEach的
   * [使用限制](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md#使用限制)，调整父容器的cachedCount属性进行设置。
   *
   * @returns { Array<FrameNode> } FrameNode数据节点集合。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getAllAvailableItems(): Array<FrameNode>;

  /**
   * FrameNode绑定NodeAdapter时回调。
   *
   * @param { FrameNode } target - 绑定NodeAdapter的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAttachToNode?(target: FrameNode): void;

  /**
   * 解除绑定时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetachFromNode?(): void;

  /**
   * 节点首次加载或新节点滑入时回调。传入的index参数用于自定义生成Id，需要开发者自行保证根据不同index生成Id的唯一性。
   *
   * @param { number } index - 加载节点索引值。<br/>取值范围：[0, +∞)
   * @returns { number } 返回开发者自定义生成的Id，需要开发者自行保证Id的唯一性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGetChildId?(index: number): number;

  /**
   * 节点首次加载或新节点滑入时回调。建议开发者在添加子组件时，遵循声明式组件中子组件的约束。例如，WaterFlow支持添加FlowItem子节点。父节点根据子节点的索引与key值判断是否触发了节点首次加载或新节点滑入。
   *
   * @param { number } index - 加载节点索引值。<br/>取值范围：[0, +∞)
   * @returns { FrameNode } 返回开发者创建的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCreateChild?(index: number): FrameNode;

  /**
   * 子节点即将销毁时回调。既不显示在屏幕上，也不处于预加载范围内的节点都属于即将销毁的节点。
   *
   * @param { number } id - 即将销毁的子节点id。
   * @param { FrameNode } node - 即将销毁的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDisposeChild?(id: number, node: FrameNode): void;

  /**
   * 重新加载的数据节点被复用时回调。已缓存节点的key值与被复用节点一致时进行节点复用。
   *
   * @param { number } id - 复用节点的id。
   * @param { FrameNode } node - 被复用的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onUpdateChild?(id: number, node: FrameNode): void;

  /**
   * 给FrameNode绑定一个NodeAdapter。一个节点只能绑定一个NodeAdapter。已经绑定NodeAdapter的再次绑定会失败并返回false。
   *
   * > **说明：**
   * >
   * > 支持绑定的组件：Column、Row、Stack、GridRow、Flex、Swiper、RelativeContainer、List、ListItemGroup、WaterFlow、Grid。
   *
   * @param { NodeAdapter } adapter - 定义懒加载的NodeAdapter类。
   * @param { FrameNode } node - 绑定的FrameNode节点。
   * @returns { boolean } 绑定结果，返回true绑定成功，false绑定失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean;

  /**
   * 解除绑定操作，解除FrameNode节点绑定的NodeAdapter。
   *
   * @param { FrameNode } node - 要解除绑定的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static detachNodeAdapter(node: FrameNode): void;

  /**
   * 查询当前FrameNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;
}