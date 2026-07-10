/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file Describes a NotificationTemplate instance
 * @kit NotificationKit
 */

/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * 通知模板。用于指定通知所使用的模板类型。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 提供预定义模板支持。允许应用开发者使用系统预定义的通知模板，只需提供模板名称和相应的数据，系统会自动渲染出符合规范的通知样式。
 * > 使用场景：当前仅支持上传下载场景。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationTemplate {
  /**
   * 模板名称。当前仅支持表示下载进度的进度条通知模板，取值为'downloadTemplate'。
   * 字符串长度不超过202字节，超出部分会被截断。不可为空字符串。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 模板数据。
   * 
   * - title: 表示下载标题。必填字段，值为字符串类型。
   * - fileName: 表示下载文件名。必填字段，值为字符串类型。
   * - progressValue: 表示下载进度，值为数值类型。建议取值范围为0~100，
   *     表示百分比进度。当progressValue取值小于或等于0时，进度为0；
   *     当其取值大于或等于100时，进度环消失，代表下载完成。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   */
  data: Record<string, Object>;

  /**
   * 模板数据。
   * 
   * - title: 表示下载标题。必填字段，值为字符串类型。
   * - fileName: 表示下载文件名。必填字段，值为字符串类型。
   * - progressValue: 表示下载进度，值为数值类型。建议取值范围为0~100，
   *     表示百分比进度。当progressValue取值小于或等于0时，进度为0；
   *     当其取值大于或等于100时，进度环消失，代表下载完成。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  data: Record<string, RecordData>;
}
