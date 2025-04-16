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

import { LocalStorage } from './localStorage';
import { AbstractProperty, SubscribedAbstractProperty } from '../base/decoratorBase';

export declare class AppStorage extends LocalStorage {
    public static ref<T>(propName: string): AbstractProperty<T> | undefined;
    public static setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;
    public static link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;
    public static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;
    public static prop<T>(propName: string): SubscribedAbstractProperty<T> | undefined;
    public static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;
    public static has(propName: string): boolean;
    public static get<T>(propName: string): T | undefined;
    public static set<T>(propName: string, newValue: T): boolean;
    public static setOrCreate<T>(propName: string, newValue: T): void;
    public static keys(): IterableIterator<string>;
    public static size(): number;
    public static delete(propName: string): boolean;
    public static clear(): boolean;
}