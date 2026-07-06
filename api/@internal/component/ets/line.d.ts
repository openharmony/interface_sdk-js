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
 * Describes the options of the line.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element's
 * > @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface LineOptions {
  /**
   * Width.
   * If the value is invalid or the default value is used, the width required for the content is used.
   * Unit: vp.
   *
   * @type { ?(string | number) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  width?: Length;

  /**
   * Height.
   * If the value is invalid or the default value is used, the height required for the content is used.
   * Unit: vp.
   *
   * @type { ?(string | number) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  height?: Length;
}

/**
 * Line drawing component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface LineInterface {
  /**
   * Uses new to create the line.
   * Anonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { LineOptions } [options] - Line options [since 18]
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: LineOptions): LineAttribute;

  /**
   * Defines the constructor of Line component.
   *
   * @param { object } value - [since 7 - 17]
   * @param { LineOptions } [options] - Options of the line.<br>The **undefined** and **null** values are treated as
   *     invalid and will not take effect. [since 18]
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: LineOptions): LineAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class LineAttribute extends CommonShapeMethod<LineAttribute> {
  /**
   * Sets the coordinates (relative coordinates) of the start point of the line. This attribute can be dynamically set 
   * using  [attributeModifier]{@link CommonMethod#attributeModifier}. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Coordinates (relative coordinates) of the start point of the line, in vp.<br>Default
   *     value: **[0, 0]**<br>The **undefined** and **null** values are treated as the default value.
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  startPoint(value: Array<any>): LineAttribute;

  /**
   * Sets the coordinates (relative coordinates) of the end point of the line. This attribute can be dynamically set
   * using [attributeModifier]{@link CommonMethod#attributeModifier}. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Coordinates (relative coordinates) of the end point of the line, in vp.<br>Default
   *     value: **[0, 0]**<br>The **undefined** and **null** values are treated as the default value.
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  endPoint(value: Array<any>): LineAttribute;
}

/**
 * The **Line** component is used to draw a straight line.
 * > **NOTE**
 * >
 * > This component supports dynamic constructor parameter updates using the
 * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#properties) API of the
 * > [AttributeUpdater](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md) class since API version 20.
 * >
 * > **Child Components**
 * >
 * > None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Line: LineInterface;

/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const LineInstance: LineAttribute;
