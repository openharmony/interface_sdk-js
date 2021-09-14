interface IPropertySubscriber {
  id(): number;
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  hasChanged(newValue: T): void;
}

declare abstract class SubscribedAbstractProperty<T> {
  protected subscribers_: Set<number>;
  private id_;
  private info_?;
  constructor(subscribeMe?: IPropertySubscriber, info?: string);
  id(): number;
  info(): string;
  abstract get(): T;
  abstract set(newValue: T): void;
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;
  unlinkSuscriber(subscriberId: number): void;
  protected notifyHasChanged(newValue: T): void;
  protected notifyPropertyRead(): void;
  numberOfSubscrbers(): number;
}

declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T> implements ISinglePropertyChangeSubscriber<T> {
  private source_;
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;
  hasChanged(newValue: T): void;
  get(): T;
  set(newValue: T): void;
}

declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T> implements ISinglePropertyChangeSubscriber<T> {
  private wrappedValue_;
  private source_;
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;
  hasChanged(newValue: T): void;
  get(): T;
  set(newValue: T): void;
}

export declare class AppStorage {
  static Link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;
  static Prop<S>(propName: string): SubscribedAbstractProperty<S> | undefined;
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;
  static Has(propName: string): boolean;
  static Get<T>(propName: string): T | undefined;
  static Set<T>(propName: string, newValue: T): boolean;
  static SetOrCreate<T>(propName: string, newValue: T): void;
  static Delete(propName: string): boolean;
  static Keys(): IterableIterator<string>;
  static staticClear(): boolean;
  static IsMutable(propName: string): boolean;
  static Size(): number;
}

export declare class Environment {
  constructor();
  static EnvProp<S>(key: string, value: S): boolean;
  static EnvProps(props: {
    key: string;
    defaultValue: any;
  }[]): void;
  static Keys(): Array<string>;
}

export declare enum ColorMode {
  LIGHT = 0,
  DARK,
}

export declare enum LayoutDirection {
  LTR = 0,
  RTL,
}

export declare class PersistentStorage {
  constructor(appStorage: AppStorage, storage: Storage);
  static PersistProp<T>(key: string, defaultValue: T): void;
  static DeleteProp(key: string): void;
  static PersistProps(properties: {
      key: string;
      defaultValue: any;
  }[]): void;
  static Keys(): Array<string>;
}

export declare class Storage {
  constructor(needCrossThread?: boolean, file?: string);
  get(key: string): string | undefined;
  set(key: string, val: any): void;
  clear(): void;
  delete(key: string): void;
}

export declare abstract class SubscribaleAbstract {
  private owningProperties_: Set<number>;
  constructor();
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;
  public addOwningProperty(subscriber: IPropertySubscriber): void;
  public removeOwningProperty(property: IPropertySubscriber): void;
  public removeOwningPropertyById(subscriberId: number): void;
}

export declare const appStorage: AppStorage;
