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

import { CommonMethod, Resource } from "./common";

/**
 * Display items.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class OptionExtend<T> extends OptionAttribute<T> {
}

/**
 * Provides the interface for displaying the content.
 * @devices phone, tablet, car.
 * @since 7
 */
interface Option extends OptionAttribute<Option> {
  /**
   * Called when the content needs to be displayed.
   * @devices phone, tablet, car.
   * @since 7
   */
  (content?: string | Resource): Option;
}

/**
 * Declare option properties.
 * @devices phone, tablet, car.
 * @since 7
 */
declare class OptionAttribute<T> extends CommonMethod<T> {
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const OptionInterface: Option;