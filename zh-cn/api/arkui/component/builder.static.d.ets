'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { Callback } from '@ohos.base';

/**
 * Defines Builder Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Retention({policy: "SOURCE"})
@Target([
  AnnotationTargets.FUNCTION,
  AnnotationTargets.CLASS_METHOD,
  AnnotationTargets.CLASS_FIELD,
  AnnotationTargets.TYPE,
  AnnotationTargets.PARAMETER,
  AnnotationTargets.TYPE_ALIAS,
  AnnotationTargets.LAMBDA
])
export declare @interface Builder {}

/**
 * \@BuilderParam用于装饰指向[@Builder](./ts-universal-builder-static.md)方法的变量。
 * 开发指南见[\@BuilderParam装饰器：引用\@Builder函数](docroot://ui/state-management/arkts-builderparam.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface BuilderParam {}

/**
 * Defines the CustomBuilder Type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type CustomBuilder = @Builder (() => void);

/**
 * Defines the CustomBuilder Type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type CustomBuilderT<T> = @Builder ((t: T) => void);

/**
 * Defines the PageMapBuilder Type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type PageMapBuilder = @Builder ((name: string, param: Object | null | undefined) => void);

/**
 * wrapBuilder是一个模板函数，返回一个`WrappedBuilder`对象。模板参数`T`是@Builder的函数类型。
 *
 * @param { T } builder
 * @returns { WrappedBuilder<T> }
 WrappedBuilder对象。
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare function wrapBuilder<T>(builder: T): WrappedBuilder<T>;

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class WrappedBuilder<T> {

  /**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  public builder: T;

  /**
   * WrappedBuilder的构造函数。
   *
   * @param { T } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(builder: T);
}

/**
 * Type for property getter in Builder parameter proxy.
 *
 * @returns { Any } parameter value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type BuilderParameterCallback = () => Any;

/**
 * Make Proxy for Builder parameter.
 *
 * @param { T } instance Builder parameter instance
 * @param { Map<string, BuilderParameterCallback> } propertyGetters getter callbacks for each property name
 * @param { Callback<T> } [initializer] optional callback to initialize proxied instance
 * @returns { T } proxied parameter instance
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function makeBuilderParameterProxy<T>(
    instance: T,
    propertyGetters: Map<string, BuilderParameterCallback>,
    initializer?: Callback<T>
): T;

/**
 * Defines ComponentBuilder Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ComponentBuilder {}

/**
 * 定义对象构造器类型
 *
 * @returns { T }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type ConstructorT<T> = (() => T);