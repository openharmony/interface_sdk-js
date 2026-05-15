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
import fs from 'fs';
import path from 'path';
import { ParsedVersion } from '../../utils/api_check_plugin_typedef';
import {
  RUNTIME_OS_OH,
  AVAILABLE_TAG_NAME,
  AVAILABLE_DECORATOR_WARNING,
  ComparisonSenario
} from '../../utils/api_check_plugin_define';
import {
  parseVersionString,
  defaultFormatCheckerCompatibileIntegerAndMSF,
  getFormatChecker,
  initComparisonFunctions,
  getValueChecker,
  defaultValueChecker,
  getVersionByValueChecker
} from '../../utils/api_check_base_utils';
import { globalObject } from '../../index';

export const availableNodeCheckConfigCache: Map<string, string> = new Map<string, string>();
const fileAvailableCheckCache: Map<string, boolean> = new Map<string, boolean>();
const arkuiDependenceCache: Map<string, boolean> = new Map<string, boolean>();

export function isArkuiDependence(file: string): boolean {
  if (!file) {
    return false;
  }
  
  let exists: boolean | undefined = arkuiDependenceCache.get(file);
  if (exists !== undefined) {
    return exists;
  }
  
  const fileDir: string = path.dirname(file);
  const declarationsPath: string = path.resolve(__dirname, '../../../declarations').replace(/\\/g, '/');
  const componentPath: string = path.resolve(__dirname, '../../../../../component').replace(/\\/g, '/');
  exists = fileDir === declarationsPath || fileDir === componentPath;
  arkuiDependenceCache.set(file, exists);
  return exists;
}

export function isAvailableDecorator(annotation: arkts.AstNode): boolean {
  if (!annotation) {
    return false;
  }

  if (!annotation.expr) {
    return false;
  }

  let decoratorName: string = '';
  const expr = annotation.expr;

  if (expr.name) {
    decoratorName = expr.name;
  } else if (expr.expression && expr.expression.name) {
    decoratorName = expr.expression.name;
  }

  if (decoratorName !== 'Available') {
    return false;
  }

  const parseVersion = extractMinApiFromDecorator(annotation);
  if (!parseVersion) {
    return false;
  }

  const isValidFormat = parseVersion.os === RUNTIME_OS_OH
    ? defaultFormatCheckerCompatibileIntegerAndMSF(parseVersion.version)
    : getFormatChecker(AVAILABLE_TAG_NAME)(parseVersion.formatVersion);

  if (!isValidFormat) {
    return false;
  }
  
  return isValidFormat.result;
}

export function extractMinApiFromDecorator(annotation: arkts.AstNode): ParsedVersion | null {
  if (!annotation || !annotation.expr) {
    return null;
  }

  const expr = annotation.expr;
  if (!expr.arguments || expr.arguments.length === 0) {
    return null;
  }

  const arg = expr.arguments[0];
  if (!arg || !arg.properties) {
    return null;
  }

  for (const prop of arg.properties) {
    if (!prop.key || !prop.value) {
      continue;
    }

    const propName = prop.key.name || '';
    if (propName !== 'minApiVersion') {
      continue;
    }

    const value = prop.value;
    let versionText: string = '';

    if (value.getString) {
      versionText = value.getString();
    } else if (value.text) {
      versionText = value.text.toString();
    } else if (value.name) {
      versionText = value.name;
    }

    if (versionText) {
      return parseVersionString(versionText);
    }
  }

  return null;
}

export function getValidAnnotationFromNode(
  node: arkts.AstNode,
  predicate: (annotation: arkts.AstNode) => boolean,
  maxDepth: number = 50
): arkts.AstNode | null {
  if (!node || maxDepth <= 0) {
    return null;
  }

  const annotationArray: arkts.AstNode[] = [];
  if (node.annotations && Array.isArray(node.annotations)) {
    annotationArray.push(...node.annotations);
  }

  const validAnnotation = annotationArray.find(annotation => predicate(annotation));
  if (validAnnotation) {
    return validAnnotation;
  }

  const parentNode = node.parent;
  return parentNode ? getValidAnnotationFromNode(parentNode, predicate, maxDepth - 1) : null;
}

