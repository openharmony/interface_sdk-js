/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * AccessibilityExtensionAbility基于ExtensionAbility框架，提供辅助功能扩展业务的能力。
 *
 * @file 辅助功能扩展能力
 * @kit AccessibilityKit
 */

import type accessibility from './@ohos.accessibility';
import { AccessibilityEventType } from './@ohos.accessibility';
import type { KeyEvent } from './@ohos.multimodalInput.keyEvent';
/*** if arkts dynamic */
import type {
  AccessibilityElement as _AccessibilityElement,
  ElementAttributeValues as _ElementAttributeValues,
  FocusDirection as _FocusDirection,
  FocusType as _FocusType,
  WindowType as _WindowType,
  Rect as _Rect,
  Parameter as _Parameter,
  FocusRule as _FocusRule,
  FocusCondition as _FocusCondition,
  FocusMoveResult as _FocusMoveResult,
  AccessibilityVirtualNode as _AccessibilityVirtualNode,
  TouchPosition as _TouchPosition
} from './application/AccessibilityExtensionContext';
import type * as _AccessibilityExtensionContext from './application/AccessibilityExtensionContext';
/*** endif */
/*** if arkts static */
import type {
  AccessibilityElement as _AccessibilityElement,
  FocusDirection as _FocusDirection,
  WindowType as _WindowType,
  Rect as _Rect,
  Parameter as _Parameter,
  FocusRule as _FocusRule,
  FocusCondition as _FocusCondition,
  FocusMoveResult as _FocusMoveResult,
  AccessibilityVirtualNode as _AccessibilityVirtualNode,
  TouchPosition as _TouchPosition
} from './application/AccessibilityExtensionContext';
import AccessibilityExtensionContext from './application/AccessibilityExtensionContext';
/*** endif */

/**
 * 表示无障碍节点元素，请参考[AccessibilityElement]{@link ./application/AccessibilityExtensionContext:AccessibilityElement}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type AccessibilityElement = _AccessibilityElement;

/**
 * 表示节点元素具备的属性名称及属性值类型信息，请参考
 * [ElementAttributeValues]{@link ./application/AccessibilityExtensionContext:ElementAttributeValues}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type ElementAttributeValues = _ElementAttributeValues;

/**
 * 表示查询下一焦点元素的方向，请参考[FocusDirection]{@link ./application/AccessibilityExtensionContext:FocusDirection}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type FocusDirection = _FocusDirection;

/**
 * 表示[ElementAttributeValues]{@link ./application/AccessibilityExtensionContext:ElementAttributeValues}的属性名称。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type ElementAttributeKeys = keyof ElementAttributeValues;

/**
 * 表示查询焦点元素的类型，请参考[FocusType]{@link ./application/AccessibilityExtensionContext:FocusType}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type FocusType = _FocusType;

/**
 * 表示窗口的类型，请参考[WindowType]{@link ./application/AccessibilityExtensionContext:WindowType}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type WindowType = _WindowType;

/**
 * 表示矩形区域，请参考[Rect]{@link ./application/AccessibilityExtensionContext:Rect}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type Rect = _Rect;

/**
 * 无障碍节点元素执行特定操作时，为操作提供具体设置的参数值，请参考[Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export type Parameter = _Parameter;

/**
 * 表示辅助功能扩展的上下文环境，请参考
 * [AccessibilityExtensionContext]{@link ./application/AccessibilityExtensionContext:AccessibilityExtensionContext}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 */
export type AccessibilityExtensionContext = _AccessibilityExtensionContext.default;

