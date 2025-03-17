/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
import { CommonMethod} from './@ohos.arkui.component.Common'
import Want from './@ohos.app.ability.Want'
import { Callback, ErrorCallback,BusinessError } from '../api/@ohos.base'
import { EmbeddedType } from './@ohos.arkui.component.Enums'

/**
 * Provide an interface for the EmbeddedComponent, which is used
 * <br/>to render UI asynchronously
 *
 * @interface EmbeddedComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export type EmbeddedComponentInterface = (loader: Want,type: EmbeddedType)=> EmbeddedComponentAttribute

/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export interface TerminationInfo {
  /**
   * Defines the termination code.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
   code: number;

  /**
   * Defines the additional termination information.
   *
   * @type { ?import('../api/@ohos.app.ability.Want').default }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
   want?: Want;
}

/**
 * Define the attribute functions of EmbeddedComponent.
 *
 * @extends CommonMethod<EmbeddedComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare class EmbeddedComponentAttribute extends CommonMethod<EmbeddedComponentAttribute> {
  /**
   * Called when the provider of the embedded UI is terminated.
   *
   * @param { import('../api/@ohos.base').Callback<TerminationInfo> } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onTerminated(callback: Callback<TerminationInfo>): EmbeddedComponentAttribute;

  /**
   * Called when some error occurred.
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onError(callback: ErrorCallback<BusinessError>): EmbeddedComponentAttribute;
}

/**
 * Defines EmbeddedComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare const EmbeddedComponent: EmbeddedComponentInterface;

/**
 * Defines EmbeddedComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare const EmbeddedComponentInstance: EmbeddedComponentAttribute;
