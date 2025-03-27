import { int32 } from '@koalaui.runtime.common';
import { mutableState } from "@koalaui.runtime.states.GlobalStateManager";
import { MutableState } from "@koalaui.runtime.states.State";

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
    public static readonly OB_LENGTH = '__OB_LENGTH';
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
export declare class StateDecoratedVariable<T> extends DecoratedVariableBase<T> implements DecoratedMutableVariable<T>, DecoratedUpdatableVariable<T>, DecoratedV1Variable {
    public readonly _watchFunc: WatchFunc | undefined;
    public __backing: T;

    public constructor(localInitValue: T, watchFunc?: ()=>void)

    public get(): T

    public set(newValue: T): void
    public update(newValue: T): void
}