/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * @system.vibrator模块提供控制设备马达振动的能力，开发者可以通过该模块触发设备执行长振动或短振动效果，为用户提供触觉反馈。主要用于闹钟、开关机振动、来电振动等需要触觉提醒的交互场景，帮助应用在关键事件发生时通过振动吸引用
 * 户注意力。
 * 适用于Lite Wearable轻量穿戴设备。对于其他设备类型，自API version 8起该模块不再维护，
 * 与[@ohos.vibrator (振动)]{@link @ohos.vibrator:vibrator}模块相比，本模块功能较为简单，不支持振动效果查询、振动器列表查询、自定义振动文件等高级功能。对于Lite Wearable设备，
 * 本模块持续维护；对于其他设备类型，从API version 8起不再维护，推荐使用[@ohos.vibrator (振动)]{@link @ohos.vibrator:vibrator}模块的
 * [vibrator.startVibration()]{@link @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
 * 接口，该替代接口支持更丰富的振动效果（包括指定时长振动[VibrateTime]{@link @ohos.vibrator:vibrator.VibrateTime}、预置效果振动
 * [VibratePreset]{@link @ohos.vibrator:vibrator.VibratePreset}、自定义文件振动
 * [VibrateFromFile]{@link @ohos.vibrator:vibrator.VibrateFromFile}等），适用于更多设备类型。
 *
 * > **说明：**
 *
 * > - 模块维护策略：
 * >  >   - 对于Lite Wearable设备类型，该模块长期维护，正常使用。 
 * >  >   - 对于支持该模块的其他设备类型，该模块从API version 8开始不再维护，推荐使用新接口[@ohos.vibrator (振动)]{@link @ohos.vibrator:vibrator}。
 *
 * > - 该功能使用需要对应硬件支持，仅支持真机调试。可通过系统设备信息或相关接口查询设备是否支持振动功能。
 *
 * @file
 * @kit SensorServiceKit
 */

/**
 * 定义触发设备振动的配置参数，包括振动模式及接口调用的回调函数。开发者调用
 * [Vibrator.vibrate()](docroot://reference/apis-sensor-service-kit/js-apis-system-vibrate.md#vibratorvibrate)时，通过
 * VibrateOptions指定振动模式（短振动或长振动）以及监听振动触发成功、失败和完成的回调函数。传入VibrateOptions后，设备将按指定的mode执行相应振动模式，并在振动触发成功时回调success函数，失败时回调
 * fail函数，接口调用结束时回调complete函数。
 *
 * > **说明：**
 * >
 * > 从API version 3开始支持，从API version 8开始废弃。建议使用替代类型[VibrateTime]{@link @ohos.vibrator:vibrator.VibrateTime}。
 *
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.vibrator/vibrator.VibrateTime
 */
export interface VibrateOptions {
  /**
   * 振动模式，指定设备振动的持续时间类型。取值范围：'long'（长振动）或'short'（短振动）。默认值：'long'。使用场景：开发者可根据实际需求选择振动模式，例如来电提醒使用'long'以持续提醒用户，按键触觉反馈使用'
   * short'以提供即时反馈。不填写此参数时，默认执行长振动。规格限制：仅适用于Lite Wearable设备。
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator.VibrateTime
   */
  mode?: 'long' | 'short';

  /**
   * 振动触发成功时的回调函数。使用场景：开发者需要监听振动触发成功事件时，通过此回调获取成功通知。使用后效果：振动成功触发后，系统将调用此回调函数，无返回参数。
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  success: () => void;

  /**
   * 振动触发失败时的回调函数。使用场景：开发者需要处理振动触发失败的情况（如权限未授予、设备不支持振动等）时，通过此回调获取错误信息。不填写此参数时，振动触发失败将不会有回调通知。使用后效果：振动触发失败时，系统将调用此回调函数，传入
   * 错误信息data和错误码code。回调函数签名：(data: string, code: number) => void，其中data为错误信息字符串描述，code为错误码数字，标识具体的错误类型。
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  fail?: (data: string, code: number) => void;

  /**
   * 振动接口调用结束时的回调函数。使用场景：开发者需要在振动接口调用完成后（无论成功或失败）执行清理或状态更新操作时，使用此回调。不填写此参数时，接口调用结束将不会有回调通知。使用后效果：无论振动触发成功或失败，系统都会调用此回调函数
   * ，无返回参数。
   *
   * @permission ohos.permission.VIBRATE
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  complete?: () => void;
}

/**
 *
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.vibrator/vibrator
 */
export default class Vibrator {
  /**
   * 触发设备振动，根据指定的振动模式执行短振动或长振动效果。该接口通过callback方式返回调用结果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [vibrator.startVibration()]{@link @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateOptions } options - 振动配置参数，用于指定振动模式及回调函数。不传时使用默认配置（mode默认为'long'），此时仅触发success和complete回调（无fail回调场景下）。
   * @syscap SystemCapability.Sensors.MiscDevice.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.vibrator:vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)
   */
  static vibrate(options?: VibrateOptions): void;
}