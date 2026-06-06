'use static';
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
import { CommonMethod } from './common';
import { ResourceColor, ResourceStr } from "./units";
import { Resource } from '../../global/resource';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface QRCodeAttribute extends CommonMethod {
    /**
     * 设置二维码颜色。
     *
     * @param { ResourceColor | undefined } value
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * 设置二维码背景颜色。
     *
     * @param { ResourceColor | undefined } value
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundColor(value: ResourceColor | undefined): this;
    /**
     * 设置二维码内容颜色的不透明度。不透明度最小值为0，最大值为1。
     *
     * @param { double | Resource | undefined } value - 二维码内容颜色的不透明度。<br/>。
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentOpacity(value: double | Resource | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<QRCodeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<QRCodeAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置QRCode组件选项。
     *
     * @param { ResourceStr } value - QRCode组件内容。
     * @returns { QRCodeAttribute } 返回QRCode属性实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setQRCodeOptions(value: ResourceStr): this;
}
/**
 * 创建二维码组件，通过扫描组件显示的二维码图案可以获取二维码中包含的字符串信息。
 *
 * @param { ResourceStr } value - 二维码内容字符串。最大支持512个字符，若超出，则截取前512个字符。 <br/>**说明：** <br/>设置为null时与设置字符串“null”效果一致；设置为
 *     undefined时与设置字符串“undefined”效果一致；当传入空字符串时，将生成无效二维码。
 * @returns { QRCodeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function QRCode(
    value: ResourceStr
): QRCodeAttribute;

/**
 * 定义QRCode组件。
 *
 * @param { CustomBuilderT<QRCodeAttribute> } style - QRCode属性实例。
 * @returns { QRCodeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function QRCode(
    style: CustomBuilderT<QRCodeAttribute>,
): QRCodeAttribute;