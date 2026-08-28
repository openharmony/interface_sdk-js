'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * decodeURI()函数用于解码由encodeURI()或类似方法
 * 创建的统一资源标识符（URI）。
 *
 * @param { string } uri - 需要解码的URI字符串。
 * @returns { string } 解码后的URI。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function decodeURI(uri: string): string;

/**
 * encodeURI()函数对URI进行编码，
 * 将其中的某些字符各自替换为一个、两个、三个或四个转义序列，
 * 这些转义序列表示该字符的UTF-8编码（仅当字符由两个
 * 代理项字符组成时，才会是四个转义
 * 序列）。与encodeURIComponent()相比，该函数
 * 编码的字符更少，会保留属于
 * URI语法组成部分的字符。
 *
 * @param { string } uri - 需要编码的URI。
 * @returns { string } 编码后的结果。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function encodeURI(uri: string): string;

/**
 * decodeURIComponent()函数用于解码由
 * encodeURIComponent()或类似方法创建的
 * 统一资源标识符（URI）组成部分。
 *
 * @param { string } uriComponent - 需要解码的URI。
 * @returns { string } 解码后的URI组成部分。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function decodeURIComponent(uriComponent: string): string;

/**
 * encodeURIComponent()函数对URI进行编码，
 * 将其中的某些字符各自替换为一个、两个、三个或四个
 * 转义序列，这些转义序列表示该字符的UTF-8编码
 * （仅当字符由两个代理项字符组成时，才会是
 * 四个转义序列）。与encodeURI()相比，该函数
 * 编码的字符更多，包括属于URI语法
 * 组成部分的字符。
 *
 * @param { string | double | boolean } uriComponent - 待编码为URI
 *     组成部分的字符串（如路径、查询字符串、片段
 *     等）。其他类型的值会被转换为字符串。
 * @returns { string } 新字符串，表示编码为URI组成部分后的
 *     uriComponent。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function encodeURIComponent(uriComponent: string | double | boolean): string;

/**
 * 该特性已不再推荐使用。尽管某些
 * 浏览器仍可能支持它，但它可能已从
 * 相关Web标准中移除、正在被
 * 废弃，或仅为兼容性目的而保留。请避免
 * 使用它，并在可能的情况下更新现有代码；请参阅
 * 本页底部的兼容性表格以辅助您做出
 * 决策。请注意，该特性可能随时失效。
 * escape()是由浏览器实现的非标准函数，
 * 仅为跨引擎兼容性而被标准化。并非所有
 * JavaScript引擎都必须实现该函数，因此它可能无法
 * 在所有环境中工作。如有可能，请改用encodeURIComponent()或encodeURI()
 * 替代。
 *
 * @param { string } str - 待编码的字符串。
 * @returns { string } 新字符串，其中某些字符已
 *     被替换为十六进制转义序列。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function escape(str: string): string;

/**
 * 该特性已不再推荐使用。尽管某些
 * 浏览器仍可能支持它，但它可能已从
 * 相关Web标准中移除、正在被
 * 废弃，或仅为兼容性目的而保留。请避免
 * 使用它，并在可能的情况下更新现有代码；请参阅
 * 本页底部的兼容性表格以辅助您做出
 * 决策。请注意，该特性可能随时失效。
 * unescape()是由浏览器实现的非标准函数，
 * 仅为跨引擎兼容性而被标准化。并非所有
 * JavaScript引擎都必须实现该函数，因此它可能无法
 * 在所有环境中工作。如有可能，请改用decodeURIComponent()或decodeURI()
 * 替代。
 *
 * @param { string } str - 待解码的字符串。
 * @returns { string } 新字符串，其中的十六进制转义
 *     序列已被替换为它们所表示的字符。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function unescape(str: string): string;
