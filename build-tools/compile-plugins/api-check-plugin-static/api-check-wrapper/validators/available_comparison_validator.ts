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
import { ParsedVersion } from '../../utils/api_check_plugin_typedef';
import { NodeValidator } from './base_warning_suppressor';
import { BaseVersionChecker } from './base_version_checker';
import {
  FormatCheckerFunction,
  ValueCheckerFunction,
  ComparisonSenario,
  RUNTIME_OS_OH,
  AVAILABLE_TAG_NAME
} from '../../utils/api_check_plugin_define';
import {
  defaultFormatCheckerCompatibileIntegerAndMSF,
  defaultValueChecker,
  getFormatChecker,
  getValueChecker,
  getVersionByValueChecker
} from '../../utils/api_check_base_utils';
import {
  isAvailableDecorator,
  extractMinApiFromDecorator,
  getValidAnnotationFromNode,
  checkFileHasAvailableByFileName
} from '../utils/available_decorator_utils';
import { globalObject } from '../../index';

export class AvailableComparisonValidator implements NodeValidator {
  private formatChecker: FormatCheckerFunction = defaultFormatCheckerCompatibileIntegerAndMSF;
  private valueChecker: ValueCheckerFunction = defaultValueChecker;

  constructor(
    private readonly compatibleSdkVersion: string,
    private readonly minRequiredVersion: string,
    private readonly minAvailableVersion?: ParsedVersion
  ) {
    this.init();
  }

  private init(): void {
    const formatChecker = getFormatChecker(AVAILABLE_TAG_NAME);
    this.formatChecker = formatChecker || defaultFormatCheckerCompatibileIntegerAndMSF;

    const valueChecker = getValueChecker(AVAILABLE_TAG_NAME);
    this.valueChecker = valueChecker || defaultValueChecker;
  }

  validate(node: arkts.AstNode): boolean {
    if (!node || (!this.minAvailableVersion && !this.minRequiredVersion)) {
      return false;
    }

    const nodeSourceFileName = this.getSourceFileName(node);
    if (!checkFileHasAvailableByFileName(nodeSourceFileName)) {
      return false;
    }

    try {
      const curAvailableVersion = this.getParentVersion(node);
      if (!curAvailableVersion) {
        return false;
      }

      if (this.compareVersions(curAvailableVersion, this.minAvailableVersion || this.minRequiredVersion)) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  private getParentVersion(node: arkts.AstNode): ParsedVersion | null {
    if (!node) {
      return null;
    }

    const annotation: arkts.AstNode | null = getValidAnnotationFromNode(node, isAvailableDecorator);
    if (annotation === null) {
      return null;
    }

    return extractMinApiFromDecorator(annotation);
  }

  private getSourceFileName(node: arkts.AstNode): string {
    const program = arkts.getProgramFromAstNode(node);
    return program?.sourceFilePath || '';
  }

  private compareVersions(
    curAvailableVersion: ParsedVersion,
    minRequiredVersion: ParsedVersion | string
  ): boolean {
    try {
      if (!curAvailableVersion) {
        return false;
      }

      const scenario = curAvailableVersion.os === RUNTIME_OS_OH
        ? ComparisonSenario.SuppressByOHVersion
        : ComparisonSenario.SuppressByOtherOSVersion;

      let result;
      if (typeof minRequiredVersion === 'string') {
        result = this.valueChecker(
          minRequiredVersion,
          getVersionByValueChecker(curAvailableVersion, this.valueChecker),
          scenario
        );
      } else {
        result = this.valueChecker(
          getVersionByValueChecker(minRequiredVersion, this.valueChecker),
          getVersionByValueChecker(curAvailableVersion, this.valueChecker),
          scenario
        );
      }

      return result ? result.result : false;
    } catch (error) {
      return false;
    }
  }
}

export class AvailableAnnotationChecker extends BaseVersionChecker {
  private formatChecker: FormatCheckerFunction;

  constructor() {
    super();
    this.init();
  }

  private init(): void {
    this.sdkVersion = globalObject.projectConfig.originCompatibleSdkVersion?.toString() ||
                      globalObject.projectConfig.compatibleSdkVersion?.toString() || '';
    const valueChecker = getValueChecker(AVAILABLE_TAG_NAME);
    this.versionCompareFunction = valueChecker;

    const formatChecker = getFormatChecker(AVAILABLE_TAG_NAME);
    this.formatChecker = formatChecker || defaultFormatCheckerCompatibileIntegerAndMSF;
    this.versionValidFunction = this.formatChecker;
  }

  protected parseVersion(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }

    const annotation: arkts.AstNode | null = getValidAnnotationFromNode(node, isAvailableDecorator);
    if (annotation === null) {
      return false;
    }

    const minApi = extractMinApiFromDecorator(annotation);
    if (!minApi) {
      return false;
    }

    this.minApiVersion = minApi.version;
    this.availableVersion = minApi;
    return true;
  }

  protected compare(): boolean {
    if (!this.availableVersion) {
      return false;
    }

    const compareResult = this.versionCompareFunction(
      getVersionByValueChecker(this.availableVersion, this.versionCompareFunction),
      this.sdkVersion,
      ComparisonSenario.Trigger
    );
    return !compareResult.result;
  }
}