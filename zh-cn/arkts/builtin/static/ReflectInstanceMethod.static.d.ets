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
namespace reflect {

  /**
   * 表示类或接口的实例方法。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  class InstanceMethod extends Method {  

    /**
     * 检查该方法是否为final方法。
     *
     * @returns { boolean } 如果该方法为final则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isFinal(): boolean;

    /**
     * 检查该方法是否为async方法。
     *
     * @returns { boolean } 如果该方法为async则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isAsync(): boolean;

    /**
     * 检查该方法是否为抽象方法。
     *
     * @returns { boolean } 如果该方法为抽象方法则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isAbstract(): boolean;

    /**
     * 检查该方法是否为getter方法。
     *
     * @returns { boolean } 如果该方法为getter则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isGetter(): boolean;

    /**
     * 检查该方法是否为setter方法。
     *
     * @returns { boolean } 如果该方法为setter则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isSetter(): boolean;

    /**
     * 比较两个实例方法是否相等。
     *
     * @param { InstanceMethod } other - 用于比较的另一个实例方法对象。
     * @returns { boolean } 如果两个方法相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    equals(other: InstanceMethod): boolean;

    /**
     * 调用该实例方法。
     *
     * @param { Object } thisObj - 调用该方法时使用的this对象。
     * @param { FixedArray<Any> } [args] - 调用该方法时传入的参数数组。
     * @returns { Any } 该方法的执行结果。
     * @throws { TypeError } 当`thisObj`与该方法不兼容时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    invoke(thisObj: Object, args?: FixedArray<Any>): Any;
}

} 
