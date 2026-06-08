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
 * Indicates the type of Repeat's Data Source.
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
 * Function that returns typed string to render one template.
 *
 * @param { T } item - data item.
 * @param { int } index - data index in array.
 * @returns { string } template type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type TemplateTypedFunc<T> = (item: T, index: int) => string;

/**
 * Defines builder function to render one template type.
 *
 * @param { RepeatItem<T> } repeatItem - the repeat item builder function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;

/**
 * Construct a new type for each item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RepeatItem<T> {

  /**
   * The origin data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  item: T;

  /**
   * index of each item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;
}

/**
 * Function that is used to do lazy loading.
 *
 * @param { int } index - data index.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type OnLazyLoadingFunc = (index: int) => void;

/**
 * Defines key generator function.
 *
 * @param { T } item - data item.
 * @param { int } index - data index in array.
 * @returns { string } key value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type KeyGeneratorFunc<T> = (item: T, index: int) => string;

/**
 * Function that is used to get total count.
 *
 * @returns { int } Returns the total data count.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type OnTotalCountFunc = () => int;

/**
 * Defines the options of repeat virtualScroll to implement reuse and lazy loading.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface VirtualScrollOptions {

  /**
   * Total data count.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  totalCount?: int;

  /**
   * Reuse or not.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reusable?: boolean;

  /**
   * Data lazy loading.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onLazyLoading?: OnLazyLoadingFunc;

  /**
   * The function of total data count.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTotalCount?: OnTotalCountFunc;

  /**
   * Indicates whether to activate virtual scroll mode.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disableVirtualScroll?: boolean;

  /**
   * Memory optimization strategy for Repeat.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  memoryOptimizationStrategy?: RepeatMemOptStrategy;
}

/**
 * Defines a builder template option parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface TemplateOptions {

  /**
   * The cached number of each template.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cachedCount?: int;
}

/**
 * Defines the Repeat component attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface RepeatAttribute<T> extends DynamicNode {

  /**
   * Executes itemGenerator of each item.
   *
   * @param { RepeatItemBuilder<T> } itemGenerator
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  each(itemGenerator: RepeatItemBuilder<T>): this;

  /**
   * Obtains key of each item.
   *
   * @param { KeyGeneratorFunc<T> } keyGenerator
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key(keyGenerator: KeyGeneratorFunc<T>): this;

  /**
   * Enable UI lazy loading when scroll up or down.
   *
   * @param { VirtualScrollOptions } [virtualScrollOptions] that defines the options of repeat virtual scroll to
   *     implement reuse and lazy loading.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  virtualScroll(virtualScrollOptions?: VirtualScrollOptions): this;

  /**
   * Type builder function to render specific type of data item.
   *
   * @param { string } type that defines the template id.
   * @param { RepeatItemBuilder<T> } itemBuilder that defines UI builder function.
   * @param { TemplateOptions } [templateOptions] that defines a builder template option parameter.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): this;

  /**
   * Typed function to render specific type of data item.
   *
   * @param { TemplateTypedFunc<T> } typedFunc that defines template typed function.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  templateId(typedFunc: TemplateTypedFunc<T>): this;

  /**
   * Set the component's source code redirection information.
   *
   * @param { string } sourceLine - the source code line.
   * @param { string } [moduleName] - module to which the component belongs.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * Sets Repeat options.
   *
   * @param { RepeatArray<T> } arr - Data source array.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setRepeatOptions<T>(arr: RepeatArray<T>): this;

  /**
   * Notify the Repeat has finished setting up its attributes.
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
 * Defines Repeat Component. It requires call setRepeatOptions at start of component attribute set-up,
 * and it requires call applyAttributeFinish at end of component attribute set-up.
 *
 * @param { CustomBuilderT<RepeatAttribute<T>> } style - callback to set up Repeat's attributes.
 * @returns { RepeatAttribute<T> } The attribute of Repeat.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function Repeat<T>(
     style: CustomBuilderT<RepeatAttribute<T>>
 ): RepeatAttribute<T>;

/**
 * Defines type for memory optimization strategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export enum RepeatMemOptStrategy {

  /**
   * No memory optimization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT = 0,

  /**
   * Repeat handles the memory optimization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}