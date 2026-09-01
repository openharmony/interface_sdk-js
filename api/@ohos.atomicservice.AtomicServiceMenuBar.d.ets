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
 * ###### Child Components
 *
 * Not supported
 *
 * ###### Attributes
 *
 * The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file System API
 * @kit ArkUI
 */

/**
 * Creates an **AtomicServiceMenuBar** object based on the context of the current atomic service. The object is used to
 * control the display of the menu function capsule in the upper right corner.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamiconly
 */
export declare class AtomicServiceMenuBar {
  /**
   * A constructor used to create an **AtomicServiceMenuBar** object.
   *
   * @param { UIContext } uiContext - Context information of the current atomic service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  constructor(uiContext: UIContext);

  /**
   * Sets whether to display or hide the menu function capsule of the current atomic service.
   *
   * @param { boolean } visible - Expected status of the menu function capsule. true: The menu function capsule is
   *     displayed. false: The menu function capsule is hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  public setVisible(visible: boolean): void;
}