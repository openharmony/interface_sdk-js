/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import * as arkts from '@koalaui/libarkts';
import { Plugins, PluginContext } from '../common/plugin-context';
import { Debugger, debugLog } from '../common/debug';
import { transformApiExpression } from './api-transform-wrapper';
import { GlobalObject, ProjectConfig } from './utils/api_transform_typedef';

function createOrCleanProjectConfig(): ProjectConfig {
  return {
    bundleName: '',
    moduleName: '',
    cachePath: '',
    projectRootPath: '',
    isCrossplatform: false,
    bundleType: '',
    compileSdkVersion: 0,
    compatibleSdkVersion: 0,
    externalApiPaths: [],
    buildSdkPath: '',
    aceSoPath: '',
    deviceTypes: [],
    runtimeOS: '',
    compileFiles: [],
    sdkConfigPrefix: '',
    systemModules: []
  };
}

export const globalObject: GlobalObject = {
  projectConfig: createOrCleanProjectConfig()
};

/** 插件入口：注册到编译流程中 */
export function apiTransformPlugin(): Plugins {
  return {
    name: 'api-transform-plugins',
    checked: apiTransformCallback
  };
}

/**
 * 编译回调：遍历 AST 直接转换所有 apiAvailable 表达式
 */
function apiTransformCallback(this: PluginContext): arkts.ETSModule | undefined {
  Debugger.getInstance().phasesDebugLog('[API TRANSFORM PLUGIN] AFTER CHECKED ENTER');
  arkts.Performance.getInstance().memoryTrackerPrintCurrent('ArkTS:Check');
  arkts.Performance.getInstance().memoryTrackerReset();
  arkts.Performance.getInstance().startMemRecord('Node:APITransformPlugin:AfterCheck');

  const currentProjectConfig: ProjectConfig | undefined = this.getProjectConfig() as ProjectConfig | undefined;
  if (currentProjectConfig) {
    Object.assign(globalObject.projectConfig, currentProjectConfig);
  }

  const contextPtr = this.getContextPtr() ?? arkts.arktsGlobal.compilerContext?.peer;
  if (!!contextPtr) {
    let script: arkts.ETSModule | undefined;

    const program = arkts.getOrUpdateGlobalContext(contextPtr).program;
    script = program.ast as arkts.ETSModule;

    if (script) {
      debugLog('[BEFORE CHECKED SCRIPT] script: ', script.dumpSrc());
      arkts.Performance.getInstance().createEvent('api-transform-checked');
      transformApiExpression(contextPtr);
      script = program.ast as arkts.ETSModule;

      arkts.Performance.getInstance().stopEvent('api-transform-checked', true);
      debugLog('[AFTER CHECKED SCRIPT] script: ', script.dumpSrc());

      arkts.Performance.getInstance().memoryTrackerGetDelta('Node:APITransformPlugin:AfterCheck');
      arkts.Performance.getInstance().memoryTrackerReset();
      arkts.Performance.getInstance().stopMemRecord('Node:APITransformPlugin:AfterCheck');

      arkts.Performance.getInstance().startMemRecord('Node:ArkTS:Recheck');
      arkts.Performance.getInstance().createEvent('api-transform-recheck');
      arkts.recheckSubtree(script);
      arkts.Performance.getInstance().stopEvent('api-transform-recheck', true);
      this.setArkTSAst(script);
      arkts.Performance.getInstance().memoryTrackerGetDelta('Node:ArkTS:Recheck');
      arkts.Performance.getInstance().stopMemRecord('Node:ArkTS:Recheck');

      Debugger.getInstance().phasesDebugLog('[API TRANSFORM PLUGIN] AFTER CHECKED EXIT');
      return script;
    }
  }
  Debugger.getInstance().phasesDebugLog('[API TRANSFORM PLUGIN] AFTER CHECKED EXIT WITH NO TRANSFORM');
  return undefined;
}
