/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ErrorMessage, ErrorTagFormat } from '../../../typedef/checker/result_type';
import { Comment } from '../../../typedef/parser/Comment';
import { CommonFunctions, inheritTagArr } from '../../../utils/checkUtils';
import { ApiType, ClassInfo } from '../../../typedef/parser/ApiInfoDefination';

export class TagInheritCheck {
  /**
   * Tag's inheritance check.
   * @param { ClassInfo } singleApi
   * @returns { ErrorTagFormat }
   */
  static tagInheritCheck(singleApi: ClassInfo): ErrorTagFormat {
    const tagNameCheckResult: ErrorTagFormat = {
      state: false,
      errorInfo: '',
    };
    const apiJsdoc: Comment.JsDocInfo = singleApi.getLatestJsDocInfo() as Comment.JsDocInfo;
    const tagsInfo: Comment.CommentTag[] = apiJsdoc.tags as Comment.CommentTag[];
    const apiTagsName: string[] = [];
    tagsInfo.forEach((tag) => {
      apiTagsName.push(tag.tag);
    });
    const parentApi: ClassInfo = singleApi.getParentApi() as ClassInfo;
    if (parentApi.getApiType() !== ApiType.SOURCE_FILE) {
      const parentApisJsdoc: Comment.CommentTag[] = parentApi.getLatestJsDocInfo()?.tags as Comment.CommentTag[];
      parentApisJsdoc.find((parentApiJsdoc: Comment.CommentTag) => {
        const flag: boolean = inheritTagArr.includes(parentApiJsdoc.tag) && !apiTagsName.includes(parentApiJsdoc.tag);
        if (flag) {
          tagNameCheckResult.state = true;
          tagNameCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_INHERIT, [
            parentApiJsdoc.tag,
          ]);
        }
        return flag;
      });
    }
    return tagNameCheckResult;
  }
}
