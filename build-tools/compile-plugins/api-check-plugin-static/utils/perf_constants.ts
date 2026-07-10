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

/**
 * 性能打点名称常量 - 递进式构建
 *
 * 使用方式:
 * - PERF.CALLBACK                    -> 'apiCheck.callback'
 * - PERF.INIT_CONFIG                 -> 'apiCheck.callback.initConfig'
 * - PERF.CHECK_EXPR                  -> 'apiCheck.callback.checkExpression'
 * - PERF.CHECK_EXPR_GET_CONTEXT      -> 'apiCheck.callback.checkExpression.getContext'
 */

// 基础前缀
const BASE = 'apiCheck';

// Level 1
const CALLBACK = `${BASE}.callback`;

// Level 2
const INIT_CONFIG = `${CALLBACK}.initConfig`;
const CHECK_EXPR = `${CALLBACK}.checkExpression`;

// Level 3 - initConfig 子项
const READ_PERM = `${INIT_CONFIG}.readPermissions`;
const READ_CARD = `${INIT_CONFIG}.readCardPageSet`;
const READ_MODULE = `${INIT_CONFIG}.readSystemModules`;
const READ_SYSCAP = `${INIT_CONFIG}.readSyscapInfo`;

// Level 3 - checkExpression 子项
const GET_CONTEXT = `${CHECK_EXPR}.getContext`;
const GET_LEGACY = `${CHECK_EXPR}.getLegacy`;
const TRAVERSE_FILES = `${CHECK_EXPR}.traverseFiles`;

// Level 4 - traverseFiles.checkId 子项
const CHECK_ID = `${TRAVERSE_FILES}.checkId`;
const GET_DECL = `${CHECK_ID}.getDecl`;
const GET_CHECK_CFG = `${CHECK_ID}.getCheckConfig`;
const CHECK_JSDOC = `${CHECK_ID}.checkJsDoc`;

// Level 5 - checkJsDoc 子项
const PARSE_JSDOC = `${CHECK_JSDOC}.parseJSDoc`;
const GET_CURRENT_JSDOC = `${CHECK_JSDOC}.getCurrentJSDoc`;
const GET_ADDRESS = `${CHECK_JSDOC}.getAddress`;
const CHECK_CALLBACK = `${CHECK_JSDOC}.checkValidCallback`;
const GET_JSDOC = `${CHECK_JSDOC}.getJsDoc`;

// Level 6 - checkValidCallback 子项（各 checkJsDocSuppressorValidCallback 实现）
const CHECK_AVAILABLE_DECORATOR = `${CHECK_CALLBACK}.checkAvailableDecorator`;
const CHECK_SYSTEM_API_TAG = `${CHECK_CALLBACK}.checkSystemApiTag`;
const CHECK_SINCE_VALUE = `${CHECK_CALLBACK}.checkSinceValue`;
const CHECK_SYSCAP_ABILITY = `${CHECK_CALLBACK}.checkSyscapAbility`;
const CHECK_PERMISSION_VALUE = `${CHECK_CALLBACK}.checkPermissionValue`;
const CHECK_STAGE_MODULE_VALUE = `${CHECK_CALLBACK}.checkStageModuleValue`;

export const PERF = {
  // Level 1
  CALLBACK,

  // Level 2
  INIT_CONFIG,
  CHECK_EXPR,

  // Level 3 - initConfig 子项
  READ_PERM,
  READ_CARD,
  READ_MODULE,
  READ_SYSCAP,

  // Level 3 - checkExpression 子项
  GET_CONTEXT,
  GET_LEGACY,
  TRAVERSE_FILES,

  // Level 4 - checkId 子项
  CHECK_ID,
  GET_DECL,
  GET_CHECK_CFG,
  CHECK_JSDOC,

  // Level 5 - checkJsDoc 子项
  PARSE_JSDOC,
  GET_CURRENT_JSDOC,
  GET_ADDRESS,
  CHECK_CALLBACK,
  GET_JSDOC,

  // Level 6 - checkValidCallback 子项
  CHECK_AVAILABLE_DECORATOR,
  CHECK_SYSTEM_API_TAG,
  CHECK_SINCE_VALUE,
  CHECK_SYSCAP_ABILITY,
  CHECK_PERMISSION_VALUE,
  CHECK_STAGE_MODULE_VALUE,
} as const;

/**
 * 打点名称类型
 */
export type PerfName = typeof PERF[keyof typeof PERF];
