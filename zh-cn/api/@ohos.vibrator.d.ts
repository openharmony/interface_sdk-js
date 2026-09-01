/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @kit SensorServiceKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * vibrator模块是设备马达振动的控制模块，属于SensorServiceKit。该模块提供精确控制设备马达振动的能力，支持按指定时长、预置效果、自定义配置文件、自定义振动模式等多种方式触发振动，并支持按指定模式或全部模式停止振动。
 * 此外，模块还提供振动效果支持查询、马达设备信息查询、马达上下线状态监听等能力。
 * vibrator模块主要用于增强用户交互体验，通过触觉感知反馈为应用提供直观的物理反馈能力。典型使用场景包括：
 *
 * - 交互反馈：点击、长按、滑动、拖拽等触控操作的短振反馈，推荐使用VibratePreset预置效果以保持与系统整体振感风格一致。
 * - 通知提醒：消息通知、来电响铃、闹钟等场景的振动提醒。
 * - 游戏与多媒体：游戏操作反馈、表情包拟真效果等复杂场景的精细振动，推荐使用VibrateFromFile或VibrateFromPattern自定义振动效果。
 * - 多设备协同：在分布式场景下，通过指定设备ID和马达ID控制远端设备振动。
 * vibrator模块的核心能力围绕"启动振动"和"停止振动"两条主线展开，整体使用流程如下：
 * 启动振动流程：
 *
 * 1. 若使用预置振动效果（VibratePreset），建议先调用[vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}
 * 或[vibrator.isSupportEffectSync]{@link vibrator.isSupportEffectSync}查询当前设备是否支持该效果；若使用自定义振动配置文件（VibrateFromFile），
 * 建议先确认设备支持自定义振动模式（可通过[vibrator.isHdHapticSupported]{@link vibrator.isHdHapticSupported}查询是否支持高清振动）；
 * 若使用自定义振动模式（VibrateFromPattern），需先通过[VibratorPatternBuilder]{@link vibrator.VibratorPatternBuilder}构建振动序列。
 * 2. 调用[vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
 * 启动振动，需同时指定振动效果（VibrateEffect）和振动属性（VibrateAttribute）。振动属性中的usage参数决定了振动的场景类型，不同场景类型受系统振动开关管控规则不同。
 * 停止振动流程：
 *
 * - 停止指定时长振动或预置效果振动：调用
 * [vibrator.stopVibration]{@link vibrator.stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>)}（API
 *  version 9），传入对应的VibratorStopMode。
 * - 停止自定义振动（VibrateFromFile或VibrateFromPattern）：调用[vibrator.stopVibration]{@link vibrator.stopVibration()}（API version
 * 10+，无参数版本）停止所有模式振动。
 * - 停止所有模式振动：调用[vibrator.stopVibration]{@link vibrator.stopVibration()}（无参数版本）或
 * [vibrator.stopVibrationSync]{@link vibrator.stopVibrationSync}（同步版本）。
 * - 停止指定设备的马达振动：调用[vibrator.stopVibration]{@link vibrator.stopVibration(param?: VibratorInfoParam)}（API version 19+，传入
 * VibratorInfoParam）。
 * 多马达设备场景：
 * 从API version 19开始，支持多设备多马达场景。可通过[vibrator.getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}查询马达信息，通过
 * [vibrator.on]{@link vibrator.on_vibratorStateChange}监听马达上下线事件，以便动态选择合适的马达触发振动。
 * 振动效果类型对比：
 * | 振动效果类型 | 适用场景 | 个性化程度 | 推荐优先级 |
 * | --- | --- | --- | --- |
 * | VibratePreset | 交互反馈类的短振场景（点击、长按、滑动、拖拽等） | 低，使用系统预置效果 | 推荐，与系统整体振感反馈体验风格一致 |
 * | VibrateFromFile | 复杂场景效果（表情包拟真效果、游戏场景/操作反馈） | 高，支持自定义振动配置文件 | 适用于需要精细振动的场景 |
 * | VibrateFromPattern | 与VibrateFromFile一致，但更灵活 | 高，支持振动事件数组组合 | 适用于需要动态组合振动事件的场景 |
 * | VibrateTime | 基础时长振动，仅控制启停 | 低，无法调节强度和频率 | 仅满足基础功能需求 |
 *
 * @syscap SystemCapability.Sensors.MiscDevice
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace vibrator {
  /**
   * 按照指定持续时间触发马达振动。
   *
   * > **说明：**
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { number } duration - 马达振动时长。单位：ms（毫秒）。取值范围：(0,1800000]区间的所有整数。由于实际产品厂商驱动对器件保护设计规格不同，不同设备实际最大振动时长会有差异。建议值：单次触发长振动一般建议
   *     不超过10000（10秒），以最大化用户体验。
   * @param { AsyncCallback<void> } callback - 回调函数，当马达振动成功，err为undefined，否则为错误对象。使用场景：不填写时仅触发振动不获取回调结果。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)
   */
  function vibrate(duration: number, callback?: AsyncCallback<void>): void;

  /**
   * 按照指定持续时间触发马达振动。
   *
   * > **说明：**
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)}替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { number } duration - 马达振动时长。单位：ms（毫秒）。取值范围：(0,1800000]区间的所有整数。由于实际产品厂商驱动对器件保护设计规格不同，不同设备实际最大振动时长会有差异。建议值：单次触发长振动一般建议
   *     不超过10000（10秒），以最大化用户体验。
   * @returns { Promise<void> } Promise对象。调用成功时Promise resolve，表示振动成功启动；调用失败时Promise reject，返回错误对象包含错误码和错误信息。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)
   */
  function vibrate(duration: number): Promise<void>;

  /**
   * 按照预置振动效果触发马达振动。
   *
   * > **说明：**
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)}替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { EffectId } effectId - 预置的振动效果ID。字符串最大长度64，超出部分截取前64个字符。建议先通过
   *     [vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}或
   *     [vibrator.isSupportEffectSync]{@link vibrator.isSupportEffectSync}查询是否支持。
   * @returns { Promise<void> } Promise对象。调用成功时Promise resolve，表示振动成功启动；调用失败时Promise reject，返回错误对象包含错误码和错误信息。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)
   */
  function vibrate(effectId: EffectId): Promise<void>;

  /**
   * 按照指定振动效果触发马达振动。
   *
   * > **说明：**
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { EffectId } effectId - 预置的振动效果ID。字符串最大长度64，超出部分截取前64个字符。建议先通过
   *     [vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}或
   *     [vibrator.isSupportEffectSync]{@link vibrator.isSupportEffectSync}查询是否支持。
   * @param { AsyncCallback<void> } callback - 回调函数，当马达振动成功，err为undefined，否则为错误对象。使用场景：不填写时仅触发振动不获取回调结果。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)
   */
  function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void;

  /**
   * 根据指定的振动效果和振动属性触发马达振动，使用callback异步回调。
   * 适用于为用户交互提供触觉反馈、为通知/闹钟等事件提供振动提醒，或在游戏、多媒体等场景中提供沉浸式振动体验。调用成功后，设备马达将按指定效果和属性开始振动；若同一马达已有正在进行的振动，新请求将按系统优先级规则处理。同功能还提供
   * Promise版本vibrator.startVibration (#vibratorstartvibration9-1)，开发者可根据回调风格偏好选择。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - 马达振动效果，支持四种：<br>1、[VibratePreset]{@link vibrator.VibratePreset}：按照预置振动效果触发马达振动，适用于交互反馈
   *     类的短振场景（如点击长按，滑动，拖拽等），为确保与系统整体振感反馈体验风格一致，推荐使用此接口；<br>2、[VibrateFromFile]{@link vibrator.VibrateFromFile}：按照文件形式定制自定义振
   *     动效果触发马达振动，适用于匹配复杂场景效果的交互反馈（如表情包触发的拟真效果、游戏场景/操作反馈）；<br>3、[VibrateTime]{@link vibrator.VibrateTime}：按照指定时长触发马达振动，仅对振动时
   *     长进行启动或停止控制，满足基础功能，无法对振动强度、频率等维度进行个性化设置，此种振动调节不够细腻，无法满足精致体验；<br/>4、
   *     [VibrateFromPattern<sup>18+</sup>]{@link vibrator.VibrateFromPattern}：按照自定义振动效果触发马达振动。使用场景和VibrateFromFile一致。
   *     VibrateFromFile是面向文件中提前定制好的效果，将具体的振动事件以文件描述符形式传递到接口中；VibrateFromPattern提供更加灵活的振动事件排列组合，将振动事件以振动事件数组的形式传递到接口中。<br/>
   * @param { VibrateAttribute } attribute - 马达振动属性，用于指定马达ID、设备ID和振动使用场景。attribute中的usage参数决定振动的场景类型，不同场景类型受系统振动开关管控规则不同，开发者需
   *     根据实际业务场景选择合适的usage值。
   * @param { AsyncCallback<void> } callback - 回调函数。当马达振动成功，err为undefined；否则为错误对象，包含错误码和错误信息。回调结果可用于确认振动是否成功启动，若启动失败可根据错误码进行相
   *     应处理。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported
   * @throws { BusinessError } 14600101 - Device operation failed
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void;

  /**
   * 根据指定的振动效果和振动属性触发马达振动，使用promise异步回调。
   * 适用于交互触觉反馈、事件振动提醒或游戏、多媒体等沉浸式振动场景。调用成功时Promise resolve无返回值；调用失败时Promise reject返回错误对象。若同一马达已有振动正在进行，新请求按系统优先级规则处理。同功能还
   * 提供callback版本vibrator.startVibration (#vibratorstartvibration9)，开发者可根据回调风格偏好选择。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - 马达振动效果，支持四种：<br/>1、[VibratePreset]{@link vibrator.VibratePreset}：按照预置振动效果触发马达振动，适用于交互反
   *     馈类的短振场景（如点击长按，滑动，拖拽等），为确保与系统整体振感反馈体验风格一致，推荐使用此接口；<br/>2、[VibrateFromFile]{@link vibrator.VibrateFromFile}：按照文件形式定制自定
   *     义振动效果触发马达振动，适用于匹配复杂场景效果的交互反馈（如表情包触发的拟真效果、游戏场景/操作反馈）；<br/>3、[VibrateTime]{@link vibrator.VibrateTime}：按照指定时长触发马达振动，仅对
   *     振动时长进行启动或停止控制，满足基础功能，无法对振动强度、频率等维度进行个性化设置，此种振动调节不够细腻，无法满足精致体验；<br/>4、
   *     [VibrateFromPattern<sup>18+</sup>]{@link vibrator.VibrateFromPattern}：按照自定义振动效果触发马达振动。使用场景和VibrateFromFile一致。
   *     VibrateFromFile是面向文件中提前定制好的效果，将具体的振动事件以文件描述符形式传递到接口中；VibrateFromPattern提供更加灵活的振动事件排列组合，将振动事件以振动事件数组的形式传递到接口中。
   * @param { VibrateAttribute } attribute - 马达振动属性，用于指定马达ID、设备ID和振动使用场景。attribute中的usage参数决定振动的场景类型，不同场景类型受系统振动开关管控规则不同，开发者需
   *     根据实际业务场景选择合适的usage值。
   * @returns { Promise<void> } 无返回结果的Promise对象。调用成功时Promise resolve，表示振动成功启动；调用失败时Promise reject，返回错误对象包含错误码和错误信息，可用于排查振动启动失
   *     败的原因。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;

  /**
   * 按照指定模式停止马达的振动。调用成功后马达停止对应模式的振动。使用promise异步回调。
   * 用于停止VibrateTime触发的指定时长振动或VibratePreset触发的预置振动。调用成功返回Promise resolve，失败返回错误对象；若无对应振动正在进行，仍返回成功。此接口无法停止自定义振动（
   * VibrateFromFile和VibrateFromPattern），需使用vibrator.stopVibration (#vibratorstopvibration10-1)。stopMode须与启动振动时的
   * VibrateEffect类型对应，否则停止无效：VibrateTime对应VIBRATOR_STOP_MODE_TIME，VibratePreset对应VIBRATOR_STOP_MODE_PRESET。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - 指定的停止振动模式，用于停止对应模式的马达振动，支持两种：<br>VIBRATOR_STOP_MODE_TIME：停止
   *     [VibrateTime]{@link vibrator.VibrateTime}类型的指定时长振动；<br>VIBRATOR_STOP_MODE_PRESET：停止
   *     [VibratePreset]{@link vibrator.VibratePreset}类型的预置振动。<br>此接口无法停止自定义振动（
   *     [VibrateFromFile]{@link vibrator.VibrateFromFile}和[VibrateFromPattern]{@link vibrator.VibrateFromPattern}），请使用
   *     [vibrator.stopVibration<sup>10+</sup>]{@link vibrator.stopVibration()}。stopMode需与启动振动时的VibrateEffect类型对应，否则停止操作可能无效。
   * @returns { Promise<void> } Promise对象。调用成功时Promise resolve，表示振动成功停止；调用失败时Promise reject，返回错误对象包含错误码和错误信息，可用于排查停止失败的原因。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function stopVibration(stopMode: VibratorStopMode): Promise<void>;

  /**
   * 按照指定模式停止马达振动。调用成功后马达停止对应模式的振动。使用callback异步回调。
   * stopMode需与启动振动时的VibrateEffect类型对应：VIBRATOR_STOP_MODE_TIME用于停止VibrateTime类型振动，VIBRATOR_STOP_MODE_PRESET用于停止
   * VibratePreset类型振动，否则停止操作可能无效。调用成功后指定模式振动停止，若无对应振动正在进行也会成功返回。此接口无法停止自定义振动（VibrateFromFile和VibrateFromPattern），如需停止自定
   * 义振动或所有模式振动，请使用vibrator.stopVibration (#vibratorstopvibration10)。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - 指定的停止振动模式，用于停止对应模式的马达振动，支持两种：<br>VIBRATOR_STOP_MODE_TIME：停止
   *     [VibrateTime]{@link vibrator.VibrateTime}类型的固定时长振动；<br>VIBRATOR_STOP_MODE_PRESET：停止
   *     [VibratePreset]{@link vibrator.VibratePreset}类型的预置振动。<br>此接口无法停止自定义振动（
   *     [VibrateFromFile]{@link vibrator.VibrateFromFile}和[VibrateFromPattern]{@link vibrator.VibrateFromPattern}），请使用
   *     [vibrator.stopVibration<sup>10+</sup>]{@link vibrator.stopVibration(callback: AsyncCallback<void>)}。stopMode需与启动振动时的
   *     VibrateEffect类型对应，否则停止操作可能无效。
   * @param { AsyncCallback<void> } callback - 回调函数，当马达停止振动成功，err为undefined，否则为错误对象。回调结果可用于确认振动是否成功停止。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void;

  /**
   * 停止所有模式的马达振动。调用成功后马达停止振动。使用callback异步回调。
   * 用于停止设备上所有类型的振动（包括VibrateTime、VibratePreset、VibrateFromFile、VibrateFromPattern），适用于应用退出、页面切换等需立即终止所有振动的场景。与
   * vibrator.stopVibration (#vibratorstopvibration9)（需传入stopMode）不同，本接口无需指定停止模式，可停止包括自定义振动在内的所有振动。
   *
   * @permission ohos.permission.VIBRATE
   * @param { AsyncCallback<void> } callback - 回调函数，当马达停止振动成功，err为undefined，否则为错误对象，包含错误码和错误信息。回调结果可用于确认所有振动是否成功停止。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function stopVibration(callback: AsyncCallback<void>): void;

  /**
   * 停止所有模式的马达振动。调用成功后马达停止振动。使用promise异步回调。
   * 用于停止设备上所有类型的振动（包括VibrateTime、VibratePreset、VibrateFromFile、VibrateFromPattern），适用于应用退出、页面切换等需立即终止所有振动的场景。调用成功返回
   * Promise resolve，失败返回错误对象。与vibrator.stopVibration (#vibratorstopvibration9-1)（需传入stopMode）不同，本接口无需指定停止模式，可停止包括自定义振动在
   * 内的所有振动。
   *
   * @permission ohos.permission.VIBRATE
   * @returns { Promise<void> } Promise对象。调用成功时Promise resolve，表示所有振动成功停止；调用失败时Promise reject，返回错误对象包含错误码和错误信息，可用于排查停止失败的原因。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function stopVibration(): Promise<void>;

  /**
   * 停止任何形式的马达振动。调用成功后马达停止振动。此接口为同步接口，会阻塞主线程直到振动停止操作完成，容易影响UI交互，需谨慎使用。
   * 当开发者需要立即停止所有振动且不关心异步回调结果时使用此接口。适用于对实时性要求极高的场景（如紧急中断振动）。调用成功后，设备上所有正在进行的马达振动立即停止。调用失败时会抛出异常，需使用try catch捕获。与异步版本
   * [vibrator.stopVibration]{@link vibrator.stopVibration()}相比，本接口为同步接口，直接返回结果无需回调，但会阻塞主线程。建议在非UI线程中使用，或在UI线程中优先使用异步版本以
   * 避免影响交互响应。
   *
   * @permission ohos.permission.VIBRATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function stopVibrationSync(): void;

  /**
   * 停止指定设备马达振动。不传参默认停止本地设备所有马达的振动。使用promise异步回调。
   * 用于多设备多马达场景下停止指定设备或指定马达的振动。不传参时默认停止本地设备全部马达振动；传入VibratorInfoParam可指定远程设备的特定马达。调用成功返回Promise resolve，失败返回错误对象。与
   * vibrator.stopVibration (#vibratorstopvibration10-1)（无参数版本）相比，本接口新增VibratorInfoParam可选参数，支持精确控制停止范围，前者仅能停止本地设备所有马达振动
   * 。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorInfoParam } [param] - 指出需要停止振动的设备和马达信息。不传参时默认停止本地设备的全部马达振动。deviceId默认值为-1（本地设备），vibratorId默认值为0（该设备的全部马
   *     达）。deviceId和vibratorId可通过[vibrator.getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}或
   *     [vibrator.on]{@link vibrator.on_vibratorStateChange}查询获取。
   * @returns { Promise<void> } Promise对象。调用成功时Promise resolve，表示指定设备马达振动成功停止；调用失败时Promise reject，返回错误对象包含错误码和错误信息，可用于排查停止失败的
   *     原因。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 19 dynamic
   * @since 23 static
   */
  function stopVibration(param?: VibratorInfoParam): Promise<void>;

  /**
   * 查询当前设备是否支持传入的预置振动效果effectId。使用callback异步回调。
   * 当开发者需要在触发预置振动前确认当前设备是否支持指定的振动效果时使用此接口。由于不同设备可能预置不同的振动效果，建议在使用
   * [vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 的VibratePreset类型前先调用此接口查询，避免在不支持的设备上触发振动效果不佳。调用成功后，通过callback返回boolean结果：返回true表示设备支持该effectId，可直接用于startVibration；
   * 返回false表示不支持，此时使用该effectId触发振动可能效果不佳或无法振动。
   *
   * @param { string } effectId - 待确认的预置振动效果ID。字符串最大长度64，超出部分截取前64个字符。使用场景：不同设备预置的振动效果可能不同，需传入具体的effectId查询是否支持。取值可参考
   *     [EffectId]{@link vibrator.EffectId}和[HapticFeedback]{@link vibrator.HapticFeedback}中定义的值。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示设备支持该effectId，可用于
   *     [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   *     ；返回false表示不支持，使用该effectId触发振动可能效果不佳。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 10 dynamic
   * @since 23 static
   */
  function isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前设备是否支持传入的预置振动效果effectId。使用promise异步回调。
   * 当开发者需要在触发预置振动前确认当前设备是否支持指定的振动效果时使用此接口。与callback版本功能一致，开发者可根据异步回调风格偏好选择使用。调用成功时Promise resolve返回boolean结果：返回true表示设备
   * 支持该effectId；返回false表示不支持，此时使用该effectId触发振动可能效果不佳或无法振动。
   *
   * @param { string } effectId - 待确认的预置振动效果ID。字符串最大长度64，超出部分截取前64个字符。使用场景：不同设备预置的振动效果可能不同，需传入具体的effectId查询是否支持。取值可参考
   *     [EffectId]{@link vibrator.EffectId}和[HapticFeedback]{@link vibrator.HapticFeedback}中定义的值。
   * @returns { Promise<boolean> } Promise对象。返回true表示设备支持该effectId，可用于
   *     [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)}；返回false表示不支持，使用该
   *     effectId触发振动可能效果不佳。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 10 dynamic
   * @since 23 static
   */
  function isSupportEffect(effectId: string): Promise<boolean>;

  /**
   * 查询当前设备是否支持预设的振动效果。此接口为同步接口，会阻塞主线程直到查询完成，容易影响UI交互，需谨慎使用。
   * 当开发者需要在触发预置振动前立即确认当前设备是否支持指定的振动效果时使用此接口。适用于对实时性要求高且查询逻辑简单的场景。返回boolean结果：返回true表示设备支持该effectId，可用于
   * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * ；返回false表示不支持，使用该effectId触发振动可能效果不佳或无法振动。与异步版本
   * [vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}相比，本接
   * 口为同步接口，直接返回结果无需回调，但会阻塞主线程。建议在非UI线程中使用，或在UI线程中优先使用异步版本以避免影响交互响应。
   *
   * @param { string } effectId - 待确认的预置振动效果ID。字符串最大长度64，超出部分截取前64个字符。使用场景：不同设备预置的振动效果可能不同，需传入具体的effectId查询是否支持。取值可参考
   *     [EffectId]{@link vibrator.EffectId}和[HapticFeedback]{@link vibrator.HapticFeedback}中定义的值。
   * @returns { boolean } 返回对象。返回true表示设备支持该effectId，可用于
   *     [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   *     ；返回false表示不支持，使用该effectId触发振动可能效果不佳或无法振动。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function isSupportEffectSync(effectId: string): boolean;

  /**
   * 通过设备ID和马达ID获取预置振动效果信息，用于判断该预置振动效果是否受指定设备的指定马达支持。
   * <br>用于多设备多马达场景下确认指定设备的指定马达是否支持某个预置振动效果，不传param时默认查询本地设备。适用于触发振动前确认效果可用性，避免在不支持的设备或马达上触发振动效果不佳。返回EffectInfo对象，
   * isEffectSupported字段指示是否支持该预置振动效果：返回true时可直接用于startVibration (#vibratorstartvibration9)，返回false时使用该effectId触发振动可能效果不
   * 佳。如果需要跨设备查询预置振动效果是否支持，请使用getEffectInfoSync；如果仅查询本地设备，请使用isSupportEffect。
   *
   * @param { string } effectId - 待确认的预置振动效果ID。字符串最大长度64，超出部分截取前64个字符。使用场景：不同设备预置的振动效果可能不同，需传入具体的effectId查询是否支持。取值可参考
   *     [EffectId]{@link vibrator.EffectId}和[HapticFeedback]{@link vibrator.HapticFeedback}中定义的值。
   * @param { VibratorInfoParam } [param] - 指出需要查询的设备和马达信息。不传param时默认查询本地设备。deviceId默认值为-1（本地设备），vibratorId默认值为0（该设备的全部马达）。
   *     deviceId和vibratorId可通过[vibrator.getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}或
   *     [vibrator.on]{@link vibrator.on_vibratorStateChange}查询获取。
   * @returns { EffectInfo } 预置振动效果信息。isEffectSupported为true表示支持该效果，可用于
   *     [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   *     ；为false表示不支持，使用该effectId触发振动可能效果不佳。
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 19 dynamic
   * @since 23 static
   */
  function getEffectInfoSync(effectId: string, param?: VibratorInfoParam): EffectInfo;

  /**
   * 查询的预置效果信息。通过[vibrator.getEffectInfoSync]{@link vibrator.getEffectInfoSync}返回此对象，用于判断预置振动效果是否受指定设备的指定马达支持。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 19 dynamic
   * @since 23 static
   */
  interface EffectInfo {
    /**
     * 预置效果是否受支持。true表示支持该预置振动效果，可用于
     * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
     * ；false表示不支持，使用该effectId触发振动可能效果不佳。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    isEffectSupported: boolean;
  }

  /**
   * 按照指定模式停止马达的振动。
   *
   * > **说明：**
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [vibrator.stopVibration]{@link vibrator.stopVibration(stopMode: VibratorStopMode)}替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - 马达停止指定的振动模式。需与启动振动时的模式对应：VIBRATOR_STOP_MODE_TIME用于停止时长振动，
   *     VIBRATOR_STOP_MODE_PRESET用于停止预置效果振动。
   * @returns { Promise<void> } Promise对象。调用成功时Promise resolve，表示振动成功停止；调用失败时Promise reject，返回错误对象包含错误码和错误信息。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator.stopVibration(stopMode: VibratorStopMode)
   */
  function stop(stopMode: VibratorStopMode): Promise<void>;

  /**
   * 按照指定模式停止马达的振动。
   *
   * > **说明：**
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [vibrator.stopVibration]{@link vibrator.stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - 马达停止指定的振动模式。需与启动振动时的模式对应：VIBRATOR_STOP_MODE_TIME用于停止时长振动，
   *     VIBRATOR_STOP_MODE_PRESET用于停止预置效果振动。
   * @param { AsyncCallback<void> } callback - 回调函数，当马达停止振动成功，err为undefined，否则为错误对象。使用场景：不填写时仅停止振动不获取回调结果。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator.stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>)
   */
  function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void;

  /**
   * 查询当前设备是否支持高清振动。
   * 适用于在触发高清振动前确认设备是否支持，避免在不支持的设备上调用VibrateFromFile或VibrateFromPattern类型振动导致振动效果不佳或返回错误码801。返回true表示设备支持高清振动，可使用
   * VibrateFromFile和VibrateFromPattern类型触发振动；返回false表示不支持，使用自定义振动类型将返回错误码801或效果不佳。
   *
   * @returns { boolean } 是否支持高清振动。true表示支持高清振动，可使用VibrateFromFile和VibrateFromPattern类型；false表示不支持，使用自定义振动类型可能返回错误码801或效果不佳。
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function isHdHapticSupported(): boolean;

  /**
   * 预置的振动效果。在调用
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 或[vibrator.stopVibration<sup>9+</sup>]{@link vibrator.stopVibration(stopMode: VibratorStopMode)}接口下发
   * [VibratePreset]{@link vibrator.VibratePreset}形式振动的时候需要使用此参数类型。此参数值种类多样，'haptic.clock.timer'为其中一种。
   * [HapticFeedback<sup>12+</sup>]{@link vibrator.HapticFeedback}展示了几种常用的EffectId值。
   *
   * > **说明**
   * >
   * > 由于设备存在多样性，不同的设备可能预置不同的效果，建议使用预置效果前先使用
   * > [vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}<
   * > sup>10+</sup>或[vibrator.isSupportEffectSync]{@link vibrator.isSupportEffectSync}接口查询当前设备是否支持该预置效果。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 8 dynamic
   * @since 23 static
   */
  enum EffectId {
    /**
     * 描述用户调整计时器时的振动效果。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    EFFECT_CLOCK_TIMER = 'haptic.clock.timer'
  }

  /**
   * 简单而通用的振动效果。根据各设备的马达器件不同，同一振动效果的频率会有差异，但效果的频率趋向是统一的。这几种振动效果是EffectId参数的具体值，使用方法参考
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 或[vibrator.stopVibration<sup>9+</sup>]{@link vibrator.stopVibration(stopMode: VibratorStopMode)}接口下发
   * [VibratePreset]{@link vibrator.VibratePreset}形式振动的示例代码。
   *
   * > **说明**
   * >
   * > 由于设备存在多样性，建议使用预置效果前先使用
   * > [vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}<
   * > sup>10+</sup>或[vibrator.isSupportEffectSync]{@link vibrator.isSupportEffectSync}接口查询当前设备是否支持该预置效果。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum HapticFeedback {
    /**
     * 较松散的振动效果，频率偏低。适用于轻柔触觉反馈场景。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SOFT = 'haptic.effect.soft',

    /**
     * 较沉重的振动效果，频率居中。适用于坚定触觉反馈场景。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_HARD = 'haptic.effect.hard',

    /**
     * 较尖锐的振动效果，频率偏高。适用于警示触觉反馈场景。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SHARP = 'haptic.effect.sharp',

    /**
     * 表达成功通知的振动效果。适用于操作成功提醒场景。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    EFFECT_NOTICE_SUCCESS = 'haptic.notice.success',

    /**
     * 表达失败通知的振动效果。适用于操作失败提醒场景。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    EFFECT_NOTICE_FAILURE = 'haptic.notice.fail',

    /**
     * 表达警告通知的振动效果。适用于风险警告提醒场景。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    EFFECT_NOTICE_WARNING = 'haptic.notice.warning'
  }

  /**
   * 停止振动的模式。在调用
   * [vibrator.stopVibration<sup>9+</sup>]{@link vibrator.stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>)}
   * 或[vibrator.stopVibration<sup>9+</sup>]{@link vibrator.stopVibration(stopMode: VibratorStopMode)}接口时，需要使用此参数类型指定停止的振
   * 动模式。停止模式和[VibrateEffect<sup>9+</sup>]{@link vibrator.VibrateEffect}中下发的模式为对应关系：VIBRATOR_STOP_MODE_TIME对应VibrateTime
   * 类型，VIBRATOR_STOP_MODE_PRESET对应VibratePreset类型。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 8 dynamic
   * @since 23 static
   */
  enum VibratorStopMode {
    /**
     * 停止[VibrateTime]{@link vibrator.VibrateTime}类型（duration模式）的振动。需与startVibration时使用的VibrateTime类型对应。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    VIBRATOR_STOP_MODE_TIME = 'time',

    /**
     * 停止[VibratePreset]{@link vibrator.VibratePreset}类型（预置EffectId模式）的振动。需与startVibration时使用的VibratePreset类型对应。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    VIBRATOR_STOP_MODE_PRESET = 'preset'
  }

  /**
   * 振动使用场景。不同usage值对应不同的系统振动开关管控规则，开发者需根据实际业务场景选择合适的usage值。
   *
   * <!--RP1End-->
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @unionmember { 'unknown' } 没有明确使用场景，最低优先级，值固定为'unknown'字符串。不受特定振动开关管控。
   * @unionmember { 'alarm' } 用于警报场景，值固定为'alarm'字符串。受闹钟振动开关管控。
   * @unionmember { 'ring' } 用于铃声场景，值固定为'ring'字符串。受铃声振动开关管控。
   * @unionmember { 'notification' } 用于通知场景，值固定为'notification'字符串。受通知振动开关管控。
   * @unionmember { 'communication' } 用于通信场景，值固定为'communication'字符串。受通信振动开关管控。
   * @unionmember { 'touch' } 用于触摸场景，值固定为'touch'字符串。受触摸振动开关管控。
   * @unionmember { 'media' } 用于多媒体场景，值固定为'media'字符串。受多媒体振动开关管控。
   * @unionmember { 'physicalFeedback' } 用于物理反馈场景，值固定为'physicalFeedback'字符串。受物理反馈振动开关管控。
   * @unionmember { 'simulateReality' } 用于模拟现实场景，值固定为'simulateReality'字符串。受模拟现实振动开关管控。
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
  'touch' | 'media' | 'physicalFeedback' | 'simulateReality';

  /**
   * 马达振动属性。用于
   * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 接口的attribute参数，指定马达ID、设备ID和振动使用场景。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface VibrateAttribute {
    /**
     * 马达ID。默认值：0。使用场景：当设备存在多个马达时，可通过指定不同的马达ID来选择特定马达触发振动。马达ID可以通过
     * [getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}查询。不填写时默认使用马达ID为0的马达。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    id?: int;

    /**
     * 设备ID。默认值：-1，表示本地设备。使用场景：在多设备场景下需指定远程设备时设置此参数；不填写时默认控制本地设备。从API version 19开始，设备ID可以使用
     * [getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}或[on]{@link vibrator.on_vibratorStateChange}查询。
     *
     * 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * 马达振动的使用场景。默认值：'unknown'。取值范围只允许在[Usage]{@link vibrator.Usage}提供的类型中选取。不同usage值对应不同的系统振动开关管控规则，开发者需根据实际业务场景选择合适的
     * usage值。
     *
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    usage: Usage;

    /**
     * Indicates whether to bypass system management switches.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    systemUsage?: boolean;
  }

  /**
   * 马达振动效果，支持以下四种：在调用
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 或
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)}
   * 接口时，此参数的四种类型表示以四种不同的形式触发振动。
   *
   * @unionmember { VibrateTime } 按照指定时长触发马达振动。适用于仅需控制振动时长的基础场景。
   *
   *
   *      从API version 11开始，该接口支持在原子化服务中使用。
   * @unionmember { VibratePreset } 按照预置振动类型触发马达振动。适用于交互反馈类的短振场景，推荐使用以确保与系统整体振感反馈体验风格一致。
   * @unionmember { VibrateFromFile } 按照自定义振动配置文件触发马达振动。适用于需要精细振动控制的复杂场景。
   * @unionmember { VibrateFromPattern } 按照自定义振动效果触发马达振动。适用于需要灵活组合振动事件的场景。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern;

  /**
   * 指定时长振动类型。仅对振动时长进行启动或停止控制，满足基础功能，无法对振动强度、频率等维度进行个性化设置。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface VibrateTime {
    /**
     * 值为'time'，按照指定时长触发马达振动。固定值，不可更改。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    type: 'time';

    /**
     * 马达持续振动时长。单位：ms（毫秒）。取值范围：(0,1800000]区间内所有整数。由于实际产品厂商驱动对器件保护设计规格不同，不同设备实际最大振动时长会有差异。建议值：单次触发长振动一般建议不超过10000（10秒），以最大化用户
     * 体验。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    duration: int;
  }

  /**
   * 预置振动类型。当调用
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 或
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)}
   * 时，[VibrateEffect<sup>9+</sup>]{@link vibrator.VibrateEffect}参数的值可以为VibratePreset，表示触发预置振动类型。适用于交互反馈类的短振场景（如点击、长按、滑动
   * 、拖拽等），为确保与系统整体振感反馈体验风格一致，推荐使用此类型。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  interface VibratePreset {
    /**
     * 值为'preset'，按照预置振动效果触发马达振动。固定值，不可更改。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    type: 'preset';

    /**
     * 预置的振动效果ID。字符串最大长度64，超出部分截取前64个字符。使用场景：不同设备预置的振动效果可能不同，建议先通过
     * [vibrator.isSupportEffect]{@link vibrator.isSupportEffect(effectId: string, callback: AsyncCallback<boolean>)}或
     * [vibrator.isSupportEffectSync]{@link vibrator.isSupportEffectSync}查询是否支持。取值可参考[EffectId]{@link vibrator.EffectId}
     * 和[HapticFeedback]{@link vibrator.HapticFeedback}中定义的值。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    effectId: string;

    /**
     * 可选参数，振动的重复次数。默认值：1。取值范围：正整数。使用场景：适用于需要多次重复同一振动效果的交互反馈场景，如连续点击提醒。不填写时默认重复1次。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    count?: int;

    /**
     * 可选参数，振动调节强度。取值范围：(0,100]区间内所有整数。默认值：100。使用场景：适用于需要调节振动强度的交互反馈场景。不填写时默认使用最大强度。若振动效果不支持强度调节或设备不支持时，则按默认强度振动。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    intensity?: int;
  }

  /**
   * 自定义振动类型。仅部分设备支持高清振动的设备可用，当设备不支持此振动类型时，返回错误码801。当调用
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 或
   * [vibrator.startVibration<sup>9+</sup>]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute)}
   * 时，[VibrateEffect<sup>9+</sup>]{@link vibrator.VibrateEffect}参数的值可以为VibrateFromFile，表示触发自定义振动类型。适用于匹配复杂场景效果的交互反馈（如表情
   * 包触发的拟真效果、游戏场景/操作反馈）。
   * 适用于需要按照振动配置文件定制精细振动效果的交互反馈场景。建议先通过[vibrator.isHdHapticSupported]{@link vibrator.isHdHapticSupported}确认设备是否支持高清振动。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 10 dynamic
   * @since 23 static
   */
  interface VibrateFromFile {
    /**
     * 值为'file'，按照振动配置文件触发马达振动。固定值，不可更改。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    type: 'file';

    /**
     * 振动配置文件的描述符。需确保文件可用且格式正确，振动序列存储格式请参考[振动效果说明](docroot://device/sensor/vibrator-guidelines.md#振动效果说明)。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    hapticFd: HapticFileDescriptor;
  }

  /**
   * 自定义振动配置文件的描述符，必须确认资源文件可用，其参数可通过[fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen)从
   * 沙箱路径获取或者通过
   * [getRawFd]{@link @ohos.resourceManager:resourceManager.ResourceManager.getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>)}
   * 从HAP资源获取。使用场景：振动序列被存储在一个文件中，需要根据偏移量和长度进行振动，振动序列存储格式，请参考
   * [振动效果说明](docroot://device/sensor/vibrator-guidelines.md#振动效果说明)。
   * 使用时需注意以下问题：
   *
   * - 振动结束后建议及时关闭文件描述符，避免资源泄露。使用getRawFd获取的文件描述符需通过closeRawFd关闭，使用fileIo.open获取的需通过fileIo.close关闭。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 10 dynamic
   * @since 23 static
   */
  interface HapticFileDescriptor {
    /**
     * 资源文件描述符。可通过[fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen)从沙箱路径获取或通过
     * [getRawFd]{@link @ohos.resourceManager:resourceManager.ResourceManager.getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>)}
     * 从HAP资源获取。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    fd: int;

    /**
     * 距文件起始位置的偏移量。单位：B（字节）。默认值：文件起始位置（0）。取值范围：不可超出文件有效范围。使用场景：适用于振动配置文件中包含多种振动效果、需要指定从特定偏移位置开始振动的场景。不填写时默认从文件起始位置开始。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    offset?: long;

    /**
     * 资源长度。单位：B（字节）。默认值：从偏移位置至文件结尾的长度。取值范围：不可超出文件有效范围。使用场景：适用于振动配置文件中包含多种振动效果、需要指定特定长度振动的场景。不填写时默认读取从偏移位置至文件结尾的全部内容。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    length?: long;
  }

  /**
   * 振动事件类型。用于[VibratorEvent]{@link vibrator.VibratorEvent}的eventType字段指定振动事件的类型。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  enum VibratorEventType {
    /**
     * 表示长振。适用于需要持续振动反馈的场景（如引擎振动、拉弓振动等）。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    CONTINUOUS = 0,

    /**
     * 表示短振。适用于需要短暂振动反馈的场景（如点击、按键反馈等）。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSIENT = 1
  }

  /**
   * 相对事件振动强度的增益。用于[ContinuousParam]{@link vibrator.ContinuousParam}和[VibratorEvent]{@link vibrator.VibratorEvent}的
   * points字段，精细控制振动强度和频率的变化趋势。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface VibratorCurvePoint {
    /**
     * 起始时间偏移。单位：ms（毫秒）。用于指定振动调节曲线中该调节点的时间位置。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    time: int;

    /**
     * 可选参数，相对事件振动强度增益。取值范围：[0,1]。默认值：1。使用场景：适用于精细调节振动强度的交互反馈场景，值越大振动越强。不填写时默认使用最大增益。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    intensity?: double;
    /**
     * 可选参数，相对事件振动频率变化。取值范围：[-100,100]内所有整数。默认值：0。使用场景：适用于精细调节振动频率的交互反馈场景，正值频率升高，负值频率降低。不填写时默认不改变频率。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    frequency?: int;
  }

  /**
   * 振动事件。用于[VibratorPattern]{@link vibrator.VibratorPattern}的events数组中定义具体的振动事件。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface VibratorEvent {
    /**
     * 振动事件类型。CONTINUOUS（0）表示长振，TRANSIENT（1）表示短振。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    eventType: VibratorEventType;

    /**
     * 振动起始时间。单位：ms（毫秒）。取值范围：[0,1800000]区间内所有整数。用于指定振动事件在序列中的起始时间点，多个事件间time值不能重叠。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    time: int;

    /**
     * 可选参数，表示振动持续时间。单位：ms（毫秒）。取值范围：(0,5000]区间所有整数。默认值：短振默认48，长振默认1000。使用场景：适用于长振和短振交互反馈场景。不填写时使用对应类型的默认持续时间。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    duration?: int;

    /**
     * 可选参数，表示振动强度。取值范围：[0,100]区间所有整数。默认值：100。不填写时默认使用最大强度。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    intensity?: int;

    /**
     * 可选参数，表示振动频率。取值范围：[0,100]区间内所有整数。默认值：50。不填写时默认使用中等频率。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    frequency?: int;

    /**
     * 可选参数，表示马达通道编号。取值范围：[0,2]区间内所有整数。默认值：0。使用场景：不同通道对应不同的马达器件，适用于多马达设备的精细控制场景。不填写时默认使用通道0。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    index?: int;

    /**
     * 可选参数，表示振动调节曲线数组。使用场景：适用于需要精细控制振动强度和频率变化趋势的交互反馈场景。数组中元素个数最少设置4个，最大设置16个。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    points?: Array<VibratorCurvePoint>;
  }

  /**
   * 马达振动序列，每个events代表一个振动事件。通过[VibratorPatternBuilder.build]{@link vibrator.VibratorPatternBuilder#build}方法生成，作为
   * [VibrateFromPattern]{@link vibrator.VibrateFromPattern}的pattern参数传入
   * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 接口触发振动。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface VibratorPattern {
    /**
     * 振动绝对起始时间。单位：ms（毫秒）。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    time: int;

    /**
     * 振动事件数组。由[VibratorPatternBuilder]{@link vibrator.VibratorPatternBuilder}的addContinuousEvent和addTransientEvent方法添加后
     * 通过build方法生成。同一VibratorPattern中多个VibratorEvent的time值不能重叠。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    events: Array<VibratorEvent>;
  }

  /**
   * 连续振动参数。用于[VibratorPatternBuilder.addContinuousEvent]{@link vibrator.VibratorPatternBuilder#addContinuousEvent}的
   * options参数，指定长振事件的振动强度、频率、振动调节曲线和通道编号。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface ContinuousParam {
    /**
     * 可选参数，表示振动强度。取值范围：[0,100]区间所有整数。默认值：100。不填写时默认使用最大强度。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    intensity?: int;

    /**
     * 可选参数，表示振动频率。取值范围：[0,100]区间内所有整数。默认值：50。不填写时默认使用中等频率。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    frequency?: int;

    /**
     * 可选参数，表示振动调节曲线数组。使用场景：适用于需要精细控制振动强度和频率变化趋势的交互反馈场景。数组中元素个数最少设置4个，最大设置16个。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    points?: VibratorCurvePoint[];

    /**
     * 可选参数，表示马达通道编号。取值范围：[0,2]区间内所有整数。默认值：0。使用场景：不同通道对应不同的马达器件，适用于多马达设备的精细控制场景。不填写时默认使用通道0。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    index?: int;
  }

  /**
   * 瞬态振动参数。用于[VibratorPatternBuilder.addTransientEvent]{@link vibrator.VibratorPatternBuilder#addTransientEvent}的
   * options参数，指定短振事件的振动强度、频率和通道编号。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface TransientParam {
    /**
     * 可选参数，表示振动强度。取值范围：[0,100]区间所有整数。默认值：100。不填写时默认使用最大强度。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    intensity?: int;

    /**
     * 可选参数，表示振动频率。取值范围：[0,100]区间内所有整数。默认值：50。不填写时默认使用中等频率。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    frequency?: int;

    /**
     * 可选参数，表示马达通道编号。取值范围：[0,2]区间内所有整数。默认值：0。使用场景：不同通道对应不同的马达器件，适用于多马达设备的精细控制场景。不填写时默认使用通道0。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    index?: int;
  }

  /**
   * 提供添加长振、短振事件和生成VibratorPattern对象的方法。使用流程：先通过
   * [addContinuousEvent]{@link vibrator.VibratorPatternBuilder#addContinuousEvent}或
   * [addTransientEvent]{@link vibrator.VibratorPatternBuilder#addTransientEvent}添加振动事件，再通过
   * [build]{@link vibrator.VibratorPatternBuilder#build}方法生成VibratorPattern对象，最后将该对象作为
   * [VibrateFromPattern]{@link vibrator.VibrateFromPattern}的pattern参数传入
   * [vibrator.startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 接口触发振动。
   * 当开发者需要通过灵活组合振动事件（长振和短振）构建自定义振动序列时使用此接口。适用于需要动态排列振动事件的交互反馈场景（如表情包拟真效果、游戏场景反馈），相比VibrateFromFile以文件描述符方式传递振动事件，
   * VibratorPatternBuilder以振动事件数组形式传递，支持更灵活的振动事件排列组合。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @name VibratorPatternBuilder
   * @since 18 dynamic
   * @since 23 static
   */
  class VibratorPatternBuilder {
    /**
     * 添加长振事件的方法。添加后使用build (#build18)方法生成VibratorPattern (#vibratorpattern18)对象。
     * 用于在自定义振动序列中添加一段持续振动事件，适用于需要持续振动反馈的场景（如引擎振动、拉弓振动等）。返回VibratorPatternBuilder对象，支持链式调用addContinuousEvent或
     * addTransientEvent继续添加振动事件
     *
     * @param { int } time - 长振事件的起始时间。单位：ms（毫秒）。取值范围：[0,1800000]区间内所有整数。使用场景：用于指定长振事件在振动序列中的起始时间点，多个事件间time值不能重叠。
     * @param { int } duration - 长振事件的持续时间。单位：ms（毫秒）。取值范围：(0,5000]区间内所有整数。
     * @param { ContinuousParam } [options] - 可选参数，用于指定长振事件的振动强度、频率、振动调节曲线和通道编号。不填时使用各参数的默认值（intensity默认100，frequency默认50，index
     *     默认0）。
     * @returns { VibratorPatternBuilder } 返回已添加连续振动事件的VibratorPatternBuilder对象。可用于继续链式调用addContinuousEvent或addTransientEvent添加
     *     更多振动事件，最终通过[build]{@link vibrator.VibratorPatternBuilder#build}生成VibratorPattern对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    addContinuousEvent(time: int, duration: int, options?: ContinuousParam): VibratorPatternBuilder;

    /**
     * 添加短振事件的方法，添加后使用[build]{@link vibrator.VibratorPatternBuilder#build}方法生成
     * [VibratorPattern]{@link vibrator.VibratorPattern}对象。适用于点击、按键等短促振动反馈场景，返回VibratorPatternBuilder对象，支持链式调用继续添加振动事件。
     *
     * @param { int } time - 短振事件的起始时间。单位：ms（毫秒）。取值范围：[0,1800000]区间内所有整数。使用场景：用于指定短振事件在振动序列中的起始时间点，多个事件间time值不能重叠。
     * @param { TransientParam } [options] - 可选参数，用于指定短振事件的振动强度、频率和通道编号。不填时使用各参数的默认值（intensity默认100，frequency默认50，index默认0）。
     * @returns { VibratorPatternBuilder } 返回已添加短振事件的VibratorPatternBuilder对象。可用于继续链式调用addContinuousEvent或addTransientEvent添加更多
     *     振动事件，最终通过[build]{@link vibrator.VibratorPatternBuilder#build}生成VibratorPattern对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    addTransientEvent(time: int, options?: TransientParam): VibratorPatternBuilder;

    /**
     * 构造组合短事件或长事件的振动序列的方法。
     * 适用于需要将自定义振动事件组合为振动序列后，通过[VibrateFromPattern]{@link vibrator.VibrateFromPattern}触发马达振动的场景。需先通过
     * [addContinuousEvent]{@link vibrator.VibratorPatternBuilder#addContinuousEvent}或
     * [addTransientEvent]{@link vibrator.VibratorPatternBuilder#addTransientEvent}添加振动事件后，再调用本方法生成VibratorPattern对象。返回
     * VibratorPattern对象，包含振动序列的起始时间和振动事件数组。该对象可作为VibrateFromPattern的pattern参数传入
     * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
     * 接口触发振动。需先通过[addContinuousEvent]{@link vibrator.VibratorPatternBuilder#addContinuousEvent}或
     * [addTransientEvent]{@link vibrator.VibratorPatternBuilder#addTransientEvent}添加至少一个振动事件后调用本方法，否则生成的VibratorPattern
     * 为空序列。
     *
     * @returns { VibratorPattern } 振动序列对象。包含振动序列的起始时间和振动事件数组，可作为[VibrateFromPattern]{@link vibrator.VibrateFromPattern}的
     *     pattern参数传入
     *     [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
     *     接口触发振动。
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    build(): VibratorPattern;
  }

  /**
   * 自定义振动效果触发马达振动。适用于需要灵活组合振动事件的交互反馈场景（如表情包拟真效果、游戏场景/操作反馈）。与VibrateFromFile相比，VibrateFromFile是面向文件中提前定制好的效果，将振动事件以文件描述符
   * 形式传递；VibrateFromPattern提供更加灵活的振动事件排列组合，将振动事件以振动事件数组的形式传递。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 18 dynamic
   * @since 23 static
   */
  interface VibrateFromPattern {
    /**
     * 值为'pattern'，根据组合模式触发马达振动。固定值，不可更改。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    type: 'pattern';

    /**
     * 振动事件数组。由[VibratorPatternBuilder]{@link vibrator.VibratorPatternBuilder}的addContinuousEvent和addTransientEvent方法添加后
     * 通过build方法生成。同一VibratorPattern中多个VibratorEvent的time值不能重叠。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    pattern: VibratorPattern;
  }

  /**
   * 设备上马达的参数。用于指定需要查询或控制的设备和马达信息。默认情况下，VibratorInfoParam默认为查询或控制本地全部马达。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 19 dynamic
   * @since 23 static
   */
  interface VibratorInfoParam {
    /**
     * 设备的ID。默认值：-1，表示本地设备。使用场景：在多设备场景下需指定远程设备时设置此参数；不填此参数时默认控制本地设备。从API version 19开始，设备ID可通过
     * [getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}或[on]{@link vibrator.on_vibratorStateChange}查询获取。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;
    /**
     * 马达ID。默认值：0，表示该设备的全部马达。使用场景：在多马达设备上需指定特定马达时设置此参数；不填此参数时默认控制该设备的全部马达。从API version 19开始，马达ID可通过
     * [getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}或[on]{@link vibrator.on_vibratorStateChange}查询获取。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    vibratorId?: int;
  }

  /**
   * 表示查询的马达信息。通过[vibrator.getVibratorInfoSync]{@link vibrator.getVibratorInfoSync}返回此对象，用于获取设备马达能力和选择合适的马达触发振动。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 19 dynamic
   * @since 23 static
   */
  interface VibratorInfo {
    /**
     * 设备ID。可用于
     * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
     * 和[stopVibration]{@link vibrator.stopVibration(param?: VibratorInfoParam)}等接口指定目标设备。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * 马达ID。可用于
     * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
     * 和[stopVibration]{@link vibrator.stopVibration(param?: VibratorInfoParam)}等接口指定目标马达。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    vibratorId: int;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 是否支持高清振动。true表示支持高清振动，可使用VibrateFromFile和VibrateFromPattern类型触发振动；false表示不支持，使用自定义振动类型可能效果不佳。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    isHdHapticSupported: boolean;

    /**
     * 是否为本地设备。true表示本地设备，可直接触发振动；false表示远程设备，需在分布式场景下使用。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform [since 22]
     * @since 19 dynamic
     * @since 23 static
     */
    isLocalVibrator: boolean;
  }

  /**
   * 查询一个或所有设备的马达信息列表。适用于在触发振动前查询设备马达能力和多马达设备的马达ID，以便选择合适的马达触发振动。
   * 不传param时查询所有设备马达信息；传入VibratorInfoParam可查询指定设备或马达。返回VibratorInfo数组，包含deviceId、vibratorId、deviceName、
   * isHdHapticSupported、isLocalVibrator等属性，可用于startVibration (#vibratorstartvibration9)和stopVibration (#
   * vibratorstopvibration19)中指定马达和设备。
   *
   * @param { VibratorInfoParam } [param] - 指出需要查询的设备和马达信息。不传param时默认查询所有设备所有马达的信息。deviceId默认值为-1（查询全部设备），vibratorId默认值为0（查询该
   *     设备的全部马达）。
   * @returns { Array<VibratorInfo> } 马达设备的信息数组。每个元素包含deviceId、vibratorId、deviceName、isHdHapticSupported、isLocalVibrator等属性，可
   *     用于选择合适的马达触发振动或判断设备振动能力。
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform [since 22]
   * @since 19 dynamic
   * @since 23 static
   */
  function getVibratorInfoSync(param?: VibratorInfoParam): Array<VibratorInfo>;

  /**
   * 注册马达上线或下线事件的回调函数。当马达设备上线或下线时触发回调。
   * 当开发者需要实时感知马达设备的上下线状态变化时使用此接口。适用于分布式多设备场景中动态获取马达设备信息，以便在马达上线时及时触发振动或在下线时停止振动。注册成功后，当马达设备上线或下线时，系统将回调
   * VibratorStatusEvent对象，包含设备ID、马达数量、上下线状态等信息。回调中获取的deviceId可用于
   * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   * 和[stopVibration]{@link vibrator.stopVibration(param?: VibratorInfoParam)}等接口指定目标设备。
   * 注册回调后，需在合适的时机调用
   * [vibrator.off]{@link vibrator.off(type: 'vibratorStateChange', callback?: Callback<VibratorStatusEvent>)}注销回调，避免内存泄
   * 露。同一type重复注册同一callback不会覆盖，需先off再on。
   *
   * @param { 'vibratorStateChange' } type - 监听类型，该值固定为vibratorStateChange，表示马达上下线状态变化事件。
   * @param { Callback<VibratorStatusEvent> } callback - 回调函数。当马达设备上线或下线时触发，回调参数为VibratorStatusEvent对象，包含timestamp、deviceId、
   *     vibratorCount、isVibratorOnline等信息。回调中获取的deviceId可用于
   *     [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
   *     和[stopVibration]{@link vibrator.stopVibration(param?: VibratorInfoParam)}等接口指定目标设备。
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  function on(type: 'vibratorStateChange', callback: Callback<VibratorStatusEvent>): void;

  /**
   * 注销马达上线或下线事件的回调函数。
   * 当开发者不再需要监听马达上下线状态变化时使用此接口注销回调。传入callback时注销指定回调；不传callback时注销该类型下所有已注册的回调。注销成功后，不再触发对应的回调函数。若传入的callback未注册过，注销操作无效
   * 但不会报错。需先通过[vibrator.on]{@link vibrator.on_vibratorStateChange}注册回调后才能注销。同一type重复注册同一callback不会覆盖，需先off再on。
   *
   * @param { 'vibratorStateChange' } type - 监听类型，该值固定为vibratorStateChange，表示马达上下线状态变化事件。
   * @param { Callback<VibratorStatusEvent> } [callback] - 回调函数，需要注销的回调函数。不传此参数时注销所有vibratorStateChange类型的回调。使用场景：若仅需注销特定回调则传入对应
   *     callback；若需注销全部回调则不传此参数。
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  function off(type: 'vibratorStateChange', callback?: Callback<VibratorStatusEvent>): void;

  /**
   * Register a callback function to be called when a vibrator plugin or unplug event occurs.
   *
   * @param { Callback<VibratorStatusEvent> } callback - The callback function to be executed when
   *     <br> the event is triggered.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 23 static
   */
  function onVibratorStateChange(callback: Callback<VibratorStatusEvent>): void;

  /**
   * Unregister a callback function for vibrator plugin or unplug events.
   *
   * @param { Callback<VibratorStatusEvent> } [callback] - The callback function to be removed from the event listener.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 23 static
   */
  function offVibratorStateChange(callback?: Callback<VibratorStatusEvent>): void;

  /**
   * 振动设备上线、下线状态事件信息。当马达设备上线或下线时，通过[vibrator.on]{@link vibrator.on_vibratorStateChange}回调传递此对象。
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   * @since 23 static
   */
  interface VibratorStatusEvent {
    /**
     * 报告事件的时间戳。单位：ms（毫秒）。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 设备的ID。可用于
     * [startVibration]{@link vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>)}
     * 和[stopVibration]{@link vibrator.stopVibration(param?: VibratorInfoParam)}等接口指定目标设备。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * 设备上的马达的数量。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    vibratorCount: int;

    /**
     * 指示设备的上线和下线状态。true表示设备上线，可用于触发振动；false表示设备下线，此时该设备的振动不可用。
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    isVibratorOnline: boolean;
  }
}

export default vibrator;