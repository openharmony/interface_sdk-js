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

import {CommonMethod, Visibility} from "./common";

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum FormDimension {
  /**
   * 1 x 2 cards
   * @devices phone, tablet, car.
   * @since 7
   */
  Dimension_1_2,

  /**
   * 2 x 2 cards
   * @devices phone, tablet, car.
   * @since 7
   */
  Dimension_2_2,

  /**
   * 2 x 4 cards
   * @devices phone, tablet, car.
   * @since 7
   */
  Dimension_2_4,

  /**
   * 4 x 4 cards
   * @devices phone, tablet, car.
   * @since 7
   */
  Dimension_4_4
}

/**
 * The card component is provided to display cards.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class FormComponentExtend<T> extends FormComponentAttribute<T> {
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
interface FormComponent extends FormComponentAttribute<FormComponent> {
  /**
   * Set a new value.
   * @devices phone, tablet, car.
   * @since 7
   */
  (value: {id: number, name: string, bundle: string, ability: string, module: string, dimension?: FormDimension}): FormComponent;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class FormComponentAttribute<T> extends CommonMethod<T> {
  /**
   * Sets the display area size of the card.
   * @devices phone, tablet, car.
   * @since 7
   */
  size(value: {width: number, height: number}): T;

  /**
   * Card module name.
   * @devices phone, tablet, car.
   * @since 7
   */
  moduleName(value: string): T;

  /**
   * Set the card size.
   * @devices phone, tablet, car.
   * @since 7
   */
  dimension(value: FormDimension): T;

  /**
   * Indicates whether to allow card update.
   * @devices phone, tablet, car.
   * @since 7
   */
  allowUpdate(value: boolean): T;

  /**
   * Whether the card is visible.
   * @devices phone, tablet, car.
   * @since 7
   */
  visibility(value: Visibility): T;

  /**
   * This function is triggered after card information is obtained. For details about the form information, see the definition of the original capability subsystem.
   * @devices phone, tablet, car.
   * @since 7
   */
  onAcquired(callback: (info: {id: number}) => void): T;

  /**
   * Card loading error.
   * @devices phone, tablet, car.
   * @since 7
   */
  onError(callback: (info: {errcode: number, msg: string}) => void): T;

  /**
   * Card to be redirected.
   * @devices phone, tablet, car.
   * @since 7
   */
  onRouter(callback: (info: any) => void): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const FormComponentInterface: FormComponent;
