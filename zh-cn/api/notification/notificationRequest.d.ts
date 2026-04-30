/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file Information carried when a notification is sent
 * @kit NotificationKit
 */

import image from '../@ohos.multimedia.image';
import type notificationManager from '../@ohos.notificationManager';
import type notificationSubscribe from '../@ohos.notificationSubscribe';
import { NotificationContent } from './notificationContent';
import { NotificationActionButton } from './notificationActionButton';
import { NotificationTemplate } from './notificationTemplate';
import { NotificationFlags } from './notificationFlags';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
import type { BundleOption } from './NotificationCommonDef';
/*** endif */
/*** if arkts static */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { BundleOption } from './NotificationCommonDef';
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * 描述[NotificationRequest]{@link NotificationRequest}中wantAgent的部分信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface NotificationParameters {
  /**
   * 应用在创建wantAgent时，传入的want的action字段，具体含义请参考[action]{@link @ohos.app.ability.Want:Want}。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  wantAction?:string;

  /**
   * 应用在创建wantAgent时，传入的want的uri字段，具体含义请参考[uri]{@link @ohos.app.ability.Want:Want}。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  wantUri?:string;

  /**
   * 应用在创建wantAgent时，传入的want的parameters字段，具体含义请参考[parameters]{@link @ohos.app.ability.Want:Want}。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic
   */
  wantParameters?:Record<string, Object>;

  /**
   * 应用在创建wantAgent时，传入的want的parameters字段，具体含义请参考[parameters]{@link @ohos.app.ability.Want:Want}。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 static
   */
  wantParameters?:Record<string, RecordData>;
}

