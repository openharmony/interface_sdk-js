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
 * Defines a type for memory optimization strategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum RepeatMemOptStrategy {

  /**
   * No memory optimization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * Repeat handles the memory optimization.
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
 * precise data lazy loading capability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface VirtualScrollOptions {

  /**
   * Expected total number of data items to be loaded, which may not be equal to the data source length (length of the
   * array passed to **Repeat**).
   *
   * Value range: natural numbers
   *
   * If **totalCount** is not specified or exceeds the value range, **totalCount** takes the value of the data source
   * length, and the list scrolls normally.
   *
   * If **totalCount** is set to **0**, no data is loaded.
   *
   * If the value of **totalCount** is in the range (0, Data source length], only data in the range
   * [0, **totalCount** – 1] is rendered on the GUI.
   *
   * If the value of **totalCount** is greater than the data source length, the **Repeat** component renders data in the
   * range [0, **totalCount** – 1], and the scrollbar style of the container component changes according to the value of
   * **totalCount**. During the scrolling of the container component, the application must ensure that subsequent data
   * is requested before the list is about to reach the end of the data source. You need to handle error scenarios (such
   * as network delays) for data requests until all data sources are loaded; otherwise, scrolling exceptions may occur
   * during list scrolling. You are advised to use [onLazyLoading]{@link VirtualScrollOptions.onLazyLoading} to
   * implement lazy loading.
   *
   * In addition to the **totalCount** attribute, you can also use the
   * [onTotalCount]{@link VirtualScrollOptions.onTotalCount} method to set a custom method to calculate the expected
   * total number of data items to be loaded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  totalCount?: number;

  /**
   * Whether to enable the reuse feature.
   *
   * **true**: Enable the reuse feature.
   *
   * **false**: Disable the reuse feature.
   *
   * Default value: **true**.
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
   * - The precise lazy loading capability is optional. If **onLazyLoading** is not specified and the return value of
   * **totalCount** or **onTotalCount** is greater than the data source length, **Repeat** does not render the list
   * scrolling to the bottom.
   * - Avoid using the **onLazyLoading** method to execute time-consuming operations. If data loading takes a long time,
   * you are advised to create a placeholder for the data in the **onLazyLoading** method and then create an
   * asynchronous task to load the data.
   *
   * @param { number } index - Index of the data item to be loaded.<br>Value range: natural numbers
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
   * total number of data items to be loaded, or use **onTotalCount()** to set a custom method to calculate the expected
   * total number of data items to be loaded. Use either **totalCount** or **onTotalCount**. If neither is set, the
   * default value is used. If both are set, **totalCount** is ignored.
   *
   * The data loading rules for different return values of **onTotalCount()** are the same as those for **totalCount**.
   * The details are as follows:
   *
   * - If the return value of **onTotalCount()** is **0**, no data is loaded.
   * - If the return value of **onTotalCount()** is in the range (0, Data source length], only data in the index range
   * [0, Return value – 1] is loaded.
   * - If the return value of **onTotalCount()** is greater than the data source length, the **Repeat** component
   * expects to load data in the index range [0, Return value – 1]. The scrollbar style of the container component
   * changes according to the value of **totalCount**. During the scrolling of the container component, the application
   * must ensure that subsequent data is requested before the list is about to reach the end of the data source. You
   * need to handle error scenarios (such as network delays) for data requests until all data sources are loaded;
   * otherwise, scrolling exceptions may occur during list scrolling. You are advised to use
   * [onLazyLoading]{@link VirtualScrollOptions.onLazyLoading} to implement lazy loading.
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
   * Memory optimization strategy for Repeat VirtualScroll.
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
 * container component's display area, the cache list is not released, which increases application memory usage. You are
 * advised to set **cachedCount** to the number of nodes within the container component's display area and adjust the
 * value according to the actual situation. Yet, setting **cachedCount** to less than 2 is not recommended, as this may
 * lead to the frequent node creation during rapid scrolling and result in performance degradation.
 *
 * > **NOTE**
 * >
 * > The **.cachedCount()** attribute of the scrollable container component and the **cachedCount** parameter of the
 * > **.template()** method of **Repeat** are used to balance performance and memory, but their meanings are different.
 * >
 * > - **.cachedCount()** of the scrollable container component: size of the preloading area outside the display area of
 * > the container component. The child component nodes in this area are located in the component tree. The scrollable
 * > container component renders nodes in these preloading areas, improving the list scrolling performance.
 * >
 * > - cachedCount in .template(): size of the cache pool for each template in the **Repeat** component. When rendering
 * > a new child component, **Repeat** checks whether there are available nodes in the cache pool for the corresponding
 * > template. If yes, the nodes are reused. If no, new nodes are created.
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
   * [0, +∞). The default value is the sum of the number of nodes in the display area of the container component and
   * the number of nodes in the preloading area. When this sum increases (during the scrolling, when only part of the
   * height of child components is within the display area), the value of **cachedCount** also increases accordingly.
   * Note that the value of **cachedCount** does not decrease.
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
 * @param { T } item - Each data item in the **arr** array. **T** indicates the data type passed in.
 * @param {number} index - Index corresponding to the current data item.
 * @returns { string } template type.
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
 * @param { RepeatItem<T> } repeatItem - State variable that combines **item** and **index**.
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