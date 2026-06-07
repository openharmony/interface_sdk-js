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
 * 将属性直接设置给组件，无需标记为状态变量即可直接触发UI更新。
 *
 * @file
 * @kit ArkUI
 */

/**
 * 可以将属性更新到本地的修饰器。
 *
 * @returns { T } Current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Initializer<T> = () => T;

/**
 * 为[AttributeModifier]{@link AttributeModifier}的实现类，开发者需要自定义class继承AttributeUpdater。
 * 其中C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等，仅在使用updateConstructorParams时才需要传递C类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export declare class AttributeUpdater<T, C = Initializer<T>> implements AttributeModifier<T> {

  /**
   * 定义正常态更新属性函数。
   *
   * @param { T } instance - 组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyNormalAttribute?(instance: T): void;

  /**
   * AttributeUpdater首次设置给组件时提供的样式。
   *
   * @param { T } instance - 组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initializeModifier(instance: T): void;

  /**
   * 获取AttributeUpdater中组件对应的属性类实例，通过该实例实现属性直通更新的功能。
   *
   * @returns { T | undefined } Returns the attribute class instance of the component in AttributeUpdater
   *     if it exists; returns undefined otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get attribute(): T | undefined;

  /**
   * 用于更改组件的构造函数入参。C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConstructorParams: C;

  /**
   * 绑定相同的自定义的Modifier对象，组件发生切换时，通过该接口通知到应用。
   *
   * @param { T } component - 组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onComponentChanged(component: T): void;
}