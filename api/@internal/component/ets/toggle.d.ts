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

import {CommonMethod, Color} from "./common";

/**
 * Declare the type of status button
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum ToggleType {
  /**
   * Checkbox
   * @devices phone, tablet, car.
   * @since 7
   */
  Checkbox,

  /**
   * Switch
   * @devices phone, tablet, car.
   * @since 7
   */
  Switch,

  /**
   * Button
   * @devices phone, tablet, car.
   * @since 7
   */
  Button
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class ToggleExtend<T> extends ToggleAttribute<T> {
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
interface Toggle extends ToggleAttribute<Toggle> {
  /**
   * Set parameters to obtain the toggle.
   * @devices phone, tablet, car.
   * @since 7
   */
  (options?: {type: ToggleType, isOn?: boolean}): Toggle;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class ToggleAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the selected state of the component changes.
   * @since 7
   * @devices phone, tablet, car.
   */
  onChange(callback: (isOn: boolean) => void): T;

  /**
   * Called when the color of the selected button is set.
   * @since 7
   * @devices phone, tablet, car.
   */
  selectedColor(value: Color): T;

  /**
   * Called when the color of the selected button is set.
   * @since 7
   * @devices phone, tablet, car.
   */
  swithPointStyle(color: Color): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const ToggleInterface: Toggle;
