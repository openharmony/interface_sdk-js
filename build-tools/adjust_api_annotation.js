/*
 * Copyright (c) 2026-2027 Huawei Device Co., Ltd.
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
const path = require("path");
const fs = require("fs");
const commander = require("commander");
const ANNOTATION_REGEX = /\/\*\*[\s\S]*?\*\//g;
const SINCE_REGEX = /@since\s+(.*)/;
const PUBLIC_API_REGEX = /@publicapi\s+(.*)/;
const ANNOTATION_SINCE_REGEX = /\[since (.*?)\]/;
const ANNOTATION_KEYWORD = /@(\w+)/;

const OPERATE = {
  DELETE: "delete",
  CHANGE: "change",
  REMOVE: "remove",
  DONOTHING: "donothing",
};

function start() {
  const program = new commander.Command();
  program.name("adjust_api_annotation").version("0.0.1");
  program
    .option("--input <string>", "path name")
    .option("--output <string>", "output path")
    .action((opts) => {
      outputPath = opts.output;
      inputDir = opts.input;
      collectDeclaration(opts.input);
    });
  program.parse(process.argv);
}

function collectDeclaration(inputDir) {
  // 入口
  try {
    const arktsPath = path.resolve(inputDir, "../arkts");
    const utFiles = [];
    readFile(inputDir, utFiles); // 读取文件
    readFile(arktsPath, utFiles); // 读取文件
    adjustApiAnnotation(utFiles);
  } catch (error) {
    console.error("ADJUST API ANNOTATION ERROR: ", error);
  }
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.log("READ FILE ERROR: " + e);
  }
}

function adjustApiAnnotation(utFiles) {
  utFiles.forEach((url) => {
    if (!fs.existsSync(url)) {
      return;
    }
    const apiBaseName = path.basename(url);
    let content = fs.readFileSync(url, "utf-8"); // 文件内容
    let isTransformer = /\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName);
    if (/\.json/.test(url) || apiBaseName === "index-full.d.ts") {
      isTransformer = false;
    }
    if (!isTransformer) {
      writeFile(url, content);
      return;
    }
    const annotations = getFileAnnotations(content);
    if (!Array.isArray(annotations)) {
      writeFile(url, content);
      return;
    }
    annotations.forEach((annotation) => {
      const apiStartVersion = getStartApiVersion(annotation);
      if (apiStartVersion) {
        const annotationArray = annotation.split("\n");
        const newAnnotation = [];
        let isNeedChange = false;
        annotationArray.forEach((item) => {
          if (isPublicApiAnnotation(item)) return;
          const match = item.match(ANNOTATION_SINCE_REGEX);
          let annotationTemp = item;
          if (match) {
            const matchText = match[1];
            const apiVersionRange = matchText.split("-").map((item) => item.trim());
            try {
              const result = handleApiAnnotationCompare(apiStartVersion, apiVersionRange);
              isNeedChange = true;
              if (result === OPERATE.DELETE) {
                deleteAnnotations(annotationTemp, newAnnotation);
                return;
              } else if (result === OPERATE.CHANGE) {
                const updateText = apiStartVersion + " - " + apiVersionRange[1];
                annotationTemp = annotationTemp.replace(matchText, updateText);
              } else if (result === OPERATE.REMOVE) {
                annotationTemp = removeAnnotations(annotationTemp, match[0]);
              }
            } catch (error) {
              console.error("compare api version error, url is", url);
              console.error("annotation is", annotation);
            }
          }
          newAnnotation.push(annotationTemp);
        });
        if (isNeedChange) {
          content = content.replace(annotation, newAnnotation.filter((item) => item).join('\n'));
        }
      }
    });
    writeFile(url, content);
  });
}
function deleteAnnotations(annotationTemp, newAnnotation = []) {
  const match = annotationTemp.match(ANNOTATION_KEYWORD);
  if (match) {
    return;
  };
  for (let item of newAnnotation.slice().reverse()) {
    newAnnotation.splice(-1, 1);
    if (item.match(ANNOTATION_KEYWORD)) {
      break;
    }
  }
}
function removeAnnotations(annotationTemp = '', match) {
  const result = annotationTemp.replace(match, '').trimEnd();
  // 移除注解后只剩*，则删除该行
  if (result.trim() === '*') {
    return null;
  }
  return result;
}
function getFileAnnotations(content = '') {
  return content.match(ANNOTATION_REGEX);
}

function isPublicApiAnnotation(annotation) {
  if (!annotation) {
    return false;
  }
  return PUBLIC_API_REGEX.test(annotation);
}

function getStartApiVersion(annotation) {
  const match = annotation.match(SINCE_REGEX);
  if (match) {
    const version = match[1] ?? "";
    return version.split(" ")[0];
  } else {
    return null;
  }
}

function handleApiAnnotationCompare(startApiVersion, apiVersionRange) {
  let start = apiVersionRange[0];
  const compareStart = compareVersions(startApiVersion, start);
  if (compareStart < 0) {
    /**
     * @xxx [since 16-20]
     * @xx since 16
     * @since 15
     */
    return OPERATE.DONOTHING;
  }
  if (apiVersionRange.length === 1) {
    /**
     * @xx since 13
     * @since 14
     */
    return OPERATE.REMOVE;
  } else if (apiVersionRange.length === 2) {
    const compareEnd = compareVersions(startApiVersion, apiVersionRange[1]);
    if (compareEnd > 0) {
      /**
       * @xx [since 12-13]
       * @since 15
       */
      return OPERATE.DELETE;
    } else {
      /**
       * @xx [since 12-19]
       * @since 15
       */
      return OPERATE.CHANGE;
    }
  }
}
function writeFile(url, data, option) {
  const urlDirName = path.dirname(inputDir);
  const relativePath = path.relative(urlDirName, url);
  const newFilePath = path.resolve(outputPath, relativePath);
  fs.mkdir(path.dirname(newFilePath), { recursive: true }, (err) => {
    if (err) {
      console.error(`ERROR FOR CREATE PATH ${err}`);
    } else {
      if (data === "") {
        fs.rmSync(newFilePath, { force: true });
        return;
      }
      fs.writeFileSync(newFilePath, data, option, (err) => {
        if (err) {
          console.error(`ERROR FOR CREATE FILE ${err}`);
        }
      });
    }
  });
}

function compareVersions(version1, version2) {
  const extractClosedVersion = (str) => {
    const match = str.match(/^(\d+)\.(\d+)\.(\d+)\((\d+)\)$/);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const z = parseInt(match[3]);
      return x * 10000 + y * 100 + z;
    }
    return null;
  };

  const extractOpenVersion = (str) => {
    const num = parseFloat(str);
    if (!isNaN(num)) return num * 10000;
    const parts = str.split(".").map(Number);
    if (parts.length === 3) {
      return parts[0] * 10000 + parts[1] * 100 + parts[2];
    }
    return null;
  };
  const v1 = extractClosedVersion(version1) || extractOpenVersion(version1);
  const v2 = extractClosedVersion(version2) || extractOpenVersion(version2);
  if (v1 === v2) {
    return 0;
  }
  return v1 > v2 ? 1 : -1;
}

console.time("adjust_api_annotation");
let outputPath = "";
let inputDir = "";
start();
console.timeEnd("adjust_api_annotation");
