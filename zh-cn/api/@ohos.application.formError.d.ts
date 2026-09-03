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
 * ###### 权限
 * 
 * 无
 *
 * @file formError
 * @kit FormKit
 */

/**
 * formError模块提供获取卡片错误码的能力。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始不再维护，
 *
 * @syscap SystemCapability.Ability.Form
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace formError {
  /**
   * 枚举，卡片错误码。
   *
   * @syscap SystemCapability.Ability.Form
   * @since 8 dynamic
   * @since 23 static
   */
  enum FormError {
    /**
     * 默认错误码。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_COMMON = 1,

    /**
     * 没有操作权限。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_PERMISSION_DENY = 2,

    /**
     * 查询卡片信息失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_GET_INFO_FAILED = 4,

    /**
     * 查询应用信息失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_GET_BUNDLE_FAILED = 5,

    /**
     * 查询布局信息失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_GET_LAYOUT_FAILED = 6,

    /**
     * 添加卡片时传入无效参数。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_ADD_INVALID_PARAM = 7,

    /**
     * 卡片配置与ID不匹配。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_CFG_NOT_MATCH_ID = 8,

    /**
     * 卡片ID不存在。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_NOT_EXIST_ID = 9,

    /**
     * 绑定卡片提供方失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_BIND_PROVIDER_FAILED = 10,

    /**
     * 系统卡片实例数量超过限制。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_MAX_SYSTEM_FORMS = 11,

    /**
     * 每张卡片实例数量超过限制。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_MAX_INSTANCES_PER_FORM = 12,

    /**
     * 操作非自己应用申请的卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_OPERATION_FORM_NOT_SELF = 13,

    /**
     * 卡片提供方删除卡片失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_PROVIDER_DEL_FAIL = 14,

    /**
     * 使用方申请卡片实例数超过限制。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_MAX_FORMS_PER_CLIENT = 15,

    /**
     * 系统临时卡片实例数超过限制。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_MAX_SYSTEM_TEMP_FORMS = 16,

    /**
     * 模块不存在。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_FORM_NO_SUCH_MODULE = 17,

    /**
     * ability组件不存在。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_FORM_NO_SUCH_ABILITY = 18,

    /**
     * 卡片尺寸不存在。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_FORM_NO_SUCH_DIMENSION = 19,

    /**
     * 卡片所在FA未安装。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_FORM_FA_NOT_INSTALLED = 20,

    /**
     * 系统服务响应失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_SYSTEM_RESPONSES_FAILED = 30,

    /**
     * 重复添加卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_FORM_DUPLICATE_ADDED = 31,

    /**
     * 卡片处于恢复状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 8 dynamic
     * @since 23 static
     */
    ERR_IN_RECOVERY = 36,

    /**
     * 分布式调度失败。
     * 
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_DISTRIBUTED_SCHEDULE_FAILED = 37
  }
}
export default formError;