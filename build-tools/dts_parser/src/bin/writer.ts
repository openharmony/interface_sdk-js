import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';
import { LogUtil } from '../utils/logUtil';
import { toolNameExcelCallback } from './config';

export namespace WriterHelper {
  const subsystemMap: Map<string, string> = new Map();
  const fileNameMap: Map<string, string> = new Map();

  export function JSONReporter(data: string, dest: string, fileName: string) {
    const outputFile = path.resolve(dest, fileName);
    fs.writeFileSync(outputFile, data);
    LogUtil.i('JSONReporter', `report is in ${outputFile}`);
  }

  export async function ExcelReporter(
    data: Array<any>,
    dest: string,
    fileName: string,
    callback: toolNameExcelCallback | undefined
  ) {
    const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
    const sheet: ExcelJS.Worksheet = workbook.addWorksheet();

    if (typeof callback === 'function') {
      //callback是一个函数，才能当回调函数使用
      callback(data, sheet);
    }

    const buffer: NodeJS.ArrayBufferView = (await workbook.xlsx.writeBuffer()) as NodeJS.ArrayBufferView;
    const outputFile: string = path.resolve(dest, fileName);
    fs.writeFileSync(outputFile, buffer);
    LogUtil.i('ExcelReporter', `report is in ${outputFile}`);
  }
}
