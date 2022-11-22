/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Defines the AppStorage interface.
 * @since 7
 */
declare class AppStorage {
  /**
   * Called when a link is set.
   * @since 7
   */
  static Link(propName: string): any;

  /**
   * Called when a hyperlink is set.
   * @since 7
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   * @since 7
   */
  static Prop(propName: string): any;

  /**
   * Called when dynamic properties are set.
   * @since 7
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Called when owning or not.
   * @since 7
   */
  static Has(propName: string): boolean;

  /**
   * Called when data is obtained.
   * @since 7
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Called when setting.
   * @since 7
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Called when setting or creating.
   * @since 7
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Called when a deletion is made.
   * @since 7
   */
  static Delete(propName: string): boolean;

  /**
   * Called when a dictionary is sorted.
   * @since 7
   */
  static Keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @since 7
   * @deprecated since 9
   * @useinstead AppStorage.Clear
   */
  static staticClear(): boolean;

  /**
   * Called when a cleanup occurs.
   * @since 9
   */
  static Clear(): boolean;

  /**
   * Called when the data can be changed.
   * @since 7
   */
  static IsMutable(propName: string): boolean;

  /**
   * Called when you check how much data is stored.
   * @since 7
   */
  static Size(): number;
}

/**
 * Defines the subscribed abstract property.
 * @since 7
 * @systemapi
 */
/**
 * Defines the subscribed abstract property.
 * @since 9
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * Setting Subscribers.
   * @since 7
   * @systemapi
   */
  protected subscribers_: Set<number>;

  /**
   * Private user ID.
   * @since 7
   * @systemapi
   */
  private id_;

  /**
   * Private user information.
   * @since 7
   * @systemapi
   */
  private info_?;

  /**
   * @since 7
   * @systemapi
   */
  constructor(
      /**
       * Subscriber IPropertySubscriber.
       * @since 7
       * @systemapi
       */
      subscribeMe?: IPropertySubscriber,
      /**
       * Subscriber info.
       * @since 7
       * @systemapi
       */
      info?: string,
  );

  /**
   * Called when the subscriber ID is entered.
   * @since 7
   * @systemapi
   */
  id(): number;

  /**
   * Called when a subscriber information description is entered.
   * @since 7
   * @systemapi
   */
  info(): string;

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   */
  /**
   * Called when data is obtained.
   * @since 9
   */
  abstract get(): T;

  /**
   * Called when data is created.
   * @since 7
   * @systemapi
   */
  /**
   * Called when data is created.
   * @since 9
   */
  abstract set(newValue: T): void;

  /**
   * Called when a two-way synchronization is created.
   * @since 7
   * @systemapi
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Called when a one-way synchronization is created.
   * @since 7
   * @systemapi
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Called when the subscriber is unlinked.
   * @since 7
   * @systemapi
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Called when the notification has changed.
   * @since 7
   * @systemapi
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Called when the notification property is read.
   * @since 7
   * @systemapi
   */
  protected notifyPropertyRead(): void;

  /**
   * Called when the number of users is queried.
   * @since 7
   * @systemapi
   */
  numberOfSubscrbers(): number;
}

/**
 * Provides an interface for attribute subscribers.
 * @since 7
 * @systemapi
 */
interface IPropertySubscriber {
  /**
   * Called when the ID of the property subscriber is queried.
   * @since 7
   * @systemapi
   */
  id(): number;

  /**
   * Provides a single attribute change user interface.
   * @since 7
   * @systemapi
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * Defines the state value.
 * @since 7
 * @systemapi
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Sources of synchronization attributes bidirectionally.
   * @since 7
   * @systemapi
   */
  private source_;

  /**
   * constructor parameters.
   * @since 7
   * @systemapi
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @since 7
   * @systemapi
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @since 7
   * @systemapi
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   */
  get(): T;

  /**
   * Called when data is created.
   * @since 7
   * @systemapi
   */
  set(newValue: T): void;
}

