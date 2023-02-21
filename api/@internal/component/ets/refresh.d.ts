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
 * The refresh status of the drop-down refresh.
 * @since 8
 */
declare enum RefreshStatus {
  /**
   * The refresh status of the drop-down refresh.
   * @since 8
   */
  Inactive,

  /**
   * Drop down, but the drop-down distance is less than the refresh distance.
   * @since 8
   */
  Drag,

  /**
   * The pull-down exceeds the refresh distance.
   * @since 8
   */
  OverDrag,

  /**
   * After the pull-down, it rebounds to the refresh distance and enters the refresh state.
   * @since 8
   */
  Refresh,

  /**
   * After refresh, return to the initial state.
   * @since 8
   */
  Done,
}

/**
 * Provides a pull-down refresh interface.
 * @since 8
 */
interface RefreshInterface {
  /**
   * Called when the drop-down refresh is set.
   * @since 8
   */
  (value: {
    /**
     * Whether the current component is being refreshed.
     * This parameter supports $$ for two-way binding of variables.
     * @type {boolean}
     * @since 8
     */
    refreshing: boolean;
    /**
     * Distance to the top of the parent component from the <Refresh> component that
     * comes to rest after a successful pull-down gesture. Default value: 16, in vp
     * @type {number | string}
     * @since 8
     */
    offset?: number | string;
    /**
     * Coefficient of friction, which indicates the <Refresh> component's sensitivity to the pull-down gesture.
     * The value ranges from 0 to 100. Default value: 62
     *   - 0 indicates that the <Refresh> component is not sensitive to the pull-down gesture.
     *   - 100 indicates that the <Refresh> component is highly sensitive to the pull-down gesture.
     *   - A larger value indicates a more sensitive response of the <Refresh> component to the pull-down gesture.
     * @type {number | string}
     * @since 
8     */
    friction?: number | string;
    /**
     * Custom component to display during dragging.
     * @type {CustomBuilder}
     * @since 10
     */
    builder?: CustomBuilder }): RefreshAttribute;
}

/**
 * Defines the refresh attribute functions.
 * @since 8
 */
declare class RefreshAttribute extends CommonMethod<RefreshAttribute> {
  /**
   * Called when the refresh state changes.
   * @since 8
   */
  onStateChange(callback: (state: RefreshStatus) => void): RefreshAttribute;

  /**
   * Called when the refresh state is entered.
   * @since 8
   */
  onRefreshing(callback: () => void): RefreshAttribute;
}

declare const Refresh: RefreshInterface;
declare const RefreshInstance: RefreshAttribute;
