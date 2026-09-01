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
 播控扩展能力
 * @file
 播控扩展能力
 * @kit AVSessionKit
 */

import UIExtensionAbility from './@ohos.app.ability.UIExtensionAbility';

/**
 * MediaControlExtensionAbility模块提供播放控制的扩展能力，继承自
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}，无其他新增接口。在实际开发时，需要开发者实现父类中的接口，使用
 * UIExtension的生命周期和能力，不支持直接实例化基类。
 *
 * @extends UIExtensionAbility
 * @syscap SystemCapability.Multimedia.AVSession.Core
 * @systemapi
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
export default class MediaControlExtensionAbility extends UIExtensionAbility {}