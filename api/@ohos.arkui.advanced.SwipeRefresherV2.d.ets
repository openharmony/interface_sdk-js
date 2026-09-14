/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * The **SwipeRefresherV2** component is used to implement the pull-to-refresh feature. It supports custom loading 
 * prompt text and loading state control, and is suitable for scenarios where pull-to-refresh interaction needs to be 
 * implemented on a page.
 * 
 * This component is implemented based on 
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). It 
 * provides developers with a standardized pull-to-refresh UI and simplifies the implementation of refresh logic. 
 * Compared with 
 * [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), state 
 * management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no longer 
 * limited to the component level. Developers can more flexibly control the data and state of content loading, achieving
 * more efficient UI refresh.
 * 
 * > **NOTE**
 * >
 * > - This component can only be used in the stage model.
 * >
 * > - If [universal attributes]{@link CommonMethod} and 
 * > [universal events]{@link CommonMethod} are set for **SwipeRefresherV2**, the compilation 
 * > toolchain will generate an additional node \_\_Common\_\_ and mount the universal attributes or universal events on
 * > \_\_Common\_\_, rather than directly applying them to **SwipeRefresherV2** itself. This may cause the set universal
 * > attributes or universal events to not take effect or behave unexpectedly. Therefore, it is not recommended to set 
 * > universal attributes and universal events on **SwipeRefresherV2**.
 *
 * @struct { SwipeRefresherV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct SwipeRefresherV2 {
  /**
   * Text displayed when content is loading.
   * 
   * Default value: an empty string.
   * 
   * **Note:** If the text is wider than the column, it is truncated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  content?: ResourceStr;

  /**
   * Whether the content is currently being loaded.
   * 
   * **true**: The content is being loaded.
   * 
   * **false**: The content is not being loaded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Require
  @Param
  isLoading: boolean;
}
