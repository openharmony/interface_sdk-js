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
import { CommonMethod } from './@ohos.arkui.component.Common'
import { ResourceColor} from './@ohos.arkui.component.Units'
/**
 * Create Blank.
 *
 * @interface BlankInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Create Blank.
 *
 * @interface BlankInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Create Blank.
 *
 * @interface BlankInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Create Blank.
 *
 * @interface BlankInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export type BlankInterface = (min?: number | string) => BlankAttribute;

/**
 * Inheritance CommonMethod Set Styles
 *
 * @extends CommonMethod<BlankAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Inheritance CommonMethod Set Styles
 *
 * @extends CommonMethod<BlankAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Inheritance CommonMethod Set Styles
 *
 * @extends CommonMethod<BlankAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Inheritance CommonMethod Set Styles
 *
 * @extends CommonMethod<BlankAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare class BlankAttribute extends CommonMethod<BlankAttribute> {
  /**
   * color: set color.
   *
   * @param { ResourceColor } value
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * color: set color.
   *
   * @param { ResourceColor } value
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * color: set color.
   *
   * @param { ResourceColor } value
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * color: set color.
   *
   * @param { ResourceColor } value
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  color(value: ResourceColor): BlankAttribute;
}

/**
 * Defines Blank Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Blank Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Blank Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Blank Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare const Blank: BlankInterface;

/**
 * Defines Blank Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Blank Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Blank Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Blank Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare const BlankInstance: BlankAttribute;
