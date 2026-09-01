'use static';
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

import { ResourceStr } from '@ohos.arkui.component';

import { Component } from '@ohos.arkui.component';

import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';

import { Builder } from '@ohos.arkui.component';

/**
  * ###### 子组件
  * 
  * 无
  * 
  * ###### 事件
  * 
  * 不支持[通用事件]{@link ./@internal/component/ets/common}。
 *
  * @file
  * @kit ArkUI
 */
/**
 * 定义树视图节点的监听事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum TreeListenType {
  /**
     * 监听节点点击事件。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NODE_CLICK = 'NodeClick',
  /**
     * 监听节点增加事件。在调用addNode方法添加节点后触发。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NODE_ADD = 'NodeAdd',
  /**
     * 监听节点删除事件。在调用removeNode方法删除节点后触发。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NODE_DELETE = 'NodeDelete',
  /**
     * 监听节点修改事件。在调用modifyNode方法修改节点后触发。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NODE_MODIFY = 'NodeModify',
  /**
     * 监听节点移动事件。在节点位置发生变化后触发。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NODE_MOVE = 'NodeMove'
}
/**
 * Callback method of Event registration and processing.
 *
 * @param { CallbackParam } callbackParam - The result of event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 * @noninterop
 */
declare type OnChangedCallback = (callbackParam: CallbackParam) => void;
/**
 * 树视图组件的监听管理器，可以获取监听器实例并绑定至树视图组件，用于管理树的节点监听，同一个监听器不可以控制多个树视图组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TreeListenerManager {
  /**
     * 获取监听管理器单例对象。
     *
   * @returns { TreeListenerManager } 返回获取到的监听管理器单例对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static getInstance(): TreeListenerManager;
  /**
     * 获取监听器。
     *
   * @returns { TreeListener } 返回获取到的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public getTreeListener(): TreeListener;
}
/**
 * Declare CallbackParam
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface CallbackParam {
  /**
     * 返回当前子节点id。
     * 
     * 取值范围：大于等于0。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  parentNodeId?: int;
  /**
     * 返回子节点在父节点下的索引位置，用于标识子节点在父节点的子节点列表中的位置。
     * 
     * 取值范围：大于等于-1，-1表示无效索引或无子节点。
     * 
     * 默认值：-1
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  childIndex?: int;
}
/**
 * 树视图组件的控制器，用于控制树的节点信息。同一控制器实例不能同时控制多个树视图组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TreeController {
  /**
     * 选中某个节点后，调用该方法删除该节点。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public removeNode(): void;
  /**
     * 选中某个节点后，调用该方法修改该节点。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public modifyNode(): void;
  /**
     * 选中某个节点后，调用该方法新增子节点。
     *
   * @param { NodeParam } [nodeParam] - 节点信息，用于指定新增节点的属性。如果不传该参数，在当前选中的节点下添加一个标题为“新建文件夹”节点。
   * @returns { TreeController } 返回树视图组件的控制器实例，支持链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public addNode(nodeParam?: NodeParam): TreeController;
  /**
     * 调用该方法，通过指定父节点Id、父节点副标题和当前节点副标题，更新当前节点的显示信息。
     *
   * @param { int } parentId - 父节点Id。<br />取值范围：大于等于-1。根节点id值为-1。若设置数值小于-1，做不生效处理。
   * @param { ResourceStr } parentSubTitle - 父节点副标题。设置后将更新父节点的副标题显示内容。
   * @param { ResourceStr } currentSubtitle - 当前节点副标题。设置后将更新当前节点的副标题显示内容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public refreshNode(parentId: int, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;
  /**
     * 节点增加完毕后，必须调用该方法保存树信息。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public buildDone(): void;
}
import { ResourceStr } from './arkui/component/units';
import { Component } from './arkui/component/customComponent';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder } from './arkui/component/builder';
/**
 * 树视图组件的监听器，可以将此对象绑定至树视图组件，然后通过它监听树的节点的变化，同一个监听器不可以控制多个树视图组件。监听器内部维护事件类型与回调函数的映射关系，当用户在TreeView上进行节点操作时，TreeView会通知监听器触
 * 发相应的回调函数，开发者可在回调中获取节点信息并进行业务处理。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TreeListener {
  /**
     * 注册树视图节点事件的监听，监听成功后，当节点发生对应事件时会触发回调函数。同一监听器不可控制多个树视图组件。
     *
   * @param { TreeListenType } type - 监听事件类型，用于指定要注册的监听事件。
   * @param { OnChangedCallback } callback - 回调函数，在对应监听事件触发时调用。回调参数callbackParam包含currentNodeId、parentNodeId和
     *     childIndex等信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public on(type: TreeListenType, callback: OnChangedCallback): void;
  /**
     * 注册一次树视图节点事件的监听，监听成功后，当节点首次发生对应事件时会触发回调函数，触发后自动移除监听。同一监听器不可控制多个树视图组件。
     *
   * @param { TreeListenType } type - 监听事件类型，用于指定要注册的监听事件。
   * @param { OnChangedCallback } callback - 回调函数，在对应监听事件触发时调用。回调参数callbackParam包含currentNodeId、parentNodeId和
     *     childIndex等信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public once(type: TreeListenType, callback: OnChangedCallback): void;
  /**
     * 取消监听。需要先注册监听后才能取消。同一监听器不可控制多个树视图组件。
     *
   * @param { TreeListenType } type - 监听事件类型，用于指定要取消的监听事件。
   * @param { OnChangedCallback } [callback] - 回调函数，在对应监听事件触发时调用。默认值：undefined。传入时取消对应的节点信息的监听，不传时取消该类型的所有节点信息的监听。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public off(type: TreeListenType, callback?: OnChangedCallback): void;
}
/**
 * 树视图作为一种分层显示的列表，适合显示嵌套结构。树视图包含父节点和子节点，支持展开或折叠。
 * 
 * 树视图适用于效率型应用的侧边导航栏中，如备忘录、电子邮件、图库等。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果TreeView设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额
 * > 外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到TreeView本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议TreeView设置通用属性和通用事
 * > 件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct TreeView {
  /**
     * 树视图组件的控制器，用于控制树的节点信息。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  treeController: TreeController;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * Declare NodeParam
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface NodeParam {
  /**
     * 父节点Id。
     * 
     * 取值范围：大于等于-1。
     * 
     * 默认值：-1，根节点id值为-1。若设置数值小于-1，做不生效处理。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  parentNodeId?: int;
  /**
     * 当前子节点Id。
     * 
     * 取值范围：大于等于-1。
     * 
     * 不能为根节点id（即不能为-1），不能为null，否则会抛出异常。且不能设置两个相同的currentNodeId。
     * 
     * 默认值：-1
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  currentNodeId?: int;
  /**
     * 是否是目录。
     * 
     * 默认值：false
     * 
     * true：是目录，可以包含子节点，支持展开/折叠操作；false：不是目录，为叶子节点。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isFolder?: boolean;
  /**
     * 图标。若同时设置了symbolIconStyle，则以symbolIconStyle为准。
     * 
     * 默认值：空字符串
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: ResourceStr;
  /**
     * Symbol图标，优先级大于icon。
     * 
     * 默认值：undefined
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolIconStyle?: SymbolGlyphModifier;
  /**
     * 选中图标。若同时设置了symbolSelectedIconStyle，则以symbolSelectedIconStyle为准。
     * 
     * 默认值：空字符串
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedIcon?: ResourceStr;
  /**
     * Symbol选中图标，优先级大于selectedIcon。
     * 
     * 默认值：undefined
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolSelectedIconStyle?: SymbolGlyphModifier;
  /**
     * 编辑图标。若同时设置了symbolEditIconStyle，则以symbolEditIconStyle为准。
     * 
     * 默认值：空字符串
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  editIcon?: ResourceStr;
  /**
     * Symbol编辑图标，优先级大于editIcon。
     * 
     * 默认值：undefined
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolEditIconStyle?: SymbolGlyphModifier;
  /**
     * 主标题。
     * 
     * 默认值：空字符串
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
     * 副标题。
     * 
     * 默认值：空字符串
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
     * 绑定在节点上的右键菜单组件，用户右键点击节点时显示该菜单，需通过@Builder函数定义。
     * 
     * 默认值：() => void
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  container?: () => void;
}