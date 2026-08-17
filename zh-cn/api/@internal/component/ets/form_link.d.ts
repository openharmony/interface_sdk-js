/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Defines the FormLink options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface FormLinkOptions {
  /**
   * Action type.
   * 
   * - **"router"**: redirection to the specified UIAbility of the widget provider.
   * - **"message"**: custom message. If this type of action is triggered, the 
   * [onFormEvent()]{@link @ohos.app.form.FormExtensionAbility:FormExtensionAbility.onFormEvent}
   * lifecycle callback of the provider FormExtensionAbility is called.
   * - **"call"**: launch of the widget provider in the background. If this type of action is triggered, the specified 
   * UIAbility (whose launch type must be [singleton](docroot://application-models/uiability-launch-type.md#singleton)
   * of the widget provider is started in the background, but not displayed in the foreground. This action type requires
   *  that the widget provider should have the 
   * [ohos.permission.KEEP_BACKGROUND_RUNNING](docroot://security/AccessToken/permissions-for-all.md#ohospermissionkeep_background_running)
   *  permission.
   * 
   * **NOTE**
   * 
   * Whenever possible, avoid using the router event to refresh the widget UI.
   * 
   * This API can be used in ArkTS widgets since API version 10.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action: string;

  /**
   * Name of the target module when action is **"router"** or **"call"**.
   * 
   * This API can be used in ArkTS widgets since API version 10.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  moduleName?: string;

  /**
   * Name of the target bundle when action is **"router"** or **"call"**.
   * 
   * This API can be used in ArkTS widgets since API version 10.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bundleName?: string;

  /**
   * Name of the target UIAbility when action is **"router"** or **"call"**.
   * 
   * This API can be used in ArkTS widgets since API version 10.
   *
   * @type { string } [since 10 - 10]
   * @type { ?string } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  abilityName?: string;

  /**
   * URI of the target UIAbility when action is **"router"**. If both **uri** and **abilityName** are set, 
   * **abilityName** takes precedence.
   * 
   * This API can be used in ArkTS widgets since API version 11.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  uri?: string;

  /**
   * Additional parameters carried in the current action. The value is a key-value pair in JSON format. For the **"call"
   * ** action type, the **method** parameter must be set and its value type must be string.
   * 
   * **NOTE**
   * 
   * Whenever possible, avoid using **params** to transfer internal state variables of widgets.
   * 
   * This API can be used in ArkTS widgets since API version 10.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  params?: Object;
}

/**
 * Defines the FormLink interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface FormLinkInterface {
  /**
   * Init FormLink component with options.
   *
   * @param { FormLinkOptions } options - Widget information.
   * @returns { FormLinkAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options: FormLinkOptions): FormLinkAttribute;
}

/**
 * The [universal attributes]{@link common} are supported.
 * 
 * The [universal events]{@link common} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class FormLinkAttribute extends CommonMethod<FormLinkAttribute> {
}

/**
 * The **FormLink** component is provided for interactions between static widgets and widget providers. It supports 
 * three types of events: router, message, and call.
 * 
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Updates will be marked with a superscript to indicate their 
 * > earliest API version.
 * >
 * > - This component can be used only in static widgets.
 * >
 * > - This document covers static widget development only. For comprehensive widget development guidance, see the 
 * > [widget development guide](docroot://form/formkit-overview.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const FormLink: FormLinkInterface;

/**
 * Defines FormLink component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const FormLinkInstance: FormLinkAttribute;
