/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * ActionExtensionAbility是为开发者提供的自定义操作业务模板，继承自
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。
 * 
 * 开发者通过实现ActionExtensionAbility，为其他应用提供内容查看与处理功能。例如，开发者使用ActionExtensionAbility实现了文本翻译功能。其他应用可以通过调用该
 * ActionExtensionAbility来处理需要翻译的内容，并获取到处理后的翻译内容。
 * 
 * 各类Ability的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export default class ActionExtensionAbility extends UIExtensionAbility {}