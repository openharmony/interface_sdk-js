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
 * @file
 * @kit ArkUI
 */
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface FormLinkOptions {
  /**
   * action的类型，支持三种预定义的类型：
   * 
   * - router：跳转到提供方应用的指定UIAbility。
   * 
   * - message：自定义消息，触发后会调用提供方FormExtensionAbility的
   * [onFormEvent()]{@link @ohos.app.form.FormExtensionAbility:FormExtensionAbility#onFormEvent}生命周期回调。
   * 
   * - call：后台启动提供方应用。触发后会拉起提供方应用的指定UIAbility（仅支持launchType为
   * [singleton](docroot://application-models/uiability-launch-type.md#singleton启动模式)的UIAbility，即启动模式为单实例的UIAbility），但不会
   * 调度到前台。提供方应用需要具备后台运行权限(
   * [ohos.permission.KEEP_BACKGROUND_RUNNING](docroot://security/AccessToken/permissions-for-all.md#ohospermissionkeep_background_running)
   * )。 
   * 
   * **说明：** 
   * 
   * 不推荐使用router事件刷新卡片UI。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action: string;

  /**
   * action为router / call 类型时跳转的模块名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  moduleName?: string;

  /**
   * action为router / call 类型时跳转的包名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bundleName?: string;

  /**
   * action为router / call 类型时跳转的UIAbility名。
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
   * action为router 类型时跳转的UIAbility的统一资源标识符。uri和abilityName同时存在时，abilityName优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  uri?: string;

  /**
   * 当前action携带的额外参数，内容使用JSON格式的键值对形式。call 类型时需填入参数'method'，且类型需要为string类型，用于触发UIAbility中对应的方法。 
   * 
   * **说明：** 
   * 
   * 不建议通过params传递卡片内部的状态变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  params?: Object;
}

/**
 * 提供静态卡片交互组件，用于静态卡片内部和卡片提供方应用间的交互，当前支持router、message和call三种类型的事件。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可以在静态卡片中使用。
 * >
 * > - 本文仅提供静态卡片开发指导，其他卡片相关内容请参考[卡片开发指南](docroot://form/formkit-overview.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface FormLinkInterface {
  /**
   *
   * @param { FormLinkOptions } options - 定义卡片信息
   * @returns { FormLinkAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options: FormLinkOptions): FormLinkAttribute;
}

/**
 * 支持[通用属性]{@link ./common}。
 * 
 * 不支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class FormLinkAttribute extends CommonMethod<FormLinkAttribute> {
}

/**
 * 提供静态卡片交互组件，用于静态卡片内部和卡片提供方应用间的交互，当前支持router、message和call三种类型的事件。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可以在静态卡片中使用。
 * >
 * > - 本文仅提供静态卡片开发指导，其他卡片相关内容请参考[卡片开发指南](docroot://form/formkit-overview.md)。
 * 
 * ###### 权限
 * 
 * 无
 * 
 * ###### 子组件
 * 
 * 支持单个子组件。
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