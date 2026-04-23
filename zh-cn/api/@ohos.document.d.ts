/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';

/**
 * document
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 6
 * @deprecated since 9
 */
declare namespace document {

  export { choose };

  export { show };
}

/**
 * 通过文件管理器选择文件，异步返回文件URI，使用promise形式返回结果。
 *
 * @param { string[] } types - 限定文件选择的类型
 * @returns { Promise<string> } 异步返回文件URI（注：当前返回错误码）
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 6
 * @deprecated since 9
 */
declare function choose(types?: string[]): Promise<string>;

/**
 * 通过文件管理器选择文件，异步返回文件URI，使用callback形式返回结果。
 *
 * @param { AsyncCallback<string> } [callback] - 异步获取对应文件URI（注：当前返回错误码）
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 6
 * @deprecated since 9
 */
declare function choose(callback: AsyncCallback<string>): void;

/**
 * 通过文件管理器选择文件，异步返回文件URI，使用callback形式返回结果。
 *
 * @param { string[] } types - 限定选择文件的类型
 * @param { AsyncCallback<string> } [callback] - 异步获取对应文件URI（注：当前返回错误码）
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 6
 * @deprecated since 9
 */
declare function choose(types: string[], callback: AsyncCallback<string>): void;

/**
 * 异步打开URI对应的文件，使用promise形式返回结果。
 *
 * @param { string } uri - 待打开的文件URI
 * @param { string } type - 待打开文件的类型
 * @returns { Promise<void> } Promise回调返回void表示成功打开文件（注：当前返回错误码）
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 6
 * @deprecated since 9
 */
declare function show(uri: string, type: string): Promise<void>;

/**
 * 异步打开URI对应的文件，使用callback形式返回结果。
 *
 * @param { string } uri - 待打开的文件URI
 * @param { string } type - 待打开文件的类型
 * @param { AsyncCallback<void> } [callback] - 异步打开uri对应文件（注：当前返回错误码）
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 6
 * @deprecated since 9
 */
declare function show(uri: string, type: string, callback: AsyncCallback<void>): void;

export default document;