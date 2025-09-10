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
/*** if arkts static */
import { CommonMethod,Callback } from './common';
import Want from '../../@ohos.app.ability.Want';
import { Visibility } from './enums'
import { VoidCallback } from './units';
/*** endif */
/**
 * Defines the FormDimension enum.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 * @since 20 static
 */
declare enum FormDimension {
  /**
   * 1 x 2 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  Dimension_1_2 = 0,

  /**
   * 2 x 2 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  Dimension_2_2 = 1,

  /**
   * 2 x 4 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  Dimension_2_4 = 2,

  /**
   * 4 x 4 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  Dimension_4_4 = 3,

  /**
   * 2 x 1 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   * @deprecated since 20
   */
  Dimension_2_1 = 4,

  /**
   * 1 x 1 cards
   * The default value is 6
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  DIMENSION_1_1 = 6,

  /**
   * 6 x 4 cards
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  DIMENSION_6_4 = 7,

  /**
   * 2 x 3 cards used for wearable devices
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  DIMENSION_2_3 = 8,

  /**
   * 3 x 3 cards used for wearable devices
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  DIMENSION_3_3 = 9
}

/**
 * Defines the FormRenderingMode enum.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11 dynamic
 * @since 20 static
 */
declare enum FormRenderingMode {

  /**
   *  Full color mode, this is default value
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  FULL_COLOR,

  /**
   *  single color mode
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   * @since 20 static
   */
  SINGLE_COLOR,
}

/**
 * Defines the FormShape enum.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 * @since 20 static
 */
declare enum FormShape {
    /**
     * The rect shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    RECT = 1,

    /**
     * The circle shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 12 dynamic
     * @since 20 static
     */
    CIRCLE,
}

/**
 * Defines the FormInfo.
 *
 * @interface FormInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 * @since 20 static
 */
declare interface FormInfo {
  /**
   * The id the form.
   *
   * @type { long | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  id: long | string;

  /**
   * The name of the form.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  name: string;

  /**
   * The bundle of the form.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  bundle: string;

  /**
   * The ability of the form.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  ability: string;

  /**
   * The module of the form.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  module: string;

  /**
   * The dimension of the form.
   *
   * @type { ?FormDimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  dimension?: FormDimension;

  /**
   * Whether the form is temporary.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  temporary?: boolean;

  /**
   * The want of the form.
   *
   * @type { ?import('../api/@ohos.app.ability.Want').default }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;

  /**
   * The want of the form.
   *
   * @type { ?Want }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20 static
   */
  want?: Want;

  /**
   * The renderingMode of the form.
   *
   * @type { ?FormRenderingMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  renderingMode?: FormRenderingMode;

  /**
   * The shape of the form.
   *
   * @type { ?FormShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  shape?: FormShape;
}

/**
 * Defines the FormComponent.
 *
 * @interface FormComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 * @since 20 static
 */
interface FormComponentInterface {
  /**
   * Set a new value.
   *
   * @param { {
   * id: long;
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
  /**
   * Set a new value of form info.
   *
   * @param { FormInfo } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  (value: FormInfo): FormComponentAttribute;
}

/**
 * Defines the FormCallbackInfo.
 *
 * @interface FormCallbackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 * @since 20 static
 */
interface FormCallbackInfo {
  /**
   * The id of the form.
   *
   * @type { long }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  id: long;

  /**
   * The string id of the form.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  idString: string;
}

/**
 * Defines the size of Form.
 *
 * @interface FormSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 18 dynamic
 * @since 20 static
 */
interface FormSize {
  /**
   * The width of the form.
   * Anonymous Object Rectification
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  width: double;
  /**
   * The height of the form.
   * Anonymous Object Rectification
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  height: double;
}

/**
 * Defines error information for card loading.
 *
 * @typedef ErrorInformation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 18 dynamic
 * @since 20 static
 */
interface ErrorInformation {
  /**
   * Error code.
   * Anonymous Object Rectification
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  errcode: int;

  /**
   * Error information.
   * Anonymous Object Rectification
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  msg: string;
}

/**
 * @extends CommonMethod<FormComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 * @since 20 static
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
  /**
   * Sets the display area size of the card.
   *
   * @param { FormSize } formSize - The size of Form
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  size(formSize: FormSize): FormComponentAttribute;

  /**
   * Card module name.
   *
   * @param { string } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  moduleName(value: string): FormComponentAttribute;

  /**
   * Set the card size.
   *
   * @param { FormDimension } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  dimension(value: FormDimension): FormComponentAttribute;

  /**
   * Indicates whether to allow card update.
   *
   * @param { boolean } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
   */
  allowUpdate(value: boolean): FormComponentAttribute;

  /**
   * Whether the card is visible.
   *
   * @param { Visibility } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   * @since 20 static
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
  /**
   * This function is triggered after card information is obtained.
   * For details about the form information, see the definition of the original capability subsystem.
   *
   * @param { Callback<FormCallbackInfo> } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  onAcquired(callback: Callback<FormCallbackInfo>): FormComponentAttribute;

  /**
   * Card loading error.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Card loading error.
   *
   * @param { Callback<ErrorInformation> } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  onError(callback: Callback<ErrorInformation>): FormComponentAttribute;

  /**
   * Card to be redirected.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Card to be redirected.
   * Anonymous Object Rectification
   *
   * @param { Callback<object> } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  onRouter(callback: Callback<object>): FormComponentAttribute;

  /**
   * Uninstall Card.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Uninstall Card.
   *
   * @param { Callback<FormCallbackInfo> } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   * @since 20 static
   */
  onUninstall(callback: Callback<FormCallbackInfo>): FormComponentAttribute;

  /**
   * Card to be loaded.
   *
   * @param { function } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  /**
   * Card to be loaded.
   *
   * @param { VoidCallback } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  onLoad(callback: VoidCallback): FormComponentAttribute;

  /**
   * Card has been updated.
   *
   * @param { Callback<FormCallbackInfo> } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   * @since 20 static
   */
  onUpdate(callback: Callback<FormCallbackInfo>): FormComponentAttribute;
}

/**
 * Defines FormComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare const FormComponent: FormComponentInterface;

/**
 * Defines FormComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare const FormComponentInstance: FormComponentAttribute;
