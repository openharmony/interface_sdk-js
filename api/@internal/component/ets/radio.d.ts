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
 * Provides an interface for creating a radio box.
 * @since 8
 */
interface Radio extends RadioAttribute<Radio> {
  /**
   * Called when a radio box is created.
   * @since 8
   */
  (options: { value: string }): Radio;
}

/**
 * @since 8
 */
declare class RadioAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the radio box is selected.
   * @since 8
   */
  checked(value: boolean): T;

  /**
   * Called when the radio box selection status changes.
   * @since 8
   */
  onChange(callback: (isChecked: boolean) => void): T;
}

export declare class RadioExtend<T> extends RadioAttribute<T> {}
export declare const RadioInterface: Radio;
