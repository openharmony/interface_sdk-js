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

import fs from 'fs';
import * as arkts from '@koalaui/libarkts';
import path from 'path';
import {
  AVAILABLE_TAG_NAME,
  AVAILABLE_FILE_NAME,
  AVAILABLE_SCOPE_ERROR,
  AVAILABLE_OSNAME_ERROR,
  AVAILABLE_VERSION_FORMAT_ERROR_PREFIX,
  RUNTIME_OS_OH,
  VersionValidationResult,
  ERROR_CODE_INFO,
  DISTINGUISH_FUNCTION_NAME
} from '../api_check_plugin_define';
import {
  parseVersionString,
  defaultFormatCheckerCompatibileIntegerAndMSF,
  getFormatChecker,
  initComparisonFunctions,
  compareVersions,
  isAnnotationAllowed
} from '../api_check_base_utils';
import { ParsedVersion } from '../api_check_plugin_typedef';
import { globalObject, fileAvailableCheckCache } from '../../index';
import { DiagnosticCategory, ConditionCheckResult } from '../../api-check-wrapper/utils/api_check_wrapper_typedef';

export const availableNodeCheckConfigCache: Map<string, string> = new Map<string, string>();

export function isAvailableDecorator(annotation: arkts.AnnotationUsage): boolean {
  if (!annotation) {
    return false;
  }

  if (!annotation.expr) {
    return false;
  }

  let decoratorName: string = '';
  const expr = annotation.expr;

  if (!!expr && arkts.isIdentifier(expr) && expr.name) {
    decoratorName = expr.name;
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

export function extractMinApiFromDecorator(annotation: arkts.AnnotationUsage | undefined): ParsedVersion | null {
  if (!annotation || !annotation.expr) {
    return null;
  }

  for (const prop of annotation.properties) {
    if (!arkts.isClassProperty(prop) || !prop.key || !prop.value) {
      continue;
    }

    const propName = arkts.isIdentifier(prop.key) ? prop.key.name : '';
    if (propName !== 'minApiVersion') {
      continue;
    }

    const versionText = arkts.isStringLiteral(prop.value) ? prop.value.str : undefined;
    if (versionText) {
      return parseVersionString(versionText);
    }
  }

  return null;
}

export function getValidAnnotationFromNode(
  node: arkts.AstNode,
  predicate: (annotation: arkts.AnnotationUsage) => boolean,
  maxDepth: number = 50
): arkts.AnnotationUsage | null {
  if (!node || maxDepth <= 0) {
    return null;
  }

  const annotationArray: arkts.AnnotationUsage[] = [];
  if (isAnnotationAllowed(node)) {
    annotationArray.push(...node.annotations);
  }

  if (arkts.isMethodDefinition(node) && node.parent?.ident?.name === DISTINGUISH_FUNCTION_NAME) {
    if (node.function && node.function.annotations && Array.isArray(node.function.annotations)) {
      annotationArray.push(...node.function.annotations);
    }
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
  const line = startPos?.getLine() || 0;
  const col = startPos?.getCol() || 0;
  return `${fileName}_${line}_${col}`;
}

/**
 * Check if annotation declaration is valid SOURCE retention type
 * 
 * In es2panda:
 * - AnnotationDeclaration has 'internalName' property for annotation name
 * - Use arkts.getProgramFromAstNode() to get source file path
 * 
 * @param annoDecl AnnotationDeclaration node
 * @returns boolean
 */
export function isSourceRetentionDeclarationValid(annoDecl: arkts.AstNode): boolean {
  if (!annoDecl || !arkts.isAnnotationDeclaration(annoDecl)) {
    return false;
  }

  // es2panda: check if node is AnnotationDeclaration type
  // AnnotationDeclaration has internalName property
  if (annoDecl.internalName !== undefined) {
    const decoratorName = annoDecl.internalName;
    if (decoratorName !== 'Available' && decoratorName !== 'SuppressWarnings') {
      return false;
    }
  } else if (annoDecl.expr && arkts.isIdentifier(annoDecl.expr) && annoDecl.expr.name) {
    // Alternative: get name from expr
    const decoratorName = annoDecl.expr.name;
    if (decoratorName !== 'Available' && decoratorName !== 'SuppressWarnings') {
      return false;
    }
  }

  const nodeDecl = !annoDecl.expr ? undefined : arkts.getDecl(annoDecl.expr);
  if (nodeDecl === undefined || nodeDecl === null) {
    return false;
  }
  const program = arkts.getProgramFromAstNode(nodeDecl);
  const fileName = program?.sourceFilePath || '';
  const normalizedFileName = path.normalize(fileName);
  
  if (normalizedFileName.endsWith(AVAILABLE_FILE_NAME)) {
    return true;
  }
  
  return false;
}

/**
 * Check if annotation usage content is valid
 * 
 * In es2panda:
 * - AnnotationUsage does NOT have annotationDeclaration property (unlike TypeScript)
 * - Cannot verify annotation declaration source
 * - Must parse content directly from annotation.expr
 * 
 * @param annotation AnnotationUsage node
 * @returns ConditionCheckResult
 */
export function isSourceRetentionAnnotationContentValid(annotation: arkts.AnnotationUsage): ConditionCheckResult {
  const result: ConditionCheckResult = {
    valid: true
  };
  
  if (!annotation) {
    return result;
  }

  initComparisonFunctions();
  // es2panda: AnnotationUsage has NO annotationDeclaration property!
  // Cannot check annotation.annotationDeclaration like TypeScript
  // Must parse content directly

  try {
    // Directly extract version from annotation
    const parseVersion = extractMinApiFromDecorator(annotation);
    if (!parseVersion) {
      return result;
    }

    // Validate version format
    const checkResult = checkFormatResult(parseVersion);
    if (checkResult) {
      return checkResult;
    }

    // Check parent version hierarchy
    return checkParentVersionHierarchy(annotation.parent, parseVersion, result);
  } catch (e) {
    return result;
  }
}

function checkParentVersionHierarchy(
  annotation: arkts.AstNode,
  currentVersion: ParsedVersion,
  result: ConditionCheckResult
): ConditionCheckResult {
  const higherVersion = hasLargerVersionInParentNode(annotation, currentVersion);
  if (!higherVersion) {
    return result;
  }
  
  const message = AVAILABLE_SCOPE_ERROR.replace('$VERSION', higherVersion.version);
  return {
    valid: false,
    message: message,
    type: DiagnosticCategory.WARNING
  };
}

function hasLargerVersionInParentNode(node: arkts.AstNode, curAvailableVersion: ParsedVersion): ParsedVersion | null {
  if (!node || !node.parent) {
    return null;
  }

  const decorator = getValidAnnotationFromNode(node.parent, isAvailableDecorator);
  if (decorator === null) {
    return null;
  }

  const availableVersion = extractMinApiFromDecorator(decorator);
  if (!availableVersion) {
    return null;
  }

  if (!compareVersions(availableVersion, curAvailableVersion)) {
    return availableVersion;
  }

  return null;
}

function checkFormatResult(parseVersion: ParsedVersion | null): ConditionCheckResult | null {
  if (!parseVersion) {
    return null;
  }

  let checkResult: VersionValidationResult;
  
  if (parseVersion.os === RUNTIME_OS_OH) {
    checkResult = defaultFormatCheckerCompatibileIntegerAndMSF(parseVersion.version);
  } else if (parseVersion.os === globalObject.projectConfig.runtimeOS) {
    checkResult = getFormatChecker(AVAILABLE_TAG_NAME)(parseVersion.formatVersion);
  } else {
    const diagnosticMessage: string = `${ERROR_CODE_INFO.get(AVAILABLE_OSNAME_ERROR)?.code}#${AVAILABLE_OSNAME_ERROR}`;
    const msg = diagnosticMessage
      .replace('$RUNTIMEOS', globalObject.projectConfig.runtimeOS || '')
      .replace('$OSNAME', parseVersion.os!);
    return {
      valid: false,
      message: msg,
      type: DiagnosticCategory.ERROR
    };
  }

  if (checkResult && !checkResult.result) {
    const diagnosticMessage: string = `${ERROR_CODE_INFO.get(AVAILABLE_VERSION_FORMAT_ERROR_PREFIX)?.code}#${AVAILABLE_VERSION_FORMAT_ERROR_PREFIX}`;
    const msg = diagnosticMessage
      .replace('$RUNTIMEOS', globalObject.projectConfig.runtimeOS || '')
      .replace('$VERSION', parseVersion.version);
    return {
      valid: false,
      message: checkResult.message ? `${msg} ${checkResult.message}` : `${msg}`,
      type: DiagnosticCategory.ERROR
    };
  }

  return null;
}