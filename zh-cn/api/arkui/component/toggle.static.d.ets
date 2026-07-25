'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * 组件提供勾选框样式、状态按钮样式和开关样式。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * > - 从API版本26.0.0开始，Toggle组件支持新材质效果。Toggle组件使用通用新材质属性systemMaterial时，不同[ToggleType]{@link ToggleType}类型的效果不同：    
 * > >   - ToggleType.Checkbox：当前未适配系统材质效果，设置系统材质不会出现系统材质相关的动效和视觉效果。
 * > >   - ToggleType.Switch：传入材质参数时，使用组件内部预设的视觉参数，传入的材质参数仅作为开启新材质的开关标记，不影响实际视觉效果。主要影响Toggle的滑块大小、滑块样式、阴影等视觉属性。设置
 * > [switchPointColor]{@link switchPointColor}后会出现点光源效果，点光源颜色跟随switchPointColor的设置。传入undefined时，新材质不生效，表现为原先的Toggle样式。
 * > >   - ToggleType.Button：设置系统材质的效果与[Button]{@link button}组件设置系统材质的效果相同，主要影响背景颜色、边框、阴影等视觉属性。
 * 
 * ###### 子组件
 * 
 * 仅当ToggleType设置为Button时，可包含子组件。
 * 
 * @file
 * @kit ArkUI
 */
