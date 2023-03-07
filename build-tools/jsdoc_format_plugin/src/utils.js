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

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

/**
 * Recursively query the api directory.
 * @param {String} dir dir api directory
 * @param {Array} apiFiles api files array
 */
function readDir(dir, apiFiles) {
  const files = fs.readFileSync(dir);
  files.forEach(element => {
    const filePath = path.join(dir, element);
    const status = fs.statSync(filePath);
    if (status.isDirectory()) {
      readDir(filePath, apiFiles);
    } else if (status.isFile() && /\.d\.ts$/.test(filePath)) {
      apiFiles.push(filePath);
    }
  });
}

/**
 * Get api file array.
 * @param {String} url api file(.d.ts) | api config file(.txt) | api file directory
 * @returns api file array
 */
function getApiFiles(url) {
  const apiFiles = [];
  const urlStat = fs.statSync(url);
  if (urlStat.isFile() && path.extname(url) === ".txt") {
    const content = fs.readFileSync(url, "utf-8");
    const apiFilesConfig = content.split(/[(\r\n)\r\n]+/);
    apiFilesConfig.forEach(file => {
      if (fs.existsSync(file)) {
        apiFiles.push(file);
      } else {
        console.error(`FORMAT_ERROR: Api file of [${file}] is not found!`);
      }
    });
  } else if (urlStat.isFile() && /\.d\.ts$/.test(url)) {
    apiFiles.push(url);
  } else if (url.isDirectory()) {
    readDir(url, apiFiles);
  }
  return apiFiles;
}
exports.getApiFiles = getApiFiles;

/**
 * Tsc compile engine.
 * @param {Array} apiFiles api file array
 * @param {Function} callback pretreatment function
 */
function tsTransform(apiFiles, callback) {
  apiFiles.forEach(url => {
    const content = fs.readFileSync(url, "utf-8");
    const fileName = path.basename(url).replace(/\.d\.ts$/, "ts");
    ts.transpileModule(content, {
      compilerOptions: {
        "target": ts.ScriptTarget.ES2017
      },
      fileName: fileName,
      transformers: { before: [callback(url)] }
    });
  });
}
exports.tsTransform = tsTransform;

/**
 * Create generated api file.
 * @param {String} url generated api file path
 * @param {String} content content generated api file content
 * @param {Object} option option of writeFile(fs)
 */
function overwriteApiFile(url, content, option) {
  fs.writeFileSync(url, content, option);
}
exports.overwriteApiFile = overwriteApiFile;

/**
 * Get api note.
 * @param {tsNode} node current node
 * @returns api note
 */
function getAPINote(node) {
  const apiLength = node.getText().length;
  const apiFullLength = node.getFullText().length
  return node.getFullText().substring(0, apiFullLength - apiLength);
}
exports.getAPINote = getAPINote;

/**
 * Judge whether the api note exists.
 * @param {tsNode} node current node
 * @returns boolean
 */
function hasAPINote(node) {
  const apiNote = getAPINote(node).replace(/[\s]/g, "");
  if (apiNote && apiNote.length !== 0) {
    return true;
  }
  return false;
}
exports.hasAPINote = hasAPINote;

/**
 * 
 * @param {tsNode} node current node
 * @returns boolean
 */
function hasCopyright(content) {
  return /http\:\/\/www\.apache\.org\/licenses\/LICENSE\-2\.0/g.test(content);
}
exports.hasCopyright = hasCopyright;

/**
 * Get api information.
 * @param {tsNode} node current node
 * @returns api information
 */
function getApiInfo(node) {
  const notesStr = getAPINote(node)
  let apiInfo = {};
  if (notesStr !== "") {
    if (/\@systemapi/g.test(notesStr)) {
      apiInfo.systemapi = true;
    }
    if (/\@since\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@since\s*(\d+)/g, (versionInfo) => {
        apiInfo.since = versionInfo.replace(/\@since/g, '').trim();
      })
    }
    if (/\@deprecated.*since\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@deprecated.*since\s*(\d+)/g,
        versionInfo => {
          apiInfo.deprecated = versionInfo.replace(
            /\@deprecated.*since\s*/g, '').trim();
        })
    }
    if (/\@famodelonly/g.test(notesStr)) {
      apiInfo.model = "famodelonly";
    } else if (/\@stagemodelonly/g.test(notesStr)) {
      apiInfo.model = "stagemodelonly";
    }
    if (/\@syscap\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@syscap\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
        apiInfo.syscap = sysCapInfo.replace(/\@syscap/g, '').trim();
      })
    }
    if (/\@permission\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@permission\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
        permissionInfo => {
          apiInfo.permission =
            permissionInfo.replace(/\@permission/g, '').trim();
        })
    }
  }
  return apiInfo;
}
exports.getApiInfo = getApiInfo;

function getParentApiInfo(node, apiInfo) {
  if (!apiInfo.since) {
    if (getApiInfo(node).since) {
      apiInfo.since = [getApiInfo(node).since];
    } else if (node.parent) {
      apiInfo.since = [getParentApiInfo(node.parent, apiInfo).since];
    } else {
      apiInfo.since = ["NA"];
    }
  }
  if (!apiInfo.model) {
    if (getApiInfo(node).model) {
      apiInfo.model = [getApiInfo(node).model];
    } else if (node.parent) {
      apiInfo.model = [getParentApiInfo(node.parent, apiInfo).model];
    }
  }
  if (!apiInfo.systemapi) {
    if (getApiInfo(node).systemapi) {
      apiInfo.model = [getApiInfo(node).systemapi];
    } else if (node.parent) {
      apiInfo.model = [getParentApiInfo(node.parent, apiInfo).systemapi];
    } else {
      apiInfo.systemapi = [false];
    }
  }
  if (!apiInfo.syscap) {
    if (getApiInfo(node).syscap) {
      apiInfo.model = [getApiInfo(node).syscap];
    } else if (node.parent) {
      apiInfo.model = [getParentApiInfo(node.parent, apiInfo).syscap];
    } else {
      apiInfo.systemapi = ["NA"];
    }
  }
  return apiInfo;
}
exports.getParentApiInfo = getParentApiInfo;

const JSDOC_WRITELIST_SET = new Set(["constant", "crossplatform", "default", "deprecated", "enum", "example", "extends",
  "famodeonly", "fires", "interface", "namespace", "param", "permission", "readonly", "returns", "since", "stagemodeonly",
  "static", "syscap", "systemapi", "type", "typedef", "throws", "test", "useinstead"]);
exports.JSDOC_WRITELIST_SET = JSDOC_WRITELIST_SET;

const TS_KEYWORD_SET = new Set([ts.SyntaxKind.DeclareKeyword]);
exports.TS_KEYWORD_SET = TS_KEYWORD_SET;
