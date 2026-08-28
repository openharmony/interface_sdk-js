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
 * 反射操作的核心命名空间，提供在运行时访问类、接口、
 * 方法和属性等元数据的能力。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export namespace reflect {

  /**
   * 表示类或接口的实例字段。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  class InstanceField extends Field {  

    /**
     * 检查当前实例字段是否与给定的实例字段相等。
     *
     * @param { InstanceField } other - 用于与当前字段实例比较的另一个字段对象。
     * @returns { boolean } 如果两个实例字段相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    equals(other: InstanceField): boolean;

    /**
     * 从该实例字段读取值。
     *
     * @param { Object } thisObj - 作为`this`上下文的目标对象。
     * @returns { Any } 从该实例字段读取的值。当thisobj为null时返回null；
     *     当其为undefined时返回undefined。
     * @throws { TypeError } 当`thisObj`与该字段不兼容时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getValue(thisObj: Object): Any;

    /**
     * 向该实例字段写入值。
     *
     * @param { Object } thisObj - 作为`this`上下文的目标对象。
     * @param { Any } value - 待写入的值。
     * @throws { TypeError } 当`thisObj`与该字段不兼容或值类型不匹配时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    setValue(thisObj: Object, value: Any): void;
}

}
