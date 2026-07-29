/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * 在页面范围内关闭通过
 * [bindContextMenu]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
 * 属性绑定的菜单。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ContextMenu {
  /**
   * 可以通过该方法在页面范围内关闭通过
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
   * 为组件绑定的菜单。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始废弃，建议使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getContextMenuController]{@link @ohos.arkui.UIContext:UIContext#getContextMenuController}获取
   * > [ContextMenuController]{@link @ohos.arkui.UIContext}实例，再通过此实例调用替代方法
   * > [close]{@link @ohos.arkui.UIContext:ContextMenuController#close}。
   * >
   * > 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getContextMenuController]{@link @ohos.arkui.UIContext:UIContext#getContextMenuController}来明确UI的执行上下文。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ContextMenuController#close
   */
  static close();
}
