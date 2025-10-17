/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 */

/**
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ComponentOptions {
  /**
   * freeze UI state.
   *
   * @type { boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * freeze UI state.
   *
   * @type { boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  freezeWhenInactive : boolean,
}

/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface InputCounterOptions {
  /**
   * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
   * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
   * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  thresholdPercentage?: number;

  /**
   * If the current input character count reaches the maximum character count and users want to exceed the
   * normal input, the border will turn red. If this parameter is true, the red border displayed.
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * If the current input character count reaches the maximum character count and users want to exceed the
   * normal input, the border will turn red. If this parameter is true, the red border displayed.
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  highlightBorder?: boolean;
}

/**
 * Defines the options of decoration.
 *
 * @interface TextDecorationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextDecorationOptions {
  /**
   * The decoration type.
   *
   * @type { TextDecorationType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: TextDecorationType;

  /**
   * Sets the color of decoration.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * The style value of decoration.
   *
   * @type { ?TextDecorationStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;
}

/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Component ClassDecorator
 *
 * Component is a ClassDecorator and it supports ComponentOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Component: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);

/**
 * Defining ComponentV2 ClassDecorator
 *
 * ComponentV2 is a ClassDecorator and it supports ComponentOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const ComponentV2: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);

/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 10
 */
/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface EntryOptions {
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 10
   */
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  routeName? : string,

  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 10
   */
  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  storage? : LocalStorage,

  /**
   * Determines whether to use the LocalStorage instance object returned by the LocalStorage.getShared() interface.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  useSharedStorage? : boolean,
}

/**
 * Defines Entry ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Entry: ClassDecorator & ((options?: LocalStorage | EntryOptions) => ClassDecorator);

/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Observed: ClassDecorator;

/**
 * Defining ObservedV2 ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const ObservedV2: ClassDecorator;

/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);

/**
 * Defining Require PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Require: PropertyDecorator;

/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const BuilderParam: PropertyDecorator;

/**
 * Defining Local PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Local: PropertyDecorator;

/**
 * Defining Param PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Param: PropertyDecorator;

/**
 * Defining Once PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Once: PropertyDecorator;

/**
 * Defining Event PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Event: PropertyDecorator;

/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const State: PropertyDecorator;

/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Track: PropertyDecorator;

/**
 * Defining Trace PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Trace: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const ObjectLink: PropertyDecorator;

/**
 * Defines the options of Provide PropertyDecorator.
 *
 * @interface ProvideOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ProvideOptions {
  /**
   * Override the @Provide of any parent or parent of parent @Component.@Provide({allowOverride: "name"}) is
   * also allowed to be used even when there is no ancestor @Component whose @Provide would be overridden.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  allowOverride?: string,
}

/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Provide: PropertyDecorator & ((value: string | ProvideOptions) => PropertyDecorator);

/**
 * Defining Provider PropertyDecorator, aliasName is the only matching key and if aliasName is the default, the default attribute name is regarded as aliasName.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Provider: (aliasName?: string) => PropertyDecorator;

/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining Consumer PropertyDecorator, aliasName is the only matching key and if aliasName is the default, the default attribute name is regarded as aliasName.
 * And @Consumer will find the nearest @Provider.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Consumer: (aliasName?: string) => PropertyDecorator;

/**
 * Defining Computed MethodDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Computed: MethodDecorator;

/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Watch: (value: string) => PropertyDecorator;

/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Builder: MethodDecorator;

/**
 * Defining LocalBuilder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const LocalBuilder: MethodDecorator;

/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Styles: MethodDecorator;

/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Extend: MethodDecorator & ((value: any) => MethodDecorator);

/**
 * Define AnimatableExtend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define AnimatableExtend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const AnimatableExtend: MethodDecorator & ((value: Object) => MethodDecorator);

/**
 * Define Monitor MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const Monitor: MonitorDecorator;

/**
 * Define Monitor Decorator type
 *
 * @typedef { function } MonitorDecorator
 * @param { string } value - Monitored path input by the user
 * @param { string[] } args - Monitored path(s) input by the user
 * @returns { MethodDecorator } Monitor decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare type MonitorDecorator = (value: string, ...args: string[]) => MethodDecorator;

/**
 * Define IMonitor interface
 *
 * @interface IMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface IMonitor {
  /**
   * Array of changed paths(keys)
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dirty: Array<string>;

  /**
   * Return the pair of the value before the most recent change and current value for given path.
   * If path does not exist, return undefined; If path is not specified, return the value pair corresponding to the first path in dirty.
   *
   * @param { string } [path]
   * @returns { IMonitorValue<T> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value<T>(path?: string): IMonitorValue<T> | undefined;
}

/**
 * Define IMonitorValue interface
 *
 * @interface IMonitorValue<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface IMonitorValue<T> {
  /**
   * Get the previous value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  before: T;

  /**
   * Get current value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  now: T;

  /**
   * Monitored path input by the user.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  path: string;
}

/**
 * Define AnimatableArithmetic interface
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define AnimatableArithmetic interface
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface AnimatableArithmetic<T> {
  /**
   * Define plus method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define plus method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * Define subtract method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define subtract method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * Define multiply method
   *
   * @param { number } scale - scale value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define multiply method
   *
   * @param { number } scale - scale value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  multiply(scale: number): AnimatableArithmetic<T>;

  /**
   * Define equals method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { boolean } is equals
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define equals method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { boolean } is equals
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  equals(rhs: AnimatableArithmetic<T>): boolean;
}

/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Concurrent: MethodDecorator;

/**
 * Defining Sendable ClassDecorator
 * The Sendable decorator can be used only for classes. A class with this decorator is marked as sendable, and the class object can be shared globally.
 * Since 12, the Sendable decorator can be used for function and typeAlias also.
 * A function with this decorator is marked as sendable, and the function can be an shareable property of sendable-class object.
 * A typeAlias with this decorator is marked as sendable, and the typeAlias can be used to declare properties, variables,
 * and arguments that need to be assigned with sendable-function.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Sendable: ClassDecorator;

/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const CustomDialog: ClassDecorator;

/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const LocalStorageLink: (value: string) => PropertyDecorator;

/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const LocalStorageProp: (value: string) => PropertyDecorator;

/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#getHostContext
 */
declare function getContext(component?: Object): Context;

/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Reusable: ClassDecorator;

/**
 * Defining ReusableV2 ClassDecorator that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare const ReusableV2: ClassDecorator;

/**
 * ReuseId callback type. It is used to compute reuseId.
 *
 * @typedef { function } ReuseIdCallback
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ReuseIdCallback = () => string;

/**
 * Defining the reusable configuration parameters.
 *
 * @interface ReuseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ReuseOptions {
  /**
   * Defining reuseId function. The default reuseId is the custom component name.
   *
   * @type { ?ReuseIdCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reuseId? : ReuseIdCallback;
}
/**
 * Get context.
 *
 * @typedef { import('../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Get context.
 *
 * @typedef { import('../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Get context.
 *
 * @typedef { import('../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare type Context = import('../api/application/Context').default;

/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @form
 * @since 9
 */
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare function postCardAction(component: Object, action: Object): void;

/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface Configuration {
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  readonly colorMode: string;

  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  readonly fontScale: number;
}

/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface Rectangle {
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  x?: Length;

  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  y?: Length;

  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  width?: Length;

  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  height?: Length;
}

/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface ExpectedFrameRateRange {
  /**
   * The minimum animation drawing FPS.
   * The minimum value should be less than or equal to the maximum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The minimum animation drawing FPS.
   * The minimum value should be less than or equal to the maximum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * The minimum animation drawing FPS.
   * The minimum value should be less than or equal to the maximum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  min: number,
  /**
   * The maximum animation drawing FPS.
   * The maximum value should be greater than or equal to the minimum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The maximum animation drawing FPS.
   * The maximum value should be greater than or equal to the minimum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * The maximum animation drawing FPS.
   * The maximum value should be greater than or equal to the minimum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  max: number,
  /**
   * The expected frame rate of dynamical callback rate range.
   * The value should be between the minimum and maximum value.
   * Otherwise, the actual callback rate will be dynamically
   * adjusted to better align with other animation sources.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The expected frame rate of dynamical callback rate range.
   * The value should be between the minimum and maximum value.
   * Otherwise, the actual callback rate will be dynamically
   * adjusted to better align with other animation sources.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * The expected frame rate of dynamical callback rate range.
   * The value should be between the minimum and maximum value.
   * Otherwise, the actual callback rate will be dynamically
   * adjusted to better align with other animation sources.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  expected: number,
}

/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare function $r(value: string, ...params: any[]): Resource;

/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare function $rawfile(value: string): Resource;
/**
 * Defines the same page mode
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum AccessibilitySamePageMode {
  /**
   * the first page and root page event is not send.but if application load new page whith navigation,the page event will be sent.
   * this mode is to solve skipping focus
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEMI_SILENT = 0,
  /**
   * the all page event is not send
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FULL_SILENT = 1
}
/**
 * Enum for accessibility component type
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum AccessibilityRoleType {
  /**
   * ActionSheet component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ACTION_SHEET = 0,
  /**
   * AlertDialog component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ALERT_DIALOG = 1,
  /**
   * AlphabetIndexer component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  INDEXER_COMPONENT = 2,
  /**
   * badge component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BADGE_COMPONENT = 3,
  /**
   * blank component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BLANK = 4,
  /**
   * button component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BUTTON = 5,
  /**
   * button component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BACK_BUTTON = 6,
  /**
   * sheet drag bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SHEET_DRAG_BAR = 7,
  /**
   * calendar picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CALENDAR_PICKER = 8,
  /**
   * calendar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CALENDAR = 9,
  /**
   * canvas component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS = 10,
  /**
   * canvas gradient component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_GRADIENT = 11,
  /**
   * canvas pattern component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_PATTERN = 12,
  /**
   * checkbox component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHECKBOX = 13,
  /**
   * checkbox group component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHECKBOX_GROUP = 14,
  /**
   * circle component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CIRCLE = 15,
  /**
   * column split component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COLUMN_SPLIT = 16,
  /**
   * column component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COLUMN = 17,
  /**
   * canvas rendering context 2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_RENDERING_CONTEXT_2D = 18,
  /**
   * chart component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHART = 19,
  /**
   * counter component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COUNTER = 20,
  /**
   * counter modal component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CONTAINER_MODAL = 21,
  /**
   * data panel component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DATA_PANEL = 22,
  /**
   * data picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DATE_PICKER = 23,
  /**
   * dialog component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DIALOG = 24,
  /**
   * divider component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DIVIDER = 25,
  /**
   * drag bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DRAG_BAR = 26,
  /**
   * effect component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  EFFECT_COMPONENT = 27,
  /**
   * ellipse component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ELLIPSE = 28,
  /**
   * flex component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FLEX = 29,
  /**
   * flow item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FLOW_ITEM = 30,
  /**
   * form component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FORM_COMPONENT = 31,
  /**
   * form link component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FORM_LINK = 32,
  /**
   * gauge component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GAUGE = 33,
  /**
   * grid component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID = 34,
  /**
   * grid col component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_COL = 35,
  /**
   * grid container component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_CONTAINER = 36,
  /**
   * grid item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_ITEM = 37,
  /**
   * grid row component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_ROW = 38,
  /**
   * hyperlink component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  HYPERLINK = 39,
  /**
   * image component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE = 40,
  /**
   * image animator component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_ANIMATOR = 41,
  /**
   * image bitmap component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_BITMAP = 42,
  /**
   * image data component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_DATA = 43,
  /**
   * image span component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_SPAN = 44,
  /**
   * label component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LABEL = 45,
  /**
   * line component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LINE = 46,
  /**
   * list component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST = 47,
  /**
   * list item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST_ITEM = 48,
  /**
   * list item group component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST_ITEM_GROUP = 49,
  /**
   * loading progress component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LOADING_PROGRESS = 50,
  /**
   * marquee component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MARQUEE = 51,
  /**
   * matrix2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MATRIX2D = 52,
  /**
   * menu component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU = 53,
  /**
   * menu item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU_ITEM = 54,
  /**
   * menu item group component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU_ITEM_GROUP = 55,
  /**
   * navdestination component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAV_DESTINATION = 56,
  /**
   * navrouter component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAV_ROUTER = 57,
  /**
   * navigation component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION = 58,
  /**
   * navigation bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION_BAR = 59,
  /**
   * navigation menu component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION_MENU = 60,
  /**
   * navigator component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATOR = 61,
  /**
   * offscreen canvas component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OFFSCREEN_CANVAS = 62,
  /**
   * offscreen canvas rendering context2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
  /**
   * option component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OPTION = 64,
  /**
   * panel component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PANEL = 65,
  /**
   * paper page component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PAPER_PAGE = 66,
  /**
   * path component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATH = 67,
  /**
   * path 2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATH2D = 68,
  /**
   * pattern lock component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATTERN_LOCK = 69,
  /**
   * picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PICKER = 70,
  /**
   * picker view component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PICKER_VIEW = 71,
  /**
   * plugin component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PLUGIN_COMPONENT = 72,
  /**
   * polygon component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POLYGON = 73,
  /**
   * polyline component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POLYLINE = 74,
  /**
   * pop up component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POPUP = 75,
  /**
   * progress component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PROGRESS = 76,
  /**
   * qr code component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  QRCODE = 77,
  /**
   * radio component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RADIO = 78,
  /**
   * rating component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RATING = 79,
  /**
   * rect component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RECT = 80,
  /**
   * refresh component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  REFRESH = 81,
  /**
   * relative container component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RELATIVE_CONTAINER = 82,
  /**
   * remote window component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  REMOTE_WINDOW = 83,
  /**
   * rich editor component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RICH_EDITOR = 84,
  /**
   * rich text component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RICH_TEXT = 85,
  /**
   * rolepager component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROLE_PAGER = 86,
  /**
   * row component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROW = 87,
  /**
   * row split component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROW_SPLIT = 88,
  /**
   * scroll component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SCROLL = 89,
  /**
   * scroll bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SCROLL_BAR = 90,
  /**
   * search component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEARCH = 91,
  /**
   * search field component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEARCH_FIELD = 92,
  /**
   * select component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SELECT = 93,
  /**
   * shape component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SHAPE = 94,
  /**
   * sidebar container component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SIDEBAR_CONTAINER = 95,
  /**
   * slider component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SLIDER = 96,
  /**
   * span component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SPAN = 97,
  /**
   * stack component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STACK = 98,
  /**
   * stepper component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STEPPER = 99,
  /**
   * stepper item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STEPPER_ITEM = 100,
  /**
   * swiper component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWIPER = 101,
  /**
   * swiper indicator component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWIPER_INDICATOR = 102,
  /**
   * switch component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWITCH = 103,
  /**
   * symbol glyph component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SYMBOL_GLYPH = 104,
  /**
   * tab content component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TAB_CONTENT = 105,
  /**
   * tab bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TAB_BAR = 106,
  /**
   * tabs component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TABS = 107,
  /**
   * text component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT = 108,
  /**
   * text clock component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_CLOCK = 109,
  /**
   * text entry component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_ENTRY = 110,
  /**
   * text input component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_INPUT = 111,
  /**
   * text picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_PICKER = 112,
  /**
   * text timer component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_TIMER = 113,
  /**
   * text area component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_AREA = 114,
  /**
   * text field component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_FIELD = 115,
  /**
   * time picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TIME_PICKER = 116,
  /**
   * title bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TITLE_BAR = 117,
  /**
   * toggler component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TOGGLER = 118,
  /**
   * uiextensioncomponent component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  UI_EXTENSION_COMPONENT = 119,
  /**
   * video component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  VIDEO = 120,
  /**
   * water flow component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  WATER_FLOW = 121,
  /**
   * web component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  WEB = 122,
  /**
   * xcomponent component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  XCOMPONENT = 123,
  /**
   * none component type: screen reader will not broadcast the component type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROLE_NONE = 124
}

/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused
 * @typedef {function} AccessibilityFocusCallback
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type AccessibilityFocusCallback = (isFocus: boolean) => void;

/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum FinishCallbackType {
  /**
   * When the entire animation ends and will be removed immediately, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * When the entire animation ends and will be removed immediately, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  REMOVED = 0,
  /**
   * When the animation is logically down but may still be in its long tail, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * When the animation is logically down but may still be in its long tail, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  LOGICALLY = 1
}

/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum TouchTestStrategy {
  /**
   * Do framework touch test.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Do framework touch test.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Specify the component to do touch test and follow the framework touch test
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Specify the component to do touch test and follow the framework touch test
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  FORWARD_COMPETITION = 1,

  /**
   * Specify the component to do touch test and not follow the framework touch test
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Specify the component to do touch test and not follow the framework touch test
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  FORWARD = 2
}

/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface AnimateParam {
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  duration?: number;
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  tempo?: number;
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * Animation plays with delay,when set to a negative number, the animation plays in advance.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  delay?: number;

  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  iterations?: number;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  playMode?: PlayMode;

  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  onFinish?: () => void;

  /**
   * Define the type of onFinish callback in animation.
   *
   * @type { ?FinishCallbackType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Define the type of onFinish callback in animation.
   *
   * @type { ?FinishCallbackType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  finishCallbackType?: FinishCallbackType;

  /**
   * Indicates expectedFrameRateRange including minimum、maximum and expected frame rate.
   *
   * @type { ?ExpectedFrameRateRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Indicates expectedFrameRateRange including minimum、maximum and expected frame rate.
   *
   * @type { ?ExpectedFrameRateRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
interface ICurve {
  /**
   * Get curve value by fraction.
   *
   * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
   * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Get curve value by fraction.
   *
   * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
   * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Get curve value by fraction.
   *
   * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
   * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  interpolate(fraction : number) : number;
}

/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface MotionPathOptions {
  /**
   * The path info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The path info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The path info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  path: string;

  /**
   * The origin point info in range [0,1).
   *
   * @type { ?number }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The origin point info in range [0,1).
   *
   * @type { ?number }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The origin point info in range [0,1).
   *
   * @type { ?number }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  from?: number;

  /**
   * he distance point info in range (0,1].
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * he distance point info in range (0,1].
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The distance point info in range (0,1].
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  to?: number;

  /**
   * The rotate info.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The rotate info.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The rotate info.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  rotatable?: boolean;
}

/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface sharedTransitionOptions {
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  duration?: number;

  /**
   * Animation duration, in ms.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  delay?: number;

  /**
   * The motion path info.
   *
   * @type { ?MotionPathOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The motion path info.
   *
   * @type { ?MotionPathOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The motion path info.
   *
   * @type { ?MotionPathOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  motionPath?: MotionPathOptions;

  /**
   * Z index info.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Z index info.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Z index info.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  zIndex?: number;

  /**
   * the animate type.
   *
   * @type { ?SharedTransitionEffectType }
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * the animate type.
   *
   * @type { ?SharedTransitionEffectType }
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * the animate type.
   *
   * @type { ?SharedTransitionEffectType }
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type?: SharedTransitionEffectType;
}

/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GeometryTransitionOptions {
  /**
   * whether follow target for the component still in the hierarchy, default: false, stay current.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * whether follow target for the component still in the hierarchy, default: false, stay current.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  follow?: boolean;
  /**
   * Defines movement strategy of source and target in the hierarchy during geometry transition.
   *
   * @type { ?TransitionHierarchyStrategy }
   * @default TransitionHierarchyStrategy.ADAPTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 12
   */
  /**
   * Defines movement strategy of source and target in the hierarchy during geometry transition.
   *
   * @type { ?TransitionHierarchyStrategy }
   * @default TransitionHierarchyStrategy.ADAPTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 13 dynamic
   */
  hierarchyStrategy?: TransitionHierarchyStrategy;
}

/**
 * Defines the options of linear gradient.
 *
 * @interface LinearGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface LinearGradientOptions {
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines starting angle of linear gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 180
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  angle?: number | string;

  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the direction of linear gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?GradientDirection }
   * @default GradientDirection.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  direction?: GradientDirection;

  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines color description for gradients.
   *
   * Anonymous Object Rectification.
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines gradient colors with repeated coloring.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  repeating?: boolean;
}

/**
 * Defines the options of radial gradient.
 *
 * @interface SweepGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SweepGradientOptions {
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines center point for angle gradient.
   *
   * Anonymous Object Rectification.
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  center: [Length, Length];

  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @param { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Angle Gradient
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the starting point of angle gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  start?: number | string;

  /**
   * end:End point of angle gradient. The default value is 0
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines end point of angle gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  end?: number | string;

  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the rotation angle of the gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  rotation?: number | string;

  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines color description for gradients.
   *
   * Anonymous Object Rectification.
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines gradient colors with repeated coloring.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  repeating?: boolean;

  /**
   * Defines color description in ColorMetrics format for gradients.
   * This parameter takes precedence over colors parameter.
   *
   * @type { ?Array<[ColorMetrics, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  metricsColors?: Array<[ColorMetrics, number]>;
}

/**
 * Defines the options of radial gradient.
 *
 * @interface RadialGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface RadialGradientOptions {
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines center point for radial gradient.
   *
   * Anonymous Object Rectification.
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  center: [Length, Length];

  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines radius of the radial gradient.
   *
   * Anonymous Object Rectification.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radius: Length;

  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines color description for gradients.
   *
   * Anonymous Object Rectification.
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines gradient colors with repeated coloring.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  repeating?: boolean;
}

/**
 * Source and target are two matched elements during the geometry transition.
 * The animation starts at the source and ends at the target.
 * TransitionHierarchyStrategy enumeration defines how levels of source and target elements
 * would be changed in the hierarchy during the geometry transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @atomicservice
 * @since 12
 */
/**
 * Source and target are two matched elements during the geometry transition.
 * The animation starts at the source and ends at the target.
 * TransitionHierarchyStrategy enumeration defines how levels of source and target elements
 * would be changed in the hierarchy during the geometry transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 13 dynamic
 */
declare enum TransitionHierarchyStrategy {
  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 12
   */
  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 13 dynamic
   */
  NONE = 0,

  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 12
   */
  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 13 dynamic
   */
  ADAPTIVE = 1
}

/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface TranslateOptions {
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  x?: number | string;

  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  y?: number | string;

  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  z?: number | string;
}

/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ScaleOptions {
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  x?: number;

  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  y?: number;

  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  z?: number;

  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  centerX?: number | string;

  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  centerY?: number | string;
}
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface AlignRuleOption {
  /**
   * The param of left align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of left align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of left align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  left?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of right align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of right align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of right align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  right?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of middle align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of middle align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of middle align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  middle?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of top align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of top align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of top align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  top?: { anchor: string, align: VerticalAlign };

  /**
   * The param of bottom align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of bottom align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 10
   */
  /**
   * The param of bottom align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  bottom?: { anchor: string, align: VerticalAlign };

  /**
   * The param of center align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  center?: { anchor: string, align: VerticalAlign };

  /**
   * Defines the bias ratio in horizontal and vertical direction.
   *
   * @type { ?Bias }
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the bias ratio in horizontal and vertical direction.
   *
   * @type { ?Bias }
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bias?: Bias;
}

/**
 * Defines the localized horizontal align param of relative container.
 *
 * @interface LocalizedHorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedHorizontalAlignParam {
  /**
   * The anchor of localized align param.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: string;

  /**
   * The align of localized align param.
   *
   * @type { HorizontalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  align: HorizontalAlign;
}

/**
 * Defines the localized vertical align param of relative container.
 *
 * @interface LocalizedVerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedVerticalAlignParam {
  /**
   * The anchor of localized align param.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: string;

  /**
   * The align of localized align param.
   *
   * @type { VerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  align: VerticalAlign;
}

/**
 * Defines the Localized align rule options of relative container.
 *
 * @interface LocalizedAlignRuleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedAlignRuleOptions {
  /**
   * The param of start align.
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LocalizedHorizontalAlignParam;

  /**
   * The param of end align.
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LocalizedHorizontalAlignParam;

  /**
   * The param of middle align.
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  middle?: LocalizedHorizontalAlignParam;

  /**
   * The param of top align.
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LocalizedVerticalAlignParam;

  /**
   * The param of bottom align.
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LocalizedVerticalAlignParam;

  /**
   * The param of center align.
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  center?: LocalizedVerticalAlignParam;

  /**
   * Defines the bias ratio in horizontal and vertical direction.
   *
   * @type { ?Bias }
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bias?: Bias;
}

/**
 * Defines the style of the chain in relative container.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ChainStyle {
  /**
   * Elements of the chain will be spread out.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SPREAD = 0,

  /**
   * Elements except chain's head and tail will be spread out.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SPREAD_INSIDE = 1,

  /**
   * Elements of the chain will be packed together.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PACKED = 2
}

/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface RotateOptions {
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  x?: number;

  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  y?: number;

  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  z?: number;

  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  centerX?: number | string;

  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  centerY?: number | string;

  /**
   * The param of center point of z.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of z.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  centerZ?: number;

  /**
   * The param of camera distance, value range (-∞, ∞).
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of camera distance, value range (-∞, ∞).
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  perspective?: number;

  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  angle: number | string;
}

/**
 * The rotation parameters containing multi-axis angle information.
 *
 * @interface RotateAngleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare interface RotateAngleOptions {
  /**
   * the angle of the x-axis direction.
   *
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  angleX?: number | string;
 
  /**
   * the angle of the y-axis direction.
   *
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  angleY?: number | string;
 
  /**
   * the angle of the z-axis direction.
   *
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  angleZ?: number | string;
 
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  centerX?: number | string;
 
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  centerY?: number | string;
 
  /**
   * The param of center point of z.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  centerZ?: number;
 
  /**
   * The param of camera distance, value range (-∞, ∞).
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  perspective?: number;
}

/**
 * Defines the param of transition.
 *
 * @interface TransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 10
 * @useinstead TransitionEffect
 */
declare interface TransitionOptions {
  /**
   * Defines the param of type.
   *
   * @type { ?TransitionType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamic
   * @deprecated since 10
   */
  type?: TransitionType;
  /**
   * Defines the param of opacity.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamic
   * @deprecated since 10
   */
  opacity?: number;
  /**
   * Defines the param of translate.
   *
   * @type { ?TranslateOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamic
   * @deprecated since 10
   */
  translate?: TranslateOptions;
  /**
   * Defines the param of scale.
   *
   * @type { ?ScaleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamic
   * @deprecated since 10
   */
  scale?: ScaleOptions;
  /**
   * Defines the param of rotate.
   *
   * @type { ?RotateOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamic
   * @deprecated since 10
   */
  rotate?: RotateOptions;
}

/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum TransitionEdge {
  /**
   * Top edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Top edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  TOP = 0,

  /**
   * Bottom edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Bottom edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BOTTOM = 1,

  /**
   * Start edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Start edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  START = 2,

  /**
   * End edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * End edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  END = 3
}

/**
 * Defines all transition effects.
 *
 * @typedef { object } TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines all transition effects.
 *
 * @typedef { object } TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare type TransitionEffects = {
  identity: undefined;
  opacity: number;
  slideSwitch: undefined;
  move: TransitionEdge;
  translate: TranslateOptions;
  rotate: RotateOptions;
  scale: ScaleOptions;
  asymmetric: {
    appear: TransitionEffect;
    disappear: TransitionEffect;
  };
};

/**
 * Defined the draw modifier of node. Provides draw callbacks for the associated Node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DrawModifier {
  /**
   * drawBehind Method. Executed before drawing associated Node.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawBehind?(drawContext: DrawContext): void;

  /**
   * drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced
   * if this method is set.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawContent?(drawContext: DrawContext): void;

  /**
   * drawFront Method. Executed after drawing associated Node.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawFront?(drawContext: DrawContext): void;

  /**
   * drawforeground Method. Executed after drawing associated Node and its children.
   * @param { DrawContext } drawContext - The drawContext used to draw
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  drawForeground?(drawContext: DrawContext): void;

  /**
   * Invalidate the component, which will cause a re-render of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  invalidate(): void;
}

/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare class TransitionEffect<
  Type extends keyof TransitionEffects = keyof TransitionEffects,
  Effect extends TransitionEffects[Type] = TransitionEffects[Type]
> {
  /**
   * Disables the transition effect
   *
   * @type { TransitionEffect<"identity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Disables the transition effect
   *
   * @type { TransitionEffect<"identity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static readonly IDENTITY: TransitionEffect<"identity">;

  /**
   * Specifies a transition effect with transparency of 0, which is equivalent to TransitionEffect.opacity(0).
   *
   * @type { TransitionEffect<"opacity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies a transition effect with transparency of 0, which is equivalent to TransitionEffect.opacity(0).
   *
   * @type { TransitionEffect<"opacity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static readonly OPACITY: TransitionEffect<"opacity">;

  /**
   * Defines a slide transition effect
   *
   * @type { TransitionEffect<
   * "asymmetric",
   * {appear: TransitionEffect<"move", TransitionEdge>;
   * disappear: TransitionEffect<"move", TransitionEdge>;
   * }> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines a slide transition effect
   *
   * @type { TransitionEffect<
   * "asymmetric",
   * {appear: TransitionEffect<"move", TransitionEdge>;
   * disappear: TransitionEffect<"move", TransitionEdge>;
   * }> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static readonly SLIDE: TransitionEffect<
    "asymmetric",
    {
      appear: TransitionEffect<"move", TransitionEdge>;
      disappear: TransitionEffect<"move", TransitionEdge>;
    }
  >;

  /**
   * Specify a transition effect where the element enters by shrinking first and then expanding as it slides in from the right,
   * and exits by shrinking first and then expanding as it slides out to the left, with a minimum scale ratio of 0.8.
   * It comes with default animation parameters, which can also be overridden.
   * The default animation duration is set to 600ms, and the specified animation curve is cubicBezierCurve(0.24, 0.0, 0.50, 1.0).
   *
   * @type { TransitionEffect<"slideSwitch"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specify a transition effect where the element enters by shrinking first and then expanding as it slides in from the right,
   * and exits by shrinking first and then expanding as it slides out to the left, with a minimum scale ratio of 0.8.
   * It comes with default animation parameters, which can also be overridden.
   * The default animation duration is set to 600ms, and the specified animation curve is cubicBezierCurve(0.24, 0.0, 0.50, 1.0).
   *
   * @type { TransitionEffect<"slideSwitch"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static readonly SLIDE_SWITCH: TransitionEffect<"slideSwitch">;

  /**
   * Creates a translate transition effect
   *
   * @param { TranslateOptions } options - translate options
   * @returns { TransitionEffect<"translate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a translate transition effect
   *
   * @param { TranslateOptions } options - translate options
   * @returns { TransitionEffect<"translate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static translate(options: TranslateOptions): TransitionEffect<"translate">;

  /**
   * Creates a rotation transition effect
   *
   * @param { RotateOptions } options - rotate options
   * Set the rotation effect for component transitions when inserting and deleting.
   * The value represents the starting rotation point for the inserting animation and the ending rotation point for the deleting animation.
   * -x: Horizontal component of the rotational vector.
   * -y: Vertical component of the rotational vector.
   * -z: Vertical component of the rotational vector.
   * -centerX, centerY specify the rotation center point, with default values of "50%",
   * meaning that the default rotation center point is the center point of the component.
   * -The center point of (0, 0) represents the upper-left corner of the component.
   * -centerZ refers to the Z-axis anchor point. The default value of centerZ is 0.
   * -perspective indicates the visual distance. The perspective property does not support transition animation.
   * @returns { TransitionEffect<"rotate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a rotation transition effect
   *
   * @param { RotateOptions } options - rotate options
   * Set the rotation effect for component transitions when inserting and deleting.
   * The value represents the starting rotation point for the inserting animation and the ending rotation point for the deleting animation.
   * -x: Horizontal component of the rotational vector.
   * -y: Vertical component of the rotational vector.
   * -z: Vertical component of the rotational vector.
   * -centerX, centerY specify the rotation center point, with default values of "50%",
   * meaning that the default rotation center point is the center point of the component.
   * -The center point of (0, 0) represents the upper-left corner of the component.
   * -centerZ refers to the Z-axis anchor point. The default value of centerZ is 0.
   * -perspective indicates the visual distance. The perspective property does not support transition animation.
   * @returns { TransitionEffect<"rotate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static rotate(options: RotateOptions): TransitionEffect<"rotate">;

  /**
   * Creates a scale transition effect
   *
   * @param { ScaleOptions } options - scale options
   * @returns { TransitionEffect<"scale"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a scale transition effect
   *
   * @param { ScaleOptions } options - scale options
   * @returns { TransitionEffect<"scale"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static scale(options: ScaleOptions): TransitionEffect<"scale">;

  /**
   * Creates an opacity transition effect with alpha value
   *
   * @param { number } alpha - opacity alpha value, value range [0, 1].
   * @returns { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates an opacity transition effect with alpha value
   *
   * @param { number } alpha - opacity alpha value, value range [0, 1].
   * @returns { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Creates an opacity transition effect with alpha value
   *
   * @param { number } alpha - opacity alpha value, value range [0, 1].
   * Illegal values less than 0 are treated as 0, and illegal values greater than 1 are treated as 1.
   * @returns { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  static opacity(alpha: number): TransitionEffect<"opacity">;

  /**
   * Creates a move transition effect
   *
   * @param { TransitionEdge } edge - the edge that component will move to
   * @returns { TransitionEffect<"move"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a move transition effect
   *
   * @param { TransitionEdge } edge - the edge that component will move to
   * @returns { TransitionEffect<"move"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static move(edge: TransitionEdge): TransitionEffect<"move">;

  /**
   * Creates an asymmetric transition effect
   *
   * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
   * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
   * @returns { TransitionEffect<"asymmetric"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates an asymmetric transition effect
   *
   * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
   * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
   * @returns { TransitionEffect<"asymmetric"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  static asymmetric(
    appear: TransitionEffect,
    disappear: TransitionEffect
  ): TransitionEffect<"asymmetric">;

  /**
   * TransitionEffect constructor
   *
   * @param { Type } type - transition type
   * @param { Effect } effect - transition options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * TransitionEffect constructor
   *
   * @param { Type } type - transition type
   * @param { Effect } effect - transition options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  constructor(type: Type, effect: Effect);

  /**
   * Set the animation of current transition effect
   *
   * @param { AnimateParam } value - animation parameters
   * @returns { TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the animation of current transition effect
   *
   * @param { AnimateParam } value - animation parameters
   * @returns { TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  animation(value: AnimateParam): TransitionEffect;

  /**
   * Combines another transition effect
   *
   * @param { TransitionEffect } transitionEffect - transition effect which is be combined
   * @returns { TransitionEffect } combined transition effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Combines another transition effect
   *
   * @param { TransitionEffect } transitionEffect - transition effect which is be combined
   * @returns { TransitionEffect } combined transition effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  combine(transitionEffect: TransitionEffect): TransitionEffect;
}

/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
interface PreviewParams {
  /**
   * Define Preview title
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview title
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  title?: string;

  /**
   * Define Preview width
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview width
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  width?: number;

  /**
   * Define Preview height
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview height
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  height?: number;

  /**
   * Define Preview locale
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview locale
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  locale?: string;

  /**
   * Define Preview colorMode
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview colorMode
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  colorMode?: string;

  /**
   * Define Preview deviceType
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview deviceType
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  deviceType?: string;

  /**
   * Define Preview dpi
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview dpi
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  dpi?: number;

  /**
   * Define Preview orientation
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview orientation
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  orientation?: string;

  /**
   * Define Preview roundScreen
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview roundScreen
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  roundScreen?: boolean;
}

/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ItemDragInfo {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the X coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the X coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  x: number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the Y coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the Y coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  y: number;
}

/**
 * Enum of using the effects template mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 14 dynamic
 */
declare enum EffectType {
  /**
   * Define use the effects template defined by the parent effectComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   */
  DEFAULT = 0,
  /**
   * Define use the effects template defined by the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   */
  WINDOW_EFFECT = 1
}

/**
 * Defines the drag status before drag action.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare enum PreDragStatus {
  /**
   * Define the status for user prepare to start long press gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_DETECTING_STATUS = 0,

  /**
   * Define the status for user can start drag action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  READY_TO_TRIGGER_DRAG_ACTION = 1,

  /**
   * Define the status for dragItem lift animation started.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LIFT_STARTED = 2,

  /**
   * Define the status for dragItem lift animation finished.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LIFT_FINISHED = 3,

  /**
   * Define the status for dragItem landing animation started.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LANDING_STARTED = 4,

  /**
   * Define the status for dragItem landing animation finished.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LANDING_FINISHED = 5,

  /**
   * Define the status for user cancel drag action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_CANCELED_BEFORE_DRAG = 6,

  /**
   * Define the status for user to sense the availability of drag in advance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  PREPARING_FOR_DRAG_DETECTION = 7
}

/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface DragItemInfo {
  /**
   * Uses the pixelMap object for drawing.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Uses the pixelMap object for drawing.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Uses the pixelMap object for drawing.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pixelMap?: PixelMap;

  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  builder?: CustomBuilder;

  /**
   * Sets the extra info for drag event.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the extra info for drag event.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the extra info for drag event.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  extraInfo?: string;
}

/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#animateTo
 */
declare function animateTo(value: AnimateParam, event: () => void): void;

/**
 * Define animation functions for immediate distribution.
 *
 * @param { AnimateParam } value - Set animation effect parameters.
 * @param { function } event - Specify the closure function that displays dynamic effects,
 * and the system will automatically insert transition animations for state changes caused by the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare function animateToImmediately(value: AnimateParam, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#vp2px
 */
declare function vp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2vp
 */
declare function px2vp(value: number): number;

/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#fp2px
 */
declare function fp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2fp
 */
declare function px2fp(value: number): number;

/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#lpx2px
 */
declare function lpx2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2lpx
 */
declare function px2lpx(value: number): number;

/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 9
 */
/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare namespace focusControl {
  /**
   * Request focus to the specific component by param: 'id/key'.
   *
   * @param { string } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Request focus to the specific component by param: 'id/key'.
   *
   * @param { string } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Request focus to the specific component by param: 'id/key'.
   *
   * @param { string } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function requestFocus(value: string): boolean;
}

/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { import('../api/@ohos.multimodalInput.pointer').default.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { import('../api/@ohos.multimodalInput.pointer').default.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare type PointerStyle = import('../api/@ohos.multimodalInput.pointer').default.PointerStyle;

/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare namespace cursorControl {

  /**
   * Change the mouse cursor style by param: 'PointerStyle'.
   *
   * @param { PointerStyle } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Change the mouse cursor style by param: 'PointerStyle'.
   *
   * @param { PointerStyle } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function setCursor(value: PointerStyle): void;

  /**
   * Restore the default mouse cursor style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Restore the default mouse cursor style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function restoreDefault(): void;
}

/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface EventTarget {
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  area: Area;

  /**
   * Node id of current target.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  id?: string;
}

/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SourceType {
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Unknown device type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Unknown,

  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Mouse,

  /**
   * The touch screen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The touch screen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The touch screen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  TouchScreen,
}

/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SourceTool {
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Unknown input source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Unknown,

  /**
   * The finger type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The finger type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The finger type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Finger,

  /**
   * The pen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The pen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The pen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Pen,

  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOUSE = 3,

  /**
   * The touchpad type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOUCHPAD = 4,

  /**
   * The joystick type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  JOYSTICK = 5
}

/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum RepeatMode {
  /**
   * Repeat mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Repeat mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The source image's slices are tiled. Tiles beyond the border box will be clipped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Repeat,

  /**
   * Stretch mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Stretch mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The source image's slices are stretched to fill the border box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Stretch,

  /**
   * Round mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Round mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Round mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Round,

  /**
   * Space mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Space mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
   /**
   * The source image's slices are tiled to fill the border box. Extra space will be distributed in between tiles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Space,
}

/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum BlurStyle {
  /**
   * Thin material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Thin material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Thin material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Thin,

  /**
   * Regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Regular,

  /**
   * Thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  Thick,

  /**
   * Defines the thin background material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin background material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BACKGROUND_THIN = 3,

  /**
   * Defines the thin regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BACKGROUND_REGULAR = 4,

  /**
   * Defines the thin thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BACKGROUND_THICK = 5,

  /**
   * Defines the thin ultra thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin ultra thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  BACKGROUND_ULTRA_THICK = 6,

  /**
   * Defines none material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines none material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  NONE = 7,

  /**
   * Defines the ultra thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the ultra thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COMPONENT_ULTRA_THIN = 8,

  /**
   * Defines the thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COMPONENT_THIN = 9,

  /**
   * Defines the regular component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the regular component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COMPONENT_REGULAR = 10,

  /**
   * Defines the thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COMPONENT_THICK = 11,

  /**
   * Defines the ultra thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the ultra thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COMPONENT_ULTRA_THICK = 12
}

/**
 * Enumerates the policies for activating the blur style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum BlurStyleActivePolicy {
  /**
   * The component has the blur effect only when the window is focused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  FOLLOWS_WINDOW_ACTIVE_STATE = 0,

  /**
   * The component always has the blur effect, regardless of whether the window is focused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  ALWAYS_ACTIVE = 1,

  /**
   * The component does not have the blur effect, regardless of whether the window is focused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  ALWAYS_INACTIVE = 2
}

/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ThemeColorMode {
  /**
   * Defines the mode which is follow up with system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the mode which is follow up with system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SYSTEM = 0,

  /**
   * Defines the light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  LIGHT = 1,

  /**
   * Defines the dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  DARK = 2
}

/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum AdaptiveColor {
  /**
   * Defines the fixed value color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the fixed value color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  DEFAULT = 0,

  /**
   * Defines the background average color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the background average color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  AVERAGE = 1
}

/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ModalTransition {
  /**
   * Use default animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Use default animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  DEFAULT = 0,

  /**
   * Use none animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Use none animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  NONE = 1,

  /**
   * Use alpha animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Use alpha animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  ALPHA = 2
}

/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
  /**
   * Defines the policy for activating the blur style.
   *
   * @type { ?BlurStyleActivePolicy }
   * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  policy?: BlurStyleActivePolicy;

  /**
   * Color of the background effect when the window is not focused.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  inactiveColor?: ResourceColor;
}

/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {}


/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BlurOptions {
  /**
   * Fuzzy gray scale parameter.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Fuzzy gray scale parameter.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  grayscale: [number, number];
}

/**
 * Defines the SystemAdaptiveOptions interface
 *
 * @interface SystemAdaptiveOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19 dynamic
 */
declare interface SystemAdaptiveOptions {
  /**
   * Whether to disable system adaptive.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  disableSystemAdaptation?: boolean;
}

/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BlurStyleOptions {
  /**
   * color mode
   *
   * @type { ?ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * color mode
   *
   * @type { ?ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  colorMode?: ThemeColorMode;

  /**
   * adaptive color
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * adaptive color
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Define the scale of blur effect.
   * The range of value is [0, 1]. The larger the value, the more obvious the blurring effect.
   * A value of 0 indicates no blur effect and a value of 1 indicates a complete blur effect.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  scale?: number;

  /**
   * Defines the options of blur
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the options of blur
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blurOptions?: BlurOptions;
}

/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BackgroundEffectOptions {

  /**
   * Define the radius size of BackgroundEffect.The range of this value is [0, ∞)
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the radius size of BackgroundEffect.The range of this value is [0, ∞)
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;

  /**
   * Define the saturation of BackgroundEffect. Value range [0, ∞)
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the saturation of BackgroundEffect. Value range [0, ∞)
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  saturation?: number;

  /**
   * Define the brightness of BackgroundEffect. Value range [0, ∞)
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the brightness of BackgroundEffect. Value range [0, ∞)
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  brightness?: number;

  /**
   * color the brightness of BackgroundEffect.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * color the brightness of BackgroundEffect.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Define the adaptiveColor of BackgroundEffect.
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the adaptiveColor of BackgroundEffect.
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Define the blurOptions of BackgroundEffect.
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,1] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the blurOptions of BackgroundEffect.
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blurOptions?: BlurOptions;

  /**
   * Defines the policy for activating the blur style.
   *
   * @type { ?BlurStyleActivePolicy }
   * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  policy?: BlurStyleActivePolicy;

  /**
   * Color of the background effect when the window is not focused.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  inactiveColor?: ResourceColor;
}

/**
 * Defines the options of ForegroundEffect
 *
 * @interface ForegroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ForegroundEffectOptions {

  /**
   * Define the radius size of ForegroundEffect.The range of this value is [0, ∞)
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;
}

/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PickerTextStyle {
  /**
   * Define the text color of picker.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the text color of picker.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  color?: ResourceColor;

  /**
   * Define the text font of picker.
   * Only support size and weight.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the text font of picker.
   * Only support size and weight.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  font?: Font;
}

/**
 * Provide an interface for the button style of picker
 *
 * @interface PickerDialogButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface PickerDialogButtonStyle {
  /**
   * Describes the button style.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type?: ButtonType;

  /**
   * Describes the button style.
   *
   * @type { ?ButtonStyleMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: ButtonStyleMode;

  /**
   * Describes the button role.
   *
   * @type { ?ButtonRole }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  role?: ButtonRole;

  /**
   * Describes the button text size.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: Length;

  /**
   * Describes the button text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Describes the button font weight.
   *
   * @type { ?(FontWeight | number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight?: FontWeight | number | string;

  /**
   * Describes the button font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontStyle?: FontStyle;

  /**
   * Describes the button font family.
   *
   * @type { ?(Resource | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFamily?: Resource | string;

  /**
   * Describes the button background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Describes the button border radius.
   *
   * @type { ?(Length | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius?: Length | BorderRadiuses;

  /**
   * Define whether the button default to responding to the Enter key
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  primary?: boolean;
}

/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ShadowType {
  /**
   * Define a color type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define a color type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  COLOR = 0,

  /**
   * Define a blur type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define a blur type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  BLUR = 1
}

/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ShadowOptions {
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  radius: number | Resource;

  /**
   * Define the type of shadow
   *
   * @type { ?ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the type of shadow
   *
   * @type { ?ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type?: ShadowType;

  /**
   * Define the color of shadow
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the color of shadow
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the color of shadow
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the color or the color strategy of shadow
   *
   * @type { ?(Color | string | Resource| ColoringStrategy) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  color?: Color | string | Resource | ColoringStrategy;

  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  offsetX?: number | Resource;

  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  offsetY?: number | Resource;

  /**
   * Define whether the shadow should fill the area
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define whether the shadow should fill the area
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fill?: boolean;
}

/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ShadowStyle {
  /**
   * Defines the super small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the super small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_XS = 0,

  /**
   * Defines the small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_SM = 1,

  /**
   * Defines the medium default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the medium default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_MD = 2,

  /**
   * Defines the large default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the large default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_LG = 3,

  /**
   * Defines the small floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the small floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_FLOATING_SM = 4,

  /**
   * Defines the medium floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the medium floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_FLOATING_MD = 5
}

/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface MultiShadowOptions {
  /**
   * Current shadow radius.
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Current shadow radius.
   *
   * @type { ?(number | Resource) }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  radius?: number | Resource;

  /**
   * Current shadow offsetX.
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Current shadow offsetX.
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  offsetX?: number | Resource;

  /**
   * Current shadow offsetY
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Current shadow offsetY
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  offsetY?: number | Resource;
}

/**
 * Enumerates the safe area types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the safe area types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SafeAreaType {
  /**
   * Default area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Default area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SYSTEM = 0,

  /**
   * Notch or punch hole.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Notch or punch hole.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  CUTOUT = 1,

  /**
   * Soft keyboard area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Soft keyboard area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  KEYBOARD = 2
}

/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SafeAreaEdge {
  /**
   * Top edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Top edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  TOP = 0,

  /**
   * Bottom edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Bottom edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  BOTTOM = 1,

  /**
   * Start edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Start edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  START = 2,

  /**
   * End edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * End edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  END = 3
}

/**
 * Enumerates the safe area types can be ignored.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LayoutSafeAreaType {
  /**
   * Default area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SYSTEM = 0,
}

/**
 * Enumerates the safe area edges can be ignored.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LayoutSafeAreaEdge {
  /**
   * Top edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 0,

  /**
   * Bottom edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 1,

  /**
   * Start edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  START = 2,

  /**
   * End edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  END = 3,

  /**
   * Vertical edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  VERTICAL = 4,

  /**
   * Horizontal edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HORIZONTAL = 5,

  /**
   * All edges of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ALL = 6,
}

/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SheetSize {
  /**
   * Defines the sheet size medium height type. The height is half the screen height
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the sheet size medium height type. The height is half the screen height
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  MEDIUM = 0,

  /**
   * Defines the sheet size large height type. The height is almost screen height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the sheet size large height type. The height is almost screen height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  LARGE = 1,

  /**
   * Defines the sheet size fit content height type. The height fit content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the sheet size fit content height type. The height fit content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FIT_CONTENT = 2
}

/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BaseEvent {
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  target: EventTarget;

  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  timestamp: number;

  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  source: SourceType;

  /**
   * the Horizontal axis coordinate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  axisHorizontal ?: number;

  /**
   * the Vertical axis coordinate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  axisVertical ?: number;

  /**
   * Touch pressure.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Touch pressure.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Touch pressure.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  pressure: number;

  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  tiltX: number;

  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  tiltY: number;

  /**
   * Indicates the angle at which the stylus rotates around the Z-axis.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 17 dynamic
   */
  rollAngle?: number;

  /**
   * The event tool type info.
   *
   * @type { SourceTool }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The event tool type info.
   *
   * @type { SourceTool }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The event tool type info.
   *
   * @type { SourceTool }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  sourceTool: SourceTool;

  /**
   * Obtains the pressed status of modifier keys. The following modifier keys are supported: 'Ctrl'|'Alt'|'Shift'.
   *
   * @param { Array<string> } keys - indicate the keys of the ModifierKey.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Indicates the ID of the input device that triggers the current event.
   *
   * @type { ?number } [deviceId] The ID of the input device that triggers the current event
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  deviceId?: number;

  /**
   * Indicates the screen ID on which the event occurred.
   *
   * @type { ?number } [targetDisplayId] The screen ID on which the event occurred.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  targetDisplayId?: number;
}

/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BorderImageOption {
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  slice?: Length | EdgeWidths | LocalizedEdgeWidths,

  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  repeat?: RepeatMode,

  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  source?: string | Resource | LinearGradient,

  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Length | EdgeWidths | LocalizedEdgeWidths,

  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outset?: Length | EdgeWidths | LocalizedEdgeWidths,

  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  fill?: boolean;
}

/**
 * Defines the policy of Layout
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare class LayoutPolicy {
  /**
   * The component fills its parent which means its size is as large as its parent.
   *
   * @type { LayoutPolicy }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  static readonly matchParent: LayoutPolicy;

  /**
   * The component fills its content which means its size is as large as its children but it is constained by its parent.
   *
   * @type { LayoutPolicy }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly wrapContent: LayoutPolicy;

  /**
   * The component fills its content which means its size is as large as its children.
   *
   * @type { LayoutPolicy }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly fixAtIdealSize: LayoutPolicy;
}

/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ClickEvent extends BaseEvent {
  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the click point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the click point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the click point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the click point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ClickEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ClickEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  y: number;

  /**
   * Type of the touch hand.
   *
   * @type { InteractionHand }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * Prevent the default function.
   *
   * @type { function }
   * @throws { BusinessError } 100017 - Component does not support prevent function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preventDefault: () => void;
}

/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11 dynamic
 */
declare interface HoverEvent extends BaseEvent {
  /**
   * X coordinate of the hover point relative to the left edge of the hover element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  x?: number;

  /**
   * Y coordinate of the hover point relative to the upper edge of the hover element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  y?: number;

  /**
   * X coordinate of the hover point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  windowX?: number;

  /**
   * Y coordinate of the hover point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  windowY?: number;

  /**
   * X coordinate of the hover point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  displayX?: number;

  /**
   * Y coordinate of the hover point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  displayY?: number;

  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * The blocking hover event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The blocking hover event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  stopPropagation: () => void;
}

/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11 dynamic
 */
declare interface MouseEvent extends BaseEvent {
  /**
   * Mouse button of the click event.
   *
   * @type { MouseButton }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Mouse button of the click event.
   *
   * @type { MouseButton }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  button: MouseButton;

  /**
   * Mouse action of the click event.
   *
   * @type { MouseAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Mouse action of the click event.
   *
   * @type { MouseAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  action: MouseAction;

  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead MouseEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead MouseEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  y: number;

  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  stopPropagation: () => void;

  /**
   * X axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
   * the edge of the screen, the value may be less than the difference of the X coordinate reported twice.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  rawDeltaX?: number;

  /**
   * Y axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
   * the edge of the screen, the value may be less than the difference of the Y coordinate reported twice.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  rawDeltaY?: number;

  /**
   * The pressed buttons of the mouse event.
   *
   * @type { ?MouseButton[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  pressedButtons?: MouseButton[];
}

/**
 * The accessibility hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @typedef AccessibilityHoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AccessibilityHoverEvent extends BaseEvent {
  /**
   * Type of the accessibility hover event.
   *
   * @type { AccessibilityHoverType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  type: AccessibilityHoverType;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;
}

/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface TouchObject {
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type: TouchType;

  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  id: number;

  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TouchObject#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TouchObject#windowY
   */
  screenY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  y: number;

  /**
   * Type of the touch hand.
   *
   * @type { InteractionHand }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * Time stamp when the touch point is pressed.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pressedTime?: number;
  /**
   * Pressure of a specific touch point.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pressure?: number;

  /**
   * Width of the contact area when touch is pressed of a specific touch point.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  width?: number;

  /**
   * Height of the contact area when touch is pressed of a specific touch point.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  height?: number;
}

/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface HistoricalPoint {
  /**
   * The base touchObject information of historicalPoint
   *
   * @type { TouchObject }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The base touchObject information of historicalPoint
   *
   * @type { TouchObject }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  touchObject: TouchObject;

  /**
   * Contact area between the finger pad and the screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Contact area between the finger pad and the screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  size: number;

  /**
   * Pressure of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pressure of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  force: number;

  /**
   * Timestamp of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Timestamp of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  timestamp: number;
}

/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface TouchEvent extends BaseEvent {
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type: TouchType;

  /**
   * All finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * All finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * All finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  touches: TouchObject[];

  /**
   * Indicates the current changed finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates the current changed finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the current changed finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  changedTouches: TouchObject[];

  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  stopPropagation: () => void;

  /**
   * Get the historical points.
   *
   * @returns { Array<HistoricalPoint> } - return all historical points.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the historical points.
   *
   * @returns { Array<HistoricalPoint> } - return all historical points.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getHistoricalPoints(): Array<HistoricalPoint>;

  /**
   * Prevent the default function.
   *
   * @type { function }
   * @throws { BusinessError } 100017 - Component does not support prevent function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preventDefault: () => void;
}

/**
 * The axis event triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface AxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 17 dynamic
 */
declare interface AxisEvent extends BaseEvent {
  /**
   * Axis action of the axis event.
   *
   * @type { AxisAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  action: AxisAction;

  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the mouse cursor relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the mouse cursor relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the mouse cursor relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the mouse cursor relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the mouse cursor relative to the left edge of the axis event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  x: number;

  /**
   * Y coordinate of the mouse cursor relative to the upper edge of the axis event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  y: number;

  /**
   * Scroll step configuration which is only mouse wheel has.
   *  *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  scrollStep?: number;

  /**
   * Active event bubbling.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  propagation: Callback<void>;

  /**
   * Obtains the value of the horizontal scroll axis for this axis event.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  getHorizontalAxisValue(): number;

  /**
   * Obtains the value of the vertical scroll axis for this axis event.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  getVerticalAxisValue(): number;
}

/**
 * Defines the callback type used in onSizeChange.
 * The value of oldValue is last size of the component.
 * The value of newValue is new size of the component.
 *
 * @typedef { function } SizeChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;

/**
 * Defines the callback type used in onGestureRecognizerJudgeBegin.
 *
 * @typedef { function } GestureRecognizerJudgeBeginCallback
 * @param { BaseGestureEvent } event - the event information
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @returns { GestureJudgeResult } the gesture judge result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the callback type used in onGestureRecognizerJudgeBegin.
 *
 * @typedef { function } GestureRecognizerJudgeBeginCallback
 * @param { BaseGestureEvent } event - the event information
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @param { Array<TouchRecognizer> } [touchRecognizers] - the touch recognizers of the component on the response chain
 * @returns { GestureJudgeResult } the gesture judge result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult;

/**
 * Defines the callback type used in shouldBuiltInRecognizerParallelWith.
 *
 * @typedef { function } ShouldBuiltInRecognizerParallelWithCallback
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } others - the gesture recognizers of the component on the response chain
 * @returns { GestureRecognizer } gesture recognizer of the component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;

/**
 * Defines the finish callback type used in transition.
 * 
 * @typedef { function } TransitionFinishCallback
 * @param { boolean } transitionIn - a boolean value indicates whether it is the callback of transitionIn or transitionOut.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type TransitionFinishCallback = (transitionIn: boolean) => void;

/**
 * Defines the callback type used in onTouchTestDone.
 * When the user touch down, the system performs hit test process to collect all gesture recognizers
 * based on the press location, when the collection is completed, and before gesture begin to be recognizing,
 * the callback is triggered, you can get all recognizer's information from this callback.
 *
 * @typedef { function } TouchTestDoneCallback
 * @param { BaseGestureEvent } event - the event information, basicly is the touch down information
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void;

/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the PixelMap type object for ui component.
 *
 * @typedef { import('../api/@ohos.multimedia.image').default.PixelMap } PixelMap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare type PixelMap = import('../api/@ohos.multimedia.image').default.PixelMap;

/**
 * pixelmap object with release function.
 *
 * @interface PixelMapMock
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamic
 */
declare interface PixelMapMock {
  /**
   * release function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamic
   */
  release(): void;
}

/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum DragBehavior {
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  COPY = 0,
  /**
   * If drag use move event, then set DragBehavior.MOVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag use move event, then set DragBehavior.MOVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If drag use move event, then set DragBehavior.MOVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  MOVE = 1
}

/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare type UnifiedData = import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData;

/**
 * Import the Summary type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the Summary type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11 dynamic
 */
declare type Summary = import('../api/@ohos.data.unifiedDataChannel').default.Summary;

/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11 dynamic
 */
declare type UniformDataType = import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType;

/**
 * Import the GetDataParams type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.GetDataParams } GetDataParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type DataSyncOptions = import('../api/@ohos.data.unifiedDataChannel').default.GetDataParams;


/**
 * The type for SpringLoadingContext, see the detailed description in dragController.
 *
 * @typedef {import('../api/@ohos.arkui.dragController').default.SpringLoadingContext} SpringLoadingContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type SpringLoadingContext = import('../api/@ohos.arkui.dragController').default.SpringLoadingContext;
 
/**
 * The type for DragSpringLoadingConfiguration, see the detailed description in dragController.
 *
 * @typedef {import('../api/@ohos.arkui.dragController').default.DragSpringLoadingConfiguration} DragSpringLoadingConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20 dynamic
 */
declare type DragSpringLoadingConfiguration = import('../api/@ohos.arkui.dragController').default.DragSpringLoadingConfiguration;

/**
 * Import the DataLoadParams type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.DataLoadParams } DataLoadParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type DataLoadParams = import('../api/@ohos.data.unifiedDataChannel').default.DataLoadParams;

/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum DragResult {
  /**
   * If the drag is not finished and the result is not set by receiver, return DragResult.UNKNOWN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  UNKNOWN = -1,
  /**
   * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DRAG_SUCCESSFUL = 0,
  /**
   * If drag fail, return DragResult.DRAG_FAILED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag fail, return DragResult.DRAG_FAILED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If drag fail, return DragResult.DRAG_FAILED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DRAG_FAILED = 1,
  /**
   * If drag action cancel, return DragResult.DRAG_CANCELED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag action cancel, return DragResult.DRAG_CANCELED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  DRAG_CANCELED = 2,
  /**
   * If node allow drop in, return DragResult.DROP_ENABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If node allow drop in, return DragResult.DROP_ENABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  DROP_ENABLED = 3,
  /**
   * If node don't allow drop in, return DragResult.DROP_DISABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If node don't allow drop in, return DragResult.DROP_DISABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  DROP_DISABLED = 4
}

/**
 * Enum for BlendMode.
 * Blend modes for compositing current component
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for BlendMode.
 * Blend modes for compositing current component
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BlendMode {
  /**
   * Hybrid mode does not take effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Hybrid mode does not take effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,
  /**
   * Clear destination color covered by the source to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Clear destination color covered by the source to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  CLEAR = 1,
  /**
   * r = s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC = 2,
  /**
   * r = d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST = 3,
  /**
   * r = s + (1 - sa) * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s + (1 - sa) * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_OVER = 4,
  /**
   * r = d + (1 - da) * s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d + (1 - da) * s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_OVER = 5,
  /**
   * r = s * da
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * da
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_IN = 6,
  /**
   * r = d * sa
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d * sa
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_IN = 7,
  /**
   * r = s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_OUT = 8,
  /**
   * r = d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_OUT = 9,
  /**
   * r = s * da + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * da + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_ATOP = 10,
  /**
   * r = d * sa + s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d * sa + s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_ATOP = 11,
  /**
   * r = s * (1 - da) + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * (1 - da) + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  XOR = 12,
  /**
   * r = min(s + d, 1)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = min(s + d, 1)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  PLUS = 13,
  /**
   * r = s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  MODULATE = 14,
  /**
   * r = s + d - s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s + d - s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SCREEN = 15,
  /**
   * multiply or screen, depending on destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * multiply or screen, depending on destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAY = 16,
  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DARKEN = 17,
  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  LIGHTEN = 18,
  /**
   * brighten destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * brighten destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COLOR_DODGE = 19,
  /**
   * darken destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * darken destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COLOR_BURN = 20,
  /**
   * multiply or screen, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * multiply or screen, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  HARD_LIGHT = 21,
  /**
   * lighten or darken, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * lighten or darken, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SOFT_LIGHT = 22,
  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DIFFERENCE = 23,
  /**
   * rc = s + d - two(s * d), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - two(s * d), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  EXCLUSION = 24,
  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  MULTIPLY = 25,
  /**
   * hue of source with saturation and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * hue of source with saturation and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  HUE = 26,
  /**
   * saturation of source with hue and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * saturation of source with hue and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SATURATION = 27,
  /**
   * hue and saturation of source with luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * hue and saturation of source with luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COLOR = 28,
  /**
   * luminosity of source with hue and saturation of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * luminosity of source with hue and saturation of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  LUMINOSITY = 29
}

/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BlendApplyType {
  /**
   * Blend view's content in sequence over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Blend view's content in sequence over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  FAST = 0,

  /**
   * Composite this views's contents into an
   * offscreen image and then blend over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Composite this views's contents into an
   * offscreen image and then blend over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  OFFSCREEN = 1
}

/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface DragEvent {
  /**
   * X coordinate of the point relative to the global display.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalDisplayX(): number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalDisplayY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getDisplayX(): number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getDisplayY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getWindowX(): number;

  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getWindowY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window. in vp.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead DragEvent#getWindowX
   */
  getX(): number;

  /**
   * Y coordinate of the touch point relative to the left edge of the current window. in vp.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead DragEvent#getWindowY
   */
  getY(): number;

  /**
   * If copy is COPY, this DragEvent is a copy event.
   * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
   * @default COPY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If copy is COPY, this DragEvent is a copy event.
   * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
   * @default COPY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If copy is COPY, this DragEvent is a copy event.
   * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
   * @default COPY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dragBehavior: DragBehavior;

  /**
   * If useCustomDropAnimation is true, System will not use drop animation.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If useCustomDropAnimation is true, System will not use drop animation.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  useCustomDropAnimation: boolean;

  /**
   * Set dragData into DragEvent.
   *
   * @param { UnifiedData } unifiedData - dragData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set dragData into DragEvent.
   *
   * @param { UnifiedData } unifiedData - dragData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  setData(unifiedData: UnifiedData): void;

  /**
   * Get dragData from DragEvent.
   *
   * @returns { UnifiedData } - get dragData.
   * @throws { BusinessError } 190001 - Data not found.
   * @throws { BusinessError } 190002 - Data error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get dragData from DragEvent.
   *
   * @returns { UnifiedData } - get dragData.
   * @throws { BusinessError } 190001 - Data not found.
   * @throws { BusinessError } 190002 - Data error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getData(): UnifiedData;

  /**
   * Get dragData summary from DragEvent.
   *
   * @returns { Summary } - get Summary Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get dragData summary from DragEvent.
   *
   * @returns { Summary } - get Summary Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getSummary(): Summary;

  /**
   * Set dragEvent result to DragEvent.
   *
   * @param { DragResult } dragResult - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set dragEvent result to DragEvent.
   *
   * @param { DragResult } dragResult - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Set dragEvent result to DragEvent.
   *
   * @param { DragResult } dragResult - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setResult(dragResult: DragResult): void;

  /**
   * Get dragEvent result from DragEvent.
   *
   * @returns { DragResult } - dragResult Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get dragEvent result from DragEvent.
   *
   * @returns { DragResult } - dragResult Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get dragEvent result from DragEvent.
   *
   * @returns { DragResult } - dragResult Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getResult(): DragResult;

  /**
   * Get the rectangle of drag window.
   *
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the rectangle of drag window.
   *
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get the rectangle of drag window.
   *
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getPreviewRect(): Rectangle;

  /**
   * Get the x axis velocity of drag gesture.
   *
   * @returns { number } - get x axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the x axis velocity of drag gesture.
   *
   * @returns { number } - get x axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getVelocityX(): number;

  /**
   * Get the y axis velocity of drag gesture.
   *
   * @returns { number } - get y axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the y axis velocity of drag gesture.
   *
   * @returns { number } - get y axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getVelocityY(): number;

  /**
   * Get the velocity of drag gesture.
   *
   * @returns { number } - get velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the velocity of drag gesture.
   *
   * @returns { number } - get velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getVelocity(): number;

  /**
   * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the keys of the ModifierKey.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  /**
   * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the keys of the ModifierKey.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Setup one drop animation execution callback, which will be triggered by system when user drops.
   * Use this way to implement the custom drop animation instead of doing it in onDrop, as the system
   * will decide when to trigger the callback during the drop handling.
   * [Note]:
   *   1. Please set useCustomDropAnimation to true as well when using this method.
   *   2. Do not implement the animation no-related logics in the callback.
   *
   * @param { Callback<void> } customDropAnimation - the custom drop animation function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  executeDropAnimation(customDropAnimation: Callback<void>): void;

  /**
   * Request the drag data to be synchronized to caller, can be notified with the synchronization progress.
   * Only can be used in onDrop event processing.
   *
   * @param { DataSyncOptions } options - the data sync options.
   * @returns { string } The data key returned by system, which can be used as the identify of the request.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190003 - Operation not allowed for current phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  startDataLoading(options: DataSyncOptions): string;

  /**
   * Retrieve the bundle information of the drag source application.
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  getDragSource(): string;

  /**
   * Call this method to determine whether the current drag operation is a cross-device drag.
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  isRemote(): boolean;

  /**
   * Get the id of display which the drag event is occuring on.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getDisplayId(): number;
  
  /**
   * Use this method to provide a data representation to the system instead of directly providing a complete data
   * object. When the user releases the drag over the target application, the system will use this data
   * representation to request the actual data from drag source. This approach significantly improves the
   * efficiency of initiating drag operations for large volumes of data and enhances the effectiveness of data
   * reception. It is recommended to use this method instead of the setData method.
   *
   * @param { DataLoadParams } dataLoadParams The data backend representation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  setDataLoadParams(dataLoadParams: DataLoadParams): void;
  
  /**
   * Enable the internal drop animation, which is only avaiable for system applications.
   *
   * The animations' configuration need to be provided through the input paramerter, and it is a string in json format.
   *
   * This method can only be called in onDrop, and please do not use custom drop animation after this method,
   * as it will reset the calling result, and use custom drop animation insteadly.
   *
   * @param { string } configuration - the internal drop animation's configuration.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 190003 - Operation not allowed for current phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20 dynamic
   */
  enableInternalDropAnimation(configuration: string): void;
}

/**
 * The event callback function for drag and drop common interfaces.
 * @typedef { function } OnDragEventCallback
 * @param { DragEvent } event - the event object indicating current drag status.
 * @param { string } [extraParams] - extra information set by user or system.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;

/**
 * Defines the options for the drop handling.
 *
 * @interface DropOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface DropOptions {

  /**
   * Indicating to disable the UDMF data prefetch action by system or not.
   * The system will try to fetch data before calling user's onDrop for some situation,
   * it will retry to get data until the max time limit (2.4s for now) reaches,
   * this's useful for the cross device draging operation, as the system helps to eliminate
   * the communication instability, but it's redundant for startDataLoading method, as this
   * method will take care the data fetching with asynchronous mechanism, so must set this
   * field to true if using startDataLoading in onDrop to avoid the data is fetched before
   * onDrop executing unexpectedly.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  disableDataPrefetch?: boolean;
}

/**
 * Import the IntentionCode type object for IntentionCode.
 *
 * @typedef { import('../api/@ohos.multimodalInput.intentionCode').IntentionCode } IntentionCode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the IntentionCode type object for IntentionCode.
 *
 * @typedef { import('../api/@ohos.multimodalInput.intentionCode').IntentionCode } IntentionCode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11 dynamic
 */
declare type IntentionCode = import('../api/@ohos.multimodalInput.intentionCode').IntentionCode;

/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface KeyEvent {
  /**
   * Type of a key.
   *
   * @type { KeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of a key.
   *
   * @type { KeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of a key.
   *
   * @type { KeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type: KeyType;

  /**
   * Key code of a key
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Key code of a key
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Key code of a key
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keyCode: number;

  /**
   * Key value of a key.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Key value of a key.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Key value of a key.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keyText: string;

  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   *
   * @type { KeySource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   *
   * @type { KeySource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   *
   * @type { KeySource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keySource: KeySource;

  /**
   * Indicates the ID of the input device that triggers the current key.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates the ID of the input device that triggers the current key.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the ID of the input device that triggers the current key.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  deviceId: number;

  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  metaKey: number;

  /**
   * Timestamp when the key was pressed.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Timestamp when the key was pressed.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Timestamp when the key was pressed.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  timestamp: number;

  /**
   * Block event bubbling.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Block event bubbling.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Block event bubbling.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  stopPropagation: () => void;

  /**
   * Intention code of a key or modifier keys.
   *
   * @type { IntentionCode }
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Intention code of a key or modifier keys.
   *
   * @type { IntentionCode }
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  intentionCode: IntentionCode;

  /**
   * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the modifier keys.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  /**
   * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the modifier keys.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Unicode of a key
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   */
  unicode?: number;

  /**
   * Whether Num Lock is on
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  isNumLockOn?: boolean;

  /**
   * Whether Caps Lock is on
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  isCapsLockOn?: boolean;

  /**
   * Whether Scroll Lock is on
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  isScrollLockOn?: boolean;
}

/**
 * Focus axis event object description.
 *
 * @extends BaseEvent
 * @interface FocusAxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15 dynamic
 */
declare interface FocusAxisEvent extends BaseEvent {
  /**
   * The axis values of axis event.
   *
   * @type { Map<AxisModel, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  axisMap: Map<AxisModel, number>;

  /**
   * The blocking event pops up.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  stopPropagation: Callback<void>;
}

/**
 * CrownEvent object description
 *
 * @interface CrownEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamic
 */
declare interface CrownEvent {
  /**
   *The timestamp of the rotating crown event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  timestamp: number;

  /**
   * The angular velocity of a rotating crown.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  angularVelocity: number;

  /**
   * The rotation angle of the rotating crown.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  degree: number;

  /**
   * The behavior of rotating crown.
   *
   * @type { CrownAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  action: CrownAction;

  /**
   * The blocking event pops up.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  stopPropagation: Callback<void>;
}

/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BindOptions {
  /**
   * Defines the background color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the background color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Callback function when overlay interface appears
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when overlay interface appears
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onAppear?: () => void;

  /**
   * Callback function when overlay interface exits
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when overlay interface exits
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onDisappear?: () => void;

  /**
   * Callback function before overlay animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: () => void;

  /**
   * Callback function before overlay popAnimation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: () => void;
}

/**
 * Component content cover dismiss
 *
 * @interface DismissContentCoverAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissContentCoverAction {
  /**
   * Defines content cover dismiss function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Defines content cover dismiss reason
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ContentCoverOptions extends BindOptions {
  /**
   * Defines transition type
   *
   * @type { ?ModalTransition }
   * @default ModalTransition.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines transition type
   *
   * @type { ?ModalTransition }
   * @default ModalTransition.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  modalTransition?: ModalTransition;

  /**
   * Callback function when the content cover interactive dismiss
   *
   * @type { ?Callback<DismissContentCoverAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissContentCoverAction>;

  /**
   * Defines transition effect param
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Set contentCover content adapts to safeArea.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableSafeArea?: boolean;
}

/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SheetTitleOptions {
  /**
   * Defines title text
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines title text
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  title: ResourceStr;

  /**
   * Defines subtitle text
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines subtitle text
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  subtitle?: ResourceStr;
}

/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SheetType {
  /**
   * Defines bottom sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines bottom sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 0,

  /**
   * Defines center sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines center sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CENTER = 1,

  /**
   * Defines popup sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  POPUP = 2,

  /**
   * Defines side sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SIDE = 3,
}

/**
 * Define the display mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SheetMode {
  /**
   * Sheet displays above all page levels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAY = 0,

  /**
   * Sheet displays within the current page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  EMBEDDED = 1
}

/**
 * Define the scroll size mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ScrollSizeMode {
  /**
   * Sheet change scroll size after the slide ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FOLLOW_DETENT = 0,

  /**
   * Sheet change scroll size during the sliding process.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CONTINUOUS = 1
}

/**
 * Define the mode of sheet how to avoid keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare enum SheetKeyboardAvoidMode {
  /**
   * Sheet will not aovid keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  NONE = 0,

  /**
   * Firstly sheet will avoid keyboard by changing its height.
   * And then sheet will avoid by resizing after reaching its maximum height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  TRANSLATE_AND_RESIZE = 1,

  /**
   * Sheet will only avoid keyboard by resizing the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  RESIZE_ONLY = 2,

  /**
   * Firstly sheet will avoid keyboard by changing its height.
   * And then sheet will avoid keyboard by scrolling after reaching its maximum height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  TRANSLATE_AND_SCROLL = 3,

  /**
   * Popup sheet will avoid keyboard by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  POPUP_SHEET = 4
}

/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SheetDismiss {
  /**
   * Defines sheet dismiss function
   *
   * @type { function  }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines sheet dismiss function
   *
   * @type { function  }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: () => void;
}

/**
 * Component sheet dismiss
 *
 * @interface DismissSheetAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissSheetAction {

  /**
   * Defines sheet dismiss function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Dismiss reason type.
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Defines sheet spring back action
 *
 * @interface SpringBackAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SpringBackAction {
  /**
   * Defines spring back function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  springBack: Callback<void>;
}

/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface SheetOptions extends BindOptions {
  /**
   * Defines sheet height
   *
   * @type { ?(SheetSize | Length) }
   * @default Sheet.LARGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines sheet height
   *
   * @type { ?(SheetSize | Length) }
   * @default Sheet.LARGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  height?: SheetSize | Length;

  /**
   * Defines whether the control bar is displayed.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines whether the control bar is displayed.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  dragBar?: boolean;

  /**
   * Defines whether the sheet dragbar is floating, when it's displayed.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableFloatingDragBar?: boolean;

  /**
   * Mask color of the sheet.
   * 
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines sheet maskColor
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  maskColor?: ResourceColor;

  /**
   * Defines sheet detents
   *
   * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines sheet detents
   *
   * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  detents?: [(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?];

  /**
   * Defines sheet background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines sheet background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blurStyle?: BlurStyle;

  /**
   * Defines whether the close icon is displayed
   *
   * @type { ?(boolean | Resource) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines whether the close icon is displayed
   *
   * @type { ?(boolean | Resource) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * Defines the sheet prefer type
   *
   * @type { ?(SheetType.CENTER | SheetType.POPUP) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the sheet prefer type
   *
   * @type { ?SheetType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preferType?: SheetType;

  /**
   * Defines the sheet title
   *
   * @type { ?(SheetTitleOptions | CustomBuilder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the sheet title
   *
   * @type { ?(SheetTitleOptions | CustomBuilder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  title?: SheetTitleOptions | CustomBuilder;

  /**
   * Callback function when the sheet interactive dismiss
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback function when the sheet interactive dismiss
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shouldDismiss?: (sheetDismiss: SheetDismiss) => void;

  /**
   * Callback function when the sheet will dismiss
   *
   * @type { ?Callback<DismissSheetAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissSheetAction>;

  /**
   * Sheet springs back callback when dismiss
   *
   * @type { ?Callback<SpringBackAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;

  /**
   * Set whether interaction is allowed outside the sheet
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set whether interaction is allowed outside the sheet
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableOutsideInteractive?: boolean;

  /**
   * Defines the sheet's width.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * Defines the sheet's border width.
   *
   * @type { ?(Dimension | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * Defines the sheet's border color.
   *
   * @type { ?(ResourceColor | EdgeColors | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * Defines the sheet's border style.
   *
   * @type { ?(BorderStyle | EdgeStyles) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * Defines the sheet's shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Called when height of the sheet is changed
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onHeightDidChange?: Callback<number>;

  /**
   * Determine the level sheet shows, whether sheet should be displayed within the page
   *
   * @type { ?SheetMode }
   * @default SheetMode.OVERLAY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mode?: SheetMode;

  /**
   * Determine sheet scroll size mode.
   *
   * @type { ?ScrollSizeMode }
   * @default ScrollSizeMode.FELLOW_DETEND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  scrollSizeMode?: ScrollSizeMode;

  /**
   * Called when detents of the sheet changed
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetentsDidChange?: Callback<number>;

  /**
   * Called when width of the sheet changed
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWidthDidChange?: Callback<number>;

  /**
   * Called when the sheet type changed
   *
   * @type { ?Callback<SheetType> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTypeDidChange?: Callback<SheetType>;

  /**
   * The UIContext that the sheet belongs to
   *
   * @type { ?UIContext }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  uiContext?: UIContext;

  /**
   * Determine the mode of sheet how to avoid keyboard.
   *
   * @type { ?SheetKeyboardAvoidMode }
   * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  keyboardAvoidMode?: SheetKeyboardAvoidMode;

  /**
   * Defines whether to respond to the hover mode.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Defines the sheet's display area in hover mode.
   *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Sets the position offset of the bindSheet.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 14 dynamic
   */
  offset?: Position;

  /**
   * Sets whether the sheet edge has spring effect.
   *
   * @type { ?number }
   * @default 3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectEdge?: number;

  /**
   * Defines sheet radius
   *
   * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Select a detent from detents property
   *
   * @type { ?(SheetSize | Length) }
   * @default detents[0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  detentSelection?: SheetSize | Length;

  /**
   * Whether to display in the sub window 
   *
   * @type { ?boolean } 
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * The placement of popup sheet type.
   * Supports all positions defined in Placement.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  placement?: Placement;

  /**
   * placement On target node
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  placementOnTarget?: boolean;
}

/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface StateStyles {
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  normal?: any;

  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  pressed?: any;

  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  disabled?: any;

  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  focused?: any;

  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  clicked?: any;

  /**
   * Defines selected state styles.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines selected state styles.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  selected?: object;
}

/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PopupMessageOptions {
  /**
   * Sets the color of popup text.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the color of popup text.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  textColor?: ResourceColor;

  /**
   * Sets the font of popup text.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the font of popup text.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  font?: Font;
}

/**
 * Dismiss reason type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DismissReason {
  /**
   * Press back
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRESS_BACK = 0,

  /**
   * Touch component outside
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOUCH_OUTSIDE = 1,

  /**
   * Close button
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CLOSE_BUTTON = 2,

  /**
   * Slide down
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SLIDE_DOWN = 3,

  /**
   * Slide, not slide down.
   * Default means slide right, after mirroring it means slide left.
   * Choosing to slide left or slide right is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SLIDE = 4
}

/**
 * Component popup dismiss
 *
 * @interface DismissPopupAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissPopupAction {
  /**
   * Defines popup dismiss function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Defines popup dismiss reason
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Popup state change param
 *
 * @interface PopupStateChangeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PopupStateChangeParam {
  /**
   * is Visible.
   * Anonymous Object Rectification.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isVisible: boolean;
}

/**
 * Popup state change callback
 *
 * @typedef { function } PopupStateChangeCallback
 * @param { PopupStateChangeParam } event - The parameter of state change callback.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;

/**
 * Popup mask type
 *
 * @interface PopupMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PopupMaskType {
  /**
   * Color.
   * Anonymous Object Rectification.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color: ResourceColor;
}

/**
 * Popup border LinearGradient
 *
 * @interface PopupBorderLinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface PopupBorderLinearGradient {
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  direction?: GradientDirection;

  /**
   * Defines color description for gradients.
   * number: The position of the color stop. The value range is 0 to 1.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  colors: Array<[ResourceColor, number]>;
}

/**
 * Popup common options
 *
 * @interface PopupCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PopupCommonOptions {
  /**
   * placement of popup.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  placement?: Placement;

  /**
   * Set the background color of the popup.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupColor?: ResourceColor;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableArrow?: boolean;

  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoCancel?: boolean;

  /**
   * on State Change
   *
   * @type { ?PopupStateChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onStateChange?: PopupStateChangeCallback;

  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | PopupMaskType) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mask?: boolean | PopupMaskType;

  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  targetSpace?: Length;

  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  offset?: Position;

  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  width?: Dimension;

  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  radius?: Dimension;

  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  focusable?: boolean;

  /**
   * Defines the transition effect of popup opening and closing
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss.
   * Use boolean to respond all interactive dismiss event. Use Callback to customize which event should be responded.
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

  /**
   * Determine if it is compatible popup's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Determine if popup can follow the target node when it has rotation or scale.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  followTransformOfTarget?: boolean;

  /**
   * Determine if popup can avoid the target when the display space is insufficient.
   *
   * @type { ?AvoidanceMode }
   * @default AvoidanceMode.COVER_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  avoidTarget?: AvoidanceMode;

  /**
   * The width of popup's outline.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension;

  /**
   * The width of popup's border.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderWidth?: Dimension;
    
  /**
   * The LinearGradient of popup's outline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * The LinearGradient of popup's innerline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;
}

/**
 * Defines the Tips options.
 *
 * @interface TipsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface TipsOptions {

  /**
   * Defines the delay time for appearing.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  appearingTime?: number;

  /**
   * Defines the delay time for disappearing.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  disappearingTime?: number;

  /**
   * Define the delay time for the appearance of continuous operations.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  appearingTimeWithContinuousOperation?: number;

  /**
   * Define the delay time for the disappearance of continuous operations.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  disappearingTimeWithContinuousOperation?: number;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableArrow?: boolean;

  /**
   * The position of the sharp corner of Tips.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * The position of the tips.
   *
   * @type { ?TipsAnchorType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showAtAnchor?: TipsAnchorType;
}

/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PopupOptions {
  /**
   * Information in the pop-up window.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Information in the pop-up window.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Information in the pop-up window.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  message: string;

  /**
   * placement On Top
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PopupOptions#placement
   */
  placementOnTop?: boolean;

  /**
   * The placement of popup.
   * Supports all positions defined in Placement.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The placement of popup.
   * Supports all positions defined in Placement.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  placement?: Placement;

  /**
   * The first button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The first button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The first button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  primaryButton?: {
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string;

    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action: () => void;
  };

  /**
   * The second button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The second button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The second button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  secondaryButton?: {
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string;

    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action: () => void;
  };

  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isVisible: boolean
  }) => void;

  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Sets the options of popup message.
   *
   * @type { ?PopupMessageOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the options of popup message.
   *
   * @type { ?PopupMessageOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  messageOptions?: PopupMessageOptions;

  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  targetSpace?: Length;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableArrow?: boolean;
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: Position;

  /**
   * Set the background color of the popup.
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the background color of the popup.
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupColor?: Color | string | Resource | number;

  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  autoCancel?: boolean;

  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: Dimension;

  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the transition effect of popup opening and closing
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

  /**
   * Determine if it is compatible popup's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Determine if popup can follow the target node when it has rotation or scale.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  followTransformOfTarget?: boolean;

  /**
   * Define the popup avoid keyboard mode.
   *
   * @type { ?KeyboardAvoidMode }
   * @default KeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAvoidMode?: KeyboardAvoidMode;

  /**
   * Determine if popup can avoid the target when the display space is insufficient.
   *
   * @type { ?AvoidanceMode }
   * @default AvoidanceMode.COVER_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  avoidTarget?: AvoidanceMode;

  /**
   * The width of popup's outline.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension;

  /**
   * The width of popup's border.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderWidth?: Dimension;

  /**
   * The LinearGradient of popup's outline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * The LinearGradient of popup's innerline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;
}

/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface CustomPopupOptions {
  /**
   * builder of popup
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * builder of popup
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * builder of popup
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  builder: CustomBuilder;

  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  placement?: Placement;

  /**
   * mask color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead CustomPopupOptions#mask
   */
  maskColor?: Color | string | Resource | number;

  /**
   * background color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * background color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * background color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  popupColor?: Color | string | Resource | number;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableArrow?: boolean;

  /**
   * whether hide popup when click mask
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * whether hide popup when click mask
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * whether hide popup when click mask
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  autoCancel?: boolean;

  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isVisible: boolean
  }) => void;

  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  targetSpace?: Length;

  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: Position;

  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: Dimension;

  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusable?: boolean;

  /**
   * Defines the transition effect of popup opening and closing
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

  /**
   * Determine if it is compatible popup's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Determine if popup can follow the target node when it has rotation or scale.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  followTransformOfTarget?: boolean;

  /**
   * Define the popup avoid keyboard mode.
   *
   * @type { ?KeyboardAvoidMode }
   * @default KeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAvoidMode?: KeyboardAvoidMode;

  /**
   * Determine if popup can avoid the target when the display space is insufficient.
   *
   * @type { ?AvoidanceMode }
   * @default AvoidanceMode.COVER_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  avoidTarget?: AvoidanceMode;

  /**
   * The width of popup's outline.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension;

  /**
   * The width of popup's border.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderWidth?: Dimension;

  /**
   * The LinearGradient of popup's outline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * The LinearGradient of popup's innerline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;
}

/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MenuPreviewMode {
  /**
   * No preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * No preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,
  /**
   * Defines image type preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines image type preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IMAGE = 1
}

/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type AnimationRange<T> = [from: T, to: T];

/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface ContextMenuAnimationOptions {
  /**
   * Sets the start animator scale and end animator scale.
   *
   * @type { ?AnimationRange<number> }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Sets the start animator scale and end animator scale.
   *
   * @type { ?AnimationRange<number> }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  scale?: AnimationRange<number>;

  /**
   * Defines the transition effect of menu preview opening and closing.
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Sets the scale start and end animator of the image displayed before the custom builder preview is displayed.
   *
   * @type { ?AnimationRange<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  hoverScale?: AnimationRange<number>;

  /**
   * Sets whether support to interrupt the process of hover scale.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  hoverScaleInterruption?: boolean;
}

/**
 * Defines the type of border radius.
 *
 * @typedef { Length | BorderRadiuses | LocalizedBorderRadiuses }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;

/**
 * Defines the menu haptic feedback mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum HapticFeedbackMode {
  /**
   * No haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLED = 0,
  /**
   * Defines menu always haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLED = 1,
  /**
   * Defines menu automatically haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  AUTO = 2
}

/**
 * Define the modal mode of menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum ModalMode {
  /**
   * Modal modal automatically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */    
  AUTO = 0,
  /**
   * Operation takes effect around menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NONE = 1,
  /**
   * Operation takes no effect around menu in target window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TARGET_WINDOW = 2
}

/**
 * Enum for accessibility action type
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AccessibilityAction {
  /**
  * undefined action type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20 dynamic
  */
  UNDEFINED_ACTION = 0,
  /**
  * accessibility click action
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20 dynamic
  */
  ACCESSIBILITY_CLICK = 1,
}

/**
 * Enum for the result of accessibility action intercept function
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AccessibilityActionInterceptResult {
  /**
  * intercept the accessibility action
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20 dynamic
  */
  ACTION_INTERCEPT = 0,
  /**
  * the accessibility action can be continued
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20 dynamic
  */
  ACTION_CONTINUE = 1,
  /**
  * the accessibility action need to bubble up for execution
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20 dynamic
  */
  ACTION_RISE = 2,
}

/**
 * Defines the callback type used in accessibility action intercept.
 * The value of action indicates the accessibility action type.
 * @typedef { function } AccessibilityActionInterceptCallback
 * @param { AccessibilityAction } action - the enum of accessibility action type.
 * @returns { AccessibilityActionInterceptResult } the result of continuing to execute the action or interrupting it or bubbling up
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult;

/**
 * Menu mask type
 *
 * @interface MenuMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface MenuMaskType {
  /**
   * Mask color of menu.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color?: ResourceColor;

  /**
   * Set menu mask background blur Style.
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.BACKGROUND_THIN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyle?: BlurStyle;
}

/**
 * Defines the scaling mode for custom preview of contextMenu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum PreviewScaleMode {
  /**
   * Automatically resize preview based on the layout area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */    
  AUTO = 0,

  /**
   * Maintain original size of preview content without scaling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */    
  CONSTANT = 1,

  /**
   * Maintain aspect ratio to scale preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */    
  MAINTAIN = 2,
}

/**
 * Defines the available layout area.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AvailableLayoutArea {
  /**
   * Size of safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */    
  SAFE_AREA = 0,
}

/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ContextMenuOptions {
  /**
   * Sets the position offset of the context menu window.
   *
   * @type { ?Position }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the context menu window.
   *
   * @type { ?Position }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: Position;

  /**
   * Sets the placement of the context menu window.
   *
   * @type { ?Placement }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the placement of the context menu window.
   *
   * @type { ?Placement }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  placement?: Placement;

  /**
   * whether show arrow belong to the menu, default: false, not show arrow
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * whether show arrow belong to the menu, default: false, not show arrow
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableArrow?: boolean;

  /**
   * The horizontal offset to the left of menu or vertical offset to the top of menu
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The horizontal offset to the left of menu or vertical offset to the top of menu
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  arrowOffset?: Length;

  /**
   * The preview content of context menu.
   *
   * @type { ?(MenuPreviewMode | CustomBuilder) }
   * @default MenuPreviewMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The preview content of context menu.
   *
   * @type { ?(MenuPreviewMode | CustomBuilder) }
   * @default MenuPreviewMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preview?: MenuPreviewMode | CustomBuilder;

  /**
   * Defines the border radius for preview of menu.
   *
   * @type { BorderRadiusType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  previewBorderRadius?: BorderRadiusType;

  /**
   * Defines the border radius of menu.
   *
   * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Callback function when the context menu appears.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the context menu appears.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onAppear?: () => void;

  /**
   * Callback function when the context menu disappear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the context menu disappear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onDisappear?: () => void;

  /**
   * Callback function before the context menu animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback function before the context menu animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  aboutToAppear?: () => void;

  /**
   * Callback function before the context menu popAnimation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback function before the context menu popAnimation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  aboutToDisappear?: () => void;

  /**
   * The margin of menu's layoutRegion.
   *
   * @type { ?Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  layoutRegionMargin?: Margin;

  /**
   * The preview animator options.
   *
   * @type { ?ContextMenuAnimationOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The preview animator options.
   *
   * @type { ?ContextMenuAnimationOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  previewAnimationOptions?: ContextMenuAnimationOptions;

  /**
   * Defines the menu's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the menu's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines menu background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines menu background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the menu's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the menu's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Defines the transition effect of menu opening and closing.
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Determine if it is compatible menu's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
    * The color of menu's outer border.
    *
    * @type { ?(ResourceColor | EdgeColors) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20 dynamic
    */
  outlineColor?: ResourceColor | EdgeColors;

  /**
   * The width of menu's outer border.
   *
   * @type { ?(Dimension | EdgeOutlineWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension | EdgeOutlineWidths;

  /**
   * Defines the haptic feedback mode of menu.
   *
   * @type { ?HapticFeedbackMode }
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  hapticFeedbackMode?: HapticFeedbackMode;

  /**
   * Whether it is a menu without mask.
   *
   * @type { ?(boolean | MenuMaskType) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  mask?: boolean | MenuMaskType;

  /**
   * Defines modal mode of menu.
   *
   * @type { ?ModalMode }
   * @default ModalMode.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  modalMode?: ModalMode;

  /**
   * Defines the menu position.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  anchorPosition?: Position;

  /**
   * Callback function when the menu appears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidAppear?: Callback<void>;

  /**
   * Callback function when the menu disappears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidDisappear?: Callback<void>;

  /**
   * Callback function before the menu openAnimation starts.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAppear?: Callback<void>;

  /**
   * Callback function before the menu closeAnimation starts.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillDisappear?: Callback<void>;

  /**
   * Defines the scaling mode for custom preview of contextMenu.
   *
   * @type { ?PreviewScaleMode }
   * @default PreviewScaleMode.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  previewScaleMode?: PreviewScaleMode;

  /**
   * Defines the available layout area of preview.
   *
   * @type { ?AvailableLayoutArea }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  availableLayoutArea?: AvailableLayoutArea;
}

/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface MenuOptions extends ContextMenuOptions {
  /**
   * Sets the title of the menu window.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the title of the menu window.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  title?: ResourceStr;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showInSubWindow?: boolean;
}

/**
 * Defines the ProgressMask class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the ProgressMask class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class ProgressMask {
  /**
   * constructor.
   *
   * @param { number } value - indicates the current value of the progress.
   * @param { number } total - indicates the total value of the progress.
   * @param { ResourceColor } color - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @param { number } value - indicates the current value of the progress.
   * @param { number } total - indicates the total value of the progress.
   * @param { ResourceColor } color - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor(value: number, total: number, color: ResourceColor);

  /**
   * Update the current value of the progress.
   *
   * @param { number } value - indicates the current value of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Update the current value of the progress.
   *
   * @param { number } value - indicates the current value of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  updateProgress(value: number): void;

  /**
   * Update the color of the mask.
   *
   * @param { ResourceColor } value - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Update the color of the mask.
   *
   * @param { ResourceColor } value - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  updateColor(value: ResourceColor): void;

  /**
   * Enable the breathe animation of mask.
   *
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableBreathingAnimation(value: boolean): void;
}

/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class TouchTestInfo {
  /**
   * Get the X-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the X-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  windowX: number;

  /**
   * Get the Y-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the Y-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  windowY: number;

  /**
   * Get the X-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the X-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  parentX: number;

  /**
   * Get the Y-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the Y-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  parentY: number;

  /**
   * Get the X-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the X-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Get the Y-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the Y-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;

  /**
   * Get the rectangle of sub component.
   *
   * @type { RectResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the rectangle of sub component.
   *
   * @type { RectResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rect: RectResult;

  /**
   * Get the name of sub component.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the name of sub component.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id: string;
}

/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class TouchResult {
  /**
   * Defines the touch test strategy.
   *
   * @type { TouchTestStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the touch test strategy.
   *
   * @type { TouchTestStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strategy: TouchTestStrategy;

  /**
   * Defines the component's name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the component's name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id?: string;
}

/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PixelStretchEffectOptions {
  /**
   * top property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * top property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  top?: Length;

  /**
   * bottom property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * bottom property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bottom?: Length;

  /**
   * left property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * left property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  left?: Length;

  /**
   * right property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * right property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  right?: Length;
}

/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ClickEffect {
  /**
   * Set the click effect level.
   *
   * @type { ClickEffectLevel }
   * @default ClickEffectLevel.Light
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the click effect level.
   *
   * @type { ClickEffectLevel }
   * @default ClickEffectLevel.Light
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  level: ClickEffectLevel;

  /**
   * Set scale number.
   * This default scale is same as the scale of click effect level.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set scale number.
   * This default scale is same as the scale of click effect level.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  scale?: number;
}

/**
 * Defines the fadingEdge options.
 *
 * @typedef FadingEdgeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface FadingEdgeOptions {
  /**
   * The length of FadingEdge.
   *
   * @type { LengthMetrics }
   * @default 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  fadingEdgeLength?: LengthMetrics;
}

/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NestedScrollOptions {
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollForward: NestedScrollMode;

  /**
   * Set NestedScrollMode when the scrollable component scrolls backward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set NestedScrollMode when the scrollable component scrolls backward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBackward: NestedScrollMode;
}

/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare interface MenuElement {
  /**
   * Sets the value of the menu element.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the value of the menu element.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the value of the menu element.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  value: ResourceStr;

  /**
   * Sets the icon of the menu element.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the icon of the menu element.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Sets the symbol of the menu element.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the symbol of the menu element.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * If the value is true, the menu element is available and can respond to operations such as clicking.
   * If the value is false, the menu element is not available and click operations are not responded.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * If the value is true, the menu element is available and can respond to operations such as clicking.
   * If the value is false, the menu element is not available and click operations are not responded.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enabled?: boolean;

  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  action: () => void;
}

/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AttributeModifier<T> {

  /**
   * Defines the normal update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the normal update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyNormalAttribute?(instance: T) : void;

  /**
   * Defines the pressed update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the pressed update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyPressedAttribute?(instance: T) : void;

  /**
   * Defines the focused update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the focused update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyFocusedAttribute?(instance: T) : void;

  /**
   * Defines the disabled update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the disabled update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyDisabledAttribute?(instance: T) : void;

  /**
   * Defines the selected update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the selected update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applySelectedAttribute?(instance: T) : void;
}

/**
 * Defines the content modifier.
 *
 * @interface ContentModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ContentModifier<T> {

  /**
   * Defining applyContent function.
   *
   * @returns { WrappedBuilder<[T]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyContent(): WrappedBuilder<[T]>;
}

/**
 * Defines the common configuration.
 *
 * @interface CommonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CommonConfiguration<T> {

  /**
   * If the value is true, the contentModifier is available and can respond to operations such as triggerChange.
   *  If it is set to false, triggerChange operations are not responded.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enabled: boolean,

  /**
   * Obtains the contentModifier instance object
   *
   * @type { ContentModifier<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier: ContentModifier<T>;
}

/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum OutlineStyle {
  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SOLID = 0,

  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DASHED = 1,

  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DOTTED = 2
}

/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum DragPreviewMode {
  /**
   * Default preview mode, let system process preview scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Default preview mode, let system process preview scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Default preview mode, let system process preview scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  AUTO = 1,
  /**
   * Disable system scale to preview panel
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Disable system scale to preview panel
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Disable system scale to preview panel
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLE_SCALE = 2,
  /**
   * Enable the default shadow effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Enable the default shadow effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_DEFAULT_SHADOW = 3,
  /**
   * Enable the default radius effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Enable the default radius effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_DEFAULT_RADIUS = 4,
  /**
   * Enable the default gray effect on the dragging item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
  /**
   * Enable the tile effect for multi drag, each dragged graph is display in the original relative position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_MULTI_TILE_EFFECT = 6,

  /**
   * Enable the touch point calculation position based on final preview rect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7,
}

/**
 * Define drag start animation effect from drag preview to the handle drag image
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 19 dynamic
 */
declare enum DraggingSizeChangeEffect {
  /**
   * Default effect, no transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  DEFAULT = 0,

  /**
   * Only scaled transition, this parameter take effect when PREVIEW_MODE is not DISABLE_SCALE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  SIZE_TRANSITION = 1,

  /**
   * Scaled and content transition together, this size transition take effect when PREVIEW_MODE is not DISABLE_SCALE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  SIZE_CONTENT_TRANSITION = 2,
}

/**
 * Define the menu pop-up policy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MenuPolicy {
  /**
   * Default value. The default logic of whether to pop up a menu depends on the scene.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Hide pop up menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HIDE = 1,

  /**
   * Show pop up menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SHOW = 2
}

/**
 * ImageModifier
 *
 * @typedef { import('../api/arkui/ImageModifier').ImageModifier } ImageModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare type ImageModifier = import('../api/arkui/ImageModifier').ImageModifier;

/**
 * SymbolGlyphModifier
 *
 * @typedef {import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier} SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * SymbolGlyphModifier
 *
 * @typedef {import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier} SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 * @noninterop
 */
declare type SymbolGlyphModifier = import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier;

/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface DragPreviewOptions {
  /**
   * Drag preview mode.
   *
   * @type { ?DragPreviewMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Drag preview mode.
   *
   * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Drag preview mode.
   *
   * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mode?: DragPreviewMode | Array<DragPreviewMode>;

  /**
   * Drag preview modifier.
   *
   * @type { ?ImageModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Drag preview modifier.
   *
   * @type { ?ImageModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @noninterop
   */
  modifier?: ImageModifier;

  /**
   * The flag for number showing.
   *
   * @type { ?(boolean | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * The flag for number showing.
   *
   * @type { ?(boolean | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  numberBadge?: boolean | number;

  /**
   * Drag start animation effect from drag preview to the handle drag image.
   *
   * @type { ?DraggingSizeChangeEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 19 dynamic
   */
  sizeChangeEffect?: DraggingSizeChangeEffect;
}

/**
 * Defines the drag options.
 *
 * @interface DragInteractionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DragInteractionOptions {
  /**
   * Define whether to gather selected nodes in grid or list.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  isMultiSelectionEnabled?: boolean;

  /**
   * Define whether to execute animation before preview floating.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  defaultAnimationBeforeLifting?: boolean;

  /**
   * Config if auto scrolling should be triggered when the drag hovered on a scrollable controller's edge.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  enableEdgeAutoScroll?: boolean;

  /**
   * Define whether to enable the haptic feedback when dragging, the default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * Define whether to lifting trigger drag by finger.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  isLiftingDisabled?: boolean;
}

/**
 * Defines the drag preview configuration.
 *
 * @interface PreviewConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15 dynamic
 */
declare interface PreviewConfiguration {
  /**
   * Define whether to only use for lifting.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  onlyForLifting?: boolean;

  /**
   * Define whether to delay create builder.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  delayCreating?: boolean;
}

/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare interface InvertOptions {

  /**
   * Defines the low value of threshold
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the low value of threshold
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  low: number;

  /**
   * Defines the high value of threshold
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the high value of threshold
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  high: number;

  /**
   * Defines the threshold
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the threshold
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  threshold: number;

  /**
   *Defines the threshold range
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   *Defines the threshold range
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  thresholdRange: number;
}

/**
 * Import the CircleShape type object for common method.
 *
 * @typedef { import('../api/@ohos.arkui.shape').CircleShape } CircleShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type CircleShape = import('../api/@ohos.arkui.shape').CircleShape;

/**
 * Import the EllipseShape type object for common method.
 *
 * @typedef { import('../api/@ohos.arkui.shape').EllipseShape } EllipseShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type EllipseShape = import('../api/@ohos.arkui.shape').EllipseShape;

/**
 * Import the PathShape type object for common method.
 *
 * @typedef { import('../api/@ohos.arkui.shape').PathShape } PathShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type PathShape = import('../api/@ohos.arkui.shape').PathShape;

/**
 * Import the RectShape type object for common method.
 *
 * @typedef { import('../api/@ohos.arkui.shape').RectShape } RectShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type RectShape = import('../api/@ohos.arkui.shape').RectShape;

/**
 * Defines the type that can be undefined.
 *
 * @typedef { T | undefined } Optional<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type Optional<T> = T | undefined;

/**
 * Defines the TipsMessageType property with ResourceStr and StyledString.
 *
 * @typedef { ResourceStr | StyledString } TipsMessageType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type TipsMessageType = ResourceStr | StyledString;

/**
 * Import the Matrix4Transit type object for common method.
 *
 * @typedef { import('../api/@ohos.matrix4').default.Matrix4Transit } Matrix4Transit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type Matrix4Transit = import('../api/@ohos.matrix4').default.Matrix4Transit;

/**
 * Define the options for background image.
 *
 * @interface BackgroundImageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface BackgroundImageOptions {
  /**
   * Sets the synchronous or asynchronous mode for background image loading.
   * The default parameter type is bool, and the default value is false.
   *
   * @type { ?boolean }
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  syncLoad?: boolean;
  /**
   * Set the repeat style of the background image.
   *
   * @type { ?ImageRepeat }
   * @param { ImageRepeat } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  repeat?: ImageRepeat;
}

/**
 * Defines background options.
 *
 * @interface BackgroundOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface BackgroundOptions {
  /**
   * Set the alignment of the custom background and component.
   *
   * @type { ?Alignment} align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the alignment of the custom background and component.
   *
   * @type { ?Alignment} align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the alignment of the custom background and component.
   *
   * Anonymous Object Rectification.
   * @type { ?Alignment }
   * @default Alignment.Center
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  align?: Alignment;

  /**
   * The set of edges for which to ignore layout safe area. To respect safe area insets on all edges, explicitly pass empty edge set.
   *
   * @type { ?Array<LayoutSafeAreaEdge> }
   * @default The default value is LayoutSafeAreaEdge.ALL when background is ResourceColor, otherwise it is an empty array [].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  ignoresLayoutSafeAreaEdges?: Array<LayoutSafeAreaEdge>;
}

/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare class CommonMethod<T> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 9 dynamic
   */
  constructor();

  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  width(value: Length): T;
  /**
   * Sets the width of the current component.
   *
   * @param { Length | LayoutPolicy } widthValue
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  width(widthValue: Length | LayoutPolicy): T;

  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  height(value: Length): T;
  /**
   * Sets the height of the current component.
   *
   * @param { Length | LayoutPolicy } heightValue
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  height(heightValue: Length | LayoutPolicy): T;

  /**
   * Sets the drawModifier of the current component.
   *
   * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawModifier(modifier: DrawModifier | undefined): T;

  /**
   * Sets the custom property of the current component.
   *
   * @param { string } name - the name of the custom property.
   * @param { Optional<Object> } value - the value of the custom property.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  customProperty(name: string, value: Optional<Object>): T;

  /**
   * Expands the safe area.
   *
   * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
   * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Expands the safe area.
   *
   * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
   * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T;

  /**
   * Expands the layout safe area of a component.
   *
   * @param { Array<LayoutSafeAreaType> } [types] - The region type to expand the component's layout safe area into. The default value is LayoutSafeAreaType.SYSTEM.
   * @param { Array<LayoutSafeAreaEdge> } [edges] - The set of edges for which to ignore layout safe area. The default value is LayoutSafeAreaEdge.ALL.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T;

  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  responseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * Sets the mouse response region of current component
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T } return the component attribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the mouse response region of current component
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T } return the component attribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  mouseResponseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  size(value: SizeOptions): T;

  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  constraintSize(value: ConstraintSizeOptions): T;

  /**
   * Sets the touchable of the current component
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead hitTestBehavior
   */
  touchable(value: boolean): T;

  /**
   * Defines the component's hit test behavior in touch events.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Defines the component's hit test behavior in touch events.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the component's hit test behavior in touch events.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  hitTestBehavior(value: HitTestMode): T;

  /**
   * Defines the pre-touch test of sub component in touch events.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the pre-touch test of sub component in touch events.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T;

  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the weight of the component, according to which the remain part of main-axis is allocated self-adaptively
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  layoutWeight(value: number | string): T;

  /**
   * chain Weight
   *
   * @param { ChainWeightOptions } chainWeight
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  chainWeight(chainWeight: ChainWeightOptions): T;

  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length | LocalizedPadding } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  padding(value: Padding | Length | LocalizedPadding): T;

  /**
   * Inner safeArea padding.
   *
   * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Indicates safeArea padding values
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   */
  safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T;

  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length | LocalizedMargin } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  margin(value: Margin | Length | LocalizedMargin): T;

  /**
   * Sets the background color of the component.
   *
   * @param { CustomBuilder } builder - Custom background.
   * @param { object } options - Alignment mode between the custom background and the component.
   * <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
   * <br>They will all take effect, with **background** at the top layer.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background color of the component.
   *
   * @param { CustomBuilder } builder - Custom background.
   * @param { object } options - Alignment mode between the custom background and the component.
   * <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
   * <br>They will all take effect, with **background** at the top layer.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  background(builder: CustomBuilder, options?: { align?: Alignment }): T;
  
  /**
   * Add a background for the component.
   *
   * Anonymous Object Rectification.
   * @param { CustomBuilder | ResourceColor } content
   * @param { BackgroundOptions } [options]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  background(content: CustomBuilder | ResourceColor, options?: BackgroundOptions): T;

  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor(value: ResourceColor): T;

  /**
   * Background color
   *
   * @param { Optional<ResourceColor> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor(color: Optional<ResourceColor>): T;

  /**
   * Background color
   *
   * @param { Optional<ResourceColor | ColorMetrics> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundColor(color: Optional<ResourceColor | ColorMetrics>): T;

  /**
   * PixelRound
   *
   * @param { PixelRoundPolicy } value - indicates the pixel round policy.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  pixelRound(value: PixelRoundPolicy): T;

  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr | PixelMap } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T;

  /**
   * Background image
   *
   * @param { ResourceStr | PixelMap } src - the background image source
   * @param { BackgroundImageOptions } options - config the options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): T;

  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundImageSize(value: SizeOptions | ImageSize): T;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundImagePosition(value: Position | Alignment): T;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { Optional<BlurStyle> } style
   * @param { BackgroundBlurStyleOptions } [options]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BlurStyle> } style
   * @param { BackgroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

   /**
   * Sets the background effect of the component, including the blur radius, brightness, saturation, and color.
   *
   * @param { BackgroundEffectOptions } options - Background effect, including saturation, brightness, and color.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * options:background effect options.
   *
   * @param { BackgroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundEffect(options: BackgroundEffectOptions): T;

  /**
   * Sets the background effect of the component, including the blur radius, brightness,
   * saturation, and color. Compared to backgroundEffect<sup>11+</sup>,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<BackgroundEffectOptions> } options - Background effect, including saturation,
   * brightness, and color.
   * <br>If **options** is **undefined**, the background reverts to its default state with no effect.
   * @param { SystemAdaptiveOptions } [ sysOptions ] - System adaptive adjustment options.
   * <br>Default value: **{ disableSystemAdaptation: false }**.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>): T;

  /**
   * options:background effect options.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BackgroundEffectOptions> } options - options indicates the effect options.
   * @param { SystemAdaptiveOptions } [ sysOptions ] - system adaptive options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Background image resizable.
   * value:resizable options
   *
   * @param { ResizableOptions } value - Indicates the resizable options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundImageResizable(value: ResizableOptions): T;

  /**
   * Foreground effect.
   *
   * @param { ForegroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  foregroundEffect(options: ForegroundEffectOptions): T;


  /**
   * Unified visual effect interface.
   *
   * @param { VisualEffect } effect - Visual effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visualEffect(effect: VisualEffect): T;

  /**
   * Filter applied to the background layer of the component.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundFilter(filter: Filter): T;

  /**
   * Filter applied to the foreground layer of the component.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  foregroundFilter(filter: Filter): T;

  /**
   * Filter applied to the compositing layer of the component.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compositingFilter(filter: Filter): T;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { ForegroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { ForegroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): T;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Sets the opacity of the component.
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  opacity(value: number | Resource): T;

  /**
   * Opacity
   *
   * @param { Optional<number | Resource> } opacity
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  opacity(opacity: Optional<number | Resource>): T;

  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  border(value: BorderOptions): T;

  /**
   * Border style
   *
   * @param { BorderStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  borderStyle(value: BorderStyle | EdgeStyles): T;

  /**
   * Border width
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T;

  /**
   * Border color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Border radius
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T;

  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  borderImage(value: BorderImageOption): T;

  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { OutlineOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { OutlineOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outline(value: OutlineOptions): T;

  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { Optional<OutlineOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outline(options: Optional<OutlineOptions>): T;

  /**
   * Outline style
   * The input parameter default value is OutlineStyle.SOLID
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline style
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T;

  /**
   * Outline style
   *
   * @param { Optional<OutlineStyle | EdgeOutlineStyles> } style
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T;

  /**
   * Outline width
   * The input parameter default value is 0
   *
   * @param { Dimension | EdgeOutlineWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline width
   *
   * @param { Dimension | EdgeOutlineWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineWidth(value: Dimension | EdgeOutlineWidths): T;

  /**
   * Outline width
   *
   * @param { Optional<Dimension | EdgeOutlineWidths> } width
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T;

  /**
   * Outline color
   * The input parameter default value is Color.Black
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline color
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Outline color
   *
   * @param { Optional<ResourceColor | EdgeColors | LocalizedEdgeColors> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T;

  /**
   * Outline radius
   * The input parameter default value is 0
   *
   * @param { Dimension | OutlineRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline radius
   *
   * @param { Dimension | OutlineRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineRadius(value: Dimension | OutlineRadiuses): T;

  /**
   * Outline radius
   *
   * @param { Optional<Dimension | OutlineRadiuses> } radius
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T;

  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { ResourceColor | ColoringStrategy } value - indicates the color or color selection strategy
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { ResourceColor | ColoringStrategy } value - indicates the color or color selection strategy
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  foregroundColor(value: ResourceColor | ColoringStrategy): T;

  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { Optional<ResourceColor | ColoringStrategy> } color - indicates the color or color selection strategy
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T;

  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  onClick(event: (event: ClickEvent) => void): T;

  /**
   * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold.
   *
   * @param { function } event - this function callback executed when the click action is recognized
   * @param { number } distanceThreshold - the distance threshold of finger's movement when detecting a click action
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onClick(event: Callback<ClickEvent>, distanceThreshold: number): T;

  /**
   * Trigger a hover event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a hover event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onHover(event: (isHover: boolean, event: HoverEvent) => void): T;

  /**
   * Trigger a hover move event.
   *
   * @param { Callback<HoverEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onHoverMove(event: Callback<HoverEvent>): T;

  /**
   * Trigger a accessibility hover event.
   *
   * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAccessibilityHover(callback: AccessibilityCallback): T;

  /**
   * prompt for current component and descendants unable to handle accessibility hover event
   *
   * @param { AccessibilityTransparentCallback } callback - A callback instance used when current component and
   * descendants not handled accessibility hover event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): T;

  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  hoverEffect(value: HoverEffect): T;

  /**
   * Trigger a mouse event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a mouse event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11 dynamic
   */
  onMouse(event: (event: MouseEvent) => void): T;

  /**
   * Trigger a touch event when touched.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Trigger a touch event when touched.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a touch event when touched.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onTouch(event: (event: TouchEvent) => void): T;

  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onKeyEvent(event: (event: KeyEvent) => void): T;

  /**
   * Keyboard input
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onKeyEvent(event: Callback<KeyEvent, boolean>): T;

  /**
   * Digital crown input.
   *
   * @param { Callback<CrownEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T;

  /**
   * Handle keyboard events before input method events.
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onKeyPreIme(event: Callback<KeyEvent, boolean>): T;

  /**
   * Customize the handling and distribution of key events.
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T;

  /**
   * Trigger a FocusAxisEvent.
   *
   * @param { Callback<FocusAxisEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  onFocusAxisEvent(event: Callback<FocusAxisEvent>): T;

  /**
   * Handle axis events.
   *
   * @param { Callback<AxisEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  onAxisEvent(event: Callback<AxisEvent>): T;

  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  focusable(value: boolean): T;

  /**
   * Set nextFocus.
   *
   * @param { FocusMovement } nextStep
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  nextFocus(nextStep: Optional<FocusMovement>): T;

  /**
   * Set TabStop on component focus
   *
   * @param { boolean } isTabStop
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  tabStop(isTabStop: boolean): T;

  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onFocus(event: () => void): T;

  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onBlur(event: () => void): T;

  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  tabIndex(index: number): T;

  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  defaultFocus(value: boolean): T;

  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  groupDefaultFocus(value: boolean): T;

  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  focusOnTouch(value: boolean): T;

  /**
   * Set the component's focusBox style.
   *
   * @param { FocusBoxStyle } style
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusBox(style: FocusBoxStyle): T;

  /**
   * Set container as a focus group with a specific identifier.
   *
   * @param { string } id - focus scope identifier.
   * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusScopeId(id: string, isGroup?: boolean): T;
  /**
   * Set container as a focus group with a specific identifier.
   *
   * @param { string } id - focus scope identifier.
   * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
   * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
   * only effective when isGroup is true, the default value is true.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T;

  /**
   * Set the focus priority of component in a specific focus scope.
   *
   * @param { string } scopeId
   * @param { FocusPriority } [priority] - the default value is AUTO
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusScopePriority(scopeId: string, priority?: FocusPriority): T;

  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  animation(value: AnimateParam): T;

  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  transition(value: TransitionOptions | TransitionEffect): T;

  /**
   * Set the transition effect of component when it appears and disappears.
   *
   * @param { TransitionEffect } effect - transition effect
   * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T;

  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  blur(value: number, options?: BlurOptions): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Applies a linear gradient foreground blur effect to the component.
   *
   * @param { number } value - the blurring radius.
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  linearGradientBlur(value: number, options: LinearGradientBlurOptions): T;

  /**
   * Adds the content linear gradient blurring effect for the current component. The input parameter is the blurring radius.
   *
   * @param { Optional<number> } blurRadius - the blurring radius.
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { Optional<LinearGradientBlurOptions> } options - the linear gradient blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T;

  /**
   * Component motion blur interface.
   *
   * @param { MotionBlurOptions } value - the attributes of motion blur.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  motionBlur(value: MotionBlurOptions):T;

  /**
   * Component motion blur interface.
   *
   * @param { Optional<MotionBlurOptions> } motionBlur - the attributes of motion blur.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  motionBlur(motionBlur: Optional<MotionBlurOptions>):T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  brightness(value: number): T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { Optional<number> } brightness
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  brightness(brightness: Optional<number>): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  contrast(value: number): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { Optional<number> } contrast
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  contrast(contrast: Optional<number>): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  grayscale(value: number): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { Optional<number> } grayscale
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  grayscale(grayscale: Optional<number>): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Optional<Color | string | Resource> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  colorBlend(color: Optional<Color | string | Resource>): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  saturate(value: number): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { Optional<number> } saturate
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  saturate(saturate: Optional<number>): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  sepia(value: number): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { Optional<number> } sepia
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sepia(sepia: Optional<number>): T;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  invert(value: number | InvertOptions): T;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { Optional<number | InvertOptions> } options - value indicates the scale of the conversion or the options of invert.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  invert(options: Optional<number | InvertOptions>): T;

  /**
   * Sets system bar effect to the component.
   *
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarEffect(): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  hueRotate(value: number | string): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { Optional<number | string> } rotation
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  hueRotate(rotation: Optional<number | string>): T;

  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  useShadowBatching(value: boolean): T;

  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { Optional<boolean> } use - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  useShadowBatching(use: Optional<boolean>): T;

  /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent or window.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   *
   * @param { boolean } useEffect - true means the component should apply the effects template defined by the parent effectComponent or window.
   * @param { EffectType } effectType - the effect type of the effects template, defined by the parent effectComponent or window.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   */
  useEffect(useEffect: boolean, effectType: EffectType): T;

  /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent or window.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   *
   * @param { Optional<boolean> } useEffect - true means the component should apply the effects template defined by the parent effectComponent or window.
   * @param { EffectType } [effectType] - the effect type of the effects template, defined by the parent effectComponent or window.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T;

  /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   *
   * @param { boolean } value - true means the component should apply the effects template.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  useEffect(value: boolean): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  backdropBlur(value: number, options?: BlurOptions): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions): T;

   /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  renderGroup(value: boolean): T;

  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { Optional<boolean> } isGroup - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  renderGroup(isGroup: Optional<boolean>): T;

  /**
   * Sets whether the component should remain stationary, reusing the results of the current frame's off-screen rendering.
   * If the input parameter is true, the component and subcomponent changes do not affect the display.
   *
   * @param { boolean } value - true means the component should remain stationary.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  freeze(value: boolean): T;

  /**
   * Sets whether the component should remain stationary, reusing the results of the current frame's off-screen rendering.
   * If the input parameter is true, the component and subcomponent changes do not affect the display.
   *
   * @param { Optional<boolean> } freeze - true means the component should remain stationary.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  freeze(freeze: Optional<boolean>): T;

  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   *
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   *
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   *
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set component translation.
   *
   * @param { TranslateOptions } value default:{x:0,y:0,z:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  translate(value: TranslateOptions): T;

  /**
   * Set component translation.
   *
   * @param { Optional<TranslateOptions> } translate default:{x:0,y:0,z:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  translate(translate: Optional<TranslateOptions>): T;

  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   *
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   *
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   *
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set component scaling.
   *
   * @param { ScaleOptions } value default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  scale(value: ScaleOptions): T;

  /**
   * Set component scaling.
   *
   * @param { Optional<ScaleOptions> } options default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  scale(options: Optional<ScaleOptions>): T;

  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 14
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  gridSpan(value: number): T;

  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 14
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  gridOffset(value: number): T;

  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   *
   * @param { RotateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   *
   * @param { RotateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   *
   * @param { RotateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set component rotation.
   *
   * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  rotate(value: RotateOptions): T;

  /**
   * Set component rotation.
   *
   * @param { Optional<RotateOptions> } options default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  rotate(options: Optional<RotateOptions>): T;

  /**
   * Set component rotation.
   *
   * @param { Optional<RotateOptions | RotateAngleOptions> } options default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0,angle:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  rotate(options: Optional<RotateOptions | RotateAngleOptions>): T;


  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  transform(value: object): T;

  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { Optional<object> } transform
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transform(transform: Optional<object>): T;

  /**
   * Sets the transformation matrix for the current component.
   * The interface can display the effect of three-dimensional matrix transformation.
   *
   * @param { Optional<Matrix4Transit> } transform - transform3D matrix
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  transform3D(transform: Optional<Matrix4Transit>): T;

  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  onAppear(event: () => void): T;

  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  onDisAppear(event: () => void): T;

  /**
   * This callback is triggered when a component mounts to view tree.
   *
   * @param { Callback<void> } callback
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAttach(callback: Callback<void>): T;

  /**
   * This callback is triggered when a component is detached from view tree.
   *
   * @param { Callback<void> } callback
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetach(callback: Callback<void>): T;

  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;

  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  visibility(value: Visibility): T;

  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  flexGrow(value: number): T;

  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  flexShrink(value: number): T;

  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  flexBasis(value: number | string): T;

  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Defines the align rules of child component in Stack container.
   *
   * @param { LocalizedAlignment } alignment
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  layoutGravity(alignment: LocalizedAlignment): T;

  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  displayPriority(value: number): T;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  zIndex(value: number): T;

  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): T;

  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  direction(value: Direction): T;

  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  align(value: Alignment): T;

   /**
   * align
   *
   * @param { Alignment | LocalizedAlignment } alignment
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  align(alignment: Alignment | LocalizedAlignment): T;

  /**
   * Defines the align rules of child component in Stack container.
   *
   * @param { LocalizedAlignment } alignment
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  layoutGravity(alignment: LocalizedAlignment): T;

  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * position
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  position(value: Position | Edges | LocalizedEdges): T;

  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position | LocalizedPosition} value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  markAnchor(value: Position | LocalizedPosition): T;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  offset(value: Position | Edges | LocalizedEdges): T;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  enabled(value: boolean): T;

  /**
   * Sets the number of occupied columns and offset columns for a specific device width type.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T;

  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  alignRules(value: AlignRuleOption): T;

  /**
   * Specifies the localized alignRules of relative container
   *
   * @param { LocalizedAlignRuleOptions } alignRule
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  alignRules(alignRule: LocalizedAlignRuleOptions): T;

  /**
   * Specifies the direction and style of chain in relative container
   *
   * @param { Axis } direction - indicates direction of the chain
   * @param { ChainStyle } style - indicates style of the chain
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  chainMode(direction: Axis, style: ChainStyle): T;

  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  aspectRatio(value: number): T;

  /**
   * The click effect level and scale number.
   *
   * @param { ClickEffect | null } value
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The click effect level and scale number.
   *
   * @param { ClickEffect | null } value
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  clickEffect(value: ClickEffect | null): T;

  /**
   * The click effect level and scale number.
   *
   * @param { Optional<ClickEffect | null> } effect
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  clickEffect(effect: Optional<ClickEffect | null>): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onDragMove(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onDrop(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { OnDragEventCallback } eventCallback - event callback.
   * @param { DropOptions } [dropOptions] - the drop handling options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T;

  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Enables the component as a drag-and-drop target with spring loading functionality.
   *
   * When a dragged object hovers over the target, it triggers a callback notification. Spring Loading is an enhanced
   * feature for drag-and-drop operations, allowing users to automatically trigger view transitions during dragging
   * by hovering (hover) without needing to use another hand.
   * This feature is primarily designed to enhance the smoothness and efficiency of drag-and-drop operations. Below are
   * some common scenarios suitable for supporting this feature:
   *  - In a file manager, when dragging a file and hovering over a folder, the folder is automatically opened.
   *  - On a desktop launcher, when dragging a file and hovering over an application icon, the application is
   *  automatically opened.
   *
   * Please note:
   *   1. Registering spring-loaded or drag-and-drop events (onDragEnter/Move/Leave/Drop) on a component makes it a
   *   drag-and-drop target. Only one target can be the responder at the same time when user drags and hovers on, and
   *   child components always have higher priority.
   *   2. Once a complete spring loading is triggered on a component, new spring loading detection will only occur after the
   *   dragged object leaves and re-enters the component's range.
   *
   * @param { Callback<SpringLoadingContext> | null } callback Registers the callback for spring loading response, or
   *    sets it to null to disable the support for spring loading.
   * @param { DragSpringLoadingConfiguration } [configuration] The initialized spring loading configuration which is
   *    only used when the entire spring detecting.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  onDragSpringLoading(callback: Callback<SpringLoadingContext> | null, configuration?: DragSpringLoadingConfiguration): T;

  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> } value - the uniformData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> } value - the uniformData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> | null } value - the uniformData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  allowDrop(value: Array<UniformDataType> | null): T;

  /**
   * Enable the selectable area can be dragged.
   *
   * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Enable the selectable area can be dragged.
   *
   * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  draggable(value: boolean): T;

  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo } value - preview of the component for dragging process
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo | string } value - preview of the component for dragging process
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  dragPreview(value: CustomBuilder | DragItemInfo | string): T;

  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo | string } preview - preview of the component for dragging process
   * @param { PreviewConfiguration } config - drag preview configuration.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamic
   */
  dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T;

  /**
   * Set the selectable area drag preview options.
   *
   * @param { DragPreviewOptions } value - preview options value.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Set the selectable area drag preview options.
   *
   * @param { DragPreviewOptions } value - preview options value.
   * @param { DragInteractionOptions } options - drag interaction options value.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T;

  /**
   * After binding, a callback is triggered when the preDrag status change finished.
   *
   * @param { Callback<PreDragStatus> } callback callback - The callback will be triggered when the preDrag status change.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  onPreDrag(callback: Callback<PreDragStatus>): T;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder | ComponentContent } value
   * @param { OverlayOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T;

    /**
   * Config toolbar for current component.
   *
   * @param { CustomBuilder } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 20 dynamic
   */
  toolbar(value: CustomBuilder): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * Anonymous Object Rectification.
   * @param { LinearGradientOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradient(value: LinearGradientOptions): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { Optional<LinearGradientOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradient(options: Optional<LinearGradientOptions>): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient
   * end:End point of angle gradient
   * number:number
   * rotating:rotating
   * colors:Color description for gradients
   * repeating:repeating
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * Anonymous Object Rectification.
   * @param { SweepGradientOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sweepGradient(value: SweepGradientOptions): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { Optional<SweepGradientOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sweepGradient(options: Optional<SweepGradientOptions>): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient
   * colors:Color description for gradients
   * repeating: Refill
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * Anonymous Object Rectification.
   * @param { RadialGradientOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radialGradient(value: RadialGradientOptions): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { Optional<RadialGradientOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radialGradient(options: Optional<RadialGradientOptions>): T;

  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  motionPath(value: MotionPathOptions): T;

  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions | ShadowStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions | ShadowStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  shadow(value: ShadowOptions | ShadowStyle): T;

  /**
   * Add a shadow effect to the current component
   *
   * @param { Optional<ShadowOptions | ShadowStyle> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  shadow(options: Optional<ShadowOptions | ShadowStyle>): T;

  /**
   * Add a blendMode effect to the current component
   *
   * @param { BlendMode } value - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Add a blendMode effect to the current component
   *
   * @param { BlendMode } value - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  blendMode(value: BlendMode, type?: BlendApplyType): T;

  /**
   * Add a blendMode effect to the current component
   *
   * @param { Optional<BlendMode> } mode - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T;

  /**
   * Add a blendMode effect to the current component.Cannot be used together with the blendMode interface.
   *
   * @param { BlendMode | Blender } effect - When the effect type is BlendMode type, define Different hybrid modes.
   * When the effect type is Blender type, Define the corresponding blending effect.
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 13 dynamic
   */
  advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T;

  /**
   * Whether to crop the sub components beyond the current component range.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  clip(value: boolean): T;

  /**
   * Whether to crop the sub components beyond the current component range.
   *
   * @param { Optional<boolean> } clip
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  clip(clip: Optional<boolean>): T;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead CommonMethod#clipShape
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * The current component is cropped according to the specified shape.
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the clip.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * The current component is cropped according to the specified shape.
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - indicates the shape of the clip.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * Sets the mask of the current component.
   *
   * @param { ProgressMask } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mask(value: ProgressMask): T;

  /**
   * Sets the mask of the current component.
   *
   * @param { Optional<ProgressMask> } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mask(mask: Optional<ProgressMask>): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead CommonMethod#maskShape
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * Key. User can set an key to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   * @test
   */
  key(value: string): T;

  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  id(value: string): T;

  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  geometryTransition(id: string): T;
  /**
   * Shared geometry transition
   *
   * @param { string } id - geometry transition id
   * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Shared geometry transition
   *
   * @param { string } id - geometry transition id
   * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  geometryTransition(id: string, options?: GeometryTransitionOptions): T;

  /**
  * Tips control
  *
  * @param { TipsMessageType } message
  * @param { TipsOptions } [options]
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 19 dynamic
  */
  bindTips(message: TipsMessageType, options?: TipsOptions): T;

  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions } popup
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions | CustomPopupOptions } popup
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions | CustomPopupOptions } popup
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T;

  /**
   * Menu control
   *
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
   * action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Menu control
   *
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
   * action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Menu control
   *
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * ContextMenu control
   *
   * @param { CustomBuilder } content
   * @param { ResponseType } responseType
   * @param { ContextMenuOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * ContextMenu control
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * ContextMenu control
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T;

  /**
   * ContextMenu control
   *
   * @param { boolean } isShown - true means display content, false means hide content.
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T;

  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } type - transition type.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } type - transition type.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T;

  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } options - options of content cover.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } options - options of content cover.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T;

  /**
   * Bind sheet
   *
   * @param { boolean } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } options - options of sheet.
   * @returns { T } - template type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind sheet
   *
   * @param { boolean } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } options - options of sheet.
   * @returns { T } - template type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T;

  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  stateStyles(value: StateStyles): T;

  /**
   * id for distribute identification.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * id for distribute identification.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  restoreId(value: number): T;

  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { VisibleAreaChangeCallback } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T;

  /**
   * Set or reset the callback which is triggered when the visibleArea of component changed.
   * The interval between two visible area change callbacks will not be less than the expected update interval.
   *
   * @param { VisibleAreaEventOptions } options - The options for the visibility event.
   * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
   * If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;

  /**
   * Set the spherical effect of the component.
   *
   * @param { number } value - set the degree of spherical effect, value range [0, 1].
   * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sphericalEffect(value: number): T;

  /**
   * Set the spherical effect of the component.
   *
   * @param { Optional<number> } effect - set the degree of spherical effect, value range [0, 1].
   * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  sphericalEffect(effect: Optional<number>): T;

  /**
   * Set the light up effect of the component
   *
   * @param { number } value - set the degree to which the component lights up, value range [0, 1].
   * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lightUpEffect(value: number): T;

  /**
   * Set the light up effect of the component
   *
   * @param { Optional<number> } degree - set the degree to which the component lights up, value range [0, 1].
   * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  lightUpEffect(degree: Optional<number>): T;

  /**
   * Set the edge pixel stretch effect of the Component.
   *
   * @param { PixelStretchEffectOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): T;

  /**
   * Set the edge pixel stretch effect of the Component.
   *
   * @param { Optional<PixelStretchEffectOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T;

  /**
   * Sets hot keys
   *
   * @param { string | FunctionKey } value - Character of the combination key.
   * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
   * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets hot keys
   *
   * @param { string | FunctionKey } value - Character of the combination key.
   * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
   * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T;

  /**
   * Sets whether to enable accessibility grouping.
   *
   * @param { boolean } value - set group with accessibility, default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets whether to enable accessibility grouping.
   *
   * @param { boolean } value - set group with accessibility, default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets whether to enable accessibility grouping.
   * 
   * <p><strong>NOTE</strong>
   * <br>Whether to enable accessibility grouping. When accessibility grouping is enabled,
   * <br>the component and all its children are treated as a single selectable unit, and the accessibility
   * <br>service will no longer focus on the individual child components.</p>
   *
   * @param { boolean } value - set group with accessibility, default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityGroup(value: boolean): T;

  /**
   * Sets whether to enable accessibility grouping.
   * 
   * <p><strong>NOTE</strong>
   * <br>If accessibility grouping is enabled and the component does not contain a universal text attribute
   * <br>or an accessibility text attribute, the system will concatenate the universal text attributes of
   * <br>its child components to form a merged text for the component. If a child component lacks a universal
   * <br>text attribute, it will be ignored in the concatenation process.
   * 
   * <br>When accessibilityPreferred is set to true, the system will prioritize concatenating the accessibility
   * <br>text attributes of the child components to form the merged text. If a child component lacks an
   * <br>accessibility text attribute, the system will continue to concatenate its universal text attribute.
   * <br>If a child component lacks both, it will be ignored.</p>
   *
   * @param { boolean } isGroup - set group with accessibility, default value is false.
   * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility, default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): T;

  /**
   * Sets the accessibility text.
   *
   * @param { string } value - set accessibility text, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the accessibility text.
   *
   * @param { string } value - set accessibility text, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the accessibility text.
   * When a component does not contain a text attribute, you can use this API to set an accessibility
   * text attribute, so that accessibility services can announce the specified content for the component.
   * 
   * @param { string } value - set accessibility text, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityText(value: string): T;

  /**
   * Sets accessibility next focus id
   * @param { string } nextId - set component next accessibility focus id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityNextFocusId(nextId: string): T;

  /**
   * Sets the accessibility default foucs flag
   * @param { boolean } focus - if the component is accessibility default focus,focus set true
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDefaultFocus(focus: boolean): T;

  /**
   * Sets accessibility same page mode
   * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T;

  /**
   * Sets accessibilityScrollTriggerable
   * @param { boolean } isTriggerable - set property of supporting scroll in accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityScrollTriggerable(isTriggerable: boolean): T;

  /**
   * Sets the accessibility text.
   * <p><strong>NOTE</strong>
   * If a component has both text content and accessibility text, only the accessibility text is announced.
   * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
   * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
   * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
   * </p>
   * @param { Resource } text - set accessibility text
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityText(text: Resource): T;

  /**
   * Sets accessibility role,role indicates the custom type of the component
   * @param { AccessibilityRoleType } role - set accessibility component type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityRole(role: AccessibilityRoleType): T;

  /**
   * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
   * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onAccessibilityFocus(callback: AccessibilityFocusCallback): T;

  /**
   * Register accessibility action intercept callback,
   * when accessibility action is to be executed,the callback will be executed
   * @param { AccessibilityActionInterceptCallback } callback - accessibility action intercept callback function
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback): T;

  /**
   * Sets accessibilityTextHint
   *
   * @param { string } value - set accessibility text hint
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityTextHint(value: string): T;

  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityDescription(value: string): T;

  /**
   * Sets accessibilityDescription
   * 
   * with support for resource references using Resource.
   * This property provides additional context or explanation for the component,
   * helping users understand the action or function it performs.
   * <p><strong>NOTE</strong>:
   * <br>Reference resource of the accessibility description. You can specify further explanation
   * <br>of the current component, for example, possible operation consequences, especially those that
   * <br>cannot be learned from component attributes and accessibility text. If a component contains
   * <br>both text information and the accessibility description, the text is read first and then the
   * <br>accessibility description, when the component is selected.</p>
   * @param { Resource } description - set description of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityDescription(description: Resource): T;

  /**
   * Sets the accessibility level.
   * This property determines whether the component can be recognized by accessibility services.
   *
   * @param { string } value - set accessibility level, default value is auto.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the accessibility level.
   * This property determines whether the component can be recognized by accessibility services.
   *
   * @param { string } value - set accessibility level, default value is auto.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the accessibility level.
   * This property determines whether the component can be recognized by accessibility services.
   * <p>
   * Accessibility level, which is used to decide whether a component can be identified by the accessibility service.
   * <br>The options are as follows:
   * <br>"auto": The component's recognizability is determined by the accessibility grouping service and ArkUI.
   * <br>"yes": The component can be recognized by accessibility services.
   * <br>"no": The component cannot be recognized by accessibility services.
   * <br>"no-hide-descendants": Neither the component nor its child components can be recognized by accessibility services.
   * <strong>NOTE</strong>
   * <br>When accessibilityLevel is set to "auto", the component's recognizability depends on the following factors:
   * <br>1. The accessibility service internally determines whether the component can be recognized.
   * <br>2. If the parent component's accessibilityGroup property has isGroup set to true, the accessibility service will
   * <br>not focus on its child components, making them unrecognizable.
   * <br>3. If the parent component's accessibilityLevel is set to "no-hide-descendants", the component will not be
   * <br>recognized by accessibility services.</p>
   * @param { string } value - set accessibility level, default value is auto.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityLevel(value: string): T;

  /**
   * Sets accessibilityVirtualNode
   *
   * @param { CustomBuilder } builder - set virtual node of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityVirtualNode
   *
   * @param { CustomBuilder } builder - set virtual node of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityVirtualNode(builder: CustomBuilder): T;

  /**
   * Sets accessibilityChecked
   *
   * @param { boolean } isCheck - set accessibility checked status
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityChecked(isCheck: boolean): T;

  /**
   * Sets accessibilitySelected
   *
   * @param { boolean } isSelect - set accessibility selected status
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilitySelected(isSelect: boolean): T;

  /**
   * Sets obscured
   *
   * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets obscured
   *
   * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  obscured(reasons: Array<ObscuredReasons>): T;

  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  reuseId(id: string): T;

  /**
   * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
   *
   * @param { ReuseOptions } options - The configuration parameter for reusable custom component.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reuse(options: ReuseOptions): T;

  /**
   * Sets how content is drawn within nodes duration animation
   *
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets how content is drawn within nodes duration animation
   *
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets how content is drawn within nodes duration animation
   *
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  renderFit(fitMode: RenderFit): T;

  /**
   * Sets how content is drawn within nodes during animation
   *
   * @param { Optional<RenderFit> } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  renderFit(fitMode: Optional<RenderFit>): T;

  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<T> } modifier
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<T> } modifier
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  attributeModifier(modifier: AttributeModifier<T>): T;

  /**
   * Sets the gesture modifier.
   *
   * @param { GestureModifier } modifier
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  gestureModifier(modifier: GestureModifier): T;

  /**
   * Adds a background dynamic light up effect to the current component.
   *
   * @param { BackgroundBrightnessOptions } params - params indicates BackgroundBrightnessOptions
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBrightness(params: BackgroundBrightnessOptions): T;

  /**
   * Adds a background dynamic light up effect to the current component.
   *
   * @param { Optional<BackgroundBrightnessOptions> } options - params indicates BackgroundBrightnessOptions
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal gestures.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   *
   * @since 13 dynamic
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T;

  /**
   * In the touch test phase, the recognizer is selected to form a parallel relationship with other recognizers on the response chain.
   *
   * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is doing touch test.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T;

  /**
   * Events are monopolized by components.
   *
   * @param { boolean } monopolize - indicate the monopoly of events
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Events are monopolized by components.
   *
   * @param { boolean } monopolize - indicate the monopoly of events
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  monopolizeEvents(monopolize: boolean): T;

  /**
   * When the component does a touch test, a user-defined callback is triggered.
   *
   * @param { Callback<TouchEvent, HitTestMode> } callback - A callback instance used when the component does a touch test.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T;

  /**
   * This callback is triggered when the component size changes due to layout updates.
   * This event is not triggered for render attribute changes caused by re-rendering.
   *
   * @param { SizeChangeCallback } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onSizeChange(event: SizeChangeCallback): T;

  /**
   * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
   *
   * @param { FocusDrawLevel } drawLevel - indicates accessibility focus draw level.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T;

  /**
   * Register one callback which will be executed when all gesture recognizers are collected done, this happens
   * when user touchs down, the system do hit test process and collect gesture recognizers base on the touch
   * position, after this, before handling any move events, the component can use this interface to know which
   * gesture recognizers will participate in the recognition and competing with each other.
   *
   * @param { TouchTestDoneCallback } callback - A callback instance used when all gesture recognizers are collected.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onTouchTestDone(callback: TouchTestDoneCallback): T;
}

/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare class CommonAttribute extends CommonMethod<CommonAttribute> {}

/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
interface CommonInterface {
  /**
   * Constructor.
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  (): CommonAttribute;
}

/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const CommonInstance: CommonAttribute;

/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Common: CommonInterface;

/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare type CustomBuilder = (() => any) | void;

/**
 * Defines the OverlayOptions interface.
 *
 * @typedef OverlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OverlayOptions {
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  align?: Alignment;

  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: OverlayOffset;
}

/**
 * Defines the OverlayOffset.
 *
 * @typedef OverlayOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OverlayOffset {
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  x?: number;
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  y?: number;
}

/**
 * Defines the segment of blur.
 * The first element in the tuple means fraction.
 * The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
 * The second element means the stop position.
 * The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.
 *
 * @typedef { [ number, number ] } FractionStop
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare type FractionStop = [ number, number ];

/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 9 dynamic
   */
  constructor();

  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  stroke(value: ResourceColor): T;

  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  fill(value: ResourceColor): T;

  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeWidth(value: Length): T;

  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  antiAlias(value: boolean): T;

  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeDashArray(value: Array<any>): T;
}

/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface LinearGradient {
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  angle?: number | string;
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  direction?: GradientDirection;
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colors: Array<[ResourceColor, number]>;
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  repeating?: boolean;
}

/**
 * Defines the pixel round property.
 *
 * @interface PixelRoundPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PixelRoundPolicy {
  /**
   * start property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  start?: PixelRoundCalcPolicy;

  /**
   * top property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  top?: PixelRoundCalcPolicy;

  /**
   * end property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  end?: PixelRoundCalcPolicy;

  /**
   * bottom property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  bottom?: PixelRoundCalcPolicy;
}

/**
 * Linear Gradient Blur Interface
 *
 * @interface LinearGradientBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LinearGradientBlurOptions {
  /**
   * Percentage of blurring effect.
   *
   * @type { FractionStop[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  fractionStops: FractionStop[];
  /**
   * Direction of linear gradient blur.
   *
   * @type { GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  direction: GradientDirection;
}

/**
 * Define motion blur anchor coordinates.
 *
 * @interface MotionBlurAnchor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MotionBlurAnchor {
  /**
   * Define anchor coordinate x-value.Value range [0.0, 1.0].
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;
  /**
   * Define anchor coordinate y-value.Value range [0.0, 1.0].
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;
}

/**
 * Define motion blur options.
 *
 * @interface MotionBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MotionBlurOptions {
  /**
   * Define the size of motion blur radius.The range of this value is  [0.0, ∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;
  /**
   * Define motion blur anchor coordinates.
   *
   * @type { MotionBlurAnchor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: MotionBlurAnchor;
}

/**
 * Sub component border info.
 *
 * @interface LayoutBorderInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamic
 * @deprecated since 10
 */
declare interface LayoutBorderInfo {
  /**
   * Sub component borderWidth info.
   *
   * @type { EdgeWidths }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  borderWidth: EdgeWidths;

  /**
   * Sub component margin info.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  margin: Margin,

  /**
   * Sub component padding info.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  padding: Padding,
}

/**
 * Sub component layout info.
 *
 * @interface LayoutInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamic
 * @deprecated since 10
 */
declare interface LayoutInfo {
  /**
   * Sub component position info.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  position: Position,

  /**
   * Sub component constraint info.
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  constraint: ConstraintSizeOptions,
}

/**
 * Sub component info passed from framework when layout and measure happens.
 *
 * @interface LayoutChild
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamic
 * @deprecated since 10
 */
declare interface LayoutChild {
  /**
   * Sub component name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  name: string,

  /**
   * Sub component id.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  id: string,

  /**
   * Sub component constraint.
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  constraint: ConstraintSizeOptions,

  /**
   * Sub component border info.
   *
   * @type { LayoutBorderInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  borderInfo: LayoutBorderInfo,

  /**
   * Sub component position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  position: Position,

  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } childConstraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  measure(childConstraint: ConstraintSizeOptions);

  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { LayoutInfo } childLayoutInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamic
   * @deprecated since 10
   */
  layout(childLayoutInfo: LayoutInfo);
}

/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface GeometryInfo extends SizeResult {
  /**
   * Sub component borderWidth info.
   *
   * @type { EdgeWidth }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sub component borderWidth info.
   *
   * @type { EdgeWidth }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  borderWidth: EdgeWidth;

  /**
   * Sub component margin info.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sub component margin info.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  margin: Margin,

  /**
   * Sub component padding info.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sub component padding info.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  padding: Padding,
}

/**
 * Sub component info passed from framework when layout happens.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component info passed from framework when layout happens.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface Layoutable {
  /**
   * Measurement result of the child component.
   *
   * @type { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Measurement result of the child component.
   *
   * @type { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  measureResult: MeasureResult,

  /**
   * Unique ID of the child component.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  uniqueId?: number;

  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { Position } position
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { Position } position
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  layout(position: Position): void;

  /**
   * Call this method to get the margin of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMargin() : DirectionalEdgesT<number>;

  /**
   * Call this method to get the padding of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPadding() : DirectionalEdgesT<number>;

  /**
   * Call this method to get the borderWidth of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getBorderWidth() : DirectionalEdgesT<number>;
}

/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface Measurable {
  /**
   * Unique ID of the child component.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  uniqueId?: number;

  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } constraint
   * @returns { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } constraint
   * @returns { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  measure(constraint: ConstraintSizeOptions) : MeasureResult;

  /**
   * Call this method to get the margin of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMargin() : DirectionalEdgesT<number>;

  /**
   * Call this method to get the padding of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPadding() : DirectionalEdgesT<number>;

  /**
   * Call this method to get the borderWidth of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getBorderWidth() : DirectionalEdgesT<number>;
}

/**
 * Sub component SizeResult info.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component SizeResult info.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface SizeResult {
  /**
   * Width obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Width obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  width: number,

  /**
   * Height obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Height obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  height: number,
}

/**
 * Sub component MeasureResult info.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component MeasureResult info.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MeasureResult extends SizeResult {
 
}

/**
 * The navigation destination information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The navigation destination information.
 *
 * @typedef {import('../api/@ohos.arkui.observer').default.NavDestinationInfo} NavDestinationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type NavDestinationInfo = import('../api/@ohos.arkui.observer').default.NavDestinationInfo;

/**
 * The navigation information.
 *
 * @typedef {import('../api/@ohos.arkui.observer').default.NavigationInfo} NavigationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type NavigationInfo = import('../api/@ohos.arkui.observer').default.NavigationInfo;

/**
 * The router page information.
 *
 * @typedef {import('../api/@ohos.arkui.observer').default.RouterPageInfo} RouterPageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type RouterPageInfo = import('../api/@ohos.arkui.observer').default.RouterPageInfo;

/**
 * UIContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * UIContext
 *
 * @typedef { import('../api/@ohos.arkui.UIContext').UIContext } UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type UIContext = import('../api/@ohos.arkui.UIContext').UIContext;

/**
 * DrawContext
 *
 * @typedef { import('../api/arkui/Graphics').DrawContext } DrawContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawContext = import('../api/arkui/Graphics').DrawContext;

/**
 * VisualEffect
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.VisualEffect } VisualEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VisualEffect = import('../api/@ohos.graphics.uiEffect').default.VisualEffect;

/**
 * Filter
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Filter } Filter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Filter = import('../api/@ohos.graphics.uiEffect').default.Filter;


/**
 * Blender
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Blender } Blender
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 13 dynamic
 */
declare type Blender = import('../api/@ohos.graphics.uiEffect').default.Blender;

/**
 * ComponentContent.
 *
 * @typedef {import('../api/arkui/ComponentContent').ComponentContent<T>} ComponentContent<T = Object>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ComponentContent<T = Object> = import('../api/arkui/ComponentContent').ComponentContent<T>;

/**
 * Theme.
 *
 * @typedef {import('../api/@ohos.arkui.theme').Theme} Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Theme = import('../api/@ohos.arkui.theme').Theme;

/**
 * Import the DialogController type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').promptAction.DialogController } PromptActionDialogController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamic
 */
declare type PromptActionDialogController = import('../api/@ohos.promptAction').promptAction.DialogController;

/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Custom Component
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare class CustomComponent extends BaseCustomComponent {
  /**
   * aboutToReuse Method
   *
   * @param { object } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * aboutToReuse Method
   *
   * @param { object } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToReuse Method
   *
   * @param { Record<string, Object | undefined | null> } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  aboutToReuse?(params: Record<string, Object | undefined | null>): void;

  /**
   * Custom component override this method to layout each of its sub components.
   *
   * @param { Array<LayoutChild> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead CustomComponent#onPlaceChildren
   */
  onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;

  /**
   * Custom component override this method to measure each of its sub components.
   *
   * @param { Array<LayoutChild> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead CustomComponent#onMeasureSize
   */
  onMeasure?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;
}

/**
 * Custom ComponentV2
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare class CustomComponentV2 extends BaseCustomComponent {
  /**
   * aboutToReuse Method for @ComponentV2, it is executed when fetching instance of custom component from RecyclePool.
   * It is different from the @Reusable in CustomComponent, there is no param parameter in this callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToReuse?(): void;
}

/**
 * Custom Component base class and it is migrated from class CustomComponent.
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare class BaseCustomComponent extends CommonAttribute {
  /**
   * Customize the pop-up content constructor .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Customize the pop-up content constructor and it is migrated from class CustomComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  build(): void;

  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToAppear Method and it is migrated from class CustomComponent.
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToDisappear Method and it is migrated from class CustomComponent.
   *
   * The aboutToDisappear function executes before a custom component is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToDisappear?(): void;

  /**
   * aboutToRecycle Method
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * aboutToRecycle Method
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToRecycle Method and it is migrated from class CustomComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToRecycle?(): void;

  /**
   * The onWillApplyTheme function is a custom hook to get active theme object from the context
   *
   * @param { Theme } theme - Custom theme init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The onWillApplyTheme function is a custom hook to get active theme object from the context, it is migrated from class CustomComponent.
   *
   * @param { Theme } theme - Custom theme init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillApplyTheme?(theme: Theme): void;

  /**
   * Custom component override this method to layout each of its sub components.
   *
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Layoutable> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Custom component override this method to layout each of its sub components.
   *
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Layoutable> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Custom component override this method to layout each of its sub components, it is migrated from class CustomComponent.
   *
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Layoutable> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void;

  /**
   * Custom component override this method to measure each of its sub components.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Custom component override this method to measure each of its sub components.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Custom component override this method to measure each of its sub components, it is migrated from class CustomComponent.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult;

  /**
   * onPageShow Method
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * onPageShow Method
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * onPageShow Method
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * onPageShow Method and it is migrated from class CustomComponent.
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onPageShow?(): void;

  /**
   * onPageHide Method
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * onPageHide Method
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * onPageHide Method
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * onPageHide Method and it is migrated from class CustomComponent.
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onPageHide?(): void;

  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form, it is migrated from class CustomComponent.
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onFormRecycle?(): string;

  /**
   * onFormRecover Method, this is only for ArkTS form
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * onFormRecover Method, this is only for ArkTS form
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * onFormRecover Method, this is only for ArkTS form, it is migrated from class CustomComponent.
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onFormRecover?(statusData: string): void;

  /**
   * onBackPress Method
   *
   * Triggered when the user clicks the back button
   *
   * @returns { void | boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * onBackPress Method
   *
   * Triggered when the user clicks the back button
   *
   * @returns { void | boolean } true means that the page itself processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * onBackPress Method
   *
   * Triggered when the user clicks the back button
   *
   * @returns { void | boolean } true means that the page itself processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * onBackPress Method and it is migrated from class CustomComponent.
   *
   * Triggered when the user clicks the back button
   *
   * @returns { void | boolean } true means that the page itself processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onBackPress?(): void | boolean;

  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * PageTransition Method and it is migrated from class CustomComponent.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  pageTransition?(): void;

  /**
   * Get current UIContext
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get current UIContext
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Get current UIContext and it is migrated from class CustomComponent.
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getUIContext(): UIContext;

  /**
   * Get uniqueId of the custom component.
   *
   * @returns { number } - The uniqueId of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Get uniqueId of the custom component and it is migrated from class CustomComponent.
   *
   * @returns { number } - The uniqueId of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getUniqueId(): number;

  /**
   * Queries the navigation destination information.
   *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Queries the navigation destination information.
   *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Queries the navigation destination information and it is migrated from class CustomComponent.
   *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  queryNavDestinationInfo(): NavDestinationInfo | undefined;
  
  /**
   * Queries the information about the nearest **NavDestination** component
   * in the navigation stack for a custom component.
   *
   * @param { Optional<boolean> } [isInner]
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined;

  /**
   * Query the navigation information of the current custom component.
   *
   * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Query the navigation information of the current custom component and it is migrated from class CustomComponent.
   *
   * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  queryNavigationInfo(): NavigationInfo | undefined;

  /**
   * Query the router page information of the current custom component.
   *
   * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Query the router page information of the current custom component and it is migrated from class CustomComponent.
   *
   * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  queryRouterPageInfo(): RouterPageInfo | undefined;

  /**
   * The callback method after the custom component is built.
   *
   * Triggered when the custom component has been built.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The callback method after the custom component is built and it is migrated from class CustomComponent.
   *
   * Triggered when the custom component has been built.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDidBuild?(): void;

  /**
   * The dialog controller of the custom component.
   *
   * @returns { PromptActionDialogController | undefined } The controller of dialog, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getDialogController(): PromptActionDialogController | undefined;

  /**
   * Triggered when the Entry custom component has been pushed with singleton mode.
   *
   * @param { ESObject } param - New parameters pushed with singleton mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onNewParam?(param: ESObject): void;
}
/**
 * View
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * View
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 9 dynamic
 */
declare class View {
  /**
   * Just use for generate tsbundle
   *
   * @param { any } value
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Just use for generate tsbundle
   *
   * @param { any } value
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 9 dynamic
   */
  create(value: any): any;
}

/**
 * Rect info.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Rect info.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface RectResult {
  /**
   * x:Horizontal coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * x:Horizontal coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  x: number;

  /**
   * y:Vertical axis coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * y:Vertical axis coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  y: number;

  /**
   * Get the width of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the width of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  width: number;

  /**
   * Get the height of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the height of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  height: number;
}

/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CaretOffset {
  /**
   * Get the index of the CaretOffset
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Get the index of the CaretOffset
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Get the x of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Get the x of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Get the y of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Get the y of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;
}

/**
 * Defines the span options of TextContentController.
 *
 * @interface TextContentControllerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface TextContentControllerOptions {
  /**
   * the offset that add a text at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  offset?: number;
}

/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare abstract class TextContentControllerBase {
  /**
   * Get the index and relative position of the CaretOffset.
   *
   * @returns { CaretOffset } index and relative position of the CaretOffset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the index and relative position of the CaretOffset.
   *
   * @returns { CaretOffset } index and relative position of the CaretOffset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getCaretOffset() : CaretOffset;

  /**
   * Get the start and end positions of the text content.
   *
   * @returns { RectResult } Text content rect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the start and end positions of the text content.
   *
   * @returns { RectResult } Text content rect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getTextContentRect() : RectResult;

  /**
   * Get the lines number of the text content.
   *
   * @returns { number } Text content line count
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the lines number of the text content.
   *
   * @returns { number } Text content line count
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getTextContentLineCount() : number;

  /**
   * Add a text.
   *
   * @param { string } text - text value.
   * @param { TextContentControllerOptions } [textOperationOptions] - operation info.
   * @returns { number } caret index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  addText(text: string, textOperationOptions?: TextContentControllerOptions): number;

  /**
   * Delete text in TextRange.
   *
   * @param { TextRange } [range] - range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  deleteText(range?: TextRange): void;

  /**
   * Gets the selected range of text content.
   *
   * @returns { TextRange } range for selecting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getSelection(): TextRange;

  /**
   * Clear the content of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17 dynamic
   */
  clearPreviewText(): void;

  /**
   * Gets the text content of the selected range.
   *
   * @param { TextRange } [range] - selected range.
   * @returns { string } text content of the selected range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 19 dynamic
   */
  getText(range?: TextRange): string;
}

/**
 * Enum of scrollable containers' content clip mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum ContentClipMode {
  /**
   * Clip to content rect inside margin & padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CONTENT_ONLY = 0,

  /**
   * Clip to scrollable's outer rect, including padding but inside margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  BOUNDARY = 1,

  /**
   * Clip to the safeArea of scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  SAFE_AREA = 2
}

/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class ScrollableCommonMethod<T> extends CommonMethod<T> {
  /**
   * Scrollbar status.
   *
   * @param { BarState } barState - Scrollbar status.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBar(barState: BarState): T;

  /**
   * Color of the scrollbar.
   *
   * @param { Color | number | string } color - Color of the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBarColor(color: Color | number | string): T;

  /**
   * Sets the scrollbar color.
   *
   * @param { number | string } value  - Scrollbar width.<br>Default value: <em>4</em>
   * <br>Unit: vp
   * <br>If this parameter is set to a value less than or equal to 0, the default value is used.
   * The value <em>0</em> means not to show the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Margin of the scrollbar.
   *
   * @param { ScrollBarMargin } margin - Margin of the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  scrollBarMargin(margin: ScrollBarMargin): T;

  /**
   * Edge scrolling effect.
   *
   * @param { EdgeEffect } edgeEffect - edge scrolling effect.
   * @param { EdgeEffectOptions } options - edge scrolling effect options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T;

  /**
   * Called when setting whether to enable fading Edge effect.
   *
   * @param { Optional<boolean> } enabled - Whether to turn on the edge fade effect
   * @param { FadingEdgeOptions } [options] - The options of fadingEdge.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T;

  /**
   * Nested scrolling options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: NestedScrollOptions): T;

  /**
   * Whether to support scroll gestures by finger or mouse.
   *
   * @param { boolean } value - Whether to support scroll gestures by finger or mouse.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableScrollInteraction(value: boolean): T;

  /**
   * Friction coefficient.
   *
   * @param { number | Resource } value - friction coefficient.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  friction(value: number | Resource): T;

  /**
   * Called when the scrollable scrolls.
   *
   * @param { function } event - callback of scrollable,
   * scrollOffset is offset per frame scrolling, ScrollState is current scroll state.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T;

  /**
   * Called when the scrollable will scroll.
   *
   * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): T;

  /**
   * Called when the scrollable did scroll.
   *
   * @param { OnScrollCallback } handler - callback of scrollable,
   * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onDidScroll(handler: OnScrollCallback): T;

  /**
   * Called when the scrollable will end dragging.
   *
   * @param { OnWillStopDraggingCallback } handler - callback of end dragging,
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  onWillStopDragging(handler: OnWillStopDraggingCallback): T;

  /**
   * Called when the scrollable reaches the start position.
   *
   * @param { function } event - Callback function, triggered when the scrollable reaches the start position.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onReachStart(event: () => void): T;

  /**
   * Called when the scrollable reaches the end position.
   *
   * @param { function } event - Callback function, triggered when the scrollable reaches the end position.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onReachEnd(event: () => void): T;

  /**
   * Called when the scrollable starts scrolling.
   *
   * @param { function } event - Callback function, triggered when the scrollable starts scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onScrollStart(event: () => void): T;

  /**
   * Called when the scrollable stops scrolling.
   *
   * @param { function } event - Callback function, triggered when the scrollable stops scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onScrollStop(event: () => void): T;

  /**
   * Limit the max speed when fling.
   *
   * @param { number } speedLimit - Max fling speed, the minimum value is 0, the maximum value is not limited.
   *                                The unit is vp/s.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  flingSpeedLimit(speedLimit: number): T;

  /**
   * Clip the content of the scrollable container, excluding background.
   *
   * @param { ContentClipMode | RectShape } clip - A value from enum ContentClipMode or a customized clip rect.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  clipContent(clip: ContentClipMode | RectShape): T;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T;

  /**
   * Controls whether the scrollable scrolls back to top when status bar is clicked.
   *
   * @param { boolean } backToTop - whether the scrollable scrolls back to top when status bar is clicked.
   * The default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  backToTop(backToTop: boolean): T;
}

/**
 * The actual offset by which the scrollable scrolls.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ScrollResult {
  /**
   * Actual offset by which the scrollable scrolls in vp.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  offsetRemain: number;
}

/**
 * Called before scroll to allow developer to control real offset the Scrollable can scroll.
 *
 * @typedef { function } OnWillScrollCallback
 * @param { number } scrollOffset - offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { void | ScrollResult } the remain offset for the scrollable,
 *     same as scrollOffset when no ScrollResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnWillScrollCallback = 
(scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult;

/**
 * On scroll callback using in scrollable onDidScroll.
 *
 * @typedef { function } OnScrollCallback
 * @param { number } scrollOffset - offset this frame did scroll.
 * @param { ScrollState } scrollState - current scroll state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;

/**
 * On scroll callback using in scrollable onWillStopDragging.
 *
 * @typedef { function } OnWillStopDraggingCallback
 * @param { number } velocity - The veolicity of the scroll view at the moment the touch was released.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare type OnWillStopDraggingCallback = (velocity: number) => void;

/**
 * Defines the onMove callback.
 *
 * @typedef { function } OnMoveHandler
 * @param { number } from - Index number for moving elements.
 * @param { number } to - Target index number for moving elements.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnMoveHandler = (from: number, to: number) => void;

/**
 * Define item drag event handler.
 *
 * @interface ItemDragEventHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ItemDragEventHandler {
  /**
   * This callback is triggered when the item is long pressed.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onLongPress?: Callback<number>;

  /**
   * This callback is triggered when the item is dragged.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDragStart?: Callback<number>;

  /**
   * This callback is triggered when an item is moved through other items.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onMoveThrough?: OnMoveHandler;

  /**
   * This callback is triggered when the item is dropped.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDrop?: Callback<number>;
}

/**
 * Define DynamicNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DynamicNode<T> {
  /**
   * Set the move action.
   *
   * @param { Optional<OnMoveHandler> } handler
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onMove(handler: Optional<OnMoveHandler>): T;

  /**
   * Set the move action.
   *
   * @param { Optional<OnMoveHandler> } handler
   * @param { ItemDragEventHandler } eventHandler
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onMove(handler: Optional<OnMoveHandler>, eventHandler: ItemDragEventHandler): T;
  
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface EdgeEffectOptions {
  /**
   * Enable Sliding effect when component does not full screen.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Enable Sliding effect when component does not full screen.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  alwaysEnabled: boolean;

  /**
   * Set the effective edge of the edge effect.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectEdge?: number;
}

/**
 * Enumerates the effective edge of the edge effect.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum EffectEdge {

  /**
   * Effective only for the starting edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  START = 1,

  /**
   * Effective only for the end edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  END = 2,
}

/**
 * Indicates children main size.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ChildrenMainSize {
  /**
   * Creates an instance of ChildrenMainSize.
   *
   * @param { number } childDefaultSize - default main size, in vp. If the main axis is vertical, it indicates height.
   * If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(childDefaultSize: number);

  /**
   * Set default size.
   *
   * @param { number } value - default main size, in vp. If the main axis is vertical, it indicates height.
   * If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set childDefaultSize(value: number);

  /**
   * Get default size
   *
   * @returns { number } - default main size, in vp. If the main axis is vertical, it indicates height.
   * If the main axis is horizontal, it indicates width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get childDefaultSize(): number;

  /**
   * Changes children main size by removing or replacing existing elements and/or adding new elements in place.
   *
   * @param { number } start - Zero-based index at which to start changing the children main size.
   * @param { number } [deleteCount] - Indicating the number of children main size to remove from start.
   * @param { Array<number> } [childrenSize] - Add the new children main size, beginning from start.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @example splice(1, 0, [100]), Insert a child after first child, the child's main size is 100vp.
   * splice(1, 1), Delete the second child.
   * splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
   */
  splice(start: number, deleteCount?: number, childrenSize?: Array<number>): void;

  /**
   * Updates main size for specified child.
   *
   * @param { number } index - index of child to be updated.
   * @param { number } childSize - new section options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(index: number, childSize: number): void;
}

/**
 * Define BackgroundBrightness Options.
 *
 * @interface BackgroundBrightnessOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BackgroundBrightnessOptions {

  /**
   * Rate represents the rate at which lightUpDegree
   * decreases with increasing pixel brightness.
   *
   * @type { number } -The default value is 0.0, value range: (0.0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  rate: number;

  /**
   * LightUpDegree represents the degree of brightness
   * of the rgb value changes when its brightness
   * is 0.
   *
   * @type { number }  -The default value is 0.0, value range: [-1.0, 1.0].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  lightUpDegree: number;
}

/**
 * PointLightStyle info
 *
 * @interface PointLightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11 dynamic
 */
declare interface PointLightStyle {
  /**
   * Defines the PointLight light intensity and position.
   *
   * @type { ?LightSource }
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  lightSource?: LightSource;
  /**
   * Defines the PointLight illuminated type.
   *
   * @type { ?IlluminatedType }
   * @default IlluminatedType.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  illuminated?: IlluminatedType;
  /**
   * Defines the PointLight bloom.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  bloom?: number;
}

/**
 * LightSource info
 *
 * @interface LightSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11 dynamic
 */
declare interface LightSource {
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  positionX: Dimension;
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  positionY: Dimension;
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  positionZ: Dimension;
  /**
   * Defines the PointLight light intensity.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   */
  intensity: number;
  /**
   * Defines the PointLight light color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamic
   */
  color?: ResourceColor;
}

/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>;

/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WrappedBuilder<Args extends Object[]> {
  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  builder: (...args: Args) => void;

  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(builder: (...args: Args) => void);
}


/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface KeyframeAnimateParam {
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  delay?: number;

  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iterations?: number;

  /**
   * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFinish?: () => void;

  /**
   * Indicates expectedFrameRateRange of keyframe animation.
   *
   * @type { ?ExpectedFrameRateRange }
   * @default { min: 0, expected: 0, max: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface KeyframeState {
  /**
   * Animation duration of this keyframe, in ms.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation duration of this keyframe, in ms.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  duration: number;

  /**
   * Animation curve of this keyframe.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation curve of this keyframe.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * The closure function to specify the terminating state of this keyframe.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The closure function to specify the terminating state of this keyframe.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  event: () => void;
}


/**
 * Defines the basic callback.
 *
 * @typedef Callback<T, V = void>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Callback<T,V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  (data: T): V;
}

/**
 * Defines the callback type used in hover events.
 * The value of isHover indicates whether the mouse is hovering over the component.
 * The value of event contains information about HoverEvent.
 *
 * @typedef { function } HoverCallback
 * @param { boolean } isHover
 * @param { HoverEvent} event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type HoverCallback = (isHover: boolean, event: HoverEvent) => void;

/**
 * Defines the callback type used in accessibility hover events.
 * The value of isHover indicates whether the touch is hovering over the component.
 * The value of event contains information about AccessibilityHoverEvent.
 *
 * @typedef { function } AccessibilityCallback
 * @param { boolean } isHover
 * @param { AccessibilityHoverEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;

/**
 * Defines the callback type used in accessibility hover transparent event.
 *
 * @typedef { function } AccessibilityTransparentCallback
 * @param { TouchEvent } event - The value of event contains information about original accessibility hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type AccessibilityTransparentCallback = (event: TouchEvent) => void

/**
 * Defines the options about VisibleAreaEvent.
 *
 * @interface VisibleAreaEventOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface VisibleAreaEventOptions {
  /**
   * Each number in ratios indicates the value of visibility ratio. Each number in the Array value range in [0, 1].
   *
   * @type { Array<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ratios: Array<number>;

  /**
   * The value of expectedUpdateInterval indicates desired update period(ms).
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  expectedUpdateInterval?: number;
}

/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isVisible - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isExpanding - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;

/**
 * Defines a UICommonEvent which is used to set different common event to target component.
 *
 * @interface UICommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UICommonEvent {
  /**
   * Set or reset the callback which will be triggered a click event when clicked.
   *
   * @param { Callback<ClickEvent> | undefined } callback - The callback about the click event. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnClick(callback: Callback<ClickEvent> | undefined): void;

  /**
   * Set or reset the callback which will be triggered a touch event when touched.
   *
   * @param { Callback<TouchEvent> | undefined } callback - The callback about the touch event. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnTouch(callback: Callback<TouchEvent> | undefined): void;

  /**
   * Set or reset the callback is triggered when a component mounts a display.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when a component mounts a display. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnAppear(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback is triggered when component uninstallation disappears.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when component uninstallation disappears. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnDisappear(callback: Callback<void> | undefined): void;


  /**
   * Set or reset the callback is triggered when component has keyboard input.
   *
   * @param { Callback<KeyEvent> | undefined } callback - The callback will be triggered when has keyboard input. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;

  /**
   * Set or reset the callback which is triggered when component get focus.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when a component get focus. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnFocus(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when lose focus.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when a component lose focus. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnBlur(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when has a hover event.
   *
   * @param { HoverCallback | undefined } callback - The callback will be triggered when has a hover event. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnHover(callback: HoverCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when has a mouse event.
   *
   * @param { Callback<MouseEvent> | undefined } callback - The callback will be triggered when has mouse input. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnMouse(callback: Callback<MouseEvent> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the size of component changed.
   *
   * @param { SizeChangeCallback | undefined } callback - The callback will be triggered when the size of component changed. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnSizeChange(callback: SizeChangeCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when the visibleArea of component changed.
   *
   * @param { VisibleAreaEventOptions } options - The options for the visibility event.
   * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
   * If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}

/**
 * Defines a UIScrollableCommonEvent which is used to set event to target component.
 *
 * @extends UICommonEvent
 * @interface UIScrollableCommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIScrollableCommonEvent extends UICommonEvent {
  /**
   * Set or reset the callback which is triggered when the scrolling reaches the start position.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the
   *     scrolling reaches the start position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnReachStart(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the scrolling reaches the end position.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the
   *     scrolling reaches the end position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnReachEnd(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the scrolling started.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the scrolling started.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollStart(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the scrolling stoped.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the scrolling stoped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollStop(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when scrolling begin each frame.
   *
   * @param { OnScrollFrameBeginCallback | undefined } callback - callback function, triggered when the
   *     scrolling begin each frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void;
}

/**
 * Defines a UIGestureEvent which is used to set different gestures to target component.
 *
 * @interface UIGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UIGestureEvent {
  /**
   * Add a gesture bound to the component.
   *
   * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
   * @param { GesturePriority } priority - priority indicates the gesture's priority.
   * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void;

  /**
   * Add a parallel gesture bound to the component.
   *
   * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
   * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void;

  /**
   * Remove the gesture that is bound to the component and marked as tag.
   *
   * @param { string } tag - tag indicates the gesture's tag.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeGestureByTag(tag: string): void;

  /**
   * Clear gestures bound to the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  clearGestures(): void;
}

/**
 * Defines the gesture modifier.
 *
 * @interface GestureModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GestureModifier {
  /**
   * Defines the gesture update function.
   *
   * @param { UIGestureEvent } event
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyGesture(event: UIGestureEvent): void;
}

/**
 * Defines the selection options.
 *
 * @interface SelectionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SelectionOptions {
  /**
   * Menu pop-up policy.
   *
   * @type { ?MenuPolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menuPolicy?: MenuPolicy;
}

/**
 * Defines the next focus item.
 *
 * @interface FocusMovement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface FocusMovement {
  /**
   * Next focus item's component identifier of forward.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  forward?: string;
  /**
   * Next focus item's component identifier of backward.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backward?: string;
  /**
   * Next focus item's component identifier of up.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  up?: string;
  /**
   * Next focus item's component identifier of down.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  down?: string;
  /**
   * Next focus item's component identifier of left.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  left?: string;
  /**
   * Next focus item's component identifier of right.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  right?: string;
}

/**
 * enum keyboard avoid mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum KeyboardAvoidMode {
  /**
   * Defines avoid keyboard when keyboard shows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Defines not avoid keyboard when keyboard shows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 1
}

/**
 * Enumerates the type of area in hover mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum HoverModeAreaType {

  /**
   * Layout top half screen when the phone in hover mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  TOP_SCREEN = 0,

  /**
   * Layout bottom half screen when the phone in hover mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  BOTTOM_SCREEN = 1
}

/**
 * Defines a range of dates.
 *
 * @interface DateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface DateRange {
  /**
   * Defines the start date of the date range.
   *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  start?: Date;

  /**
   * Defines the end date of the date range.
   *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  end?: Date;
}
