/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import { BusinessError } from './@ohos.base';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * 卡片数据绑定模块提供卡片数据绑定的能力，支持创建FormBindingData对象并设置卡片展示数据。适用于卡片数据更新、图片数据传递等场景，能够帮助开发者便捷地管理卡片展示内容，提升卡片数据管理的效率。
 *
 * @syscap SystemCapability.Ability.Form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace formBindingData {
  /**
   * 创建一个FormBindingData对象。
   *
   * @param { Object | string } [obj] - 卡片要展示的数据，用于绑定卡片UI显示的内容。当需要向卡片传递数据时传入此参数，可以是包含若干键值对的Object或者JSON格式的字符串。不传入时创建一个空的
   *     FormBindingData对象，卡片将显示默认内容。其中图片数据以'formImages'作为标识，内容为图片标识与图片文件描述符的键值对
   *     `{'formImages': {'key1': fd1, 'key2': fd2}}`。
   *     <br>**说明：** 在[卡片刷新](docroot://form/arkts-ui-widget-interaction-overview.md)过程中，卡片UI通过
   *     [@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop)接收卡片数据时，
   *     FormBindingData对象会序列化，即卡片数据会转换成string类型。从API version 20开始，如果卡片刷新的数据通过共享内存更新，刷新数据总大小不超过10MB，刷新图片数量不超过20张，API
   *     version 19及之前的版本，图片文件数量上限为5张，每张限制内存2MB，超出限制的图片会显示异常。
   * @returns { FormBindingData } 根据传入数据创建的FormBindingData对象，用于卡片数据绑定，向卡片提供要展示的数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createFormBindingData(obj?: Object | string): FormBindingData;

  /**
   * Create an FormBindingData instance.
   *
   * @param { RecordData } [obj] - Indicates the FormBindingData instance data.
   * @returns { FormBindingData } Returns the FormBindingData.
   * @syscap SystemCapability.Ability.Form
   * @since 23 static
   */
  function createFormBindingData(obj?: RecordData): FormBindingData;

  /**
   * FormBindingData对象的属性定义。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface FormBindingData {
    /**
     * 卡片要展示的数据。可以是包含若干键值对的Object或者JSON格式的字符串。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    data: Object;

    /**
     * Data for updating.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 23 static
     */
    data: RecordData;

    /**
     * 卡片代理刷新的订阅信息，配置后会订阅代理刷新消息。默认为空数组，表示不订阅代理刷新消息。当需要使用卡片代理刷新功能时传入此参数，不传入时默认为空数组（不使用代理刷新）。
     *
     * @syscap SystemCapability.Ability.Form
     * @StageModelOnly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    proxies?: Array<ProxyData>;
  }

  /**
   * 卡片代理刷新订阅数据信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ProxyData {
    /**
     * 卡片代理刷新的订阅标识，与数据发布者保持一致。
     *
     * @syscap SystemCapability.Ability.Form
     * @StageModelOnly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * 卡片代理刷新的订阅条件，用于指定订阅的消息过滤条件。设置后会根据subscriberId匹配相应的代理刷新消息，默认值为当前卡片的formId。当需要指定特定的订阅条件时传入此参数，不传入时默认值为当前卡片的formId。
     *
     * @syscap SystemCapability.Ability.Form
     * @StageModelOnly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    subscriberId?: string;
  }
}
export default formBindingData;