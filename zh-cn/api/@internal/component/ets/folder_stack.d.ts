/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 窗口模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare type WindowStatusType = import('../api/@ohos.window').default.WindowStatusType;

/**
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface FolderStackOptions {
  /**
   * 定义悬停态会被移到上半屏的子组件的id数组。
   * 
   * 当悬停触发时，upperItems数组中的子组件自动避让折叠屏折痕区后移到上半屏，其它组件堆叠在下半屏区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  upperItems?: Array<string>;
}

/**
 * FolderStack继承于[Stack]{@link stack}(层叠布局)控件，新增了<!--RP1-->折叠屏悬停<!--RP1End-->能力，通过在FolderStack的配置项
 * [FolderStackOptions]{@link FolderStackOptions}的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。
 * 
 * > **说明：**
 * 
 * > 该组件的悬停态能力针对<!--RP2-->双折叠<!--RP2End-->设计，只在双折叠设备生效。
 * >
 * > 当该组件的父组件为[if/else：条件渲染](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)节点时，折叠屏悬停能力将会失效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @noninterop
 * @since 11 dynamic
 */
interface FolderStackInterface {
  /**
   *
   * @param { object } value - id of children need to be show in upperItem [since 11 - 17]
   * @param { FolderStackOptions } [options] - FolderStack的配置项。 [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (options?: FolderStackOptions): FolderStackAttribute;
}

/**
 * 当折叠状态改变的时候回调，仅在横屏状态下生效。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface OnFoldStatusChangeInfo {
  /**
   * 当前设备的折叠状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  foldStatus: FoldStatus;
}

/**
 * 当前设备的折叠状态。
 *
 * @param { OnFoldStatusChangeInfo } event - 当前设备的折叠状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnFoldStatusChangeCallback = (event: OnFoldStatusChangeInfo) => void;

/**
 * 当前设备的悬停状态改变时触发的回调。
 *
 * @param { HoverEventParam } param - 当前设备与悬停状态相关的参数，包括设备的折叠状态、悬停状态、应用方向以及窗口模式枚举。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnHoverStatusChangeCallback = (param: HoverEventParam) => void;

/**
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @noninterop
 * @since 11 dynamic
 */
declare class FolderStackAttribute extends CommonMethod<FolderStackAttribute> {
  /**
   * 设置子组件在容器内的对齐方式。该属性与[align]{@link CommonMethod#align(value: Alignment)}同时设置时，后设置的属性生效。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Alignment } value - 子组件在容器内的对齐方式。<br/>默认值：Alignment.Center <br />非法值：按默认值处理。
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  alignContent(value: Alignment): FolderStackAttribute;

  /**
   * 当前设备的折叠状态改变时触发回调，仅在横屏状态下生效。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } callback - 当前设备的折叠状态改变时触发的回调。 [since 11 - 17]
   * @param { OnFoldStatusChangeCallback } callback - 当前设备的折叠状态改变时触发的回调。 [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFolderStateChange(callback: OnFoldStatusChangeCallback): FolderStackAttribute;

  /**
   * 当前设备的悬停状态改变时触发回调。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } handler - 当前设备的悬停状态改变时触发的回调。 [since 12 - 17]
   * @param { OnHoverStatusChangeCallback } handler - 当前设备的悬停状态改变时触发的回调。 [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onHoverStatusChange(handler: OnHoverStatusChangeCallback): FolderStackAttribute;

  /**
   * 设置是否使用默认动效。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } value - 是否使用默认动效。<br/>默认值：true，设置true表示使用默认动效，设置false表示不使用默认动效。<br />非法值：按默认值处理。
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAnimation(value: boolean): FolderStackAttribute;

  /**
   * 设置是否开启自动旋转，仅在系统自动旋转关闭时该属性生效。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } value - 是否开启自动旋转。<br/>默认值：true，设置true表示FolderStack在半折叠状态（见[FoldStatus]{@link FoldStatus}）进行布局时开启
   *     自动旋转，设置false表示关闭自动旋转。该属性不区分设备类型。<br />非法值：按默认值处理。
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  autoHalfFold(value: boolean): FolderStackAttribute;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface HoverEventParam {
  /**
   * 当前设备的折叠状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  foldStatus: FoldStatus;

  /**
   * 当前是否为悬停态。设置为true时表示当前为悬停态，设置为false时表示当前为非悬停态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  isHoverMode: boolean;

  /**
   * 当前应用方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  appRotation: AppRotation;

  /**
   * 窗口模式枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  windowStatusType: WindowStatusType;
}
/**
 * FolderStack继承于[Stack]{@link stack}(层叠布局)控件，新增了<!--RP1-->折叠屏悬停<!--RP1End-->能力，通过在FolderStack的配置项
 * [FolderStackOptions]{@link FolderStackOptions}的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。
 * 
 * > **说明：**
 * 
 * > 该组件的悬停态能力针对<!--RP2-->双折叠<!--RP2End-->设计，只在双折叠设备生效。
 * >
 * > 当该组件的父组件为[if/else：条件渲染](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)节点时，折叠屏悬停能力将会失效。
 * 
 * ###### 子组件
 * 
 * 可以包含多个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @noninterop
 * @since 11 dynamic
 */
declare const FolderStack: FolderStackInterface;

/**
 * Defines FolderStack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
declare const FolderStackInstance: FolderStackAttribute;