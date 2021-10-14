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
 * The refresh status of the drop-down refresh.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum RefreshStatus {
  /**
   * The refresh status of the drop-down refresh.
   * @devices phone, tablet, car.
   * @since 7
   */
  Inactive,

  /**
   * Drop down, but the drop-down distance is less than the refresh distance.
   * @devices phone, tablet, car.
   * @since 7
   */
  Drag,

  /**
   * The pull-down exceeds the refresh distance.
   * @devices phone, tablet, car.
   * @since 7
   */
  OverDrag,

  /**
   * After the pull-down, it rebounds to the refresh distance and enters the refresh state.
   * @devices phone, tablet, car.
   * @since 7
   */
  Refresh,

  /**
   * After refresh, return to the initial state.
   * @devices phone, tablet, car.
   * @since 7
   */
  Done,
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class RefreshExtend<T> extends RefreshAttribute<T> {
}

/**
 * Provides a pull-down refresh interface.
 * @devices phone, tablet, car.
 * @since 7
 */
interface Refresh extends RefreshAttribute<Refresh> {
  /**
   * Called when the drop-down refresh is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  (value: {refreshing: boolean,offset?: number | string,friction?: number | string }): Refresh;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class RefreshAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the refresh state changes.
   * @devices phone, tablet, car.
   * @since 7
   */
  onStateChange(callback: (state: RefreshStatus) => void): T;

  /**
   * Called when the refresh state is entered.
   * @devices phone, tablet, car.
   * @since 7
   */
  onRefreshing(callback: () => void): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const RefreshInterface: Refresh;
