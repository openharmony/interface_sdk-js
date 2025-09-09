/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import promptAction, {
  LevelMode,
  ImmersiveMode,
  LevelOrder,
} from '@ohos.promptAction';
import window from '@ohos.window';
import display from '@ohos.display';
import screen from '@ohos.screen';
import screenshot from '@ohos.screenshot';
import uiExtensionHost from '@ohos.uiExtensionHost';
import componentSnapshot from '@ohos.arkui.componentSnapshot';
import componentUtils from '@ohos.arkui.componentUtils';
import dragController from '@ohos.arkui.dragController';
import uiObserver from '@ohos.arkui.observer';
import performanceMonitor from '@ohos.arkui.performanceMonitor';
import curves from '@ohos.curves';
import matrix4 from '@ohos.matrix4';
import mediaquery from '@ohos.mediaquery';
import pluginComponentManager, {
  PluginComponentTemplate,
} from '@ohos.pluginComponent';
import router from '@ohos.router';
import SystemMediaQuery, {
  MediaQueryEvent,
  MediaQueryList,
} from '@system.mediaquery';
import {
  GETINSPECTORBYKEY as getInspectorByKey,
  GETINSPECTORTREE as getInspectorTree,
  SENDEVENTBYKEY as sendEventByKey,
} from '@ohos.arkui.inspector';

export * from '@ohos.animator';
export * from '@ohos.arkui.component';
export * from '@ohos.arkui.drawableDescriptor';
export * from '@ohos.arkui.modifier';
export * from '@ohos.arkui.node';
export * from '@ohos.arkui.shape';
export * from '@ohos.arkui.stateManagement';
export * from '@ohos.arkui.theme';
export * from '@ohos.arkui.UIContext';
export * from '@ohos.measure';

export {
  promptAction,
  window,
  display,
  screen,
  screenshot,
  uiExtensionHost,
  componentSnapshot,
  componentUtils,
  dragController,
  uiObserver,
  performanceMonitor,
  curves,
  matrix4,
  mediaquery,
  pluginComponentManager,
  PluginComponentTemplate,
  LevelMode,
  ImmersiveMode,
  LevelOrder,
  router,
  SystemMediaQuery,
  MediaQueryEvent,
  MediaQueryList,
  getInspectorByKey,
  getInspectorTree,
  sendEventByKey,
};
