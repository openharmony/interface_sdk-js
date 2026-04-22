/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import Want from './@ohos.app.ability.Want';
import wantConstant from './@ohos.app.ability.wantConstant';
import type { AsyncCallback } from './@ohos.base';
import type insightIntent from './@ohos.app.ability.insightIntent';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * The module provides APIs for executing intent calls. The system executes intent calls based on user interaction and 
 * more.
 * 
 * > **NOTE**
 * >
 * > Starting from API version 20, this module supports application navigation using intents defined by the 
 * > [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
 * > decorator.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace insightIntentDriver {
  /**
   * Defines the parameter used to execute an intent call.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExecuteParam {
    /**
     * Name of the bundle to which the ability to be called belongs.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Name of the module to which the ability belongs.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Name of the ability to be called. If an intent defined by the 
     * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
     *  decorator is used to implement application redirection, this parameter can be left empty.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Intent name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    insightIntentName: string;

    /**
     * Intent call parameter.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    insightIntentParam: Record<string, Object>;

    /**
     * Indicates the insight intent param.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    insightIntentParam: Record<string, RecordData>;

    /**
     * Intent execution mode. If an intent defined by the 
     * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
     *  decorator is used to implement application redirection, this parameter must be filled (with any value that 
     * conforms to the definition), although it will not actually take effect.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    executeMode: insightIntent.ExecuteMode;

    /**
     * Physical screen ID specified during intent call. The value must be an integer. This parameter is valid only when 
     * **executeMode** is set to **UI_ABILITY_FOREGROUND**.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * List of URIs authorized by the intent caller to the intent executor during the call. If an intent defined by the 
     * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
     *  decorator is used to implement application redirection, this field is mandatory. Only the first element in the 
     * array is read as the URI of [openLink]{@link ./application/UIAbilityContext:UIAbilityContext.openLink}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    uris?: Array<string>;

    /**
     * [Flags]{@link @ohos.app.ability.wantConstant:wantConstant.Flags} of the URIs authorized by the intent caller to 
     * the intent executor during the call.
     * 
     * **NOTE**
     * 
     * This parameter supports only **FLAG_AUTH_READ_URI_PERMISSION**, **FLAG_AUTH_WRITE_URI_PERMISSION**, and 
     * FLAG_AUTH_READ_URI_PERMISSION|
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    flags?: int;

    /**
     * ID of the user to which the intent belongs.
     * 
     * **NOTE**
     * 
     * If the user ID of the calling application is different from the user ID of the intent, the calling application 
     * must request the ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId?: int;
  }

  /**
   * Defines an intent filter, which specifies the criteria for selecting target intents. It is used to filter intents 
   * on the device that meet these criteria.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface InsightIntentInfoFilter {  
    /**
     * Flag of the intent information ([InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}). It is used to 
     * query full or brief intent information. For details, see 
     * [GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    intentFlags: int;

    /**
     * Bundle name of the application to which the intent belongs.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName?: string;

    /**
     * Module name of the application to which the intent belongs.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    moduleName?: string;

    /**
     * Intent name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    intentName?: string;

    /**
     * ID of the user to which the intent belongs.
     * 
     * **NOTE**
     * 
     * If the user ID of the calling application is different from the user ID of the intent, the calling application 
     * must request the ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId?: int;    
  }

  /**
   * Executes a call to an intent. This API uses an asynchronous callback to return the result.
   * When the caller is in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is required.
   * When [ExecuteMode]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode} of the intent call is set to 
   * **UI_ABILITY_BACKGROUND**, the ohos.permission.ABILITY_BACKGROUND_COMMUNICATION permission is required.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Parameter used to execute the intent call.
   * @param { AsyncCallback<insightIntent.ExecuteResult> } callback - Callback used to return the intent call execution 
   *     result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function execute(param: ExecuteParam, callback: AsyncCallback<insightIntent.ExecuteResult>): void;

  /**
   * Executes a call to an intent. This API uses a promise to return the result.
   * When the caller is in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is required.
   * When [ExecuteMode]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode} of the intent call is set to 
   * **UI_ABILITY_BACKGROUND**, the ohos.permission.ABILITY_BACKGROUND_COMMUNICATION permission is required.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Parameter used to execute the intent call.
   * @returns { Promise<insightIntent.ExecuteResult> } Promise used to return the intent call execution result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function execute(param: ExecuteParam): Promise<insightIntent.ExecuteResult>;

  /**
   * Enumerates the intent types defined by the intent decorator. You can obtain the intent type from 
   * [LinkIntentInfo]{@link insightIntentDriver.LinkIntentInfo} returned by calling APIs such as 
   * [getAllInsightIntentInfo]{@link insightIntentDriver.getAllInsightIntentInfo}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum InsightIntentType {
    /**
     * A decorator of the 
     * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
     *  type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK = '@InsightIntentLink',

    /**
     * A decorator of the 
     * [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage)
     *  type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAGE = '@InsightIntentPage',

    /**
     * A decorator of the 
     * [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry)
     *  type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ENTRY = '@InsightIntentEntry',

    /**
     * A decorator of the 
     * [@InsightIntentFunctionMethod](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod)
     *  type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    FUNCTION = '@InsightIntentFunctionMethod',

    /**
     * A decorator of the 
     * [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform)
     *  type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    FORM = '@InsightIntentForm',
  }

  /**
   * Enumerates the execution modes supported by an 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md). 
   * For example, if **executeMode** in the 
   * [insight_intent.json configuration file]
   * (docroot://application-models/insight-intent-config-development.md#description-of-the-insight_intentjson-file)
   *  is set to **foreground**, the intent bound to the UIAbility can run in the foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum ExecuteModeForConfiguration {  
    /**
     * The intent bound to the UIAbility can run in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FOREGROUND = 0,

    /**
     * The intent bound to the UIAbility can run in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BACKGROUND = 1
  }

  /**
   * Describes the information of the UIAbility bound to the 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UIAbilityIntentInfo {  
    /**
     * Name of the UIAbility bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
    /**
     * Intent execution mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly executeMode: ExecuteModeForConfiguration[];
  }

  /**
   * Describes the information of the UIExtensionAbility bound to the 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UIExtensionIntentInfo {  
    /**
     * Name of the UIAbility bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
  }

  /**
   * Describes the information of the ServiceExtensionAbility bound to the 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ServiceExtensionIntentInfo {  
    /**
     * Name of the UIAbility bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
  }

  /**
   * Enumerates the modes that define how an intent is developed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DevelopType {  
    /**
     * The intent is developed using a configuration file.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    CONFIGURATION = 'configuration',

    /**
     * The intent is developed using a decorator.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DECORATOR = 'decorator'
  }

  /**
   * Describes the unique information of the 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SubIntentInfoForConfiguration {
    /**
     * Relative path of the intent execution file. The value is a string of a maximum of 127 bytes.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly srcEntry: string;

    /**
     * Information about the UIAbility bound to the intent, including the **ability** and **executeMode** fields.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly uiAbility?: UIAbilityIntentInfo;

    /**
     * Information about the UIExtensionAbility bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly uiExtension?: UIExtensionIntentInfo;
    /**
     * Information about the ServiceExtensionAbility bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly serviceExtension?: ServiceExtensionIntentInfo;

    /**
     * Information about the widget bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly form?: FormIntentInfo;

    /**
     * Data format of intent parameters, which is used to define the input data format during intent calls.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly inputParams?: Array<Record<string, Object>>;

    /**
     * Data format of intent parameters, which is used to define the input data format during intent calls.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly inputParams?: Array<Record<string, RecordData>>;

    /**
     * Data format for the results returned by intent calls. It defines how the data should be structured.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly outputParams?: Array<Record<string, Object>>;

    /**
     * Data format for the results returned by intent calls. It defines how the data should be structured.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly outputParams?: Array<Record<string, RecordData>>;

    /**
     * Entity information contained in the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly entities?: Record<string, Object>;

    /**
     * Entity information contained in the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly entities?: Record<string, RecordData>;
  }
  /**
   * Defines the intent information, which is the specific parameter configuration of the intent in the device.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface InsightIntentInfo {
    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * Module name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * Intent name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentName: string;

    /**
     * Vertical domain of the intent. It is used to categorize intents by vertical fields (for example, video, music, 
     * and games). For details about the value range, see the vertical domain fields in 
     * [smart distribution features in different vertical domains](https://developer.huawei.com/consumer/en/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly domain: string;

    /**
     * Version number of the intent. It is used to distinguish and manage intents when their capabilities evolve.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentVersion: string;

    /**
     * Name of the intent displayed in the InsightIntent framework.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayName: string;

    /**
     * Description of the intent displayed in the InsightIntent framework.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayDescription: string;

    /**
     * Standard intent name. If an intent in the standard intent list matches both the **schema** and **intentVersion** 
     * fields, it is processed as a standard intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly schema: string;

    /**
     * Icon of the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly icon: string;

    /**
     * Function of an intent, which helps large language models understand the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly llmDescription: string;

    /**
     * Search keywords for the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly keywords: string[];

    /**
     * Type of intent defined by the intent decorator.
     * 
     * **NOTE**
     * 
     * For intents developed using a configuration file, the return value of this field is 
     * [@InsightIntentEntry](./js-apis-app-ability-InsightIntentDecorator.md#insightintententry) by default.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentType: InsightIntentType;

    /**
     * Intent information for specific intent decorators.
     * 
     * **NOTE**
     * 
     * For intents developed using a configuration file, the return value of this field is 
     * [EntryIntentInfo](#entryintentinfo20) by default.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly subIntentInfo: LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo;

    /**
     * Data format of intent parameters, which is used to define the input data format during intent calls.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The insight intent parameters.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly parameters: Record<string, RecordData>;

    /**
     * Execution result returned.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly result: Record<string, Object>;

    /**
     * The type definition of the result returned by intent call.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly result: Record<string, RecordData>;

    /**
     * Entity information contained in the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entities: Array<EntityInfo>;

    /**
     * Development mode of the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly developType?: DevelopType;

    /**
     * Unique information about the intent developed using a configuration file.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly subIntentInfoForConfiguration?: SubIntentInfoForConfiguration;
  }

  /**
   * Describes the parameters supported by the 
   * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
   *  decorator, such as the URI required for application redirection.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface LinkIntentInfo {
    /**
     * URI of an intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly uri: string;
  }

  /**
   * Describes the parameters supported by the 
   * [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage)
   *  decorator, such as the 
   * [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10) name 
   * of the target page.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface PageIntentInfo {
    /**
     * Ability name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly uiAbility: string;

    /**
     * Page name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly pagePath: string;

    /**
     * ID of the [Navigation]{@link @internal/component/ets/navigation} component bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly navigationId: string;

    /**
     * Name of the 
     * [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10) 
     * component bound to the intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly navDestinationName: string;
  }

  /**
   * Defines the parameter type of the 
   * [@InsightIntentFunctionMethod](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod)
   *  decorator. All parameters inherit from 
   * [IntentDecoratorInfo]{@link @ohos.app.ability.InsightIntentDecorator:IntentDecoratorInfo}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface FunctionIntentInfo {}

  /**
   * Describes the parameters supported by the 
   * [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform)
   *  decorator, such as the widget name. It also describes the widget information bound to the 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface FormIntentInfo {
    /**
     * Ability name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * Name of the widget bound to the [FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly formName: string;
  }

  /**
   * Describes the parameters supported by the 
   * [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform)
   *  decorator, such as the widget name. It also describes the widget information bound to the 
   * [intent developed using a configuration file](docroot://application-models/insight-intent-config-development.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface EntryIntentInfo {
    /**
     * Ability name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * Intent execution mode. that is, execution mode supported when the bound ability is started.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly executeMode: insightIntent.ExecuteMode[];
  }

  /**
   * Enumerates the flags of intent information ([InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}). It 
   * is used in [getAllInsightIntentInfo]{@link insightIntentDriver.getInsightIntentInfoByBundleName}, 
   * [getInsightIntentInfoByBundleName]{@link insightIntentDriver.getInsightIntentInfoByBundleName}, and 
   * [getInsightIntentInfoByIntentName]{@link insightIntentDriver.getInsightIntentInfoByIntentName}.
   * 
   * > **NOTE**
   * >
   * > - For intents developed using a configuration file, the full and brief information queried through the preceding 
   * > APIs are the same.
   * >
   * > - For intents developed using a decorator, the full and brief information queried through the preceding APIs are 
   * > different, as described below.
   * >
   * > Table 1 Differences between full intent information and brief intent information
   * >
   * > | Name| Included in Full Intent Information| Included in Brief Intent Information|
   * > | -------- | -------- | -------- |
   * > | bundleName | Yes| Yes| 
   * > | moduleName | Yes| Yes|
   * > | intentName | Yes| Yes|
   * > | domain | Yes| No|
   * > | intentVersion | Yes| No|
   * > | displayName | Yes| Yes|
   * > | displayDescription | Yes| No|
   * > | schema | Yes| No|
   * > | icon | Yes| No|
   * > | llmDescription | Yes| No|
   * > | keywords | Yes| No|
   * > | intentType | Yes| Yes|
   * > | subIntentInfo | Yes| Yes|
   * > | parameters | Yes| Yes|
   * > | entities | No| No|
   * > | developType<sup>23+</sup> | Yes| Yes|
   * > | subIntentInfoForConfiguration<sup>23+</sup> | No| No|
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum GetInsightIntentFlag {
    /**
     * Used to query all intent information (except entities) in 
     * [InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}. To query entities information, use 
     * **GET_ENTITY_INFO**.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_FULL_INSIGHT_INTENT = 0x00000001,

    /**
     * Used to query brief intent information in [InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_SUMMARY_INSIGHT_INTENT = 0x00000002,

    /**
     * Used to query [EntityInfo]{@link insightIntentDriver.EntityInfo}. It must be used together with 
     * **GET_FULL_INSIGHT_INTENT** or **GET_SUMMARY_INSIGHT_INTENT**. Example usage: `GET_FULL_INSIGHT_INTENT | 
     * GET_ENTITY_INFO`.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_ENTITY_INFO = 0x00000004
  }

  /**
   * EntityInfo inherits from 
   * [IntentEntityDecoratorInfo]{@link @ohos.app.ability.InsightIntentDecorator:IntentEntityDecoratorInfo} and is used 
   * to describe the information about the intent entity defined by the 
   * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
   *  decorator.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface EntityInfo {
    /**
     * Class name decorated by 
     * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly className: string;

    /**
     * ID of the intent entity.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entityId: string;

    /**
     * Category of the intent entity.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entityCategory: string;

    /**
     * Data format of intent entity parameters.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The parameters of intent entity.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly parameters: Record<string, RecordData>;

    /**
     * Parent class name decorated by 
     * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly parentClassName: string;
  }

  /**
   * Obtains the information about all intents on the current device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } intentFlags - Flag of the intent information (
   *     [InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}). It is used to query full or brief intent 
   *     information. For details, see [GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}.
   * @returns { Promise<Array<InsightIntentInfo>> } Promise used to return an array holding InsightIntentInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllInsightIntentInfo(intentFlags: int): Promise<Array<InsightIntentInfo>>;

  /**
   * Obtains the intent information on the current device based on the given bundle name. This API uses a promise to 
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.<br>**NOTE**<br> If the bundle name does not exist, an 
   *     empty array is returned.
   * @param { int } intentFlags - Flag of the intent information (
   *     [InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}). It is used to query full or brief intent 
   *     information. For details, see [GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}.
   * @returns { Promise<Array<InsightIntentInfo>> } Promise used to return an array holding InsightIntentInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsightIntentInfoByBundleName(bundleName: string, intentFlags: int): Promise<Array<InsightIntentInfo>>;

  /**
   * Obtains the intent information on the current device based on the bundle name, module name, and intent name. This 
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.<br>**NOTE**<br> If the bundle name does not exist, an 
   *     empty object is returned.
   * @param { string } moduleName - Module name<br>**NOTE**<br> If the module name does not exist, an empty object is 
   *     returned.
   * @param { string } intentName - Intent name.<br>**NOTE**<br> If the intent name does not exist, an empty object is 
   *     returned.
   * @param { int } intentFlags - Flag of the intent information (
   *     [InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}). It is used to query full or brief intent 
   *     information. For details, see [GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}.
   * @returns { Promise<InsightIntentInfo> } Promise used to return the InsightIntentInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsightIntentInfoByIntentName(bundleName: string, moduleName: string, intentName: string, intentFlags: int): Promise<InsightIntentInfo>;

  /**
   * Obtains the intent information on the current device based on the given intent filter. This API uses a promise to 
   * return the result.<br>If the user ID of the calling application is different from the user ID of the intent, the 
   * calling application must request the ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { InsightIntentInfoFilter } filter - Intent filter, which specifies the criteria for selecting a target
   *     intent. It is used to filter intents on the device that meet these criteria.
   * @returns { Promise<Array<InsightIntentInfo>> } Promise used to return an array holding InsightIntentInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getInsightIntentInfoByFilter(filter: InsightIntentInfoFilter): Promise<Array<InsightIntentInfo>>;
}

export default insightIntentDriver;
