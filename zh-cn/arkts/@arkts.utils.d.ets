/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @file Defines the utils for ArkTS
 * @kit ArkTS
 */

import lang from './@arkts.lang';

/**
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace utils {
  /**
   * 异步锁。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  namespace locks {
    /**
     * asyncLock操作的回调类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    type AsyncLockCallback<T> = () => T | Promise<T>;

    /**
     * 在锁下执行异步操作的类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    @Sendable
    class AsyncLock {
      /**
       * 默认构造函数。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      constructor();
      /**
       * 使用指定的名称查找或创建AsyncLock实例。
       *
       * @param { string } name - 要查找或创建的锁的名称。
       * @returns { AsyncLock } 返回AsyncLock实例。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      static request(name: string): AsyncLock;

      /**
       * 查询指定锁的信息。
       *
       * @param { string } name - 锁的名称。
       * @returns { AsyncLockState } 返回AsyncLockState实例。
       * @throws { BusinessError } 10200030 - The lock does not exist.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      static query(name: string): AsyncLockState;

      /**
       * 查询所有锁的信息。
       *
       * @returns { AsyncLockState[] } 返回AsyncLockState数组。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      static queryAll(): AsyncLockState[];

      /**
       * 在获取的独占锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用lockAsync的同一线程中以异步方式执行。
       *
       * @param { AsyncLockCallback<T> } callback - 获取锁后要调用的函数。
       * @returns { Promise<T> } 回调执行后将解决的Promise。
       * @throws { BusinessError } 10200030 - The lock does not exist.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      lockAsync<T>(callback: AsyncLockCallback<T>): Promise<T>;

      /**
       * 在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用lockAsync的同一线程中以异步方式执行。
       *
       * @param { AsyncLockCallback<T> } callback - 获取锁后要调用的函数。
       * @param { AsyncLockMode } mode - 锁的操作模式。
       * @returns { Promise<T> } 回调执行后将解决或拒绝的Promise。
       * @throws { BusinessError } 10200030 - The lock does not exist.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      lockAsync<T>(callback: AsyncLockCallback<T>, mode: AsyncLockMode): Promise<T>;

      /**
       * 在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用lockAsync的同一线程中以异步方式执行。
       * 在{@link AsyncLockOptions}中可以提供一个可选的超时值。在这种情况下，如果超时前未能获取锁，lockAsync将返回被拒绝的Promise并带上一个BusinessError实例。
       * 这种情况下，错误信息将包含持有的锁和等待的锁的信息以及可能的死锁警告。
       *
       * @param { AsyncLockCallback<T> } callback - 获取锁后要调用的函数。
       * @param { AsyncLockMode } mode - 锁的操作模式。
       * @param { AsyncLockOptions<U> } options - 锁的操作选项。
       * @returns { Promise<T | U> } 回调执行后将解决的Promise，或者在超时情况下被拒绝。
       * @throws { BusinessError } 10200030 - The lock does not exist.
       * @throws { BusinessError } 10200031 - Timeout exceeded.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      lockAsync<T, U>(callback: AsyncLockCallback<T>, mode: AsyncLockMode,
        options: AsyncLockOptions<U>): Promise<T | U>;

      /**
       * 锁的名称。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      readonly name: string;
    }

    /**
     * 锁操作对应的模式枚举。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    enum AsyncLockMode {
      /**
       * 共享锁操作。如果指定了此模式，允许操作重入。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      SHARED = 1,
      /**
       * 独占锁操作。如果指定了此模式，只有在独占获取锁时才执行操作。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      EXCLUSIVE = 2
    }

    /**
     * 锁操作的选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    class AsyncLockOptions<T> {
      /**
       * 默认构造函数。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      constructor();

      /**
       * 如果值为true且lockAsync无法立即获取锁，则操作将被取消。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      isAvailable: boolean;
      /**
       * 用于终止异步操作的对象。如果signal.aborted为true，回调将不会被调用。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      signal: AbortSignal<T> | null;
      /**
       * 锁操作的超时时间，单位为毫秒。如果该值大于零，当超时到达时，lockAsync将拒绝返回的Promise。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      timeout: number;
    }

    /**
     * AsyncLock实例上所有锁操作的信息。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    class AsyncLockState {
      /**
       * 持有的锁信息。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      held: AsyncLockInfo[];
      /**
       * 等待中的锁信息。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      pending: AsyncLockInfo[];
    }

    /**
     * 关于锁的信息。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    class AsyncLockInfo {
      /**
       * 锁的名称。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      name: string;
      /**
       * 锁操作的模式。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      mode: AsyncLockMode;
      /**
       * lockAsync调用者的执行上下文标识符。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      contextId: number;
    }

    /**
     * 用于终止异步操作的对象。该类的实例必须在其创建的同一线程中访问。从其他线程访问此类的字段会导致未定义的行为。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    class AbortSignal<T> {
      /**
       * 设置为true以终止操作。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      aborted: boolean;

      /**
       * 终止的原因。此值将用于拒绝lockAsync返回的Promise。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      reason: T;
    }

    /**
     * 用于线程同步的对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    @Sendable
    class ConditionVariable {
      /**
       * 默认构造函数。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      constructor();
      /**
       * 使用指定的名称查找或创建ConditionVariable实例。
       *
       * @param { string } name - 要查找或创建的ConditionVariable的名称。
       * @returns { ConditionVariable } 返回ConditionVariable实例。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      static request(name: string): ConditionVariable;
      /**
       * 等待ConditionVariable被通知。
       *
       * @returns { Promise<void> } 一旦ConditionVariable被通知，Promise将被解决。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      wait(): Promise<void>;
      /**
       * 等待ConditionVariable被通知，或直到达到指定的时间限制。
       *
       * @param { number } timeout  - 最长等待时间。
       *     该值应为整数。
       *     <br>单位：ms。
       * @returns { Promise<void> } 一旦ConditionVariable被通知或达到指定时间限制，Promise将被解决。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      waitFor(timeout: number): Promise<void>;
      /**
       * 通知所有等待的Promise。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      notifyAll(): void;
      /**
       * 通知一个等待的Promise。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      notifyOne(): void;
    }
  }
  /**
   * ArkTS JSON工具。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  namespace ASON {
    /**
     * 为方便起见，重新定义ISendable。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    type ISendable = lang.ISendable;
    /**
     * 转换结果函数的类型。
     *
     * @param { ISendable } this - 所解析的键值对所属的ISendable对象。
     * @param { string } key - 属性名。
     * @param { ISendable | undefined | null } value - 所解析的键值对的值。
     * @returns { ISendable | undefined | null } 返回修改后的ISendable对象或undefined或null。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    type Transformer = (this: ISendable, key: string,
      value: ISendable | undefined | null) => ISendable | undefined | null;
    /**
     * 将JavaScript对象表示法（JSON）字符串转换为ArkTS值。
     *
     * @param { string } text - 有效的JSON字符串。
     * @param { Transformer } [reviver] - 转换结果的函数。
     * @param {ParseOptions} [options] - 解析的配置。
     * @returns { ISendable | null } 返回ArkTS值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    function parse(text: string, reviver?: Transformer, options?: ParseOptions): ISendable | null;
    /**
     * 将ArkTS值转换为JavaScript对象表示法（JSON）字符串。
     * 额外支持Map和Set。
     *
     * @param { ISendable | null | undefined } value - 要转换的值。[since 12 - 17]
     * @param { Object | null | undefined } value - 要转换的值。[since 18]
     * @returns { string } 该值的JSON字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    function stringify(value: Object | null | undefined): string;

    /**
     * 定义处理BigInt模式的枚举。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    const enum BigIntMode {
      /**
       * 不支持BigInt。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      DEFAULT = 0,
      /**
       * 当整数小于-(2^53-1)或大于(2^53-1)时，解析为BigInt。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      PARSE_AS_BIGINT = 1,
      /**
       * 所有整数都解析为BigInt。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      ALWAYS_PARSE_AS_BIGINT = 2
    }

    /**
     * 解析结果的返回类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    const enum ParseReturnType {
      /**
       * 返回类型为对象。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      OBJECT = 0,
      /**
       * 返回类型为map。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 13 dynamiconly
       */
      MAP = 1
    }
    /**
     * 解析的选项。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    interface ParseOptions {
      /**
       * 定义处理BigInt模式的枚举。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      bigIntMode: BigIntMode;
      /**
       * 解析结果的返回类型。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      parseReturnType: ParseReturnType;
    }
  }

  /**
   * 用于存储近期最少使用的Sendable对象的缓冲区。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Sendable
  class SendableLruCache<K, V> {
    /**
     * SendableLruCache的长度。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    readonly length: number;
    /**
     * 默认构造函数。
     *
     * @param { number } capacity - SendableLruCache的容量。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    constructor(capacity?: number);
    /**
     * 更新SendableLruCache的容量。
     *
     * @param { number } newCapacity - SendableLruCache的新容量。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    updateCapacity(newCapacity: number): void;
    /**
     * 获取SendableLruCache中与指定键关联的值。
     *
     * @param { K } key - 要查询的键。
     * @returns { V | undefined } 如果指定的键存在于缓冲区中，则返回与键关联的值；
     *     否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    get(key: K): V | undefined;
    /**
     * 将键值对添加到SendableLruCache中。
     *
     * @param { K } key - 要添加的键。
     * @param { V } value - 与要添加的键关联的值。
     * @returns { V } 返回与添加的键关联的值，或如果键已存在则返回原始值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    put(key: K, value: V): V;
    /**
     * 从SendableLruCache中移除指定的键及其关联值。
     *
     * @param { K } key - 要删除的键。
     * @returns { V | undefined } 被删除的值或undefined。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    remove(key: K): V | undefined;
    /**
     * 检查SendableLruCache中是否包含指定的键。如果存在，返回true；否则返回false。
     *
     * @param { K } key - 要检查的键。
     * @returns { boolean } 检查的结果。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    contains(key: K): boolean;
    /**
     * 获取SendableLruCache中createDefault的调用次数。
     *
     * @returns { number } createDefault的调用次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getCreateCount(): number;
    /**
     * 获取SendableLruCache中查询值不匹配的次数。
     *
     * @returns { number } 查询值不匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getMissCount(): number;
    /**
     * 获取SendableLruCache中值被移除的次数。
     *
     * @returns { number } 值被移除的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getRemoveCount(): number;
    /**
     * 获取SendableLruCache中查询值匹配的次数。
     *
     * @returns { number } 查询值匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getMatchCount(): number;
    /**
     * 获取将值添加到SendableLruCache的次数。
     *
     * @returns { number } 值被添加的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getPutCount(): number;
    /**
     * 获取SendableLruCache的容量。
     *
     * @returns { number } SendableLruCache的容量。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getCapacity(): number;
    /**
     * 清除SendableLruCache中的所有键值对。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    clear(): void;
    /**
     * 检查SendableLruCache是否为空。
     *
     * @returns { boolean } 如果SendableLruCache为空则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    isEmpty(): boolean;
    /**
     * 返回对象的字符串表示形式。
     * 返回字符串格式是：SendableLruCache[ maxSize = (maxSize), hits = (hitCount),
     *                                misses = (missCount), hitRate = (hitRate) ]。
     * (maxSize)表示缓存区最大值，
     * (hitCount)表示查询值匹配成功的次数，
     * (missCount)表示查询值匹配失败的次数，
     * (hitRate)表示查询值匹配率。
     *
     * @returns { string } 包含所有元素的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 返回SendableLruCache中所有值的列表。
     *
     * @returns { V[] } 所有值的数组。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    values(): V[];
    /**
     * 返回SendableLruCache中所有键的列表。
     *
     * @returns { K[] } 所有键的数组。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    keys(): K[];
    /**
     * 返回SendableLruCache中每个元素的键值对的可迭代对象。
     *
     * @returns { IterableIterator<[K, V]> } 新的可迭代迭代器对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    entries(): IterableIterator<[K, V]>;
  }

  /**
   * 检查ArkTS值是否为Sendable。
   *
   * @param { Object | null | undefined } value - 要检查的值。
   * @returns { boolean } 如果值为Sendable则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function isSendable(value: Object | null | undefined): boolean;
}

export default utils;