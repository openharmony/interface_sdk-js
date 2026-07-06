/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * The module defines the ability information. An application can obtain its own ability information through 
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ABILITY** passed in to 
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @file
 * @kit AbilityKit
 */

import { ApplicationInfo } from './ApplicationInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';
import { Skill } from './Skill';

/**
 * The module defines the ability information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityInfo {
  /**
   * Bundle name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Module name to which the ability belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Ability name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Resource descriptor of the ability name visible to users. It corresponds to the **label** field under **abilities**
   * in the [module.json5](docroot://quick-start/module-configuration-file.md) file.
   *
   * Note: Starting from API version 20, if
   * [bundleManager.getAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAbilityInfo} is used to
   * obtain ability information, this field is the ability name visible to users.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Resource ID of the ability label. It is automatically generated during compilation and build based on the label
   * configured in **abilities** of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Ability description, which describes the content and functions of the current ability. It corresponds to the
   * **description** field under **abilities** in the [module.json5](docroot://quick-start/module-configuration-file.md)
   * file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * Resource ID of the ability description. It is automatically generated during compilation and build based on the
   * description configured in **abilities** of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Resource descriptor of the ability icon. It corresponds to the **icon** field under **abilities** in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Resource ID of the ability icon. It is automatically generated during compilation and build based on the icon
   * configured in **abilities** of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Process name of the ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly process: string;
  /**
   * Whether the ability can be launched by other applications. **true** if the ability can be launched by other
   * applications, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly exported: boolean;

  /**
   * Ability type.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly type: bundleManager.AbilityType;

  /**
   * Ability display orientation. It is derived from the **orientation** field under **abilities** in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) file. If **orientation** in the file is set to
   * an enumerated value, this property is a non-zero value. For details about the available values, see
   * [displayOrientation]{@link ./../@ohos.bundle.bundleManager:bundleManager.DisplayOrientation}. If **orientation** in
   * the file is set to a resource index, the value of this property is **0**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly orientation: bundleManager.DisplayOrientation;

  /**
   * Ability launch mode, that is, whether it can be started in multiton mode. For details, see
   * [LaunchType]{@link ./../@ohos.bundle.bundleManager:bundleManager.LaunchType}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly launchType: bundleManager.LaunchType;

  /**
   * Array of permissions that other applications must request to start or access this ability. The system checks
   * whether the caller has these permissions only if the **exported** property in **AbilityInfo** is **true** (meaning
   * that the ability allows itself to be started by other applications).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissions: Array<string>;

  /**
   * Permission required for reading the ability data.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly readPermission: string;

  /**
   * Permission required for writing data to the ability.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly writePermission: string;

  /**
   * URI of the ability.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly uri: string;

  /**
   * Device types supported by the ability. The value is derived from that of
   * [deviceTypes](docroot://quick-start/module-configuration-file.md#devicetypes) in the **module.json5** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * Application configuration information <!--Del-->. The information can be obtained by passing in
   * **GET_ABILITY_INFO_WITH_APPLICATION** to the **abilityFlags** parameter of
   * [queryAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.queryAbilityInfo(want: Want, abilityFlags: int, userId: int, callback: AsyncCallback<Array<AbilityInfo>>)}
   * <!--DelEnd-->.
   *
   * This field is not returned when the
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   * or
   * [getBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
   * is used to obtain ability information. You can obtain the related information by obtaining the
   * [bundleInfo]{@link BundleInfo:BundleInfo}.appInfo object.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Application configuration information <!--Del-->. The information can be obtained by passing in
   * **GET_ABILITY_INFO_WITH_APPLICATION** to the **abilityFlags** parameter of
   * [queryAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.queryAbilityInfo(want: Want, abilityFlags: int, userId: int, callback: AsyncCallback<Array<AbilityInfo>>)}
   * <!--DelEnd-->.
   *
   * This field is not returned when the
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   * or
   * [getBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
   * is used to obtain ability information. You can obtain the related information by obtaining the
   * [bundleInfo]{@link BundleInfo:BundleInfo}.appInfo object.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo | null;

  /**
   * Metadata of the ability. You can configure the system-defined parameters to use the capabilities provided by the
   * system, for example, [shortcuts](docroot://quick-start/module-configuration-file.md#shortcuts) and
   * [window metadata configuration](docroot://windowmanager/window-config-m.md). You can also customize the parameters
   * and call
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   * to obtain the parameters by passing **GET_BUNDLE_INFO_WITH_HAP_MODULE**, **GET_BUNDLE_INFO_WITH_ABILITY**, and
   * **GET_BUNDLE_INFO_WITH_METADATA** to **bundleFlags**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;

  /**
   * Whether the ability is available, that is, whether it can be started or queried. **true** if available, **false**
   * otherwise. If the ability is unavailable, you must call
   * [getAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAbilityInfo} with **AbilityFlag** set to
   * **GET_ABILITY_INFO_WITH_DISABLE** to query the ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled: boolean;

  /**
   * Window modes supported by the ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly supportWindowModes: Array<bundleManager.SupportWindowMode>;

  /**
   * Window size.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly windowSize: WindowSize;

  /**
   * Whether the ability icon can be hidden in the dock area. **true** if the ability icon can be hidden in the dock
   * area, **false** otherwise.
   *
   * Note: This field does not take effect.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly excludeFromDock: boolean;

  /**
   * Skills information of the ability. It represents the feature set of
   * [wants](docroot://application-models/want-overview.md) that can be received by the UIAbility or ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly skills: Array<Skill>;

  /**
   * Index of an application clone. It takes effect only for [application clones](docroot://quick-start/app-clone.md).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Resource ID of the ability display mode. It is derived from the **orientation** field under **abilities** in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) file. If the **orientation** field in the file
   * is set to an enumerated value, **orientationId** is **0**. If the **orientation** field is set to a resource index,
   * **orientationId** is a non-zero value, which is the resource ID generated during building. If **orientationId** is
   * set to a value other than **0**, the current display mode is customized, and this ID must be used to obtain the
   * corresponding resource from the resource manager module. If **orientationId** is set to **0**, no resource is
   * configured.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  readonly orientationId: long;
}

/**
 * Describes the window size.
 *
 * **Atomic service API**: This API can be used in atomic services since API version 11.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface WindowSize {
  /**
   * Maximum aspect ratio of the window in free window mode. The value ranges from 0 to 1. An example value is 0.12.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly maxWindowRatio: double;

  /**
   * Minimum aspect ratio of the window in free window mode. The value ranges from 0 to 1. An example value is 0.5.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minWindowRatio: double;

  /**
   * Maximum width of the window in free window mode. The unit is vp.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly maxWindowWidth: long;

  /**
   * Minimum width of the window in free window mode. The unit is vp.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minWindowWidth: long;

  /**
   * Maximum height of the window in free window mode. The unit is vp.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly maxWindowHeight: long;

  /**
   * Minimum height of the window in free window mode. The unit is vp.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minWindowHeight: long;
}