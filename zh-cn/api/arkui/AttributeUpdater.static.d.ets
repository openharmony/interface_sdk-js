'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file 将属性直接设置为组件，无需标记为状态变量即可直接触发UI刷新。
 * @kit ArkUI
 */

import { AttributeModifier } from '@ohos.arkui.component';

import { RecordData } from '../@ohos.base';

/**
* 可以将属性更新到本地的修饰器。
*
 * @param { FixedArray<RecordData> } params
 * @returns { T }
 返回当前组件。
 * @stagemodelonly
 * @since 23 static
 */
export type Initializer<T> = (...params: FixedArray<RecordData>) => T;

/**
* 为[AttributeModifier]{@link AttributeModifier}的实现类，开发者需要自定义class继承AttributeUpdater。
*
* 其中C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等，仅在使用updateConstructorParams时才需要传递C类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class AttributeUpdater<T> implements AttributeModifier<T> {

  /**
   * 获取AttributeUpdater中组件对应的属性类实例，通过该实例实现属性直通更新的功能。
   *
   * @returns { T | undefined } The attribute of the modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get attribute(): T | undefined;

  /**
   * AttributeUpdater首次设置给组件时提供的样式。
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  initializeModifier(instance: T): void;

  /**
   * 用于更改组件的构造函数入参。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get updateConstructorParams(): Initializer<T>;

  /**
   * 绑定相同的自定义的Modifier对象，组件发生切换时，通过该接口通知到应用。
   *
   * @param { T } component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onComponentChanged(component: T): void;
}