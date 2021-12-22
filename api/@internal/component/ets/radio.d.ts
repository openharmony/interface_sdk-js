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

import { CommonMethod } from "./common";

/**
 * Input parameter for creating a radio box.
 * @devices phone, tablet, car
 * @since 8
 */
export declare interface RadioOption {
  /**
   * Radio group name.
   * @devices phone, tablet, car
   * @since 8
   */
  group: string;

  /**
   * Radio name.
   * @devices phone, tablet, car
   * @since 8
   */
  value: string;
}

/**
 * Provides an interface for creating a radio box.
 * @devices phone, tablet, car
 * @since 8
 */
interface Radio extends RadioAttribute<Radio> {
  /**
   * Called when a radio box is created.
   * @devices phone, tablet, car
   * @since 8
   */
  (options: RadioOption): Radio;
}

/**
 * @devices phone, tablet, car
 * @since 8
 */
declare class RadioAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the radio box is selected.
   * @devices phone, tablet, car
   * @since 8
   */
  checked(value: boolean): T;

  /**
   * Called when the radio box selection status changes.
   * @devices phone, tablet, car
   * @since 8
   */
  onChange(callback: (isChecked: boolean) => void): T;
}

export declare class RadioExtend<T> extends RadioAttribute<T> {}
export declare const RadioInterface: Radio;
