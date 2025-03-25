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


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder } from './../stateManagement/runtime'
import { Storage } from './stateManagement'
export interface AppStorage {
    ref<T>(propName: string): AbstractProperty<T> | undefined
    setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>
    Link(propName: string): object
    link<T>(propName: string): SubscribedAbstractProperty<T>
    SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
    setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
    Prop(propName: string): object
    prop<T>(propName: string): SubscribedAbstractProperty<T>
    SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>
    setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
    Has(propName: string): boolean
    has(propName: string): boolean
    Get<T>(propName: string): T | undefined
    get<T>(propName: string): T | undefined
    Set<T>(propName: string, newValue: T): boolean
    set<T>(propName: string, newValue: T): boolean
    SetOrCreate<T>(propName: string, newValue: T): void
    setOrCreate<T>(propName: string, newValue: T): void
    Delete(propName: string): boolean
    delete(propName: string): boolean
    Keys(): Array<string>
    keys(): Array<string>
    staticClear(): boolean
    Clear(): boolean
    clear(): boolean
    IsMutable(propName: string): boolean
    Size(): number
    size(): number
}
export interface AbstractProperty<T> {
    get(): T
    set(newValue: T): void
    info(): string
}
export interface SubscribedAbstractProperty<T> {
    subscribers_: Array<number>;
    id(): number
    info(): string
    get(): T
    set(newValue: T): void
    createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>
    createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>
    unlinkSuscriber(subscriberId: number): void
    notifyHasChanged(newValue: T): void
    notifyPropertyRead(): void
    numberOfSubscrbers(): number
    aboutToBeDeleted(): void
}
export interface IPropertySubscriber {
    id(): number
    aboutToBeDeleted(owningView?: IPropertySubscriber): void
}
export interface SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T> {
    aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void
    hasChanged(newValue: T): void
    get(): T
    set(newValue: T): void
}
export interface SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T> {
    aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void
    hasChanged(newValue: T): void
    get(): T
    set(newValue: T): void
}
export interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
    hasChanged(newValue: T): void
}
export interface SubscribaleAbstract {
    notifyPropertyHasChanged(propName: string, newValue: object): void
    addOwningProperty(subscriber: IPropertySubscriber): void
    removeOwningProperty(property: IPropertySubscriber): void
    removeOwningPropertyById(subscriberId: number): void
}
export interface EnvPropsOptions {
    key: string;
    defaultValue: number | string | boolean;
}
export interface Literal_String_key_Any_defaultValue {
    key: string;
    defaultValue: object;
}
export interface Environment {
    EnvProp<S>(key: string, value: S): boolean
    envProp<S>(key: string, value: S): boolean
    EnvProps(props: Array<Literal_String_key_Any_defaultValue>): void
    envProps(props: Array<EnvPropsOptions>): void
    Keys(): Array<string>
    keys(): Array<string>
}
export interface PersistPropsOptions {
    key: string;
    defaultValue: number | string | boolean | Object;
}
export interface PersistentStorage {
    PersistProp<T>(key: string, defaultValue: T): void
    persistProp<T>(key: string, defaultValue: T): void
    DeleteProp(key: string): void
    deleteProp(key: string): void
    PersistProps(properties: Array<Literal_String_key_Any_defaultValue>): void
    persistProps(props: Array<PersistPropsOptions>): void
    Keys(): Array<string>
    keys(): Array<string>
}
export interface LocalStorage {
    GetShared(): LocalStorage
    getShared(): LocalStorage
    ref<T>(propName: string): AbstractProperty<T> | undefined
    setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>
    has(propName: string): boolean
    keys(): Array<string>
    size(): number
    get<T>(propName: string): T | undefined
    set<T>(propName: string, newValue: T): boolean
    setOrCreate<T>(propName: string, newValue: T): boolean
    link<T>(propName: string): SubscribedAbstractProperty<T>
    setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
    prop<S>(propName: string): SubscribedAbstractProperty<S>
    setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>
    delete(propName: string): boolean
    clear(): boolean
}
