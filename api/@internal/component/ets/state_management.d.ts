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
 * Defines the AppStorage interface.
 * @since 7
 */
declare class AppStorage {
  /**
   * Called when a link is set.
   * @since 7
   */
  static Link(propName: string): any;

  /**
   * Called when a hyperlink is set.
   * @since 7
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   * @since 7
   */
  static Prop(propName: string): any;

  /**
   * Called when dynamic properties are set.
   * @since 7
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Called when owning or not.
   * @since 7
   */
  static Has(propName: string): boolean;

  /**
   * Called when data is obtained.
   * @since 7
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Called when setting.
   * @since 7
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Called when setting or creating.
   * @since 7
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Called when a deletion is made.
   * @since 7
   */
  static Delete(propName: string): boolean;

  /**
   * Called when a dictionary is sorted.
   * @since 7
   */
  static Keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @since 7
   */
  static staticClear(): boolean;

  /**
   * Called when the data can be changed.
   * @since 7
   */
  static IsMutable(propName: string): boolean;

  /**
   * Called when you check how much data is stored.
   * @since 7
   */
  static Size(): number;
}

/**
 * Defines the Environment interface.
 * @since 7
 */
declare class Environment {
  /**
   * Called when a property value is checked.
   * @since 7
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when multiple property values are checked.
   * @since 7
   */
  static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   * @since 7
   */
  static Keys(): Array<string>;
}

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
 * Defines the PersistentStorage interface.
 * @since 7
 */
declare class PersistentStorage {
  /**
   * Called when a persistence property is stored.
   * @since 7
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Called when a property is deleted.
   * @since 7
   */
  static DeleteProp(key: string): void;

  /**
   * Called when multiple persistence properties are stored.
   * @since 7
   */
  static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   * @since 7
   */
  static Keys(): Array<string>;
}
