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
 * @file 定义ArkTS的同步原语
 * @kit ArkTS
 */

/**
 * 提供互斥锁和读写锁等同步原语，用于多线程环境下对共享资源的同步访问控制。
 * 互斥锁（Mutex）确保在多线程环境下对共享资源的独占访问，允许一个线程在任意时刻独占访问临界区；
 * 读写锁（RWLock）提供更细粒度的线程同步机制，允许多个读线程同时访问共享资源，但写线程需要独占访问，在读多写少的场景下能显著提高并发性能。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */

/**
 * 表示可获取和释放的锁接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Lock {
    /**
     * 获取锁。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * 释放锁。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}

/**
 * 互斥锁，提供对共享资源的独占访问。同一时刻仅允许一个线程持有该锁。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Mutex implements Lock {
    /**
     * 构造一个Mutex实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 在持有锁的情况下执行回调函数，执行完毕后自动释放锁。
     *
     * @param { function } callback - 持有锁期间要执行的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lockGuard(callback: () => void): void;

    /**
     * 获取互斥锁。如果锁已被其他线程持有，当前线程将被阻塞，直到锁被释放。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * 释放互斥锁。
     *
     * @throws { Error } - 互斥锁已处于未锁定状态时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}

/**
 * 读写锁，允许多个线程并发读取共享资源，但写线程需要独占访问。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RWLock {
    /**
     * 构造一个RWLock实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 返回与该RWLock关联的读锁。
     *
     * @returns { ReadLock } 读锁对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readLock(): ReadLock;

    /**
     * 返回与该RWLock关联的写锁。
     *
     * @returns { WriteLock } 写锁对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    writeLock(): WriteLock;
}

/**
 * 读锁，允许多个线程并发读取共享资源。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ReadLock implements Lock {
    /**
     * 构造与指定RWLock关联的读锁。
     *
     * @param { RWLock } lock - 与该读锁关联的RWLock。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(lock: RWLock);

    /**
     * 获取读锁。如果没有线程持有写锁，读锁会立即被获取；否则当前线程将被阻塞，直到写锁被释放。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * 释放读锁。
     *
     * @throws { Error } - 读锁已处于未锁定状态或处于写锁状态时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}

/**
 * 写锁，提供对共享资源的独占写入。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class WriteLock implements Lock {
    /**
     * 构造与指定RWLock关联的写锁。
     *
     * @param { RWLock } lock - 与该写锁关联的RWLock。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(lock: RWLock);

    /**
     * 获取写锁。如果没有任何线程持有读锁或写锁，写锁会立即被获取；否则当前线程将被阻塞，直到所有读锁和写锁都被释放。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * 释放写锁。
     *
     * @throws { Error } - 写锁已处于未锁定状态或处于读锁状态时抛出。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}
