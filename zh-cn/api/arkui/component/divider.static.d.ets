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
 * @file
 * @kit ArkUI
 */
import { ResourceColor } from './units';
import { LineCapStyle } from './enums';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * The DividerAttribute.
 *
 * @extends CommonMethod
 * @interface DividerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface DividerAttribute extends CommonMethod {
    /**
     * 设置分割线的方向，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifiert)
     * 动态设置属性方法。
     *
     * @param { boolean | undefined } value - 使用水平分割线还是垂直分割线。<br>
     *    false：水平分割线；true：垂直分割线。<br>
     *    默认值：false<br>
     *    非法值：按默认值处理。<br>
     *    取值为undefined时，按默认值处理。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default vertical(value: boolean | undefined): this;
    /**
     * 设置分割线的颜色，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifiert)
     * 动态设置属性方法。
     *
     * @param { ResourceColor | undefined } value - 分割线颜色。<br>
     *    默认值：'#33182431'<br>
     *    非法值：按默认值处理。<br>
     *    取值为undefined时，按默认值处理。<br>
     *    支持通过
     *    [WithTheme](docroot://reference/apis-arkui/arkui-ts/ts-container-with-theme.md)
     *    设置通用分割线颜色。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * 设置分割线的宽度，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifiert)
     * 动态设置属性方法。
     *
     * > **说明：**
     * >
     * > 分割线的宽度不支持百分比设置。
     * > 使用水平分割线时，strokeWidth控制高度，优先级低于通用属性
     * > [height](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#height)；
     * > 使用垂直分割线时，strokeWidth控制宽度，优先级低于通用属性
     * > [width](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#width)。
     * > 超过通用属性设置大小时，按照通用属性进行裁切。
     * > 如果设备硬件存在1像素取整后分割线不显示问题，建议使用2像素。
     *
     * @param { double | string | undefined } value - 分割线宽度。<br>
     *    默认值：1px<br>
     *    非法值：按默认值处理。<br>
     *    单位：vp<br>
     *    取值为undefined时，按默认值处理。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(value: double | string | undefined): this;
    /**
     * 设置分割线的端点样式，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifiert)
     * 动态设置属性方法。
     *
     * @param { LineCapStyle | undefined } value - 分割线的端点样式。<br>
     *    默认值：LineCapStyle.Butt<br>
     *    非法值：按默认值处理。<br>
     *    取值为undefined时，按默认值处理。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default lineCap(value: LineCapStyle | undefined): this;
    /**
     * Set Divider options.
     *
     * @returns { DividerAttribute } Returns the instance of the DividerAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setDividerOptions(): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<DividerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *    - 动态设置Divider组件的属性。<br>
     *    取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<DividerAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 提供分割线组件，分割不同内容块/内容元素。
 *
 * > **说明：**
 * >
 * > 如果出现分割线粗细不一或者消失的问题，请参考
 * > [组件级像素取整常见问题](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-pixelRoundForComponent.md#常见问题)。
 *
 * @returns { DividerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function Divider(): DividerAttribute;

/**
 * Defines Divider Component.
 *
 * @param { CustomBuilderT<DividerAttribute> } style - the callback to set up component's attributes.
 * @returns { DividerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Divider(
    style: CustomBuilderT<DividerAttribute>
): DividerAttribute;