/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * The **FormComponent** is used to display widgets.
 * 
 * > **NOTE**
 * >
 * > - This component is intended for the widget host. For details about the widget provider, see 
 * > [JS Service Widget UI Components](docroot://reference/apis-arkui/js-service-widget-ui/js-service-widget-file.md).
 *
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates widget sizes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare enum FormDimension {
  /**
   * 1 x 2 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_1_2 = 0,

  /**
   * 2 x 2 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_2_2 = 1,

  /**
   * 2 x 4 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_2_4 = 2,

  /**
   * 4 x 4 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_4_4 = 3,

  /**
   * 2 x 1 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 20
   */
  Dimension_2_1 = 4,

  /**
   * 1 x 1 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  DIMENSION_1_1 = 6,

  /**
   * 6 x 4 widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  DIMENSION_6_4 = 7,

  /**
   * 2 x 3 widget. Available for wearable devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  DIMENSION_2_3 = 8,

  /**
   * 3 x 3 widget. Available for wearable devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  DIMENSION_3_3 = 9
}

/**
 * Enumerates the widget rendering modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11 dynamic
 */
declare enum FormRenderingMode {

  /**
   * Full color mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  FULL_COLOR = 0,

  /**
   * Single color mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  SINGLE_COLOR = 1
}

/**
 * Defines the FormShape enum.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 */
declare enum FormShape {
  /**
   * The rect shape.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  RECT = 1,

  /**
   * The circle shape.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  CIRCLE = 2
}

/**
 * Enumerates the card color modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
enum FormColorMode {  
  /**
   * Same with the system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  MODE_AUTO = -1,

  /**
   * Dark.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  MODE_DARK = 0,

  /**
   * Light.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  MODE_LIGHT = 1
}

/**
 * Provides the widget information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 */
declare interface FormInfo {
  /**
   * Widget ID. Set this parameter to **0** for a new widget.
   * 
   * **NOTE**
   * 
   * Different widget hosts cannot use the same ID.
   * 
   * If a widget host uses the same ID for two widgets, the one added later is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  id: number | string;

  /**
   * Widget name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  name: string;

  /**
   * Bundle name of the widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  bundle: string;

  /**
   * Ability name of the widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  ability: string;

  /**
   * Module name of the widget.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  module: string;

  /**
   * Dimensions of the widget. The 2 x 2, 4 x 4, 4 x 2, and more options are available.
   * 
   * Default value: **Dimension_2_2**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  dimension?: FormDimension;

  /**
   * Whether the widget is a temporary widget. **true**: The widget is a temporary widget. **false**: The widget is not 
   * a temporary widget.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  temporary?: boolean;

  /**
   * The want of the form.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;

  /**
   * Widget rendering mode. Default value: **FULL_COLOR**. The options are as follows:
   * 
   * - **FULL_COLOR**: full color mode, where the widget framework does not change the widget effect, which means that 
   * the widget is displayed in the effect as you set it.
   * - **SINGLE_COLOR**: single color mode, where the widget framework sets the widget background to transparent. In 
   * this mode you need to set the widget style based on the best practices.
   * 
   * **NOTE**
   * 
   * If the system does not support unified rendering, the widget framework does not set the widget background to 
   * transparent in single color mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  renderingMode?: FormRenderingMode;

  /**
   * The shape of the form.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  shape?: FormShape;

  /**
   * Whether the widget is exempt from app lock. **true**: The widget is exempt from app lock management. No app lock 
   * overlay is displayed when an app lock is applied to the host application. **false**: The widget is managed by app 
   * lock. The app lock overlay is displayed when an app lock is applied to the host application.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20 dynamic
   */
  exemptAppLock?: boolean;
}

/**
 * Defines the FormComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
interface FormComponentInterface {
  /**
   * Set a new value of form info.
   *
   * @param { {
   *     id: number;
   *     name: string;
   *     bundle: string;
   *     ability: string;
   *     module: string;
   *     dimension?: FormDimension;
   *     temporary?: boolean;
   *     want?: import('../api/@ohos.app.ability.Want').default;
   *     } } value [since 7 - 11]
   * @param { object } value [since 9 - 11]
   * @param { FormInfo } value [since 12]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  (value: FormInfo): FormComponentAttribute;
}

/**
 * Represents the parameters for obtaining a widget ID (**formId**) when querying or uninstalling a widget.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 */
interface FormCallbackInfo {
  /**
   * Widget ID of the number type.
   * 
   * **NOTE**
   * 
   * If the obtained ID is **-1**, the ID is greater than or equal to 2^53. In this case, you need to use **idString** 
   * to obtain the ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  id: number;

  /**
   * Widget ID of the string type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  idString: string;

  /**
   * Indicates whether the form is locked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 22 dynamic
   */
  isLocked: boolean;
}
/**
 * Provides the widget size information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 18 dynamic
 */
interface FormSize {
  /**
   * Width of the widget, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  width: number;

  /**
   * Height of the widget, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  height: number;
}

/**
 * Provides the widget error information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 18 dynamic
 */
interface ErrorInformation {
  /**
   * [Error code](docroot://reference/apis-form-kit/errorcode-form.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  errcode: number;

  /**
   * Error message.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  msg: string;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare class FormComponentAttribute extends CommonMethod<FormComponentAttribute> {
  /**
   * Sets the display area size of the card.
   * Anonymous Object Rectification
   *
   * @param { object } value [since 7 - 17]
   * @param { FormSize } formSize - The size of Form. [since 18]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  size(formSize: FormSize): FormComponentAttribute;

  /**
   * Card module name.
   *
   * @param { string } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  moduleName(value: string): FormComponentAttribute;

  /**
   * Set the card size.
   *
   * @param { FormDimension } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  dimension(value: FormDimension): FormComponentAttribute;

  /**
   * Indicates whether to allow card update.
   *
   * @param { boolean } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  allowUpdate(value: boolean): FormComponentAttribute;

  /**
   * Whether the card is visible.
   *
   * @param { Visibility } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  visibility(value: Visibility): FormComponentAttribute;

  /**
   * Set the color mode of the card.
   *
   * @param { FormColorMode } value - The form color mode to set.
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  colorMode(value: FormColorMode): FormComponentAttribute;

  /**
   * This function is triggered after card information is obtained.
   * For details about the form information, see the definition of the original capability subsystem.
   *
   * @param { function } callback [since 7 - 11]
   * @param { Callback<FormCallbackInfo> } callback [since 12]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  onAcquired(callback: Callback<FormCallbackInfo>): FormComponentAttribute;

  /**
   * Card loading error.
   * Anonymous Object Rectification
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<ErrorInformation> } callback [since 18]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  onError(callback: Callback<ErrorInformation>): FormComponentAttribute;

  /**
   * Card to be redirected.
   * Anonymous Object Rectification
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<object> } callback [since 18]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  onRouter(callback: Callback<object>): FormComponentAttribute;

  /**
   * Uninstall Card.
   *
   * @param { function } callback [since 7 - 11]
   * @param { Callback<FormCallbackInfo> } callback [since 12]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  onUninstall(callback: Callback<FormCallbackInfo>): FormComponentAttribute;

  /**
   * Card to be loaded.
   * Anonymous Object Rectification
   *
   * @param { function } callback [since 10 - 17]
   * @param { VoidCallback } callback [since 18]
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10 dynamic
   */
  onLoad(callback: VoidCallback): FormComponentAttribute;

  /**
   * Card has been updated.
   *
   * @param { Callback<FormCallbackInfo> } callback
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  onUpdate(callback: Callback<FormCallbackInfo>): FormComponentAttribute;
}

/**
 * Defines FormComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare const FormComponent: FormComponentInterface;

/**
 * Defines FormComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare const FormComponentInstance: FormComponentAttribute;
