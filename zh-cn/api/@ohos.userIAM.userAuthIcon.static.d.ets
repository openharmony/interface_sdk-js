'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 嵌入式用户身份认证控件
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';
import { ResourceColor, Dimension, Component } from '@ohos.arkui.component';

/**
 * **userAuthIcon**模块是OpenHarmony用户身份认证体系（UserIAM）的UI组件模块，提供了一个开箱即用的身份认证图标组件（UserAuthIcon）。该组件用于在应用UI中展示人脸认证或指纹认证的图标，支持自
 * 定义图标颜色和尺寸，并可在点击图标时直接启动系统身份认证弹窗组件。
 *
 * 该模块主要用于以下场景：
 *
 * - 在应用界面中快速集成人脸或指纹认证入口。
 * - 需要统一风格的生物特征认证图标展示。
 * - 点击图标即可触发系统级身份认证流程。
 *
 * @struct { UserAuthIcon }
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct UserAuthIcon {
  /**
   * 用户认证相关参数。包含挑战值(challenge)、认证类型列表(authType)、认证可信等级(authTrustLevel)等配置。挑战值用于防重放攻击，认证类型指定可用的认证方式（如人脸、指纹、PIN），认证可信等级决
   * 定认证的安全强度。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  authParam: userAuth.AuthParam;
  /**
   * 用户认证界面配置相关参数。包含认证界面标题(title)、导航按钮文本(navigationButtonText)等配置，用于自定义认证弹窗的显示内容。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  widgetParam: userAuth.WidgetParam;
  /**
   * 图标高度。设置认证图标的高度，宽高比为1:1（即高度和宽度相等）。默认值为64fp，不支持百分比字符串。建议根据界面布局选择合适的大小。
   *
   * @default 64fp
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  iconHeight?: Dimension;
  /**
   * 图标颜色。设置认证图标的颜色，支持颜色值、资源引用等多种格式。默认使用系统激活色，开发者可根据应用主题自定义颜色，如使用Color.Blue或$r('app.color.primary')。
   *
   * @default $r('sys.color.ohos_id_color_activated')
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  iconColor?: ResourceColor;
  /**
   * 认证结果回调。用户完成认证后触发此回调，回调参数包含认证结果码(result)、认证令牌(token)、认证类型(authType)等信息。应用需在此回调中处理认证结果，如认证通过时获取token用于后续安全操作，认证失败时提
   * 示用户重新尝试。
   *
   * **注意：** 应用需申请`ohos.permission.ACCESS_BIOMETRIC`权限，否则应用将仅展示图标，无法正常拉起身份认证控件。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAuthResult: userAuth.AuthCallbackOnResultFunc;
  /**
   * 图标点击回调。用户点击认证图标时触发此回调，可在回调中执行点击前的准备工作或记录用户行为日志。如果未设置此回调，点击图标后直接触发认证流程。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  onIconClick?: ClickCallbackFunc;

  /**
   * 构造函数。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

/**
 * 用户点击图标后触发的回调。
 *
 * @typedef { function } ClickCallbackFunc
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @stagemodelonly
 * @since 23 staticonly
 */
type ClickCallbackFunc = () => void;