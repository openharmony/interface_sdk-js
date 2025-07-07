    /**
     * Whether the Wi-Fi hotspot is HiLinkPro network.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    isHiLinkProNetwork?: boolean;
    
    /**
   * Disable Wi-Fi.
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 20
   */
   function disableWifi(): void;

#  Public Repository for API Declaration Files

## Overview

This repository is used to store .d.ts declaration files of JavaScript/TypeScript APIs and API-related tools.

## Directory Structure

```
├─api
|  ├─@internal
│  |  ├─component
│  |  |  └─ets                 # Declaration file for components in the TypeScript-based declarative development paradigm
|  |  └─ets 
|  ├─config                    # JavaScript-based web-like development paradigm
|  ├─form                      # JavaScript service widget
|  ├─@ohos.×××.d.ts            # API declaration file
|  └─@system.×××.d.ts          # Deprecated APIs
├─build-tools
   ├─api_check_plugin          # Tool for checking API specifications
   |  ├─plugin
   |  ├─src
   |  └─test
   └─collect_application_api   # Tool for parsing used APIs
      └─src
```

## Repositories Involved

[interface-sdk_js](https://gitee.com/openharmony/interface_sdk-js/tree/master)
