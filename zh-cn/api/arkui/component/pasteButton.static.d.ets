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

import { ButtonType } from './button';
import { ClickEvent, AttributeModifier, CommonMethod } from './common';
import { SecurityComponentMethod } from './securityComponent';
import { BusinessError } from '../../@ohos.base';
import { ComponentBuilder } from './builder';

/**
 * 粘贴控件的图标风格。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PasteIconStyle {
  /**
   * 粘贴控件展示线条样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LINES = 0
}

/**
 * 粘贴控件的文本描述。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PasteDescription {
  /**
   * 粘贴控件的文字描述为"粘贴"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PASTE = 0
}

/**
 * 用于设置粘贴控件的图标、文本、按钮类型等属性。
 *
 * > **说明**
 * >
 * > - 建议icon或text至少传入一个。
 *
 * > - 如果icon、text都不传入，**PasteButton**将使用默认样式创建，默认样式：
 * > **PasteIconStyle**默认样式为**LINES**；**PasteDescription**默认样式为**PASTE**；**ButtonType**默认样式为**Capsule**。
 *
 * > - **icon**、**text**和**buttonType**不支持动态修改。这是因为安全控件的样式和属性在创建时已通过系统校验，动态修改可能导致
 * > 控件样式不符合安全控件规范，从而影响授权的有效性。
 *
 * @interface PasteButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PasteButtonOptions {
  /**
   * 设置粘贴控件的图标风格。
   * 默认值：不显示图标。
   * <br>若text和icon均不传入，控件将显示为默认样式。
   *
   * @type { ?PasteIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: PasteIconStyle;

  /**
   * 设置粘贴控件的文本描述。
   * 默认值：不显示文本描述。
   * <br>若text和icon均不传入，控件将显示为默认样式。
   *
   * @type { ?PasteDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: PasteDescription;

  /**
   * 设置粘贴控件的按钮形状。
   * 默认值：ButtonType.Capsule。
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  buttonType?: ButtonType;
}

/**
 * 粘贴控件点击后的授权结果。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PasteButtonOnClickResult {
  /**
   * 粘贴控件点击后权限授权成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SUCCESS = 0,
  /**
   * 粘贴控件点击后权限授权失败。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * 点击粘贴控件触发该回调。
 *
 * @param { ClickEvent } event - 点击事件对象，包含点击位置、时间戳、输入设备等信息。
 * @param { PasteButtonOnClickResult } result - 剪贴板权限的授权结果。
 *     <br>返回SUCCESS表示已获得当前剪贴板内容的临时读取权限，可以继续执行读取操作；返回TEMPORARY_AUTHORIZATION_FAILED表示本次授权未成功，
 *     不应继续读取剪贴板内容。
 * @param { BusinessError<void> } [error] - 点击按钮时的错误码和错误信息。
 *     <br>默认值：undefined。
 *     <br>授权结果需通过result参数判断。<br/>错误码1表示系统内部错误。请检查系统状态后重试。<br/>错误码
 *     2表示属性设置错误，包括但不限于：<br/>1. 字体或图标设置过小。<br/>2. 字体或图标与控件背景颜色相近。<br/>3. 字体或图标颜色过于透明。
 *     <br/>4. padding为负值。<br/>5. 按钮被其他组件或窗口遮挡。<br/>6. 文本超出控件背景范围。<br/>7. 按钮超出窗口或屏幕。
 *     <br/>8. 按钮整体尺寸过大。<br/>9. 按钮文本被截断，显示不全。<br/>10. 部分安全控件相关属性的设置导致控件无法正常显示。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PasteButtonCallback 
  = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * 该组件仅能继承[安全控件通用属性]{@link ./securityComponent}。
 *
 * <br>仅支持以下事件。
 *
 * @extends SecurityComponentMethod
 * @interface PasteButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PasteButtonAttribute extends SecurityComponentMethod {
  /**
   * 点击粘贴控件触发该回调，回调返回授权结果。授权成功后应用可临时获取读取剪贴板权限。
   *
   * > **说明**
   * > - 为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式的
   * > [约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。
   *
   * @param { PasteButtonCallback | undefined } event - 点击事件的回调函数，用于处理粘贴控件点击后的授权结果。
   *     <br>设置undefined时即没有回调。
   * @returns { PasteButtonAttribute } 返回粘贴控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClick(event: PasteButtonCallback | undefined): this;
}

/**
 * 默认创建带有图标、文本、背景的粘贴控件。控件创建完成后，用户点击时系统会执行授权校验；授权成功后，应用可读取当前剪贴板内容。
 * <br>**说明**</br>
 * <ul><li>为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式的
 * [约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。</li></ul>
 *
 * @param { PasteButtonOptions } [options] - 粘贴控件的配置选项，用于指定图标、文本和按钮类型等元素属性。
 *     <br>不传入该参数时，控件以默认样式创建：**icon: PasteIconStyle.LINES**、**text: PasteDescription.PASTE**、
 *     **buttonType: ButtonType.Capsule**。
 *     <br>建议至少显式设置icon或text中的一项，以便用户清楚识别控件用途。
 * @returns { PasteButtonAttribute } 粘贴控件的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function PasteButton(
    options?: PasteButtonOptions
): PasteButtonAttribute;
