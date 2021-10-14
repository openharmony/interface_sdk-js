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

import {CommonMethod} from "./common";

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class CounterExtend<T> extends CounterAttribute<T> {
}

/**
 * Counter component, which provides corresponding increment or decrement counting operations.
 * @devices phone, tablet, car.
 * @since 7
 */
interface Counter extends CounterAttribute<Counter> {
  /**
   * Return Counter.
   * @devices phone, tablet, car.
   * @since 7
   */
  (): Counter;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class CounterAttribute<T> extends CommonMethod<T> {
  /**
   * Listens to the value change event.
   * @devices phone, tablet, car.
   * @since 7
   */
  onStateChange(event: () => void): T;

  /**
   * Listen to the event that the value increases.
   * @devices phone, tablet, car.
   * @since 7
   */
  onInc(event: () => void): T;

  /**
   * Listens to the number decrease event.
   * @devices phone, tablet, car.
   * @since 7
   */
  onDec(event: () => void): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const CounterInterface: Counter;
