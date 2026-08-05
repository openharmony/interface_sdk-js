/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { SkillInfo as _SkillInfo, SkillType as _SkillType } from './bundleManager/SkillInfo';

/**
 * 本模块提供技能（Skill）信息的查询能力，支持查询应用自身的技能信息、指定应用的技能信息以及所有应用的技能信息。AI代理框架在规划任务时，可通过本模块查询设备上所有应用可用的技能，
 * 选择合适的技能来完成用户请求。通过技能信息查询，可以实现智能任务调度、能力匹配优化，提升AI代理的任务执行效率，降低开发者的技能集成复杂度。
 *
 * @namespace skillManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare namespace skillManager {
  /**
   * 技能信息标志，指示需要获取的技能信息的内容。
   *
   * @enum { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export enum SkillInfoFlag {
    /**
     * 获取默认技能信息，不包含description、srcEntries、permissions和requestPermissions。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GET_SKILL_INFO_DEFAULT = 0x00000000,
    /**
     * 用于获取包含description的技能信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GET_SKILL_INFO_WITH_DESCRIPTION = 0x00000001,
    /**
     * 用于获取包含srcEntries的技能信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GET_SKILL_INFO_WITH_SRC_ENTRIES = 0x00000002,
    /**
     * 用于获取包含permissions的技能信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GET_SKILL_INFO_WITH_PERMISSIONS = 0x00000004,
    /**
     * 用于获取包含requestPermissions的技能信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GET_SKILL_INFO_WITH_REQUEST_PERMISSIONS = 0x00000008,
  }

  /**
   * 获取本应用中指定模块下指定名称的技能信息。使用Promise异步回调。
   *
   * @param { string } moduleName - 指定查询技能所属模块的名称。
   * @param { string } skillName - 指定查询技能的名称。
   * @param { int } flags {@link SkillInfoFlag} - 指定返回的SkillInfo所包含的信息。详情请参考SkillInfoFlag。
   *     contained in the SkillInfo object that will be returned.
   * @returns { Promise<SkillInfo> } Promise对象，返回指定技能的SkillInfo。
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700093 - The specified skillName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getSkillInfoForSelf(moduleName: string, skillName: string, flags: int): Promise<SkillInfo>;

  /**
   * 获取本应用的所有技能信息。使用Promise异步回调。
   *
   * @param { int } flags {@link SkillInfoFlag} - 指定返回的SkillInfo所包含的信息。详情请参考SkillInfoFlag。
   * @returns { Promise<Array<SkillInfo>> } Promise对象，返回调用方所在应用的所有技能信息数组。
   * @throws { BusinessError } 17700101 - Bundle manager service is exception. Possible causes:
   *     1. Failed to connect to the system service.
   *     2. IPC data transmission failed.
   *     3. Failed to obtain the object constructor.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getSkillInfosForSelf(flags: int): Promise<Array<SkillInfo>>;

  /**
   * 获取指定应用中指定模块下指定名称的技能信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SKILL_PRIVILEGE or ohos.permission.MANAGE_SKILL
   * @param { string } bundleName - 指定查询应用的包名。
   * @param { string } moduleName - 指定查询技能所属模块的名称。
   * @param { string } skillName - 指定查询技能的名称。
   * @param { int } flags {@link SkillInfoFlag} - 指定返回的SkillInfo所包含的信息。详情请参考SkillInfoFlag。
   * @param { int } [userId] - 指定查询的用户ID，可以通过getOsAccountLocalId获取。默认值：调用方所在用户。取值范围：大于等于0。
   * @returns { Promise<SkillInfo> } Promise对象，返回指定技能的SkillInfo。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700093 - The specified skillName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getSkillInfo(bundleName: string, moduleName: string, skillName: string,
    flags: int, userId?: int): Promise<SkillInfo>;

  /**
   * 获取指定应用的所有技能信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SKILL_PRIVILEGE or ohos.permission.MANAGE_SKILL
   * @param { string } bundleName - 指定查询应用的包名。
   * @param { int } flags {@link SkillInfoFlag} - 指定返回的SkillInfo所包含的信息。详情请参考SkillInfoFlag。
   * @param { int } [userId] - 指定查询的用户ID，可以通过getOsAccountLocalId获取。默认值：调用方所在用户。取值范围：大于等于0。
   * @returns { Promise<Array<SkillInfo>> } Promise对象，返回指定应用的所有技能信息数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getSkillInfos(bundleName: string, flags: int, userId?: int): Promise<Array<SkillInfo>>;

  /**
   * 获取设备上安装应用的所有技能信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SKILL_PRIVILEGE or ohos.permission.MANAGE_SKILL
   * @param { int } flags {@link SkillInfoFlag} - 指定返回的SkillInfo所包含的信息。详情请参考SkillInfoFlag。
   * @param { int } [userId] - 指定查询的用户ID，可以通过getOsAccountLocalId获取。默认值：调用方所在用户。取值范围：大于等于0。
   * @returns { Promise<Array<SkillInfo>> } Promise对象，返回所有应用的技能信息数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getAllSkillInfos(flags: int, userId?: int): Promise<Array<SkillInfo>>;

  /**
   * 技能配置信息，用于定义AI代理的技能能力。
   *
   * @typedef { _SkillInfo }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export type SkillInfo = _SkillInfo;

  /**
   * 技能类型的枚举。
   *
   * @typedef { _SkillType }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  export type SkillType = _SkillType;
}

export default skillManager;
