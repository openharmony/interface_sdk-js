/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import UIExtensionAbility from './@ohos.app.ability.UIExtensionAbility';

/**
 * EmbeddedUIExtensionAbility为开发者提供了跨进程界面嵌入的能力，继承自
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。
 * 开发者通过实现EmbeddedUIExtensionAbility，为本应用提供跨进程界面嵌入能力。例如，开发者可以在[UIAbility]{@link @ohos.app.ability.UIAbility}的页面中通过
 * [EmbeddedComponent]{@link @internal/component/ets/embedded_component}嵌入本应用的EmbeddedUIExtensionAbility提供的界面。
 * 各类Ability的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。
 * 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中无法被启动。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export default class EmbeddedUIExtensionAbility extends UIExtensionAbility {}