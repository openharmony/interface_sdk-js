/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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
/*** if arkts 1.2 */
import { ResourceStr } from './arkui/component/units';
import { State, PropRef } from './arkui/stateManagement/decorator';
import { Component } from './arkui/component/customComponent';
import { BuilderParam, Builder } from './arkui/component/builder';
/*** endif */

/**
 * Declare SplitLayout.The SplitLayout is used for upper and lower graphic layouts.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare SplitLayout.The SplitLayout is used for upper and lower graphic layouts.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts{ '1.1':'11','1.2':'20' }
 * @arkts 1.1&1.2
 */
@Component
export declare struct SplitLayout {
  /**
   * Container in the user-defined splitlayout display area.
   * @type { container: () => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Container in the user-defined splitlayout display area.
   * @type { container: () => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts{ '1.1':'11','1.2':'20' }
   * @arkts 1.1&1.2
   */
  @BuilderParam container: () => void;

  /**
   * Image in the layout.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Image in the layout.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts{ '1.1':'11','1.2':'20' }
   * @arkts 1.1&1.2
   */
  @State mainImage: ResourceStr;

  /**
   * Title text in the layout.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Title text in the layout.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @arkts 1.1
   */
  @Prop primaryText: ResourceStr;

    /**
   * Title text in the layout.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  @PropRef primaryText: ResourceStr;

  /**
   * Description text in the layout.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Description text in the layout.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @arkts 1.1
   */
  @Prop secondaryText?: ResourceStr;

  /**
   * Description text in the layout.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  @PropRef secondaryText?: ResourceStr;

  /**
   * Auxiliary text in the layout.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Auxiliary text in the layout.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @arkts 1.1
   */
  @Prop tertiaryText?: ResourceStr;

  /**
   * Auxiliary text in the layout.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  @PropRef tertiaryText?: ResourceStr;

  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  @Builder build(): void;
}
