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
 * The decodeURI() function decodes a Uniform Resource Identifier
 * (URI) previously created by encodeURI() or a similar routine.
 *
 * @param { string } uri - The URI string that needs to be decoded
 * @returns { string } The decoded URI
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function decodeURI(uri: string): string;

/**
 * The encodeURI() function encodes a URI by replacing each instance
 * of certain characters by one, two, three, or four escape sequences
 * representing the UTF-8 encoding of the character (will only be four
 * escape sequences for characters composed of two surrogate
 * characters). Compared to encodeURIComponent(), this function
 * encodes fewer characters, preserving those that are part of the
 * URI syntax.
 *
 * @param { string } uri - URI that needs to be encoded
 * @returns { string } The encoded result
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function encodeURI(uri: string): string;

/**
 * The decodeURIComponent() function decodes a Uniform Resource
 * Identifier (URI) component previously created
 * by encodeURIComponent() or by a similar routine.
 *
 * @param { string } uriComponent - URI that needs to be decoded
 * @returns { string } The decoded URI component
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function decodeURIComponent(uriComponent: string): string;

/**
 * The encodeURIComponent() function encodes a URI by replacing each
 * instance of certain characters by one, two, three, or four escape
 * sequences representing the UTF-8 encoding of the character (will
 * only be four escape sequences for characters composed of two
 * surrogate characters). Compared to encodeURI(), this function
 * encodes more characters, including those that are part of the URI
 * syntax.
 *
 * @param { string | double | boolean } uriComponent - a string to be
 *     encoded as a URI component. (a path, query string, fragment,
 *     etc.). Other values are converted to strings.
 * @returns { string } A new string representing the provided
 *     uriComponent encoded as a URI component.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function encodeURIComponent(uriComponent: string | double | boolean): string;

/**
 * This feature is no longer recommended. Though some
 * browsers might still support it, it may have already been removed
 * from the relevant web standards, may be in the process of being
 * dropped, or may only be kept for compatibility purposes. Avoid
 * using it, and update existing code if possible; see the
 * compatibility table at the bottom of this page to guide your
 * decision. Be aware that this feature may cease to work at any time.
 * escape() is a non-standard function implemented by browsers
 * and was only standardized for cross-engine compatibility. It is not
 * required to be implemented by all JavaScript engines and may not
 * work everywhere. Use encodeURIComponent() or encodeURI() if
 * possible.
 *
 * @param { string } str - a string to be encoded
 * @returns { string } a new string in which certain characters have
 *     been replaced by hexadecimal escape sequences.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function escape(str: string): string;

/**
 * This feature is no longer recommended. Though some
 * browsers might still support it, it may have already been removed
 * from the relevant web standards, may be in the process of being
 * dropped, or may only be kept for compatibility purposes. Avoid
 * using it, and update existing code if possible; see the
 * compatibility table at the bottom of this page to guide your
 * decision. Be aware that this feature may cease to work at any time.
 * unescape() is a non-standard function implemented by browsers
 * and was only standardized for cross-engine compatibility. It is not
 * required to be implemented by all JavaScript engines and may not
 * work everywhere. Use decodeURIComponent() or decodeURI() if
 * possible.
 *
 * @param { string } str - a string to be decoded
 * @returns { string } a new string in which hexadecimal escape
 *     sequences are replaced with the characters that they represent.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export function unescape(str: string): string;
