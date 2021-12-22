/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Get inspector node infos.
 * @since 7
 * @systemapi
 */
export declare function getInspectorNodes(): object;

/**
 * Get inspector node info by node id.
 * @since 7
 * @systemapi
 */
export declare function getInspectorNodeById(id: number): object;

/**
 * Get inspector info by key.
 * @since 8
 * @systemapi
 */
export declare function getInspectorByKey(key: string): string;

/**
 * Get inspector tree.
 * @systemapi
 * @since 8
 */
export declare function getInspectorTree(): string;

/**
 * Send event to inspector by key. Return false if no inspector with key is found.
 * @since 8
 * @systemapi
 */
export declare function sendEventByKey(key: string, action: number, params: string): boolean;
