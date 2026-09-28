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
import { Resource, Dimension, BorderRadiuses, SizeOptions, ResourceColor } from './units';
import { ButtonType } from './button';
import { ClickEvent, AttributeModifier, CommonMethod } from './common';
import { SecurityComponentMethod } from './securityComponent';
import { BusinessError } from '../../@ohos.base';
import { ComponentBuilder } from './builder';
import { FontWeight } from './enums';
import { SymbolRenderingStrategy } from './symbolglyph';
/**
 * 保存控件的图标风格。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveIconStyle {
  /**
   * 保存控件展示填充样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FULL_FILLED = 0,
  /**
   * 保存控件展示线条样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LINES = 1,
  /**
   * 保存控件展示图片样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  PICTURE = 2
}
/**
 * 保存控件的文本描述。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveDescription {
  /**
   * 保存控件的文字描述为"下载"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD = 0,
  /**
   * 保存控件的文字描述为"下载文件"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD_FILE = 1,
  /**
   * 保存控件的文字描述为"保存"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE = 2,
  /**
   * 保存控件的文字描述为"保存图片"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_IMAGE = 3,
  /**
   * 保存控件的文字描述为"保存文件"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_FILE = 4,
  /**
   * 保存控件的文字描述为"下载分享"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD_AND_SHARE = 5,
  /**
   * 保存控件的文字描述为"接收"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RECEIVE = 6,
  /**
   * 保存控件的文字描述为"继续接收"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTINUE_TO_RECEIVE = 7,
  /**
   * 保存控件的文字描述为"保存至图库"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_TO_GALLERY = 8,
  /**
   * 保存控件的文字描述为"导出"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXPORT_TO_GALLERY = 9,
  /**
   * 保存控件的文字描述为"快速保存图片"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  QUICK_SAVE_TO_GALLERY = 10,
  /**
   * 保存控件的文字描述为"重新保存"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESAVE_TO_GALLERY = 11,

  /**
   * 保存控件的文字描述为"全部保存"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_ALL = 12
}
/**
 * 用于设置保存控件的图标、文本、按钮类型等属性。
 *
 * > **说明**
 * >
 * > - 建议icon或text至少传入一个。
 * >
 * > - 如果icon、text都不传入，**SaveButton**将使用默认样式创建，默认样式：
 * > **SaveIconStyle**默认样式为**FULL_FILLED**；**SaveDescription**默认样式为**DOWNLOAD**；**ButtonType**默认样式为**Capsule**。
 * >
 * > - **icon**、**text**和**buttonType**不支持动态修改。
 *
 * @interface SaveButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SaveButtonOptions {
  /**
   * 设置保存控件的图标风格。
   * <br>不传入该参数表示不显示图标；若icon和text均不传入，整体配置将显示为默认样式。
   *
   * @type { ?SaveIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: SaveIconStyle;

  /**
   * 设置保存控件的文本描述。
   * <br>不传入该参数表示不显示文本描述；若text和icon均不传入，整体配置将显示为默认样式。
   *
   * @type { ?SaveDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: SaveDescription;

  /**
   * 设置保存控件的背景样式。
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
 * 保存控件点击后的授权结果。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveButtonOnClickResult {
  /**
   * 保存控件点击后权限授权成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SUCCESS = 0,
  /**
   * 保存控件点击后权限授权失败。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1,
  /**
   * 保存控件点击后，弹窗中用户取消授权。该值仅在调用[userCancelEvent]{@link SaveButtonAttribute#userCancelEvent}
   * 并设置参数为true时，才会通过回调结果返回。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CANCELED_BY_USER = 2
}
/**
 * 点击保存控件触发该回调。
 *
 * @param { ClickEvent } event - 点击事件对象，包含点击位置、时间戳、输入设备等信息。
 * @param { SaveButtonOnClickResult } result - 授权结果。
 *     <br>返回SUCCESS表示当前保存动作已获得临时授权，可继续访问媒体库接口；返回TEMPORARY_AUTHORIZATION_FAILED时，
 *     不应继续执行后续保存动作。返回CANCELED_BY_USER时，表示用户在授权弹窗中主动取消授权，该结果仅在调用
 *     [userCancelEvent]{@link SaveButtonAttribute#userCancelEvent}并设置参数为true时才会返回；
 *     若未设置userCancelEvent(true)，用户取消授权时将返回TEMPORARY_AUTHORIZATION_FAILED。
 * @param { BusinessError<void> } [error] - 点击按钮时的错误码和错误信息。不传入该参数时为undefined。
 *     <br>授权结果需通过result参数判断。
 *     <br>
 *     错误码1表示系统内部错误，可能原因和处理建议如下：
 *     <br>1. IPC（Inter-Process Communication，进程间通信）通信失败。请检查系统状态后重试。
 *     <br>2. 安全控件弹窗失败。请检查保存控件是否被遮挡或是否满足安全控件样式约束，修正后重试。
 *     <br>错误码2表示属性设置错误，可能原因如下：
 *     <br>1. 字体或图标设置过小。
 *     <br>2. 字体或图标与背景颜色相近。
 *     <br>3. 字体或图标颜色过于透明。
 *     <br>4. padding为负值。
 *     <br>5. 按钮被其他组件或窗口遮挡。
 *     <br>6. 文本超出控件背景范围。
 *     <br>7. 按钮超出窗口或屏幕。
 *     <br>8. 按钮整体尺寸过大。
 *     <br>9. 按钮文本被截断，显示不全。
 *     <br>10. 其他属性设置不当影响安全控件显示。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SaveButtonCallback 
  = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * 不支持通用属性，除了继承[安全控件通用属性]{@link ./securityComponent}，还支持以下属性。
 * 不支持通用事件，仅支持以下事件。
 *
 * @extends SecurityComponentMethod
 * @interface SaveButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SaveButtonAttribute extends SecurityComponentMethod {
  /**
   * 点击保存控件触发该回调。用户首次点击保存控件时会展示授权弹窗，点击允许后授权成功，应用会获取访问媒体库接口的临时授权
   * （授权持续时间见[SaveButton]{@link SaveButton}构造函数说明）；点击拒绝或关闭弹窗则授权失败。
   *
   * @param { SaveButtonCallback | undefined } event - 点击事件的回调对象，包含点击事件信息、授权结果和错误信息。
   *     <br>设置undefined时即没有回调。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClick(event: SaveButtonCallback | undefined): this;

  /**
   * 设置保存控件的图标。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Resource | undefined } icon - 自定义图标资源信息，仅支持Resource类型的数据源。
   *     <br>可支持的图片格式：png、jpg、jpeg、bmp、svg、webp、gif和heif等，支持的图片格式范围见[Image]{@link ./image}。
   *     当资源为非图片资源或不支持的格式时，图标显示为空白。
   *     <br>从API版本26.0.0开始，支持Symbol格式的Resource类型的数据源。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则自定义图标设置不生效，保存控件保持默认样式。
   *     <br>设置undefined时，保存控件保持默认样式。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setIcon(icon: Resource | undefined): this;

  /**
   * 设置保存控件的文本。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { string | Resource | undefined } text - 自定义文本信息。适用于需要使用与业务强相关的文本替代系统预置描述的场景。
   *     传入字符串时直接使用文本内容；传入Resource时，可配合资源管理实现多语言文本。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效，保存控件保持默认样式。
   *     <br>设置undefined时，保存控件保持默认样式。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setText(text: string | Resource | undefined): this;

  /**
   * 设置保存控件的图标尺寸。
   *
   * @param { Dimension | SizeOptions | undefined } size - 图标尺寸，支持像素单位（vp、px等）。
   *     <br>默认值：宽高均为16vp。<br>不支持设置百分比字符串。若设置Dimension类型入参的百分比字符串，则图标尺寸显示为默认值；
   *     若设置SizeOptions类型入参的width或height属性为百分比字符串，则图标尺寸显示为0vp。
   *     <br>对于保存控件提供的系统图标：
   *     <br>- 使用Dimension类型入参时，宽、高相等，均为设定值。
   *     <br>- 使用SizeOptions类型入参时，若宽、高设定值不一致，则宽、高相等取两者较小值；若仅设定其中一个值，则取该值作为宽、高值。
   *     系统提供图标采用此规则是为保证图标的正方形显示和视觉一致性。
   *     <br>对于自定义图标：
   *     <br>- 使用Dimension类型入参时，宽、高相等，均为设定值。
   *     <br>- 使用SizeOptions类型入参时，建议同时设定宽和高，此时按照指定宽、高生效；若仅设定其中一个值，则宽高均显示为该设定值。
   *     自定义图标允许灵活设定尺寸以适应不同图片比例。
   *     <br>- 当设定的宽高与自定义图标的宽高比例不一致时，图片按[ImageFit.Cover]{@link ./enums:ImageFit}的方式填充显示区域。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSize(size: Dimension | SizeOptions | undefined): this;

  /**
   * 设置保存控件图标的边框圆角半径。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Dimension | BorderRadiuses | undefined } radius - 保存控件图标的圆角半径，支持设置四个圆角。
   *     <br>默认值：四个圆角均为0vp。支持像素单位（vp、px等），取值范围≥0。传入负值时自动修正为0。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则图标的圆角半径设置不生效。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconBorderRadius(radius: Dimension | BorderRadiuses | undefined): this;

  /**
   * 设置保存控件的按压效果。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { boolean | undefined } enabled - 表示是否开启按压效果，true表示保存控件按压时显示按压效果，false表示保存控件按压时不显示按压效果。
   *     <br>默认值：true。<br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，按压效果设置不生效。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stateEffect(enabled: boolean | undefined): this;

  /**
   * 设置接收保存控件的用户取消授权事件。适用于需要区分用户主动取消授权和授权失败的场景，以便进行不同的业务处理，
   * 例如记录用户行为、提供重试提示等。
   *
   * @param { boolean | undefined } enabled - 表示是否接收保存控件的用户取消授权事件。
   *     <br>默认值：false。<br>true表示当用户在授权弹窗中主动取消时，会通过回调将结果区分为CANCELED_BY_USER；
   *     false表示不单独区分此类场景。
   *     <br/>当业务需要区分"用户取消"和"系统错误/授权失败"时，建议开启该参数。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  userCancelEvent(enabled: boolean | undefined): this;

  /**
   * 设置保存控件Symbol图标颜色。
   *
   * - 调用本方法前，需先调用[setIcon]{@link SaveButtonAttribute#setIcon}设置Symbol格式的图标资源（如$r('sys.symbol.xxx')），本方法才会生效。
   * - 若未设置Symbol图标，该方法设置的颜色不会生效。
   * - 建议与[symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy}配合使用，以实现不同的渲染效果。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Array<ResourceColor> | undefined } color - 设置保存控件Symbol图标颜色。适用于Symbol图标需要与业务视觉风格保持一致的场景。
   *     <br>默认值：随[symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy}不同而变化。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolIconColor(color: Array<ResourceColor> | undefined): this;

  /**
   * 设置保存控件Symbol图标渲染策略。
   *
   * - 调用本方法前，需先调用[setIcon]{@link SaveButtonAttribute#setIcon}设置Symbol格式的图标资源（如$r('sys.symbol.*xxx*')），本方法才会生效。
   * - 若未设置Symbol图标，该方法设置的渲染策略不会生效。
   * - 与[symbolIconColor]{@link SaveButtonAttribute#symbolIconColor}配合使用时，渲染策略会影响颜色数组的作用方式。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { SymbolRenderingStrategy | undefined } strategy - 保存控件Symbol图标渲染策略，用于控制Symbol图标的渲染方式。
   *     <br>默认值：SymbolRenderingStrategy.SINGLE。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolRenderingStrategy(strategy: SymbolRenderingStrategy | undefined): this;

  /**
   * 设置保存控件Symbol图标粗细。
   *
   * - 调用本方法前，需先调用[setIcon]{@link SaveButtonAttribute#setIcon}设置Symbol格式的图标资源（如$r('sys.symbol.*xxx*')），本方法才会生效。
   * - 若未设置Symbol图标，该方法设置的粗细不会生效。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { int | FontWeight | string | Resource | undefined } fontWeight - 设置保存控件Symbol图标粗细。
   *     <br>支持number类型：取值范围为[100, 900]，取值间隔为100，数值越大字体越粗。<br/>支持string类型：可传入number类型的数字字符串
   *     （如"400"），或[FontWeight]{@link FontWeight}的枚举值的小写字符串（如"normal"）。
   *     <br>默认值：FontWeight.Normal（对应数值400）。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效。
   *     <br>设置undefined时使用默认值进行设置。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolFontWeight(fontWeight: int | FontWeight | string | Resource | undefined): this;
}


/**
 * 默认创建带有图标、文本、背景的保存控件。用户首次使用保存控件时会展示弹窗，在点击允许后自动授权，应用会获取访问媒体库接口的临时授权。
 * 后续使用无需弹窗授权。
 * <br>授权持续时间为1分钟。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。
 * <br>**说明**</br>
 * <ul><li>为避免控件样式不合法导致授权失败，请开发者先了解安全控件样式的
 * [约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。</li></ul>
 *
 * @param { SaveButtonOptions } [options] - 保存控件的配置选项，用于指定图标、文本和按钮类型等元素属性。
 *     <br>不传入该参数时，控件以默认样式创建：**icon: SaveIconStyle.FULL_FILLED**、**text: SaveDescription.DOWNLOAD**、
 *     **buttonType: ButtonType.Capsule**。
 *     <br>建议至少显式设置 icon 或 text 中的一项，以确保用户能明确理解控件用途。
 * @returns { SaveButtonAttribute } 保存控件的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function SaveButton(
    options?: SaveButtonOptions 
): SaveButtonAttribute
