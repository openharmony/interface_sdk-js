/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file formProvider
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import formBindingData from './@ohos.application.formBindingData';
import formInfo from './@ohos.app.form.formInfo';
import Want from './@ohos.app.ability.Want';

/**
 * FormProvider模块提供了卡片提供方相关接口的能力，开发者在开发卡片时，可通过该模块提供接口实现刷新卡片，设置卡片刷新时间，获取卡片信息，请求发布卡片等。
 * 
 * > **说明：**
 * >
 * > 从API version 9 开始废弃，
 *
 * @syscap SystemCapability.Ability.Form
 * @since 8
 * @deprecated since 9
 * @useinstead @ohos.app.form.formProvider:formProvider
 */
declare namespace formProvider {
  /**
   * 设置指定卡片的下一次刷新时间，使用callback异步回调。
   *
   * @param { string } formId - 卡片标识。
   * @param { number } minute - 指定多久之后刷新。单位分钟，大于等于5。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formProvider:formProvider#setFormNextRefreshTime
   */
  function setFormNextRefreshTime(formId: string, minute: number, callback: AsyncCallback<void>): void;

  /**
   * 设置指定卡片的下一次刷新时间，使用Promise异步回调。
   *
   * @param { string } formId - 卡片标识。
   * @param { number } minute - 指定多久之后刷新。单位分钟，大于等于5。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formProvider:formProvider#setFormNextRefreshTime
   */
  function setFormNextRefreshTime(formId: string, minute: number): Promise<void>;

  /**
   * 更新指定的卡片，使用callback异步回调。
   *
   * @param { string } formId - 请求更新的卡片标识。
   * @param { formBindingData.FormBindingData } formBindingData - 用于更新的数据。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formProvider:formProvider#updateForm
   */
  function updateForm(
    formId: string,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 更新指定的卡片，使用Promise异步回调。
   *
   * @param { string } formId - 请求更新的卡片标识。
   * @param { formBindingData.FormBindingData } formBindingData - 用于更新的数据。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formProvider:formProvider#updateForm
   */
  function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;
}
export default formProvider;