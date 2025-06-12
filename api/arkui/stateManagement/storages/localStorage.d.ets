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

import { AbstractProperty, SubscribedAbstractProperty } from '../base/decoratorBase';

export declare class LocalStorage {
    public constructor(initializingProperties?: Object);
    public static getShared(): LocalStorage | undefined;
    public ref<T>(propName: string): AbstractProperty<T> | undefined;
    public setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;
    public link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;
    public setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;
    public prop<T>(propName: string): SubscribedAbstractProperty<T> | undefined;
    public setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;
    public has(propName: string): boolean;
    public get<T>(propName: string): T | undefined;
    public set<T>(propName: string, newValue: T): boolean;
    public setOrCreate<T>(propName: string, newValue: T): boolean;
    public keys(): IterableIterator<string>;
    public size(): number;
    public delete(propName: string): boolean;
    public clear(): boolean;
}