/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import { Builder, CustomBuilderT } from './builder';

import { ComponentBuilder } from './builder';

import { DynamicNode } from './common';

/**
* 定义组件数据生成函数。
*
 * @param { T } item - 数组中的数据项
 * @param { int } index - 数组中的数据项索引。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
@Builder
declare type ItemGeneratorFunc<T> = (item: T, index: int) => void;

/**
* 定义键值生成函数。
*
 * @param { T } item - array数组中的数据项
 * @param { int } index - arr数组中的数据项索引。
 * @returns { string } Character string generated based on item and index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
declare type KeyGeneratorFunc<T> = (item: T, index: int) => string;

/**
* 支持[debugLine](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-foreach-sta.md#debugline24)属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ForEachAttribute extends DynamicNode {

  /**
   * 设置组件源码重定向信息。
   *
   * @param { string } sourceLine - 源码行号。
   * @param { string } [moduleName] - 组件所属模块名。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置ForEach选项。
   *
   * @param { function } arr - 返回用于UI的数组的函数。
   * @param { ItemGeneratorFunc<T> } itemGenerator - 项生成器函数。
   * @param { KeyGeneratorFunc<T> } [keyGenerator] - 键生成器函数。
   * @returns { this } ForEachAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setForEachOptions<T>(arr: () => Array<T>,
        itemGenerator: ItemGeneratorFunc<T>,
        keyGenerator?: KeyGeneratorFunc<T>): this;

  /**
     * Notify ForEach已经完成了其属性的设置。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  applyAttributesFinish(): void;
}

/**
* 定义ForEach组件。
*
 * @param { Array<T> } arr - 在UI中使用的数组集合。
 * @param { ItemGeneratorFunc<T> } itemGenerator - 项生成函数。
 * @param { KeyGeneratorFunc<T> } [keyGenerator] - 键生成函数。
 * @returns { ForEachAttribute } ForEach的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ForEach<T = Any>(arr: Array<T>,
    itemGenerator: ItemGeneratorFunc<T>,
    keyGenerator?: KeyGeneratorFunc<T>,
): ForEachAttribute;

/**
 * 定义ForEach组件。需要在组件属性设置开始时调用setForEachOptions，并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<ForEachAttribute> } style - 用于设置ForEach属性的回调。
 * @returns { ForEachAttribute } ForEach属性实例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function ForEach(
    style: CustomBuilderT<ForEachAttribute>
): ForEachAttribute;