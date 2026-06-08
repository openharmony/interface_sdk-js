
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { RenderNode } from 'arkui.RenderNode';
import { Size, NodePosition, NodeEdges, LengthMetrics, SizeT } from 'arkui.Graphics';
import { DrawContext } from 'arkui.Graphics';
import { ComponentContent, ReactiveComponentContent } from 'arkui.ComponentContent';
import { BusinessError } from '@ohos.base';
import { UIContext } from '@ohos.arkui.UIContext';
import { UICommonEvent, UIGestureEvent, CommonAttribute, CustomProperty } from '@ohos.arkui.component';
import { SwiperAttribute, SwiperController } from '@ohos.arkui.component';
import { ScrollAttribute, Scroller, UIScrollEvent } from '@ohos.arkui.component';
import { ListAttribute, ListOptions, UIListEvent } from '@ohos.arkui.component';
import { ListItemAttribute, ListItemOptions } from '@ohos.arkui.component';
import { ListItemGroupAttribute, ListItemGroupOptions } from '@ohos.arkui.component';
import { WaterFlowAttribute, WaterFlowOptions, UIWaterFlowEvent } from '@ohos.arkui.component';
import { FlowItemAttribute } from '@ohos.arkui.component';
import { GridAttribute, GridLayoutOptions, UIGridEvent } from '@ohos.arkui.component';
import { GridItemAttribute, GridItemOptions } from '@ohos.arkui.component';
import { Resource } from 'global.resource';
import { TextAttribute, TextOptions, TextController } from '@ohos.arkui.component';
import { TextInputAttribute, TextInputOptions, TextInputController } from '@ohos.arkui.component';
import { TextAreaAttribute, TextAreaOptions, TextAreaController } from '@ohos.arkui.component';
import { SearchAttribute, SearchOptions } from '@ohos.arkui.component';
import { SymbolGlyphAttribute } from '@ohos.arkui.component';
import { MarqueeAttribute, MarqueeOptions } from '@ohos.arkui.component';
import { ColumnAttribute, ColumnOptions, ColumnOptionsV2 } from '@ohos.arkui.component';
import { RowAttribute, RowOptions, RowOptionsV2 } from '@ohos.arkui.component';
import { StackAttribute, StackOptions } from '@ohos.arkui.component';
import { FlexAttribute, FlexOptions } from '@ohos.arkui.component';
import { RelativeContainerAttribute } from '@ohos.arkui.component';
import { DividerAttribute } from '@ohos.arkui.component';
import { BlankAttribute } from '@ohos.arkui.component';
import { GridRowAttribute, GridRowOptions } from '@ohos.arkui.component';
import { GridColAttribute, GridColOptions } from '@ohos.arkui.component';
import { ProgressAttribute, ProgressOptions } from '@ohos.arkui.component';
import { QRCodeAttribute } from '@ohos.arkui.component';
import { BadgeAttribute, BadgeParamWithNumber, BadgeParamWithString } from '@ohos.arkui.component';
import { TextClockAttribute, TextClockOptions } from '@ohos.arkui.component';
import { TextTimerAttribute, TextTimerOptions } from '@ohos.arkui.component';
import { ImageAttribute, ImageContent } from '@ohos.arkui.component';
import { DrawableDescriptor } from '../@ohos.arkui.drawableDescriptor';
import { ButtonAttribute, ButtonOptions } from '@ohos.arkui.component';
import { CheckboxOptions, CheckboxAttribute } from '@ohos.arkui.component';
import { RadioOptions, RadioAttribute } from '@ohos.arkui.component';
import { SliderAttribute, SliderOptions } from '@ohos.arkui.component';
import { ToggleAttribute, ToggleOptions } from '@ohos.arkui.component';
import { RatingAttribute, RatingOptions } from '@ohos.arkui.component';
import { SelectAttribute, SelectOption } from '@ohos.arkui.component';
import { XComponentAttribute, XComponentController, XComponentOptions, XComponentParameters, NativeXComponentParameters } from '@ohos.arkui.component';
import image from '../@ohos.multimedia.image';
import { ImageAIOptions } from '@ohos.arkui.component';
import { ResourceStr } from '@ohos.arkui.component';
import { LoadingProgressAttribute } from '@ohos.arkui.component';
import { CheckboxGroupOptions, CheckboxGroupAttribute } from '@ohos.arkui.component';
import { AnimateParam } from '@ohos.arkui.component';
import { AnimationPropertyType, EventQueryType } from './component/enums';

