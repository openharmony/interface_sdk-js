/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * The swipe refresher is a component used to obtain and load content, typically with a pull-down gesture.
 *
 * > **NOTE**
 * >
 * > - This component and its child components are supported since API version 10. Updates will be marked with a
 * > superscript to indicate their
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **SwipeRefresher** component has [universal attributes]{@link CommonMethod} and
 * > [universal events]{@link CommonMethod} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **SwipeRefresher** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **SwipeRefresher** component.
 *
 * The [universal events]{@link CommonMethod} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct SwipeRefresher {
  /**
   * Text displayed when the content is loaded.
   *
   * The default value is an empty string.
   *
   * **NOTE**
   *
   * If the text length exceeds the column width, it will be truncated. The Resource type is supported since API version
   * 20.
   *
   * @type { string } [since 10 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop content?: ResourceStr;

  /**
   * Whether content is being loaded.
   *
   * **true**: yes
   *
   * **false**: no
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop isLoading: boolean;
}