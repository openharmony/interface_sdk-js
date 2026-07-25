'use static';
/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

import { VoidCallback } from './units';

import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { RecordData } from '../../@ohos.base';
import { Builder } from '@ohos.arkui.component';

/**
 * PluginComponentTemplate
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface PluginComponentTemplate {
  /**
   * Defines the plugin source name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  source: string | undefined;
  /**
   * Defines the bundle name of the Template.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  bundleName: string | undefined;
}

/**
 * Define options used to construct a plugin component.
 * AnonyMous Object Rectification
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PluginComponentOptions {
  /**
   * Plugin component template.
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  template: PluginComponentTemplate;
  /**
   * Plugin component data.
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  data: RecordData;
}
/**
 * Data provided when an error occurs.
 * AnonyMous Object Rectification
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PluginErrorData {
  /**
   * Error code.
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  errcode: int;
  /**
   * Error message.
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  msg: string;
}
/**
 * Callback invoked when an error occurs.
 * AnonyMous Object Rectification
 *
 * @param { PluginErrorData } info - Plugin error data
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * Defines the plugin component attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface PluginComponentAttribute extends CommonMethod {
    /**
     * Sets plugin component options.
     *
     * @param { PluginComponentOptions } options - The options
     * @returns { this } PluginComponentAttribute instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
     */
    setPluginComponentOptions(options: PluginComponentOptions): this;

  /**
   * PluginComponent onComplete callback
   * AnonyMous Object Rectification
   *
   * @param { VoidCallback | undefined } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onComplete(callback: VoidCallback | undefined): this;
  /**
   * PluginComponent onError callback
   * AnonyMous Object Rectification
   *
   * @param { PluginErrorCallback | undefined } callback
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onError(callback: PluginErrorCallback | undefined): this;
  /**
   * Set the attribute modifier of PluginComponent Component.
   *
   * @param { AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines PluginComponent Component.
 *
 * @param { PluginComponentOptions } options - The options
 * @returns { PluginComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function PluginComponent(
    options: PluginComponentOptions
): PluginComponentAttribute;

/**
 * Defines PluginComponent Component.It requires call setPluginComponentOptions at start
 * of the component attribute set-up,
 * and it requires call applyAttributeFinish at the end of the component attribute set-up.
 *
 * @param { CustomBuilderT<PluginComponentAttribute> } style - the callback to set up plugincomponent's attributes.
 * @returns { PluginComponentAttribute } The attribute of the PluginComponent.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 */
@Builder
export declare function PluginComponent(
    style: CustomBuilderT<PluginComponentAttribute>
): PluginComponentAttribute;
