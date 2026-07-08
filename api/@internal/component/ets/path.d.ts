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
 * Describes the options of the path.
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
declare interface PathOptions {
  /**
   * Width of the rectangle where the path is located.
   * If the value is invalid or the default value is used, the width required for the content is used.
   * Default
   * Unit: vp.
   *
   * @type { ?(number | string) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  width?: Length;

  /**
   * Height of the rectangle where the path is located.
   * If the value is invalid or the default value is used, the height required for the content is used.
   * Default
   * Unit: vp.
   *
   * @type { ?(number | string) } [since 18 - 19]
   * @type { ?Length } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  height?: Length;

  /**
   * Command string for drawing the path.
   * If the value is invalid or the default value is used, the width and height required for the content are used. The
   * default value is an empty string. An invalid value is handled as the default value.
   *
   * @type { ?string } [since 18 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  commands?: ResourceStr;
}

/**
 * Provides the path drawing interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface PathInterface {
  /**
   * Use new to create Path.
   * Annonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { PathOptions } [options] - path options [since 18]
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  new (options?: PathOptions): PathAttribute;

  /**
   * Defines the constructor of Path component
   *
   * @param { object } value - [since 7 - 17]
   * @param { PathOptions } [options] - - Options of the path.<br>The **undefined** and **null** values are treated as
   *     invalid and will not take effect. [since 18]
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: PathOptions): PathAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class PathAttribute extends CommonShapeMethod<PathAttribute> {
  /**
   * Sets a string of path commands that comply with the 
   * [SVG path syntax](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax). The unit 
   * is px. For details about how to convert pixel units, see [Pixel Units]{@link common}.
   *
   * @param { string } value - Path for drawing a line.<br>The default value is an empty string.<br>Default unit: px<br>
   *     The **undefined** and **null** values are invalid and treated as the default value. [since 7 - 19]
   * @param { ResourceStr } value - Path for drawing a line.<br>The default value is an empty string.<br>Default unit:
   *     px<br>The **undefined** and **null** values are invalid and treated as the default value. [since 20]
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  commands(value: ResourceStr): PathAttribute;
}

/**
 * The **Path** component is used to draw a custom closed shape based on a specified drawing path.
 * > **Note**
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
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Path: PathInterface;

/**
 * Defines Path Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const PathInstance: PathAttribute;
