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

import { ExtendableComponent } from '../component/extendableComponent';

@Retention({policy: "SOURCE"})
export declare @interface State {};

@Retention({policy: "SOURCE"})
export declare @interface Prop {};

@Retention({policy: "SOURCE"})
export declare @interface Link {};

@Retention({policy: "SOURCE"})
export declare @interface Observed {};

@Retention({policy: "SOURCE"})
export declare @interface Track {};

@Retention({policy: "SOURCE"})
export declare @interface ObjectLink {};

@Retention({policy: "SOURCE"})
export declare @interface StorageProp {
    property: string;
};

@Retention({policy: "SOURCE"})
export declare @interface StorageLink {
    property: string;
};

@Retention({policy: "SOURCE"})
export declare @interface LocalStorageProp {
    property: string;
};

@Retention({policy: "SOURCE"})
export declare @interface LocalStorageLink {
    property: string;
};

@Retention({policy: "SOURCE"})
export declare @interface Provide {
    alias: string = "";
    allowOverride: boolean = false;
};

@Retention({policy: "SOURCE"})
export declare @interface Consume {
    alias: string = "";
};

@Retention({policy: "SOURCE"})
export declare @interface Watch {
    callback: string;
};

@Retention({policy: "SOURCE"})
export declare @interface Require {};

export declare class UIUtils {
    static getTarget<T extends object>(source: T): T;
    static makeObserved<T extends object>(source: T): T;
}

export declare interface IDecoratedVariable {
    readonly varName: string;
}

export declare interface IDecoratedV1Variable<T> extends IDecoratedVariable {
    registerWatchToSource(me: IDecoratedV1Variable<T>): void;
}

export declare interface IDecoratedImmutableVariable<T> {
    get(): T;
}

export declare interface IDecoratedMutableVariable<T> {
    get(): T;
    set(newValue: T): void;
}

export declare interface IDecoratedUpdatableVariable<T> {
    update(newValue: T): void;
}

export declare interface IStateDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface IPropDecoratedVariable<T> extends IDecoratedMutableVariable<T>,
    IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface ILinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface IProvideDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface IConsumeDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface IObjectLinkDecoratedVariable<T> extends IDecoratedImmutableVariable<T>,
    IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface IStorageLinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

export declare interface IStoragePropDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

export type LinkSourceType<T> = IDecoratedV1Variable<T>;

export declare interface IMutableStateMeta {
    addRef(): void;
    fireChange(): void;
}

export declare interface IMutableKeyedStateMeta {
    addRef(key: string): void;
    addRef(index: int): void;
    fireChange(key: string): void;
    fireChange(index: int): void;
}

export declare interface IObserve {
    readonly renderingComponent: number;
    readonly renderingId: RenderIdType;
    shouldAddRef(iObjectsRenderId: RenderIdType): boolean;
}

export declare const OBSERVE: IObserve;

export type RenderIdType = int;

export declare interface IObservedObject extends IWatchSubscriberRegister {
    setV1RenderId(renderId: RenderIdType): void;
}

export declare const STATE_MGMT_FACTORY: IStateMgmtFactory;

export declare interface IStateMgmtFactory {
    makeMutableStateMeta(): IMutableStateMeta;
    makeSubscribedWatches(): ISubscribedWatches;
    makeState<T>(owningView: ExtendableComponent, varName: string, initValue: T,
        watchFunc?: WatchFuncType): IStateDecoratedVariable<T>;
    makeProp<T>(owningView: ExtendableComponent, varName: string, initValue: T,
        watchFunc?: WatchFuncType): IPropDecoratedVariable<T>;
    makeLink<T>(owningView: ExtendableComponent, varName: string, source: LinkSourceType<T>,
        watchFunc?: WatchFuncType): ILinkDecoratedVariable<T>;
    makeProvide<T>(owningView: ExtendableComponent, varName: string, provideAlias: string,
        initValue: T, allowOverride: boolean, wathcFunc?: WatchFuncType): IProvideDecoratedVariable<T>;
    makeConsume<T>(owningView: ExtendableComponent, varName: string,
        provideAlias: string, watchFunc?: WatchFuncType): IConsumeDecoratedVariable<T>;
    makeObjectLink<T>(owningView: ExtendableComponent, varName: string,
        initValue: T, wathcFunc?: WatchFuncType): IObjectLinkDecoratedVariable<T>;
    makeStorageLink<T>(owningView: ExtendableComponent, propName: string,
        varName: string, initValue: T, watchFunc?: WatchFuncType): IStorageLinkDecoratedVariable<T>;
    makeStorageProp<T>(owningView: ExtendableComponent, propName: string,
        varName: string, initValue: T, watchFunc?: WatchFuncType): IStoragePropDecoratedVariable<T>;
}

export type WatchFuncType = ((propertyName: string) => void);

export type WatchIdType = int;

export declare interface IWatchSubscriberRegister {
    addWatchSubscriber(watchId: WatchIdType): void;
    removeWatchSubscriber(watchId: WatchIdType): boolean;
}

export declare interface ISubscribedWatches extends IWatchSubscriberRegister {
    executeOnSubscribingWatches(propertyName: string): void;
}

export declare interface AbstractProperty<T> extends IDecoratedMutableVariable<T> {
    info(): string;
}

export declare interface SubscribedAbstractProperty<T> extends AbstractProperty<T> {
    aboutToBeDeleted(): void;
}