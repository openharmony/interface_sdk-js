/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * the ut for method in interface
 *
 */
export interface Test {
  testFun(dataSource: IDataSource, url: string | number, itenGenerator: testType): LazyForEachInterface;
}

declare type testType = (item: any, index: string | number) => string | number;
export interface LazyForEachInterface {

}

export interface IDataSource {

}