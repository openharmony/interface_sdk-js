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
* declare ForEachAttribute
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
* looping function.
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
   *
   * @param { Array<any> } arr - Data source, which is an array.<br>If this parameter is set to **undefined**, the
   *     **ForEach** API does not take effect.<br>**NOTE**<br>- You can set this parameter to an empty array. In this
   *     case, no child component is created.<br>- You can also set this parameter to a function whose return value is
   *     an array, for example, **arr.slice (1, 3)**. However, the set function cannot change any state variables
   *     including the array itself. For example, **Array.splice**, **Array.sort**, and **Array.reverse** functions are
   *     not allowed, as they may change the array.
   * @param { function } itemGenerator - Component generator.<br>- It generates a component for each data item in an
   *     array. <br>- (Optional) **item**: data item in the **arr** array.<br>- (Optional) **index**: index of the data
   *     item in the **arr** array.<br>**NOTE**<br>- The type of the created component must be the one allowed inside
   *     the parent container component of **ForEach**. For example, a **ListItem** component is allowed only when the
   *     parent container component of **ForEach** is **List**.
   * @param { function } keyGenerator - Key generator.<br>- It generates a unique and persistent key for each array item
   *     of the data source **arr**. You can customize the key generation rule using this function.<br>- (Optional)
   *     **item**: data item in the **arr** array.<br>- (Optional) **index**: index of the data item in the **arr**
   *     array.<br>**NOTE**<br>- If this function is not specified, the default key generator of the framework is used:
   *     **(item: T, index: number) => { return index + '__' + JSON.stringify(item); }**.<br>- The key generator should
   *     not change any component state.
   * @returns { ForEachInterface }    * @returns { ForEachAttribute }
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
* Defines ForEach Component.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const ForEach: ForEachInterface;