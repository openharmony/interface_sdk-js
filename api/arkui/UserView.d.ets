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

/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */
import { __memo_context_type, __memo_id_type, memo } from './stateManagement/runtime';

export type UserViewBuilder = (__memo_context: __memo_context_type, __memo_id: __memo_id_type) => void;

export declare class UserView {
    getBuilder(): UserViewBuilder;
}

export declare class EntryPoint {
    @memo entry(): void;
}