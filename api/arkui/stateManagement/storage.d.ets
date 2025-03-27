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

/**
 *
 *  AbstractProperty can be understood as a handler or an alias
 *  to a property inside LocalStorage / AppStorage singleton
 *  allows to read the value with @see get and to change the
 *  value with @see set.
 *
 * Functions
 *   reads the referenced AppStorage/LocalStorage property value with given name @see get()
 *   write a new value to the AppStorage/LocalStorage property value @see set()
 *   returns the referenced AppStorage/LocalStorage property name @see info()
 *
 * Use ref or setAndRef to obtain a AbstractProperty.
 *
 * @interface AbstractProperty<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface AbstractProperty<T> {
    /**
     * returns the name of the referenced property
     *
     * @returns { string } name of the referenced property
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    info(): string;

    /**
     * reads value of the referenced AppStorage/LocalStorage property.
     *
     * @returns { T } value of the referenced AppStorage/LocalStorage property.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get(): T;

    /**
     * Set new value, must be of type T, can be 'undefined' or 'null'.
     * Updates the value of the referenced AppStorage/LocalStorage property.
     *
     * @param { T } newValue new value set to AppStorage/LocalStorage
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    set(newValue: T): void;
}

/**
 * Defines the subscribed abstract property.
 *
 * SubscribedAbstractProperty<T> is the return value of
 * - AppStorage static functions link(), prop(), setAndLink(), and setAndProp()
 * - LocalStorage member methods link(), prop(), setAndLink(), and setAndProp()
 * 'T' can be boolean, string, number or custom class.
 * Main functions
 *   see aboutToBeDeleted() ends the sync relationship with the AppStorage/LocalStorage property
 *   The app must call this function before the SubscribedAbstractProperty<T> object
 *   goes out of scope.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface SubscribedAbstractProperty<T> extends AbstractProperty<T> {
    /**
     * An app needs to call this function before the instance of SubscribedAbstractProperty
     * goes out of scope / is subject to garbage collection. Its purpose is to unregister the
     * variable from the AppStorage/LocalStorage.link()/prop() and related functions create.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    aboutToBeDeleted(): void;
}

/**
 * LocalStorage
 * Class implements a Map of ObservableObjectBase UI state variables.
 * Instances can be created to manage UI state within a limited "local"
 * access, and life cycle as defined by the app.
 * AppStorage singleton is sub-class of LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare class LocalStorage {
    /**
     * Construct new instance of LocalStorage
     * initialize with all properties and their values that Object.keys(params) returns
     * Property values must not be undefined.
     *
     * @param { Object } [initializingProperties] - Object containing keys and values. see set() for valid values
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(initializingProperties?: StorageProperty[]);

    /**
     * Get current LocalStorage shared from stage.
     *
     * @returns { LocalStorage } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @StageModelOnly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.UIContext#getSharedLocalStorage
     */
    static getShared(): LocalStorage | undefined;

    /**
     * Check if LocalStorage has a property with given name
     * return true if property with given name exists
     * same as ES6 Map.prototype.has()
     *
     * @param { string } propName - searched property
     * @returns { boolean } true if property with such name exists in LocalStorage
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    has(propName: string): boolean;

    /**
     * Provide names of all properties in LocalStorage
     * same as ES6 Map.prototype.keys()
     *
     * @returns { IterableIterator<string> } return a Map Iterator
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    keys(): IterableIterator<string>;

    /**
     * Returns number of properties in LocalStorage
     * same as Map.prototype.size()
     *
     * @returns { number } return number of properties
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    size(): int;

    /**
     * Returns value of given property
     * return undefined if no property with this name
     *
     * @param { string } propName
     * @returns { T | undefined } property value if found or undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    get<T>(propName: string): T | undefined;

    /**
     * Set value of given property in LocalStorage
     * Method sets nothing and returns false if property with this name does not exist in LocalStorage
     * newValue can be undefined or null from API 12.
     *
     * @param { string } propName
     * @param { T } newValue - must be of type T, can be undefined or null
     * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    set<T>(propName: string, newValue: T): boolean;

    /**
     * Set value of given property, if it exists, see set() .
     * Add property if no property with given name and initialize with given value.
     * newValue can be undefined or null from API 12
     *
     * @param { string } propName
     * @param { T } newValue - must be of type T, can be undefined or null
     * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    setOrCreate<T>(propName: string, newValue?: T): boolean;

    /**
     * Obtain a handler or an alias to LocalStorage property with given name.
     *
     * @param { string } propName LocalStorage property name
     * @returns { AbstractProperty<T> | undefined } AbstractProperty object if property with given name exists
     * return undefined otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ref<T>(propName: string): AbstractProperty<T> | undefined;

    /**
     * Obtain a handler or an alias to LocalStorage property with given name.
     *
     * If property does not exist in LocalStorage, create it with given default value.
     *
     * @param { string } propName LocalStorage property name
     * @param { T } defaultValue If property does not exist in LocalStorage,
     *        create it with given default value.
     * @returns { AbstractProperty<T> } AbstractProperty object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

    /**
     * Create and return a two-way sync "(link") to named property
     *
     * @param { string } propName - name of source property in LocalStorage
     * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
     *           return undefined if named property does not already exist in LocalStorage
     *           Apps can use SDK functions of base class SubscribedPropertyAbstract<T>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice  
     * @since 20
     */
    link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;

    /**
     * Use see link(), but will create and initialize a new source property in LocalStorage if missing
     *
     * @param { string } propName - name of source property in LocalStorage
     * @param { T } defaultValue - value to be used for initializing new property in LocalStorage
     *        default value must be of type T, can be undefined or null.
     * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
     *          Apps can use SDK functions of base class SubscribedAbstractProperty<T>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

    /**
     * Create and return a one-way sync ('prop') to named property
     *
     * @param { string } propName - name of source property in LocalStorage
     * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
     *           return undefined if named property does not already exist in LocalStorage
     *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    prop<T>(propName: string): SubscribedAbstractProperty<T> | undefined;

    /**
     * Like see prop(), will create and initialize a new source property in LocalStorage if missing
     *
     * @param { string } propName - name of source property in LocalStorage
     * @param { T } defaultValue - value to be used for initializing new property in LocalStorage.
     *         Default value must be of type T, can be undefined or null.
     * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
     *           Apps can use SDK functions of base class SubscribedAbstractProperty<T>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

    /**
     * Delete property from StorageBase
     * Use with caution:
     * Before deleting a prop from LocalStorage all its subscribers need to
     * unsubscribe from the property.
     * This method fails and returns false if given property still has subscribers
     * Another reason for failing is unknown property.
     * Developer advise:
     * Subscribers are created with see link(), see prop()
     * and also via @LocalStorageLink and @LocalStorageProp state variable decorators.
     * That means as long as their is a @Component instance that uses such decorated variable
     * or a sync relationship with a SubscribedAbstractProperty variable the property can nit
     * (and also should not!) be deleted from LocalStorage.
     *
     * @param { string } propName
     * @returns { boolean } false if method failed
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    delete(propName: string): boolean;

    /**
     * Delete all properties from the LocalStorage instance
     * Precondition is that there are no subscribers.
     * method returns false and deletes no properties if there is any property
     * that still has subscribers
     *
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    clear(): boolean;
}

/**
 * AppStorage singleton is sub-class of see LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class AppStorage {
    /**
     * Checks if AppStorage has a property with given name
     * returns true if property with given name exists
     * same as ES6 Map.prototype.has()
     * Same as see LocalStorage.has()
     *
     * @param { string } propName - searched property
     * @returns { boolean } true if property with such name exists in AppStorage
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static has(propName: string): boolean;

    /**
     * Provide names of all properties in AppStorage
     * same as ES6 Map.prototype.keys()
     * Same as see LocalStorage.keys()
     *
     * @returns { IterableIterator<string> } return a Map Iterator
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static keys(): IterableIterator<string>;

    /**
     * Method returns the number of properties currently in AppStorage
     *
     * @returns { number } Returns the number of properties currently in AppStorage
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static size(): int;

    /**
     * Same as see LocalStorage.get()
     * Obtain the value of property with given name, returns undefined if the property does not exist in AppStorage.
     *
     * @param { string } propName
     * @returns { T | undefined } property value of type T if found or undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static get<T>(propName: string): T | undefined;

    /**
     * Set value of given property in AppStorage
     * Method sets nothing and returns false if property with this name does not exist in AppStorage
     * newValue can be undefined or null from API 12.
     * Same as see LocalStorage.set()
     *
     * @param { string } propName
     * @param { T } newValue - must be of type T, can be undefined or null
     * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static set<T>(propName: string, newValue: T): boolean;

    /**
     * Set value of given property, if it exists, see set() .
     * Add property if no property with given name in AppStorage, and initialize with given value.
     * newValue can be undefined or null from API 12
     * see LocalStorage.setOrCreate()
     *
     * @param { string } propName
     * @param { T } newValue - must be of type T, can be undefined or null
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static setOrCreate<T>(propName: string, newValue?: T): boolean;

    /**
     * Obtain a handler or an alias to AppStorage property with given name.
     *
     * @param { string } propName AppStorage property name
     * @returns { AbstractProperty<T> | undefined } AbstractProperty object if property with given name exists
     * return undefined otherwise
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static ref<T>(propName: string): AbstractProperty<T> | undefined;

    /**
     * Obtain a handler or an alias to AppStorage property with given name.
     *
     * If property does not exist in AppStorage, create it with given default value.
     *
     * @param { string } propName AppStorage property name
     * @param { T } defaultValue If property does not exist in AppStorage,
     *        create it with given default value.
     * @returns { AbstractProperty<T> } AbstractProperty object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

    /**
     * Create and return a two-way sync ("link") to named property
     * Same as @see LocalStorage.link()
     *
     * @param { string } propName - name of source property in AppStorage
     * @returns { SubscribedAbstractProperty<T> } instance of SubscribedAbstractProperty<T>
     *           return 'undefined' if named property does not already exist in AppStorage
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;

    /**
     * Like see @link(), but will create and initialize a new source property in AppStorage if missing
     * Same as see LocalStorage.setAndLink()
     *
     * @param { string } propName - name of source property in AppStorage
     * @param { T } defaultValue - value to be used for initializing new property in AppStorage
     *        default value must be of type T, can be undefined or null.
     * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

    /**
     * Create and return a one-way sync ('prop') to named property
     * Same as @see LocalStorage.prop()
     *
     * @param { string } propName - name of source property in AppStorage
     * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
     *           return undefined if named property does not already exist in AppStorage.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static prop<T>(propName: string): SubscribedAbstractProperty<T> | undefined;

    /**
     *
     * Like @see prop(), will create and initialize a new source property in AppStorage if missing
     * Same as see LocalStorage.setAndProp()
     *
     * @param { string } propName - name of source property in AppStorage
     * @param { T } defaultValue - value to be used for initializing new property in AppStorage.
     *        default value must be of type T, can be undefined or null.
     * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
     *           return undefined if named property does not exist in AppStorage.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

    /**
     * Delete property with given name from AppStorage
     * Use with caution:
     * Before deleting a prop from AppStorage all its subscribers need to
     * unsubscribe from the property.
     * This method fails and returns false if given property still has subscribers
     * Another reason for failing is unknown property name.
     * Developer advise:
     * Subscribers to a property in AppStorage are created with see link(), see prop()
     * and also via @StorageLink and @StorageProp state variable decorators.
     * That means as long as their is a @Component instance that uses such decorated variable
     * or a sync relationship with a SubscribedAbstractProperty variable the property can not
     * (and also should not!) be deleted from AppStorage.
     * Same as see LocalStorage.delete()
     *
     * @param { string } propName
     * @returns { boolean } false if method failed
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static delete(propName: string): boolean;

    /**
     * Delete all properties from the AppStorage.
     * Precondition is that there are no subscribers, see Delete().
     *
     * @returns { boolean } false and deletes no properties if there is any property
     * that still has subscribers.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static clear(): boolean;
}

/**
 * PersistProps object
 *
 * @interface StorageProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface StorageProperty {
    /**
     * Property name
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    key: string;

    /**
     * If AppStorage does not include this property it will be initialized with this value
     *
     * @type { number | string | boolean | Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    defaultValue: number | string | boolean | Object;
}

/**
 * PersistProps object
 *
 * @interface PersistPropsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export type PersistPropsOptions = StorageProperty;

/**
 * Defines the PersistentStorage interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare class PersistentStorage {
    /**
     * Add property 'key' to AppStorage properties whose current value will be
     * persistent.
     * If AppStorage does not include this property it will be added and initializes
     * with given value
     *
     * @param { string } key - property name
     * @param { T } defaultValue - If AppStorage does not include this property it will be initialized with this value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    static persistProp<T>(key: string, defaultValue: T): void;

    /**
     * Reverse of @see persistProp
     *
     * @param { string } key - no longer persist the property named key
     * @syscap SystemCapability.ArkUI.ArkUI.Full 
     * @atomicservice
     * @since 20
     */
    static deleteProp(key: string): void;

    /**
     * Persist given AppStorage properties with given names.
     * If a property does not exist in AppStorage, add it and initialize it with given value
     * works as @see persistProp for multiple properties.
     *
     * @param { PersistPropsOptions[] } props
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    static persistProps(props: PersistPropsOptions[]): void;

    /**
     * Inform persisted AppStorage property names
     *
     * @returns { Array<string> } array of AppStorage keys
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    static keys(): Array<string>;
}

/**
 * EnvProps object
 *
 * @interface EnvPropsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface EnvPropsOptions {
    /**
     * Property name of Environment variable
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    key: string;

    /**
     * DefaultValue is the default value if cannot get the environment property value
     *
     * @type { number | string | boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full

     * @atomicservice
     * @since 20
     */
    defaultValue: number | string | boolean;
}

/**
 * Defines the Environment interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class Environment {
    /**
     * Creates a new property in AppStorage. The UI framework implementation takes care of updating
     * its value whenever the named device environment property changes. Recommended use is at app startup.
     * The function call fails and returns false if a property with given name exists in AppStorage already.
     * It is wrong API use to access a property with given name in AppStorage before calling Environment.envProp.
     *
     * @param { string } key - environment property
     * @param { T } value - is the default value if cannot get the environment property value
     * @returns { boolean } false if method failed
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static envProp<S>(key: string, value: S): boolean;

    /**
     * Called when multiple property values are added to Environment.
     *
     * @param { EnvPropsOptions[] } props
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static envProps(props: EnvPropsOptions[]): void;

    /**
     * returns an Array<string> of all environment property keys
     *
     * @returns { Array<string> } all environment property keys
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static keys(): Array<string>;
}
