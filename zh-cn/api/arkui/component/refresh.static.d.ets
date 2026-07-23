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
 * @file
 * @kit ArkUI
 */
import { Callback, CommonMethod, Bindable } from './common';
import { CustomBuilder } from './builder';
import { ResourceStr, Resource } from './units';
import { ComponentContentBase } from '../ComponentContent';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * 下拉刷新的刷新状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RefreshStatus {

  /**
   * The refresh status of the drop-down refresh.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Inactive,

  /**
   * Drop down, but the drop-down distance is less than the refresh distance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Drag,

  /**
   * The pull-down exceeds the refresh distance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OverDrag,

  /**
   * After the pull-down, it rebounds to the refresh distance and enters the refresh state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Refresh,

  /**
   * After refresh, return to the initial state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Done
}

/**
 * 用于设置Refresh组件参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RefreshOptions {

  /**
   * 组件当前是否处于刷新中状态。该参数支持$用于双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  refreshing: boolean | Bindable<boolean>;

  /**
   * 设置刷新区域底部显示的自定义文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  promptText?: ResourceStr;

  /**
   * 自定义刷新区域显示内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  builder?: CustomBuilder;

  /**
   * 自定义刷新区域显示内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  refreshingContent?: ComponentContentBase;
}

/**
 * 支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface RefreshAttribute extends CommonMethod {

  /**
   * 当前刷新状态变更时，触发回调。
   *
   * @param { function | undefined } callback
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onStateChange(callback: ((state: RefreshStatus) => void) | undefined): this;

  /**
   * 进入刷新状态时触发回调。
   *
   * @param { function | undefined } callback
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onRefreshing(callback: (() => void) | undefined): this;

  /**
   * 设置触发刷新的下拉偏移量，当下拉距离小于该属性设置值时离手不会触发刷新。
   *
   * @param { double | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default refreshOffset(value: double | undefined): this;

  /**
   * 设置当下拉距离超过[refreshOffset]{@link default refreshOffset(value: double | undefined)}时是否能触发刷新。
   *
   * @param { boolean | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default pullToRefresh(value: boolean | undefined): this;

  /**
   * 设置触发刷新的下拉偏移量，当下拉距离小于该属性设置值时离手不会触发刷新，支持Resource资源类型。
   *
   * 未通过该接口设置时，当未设置[promptText](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoptions对象说明)参数
   * 时，默认偏移量为64vp；设置了[promptText](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#refreshoptions对象说明)参
   * 数时，默认偏移量为96vp。
   *
   * @param { Resource | undefined } value - 下拉偏移量。<br/>单位：vp<br/>取值范围：(0, +∞)。值为0或负数时，按默认值处理。<br/>取值为undefined时，按默认值处
   *     理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default refreshOffset(value: Resource | undefined): this;

  /**
   * 设置上划是否取消刷新。
   *
   * @param { boolean | undefined } enabled - 设置上划是否取消刷新。<br/>true表示取消刷新；false表示不取消刷新。<br/>值为undefined时，上划取消刷新。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default pullUpToCancelRefresh(enabled: boolean | undefined): this;

  /**
   * 下拉距离发生变化时触发回调。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<double> | undefined } callback
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onOffsetChange(callback: Callback<double> | undefined): this;

  /**
   * 设置下拉跟手系数。
   *
   * @param { double | undefined } ratio - 下拉跟手系数。数值越大，跟随手势下拉的反应越灵敏。0表示不跟随手势下拉，1表示等比例跟随手势下拉。<br/>没有设置或设置为undefined时，默认
   *     使用动态下拉跟手系数，下拉距离越大，跟手系数越小。<br/>有效值为0-1之间的值，小于0的值会被视为0，大于1的值会被视为1。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default pullDownRatio(ratio: double | undefined): this;

  /**
   * 设置最大下拉距离。
   *
   * @param { double | undefined } distance - 最大下拉距离。最大下拉距离的最小值为0，小于0按0处理。当该值小于刷新的下拉偏移量refreshOffset时，Refresh下拉离手不会触发刷
   *     新。<br/>undefined和null按没有设置此属性处理。<br/>默认值：undefined<br/>单位：vp
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default maxPullDownDistance(distance: double | undefined): this;

  /**
   * 设置最大下拉距离，支持Resource资源类型。
   *
   * 未通过该接口设置时，设置最大下拉距离为undefined。
   *
   * @param { Resource | undefined } distance - 最大下拉距离。<br/>默认值：undefined<br/>单位：vp<br/>取值范围：
   *     [0, +∞)，值小于0时按0处理。当该值小于刷新的下拉偏移量[refreshOffset]{@link default refreshOffset(value: double | undefined)}时，Refresh下拉离手不会触发刷新。<br/>undefined和null按没有设置此属性处理，即没有最大下拉距离限制。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default maxPullDownDistance(distance: Resource | undefined): this;

  /**
   * 动态设置Refresh组件的属性方法。
   *
   * @param { AttributeModifier<RefreshAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<RefreshAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建Refresh容器。
 *
 * @param { RefreshOptions } 刷新组件参数。 - 刷新组件参数。
 * @param { CustomBuilder } [content_] - 容器内容。
 * @returns { RefreshAttribute } 返回Refresh组件的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Refresh(
    value: RefreshOptions, 
    content_?: CustomBuilder,
): RefreshAttribute
