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
import {
  ValueCheckerFunction,
  FormatCheckerFunction
} from '../../utils/api_check_plugin_define';
import {
  defaultFormatCheckerCompatibileIntegerAndMSF,
  defaultValueChecker
} from '../../utils/api_check_base_utils';
import { ParsedVersion } from '../../utils/api_check_plugin_typedef';
import { globalObject } from '../../index';

export interface ComparisonStrategy {
  checkTargetVersion(targetVersion: arkts.AstNode): boolean;
  getMinApiVersion(): string;
}

export abstract class BaseVersionChecker implements ComparisonStrategy {
  protected minApiVersion: string = '';
  protected versionValidFunction: FormatCheckerFunction = defaultFormatCheckerCompatibileIntegerAndMSF;
  protected versionCompareFunction: ValueCheckerFunction = defaultValueChecker;
  protected sdkVersion: string = globalObject.projectConfig.originCompatibleSdkVersion?.toString() ||
                              globalObject.projectConfig.compatibleSdkVersion?.toString() || '';
  protected availableVersion: ParsedVersion | undefined = undefined;

  protected constructor() {}

  protected abstract parseVersion(node: arkts.AstNode): boolean;
  protected abstract compare(): boolean;

  public checkTargetVersion(targetVersion?: arkts.AstNode): boolean {
    if (!targetVersion) {
      return false;
    }
    const parsedVersion = this.parseVersion(targetVersion);
    if (!parsedVersion) {
      return false;
    }
    return this.compare();
  }

  public getMinApiVersion(): string {
    return this.minApiVersion;
  }

  public getSdkVersion(): string {
    return this.sdkVersion;
  }

  public getAvailableVersion(): ParsedVersion | undefined {
    return this.availableVersion;
  }
}