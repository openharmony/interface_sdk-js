/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AccessibilityKit
 */

/**
 * @namespace config
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
declare namespace config {
  /**
   * permission tag is missing
   *
   * @throws { BusinessError } 201 - Permission verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  function enableAbility(): void;
}