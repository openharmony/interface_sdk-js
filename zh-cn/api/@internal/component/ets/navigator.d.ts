/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
* 路由的跳转方式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 */
declare enum NavigationType {

  /**
   * 跳转到应用内的指定页面。
   *
   * **说明：**<br/
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathStack#pushPath
   */
  Push,

  /**
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathStack#pop
   */
  Back,

  /**
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathStack.replacePath
   */
  Replace
}

/**
* 路由容器组件，提供路由跳转能力。
*
*
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
interface NavigatorInterface {

  /**
   * 在路由跳转时调用。
   *
   * @param { object } value - 跳转页面的信息。<br/>target：指定跳转目标页面的路径。<br/>type：指定路由方式。<br/>默认值：NavigationType.Push
   * @returns { NavigatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathInfo
   */
  (value?: { target: string; type?: NavigationType }): NavigatorAttribute;

  /**
   * 在使用Navigator时调用。
   *
   * NavigationAttribute为Navigation组件的属性。
   *
   * @returns { NavigatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavigationAttribute
   */
  (): NavigatorAttribute;
}

/**
* Navigator的属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
declare class NavigatorAttribute extends CommonMethod<NavigatorAttribute> {

  /**
   * 设置当前路由组件是否处于激活状态，处于激活状态时，会生效相应的路由操作。
   *
   * @param { boolean } value - 路由组件是否处于激活状态。设置为true时，组件处于激活态。设置为false时，组件不处于激活态。
   * @returns { NavigatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation
   */
  active(value: boolean): NavigatorAttribute;

  /**
   * 设置路由跳转方式。
   *
   * > **说明：**
   *
   * @param { NavigationType } value - 路由跳转方式。<br/>默认值：NavigationType.Push
   * @returns { NavigatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation
   */
  type(value: NavigationType): NavigatorAttribute;

  /**
   * 设置跳转目标页面的路径。目标页面需加入main_pages.json文件中。
   *
   * @param { string } value - 跳转目标页面的路径。
   * @returns { NavigatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation
   */
  target(value: string): NavigatorAttribute;

  /**
   * 设置跳转时传递到目标页面的数据。
   *
   * > **说明：**
   *
   * @param { object } value - 跳转时要同时传递到目标页面的数据，可在目标页面使用[router.getParams()]{@link @ohos.router:router.getParams}获得。
   * @returns { NavigatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathInfo#param
   */
  params(value: object): NavigatorAttribute;
}

/**
* 路由容器组件，提供路由跳转能力。
*
* > **说明：**
*
* ###### 子组件
*
* 可以包含子组件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
declare const Navigator: NavigatorInterface;

/**
* Defines Navigator Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
declare const NavigatorInstance: NavigatorAttribute;