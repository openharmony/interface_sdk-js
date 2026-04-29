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
 * @kit AbilityKit
 */

import CompletionHandler from './@ohos.app.ability.CompletionHandler';

/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * OpenLinkOptions可以作为[openLink()]{@link ./application/UIAbilityContext:UIAbilityContext.openLink}的入参，用于标识是否仅打开
 * AppLinking和传递键值对可选参数。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export default interface OpenLinkOptions {
  /**
   * 表示是否必须以<!--RP1-->[AppLinking](docroot://application-models/app-linking-startup.md)<!--RP1End-->的方式启动UIAbility。
   * 
   * - 取值为true时，如果不存在与AppLinking相匹配的UIAbility，直接返回。
   * - 取值为false时，如果不存在与AppLinking相匹配的UIAbility，AppLinking会退化为
   * [DeepLinking](docroot://application-models/deep-linking-startup.md)。默认值为false。
   * 
   * aa命令隐式拉起Ability时可以通过设置"--pb appLinkingOnly true/false"以AppLinking的方式进行启动。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  appLinkingOnly?: boolean;

  /**
   * 表示WantParams参数。
   * 
   * **说明**：具体使用规则请参考[want]{@link @ohos.app.ability.Want:Want}中的parameters属性。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  parameters?: Record<string, Object>;

  /**
   * 表示WantParams参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  parameters?: Record<string, RecordData>;

  /**
   * 拉起应用结果的操作类，用于处理拉起应用的结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  completionHandler?: CompletionHandler;

  /**
   * 表示[Deep Linking](docroot://application-models/deep-linking-startup.md)找不到应用时是否显示“暂无可用打开方式”的弹窗。
   * 
   * - 取值为true时，不显示“暂无可用打开方式”的弹窗。
   * - 取值为false时，显示“暂无可用打开方式”的弹窗。默认值为false。
   * 
   * **说明**：appLinkingOnly字段为true时不会触发Deep Linking流程，该字段不会生效。
   *
   * @default { false }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  hideFailureTipDialog?: boolean;
}