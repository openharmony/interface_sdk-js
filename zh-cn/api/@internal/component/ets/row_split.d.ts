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
 * 将子组件横向布局，并在每个子组件之间插入纵向分割线。
 * 
 * > **说明：**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @noninterop
 * @since 7 dynamic
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
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 * 
 * 支持[通用事件]{@link common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @noninterop
 * @since 7 dynamic
 */
declare class RowSplitAttribute extends CommonMethod<RowSplitAttribute> {
  /**
   * 设置分割线是否可拖拽。
   *
   * @param { boolean } value - 分割线是否可拖拽。设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。<br/>默认值：false <br />非法值：按默认值处理。
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  resizeable(value: boolean): RowSplitAttribute;
}

/**
 * 将子组件横向布局，并在每个子组件之间插入纵向分割线。
 * 
 * > **说明：**
 * 
 * ###### 子组件
 * 
 * 可以包含子组件。
 * 
 * RowSplit通过分割线限制子组件的宽度。初始化时，分割线位置根据子组件的宽度来计算。初始化后，动态修改子组件的宽度不生效，分割线位置保持不变，可以通过拖动相邻分割线改变子组件宽度。
 * 
 * 初始化后，动态修改[margin]{@link CommonMethod#margin}、[border]{@link CommonMethod#border}、
 * [padding]{@link CommonMethod#padding}通用属性导致子组件宽度大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的宽度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @noninterop
 * @since 7 dynamic
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