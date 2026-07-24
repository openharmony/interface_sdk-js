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
 * 组件属性的初始化函数类型，用于创建并返回组件的属性实例。
 *
 * @returns { T } 返回当前组件的属性实例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Initializer<T> = () => T;

/**
 * 将属性直接设置给组件，无需标记为状态变量即可直接触发UI更新。适用于需要在不定义状态变量的情况下动态更新组件属性的场景，如动态修改组件构造参数、避免为一次性属性更新定义状态变量等。
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
   * 定义正常态更新属性函数，在AttributeUpdater后续更新属性时触发。不建议在同一组件上同时用属性直通更新和属性方法设置相同属性，否则易出现混淆。当与属性方法同时设置时，属性生效的原则为后设置的生效。
   *
   * @param { T } instance - 组件的属性类实例，开发者通过调用该实例的属性方法来设置或更新组件的正常态属性，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyNormalAttribute?(instance: T): void;

  /**
   * AttributeUpdater首次设置给组件时提供的样式。不建议在同一组件上同时用属性直通更新和属性方法设置相同属性，否则易出现混淆。当与属性方法同时设置时，属性生效的原则为后设置的生效。
   *
   * @param { T } instance - 组件的属性类实例，开发者通过调用该实例的属性方法来初始化设置组件的样式属性，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initializeModifier(instance: T): void;

  /**
   * 获取AttributeUpdater中组件对应的属性类实例，通过该实例实现属性直通更新。需先通过组件的attributeModifier属性方法建立组件与AttributeUpdater的绑定关系，绑定后方可获取到属性类实例。不建
   * 议在同一组件上同时用属性直通更新和属性方法设置相同属性；当与属性方法同时设置时，属性生效的原则为后设置的生效。
   *
   * @returns { T | undefined } 如果AttributeUpdater中组件的属性类实例存在，则返回对应组件的属性类实例，否则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get attribute(): T | undefined;

  /**
   * C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等。用于更改组件的构造函数入参。需先通过组件的attributeModifier属性方法建立组件与
   * AttributeUpdater的绑定关系，绑定后方可使用。当前仅支持Button、Image、Text、Span、SymbolSpan和ImageSpan组件，使用前需确保T和C类型匹配，否则可能导致功能异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConstructorParams: C;

  /**
   * 当多个组件绑定同一个自定义AttributeUpdater对象，且绑定的组件发生切换时，通过该接口通知应用。需注意一个AttributeUpdater对象只能同时关联一个组件，否则将出现设置的属性只在一个组件上生效的现象。
   *
   * @param { T } component - 组件的属性类实例，开发者通过调用该实例的属性方法来设置切换后组件的属性，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onComponentChanged(component: T): void;
}