/**
 * 描述组件的布局约束。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LayoutConstraint {

  /**
   * 最大尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxSize: Size;

  /**
   * 最小尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minSize: Size;

  /**
   * 子节点计算百分比时的尺寸基准。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  percentReference: Size;
}

/**
 * 该接口用于配置或查询FrameNode的跨语言访问权限。例如，针对ArkTS语言创建的节点，可通过该接口控制是否允许通过非ArkTS语言进行属性访问或修改。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CrossLanguageOptions {

  /**
   * FrameNode是否支持跨ArkTS语言进行属性设置。
   * true表示支持跨ArkTS语言进行属性设置，false表示不支持跨ArkTS语言进行属性设置。
   * 默认值为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeSetting?: boolean;

  /**
   * FrameNode是否支持跨ArkTS语言进行组件树操作。
   * true表示支持跨ArkTS语言进行组件树操作，false表示不支持跨ArkTS语言进行组件树操作。
   * 默认值为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  treeOperating?: boolean;
}

/**
 * 组件的交互事件绑定状态信息。如果当前节点上绑定了所要查询的交互事件，调用查询接口时返回一个InteractionEventBindingInfo对象，指示事件绑定详细信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InteractionEventBindingInfo {

  /**
   * 是否以声明方式绑定事件。
   *
   * true表示以声明方式绑定事件，false表示没有以声明方式绑定事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  baseEventRegistered: boolean;

  /**
   * 是否以自定义组件节点的方式绑定事件，请参考[基础事件示例](docroot://reference/apis-arkui/js-apis-arkui-frameNode-static.md#基础事件示例)
   *
   * true表示以自定义组件节点的方式绑定事件，false表示没有以自定义组件节点的方式绑定事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  nativeEventRegistered: boolean;

  /**
   * 组件是否绑定内置事件(组件内部定义的事件, 无需开发者手动绑定)。
   *
   * true表示组件绑定内置事件，false表示组件没有绑定内置事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  builtInEventRegistered: boolean;
}

/**
 * 子节点展开模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export enum ExpandMode {

  /**
   * 表示不展开当前FrameNode的子节点。如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取在主节点树上的子节点时，不展开当前FrameNode的子节点。子节点序列号按在主节
   * 点树上的子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NOT_EXPAND = 0,

  /**
   * 表示展开当前FrameNode的子节点。如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取所有子节点时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXPAND = 1,

  /**
   * 表示按需展开当前FrameNode的子节点。如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取在主树上的子节点时，不展开当前FrameNode的子节点；获取不在主树上的子节点
   * 时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAZY_EXPAND = 2,

  /**
   * 表示不展开当前FrameNode的子节点，如果FrameNode包含[LazyForEach]{@link lazy_for_each}子节点，获取已经展开的子节点时，可以直接获取，获取未展开的子节点时，仅创建对应位置的节点，而不
   * 展开所有子节点。子节点序列号按所有子节点计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LAZY_NOT_EXPAND = 3
}

/**
 * 子节点计数模式枚举。用于指定获取子节点数量时的计数方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
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
   * @since 26.0.0 static
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
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  ALL_NOT_EXPAND = 2
}

/**
 * 多态样式状态枚举，用于处理多态样式。
 *
 * .0.0
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export enum UIState {

  /**
   * 正常状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NORMAL = 0,

  /**
   * 按下状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PRESSED = 1 << 0,

  /**
   * 获焦状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOCUSED = 1 << 1,

  /**
   * 禁用状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISABLED = 1 << 2,

  /**
   * 选中状态。
   *
   * 仅特定的组件支持此状态：Checkbox、Radio、Toggle、List、Grid、MenuItem。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED = 1 << 3,

  /**
   * 悬浮状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOVERED = 1 << 4
}

/**
 * UI状态变化处理函数，返回当前UI状态，值为结果
 * 的所有当前状态枚举值或计算，并且可以确定状态
 * 通过执行&操作，如下。
 * 如果(currentStates & UIState.PRESSED == UIState.PRESSED)
 * 但是，请注意，对于正常的状态检查，应该直接使用equal。
 * 如果(currentStates == UIState.NORMAL)。
 *
 * @param { FrameNode } node - 触发UI状态变化的节点。
 * @param { int } currentUIStates - 回调触发时当前的UI状态。可以通过位与运算判断当前包含哪些[UIState]{@link UIState}状态。位与运算方法：if (currentState &
 *     UIState.PRESSED == UIState.PRESSED)。一般的UIState状态检查可以直接判断：if (currentState == UIState.PRESSED)。
 *     <br>取值限定为整数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type UIStatesChangeHandler = (node: FrameNode, currentUIStates: int) => void;

/**
 * FrameNode选项，可设置FrameNode是否支持多线程操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare interface FrameNodeOptions {

  /**
   * FrameNode是否支持多线程操作。
   *
   * true表示支持多线程操作，该节点可以在多线程场景中使用。
   *
   * false或不设置表示不支持多线程操作。
   *
   * 默认为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  supportMultiThread?: boolean;
}

/**
 * 定义FrameNode。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class FrameNode {

  /**
   * FrameNode的构造函数。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需的UI上下文。 [since 23]
   * @param { FrameNodeOptions } [options] - FrameNode创建时的可选参数。默认值：undefined，表示不支持多线程操作。 [since 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(uiContext: UIContext, options?: FrameNodeOptions);

  /**
   * 获取FrameNode中持有的[RenderNode]{@link RenderNode:RenderNode}。
   *
   * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getRenderNode(): RenderNode | null;

  /**
   * 判断当前节点是否可修改。
   *
   * @returns { boolean } - 判断当前节点是否可修改。<br/>true表示当前节点可修改，false表示当前节点不可修改。<br/>当节点为
   *     [自定义组件节点](docroot://ui/arkts-user-defined-node.md#自定义组件节点-framenode)中的系统组件代理节点或节点已经
   *     [dispose]{@link FrameNode#dispose}时返回false。<br/>当返回false时，当前FrameNode不支持
   *     [appendChild]{@link FrameNode#appendChild}、[insertChildAfter]{@link FrameNode#insertChildAfter}、
   *     [removeChild]{@link FrameNode#removeChild}、[clearChildren]{@link FrameNode#clearChildren}、
   *     [createAnimation]{@link FrameNode#createAnimation}、[cancelAnimations]{@link FrameNode#cancelAnimations}的操作。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isModifiable(): boolean;

  /**
   * 在FrameNode最后一个子节点后添加新的子节点。当前FrameNode如果不可修改，抛出异常信息。
   * [typeNode](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md)在appendChild时会校验子组件类型或个数，不满足时抛出异常信息，限制情况请查看
   * [typeNode](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md)描述。
   *
   * @param { FrameNode } node - 需要添加的FrameNode。<br/> node节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。
   *     若子节点不符合规格，则抛出异常信息。<br/> node节点不可以拥有父节点，否则抛出异常信息。
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: it cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  appendChild(node: FrameNode): void;

  /**
   * 在FrameNode指定子节点之后添加新的子节点。当前FrameNode如果不可修改，抛出异常信息。
   *
   * @param { FrameNode } child - 需要添加的子节点。<br/>child节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。若子节点不
   *     符合规格，则抛出异常信息。<br/> child节点不可以拥有父节点，否则抛出异常信息。
   * @param { FrameNode | null } sibling - 新节点将插入到该节点之后。若该参数设置为空，则新节点将插入到首个子节点之前。
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertChildAfter(child: FrameNode, sibling: FrameNode | null): void;

  /**
   * 从FrameNode中删除指定的子节点。当前FrameNode如果不可修改，抛出异常信息。
   *
   * @param { FrameNode } node - 需要删除的子节点。
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeChild(node: FrameNode): void;

  /**
   * 清除当前FrameNode的所有子节点。当前FrameNode如果不可修改，抛出异常信息。
   *
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearChildren(): void;

  /**
   *
   * @param { int } index - 需要查询的子节点的序列号。index取值范围为[0, +∞)，若当前节点有n个子节点，index取值有效范围为[0, n-1]。
   * @param { ExpandMode | undefined } [expandMode] - 指定子节点展开模式。<br/>默认值：ExpandMode.EXPAND
   * @returns { FrameNode | null } - Returns a FrameNode. When the required node does not exist, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getChild(index: int, expandMode?: ExpandMode | undefined): FrameNode | null;

  /**
   *
   * @returns { int } - 当前节点第一个在主节点树上的子节点的序列号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFirstChildIndexWithoutExpand(): int;

  /**
   *
   * @returns { int } - 当前节点最后一个在主节点树上的子节点的序列号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLastChildIndexWithoutExpand(): int;

  /**
   * 获取当前FrameNode的第一个子节点。
   *
   * @returns { FrameNode | null } - Returns a FrameNode, which is first child of the current FrameNode.
   *     If current FrameNode does not have child node, returns null.
   *     If current FrameNode does not have child node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFirstChild(): FrameNode | null;

  /**
   * 获取当前FrameNode的下一个同级节点。
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have next sibling node,
   *     returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getNextSibling(): FrameNode | null;

  /**
   * 获取当前FrameNode的上一个同级节点。
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have previous sibling node,
   *     returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPreviousSibling(): FrameNode | null;

  /**
   * 获取当前FrameNode的父节点。
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have parent node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParent(): FrameNode | null;

  /**
   *
   * @returns { int } - 获取当前FrameNode的子节点数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getChildrenCount(): int;

  /**
   * 根据指定的计数模式获取当前FrameNode的子节点数量。
   *
   * .0.0
   *
   * .0.0
   *
   * @param { ChildrenCountMode } [countMode] - The children count mode. Default value is ChildrenCountMode.ALL_EXPAND.
   * @returns { int } - Returns the number of children of the current FrameNode based on the count mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getChildrenCount(countMode?: ChildrenCountMode): int;

  /**
   * 将当前节点移动到目标 FrameNode 中作为其子节点。
   * 若当前 FrameNode 不可修改，将抛出异常。
   * 当 targetParent 为类型节点（typeNode）时，本接口会验证子节点的类型或数量。
   * 若验证失败，将抛出异常。具体限制请参阅 typeNode 说明。
   * 若当前 FrameNode 已被收养，将抛出异常。
   *
   * <p><strong>说明</strong>：
   * <br>当前移动操作仅支持以下类型的 TypedFrameNode：Stack、XComponent。
   * </p>
   *
   * @param { FrameNode } targetParent - 目标父节点。
   *     目标父节点不能是声明式创建的节点（即不可修改的 FrameNode）。
   *     若不符合规范，将抛出异常。
   * @param { int } [index] - 节点移动至目标父节点中的索引位置。若该值为负数或无效值，节点将被移动到目标父节点的末尾。默认移动到目标父节点末尾。
   *     若目标 FrameNode 已有 n 个子节点，则 index 的取值范围为 [0, n)。
   *     <br>取值限定为整数。默认值：-1。
   *     <br>默认值: -1
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100027 - The current node has been adopted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveTo(targetParent: FrameNode, index?: int): void;

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
   * @since 23 static
   */
  dispose(): void;

  /**
   * Get the position of the node relative to window.
   *
   * @returns { NodePosition } - Returns position of the node relative to window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPositionToWindow(): NodePosition;

  /**
   * 查询当前FrameNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } - 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isDisposed(): boolean;

  /**
   *
   * @returns { NodePosition } - 节点相对于父组件的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPositionToParent(): NodePosition;

  /**
   * 获取FrameNode测量后的大小，单位为PX。
   *
   * @returns { Size } - 节点测量后的大小，单位为PX。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getMeasuredSize(): Size;

  /**
   *
   * @returns { NodePosition } - 节点布局后相对于父组件的位置偏移，单位为PX。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLayoutPosition(): NodePosition;

  /**
   *
   * @returns { NodeEdges<LengthMetrics> } - 用户设置的边框宽度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUserConfigBorderWidth(): NodeEdges<LengthMetrics>;

  /**
   *
   * @returns { NodeEdges<LengthMetrics> } - 用户设置的内边距。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUserConfigPadding(): NodeEdges<LengthMetrics>;

  /**
   *
   * @returns { NodeEdges<LengthMetrics> } - 用户设置的外边距。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUserConfigMargin(): NodeEdges<LengthMetrics>;

  /**
   * 获取用户设置的宽高。
   *
   * @returns { SizeT<LengthMetrics> } - 用户设置的宽高。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUserConfigSize(): SizeT<LengthMetrics>;

  /**
   * 获取用户设置的节点ID（通用属性设置的[组件标识]{@link common}）。
   *
   * @returns { string } - 用户设置的节点ID（通用属性设置的[组件标识]{@link common}）。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getId(): string;

  /**
   *
   * @returns { int } - 系统分配的唯一标识的节点UniqueID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUniqueId(): int;

  /**
   * 获取节点的类型。系统组件类型为组件名称，例如，按钮组件[Button]{@link button}的类型为Button。而对于自定义组件，若其有渲染内容，则其类型为__Common__。
   *
   * @returns { string } - 节点的类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getNodeType(): string;

  /**
   *
   * @returns { double } - 节点的不透明度。范围是[0, 1]，值越大透明度越低。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getOpacity(): double;

  /**
   * 获取节点是否可见。
   *
   * > **说明：**
   * >
   * > 根据组件设置的visibility属性值判断该节点是否可见。
   *
   * @returns { boolean } - 节点是否可见。<br/>true表示节点可见，false表示节点不可见。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isVisible(): boolean;

  /**
   * 获取节点是否是剪裁到组件区域。当调用[dispose]{@link FrameNode#dispose}解除对实体FrameNode节点的引用关系之后，返回值为true。
   *
   * @returns { boolean } - 节点是否是剪裁到组件区域。<br/>true表示节点剪裁到组件区域，false表示节点不是剪裁到组件区域。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isClipToFrame(): boolean;

  /**
   * 获取节点是否被挂载到主节点树上。
   *
   * @returns { boolean } - 节点是否被挂载到主节点树上。<br/>true表示节点被挂载到主节点树上，false表示节点不是被挂载到主节点树上。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isAttached(): boolean;

  /**
   * 获取节点的结构信息，该信息和DevEco Studio内置<!--RP1-->ArkUI Inspector<!--RP1End-->工具里面的一致。
   *
   * > **说明：**
   * >
   * > getInspectorInfo接口用于获取所有节点的信息，作为调试接口使用，频繁调用会导致性能下降。
   *
   * @returns { Object } - 节点的结构信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getInspectorInfo(): Object;

  /**
   * 通过名称获取组件的自定义属性。
   *
   * @param { string } name - 自定义属性的名称。
   * @returns { CustomProperty } - 自定义属性的值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getCustomProperty(name: string): CustomProperty;

  /**
   * 获取FrameNode中持有的UICommonEvent对象，用于设置基础事件。设置的基础事件与声明式定义的事件平行，参与事件竞争；设置的基础事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。
   *
   * LazyForEach场景下，由于存在节点的销毁重建，对于重建的节点需要重新设置事件回调才能保证监听事件正常响应。
   *
   * @returns { UICommonEvent } - UICommonEvent对象，用于设置基础事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get commonEvent(): UICommonEvent;

  /**
   * 获取FrameNode中持有的UIGestureEvent对象，用于设置组件绑定的手势事件。通过gestureEvent接口设置的手势不会覆盖通过声明式手势接口[（绑定手势事件）]{@link common}绑定的手势，两者同时设
   * 置了手势时，优先回调声明式接口设置的手势事件。
   *
   * @returns { UIGestureEvent } - UIGestureEvent对象，用于设置组件绑定的手势。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @returns { CommonAttribute } - 获取FrameNode中持有的CommonAttribute接口，用于设置通用属性和通用事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  get commonAttribute(): CommonAttribute;

  /**
   * 该接口的[DrawContext]{@link Graphics:DrawContext}中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见
   * [调整自定义绘制Canvas的变换矩阵](docroot://ui/arkts-user-defined-arktsNode-frameNode.md#调整自定义绘制canvas的变换矩阵)。
   *
   * @param { DrawContext } context - 图形绘制上下文。自绘制区域无法超出组件自身大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDraw(context: DrawContext): void;

  /**
   * FrameNode的自定义测量方法，该方法会重写默认测量方法，在FrameNode进行测量时被调用，测量FrameNode及其内容的大小。
   *
   * @param { LayoutConstraint } constraint - 组件进行测量时使用的布局约束。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onMeasure(constraint: LayoutConstraint): void;

  /**
   *
   * @param { NodePosition } position - 组件进行布局时使用的位置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onLayout(position: NodePosition): void;

  /**
   * 设置FrameNode的测量后的尺寸，默认单位PX。若设置的宽高为负数，自动取零。
   *
   * @param { Size } size - FrameNode的测量后的尺寸。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setMeasuredSize(size: Size): void;

  /**
   *
   * @param { NodePosition } position - FrameNode的布局后的位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setLayoutPosition(position: NodePosition): void;

  /**
   * 调用FrameNode的测量方法，根据父容器的布局约束，对FrameNode进行测量，计算出尺寸，如果测量方法被重写，则调用重写的方法。建议在[onMeasure]{@link FrameNode#onMeasure}方法中调用。
   *
   * @param { LayoutConstraint } constraint - 组件进行测量时使用的父容器布局约束。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  measure(constraint: LayoutConstraint): void;

  /**
   *
   * @param { NodePosition } position - 组件进行布局时使用的位置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layout(position: NodePosition): void;

  /**
   * 该方法会将FrameNode标记为需要布局的状态，下一帧将会进行重新布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setNeedsLayout(): void;

  /**
   * 该方法会触发FrameNode自绘制内容的重新渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  invalidate(): void;

  /**
   *
   * @returns { NodePosition } - 节点相对于屏幕的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPositionToScreen(): NodePosition;

  /**
   *
   * @returns { NodePosition } - 节点相对于全局屏幕的位置偏移，单位为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getGlobalPositionOnDisplay(): NodePosition;

  /**
   *
   * @returns { NodePosition } - 节点相对于窗口的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPositionToWindowWithTransform(): NodePosition;

  /**
   *
   * @returns { NodePosition } - 节点相对于父组件的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPositionToParentWithTransform(): NodePosition;

  /**
   * 获取FrameNode相对于屏幕带有绘制属性的位置偏移，单位为VP，绘制属性比如[transform]{@link CommonMethod#transform(value: object)},
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}等，返回的坐标是组件布局时左上角变换后的坐标。
   *
   * @returns { NodePosition } - 节点相对于屏幕的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPositionToScreenWithTransform(): NodePosition;

  /**
   * 下树并递归释放当前节点为根的子树。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disposeTree(): void;

  /**
   * 设置组件支持的多态样式状态。为了提高效率，需要通过状态
   * 以及它们对应的处理程序函数。当状态发生变化时，处理程序函数将
   * 可以在回调中根据当前状态更新UI样式。
   * 对于某些类型的控制节点，系统对某些状态（例如，按钮）有默认的样式处理
   * 组件有默认的样式更改状态（PRESSED状态）。使用此方法自定义状态处理时
   * 对于这样的组件，系统的默认样式更改将首先应用，然后是自定义样式。
   * 最终的效果是两者的结合。你可以将`excludeInner`设置为`true`来禁用系统默认的
   * 样式处理，尽管这取决于系统实现。
   * 调用此方法时，提供的`handler`函数将立即执行。你不需要
   * 显式为NORMAL状态注册一个处理程序。如果为非NORMAL状态注册处理程序，则系统
   * 将在状态恢复为NORMAL时自动调用处理程序，允许您恢复UI风格。
   *
   * @param { int } uiStates - 目标UI声明节点需要处理。可以组合多个状态
   *     使用OR操作，例如`targetUIStates = UIState.PRESSED | UIState.FOCUSED`。
   *     <br>取值限定为整数。
   *     - 需要处理目标节点的UI状态。<br>可以通过位或计算同时指定设置多个状态，如：targetUIStates = UIState.PRESSED  |
   *     UIState.FOCUSED。
   * @param { UIStatesChangeHandler } statesChangeHandler - 状态变化时的回调函数。
   * @param { boolean } [excludeInner=false] - A flag to disable the system's default style handling for states.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  addSupportedUIStates(uiStates: int, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void;

  /**
   *
   * @param { int } uiStates - 需要删除的UI状态。可以通过位或计算同时指定删除多个状态，如：removeUIStates = UIState.PRESSED  |  UIState.FOCUSED。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  removeSupportedUIStates(uiStates: int): void;

  /**
   * 支持添加ComponentContent类型的组件内容。要求当前节点是一个可修改的节点，即[isModifiable]{@link FrameNode#isModifiable}的返回值为true，否则抛出异常信息。
   *
   * @param { ComponentContent<T> | ReactiveComponentContent } content - Newly added ComponentContent or
   *     ReactiveComponentContent. [since 26.0.0]
   * @param { ComponentContent<T> } content - FrameNode节点中显示的组件内容。 [since 23 - 23]
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent): void;

  /**
   * 设置当前FrameNode的跨ArkTS语言访问选项。例如ArkTS语言创建的节点，设置该节点是否可通过非ArkTS语言进行属性设置，从API版本26.0.0开始支持设置是否可通过非ArkTS语言进行组件树操作。当前
   * FrameNode如果不可修改或不可设置跨ArkTS语言访问选项，抛出异常信息。
   *
   * > **说明：**
   * >
   * > 当前仅支持[Scroll](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#scroll),
   * > [Swiper](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#swiper)，
   * > [List](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#list)，
   * > [ListItem](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#listitem)，
   * > [ListItemGroup](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#listitemgroup)，
   * > [WaterFlow](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#waterflow)，
   * > [FlowItem](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#flowitem)，
   * > [Grid](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#grid14)，
   * > [GridItem](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#griditem14)，
   * > [TextInput](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#textinput)，
   * > [TextArea](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#textarea14)，
   * > [Column](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#column)，
   * > [Row](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#row)，
   * > [Stack](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#stack)，
   * > [Flex](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#flex)，
   * > [RelativeContainer](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#relativecontainer)，
   * > [Progress](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#progress)，
   * > [LoadingProgress](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#loadingprogress)，
   * > [Image](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#image)，
   * > [Button](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#button)，
   * > [CheckBox](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#checkbox18)，
   * > [Radio](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#radio18)，
   * > [Slider](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#slider18)，
   * > [Toggle](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#toggle18)，
   * > [XComponent](docroot://reference/apis-arkui/js-apis-arkui-typeNode.md#xcomponent)类型的
   * > [TypedFrameNode]{@link TypedFrameNode}设置跨ArkTS语言访问选项。
   *
   * @param { CrossLanguageOptions } value - 跨ArkTS语言访问选项。
   * @throws { BusinessError } 100022 - The FrameNode cannot be set whether to support cross-language common attribute
   *     setting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCrossLanguageOptions(value: CrossLanguageOptions): void;

  /**
   * 获取当前FrameNode的跨ArkTS语言访问选项。例如ArkTS语言创建的节点，返回该节点是否可通过非ArkTS语言进行属性设置，从API版本26.0.0开始支持获取是否可通过非ArkTS语言进行组件树操作。
   *
   * @returns { CrossLanguageOptions } - 跨ArkTS语言访问选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getCrossLanguageOptions(): CrossLanguageOptions;

  /**
   * 全局复用场景下，触发子组件回收，彻底释放FrameNode后端资源，以便于资源的重新复用，确保后端资源能够被有效回收并再次使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  recycle(): void;

  /**
   * 全局复用场景下，触发子组件复用，实现FrameNode后端资源的复用，提升资源利用效率。为保证资源充足，可以在recycle之后使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reuse(): void;

  /**
   * 当前节点接纳目标节点为附属节点。被接纳的附属节点不能已有父节点。调用该接口实际上不会将其添加为子节点，而是仅允许其接收对应子节点的生命周期回调。
   *
   * @param { FrameNode } child - 指定待被接纳的节点。
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be disposed."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @stagemodelonly
   * @since 23 static
   */
  removeAdoptedChild(child: FrameNode): void;

  /**
   * 获取目标节点的事件绑定信息，如果该组件节点上没有绑定要查询的交互事件类型时，返回 undefined。
   *
   * @param { EventQueryType } eventType - 要查询的交互事件类型。
   * @returns { InteractionEventBindingInfo | undefined }
   *     - Returns one InteractionEventBindingInfo object indicating the event binding details if any interaction
   *     events binded on current node, returns undefined if no one binded on.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined;

  /**
   * 在FrameNode中创建属性动画。
   *
   * @param { AnimationPropertyType } property - 动画属性枚举。
   * @param { double[] | undefined } startValue - 动画属性的起始值。取值为undefined或数组，取值为数组时数组长度需要和属性枚举匹配。如果为undefined则表示不显式指定动画初值，
   *     节点上一次设置的属性终值为此次动画的起点值。如果取值为数组，<br/>- 对于AnimationPropertyType.ROTATION，取值格式为[rotationX, rotationY, rotationZ]，单位
   *     为度（°），表示绕x、y、z轴的旋转角。<br/>- 对于AnimationPropertyType.TRANSLATION，取值格式为[translateX, translateY]，单位为px，表示沿x、y轴的平移量。
   *     <br/>- 对于AnimationPropertyType.SCALE，取值格式为[scaleX, scaleY]，表示x、y方向的缩放比例。<br/>- 对于AnimationPropertyType.OPACITY，
   *     取值格式为[opacity]，表示不透明度。opacity的取值范围为[0, 1]。<br/>当节点上从未设置过该属性时，需要显式指定startValue才能正常创建动画。当节点上已经设置过属性（如第二次及之后创建动画），
   *     则推荐不显式指定startValue或者显式指定startValue为上一次的终值，表示使用上一次的终值作为新的动画起点，避免起始值跳变。
   * @param { double[] } endValue - 动画属性的终止值。取值为数组，数组长度需要和属性枚举匹配。<br/>- 对于AnimationPropertyType.ROTATION，取值格式为
   *     [rotationX, rotationY, rotationZ]，单位为度（°），表示绕x、y、z轴的旋转角。<br/>- 对于AnimationPropertyType.TRANSLATION，取值格式为
   *     [translateX, translateY]，单位为px，表示沿x、y轴的平移量。<br/>- 对于AnimationPropertyType.SCALE，取值格式为[scaleX, scaleY]，表示x、y方向的缩
   *     放比例。<br/>- 对于AnimationPropertyType.OPACITY，取值格式为[opacity]，表示不透明度。opacity的取值范围为[0, 1]。
   * @param { AnimateParam } param - 动画参数。包含时长、动画曲线、结束回调等参数。
   * @returns { boolean } - 表示动画是否创建成功。<br/>返回值为true：动画创建成功，如果动画参数中设置结束回调，动画结束后会调用结束回调。<br/>返回值为false：动画创建失败，即使动画参数中设置结束回
   *     调，结束回调也不会被调用。<br/>可能导致动画创建失败的原因：<br/> 1. 节点已经释放，调用过[dispose]{@link FrameNode#dispose}方法。<br/> 2. 对于系统组件的代理节点，即对
   *     于[isModifiable]{@link FrameNode#isModifiable}为false的节点，调用该接口会失败。<br/> 3. 属性枚举非法，或属性枚举需要的长度与startValue或endValue的
   *     长度不匹配。<br/> 4. 该属性在第一次创建动画时没有显式指定startValue导致没有动画起点值，或设置的动画终值和动画起始值（当startValue为undefined时动画起始值为上一次的终值）相同，此时无动画
   *     产生。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createAnimation(property: AnimationPropertyType, startValue: double[] | undefined, endValue: double[], param: AnimateParam): boolean;

  /**
   * 请求取消FrameNode上指定属性上的所有动画，该方法需在节点所处线程中调用，会阻塞当前线程以等待取消结果。如果动画成功取消，节点上的属性值会被恢复为取消时的显示值（即当前状态）。
   *
   * @param { AnimationPropertyType[] } properties - 待取消的动画属性枚举数组。可以一次取消一个节点上的多个属性的动画。
   * @returns { boolean } - 表示动画是否取消成功。<br/>返回值为true：动画取消成功。<br/>返回值为false：动画取消失败。<br/>可能导致动画取消失败的原因：<br/> 1. 节点已经释放，调用过
   *     [dispose]{@link FrameNode#dispose}方法。<br/> 2. 对于系统组件的代理节点，即对于[isModifiable]{@link FrameNode#isModifiable}为false
   *     的节点，调用该接口会失败。<br/> 3. 属性枚举数组存在非法枚举值。<br/> 4. 系统异常。如发生ipc异常导致动画取消失败。<br/> 1. 即使属性上没有动画，尝试取消该属性的动画，在无系统异常情况下调用取消接
   *     口也会返回true。<br/> 2. 如果开发者保证传入参数合法且节点正常，返回false时表明发生了系统异常。此时开发者可隔一段时间后再次尝试取消，或通过调用duration为0的
   *     [createAnimation]{@link FrameNode#createAnimation}接口停止属性上的动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cancelAnimations(properties: AnimationPropertyType[]): boolean;

  /**
   * 从节点获取属性值。
   *
   * @param { AnimationPropertyType } property - 动画属性枚举。
   * @returns { double[] } - the property value on the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getNodePropertyValue(property: AnimationPropertyType): double[];

  /**
   * 判断FrameNode是否通过transfer.transferStatic或者transfer.transferDynamic方法创建。
   *
   * @returns { boolean } - 返回ComponentContent是否通过transfer.transferStatic或transfer.transferDynamic方法创建。<br/>true：
   *     ComponentContent通过transfer.transferStatic或transfer.transferDynamic方法创建。<br/>false：ComponentContent不通过
   *     transfer.transferStatic或transfer.transferDynamic方法创建。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isTransferred(): boolean;

  /**
   * 从当前节点的坐标系转换点的坐标
   * 到目标节点的坐标系。
   *
   * @param { NodePosition } position - 当前节点坐标系中的相对坐标。
   * @param { FrameNode } targetNode - 本次坐标转换的目标节点，转换得到的点坐标就是该节点坐标系中的相对坐标。
   * @returns { NodePosition } - 目标节点局部坐标系中的转换坐标。
   * @throws { BusinessError } 100024 - The current FrameNode and the target FrameNode do not have a common ancestor
   *     node.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'targetNode' is invalid: it cannot be disposed."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  convertPosition(position: NodePosition, targetNode: FrameNode): NodePosition;

  /**
   *
   * @param { NodePosition } positionByLocal - 当前节点坐标系中的相对坐标。
   * @returns { NodePosition } - 当前节点所在窗口的坐标系中的转换坐标。
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  convertPositionToWindow(positionByLocal: NodePosition): NodePosition;

  /**
   *
   * @param { NodePosition } positionByWindow - 当前节点所在窗口的坐标系中的相对坐标。
   * @returns { NodePosition } - 当前节点坐标系中的转换坐标。
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  convertPositionFromWindow(positionByWindow: NodePosition): NodePosition;

  /**
   * 获取节点是否处于渲染状态，如果一个节点的对应RenderNode在渲染树上，则处于渲染状态。
   *
   * @returns { boolean } - 节点是否处于渲染状态。<br/>true：处于渲染状态；false：不处于渲染状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isInRenderState(): boolean;

  /**
   * 查询节点是否被挂载到主节点树上。
   *
   * @returns { boolean } - 节点是否被挂载到主节点树上。<br/>true表示节点被挂载到主节点树上，false表示节点没有被挂载到主节点树上。
   * @throws { BusinessError } 100026 - The curent FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isOnMainTree(): boolean;

  /**
   * 创建指定数量的FrameNode对象并返回。
   *
   * @param { UIContext } uiContext - 创建对应节点时所需的UI上下文。
   * @param { int } count - 指定创建节点的数量，取值范围为大于零的整型。若给定值小于等于0或不是整数，则返回空数组。
   *     <br>取值限定为整数。
   * @returns { FrameNode[] } the array of created FrameNode objects.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static createFrameNodes(uiContext: UIContext, count: int): FrameNode[];

  /**
   * 以当前节点为根节点，逐层查找所有子节点，返回第一个匹配指定id的节点。查找顺序为：先查找直接子节点，再查找二级子节点，依此类推，找到后立即返回。
   *
   * .0.0
   *
   * .0.0
   *
   * @param { string } id - 查询的子节点id，为通用属性设置的[组件标识]{@link common}。
   * @returns { FrameNode | null } The first child node with the specified ID, or null if not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * 以当前节点为根节点，查找并返回指定UniqueID（系统分配的节点唯一标识，该标识可通过[getUniqueId]{@link FrameNode#getUniqueId}接口获取）的子节点。
   *
   * 1.如果唯一标识对应的是内置组件，则返回关联的FrameNode。
   * 2.如果该onlyId对应自定义组件：如果该组件已经渲染了内容，则其根节点为
   * 返回，类型为__Common__；如果组件没有渲染的内容，则返回其第一个子项的FrameNode
   * 组件返回。
   * 3.如果不对应任何组件，则返回null。
   *
   * .0.0
   *
   * @param { int } id - 查询的子节点的唯一标识UniqueID。
   *     <br>取值限定为整数。
   * @returns { FrameNode | null } - The FrameNode with the target uniqueId, or null if the frameNode is not existed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getFrameNodeByUniqueId(id: int): FrameNode | null;

  /**
   * 在当前帧触发节点属性更新。
   *
   * 当前节点的属性在构建阶段后被修改，这些改动不会立即生效，而是延迟到下一帧统一处理。
   *
   * 此功能强制当前帧内即时节点更新，确保同步应用渲染效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  invalidateAttributes(): void;

  /**
   * 用于查询当前FrameNode是否为轻量化的FrameNode，轻量化的FrameNode占用的内存更小，但是不支持除了isMinimized以外的任何接口调用。
   *
   * @returns { boolean } - 返回当前FrameNode是否为轻量化的FrameNode，true表示当前FrameNode为轻量化的FrameNode，false表示当前FrameNode不是轻量化的
   *     FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  isMinimized(): boolean;
}

/**
 * TypedFrameNode继承自[FrameNode]{@link FrameNodeOptions}，用于声明具体类型的FrameNode。
 *
 * > **说明：**
 * >
 * > [commonAttribute]{@link FrameNode#commonAttribute}仅在CustomFrameNode上生效，TypedFrameNode上commonAttribute行为未定义。建议使用
 * > [attribute](docroot://reference/apis-arkui/js-apis-arkui-frameNode-static.md#属性)接口而非
 * > [commonAttribute]{@link FrameNode#commonAttribute}接口进行通用属性设置，如node.attribute.backgroundColor(Color.Pink)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class TypedFrameNode<T> extends FrameNode {

  /**
   * 获取FrameNode的实例属性以设置属性。
   *
   * > **说明：**
   * >
   * > [commonAttribute]{@link FrameNode#commonAttribute}仅在CustomFrameNode上生效，TypedFrameNode上commonAttribute行为未定义。建议使用
   * > [attribute](docroot://reference/apis-arkui/js-apis-arkui-frameNode-static.md#属性)接口而非
   * > [commonAttribute]{@link FrameNode#commonAttribute}接口进行通用属性设置，如node.attribute.backgroundColor(Color.Pink)。
   *
   * @returns { T } - 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get attribute(): T;
}

/**
 * 提供用于实现 FrameNode 的方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare namespace typeNode {

  /**
   * 定义Column 类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ColumnFrameNode extends TypedFrameNode<ColumnAttribute> {

    /**
     * 初始化Column类型的FrameNode。
     *
     * @param { ColumnOptions | ColumnOptionsV2 } [options] - Column节点的选项。
     * @returns { ColumnAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ColumnOptions | ColumnOptionsV2): ColumnAttribute;
  }

  /**
   * Define the FrameNode type for Column.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Column = ColumnFrameNode;

  /**
   * 创建Column类型的FrameNode。
   *
   * @param { UIContext } context - 用于创建FrameNode的UI上下文。
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Column } - 返回Column类型的FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createColumnNode(context: UIContext, options?: FrameNodeOptions): Column;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ColumnAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getColumnAttribute(node: FrameNode): ColumnAttribute | undefined;

  /**
   * 定义Row类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RowFrameNode extends TypedFrameNode<RowAttribute> {

    /**
     * 初始化Row类型的FrameNode。
     *
     * @param { RowOptions | RowOptionsV2 } [options] - Row节点的选项。
     * @returns { RowAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: RowOptions | RowOptionsV2): RowAttribute;
  }

  /**
   * Define the FrameNode type for Row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Row = RowFrameNode;

  /**
   * 创建Row类型的FrameNode。
   *
   * @param { UIContext } context - 用于创建FrameNode的UI上下文。
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Row } - 返回 Row 类型的 FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createRowNode(context: UIContext, options?: FrameNodeOptions): Row;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { RowAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getRowAttribute(node: FrameNode): RowAttribute | undefined;

  /**
   * 定义Stack类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class StackFrameNode extends TypedFrameNode<StackAttribute> {

    /**
     * 初始化Stack类型的FrameNode。
     *
     * @param { StackOptions } [options] - Stack节点的选项。
     * @returns { StackAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: StackOptions): StackAttribute;
  }

  /**
   * Define the FrameNode type for Stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Stack = StackFrameNode;

  /**
   * 创建Stack 类型的FrameNode。
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文。
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Stack } - 返回 Stack 类型的 FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createStackNode(context: UIContext, options?: FrameNodeOptions): Stack;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { StackAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getStackAttribute(node: FrameNode): StackAttribute | undefined;

  /**
   * 定义GridRow类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridRowFrameNode extends TypedFrameNode<GridRowAttribute> {

    /**
     * 初始化GridRow类型的FrameNode。
     *
     * @param { GridRowOptions } [options] - GridRow节点的选项。
     * @returns { GridRowAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: GridRowOptions): GridRowAttribute;
  }

  /**
   * Define the FrameNode type for GridRow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type GridRow = GridRowFrameNode;

  /**
   * Create a FrameNode of GridRow type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { GridRow } - Return GridRow type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function createGridRowNode(context: UIContext): GridRow;

  /**
   * 定义GridCol类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridColFrameNode extends TypedFrameNode<GridColAttribute> {

    /**
     * 初始化GridCol类型的FrameNode。
     *
     * @param { GridColOptions } [options] - GridCol节点的选项。
     * @returns { GridColAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: GridColOptions): GridColAttribute;
  }

  /**
   * Define the FrameNode type for GridCol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type GridCol = GridColFrameNode;

  /**
   * Create a FrameNode of GridCol type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { GridCol } - Return GridCol type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createGridColNode(context: UIContext): GridCol;

  /**
   * 定义Flex类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class FlexFrameNode extends TypedFrameNode<FlexAttribute> {

    /**
     * 初始化Flex类型的FrameNode。
     *
     * @param { FlexOptions } [value] - Flex节点的选项。
     * @returns { FlexAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: FlexOptions): FlexAttribute;
  }

  /**
   * Define the FrameNode type for Flex.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Flex = FlexFrameNode;

  /**
   * 创建 Flex 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Flex } - 返回 Flex 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createFlexNode(context: UIContext, options?: FrameNodeOptions): Flex;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { FlexAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getFlexAttribute(node: FrameNode): FlexAttribute | undefined;

  /**
   * 定义RelativeContainer类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RelativeContainerFrameNode extends TypedFrameNode<RelativeContainerAttribute> {

    /**
     * 初始化RelativeContainer类型的FrameNode。
     *
     * @returns { RelativeContainerAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): RelativeContainerAttribute;
  }

  /**
   * Define the FrameNode type for RelativeContainer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type RelativeContainer = RelativeContainerFrameNode;

  /**
   * 创建 RelativeContainer 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { RelativeContainer } - 返回 RelativeContainer 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createRelativeContainerNode(context: UIContext, options?: FrameNodeOptions): RelativeContainer;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { RelativeContainerAttribute | undefined } - Return the attribute instance of FrameNode, and return
   *     undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getRelativeContainerAttribute(node: FrameNode): RelativeContainerAttribute | undefined;

  /**
   * 定义Divider类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class DividerFrameNode extends TypedFrameNode<DividerAttribute> {

    /**
     * 初始化Divider类型的FrameNode。
     *
     * @returns { DividerAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): DividerAttribute;
  }

  /**
   * Define the FrameNode type for Divider.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Divider = DividerFrameNode;

  /**
   * Create a FrameNode of Divider type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Divider } - Return Divider type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createDividerNode(context: UIContext): Divider;

  /**
   * 定义LoadingProgress类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class LoadingProgressFrameNode extends TypedFrameNode<LoadingProgressAttribute> {

    /**
     * 初始化LoadingProgress类型的FrameNode。
     *
     * @returns { LoadingProgressAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): LoadingProgressAttribute;
  }

  /**
   * Define the FrameNode type for LoadingProgress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type LoadingProgress = LoadingProgressFrameNode;

  /**
   * 创建 LoadingProgress 类型的 FrameNode。
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文。
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { LoadingProgress } - 返回 LoadingProgress 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createLoadingProgressNode(context: UIContext, options?: FrameNodeOptions): LoadingProgress;

  /**
   * 获取FrameNode的属性实例来设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @returns { LoadingProgressAttribute | undefined } - Return the attribute instance of FrameNode,
   *     and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getLoadingProgressAttribute(node: FrameNode): LoadingProgressAttribute | undefined;

  /**
   * 定义Blank类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class BlankFrameNode extends TypedFrameNode<BlankAttribute> {

    /**
     * 初始化Blank类型的FrameNode。
     *
     * @param { double | string } [min] - Blank节点的选项。
     * @returns { BlankAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(min?: double | string): BlankAttribute;
  }

  /**
   * Define the FrameNode type for Blank.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Blank = BlankFrameNode;

  /**
   * Create a FrameNode of Blank type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Blank } - Return Blank type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createBlankNode(context: UIContext): Blank;

  /**
   * 定义Image类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ImageFrameNode extends TypedFrameNode<ImageAttribute> {

    /**
     * 初始化Image类型的FrameNode。
     *
     * @param { image.PixelMap | ResourceStr | DrawableDescriptor } src
     * @returns { ImageAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(src: image.PixelMap | ResourceStr | DrawableDescriptor): ImageAttribute;

    /**
     * 初始化Image类型的FrameNode。
     *
     * @param { image.PixelMap | ResourceStr | DrawableDescriptor | ImageContent } src
     * @returns { ImageAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(src: image.PixelMap | ResourceStr | DrawableDescriptor | ImageContent): ImageAttribute;

    /**
     * 初始化Image类型的FrameNode。
     *
     * @param { image.PixelMap | ResourceStr | DrawableDescriptor } src
     * @param { ImageAIOptions } value
     * @returns { ImageAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(src: image.PixelMap | ResourceStr | DrawableDescriptor, value: ImageAIOptions): ImageAttribute;
  }

  /**
   * Define the FrameNode type for Image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Image = ImageFrameNode;

  /**
   * 创建 Image 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Image } - 返回 Image 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createImageNode(context: UIContext, options?: FrameNodeOptions): Image;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ImageAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getImageAttribute(node: FrameNode): ImageAttribute | undefined;

  /**
   * 定义List类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ListFrameNode extends TypedFrameNode<ListAttribute> {

    /**
     * 初始化List类型的FrameNode。
     *
     * @param { ListOptions } [options] - list节点的选项。
     * @returns { ListAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ListOptions): ListAttribute;
  }

  /**
   * Define the FrameNode type for List.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type List = ListFrameNode;

  /**
   * 创建 List 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { List } - 返回 List 类型的 FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createListNode(context: UIContext, options?: FrameNodeOptions): List;

  /**
   * 获取属性实例用于设置属性
   *
   * @param { FrameNode } node - 目标FrameNode
   * @returns { ListAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getListAttribute(node: FrameNode): ListAttribute | undefined;

  /**
   * 获取List节点的事件实例。
   *
   * @param { FrameNode } node - 目标FrameNode
   * @returns { UIListEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getListEvent(node: FrameNode): UIListEvent | undefined;

  /**
   * 绑定FrameNode的控制器。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @param { Scroller } controller - the controller which is bind to 目标FrameNode。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function bindListController(node: FrameNode, controller: Scroller): void;

  /**
   * 定义ListItem类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ListItemFrameNode extends TypedFrameNode<ListItemAttribute> {

    /**
     * 初始化ListItem类型的FrameNode。
     *
     * @param { ListItemOptions } [options] - list节点的选项。
     * @returns { ListItemAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ListItemOptions): ListItemAttribute;
  }

  /**
   * Define the FrameNode type for ListItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type ListItem = ListItemFrameNode;

  /**
   * 创建 ListItem 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { ListItem } - 返回 ListItem 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createListItemNode(context: UIContext, options?: FrameNodeOptions): ListItem;

  /**
   * 获取FrameNode的属性实例用于属性设置
   *
   * @param { FrameNode } node - 目标FrameNode
   * @returns { ListItemAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getListItemAttribute(node: FrameNode): ListItemAttribute | undefined;

  /**
   * 定义ListItemGroup类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ListItemGroupFrameNode extends TypedFrameNode<ListItemGroupAttribute> {

    /**
     * 初始化ListItemGroup类型的FrameNode。
     *
     * @param { ListItemGroupOptions } [options] - list item group 节点的选项。
     * @returns { ListItemGroupAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ListItemGroupOptions): ListItemGroupAttribute;
  }

  /**
   * Define the FrameNode type for ListItemGroup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type ListItemGroup = ListItemGroupFrameNode;

  /**
   * 创建 ListItemGroup 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { ListItemGroup } - 返回 ListItemGroup 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createListItemGroupNode(context: UIContext, options?: FrameNodeOptions): ListItemGroup;

  /**
   * 从FrameNode中获取属性实例用于属性设置。
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { ListItemGroupAttribute | undefined } - Return the attribute instance of FrameNode,
   *     and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getListItemGroupAttribute(node: FrameNode): ListItemGroupAttribute | undefined;

  /**
   * 定义Progress类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ProgressFrameNode extends TypedFrameNode<ProgressAttribute> {

    /**
     * 初始化Progress类型的FrameNode。
     *
     * @param { ProgressOptions } value
     * @returns { ProgressAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: ProgressOptions): ProgressAttribute;
  }

  /**
   * Define the FrameNode type for Progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Progress = ProgressFrameNode;

  /**
   * 创建 Progress 类型的 FrameNode。
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文。
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Progress } - 返回 Progress 类型的 FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createProgressNode(context: UIContext, options?: FrameNodeOptions): Progress;

  /**
   * 获取FrameNode的属性实例来设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @returns { ProgressAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getProgressAttribute(node: FrameNode): ProgressAttribute | undefined;

  /**
   * 定义Scroll类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ScrollFrameNode extends TypedFrameNode<ScrollAttribute> {

    /**
     * 初始化Scroll类型的FrameNode。
     *
     * @param { Scroller } [scroller] - scroll的控制器。
     * @returns { ScrollAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(scroller?: Scroller): ScrollAttribute;
  }

  /**
   * Define the FrameNode type for Scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Scroll = ScrollFrameNode;

  /**
   * 创建 Scroll 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Scroll } - 返回 Scroll 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createScrollNode(context: UIContext, options?: FrameNodeOptions): Scroll;

  /**
   * 绑定FrameNode的控制器。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @param { Scroller } controller - the controller which is bind to 目标FrameNode。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function bindScrollController(node: FrameNode, controller: Scroller): void;

  /**
   * 获取FrameNode属性实例用于属性设置
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { ScrollAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getScrollAttribute(node: FrameNode): ScrollAttribute | undefined;

  /**
   * 获取Scroll节点的事件实例
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { UIScrollEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getScrollEvent(node: FrameNode): UIScrollEvent | undefined;

  /**
   * 定义TextClock类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextClockFrameNode extends TypedFrameNode<TextClockAttribute> {

    /**
     * 初始化TextClock类型的FrameNode。
     *
     * @param { TextClockOptions } [options]
     * @returns { TextClockAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: TextClockOptions): TextClockAttribute;
  }

  /**
   * Define the FrameNode type for TextClock.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type TextClock = TextClockFrameNode;

  /**
   * Create a FrameNode of TextClock type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { TextClock } - Return TextClock type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createTextClockNode(context: UIContext): TextClock;

  /**
   * 定义TextTimer类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextTimerFrameNode extends TypedFrameNode<TextTimerAttribute> {

    /**
     * 初始化TextTimer类型的FrameNode。
     *
     * @param { TextTimerOptions } [options]
     * @returns { TextTimerAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: TextTimerOptions): TextTimerAttribute;
  }

  /**
   * Define the FrameNode type for TextTimer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type TextTimer = TextTimerFrameNode;

  /**
   * Create a FrameNode of TextTimer type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { TextTimer } - Return TextTimer type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createTextTimerNode(context: UIContext): TextTimer;

  /**
   * 定义Grid类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridFrameNode extends TypedFrameNode<GridAttribute> {

    /**
     * 初始化Grid类型的FrameNode。
     *
     * @param { Scroller } [scroller] - grid的控制器。
     * @param { GridLayoutOptions } [layoutOptions] - Grid布局选项。
     * @returns { GridAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(scroller?: Scroller, layoutOptions?: GridLayoutOptions): GridAttribute;
  }

  /**
   * Define the FrameNode type for Grid.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Grid = GridFrameNode;

  /**
   * 创建 Grid 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文。
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Grid } - 返回Grid类型的 FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createGridNode(context: UIContext, options?: FrameNodeOptions): Grid;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { GridAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getGridAttribute(node: FrameNode): GridAttribute | undefined;

  /**
   * Get the event instance of Grid node.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { UIGridEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getGridEvent(node: FrameNode): UIGridEvent | undefined;

  /**
   * 绑定FrameNode的控制器。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @param { Scroller } controller - the controller which is bind to 目标FrameNode。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function bindGridController(node: FrameNode, controller: Scroller): void;

  /**
   * 定义GridItem类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridItemFrameNode extends TypedFrameNode<GridItemAttribute> {

    /**
     * 初始化GridItem类型的FrameNode。
     *
     * @param { GridItemOptions } [options] - Grid节点的选项。
     * @returns { GridItemAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: GridItemOptions): GridItemAttribute;
  }

  /**
   * Define the FrameNode type for GridItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type GridItem = GridItemFrameNode;

  /**
   * 创建 GridItem 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { GridItem } - 返回 GridItem 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createGridItemNode(context: UIContext, options?: FrameNodeOptions): GridItem;

  /**
   * 获取FrameNode的属性实例用于属性设置。
   *
   * @param { FrameNode } node - 目标 FrameNode
   * @returns { GridItemAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getGridItemAttribute(node: FrameNode): GridItemAttribute | undefined;

  /**
   * 定义WaterFlow类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class WaterFlowFrameNode extends TypedFrameNode<WaterFlowAttribute> {

    /**
     * 初始化WaterFlow类型的FrameNode。
     *
     * @param { WaterFlowOptions } [options] - WaterFlow节点的选项。
     * @returns { WaterFlowAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: WaterFlowOptions): WaterFlowAttribute;
  }

  /**
   * Define the FrameNode type for WaterFlow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type WaterFlow = WaterFlowFrameNode;

  /**
   * 创建 WaterFlow 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { WaterFlow } - 返回 WaterFlow 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createWaterFlowNode(context: UIContext, options?: FrameNodeOptions): WaterFlow;

  /**
   * 从FrameNode中获取属性实例用于属性设置。
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { WaterFlowAttribute | undefined } - Return the attribute instance of FrameNode,
   *     and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getWaterFlowAttribute(node: FrameNode): WaterFlowAttribute | undefined;

  /**
   * 从Scroll节点中获取事件实例
   *
   * @param { FrameNode } node - 目标 FrameNode
   * @returns { UIWaterFlowEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getWaterFlowEvent(node: FrameNode): UIWaterFlowEvent | undefined;

  /**
   * 绑定FrameNode的控制器。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @param { Scroller } controller - the controller which is bind to 目标FrameNode。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function bindWaterFlowController(node: FrameNode, controller: Scroller): void;

  /**
   * 定义FlowItem类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class FlowItemFrameNode extends TypedFrameNode<FlowItemAttribute> {

    /**
     * 初始化FlowItem类型的FrameNode。
     *
     * @returns { FlowItemAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): FlowItemAttribute;
  }

  /**
   * Define the FrameNode type for FlowItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type FlowItem = FlowItemFrameNode;

  /**
   * 创建 FlowItem 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { FlowItem } - 返回 FlowItem 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createFlowItemNode(context: UIContext, options?: FrameNodeOptions): FlowItem;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { FlowItemAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getFlowItemAttribute(node: FrameNode): FlowItemAttribute | undefined;

  /**
   * 定义Text类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextFrameNode extends TypedFrameNode<TextAttribute> {

    /**
     * 初始化Text类型的FrameNode。
     *
     * @param { string | Resource } [content]
     * @param { TextOptions } [value]
     * @returns { TextAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(content?: string | Resource, value?: TextOptions): TextAttribute;
  }

  /**
   * Define the FrameNode type for Text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Text = TextFrameNode;

  /**
   * 创建 Text 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Text } - 返回 Text 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createTextNode(context: UIContext, options?: FrameNodeOptions): Text;

  /**
   * 获取FrameNode的属性实例来设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @returns { TextAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function getTextAttribute(node: FrameNode): TextAttribute | undefined;

  /**
   * 绑定Text节点的控制器。
   *
   * @param { FrameNode } node - 目标节点。
   * @param { TextController } controller - the controller which is bind to 目标节点。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindTextController(node: FrameNode, controller: TextController): void;

  /**
   * 定义Search类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SearchFrameNode extends TypedFrameNode<SearchAttribute> {

    /**
     * 初始化Search类型的FrameNode。
     *
     * @param { SearchOptions } [value]
     * @returns { SearchAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: SearchOptions): SearchAttribute;
  }

  /**
   * Define the FrameNode type for Search.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Search = SearchFrameNode;

  /**
   * Create a FrameNode of Search type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Search } - Return Search type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createSearchNode(context: UIContext): Search;

  /**
   * 定义TextInput类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextInputFrameNode extends TypedFrameNode<TextInputAttribute> {

    /**
     * 初始化TextInput类型的FrameNode。
     *
     * @param { TextInputOptions } [value]
     * @returns { TextInputAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: TextInputOptions): TextInputAttribute;
  }

  /**
   * Define the FrameNode type for TextInput.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type TextInput = TextInputFrameNode;

  /**
   *  返回 TextInput 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { TextInput } - 返回 TextInput 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createTextInputNode(context: UIContext, options?: FrameNodeOptions): TextInput;

  /**
   * 获取FrameNode的属性实例来设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @returns { TextInputAttribute | undefined } - Return the attribute instance of FrameNode, and
   *     return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function getTextInputAttribute(node: FrameNode): TextInputAttribute | undefined;

  /**
   * 绑定TextInput节点的控制器。
   *
   * @param { FrameNode } node - 目标节点。
   * @param { TextInputController } controller - the controller which is bind to 目标节点。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindTextInputController(node: FrameNode, controller: TextInputController): void;

  /**
   * 定义TextArea类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextAreaFrameNode extends TypedFrameNode<TextAreaAttribute> {

    /**
     * 初始化TextArea类型的FrameNode。
     *
     * @param { TextAreaOptions } [value]
     * @returns { TextAreaAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: TextAreaOptions): TextAreaAttribute;
  }

  /**
   * Define the FrameNode type for TextArea.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type TextArea = TextAreaFrameNode;

  /**
   * 创建 TextArea 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { TextArea } - 返回 TextArea 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createTextAreaNode(context: UIContext, options?: FrameNodeOptions): TextArea;

  /**
   * 获取FrameNode的属性实例来设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode。
   * @returns { TextAreaAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function getTextAreaAttribute(node: FrameNode): TextAreaAttribute | undefined;

  /**
   * 绑定TextArea节点的控制器。
   *
   * @param { FrameNode } node - 目标节点。
   * @param { TextAreaController } controller - the controller which is bind to 目标节点。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindTextAreaController(node: FrameNode, controller: TextAreaController): void;

  /**
   * 定义SymbolGlyph类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SymbolGlyphFrameNode extends TypedFrameNode<SymbolGlyphAttribute> {

    /**
     * 初始化SymbolGlyph类型的FrameNode。
     *
     * @param { Resource } [value]
     * @returns { SymbolGlyphAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: Resource): SymbolGlyphAttribute;
  }

  /**
   * Define the FrameNode type for SymbolGlyph.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type SymbolGlyph = SymbolGlyphFrameNode;

  /**
   * Create a FrameNode of SymbolGlyph type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { SymbolGlyph } - Return SymbolGlyph type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createSymbolGlyphNode(context: UIContext): SymbolGlyph;

  /**
   * 定义QRCode类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class QRCodeFrameNode extends TypedFrameNode<QRCodeAttribute> {

    /**
     * 初始化QRCode类型的FrameNode。
     *
     * @param { string } value
     * @returns { QRCodeAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: string): QRCodeAttribute;
  }

  /**
   * Define the FrameNode type for QRCode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type QRCode = QRCodeFrameNode;

  /**
   * Create a FrameNode of QRCode type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { QRCode } - Return QRCode type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createQRCodeNode(context: UIContext): QRCode;

  /**
   * 定义Badge类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class BadgeFrameNode extends TypedFrameNode<BadgeAttribute> {

    /**
     * 初始化Badge类型的FrameNode。
     *
     * @param { BadgeParamWithNumber } value
     * @returns { BadgeAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: BadgeParamWithNumber): BadgeAttribute;

    /**
     * 初始化Badge类型的FrameNode。
     *
     * @param { BadgeParamWithString } value
     * @returns { BadgeAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: BadgeParamWithString): BadgeAttribute;
  }

  /**
   * Define the FrameNode type for Badge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Badge = BadgeFrameNode;

  /**
   * Create a FrameNode of Badge type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Badge } - Return Badge type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createBadgeNode(context: UIContext): Badge;

  /**
   * 定义Marquee类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class MarqueeFrameNode extends TypedFrameNode<MarqueeAttribute> {

    /**
     * 初始化Marquee类型的FrameNode。
     *
     * @param { MarqueeOptions } value
     * @returns { MarqueeAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: MarqueeOptions): MarqueeAttribute;
  }

  /**
   * Define the FrameNode type for Marquee.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Marquee = MarqueeFrameNode;

  /**
   * Create a FrameNode of Marquee type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Marquee } - Return Marquee type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createMarqueeNode(context: UIContext): Marquee;

  /**
   * 定义Swiper类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SwiperFrameNode extends TypedFrameNode<SwiperAttribute> {

    /**
     * 初始化Swiper类型的FrameNode。
     *
     * @param { SwiperController } [controller] - swiper的控制器。
     * @returns { SwiperAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(controller?: SwiperController): SwiperAttribute;
  }

  /**
   * Define the FrameNode type for Swiper.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Swiper = SwiperFrameNode;

  /**
   * 创建 Swiper 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Swiper } - 返回 Swiper 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createSwiperNode(context: UIContext, options?: FrameNodeOptions): Swiper;

  /**
   * 获取Swiper的FrameNode的属性实例来设置属性。
   *
   * @param { FrameNode } node - 目标Swiper节点
   * @returns { SwiperAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getSwiperAttribute(node: FrameNode): SwiperAttribute | undefined;

  /**
   * 绑定Swiper节点的控制器。
   *
   * @param { FrameNode } node - 目标节点。
   * @param { SwiperController } controller - the controller which is bind to 目标节点。
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function bindSwiperController(node: FrameNode, controller: SwiperController): void;

  /**
   * 定义XComponent 类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class XComponentFrameNode extends TypedFrameNode<XComponentAttribute> {

    /**
     * 初始化XComponent类型的FrameNode。
     *
     * @param { XComponentParameters } value - xcomponent节点的选项。
     * @returns { XComponentAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: XComponentParameters): XComponentAttribute;

    /**
     * 初始化XComponent类型的FrameNode。
     *
     * @param { XComponentOptions } value - xcomponent节点的选项。
     * @returns { XComponentAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: XComponentOptions): XComponentAttribute;

    /**
     * 初始化XComponent类型的FrameNode。
     *
     * @param { NativeXComponentParameters } params - 用于原生开发的 XComponent 的构造参数。
     * @returns { XComponentAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(params: NativeXComponentParameters): XComponentAttribute;
  }

  /**
   * Define the FrameNode type for XComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type XComponent = XComponentFrameNode;

  /**
   * 创建 XComponent 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { XComponent } - 返回XComponent类型的FrameNode。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createXComponentNodeDefault(context: UIContext, options?: FrameNodeOptions): XComponent;

  /**
   * 创建 XComponent 类型的 FrameNode（支持 XComponent 组件选项）
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { XComponentOptions } value - XComponent 组件选项
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { XComponent } - Return XComponent type FrameNode. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createXComponentNodeWithOptions(
    context: UIContext, value: XComponentOptions, options?: FrameNodeOptions): XComponent;

  /**
   * 创建 XComponent 类型的 FrameNode（支持原生开发参数）
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { NativeXComponentParameters } parameters - 原生开发初始化参数
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 26.0.0]
   * @returns { XComponent } - 返回 XComponent 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createXComponentNodeWithNativeParameters(
    context: UIContext, parameters: NativeXComponentParameters, options?: FrameNodeOptions): XComponent;

  /**
   * Get the attribute instance of FrameNode which type is XComponent to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { XComponentAttribute | undefined } - Return the attribute instance of FrameNode,
   *     and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getXComponentAttribute(node: FrameNode): XComponentAttribute | undefined;

  /**
   * 定义Button类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ButtonFrameNode extends TypedFrameNode<ButtonAttribute> {

    /**
     * 初始化Button类型的FrameNode。
     *
     * @returns { ButtonAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): ButtonAttribute;

    /**
     * 初始化Button类型的FrameNode。
     *
     * @param { ButtonOptions } value
     * @returns { ButtonAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: ButtonOptions): ButtonAttribute;

    /**
     * 初始化Button类型的FrameNode。
     *
     * @param { ResourceStr } label
     * @param { ButtonOptions } [options]
     * @returns { ButtonAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(label: ResourceStr, options?: ButtonOptions): ButtonAttribute;
  }

  /**
   * Define the FrameNode type for Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Button = ButtonFrameNode;

  /**
   * 创建 Button 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Button } - 返回 Button 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createButtonNode(context: UIContext, options?: FrameNodeOptions): Button;

  /**
   * 获取FrameNode的属性实例以设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode
   * @returns { ButtonAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getButtonAttribute(node: FrameNode): ButtonAttribute | undefined;

  /**
   * 定义Checkbox类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class CheckboxFrameNode extends TypedFrameNode<CheckboxAttribute> {

    /**
     * 初始化Checkbox类型的FrameNode。
     *
     * @param { CheckboxOptions } [options]
     * @returns { CheckboxAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: CheckboxOptions): CheckboxAttribute;
  }

  /**
   * Define the FrameNode type for Checkbox.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Checkbox = CheckboxFrameNode;

  /**
   * 创建 Checkbox 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Checkbox } - 返回 Checkbox 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createCheckboxNode(context: UIContext, options?: FrameNodeOptions): Checkbox;

  /**
   * 获取FrameNode的属性实例以设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { CheckboxAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getCheckboxAttribute(node: FrameNode): CheckboxAttribute | undefined;

  /**
   * 定义CheckboxGroup类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class CheckboxGroupFrameNode extends TypedFrameNode<CheckboxGroupAttribute> {

    /**
     * 初始化CheckboxGroup类型的FrameNode。
     *
     * @param { CheckboxGroupOptions } [options]
     * @returns { CheckboxGroupAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: CheckboxGroupOptions): CheckboxGroupAttribute;
  }

  /**
   * Define the FrameNode type for CheckboxGroup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type CheckboxGroup = CheckboxGroupFrameNode;

  /**
   * 创建 CheckboxGroup 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { CheckboxGroup } - 返回 CheckboxGroup 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createCheckboxGroupNode(context: UIContext, options?: FrameNodeOptions): CheckboxGroup;

  /**
   * 定义Radio类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RadioFrameNode extends TypedFrameNode<RadioAttribute> {

    /**
     * 初始化Radio类型的FrameNode。
     *
     * @param { RadioOptions } value
     * @returns { RadioAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: RadioOptions): RadioAttribute;
  }

  /**
   * Define the FrameNode type for Radio.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Radio = RadioFrameNode;

  /**
   * 创建 Radio 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Radio } - 返回 Radio 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createRadioNode(context: UIContext, options?: FrameNodeOptions): Radio;

  /**
   * 获取FrameNode的属性实例以设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { RadioAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getRadioAttribute(node: FrameNode): RadioAttribute | undefined;

  /**
   * 定义Rating类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RatingFrameNode extends TypedFrameNode<RatingAttribute> {

    /**
     * 初始化Rating类型的FrameNode。
     *
     * @param { RatingOptions } [options]
     * @returns { RatingAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: RatingOptions): RatingAttribute;
  }

  /**
   * Define the FrameNode type for Rating.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Rating = RatingFrameNode;

  /**
   * Create a FrameNode of Rating type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Rating } - Return Rating type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createRatingNode(context: UIContext): Rating;

  /**
   * 定义Select类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SelectFrameNode extends TypedFrameNode<SelectAttribute> {

    /**
     * 初始化Select类型的FrameNode。
     *
     * @param { Array<SelectOption> } value
     * @returns { SelectAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: Array<SelectOption>): SelectAttribute;
  }

  /**
   * Define the FrameNode type for Select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Select = SelectFrameNode;

  /**
   * Create a FrameNode of Select type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Select } - Return Select type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createSelectNode(context: UIContext): Select;

  /**
   * 定义Slider类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SliderFrameNode extends TypedFrameNode<SliderAttribute> {

    /**
     * 初始化Slider类型的FrameNode。
     *
     * @param { SliderOptions } [options]
     * @returns { SliderAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: SliderOptions): SliderAttribute;
  }

  /**
   * Define the FrameNode type for Slider.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Slider = SliderFrameNode;

  /**
   * 创建 Slider 类型的 FrameNode
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation. [since 24]
   * @returns { Slider } - 返回 Slider 类型的 FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createSliderNode(context: UIContext, options?: FrameNodeOptions): Slider;

  /**
   * 获取FrameNode的属性实例以设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { SliderAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getSliderAttribute(node: FrameNode): SliderAttribute | undefined;

  /**
   * 定义Toggle类型的FrameNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ToggleFrameNode extends TypedFrameNode<ToggleAttribute> {

    /**
     * 初始化Toggle类型的FrameNode。
     *
     * @param { ToggleOptions } value
     * @returns { ToggleAttribute }
          * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: ToggleOptions): ToggleAttribute;
  }

  /**
   * Define the FrameNode type for Toggle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type Toggle = ToggleFrameNode;

  /**
   * 创建 Toggle 类型的 FrameNode。
   *
   * @param { UIContext } context - 用于创建 FrameNode 的 UI 上下文。
   * @param { ToggleOptions } [options] - Toggle 组件选项。
   * @param { FrameNodeOptions } [frameNodeOptions] - FrameNode创建配置选项。【since24】。
   * @returns { Toggle } - Return Toggle type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function createToggleNode(
    context: UIContext, options?: ToggleOptions, frameNodeOptions?: FrameNodeOptions): Toggle;

  /**
   * 获取FrameNode的属性实例以设置属性。
   *
   * @param { FrameNode } node - 目标FrameNode.
   * @returns { ToggleAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function getToggleAttribute(node: FrameNode): ToggleAttribute | undefined;
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
 * @since 23 static
 */
