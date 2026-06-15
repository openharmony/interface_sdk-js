
'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * The **annotation** module defines the annotation types of OpenHarmony ArkTS APIs, such as the minimum available
 * version of the lifecycle.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this module are supported since API version 22. Newly added APIs will be marked with
 * a superscript to indicate their earliest API version.
 *
 * @file Annotation
 * @kit BasicServicesKit
 */

/**
 * Annotates the minimum available version supported by an API. This annotation capability is provided by the system
 * and can be used on classes, APIs, variables, types, modules, and enums. After the annotation is added to the source
 * code, the compilation tool checks for potential compatibility issues. If the value of **minApiVersion** is greater
 * than that of **compatibleSDKVersion** specified in **build-profile.json5**, a compatibility warning is reported.
 *
 * @syscap SystemCapability.Base
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Retention('SOURCE')
export @interface Available {

  /**
   * minApiVersion is used to indicate the minimum Available version. Composed of two parts: System Type + Version
   * Number. The system type can be omitted only when the type is OpenHarmony.For example: 'OpenHarmony 20' '20'
   *
   * @syscap SystemCapability.Base
   * @stagemodelonly
   * @since 26.0.0 static
   */
  minApiVersion: string = '';
}
