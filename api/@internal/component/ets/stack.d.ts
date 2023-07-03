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
 * Provides ports for stacking containers.
 * @since 7
 */
/**
 * Provides ports for stacking containers.
 * @form
 * @since 9
 */
/**
 * Provides ports for stacking containers.
 * @form
 * @crossplatform
 * @since 10
 */
interface StackInterface {
  /**
   * Set the value.
   * @since 7
   */
  /**
   * Set the value.
   * @form
   * @since 9
   */
  /**
   * Set the value.
   * @form
   * @crossplatform
   * @since 10
   */
  (value?: { alignContent?: Alignment }): StackAttribute;
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
declare class StackAttribute extends CommonMethod<StackAttribute> {
  /**
   * Called when the occupancy of items in the container is set.
   * @since 7
   */
  /**
   * Called when the occupancy of items in the container is set.
   * @form
   * @since 9
   */
  /**
   * Called when the occupancy of items in the container is set.
   * @form
   * @crossplatform
   * @since 10
   */
  alignContent(value: Alignment): StackAttribute;
}

/**
 * Defines Stack Component.
 * @since 7
 */
/**
 * Defines Stack Component.
 * @form
 * @since 9
 */
/**
 * Defines Stack Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Stack: StackInterface;

/**
 * Defines Stack Component instance.
 * @since 7
 */
/**
 * Defines Stack Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Stack Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const StackInstance: StackAttribute;
