/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Defines the FormDimension enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare enum FormDimension {
  /**
   * 1 x 2 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  Dimension_1_2,

  /**
   * 2 x 2 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  Dimension_2_2,

  /**
   * 2 x 4 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  Dimension_2_4,

  /**
   * 4 x 4 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  Dimension_4_4,

  /**
   * 2 x 1 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  Dimension_2_1,

  /**
   * 1 x 1 cards
   * The default value is 6
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  DIMENSION_1_1 = 6,

  /**
   * 6 x 4 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12
   */
  DIMENSION_6_4,
}

/**
 * Defines the FormRenderingMode enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare enum FormRenderingMode {

  /**
   *  Full color mode, this is default value
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  FULL_COLOR,

  /**
   *  single color mode
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  SINGLE_COLOR,
}

/**
 * Defines the FormComponent.
 *
 * @interface FormComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
interface FormComponentInterface {
  /**
   * Set a new value.
   *
   * @param { {
   * id: number;
   * name: string;
   * bundle: string;
   * ability: string;
   * module: string;
   * dimension?: FormDimension;
   * temporary?: boolean;
   * want?: import('../api/@ohos.app.ability.Want').default;
   * } } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Set a new value.
   *
   * @param { object } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   */
  /**
   * Set a new value.
   *
   * @param { object } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  (value: {
    id: number;
    name: string;
    bundle: string;
    ability: string;
    module: string;
    dimension?: FormDimension;
    temporary?: boolean;
    want?: import('../api/@ohos.app.ability.Want').default;
    renderingMode?: FormRenderingMode;
  }): FormComponentAttribute;
}

/**
 * @extends CommonMethod<FormComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare class FormComponentAttribute extends CommonMethod<FormComponentAttribute> {
  /**
   * Sets the display area size of the card.
   *
   * @param { object } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  size(value: { width: number; height: number }): FormComponentAttribute;

  /**
   * Card module name.
   *
   * @param { string } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  moduleName(value: string): FormComponentAttribute;

  /**
   * Set the card size.
   *
   * @param { FormDimension } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  dimension(value: FormDimension): FormComponentAttribute;

  /**
   * Indicates whether to allow card update.
   *
   * @param { boolean } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  allowUpdate(value: boolean): FormComponentAttribute;

  /**
   * Whether the card is visible.
   *
   * @param { Visibility } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  visibility(value: Visibility): FormComponentAttribute;

  /**
   * This function is triggered after card information is obtained.
   * For details about the form information, see the definition of the original capability subsystem.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  onAcquired(callback: (info: { id: number }) => void): FormComponentAttribute;

  /**
   * Card loading error.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  onError(callback: (info: { errcode: number; msg: string }) => void): FormComponentAttribute;

  /**
   * Card to be redirected.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  onRouter(callback: (info: any) => void): FormComponentAttribute;

  /**
   * Uninstall Card.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  onUninstall(callback: (info: { id: number }) => void): FormComponentAttribute;

  /**
   * Card to be loaded.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  onLoad(callback: () => void): FormComponentAttribute;
}

/**
 * Defines FormComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare const FormComponent: FormComponentInterface;

/**
 * Defines FormComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare const FormComponentInstance: FormComponentAttribute;
