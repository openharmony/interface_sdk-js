/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * 评分组件的信息。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface RatingOptions {
  /**
   * 设置并接收评分值。
   * 
   * 默认值：0
   * 
   * 取值范围： [0, stars]
   * 
   * 小于0取0，大于[stars]{@link RatingAttribute#stars(value: number)}取最大值stars。
   * 
   * 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rating: number;

  /**
   * 设置评分组件作为指示器使用，值为true时，不可改变评分。
   * 
   * 默认值：false，可进行评分
   * 
   * **说明：** 
   * 
   * indicator=true时，默认组件高度height=12.0vp，组件width=height * stars。 
   * 
   * indicator=false时，默认组件高度height=28.0vp，组件width=height * stars。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  indicator?: boolean
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
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface StarStyleOptions {
  /**
   * 未选中的星级的图片链接，可由用户自定义或使用系统默认图片。
   * 
   * 从API version 20开始，该接口支持设置Resource资源。参考
   * [示例3（通过Resource资源设置评分的样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#示例3通过resource资源设置评分的样式)
   * 代码。
   *
   * @type { string } [since 7 - 19]
   * @type { ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  backgroundUri: ResourceStr;

  /**
   * 选中的星级的图片路径，可由用户自定义或使用系统默认图片。
   * 
   * 从API version 20开始，该接口支持设置Resource资源。参考
   * [示例3（通过Resource资源设置评分的样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#示例3通过resource资源设置评分的样式)
   * 代码。
   *
   * @type { string } [since 7 - 19]
   * @type { ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  foregroundUri: ResourceStr;

  /**
   * 部分选中的星级的图片路径，可由用户自定义或使用系统默认图片。
   * 
   * 从API version 20开始，该接口支持设置Resource资源。参考
   * [示例3（通过Resource资源设置评分的样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-rating.md#示例3通过resource资源设置评分的样式)
   * 代码。
   *
   * @type { ?string } [since 7 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  secondaryUri?: ResourceStr
}

/**
 * 提供在给定范围内选择评分的组件。
 * 
 * > **说明：**
 * 
 * > - 当Rating的父节点有指定宽高时，需为Rating组件指定宽高，或为父节点设置值为true的[clip]{@link CommonMethod#clip(clip: Optional<boolean>)}属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface RatingInterface {
  /**
   *
   * @param { object } options - 设置评分组件。<br/> 未设置时，则按照RatingOptions中各参数的默认值配置。 [since 7 - 17]
   * @param { RatingOptions } [options] - 设置评分组件。<br/> 未设置时，则按照RatingOptions中各参数的默认值配置。 [since 18]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: RatingOptions): RatingAttribute;
}

/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RatingConfiguration extends CommonConfiguration<RatingConfiguration> {
  /**
   * 设置并接收评分值。
   * 
   * 默认值：0
   * 
   * 取值范围： [0, stars]
   * 
   * 小于0取0，大于[stars]{@link RatingAttribute#stars(value: number)}取最大值stars。
   * 
   * 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rating: number;

  /**
   * 评分条是否作为指示器使用。当值为true时，表示作为指示器；当值为false时，表示不作为指示器。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  indicator: boolean;

  /**
   * 评分条的星级总数。
   * 
   * 默认值：5
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stars: number;

  /**
   * 评分条的评分步长。
   * 
   * 默认值：0.5
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stepSize: number;

  /**
   * 触发评分数量变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  triggerChange: Callback<number>;
}

/**
   * 操作评分条的评星变化时触发该回调。
   *
   * @param {number} rating - 评分条的评分。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  declare type OnRatingChangeCallback = (rating: number) => void;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class RatingAttribute extends CommonMethod<RatingAttribute> {
  /**
   * 设置评分总数。设置为小于等于0的值时，按默认值显示。
   *
   * @param { number } value - 设置评分总数。<br/>默认值：5
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stars(value: number): RatingAttribute;

  /**
   * 设置评分总数。设置为小于等于0的值时，按默认值显示。与[stars]{@link RatingAttribute#stars(value: number)}相比，starCount参数新增了对undefined类型的支持。
   *
   * @param { Optional<number> } starCount - 设置评分总数。<br/>当starCount的值为undefined时，默认值：5
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  stars(starCount: Optional<number>): RatingAttribute;

  /**
   * 设置操作评级的步长。设置为小于0.1的值时，按默认值显示。
   *
   * @param { number } value - 操作评级的步长。<br/>默认值：0.5<br/>取值范围：[0.1, stars]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stepSize(value: number): RatingAttribute;

  /**
   * 设置操作评级的步长。设置为小于0.1的值时，按默认值显示。与[stepSize]{@link RatingAttribute#stepSize(value: number)}相比，size参数新增了对undefined类型的支持。
   *
   * @param { Optional<number> } size - 操作评级的步长。<br/>当size的值为undefined时，默认值：0.5<br/>取值范围：[0.1, stars]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  stepSize(size: Optional<number>): RatingAttribute;

  /**
   * 设置评分的样式。该属性所支持的图片类型能力参考[Image]{@link image}组件。
   * 
   * 支持加载本地图片和网络图片，暂不支持PixelMap类型。
   * 
   * 默认图片加载方式为异步，暂不支持同步加载。
   *
   * @param { object } value [since 7 - 17]
   * @param { StarStyleOptions } options - 评分的样式。<br/>**说明：** <br/>当backgroundUri、foregroundUri或secondaryUri设置的图片路径错误时，图
   *     片将保持上次的图片显示结果。如果首次设置错误，则不显示图片。<br/>当backgroundUri或foregroundUri设置为undefined或空字符串时，Rating组件将加载系统默认星型图源。<br/>当
   *     secondaryUri未设置或设置为undefined或空字符串时，将优先使用backgroundUri，效果等同于仅设置foregroundUri和backgroundUri。 [since 18]
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  starStyle(options: StarStyleOptions): RatingAttribute;

  /**
   * 设置评分的样式。该属性所支持的图片类型能力参考[Image]{@link image}组件。
   * 
   * 支持加载本地图片和网络图片，暂不支持PixelMap类型。
   * 
   * 默认图片加载方式为异步，暂不支持同步加载。
   * 
   * 与[starStyle]{@link RatingAttribute#starStyle(options: StarStyleOptions)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<StarStyleOptions> } options - 评分的样式。<br/>**说明：** <br/>当backgroundUri、foregroundUri或secondaryUri设置
   *     的图片路径错误时，图片将保持上次的图片显示结果。如果首次设置错误，则不显示图片。<br/>当backgroundUri或foregroundUri设置为undefined或空字符串时，Rating组件将加载系统默认星型图
   *     源。<br/>当secondaryUri未设置或设置为undefined或空字符串时，将优先使用backgroundUri，效果等同于仅设置foregroundUri和backgroundUri。
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  starStyle(options: Optional<StarStyleOptions>): RatingAttribute;

  /**
   * 当评分条的评星变化时触发该回调。
   *
   * @param { function } callback
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: (value: number) => void): RatingAttribute;

  /**
   * 当评分条的评星变化时触发该回调。与[onChange]{@link RatingAttribute#onChange(callback: (value: number) => void)}相比，callback参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<OnRatingChangeCallback> } callback - 操作评分条的评星变化时触发该回调。<br/>当callback的值为undefined时，不使用回调函数。
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  onChange(callback: Optional<OnRatingChangeCallback>): RatingAttribute;

  /**
   * 定制Rating内容区的方法。
   *
   * @param { ContentModifier<RatingConfiguration> } modifier - 在Rating组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义class实现
   *     ContentModifier接口。
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<RatingConfiguration>): RatingAttribute;

  /**
   * 定制Rating内容区的方法。与
   * [contentModifier]{@link RatingAttribute#contentModifier(modifier: ContentModifier<RatingConfiguration>)}相比，modifier
   * 参数新增了对undefined类型的支持。
   *
   * @param { Optional<ContentModifier<RatingConfiguration>> } modifier - 在Rating组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自
   *     定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  contentModifier(modifier: Optional<ContentModifier<RatingConfiguration>>): RatingAttribute;
}

/**
 * 提供在给定范围内选择评分的组件。
 * 
 * > **说明：**
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const Rating: RatingInterface;

/**
 * Defines Rating Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const RatingInstance: RatingAttribute;