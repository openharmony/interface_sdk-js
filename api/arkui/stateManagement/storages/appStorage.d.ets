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

import { LinkDecoratedVariable } from '../decorators/decoratorLink';
import { PropDecoratedVariable } from '../decorators/decoratorProp';
import { LocalStorage } from './localStorage';

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