/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

export interface FileResponse {
  uri: string;
  length: number;
  lastModifiedTime: number;
  type: "dir" | "file";
  subFiles?: Array<FileResponse>;
}
export interface FileMoveOption {
  srcUri: string;
  dstUri: string;
  success?: (uri: string) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileListResponse {
  fileList: Array<FileResponse>;
}
export interface FileListOption {
  uri: string;
  success?: (data: FileListResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileCopyOption {
  srcUri: string;
  dstUri: string;
  success?: (uri: string) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileGetOption {
  uri: string;
  recursive?: boolean;
  success?: (file: FileResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileDeleteOption {
  uri: string;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileWriteTextOption {
  uri: string;
  text: string;
  encoding?: string;
  append?: boolean;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileReadTextResponse {
  text: string;
}
export interface FileReadTextOption {
  uri: string;
  encoding?: string;
  position?: number;
  length?: number;
  success?: (data: FileReadTextResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileWriteArrayBufferOption {
  uri: string;
  buffer: Uint8Array;
  position?: number;
  append?: boolean;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileReadArrayBufferResponse {
  buffer: Uint8Array;
}
export interface FileReadArrayBufferOption {
  uri: string;
  position?: number;
  length?: number;
  success?: (data: FileReadArrayBufferResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileAccessOption {
  uri: string;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileMkdirOption {
  uri: string;
  recursive?: boolean;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface FileRmdirOption {
  uri: string;
  recursive?: boolean;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export default class File {
  static move(options: FileMoveOption): void;
  static copy(options: FileCopyOption): void;
  static list(options: FileListOption): void;
  static get(options: FileGetOption): void;
  static delete(options: FileDeleteOption): void;
  static writeText(options: FileWriteTextOption): void;
  static readText(options: FileReadTextOption): void;
  static writeArrayBuffer(options: FileWriteArrayBufferOption): void;
  static readArrayBuffer(options: FileReadArrayBufferOption): void;
  static access(options: FileAccessOption): void;
  static mkdir(options: FileMkdirOption): void;
  static rmdir(options: FileRmdirOption): void;
}
