/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Defines the ColorMode of device.
 * @since 7
 */
declare enum ColorMode {
  /**
   * Light mode.
   * @since 7
   */
  LIGHT = 0,

  /**
   * Dark mode.
   * @since 7
   */
  DARK,
}

/**
 * Defines the LayoutDirection of device.
 * @since 7
 */
declare enum LayoutDirection {
  /**
   * Elements are laid out from left to right.
   * @since 7
   */
  LTR,

  /**
   * Elements are laid out from right to left.
   * @since 7
   */
  RTL,

  /**
   * Elements are laid out from auto.
   * @since 8
   */
  Auto,
}

/**
 * Defines the base class of storage.
 * @since 7
 * @systemapi
 */
declare class Storage {
  /**
   * Constructor parameters.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor(needCrossThread?: boolean, file?: string);

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   * @hide
   */
  get(key: string): string | undefined;

  /**
   * Called when setting.
   * @since 7
   * @systemapi
   * @hide
   */
  set(key: string, val: any): void;

  /**
   * Called when data is cleared.
   * @since 7
   * @systemapi
   * @hide
   */
  clear(): void;

  /**
   * Called when data is deleted.
   * @since 7
   * @systemapi
   * @hide
   */
  delete(key: string): void;
}

/**
 * Defining LocalStorage.
 * @since 9
 */
declare class LocalStorage {
  /**
   * constructor.
   * @since 9
   */
  constructor(initializingProperties?: Object);

  /**
   * Get current LocalStorage shared from stage.
   * @StageModelOnly
   * @since 9
   */
  static GetShared(): LocalStorage;

  /**
   * return true if prooperty with given name exists
   * @since 9
   */
  has(propName: string): boolean;

  /**
   * return a Map Iterator
   * @since 9
   */
  keys(): IterableIterator<string>;

  /**
   * return number of properties
   * @since 9
   */
  size(): number;

  /**
   * returns value of given property
   * @since 9
   */
  get<T>(propName: string): T;

  /**
   * Set value of given property
   * @since 9
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * add property if not property with given name
   * @since 9
   */
  setOrCreate<T>(propName: string, newValue?: T): boolean;

  /**
   * create and return a 'link' (two-way sync) to named property
   * @since 9
   */
  link<T>(propName: string, linkUser?: T, subscribersName?: string): T;

  /**
   * Like link(), will create and initialize a new source property in LocalStorge if missing
   * @since 9
   */
  setAndLink<T>(propName: string, defaultValue: T, linkUser?: T, subscribersName?: string): T;

  /**
   * create and return a 'prop' (one-way sync) to named property
   * @since 9
   */
  prop<T>(propName: string, propUser?: T, subscribersName?: string): T;

  /**
   * Like prop(), will create and initialize a new source property in LocalStorage if missing
   * @since 9
   */
  setAndProp<T>(propName: string, defaultValue: T, propUser?: T, subscribersName?: string): T;
  
  /**
   * Delete property from StorageBase
   * @since 9
   * @returns false if method failed
   */
  delete(propName: string): boolean;

  /**
   * delete all properties from the StorageBase
   * @since 9
   */
  clear(): boolean;
}