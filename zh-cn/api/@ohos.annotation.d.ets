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
 * 本模块定义了OpenHarmony ArkTS API的注解类型，如生命周期最小可用版本等。
 *
 * > **说明：**
 * >
 * > - 本模块首批接口从 API version 22 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @file Annotation
 * @kit BasicServicesKit
 */

/**
 * 系统提供的API注解能力，可用于标记API支持的最低可用版本。此注解可以标注在类、接口、变量、类型、模块、枚举上。在源码定义处添加注解后，编译工具会在使用处检查潜在的兼容性问题。当minApiVersion大于
 * build-profile.json5中指定的compatibleSDKVersion字段，会生成兼容性警告。
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
 * 支持消除告警的规则。
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
 * 系统提供的API告警屏蔽功能，允许开发者通过注解的方式来抑制API调用时产生的告警。该功能可应用于类、函数、变量、类型、接口等API元素上。在源码中添加相应标注后，编译器会根据预设规则自动屏蔽对应的告警信息。
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
   * 支持告警消除的规则集合。
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