/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Some notification types and content
 * @kit NotificationKit
 */

import image from '../@ohos.multimedia.image';
import { Resource } from '../global/resource';
import type notificationManager from '../@ohos.notificationManager';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * 描述图标的类型。
 *
 * @syscap SystemCapability.Notification.Notification
 * @unionmember { Resource } 表示值类型为图片资源。
 * @unionmember { image.PixelMap } 表示值类型为图片。
 * @systemapi
 * @since 18 dynamic
 * @since 23 static
 */
type IconType = Resource | image.PixelMap;

/**
 * 描述普通文本通知。
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationBasicContent {
  /**
   * 通知标题（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  title: string;

  /**
   * 通知内容（不可为空字符串，大小不超过3072字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  text: string;

  /**
   * 通知附加内容，默认为空，是对通知内容的补充（大小不超过3072字节，超出部分会被截断）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  additionalText?: string;

  /**
   * 通知在锁屏界面显示的图片，默认为空。当前仅支持实况窗类型通知。图标像素的总字节数不超过192KB（图标像素的总字节数通过
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}获取），建议图标像素长宽为128*128。实际显示效果依赖
   * 于设备能力和通知中心UI样式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  lockscreenPicture?: image.PixelMap;

  /**
   * 通知结构化字段。当前仅支持服务提醒类短信在通知中心结构化展示。默认为空。（key/value大小不超过512字节，超出部分会被截断，最多支持3对结构化数据，超出部分会被忽略。）
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  structuredText?: Map<string, string>;
}

/**
 * 描述长文本通知。继承自[NotificationBasicContent]{@link NotificationBasicContent}。
 * 
 * > **说明：**
 * >
 * > 实际显示效果依赖于设备能力和通知中心UI样式。
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
  /**
   * 通知的长文本（不可为空字符串，大小不超过3072字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longText: string;

  /**
   * 通知概要内容，是对通知内容的总结（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * 通知展开时的标题（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  expandedTitle: string;
}

/**
 * 描述普通实况通知的状态。
 *
 * @syscap SystemCapability.Security.AccessToken
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export enum LiveViewStatus {
  /**
   * 创建
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_CREATE = 0,
  /**
   * 增量更新
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_INCREMENTAL_UPDATE = 1,
  /**
   * 结束
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_END = 2,
  /**
   * 全量更新
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_FULL_UPDATE = 3,
  /**
   * 条件触发创建
   * 
   * 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  LIVE_VIEW_PENDING_CREATE = 4,
  /**
   * 条件触发结束
   * 
   * 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  LIVE_VIEW_PENDING_END = 6
}

/**
 * 描述实况通知的类型。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 18 dynamic
 * @since 23 static
 */