/**
 * 表示地理围栏的监控事件类型的枚举。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum MonitorEvent {
  /**
   * 进入地理围栏。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  MONITOR_TYPE_ENTRY = 1,

  /**
   * 退出地理围栏。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  MONITOR_TYPE_LEAVE = 2
}

/**
 * 表示地理围栏坐标系类型的枚举。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum CoordinateSystemType {
  /**
   * WGS84坐标系。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  COORDINATE_TYPE_WGS84 = 1,

  /**
   * GCJ02坐标系。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  COORDINATE_TYPE_GCJ02 = 2
}

/**
 * 表示触发条件的事件类型的枚举。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum TriggerType {
  /**
   * 地理围栏触发类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  TRIGGER_TYPE_GEOFENCE = 1
}

/**
 * 地理围栏的配置信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface Geofence {
  /**
   * 地理围栏中心点经度，取值范围：[-180, 180]。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  longitude:double;

  /**
   * 地理围栏中心点纬度，取值范围：[-90, 90]。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  latitude:double;

  /**
   * 围栏半径，单位米，取值范围：[200, 2000]。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  radius:double;

  /**
   * 围栏延迟时间，单位秒，进入围栏后触发围栏的延迟时间，取值范围：[0, 300]。默认值为0。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  delayTime?:int;

  /**
   * 中心点坐标系类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  coordinateSystemType:CoordinateSystemType;

  /**
   * 围栏触发条件类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  monitorEvent:MonitorEvent;
}

/**
 * 触发条件的具体信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface Trigger {
  /**
   * 条件类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  type:TriggerType;

  /**
   * 条件具体描述。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  condition:Geofence;
  
  /**
   * 条件触发实况的展示时间，单位：秒，取值范围：[15, 1800]，默认值为900。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  displayTime?:int;
}

/**
 * 描述通知的请求。
 * 
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationRequest {
  /**
   * 通知展示内容。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  content: NotificationContent;

  /**
   * 条件对象。默认为空。 
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  trigger?:Trigger;

  /**
   * 通知ID，默认值为0。若已存在相同ID的通知，则更新该通知；若不存在相同ID的通知，则创建新的通知。
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 7 - 11]
   * @type { ?int } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  id?: int;

  /**
   * 通知优先级类型，默认值为OTHER。设置该参数可使通知置顶，并且在通知中心以突出方式显示。<!--RP2--><!--RP2End-->实际显示效果依赖于设备能力和通知中心UI样式。
   * 
   * 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  priorityNotificationType?: notificationManager.PriorityNotificationType;

  /**
   * 应用发送通知携带的唯一标识字段，用于通知去重。如果同一应用通过本地和云端等不同途径发布携带相同appMessageId的通知，设备只展示一条消息，之后收到的重复通知会被静默去重，不展示、不提醒。去重标识仅在通知发布的24小时内有效
   * ，超过24小时或者设备重启失效。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  appMessageId?: string;

  /**
   * 通知渠道类型，默认值为OTHER_TYPES。
   * 
   * 从API version 7开始支持，从API version 11开始废弃，建议使用notificationSlotType替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationRequest#notificationSlotType
   */
  slotType?: notification.SlotType;

  /**
   * 通知渠道类型，默认值为OTHER_TYPES。不同渠道类型的通知提醒方式不同。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationSlotType?: notificationManager.SlotType;

  /**
   * 预留能力，暂未支持。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isOngoing?: boolean;

  /**
   * 预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isUnremovable?: boolean;

  /**
   * 是否仅更新通知，默认值为false。
   * 
   * - true：若已存在相同ID的通知，则更新该通知；若不存在相同ID的通知，则更新失败，并且不创建新的通知。
   * - false：若已存在相同ID的通知，则更新该通知；若不存在相同ID的通知，则创建新的通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 18 dynamic
   * @since 23 static
   */
  updateOnly?: boolean;

  /**
   * 通知发送时间。系统自动生成，无需开发者配置。
   * 
   * 数据格式：时间戳。
   * 
   * 单位：ms。
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 7 - 11]
   * @type { ?long } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  deliveryTime?: long;

  /**
   * 点击通知携带的wantAgent或actionButtons时，该通知是否自动清除。当通知携带wantAgent或actionButtons时该字段生效。默认值为true。
   * 
   * - true：点击通知或按钮后，自动删除当前通知。
   * - false：点击通知或按钮后，保留当前通知。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  tapDismissed?: boolean;

  /**
   * 通知定时清除时间。设置该参数可使通知在指定时间后自动清除。默认值为0。
   * 
   * 数据格式：时间戳。
   * 
   * 单位：ms。
   * 
   * 例如，希望某通知存留3秒（3000ms）后对其进行清除，则对应的清除时间为：new Date().getTime() + 3000。
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 7 - 11]
   * @type { ?long } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  autoDeletedTime?: long;

  /**
   * 封装了应用的行为意图，点击通知时触发该行为，默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  wantAgent?: WantAgent;

  /**
   * 扩展参数。为应用提供定制服务。默认为空。
   * 
   * 以下Key由系统赋值，开发者手动修改也不会生效，系统在数据传递时会自动修改为实际值。
   * 
   * - 'ohos.notificationManager.wantUri'：用户点击通知时传递给应用的[Want]{@link @ohos.app.ability.Want:Want} 中的uri字段，使用
   * [getActiveNotifications]{@link @ohos.notification:notification.getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>)}
   * 接口获取该信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * 扩展参数。为应用提供定制服务。默认为空。
   * 
   * 以下Key由系统赋值，开发者手动修改也不会生效，系统在数据传递时会自动修改为实际值。
   * 
   * - 'ohos.notificationManager.wantUri'：用户点击通知时传递给应用的[Want]{@link @ohos.app.ability.Want:Want} 中的uri字段，使用
   * [getActiveNotifications]{@link @ohos.notification:notification.getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>)}
   * 接口获取该信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * 系统应用发布通知时的自定义扩展参数。默认为空。
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   */
  extendInfo?: Record<string, Object>;

  /**
   * 系统应用发布通知时的自定义扩展参数。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extendInfo?: Record<string, RecordData>;

  /**
   * 通知背景颜色。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  color?: long;

  /**
   * 通知背景颜色是否使能。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  colorEnabled?: boolean;

  /**
   * 发布或更新该通知时，是否只进行一次通知提醒，默认为false。
   * 
   * - true：仅首次发布通知时进行提醒，后续更新该通知时，提醒方式变更为[LEVEL_LOW]{@link @ohos.notificationManager:notificationManager.SlotLevel}。
   * - false：每次均按照配置的通知提醒方式进行提醒。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isAlertOnce?: boolean;

  /**
   * 是否显示已用时间。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isStopwatch?: boolean;

  /**
   * 是否显示倒计时时间。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isCountDown?: boolean;

  /**
   * 是否显示状态栏图标。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isFloatingIcon?: boolean;

  /**
   * 通知标签，默认为空。
   * 
   * label字段的功能类似于id，可以单独使用，也可与id结合共同作为通知的标识。优先推荐使用id。
   * 
   * 如果发布通知时label不为空，那么在更新或删除该通知时，也需要指定相应的label。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  label?: string;

  /**
   * 通知角标类型。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeIconStyle?: int;

  /**
   * 是否显示分发时间。预留能力，暂未支持。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  showDeliveryTime?: boolean;

  /**
   * 通知按钮，默认为空。一条通知中最多包含两个按钮。从API version 16开始，`wearable`设备一条通知最多包含三个按钮。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  actionButtons?: Array<NotificationActionButton>;

  /**
   * 通知小图标，默认为空。图标像素的总字节数不超过192KB（图标像素的总字节数通过
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}获取），建议图标像素长宽为128*128。实际显示效果依赖
   * 于设备能力和通知中心UI样式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  smallIcon?: image.PixelMap;

  /**
   * 通知大图标，默认为空。图标像素的总字节数不超过192KB（图标像素的总字节数通过
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}获取），建议图标像素长宽为128*128。实际显示效果依赖
   * 于设备能力和通知中心UI样式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  largeIcon?: image.PixelMap;

  /**
   * 通知重叠图标，默认为空。图像像素的总字节数不超过192KB（图标像素的总字节数通过
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}获取）。
   * 
   * 此接口只在[notificationSlotType]{@link NotificationRequest}类型设置为SOCIAL_COMMUNICATION时生效。建议图标像素长宽为128*128。实际显示效果依赖于设备能力和通
   * 知中心UI样式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */  
  overlayIcon?: image.PixelMap;

  /**
   * 通知所属组。当不同通知的groupName相同时，这些通知将成组展示。默认为空。
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  groupName?: string;

  /**
   * 创建通知的应用名称。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorBundleName?: string;

  /**
   * 创建通知的应用UID。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorUid?: int;

  /**
   * 创建通知的PID。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorPid?: int;

  /**
   * 创建通知的用户ID。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  readonly creatorUserId?: int;

  /**
   * 创建者实例键值。
   * 
   * 从API version 12开始支持，从API version 15开始废弃，建议使用appInstanceKey替代。
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamiconly
   * @deprecated since 15
   * @useinstead NotificationRequest#appInstanceKey
   */
  readonly creatorInstanceKey?: number;

  /**
   * 应用通知自定义铃声资源路径，默认为空。支持两种音频资源来源：
   * 
   * - 资源文件：应用预置的音频文件，资源文件必须放在放在resources/rawfile目录下，使用时直接传入文件名。
   * - 沙箱文件：网络下载或者用户生成的音频文件，必须放在[沙箱文件目录](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)EL1区域的files目录或
   * 者其子目录下，传入格式为uri::{fileUri}，其中fileUri是通过[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}获取的路径。例如，应用
   * 将下载的音频资源demo.mp3传入沙箱文件目录/data/storage/el1/base/files/，通过getUriFromPath获取的路径为file://{bundleName}/data/storage/el1/
   * base/files/demo.mp3，使用该路径发布通知即可播放应用下载的音频资源。
   * 
   * 支持m4a、aac、mp3、ogg、wav、flac、amr等格式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * 通知分类。
   * 
   * 此接口为系统接口。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  classification?: string;

  /**
   * 通知唯一标识。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly hashCode?: string;

  /**
   * 通知是否能被移除（点击通知下方删除按钮无法删除，左滑不出现删除按钮）。默认为true。
   * 
   * - true：是。
   * - false：否。
   * 
   * 此接口为系统接口。
   * 
   * ohos.permission.SET_UNREMOVABLE_NOTIFICATION
   *
   * @permission ohos.permission.SET_UNREMOVABLE_NOTIFICATION [since 11]
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  
  isRemoveAllowed?: boolean;

  /**
   * 通知源。
   * 
   * 此接口为系统接口。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly source?: int;

  /**
   * 通知模板，默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  template?: NotificationTemplate;

  /**
   * 分布式通知的选项。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  distributedOption?: DistributedOptions;

  /**
   * 通知源的deviceId。
   * 
   * 此接口为系统接口。预留能力，暂未支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly deviceId?: string;

  /**
   * 设置或获取NotificationFlags，默认为空。从API version 23开始成为可写参数，设置该参数可削减通知的提醒方式，当通知渠道类型为
   * [LIVE_VIEW]{@link @ohos.notificationManager:notificationManager.SlotType}时，该参数设置不生效。
   *
   * @readonly [since 8 - 22]
   * @syscap SystemCapability.Notification.Notification
   * @FaAndStageModel
   * @since 8 dynamic
   * @since 23 static
   */
  notificationFlags?: NotificationFlags;

  /**
   * 封装了应用的行为意图，移除通知时触发该行为，默认为空。
   * 
   * 当前不支持跳转UIAbility，只支持发布公共事件（即[WantAgentInfo]{@link ./wantAgent/wantAgentInfo:WantAgentInfo}的actionType字段取值为4）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  removalWantAgent?: WantAgent;

  /**
   * 应用程序图标上显示的通知数，该数量累计展示，默认值为0。
   * 
   * 当`badgeNumber`取值小于或等于0时，将忽略本次角标设定。
   * 
   * 当角标累加设定个数取值大于99时，通知角标将显示99+。
   * 
   * 例如，应用发布3条通知，`badgeNumber`依次设置为2、0、3，应用将依次展示为2、2、5。
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 9 - 11]
   * @type { ?long } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  badgeNumber?: long;

  /**
   * 被代理的包信息。默认为空。
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  representativeBundle?: BundleOption;

  /**
   * 创建通知的代理包信息。默认为空。 
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly agentBundle?: BundleOption;

  /**
   * 消息智能聚合信息字段。默认为空。 
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  unifiedGroupInfo?: UnifiedGroupInfo;

  /**
   * 通知提醒方式管控。默认值为0。
   * 
   * 可以通过此接口减少当前通知的提醒方式。与
   * [NotificationControlFlagStatus]{@link @ohos.notificationManager:notificationManager.NotificationControlFlagStatus}的
   * 枚举进行按位或运算得到该参数。
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  notificationControlFlags?: long;

  /**
   * 应用实例键值。默认为空。 
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  readonly appInstanceKey?: string;

  /**
   * 通知是否强制进行全场景跨设备协同显示，默认为false。
   * 
   * **说明**:
   * 
   * 仅当应用在跨设备协同管控名单中且notDistributed为false时，该字段才会生效。通过读取notification_config.json文件（文件配置路径见：
   * [notification_config_parse.h](https://gitcode.com/openharmony/notification_distributed_notification_service/blob/master/services/ans/include/notification_config_parse.h)
   * 中的NOTIFICATION_CONFIG_FILE属性）中的collaborationFilter字段，查看是否包含应用的UID或包名。如果包含，说明是在应用跨设备协同管控名单中。
   * 
   * - 设置为true时：通知将在所有协同设备上显示。
   * 
   * - 设置为false时：通知将按照协同管控名单显示。
   * 
   * 此接口为系统接口。
   *
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  forceDistributed?: boolean;

  /**
   * 通知是否不进行全场景跨设备协同显示，默认为false。
   * 
   * **说明**:
   * 
   * 该字段与forceDistributed字段互斥，当两者同时为true时，仅notDistributed字段生效。
   * 
   * - 设置为true时：通知仅在本设备上显示。
   * 
   * - 设置为false时：通知将在所有协同设备上显示。
   * 
   * 此接口为系统接口。
   *
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  notDistributed?: boolean;

  /**
   * 组通知定制信息。默认为空。
   * 
   * 此接口仅可在Stage模型下使用。
   * 
   * 26.0.0
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  groupInfo?: GroupInfo;
}

/**
 * 描述跨设备协同选项。预留能力，暂未支持。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface DistributedOptions {
  /**
   * 是否支持跨设备协同通知。默认为true。
   * 
   * - true：支持跨设备协同通知。
   * - false：不支持跨设备协同通知。
   *
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  isDistributed?: boolean;

  /**
   * 可以同步通知到的设备列表。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  supportDisplayDevices?: Array<string>;

  /**
   * 可以打开通知的设备列表。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  supportOperateDevices?: Array<string>;

  /**
   * 通知的提醒方式。
   * 
   * 此接口为系统接口。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly remindType?: int;
}

/**
 * 描述查询普通实况窗时的筛选条件。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationFilter {
  /**
   * 实况通知的包信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  bundle: BundleOption;

  /**
   * 通知信息，包含通知ID和通知标签。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  notificationKey: notificationSubscribe.NotificationKey;

  /**
   * 筛选附加信息的键值列表。不填表示查询所有的附加信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  extraInfoKeys?: Array<string>;
}

/**
 * 描述通知的鉴权信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationCheckRequest {
  /**
   * 通知类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  contentType: notificationManager.ContentType;

  /**
   * 渠道类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  slotType: notificationManager.SlotType;

  /**
   * 实况通知的附加信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  extraInfoKeys: Array<string>;
}

/**
 * 描述通知智能聚合信息字段。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface UnifiedGroupInfo {
  /**
   * 聚合组ID。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  key?: string;

  /**
   * 聚合组标题。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * 聚合组摘要正文。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  content?: string;

  /**
   * 聚合场景名称。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  sceneName?: string;

  /**
   * 其他聚合信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * 其他聚合信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;
}

/**
 * 组通知信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface GroupInfo {
  /**
   * 是否使用该通知[NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}中的smallIcon字段作为通知成组后
   * 展示的组图标。当该通知是通知组中最新的一条通知，且开发者传入smallIcon时，是否使用smallIcon作为组图标。默认值为false。
   * 
   * - true：使用smallIcon作为组通知的图标。
   * - false：不使用smallIcon作为组通知的图标。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  isGroupIcon?: boolean;
 	 
  /**
   * 通知成组后展示的组标题。当该通知是通知组中最新的一条通知时，该字段生效。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  groupTitle?: string;
}
