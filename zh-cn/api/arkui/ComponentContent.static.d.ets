
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { BuildOptions } from 'arkui.BuilderNode';

import { Content } from 'arkui.Content';

import { UIContext } from '@ohos.arkui.UIContext';

import { WrappedBuilder, CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';

import { RecordData } from '@ohos.base';

/**
 * 定义ComponentContent的基类.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export abstract class ComponentContentBase extends Content {}

/**
 * Defines ComponentContent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ComponentContent<T = undefined> extends ComponentContentBase {

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<CustomBuilder> } builder - Defines the builder
   *     that will be called to build ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<CustomBuilder>);

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defines the builder
   *     that will be called to build ComponentContent.
   * @param { T } args - Parameters used to update the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<CustomBuilderT<T>>, args: T);

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defines the builder
   *     that will be called to build ComponentContent.
   *     ComponentContent.
   * @param { T } args - Parameters used to update the ComponentContent.
   * @param { BuildOptions } options - Defines the options that will be used when building.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<CustomBuilderT<T>>, args: T, options: BuildOptions);

  /**
   * Update the ComponentContent based on the provided parameters.
   *
   * @param { T } args - Parameters used to update the ComponentContent, which must match the types required by the
   *     builder bound to the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  update(args: T): void;

  /**
   * 基于提供的参数复用ComponentContent。
   *
   * @param { RecordData } [param] - 用于复用ComponentContent的参数。该参数将直接用于ComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定义组件的aboutToReuse生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ComponentContent中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reuse(param?: RecordData): void;

  /**
   * Recycle the ComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  recycle(): void;

  /**
   * Dispose the ComponentContent immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dispose(): void;

  /**
   * 获取 ComponentContent 是否已被解绑。
   *
   * @returns { boolean } - 如果 ComponentContent 已被解绑则返回 true，否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isDisposed(): boolean;

  /**
   * Notify ComponentContent to update the configuration to trigger a reload of the ComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  updateConfiguration(): void;

  /**
   * 返回一个标志位，表示当前 ComponentContent 是否通过动态-静态转换获取。
   * 该转换包含两个方向：从动态转换为静态，以及从静态转换为动态。
   *
   * @returns { boolean } - 如果ComponentContent在动态和静态状态之间转换，则返回true。
   *     否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isTransferred(): boolean;
}

/**
 * 定义 ReactiveComponentContent
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ReactiveComponentContent extends ComponentContentBase {

  /**
   * 构造函数。
   *
   * @param { UIContext } uiContext - 用于创建 ReactiveComponentContent 的 UIContext对象
   * @param { CustomBuilder } builder - 将被调用来构建 ReactiveComponentContent 的builder。
   * @param { BuildOptions } [options] - 构建时要使用的选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(uiContext: UIContext, builder: CustomBuilder, options?: BuildOptions);

  /**
   * 基于提供的参数重用ReactiveComponentContent
   *
   * @param { RecordData } [param] - 用于复用ReactiveComponentContent的参数。该参数将直接用于ReactiveComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定义组件的aboutToReuse生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ReactiveComponentContent中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reuse(param?: RecordData): void;

  /**
   * 回收 ReactiveComponentContent。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  recycle(): void;

  /**
   * 立即解绑 ReactiveComponentContent。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dispose(): void;

  /**
   * 获取 ReactiveComponentContent 是否已被解绑。
   *
   * @returns { boolean } - 如果 ReactiveComponentContent 已被解绑则返回 true，否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isDisposed(): boolean;

  /**
   * 通知 ReactiveComponentContent 更新配置以触发重新加载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  updateConfiguration(): void;

  /**
   * 立即刷新当前状态变更以更新ReactiveComponentContent。
   * 这会强制组件使用最新的状态值进行同步更新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  flushState(): void;

  /**
   * 返回一个标志位，表示当前ReactiveComponentContent是否通过动态-静态转换获取。
   * 该转换包含两个方向：从动态转换为静态，以及从静态转换为动态。
   *
   * @returns { boolean } - 如果 ReactiveComponentContent 是经过动态和静态状态之间转换得到的，则返回 true，否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isTransferred(): boolean;
}