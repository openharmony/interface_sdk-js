/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * 内容加载指获取内容并加载出来，常用于衔接展示下拉加载的内容。
 * 
 * > **说明：**
 * >
 * > - 该组件及其子组件从 API version 10 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果SwipeRefresher设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编
 * > 译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SwipeRefresher本身。
 * > 这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议SwipeRefresher设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct SwipeRefresher {
  /**
   * 内容加载时显示的文本。
   * 
   * 默认值：空字符串。
   * 
   * **说明**：如果文本大于列宽时，文本被截断。从API version 20开始，支持Resource类型。
   *
   * @type { string } [since 10 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  content?: ResourceStr;

  /**
   * 当前是否正在加载。
   * 
   * true：正在加载。
   * 
   * false：未在加载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  isLoading: boolean;
}