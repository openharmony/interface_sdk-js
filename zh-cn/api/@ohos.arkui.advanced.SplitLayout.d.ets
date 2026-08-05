/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * SplitLayout组件提供了常用的页面布局样式，主要用于展示图片、标题和内容容器的组合布局，适用于需要自适应不同屏幕尺寸的分栏展示场景（如详情页、设置页等）。支持自适应不同屏幕宽度（小于等于600vp、大于600vp且小于等于84
 * 0vp、大于840vp三种布局），解决了在不同尺寸设备上需要展示不同布局样式的需求，提升页面适配性和用户体验。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - SplitLayout不支持设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}。如果设
 * > 置，编译工具链会额外生成__Common__节点，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SplitLayout本身，导致设置的属性或事件不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct SplitLayout {
  /**
   * 容器内组件，用于在布局下方区域承载自定义组件内容，无返回值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @BuilderParam
  container: () => void;

  /**
   * 主图片资源，显示在布局上方区域，支持png、jpg、svg等常见图片格式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @State
  mainImage: ResourceStr;

  /**
   * 主标题内容，无长度限制。显示在布局的标题区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  primaryText: ResourceStr;

  /**
   * 副标题内容，无长度限制。当需要在标题下方显示副标题时传入，不传入时不显示副标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  secondaryText?: ResourceStr;

  /**
   * 辅助文本，无长度限制。显示在副标题下方区域，当需要显示辅助文本时传入，不传入时不显示辅助文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  tertiaryText?: ResourceStr;
}