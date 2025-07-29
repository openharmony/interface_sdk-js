/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { WatchFuncType } from '../decorators/decoratorWatch';

export declare interface IDecoratedImmutableVariable<T> {
    get(): T
}

export declare interface IDecoratedMutableVariable<T> {
    get(): T
    set(newValue: T): void
}

export declare interface IDecoratedUpdatableVariable<T> {
    update(newValue: T): void
}

export declare interface AbstractProperty<T> extends IDecoratedMutableVariable<T> {
    info(): string;
}

export declare interface SubscribedAbstractProperty<T> extends AbstractProperty<T> {
    aboutToBeDeleted(): void;
}

export declare class DecoratedVariableBase<T> {
    public constructor(decorator: string, varName: string)
}

export declare class DecoratedV1VariableBase<T> extends DecoratedVariableBase<T> {
    public constructor(decorator: string, varName: string, initValue:T, watchFunc?: WatchFuncType)
}