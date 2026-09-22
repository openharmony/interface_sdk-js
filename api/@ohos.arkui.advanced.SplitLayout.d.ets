/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * The **SplitLayout** component provides common page layout styles, mainly used to display combined layouts of images, 
 * titles, and content containers. It is suitable for split display scenarios that require adaptation to different 
 * screen sizes (such as detail pages, settings pages, etc.). It supports adaptation to different screen widths (three 
 * layouts: ≤ 600 vp, > 600 vp and ≤ 840 vp, > 840 vp), addressing the need to display different layout styles on 
 * devices of different sizes, improving page adaptability and user experience.
 * 
 * > **NOTE**
 * >
 * > - This component can only be used in the stage model.
 * >
 * > - **SplitLayout** does not support setting [universal attributes]{@link CommonMethod} and 
 * > [universal events]{@link CommonMethod}. If set, the build toolchain will generate an additional
 * > \_\_Common\_\_ node and attach the universal attributes or universal events to \_\_Common\_\_ instead of directly 
 * > applying them to **SplitLayout** itself, causing the configured attributes or events to not take effect.
 *
 * The [universal events]{@link CommonMethod} are not supported.
 *
 * [Universal attributes]{@link CommonMethod} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct SplitLayout {
  /**
   * Container component used to host custom component content in the lower area of the layout. No return value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @BuilderParam container: () => void;

  /**
   * Main image resource displayed in the upper area of the layout. Supports common image formats such as PNG, JPG, and 
   * SVG.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @State mainImage: ResourceStr;

  /**
   * Primary title content, with no length limit. Displayed in the title area of the layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop primaryText: ResourceStr;

  /**
   * Secondary title content, with no length limit. Pass this parameter when a subtitle needs to be displayed below the 
   * title. If not passed, no subtitle is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop secondaryText?: ResourceStr;

  /**
   * Auxiliary text, with no length limit. Displayed below the subtitle area. Pass this parameter when auxiliary text 
   * needs to be displayed. If not passed, no auxiliary text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop tertiaryText?: ResourceStr;
}