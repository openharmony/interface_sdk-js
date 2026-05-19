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
import { SINCE_TAG_NAME, ComparisonResult } from '../api_check_plugin_define';
import {
  BaseWarningSuppressor
} from './base_warning_suppressor';
import {
  comparePointVersion
} from '../api_check_base_utils';
import { ParsedVersion } from '../api_check_plugin_typedef';
import {
  NodeValidator,
  CompositeValidator,
  TryCatchValidator,
  UndefinedCheckValidator,
  SdkComparisonValidator,
  AvailableComparisonValidator,
  WhiteListValidator
} from './api_validate_node';

export class SinceWarningSuppressor extends BaseWarningSuppressor {
  constructor(
    projectCompatibleSdkVersion: string,
    minRequiredVersion: string,
    declaration?: arkts.AstNode,
    minAvailableVersion?: ParsedVersion
  ) {
    super(SINCE_TAG_NAME);
    this.validators.addValidator([
      new TryCatchValidator(),
      new UndefinedCheckValidator(),
      new WhiteListValidator(declaration),
      new AvailableComparisonValidator(
        projectCompatibleSdkVersion,
        minRequiredVersion,
        minAvailableVersion
      ),
      new SdkComparisonValidator(
        projectCompatibleSdkVersion,
        minRequiredVersion,
        declaration,
        minAvailableVersion
      )
    ]);
  }

  public isApiVersionHandled(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.validators.validate(node);
  }
}