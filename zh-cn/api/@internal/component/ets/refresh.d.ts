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
 * RefreshStatus刷新状态枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum RefreshStatus {

  /**
   * 默认未下拉状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Inactive,

  /**
   * 下拉中，下拉距离小于刷新距离。
   *
   * 若此时松手，组件进入Inactive状态；若此时继续下拉使下拉距离超过刷新距离，组件进入OverDrag状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Drag,

  /**
   * 下拉中，下拉距离超过刷新距离。
   *
   * 若此时松手，组件进入Refresh状态；若此时上滑使下拉距离小于刷新距离，组件进入Drag状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  OverDrag,

  /**
   * After the pull-down, it rebounds to the refresh distance and enters the refresh state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Refresh,

  /**
   * 刷新结束，返回初始状态（顶部）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Done,
}

/**
 * 用于设置Refresh组件参数。
 *
 * > **补充说明：**
 * >
 * > - 当未设置builder或refreshingContent时，是通过更新子组件的[translate]{@link CommonMethod#translate(value: TranslateOptions)}属性实现的下拉
 * > 位移效果，下拉位移过程中不会触发子组件的
 * > [onAreaChange]{@link CommonMethod#onAreaChange(event: (oldValue: Area, newValue: Area) => void)}事件，子组件设置
 * > [translate]{@link CommonMethod#translate(value: TranslateOptions)}属性时不会生效。
 * >
 * > - 当设置了builder或refreshingContent时，是通过更新子组件相对于Refresh组件的位置实现的下拉位移效果，下拉位移过程中可以触发子组件的
 * > [onAreaChange]{@link CommonMethod#onAreaChange(event: (oldValue: Area, newValue: Area) => void)}事件，子组件设置
 * > [position]{@link CommonMethod#position}属性时会固定子组件相对于Refresh组件的位置导致子组件不会跟手进行下拉位移。
 * >
 * > - 通过builder参数设置的自定义组件在未指定宽度和高度时，其尺寸将自适应子组件，在指定宽度而未指定高度时，其高度将自适应下拉距离。通过refreshingContent参数设置的自定义组件若未指定高度，其高度同样会自适应下拉
 * > 距离。当自定义组件高度自适应下拉距离时，随着下拉距离的增加，该组件的高度亦随之增加；当自定义组件的高度设定为固定值或达到最大高度限制时，随着下拉距离的增加，自定义组件与Refresh组件上边界之间的间距亦会随之增加。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface RefreshOptions {

  /**
   * 组件当前是否处于刷新中状态。true表示处于刷新中状态，false表示未处于刷新中状态。<br/>默认值：false<br/>该参数支持$$双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  refreshing: boolean;

  /**
   * 下拉起点距离组件顶部的距离。<br/>默认值：16，单位vp。类型为string时，需要显式指定像素单位，如'10px'；未指定像素单位时，如'10'，单位为vp。
   * <br/>**说明：** 从API version 8开始支持，从API version 11开始废弃，无替代接口。
   * <br/>**说明：**<br/>offset取值范围[0vp,64vp]。大于64vp按照64vp处理。不支持百分比，不支持负数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @since 8 dynamiconly
   * @deprecated since 11
   */
  offset?: number | string;

  /**
   * 下拉摩擦系数，取值范围为0到100。<br/>默认值：62<br/>- 0表示下拉刷新容器不跟随手势下拉而下拉。<br/>- 100表示下拉刷新容器紧紧跟随手势下拉而下拉。<br/>- 数值越大，下拉刷新容器跟随手势下拉的反应越灵敏。
   * <br/>**说明：** 从API version 8开始支持，从API version 11开始废弃，建议使用
   * [pullDownRatio](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#pulldownratio12)替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @since 8 dynamiconly
   * @deprecated since 11
   * @useinstead RefreshAttribute#pullDownRatio
   */
  friction?: number | string;

  /**
   * 设置刷新区域底部显示的自定义文本。
   * <br/>**说明：**<br/>输入文本的限制参考Text组件，使用builder或refreshingContent参数自定义刷新区域显示内容时，promptText不显示。
   * <br/>promptText设置有效时，
   * [refreshOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoffset12)属性默认值为96vp。
   * <br/>自定义文本最大的字体缩放倍数
   * [maxFontScale](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#maxfontscale12)为2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  promptText?: ResourceStr;

  /**
   * 自定义刷新区域显示内容。
   * <br/>**说明：**<br/>API version 10及之前版本，自定义组件的高度限制在64vp之内。API version 11及以后版本没有此限制。
   * <br/>自定义组件设置了固定高度时，自定义组件会以固定高度显示在刷新区域下方；自定义组件未设置高度时，自定义组件高度会自适应刷新区域高度，会发生自定义组件高度跟随刷新区域变化至0的现象。
   * 建议对自定义组件设置最小高度约束来避免自定义组件高度小于预期的情况发生，具体可参照
   * [示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#示例3自定义刷新区域显示内容-builder)。
   * <br/>从API version 12开始，建议使用refreshingContent参数替代builder参数自定义刷新区域显示内容，以避免刷新过程中因自定义组件销毁重建造成的动画中断问题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  builder?: CustomBuilder;

  /**
   * 自定义刷新区域显示内容。
   * <br/>**说明：**<br/>与builder参数同时设置时builder参数不生效。
   * <br/>自定义组件设置了固定高度时，自定义组件会以固定高度显示在刷新区域下方；自定义组件未设置高度时，自定义组件高度会自适应刷新区域高度，会发生自定义组件高度跟随刷新区域变化至0的现象。
   * 建议对自定义组件设置最小高度约束来避免自定义组件高度小于预期的情况发生，具体可参照
   * [示例4](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#示例4自定义刷新区域显示内容-refreshingcontent)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  refreshingContent?: ComponentContent;
}

/**
 * 可以进行页面下拉操作并显示刷新动效的容器组件。
 *
 * > **说明：**
 * >
 * > - 该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 该组件从API version 12开始支持与垂直滚动的[Swiper]{@link swiper}和
 * > [Web](docroot://reference/apis-arkui/arkui-js/js-components-basic-web.md)的联动。当[Swiper]{@link swiper}设置
 * > [loop]{@link SwiperAttribute#loop}属性为true时，Refresh无法和[Swiper]{@link swiper}产生联动。
 * >
 * > - Refresh和内容大小小于组件自身的[List]{@link list}组件嵌套使用并且中间还有其他组件时，手势可能会被中间组件响应，导致Refresh未产生下拉刷新效果，可以将
 * > [alwaysEnabled]{@link EdgeEffectOptions}参数设为true，此时[List]{@link list}会响应手势并通过嵌套滚动带动Refresh组件产生下拉刷新效果，具体可以参考
 * > [示例9（不满一屏场景实现下拉刷新）](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#示例9不满一屏场景实现下拉刷新)。
 * >
 * > - 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
 * >
 * > - 组件无法通过鼠标按下拖动操作进行下拉刷新。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface RefreshInterface {

  /**
   * 创建Refresh容器。
   *
   * @param { RefreshOptions } value - 刷新组件参数。
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (value: RefreshOptions): RefreshAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class RefreshAttribute extends CommonMethod<RefreshAttribute> {

  /**
   * 当前刷新状态变更时，触发回调。
   *
   * @param { function } callback
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onStateChange(callback: (state: RefreshStatus) => void): RefreshAttribute;

  /**
   * 进入刷新状态时触发回调。
   *
   * @param { function } callback - 进入刷新状态时触发的回调。
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRefreshing(callback: () => void): RefreshAttribute;

  /**
   * 设置触发刷新的下拉偏移量，当下拉距离小于该属性设置值时离手不会触发刷新。
   *
   * @param { number } value - 下拉偏移量，单位vp。<br/>默认值：未设置
   *     [promptText](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoptions对象说明)参数时为64vp，设置了
   *     [promptText](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoptions对象说明)参数时为96vp。 <br/>
   *     如果取值为0或负数的时候此接口采用默认值。
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  refreshOffset(value: number): RefreshAttribute;

  /**
   * 设置触发刷新的下拉偏移量，当下拉距离小于该属性设置值时离手不会触发刷新，支持Resource资源类型。
   *
   * 未通过该接口设置时，当未设置[promptText](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoptions对象说明)参数时，默
   * 认偏移量为64vp；设置了[promptText](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoptions对象说明)参数时，默认
   * 偏移量为96vp。
   *
   * @param { number | Resource } value - 下拉偏移量。<br/>单位：vp<br/>取值范围：(0, +∞)。值为0或负数时，按默认值处理。
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  refreshOffset(value: number | Resource): RefreshAttribute;

  /**
   * 设置当下拉距离超过[refreshOffset]{@link RefreshAttribute#refreshOffset(value: number)}时是否能触发刷新。
   *
   * @param { boolean } value - 当下拉距离超过[refreshOffset]{@link RefreshAttribute#refreshOffset(value: number)}时是否能触发刷新。true
   *     表示能触发刷新，false表示不能触发刷新。<br/>默认值：true
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pullToRefresh(value: boolean): RefreshAttribute;

  /**
   * 设置上划是否取消刷新。
   *
   * @param { boolean | undefined } enabled - 设置上划是否取消刷新。<br/>true表示取消刷新；false表示不取消刷新。<br/>值为undefined时，上划取消刷新。
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  pullUpToCancelRefresh(enabled: boolean | undefined): RefreshAttribute;

  /**
   * 下拉距离发生变化时触发回调。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<number> } callback - 回调函数，用于监听下拉距离的变化。当下拉距离发生变化时触发，回调参数为当前的下拉距离。<br/>单位：vp
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onOffsetChange(callback: Callback<number>): RefreshAttribute;

  /**
   * 设置下拉跟手系数。
   *
   * @param { Optional<number> } ratio - 下拉跟手系数。数值越大，跟随手势下拉的反应越灵敏。0表示不跟随手势下拉，1表示等比例跟随手势下拉。<br/>没有设置或设置为undefined时，默认使用动态
   *     下拉跟手系数，下拉距离越大，跟手系数越小。<br/>有效值为0-1之间的值，小于0的值会被视为0，大于1的值会被视为1。
   * @returns { RefreshAttribute } Refresh组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pullDownRatio(ratio: Optional<number>): RefreshAttribute;

  /**
   * 设置最大下拉距离。
   *
   * @param { Optional<number> } distance - 最大下拉距离。最大下拉距离的最小值为0，小于0按0处理。当该值小于刷新的下拉偏移量refreshOffset时，Refresh下拉离手不会触发刷新。<
   *     br/>undefined和null按没有设置此属性处理。<br/>默认值：undefined<br/>单位：vp
   * @returns { RefreshAttribute } Refresh组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maxPullDownDistance(distance: Optional<number>): RefreshAttribute;

  /**
   * 设置最大下拉距离，支持Resource资源类型。
   *
   * 未通过该接口设置时，设置最大下拉距离为undefined。
   *
   * @param { number | Resource | undefined } distance - 最大下拉距离。<br/>默认值：undefined<br/>单位：vp<br/>取值范围：
   *     [0, +∞)，值小于0时按0处理。当该值小于刷新的下拉偏移量[refreshOffset]{@link RefreshAttribute#refreshOffset(value: number)}时，Refresh下拉离手不会触发刷新。<br/>undefined和null按没有设置此属性处理，即没有最大下拉距离限制。
   * @returns { RefreshAttribute } The attribute of the Refresh.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxPullDownDistance(distance: number | Resource | undefined): RefreshAttribute;
}

/**
 * 可以进行页面下拉操作并显示刷新动效的容器组件。
 *
 * > **说明：**
 * >
 * > - 该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 该组件从API version 12开始支持与垂直滚动的[Swiper]{@link swiper}和
 * > [Web](docroot://reference/apis-arkui/arkui-js/js-components-basic-web.md)的联动。当[Swiper]{@link swiper}设置
 * > [loop]{@link SwiperAttribute#loop}属性为true时，Refresh无法和[Swiper]{@link swiper}产生联动。
 * >
 * > - Refresh和内容大小小于组件自身的[List]{@link list}组件嵌套使用并且中间还有其他组件时，手势可能会被中间组件响应，导致Refresh未产生下拉刷新效果，可以将
 * > [alwaysEnabled]{@link EdgeEffectOptions}参数设为true，此时[List]{@link list}会响应手势并通过嵌套滚动带动Refresh组件产生下拉刷新效果，具体可以参考
 * > [示例9（不满一屏场景实现下拉刷新）](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#示例9不满一屏场景实现下拉刷新)。
 * >
 * > - 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
 * >
 * > - 组件无法通过鼠标按下拖动操作进行下拉刷新。
 *
 * ###### 子组件
 *
 * 支持单个子组件。
 *
 * 从API version 11开始，Refresh子组件会跟随手势下拉而下移。
 *
 * ###### RefreshOptions对象说明
 *
 * 用于设置Refresh组件参数。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * <!--Table: 20%; 20%; 8%; 8%; 44%-->
 *
 * | 名称         | 类型                                      | 只读   | 可选 | 说明                                     |
 * | ---------- | ---------------------------------------- | ---- | -- | ---------------------------------------- |
 * | refreshing | boolean                                  | 否    | 否 | 组件当前是否处于刷新中状态。true表示处于刷新中状态，false表示未处于刷新中状态。<br/>默认值：false<br/>该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 <br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。|
 * | offset<sup>(deprecated)</sup>    | number&nbsp;\|&nbsp;string   | 否    | 是 | 下拉起点距离组件顶部的距离。<br/>默认值：16，单位vp。类型为string时，需要显式指定像素单位，如'10px'；未指定像素单位时，如'10'，单位为vp。 <br/>**说明：** 从API version 8开始支持，从API version 11开始废弃，无替代接口。<br/>**说明：**<br/>offset取值范围[0vp,64vp]。大于64vp按照64vp处理。不支持百分比，不支持负数。|
 * | friction<sup>(deprecated)</sup>   | number&nbsp;\|&nbsp;string               | 否    | 是 | 下拉摩擦系数，取值范围为0到100。<br/>默认值：62<br/>-&nbsp;0表示下拉刷新容器不跟随手势下拉而下拉。<br/>-&nbsp;100表示下拉刷新容器紧紧跟随手势下拉而下拉。<br/>-&nbsp;数值越大，下拉刷新容器跟随手势下拉的反应越灵敏。<br/>**说明：** 从API version 8开始支持，从API version 11开始废弃，建议使用[pullDownRatio](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#pulldownratio12)替代。 |
 * | builder<sup>10+</sup>    | [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) | 否    | 是 | 自定义刷新区域显示内容。<br/>**说明：**<br/>API version 10及之前版本，自定义组件的高度限制在64vp之内。API version 11及以后版本没有此限制。 <br/>自定义组件设置了固定高度时，自定义组件会以固定高度显示在刷新区域下方；自定义组件未设置高度时，自定义组件高度会自适应刷新区域高度，会发生自定义组件高度跟随刷新区域变化至0的现象。建议对自定义组件设置最小高度约束来避免自定义组件高度小于预期的情况发生，具体可参照[示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#示例3自定义刷新区域显示内容-builder)。 <br/>从API version 12开始，建议使用refreshingContent参数替代builder参数自定义刷新区域显示内容，以避免刷新过程中因自定义组件销毁重建造成的动画中断问题。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。|
 * | promptText<sup>12+</sup> | [ResourceStr]{@link units:ResourceStr} | 否 | 是 | 设置刷新区域底部显示的自定义文本。<br/>**说明：**<br/>输入文本的限制参考Text组件，使用builder或refreshingContent参数自定义刷新区域显示内容时，promptText不显示。<br/>promptText设置有效时，[refreshOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoffset12)属性默认值为96vp。<br/>自定义文本最大的字体缩放倍数[maxFontScale](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#maxfontscale12)为2。<br/>**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。|
 * | refreshingContent<sup>12+</sup>    | [ComponentContent]{@link ./../../../arkui/ComponentContent} | 否    | 是 | 自定义刷新区域显示内容。<br/>**说明：**<br/>与builder参数同时设置时builder参数不生效。<br/>自定义组件设置了固定高度时，自定义组件会以固定高度显示在刷新区域下方；自定义组件未设置高度时，自定义组件高度会自适应刷新区域高度，会发生自定义组件高度跟随刷新区域变化至0的现象。建议对自定义组件设置最小高度约束来避免自定义组件高度小于预期的情况发生，具体可参照[示例4](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#示例4自定义刷新区域显示内容-refreshingcontent)。 <br/>**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。|
 *
 * > **补充说明：**
 * >
 * > - 当未设置builder或refreshingContent时，是通过更新子组件的
 * > [translate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#translate)属性实现的下拉位移效果
 * > ，下拉位移过程中不会触发子组件的
 * > [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange)事件，
 * > 子组件设置[translate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#translate)属性时不会生
 * > 效。
 * >
 * > - 当设置了builder或refreshingContent时，是通过更新子组件相对于Refresh组件的位置实现的下拉位移效果，下拉位移过程中可以触发子组件的
 * > [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange)事件，
 * > 子组件设置[position](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#position)属性时会固定子组件相对于
 * > Refresh组件的位置导致子组件不会跟手进行下拉位移。
 * >
 * > - 通过builder参数设置的自定义组件在未指定宽度和高度时，其尺寸将自适应子组件，在指定宽度而未指定高度时，其高度将自适应下拉距离。通过refreshingContent参数设置的自定义组件若未指定高度，其高度同样会自适应下拉
 * > 距离。当自定义组件高度自适应下拉距离时，随着下拉距离的增加，该组件的高度亦随之增加；当自定义组件的高度设定为固定值或达到最大高度限制时，随着下拉距离的增加，自定义组件与Refresh组件上边界之间的间距亦会随之增加。
 *
 * ###### RefreshStatus枚举说明
 *
 * RefreshStatus刷新状态枚举。
 *
 * **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * | 名称       | 值       | 说明                 |
 * | -------- | -------- | -------------------- |
 * | Inactive | 0 | 默认未下拉状态。             |
 * | Drag     | 1 | 下拉中，下拉距离小于刷新距离。<br/>若此时松手，组件进入Inactive状态；若此时继续下拉使下拉距离超过刷新距离，组件进入OverDrag状态。   |
 * | OverDrag | 2 | 下拉中，下拉距离超过刷新距离。<br/>若此时松手，组件进入Refresh状态；若此时上滑使下拉距离小于刷新距离，组件进入Drag状态。      |
 * | Refresh  | 3 | 下拉结束，回弹至刷新距离，进入刷新中状态。 |
 * | Done     | 4 | 刷新结束，返回初始状态（顶部）。     |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Refresh: RefreshInterface;

/**
 * 可以进行页面下拉操作并显示刷新动效的容器组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const RefreshInstance: RefreshAttribute;