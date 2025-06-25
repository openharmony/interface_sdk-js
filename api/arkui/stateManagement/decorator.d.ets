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

/**
 * Define decorated variable interface.
 *
 * @interface IDecoratedVariable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IDecoratedVariable {
  /**
   * Decorated variable name.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  readonly varName: string;
}

/**
 * Define V1 decorated variable interface.
 *
 * @extends IDecoratedVariable
 * @interface IDecoratedVariable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IDecoratedV1Variable<T> extends IDecoratedVariable {
  /**
   * Registers the watch callback function with the data source.
   *
   * @param { IDecoratedV1Variable<T> } decoratedVar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  registerWatchToSource(decoratedVar: IDecoratedV1Variable<T>): void;
}

/**
 * Define decorated immutable variable interface.
 *
 * @interface IDecoratedImmutableVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IDecoratedImmutableVariable<T> {
  /**
   * Get the state variable.
   *
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  get(): T;
}

/**
 * Define decorated mutable variable interface.
 *
 * @interface IDecoratedMutableVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IDecoratedMutableVariable<T> {
  /**
   * Get the state variable.
   *
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  get(): T;
  /**
   * Set the state variable with a new Value.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  set(newValue: T): void;
}

/**
 * Define decorated updatable variable interface.
 *
 * @interface IDecoratedUpdatableVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IDecoratedUpdatableVariable<T> {
  /**
   * Update the state variable with a new Value.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  update(newValue: T): void;
}

/**
 * Define state decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface IStateDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IStateDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

export declare interface IPropDecoratedVariable<T> extends IDecoratedMutableVariable<T>,
    IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T> {
}

/**
 * Define Link decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface ILinkDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface ILinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define Provide decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface IProvideDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IProvideDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define Consume decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface IConsumeDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IConsumeDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define ObjectLink decoration variable interface.
 *
 * @extends IDecoratedImmutableVariable<T>, IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T>
 * @interface IObjectLinkDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IObjectLinkDecoratedVariable<T> extends IDecoratedImmutableVariable<T>,
    IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define StorageLink decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface IStorageLinkDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IStorageLinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define StorageProp decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface IStoragePropDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IStoragePropDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {
}

/**
 * Define StoragePropRef decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface IStoragePropRefDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IStoragePropRefDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define LocalStorageLink decoration variable interface.
 *
 * @extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T>
 * @interface ILocalStorageLinkDecoratedVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface ILocalStorageLinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define Link source type.
 *
 * @typedef { IStateDecoratedVariable<T> | ILinkDecoratedVariable<T> | IObjectLinkDecoratedVariable<T> |
    IPropDecoratedVariable<T> | IStorageLinkDecoratedVariable<T> | ILocalStorageLinkDecoratedVariable<T> | IStoragePropRefDecoratedVariable<T> |
    IProvideDecoratedVariable<T> | IConsumeDecoratedVariable<T> } LinkSourceType<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type LinkSourceType<T> = IStateDecoratedVariable<T> | ILinkDecoratedVariable<T> | IObjectLinkDecoratedVariable<T> |
    IPropDecoratedVariable<T> | IStorageLinkDecoratedVariable<T> | ILocalStorageLinkDecoratedVariable<T> | IStoragePropRefDecoratedVariable<T> |
    IProvideDecoratedVariable<T> | IConsumeDecoratedVariable<T>;


/**
 * Define mutable state meta interface.
 *
 * @interface IMutableStateMeta
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IMutableStateMeta {
  /**
   * Collect the dependancy for UI component with state variable
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  addRef(): void;
  /**
   * Notify UI component to update when state variable is changed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
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

  /**
   * Create a StorageLink variable instance.
   *
   * @param { ExtendableComponent } owningView - custom component.
   * @param { string } propName - property name.
   * @param { string } varName - state variable name.
   * @param { T } initValue - init value.
   * @param { Type } ttype - value type.
   * @param { WatchFuncType } [watchFunc] - watch type
   * @returns { IStorageLinkDecoratedVariable<T> } StorageLink instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
    makeStorageLink<T>(owningView: ExtendableComponent, propName: string,
        varName: string, initValue: T, ttype: Type, watchFunc?: WatchFuncType): IStorageLinkDecoratedVariable<T>;
   /**
    * Create a StoragePropRef variable instance.
    *
    * @param { ExtendableComponent } owningView - custom component.
    * @param { string } propName - property name.
    * @param { string } varName - state variable name.
    * @param { T } initValue - init value.
    * @param { Type } ttype - value type.
    * @param { WatchFuncType } [watchFunc] - watch type
    * @returns { IStoragePropRefDecoratedVariable<T> } StoragePropRef instance
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20
    */
    makeStoragePropRef<T>(owningView: ExtendableComponent, propName: string,
        varName: string, initValue: T, ttype: Type, watchFunc?: WatchFuncType): IStoragePropRefDecoratedVariable<T>;

  /**
   * Create a LocalStorageLink variable instance.
   *
   * @param { ExtendableComponent } owningView - custom component.
   * @param { string } propName - property name.
   * @param { string } varName - state variable name.
   * @param { T } initValue - init value.
   * @param { Type } ttype - value type
   * @param { WatchFuncType } [watchFunc] - watch type
   * @returns { ILocalStorageLinkDecoratedVariable<T> } LocalStorageLink instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
    makeLocalStorageLink<T>(owningView: ExtendableComponent, propName: string,
        varName: string, initValue: T, ttype: Type, watchFunc?: WatchFuncType): ILocalStorageLinkDecoratedVariable<T>;
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