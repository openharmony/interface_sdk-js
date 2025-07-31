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

import { Plugins, PluginContext } from '../common/plugin-context';
import { GlobalObject, ProjectConfig } from './utils/api_check_plugin_typedef';
import { createOrCleanProjectConfig } from './utils/api_check_plugin_utils';
import { ApiCheckWrapperServiceHost } from './api-check-wrapper';
import { getApiCheckWrapperServiceHost } from './src/api_check_config';
import { checkApiExpression, WrapperApi } from './api-check-wrapper/src/api_check_wrapper';

/**
 * 导出projectConfig作为全局变量
 */
export const globalObject: GlobalObject = {
  projectConfig: createOrCleanProjectConfig()
}

/**
 * 入口方法
 * 
 * @returns { Plugins }
 */
export function apiCheckPlugin(): Plugins {
  return {
    name: 'api-check-plugins',
    checked: apiCheckCallback,
    clean() {
      console.info("[API_CHECK_PLUGIN] CLEAN");
      WrapperApi.arktsGlobal.clearContext();
    }
  };
}

/**
 * 入口回调
 * 
 * @param { PluginContext } this PluginContext对象
 */
function apiCheckCallback(this: PluginContext): void {
  console.info('[API_CHECK_PLUGIN] AFTER CHECKED ENTER');
  try {
    const currentProjectConfig: ProjectConfig | undefined = this.getProjectConfig() as ProjectConfig | undefined;
    if (currentProjectConfig) {
      Object.assign(globalObject.projectConfig, currentProjectConfig);
      const ContextPtr = this.getContextPtr();
      const apiCheckHost: ApiCheckWrapperServiceHost = getApiCheckWrapperServiceHost();
      checkApiExpression(apiCheckHost, ContextPtr);
    }
    else {
      throw new Error('Get ProjectConfig Fail')
    }
  }
  catch (error) {
    if (error) {
      console.error(`[API_CHECK_PLUGIN] ${error}`)
    }
  }
  console.info('[API_CHECK_PLUGIN] AFTER CHECKED EXIT');
}