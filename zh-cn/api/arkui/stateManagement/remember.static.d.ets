'use static'

/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { Builder } from '../component/builder';

/**
* rememberVariable创建的状态变量类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MutableVariable<T> {

  /**
   * 状态变量的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value: T;
}

/**
* 状态变量初始值入参类型。基础类型使用类型T直接传入；
* 复杂类型（interface、class和包含Array、Map、Set和Date的内置类型）使用回调（() => T）初始化能避免重复创建实例，性能更高。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type RememberInitialType<T> = (() => T) | T;

/**
* 创建状态变量。
*
 * @param { RememberInitialType<T> } initialValue - 状态变量的初始值。
 * @returns { MutableVariable<T> } 返回状态变量。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export declare function rememberVariable<T>(initialValue: RememberInitialType<T>): MutableVariable<T>;