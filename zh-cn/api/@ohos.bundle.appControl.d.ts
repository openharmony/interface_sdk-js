/*
 * Copyright (c) 2022 Huawei Device Co., Ltd1.
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

import { AsyncCallback } from './@ohos.base';
/*** if arkts dynamic */
import type { ElementName } from './bundleManager/ElementName';
/*** endif */
/*** if arkts static */
import { ElementName } from './bundleManager/ElementName';
/*** endif */
import Want from './@ohos.app.ability.Want';

/**
 * 本模块提供应用拦截能力。对应用设置处置状态后，应用会被禁止运行；用户点击桌面图标时，会根据应用的处置状态，跳转到对应的页面。本模块支持对应用的处置状态进行设置、获取、删除。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace appControl {
  /**
   * 标识功能组件类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ComponentType {
    /**
     * UI基础功能类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY = 1,

    /**
     * UI扩展能力类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UI_EXTENSION = 2
  }

  /**
   * 标识拦截应用程序的方式，例如禁用应用的全部能力、禁用应用的指定能力、或者不禁用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DisposedType {
    /**
     * 应用所有能力都将被禁用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOCK_APPLICATION = 1,
    /**
     * 应用指定的能力才会被禁用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOCK_ABILITY = 2,
    /**
     * 应用所有能力不会被禁用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NON_BLOCK = 3
  }

  /**
   * 标识拦截指定应用程序的不同策略。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ControlType {
    /**
     * 允许运行指定功能的列表。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALLOWED_LIST = 1,
    /**
     * 不允许运行指定功能的列表。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DISALLOWED_LIST = 2
  }

  /**
   * 标识拦截规则。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DisposedRule {
    /**
     * 指定应用被拦截时，跳转到的页面。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * 拦截时将提升的能力的类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    componentType: ComponentType;

    /**
     * 对应用的拦截规则。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    disposedType: DisposedType;

    /**
     * 拦截指定应用程序的不同策略。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    controlType: ControlType;

    /**
     * 拦截指定应用程序能力的列表。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    elementList: Array<ElementName>;

    /**
     * 拦截规则的优先级，用于规则列表查询结果排序。取值为整数，数值越小，优先级越高，排序越靠前。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    priority: int;
  }

  /**
   * 标识卸载处置规则。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface UninstallDisposedRule {
    /**
     * 指定应用被拦截时，跳转到的组件。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * 拦截规则的优先级，用于规则列表查询结果排序。取值为整数，数值越小，优先级越高，排序越靠前。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    priority: int;

    /**
     * 拦截时将拉起能力的类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    uninstallComponentType: UninstallComponentType;
  }

  /**
   * 标识批量设置拦截规则的配置。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DisposedRuleConfiguration {
    /**
     * 要被设置拦截规则应用的appId或appIdentifier。appId和appIdentifier可以标识同一个应用，因此针对同一应用如果用appIdentifier设置拦截规则，可以覆盖之前采用appId设置的，反之同理。
     * 
     * **说明：**
     * 
     * appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
     * [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
     * 
     * [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo}也是应用的唯一标识，详情信息可参考
     * [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见
     * [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    appId: string;

    /**
     * 表示分身应用的索引，默认值为0。
     * 
     * appIndex为0时，表示设置主应用的拦截规则。appIndex大于0时，表示设置指定分身应用的拦截规则。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    appIndex: int;

    /**
     * 表示对应用的拦截规则，包括拦截时将拉起能力的类型等。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    disposedRule: DisposedRule;
  }

  /**
   * 设置应用的处置状态。使用callback异步回调。成功返回null，失败返回对应错误信息。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 需要设置处置的应用的appId。<br> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { Want } disposedWant - 对应用的处置意图。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置处置状态成功，err为null；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDisposedStatus(appId: string, disposedWant: Want, callback: AsyncCallback<void>): void;

  /**
   * 设置应用的处置状态。使用Promise异步回调。成功返回null，失败返回对应错误信息。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 需要设置处置状态的应用的appId。<br> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { Want } disposedWant - 对应用的处置意图。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDisposedStatus(appId: string, disposedWant: Want): Promise<void>;

  /**
   * 以同步方法设置应用的处置状态。成功返回null，失败抛出对应异常。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 需要设置处置的应用的appId。<br> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { Want } disposedWant - 对应用的处置意图。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDisposedStatusSync(appId: string, disposedWant: Want): void;

  /**
   * 获取指定应用的处置状态。使用callback异步回调，成功返回应用的处置状态，失败返回对应错误信息。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - 要查询的应用的appId。<br> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { AsyncCallback<Want> } callback - 回调函数。当获取应用的处置状态成功时，err为null，data为获取到的处置状态；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDisposedStatus(appId: string, callback: AsyncCallback<Want>): void;

  /**
   * 获取指定应用已设置的处置状态。使用Promise异步回调，成功返回应用的处置状态，失败返回对应错误信息。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - 要查询的应用的appId。<br> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @returns { Promise<Want> } Promise对象，返回应用的处置状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDisposedStatus(appId: string): Promise<Want>;

  /**
   * 以同步方法获取指定应用已设置的处置状态。成功返回应用的处置状态，失败抛出对应异常。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - 要查询的应用的appId。<br> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @returns { Want } 返回应用的处置状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getDisposedStatusSync(appId: string): Want;

  /**
   * 删除应用的处置状态。使用callback异步回调，成功返回null，失败返回对应错误信息。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 要删除拦截规则的应用的appId或appIdentifier。使用appId设置的拦截规则只能通过appId删除，使用appIdentifier设置的同理。<br/>
   *     **说明：**<br/> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。<br>
   *     [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo}也是应用的唯一标识，详情信息可参考
   *     [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见
   *     [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置处置状态成功时，err返回null；否则回调函数返回具体错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteDisposedStatus(appId: string, callback: AsyncCallback<void>): void;

  /**
   * 删除应用的处置状态。使用promise异步回调，成功返回null，失败返回对应错误信息。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 要删除拦截规则的应用的appId或appIdentifier。使用appId设置的拦截规则只能通过appId删除，使用appIdentifier设置的同理。<br/>
   *     **说明：**<br/> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。<br>
   *     [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo}也是应用的唯一标识，详情信息可参考
   *     [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见
   *     [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteDisposedStatus(appId: string): Promise<void>;

  /**
   * 以同步方法删除指定应用或分身应用的处置状态。成功返回null，失败抛出对应异常。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 要删除拦截规则的应用的appId或appIdentifier。使用appId设置的拦截规则只能通过appId删除，使用appIdentifier设置的同理。<br/>
   *     **说明：**<br/> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。<br>
   *     [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo}也是应用的唯一标识，详情信息可参考
   *     [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见
   *     [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。
   * @param { int } [appIndex] - 表示分身应用的索引，默认值为0。<br> appIndex为0时，表示删除主应用的处置状态。appIndex大于0时，表示删除指定分身应用的处置状态。 [since 12]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteDisposedStatusSync(appId: string, appIndex?: int): void;

  /**
   * 获取指定应用或分身应用已设置的拦截规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - 要获取拦截规则的应用的appId或appIdentifier。使用appId设置的拦截规则只能通过appId获取，使用appIdentifier设置的同理。<br/>
   *     **说明：**<br/> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。<br>
   *     [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo}也是应用的唯一标识，详情信息可参考
   *     [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见
   *     [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。
   * @param { int } [appIndex] - 表示分身应用的索引，默认值为0。<br> appIndex为0时，表示获取主应用的拦截规则。appIndex大于0时，表示获取指定分身应用的拦截规则。 [since 12]
   * @returns { DisposedRule } 对应用的拦截规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getDisposedRule(appId: string, appIndex?: int): DisposedRule;

  /**
   * 设置指定应用或分身应用的拦截规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - 要被设置拦截规则应用的appId或appIdentifier。使用appId设置的拦截规则会覆盖使用appIdentifier设置的拦截规则，反之同理。<br/>**说明：**<
   *     br/> appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见
   *     [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。<br>
   *     [appIdentifier]{@link ./bundleManager/BundleInfo:SignatureInfo}也是应用的唯一标识，详情信息可参考
   *     [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见
   *     [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。
   * @param { DisposedRule } rule - 指示对应用的拦截规则。
   * @param { int } [appIndex] - 表示分身应用的索引，默认值为0。<br> appIndex为0时，表示设置主应用的拦截规则。appIndex大于0时，表示设置指定分身应用的拦截规则。 [since 12]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setDisposedRule(appId: string, rule: DisposedRule, appIndex?: int): void;

  /**
   * 设置指定应用或分身应用的卸载处置规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - 要设置卸载处置规则的应用的appIdentifier。<br> 如果应用没有appIdentifier可使用appId代替。appId是应用的唯一标识，由应用
   *     Bundle名称和签名信息决定，获取方法参见[获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { UninstallDisposedRule } rule - 表示要设置的卸载处置规则。
   * @param { int } [appIndex] - 表示分身应用的索引，默认值为0。<br> appIndex为0时，表示设置主应用的卸载处置规则。appIndex大于0时，表示设置指定分身应用的卸载处置规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @throws { BusinessError } 17700075 - The specified bundleName of want is not the same with caller.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function setUninstallDisposedRule(appIdentifier: string, rule: UninstallDisposedRule, appIndex?: int): void;

  /**
   * 获取指定应用或分身应用已设置的优先级最高的卸载处置规则。
   *
   * @permission ohos.permission.GET_DISPOSED_APP_STATUS or ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - 要获取卸载处置规则的应用的appIdentifier。<br> 如果应用没有appIdentifier可使用appId代替。appId是应用的唯一标识，由应用
   *     Bundle名称和签名信息决定，获取方法参见[获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { int } [appIndex] - 表示分身应用的索引，默认值为0。<br> appIndex为0时，表示获取主应用的卸载处置规则。appIndex大于0时，表示获取指定分身应用的卸载处置规则。
   * @returns { UninstallDisposedRule } 表示应用的卸载处置规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function getUninstallDisposedRule(appIdentifier: string, appIndex?: int): UninstallDisposedRule;

  /**
   * 删除指定应用或分身应用的卸载处置规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - 要删除卸载处置规则的应用的appIdentifier。<br> 如果应用没有appIdentifier可使用appId代替。appId是应用的唯一标识，由应用
   *     Bundle名称和签名信息决定，获取方法参见[获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。
   * @param { int } [appIndex] - 表示分身应用的索引，默认值为0。<br> appIndex为0时，表示删除主应用的卸载处置规则。appIndex大于0时，表示删除指定分身应用的卸载处置规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function deleteUninstallDisposedRule(appIdentifier: string, appIndex?: int): void;

  /**
   * 批量设置指定应用或分身应用的拦截规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { Array<DisposedRuleConfiguration> } disposedRuleConfigurations - 表示批量设置拦截规则的配置，包括待拦截应用的appId、分身应用索引及拦截规则。每次
   *     设置拦截规则的数组的最大数量为1000。<br/>**说明：**<br/>1.如果数组中存在appId和appIndex相同的DisposedRuleConfiguration时，后面的
   *     DisposedRuleConfiguration会覆盖前面的。<br/>2.如果应用已设置过拦截规则，重新为该应用设置拦截规则，会覆盖之前的。appId和appIndex一致则表示同一应用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDisposedRules(disposedRuleConfigurations: Array<DisposedRuleConfiguration>): void;

  /**
   * 获取当前用户下已设置的所有拦截规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @returns { Array<DisposedRuleConfiguration> } 应用已设置的拦截规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllDisposedRules(): Array<DisposedRuleConfiguration>;

  /**
   * 获取指定应用程序包设置的所有拦截规则。
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } bundleName - 表示设置拦截规则的应用程序包的包名。
   * @returns { Array<DisposedRuleConfiguration> } 指定应用程序包已设置的拦截规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>;

  /**
   * 标识卸载时功能组件类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export enum UninstallComponentType {

    /**
     * 服务扩展能力类型。仅支持service类型的[ExtensionAbility](docroot://quick-start/module-configuration-file.md#extensionabilities标签)
     * 。
     * 
     * 被拉起的ExtensionAbility通过want中bundleName、moduleName、abilityName字段共同确定。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    EXTENSION = 1,
    /**
     * UI扩展能力类型。
     * 
     * 被拉起的UIExtensionAbility通过want中bundleName、moduleName、abilityName字段共同确定，同时want.parameters中的
     * ability.want.params.uiExtensionType字段需要配置为
     * [UIExtensionAbility](docroot://application-models/uiextensionability-sys.md)的类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UI_EXTENSION = 2
  }
}

export default appControl;