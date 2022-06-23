/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * PluginComponentTemplate
 * @since 9
 * @systemapi Hide this for inner system use.
 */
interface PluginComponentTemplate {
  /**
   * Defines the plugin source name.
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  source: string;
  /**
   * Defines the ability name.
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  ability: string;
}

/**
 * Provides plugin component.
 * @since 9
 * @systemapi Hide this for inner system use.
 */
interface PluginComponentInterface {
  /**
   * Called when setting the plugin.
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  (value: { template: PluginComponentTemplate; data: any }): PluginComponentAttribute;
}

/**
 * Defines the plugin component attibute functions.
 * @since 9
 * @systemapi Hide this for inner system use.
 */
declare class PluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * pluginComponent onComplete callback,
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  onComplete(callback: () => void): PluginComponentAttribute;

  /**
   * pluginComponent onError callback,
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  onError(callback: (info: { errcode: number; msg: string }) => void): PluginComponentAttribute;
}

declare const PluginComponent: PluginComponentInterface;
declare const PluginComponentInstance: PluginComponentAttribute;
