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
 * Defines the type of the initialization function for component attributes, which is used to create and return an
 * attribute instance of the component.
 *
 * @returns { T } Attribute instance of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Initializer<T> = () => T;

/**
 * Sets attributes directly to a component to trigger UI re-renders, without marking them as state variables. This is
 * applicable to scenarios where component attributes need to be dynamically updated without defining state variables,
 * such as dynamically modifying component constructor parameters or avoiding defining state variables for one-time
 * attribute updates.
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
   * Defines the normal-state attribute update function, which is triggered when **AttributeUpdater** subsequently
   * updates attributes. It is not recommended to use both **AttributeUpdater** and an attribute method to set the same
   * attribute on the same component, as this can easily cause confusion. When **AttributeUpdater** is used together
   * with an attribute method, the one that is used later takes effect.
   *
   * @param { T } instance - Attribute class instance of the component. You can call the attribute method of this
   *     instance to set or update the normal-state attributes of the component, for example, **ButtonAttribute** of the
   *     **Button** component and **TextAttribute** of the **Text** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyNormalAttribute?(instance: T): void;

  /**
   * Provides the style when **AttributeUpdater** initially sets attributes to a component. It is not recommended to use
   * both **AttributeUpdater** and an attribute method to set the same attribute on the same component, as this can
   * easily cause confusion. When **AttributeUpdater** is used together with an attribute method, the one that is used
   * later takes effect.
   *
   * @param { T } instance - Attribute class instance of the component. You can call the attribute method of this
   *     instance to initially set the style attribute to the component, such as **ButtonAttribute** of the **Button**
   *     component and **TextAttribute** of the **Text** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initializeModifier(instance: T): void;

  /**
   * Obtains the attribute class instance corresponding to the component in **AttributeUpdater**. The instance can then
   * be used to directly update attributes. The binding relationship between the component and **AttributeUpdater** must
   * first be established through the component's **attributeModifier** attribute method before the attribute class
   * instance can be obtained. It is not recommended to use both **AttributeUpdater** and an attribute method to set the
   * same attribute on the same component. When **AttributeUpdater** is used together with an attribute method, the one
   * that is used later takes effect.
   *
   * @returns { T | undefined } Returns the attribute class instance of the component in **AttributeUpdater** if it
   *     exists; returns **undefined** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get attribute(): T | undefined;

  /**
   * **C** indicates the constructor type of the component, for example, **TextInterface** of the **Text** component and
   * **ImageInterface** of the **Image** component. The type is used to change the constructor input parameters of the
   * component. The component must first be bound to **AttributeUpdater** through the component's **attributeModifier**
   * attribute method before use. Currently, only the **Button**, **Image**, **Text**, **Span**, **SymbolSpan**, and
   * **ImageSpan** components are supported. Ensure the type matching of **T** and **C** before use; otherwise, it may
   * cause functionality issues.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConstructorParams: C;

  /**
   * Invoked to notify the application when multiple components are bound to the same custom **AttributeUpdater** object
   * and the bound component changes. Note that one **AttributeUpdater** object can be associated with only one
   * component at a time. Otherwise, the set attributes will take effect on only one component.
   *
   * @param { T } component - Attribute class instance of the component. You can call the attribute method of this
   *     instance to set the attribute to the component after changing, for example, **ButtonAttribute** of the
   *     **Button** component and **TextAttribute** of the **Text** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onComponentChanged(component: T): void;
}