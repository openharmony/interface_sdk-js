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
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates the memory optimization strategies of **Repeat**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum RepeatMemOptStrategy {
  /**
   * No memory optimization strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,
  /**
   * Automatic memory optimization strategy. When the memory usage of **Repeat** child nodes needs to be reduced, it is
   * recommended to use this strategy to lower memory usage.
   *
   * When the application goes to the background, when the component where **Repeat** resides is invisible (the
   * [visibility]{@link CommonMethod#visibility} attribute is set to a value other than [Visible]{@link Visibility}, or
   * the component area is 0, regardless of occlusion), or when the device memory is low (the
   * [MemoryLevel]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel} reaches **MEMORY_LEVEL_LOW** or
   * **MEMORY_LEVEL_CRITICAL**), all nodes in the
   * [cache pool](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md#node-update-and-reuse-mechanism)
   * are released.
   *
   * When the application returns to the foreground and the component where **Repeat** resides is displayed again, the
   * nodes in the cache pool are restored.
   *
   * When nodes are released and restored, the
   * [custom component lifecycle](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md) is triggered.
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
 * Construct a new type for each item.
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
   * Each data item in the **arr** array. **T** indicates the data type passed in.
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
   * Index corresponding to the current data item.
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
 * Configures the expected total number of data items to be loaded in lazy loading mode, the reuse capability, and the
 * precise data lazy loading capability. Since API version 26.0.0, the memory optimization strategy can be configured.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface VirtualScrollOptions {
  /**
   * Total number of expected data items to load, which can be different from the data source length (the length of the
   * array actually passed to Repeat).
   *
   * Value range: natural number.
   *
   * At most one of totalCount and onTotalCount() can be set. If neither is set, the default value is used: the data
   * source length. If both are set, totalCount is ignored.
   *
   * If totalCount is omitted or out of the value range, totalCount takes the value of the data source length, and the
   * list scrolls normally.
   *
   * If totalCount = 0, no data is loaded.
   *
   * If 0 < totalCount <= data source length, only the data in the range [0, totalCount - 1] is rendered in the UI.
   *
   * If totalCount > data source length, **Repeat** renders the data in the range [0, totalCount - 1], and the scrollbar
   * style of the container component changes based on the totalCount value. During scrolling of the container
   * component, the application must ensure that subsequent data is requested when the list is about to scroll to the
   * end of the data source. The developer needs to protect against error scenarios of data requests (such as network
   * latency) until the data source is fully loaded; otherwise, abnormal scrolling effects may occur during list
   * scrolling. It is recommended to use [onLazyLoading]{@link VirtualScrollOptions.onLazyLoading} to implement data
   * lazy loading.
   *
   * In addition to the totalCount attribute, the developer can also set a custom method through
   * [onTotalCount]{@link VirtualScrollOptions.onTotalCount} to calculate the expected total number of data items to
   * load.
   *
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  totalCount?: number;

  /**
   * Whether to enable the reuse capability. When the child component of **Repeat** is a custom component decorated by
   * [@ReusableV2](docroot://ui/state-management/arkts-new-reusableV2.md), the reuse capability of **Repeat** itself
   * takes precedence over that of @ReusableV2. If the developer wants to use the reuse capability of @ReusableV2, it is
   * recommended to disable the reuse capability of **Repeat** itself.
   *
   * **true**: enables reuse.
   *
   * **false**: disables reuse.
   *
   * Default value: **true**
   *
   * **Atomic service API:** Since API version 18, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reusable?: boolean;

  /**
   * (Optional) Lazily loads data at a specified index. You need to provide a data loading method.
   *
   * The **onLazyLoading** method must be used in lazy loading scenarios. You can implement a custom method to write
   * data to a specified index in the data source. The processing rules for **onLazyLoading** are as follows:
   *
   * - Before reading the data corresponding to an index in the data source, the **Repeat** component checks whether
   * data exists at the index.
   * - If no data exists but the **onLazyLoading** method is implemented, **Repeat** calls this method.
   * - In the **onLazyLoading** method, you need to write data to the index specified by **Repeat** in the following
   * format: arr[index] =..., where **arr** indicates the array passed to **Repeat**. Array operations except **[]** are
   * not allowed, and elements except the specified index cannot be written. Otherwise, the system throws an exception.
   * - After the **onLazyLoading** method is executed, if no data exists in the specified index, the components
   * corresponding to the current index and subsequent indexes cannot be loaded.
   * - The precise lazy loading capability is an optional configuration item. If **onLazyLoading** is not specified and
   * the return value of **totalCount** or **onTotalCount** is greater than the data source length, **Repeat** does not
   * render the missing subsequent data when the list scrolls to the end of the data source.
   * - Avoid blocking time-consuming operations (such as synchronous network requests and complex computations) in the
   * **onLazyLoading** method. If data loading may take a long time and affect scrolling smoothness, you are advised to
   * first create a placeholder for the data in the **onLazyLoading** method, and then create an asynchronous task to
   * load the data.
   *
   * @param { number } index - Index of the data item to be loaded.
   *     <br>Value range: natural numbers
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onLazyLoading?(index: number): void;

  /**
   * (Optional) Calculates the expected total number of data items to be loaded. You need to provide a calculation
   * method, and its return value may not be equal to the data source length (length of the array passed to **Repeat**).
   *
   * Both the return values of [totalCount]{@link VirtualScrollOptions} and **onTotalCount()** indicate the expected
   * total number of data items to be loaded. You can directly set the **totalCount** attribute to specify the expected
   * total number of data items to be loaded, or use **onTotalCount()** to define a custom method for calculating the
   * expected total number of data items to be loaded. At most one of **totalCount** and **onTotalCount()** can be set.
   * If neither is set, the default value is used: the data source length. If both are set, **totalCount** is ignored.
   *
   * The data loading rules for different return values of **onTotalCount()** are the same as those for **totalCount**.
   * The details are as follows:
   *
   * - If the return value of **onTotalCount()** is **0**, no data is loaded.
   * - If the return value of **onTotalCount()** is in the range (0, Data source length], only data in the index range
   * [0, Return value – 1] is loaded.
   * - If the return value of **onTotalCount()** is greater than the data source length, the **Repeat** component
   * expects to load data in the index range [0, Return value of onTotalCount() – 1]. The scrollbar style of the
   * container component changes based on the return value of **onTotalCount()**. During the scrolling process of the
   * container component, the application must ensure that subsequent data is requested when the list is about to scroll
   * to the end of the data source. The developer needs to protect against error scenarios of data requests (such as
   * network latency) until the data source is fully loaded. Otherwise, abnormal scrolling effects may occur during list
   * scrolling. It is recommended to use [onLazyLoading]{@link VirtualScrollOptions.onLazyLoading} to implement data
   * lazy loading.
   * - If the return value of **onTotalCount()** is not a natural number, the data source length will be used as the
   * return value.
   *
   * @returns { number } Expected total number of data items to be loaded.
   *     <br>Value range: natural numbers
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onTotalCount?(): number;

  /**
   * Memory optimization strategy of **Repeat**. This parameter is set when **Repeat** is created and does not support
   * dynamic modification.
   *
   * Default value: [DEFAULT]{@link RepeatMemOptStrategy}
   *
   * **Atomic service API:** Since API version 26.0.0, this API is supported in atomic services.
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
 * When **cachedCount** is set to the maximum number of nodes in the display area of the container component for the
 * current template, **Repeat** achieves maximum reuse efficiency. If there are no nodes of the current template in the
 * display area of the container component, the cache pool is not released, and the application memory increases. The
 * developer needs to adjust it based on the application's requirements for memory usage and component reuse efficiency.
 * It is recommended to set **cachedCount** to the number of nodes in the display area of the container component. Note
 * that it is not recommended to set **cachedCount** to a value less than 2, because this causes frequent creation of
 * new nodes in fast scrolling scenarios, resulting in performance degradation.
 *
 * > **NOTE**
 * >
 * > The `.cachedCount()` attribute of the scrollable container component and the `cachedCount` parameter of the
 * > `.template()` method of **Repeat** are both used to balance performance and memory, but they have different
 * > meanings.
 * >
 * > - `.cachedCount()` of the scrollable container component: indicates the size of the preloading area outside the
 * > display area of the container component. The child component nodes in this area are located on the component tree.
 * > The scrollable container component additionally renders the nodes in this preloading area to improve list scrolling
 * > performance.
 * >
 * > - `cachedCount` in `.template()`: indicates the cache pool size of each template of Repeat. When rendering a new
 * > child component, **Repeat** first checks whether there are available nodes in the cache pool of the corresponding
 * > template. If yes, it reuses them; otherwise, it creates new nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface TemplateOptions {
  /**
   * Maximum number of child component nodes that can be cached in the cache pool of the current template. The value
   * range is
   * [0, +∞), and the default value is the sum of the number of nodes in the display area and the preloaded area of the
   * container component. When the sum of the number of nodes in the display area and the preloaded nodes of the
   * container component increases (during the scrolling process, only child components of partial height are in
   * the display area), **cachedCount** increases accordingly. Note that the **cachedCount** value does not decrease.
   * When a value outside the value range, such as a negative number, is passed in, the default value is used.
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
 * Function that returns typed string to render one template.
 *
 * @param { T } item - Each data item in arr. T is the data type passed in by the developer.
 *     <br>When omitted, this parameter is ignored by default. Do not use this parameter in the closure function
 *     implementation; otherwise, a compile error occurs.
 * @param {number} index - Index corresponding to the current data item.
 *     <br>When omitted, this parameter is ignored by default. Do not use this parameter in the closure function
 *     implementation; otherwise, a compile error occurs.
 * @returns { string } Template type generated by the current data item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type TemplateTypedFunc<T> = (item: T, index: number) => string;

/**
 * Defines builder function to render one template type.
 *
 * @param { RepeatItem<T> } repeatItem - State variable that combines item and index.
 *     <br>When this parameter is omitted, it is ignored by default. Do not use this parameter in the closure function
 *     implementation; otherwise, a compile error occurs.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;

/**
 * In addition to the [drag-and-drop sorting]{@link common} attribute, the following attributes are supported.
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
   * Component generator. When the return value of [.templateId()]{@link RepeatAttribute#templateId} does not match any
   * [.template()]{@link RepeatAttribute#template} type (that is, the current item does not match any defined template
   * style), the data item is processed using **.each()**.
   *
   * > **NOTE**
   * >
   * > - The **each** property is mandatory. If it is omitted, runtime errors will occur.
   * >
   * > - The **itemGenerator** parameter is of the **RepeatItem** type, which combines **item** and **index**. Do not
   * > destructure **RepeatItem**.
   * >
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { function } itemGenerator - Component generator.
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
   * Key generator.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { function } keyGenerator - Key generator.<br>**item**: data item in the **arr** array. It is optional.<br>
   *     **index**: index of a data item in the **arr** array. It is optional.
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
   * Enables virtual scrolling for **Repeat**.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { VirtualScrollOptions } virtualScrollOptions - Virtual scrolling configuration.
   * @returns { RepeatAttribute<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  virtualScroll(virtualScrollOptions?: VirtualScrollOptions): RepeatAttribute<T>;
  /**
   * Renders the corresponding template child component based on the template type.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { string } type - Current template type.
   * @param { RepeatItemBuilder<T> } itemBuilder - Component generator.
   * @param { TemplateOptions } templateOptions - Current template configuration.
   * @returns { RepeatAttribute<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): RepeatAttribute<T>;
  /**
   * Assigns a template type for this data item.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { TemplateTypedFunc<T> } typedFunc - Function that generates a template type for each data item.
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
 * Defines a union type for **Repeat** data source parameters.
 *
 * @unionmember { Array<T> } Regular array type.
 * @unionmember { ReadonlyArray<T> } Read-only array type, where the array object cannot be modified.
 * @unionmember { Readonly<Array<T>> } Read-only array type, where the array object cannot be modified.
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
 * Defines Repeat Component, and Add More Array Type.
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
