/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit LocationKit
 */

import type FenceExtensionContext from './@ohos.app.ability.FenceExtensionContext';
import geoLocationManager from './@ohos.geoLocationManager';

/**
 * FenceExtensionAbility为开发者提供的地理围栏相关的能力。
 *
 * @syscap SystemCapability.Location.Location.Geofence
 * @stagemodelonly
 * @since 14 dynamic
 * @since 26.1.0 static
 */
export default class FenceExtensionAbility {
  /**
   * 表示围栏的的上下文环境。
   *
   * @type { FenceExtensionContext }
   * @syscap SystemCapability.Location.Location.Geofence
   * @stagemodelonly
   * @since 14 dynamic
   * @since 26.1.0 static
   */
  context: FenceExtensionContext;

  /**
   * 接收系统通知的地理围栏事件，根据围栏事件类型和数据进行相应处理。
   *
   * @param { geoLocationManager.GeofenceTransition } transition - 地理围栏事件信息；包含地理围栏ID和具体的地理围栏事件。
   * @param { Record<string, string> } additions - 附加信息
   * @syscap SystemCapability.Location.Location.Geofence
   * @stagemodelonly
   * @since 14 dynamic
   * @since 26.1.0 static
   */
  onFenceStatusChange(transition: geoLocationManager.GeofenceTransition, additions: Record<string, string>): void;

  /**
   * 接收FenceExtensionAbility的销毁事件并处理，会在FenceExtensionAbility销毁前回调。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @stagemodelonly
   * @since 14 dynamic
   * @since 26.1.0 static
   */
  onDestroy(): void;
}
