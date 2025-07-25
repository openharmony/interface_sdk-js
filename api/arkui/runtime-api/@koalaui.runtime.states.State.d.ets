/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { int32, KoalaCallsiteKey, uint32 } from '@koalaui.runtime.common'
import { Disposable } from '@koalaui.runtime.states.Disposable'
import { IncrementalNode } from '@koalaui.runtime.tree.IncrementalNode'
export declare const CONTEXT_ROOT_SCOPE: string
export declare const CONTEXT_ROOT_NODE: string
export type Equivalent<Value> = (oldV: Value, newV: Value) => boolean
export declare function createStateManager(): StateManager
export interface StateManager extends StateContext {
    syncChanges(): void
    isUpdateNeeded(): boolean
    updateSnapshot(): uint32
    updatableNode<Node extends IncrementalNode>(
        node: Node,
        update: (context: StateContext) => void,
        cleanup?: () => void): ComputableState<Node>
    scheduleCallback(callback: () => void): void
    callCallbacks(): void
    frozen: boolean
    reset(): void
}
export interface State<Value> {
    readonly modified: boolean
    readonly value: Value
}
export interface MutableState<Value> extends Disposable, State<Value> {
    value: Value
}
export interface ArrayState<Item> extends State<ReadonlyArray<Item>> {
    length: number
    at(index: number): Item
    get(index: number): Item
    set(index: number, item: Item): void
    copyWithin(target: number, start: number, end?: number): Array<Item>
    fill(value: Item, start?: number, end?: number): Array<Item>
    pop(): Item | undefined
    push(...items: Item[]): number
    reverse(): Array<Item>
    shift(): Item | undefined
    sort(comparator?: (a: Item, b: Item) => number): Array<Item>
    splice(start: number, deleteCount: number | undefined, ...items: Item[]): Array<Item>
    unshift(...items: Item[]): number
}
export interface ComputableState<Value> extends Disposable, State<Value> {
    readonly recomputeNeeded: boolean
}
export interface StateContext {
    readonly node: IncrementalNode | undefined
    attach<Node extends IncrementalNode>(
        id: KoalaCallsiteKey, create: () => Node, update: () => void, cleanup?: () => void): void
    compute<Value>(
        id: KoalaCallsiteKey,
        compute: () => Value,
        cleanup?: (value: Value | undefined) => void,
        once?: boolean): Value
    computableState<Value>(
        compute: (context: StateContext) => Value,
        cleanup?: (context: StateContext,
        value: Value | undefined) => void): ComputableState<Value>
    mutableState<Value>(
        initial: Value,
        global?: boolean,
        equivalent?: Equivalent<Value>,
        tracker?: ValueTracker<Value>): MutableState<Value>
    arrayState<Value>(
        initial?: ReadonlyArray<Value>,
        global?: boolean,
        equivalent?: Equivalent<Value>): ArrayState<Value>
    namedState<Value>(
        name: string, create: () => Value,
        global?: boolean,
        equivalent?: Equivalent<Value>,
        tracker?: ValueTracker<Value>): MutableState<Value>
    stateBy<Value>(name: string, global?: boolean): MutableState<Value> | undefined
    valueBy<Value>(name: string, global?: boolean): Value
    scope<Value>(
        id: KoalaCallsiteKey,
        paramCount?: int32,
        create?: () => IncrementalNode,
        compute?: () => Value,
        cleanup?: (value: Value | undefined) => void,
        once?: boolean,
        reuseKey?: string
    ): InternalScope<Value>
    controlledScope(id: KoalaCallsiteKey, invalidate: () => void): ControlledScope
}
export interface ValueTracker<Value> {
    onCreate(value: Value): Value
    onUpdate(value: Value): Value
}
export interface InternalScope<Value> {
    readonly unchanged: boolean
    readonly cached: Value
    recache(newValue?: Value): Value
    param<V>(index: int32, value: V, equivalent?: Equivalent<V>, name?: string, contextLocal?: boolean): State<V>
}
export interface ControlledScope {
    enter(): void
    leave(): void
}
