/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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


// HADWRITTEN, DO NOT REGENERATE

/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'

/**
 * declare ForEachAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface ForEachAttribute {}

/**
 * Defines ForEach Component.
 *
 * @param { Array<T> } arr
 * @param { function } itemGenerator
 * @param { function } keyGenerator
 * @returns { ForEachAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@memo
@ComponentBuilder
export declare function ForEach<T>(arr: Array<T>,
    @memo
    itemGenerator: (item: T, index: number) => void,
    keyGenerator?: (item: T, index: number) => string,
): ForEachAttribute