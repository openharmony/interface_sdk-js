/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2024-2024. All rights reserved.
 */
/**
 * @file Define capabilities to access app domain verification info.
 * @kit AbilityKit
 */

/**
 * This module provides app domain verification info.
 *
 * @namespace appDomainVerify
 * @syscap SystemCapability.BundleManager.AppDomainVerify
 * @systemapi
 * @stagemodelonly
 * @since 12
 */
declare namespace appDomainVerify {


  /**
   * query domains verify associated with bundleName.
   * @permission ohos.permission.GET_DOMAIN_VERIFY_INFO
   * @param { string } bundleName - app bundleName.
   * @return { string[] } Result domains.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API accessed by non-system app.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.BundleManager.AppDomainVerify
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  function queryAssociatedDomains(bundleName: string): string[];

  /**
   * query bundleNames associated with domain.
   * @permission ohos.permission.GET_DOMAIN_VERIFY_INFO
   * @param { string } domain - Parameters related to the function.
   * @return { string[] } Result bundleNames.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API accessed by non-system app.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.BundleManager.AppDomainVerify
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  function queryAssociatedBundleNames(domain: string): string[];
}

export default appDomainVerify;

