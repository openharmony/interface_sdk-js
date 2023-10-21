import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';
import { LogUtil } from '../utils/logUtil';
import { ToolNameExcelCallback, joinNewMessage, joinOldMessage } from './config';
import { BasicDiffInfo, diffTypeMap } from '../typedef/diff/ApiInfoDiff';
import { FunctionUtils } from '../utils/FunctionUtils';
import { SyscapProcessorHelper } from '../coreImpl/diff/syscapFieldProcessor';

export namespace WriterHelper {
  export function JSONReporter(data: string, dest: string, fileName: string) {
    const outputFile = path.resolve(dest, fileName);
    fs.writeFileSync(outputFile, data);
    LogUtil.i('JSONReporter', `report is in ${outputFile}`);
  }

  export async function ExcelReporter(
    data: Array<any>,
    dest: string,
    fileName: string,
    callback: ToolNameExcelCallback | undefined
  ) {
    const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
    const sheet: ExcelJS.Worksheet = workbook.addWorksheet();

    if (typeof callback === 'function') {
      //callback是一个函数，才能当回调函数使用
      callback(data, sheet, dest);
    }

    const buffer: NodeJS.ArrayBufferView = (await workbook.xlsx.writeBuffer()) as NodeJS.ArrayBufferView;
    const outputFile: string = path.resolve(dest, fileName);
    fs.writeFileSync(outputFile, buffer);
    LogUtil.i('ExcelReporter', `report is in ${outputFile}`);
  }

  export class MarkdownReporter {
    static writeInMarkdown(data: BasicDiffInfo[], dest: string | undefined): void {
      const fileNameMap: Map<string, string> = FunctionUtils.readSubsystemFile().fileNameMap;
      fileNameMap.forEach((fileName: string, syscap: string) => {
        let diffsInSameSystem: BasicDiffInfo[] = [];
        data.forEach((diffInfo: BasicDiffInfo) => {
          if (SyscapProcessorHelper.getSyscapField(diffInfo) === syscap) {
            diffsInSameSystem.push(diffInfo);
          }
        });
        if (diffsInSameSystem.length === 0) {
          return;
        }

        MarkdownReporter.sortDiffInfoByStatus(diffsInSameSystem, fileName, dest);
      });
    }

    static sortDiffInfoByStatus(diffsInSameSystem: BasicDiffInfo[], fileName: string, dest: string | undefined): void {
      const sortDiffInfos: BasicDiffInfo[] = [];
      for (const type of diffTypeMap.keys()) {
        diffsInSameSystem.forEach((diffInfo) => {
          if (diffInfo.getDiffType() === type) {
            sortDiffInfos.push(diffInfo);
          }
        });
      }
      MarkdownReporter.exportDiffMd(fileName, sortDiffInfos, dest);
    }

    static exportDiffMd(fileName: string, diffInfos: BasicDiffInfo[], dest: string | undefined): void {
      let markDownContent: string =
        '| 操作 | 旧版本 | 新版本 | d.ts文件 |\n' + '| ---- | ------ | ------ | -------- |\n';
      for (let i = 0; i < diffInfos.length; i++) {
        let diffInfo: BasicDiffInfo = diffInfos[i];
        markDownContent +=
          `|${diffTypeMap.get(diffInfo.getDiffType())}|${MarkdownReporter.formatDiffMessage(
            joinOldMessage(diffInfo)
          )}` + `|${MarkdownReporter.formatDiffMessage(joinNewMessage(diffInfo))}|${diffInfo.getNewDtsName()}|\n`;
      }
      const mdFilesDir = `${dest}\\diff合集`;
      if (!fs.existsSync(mdFilesDir)) {
        fs.mkdirSync(mdFilesDir);
      }

      fs.writeFileSync(`${dest}\\diff合集\\js-apidiff-${fileName}.md`, markDownContent);
    }

    static formatDiffMessage(diffMessage: string): string {
      const message = diffMessage
        .replace(/\r|\n/g, '<br>')
        .replace(/\|/g, '\\|')
        .replace(/\<(?!br>)/g, '\\<');
      return message;
    }
  }
}
