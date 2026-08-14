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
   * 为了解决多并发实例间的数据竞争问题，ArkTS语言基础库引入了异步锁能力。为了开发者的开发效率，AsyncLock对象支持跨并发实例引用传递。
   *
   * 由于ArkTS语言支持异步操作，阻塞锁容易产生死锁问题，因此我们在ArkTS中仅支持异步锁（非阻塞式锁）。
   *
   * 使用异步锁的方法需要标记为async，调用方需要使用await等待调用结果，才能保证时序正确。因此会导致外层调用函数全部标记成async。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  namespace locks {
    /**
     * 这是一个补充类型别名，表示lockAsync函数所有重载中的回调。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    type AsyncLockCallback<T> = () => T | Promise<T>;

    /**
     * 实现异步锁功能的类，允许在锁下执行异步操作。该类使用@Sendable装饰器装饰。
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
       * 查询指定异步锁的信息。
       *
       * @param { string } name - 要查询的锁的名称，仅可查询通过request接口获取的锁（即与request接口入参锁名称保持一致）。
       * @returns { AsyncLockState } 包含状态描述的异步锁状态实例。
       * @throws { BusinessError } 10200030 - The lock does not exist.
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      static query(name: string): AsyncLockState;

      /**
       * 查询所有现有锁的信息。
       *
       * @returns { AsyncLockState[] } 包含锁状态信息的异步锁状态数组。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      static queryAll(): AsyncLockState[];

      /**
       * 在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。若锁已被其他任务持有，当前请求将进入等待队列，待锁释放后按顺序获取锁。回调在调用lockAsync的同一线程中以异步方式执行。
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
       * 在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。若锁已被其他任务持有，当前请求将进入等待队列，待锁释放后按顺序获取锁。回调在调用lockAsync的同一线程中以异步方式执行。
       *
       * @param { AsyncLockCallback<T> } callback - 获取锁后要调用的函数。
       * @param { AsyncLockMode } mode - 锁的操作模式。
       * @returns { Promise<T> } 回调执行后将解决的Promise。
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
       * @returns { Promise<T | U> } 回调执行后解决的Promise，或者在超时情况下被拒绝。
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
       * 共享锁模式。如果指定了此模式，允许​​多个线程或并发任务同时获取锁并执行操作。多用于读操作、无数据竞争的并行任务。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      SHARED = 1,
      /**
       * 独占锁模式。如果指定了此模式，仅允许持有锁的任务执行。它与任何其他锁均不兼容​​，包括其他独占锁和共享锁。多用于写操作、数据更新、状态修改等可能产生竞争的场景。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      EXCLUSIVE = 2
    }

    /**
     * 表示锁操作选项的类。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    class AsyncLockOptions<T> {
      /**
       * 默认构造函数。创建一个所有属性均具有默认值的异步锁配置项实例。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      constructor();

      /**
       * 当前锁是否可用。取值为true，则只有在尚未持有锁定请求时才会授予该锁定请求；为false则表示将等待当前锁被释放。默认为 false。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      isAvailable: boolean;
      /**
       * 用于终止异步操作的对象。当signal.aborted为true时，锁请求将被丢弃；当signal.aborted为false时，请求会继续等待获取锁；当signal为null时，请求正常排队运行。默认为 null。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      signal: AbortSignal<T> | null;
      /**
       * 锁的超时时间，单位为毫秒。若该值大于零，且操作运行时间超过该时间，lockAsync将返回被拒绝的Promise。默认为 0。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      timeout: number;
    }

    /**
     * 用于存储异步锁实例上当前执行的所有锁操作的信息的类。
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
       * 锁的模式。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      mode: AsyncLockMode;
      /**
       * AsyncLockMode调用者的执行上下文标识符。
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
       * 是否终止异步操作。为true时表示终止异步操作，为false时表示异步操作未被终止。
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
     * 实现异步等待功能的类，支持异步等待通知操作。该类使用@Sendable装饰器装饰。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    @Sendable
    class ConditionVariable {
      /**
       * 默认构造函数。创建一个异步等待通知操作的对象。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      constructor();
      /**
       * 使用指定的名称查找或创建（如果未找到）异步等待通知操作的对象。
       *
       * @param { string } name - 按指定名称查找或创建等待通知操作的对象名称，字符串无特别限制。
       * @returns { ConditionVariable } 返回查找到或创建后的异步等待通知操作的实例。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      static request(name: string): ConditionVariable;
      /**
       * 异步调用进入等待中，将在被唤醒后继续执行。使用Promise异步回调。
       *
       * @returns { Promise<void> } 无返回结果的Promise对象。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      wait(): Promise<void>;
      /**
       * 异步调用进入等待中，将在被唤醒或者等待时间结束后继续执行。使用Promise异步回调。
       *
       * @param { number } timeout  - 等待时间，单位为毫秒，正整数。
       * @returns { Promise<void> } 无返回结果的Promise对象。
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      waitFor(timeout: number): Promise<void>;
      /**
       * 通知所有等待的线程。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 22]
       * @atomicservice
       * @since 18 dynamiconly
       */
      notifyAll(): void;
      /**
       * 通知第一个等待的线程。
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
   * 为支持将JSON字符串解析为共享数据，即Sendable支持的数据类型，ArkTS语言基础库新增了ASON工具。ASON工具支持解析JSON字符串并生成共享数据，用于跨并发实例引用传递，同时也支持将共享数据转换为JSON字符串。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamiconly
   */
  namespace ASON {
    /**
     * ISendable是所有Sendable类型（除null和undefined）的父类型。自身没有任何必要的方法和属性。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    type ISendable = lang.ISendable;
    /**
     * 用于转换结果函数的类型。
     *
     * @param { ISendable } this - 所解析的键值对所属的对象。
     * @param { string } key - 属性名。
     * @param { ISendable | undefined | null } value - 所解析的键值对的值。
     * @returns { ISendable | undefined | null } 返回转换结果后的ISendable对象或undefined或null。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    type Transformer = (this: ISendable, key: string,
      value: ISendable | undefined | null) => ISendable | undefined | null;
    /**
     * 用于解析JSON字符串生成ISendable数据或null。
     *
     * @param { string } text - 有效的JSON字符串。
     * @param { Transformer } [reviver] - 转换函数，传入该参数，可以用来修改解析生成的原始值。默认值是undefined。该参数目前仅支持传入undefined值，其他值会被忽略或视为无效。
     * @param {ParseOptions} [options] - 解析的配置，传入该参数，可以用来控制解析生成的结果类型。默认值是undefined。
     * @returns { ISendable | null } 返回ISendable数据或null。入参为null时，返回null。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    function parse(text: string, reviver?: Transformer, options?: ParseOptions): ISendable | null;
    /**
     * 该方法将ArkTS对象数据转换为JSON字符串，额外支持Map和Set相关类型。
     *
     * 从API 18开始参数修改为Object类型，API 18之前参数只支持ISendable类型
     * （除Int8Array、Uint8Array、Int16Array、Uint16Array、Int32Array、Uint32Array、Uint8ClampedArray、Float32Array外）。
     *
     * @param { ISendable | null | undefined } value - 要转换的值。[since 12 - 17]
     * @param { Object | null | undefined } value - ArkTS对象数据。[since 18]
     * @returns { string } 转换后的JSON字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    function stringify(value: Object | null | undefined): string;

    /**
     * 定义处理BigInt的模式。
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
     * 定义解析结果的返回类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    const enum ParseReturnType {
      /**
       * 返回 SendableObject 对象。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      OBJECT = 0,
      /**
       * 返回 SendableMap 对象。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 13 dynamiconly
       */
      MAP = 1
    }
    /**
     * 解析的选项，可定义处理BigInt的模式和解析结果的返回类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 12 dynamiconly
     */
    interface ParseOptions {
      /**
       * 定义处理BigInt的模式。
       *
       * @syscap SystemCapability.Utils.Lang
       * @crossplatform [since 18]
       * @atomicservice
       * @since 12 dynamiconly
       */
      bigIntMode: BigIntMode;
      /**
       * 定义解析结果的返回类型。
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
   * SendableLruCache在缓存空间不足时，会用新数据替换近期最少使用的数据。此设计基于资源访问的考虑：
   * 近期访问的数据可能在不久的将来再次访问，因此最少访问的数据价值最小，应优先移出缓存。
   * SendableLruCache支持Sendable（可跨线程安全共享的）特性，可保存Sendable对象，确保跨线程安全访问。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Sendable
  class SendableLruCache<K, V> {
    /**
     * 当前缓存中值的总数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    readonly length: number;
    /**
     * 默认构造函数用于创建一个新的SendableLruCache实例，默认容量为64。
     *
     * @param { number } capacity - 指示缓存的自定义容量。不传时，默认值为64，最大值不能超过2147483647；小于等于0时会抛出异常。
     *     建议根据实际业务数据量设置合适的容量值，以平衡缓存命中率与内存占用。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    constructor(capacity?: number);
    /**
     * 将缓存容量设置为指定值。如果缓存中值的总数超过指定容量，将淘汰最少使用的键值对。
     *
     * @param { number } newCapacity - 指示要为缓存自定义的容量，最大值不能超过2147483647；小于等于0时会抛出异常。建议根据实际业务数据量设置合适的容量值，以平衡缓存命中率与内存占用。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    updateCapacity(newCapacity: number): void;
    /**
     * 返回键对应的值。如果指定的键不存在于缓存中，将调用createDefault方法；若createDefault返回非undefined值，则将该键值对添加到缓存并返回该值；若createDefault返回undefined，
     * 则返回undefined。
     *
     * @param { K } key - 要查询的键。
     * @returns { V | undefined } 如果指定的键存在于缓存中，则返回与键关联的值；否则调用createDefault方法创建值。
     *     若createDefault返回非undefined值，则将该键值对添加到缓存中，并返回该值；若createDefault返回undefined，则最终返回undefined。
     *     当因添加新条目导致缓存中值的数量超过容量时，将淘汰最少使用的键值对。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    get(key: K): V | undefined;
    /**
     * 将键值对添加到缓存中，并返回与添加的键关联的值。当缓存中值的数量超过容量时，将淘汰最少使用的键值对。
     *
     * @param { K } key - 要添加的键。
     * @param { V } value - 与要添加的键关联的值。
     * @returns { V } 返回与添加的键关联的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    put(key: K, value: V): V;
    /**
     * 从当前缓存中删除指定键及其关联值，返回该键关联的值。若键不存在，则返回undefined。
     *
     * @param { K } key - 要删除的键。
     * @returns { V | undefined } 返回与key关联的值；若key不存在，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    remove(key: K): V | undefined;
    /**
     * 检查当前缓存是否包含指定的键，如果存在，返回true；否则，返回false。
     *
     * @param { K } key - 表示要检查的键。
     * @returns { boolean } true：缓存包含指定的键；false：缓存不包含指定的键。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    contains(key: K): boolean;
    /**
     * 获取调用createDefault方法创建对象的次数。
     *
     * @returns { number } 返回使用createDefault方法创建对象的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getCreateCount(): number;
    /**
     * 获取查询值不匹配的次数。
     *
     * @returns { number } 返回查询值不匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getMissCount(): number;
    /**
     * 获取缓存键值对的淘汰次数。当缓存数量超过容量限制时，最少使用的键值对将被淘汰。
     *
     * @returns { number } 返回缓存键值对淘汰的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getRemoveCount(): number;
    /**
     * 获取查询值匹配成功的次数。
     *
     * @returns { number } 返回查询值匹配成功的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getMatchCount(): number;
    /**
     * 获取将值添加到缓存的次数。
     *
     * @returns { number } 返回向缓存中添加值的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getPutCount(): number;
    /**
     * 获取当前缓存的容量。
     *
     * @returns { number } 返回当前缓存的容量。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    getCapacity(): number;
    /**
     * 从当前缓存清除所有键值对。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    clear(): void;
    /**
     * 检查当前缓存是否为空。
     *
     * @returns { boolean } 返回true表示当前缓存为空，不包含任何键值对；返回false表示当前缓存不为空。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    isEmpty(): boolean;
    /**
     * 返回对象的字符串表示形式，包含缓存最大容量、查询匹配成功次数、查询匹配失败次数及匹配率等信息。
     * 返回字符串格式是：SendableLruCache[ maxSize = (maxSize), hits = (hitCount),
     *                                misses = (missCount), hitRate = (hitRate) ]。
     * (maxSize)表示缓存最大值，
     * (hitCount)表示查询值匹配成功的次数，
     * (missCount)表示查询值匹配失败的次数，
     * (hitRate)表示查询值匹配率。
     *
     * @returns { string } 返回对象的字符串表示形式，包含缓存最大容量、查询匹配成功次数、查询匹配失败次数及匹配率等信息。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    toString(): string;
    /**
     * 获取当前缓存中所有值的列表，按从最近访问到最少访问的顺序排列。
     *
     * @returns { V[] } 返回当前缓存中所有值的列表，按从最近访问到最少访问的顺序排列。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    values(): V[];
    /**
     * 获取当前缓存中所有键，按从最近访问到最少访问的顺序排列。
     *
     * @returns { K[] } 返回当前缓存中所有键的列表，按从最近访问到最少访问的顺序排列。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    keys(): K[];
    /**
     * 允许迭代包含在这个对象中的所有键值对，按从最近访问到最少访问的顺序排列。
     *
     * @returns { IterableIterator<[K, V]> } 返回键值对的迭代器。
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
