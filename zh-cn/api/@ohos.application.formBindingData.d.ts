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
 * @file 卡片数据绑定类
 * @kit API10LessDeprecatedModules
 */

/**
 * 卡片数据绑定模块提供卡片数据绑定的能力。包括FormBindingData对象的创建、相关信息的描述。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始废弃，
 *
 * @syscap SystemCapability.Ability.Form
 * @since 8
 * @deprecated since 9
 * @useinstead @ohos.app.form.formBindingData:formBindingData
 */
declare namespace formBindingData {
  /**
   * 创建一个FormBindingData对象。
   *
   * @param { Object | string } [obj] - JS卡片要展示的数据。可以是包含若干键值对的Object或者 json 格式的字符串。其中图片数据以'formImages'作为标识，内容为图片标识与图片文件描
   *     述符的键值对{'formImages': {'key1': fd1, 'key2': fd2}}。
   * @returns { FormBindingData } 根据传入数据创建的FormBindingData对象。
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formBindingData:formBindingData#createFormBindingData
   */
  function createFormBindingData(obj?: Object | string): FormBindingData;

  /**
   * FormBindingData提供卡片数据绑定的能力，用于存储卡片需要展示的数据。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formBindingData:formBindingData#FormBindingData
   */
  interface FormBindingData {
    /**
     * JS卡片要展示的数据。可以是包含若干键值对的Object或者 json 格式的字符串。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8
     * @deprecated since 9
     * @useinstead @ohos.app.form.formBindingData:formBindingData#FormBindingData
     */
    data: Object;
  }
}
export default formBindingData;