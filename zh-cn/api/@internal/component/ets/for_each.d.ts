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
 * 支持[拖拽排序]{@link ./common}属性。
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
 * ForEach接口基于数组类型数据进行循环渲染，可基于数组数据快速生成结构相同、内容不同的子组件，适用于动态列表、批量数据展示等场景，需与容器组件配合使用。
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
   * 该接口需要与容器组件配合使用，且接口返回的组件应当是允许包含在ForEach父容器组件中的子组件。例如，[ListItem]{@link ./list_item}组件要求ForEach的父容器组件必须为
   * [List]{@link ./list}组件或[ListItemGroup]{@link ./list_item_group}组件。
   *
   * @param { Array<any> } arr - 数据源，为`Array`类型。
   *     <br>设置为`undefined`时ForEach接口不生效。
   *     <br>**说明：**
   *     <br>- 可以设置为空数组，此时不会创建子组件。
   *     <br>- 可以设置返回值为数组类型的函数，例如`arr.slice(1, 3)`，但设置的函数不应改变包括数组本身在内的任何状态变量，例如不应使用`Array.splice()`、`Array.sort()`或
   *     `Array.reverse()`这些会改变原数组的函数。
   * @param { function } itemGenerator - 组件生成函数。
   *     <br>- 为数组中的每个数据项创建对应的组件。
   *     <br>- `item`参数（可选）：`arr`数组中的数据项。
   *     <br>- `index`参数（可选）：`arr`数组中的数据项索引。
   *     <br>- 建议`item`的数据类型与`arr`的数据类型保持一致，否则，当`itemGenerator`中存在与数据类型强相关的操作时，会导致子组件无法正常渲染，甚至运行时崩溃。
   *     <br>**说明：**
   *     <br>- 组件的类型必须是`ForEach`的父容器所允许的。例如，`ListItem`组件要求`ForEach`的父容器组件必须为`List`组件或`ListItemGroup`组件。
   *     <br>- 组件生成函数不应改变任何组件状态。
   * @param { function } keyGenerator - 键值生成函数。
   *     <br>- 为数据源`arr`的每个数据项生成唯一且稳定的键值。开发者可以通过该函数自定义键值生成规则，例如当数据项包含唯一标识符时，可使用该标识符作为键值以提升渲染性能；当数据项可能被增删或重排序时，自定义稳定键值可保证
   *     组件正确复用。若键值不唯一或不持久，可能导致组件复用错误或渲染异常。
   *     <br>- `item`参数（可选）：`arr`数组中的数据项。建议`item`的数据类型与`arr`的数据类型保持一致，否则，当`keyGenerator`中存在与数据类型强相关的操作时，会导致子组件无法正常渲染，甚至运
   *     行时崩溃。
   *     <br>- `index`参数（可选）：`arr`数组中的数据项索引。
   *     <br>**说明：**
   *     <br>- 如果函数缺省，框架默认的键值生成函数为`(item: any, index: number) => { return index + '__' + JSON.stringify(item); }`
   *     <br>- 键值生成函数不应改变任何组件状态。
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
 * ForEach接口基于数组类型数据进行循环渲染，可基于数组数据快速生成结构相同、内容不同的子组件，适用于动态列表、批量数据展示等场景，需与容器组件配合使用。
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