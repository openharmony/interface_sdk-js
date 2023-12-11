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

import config from '../@ohos.accessibility.config';
import accessibility from '../@ohos.accessibility';
import { GesturePath } from '../@ohos.accessibility.GesturePath';
import { GesturePoint } from '../@ohos.accessibility.GesturePoint';
import AccessibilityExtensionAbility, {
  type AccessibilityElement, type AccessibilityExtensionContext, type ElementAttributeKeys,
  type ElementAttributeValues, type FocusDirection, type FocusType, type Rect, type WindowType
} from '../@ohos.application.AccessibilityExtensionAbility';

export {
  type AccessibilityElement, AccessibilityExtensionAbility, type AccessibilityExtensionContext,
  type ElementAttributeKeys, type ElementAttributeValues, type FocusDirection, type FocusType, GesturePath,
  GesturePoint, type Rect, type WindowType, accessibility, config
};
