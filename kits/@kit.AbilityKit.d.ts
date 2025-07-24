/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.1&1.2 */
import common from '@ohos.app.ability.common';
import ConfigurationConstant from '@ohos.app.ability.ConfigurationConstant';
import { Configuration } from '@ohos.app.ability.Configuration';
import Want from '@ohos.app.ability.Want';
import StartOptions from '@ohos.app.ability.StartOptions';
import contextConstant from '@ohos.app.ability.contextConstant';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import UIExtensionContentSession from '@ohos.app.ability.UIExtensionContentSession';
import wantConstant from '@ohos.app.ability.wantConstant';
import AbilityStage from '@ohos.app.ability.AbilityStage';
import UIExtensionAbility from '@ohos.app.ability.UIExtensionAbility';
import uriPermissionManager from '@ohos.application.uriPermissionManager';
import ServiceExtensionAbility from '@ohos.app.ability.ServiceExtensionAbility';
/*** endif */

import ability from '@ohos.ability.ability';
import { ErrorCode } from '@ohos.ability.errorCode';
import featureAbility from '@ohos.ability.featureAbility';
import particleAbility from '@ohos.ability.particleAbility';
import abilityAccessCtrl, {
  Context, PermissionRequestResult, Permissions
} from '@ohos.abilityAccessCtrl';
import Ability from '@ohos.app.ability.Ability';
import AbilityLifecycleCallback from '@ohos.app.ability.AbilityLifecycleCallback';
import abilityManager from '@ohos.app.ability.abilityManager';
import ActionExtensionAbility from '@ohos.app.ability.ActionExtensionAbility';
import ApplicationStateChangeCallback from '@ohos.app.ability.ApplicationStateChangeCallback';
import appManager from '@ohos.app.ability.appManager';
import appRecovery from '@ohos.app.ability.appRecovery';
import AutoFillExtensionAbility from '@ohos.app.ability.AutoFillExtensionAbility';
import autoFillManager from '@ohos.app.ability.autoFillManager';
import autoStartupManager from '@ohos.app.ability.autoStartupManager';
import ChildProcess from '@ohos.app.ability.ChildProcess';
import childProcessManager from '@ohos.app.ability.childProcessManager';
import { ChildProcessArgs } from '@ohos.app.ability.ChildProcessArgs';
import { ChildProcessOptions } from '@ohos.app.ability.ChildProcessOptions';
import dataUriUtils from '@ohos.app.ability.dataUriUtils';
import dialogRequest from '@ohos.app.ability.dialogRequest';
import dialogSession from '@ohos.app.ability.dialogSession';
import EnvironmentCallback from '@ohos.app.ability.EnvironmentCallback';
import errorManager from '@ohos.app.ability.errorManager';
import ExtensionAbility from '@ohos.app.ability.ExtensionAbility';
import insightIntent from '@ohos.app.ability.insightIntent';
import InsightIntentContext from '@ohos.app.ability.InsightIntentContext';
import insightIntentDriver from '@ohos.app.ability.insightIntentDriver';
import InsightIntentExecutor from '@ohos.app.ability.InsightIntentExecutor';
import { InsightIntentLink, InsightIntentPage, InsightIntentFunctionMethod, InsightIntentFunction,
  InsightIntentEntry, LinkParamCategory, InsightIntentForm, InsightIntentEntity } from '@ohos.app.ability.InsightIntentDecorator';
import InsightIntentEntryExecutor from '@ohos.app.ability.InsightIntentEntryExecutor';
import missionManager from '@ohos.app.ability.missionManager';
import OpenLinkOptions from '@ohos.app.ability.OpenLinkOptions';
import quickFixManager from '@ohos.app.ability.quickFixManager';
import ShareExtensionAbility from '@ohos.app.ability.ShareExtensionAbility';
import UIAbility, {
  Callee, CalleeCallback, Caller, OnReleaseCallback, OnRemoteStateChangeCallback
} from '@ohos.app.ability.UIAbility';
import wantAgent, { WantAgent } from '@ohos.app.ability.wantAgent';
import businessAbilityRouter from '@ohos.app.businessAbilityRouter';
import appControl from '@ohos.bundle.appControl';
import bundleManager from '@ohos.bundle.bundleManager';
import bundleMonitor from '@ohos.bundle.bundleMonitor';
import bundleResourceManager from '@ohos.bundle.bundleResourceManager';
import bundle from '@ohos.bundle';
import defaultAppManager from '@ohos.bundle.defaultAppManager';
import distributedBundleManager from '@ohos.bundle.distributedBundleManager';
import freeInstall from '@ohos.bundle.freeInstall';
import innerBundleManager, { BundleStatusCallback } from '@ohos.bundle.innerBundleManager';
import installer from '@ohos.bundle.installer';
import launcherBundleManager from '@ohos.bundle.launcherBundleManager';
import overlay from '@ohos.bundle.overlay';
import continuationManager from '@ohos.continuation.continuationManager';
import continueManager from '@ohos.app.ability.continueManager';
import distributedBundle from '@ohos.distributedBundle';
import distributedMissionManager from '@ohos.distributedMissionManager';
import Package, {
  CheckPackageHasInstalledOptions, CheckPackageHasInstalledResponse
} from '@system.package';
import privacyManager from '@ohos.privacyManager';
import EmbeddedUIExtensionAbility from '@ohos.app.ability.EmbeddedUIExtensionAbility';
import StartupConfig from '@ohos.app.appstartup.StartupConfig';
import StartupConfigEntry from '@ohos.app.appstartup.StartupConfigEntry';
import StartupListener from '@ohos.app.appstartup.StartupListener';
import StartupTask from '@ohos.app.appstartup.StartupTask';
import startupManager from '@ohos.app.appstartup.startupManager';
import sendableContextManager from '@ohos.app.ability.sendableContextManager';
import screenLockFileManager from '@ohos.ability.screenLockFileManager';
import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import EmbeddableUIAbility from '@ohos.app.ability.EmbeddableUIAbility';
import PhotoEditorExtensionAbility from '@ohos.app.ability.PhotoEditorExtensionAbility';
import appDomainVerify from '@ohos.bundle.appDomainVerify';
import shortcutManager from '@ohos.bundle.shortcutManager';
import application from '@ohos.app.ability.application';
import UIServiceExtensionAbility from '@ohos.app.ability.UIServiceExtensionAbility';
import CompletionHandler from '@ohos.app.ability.CompletionHandler';
import AppServiceExtensionAbility from '@ohos.app.ability.AppServiceExtensionAbility';
import kioskManager from '@ohos.app.ability.kioskManager';

