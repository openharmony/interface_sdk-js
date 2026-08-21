/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file InputMethodExtensionAbility
 * @kit IMEKit
 */

import Want from './@ohos.app.ability.Want';
import type InputMethodExtensionContext from './@ohos.InputMethodExtensionContext';

/**
 * @brief The **InputMethodExtensionAbility** module provides APIs for developing input methods and managing the lifecycle of
 * input method extensions.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > The initial APIs of this module are supported since API version 9. Newly added APIs will be marked with a superscript to
 * indicate their earliest API version. The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionAbility {
  /**
   * @brief Context of the **InputMethodExtension**, which is inherited from **ExtensionContext**.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  context: InputMethodExtensionContext;

  /**
   * @brief Called when the **InputMethodExtensionAbility** is started to implement initialization.
   *
   * @param { Want } want - Information related to the **InputMethodExtensionAbility**, including the ability name and
   *     bundle name.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * @brief Called when this **InputMethodExtensionAbility** is destroyed to clear resources.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default InputMethodExtensionAbility;