import { Resource } from '../../global/resource';
import { ResourceColor } from './units';
import { CommonConfiguration, Callback, CommonMethod, ContentModifier, Bindable } from './common';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Toggle的样式。
 * 
 * > **说明：**
 * >
 * > Toggle的样式继承对应组件样式的默认值，且不支持设置。例如，如果ToggleType为Button，则该组件样式继承[ButtonType]{@link ButtonType}的默认值。由于Button.type从API 
 * > version 18开始，默认类型从胶囊型变更为圆角矩形，胶囊型按钮不支持设置
 * > [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}，此时使用
 * > Toggle组件设置borderRadius也不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ToggleType {
    /**
     * 提供单选框样式。
     * 
     * **说明：**
     * 
     * API version 11开始，Checkbox默认样式由圆角方形变为圆形。
     * 
     * [通用属性margin]{@link CommonMethod#margin}的默认值为：
     * 
     * {
     * 
     *  top: '14px',
     * 
     *  right: '14px',
     * 
     *  bottom: '14px',
     * 
     *  left: '14px'
     * 
     * }。
     * 
     * 默认尺寸为：
     * 
     * {width:'20vp', height:'20vp'}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Checkbox,
    /**
     * 提供开关样式。
     * 
     * **说明：**
     * 
     * [通用属性margin]{@link CommonMethod#margin}默认值为：
     * 
     * {
     * 
     *  top: '6px',
     * 
     *  right: '14px',
     * 
     *  bottom: '6px',
     * 
     *  left: '14px'
     * 
     * }。
     * 
     * 默认尺寸为：
     * 
     * {width:'36vp', height:'20vp'}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Switch,
    /**
     * 提供状态按钮样式。如子组件设置文本，文本内容将显示在按钮内。默认高度为28vp，宽度无默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Button
}
/**
 * Switch类型的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwitchStyle {
    /**
     * 设置Switch类型的圆形滑块半径，单位为vp。
     * 
     * **说明：**
     * 
     * 不支持百分比，设定值小于0时按照默认算法设置，设定值大于等于0时按照设定值设置。
     * 
     * 未设定此属性时，圆形滑块半径根据默认算法设置。
     * 
     * 默认算法：（组件高度（单位：vp） / 2） - （2vp * 组件高度（单位：vp） / 20vp）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pointRadius?: double | Resource;
    /**
     * 设置Switch类型关闭状态的背景颜色。
     * 
     * 默认值：深色和浅色模式下均为0x337F7F7F。从API version 20开始，如果开启了
     * [优化深浅色模式切换开销](docroot://ui/ui-dark-light-color-adaptation.md#优化深浅色模式切换开销)能力，浅色模式下默认值为0x19000000，表现效果为10%透明度的黑色；深色
     * 模式下默认值为0x19FFFFFF，表现效果为10%透明度的白色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    unselectedColor?: ResourceColor;
    /**
     * 设置Switch类型的圆形滑块颜色。
     * 
     * 默认值：$r('sys.color.ohos_id_color_foreground_contrary')
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pointColor?: ResourceColor;
    /**
     * 设置Switch类型的滑轨的圆角，单位为vp。
     * 
     * **说明：**
     * 
     * 不支持百分比，设定值小于0时按照默认算法设置，设定值大于组件高度一半时按照组件高度一半设置，其他场合按照设定值设置。
     * 
     * 未设定此属性时，滑轨圆角根据默认算法设置。
     * 
     * 默认算法：组件高度（单位：vp） / 2。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    trackBorderRadius?: double | Resource;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ToggleConfiguration extends CommonConfiguration<ToggleConfiguration> {
    /**
     * 开关是否打开。
     * 
     * true：开关打开；false：开关关闭。
     * 
     * 默认值：false 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isOn: boolean;
    /**
     * 触发switch选中状态变化。
     * 
     * true：状态从关切换为开；false：状态从开切换为关。
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerChange: Callback<boolean>;
}
/**
 * Toggle的信息。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ToggleOptions {
    /**
     * 开关的样式。
     * 
     * 默认值：ToggleType.Switch
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 8 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: ToggleType;
    /**
     * 开关是否打开。
     * 
     * true：打开；false：关闭。
     * 
     * 默认值：false
     * 
     * 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
     * 
     * 该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 8 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isOn?: boolean | undefined | Bindable<boolean>;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ToggleAttribute extends CommonMethod {
    /**
     * 开关状态切换时触发该事件。
     *
     * @param { ((isOn: boolean) => void) | undefined } callback - 为true时，代表状态从关切换为开。false时，代表状态从开切换为关。为undefined时，则不使用事
     *     件。
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: ((isOn: boolean) => void) | undefined): this;
    /**
     * 定制Toggle内容区的方法。
     *
     * @param { ContentModifier<ToggleConfiguration> | undefined } modifier - 在Toggle组件上，定制内容区的方法。<br/>modifier：内容修改器，开发
     *     者需要自定义class实现ContentModifier接口。取值为undefined时，则不使用contentModifier。
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<ToggleConfiguration> | undefined): this;
    /**
     * 设置组件在打开状态下的背景颜色。
     *
     * @param { ResourceColor | undefined } value - 组件打开状态的背景颜色。取值为undefined时，按默认值处理。<br/>默认值：<br/>当ToggleType为Switch时，默
     *     认值为`$r('sys.color.ohos_id_color_emphasize')`。<br/>当ToggleType为Checkbox时，默认值为
     *     `$r('sys.color.ohos_id_color_emphasize')`。<br/>当ToggleType为Button时，默认值为
     *     `$r('sys.color.ohos_id_color_emphasize')`混合`$r('sys.float.ohos_id_alpha_highlight_bg')`的透明度。
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedColor(value: ResourceColor | undefined): this;
    /**
     * 设置Switch类型的圆形滑块颜色。仅当type为ToggleType.Switch生效。
     *
     * @param { ResourceColor | undefined } color - Switch类型的圆形滑块颜色。取值为undefined时，按默认值处理。<br/>默认值：$r('
     *     sys.color.ohos_id_color_foreground_contrary')<br/>**说明：**<br/>同时设置了systemMaterial新材质时，设置此属性后会出现点光源效果，点光源颜色跟随此
     *     属性的设置。
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default switchPointColor(color: ResourceColor | undefined): this;
    /**
     * 设置Switch类型的样式。仅当type为ToggleType.Switch生效。
     *
     * @param { SwitchStyle | undefined } value - Switch样式风格。取值为undefined时，按各属性的默认值处理。
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default switchStyle(value: SwitchStyle | undefined): this;
    /**
     * Set the attribute modifier of toggle.
     *
     * @param { AttributeModifier<ToggleAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     The attribute modifier of toggle.
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ToggleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Toggle Component.
 *
 * @param { ToggleOptions } options - the options of Toggle.
 * @param { CustomBuilder } [content_] - container
 * @returns { ToggleAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Toggle(
    options: ToggleOptions,
    content_?: CustomBuilder,
): ToggleAttribute

/**
 * Defines the Extendable Toggle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableToggle implements ToggleAttribute {
    /**
     * Constructor of Extendable Toggle.
     *
     * @param { ConstructorT<T> } factory
     * @param { ToggleOptions } options
     * @param { CustomBuilder } [content_]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableToggle>(
        factory: ConstructorT<T>, 
        options: ToggleOptions,
        content_?: CustomBuilder
    ): T;

    /**
     * Entry of Extendable Toggle.
     *
     * @param { CustomBuilderT<T> } styles
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @Builder
    static _instantiateImpl<T extends ExtendableToggle>(
        styles: CustomBuilderT<T>,  
        factory: ConstructorT<T>, 
        content_?: CustomBuilder
    ): void;

    /**
     * Set the Toggle Options.
     *
     * @param { ToggleOptions } options
     * @returns { ExtendableToggle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setToggleOptions(options: ToggleOptions): this;
}