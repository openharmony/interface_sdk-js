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
import { BaseVersionChecker } from './base_version_checker';
import {
  FormatCheckerFunction,
  ValueCheckerFunction,
  ComparisonSenario,
  RUNTIME_OS_OH,
  AVAILABLE_TAG_NAME
} from '../api_check_plugin_define';
import {
  defaultFormatCheckerCompatibileIntegerAndMSF,
  defaultValueChecker,
  getFormatChecker,
  getValueChecker,
  getVersionByValueChecker
} from '../api_check_base_utils';
import {
  isAvailableDecorator,
  extractMinApiFromDecorator,
  getValidAnnotationFromNode,
  checkFileHasAvailableByFileName
} from './available_decorator_utils';
import { globalObject } from '../../index';


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