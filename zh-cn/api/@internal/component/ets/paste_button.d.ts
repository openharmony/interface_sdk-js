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
 * 粘贴控件的图标风格。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum PasteIconStyle {
  /**
   * 粘贴控件展示线条样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LINES = 0
}

/**
 * 粘贴控件的文本描述。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum PasteDescription {
  /**
   * 粘贴控件的文字描述为“粘贴”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PASTE = 0
}

/**
 * 用于设置粘贴控件的图标、文本、按钮类型等属性。
 *
 * > **说明**
 * > - 建议icon或text至少传入一个。
 * >
 * > - 如果icon、text都不传入，PasteButton将使用默认样式创建，默认样式：PasteIconStyle默认样式为LINES；PasteDescription默认样式为PASTEButtonType默认样式为Capsule。
 * >
 * > - icon、text和buttonType不支持动态修改。这是因为安全控件的样式和属性在创建时已通过系统校验，动态修改可能导致控件样式不符合安全控件规范，从而影响授权的有效性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface PasteButtonOptions {
  /**
   * 设置粘贴控件的图标风格。
   * 默认值：不显示图标。
   * <br>若同时也不传text，控件将显示为默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: PasteIconStyle;

  /**
   * 设置粘贴控件的文本描述。
   * 默认值：不显示文本描述。
   * <br>若同时也不传icon，控件将显示为默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: PasteDescription;

  /**
   * 设置粘贴控件的按钮形状。
   * Capsule。
   * 默认值：ButtonType。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buttonType?: ButtonType;
}

/**
 * 粘贴控件点击后的授权结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum PasteButtonOnClickResult {
  /**
   * 粘贴控件点击后权限授权成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SUCCESS = 0,

  /**
   * 粘贴控件点击后权限授权失败。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * 定义用于设置粘贴按钮的接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface PasteButtonInterface {
  /**
   * 默认创建带有图标、文本、背景的粘贴控件。控件创建完成后，用户点击时系统会执行授权校验；授权成功后，应用可读取当前剪贴板内容。
   * <br>**说明**</br>
   * <ul><li>为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式
   * 的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。</li></ul>
   *
   * @returns { PasteButtonAttribute } 返回粘贴控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (): PasteButtonAttribute;

  /**
   * 使用指定的图标、文本和按钮类型创建粘贴按钮。创建后，系统会触发一个
   * 点击按钮时的授权检查。授权成功后，应用将获得临时权限
   * 读取剪贴板。
   * <br>**说明**</br>
   * <ul><li>为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式
   * 的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。</li>
   * </ul>
   *
   * @param { PasteButtonOptions } options - 粘贴控件的配置选项，用于指定图标、文本和按钮类型等元素属性。
   *     <br>建议至少显式设置icon或text中的一项，以便用户清楚识别控件用途。<br/>若icon和text都未传入，则options不生效，控件显示为默认样式：<br/>{<br/>icon: PasteIconStyle.LINES,<br/>text: PasteDescription.PASTE,<br/>buttonType: ButtonType.Capsule <br/>}
   * @returns { PasteButtonAttribute } 返回粘贴控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options: PasteButtonOptions): PasteButtonAttribute;
}

/**
 * 点击粘贴控件触发该回调。
 *
 * @param { ClickEvent } event - 点击事件对象，包含点击位置、时间戳、输入设备等信息。
 * @param { PasteButtonOnClickResult } result - 剪贴板权限的授权结果。
 *     <br>返回SUCCESS表示已获得当前剪贴板内容的临时读取权限，可以继续执行读取操作；返回TEMPORARY_AUTHORIZATION_FAILED表示本次授权未成功，不应继续读取剪贴板内容。
 * @param { BusinessError<void> } [error] - 点击按钮时的错误码和错误信息。
 *     <br>默认值:undefined。
 *     <br>授权结果需通过result参数判断。<br/>错误码1表示系统内部错误。请检查系统状态后重试。<br/>错误码2表示属性设置错误，包括但不限于：<br/>1. 字体或图标设置过小。<br/>2. 字体或图标与控件背景颜色相近。<br/>3. 字体或图标颜色过于透明。<br/>4. padding为负值。<br/>5. 按钮被其他组件或窗口遮挡。<br/>6. 文本超出控件背景范围。<br/>7. 按钮超出窗口或屏幕。<br/>8. 按钮整体尺寸过大。<br/>9. 按钮文本被截断，显示不全。<br/>10. 部分安全控件相关属性的设置导致控件无法正常显示。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
type PasteButtonCallback = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * 不支持通用属性，仅继承[安全控件通用属性]{@link ./security_component}。
 *
 * 不支持通用事件，仅支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class PasteButtonAttribute extends SecurityComponentMethod<PasteButtonAttribute> {
  /**
   * 点击粘贴控件触发该回调，回调返回授权结果。授权成功后应用可临时获取读取剪贴板权限。
   *
   * > **说明**
   * > - 为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。
   *
   * @param { function } event - 点击事件的回调函数，用于处理粘贴控件点击后的授权结果。
   *     <br>从API version 10-17时, 参数类型为 (event: [ClickEvent]{@link ClickEvent},
   *     result: [PasteButtonOnClickResult]{@link PasteButtonOnClickResult}) => void. [since 10 - 17]
   * @param { PasteButtonCallback } event - 点击事件的回调函数，用于处理粘贴控件点击后的授权结果。
   *     <br>从API version 18开始，统一使用[PasteButtonCallback]{@link PasteButtonCallback}，可额外获取error信息。 [since 18]
   * @returns { PasteButtonAttribute } 返回安全控件属性
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onClick(event: PasteButtonCallback): PasteButtonAttribute;
}

/**
 * 安全控件的粘贴控件。用户点击粘贴控件，应用可以临时获取读取剪贴板权限。
 * <br>**说明**</br>
 * <ul><li>###### 核心枚举类型</li>
 * <li>**[PasteIconStyle]{@link PasteIconStyle}：** 粘贴控件图标风格枚举，用于指定控件展示的图标风格。</li>
 * <li>**[PasteDescription]{@link PasteDescription}：** 粘贴控件文本描述枚举，用于指定控件展示的文本描述。</li>
 * <li>**[PasteButtonOnClickResult]{@link PasteButtonOnClickResult}：** 粘贴控件点击结果枚举，用于表示点击后授权是否成功。</li>
 * <li>###### 核心接口类型</li>
 * <li>**[PasteButtonOptions]{@link PasteButtonOptions}：** 粘贴控件配置对象，用于指定图标、文字和按钮类型等元素属性。</li>
 * <li>**[PasteButtonCallback]{@link PasteButtonCallback}：** 粘贴控件点击回调类型，用于返回点击事件、授权结果和错误信息。</li>
 * <li>###### 子组件</li>
 * <li>不支持</li></ul>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const PasteButton: PasteButtonInterface;

/**
 * 安全粘贴控件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const PasteButtonInstance: PasteButtonAttribute;