/**
 * 表示查找可聚焦节点时，如何判断起始节点及其子节点的聚焦能力，请参考[FocusRule]{@link ./application/AccessibilityExtensionContext:FocusRule}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusRule = _FocusRule;

/**
 * 表示查询可聚焦节点方式，请参考[FocusCondition]{@link ./application/AccessibilityExtensionContext:FocusCondition}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusCondition = _FocusCondition;

/**
 * 查询无障碍节点返回值类型，请参考[FocusMoveResult]{@link ./application/AccessibilityExtensionContext:FocusMoveResult}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusMoveResult = _FocusMoveResult;

/**
 * 无障碍虚拟节点，请参考[AccessibilityVirtualNode]{@link ./application/AccessibilityExtensionContext:AccessibilityVirtualNode}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export type AccessibilityVirtualNode = _AccessibilityVirtualNode;

/**
 * 触摸点击位置，请参考[TouchPosition]{@link ./application/AccessibilityExtensionContext:TouchPosition}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export type TouchPosition = _TouchPosition;

/**
 * 辅助功能扩展的上下文环境，请参考
 * [AccessibilityExtensionContext]{@link ./application/AccessibilityExtensionContext:AccessibilityExtensionContext}。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 23 static
 */

export { AccessibilityExtensionContext };

/**
 * AccessibilityExtensionAbility基于ExtensionAbility框架，提供无障碍扩展业务的能力，包括连接无障碍服务、断开无障碍服务、处理无障碍事件和处理无障碍按键事件等。
 * 
 * **生命周期流程：** onAccessibilityConnect（连接回调，用于初始化）→ onAccessibilityEventInfo/onAccessibilityKeyEvent（处理无障碍事件和按键事件）→ 
 * onAccessibilityDisconnect（断开回调，用于资源回收）。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare class AccessibilityExtensionAbility {
  /**
   * 表示辅助功能扩展的上下文环境。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  context: AccessibilityExtensionContext;

  /**
   * 用户启用AccessibilityExtensionAbility时，系统服务完成连接后回调此接口，可在该方法中执行初始化业务逻辑操作。该方法可选择性重写。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onConnect(): void;

  /**
   * 用户停用AccessibilityExtensionAbility时，系统服务完成断开连接后回调此接口，可在该方法中执行资源回收和退出业务操作。该方法可选择性重写。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onDisconnect(): void;

  /**
   * 当无障碍事件发生时回调此接口，可在该方法中根据事件信息进行业务逻辑处理。通常需要重写该方法。
   *
   * @param { AccessibilityEvent } event - 无障碍事件信息。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onAccessibilityEvent(event: AccessibilityEvent): void;

  /**
   * 当无障碍事件发生时，系统将事件分发至已连接的AccessibilityExtensionAbility并回调该接口，可根据事件信息处理业务逻辑。通常需要重写。事件类型的详细说明请参见
   * [AccessibilityEventType]{@link @ohos.accessibility:AccessibilityEventType}。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityEventInfo } event - 无障碍事件信息。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  onAccessibilityEventInfo(event: AccessibilityEventInfo): void;

  /**
   * 在按键按下时回调此接口，可在该方法中根据业务判断是否消费事件。该方法可选择性重写。
   *
   * @param { KeyEvent } keyEvent - 按键事件。
   * @returns { boolean } 返回true表示此事件被消费，不会继续传递。
   *     <br>返回false表示此事件未被消费，会继续传递。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onKeyEvent(keyEvent: KeyEvent): boolean;

  /**
   * 连接无障碍服务成功后的回调函数。
   * 
   * 用户启用AccessibilityExtensionAbility时，系统服务完成连接后回调该接口，通知Ability已成功连接。开发者可在该方法中完成初始化业务逻辑操作，该方法可选择性重写。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  onAccessibilityConnect(): void;

  /**
   * 断开无障碍服务成功后的回调函数。
   * 
   * 用户停用AccessibilityExtensionAbility时，系统服务完成断开连接后回调该接口，可在该方法中执行资源回收和退出业务操作。该方法可选择性重写。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  onAccessibilityDisconnect(): void;

  /**
   * 在按键按下时回调该接口，可在该方法中根据业务判断是否消费事件。该方法可选择性重写。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { KeyEvent } keyEvent - 按键事件。
   * @returns { boolean } 返回true表示此事件被消费，不会继续传递。
   *     <br>返回false表示此事件未被消费，会继续传递。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean;
}

export default AccessibilityExtensionAbility;

/**
 * 无障碍事件信息。无障碍事件由系统无障碍服务在用户操作或界面变化时生成，通过eventType标识事件类别（包括无障碍事件类型、窗口变化类型、触摸浏览事件类型、手势事件类型、页面更新类型），辅助功能扩展可通过
 * onAccessibilityEvent回调接收并处理这些事件。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare interface AccessibilityEvent {
  /**
   * 具体事件类型，用于标识当前无障碍事件的类别。
   * 
   * EventType：无障碍事件类型；
   * 
   * WindowUpdateType：窗口变化类型；
   * 
   * TouchGuideType：触摸浏览事件类型；
   * 
   * GestureType：手势事件类型；
   * 
   * PageUpdateType：页面更新类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  eventType: accessibility.EventType | accessibility.WindowUpdateType |
        TouchGuideType | GestureType | PageUpdateType;

  /**
   * 发生事件的目标元素。当无障碍事件涉及具体元素时，此属性包含该元素信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  target?: AccessibilityElement;

  /**
   * 事件时间戳，取值范围为非负整数，单位为毫秒，默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  timeStamp?: long;

  /**
   * 主动聚焦的元素ID。主动聚焦指应用通过无障碍服务主动将焦点聚焦到指定元素上，与用户手动导航聚焦不同。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  elementId?: long;

  /**
   * 主动播报的内容。当应用需要主动播报时根据实际场景设置播报内容，无特殊限制，默认为空字符串。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  textAnnouncedForAccessibility?: string;

  /**
   * 针对TextArea、TextInput、SearchField、RichEdit组件，当文本内容有新增或删除时，携带新增或删除的文本内容。根据实际场景设置，无特殊限制，默认为空字符串。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20 dynamiconly
   */
  extraInfo?: string;
}

