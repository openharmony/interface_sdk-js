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

export declare class LocalStorage {
    public static getShared(): LocalStorage | undefined;
    public link(propName: string): LinkDecoratedVariable<Object> | undefined;
    public setAndLink(propName: string, defaultValue: Object): LinkDecoratedVariable<Object>;
    public prop(propName: string): PropDecoratedVariable<Object> | undefined;
    public setAndProp(propName: string, defaultValue: Object): PropDecoratedVariable<Object>;
    public has(propName: string): boolean;
    public get<T>(key: string): T | undefined;
    public set<T>(key: string, newValue: T): boolean;
    public setOrCreate<T>(key: string, newValue: T): boolean;
    public keys(): IterableIterator<string>;
    public size(): number;
    public delete(propName: string): boolean;
    public clear(): boolean;
}