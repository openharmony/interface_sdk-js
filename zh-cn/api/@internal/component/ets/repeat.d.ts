/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Defines Repeat component.
 * @kit ArkUI
 */

/**
* Repeat内存优化策略枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum RepeatMemOptStrategy {

  /**
   * 无内存优化策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * 自动内存优化策略，当Repeat子节点内存占用较高时，建议使用此策略以降低内存使用量。
   *
   * 当应用退后台时、Repeat所在组件不可见时（[visibility]{@link CommonMethod#visibility}属性设置为[Visible]{@link Visibility}以外的值，或组件面积为0，不考虑遮
   * 挡）、整机低内存时（[MemoryLevel]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel}达到MEMORY_LEVEL_LOW或
   * MEMORY_LEVEL_CRITICAL），释放[缓存池](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md#节点更新复用能力说明)内的所有
   * 节点。
   *
   * 当应用恢复前台时、Repeat所在组件恢复显示时，恢复缓存池内的节点。
   *
   * 在释放和恢复节点时，会触发[自定义组件生命周期](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}

/**
* 数据项类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface RepeatItem<T> {

  /**
   * arr中每一个数据项。T为开发者传入的数据类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  item: T;

  /**
   * 当前数据项对应的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;
}

/**
* 配置懒加载模式下期望加载的数据项总数、复用能力、数据精准懒加载能力。从API版本26.0.0开始，支持配置内存优化策略。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface VirtualScrollOptions {

  /**
   * 期望加载的数据项总数，可以不等于数据源长度（实际传入Repeat的数组的长度）。
   *
   * 取值范围：自然数。
   *
   * totalCount缺省或超出取值范围时，totalCount取值为数据源长度，列表正常滚动。
   *
   * totalCount = 0时，不加载数据。
   *
   * 0 < totalCount <= 数据源长度时，界面中只渲染区间[0, totalCount - 1]范围内的数据。
   *
   * totalCount > 数据源长度时，Repeat将渲染区间[0, totalCount - 1]范围内的数据，容器组件滚动条样式根据totalCount值变化。在容器组件滚动过程中，应用需要保证在列表即将滑动到数据源末尾时请求
   * 后续数据。开发者需要对数据请求的错误场景（如网络延迟）进行保护操作，直到数据源全部加载完成，否则列表滑动过程中会出现滚动效果异常。建议配合使用
   * [onLazyLoading]{@link VirtualScrollOptions.onLazyLoading}实现数据懒加载。
   *
   * 除totalCount属性外，开发者也可以通过[onTotalCount]{@link VirtualScrollOptions.onTotalCount}方法设置自定义方法，计算期望加载的数据项总数。
   *
   * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  totalCount?: number;

  /**
   * 是否开启复用功能。当Repeat的子组件为[@ReusableV2](docroot://ui/state-management/arkts-new-reusableV2.md)装饰的自定义组件时，Repeat自身的复用能力优先于
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reusable?: boolean;

  /**
   * 可选方法，懒加载指定索引的数据。需要开发者给定数据加载方法。
   *
   * onLazyLoading方法需在懒加载场景下使用。开发者可设置自定义方法，用于向指定的数据源index中写入数据。以下为onLazyLoading的处理规则：
   *
   * - Repeat读取数据源中index对应的数据之前，会先检查index处是否存在数据。
   * - 如果不存在数据，但开发者提供了onLazyLoading方法，Repeat将调用此方法。
   * - 在onLazyLoading方法中，开发者需要向Repeat指定的index中写入数据，方式如下：`arr[index] = ...`，其中`arr`表示传入Repeat的数组。不允许使用除`[]`以外的数组操作，且不允许写入
   * 指定index以外的元素，否则系统将抛出异常。
   * - onLazyLoading方法执行完成后，若指定index中仍无数据，将导致当前index和后续索引对应的组件无法加载。
   * - 精准懒加载能力为可选配置项。当onLazyLoading缺省，并且totalCount或onTotalCount的返回值大于数据源长度时，Repeat不负责列表滚动到底部的渲染效果。
   * - onLazyLoading方法中应避免高耗时操作。若数据加载耗时较长，建议先在onLazyLoading方法中为此数据创建占位符，再创建异步任务加载数据。
   *
   * @param { number } index - 需要加载的数据项对应的索引。<br>取值范围：自然数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onLazyLoading?(index: number): void;

  /**
   * 可选方法，计算期望加载的数据项总数。需要开发者给定计算方法，其返回值可以不等于数据源长度（实际传入Repeat的数组的长度）。
   *
   * [totalCount]{@link VirtualScrollOptions.totalCount}和onTotalCount()的返回值都表示期望加载的数据项总数。开发者可直接设置totalCount属性，给出期望加载的数据项
   * 总数，也可以通过onTotalCount()设定自定义方法，计算期望加载的数据项总数。totalCount与onTotalCount()最多设置一个。如果均未设置，则采用默认值：数据源长度；如果同时设置，则忽略
   * totalCount。
   *
   * onTotalCount()不同返回值的数据加载处理规则与totalCount一致，具体如下：
   *
   * - onTotalCount()返回值 = 0时，不加载数据。
   * - 0 < onTotalCount()返回值 <= 数据源长度时，只加载区间[0, onTotalCount()返回值 - 1]索引范围内的数据。
   * - onTotalCount()返回值 > 数据源长度时，代表Repeat期望加载区间[0, onTotalCount()返回值 - 1]索引范围内的数据，容器组件滚动条样式根据totalCount值变化。在容器组件滚动过程中，应
   * 用需要保证在列表即将滑动到数据源末尾时请求后续数据。开发者需要对数据请求的错误场景（如网络延迟）进行保护操作，直到数据源全部加载完成，否则列表滑动过程中会出现滚动效果异常。建议配合使用
   * [onLazyLoading]{@link VirtualScrollOptions.onLazyLoading}实现数据懒加载。
   * - onTotalCount()返回值是非自然数时，由数据源长度取代其返回值。
   *
   * @returns { number } 期望加载的数据项总数。
   *     <br>取值范围：自然数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onTotalCount?(): number;

  /**
   * Repeat的内存优化策略。该参数在创建Repeat时设定，不支持动态修改。
   * 默认值：[DEFAULT]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  memoryOptimizationStrategy?: RepeatMemOptStrategy;
}

/**
* 当cachedCount值被设置为当前template在容器组件显示区域的最大节点数量时，Repeat会做到最大程度的复用。当容器组件显示区域内没有当前template的节点时，缓存列表不会释放，同时应用内存增大。开发者需要根据具体情
* 况自行把控，推荐cachedCount值设置为容器组件显示区域内节点个数。需要注意，不建议设置cachedCount小于2，这会导致在快速滑动场景下频繁创建新的节点，从而造成性能劣化。
*
* > **说明：**
* >
* > 滚动容器组件属性`.cachedCount()`和Repeat组件属性`.template()`的参数`cachedCount`都是为了平衡性能和内存，但是含义是不同的。
* >
* > - 滚动容器组件`.cachedCount()`：是指在容器组件显示区域外预加载区域的大小，该区域内子组件节点位于组件树上。滚动容器组件会额外渲染这些预加载区域的节点，从而提高列表滑动性能。
* >
* > - `.template()`中的`cachedCount`: 指Repeat每个template的缓存池大小，当渲染新的子组件时，Repeat先判断对应template缓存池中是否有可用节点，有则复用，没有则创建新节点。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface TemplateOptions {

  /**
   * 当前template的缓存池中可缓存子组件节点的最大数量。取值范围是
   * [0, +∞)，默认值为容器组件显示区域节点与预加载区域节点的个数之和。当容器组件显示区域节点与预加载节点的个数之和增多时（滑动过程中，只有部分高度的子组件在显示区域），cachedCount也会对应增长。需要注意cachedCount数量不会减少。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cachedCount?: number;
}

/**
* 渲染模版类型字符串获取函数类型。
*
 * @param { T } item - arr中每一个数据项。T为开发者传入的数据类型。<br/>缺省时默认忽略该参数，请勿在闭包函数的实现中使用该参数，否则会编译报错。
 * @param {number} index - 当前数据项对应的索引。<br/>缺省时默认忽略该参数，请勿在闭包函数的实现中使用该参数，否则会编译报错。
 * @returns { string } template type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type TemplateTypedFunc<T> = (item: T, index: number) => string;

/**
* 组件生成函数类型。
*
 * @param { RepeatItem<T> } repeatItem - 将item和index结合到一起的一个状态变量。<br/>缺省时默认忽略该参数，请勿在闭包函数的实现中使用该参数，否则会编译报错。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;

/**
* 除支持[拖拽排序]{@link common}属性外，还支持以下属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class RepeatAttribute<T> extends DynamicNode<RepeatAttribute<T>> {

  /**
   * 组件生成函数。当所有[`.template()`](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#template)的type和
   * [`.templateId()`](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#templateid)返回值不匹配（即当前item不
   * 适用任何template定义的样式）时，将使用`.each()`处理数据项。
   *
   * > **说明**
   * >
   * > - `each`属性必须有，否则运行时会报错。
   * >
   * > - `itemGenerator`的参数为`RepeatItem`，该参数将`item`和`index`结合到了一起，请勿将`RepeatItem`参数拆开使用。
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } itemGenerator - 组件生成函数。
   * @returns { RepeatAttribute<T> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  each(itemGenerator: (repeatItem: RepeatItem<T>) => void): RepeatAttribute<T>;

  /**
   * 键值生成函数。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } keyGenerator - 键值生成函数。<br/>item：`arr`数组中的数据项，可选。<br/>index：`arr`数组中的数据项索引，可选。
   * @returns { RepeatAttribute<T> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  key(keyGenerator: (item: T, index: number) => string): RepeatAttribute<T>;

  /**
   * `Repeat`开启虚拟滚动。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { VirtualScrollOptions } virtualScrollOptions - 虚拟滚动配置项。<br/>默认值为undefined。
   * @returns { RepeatAttribute<T> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  virtualScroll(virtualScrollOptions?: VirtualScrollOptions): RepeatAttribute<T>;

  /**
   * 由template type渲染对应的template子组件。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { string } type - 当前模板类型。
   * @param { RepeatItemBuilder<T> } itemBuilder - 组件生成函数。
   * @param { TemplateOptions } templateOptions - 当前模板配置项。<br/>默认值为undefined。
   * @returns { RepeatAttribute<T> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): RepeatAttribute<T>;

  /**
   * 为当前数据项分配template type。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { TemplateTypedFunc<T> } typedFunc - 生成当前数据项对应的template type。
   * @returns { RepeatAttribute<T> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  templateId(typedFunc: TemplateTypedFunc<T>): RepeatAttribute<T>;
}

/**
* Repeat数据源参数联合类型。
*
 * @unionmember { Array<T> } Regular  Regular Regular 常规数组类型。
 * @unionmember { ReadonlyArray<T> } Read-only  Read-only Read-only 只读数组类型，不允许数组对象变更。
 * @unionmember { Readonly<Array<T>> } Read-only  Read-only Read-only 只读数组类型，不允许数组对象变更。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type RepeatArray<T> = Array<T> | ReadonlyArray<T> | Readonly<Array<T>>;

/**
* Indicates the type of Repeat.
*
 * @param { RepeatArray<T> } arr - The Data Source
 * @returns { RepeatAttribute<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type RepeatInterface = <T>(arr: RepeatArray<T>) => RepeatAttribute<T>;

/**
* Defines Repeat Component.
*
 * @type { <T>(arr: Array<T>) => RepeatAttribute<T> } [since 12 - 17]
 * @type { RepeatInterface } [since 18]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Repeat: RepeatInterface;