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
 * @file 系统接口
 * @kit ArkUI
 */

/**
 * 卡片尺寸枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare enum FormDimension {
  /**
   * 1*2 卡片
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_1_2 = 0,

  /**
   * 2*2 卡片
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_2_2 = 1,

  /**
   * 2*4 卡片
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_2_4 = 2,

  /**
   * 4*4 卡片
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  Dimension_4_4 = 3,

  /**
   * 2*1 卡片 
   * 
   * **说明:** 该字段从API version 9开始支持，从API version 20开始废弃。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 20
   */
  Dimension_2_1,

  /**
   * 1*1 卡片
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  DIMENSION_1_1 = 6,

  /**
   * 6*4 卡片
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  DIMENSION_6_4 = 7,

  /**
   * 2*3 卡片为穿戴设备使用
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  DIMENSION_2_3 = 8,

  /**
   * 3*3 卡片为穿戴设备使用
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  DIMENSION_3_3 = 9
}

/**
 * 卡片渲染模式枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11 dynamic
 */
declare enum FormRenderingMode {

  /**
   * 全色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  FULL_COLOR = 0,

  /**
   * 单色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  SINGLE_COLOR = 1
}

/**
 * 定义卡片形状枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 */
declare enum FormShape {
  /**
   * 方形卡片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  RECT = 1,

  /**
   * 圆形卡片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  CIRCLE = 2
}

/**
 * 卡片色彩模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
enum FormColorMode {  
  /**
   * 跟随系统。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  MODE_AUTO = -1,

  /**
   * 深色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  MODE_DARK = 0,

  /**
   * 浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  MODE_LIGHT = 1
}

/**
 * 卡片信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 */
declare interface FormInfo {
  /**
   * 卡片标识（新建卡片填0）。
   * 
   * **说明：**
   * 
   * 不同使用方不可使用相同id。
   * 
   * 同一使用方使用相同id时，显示后添加的卡片。
   * 
   * id大于等于0小于2^32。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  id: number | string;

  /**
   * 卡片名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  name: string;

  /**
   * 目标卡片包名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  bundle: string;

  /**
   * 目标卡片Ability名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  ability: string;

  /**
   * 卡片模块名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  module: string;

  /**
   * 卡片尺寸，支持2 * 2，4 * 4，2 * 4等类型卡片。
   * 
   * 默认值：Dimension_2_2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  dimension?: FormDimension;

  /**
   * 卡片是否为临时卡片，true表示是临时卡片，false表示不是临时卡片。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  temporary?: boolean;

  /**
   * 卡片传递信息的载体。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;

  /**
   * 卡片渲染模式。取值如下，默认值为 FULL_COLOR。
   * 
   * - FULL_COLOR：代表全色模式，卡片框架不会对卡片效果做出修改，保持和卡片开发者设置的效果不变。
   * - SINGLE_COLOR：代表单色模式，卡片框架会把卡片背景设为透明，开发者需按最佳实践设置卡片风格。
   * 
   * **说明：**
   * 
   * 如果系统不支持统一渲染模式，卡片框架在单色模式下也不会把卡片背景设为透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  renderingMode?: FormRenderingMode;

  /**
   * 卡片的形状。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  shape?: FormShape;

  /**
   * 卡片是否豁免应用锁，true表示卡片所属应用添加应用锁时，不受应用锁管控，不显示应用锁蒙层；false表示卡片所属应用添加应用锁时，受应用锁管控，正常展示应用锁蒙层。
   * 
   * 默认值：false。
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
 * 卡片查询或者卸载时获取formId的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamic
 */
interface FormCallbackInfo {
  /**
   * 卡片标识。
   * 
   * **说明：**
   * 
   * 如果获取到的id为-1，说明id大于等于2^53，需要使用idString获取。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  id: number;

  /**
   * 卡片标识。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  idString: string;

  /**
   * 表示卡片是否被锁定，true表示卡片被锁定，false表示卡片没有被锁定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 22 dynamic
   */
  isLocked: boolean;
}
/**
 * 卡片大小信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 18 dynamic
 */
interface FormSize {
  /**
   * 卡片宽的尺寸，单位：vp。
   * 
   * **说明：**
   * 
   * width的取值范围大于0，小于2^53。如果不在范围内的数值卡片不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  width: number;

  /**
   * 卡片高的尺寸，单位：vp。
   * 
   * **说明：**
   * 
   * height的取值范围大于0，小于2^53。如果不在范围内的数值卡片不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  height: number;
}

/**
 * 卡片错误信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 18 dynamic
 */
interface ErrorInformation {
  /**
   * [错误码](docroot://reference/apis-form-kit/errorcode-form.md)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 18 dynamic
   */
  errcode: number;

  /**
   * 错误信息。
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