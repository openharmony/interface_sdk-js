'use static';
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

import { CommonMethod, Callback } from './common';
import Want from '../../@ohos.app.ability.Want';
import { Visibility } from './enums';
import { VoidCallback } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";

/**
 * 卡片尺寸枚举
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FormDimension {
    /**
     * 1*2 卡片
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    Dimension_1_2 = 0,

    /**
     * 2*2 卡片
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    Dimension_2_2 = 1,

    /**
     * 2*4 卡片
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    Dimension_2_4 = 2,

    /**
     * 4*4 卡片
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    Dimension_4_4 = 3,

    /**
     * 1*1 卡片
     * The default value is 6
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    DIMENSION_1_1 = 6,

    /**
     * 6*4 卡片
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    DIMENSION_6_4 = 7,

    /**
     * 2*3 卡片为穿戴设备使用
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    DIMENSION_2_3 = 8,

    /**
     * 3*3 卡片为穿戴设备使用
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    DIMENSION_3_3 = 9
}

/**
 * 卡片渲染模式枚举
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FormRenderingMode {
    /**
     *  全色模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    FULL_COLOR = 0,

    /**
     *  单色模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    SINGLE_COLOR = 1
}
/**
 * 定义卡片形状枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FormShape {
    /**
     * 方形卡片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    RECT = 1,

    /**
     * 圆形卡片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    CIRCLE = 2
}

/**
 * 卡片色彩模式枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FormColorMode {  
  /**
   * 跟随系统。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  MODE_AUTO = -1,

  /**
   * 深色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  MODE_DARK = 0,

  /**
   * 浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  MODE_LIGHT = 1
}

/**
 * 卡片信息。
 *
 * @interface FormInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FormInfo {
    /**
     * 卡片标识（新建卡片填0）。
     *
     * @type { long | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    id: long | string;

    /**
     * 卡片名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * 目标卡片包名。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    bundle: string;

    /**
     * 	目标卡片Ability名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    ability: string;

    /**
     * 卡片模块名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    module: string;

    /**
     * 卡片尺寸，支持2 * 2，4 * 4，2 * 4等类型卡片。默认值：Dimension_2_2。
     *
     * @type { ?FormDimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    dimension?: FormDimension;

    /**
     * 卡片是否为临时卡片，true表示是临时卡片，false表示不是临时卡片。默认值：false。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    temporary?: boolean;

    /**
     * 卡片传递信息的载体。
     *
     * @type { ?Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    want?: Want;

    /**
     * 卡片渲染模式。取值如下，默认值为 FULL_COLOR。
     * - FULL_COLOR：代表全色模式，卡片框架不会对卡片效果做出修改，保持和卡片开发者设置的效果不变。
     * - SINGLE_COLOR：代表单色模式，卡片框架会把卡片背景设为透明，开发者需按最佳实践设置卡片风格。
     *
     * @type { ?FormRenderingMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    renderingMode?: FormRenderingMode;

    /**
     * 卡片的形状。
     *
     * @type { ?FormShape }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    shape?: FormShape;

    /**
     * 卡片是否豁免应用锁，true表示卡片所属应用添加应用锁时，不受应用锁管控，不显示应用锁蒙层；
     * false表示卡片所属应用添加应用锁时，受应用锁管控，正常展示应用锁蒙层。
     * 默认值：false。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    exemptAppLock?: boolean;
}

/**
 * 卡片查询或者卸载时获取formId的参数。
 *
 * @interface FormCallbackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface FormCallbackInfo {
    /**
     * 	卡片标识（ArkTS-Dyn: number类型，ArkTS-Sta: long类型）。
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    id: long;

    /**
     * 卡片标识。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    idString: string;

    /**
     * 表示卡片是否被锁定，true表示卡片被锁定，false表示卡片没有被锁定。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    isLocked: boolean;
}

/**
 * 卡片错误信息。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，
 * > 会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @typedef ErrorInformation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface ErrorInformation {
    /**
     * 错误码。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    errcode: int;

    /**
     * 错误信息。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    msg: string;
}

/**
 * 卡片跳转信息。
 *
 * @interface RouterCallbackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface RouterCallbackInfo {
    /**
     * 事件类型。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    action: string;

    /**
     * 卡片所属包的Bundle名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    bundleName: string;
	
	/**
     * 卡片所属模块的模块名。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    moduleName: string;
	
	/**
     * 卡片所属的Ability名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    abilityName: string;
	
	/**
     * 卡片事件携带参数内容。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    params: string;
}
/**
 * 定义FormComponent的属性函数。
 *
 * @extends CommonMethod
 * @interface  FormComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FormComponentAttribute extends CommonMethod {
    /**
     * 卡片的模块名称。
     *
     * @param { string | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default moduleName(value: string | undefined): this;

    /**
     * 设置卡片尺寸。
     *
     * @param { FormDimension | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default dimension(value: FormDimension | undefined): this;

    /**
     * 是否允许卡片更新。
     *
     * @param { boolean | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default allowUpdate(value: boolean | undefined): this;

    /**
     * 卡片是否可见。
     *
     * @param { Visibility | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default visibility(value: Visibility | undefined): this;

    /**
     * 设置卡片色彩模式。
     *
     * @param { FormColorMode | undefined } value - The form color mode to set.
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default colorMode(value: FormColorMode | undefined): this;

    /**
     * 获取到卡片信息后触发该回调。
     * 关于卡片信息的详细信息，请参见原始能力子系统的定义。
     *
     * @param { Callback<FormCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default onAcquired(callback: Callback<FormCallbackInfo> | undefined): this;

    /**
     * 卡片加载错误。
     *
     * @param { Callback<ErrorInformation> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default onError(callback: Callback<ErrorInformation> | undefined): this;

    /**
     * 卡片跳转。
     *
     * @param { Callback<RouterCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default onRouter(callback: Callback<RouterCallbackInfo> | undefined): this;

    /**
     * 卸载卡片。
     *
     * @param { Callback<FormCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default onUninstall(callback: Callback<FormCallbackInfo> | undefined): this;

    /**
     * 加载卡片
     *
     * @param { VoidCallback | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default onLoad(callback: VoidCallback | undefined): this;

    /**
     * 卡片已更新
     *
     * @param { Callback<FormCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default onUpdate(callback: Callback<FormCallbackInfo> | undefined): this;

    /**
     * 调用attributeModifier。
     *
     * @param { AttributeModifier<FormComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<FormComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义FormComponent组件。
 * @param { FormInfo } formInfo - 卡片信息。
 * @param { CustomBuilder } [content_] - 容器。
 * @returns { FormComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function FormComponent(
    formInfo: FormInfo, 
    content_?: CustomBuilder,
): FormComponentAttribute