/**
* Defines the prop state value.
* @since 7
* @systemapi
*/
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Pack value for single-item binding.
   * @since 7
   * @systemapi
   */
  private wrappedValue_;

  /**
   * Sources of synchronization attributes bidirectionally.
   * @since 7
   * @systemapi
   */
  private source_;

  /**
   * Constructor parameters.
   * @since 7
   * @systemapi
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @since 7
   * @systemapi
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @since 7
   * @systemapi
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   */
  get(): T;

  /**
   * Called when data is created.
   * @since 7
   * @systemapi
   */
  set(newValue: T): void;
}

/**
 * Defines the subscriber.
 * @since 7
 * @systemapi
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Provides a single attribute change user interface.
   * @since 7
   * @systemapi
   */
  hasChanged(newValue: T): void;
}

/**
 * Defines the Subscribale base class.
 * @since 7
 * @systemapi
 * @hide
 */
declare abstract class SubscribaleAbstract {
  /**
   * Returns the ownership attribute set by the.
   * @since 7
   * @systemapi
   * @hide
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor();

  /**
   * Called when the notification property has changed.
   * @since 7
   * @systemapi
   * @hide
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Called when adding an already owned property.
   * @since 7
   * @systemapi
   * @hide
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted.
   * @since 7
   * @systemapi
   * @hide
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted by ID
   * @since 7
   * @systemapi
   * @hide
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * Defines the Environment interface.
 * @since 7
 */
declare class Environment {
  /**
   * Constructor.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor();

  /**
   * Called when a property value is checked.
   * @since 7
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when multiple property values are checked.
   * @since 7
   */
  static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   * @since 7
   */
  static Keys(): Array<string>;
}

/**
 * Defines the PersistentStorage interface.
 * @since 7
 */
declare class PersistentStorage {
  /**
   * Constructor parameters.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Called when a persistence property is stored.
   * @since 7
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Called when a property is deleted.
   * @since 7
   */
  static DeleteProp(key: string): void;

  /**
   * Called when multiple persistence properties are stored.
   * @since 7
   */
  static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   * @since 7
   */
  static Keys(): Array<string>;
}

/**
 * Used for ide.
 * @since 7
 * @systemapi
 * @hide
 */
declare const appStorage: AppStorage;

/**
 * Define LocalStorage.
 * @since 9
 */
 declare class LocalStorage {
  /**
   * Constructor.
   * @since 9
   */
  constructor(initializingProperties?: Object);

  /**
   * Get current LocalStorage shared from stage.
   * @StageModelOnly
   * @since 9
   */
  static GetShared(): LocalStorage;

  /**
   * Return true if prooperty with given name exists
   * @since 9
   */
  has(propName: string): boolean;

  /**
   * Return a Map Iterator
   * @since 9
   */
  keys(): IterableIterator<string>;

  /**
   * Return number of properties
   * @since 9
   */
  size(): number;

  /**
   * Return value of given property
   * @since 9
   */
  get<T>(propName: string): T;

  /**
   * Set value of given property
   * @since 9
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * Add property if not property with given name
   * @since 9
   */
  setOrCreate<T>(propName: string, newValue?: T): boolean;

  /**
   * Create and return a 'link' (two-way sync) to named property
   * @since 9
   */
  link<T>(propName: string, linkUser?: T, subscribersName?: string): T;

  /**
   * Like link(), will create and initialize a new source property in LocalStorge if missing
   * @since 9
   */
  setAndLink<T>(propName: string, defaultValue: T, linkUser?: T, subscribersName?: string): T;

  /**
   * Create and return a 'prop' (one-way sync) to named property
   * @since 9
   */
  prop<T>(propName: string, propUser?: T, subscribersName?: string): T;

  /**
   * Like prop(), will create and initialize a new source property in LocalStorage if missing
   * @since 9
   */
  setAndProp<T>(propName: string, defaultValue: T, propUser?: T, subscribersName?: string): T;
  
  /**
   * Delete property from StorageBase
   * @since 9
   * @returns false if method failed
   */
  delete(propName: string): boolean;

  /**
   * Delete all properties from the StorageBase
   * @since 9
   */
  clear(): boolean;
}

declare module "StateManagement" {
  module "StateManagement" {
    // @ts-ignore
    export { LocalStorage };
  }
}
