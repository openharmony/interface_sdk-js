/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * 本模块提供ArkTS语言的基础类型定义，支持跨线程传递数据结构、注解保留策略控制等功能。当前提供ISendable类型、RetentionPolicy枚举类型和Retention注解。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace lang {
  /**
   * 是所有Sendable对象类型（除null和undefined）的父类型。实现该接口后，自定义类的实例将支持跨线程传递。自身不定义任何方法和属性。
   *
   * ArkTS中，ISendable类型的对象是Object类型的实例，遵循Object类型的基本特征，同时支持跨线程传递。
   *
   * ISendable主要用在开发者自定义Sendable数据结构的场景中。ArkTS语言标准库中的Sendable容器类型（如Array、Map、Set等）隐式地继承并实现了ISendable。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface ISendable {  }
}

/**
 * 描述注解类型保留策略的枚举类型。其枚举值和Retention结合使用，以指定注解的生命周期。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 dynamic
 */
export const enum RetentionPolicy {
  /**
   * 注解将在编译期被移除。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamic
   */
  SOURCE = 'source',
  /**
   * 注解将保留到编译产物中。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamic
   */
  BYTECODE = 'bytecode'
}

/**
 * 系统提供的API注解能力，可用于指定自定义注解的生命周期。此注解只能标注在其他注解声明上。在自定义注解上标注Retention注解后，根据policy的不同取值，编译器会对自定义注解执行不同的保留策略。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 dynamic
 */
export @interface Retention {
  /**
   * 注解的保留策略。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamic
   */
  policy: RetentionPolicy;
}

export default lang;