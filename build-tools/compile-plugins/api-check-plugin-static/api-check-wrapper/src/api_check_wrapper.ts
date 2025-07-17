/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

import * as arkts from '@koalaui/libarkts'
import { traverseProgram, getJSDocInformation } from '../utils/ts_wrapper_node_util'
import { ApiCheckWrapperServiceHost, JsDocNodeCheckConfig, FileCheckModuleInfo, JSDoc, JSDocTag, JsDocNodeCheckConfigItem, CurrentAddress } from '../utils/api_check_wrapper_typedef'
import { SINCE_TAG_NAME } from "../../utils/api_check_plugin_define"
import { parseCommand2JSDoc } from '../utils/api_check_wrapper_utils'
export let curApiCheckWrapper: ApiCheckWrapper
export let curFileCheckModuleInfo: FileCheckModuleInfo

/**
 * 导出arkts命名空间
 */
export const WrapeprApi = {
  ...arkts
}

let checkedNode = new Map();
/**
 * 遍历节点树
 * @param sourcefile 
 */
export class ApiCheckWrapper {
  constructor(apiCheckHost: ApiCheckWrapperServiceHost) {
    this.apiCheckHost = apiCheckHost
  }
  setFileName(fileName: string) {
    this.fileName = fileName
  }

  fileName: string // ets源文件位置

  sourcefile: string // 声明节点位置

  apiCheckHost: ApiCheckWrapperServiceHost
}
export function checkApiExpression(apiCheckHost: ApiCheckWrapperServiceHost, peer: number | undefined) {
  checkedNode = new Map()
  curApiCheckWrapper = new ApiCheckWrapper(apiCheckHost)
  curApiCheckWrapper.fileName = arkts.arktsGlobal.filePath

  curFileCheckModuleInfo = {} as FileCheckModuleInfo
  curFileCheckModuleInfo.currentFileName = arkts.arktsGlobal.filePath

  const contextPtr = arkts.arktsGlobal.compilerContext?.peer ?? peer
  // 获取当前ets文件路径，设置参数
  if (!!contextPtr) {
    let program = arkts.getOrUpdateGlobalContext(contextPtr).program
    let script = program.astNode
    // 获取根节点，开始遍历
    traverseProgram(script)
  }

}

/**
 * 处理identifier
 * @param node 
 */
export function checkIdentifier(node: arkts.AstNode) {
  // 获取校验节点的声明节点
  const decl = arkts.getDecl(node)

  if (decl === undefined || decl === null) {
    console.log("debug decl error" + node.dumpJson())
    return
  }
  // 获取声明节点系统路径
  let sysPath = getSysPath(decl)
  curApiCheckWrapper.sourcefile = sysPath

  if (sysPath === undefined || sysPath === null) {
    console.log("debug sysPath error :" + node.dumpJson())
    return
  }
  let checkPram: JsDocNodeCheckConfig = curApiCheckWrapper.apiCheckHost.getJsDocNodeCheckedConfig(curFileCheckModuleInfo.currentFileName, sysPath)
  if (!checkPram.nodeNeedCheck) {
    return
  }
  // 获取校验节点的行列信息
  const address = getCurrentAddressByNode(node)
  if (confirmNodeChecked(node.name, address.line, address.column)) {
    return
  }
  //进入检查jsdoc流程
  expressionCheckByJsDoc(decl, node, address, checkPram.checkConfig)
}

function confirmNodeChecked(nodeName: string, line: number, col: number) {
  let nodeKey = nodeName + "_" + line + "_" + col
  if (checkedNode.has(nodeKey) && checkedNode.get(nodeKey) !== undefined) {
    return true;
  } else {
    checkedNode.set(nodeKey, nodeName)
  }
}

function getSysPath(decl: arkts.AstNode): string {
  // 获取节点的声明节点，
  let program = arkts.getProgramFromAstNode(decl)
  return program.sourceFilePath
}

/**
 * 通过声明节点获取注释
 * @param decl 声明节点
 * @returns 注释信息
 */
export function getPeerJsDocs(decl: arkts.AstNde): string {
  return getJSDocInformation(decl)
}

function expressionCheckByJsDoc(declaration: arkts.AstNode, identifier: arkts.AstNode, address: CurrentAddress, checkConfig: JsDocNodeCheckConfigItem[]): void {
  const jsDocsString = getPeerJsDocs(declaration)
  const jsDocs: JSDoc[] = parseCommand2JSDoc(jsDocsString)
  const jsDocTags = getCurrentJSDoc(jsDocs)
  for (let i = 0; i < checkConfig.length; i++) {
    const config = checkConfig[i]
    let tagNameExisted = false
    jsDocTags.forEach((item) => {
      tagNameExisted = false
      if (config.tagName.includes(item.tag)) {
        if (config.checkValidCallback) {
          tagNameExisted = config.checkValidCallback(jsDocs, config)
        } else {
          tagNameExisted = true
        }
      }
      if (tagNameExisted && !config.tagNameShouldExisted) {
        curApiCheckWrapper.apiCheckHost.pushLogInfo(identifier.name, curApiCheckWrapper.fileName, address, config.type, config.message)
      }
    })
    if (config.tagNameShouldExisted && !tagNameExisted) {
      curApiCheckWrapper.apiCheckHost.pushLogInfo(identifier.name, curApiCheckWrapper.fileName, address, config.type, config.message)
    }
  }
}

/**
 * 获取节点行列信息
 * @param node 需要获取行列信息的节点
 * @returns 节点行列信息
 */
function getCurrentAddressByNode(node: arkts.AstNode): CurrentAddress {
  let address = {} as CurrentAddress
  let startPosition = node.startPosition
  address.column = startPosition.col()
  address.line = startPosition.line() + 1
  return address
}

/**
 * 获取最大的版本号
 * @param jsDocs 
 * @returns 
 */
function getCurrentJSDoc(jsDocs: JSDoc[]): JSDocTag[] {
  let jsDocTags: JSDocTag[] = []
  let maxVersion: number = 0
  if (jsDocs && jsDocs.length > 0) {
    for (let i = 0; i < jsDocs.length; i++) {
      const jsdoc: JSDoc = jsDocs[i]
      if (jsdoc.tags && jsdoc.tags.length > 0) {
        for (let j = 0; j < jsdoc.tags.length; j++) {
          const tag: JSDocTag = jsdoc.tags[j]
          if (tag.tag === SINCE_TAG_NAME) {
            const currentVersion: number = Number.parseInt(tag.name ?? "0")
            if (!Number.isNaN(currentVersion) && currentVersion > maxVersion) {
              maxVersion = currentVersion
              jsDocTags = jsdoc.tags
            }
            break
          }
        }
      }
    }
  }
  return jsDocTags
}