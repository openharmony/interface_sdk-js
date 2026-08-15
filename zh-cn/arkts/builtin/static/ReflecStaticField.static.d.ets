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
 * 提供反射相关功能的命名空间。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
namespace reflect {

  /**
   * 表示类的静态字段。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  class StaticField extends Field {  
    /**
     * 判断当前静态字段对象是否与另一个对象相等。
     *
     * @param { StaticField } other - 待比较的另一个静态字段对象。
     * @returns { boolean } 如果两个对象相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    equals(other: StaticField): boolean;
    /**
     * 从实例字段读取值。
     *
     * @returns { Any } 字段值。
     * @throws { OutofMemoryError } 当没有内存可分配给返回值时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getValue(): Any;

    /**
     * 向静态字段写入值。
     *
     * @param { Any } value - 待写入的值。
     * @throws { TypeError } 当值类型不兼容时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setValue(value: Any): void;
}

};
