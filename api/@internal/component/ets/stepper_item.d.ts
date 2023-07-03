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
 * ItemState
 * @since 8
 */
/**
 * ItemState
 * @crossplatform
 * @since 10
 */
declare enum ItemState {
  /**
   * Default State
   * @since 8
   */
  /**
   * Default State
   * @crossplatform
   * @since 10
   */
  Normal,

  /**
   * Disabled State
   * @since 8
   */
  /**
   * Disabled State
   * @crossplatform
   * @since 10
   */
  Disabled,

  /**
   * Waiting State
   * @since 8
   */
  /**
   * Waiting State
   * @crossplatform
   * @since 10
   */
  Waiting,

  /**
   * Skip State
   * @since 8
   */
  /**
   * Skip State
   * @crossplatform
   * @since 10
   */
  Skip,
}

/**
 * Provides an interface for switching the stepperItem view on stepper container.
 * @since 8
 */
/**
 * Provides an interface for switching the stepperItem view on stepper container.
 * @crossplatform
 * @since 10
 */
interface StepperItemInterface {
  /**
   * Called when the stepperItem component is used.
   * @since 8
   */
  /**
   * Called when the stepperItem component is used.
   * @crossplatform
   * @since 10
   */
  (): StepperItemAttribute;
}

/**
 * Defines the stepper item attribute functions.
 * @since 8
 */
/**
 * Defines the stepper item attribute functions.
 * @crossplatform
 * @since 10
 */
declare class StepperItemAttribute extends CommonMethod<StepperItemAttribute> {
  /**
   * Called when the value of stepperItem prevLabel is set
   * @since 8
   */
  /**
   * Called when the value of stepperItem prevLabel is set
   * @crossplatform
   * @since 10
   */
  prevLabel(value: string): StepperItemAttribute;

  /**
   * Called when the value of stepperItem nextLabel is set
   * @since 8
   */
  /**
   * Called when the value of stepperItem nextLabel is set
   * @crossplatform
   * @since 10
   */
  nextLabel(value: string): StepperItemAttribute;

  /**
   * Called when the value of stepperItem status is set
   * @since 8
   */
  /**
   * Called when the value of stepperItem status is set
   * @crossplatform
   * @since 10
   */
  status(value?: ItemState): StepperItemAttribute;
}

/**
 * Defines StepperItem Component instance.
 * @since 8
 */
/**
 * Defines StepperItem Component instance.
 * @crossplatform
 * @since 10
 */
declare const StepperItemInstance: StepperItemAttribute;

/**
 * Defines StepperItem Component.
 * @since 8
 */
/**
 * Defines StepperItem Component.
 * @crossplatform
 * @since 10
 */
declare const StepperItem: StepperItemInterface;
