'use static';
/*
* Copyright (C) 2025-2026 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
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
import { ComponentV2 } from './arkui/component/customComponent';
import { ResourceStr } from './arkui/component/units';
import { Param } from './arkui/stateManagement/decorator';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder } from './arkui/component/builder';
/**
 * 节点事件回调函数类型。
 *
 * @param { CallbackParamV2 } callbackParam - The result of event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnChangedCallback = (callbackParam: CallbackParamV2) => void;
/**
 * 树视图组件的监听器，可以将此对象绑定至树视图组件，然后通过它监听树视图的节点的变化，同一个树视图监听器不可以控制多个树视图组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TreeListenerV2 {
  /**
     * 注册节点点击事件监听，持续监听节点点击事件。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeClick(callback: OnChangedCallback): void;

  /**
     * 注册节点点击事件监听，监听一次后自动销毁。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onceNodeClick(callback: OnChangedCallback): void;

  /**
     * 取消节点点击事件监听。使用callback回调。
     *
   * @param { OnChangedCallback } [callback]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offNodeClick(callback?: OnChangedCallback): void;

  /**
     * 注册节点添加事件监听，持续监听节点添加事件。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeAdd(callback: OnChangedCallback): void;

  /**
     * 注册节点添加事件监听，监听一次后自动销毁。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onceNodeAdd(callback: OnChangedCallback): void;

  /**
     * 取消节点添加事件监听。使用callback回调。
     *
   * @param { OnChangedCallback } [callback]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offNodeAdd(callback?: OnChangedCallback): void;

  /**
     * 注册节点删除事件监听，持续监听节点删除事件。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeDelete(callback: OnChangedCallback): void;

  /**
     * 注册节点删除事件监听，监听一次后自动销毁。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onceNodeDelete(callback: OnChangedCallback): void;

  /**
     * 取消节点删除事件监听。使用callback回调。
     *
   * @param { OnChangedCallback } [callback]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offNodeDelete(callback?: OnChangedCallback): void;

  /**
     * 注册节点修改事件监听，持续监听节点修改事件。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeModify(callback: OnChangedCallback): void;

  /**
     * 注册节点修改事件监听，监听一次后自动销毁。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onceNodeModify(callback: OnChangedCallback): void;

  /**
     * 取消节点修改事件监听。使用callback回调。
     *
   * @param { OnChangedCallback } [callback]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offNodeModify(callback?: OnChangedCallback): void;

  /**
     * 注册节点移动事件监听，持续监听节点移动事件。节点移动通过拖拽操作触发。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeMove(callback: OnChangedCallback): void;

  /**
     * 注册节点移动事件监听，监听一次后自动销毁。使用callback回调。
     *
   * @param { OnChangedCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onceNodeMove(callback: OnChangedCallback): void;

  /**
     * 取消节点移动事件监听。使用callback回调。
     *
   * @param { OnChangedCallback } [callback]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offNodeMove(callback?: OnChangedCallback): void;
}

/**
 * 树视图组件的监听管理器，可以将此对象绑定至树视图组件，然后通过它管理树视图监听器的变化，同一个监听管理器不可以控制多个树视图组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TreeListenerManagerV2 {
  /**
     * 获取树视图组件的监听管理器单例对象。
     *
   * @returns { TreeListenerManagerV2 } - 返回获取到的树视图组件的监听管理器单例对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static getInstance(): TreeListenerManagerV2;
  /**
     * 获取树视图监听器实例。
     *
   * @returns { TreeListenerV2 } - 返回获取到的树视图监听器实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getTreeListener(): TreeListenerV2;
}

/**
 * 树视图V2组件。树视图作为一种分层显示的列表，适合显示嵌套结构。拥有父列表项和子列表项，可展开或折叠。
 * 
 * 用于效率型应用，如备忘录、电子邮件、图库中的侧边导航栏。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制树视图的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 如果TreeViewV2设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链
 * > 会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到TreeViewV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议TreeViewV2设置通用
 * > 属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct TreeViewV2 {
  /**
     * 树视图节点控制器。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  treeControllerV2: TreeControllerV2;

  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}

/**
 * 节点回调参数接口，用于传递节点事件回调的参数信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface CallbackParamV2 {
  /**
     * 返回当前子节点id。
     * 
     * 取值范围：大于等于0。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  currentNodeId: int;
  /**
     * 返回当前父节点id。
     * 
     * 取值范围：大于等于-1。
     * 
     * 默认值：-1
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parentNodeId?: int;
  /**
     * 返回子索引。
     * 
     * 取值范围：大于等于-1。
     * 
     * 默认值：-1
     * 
     * 仅在节点移动事件中有效，表示移动后的位置索引。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  childIndex?: int;
}
/**
 * 容器回调函数类型，用于定义绑定在树节点上的子组件回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnContainerCallback = () => void;
/**
 * 节点参数接口，用于配置树节点的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface NodeParamV2 {
  /**
     * 父节点Id。
     * 
     * 取值范围：大于等于-1。
     * 
     * 默认值：-1，根节点id值为-1。若设置数值小于-1，该节点无效，不显示在树视图上。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parentNodeId?: int;

  /**
     * 当前子节点Id。
     * 
     * 取值范围：大于等于-1。
     * 
     * 不能为根节点id，不能为null，否则会抛出异常。且不能设置两个相同的currentNodeId。
     * 
     * 默认值：-1
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  currentNodeId?: int;

  /**
     * 是否是目录。
     * 
     * 默认值：false
     * 
     * true：是目录，false：不是目录。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isFolder?: boolean;

  /**
     * 图标。
     * 
     * 默认值：空字符串。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
     * Symbol图标样式，显示优先级大于icon，同时设置symbolIconStyle和icon，只显示Symbol图标。
     * 
     * 默认值：undefined，表示不显示Symbol图标。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolIconStyle?: SymbolGlyphModifier;

  /**
     * 选中图标。
     * 
     * 默认值：空字符串。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedIcon?: ResourceStr;

  /**
     * Symbol选中图标样式，优先级大于selectedIcon。
     * 
     * 默认值：undefined，选中时显示与未选中一样
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolSelectedIconStyle?: SymbolGlyphModifier;

  /**
     * 编辑图标。
     * 
     * 默认值：空字符串。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  editIcon?: ResourceStr;

  /**
     * Symbol编辑图标样式，优先级大于editIcon。
     * 
     * 默认值：undefined，编辑时显示与非编辑态一样
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolEditIconStyle?: SymbolGlyphModifier;

  /**
     * 主标题。
     * 
     * 默认值：空字符串。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  primaryTitle?: ResourceStr;

  /**
     * 副标题。
     * 
     * 默认值：空字符串。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  secondaryTitle?: ResourceStr;

  /**
     * 绑定在节点上的右键子组件，子组件由@Builder修饰。
     * 
     * 默认值：() => void
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  container?: OnContainerCallback;
}

/**
 * 树视图组件的控制器，可以将此对象绑定至树视图组件，然后通过它控制树的节点信息，同一个控制器不可以控制多个树视图组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TreeControllerV2 {
  /**
     * 点击某个节点后，调用该方法可以触发删除该节点。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  removeNode(): void;

  /**
     * 点击某个节点后，调用该方法可以触发修改该节点，该节点进入编辑态。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  modifyNode(): void;

  /**
     * 点击某个节点后，调用该方法可以触发新增子节点。
     *
   * @param { NodeParamV2 } [nodeParam] - 节点信息，用于指定新增节点的属性。如果不传该参数，在当前选中的节点下添加一个标题为"新建文件夹"的节点。
   * @returns { TreeControllerV2 } - 树视图组件的控制器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  addNode(nodeParam?: NodeParamV2): TreeControllerV2;

  /**
     * 更新树视图。调用该方法，更新当前节点的信息。
     *
   * @param { int } parentId - 父节点Id。<br />取值范围：大于等于-1。
   * @param { ResourceStr } parentSubTitle - 父节点副标题。
   * @param { ResourceStr } currentSubtitle - 当前节点副标题。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  refreshNode(parentId: int, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;

  /**
   * 建立树视图。节点增加完毕后，必须调用该方法，触发树信息的保存。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  buildDone(): void;
}