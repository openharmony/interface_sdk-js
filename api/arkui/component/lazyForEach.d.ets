/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { DynamicNode } from './common';
export enum DataOperationType {
    ADD = 'add',
    DELETE = 'delete',
    EXCHANGE = 'exchange',
    MOVE = 'move',
    CHANGE = 'change',
    RELOAD = 'reload'
}
export interface DataAddOperation {
    type: DataOperationType;
    index: number;
    count?: number;
    key?: string | Array<string>;
}
export interface DataDeleteOperation {
    type: DataOperationType;
    index: number;
    count?: number;
}
export interface DataChangeOperation {
    type: DataOperationType;
    index: number;
    key?: string;
}
export interface MoveIndex {
    from: number;
    to: number;
}
export interface ExchangeIndex {
    start: number;
    end: number;
}
export interface ExchangeKey {
    start: string;
    end: string;
}
export interface DataMoveOperation {
    type: DataOperationType;
    index: MoveIndex;
    key?: string;
}
export interface DataExchangeOperation {
    type: DataOperationType;
    index: ExchangeIndex;
    key?: ExchangeKey;
}
export interface DataReloadOperation {
    type: DataOperationType;
}
export type DataOperation = DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation |
    DataExchangeOperation | DataReloadOperation;

export interface DataChangeListener {
    onDataReloaded(): void
    onDataAdded(index: number): void
    onDataAdd(index: number): void
    onDataMoved(from: number, to: number): void
    onDataMove(from: number, to: number): void
    onDataDeleted(index: number): void
    onDataDelete(index: number): void
    onDataChanged(index: number): void
    onDataChange(index: number): void
    onDatasetChange(dataOperations: Array<DataOperation>): void
}

export interface IDataSource<T> {

    totalCount(): number;
  
    getData(index: number): T;
  
    registerDataChangeListener(listener: DataChangeListener): void;
  
    unregisterDataChangeListener(listener: DataChangeListener): void;
}

export interface LazyForEachAttribute extends DynamicNode {}

@memo
@ComponentBuilder
export declare function LazyForEach<T>(dataSource: IDataSource<T>,
    @memo
    itemGenerator: (item: T, index: number) => void,
    keyGenerator?: (item: T, index: number) => string,
): LazyForEachAttribute