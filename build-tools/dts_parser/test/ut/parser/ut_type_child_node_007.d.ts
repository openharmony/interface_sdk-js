import { ValueType } from 'exceljs';

declare namespace test {
  type TextOneType = { [key: string]: ValueType | Uint8Array | null };
}
