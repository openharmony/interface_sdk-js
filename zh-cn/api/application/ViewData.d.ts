/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type PageNodeInfo from './PageNodeInfo';
import type AutoFillRect from './AutoFillRect';
/*** endif */
/*** if arkts static */
import PageNodeInfo from './PageNodeInfo';
import AutoFillRect from './AutoFillRect';
/*** endif */

/**
 * 自动填充的视图数据信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi [since 11 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
export default interface ViewData {
  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  bundleName: string;

  /**
   * 模块名称，用于指定自动填充数据所属的模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * Ability名称，用于指定自动填充数据所属的Ability。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * 页面url。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  pageUrl: string;

  /**
   * 页面节点信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  pageNodeInfos: Array<PageNodeInfo>;

  /**
   * 页面的位置坐标与宽高信息。在PC/2in1设备上，密码保险箱以弹窗形式展示，为保证弹窗位置跟随输入框，left和top需置为0。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  pageRect: AutoFillRect;

  /**
   * 表示填充内容是否由用户选择。true为用户选择，false为非用户选择。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isUserSelected: boolean;

  /**
   * 表示是否拉起密码箱中其他账号信息供用户选择。true为拉起其他账号信息，false为不拉起其他账号信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isOtherAccount: boolean;
}