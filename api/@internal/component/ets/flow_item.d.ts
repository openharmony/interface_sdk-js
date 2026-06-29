/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * **FlowItem** is a child component of the [WaterFlow]{@link water_flow} container and is used to display specific
 * items in the container layout.
 *
 * > **NOTE**
 * >
 * > * This component is supported since API version 9. Updates will be marked with a superscript to indicate their
 * > earliest API version.
 * >
 * > * This component can be used only as a child of [WaterFlow]{@link water_flow}.
 * >
 * > * In the swiping scenario, the **FlowItem** component and its child components are frequently created and
 * > destroyed. You are advised to encapsulate components in the **FlowItem** component into custom components and
 * > decorating them with the @Reusable decorator, making the components reusable and reducing the overhead of
 * > repeatedly creating and destroying nodes in the ArkUI framework. For best practices, see
 * > [Reusing Components](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-waterflow-performance-optimization#section189041489339)
 * > .
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface FlowItemInterface {

  /**
   * Creates a child component in the **WaterFlow** layout.
   *
   * @returns { FlowItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (): FlowItemAttribute;
}

/**
 * Defines the water flow item attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class FlowItemAttribute extends CommonMethod<FlowItemAttribute> {}

/**
 * **FlowItem** is a child component of the [WaterFlow]{@link water_flow} container and is used to display specific
 * items in the container layout.
 *
 * > **NOTE**
 * >
 * > *
 * >
 * > * This component can be used only as a child of [WaterFlow]{@link water_flow}.
 * >
 * > * In the swiping scenario, the **FlowItem** component and its child components are frequently created and
 * > destroyed. You are advised to encapsulate components in the **FlowItem** component into custom components and
 * > decorating them with the @Reusable decorator, making the components reusable and reducing the overhead of
 * > repeatedly creating and destroying nodes in the ArkUI framework. For best practices, see
 * > [Reusing Components](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-waterflow-performance-optimization#section189041489339).
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const FlowItem: FlowItemInterface;

/**
 * Defines FlowItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const FlowItemInstance: FlowItemAttribute;