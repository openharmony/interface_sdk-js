/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit AccessibilityKit
 */

/*** if arkts 1.1&1.2 */
import config from '@ohos.accessibility.config';
import accessibility from '@ohos.accessibility';
import AccessibilityExtensionAbility, {
  AccessibilityElement, ElementAttributeKeys, AccessibilityExtensionContext,
  ElementAttributeValues, FocusDirection, FocusType, Rect, WindowType, AccessibilityEvent
} from '@ohos.application.AccessibilityExtensionAbility';
/*** endif */
/*** if arkts 1.1 */
import { GesturePath } from '@ohos.accessibility.GesturePath';
import { GesturePoint } from '@ohos.accessibility.GesturePoint';
import { Parameter, AccessibilityEventInfo
} from '@ohos.application.AccessibilityExtensionAbility';
import { AccessibilityAction, AccessibilityEventType } from '@ohos.accessibility';
/*** endif */
/*** if arkts 1.1&1.2 */
export {
  AccessibilityElement, AccessibilityExtensionAbility, AccessibilityExtensionContext,
  ElementAttributeKeys, ElementAttributeValues, FocusDirection, FocusType,
  Rect, WindowType, accessibility, config, AccessibilityEvent
};
/*** endif */
/*** if arkts 1.1 */
export { GesturePath, GesturePoint, Parameter, AccessibilityEventInfo, AccessibilityAction, AccessibilityEventType };
/*** endif */