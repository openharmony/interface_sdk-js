/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * **ModifierUtils** is a utility class for
 * [AttributeModifier](docroot://ui/arkts-user-defined-extension-attributeModifier.md), used to provide methods for
 * attribute operations. For example, it can determine whether a given instance is of a specified component type. This
 * is applicable to scenarios where different component types need to be distinguished and differentiated attribute
 * settings need to be applied within a unified **AttributeModifier**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export declare class ModifierUtils {
  /**
   * Checks whether a given instance is of a specified component type. For example, when implementing unified attribute
   * modification logic for multiple component types in a custom **AttributeModifier**, this method can be used to
   * determine the component type of the current instance, so that different attribute settings can be applied to
   * different components.
   *
   * @param { T } instance - Instance to check. T is the component attribute type that inherits from
   *     [universal attributes]{@link ../@internal/component/ets/common} (CommonMethod).
   * @param { string } componentName - Name of the component type to check. The value is the component class name (such
   *     as 'Text' or 'Button') and must exactly match the component class name (case-sensitive). Returns **false** if
   *     an invalid or nonexistent component class name is passed in.
   * @returns { boolean } Returns **true** if the instance is of the specified component type; returns **false**
   *     otherwise.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  static isInstanceOf<T extends CommonMethod<T>>(instance: T, componentName: string): boolean;
}
