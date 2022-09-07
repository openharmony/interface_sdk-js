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

const ts = require("typescript");
const fs = require("fs");
const { hasAPINote, getAPINote, overwriteIndexOf } = require("./utils");
const result = require("../check_result.json");

const content = fs.readFileSync("../plugin/dictionaries.txt", "utf-8");
const dictionariesArr = content.split("\n");
const dictionariesSet = new Set(dictionariesArr);

function checkSpelling(node, sourcefile, fileName) {
  if (ts.isIdentifier(node) && node.escapedText) {
    checkWordSpelling(node.escapedText.toString(), node, sourcefile, fileName);
  } else if (hasAPINote(node)) {
    const apiNote = getAPINote(node);
    const words = splitParagraph(apiNote);
    words.forEach(word => {
      checkWordSpelling(word, node, sourcefile, fileName);
    });
  }
}
exports.checkSpelling = checkSpelling;

function checkWordSpelling(nodeText, node, sourcefile, fileName) {
  const basicWords = splitComplexWords(nodeText);
  const errorWords = [];
  const suggest = [];
  basicWords.forEach(word => {
    if (/^[A-Za-z]+/g.test(word) && !dictionariesSet.has(word.toLowerCase())) {
      errorWords.push(word);
    }
  });
  if (errorWords.length !== 0) {
    errorWords.forEach(errorWord => {
      const levArr = [];
      for (let i = 0; i < dictionariesArr.length; i++) {
        const dictionary = dictionariesArr[i];
        levArr.push(getLevenshteinValue(errorWord, dictionary));
      }
      const minLev = Math.min(...levArr);
      const indexArr = overwriteIndexOf(minLev, levArr);
      for (let i = 0; i < indexArr.length; i++) {
        if (i === 5) {
          break;
        }
        suggest.push(dictionariesArr[indexArr[i]]);
      }
    });
    const checkFailFileNameSet = new Set(result.apiFiles);
    if (!checkFailFileNameSet.has(fileName)) {
      result.apiFiles.push(fileName);
    }
    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
    const errorMessage = {
      "error_type": "misspell words",
      "file": fileName,
      "pos": node.pos,
      "column": posOfNode.character + 1,
      "line": posOfNode.line + 1,
      "error_info": `Error basic words in [${nodeText}]: ${errorWords}. ` +
        `Do you want to spell it as [${suggest}]?`
    };
    const scanResultSet = new Set(result.scanResult);
    scanResultSet.add(errorMessage);
    result.scanResult = [...scanResultSet];
  }
}

function splitComplexWords(complexWord) {
  let basicWords = [];
  // splite underlineWord
  if (hasUnderline(complexWord)) {
    basicWords = complexWord.split(/(?<!^)\_/g);
  } else {
    // splite complexWord
    if (!/(?<!^)(?=[A-Z])/g.test(complexWord)) {
      basicWords.push(complexWord)
    } else {
      basicWords = complexWord.split(/(?<!^)(?=[A-Z])/g);
    }
  }
  return basicWords;
}
exports.splitComplexWords = splitComplexWords;

function hasUnderline(word) {
  return /(?<!^)\_/g.test(word);
}
exports.hasUnderline = hasUnderline;

function splitParagraph(paragraph) {
  const splitParagraphRegex = /[^\w]/g;
  const words = paragraph.split(splitParagraphRegex);
  return words;
}
exports.splitParagraph = splitParagraph;

// Levenshtein method
function getLevenshteinValue(word1, word2) {
  const word1Len = word1.length;
  const word2Len = word2.length;

  if (word1Len * word2Len === 0) {
    return Math.max(word1Len, word2Len);
  }
  // create Levenshtein two-dimensional array
  const levArr = Array.from(new Array(word1Len + 1), () => new Array(word2Len + 1));
  // set value 0 to Levenshtein two-dimensional array
  for (let i = 0; i < word1Len + 1; i++) {
    for (let j = 0; j < word2Len + 1; j++) {
      levArr[i][j] = 0;
    }
  }

  // init Levenshtein two-dimensional array
  for (let i = 0; i < word1Len + 1; i++) {
    levArr[i][0] = i;
  }
  for (let j = 0; j < word2Len + 1; j++) {
    levArr[0][j] = j;
  }

  // calculate levinstein distance
  for (let i = 1; i < word1Len + 1; i++) {
    for (let j = 1; j < word2Len + 1; j++) {
      const countByInsert = levArr[i][j - 1] + 1;
      const countByDel = levArr[i - 1][j] + 1;
      const countByReplace = word1.charAt(i - 1) === word2.charAt(j - 1) ?
        levArr[i - 1][j - 1] : levArr[i - 1][j - 1] + 1;
      levArr[i][j] = Math.min(countByInsert, countByDel, countByReplace);
    }
  }

  return levArr[word1Len][word2Len];
}
exports.getLevenshteinValue = getLevenshteinValue;