export function checkFileHasAvailableByFileName(sourceFileName: string): boolean {
  if (!sourceFileName) {
    return false;
  }

  if (fileAvailableCheckCache.has(sourceFileName)) {
    return fileAvailableCheckCache.get(sourceFileName)!;
  }

  try {
    const isProjectFile = path.normalize(sourceFileName).startsWith(globalObject.projectConfig.projectRootPath);
    if (!isProjectFile) {
      fileAvailableCheckCache.set(sourceFileName, false);
      return false;
    }

    const fileContent: string = fs.readFileSync(sourceFileName, { encoding: 'utf-8' });
    const availableContentChecker = /@Available/.test(fileContent);
    fileAvailableCheckCache.set(sourceFileName, availableContentChecker);
    return availableContentChecker;
  } catch (error) {
    fileAvailableCheckCache.set(sourceFileName, false);
    return false;
  }
}

export function getAvailableNodeKey(node: arkts.AstNode): string {
  const program = arkts.getProgramFromAstNode(node);
  const fileName = program?.sourceFilePath || '';
  const startPos = node.startPosition;
  const line = startPos?.line() || 0;
  const col = startPos?.col() || 0;
  return `${fileName}_${line}_${col}`;
}

export function checkAvailableDecoratorImpl(
  node: arkts.AstNode,
  declaration: arkts.AstNode,
  messageCallback: (message: string) => void
): boolean {
  if (!globalObject.projectConfig.compatibleSdkVersion || !node || !declaration) {
    return false;
  }

  let key: string = getAvailableNodeKey(node);
  if (availableNodeCheckConfigCache.has(key)) {
    return false;
  } else {
    availableNodeCheckConfigCache.set(key, '');
  }

  const program = arkts.getProgramFromAstNode(node);
  const sourceFileName = program?.sourceFilePath || '';
  if (!sourceFileName || !path.normalize(sourceFileName).startsWith(globalObject.projectConfig.projectRootPath)) {
    return false;
  }

  const declProgram = arkts.getProgramFromAstNode(declaration);
  const declFileName = declProgram?.sourceFilePath || '';
  if (!declFileName || !path.normalize(declFileName).startsWith(globalObject.projectConfig.projectRootPath)) {
    return false;
  }

  initComparisonFunctions();

  const availableVersion = extractMinApiFromDecorator(node);
  if (!availableVersion) {
    return false;
  }

  const sdkVersion = globalObject.projectConfig.compatibleSdkVersion?.toString() || '';
  const minApiVersion = availableVersion.version;

  const valueChecker = getValueChecker(AVAILABLE_TAG_NAME);

  const compareResult = valueChecker === defaultValueChecker
    ? valueChecker(minApiVersion, sdkVersion, ComparisonSenario.Trigger)
    : valueChecker(availableVersion.formatVersion, sdkVersion, ComparisonSenario.Trigger);

  if (compareResult.result) {
    return false;
  }

  if (checkParentVersionSuppressed(declaration, availableVersion)) {
    return false;
  }

  const message = AVAILABLE_DECORATOR_WARNING
    .replace('$SINCE1', availableVersion.version)
    .replace('$SINCE2', sdkVersion);

  messageCallback(message);
  return true;
}

function checkParentVersionSuppressed(
  declaration: arkts.AstNode,
  minAvailableVersion: ParsedVersion
): boolean {
  if (!declaration || !declaration.parent) {
    return false;
  }
  
  const parentAnnotation = getValidAnnotationFromNode(declaration.parent, isAvailableDecorator);
  if (!parentAnnotation) {
    return false;
  }

  const parentVersion = extractMinApiFromDecorator(parentAnnotation);
  if (!parentVersion) {
    return false;
  }

  const valueChecker = getValueChecker(AVAILABLE_TAG_NAME);
  const scenario = minAvailableVersion.os === RUNTIME_OS_OH
    ? ComparisonSenario.SuppressByOHVersion
    : ComparisonSenario.SuppressByOtherOSVersion;

  const compareResult = valueChecker === defaultValueChecker
    ? valueChecker(parentVersion.version, getVersionByValueChecker(minAvailableVersion, valueChecker), scenario)
    : valueChecker(parentVersion.formatVersion, getVersionByValueChecker(minAvailableVersion, valueChecker), scenario);

  return compareResult.result;
}