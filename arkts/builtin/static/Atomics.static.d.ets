'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit ArkTS
 */

/**
 * Provides an atomic reference wrapper for safe concurrent access to a reference value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicReference<T> {
  /**
   * Constructs a new AtomicReference with the provided initial value
   *
   * @param { T } ref - the initial reference value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(ref: T);

  /**
   * Atomically loads the current reference value
   *
   * @returns { T } the current reference value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): T;

  /**
   * Atomically stores a new reference value
   *
   * @param { T } ref - the new reference value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(ref: T): void;

  /**
   * Atomically exchanges the current reference value with a new value
   *
   * @param { T } ref - the new reference value to exchange with.
   * @returns { T } the previous reference value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(ref: T): T;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { T } expected - the expected current value.
   * @param { T } ref - the new reference value to store if the comparison succeeds.
   * @returns { T } the previous reference value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: T, ref: T): T;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to an int value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicInt {
  /**
   * Constructs a new AtomicInt with the provided initial value
   *
   * @param { int } val - the initial value.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: int);

  /**
   * Atomically loads the current value
   *
   * @returns { int } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): int;

  /**
   * Atomically stores a new value
   *
   * @param { int } val - the new value to store.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: int): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { int } val - the new value to exchange with.
   *     <br>The value should be an integer.
   * @returns { int } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: int): int;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { int } expected - the expected current value.
   *     <br>The value should be an integer.
   * @param { int } val - the new value to store if the comparison succeeds.
   *     <br>The value should be an integer.
   * @returns { int } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: int, val: int): int;

  /**
   * Atomically adds a value to the current value and returns the previous value
   *
   * @param { int } val - the value to add.
   *     <br>The value should be an integer.
   * @returns { int } the previous value before the addition
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: int): int;

  /**
   * Atomically subtracts a value from the current value and returns the previous value
   *
   * @param { int } val - the value to subtract.
   *     <br>The value should be an integer.
   * @returns { int } the previous value before the subtraction
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: int): int;

  /**
   * Atomically performs a bitwise AND operation and returns the previous value
   *
   * @param { int } val - the value to AND with.
   *     <br>The value should be an integer.
   * @returns { int } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: int): int;

  /**
   * Atomically performs a bitwise OR operation and returns the previous value
   *
   * @param { int } val - the value to OR with.
   *     <br>The value should be an integer.
   * @returns { int } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: int): int;

  /**
   * Atomically performs a bitwise XOR operation and returns the previous value
   *
   * @param { int } val - the value to XOR with.
   *     <br>The value should be an integer.
   * @returns { int } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: int): int;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a long value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicLong {
  /**
   * Constructs a new AtomicLong with the provided initial value
   *
   * @param { long } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: long);

  /**
   * Atomically loads the current value
   *
   * @returns { long } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): long;

  /**
   * Atomically stores a new value
   *
   * @param { long } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: long): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { long } val - the new value to exchange with.
   * @returns { long } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: long): long;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { long } expected - the expected current value.
   * @param { long } val - the new value to store if the comparison succeeds.
   * @returns { long } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: long, val: long): long;

  /**
   * Atomically adds a value to the current value and returns the previous value
   *
   * @param { long } val - the value to add.
   * @returns { long } the previous value before the addition
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: long): long;

  /**
   * Atomically subtracts a value from the current value and returns the previous value
   *
   * @param { long } val - the value to subtract.
   * @returns { long } the previous value before the subtraction
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: long): long;

  /**
   * Atomically performs a bitwise AND operation and returns the previous value
   *
   * @param { long } val - the value to AND with.
   * @returns { long } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: long): long;

  /**
   * Atomically performs a bitwise OR operation and returns the previous value
   *
   * @param { long } val - the value to OR with.
   * @returns { long } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: long): long;

  /**
   * Atomically performs a bitwise XOR operation and returns the previous value
   *
   * @param { long } val - the value to XOR with.
   * @returns { long } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: long): long;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a short value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicShort {
  /**
   * Constructs a new AtomicShort with the provided initial value
   *
   * @param { short } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: short);

  /**
   * Atomically loads the current value
   *
   * @returns { short } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): short;

  /**
   * Atomically stores a new value
   *
   * @param { short } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: short): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { short } val - the new value to exchange with.
   * @returns { short } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: short): short;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { short } expected - the expected current value.
   * @param { short } val - the new value to store if the comparison succeeds.
   * @returns { short } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: short, val: short): short;

  /**
   * Atomically adds a value to the current value and returns the previous value
   *
   * @param { short } val - the value to add.
   * @returns { short } the previous value before the addition
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: short): short;

  /**
   * Atomically subtracts a value from the current value and returns the previous value
   *
   * @param { short } val - the value to subtract.
   * @returns { short } the previous value before the subtraction
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: short): short;

  /**
   * Atomically performs a bitwise AND operation and returns the previous value
   *
   * @param { short } val - the value to AND with.
   * @returns { short } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: short): short;

  /**
   * Atomically performs a bitwise OR operation and returns the previous value
   *
   * @param { short } val - the value to OR with.
   * @returns { short } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: short): short;

  /**
   * Atomically performs a bitwise XOR operation and returns the previous value
   *
   * @param { short } val - the value to XOR with.
   * @returns { short } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: short): short;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a byte value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicByte {
  /**
   * Constructs a new AtomicByte with the provided initial value
   *
   * @param { byte } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: byte);

  /**
   * Atomically loads the current value
   *
   * @returns { byte } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): byte;

  /**
   * Atomically stores a new value
   *
   * @param { byte } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: byte): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { byte } val - the new value to exchange with.
   * @returns { byte } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: byte): byte;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { byte } expected - the expected current value.
   * @param { byte } val - the new value to store if the comparison succeeds.
   * @returns { byte } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: byte, val: byte): byte;

  /**
   * Atomically adds a value to the current value and returns the previous value
   *
   * @param { byte } val - the value to add.
   * @returns { byte } the previous value before the addition
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: byte): byte;

  /**
   * Atomically subtracts a value from the current value and returns the previous value
   *
   * @param { byte } val - the value to subtract.
   * @returns { byte } the previous value before the subtraction
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: byte): byte;

  /**
   * Atomically performs a bitwise AND operation and returns the previous value
   *
   * @param { byte } val - the value to AND with.
   * @returns { byte } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAnd(val: byte): byte;

  /**
   * Atomically performs a bitwise OR operation and returns the previous value
   *
   * @param { byte } val - the value to OR with.
   * @returns { byte } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchOr(val: byte): byte;

  /**
   * Atomically performs a bitwise XOR operation and returns the previous value
   *
   * @param { byte } val - the value to XOR with.
   * @returns { byte } the previous value before the operation
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchXor(val: byte): byte;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a float value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicFloat {
  /**
   * Constructs a new AtomicFloat with the provided initial value
   *
   * @param { float } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: float);

  /**
   * Atomically loads the current value
   *
   * @returns { float } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): float;

  /**
   * Atomically stores a new value
   *
   * @param { float } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: float): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { float } val - the new value to exchange with.
   * @returns { float } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: float): float;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { float } expected - the expected current value.
   * @param { float } val - the new value to store if the comparison succeeds.
   * @returns { float } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: float, val: float): float;

  /**
   * Atomically adds a value to the current value and returns the previous value
   *
   * @param { float } val - the value to add.
   * @returns { float } the previous value before the addition
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: float): float;

  /**
   * Atomically subtracts a value from the current value and returns the previous value
   *
   * @param { float } val - the value to subtract.
   * @returns { float } the previous value before the subtraction
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: float): float;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a double value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicDouble {
  /**
   * Constructs a new AtomicDouble with the provided initial value
   *
   * @param { double } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: double);

  /**
   * Atomically loads the current value
   *
   * @returns { double } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): double;

  /**
   * Atomically stores a new value
   *
   * @param { double } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: double): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { double } val - the new value to exchange with.
   * @returns { double } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: double): double;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { double } expected - the expected current value.
   * @param { double } val - the new value to store if the comparison succeeds.
   * @returns { double } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: double, val: double): double;

  /**
   * Atomically adds a value to the current value and returns the previous value
   *
   * @param { double } val - the value to add.
   * @returns { double } the previous value before the addition
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchAdd(val: double): double;

  /**
   * Atomically subtracts a value from the current value and returns the previous value
   *
   * @param { double } val - the value to subtract.
   * @returns { double } the previous value before the subtraction
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  fetchSub(val: double): double;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a char value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicChar {
  /**
   * Constructs a new AtomicChar with the provided initial value
   *
   * @param { char } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: char);

  /**
   * Atomically loads the current value
   *
   * @returns { char } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): char;

  /**
   * Atomically stores a new value
   *
   * @param { char } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: char): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { char } val - the new value to exchange with.
   * @returns { char } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: char): char;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { char } expected - the expected current value.
   * @param { char } val - the new value to store if the comparison succeeds.
   * @returns { char } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: char, val: char): char;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}

/**
 * Provides an atomic wrapper for safe concurrent access to a boolean value
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AtomicBoolean {
  /**
   * Constructs a new AtomicBoolean with the provided initial value
   *
   * @param { boolean } val - the initial value.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  constructor(val: boolean);

  /**
   * Atomically loads the current value
   *
   * @returns { boolean } the current value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  load(): boolean;

  /**
   * Atomically stores a new value
   *
   * @param { boolean } val - the new value to store.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  store(val: boolean): void;

  /**
   * Atomically exchanges the current value with a new value
   *
   * @param { boolean } val - the new value to exchange with.
   * @returns { boolean } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  exchange(val: boolean): boolean;

  /**
   * Atomically compares the current value with the expected value and replaces it if equal
   *
   * @param { boolean } expected - the expected current value.
   * @param { boolean } val - the new value to store if the comparison succeeds.
   * @returns { boolean } the previous value
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  compareAndSwap(expected: boolean, val: boolean): boolean;

  /**
   * Checks whether atomic operations on this type are lock-free
   *
   * @returns { boolean } true if atomic operations are lock-free, false otherwise
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  static isLockFree(): boolean;
}
