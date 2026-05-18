'use static';
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

import Want from '../../@ohos.app.ability.Want'
import { ComponentBuilder, CustomBuilder } from './builder';
import { Callback, ErrorCallback ,BusinessError} from '../../@ohos.base'
import { AttributeModifier, CommonMethod, TerminationInfo } from './common'
import { EmbeddedType } from './enums'
import { ComponentContent } from '../ComponentContent'
import { VoidCallback } from '../Units'
/**
 * Enumeration of different types of EmbeddedDpiFollowStrategy.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare enum EmbeddedDpiFollowStrategy {
    /**
     * Follow the host application's DPI configuration.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HOST_DPI = 0,

    /**
     * Follow the EmbeddedUIExtensionAbility's DPI configuration.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1,
}

/**
* Enumeration of different types of EmbeddedWindowModeFollowStrategy.
*
* @enum { int }
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @since 26.0.0 static
*/
declare enum EmbeddedWindowModeFollowStrategy {
    /**
     * Follow the host application's window mode configuration.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HOST_WINDOW_MODE = 0,

    /**
     * Follow the host EmbeddedUIExtensionAbility's window mode configuration.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1,
}

/**
* This interface is used to set the options for EmbeddedComponentAttribute during construction
*
* @interface EmbeddedOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @since 26.0.0 static
*/
declare interface EmbeddedOptions {
    /**
     * Set placeholder.
     * If set placeholder ComponentContent, show placeholder node when connection is not established.
     *
     * @type { ?ComponentContent }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    placeholder?: ComponentContent;

    /**
     * Set Areachange placeholder.
     * If the Areachange placeholder is set, the placeholder node is displayed until
     * the EmbeddedComponent size change is complete.
     * @type { ?Record<string, ComponentContent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    areaChangePlaceholder?: Record<string, ComponentContent>;

    /**
     * Set EmbeddedComponent Content Dpi Follow Strategy.
     * @type { ?EmbeddedDpiFollowStrategy }
     * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

    /**
     * Set EmbeddedComponent Content Window Mode Follow Strategy.
     * @type { ?EmbeddedWindowModeFollowStrategy }
     * @default EmbeddedWindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    windowModeFollowStrategy?: EmbeddedWindowModeFollowStrategy;
}

/**
 * Define the attribute functions of EmbeddedComponent.
 *
 * @extends CommonMethod
 * @typedef EmbeddedComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare interface EmbeddedComponentAttribute extends CommonMethod {
  /**
   * Called when the provider of the embedded UI is terminated.
   *
   * @param { Callback<TerminationInfo> | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTerminated(callback: Callback<TerminationInfo> | undefined): this;
  
  /**
   * Called when some error occurred.
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onError(callback: ErrorCallback<BusinessError> | undefined): this;

  /**
   * Set attributeModifier.
   *
   * @param { AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * Callback called when the EmbeddedUIExtensionAbility draw the first frame.
   *
   * @param { VoidCallback | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDrawReady(callback: VoidCallback | undefined): this;
}

/**
 * Defines EmbeddedComponent Component.
 *
 * @param { Want } loader - indicates initialization parameter.
 * @param { EmbeddedType } [type] - indicates type of the EmbeddedComponent.
 * @returns { EmbeddedComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function EmbeddedComponent(
    loader: Want, type?: EmbeddedType, options?: EmbeddedOptions
): EmbeddedComponentAttribute
