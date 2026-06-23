'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { Builder } from './builder';
import { ExtendableComponent } from './extendableComponent';
import { IDecoratedV1Variable } from '../stateManagement/decorator';

/**
 * 在ArkTS-Dyn中创建的自定义组件对象的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface CompatibleComponentInfo {
    /**
       * 在ArkTS-Dyn中创建的自定义组件对象的名称。
       *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
       * 在ArkTS-Dyn中创建的自定义组件对象。
       *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    component: ESValue;
}

/**
 * 初始化占位组件的回调函数类型。
 *
 * @param { ESValue } parent - the parent of compatible custom component
 * @returns { CompatibleComponentInfo } 占位组件的信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CompatibleInitCallback = (parent: ESValue) => CompatibleComponentInfo;

/**
 * 更新占位组件的回调函数类型。
 *
 * @param { ESValue } component - 在ArkTS-Dyn上下文创建的自定义组件对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CompatibleUpdateCallback = (component: ESValue) => void;

/**
 * 在ArkTS-Sta中引用ArkTS-Dyn自定义组件的占位组件。
 *
 * @param { CompatibleInitCallback } init - 初始化占位组件的回调函数。
 * @param { CompatibleUpdateCallback } update - 更新占位组件的回调函数。
 * @param { ExtendableComponent } [component] - 当前ArkTS-Sta自定义组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export declare function compatibleComponent(
    init: CompatibleInitCallback,
    update: CompatibleUpdateCallback,
    component?: ExtendableComponent
): void;

/**
 * 为ArkTS-Sta的状态变量获取一个ArkTS-Dyn的@State代理对象，用于与ArkTS-Dyn的状态变量进行互操作。
 *
 * @param { IDecoratedV1Variable<T> } state - ArkTS-Sta的状态变量。
 * @returns { ESValue } ArkTS-Dyn的@State对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function getCompatibleState<T>(state: IDecoratedV1Variable<T>): ESValue;

/**
 * 为ArkTS-Sta提供使用ArkTS-Dyn WrappedBuilder对象的互操作方法。
 *
 * @param { Any } builder - ArkTS-Dyn WrappedBuilder对象。
 * @param { FixedArray<ESValue> } args - ArkTS-Dyn WrappedBuilder对象使用时的参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export declare function compatibleWrappedBuilder(builder: Any, ...args: FixedArray<ESValue>): void;

/**
 * 在ArkTS-Sta中给ArkTS-Dyn的@BuilderParam传递@Builder函数（适用于非字面量更新场景）。
 *
 * @param { T } builder - 自定义构建函数。
 * @returns { ESValue } 可互操作的自定义构建函数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function transferCompatibleBuilder<T extends Function>(@Builder builder: T): ESValue;

/**
 * 自定义构建函数的类型。
 *
 * @param { T } arg - 自定义构建函数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export type CompatibleUpdatableBuilder<T> = (arg: T) => void;

/**
 * 在ArkTS-Sta中给ArkTS-Dyn的@BuilderParam传递@Builder函数（适用于字面量更新场景）。
 *
 * @param { CompatibleUpdatableBuilder<T> } builder - 自定义构建函数。
 * @returns { ESValue } 可互操作的自定义构建函数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function transferCompatibleUpdatableBuilder<T extends Object>(
    builder: CompatibleUpdatableBuilder<T>
): ESValue;

/**
 * 在ArkTS-Dyn中引用ArkTS-Sta中使用@ObservedV2和@Trace修饰的类。
 *
 * @param { T } value - ArkTS-Sta@ObservedV2修饰的class。
 * @returns { T } 返回当前组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export declare function enableCompatibleObservedV2ForDynamic<T>(value: T): T;

/**
 * 在ArkTS-Sta中引用ArkTS-Dyn中使用@ObservedV2和@Trace修饰的类。
 *
 * @param { T } value - 在ArkTS-Dyn中@ObservedV2修饰的class。
 * @returns { T } 返回当前组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export declare function enableCompatibleObservedV2ForStatic<T>(value: T): T;