export {
  Ability, AbilityConstant, AbilityLifecycleCallback, AbilityStage, ActionExtensionAbility,
  ApplicationStateChangeCallback, AutoFillExtensionAbility, BundleStatusCallback, Callee,
  CalleeCallback, Caller, CheckPackageHasInstalledOptions, CheckPackageHasInstalledResponse,
  ChildProcess, Configuration, ConfigurationConstant, Context, EnvironmentCallback, ErrorCode,
  ExtensionAbility, InsightIntentContext, InsightIntentExecutor, OnReleaseCallback, OnRemoteStateChangeCallback,
  OpenLinkOptions, Package, PermissionRequestResult, Permissions, ServiceExtensionAbility, ShareExtensionAbility,
  StartOptions, UIAbility, UIExtensionAbility, UIExtensionContentSession, Want, WantAgent, ability, abilityAccessCtrl,
  abilityManager, appControl, appManager, appRecovery, autoFillManager, autoStartupManager, bundle, bundleManager,
  bundleMonitor, bundleResourceManager, businessAbilityRouter, childProcessManager, common, contextConstant,
  continuationManager, continueManager, dataUriUtils, defaultAppManager, dialogRequest, dialogSession, distributedBundle,
  distributedBundleManager, distributedMissionManager, errorManager, featureAbility, freeInstall,
  innerBundleManager, insightIntent, insightIntentDriver, installer, launcherBundleManager, missionManager,
  overlay, particleAbility, quickFixManager, uriPermissionManager, wantAgent, wantConstant, privacyManager,
  EmbeddedUIExtensionAbility, StartupConfig, StartupConfigEntry, StartupListener, StartupTask, startupManager,
  screenLockFileManager, AtomicServiceOptions, EmbeddableUIAbility, ChildProcessArgs, ChildProcessOptions,
  sendableContextManager, PhotoEditorExtensionAbility, shortcutManager, appDomainVerify, application, UIServiceExtensionAbility,
  InsightIntentLink, InsightIntentPage, InsightIntentFunctionMethod, InsightIntentFunction, InsightIntentEntryExecutor,
  InsightIntentEntry, LinkParamCategory, CompletionHandler, AppServiceExtensionAbility, InsightIntentForm, InsightIntentEntity, kioskManager
};

/*** if arkts 1.2 */
import UIAbility from '@ohos.app.ability.UIAbility';
import {
  Callee, Caller, OnReleaseCallback
} from '@ohos.app.ability.UIAbility';
import wantAgent from '@ohos.app.ability.wantAgent';
import { WantAgent } from '@ohos.app.ability.wantAgent';
import appControl from '@ohos.bundle.appControl';
import bundleManager from '@ohos.bundle.bundleManager';
import bundleMonitor from '@ohos.bundle.bundleMonitor';
import bundleResourceManager from '@ohos.bundle.bundleResourceManager';
import defaultAppManager from '@ohos.bundle.defaultAppManager';
import distributedBundleManager from '@ohos.bundle.distributedBundleManager';
import freeInstall from '@ohos.bundle.freeInstall';
import installer from '@ohos.bundle.installer';
import launcherBundleManager from '@ohos.bundle.launcherBundleManager';
import overlay from '@ohos.bundle.overlay';
import shortcutManager from '@ohos.bundle.shortcutManager';

export {
  common, ConfigurationConstant, Configuration, Want, StartOptions, contextConstant, AbilityConstant,
  UIExtensionContentSession, wantConstant, UIAbility, Callee, Caller, OnReleaseCallback, AbilityStage,
  UIExtensionAbility, uriPermissionManager, ServiceExtensionAbility, wantAgent, WantAgent,
  appControl, bundleManager, bundleMonitor, bundleResourceManager, defaultAppManager, distributedBundleManager,
  freeInstall, installer, launcherBundleManager, overlay, shortcutManager
};
/*** endif */
