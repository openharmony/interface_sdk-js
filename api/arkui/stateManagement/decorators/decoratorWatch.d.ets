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
import { int32 } from '@koalaui.runtime.common';

export type WatchFuncType = ((propertyName: string) => void);

export type WatchIdType = int32;

export declare class WatchFunc {
    public constructor(func: WatchFuncType)
}

export declare interface IWatchTrigger {
    addWatchSubscriber(watchId: WatchIdType): void
    removeWatchSubscriber(watchId: WatchIdType): boolean
    executeOnSubscribingWatches(propertyName: string): void
}

export declare class SubscribedWatches implements IWatchTrigger {
    public addWatchSubscriber(id: WatchIdType): void
    public removeWatchSubscriber(id: WatchIdType): boolean
    public executeOnSubscribingWatches(propertyName: string): void
}