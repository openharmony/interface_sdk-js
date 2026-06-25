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
import { CommonMethod, ContentModifier, CommonConfiguration } from './common';
import { ResourceColor } from "./units";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 表示LoadingProgress的样式类型，不推荐使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LoadingProgressStyle {
    /**
     * Default style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Default,
    /**
     * Announcement style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Circular,
    /**
     * The style of the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Orbital
}
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
export declare interface LoadingProgressAttribute extends CommonMethod {
    /**
     * 设置加载进度条前景色。
     *
     * @param { ResourceColor | undefined } value
     * @returns { LoadingProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * 设置LoadingProgress动画是否显示。LoadingProgress动画不显示时，该组件依旧占位。通用属性[Visibility]{@link Visibility}.Hidden隐藏的是包括
     * [border]{@link CommonMethod#border}、[padding]{@link CommonMethod#padding}等整个组件范围，而enableLoading=false只隐藏
     * LoadingProgress本身动画内容，不包括border等。
     *
     * @param { boolean | undefined } value - LoadingProgress动画是否显示。<br/>默认值：true，true表示显示LoadingProgress动画，false表示不显示
     *     LoadingProgress动画。<br/>设置undefined时按默认值处理。
     * @returns { LoadingProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableLoading(value: boolean | undefined): this;
    /**
     * 定制LoadingProgress内容区的方法。
     *
     * @param { ContentModifier<LoadingProgressConfiguration> | undefined } modifier -
     在LoadingProgress组件上，定制内容区的方法。<br/
     *     >modifier：内容修改器，开发者需要自定义class实现ContentModifier接口。<br/>设置undefined时显示内容重置为未设置contentModifier属性时的显示内容。
     * @returns { LoadingProgressAttribute}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<LoadingProgressConfiguration> | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<LoadingProgressAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { LoadingProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<LoadingProgressAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置LoadingProgress选项。
     *
     * @returns { LoadingProgressAttribute } 返回LoadingProgress属性实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setLoadingProgressOptions(): this;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LoadingProgressConfiguration extends CommonConfiguration<LoadingProgressConfiguration> {
    /**
     * LoadingProgress动画是否显示。
     *
     * 默认值：true，true表示显示LoadingProgress动画，false表示不显示LoadingProgress动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableLoading: boolean;
}
/**
 * 创建加载进度组件。
 *
 * @returns { LoadingProgressAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function LoadingProgress(
): LoadingProgressAttribute;

/**
 * 定义LoadingProgress组件。
 *
 * @param { CustomBuilderT<LoadingProgressAttribute> } style - LoadingProgress属性实例。
 * @returns { LoadingProgressAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LoadingProgress(
    style: CustomBuilderT<LoadingProgressAttribute>,
): LoadingProgressAttribute;