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
 * AttributeUpdater directly set attributes to a component to trigger UI re-renders, without marking them as
 * state variables.
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines a decorator for updating attributes.
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
 * Represents the implementation class of AttributeModifier. You need to customize a class to inherit
 * AttributeUpdater.
 * C indicates the constructor type of the component, for example, TextInterface of the Text component and
 * ImageInterface of the Image component. It is required only when updateConstructorParams is used.
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
   * Defines the function for updating attributes in normal state.
   *
   * @param { T } instance - Component attribute class, which identifies the type of component to which attributes
   *     will be applied, for example, ButtonAttribute for the Button component and TextAttribute for the Text
   *     component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyNormalAttribute?(instance: T): void;

  /**
   * Initializes the component's attributes to the default values defined in this AttributeUpdater.
   *
   * @param { T } instance - Component attribute class, which identifies the type of component to which attributes
   *     will be applied, for example, ButtonAttribute for the Button component and TextAttribute for the Text
   *     component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initializeModifier(instance: T): void;

  /**
   * Obtains the attribute class instance corresponding to the component in AttributeUpdater.
   * The instance can then be used to directly update attributes.
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
   * The type is used to change the constructor input parameters of the
   * component.C indicates the constructor type of the component, for example, TextInterface of the Text component and
   * ImageInterface of the Image component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConstructorParams: C;

  /**
   * Invoked to notify the application that the component bound to the same custom Modifier object changes.
   *
   * @param { T } component - Component attribute class, which identifies the type of component to which attributes
   *     will be applied, for example, ButtonAttribute for the Button component and TextAttribute for the Text
   *     component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onComponentChanged(component: T): void;
}