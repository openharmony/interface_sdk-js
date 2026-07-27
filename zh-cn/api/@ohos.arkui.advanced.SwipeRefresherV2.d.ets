/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * SwipeRefresherV2组件用于内容加载，内容加载指获取内容并加载出来，常用于衔接展示下拉加载的内容。
 *
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于[状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)
 * 状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制内容加载的数据和状态，实现更高效的用户界面刷新。
 *
 * 实现下拉刷新功能。当用户下拉页面时，会触发内容加载操作，即从数据源获取新内容并动态展示在界面中。
 *
 * 设备行为差异：本接口实际支持的设备类型范围（Phone、PC/2in1、Tablet、TV）小于其所属系统能力支持的设备类型范围（Phone、PC/2in1、Tablet、TV、Wearable）。
 * 因硬件能力限制，该接口在Wearable设备中调用将运行异常，异常信息中提示接口未定义。
 *
 * > **说明：**
 * >
 * > - 如果SwipeRefresherV2设置[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)和[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)
 * >   编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SwipeRefresherV2本身。
 * >   这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议SwipeRefresherV2设置通用属性和通用事件。
 *
 * @struct { SwipeRefresherV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct SwipeRefresherV2 {
  /**
   * 内容加载时显示的文本。<br/>默认值：空字符串。<br/>**说明**：如果文本大于列宽时，文本被截断。
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  content?: string;

  /**
   * 当前内容是否正在加载。<br> true：内容正在加载。<br> false：内容未在加载。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Require
  @Param
  isLoading: boolean;
}