export declare class NodeAdapter {

  /**
   * NodeAdapter的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 立即释放当前的NodeAdapter。如果是已绑定的状态，会先进行解绑操作，再释放当前的NodeAdapter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dispose(): void;

  /**
   * 查询当前NodeAdapter对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } - 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isDisposed(): boolean;

  /**
   *
   * @param { int } count - 数据节点总数。取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set totalNodeCount(count: int);

  /**
   * Get the total number of node count.
   *
   * @returns { int } - Return the total number of node count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get totalNodeCount(): int;

  /**
   * 重新加载全部数据操作。实际调用了LazyForEach中的[OnDataReloaded]{@link DataChangeListener.onDataReloaded}接口通知组件重新加载所有数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reloadAllItems(): void;

  /**
   *
   * @param { int } start - 重新加载的节点开始索引值。<br/>取值范围：[0, +∞)
   * @param { int } count - 重新加载数据节点的数量。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reloadItem(start: int, count: int): void;

  /**
   *
   * @param { int } start - 删除的节点开始索引值。取值范围：[0, +∞)
   * @param { int } count - 删除数据节点的数量。取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeItem(start: int, count: int): void;

  /**
   *
   * @param { int } start - 新增的节点开始索引值。取值范围：[0, +∞)
   * @param { int } count - 新增数据节点的数量。取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertItem(start: int, count: int): void;

  /**
   *
   * @param { int } from - 数据移动的原始索引值。取值范围：[0, +∞)
   * @param { int } to - 数据移动的目的索引值。取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveItem(from: int, to: int): void;

  /**
   * 获取所有有效数据。有效节点数据包括显示在屏幕上的节点以及预加载的节点。其中预加载节点的数量可依照LazyForEach的
   * [使用限制](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md#使用限制)，调整父容器的cachedCount属性进行设置。
   *
   * @returns { Array<FrameNode> } - FrameNode数据节点集合。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getAllAvailableItems(): Array<FrameNode>;

  /**
   *
   * @param { FrameNode } target - 绑定NodeAdapter的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onAttachToNode(target: FrameNode): void;

  /**
   * This callback will be triggered when the binding is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDetachFromNode(): void;

  /**
   *
   * @param { int } index - 加载节点索引值。取值范围：[0, +∞)
   * @returns { int } - 返回开发者自定义生成的Id，需要开发者自行保证Id的唯一性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onGetChildId(index: int): int;

  /**
   *
   * @param { int } index - 加载节点索引值。取值范围：[0, +∞)
   * @returns { FrameNode } - 返回开发者创建的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCreateChild(index: int): FrameNode;

  /**
   *
   * @param { int } id - 即将销毁的子节点id。
   * @param { FrameNode } node - 即将销毁的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDisposeChild(id: int, node: FrameNode): void;

  /**
   *
   * @param { int } id - 复用节点的id。
   * @param { FrameNode } node - 被复用的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onUpdateChild(id: int, node: FrameNode): void;

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
   * @since 23 static
   */
  static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean;

  /**
   * 解除绑定操作，解除FrameNode节点绑定的NodeAdapter。
   *
   * @param { FrameNode } node - 要解除绑定的FrameNode节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static detachNodeAdapter(node: FrameNode): void;
}