'use static';

/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit ArkData
 */
import uniformDataStruct from '@ohos.data.uniformDataStruct';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component, Builder } from '@ohos.arkui.component';
/**
 * A content card designed in the [ContentForm](js-apis-data-uniformDataStruct.md#contentform14) struct. You can set the title (mandatory), description, application icon, application name, redirection link, and content image for the content card. When a user taps the card, a callback of the pass event is triggered to redirect the user to the specified page if the target link is set.
 *
 * **Use scenarios**:
 * - Display of shared content in social applications
 * - Instant message card
 * - Content recommendation card
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 20. Updates will be marked with a superscript to indicate their earliest API version.
 * >
 * > The APIs of this module can be used only in the stage model.
 *
 * ###### Child Component
 *
 * N/A
 */
/**
 * Enumerates content card types, including large, medium, and small.
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 23 static
 */
declare enum FormType {
  /**
   * 4 × 4. The default card width is 200 vp, and the default height is 200 vp.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  TYPE_BIG = 0,

  /**
   * 4 × 2. The default card width is 200 vp, and the default height is 100 vp.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  TYPE_MID = 1,

  /**
   * 2 x 1. The default card width is 137 vp, and the default height is 83 vp.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  TYPE_SMALL = 2
}

/**
 * Defines the information of a content card component that is displayed in an application, including the title,
 * description, content image, application information, and the like. It is applicable to scenarios such as content
 * distribution, social updates, and message notifications.
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
declare struct ContentFormCard {
  /**
   * Data of the form card.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  contentFormData: uniformDataStruct.ContentForm;

  /**
   * Type of the form card.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  formType: FormType;

  /**
   * Width of the content form card. The unit of measurement is vp.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  formWidth?: double;

  /**
   * Height of the content form card. The unit of measurement is vp.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  formHeight?: double;

  /**
   * Callback to be invoked when the form card is tapped.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  handleOnClick?: Function;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

export { ContentFormCard, FormType };
