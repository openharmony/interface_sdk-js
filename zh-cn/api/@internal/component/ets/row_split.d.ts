/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * 将子组件横向布局，并在每个子组件之间插入纵向分割线。适用于需要横向多区域布局且支持动态调整子组件宽度的场景，如文件管理器的左右分栏、设置页面的双栏布局等。通过可拖拽的分割线，用户可以灵活调整各区域宽度。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface RowSplitInterface {
  /**
   * 带分割线的子组件横向分隔布局。
   *
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): RowSplitAttribute;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class RowSplitAttribute extends CommonMethod<RowSplitAttribute> {
  /**
   * 设置分割线是否可拖拽。设置为true时，用户可以拖拽分割线改变子组件宽度；设置为false时，分割线位置固定。
   * 
   * > **说明：**
   * >
   * > 初始化后，动态修改margin、border、padding通用属性导致子组件宽度大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的宽度。
   *
   * @param { boolean } value - 分割线是否可拖拽。设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。
   *     <br>默认值：false 
   *     <br>非法值：按默认值处理。
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  resizeable(value: boolean): RowSplitAttribute;
}

/**
 * 将子组件横向布局，并在每个子组件之间插入纵向分割线。适用于需要横向多区域布局且支持动态调整子组件宽度的场景，如文件管理器的左右分栏、设置页面的双栏布局等。通过可拖拽的分割线，用户可以灵活调整各区域宽度。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * 
 * ###### 子组件
 * 
 * 可以包含子组件。
 * 
 * RowSplit通过分割线限制子组件的宽度。初始化时，分割线位置根据子组件的宽度来计算。初始化后，动态修改子组件的宽度不会改变分割线位置，分割线位置保持不变。可以通过拖动分割线改变子组件宽度。
 * 
 * 初始化后，动态修改[margin]{@link CommonMethod#margin}、[border]{@link CommonMethod#border}、
 * [padding]{@link CommonMethod#padding}通用属性可能导致子组件宽度大于相邻分割线间距。在此异常情况下，不支持拖动分割线改变子组件的宽度。这是因为分割线的位置在初始化时已确定，动态修改边距、边框、内边距
 * 等属性会破坏原有的布局计算，导致分割线无法正确响应拖动操作。建议在初始化时合理设置子组件的尺寸和边距属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const RowSplit: RowSplitInterface;

/**
 * Defines RowSplit Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const RowSplitInstance: RowSplitAttribute;