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

/**
* 定义NodeContainer的接口。通过关联的NodeController来显示节点构建。
*
* > **说明：**
*
*
* > - 该组件下仅支持挂载自定义节点[FrameNode]{@link FrameNode}或者是[BuilderNode]{@link BuilderNode}中获取的根节点FrameNode。
* >
* > - 不支持挂载查询获得的系统组件代理节点，请参见[isModifiable]{@link FrameNode:FrameNode#isModifiable}。
* >
* > - 当前不支持使用[动态属性设置]{@link common}。
* >
* > - 该组件下的节点树构建时会使用UI实例[UIContext]{@link @ohos.arkui.UIContext}，实例切换时可能会因实例不匹配，导致所绑定
* > [NodeController]{@link NodeController:NodeController}的[makeNode]{@link NodeController:NodeController#makeNode}回调方法的
* > 入参为undefined，因此该组件当前不支持跨实例的节点复用。
* >
* > - 该组件未销毁时，不会主动触发挂载节点的下树。
*
*/
/**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface NodeContainerInterface {

  /**
   * 创建一个**NodeContainer**组件。
   *
   * @param { import('../api/@ohos.arkui.node').NodeController } controller - NodeController用于控制NodeContainer中的节点的上树和下树，
   *     反映NodeContainer容器的生命周期。
   * @returns { NodeContainerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (controller: import('../api/@ohos.arkui.node').NodeController): NodeContainerAttribute;
}

/**
* 支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)。
*
* 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class NodeContainerAttribute extends CommonMethod<NodeContainerAttribute> {}

/**
* 基础组件，用于挂载自定义节点（如[FrameNode]{@link FrameNode}或[BuilderNode]{@link BuilderNode}），并通过
* [NodeController]{@link NodeController:NodeController}动态控制节点的上树和下树。组件不支持尾随添加子节点，接受一个
* [NodeController]{@link NodeController:NodeController}实例接口，需与NodeController组合使用。
* > **说明：**
* > - 该组件下仅支持挂载自定义节点[FrameNode]{@link FrameNode}或者是[BuilderNode]{@link BuilderNode}中获取的根节点FrameNode。
* >
* > - 不支持挂载查询获得的系统组件代理节点，请参见[isModifiable]{@link FrameNode:FrameNode#isModifiable}。
* >
* > - 当前不支持使用[动态属性设置]{@link common}。
* >
* > - 该组件下的节点树构建时会使用UI实例[UIContext]{@link @ohos.arkui.UIContext}，实例切换时可能会因实例不匹配，导致所绑定
* > [NodeController]{@link NodeController:NodeController}的[makeNode]{@link NodeController:NodeController#makeNode}回调方法的
* > 入参为undefined，因此该组件当前不支持跨实例的节点复用。
* >
* > - 该组件未销毁时，不会主动触发挂载节点的下树。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const NodeContainer: NodeContainerInterface;

/**
* Defines NodeContainer Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const NodeContainerInstance: NodeContainerAttribute;