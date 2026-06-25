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
 * 提供在给定范围内选择评分的组件。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * > - 当Rating的父节点有指定宽高时，需为Rating组件指定宽高，或为父节点设置值为true的[clip]{@link CommonMethod#clip(clip: Optional<boolean>)}属性。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * ###### 键盘走焦规格
 * 
 * | 按键         | 功能描述                        |
 * |------------|-----------------------------|
 * | Tab        | 组件间切换焦点。                    |
 * | 左右方向键   | 评分预览增加/减少（步长为step），不改变实际分值。 |
 * | Home       | 移动到第一个星星， 不改变实际分值。          |
 * | End        | 移动到最后一个星星， 不改变实际分值。         |
 * | Space/Enter | 根据当前评分提交评分结果。               |
 *
 * @file
 * @kit ArkUI
 */
import { CommonConfiguration, Callback, CommonMethod, ContentModifier, Bindable } from './common';
import { ResourceStr } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * 评分组件的信息。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RatingOptions {
    /**
     * 设置并接收评分值。取值为undefined时，按默认值处理。
     * 
     * 默认值：0
     * 
     * 取值范围： [0, stars]
     * 
     * 小于0取0，大于[stars]{@link stars}取最大值stars。
     * 
     * 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rating: double | undefined | Bindable<double>;
    /**
     * 设置评分组件作为指示器使用，值为true时，不可改变评分，值为false时，可进行评分。
     * 
     * 默认值：false
     * 
     * **说明：** 
     * 
     * indicator=true时，默认组件高度height=12.0vp，组件width=height * stars。 
     * 
     * indicator=false时，默认组件高度height=28.0vp，组件width=height * stars。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    indicator?: boolean;
}
/**
 * 评分组件选中、未选中以及部分选中的星级样式。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 * 
 * > **说明：**
 * >
 * > string格式可用于加载网络图片和本地图片。当使用相对路径引用本地图片时，例如Image("common/test.jpg")，其中common目录与pages同级，同时支持Base64字符串。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StarStyleOptions {
    /**
     * 未选中的星级的图片链接，可由用户自定义或使用系统默认图片。取值为undefined时，则使用系统默认图片。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * 从API version 20开始，该接口支持设置Resource资源。参考
     * [示例3（通过Resource资源设置评分的样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating copy.md#示例3通过resource资源设置评分的样式)
     * 代码。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundUri: ResourceStr | undefined;
    /**
     * 选中的星级的图片路径，可由用户自定义或使用系统默认图片。取值为undefined时，则使用系统默认图片。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * 从API version 20开始，该接口支持设置Resource资源。参考
     * [示例3（通过Resource资源设置评分的样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating copy.md#示例3通过resource资源设置评分的样式)
     * 代码。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    foregroundUri: ResourceStr | undefined;
    /**
     * 部分选中的星级的图片路径，可由用户自定义或使用系统默认图片。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * 从API version 20开始，该接口支持设置Resource资源。参考
     * [示例3（通过Resource资源设置评分的样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating copy.md#示例3通过resource资源设置评分的样式)
     * 代码。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryUri?: ResourceStr;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RatingConfiguration extends CommonConfiguration<RatingConfiguration> {
    /**
     * 设置并接收评分值。
     * 
     * 默认值：0
     * 
     * 取值范围： [0, stars]
     * 
     * 小于0取0，大于[stars]{@link stars}取最大值stars。
     * 
     * 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
     * 
     * 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rating: double;
    /**
     * 评分条是否作为指示器使用。当值为true时，表示作为指示器；当值为false时，表示不作为指示器。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    indicator: boolean;
    /**
     * 评分条的星级总数。
     * 
     * 默认值：5
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stars: int;
    /**
     * 评分条的评分步长。
     * 
     * 默认值：0.5
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stepSize: double;
    /**
     * 触发评分数量变化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerChange: Callback<double>;
}
/**
 * 操作评分条的评星变化时触发该回调。
 *
 * @param {double} rating - 评分条的评分。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnRatingChangeCallback = (rating: double) => void;
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RatingAttribute extends CommonMethod {
    /**
     * 设置评分总数。设置为小于等于0的值时，按默认值显示。与[stars]{@link stars}相比，value参数新增了对undefined类型的支持。
     *
     * @param { int | undefined } value - 设置评分总数。<br/>当value的值为undefined时，默认值：5
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stars(value: int | undefined): this;
    /**
     * 设置操作评级的步长。设置为小于0.1的值时，按默认值显示。与[stepSize]{@link stepSize}相比，value参数新增了对undefined类型的支持。
     *
     * @param { double | undefined } value - 操作评级的步长。<br/>当value的值为undefined时，默认值：0.5<br/>取值范围：[0.1, stars]
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stepSize(value: double | undefined): this;
    /**
     * 设置评分的样式。该属性所支持的图片类型能力参考[Image]{@link image}组件。
     * 
     * 支持加载本地图片和网络图片，暂不支持[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型。
     * 
     * 默认图片加载方式为异步，暂不支持同步加载。
     * 
     * 与[starStyle]{@link starStyle}相比，options参数新增了对undefined类型的支持。
     *
     * @param { StarStyleOptions | undefined } options - 评分的样式。取值为undefined时，按各属性的默认值处理。<br/>**说明：** <br/>当backgroundUri
     *     、foregroundUri或secondaryUri设置的图片路径错误时，图片将保持上次的图片显示结果。如果首次设置错误，则不显示图片。<br/>当backgroundUri或foregroundUri设置为
     *     undefined或空字符串时，Rating组件将加载系统默认星型图源。<br/>当secondaryUri未设置或设置为undefined或空字符串时，将优先使用backgroundUri，效果等同于仅设置
     *     foregroundUri和backgroundUri。
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default starStyle(options: StarStyleOptions | undefined): this;
    /**
     * 当评分条的评星变化时会触发该回调。与[onChange]{@link onChange}相比，callback参数新增了对undefined类型的支持。使用callback异步回调。
     *
     * @param { OnRatingChangeCallback | undefined } callback - 操作评分条的评星变化时触发该回调。<br/>当callback的值为undefined时，不使用回调函数。
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: OnRatingChangeCallback | undefined): this;
    /**
     * 定制Rating内容区的方法。
     *
     * @param { ContentModifier<RatingConfiguration> | undefined } modifier - 在Rating组件上，定制内容区的方法。<br/>modifier：内容修改器，开发
     *     者需要自定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<RatingConfiguration> | undefined): this;
    /**
     * 设置Rating的属性修改器。
     *
     * @param { AttributeModifier<RatingAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - Rating组件的属
     *     性修改器。<br/>当modifier的值为undefined时，不使用属性修改器。
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RatingAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Rating Component.
 *
 * @param { RatingOptions } [options] - the options of Rating.
 * @param { CustomBuilder } [content_] - container
 * @returns { RatingAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Rating(
    options?: RatingOptions,
    content_?: CustomBuilder,
): RatingAttribute