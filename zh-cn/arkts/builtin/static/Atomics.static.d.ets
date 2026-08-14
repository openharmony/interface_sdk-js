'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 定义ArkTS的原子类型
 * @kit ArkTS
 */

/**
 * ArkTS-Sta提供了一组实例化的原子类型，用于直接对单个共享值或对象引用执行原子操作。
 * 当前支持的实例化原子类型包括：
 * AtomicReference<T>：原子引用类型。
 * AtomicInt：原子整数类型。
 * AtomicLong：原子长整数类型。
 * AtomicShort：原子短整数类型。
 * AtomicByte：原子字节类型。
 * AtomicFloat：原子单精度浮点类型。
 * AtomicDouble：原子双精度浮点类型。
 * AtomicChar：原子字符类型。
 * AtomicBoolean：原子布尔类型。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */

/**
 * 提供原子引用包装器，用于安全地并发访问引用值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicReference<T> {
  /**
   * 构造一个AtomicReference实例，并使用ref作为初始引用值。
   *
   * @param { T } ref - 初始引用值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(ref: T);

  /**
   * 原子读取当前引用值。
   *
   * @returns { T } 当前保存的引用值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): T;

  /**
   * 原子写入新的引用值。
   *
   * @param { T } ref - 要写入的新引用值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(ref: T): void;

  /**
   * 原子写入新的引用值，并返回更新前的旧引用值。
   *
   * @param { T } ref - 要写入的新引用值。
   * @returns { T } 更新前的旧引用值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(ref: T): T;

  /**
   * 如果当前引用值等于expected，则将其替换为ref；如果不相等，则不做修改。返回修改前的旧引用值。
   *
   * @param { T } expected - 预期的当前引用值。
   * @param { T } ref - 匹配成功时要写入的新引用值。
   * @returns { T } 修改前的旧引用值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: T, ref: T): T;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问int值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicInt {
  /**
   * 构造一个AtomicInt实例，并使用val作为初始值。
   *
   * @param { int } val - 初始值。
   *     <br>该值应为整数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: int);

  /**
   * 原子读取当前值。
   *
   * @returns { int } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): int;

  /**
   * 原子写入新值。
   *
   * @param { int } val - 要写入的新值。
   *     <br>该值应为整数。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: int): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { int } val - 要写入的新值。
   *     <br>该值应为整数。
   * @returns { int } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: int): int;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { int } expected - 预期的当前值。
   *     <br>该值应为整数。
   * @param { int } val - 匹配成功时要写入的新值。
   *     <br>该值应为整数。
   * @returns { int } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: int, val: int): int;

  /**
   * 原子将当前值加上val，并返回加法执行前的旧值。
   *
   * @param { int } val - 执行加法运算的操作数。
   *     <br>该值应为整数。
   * @returns { int } 加法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: int): int;

  /**
   * 原子将当前值减去val，并返回减法执行前的旧值。
   *
   * @param { int } val - 执行减法运算的操作数。
   *     <br>该值应为整数。
   * @returns { int } 减法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: int): int;

  /**
   * 原子将当前值与val执行按位与运算，并返回运算前的旧值。
   *
   * @param { int } val - 执行按位与运算的操作数。
   *     <br>该值应为整数。
   * @returns { int } 按位与运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: int): int;

  /**
   * 原子将当前值与val执行按位或运算，并返回运算前的旧值。
   *
   * @param { int } val - 执行按位或运算的操作数。
   *     <br>该值应为整数。
   * @returns { int } 按位或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: int): int;

  /**
   * 原子将当前值与val执行按位异或运算，并返回运算前的旧值。
   *
   * @param { int } val - 执行按位异或运算的操作数。
   *     <br>该值应为整数。
   * @returns { int } 按位异或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: int): int;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问long值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicLong {
  /**
   * 构造一个AtomicLong实例，并使用val作为初始值。
   *
   * @param { long } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: long);

  /**
   * 原子读取当前值。
   *
   * @returns { long } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): long;

  /**
   * 原子写入新值。
   *
   * @param { long } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: long): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { long } val - 要写入的新值。
   * @returns { long } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: long): long;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { long } expected - 预期的当前值。
   * @param { long } val - 匹配成功时要写入的新值。
   * @returns { long } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: long, val: long): long;

  /**
   * 原子将当前值加上val，并返回加法执行前的旧值。
   *
   * @param { long } val - 执行加法运算的操作数。
   * @returns { long } 加法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: long): long;

  /**
   * 原子将当前值减去val，并返回减法执行前的旧值。
   *
   * @param { long } val - 执行减法运算的操作数。
   * @returns { long } 减法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: long): long;

  /**
   * 原子将当前值与val执行按位与运算，并返回运算前的旧值。
   *
   * @param { long } val - 执行按位与运算的操作数。
   * @returns { long } 按位与运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: long): long;

  /**
   * 原子将当前值与val执行按位或运算，并返回运算前的旧值。
   *
   * @param { long } val - 执行按位或运算的操作数。
   * @returns { long } 按位或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: long): long;

  /**
   * 原子将当前值与val执行按位异或运算，并返回运算前的旧值。
   *
   * @param { long } val - 执行按位异或运算的操作数。
   * @returns { long } 按位异或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: long): long;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问short值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicShort {
  /**
   * 构造一个AtomicShort实例，并使用val作为初始值。
   *
   * @param { short } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: short);

  /**
   * 原子读取当前值。
   *
   * @returns { short } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): short;

  /**
   * 原子写入新值。
   *
   * @param { short } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: short): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { short } val - 要写入的新值。
   * @returns { short } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: short): short;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { short } expected - 预期的当前值。
   * @param { short } val - 匹配成功时要写入的新值。
   * @returns { short } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: short, val: short): short;

  /**
   * 原子将当前值加上val，并返回加法执行前的旧值。
   *
   * @param { short } val - 执行加法运算的操作数。
   * @returns { short } 加法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: short): short;

  /**
   * 原子将当前值减去val，并返回减法执行前的旧值。
   *
   * @param { short } val - 执行减法运算的操作数。
   * @returns { short } 减法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: short): short;

  /**
   * 原子将当前值与val执行按位与运算，并返回运算前的旧值。
   *
   * @param { short } val - 执行按位与运算的操作数。
   * @returns { short } 按位与运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: short): short;

  /**
   * 原子将当前值与val执行按位或运算，并返回运算前的旧值。
   *
   * @param { short } val - 执行按位或运算的操作数。
   * @returns { short } 按位或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: short): short;

  /**
   * 原子将当前值与val执行按位异或运算，并返回运算前的旧值。
   *
   * @param { short } val - 执行按位异或运算的操作数。
   * @returns { short } 按位异或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: short): short;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问byte值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicByte {
  /**
   * 构造一个AtomicByte实例，并使用val作为初始值。
   *
   * @param { byte } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: byte);

  /**
   * 原子读取当前值。
   *
   * @returns { byte } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): byte;

  /**
   * 原子写入新值。
   *
   * @param { byte } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: byte): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { byte } val - 要写入的新值。
   * @returns { byte } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: byte): byte;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { byte } expected - 预期的当前值。
   * @param { byte } val - 匹配成功时要写入的新值。
   * @returns { byte } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: byte, val: byte): byte;

  /**
   * 原子将当前值加上val，并返回加法执行前的旧值。
   *
   * @param { byte } val - 执行加法运算的操作数。
   * @returns { byte } 加法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: byte): byte;

  /**
   * 原子将当前值减去val，并返回减法执行前的旧值。
   *
   * @param { byte } val - 执行减法运算的操作数。
   * @returns { byte } 减法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: byte): byte;

  /**
   * 原子将当前值与val执行按位与运算，并返回运算前的旧值。
   *
   * @param { byte } val - 执行按位与运算的操作数。
   * @returns { byte } 按位与运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: byte): byte;

  /**
   * 原子将当前值与val执行按位或运算，并返回运算前的旧值。
   *
   * @param { byte } val - 执行按位或运算的操作数。
   * @returns { byte } 按位或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: byte): byte;

  /**
   * 原子将当前值与val执行按位异或运算，并返回运算前的旧值。
   *
   * @param { byte } val - 执行按位异或运算的操作数。
   * @returns { byte } 按位异或运算前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: byte): byte;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问float值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicFloat {
  /**
   * 构造一个AtomicFloat实例，并使用val作为初始值。
   *
   * @param { float } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: float);

  /**
   * 原子读取当前值。
   *
   * @returns { float } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): float;

  /**
   * 原子写入新值。
   *
   * @param { float } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: float): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { float } val - 要写入的新值。
   * @returns { float } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: float): float;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { float } expected - 预期的当前值。
   * @param { float } val - 匹配成功时要写入的新值。
   * @returns { float } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: float, val: float): float;

  /**
   * 原子将当前值加上val，并返回加法执行前的旧值。
   *
   * @param { float } val - 执行加法运算的操作数。
   * @returns { float } 加法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: float): float;

  /**
   * 原子将当前值减去val，并返回减法执行前的旧值。
   *
   * @param { float } val - 执行减法运算的操作数。
   * @returns { float } 减法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: float): float;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问double值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicDouble {
  /**
   * 构造一个AtomicDouble实例，并使用val作为初始值。
   *
   * @param { double } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: double);

  /**
   * 原子读取当前值。
   *
   * @returns { double } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): double;

  /**
   * 原子写入新值。
   *
   * @param { double } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: double): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { double } val - 要写入的新值。
   * @returns { double } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: double): double;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { double } expected - 预期的当前值。
   * @param { double } val - 匹配成功时要写入的新值。
   * @returns { double } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: double, val: double): double;

  /**
   * 原子将当前值加上val，并返回加法执行前的旧值。
   *
   * @param { double } val - 执行加法运算的操作数。
   * @returns { double } 加法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: double): double;

  /**
   * 原子将当前值减去val，并返回减法执行前的旧值。
   *
   * @param { double } val - 执行减法运算的操作数。
   * @returns { double } 减法执行前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: double): double;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问char值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicChar {
  /**
   * 构造一个AtomicChar实例，并使用val作为初始值。
   *
   * @param { char } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: char);

  /**
   * 原子读取当前值。
   *
   * @returns { char } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): char;

  /**
   * 原子写入新值。
   *
   * @param { char } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: char): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { char } val - 要写入的新值。
   * @returns { char } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: char): char;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { char } expected - 预期的当前值。
   * @param { char } val - 匹配成功时要写入的新值。
   * @returns { char } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: char, val: char): char;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * 提供原子包装器，用于安全地并发访问boolean值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicBoolean {
  /**
   * 构造一个AtomicBoolean实例，并使用val作为初始值。
   *
   * @param { boolean } val - 初始值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: boolean);

  /**
   * 原子读取当前值。
   *
   * @returns { boolean } 当前保存的值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): boolean;

  /**
   * 原子写入新值。
   *
   * @param { boolean } val - 要写入的新值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: boolean): void;

  /**
   * 原子写入新值，并返回更新前的旧值。
   *
   * @param { boolean } val - 要写入的新值。
   * @returns { boolean } 更新前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: boolean): boolean;

  /**
   * 如果当前值等于expected，则将其替换为val；如果不相等，则不做修改。返回修改前的旧值。
   *
   * @param { boolean } expected - 预期的当前值。
   * @param { boolean } val - 匹配成功时要写入的新值。
   * @returns { boolean } 修改前的旧值。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: boolean, val: boolean): boolean;

  /**
   * 判断该类型的原子操作是否为无锁实现。
   *
   * @returns { boolean } true表示无锁实现，false表示内部可能使用阻塞式同步机制。
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}
