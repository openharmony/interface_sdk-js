/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2026-2026. All rights reserved.
 */

/**
 * @file
 * @kit BasicServicesKit
 */

/**
 * Defines the lite settings capability for wearables.
 *
 * @syscap SystemCapability.Applications.Settings.Core.Lite
 * @famodelonly
 * @since 24 dynamic&static
 */

declare namespace settingsLite {
  /**
   * Opens the password settings page.
   *
   * @syscap SystemCapability.Applications.Settings.Core.Lite
   * @famodelonly
   * @since 24 dynamic&static
   */
  function openPinSettingPage(): void;

  /**
   * Opens the NFC settings page.
   *
   * @syscap SystemCapability.Applications.Settings.Core.Lite
   * @famodelonly
   * @since 24 dynamic&static
   */
  function openNfcSettingsPage(): void;

  /**
   * Opens the settings page for double-pressing the function key.
   *
   * @syscap SystemCapability.Applications.Settings.Core.Lite
   * @famodelonly
   * @since 24 dynamic&static
   */
  function openDoubleClickSettingsPage(): void;

  /**
   * Defines a callback used to return whether the application started by double-pressing the function key is the
   * application itself.
   * @syscap SystemCapability.Applications.Settings.Core.Lite
   * @famodelonly
   * @since 24 dynamic&static
   */
  interface ClickCallback {
    /**
     * Called to determine whether the application can be started by double-pressing the function key.
     *
     * @param { boolean } result The specified application is started by double-pressing the function key if true
     *     is returned. Otherwise, an unexpected application is started.
     * @syscap SystemCapability.Applications.Settings.Core.Lite
     * @famodelonly
     * @since 24 dynamic&static
     */
    onResult(result: boolean): void;
  }

  /**
   * 1. Checks whether the application started by double-pressing the function key is the application itself.
   * 2. This API is triggered to check whether double-pressing the function key starts the application itself.
   *
   * @param { ClickCallback } callback Callback used to return the execution result.
   * @syscap SystemCapability.Applications.Settings.Core.Lite
   * @famodelonly
   * @since 24 dynamic&static
   */
  function isDoubleClickAppForSelf(callback: ClickCallback): void;
}

export default settingsLite;