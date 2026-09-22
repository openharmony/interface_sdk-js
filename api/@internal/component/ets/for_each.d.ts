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
 * The [drag-and-drop sorting]{@link ./common} attribute is supported.
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
 * The **ForEach** API performs loop rendering based on array-type data. It can quickly generate child components with
 * the same structure but different content based on array data. It is applicable to scenarios such as dynamic lists and
 * batch data display, and must be used together with a container component.
 *
 * For details about the development, see
 * [ForEach: Rendering Repeated Content](docroot://ui/rendering-control/arkts-rendering-control-foreach.md).
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
   * This API must be used together with a container component, and the components returned by the API must be child
   * components that are allowed to be contained in the **ForEach** parent container component. For example, the
   * [ListItem]{@link ./list_item} component requires that the parent container component of **ForEach** must be a
   * [List]{@link ./list} component or a [ListItemGroup]{@link ./list_item_group} component.
   *
   * @param { Array<any> } arr - Data source, of the `Array` type.
   *     <br>If it is set to `undefined`, the **ForEach** API does not take effect.
   *     <br>**Note:**
   *     <br>- It can be set to an empty array, in which case no child component is created.
   *     <br>- It can be set to a function that returns an array, for example, `arr.slice(1, 3)`. However, the function
   *     set must not change any state variable, including the array itself. For example, functions that change the
   *     original array, such as `Array.splice()`, `Array.sort()`, or `Array.reverse()`, must not be used.
   * @param { function } itemGenerator - Component generation function.
   *     <br>- Creates a component for each data item in the array.
   *     <br>- `item` parameter (optional): data item in the `arr` array.
   *     <br>- `index` parameter (optional): index of the data item in the `arr` array.
   *     <br>- It is recommended that the data type of `item` be consistent with that of `arr`. Otherwise, if the
   *     `itemGenerator` contains operations strongly related to the data type, the child component may fail to render
   *     properly or even crash at runtime.
   *     <br>**Note:**
   *     <br>- The component type must be allowed by the parent container of `ForEach`. For example, the `ListItem`
   *     component requires the parent container component of `ForEach` to be a `List` component or a `ListItemGroup`
   *     component.
   *     <br>- The component generation function must not change any component state.
   * @param { function } keyGenerator - Key generation function.
   *     <br>- Generates a unique and stable key value for each data item in the data source `arr`. Developers can
   *     customize the key generation rule through this function. For example, when a data item contains a unique
   *     identifier, the identifier can be used as the key value to improve rendering performance. When data items may
   *     be added, deleted, or reordered, a custom stable key value ensures correct component reuse. If the key value is
   *     not unique or persistent, component reuse errors or rendering exceptions may occur.
   *     <br>- `item` parameter (optional): data item in the `arr` array. It is recommended that the data type of `item`
   *     be consistent with that of `arr`. Otherwise, if the `keyGenerator` contains operations strongly related to the
   *     data type, the child component may fail to render properly or even crash at runtime.
   *     <br>- `index` parameter (optional): index of the data item in the `arr` array.
   *     <br>**Note:**
   *     <br>- If this function is omitted, the default key generation function of the framework is
   *     `(item: any, index: number) => { return index + '__' + JSON.stringify(item); }`
   *     <br>- The key generation function must not change any component state.
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
 * The **ForEach** API performs loop rendering based on array-type data. It can quickly generate child components with
 * the same structure but different content based on array data. It is applicable to scenarios such as dynamic lists and
 * batch data display, and must be used together with a container component.
 *
 * For details about the development, see
 * [ForEach: Rendering Repeated Content](docroot://ui/rendering-control/arkts-rendering-control-foreach.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const ForEach: ForEachInterface;
