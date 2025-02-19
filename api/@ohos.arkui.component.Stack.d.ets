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

import { CommonMethod, PointLightStyle } from './@ohos.arkui.component.Common';
import { Alignment } from './@ohos.arkui.component.Enums';

/**
 * Options used to construct the stack.
 *
 * @interface StackOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 13
 */
export interface StackOptions {
  /**
   * Set the alignment of sub components within the container.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the alignment of sub components within the container.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set the alignment of sub components within the container.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the alignment of sub components within the container.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  alignContent?: Alignment;
}

/**
 * Provides ports for stacking containers.
 *
 * @interface StackInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides ports for stacking containers.
 *
 * @interface StackInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides ports for stacking containers.
 *
 * @interface StackInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides ports for stacking containers.
 *
 * @interface StackInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Provides ports for stacking containers.
 *
 * @typedef { function } StackInterface
 * @param { ?StackOptions } options - stack options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 16
 */
export type StackInterface = (options?: StackOptions) => StackAttribute;

/**
 * @extends CommonMethod<StackAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod<StackAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<StackAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends CommonMethod<StackAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare class StackAttribute extends CommonMethod<StackAttribute> {
  /**
   * Called when the occupancy of items in the container is set.
   *
   * @param { Alignment } value
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the occupancy of items in the container is set.
   *
   * @param { Alignment } value
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the occupancy of items in the container is set.
   *
   * @param { Alignment } value
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the occupancy of items in the container is set.
   *
   * @param { Alignment } value
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  alignContent(value: Alignment): StackAttribute;

  /**
   * Defines the PointLight
   *
   * @param { PointLightStyle } value - The point light style.
   * @returns { StackAttribute } The attribute of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  pointLight(value: PointLightStyle): StackAttribute;
}

/**
 * Defines Stack Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Stack Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Stack Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Stack Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare const Stack: StackInterface;

/**
 * Defines Stack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Stack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Stack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Stack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare const StackInstance: StackAttribute;
