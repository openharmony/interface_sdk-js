/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import lang from '../../arkts/@arkts.lang';

/**
 * SendableContext complies with the [Sendable protocol](docroot://arkts-utils/arkts-sendable.md#sendable-protocol) and
 * inherits from [lang.ISendable](docroot://reference/apis-arkts/js-apis-arkts-lang.md#langisendable).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
interface SendableContext extends lang.ISendable {}