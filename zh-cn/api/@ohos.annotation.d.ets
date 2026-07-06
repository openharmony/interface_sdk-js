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
 * 本模块定义了OpenHarmony ArkTS API的注解类型，如生命周期最小可用版本、API告警屏蔽等，用于帮助开发者标识和管理API的兼容性、告警抑制等特性。
 * 该模块解决了开发者在跨版本开发、第三方SDK集成等场景中遇到的版本兼容性告警、权限告警、多设备适配告警等问题，通过注解方式抑制不必要的告警干扰，提高代码的可维护性和开发效率。
 *
 * > **说明**
 * >
 * > - 本模块首批接口从 API version 22 开始支持。后续版本的新增接口，采用上角标单独标记起始版本。
 *
 * @file Annotation
 * @kit BasicServicesKit
 */

/**
 * 提供API注解能力，用于标记API支持的最低可用版本。此注解可以标注在类、接口、变量、类型、模块、枚举上。在源码定义处添加注解后，编译工具会在使用处检查潜在的兼容性问题。
 * 当minApiVersion大于build-profile.json5中指定的compatibleSDKVersion字段，会生成兼容性警告。
 *
 * @syscap SystemCapability.Base
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 22 dynamic
 */
export @interface Available {

  /**
   * minApiVersion用于标识最低可用版本，由两部分组成：系统类型+版本号。仅当系统类型为OpenHarmony时可省略系统类型。例如：'OpenHarmony 20'，'20'。
   * 当minApiVersion大于build-profile.json5中指定的compatibleSDKVersion字段时，会生成兼容性警告。
   *
   * @syscap SystemCapability.Base
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  minApiVersion: string = '';
}

/**
 * 支持消除告警的规则。帮助开发者根据实际需求选择性地屏蔽兼容性告警、多设备告警、权限告警等，在确保代码质量的同时减少不必要的告警干扰，提升开发体验。
 *
 * @syscap SystemCapability.Base
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
export const enum SuppressWarningsType {

  /**
   * 支持消除兼容性告警。
   *
   * @syscap SystemCapability.Base
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  COMPATIBILITY = 'compatibility',

  /**
   * 支持消除多设备告警。
   *
   * @syscap SystemCapability.Base
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  SYSCAP = 'syscap',

  /**
   * 支持消除权限告警。
   *
   * @syscap SystemCapability.Base
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PERMISSION = 'permission'
}

/**
 * 系统提供的API告警屏蔽功能，允许开发者通过注解的方式抑制API调用时产生的告警。该功能可应用于类、函数、变量、类型、接口等API元素上。在源码中添加相应标注后，编译器会根据预设规则自动屏蔽对应的告警信息。
 * 适用于需要在特定场景下暂时忽略某些告警、避免编译器产生干扰性警告的情况，帮助开发者专注于关键问题，提高开发效率。
 *
 * @syscap SystemCapability.Base
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
export @interface SuppressWarnings {

  /**
   * 支持告警消除的规则集合，用于指定需要抑制的告警类型。可通过数组传入多个规则同时抑制多种告警。可选取值参见[SuppressWarningsType]{@link SuppressWarningsType}。
   *
   * @syscap SystemCapability.Base
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  rules: Array<SuppressWarningsType>;
}