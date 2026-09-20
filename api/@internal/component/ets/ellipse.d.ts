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
 * Describes the options of the ellipse.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface EllipseOptions {
  /**
   * Width, with the value range ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   * 
   * The Resource type is supported since API version 20.
   *
   * @type { ?(string | number) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: Length;

  /**
   * Height, with the value range ≥ 0.
   * 
   * Default value: **0**
   * 
   * Default unit: vp
   * 
   * Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are handled as the default value.
   * 
   * The Resource type is supported since API version 20.
   *
   * @type { ?(string | number) } [since 7 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: Length;
}

/**
 * The **Ellipse** component is used to draw an ellipse. It draws an ellipse shape by setting the width and height 
 * attributes, rendering the ellipse outline and fill area within a given rectangular region.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface EllipseInterface {
  /**
   * Constructor used to draw an ellipse. After being called, it creates an **Ellipse** object, for which the width
   * and height attributes can be set.
   *
   * @param { object } value [since 7 - 17]
   * @param { EllipseOptions } [options] - Ellipse drawing configuration options, including the width and height
   *     settings. If not passed, the default size (both width and height are 0) is used.
   *     <br>The abnormal values **undefined** and **null** are handled as invalid values, and this setting does not
   *     take effect.
   *     <br>**Note:** Since API version 18, the **EllipseOptions** parameter must be used in the stage model. [since 18]
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: EllipseOptions): EllipseAttribute;

  /**
   * Constructor used to draw an ellipse. After being called, it creates an **Ellipse** object, for which the width and 
   * height attributes can be set.
   *
   * @param { object } value [since 7 - 17]
   * @param { EllipseOptions } [options] - Ellipse drawing configuration options, including the width and height
   *     settings. If not passed, the default size (both width and height are 0) is used.
   *     <br>The abnormal values **undefined** and **null** are handled as invalid values, and the setting does not
   *     take effect.
   *     <br>**Note:** Since API version 18, the EllipseOptions parameter must be used in the stage model. [since 18]
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: EllipseOptions): EllipseAttribute;
}

/**
 * The [universal attributes]{@link CommonMethod} and [universal attributes for drawing components]{@link CommonMethod} are 
 * supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class EllipseAttribute extends CommonShapeMethod<EllipseAttribute> {}

/**
 * The **Ellipse** component is used to draw an ellipse. It draws an ellipse shape by setting the width and height 
 * attributes, rendering the ellipse outline and fill area within a given rectangular region.
 * 
 * ###### Child Components
 * 
 * None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Ellipse: EllipseInterface;

/**
 * Defines Ellipse Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const EllipseInstance: EllipseAttribute;
