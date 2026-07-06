/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * 注册[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)/
 * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所引用属性变化事件的回调函数类型。
 *
 * @param { string } propertyName - property name
 * @param { T } newValue - the new value of state variable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnChangeType<T> = (propertyName: string, newValue: T) => void;

/**
 * Define AbstractProperty<T> interface.
 *
 *  AbstractProperty can be understood as a handler or an alias
 *  to a property inside LocalStorage / AppStorage singleton
 *  allows to read the value with @see get and to change the
 *  value with @see set.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AbstractProperty<T> {

  /**
   * 读取[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所引用属性的属性名。
   *
   * @returns { string } AppStorage/LocalStorage中所引用属性的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default info(): string;

  /**
    * 读取[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)/
    * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所引用属性的数据。
    *
   * @returns { T } AppStorage/LocalStorage中所引用属性的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get(): T;

  /**
   * 更新[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所引用属性的数据，newValue必须是T类型，可以为null或
   * undefined。
   *
   * @param {T} newValue - 要更新的数据，可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default set(newValue: T): void;

  /**
   * 注册[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management-static/arkts-static-localstorage.md)中所引用属性变化的事件。
   *
   * @param {OnChangeType<T> | undefined} onChangeFunc - 属性变化回调函数。</br>如果传入有效值，则添加到监听属性变化的函数列表中。</br>如果传入undefined，则清除所有
   *     监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(onChangeFunc: OnChangeType<T> | undefined): void;
}

/**
 * 继承自[AbstractProperty<T>]{@link AbstractProperty}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SubscribedAbstractProperty<T> extends AbstractProperty<T> {

  /**
   * > **说明：**
   * >
   * > 仅为了和动态Arkts接口保持一致，无实际功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default aboutToBeDeleted(): void;
}

/**
 * 系统当前深浅色模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ColorMode {

  /**
   * 浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LIGHT = 0,

  /**
   * 深色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DARK = 1
}

/**
 * 系统的布局方向类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutDirection {

  /**
   * 从右向左布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RTL = 0,

  /**
   * 从左向右布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LTR = 1,

  /**
   * 自动布局，跟随系统。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 2,
}