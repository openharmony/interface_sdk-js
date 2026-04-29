/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import * as _UIAbilityContext from './application/UIAbilityContext';
import type * as _UIExtensionContext from './application/UIExtensionContext';
import type * as _AutoFillExtensionContext from './application/AutoFillExtensionContext';
import * as _AbilityStageContext from './application/AbilityStageContext';
import * as _ApplicationContext from './application/ApplicationContext';
import * as _BaseContext from './application/BaseContext';
import * as _Context from './application/Context';
import * as _ExtensionContext from './application/ExtensionContext';
import * as _FormExtensionContext from './application/FormExtensionContext';
import * as _FormEditExtensionContext from './application/FormEditExtensionContext';
import * as _LiveFormExtensionContext from './application/LiveFormExtensionContext';
import * as _ServiceExtensionContext from './application/ServiceExtensionContext';
import * as _EventHub from './application/EventHub';
import type * as _VpnExtensionContext from './application/VpnExtensionContext';
import type { AutoStartupCallback as _AutoStartupCallback } from './application/AutoStartupCallback';
import type { AutoStartupInfo as _AutoStartupInfo } from './application/AutoStartupInfo';
import type * as _EmbeddableUIAbilityContext from './application/EmbeddableUIAbilityContext';
import type * as _PhotoEditorExtensionContext from './application/PhotoEditorExtensionContext';
import * as _UIServiceExtensionContext from './application/UIServiceExtensionContext';
import * as _UIServiceProxy from './application/UIServiceProxy';
import * as _UIServiceHostProxy from './application/UIServiceHostProxy';
import * as _UIServiceExtensionConnectCallback from './application/UIServiceExtensionConnectCallback';
/*** endif */
/*** if arkts static */
import _UIAbilityContext from './application/UIAbilityContext';
import _UIExtensionContext from './application/UIExtensionContext';
import _AutoFillExtensionContext from './application/AutoFillExtensionContext';
import _UIServiceExtensionContext from './application/UIServiceExtensionContext';
import _AbilityStageContext from './application/AbilityStageContext';
import _ApplicationContext from './application/ApplicationContext';
import _AppServiceExtensionContext from './application/AppServiceExtensionContext';
import _BaseContext from './application/BaseContext';
import _Context from './application/Context';
import _ExtensionContext from './application/ExtensionContext';
import _FormExtensionContext from './application/FormExtensionContext';
import _FormEditExtensionContext from './application/FormEditExtensionContext';
import _LiveFormExtensionContext from './application/LiveFormExtensionContext';
import _ServiceExtensionContext from './application/ServiceExtensionContext';
import _EventHub from './application/EventHub';
import type _AutoStartupCallback from './application/AutoStartupCallback';
import type _AutoStartupInfo from './application/AutoStartupInfo';
import _UIServiceProxy from './application/UIServiceProxy';
import _UIServiceHostProxy from './application/UIServiceHostProxy';
import _UIServiceExtensionConnectCallback from './application/UIServiceExtensionConnectCallback';
import type _PhotoEditorExtensionContext from './application/PhotoEditorExtensionContext';
/*** endif */
import { AbilityResult as _AbilityResult } from './ability/abilityResult';
import type _AbilityStartCallback from './application/AbilityStartCallback';
import { ConnectOptions as _ConnectOptions } from './ability/connectOptions';
import { PacMap as _PacMap } from './ability/dataAbilityHelper';
import { AgentCard as _AgentCard, AgentProvider as _AgentProvider, AgentCapabilities as _AgentCapabilities,
         AgentSkill as _AgentSkill, AgentAppInfo as _AgentAppInfo } from './application/AgentCard';
import { AgentHostProxy as _AgentHostProxy } from './application/AgentHostProxy';
import { AgentProxy as _AgentProxy } from './application/AgentProxy';
import { AgentExtensionConnectCallback as _AgentExtensionConnectCallback } from './application/AgentExtensionConnectCallback';
import _AgentExtensionContext from './application/AgentExtensionContext';

