/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import common from '@ohos.app.ability.common';
import type { SendableContext as _SendableContext } from './application/SendableContext';
/**
 * # When to Use
 *
 * This module is used to transfer data between concurrent ArkTS instances (including the main thread and the worker
 * thread of TaskPool or Worker).
 *
 * When the main thread transfers sendable data (data that complies with the
 * [Sendable protocol](docroot://arkts-utils/arkts-sendable.md#sendable-protocol)) to the child thread (such as the
 * TaskPool or Worker thread), the conversion between the Context and SendableContext is required. The process is as
 * follows:
 *
 * - Conversion from Context to SendableContext for the main thread to transfer sendable data to the child thread.
 * - Conversion from SendableContext to Context for the child thread to use the sendable data.
 *
 * The Context here is different from that created by
 * [createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}
 * . The differences are as follows:
 *
 * - Context involved in the conversion: ArkTS concurrent instances hold different application-side Context instances
 * that correspond to the same underlying Context object. When the Context properties and methods in an instance are
 * modified, the Context properties and methods in the related instances are modified accordingly. The eventHub
 * attribute in the Context instance is special. The eventHub objects in different instances are independent of each
 * other and cannot be used across ArkTS instances. If you want to use [EventHub]{@link ./application/EventHub:EventHub}
 * to transfer data across instances, call
 * [setEventHubMultithreadingEnabled](docroot://reference/apis-ability-kit/js-apis-app-ability-sendableContextManager.md#sendablecontextmanagerseteventhubmultithreadingenabled20)
 * to enable the cross-thread data transfer feature.
 * - Context created using
 * [createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}
 * : ArkTS concurrent instances hold different application-side Context objects that correspond to different underlying
 * Context objects.
 */
/**
 * # Constraints
 *
 * The Context types used in the conversion must be the same. For example, if the main thread uses
 * [convertFromContext](docroot://reference/apis-ability-kit/js-apis-app-ability-sendableContextManager.md#sendablecontextmanagerconvertfromcontext)
 * to convert the [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext} to the SendableContext, the
 * child thread must call
 * [convertToUIAbilityContext](docroot://reference/apis-ability-kit/js-apis-app-ability-sendableContextManager.md#sendablecontextmanagerconverttouiabilitycontext)
 * to convert the received SendableContext to the
 * [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}.
 *
 * Currently, the following types of Context support conversion: [Context]{@link ./app/context},
 * [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext},
 * [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}, and
 * [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}.
 */
/**
 * The sendableContextManager module provides APIs for converting between Context and
 * [SendableContext]{@link ./application/SendableContext:SendableContext} objects.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableContextManager {
  /**
   * Level-2 module SendableContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type SendableContext = _SendableContext;

  /**
   * Converts a Context object to a SendableContext object.
   *
   * @param { context } common.Context - Context object. The Context base class, and its child classes
   *     [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext},
   *     [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}, and
   *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext} are supported.
   * @returns { SendableContext } [SendableContext]{@link ./application/SendableContext:SendableContext} object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertFromContext(context: common.Context): SendableContext;

  /**
   * Converts a SendableContext object to a Context object.
   *
   * @param { sendableContext } SendableContext - SendableContext object.
   * @returns { common.Context } [Context]{@link ./app/context} object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToContext(sendableContext: SendableContext): common.Context;

  /**
   * Converts a SendableContext object to an ApplicationContext object.
   *
   * @param { sendableContext } SendableContext - SendableContext object.
   * @returns { common.ApplicationContext } [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext}
   *     object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToApplicationContext(sendableContext: SendableContext): common.ApplicationContext;

  /**
   * Converts a SendableContext object to an AbilityStageContext object.
   *
   * @param { sendableContext } SendableContext - SendableContext object.
   * @returns { common.AbilityStageContext } [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}
   *     object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToAbilityStageContext(sendableContext: SendableContext): common.AbilityStageContext;

  /**
   * Converts a SendableContext object to a UIAbilityContext object.
   *
   * @param { sendableContext } SendableContext - SendableContext object.
   * @returns { common.UIAbilityContext } [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}
  object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToUIAbilityContext(sendableContext: SendableContext): common.UIAbilityContext;

  /**
   * Enables the cross-thread data transfer feature of [EventHub]{@link ./application/EventHub:EventHub} in
   * [Context]{@link ./app/context}.
   *
   * > **NOTE**
   * >
   * > - When multiple Context objects communicate, you need to call this API to set each Context object to support
   * > EventHub cross-thread data transfer.
   *
   * @param { common.Context } context - Context object. For details about the serialization data
   *     types supported by Eventhub, see
   *     [Sequenceable Data Types](docroot://reference/apis-arkts/js-apis-taskpool.md#sequenceable-data-types). The
   *     data size cannot exceed 16 MB.
   * @param { boolean } enabled - Whether to enable the cross-thread data transfer feature.<br>- **true**: The
   *     cross-thread data transfer feature is enabled, and data is passed by reference.<br>- **false**: The
   *     cross-thread data transfer feature is disabled. Data is passed through serialization, which means that the
   *     data of the sender thread is independent of that of the receiver thread.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  function setEventHubMultithreadingEnabled(context: common.Context, enabled: boolean): void;
}

export default sendableContextManager;