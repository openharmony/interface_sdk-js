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
 * @kit ArkTS
 */

/**
 * The uri module provides utilities for URI resolution and parsing.
 *
 * @namespace uri
 * @syscap SystemCapability.Utils.Lang
 * @since 17
 */
declare namespace uri {
  /**
   * URI Represents a Uniform Resource Identifier (URI) reference.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 17
   * @name URI
   */
  /**
  class URI {
    /**
     * URI constructor, which is used to instantiate a URI object.
     * input: Constructs a URI by parsing a given string.
     *
     * @param { string } input - input input
     * @throws { BusinessError } 10200002 - Invalid input string.
     * @syscap SystemCapability.Utils.Lang
     * @since 17
     */
    constructor(input: string);
    /**
     * Returns the serialized URI as a string.
     *
     * @returns { string } Returns the serialized URI as a string.
     * @syscap SystemCapability.Utils.Lang
     * @since 17     
     */
    toString(): string;

    /**
     * Check whether this URI is equivalent to other URI objects.
     *
     * @param { URI } other - other other URI object to be compared
     * @returns { boolean } boolean Tests whether this URI is equivalent to other URI objects.
     * @syscap SystemCapability.Utils.Lang
     * @since 17
     */
    /**
    equalsTo(other: URI): boolean;

    /**
     * Indicates whether this URI is an absolute URI.
     *
     * @returns { boolean } boolean Indicates whether the URI is an absolute URI (whether the scheme component is defined).
     * @syscap SystemCapability.Utils.Lang
     * @since 17
     */
    checkIsAbsolute(): boolean;

    /**
     * Normalize the path of this URI, It is not safe to call the normalize interface with URI.
     *
     * @returns { URI } URI Used to normalize the path of this URI and return a URI object whose path has been normalized.
     * @syscap SystemCapability.Utils.Lang
     * @since 17
     */
    normalize(): URI;
    /**
     * Searches the query string for the first value with the given key.
     *
     * @param { string } key - Given the first value of the key.
     * @returns { string } Return decoded value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getQueryValue(key: string): string;
    /**
     * Encodes the key and value and then appends the result to the query string.
     *
     * @param { string } [key] - The key it will be encoded with.
     * @param { string } [value] - The value it will be encoded with.
     * @returns { URI } Return URI object.
     * @throws { BusinessError } 10200002 - Invalid input string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    addQueryValue(key: string, value: string): URI;
    /**
     * Returns a set of the unique names of all query parameters.
     *
     * @returns { Array<string> } Return a set of decoded names.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getQueryNames(): Array<string>;
    /**
     * Searches the query string for parameter values with the given key.
     *
     * @param { string } key - The key it will be encoded with.
     * @returns { Array<string> } Return a set of decoded values.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getQueryValues(key: string): Array<string>;
    /**
     * Searches the query string for the first value with the given key and interprets it as a boolean value.
     *
     * @param { string } key - Indicates the key value to be queried.
     * @param { boolean } defaultValue - The default value returned when the key has no query parameters.
     * @returns { boolean } Query with key value returns true, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getBooleanQueryValue(key: string, defaultValue: boolean): boolean;
    /**
     * Clears the the previously set query.
     *
     * @returns { URI } After clearing, return the URI object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    clearQuery(): URI;
    /**
     * Gets the decoded last path segment.
     *
     * @returns { string } Returns the last decoded segment, or null if the path is empty.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getLastSegment(): string;
    /**
     * Gets the decoded path segments.
     *
     * @returns { Array<string> } Return decoded path segments, each without a leading or trailing "/".
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getSegment(): Array<string>;
    /**
     * Encodes the given path segment and appends it to the path.
     *
     * @param { string } [pathSegment] - path segment to be added.
     * @returns { URI } After adding, return the URI object.
     * @throws { BusinessError } 10200002 - Invalid input string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    addSegment(pathSegment: string): URI;
    /**
     * Creates a new Uri by appending an already-encoded path segment to a base Uri.
     *
     * @param { string } encodedPathSegment - Encoding path segment to be added.
     * @returns { URI } After adding, return the URI object.
     * @throws { BusinessError } 10200002 - Invalid input string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    addEncodedSegment(encodedPathSegment: string): URI;
    /**
     * Determine whether URI is hierarchical.
     *
     * @returns { boolean } Return true as Hierarchical, otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    checkHierarchical(): boolean;
    /**
     * Determine whether URI is Opaque.
     *
     * @returns { boolean } Return true as Opaque, otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    checkOpaque(): boolean;
    /**
     * Determine whether URI is Relative.
     *
     * @returns { boolean } Return true as Relative, otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    checkRelative(): boolean;
    /**
     * Creates an opaque Uri from the given components.
     *
     * @param { string } scheme -  of the URI.
     * @param { string } ssp -scheme-specific-part, everything between the scheme separator (':') and the fragment
     * separator ('#'), which will get encoded.
     * @param { string } fragment - fragment, everything after the '#', null if undefined, will get encoded.
     * @returns { URI } Return Uri consisting of a given scheme, SSP, and fragment.
     * @throws { BusinessError } 10200002 - Invalid input string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    static createFromParts(scheme: string, ssp: string, fragment: string): URI;
    /**
     * Gets/Sets the protocol part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    scheme: string;

    /**
     * Gets/Sets Obtains the user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    userInfo: string;

    /**
     * Gets the hostname portion of the URI without a port.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 17
     */
    host: string;

    /**
     * Gets the port portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 17
     */
    port: string;

    /**
     * Gets/Sets the path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    path: string;

    /**
     * Gets/Sets the query portion of the URI
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    query: string;

    /**
     * Gets/Sets the fragment part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    fragment: string;

    /**
     * Gets/Sets the decoding permission component part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    authority: string;

    /**
     * Gets/Sets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    ssp: string;
    /**
     * Gets/Sets Obtains the encoded user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    encodedUserInfo: string;
    /**
     * Gets/Sets the encoded path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    encodedPath: string;
    /**
     * Gets/Sets the encoded query component from this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    encodedQuery: string;
    /**
     * Gets/Sets the encoded fragment part of this URI, everything after the '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    encodedFragment: string;
    /**
     * Gets/Sets the encoded authority part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    encodedAuthority: string;
    /**
     * Gets/Sets the scheme-specific part of this URI, i.e. everything between the scheme separator ':' and
     * the fragment separator '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    encodedSSP: string;
  }
}
export default uri;
