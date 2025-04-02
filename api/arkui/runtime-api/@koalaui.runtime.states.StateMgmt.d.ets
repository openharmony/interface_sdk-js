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

import { int32 } from '@koalaui.runtime.common';
import { mutableState } from '@koalaui.runtime.states.GlobalStateManager';
import { MutableState } from '@koalaui.runtime.states.State';

type WatchFunc = ()=>void;
export declare class MutableStateMetaBase {
    public readonly deco: string;
    public constructor(deco: string)
}

export declare class MutableStateMeta extends MutableStateMetaBase {
    public __metaDependency: MutableState<int32>;
    public addRef(): void
    public fireChange(): void
    public constructor(deco: string)
}

export declare class MutableKeyedStateMeta extends MutableStateMetaBase {
    public static readonly OB_LENGTH: string;
    public __metaDependency: Map<string, MutableState<int32>>;
    public addRef(key: string): void
    public fireChange(key: string): void
    public constructor(deco: string)
}

export interface IObservedObject {
    _permissibleAddRefDepth: int32;
    subscribers: Set<int32>;
}

export declare function castToIObservedObject<T>(obj: T): T | undefined

export declare function setObservationDepth<T>(obj: T, depth: number): void

export interface DecoratedImmutableVariable<T> {
    get(): T;
}
export interface DecoratedMutableVariable<T> {
    get(): T;
    set(newValue: T): void;
}
export interface DecoratedUpdatableVariable<T> {
    update(newValue: T): void;
}
export interface DecoratedV1Variable {
    _watchFunc: WatchFunc | undefined
}
export declare abstract class DecoratedVariableBase<T> {
    public readonly _meta: MutableState<int32>;
    public addRef(): void
    public fireChange(): void
    public validateValue(newValue: T): boolean
}
export declare class StateDecoratedVariable<T> extends DecoratedVariableBase<T> implements
    DecoratedMutableVariable<T>, DecoratedUpdatableVariable<T>, DecoratedV1Variable {
    public readonly _watchFunc: WatchFunc | undefined;
    public __backing: T;

    public constructor(localInitValue: T, watchFunc?: ()=>void)

    public get(): T

    public set(newValue: T): void
    public update(newValue: T): void
}

export declare class LinkDecoratedVariable<T> implements DecoratedMutableVariable<T>, DecoratedV1Variable {
    public _watchFunc: WatchFunc | undefined;
    public sourceGet_: () => T;
    public sourceSet_?: (newValue: T) => void;
    constructor(sourceGet_: () => T, sourceSet_?: (newValue: T) => void, watchFunc?: WatchFunc);
    public get(): T;
    public set(newValue: T): void;
}

export declare class PropDecoratedVariable<T> extends DecoratedVariableBase<T> implements 
    DecoratedMutableVariable<T>, DecoratedV1Variable, DecoratedUpdatableVariable<T> {
    public readonly _watchFunc: WatchFunc | undefined;
    public __backing: T;
    public __sourceValue: T;
    public constructor(source_value: T, watchFunc?: WatchFunc)
    public get(): T
    public set(newValue: T): void
    public update(newValue: T): void
}

export declare class StorageLinkDecoratedVariable<T> implements DecoratedMutableVariable<T>, DecoratedV1Variable {
    public _watchFunc: WatchFunc | undefined;
    public asLink : LinkDecoratedVariable<Object> | undefined;
    constructor(propName: string, varName_: string, localValue: T, watchFunc?: WatchFunc);
    public getInfo(): string;
    public get(): T;
    public set(newValue: T): void;
}

export declare class StoragePropDecoratedVariable<T> implements DecoratedMutableVariable<T>, DecoratedV1Variable {
    public _watchFunc: WatchFunc | undefined;
    public asProp : PropDecoratedVariable<Object> | undefined;
    constructor(propName: string, varName:string, localVal: T, watchFunc?: WatchFunc);
    public getInfo(): string;
    public get(): T;
    public set(newValue: T): void;
}

export declare class LocalStorage {
    static getShared(): LocalStorage | undefined;
    public link(propName: string): LinkDecoratedVariable<Object> | undefined;
    public setAndLink(propName: string, defaultValue: Object): LinkDecoratedVariable<Object>;
    public prop(propName: string): PropDecoratedVariable<Object> | undefined;
    public setAndProp(propName: string, defaultValue: Object): PropDecoratedVariable<Object>;
    public has(propName: string): boolean;
    public get<T>(key: string): T | undefined;
    public set<T>(key: string, newValue: T): boolean;
    public setOrCreate<T>(key: string, newValue: T): boolean;
    public keys(): IterableIterator<string>;
    public size(): number;
    public delete(propName: string): boolean;
    public clear(): boolean;
}

export declare class AppStorage extends LocalStorage {
    public static link(key: string): LinkDecoratedVariable<Object> | undefined;
    public static setAndLink(key: string, defaultValue: Object) : LinkDecoratedVariable<Object>;
    public static prop(propName: string) : PropDecoratedVariable<Object> | undefined;
    public static setAndProp(key: string, defaultValue: Object) : PropDecoratedVariable<Object>;
    public static has(key: string): boolean;
    public static get<T>(key: string): T | undefined;
    public static set<T>(key: string, newValue: T): boolean;
    public static setOrCreate<T>(key: string, newValue: T): void;
    public static keys(): IterableIterator<string>;
    public static size(): number;
    public static delete(key: string): boolean;
    public static clear(): boolean;
}