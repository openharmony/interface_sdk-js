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
* 支持[拖拽排序]{@link common}属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class ForEachAttribute extends DynamicNode<ForEachAttribute> {}

/**
* ForEach接口基于数组类型数据来进行循环渲染。
*
* > **说明：**
*
* 开发者指南见：[ForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ForEachInterface {

  /**
   * ForEach接口基于数组类型数据来进行循环渲染，需要与容器组件配合使用，且接口返回的组件应当是允许包含在ForEach父容器组件中的子组件。例如，[ListItem]{@link list_item}组件要求ForEach的父容
   * 器组件必须为[List]{@link list}组件或[ListItemGroup]{@link list_item_group}组件。
   *
   * @param { Array<any> } arr - 数据源，为`Array`类型的数组。<br/>设置为undefined时ForEach接口不生效。<br/>**说明：**<br/>- 可以设置为空数组，此时不会创建子组件。
   *     <br/>- 可以设置返回值为数组类型的函数，例如`arr.slice(1, 3)`，但设置的函数不应改变包括数组本身在内的任何状态变量，例如不应使用`Array.splice()`,`Array.sort()`或
   *     `Array.reverse()`这些会改变原数组的函数。
   * @param { function } itemGenerator - 组件生成函数。<br/>- 为数组中的每个元素创建对应的组件。<br/>- `item`参数（可选）：`arr`数组中的数据项。<br/>- `index`参
   *     数（可选）：`arr`数组中的数据项索引。<br/>**说明：**<br/>- 组件的类型必须是`ForEach`的父容器所允许的。例如，`ListItem`组件要求`ForEach`的父容器组件必须为`List`组件。
   * @param { function } keyGenerator - 键值生成函数。<br/>- 为数据源`arr`的每个数组项生成唯一且持久的键值。开发者可以通过该函数自定义键值生成规则。<br/>- `item`参数（可选）：
   *     `arr`数组中的数据项。<br/>- `index`参数（可选）：`arr`数组中的数据项索引。<br/>**说明：**<br/>- 如果函数缺省，框架默认的键值生成函数为
   *     `(item: T, index: number) => { return index + '__' + JSON.stringify(item); }`<br/>- 键值生成函数不应改变任何组件状态。
   * @returns { ForEachInterface } [since 7 - 11]
   * @returns { ForEachAttribute } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop
   */
  (
    arr: Array<any>,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string,
  ): ForEachAttribute;
}

/**
* ForEach接口基于数组类型数据来进行循环渲染。
*
* > **说明：**
*
* 开发者指南见：[ForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const ForEach: ForEachInterface;