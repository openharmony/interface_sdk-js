/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * The type for window.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
type window = import('../api/@ohos.window').default;

/**
 * Defines callback context information, which is passed to the application in the hover detection callback to allow the
 * application to access the drag status.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type SpringLoadingContext = import('../api/@ohos.arkui.dragController').default.SpringLoadingContext;

/**
 * Defines the configuration parameters for drag hover detection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type DragSpringLoadingConfiguration = import('../api/@ohos.arkui.dragController').default.DragSpringLoadingConfiguration;

/**
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  freezeWhenInactive : boolean,

  /**
   * the reuse type of a custom component.
   *
   * @default perInstance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  reusePool?: ReusePoolOwnership;

  /**
   * Collection of custom components to be reused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  poolAccepts?: Function[];
}

/**
 * Defining the reuse type of a custom component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type ReusePoolOwnership = 'shared' | 'perInstance';

/**
 * Defines a type for memory optimization strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum ReusableMemOptStrategy {
  /**
   * No memory optimization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,
  /**
   * CustomComponent handles the memory optimization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}

/**
 * Defines the options for Reusable ClassDecorator.
 *
 * @interface ReusableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface ReusableOptions {
  /**
   * Memory optimization strategy for CustomComponent reuse
   *
   * @type { ?ReusableMemOptStrategy }
   * @default ReusableMemOptStrategy.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  memoryOptimizationStrategy?: ReusableMemOptStrategy;
}

/**
 * Provides configuration options for the character counter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface InputCounterOptions {
  /**
   * Threshold percentage for displaying the character counter. The character counter is displayed when the number of
   * characters that have been entered is greater than the maximum number of characters multiplied by the threshold
   * percentage value. When displayed, the character counter is in the following format: Number of characters that have
   * been entered/Maximum number of characters allowed. It is visible when the number of characters entered is greater
   * than the character limit multiplied by the threshold percentage value. Value range: [1, 100]. If the value is not
   * an integer, it is rounded down to the nearest integer. If the value exceeds the valid value range, the character
   * counter is not displayed. If the value is **undefined**, the character counter is displayed, but this parameter has
   * no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  thresholdPercentage?: number;

  /**
   * Whether to highlight the text box border and character counter subscript in red. If **InputCounterOptions** is not
   * set, the text box border and character counter subscript turn red when the number of characters entered reaches the
   *  limit. If the character counter is displayed and **thresholdPercentage** is set to a valid value, the text box
   * border and character counter subscript turn red when the number of entered characters exceeds the limit. If this
   * parameter is **true**, the red border is displayed; if **false**, it is not displayed.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  highlightBorder?: boolean;

  /**
   * Text color of the character counter. When the input character count exceeds the maximum limit multiplied by the
   * specified percentage, the counter displays the current count text using this color. If **counterTextColor** is not
   * set, the default gray color is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  counterTextColor?: ColorMetrics;

  /**
   * Text color of the character counter when the maximum limit is exceeded. When the user input exceeds the maximum
   * character count, both the counter text and border switch to this color to indicate overflow. If
   * **counterTextOverflowColor** is not set, the default red color is used.
   *
   * **NOTE**
   *
   * The border color is changed only when the **highlightBorder** attribute of
   * [InputCounterOptions]{@link InputCounterOptions} is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  counterTextOverflowColor?: ColorMetrics;
}

/**
 * Provides text decoration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextDecorationOptions {
  /**
   * Type of the text decoration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: TextDecorationType;

  /**
   * Color of the text decoration.
   * Default value: Color.Black.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Style of the text decoration.
   * Default value: TextDecorationStyle.SOLID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;

  /**
   * The scale value of decoration thickness.
   * Value constraint: Negative values are handled as default values. Default value: 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  thicknessScale?: number;
}

/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Component ClassDecorator
 * Component is a ClassDecorator and it supports ComponentOptions as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Component: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);

/**
 * Defining ComponentV2 ClassDecorator
 *
 * ComponentV2 is a ClassDecorator and it supports ComponentOptions as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining ComponentV2 ClassDecorator
 *
 * ComponentV2 is a ClassDecorator and it supports ComponentOptions as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const ComponentV2: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);

/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @form
 * @since 10
 */
/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
 /**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface EntryOptions {
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @since 10
   */
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  routeName? : string;

  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @since 10
   */
  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  storage? : LocalStorage;

  /**
   * Determines whether to use the LocalStorage instance object returned by the LocalStorage.getShared() interface.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Entry: ClassDecorator & ((options?: LocalStorage | EntryOptions) => ClassDecorator);

/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Observed: ClassDecorator;

/**
 * Defining ObservedV2 ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);

/**
 * Defining Require PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Require: PropertyDecorator;

/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const BuilderParam: PropertyDecorator;

/**
 * Defining Local PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Local PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Local: PropertyDecorator;

/**
 * Defining Param PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Param PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Param: PropertyDecorator;

/**
 * Defining Once PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Once PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Once: PropertyDecorator;

/**
 * Defining Event PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Event PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Event: PropertyDecorator;

/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const State: PropertyDecorator;

/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare const Track: PropertyDecorator;

/**
 * Defining Trace PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare const Trace: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const ObjectLink: PropertyDecorator;

/**
 * Defines the options of Provide PropertyDecorator.
 *
 * @interface ProvideOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Provide: PropertyDecorator & ((value: string | ProvideOptions) => PropertyDecorator);

/**
 * Defining Provider PropertyDecorator, aliasName is the only matching key and if
 * aliasName is the default, the default attribute name is regarded as aliasName.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Provider PropertyDecorator, aliasName is the only matching key and if
 * aliasName is the default, the default attribute name is regarded as aliasName.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Provider: (aliasName?: string) => PropertyDecorator;

/**
 * Defines the class of System Env Key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class SystemEnvKey<T> {
  /**
   * The corresponding type of the system env key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  private type?: T;
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  protected constructor();
}
/**
 * Defines writable system environment variable keys.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class WritableSystemEnvKey<T> extends SystemEnvKey<T> {}
/**
 * Define read-only system environment variable keys.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class ReadonlySystemEnvKey<T> extends SystemEnvKey<T> {}
/**
 * Defines the custom environment Key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CustomEnvKey<S> {
  /**
   * The corresponding type of the custom env key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  private type?: S;
  /**
   * create CustomEnvKey
   *
   * @returns { CustomEnvKey<T> } CustomEnvKey
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static create<T>(): CustomEnvKey<T>;

  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  protected constructor();
}
/**
 * Defines the writable system environment key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class WritableEnvKey {
  /**
   * Defines the system environment key direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly DIRECTION: WritableSystemEnvKey<Direction>;
  /**
   * Defines the system environment key fontScale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly FONT_SCALE: WritableSystemEnvKey<double>;
}

/**
 * Defines the readonly system environment key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class ReadonlyEnvKey {
  /**
   * System environment avoidarea key that is used to obtain the avoid area of the window, measured in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_AVOID_AREA: ReadonlySystemEnvKey<window.UIEnvWindowAvoidAreaInfoVP>;
  /**
   * System environment avoidarea key that is used to obtain the avoid area of the window, measured in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_AVOID_AREA_PX: ReadonlySystemEnvKey<window.UIEnvWindowAvoidAreaInfoPX>;
  /**
   * System environment windowsize key that is used to obtain the size of the window, measured in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_SIZE: ReadonlySystemEnvKey<window.SizeInVP>;
  /**
   * System environment windowsize key that is used to obtain the size of the window, measured in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_SIZE_PX: ReadonlySystemEnvKey<window.Size>;
  /**
   * System environmental displayid key that is used to obtain the display id of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_DISPLAY_ID: ReadonlySystemEnvKey<long>;
  /**
   * System environmental system density key that is used to obtain the system density of the display
   *     where the window is located.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_SYSTEM_DENSITY: ReadonlySystemEnvKey<double>;
  /**
   * System environment windowisfocused key that is used to obtain whether the window is focused or not.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_IS_FOCUSED: ReadonlySystemEnvKey<boolean>;
  /**
   * System environment windowishighlighted key that is used to obtain whether the window is highlighted or not.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_IS_HIGHLIGHTED: ReadonlySystemEnvKey<boolean>;
}

/**
 * Defines the custom environment PropertyDecorator.
 *
 * @param { CustomEnvKey<T> } key - custom environment key.
 * @returns { PropertyDecorator } CustomEnv decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator;

/**
 * Define Env Decorator type
 *
 * @typedef { function } EnvDecorator
 * @param { SystemProperties } value - key value input by the user
 * @returns { PropertyDecorator } Env decorator
 * @throws { BusinessError } 140000 - Invalid key for @Env
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare type EnvDecorator = (value: SystemProperties) => PropertyDecorator;
/**
 * Defining Env PropertyDecorator.
 * On API 26.0.0 and above, the parameter also supports the SystemEnvKey<T> type.
 *
 * @param { SystemProperties } key - key value input by the user. [since 22 - 24]
 * @param { SystemEnvKey<T> | SystemProperties } key - key value input by the user. [since 26.0.0]
 * @returns { PropertyDecorator } Env decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 26.0.0]
 * @atomicservice
 * @since 22 dynamic
 */
declare function Env<T>(key: SystemEnvKey<T> | SystemProperties): PropertyDecorator;

/**
 * Defining Environment variable enumeration value.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare enum SystemProperties {
  /**
   * System environmental breakpoint key that is used to obtain the width and height breakpoint value of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  BREAK_POINT = 'system.arkui.breakpoint',
  /**
   * System environmental avoidarea key that is used to obtain the avoid area of the window, measured in vp.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * System environmental avoidarea key that is used to obtain the avoid area of the window, measured in vp.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_AVOID_AREA = 'system.window.avoidarea',
  /**
   * System environmental avoidarea key that is used to obtain the avoid area of the window, measured in px.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * System environmental avoidarea key that is used to obtain the avoid area of the window, measured in px.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_AVOID_AREA_PX = 'system.window.avoidarea.px',
  /**
   * System environmental windowsize key that is used to obtain the size of the window, measured in vp.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * System environmental windowsize key that is used to obtain the size of the window, measured in vp.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_SIZE = 'system.window.size',
  /**
   * System environmental windowsize key that is used to obtain the size of the window, measured in px.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * System environmental windowsize key that is used to obtain the size of the window, measured in px.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_SIZE_PX = 'system.window.size.px',
};

/**
 * Defines the consumption attribute decorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel

 * @since 7
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining Consumer PropertyDecorator, aliasName is the only matching key and
 * if aliasName is the default, the default attribute name is regarded as aliasName.
 * And @Consumer will find the nearest @Provider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Consumer PropertyDecorator, aliasName is the only matching key and
 * if aliasName is the default, the default attribute name is regarded as aliasName.
 * And @Consumer will find the nearest @Provider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Consumer: (aliasName?: string) => PropertyDecorator;

/**
 * Defining Computed MethodDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defining Computed MethodDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare const Computed: MethodDecorator;

/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Watch: (value: string) => PropertyDecorator;

/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Builder: MethodDecorator;

/**
 * Defining LocalBuilder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare const LocalBuilder: MethodDecorator;

/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 8
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Styles: MethodDecorator;

/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const Extend: MethodDecorator & ((value: any) => MethodDecorator);

/**
 * The @AnimatableExtend decorator is used to customize animatable property methods.
 * Functions defined within this decorator are called on a frame-by-frame basis during the animation process
 * until the animation ends.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const AnimatableExtend: MethodDecorator & ((value: Object) => MethodDecorator);

/**
 * Define Monitor MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Define Monitor MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
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
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
/**
 * Define Monitor Decorator type
 *
 * @typedef { function } MonitorDecorator
 * @param { string } value - Monitored path input by the user
 * @param { string[] } args - Monitored path(s) input by the user
 * @returns { MethodDecorator } Monitor decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 * @noninterop
 */
/**
 * Defines Monitor Decorator type
 *
 * @typedef { function } MonitorDecorator
 * @param { string | MonitorDecoratorOptions } value - Monitored path input by the user or config options.
 * @param { string[] } args - Monitored path(s) input by the user
 * @returns { MethodDecorator } Monitor decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 * @noninterop
 */
declare type MonitorDecorator = (value: string | MonitorDecoratorOptions, ...args: string[]) => MethodDecorator;

/**
 * Defines MonitorDecoratorOptions interface
 *
 * @interface MonitorDecoratorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface MonitorDecoratorOptions {
  /**
   * Enables wildcard feature.
   * Set to true to enable wildcard feature, set to false to disable it.
   * The default value is true.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableWildcard?: boolean;
}

/**
 * Define IMonitor interface
 *
 * @interface IMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Define IMonitor interface
 *
 * @interface IMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface IMonitor {
  /**
   * Array of changed paths(keys)
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Array of changed paths(keys)
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  dirty: Array<string>;

  /**
   * Return the pair of the value before the most recent change and current value for given path.
   * If path does not exist, return undefined; If path is not specified, return the value pair corresponding to the first path in dirty.
   *
   * @param { string } [path]
   * @returns { IMonitorValue<T> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Return the pair of the value before the most recent change and current value for given path.
   * If path does not exist, return undefined; If path is not specified, return the value pair
   * corresponding to the first path in dirty.
   *
   * @param { string } [path]
   * @returns { IMonitorValue<T> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  value<T>(path?: string): IMonitorValue<T> | undefined;
}

/**
 * Define IMonitorValue interface
 *
 * @interface IMonitorValue<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Define IMonitorValue interface
 *
 * @interface IMonitorValue<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface IMonitorValue<T> {
  /**
   * Get the previous value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Get the previous value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  before: T;

  /**
   * Get current value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Get current value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  now: T;

  /**
   * Monitored path input by the user.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Monitored path input by the user.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  path: string;
}

/**
 * Define SyncMonitor MethodDecorator. Decorator path parameters are the same as defined for Monitor.
 * The function decorator is functionally equivalent to the UIUtils.addMonitor API with isSynchronous enabled.
 * SyncMonitor must contain at least one path item, with multiple path items separated by commas.
 * Path items are either observed attribute names or array item indices.The path in SyncMonitor
 * supports wildcard at the end of a path item, but path items must never appear at the beginning or
 * in the middle of a path. All other paths using one or more wildcard are invalid.
 *
 * Functions decorated with @SyncMonitor can be used in @ObservedV2 objects and @ComponentV2.
 *
 * @type { MonitorDecorator }
 * @throws { BusinessError } 130001 - The path is invalid.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare const SyncMonitor: MonitorDecorator;

/**
 * The **AnimatableArithmetic** API defines animation calculation rules for non-number data types. To animate non-number
 * data (such as arrays, structs, and colors), you need to implement the addition, subtraction, multiplication, and 
 * equality checking functions in the **AnimatableArithmetic\<T\>** API. This enables the data to participate in 
 * animation interpolation calculations and to detect whether the data has changed. In other words, the non-number data 
 * is defined as types that implement the **AnimatableArithmetic\<T\>** API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface AnimatableArithmetic<T> {
  /**
   * Defines the addition rule for the data type.
   *
   * @param { AnimatableArithmetic<T> } rhs - Object for the addition operation.
   * @returns { AnimatableArithmetic<T> } Result of the addition operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * Defines the subtraction rule for the data type.
   *
   * @param { AnimatableArithmetic<T> } rhs - Object for the subtraction operation.
   * @returns { AnimatableArithmetic<T> } Result of the subtraction operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * Defines the multiplication rule for the data type.
   *
   * @param { number } scale - Coefficient for the multiplication operation.
   * @returns { AnimatableArithmetic<T> } Result of the multiplication operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  multiply(scale: number): AnimatableArithmetic<T>;

  /**
   * Defines the equality check rule for the data type.
   *
   * @param { AnimatableArithmetic<T> } rhs - Another data object to compare for equality with the current object.
   * @returns { boolean } Whether the objects are equal. Returns **true** if they are equal; returns **false**
   *     otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
 * @stagemodelonly
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const CustomDialog: ClassDecorator;

/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 9
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare const LocalStorageLink: (value: string) => PropertyDecorator;

/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const LocalStorageProp: (value: string) => PropertyDecorator;

/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * If no component is passed in or the passed-in parameter type is invalid, the default context is returned.
 * The default context is the context obtained by tracing the call chain of the API.
 * If this API is used in an asynchronous callback or not initially called on the current page, the context of the
 * instance may fail to be traced. In this case, undefined is returned.
 * @returns { Context }
 * The context type depends on the ability type.
 * For example, if this API is called on a page of the UIAbility, the return value type is UIAbilityContext;
 * if this API is called on a page of the ExtensionAbility, the return value type is ExtensionContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * If no component is passed in or the passed-in parameter type is invalid, the default context is returned.
 * The default context is the context obtained by tracing the call chain of the API.
 * If this API is used in an asynchronous callback or not initially called on the current page, the context of the
 * instance may fail to be traced. In this case, undefined is returned.
 * @returns { Context }
 * The context type depends on the ability type.
 * For example, if this API is called on a page of the UIAbility, the return value type is UIAbilityContext;
 * if this API is called on a page of the ExtensionAbility, the return value type is ExtensionContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * If no component is passed in or the passed-in parameter type is invalid, the default context is returned.
 * The default context is the context obtained by tracing the call chain of the API.
 * If this API is used in an asynchronous callback or not initially called on the current page, the context of the
 * instance may fail to be traced. In this case, undefined is returned.
 * @returns { Context }
 * The context type depends on the ability type.
 * For example, if this API is called on a page of the UIAbility, the return value type is UIAbilityContext;
 * if this API is called on a page of the ExtensionAbility, the return value type is ExtensionContext.
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
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
/**
 * Defining Reusable ClassDecorator.
 *
 * Reusable is a ClassDecorator and it supports ReusableOptions as a parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const Reusable: ClassDecorator & ((options: ReusableOptions) => ClassDecorator);

/**
 * Defining ReusableV2 ClassDecorator that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
/**
 * Defining ReusableV2 ClassDecorator that is used to decorate @ComponentV2.
 *
 * ReusableV2 is a ClassDecorator and it supports ReusableOptions as a parameters.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const ReusableV2: ClassDecorator & ((options: ReusableOptions) => ClassDecorator);

/**
 * ReuseId callback type. It is used to compute reuseId.
 *
 * @typedef { function } ReuseIdCallback
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
 * @stagemodelonly
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
   * @stagemodelonly
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
 * The data type used to describe a rectangular area.
 *
 * > **NOTE**
 * >
 * > - **x** and **y** can be set to a positive or negative percentage value. For example, when **x** is set to
 * > **'100%'**, the touch target is the offset from the right edge of the component by the component's width. When
 * > **x** is set to **'-100%'**, the touch target is the offset from the left edge of the component by the component's
 * > width. When **y** is set to **'100%'**, the touch target is the offset from the bottom edge of the component by the
 * > component's height. When **y** is set to **'-100%'**, the touch target is the offset from the top edge of the
 * > component by the component's height.
 * >
 * > - **width** and **height** can only be set to positive percentage values. When **width** is set to **'100%'**, the
 * > width of the touch target is equal to that of the component. For example, if the width of a component is 100 vp,
 * > **'100%'** indicates that the width of the touch target is also 100 vp. When **height** is set to **'100%'**, the
 * > height of the touch target is equal to that of the component.
 * >
 * > - The percentage is measured relative to the component itself.
 * >
 * > - When the parent component has [clip]{@link CommonMethod#clip(value: boolean)} set to **true**, child component
 * > interaction is affected by the parent component's response region. Children outside the parent component's response
 * > region won't respond to gestures or events.
 * >
 * > - **width** and **height** do not support **calc()** dynamic calculations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface Rectangle {

  /**
   * X coordinate of the touch point relative to the upper left corner of the component.
   *
   * Default value: **0vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  x?: Length;

  /**
   * Y coordinate of the touch point relative to the upper left corner of the component.
   *
   * Default value: **0vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  y?: Length;

  /**
   * Width of the touch target.
   *
   * Default value: **'100%'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width?: Length;

  /**
   * Height of the touch target.
   *
   * Default value: **'100%'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height?: Length;
}

/**
 * Defines a touch target consisting of an input tool type, touch position, and size.
 *
 * > **NOTE**
 * >
 * > - When the parent component has [clip]{@link CommonMethod#clip(value: boolean)} set to **true**, child component
 * > interaction is affected by the parent component's response region. Children outside the parent component's response
 * > region won't respond to gestures or events.
 * >
 * > - If the input tool type, touch position, and size are not configured for a touch target, default values are used.
 * >
 * > - Positive calculation results for x and y represent shifts to the right and down, respectively. Negative
 * > calculation results represent shifts to the left and up, respectively.
 * >
 * > - If the width and height are of the string type, the string must be in lowercase. Dynamic calculation with
 * > **calc()** is supported. The format of the input string for **calc()** is Width/Height scaling ratio ± Width/Height
 * > increment, where the scaling ratio is a percentage and the increment unit is px or vp. For example, in
 * > **calc(80% + 10vp)**, **80%** is the width/height scaling ratio, and **10vp** is the width/height increment. If the
 * > width and height are of the **LengthMetrics** type and the unit is percent, the width and height are calculated
 * > relative to the component's own width and height. **percent(1)** indicates 100%. If the calculation result is a
 * > negative value, the default value is used.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface ResponseRegion {

  /**
   * Type of the input tool applicable to the touch target.
   *
   * Default value: **ResponseRegionSupportedTool.ALL**
   *
   * @default ResponseRegionSupportedTool.ALL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  tool?: ResponseRegionSupportedTool;

  /**
   * X coordinate of the touch point relative to the upper left corner of the component.
   *
   * Default value: **LengthMetrics.vp(0)**
   *
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  x?: LengthMetrics;

  /**
   * Y coordinate of the touch point relative to the upper left corner of the component.
   *
   * Default value: **LengthMetrics.vp(0)**
   *
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  y?: LengthMetrics;

  /**
   * Width of the touch target.
   *
   * Default value: **LengthMetrics.percent(1)**
   *
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  width?: LengthMetrics | string;

  /**
   * Height of the touch target.
   *
   * Default value: **LengthMetrics.percent(1)**
   *
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  height?: LengthMetrics | string;
}
  
/**
 * Sets the expected frame rate range for an animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 19]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface ExpectedFrameRateRange {
  /**
   * Expected minimum frame rate, in fps.
   * 
   * The value range is [0, Maximum frame rate of the device].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  min: number,
  /**
   * Expected maximum frame rate, in fps.
   * 
   * The value range is [**min**, Maximum frame rate of the device].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  max: number,
  /**
   * Expected optimal frame rate, in fps.
   * 
   * The value range is [**min**, **max**]. When this parameter is set to **0**, the frame rate of the app is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  expected: number,
}

/**
 * global $r function
 *
 * @param { string } value
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $r function
 *
 * @param { string } value
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
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
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
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
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
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
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
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
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare function $rawfile(value: string): Resource;
/**
 * Enumerates the same-page modes for cross-process embedded components and their host applications.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum AccessibilitySamePageMode {
  /**
   * Ignores initial page loading events and root node page events from the cross-process embedded component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEMI_SILENT = 0,
 /**
   * Ignores all page events from the cross-process embedded component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FULL_SILENT = 1,
}
/**
 * Enumerates the component role types used by screen readers.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum AccessibilityRoleType {
  /**
  * Action sheet.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  ACTION_SHEET = 0,
  /**
  * Alert dialog box.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  ALERT_DIALOG = 1,
  /**
  * Indexer component.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  INDEXER_COMPONENT = 2,
  /**
  * Badge component.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  BADGE_COMPONENT = 3,
  /**
  * Blank placeholder component.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  BLANK = 4,
  /**
  * Button.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  BUTTON = 5,
  /**
  * Back button on a large image page.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  BACK_BUTTON = 6,
  /**
  * Drag bar for sheets.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  SHEET_DRAG_BAR = 7,
  /**
  * Calendar picker.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CALENDAR_PICKER = 8,
  /**
  * Calendar.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CALENDAR = 9,
  /**
  * Canvas component.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CANVAS = 10,
  /**
  * Gradient object.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CANVAS_GRADIENT = 11,
  /**
  * Pattern for image filling based on a specified source image and repetition mode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CANVAS_PATTERN = 12,
  /**
  * Check box component.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CHECKBOX = 13,
  /**
  * Check box group.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CHECKBOX_GROUP = 14,
  /**
  * Component for drawing circles.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  CIRCLE = 15,
  /**
  * Vertical layout of child components with horizontal dividers.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18 dynamic
  */
  COLUMN_SPLIT = 16,
  /**
   * Container that lays out child components vertically.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COLUMN = 17,
  /**
   * 2D drawing object, which can be used to draw rectangles, images, and texts on a canvas component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_RENDERING_CONTEXT_2D = 18,
  /**
   * Chart component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHART = 19,
  /**
   * Counter component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COUNTER = 20,
  /**
   * Modal container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CONTAINER_MODAL = 21,
  /**
   * Data panel component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DATA_PANEL = 22,
  /**
   * Date picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DATE_PICKER = 23,
  /**
   * Dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DIALOG = 24,
  /**
   * Divider component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DIVIDER = 25,
  /**
   * Drag bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DRAG_BAR = 26,
  /**
   * Container component for special effects.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  EFFECT_COMPONENT = 27,
  /**
   * Ellipse drawing component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ELLIPSE = 28,
  /**
   * Container that allows for flexible layout of child components.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FLEX = 29,
  /**
   * Child component of a waterfall layout container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FLOW_ITEM = 30,
  /**
   * Widget component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FORM_COMPONENT = 31,
  /**
   * Static widget interaction component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FORM_LINK = 32,
  /**
   * Gauge component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GAUGE = 33,
  /**
   * Grid container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID = 34,
  /**
   * Grid column component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_COL = 35,
  /**
   * Grid container that lays out child components vertically.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_CONTAINER = 36,
  /**
   * Single-item container within a grid container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_ITEM = 37,
  /**
   * Grid row component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_ROW = 38,
  /**
   * Hyperlink component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  HYPERLINK = 39,
  /**
   * Image component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE = 40,
  /**
   * Frame animation component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_ANIMATOR = 41,
  /**
   * Pixel data for canvas rendering.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_BITMAP = 42,
  /**
   * Pixel data for canvas rendering.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_DATA = 43,
  /**
   * Component used to display inline images.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_SPAN = 44,
  /**
   * Label.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LABEL = 45,
  /**
   * Line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LINE = 46,
  /**
   * List.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST = 47,
  /**
   * Specific item in a list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST_ITEM = 48,
  /**
   * List item group.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST_ITEM_GROUP = 49,
  /**
   * Component for display loading animations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LOADING_PROGRESS = 50,
  /**
   * Marquee component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MARQUEE = 51,
  /**
   * 2D matrix object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MATRIX2D = 52,
  /**
   * Menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU = 53,
  /**
   * Menu item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU_ITEM = 54,
  /**
   * Menu item group.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU_ITEM_GROUP = 55,
  /**
   * Content area of the **Navigation** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAV_DESTINATION = 56,
  /**
   * navrouter component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAV_ROUTER = 57,
  /**
   * Root view container for navigation routing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION = 58,
  /**
   * Navigation bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION_BAR = 59,
  /**
   * Navigation menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION_MENU = 60,
  /**
   * Navigation container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATOR = 61,
  /**
   * Canvas for custom drawing of graphics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OFFSCREEN_CANVAS = 62,
  /**
   * 2D drawing object, which can be used to draw rectangles, images, and texts on a canvas component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
  /**
   * option component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OPTION = 64,
  /**
   * Slidable panel.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PANEL = 65,
  /**
   * paper page component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PAPER_PAGE = 66,
  /**
   * Path drawing component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATH = 67,
  /**
   * Path object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATH2D = 68,
  /**
   * Pattern lock component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATTERN_LOCK = 69,
  /**
   * Picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PICKER = 70,
  /**
   * Picker view.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PICKER_VIEW = 71,
  /**
   * Plugin component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PLUGIN_COMPONENT = 72,
  /**
   * Component used to draw a polygon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POLYGON = 73,
  /**
   * Component used to draw a polyline.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POLYLINE = 74,
  /**
   * Popup with a specific style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POPUP = 75,
  /**
   * progress component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PROGRESS = 76,
  /**
   * QR code.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  QRCODE = 77,
  /**
   * Radio button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RADIO = 78,
  /**
   * Component for selecting a rating within a given range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RATING = 79,
  /**
   * Component used to draw a rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RECT = 80,
  /**
   * Pull-to-refresh container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  REFRESH = 81,
  /**
   * Relative layout component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RELATIVE_CONTAINER = 82,
  /**
   * Remote control window component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  REMOTE_WINDOW = 83,
  /**
   * Component that supports rich text editing and interactive text editing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RICH_EDITOR = 84,
  /**
   * Rich text component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RICH_TEXT = 85,
  /**
   * Pagination component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROLE_PAGER = 86,
  /**
   * Container that lays out child components horizontally.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROW = 87,
  /**
   * Horizontal layout of child components with vertical dividers.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROW_SPLIT = 88,
  /**
   * Scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SCROLL = 89,
  /**
   * Scrollbar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SCROLL_BAR = 90,
  /**
   * Search box component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEARCH = 91,
  /**
   * Search box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEARCH_FIELD = 92,
  /**
   * Drop-down list component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SELECT = 93,
  /**
   * Parent component of the drawing components.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SHAPE = 94,
  /**
   * Sidebar container that can show and hide the sidebar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SIDEBAR_CONTAINER = 95,
  /**
   * slider component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SLIDER = 96,
  /**
   * Component used to display inline text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SPAN = 97,
  /**
   * Stack container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STACK = 98,
  /**
   * Stepper component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STEPPER = 99,
  /**
   * Page child component of the stepper component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STEPPER_ITEM = 100,
  /**
   * Swiper view container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWIPER = 101,
  /**
   * Navigation indicator for the **Swiper** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWIPER_INDICATOR = 102,
  /**
   * Switch.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWITCH = 103,
  /**
   * Component for displaying a symbol glyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SYMBOL_GLYPH = 104,
  /**
   * Content view for a tab in the **Tabs** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TAB_CONTENT = 105,
  /**
   * Tab bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TAB_BAR = 106,
  /**
   * Container that allows users to switch between content views through tabs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TABS = 107,
  /**
   * Text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT = 108,
  /**
   * Text clock component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_CLOCK = 109,
  /**
   * text entry component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_ENTRY = 110,
  /**
   * Text box component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_INPUT = 111,
  /**
   * Text picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_PICKER = 112,
  /**
   * Component that displays timing information and is controlled in text format.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_TIMER = 113,
  /**
   * Text area component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_AREA = 114,
  /**
   * Text box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_FIELD = 115,
  /**
   * Time picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TIME_PICKER = 116,
  /**
   * Title bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TITLE_BAR = 117,
  /**
   * toggler component type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TOGGLER = 118,
  /**
   * UI extension component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  UI_EXTENSION_COMPONENT = 119,
  /**
   * Component for playing video files and controlling playback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  VIDEO = 120,
  /**
   * Waterfall layout container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  WATER_FLOW = 121,
  /**
   * Component for loading web pages.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  WEB = 122,
  /**
   * Custom rendering component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  XCOMPONENT = 123,
  /**
   * Null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROLE_NONE = 124
}

/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component 
 * is focused
 *
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type AccessibilityFocusCallback = (isFocus: boolean) => void;

/**
 * Enum for accessibility action type
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AccessibilityAction {
  /**
   * undefined action type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  UNDEFINED_ACTION = 0,
  /**
   * accessibility click action
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACCESSIBILITY_CLICK = 1,
}

/**
 * Enum for the result of accessibility action intercept function
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AccessibilityActionInterceptResult {
  /**
   * intercept the accessibility action
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACTION_INTERCEPT = 0,
  /**
   * the accessibility action can be continued
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACTION_CONTINUE = 1,
  /**
   * the accessibility action need to bubble up for execution
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 *
 * @param { AccessibilityAction } action - the enum of accessibility action type.
 * @returns { AccessibilityActionInterceptResult } the result of continuing to execute the action or interrupting it or
 *     bubbling up
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult;

/**
 * Defines the type of the **onFinish** callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum FinishCallbackType {
  /**
   * The callback is invoked when the entire animation is removed once it has finished.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  REMOVED = 0,
  /**
   * The callback is invoked when the animation logically enters the falling state, though it may still be in its long 
   * tail state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LOGICALLY = 1
}

/**
 * Event dispatch strategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TouchTestStrategy {

  /**
   * Custom dispatch has no effect; the system dispatches events based on the hit status of the current node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DEFAULT = 0,

  /**
   * The event is dispatched to a specified child node, and the system determines whether to dispatch events to other
   * sibling nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FORWARD_COMPETITION = 1,

  /**
   * The event is dispatched to a specified child node, and the system will not dispatch events to other sibling nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FORWARD = 2
}

/**
 * Defines parameters related to animation effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface AnimateParam {
  /**
   * Animation duration, in ms.
   * 
   * Default value: **1000**
   * 
   * Note: 1. Before API 26.0.0, the maximum animation duration for an ArkTS widget is 1,000 ms; values exceeding this 
   * limit are clamped to 1,000 ms. Starting from API version 26.0.0, the maximum animation duration for an ArkTS widget
   * is adjusted to 2,000 ms.
   * 
   * 2. To stop the animation of a property, change the property value in an animation closure with a duration of 0.
   * 3. Values less than 0 are clamped to **0**.
   * 4. Floating-point values are floored to integers. For example, if the value set is 1.2, **1** will be used.
   * 5. The **duration** parameter does not take effect when [springMotion]{@link @ohos.curves:curves.springMotion}, [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}, and [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring} are configured for **curve**.
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration?: number;
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower 
   * animation playback. The value **0** means that there is no animation.
   * 
   * When the value is set to **+∞**, the animation completes in the current frame, and the animation end callback is 
   * executed immediately.
   * 
   * Default value: **1.0**
   * 
   * Value range: [0, +∞)
   * 
   * Note: Values less than 0 are clamped to **0**.
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  tempo?: number;
  /**
   * Animation curve.
   * 
   * You are advised to specify the curve using the **Curve** or **ICurve** type.
   * 
   * When the type is string, it represents an animation interpolation curve, supporting only the following options:
   * 
   * **"linear"**: Changes linearly.
   * 
   * **"ease"**: Slow at both the start and end of an animation; equivalent to cubic-bezier(0.25, 0.1, 0.25, 1.0).
   * 
   * **"ease-in"**: Starts slowly and then accelerates; equivalent to cubic-bezier(0.42, 0.0, 1.0, 1.0).
   * 
   * **"ease-out"**: Starts quickly and then decelerates; equivalent to cubic-bezier(0.0, 0.0, 0.58, 1.0).
   * 
   * **"ease-in-out"**: Accelerates and then decelerates; equivalent to cubic-bezier(0.42, 0.0, 0.58, 1.0).
   * 
   * **"fast-out-slow-in"**: Standard curve, **cubic-bezier(0.4, 0.0, 0.2, 1.0)**
   * 
   * **"linear-out-slow-in"**: Deceleration curve, **cubic-bezier(0.0, 0.0, 0.2, 1.0)**
   * 
   * **"fast-out-linear-in"**: Acceleration curve, **cubic-bezier(0.4, 0.0, 1.0, 1.0)**
   * 
   * **"friction"**: Damping curve, **cubic-bezier(0.2, 0.0, 0.2, 1.0)**
   * 
   * **"extreme-deceleration"**: Extreme deceleration curve, **cubic-bezier(0.0, 0.0, 0.0, 1.0) curve**
   * 
   * **"rhythm"**: Rhythm curve, **cubic-bezier(0.7, 0.0, 0.2, 1.0)**
   * 
   * **"sharp"**: Sharp curve, **cubic-bezier(0.33, 0.0, 0.67, 1.0)**
   * 
   * **"smooth"**: Smooth curve, **cubic-bezier(0.4, 0.0, 0.4, 1.0)**
   * 
   * **"cubic-bezier(x1, y1, x2, y2)"**: Cubic Bezier curve. The values of **x1** and **x2** must be within the range of
   * [0, 1], as in **"cubic-bezier(0.42, 0.0, 0.58, 1.0)"**.
   * 
   * **"steps(number, step-position)"**: Step curve. **number** is required and must be a positive integer. 
   * **step-position** is optional and the values **start** and **end** are supported; defaults to end, as in 
   * **"steps(3, start)"**.
   * 
   * **"interpolating-spring(velocity,mass,stiffness,damping)"**: For details about the parameters, see 
   * [curves.interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}.
   * 
   * **"responsive-spring-motion(response,dampingFraction,overlapDuration)"**: For details about the parameters, see 
   * [curves.responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}.
   * 
   * **"spring(velocity,mass,stiffness,damping)"**: For details about the parameters, see 
   * [curves.springCurve]{@link @ohos.curves:curves.springCurve}.
   * 
   * **"spring-motion(response,dampingFraction,overlapDuration)"**: For details about the parameters, see 
   * [curves.springMotion]{@link @ohos.curves:curves.springMotion}.
   * 
   * Default value: **Curve.EaseInOut**
   *
   * @type { ?(Curve | string) } [since 7 - 8]
   * @type { ?(Curve | string | ICurve) } [since 9]
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * Delay of animation playback, in ms. By default, the playback is not delayed.
   * 
   * Default value: **0**
   * 
   * Value range: (-∞, +∞)
   * 
   * Note: 1. A non-negative **delay** defers the start of the animation. A negative **delay** plays the animation ahead
   * of schedule. If the absolute value of **delay** is less than the actual animation duration, the animation starts 
   * its first frame from the state at the absolute value. If the absolute value of **delay** is greater than or equal 
   * to the actual animation duration, the animation starts its first frame from the end state. The actual animation 
   * duration is equal to the duration of a single animation multiplied by the number of animation playback times.
   * 
   * 2. Floating-point values are floored to integers. For example, if the value set is 1.2, **1** will be used.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  delay?: number;

  /**
   * Number of times that the animation is played. By default, the animation is played once. The value **-1** indicates 
   * that the animation is played for an unlimited number of times. The value **0** indicates that there is no 
   * animation.
   * 
   * Default value: **1**
   * 
   * Value range: [-1, +∞)
   * 
   * Note: Floating-point values are floored to integers. For example, if the value set is 1.2, **1** will be used.
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  iterations?: number;

  /**
   * Playback mode. By default, the animation is played from the beginning after the playback is complete.
   * 
   * Default value: **PlayMode.Normal**
   * 
   * > **Notes about PlayMode**:
   * >
   * > - **PlayMode.Normal** and **PlayMode.Alternate** are recommended. Under these settings, the first round of the 
   * > animation is played forwards. If **PlayMode.Reverse** or **PlayMode.AlternateReverse** is used, the first round of 
   * > the animation is played backwards. In this case, the animation jumps to the end state and then starts from there.
   * >
   * > - When using **PlayMode.Alternate** or **PlayMode.AlternateReverse**, make sure the final state of the animation is
   * > the same as the value of the state variable. In other words, make sure the last round of the animation is played 
   * > forwards. When **PlayMode.Alternate** is used, **iterations** must be set to an odd number. When 
   * > **PlayMode.AlternateReverse** is used, **iterations** must be set to an even number.
   * >
   * > - **PlayMode.Reverse** is not recommended. Under this setting, the animation jumps to the end state at the 
   * > beginning, and its final state will be different from the value of the state variable.
   *
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  playMode?: PlayMode;

  /**
   * Callback invoked when the animation playback is complete. If the UIAbility moves from the foreground to the 
   * background, any finite loop animation that is still in progress will be immediately terminated, triggering the 
   * completion callback.
   * 
   * If the transition animation is disabled in the developer options and **tempo** is set to **+∞**, the callback is 
   * executed immediately when the animation playback is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish?: () => void;

  /**
   * Type of the **onFinish** callback.
   * 
   * Default value: **FinishCallbackType.REMOVED**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  finishCallbackType?: FinishCallbackType;

  /**
   * Expected frame rate range of the animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * Interface for curve object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
interface ICurve {
  /**
   * Calculates the interpolated value along the curve at the specified normalized time point.
   *
   * @param { number } fraction - Current normalized time.<br>Value range: [0, 1].<br>**NOTE**<br>A value less than 0 is
   *     treated as **0**. A value greater than 1 is treated as **1**.
   * @returns { number } Curve interpolation corresponding to the normalized time point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interpolate(fraction : number) : number;
}

/**
 * Defines motion path configuration options of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface MotionPathOptions {
  /**
   * Motion path of the translation animation. The 
   * [svg path string](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg-path-syntax) is used. 
   * In the value, **start** and **end** can be used in place of the start point and end point, for example, 
   * **'Mstart.x start.y L50 50 Lend.x end.y Z'**. For details, see 
   * [Path Drawing](docroot://ui/ui-js-components-svg-path.md).
   * 
   * If this parameter is set to an empty string, the path animation is not set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  path: string;

  /**
   * Start point of the motion path.
   * 
   * Default value: **0.0**
   * 
   * Value range: [0.0, 1.0].
   * 
   * Values less than 0.0 or greater than 1.0 are treated as the default value 0.0.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  from?: number;

  /**
   * End point of the motion path.
   * 
   * Default value: **1.0**
   * 
   * Value range: [0.0, 1.0].
   * 
   * Values less than 0.0 or greater than 1.0 are treated as the default value 1.0. After this normalization, the **to**
   * value must be greater than or equal to the **from** value.
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  to?: number;

  /**
   * Whether to rotate along the path. The value **true** means to rotate along the path, and **false** means the 
   * opposite.
   * 
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rotatable?: boolean;
}

/**
 * Parameters of the shared element transition animation.
 * 
 * > **NOTE**
 * >
 * > **motionPath** is effective only when **type** is set to **SharedTransitionEffectType.Exchange**.
 * >
 * > When **type** is set to **SharedTransitionEffectType.Exchange**, the effect focuses on smooth transition of the 
 * > position and size of matching shared elements, which can be visually observed through the component's border. The 
 * > transition, however, does not involve content properties, which will abruptly change to the target page's values at
 * > the end of the animation. For example, if a **Text** component has different **fontSize** values on two pages, the 
 * > font size will snap to the target page's value once the shared transition animation completes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface sharedTransitionOptions {
  /**
   * Animation duration.
   * 
   * Default value: **1000**
   * 
   * Unit: ms
   * 
   * Value range: [0, +∞)
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration?: number;

  /**
   * Animation curve.
   * 
   * You are advised to specify the curve using the **Curve** or **ICurve** type.
   * 
   * For the string type, this parameter indicates an animation interpolation curve. For available values, see the 
   * **curve** parameter in [AnimateParam]{@link AnimateParam}.
   * 
   * Default value: **Curve.Linear**
   *
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * Delay of animation playback.
   * 
   * Default value: **0**
   * 
   * Unit: ms
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  delay?: number;

  /**
   * Motion path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  motionPath?: MotionPathOptions;

  /**
   * Z-axis.
   * 
   * Value range: (-∞, +∞)
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  zIndex?: number;

  /**
   * Animation type.
   * 
   * Default value: **SharedTransitionEffectType.Exchange**
   *
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type?: SharedTransitionEffectType;
}

/**
 * Defines the options of geometry transition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GeometryTransitionOptions {
  /**
   * Whether to apply the animation to components that are always in the component tree. It is effective only in the 
   * **if** syntax. The value **true** means to apply the animation to components that are always in the component tree,
   * and **false** means the opposite.
   * 
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  follow?: boolean;
  /**
   * Strategy for the hierarchical position movement of **in** / **out** components in the component tree during the 
   * shared element transition process. Default value: **TransitionHierarchyStrategy.ADAPTIVE**.
   * 
   * The setting significantly affects the front-to-back overlap relationship of the **in** / **out** components in 
   * comparison to other components. Exercise caution with it under normal conditions.
   * 
   * You are advised to adjust this setting only when there is an error in the component overlap relationship observed 
   * during the shared element transition process.
   *
   * @default TransitionHierarchyStrategy.ADAPTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 12 - 12]
   * @since 12 dynamic
   */
  hierarchyStrategy?: TransitionHierarchyStrategy;
}

/**
 * Defines the linear gradient parameters.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface LinearGradientOptions {
  /**
   * Start angle of the linear gradient. When the angle is 0 degrees, the gradient direction is from bottom to top (that
   * is, 0 o'clock direction). A positive value indicates a clockwise rotation from the origin, (0, 0).
   * 
   * Value range: (-∞, +∞). Positive values indicate clockwise rotation, and negative values indicate counterclockwise 
   * rotation.
   * 
   * Default value: **180**
   * 
   * When specified as a string, valid values are pure numbers or numbers followed by units: "deg" (degrees), "rad" (
   * radians), "grad" (gradians), or "turn" (turns). Examples: "90", "90deg", "1.57rad".
   *
   * @default 180 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  angle?: number | string;

  /**
   * Direction of the linear gradient. It does not take effect when **angle** is set to a non-undefined value. 
   * **GradientDirection.None** uses the default direction. 
   * 
   * Default value: **GradientDirection.Bottom**.
   *
   * @default GradientDirection.Bottom [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  direction?: GradientDirection;

  /**
   * Array of color stops, each of which consists of a color and its stop position. Invalid colors are automatically 
   * skipped. **ResourceColor** indicates the color. **number** represents the stop position of the color, with a range 
   * of [0, 1.0]. Values less than 0 are treated as **0**, and values greater than 1.0 are treated as **1.0**. **0** 
   * indicates the start of the gradient; **1.0** indicates the end. To achieve multi-color gradients, the **number** 
   * parameters in the array should be set in ascending order. If a later number is less than a previous one, it is 
   * treated as equal to the previous value.
   * 
   * Default value: **[]**, meaning no gradient effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * Whether the colors are repeated.
   * 
   * Default value: **false**.
   * 
   * **true**: The colors are repeated.
   * 
   * **false**: The colors are not repeated.
   *
   * @default false [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  repeating?: boolean;
}

/**
 * Defines the sweep gradient parameters.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 * 
 * > **NOTE**
 * >
 * > When using the **metricsColors** parameter, take note of the following:
 * >
 * > [ColorMetrics]{@link Graphics:ColorMetrics} represents the fill color, which can be constructed with a specified 
 * > color gamut attribute using the [colorWithSpace]{@link Graphics:ColorMetrics#colorWithSpace} API. **number** 
 * > represents the position of the specified color, with a value range of [0, 1.0]. **0** indicates the start of the 
 * > container where the gradient color is set, and **1.0** indicates the end of the container. To achieve multi-color 
 * > gradients, the **number** parameters in the array should be set in ascending order. If a later number is less than 
 * > a previous one, it is treated as equal to the previous value.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SweepGradientOptions {
  /**
   * Center of the sweep gradient, that is, the coordinates relative to the upper left corner of the current component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  center: [Length, Length];

  /**
   * Start point of the sweep gradient. 
   * 
   * Default value: **0**.
   * 
   * When specified as a string, valid values are pure numbers or numbers followed by units: "deg" (degrees), "rad" (
   * radians), "grad" (gradians), or "turn" (turns). Examples: "90", "90deg", "1.57rad". The value is limited to 0 to 36
   * 0 degrees after unit conversion. Values less than 0 degrees are treated as 0 degrees; values greater than 360 
   * degrees are treated as 360 degrees.
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  start?: number | string;

  /**
   * End point of the sweep gradient. 
   * 
   * Default value: **0**.
   * 
   * When specified as a string, valid values are pure numbers or numbers followed by units: "deg" (degrees), "rad" (
   * radians), "grad" (gradians), or "turn" (turns). Examples: "90", "90deg", "1.57rad". The value is limited to 0 to 36
   * 0 degrees after unit conversion. Values less than 0 degrees are treated as 0 degrees; values greater than 360 
   * degrees are treated as 360 degrees.
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  end?: number | string;

  /**
   * Rotation angle of the sweep gradient. Default value: **0**.
   * 
   * When specified as a string, valid values are pure numbers or numbers followed by units: "deg" (degrees), "rad" (
   * radians), "grad" (gradians), or "turn" (turns). Examples: "90", "90deg", "1.57rad". The value is limited to 0 to 36
   * 0 degrees after unit conversion. Values less than 0 degrees are treated as 0 degrees; values greater than 360 
   * degrees are treated as 360 degrees.
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rotation?: number | string;

  /**
   * Array of color stops, each of which consists of a color and its stop position. Invalid colors are automatically 
   * skipped. **ResourceColor** represents the color. **number** represents the stop position of the color, with a range
   * of [0, 1.0]. Values less than 0 are treated as **0**, and values greater than 1.0 are treated as **1.0**. **0** 
   * indicates the start of the gradient; **1.0** indicates the end. To achieve multi-color gradients, the **number** 
   * parameters in the array should be set in ascending order. If a later number is less than a previous one, it is 
   * treated as equal to the previous value.
   * 
   * Default value: **[]**, meaning no gradient effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * Whether the colors are repeated.
   * 
   * Default value: **false**.
   * 
   * **true**: The colors are repeated.
   * 
   * **false**: The colors are not repeated.
   *
   * @default false [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  repeating?: boolean;

  /**
   * Array of color stops, each of which consists of a color and its stop position. Invalid colors are automatically 
   * skipped. When specified, **metricsColors** overrides **colors**. The color gamut attributes must be consistent 
   * across color stops. The value is considered invalid if mixed color gamut attributes are detected. The default value
   * is transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  metricsColors?: Array<[ColorMetrics, number]>;
}

/**
 * Defines the radial gradient parameters.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 * 
 * > **NOTE**
 * >
 * > When using the **colors** parameter, take note of the following:
 * >
 * > [ResourceColor]{@link ResourceColor} indicates the color, and **number** indicates the color's position, which 
 * > ranges from 0 to 1.0: **0** indicates the start of the container, and **1.0** indicates the end of the container. 
 * > To create a gradient with multiple color stops, you are advised to set the **number** values in ascending order. If
 * > a value of **number** in an array is smaller than that in the previous one, it is considered as equal to the 
 * > previous value.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface RadialGradientOptions {
  /**
   * Center of the radial gradient, that is, the coordinates relative to the upper left corner of the current component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  center: [Length, Length];

  /**
   * Radius of the radial gradient.
   * 
   * Value range: 
   * [0, +∞). A value less than 0 is treated as **0**. If the value is **undefined**, the system adaptively determines the gradient radius.
   *
   * @type { number | string } [since 7 - 17]
   * @type { Length } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radius: Length;

  /**
   * Array of color stops, each of which consists of a color and its stop position. Invalid colors are automatically 
   * skipped. **ResourceColor** represents the color. **number** represents the stop position of the color, with a range
   * of [0, 1.0]. Values less than 0 are treated as **0**, and values greater than 1.0 are treated as **1.0**. **0** 
   * indicates the start of the gradient; **1.0** indicates the end. To achieve multi-color gradients, the **number** 
   * parameters in the array should be set in ascending order. If a later number is less than a previous one, it is 
   * treated as equal to the previous value.
   * 
   * Default value: **[]**, meaning no gradient effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * Whether the colors are repeated.
   * 
   * Default value: **false**.
   * 
   * **true**: The colors are repeated.
   * 
   * **false**: The colors are not repeated.
   *
   * @default false [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  repeating?: boolean;
}

/**
 * Enumerates the strategies for the hierarchical position movement of **in** / **out** components in the component tree
 * during the shared element transition process.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice [since 12 - 12]
 * @since 12 dynamic
 */
declare enum TransitionHierarchyStrategy {
  /**
   * The **in** / **out** components maintain their original hierarchy levels and are affected by the scale and position
   * of their parent components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 12 - 12]
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * The component with the lower hierarchy level between the **in** and **out** components is promoted to the hierarchy
   * level of the higher one in the component tree.
   * 
   * This mode also causes the promoted components to be decoupled from their parent components, not affected by the 
   * scale and position of their parent components.
   * 
   * For example, if the **in** component is at a higher hierarchy level than the **out** component, in this mode the 
   * **out** component will be decoupled from its own parent component during the animation process and promoted to the 
   * hierarchical position of the **in** component, while the **in** component's hierarchical position remains 
   * unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 12 - 12]
   * @since 12 dynamic
   */
  ADAPTIVE = 1
}

/**
 * Defines the options of translate.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TranslateOptions {
  /**
   * Translation distance along the x-axis.
   * For the number type, the unit is VP, and the value range is (-∞, +∞).
   * For the string type, the value follows the format of length string type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number | string;

  /**
   * Translation distance along the y-axis.
   * For the number type, the unit is VP, and the value range is (-∞, +∞).
   * For the string type, the value follows the format of length string type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: number | string;

  /**
   * Distance to translate along the z-axis. The value is a floating
   * point number, the default value is 0.0, and the unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  z?: number | string;
}

/**
 * Defines the options of scale.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ScaleOptions {
  /**
   * Scale ratio along the x-axis.
   * x > 1: The component is scaled up along the x-axis.
   * 0 < x < 1: The component is scaled down along the x-axis.
   * x < 0: The component is scaled in the reverse direction of the x-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number;

  /**
   * Scale ratio along the y-axis.
   * y > 1: The component is scaled up along the y-axis.
   * 0 < y < 1: The component is scaled down along the y-axis.
   * y < 0: The component is scaled in the reverse direction of the y-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: number;

  /**
   * Scale ratio along the z-axis. z > 1: The component is scaled up along the z-axis.
   * <br>0 < z < 1: The component is scaled down along the z-axis.
   * <br>z < 0: The component is scaled in the reverse direction of the z-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  z?: number;

  /**
   * X coordinate of the transformation center point (anchor). The value can be of the string type, for example, 
   * **'50'** and **'50%'**.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerX?: number | string;

  /**
   * Y coordinate of the transformation center point (anchor). The value can be of the string type, for example, 
   * **'50'** and **'50%'**.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerY?: number | string;
}
/**
 * Defines the vertical align rule of relative container.
 *
 * @interface VerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface VerticalAlignParam {
  /**
   * Specifies the anchor component.
   *
   * @type { ?string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Specifies the anchor component.
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies the anchor component.
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Specifies the anchor component
   *
   * Anonymous Object Rectification
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  anchor: string;
  
  /**
   * Sets the vertical alignment relative to the anchor component.
   *
   * @type { VerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the vertical alignment relative to the anchor component.
   *
   * @type { VerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the vertical alignment relative to the anchor component.
   *
   * @type { VerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the vertical alignment relative to the anchor component.
   * 
   * Anonymous Object Rectification
   * 
   * @type { VerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  align: VerticalAlign;
}

/**
 * Defines the horizontal align rule of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface HorizontalAlignParam {
  /**
   * Specifies the anchor component.
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Specifies the anchor component.
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies the anchor component.
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Specifies the anchor component
   *
   * Anonymous Object Rectification
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  anchor: string;

  /**
   * Sets the horizontal alignment relative to the anchor component.
   *
   * @type { HorizontalAlign } align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the horizontal alignment relative to the anchor component.
   *
   * @type { HorizontalAlign } align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the horizontal alignment relative to the anchor component.
   *
   * @type { HorizontalAlign } align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
   /**
    * Sets the horizontal alignment relative to the anchor component.
   *
   * Anonymous Object Rectification
   *
   * @type { HorizontalAlign } align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  align: HorizontalAlign;
}

/**
 * Defines the align rule options of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface AlignRuleOption {
  /**
   * Left alignment.
   * In versions earlier than API version 23, the input parameter type is { anchor: string, align: HorizontalAlign }.
   *
   * @type { ?object } [since 9 - 22]
   * @type { ?HorizontalAlignParam } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: HorizontalAlignParam;

  /**
   * Right alignment.
   * In versions earlier than API version 23, the input parameter type is { anchor: string, align:HorizontalAlign }.
   *
   * @type { ?object } [since 9 - 22]
   * @type { ?HorizontalAlignParam } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: HorizontalAlignParam;

  /**
   * Center alignment in the horizontal direction.
   * In versions earlier than API version 23, the input parameter type is { anchor: string, align: HorizontalAlign }.
   *
   * @type { ?object } [since 9 - 22]
   * @type { ?HorizontalAlignParam } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  middle?: HorizontalAlignParam;

  /**
   * Top alignment.
   * In versions earlier than API version 23, the input parameter type is { anchor: string, align: VerticalAlign }.
   *
   * @type { ?object } [since 9 - 22]
   * @type { ?VerticalAlignParam } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: VerticalAlignParam;

  /**
   * Top alignment.
   * In versions earlier than API version 23, the input parameter type is { anchor: string, align: VerticalAlign }.
   *
   * @type { ?object } [since 9 - 22]
   * @type { ?VerticalAlignParam } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 23]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: VerticalAlignParam;

  /**
   * Center alignment in the vertical direction.
   * In versions earlier than API version 23, the input parameter type is { anchor: string, align: VerticalAlign }.
   *
   * @type { ?object } [since 9 - 22]
   * @type { ?VerticalAlignParam } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  center?: VerticalAlignParam;

  /**
   * Offset of the component under the anchor constraints.
   * The value is the ratio of the distance to the left/upper anchor to the total distance between anchors.
   *
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bias?: Bias;
}

/**
 * Defines the localized horizontal align param of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedHorizontalAlignParam {
  /**
   * ID of the component that serves as the anchor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: string;

  /**
   * Horizontal alignment mode relative to the anchor component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  align: HorizontalAlign;
}

/**
 * Defines the localized vertical align param of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedVerticalAlignParam {
  /**
   * ID of the component that serves as the anchor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: string;

  /**
   * Vertical alignment mode relative to the anchor component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  align: VerticalAlign;
}

/**
 * Defines the Localized align rule options of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedAlignRuleOptions {
  /**
   * Left alignment with left-to-right scripts and right alignment with right-to-left scripts in the horizontal 
   * direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LocalizedHorizontalAlignParam;

  /**
   * Right alignment with left-to-right scripts and left alignment with right-to-left scripts in the horizontal 
   * direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LocalizedHorizontalAlignParam;

  /**
   * Center alignment in the horizontal direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  middle?: LocalizedHorizontalAlignParam;

  /**
   * Top alignment in the vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LocalizedVerticalAlignParam;

  /**
   * Bottom alignment in the vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LocalizedVerticalAlignParam;

  /**
   * Center alignment in the vertical direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  center?: LocalizedVerticalAlignParam;

  /**
   * Offset of the component under the anchor constraints.
   * <br>The value is the ratio of the distance to the left/upper anchor to the total distance between anchors.
   *
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bias?: Bias;
}

/**
 * Enumerates the chain styles in relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ChainStyle {
  /**
   * Child components are evenly distributed among constraint anchors.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SPREAD,

  /**
   * All child components except the first and last ones are evenly distributed among constraint anchors.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SPREAD_INSIDE,

  /**
   * There is no gap between child components in the chain.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PACKED,
}

/**
 * Defines component rotation parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface RotateOptions {
  /**
   * X coordinate of the rotation axis vector.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number;

  /**
   * Y coordinate of the rotation axis vector.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: number;

  /**
   * Z coordinate of the rotation axis vector.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  z?: number;

  /**
   * X coordinate of the transformation center point (anchor). The value can be of the string type, for example, 
   * **'50'** and **'50%'**.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerX?: number | string;

  /**
   * Y coordinate of the transformation center point (anchor). The value can be of the string type, for example, 
   * **'50'** and **'50%'**.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerY?: number | string;

  /**
   * Z-axis anchor, that is, the z-component of the 3D rotation center point.
   * 
   * Default value: **0**.
   * 
   * Unit: px
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  centerZ?: number;

  /**
   * Z-axis coordinate of the camera. The value indicates the viewing distance, that is, the distance between the camera
   * and the z=0 plane. The positive and negative values of the parameter determine the camera observation direction. 
   * When perspective is set to 0, the system automatically calculates a proper camera Z-axis position. The value is 
   * negative.
   * 
   * The rotation axis and center point are defined based on the 
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system). When the component 
   * moves, the coordinate system does not follow it.
   * 
   * Default value: **0**.
   * 
   * Unit: px
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  perspective?: number;

  /**
   * Angle to rotate. A positive angle indicates a clockwise rotation, and a negative angle indicates a counterclockwise
   * rotation. The value can be of the string type, for example, **'90deg'**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  angle: number | string;
}

/**
 * Rotation parameter option of the rotation angle on each axis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare interface RotateAngleOptions {
  /**
   * Rotation angle along the x-axis. A positive value indicates clockwise rotation relative to the rotation axis, and a
   * negative value indicates counterclockwise rotation. The value can be of the string type, for example, **'90deg'**.
   * 
   * Default value: **0**.
   * 
   * Value range: (-∞, +∞).
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  angleX?: number | string;
 
  /**
   * Rotation angle along the y-axis. A positive value indicates clockwise rotation relative to the rotation axis, and a
   * negative value indicates counterclockwise rotation. The value can be of the string type, for example, **'90deg'**.
   * 
   * Default value: **0**.
   * 
   * Value range: (-∞, +∞).
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  angleY?: number | string;
 
  /**
   * Rotation angle along the z-axis. A positive value indicates clockwise rotation relative to the rotation axis, and a
   * negative value indicates counterclockwise rotation. The value can be of the string type, for example, **'90deg'**.
   * 
   * Default value: **0**.
   * 
   * Value range: (-∞, +∞).
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  angleZ?: number | string;
 
  /**
   * X coordinate of the transformation center point (anchor).
   * 
   * Unit: vp
   * 
   * Default value: **'50%'**.
   * 
   * Value range: (-∞, +∞).
   *
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  centerX?: number | string;
 
  /**
   * Y coordinate of the transformation center point (anchor).
   * 
   * Unit: vp
   * 
   * Default value: **'50%'**.
   * 
   * Value range: (-∞, +∞).
   *
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  centerY?: number | string;
 
  /**
   * Z-axis anchor, that is, the z-component of the 3D rotation center point.
   * 
   * Default value: **0**.
   * 
   * Unit: px
   * 
   * Value range: (-∞, +∞).
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  centerZ?: number;
 
  /**
   * Z-axis coordinate of the camera. The value indicates the viewing distance, that is, the distance between the camera
   * and the z=0 plane. The positive and negative values of the parameter determine the camera observation direction. 
   * When perspective is set to 0, the system automatically calculates a proper camera Z-axis position. The value is 
   * negative.
   * 
   * The rotation axis and center point are defined based on the 
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system). When the component 
   * moves, the coordinate system does not follow it.
   * 
   * Default value: **0**.
   * 
   * Unit: px
   * 
   * Value range: (-∞, +∞).
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  perspective?: number;
}

/**
 * Defines the transition effect by setting parameters in the struct.
 * 
 * > **NOTE**
 * >
 * > 1. When set to a value of the **TransitionOptions** type, the **transition** attribute must work with 
 * > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto). The animation duration, 
 * > curve, and delay follow the settings in **animateTo**.
 * >
 * > 2. If the value of the **TransitionOptions** type has only **type** specified, the transition effect will take on 
 * > the default opacity. For example, **{type: TransitionType.Insert}** produces the same effect as 
 * > **{type: TransitionType.Insert, opacity: 0}**. If a specific style is specified, the transition effect will not 
 * > take on the default opacity.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 10
 * @useinstead TransitionEffect
 */
declare interface TransitionOptions {
  /**
   * Transition type.
   * 
   * Default value: **TransitionType.All**
   * 
   * **NOTE**
   * 
   * If **type** is not specified, the default value **TransitionType.All** is used, which means that the transition 
   * effect works for both component addition and deletion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect
   */
  type?: TransitionType;
  /**
   * Opacity of the component during transition, which is the value of the start point of insertion and the end point of
   * deletion.
   * 
   * Value range: [0, 1]
   * 
   * **NOTE**
   * 
   * If the value specified is less than 0, the value **0** is used. If the value specified is greater than 1, the value
   * **1** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#opacity
   */
  opacity?: number;
  /**
   * Translation of the component during transition, which is the value of the start point of insertion and the end 
   * point of deletion.
   * 
   * -**x**: distance to translate along the x-axis.
   * 
   * -**y**: distance to translate along the y-axis.
   * 
   * -**z**: distance to translate along the z-axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#translate
   */
  translate?: TranslateOptions;
  /**
   * Scaling of the component during transition, which is the value of the start point of insertion and the end point of
   * deletion.
   * 
   * - **x**: scale factor along the x-axis.
   * - **y**: scale factor along the y-axis.
   * - **z**: scale factor along the z-axis (not effective for the current 2D graphics).
   * - **centerX** and **centerY**: scale center point. The default values are both **"50%"**, indicating the center 
   * point of the page.
   * - If the center point is (0, 0), it refers to the upper left corner of the component.
   * 
   * **NOTE**
   * 
   * If **centerX** or **centerY** is set to an invalid string (for example, **"illegalString"**), the default value 
   * **"0"** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#scale
   */
  scale?: ScaleOptions;
  /**
   * Rotation of the component during transition, which is the value of the start point of insertion and the end point 
   * of deletion.
   * 
   * - **x**: X-component of the rotation vector.
   * - **y**: Y-component of the rotation vector.
   * - **z**: Z-component of the rotation vector.
   * - **centerX** and **centerY**: rotation center point. The default values are both **"50%"**, indicating the center 
   * point of the page.
   * - If the center point is (0, 0), it refers to the upper left corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#rotate
   */
  rotate?: RotateOptions;
}

/**
 * Enumerates the transition edge types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum TransitionEdge {
  /**
   * Top edge of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP = 0,

  /**
   * Bottom edge of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM = 1,

  /**
   * Start edge of the window, which is the left edge for left-to-right scripts and the right edge for right-to-left 
   * scripts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 2,

  /**
   * End edge of the window, which is the right edge for left-to-right scripts and the left edge for right-to-left 
   * scripts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 3
}

/**
 * Defines all transition effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
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
 * Each DrawModifier instance can be set for only one component. Repeated setting is not allowed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawFront?(drawContext: DrawContext): void;

  /**
   * drawforeground Method. This method is executed after drawing the associated Node and its children.
   * It allows you to perform additional drawing operations on top of the already rendered content.
   * This can be useful for adding visual elements that should appear above the main content.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  drawForeground(drawContext: DrawContext): void;

  /**
   * Draws content in the overlay layer after the associated Node and all its children have been drawn.
   * 
   * Custom drawing consists of five layers: Behind, Content, Front, Foreground, and Overlay.
   * 
   * - The Foreground and Overlay layers are drawn after child nodes.
   * - The Overlay layer differs from Foreground in that it can draw outside the bounds of the component.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  drawOverlay(drawContext: DrawContext): void;

  /**
   * Invalidate the component, which will cause a re-render of the component.
   * No overloading is allowed or needed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  invalidate(): void;
}

/**
 * Defines the transition effect by using the provided APIs, as listed below.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class TransitionEffect<
  Type extends keyof TransitionEffects = keyof TransitionEffects,
  Effect extends TransitionEffects[Type] = TransitionEffects[Type]
> {
  /**
   * Disables the transition effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static readonly IDENTITY: TransitionEffect<"identity">;

  /**
   * Applies a transition effect with the opacity changing from 0 to 1 when the component appears and from 1 to 0 when 
   * the component disappears. This is equivalent to **TransitionEffect.opacity(0)**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static readonly OPACITY: TransitionEffect<"opacity">;

  /**
   * Applies a transition effect of sliding in from the start edge when the component appears and sliding out from the 
   * end edge when the component disappears. This means sliding in from the left edge and sliding out from the right 
   * edge for left-to-right scripts, and sliding in from the right edge and sliding out from the left edge for right-to-
   * left scripts. This is equivalent to 
   * **TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START), TransitionEffect.move(TransitionEdge.END))**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static readonly SLIDE: TransitionEffect<
    "asymmetric",
    {
      appear: TransitionEffect<"move", TransitionEdge>;
      disappear: TransitionEffect<"move", TransitionEdge>;
    }
  >;

  /**
   * Applies a transition effect of sliding in from the right with first scaling down and then scaling up when the 
   * component appears and sliding out from the left with first scaling down and then scaling up when the component 
   * disappears. This transition effect comes with its own animation parameters, which can also be overridden. The 
   * default animation duration is 600 milliseconds, with a specified animation curve of cubicBezierCurve(0.24, 0.0, 0.5
   * 0, 1.0) and a minimum scale factor of 0.8.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static readonly SLIDE_SWITCH: TransitionEffect<"slideSwitch">;

  /**
   * Sets the translation effect for component transitions.
   *
   * @param { TranslateOptions } options - Translation effect for component transitions, specifying the start point of
   *     insertion and the end point of deletion.<br>-**x**: distance to translate along the x-axis.<br>-**y**: distance
   *     to translate along the y-axis.<br>-**z**: distance to translate along the z-axis.
   * @returns { TransitionEffect<"translate"> } Translation effect for the current animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static translate(options: TranslateOptions): TransitionEffect<"translate">;

  /**
   * Sets the rotation effect for component transitions.
   *
   * @param { RotateOptions } options - Rotation effect for component transitions, specifying the start point of
   *     insertion and the end point of deletion.<br>- **x**: X-component of the rotation vector.<br>- **y**: Y-
   *     component of the rotation vector.<br>- **z**: Z-component of the rotation vector.<br>- **centerX** and
   *     **centerY**: rotation center point. The default values are both **"50%"**, indicating the center point of the
   *     page.<br>- If the center point is (0, 0), it refers to the upper left corner of the component.<br>-
   *     **centerZ**: z-axis anchor point, that is, the z-component of the 3D rotation center point. The default value
   *     is **0**.<br>- **perspective**: viewing distance. It is not supported for use in transition animations.
   * @returns { TransitionEffect<"rotate"> } Rotation effect for the current animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static rotate(options: RotateOptions): TransitionEffect<"rotate">;

  /**
   * Sets the scaling effect for component transitions.
   *
   * @param { ScaleOptions } options - Scaling effect for component transitions, specifying the start point of insertion
   *     and the end point of deletion. The scale value set here is multiplied by the component's **scale** attribute.
   *     For example, if the component's scale is 0.8 and the transition scale is set to 0.5, the component entry
   *     animation starts from a scale of 0.4.<br>- **x**: scale factor along the x-axis.<br>- **y**: scale factor along
   *     the y-axis.<br>-z: currently invalid in two-dimensional display.<br>- **centerX** and **centerY**: scale center
   *     point. The default values are both **"50%"**, indicating the center point of the page.<br>- If the center point
   *     is (0, 0), it refers to the upper left corner of the component.<br>**NOTE**<br>If **centerX** or **centerY** is
   *     set to an invalid string (for example, **"illegalString"**), the default value **"0"** is used.
   * @returns { TransitionEffect<"scale"> } Scaling effect for component transitions.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static scale(options: ScaleOptions): TransitionEffect<"scale">;

  /**
   * Sets the opacity for component transition.
   *
   * @param { number } alpha - Opacity of the component during transition, which is the value of the start point of
   *     insertion and the end point of deletion.<br>Value range: [0, 1].<br>**NOTE**<br>If the value specified is less
   *     than 0, the value **0** is used. If the value specified is greater than 1, the value **1** is used.
   * @returns { TransitionEffect<"opacity"> } Opacity of component transition.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static opacity(alpha: number): TransitionEffect<"opacity">;

  /**
   * Sets the slide-in and slide-out effects for component transitions from the screen edges.
   *
   * @param { TransitionEdge } edge - The slide-in and slide-out effects for component transitions from the screen
   *     edges. This is essentially a translation effect, specifying the start point of insertion and the end point of
   *     deletion.
   * @returns { TransitionEffect<"move"> } Current animation's slide-in and slide-out effects from the screen edges.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static move(edge: TransitionEdge): TransitionEffect<"move">;

  /**
   * Sets the asymmetric transition effect.
   *
   * @param { TransitionEffect } appear - Transition effect for appearance.<br>If the **asymmetric** function is not
   *     used for **TransitionEffect**, the transition effect takes effect for both appearance and disappearance of the
   *     component.
   * @param { TransitionEffect } disappear - Transition effect for disappearance.<br>If the **asymmetric** function is
   *     not used for **TransitionEffect**, the transition effect takes effect for both appearance and disappearance of
   *     the component.
   * @returns { TransitionEffect<"asymmetric"> } Asymmetric transition effect for the current animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static asymmetric(
    appear: TransitionEffect,
    disappear: TransitionEffect
  ): TransitionEffect<"asymmetric">;

  /**
   * Constructs a **TransitionEffect** object.
   *
   * @param { Type } type - Transition type.
   * @param { Effect } effect - Transition parameter.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(type: Type, effect: Effect);

  /**
   * Animation settings.
   *
   * @param { AnimateParam } value - Animation parameters.<br>The **onFinish** callback in **AnimateParam** does not
   *     work here.<br>If **combine** is used for combining transition effects, the animation settings of a transition
   *     effect are applicable to the one following it.
   * @returns { TransitionEffect } Current animation effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  animation(value: AnimateParam): TransitionEffect;

  /**
   * Combination of transition effects.
   *
   * @param { TransitionEffect } transitionEffect - Combined transition effect.
   * @returns { TransitionEffect } Combined transition effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  combine(transitionEffect: TransitionEffect): TransitionEffect;
}

/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
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
   * @crossplatform
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Define Preview deviceType
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Define Preview dpi
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
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
   * @crossplatform
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
   * @crossplatform
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
 * **Effect Template: **
 *
 * |  Device Type   | Fuzzy Radius (Unit: px)  | Saturation                |  Brightness |  Color |
 * | -------- | ---- | ---------------------- | -------- | -------- |
 * | Mobile device | 0   | 0 | 0 | '#ffffffff', displayed as white.|
 * | 2-in-1 device: dark mode | 80   | 1.5 | 1.0 | '#e52e3033', displayed as a semi-transparent light red.|
 * | 2-in-1 device: light mode | 80   | 1.9 | 1.0 | '#e5ffffff', displayed as a semi-transparent dark red.|
 * | Tablet | 0   | 0 | 0 | '#ffffffff', displayed as white.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 */
declare enum EffectType {
  /**
   * Define use the effects template defined by the parent effectComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  DEFAULT = 0,
  /**
   * Define use the effects template defined by the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  WINDOW_EFFECT = 1
}

/**
 * Defines the states before the drag gesture is triggered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum PreDragStatus {

  /**
   * A drag gesture is being detected. (Triggered when the component is long pressed for 50 ms.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_DETECTING_STATUS = 0,

  /**
   * The component is ready to be dragged. (Triggered when the component is long pressed for 500 ms.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  READY_TO_TRIGGER_DRAG_ACTION = 1,

  /**
   * A lift animation is started. (Triggered when the component is long pressed for 800 ms.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LIFT_STARTED = 2,

  /**
   * A lift animation is finished. (Triggered at the completion of the lift animation.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LIFT_FINISHED = 3,

  /**
   * A drop animation is started. (Triggered when the drop animation starts.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LANDING_STARTED = 4,

  /**
   * A drop animation is finished. (Triggered when the drop animation ends.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LANDING_FINISHED = 5,

  /**
   * A drop animation is terminated. (Triggered when the finger is lifted off the screen after the component enters the
   * **READY_TO_TRIGGER_DRAG_ACTION** state.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_CANCELED_BEFORE_DRAG = 6,

  /**
   * The component is ready to be dragged. (Triggered when the component is long pressed for 350 ms.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  PREPARING_FOR_DRAG_DETECTION = 7
}

/**
 * Defines the information about the dragged item during drag.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DragItemInfo {

  /**
   * Image to be displayed during dragging.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pixelMap?: PixelMap;

  /**
   * Custom component to display during dragging. If **pixelMap** is set, this parameter is ignored.
   *
   * **NOTE**
   *
   * Global builder definition is not supported. If the [Image]{@link image} component is used in the builder, enable
   * synchronous loading whenever possible, that is, set the [syncLoad]{@link ImageAttribute#syncLoad} attribute of the
   * component to **true**. The builder is used only to generate the image displayed during the current dragging.
   * Changes to the builder, if any, apply to the next dragging, but not to the current dragging.
   *
   * When passing the builder as a parameter, the format builder: ()=>{this.customBuilder()} is recommended to ensure
   * correctness of this binding. For details, see
   * [Using Functions Decorated with @Builder as CustomBuilder Types](docroot://ui/state-management/arkts-builder.md#using-functions-decorated-with-builder-as-custombuilder-types).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  builder?: CustomBuilder;

  /**
   * Additional information about the dragged item, used to describe the item being dragged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  extraInfo?: string;
}

/**
 * Defines an explicit animation. When an animation is required, call this API explicitly to modify state and produce an
 * animation effect.
 * 
 * > **NOTE**
 * >
 * > - Since API version 10, you can use 
 * > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto) in 
 * > [UIContext]{@link @ohos.arkui.UIContext} to specify the UI execution context.
 * >
 * > - Avoid using **animateTo** in **aboutToAppear** or **aboutToDisappear**.
 * >
 * > - When **animateTo** is called in 
 * > [aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear), the 
 * > component's build method is not executed yet, and internal components are not created. This means the animation has
 * > no initial values to work with and will not function as expected.
 * >
 * > - During 
 * > [aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear), the 
 * > component is being destroyed, so animations should not be used.
 * >
 * > - When a component appears or disappears, you can add animation effects through the [transition]{@link common} 
 * > attribute.
 * >
 * > - For attributes not supported by component transitions, see 
 * > [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#example-2-enabling-component-disappearance-after-animation-completion)
 * > and use **animateTo** to implement the component disappearance effect after animation completion.
 * >
 * > - In certain scenarios, using **animateTo** with 
 * > [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2) may 
 * > produce unexpected results. For details, see 
 * > [Using animateTo Failed in State Management V2](docroot://ui/state-management/arkts-new-local.md#using-animateto-failed-in-state-management-v2).
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#animateTo
 */
declare function animateTo(value: AnimateParam, event: () => void): void;

/**
 * Delivers an explicit animation immediately.
 *
 * @param { AnimateParam } value - Animation settings.
 * @param { function } event - Closure function that displays the animation. The system automatically inserts a
 *     transition animation for state changes caused by the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare function animateToImmediately(value: AnimateParam, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
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
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
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
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
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
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
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
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
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
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
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
 * Implements focus control.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace focusControl {

  /**
   * Requests focus transfer to the specified component during the next frame rendering. This global API provides
   * asynchronous focus control.
   *
   * For scenarios requiring immediate focus changes, it is recommended that you use the focus synchronization transfer
   * API [requestFocus]{@link @ohos.arkui.UIContext:FocusController#requestFocus} in **FocusController**.
   *
   * @param { string } value - String bound to the target component using **key(value: string)** or
   *     **id(value: string)**.
   * @returns { boolean } Returns whether focus transfer is successfully requested for the target component. If the
   *     target component pointed to by the parameter exists, is mounted to the component tree, and is focusable,
   *     **true** is returned. Otherwise, **false** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function requestFocus(value: string): boolean;
}

/**
 * Defines the pointer style.
 *
 * > **NOTE**
 * >
 * > Directly using **cursorControl** can lead to the issue of
 * > [ambiguous UI context](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain the
 * > [UIContext]{@link @ohos.arkui.UIContext} object using the **getUIContext()** API and then obtain the
 * > **cursorControl** bound to the instance using the
 * > [getCursorController]{@link @ohos.arkui.UIContext:UIContext#getcursorcontroller} API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type PointerStyle = import('../api/@ohos.multimodalInput.pointer').default.PointerStyle;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare namespace cursorControl {

  /**
   * Sets the current mouse cursor style. This API can be used globally in method statements.
   *
   * @param { PointerStyle } value - Cursor style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function setCursor(value: PointerStyle): void;

  /**
   * Restores the mouse cursor to the default arrow style. This API can be used globally in method statements.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function restoreDefault(): void;
}

/**
 * Defines the type of the **target** parameter in [BaseEvent]{@link BaseEvent}.
 *
 * Represents the display area of the element object that triggers the event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface EventTarget {

  /**
   * Area information of the target element.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  area: Area;

  /**
   * Custom node [ID]{@link CommonMethod#id}. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  id?: string;
}

/**
 * Enumerates the input source device types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SourceType {

  /**
   * Unknown input source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Unknown,

  /**
   * Mouse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Mouse,

  /**
   * Touchscreen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TouchScreen,

  /**
   * Key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  KEY = 4,

  /**
   * Joystick.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  JOYSTICK = 5
}

/**
 * Enumerates the input source tool types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SourceTool {

  /**
   * Unknown input source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Unknown,

  /**
   * Finger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Finger,

  /**
   * Stylus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Pen,

  /**
   * Mouse device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOUSE,

  /**
   * Touchpad. Single-finger input on the touchpad is treated as a mouse input operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOUCHPAD,

  /**
   * Joystick.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  JOYSTICK
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
   * The source image's slices are tiled to fill the border box. Tiles may be compressed when needed.
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
 * Enumerates blur styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum BlurStyle {
  /**
   * Thin material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Thin,

  /**
   * Regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Regular,

  /**
   * Thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Thick,

  /**
   * Material that creates the minimum depth of field effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKGROUND_THIN,

  /**
   * Material that creates a medium shallow depth of field effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKGROUND_REGULAR,

  /**
   * Material that creates a high shallow depth of field effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKGROUND_THICK,

  /**
   * Material that creates the maximum depth of field effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BACKGROUND_ULTRA_THICK,

  /**
   * No blur.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE,

  /**
   * Component ultra-thin material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPONENT_ULTRA_THIN = 8,

  /**
   * Component thin material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPONENT_THIN = 9,

  /**
   * Component regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPONENT_REGULAR = 10,

  /**
   * Component thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPONENT_THICK = 11,

  /**
   * Component ultra-thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPONENT_ULTRA_THICK = 12
}

/**
 * Enumerates the policies for activating the blur style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum BlurStyleActivePolicy {
  /**
   * The blur effect changes according to the window's focus state; it is inactive when the window is not in focus and 
   * active when the window is in focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  FOLLOWS_WINDOW_ACTIVE_STATE = 0,

  /**
   * The blur effect is always active.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  ALWAYS_ACTIVE = 1,

  /**
   * The blur effect is always inactive.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  ALWAYS_INACTIVE = 2
}

/**
 * Enumerates the color modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ThemeColorMode {
  /**
   * System color mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SYSTEM = 0,

  /**
   * Light color mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LIGHT = 1,

  /**
   * Dark color mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DARK = 2
}

/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum AnchoredColorMode {
 /**
  * Defines the mode which is follow up with system.
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 26.0.0 dynamic
  */
 FOLLOW_SYSTEM = 0,

 /**
  * Defines the mode which is follow up with target.
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 26.0.0 dynamic
  */
 FOLLOW_TARGET = 1
}

/**
 * Enumerates the adaptive color modes used for the background blur effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum AdaptiveColor {
  /**
   * Adaptive color mode is not used. The default color is used as the mask color. Using a mode other than **DEFAULT** 
   * can be more time-consuming.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT = 0,

  /**
   * Adaptive color mode is used. The average color value of the color picking area is used as the mask color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AVERAGE = 1
}

/**
 * Defines modal transition type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ModalTransition {
  /**
   * Use default animation.
   * Upward animation when entering and downward animation when exiting.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT = 0,

  /**
   * Use none animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 1,

  /**
   * Opacity gradient animation for the modal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALPHA = 2
}

/**
 * Defines the options of backgroundBlurStyle
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
  /**
   * Blur activation policy.
   *
   * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  policy?: BlurStyleActivePolicy;

  /**
   * Background color when the blur effect does not take effect. This parameter must be used together with the 
   * **policy** parameter. When **policy** is set to a value that disables the blur effect, the blur effect on the 
   * components is removed. If **inactiveColor** is specified, it is applied as the component background color.
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  inactiveColor?: ResourceColor;
}

/**
 * Inherits from [BlurStyleOptions]{@link BlurStyleOptions} to define the foreground blur options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {}

/**
 * Grayscale blur parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface BlurOptions {
  /**
   * Grayscale blur, with two parameters in the value range of [0, 127]. The color gradation of the black and white in 
   * the image is adjusted to create different shades of gray. The first parameter indicates the brightness of the black
   * color, and the second parameter indicates the darkness of the white color. A larger value indicates a more obvious 
   * adjustment effect (the black and white colors become grayer). The valid value range is 0–127. For example, if the 
   * value specified is (20,20), the RGB value [0, 0, 0] (black) is converted to [20, 20, 20], RGB value [255, 255, 255]
   * (white) is converted to [235, 235, 235] (255-20), and the color pixels remain unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  grayscale: [number, number];
}

/**
 * Provides parameters for system adaptive adjustments. By default, the system performs adaptive adjustments based on 
 * chip performance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19 dynamic
 */
declare interface SystemAdaptiveOptions {
  /**
   * Whether to disable system adaptive adjustment. Whenever possible, do not include this parameter. This parameter 
   * only affects low-computing-power devices, the definition of which is determined by the device manufacturer. On low-
   * computing-power devices, the system automatically decides whether to adjust effects (such as blur) to lower-
   * computing-power alternatives based on conditions including computing power and load. To disable this feature, set 
   * this parameter to **true**.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface BlurStyleOptions {
  /**
   * Color mode used for the foreground blur.
   * 
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  colorMode?: ThemeColorMode;

  /**
   * Adaptive color mode.
   * 
   * Default value: **AdaptiveColor.DEFAULT**
   *
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Foreground blur scale.
   * 
   * Default value: **1.0**
   * 
   * Value range: [0.0, 1.0]
   * 
   * **1.0** indicates the highest blur degree.
   * 
   * **0.0** indicates the lowest blur degree.
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  scale?: number;

  /**
   * Grayscale blur parameters.
   * 
   * Default value: **grayscale: [0,0]**
   *
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  blurOptions?: BlurOptions;
}

/**
 * Defines the options of BackgroundEffect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface BackgroundEffectOptions {

  /**
   * Blur radius.
   * Value range: [0, +∞).
   * Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius: number;

  /**
   * Saturation.
   * Value range: [0, +∞).
   * Recommended value range: [0, 50].
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  saturation?: number;

  /**
   * Brightness.
   * <br>Value range: [0, +∞).
   * <br>Default value: **1** Recommended value range: [0, 2].
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  brightness?: number;

  /**
   * Color.
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: ResourceColor;

  /**
   * Adaptive color mode used for the background blur effect. Default value: **DEFAULT** . When set to **AVERAGE**, the 
   * adaptive color mode takes effect only when the color has transparency.
   *
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Grayscale blur.
   *
   * @default { grayScale: [0,1] } [since 11 - 11]
   * @default { grayScale: [0,0] } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  blurOptions?: BlurOptions;

  /**
   * Blur activation policy.
   *
   * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  policy?: BlurStyleActivePolicy;

  /**
   * Background color when the blur effect does not take effect. This parameter must be used together with the 
   * **policy** parameter. When **policy** is set to a value that disables the blur effect, the blur effect on the 
   * components is removed. If **inactiveColor** is specified, it is applied as the component background color.
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  inactiveColor?: ResourceColor;
}

/**
 * Describes the foreground effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ForegroundEffectOptions {

  /**
   * Blur radius. The value range is [0, +∞).
   * 
   * This parameter takes effect only within the component scope. When it is used with other APIs, the effect beyond the
   * component scope does not apply.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Text style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  font?: Font;
}

/**
 * Provide an interface for the button style of picker
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface PickerDialogButtonStyle {
  /**
   * Describes the button type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type?: ButtonType;

  /**
   * Describes the button style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: ButtonStyleMode;

  /**
   * Describes the button role.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  role?: ButtonRole;

  /**
   * Describes the button text size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: Length;

  /**
   * Describes the button text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Describes the button font weight.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight?: FontWeight | number | string;

  /**
   * Describes the button font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontStyle?: FontStyle;

  /**
   * Describes the button font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFamily?: Resource | string;

  /**
   * Describes the button background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Describes the button border radius.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius?: Length | BorderRadiuses;

  /**
   * Define whether the button default to responding to the Enter key
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  primary?: boolean;
}

/**
 * Define the type of shadow
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ShadowType {
  /**
   * Define a color type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  COLOR = 0,

  /**
   * Define a blur type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BLUR = 1
}

/**
 * Provides the shadow attributes, including the blur radius, color, and offset along the x-axis and y-axis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ShadowOptions {
  /**
   * Blur radius of the shadow.
   * 
   * Value range: [0, +∞)
   * 
   * Unit: px
   * 
   * **NOTE**
   * 
   * A value less than 0 evaluates to the value **0**.
   * 
   * To use a value in the unit of vp, you can use [vp2px]{@link @ohos.arkui.UIContext:UIContext#vp2px} to convert the 
   * value.
   * 
   * If **radius** is of the Resource type, its value must be of the number type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radius: number | Resource;

  /**
   * Shadow type.
   * 
   * Default value: **COLOR**
   *
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type?: ShadowType;

  /**
   * Color of the shadow.
   * 
   * The default color is black.
   * 
   * **NOTE**
   * 
   * Since API version 11, this API supports **ColoringStrategy**, which cannot be used with ArkTS widgets or the 
   * [textShadow]{@link TextAttribute#textShadow} attribute.
   * 
   * With **ColoringStrategy**, the average color or primary color can be obtained, and the obtained color is applied to
   * the shadow drawing area.
   * 
   * The **'average'** string can be used to trigger the mode for obtaining the average color, and the **'primary'** 
   * string for obtaining the primary color.
   *
   * @type { ?(Color | string | Resource) } [since 7 - 10]
   * @type { ?(Color | string | Resource| ColoringStrategy) } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: Color | string | Resource | ColoringStrategy;

  /**
   * Offset of the shadow along the x-axis.
   * 
   * Default value: **0**
   * 
   * Unit: px
   * 
   * **NOTE**
   * 
   * To use a value in the unit of vp, you can use [vp2px]{@link @ohos.arkui.UIContext:UIContext#vp2px} to convert the 
   * value.
   * 
   * If **offsetX** is of the Resource type, its value must be of the number type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offsetX?: number | Resource;

  /**
   * Offset of the shadow along the y-axis.
   * 
   * Default value: **0**
   * 
   * Unit: px
   * 
   * **NOTE**
   * 
   * To use a value in the unit of vp, you can use [vp2px]{@link @ohos.arkui.UIContext:UIContext#vp2px} to convert the 
   * value.
   * 
   * If **offsetY** is of the Resource type, its value must be of the number type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offsetY?: number | Resource;

  /**
   * Whether to fill the inside of the component with shadow. **true**: Fill the inside of the component with shadow.
   * 
   * **false**: Do not fill the inside of the component with shadow.
   * 
   * Default value: **false**.
   * 
   * **NOTE**
   * 
   * This attribute does not take effect in [textShadow]{@link TextAttribute#textShadow}.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fill?: boolean;
}

/**
 * enum Shadow style
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ShadowStyle {
  /**
   * Mini shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  OUTER_DEFAULT_XS = 0,

  /**
   * Small shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  OUTER_DEFAULT_SM = 1,

  /**
   * Medium shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  OUTER_DEFAULT_MD = 2,

  /**
   * Large shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  OUTER_DEFAULT_LG = 3,

  /**
   * Floating small shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  OUTER_FLOATING_SM = 4,

  /**
   * Floating medium shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  OUTER_FLOATING_MD = 5
}

/**
 * Defines shadow style properties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface MultiShadowOptions {
  /**
   * Shadow blur radius.
   *
   * The default value varies by API version.
   *
   * API version 10 and earlier versions: **5**
   *
   * Since API version 11: **20**
   *
   * Unit: vp.
   *
   * A value less than or equal to 0 is handled as the default value.
   *
   * @default 5 [since 10 - 10]
   * @default 20 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radius?: number | Resource;

  /**
   * X-axis offset.
   * Unit: vp. Default value: 5.
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offsetX?: number | Resource;

  /**
   * Y-axis offset.
   * Unit: vp. Default value: 5.
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offsetY?: number | Resource;
}

/**
 * Enumerates the types for expanding layout safe areas.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SafeAreaType {
  /**
   * Default non-safe area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SYSTEM = 0,

  /**
   * Device-specific non-safe area, such as the notch area or camera cutout area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CUTOUT = 1,

  /**
   * Soft keyboard area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  KEYBOARD = 2
}

/**
 * Enumerates the edges for expanding the safe area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SafeAreaEdge {
  /**
   * Top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP = 0,

  /**
   * Bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM = 1,

  /**
   * Start edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 2,

  /**
   * End edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 3
}

/**
 * Enumerates the types for expanding layout safe areas.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LayoutSafeAreaType {
  /**
   * Default non-safe area of the system, including the status bar and navigation bar.
   * The component's layout range can be expanded to include both component-level safe areas
   * ([safeAreaPadding]{@link CommonMethod#safeAreaPadding}) and page-level safe areas (status
   * bar, navigation bar, and cutout area).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SYSTEM = 0,
}

/**
 * Define the edges for expanding the safe area in layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LayoutSafeAreaEdge {
  /**
   * Top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 0,

  /**
   * Bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 1,

  /**
   * Start edge. This represents the left edge in LTR mode and the right edge in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  START = 2,

  /**
   * End edge. This represents the right edge in LTR mode and the left edge in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  END = 3,

  /**
   * Vertical edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  VERTICAL = 4,

  /**
   * Horizontal edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HORIZONTAL = 5,

  /**
   * All edges of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ALL = 6,
}

/**
 * Defines sheet size type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SheetSize {
  /**
   * Defines the sheet size medium height type. The height is half the screen height
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MEDIUM = 0,

  /**
   * Defines the sheet size large height type. The height is almost screen height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LARGE = 1,

  /**
   * Defines the sheet size fit content height type. The height fit content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_CONTENT = 2
}

/**
 * Basic event type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface BaseEvent {

  /**
   * Object that triggers the gesture event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  target: EventTarget;

  /**
   * Timestamp of the event. It is the interval between the time when the event is triggered and the time when the
   * system starts.
   *
   * Unit: ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  timestamp: number;

  /**
   * Type of the event input device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  source: SourceType;

  /**
   * Horizontal axis value.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * This value is available only when the pan gesture is triggered by mouse wheel scrolling or two-finger touchpad
   * sliding, or when the pinch gesture is triggered by Ctrl + mouse wheel scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  axisHorizontal?: number;

  /**
   * Vertical axis value.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * This value is available only when the pan gesture is triggered by mouse wheel scrolling or two-finger touchpad
   * sliding, or when the pinch gesture is triggered by Ctrl + mouse wheel scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  axisVertical?: number;

  /**
   * Two-finger pinch scaling ratio.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * This value is available only when a pinch gesture is triggered by a two-finger scaling operation on a touchpad or
   * during axis events.
   *
   * In other scenarios, the default value is returned. The scaling ratio represents the ratio of the current two-finger
   * distance to the initial two-finger distance when first pressed during a pinch gesture.
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  axisPinch?: number;

  /**
   * Press pressure.
   *
   * Default value: **0**
   *
   * Value range: [0, 1], typical value 0.913168, where higher values indicate greater pressure. On some devices, the
   * return value may be greater than 1 due to different hardware parameter configurations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  pressure: number;

  /**
   * Angle between the projection of the stylus on the device plane and the x-axis.
   *
   * Unit: deg
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tiltX: number;

  /**
   * Angle between the projection of the stylus on the device plane and the y-axis.
   *
   * Unit: deg
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tiltY: number;

  /**
   * Angle between the stylus and the device's surface.
   *
   * Unit: deg
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 17 dynamic
   */
  rollAngle?: number;

  /**
   * Event input source type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sourceTool: SourceTool;

  /**
   * Obtains the pressed status of modifier keys. For details about the error message, see the following error codes.
   * The Ctrl, Alt, and Shift keys are supported.
   *
   * > **NOTE**
   * >
   * > This API is not supported in stylus scenarios.
   *
   * @param { Array<string> } keys - Modifier key list.
   * @returns { boolean } Pressed status of modifier keys. Returns **true** if all modifier keys are pressed; returns
   *     **false** otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * ID of the input device that triggers the event.
   *
   * Default value: **0**
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  deviceId?: number;

  /**
   * ID of the screen where the event occurs.
   *
   * Default value: **0**
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Slice width of the upper left corner, upper right corner, lower left corner,
   * and lower right corner of the border image.
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Repeat mode of the source image's slices on the border.
   *
   * @type { ?RepeatMode }
   * @default RepeatMode.Stretch
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Source or gradient color of the border image.
   * When the type is string, this parameter sets the border image source.
   * For details about how to reference image resources, see Loading Image Resources.
   *
   * <p><strong>NOTE</strong>:
   * <br>The border image source applies only to container components, such as Row, Column, and Flex.
   * </p>
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Width of the border image.
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Amount by which the border image is extended beyond the border box.
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Whether to fill the center of the border image.
   * true: Fill the center of the border image.
   * false: Do not fill the center of the border image.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  fill?: boolean;
}

/**
 * Enumerates the layout policies for component width and height.
 *
 * >  **NOTE**
 * >
 * > - **LayoutPolicy** supports three layout policies: **matchParent** (adapts to the parent component's layout),
 * > **wrapContent** (adapts to content but does not exceed the parent component's size), **fixAtIdealSize**
 * > (adapts to content and may exceed the parent component's size).
 * >
 * > - For **wrapContent** and **fixAtIdealSize**:
 * > If the component's size cannot be determined by its content, it uses the default size (if available);
 * > otherwise, it calculates the size as (0, 0).
 * >
 * > - When a container is set to **wrapContent** and contains child components set to **matchParent**
 * > (including cases where only one side is set to **matchParent**): (1) The container is first expanded by
 * > child components with determinate sizes. (2) Child components set to **matchParent** then adapt to the
 * > container's size. (3) If no child components have determinate sizes, both the container and its child
 * > components have a zero size.
 * >
 * > - **LayoutPolicy** has lower priority than **constraintSize**.
 * >
 * > - Since API version 15, only the width and height attributes of **Row** and **Column** components support
 * > the **LayoutPolicy** type. Setting **LayoutPolicy** on other components produces the same behavior as having
 * > no width or height specified. Since API version 20, all basic components support the **LayoutPolicy** type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare class LayoutPolicy {
  /**
   * When the component adapts to the parent component's layout, its size equals the parent component's
   * content area (excluding the areas defined by **padding**, **border**, and **safeAreaPadding**).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  static readonly matchParent: LayoutPolicy;
  /**
   * When the component adapts to its child components (content), its size equals the child components
   * (content) and is constrained by the parent component's content area size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly wrapContent: LayoutPolicy;
  /**
   * When the component adapts to its child components (content), its size equals the child components
   * (content) and is not constrained by the parent component's content area size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly fixAtIdealSize: LayoutPolicy;
}

/**
 * Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ClickEvent extends BaseEvent {

  /**
   * X coordinate of the click position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the click position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the click position in the coordinate system of the current application screen.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the click position in the coordinate system of the current application screen.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the click position in the coordinate system of the current application window. After
   * distanceThreshold is set for **onClick**, the click position is the lift-off point.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the click position in the coordinate system of the current application window. After
   * distanceThreshold is set for **onClick**, the click position is the lift-off point.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the click position in the coordinate system of the current application window.
   *
   * Unit: vp
   *
   * Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use
   * **windowX** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ClickEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the click position in the coordinate system of the current application window.
   *
   * Unit: vp
   *
   * Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use
   * **windowY** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ClickEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the click position in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the clicked
   * element. After [distanceThreshold]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}
   * is set for **onClick**, the click position is the lift-off point. If the event is triggered by a keyboard or gamepad
   * device, the click position is the center of the clicked element.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x: number;

  /**
   * Y coordinate of the click position in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the clicked
   * element. After distanceThreshold is set for **onClick**, the click position is the lift-off point. If the event is
   * triggered by a keyboard or gamepad device, the click position is the center of the clicked element.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y: number;

  /**
   * Whether the event is triggered by a left-hand or right-hand tap.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * Blocks the default event.
   *
   * Note: This API is only supported by the following components: **RichEditor** and **Hyperlink**. An exception is
   * thrown when this API is used with unsupported components. Currently, asynchronous calls and Modifier APIs are not
   * supported.
   *
   * @throws { BusinessError } 100017 - Component does not support prevent function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preventDefault: () => void;

  /**
   * Gets the coordinates of the top-left corner of the current component based on its real-time position.
   *
   * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
   *     real-time position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface HoverEvent extends BaseEvent {

  /**
   * X coordinate of the cursor or stylus position in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the current
   * component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  x?: number;

  /**
   * Y coordinate of the cursor or stylus position in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the current
   * component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  y?: number;

  /**
   * X coordinate of the cursor or stylus position in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  windowX?: number;

  /**
   * Y coordinate of the cursor or stylus position in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  windowY?: number;

  /**
   * X coordinate of the cursor or stylus position in the coordinate system of the current screen window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  displayX?: number;

  /**
   * Y coordinate of the cursor or stylus position in the coordinate system of the current screen window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  displayY?: number;

  /**
   * X coordinate of the cursor or stylus position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the cursor or stylus position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * Disables [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  stopPropagation: () => void;
}

/**
 * Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface MouseEvent extends BaseEvent {

  /**
   * Mouse button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  button: MouseButton;

  /**
   * Mouse action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  action: MouseAction;

  /**
   * X coordinate of the mouse position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the mouse position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the mouse position in the coordinate system of the current screen window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the mouse position in the coordinate system of the current screen window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the mouse position in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the mouse position in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the mouse position in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * Note: This API is supported since API version 8 and deprecated since API version 10. You are advised to use
   * **windowX** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead MouseEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the mouse position in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * Note: This API is supported since API version 8 and deprecated since API version 10. You are advised to use
   * **windowY** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead MouseEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the mouse point in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the event-
   * responsive component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  x: number;

  /**
   * Y coordinate of the mouse point in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the event-
   * responsive component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  y: number;

  /**
   * Disables [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stopPropagation: () => void;

  /**
   * Movement increment of the mouse along the X axis in a two-dimensional plane. The value is the original movement
   * data of the mouse hardware, which is expressed in the unit of the mouse movement distance in the physical world.
   * The reported value is determined by the hardware, not the physical or logical pixels of the screen.
   *
   * **NOTE**
   *
   * Before API version 26.0.0, the return value of **rawDeltaX** was not the original movement data of the mouse
   * hardware, but the original data reduced by a factor of X, where X is the system's display size ratio. Since API
   * version 26.0.0, the return value of **rawDeltaX** is the original movement data of the mouse hardware.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  rawDeltaX?: number;

  /**
   * Movement increment of the mouse along the Y axis in a two-dimensional plane. The value is the original movement
   * data of the mouse hardware, which is expressed in the unit of the mouse movement distance in the physical world.
   * The reported value is determined by the hardware, not the physical or logical pixels of the screen.
   *
   * **NOTE**
   *
   * Before API version 26.0.0, the return value of **rawDeltaY** was not the original movement data of the mouse
   * hardware, but the original data reduced by a factor of X, where X is the system's display size ratio. Since API
   * version 26.0.0, the return value of **rawDeltaY** is the original movement data of the mouse hardware.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  rawDeltaY?: number;

  /**
   * Set of buttons being pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  pressedButtons?: MouseButton[];

  /**
   * Gets the coordinates of the top-left corner of the current component based on its real-time position.
   *
   * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
   *     real-time position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;

  /**
   * Unique identifier for event processing.
   *
   * Value range: [0, +∞)
   *
   * **NOTE**
   *
   * This field is used when dispatching events using the
   * [postInputEventWithStrategy]{@link BuilderNode:BuilderNode#postInputEventWithStrategy} API. Each time an event is
   * dispatched, this field is increased by 100000.
   *
   * Using the same **eventHandleId** for multiple event dispatches will cause abnormal event responses. This field only
   * needs to be assigned when constructing an event; developers do not need to handle it in other cases.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  eventHandleId?: number;

  /**
   * Obtains all historical point information of the current frame. Historical points can be used to achieve smoother
   * drawing effects.
   *
   * This API can only be called from [MouseEvent]{@link MouseEvent} to obtain information about historical points of
   * the current frame when [onMouse]{@link CommonMethod#onMouse} is triggered. The mouse event reporting frequency per
   * frame varies across different devices. Typically, only one mouse event is reported per frame. If the number of
   * [MouseEvent]{@link MouseEvent} instances received in the current frame is greater than 1, the last point of that
   * frame is returned via [onMouse]{@link CommonMethod#onMouse}, and the remaining points are treated as historical
   * points.
   *
   * @returns { Array<MouseHistoricalPoint> } Array of all historical point information for the current frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getHistoricalPoints?(): Array<MouseHistoricalPoint>;
}

/**
 * Mouse event historical point information.
 *
 * Historical points are arranged in chronological order. The first historical point obtained is the earliest event, and
 * the last is the most recent event. The number of historical points depends on the system event queue configuration
 * and hardware performance. Historical points are mainly used for the following scenarios:
 *
 * 1. Smooth drawing: Historical points enable smoother drawing effects, especially when the mouse moves quickly.
 * 2. Gesture recognition: By analyzing the trajectory of historical points, various mouse gestures can be recognized.
 * 3. Performance optimization: Processing multiple historical points in one event callback reduces event processing
 * frequency and improves performance.
 * 4. Trajectory analysis: Analyzing mouse movement trajectories for drawing applications or gesture control.
 * 5. Data analysis: The **timestamp** in historical points can be used to calculate mouse movement speed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface MouseHistoricalPoint {

  /**
   * X coordinate of the mouse pointer relative to the upper-left corner of the clicked component.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Y coordinate of the mouse pointer relative to the upper-left corner of the clicked component.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * X coordinate of the mouse pointer relative to the upper-left corner of the entire screen.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayX: double;

  /**
   * Y coordinate of the mouse pointer relative to the upper-left corner of the entire screen.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayY: double;

  /**
   * X coordinate of the mouse pointer relative to the upper-left corner of the application window.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  windowX: double;

  /**
   * Y coordinate of the mouse pointer relative to the upper-left corner of the application window.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  windowY: double;

  /**
   * X coordinate of the mouse position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  globalDisplayX: double;

  /**
   * Y coordinate of the mouse position in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  globalDisplayY: double;

  /**
   * Timestamp of the mouse event.
   *
   * Unit: ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  timestamp: long;
}

/**
 * The accessibility hover action triggers this method invocation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AccessibilityHoverEvent extends BaseEvent {
  /**
   * Type of the accessibility hover event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: AccessibilityHoverType;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the device screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the current window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the point relative to the global display.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;
}

/**
 * Type of the touch event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TouchObject {

  /**
   * Type of the touch event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type: TouchType;

  /**
   * Unique identifier of a finger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  id: number;

  /**
   * X coordinate of the touch point in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the touch point in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the touch point in the coordinate system of the current application screen.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the touch point in the coordinate system of the current application screen.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the touch point in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the touch point in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the touch point in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use
   * **windowX** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TouchObject#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the touch point in the coordinate system of the current application window.
   *
   * Unit: vp.
   *
   * Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use
   * **windowY** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TouchObject#windowY
   */
  screenY: number;

  /**
   * X coordinate of the touch point in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the event-
   * responsive component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x: number;

  /**
   * Y coordinate of the touch point in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the event-
   * responsive component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y: number;

  /**
   * Whether the event was triggered by a left-hand or right-hand tap.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * Time when the finger is pressed.
   *
   * Unit: ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pressedTime?: number;

  /**
   * Pressure value of finger contact.
   *
   * Value range: [0, 65535), where higher values indicate stronger pressure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pressure?: number;

  /**
   * Width of the finger contact area.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  width?: number;

  /**
   * Height of the finger contact area.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  height?: number;

  /**
   * Gets the coordinates of the top-left corner of the current component based on its real-time position.
   *
   * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
   *     real-time position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * Provides historical touch point information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface HistoricalPoint {

  /**
   * Basic touch event information for the historical point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  touchObject: TouchObject;

  /**
   * Size of the contact area size between the finger and screen in the touch event corresponding to the historical
   * point.
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size: number;

  /**
   * Touch pressure value of the historical point.
   *
   * Default value: **0**
   *
   * Value range: [0, 65535), where higher values indicate stronger pressure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  force: number;

  /**
   * Timestamp of the touch event corresponding to the historical point, representing the time interval from system boot
   * when the event is triggered.
   *
   * Unit: ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  timestamp: number;
}

/**
 * Inherits from [BaseEvent]{@link BaseEvent}. In non-event injection scenarios, **changedTouches** contains points
 * resampled at the screen refresh rate, while **touches** contains points reported at the device's refresh rate. As
 * such, **changedTouches** data may differ from **touches**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TouchEvent extends BaseEvent {

  /**
   * Type of the touch event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type: TouchType;

  /**
   * Information about all touch points (for multi-touch). Each element represents one touch point. When using this
   * property, you need to check whether it is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  touches: TouchObject[];

  /**
   * Information about touch points that changed and triggered the event. When using this property, you need to check
   * whether it is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  changedTouches: TouchObject[];

  /**
   * Disables [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stopPropagation: () => void;

  /**
   * Obtains all historical touch points for the current frame. The touch event frequency per frame varies by device.
   * This API can be called only in [TouchEvent]{@link TouchEvent}. This API is only available within
   * [TouchEvent]{@link TouchEvent} during [onTouch]{@link CommonMethod#onTouch} invocations. Typically,
   * [onTouch]{@link CommonMethod#onTouch} is invoked once per frame. If multiple [TouchEvent]{@link TouchEvent}
   * instances are received in a single frame, the last point is returned through **onTouch**, and the remaining points
   * are stored as historical points. For multi-touch events within the same frame, multiple** onTouch** calls may
   * occur.
   *
   * @returns { Array<HistoricalPoint> } Array of historical points.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getHistoricalPoints(): Array<HistoricalPoint>;

  /**
   * Blocks the default event.
   *
   * **NOTE**
   *
   * This API is only supported by the [Hyperlink]{@link hyperlink} component. Using it with unsupported
   * components throws an exception. Asynchronous calls and **Modifier** API integration are not yet supported.
   *
   * @throws { BusinessError } 100017 - Component does not support prevent function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preventDefault: () => void;

  /**
   * Unique identifier for event processing.
   *
   * Value range: [0, +∞)
   *
   * **NOTE**
   *
   * This field is used when dispatching events using the
   * [postInputEventWithStrategy]{@link BuilderNode:BuilderNode#postInputEventWithStrategy} API. Each time an event is
   * dispatched, this field is increased by 100000.
   *
   * Using the same **eventHandleId** for multiple event dispatches will cause abnormal event responses. This field only
   * needs to be assigned when constructing an event; developers do not need to handle it in other cases.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  eventHandleId?: number;
}

/**
 * Describes the axis event object. Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 17 dynamic
 */
declare interface AxisEvent extends BaseEvent {

  /**
   * Action type of the axis event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  action: AxisAction;

  /**
   * X coordinate of the cursor in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * Y coordinate of the cursor in the
   * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
   *
   * Unit: vp
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the cursor in the coordinate system of the current application screen.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  displayX: number;

  /**
   * Y coordinate of the cursor in the coordinate system of the current application screen.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  displayY: number;

  /**
   * X coordinate of the cursor in the coordinate system of the current application window.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  windowX: number;

  /**
   * Y coordinate of the cursor in the coordinate system of the current application window.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  windowY: number;

  /**
   * X coordinate of the cursor in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the clicked
   * element.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  x: number;

  /**
   * Y coordinate of the cursor in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) based on the clicked
   * element.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  y: number;

  /**
   * Scroll step length for the mouse wheel.
   *
   * Note: Only the mouse wheel is supported. The value ranges from 0 to 65535.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  scrollStep?: number;

  /**
   * Unique identifier for event processing.
   *
   * Value range: [0, +∞)
   *
   * **NOTE**
   *
   * This field is used when dispatching events using the
   * [postInputEventWithStrategy]{@link BuilderNode:BuilderNode#postInputEventWithStrategy} API. Each time an event is
   * dispatched, this field is increased by 100000.
   *
   * Using the same **eventHandleId** for multiple event dispatches will cause abnormal event responses. This field only
   * needs to be assigned when constructing an event; developers do not need to handle it in other cases.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  eventHandleId?: number;

  /**
   * Enables [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  propagation: Callback<void>;

  /**
   * Obtains the horizontal axis value of this axis event.
   *
   * @returns { number } Horizontal axis value.
   *     <br>Unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  getHorizontalAxisValue(): number;

  /**
   * Obtains the vertical axis value of this axis event.
   *
   * @returns { number } Vertical axis value.
   *     <br>Unit: vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  getVerticalAxisValue(): number;

  /**
   * Obtains the two-finger pinch zoom ratio from the axis event.
   *
   * @returns { number } Two-finger pinch zoom ratio.
   *     <br> Note: This ratio is calculated as the current distance between two fingers during a touchpad pinch event
   *     divided by the initial distance when the fingers first made contact.
   *     <br>Default value: **0**.
   *     <br>Value range: [0, +∞).
   *     <br>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  getPinchAxisScaleValue(): number;

  /**
   * Checks whether this axis event contains the specified axis type.
   *
   * @param { AxisType } axisType - Axis type to check for.
   * @returns { boolean } Whether the axis event contains the specified axis type.
   *     <br>**true** if the axis event contains the specified axis type; **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  hasAxis(axisType: AxisType): boolean;

  /**
   * Gets the coordinates of the top-left corner of the current component based on its real-time position.
   *
   * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
   *     real-time position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * Defines the callback type used in onSizeChange.
 * The value of oldValue is last size of the component.
 * The value of newValue is new size of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;

/**
 * Represents a custom gesture recognizer judgment callback type.
 *
 * @param { BaseGestureEvent } event - Information about the current basic gesture event.
 * @param { GestureRecognizer } current - Gesture recognizer object that is about to respond.
 * @param { Array<GestureRecognizer> } recognizers - Other gesture recognizer objects in the response chain.
 * @param { Array<TouchRecognizer> } [touchRecognizers] - Touch recognizers in the response chain. The default value is
 *     **null**, indicating no responsive touch recognizers in the current gesture-bound component and its
 *     descendants. [since 20]
 * @returns { GestureJudgeResult } Judgment result indicating whether gesture recognition succeeds.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>,
  touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult;

/**
 * Represents the callback used to set the parallel relationship between built-in gestures and gestures of other
 * components in the response chain.
 *
 * @param { GestureRecognizer } current - Built-in gesture recognizer of the current component. Currently only a built-
 *     in gesture recognizer of the [GestureType]{@link GestureControl.GestureType}.PAN_GESTURE type is supported.
 * @param { Array<GestureRecognizer> } others - Gesture recognizers of the same type from other components with higher
 *     priority in the response chain.
 * @returns { GestureRecognizer } Gesture recognizer that is bound in parallel with the current recognizer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;

/**
 * Represents the callback used to set the parallel relationship between gestures of the current component and gestures
 * of other components in the response chain.
 *
 * @param { GestureRecognizer } current - Gesture recognizer of the current component. Currently only a gesture
 *     recognizer of the [GestureType]{@link GestureType}.PAN_GESTURE type is supported.
 * @param { Array<GestureRecognizer> } others - Gesture recognizers of the same [GestureType]{@link GestureControl.GestureType} from
 *     other components with higher priority in the response chain.
 * @returns { GestureRecognizer } Gesture recognizer that is bound in parallel with the current recognizer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type ShouldRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;

/**
 * Represents the type of callback for the end of a component's transition animation.
 *
 * @param { boolean } transitionIn - Type of callback for the end of the transition animation.<br>The value **true**
 *     indicates that the callback is for the end of an appearance animation, and **false** indicates that the callback
 *     is for the end of a disappearance animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type TransitionFinishCallback = (transitionIn: boolean) => void;

/**
 * Defines the callback type used in onNeedSoftkeyboard.
 * Called when component is focused, the return value indicates whether keyboard is needed.
 *
 * @returns { boolean } True means keyboard is needed, false means keyboard is not needed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare type OnNeedSoftkeyboardCallback = () => boolean;

/**
 * Represents the callback type for dynamically specifying gesture recognizer participation in gesture processing.
 *
 * @param { BaseGestureEvent } event - Basic gesture event information after
 *     [hit testing](docroot://ui/arkts-interaction-basic-principles.md#hit-testing) completes.<br>**NOTE**<br>Only
 *     **BaseGestureEvent** information is contained, excluding child class extensions.<br>The values of
 *     **axisHorizontal** and **axisVertical** are **0**.
 * @param { Array<GestureRecognizer> } recognizers - All gesture recognizers after
 *     [hit testing](docroot://ui/arkts-interaction-basic-principles.md#hit-testing) completes.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void;

/**
 * Defines the callback type used in [onGestureCollectIntercept]{@link CommonMethod#onGestureCollectIntercept}.
 *
 * @param { Array<GestureRecognizer> } recognizers - Gesture recognizer objects of the component on the response chain.
 * @param { Array<TouchRecognizer> } [touchRecognizers] - Touch recognizer objects of the component on the response
 *     chain.<br>The default value is **null**.
 * @returns { GestureCollectIntervention } Gesture collection intervention result.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type GestureCollectInterceptCallback = (recognizers: Array<GestureRecognizer>,
   touchRecognizers?: Array<TouchRecognizer>) => GestureCollectIntervention;

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
 * Describes the drag behavior. When [DragResult]{@link DragResult} is set to **DROP_ENABLED**, you can define
 * **DragBehavior** as either **COPY** or **MOVE**. When **DragBehavior** is set to **COPY**, a plus sign will be
 * displayed in the badge of the dragged object. When **DragBehavior** is set to **MOVE**, the plus sign will not be
 * displayed. **DragBehavior** is used to indicate the intended way of handling data (either copy or move) without
 * governing the actual data processing. This behavior is reported back to the drag source through **onDragEnd**,
 * enabling the drag initiator to distinguish whether the operation results in a copy or a move of the data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DragBehavior {

  /**
   * The data is handled as a copy operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  COPY = 0,

  /**
   * The data is handled as a move operation, effectively cutting it from its original location.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MOVE = 1
}

/**
 * Enumerates drag animation types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum DragAnimationType {

  /**
   * Default drag animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * Follow-hand morph drag animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_HAND_MORPH = 1
}

/**
 * Defines drag-related data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type UnifiedData = import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData;

/**
 * Provides a summary of drag-related data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Summary = import('../api/@ohos.data.unifiedDataChannel').default.Summary;

/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type UniformDataType = import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType;

/**
 * Defines the input parameter object for **startDataLoading**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type DataSyncOptions = import('../api/@ohos.data.unifiedDataChannel').default.GetDataParams;

/**
 * Defines the data loading parameters used during a drop operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type DataLoadParams = import('../api/@ohos.data.unifiedDataChannel').default.DataLoadParams;

/**
 * Defines the result of a drag operation and the drop-selection state of a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DragResult {

  /**
   * If the drag is not finished and the result is not set by receiver, return DragResult.UNKNOWN.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  UNKNOWN = -1,

  /**
   * The drag is successful. This value applies to
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DRAG_SUCCESSFUL = 0,

  /**
   * The drag fails. This value applies to
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DRAG_FAILED = 1,

  /**
   * The drag is canceled. This value applies to
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DRAG_CANCELED = 2,

  /**
   * The component allows dropping. This value applies to [onDragEnter]{@link CommonMethod#onDragEnter},
   * [onDragMove]{@link CommonMethod#onDragMove}, and [onDragLeave]{@link CommonMethod#onDragLeave}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DROP_ENABLED = 3,

  /**
   * The component does not allow dropping. This value applies to [onDragEnter]{@link CommonMethod#onDragEnter},
   * [onDragMove]{@link CommonMethod#onDragMove}, and [onDragLeave]{@link CommonMethod#onDragLeave}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DROP_DISABLED = 4
}

/**
 * Blend mode.
 * 
 * > **NOTE**
 * >
 * > In the **blendMode** enums, **s** indicates the source pixel, **d** indicates the target pixel, **sa** indicates 
 * > the opacity of the source pixel, **da** indicates the opacity of the target pixel, **r** indicates the pixel after 
 * > blending, and **ra** indicates the opacity of the pixel after blending.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum BlendMode {
  /**
   * The top image is superimposed on the bottom image without any blending.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NONE = 0,
  /**
   * The target pixels covered by the source pixels are erased by being turned to completely transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CLEAR = 1,
  /**
   * r = s: Only the source pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SRC = 2,
  /**
   * r = d: Only the target pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DST = 3,
  /**
   * r = s + (1 - sa) * d: The source pixels are blended based on opacity and cover the target pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SRC_OVER = 4,
  /**
   * r = d + (1 - da) * s: The target pixels are blended based on opacity and cover on the source pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DST_OVER = 5,
  /**
   * r = s * da: Only the part of the source pixels that overlap with the target pixels is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SRC_IN = 6,
  /**
   * r = d * sa: Only the part of the target pixels that overlap with the source pixels is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DST_IN = 7,
  /**
   * r = s * (1 - da): Only the part of the source pixels that do not overlap with the target pixels is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SRC_OUT = 8,
  /**
   * r = d * (1 - sa): Only the part of the target pixels that do not overlap with the source pixels is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DST_OUT = 9,
  /**
   * r = s * da + d * (1 - sa): The part of the source pixels that overlap with the target pixels is displayed and the 
   * part of the target pixels that do not overlap with the source pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SRC_ATOP = 10,
  /**
   * r = d * sa + s * (1 - da): The part of the target pixels that overlap with the source pixels and the part of the 
   * source pixels that do not overlap with the target pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DST_ATOP = 11,
  /**
   * r = s * (1 - da) + d * (1 - sa). The pixel is not displayed where the source pixel overlaps the target pixel, and 
   * the source pixel and target pixel are displayed where the source pixel does not overlap the target pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  XOR = 12,
  /**
   * r = min(s + d, 1): New pixels resulting from adding the source pixels to the target pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PLUS = 13,
  /**
   * r = s * d: New pixels resulting from multiplying the source pixels with the target pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  MODULATE = 14,
  /**
   * r = s + d - s * d: Pixels are blended by adding the source pixels to the target pixels and subtracting the product 
   * of their multiplication.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SCREEN = 15,
  /**
   * The MULTIPLY or SCREEN mode is used based on the target pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  OVERLAY = 16,
  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver: When two colors overlap, whichever is darker is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DARKEN = 17,
  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver: The darker of the pixels (source and target) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LIGHTEN = 18,
  /**
   * The colors of the target pixels are lightened to reflect the source pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLOR_DODGE = 19,
  /**
   * The colors of the target pixels are darkened to reflect the source pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLOR_BURN = 20,
  /**
   * The MULTIPLY or SCREEN mode is used, depending on the source pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HARD_LIGHT = 21,
  /**
   * The LIGHTEN or DARKEN mode is used, depending on the source pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SOFT_LIGHT = 22,
  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver: The final pixel is the result of subtracting the darker of 
   * the two pixels (source and target) from the lighter one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DIFFERENCE = 23,
  /**
   * rc = s + d - two(s * d), ra = kSrcOver: The final pixel is similar to **DIFFERENCE**, but with less contrast.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EXCLUSION = 24,
  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d: The final pixel is the result of multiplying the source pixel by the 
   * target pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  MULTIPLY = 25,
  /**
   * The resultant image is created with the luminance and saturation of the source image and the hue of the target 
   * image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HUE = 26,
  /**
   * The resultant image is created with the luminance and hue of the target image and the saturation of the source 
   * image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SATURATION = 27,
  /**
   * The resultant image is created with the saturation and hue of the source image and the luminance of the target 
   * image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLOR = 28,
  /**
   * The resultant image is created with the saturation and hue of the target image and the luminance of the source 
   * image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LUMINOSITY = 29
}

/**
 * Defines how to apply the specified blend mode to the content of a view.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum BlendApplyType {
  /**
   * The content of the view is blended in sequence on the target image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FAST = 0,

  /**
   * The content of the component and its child components are drawn on the offscreen canvas, and then blended with the 
   * existing content on the canvas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  OFFSCREEN = 1,

  /**
   * When an offscreen canvas is created, an initial background canvas is copied first, and then the content of this 
   * component and its child components is drawn on the offscreen canvas. The content is then blended on the canvas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  OFFSCREEN_WITH_BACKGROUND = 2
}

/**
 * Enum for distortion animation mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum DistortionMode {
  /**
   * Adaptive implementation of distortion animation
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DISTORTION_AUTO = 0,
  /**
   * Distortion animation is enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DISTORTION_ENABLED = 1,
  /**
   * Distortion animation is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DISTORTION_DISABLED = 2
}

/**
 * Edge light animation mode enumeration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum EdgeLightMode {
  /**
   * Adaptive edge light animation.
   * 
   * Turned off on low-performance devices and turned on on medium/high-performance devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  EDGELIGHT_AUTO = 0,
  /**
   * Enable edge light animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  EDGELIGHT_ENABLED = 1,
  /**
   * Disable edge light animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  EDGELIGHT_DISABLED = 2
}

/**
 * Provides information about the drag event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface DragEvent {

  /**
   * Obtains the x-coordinate of the drag point relative to the upper left corner of the global screen.
   *
   * @returns { number } X-coordinate of the drag point relative to the upper left corner of the global screen.
   *     <br>Unit: vp. Value range: (-∞, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalDisplayX(): number;

  /**
   * Obtains the y-coordinate of the drag point relative to the upper left corner of the global screen.
   *
   * @returns { number } Y-coordinate of the drag point relative to the upper left corner of the global screen.
   *     <br>Unit: vp. Value range: (-∞, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalDisplayY(): number;

  /**
   * Obtains the x-coordinate of the drag point relative to the upper left corner of the screen.
   *
   * @returns { number } X-coordinate of the drag point relative to the upper left corner of the screen, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getDisplayX(): number;

  /**
   * Obtains the y-coordinate of the drag point relative to the upper left corner of the screen.
   *
   * @returns { number } Y-coordinate of the drag point relative to the upper left corner of the screen, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getDisplayY(): number;

  /**
   * Obtains the x-coordinate of the drag point relative to the upper left corner of the window.
   *
   * @returns { number } X coordinate of the drag point relative to the upper left corner of the window, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getWindowX(): number;

  /**
   * Obtains the y-coordinate of the drag point relative to the upper left corner of the window.
   *
   * @returns { number } Y-coordinate of the drag point relative to the upper left corner of the window, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getWindowY(): number;

  /**
   * Obtains the x-coordinate of the drag point relative to the upper left corner of the window, in vp.
   *
   * > **NOTE**
   *
   * @returns { number } X-coordinate of the drag point relative to the upper left corner of the window.
   *     <br>Unit: vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead DragEvent#getWindowX
   */
  getX(): number;

  /**
   * Obtains the y-coordinate of the drag point relative to the upper left corner of the window, in vp.
   *
   * > **NOTE**
   *
   * @returns { number } Y-coordinate of the drag point relative to the upper left corner of the window.
   *     <br>Unit: vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead DragEvent#getWindowY
   */
  getY(): number;

  /**
   * Copy or paste mode.
   *
   * Default value: **DragBehavior.COPY**
   *
   * @default COPY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  dragBehavior: DragBehavior;

  /**
   * Whether to disable the default drop animation when the dragging ends.
   *
   * If this parameter is set to **true**, the default drop animation is disabled, and the custom one is used.
   *
   * If this parameter is not set or is set to **false**, the default drop animation takes effect. When [setResult]{@link DragEvent#setResult}
   * is set to **DRAG_SUCCESSFUL**, a shrink-out animation takes effect. Otherwise, an expand-out animation takes effect.
   *
   * When the default drop animation is not disabled, avoid implementing custom animations to prevent conflicts.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  useCustomDropAnimation: boolean;

  /**
   * Sets the drag animation type. This attribute can only be set during the
   * [onDragStart]{@link CommonMethod#onDragStart} phase and can be obtained in the
   * [onDragStart]{@link CommonMethod#onDragStart}, [onDragEnter]{@link CommonMethod#onDragEnter},
   * [onDragMove]{@link CommonMethod#onDragMove}, [onDragLeave]{@link CommonMethod#onDragLeave},
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}, and
   * [onDragEnd]{@link CommonMethod#onDragEnd} callbacks.
   *
   * Default value: **DEFAULT**
   *
   * **System API:** This is a system API.
   *
   * @default DragAnimationType.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  dragAnimationType?: DragAnimationType;

  /**
   * Set the uniqueId or uniqueId array of components that need to be automatically hidden during dragging.
   * This property takes effect only in onDragStart. After the drag starts successfully, the system hides the
   * target components before the drag preview window is shown. Developers need to restore component visibility
   * in onDragEnd or onDrop based on service requirements.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoHideComponentUniqueIds?: int | int[];

  /**
   * Sets drag-related data in **DragEvent**.
   *
   * @param { UnifiedData } unifiedData - Drag-related data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setData(unifiedData: UnifiedData): void;

  /**
   * Obtains drag-related data.
   *
   * @returns { UnifiedData } Drag-related data. For details about the data obtaining result, see the error code
   *     description.
   * @throws { BusinessError } 190001 - Data not found.
   * @throws { BusinessError } 190002 - Data error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getData(): UnifiedData;

  /**
   * Obtains a summary of drag data, including data type and size information. In a delayed drag scenario, only data
   * type information can be obtained.
   *
   * @returns { Summary } Summary of drag data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSummary(): Summary;

  /**
   * Sets the drag result in **DragEvent**.
   *
   * @param { DragResult } dragResult - Drag result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setResult(dragResult: DragResult): void;

  /**
   * Obtains the drag result.
   *
   * @returns { DragResult } Drag result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getResult(): DragResult;

  /**
   * Obtains the position of the drag preview relative to the current window and the preview size.
   *
   * @returns { Rectangle } Position of the drag preview relative to the current window and the preview size, in vp. x
   *     and y indicate the window coordinates of the upper left corner of the preview, and width and height indicate
   *     the preview size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getPreviewRect(): Rectangle;

  /**
   * Obtains the dragging velocity along the x-axis.
   *
   * @returns { number } Dragging velocity along the x-axis. The origin of the coordinate axis is the upper left corner
   *     of the screen. The unit is vp. The velocity is positive if the movement is from left to right, and it is
   *     negative if the movement is from right to left.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getVelocityX(): number;

  /**
   * Obtains the dragging velocity along the y-axis.
   *
   * @returns { number } Dragging velocity along the y-axis. The origin of the coordinate axis is the upper left corner
   *     of the screen. The unit is vp. The velocity is positive if the movement is from top to bottom, and it is
   *     negative if the movement is from bottom to top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getVelocityY(): number;

  /**
   * Obtains the dragging velocity along the main axis.
   *
   * @returns { number } Dragging velocity along the main axis. The value is the arithmetic square root of the sum of
   *     the squares of the velocities along the x-axis and y-axis, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getVelocity(): number;

  /**
   * Obtains the pressed status of modifier keys.
   *
   * @param { Array<string> } keys - Obtains the pressed status of modifier keys. For details about the error message,
   *     see the following error codes. The following modifier keys are supported: 'Ctrl' | 'Alt' | 'Shift'.<br>**NOTE**
   *     <br>This API is not supported in stylus scenarios.
   * @returns { boolean } Whether the specified modifier keys are pressed. Returns **true** if the specified modifier
   *     keys are pressed; returns **false** otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 13]
   * @since 12 dynamic
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Sets the execution function of the custom drop animation. This parameter is valid only when
   * [useCustomDropAnimation]{@link DragEvent#useCustomDropAnimation} is set to **true**.
   *
   * @param { Callback<void> } customDropAnimation - Custom drop animation in this callback.<br> **NOTE**<br>1. This API
   *     is valid only in the **onDrop** callback.<br> 2. Before using this API, set **useCustomDropAnimation** to
   *     **true**. Otherwise, this API does not take effect.<br> 3. Do not implement logic unrelated to the animation in
   *     the animation callback to avoid affecting performance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  executeDropAnimation(customDropAnimation: Callback<void>): void;

  /**
   * Sets a callback to be executed after the follow-hand morph drop animation is completed. This callback is triggered
   * by the system after the drag framework animation ends. This callback uses an asynchronous callback.
   *
   * > **NOTE**
   * >
   * > 1. This API takes effect only when [dragAnimationType]{@link DragEvent#dragAnimationType} is
   * > set to **DragAnimationType.FOLLOW_HAND_MORPH**.
   * >
   * > 2. Do not implement logic unrelated to the animation in the callback to avoid affecting execution efficiency.
   *
   * @param { Callback<void> } onAnimationFinished - Callback triggered after the drag framework animation ends.
   * @param { string } [animationOption] - Drop animation parameters.<br>The parameter is a JSON string containing the
   *     following fields:<br>**CubicCurveEnable**: boolean, indicating whether to enable the cubic curve animation. Set
   *     to **true** to enable it, or **false** to disable it.<br>**SpringEnable**: boolean, indicating whether to
   *     enable the spring animation. Set to **true** to enable it, or **false** to disable it.<br>
   *     **dropAnimationCurve**: number[], indicating the drop animation curve parameters. Its meaning depends on
   *     **SpringEnable** and **CubicCurveEnable** (with **SpringEnable** having higher priority). When **SpringEnable**
   *     is **true**, the array length is 3, in the format of [response, dampingRatio, blendDuration], corresponding to
   *     the spring curve parameters of [curves.springMotion]{@link @ohos.curves:curves.springMotion}. When
   *     **SpringEnable** is **false** and **CubicCurveEnable** is **true**, the array length is 4, in the format of
   *     [x1, y1, x2, y2], corresponding to the cubic Bezier curve control point parameters of
   *     [curves.cubicBezierCurve]{@link @ohos.curves:curves.cubicBezierCurve}.<br>**NOTE:** **SpringEnable** takes
   *     priority over **CubicCurveEnable**. When both are **true**, the spring animation prevails. When neither
   *     **SpringEnable** nor **CubicCurveEnable** is correctly set, the default spring animation is used.<br>
   *     **dropPosition**: number[], indicating the drop position coordinates. The array length is 2, in the format of
   *     [x, y], in px, representing the target position coordinates of the dragged element when it drops. Value range:
   *     (-∞, +∞).<br>**dropSize**: number[], indicating the drop size. The array length is 2, in the format of
   *     [width, height], in px, representing the target size of the dragged element when it drops. Value range: (0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  executeFollowHandMorphDropAnimation(onAnimationFinished: Callback<void>, animationOption?: string): void;

  /**
   * Asynchronously obtains drag data and notifies you of the current data synchronization progress. This API is only
   * supported in the **onDrop** callback.
   *
   * @param { DataSyncOptions } options - Parameters for obtaining drag data, including the target path, file conflict
   *     options, and progress bar type. You can use the
   *     [cancelDataLoading]{@link @ohos.arkui.UIContext:DragController#cancelDataLoading} API to cancel data loading
   *     during data transmission.
   * @returns { string } Identifier for the drag data. It is used to distinguish between different drag operations.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190003 - Operation not allowed for current phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  startDataLoading(options: DataSyncOptions): string;

  /**
   * Obtains the package name of the drag source application.
   *
   * @returns { string } Package name of the drag source application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  getDragSource(): string;

  /**
   * Checks whether the drag operation is cross-device.
   *
   * @returns { boolean } Whether the drag operation is cross-device. Returns **true** for cross-device drag operations;
   *     returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  isRemote(): boolean;

  /**
   * Obtains the ID of the screen where the current drag event occurs. This API is not supported in the
   * [onDragEnd]{@link CommonMethod#onDragEnd} callback.
   *
   * @returns { number } ID of the screen where the current drag event occurs.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getDisplayId(): number;

  /**
   * Sets the parameters for deferred data loading from the drag source. This API provides data loading parameters to
   * the system instead of directly providing complete data objects. When the user drops data on the target application,
   * the system will use these parameters to request the actual data from the drag source. If this API is used together
   * with [setData]{@link DragEvent#setData}, the last called API takes precedence. This API takes effect only in the
   * [onDragStart]{@link CommonMethod#onDragStart} callback.
   *
   * @param { DataLoadParams } dataLoadParams - Data loading parameters used during a drop operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  setDataLoadParams(dataLoadParams: DataLoadParams): void;

  /**
   * Sets whether to enable the system's built-in drop animation effect. This API is available only to system
   * applications and can only be used during the **onDrop** phase.
   *
   * @param { string } configuration - the internal drop animation's configuration.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 190003 - Operation not allowed for current phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  enableInternalDropAnimation(configuration: string): void;
}

/**
 * Defines a callback for drag events.
 *
 * @param { DragEvent } event - **event**: drag event information, including the coordinates of the drag point.
 * @param { string } [extraParams] - **extraParams**: additional information about the drag event. Its value must be
 *     parsed into JSON format.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;

/**
 * Sets parameters for the drop process.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface DropOptions {

  /**
   * Whether to disable data prefetching for the drag-and-drop operation. The value **true** means to disable data
   * prefetching for the drag-and-drop operation, and **false** means the opposite. Default value: **false**.
   *
   * **NOTE**
   *
   * Set this parameter to **true** when using [startDataLoading]{@link DragEvent#startDataLoading} to enable data prefetching.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  disableDataPrefetch?: boolean;
}

/**
 * Intention corresponding to the key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type IntentionCode = import('../api/@ohos.multimodalInput.intentionCode').IntentionCode;

/**
 * KeyEvent object description.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface KeyEvent {

  /**
   * Key type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type: KeyType;

  /**
   * Key value. For details about the key values provided by the key-based input devices, see
   * [KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  keyCode: number;

  /**
   * Name of the key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  keyText: string;

  /**
   * Type of the input device that triggers the key event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  keySource: KeySource;

  /**
   * ID of the input device that triggers the key event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  deviceId: number;

  /**
   * State of the Meta key (the key located next to the **Ctrl** key in the lower left corner of the keyboard, or the
   * key marked with a window logo) when the key event occurs. The value **1** indicates that the Meta key is pressed,
   * and **0** indicates that it is not pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  metaKey: number;

  /**
   * Timestamp of the event. It is the interval between the time when the event is triggered and the time when the
   * system starts, in nanoseconds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  timestamp: number;

  /**
   * Blocks [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stopPropagation: () => void;

  /**
   * Intention corresponding to the key.
   *
   * Default value: **IntentionCode.INTENTION_UNKNOWN**.
   *
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  intentionCode: IntentionCode;

  /**
   * Obtains the pressed status of modifier keys.
   *
   * @param { Array<string> } keys - Obtains the pressed status of modifier keys. For details about the error message,
   *     see the following error codes. The following modifier keys are supported: 'Ctrl'| 'Alt' | 'Shift'.<br>**NOTE**<
   *     br>This API is not supported in stylus scenarios.
   * @returns { boolean } Whether the modifier key is pressed. **true** if the modifier key is pressed; **false**
   *     otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 13]
   * @since 12 dynamic
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Unicode value of the key. Non-space basic Latin characters in the 0x0021-0x007E range are supported. Characters
   * with a value of 0 are not supported. In the case of key combination, this API returns the Unicode value of the key
   * corresponding to the key event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  unicode?: number;

  /**
   * NumLock state. **true**: locked. **false**: unlocked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  isNumLockOn?: boolean;

  /**
   * CapsLock state. **true**: locked. **false**: unlocked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  isCapsLockOn?: boolean;

  /**
   * ScrollLock state. **true**: locked. **false**: unlocked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  isScrollLockOn?: boolean;
}

/**
 * Describes the focus axis event object. Inherits from [BaseEvent]{@link BaseEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 15 dynamic
 */
declare interface FocusAxisEvent extends BaseEvent {

  /**
   * Axis value table of the focus axis event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  axisMap: Map<AxisModel, number>;

  /**
   * Blocks [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  stopPropagation: Callback<void>;
}

/**
 * Defines a data structure for the crown event received by a component. It includes the timestamp, angular velocity,
 * rotation angle, crown action, and event propagation disabling.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare interface CrownEvent {

  /**
   * Timestamp.
   *
   * Unit: ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  timestamp: number;

  /**
   * Angular velocity.
   *
   * Unit: deg/s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  angularVelocity: number;

  /**
   * Relative rotation angle.
   *
   * Unit: deg
   *
   * Value range: [-360, 360]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  degree: number;

  /**
   * Crown action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  action: CrownAction;

  /**
   * Disables [event bubbling](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) propagation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BindOptions {
  /**
   * Background color of the sheet.
   * <br>Default value: **Color.White**.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Background color of the sheet.
   * <br>Default value: **Color.White**.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Callback for when the sheet is displayed (after the animation ends).
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Callback for when the sheet is displayed (after the animation ends).
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onAppear?: () => void;

  /**
   * Callback for when the sheet disappears (after the animation ends).
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Callback for when the sheet disappears (after the animation ends).
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onDisappear?: () => void;

  /**
   * Callback for when the sheet is about to be displayed (before the animation starts).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: () => void;

  /**
   * Callback function before overlay popAnimation starts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: () => void;
}

/**
 * Component content cover dismiss
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissContentCoverAction {
  /**
   * Callback invoked when the modal is dismissed. Call this API when you need to exit the page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Type of operation that triggers the dismiss of the modal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Inherited from [BindOptions]{@link BindOptions}.
 * 
 * Provides content options of the modal.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ContentCoverOptions extends BindOptions {
  /**
   * System transition mode of the modal.
   * 
   * Default value: **ModalTransition.DEFAULT**.
   * 
   * **NOTE**
   * 
   * This property has no effect when it is set together with **transition**.
   *
   * @default ModalTransition.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  modalTransition?: ModalTransition;

  /**
   * Callback invoked to prevent a user attempt to dismiss the modal.
   * 
   * **NOTE**
   * 
   * After this callback is registered, touching the back button does not immediately dismiss the modal. You can use the
   * **reason** parameter to determine the type of operation that triggers the dismiss and decide whether to dismiss the
   * modal based on the reason. Nesting **onWillDismiss** callbacks is not allowed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissContentCoverAction>;

  /**
   * Custom transition mode of the modal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Whether the full-screen modal adapts to the safe area. **true** indicates the full-screen modal adapts to the safe 
   * area, restricting content within the safe area and avoiding the navigation and status bars. **false** indicates no 
   * processing is applied, maintaining the same style as before. The default value is **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableSafeArea?: boolean;
}

/**
 * Component sheet title options
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface SheetTitleOptions {
  /**
   * Defines title text
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  title: ResourceStr;

  /**
   * Defines subtitle text
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  subtitle?: ResourceStr;
}

/**
 * Defines the sheet type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SheetType {
  /**
   * Defines bottom sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  BOTTOM = 0,

  /**
   * Defines center sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CENTER = 1,

  /**
   * Defines popup sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  POPUP = 2,

  /**
   * Defines side sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SIDE = 3,

  /**
   * Defines content cover type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CONTENT_COVER = 4,
}

/**
 * Define the display mode of the sheet.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SheetMode {
  /**
   * The sheet is displayed at the top of the window corresponding to the current **UIContext** instance,
   * above all pages. It is displayed at the same level as dialog boxes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAY = 0,

  /**
   * The sheet is displayed at the top of the current page.
   * <br>**NOTE**<br>Currently, the sheet can only be mounted on a **Page**
   * or **NavDestination** node, with priority given to the **NavDestination**
   * node if it is present. This means that, the sheet can only be displayed at
   * the top of these two types of pages.<br> In this mode, new pages can overlay
   * the sheet, and when the user returns to the previous page, the sheet remains
   * present without losing its content.<br> In this mode, you must ensure that
   * the target page node, such as the **Page** node, has been attached to the tree
   * before bringing up the sheet; otherwise, the sheet will not be able to be
   * attached to the corresponding page node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  EMBEDDED = 1
}

/**
 * Define the scroll size mode of the sheet.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ScrollSizeMode {
  /**
   * Sheet change scroll size after the slide ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FOLLOW_DETENT = 0,

  /**
   * Sheet change scroll size during the sliding process.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CONTINUOUS = 1
}

/**
 * Define the mode of sheet how to avoid keyboard.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare enum SheetKeyboardAvoidMode {
  /**
   * Sheet will not aovid keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  TRANSLATE_AND_RESIZE = 1,

  /**
   * Sheet will only avoid keyboard by resizing the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  TRANSLATE_AND_SCROLL = 3,

  /**
   * Popup sheet will avoid keyboard by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  POPUP_SHEET = 4
}

/**
 * Component sheet dismiss
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface SheetDismiss {
  /**
   * Defines sheet dismiss function
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dismiss: () => void;
}

/**
 * Component sheet dismiss
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissSheetAction {

  /**
   * Defines sheet dismiss function
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Dismiss reason type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Defines sheet spring back action
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SpringBackAction {
  /**
   * Defines spring back function
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  springBack: Callback<void>;
}

/**
 * Defines the options for blur snapshot optimization.
 * Setting this object enables blur optimization.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface BlurSnapshotOptions {
  /**
   * Whether to enable freeze optimization for the blur snapshot.
   * When enabled, freeze optimization is applied to reduce rendering overhead during blur snapshot.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableFreeze?: boolean;
}

/**
 * Optional attributes of the sheet. Inherits from [BindOptions]{@link BindOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SheetOptions extends BindOptions {
  /**
   * Defines sheet height
   *
   * @default SheetSize.LARGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  height?: SheetSize | Length;

  /**
   * Defines whether the control bar is displayed.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  dragBar?: boolean;

  /**
   * Defines sheet maskColor
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskColor?: ResourceColor;

  /**
   * Defines sheet detents
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  detents?: [(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?];

  /**
   * Defines sheet background blur Style
   *
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  blurStyle?: BlurStyle;

  /**
   * Defines whether the close icon is displayed
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * Defines the sheet prefer type
   *
   * @type { ?(SheetType.CENTER | SheetType.POPUP) } [since 11 - 11]
   * @type { ?SheetType } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  preferType?: SheetType;

  /**
   * Defines the sheet title
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  title?: SheetTitleOptions | CustomBuilder;

  /**
   * Callback function when the sheet interactive dismiss
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shouldDismiss?: (sheetDismiss: SheetDismiss) => void;

  /**
   * Callback function when the sheet will dismiss
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissSheetAction>;

  /**
   * Sheet springs back callback when dismiss
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;

  /**
   * Set whether interaction is allowed outside the sheet
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableOutsideInteractive?: boolean;

  /**
   * Defines the sheet's width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * Defines the sheet's border width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * Defines the sheet's border color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * Defines the sheet's border style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * Defines the sheet's shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Called when height of the sheet is changed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onHeightDidChange?: Callback<number>;

  /**
   * Determine the level sheet shows, whether sheet should be displayed within the page
   *
   * @default SheetMode.OVERLAY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mode?: SheetMode;

  /**
   * Determine sheet scroll size mode.
   *
   * @default ScrollSizeMode.FELLOW_DETEND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  scrollSizeMode?: ScrollSizeMode;

  /**
   * Called when detents of the sheet changed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetentsDidChange?: Callback<number>;

  /**
   * Called when width of the sheet changed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWidthDidChange?: Callback<number>;

  /**
   * Called when the sheet type changed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTypeDidChange?: Callback<SheetType>;

  /**
   * The UIContext that the sheet belongs to
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  uiContext?: UIContext;

  /**
   * Determine the mode of sheet how to avoid keyboard.
   *
   * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  keyboardAvoidMode?: SheetKeyboardAvoidMode;

  /**
   * Defines whether to respond to the hover mode.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Defines the sheet's display area in hover mode.
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Offset of the sheet. Bottom spacing, which is effective only when the sheet is a bottom sheet. The **detents** 
   * property of [SheetOptions]{@link SheetOptions} is not supported. This property has no effect when the y-axis value 
   * is set to a negative number.
   * 
   * Default value: 0 vp for both the x-axis and y-axis
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  offset?: Position;

  /**
   * Sets whether the sheet edge has spring effect.
   *
   * @default 3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectEdge?: number;

  /**
   * Defines sheet radius
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Select a detent from detents property
   *
   * @default detents[0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  detentSelection?: SheetSize | Length;

  /**
   * The placement of popup sheet type.
   * Supports all positions defined in Placement.
   *
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  placement?: Placement;

  /**
   * placement On target node
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  placementOnTarget?: boolean;

  /**
   * Whether to display in the sub window.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * Defines whether the sheet dragbar is floating, when it's displayed.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableFloatingDragBar?: boolean;

  /**
   * Defines transition type when preferType is SheetType.CONTENT_COVER
   *
   * @default ModalTransition.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  modalTransition?: ModalTransition;

  /**
   * Define strategy for drawing rounded corners.
   * NOTE
   * 
   * 1. **RenderStrategy.FAST**: The current component and its child components will be drawn directly
   * onto the canvas with rounded corners applied.
   * 2. **RenderStrategy.OFFSCREEN**: The current component and its child components will first be rendered onto
   * an off-screen canvas, then undergo a rounded corner clipping, and finally be drawn onto the main canvas.
   *
   * @default RenderStrategy.FAST
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  radiusRenderStrategy?: RenderStrategy;

  /**
   * Set system-styled materials for sheet. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of sheet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * Edge light animation mode of the sheet.
   * Default value: EdgeLightMode.EDGELIGHT_DISABLED .
   *
   * @default EdgeLightMode.EDGELIGHT_DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;

  /**
   * Options for blur snapshot optimization of the sheet.
   * When this property is set, blur optimization is enabled and the sheet background
   * will be rendered using a blur snapshot.
   * This property cannot be dynamically switched after the sheet is presented.
   *
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  blurSnapshot?: BlurSnapshotOptions;
}

/**
 * State-specific styles for the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface StateStyles {

  /**
   * Style of the component when being stateless.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  normal?: any;

  /**
   * Style of the component in the pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pressed?: any;

  /**
   * Style of the component in the disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  disabled?: any;

  /**
   * Style of the component in the focused state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  focused?: any;

  /**
   * Style of the component in the clicked state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clicked?: any;

  /**
   * Style of the component in the selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected?: object;

  /**
   * Style of the component in the hovered state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  hovered?: object;
}

/**
 * Describes the popup message text style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface PopupMessageOptions {
  /**
   * Text color of the popup message.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textColor?: ResourceColor;

  /**
   * Font settings of the popup message.
   * 
   * **NOTE**
   * 
   * 1. Setting **family** is not supported.
   * 2. The **weight** attribute in **Font** does not support the number type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font?: Font;
}

/**
 * Enumerates the reasons for popup dismissal.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DismissReason {
  /**
   * Touching the **Back** button, swiping left or right on the screen, or pressing the **Esc** key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRESS_BACK = 0,

  /**
   * Touching the mask.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOUCH_OUTSIDE = 1,

  /**
   * Touching the close button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CLOSE_BUTTON = 2,

  /**
   * Swiping down.
   * 
   * **NOTE**
   * 
   * This API is effective only in [sheet transition]{@link common}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SLIDE_DOWN = 3,

  /**
   * Swiping left or right on the screen. By default, swiping right dismisses the popup, while swiping left is used in 
   * the mirror scenario. This setting is not user-defined.
   * 
   * **NOTE**
   * 
   * This API is effective only in [sheet transition]{@link common}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SLIDE = 4,
}

/**
 * Provides information about the dismissal of the popup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissPopupAction {
  /**
   * Callback for dismissing the popup. This API is called only when the popup needs to be dismissed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * Reason why the popup is dismissed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reason: DismissReason;
}

/**
 * Display state of the popup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PopupStateChangeParam {
  /**
   * Display state of the popup. It returns **true** when the popup transitions from closed to open, and **false** when 
   * the popup transitions from open to closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isVisible: boolean;
}

/**
 * Represents the callback invoked when the popup state changes.
 *
 * @param { PopupStateChangeParam } event - Display state of the popup.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;

/**
 * Sets the color of the mask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PopupMaskType {
  /**
   * Color of the mask.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color: ResourceColor;
}

/**
 * Sets the color and direction of the linear gradient for the outlines.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface PopupBorderLinearGradient {
  /**
   * Direction of the linear gradient.
   * 
   * Default value: **GradientDirection.Bottom**
   * 
   * **NOTE**
   * 
   * When the direction is set to **GradientDirection.None**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  direction?: GradientDirection;

  /**
   * Array of color stops, each of which consists of a color and its stop position. Invalid colors are automatically 
   * skipped.
   * 
   * **NOTE**
   * 
   * For details about how to set colors, see [ResourceColor]{@link ResourceColor}. Colors that are not within the types
   * of [ResourceColor]{@link ResourceColor} are invalid.
   * 
   * If the color in the array is set to **undefined** or **null**, the default color is black.
   * 
   * When using the **colors** parameter, take note of the following:
   * 
   * [ResourceColor]{@link ResourceColor} indicates the color, and **number** indicates the color's position, which 
   * ranges from 0 to 1.0: **0** indicates the start of the gradient color container, and **1.0** indicates the end of 
   * the container. To create a gradient with multiple color stops, you are advised to set the **number** values in 
   * ascending order. If a value of **number** in an array is smaller than that in the previous one, the value of 
   * **number** in the previous array is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  colors: Array<[ResourceColor, number]>;
}

/**
 * Configures the parameters of a popup. You can use the 
 * [getPromptAction()](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getpromptaction) method in 
 * [UIContext]{@link @ohos.arkui.UIContext} to obtain the [PromptAction]{@link @ohos.arkui.UIContext} object, and then 
 * call the attributes of **options** when 
 * [openPopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#openpopup18) or 
 * [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18) is called.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PopupCommonOptions {
  /**
   * Preferred position of the popup. If the set position is insufficient for holding the popup, it will be 
   * automatically adjusted.
   * 
   * Default value: **Placement.Bottom**
   *
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  placement?: Placement;

  /**
   * Color of the popup. To remove the background blur, set **backgroundBlurStyle** to **BlurStyle.NONE**. Default 
   * value: [TRANSPARENT]{@link Color} plus [COMPONENT_ULTRA_THICK]{@link BlurStyle}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupColor?: ResourceColor;

  /**
   * Whether to display the arrow. The value **true** means to display the arrow, and **false** means the opposite.
   * 
   * If the position set for the popup is not large enough, the arrow will not be displayed. For example, if 
   * **placement** is set to **Left**, and the popup height is less than the sum of the arrow width (32 vp) and twice 
   * the popup corner radius (48 vp), that is, 80 vp, the arrow will not be displayed.
   * 
   * Default value: **true**
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableArrow?: boolean;

  /**
   * Whether to automatically dismiss the popup when there is a page operation. The value **true** means to 
   * automatically dismiss the popup when there is a page operation, and **false** means the opposite.
   * 
   * Default value: **true**
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoCancel?: boolean;

  /**
   * Represents the callback invoked when the popup state changes.
   * 
   * **NOTE**
   * 
   * [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18) cannot be used for
   * update.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onStateChange?: PopupStateChangeCallback;

  /**
   * Offset of the popup arrow relative to the popup.
   * 
   * When the arrow is at the top or bottom of the popup: The value **0** indicates that the arrow is located on the 
   * leftmost, and any other value indicates the distance from the arrow to the leftmost; the arrow is centered by 
   * default.
   * 
   * When the arrow is on the left or right side of the popup: The value indicates the distance from the arrow to the 
   * top; the arrow is centered by default.
   * 
   * When the popup is displayed on either edge of the screen, it automatically adjusts horizontally. When the value is 
   * **0**, the arrow always points to the bound component.
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. If **arrowOffset** is not set, the distance between the popup arrow and the four corners must be no less than the corner radius.
   * 2. If **arrowPointPosition** is set, **arrowOffset** does not take effect.
   * 3. Percentage values are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether to show the popup in a subwindow. The value **true** means to show the popup in a subwindow, and **false** 
   * means to show the popup in the main window.
   * 
   * Default value: **false**
   * 
   * **NOTE**
   * 
   * [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18) cannot be used for
   * update.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * Whether to apply a mask with the specified color to the popup. The value **false** means that no mask is applied, 
   * **true** means that a transparent mask is applied, and **PopupMaskType** means that a mask with the specified color
   * is applied. Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mask?: boolean | PopupMaskType;

  /**
   * Spacing between the popup and the host node. Percentage values are not supported.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  targetSpace?: Length;

  /**
   * Offset of the popup relative to the display position specified by **placement**.
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   * 
   * Default value: **{x:0, y:0}**
   * 
   * Unit: vp
   *
   * @default { x: 0, y: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  offset?: Position;

  /**
   * Width of the popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  width?: Dimension;

  /**
   * Position of the tooltip arrow relative to its parent component. Available positions are **Start**, **Center**, and 
   * **End**, in both vertical and horizontal directions. All these positions are within the parent component area.
   * 
   * Default value: **ArrowPointPosition.CENTER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * Arrow thickness. If the arrow thickness exceeds the length of the edge minus twice the size of the popup rounded 
   * corner, the arrow is not drawn.
   * 
   * Default value: **16**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * Arrow height.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * Rounded corner radius of the popup.
   * 
   * Default value: **20**
   * 
   * Unit: vp
   *
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  radius?: Dimension;

  /**
   * Popup shadow.
   * 
   * Default value: **ShadowStyle.OUTER_DEFAULT_MD**
   *
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Background blur style of the popup.
   * 
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Whether the popup obtains focus when displayed.
   * 
   * **true**: The popup can obtain the focus; **false**: The popup cannot obtain the focus.
   * 
   * Default value: **false**
   * 
   * **NOTE**
   * 
   * [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18) cannot be used for
   * update.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  focusable?: boolean;

  /**
   * Transition animations for the entrance and exit of the popup.
   * 
   * **NOTE**
   * 
   * 1. If this parameter is not set, the default effect is used.
   * 2. Touching the back button during the entrance animation interrupts it and starts the exit animation. The final effect is one obtained after the curves of the entrance and exit animations are combined.
   * 3. Touching the back button during the exit animation does not affect the animation playback; the back button is unresponsive.
   * 4. [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18) cannot be used for update.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Interactive dismissal behavior. The default value is **true**, meaning that the popup responds to clicks, swipes (
   * left or right), and the back button.
   * 
   * 1. For the boolean type, if this parameter is set to **false**, the popup ignores clicks, swipes, back button, route navigation, and **Esc** key events, and can only be dismissed by setting the **show** parameter to **false**; if this parameter is set to **true**, the popup responds to dismissal events.
   * 2. If this parameter is set to a function, the dismissal event is intercepted and the callback function is executed. For swipes, back button, route navigation, and the **Esc** key, the value of **reason** returned in the callback function is **PRESS_BACK**. For clicks, the value is **TOUCH_OUTSIDE**.
   * 
   * **NOTE**
   * 
   * 1. No more **onWillDismiss** callback is allowed in an **onWillDismiss** callback.
   * 2. [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18) cannot be used for update.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

  /**
   * Whether the popup responds when the device is in hover mode (semi-folded state), that is, whether it triggers 
   * avoidance of the crease area in hover mode.
   * 
   * Default value: **false** (**true** for 2-in-1 devices by default). If this parameter is not set or set to an 
   * invalid value, the default value is used.
   * 
   * **NOTE**
   * 
   * 1. If the popup position is within the crease area in hover mode, it will not respond in hover mode.
   * 2. This parameter is supported on 2-in-1 devices since API version 20.
   * 3. This parameter only takes effect in window waterfall mode for 2-in-1 devices.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Whether the popup aligns with the transformed position of the target when the target component or its parent 
   * container has transformations (such as rotation and scaling).
   * 
   * **true**: The popup aligns with the transformed position of the target; **false**: The popup does not track such 
   * transformations, which may result in incorrect display.
   * 
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  followTransformOfTarget?: boolean;

  /**
   * Whether the popup covers the pointing component during avoidance.
   * 
   * Default value: **AvoidanceMode.COVER_TARGET**
   *
   * @default AvoidanceMode.COVER_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  avoidTarget?: AvoidanceMode;

  /**
   * Width of the outer outline of the popup.
   * 
   * Default value: **1**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. Percentage values are not supported. If a percentage value is set, the value **0** is used.
   * 2. If the outer outline is not set, this parameter must be used together with **outlineLinearGradient**.
   * 3. For double outlines, it is recommended that the outer outline width should not exceed 10 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension;

  /**
   * Width of the inner outline of the popup.
   * 
   * Default value: **1**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. Percentage values are not supported. If a percentage value is set, the value **0** is used.
   * 2. If no inner outline is set, this parameter must be used together with **borderLinearGradient**.
   * 3. For double outlines, it is recommended that the inner outline width should not exceed 10 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderWidth?: Dimension;

  /**
   * Linear gradient color of the outer outline of the popup.
   * 
   * **NOTE**
   * 
   * 1. If **outlineLinearGradient** is not set or set to **null** or **undefined**, the linear gradient color of the outer outline does not take effect.
   * 2. When **outlineLinearGradient** is set, the default value of **direction** is **GradientDirection.Bottom**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * Linear gradient color of the inner outline of the popup.
   * 
   * **NOTE**
   * 
   * 1. If **borderLinearGradient** is not set or set to **null** or **undefined**, the linear gradient color of the inner outline does not take effect.
   * 2. When **borderLinearGradient** is set, the default value of **direction** is **GradientDirection.Bottom**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;

  /**
   * Define the popup theme color mode.
   *
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * Set system-styled materials for popup. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * Defines the popup's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the popup's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;
  /**
   * Defines the display level of the popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;
}

/**
 * Defines the parameters of the tooltip.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface TipsOptions {

  /**
   * Delay before the tooltip appears. The maximum delay is 4000 ms. Values exceeding 4000 ms are capped at 4000 ms.
   * 
   * Default value: **700**.
   * 
   * Unit: ms.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  appearingTime?: number;

  /**
   * Delay before the tooltip disappears. The maximum delay is 4000 ms. Values exceeding 4000 ms are capped at 4000 ms.
   * 
   * Default value: **300**.
   * 
   * Unit: ms.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  disappearingTime?: number;

  /**
   * Delay before the tooltip appears when multiple tooltips are displayed consecutively. The maximum delay is 4000 ms. 
   * Values exceeding 4000 ms are capped at 4000 ms.
   * 
   * Default value: **300**.
   * 
   * Unit: ms.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  appearingTimeWithContinuousOperation?: number;

  /**
   * Delay before the tooltip disappears when multiple tooltips are displayed consecutively. The maximum delay is 4000 
   * ms. Values exceeding 4000 ms are capped at 4000 ms.
   * 
   * Default value: **0**.
   * 
   * Unit: ms.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  disappearingTimeWithContinuousOperation?: number;

  /**
   * Whether to display the tooltip arrow.
   * 
   * Default value: **true**.
   * 
   * **true**: yes. **false**: no.
   * 
   * **NOTE**
   * 
   * If the available space on the screen is insufficient, the tooltip will cover part of the component and the arrow 
   * will not be displayed.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableArrow?: boolean;

  /**
   * Position of the tooltip arrow relative to its parent component. Available positions are **Start**, **Center**, and 
   * **End**, in both vertical and horizontal directions. These positions are within the parent component area and do 
   * not exceed its boundaries or cover rounded corners.
   * 
   * Default value: **ArrowPointPosition.CENTER**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * Width of the tooltip arrow. If the set width exceeds the length of the edge minus twice the tooltip's corner 
   * radius, the arrow is not drawn.
   * 
   * Default value: **16**.
   * 
   * Unit: vp.
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * Height of the tooltip arrow.
   * 
   * Default value: **8**.
   * 
   * Unit: vp.
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * Anchor type of the tooltip.
   * 
   * Default value: **TipsAnchorType.TARGET**.
   * 
   * **NOTE**
   * 
   * If the anchor type of the tooltip is **TipsAnchorType.CURSOR**, the tooltip does not display an arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showAtAnchor?: TipsAnchorType;
  /**
   * Set system-styled materials for tips. Different materials have different effects, which can influence
   * backgroundColor, border, shadow, and other visual attributes of tips.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
}

/**
 * Provides the configuration options for the popup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface PopupOptions {
  /**
   * Content of the popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  message: string;

  /**
   * Whether to display the popup above the component. The default value is **false**. **true**: The popup is displayed 
   * above the bound component; **false**: The popup is displayed below the bound component.
   * 
   * **NOTE**
   * 
   * This parameter is supported since API version 7 and deprecated since API version 10. You are advised to use 
   * **placement** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PopupOptions#placement
   */
  placementOnTop?: boolean;

  /**
   * Display position of the popup relative to the host node. The default value is **Placement.Bottom**.
   * 
   * If both **placementOnTop** and **placement** are set, the latter prevails. If the popup cannot be completely 
   * displayed in the specified position, the popup automatically adjusts its position to completely show itself.
   *
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  placement?: Placement;

  /**
   * Primary button.
   * 
   * **value**: text of the primary button in the popup.
   * 
   * **action**: callback function for clicking of the primary button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
   * Secondary button.
   * 
   * **value**: text of the secondary button in the popup.
   * 
   * **action**: callback function for clicking of the secondary button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
   * Callback for popup visibility state changes. The parameter **isVisible** indicates the visibility of the popup. It 
   * returns **true** when the popup transitions from closed to open, and **false** when the popup transitions from open
   * to closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isVisible: boolean
  }) => void;

  /**
   * Offset of the popup arrow relative to the popup.
   * 
   * When the arrow is at the top or bottom of the popup: The value **0** indicates that the arrow is located on the 
   * leftmost, and any other value indicates the distance from the arrow to the leftmost; the arrow is centered by 
   * default.
   * 
   * When the arrow is on the left or right side of the popup: The value indicates the distance from the arrow to the 
   * top; the arrow is centered by default.
   * 
   * When the popup is displayed on either edge of the screen, it automatically adjusts horizontally. When the value is 
   * **0**, the arrow always points to the bound component.
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. If **arrowOffset** is not set, the distance between the popup arrow and the four corners must be no less than the corner radius.
   * 2. If **arrowPointPosition** is set, **arrowOffset** does not take effect.
   * 3. Percentage values are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether the popup is displayed in the created subwindow.
   * 
   * **true**: The popup is displayed in the created subwindow; **false**: The popup is displayed in the corresponding 
   * main window.
   * 
   * Default value: **false**
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * Whether to apply a mask with the specified color to the popup.
   * 
   * **true**: A transparent mask is applied; **false**: No mask is applied.
   * 
   * **Color**: A mask with the specified color is applied.
   * 
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Configuration options of the popup message.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  messageOptions?: PopupMessageOptions;

  /**
   * Spacing between the popup and the host node. Percentage values are not supported.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  targetSpace?: Length;

  /**
   * Whether to display the arrow.
   * 
   * **true**: The arrow is displayed; **false**: The arrow is not displayed.
   * 
   * Default value: **true**
   * 
   * **NOTE**
   * 
   * If the available space on the screen is insufficient, the popup will cover part of the component and the arrow will
   * not be displayed.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableArrow?: boolean;
  /**
   * Offset of the popup relative to the display position specified by **placement**.
   * 
   * Default value: **{x:0, y:0}**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default { x: 0, y: 0 } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Position;

  /**
   * Color of the popup. To remove the background blur, set **backgroundBlurStyle** to **BlurStyle.NONE**.
   * 
   * Default value: [TRANSPARENT]{@link Color} plus [COMPONENT_ULTRA_THICK]{@link BlurStyle}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  popupColor?: Color | string | Resource | number;

  /**
   * Whether the popup is automatically closed when an operation is performed on the page.
   * 
   * **true**: The popup is automatically closed; **false**: The popup is not automatically closed.
   * 
   * Default value: **true**
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  autoCancel?: boolean;

  /**
   * Width of the popup. If this parameter is not set or the value is invalid, the popup width is automatically adjusted
   * to adapt to the content width.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width?: Dimension;

  /**
   * Position of the tooltip arrow relative to its parent component. Available positions are **Start**, **Center**, and 
   * **End**, in both vertical and horizontal directions. All these positions are within the parent component area.
   * 
   * Default value: **ArrowPointPosition.CENTER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * Arrow thickness. If the arrow thickness exceeds the length of the edge minus twice the size of the popup rounded 
   * corner, the arrow is not drawn.
   * 
   * Default value: **16**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * Arrow height.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * Rounded corner radius of the popup.
   * 
   * Default value: **20**
   * 
   * Unit: vp
   *
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius?: Dimension;

  /**
   * Popup shadow.
   * 
   * Default value: **ShadowStyle.OUTER_DEFAULT_MD**
   *
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Background blur style of the popup.
   * 
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Transition animations for the entrance and exit of the popup.
   * 
   * **NOTE**
   * 
   * 1. If this parameter is not set, the default entrance and exit animations are used.
   * 2. Touching the back button during the entrance animation interrupts it and starts the exit animation. The final effect is one obtained after the curves of the entrance and exit animations are combined.
   * 3. Touching the back button during the exit animation does not affect the animation playback; the back button is unresponsive.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Interactive dismissal behavior. The default value is **true**, meaning that the popup responds to clicks, swipes (
   * left or right), and the back button.
   * 
   * 1. For the boolean type, if this parameter is set to **false**, the popup ignores clicks, swipes, back button, route navigation, and **Esc** key events, and can only be dismissed by setting the **show** parameter to **false**; if this parameter is set to **true**, the popup responds to dismissal events.
   * 2. If this parameter is set to a function, the dismissal event is intercepted and the callback function is executed. For swipes, back button, route navigation, and the **Esc** key, the value of **reason** returned in the callback function is **PRESS_BACK**. For clicks, the value is **TOUCH_OUTSIDE**.
   * 
   * **NOTE**
   * 
   * No more **onWillDismiss** callback is allowed in an **onWillDismiss** callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

  /**
   * Whether the popup responds when the device is in hover mode (semi-folded state), that is, whether it triggers 
   * avoidance of the crease area in hover mode.
   * 
   * Default value: **false** (**true** for 2-in-1 devices by default). If this parameter is not set or set to an 
   * invalid value, the default value is used.
   * 
   * **NOTE**
   * 
   * 1. If the popup position is within the crease area in hover mode, it will not respond in hover mode.
   * 2. This parameter is supported on 2-in-1 devices since API version 20.
   * 3. This parameter only takes effect in window waterfall mode for 2-in-1 devices.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Whether the popup aligns with the transformed position of the target when the target component or its parent 
   * container has transformations (such as rotation and scaling).
   * 
   * **true**: The popup aligns with the transformed position of the target; **false**: The popup does not track such 
   * transformations, which may result in incorrect display.
   * 
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  followTransformOfTarget?: boolean;

  /**
   * Whether to avoid the soft keyboard. By default, the popup does not avoid the soft keyboard. When configured to 
   * avoid the soft keyboard, if the popup display space is insufficient, the display mode of the popup changes from 
   * being centered over the parent component to being translated and covering the parent component.. In addition, if 
   * the popup arrow does not point to the host, the arrow will not be displayed.
   * 
   * Default value: **KeyboardAvoidMode.NONE**
   *
   * @default KeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAvoidMode?: KeyboardAvoidMode;

  /**
   * Whether the popup covers the pointing component during avoidance.
   * 
   * Default value: **AvoidanceMode.COVER_TARGET**
   *
   * @default AvoidanceMode.COVER_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  avoidTarget?: AvoidanceMode;

  /**
   * Width of the outer outline of the popup.
   * 
   * Default value: **1**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. Percentage values are not supported. If a percentage value is set, the value **0** is used.
   * 2. If the outer outline is not set, this parameter must be used together with **outlineLinearGradient**.
   * 3. For double outlines, it is recommended that the outer outline width should not exceed 10 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension;

  /**
   * Width of the inner outline of the popup.
   * 
   * Default value: **1**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. Percentage values are not supported. If a percentage value is set, the value **0** is used.
   * 2. If no inner outline is set, this parameter must be used together with **borderLinearGradient**.
   * 3. For double outlines, it is recommended that the inner outline width should not exceed 10 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderWidth?: Dimension;

  /**
   * Linear gradient color of the outer outline of the popup.
   * 
   * **NOTE**
   * 
   * 1. If **outlineLinearGradient** is not set or set to **null** or **undefined**, the linear gradient color of the outer outline does not take effect.
   * 2. When **outlineLinearGradient** is set, the default value of **direction** is **GradientDirection.Bottom**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * Linear gradient color of the inner outline of the popup.
   * 
   * **NOTE**
   * 
   * 1. If **borderLinearGradient** is not set or set to **null** or **undefined**, the linear gradient color of the inner outline does not take effect.
   * 2. When **borderLinearGradient** is set, the default value of **direction** is **GradientDirection.Bottom**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;

  /**
   * Define the popup theme color mode.
   *
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * Set system-styled materials for popup. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * Defines the popup's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the popup's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;
  /**
   * Defines the display level of the popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;
}

/**
 * Provides information for displaying a custom popup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface CustomPopupOptions {
  /**
   * Popup builder.
   * 
   * **NOTE**
   * 
   * 1. The **Popup** attribute is a universal attribute. A custom popup does not support display of another popup. The **position** attribute cannot be used for the first-layer container in the builder. If the **position** attribute is used, the popup will not be displayed.
   * 2. If a custom component is used in the **builder**, the **aboutToAppear** and **aboutToDisappear** lifecycle callbacks of the custom component are irrelevant to the visibility of the popup. As such, the lifecycle of the custom component cannot be used to determine whether the popup is displayed or not.
   * 3. The **builder** of this constructor can be defined only in UI components, such as the **Builder** function/method or the [build](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#build) method.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  builder: CustomBuilder;

  /**
   * Preferred position of the popup. If the set position is insufficient for holding the popup, it will be 
   * automatically adjusted.
   * 
   * Default value: **Placement.Bottom**
   *
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placement?: Placement;

  /**
   * Color of the popup mask.
   * 
   * **NOTE**
   * 
   * This parameter is deprecated since API version 10. You are advised to use **mask** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead CustomPopupOptions#mask
   */
  maskColor?: Color | string | Resource | number;

  /**
   * Color of the popup. To remove the background blur, set **backgroundBlurStyle** to **BlurStyle.NONE**.
   * 
   * The default value varies by API version.
   * 
   * API version 10: **'#4d4d4d'**
   * 
   * API version 11 and later: [TRANSPARENT]{@link Color} plus [COMPONENT_ULTRA_THICK]{@link BlurStyle}
   *
   * @default '#4d4d4d' [since 10 - 10]
   * @default TRANSPARENT plus COMPONENT_ULTRA_THICK [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  popupColor?: Color | string | Resource | number;

  /**
   * Whether to display the arrow.
   * 
   * **true**: The arrow is displayed; **false**: The arrow is not displayed.
   * 
   * Since API version 9, if the position set for the popup is not large enough, the arrow will not be displayed. For 
   * example, if **placement** is set to **Left**, and the popup height is less than the sum of the arrow width (32 vp) 
   * and twice the popup corner radius (48 vp), that is, 80 vp, the arrow will not be displayed.
   * 
   * Default value: **true**
   *
   * @default true [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  enableArrow?: boolean;

  /**
   * Whether the popup is automatically closed when an operation is performed on the page.
   * 
   * **true**: The popup is automatically closed; **false**: The popup is not automatically closed.
   * 
   * Default value: **true**
   * 
   * **NOTE**
   * 
   * To dismiss the popup upon a click on it, place a layout component in the **builder**, place the **Popup** component
   * in the layout component, and set **show** to **false** in the **onClick** event of the layout component.
   *
   * @default true [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  autoCancel?: boolean;

  /**
   * Callback for popup visibility state changes. The parameter indicates the visibility of the popup. It returns 
   * **true** when the popup transitions from closed to open, and **false** when the popup transitions from open to 
   * closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isVisible: boolean
  }) => void;

  /**
   * Offset of the popup arrow relative to the popup.
   * 
   * When the arrow is at the top or bottom of the popup: The value **0** indicates that the arrow is located on the 
   * leftmost, and any other value indicates the distance from the arrow to the leftmost; the arrow is centered by 
   * default.
   * 
   * When the arrow is on the left or right side of the popup: The value indicates the distance from the arrow to the 
   * top; the arrow is centered by default.
   * 
   * When the popup is displayed on either edge of the screen, it automatically adjusts horizontally. When the value is 
   * **0**, the arrow always points to the bound component.
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. If **arrowOffset** is not set, the distance between the popup arrow and the four corners must be no less than the corner radius.
   * 2. If **arrowPointPosition** is set, **arrowOffset** does not take effect.
   * 3. Percentage values are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether the popup is displayed in the created subwindow.
   * 
   * **true**: The popup is displayed in the created subwindow; **false**: The popup is displayed in the corresponding 
   * main window.
   * 
   * Default value: **false**
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  showInSubWindow?: boolean;

  /**
   * Whether to apply a mask with the specified color to the popup. The value **true** means to apply a transparent mask
   * to the popup, **false** means not to apply a mask to the popup, and a color value means to apply a mask in the 
   * corresponding color to the popup. Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Spacing between the popup and the host node. Percentage values are not supported.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  targetSpace?: Length;

  /**
   * Offset of the popup relative to the display position specified by **placement**.
   * 
   * Default value: **{x:0, y:0}**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default { x: 0, y: 0 } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Position;

  /**
   * Width of the popup. If this parameter is not set or the value is invalid, the popup width is automatically adjusted
   * to adapt to the content width.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width?: Dimension;

  /**
   * Position of the tooltip arrow relative to its parent component. Available positions are **Start**, **Center**, and 
   * **End**, in both vertical and horizontal directions. All these positions are within the parent component area.
   * 
   * Default value: **ArrowPointPosition.CENTER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * Arrow thickness. If the arrow thickness exceeds the length of the edge minus twice the size of the popup rounded 
   * corner, the arrow is not drawn.
   * 
   * Default value: **16**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 16.0_vp. [since 11 - 11]
   * @default 16.0_vp.
   *     <p><strong>NOTE</strong>:
   *     <br>This parameter cannot be set in percentage.
   *     </p> [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  arrowWidth?: Dimension;

  /**
   * Arrow height.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * Percentage values are not supported.
   *
   * @default 8.0_vp. [since 11 - 11]
   * @default 8.0_vp.
   *     <p><strong>NOTE</strong>:
   *     <br>This parameter cannot be set in percentage.
   *     </p> [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * Rounded corner radius of the popup.
   * 
   * Default value: **20**
   * 
   * Unit: vp
   *
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius?: Dimension;

  /**
   * Popup shadow.
   * 
   * Default value: **ShadowStyle.OUTER_DEFAULT_MD**
   *
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Background blur style of the popup.
   * 
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   * 
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Whether the popup obtains focus when displayed.
   * 
   * **true**: The popup can obtain the focus; **false**: The popup cannot obtain the focus.
   * 
   * Default value: **false**
   *
   * @default true [since 11 - 11]
   * @default false [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  focusable?: boolean;

  /**
   * Transition animations for the entrance and exit of the popup.
   * 
   * **NOTE**
   * 
   * 1. If this parameter is not set, the default entrance and exit animations are used.
   * 2. Touching the back button during the entrance animation interrupts it and starts the exit animation. The final effect is one obtained after the curves of the entrance and exit animations are combined.
   * 3. Touching the back button during the exit animation does not affect the animation playback; the back button is unresponsive.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Interactive dismissal behavior. The default value is **true**, meaning that the popup responds to clicks, swipes (
   * left or right), and the back button.
   * 
   * 1. For the boolean type, if this parameter is set to **false**, the popup ignores clicks, swipes, back button, route navigation, and **Esc** key events, and can only be dismissed by setting the **show** parameter to **false**; if this parameter is set to **true**, the popup responds to dismissal events.
   * 2. If this parameter is set to a function, the dismissal event is intercepted and the callback function is executed. For swipes, back button, route navigation, and the **Esc** key, the value of **reason** returned in the callback function is **PRESS_BACK**. For clicks, the value is **TOUCH_OUTSIDE**.
   * 
   * **NOTE**
   * 
   * No more **onWillDismiss** callback is allowed in an **onWillDismiss** callback.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

 /**
   * Whether the popup responds when the device is in hover mode (semi-folded state), that is, whether it triggers 
   * avoidance of the crease area in hover mode.
   * 
   * Default value: **false** (**true** for 2-in-1 devices by default). If this parameter is not set or set to an 
   * invalid value, the default value is used.
   * 
   * **NOTE**
   * 
   * 1. If the popup position is within the crease area in hover mode, it will not respond in hover mode.
   * 2. This parameter is supported on 2-in-1 devices since API version 20.
   * 3. This parameter only takes effect in window waterfall mode for 2-in-1 devices.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Whether the popup aligns with the transformed position of the target when the target component or its parent 
   * container has transformations (such as rotation and scaling).
   * 
   * **true**: The popup aligns with the transformed position of the target; **false**: The popup does not track such 
   * transformations, which may result in incorrect display.
   * 
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  followTransformOfTarget?: boolean;

  /**
   * Whether to avoid the soft keyboard. By default, the popup does not avoid the soft keyboard. When configured to 
   * avoid the soft keyboard, if the popup display space is insufficient, the display mode of the popup changes from 
   * being centered over the parent component to being translated and covering the parent component.. In addition, if 
   * the popup arrow does not point to the host, the arrow will not be displayed.
   * 
   * Default value: **KeyboardAvoidMode.NONE**
   *
   * @default KeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAvoidMode?: KeyboardAvoidMode;

  /**
   * Whether the popup covers the pointing component during avoidance.
   * 
   * Default value: **AvoidanceMode.COVER_TARGET**
   *
   * @default AvoidanceMode.COVER_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  avoidTarget?: AvoidanceMode;

  /**
   * Width of the outer outline of the popup.
   * 
   * Default value: **1**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. Percentage values are not supported. If a percentage value is set, the value **0** is used.
   * 2. If the outer outline is not set, this parameter must be used together with **outlineLinearGradient**.
   * 3. For double outlines, it is recommended that the outer outline width should not exceed 10 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension;

  /**
   * Width of the inner outline of the popup.
   * 
   * Default value: **1**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * 1. Percentage values are not supported. If a percentage value is set, the value **0** is used.
   * 2. If no inner outline is set, this parameter must be used together with **borderLinearGradient**.
   * 3. For double outlines, it is recommended that the inner outline width should not exceed 10 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderWidth?: Dimension;

  /**
   * Linear gradient color of the outer outline of the popup.
   * 
   * **NOTE**
   * 
   * 1. If **outlineLinearGradient** is not set or set to **null** or **undefined**, the linear gradient color of the outer outline does not take effect.
   * 2. When **outlineLinearGradient** is set, the default value of **direction** is **GradientDirection.Bottom**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * Linear gradient color of the inner outline of the popup.
   * 
   * **NOTE**
   * 
   * 1. If **borderLinearGradient** is not set or set to **null** or **undefined**, the linear gradient color of the inner outline does not take effect.
   * 2. When **borderLinearGradient** is set, the default value of **direction** is **GradientDirection.Bottom**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;

  /**
   * Define the popup theme color mode.
   *
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * Set system-styled materials for popup. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * Defines the popup's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the popup's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;
  /**
   * Defines the display level of the popup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;
}

/**
 * Defines the preview style of a menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum MenuPreviewMode {
  /**
   * No preview is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NONE = 0,
  /**
   * The preview is a screenshot of the component on which a long-press triggers the context menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  IMAGE = 1
}

/**
 * Sets the relative scale ratio at the start and end of the animation compared to the original preview image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type AnimationRange<T> = [from: T, to: T];

/**
 * Defines the style for displaying a long-press preview.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface ContextMenuAnimationOptions {
  /**
   * Relative scale ratio at the start and end of the animation compared to the original preview image.
   * 
   * Default value: **[0.95, 1.1]**
   * 
   * **NOTE**
   * 
   * The scale ratio must be set based on the specific use case. It is recommended that it be less than the width of the
   * preview image or the maximum constraint of the layout.
   *
   * @default [0.95, 1.1] [since 11 - 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  scale?: AnimationRange<number>;

  /**
   * Transition effect for the entrance and exit of the menu.
   * 
   * **NOTE**
   * 
   * If the screen orientation is switched during the exit animation of a menu, the menu will avoid obstacles. Level-2 
   * menus do not inherit custom animations. The level-2 menu can be clicked during the display process, but not during 
   * the execution of the exit animation.
   * 
   * For details, see [TransitionEffect]{@link TransitionEffect}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * In the custom preview (**preview** is of the CustomBuilder type) and menu displayed in long-press (**responseType**
   * is set to **LongPress**) scenarios, **hoverScale** is used to set two parameters for the screenshot floating 
   * animation of the bound component: the start and end scale ratios relative to the original preview image. After 
   * **hoverScale** is set, the floating animation and preview image are switched with a transition effect.
   * 
   * **NOTE**
   * 
   * If the value is less than or equal to **0**, this parameter does not take effect.
   * 
   * This API does not take effect in 
   * [bindContextMenu<sup>12+</sup>]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
   * scenarios.
   * 
   * This API does not take effect when **transition** is set.
   * 
   * If this API and the **scale** API are used at the same time, the start value of the **scale** API does not take 
   * effect.
   * 
   * To ensure the optimal experience, it is not recommended that the final preview image size be smaller than the size 
   * of the original component snapshot. The width and height of the preview animation are affected by the component 
   * snapshot and the custom preview size. Verify the display effect based on the actual use case.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  hoverScale?: AnimationRange<number>;

  /**
   * Whether lifting the finger before triggering the drag effect allows preview menu pop-up cancellation in scenarios 
   * where **preview** is of the CustomBuilder type (custom preview image), **responseType** is set to **LongPress** (
   * display is triggered by a long-press action), and **hoverScaleInterruption** is set to **true**. The options are 
   * **true** (yes) and **false** (no).
   * 
   * Default value: **false**
   * 
   * **NOTE**
   * 
   * If the **hoverScale** API is not set or the **transition** API is set, this parameter does not take effect. If the 
   * finger is lifted before the long-press duration is sufficient to trigger the drag effect, the **hoverScale** effect
   * of the preview menu will revert, the preview menu will not pop up, and gesture events such as click bound to the 
   * original component can still be triggered. If the finger is lifted after the long-press duration is sufficient to 
   * trigger the drag effect, the preview menu will pop up properly, and gesture events such as click bound to the 
   * original component will no longer be triggered.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  hoverScaleInterruption?: boolean;
}

/**
 * Enumerates the border corner radius types.
 *
 * @unionmember { Length } Size unit.
 * @unionmember { BorderRadiuses } Corner radius of a component's border.
 * @unionmember { LocalizedBorderRadiuses } Localized corner radius of a component's border.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;

/**
 * Enumerates the haptic feedback modes used when the menu is displayed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum HapticFeedbackMode {
  /**
   * The menu is displayed without haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLED = 0,
  /**
   * The menu is displayed with haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLED = 1,
  /**
   * Whether to enable haptic feedback is subject to system settings. It is enabled when the menu has a mask.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  AUTO = 2
}

/**
 * Enumerates modal modes of the sub-window menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum ModalMode {
  /**
   * Automatic mode, which is the default behavior of the menu component on the current device. In the current version, 
   * the effect on all devices is the same as that of **ModalMode.NONE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  AUTO = 0,
  /**
   * Events can be passed through areas other than the menu itself, allowing underlying controls to respond to events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NONE = 1,
  /**
   * Events cannot be passed through the application window where the menu is located and the menu area, but can be 
   * passed through other areas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TARGET_WINDOW = 2
}

/**
 * Sets the mask type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface MenuMaskType {
  /**
   * Mask color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_mask_thin')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color?: ResourceColor;

  /**
   * Blur material of the mask.
   * 
   * Default value: **BlurStyle.BACKGROUND_THIN**
   *
   * @default BlurStyle.BACKGROUND_THIN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyle?: BlurStyle;
}

/**
 * Enumerates the scale modes of the preview image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum PreviewScaleMode {
  /**
   * The preview image automatically adjusts its width, height, and scale based on [Placement]{@link Placement}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  AUTO = 0,

  /**
   * The preview image retains its original size. However, the preview image may still be compressed or cropped due to 
   * the safe area constraints.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CONSTANT = 1,

  /**
   * The preview image maintains its aspect ratio when scaled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  MAINTAIN = 2
}

/**
 * Enumerates the reference sizes of the available layout area when the preview image width and height are set to 
 * percentages.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AvailableLayoutArea {
  /**
   * The reference size of the available layout area is the window size minus the safe margins on all sides.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */    
  SAFE_AREA = 0,
}

/**
 * Defines the content transition effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare class ContentTransitionEffect {
  /**
   * When the content changes, there is no animation effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static get IDENTITY(): ContentTransitionEffect;

  /**
   * When the content changes, there is a smooth fade-in and fade-out effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static get OPACITY(): ContentTransitionEffect;
}

/**
 * Enumerates the modes in which the menu avoids the soft keyboard.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare enum MenuKeyboardAvoidMode {
  /**
   * The menu does not avoid the soft keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  NONE = 0,

  /**
   * The menu avoids the soft keyboard. If the space is insufficient, the menu will be translated or resized to avoid 
   * the soft keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  TRANSLATE_AND_RESIZE = 1,
}

/**
 * The position of grid in menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum MenuGridPosition {
  /**
   * The grid is located at the top of the menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOP = 0,
  /**
   * The grid is located at the bottom of the menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BOTTOM = 1
}

/**
 * Defines the grid style of menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface MenuGridStyleOptions {
  /**
   * The count of items in grid.
   *
   * @default 3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  count?: number;
  /**
   * The horizontal size of items in grid.
   *
   * @default 3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  horizontalSize?: number;
  /**
   * The position of grid.
   *
   * @default MenuGridPosition.TOP
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  position?: MenuGridPosition;
}

/**
 * Configures menu item information.
 *
 * **Table 1: Menu offset when both offset and placement are set**
 * 
 * | Value of placement                                           | Menu Offset                                            |
 * | ------------------------------------------------------------ | ------------------------------------------------------------ |
 * | Placement.TopLeft, Placement.Top, or Placement.TopRight        | If the value of **x** is a positive number for **offset**, the menu shifts to the right relative to the component. If the value of **y** is a positive number, the menu shifts upward relative to the component.|
 * | Placement.BottomLeft, Placement.Bottom, or Placement.BottomRight| If the value of **x** is a positive number for **offset**, the menu shifts to the left relative to the component. If the value of **y** is a positive number, the menu shifts downward relative to the component.|
 * | Placement.RightTop, Placement.Right, or Placement.RightBottom  | If the value of **x** is a positive number for **offset**, the menu shifts to the right relative to the component. If the value of **y** is a positive number, the menu shifts downward relative to the component.|
 * 
 * **Table 2: Default position of the menu arrow when both arrowOffset and placement are set**
 * 
 * | Value of placement                          | Menu Arrow Position                                          |
 * | ------------------------------------------- | ------------------------------------------------------------ |
 * | Placement.Top or Placement.Bottom            | The arrow is displayed horizontally and centered by default, with a distance from the left edge of the menu equal to the arrow's safe distance.|
 * | Placement.Left or Placement.Right            | The arrow is displayed vertically and centered by default, with a distance from the top edge of the menu equal to the arrow's safe distance.|
 * | Placement.TopLeft or Placement.BottomLeft    | The arrow is displayed horizontally by default, with a distance from the left edge of the menu equal to the arrow's safe distance.|
 * | Placement.TopRight or Placement.BottomRight  | The arrow is displayed horizontally by default, with a distance from the right edge of the menu equal to the arrow's safe distance.  |
 * | Placement.LeftTop or Placement.RightTop      | The arrow is displayed vertically by default, with a distance from the top edge of the menu equal to the arrow's safe distance.  |
 * | Placement.LeftBottom or Placement.RightBottom| The arrow is displayed vertically by default, with a distance from the bottom edge of the menu equal to the arrow's safe distance.  |
 * 
 * **Table 3 Default menu position when enableArrow is set to true and placement is not set or set to an invalid value**
 * | API| Default Menu Position|
 * |------|-------------|
 * | [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)} | Placement.BottomLeft |
 * | [bindMenu<sup>11+</sup>]{@link CommonMethod#bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)} | Placement.BottomLeft |
 * | [bindContextMenu<sup>8+</sup>]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)} | Placement.Top |
 * | [bindContextMenu<sup>12+</sup>]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)} | Placement.BottomLeft |
 * | [bindContextMenuWithResponse<sup>23+</sup>]{@link CommonMethod#bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions)} | Placement.Top |
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ContextMenuOptions {
  /**
   * Offset for showing the context menu, which should not cause the menu to extend beyond the screen.
   * 
   * Default value: **{ x: 0, y: 0 }**. Percentage values are not supported.
   * 
   * **NOTE**
   * 
   * When the menu is displayed relative to the parent component area, the width or height of the area is automatically 
   * counted into the offset based on the **placement** attribute of the menu.
   * 
   * Table 1 describes the relationship between the final **offset** value and the **placement** value.
   * 
   * If this parameter is not set, or set to an abnormal value or **undefined**, the default value **{ x: 0, y: 0 }** is
   * used. If the offset exceeds the screen range, it will be constrained to the nearest point within the screen range.
   * 
   * If the display position of the menu is adjusted (different from the main direction of the initial **placement** 
   * value), the offset value is invalid.
   *
   * @default - [since 10 - 10]
   * @default {x:0,y:0} - Percentage values are not supported. [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Position;

  /**
   * Preferred position of the context menu. If the set position is insufficient for holding the component, it will be
   * automatically adjusted.
   * 
   * **NOTE**
   * 
   * 1. When this parameter is used as the input parameter of [bindMenu]{@link CommonMethod#bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}, its default value is **Placement.BottomLeft**.
   * 2. When this parameter is used as the input parameter of [bindContextMenu<sup>8+</sup>]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)} or [bindContextMenuWithResponse<sup>23+</sup>]{@link CommonMethod#bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions)}, the menu is displayed at the click position.
   * 3. When this parameter is used as the input parameter of [bindContextMenu<sup>12+</sup>]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}, its default value is **Placement.BottomLeft**.
   * 4. If the value of **placement** is **undefined**, **null**, or empty, the default value is used.
   *
   * @default - [since 10 - 10]
   * @default Placement.BottomLeft [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  placement?: Placement;

  /**
   * Whether to display an arrow. If the size and position of the context menu are insufficient for holding an arrow, no
   * arrow is displayed.
   * 
   * Default value: **false**, indicating that no arrow is displayed.
   * 
   * **NOTE**
   * 
   * When **enableArrow** is set to **true** and **placement** is not set or set to an invalid value, the arrow is 
   * displayed above the target object by default. (For details about the relationship between the default menu position
   * and the API, see Table 3.) Otherwise, the arrow is displayed based on the position specified by **placement**. If 
   * the position is insufficient for holding the arrow, it is automatically adjusted. When **enableArrow** is 
   * **undefined**, no arrow is displayed. This API is supported in **bindContextMenu** since API version 10 and 
   * **bindMenu** since API version 12.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableArrow?: boolean;

  /**
   * Offset of the arrow relative to the context menu. The offset settings take effect only when the value is valid, can
   * be converted to a number greater than 0, and does not cause the arrow to extend beyond the safe area of the context
   * menu.
   * 
   * Default value: **0**
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * The safe distance of the arrow from the four sides of the menu is the sum of the menu's corner radius and half the 
   * width of the arrow.
   * 
   * The value of **placement** determines whether the offset is horizontal or vertical.
   * 
   * When the arrow is in the horizontal direction of the menu, the offset is the distance from the arrow to the 
   * leftmost arrow's safe distance. When the arrow is in the vertical direction of the menu, the offset is the distance
   * from the arrow to the topmost arrow's safe distance.
   * 
   * The default position where the arrow is displayed varies with the value of **placement**:
   * 
   * Table 2 describes the relationship between the final position of the arrow and the value of **placement** in cases 
   * where the menu does not trigger repositioning.
   * 
   * This API is supported in **bindContextMenu** since API version 10 and **bindMenu** since API version 12.
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowOffset?: Length;

  /**
   * Preview displayed when the context menu is triggered by a long-press or by calling 
   * [bindContextMenu<sup>12+</sup>]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}.
   * It can be a screenshot of the target component or custom content.
   * 
   * Default value: **MenuPreviewMode.NONE**, indicating no preview.
   * 
   * **NOTE**
   * 
   * - This parameter has no effect when **responseType** is set to **ResponseType.RightClick**.
   * - If **preview** is set to **MenuPreviewMode.NONE** or is not set, the **enableArrow** parameter is effective.
   * - If **preview** is set to **MenuPreviewMode.IMAGE** or **CustomBuilder**, no arrow will be displayed even when 
   * **enableArrow** is **true**.
   *
   * @default MenuPreviewMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  preview?: MenuPreviewMode | CustomBuilder;

  /**
   * Border corner radius for the preview image.
   * 
   * Default value: **16vp**
   * 
   * **NOTE**
   * 
   * If the sum of the two corner radii in the horizontal direction exceeds the width of the preview image, or the sum 
   * of the two corner radii in the vertical direction exceeds the height of the preview image, the maximum allowable 
   * radius should be used.
   * 
   * A larger corner radius results in a faster animation change for the corners.
   *
   * @default 16vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  previewBorderRadius?: BorderRadiusType;

  /**
   * Default value: **8vp** for 2-in-1 devices and **20vp** for other devices
   * 
   * **NOTE**
   * 
   * The value can be in percentage.
   * 
   * If the sum of the two maximum corner radii in the horizontal direction exceeds the menu's width, or if the sum of 
   * the two maximum corner radii in the vertical direction exceeds the menu's height, the default corner radius of the 
   * menu will be used.
   * 
   * When the Length type is used: Invalid input values will trigger a fallback to the default corner radius.
   * 
   * When the BorderRadiuses or LocalizedBorderRadiuses type is used: Invalid input values will result in the menu 
   * having no rounded corners by default.
   *
   * @default 8vp for 2-in-1 devices and 20vp for other devices
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Callback invoked after the menu appears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAppear?: () => void;

  /**
   * Callback invoked after the menu disappears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDisappear?: () => void;

  /**
   * Callback triggered when the menu is about to appear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToAppear?: () => void;

  /**
   * Callback triggered when the menu is about to disappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  aboutToDisappear?: () => void;

  /**
   * Minimum margin between the preview and menu layout for top, bottom, left, and right edges.
   * 
   * **NOTE**
   * 
   * Only vp, px, fp, lpx, and percentage units are supported.
   * 
   * Any abnormal or negative values will be treated as the default values.
   * 
   * If **preview** is set to **CustomBuilder**, setting **margin.left** or **margin.right** will remove the maximum 
   * grid width restriction for the preview.
   * 
   * Be cautious not to set excessively large margins that are too large, which could reduce the layout area and affect 
   * the proper layout of the preview and menu.
   * 
   * If the sum of horizontal margins exceeds the maximum layout width, **margin.left** and **margin.right** will be 
   * ignored and default values will be applied.
   * 
   * If the sum of vertical margins exceeds the maximum layout width, **margin.top** and **margin.bottom** will be 
   * ignored and default values will be applied.
   * 
   * The default margin values are 16 vp for the left and right, 16 vp for top, and 4 vp for bottom.
   *
   * @default 12vp for left and right, 16vp for top and bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  layoutRegionMargin?: Margin;

  /**
   * Display effect of the long-press preview.
   * 
   * Default value: **{ scale: [0.95, 1.1], transition: undefined, hoverScale: undefined }**
   * 
   * **NOTE**
   * 
   * If the value is less than or equal to **0**, this parameter does not take effect.
   *
   * @default { scale: [0.95, 1.1], transition: undefined, hoverScale: undefined } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  previewAnimationOptions?: ContextMenuAnimationOptions;

  /**
   * Background color of the menu.
   * 
   * Default value: **Color.Transparent**
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the menu.
   * 
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Background blur style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Transition effect for the entrance and exit of the menu.
   * 
   * **NOTE**
   * 
   * During the exit animation of the menu, if there is a switch between landscape and portrait modes, the menu will 
   * make way. Level-2 menus do not inherit custom animations. The level-2 menu can be clicked during the pop-up 
   * process, but not during the execution of the exit animation.
   * 
   * For details, see [TransitionEffect]{@link TransitionEffect}.
   * 
   * The menu animation uses a spring curve. Due to the rebound and oscillation of the spring curve during the exit of 
   * the animation, there is a prolonged tail effect, which prevents the menu from responding to other events after it 
   * disappears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Whether to respond when the device is in hover mode (semi-folded state), that is, whether it triggers avoidance of 
   * the crease area in hover mode.
   * 
   * Default value: **false** (**true** for 2-in-1 devices by default) If this parameter is not set or set to an invalid
   * value, the default value is used.
   * 
   * **NOTE**
   * 
   * 1. If the menu display position is within the crease area in hover mode, it will not respond in hover mode.
   * 2. This parameter is supported on 2-in-1 devices since API version 20.
   * 3. This parameter only takes effect in window waterfall mode for 2-in-1 devices.
   *
   * @default true for 2-in-1 devices and false for other devices
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Outline color of the menu border.
   * 
   * **NOTE**
   * 
   * Default value: **'#19ffffff'**
   *
   * @default '#19ffffff'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineColor?: ResourceColor | EdgeColors;

  /**
   * Outline width of the menu border.
   * 
   * Default value: **0vp**
   * 
   * **NOTE**
   * 
   * Percentage values are not supported. **outlineWidth** is mandatory for customizing an outline effect.
   *
   * @default 0vp - Percentage values are not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension | EdgeOutlineWidths;

  /**
   * Define the menu theme color mode.
   *
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * Haptic feedback mode when the menu is displayed.
   * 
   * Default value: **HapticFeedbackMode.DISABLED**, indicating no vibration when the menu is displayed.
   * 
   * **NOTE**
   * 
   * The haptic feedback mode is only configurable for level-1 menus.
   * 
   * This parameter takes effect only when the user enables the haptic feedback function and the 
   * **ohos.permission.VIBRATE** permission is added to the **requestPermissions** field in the 
   * [module.json5](docroot://quick-start/module-configuration-file.md) file. The configuration is as follows:
   * 
   * ![menuEnableHapticFeedback](docroot://reference/apis-arkui/arkui-ts/figures/menuEnableHapticFeedback.png)
   *
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  hapticFeedbackMode?: HapticFeedbackMode;

  /**
   * Sets whether a menu has a mask and the mask style.
   * 
   * **true**: yes; **false**: no; **MenuMaskType**: custom mask style
   * 
   * Default value: If a preview image is displayed for a menu, a mask is displayed by default. Otherwise, no mask is 
   * displayed.
   * 
   * **NOTE**
   * 
   * This API does not take effect when the device is configured not to display the menu mask. For example, this API 
   * does not take effect on 2-in-1 devices.
   *
   * @default true when preview is enabled, or is false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  mask?: boolean | MenuMaskType;

  /**
   * Modal mode of a menu.
   * 
   * **NOTE**
   * 
   * Default value: **ModalMode.AUTO**
   *
   * @default ModalMode.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  modalMode?: ModalMode;

  /**
   * Callback invoked after the menu appears.
   * 
   * **NOTE**
   * 
   * 1. The normal sequence is **aboutToAppear** > **onWillAppear** > **onAppear** > **onDidAppear** > **aboutToDisappear** > **onWillDisappear** > **onDisappear** > **onDidDisappear**.
   * 2. If rapid clicks are triggered to display and then dismiss the menu, there may be cases where **onWillDisappear** is invoked before **onDidAppear**.
   * 3. If the menu is closed before the menu entrance animation is complete, this callback is not triggered.
   * 4. **onAppear** and **onDidAppear** are invoked at the same time, but **onDidAppear** takes effect after **onAppear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidAppear?: Callback<void>;

  /**
   * Callback invoked after the menu disappears.
   * 
   * **NOTE**
   * 
   * 1. The normal sequence is **aboutToAppear** > **onWillAppear** > **onAppear** > **onDidAppear** > **aboutToDisappear** > **onWillDisappear** > **onDisappear** > **onDidDisappear**.
   * 2. **onDisappear** and **onDidDisappear** are triggered at the same time, but **onDidDisappear** takes effect after **onDisappear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidDisappear?: Callback<void>;

  /**
   * Callback triggered when the menu is about to appear.
   * 
   * **NOTE**
   * 
   * 1. The normal sequence is **aboutToAppear** > **onWillAppear** > **onAppear** > **onDidAppear** > **aboutToDisappear** > **onWillDisappear** > **onDisappear** > **onDidDisappear**.
   * 2. **aboutToAppear** is invoked during initialization; **onWillAppear** is invoked before the animation starts but after **aboutToAppear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAppear?: Callback<void>;

  /**
   * Callback triggered when the menu is about to disappear.
   * 
   * **NOTE**
   * 
   * 1. The normal sequence is **aboutToAppear** > **onWillAppear** > **onAppear** > **onDidAppear** > **aboutToDisappear** > **onWillDisappear** > **onDisappear** > **onDidDisappear**.
   * 2. If rapid clicks are triggered to display and then dismiss the menu, there may be cases where **onWillDisappear** is invoked before **onDidAppear**.
   * 3. **aboutToDisappear** and **onWillDisappear** are invoked at the same time, but **onWillDisappear** takes effect after **aboutToDisappear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillDisappear?: Callback<void>;

  /**
   * Preview image scaling mode.
   * 
   * Default value: **PreviewScaleMode.AUTO**
   * 
   * **NOTE**
   * 
   * This parameter applies to the scenarios where the layout space is insufficient. If this parameter is not set or is 
   * set to **undefined**, the value **PreviewScaleMode.AUTO** will be used. When this parameter is set to 
   * **PreviewScaleMode.CONSTANT**, if the preview image is too large and the remaining space is insufficient for 
   * placing the menu, the menu is displayed under the preview image.
   * 
   * The maximum width and height of the preview image do not exceed the maximum available layout area of the preview 
   * image (the window size minus the safe margins on all sides).
   *
   * @default PreviewScaleMode.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  previewScaleMode?: PreviewScaleMode;

  /**
   * Available layout area of the preview image. The percentage of the preview image is calculated based on this 
   * setting. The preview image may be compressed or cropped due to the safe area restriction.
   * 
   * **NOTE**
   * 
   * If this parameter is not set or is set to **undefined**, the percentage is calculated based on the window size. If 
   * this parameter is set to **AvailableLayoutArea.SAFE_AREA**, the available layout area of the preview image is the 
   * window size minus the safe margins on all sides.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  availableLayoutArea?: AvailableLayoutArea;

  /**
   * Display position of the menu relative to the upper left corner of the bound component by setting the horizontal and
   * vertical offsets. Unlike using the **offset** API alone, this allows the menu to overlay the bound component.
   * 
   * Default value: **{ x: undefined, y: undefined }**. Percentage values are not supported.
   * 
   * **NOTE**
   * 
   * 1. Offsets do not apply during menu preview state.
   * 2. The preset value of **placement** does not take effect.
   * 3. The **offset** parameter is added to determine the exact display position of the menu.
   * 4. When both horizontal and vertical offsets are set to negative values, the menu is reset to **Placement.BottomLeft** for display.
   * 5. If the horizontal or vertical offset is **undefined** or **null**, the effect is the same as that of not setting **anchorPosition**. In this case, the preset value of **placement** can take effect.
   *
   * @default { x: 0, y: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  anchorPosition?: Position;

  /**
   * Whether the menu avoids the soft keyboard.
   * 
   * **NOTE**
   * 
   * If this parameter is not set or is set to **undefined**, the value **MenuKeyboardAvoidMode.NONE** will be used.
   *
   * @default MenuKeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  keyboardAvoidMode?: MenuKeyboardAvoidMode;

  /**
   * Minimum distance for the menu to avoid the soft keyboard.
   * 
   * **NOTE**
   * 
   * If this parameter is not set, or set to a negative value or **undefined**, the value will be treated as 8 vp. This 
   * API is valid only when **keyboardAvoidMode** is set to avoid the soft keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minKeyboardAvoidDistance?: LengthMetrics;

  /**
 	 * Sets the space between the menu and target.
 	 * When both targetSpace and offset are set, they take effect additively. It is recommended to use targetSpace
 	 * to set the space between the menu and target, and use offset for additional offset.
 	 *
 	 * @type { ?LengthMetrics }
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @crossplatform
 	 * @atomicservice
 	 * @since 26.0.0 dynamic
 	 */
 	targetSpace?: LengthMetrics;

  /**
   * Set system-styled materials for menu. The material effect behaves differently on devices with different
   * level of computing powers. On devices with lower computing power, it affects attributes such as the
   * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect
   * at the system material layer, which can produce an effect similar to glass.
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 23 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * Defines the scroll bar state of menu.
   *
   * @default BarState.Auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
   scrollBar?: BarState;
   /**
   * Defines the max height of menu.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxHeight?: LengthMetrics;
  /**
   * Sets the distortion animation Mode of the menu.
   * 
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * Sets the edgeLight animation Mode of the menu.
   *
   * @default EdgeLightMode.EDGELIGHT_DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
  /**
   * Define the grid style of menu. Only fixed-style menus are effective.
   * For example, using MenuElement in bindMenu/bindContextMenu or using MenuItemOptions in MenuItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  gridStyle?: MenuGridStyleOptions;
}

/**
 * Configues menu item information, which is inherited from [ContextMenuOptions]{@link ContextMenuOptions}.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface MenuOptions extends ContextMenuOptions {
  /**
   * Menu title.
   * 
   * **NOTE**
   * 
   * This parameter is effective only when **content** is set to Array<[MenuElement]{@link MenuElement}>.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title?: ResourceStr;

  /**
   * Whether to show the menu in a subwindow.
   * 
   * **true**: yes; **false**: no
   * 
   * Default value: **true** for 2-in-1 devices and **false** for other devices
   * 
   * **NOTE**
   * 
   * This parameter takes effect only for 2-in-1 devices.
   *
   * @type { ?boolean }
   * @default true for 2-in-1 devices [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showInSubWindow?: boolean;
}

/**
 * Sets the progress, maximum value, and color for a mask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class ProgressMask {
  /**
   * Constructs a **ProgressMask** object.
   *
   * @param { number } value - Current value of the progress mask.<br> Value range: [0.0, +∞)
   * @param { number } total - Maximum value of the progress mask.<br> Value range: [0.0, +∞)
   * @param { ResourceColor } color - Color of the progress mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(value: number, total: number, color: ResourceColor);

  /**
   * Updates the progress value of the progress mask.
   *
   * @param { number } value - Current value of the progress mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updateProgress(value: number): void;

  /**
   * Updates the color of the progress mask.
   *
   * @param { ResourceColor } value - Color of the progress mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updateColor(value: ResourceColor): void;

  /**
   * Sets whether to enable the breathing animation when the progress indicator is full. If this API is not set, the 
   * breathing animation is disabled by default.
   *
   * @param { boolean } value - Whether to enable the breathing animation.<br>**true**: The breathing animation is
   *     enabled.<br>**false**: The breathing halo animation is disabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableBreathingAnimation(value: boolean): void;
}

/**
 * Provides information about the coordinate system, ID, and size of the component where the current touch point is
 * located.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class TouchTestInfo {

  /**
   * X-coordinate of the touch point relative to the upper left corner of the window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  windowX: number;

  /**
   * Y-coordinate of the touch point relative to the upper left corner of the window.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  windowY: number;

  /**
   * X-coordinate of the touch point relative to the upper left corner of the parent component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  parentX: number;

  /**
   * Y-coordinate of the touch point relative to the upper left corner of the parent component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  parentY: number;

  /**
   * X-coordinate of the touch point relative to the upper left corner of the child component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y-coordinate of the touch point relative to the upper left corner of the child component.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;

  /**
   * Position, width, and height of the child component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  rect: RectResult;

  /**
   * Unique ID of the child component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id: string;
}

/**
 * Defines the custom event dispatch result. You can influence event dispatch by returning specific results.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class TouchResult {

  /**
   * Event dispatch strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  strategy: TouchTestStrategy;

  /**
   * Unique ID of the child component.
   *
   * If **strategy** is set to **TouchTestStrategy.DEFAULT**, **id** is optional. If **strategy** is set to
   * **TouchTestStrategy.FORWARD_COMPETITION** or **TouchTestStrategy.FORWARD**, **id** is mandatory. If **id** is not
   * returned, the strategy **TouchTestStrategy.DEFAULT** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id?: string;
}

/**
 * 3D vector in depth space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthVector3 {
  /**
   * X component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Y component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * Z component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  z: double;
}

/**
 * 4D vector in depth space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthVector4 {
  /**
   * X component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Y component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * Z component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  z: double;

  /**
   * W component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  w: double;
}

/**
 * RGB color in depth space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthColorRGB {
  /**
   * Red component (0-255).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  red: int;

  /**
   * Green component (0-255).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  green: int;

  /**
   * Blue component (0-255).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  blue: int;
}

/**
 * Spatial corner positions in 3D space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface SpatialPosition {
  /**
   * Left-top corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  leftTop: DepthVector3;

  /**
   * Right-top corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rightTop: DepthVector3;

  /**
   * Left-bottom corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  leftBottom: DepthVector3;

  /**
   * Right-bottom corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rightBottom: DepthVector3;
}

/**
 * Spatial effect params.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface SpatialEffectParams {
  /**
   * Spatial position defined by corner points or depth value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  position: SpatialPosition | double;

  /**
   * Occlusion weight for spatial effect.
   * <br>Value range:[0, 1].Default value:0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  occlusionWeight?: double;
}

/**
 * Describes the pixel stretch effect options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface PixelStretchEffectOptions {
  /**
   * Length by which a pixel is stretched towards the top edge of the image.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  top?: Length;

  /**
   * Length by which a pixel is stretched towards the right edge of the image.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bottom?: Length;

  /**
   * Length by which a pixel is stretched towards the left edge of the image.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  left?: Length;

  /**
   * Length by which a pixel is stretched towards the right edge of the image.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  right?: Length;
}

/**
 * Defines the click effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ClickEffect {
  /**
   * Click feedback effect of the component.
   * 
   * Default value: **ClickEffectLevel.LIGHT**
   * 
   * **NOTE**
   * 
   * When **level** is **undefined** or **null**, **ClickEffect** uses the effect corresponding to 
   * **ClickEffectLevel.LIGHT** with a scaling ratio as described below.
   *
   * @default ClickEffectLevel.LIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  level: ClickEffectLevel;

  /**
   * Custom scaling ratio for fine-tuning the click feedback effect.
   * 
   * **NOTE**
   * 
   * The default value varies depending on the value of **level**:
   * 
   * **ClickEffectLevel.LIGHT**: **0.90**
   * 
   * **ClickEffectLevel.MIDDLE** or **ClickEffectLevel.HEAVY**: **0.95**
   * 
   * **undefined** or **null** (treated as **ClickEffectLevel.LIGHT**): **0.90**
   * 
   * When **scale** is set to **undefined** or **null**, the default scaling ratio for the current **level** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scale?: number;
}

/**
 * Defines the fadingEdge options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface FadingEdgeOptions {
  /**
   * The length of FadingEdge.
   *
   * @default 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @since 10
 */
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface NestedScrollOptions {
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @since 10
   */
  /**
   * Set NestedScrollMode when the scrollable component scrolls backward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBackward: NestedScrollMode;
}

/**
 * Configures icon, text, and interaction information of a menu item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface MenuElement {
  /**
   * Menu item text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value: ResourceStr;

  /**
   * Menu item icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * Icon of a menu item. You can configure the menu item icon using **Modifier**. If both **symbolIcon** and **icon** 
   * are configured, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * Whether to enable interactions with the menu item.
   * 
   * **true**: yes; **false**: no
   * 
   * Default value: **true**.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enabled?: boolean;

  /**
   * Action triggered when a menu item is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  action: () => void;
}

/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the normal update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the pressed update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the focused update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the disabled update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the selected update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applySelectedAttribute?(instance: T) : void;

  /**
   * Defines the function that updates the hovered attribute.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  applyHoveredAttribute?(instance: T) : void;
}

/**
 * Defines the content modifier.
 *
 * @interface ContentModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ContentModifier<T> {

  /**
   * Defining applyContent function.
   *
   * @returns { WrappedBuilder<[T]> }
   * Component attribute class, which is used to distinguish different information required by different components
   * after content areas are customized, for example, ButtonConfiguration for the Button component and
   * CheckBoxConfiguration of the Checkbox component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyContent(): WrappedBuilder<[T]>;
}

/**
 * You need a custom class to implement the **ContentModifier** API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CommonConfiguration<T> {

  /**
   * Whether to enable the content modifier and respond to operations such as **triggerChange**. The value **true** 
   * means to enable the content modifier and respond to operations such as **triggerChange**, and **false** means the 
   * opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enabled: boolean,

  /**
   * Content modifier that sends the component information required by users to the custom content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier: ContentModifier<T>;
}

/**
 * Enumerates outline styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum OutlineStyle {
  /**
   * Solid border.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SOLID = 0,

  /**
   * Dashed border.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DASHED = 1,

  /**
   * Dotted border. The radius of a dot is half of **outlineWidth**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DOTTED = 2
}

/**
 * Sets the display mode of the drag preview.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum DragPreviewMode {

  /**
   * Enables the system to automatically change the position of the dragged point based on the scenario and apply
   * scaling transformations to the drag preview based on set rules.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  AUTO = 1,

  /**
   * Disables the system's scaling behavior for the drag preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DISABLE_SCALE = 2,

  /**
   * Enables the default shadow effect for non-text components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  ENABLE_DEFAULT_SHADOW = 3,

  /**
   * Enables a unified rounded corner effect for non-text components, with the default value of 12 vp. If the custom
   * rounded corner value set by the application is greater than the default value or the value set by **modifier**, the
   * custom value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  ENABLE_DEFAULT_RADIUS = 4,

  /**
   * Enables the grayscale effect for the original drag item, which does not apply to text content dragging. When the
   * user starts dragging, the original item displays a grayscale effect. When released, the original item returns to
   * its original appearance. After enabling the default grayscale effect, avoid manually modifying the opacity after
   * dragging starts. Otherwise, the grayscale effect will be overridden, and the original opacity will not be correctly
   * restored when dragging ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,

  /**
   * Enables multi-tile display for mouse-dragged multi-selected objects, with each drag preview maintaining its
   * original relative position. Requires multi-select mode with **isMultiSelectionEnabled** set to **true**. Takes
   * precedence over [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}. Does
   * not support secondary dragging, rounded corners, or scaling effects.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_MULTI_TILE_EFFECT = 6,

  /**
   * Enables touch point calculation based on the initial drag preview size. Used when the floating image differs from
   * the drag preview. Incompatible with mouse dragging and **DragPreviewMode.ENABLE_MULTI_TILE_EFFECT**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
}

/**
 * Enumerates the transition effects for switching between the floating image (set through
 * [bindContextMenu]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
 * ) and the drag preview when both are configured on a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum DraggingSizeChangeEffect {

  /**
   * Direct transition from the menu preview to the final drag preview image upon drag initiation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  DEFAULT = 0,

  /**
   * Smooth size transition from the menu preview to the final drag preview. Disabled when **DISABLE_SCALE** is set in
   * [DragPreviewMode]{@link DragPreviewMode}. Used when the floating preview matches the drag preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  SIZE_TRANSITION = 1,

  /**
   * Gradual transition from the menu preview to the final drag preview with opacity and size animations. Disabled when
   * **DISABLE_SCALE** is set in [DragPreviewMode]{@link DragPreviewMode}. Suitable for significant visual differences
   * between preview images.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  SIZE_CONTENT_TRANSITION = 2
}

/**
 * Enumerates menu display policies.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MenuPolicy {
  /**
   * Whether the menu is displayed depends on the underlying default logic.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * The menu is always hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HIDE = 1,

  /**
   * The menu is always displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SHOW = 2
}

/**
 * ImageModifier
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ImageModifier = import('../api/arkui/ImageModifier').ImageModifier;

/**
 * Defines custom icon symbol configurations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare type SymbolGlyphModifier = import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier;

/**
 * Preview image processing mode and badge count during dragging.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface DragPreviewOptions {

  /**
   * How the background image is processed when the component is dragged.
   *
   * Default value: **DragPreviewMode.AUTO**
   *
   * If **DragPreviewMode.AUTO** is set concurrently with other enumerated values, **DragPreviewMode.AUTO** takes
   * precedence and the other values are ignored.
   *
   * @type { ?DragPreviewMode } [since 11 - 11]
   * @type { ?(DragPreviewMode | Array<DragPreviewMode>) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  mode?: DragPreviewMode | Array<DragPreviewMode>;

  /**
   * Drag preview style modifier. It applies image component attributes and styles to configure preview appearance (see
   * Example 6). Supported effects: opacity, shadow, background blur, and rounded corners. Text drag previews only
   * support default styling.
   *
   * 1. Opacity
   *
   * Use [opacity](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-opacity.md#opacity). The value ranges
   * from 0 to 1. If this parameter is set to **0** or left empty, the default opacity 0.95 is used. If this parameter
   * is set to **1** or an abnormal value, the opacity is 1.
   *
   * 2. Shadow
   *
   * Use [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}.
   *
   * 3. Background blur
   *
   * Use [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)} or
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}.
   * If both are set, the latter setting takes precedence.
   *
   * 4. Rounded corners
   *
   * Use [border](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#border) or
   * [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}. Modifier
   * settings override mode settings.
   *
   * Default value: empty (unmodifiable).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @noninterop
   * @since 12 dynamic
   */
  modifier?: ImageModifier;

  /**
   * Whether to display the number badge or the number displayed on the badge. For a number badge, the value range is
   * [0, 2<sup>31</sup>-1]. Values outside this range will be processed as the default state. If the value specified is
   * a floating-point number, only the integer part is displayed.
   *
   * **NOTE**
   *
   * When multiple items are dragged, use this API to set the number of items dragged.
   *
   * Default value: **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  numberBadge?: boolean | number;

  /**
   * Transition effect between the floating image and drag preview.
   *
   * Default value: **DraggingSizeChangeEffect.DEFAULT**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  sizeChangeEffect?: DraggingSizeChangeEffect;
}

/**
 * Interaction behavior for the floating preview image
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DragInteractionOptions {

  /**
   * Whether to enable multi-select clustering during drag operations. **true** to enable, **false** otherwise. This
   * parameter takes effect only for the [grid items]{@link ./gridItem} and [list items]{@link ./list_item} in the
   * [Grid]{@link ./grid} and [List]{@link ./list} containers.
   *
   * When this feature is enabled, child components cannot be dragged individually. Preview priority: string in
   * [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)} > PixelMap in
   * **dragPreview** > component snapshot. Builder previews not supported.
   *
   * This parameter is incompatible with bindContextMenu](ts-universal-attributes-menu.md#bindcontextmenu12) using
   * **isShown** parameter.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isMultiSelectionEnabled?: boolean;

  /**
   * Whether to enable the default press animation (scale-down) during long-press lift phase. **true** to enable,
   * **false** otherwise.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  defaultAnimationBeforeLifting?: boolean;

  /**
   * Whether to enable haptic feedback during dragging.
   *
   * **true**: Enable haptic feedback during dragging.
   *
   * **false**: Disable haptic feedback during dragging. This parameter is effective only for previews with masks (
   * configured using
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
   * ).
   *
   * Note: The settings take effect only when the application has the **ohos.permission.VIBRATE** permission and the
   * user has enabled haptic feedback.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * Whether to trigger automatic scrolling when users drag to the edges of a scrollable container.
   *
   * **true**: Trigger automatic scrolling.
   *
   * **false**: Do not trigger automatic scrolling.
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableEdgeAutoScroll?: boolean;

  /**
   * Whether to disable the lift animation effect during dragging.
   *
   * **true**: Disable the lifting effect during dragging.
   *
   * **false**: Enable the lifting effect during dragging.
   *
   * With the value **true**, only the custom menu preview (set using
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   * ), also known as the long-press preview, is displayed if both the long-press preview and drag preview are
   * configured.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  isLiftingDisabled?: boolean;
}

/**
 * Configures the style of the preview image during custom drag operations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface PreviewConfiguration {

  /**
   * Whether the custom preview image is used only for lifting.
   *
   * **NOTE**
   *
   * The default value is **false**. **true**: The custom preview image is used only for lifting. **false**: The custom
   * preview image is used for both lifting and dragging. When the value is set to **true**, the preview image is used
   * only during the lifting phase of a long press. For the preview image used during the dragging phase: The
   * [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)} attribute is ignored,
   * and the system prioritizes the image returned in [onDragStart]{@link CommonMethod#onDragStart}; if no image is
   * returned in **onDragStart**, the component's snapshot is used.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onlyForLifting?: boolean;

  /**
   * Whether the preview builder is loaded at the time of setting.
   *
   * The default value is **false**. The value **true** means that the preview builder is loaded at the time of setting,
   * and **false** means the opposite.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  delayCreating?: boolean;
}

/**
 * Describes the options for inverting the foreground color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface InvertOptions {

  /**
   * Value when the background color is greater than the grayscale threshold.
   * 
   * Value range: [0, 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  low: number;

  /**
   * Value when the background color is less than the grayscale threshold.
   * 
   * Value range: [0, 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  high: number;

  /**
   * Grayscale threshold.
   * 
   * Value range: [0, 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  threshold: number;

  /**
   * Threshold value range.
   * 
   * Value range: [0, 1].
   * 
   * **NOTE**
   * 
   * This range defines the upper and lower bounds of the grayscale threshold. The grayscale value changes linearly from
   * high to low within the range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  thresholdRange: number;
}

/**
 * Defines the CircleShape type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type CircleShape = import('../api/@ohos.arkui.shape').CircleShape;

/**
 * Defines the EllipseShape type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type EllipseShape = import('../api/@ohos.arkui.shape').EllipseShape;

/**
 * Defines the PathShape type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type PathShape = import('../api/@ohos.arkui.shape').PathShape;

/**
 * Defines the RectShape type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type RectShape = import('../api/@ohos.arkui.shape').RectShape;

/**
 * Defines the Optional type. The value can be **undefined**.
 *
 * @unionmember { T } The object can be of any custom type.
 * @unionmember { undefined } The object can be **undefined**.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type Optional<T> = T | undefined;

/**
 * Provides information about the tooltip.
 *
 * @unionmember { ResourceStr } Type used to represent the types that can be used by input parameters of the string
 *     type.
 * @unionmember { StyledString } Styled string.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type TipsMessageType = ResourceStr | StyledString;

/**
 * Import the Matrix4Transit type object for common method.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type Matrix4Transit = import('../api/@ohos.matrix4').default.Matrix4Transit;

/**
 * Base class for system material objects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @crossplatform [since 26.0.0]
 * @form
 * @atomicservice [since 26.0.0]
 * @since 23 dynamic
 */
declare type SystemUiMaterial = import('../api/@ohos.arkui.uiMaterial').default.Material;

/**
 * Define the options for background image.
 *
 * @interface BackgroundImageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  syncLoad?: boolean;
  /**
   * Set the repeat style of the background image.
   *
   * @param { ImageRepeat } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Set the alignment of the custom background and component.
   *
   * @type { ?Alignment} align
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  align?: Alignment;
  /**
   * The set of edges for which to ignore layout safe area. To respect safe area insets on all edges, explicitly pass 
   * empty edge set.
   *
   * @default The default value is LayoutSafeAreaEdge.ALL when background is ResourceColor, otherwise it is an empty
   *     array [].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  ignoresLayoutSafeAreaEdges?: Array<LayoutSafeAreaEdge>;
}

/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare class CommonMethod<T> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form
   * @since 9 dynamic
   */
  constructor();

  /**
   * Sets the width of the component. By default, the width required to fully hold the component content is
   * used. If a component is wider than its parent, it will overflow.
   * <br>Since API version 10, this API supports the calc calculation feature.
   *
   * @param { Length } value - Width of the component to set.<br>Unit: vp
   *     >  **NOTE**
   *     >
   *     >  - In the [TextInput](@link TextInput) component, setting **width** to **auto** means that
   *     >    the width adapts to the width of the text content.
   *     >
   *     >  - In the [AlphabetIndexer](@link AlphabetIndexer) component, setting **width** to **auto**
   *     >    means that the width adapts to the maximum width of index entries.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width(value: Length): T;
  /**
   * Sets the width of the component or its horizontal layout policy. By default, the component uses the width required
   * for its content. If a component is wider than its parent, it will overflow.
   *
   * @param { Length | LayoutPolicy } widthValue - Width of the component to set
   *     <br>Unit: vp.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  width(widthValue: Length | LayoutPolicy): T;

  /**
   * Sets the height of the component. By default, the height required to fully hold the component content
   * is used. If a component is higher than its parent, it will overflow.
   * <br>Since API version 10, this API supports the calc calculation feature.
   *
   * @param { Length } value - Height of the component to set.<br>Unit: vp
   *     >  **NOTE**
   *     >
   *     >  In the [Row](@link Row), [Column](@link Column), and [RelativeContainer](@link RelativeContainer)
   *     components, setting **width** and **height** to **auto** means that the size adapts to the size of their
   *     child components.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height(value: Length): T;
  /**
   * Sets the height of the component or its vertical layout policy. By default, the
   * component uses the height required for its content. If a component is higher than
   * its parent, it will overflow.
   *
   * @param { Length | LayoutPolicy } heightValue - Height of the component to set.
   *     <br>Unit: vp.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   *     Default value: undefined
   *     A custom modifier applies only to the FrameNode of the currently bound component, not to its subnodes.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawModifier(modifier: DrawModifier | undefined): T;

  /**
   * Sets a custom property for this component.
   *
   * In versions earlier than API 26.0.0,
   * [custom components](docroot://ui/state-management/arkts-create-custom-components.md) do not support custom
   * properties.
   *
   * Since API 26.0.0, custom components support setting and reading custom properties.
   *
   * @param { string } name - Name of the custom property.
   * @param { Optional<Object> } value - Value of the custom property.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  customProperty(name: string, value: Optional<Object>): T;

  /**
   * Expands the safe area.
   *
   * > **NOTE**
   * >
   * > - When using **expandSafeArea** to expand the drawing of a component, avoid setting fixed width and height values
   * > (except percentages). If fixed width and height values are set (including **'auto'**), the edges for expanding
   * the
   * > safe area can only be **[SafeAreaEdge.TOP, SafeAreaEdge.START]**, and the size of the component remains unchanged
   * > after safe area expansion.
   * >
   * > - The safe area does not restrict the layout or size of components inside, nor does it clip the components.
   * >
   * > - If the parent container is a scrollable container, the component does not extend after the **expandSafeArea**
   * > attribute is set, but it can still trigger updates to the extension range of its child nodes that have
   * > **expandSafeArea** set.
   * >
   * > - When **expandSafeArea()** is set without parameters, default values are applied. When **expandSafeArea([],[])**
   * > is used with empty arrays, the setting has no effect.
   * >
   * > - Prerequisites for the **expandSafeArea** attribute to take effect:
   * >   1. When **type** is set to **SafeAreaType.KEYBOARD**, the settings take effect by default. This behaves as the
   * >      component not avoiding the virtual keyboard.
   * >   2. When **type** is set to any other value, the settings take effect only if its boundaries overlap with the
   * >      safe area. For example, if the height of the status bar is 100, the absolute position of the component on
   * the
   * >      screen must be 0 <= y <= 100 for the settings to take effect.
   * >
   * > - When a component extends into a non-safe area, events in the non-safe area (such as click events) may be
   * > intercepted by the system. Built-in components like the status bar will be given priority to respond to these
   * > events.
   * >
   * > - Avoid setting the **expandSafeArea** attribute for components within scrollable containers. If you do set it,
   * > you must apply the **expandSafeArea** attribute to all direct nodes from the current node to the scrollable
   * > ancestor container, following the component nesting relationship. Otherwise, the **expandSafeArea** attribute may
   * > become ineffective after scrolling.
   * >
   * > - The **expandSafeArea** attribute only affects the current component and does not propagate to parent or child
   * > components. Therefore, all relevant components must be configured individually.
   * >
   * > - When both **expandSafeArea** and **position** attributes are set, the **position** attribute takes effect
   * first,
   * > followed by the **expandSafeArea** attribute. For components that do not have **position**, **offset**, or other
   * > rendering attributes set, such as dialog boxes and sheets, the **expandSafeArea** attribute will not take effect
   * if
   * > their boundaries do not overlap with the non-safe area.
   * >
   * > - In scenarios where the **expandSafeArea** attribute is ineffective, and you need to place a component in the
   * > safe area, you will need to manually adjust the component's coordinates.
   *
   * @param { Array<SafeAreaType> } types - Types of non-safe areas to extend into. For the CUTOUT type to take effect,
   *     the Metadata item must be added to the configuration file.
   *     <br>Default value: [SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD].
   *     <br>Invalid values are treated as the default value.
   * @param { Array<SafeAreaEdge> } edges - Edges for expanding the safe area.
   *     <br>Default value: [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END].
   *     <br>Invalid values are treated as the default value. The default value means to extend to all non-safe areas.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T;

  /**
   * Ignores the safe area for component layout.
   *
   * > **NOTE**
   * >
   * > - For a component that ignores layout safe area edges: If its width or height is set to
   * > [LayoutPolicy.matchParent]{@link LayoutPolicy.matchParent}, both its size and position
   * > will change; otherwise, only its position will change.
   * >
   * > - Based on the **safeAreaPadding** accumulation feature, a component can expand its safe area edges to all
   * > detectable continuous safe areas.
   * >
   * > - When child elements of scrollable components ignore layout safe area edges, the safe areas of the scrollable
   * > component itself and its parent components are not considered in the scrolling direction. Scrollable components
   * > include **List**, **ArcListItem**, **Grid**, **WaterFlow**, **Swiper**, and **Tabs**.
   * >
   * > - When both the layout safe area ignore attribute (**.ignoreLayoutSafeArea**) and the rendering safe area ignore
   * > attribute (**.expandSafeArea**) are set: **.ignoreLayoutSafeArea** takes effect first, and **.expandSafeArea**
   * > takes effect on the basis of the former.
   *
   * @param { Array<LayoutSafeAreaType> } [types] - Types of layout safe areas to expand.<br>Default value:
   *     [LayoutSafeAreaType.SYSTEM] (expands to all safe areas, including the status bar, navigation bar, and
   *     component-level safe area (safeAreaPadding)). navigation bar, and component-level safe area<br>Invalid values are
   *     treated as the default value.
   * @param { Array<LayoutSafeAreaEdge> } [edges] - Edges of the layout safe area to expand, with mirroring capability
   *     supported.<br>Default value: [LayoutSafeAreaEdge.ALL] (expands all edges of the component).<br>Invalid values are
   *     treated as the default value.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T;

  /**
   * Sets one or more touch targets.
   *
   * @param { Array<Rectangle> | Rectangle } value - Touch target, including the position and size.<br>The default touch
   *     target is the entire component. Default value:<br>{<br>x: 0,<br>y: 0,<br>width: '100%',<br>height: '100%'<br>}<br>
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  responseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * Sets one or more mouse response regions.
   *
   * @param { Array<Rectangle> | Rectangle } value - Mouse response regions, defining the position and size.<br>The
   *     default touch target is the entire component. Default value:<br>{<br>x: 0,<br>y: 0,<br>width: '100%',<br>
   *     height: '100%'<br>}
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mouseResponseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * Sets the touch target list for the component. When this API is called, the
   * [responseRegion]{@link CommonMethod#responseRegion} and
   * [mouseResponseRegion]{@link CommonMethod#mouseResponseRegion} APIs do not take effect.
   *
   * @param { Array<ResponseRegion> } regions - Array of touch targets for the component.<br>Each touch target contains
   *     the input tool type, position, and size.<br>Default value:<br>
   *     [{<br>tool: ResponseRegionSupportedTool.ALL,<br>x: LengthMetrics.vp(0),<br>y: LengthMetrics.vp(0),
   *     <br>width: LengthMetrics.percent(1),<br>height: LengthMetrics.percent(1)<br>}]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  responseRegionList(regions: Array<ResponseRegion>): T;

  /**
   * Sets the width and height of the component.
   * <br>Since API version 10, this API supports the calc calculation feature.
   *
   * @param { SizeOptions } value - The [SizeOptions]{@link SizeOptions} type is used to set the width and
   *     height.<br>Exception handling: If the parameter is **undefined**, the attribute setting does not take
   *     effect. For other invalid values, the **size** attribute reverts to its default behavior when
   *     unconfigured.<br>Unit: vp
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  size(value: SizeOptions): T;

  /**
   * Sets the constraint size of the component, which is used to limit the size range during component layout.
   * <br>Since API version 10, this API supports the calc calculation feature.
   *
   * **Impact of constraintSize(minWidth/maxWidth/minHeight/maxHeight) on width/height**
   * | Default Value                                     | Result                                      |
   * | ---------------------------------------- | ---------------------------------------- |
   * | \ | width=MAX(minWidth,MIN(maxWidth,width))<br>height=MAX(minHeight,MIN(maxHeight,height)) |
   * | maxWidth, maxHeight| width=MAX(minWidth,width)<br>height=MAX(minHeight,height)
   * | minWidth, minHeight| width=MIN(maxWidth,width)<br>height=MIN(maxHeight,height) |
   * | width, height| If minWidth < maxWidth, the layout logic of the component takes effect, and the value range of
   * **width** is [minWidth, maxWidth]. Otherwise, width = MAX(minWidth, maxWidth).<br>If minHeight < maxHeight,
   * the layout logic of the component takes effect, and the value range of **height** is [minHeight, maxHeight].
   * Otherwise, height = MAX (minHeight, maxHeight).|
   * | width and maxWidth; height and maxHeight| width = minWidth<br>height = minHeight |
   * | width and minWidth; and height and minHeight| The layout logic of the component takes effect, and the value of
   * **width** cannot be greater than that of **maxWidth**.<br>The layout logic of the component takes effect, and the
   * value of **height** cannot be greater than that of **maxHeight**.|
   * | minWidth and maxWidth; minHeight and maxHeight| The width of the component is initially determined by the value
   * of **width**, and it may be adjusted based on other layout attributes.<br>The height of the component is initially
   * determined by the value of **height**, and it may be adjusted based on other layout attributes.|
   * | width, minWidth, and maxWidth| The layout restrictions passed by the parent container are used for layout.|
   * | height, minHeight, and maxHeight| The layout restrictions passed by the parent container are used for layout.|
   *
   * @param { ConstraintSizeOptions } value - Constraint size of the component to set.
   *     **constraintSize** takes precedence over **width** and **height**.
   *     <br>
   *     Default value: {minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity}
   *     <br>Exception handling: For strings beginning with numerals, only the numeric part is parsed.
   *     Strings not beginning with numerals are parsed as 0. For other invalid values, the
   *     **constraintSize** attribute reverts to its default behavior when unconfigured.
   *     <br>Unit: vp.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constraintSize(value: ConstraintSizeOptions): T;

  /**
   * Whether the component can respond to finger interactions such as click and touch events.
   *
   * @param { boolean } value - Whether the component can respond to finger interactions such as click and touch events.
   *     <br>**true** (default): The component can respond to finger interactions. **false**: The component cannot
   *     respond to finger interactions.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead hitTestBehavior
   */
  touchable(value: boolean): T;

  /**
   * Sets the hit test mode for a component. If **hitTestBehavior** is not set, the component defaults to
   * **HitTestMode.Default**.
   *
   * @param { HitTestMode } value - Hit test mode for a component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  hitTestBehavior(value: HitTestMode): T;

  /**
   * Allows the current component to customize the hit test and control child component behavior during the test by
   * setting a callback.
   *
   * > **NOTE**
   * >
   * > - The array of child node information only includes information about named nodes, that is, nodes for which the
   * > **id** attribute is explicitly set.
   * >
   * > - This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } event - Touch event information. **value**: array of child node information.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T;

  /**
   * Sets the weight of the component during layout. A component with this attribute is allocated space
   * along the main axis of its parent container ([Row]{@link Row}, [Column]{@link Column}, or [Flex]{@link Flex} based
   * on its specified weight.
   *
   * @param { number | string } value - Layout weight of the component.
   *     <br>When the parent container size is determined:
   *     <br>Elements without **layoutWeight** or with **layoutWeight** set to **0** take precedence in
   *     occupying space.
   *     <br>The remaining space on the main axis is then allocated proportionally among elements with a
   *     **layoutWeight** value greater than 0, ignoring their own size settings.
   *     <br>Default value: **0**
   *     <br>**NOTE**
   *     <br>This parameter is only effective in
   *     [Row]{@link Row}, [Column]{@link Column}, and [Flex]{@link Flex} container components.
   *     <br>The value can be a number greater than or equal to 0 or a string that can be converted to a
   *     number.
   *     <br>If any child component in a container has the **layoutWeight** attribute set to a value greater
   *     than 0, then child components will no longer be laid out based on
   *     [flexShrink]{@link flexShrink} and [flexGrow]{@link flexGrow}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  layoutWeight(value: number | string): T;

  /**
   * Sets the weight of the component in a chain, which is used to re-lay out components that form the chain. This
   * attribute takes effect only when the parent container is
   * [RelativeContainer]{@link RelativeContainer}.
   *
   * **NOTE**
   *
   * Since API version 23, dynamic configuration via [attributeModifier]{@link CommonMethod#attributeModifier} is
   * supported
   *
   * @param { ChainWeightOptions } chainWeight - Layout weight of the component in the horizontal or vertical direction.
   *     The component with **chainWeight** set will have its size in the horizontal or vertical direction allocated
   *     according to the set weights. The allocation ignores the component's intrinsic size and enables the component
   *     to adaptively fill the remaining space.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  chainWeight(chainWeight: ChainWeightOptions): T;

  /**
   * Sets the padding of the component.
   * <br>Since API version 10, this API supports the calc calculation feature.
   *
   * @param { Padding | Length } value - [since 7 - 11]
   * @param { Padding | Length | LocalizedPadding } value - Padding of the component to set
   *     <br>
   *     When the parameter is of the **Length** type, the four paddings take effect.
   *     <br>Default value: **0**
   *     <br>Unit: vp
   *     <br>When **padding** is set to a percentage, the width of the parent container is used as the
   *     basic value. [since 12].
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  padding(value: Padding | Length | LocalizedPadding): T;

  /**
   * Sets the safe area padding. This allows the container to add a component-level safe area for its child
   * components to extend into. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * > **NOTE**
   * > In API version 18, this API can be invoked in attributeModifier.
   * > When parent and ancestor containers define component-level safe areas, child components can detect and utilize
   * > these areas, referred to as Accumulated Safe Area Expansion (SAE), which represents the maximum extendable length
   * > in each direction.
   * > When ancestor containers have contiguous safeAreaPadding (undivided by margin, border, or padding),
   * > SAE accumulates recursively outward until no adjacent outer safeAreaPadding exists or the recursion extends
   * > beyond the page container.
   * > System-level avoid areas (status bar, navigation bar, notch areas, and more) are treated as the page container's
   * > inherent safeAreaPadding and participate in SAE calculations.
   * > For details about the avoid areas, see Safe Area. These component-level safe areas can be leveraged by combining
   * > with other attributes.
   * > For example, setting the ignoreLayoutSafeArea attribute on a child component allows it to extend its layout into
   * > the SAE region.
   *
   * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Safe area padding.
   *     <br>Unit: vp. Default value: **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   */
  safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T;

  /**
   * Sets the margin of the component. The margin is considered as a part of the component's size during
   * position calculation, thereby affecting the component's placement.
   * <br>Since API version 10, this API supports the calc calculation feature.
   *
   * @param { Margin | Length } value - [since 7 - 11]
   * @param { Margin | Length | LocalizedMargin } value - Margin of the component to set.
   *     <br>When the parameter is of the **Length** type, the four margins take effect.
   *     <br>Default value: **0**
   *     <br>Unit: vp
   *     <br>When **margin** is set to a percentage, the width of the parent container is used as the
   *     basic value. When child components are laid out along the cross axis of the
   *     [Row]{@link Row}, [Column]{@link Column}, or [Flex]{@link Flex} container, the cross axis
   *     size of the child components and the margins add up to the total size of the container.
   *     <br>For example, if the width of the **Column** container is 100, the width of the child component
   *     is 50, the left margin is 10, and the right margin is 20, then the actual horizontal offset of
   *     the child component is 10. [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  margin(value: Margin | Length | LocalizedMargin): T;

  /**
   * Sets the background color of the component.
   *
   * @param { CustomBuilder } builder - Custom background.
   * @param { object } options - Alignment mode between the custom background and the component.
   *     <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
   *     <br>They will all take effect, with **background** at the top layer.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background color of the component.
   *
   * @param { CustomBuilder } builder - Custom background.
   * @param { object } options - Alignment mode between the custom background and the component.
   *     <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
   *     <br>They will all take effect, with **background** at the top layer.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Add a background for the component.
   *
   * Anonymous Object Rectification.
   * @param { CustomBuilder | ResourceColor } content
   * @param { BackgroundOptions } [options]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundColor(color: Optional<ResourceColor | ColorMetrics>): T;

  /**
   * Sets the pixel rounding policy for the current component in the specified direction.
   * If a direction is not set, the pixels are rounded to the nearest whole number in that direction.
   *
   * > **NOTE**
   * >
   * > - In API version 11, this API uses half-pixel alignment (that is, 0-0.25 rounds to 0, 0.25-0.75 rounds to 0.5,
   * > 0.75-1.0 rounds to 1). Since API version 12, this API rounds pixels to the nearest integers and allows you to
   * > disable pixel rounding for individual components.
   * >
   * > - This API can be called within
   * > [attributeModifier]{@link CommonMethod#attributeModifier}
   * > since API version 12.
   *
   * In normal calculations, the vertical direction (top and bottom) correspond to the component height, and the
   * horizontal direction (the starting direction of mirroring is considered "left") correspond to the component width.
   * For ease of description, these two sets of directions are referred to as top-left and bottom-right.
   *
   * - Calculate the top-left coordinates of the current component: offset of the top-left corner relative to the
   * parent container.
   * - Calculate the bottom-right coordinates of the current component: offset of the top-left corner relative to the
   * parent container plus the size of the component itself.
   * - Recalculate the size of the current component: bottom-right corner rounded value minus the top-left corner
   * rounded value.
   *
   * @param { PixelRoundPolicy } value - Rounding policy for the bounds of the component.
   *     <br>**NOTE**<br>
   *     This attribute is applicable in scenarios where artifacts occur due to floating-point drawing. The rounding
   *     result is related not only to the component's width and height but also to its position. Even if the
   *     component's width and height are set to be the same, due to different floating-point positions described,
   *     the final width and height of the component may also be different after rounding.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @param { BackgroundImageOptions } [options] - config the options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @param { SizeOptions | ImageSize } value - The width and height of the background image.
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
   * Defines the background material blur style. It encapsulates various blur radius, mask color, mask opacity, 
   * saturation, and brightness values through enum values.
   *
   * @param { BlurStyle } value - Settings of the background blur style, including the blur radius, mask color, mask
   *     opacity, saturation, and brightness.
   * @param { BackgroundBlurStyleOptions } options - Background blur options.<br>This parameter cannot be used in ArkTS
   *     widgets.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T;

  /**
   * Defines the background material blur style. It encapsulates various blur radius, mask color, mask opacity, 
   * saturation, and brightness values through enum values. Compared to 
   * [backgroundBlurStyle<sup>9+</sup>]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)},
   * the **style** parameter supports the **undefined** type.
   *
   * @param { Optional<BlurStyle> } style - Settings of the background blur style, including the blur radius, mask
   *     color, mask opacity, saturation, and brightness.<br>If **style** is **undefined**, the background blur reverts
   *     to its default state (that is, no blur).
   * @param { BackgroundBlurStyleOptions } [options] - Background blur options.<br>This parameter cannot be used in
   *     ArkTS widgets.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T;

  /**
   * Defines the background material blur style. It encapsulates various blur radius, mask color, mask opacity, 
   * saturation, and brightness values through enum values. Compared with 
   * [backgroundBlurStyle<sup>18+</sup>]{@link CommonMethod#backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions)},
   * this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.
   *
   * @param { Optional<BlurStyle> } style - Settings of the background blur style, including the blur radius, mask
   *     color, mask opacity, saturation, and brightness.<br>If **style** is **undefined**, the background blur reverts
   *     to its default state (that is, no blur).
   * @param { BackgroundBlurStyleOptions } [options] - Background blur options.<br>This parameter cannot be used in
   *     ArkTS widgets.
   * @param { SystemAdaptiveOptions } [sysOptions] - System adaptive adjustment options.<br>Default value:
   *     **{ disableSystemAdaptation: false }**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Sets the background effect of the component, including the blur radius, brightness, saturation, and color.
   *
   * @param { BackgroundEffectOptions } options - Background effect of the component, including the blur radius,
   *     brightness, saturation, and color.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundEffect(options: BackgroundEffectOptions): T;

  /**
   * Sets the background effect of the component, including the blur radius, brightness, saturation, and color. Compared
   * to [backgroundEffect<sup>11+</sup>]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}, the 
   * **options** parameter supports the **undefined** type.
   *
   * @param { Optional<BackgroundEffectOptions> } options - Background effect of the component, including the blur
   *     radius, brightness, saturation, and color.<br>If **options** is **undefined**, the background reverts to its
   *     default state with no effect.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>): T;

  /**
   * Sets the background effect of the component, including the blur radius, brightness, saturation, and color. Compared
   * with 
   * [backgroundEffect<sup>18+</sup>]{@link CommonMethod#backgroundEffect(options: Optional<BackgroundEffectOptions>)}, 
   * this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.
   * 
   * > **NOTE**
   * >
   * > **backgroundEffect** performs real-time rendering per frame, resulting in high performance overhead. When the 
   * > background blur effect remains unchanged, it is recommended that you use the static blur API 
   * > [blur]{@link @ohos.effectKit:effectKit.Filter.blur(radius: double)}. For best practices, see 
   * > [Image Blurring Optimization – When to Use](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519).
   *
   * @param { Optional<BackgroundEffectOptions> } options - Background effect of the component, including the blur
   *     radius, brightness, saturation, and color.<br>If **options** is **undefined**, the background reverts to its
   *     default state with no effect.
   * @param { SystemAdaptiveOptions } [ sysOptions ] - System adaptive adjustment options.<br>Default value:
   *     **{ disableSystemAdaptation: false }**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundImageResizable(value: ResizableOptions): T;

  /**
   * Sets the foreground effect of the component.
   *
   * @param { ForegroundEffectOptions } options - Foreground effect settings, including the blur radius.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  foregroundEffect(options: ForegroundEffectOptions): T;

  /**
   * Sets a visual effect that is not a filter effect.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { VisualEffect } effect - Visual effect.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visualEffect(effect: VisualEffect): T;

  /**
   * Sets the visual effect of the background filter.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Filter } filter - Visual effect of the background filter.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundFilter(filter: Filter): T;

  /**
   * Sets the visual effect of the foreground (content) filter.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Filter } filter - Visual effect of the foreground (content) filter.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  foregroundFilter(filter: Filter): T;

  /**
   * Sets the visual effect of the compositing filter.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Filter } filter - Visual effect of the compositing filter.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compositingFilter(filter: Filter): T;

  /**
   * Sets the visual effect of the material filter. The effects it contains are rendered at a level before the shadow.
   *
   * @param { Filter | undefined } filter - Filter effect parameters.
   *     Undefined means to none material filter.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  materialFilter(filter: Filter | undefined): T;

  /**
   * Applies a foreground blur style to the component.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { BlurStyle } value - Settings of the foreground blur style.
   * @param { ForegroundBlurStyleOptions } options - Defines the foreground blur options. For details about the default
   *     value, see [ForegroundBlurStyleOptions]{@link ForegroundBlurStyleOptions}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T;

  /**
   * Applies a foreground blur style to the component. Compared to 
   * [foregroundBlurStyle]{@link CommonMethod#foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions)},
   * the **style** parameter supports the **undefined** type.
   *
   * @param { Optional<BlurStyle> } style - Settings of the foreground blur style.<br>If **style** is set to
   *     **undefined**, no blur is applied.
   * @param { ForegroundBlurStyleOptions } [options] - Defines the foreground blur options. For details about the
   *     default value, see [ForegroundBlurStyleOptions]{@link ForegroundBlurStyleOptions}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Sets the opacity of the component.
   *
   * @param { number | Resource } value - Component opacity. Value range: 0 to 1. Values less than 0 are treated as 0.
   *     Values greater than 1 are treated as 1. **1**: fully opaque. **0**: fully transparent (where the component is
   *     hidden but occupies layout space).<br> Default value: **1**.<br>**NOTE**<br> Child components inherit parent
   *     opacity and combine with their own opacity. Example: Parent opacity 0.1 x Child opacity 0.8 = Effective opacity
   *     0.08.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  opacity(value: number | Resource): T;

  /**
   * Sets the opacity of the component. Compared with 
   * [opacity](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-opacity.md#opacity), this API supports 
   * the **undefined** type for the **opacity** parameter.
   *
   * @param { Optional<number | Resource> } opacity - Component opacity. Value range: 0 to 1. Values less than 0 are
   *     treated as 0. Values greater than 1 are treated as 1. **1**: fully opaque. **0**: fully transparent (where the
   *     component is hidden but occupies layout space).<br> Default value: **1**.<br>**NOTE**<br> Child components
   *     inherit parent opacity and combine with their own opacity. Example: Parent opacity 0.1 x Child opacity 0.8 =
   *     Effective opacity 0.08.<br>When **opacity** is **undefined**, the component reverts to the default opacity of
   *     **1**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  opacity(opacity: Optional<number | Resource>): T;

  /**
   * Sets the border. When neither color nor radius is specified, set borderColor and borderRadius after border to
   * ensure they take effect.
   *
   * @param { BorderOptions } value - - Unified border style.<br>The default value is **0**, indicating that no border is
   *     displayed.<br>Since API version 9, the parent node's border is displayed above child node content.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  border(value: BorderOptions): T;

  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value - Border style.<br>Default value: **BorderStyle.Solid**.[since 9]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  borderStyle(value: BorderStyle | EdgeStyles): T;

  /**
   * Sets the border width.
   *
   * @param { Length } value - [since 7 - 8]
   * @param { Length | EdgeWidths } value - [since 9 - 11]
   * @param { Length | EdgeWidths | LocalizedEdgeWidths } value - Border width. This parameter cannot be set in
   *     percentage. [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T;

  /**
   * Sets the border color.
   *
   * @param { ResourceColor } value - [since 7 - 8]
   * @param { ResourceColor | EdgeColors } value - [since 9 - 11]
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value - Border color.<br>Default value: **Color.Black**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Sets the border radius.
   *
   * @param { Length } value - [since 7 - 8]
   * @param { Length | BorderRadiuses } value - [since 9 - 11]
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value - Radius of the border corners. The value can be
   *     expressed as a percentage of the component's width. When combined with the [clip]{@link CommonMethod#clip}
   *     attribute, this setting clips child components to prevent them from extending beyond the component's
   *     boundaries.
   *     [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T;

  /**
   * Sets the border corner radius and the rendering strategy for rounded corners.
   * NOTE
   *    1. **RenderStrategy.FAST**: The current component and its child components will be drawn directly
   *        onto the canvas with rounded corners applied.
   *    2. **RenderStrategy.OFFSCREEN**: The current component and its child components will first be rendered onto
   *        an off-screen canvas, then undergo a rounded corner clipping, and finally be drawn onto the main canvas.
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value - Radius of the border corners. The value can be
   *     expressed as a percentage of the component's width. When combined with the clip attribute, this setting clips
   *     child components to prevent them from extending beyond the component's boundaries.
   * @param { RenderStrategy } [type] - Rendering strategy for drawing rounded corners.
   *     <br>Default value: RenderStrategy.FAST.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses, type?: RenderStrategy): T;

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
   * Sets the border image of the component.
   *
   * @param { BorderImageOption } value - Border image or border gradient.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  borderImage(value: BorderImageOption): T;

  /**
   * Sets the outline attributes in one declaration.
   *
   * @param { OutlineOptions } value - Outline attributes.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  outline(value: OutlineOptions): T;

  /**
   * Sets the outline attributes in one declaration. Compared with 
   * [outline](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-outline.md#outline), this API supports 
   * the **undefined** type for the **options** parameter.
   *
   * @param { Optional<OutlineOptions> } options - Outline attributes.<br>If **options** is **undefined**, the component
   *     reverts to its original style with no outline.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outline(options: Optional<OutlineOptions>): T;

  /**
   * Sets the outline style. If this API is not used, a solid line is displayed by default.
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value - Outline style.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T;

  /**
   * Sets the outline style. If this API is not used, a solid line is displayed by default. Compared with 
   * [outlineStyle]{@link CommonMethod#outlineStyle(value: OutlineStyle | EdgeOutlineStyles)}, this API supports the 
   * **undefined** type for the **style** parameter.
   *
   * @param { Optional<OutlineStyle | EdgeOutlineStyles> } style - Outline style.<br>If **style** is **undefined**, the
   *     component reverts to its original style with no outline.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T;

  /**
   * Sets the thickness of the outline. If this API is not used, there will be no change by default.
   *
   * @param { Dimension | EdgeOutlineWidths } value - Outline thickness. Percentage values are not supported.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  outlineWidth(value: Dimension | EdgeOutlineWidths): T;

  /**
   * Sets the thickness of the outline. If this API is not used, there will be no change by default. Compared with 
   * [outlineWidth]{@link CommonMethod#outlineWidth(value: Dimension | EdgeOutlineWidths)}, this API supports the 
   * **undefined** type for the **width** parameter.
   *
   * @param { Optional<Dimension | EdgeOutlineWidths> } width - Outline thickness. Percentage values are not supported.<
   *     br>If **width** is **undefined**, the component reverts to its original style with no outline width.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T;

  /**
   * Sets the outline color. If this API is not used, the default color black will be applied.
   *
   * @param { ResourceColor | EdgeColors } value - Outline color. [since 11 - 11]
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value - Outline color. [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Sets the outline color. If this API is not used, the default color black will be applied. Compared with 
   * [outlineColor]{@link CommonMethod#outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors)}, this API 
   * supports the **undefined** type for the **color** parameter.
   *
   * @param { Optional<ResourceColor | EdgeColors | LocalizedEdgeColors> } color - Outline color.<br>If **color** is
   *     **undefined**, the component reverts to its original style with the outline color of **Color.Black**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T;

  /**
   * Sets the radius of the outline corners. If this API is not used, there will be no change by default.
   *
   * @param { Dimension | OutlineRadiuses } value - Radius of the outline corners. Percentage values are not supported.<
   *     br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  outlineRadius(value: Dimension | OutlineRadiuses): T;

  /**
   * Sets the radius of the outline corners. If this API is not used, there will be no change by default. Compared with 
   * [outlineRadius]{@link CommonMethod#outlineRadius(value: Dimension | OutlineRadiuses)}, this API supports the 
   * **undefined** type for the **radius** parameter.
   *
   * @param { Optional<Dimension | OutlineRadiuses> } radius - Radius of the outline corners. Percentage values are not
   *     supported.<br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth<br
   *     >If **radius** is **undefined**, the component reverts to its original style with the outline corner radius of
   *     0.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T;

  /**
   * Sets the foreground color of the component. Components without explicit foreground color settings inherit from 
   * their parent components by default.
   *
   * @param { ResourceColor | ColoringStrategy } value - Foreground color. The value can be a specific color or a
   *     coloring strategy. The [attribute animation]{@link common} is not supported.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  foregroundColor(value: ResourceColor | ColoringStrategy): T;

  /**
   * Sets the foreground color of the component. Components without explicit foreground color settings inherit from 
   * their parent components by default. Compared to 
   * [foregroundColor]{@link CommonMethod#foregroundColor(value: ResourceColor | ColoringStrategy)}, the **color** 
   * parameter supports the **undefined** type.
   *
   * @param { Optional<ResourceColor | ColoringStrategy> } color - Foreground color. The value can be a specific color
   *     or a coloring strategy. Property animations are not supported.<br>If the color value is **undefined**, the
   *     previous setting or the component's default value is retained. The specific behavior may vary across
   *     components. It is recommended that you use explicit color values or [ColoringStrategy]{@link ColoringStrategy}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T;

  /**
   * Called when a click event occurs.
   *
   * When triggered by keyboard or gamepad input, the event's **SourceTool** is **Unknown**, and
   * [SourceType]{@link SourceType} is **KEY** or **JOYSTICK**.
   *
   * > **NOTE**
   * >
   * > Since API version 9, the following constraints apply when this API is used in service widgets:
   * >
   * > 1. Click events will not be triggered if the finger is pressed for more than 800 ms.
   * >
   * > 2. Click events will not be triggered if the finger moves more than 20 px after pressing down.
   *
   * @param { function } event - Callback for the click event.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onClick(event: (event: ClickEvent) => void): T;

  /**
   * Called when a click event occurs.
   *
   * When triggered by keyboard or gamepad input, the event's [SourceTool]{@link SourceTool} is **Unknown**, and
   * [SourceType]{@link SourceType} is **KEY** or **JOYSTICK**.
   *
   * Compared with the original **onClick** API, this API has the **distanceThreshold** parameter that specifies the
   * finger movement threshold for click events. If the finger's movement exceeds the set threshold, the gesture
   * recognition will fail. The click gesture recognition will fail if finger movement exceeds this threshold.
   *
   * For scenarios where there is no restriction on the finger movement distance during a click, the original API is
   * preferred. To limit finger movement range during a click, use this new API.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, the following constraints apply when this API is used in service widgets:
   * > >    1. Click events will not be triggered if the finger is pressed for more than 800 ms.
   * > >    2. Click events will not be triggered if the finger moves more than 20 px after pressing down.
   * >
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { function } event - Callback for the click event.
   * @param { number } distanceThreshold - Finger movement threshold for click events. If the value specified is less
   *     than or equal to 0, it will be converted to the default value.<br>Default value: 2^31-1<br>Unit: vp<br>**NOTE**
   *     <br>If the finger movement exceeds the preset movement threshold, the gesture recognition fails. If the default
   *     threshold is used during initialization and the finger moves beyond the component's touch target, the gesture
   *     recognition fails.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onClick(event: Callback<ClickEvent>, distanceThreshold: number): T;

  /**
   * Triggered when the mouse pointer or stylus enters or leaves the component.
   *
   * @param { function } event - Callback for mouse or stylus hover status.<br>**event**: event bubbling control and
   *     coordinates of the hover position; available since API version 11.<br>**isHover**: whether the mouse pointer or
   *     stylus is hovering over the component. **true**: The mouse pointer or stylus has entered the component.
   *     **false**: The mouse pointer or stylus has left the component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onHover(event: (isHover: boolean, event: HoverEvent) => void): T;

  /**
   * Triggered when a stylus hovers over the component.
   *
   * @param { Callback<HoverEvent> } event - Callback that controls event bubbling blocking and obtains the stylus hover
   *     position coordinates.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onHoverMove(event: Callback<HoverEvent>): T;

  /**
   * Trigger a accessibility hover event.
   *
   * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after
   *     accessibility mode is enabled.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): T;

  /**
   * Sets the hover effect for the component. When no hover effect is specified, the component uses the default
   * **HoverEffect.Auto** effect. For components with hover effects applied, the hover effect is hidden when the mouse
   * hovers and presses down on the component, and restored when the mouse button is released.
   *
   * @param { HoverEffect } value - Hover effect of the component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hoverEffect(value: HoverEffect): T;

  /**
   * Triggered when the component is clicked by a mouse button or the mouse pointer moves on the component.
   *
   * @param { function } event - Timestamp, mouse button, action, coordinates of the clicked point on the entire screen,
   *     and coordinates of the clicked point relative to the component when the event is triggered.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onMouse(event: (event: MouseEvent) => void): T;

  /**
   * Invoked when a touch event is triggered. Touch events
   * [bubble](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) by default and can be consumed by
   * multiple components. To prevent event bubbling, use the **stopPropagation** API of [TouchEvent]{@link TouchEvent}.
   * Mouse left-click events are converted to touch events and will also trigger this callback.
   *
   * @param { function } event - **TouchEvent** object.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onTouch(event: (event: TouchEvent) => void): T;

  /**
   * Triggered when a key event occurs.
   *
   * @param { function } event - **KeyEvent** object.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onKeyEvent(event: (event: KeyEvent) => void): T;

  /**
   * Triggered when a key operation is performed on the bound component after it obtains focus. If the callback returns
   * **true**, the key event is considered handled.
   *
   * @param { Callback<KeyEvent, boolean> } event - Callback for handling the key event.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onKeyEvent(event: Callback<KeyEvent, boolean>): T;

  /**
   * Called when the crown is rotated while the component has focus.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<CrownEvent> } event - [CrownEvent]{@link CrownEvent} object.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T;

  /**
   * Triggered before other callbacks when a key operation is performed on the bound component after it obtains focus.
   *
   * If the return value of this callback is **true**, the key event is considered consumed, and subsequent event
   * callbacks (**keyboardShortcut**, input method events, **onKeyEventDispatch**, and **onKeyEvent**) will be
   * intercepted and no longer triggered.
   *
   * @param { Callback<KeyEvent, boolean> } event - Callback for handling the key event.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onKeyPreIme(event: Callback<KeyEvent, boolean>): T;

  /**
   * Triggered when the bound component receives a key event. The key event will not be dispatched to its child
   * components. Only existing key events can be intercepted; creating new **KeyEvent** objects for dispatch is not
   * supported.
   *
   * If the callback returns **true**, the key event is marked as consumed and will not
   * [bubble up](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) to parent components.
   *
   * @param { Callback<KeyEvent, boolean> } event - Callback for handling key event dispatch.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T;

  /**
   * Binds a focus axis event callback to the component. Triggered when any operation is performed with the game
   * controller's directional pad or joystick on the bound component.
   *
   * @param { Callback<FocusAxisEvent> } event - Focus axis event callback.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  onFocusAxisEvent(event: Callback<FocusAxisEvent>): T;

  /**
   * Triggered by mouse wheel scrolling, a two-finger sliding gesture, or a pinch gesture on the touchpad.
   *
   * @param { Callback<AxisEvent> } event - [AxisEvent]{@link AxisEvent} object.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  onAxisEvent(event: Callback<AxisEvent>): T;

  /**
   * Sets whether the component is focusable.
   *
   * @param { boolean } value - Whether the component is focusable.<br>**true**: The component is focusable.<br>
   *     **false**: The component is not focusable.<br>**NOTE**<br>Components that have default interaction logic, such
   *     as [Button]{@link button} and [TextInput]{@link text_input}, are focusable by default. Other components, such
   *     as [Text]{@link text} and [Image]{@link image}, are not focusable by default. Only focusable components can
   *     trigger a [focus event]{@link common}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  focusable(value: boolean): T;

  /**
   * Set nextFocus.
   *
   * @param { FocusMovement } nextStep
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  tabStop(isTabStop: boolean): T;

  /**
   * Triggered when the current component obtains focus.
   *
   * @param { function } event - Callback function of **onFocus**, indicating that the component has gained focus.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onFocus(event: () => void): T;

  /**
   * Triggered when the current component loses focus.
   *
   * @param { function } event - Callback function of **onBlur**, which indicates that the component has lost focus.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onBlur(event: () => void): T;

  /**
   * Sets the tab navigation order of the component in sequential focus navigation with the **Tab** key. Components
   * without explicit **tabIndex** settings follow default focus navigation rules.
   *
   * > **NOTE**
   * >
   * > - **tabIndex** only customizes **Tab** key navigation. For arrow key navigation customization, use
   * > [nextFocus]{@link CommonMethod#nextFocus}.
   *
   * @param { number } index - Tab navigation order of the component in sequential focus navigation with the **Tab**
   *     key. When components with positive **tabIndex** values are present, only these components are reachable through
   *     sequential focus navigation, and they are navigated cyclically in ascending order based on the **tabIndex**
   *     value. When components with positive **tabIndex** values are not present, those components with a **tabIndex**
   *     value of **0** are navigated based on the preset focus navigation rule.<br>The
   *     [UiExtension]{@link @ohos.arkui.uiExtension:uiExtension} component does not support **tabIndex**. As such,
   *     using **tabIndex** on [hierarchical pages](docroot://ui/arkts-common-events-focus-event.md#basic-concepts) that
   *     contain **UiExtension** components may lead to disordered focus navigation.<br>- **tabIndex** >= 0: The
   *     component is focusable and can be reached through sequential keyboard navigation.<br>- **tabIndex** < 0 (
   *     usually **tabIndex** = -1): The component is focusable, but cannot be reached through sequential keyboard
   *     navigation.<br> **NOTE**<br> **tabIndex** and **focusScopeId** cannot be used together.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tabIndex(index: number): T;

  /**
   * Specifies whether to set this component as the default focus of the current
   * [hierarchical page](docroot://ui/arkts-common-events-focus-event.md#basic-concepts). If **defaultFocus** is not
   * set, the component will not receive initial focus on the current page.
   *
   * > **NOTE**
   * >
   * > This setting applies to pages that support routing or modal-type container components, such as **Page**,
   * > **NaviDestination**, **NavBar**, **PopUp**, and **Dialog**.
   *
   * @param { boolean } value - Whether to set the component as the default focus of the current
   *     [hierarchical page](docroot://ui/arkts-common-events-focus-event.md#basic-concepts). This parameter takes
   *     effect only when the hierarchical page is new and accessed for the first time.<br>**NOTE**<br>The value
   *     **true** means to set the component as the default focus, and the value **false** has no effect.<br>If no
   *     component on the hierarchical page has **defaultFocus(true)** set:<br>For API version 11 and earlier, the
   *     default focus is on the first focusable non-container component.<br>For API version versions later than 11, the
   *     default focus is on the hierarchical page's root container.<br>If **defaultFocus(true)** is set for multiple
   *     components on the hierarchical page, the first component found in the component tree depth-first traversal is
   *     used as the default focus.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  defaultFocus(value: boolean): T;

  /**
   * Specifies whether to set the component as the default focus of the container. If **groupDefaultFocus** is not set,
   * the component will not receive focus by default when its container is focused.
   *
   * @param { boolean } value - Whether to set the component as the default focus of the parent container. This
   *     parameter takes effect only when the container is new and obtains focus for the first time. <br>**true**: The
   *     component is the default focus of the parent container.<br>**false**: The component is not the default focus of
   *     the parent container.<br>**NOTE**<br>This parameter must be used together with
   *     [tabIndex]{@link CommonMethod#tabIndex}. When **tabIndex** is set for a container and
   *     **groupDefaultFocus(true)** is set for a child in the container or for the container itself, then when the
   *     container obtains focus for the first time through sequential Tab navigation, the focus automatically moves to
   *     the specified component. If **groupDefaultFocus(true)** is set for multiple components in the container (
   *     including the container itself), the first component found in the component tree in-depth traversal receives
   *     the focus.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  groupDefaultFocus(value: boolean): T;

  /**
   * Sets whether the component is focusable on touch. If **focusOnTouch** is not set, the component is not focusable on
   * touch by default.
   *
   * @param { boolean } value - Whether the component is focusable on touch. <br>**true**: The component is focusable on
   *     touch.<br>**false**: The component is not focusable on touch.<br>**NOTE**<br>This setting requires the
   *     component to be touchable.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  focusOnTouch(value: boolean): T;

  /**
   * Sets the system focus box style for the component.
   *
   * @param { FocusBoxStyle } style - System focus box style for the component.<br>**NOTE**<br>This style affects only
   *     the components that display the system focus box during focus traversal.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   *     only effective when isGroup is true, the default value is true.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusScopePriority(scopeId: string, priority?: FocusPriority): T;

  /**
   * Sets a property animation for the component.
   * 
   * > **NOTE**
   * >
   * > - When a single page contains a large number of components with animations, use 
   * > [renderGroup]{@link CommonMethod#renderGroup(value: boolean)} to minimize frame freezing and improve animation 
   * > performance. For best practices, see 
   * > [Animation Usage Guide – Using RenderGroup](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-fair-use-animation#section1223162922415).
   * > 
   * >
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { AnimateParam } value
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  animation(value: AnimateParam): T;

  /**
   * Sets the transition effects used when a component is inserted or removed.
   *
   * @param { TransitionOptions | TransitionEffect } value - Transition effects used when a component is inserted or
   *     removed.<br>**NOTE**<br>For details, see [TransitionOptions]{@link TransitionOptions} and
   *     [TransitionEffect]{@link TransitionEffect}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  transition(value: TransitionOptions | TransitionEffect): T;

  /**
   * Sets the transition effects used when a component is inserted or removed. Compared with 
   * [transition]{@link CommonMethod#transition(value: TransitionOptions | TransitionEffect)}, this API provides the 
   * callback when the transition animation ends.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { TransitionEffect } effect - Transition effects used when a component is inserted or removed.
   * @param { Optional<TransitionFinishCallback> } onFinish - Callback when the transition animation ends.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T;

  /**
   * Gesture to bind.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { GestureType } gesture - Type of the gesture to bind.
   * @param { GestureMask } mask - Mask for gesture events.<br>Default value: **GestureMask.Normal**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Gesture to preferentially recognize.
   *
   * 1. By default, the child component preferentially recognizes the gesture specified by **gesture**, and the parent
   * component preferentially recognizes the gesture specified by **priorityGesture** (if set).
   * 2. For long press gestures, the component with the shortest minimum hold-down time responds first, ignoring the
   * **priorityGesture** settings.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { GestureType } gesture - Gesture object to bind.
   * @param { GestureMask } mask - Mask for gesture events.<br>Default value: **GestureMask.Normal**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Gesture that can be recognized at once by the component and its child component. The gesture event is not a
   * bubbling event. When **parallelGesture** is set for a component, both it and its child component can respond to the
   * same gesture events, thereby implementing a quasi-bubbling effect.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { GestureType } gesture - Gesture object to bind.
   * @param { GestureMask } mask - Mask for gesture events.<br>Default value: **GestureMask.Normal**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Applies a foreground blur effect to the component.
   *
   * @param { number } value - Foreground blur effect to apply to the component. The input parameter is the blur radius.
   *     The larger the radius is, the more blurred the content is. If the value is **0**, the content is not blurred.
   * @param { BlurOptions } [options] - Grayscale parameters. [since 11]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  blur(value: number, options?: BlurOptions): T;

  /**
   * Applies a foreground blur effect to the component. Compared to 
   * [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}, the **blurRadius** parameter supports the 
   * **undefined** type.
   *
   * @param { Optional<number> } blurRadius - Foreground blur effect to apply to the component. The input parameter is
   *     the blur radius. The larger the radius is, the more blurred the content is. If the value is **0**, the content
   *     is not blurred.<br>If **blurRadius** is set to **undefined**, the previous value is retained.
   * @param { BlurOptions } [options] - Grayscale parameters.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions): T;

  /**
   * Applies a foreground blur effect to the component. Compared to 
   * [blur<sup>18+</sup>]{@link CommonMethod#blur(blurRadius: Optional<number>, options?: BlurOptions)}, this API adds 
   * the **sysOptions** parameter, which allows for system adaptive adjustments.
   *
   * @param { Optional<number> } blurRadius - Foreground blur effect to apply to the component. The input parameter is
   *     the blur radius. The larger the radius is, the more blurred the content is. If the value is **0**, the content
   *     is not blurred.<br>If **blurRadius** is set to **undefined**, the previous value is retained.
   * @param { BlurOptions } [options] - Grayscale parameters.
   * @param { SystemAdaptiveOptions } [sysOptions] - System adaptive adjustment options.<br>Default value:
   *     **{ disableSystemAdaptation: false }**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Applies a linear gradient foreground blur effect to the component.
   *
   * @param { number } value - Blur radius. A larger value indicates a higher blur degree. If the value is 0, the
   *     content is not blurred.<br>Value range: [0, 1000]
   * @param { LinearGradientBlurOptions } options - Linear gradient blur effect.<br>The linear gradient blur effect is
   *     defined by [fractionStops]{@link LinearGradientBlurOptions} and [direction]{@link LinearGradientBlurOptions}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  linearGradientBlur(value: number, options: LinearGradientBlurOptions): T;

  /**
   * Applies a linear gradient foreground blur effect to the component. Compared with 
   * [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)},
   * this API supports the **undefined** type.
   *
   * @param { Optional<number> } blurRadius - Blur radius. A larger value indicates a higher blur degree. If the value
   *     is 0, the content is not blurred.<br>Value range: [0, 1000]<br>If **blurRadius** is **undefined**, the gradient
   *     blur effect reverts to **0**.
   * @param { Optional<LinearGradientBlurOptions> } options - Linear gradient blur effect.<br>If **options** is
   *     **undefined**, the gradient blur effect reverts to **0**.<br>The linear gradient blur effect is defined by
   *     [fractionStops]{@link LinearGradientBlurOptions} and [direction]{@link LinearGradientBlurOptions}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T;

  /**
   * Applies a motion blur effect to the component being scaled or moved.
   * 
   * > **NOTE**
   * >
   * > - Do not use this API in intra-component transitions, shared element transitions, implicit element transitions, 
   * > or particle animations. Doing so may cause unexpected results.
   * >
   * > - The **radius** parameter of **motionBlur** must be set to **0** for the initial state. Otherwise, there may be 
   * > unexpected results during a cold start.
   * >
   * > - This API must be used together with the **onFinish** parameter of **AnimateParam**. Its **radius** parameter 
   * > must be set to **0** when the animation ends; otherwise, there may be unexpected results.
   * >
   * > - When using this API, do not frequently change the blur radius of the same component; otherwise, there may be 
   * > unexpected results. For example, if you frequently click the image in the example, the blur effect may not work 
   * > sometimes.
   * >
   * > - To avoid unexpected results, make sure the coordinates of the motion blur anchor point are the same as those of
   * > the animation scaling anchor point.
   * >
   * > - To avoid unexpected results, set the blur radius to a value less than 1.
   *
   * @param { MotionBlurOptions } value - Motion blur options.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  motionBlur(value: MotionBlurOptions):T;

  /**
   * Applies a motion blur effect to the component being scaled or moved. Compared with 
   * [motionBlur]{@link CommonMethod#motionBlur(value: MotionBlurOptions)}, this API supports the **undefined** type for
   * the **motionBlur** parameter.
   * 
   * 1. Do not use this API in intra-component transitions, shared element transitions, implicit element transitions,
   * or particle animations. Doing so may cause unexpected results.
   * 
   * 2. The **radius** parameter of **motionBlur** must be set to **0** for the initial state. Otherwise, there may be
   * unexpected results during a cold start.
   * 
   * 3. This API must be used together with the **onFinish** parameter of **AnimateParam**. Its **radius** parameter
   * must be set to **0** when the animation ends; otherwise, there may be unexpected results.
   * 
   * 4. When using this API, do not frequently change the blur radius of the same component; otherwise, there may be
   * unexpected results. For example, if you frequently click the image in the example, the blur effect may not work
   * sometimes.
   * 
   * 5. To avoid unexpected results, make sure the coordinates of the motion blur anchor point are the same as those
   * of the animation scaling anchor point.
   * 
   * 6. To avoid unexpected results, set the blur radius to a value less than 1.
   *
   * @param { Optional<MotionBlurOptions> } motionBlur - Motion blur options.<br>If **motionBlur** is set to
   *     **undefined**, the previous value is retained.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  motionBlur(motionBlur: Optional<MotionBlurOptions>): T;

  /**
   * Applies a brightness effect to the component. If this API is not used, there will be no change by default.
   *
   * @param { number } value - Brightness effect of the component. **1**: No brightness adjustment. Less than 1.0:
   *     decreases brightness. 0 or less: Complete black. Greater than 1: increases brightness. 2 or greater: complete
   *     white.<br>Value range:
   *     [0, +∞)<br>Recommended value range: [0, 2]<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  brightness(value: number): T;

  /**
   * Applies a brightness effect to the component. If this API is not used, there will be no change by default. Compared
   * with [brightness]{@link CommonMethod#brightness(value: number)}, this API supports the **undefined** type for the 
   * **brightness** parameter.
   *
   * @param { Optional<number> } brightness - Brightness effect of the component. **1**: No brightness adjustment. Less
   *     than 1.0: decreases brightness. 0 or less: Complete black. Greater than 1: increases brightness. 2 or greater:
   *     complete white.<br>Value range:
   *     [0, +∞)<br>Recommended value range: [0, 2]<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.<br>If **brightness** is **undefined**, the brightness level is reset to **1**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  brightness(brightness: Optional<number>): T;

  /**
   * Applies a contrast effect to the component. If this API is not used, there will be no change by default.
   *
   * @param { number } value - Contrast of the component. The input parameter is a contrast value. If the value is
   *     **1**, the source image is displayed. If the value is greater than 1, a larger value indicates a higher
   *     contrast and a clearer image. If the value is less than 1, a smaller value indicates a lower contrast is. If
   *     the value is **0**, the image becomes all gray.<br>Recommended value range:
   *     [0, 10)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  contrast(value: number): T;

  /**
   * Applies a contrast effect to the component. If this API is not used, there will be no change by default. Compared 
   * to [contrast]{@link CommonMethod#contrast(value: number)}, the **contrast** parameter supports the **undefined** 
   * type.
   *
   * @param { Optional<number> } contrast - Contrast of the component. The input parameter is a contrast value. If the
   *     value is **1**, the source image is displayed. If the value is greater than 1, a larger value indicates a
   *     higher contrast and a clearer image. If the value is less than 1, a smaller value indicates a lower contrast
   *     is. If the value is **0**, the image becomes all gray.<br>Recommended value range:
   *     [0, 10)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.<br>If **contrast** is **undefined**, the contrast effect is reset to **1.0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  contrast(contrast: Optional<number>): T;

  /**
   * Applies a grayscale effect to the component. The grayscale rendering of the upper layer will overlay that of lower-
   * layer child components. If this API is not used, there will be no change by default.
   *
   * @param { number } value - Grayscale conversion ratio of the component. If the value is **1.0**, the component is
   *     completely converted to grayscale. If the value is **0.0**, the component remains unchanged. Between **0** and
   *     **1**, the value applies a linear multiplier on the grayscale effect.<br>Value range: [0.0, 1.0]<br>**NOTE**<br
   *     >A value less than **0.0** evaluates to the value **0.0**. A value greater than **1.0** evaluates to the value
   *     **1.0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  grayscale(value: number): T;

  /**
   * Applies a grayscale effect to the component. The grayscale rendering of the upper layer will overlay that of lower-
   * layer child components. If this API is not used, there will be no change by default. Compared to 
   * [grayscale]{@link CommonMethod#grayscale(value: number)}, the **grayscale** parameter supports the **undefined** 
   * type.
   *
   * @param { Optional<number> } grayscale - Grayscale conversion ratio of the component. If the value is **1.0**, the
   *     component is completely converted to grayscale. If the value is **0.0**, the component remains unchanged.
   *     Between **0** and **1**, the value applies a linear multiplier on the grayscale effect.<br>Value range:
   *     [0.0, 1.0]<br>**NOTE**<br>A value less than **0.0** evaluates to the value **0.0**. A value greater than
   *     **1.0** evaluates to the value **1.0**.<br>If **grayscale** is set to **undefined**, the default value **0.0**
   *     is used, which means the component reverts to its original effect with no grayscale.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  grayscale(grayscale: Optional<number>): T;

  /**
   * Applies a color blend effect to the component.
   *
   * @param { Color | string | Resource } value - Color to blend with the component. The value can be a string, for
   *     example, **'0x000000'** or **'rgba(0,0,0,1)'**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * Applies a color blend effect to the component. Compared with 
   * [colorBlend]{@link CommonMethod#colorBlend(value: Color | string | Resource)}, this API supports the **undefined** 
   * type for the **color** parameter.
   *
   * @param { Optional<Color | string | Resource> } color - Color to blend with the component. The value can be a
   *     string, for example, **'0x000000'** or **'rgba(0,0,0,1)'**.<br>If **color** is **undefined**, the component
   *     reverts to its original effect with no color blending.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  colorBlend(color: Optional<Color | string | Resource>): T;

  /**
   * Applies a saturation effect to the component. If this API is not used, there will be no change by default.
   *
   * @param { number } value - Saturation of the component. The saturation is the ratio of the chromatic component to
   *     the achromatic component (gray) in a color. If the value is **1**, the original image is displayed. If the
   *     value is greater than **1**, a higher percentage of the chromatic component indicates a higher saturation. If
   *     the value is less than **1**, a higher percentage of the achromatic component indicates a lower saturation.<br>
   *     Recommended value range: [0, 50)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  saturate(value: number): T;

  /**
   * Applies a saturation effect to the component. If this API is not used, there will be no change by default. Compared
   * to [saturate]{@link CommonMethod#saturate(value: number)}, the **saturate** parameter supports the **undefined** 
   * type.
   *
   * @param { Optional<number> } saturate - Saturation of the component. The saturation is the ratio of the chromatic
   *     component to the achromatic component (gray) in a color. If the value is **1**, the original image is
   *     displayed. If the value is greater than **1**, a higher percentage of the chromatic component indicates a
   *     higher saturation. If the value is less than **1**, a higher percentage of the achromatic component indicates a
   *     lower saturation.<br>Recommended value range:
   *     [0, 50)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.<br>If **saturate** is **undefined**, the saturation effect is reset to **1.0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  saturate(saturate: Optional<number>): T;

  /**
   * Converts the image to a sepia tone, reducing color intensity to create a warm, vintage image style.
   *
   * @param { number } value - Intensity of the sepia filter. A value of 1 results in a completely sepia image, values
   *     less than or equal to 0 leave the image unchanged, and values greater than 1 increase the color shift, making
   *     the image brighter and more yellow or red, though this is not a standard sepia effect.<br>Value range:
   *     [0, +∞). Recommended value range: (0, 1].
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  sepia(value: number): T;

  /**
   * Converts the image to a sepia tone, reducing color intensity to create a warm, vintage image style. Compared to 
   * [sepia]{@link CommonMethod#sepia(value: number)}, this API supports the **undefined** type for the **sepia** 
   * parameter.
   *
   * @param { Optional<number> } sepia - Intensity of the sepia filter. A value of 1 results in a completely sepia
   *     image, values less than or equal to 0 leave the image unchanged, and values greater than 1 increase the color
   *     shift, making the image brighter and more yellow or red, though this is not a standard sepia effect.<br>If
   *     **sepia** is **undefined**, the component reverts to its original effect.<br> Value range:
   *     [0, +∞). Recommended value range: (0, 1].
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sepia(sepia: Optional<number>): T;

  /**
   * Inverts an image.
   *
   * @param { number } value - How an image is inverted.<br>When the input parameter is a number: If the value is **1**,
   *     the component is completely inverted. If the value is **0**, the component remains unchanged.<br>Value range:
   *     [0, 1].<br>A value less than 0 evaluates to the value **0**. A value larger than 1 is treated as **1**.<br>If
   *     the value is of the InvertOptions type, the grayscale value of the background color is compared with the
   *     threshold range. If the grayscale value is greater than the upper bound of the threshold range, the **high**
   *     value is used. If the grayscale value is less than the lower bound of the threshold range, the **low** value is
   *     used. If the grayscale value is within the threshold range, the background color changes linearly from high to
   *     low.<br>**NOTE**<br>The number and InvertOptions parameter types produce different inversion effects. When you
   *     switch parameter types, previous effects persist and both effects coexist. Use consistent parameter types for
   *     predictable results. [since 7 - 10]
   * @param { number | InvertOptions } value - How an image is inverted.<br>When the input parameter is a number: If the
   *     value is **1**, the component is completely inverted. If the value is **0**, the component remains unchanged.<
   *     br>Value range: [0, 1].<br>A value less than 0 evaluates to the value **0**. A value larger than 1 is treated
   *     as **1**.<br>If the value is of the InvertOptions type, the grayscale value of the background color is compared
   *     with the threshold range. If the grayscale value is greater than the upper bound of the threshold range, the
   *     **high** value is used. If the grayscale value is less than the lower bound of the threshold range, the **low**
   *     value is used. If the grayscale value is within the threshold range, the background color changes linearly from
   *     high to low.<br>**NOTE**<br>The number and InvertOptions parameter types produce different inversion effects.
   *     When you switch parameter types, previous effects persist and both effects coexist. Use consistent parameter
   *     types for predictable results. [since 11]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  invert(value: number | InvertOptions): T;

  /**
   * Inverts an image. Compared with [invert]{@link CommonMethod#invert(value: number | InvertOptions)}, this API 
   * supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<number | InvertOptions> } options - How an image is inverted.<br>When the input parameter is a
   *     number: If the value is **1**, the component is completely inverted. If the value is **0**, the component
   *     remains unchanged.<br>Value range: [0, 1].<br>A value less than 0 evaluates to the value **0**. A value larger
   *     than 1 is treated as **1**.<br>If the value is of the InvertOptions type, the grayscale value of the background
   *     color is compared with the threshold range. If the grayscale value is greater than the upper bound of the
   *     threshold range, the **high** value is used. If the grayscale value is less than the lower bound of the
   *     threshold range, the **low** value is used. If the grayscale value is within the threshold range, the
   *     background color changes linearly from high to low.<br>If **options** is **undefined**, the component reverts
   *     to its original effect.<br>**NOTE**<br>The number and InvertOptions parameter types produce different inversion
   *     effects. When you switch parameter types, previous effects persist and both effects coexist. Use consistent
   *     parameter types for predictable results.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  invert(options: Optional<number | InvertOptions>): T;

  /**
   * Applies a system bar effect to the component, which means to invert colors based on the background and add a blur.
   *
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarEffect(): T;

  /**
   * Rotates the hue of the component. If this API is not used, there will be no change by default.
   *
   * @param { number | string } value - Hue rotation angle of the component.<br>Value range: (-∞, +∞)<br>**NOTE**<br>A
   *     rotation of 360 degrees leaves the color unchanged. A rotation of 180 degrees and then -180 degrees also leaves
   *     the color unchanged. When the data type is number, the value **90** is equivalent to **'90deg'**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  hueRotate(value: number | string): T;

  /**
   * Rotates the hue of the component. If this API is not used, there will be no change by default. Compared to 
   * [hueRotate]{@link CommonMethod#hueRotate(value: number | string)}, the **rotation** parameter supports the 
   * **undefined** type.
   *
   * @param { Optional<number | string> } rotation - Hue rotation angle of the component.<br>Value range: (-∞, +∞)<br>
   *     For the string type, the value must be a numeric string.<br>**NOTE**<br>A rotation of 360 degrees leaves the
   *     color unchanged. A rotation of 180 degrees and then -180 degrees also leaves the color unchanged. When the data
   *     type is number, the value **90** is equivalent to **'90deg'**.<br>If **sepia** is **undefined**, the component
   *     reverts to its original effect with no hue rotation.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  hueRotate(rotation: Optional<number | string>): T;

  /**
   * Sets whether to render child node shadows at the same layer, enabling shadow overlap within the same layer.
   *
   * @param { boolean } value - Whether to render child node shadows at the same layer.<br>Default value: **false**<br>
   *     **true**: Child node shadows are rendered at the same layer without overlapping.<br> **false**: Child node
   *     shadows are rendered separately, with later shadows overlapping earlier ones.<br>**NOTE**<br>1. This feature is
   *     disabled by default. When child nodes have large shadow radius and overlapping areas, later-rendered shadows
   *     cover earlier ones. Enabling this feature renders all child shadows simultaneously without overlap.<br>2. Avoid
   *     nesting **useShadowBatching**. When used in nested mode, **useShadowBatching** takes effect for the current
   *     child node only and cannot be recursively used.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  useShadowBatching(value: boolean): T;

  /**
   * Sets whether to render child node shadows at the same layer, enabling shadow overlap within the same layer. 
   * Compared with [useShadowBatching<sup>11+</sup>]{@link CommonMethod#useShadowBatching(value: boolean)}, this API 
   * supports the **undefined** type for the **use** parameter.
   *
   * @param { Optional<boolean> } use - Whether to render child node shadows at the same layer.<br>Default value:
   *     **false**<br> **true**: Child node shadows are rendered at the same layer without overlapping.<br> **false**:
   *     Child node shadows are rendered separately, with later shadows overlapping earlier ones.<br>**NOTE**<br>1. This
   *     feature is disabled by default. When child nodes have large shadow radius and overlapping areas, later-rendered
   *     shadows cover earlier ones. Enabling this feature renders all child shadows simultaneously without overlap.<br>
   *     2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching** takes effect for the
   *     current child node only and cannot be recursively used.<br>If **use** is **undefined**, the component reverts
   *     to its original effect of not using shadow overlapping.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  useShadowBatching(use: Optional<boolean>): T;

   /**
   * Specifies whether to apply the effect defined by <!--Del-->the parent
   * [EffectComponent](ts-container-effectcomponent-sys.md) or <!--DelEnd-->the window.
   *
   * @param { Optional<boolean> } useEffect - Whether to apply the effect defined by <!--Del-->the parent
   *     **EffectComponent** or <!--DelEnd-->the window.
   *     <br>The value **true** means to apply the effect defined by <!--Del-->the parent **EffectComponent**
   *     or <!--DelEnd-->the window.
   *     <br>Default value: **false**.
   * @param { EffectType } effectType - Type of effect to apply to the component, which is defined by
   *     <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
   *     <br>Default value: **EffectType.DEFAULT**.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  useEffect(useEffect: boolean, effectType: EffectType): T;

  /**
   * Specifies whether to apply the effect defined by <!--Del-->the parent
   * EffectComponent or
   * 
   * <!--DelEnd-->the window. Compared to useEffect<sup>14+</sup>,
   * 
   * this API supports the **undefined** type for the **useEffect** parameter.
   *
   * @param { Optional<boolean> } useEffect - Whether to apply the effect defined by
   *     <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
   *     <br>The value **true** means to apply the effect defined by <!--Del-->the parent
   *     **EffectComponent** or <!--DelEnd-->the window.
   *     <br>Default value: **false**.
   *     <br>If **useEffect** is set to **undefined**, the previous value is retained.
   * @param { EffectType } [effectType] - Type of effect to apply to the component, which
   *     is defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
   *     <br>Default value: **EffectType.DEFAULT**.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T;

  /**
   * Specifies whether to combine the drawing of special effects, such as background blur.
   *
   * @param { boolean } value - Whether the component inherits the special effect settings of the
   *     **EffectComponent** component.<br>The value **true** means that the component inherits the
   *     special effect settings of the **EffectComponent** component, and **false** means the opposite.
   *     <br>Default value: **false**.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  useEffect(value: boolean): T;

  /**
   * Specify whether the current component participates in the fusion effect of the ancestor component 
   * UnionEffectContainer
   *
   * @param { boolean | undefined } value - Whether the component participates in the fusion effect of
   *     the ancestor component **UnionEffectContainer**.<br>The value **true** means that the component participates
   *     in the fusion effect of the ancestor component **UnionEffectContainer**, and **false** means the opposite.
   *     <br>Default value: **false**. Undefined means to default value.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  useUnionEffect(value: boolean | undefined): T;

  /**
   * Specify whether the current component participates in the fusion effect of the ancestor component UnionEffectContainer
   *
   * @param { boolean | undefined } value - Whether the component participates in the fusion effect of
   *     the ancestor component **UnionEffectContainer**.<br>The value **true** means that the component participates
   *     in the fusion effect of the ancestor component **UnionEffectContainer**, and **false** means the opposite.
   *     <br>Default value: **false**. Undefined means to default value.
   * @param { GravityCenterOptions } [options] - Gravitational center parameter.
   *     This parameter must be used together with UnionMode.GRAVITY_UNION.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): T;

  /**
   * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.
   *
   * @param { number } value - Background blur effect to apply to the component. The input parameter is the blur radius.
   *     The larger the radius is, the more blurred the background is. If the value is **0**, the background is not
   *     blurred.
   * @param { BlurOptions } [options] - Grayscale parameters. [since 11]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  backdropBlur(value: number, options?: BlurOptions): T;

  /**
   * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters. 
   * Compared to [backdropBlur]{@link CommonMethod#backdropBlur(value: number, options?: BlurOptions)}, the **radius** 
   * parameter supports the **undefined** type.
   *
   * @param { Optional<number> } radius - Background blur effect to apply to the component. The input parameter is the
   *     blur radius. The larger the radius is, the more blurred the background is. If the value is **0**, the
   *     background is not blurred.<br>If **radius** is **undefined**, the background blur reverts to its default state
   *     (that is, no blur).
   * @param { BlurOptions } [options] - Grayscale parameters.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions): T;

  /**
   * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters. 
   * Compared with 
   * [backdropBlur<sup>18+</sup>]{@link CommonMethod#backdropBlur(radius: Optional<number>, options?: BlurOptions)}, 
   * this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.
   *
   * @param { Optional<number> } radius - Background blur effect to apply to the component. The input parameter is the
   *     blur radius. The larger the radius is, the more blurred the background is. If the value is **0**, the
   *     background is not blurred.<br>If **radius** is **undefined**, the background blur reverts to its default state
   *     (that is, no blur).
   * @param { BlurOptions } [options] - Grayscale parameters.
   * @param { SystemAdaptiveOptions } [sysOptions] - System adaptive adjustment options.<br>Default value:
   *     **{ disableSystemAdaptation: false }**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

 /**
   * Sets whether to form a render group. A render group means that the subtree composed of the current component and 
   * its child components is first rendered on an offscreen canvas and then composited with the parent component. 
   * Setting a render group allows the system to cache the rendering result, improving performance. However, if 
   * components within the render group are frequently updated, cache invalidation may lead to performance degradation. 
   * Additionally, when a render group is set and the current component's opacity is not **1**, the rendering effect may
   * differ.
   * 
   * If this attribute is not set, no render group is formed by default.
   *
   * @param { boolean } value - Whether the current component and its child components form a render group.<br>
   *     **false**: no. Rendering is performed directly without offscreen rendering.<br> **true**: yes. The current
   *     component and its child components are rendered offscreen first and then composited with the parent component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  renderGroup(value: boolean): T;

  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { Optional<boolean> } isGroup - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  renderGroup(isGroup: Optional<boolean>): T;

  /**
   * Sets whether the current component and its child components are removed from the render group of the ancestor 
   * component. If this attribute is used alone, no effect is achieved. It must be used with the 
   * [renderGroup]{@link CommonMethod#renderGroup(isGroup: Optional<boolean>)} attribute of the ancestor component. 
   * 
   * Removing the current component and its children from the render group does not affect the offscreen canvas of the 
   * ancestor component, and the cache of the render group is still valid. In this way, the render group cache can be 
   * reused. If the display area of the current component occupies only a part of the display area of the render group 
   * drawing content, and the display effect of the current component and its children is frequently updated, setting 
   * **excludeFromRenderGroup** helps optimize the drawing performance.
   * 
   * If this attribute is not set, the current component and its children are not removed from the render group of the 
   * ancestor component by default.
   * 
   * > **NOTE**
   * >
   * > The drawing content of the component with **excludeFromRenderGroup** set to **true** and its children cannot the 
   * > component's own boundary range. Otherwise, the displayed content may be clipped. For example, if the child 
   * > component exceeds the boundary range of the current component due to attributes such as 
   * > [translate]{@link CommonMethod#translate(value: TranslateOptions)} or 
   * > [scale]{@link CommonMethod#scale(value: ScaleOptions)}, or the drawing content extend beyond its boundaries 
   * > because the current component has attributes such as 
   * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} and 
   * > [pixelStretchEffect]{@link CommonMethod#pixelStretchEffect(options: PixelStretchEffectOptions)}, the displayed 
   * > content may be clipped. In such scenarios, **excludeFromRenderGroup** should not be set to **true**.
   *
   * @param { boolean | undefined } exclude - Whether to remove the current component and its child components from the
   *     render group of the ancestor component.<br>**true**: yes. **false**: no.<br>If **exclude** is set to
   *     **undefined**, the value **false** is used.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 22 dynamic
   */
  excludeFromRenderGroup(exclude: boolean | undefined): T;

  /**
   * Sets whether to freeze the component. When frozen, the component and its children are cached for repeated drawing 
   * after offscreen rendering, without updating internal attributes.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { boolean } value - Whether to freeze the component. When frozen, the component and its children are cached
   *     for repeated drawing after offscreen rendering, without updating internal attributes. If the opacity of the
   *     component is not 1, the drawing effect may vary depending on the value.<br>Default value: **false**<br>
   *     **true**: Freeze the component.<br>**false**: Do not freeze the component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  freeze(value: boolean): T;

  /**
   * Sets whether to freeze the component. When frozen, the component and its children are cached for repeated drawing 
   * after offscreen rendering, without updating internal attributes. Compared with 
   * [freeze]{@link CommonMethod#freeze(value: boolean)}, this API supports the **undefined** type for the **freeze** 
   * parameter.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<boolean> } freeze - Whether to freeze the component. When frozen, the component and its children
   *     are cached for repeated drawing after offscreen rendering, without updating internal attributes. If the opacity
   *     of the component is not 1, the drawing effect may vary depending on the value.<br>Default value: **false**<br>
   *     **true**: Freeze the component.<br>**false**: Do not freeze the component.<br>If **freeze** is set to
   *     **undefined**, the previous value is retained.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  freeze(freeze: Optional<boolean>): T;

  /**
   * Translates the component.
   *
   * @param { TranslateOptions } value - How the component is translated within the
   *     [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the
   *     upper-left corner of the component as the origin (as shown in the figure below). Values of **x**, **y**, and
   *     **z** indicate the translation distance along the respective axis. A positive value indicates a forward
   *     movement towards the respective axis, and a negative value indicates a backward movement towards the respective
   *     axis. The translation distance can be a number or a string (for example, **'10px'** or **'10%'**).<br>Default
   *     value:<br>{<br>x: 0,<br>y: 0,<br>z: 0<br>}<br>Unit: vp<br>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>**NOTE**<br>When the
   *     component is translated along the z-axis, the position of the observation point remains unchanged. As such, the
   *     component appears larger when the value of **z** places it closer to the observation point and smaller when the
   *     value of **z** places it further away from the observation point.<br>!
   *     [coordinateNode](docroot://reference/apis-arkui/arkui-ts/figures/coordinateNote.png)
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  translate(value: TranslateOptions): T;

  /**
   * Translates the component. Compared with [translate]{@link CommonMethod#translate(value: TranslateOptions)}, this 
   * API supports the **undefined** type.
   *
   * @param { Optional<TranslateOptions> } translate - How the component is translated within the
   *     [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the
   *     upper-left corner of the component as the origin (as shown in the figure below). Values of **x**, **y**, and
   *     **z** indicate the translation distance along the respective axis. A positive value indicates a forward
   *     movement towards the respective axis, and a negative value indicates a backward movement towards the respective
   *     axis. The translation distance can be a number or a string (for example, **'10px'** or **'10%'**).<br>Default
   *     value:<br>{<br>x: 0,<br>y: 0,<br>z: 0<br>}<br>Unit: vp<br>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>**NOTE**<br>When the
   *     component is translated along the z-axis, the position of the observation point remains unchanged. As such, the
   *     component appears larger when the value of **z** places it closer to the observation point and smaller when the
   *     value of **z** places it further away from the observation point.<br>!
   *     [coordinateNode](docroot://reference/apis-arkui/arkui-ts/figures/coordinateNote.png)<br>If **translate** is
   *     **undefined**, the component reverts to its original state with no translation.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  translate(translate: Optional<TranslateOptions>): T;

  /**
   * Scales the component.
   *
   * @param { ScaleOptions } value - Scale ratio along the x-, y-, and z-axis. The default value is **1**. **centerX**
   *     and **centerY** are used to set the scale center point.<br>Default value:<br>{<br>x: 1,<br>y: 1,<br>z: 1,<br>
   *     centerX:'50%',<br>centerY:'50%'<br>}
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scale(value: ScaleOptions): T;

  /**
   * Scales the component. Compared with [scale]{@link CommonMethod#scale(value: ScaleOptions)}, this API supports the 
   * **undefined** type.
   *
   * @param { Optional<ScaleOptions> } options - Scale ratio along the x-, y-, and z-axis. The default value is **1**.
   *     **centerX** and **centerY** are used to set the scale center point.<br>Default value:<br>{<br>x: 1,<br>y: 1,<br
   *     >z: 1,<br>centerX:'50%',<br>centerY:'50%'<br>}<br>If **options** is **undefined**, the component reverts to its
   *     original state with no scaling.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * Rotates the component.
   *
   * @param { RotateOptions } value - How the component is rotated within the
   *     [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the
   *     upper-left corner of the component as the origin (as shown in the figure below). (x, y, z) specifies a vector
   *     as the axis of rotation.<br>The axis and center of rotation are set based on the coordinate system, which
   *     remains where it is when the component is moved.<br>Default value: When **x**, **y**, and **z** are not
   *     specified, their default values are **0**, **0**, and **1**, respectively. If any of **x**, **y**, and **z** is
   *     specified, the default value for the unspecified one is **0**.<br>{<br>centerX: '50%',<br>centerY: '50%',<br>
   *     centerZ: 0,<br>perspective: 0<br>}<br>Unit: vp<br>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rotate(value: RotateOptions): T;

  /**
   * Rotates the component. Compared with [rotate]{@link CommonMethod#rotate(value: RotateOptions)}, this API supports 
   * the **undefined** type.
   *
   * @param { Optional<RotateOptions> } options - How the component is rotated within the
   *     [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the
   *     upper-left corner of the component as the origin (as shown in the figure below). (x, y, z) specifies a vector
   *     as the axis of rotation.<br>The axis and center of rotation are set based on the coordinate system, which
   *     remains where it is when the component is moved.<br>Default value: When **x**, **y**, and **z** are not
   *     specified, their default values are **0**, **0**, and **1**, respectively. If any of **x**, **y**, and **z** is
   *     specified, the default value for the unspecified one is **0**.<br>{<br>centerX: '50%',<br>centerY: '50%',<br>
   *     centerZ: 0,<br>perspective: 0<br>}<br>Unit: vp<br>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>If **options** is
   *     **undefined**, the component reverts to its original state with no rotation.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  rotate(options: Optional<RotateOptions>): T;

  /**
   * Sets the component rotation effect. Compared with 
   * [rotate]{@link CommonMethod#rotate(options: Optional<RotateOptions>)}, this API supports the **RotateAngleOptions**
   * type for the **options** parameter.
   *
   * @param { Optional<RotateOptions | RotateAngleOptions> } options - **RotateOptions**: How the component rotates in
   *     the coordinate system (as shown below) with the upper left corner of the component as the coordinate origin. (
   *     x, y, z) specifies a vector as the axis of rotation.<br>The rotation axis and center point are defined based on
   *     the [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system). When the
   *     component moves, the coordinate system does not follow it.<br>Default value: When **x**, **y**, and **z** are
   *     not specified, their default values are **0**, **0**, and **1**, respectively. If any of **x**, **y**, and
   *     **z** is specified, the default value for the unspecified one is **0**.<br>{<br>centerX: '50%',<br>centerY: '50
   *     %',<br>centerZ: 0,<br>perspective: 0<br>}<br>**RotateAngleOptions**: How the component rotates in the
   *     coordinate system (as shown below) with the upper left corner of the component as the coordinate origin. angleX
   *     , angleY, angleZ specifies the rotation angle on the three axes.<br>Default value:<br>{<br>angleX:0,<br>angleY:
   *     0,<br>angleZ:0,<br>centerX: '50%',<br>centerY: '50%',<br>centerZ: 0,<br>perspective: 0<br>}<br>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>If **options** is
   *     **undefined**, the component reverts to its original state with no rotation.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  rotate(options: Optional<RotateOptions | RotateAngleOptions>): T;

  /**
   * Displays the matrix transformation when 2D transformation is performed. If 3D transformation is included, the 
   * [transform3D]{@link CommonMethod#transform3D} API is required.
   *
   * @param { object } value - Transformation matrix of the component. Only the
   *     [Matrix4Transit]{@link @ohos.matrix4:matrix4} object type is supported.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  transform(value: object): T;

  /**
   * Displays the matrix transformation when 2D transformation is performed. If 3D transformation is included, the 
   * [transform3D]{@link CommonMethod#transform3D} API is required. Compared with 
   * [transform](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#transform), the 
   * transform<sup>18+</sup> parameter supports the undefined type.
   *
   * @param { Optional<object> } transform - Transformation matrix of the component. Only the
   *     [Matrix4Transit]{@link @ohos.matrix4:matrix4} object type is supported.<br>If **transform** is **undefined**,
   *     the component reverts to the identity matrix (no transformation).
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transform(transform: Optional<object>): T;

  /**
   * Sets the 3D transformation matrix of the component. When 3D transformation with the perspective effect is involved,
   * the display effect of the transform interface may be incorrect. In this case, the transform3D interface is 
   * recommended.
   *
   * @param { Optional<Matrix4Transit> } transform - 3D transformation matrix.<br>If **transform** is **undefined**, the
   *     component reverts to the identity matrix (no transformation).
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  transform3D(transform: Optional<Matrix4Transit>): T;

  /**
   * Triggered when this component appears.
   *
   * > **NOTE**
   * >
   * > This callback may be called after the component layout and rendering process.
   *
   * @param { function } event - Callback function of the **onAppear** event, which indicates that the component is
   *     displayed.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onAppear(event: () => void): T;

  /**
   * Triggered when this component disappears.
   *
   * @param { function } event - Callback function of the **onDisAppear** event, which indicates that the component is
   *     hidden.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDisAppear(event: () => void): T;

  /**
   * Triggered when this component is mounted to the component tree. Due to the following limitations, it is recommended
   * that you use [onAppear]{@link CommonMethod#onAppear} instead of this callback.
   *
   * > **NOTE**
   * >
   * > - This callback is triggered before the component layout and rendering process.
   * >
   * > - Modifying the component tree within the callback is prohibited, including initiating animations or altering the
   * > component structure through conditional statements like **if-else**.
   *
   * @param { Callback<void> } callback - Callback function of the **onAttach** event, indicating that the component has
   *     been mounted to the component tree.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAttach(callback: Callback<void>): T;

  /**
   * Triggered when this component is unmounted from the component tree. You are advised to use
   * [onDisAppear]{@link CommonMethod#onDisAppear} instead.
   *
   * @param { Callback<void> } callback - Callback function of the **onDetach** event, indicating that the component has
   *     been unmounted from the component tree.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetach(callback: Callback<void>): T;

  /**
   * Triggered when the component area changes in size or position due to layout updates.
   *
   * This event is not triggered for render attribute changes caused by re-rendering, such as changes to
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}, [offset]{@link CommonMethod#offset},
   * [markAnchor]{@link CommonMethod#markAnchor}, [scale]{@link CommonMethod#scale(value: ScaleOptions)}, or
   * [transform]{@link CommonMethod#transform(value: object)}. In addition, if the component position is altered
   * due to drawing changes, for example, through [bindSheet]{@link CommonMethod#bindSheet}, this event is also not triggered.
   *
   * > **NOTE**
   * >
   * > When a component is bound to both the **onAreaChange** event and the [position]{@link CommonMethod#position}
   * > attribute, the **onAreaChange** event responds to changes in the **position** attribute of type
   * > [Position]{@link Position}, but does not respond to changes in the **position** attribute of type
   * > [Edges]{@link Edges} or [LocalizedEdges]{@link LocalizedEdges}.
   *
   * @param { function } event - Position information of the target element. **oldValue** indicates the width and height
   *     of the target element as well as its coordinates relative to the parent element and the upper left corner of
   *     the page before the change. **newValue** indicates these dimensions and coordinates after the change.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;

  /**
   * Triggered when the component area changes. The interval at which the callback is triggered can be set using
   * expectedUpdateInterval in [AreaChangeOptions]{@link AreaChangeOptions}. This event is triggered only in response
   * to changes in component size or position caused by layout updates.
   *
   * @param { AreaChangeCallback } event - Callback function for the **onAreaChange** event. Triggered when the
   *     component's size or position changes.
   * @param { AreaChangeOptions } [options] - Parameters related to the area change. If not specified,
   *     **expectedUpdateInterval** is treated as **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAreaChange(event: AreaChangeCallback, options?: AreaChangeOptions): T;

  /**
   * Sets the visibility of the component. If **visibility** is not set, the component is displayed by default.
   *
   * @param { Visibility } value - Whether the component is visible. When appropriate, consider using
   *     [conditional rendering](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) as a substitute.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  visibility(value: Visibility): T;

  /**
   * Sets the percentage of the parent container's remaining space that is allocated to the component.
   *
   * @param { number } value - Percentage of the parent container's remaining space that is allocated to the
   *     component.
   *     <br>The value must be greater than or equal to 0, <br>. Default value: **0**.
   *     <br>If this parameter is set to an invalid value, the default value will be used.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  flexGrow(value: number): T;

  /**
   * Sets the percentage of the parent container's shrink size that is allocated to the component.
   * When the parent container is [Column]{@link Column} or [Row]{@link Row}, you must set the size along the main axis.
   *
   * When
   * [getInspectorByKey](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
   * is used to obtain the **flexShrink** attribute, if the node does not have **flexShrink** set, the default value of
   * **1** is returned by default.
   *
   * @param { number } value - Percentage of the parent container's shrink size that is allocated to the component
   *     <br>The value range is all integers, If the parent container is [Column]{@link Column} or [Row]{@link Row}, the
   *     default value is **0**, and the value range is (0, +∞).
   *     If the parent container is [Flex]{@link Flex}, the default value is **1**.
   *     <br>[constraintSize]{@link constraintSize}
   *     limits the component's size range. For Column and Row components without explicit main axis size
   *     specified (through width, height, or size), the default layout behavior (adapt-to-fit child components)
   *     applies, even when constraintSize is configured. In this case, **flexShrink** has no effect.
   *     <br>If this parameter is set to an invalid value, the default value will be used.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  flexShrink(value: number): T;

  /**
   * Sets the base size of the component.
   *
   * @param { number | string } value - Base size of the component in the main axis of the parent container (indicating
   *     that the base size of the component in the main axis is the
   *     original size of the component). Default value: **'auto'**.
   *     <br>For the string type, the value must be a string that can be converted into a number (for example,**'10'**),
   *     a string that includes a length unit (for example, **'10px'**), or the literal string **'auto'**;
   *     percentage-based strings are not supported.
   *     <br>For the number type, the value range is (0, +∞), and the unit is vp.
   *     <br>Invalid values are treated as the default value **'auto'**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  flexBasis(value: number | string): T;

  /**
   * Sets the alignment mode of the child components along the cross axis of the parent container.
   *
   * @param { ItemAlign } value - Alignment mode of the child components along the cross axis of the parent container.
   *     The setting overwrites the **alignItems** setting of the parent container ([Flex]{@link Flex}, [Column]{@link
   *     Column}, [Row]{@link Row}, or [GridRow]{@link GridRow}). [GridCol]{@link GridCol} can have the **alignSelf**
   *     attribute bound to change its own layout along the cross axis.<br>Default value: **ItemAlign.Auto**
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Sets the alignment rule for child components in the **Stack** container. This API only takes effect when the parent
   * container is **Stack**. When used with the [align]{@link align} attribute, **layoutGravity** takes
   * precedence. This attribute supports dynamic configuration via [attributeModifier]{@link attributeModifier}.
   *
   * @param { LocalizedAlignment } alignment - Alignment rule of child components in the **Stack** container.
   *     If an invalid value is passed, the default value is used. Default value: **LocalizedAlignment.CENTER**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  layoutGravity(alignment: LocalizedAlignment): T;

  /**
   * Sets the display priority for the component in the layout container.
   * <br>This parameter is only effective in [Row]{@link Row}, [Column]{@link Column}, and
   * [Flex (single-line)]{@link Flex} container components.
   *
   * @param { number } value - Display priority of the component in the layout container.
   *     <br>The value range is all integers. Default value: **1**.
   *     <br>**NOTE**<br>
   *     The digits after the decimal point are not counted in determining the display priority. That is, numbers in
   *     the [x, x + 1) range are considered to represent the same priority. For example, **1.0** and **1.9**
   *     represent the same priority.
   *     <br>If the **displayPriority** value of all child components is not greater than 1, there is no difference in
   *     priority. When the **displayPriority** value of a child component is greater than 1, a larger value indicates
   *     higher priority. If the parent container does not have enough space, child components with lower priority are
   *     hidden. If child components of a certain priority are hidden, those with an even lower priority are also
   *     hidden.
   *     <br>The value range is all integers.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  displayPriority(value: number): T;

  /**
   * Sets the stacking order of the component.
   *
   * @param { number } value - Stacking order of the component relative to its sibling components in a container. The
   *     components with a larger **zIndex** value cover those with a smaller one. When dynamically changing zIndex does
   *     not involve adding or removing sibling nodes, the components are sorted stably based on their previous stack
   *     level.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  zIndex(value: number): T;

  /**
   * Sets the shared transition animation.
   *
   * @param { string } id - Transition of the shared element. If the same **id** value is configured for a component on
   *     the two pages, this component is considered as a shared element of the pages. If the **id** value is an empty
   *     string, no transition will be applied to the component.
   * @param { sharedTransitionOptions } options - Parameters of the shared element transition animation.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): T;

  /**
   * Sets how elements are laid out along the main axis of the container. This attribute supports dynamic configuration
   * via [attributeModifier]{@link attributeModifier}.
   *
   * @param { Direction } value - How elements are laid out along the main axis of the container.
   *     If this parameter is set to **auto**, the layout is subject to the system language.
   *     The setting does not take effect in the **Column** component.
   *     <br>Default value: **Direction.Auto**.
   *     If the **direction** attribute receives an **undefined** or **null** input parameter, the system will apply the
   *     default value
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  direction(value: Direction): T;

  /**
   * Sets the alignment mode for child elements within the container's drawing area. This attribute can be dynamically
   * set using [attributeModifier]{@link attributeModifier}.
   *
   * @param { Alignment } value - Alignment mode for child elements in container drawing area.
   *     This setting takes effect only in [Stack]{@link Stack},
   *     [FolderStack]{@link FolderStack},
   *     [Shape]{@link Shape},
   *     [Button]{@link Button},
   *     [Marquee]{@link Marquee},
   *     [StepperItem]{@link StepperItem},
   *     [Text]{@link Text},
   *     [TextArea]{@link TextArea},
   *     [TextInput]{@link TextInput},
   *     [RichEditor]{@link RichEditor},
   *     [Hyperlink]{@link Hyperlink},
   *     [SymbolGlyph]{@link SymbolGlyph},
   *     [ListItem]{@link ListItem},
   *     [GridItem]{@link GridItem},
   *     [Scroll]{@link Scroll},
   *     [FlowItem]{@link FlowItem},
   *     [ImageAnimator]{@link ImageAnimator},
   *     [LoadingProgress]{@link LoadingProgress},
   *     [PatternLock]{@link PatternLock},
   *     [Progress]{@link Progress},
   *     [QRCode]{@link QRCode},
   *     [TextClock]{@link TextClock},
   *     [TextTimer]{@link TextTimer},
   *     [MenuItem]{@link StMenuItemack},
   *     [Toggle]{@link Toggle},
   *     [Checkbox]{@link Checkbox}, and
   *     [NodeContainer]{@link NodeContainer}.
   *     For the alignment of the **Marquee**, **Text**, **TextArea**, **TextInput**, **RichEditor**, and **Hyperlink**
   *     components related to text, see
   *     [textAlign]{@link TextAttribute#textAlign}.
   *     If a component does not support the **textAlign** attribute, horizontal text alignment cannot be configured.
   *     <br>Default value: **Alignment.Center**
   *     <br>**NOTE**<br>
   *     This attribute supports the mirroring capability only in the [Stack]{@link Stack} component.
   *     In the **Stack** component, this attribute has the same effect as **alignContent**, which means that it sets
   *     the
   *     alignment mode of child components in the container
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  align(value: Alignment): T;

  /**
   * Sets the alignment mode for child elements within the container's drawing area. The mirroring capability is
   * supported. This attribute can be dynamically set using [attributeModifier]{@link attributeModifier}.
   *
   * @param { Alignment | LocalizedAlignment } alignment - Alignment mode for child elements in container drawing area.
   *     The mirroring capability is supported.
   *     The [LocalizedAlignment]{@link LocalizedAlignment} type is effective only in the following
   *     components: [Shape]{@link Shape},
   *     [Button]{@link Button},
   *     [GridItem]{@link GridItem},
   *     [FlowItem]{@link FlowItem},
   *     [ImageAnimator]{@link ImageAnimator},
   *     [LoadingProgress]{@link LoadingProgress},
   *     [PatternLock]{@link PatternLock},
   *     [Progress]{@link Progress},
   *     [QRCode]{@link QRCode},
   *     [TextClock]{@link TextClock},
   *     [TextTimer]{@link TextTimer},
   *     [StepperItem]{@link StepperItem},
   *     [MenuItem]{@link MenuItem},
   *     [Toggle]{@link MenuItem},
   *     [Checkbox]{@link Checkbox}, and
   *     [ListItem]{@link ListItem}.
   *     For the above components, mirror switching is effective for all except the
   *     [ListItem]{@link ListItem}, component, which behaves
   *     identically to [Alignment]{@link Alignment}. Components where **LocalizedAlignment** is not applicable
   *     will be rendered in accordance with their default behavior.
   *     <br>Default value: **Alignment.Center**, **LocalizedAlignment.CENTER**.
   *     If an invalid value is passed, the default value will be used, indicating center alignment.
   *     <br>**NOTE**<br>
   *     The [Alignment]{@link Alignment} type does not support the mirroring capability. The
   *     [LocalizedAlignment]{@link LocalizedAlignment} type supports mirroring based on the layout direction
   *     (configurable via [direction]{@link direction}) or system language. The **direction** setting takes
   *     precedence over the system language direction. When **direction** is explicitly set to any value other than
   *     **auto**, **LocalizedAlignment** mirroring follows the specified direction. If **direction** is set to **auto**
   *     or not configured, **LocalizedAlignment** mirroring adapts to the system language direction
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  align(alignment: Alignment | LocalizedAlignment): T;

  /**
   * Sets the absolute positioning, which determines the position of a child component relative to the content area of
   * the parent component. Dynamic configuration via [attributeModifier]{@link attributeModifier} is supported.
   *
   * **NOTE**
   * - This API takes effect after the component's size measurement is complete.
   * - When the parent container is [Row]{@link Row},
   * [Column]{@link Column}, or
   * [Flex]{@link Flex}, the child component with **position** set
   * does not occupy any space.
   * - The [Position]{@link position} type uses the upper left corner of the parent's content area as the
   * reference point. The [Edges]{@link Edges} type uses all four sides of the parent's content area as
   * reference, where **top**, **left**, **right**, and **bottom** define the margins between the component and
   * corresponding sides of the parent's content area. The [LocalizedEdges]{@link LocalizedEdges} type
   * provides the same functionality as Edges while supporting layout mirroring.
   * - This attribute is applicable to scenarios where the component's position in the parent container is fixed, for
   * example, where it is pinned to top or floating on the UI.
   * - This attribute is unavailable for a layout container whose width and height are zero.
   * - In [RelativeContainer](docroot://reference/apis-arkui/arkui-ts/ts-container-relativecontainer.md), if the child
   * component has [alignRules]{@link alignRules} set, the **position** attribute will not take effect
   *
   * @param { Position } value - [since 7 - 11]
   * @param { Position | Edges | LocalizedEdges } value - Absolute positioning that determines the child component's
   *     position relative to the parent's content area. The content area of the parent component is calculated by
   *     subtracting the [border]{@link border}, [padding]{@link padding}, and [safeAreaPadding]{@link safeAreaPadding}
   *     values from the parent component's total size. This resulting content area defines the available layout space
   *     for child components. This attribute does not take effect when it is set to an abnormal value. [since 12].
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  position(value: Position | Edges | LocalizedEdges): T;

  /**
   * Sets the anchor for element positioning. This attribute supports dynamic configuration via
   * [attributeModifier]{@link attributeModifier}.
   *
   * @param { Position } value - [since 7 - 11]
   * @param { Position | LocalizedPosition } value - Positioning anchor that offsets an element from the position
   *     specified by [position]{@link position} or [offset]{@link offset}
   *     **.position({x: value1, y: value2}).markAnchor({x: value3, y: value4})** has the same effect as
   *     **.position({x: value1 - value3, y: value2 - value4})**. The same applies to **offset**.
   *     <br>If **.markAnchor({x: value1, y: value2})** is set separately, the effect is the same as that of
   *     **.offset({x: -value1, y: -value2})**.
   *     <br>API version 9 and earlier: The default value is **{x: 0, y: 0}**.
   *     <br>API version 10: no default value.
   *     <br>This attribute does not take effect when it is set to an abnormal value. [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  markAnchor(value: Position | LocalizedPosition): T;

  /**
   * Sets the offset of the component relative to its original position. When **offset** is used in combination with the
   * [position]{@link position} attribute, the **position** attribute takes precedence and the configured offset
   * will not be applied. This attribute supports dynamic configuration via
   * [attributeModifier]{@link attributeModifier}.
   *
   * @param { Position } value - [since 7 - 11]
   * @param { Position | Edges | LocalizedEdges } value - Offset of the component relative to its original layout
   *     position. The **offset** attribute does not affect the layout of the parent container. It adjusts the component
   *     position only during drawing.
   *     If of the [Position]{@link Position} type, this parameter sets the offset relative to the upper
   *     left corner of the component. If of the [Edges]{@link Edges} type, this parameter sets the offset
   *     relative to the four edges of the component. **{x: x, y: y}** has the same effect as **{left: x, top: y}** and
   *     **{right: -x, bottom: -y}**. The [LocalizedEdges]{@link LocalizedEdges} type supports the mirror mode:
   *     **start** is equivalent to **x** with left-to-right scripts and **-x** with right-to-left scripts.
   *     <br>API version 9 and earlier: The default value is **{x: 0, y: 0}**.
   *     <br>Default unit: vp
   *     <br>API version 10: no default value.
   *     <br>This attribute does not take effect when it is set to an abnormal value. [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offset(value: Position | Edges | LocalizedEdges): T;

  /**
   * Sets whether the component responds to user interactions. If **enabled** is not set, the component responds to user
   * interactions by default.
   *
   * @param { boolean } value - Whether the component responds to user interactions, including clicks and touches. The
   *     value **true** means that the component responds to user interactions, and **false** means the opposite.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
   * Sets the alignment rule for child components within the relative container. This attribute only takes effect when
   * the parent container is [RelativeContainer]{@link RelativeContainer},
   * and supports dynamic configuration via [attributeModifier]{@link attributeModifier}.
   *
   * @param { AlignRuleOption } value - Alignment rules in the relative container.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  alignRules(value: AlignRuleOption): T;

  /**
   * Sets the alignment rules in the relative container. This API is valid only when the container is
   * [RelativeContainer]{@link RelativeContainer},.
   * This attribute replaces the original **left** and **right** directional parameters with **start** and **end** to
   * support proper mirroring in right-to-left (RTL) layout modes. It is recommended that you use this attribute for
   * configuring child component alignment rules in relative containers. This attribute supports dynamic configuration
   * via [attributeModifier]{@link attributeModifier}.
   *
   * @param { LocalizedAlignRuleOptions } alignRule - Alignment rules in the relative container.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  alignRules(alignRule: LocalizedAlignRuleOptions): T;

  /**
   * Sets the parameters of the chain in which the component is the head. This attribute takes effect only when the
   * parent container is RelativeContainer. The chain head is the first component in the chain that satisfies the chain
   * formation rules. In a horizontal layout, it starts from the left (or from the right in a mirrored language layout).
   * In a vertical layout, it starts from the top.
   *
   * @param { Axis } direction - indicates direction of the chain
   * @param { ChainStyle } style - indicates style of the chain
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  chainMode(direction: Axis, style: ChainStyle): T;

  /**
   * Sets the aspect ratio of the component, which can be obtained using the following formula: width/height.
   * <br>- If only **width** and **aspectRatio** are set, the height is calculated using the following formula:
   * width/aspectRatio.
   * <br>- If only **height** and **aspectRatio** are set, the width is calculated using the following formula:
   * height x aspectRatio.
   * <br>- If **width**, **height**, and **aspectRatio** are all set, the explicitly set height is ignored, and the
   * effective height is calculated using the following formula: width/aspectRatio.
   * <br>After the **aspectRatio** attribute is set, the component's width and height will be limited by the size of
   * the parent component's content area. The priority of [constraintSize]{@link constraintSize} is higher than that
   * of **aspectRatio**.
   *
   * @param { number } value - Aspect ratio of the component.
   *     The default value varies by API version.
   *     <br>API version 9 and earlier: **1.0**
   *     <br>API version 10: none
   *     <br>**NOTE**<br>
   *     This parameter takes effect only when a valid value greater than 0 is specified. For example, if a **Row**
   *     component has only its width set and does not have any child component, then when **aspectRatio** is not set
   *     or is set to a negative value, the height of the **Row** component is 0
   *     <br>The value range is all integers.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  aspectRatio(value: number): T;

  /**
   * Sets the click feedback effect of the component.
   *
   * @param { ClickEffect | null } value - Click feedback effect of the component.<br>**NOTE**<br>Use **null** to
   *     disable the click feedback effect.<br>Avoid using this feature in scenarios where the component size
   *     dynamically changes.<br>This attribute is not supported when the component cannot trigger universal events.<br>
   *     After the click feedback effect triggers scaling, the touch point may fall outside the control, making the
   *     component unresponsive to gesture events.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clickEffect(value: ClickEffect | null): T;

  /**
   * Sets the click feedback effect of the component. Compared with 
   * [clickEffect]{@link CommonMethod#clickEffect(value: ClickEffect | null)}, this API supports the **undefined** type.
   *
   * @param { Optional<ClickEffect | null> } effect - Click feedback effect of the component.<br>**NOTE**<br>Use
   *     **undefined** or **null** to disable the click feedback effect.<br>Avoid using this feature in scenarios where
   *     the component size dynamically changes.<br>This attribute is not supported when the component cannot trigger
   *     universal events.<br>After the click feedback effect triggers scaling, the touch point may fall outside the
   *     control, making the component unresponsive to gesture events.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  clickEffect(effect: Optional<ClickEffect | null>): T;

  /**
   * Sets whether to enable the default click sound effect for a component. Whether the sound can be played depends on
   * the sound settings of the device. For example, the sound effect is not played in mute mode.
   *
   * @param { boolean | undefined } enabled - Whether to enable the default click sound effect for a component.<br>The
   *     value **true** indicates that the default click sound effect is enabled, and **false** indicates the opposite.
   *     <br>If the value is **undefined**, the default click sound effect is enabled.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  enableClickSoundEffect(enabled: boolean | undefined): T;

  /**
   * In a gesture-based drag scenario, this callback is triggered when a user long-presses a draggable component for
   * more than 500 ms and then moves the finger more than 10 vp. In a mouse-drag scenario, it is triggered when the left
   * mouse button is pressed on a draggable component and moved more than 1 vp.
   *
   * For components that provide drag and drop capabilities by default, a custom **onDragStart** event, if set, is
   * executed and:
   *
   * - If a custom drag preview is returned, it is used in place of the default drag preview.
   * - If drag data is set, it is used in place of the default drag data.
   *
   * The custom drag preview is not supported for dragging selected text in the following components:
   * [Text]{@link text}, [Search]{@link search}, [TextInput]{@link text_input}, [TextArea]{@link text_area},
   * [RichEditor]{@link rich_editor} When **onDragStart** is used with menu preview or any component that provides
   * default drag and drop capabilities, custom content on menu items and the preview cannot be dragged.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 13.
   *
   * @param { function } event - Callback function.<br> **NOTE**<br> **event**: drag event information.<br>
   *     **extraParams**: additional information about the drag event. Its value must be parsed into JSON format.<br>
   *     **CustomBuilder**: component information displayed during dragging. Global builders are not supported.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T;

  /**
   * Triggered when a dragged item enters a valid drop target. This event takes effect only when a listener for the
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)} event is enabled.
   *
   * @param { function } event - Callback function.<br>**NOTE**<br> **event**: drag event information, including the
   *     coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must
   *     be parsed into JSON format.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Triggered when a dragged item moves in a valid drop target. This event takes effect only when a listener for the
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)} event is enabled.
   *
   * @param { function } event - Callback function.<br>**NOTE**<br> **event**: drag event information, including the
   *     coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must
   *     be parsed into JSON format.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragMove(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Triggered when a dragged item leaves a valid drop target. This event takes effect only when a listener for the
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)} event is enabled.
   *
   * @param { function } event - Callback function.<br>**NOTE**<br> **event**: drag event information, including the
   *     coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must
   *     be parsed into JSON format.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * A component bound with this event can serve as a drop target. This callback is triggered when the drag-and-drop
   * action stops within the bounds of this component If **event.setResult()** is not explicitly called in the
   * **onDrop** callback to set the drag-and-drop result, then: For supported components, the result is determined based
   * on the actual data processed; for other components, the system considers the data as successfully received.
   *
   * @param { function } event - Callback function.<br>**NOTE**<br> **event**: drag event information, including the
   *     coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must
   *     be parsed into JSON format.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDrop(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Triggered when a dragged item is dropped on a valid drop target. If you do not explicitly call event.
   * [setResult]{@link DragEvent#setResult}() in **onDrop** to set the result of the drag reception, the
   * system handles it as follows:
   *
   * - If the component being dragged is one that supports drop actions by default, the system's actual data processing
   * result is used.
   * - For other components, the system assumes that the data is received successfully.
   *
   * @param { OnDragEventCallback } eventCallback - Callback function.
   * @param { DropOptions } [dropOptions] - Parameters for the drop process.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T;

  /**
   * Triggered when the dragging of the component bound to the event ends.
   *
   * @param { function } event - Callback function.<br>**NOTE**<br> **event**: drag event information. The coordinates
   *     of the drag point are not included in **onDragEnd**.<br> **extraParams**: additional information about the drag
   *     event. Its value must be parsed into JSON format.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Sets the types of data that can be dropped to the component. If **allowDrop** is not set, the component accepts all
   * data types by default.
   *
   * @param { Array<UniformDataType> } value - Types of data that can be dropped to the component. Since API version 12,
   *     this parameter can be set to **null** to make the component reject all data types. Starting from API version 2
   *     3, this parameter can be set to an application-defined data type string array Array<string> is supported. While
   *     there is no strict format requirement for the string, it should not duplicate the format of standard types in
   *     **UniformDataType**. You are advised to define them based on the principle of being easy to remember and
   *     distinguish. [since 10 - 11]
   * @param { Array<UniformDataType> | null } value - Types of data that can be dropped to the component. Since API
   *     version 12, this parameter can be set to **null** to make the component reject all data types. Starting from
   *     API version 23, this parameter can be set to an application-defined data type string array Array<string> is
   *     supported. While there is no strict format requirement for the string, it should not duplicate the format of
   *     standard types in **UniformDataType**. You are advised to define them based on the principle of being easy to
   *     remember and distinguish. [since 12 - 22]
   * @param { Array<UniformDataType> | null | Array<string> } value - Types of data that can be dropped to the
   *     component. Since API version 12, this parameter can be set to **null** to make the component reject all data
   *     types. Starting from API version 23, this parameter can be set to an application-defined data type string array
   *     Array<string> is supported. While there is no strict format requirement for the string, it should not duplicate
   *     the format of standard types in **UniformDataType**. You are advised to define them based on the principle of
   *     being easy to remember and distinguish. [since 23]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  allowDrop(value: Array<UniformDataType> | null | Array<string>): T;

  /**
   * Sets whether the component is draggable. By default, the component is not draggable.
   *
   * @param { boolean } value - Whether the component is draggable. <br>**true**: The component is draggable.<br>
   *     **false**: The component is not draggable.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  draggable(value: boolean): T;

  /**
   * Sets the preview image displayed during component drag operations.
   *
   * @param { CustomBuilder | DragItemInfo } value - Preview image displayed during component drag operations. It only
   *    applies to [onDragStart]{@link CommonMethod#onDragStart} drag mode.<br>If the component supports drag and drop
   *    and a preview is specified through
   *    [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)},
   *    that specified preview is displayed when the component is dragged. The priority of the background image
   *    returned in [onDragStart]{@link CommonMethod#onDragStart} is lower than that of the preview set in
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}. This means that,
   *    once set, the latter will be used in place of the former. Using
   *    [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) requires offline rendering
   *    and may increase performance overhead and latency. In light of this, you are advised to use
   *    [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} in [DragItemInfo]{@link DragItemInfo} instead.<br> When
   *    an ID of the string type is passed in, the snapshot of the component assigned the ID is used as the preview
   *    image. If the component assigned the ID cannot be found or its [Visibility]{@link Visibility} attribute is set
   *    to **None** or **Hidden**, a snapshot of the current component is used as the preview image. Currently,
   *    snapshots do not support visual effects, such as brightness, shadow, blur, and rotation. [since 11 - 11]
   * @param { CustomBuilder | DragItemInfo | string } value - Preview image displayed during component drag operations.
   *    It only applies to [onDragStart]{@link CommonMethod#onDragStart} drag mode.<br>If the component supports drag
   *    and drop and a preview is specified through
   *    [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)},
   *    that specified preview is displayed when the component is dragged. The priority of the background image
   *    returned in [onDragStart]{@link CommonMethod#onDragStart} is lower than that of the preview set in
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}. This means that,
   *    once set, the latter will be used in place of the former. Using
   *    [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) requires offline rendering
   *    and may increase performance overhead and latency. In light of this, you are advised to use
   *    [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} in [DragItemInfo]{@link DragItemInfo} instead.<br> When
   *    an ID of the string type is passed in, the snapshot of the component assigned the ID is used as the preview
   *    image. If the component assigned the ID cannot be found or its [Visibility]{@link Visibility} attribute is set
   *    to **None** or **Hidden**, a snapshot of the current component is used as the preview image. Currently,
   *    snapshots do not support visual effects, such as brightness, shadow, blur, and rotation. [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dragPreview(value: CustomBuilder | DragItemInfo | string): T;

  /**
   * Sets the drag preview for the component. This API specifically configures or disables the lift animation effect.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { CustomBuilder | DragItemInfo | string } preview - Preview image displayed during component drag
   *     operations. It only applies to [onDragStart]{@link CommonMethod#onDragStart} drag mode.<br>If the component
   *     supports drag and drop and a preview is specified through
   *     [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)},
   *     that specified preview is displayed when the component is dragged. The priority of the background image
   *     returned in [onDragStart]{@link CommonMethod#onDragStart} is lower than that of the preview set in
   *     [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}. This means that,
   *     once set, the latter will be used in place of the former. Using
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) requires offline rendering
   *     and may increase performance overhead and latency. In light of this, you are advised to use
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} in [DragItemInfo]{@link DragItemInfo} instead.<br> When
   *     an ID of the string type is passed in, the snapshot of the component assigned the ID is used as the preview
   *     image. If the component assigned the ID cannot be found or its [Visibility]{@link Visibility} attribute is set
   *     to **None** or **Hidden**, a snapshot of the current component is used as the preview image. Currently,
   *     snapshots do not support visual effects, such as brightness, shadow, blur, and rotation.
   * @param { PreviewConfiguration } config - Additional settings for the drag preview.<br>This parameter is effective
   *     only for previews set using
   *     [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T;

  /**
   * Sets the preview image processing mode, badge count, and interaction behavior during drag operations. The
   * **onItemDragStart** drag mode is not supported.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { DragPreviewOptions } value - Preview image processing mode and badge count during dragging.
   * @param { DragInteractionOptions } options - Interaction behavior for the floating preview image.<br>Default value:
   *     empty [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T;

  /**
   * Triggered when the component enters a state prior to a gesture-based drag operation. For details about the state
   * prior to the drag-and-drop operation, see [PreDragStatus]{@link PreDragStatus}. This API cannot be triggered in
   * mouse-based drag scenarios.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<PreDragStatus> } callback - Callback function.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onPreDrag(callback: Callback<PreDragStatus>): T;

  /**
   * Adds an overlay to this component, which can be text, a custom component, or
   * [ComponentContent]{@link ComponentContent}. The overlay is positioned based on the current component. The overlay
   * is not rendered through the component tree, meaning some APIs (for example,
   * [getRectangleById]{@link @ohos.arkui.componentUtils:componentUtils.getRectangleById}) cannot access components
   * within the overlay.
   *
   * > **NOTE**
   * >
   * > The overlay places the floating layer component above the bound component, blocking all user interactions with
   * > components beneath it. To enable interaction with underlying components, refer to
   * > [Example 2: Setting an Overlay Using a Custom Builder](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-overlay.md#example-2-setting-an-overlay-using-a-custom-builder)
   * > and apply **.hitTestBehavior(HitTestMode.Transparent)** to the outermost component in the overlay builder. This
   * > configuration is particularly crucial for watermark implementations, where the overlay must not interfere with
   * > user interaction with the underlying content.
   *
   * @param { string } value - Content of the overlay, which can be text or a custom component.<br>**NOTE**<br>When the
   *     overlay is a custom component, it cannot obtain focus through sequential keyboard navigation. Using
   *     **CustomBuilder** will cause the overlay content to be destroyed and recreated on page refresh, which may incur
   *     performance overhead. For scenarios with frequent page updates, using **ComponentContent** is
   *     recommended. [since 7 - 9]
   * @param { object } options - Options for positioning the overlay.<br>**NOTE**<br>In versions earlier than API
   *     version 12, **options** is defined as follows:<br>{<br>align?: [Alignment]{@link Alignment}, <br>offset?: {x?:
   *     number, y?: number}<br>} [since 7 - 11]
   * @param { string | CustomBuilder } value - Content of the overlay, which can be text or a custom component.<br>
   *     **NOTE**<br>When the overlay is a custom component, it cannot obtain focus through sequential keyboard
   *     navigation. Using **CustomBuilder** will cause the overlay content to be destroyed and recreated on page
   *     refresh, which may incur performance overhead. For scenarios with frequent page updates, using
   *     **ComponentContent** is recommended. [since 10 - 11]
   * @param { string | CustomBuilder | ComponentContent } value - Content of the overlay, which can be text or a custom
   *     component.<br>**NOTE**<br>When the overlay is a custom component, it cannot obtain focus through sequential
   *     keyboard navigation. Using **CustomBuilder** will cause the overlay content to be destroyed and recreated on
   *     page refresh, which may incur performance overhead. For scenarios with frequent page updates, using
   *     **ComponentContent** is recommended. [since 12]
   * @param { OverlayOptions } options - Options for positioning the overlay.<br>**NOTE**<br>In versions earlier than
   *     API version 12, **options** is defined as follows:<br>{<br>align?: [Alignment]{@link Alignment}, <br>offset?: {
   *     x?: number, y?: number}<br>} [since 12]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T;

  /**
   * Config toolbar for current component.
   *
   * @param { CustomBuilder } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  toolbar(value: CustomBuilder): T;

  /**
   * Creates a linear gradient.
   *
   * @param { object } value - Linear gradient. [since 7 - 17]
   * @param { LinearGradientOptions } value - Linear gradient. [since 18]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  linearGradient(value: LinearGradientOptions): T;

  /**
   * Creates a linear gradient. Compared to 
   * [linearGradient]{@link CommonMethod#linearGradient(value: LinearGradientOptions)}, this API supports the 
   * **undefined** type for the **options** parameter.
   *
   * @param { Optional<LinearGradientOptions> } options - Linear gradient.<br>If **options** is **undefined**, the
   *     linear gradient is disabled.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   * 
   * Anonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { SweepGradientOptions } value [since 18]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
   * @stagemodelonly
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
   * Anonymous Object Rectification.
   *
   * @param { object } value [since 7 - 17]
   * @param { RadialGradientOptions } value [since 18]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radialGradient(options: Optional<RadialGradientOptions>): T;

  /**
   * Sets a path animation for the component.
   *
   * @param { MotionPathOptions } value - Motion path of the component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  motionPath(value: MotionPathOptions): T;

  /**
   * Applies a shadow effect to the component.
   *
   * @param { ShadowOptions } value - Shadow of the component.<br>When the value type is **ShadowOptions**, the blur
   *     radius, shadow color, and offset along the x-axis and y-axis can be specified.<br>When the value type is
   *     **ShadowStyle**, the shadow style can be specified. [since 7 - 9]
   * @param { ShadowOptions | ShadowStyle } value - Shadow of the component.<br>When the value type is
   *     **ShadowOptions**, the blur radius, shadow color, and offset along the x-axis and y-axis can be specified.<br>
   *     When the value type is **ShadowStyle**, the shadow style can be specified. [since 10]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  shadow(value: ShadowOptions | ShadowStyle): T;

  /**
   * Applies a shadow effect to the component. Compared to 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}, the **options** parameter supports the 
   * **undefined** type.
   *
   * @param { Optional<ShadowOptions | ShadowStyle> } options - Shadow of the component.<br>When the value type is
   *     **ShadowOptions**, the blur radius, shadow color, and offset along the x-axis and y-axis can be specified.<br>
   *     When the value type is **ShadowStyle**, the shadow style can be specified.<br>If **options** is **undefined**,
   *     the component reverts to its original effect with no shadow.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  shadow(options: Optional<ShadowOptions | ShadowStyle>): T;

  /**
   * Sets the edge light effect for the component.
   * 
   * <p><strong>NOTE</strong>:
   * <br>The edge light effect creates a glowing light effect along the component's edges,
   * starting from the specified position and extending along the edge.
   * <br>This effect can enhance the visual appeal and highlight important components.
   * </p>
   *
   * @param { EdgeLightParams | undefined } params - Edge light effect parameters.
   *     Defines the position, length, intensity, color, and thickness of the light effect.
   *     If params is undefined, the edge light effect is removed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLight(params: EdgeLightParams | undefined): T;

  /**
   * Defines how the component's content (including the content of it child components) is blended with the existing 
   * content on the canvas (possibly offscreen canvas) below.
   *
   * @param { BlendMode } value - Blend mode.<br>Default value: **BlendMode.NONE**<br>**NOTE**<br>When
   *     **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER** by default, and **BlendApplyType** does
   *     not take effect.
   * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.<br>Default value:
   *     **BlendApplyType.FAST**<br>**NOTE**<br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
   *     <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component is created. The
   *     content of the current component (including child components) is then drawn onto the offscreen canvas, and
   *     blended with the existing content on the canvas below using the specified blend mode. This approach may cause
   *     issues with screen capture for APIs such as
   *     [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)},
   *     [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)},
   *     [brightness]{@link CommonMethod#brightness(value: number)}, and
   *     [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  blendMode(value: BlendMode, type?: BlendApplyType): T;

  /**
   * Defines how the component's content (including the content of it child components) is blended with the existing 
   * content on the canvas (possibly offscreen canvas) below. Compared to 
   * [blendMode<sup>11+</sup>]{@link CommonMethod#blendMode(value: BlendMode, type?: BlendApplyType)}, the **mode** 
   * parameter supports the **undefined** type.
   *
   * @param { Optional<BlendMode> } mode - Blend mode.<br>Default value: **BlendMode.NONE**<br>If **mode** is
   *     **undefined**, the component reverts to its original effect of not enabling offscreen rendering as a whole
   *     before blending with the parent component.<br>**NOTE**<br>When **BlendMode.NONE** is used, the blend effect is
   *     **BlendMode.SRC_OVER** by default, and **BlendApplyType** does not take effect.
   * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.<br>Default value:
   *     **BlendApplyType.FAST**<br>**NOTE**<br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
   *     <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component is created. The
   *     content of the current component (including child components) is then drawn onto the offscreen canvas, and
   *     blended with the existing content on the canvas below using the specified blend mode. This approach may cause
   *     issues with screen capture for APIs such as
   *     [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)},
   *     [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)},
   *     [brightness]{@link CommonMethod#brightness(value: number)}, and
   *     [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T;

  /**
   * Defines how the component's content (including the content of it child components) is blended with the existing 
   * content on the canvas (possibly offscreen canvas) below. This API cannot be used with 
   * [blendMode]{@link CommonMethod#blendMode(value: BlendMode, type?: BlendApplyType)}.
   *
   * @param { BlendMode | Blender } effect - Blend mode or blender type, depending on the parameter type.<br>When the
   *     parameter type is **BlendMode**, it indicates the blend mode.<br>Default value: **BlendMode.NONE**<br>When the
   *     parameter type is **Blender**, it indicates the blender type, used to describe the blending effect.<br>A
   *     **Blender** instance must be created using methods, for example,
   *     [uiEffect.createBrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#uieffectcreatebrightnessblender),
   *     from the **uiEffect** module. Using a custom object as a parameter will not take effect.
   * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.<br>Default value:
   *     **BlendApplyType.FAST**<br>**NOTE**<br>1. When this parameter is set to **BlendApplyType.FAST**, the blend mode
   *     is not implemented offscreen.<br>2. When this parameter is set to **BlendApplyType.OFFSCREEN**, an offscreen
   *     canvas matching the size of the current component is created. The content of the current component (including
   *     its child components) is then drawn onto the offscreen canvas, and blended with the existing content on the
   *     underlying canvas using the specified blend mode.<br>3. For text components, this API does not apply to emoji
   *     expressions when not offscreen.<br>4. Compared with **BlendApplyType.OFFSCREEN**, when this parameter is set to
   *     **BlendApplyType.OFFSCREEN_WITH_BACKGROUND**, the system first copies a canvas with a background as the initial
   *     background color (the canvas for **BlendApplyType.OFFSCREEN** starts with a transparent background) when
   *     creating an offscreen canvas matching the current component's size. The blending operation is then performed on
   *     this base. The two modes are identical in all other functional aspects.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 13 dynamic
   */
  advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T;

  /**
   * Sets whether to clip the areas of child components that extend beyond this component's bounds, that is, whether to 
   * perform clipping based on the edge contour of the parent container If this API is not used, the area of child 
   * components extending beyond the current component's bounds is not clipped by default.
   *
   * @param { boolean } value - Whether to clip the areas of child components that extend beyond the current component's
   *     bounds.<br>The value **true** means to clip the areas of child components that extend beyond the current
   *     component's bounds, and **false** means the opposite.<br>Note: If this parameter is set to **true**, child
   *     components exceeding the current component's bounds will not respond to bound gesture events.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  clip(value: boolean): T;

  /**
   * Sets whether to clip the areas of child components that extend beyond this component's bounds, that is, whether to 
   * perform clipping based on the edge contour of the parent container If this API is not used, the area of child 
   * components extending beyond the current component's bounds is not clipped by default. Compared with 
   * [clip<sup>12+</sup>]{@link CommonMethod#clip(value: boolean)}, this API supports the **undefined** type.
   *
   * @param { Optional<boolean> } clip - Whether to clip the areas of child components that extend beyond the current
   *     component's bounds.<br>Note: If this parameter is set to **true**, child components exceeding the current
   *     component's bounds will not respond to bound gesture events.<br>If **clip** is set to **undefined**, clipping
   *     is disabled, and child components are not clipped.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  clip(clip: Optional<boolean>): T;

  /**
   * Sets whether to clip this component based on the given shape.
   * 
   * > **NOTE** 
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - Clip mode. If the
   *     value is a shape attribute, the component is clipped based on the specified shape. If the value is of the
   *     Boolean type, it specifies whether to clip the component based on the boundaries of the parent container.<br>
   *     Default value: **false**.<br>Note: If the value is a shape attribute, the clipped area can still respond to
   *     bound gesture events. If the value is of the Boolean type, the clipped area will not respond to bound gesture
   *     events.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead CommonMethod#clipShape
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * Clips this component according to the specified shape (which may include position information).
   * 
   * > **NOTE** 
   * >
   * > Different shapes support different ranges of attributes. A path is one type of shape, along with others like 
   * > ellipses and rectangles.
   * >
   * > Path shapes do not support setting width and height attributes. For details about the supported attributes, see 
   * > the specific shape documentation.
   * >
   * > The [fill]{@link @ohos.arkui.shape:CommonShapeMethod#fill} attribute of shapes has no effect on the **clipShape**
   * > API.
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - Shape (which may include position information
   *     ) to clip the current component.<br>Note: The clipped area remains responsive to bound gesture events.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * Clips this component according to the specified shape (which may include position information). Compared with 
   * [clipShape<sup>12+</sup>]{@link CommonMethod#clipShape(value: CircleShape | EllipseShape | PathShape | RectShape)},
   * this API supports the **undefined** type.
   * 
   * > **NOTE** 
   * >
   * > Different shapes support different ranges of attributes. A path is one type of shape, along with others like 
   * > ellipses and rectangles.
   * >
   * > Path shapes do not support setting width and height attributes. For details about the supported attributes, see 
   * > the specific shape documentation.
   * >
   * > The [fill]{@link @ohos.arkui.shape:CommonShapeMethod#fill} attribute of shapes has no effect on the **clipShape**
   * > API.
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - Shape (which may include position
   *     information) to clip the current component.<br>Note: The clipped area remains responsive to bound gesture
   *     events.<br>If the value of **shape** is **undefined**, the current setting will be reset to its default state.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * Adds a mask to the component to indicate the progress.
   *
   * @param { ProgressMask } value - Mask to add to the component, which allows for dynamic adjustment of progress,
   *     maximum value, and color settings.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mask(value: ProgressMask): T;

  /**
   * Adds a mask to the component to indicate the progress. Compared with 
   * [mask<sup>12+</sup>]{@link CommonMethod#mask(value: ProgressMask)}, this API supports the **undefined** type.
   *
   * @param { Optional<ProgressMask> } mask - Mask to add to the component, which allows for dynamic adjustment of
   *     progress, maximum value, and color settings.<br>If **mask** is set to **undefined**, the component to revert to
   *     its original effect without the mask to indicate the progress.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mask(mask: Optional<ProgressMask>): T;

  /**
   * Adds a mask of the specified shape to the component.
   * 
   * > **NOTE** 
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - Mask of the
   *     specified shape to add to the component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead CommonMethod#maskShape
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;

  /**
   * Adds a mask of the specified shape to the component.
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - Mask of the specified shape to add to the
   *     component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * Adds a mask of the specified shape to the component. Compared with 
   * [maskShape<sup>12+</sup>]{@link CommonMethod#maskShape(value: CircleShape | EllipseShape | PathShape | RectShape)},
   * this API supports the **undefined** type.
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - Mask of the specified shape to add
   *     to the component.<br>If the value of **shape** is **undefined**, the current setting will be reset to its
   *     default state.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @test
   */
  /**
   * Key. User can set an key to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   * @test
   */
  key(value: string): T;

  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  id(value: string): T;

  /**
   * Implements an implicit shared element transition.
   *
   * @param { string } id - ID used to set up a binding relationship. Setting **id** to an empty string clears the
   *     binding relationship. The value can be changed to re-establish the binding relationship. One ID can be bound to
   *     only two components, which function as in and out components.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  geometryTransition(id: string): T;

  /**
   * Implements an implicit shared element transition.
   *
   * @param { string } id - ID used to set up a binding relationship. Setting **id** to an empty string clears the
   *     binding relationship. The value can be changed to re-establish the binding relationship. One ID can be bound to
   *     only two components, which function as in and out components.
   * @param { GeometryTransitionOptions } options - Settings of the implicit shared element transition.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  geometryTransition(id: string, options?: GeometryTransitionOptions): T;

  /**
  * Tips control
  *
  * @param { TipsMessageType } message
  * @param { TipsOptions } [options]
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 19 dynamic
  */
  bindTips(message: TipsMessageType, options?: TipsOptions): T;

  /**
   * Popup control
   * <p><strong>NOTE</strong>:
   * <br>The popup can be displayed only after the entire page is fully constructed. Therefore, to avoid incorrect
   * display positions and shapes, do not set this parameter to true while the page is still being constructed.
   * </p>
   *
   * @param { PopupOptions } popup [since 7 - 7]
   * @param { PopupOptions | CustomPopupOptions } popup [since 8]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T;

  /**
   * Menu control
   *
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
   *     action: () => void }[] | CustomBuilder } content - Indicates the content of menu. [since 7 - 10]
   * @param { MenuOptions } options - Indicates the options of menu.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu. [since 11]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu, default is false.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
   * component. Only custom menu items are supported.
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu, Long pressing with a mouse device
   *     is not supported.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T;

  /**
   * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
   * component. Custom or fixed-style menu items are supported.
   *
   * @param { CustomBuilder | Array<MenuElement> } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu. Long pressing with a mouse device
   *     is not supported.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bindContextMenuByResponseType(content: CustomBuilder | Array<MenuElement>, responseType: ResponseType,
      options?: ContextMenuOptions): T;

  /**
   * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
   * component. Only custom menu items are supported. Long pressing with a mouse device is not supported.
   *
   * @param { CustomBuilderT<ResponseType> | undefined } content - Indicates the content of context menu. Undefined
   *     means unbinding.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): T;

  /**
   * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
   * component. Custom or fixed-style menu items are supported. Long pressing with a mouse device is not supported.
   *
   * @param { CustomBuilderT<ResponseType> | Array<MenuElement> | undefined } content - Indicates the content of
   *     context menu. Undefined means unbinding.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | Array<MenuElement> | undefined,
    options?: ContextMenuOptions): T;

  /**
   * Binds a context menu to the component, whose visibility is subject to the isShown settings.
   *
   * @param { boolean } isShown - true means display content, false means hide content, default is false.
   *     <p><strong>NOTE</strong>:
   *     <br>The menu can be displayed properly only when the related page has been constructed. If this parameter is
   *     set
   *     to true before the construction is complete, display issues, such as misplacement, distortion, or failure to
   *     pop
   *     up, may occur. To trigger dragging by long presses is not supported.
   *     </p>
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T;

  /**
   * Binds a context menu to the component, whose visibility is subject to the isShow settings.
   *
   * @param { boolean } isShow - true means display content, false means hide content, default is false.
   *     <p><strong>NOTE</strong>:
   *     <br>The menu can be displayed properly only when the related page has been constructed. If this parameter is
   *     set
   *     to true before the construction is complete, display issues, such as misplacement, distortion, or failure to
   *     pop
   *     up, may occur. Dragging via long press is not supported.
   *     </p>.
   * @param { CustomBuilder | Array<MenuElement> } content - Indicates the content of context menu.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bindContextMenuByIsShow(isShow: boolean, content: CustomBuilder | Array<MenuElement>, options?: ContextMenuOptions): T;

  /**
   * Binds a full-screen modal to the component, which can be displayed when the component is touched. The content of 
   * the modal is customizable. The transition type can be set to none, slide-up and slide-down animation, and opacity 
   * gradient animation.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } isShow - Whether to display the full-screen modal.<br>- **true**: Display the modal.<br>-
   *     **false**: Hide the modal.<br>Since API version 10, this attribute supports two-way binding through
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md).<br>Since API version 18, this attribute supports two
   *     -way binding through
   *     [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   * @param { CustomBuilder } builder - Content of the modal. The root node in **builder** must be unique.
   * @param { ModalTransition } type - System transition mode of the modal.<br> Default value:
   *     **ModalTransition.DEFAULT**.<br>**NOTE**<br> This property has no effect when it is set together with
   *     **transition**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T;

  /**
   * Binds a full-screen modal to the component, which can be displayed when the component is touched. The modal page 
   * content and transition mode are configurable.
   *
   * @param { boolean } isShow - Whether to display the full-screen modal.<br>- **true**: Display the modal.<br>-
   *     **false**: Hide the modal.<br>Since API version 10, this attribute supports two-way binding through
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md).<br>Since API version 18, this attribute supports two
   *     -way binding through
   *     [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   * @param { CustomBuilder } builder - Content of the modal.
   * @param { ContentCoverOptions } options - Optional attributes of the modal.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T;

  /**
   * Binds a sheet to the component, which is displayed when the component is touched.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } isShow - Whether to display the sheet.<br>**true**: Display the sheet.<br>**false**: Hide the
   *     sheet.<br>Since API version 10, this parameter supports two-way binding through
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md).<br>Since API version 18, this attribute supports two
   *     -way binding through [!!](docroot://ui/state-management/arkts-new-binding.md).
   * @param { CustomBuilder } builder - Content of the sheet.
   * @param { SheetOptions } options - Optional attributes of the sheet.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T;

  /**
   * Sets the state-specific styles for the component.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { StateStyles } State-specific styles for the component.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
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
   * Called when the visible area of the component changes. For details about the development guidelines and FAQs, see
   * [Detecting Component Visibility](docroot://ui/arkts-manage-components-visibility.md).
   *
   * > **NOTE**
   * >
   * > - This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   * >
   * > - This API only takes into account the relative clipped area ratio of the component with respect to all ancestor
   * > nodes (up to the window boundary) and its own area.
   * >
   * > - The following calculation scenarios are not supported: clipping by sibling nodes, clipping by siblings of any
   * > ancestor node, window-level occlusion, and component rotation. Examples include layouts using
   * > [Stack]{@link stack}, [z-order control]{@link CommonMethod#zIndex}, and
   * > [rotate]{@link CommonMethod#rotate(value: RotateOptions)} transformations.
   * >
   * > - It does not support visibility change calculations for nodes that are not in the component tree. For example,
   * > preloaded nodes or custom nodes mounted using the
   * > [overlay](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-overlay.md#overlay) capability.
   * >
   * > - This API does not support the [scale]{@link CommonMethod#scale(value: ScaleOptions)} attribute. To enable
   * > support for the [scale]{@link CommonMethod#scale(value: ScaleOptions)} attribute, use
   * > [onVisibleAreaChange<sup>22+</sup>]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean)}
   * > and set **measureFromViewport** to **true**.
   *
   * @param { Array<number> } ratios - Threshold array. Each threshold represents a ratio of the component's visible
   *     area (that is, the area of the component that is visible on screen; only the area within the parent component
   *     is counted) to the component's total area. This callback is invoked when the ratio of the component's visible
   *     area to its total area is greater than or less than the threshold. The value of each threshold ranges from 0.0
   *     to 1.0. If a threshold value is less than 0.0, it is clamped to 0.0; if it is greater than 1.0, it is clamped
   *     to 1.0.<br>**NOTE**<br>When the value is close to the boundary 0 or 1, it is rounded off with a round-off error
   *     not greater than 0.001. For example, 0.9997 is rounded off to 1.
   * @param { function } event - Callback for visible area changes of the component. [since 9 - 12]
   * @param { VisibleAreaChangeCallback } event - Callback for visible area changes of the component. [since 13]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T;

  /**
   * Called when the visible area of the component changes. You can use **measureFromViewport** to set the visible area
   * calculation mode. For details about the development guidelines and FAQs, see
   * [Detecting Component Visibility](docroot://ui/arkts-manage-components-visibility.md).
   *
   * @param { Array<number> } ratios - Threshold array. Each threshold represents the ratio of the component's visible
   *     area to its own total area. This callback is invoked when the ratio of the component's visible area to its
   *     total area is greater than or less than the threshold. The value of each threshold ranges from 0.0 to 1.0. If a
   *     threshold value is less than 0.0, it is clamped to 0.0; if it is greater than 1.0, it is clamped to 1.0.<br>
   *     **NOTE**<br>When the value is close to the boundary 0 or 1, it is rounded off with a round-off error not
   *     greater than 0.001. For example, 0.9997 is rounded off to 1.
   * @param { VisibleAreaChangeCallback } event - Callback for visible area changes of the component.
   * @param { boolean } measureFromViewport - Visible area calculation mode.<br>**true**: considers the parent's
   *     [clip]{@link CommonMethod#clip(value: boolean)} attribute. If [clip]{@link CommonMethod#clip(value: boolean)}
   *     is **false**, areas of the child component beyond the parent's bounds are counted as visible; if
   *     [clip]{@link CommonMethod#clip(value: boolean)} is **true**, such areas are counted as invisible. **false**:
   *     ignores the parent's [clip]{@link CommonMethod#clip(value: boolean)} attribute, treating areas beyond the
   *     parent's bounds as invisible.<br>When **measureFromViewport** is set to **true**, and an ancestor node has the
   *     [scale]{@link CommonMethod#scale(value: ScaleOptions)} attribute set, the component's visible ratio will be
   *     correctly calculated.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean): T;

  /**
   * Configures a callback for the **onVisibleAreaApproximateChange** event, with options to limit the callback
   * execution interval.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 23.
   *
   * @param { VisibleAreaEventOptions } options - Visible area change configuration options.
   * @param { VisibleAreaChangeCallback | undefined } event - Callback for the **onVisibleAreaChange** event. This
   *     callback is triggered when the ratio of the component's visible area to its total area approaches the threshold
   *     set in **options**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): T;

  /**
   * Applies a spherical effect to the component.
   *
   * @param { number } value - Spherical degree of the component.<br>The value ranges from 0 to 1.<br>**NOTE**<br>1. If
   *     the value is **0**, the component remains unchanged. If the value is 1, the component is completely spherical.
   *     Between **0** and **1**, a larger value indicates a higher spherical degree.<br>A value less than 0 is handled
   *     as the value **0**. A value greater than 1 is handled as the value **1**.<br>2. The component's shadow and
   *     outer stroke do not support spherical effects.<br>3. If the value is greater than 0, the component is frozen,
   *     and its content is drawn to the transparent offscreen buffer. To update the component attributes, set the value
   *     to **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sphericalEffect(value: number): T;

  /**
   * Applies a spherical effect to the component. Compared to 
   * [sphericalEffect<sup>12+</sup>]{@link CommonMethod#sphericalEffect(value: number)}, the **effect** parameter 
   * supports the **undefined** type.
   *
   * @param { Optional<number> } effect - Spherical degree of the component.<br>The value ranges from 0 to 1.<br>
   *     **NOTE**<br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is
   *     completely spherical. Between **0** and **1**, a larger value indicates a higher spherical degree.<br>A value
   *     less than 0 is handled as the value **0**. A value greater than 1 is handled as the value **1**.<br>2. The
   *     component's shadow and outer stroke do not support spherical effects.<br>3. If **effect** is set to a positive
   *     number, the component is frozen, and its content is drawn to the transparent offscreen buffer. To update the
   *     component attributes, set **effect** to **0**.<br>If **effect** is **undefined**, the spherical degree reverts
   *     to **0**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  sphericalEffect(effect: Optional<number>): T;

  /**
   * Applies a light up effect to the component.
   *
   * @param { number } value - Light up degree of the component.<br>The value ranges from 0 to 1.<br>If the value is
   *     **0**, the component is dark. If the value is **1**, the component is fully illuminated. Between **0** and
   *     **1**, a larger value indicates higher luminance. A value less than 0 is handled as the value **0**. A value
   *     greater than 1 is handled as the value **1**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lightUpEffect(value: number): T;

  /**
   * Applies a light up effect to the component. Compared to 
   * [lightUpEffect<sup>12+</sup>]{@link CommonMethod#lightUpEffect(value: number)}, the **degree** parameter supports 
   * the **undefined** type.
   *
   * @param { Optional<number> } degree - Light up degree of the component.<br>The value ranges from 0 to 1.<br>If the
   *     value is **0**, the component is dark. If the value is **1**, the component is fully illuminated. Between **0**
   *     and **1**, a larger value indicates higher luminance. A value less than 0 is handled as the value **0**. A
   *     value greater than 1 is handled as the value **1**.<br>If **degree** is **undefined**, the light up degree
   *     reverts to **1**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  lightUpEffect(degree: Optional<number>): T;

  /**
   * Applies a spatial effect to component.
   *
   * @param { SpatialEffectParams | undefined } params - Spatial effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  spatialEffect(params: SpatialEffectParams | undefined): T;

  /**
   * Applies a pixel stretch effect to the component.
   *
   * @param { PixelStretchEffectOptions } options - Pixel stretch effect options.<br>The value includes the length by
   *     which a pixel is stretched toward the four edges.<br>**NOTE**<br>1. If the length is a positive value, the
   *     original image is stretched, and the image size increases. The edge pixels grow by the set length toward the
   *     top, bottom, left, and right edges.<br>2. If the length is a negative value, the original image shrinks as
   *     follows, but the image size remains unchanged:<br>Shrinking mode:<br>(1) The image shrinks from the four edges
   *     by the absolute value of length set through **options**.<br>(2) The image is stretched back to the original
   *     size with edge pixels.<br>3. Constraints on **options**:<br>(1) The length values for the four edges must be
   *     all positive or all negative. That is, the four edges are stretched or shrink at the same time in the same
   *     direction.<br>(2) The length values must all be a percentage or a specific value. Combined use of the
   *     percentage and specific value is not allowed.<br>If the input value is invalid, the image is displayed as {0,
   *     0, 0, 0}, that is, the image remains unchanged.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): T;

  /**
   * Applies a pixel stretch effect to the component. Compared to 
   * [pixelStretchEffect<sup>12+</sup>]{@link CommonMethod#pixelStretchEffect(options: PixelStretchEffectOptions)}, the 
   * **options** parameter supports the **undefined** type.
   *
   * @param { Optional<PixelStretchEffectOptions> } options - Pixel stretch effect options.<br>The value includes the
   *     length by which a pixel is stretched toward the four edges.<br>**NOTE**<br>1. If the length is a positive
   *     value, the original image is stretched, and the image size increases. The edge pixels grow by the set length
   *     toward the top, bottom, left, and right edges.<br>2. If the length is a negative value, the original image
   *     shrinks as follows, but the image size remains unchanged:<br>Shrinking mode:<br>(1) The image shrinks from the
   *     four edges by the absolute value of length set through **options**.<br>(2) The image is stretched back to the
   *     original size with edge pixels.<br>3. Constraints on **options**:<br>(1) The length values for the four edges
   *     must be all positive or all negative. That is, the four edges are stretched or shrink at the same time in the
   *     same direction.<br>(2) The length values must all be a percentage or a specific value. Combined use of the
   *     percentage and specific value is not allowed.<br>If the input value is invalid, the image is displayed as {0,
   *     0, 0, 0}, that is, the image remains unchanged.<br>If **options** is **undefined**, the component reverts to
   *     its original effect with no pixel stretch.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T;

  /**
   * Sets a keyboard shortcut for the component.
   *
   * @param { string | FunctionKey } value - Character key (which can be entered through the keyboard) or
   *     [function key]{@link FunctionKey}.<br>An empty string means to disable the keyboard shortcut.<br>
   * @param { Array<ModifierKey> } keys - Modifier keys.<br>This parameter can be left empty only when **value** is set
   *     to a [function key]{@link FunctionKey}.<br>
   * @param { function } [action] - Callback for a custom event after the keyboard shortcut is triggered.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T;

  /**
   * Sets whether to enable accessibility grouping.
   *
   * @param { boolean } value - set group with accessibility, default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets whether to enable accessibility grouping.
   *
   * @param { boolean } value - set group with accessibility, default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility, default value is
   *     false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the accessibility text.
   *
   * @param { string } value - set accessibility text, default value is "".
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityText(value: string): T;

  /**
   * Sets the next component to receive focus during screen reader navigation.
   * @param { string } nextId - [Unique ID]{@link CommonMethod#id} of the next component to receive focus.
   *     <br>If the ID does not correspond to any component, the setting is ignored.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityNextFocusId(nextId: string): T;

  /**
   * Sets the initial screen reader focus on the page.
   * @param { boolean } focus - Initial screen reader focus on the page. The value **true** means the component is the
   *     <br>default initial focus for screen readers on the current page. Other values are ignored.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDefaultFocus(focus: boolean): T;

  /**
   * Sets the same-page mode for the current component and its host application.
   * @param { AccessibilitySamePageMode } pageMode - Same-page mode for the cross-process embedded component
   *     <br>and the host application.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T;

  /**
   * Sets whether the accessibility node triggers automatic screen scrolling. When no focusable components are visible
   * <br>on the current page within a container, this setting determines whether automatic scrolling is initiated.
   * @param { boolean } isTriggerable - Whether the component triggers automatic scrolling for screen readers when the
   *     <br>current page has no focusable components.
   *     <br>**true**: The component triggers automatic scrolling.
   *     <br>**false**: The component does not trigger automatic scrolling.
   *     <br>**undefined**: The default settings are restored.
   *     <br>Default value: **true**
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityScrollTriggerable(isTriggerable: boolean): T;

  /**
   * Sets the accessibility text.
   * 
   * <p><strong>NOTE</strong>
   * If a component has both text content and accessibility text, only the accessibility text is announced.
   * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
   * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
   * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
   * </p>
   *
   * @param { Resource } text - set accessibility text
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityText(text: Resource): T;

  /**
   * Sets the role type of the accessibility component, which affects how the component is announced by screen readers.
   * @param { AccessibilityRoleType } role - Role of the component as announced by screen readers (for example, button or
   *     <br>chart). You can define custom roles.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityRole(role: AccessibilityRoleType): T;

  /**
   * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
   *
   * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onAccessibilityFocus(callback: AccessibilityFocusCallback): T;

  /**
   * Register accessibility action intercept callback,
   * when accessibility action is to be executed,the callback will be executed
   *
   * @param { AccessibilityActionInterceptCallback } callback - accessibility action intercept callback function
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback): T;

  /**
   * Sets the text hint for the component, which can be queried by accessibility services.
   *
   * @param { string } value - Text hint for the component, which can be queried by accessibility services.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityTextHint(value: string): T;

  /**
   * Sets the accessibility description.
   * <br>This attribute provides additional context and explanation for the component, helping users understand its
   * <br>functionality and purpose.
   *
   * @param { string } value - Accessibility description. You can specify further explanation of the current component,
   *     <br>such as potential operation consequences that cannot be inferred from component attributes or accessibility text.
   *     <br>If a component contains both text content and the accessibility description, the screen reader announces the
   *     <br>text first, followed by the accessibility description, when the component is selected.
   *     <br>Default value: **""**
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  accessibilityDescription(value: string): T;

  /**
   * Sets the accessibility description, with support for resource references using Resource.
   * <br>This attribute provides additional context and explanation for the component, helping users understand its
   * <br>functionality and purpose.
   * <p><strong>NOTE</strong>:
   * <br>Reference resource of the accessibility description. You can specify further explanation
   * <br>of the current component, for example, possible operation consequences, especially those that
   * <br>cannot be learned from component attributes and accessibility text. If a component contains
   * <br>both text information and the accessibility description, the text is read first and then the
   * <br>accessibility description, when the component is selected.</p>
   *
   * @param { Resource } description - set description of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  accessibilityLevel(value: string): T;

  /**
   * Sets an accessibility virtual child node. For custom drawing components, a **CustomBuilder** is passed, which is
   * <br>used to provide accessibility information. The components within the **CustomBuilder** are only used for layout
   * <br>and not for display.
   *
   * @param { CustomBuilder } builder - Accessibility virtual node. Pass a custom builder to the custom drawing component.
   *     <br>The components within the custom builder are used for layout only and are not visually rendered. When
   *     <br>accessibility services retrieve node information, the node information from the custom builder is returned.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  accessibilityVirtualNode(builder: CustomBuilder): T;

  /**
   * Sets the checked state for the accessibility node. This API is used in multi-select scenarios and only affects
   * <br>component state announcements in screen reading scenarios.
   *
   * @param { boolean } isCheck - Whether the current component is selected.
   *     <br>**true**: The component is selected.
   *     <br>**false**: The component is not selected.
   *     <br>**undefined**: The component determines its own selected state.
   *     <br>Default value: **undefined**
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityChecked(isCheck: boolean): T;

  /**
   * Sets the checked state for the accessibility node. This API is used in single-select scenarios and only affects
   * <br>component state announcements in screen reading scenarios.
   *
   * @param { boolean } isSelect - Whether the current component is selected.
   *     <br>**true**: The component is selected.
   *     <br>**false**: The component is not selected.
   *     <br>**undefined**: The component determines its own selected state.
   *     <br>Default value: **undefined**
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilitySelected(isSelect: boolean): T;

  /**
   * Sets how the component content is obscured.
   *
   * @param { Array<ObscuredReasons> } reasons - How the component content is obscured.<br>This API is only available
   *     for the [Image]{@link ./image}<!--Del-->, [FormComponent]{@link ./form_component}<sup>12+</sup>,<!--DelEnd--> and
   *     [Text]{@link ./text} components.<br>**NOTE**<br>To obscure an image when it is being loaded, you must set the width
   *     and height of the **Image** component.<br>Obscuring is not available for **Text** components that have child
   *     components or have any [styled string]{@link ./styled_string} configured.
   *     <br>Default value: [].
   * @returns { T } Returns the current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  obscured(reasons: Array<ObscuredReasons>): T;

  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
   reuse(options: ReuseOptions): T;

  /**
   * Sets how the final state of the component's content is rendered during its width and height animation process. If 
   * it is not set via this API, the content size at the end of the animation is maintained, and the content always 
   * remains top-left aligned with the component.
   *
   * @param { RenderFit } fitMode - Sets how the final state of the component's content is rendered during its width and
   *     height animation process.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  renderFit(fitMode: RenderFit): T;

  /**
   * Sets how the final state of the component's content is rendered during its width and height animation process. If 
   * it is not set via this API, the content size at the end of the animation is maintained, and the content always 
   * remains top-left aligned with the component. Compared to 
   * [renderFit]{@link CommonMethod#renderFit(fitMode: RenderFit)}, this API supports the **undefined** type for the 
   * **fitMode** parameter.
   *
   * @param { Optional<RenderFit> } fitMode - Sets how the final state of the component's content is rendered during its
   *     width and height animation process.<br>If **fitMode** is set to **undefined**, the default value is used, which
   *     is equivalent to **RenderFit.TOP_LEFT**.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<T> } modifier
   * The if/else syntax is supported.
   * You need a custom class to implement the AttributeModifier API.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  attributeModifier(modifier: AttributeModifier<T>): T;

  /**
   * Creates a gesture modifier.
   *
   * >  **NOTE**
   * >
   * >  **gestureModifier** does not support custom components.
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * @param { GestureModifier } modifier for dynamically setting gestures bound to the current component. The if/else syntax is supported.
   *    modifier: gesture modifier. You need a custom class to implement the GestureModifier API.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  gestureModifier(modifier: GestureModifier): T;

  /**
   * Sets the background brightness of the component.
   *
   * @param { BackgroundBrightnessOptions } params - Parameters for setting the background brightness.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBrightness(params: BackgroundBrightnessOptions): T;

  /**
   * Sets the background brightness of the component. Compared to 
   * [backgroundBrightness<sup>12+</sup>]{@link CommonMethod#backgroundBrightness(params: BackgroundBrightnessOptions)},
   * the **options** parameter supports the **undefined** type.
   *
   * @param { Optional<BackgroundBrightnessOptions> } options - Parameters for setting the background brightness.<br>If
   *     **options** is **undefined**, the background reverts to its default state with no brightness effect.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T;

  /**
   * Binds a custom gesture determination callback to the component. When the gesture is about to succeed, the user-
   * defined callback is triggered to obtain the result.
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T;

  /**
   * Binds a custom gesture recognizer judgment callback to the component.
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this
   *     component will be accepted.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T;

  /**
   * Binds a custom gesture recognizer judgment callback to the component.
   *
   * The **exposeInnerGesture** parameter indicates whether to expose gestures from built-in components within ArkUI
   * system composite components to developers. When this parameter is set to **true**, these internal gestures are
   * exposed.
   *
   * For scenarios where exposure of internal gestures is not required, use the original
   * [onGestureRecognizerJudgeBegin]{@link CommonMethod#onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback)}
   * API. Use this API with **exposeInnerGesture** set to **true** only when internal gesture exposure is necessary.
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this
   *     component will be accepted.
   * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal
   *     gestures.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T;

  /**
   * Provides a callback to set the parallel relationship between built-in gestures and gestures of other components in
   * the response chain. The corresponding C API is
   * [setInnerGestureParallelTo](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativegestureapi-1.md#setinnergestureparallelto).
   *
   * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is
   *     doing touch test.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T;

  /**
   * Provides a callback to set the parallel relationship between gestures of the current component and gestures of
   * other components in the response chain. This callback uses an asynchronous callback. The corresponding C API is
   * [setGestureParallelTo](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativegestureapi-3.md#setgestureparallelto).
   *
   * @param { ShouldRecognizerParallelWithCallback } callback - A callback instance used when a component is doing
   *     touch test.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback): T;

  /**
   * Sets whether the component exclusively handles events.
   *
   * @param { boolean } monopolize - Whether the component exclusively handles events. true: The component exclusively handles events. false: The component does not exclusively handle events.
   *    Default value: false.
   * NOTE
   * 1. If a component is exclusively handling events after a finger is pressed on it, and another finger is pressed before the first finger is lifted,
   * the component continues to exclusively handle events while interacting with the second finger. The same case applies to a third and more fingers.
   * 2. If a component is bound through [parallelGesture]{@link parallelGesture(gesture: GestureType, mask?: GestureMask)} to a gesture, for example, pan gesture, that can also be triggered by its child component,
   * and the child component has event monopolization and is the first to respond, then the parent will not respond to the gesture.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  monopolizeEvents(monopolize: boolean): T;

  /**
   * Binds a custom event interception callback to a component.
   *
   * @param { Callback<TouchEvent, HitTestMode> } callback - Custom event interception callback.
   *    Triggered during hit testing and sets the hit test behavior for the component based on the return value.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T;

  /**
   * Triggered when the component size changes due to layout updates.
   *
   * > **NOTE**
   * >
   * > 1. This API is triggered upon layout changes. Due to calculation precision limitations, the return value may
   * > deviate slightly from the actual physical size.
   * >
   * > 2. **onSizeChange** is a synchronous callback triggered during the layout process. Directly modifying state
   * > variables within **onSizeChange** may cause the changes to be included in the animation closure. Specifically,
   * > animations compare the layout state before the animation starts with the state after the animation closure is
   * > executed. If the **onSizeChange** callback is triggered synchronously during the pre-animation layout phase, the
   * > changes made in this callback will be processed as part of the animation, along with the changes in the animation
   * > closure. To avoid this issue, you can use [setTimeout]{@link api/@internal/ets/global:setTimeout} or
   * > [postFrameCallback]{@link @ohos.arkui.UIContext:UIContext#postFrameCallback} (with a 0 ms delay) inside
   * > **onSizeChange** to defer the UI processing logic to asynchronous execution.
   *
   * @param { SizeChangeCallback } event - Size of the component before and after the change.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onSizeChange(event: SizeChangeCallback): T;

   /**
   * Sets the drawing level for the accessibility focus highlight (green frame).
   *
   * @param { FocusDrawLevel } drawLevel - Drawing level for the accessibility focus highlight frame.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T;

  /**
   * Specifies whether gesture recognizers participate in subsequent processing after
   * [hit testing](docroot://ui/arkts-interaction-basic-principles.md#hit-testing) completes.
   *
   * @param { TouchTestDoneCallback } callback - Callback to specify gesture recognizer participation in subsequent
   *     processing. Triggered after [hit testing](docroot://ui/arkts-interaction-basic-principles.md#hit-testing)
   *     completes but before user gesture recognition begins.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onTouchTestDone(callback: TouchTestDoneCallback): T;

  /**
   * Triggered after events and gestures on the current node and higher-priority nodes are collected. This callback can
   * be used to intervene in the collection results of events and gestures. This callback uses an asynchronous callback.
   *
   * @param { GestureCollectInterceptCallback } callback - A callback instance used when the component does a touch
   *     test.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onGestureCollectIntercept(callback: GestureCollectInterceptCallback): T;

  /**
   * The component bound to this event can be used as a drag-response target with hover detection capability. When the
   * dragged object hovers over the target, the callback is triggered. Only one target can become the responder at any
   * time, and child components always have higher response priority.
   *
   * For details about the hover detection triggering mechanism and usage, see
   * [Spring Loading (Hover Detection) Support](docroot://ui/arkts-common-events-drag-event.md#spring-loading-hover-detection-support).
   *
   * @param { Callback<SpringLoadingContext> | null } callback - Hover detection callback. If the value is **null**,
   *     hover detection is disabled.
   * @param { DragSpringLoadingConfiguration } [configuration] - Hover detection configuration. If the value is
   *     **undefined**, the default value of
   *     [DragSpringLoadingConfiguration]{@link @ohos.arkui.dragController:dragController#DragSpringLoadingConfiguration}
   *     is used.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDragSpringLoading(callback: Callback<SpringLoadingContext> | null, configuration?: DragSpringLoadingConfiguration): T;

  /**
   * Set whether the component enables the ability to invert colors.
   * This interface needs to be set as the first attribute of the component.
   *
   * @param { boolean } value - value indicates whether the component enables the ability to invert colors.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  allowForceDark(value: boolean): T;

  /**
   * Sets the system material for a component. Different system materials have different attribute effects. This API 
   * affects the background color ([backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}), border 
   * color ([borderColor]{@link CommonMethod#borderColor}), border width ([borderWidth]{@link CommonMethod#borderWidth}
   * ), and shadow ([shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}). You are advised not to use
   * this API together with the aforementioned APIs. For details about the example, see 
   * [Setting the System Material](docroot://reference/apis-arkui/arkts-apis-uimaterial-sys.md#example-1-setting-the-system-material).
   *
   * @param { SystemUiMaterial | undefined } material - System material object of the component. Setting it to
   *     **undefined** will make the component return to the no-material effect.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @form
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  systemMaterial(material: SystemUiMaterial | undefined): T;

  /**
   * Called when component is focused, the return value indicates whether keyboard is needed.
   *
   * @param { OnNeedSoftkeyboardCallback | undefined } onNeedSoftkeyboardCallback
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  onNeedSoftkeyboard(onNeedSoftkeyboardCallback: OnNeedSoftkeyboardCallback | undefined): T;
  /**
   * Sets the state description of a component for broadcasting, which clearly describes the real-time state of the
   * <br>component in screen reading scenarios. Screen reader will broadcast the state description first.
   *
   * @param { string | Resource | undefined } description - Text to be broadcasted for the current state of the component.
   *     <br>If the text contains more than 1000 characters, the first 1000 characters will be broadcasted.
   *     <br>**undefined**: The text is empty by default.
   * @returns { T } return component instance who call the method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityStateDescription(description: string | Resource | undefined): T;
  /**
   * Provides optional parameters for setting accessibility operations of a component, which is used to restrict or
   * <br>modify the operations initiated by accessibility applications such as the screen reader.
   *
   * @param { AccessibilityActionOptions | undefined } option - Parameter of the accessibility operation, which is used
   *     <br>to restrict or modify the sliding behavior in the accessibility operation.
   *     <br>The **scrollStep** parameter in **AccessibilityActionOptions** is used to set the number of sliding steps in
   *     <br>the accessibility operation. When the value is **undefined**, **scrollStep** is processed as **1**.
   * @returns { T } return component instance who call the method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityActionOptions(option: AccessibilityActionOptions | undefined): T;

  /**
       * Sets the next component to receive focus during screen reader navigation, with optional detailed parameters.
       * The detailed parameters can provide additional behavior for the accessibility focus transition.
       * @param { string } nextId - [Unique ID]{@link CommonMethod#id} of the next component to receive focus.
       *     <br>If the ID does not correspond to any component, the setting is ignored.
       * @param { AccessibilityNextFocusParams | undefined } nextFocusParams - Detailed parameters for accessibility next
       *     <br>focus processing, used to configure whether to search for focusable nodes among descendant nodes.
       *     <br>When the value is **undefined**, no detailed parameters are configured and no focus search is performed
       *     <br>among descendant nodes.
       * @returns { T }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @form
       * @atomicservice
       * @since 26.0.0 dynamic
       */
  accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T;

  /**
   * Enable or disable specific smart gesture shortcuts, and set response priorities for them.
   *
   * @param { SmartGestureShortcutOptions } [options] - Options for configuring smart gesture shortcuts.
   * @returns { T } return component instance who call the method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T;

  /**
   * Sets the custom accessibility operations of the component, allowing developers to set an array of custom actions
   * <br>for binding custom operation callbacks to components by operation name.
   *
   * @param { Array<AccessibilityCustomAction> | undefined } actions - Array of custom accessibility operations, where
   *     <br>each operation contains an operation name and a callback, used for binding custom operation callbacks to
   *     <br>components by operation name.
   *     <br>**NOTE**: The array supports a maximum of 16 entries; any excess will not take effect.
   *     <br>When the value is **undefined**, no custom operations are set.
   * @returns { T } return component instance who call method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): T;

  /**
   * Enable or disable specific smart gesture shortcuts, and set response priorities for them.
   *
   * @param { SmartGestureShortcutOptions } [options] - Options for configuring smart gesture shortcuts.
   * In SmartGestureShortcutOptions:
   *   enabled is used to configure whether the component responds to smart gestures.
   *   selectable is used to set whether the component displays and retains a selected state after being selected by a smart gesture operation.
   *   action is used to set the smart gesture response priority. Currently, only GestureShortcut.PRIMARY is supported, which makes the component the primary response target for smart gesture operations such as swiping and tapping.
   * It is recommended to explicitly pass these parameters to avoid inconsistencies caused by default configurations. For default configuration handling, please refer to [SmartGestureShortcutOptions]{@link SmartGestureShortcutOptions}.
   * @returns { T } return component instance who call the method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  smartGestureShortcut(options?: SmartGestureShortcutOptions): T;

  /**
   * Set the component's inspector label which only display on DevEco Studio.
   * @param { string | undefined } label - the inspector label.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  inspectorLabel(label: string | undefined): T;

  /**
   * Sets whether to component is double-sided.
   *
   * @param { Optional<boolean> } value - Whether to draw both sides of component.
   *     **true**: Both front and back sides are visible (default).
   *     **false**: Only to front side is visible, to back side is hidden when rotated.
   *     When **value** is **undefined**, the component reverts to default double-sided setting (**true**).
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  doubleSided(value: Optional<boolean>): T;
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
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 */
interface CommonInterface {
  /**
   * Constructor.
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  (): CommonAttribute;
}

/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare const CommonInstance: CommonAttribute;

/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
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
 * Defines the CustomBuilder type with parameter.
 *
 * @param { T } t - the parameter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare type CustomBuilderT<T> = (t: T) => void;

/**
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 12.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * > **NOTE**
 * >
 * > When both **align** and **offset** are set, the effects are combined. The overlay is first aligned relative to the
 * > component and then offset from its current upper left corner.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OverlayOptions {

  /**
   * Alignment of the overlay relative to the component.
   *
   * Default value: **TopStart**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  align?: Alignment;

  /**
   * Offset of the overlay from the upper left corner. By default, the overlay is in the upper left corner of the
   * component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  offset?: OverlayOffset;
}

/**
 * Offset of the overlay from the upper left corner. By default, the overlay is in the upper left corner of the
 * component.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 12.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OverlayOffset {

  /**
   * Horizontal offset.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number;

  /**
   * Vertical offset.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare type FractionStop = [ number, number ];

/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @systemapi
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @systemapi
   * @form
   * @since 9 dynamic
   */
  constructor();

  /**
   * Sets the stroke color.
   * If this attribute is not set, the component does not have any stroke.
   * If the value is invalid, no stroke will be drawn.
   *
   * @param { ResourceColor } value - Stroke color.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the stroke color.
   * If this attribute is not set, the component does not have any stroke.
   * If the value is invalid, no stroke will be drawn.
   *
   * @param { ResourceColor } value - Stroke color.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the stroke color.
   * If this attribute is not set, the component does not have any stroke.
   * If the value is invalid, no stroke will be drawn.
   *
   * @param { ResourceColor } value - Stroke color.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the stroke color.
   * If this attribute is not set, the component does not have any stroke.
   * If the value is invalid, no stroke will be drawn.
   *
   * @param { ResourceColor } value - Stroke color.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  stroke(value: ResourceColor): T;

  /**
   * Sets the color of the fill area.
   * An invalid value is handled as the default value.
   * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the color of the fill area.
   * An invalid value is handled as the default value.
   * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the color of the fill area.
   * An invalid value is handled as the default value.
   * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the color of the fill area.
   * An invalid value is handled as the default value.
   * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
   *
   * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  fill(value: ResourceColor): T;

  /**
   * Sets the offset of the start point for drawing the stroke.
   * An invalid value is handled as the default value.
   *
   * @param { number | string } value - Offset of the start point for drawing the stroke.
   * Default value: 0
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the offset of the start point for drawing the stroke.
   * An invalid value is handled as the default value.
   *
   * @param { number | string } value - Offset of the start point for drawing the stroke.
   * Default value: 0
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the offset of the start point for drawing the stroke.
   * An invalid value is handled as the default value.
   *
   * @param { number | string } value - Offset of the start point for drawing the stroke.
   * Default value: 0
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the offset of the start point for drawing the stroke.
   * An invalid value is handled as the default value.
   *
   * @param { number | string } value - Offset of the start point for drawing the stroke.
   * Default value: 0
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Sets the cap style of the stroke.
   *
   * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the cap style of the stroke.
   *
   * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the cap style of the stroke.
   *
   * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the cap style of the stroke.
   *
   * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Sets the join style of the stroke.
   * This attribute does not work for the Circle component, which does not have corners.
   *
   * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the join style of the stroke.
   * This attribute does not work for the Circle component, which does not have corners.
   *
   * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the join style of the stroke.
   * This attribute does not work for the Circle component, which does not have corners.
   *
   * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the join style of the stroke.
   * This attribute does not work for the Circle component, which does not have corners.
   *
   * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the stroke opacity.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Stroke opacity. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the stroke opacity.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Stroke opacity. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the stroke opacity.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Stroke opacity. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the stroke opacity.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Stroke opacity. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * Sets the opacity of the fill area.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the opacity of the fill area.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the opacity of the fill area.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the opacity of the fill area.
   * The value range is [0.0, 1.0].
   * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
   * Any other value evaluates to the value 1.0.
   *
   * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the stroke width.
   * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
   *
   * @param { Length } value - Stroke width.
   * The value must be greater than or equal to 0.
   * Default value: 1.
   * Default unit: vp.
   * An invalid value is handled as the default value.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the stroke width.
   * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
   *
   * @param { Length } value - Stroke width.
   * The value must be greater than or equal to 0.
   * Default value: 1.
   * Default unit: vp.
   * An invalid value is handled as the default value.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the stroke width.
   * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
   *
   * @param { Length } value - Stroke width.
   * The value must be greater than or equal to 0.
   * Default value: 1.
   * Default unit: vp.
   * An invalid value is handled as the default value.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the stroke width.
   * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
   *
   * @param { Length } value - Stroke width.
   * The value must be greater than or equal to 0.
   * Default value: 1.
   * Default unit: vp.
   * An invalid value is handled as the default value.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  strokeWidth(value: Length): T;

  /**
   * Specifies whether anti-aliasing is enabled.
   *
   * @param { boolean } value - Whether anti-aliasing is enabled.
   * true: Anti-aliasing is enabled.
   * false: Anti-aliasing is disabled.
   * Default value: true
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Specifies whether anti-aliasing is enabled.
   *
   * @param { boolean } value - Whether anti-aliasing is enabled.
   * true: Anti-aliasing is enabled.
   * false: Anti-aliasing is disabled.
   * Default value: true
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Specifies whether anti-aliasing is enabled.
   *
   * @param { boolean } value - Whether anti-aliasing is enabled.
   * true: Anti-aliasing is enabled.
   * false: Anti-aliasing is disabled.
   * Default value: true
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies whether anti-aliasing is enabled.
   *
   * @param { boolean } value - Whether anti-aliasing is enabled.
   * true: Anti-aliasing is enabled.
   * false: Anti-aliasing is disabled.
   * Default value: true
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  antiAlias(value: boolean): T;

  /**
   * Sets stroke dashes.
   * The value must be greater than or equal to 0. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Stroke dashes.
   * Default value: []
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets stroke dashes.
   * The value must be greater than or equal to 0. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Stroke dashes.
   * Default value: []
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets stroke dashes.
   * The value must be greater than or equal to 0. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Stroke dashes.
   * Default value: []
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets stroke dashes.
   * The value must be greater than or equal to 0. Invalid values are treated as the default value.
   *
   * @param { Array<any> } value - Stroke dashes.
   * Default value: []
   * Default unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
 * @FaAndStageModel
 * @since 9
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 9
   */
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 9
   */
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 9
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 9
   */
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  repeating?: boolean;
}

/**
 * Enumerates the directions of pixel rounding at the component level.
 *
 * @interface PixelRoundPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PixelRoundPolicy {
  /**
   * Rounding alignment for the component's start edge.
   * <br>Invalid values are rounded using the round-half-up rule.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  start?: PixelRoundCalcPolicy;

  /**
   * Rounding alignment for the component's top edge.
   * <br>Invalid values are rounded using the round-half-up rule.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  top?: PixelRoundCalcPolicy;

  /**
   * Rounding alignment for the component's end edge.
   * <br>Invalid values are rounded using the round-half-up rule.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  end?: PixelRoundCalcPolicy;

  /**
   * Rounding alignment for the component's bottom edge.
   * <br>Invalid values are rounded using the round-half-up rule.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LinearGradientBlurOptions {
  /**
   * Gradient blur stops. The value is a set of binary arrays, each of which indicates [blur degree, blur position] and 
   * consists of numbers ranging from 0 to 1 (those less than 0 are treated as **0**, and those greater than 1 are 
   * treated as **1**). The blur positions in the arrays must be in strict ascending order. Noncompliance will be 
   * logged. For the blur settings to take effect, the number of binary arrays must be greater than or equal to 2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  fractionStops: FractionStop[];
  /**
   * Gradient blur direction.
   * 
   * Default value:
   * 
   * GradientDirection.Bottom
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  direction: GradientDirection;
}

/**
 * Describes the coordinates of the motion blur anchor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MotionBlurAnchor {
  /**
   * X-coordinate of the anchor. The value range is [0.0, 1.0].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;
  /**
   * Y-coordinate of the anchor. The value range is [0.0, 1.0].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;
}

/**
 * Defines motion blur options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MotionBlurOptions {
  /**
   * Blur radius. The value range is [0.0, ∞). You are advised to set it to a value less than 1.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;
  /**
   * Coordinates of the motion blur anchor. They must be the same as those of the animation scaling anchor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: MotionBlurAnchor;
}

/**
 * Provides the border information of the child component.
 *
 * @interface LayoutBorderInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead Measurable/Layoutable
 */
declare interface LayoutBorderInfo {
  /**
   * Edge widths in different directions of the component.
   *
   * @type { EdgeWidths }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead getBorderWidth
   */
  borderWidth: EdgeWidths;

  /**
   * Margin values in different directions of the component.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead getMargin
   */
  margin: Margin,

  /**
   * Padding values in different directions of the component.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead getPadding
   */
  padding: Padding,
}

/**
 * Provides the child component layout information.
 *
 * @interface LayoutInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead Layoutable
 */
declare interface LayoutInfo {
  /**
   * Position coordinates of the child component.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Layoutable
   */
  position: Position,

  /**
   * Constraint size of the child component.
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Layoutable
   */
  constraint: ConstraintSizeOptions,
}

/**
 * Defines the options for the AreaChangeEvent.
 * 
 * @typedef AreaChangeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface AreaChangeOptions {

  /**
   * The value of expectedUpdateInterval indicates the desired update interval (ms).
   * 
   * @type { ?int }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  expectedUpdateInterval?: int;
  }

/**
 * Callback type for the component area change event.
 *
 * @param { Area } oldValue - Information before the area change, including the width, height, coordinates relative to
 *     the parent element, and position coordinates of the upper-left corner in the current window coordinate system.
 * @param { Area } newValue - Information after the area change, including the width, height, coordinates relative to
 *     the parent element, and position coordinates of the upper-left corner in the current window coordinate system.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type AreaChangeCallback = (oldValue: Area, newValue: Area) => void;

/**
 * Sub component info passed from framework when layout and measure happens.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead Measurable/Layoutable
 */
declare interface LayoutChild {
  /**
   * Sub component name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  name: string,

  /**
   * Sub component id.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  id: string,

  /**
   * Sub component constraint.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  constraint: ConstraintSizeOptions,

  /**
   * Sub component border info.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  borderInfo: LayoutBorderInfo,

  /**
   * Sub component position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  position: Position,

  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } childConstraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  measure(childConstraint: ConstraintSizeOptions);

  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { LayoutInfo } childLayoutInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  layout(childLayoutInfo: LayoutInfo);
}

/**
 * Provides layout geometry information of the parent component (a custom component).
 * Inherits from [SizeResult]{@link SizeResult}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface GeometryInfo extends SizeResult {
  /**
   * Width of the parent component's border.
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth: EdgeWidth;

  /**
   * Margin values of the parent component.
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin: Margin,

  /**
   * Padding values of the parent component.
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding: Padding,
}

/**
 * Provides the child component layout information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface Layoutable {
  /**
   * Measurement result of the child component.
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  measureResult: MeasureResult,

  /**
   * Unique ID that the system assigns to the child component.
   * The value must be an integer greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  uniqueId?: number;

  /**
   * Applies the specified position constraints to the child component.
   *
   * @param { Position } position - Absolute position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  layout(position: Position): void,

  /**
   * Obtains the margin values of the child component.
   *
   * @returns { DirectionalEdgesT<number> } Margin values of the child component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMargin() : DirectionalEdgesT<number>;

  /**
   * Obtains the padding values of the child component.
   *
   * @returns { DirectionalEdgesT<number> } Padding values of the child component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPadding() : DirectionalEdgesT<number>,

  /**
   * Obtains the border widths of the child component.
   *
   * @returns { DirectionalEdgesT<number> } Border widths of the child component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getBorderWidth() : DirectionalEdgesT<number>;
}

/**
 * Provides the child component position information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface Measurable {
  /**
   * Unique ID that the system assigns to the child component.
   * The value range is all integers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  uniqueId?: number;

  /**
   * Imposes size constraints on the child component.
   *
   * @param { ConstraintSizeOptions } constraint - Size constraint.
   * @returns { MeasureResult } Provides the measurement result of the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  measure(constraint: ConstraintSizeOptions) : MeasureResult,

  /**
   * Obtains the margin values of the child component.
   *
   * @returns { DirectionalEdgesT<number> } Margin values of the child component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMargin() : DirectionalEdgesT<number>;

  /**
   * Obtains the padding values of the child component.
   *
   * @returns { DirectionalEdgesT<number> } Padding values of the child component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPadding() : DirectionalEdgesT<number>;

  /**
   * Obtains the border widths of the child component.
   *
   * @returns { DirectionalEdgesT<number> } Border widths of the child component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getBorderWidth() : DirectionalEdgesT<number>;
}

/**
 * > **NOTE**
 * >
 * > - The custom layout does not support the LazyForEach syntax.
 * > - When a custom layout is created in builder mode, only **this.builder()** is allowed in the **build()** method
 * >   of a custom component, as shown in the recommended usage in the example below.
 * > - The size parameters of the parent component (custom component), except **aspectRatio**, are at a lower
 * >   priority than those specified by [onMeasureSize]{@link CustomComponentV2#onMeasureSize}.
 * > - The position parameters of the child component, except **offset**, **position**, and **markAnchor**, are at
 * >   a lower priority than those specified by [onPlaceChildren]{@link CustomComponentV2#onPlaceChildren},
 * >   and do not take effect.
 * > - When using the custom layout method, you must call **onMeasureSize** and **onPlaceChildren** at the same
 * >   time for the layout to display properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SizeResult {
  /**
   * Width obtained from the measurement result.
   * Unit: vp, Value range: (-∞,+∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  width: number,

  /**
   * Height obtained from the measurement result.
   * Unit: vp, Value range: (-∞,+∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  height: number,
}

/**
 * Provides the measurement result of the component. This API inherits from [SizeResult]{@link SizeResult}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface MeasureResult extends SizeResult {}

/**
 * The navigation destination information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type NavDestinationInfo = import('../api/@ohos.arkui.observer').default.NavDestinationInfo;

/**
 * The navigation information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type NavigationInfo = import('../api/@ohos.arkui.observer').default.NavigationInfo;

/**
 * The router page information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type RouterPageInfo = import('../api/@ohos.arkui.observer').default.RouterPageInfo;

/**
 * UIContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * UIContext
 *
 * @typedef { import('../api/@ohos.arkui.UIContext').UIContext } UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type UIContext = import('../api/@ohos.arkui.UIContext').UIContext;

/**
 * DrawContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawContext = import('../api/arkui/Graphics').DrawContext;

/**
 * Represents a visual effect configuration object.
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.VisualEffect } VisualEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VisualEffect = import('../api/@ohos.graphics.uiEffect').default.VisualEffect;

/**
 * Represents a filter object.
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Filter } Filter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Filter = import('../api/@ohos.graphics.uiEffect').default.Filter;


/**
 * Blender
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @form
 * @since 13 dynamic
 */
declare type Blender = import('../api/@ohos.graphics.uiEffect').default.Blender;

/**
 * Represents a constructor used to create a **ComponentContent** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ComponentContent<T = Object> = import('../api/arkui/ComponentContent').ComponentContent<T>;

/**
 * Theme.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Theme = import('../api/@ohos.arkui.theme').Theme;

/**
 * Import the DialogController type from promptAction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare type PromptActionDialogController = import('../api/@ohos.promptAction').promptAction.DialogController;

/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
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
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare class CustomComponent extends BaseCustomComponent {
  /**
   * Invoked when a reusable custom component is re-added to the node tree
   * from the reuse cache to receive construction parameters of the component.
   *
   * @param { object } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Invoked when a reusable custom component is re-added to the node tree
   * from the reuse cache to receive construction parameters of the component.
   *
   * @param { object } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Invoked when a reusable custom component is re-added to the node tree
   * from the reuse cache to receive construction parameters of the component.
   *
   * @param { Record<string, Object | undefined | null> } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  aboutToReuse?(params: Record<string, Object | undefined | null>): void;

  /**
   * Invoked when the custom component lays out its child components. Through this callback the component
   * receives its child component layout information and size constraint from the ArkUI framework.
   * State variables should not be changed in this callback.
   * This API is supported since API version 9 and deprecated since API version 10. You are advised to use
   * onPlaceChildren instead.
   *
   * @param { Array<LayoutChild> } children - Child component layout information.
   * @param { ConstraintSizeOptions } constraint - Size constraint of the parent component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead CustomComponent#onPlaceChildren
   */
  onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;

  /**
   * Invoked when the custom component needs to determine its size. Through this callback the component
   * receives its child component layout information and its own size constraints from the ArkUI framework.
   * State variables should not be changed in this callback.
   * This API is supported since API version 9 and deprecated since API version 10. You are advised to use
   * onMeasureSize instead.
   *
   * @param { Array<LayoutChild> } children - Child component layout information.
   * @param { ConstraintSizeOptions } constraint - Size constraint of the parent component.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare class CustomComponentV2 extends BaseCustomComponent {
  /**
   * Invoked when a reusable custom component managed by state management V2
   * is taken from the reuse pool and reinserted into the node tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToReuse?(): void;
}

/**
 * Custom Component base class and it is migrated from class CustomComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare class BaseCustomComponent extends CommonAttribute {
  /**
   * Customize the pop-up content constructor .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Customize the pop-up content constructor and it is migrated from class CustomComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  build(): void;

  /**
   * Invoked after a new instance of the custom component is created
   * and before its build() function is executed. You can change state variables in aboutToAppear.
   * The change will take effect when you execute the build() function next time.
   * The aboutToAppear lifecycle callback of a custom component with a custom layout
   * is invoked during the layout process.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Invoked after a new instance of the custom component is created
   * and before its build() function is executed. You can change state variables in aboutToAppear.
   * The change will take effect when you execute the build() function next time.
   * The aboutToAppear lifecycle callback of a custom component with a custom layout
   * is invoked during the layout process.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Invoked after a new instance of the custom component is created
   * and before its build() function is executed. You can change state variables in aboutToAppear.
   * The change will take effect when you execute the build() function next time.
   * The aboutToAppear lifecycle callback of a custom component with a custom layout
   * is invoked during the layout process.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Invoked after a new instance of the custom component is created
   * and before its build() function is executed. You can change state variables in aboutToAppear.
   * The change will take effect when you execute the build() function next time.
   * The aboutToAppear lifecycle callback of a custom component with a custom layout
   * is invoked during the layout process.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Invoked after a new instance of the custom component is created
   * and before its build() function is executed. You can change state variables in aboutToAppear.
   * The change will take effect when you execute the build() function next time.
   * The aboutToAppear lifecycle callback of a custom component with a custom layout
   * is invoked during the layout process.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToAppear?(): void;

  /**
   * Invoked when this component is about to disappear.
   * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
   * For example, the modification of the @Link decorated variable may cause unstable application running.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Invoked when this component is about to disappear.
   * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
   * For example, the modification of the @Link decorated variable may cause unstable application running.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Invoked when this component is about to disappear.
   * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
   * For example, the modification of the @Link decorated variable may cause unstable application running.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Invoked when this component is about to disappear.
   * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
   * For example, the modification of the @Link decorated variable may cause unstable application running.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Invoked when this component is about to disappear.
   * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
   * For example, the modification of the @Link decorated variable may cause unstable application running.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * aboutToRecycle Method
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToRecycle Method and it is migrated from class CustomComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToRecycle?(): void;

  /**
   * Invoked before the **build()** function of a new instance of the custom component is executed, to obtain the
   * **Theme** object of the component context. You can change state variables in **onWillApplyTheme**. The change will
   * take effect when you execute the **build()** function next time.
   *
   * > * * Note: * *
   * > Since API version 18, this API can be used in the status management V2 component.
   *
   * > **NOTE**
   *
   * > Since API version 18, this API is supported in the components of V2.
   *
   * @param { Theme } theme - Current theme object of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillApplyTheme?(theme: Theme): void;

  /**
   * Invoked when the custom component needs to determine the positions of its child components. Through this
   * callback the component receives its child component size constraints from the ArkUI framework.
   * State variables should not be changed in this callback.
   *
   * @param { GeometryInfo } selfLayoutInfo - Information about the component's computed layout properties
   *     after measurement.
   * @param { Array<Layoutable> } children - Array containing layout information for all child components
   *     after measurement.
   * @param { ConstraintSizeOptions } constraint - Layout constraints applied to the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 18 dynamic
   */
  onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void;

  /**
   * Invoked when the custom component needs to determine its size. Through this callback the component
   * receives its layout information and size constraints from the ArkUI framework. State variables should
   * not be changed in this callback.
   *
   * @param { GeometryInfo } selfLayoutInfo - Information about the component's computed layout properties after
   *     measurement.<br>During the first layout, the component will use its own set attributes as the basis for layout.
   * @param { Array<Measurable> } children - Array containing layout information for all child components after
   *     measurement. <br>When a child component does not have its layout information set, it retains the previous layout
   *     settings or, if no previous layout settings are available, stays at the default size of 0.
   * @param { ConstraintSizeOptions } constraint - Layout constraints applied to the component.
   * @returns { SizeResult } Component size information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 18 dynamic
   */
  onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult;

  /**
   * Invoked each time a router-managed page (a custom component decorated with
   * [\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)) is displayed, including scenarios
   * such as route navigation and the application returning to the foreground.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPageShow?(): void;

  /**
   * Invoked each time a router-managed page (a custom component decorated with
   * [\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)) is hidden, including scenarios
   * such as route navigation and the application moving to the background.
   *
   * > **NOTE**
   *
   * > To ensure smooth UI responsiveness, avoid executing time-consuming operations within the callback function that
   * > may block the main thread. For resource-intensive tasks such as camera resource deallocation, consider
   * > implementing asynchronous solutions. For best practices, see
   * > [Reducing Application Latency: Postponing Resource Release](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-application-latency-optimization-cases#section8783201923819).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPageHide?(): void;

  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * onFormRecover Method, this is only for ArkTS form
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onFormRecover?(statusData: string): void;

  /**
   * Invoked when a user clicks the back button on a router-managed page (a custom component decorated with
   * [\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)). The value **true** means that
   * the page executes its own return logic, and **false** (default) means that the default return logic is used.
   *
   * @returns { void | boolean } Action of the back button. The value **true** means that the page executes its own
   *     return logic, and **false** (default) means that the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onBackPress?(): void | boolean;

  /**
   * PageTransition Method and it is migrated from class CustomComponent.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  pageTransition?(): void;

  /**
   * Get current UIContext
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Get current UIContext
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Get current UIContext and it is migrated from class CustomComponent.
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getUIContext(): UIContext;

  /**
   * Get uniqueId of the custom component.
   * This unique ID is assigned by the system to each component.
   * If this API is called before the component's corresponding node is created or after it has been destroyed, an
   * invalid unique ID, which is -1, will be returned.
   *
   * @returns { number } - The uniqueId of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Get uniqueId of the custom component and it is migrated from class CustomComponent.
   * This unique ID is assigned by the system to each component.
   * If this API is called before the component's corresponding node is created or after it has been destroyed, an
   * invalid unique ID, which is -1, will be returned.
   *
   * @returns { number } - The uniqueId of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getUniqueId(): number;

  /**
   * Queries the **NavDestination** information of this custom component. This API has effect only when the component is
   * contained within a **NavDestination** component.
   *
   * @returns { NavDestinationInfo | undefined } **NavDestinationInfo** instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  queryNavDestinationInfo(): NavDestinationInfo | undefined;

  /**
   * Queries the information of the nearest **NavDestination** component (a navigation page or subpage of the
   * **Navigation** component) associated with this custom component. The search direction is controlled by **isInner**:
   * **true** for inward search and **false** for outward search.
   *
   * @param { Optional<boolean> } [isInner] - Whether to search inward for the nearest **NavDestination** component in
   *     the navigation stack.<br>**true**: Search inward.<br>**false**: Search outward.
   * @returns { NavDestinationInfo | undefined } **NavDestinationInfo** instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined;

  /**
   * Queries the **Navigation** information of this custom component.
   *
   * @returns { NavigationInfo | undefined } **NavigationInfo** instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  queryNavigationInfo(): NavigationInfo | undefined;

  /**
   * Obtains a **RouterPageInfo** instance.
   *
   * @returns { RouterPageInfo | undefined } **RouterPageInfo** instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  queryRouterPageInfo(): RouterPageInfo | undefined;

  /**
   * The callback method after the custom component is built.
   *
   * Triggered when the custom component has been built.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
 * @FaAndStageModel
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
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Just use for generate tsbundle
   *
   * @param { any } value
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form
   * @since 9 dynamic
   */
  create(value: any): any;
}

/**
 * Describes the position, width, and height of a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RectResult {

  /**
   * X-coordinate.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  x: number;

  /**
   * Y-coordinate.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  y: number;

  /**
   * Content width.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  width: number;

  /**
   * Content height.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  height: number;
}

/**
 * Describes the position of the caret relative to the text box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface CaretOffset {
  /**
   * Index of the caret position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  index: number;

  /**
   * X coordinate of the cursor relative to the text box, in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y coordinate of the cursor relative to the text box, in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;
}

/**
 * Provides configuration options for text insertion operations in text input components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface TextContentControllerOptions {
  /**
   * Insertion position for the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  offset?: number;
}

/**
 * Represents the base controller for **TextInput**, **TextArea**, and **Search** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare abstract class TextContentControllerBase {
  /**
   * Obtains the position information of the caret.
   *
   * > **NOTE**
   * >
   * > - If this API is called when the caret position is updated in the current frame, it will not take effect.
   * >
   * > - For the **Search** component, the returned position information is the offset of the first character relative
   * > to the search icon in the component.
   * >
   * > - If no text is entered in the **Search** component, the return value contains the position information relative
   * > to the component.
   * >
   * > - The location information in the return value is the location of the caret relative to the editable component.
   * >
   * > - If the caret position cannot be obtained (for example, when the
   * > [TextInputController]{@link TextInputController} is not bound to the [TextInput]{@link ./text_input} component),
   * > **null** is returned.
   *
   * @returns { CaretOffset } Position of the caret relative to the text box.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getCaretOffset() : CaretOffset;

  /**
   * Obtains the position of the edited text area relative to the component and its size. The unit of the return value
   * is pixel.
   *
   * @returns { RectResult } Position of the edited text area relative to the component and its size.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getTextContentRect() : RectResult;

  /**
   * Obtains the number of lines of the edited text.
   *
   * @returns { number } Number of lines of the edited text.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getTextContentLineCount() : number;

  /**
   * Inserts text at a specified position in the editable content. If no position is specified, the text is appended to
   * the end of the existing content.
   *
   * This API does not work when the text is being dragged.
   *
   * **addText** only affects the UI performance within the application and has no effect on the internal logic of the
   * input method application. Therefore, avoid calling this API for the preview text.
   *
   * @param { string } text - Text to insert.
   * @param { TextContentControllerOptions } [textOperationOptions] - Configuration option for inserting text. If this
   *     parameter is not provided, the text is appended to the end.
   * @returns { number } New cursor position after insertion.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  addText(text: string, textOperationOptions?: TextContentControllerOptions): number;

  /**
   * Deletes text within a specified range in the editable content.
   *
   * > **NOTE**
   * >
   * > - This API does not work when the text is being dragged.
   * >
   * > - **deleteText** only affects the UI performance within the application and has no effect on the internal logic
   * > of the input method application. Therefore, avoid calling this API for the preview text.
   *
   * @param { TextRange } [range] - Range of the text to be deleted, including the start and end positions.<br>If the
   *     range is not specified, the entire text is deleted. If the start position is not specified, deletion starts
   *     from index 0. If the end position is not specified, deletion ends at the end of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  deleteText(range?: TextRange): void;

  /**
   * Obtains the current text selection range.
   *
   * @returns { TextRange } Current text selection range, or cursor position if no text is selected.
   *     <br>If no component is bound to the controller or the component bound to the controller is released, **undefined**
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getSelection(): TextRange;

  /**
   * Obtains the text content within a specified range.
   *
   * @param { TextRange } [range] - Range of the text content to obtain, defined by start and end positions.<br>If the
   *     range is not specified, the entire text is obtained by default. If the start position is not specified, it defaults
   *     to index 0. If the end position is not specified, it defaults to the end of the text.
   * @returns { string } Text content within the specified range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  getText(range?: TextRange): string;

  /**
   * Notifies the input method to clear the current preview text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 17 dynamic
   */
  clearPreviewText(): void;

  /**
   * Binds or updates the styled placeholder string.
   *
   * @param { StyledString } styledString - Styled string for the placeholder. This takes precedence over the plain text.
   *     **placeholder** attribute.<br>The placeholder does not support gesture events or hyperlink navigation within
   *     styled strings.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  setStyledPlaceholder(styledString: StyledString): void;

  /**
   * Passes the start and end indexes to the bound text box components (**TextInput**, **TextArea**, and **Search**),
   * and scrolls the text within the range to the visible area.
   *
   * @param { TextRange } [range] - Text range to be scrolled to the visible area, including the start and end positions.
   *     of the text.<br>The start position must be less than or equal to the end position. Otherwise, the API call is
   *     invalid. If the start position is less than 0, it is treated as the value **0**. If the end position is greater
   *     than the length of the entire text, it is treated as the length of the entire text.<br>If no range is specified,
   *     the entire text is used by default. If the start position is not specified, the default start position is 0. If the
   *     end position is not specified, the default end position is the length of the entire text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  scrollToVisible(range?: TextRange): void;

  /**
   * Deletes the character before the text cursor in the text box bound to the basic controller. If some text has been
   * selected using the mouse or keyboard before this function is called, the selected text will be deleted.
   *
   * This API is not supported in preview display scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  deleteBackward(): void;
}

/**
 * Enum of scrollable containers' content clip mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum ContentClipMode {
  /**
   * Clip to content rect inside margin & padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CONTENT_ONLY = 0,

  /**
   * Clip to scrollable's outer rect, including padding but inside margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  BOUNDARY = 1,

  /**
   * Clip to the safeArea of scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class ScrollableCommonMethod<T> extends CommonMethod<T> {
  /**
   * Sets the scrollbar state.
   *
   * @param { BarState } barState - Scrollbar state.<br>Default value: <em>BarState.Auto</em> for the <em>List</em>, <em
   *     >Grid</em>,
   *     and <em>Scroll</em> components and <em>BarState.Off</em> for the <em>WaterFlow</em> component
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBar(barState: BarState): T;

  /**
   * Sets the scrollbar color.
   *
   * @param { Color | number | string } color - Scrollbar color.<br>Default value: <em>'\#182431'</em> (40% opacity)
   *     <br>A number value indicates a HEX color in RGB or ARGB format,
   *     for example, <em>0xffffff</em>. A string value indicates a color in RGB or ARGB format, for example, <em>'#
   *     ffffff'</em>.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBarColor(color: Color | number | string): T;

  /**
   * Sets the scrollbar color.
   *
   * @param { Color | number | string | Resource } color - Scrollbar color.<br>Default value: <em>'\#182431'</em> (40%
   *     opacity)
   *     <br>A number value indicates a HEX color in RGB or ARGB format, for example, <em>0xffffff</em>.
   *     A string value indicates a color in RGB or ARGB format, for example, <em>'#ffffff'</em>.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(color: Color | number | string | Resource): T;

  /**
   * Sets the scrollbar width.
   *
   * @param { number | string } value  - Scrollbar width.<br>Default value: <em>4</em>
   *     <br>Unit: vp
   *     <br>If this parameter is set to a value less than or equal to 0, the default value is used.
   *     The value <em>0</em> means not to show the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Sets the scrollbar width.
   *
   * @param { number | string | Resource } value - Scrollbar width.
   *     <br>Unit: vp
   *     <br>Default value: <em>4</em>
   *     <br>If this parameter is set to a value less than 0, the default value is used.
   *     The value <em>0</em> means not to show the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBarWidth(value: number | string | Resource): T;

  /**
   * Margin of the scrollbar.
   *
   * @param { ScrollBarMargin } margin - Margin of the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  scrollBarMargin(margin: ScrollBarMargin): T;

  /**
   * Set the scroll bar auto adjust the margin to avoid the padding, safeAreaPadding, and
   * contentStartOffset/contentEndOffset of the component.
   *
   * @param { boolean | undefined } enable - Whether to enable automatic adjustment of scroll bar margin.
   *     <br>Default value: false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoAdjustScrollBarMargin(enable: boolean | undefined): T;

  /**
   * Sets the effect used when the scroll boundary is reached.
   *
   * @param { EdgeEffect } edgeEffect - Effect used when the scroll boundary is reached. The spring and shadow effects
   *     are supported.
   *     <br>Default value: <em>EdgeEffect.None</em> for the <em>Grid</em>, <em>Scroll</em>, and <em>WaterFlow</em>
   *     components and <em>EdgeEffect.Spring</em> for the <em>List</em> component
   * @param { EdgeEffectOptions } options - Whether to enable the scroll effect when the component content is smaller
   *     than the component itself.
   *     The value <em>{ alwaysEnabled: true }</em> means to enable the scroll effect, and <em>{ alwaysEnabled: false }<
   *     /em> means the opposite.
   *     <br>Default value:<br><em>{ alwaysEnabled: false }</em> for the <em>List</em>, <em>Grid</em>, and <em>WaterFlow
   *     </em> components,
   *     and <em>{ alwaysEnabled: true }</em> for the <em>Scroll</em> component
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T;

  /**
   * Sets the nested scrolling options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: NestedScrollOptions): T;

  /**
   * Sets whether to support scroll gestures.
   *
   * @param { boolean } value - Whether to support scroll gestures.<br>Default value: <em>true</em>
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableScrollInteraction(value: boolean): T;

  /**
   * Sets the friction coefficient.
   *
   * @param { number | Resource } value - Friction coefficient.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  friction(value: number | Resource): T;

  /**
   * Sets the offset from the start of the content to the boundary of the scrollable display area.
   *
   * @param { number | Resource } offset - Offset from the start of the content to the boundary of
   *     the scrollable display area.
   *     <br>Default value: <em>0</em>
   *     <br>Unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentStartOffset(offset: number | Resource): T;

  /**
   * Sets the offset from the end of the content to the boundary of the scrollable display area.
   *
   * @param { number | Resource } offset - Offset from the end of the content to the boundary of
   *     the scrollable display area.
   *     <br>Default value: <em>0</em>
   *     <br>Unit: vp
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentEndOffset(offset: number | Resource): T;

  /**
   * Enable left mouse button press-and-drag scrolling.
   *
   * @param { boolean | undefined } enabled - Enable left mouse button press-and-drag scrolling.
   *     <br>Default value: false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableScrollWithMouse(enabled: boolean | undefined): T;

  /**
   * Triggered when the scrollable component scrolls.
   *
   * @param { function } event - callback of scrollable,
   *     scrollOffset is offset per frame scrolling, ScrollState is current scroll state.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): T;

  /**
   * Triggered when the scrollable component scrolls.
   *
   * @param { OnScrollCallback } handler - Callback triggered when the scrollable component scrolls.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onDidScroll(handler: OnScrollCallback): T;

  /**
   * Called when the scrollable will start dragging.
   *
   * @param { VoidCallback } handler - callback of start dragging.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  onWillStartDragging(handler: VoidCallback): T;

  /**
   * Called when the scrollable will end dragging.
   *
   * @param { OnWillStopDraggingCallback } handler - callback of end dragging.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  onWillStopDragging(handler: OnWillStopDraggingCallback): T;

  /**
   * Called when the scrollable did end dragging.
   *
   * @param { OnDidStopDraggingCallback } handler - callback of end dragging.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  onDidStopDragging(handler: OnDidStopDraggingCallback): T;

  /**
   * Called when the scrollable will start fling.
   *
   * @param { VoidCallback } handler - callback of start fling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  onWillStartFling(handler: VoidCallback): T;

  /**
   * Called when the scrollable did end fling.
   *
   * @param { VoidCallback } handler - callback of end fling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  onDidStopFling(handler: VoidCallback): T;

  /**
   * Triggered when the scrollable component reaches the start position.
   *
   * @param { function } event - Callback function, triggered when the scrollable reaches the start position.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onReachStart(event: () => void): T;

  /**
   * Triggered when the scrollable component reaches the end position.
   *
   * @param { function } event - Callback function, triggered when the scrollable reaches the end position.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onReachEnd(event: () => void): T;

  /**
   * Triggered when the scrollable component starts scrolling initiated by the user's finger dragging the component or 
   * its scrollbar.
   *
   * @param { function } event - Callback function, triggered when the scrollable starts scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onScrollStart(event: () => void): T;

  /**
   * Triggered when scrolling stops after the user's finger leaves the screen.
   *
   * @param { function } event - Callback function, triggered when the scrollable stops scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onScrollStop(event: () => void): T;

  /**
   * Sets the maximum initial velocity at the start of the fling animation that occurs after gesture-driven scrolling 
   * ends.
   *
   * @param { number } speedLimit - Maximum initial velocity at the start of the fling animation.
   *     <br>Default value: <em>9000</em>
   *     <br>Unit: vp/s
   *     <br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is
   *     used.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  flingSpeedLimit(speedLimit: number): T;

  /**
   * Sets the content clipping area for this scrollable component.
   *
   * @param { ContentClipMode | RectShape } clip - A value from enum ContentClipMode or a customized clip rect.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T;

  /**
   * Sets whether to enable the back-to-top feature for a scrollable component when the status bar is touched.
   *
   * @param { boolean } backToTop - Whether to enable the back-to-top feature for a scrollable component when the status
   *     bar is touched.
   *     <br>Default value: <em>false</em>
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  backToTop(backToTop: boolean): T;

  /**
   * Sets the scrollbar track height.
   *
   * @param { LengthMetrics | undefined } height - Scrollbar track height.
   *     <br>The value must be greater than or equal to 0, If set to undefined or a value less than 0, the default value
   *     is used. If set to 0, the scrollbar is not displayed.
   *     <br> Default value: adaptive to the height of the scrollable component. 
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBarHeight(height: LengthMetrics | undefined): T;
}

/**
 * The actual offset by which the scrollable scrolls.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ScrollResult {
  /**
   * Actual offset by which the scrollable scrolls in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  offsetRemain: number;
}

/**
 * Called before scroll to allow developer to control real offset the Scrollable can scroll.
 *
 * @param { number } scrollOffset - offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { void | ScrollResult } the remain offset for the scrollable,
 *     same as scrollOffset when no ScrollResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnWillScrollCallback =
(scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult;

/**
 * On scroll callback using in scrollable onDidScroll.
 *
 * @param { number } scrollOffset - offset this frame did scroll.
 * @param { ScrollState } scrollState - current scroll state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;

/**
 * Defines the callback type used in onItemDragStart.
 *
 * @param { ItemDragInfo } event - Information about the dragged item.
 * @param { number } itemIndex - The index number of the dragged item.
 * @returns { CustomBuilder }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: number) => CustomBuilder;

/**
 * Defines the callback type used in onGetPreviewBadge of EditModeOptions.
 *
 * @returns { boolean | number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare type OnGetPreviewBadgeCallback = () => boolean | number;

/**
 * On scroll callback using in scrollable onWillStopDragging.
 *
 * @param { number } velocity - The veolicity of the scroll view at the moment the touch was released.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare type OnWillStopDraggingCallback = (velocity: number) => void;

/**
 * On scroll callback using in scrollable onDidStopDragging.
 *
 * @param { boolean } willFling - whether start fling animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 21 dynamic
 */
declare type OnDidStopDraggingCallback = (willFling: boolean) => void;

/**
 * Defines the callback type used in OnVisibleIndexesChange.
 *
 * @param { int } start - the first index in visible content.
 * @param { int } end - the last index in visible content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnVisibleIndexesChangeCallback = (start: int, end: int) => void;

/**
 * Defines the onMove callback.
 *
 * @param { number } from - Index number for moving elements.
 * @param { number } to - Target index number for moving elements.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnMoveHandler = (from: number, to: number) => void;

/**
 * Define item drag event handler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ItemDragEventHandler {
  /**
   * This callback is triggered when the item is long pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onLongPress?: Callback<number>;

  /**
   * This callback is triggered when the item is dragged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDragStart?: Callback<number>;

  /**
   * This callback is triggered when an item is moved through other items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onMoveThrough?: OnMoveHandler;

  /**
   * This callback is triggered when the item is dropped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DynamicNode<T> {
  /**
   * Invoked when data is moved during drag and drop sorting.
   * This callback is only applicable in a List component.
   * where each ForEach iteration generates a ListItem component.
   * It allows you to define custom drag actions and handle various drag events.
   *
   * @param { Optional<OnMoveHandler> } handler
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Enable Sliding effect when component does not full screen.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  alwaysEnabled: boolean;

  /**
   * Set the effective edge of the edge effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectEdge?: number;
}

/**
 * Enumerates the effective edge of the edge effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum EffectEdge {

  /**
   * Effective only for the starting edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  START = 1,

  /**
   * Effective only for the end edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ChildrenMainSize {
  /**
   * Creates an instance of ChildrenMainSize.
   *
   * @param { number } childDefaultSize - default main size, in vp. If the main axis is vertical, it indicates height.
   *     If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(childDefaultSize: number);

  /**
   * Set default size.
   *
   * @param { number } value - default main size, in vp. If the main axis is vertical, it indicates height.
   *     If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set childDefaultSize(value: number);

  /**
   * Get default size
   *
   * @returns { number } - default main size, in vp. If the main axis is vertical, it indicates height.
   *     If the main axis is horizontal, it indicates width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @example splice(1, 0, [100]), Insert a child after first child, the child's main size is 100vp.
   *     splice(1, 1), Delete the second child.
   *     splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
   */
  splice(start: number, deleteCount?: number, childrenSize?: Array<number>): void;

  /**
   * Updates main size for specified child.
   *
   * @param { number } index - index of child to be updated.
   * @param { number } childSize - new section options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(index: number, childSize: number): void;
}

/**
 * Define edit mode options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface EditModeOptions {
  /**
   * Define whether to gather selected items in grid or list when item is long pressed for context menu.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  enableGatherSelectedItemsAnimation?: boolean;

  /**
   * Called to return whether to display the number badge or the number displayed on the badge
   * for the context menu preview. If not set, the number of selected items within the display range will be used.
   * Returning false means not displaying the badge.
   * Returning true means using the number of selected items within the display range.
   * Returning a number to include selected items outside the display range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onGetPreviewBadge?: OnGetPreviewBadgeCallback;

  /**
   * Use default multi-select style.
   * {@code true} indicates that the check box is displayed for GridItem or ListItem after entering the
   * multi-select state.
   * {@code false} indicates that there is no default style after entering the multi-select state.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  useDefaultMultiSelectStyle?: boolean;

  /**
   * Enable two-finger swipe multi-selection.
   * {@code true} indicates that two-finger swiping can enter edit mode and perform multi-selection.
   * {@code false} indicates that two-finger swiping cannot perform multi-selection.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableTwoFingerMultiSelect?: boolean;
}

/**
 * Provides background brightness options.
 * 
 * > **NOTE**
 * >
 * > The brightness (gray scale value) of each pixel in the component background content is calculated using the 
 * > following formula:
 * > >  Y = (0.299R + 0.587G + 0.114B) / 255.0, where **R**, **G**, and **B** represent red, green, and blue channel 
 * > values of the pixel, respectively, and **Y** is the gray scale value. This formula normalizes the gray scale value 
 * > to a range of 0 to 1.
 * > >  The formula for calculating the increase in brightness for each pixel is as follows: ΔY = -rate * Y + 
 * > lightUpDegree. For example, when rate = 0.5 and lightUpDegree = 0.5, for a pixel with a gray scale value of 0.2, 
 * > the increase in brightness is -0.5 * 0.2 + 0.5 = 0.4. For a pixel with a gray scale value of 1, the increase in 
 * > brightness is -0.5 * 1 + 0.5 = 0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BackgroundBrightnessOptions {

  /**
   * Brightness change rate. A higher rate means that brightness decreases more quickly. If **rate** is set to **0**, 
   * **lightUpDegree** will not take effect, meaning no brightening effect will occur.
   * 
   * Default value: **0.0**
   * 
   * Value range: (0.0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  rate: number;

  /**
   * Light up degree. A greater degree indicates a greater increase in brightness.
   * 
   * Default value: **0.0**
   * 
   * Value range: [-1.0, 1.0]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  lightUpDegree: number;
}

/**
 * You apply a point light style by setting the light source that emits illumination and the components to be
 * illuminated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface PointLightStyle {

  /**
   * Light source. The light source affects the surrounding components that are marked as illuminable and creates light
   * effects on those components.
   *
   * Default value: none
   *
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  lightSource?: LightSource;

  /**
   * Whether the current component can be illuminated by the light source and the illuminated type.
   *
   * Default value: **IlluminatedType.NONE**
   *
   * @default IlluminatedType.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  illuminated?: IlluminatedType;

  /**
   * Luminous intensity of the component. The recommended value range is 0-1.
   *
   * Default value: **0**
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  bloom?: number;
}

/**
 * Each component allows for one light source.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface LightSource {

  /**
   * X-coordinate of the light source relative to the current component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  positionX: Dimension;

  /**
   * Y-coordinate of the light source relative to the current component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  positionY: Dimension;

  /**
   * Height of the light source. The higher the light source, the broader the light distribution.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  positionZ: Dimension;

  /**
   * Intensity of the light source. The recommended value range is 0-1. When the intensity is **0**, the light source
   * does not emit light.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  intensity: number;

  /**
   * Light source color.
   *
   * Default value: **Color.White**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  color?: ResourceColor;
}

/**
 * wrapBuilder is a template function that returns a WrappedBuilder object.
 * wrapBuilder only accepts a global @Builder decorated function as its argument.
 * Of the WrappedBuilder object it returns, the builder attribute method can be used only inside the struct.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * wrapBuilder is a template function that returns a WrappedBuilder object.
 * wrapBuilder only accepts a global @Builder decorated function as its argument.
 * Of the WrappedBuilder object it returns, the builder attribute method can be used only inside the struct.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>;

/**
 * Defines the callback type used in mutableBuilder.
 *
 * @typedef { function } BuilderCallback
 * @param { Args } args - The parameter of MutableBuilder.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamiconly
 */
declare type BuilderCallback = (...args: Args) => void

/**
 * Defining mutableBuilder function.
 * @param { BuilderCallback } builder
 * @returns { MutableBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamiconly
 */
declare function mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>;

/**
 * The WrappedBuilder object is also a template class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * The WrappedBuilder object is also a template class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WrappedBuilder<Args extends Object[]> {
  /**
   * global @Builder decorated function.
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * global @Builder decorated function.
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  builder: (...args: Args) => void;

  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(builder: (...args: Args) => void);
}

/**
 * Defines the MutableBuilder class.
 * @extends WrappedBuilder<Args>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamiconly
 */
declare class MutableBuilder<Args extends Object[]> extends WrappedBuilder<Args> {
}

/**
 * Provides animation configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface KeyframeAnimateParam {
  /**
   * Overall delay of the animation, in milliseconds. By default, the animation is played without delay.
   * 
   * Default value: **0**.
   * 
   * **NOTE**
   * 
   * A value greater than 0 means to begin the animation after the specified amount of time has elapsed.
   * 
   * A value less than 0 means to begin the animation in advance. If the absolute value of **delay** is less than the 
   * actual animation duration, the animation starts its first frame from the state at the absolute value. If the 
   * absolute value of **delay** is greater than or equal to the actual animation duration, the animation starts its 
   * first frame from the end state. The actual animation duration is equal to the duration of a single animation 
   * multiplied by the number of animation playback times.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  delay?: number;

  /**
   * Number of times that the animation is played. By default, the animation is played once. The value **-1** indicates 
   * that the animation is played for an unlimited number of times. The value **0** indicates that there is no 
   * animation.
   * 
   * Default value: **1**.
   * 
   * Value range: [–1, +∞).
   * 
   * **NOTE**
   * 
   * - Floating-point values will be rounded down to integers. For example, if the value set is 1.2, **1** will be used.
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  iterations?: number;

  /**
   * Callback invoked when the animation playback is complete. This API is called after the keyframe animation has 
   * played for the specified number of times. If transition animations are disabled in developer options, or if a 
   * **UIAbility** switches from the foreground to the background, any ongoing finite keyframe animation will stop 
   * immediately and trigger the playback completion callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFinish?: () => void;

  /**
   * Expected frame rate range of the animation.
   * 
   * Default value: {min:0, max:0, expected:0} (following the application's frame rate)
   * 
   * **NOTE**
   * 
   * After a valid expected frame rate is set, the system collects the configured frame rate and divides the frequency 
   * on the rendering pipeline. The actual frame rate may be different from the expected one configured. It is limited 
   * by the system capability and screen refresh rate.
   *
   * @default { min: 0, expected: 0, max: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * Provides keyframe configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface KeyframeState {
  /**
   * Duration of the keyframe animation, in ms.
   * 
   * Value range: [0, +∞)
   * 
   * **NOTE**
   * 
   * - If this parameter is set to a value less than 0, the value **0** is used.
   * - Floating-point values will be rounded down to integers. For example, if the value set is 1.2, **1** will be used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  duration: number;

  /**
   * Animation curve used by the keyframe.
   * 
   * You are advised to specify the curve using the **Curve** or **ICurve** type.
   * 
   * For the string type, this parameter indicates an animation interpolation curve. For available values, see the 
   * **curve** parameter in [AnimateParam]{@link AnimateParam}.
   * 
   * Default value: **Curve.EaseInOut**
   * 
   * **NOTE**
   * 
   * Because the [springMotion]{@link @ohos.curves:curves.springMotion}, 
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}, and 
   * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring} curves do not have effective duration 
   * settings, they are not supported.
   *
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * Closure function of the state at the time of the keyframe, that is, the state to be reached at the time of the 
   * keyframe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  event: () => void;
}


/**
 * Defines the basic callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Callback<T, V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  (data: T): V;
}

/**
 * Defines the callback type for hover events.
 *
 * @param { boolean } isHover - Whether the element is in the hover state. **true**: yes; **false**: no.
 * @param { HoverEvent} event - Position coordinates of the hovered mouse or stylus.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
 * @param { boolean } isHover
 * @param { AccessibilityHoverEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;

/**
 * Defines the callback type used in accessibility hover transparent event.
 *
 * @param { TouchEvent } event - The value of event contains information about original accessibility hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type AccessibilityTransparentCallback = (event: TouchEvent) => void;

/**
 * Describes visible area change configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface VisibleAreaEventOptions {

  /**
   * Threshold array. Each threshold represents a ratio of the component's visible area (that is, the area of the
   * component that is visible on screen; only the area within the parent component is counted) to the component's total
   * area. The value of each threshold ranges from 0.0 to 1.0. If a threshold value is less than 0.0, it is clamped to 0
   * .0; if it is greater than 1.0, it is clamped to 1.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ratios: Array<number>;

  /**
   * Expected calculation interval, in ms. If the value is less than 100 or set to **NaN**, the default value **100** is
   * used. If the value is greater than 2^31-1, the default value **2^31-1** is used.
   *
   * Default value: **1000**.
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  expectedUpdateInterval?: number;

  /**
   * Visible area calculation mode.
   *
   * **true**: considers the parent's [clip]{@link CommonMethod#clip(value: boolean)} attribute. If
   * [clip]{@link CommonMethod#clip(value: boolean)} is **false**, areas of the child component beyond the parent's
   * bounds are counted as visible; if [clip]{@link CommonMethod#clip(value: boolean)} is **true**, such areas are
   * counted as invisible. **false**: ignores the parent's [clip]{@link CommonMethod#clip(value: boolean)} attribute,
   * treating areas beyond the parent's bounds as invisible.
   *
   * Default value: **false**.
   *
   * When **measureFromViewport** is set to **true**, and an ancestor node has the
   * [scale]{@link CommonMethod#scale(value: ScaleOptions)} attribute set, the component's visible ratio will be
   * correctly calculated.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  measureFromViewport?: boolean;
}

/**
 * Represents a callback for visible area changes of the component.
 *
 * @param { boolean } isVisible - Whether the component's visible area has increased or decreased relative to its
 *     total area since the last callback. The value **true** indicates that the visible area has increased, and
 *     **false** indicates that the visible area has decreased. [since 12 - 12]
 * @param { boolean } isExpanding - Whether the component's visible area has increased or decreased relative to its
 *     total area since the last callback. The value **true** indicates that the visible area has increased, and
 *     **false** indicates that the visible area has decreased. [since 13]
 * @param { number } currentRatio - Ratio of the component's visible area to its own area at the moment the callback is
 *     triggered.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;

/**
 * Implements a common event callback. Passing **undefined** as the input parameter resets the corresponding event
 * callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UICommonEvent {

  /**
   * Set the callback for the [click event]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)}.
   *
   * @param { Callback<ClickEvent> | undefined } callback - Callback for the click event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnClick(callback: Callback<ClickEvent> | undefined): void;

  /**
   * Sets the callback for the [touch event]{@link CommonMethod#onTouch(event: (event: TouchEvent) => void)}.
   *
   * @param { Callback<TouchEvent> | undefined } callback - Callback for the touch event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnTouch(callback: Callback<TouchEvent> | undefined): void;

  /**
   * Sets the callback for the [onAppear]{@link CommonMethod#onAppear} event.
   *
   * @param { Callback<void> | undefined } callback - Callback invoked when the component appears.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnAppear(callback: Callback<void> | undefined): void;

  /**
   * Sets the callback for the [onDisAppear]{@link CommonMethod#onDisAppear} event.
   *
   * @param { Callback<void> | undefined } callback - Callback invoked when the component disappears.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnDisappear(callback: Callback<void> | undefined): void;

  /**
   * Sets the callback for the [key event]{@link common}.
   *
   * @param { Callback<KeyEvent> | undefined } callback - Callback for the key event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;

  /**
   * Sets the callback for the [onFocus]{@link CommonMethod#onFocus} event.
   *
   * @param { Callback<void> | undefined } callback - Callback for the focus event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnFocus(callback: Callback<void> | undefined): void;

  /**
   * Sets the callback for the [onBlur]{@link CommonMethod#onBlur} event.
   *
   * @param { Callback<void> | undefined } callback - Callback for the blur event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnBlur(callback: Callback<void> | undefined): void;

  /**
   * Sets the callback for the [onHover]{@link CommonMethod#onHover} event.
   *
   * @param { HoverCallback | undefined } callback - Callback for the hover event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnHover(callback: HoverCallback | undefined): void;

  /**
   * Sets the callback for the [onMouse]{@link CommonMethod#onMouse} event.
   *
   * @param { Callback<MouseEvent> | undefined } callback - Callback for the mouse event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnMouse(callback: Callback<MouseEvent> | undefined): void;

  /**
   * Sets the callback for the [onSizeChange]{@link CommonMethod#onSizeChange} event, which is triggered when the
   * component's size changes.
   *
   * @param { SizeChangeCallback | undefined } callback - Callback invoked when the component's size changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnSizeChange(callback: SizeChangeCallback | undefined): void;

  /**
   * Sets the callback for the
   * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
   * visible area change event.
   *
   * @param { VisibleAreaEventOptions } options - Configuration options for visible area change detection.
   * @param { VisibleAreaChangeCallback | undefined } event - Callback invoked when the ratio of the component's visible
   *     area to its total area crosses the threshold specified in **options**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}

/**
 * Defines a UIScrollableCommonEvent which is used to set event to target component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void;
}

/**
 * Provides APIs for configuring gestures bound to a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UIGestureEvent {

  /**
   * Adds a gesture.
   *
   * @param { GestureHandler<T> } gesture - Gesture handler object.
   * @param { GesturePriority } priority - Priority of the bound gesture.<br>Default value: **GesturePriority.NORMAL**.
   * @param { GestureMask } mask - Mask for gesture events.<br>Default value: **GestureMask.Normal**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void;

  /**
   * Adds a gesture that can be recognized at once by the component and its child component.
   *
   * @param { GestureHandler<T> } gesture - Gesture handler object.
   * @param { GestureMask } mask - Mask for gesture events.<br>Default value: **GestureMask.Normal**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void;

  /**
   * Remove a gesture from a component that has been bound with a specific tag through a modifier.
   *
   * @param { string } tag - Gesture handler flag.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeGestureByTag(tag: string): void;

  /**
   * Clears all gestures that have been bound to the component through a modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  clearGestures(): void;
}

/**
 * You need a custom class to implement the **GestureModifier** API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GestureModifier {

  /**
   * Applies a gesture.
   *
   * You can customize this API as required. Dynamic configuration using the **if/else** syntax is supported. If gesture
   * switching is triggered during an active gesture operation, the change takes effect in the next gesture operation
   * after the current one completes (when all fingers are lifted).
   *
   * @param { UIGestureEvent } event - **UIGestureEvent** object, which is used to set the gesture to be bound to the
   *     component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  applyGesture(event: UIGestureEvent): void;
}

/**
 * Defines the selection options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SelectionOptions {
  /**
   * Menu display policy.
   * Default value: MenuPolicy.DEFAULT.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menuPolicy?: MenuPolicy;
}

/**
 * Sets the target component for focus movement based on key presses. If it is not specified, the default focus movement
 * logic applies.
 *
 * > **NOTE**
 * >
 * > Directly using **focusControl** can lead to the issue of
 * > [ambiguous UI context](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain the
 * > [UIContext]{@link @ohos.arkui.UIContext:UIContext} object using the **getUIContext()** API and then obtain the
 * > **focusControl** bound to the instance using the
 * > [getFocusController]{@link @ohos.arkui.UIContext:UIContext#getFocusController} API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface FocusMovement {

  /**
   * ID of the component to focus on when the **Tab** key is pressed.
   *
   * The default value resets **forward** to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  forward?: string;

  /**
   * ID of the component to focus on when **Shift+Tab** is pressed.
   *
   * The default value resets **backward** to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backward?: string;

  /**
   * ID of the component to focus on when the up arrow key is pressed.
   *
   * The default value resets **up** to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  up?: string;

  /**
   * ID of the component to focus on when the down arrow key is pressed.
   *
   * The default value resets **down** to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  down?: string;

  /**
   * ID of the component to focus on when the left arrow key is pressed.
   *
   * The default value resets **left** to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  left?: string;

  /**
   * ID of the component to focus on when the right arrow key is pressed.
   *
   * The default value resets **right** to empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  right?: string;
}

/**
 * Enumerates modes in which a popup responds when the keyboard is displayed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum KeyboardAvoidMode {
  /**
   * Automatically avoids the soft keyboard and compresses the height when reaching the maximum limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Does not avoid the soft keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 1
}

/**
 * Enumerates the type of area in hover mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum HoverModeAreaType {

  /**
   * Layout top half screen when the phone in hover mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  TOP_SCREEN = 0,

  /**
   * Layout bottom half screen when the phone in hover mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  BOTTOM_SCREEN = 1
}

/**
 * Defines a range of dates.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface DateRange {
  /**
   * Defines the start date of the date range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  start?: Date;

  /**
   * Defines the end date of the date range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  end?: Date;
}

/**
 * Input event interception result interface, used by the listener callback
 * [InputEventListener]{@link InputEventListener} to return the interception decision.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface InputEventInterceptResult {

  /**
   * Input event interception action.
   *
   * **CONTINUE**: The event is allowed to continue being passed to the UI framework.
   *
   * **BLOCK**: The event is blocked from being passed to the UI framework.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action: InputEventInterceptAction;
}

/**
 * Input event monitor identity object.
 *
 * This object is created and returned by the system, serving as the unique identifier of the monitor.
 *
 * > **NOTE**
 * >
 * > - The object is empty and does not contain any accessible members.
 * >
 * > - Developers cannot create this object on their own. It can only be obtained by registering through the
 * > [addLocalInputEventMonitor]{@link UIContext:UIContext#addLocalInputEventMonitor} API.
 * >
 * > - It is used for identity verification when unregistering later.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface InputEventMonitor {}

/**
 * Raw input event wrapper class.
 *
 * Provides a unified interface to access different types of input events, ensuring type safety and backward
 * compatibility.
 *
 * This class encapsulates either a raw **MouseEvent**, **TouchEvent**, or **KeyEvent** object and provides type-safe
 * methods for access.
 *
 * This class is an abstract class. Developers cannot create instances on their own. The system automatically creates an
 * instance and passes it to the callback when the input event listener is triggered.
 *
 * > **NOTE**
 * >
 * > Since the listener is executed before events are dispatched to specific components, some fields in the event will
 * > not provide valid values: the trigger object [target]{@link EventTarget}, coordinates relative to the component
 * > [x]{@link MouseEvent#x} and [y]{@link MouseEvent#y}, [getCurrentLocalPosition]{@link TouchObject#getCurrentLocalPosition}
 * > and [stopPropagation]{@link TouchEvent#stopPropagation} methods, [preventDefault]{@link TouchEvent#preventDefault} and
 * > [getHistoricalPoints]{@link TouchEvent#getHistoricalPoints} methods of **TouchEvent**, as well as the [metaKey]{@link KeyEvent#metaKey}
 * > attribute and [getModifierKeyState]{@link KeyEvent.getModifierKeyState} method of **KeyEvent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare abstract class RawInputEventWrapper {

  /**
   * Checks whether the event is a mouse event.
   *
   * @returns { boolean } Whether it is a mouse event. Returns **true** if it is a mouse event, and **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isMouseEvent(): boolean;

  /**
   * Checks whether the event is a touch event.
   *
   * @returns { boolean } Whether it is a touch event. Returns **true** if it is a touch event, and **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isTouchEvent(): boolean;

  /**
   * Checks whether the event is a key event.
   *
   * @returns { boolean } Whether it is a key event. Returns **true** if it is a key event, and **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isKeyEvent(): boolean;

  /**
   * Obtains the mouse event.
   *
   * @returns { MouseEvent | null } Mouse event object if it is a mouse event, or **null** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  asMouseEvent(): MouseEvent | null;

  /**
   * Obtains the touch event.
   *
   * @returns { TouchEvent | null } Touch event object if it is a touch event, or **null** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  asTouchEvent(): TouchEvent | null;

  /**
   * Obtains the key event.
   *
   * @returns { KeyEvent | null } Key event object if it is a key event, or **null** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  asKeyEvent(): KeyEvent | null;
}

/**
 * Input event listener callback type.
 *
 * > **NOTE**
 * >
 * > - **RawInputEventWrapper** is an abstract class. Developers cannot create instances using the `new` operator.
 * >
 * > - The system automatically creates instances when an event is triggered and passes them to the callback through
 * > this parameter.
 * >
 * > - The current callback parameter **event** only encapsulates the following raw input event types:
 * > [MouseEvent]{@link MouseEvent}, [TouchEvent]{@link TouchEvent}, [KeyEvent]{@link KeyEvent}. Developers can obtain
 * > the corresponding event objects using [asMouseEvent]{@link RawInputEventWrapper#asMouseEvent},
 * > [asTouchEvent]{@link RawInputEventWrapper#asTouchEvent}, and [asKeyEvent]{@link RawInputEventWrapper#asKeyEvent}.
 * >
 * > - Do not perform time-consuming operations (such as complex calculations or network requests) in the callback, as
 * > this may cause application lag.
 * >
 * > - The listener executes synchronously on the UI thread, which directly blocks the event processing flow. It is
 * > recommended to only perform simple judgment and calculation.
 *
 * @param { RawInputEventWrapper } event - Input event wrapper. The system automatically creates and passes it.
 *     Developers do not need to create it manually.
 * @returns { InputEventInterceptResult } Event interception result.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type InputEventListener = (
  event: RawInputEventWrapper
) => InputEventInterceptResult;

/**
 * Defines the parameters of the edge light effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface EdgeLightParams {
  /**
   * The location of the edge light effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  position: EdgeLightPosition;

  /**
   * Projection length of the edge streamer along the flow direction.
   * <br>Negative values are treated as 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  length: Length;

  /**
   * The luminous intensity of the Edge Streamer effect.
   * <br>Valid range: [0.0, 1.0].Default value is 1.
   * <br>Value 0.0 means the light effect is completely invisible.
   * <br>Value 1.0 means the light effect is at maximum brightness.
   * <br>Values exceeding 1.0 will be clamped to 1.0.
   * <br>Negative values are treated as 0.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  intensity?: double;

  /**
   * The color of the light effect.
   * <br>If not specified, the default color is white (#FFFFFF).
   *
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  color?: ResourceColor;

  /**
   * The thickness (width) of the light effect line.
   * <br>Negative values are treated as 0.
   * <br>If not specified, the default value is 0vp.
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  thickness?: Length;
}

/**
 * Defines the parameters of the center of gravity.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface GravityCenterOptions {
  /**
   * Specifies whether the current component is the center of gravity.
   * <br>Default value:false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  gravityCenter?: boolean;

  /**
   * Defines the gravitational strength of the attraction/repulsion force at the gravitational center.
   * <br>Default value:0.
   * <br>Negative numbers are repulsion, positive numbers are attractionn.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  gravityIntensity?: double;
}

/**
 * Smart gesture response behavior configuration object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface SmartGestureShortcutOptions {

  /**
   * Smart gesture response priority. Currently only **GestureShortcut.PRIMARY** is supported, indicating the component
   * serves as the preferred response target for smart gesture operations such as swiping and clicking.
   *
   * Default value: **GestureShortcut.PRIMARY**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: GestureShortcut;

  /**
   * Whether the current component responds to smart gestures.
   *
   * **true**: The component responds to smart gestures.
   *
   * **false**: The component does not respond to smart gestures.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enabled?: boolean;

  /**
   * Whether to display and retain the selected state after the component is selected by a smart gesture operation.
   *
   * **true**: Show the selection indicator.
   *
   * **false**: Do not show the selection indicator.
   *
   * When **enabled** is **true**, the default value is **true**; when **enabled** is **false**, the default value is
   * **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectable?: boolean;
}
