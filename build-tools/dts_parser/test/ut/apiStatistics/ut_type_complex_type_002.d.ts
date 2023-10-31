import { ValueType } from 'exceljs';

type TextOneType = { [key: string | number]: ValueType | Uint8Array | (false & null) };
