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
import { BaseVersionChecker, ComparisonStrategy } from './base_version_checker';
import {
  SINCE_TAG_NAME,
  ComparisonSenario
} from '../api_check_plugin_define';
import {
  getValueChecker,
  getFormatChecker,
  defaultFormatCheckerCompatibileIntegerAndMSF,
  defaultFormatChecker,
  initComparisonFunctions
} from '../api_check_base_utils';
import { globalObject } from '../../index';
import { JSDoc, JSDocTag } from '../../api-check-wrapper/utils/api_check_wrapper_typedef';
import { getPeerJsDocs } from '../../api-check-wrapper/src/api_check_wrapper';
import { parseJSDoc } from '../../api-check-wrapper/custom-plugins/custom-comment-parser';

export class SinceJSDocChecker extends BaseVersionChecker {
  private jsDocTags?: JSDocTag[];

  constructor() {
    super();
    this.init();
  }

  private init(): void {
    this.sdkVersion = globalObject.projectConfig.originCompatibleSdkVersion?.toString() ||
      globalObject.projectConfig.compatibleSdkVersion?.toString() || '';

    initComparisonFunctions();

    const valueChecker = getValueChecker(SINCE_TAG_NAME);
    this.versionCompareFunction = valueChecker;

    const formatChecker = getFormatChecker(SINCE_TAG_NAME);
    if (formatChecker) {
      this.versionValidFunction = formatChecker;
    } else {
      this.versionValidFunction = defaultFormatCheckerCompatibileIntegerAndMSF;
    }
  }

  public setJSDocTags(jsDocTags: JSDocTag[]): void {
    this.jsDocTags = jsDocTags;
  }

  protected parseVersion(node: arkts.AstNode): boolean {
    if (this.jsDocTags && this.jsDocTags.length > 0) {
      return this._parseSinceFromTags(this.jsDocTags);
    }

    const jsDocs = this._getJsDocsFromNode(node);
    if (!jsDocs || jsDocs.length === 0) {
      return false;
    }

    for (const doc of jsDocs) {
      if (!doc.tags) {
        continue;
      }
      const found = this._parseSinceFromTags(doc.tags);
      if (found) {
        return true;
      }
    }

    return false;
  }

  protected compare(): boolean {
    const compareResult = this.versionCompareFunction(this.minApiVersion, this.sdkVersion, ComparisonSenario.Trigger);
    return !compareResult.result;
  }

  private _parseSinceFromTags(tags: JSDocTag[]): boolean {
    if (!tags || !tags.length) {
      return false;
    }

    for (const tag of tags) {
      const tagName = tag.tag;

      if (tagName === SINCE_TAG_NAME) {
        const versionString = tag.name || tag.comment || '';
        if (!versionString) {
          continue;
        }
        if (!defaultFormatChecker(versionString.trim())) {
          return false;
        }
        this.minApiVersion = versionString.trim();
        return true;
      }
    }

    return false;
  }

  private _getJsDocsFromNode(node: arkts.AstNode): JSDoc[] | null {
    try {
      const jsDocString: string = getPeerJsDocs(node);
      return parseJSDoc(jsDocString);
    } catch {
      return null;
    }
  }
}