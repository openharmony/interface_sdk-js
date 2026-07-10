/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
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
 * 本模块提供辅助应用查询能力，包括获取辅助应用列表、获取辅助应用启用状态、获取无障碍字幕配置等。
 *
 * @file
 * @kit AccessibilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type { Callback } from './@ohos.base';

/**
 * 辅助功能
 * 
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @crossplatform [since 20]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace accessibility {
  /**
   * 无障碍辅助应用类型。
   *
   * @unionmember { 'audible' } 表示具有听觉反馈。
   * @unionmember { 'generic' } 表示具有通用反馈。
   * @unionmember { 'haptic' } 表示具有触觉反馈。
   * @unionmember { 'spoken' } 表示具有语音反馈。
   * @unionmember { 'visual' } 表示具有视觉反馈。
   * @unionmember { 'all' } 表示以上所有类别。 [since 9]
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type AbilityType = 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all';

  /**
   * 应用所支持的目标动作，需要配置参数的目标动作已在描述中标明。
   *
   * @unionmember { 'accessibilityFocus' } 表示获得无障碍焦点操作。
   * @unionmember { 'clearAccessibilityFocus' } 表示清除无障碍焦点操作。
   * @unionmember { 'focus' } 表示获得焦点操作。
   * @unionmember { 'clearFocus' } 表示清除焦点操作。
   * @unionmember { 'clearSelection' } 表示清除选择操作。当前版本暂不支持。
   * @unionmember { 'click' } 表示点击操作。
   * @unionmember { 'longClick' } 表示长按操作。
   * @unionmember { 'cut' } 表示剪切操作。
   * @unionmember { 'copy' } 表示复制操作。
   * @unionmember { 'paste' } 表示粘贴操作。
   * @unionmember { 'select' } 表示选择操作。
   * @unionmember { 'setText' } 表示设置文本操作，需配置参数setText。
   * @unionmember { 'delete' } 表示删除操作。当前版本暂不支持。
   * @unionmember { 'scrollForward' } 表示向前滚动操作。
   * @unionmember { 'scrollBackward' } 表示向后滚动操作。
   * @unionmember { 'setSelection' } 表示选择操作，需配置参数selectTextBegin、selectTextEnd、selectTextInForWard。
   * @unionmember { 'setCursorPosition' } 表示设置光标位置操作，需配置参数offset。 [since 12]
   * @unionmember { 'home' } 表示返回桌面操作。 [since 12]
   * @unionmember { 'back' } 表示返回上一级操作。 [since 12]
   * @unionmember { 'recentTask' } 表示打开最近任务操作。 [since 12]
   * @unionmember { 'notificationCenter' } 表示打开通知栏操作。 [since 12]
   * @unionmember { 'controlCenter' } 表示打开控制中心操作。 [since 12]
   * @unionmember { 'common' } 表示没有特定操作，用于主动聚焦、主动播报等场景。 [since 12]
   * @unionmember { 'injectAction' } 表示注入动作，需配置参数injectActionType。 [since 26.0.0]
   * @unionmember {'executeCustomAction'} [since 26.0.0]
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type Action = 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
  'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
  'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
  'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common' | 'injectAction' | 'executeCustomAction';

  /**
   * 无障碍事件类型。
   *
   * @unionmember { 'accessibilityFocus' } 表示获得无障碍焦点的事件。
   * @unionmember { 'accessibilityFocusClear' } 表示清除无障碍焦点的事件。
   * @unionmember { 'click' } 表示点击组件的事件。
   * @unionmember { 'longClick' } 表示长按组件的事件。
   * @unionmember { 'focus' } 表示组件获得焦点的事件，当前版本暂不支持。
   * @unionmember { 'select' } 表示选择组件的事件。
   * @unionmember { 'hoverEnter' } 表示悬停进入组件的事件。
   * @unionmember { 'hoverExit' } 表示悬停离开组件的事件。
   * @unionmember { 'textUpdate' } 表示组件文本已更改的事件。
   * @unionmember { 'textSelectionUpdate' } 表示选定文本已更改的事件，当前版本暂不支持。
   * @unionmember { 'scroll' } 表示滚动视图的事件。
   * @unionmember { 'requestFocusForAccessibility' } 表示主动聚焦的事件。 [since 12]
   * @unionmember { 'announceForAccessibility' } 表示主动播报的事件。 [since 12]
   * @unionmember { 'requestFocusForAccessibilityNotInterrupt' } 表示主动聚焦不打断的事件。 [since 18]
   * @unionmember { 'announceForAccessibilityNotInterrupt' } 表示主动播报不打断的事件。 [since 18]
   * @unionmember { 'scrolling' } 表示滚动视图中有item被滚出屏幕的事件。 [since 18]
   * @unionmember { 'pageActive' } 表示页面变化的事件，值固定为'pageActive'字符串。 [since 23]
   * @unionmember { 'notificationUpdate' } 表示通知变化的事件，值固定为'notificationUpdate'字符串。 [since 26.0.0]
   * @unionmember {'focusInvisible'} [since 26.0.0]
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' | 'notificationUpdate' | 'focusInvisible';

  /**
   * 窗口变化类型。
   *
   * @unionmember { 'add' } 表示添加窗口的窗口变化事件，值固定为'add'字符串。
   * @unionmember { 'remove' } 表示一个窗口被删除的窗口变化事件，值固定为'remove'字符串。
   * @unionmember { 'bounds' } 表示窗口边界已更改的窗口变化事件，值固定为'bounds'字符串。
   * @unionmember { 'active' } 表示窗口变为活动或不活动的窗口变化事件，值固定为'active'字符串。
   * @unionmember { 'focus' } 表示窗口焦点发生变化的窗口变化事件，值固定为'focus'字符串。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type WindowUpdateType = 'add' | 'remove' | 'bounds' | 'active' | 'focus';

  /**
   * 辅助应用状态类型。
   *
   * @unionmember { 'enable' } 表示辅助应用已启用。
   * @unionmember { 'disable' } 辅助应用已禁用。
   * @unionmember { 'install' } 辅助应用已安装。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type AbilityState = 'enable' | 'disable' | 'install';

  /**
   * 辅助应用能力类型。
   *
   * @unionmember { 'retrieve' } 具有检索窗口内容的能力。
   * @unionmember { 'touchGuide' } 具有触摸探索模式的能力。
   * @unionmember { 'keyEventObserver' } 具有过滤按键事件的能力。
   * @unionmember { 'zoom' } 具有控制显示放大的能力，当前版本暂不支持。
   * @unionmember { 'gesture' } 具有执行手势动作的能力。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture';

  /**
   * 文本无障碍导航移动粒度。
   *
   * @unionmember { 'char' } 表示以字符为移动粒度遍历节点文本。
   * @unionmember { 'word' } 表示以词为移动粒度遍历节点文本。
   * @unionmember { 'line' } 表示以行为移动粒度遍历节点文本。
   * @unionmember { 'page' } 表示以页为移动粒度遍历节点文本。
   * @unionmember { 'paragraph' } 表示以段落为移动粒度遍历节点文本。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type TextMoveUnit = 'char' | 'word' | 'line' | 'page' | 'paragraph';

  /**
   * 判断是否启用了辅助应用，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数，如果辅助应用已启用，则返回 true；否则返回 false。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenAccessibilitySync
   */
  function isOpenAccessibility(callback: AsyncCallback<boolean>): void;

  /**
   * 判断是否启用了辅助应用，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象，如果辅助应用已启用，则返回 true；否则返回 false。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenAccessibilitySync
   */
  function isOpenAccessibility(): Promise<boolean>;

  /**
   * 查询当前系统内是否存在已开启的辅助应用。如需获取系统内辅助应用信息，推荐使用
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}。
   *
   * @returns { boolean } 表示当前系统内是否有辅助应用开启。true表示启用了一个或多个辅助应用，false表示未启用任何辅助应用。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 20]
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function isOpenAccessibilitySync(): boolean;

  /**
   * 判断触摸浏览模式是否开启，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数，如果触摸浏览模式已开启，则返回 true；否则返回 false。
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenTouchGuideSync
   */
  function isOpenTouchGuide(callback: AsyncCallback<boolean>): void;

  /**
   * 判断触摸浏览模式是否开启，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象，如果触摸浏览模式已开启，则返回 true；否则返回 false。
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenTouchGuideSync
   */
  function isOpenTouchGuide(): Promise<boolean>;

  /**
   * 是否开启了触摸浏览模式。
   *
   * @returns { boolean } 表示是否开启了触摸浏览模式。true表示开启了触摸浏览，false表示未开启触摸浏览。
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function isOpenTouchGuideSync(): boolean;

  /**
   * 查询辅助应用列表，使用callback异步回调。
   *
   * @param { AbilityType } abilityType - 辅助应用的类型。
   * @param { AbilityState } stateType - 辅助应用的状态。
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback - 回调函数，返回辅助应用信息列表。若返回成功，err为undefined，data为辅助应用信
   *     息列表；否则为错误对象。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.getAccessibilityExtensionList(abilityType: AbilityType, stateType: AbilityState, callback: AsyncCallback<Array<AccessibilityAbilityInfo>>)
   */
  function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * 查询辅助应用列表，使用Promise异步回调。
   *
   * @param { AbilityType } abilityType - 辅助应用的类型。
   * @param { AbilityState } stateType - 辅助应用的状态。
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Promise对象，返回辅助应用信息列表。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.getAccessibilityExtensionList(abilityType: AbilityType, stateType: AbilityState)
   */
  function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * 查询辅助应用列表，使用Promise异步回调。
   *
   * @param { AbilityType } abilityType - 辅助应用的类型。
   * @param { AbilityState } stateType - 辅助应用的状态。
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Promise对象，返回辅助应用信息列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAccessibilityExtensionList(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * 查询辅助应用列表，使用callback异步回调。
   *
   * @param { AbilityType } abilityType - 辅助应用的类型。
   * @param { AbilityState } stateType - 辅助应用的状态。
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback - 回调函数，返回辅助应用信息列表。若返回成功，err为undefined，data为辅助应用信
   *     息列表；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAccessibilityExtensionList(abilityType: AbilityType, stateType: AbilityState, callback: AsyncCallback<Array<AccessibilityAbilityInfo>>): void;

  /**
   * 查询当前系统内辅助应用列表，支持按条件查询。
   *
   * @param { AbilityType } abilityType - 辅助应用的类型。
   * @param { AbilityState } stateType - 辅助应用的状态。
   * @returns { Array<AccessibilityAbilityInfo> } 返回辅助应用信息列表。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 12 dynamic
   * @since 23 static
   */
  function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>;

  /**
   * 发送无障碍事件，使用callback异步回调。
   *
   * @param { EventInfo } event - 辅助事件对象。
   * @param { AsyncCallback<void> } callback - 回调函数，如果发送无障碍事件失败，则 AsyncCallback中err有数据返回。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>)
   */
  function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * 发送无障碍事件，使用Promise异步回调。
   *
   * @param { EventInfo } event - 无障碍事件对象。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.sendAccessibilityEvent(event: EventInfo)
   */
  function sendEvent(event: EventInfo): Promise<void>;

  /**
   * 发送无障碍事件，使用callback异步回调。
   *
   * @param { EventInfo } event - 辅助事件对象。
   * @param { AsyncCallback<void> } callback - 回调函数，如果发送无障碍事件失败，则 AsyncCallback中err有数据返回。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * 发送无障碍事件，使用Promise异步回调。
   *
   * @param { EventInfo } event - 无障碍事件对象。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function sendAccessibilityEvent(event: EventInfo): Promise<void>;

  /**
   * 监听辅助应用启用状态变化事件，使用callback异步回调。如需获取系统内辅助应用信息，推荐使用
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.off('accessibilityStateChange')]{@link accessibility.off(type: 'accessibilityStateChange', callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { 'accessibilityStateChange' } type - 监听的事件名，固定为‘accessibilityStateChange’，即辅助应用启用状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数，在辅助应用启用状态变化时将状态通过此函数进行通知。此状态为全局辅助应用启用状态。返回true表示已启用辅助应用，返回false表示已禁用辅助
   *     应用。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 20]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function on(type: 'accessibilityStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onAccessibilityStateChange(callback: Callback<boolean>): void;

  /**
   * 监听触摸浏览功能启用状态变化事件，使用callback异步回调。如需获取系统内辅助应用信息，推荐使用
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.off('touchGuideStateChange')]{@link accessibility.off(type: 'touchGuideStateChange', callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { 'touchGuideStateChange' } type - 监听的事件名，固定为‘touchGuideStateChange’，即触摸浏览启用状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数，在触摸浏览启用状态变化时将状态通过此函数进行通知。返回true表示触摸浏览功能已开启，返回false表示触摸浏览功能已关闭。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function on(type: 'touchGuideStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the touchGuide state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onTouchGuideStateChange(callback: Callback<boolean>): void;

  /**
   * 取消监听辅助应用启用状态变化事件，使用callback异步回调。
   *
   * @param { 'accessibilityStateChange' } type - 取消监听的事件名，固定为‘accessibilityStateChange’，即辅助应用启用状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数，取消指定callback对象的事件响应。需与
   *     [accessibility.on('accessibilityStateChange')]{@link accessibility.on(type: 'accessibilityStateChange', callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。 [since 7 - 19]
   * @param { Callback<boolean> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
   *     [accessibility.on('accessibilityStateChange')]{@link accessibility.on(type: 'accessibilityStateChange', callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。 [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 20]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function off(type: 'accessibilityStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offAccessibilityStateChange(callback?: Callback<boolean>): void;

  /**
   * 取消监听触摸浏览启用状态变化事件，使用callback异步回调。
   *
   * @param { 'touchGuideStateChange' } type - 取消监听的事件名，固定为‘touchGuideStateChange’，即触摸浏览启用状态变化事件。
   * @param { Callback<boolean> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
   *     [accessibility.on('touchGuideStateChange')]{@link accessibility.on(type: 'touchGuideStateChange', callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function off(type: 'touchGuideStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touchGuide state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offTouchGuideStateChange(callback?: Callback<boolean>): void;

  /**
   * 获取无障碍字幕配置管理实例。
   *
   * @returns { CaptionsManager } 无障碍字幕配置管理。
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamiconly
   * @deprecated since 12
   */
  function getCaptionsManager(): CaptionsManager;

  /**
   * 字幕配置管理，在调用CaptionsManager的方法前，需要先通过 [accessibility.getCaptionsManager()]{@link accessibility.getCaptionsManager}获取 
   * CaptionsManager实例。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  interface CaptionsManager {
    /**
     * 表示是否启用字幕配置。true表示字幕配置开启，false表示字幕配置关闭。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    enabled: boolean;
    /**
     * 表示字幕风格。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    style: CaptionsStyle;

    /**
     * 监听字幕配置启用状态变化事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
     * >
     * > - 调用此方法后，务必在对象生命周期结束前使用
     * > [off('enableChange')]{@link accessibility.CaptionsManager.off(type: 'enableChange', callback?: Callback<boolean>)}
     * > 取消监听，否则可能会导致崩溃。
     *
     * @param { 'enableChange' } type - 监听的事件名，固定为‘enableChange’，即字幕配置启用状态变化事件。
     * @param { Callback<boolean> } callback - 回调函数，在启用状态变化时将状态通过此函数进行通知。返回true表示字幕配置开启，返回false表示字幕配置关闭。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    on(type: 'enableChange', callback: Callback<boolean>): void;

    /**
     * Register the observe of the enable state.
     *
     * @param { Callback<boolean> } callback
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    onEnableChange(callback: Callback<boolean>): void;

    /**
     * 监听字幕风格变化事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
     * >
     * > - 调用此方法后，务必在对象生命周期结束前使用
     * > [off('styleChange')]{@link accessibility.CaptionsManager.off(type: 'styleChange', callback?: Callback<CaptionsStyle>)}
     * > 取消监听，否则可能会导致崩溃。
     *
     * @param { 'styleChange' } type - 监听的事件名，固定为‘styleChange’，即字幕风格变化事件。
     * @param { Callback<CaptionsStyle> } callback - 回调函数，在字幕风格变化时通过此函数进行通知。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    on(type: 'styleChange', callback: Callback<CaptionsStyle>): void;

    /**
     * Register the observer of the style.
     *
     * @param { Callback<CaptionsStyle> } callback
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    onStyleChange(callback: Callback<CaptionsStyle>): void;

    /**
     * 取消监听字幕配置启用状态变化事件，使用callback异步回调。
     *
     * @param { 'enableChange' } type - 取消监听的事件名，固定为‘enableChange’，即字幕配置启用状态变化事件。
     * @param { Callback<boolean> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
     *     [on('enableChange')]{@link accessibility.CaptionsManager.on(type: 'enableChange', callback: Callback<boolean>)}
     *     的callback一致。缺省时，表示注销所有已注册事件。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    off(type: 'enableChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the observe of the enable state.
     *
     * @param { Callback<boolean> } [callback]
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    offEnableChange(callback?: Callback<boolean>): void;

    /**
     * 取消字幕风格变化监听事件，使用callback异步回调。
     *
     * @param { 'styleChange' } type - 取消监听的事件名，固定为‘styleChange’，即字幕风格变化事件。
     * @param { Callback<CaptionsStyle> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
     *     [on('styleChange')]{@link accessibility.CaptionsManager.on(type: 'styleChange', callback: Callback<CaptionsStyle>)}
     *     的callback一致。缺省时，表示注销所有已注册事件。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void;

    /**
     * Unregister the observer of the style.
     *
     * @param { Callback<CaptionsStyle> } [callback]
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    offStyleChange(callback?: Callback<CaptionsStyle>): void;
  }

  /**
   * 字幕字体边缘类型。
   *
   * @unionmember { 'none' } 表示无效果。
   * @unionmember { 'raised' } 表示凸起效果。
   * @unionmember { 'depressed' } 表示凹陷效果。
   * @unionmember { 'uniform' } 表示轮廓效果。
   * @unionmember { 'dropShadow' } 表示阴影效果。
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  type CaptionsFontEdgeType = 'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow';
  /**
   * 字幕字体。
   *
   * @unionmember { 'default' } 表示默认字体。
   * @unionmember { 'monospacedSerif' } 表示等宽 Serif 字体。
   * @unionmember { 'serif' } 表示Serif 字体。
   * @unionmember { 'monospacedSansSerif' } 表示等宽 Sans Serif 字体。
   * @unionmember { 'sansSerif' } 表示Sans Serif 字体。
   * @unionmember { 'casual' } 表示非正式字体。
   * @unionmember { 'cursive' } 表示手写字体。
   * @unionmember { 'smallCapitals' } 表示小型大写字母字体。
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  type CaptionsFontFamily = 'default' | 'monospacedSerif' | 'serif' |
     'monospacedSansSerif' | 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals';
  /**
   * 字幕风格。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  interface CaptionsStyle {
    /**
     * 描述字幕字体。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontFamily: CaptionsFontFamily;
    /**
     * 描述字幕字体缩放系数，单位%，参数范围1~200。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontScale: int;
    /**
     * 描述字幕字体颜色。
     * 
     * number：HEX 格式颜色，支持 rgb 或 argb。
     * 
     * string：支持 '#rrggbb', '#rrggbbaa', '#rgb', '#rgba' 格式。
     * 
     * 例：不透明红色，number: 0xffff0000，string: '#ff0000', '#ff0000ff', '#f00', '#f00f'。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontColor: int | string;
    /**
     * 描述字幕字体边缘。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontEdgeType: CaptionsFontEdgeType;
    /**
     * 描述字幕背景颜色。
     * 
     * number：HEX 格式颜色，支持 rgb 或 argb。
     * 
     * string：支持 '#rrggbb', '#rrggbbaa', '#rgb', '#rgba' 格式。
     * 
     * 例：不透明红色，number: 0xffff0000，string: '#ff0000', '#ff0000ff', '#f00', '#f00f'。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor: int | string;
    /**
     * 描述字幕窗口颜色。
     * 
     * number：HEX 格式颜色，支持 rgb 或 argb。
     * 
     * string：支持 '#rrggbb', '#rrggbbaa', '#rgb', '#rgba' 格式。
     * 
     * 例：不透明红色，number: 0xffff0000，string: '#ff0000', '#ff0000ff', '#f00', '#f00f'。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    windowColor: int | string;
  }

  /**
   * 辅助应用信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AccessibilityAbilityInfo {
    /**
     * ability id。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * ability 名。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * Bundle名称。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * 关注的目标Bundle名称。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly targetBundleNames: Array<string>;

    /**
     * 辅助应用类型。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly abilityTypes: Array<AbilityType>;

    /**
     * 辅助应用能力列表。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly capabilities: Array<Capability>;

    /**
     * 辅助应用描述。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly description: string;

    /**
     * 辅助应用关注的无障碍事件列表。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly eventTypes: Array<EventType>;

    /**
     * 辅助应用是否在已安装的扩展服务列表中被隐藏，true表示隐藏服务，false表示显示服务。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly needHide: boolean;

    /**
     * 扩展应用在扩展服务列表中的名称。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly label: string;
  }

  /**
   * 界面变更事件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  class EventInfo {
    /**
     * 构造函数，通过JSON对象构造EventInfo实例。
     *
     * @param { Object } jsonObject - 包含 type、bundleName 和 triggerAction 三个字段的 JSON对象，详见示例。
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     */
    constructor(jsonObject: Object);

    /**
     * A constructor used to create a EventInfo object.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 static
     */
    constructor();

    /**
     * 构造函数，通过独立参数构造EventInfo实例。
     *
     * @param { EventType } type - 无障碍事件类型。
     * @param { string } bundleName - 目标应用名。
     * @param { Action } triggerAction - 触发事件的 Action。
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(type: EventType, bundleName: string, triggerAction: Action);

    /**
     * 无障碍事件类型，不可缺省。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    type: EventType;

    /**
     * 窗口变化类型。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    windowUpdateType?: WindowUpdateType;

    /**
     * 目标应用名；不可缺省。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 应与事件源组件类型对应，默认值为空。
     * 
     * 例如：
     * 
     * - 按钮Button类型->'Button'。
     * - 图片Image类型->'Image'。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    componentType?: string;

    /**
     * 事件源的页面ID，默认值为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    pageId ?: int;

    /**
     * 事件描述，根据实际场景设置，无特殊限制，默认值为空。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 触发事件的Action，不可缺省。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    triggerAction: Action;

    /**
     * 文本移动粒度，默认值为char。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    textMoveUnit?: TextMoveUnit;

    /**
     * 内容列表，根据实际场景设置，无特殊限制，默认值为空。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    contents?: Array<string>;

    /**
     * 最新内容，根据实际场景设置，无特殊限制，默认值为空。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    lastContent?: string;

    /**
     * 画面显示条目的开始序号，默认值为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    beginIndex?: int;

    /**
     * 当前条目序号，默认值为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    currentIndex?: int;

    /**
     * 画面显示条目的结束序号，默认值为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    endIndex?: int;

    /**
     * 条目总数，默认值为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    itemCount?: int;

    /**
     * 组件elementId，默认值为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    elementId?: int;

    /**
     * 主动播报的内容。当应用需要主动播报时，根据实际场景设置播报内容，无特殊限制，默认值为空。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    textAnnouncedForAccessibility?: string;

    /**
     * 主动播报的内容支持传入Resource类型，且只能传入string。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    textResourceAnnouncedForAccessibility?: Resource;

    /**
     * 主动聚焦的组件ID，默认值为空。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    customId?: string;
  }

  /**
   * 是否开启了屏幕朗读模式。
   *
   * @returns { boolean } 表示是否开启了屏幕朗读。true表示开启了屏幕朗读，false表示未开启屏幕朗读。
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 18 dynamic
   * @since 23 static
   */
  function isScreenReaderOpenSync(): boolean;

  /**
   * 监听屏幕朗读功能启用状态变化事件，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.off('screenReaderStateChange')]{@link accessibility.off(type: 'screenReaderStateChange', callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { 'screenReaderStateChange' } type - 监听的事件名，固定为‘screenReaderStateChange’，即屏幕朗读启用状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数，在屏幕朗读启用状态变化时将状态通过此函数进行通知。返回true表示屏幕朗读功能已开启，返回false表示屏幕朗读功能已关闭。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 18 dynamic
   */
  function on(type: 'screenReaderStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the screen reader state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onScreenReaderStateChange(callback: Callback<boolean>): void;

  /**
   * 取消监听屏幕朗读启用状态变化事件，使用callback异步回调。
   *
   * @param { 'screenReaderStateChange' } type - 取消监听的事件名，固定为‘screenReaderStateChange’，即屏幕朗读启用状态变化事件。
   * @param { Callback<boolean> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
   *     [accessibility.on('screenReaderStateChange')]{@link accessibility.on(type: 'screenReaderStateChange', callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 18 dynamic
   */
  function off(type: 'screenReaderStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the screen reader state changed.
   *
   * @param { Callback<boolean> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offScreenReaderStateChange(callback?: Callback<boolean>): void;

  /**
   * 监听触摸浏览功能下的单击/双击操作模式变化事件，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.off('touchModeChange')]{@link accessibility.off(type: 'touchModeChange', callback?: Callback<string>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { 'touchModeChange' } type - 监听的事件名，固定为‘touchModeChange’，即触摸浏览功能下的单击/双击操作模式变化事件。
   * @param { Callback<string> } callback - 回调函数，在触摸浏览功能下的单击/双击操作模式变化时将状态通过此函数进行通知。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   */
  function on(type: 'touchModeChange', callback: Callback<string>): void;

  /**
   * Register the observe of the touch mode changed.
   *
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onTouchModeChange(callback: Callback<string>): void;

  /**
   * 取消监听触摸浏览功能下的单击/双击操作模式变化事件，使用callback异步回调。
   *
   * @param { 'touchModeChange' } type - 取消监听的事件名，固定为‘touchModeChange’，即触摸浏览功能下的单击/双击操作模式变化事件。
   * @param { Callback<string> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
   *     [accessibility.on('touchModeChange')]{@link accessibility.on(type: 'touchModeChange', callback: Callback<string>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   */
  function off(type: 'touchModeChange', callback?: Callback<string>): void;

  /**
   * Unregister the observe of the touch mode changed.
   *
   * @param { Callback<string> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offTouchModeChange(callback?: Callback<string>): void;

  /**
   * 查询触摸浏览功能下的单击/双击操作模式。
   *
   * @returns { string } 表示当前操作模式。
   *     <br>- singleTouchMode：表示单击操作模式。
   *     <br>- doubleTouchMode：表示双击操作模式。
   *     <br>- none：表示未开启触摸浏览功能。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   * @since 23 static
   */
  function getTouchModeSync(): string;

  /**
   * 监听减弱动效功能启用状态变化事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.offAnimationReduceStateChange]{@link accessibility.offAnimationReduceStateChange(callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回true表示减弱动效模式已开启；返回false表示减弱动效模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAnimationReduceStateChange(callback: Callback<boolean>): void;

  /**
   * 取消监听减弱动效模式变化事件。使用callback异步回调。
   *
   * @param { Callback<boolean> } [callback] - 回调函数。取消指定callback对象的事件响应。需与
   *     [accessibility.onAnimationReduceStateChange]{@link accessibility.onAnimationReduceStateChange(callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAnimationReduceStateChange(callback?: Callback<boolean>): void;

  /**
   * 使用同步方法判断减弱动效模式是否开启。
   *
   * @returns { boolean } 表示是否开启减弱动效模式。返回true表示开启减弱动效模式；返回false表示未开启减弱动效模式。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAnimationReduceEnabledSync(): boolean;

  /**
   * 判断减弱动效模式是否开启。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示减弱动效模式已开启；返回false表示减弱动效模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAnimationReduceEnabled(): Promise<boolean>;

  /**
   * 监听闪烁提醒功能启用状态变化事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.offFlashReminderStateChange]{@link accessibility.offFlashReminderStateChange(callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回true表示闪烁提醒模式已开启；返回false表示闪烁提醒模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onFlashReminderStateChange(callback: Callback<boolean>): void;

  /**
   * 取消监听闪烁提醒模式变化事件。使用callback异步回调。
   *
   * @param { Callback<boolean> } [callback] - 回调函数。取消指定callback对象的事件响应。需与
   *     [accessibility.onFlashReminderStateChange]{@link accessibility.onFlashReminderStateChange(callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offFlashReminderStateChange(callback?: Callback<boolean>): void;

  /**
   * 使用同步方法判断闪烁提醒模式是否开启。
   *
   * @returns { boolean } 表示是否开启闪烁提醒模式。true表示开启闪烁提醒模式，false表示未开启闪烁提醒模式。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isFlashReminderEnabledSync(): boolean;

  /**
   * 判断闪烁提醒模式是否开启。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示闪烁提醒模式已开启；返回false表示闪烁提醒模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isFlashReminderEnabled(): Promise<boolean>;

  /**
   * 监听单声道音频功能启用状态变化事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.offAudioMonoStateChange]{@link accessibility.offAudioMonoStateChange(callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回true表示单声道音频模式已开启；返回false表示单声道音频模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAudioMonoStateChange(callback: Callback<boolean>): void;

  /**
   * 取消监听单声道音频模式变化事件。使用callback异步回调。
   *
   * @param { Callback<boolean> } [callback] - 回调函数。取消指定callback对象的事件响应。需与
   *     [accessibility.onAudioMonoStateChange]{@link accessibility.onAudioMonoStateChange(callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAudioMonoStateChange(callback?: Callback<boolean>): void;

  /**
   * 使用同步方法判断单声道音频模式是否开启。
   *
   * @returns { boolean } 表示是否开启单声道音频模式。true表示开启单声道音频模式，false表示未开启单声道音频模式。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAudioMonoEnabledSync(): boolean;

  /**
   * 判断单声道音频模式是否开启。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示单声道音频模式已开启；返回false表示单声道音频模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAudioMonoEnabled(): Promise<boolean>;

  /**
   * 监听关怀模式启用状态变化事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在对象生命周期结束前使用
   * > [accessibility.offSeniorModeStateChange]{@link accessibility.offSeniorModeStateChange(callback?: Callback<boolean>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回true表示关怀模式已开启；返回false表示关怀模式已关闭。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChange(callback: Callback<boolean>): void;

  /**
   * 取消监听关怀模式变化事件。使用callback异步回调。
   *
   * @param { Callback<boolean> } [callback] - 回调函数。返回true表示关怀模式已开启；返回false表示关怀模式已关闭。取消指定callback对象的事件响应。需与
   *     [accessibility.onSeniorModeStateChange]{@link accessibility.onSeniorModeStateChange(callback: Callback<boolean>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChange(callback?: Callback<boolean>): void;

  /**
   * 判断关怀模式是否开启。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示关怀模式已开启；返回false表示关怀模式已关闭。
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isSeniorModeEnabled(): Promise<boolean>;

  /**
   * Register an observer for this application's senior mode state changes.
   *
   * @param { Callback<boolean> } callback - Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChangeForSelf(callback: Callback<boolean>): void;

  /**
   * Unregister the observer for this application's senior mode state changes.
   *
   * @param { Callback<boolean> } [callback] - Asynchronous callback interface.
   *     <br>Default behavior: Unregister all callbacks for app senior mode state changes.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChangeForSelf(callback?: Callback<boolean>): void;

  /**
   * Check if this application's senior mode is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if senior mode is enabled; returns {@code false} otherwise.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSeniorModeStateForSelf(): Promise<boolean>;

  /**
   * Set this application's senior mode.
   *
   * @param { boolean } state - Indicates whether to enable senior mode for this application.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setSeniorModeStateForSelf(state: boolean): Promise<void>;
}

export default accessibility;

/**
 * 无障碍事件类型。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityEventType {
  /**
   * 表示获得无障碍焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ACCESSIBILITY_FOCUS = 0,

  /**
   * 表示清除无障碍焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ACCESSIBILITY_FOCUS_CLEAR = 1,

  /**
   * 表示点击组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_CLICK = 2,

  /**
   * 表示长按点击组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_LONG_CLICK = 3,

  /**
   * 表示选择组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SELECT = 4,

  /**
   * 表示悬停进入组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_HOVER_ENTER = 5,

  /**
   * 表示悬停离开组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_HOVER_EXIT = 6,

  /**
   * 表示组件获得焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOCUS = 7,

  /**
   * 表示组件文本已更改。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TEXT_UPDATE = 8,

  /**
   * 表示组件选定文本已更改。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TEXT_SELECTION_UPDATE = 9,

  /**
   * 表示滚动视图。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SCROLL = 10,

  /**
   * 表示主动聚焦。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY = 11,

  /**
   * 表示主动播报。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY = 12,

  /**
   * 表示主动聚焦不打断。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY_NOT_INTERRUPT = 13,

  /**
   * 表示主动播报不打断。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY_NOT_INTERRUPT = 14,

  /**
   * 表示组件信息改变。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ELEMENT_INFO_CHANGE = 15,

  /**
   * 表示滚动视图中有item被滚出屏幕。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SCROLLING = 16,

  /**
   * 表示添加窗口。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_ADD = 17,

  /**
   * 表示删除窗口。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_REMOVE = 18,

  /**
   * 表示窗口边界改变。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_BOUNDS = 19,

  /**
   * 表示切换窗口活动状态
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_ACTIVE = 20,

  /**
   * 表示窗口焦点发生变化。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_FOCUS = 21,

  /**
   * 表示窗口属性变化事件。例如：透明度、大小等。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_PROPERTY = 22,

  /**
   * 表示窗口层级变化。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_LAYER = 23,

  /**
   * 表示开始手指触摸事件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TOUCH_BEGIN = 24,

  /**
   * 表示结束手指触摸事件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TOUCH_END = 25,

  /**
   * 表示页面内容刷新。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CONTENT_UPDATE = 26,

  /**
   * 表示页面状态刷新。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_STATE_UPDATE = 27,

  /**
   * 表示页面打开。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_OPEN = 28,

  /**
   * 表示页面关闭。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CLOSE = 29,

  /**
   * 表示向左的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT = 30,

  /**
   * 表示先向左再向右的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_RIGHT = 31,

  /**
   * 表示先向左再向上的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_UP = 32,

  /**
   * 表示先向左再向下的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_DOWN = 33,

  /**
   * 表示向右的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT = 34,

  /**
   * 表示先向右再向左的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_LEFT = 35,

  /**
   * 表示先向右再向上的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_UP = 36,

  /**
   * 表示先向右再向下的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_DOWN = 37,

  /**
   * 表示向上的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP = 38,

  /**
   * 表示先向上再向左的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_LEFT = 39,

  /**
   * 表示先向上再向右的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_RIGHT = 40,

  /**
   * 表示先向上再向下的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_DOWN = 41,

  /**
   * 表示向下的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN = 42,

  /**
   * 表示先向下再向左的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_LEFT = 43,

  /**
   * 表示先向下再向右的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_RIGHT = 44,

  /**
   * 表示先向下再向上的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_UP = 45,

  /**
   * 表示双指单击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_SINGLE_TAP = 46,

  /**
   * 表示双指双击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_DOUBLE_TAP = 47,

  /**
   * 表示双指双击且长按的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_DOUBLE_TAP_AND_HOLD = 48,

  /**
   * 表示双指三击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_TRIPLE_TAP = 49,

  /**
   * 表示双指三击且长按的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_TRIPLE_TAP_AND_HOLD = 50,

  /**
   * 表示三指单击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SINGLE_TAP = 51,

  /**
   * 表示三指双击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_DOUBLE_TAP = 52,

  /**
   * 表示三指双击且长按的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_DOUBLE_TAP_AND_HOLD = 53,

  /**
   * 表示三指三击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_TRIPLE_TAP = 54,

  /**
   * 表示三指三击且长按的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_TRIPLE_TAP_AND_HOLD = 55,

  /**
   * 表示四指单击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SINGLE_TAP = 56,

  /**
   * 表示四指双击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP = 57,

  /**
   * 表示四指双击且长按的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP_AND_HOLD = 58,

  /**
   * 表示四指三击的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_TRIPLE_TAP = 59,

  /**
   * 表示四指三击且长按的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_TRIPLE_TAP_AND_HOLD = 60,

  /**
   * 表示三指向上滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_UP = 61,

  /**
   * 表示三指向下滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_DOWN = 62,

  /**
   * 表示三指向左滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_LEFT = 63,

  /**
   * 表示三指向右滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_RIGHT = 64,

  /**
   * 表示四指向上滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_UP = 65,

  /**
   * 表示四指向下滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_DOWN = 66,

  /**
   * 表示四指向左滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_LEFT = 67,

  /**
   * 表示四指向右滑动的手势。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_RIGHT = 68,

  /**
   * 表示页面发生变化。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  TYPE_PAGE_ACTIVE = 69,

  /**
   * 表示通知发生变化。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_NOTIFICATION_UPDATE = 70,

  /**
   * accessibility focus element is invisible type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_FOCUS_INVISIBLE = 71,

  /**
   * one finger double tap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_ONE_FINGER_DOUBLE_TAP = 72
}

/**
 * 表示无障碍节点元素可执行的操作枚举。
 * 
 * 无障碍节点元素是指，UI界面上可执行无障碍操作的一些组件，例如：按钮、文本输入框等组件。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityAction {
  /**
   * 表示获得无障碍焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  ACCESSIBILITY_FOCUS = 0,

  /**
   * 表示清除无障碍焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLEAR_ACCESSIBILITY_FOCUS = 1,

  /**
   * 表示组件获得焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  FOCUS = 2,

  /**
   * 表示清除组件焦点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLEAR_FOCUS = 3,

  /**
   * 表示点击组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLICK = 4,

  /**
   * 表示长按点击组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  LONG_CLICK = 5,

  /**
   * 表示剪切组件内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CUT = 6,

  /**
   * 表示拷贝组件内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  COPY = 7,

  /**
   * 表示粘贴内容到组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  PASTE = 8,

  /**
   * 表示选择组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SELECT = 9,

  /**
   * 表示设置组件的文本。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_TEXT = 10,

  /**
   * 表示向前滚动组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_FORWARD = 11,

  /**
   * 表示向后滚动组件。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_BACKWARD = 12,

  /**
   * 表示选定组件内文本范围。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_SELECTION = 13,

  /**
   * 表示设置组件内的光标位置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_CURSOR_POSITION = 14,

  /**
   * 表示组件返回首页操作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  HOME = 15,

  /**
   * 表示执行返回操作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 16,

  /**
   * 显示最近任务。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  RECENT_TASK = 17,

  /**
   * 显示通知中心。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  NOTIFICATION_CENTER = 18,

  /**
   * 显示控制中心。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CONTROL_CENTER = 19,

  /**
   * 对局部文本进行点击操作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SPAN_CLICK = 20,

  /**
   * 表示注入动作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  INJECT_ACTION = 21,

  /**
   * Execute custom action on a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  EXECUTE_CUSTOM_ACTION = 22
}

/**
 * 表示查询无障碍节点返回结果类型的枚举。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export enum FocusMoveResultCode {
  /**
   * 当前节点不支持查询操作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  NOT_SUPPORTED = -1,
  /**
   * 节点查询成功。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_SUCCESS = 0,
  /**
   * 节点查询成功，建议下一次查询使用参数bypassSelfDescendants可更快获取结果。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_SUCCESS_NEXT_BYPASS_DESCENDANTS = 1,
  /**
   * 节点查询失败，当前节点所在页面内无可聚焦节点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE = 2,
  /**
   * 节点查询失败，当前节点所在容器内无可聚焦节点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_IN_CHILD_TREE = 3,
  /**
   * 节点查询失败，未找到起始节点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_LOST_NODE = 4,
  /**
   * 返回节点不具备可聚焦属性，继续使用返回节点查询。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_NEXT = 5,
  /**
   * 返回节点不具备可聚焦属性，需要使用返回节点的所有子节点继续查询。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  DOUBLE_CHECK_CHILD_PROPERTY = 6,
  /**
   * 返回节点不具备可聚焦属性，需要使用返回节点的子节点列表中的最后一个节点继续查询。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  DOUBLE_CHECK_CHILD_PROPERTY_AND_GET_LAST = 7,
  /**
   * 节点在滚动组件内查询失败。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_IN_SCROLL = 8
}

/**
 * 表示注入动作的枚举。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum InjectActionType {
  /**
   * 表示注入单击动作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  CLICK = 1,
  /**
   * 表示注入双击动作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  DOUBLE_CLICK = 2,
  /**
   * 表示注入长按动作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  LONG_CLICK = 3
}

/**
 * Enumeration of scenes of accessibility focus.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum AccessibilityFocusScene {
  /**
   * Hover to move the accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  HOVER_FOCUS = 1,
  /**
   * Swipe finger to move the accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SWIPE_FOCUS = 2,
  /**
   * Move the accessibility focus after scrolling the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SCROLL_FOCUS = 3
}