export enum LiveViewTypes {
  /**
   * 实时活动类（进度类）系统实况
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  LIVE_VIEW_ACTIVITY = 0,
  /**
   * 即时任务类系统实况
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  LIVE_VIEW_INSTANT = 1,
  /**
   * 长时任务类系统实况
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  LIVE_VIEW_LONG_TERM = 2
}

/**
 * 描述普通实况通知。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationLiveViewContent extends NotificationBasicContent {
  /**
   * 通知状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  status: LiveViewStatus;

  /**
   * 通知版本号（如果数据库存储版本号为0xffffffff，则本次更新和结束不校验版本号大小，否则需要校验本次版本号>数据库存储版本号）。不填默认为0xffffffff。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  version?: int;

  /**
   * 实况通知附加内容。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  extraInfo?: Record<string, Object>;

  /**
   * 实况通知附加内容。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * 实况通知附加内容中的图片信息。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  pictureInfo?: Record<string, Array<image.PixelMap>>;

  /**
   * 实况窗是否只在本地更新。默认为false。
   * 
   * - true：是。
   * - false：否。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  isLocalUpdateOnly?: boolean;

  /**
   * 点击辅助区的跳转动作。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extensionWantAgent?: WantAgent;
}

/**
 * 描述多行文本通知。继承自[NotificationBasicContent]{@link NotificationBasicContent}。
 * 
 * > **说明：**
 * >
 * > - 当该类型通知与其他通知形成组通知时，该通知显示默认与[普通文本]{@link NotificationBasicContent}相同。展开组通知后，标题显示为展开时的标题`longTitle`，多行文本内容`lines`多行显
 * > 示。
 * 
 * 当该类型通知单独呈现时，该通知标题显示为展开时的标题`longTitle`，多行文本内容`lines`多行显示。
 * 
 * > - 实际显示效果依赖于设备能力和通知中心UI样式。
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
  /**
   * 通知概要内容，是对通知内容的总结（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * 通知展开时的标题（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longTitle: string;

  /**
   * 通知的多行文本（最多支持三行，每行大小不超过1024字节，超出部分会被截断）。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lines: Array<string>;

  /**
   * 点击多行文本中某一行文本消息触发的wantAgent。不同行的文本分别对应于不同的wantAgent。该字段配置的行数不能大于
   * [lines]{@link ./notification/notificationContent:NotificationMultiLineContent}字段配置的行数。默认为空。
   * 
   * 此接口为系统接口。
   * 
   * ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  lineWantAgents?: Array<WantAgent>;
}

/**
 * 描述附有图片的通知。继承自[NotificationBasicContent]{@link NotificationBasicContent}。
 * 
 * > **说明：**
 * >
 * > 实际显示效果依赖于设备能力和通知中心UI样式。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationPictureContent extends NotificationBasicContent {
  /**
   * 通知概要内容，是对通知内容的总结（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * 通知展开时的标题（不可为空字符串，大小不超过1024字节，超出部分会被截断）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  expandedTitle: string;

  /**
   * 通知的图片内容（图像像素的总字节数不能超过2MB）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  picture: image.PixelMap;
}

/**
 * 描述系统实况窗通知内容。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。继承自
 * [NotificationBasicContent]{@link NotificationBasicContent}。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationSystemLiveViewContent extends NotificationBasicContent {
  /**
   * 类型标识符，标记调用方业务类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  typeCode: int;

  /**
   * 实况通知的胶囊。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  capsule?: NotificationCapsule;

  /**
   * 实况通知的按钮。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  button?: NotificationButton;

  /**
   * 实况窗按钮（最多支持3个）。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  cardButtons?: Array<NotificationIconButton>;

  /**
   * 实况通知的时间。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  time?: NotificationTime;

  /**
   * 实况内容的进度。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  progress?: NotificationProgress;

  /**
   * 实况窗类型。默认值为LIVE_VIEW_ACTIVITY。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  liveViewType?: LiveViewTypes;
}

/**
 * 描述通知胶囊。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationCapsule {
  /**
   * 胶囊标题。大小不超过200字节，超出部分会被截断。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * 胶囊图片。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  icon?: image.PixelMap;

  /**
   * 背景颜色。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  backgroundColor?: string;

  /**
   * 胶囊的拓展文本。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  content?: string;

  /**
   * 即时任务类实况胶囊展示时长（单位：秒）。默认值为0。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  time?: int;

  /**
   * 即时任务类实况胶囊的按钮（最多支持2个）。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  capsuleButtons?: Array<NotificationIconButton>;
}

/**
 * 描述系统通知按钮。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 18 dynamic
 * @since 23 static
 */
export interface NotificationIconButton {

  /**
   * 按钮标识，用于区分同一通知的多个不同按钮。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 按钮的背景图。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  iconResource: IconType;

  /**
   * 按钮展示的信息。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  text?: string;

  /**
   * 点击按钮时，是否隐藏通知中心。默认为false。
   * 
   * - true：是。
   * - false：否。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  hidePanel?: boolean;
}

/**
 * 描述通知按钮。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationButton {
  /**
   * 按钮名称（最多支持3个）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  names?: Array<string>;

  /**
   * 按钮图片（最多支持3个）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  icons?: Array<image.PixelMap>;

  /**
   * 按钮资源（最多支持3个）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  iconsResource?: Array<Resource>;
}

/**
 * 描述通知计时信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationTime {
  /**
   * 计时起始时间。单位：ms。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  initialTime?: int;

  /**
   * 是否倒计时。默认为false。
   * 
   * - true：是。
   * - false：否。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isCountDown?: boolean;

  /**
   * 是否暂停。默认为false。
   * 
   * - true：是。
   * - false：否。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isPaused?: boolean;

  /**
   * 时间是否展示在title中。默认为false。
   * 
   * - true：是。
   * - false：否。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isInTitle?: boolean;
}

/**
 * 描述通知进度。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationProgress {
  /**
   * 进度最大值。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  maxValue?: int;

  /**
   * 进度当前值。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  currentValue?: int;

  /**
   * 是否按百分比展示。默认为false。
   * 
   * - true：是。
   * - false：否。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isPercentage?: boolean;
}

/**
 * 通知内容。
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationContent {
  /**
   * 通知内容类型。
   * 
   * 从API version 7开始支持，从API version 11开始废弃，建议使用notificationContentType替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationContent#notificationContentType
   */
  contentType?: notification.ContentType;

  /**
   * 通知内容类型。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationContentType?: notificationManager.ContentType;

  /**
   * 基本类型通知内容。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  normal?: NotificationBasicContent;

  /**
   * 长文本类型通知内容。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longText?: NotificationLongTextContent;

  /**
   * 多行类型通知内容。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  multiLine?: NotificationMultiLineContent;

  /**
   * 图片类型通知内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  picture?: NotificationPictureContent;

  /**
   * 系统实况窗类型通知内容。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  systemLiveView?: NotificationSystemLiveViewContent;

  /**
   * 普通实况窗类型通知内容。
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  liveView?: NotificationLiveViewContent;
}
