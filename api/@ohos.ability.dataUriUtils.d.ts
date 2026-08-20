/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * The DataUriUtils module provides APIs to process URI objects. You can use the APIs to attach an ID to the end of a
 * given URI and obtain, delete, or update the ID attached to the end of a given URI.
 *
 * > **NOTE**
 * >
 * > The APIs of this module are supported since API version 7 and deprecated since API version 9. You are advised to
 * > use [@ohos.app.ability.dataUriUtils]{@link @ohos.app.ability.dataUriUtils:dataUriUtils} instead. Newly added APIs
 * > will be marked with a superscript to indicate their earliest API version.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.app.ability.dataUriUtils:dataUriUtils
 */
declare namespace dataUriUtils {
  /**
   * Obtains the ID attached to the end of a given URI.
   *
   * @param { string } uri - Target URI object.
   * @returns { number } ID obtained.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.app.ability.dataUriUtils:dataUriUtils.getId
   */
  function getId(uri: string): number;

  /**
   * Attaches an ID to the end of a given URI.
   *
   * @param { string } uri - Target URI object.
   * @param { number } id - ID to be attached.
   * @returns { string } URI object with the ID attached.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.app.ability.dataUriUtils:dataUriUtils.attachId
   */
  function attachId(uri: string, id: number): string;

  /**
   * Deletes the ID from the end of a given URI.
   *
   * @param { string } uri - URI object from which the ID is to be deleted.
   * @returns { string } URI object with the ID deleted.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.app.ability.dataUriUtils:dataUriUtils.deleteId
   */
  function deleteId(uri: string): string;

  /**
   * Updates the ID in a given URI.
   *
   * @param { string } uri - Target URI object.
   * @param { number } id - New ID.
   * @returns { string } URI object with the new ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.app.ability.dataUriUtils:dataUriUtils.updateId
   */
  function updateId(uri: string, id: number): string;
}

export default dataUriUtils;