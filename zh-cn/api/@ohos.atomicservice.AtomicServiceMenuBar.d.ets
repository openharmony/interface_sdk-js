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
 * ###### 子组件
 * 
 * 无。
 *
 * ###### 属性
 *
 * 不支持[通用属性]{@link ./@internal/component/ets/common}。
 *
 * @file 系统接口
 * @kit ArkUI
 */

/**
 * 依赖当前原子化服务的UI上下文，创建AtomicServiceMenuBar对象，用于操控右上角菜单功能胶囊的显隐状态。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamiconly
 */
export declare class AtomicServiceMenuBar {
  /**
   * AtomicServiceMenuBar的构造函数。
   *
   * @param { UIContext } uiContext - 当前原子化服务的UI上下文信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  constructor(uiContext: UIContext);

  /**
   * 设置当前原子化服务菜单功能胶囊的显隐状态。
   *
   * @param { boolean } visible - 菜单功能胶囊预期的状态。true表示显示菜单功能胶囊，false表示隐藏菜单功能胶囊。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  public setVisible(visible: boolean): void;
}