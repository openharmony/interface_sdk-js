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
 * Enumerates the states of a refresh operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum RefreshStatus {

  /**
   * The component is not pulled down. This is the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Inactive,

  /**
   * The component is being pulled down, but the pull-down distance is shorter than the refresh threshold.
   *
   * If you release the component, it enters the **Inactive** state. If you continue to pull down the component and the
   * pull-down distance exceeds the refresh threshold, the component enters the **OverDrag** state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Drag,

  /**
   * The component is being pulled down, and the pull-down distance exceeds the refresh threshold.
   *
   * If you release the component, the component enters the **Refresh** state. If you swipe upward and the pull-down
   * distance is less than the refresh threshold, the component enters the **Drag** state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  OverDrag,

  /**
   * The pull-down ends, and the component rebounds to the minimum length required to trigger the refresh and enters the
   * refreshing state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Refresh,

  /**
   * The refresh is complete, and the component returns to the initial state (at the top).
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
 * Defines the options of the **Refresh** component.
 *
 * > **Supplementary Notes**
 * >
 * > - If neither **builder** nor **refreshingContent** is set, the pull-down displacement effect is implemented by
 * > adjusting the [translate]{@link CommonMethod#translate(value: TranslateOptions)} attribute of the child component.
 * > During the pull-down process, the
 * > [onAreaChange]{@link CommonMethod#onAreaChange(event: (oldValue: Area, newValue: Area) => void)} event of the child
 * > component is not triggered, and any changes made to the
 * > [translate]{@link CommonMethod#translate(value: TranslateOptions)} attribute of the child component do not take
 * > effect.
 * >
 * > - When **builder** or **refreshingContent** is set, the pull-down displacement effect is implemented by adjusting
 * > the position of the child component relative to the **Refresh** component. During the pull-down process, the
 * > [onAreaChange]{@link CommonMethod#onAreaChange(event: (oldValue: Area, newValue: Area) => void)} event of the child
 * > component can be triggered. However, if the [position]{@link CommonMethod#position} attribute is set for the child
 * > component, the position of the child component relative to the **Refresh** component is fixed, preventing the child
 * > component from moving down with the pull gesture.
 * >
 * > - If the width and height of a custom component set by **builder** are not specified, its dimensions will adapt to
 * > the child components. If the width is specified but the height is not, the height of the component is automatically
 * > adjusted according to the pull-down distance. If a custom component set by **refreshingContent** does not have a
 * > specified height, its height will also adapt to the pull-down distance. In such cases, as the pull-down distance
 * > increases, the height of the custom component will increase accordingly. When the custom component's height is set
 * > to a fixed value or reaches its maximum height limit, further increases in the pull-down distance will cause the
 * > spacing between the custom component and the top boundary of the **Refresh** component to widen.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface RefreshOptions {

  /**
   * Whether the component is being refreshed. The value **true** means that the component is being refreshed,
   * and **false** means the opposite.
   * Default value: **false**
   * This parameter supports two-way binding through $$.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  refreshing: boolean;

  /**
   * Distance from the pull-down starting point to the top of the component.
   * Default value: **16**. Unit: vp. If the type is string, the pixel unit must be explicitly specified, for example,
   * **'10px'**; if the unit is not specified, for example, **'10'**, the default unit vp is used.
   * Note: This API is supported since API version 8 and deprecated since API version 11. No substitute is provided.
   * NOTE
   * The value range of **offset** is [0vp, 64vp]. If the value is greater than 64 vp, the value 64 vp will be used.
   * The value cannot be a percentage or a negative number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @since 8 dynamiconly
   * @deprecated since 11
   */
  offset?: number | string;

  /**
   * Coefficient of friction, which indicates the component's sensitivity to the pull-down gesture.
   * The value ranges from 0 to 100. Default value: 62
   *
   * - 0 indicates that the component is not sensitive to the pull-down gesture.
   * - 100 indicates that the component is highly sensitive to the pull-down gesture.
   * - A larger value indicates a more sensitive response of the component to the pull-down gesture.
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
   * Custom text displayed at the bottom of the refreshing area.
   * NOTE
   * When setting the text, follow the constraints on the **Text** components. If you are using **builder** or
   * **refreshingContent** to customize the content displayed in the refreshing area, the text set with
   * **promptText** will not be displayed.
   * When **promptText** is set and effective, the refreshOffset attribute defaults to 96 vp.
   * The maximum font scale factor for the custom text, as specified by maxFontScale, is 2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  promptText?: ResourceStr;

  /**
   * Custom content in the refreshing area.
   * NOTE
   * In API version 10 and earlier versions, there is a height limit of 64 vp on custom components. This restriction
   * is removed since API version 11.
   * When a custom component is set with a fixed height, it will be displayed below the refreshing area at that fixed
   * height; when the custom component does not have a height set, its height will adapt to the height of the refreshing
   * area, which may result in the height of the custom component changing to 0 along with the refreshing area. To
   * maintain the intended layout, configure a minimum height constraint for a custom component, which ensures that the
   * component's height does not fall below a certain threshold. For details about how to apply this constraint, see
   * [Example 3](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#example-3-customizing-the-refreshing-area-content-with-builder).
   * Since API version 12, use **refreshingContent** instead of **builder** for customizing the content of the
   * refreshing area, to avoid animation interruptions caused by the destruction and re-creation of the custom component
   * during the refreshing process.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  builder?: CustomBuilder;

  /**
   * Custom content in the refreshing area.
   * NOTE
   * If this parameter and the **builder** parameter are set at the same time, the **builder** parameter does not
   * take effect.
   * When a custom component is set with a fixed height, it will be displayed below the refreshing area at that fixed
   * height; when the custom component does not have a height set, its height will adapt to the height of the refreshing
   * area, which may result in the height of the custom component changing to 0 along with the refreshing area. To
   * maintain the intended layout, configure a minimum height constraint for a custom component, which ensures that the
   * component's height does not fall below a certain threshold. For details about how to apply this constraint, see
   * [Example 4](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#example-4-customizing-the-refreshing-area-content-with-refreshingcontent).
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
 * The **Refresh** component is a container that provides the pull-to-refresh feature.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. Updates will be marked with a superscript to indicate their
 * > earliest API version.
 * >
 * > - Since API version 12, this component provides linkage with a vertically scrolling [Swiper]{@link swiper} and
 * > [Web](docroot://reference/apis-arkui/arkui-js/js-components-basic-web.md) components. When the
 * > [loop]{@link SwiperAttribute#loop} attribute of [Swiper]{@link swiper} is set to **true**, the **Refresh**
 * > component cannot provide linkage with [Swiper]{@link swiper}.
 * >
 * > - When the **Refresh** component is nested with a [List]{@link list} component whose content size is smaller than
 * > the component itself, and there are other components in between, gestures may be intercepted by the intermediate
 * > components, preventing the pull-to-refresh effect. In such cases, set the [alwaysEnabled]{@link EdgeEffectOptions}
 * > parameter to **true** to allow [List]{@link list} to respond to gestures and drive the **Refresh** component
 * > through nested scrolling for the pull-to-refresh effect. For details, see
 * > [Example 9: Implementing Pull-to-Refresh in the Non-Full-Screen Scenario](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#example-9-implementing-pull-to-refresh-in-the-non-full-screen-scenario).
 * >
 * > - The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
 * > custom gestures, refer to [Gesture Blocking Enhancement]{@link common}.
 * >
 * > - Pull-to-refresh cannot be triggered by mouse click-and-drag operations.
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
   * Creates a **Refresh** container.
   *
   * @param { RefreshOptions } value - Parameters of the **Refresh** component.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
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
   * Called when the refresh status changes.
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
   * Called when the component starts refreshing.
   *
   * @param { function } callback - Callback triggered when the component enters the refresh state.
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRefreshing(callback: () => void): RefreshAttribute;

  /**
   * Sets the minimum pull-down offset required to trigger a refresh. If the distance pulled down is less than the value
   * specified by this attribute, releasing the gesture does not trigger a refresh.
   *
   * @param { number } value - Pull-down offset, in vp.<br>Default value: 96 vp when [promptText]{@link RefreshOptions}
   *     is set and 64 vp when [promptText]{@link RefreshOptions} is not set.<br>If the value specified is 0 or less
   *     than 0, the default value is used.
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  refreshOffset(value: number): RefreshAttribute;

  /**
   * Sets the pull-down offset that triggers the refresh. When the pull-down distance is less than the value of this
   * attribute, releasing the pull-down gesture does not trigger the refresh. The resource type is supported.
   *
   * If this API and [promptText]{@link RefreshOptions} are not set, the default offset is 64 vp. If
   * [promptText]{@link RefreshOptions} is set, the default offset is 96 vp.
   *
   * @param { number | Resource } value - Pull-down offset.<br>Unit: vp<br>Value range: (0, +∞). If the value is 0 or a
   *     negative number, the default value will be used.
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  refreshOffset(value: number | Resource): RefreshAttribute;

  /**
   * Sets whether to initiate a refresh when the pull-down distance exceeds the value of
   * [refreshOffset]{@link RefreshAttribute#refreshOffset(value: number)}.
   *
   * @param { boolean } value - Whether to initiate a refresh when the pull-down distance exceeds the value of
   *     [refreshOffset]{@link RefreshAttribute#refreshOffset(value: number)}. The value **true** means to initiate a
   *     refresh, and **false** means the opposite.<br>Default value: **true**
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pullToRefresh(value: boolean): RefreshAttribute;

  /**
   * Sets whether to enable the pull-up-to-cancel gesture for refreshing operations.
   *
   * @param { boolean | undefined } enabled - Whether to enable the pull-up-to-cancel gesture for refreshing operations.
   *     <br>**true**: Enable the pull-up-to-cancel gesture. **false**: Disable the pull-up-to-cancel gesture.<br>
   *     **undefined**: Enable the pull-up-to-cancel gesture.
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  pullUpToCancelRefresh(enabled: boolean | undefined): RefreshAttribute;

  /**
   * Called when the pull-down distance changes.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<number> } callback - Callback used to listen for the pull-down distance changes. It is triggered
   *     when the pull-down distance changes and returns the current pull-down distance.<br>Unit: vp
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onOffsetChange(callback: Callback<number>): RefreshAttribute;

  /**
   * Sets the pull-down ratio.
   *
   * @param { Optional<number> } ratio - Pull-down ratio. A larger value indicates higher responsiveness to the pull-
   *     down gesture. The value **0** indicates that the pull-down does not follow the gesture, and **1** indicates
   *     that the pull-down follows the gesture proportionally.<br>If this parameter is not set or is set to
   *     **undefined**, a dynamic pull-down ratio is used. That is, the larger the pull-down distance, the smaller the
   *     ratio.<br>The value ranges from 0 to 1. A value less than 0 is handled as **0**, and a value greater than 1 is
   *     handled as **1**.
   * @returns { RefreshAttribute } The attribute of the Refresh.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pullDownRatio(ratio: Optional<number>): RefreshAttribute;

  /**
   * Sets the maximum pull-down distance.
   *
   * @param { Optional<number> } distance - Maximum pull-down distance. The minimum value for the maximum pull-down
   *     distance is 0. Values less than 0 are treated as **0**. If this value is less than the refresh offset (
   *     **refreshOffset**), the refresh action will not be triggered when the pull-down gesture is released.<br>If set
   *     to **undefined** or **null**, this parameter is considered not set.<br>Default value: **undefined**.<br>Unit:
   *     vp
   * @returns { RefreshAttribute } The attribute of the Refresh.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maxPullDownDistance(distance: Optional<number>): RefreshAttribute;

  /**
   * Sets the maximum pull-down distance. The resource type is supported.
   *
   * If this API is not set, the maximum pull-down distance is **undefined**.
   *
   * @param { number | Resource | undefined } distance - Maximum pull-down distance.<br>Default value: **undefined**.<br
   *     >Unit: vp<br>Value range:
   *     [0, +∞). If the value is less than 0, **0** is used.
   *     If this value is less than the
   *     [refreshOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoffset12),
   *     the refresh action will not be triggered when the pull-down gesture is released.
   *     <br>If this parameter is set to **undefined** or **null**,
   *     it is considered that this attribute is not set, meaning there is no limit on the maximum pull-down distance.
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
 * The **Refresh** component is a container that provides the pull-to-refresh feature.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. Updates will be marked with a superscript to indicate their
 * > earliest API version.
 * >
 * > - Since API version 12, this component provides linkage with a vertically scrolling [Swiper]{@link swiper} and
 * > [Web](docroot://reference/apis-arkui/arkui-js/js-components-basic-web.md) components. When the
 * > [loop]{@link SwiperAttribute#loop} attribute of [Swiper]{@link swiper} is set to **true**, the **Refresh**
 * > component cannot provide linkage with [Swiper]{@link swiper}.
 * >
 * > - When the **Refresh** component is nested with a [List]{@link list} component whose content size is smaller than
 * > the component itself, and there are other components in between, gestures may be intercepted by the intermediate
 * > components, preventing the pull-to-refresh effect. In such cases, set the [alwaysEnabled]{@link EdgeEffectOptions}
 * > parameter to **true** to allow [List]{@link list} to respond to gestures and drive the **Refresh** component
 * > through nested scrolling for the pull-to-refresh effect. For details, see
 * > [Example 9: Implementing Pull-to-Refresh in the Non-Full-Screen Scenario](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#example-9-implementing-pull-to-refresh-in-the-non-full-screen-scenario).
 * >
 * > - The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
 * > custom gestures, refer to [Gesture Blocking Enhancement]{@link common}.
 * >
 * > - Pull-to-refresh cannot be triggered by mouse click-and-drag operations.
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 *
 * Since API version 11, this component's child component moves down with the pull-down gesture.
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
 * Defines Refresh Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const RefreshInstance: RefreshAttribute;