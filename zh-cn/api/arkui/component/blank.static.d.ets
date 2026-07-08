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
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * The BlankAttribute.
 *
 * @extends CommonMethod
 * @interface BlankAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface BlankAttribute extends CommonMethod {
    /**
     * 设置空白填充的填充颜色，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifiert)
     * 动态设置属性方法。
     *
     * @param { ResourceColor | undefined } value - 空白填充的填充颜色。<br>
     *    默认值：Color.Transparent<br>
     *    非法值：按默认值处理。<br>
     *    取值为undefined时，按默认值处理。
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<BlankAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *    - 动态设置Blank组件的属性。<br>
     *    取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<BlankAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * Set Blank options.
     *
     * @param { double | string } [min] - Minimum size of the Blank component in the container along the main axis.
     * @returns { BlankAttribute } Returns instance of BlankAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setBlankOptions(min?: double | string): this;
}

/**
 * 空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。
 * 仅当父组件为[Row](docroot://reference/apis-arkui/arkui-ts/ts-container-row.md)/
 * [Column](docroot://reference/apis-arkui/arkui-ts/ts-container-column.md)/
 * [Flex](docroot://reference/apis-arkui/arkui-ts/ts-container-flex.md)时生效。
 *
 * @param { double | string } [min] - 空白填充组件在容器主轴上的最小大小。<br>
 *    默认值：0，number类型单位为vp，string类型可以显式指定
 *    [像素单位](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md)，
 *    如'10px'。不指定像素单位时，默认单位vp，如'10'，等同于10vp。<br>
 *    非法值：按默认值处理。<br>
 *    **说明：**<br>
 *    不支持设置百分比。负值使用默认值。当最小值大于容器可用空间时，
 *    使用最小值作为自身大小并超出容器。
 * @returns { BlankAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function Blank(
    min?: double | string,
): BlankAttribute;

/**
 * Defines Blank Component.
 *
 * @param { CustomBuilderT<BlankAttribute> } style - Blank options.
 * @returns { BlankAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Blank(
    style: CustomBuilderT<BlankAttribute>
): BlankAttribute;