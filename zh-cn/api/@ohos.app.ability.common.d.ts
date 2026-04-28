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
 * 本模块提供Ability Kit中常用公共能力的纯类型定义，包含各类上下文对象、回调接口和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。
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
   * [UIAbility]{@link @ohos.app.ability.UIAbility}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type UIAbilityContext = _UIAbilityContext.default;

  /**
   * [UIAbility]{@link @ohos.app.ability.UIAbility}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type UIAbilityContext = _UIAbilityContext;

  /**
   * [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type AbilityStageContext = _AbilityStageContext.default;

  /**
   * [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type AbilityStageContext = _AbilityStageContext;

  /**
   * 应用上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ApplicationContext = _ApplicationContext.default;

  /**
   * 应用上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type ApplicationContext = _ApplicationContext;

  /**
   * 所有Context类型的父类。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type BaseContext = _BaseContext.default;

  /**
   * 所有Context类型的父类。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  export type BaseContext = _BaseContext;

  /**
   * [Stage模型](docroot://application-models/ability-terminology.md#stage模型)的上下文基类。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type Context = _Context.default;

  /**
   * [Stage模型](docroot://application-models/ability-terminology.md#stage模型)的上下文基类。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type Context = _Context;

  /**
   * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ExtensionContext = _ExtensionContext.default;

  /**
   * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}组件上下文，继承自Context。
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
   * ServiceExtensionContext二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  export type ServiceExtensionContext = _ServiceExtensionContext.default;

  /**
   * ServiceExtensionContext二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type ServiceExtensionContext = _ServiceExtensionContext;

  /**
   * EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type EventHub = _EventHub.default;

  /**
   * EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  export type EventHub = _EventHub;

  /**
   * 存储基础数据类型的容器。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type PacMap = _PacMap;

  /**
   * 定义Ability被拉起并退出后返回的结果码和数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type AbilityResult = _AbilityResult;

  /**
   * 在连接指定的后台服务时作为入参，用于接收与后台服务的连接状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  export type ConnectOptions = _ConnectOptions;

  /**
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   */
  export type UIExtensionContext = _UIExtensionContext.default;

  /**
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIExtensionContext = _UIExtensionContext;

  /**
   * AutoFillExtensionContext二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type AutoFillExtensionContext = _AutoFillExtensionContext.default;

  /**
   * AutoFillExtensionContext二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillExtensionContext = _AutoFillExtensionContext;

  /**
   * 定义了拉起UIExtensionAbility的回调结果，通常作为
   * [UIAbilityContext.startAbilityByType]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByType(type: string, wantParam: Record<string, Object>, abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>)}
   * /
   * [UIExtensionContext.startAbilityByType]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.startAbilityByType(type: string, wantParam: Record<string, Object>, abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>)}
   * 的入参传入。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export type AbilityStartCallback = _AbilityStartCallback;

  /**
   * AutoStartupInfo二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export type AutoStartupInfo = _AutoStartupInfo;

  /**
   * AutoStartupCallback二级模块。
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
   * [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}组件上下文，继承自Context。
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
   * UIServiceExtensionContext二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  export type UIServiceExtensionContext = _UIServiceExtensionContext.default;

  /**
   * UIServiceExtensionContext二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceExtensionContext = _UIServiceExtensionContext;

  /**
   * UIServiceProxy提供了与UIServiceExtensionAbility服务端数据通信的能力。UIServiceExtensionAbility是一类特殊的ExtensionAbility组件，这类组件由系统提供，通
   * 常用于提供浮窗组件相关扩展能力。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  export type UIServiceProxy = _UIServiceProxy.default;

  /**
   * UIServiceProxy提供了与UIServiceExtensionAbility服务端数据通信的能力。UIServiceExtensionAbility是一类特殊的ExtensionAbility组件，这类组件由系统提供，通
   * 常用于提供浮窗组件相关扩展能力。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceProxy = _UIServiceProxy;

  /**
   * UIServiceHostProxy二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  export type UIServiceHostProxy = _UIServiceHostProxy.default;

  /**
   * UIServiceHostProxy二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceHostProxy = _UIServiceHostProxy;

  /**
   * 在连接指定的UIServiceExtensionAbility服务时作为入参，用于提供UIServiceExtensionAbility连接回调数据能力。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  export type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback.default;

  /**
   * 在连接指定的UIServiceExtensionAbility服务时作为入参，用于提供UIServiceExtensionAbility连接回调数据能力。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback;

  /**
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * 组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  export type AppServiceExtensionContext = _AppServiceExtensionContext.default;

  /**
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * 组件上下文，继承自Context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type AppServiceExtensionContext = _AppServiceExtensionContext;

  /**
   * AgentCard在系统中显示agent的配置文件和联系信息。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentCard = _AgentCard;

  /**
   * AgentCard中的Provider是指发行和的组织或平台。
   * 管理代理的凭据。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentProvider = _AgentProvider;

  /**
   * AgentCard中的功能表示特定的skills、服务和功能
   * agent可以在系统内执行或提供。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentCapabilities = _AgentCapabilities;

  /**
   * AgentCard中的技能表示特定的 skills、专业知识和熟练程度
   * 用于执行任务或解决问题的代理。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentSkill = _AgentSkill;

  /**
   * agent的应用程序相关信息。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentAppInfo = _AgentAppInfo;

  /**
   * AgentHostProxy是连接到Agent的客户端的代理对象，通过它可以与agent.的连接对应方通信。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentHostProxy = _AgentHostProxy;

  /**
   * 表示AgentProxy类型。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type AgentProxy = _AgentProxy;

  /**
   * 表示AgentExtensionConnectCallback类型。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type AgentExtensionConnectCallback = _AgentExtensionConnectCallback;

  /**
   * agent service ability的上下文。
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
import type { AutoStartupInfo as _AutoStartupInfo } from './application/AutoStartupInfo';