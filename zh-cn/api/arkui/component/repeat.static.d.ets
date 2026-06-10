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
* Repeat数据源参数联合类型。
*
 * @unionmember { Array<T> }
 * @unionmember { ReadonlyArray<T> }
 * @unionmember { Readonly<Array<T>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type RepeatArray<T> = Array<T> | ReadonlyArray<T> | Readonly<Array<T>>;

/**
* 渲染模版类型字符串获取函数类型。
*
 * @param { T } item - arr中每一个数据项。T为开发者传入的数据类型。
 * @param { int } index - 当前数据项对应的索引。
 * @returns { string } template type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type TemplateTypedFunc<T> = (item: T, index: int) => string;

/**
* 组件生成函数类型。
*
 * @param { RepeatItem<T> } repeatItem - 将item和index结合到一起的一个状态变量。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;

/**
* 数据项类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RepeatItem<T> {

  /**
   * arr中每一个数据项。T为开发者传入的数据类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  item: T;

  /**
   * 当前数据项对应的索引。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;
}

/**
* 懒加载函数类型。
*
 * @param { int } index - 当前数据项对应的索引。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type OnLazyLoadingFunc = (index: int) => void;

/**
* 键值生成函数类型。
*
 * @param { T } item - `arr`数组中的数据项。
 * @param { int } index - `arr`数组中的数据项索引。
 * @returns { string } key value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type KeyGeneratorFunc<T> = (item: T, index: int) => string;

/**
* 用于计算期望加载的数据项总数的函数类型。
*
 * @returns { int } Returns the total data count.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type OnTotalCountFunc = () => int;

/**
* 配置懒加载模式下期望加载的数据项总数、复用能力、数据精准懒加载能力。
*
* ###### 默认懒加载说明
*
* 当Repeat属性`.virtualScroll()`缺省时：<br>
* 1）ArkTS-Dyn中，默认渲染方式为全量加载，若要开启懒加载，需要设置`.virtualScroll()`属性。<br>
* 2）ArkTS-Sta中，默认渲染方式为懒加载。若要关闭懒加载，需要设置`.virtualScroll({ disableVirtualScroll: true })`。
*
* > **说明：**
* >
* > 关闭懒加载后，Repeat仅有`.each()`和`.key()`属性生效，其他懒加载特有的功能（如template、totalCount、onLazyLoading等）不生效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface VirtualScrollOptions {

  /**
   * 期望加载的数据项总数，可以不等于数据源长度（实际传入Repeat的数组的长度）。
   * 取值范围：自然数。
   * totalCount缺省或超出取值范围时，totalCount取值为数据源长度，列表正常滚动。
   * totalCount = 0时，不加载数据。
   * 0 < totalCount <= 数据源长度时，界面中只渲染区间[0, totalCount - 1]范围内的数据。
   * totalCount > 数据源长度时，Repeat将渲染区间[0, totalCount - 1]范围内的数据，容器组件滚动条样式根据totalCount值变化。在容器组件滚动过程中，应用需要保证在列表即将滑动到数据源末尾时请求
   * 后续数据。开发者需要对数据请求的错误场景（如网络延迟）进行保护操作，直到数据源全部加载完成，否则列表滑动过程中会出现滚动效果异常。建议配合使用[onLazyLoading]{@link OnLazyLoadingFunc}实现数据
   * 懒加载。
   * 除totalCount属性外，开发者也可以通过[onTotalCount]{@link OnTotalCountFunc}方法设置自定义方法，计算期望加载的数据项总数。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  totalCount?: int;

  /**
   * 是否开启复用功能。
   * true：开启复用。
   * false：关闭复用。
   * 默认值：true
   * 。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reusable?: boolean;

  /**
   * Data lazy loading。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onLazyLoading?: OnLazyLoadingFunc;

  /**
   * 计算期望加载的数据项总数。需要开发者给定计算方法，其返回值可以不等于数据源长度（实际传入Repeat的数组的长度）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTotalCount?: OnTotalCountFunc;

  /**
   * 是否关闭懒加载模式。
   * true：关闭懒加载模式，列表节点全部加载。
   * false：使用懒加载模式。
   * 默认值：false
   * 该接口仅适用于ArkTS-Sta。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disableVirtualScroll?: boolean;

  /**
   * Repeat的内存优化策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  memoryOptimizationStrategy?: RepeatMemOptStrategy;
}

/**
* 当cachedCount值被设置为当前template在屏上显示的最大节点数量时，Repeat会做到最大程度的复用。然而当屏上没有当前template的节点时，缓存池不会释放的同时应用内存增大。需要开发者根据具体情况自行把控。
*
* - 当cachedCount缺省时，框架会分别对不同template，根据屏上节点+预加载节点的个数之和来计算cachedCount。当屏上节点+预加载节点的个数之和增多时，cachedCount也会对应增长。需要注意
* cachedCount数量不会减少。
* - 显式指定cachedCount，推荐设置成和屏幕上节点个数一致。需要注意，设置cachedCount小于2会导致在快速滑动场景下创建新的节点，可能造成性能劣化。
*
* > **注意：**
* >
* > 滚动容器组件属性`.cachedCount()`和Repeat组件属性`.template()`的参数`cachedCount`都是为了平衡性能和内存，但是含义是不同的。
* >
* > - 滚动容器组件`.cachedCount()`：是指在可见范围外预加载的节点，这些节点会位于组件树上，但不是可见范围内。List/Grid等容器组件会额外渲染这些可见范围外的节点，从而达到其性能收益。Repeat会将这些节点视为
* > “可见”的。
* >
* > - `.template()`中的`cachedCount`: 是指Repeat视其为“不可见”的节点，这些空闲的节点框架会暂时保存，在需要使用时进行更新，从而实现复用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface TemplateOptions {

  /**
   * 当前template的缓存池中可缓存子组件节点的最大数量。取值范围是
   * [0, +∞)。默认值为屏上节点与预加载节点的个数之和。当屏上节点与预加载节点的个数之和增多时，cachedCount也会对应增长。需要注意cachedCount数量不会减少。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cachedCount?: int;
}

/**
* 除支持[拖拽排序]{@link common}属性外，还支持以下属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface RepeatAttribute<T> extends DynamicNode {

  /**
   * 组件生成函数。当所有`.template()`的type和`.templateId()`返回值不匹配时，将使用`.each()`处理数据项。
   *
   * > **说明**
   * >
   * > `each`属性必须有，否则运行时会报错。
   * > > `itemGenerator`的参数为`RepeatItem`，该参数将`item`和`index`结合到了一起，请勿将`RepeatItem`参数拆开使用。
   *
   * @param { RepeatItemBuilder<T> } itemGenerator
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  each(itemGenerator: RepeatItemBuilder<T>): this;

  /**
   * 键值生成函数。
   *
   * @param { KeyGeneratorFunc<T> } keyGenerator
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key(keyGenerator: KeyGeneratorFunc<T>): this;

  /**
   * `Repeat`开启虚拟滚动。
   *
   * @param { VirtualScrollOptions } [virtualScrollOptions] 虚拟滚动配置项。
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  virtualScroll(virtualScrollOptions?: VirtualScrollOptions): this;

  /**
   * 由template type渲染对应的template子组件。
   *
   * @param { string } type 当前模板类型。
   * @param { RepeatItemBuilder<T> } itemBuilder 组件生成函数。
   * @param { TemplateOptions } [templateOptions] 当前模板配置项。
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): this;

  /**
   * 为当前数据项分配template type。
   *
   * @param { TemplateTypedFunc<T> } typedFunc 生成当前数据项对应的template type。
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  templateId(typedFunc: TemplateTypedFunc<T>): this;

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
   * 设置Repeat选项。
   *
   * @param { RepeatArray<T> } arr - 数据源数组
   * @returns { this } RepeatAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setRepeatOptions<T>(arr: RepeatArray<T>): this;

  /**
   * 通知Repeat已完成属性设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  applyAttributesFinish(): void;
}

/**
* Indicates the type of Repeat.
*
 * @param { RepeatArray<T> } arr - The Data Source.
 * @returns { RepeatAttribute<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Repeat<T>(arr: RepeatArray<T>): RepeatAttribute<T>;

/**
  * 定义Repeat组件。需要在组件属性设置开始时调用setRepeatOptions，并在组件属性设置结束时调用applyAttributeFinish。
  *
 * @param { CustomBuilderT<RepeatAttribute<T>> } style - 用于设置Repeat属性的回调。
 * @returns { RepeatAttribute<T> } Repeat属性实例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function Repeat<T>(
     style: CustomBuilderT<RepeatAttribute<T>>
 ): RepeatAttribute<T>;

/**
* 定义内存优化策略的类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export enum RepeatMemOptStrategy {

  /**
   * 无内存优化策略
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT = 0,

  /**
   * Repeat组件处理内存优化策略
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}