/**
 * 无障碍事件信息。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export declare interface AccessibilityEventInfo {
  /**
   * 无障碍事件类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  eventType: AccessibilityEventType;

  /**
   * 发生事件的目标组件。当无障碍事件涉及具体组件时，此属性包含该组件信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  target?: AccessibilityElement;

  /**
   * 事件时间戳，单位为毫秒，默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  timestamp?: long;

  /**
   * 针对TextArea、TextInput、SearchField、RichEdit组件，当组件文本内容发生增删变化时，此属性表示增删的具体文本内容。默认值为空字符串。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extraInfo?: string;
}

/**
 * 手势事件类型。手势事件在用户执行特定手势操作时由无障碍服务触发，辅助功能扩展可通过onAccessibilityEvent回调接收并处理对应的手势事件。
 *
 * @unionmember { 'left' } 表示向左的手势。
 * @unionmember { 'leftThenRight' } 表示先向左再向右的手势。
 * @unionmember { 'leftThenUp' } 表示先向左再向上的手势。
 * @unionmember { 'leftThenDown' } 表示先向左再向下的手势。
 * @unionmember { 'right' } 表示向右的手势。
 * @unionmember { 'rightThenLeft' } 表示先向右再向左的手势。
 * @unionmember { 'rightThenUp' } 表示先向右再向上的手势。
 * @unionmember { 'rightThenDown' } 表示先向右再向下的手势。
 * @unionmember { 'up' } 表示向上的手势。
 * @unionmember { 'upThenLeft' } 表示先向上再向左的手势。
 * @unionmember { 'upThenRight' } 表示先向上再向右的手势。
 * @unionmember { 'upThenDown' } 表示先向上再向下的手势。
 * @unionmember { 'down' } 表示向下的手势。
 * @unionmember { 'downThenLeft' } 表示先向下再向左的手势。
 * @unionmember { 'downThenRight' } 表示先向下再向右的手势。
 * @unionmember { 'downThenUp' } 表示先向下再向上的手势。
 * @unionmember { 'twoFingerSingleTap' } 表示双指单击的手势。 [since 11]
 * @unionmember { 'twoFingerDoubleTap' } 表示双指双击的手势。 [since 11]
 * @unionmember { 'twoFingerDoubleTapAndHold' } 表示双指双击长按的手势。 [since 11]
 * @unionmember { 'twoFingerTripleTap' } 表示双指三击的手势。 [since 11]
 * @unionmember { 'twoFingerTripleTapAndHold' } 表示双指三击长按的手势。 [since 11]
 * @unionmember { 'threeFingerSingleTap' } 表示三指单击的手势。 [since 11]
 * @unionmember { 'threeFingerDoubleTap' } 表示三指双击的手势。 [since 11]
 * @unionmember { 'threeFingerDoubleTapAndHold' } 表示三指双击长按的手势。 [since 11]
 * @unionmember { 'threeFingerTripleTap' } 表示三指三击的手势。 [since 11]
 * @unionmember { 'threeFingerTripleTapAndHold' } 表示三指三击长按的手势。 [since 11]
 * @unionmember { 'fourFingerSingleTap' } 表示四指单击的手势。 [since 11]
 * @unionmember { 'fourFingerDoubleTap' } 表示四指双击的手势。 [since 11]
 * @unionmember { 'fourFingerDoubleTapAndHold' } 表示四指双击长按的手势。 [since 11]
 * @unionmember { 'fourFingerTripleTap' } 表示四指三击的手势。 [since 11]
 * @unionmember { 'fourFingerTripleTapAndHold' } 表示四指三击长按的手势。 [since 11]
 * @unionmember { 'threeFingerSwipeUp' } 表示三指向上滑动的手势。 [since 11]
 * @unionmember { 'threeFingerSwipeDown' } 表示三指向下滑动的手势。 [since 11]
 * @unionmember { 'threeFingerSwipeLeft' } 表示三指向左滑动的手势。 [since 11]
 * @unionmember { 'threeFingerSwipeRight' } 表示三指向右滑动的手势。 [since 11]
 * @unionmember { 'fourFingerSwipeUp' } 表示四指向上滑动的手势。 [since 11]
 * @unionmember { 'fourFingerSwipeDown' } 表示四指向下滑动的手势。 [since 11]
 * @unionmember { 'fourFingerSwipeLeft' } 表示四指向左滑动的手势。 [since 11]
 * @unionmember { 'fourFingerSwipeRight' } 表示四指向右滑动的手势。 [since 11]
 * @unionmember { 'oneFingerDoubleTap' } 表示单指双击的手势。 [since 26.0.0]
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamiconly
 */
type GestureType = 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
  'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
  'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
  'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' |
  'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' |
  'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' |
  'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' |
  'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' |
  'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' |
  'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight' | 'oneFingerDoubleTap';

/**
 * 页面更新类型。页面更新事件在页面内容或状态发生变化时由无障碍服务触发，辅助功能扩展可通过onAccessibilityEvent回调接收并处理对应的页面更新事件。
 *
 * @unionmember { 'pageContentUpdate' } 表示页面内容更新。
 * @unionmember { 'pageStateUpdate' } 表示页面状态更新。
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
type PageUpdateType = 'pageContentUpdate' | 'pageStateUpdate';

/**
 * 触摸浏览事件类型。触摸浏览是无障碍辅助功能中的一种交互模式，用户在该模式下通过触摸探索界面元素而非直接激活。
 *
 * @unionmember { 'touchBegin' } 表示触摸浏览时开始触摸。
 * @unionmember { 'touchEnd' } 表示触摸浏览时结束触摸。
 * @unionmember { 'touchGuideGesture' } 表示触摸浏览手势。 [since 26.0.0]
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
type TouchGuideType = 'touchBegin' | 'touchEnd' | 'touchGuideGesture';