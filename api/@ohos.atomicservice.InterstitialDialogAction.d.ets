/* 
 * Copyright (C) 2024 Huawei Device Co., Ltd
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * you may obtain a copy of the License at
 *
 * http://www/apache.org/license/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ###### Child Components
 * 
 * Not supported
 * 
 * ###### Attributes
 * 
 * The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 * 
 * ###### Events
 * 
 * The [universal events]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file This section describes the interfaces used by InterstitialDialogAction
 * @kit ArkUI
 */

import { UIContext } from '@ohos.arkui.UIContext';
import { ComponentContent } from '@ohos.arkui.node';
/**
 * Sets the color style of the close button. By default, the close button is set to light color.
 *
 * | Name| Value| Description|
 * | - | - | - |
 * | DARK | 0 | The close button is in dark color.|
 * | LIGHT | 1 | The close button is in light color.Default value.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum IconStyle {
  /**
   * Sets the button icon to dark.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  DARK = 0,
  /**
   * Sets the button icon to light.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  LIGHT = 1
}
/**
 * Defines the vertical position of the title relative to the subtitle in the dialog box. By default, the title is above
 * the subtitle.
 *
 * | Name| Value| Description|
 * | - | - | - |
 * | TOP | 0 | The title is above the subtitle.Default value.|
 * | BOTTOM | 1 | The title is below the subtitle.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum TitlePosition {
  /**
   * The main title is above the text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  TOP = 0,
  /**
   * The main title is below the text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  BOTTOM = 1
}
/**
 * Defines the distance between the popup and the bottom in different scenario modes, based on the presence or absence
 * of a menu bar, with the default being the distance when there is no menu bar.
 *
 * | Name| Value| Description|
 * | - | - | - |
 * | OFFSET_FOR_BAR | 0 | Distance from the bottom of the window when there is a menu bar.
 * It sets the dialog box 88 vp away from the bottom of the window.|
 * | OFFSET_FOR_NONE | 1 | Distance from the bottom of the window when there is no menu bar.
 * Default value. It sets the dialog box 44 vp away from the bottom of the window.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum BottomOffset {
  /**
   * dialog distance relative to the bottom in the presence of tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  OFFSET_FOR_BAR = 0,
  /**
   * dialog is the distance relative to the bottom without tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  OFFSET_FOR_NONE = 1
}
/**
 * Defines the attributes specific to the dialog box and custom click actions for the user.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface DialogOptions {
  /**
   * The UIContext required by the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  uiContext: UIContext;
  /**
   * The type of the bottom offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  bottomOffsetType?: BottomOffset;
  /**
   * The title of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  title?: ResourceStr;
  /**
   * The subtitle of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  subtitle?: ResourceStr;
  /**
   * The color of the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  titleColor?: ResourceStr | Color;
  /**
   * The color of the subtitle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  subtitleColor?: ResourceStr | Color;
  /**
   * The background of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backgroundImage?: Resource;
  /**
   * The foreground of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  foregroundImage?: Resource;
  /**
   * The style of the close button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  iconStyle?: IconStyle;
  /**
   * The relative position of the title and subtitle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  titlePosition?: TitlePosition;
  /**
   * The action after clicking dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onDialogClick?: Callback<void>;
  /**
   * The action after clicking close button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onDialogClose?: Callback<void>;
}
/**
 * The **InterstitialDialogAction** component is a dialog box used in atomic services to temporarily display information
 * that requires user attention or actions to be taken while maintaining the current context. Users can trigger
 * corresponding actions by clicking different areas of the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class InterstitialDialogAction {
  /**
   * A constructor used to create an **InterstitialDialogAction** instance.
   *
   * @param { DialogOptions } dialogOptions - Creates a new dialog action object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  constructor(dialogOptions: DialogOptions);
  /**
   * Opens the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  openDialog(): void;
  /**
   * Closes the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  closeDialog(): void;
}