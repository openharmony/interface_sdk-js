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

import fs from 'fs';
import path from 'path';
import { ApiType } from '../../../typedef/parser/ApiInfoDefination';
import {
  ErrorType,
  ErrorID,
  LogType,
  ErrorLevel,
  ErrorTagFormat,
  ErrorMessage,
} from '../../../typedef/checker/result_type';
import { BasicApiInfo } from '../../../typedef/parser/ApiInfoDefination';
import { tagsArrayOfOrder, officialTagArr, CommonFunctions } from '../../../utils/checkUtils';
import { AddErrorLogs } from './compile_info';
import { compositiveResult, compositiveLocalResult, punctuationMarkSet } from '../../../utils/checkUtils';
import { Set } from 'typescript';

const dictionariesContent: string = fs.readFileSync(path.resolve(__dirname, '../config/dictionaries.txt'), 'utf-8');
const dictionariesArr: string[] = dictionariesContent.split(/[(\r\n)\r\n]+/g);
const dictionariesSupplementaryContent: string = fs.readFileSync(
  path.resolve(__dirname, '../config/dictionaries_supplementary.txt'),
  'utf-8'
);
const dictionariesSupplementaryArr: string[] = dictionariesSupplementaryContent.split(/[(\r\n)\r\n]+/g);
const dictionariesSet: Set<string> = new Set([
  ...dictionariesArr,
  ...dictionariesSupplementaryArr,
  ...tagsArrayOfOrder,
  ...officialTagArr,
]);

export class WordsCheck {
  /**
   * words spell check
   * @param { BasicApiInfo[] } baseInfos
   */
  static wordCheckResultsProcessing(baseInfos: BasicApiInfo[]): void {
    baseInfos.forEach((baseInfo) => {
      if (baseInfo.getApiType() !== ApiType.SOURCE_FILE) {
        const nodeFullText = JSON.stringify(baseInfo.getNode()?.getFullText());
        const nodeText = nodeFullText.substring(nodeFullText.indexOf('/**'), nodeFullText.length);
        const apiText = nodeText.indexOf('{') > -1 ? nodeText.substring(0, nodeText.indexOf('{')) : nodeText;
        WordsCheck.wordsCheck(apiText, baseInfo);
      }
    });
  }

  /**
   * Break the obtained api information into single words.
   * @param { string } apiText
   * @param { BasicApiInfo } baseInfo
   */
  static wordsCheck(apiText: string, baseInfo: BasicApiInfo): void {
    const reg = /\s{2,}/g;
    const regx = /(\/\*|\*\/|\*)|\\n|\\r/g;
    let fullText: string = apiText.replace(regx, ' ');
    punctuationMarkSet.forEach(punctuationMark => {
      const punctuationMarkReg = new RegExp(punctuationMark, 'g');
      if (punctuationMarkReg.test(fullText)) {
        fullText = fullText.replace(punctuationMarkReg, ' ').replace(reg, ' ');
      }
    });
    let apiWordsArr = fullText.split(/\s/g);
    const errorWords: string[] = [];
    apiWordsArr.forEach((apiWord) => {
      const basicWords: string[] = WordsCheck.splitComplexWords(apiWord);
      basicWords.forEach((basicWord) => {
        if (!WordsCheck.checkBaseWord(basicWord.toLowerCase())) {
          errorWords.push(basicWord);
          const wordsCheckFormat: ErrorTagFormat = {
            state: false,
            errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_WORD, [basicWord]),
          };
          AddErrorLogs.addAPICheckErrorLogs(
            ErrorID.MISSPELL_WORDS_ID,
            ErrorLevel.MIDDLE,
            baseInfo.getFilePath(),
            baseInfo.getPos(),
            ErrorType.MISSPELL_WORDS,
            LogType.LOG_JSDOC,
            -1,
            baseInfo.getApiName(),
            baseInfo.getDefinedText(),
            wordsCheckFormat.errorInfo,
            compositiveResult,
            compositiveLocalResult
          );
        }
      });
    });
  }

  /**
   * Whether compound words are underlined
   * @param { string } word
   * @returns { boolean }
   */
  static hasUnderline(word: string): boolean {
    return /(?<!^)\_/g.test(word);
  }

  /**
   * split complex words
   * @param { string } complexWord
   * @returns { string[] }
   */
  static splitComplexWords(complexWord: string): string[] {
    let basicWords: string[] = [];
    // splite underlineWord
    if (WordsCheck.hasUnderline(complexWord)) {
      basicWords = complexWord.split(/(?<!^)\_/g);
    } else {
      // splite complexWord
      if (!/(?<!^)(?=[A-Z])/g.test(complexWord)) {
        basicWords.push(complexWord);
      } else {
        basicWords = complexWord.split(/(?<!^)(?=[A-Z])/g);
      }
    }
    const newBaseWords: string[] = [];
    basicWords.forEach((word) => {
      if (/[0-9]/g.test(word)) {
        newBaseWords.concat(word.split(/0-9/g));
      } else {
        newBaseWords.push(word);
      }
    });
    return newBaseWords;
  }

  /**
   * check base word
   * @param { string } word
   * @returns { boolean }
   */
  static checkBaseWord(word: string): boolean {
    if (/^[a-z][0-9]+$/g.test(word)) {
      return false;
    } else if (/^[A-Za-z]+/g.test(word) && !dictionariesSet.has(word.toLowerCase())) {
      return false;
    }
    return true;
  }
}
