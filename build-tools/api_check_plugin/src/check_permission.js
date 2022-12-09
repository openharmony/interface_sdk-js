/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

const { getAPINote, ErrorType, ErrorLevel, FileType } = require('./utils');
const { addAPICheckErrorLogs } = require('./compile_info');

function checkPermission(node, sourcefile, fileName) {
  const permissionTags = [];
  const permissionRuleSet = new Set(permissionTags);
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split('*');
  let hasPermissionError = false;
  let errorInfo = "";
  apiNoteArr.forEach(note => {
    if (note.match(new RegExp('@permission'))) {
      const permissionNote = note.replace('@permission', '').trim();
      if (/( or | and )/g.test(permissionNote)) {
        const permissionArr = permissionNote.split(/( or | and )/)
        permissionArr.forEach(item => {
          if (!/( or | and )/g.test(item)) {
            if (!permissionRuleSet.has(item)) {
              hasPermissionError = true;
              if (errorInfo !== "") {
                errorInfo += `,${item}`;
              } else {
                errorInfo += item;
              }
            }
          }
        })
      } else {
        if (!permissionRuleSet.has(permissionNote) && !/N\/A/.test(permissionNote)) {
          hasPermissionError = true;
          if (errorInfo !== "") {
            errorInfo += `,${permissionNote}`;
          } else {
            errorInfo += permissionNote;
          }
        }
      }

    }
  });

  if (hasPermissionError) {
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.UNKNOW_PERMISSION, errorInfo, FileType.API,
      ErrorLevel.MIDDLE);
  }
}
exports.checkPermission = checkPermission;