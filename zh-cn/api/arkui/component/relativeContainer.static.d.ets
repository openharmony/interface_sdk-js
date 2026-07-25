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
import { Dimension } from './units';
import { Axis } from './enums';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * guideLine位置参数，用于定义guideLine的位置。
 *
 * @interface GuideLinePosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GuideLinePosition {
    /**
     * guideLine距离容器左侧或者顶部的距离。
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: Dimension;
    /**
     * guideLine距离容器右侧或者底部的距离。
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: Dimension;
}
/**
 * guideLine参数，用于定义一条guideLine的id、方向和位置。
 *
 * @interface GuideLineStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GuideLineStyle {
    /**
     * guideLine的id，必须是唯一的并且不可与容器内组件重名。
     *
     * @type {string}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
    /**
     * 指定guideLine的方向。
     * 垂直方向的guideLine仅能作为组件水平方向的锚点，作为垂直方向的锚点时值为0；
     * 水平方向的guideLine仅能作为组件垂直方向的锚点，作为水平方向的锚点时值为0。
     * 默认值：Axis.Vertical，非法值：按默认值处理。
     *
     * @type {Axis}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: Axis;
    /**
     * 指定guideLine的位置。
     * 当未声明或声明异常值（如undefined）时，guideLine的位置默认为start: 0。
     * start和end两种声明方式选择一种即可。若同时声明，仅start生效。
     * 若容器在某个方向的size被声明为"auto"，则该方向上guideLine的位置只能使用start方式声明（不允许使用百分比）。
     * 默认值：{start: 0}，非法值：按默认值处理。
     *
     * @type {GuideLinePosition}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position: GuideLinePosition;
}
/**
 * 定义屏障线的方向。
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarrierDirection {
    /**
     * 屏障在其所有referencedId的最左侧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LEFT,
    /**
     * 屏障在其所有referencedId的最右侧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RIGHT,
    /**
     * 屏障在其所有referencedId的最上方。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP,
    /**
     * 屏障在其所有referencedId的最下方。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM
}
/**
 * 定义支持镜像模式的屏障线的方向。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LocalizedBarrierDirection {
    /**
     * 屏障在其所有referencedId的最左/右侧，LTR模式时为最左侧，RTL模式时为最右侧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 0,
    /**
     * 屏障在其所有referencedId的最左/右侧，LTR模式时为最右侧，RTL模式时为最左侧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 1,
    /**
     * 屏障在其所有referencedId的最上方。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 2,
    /**
     * 屏障在其所有referencedId的最下方。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 3
}
/**
 * barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。
 *
 * @interface BarrierStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BarrierStyle {
    /**
     * barrier的id，必须是唯一的并且不可与容器内组件重名。
     *
     * @type {string}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
    /**
     * 指定barrier的方向。
     * 垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，用作垂直方向锚点时值为0；
     * 水平方向（LEFT，RIGHT）的barrier仅能作为组件的垂直方向锚点，用作水平方向锚点时值为0。
     * 默认值：BarrierDirection.LEFT，非法值：按默认值处理。
     *
     * @type {BarrierDirection}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: BarrierDirection;
    /**
     * 指定生成barrier所依赖的组件。
     *
     * @type {Array<string>}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    referencedId: Array<string>;
}
/**
 * barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。
 *
 * @interface LocalizedBarrierStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedBarrierStyle {
    /**
     * barrier的id，必须是唯一的并且不可与容器内组件重名。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
    /**
     * 指定barrier的方向。
     * 垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，作为垂直方向锚点时值为0。
     * 水平方向（START，END）的barrier仅能作为组件的垂直方向锚点，作为水平方向锚点时值为0。
     *
     * @type { LocalizedBarrierDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    localizedDirection: LocalizedBarrierDirection;
    /**
     * 指定生成barrier所依赖的组件。
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    referencedId: Array<string>;
}

/**
 * 相对布局组件，用于复杂场景中元素对齐的布局。
 *
 * @extends CommonMethod
 * @interface RelativeContainerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface RelativeContainerAttribute extends CommonMethod {
    /**
     * 设置RelativeContainer容器内的辅助线，Array中每个项目即为一条guideLine。
     *
     * @param { Array<GuideLineStyle> | undefined } value - RelativeContainer容器内的辅助线。
     *     取值为undefined时，与不设置表现一致。
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default guideLine(value: Array<GuideLineStyle> | undefined): this;
    /**
     * 设置RelativeContainer容器内的屏障，Array中每个项目即为一条barrier，
     * 支持定义镜像模式的屏障线。
     *
     * @param { Array<BarrierStyle> | Array<LocalizedBarrierStyle> | undefined } barrierStyle
     *     - RelativeContainer容器内的屏障。
     *     取值为undefined时，与不设置表现一致。
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default barrier(barrierStyle: Array<BarrierStyle> | Array<LocalizedBarrierStyle> | undefined): this;
    /**
     * 设置RelativeContainer选项。
     * @returns { RelativeContainerAttribute } Returns the instance of the RelativeContainerAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setRelativeContainerOptions(): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<RelativeContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     - 动态设置RelativeContainer组件的属性。
     *     取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RelativeContainerAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * 相对布局组件，用于复杂场景中元素对齐的布局。
 *
 * @param { CustomBuilder } [content_] - 定义子组件的Builder函数。
 * @returns { RelativeContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RelativeContainer(

    content_?: CustomBuilder,
): RelativeContainerAttribute

/**
 * Defines RelativeContainer Component.
 *
 * @param { CustomBuilderT<RelativeContainerAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { RelativeContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function RelativeContainer(
    style: CustomBuilderT<RelativeContainerAttribute>,
    content_?: CustomBuilder,
): RelativeContainerAttribute;

/**
 * Defines the Extendable RelativeContainer.
 *
 * @implements RelativeContainerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableRelativeContainer implements RelativeContainerAttribute {
    /**
     * Constructor of Extendable RelativeContainer.
     *
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableRelativeContainer>(
        factory: ConstructorT<T>,
        content_?: CustomBuilder
    ): T;

    /**
     * Entry of Extendable RelativeContainer.
     *
     * @param { CustomBuilderT<T> } styles
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
     */
    @Builder
    static _instantiateImpl<T extends ExtendableRelativeContainer>(
        styles: CustomBuilderT<T>,
        factory: ConstructorT<T>,
        content_?: CustomBuilder
    ): void;

    /**
     * Set the RelativeContainer Options.
     *
     * @returns { ExtendableRelativeContainer }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setRelativeContainerOptions(): this;
}
