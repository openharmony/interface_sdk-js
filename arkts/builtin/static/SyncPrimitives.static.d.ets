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
 * Represents a lock that can be acquired and released
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Lock {
    /**
     * Acquires the lock
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * Releases the lock
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}

/**
 * A mutual exclusion lock that provides exclusive access to a shared resource
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Mutex implements Lock {
    /**
     * Constructs a new Mutex instance
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Executes the callback while holding the lock, automatically releasing it afterwards
     *
     * @param { function } callback - the callback to execute while holding the lock.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lockGuard(callback: () => void): void;

    /**
     * Acquires the lock
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * Releases the lock
     *
     * @throws {Error} the mutex is already unlocked
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}

/**
 * A read-write lock that allows concurrent read access but exclusive write access
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RWLock {
    /**
     * Constructs a new RWLock instance
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Returns a ReadLock associated with this RWLock
     *
     * @returns { ReadLock } the read lock
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readLock(): ReadLock;

    /**
     * Returns a WriteLock associated with this RWLock
     *
     * @returns { WriteLock } the write lock
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    writeLock(): WriteLock;
}

/**
 * A read lock that allows concurrent read access to a shared resource
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ReadLock implements Lock {
    /**
     * Constructs a new ReadLock associated with the given RWLock
     *
     * @param { RWLock } lock - the RWLock this ReadLock is associated with.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(lock: RWLock);

    /**
     * Acquires the read lock
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * Releases the read lock
     *
     * @throws {Error} the read lock is already unlocked or write-locked
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}

/**
 * A write lock that provides exclusive write access to a shared resource
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class WriteLock implements Lock {
    /**
     * Constructs a new WriteLock associated with the given RWLock
     *
     * @param { RWLock } lock - the RWLock this WriteLock is associated with.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(lock: RWLock);

    /**
     * Acquires the write lock
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;

    /**
     * Releases the write lock
     *
     * @throws {Error} the write lock is already unlocked or read-locked
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    unlock(): void;
}