/**
 * You can use this module to reference the ability public module class.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace common {
  /**
   * Defines the context environment for the [UIAbility]{@link @ohos.app.ability.UIAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type UIAbilityContext = _UIAbilityContext.default;

  /**
   * Defines the context environment for the [UIAbility]{@link @ohos.app.ability.UIAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type UIAbilityContext = _UIAbilityContext;

  /**
   * Defines the context environment for the [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}. It
   * inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type AbilityStageContext = _AbilityStageContext.default;

  /**
   * Defines the context environment for the [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}. It
   * inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type AbilityStageContext = _AbilityStageContext;

  /**
   * Defines the application context. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ApplicationContext = _ApplicationContext.default;

  /**
   * Defines the application context. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type ApplicationContext = _ApplicationContext;

  /**
   * Defines the parent class of all context types.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type BaseContext = _BaseContext.default;

  /**
   * Defines the parent class of all context types.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  export type BaseContext = _BaseContext;

  /**
   * Defines the context base class for the
   * [stage model](docroot://application-models/ability-terminology.md#stage-model).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type Context = _Context.default;

  /**
   * Defines the context base class for the
   * [stage model](docroot://application-models/ability-terminology.md#stage-model).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type Context = _Context;

  /**
   * Defines the context environment for the
   * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ExtensionContext = _ExtensionContext.default;

  /**
   * Defines the context environment for the
   * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export type ExtensionContext = _ExtensionContext;

  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @typedef { _FormExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  export type FormExtensionContext = _FormExtensionContext.default;

  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @typedef { _FormExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export type FormExtensionContext = _FormExtensionContext;

  /**
   * The context of form edit extension. It allows access to
   * formEditExtension-specific resources.
   *
   * @typedef { _FormEditExtensionContext.default }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  export type FormEditExtensionContext = _FormEditExtensionContext.default;

  /**
   * The context of form edit extension. It allows access to
   * formEditExtension-specific resources.
   *
   * @typedef { _FormEditExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 static
   */
  export type FormEditExtensionContext = _FormEditExtensionContext;

  /**
   * The context of live form extension. It allows access to
   * liveFormExtension-specific resources.
   *
   * @typedef { _LiveFormExtensionContext.default }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  export type LiveFormExtensionContext = _LiveFormExtensionContext.default;

  /**
   * The context of live form extension. It allows access to
   * liveFormExtension-specific resources.
   *
   * @typedef { _LiveFormExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 static
   */
  export type LiveFormExtensionContext = _LiveFormExtensionContext;

  /**
   * Level-2 module ServiceExtensionContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  export type ServiceExtensionContext = _ServiceExtensionContext.default;

  /**
   * Level-2 module ServiceExtensionContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type ServiceExtensionContext = _ServiceExtensionContext;

  /**
   * Defines EventHub, which is an event communication mechanism based on the publish-subscribe pattern.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type EventHub = _EventHub.default;

  /**
   * Defines EventHub, which is an event communication mechanism based on the publish-subscribe pattern.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  export type EventHub = _EventHub;

  /**
   * Defines the container of basic data types.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type PacMap = _PacMap;

  /**
   * Defines the result code and data returned when a started ability is terminated.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type AbilityResult = _AbilityResult;

  /**
   * Defines the connection options. It is used as an input parameter for connection to a background service, to receive
   *  the connection status with the background service.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  export type ConnectOptions = _ConnectOptions;

  /**
   * Defines the context environment for the
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   */
  export type UIExtensionContext = _UIExtensionContext.default;

  /**
   * Defines the context environment for the
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIExtensionContext = _UIExtensionContext;

  /**
   * Level-2 module AutoFillExtensionContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type AutoFillExtensionContext = _AutoFillExtensionContext.default;

  /**
   * Level-2 module AutoFillExtensionContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillExtensionContext = _AutoFillExtensionContext;

  /**
   * Defines the callback invoked to return the UIExtensionAbility startup result. It is usually used as an input
   * parameter in
   * [UIAbilityContext.startAbilityByType]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByType(type: string, wantParam: Record<string, Object>, abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>)}
   *  or
   * [UIExtensionContext.startAbilityByType]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.startAbilityByType(type: string, wantParam: Record<string, Object>, abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>)}
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export type AbilityStartCallback = _AbilityStartCallback;

  /**
   * Level-2 module AutoStartupInfo.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export type AutoStartupInfo = _AutoStartupInfo;

  /**
   * Level-2 module AutoStartupCallback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export type AutoStartupCallback = _AutoStartupCallback;

  /**
   * The context of vpn extension. It allows access to
   * vpnExtension-specific resources.
   * The class of auto startup info.
   *
   * @typedef { _VpnExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type VpnExtensionContext = _VpnExtensionContext.default;

  /**
   * Defines the context environment for the
   * [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}. It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type EmbeddableUIAbilityContext = _EmbeddableUIAbilityContext.default;

  /**
   * The context of an photo editor extension ability.
   *
   * @typedef { _PhotoEditorExtensionContext.default }
   * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type PhotoEditorExtensionContext = _PhotoEditorExtensionContext.default;

  /**
   * The context of an photo editor extension ability.
   *
   * @typedef { _PhotoEditorExtensionContext }
   * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
   * @stagemodelonly
   * @since 23 static
   */
  export type PhotoEditorExtensionContext = _PhotoEditorExtensionContext;

  /**
   * Level-2 module UIServiceExtensionContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  export type UIServiceExtensionContext = _UIServiceExtensionContext.default;

  /**
   * Level-2 module UIServiceExtensionContext.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceExtensionContext = _UIServiceExtensionContext;

  /**
   * Defines the capability for data communication with the UIServiceExtensionAbility. UIServiceExtensionAbility is a
   * special type of ExtensionAbility provided by the system and is used to provide extended capabilities related to
   * floating windows.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  export type UIServiceProxy = _UIServiceProxy.default;

  /**
   * Defines the capability for data communication with the UIServiceExtensionAbility. UIServiceExtensionAbility is a
   * special type of ExtensionAbility provided by the system and is used to provide extended capabilities related to
   * floating windows.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceProxy = _UIServiceProxy;

  /**
   * Level-2 module UIServiceHostProxy.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  export type UIServiceHostProxy = _UIServiceHostProxy.default;

  /**
   * Level-2 module UIServiceHostProxy.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceHostProxy = _UIServiceHostProxy;

  /**
   * Defines the connection callback. It is used as an input parameter for connection to a UIServiceExtensionAbility, to
   *  provide the callback for the connection.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  export type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback.default;

  /**
   * Defines the connection callback. It is used as an input parameter for connection to a UIServiceExtensionAbility, to
   *  provide the callback for the connection.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback;

  /**
   * Defines the context environment for the
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * . It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  export type AppServiceExtensionContext = _AppServiceExtensionContext.default;

  /**
   * Defines the context environment for the
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * . It inherits from Context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type AppServiceExtensionContext = _AppServiceExtensionContext;

  /**
   * The AgentCard information describes the basic information and capabilities provided by an Agent.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentCard = _AgentCard;

  /**
   * The Provider in an AgentCard refers to the organization or platform that issues and
   * manages the agent's credentials.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentProvider = _AgentProvider;

  /**
   * Capabilities in an AgentCard represent the specific skills, services, and functions that
   * an agent can perform or provide within the system.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentCapabilities = _AgentCapabilities;

  /**
   * Skills in an AgentCard represent the specific abilities, expertise, and proficiencies that an
   * agent possesses for performing tasks or solving problems.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentSkill = _AgentSkill;

  /**
   * Application-related information for the agent.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentAppInfo = _AgentAppInfo;

  /**
   * The AgentHostProxy is a proxy object for the client connected to the Agent, through which it
   * can communicate with the Agent's connection counterpart.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentHostProxy = _AgentHostProxy;

  /**
   * Represents the AgentProxy type.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type AgentProxy = _AgentProxy;

  /**
   * Represents the AgentExtensionConnectCallback type.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type AgentExtensionConnectCallback = _AgentExtensionConnectCallback;

  /**
   * The context of the agent service ability.
   *
   * @typedef { _AgentExtensionContext }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentExtensionContext = _AgentExtensionContext;
}

export default common;
