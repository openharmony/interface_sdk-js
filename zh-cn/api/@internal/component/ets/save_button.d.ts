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
 * 保存控件的图标风格。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SaveIconStyle {
  /**
   * 保存控件展示填充样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  FULL_FILLED = 0,

  /**
   * 保存控件展示线条样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LINES = 1,

  /**
   * 保存控件展示图片样式图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  PICTURE = 2
}

/**
 * 保存控件的文本描述。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SaveDescription {
  /**
   * 保存控件的文字描述为“下载”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DOWNLOAD = 0,

  /**
   * 保存控件的文字描述为“下载文件”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DOWNLOAD_FILE = 1,

  /**
   * 保存控件的文字描述为“保存”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SAVE = 2,

  /**
   * 保存控件的文字描述为“保存图片”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SAVE_IMAGE = 3,

  /**
   * 保存控件的文字描述为“保存文件”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SAVE_FILE = 4,

  /**
   * 保存控件的文字描述为“下载分享”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DOWNLOAD_AND_SHARE = 5,

  /**
   * 保存控件的文字描述为“接收”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RECEIVE = 6,

  /**
   * 保存控件的文字描述为“继续接收”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CONTINUE_TO_RECEIVE = 7,

  /**
   * 保存控件的文字描述为“保存至图库”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  SAVE_TO_GALLERY = 8,

  /**
   * 保存控件的文字描述为“导出”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EXPORT_TO_GALLERY = 9,

  /**
   * 保存控件的文字描述为“快速保存图片”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  QUICK_SAVE_TO_GALLERY = 10,

  /**
   * 保存控件的文字描述为“重新保存”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  RESAVE_TO_GALLERY = 11,

  /**
   * 保存控件的文字描述为“全部保存”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
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
 * > - 如果icon、text都不传入，SaveButton将使用默认样式创建，默认样式：SaveIconStyle默认样式为FULL_FILLED；
 * > SaveDescription默认样式为DOWNLOAD；ButtonType默认样式为Capsule。
 * >
 * > - icon、text和buttonType不支持动态修改。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SaveButtonOptions {
  /**
   * 设置保存控件的图标风格。
   * <br>不传入该参数表示不显示图标；若同时也不传text，整体配置将显示为默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: SaveIconStyle;

  /**
   * 设置保存控件的文本描述。
   * <br>不传入该参数表示不显示文本描述；若同时也不传icon，整体配置将显示为默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: SaveDescription;

  /**
   * 设置保存控件的背景样式。
   * 默认值：ButtonType.Capsule。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buttonType?: ButtonType;
}

/**
 * 保存控件点击后的授权结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SaveButtonOnClickResult {
  /**
   * 保存控件点击后权限授权成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SUCCESS = 0,

  /**
   * 保存控件点击后权限授权失败。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1,

  /**
   * 保存控件点击后，弹窗中用户取消授权。仅在调用[userCancelEvent]{@link SaveButtonAttribute#userCancelEvent}并设置参数为true时，回调结果中才会返回该值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  CANCELED_BY_USER = 2
}

/**
 * 保存控件设置接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface SaveButtonInterface {
  /**
   * 默认创建带有图标、文本、背景的保存控件。用户首次使用保存控件时会展示弹窗，在点击允许后自动授权，应用会获取访问媒体库接口的临时授权。后续使用无需弹窗授权。
   * <br>在API version 19及之前的版本中，授权持续时间为10秒。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。
   * <br>在API version 20及之后的版本中，授权持续时间为1分钟。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。
   * <br>**说明**</br>
   * <ul>
   * <li>为避免控件样式不合法导致授权失败，请开发者先了解安全控件样式的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。
   * </li></ul>
   *
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (): SaveButtonAttribute;

  /**
   * 创建包含指定图标、文本或按钮类型的保存控件。用户首次使用保存控件时会展示弹窗，在点击允许后自动授权，应用会获取访问媒体库接口的临时授权。后续使用无需弹窗授权。
   * 在API version 19及之前的版本中，授权持续时间为10秒。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。
   * 在API version 20及之后的版本中，授权持续时间为1分钟。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。
   * <br>**说明**</br>
   * <ul>
   * <li>为避免控件样式不合法导致授权失败，请开发者先了解安全控件样式的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。
   * </li></ul>
   *
   * @param { SaveButtonOptions } options - 保存控件的配置选项，用于指定图标、文本和按钮类型等元素属性。
   *     <br>建议至少显式设置 icon 或 text 中的一项，以确保用户能明确理解控件用途；若两者都不传，控件显示为默认样式。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options: SaveButtonOptions): SaveButtonAttribute;
}

/**
 * 点击保存控件触发该回调。
 *
 * @param { ClickEvent } event - 点击事件对象，包含点击的位置、时间戳、输入设备等信息。
 * @param { SaveButtonOnClickResult } result - 授权结果。
 *     <br>返回SUCCESS表示当前保存动作已获得临时授权，可继续访问媒体库接口；返回TEMPORARY_AUTHORIZATION_FAILED时，不应继续执行后续保存动作。返回CANCELED_BY_USER时，表示用户在授权弹窗中主动取消授权，该结果仅在调用[userCancelEvent]{@link SaveButtonAttribute#userCancelEvent}并设置参数为true时才会返回；若未设置userCancelEvent(true)，用户取消授权时将返回TEMPORARY_AUTHORIZATION_FAILED。
 * @param { BusinessError<void> } [error] - 点击按钮时的错误码和错误信息。不传入该参数时为undefined。授权结果需通过result参数判断。
 *     <br>
 *     错误码1表示系统内部错误，可能原因和处理建议如下：<br>1. IPC（Inter-Process Communication，进程间通信）通信失败。请检查系统状态后重试。<br>2. 安全控件弹窗失败。请检查保存控件是否被遮挡或是否满足安全控件样式约束，修正后重试。<br>错误码2表示属性设置错误，具体包括以下情况：<br>1. 字体或图标设置过小。<br>2. 字体或图标与背景颜色相近。<br>3. 字体或图标颜色过于透明。<br>4. padding为负值。<br>5. 按钮被其他组件或窗口遮挡。<br>6. 文本超出控件背景范围。<br>7. 按钮超出窗口或屏幕。<br>8. 按钮整体尺寸过大。<br>9. 按钮文本被截断，显示不全。<br>10. 其他属性设置不当影响安全控件显示。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
type SaveButtonCallback = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * 不支持通用属性，除了继承[安全控件通用属性]{@link ./security_component}，还支持以下属性。
 * 不支持通用事件，仅支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class SaveButtonAttribute extends SecurityComponentMethod<SaveButtonAttribute> {
  /**
   * 点击保存控件触发该回调。用户首次点击保存控件时会展示授权弹窗，点击允许后授权成功，应用会获取访问媒体库接口的临时授权（授权持续时间见[SaveButton](docroot://reference/apis-arkui/arkui
   * -ts/ts-security-components-savebutton.md#savebutton-1)构造函数说明）；点击拒绝或关闭弹窗则授权失败。
   *
   * @param { function } event - 点击事件的回调对象，包含点击事件信息、授权结果和错误信息。
   *     <br>从API version 10-17时, 参数类型为 (event: [ClickEvent]{@link ClickEvent},
   *     result: [SaveButtonOnClickResult]{@link SaveButtonOnClickResult}) => void. [since 10 - 17]
   * @param { SaveButtonCallback } event - 点击事件的回调对象，包含点击事件信息、授权结果和错误信息。
   *     <br>从APIversion 18开始，统一使用SaveButtonCallback，可额外获取error信息。 [since 18]
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onClick(event: SaveButtonCallback): SaveButtonAttribute;

  /**
   * 设置保存控件的图标。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Resource } icon - 自定义图标资源信息，仅支持Resource类型的数据源。
   *     <br>可支持的图片格式：png、jpg、jpeg、bmp、svg、webp、gif和heif等，支持的图片格式范围见[Image]{@link
   *     ./image}。当资源为非图片资源或不支持的格式时，图标显示为空白。<br/>从API版本26.0.0开始，支持Symbol格式的Resource类型的数据源。<br/>若应用不具备ohos.permission.CUS
   *     TOMIZE_SAVE_BUTTON权限，则自定义图标设置不生效，保存控件保持默认样式。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  setIcon(icon: Resource): SaveButtonAttribute;

  /**
   * 设置保存控件的文本。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { string | Resource } text - 自定义文本信息。适用于需要使用与业务强相关的文本替代系统预置描述的场景。传入字符串时直接使用文本内容；传入Resource时，可配合资源管理实现多语言文本。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效，保存控件保持默认样式。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  setText(text: string | Resource): SaveButtonAttribute;

  /**
   * 设置保存控件的图标尺寸。
   *
   * @param { Dimension | SizeOptions } size - 图标尺寸，支持像素单位（vp、px等）。
   *     <br>不支持设置百分比字符串。若设置Dimension类型入参的百分比字符串，则图标尺寸显示为默认值；
   *     若设置SizeOptions类型入参的width或height属性为百分比字符串，则图标尺寸显示为0vp。<br/>对于保存控件提供的系统图标：<br/>- 使用Dimension类型入参时，宽
   *     、高相等，均为设定值。<br/>- 使用SizeOptions类型入参时，若宽、高设定值不一致，则宽、高相等取两者较小值；若仅设定其中一个值，则取该值作为宽、高值。系统提供图标采用此规则是为保证图标的正方形显示和视觉一致
   *     性。<br/>对于自定义图标：<br/>- 使用Dimension类型入参时，宽、高相等，均为设定值。<br/>- 使用SizeOptions类型入参时，建议同时设定宽和高，此时按照指定宽、高生效；若仅设定其中一个值，则宽
   *     高均显示为该设定值。自定义图标允许灵活设定尺寸以适应不同图片比例。<br/>- 当设定的宽高与自定义图标的宽高比例不一致时，图片按[ImageFit.Cover]{@link ImageFit}的方式填充显示区域。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  iconSize(size: Dimension | SizeOptions): SaveButtonAttribute;

  /**
   * 设置保存控件图标的边框圆角半径。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Dimension | BorderRadiuses } radius - 保存控件图标的圆角半径，支持设置四个圆角。
   *     <br>默认值：四个圆角均为0vp。支持像素单位（vp、px等），取值范围≥0。传入负值时自动修正为0。<br/>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则图标的圆角半径
   *     设置不生效。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  iconBorderRadius(radius: Dimension | BorderRadiuses): SaveButtonAttribute;

  /**
   * 设置保存控件的按压效果。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { boolean } enabled - true表示保存控件按压时显示按压效果，false表示保存控件按压时不显示按压效果。
   *     <br>默认值：true。<br/>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，按压效果设置不生效。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  stateEffect(enabled: boolean): SaveButtonAttribute;

  /**
   * 设置接收保存控件的用户取消授权事件。适用于需要区分用户主动取消授权和授权失败的场景，以便进行不同的业务处理，例如记录用户行为、提供重试提示等。
   *
   * @param { boolean } enabled - 表示是否接收保存控件的用户取消授权事件。
   *     <br>true表示当用户在授权弹窗中主动取消时，会通过回调将结果区分为CANCELED_BY_USER；false表示不单独区分此类场景。<br/>当业务需要区分“用户取消”和“系统错误/授
   *     权失败”时，建议开启该参数。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  userCancelEvent(enabled: boolean): SaveButtonAttribute;
  /**
   * 设置保存控件Symbol图标颜色。
   *
   * - 调用本方法前，需先调用[setIcon]{@link SaveButtonAttribute#setIcon}设置Symbol格式的图标资源（如$r('sys.symbol.xxx')），本方法才会生效。
   * - 若未设置Symbol图标，该方法设置的颜色不会生效。
   * - 建议与[symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy}配合使用，以实现不同的渲染效果。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Array<ResourceColor> } color - 设置保存控件Symbol图标颜色。适用于Symbol图标需要与业务视觉风格保持一致的场景。
   *     <br>默认值：随[symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy}不同而变化。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolIconColor(color: Array<ResourceColor>): SaveButtonAttribute;

  /**
   * 设置保存控件Symbol图标渲染策略。
   *
   * - 调用本方法前，需先调用[setIcon]{@link SaveButtonAttribute#setIcon}设置Symbol格式的图标资源（如$r('sys.symbol.xxx')），本方法才会生效。
   * - 若未设置Symbol图标，该方法设置的渲染策略不会生效。
   * - 与[symbolIconColor]{@link SaveButtonAttribute#symbolIconColor}配合使用时，渲染策略会影响颜色数组的作用方式。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { SymbolRenderingStrategy } strategy - 保存控件Symbol图标渲染策略，用于控制Symbol图标的渲染方式。
   *     <br>默认值：SymbolRenderingStrategy.SINGLE。
   *     <br>若应用不具备ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则该设置不生效。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolRenderingStrategy(strategy: SymbolRenderingStrategy): SaveButtonAttribute;

  /**
   * 设置保存控件Symbol图标粗细。
   *
   * - 调用本方法前，需先调用[setIcon]{@link SaveButtonAttribute#setIcon}设置Symbol格式的图标资源（如$r('sys.symbol.xxx')），本方法才会生效。
   * - 若未设置Symbol图标，该方法设置的粗细不会生效。
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { number | FontWeight | string | Resource } fontWeight - 设置保存控件Symbol图标粗细。
   *     <br>支持number类型：取值范围为[100, 900]，取值间隔为100，数值越大字体越粗。<br/>支持string类型：可传入number类型的数字字符串（如"400"），或[FontWeight]{@link
   *     FontWeight}的枚举值的小写字符串（如"normal"）。<br/>默认值：FontWeight.Normal（对应数值400）。<br/>若应用不具备ohos.permission.CUSTOMIZE_SAVE_
   *     BUTTON权限，则该设置不生效。
   * @returns { SaveButtonAttribute } 返回保存控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolFontWeight(fontWeight: number | FontWeight | string | Resource): SaveButtonAttribute;
}

/**
 * 安全控件的保存控件系统接口，适用于应用需要临时获取媒体库访问权限以保存图片或视频的场景，例如图片保存到相册、媒体内容导出等。
 * 应用集成保存控件后，用户首次使用该控件时，保存控件会展示弹窗供用户确认。用户点击允许后，应用获取访问媒体库接口的临时授权，相关接口请参见
 * [Interface (PhotoAccessHelper)]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper}；用户拒绝或关闭弹窗时，本次
 * * 不授权，应用不会获得媒体库接口访问权限。后续使用无需弹窗授权。
 * 在API version 19及之前的版本中，授权持续时间为10秒；在API version 20及之后的版本中，授权持续时间为1分钟。
 * 开发者应在授权有效期内调用媒体库接口获取文件句柄，并完成创建媒体资源等需要临时授权的操作。授权到期后，已通过授权获取的文件句柄仍可继续进行读写操作，不受授权时间限制。
 * <br>**说明**</br>
 * <ul><li>###### 核心枚举类型</li>
 * <li></li>
 * <li>**[SaveIconStyle]{@link SaveIconStyle}：** 保存控件图标风格枚举，用于指定控件展示的图标风格。</li>
 * <li>**[SaveDescription]{@link SaveDescription}：** 保存控件文本描述枚举，用于指定控件展示的文本描述。</li>
 * <li>**[SaveButtonOnClickResult]{@link SaveButtonOnClickResult}：** 保存控件点击结果枚举，用于表示点击后授权是否成功。</li>
 * <li></li>
 * <li>###### 核心接口类型</li>
 * <li></li>
 * <li>**[SaveButtonOptions]{@link SaveButtonOptions}：** 保存控件配置对象，用于指定图标、文字和按钮类型等元素属性。</li>
 * <li>**[SaveButtonCallback]{@link SaveButtonCallback}：** 保存控件点击回调类型，用于返回点击事件、授权结果和错误信息。</li>
 * <li></li>
 * <li>###### 子组件</li>
 * <li></li>
 * <li>不支持。</li></ul>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const SaveButton: SaveButtonInterface;

/**
 * 定义安全访问的保存控件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const SaveButtonInstance: SaveButtonAttribute;