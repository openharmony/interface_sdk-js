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
 * 本模块提供了将JSON文本转换为JSON对象或值，以及将对象转换为JSON文本等功能。模块基于标准JSON规范实现解析与序列化，
 * 通过Transformer机制支持自定义转换，通过BigIntMode策略解决BigInt兼容问题，并提供has/remove操作便于对解析结果进行属性查询与删除。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace json {
  /**
   * 用于转换结果的函数类型。
   * 作为[JSON.parse]{@link json.parse}函数的参数时，解析结果中的每个键值对按深度优先顺序（从最内层节点开始，逐层向外）依次调用此函数，
   * this指向当前键值对所属的对象，返回值替换原始值，若返回undefined则该属性将被删除。
   * 作为[JSON.stringify]{@link json.stringify(value: Object, replacer?: Transformer, space?: string | number)}函数的参数时，
   * 序列化引擎会按从外到内的顺序对每个属性调用该函数处理，this指向当前属性所属的对象，返回值作为序列化结果。
   *
   * @param { Object } this - 正在解析或序列化的键值对所属的对象。
   * @param { string } key - 当前正在处理的对象成员的属性名，用于在转换函数中识别所解析或序列化的键。
   * @param { Object } value - 正在解析或序列化的键值对的值。
   * @returns { Object | undefined | null } 返回转换处理后的属性值；返回undefined时，该属性在结果中被移除；返回null时，该属性值设为null。
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12 dynamiconly
   */
  type Transformer = (this: Object, key: string, value: Object) => Object | undefined | null;

  /**
   * 解析JSON字符串生成ArkTS对象或null。解析过程中，每个键值对按从最内层到最外层的顺序依次经过reviver函数处理，返回值替换原始值；
   * 当传入ParseOptions指定BigIntMode时，符合条件的整数将被解析为BigInt；当入参字符串为'null'时返回null。
   *
   * @param { string } text - 有效的JSON字符串，需符合JSON语法规范。
   * @param { Transformer } [reviver] - 转换函数，用于修改解析生成的原始值；当需要对解析结果进行自定义转换时使用。默认值是undefined。
   * @param {ParseOptions} options - 解析的配置选项，用于控制解析生成的类型。默认值是undefined。
   * @returns { Object | null } 当传入的字符串为'null'时，返回null。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function parse(text: string, reviver?: Transformer, options?: ParseOptions): Object | null;

  /**
   * 该方法将一个ArkTS对象或数组转换为JSON字符串，支持线性容器的转换，不支持非线性容器（传入非线性容器时无法正确序列化）。
   *
   * @param { Object } value - ArkTS对象或数组，支持线性容器的转换，不支持非线性容器。
   * @param { (number | string)[] | null } [replacer] - 用于筛选序列化属性。当参数为string[]时，只有包含在该数组中的对象属性名才会被序列化；
   *     当参数为number[]时，只有对应索引的数组元素才会被序列化；当参数为null或者未提供时，则对象所有的属性都会被序列化。默认值是undefined。
   * @param { string | number } [space] - 指定缩进用的空格或字符串，用于美化输出。当参数是数字时表示缩进空格数，取值需为非负整数；当参数是字符串时表示缩进字符；无参数则无缩进。默认值是空字符串。
   * @returns { string } 表示对象或数组经序列化处理后生成的JSON格式文本字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string;

  /**
   * 该方法将一个ArkTS对象或数组转换为JSON字符串，支持线性容器的转换，不支持非线性容器（传入非线性容器时无法正确序列化）。
   *
   * @param { Object } value - ArkTS对象或数组，支持线性容器的转换，不支持非线性容器。
   * @param { Transformer } [replacer] - 序列化期间，序列化值的每个键都由此函数转换和处理。默认值为undefined。
   * @param { string | number } [space] - 为提高可读性，添加到输出JSON字符串中的缩进、空白或换行字符。如果是数字，表示作为缩进的空格字符数。
   *     如果是字符串，该字符串将插入到输出JSON字符串之前。如果传入null，不使用任何空白字符。默认值为空字符串。
   * @returns { string } 返回JSON文本。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function stringify(value: Object, replacer?: Transformer, space?: string | number): string;

  /**
   * 检查ArkTS对象是否包含某种属性，可用于[JSON.parse]{@link json.parse}解析JSON字符串之后。
   * has接口仅支持最外层为字典形式（即大括号而非中括号包围）的合法JSON串，传入非字典形式的对象时无法正确判断属性是否存在。
   *
   * @param { object } obj - ArkTS对象，仅支持最外层为字典形式（即大括号而非中括号包围）的合法JSON串解析后的对象。
   * @param { string } property - 要检查的属性名称，用于指定需在ArkTS对象中查找是否存在的属性。
   * @returns { boolean } 返回ArkTS对象是否包含指定属性的结果。true表示对象包含指定属性；false表示对象不包含指定属性。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function has(obj: object, property: string): boolean;

  /**
   * 从ArkTS对象中删除某种属性，可用于[JSON.parse]{@link json.parse}解析JSON字符串之后，如清理敏感字段、移除冗余数据等场景。
   * JSON.remove接口仅支持最外层为字典形式（即大括号而非中括号包围）的合法JSON串。
   *
   * @param { object } obj - ArkTS对象，仅支持最外层为字典形式（即大括号而非中括号包围）的合法JSON串解析后的对象。
   * @param { string } property - 要删除的属性名称，用于指定需从ArkTS对象中移除的属性。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function remove(obj: object, property: string): void;

  /**
   * 定义处理BigInt的模式。由于JSON规范不支持BigInt类型，且Number精度范围为-(2^53-1)到(2^53-1)，本模块提供三种模式以适配不同场景的整数精度需求。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  const enum BigIntMode {
    /**
     * 不支持BigInt，超大整数可能丢失精度。适用于不需要处理超大整数的常规JSON解析场景。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    DEFAULT = 0,
    /**
     * 当整数小于-(2^53-1)或大于(2^53-1)时，解析为BigInt，普通整数仍按number处理。适用于JSON中可能包含超出安全整数范围的大整数、但普通整数不需要BigInt的场景。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    PARSE_AS_BIGINT = 1,
    /**
     * 所有整数都解析为BigInt。适用于需要所有整数都以BigInt形式保留精度的场景，如高精度数值计算。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    ALWAYS_PARSE_AS_BIGINT = 2
  }

  /**
   * 解析的选项，可定义处理BigInt的模式。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface ParseOptions {
    /**
     * 定义处理BigInt的模式。
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
