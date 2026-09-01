/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import contextConstant from './@ohos.app.ability.contextConstant';
import image from './@ohos.multimedia.image';
import bundleManager from './@ohos.bundle.bundleManager';
import CompletionHandler from './@ohos.app.ability.CompletionHandler';
import window from './@ohos.window';

/**
 * StartOptions可以作为启动UIAbility接口（例如
 * [startAbility()]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
 * ）的入参，用于指定目标UIAbility启动时的选项，包括但不局限于窗口模式、目标UIAbility启动时所在的屏幕等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class StartOptions {
  /**
   * 启动UIAbility时的窗口模式，详见[WindowMode]{@link ./@ohos.app.ability.AbilityConstant:AbilityConstant.WindowMode}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  windowMode?: int;

  /**
   * 分屏比首选项的类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  splitRatio?: window.SplitRatioPreference;

  /**
   * 屏幕ID，取值为大于等于-1的整数。
   * 
   * - 取值为-1，表示当前屏幕。
   * - 取值为0，表示主屏幕。
   * - 取值为正整数，表示指定ID的屏幕。
   * 
   * **说明**：
   * 
   * 从API version 14开始，默认值是-1，即当前屏幕。
   * 
   * 在API version 14之前版本，默认值为0，即主屏幕。
   *
   * @type { ?number } [since 9 - 10]
   * @type { ?long } [since 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  displayId?: long;

  /**
   * 启动UIAbility时是否具有动画效果。
   * 
   * 传入true时，跟随系统默认动画效果。传入false时，表示关闭启动UIAbility动画效果，仅在[自由窗口状态](docroot://windowmanager/window-terminology.md#自由窗口)的情况下
   * 生效。
   * 
   * 此参数不填时，默认为undefined，跟随系统默认动画效果。
   * 
   * 从<!--RP2-->OpenHarmony 6.1<!--RP2End-->开始支持。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  withAnimation?: boolean;

  /**
   * 以指定displayId的屏幕的左顶点为原点，窗口在x轴方向偏移量，单位为px，值为正表示在原点右侧，值为负表示在原点左侧。该参数为整数，非整数将向下取整。当窗口左顶点超出指定displayId的屏幕区域时，限制窗口在指定
   * displayId的屏幕范围内可见。配置该字段时，建议同时配置windowTop。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  windowLeft?: int;

  /**
   * 以指定displayId的屏幕的左顶点为原点，窗口在y轴方向偏移量，单位为px，值为正表示在原点下方，值为负表示在原点上方。该参数为整数，非整数将向下取整。当窗口顶部超出指定displayId的屏幕区域时，限制窗口在指定
   * displayId的屏幕范围内可见。配置该字段时，建议同时配置windowLeft。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  windowTop?: int;

  /**
   * 窗口的宽度，单位为px。
   * 
   * 取值范围为[minWindowWidth, maxWindowWidth]，取值范围单位为vp，可参考[vp2px]{@link @ohos.arkui.UIContext:UIContext.vp2px}换算为对应的px值。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  windowWidth?: int;

  /**
   * 窗口的高度，单位为px。
   * 
   * 取值范围为[minWindowHeight, maxWindowHeight]，取值范围单位为vp，可参考[vp2px]{@link @ohos.arkui.UIContext:UIContext.vp2px}换算为对应的px值
   * 。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  windowHeight?: int;

  /**
   * 窗口是否获焦。默认是true，表示窗口获焦。
   * 
   * **约束：**
   * 
   * 1.该功能仅在2in1和Tablet设备上生效。
   * 
   * 2.仅在[UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility}中生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  windowFocused?: boolean;

  /**
   * UIAbility启动后的进程模式。
   * 
   * **约束：**
   * 
   * 1.该功能仅在2in1和Tablet设备上生效。
   * 
   * 2.仅在[UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility}中生效。
   * 
   * 3.processMode和startupVisibility必须同时设置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  processMode?: contextConstant.ProcessMode;

  /**
   * UIAbility启动后的可见性。当用户设置目标UIAbility为不可见时，目标UIAbility的窗口不会显示在前台，dock栏也不会有图标，同时目标UIAbility的onForeground生命周期不会被调用。
   * 
   * **约束：**
   * 
   * 1.该功能仅在2in1和Tablet设备上生效。
   * 
   * 2.仅在[UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility}中生效。
   * 
   * 3.processMode和startupVisibility必须同时设置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startupVisibility?: contextConstant.StartupVisibility;

  /**
   * 启动当前应用的UIAbility时，启动页所显示的图标。如果未配置该字段，则默认采用module.json5文件中startWindowIcon字段的配置。
   * 
   * **约束：**
   * 
   * - 启动其他应用的UIAbility时，该字段不生效。
   * - 该功能仅在2in1和Tablet设备上生效。
   * - 仅在[UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility}中生效。
   * - 图片数据大小限制为600MB。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  startWindowIcon?: image.PixelMap;

  /**
   * 启动当前应用的UIAbility时，启动页所显示的背景颜色。固定为ARGB格式, 如：`#E5FFFFFF`。如果未配置该字段，则默认采用module.json5文件中startWindowBackground字段的配置。
   * 
   * **约束：**
   * 
   * - 启动其他应用的UIAbility时，该字段不生效。
   * - 该功能仅在2in1和Tablet设备上生效。
   * - 仅在[UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility}中生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  startWindowBackgroundColor?: string;

  /**
   * 启动UIAbility时，指定窗口是否显示最大化/窗口化/分屏按键。如果未配置该字段，则默认采用该UIAbility对应的
   * [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中
   * [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)的supportWindowMode字段取值。
   * 
   * - FULL_SCREEN：支持全屏模式。
   * - FLOATING：支持悬浮窗模式。
   * - SPLIT：支持分屏模式。通常需要配合FULL_SCREEN或FLOATING一起使用，不建议只配置SPLIT。当仅配置SPLIT时，2in1设备上的窗口默认为悬浮窗模式，支持进入分屏模式；Tablet设备上的窗口默认为全屏模
   * 式，支持进入分屏模式。 
   * 
   * 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下同时配置FULL_SCREEN和SPLIT时，如果应用的
   * [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)小于15，窗口将以悬浮窗模式启动；如果应用的
   * [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)大于等于15，窗口将以全屏模式启动。 
   * 
   * **约束：**
   * 
   * <!--RP1-->该功能仅在2in1和Tablet设备上生效。<!--RP1End-->
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  supportWindowModes?: Array<bundleManager.SupportWindowMode>;

  /**
   * 窗口最大的高度，单位为vp，可以通过[getWindowLimitsVP]{@link @ohos.window.d.ts:window.getWindowLimitsVP}获得当前窗口的尺寸限制。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 17 dynamic
   * @since 23 static
   */
  maxWindowHeight?: int;

  /**
   * 窗口最小的宽度，单位为vp，可以通过[getWindowLimitsVP]{@link @ohos.window.d.ts:window.getWindowLimitsVP}获得当前窗口的尺寸限制。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 17 dynamic
   * @since 23 static
   */
  minWindowWidth?: int;

  /**
   * 窗口最小的高度，单位为vp，可以通过[getWindowLimitsVP]{@link @ohos.window.d.ts:window.getWindowLimitsVP}获得当前窗口的尺寸限制。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 17 dynamic
   * @since 23 static
   */
  minWindowHeight?: int;

  /**
   * 窗口最大的宽度，单位为vp，可以通过[getWindowLimitsVP]{@link @ohos.window.d.ts:window.getWindowLimitsVP}获得当前窗口的尺寸限制。
   * 
   * **约束：**
   * 
   * 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 17 dynamic
   * @since 23 static
   */
  maxWindowWidth?: int;

  /**
   * 拉起应用结果的操作类，用于处理拉起应用的结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  completionHandler?: CompletionHandler;

  /**
   * 启动当前应用的UIAbility时，控制是否隐藏窗口的启动页，true表示隐藏启动页，false表示不隐藏启动页。启动页介绍和规格详见
   * [StartWindow](docroot://quick-start/module-configuration-file.md#startwindow标签)。
   * 
   * **约束：**
   * 
   * 1.该功能仅在2in1设备和自由多窗模式下的Tablet设备上生效。
   * 
   * 2.该功能仅在启动当前应用的UIAbility时生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  hideStartWindow?: boolean;

  /**
   * 启动UIAbility时的窗口参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  windowCreateParams?: window.WindowCreateParams;
}

export default StartOptions;