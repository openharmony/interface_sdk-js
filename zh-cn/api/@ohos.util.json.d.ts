/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * JSON模块提供了一系列API，用于将JSON文本转换为JSON对象或值，以及将对象转换为JSON文本。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace json {
  /**
   * 定义转换结果函数的类型。
   *
   * 当作为[JSON.parse]{@link json.parse}的参数时，对象的每个成员都会调用此函数，可在解析期间进行自定义数据处理或转换。
   *
   * 当作为
   * [JSON.stringify]{@link json.stringify(value: Object, replacer?: Transformer, space?: string | number)}的参数时，
   * 在序列化期间用于转换和处理每个属性。
   *
   * @param { Object } this - 待解析键值对所属的对象。
   * @param { string } key - 待解析的键。
   * @param { Object } value - 键对应的值。
   * @returns { Object | undefined | null } 返回Object、undefined或null值。
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12 dynamiconly
   */
  type Transformer = (this: Object, key: string, value: Object) => Object | undefined | null;

  /**
   * 将JSON字符串解析为ArkTS对象或null。
   *
   * @param { string } text - 有效的JSON字符串。
   * @param { Transformer } [reviver] - 转换函数，可用于修改解析后生成的值。默认值为undefined。
   * @param {ParseOptions} options - 解析选项，用于控制解析结果的类型。默认值为undefined。
   * @returns { Object | null } 返回与JSON文本对应的Object、数组、字符串、数字、布尔值或null值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function parse(text: string, reviver?: Transformer, options?: ParseOptions): Object | null;

  /**
   * 将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。
   *
   * @param { Object } value - ArkTS对象或数组。对于容器，支持线性容器，但不支持非线性容器。
   * @param { (number | string)[] | null } [replacer] - 如果传入数组，则只序列化数组中包含的键到最终的JSON字符串中。如果传入null，则序列化对象的所有键。默认值为undefined。
   * @param { string | number } [space] - 为提高可读性，添加到输出JSON字符串中的空白或字符串。如果是数字，表示缩进的空格数；如果是字符串，表示缩进字符。如果不提供参数，则没有缩进。默认值为空字符串。
   * @returns { string } 返回JSON文本。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string;

  /**
   * 将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。
   *
   * @param { Object } value - ArkTS对象或数组。对于容器，支持线性容器，但不支持非线性容器。
   * @param { Transformer } [replacer] - 序列化期间，序列化值的每个键都由此函数转换和处理。默认值为undefined。
   * @param { string | number } [space] - 为提高可读性，添加到输出JSON字符串中的缩进、空白或换行字符。如果是数字，表示作为缩进的空格字符数。如果是字符串，该字符串将插入到输出JSON字符串之前。如果传入null，不使用任何空白字符。默认值为空字符串。
   * @returns { string } 返回JSON文本。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function stringify(value: Object, replacer?: Transformer, space?: string | number): string;

  /**
   * 检查ArkTS对象中是否包含某个键。此API可用于[JSON.parse]{@link json.parse}解析JSON字符串后的相关操作。仅支持最外层为字典格式（大括号而非中括号）的有效JSON字符串。
   *
   * @param { object } obj - ArkTS对象。
   * @param { string } property - 待检查的键。
   * @returns { boolean } 如果对象中包含该键返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function has(obj: object, property: string): boolean;

  /**
   * 从ArkTS对象中删除一个键。此API可用于[JSON.parse]{@link json.parse}解析JSON字符串后的相关操作。仅支持最外层为字典格式（大括号而非中括号）的有效JSON字符串。
   *
   * @param { object } obj - ArkTS对象。
   * @param { string } property - 待删除的键。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function remove(obj: object, property: string): void;

  /**
   * 枚举BigInt的处理模式。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  const enum BigIntMode {
    /**
     * 不支持BigInt。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    DEFAULT = 0,
    /**
     * 将小于-(2^53-1)或大于(2^53-1)的整数解析为BigInt。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    PARSE_AS_BIGINT = 1,
    /**
     * 将所有整数解析为BigInt。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    ALWAYS_PARSE_AS_BIGINT = 2
  }

  /**
   * 描述解析选项，可定义BigInt的处理模式。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface ParseOptions {
    /**
     * BigInt的处理模式。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    bigIntMode: BigIntMode;
  }
}

export default json;
