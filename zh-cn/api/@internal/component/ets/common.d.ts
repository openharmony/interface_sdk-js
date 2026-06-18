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
*
*
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
type window = import('../api/@ohos.window').default;

/**
 * 定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type SpringLoadingContext = import('../api/@ohos.arkui.dragController').default.SpringLoadingContext;

/**
 * 定义拖拽的悬停检测配置参数的接口。
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
  freezeWhenInactive : boolean;

  /**
   * 自定义组件的重用类型。
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
   * 要重用的自定义组件集合。
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
 * 定义自定义组件的重用类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type ReusePoolOwnership = 'shared' | 'perInstance';

/**
 * 定义内存优化策略的类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum ReusableMemOptStrategy {

  /**
   * 没有内存优化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * CustomComponent负责内存优化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}

/**
 * 定义组件复用类装饰器的选项。
 *
 * @interface ReusableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface ReusableOptions {

  /**
   * CustomComponent重用的内存优化策略
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
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
   * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
   *
   * <p><strong>NOTE</strong>:
   * <br>Threshold percentage for displaying the character counter.
   * <br>The character counter is displayed when the number of characters that have been entered is greater than
   * the maximum number of characters multiplied by the threshold percentage value.
   * <br>When displayed, the character counter is in the following format:
   * <br>Number of characters that have been entered/Maximum number of characters allowed.
   * <br>It is visible when the number of characters entered is greater than
   * the character limit multiplied by the threshold percentage value.
   * <br>Value range: [1, 100]
   * <br>If the value is not an integer, it is rounded down to the nearest integer.
   * <br>If the value exceeds the valid value range, the character counter is not displayed.
   * <br>If the value is <em>undefined</em>, the character counter is displayed, but this parameter has no effect.
   * </p>
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * If the current input character count reaches the maximum character count and users want to exceed the
   * normal input, the border will turn red. If this parameter is true, the red border displayed.
   *
   * <p><strong>NOTE</strong>:
   * <br>Whether to highlight the text box border and character counter subscript in red.
   * <br>If options is not set, the text box border and character counter subscript turn red
   * <br>when the number of characters entered reaches the limit.
   * <br>If the character counter is displayed and thresholdPercentage is set to a valid value,
   * the text box border and character counter subscript turn red when the number of entered characters exceeds the limit.
   * <br>The value true (default) means to highlight the text box border and character counter subscript in red.
   * </p>
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  highlightBorder?: boolean;

  /**
   * It is the color of counter when textField hasn't wanted to exceed the maximum character count.
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  counterTextColor?: ColorMetrics;

  /**
   * It is the color of counter when textField wants to exceed the maximum character count.
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  counterTextOverflowColor?: ColorMetrics;
}

/**
 * Defines the options of decoration.
 *
 * @interface TextDecorationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;

  /**
   * 装饰线粗细。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  thicknessScale?: number;
}

/**
 * 定义组件类装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义组件类装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义组件类装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义组件类装饰器
 *
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
 * 定义ComponentV2类装饰器
 * ComponentV2是一个ClassDecorator，它支持ComponentOptions作为参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义ComponentV2类装饰器
 * ComponentV2是一个ClassDecorator，它支持ComponentOptions作为参数。
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
 * 定义Entry类装饰器的选项。
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @form
 * @since 10
 */
/**
 * 定义Entry类装饰器的选项。
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * 定义Entry类装饰器的选项。
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
   * 命名路由名称。
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @since 10
   */
  /**
   * 命名路由名称。
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * 命名路由名称。
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
   * 要传递的LocalStorage。
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @since 10
   */
  /**
   * 要传递的LocalStorage。
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * 要传递的LocalStorage。
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
  useSharedStorage? : boolean;
}

/**
 * 定义Entry类Decorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义Entry类Decorator。
 *
 * Entry is a ClassDecorator and it supports LocalStorage as parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义Entry类Decorator。
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
 * 定义Entry类Decorator。
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
 * 定义观察类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义观察类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义观察类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义观察类装饰器。
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
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare const ObservedV2: ClassDecorator;

/**
 * 定义预览类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义预览类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义预览类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义预览类装饰器。
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
 * 定义BuilderParam属性装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义BuilderParam属性装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义BuilderParam属性装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义BuilderParam属性装饰器
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
 * 定义@Local装饰器，用于表示自定义组件内部状态
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Local装饰器，用于表示自定义组件内部状态
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
 * 定义@Param装饰器，用于接受外部参数的装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Param装饰器，用于接受外部参数的装饰器
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
 * 定义@Once装饰器，用于跟@Param一起使用
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Once装饰器，用于跟@Param一起使用
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
 * 定义@Event装饰器，用于自定义组件的输出
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Event装饰器，用于自定义组件的输出
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
 * 定义StatePropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义StatePropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义StatePropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义StatePropertyDecorator。
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
 * 定义propPropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义propPropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义propPropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义propPropertyDecorator。
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
 * 定义链接属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义链接属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义链接属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义链接属性装饰器。
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
 * 定义ObjectLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义ObjectLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义ObjectLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义ObjectLink属性装饰器。
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
  allowOverride?: string;
}

/**
 * 定义属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义属性装饰器。
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
 * 在定义提供者属性装饰器时，`aliasName` 是唯一的匹配键。如果 `aliasName` 是默认值，则默认属性名称将被视为 `aliasName`。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 在定义提供者属性装饰器时，`aliasName` 是唯一的匹配键。如果 `aliasName` 是默认值，则默认属性名称将被视为 `aliasName`。
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
 * 定义System Env Key的类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class SystemEnvKey<T> {

  /**
   * 系统env key对应的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  private type?: T;

  /**
   * 构造函数。
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
 * 定义可写的系统环境变量键。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class WritableSystemEnvKey<T> extends SystemEnvKey<T> {}

/**
 * 定义只读的系统环境变量键。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class ReadonlySystemEnvKey<T> extends SystemEnvKey<T> {}

/**
 * 定义自定义环境Key。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CustomEnvKey<S> {

  /**
   * 自定义env key对应的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  private type?: S;

  /**
   * 创建自定义环境密钥
   *
   * @returns { 自定义EnvKey<T> } 自定义EnvKey
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static create<T>(): CustomEnvKey<T>;

  /**
   * 构造函数。
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
 * 定义系统环境键。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class WritableEnvKey {

  /**
   * 定义系统环境键方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly DIRECTION: WritableSystemEnvKey<Direction>;

  /**
   * 定义系统环境键fontScale。
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
 * 定义只读系统环境键。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class ReadonlyEnvKey {

  /**
   * 系统环境变量避让区域键，用于获取窗口的避让区域，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_AVOID_AREA: ReadonlySystemEnvKey<window.UIEnvWindowAvoidAreaInfoVP>;

  /**
   * 系统环境变量避让区域键，用于获取窗口的避让区域，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_AVOID_AREA_PX: ReadonlySystemEnvKey<window.UIEnvWindowAvoidAreaInfoPX>;

  /**
   * 系统环境变量窗口尺寸键，用于获取窗口的大小，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_SIZE: ReadonlySystemEnvKey<window.SizeInVP>;

  /**
   * 系统环境变量窗口尺寸键，用于获取窗口大小，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_SIZE_PX: ReadonlySystemEnvKey<window.Size>;

  /**
   * 系统环境变量屏幕ID键，用于获取窗口的屏幕ID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_DISPLAY_ID: ReadonlySystemEnvKey<long>;

  /**
   * 系统环境变量系统DPI键，用于获取窗口所在屏幕的系统DPI。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_SYSTEM_DENSITY: ReadonlySystemEnvKey<double>;

  /**
   * 系统环境变量窗口焦点键，用于获取窗口是否获焦。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_IS_FOCUSED: ReadonlySystemEnvKey<boolean>;

  /**
   * 系统环境变量窗口激活键，用于获取窗口是否被激活。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static readonly WINDOW_IS_HIGHLIGHTED: ReadonlySystemEnvKey<boolean>;
}

/**
 * 定义自定义环境PropertyDecorator。
 *
 * @param { CustomEnvKey<T> } key - 自定义环境密钥
 * @returns { PropertyDecorator } CustomEnv装饰器
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator;

/**
 * 定义Env装饰器类型
 *
 * @typedef { function } EnvDecorator
 * @param { SystemProperties } value - 用户输入的环境变量key值
 * @returns { PropertyDecorator } Env装饰器
 * @throws { BusinessError } 140000 - Invalid key for @Env
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare type EnvDecorator = (value: SystemProperties) => PropertyDecorator;

/**
 * 定义Env PropertyDecorator。
 *
 * @param { SystemProperties } key - key value input by the user. [since 22 - 24]
 * @param { SystemEnvKey<T> | SystemProperties } key - 用户输入的键值。【自22至26】
 * @returns { PropertyDecorator } 环境装饰器
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 26.0.0]
 * @atomicservice
 * @since 22 dynamic
 */
declare function Env<T>(key: SystemEnvKey<T> | SystemProperties): PropertyDecorator;

/**
 * 定义系统环境变量枚举值
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare enum SystemProperties {

  /**
   * 系统断点环境变量key，用于获取窗口宽和高的断点
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  BREAK_POINT = 'system.arkui.breakpoint',

  /**
   * 系统环境避让区域键，用于获取窗口的避让区域，单位为视点单位（vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * 系统环境避让区域键，用于获取窗口的避让区域，单位为视点单位（vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_AVOID_AREA = 'system.window.avoidarea',

  /**
   * 系统环境避让区域键，用于获取窗口的避让区域，单位为像素（px）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * 系统环境避让区域键，用于获取窗口的避让区域，单位为像素（px）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_AVOID_AREA_PX = 'system.window.avoidarea.px',

  /**
   * 系统环境窗口大小键，用于获取窗口的尺寸，单位为视点单位（vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * 系统环境窗口大小键，用于获取窗口的尺寸，单位为视点单位（vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_SIZE = 'system.window.size',

  /**
   * 系统环境窗口大小键，用于获取窗口的尺寸，单位为像素（px）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 dynamic
   */
  /**
   * 系统环境窗口大小键，用于获取窗口的尺寸，单位为像素（px）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_SIZE_PX = 'system.window.size.px'
}

/**
 * 定义消费属性装饰器。
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
 * 定义消费者属性装饰器时，`aliasName` 是唯一的匹配键。如果 `aliasName` 是默认值，则默认属性名称将被视为 `aliasName`。
 * 此外，`@Consumer` 会找到最近的 `@Provider`。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义消费者属性装饰器时，`aliasName` 是唯一的匹配键。如果 `aliasName` 是默认值，则默认属性名称将被视为 `aliasName`。
 * 此外，`@Consumer` 会找到最近的 `@Provider`。
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
 * 定义@Computed装饰器，用于减少重复计算
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Computed装饰器，用于减少重复计算
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
 * 定义StorageProp属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义StorageProp属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * 定义StorageProp属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * 定义StorageLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义StorageLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * 定义StorageLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * 定义Watch PropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义Watch PropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义Watch PropertyDecorator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义Watch PropertyDecorator。
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
 * 定义生成器方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义生成器方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义生成器方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义生成器方法装饰器
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
 * 定义样式方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 8
 */
/**
 * 定义样式方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义样式方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义样式方法装饰器
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
 * 定义扩展方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 定义扩展方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义扩展方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义扩展方法装饰器
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
 * @AnimatableExtend装饰器用于自定义可动画的属性方法，该装饰器内定义的函数在动画过程中会被逐帧调用，直到动画结束。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @noninterop
 * @since 10 dynamic
 */
declare const AnimatableExtend: MethodDecorator & ((value: Object) => MethodDecorator);

/**
 * 定义@Monitor装饰器，用于监听V2的状态变量的变化
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Monitor装饰器，用于监听V2的状态变量的变化
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
 * 定义@Monitor的装饰器类型
 *
 * @typedef { function } MonitorDecorator
 * @param { string } value - Monitored path input by the user
 * @param { string[] } args - 用户输入的监控路径
 * @returns { MethodDecorator } 监视器装饰器
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义@Monitor的装饰器类型
 *
 * @typedef { function } MonitorDecorator
 * @param { string } value - Monitored path input by the user
 * @param { string[] } args - 用户输入的监控路径
 * @returns { MethodDecorator } 监视器装饰器
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
/**
 * Defines Monitor Decorator type
 *
 * @typedef { function } MonitorDecorator
 * @param { string | MonitorDecoratorOptions } value - 由用户或配置选项输入的监视路径。
 * @param { string[] } args - 用户输入的监控路径
 * @returns { MethodDecorator } 监视器装饰器
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
 * 定义MonitorDecoratorOptions接口
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
   * 启用通配符功能。
   * 设置为true可启用通配符功能，设置为false可禁用通配符功能。
   * <br>默认值为true。
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
 * 定义IMonitor接口
 *
 * @interface IMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义IMonitor接口
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
   * 变化的状态变量路径数组集合
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 变化的状态变量路径数组集合
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
   * 返回给定路径上最近一次更改前的值与当前值的对应关系。
   * 如果路径不存在，则返回未定义；如果未指定路径，则返回 `dirty` 中第一个路径对应的值对。
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
 * 定义IMonitorValue的接口
 *
 * @interface IMonitorValue<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 定义IMonitorValue的接口
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
   * 获取之前的值
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 获取之前的值
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
   * 获取当前的值
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 获取当前的值
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
   * 监听状态变量路径
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 监听状态变量路径
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
 * 定义 SyncMonitor 方法装饰器。装饰器的路径参数与 Monitor 中定义的相同。
 * 该函数装饰器在功能上等同于启用了 isSynchronous 选项的 UIUtils.addMonitor API。
 * SyncMonitor 必须至少包含一个路径项，多个路径项之间用逗号分隔。
 * 路径项可以是被观察的属性名称，也可以是数组项的索引。SyncMonitor 中的路径
 * 支持在路径项末尾使用通配符，但路径项绝不能出现在路径的开头或中间。
 * 使用一个或多个通配符的其他所有路径都是无效的。
 *
 * 被 @SyncMonitor 装饰的函数可以在 @ObservedV2 对象和 @ComponentV2 中使用。
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
 * 该接口定义非number数据类型的动画运算规则。对非number类型的数据（如数组、结构体、颜色等）做动画，需要实现AnimatableArithmetic\<T\>接口中加法、减法、乘法和判断相等函数，使得该数据能参与动画的插值运算
 * 和识别该数据是否发生改变。即定义它们为实现了AnimatableArithmetic\<T\>接口的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface AnimatableArithmetic<T> {
  /**
   * 定义数据类型的加法运算规则。
   *
   * @param { AnimatableArithmetic<T> } rhs - 加法运算的对象。
   * @returns { AnimatableArithmetic<T> } 加法运算的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * 定义该数据类型的减法运算规则。
   *
   * @param { AnimatableArithmetic<T> } rhs - 减法运算的对象。
   * @returns { AnimatableArithmetic<T> } 减法运算的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * 定义该数据类型的乘法运算规则。
   *
   * @param { number } scale - 乘法运算的系数。
   * @returns { AnimatableArithmetic<T> } 乘法运算的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  multiply(scale: number): AnimatableArithmetic<T>;

  /**
   * 定义该数据类型的相等判断规则。
   *
   * @param { AnimatableArithmetic<T> } rhs - 和自身比较相等的另一个数据对象。
   * @returns { boolean } 是否相等。返回true表示相等，返回false表示不相等。
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
 */
declare const CustomDialog: ClassDecorator;

/**
 * 定义LocalStorageLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 9
 */
/**
 * 定义LocalStorageLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @since 10
 */
/**
 * 定义LocalStorageLink属性装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare const LocalStorageLink: (value: string) => PropertyDecorator;

/**
 * 定义LocalStorageProp属性装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 定义LocalStorageProp属性装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义LocalStorageProp属性装饰器
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
 * 定义组件复用的类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * 定义组件复用的类装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
/**
 * 定义组件复用的类装饰器。
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
/**
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
 * 矩形区域类型。
 * 
 * > **说明：**
 * >
 * > - x和y可以设置正负值百分比。当x设置为'100%'时表示热区往右偏移组件本身宽度大小，当x设置为'-100%'时表示热区往左偏移组件本身宽度大小。当y设置为'100%'时表示热区往下偏移组件本身高度大小，当y设置为
 * > '-100%'时表示热区往上偏移组件本身高度大小。
 * >
 * > - width和height设置百分比时，只能设置正值百分比。width：'100%'表示热区宽度设置为该组件本身的宽度。比如组件本身宽度是100vp，那么'100%'表示热区宽度也为100vp。height：'100%'表示热区
 * > 高度设置为该组件本身的高度。
 * >
 * > - 百分比相对于组件自身宽高进行计算。
 * >
 * > - 当父组件设置[clip]{@link CommonMethod#clip(value: boolean)}(true)时，子组件的响应会受到父组件触摸热区的影响，不在父组件触摸热区内的子组件无法响应手势和事件。
 * >
 * > - width和height不支持calc()的动态计算。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface Rectangle {

  /**
   * 触摸点相对于组件左上角的x轴坐标。
   * 
   * 默认值：0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  x?: Length;

  /**
   * 触摸点相对于组件左上角的y轴坐标。
   * 
   * 默认值：0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  y?: Length;

  /**
   * 触摸热区的宽度。
   * 
   * 默认值：'100%'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width?: Length;

  /**
   * 触摸热区的高度。
   * 
   * 默认值：'100%'
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
 * 由输入工具类型、触摸位置和大小组成的触摸热区。
 * 
 * > **说明：**
 * >
 * > - 当父组件设置[clip]{@link CommonMethod#clip(value: boolean)}为true时，子组件的响应会受到父组件触摸热区的影响，不在父组件触摸热区内的子组件无法响应手势和事件。
 * >
 * > - 如果触摸热区未配置输入工具类型，触摸位置和大小均采用默认值。
 * >
 * > - x和y的计算结果为正值时，分别代表向右偏移和向下偏移；当计算结果为负值时，分别代表向左偏移和向上偏移。
 * >
 * > - width和height采用string类型时，string需采用小写字符否则不生效，支持calc()的动态计算。指定calc()的入参字符串格式为'宽高缩放比例 ± 宽高增量'，宽高缩放比例为百分比，宽高增量单位为px或
 * > vp。例如'calc(80% + 10vp)'中，80%为宽高缩放比例、10vp为宽高增量。width和height采用LengthMetrics类型且单位为percent时，相对于组件自身宽高进行计算，percent(1)代表1
 * > 00%。当计算结果为负值时，采用默认值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface ResponseRegion {

  /**
   * 触摸热区适用的输入工具类型。
   * 
   * 默认值：ResponseRegionSupportedTool.ALL
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
   * 触摸点相对于组件左上角的x轴坐标。
   * 
   * 默认值：LengthMetrics.vp(0)
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
   * 触摸点相对于组件左上角的y轴坐标。
   * 
   * 默认值：LengthMetrics.vp(0)
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
   * 触摸热区的宽度。
   * 
   * 默认值：LengthMetrics.percent(1)
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
   * 触摸热区的高度。
   * 
   * 默认值：LengthMetrics.percent(1)
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
 * 设置动画期望的帧率。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 19]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface ExpectedFrameRateRange {
  /**
   * 期望的最小帧率，单位为帧/秒（fps）。
   * 
   * 取值范围为[0, 设备最大帧率]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  min: number,
  /**
   * 期望的最大帧率，单位为帧/秒（fps）。
   * 
   * 取值范围为[min, 设备最大帧率]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  max: number,
  /**
   * 期望的最优帧率，单位为帧/秒（fps）。
   * 
   * 取值范围为[min, max]。设置为0时，将跟随应用的帧率。
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
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEMI_SILENT = 0,

  /**
   * the all page event is not send
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum AccessibilityRoleType {

  /**
   * ActionSheet component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ACTION_SHEET = 0,

  /**
   * AlertDialog component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ALERT_DIALOG = 1,

  /**
   * AlphabetIndexer component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  INDEXER_COMPONENT = 2,

  /**
   * badge component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BADGE_COMPONENT = 3,

  /**
   * blank component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BLANK = 4,

  /**
   * button component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BUTTON = 5,

  /**
   * 返回按钮类型
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  BACK_BUTTON = 6,

  /**
   * sheet drag bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SHEET_DRAG_BAR = 7,

  /**
   * calendar picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CALENDAR_PICKER = 8,

  /**
   * calendar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CALENDAR = 9,

  /**
   * canvas component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS = 10,

  /**
   * canvas gradient component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_GRADIENT = 11,

  /**
   * canvas pattern component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_PATTERN = 12,

  /**
   * checkbox component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHECKBOX = 13,

  /**
   * checkbox group component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHECKBOX_GROUP = 14,

  /**
   * circle component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CIRCLE = 15,

  /**
   * column split component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COLUMN_SPLIT = 16,

  /**
   * column component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COLUMN = 17,

  /**
   * canvas rendering context 2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CANVAS_RENDERING_CONTEXT_2D = 18,

  /**
   * chart component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CHART = 19,

  /**
   * counter component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  COUNTER = 20,

  /**
   * counter modal component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  CONTAINER_MODAL = 21,

  /**
   * data panel component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DATA_PANEL = 22,

  /**
   * data picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DATE_PICKER = 23,

  /**
   * dialog component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DIALOG = 24,

  /**
   * divider component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DIVIDER = 25,

  /**
   * drag bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  DRAG_BAR = 26,

  /**
   * effect component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  EFFECT_COMPONENT = 27,

  /**
   * ellipse component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ELLIPSE = 28,

  /**
   * flex component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FLEX = 29,

  /**
   * flow item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FLOW_ITEM = 30,

  /**
   * form component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FORM_COMPONENT = 31,

  /**
   * form link component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  FORM_LINK = 32,

  /**
   * gauge component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GAUGE = 33,

  /**
   * grid component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID = 34,

  /**
   * grid col component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_COL = 35,

  /**
   * grid container component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_CONTAINER = 36,

  /**
   * grid item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_ITEM = 37,

  /**
   * grid row component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  GRID_ROW = 38,

  /**
   * hyperlink component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  HYPERLINK = 39,

  /**
   * image component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE = 40,

  /**
   * image animator component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_ANIMATOR = 41,

  /**
   * image bitmap component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_BITMAP = 42,

  /**
   * image data component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_DATA = 43,

  /**
   * image span component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  IMAGE_SPAN = 44,

  /**
   * label component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LABEL = 45,

  /**
   * line component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LINE = 46,

  /**
   * list component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST = 47,

  /**
   * list item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST_ITEM = 48,

  /**
   * list item group component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LIST_ITEM_GROUP = 49,

  /**
   * loading progress component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  LOADING_PROGRESS = 50,

  /**
   * marquee component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MARQUEE = 51,

  /**
   * matrix2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MATRIX2D = 52,

  /**
   * menu component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU = 53,

  /**
   * menu item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU_ITEM = 54,

  /**
   * menu item group component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  MENU_ITEM_GROUP = 55,

  /**
   * navdestination component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAV_ROUTER = 57,

  /**
   * navigation component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION = 58,

  /**
   * navigation bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION_BAR = 59,

  /**
   * navigation menu component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATION_MENU = 60,

  /**
   * navigator component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  NAVIGATOR = 61,

  /**
   * offscreen canvas component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OFFSCREEN_CANVAS = 62,

  /**
   * offscreen canvas rendering context2d component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  OPTION = 64,

  /**
   * panel component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PAPER_PAGE = 66,

  /**
   * path component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATH = 67,

  /**
   * path 2d component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATH2D = 68,

  /**
   * pattern lock component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PATTERN_LOCK = 69,

  /**
   * picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PICKER = 70,

  /**
   * picker view component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PICKER_VIEW = 71,

  /**
   * plugin component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PLUGIN_COMPONENT = 72,

  /**
   * polygon component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POLYGON = 73,

  /**
   * polyline component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  POLYLINE = 74,

  /**
   * pop up component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PROGRESS = 76,

  /**
   * qr code component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  QRCODE = 77,

  /**
   * radio component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RADIO = 78,

  /**
   * rating component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RATING = 79,

  /**
   * rect component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RECT = 80,

  /**
   * refresh component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  REFRESH = 81,

  /**
   * relative container component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RELATIVE_CONTAINER = 82,

  /**
   * remote window component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  REMOTE_WINDOW = 83,

  /**
   * rich editor component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RICH_EDITOR = 84,

  /**
   * rich text component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  RICH_TEXT = 85,

  /**
   * rolepager component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROLE_PAGER = 86,

  /**
   * row component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROW = 87,

  /**
   * row split component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  ROW_SPLIT = 88,

  /**
   * scroll component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SCROLL = 89,

  /**
   * scroll bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SCROLL_BAR = 90,

  /**
   * search component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEARCH = 91,

  /**
   * search field component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SEARCH_FIELD = 92,

  /**
   * select component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SELECT = 93,

  /**
   * shape component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SHAPE = 94,

  /**
   * sidebar container component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SLIDER = 96,

  /**
   * span component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SPAN = 97,

  /**
   * stack component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STACK = 98,

  /**
   * stepper component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STEPPER = 99,

  /**
   * stepper item component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  STEPPER_ITEM = 100,

  /**
   * swiper component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWIPER = 101,

  /**
   * swiper indicator component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWIPER_INDICATOR = 102,

  /**
   * switch component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SWITCH = 103,

  /**
   * symbol glyph component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  SYMBOL_GLYPH = 104,

  /**
   * tab content component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TAB_CONTENT = 105,

  /**
   * tab bar component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TAB_BAR = 106,

  /**
   * tabs component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TABS = 107,

  /**
   * text component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT = 108,

  /**
   * text clock component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_ENTRY = 110,

  /**
   * text input component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_INPUT = 111,

  /**
   * text picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_PICKER = 112,

  /**
   * text timer component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_TIMER = 113,

  /**
   * text area component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_AREA = 114,

  /**
   * text field component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_FIELD = 115,

  /**
   * time picker component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TIME_PICKER = 116,

  /**
   * title bar component type
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  TOGGLER = 118,

  /**
   * uiextensioncomponent component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  UI_EXTENSION_COMPONENT = 119,

  /**
   * video component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  VIDEO = 120,

  /**
   * water flow component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  WATER_FLOW = 121,

  /**
   * web component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  WEB = 122,

  /**
   * xcomponent component type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  XCOMPONENT = 123,

  /**
   * none component type: screen reader will not broadcast the component type.
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
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused
 * @typedef {function} AccessibilityFocusCallback
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
 * 辅助功能操作类型的枚举
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AccessibilityAction {

  /**
   * 未定义的操作类型
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  UNDEFINED_ACTION = 0,

  /**
   * 辅助功能单击操作
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACCESSIBILITY_CLICK = 1
}

/**
 * intercept action的枚举
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AccessibilityActionInterceptResult {

  /**
   * 拦截无障碍Action
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACTION_INTERCEPT = 0,

  /**
   * continue action动作
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACTION_CONTINUE = 1,

  /**
   * 需要冒泡向上透传的类型枚举
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  ACTION_RISE = 2
}

/**
 * 定义在可访问性操作拦截中使用的回调类型。
 * action的值表示可访问性动作类型。
 * @typedef { function } AccessibilityActionInterceptCallback
 * @param { AccessibilityAction } action - 可访问性操作类型的枚举。
 * @returns { AccessibilityActionInterceptResult } 继续执行操作、中断操作或事件冒泡的结果
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult;

/**
 * 动画中定义onFinish回调的类型。
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
   * 当整个动画结束并立即删除时，将触发回调。
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
   * 当动画在逻辑上处于下降状态，但可能仍处于其长尾状态时，将触发回调。
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
 * 事件派发策略。
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
   * 自定义分发不产生影响，系统按当前节点命中状态分发事件。
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
   * 应用指定分发事件到某个子节点，其他兄弟节点是否分发事件交由系统决定。
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
   * 应用指定分发事件到某个子节点，系统不再分发事件到其他兄弟节点。
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
 * 动画效果相关参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface AnimateParam {
  /**
   * 动画持续时间，单位为毫秒。
   * 
   * 默认值：1000
   * 
   * **说明**：1. API版本26.0.0之前，在ArkTS卡片上最大动画持续时间为1000毫秒，若超出则固定为1000毫秒。从API版本26.0.0开始，在ArkTS卡片上最大动画持续时间调整为2000毫秒。
   * 
   * 2. 可以通过在持续时间为0的动画闭包函数中改变属性，以实现停止该属性动画的效果。
   * 3. 设置小于0的值时按0处理。
   * 4. 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
   * 5. curve配置[springMotion]{@link @ohos.curves:curves.springMotion}、[responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}、[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}曲线时，duration不生效。
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
   * 动画播放速度，值越大动画播放越快，值越小播放越慢，为0时无动画效果。
   * 
   * 当设置为+∞时，动画会在当帧结束，动画结束回调会立即执行。
   * 
   * 默认值：1.0
   * 
   * 取值范围：[0, +∞)
   * 
   * **说明**：当设置小于0的值时按1处理。
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  tempo?: number;
  /**
   * 动画曲线。
   * 
   * 推荐以Curve或ICurve形式指定。
   * 
   * 当类型为string时，为动画插值曲线，仅支持以下可选值：
   * 
   * "linear"：动画线性变化。
   * 
   * "ease"：动画开始和结束时的速度较慢，cubic-bezier(0.25、0.1、0.25、1.0)。
   * 
   * "ease-in"：动画播放速度先慢后快，cubic-bezier(0.42, 0.0, 1.0, 1.0)。
   * 
   * "ease-out"：动画播放速度先快后慢，cubic-bezier(0.0, 0.0, 0.58, 1.0)。
   * 
   * "ease-in-out"：动画播放速度先加速后减速，cubic-bezier(0.42, 0.0, 0.58, 1.0)。
   * 
   * "fast-out-slow-in"：标准曲线，cubic-bezier(0.4, 0.0, 0.2, 1.0)。
   * 
   * "linear-out-slow-in"：减速曲线，cubic-bezier(0.0, 0.0, 0.2, 1.0)。
   * 
   * "fast-out-linear-in"：加速曲线，cubic-bezier(0.4, 0.0, 1.0, 1.0)。
   * 
   * "friction"：阻尼曲线，cubic-bezier(0.2, 0.0, 0.2, 1.0)。
   * 
   * "extreme-deceleration"：急缓曲线，cubic-bezier(0.0, 0.0, 0.0, 1.0)。
   * 
   * "rhythm"：节奏曲线，cubic-bezier(0.7, 0.0, 0.2, 1.0)。
   * 
   * "sharp"：锐利曲线，cubic-bezier(0.33, 0.0, 0.67, 1.0)。
   * 
   * "smooth"：平滑曲线，cubic-bezier(0.4, 0.0, 0.4, 1.0)。
   * 
   * "cubic-bezier(x1, y1, x2, y2)"：三次贝塞尔曲线，x1、x2的值必须处于0-1之间。例如"cubic-bezier(0.42, 0.0, 0.58, 1.0)"。
   * 
   * "steps(number,step-position)"：阶梯曲线，number必须设置，为正整数，step-position参数可选，支持设置start或end，默认值为end。例如"steps(3,start)"。
   * 
   * "interpolating-spring(velocity,mass,stiffness,damping)"：具体参数含义参考插值弹簧曲线
   * [curves.interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}。
   * 
   * "responsive-spring-motion(response,dampingFraction,overlapDuration)"：具体参数含义参考弹性跟手动画曲线
   * [curves.responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}。
   * 
   * "spring(velocity,mass,stiffness,damping)"：具体参数含义参考弹簧曲线[curves.springCurve]{@link @ohos.curves:curves.springCurve}。
   * 
   * "spring-motion(response,dampingFraction,overlapDuration)"：具体参数含义参考弹性动画曲线
   * [curves.springMotion]{@link @ohos.curves:curves.springMotion}。
   * 
   * 默认值：Curve.EaseInOut
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
   * 动画延迟播放时间，单位为ms(毫秒)，默认不延时播放。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   * 
   * **说明**：1.delay>=0为延迟播放，delay<0表示提前播放。对于delay<0的情况：当delay的绝对值小于实际动画时长，动画将在开始后第一帧直接运动到delay绝对值的时刻的状态；当delay的绝对值大于等于实际
   * 动画时长，动画将在开始后第一帧直接运动到终点状态。其中实际动画时长等于单次动画时长乘以动画播放次数。
   * 
   * 2. 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  delay?: number;

  /**
   * 动画播放次数。默认播放一次，设置为-1时表示无限次播放。设置为0时表示无动画效果。
   * 
   * 默认值：1 
   * 
   * 取值范围：[-1, +∞)
   * 
   * **说明**：设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  iterations?: number;

  /**
   * 动画播放模式，默认播放完成后从头开始播放。
   * 
   * 默认值：PlayMode.Normal
   * 
   * 相关使用约束请参考PlayMode说明。
   * 
   * > **PlayMode说明：**
   * >
   * > - PlayMode推荐使用PlayMode.Normal和PlayMode.Alternate，此场景下动画的第一轮是正向播放的。如使用PlayMode.Reverse和PlayMode.AlternateReverse，则动画
   * > 的第一轮是逆向播放的，在动画刚开始时会跳变到终止状态，然后逆向播放动画。
   * >
   * > - 使用PlayMode.Alternate或PlayMode.AlternateReverse时，开发者应保证动画最终状态和状态变量的取值一致，即应保证动画的最后一轮是正向播放的。使用PlayMode.Alternate时，
   * > iterations应为奇数。使用PlayMode.AlternateReverse时，iterations应为偶数。
   * >
   * > - 不推荐使用PlayMode.Reverse，此场景下不仅会导致动画刚开始就跳变到终止状态，也会导致动画最终状态和状态变量的取值不同。
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
   * 动画播放完成回调。UIAbility从前台切换至后台时会立即结束仍在步进中的有限循环动画，触发播放完成回调。
   * 
   * 在设置的开发者选项中关闭过渡动画，以及tempo设置为+∞时，动画播放完成回调会立即执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish?: () => void;

  /**
   * 在动画中定义onFinish回调的类型。
   * 
   * 默认值：FinishCallbackType.REMOVED
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
   * 设置动画的期望帧率。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * 曲线对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
interface ICurve {
  /**
   * 插值曲线的插值计算函数，可以通过传入的归一化时间参数返回当前的插值
   *
   * @param { number } fraction - 当前的归一化时间参数。<br/>取值范围：[0,1]<br/>**说明：** <br/>设置的值小于0时，按0处理；设置的值大于1时，按1处理。
   * @returns { number } 返回归一化time时间点对应的曲线插值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interpolate(fraction : number) : number;
}

/**
 * 设置组件的运动路径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface MotionPathOptions {
  /**
   * 位移动画的运动路径，使用[svg路径字符串](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)。path中支持使用
   * start和end进行起点和终点的替代，如：'Mstart.x start.y L50 50 Lend.x end.y Z'，更多说明请参考
   * [绘制路径](docroot://ui/ui-js-components-svg-path.md)。
   * 
   * 设置为空字符串时相当于不设置路径动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  path: string;

  /**
   * 运动路径的起点。
   * 
   * 默认值：0.0
   * 
   * 取值范围：[0.0, 1.0]
   * 
   * 设置小于0.0或大于1.0的值时，按默认值0.0处理。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  from?: number;

  /**
   * 运动路径的终点。
   * 
   * 默认值：1.0
   * 
   * 取值范围：[0.0, 1.0]
   * 
   * 设置小于0.0或大于1.0的值时，按默认值1.0处理，且满足to值 >= 异常值处理后的from值。
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  to?: number;

  /**
   * 是否跟随路径进行旋转。true代表跟随路径进行旋转，false代表不跟随路径进行旋转。
   * 
   * 默认值：false
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
 * 共享元素转场动画参数。
 * 
 * > **说明：**
 * >
 * > type为SharedTransitionEffectType.Exchange时motionPath才会生效。
 * >
 * > type为SharedTransitionEffectType.Exchange时，效果为对匹配的共享元素产生位置、大小的过渡（可通过配置组件的border观察），不支持内容的过渡效果。例如，Text组件在两个页面上使用不同的
 * > fontSize属性值，即绘制内容有大小差异，在sharedTransition动画结束后的最后一帧，Text的fontSize效果会突变为跳转目标页fontSize的效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface sharedTransitionOptions {
  /**
   * 描述共享元素转场动效播放时长。
   * 
   * 默认值：1000 
   * 
   * 单位：毫秒
   * 
   * 取值范围：[0, +∞)
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration?: number;

  /**
   * 动画曲线。
   * 
   * 推荐以Curve或ICurve形式指定。
   * 
   * 当类型为string时，为动画插值曲线，取值参考
   * [AnimateParam](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#animateparam对象说明)的curve参数。
   * 
   * 默认值：Curve.Linear
   *
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  curve?: Curve | string | ICurve;

  /**
   * 延迟播放时间。
   * 
   * 取值范围：[0, +∞)
   * 
   * 默认值：0 
   * 
   * 单位：毫秒
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  delay?: number;

  /**
   * 运动路径信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  motionPath?: MotionPathOptions;

  /**
   * 设置Z轴。
   * 
   * 取值范围：(-∞, +∞)
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  zIndex?: number;

  /**
   * 动画类型。
   * 
   * 默认值：SharedTransitionEffectType.Exchange
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
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GeometryTransitionOptions {
  /**
   * 仅用于if范式下标记始终在组件树上的组件是否跟随做共享动画。true代表跟随做共享动画，false代表不跟随做共享动画。
   * 
   * 默认值：false
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
   * 决定共享元素动画过程中in/out组件在组件树上层级位置的移动策略，默认值：TransitionHierarchyStrategy.ADAPTIVE。
   * 
   * 实际影响绑定的in/out组件相对其他组件的前后重叠关系，常规情况下慎重修改。
   * 
   * 建议在发现共享元素动画过程中出现组件前后重叠关系错误时需要调整再设置此参数。
   * 
   * **系统接口：** 此接口为系统接口。
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
* 线性渐变的参数。
*
* > **说明：**
* >
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
 * @interface LinearGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
* 角度渐变参数。
*
* > **说明：**
* >
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
* > **说明：**
* >
* > metricsColors参数的约束：
* >
* > [ColorMetrics]{@link Graphics:ColorMetrics}表示填充的颜色，可以使用[colorWithSpace]{@link Graphics:ColorMetrics#colorWithSpace}
* > 方法构造指定色域属性的颜色。number表示指定颜色所处的位置，取值范围为[0, 1.0]，0表示需要设置渐变色的容器开始处，1.0表示容器的结束处。为了实现多个颜色渐变效果，多个数组中的number类型参数应递增设置。如果后一个
* > 数组中的number类型参数小于前一个数组的number类型参数，将按照等于前一个数组number值处理。
*
 * @interface SweepGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
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
   * Defines color description in ColorMetrics format for gradients.
   * This parameter takes precedence over colors parameter.
   *
   * @type { ?Array<[ColorMetrics, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  metricsColors?: Array<[ColorMetrics, number]>;

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
}

/**
* 径向渐变参数。
*
* > **说明：**
* >
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
* > **说明：**
* >
* > colors参数的约束：
* >
* > [ResourceColor]{@link ResourceColor}表示填充的颜色，number表示指定颜色所处的位置，取值范围为[0,1.0]，0表示需要设置渐变色的容器的开始处，1.0表示容器的结尾处。想要实现多个颜色渐变
* > 效果时，多个数组中number参数建议递增设置，如后一个数组number参数比前一个数组number小的话，按照等于前一个数组number的值处理。
*
 * @interface RadialGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
 * 共享元素动画过程中in/out组件层级位置移动策略枚举。
 * 
 * | 名称   | 值 | 说明 |
 * | ------ | - | ---- |
 * | NONE  | 0 | 无层级提拉，in/out组件保持原来的层级位置，受父组件scale、position影响。 |
 * | ADAPTIVE | 1 | 有层级提拉，in/out组件中相对低层级的组件被提拉至组件树上in/out组件相对高层级的位置上。
 * 
 * 此模式还会导致被提拉的组件与父组件解绑，不受父组件scale、position影响。
 * 
 * 例如in组件层级高于out组件，开启层级提拉后会在动画过程中将out组件从自己的父组件处解耦，并提拉至in组件的层级位置处，in组件层级位置不变。|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice [since 12 - 12]
 * @since 12 dynamic
 */
declare enum TransitionHierarchyStrategy {
  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 12 - 12]
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
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
 * @interface TranslateOptions
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
   * The param of y direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: number | string;

  /**
   * The param of z direction.
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
 * > **说明：**
 * >
 * > 当组件同时设置了[rotate]{@link CommonMethod#rotate(value: RotateOptions)}和
 * > [scale]{@link CommonMethod#scale(value: ScaleOptions)}属性时，centerX和centerY的取值会发生冲突，此时centerX和centerY的值以最后设定的属性的值为准。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ScaleOptions {

  /**
   * The param of x direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number;

  /**
   * The param of y direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: number;

  /**
   * The param of z direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  z?: number;

  /**
   * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。取值可为string类型，如'50'，'50%'。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerX?: number | string;

  /**
   * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。取值可为string类型，如'50'，'50%'。
   * 
   * 单位：vp
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
 * 定义相对容器的垂直对齐规则。
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
   * 指定锚点组件。
   *
   * @type { ?string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * 指定锚点组件。
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 指定锚点组件。
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
 * 定义相对容器的水平对齐规则。
 *
 * @interface HorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface HorizontalAlignParam {

  /**
   * 指定锚点组件
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * 指定锚点组件
   *
   * @type { string } anchor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 指定锚点组件
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
   * 设置左对齐参数。<br/>API version 23之前，入参类型为{ anchor: string, align: HorizontalAlign }
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
   * 设置右对齐参数。<br/>API version 23之前，入参类型为{ anchor: string, align: HorizontalAlign}
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
   * 设置横向居中对齐方式的参数。<br/>API version 23之前，入参类型为{ anchor: string, align: HorizontalAlign }
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
   * 设置顶部对齐的参数。<br/>API version 23之前，入参类型为{ anchor: string, align: VerticalAlign}
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
   * 设置底部对齐的参数。<br/>API version 23之前，入参类型为{ anchor: string, align: VerticalAlign}
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
   * 设置纵向居中对齐方式的参数。<br/>API version 23，之前入参类型为{ anchor: string, align: VerticalAlign }
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
   * 设置组件在锚点约束下的偏移参数，其值为到左/上侧锚点的距离与锚点间总距离的比值。
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
 * @interface LocalizedHorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
 * @interface LocalizedVerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
 * @interface LocalizedAlignRuleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedAlignRuleOptions {

  /**
   * 设置横向对齐方式的参数，LTR模式时为左对齐，RTL模式时为右对齐。
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LocalizedHorizontalAlignParam;

  /**
   * 设置横向对齐方式的参数，LTR模式时为右对齐，RTL模式时为左对齐。
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LocalizedHorizontalAlignParam;

  /**
   * 设置横向居中对齐方式的参数。
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  middle?: LocalizedHorizontalAlignParam;

  /**
   * 设置纵向顶部对齐的参数。
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LocalizedVerticalAlignParam;

  /**
   * 设置纵向底部对齐的参数。
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LocalizedVerticalAlignParam;

  /**
   * 设置纵向居中对齐方式的参数。
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  center?: LocalizedVerticalAlignParam;

  /**
   * 设置组件在锚点约束下的偏移参数，其值为到左/上侧锚点的距离与锚点间总距离的比值。
   *
   * @type { ?Bias }
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
 * 定义链的风格，支持attributeModifier动态设置属性方法。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ChainStyle {

  /**
   * 组件在约束锚点间均匀分布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SPREAD = 0,

  /**
   * 除首尾2个子组件的其他组件在约束锚点间均匀分布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SPREAD_INSIDE = 1,

  /**
   * 链内子组件无间隙。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PACKED = 2
}

/**
 * 组件旋转参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface RotateOptions {
  /**
   * 旋转轴向量x坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number;

  /**
   * 旋转轴向量y坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: number;

  /**
   * 旋转轴向量z坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  z?: number;

  /**
   * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。取值可为string类型，如'50'，'50%'。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerX?: number | string;

  /**
   * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。取值可为string类型，如'50'，'50%'。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  centerY?: number | string;

  /**
   * z轴锚点，即3D旋转中心点的z轴分量。
   * 
   * 默认值：0
   * 
   * 单位：px
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
   * 相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。
   * 
   * 旋转轴和旋转中心点都基于[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)设定，组件发生位移时，坐标系不会随之移动。
   * 
   * 默认值：0
   * 
   * 单位：px
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
   * 旋转角度。取值为正时相对于旋转轴方向顺时针转动，取值为负时相对于旋转轴方向逆时针转动。取值可为string类型，如'90deg'。
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
 * 指定各轴旋转角的旋转参数选项。
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
   * X轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
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
   * Y轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
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
   * Z轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
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
   * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。
   * 
   * 单位：vp
   * 
   * 默认值：'50%'
   * 
   * 取值范围：(-∞, +∞)
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
   * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。
   * 
   * 单位：vp
   * 
   * 默认值：'50%'
   * 
   * 取值范围：(-∞, +∞)
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
   * z轴锚点，即3D旋转中心点的z轴分量。
   * 
   * 默认值：0
   * 
   * 单位：px
   * 
   * 取值范围：(-∞, +∞)
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
   * 相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。
   * 
   * 旋转轴和旋转中心点都基于[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)设定，组件发生位移时，坐标系不会随之移动。
   * 
   * 默认值：0
   * 
   * 单位：px
   * 
   * 取值范围：(-∞, +∞)
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
 * TransitionOptions通过指定结构体内的参数来指定转场效果。
 * 
 * > **说明：**
 * >
 * > 1. 当使用TransitionOptions类型的入参指定转场效果时，**必须**配合
 * > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)使用才有动画效果，动效时长、曲线、延时跟随
 * > animateTo中的配置。
 * >
 * > 2. 当使用TransitionOptions作为入参，且不指定除type外的任何参数时，此时相当于指定了透明度的转场效果。例如，指定{type: TransitionType.Insert}相当于指定了{type: 
 * > TransitionType.Insert, opacity: 0}的转场效果。而指定了具体效果时，则不会添加默认的透明度转场效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 10
 * @useinstead TransitionEffect
 */
declare interface TransitionOptions {
  /**
   * 指定该转场样式生效的场景。
   * 
   * 默认值：TransitionType.All
   * 
   * **说明：**
   * 
   * 不指定type时默认为TransitionType.All，即插入删除都生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect
   */
  type?: TransitionType;
  /**
   * 设置组件转场时的透明度效果，为插入时起点和删除时终点的值。
   * 
   * 取值范围： [0, 1]
   * 
   * **说明：** 
   * 
   * 设置小于0的非法值时，按0处理；设置大于1的非法值时，按1处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#opacity
   */
  opacity?: number;
  /**
   * 设置组件转场时的平移效果，为插入时起点和删除时终点的值。
   * 
   * -x：横向的平移距离。
   * 
   * -y：纵向的平移距离。
   * 
   * -z：竖向的平移距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#translate
   */
  translate?: TranslateOptions;
  /**
   * 设置组件转场时的缩放效果，为插入时起点和删除时终点的值。
   * 
   * -x：横向放大倍数（或缩小比例）。
   * 
   * -y：纵向放大倍数（或缩小比例）。
   * 
   * -z：当前为二维显示，该参数无效 。
   * 
   * - centerX、centerY指缩放中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为缩放中心点。
   * 
   * - 中心点为(0, 0)代表组件的左上角。
   * 
   * **说明：** 
   * 
   * 设置centerX、centerY为非法字符串时（例如，"illegalString"），默认值为"0"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#scale
   */
  scale?: ScaleOptions;
  /**
   * 设置组件转场时的旋转效果，为插入时起点和删除时终点的值。
   * 
   * -x：横向的旋转向量分量。
   * 
   * -y：纵向的旋转向量分量。
   * 
   * -z：竖向的旋转向量分量。
   * 
   * - centerX、centerY指旋转中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为旋转中心点。
   * 
   * - 中心点为(0, 0)代表组件的左上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TransitionEffect#rotate
   */
  rotate?: RotateOptions;
}

/**
 * 转场边缘类型。
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
   * 窗口的上边缘。
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
   * 窗口的下边缘。
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
   * 窗口的起始边缘，LTR时为左边缘，RTL时为右边缘。
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
   * 窗口的终止边缘，LTR时为右边缘，RTL时为左边缘。
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
 * 定义所有转场效果。
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
}

/**
 * Defined the draw modifier of node. Provides draw callbacks for the associated Node.
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
   * 前景绘制，在关联节点和其子节点绘制后执行
   *
   * @param { DrawContext } drawContext - 用来绘制的drawContext
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  drawForeground(drawContext: DrawContext): void;

  /**
   * 在关联的Node及其所有子节点绘制完成后，在悬浮层中绘制内容。
   *
   * 自定义绘制包含五个层级：内容背景层、内容层、内容前景层、前景层和悬浮层。
   *  - 前景层和悬浮层在子节点之后绘制。
   *  - 悬浮层与前景层的区别在于：悬浮层可以在组件的边界范围外进行绘制。
   * @param { DrawContext } drawContext - 用于绘制的drawContext
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  drawOverlay(drawContext: DrawContext): void;

  /**
   * Invalidate the component, which will cause a re-render of the component.
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
 * 定义TransitionEffect类指定转场效果。
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
   * 禁用转场效果。
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
   * 为组件添加透明度转场效果，出现时透明度从0到1、消失时透明度从1到0，相当于TransitionEffect.opacity(0)。
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
   * 相当于TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START), TransitionEffect.move(
   * TransitionEdge.END))。从START边滑入，END边滑出。即在LTR模式下，从左侧滑入，右侧滑出；在RTL模式下，从右侧滑入，左侧滑出。
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
   * 指定出现时从右侧先缩小再放大滑入、消失时从左侧先缩小再放大滑出的转场效果。自带动画参数，也可覆盖动画参数，自带的动画参数时长600ms，指定动画曲线cubicBezierCurve(0.24, 0.0, 0.50, 1.0)，最小
   * 缩放比例为0.8。
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
   * 设置组件转场时的平移效果。
   *
   * @param { TranslateOptions } options - 组件转场时的平移效果，为插入时起点和删除时终点的值。<br/>-x：横向的平移距离。<br/>-y：纵向的平移距离。<br/>-z：竖向的平移距离。
   * @returns { TransitionEffect<"translate"> } 当前动画平移效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static translate(options: TranslateOptions): TransitionEffect<"translate">;

  /**
   * 设置组件转场时的旋转效果。
   *
   * @param { RotateOptions } options - 组件转场时的旋转效果，为插入时起点和删除时终点的值。<br/>-x：横向的旋转向量分量。<br/>-y：纵向的旋转向量分量。<br/>-z：竖向的旋转向量分量。
   *     <br/>- centerX、centerY指旋转中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为旋转中心点。<br/>- 中心点为(0, 0)代表组件的左上角。<br/>-centerZ指
   *     z轴锚点，即3D旋转中心点的z轴分量，centerZ默认值是0。<br/>-perspective指视距，不支持perspective属性做转场动画。
   * @returns { TransitionEffect<"rotate"> } 当前动画旋转效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static rotate(options: RotateOptions): TransitionEffect<"rotate">;

  /**
   * 设置组件转场时的缩放效果。
   *
   * @param { ScaleOptions } options - 组件转场时的缩放效果，为插入时起点和删除时终点的值。设置的缩放值在组件当前的scale属性上进行叠加，如组件当前scale值为0.8，当转场缩放值设置为0.5时，
   *     组件入场动画的缩放值将从0.4开始执行。<br/>-x：横向放大倍数（或缩小比例）。<br/>-y：纵向放大倍数（或缩小比例）。<br/>-z：当前为二维显示，该参数无效。<br/>- centerX、centerY指缩放
   *     中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为缩放中心点。<br/>- 中心点为(0, 0)代表组件的左上角。<br>**说明：** <br>设置centerX、centerY为非法字符串
   *     时（例如，"illegalString"），默认值为"0"。
   * @returns { TransitionEffect<"scale"> } 当前动画缩放效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static scale(options: ScaleOptions): TransitionEffect<"scale">;

  /**
   * 设置组件转场时的透明度效果。
   *
   * @param { number } alpha - 组件转场时的透明度效果，为插入时起点和删除时终点的值。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置小于0的非法值按0处理，大于1的非法值按1处理。
   * @returns { TransitionEffect<"opacity"> } 当前动画透明度效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static opacity(alpha: number): TransitionEffect<"opacity">;

  /**
   * 设置组件转场时从屏幕边缘滑入和滑出的效果。
   *
   * @param { TransitionEdge } edge - 组件转场时从屏幕边缘滑入和滑出的效果，本质为平移效果，为插入时起点和删除时终点的值。
   * @returns { TransitionEffect<"move"> } 当前动画从屏幕边缘滑入和滑出的效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static move(edge: TransitionEdge): TransitionEffect<"move">;

  /**
   * 设置非对称的转场效果，即出现、消失为两套独立不同的动画，效果不互为逆过程。具体效果可参考
   * [示例2](docroot://reference/apis-arkui/arkui-ts/ts-transition-animation-component.md#示例2使用不同接口实现图片出现消失)。
   *
   * @param { TransitionEffect } appear - 指定出现的转场效果。<br/>如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。
   * @param { TransitionEffect } disappear - 指定消失的转场效果。<br/>如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。
   * @returns { TransitionEffect<"asymmetric"> } 当前动画非对称的转场效果。
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
   * 构造TransitionEffect对象。
   *
   * @param { Type } type - 转场类型。
   * @param { Effect } effect - 转场参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(type: Type, effect: Effect);

  /**
   * 指定该TransitionEffect的动画参数。
   *
   * @param { AnimateParam } value - 动画参数。</br>该参数只用来指定动画参数，其入参AnimateParam的onFinish回调不生效。</br>如果通过combine进行
   *     TransitionEffect的组合，前一TransitionEffect的动画参数也可用于后一TransitionEffect。
   * @returns { TransitionEffect } 当前动画效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  animation(value: AnimateParam): TransitionEffect;

  /**
   * 对TransitionEffect进行链式组合，以形成包含多种转场效果的TransitionEffect。
   *
   * @param { TransitionEffect } transitionEffect - 被组合的过渡效果。
   * @returns { TransitionEffect } 组合过渡效应。
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
   * 定义预览设备类型
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * 定义预览设备类型
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
   * 定义预览dpi
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * 定义预览dpi
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
* 使用效果模板种类的枚举值。
*
*  **效果模板：**
*
* |  设备类型    | 模糊半径(单位: px)   | 饱和度                 |  亮度  |  颜色  |
* | -------- | ---- | ---------------------- | -------- | -------- |
* | 移动设备  | 0   | 0 | 0 | '#ffffffff'，显示为白色。 |
* | 2in1设备：深色模式  | 80   | 1.5 | 1.0 | '#e52e3033'，显示为淡红色的半透明效果。 |
* | 2in1设备：浅色模式  | 80   | 1.9 | 1.0 | '#e5ffffff'，显示为半透明的深红色。 |
* | Tablet设备  | 0   | 0 | 0 | '#ffffffff'，显示为白色。 |
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 */
declare enum EffectType {

  /**
   * 使用<!--Del-->父级EffectComponent定义的<!--DelEnd-->效果模板进行定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  DEFAULT = 0,

  /**
   * 使用窗口定义的效果模板进行定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  WINDOW_EFFECT = 1
}

/**
 * 定义拖拽手势触发前的各阶段状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum PreDragStatus {

  /**
   * 拖拽手势启动阶段。(按下50ms时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_DETECTING_STATUS = 0,

  /**
   * 拖拽准备完成，可发起拖拽阶段。(按下500ms时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  READY_TO_TRIGGER_DRAG_ACTION = 1,

  /**
   * 拖拽浮起动效发起阶段。(按下800ms时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LIFT_STARTED = 2,

  /**
   * 拖拽浮起动效结束阶段。(浮起动效完全结束时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LIFT_FINISHED = 3,

  /**
   * 拖拽落回动效发起阶段。(落回动效发起时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LANDING_STARTED = 4,

  /**
   * 拖拽落回动效结束阶段。(落回动效结束时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIEW_LANDING_FINISHED = 5,

  /**
   * 拖拽浮起落位动效中断。(已满足READY_TO_TRIGGER_DRAG_ACTION状态后，未达到动效阶段，手指抬手时触发)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ACTION_CANCELED_BEFORE_DRAG = 6,

  /**
   * 拖拽准备完成，可发起拖拽阶段。(按下350ms时触发)
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
 * 定义拖拽过程中拖拽项的相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DragItemInfo {

  /**
   * 设置拖拽过程中显示的图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pixelMap?: PixelMap;

  /**
   * 拖拽过程中显示自定义组件，如果设置了pixelMap，则忽略此值。
   * 
   * **说明：** 
   * 
   * 不支持全局builder。如果builder中使用了[Image]{@link image}组件，应尽量开启同步加载，即配置Image的[syncLoad]{@link ImageAttribute#syncLoad}为true。
   * 该builder只用于生成当次拖拽中显示的图片，builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。
   * 
   * builder传参时，建议传参格式为builder: ()=>{this.customBuilder()}，用以保证this指向的正确性。具体请参考
   * [将@Builder装饰的函数当作CustomBuilder类型使用](docroot://ui/state-management/arkts-builder.md#将builder装饰的函数当作custombuilder类型使用)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  builder?: CustomBuilder;

  /**
   * 拖拽项的附加信息，用于描述拖拽项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  extraInfo?: string;
}

/**
 * 显式动画接口。在需要动画时，显式调用该接口改变状态以产生动画。
 * 
 * >
 * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
 * > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)来明确UI的执行上下文。
 * >
 * > - 不推荐在aboutToAppear、aboutToDisappear中调用动画。
 * >
 * > - 如果在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中调用动画，自
 * > 定义组件内的build还未执行，内部组件还未创建，动画时机过早，动画属性没有初值无法对组件产生动画。
 * >
 * > - 执行[aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear)时，
 * > 组件即将销毁，不能在aboutToDisappear里面做动画。
 * >
 * > - 在组件出现和消失时，可以通过[组件内转场]{@link common}添加动画效果。
 * >
 * > - 组件内转场不支持的属性，可以参考[示例2](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#示例2动画执行结束后组件消失)，使用
 * > animateTo实现动画执行结束后组件消失的效果。
 * >
 * > - 某些场景下，在[状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)中使用animateTo动画，会产生异常效果，具体
 * > 可参考：[在状态管理V2中使用animateTo动画效果异常](docroot://ui/state-management/arkts-new-local.md#在状态管理v2中使用animateto动画效果异常)。
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
*
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
 * 焦点控制模块。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace focusControl {

  /**
   * 方法语句中可使用的全局接口，调用此接口可以主动让焦点在下一帧渲染时转移至参数指定的组件上。
   * 
   * 如果需要指定组件立刻获焦，推荐使用FocusController中的焦点同步转移接口[requestFocus]{@link @ohos.arkui.UIContext:FocusController#requestFocus}。
   *
   * @param { string } value - 目标组件使用接口key(value: string)或id(value: string)绑定的字符串。
   * @returns { boolean } 返回值表示是否成功给目标组件申请到焦点。若参数指向的目标组件存在且已挂载组件树，并具备获焦能力，则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function requestFocus(value: string): boolean;
}

/**
 * 光标样式。
 *
 * > **说明：**
 * >
 * > 直接使用cursorControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取
 * > [UIContext]{@link @ohos.arkui.UIContext}实例，并使用
 * > [getCursorController]{@link @ohos.arkui.UIContext:UIContext#getcursorcontroller}获取绑定实例
 * > 的cursorControl。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type PointerStyle = import('../api/@ohos.multimodalInput.pointer').default.PointerStyle;

/**
 * 控制鼠标光标的显示样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare namespace cursorControl {

  /**
   * 方法语句中可使用的全局接口，调用该接口可更改当前的鼠标光标样式。
   *
   * @param { PointerStyle } value - 设置的鼠标样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function setCursor(value: PointerStyle): void;

  /**
   * 方法语句中可使用的全局接口，调用此接口可将鼠标光标恢复成默认箭头样式。
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
 * [BaseEvent]{@link BaseEvent}中参数target的类型。
 * 
 * 触发事件的元素对象的显示区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface EventTarget {

  /**
   * 目标元素的区域信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  area: Area;

  /**
   * 开发者设置的节点[id]{@link CommonMethod#id}。默认值：undefined
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
 * 定义输入源对应的设备类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SourceType {

  /**
   * 未知输入源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Unknown = 0,

  /**
   * 鼠标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Mouse = 1,

  /**
   * 触摸屏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TouchScreen = 2,

  /**
   * 按键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  KEY = 4,

  /**
   * 手柄。
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
 * 定义输入源对应的工具类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SourceTool {

  /**
   * 未知输入源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Unknown = 0,

  /**
   * 手指输入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Finger = 1,

  /**
   * 手写笔输入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Pen = 2,

  /**
   * 鼠标输入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOUSE = 3,

  /**
   * 触控板输入。触控板单指输入被视为鼠标输入操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOUCHPAD = 4,

  /**
   * 手柄输入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
  Repeat = 0,

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
  Stretch = 1,

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
  Round = 2,

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
  Space = 3
}

/**
 * 模糊样式类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum BlurStyle {
  /**
   * 轻薄材质模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Thin,

  /**
   * 普通厚度材质模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Regular,

  /**
   * 厚材质模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Thick,

  /**
   * 近距景深模糊。
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
   * 中距景深模糊。
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
   * 远距景深模糊。
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
   * 超远距景深模糊。
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
   * 关闭模糊。
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
   * 组件超轻薄材质模糊。
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
   * 组件轻薄材质模糊。
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
   * 组件普通材质模糊。
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
   * 组件厚材质模糊。
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
   * 组件超厚材质模糊。
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
 * 定义背景模糊激活策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum BlurStyleActivePolicy {
  /**
   * 模糊效果跟随窗口焦点状态变化，非焦点不模糊，焦点模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  FOLLOWS_WINDOW_ACTIVE_STATE = 0,

  /**
   * 一直有模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  ALWAYS_ACTIVE = 1,

  /**
   * 一直无模糊效果。
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
* 设置颜色模式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 设置颜色模式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ThemeColorMode {

  /**
   * 跟随系统深浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 跟随系统深浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SYSTEM = 0,

  /**
   * 固定使用浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 固定使用浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  LIGHT = 1,

  /**
   * 固定使用深色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 固定使用深色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
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
   * 颜色模式跟随系统
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_SYSTEM = 0,

  /**
   * 颜色模式跟随目标组件
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
* 取色模式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 取色模式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum AdaptiveColor {

  /**
   * 不使用取色模糊。使用默认的颜色作为蒙版颜色。采用非DEFAULT方式较耗时。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 不使用取色模糊。使用默认的颜色作为蒙版颜色。采用非DEFAULT方式较耗时。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  DEFAULT = 0,

  /**
   * 使用取色模糊。将取色区域的颜色平均值作为蒙版颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 使用取色模糊。将取色区域的颜色平均值作为蒙版颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  AVERAGE = 1
}

/**
 * 全屏模态转场方式枚举类型，用于设置全屏模态转场类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ModalTransition {
  /**
   * 全屏模态上下切换动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT = 0,

  /**
   * 全屏模态无转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 1,

  /**
   * 全屏模态透明度渐变动画。
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
 * 继承自[BlurStyleOptions]{@link BlurStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
  /**
   * 模糊激活策略。
   * 
   * 默认值：BlurStyleActivePolicy.ALWAYS_ACTIVE
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
   * 模糊不生效时使用的背景色。该参数需配合policy参数使用。当policy使模糊失效时，控件模糊效果会被移除，如果设置了inactiveColor会使用inactiveColor作为控件背景色。
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
* 继承自[BlurStyleOptions]{@link BlurStyleOptions}，设置内容模糊选项。
*
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 继承自[BlurStyleOptions]{@link BlurStyleOptions}，设置内容模糊选项。
*
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {}

/**
* 灰阶模糊参数。
*
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
* 灰阶模糊参数。
*
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BlurOptions {

  /**
   * 灰阶模糊参数，两参数取值范围均为[0,127] 。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗程度，参数值越大调整效果越明显（黑白色变得越灰
   * ），有效值范围0-127。例如：设置参数为（20,20），图片中的黑色像素RGB:[0, 0, 0]会调整为[20,20,20]，白色像素RGB:[255,255,255]会调整为[235,235,235]（255-20），图像中
   * 的彩色像素维持不变。
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 灰阶模糊参数，两参数取值范围均为[0,127] 。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗程度，参数值越大调整效果越明显（黑白色变得越灰
   * ），有效值范围0-127。例如：设置参数为（20,20），图片中的黑色像素RGB:[0, 0, 0]会调整为[20,20,20]，白色像素RGB:[255,255,255]会调整为[235,235,235]（255-20），图像中
   * 的彩色像素维持不变。
   *
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  grayscale: [number, number];
}

/**
 * 系统自适应调节参数，系统会默认开启根据芯片算力进行自适应效果调节的能力。
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
   * 系统自适应调节参数，推荐不携带该参数。该参数只影响低算力设备，低算力设备的定义由设备厂商决定。在低芯片算力的设备上，会根据算力和负载等条件，自动决策是否使用低算力的近似效果替代原有效果，比如模糊效果会结合接口中携带的模糊相关参数值
   * 及其他低算力处理逻辑，进行自适应效果降级处理。如果想关闭该功能，可以将该标志置为true。
   * 
   * 默认值：false
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
* 内容模糊选项。
*
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 内容模糊选项。
*
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface BlurStyleOptions {

  /**
   * 内容模糊效果使用的深浅色模式。
   *
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @type { ?ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * 内容模糊效果使用的深浅色模式。
   *
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @type { ?ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  colorMode?: ThemeColorMode;

  /**
   * 内容模糊效果使用的取色模式。
   *
   * 默认值：AdaptiveColor.DEFAULT
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * 内容模糊效果使用的取色模式。
   *
   * 默认值：AdaptiveColor.DEFAULT
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * 内容模糊效果程度。
   *
   * 默认值：1.0
   *
   * 取值范围：[0.0, 1.0]
   *
   * 1.0表示模糊程度最高。
   *
   * 0.0表示模糊程度最低。
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  scale?: number;

  /**
   * 灰阶模糊参数。
   *
   * 默认值：grayscale: [0,0]
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 灰阶模糊参数。
   *
   * 默认值：grayscale: [0,0]
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blurOptions?: BlurOptions;
}

/**
 * 背景效果参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface BackgroundEffectOptions {

  /**
   * 模糊半径，取值范围：[0, +∞)，默认为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius: number;

  /**
   * 饱和度，取值范围：[0, +∞)，默认为1。推荐取值范围：[0, 50]。
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
   * 亮度，取值范围：[0, +∞)，默认为1。推荐取值范围：[0, 2]。
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
   * 颜色，默认透明色。
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
   * 背景模糊效果使用的取色模式，默认为DEFAULT。使用AVERAGE时color必须带有透明度，取色模式才生效。
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
   * 灰阶模糊参数，默认为[0,0]。
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
   * 模糊激活策略。
   * 
   * 默认值：BlurStyleActivePolicy.ALWAYS_ACTIVE
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
   * 模糊不生效时使用的背景色。该参数需配合policy参数使用。当policy使模糊失效时，控件模糊效果会被移除，如果设置了inactiveColor会使用inactiveColor作为控件背景色。
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
* 前景效果参数。
*
 * @interface ForegroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ForegroundEffectOptions {

  /**
   * 模糊半径，取值范围：[0, +∞)。
   *
   * 仅在组件范围内生效，与其他接口连用时超出组件范围的效果无法生效。
   *
   * @type { number }
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
 * @interface PickerDialogButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  primary?: boolean;
}

/**
* 阴影类型。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 阴影类型。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ShadowType {

  /**
   * 颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  COLOR = 0,

  /**
   * 模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  BLUR = 1
}

/**
* 阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。
*
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
* 阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。
*
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
* 阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。
*
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
* 阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。
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
   * 阴影模糊半径。
   *
   * 取值范围：[0, +∞)，API版本26.0.0开始取值范围变更为(-∞, +∞)
   *
   * 单位：px
   *
   * **说明：**
   *
   * API版本26.0.0之前，设置小于0的值时，按值为0处理。从API版本26.0.0开始，设置的值即为最终取值，当设置负数值时阴影消失。
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果radius为Resource类型，则传入的值需为number类型。
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * 阴影模糊半径。
   *
   * 取值范围：[0, +∞)，API版本26.0.0开始取值范围变更为(-∞, +∞)
   *
   * 单位：px
   *
   * **说明：**
   *
   * API版本26.0.0之前，设置小于0的值时，按值为0处理。从API版本26.0.0开始，设置的值即为最终取值，当设置负数值时阴影消失。
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果radius为Resource类型，则传入的值需为number类型。
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * 阴影模糊半径。
   *
   * 取值范围：[0, +∞)，API版本26.0.0开始取值范围变更为(-∞, +∞)
   *
   * 单位：px
   *
   * **说明：**
   *
   * API版本26.0.0之前，设置小于0的值时，按值为0处理。从API版本26.0.0开始，设置的值即为最终取值，当设置负数值时阴影消失。
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果radius为Resource类型，则传入的值需为number类型。
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 阴影模糊半径。
   *
   * 取值范围：[0, +∞)，API版本26.0.0开始取值范围变更为(-∞, +∞)
   *
   * 单位：px
   *
   * **说明：**
   *
   * API版本26.0.0之前，设置小于0的值时，按值为0处理。从API版本26.0.0开始，设置的值即为最终取值，当设置负数值时阴影消失。
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果radius为Resource类型，则传入的值需为number类型。
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
   * 阴影类型。
   *
   * 默认值：COLOR
   *
   * @type { ?ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 阴影类型。
   *
   * 默认值：COLOR
   *
   * @type { ?ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type?: ShadowType;

  /**
   * 阴影的颜色。
   *
   * 默认为黑色。
   *
   * **说明：**
   *
   * 从API version 11开始，该接口支持使用ColoringStrategy实现智能取色，智能取色功能不支持在ArkTS卡片、[textShadow]{@link TextAttribute#textShadow}中使用。
   *
   * 当前仅支持平均取色和主色取色，智能取色区域为shadow绘制区域。
   *
   * 支持使用'average'字符串触发智能平均取色模式，支持使用'primary'字符串触发智能主色模式。
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * 阴影的颜色。
   *
   * 默认为黑色。
   *
   * **说明：**
   *
   * 从API version 11开始，该接口支持使用ColoringStrategy实现智能取色，智能取色功能不支持在ArkTS卡片、[textShadow]{@link TextAttribute#textShadow}中使用。
   *
   * 当前仅支持平均取色和主色取色，智能取色区域为shadow绘制区域。
   *
   * 支持使用'average'字符串触发智能平均取色模式，支持使用'primary'字符串触发智能主色模式。
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * 阴影的颜色。
   *
   * 默认为黑色。
   *
   * **说明：**
   *
   * 从API version 11开始，该接口支持使用ColoringStrategy实现智能取色，智能取色功能不支持在ArkTS卡片、[textShadow]{@link TextAttribute#textShadow}中使用。
   *
   * 当前仅支持平均取色和主色取色，智能取色区域为shadow绘制区域。
   *
   * 支持使用'average'字符串触发智能平均取色模式，支持使用'primary'字符串触发智能主色模式。
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 阴影的颜色。
   *
   * 默认为黑色。
   *
   * **说明：**
   *
   * 从API version 11开始，该接口支持使用ColoringStrategy实现智能取色，智能取色功能不支持在ArkTS卡片、[textShadow]{@link TextAttribute#textShadow}中使用。
   *
   * 当前仅支持平均取色和主色取色，智能取色区域为shadow绘制区域。
   *
   * 支持使用'average'字符串触发智能平均取色模式，支持使用'primary'字符串触发智能主色模式。
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
   * 阴影的X轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetX为Resource类型，则传入的值需为number类型。
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * 阴影的X轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetX为Resource类型，则传入的值需为number类型。
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * 阴影的X轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetX为Resource类型，则传入的值需为number类型。
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 阴影的X轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetX为Resource类型，则传入的值需为number类型。
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
   * 阴影的Y轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetY为Resource类型，则传入的值需为number类型。
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * 阴影的Y轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetY为Resource类型，则传入的值需为number类型。
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * 阴影的Y轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetY为Resource类型，则传入的值需为number类型。
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 阴影的Y轴偏移量。
   *
   * 默认值：0
   *
   * 单位：px
   *
   * **说明：**
   *
   * 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。
   *
   * 如果offsetY为Resource类型，则传入的值需为number类型。
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
   * 阴影是否内部填充。true表示阴影在内部填充，false表示阴影在外部填充。
   *
   * 默认值：false。
   *
   * **说明：**
   *
   * [textShadow]{@link TextAttribute#textShadow}中该字段不生效。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 阴影是否内部填充。true表示阴影在内部填充，false表示阴影在外部填充。
   *
   * 默认值：false。
   *
   * **说明：**
   *
   * [textShadow]{@link TextAttribute#textShadow}中该字段不生效。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fill?: boolean;
}

/**
* 组件阴影效果。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 组件阴影效果。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ShadowStyle {

  /**
   * 超小阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 超小阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_XS = 0,

  /**
   * 小阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 小阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_SM = 1,

  /**
   * 中阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 中阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_MD = 2,

  /**
   * 大阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 大阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_DEFAULT_LG = 3,

  /**
   * 浮动小阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 浮动小阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_FLOATING_SM = 4,

  /**
   * 浮动中阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Floating medium shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OUTER_FLOATING_MD = 5
}

/**
 * 定义阴影参数。
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * 定义阴影参数。
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * 定义阴影参数。
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface MultiShadowOptions {

  /**
   * 当前阴影半径。
   *
   * API version 10及以前，默认值：5；API version 11及以后，默认值：20。单位：vp；number类型取值范围大于0；说明：设置小于等于0的值时，按默认值显示。
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 当前阴影半径。
   *
   * API version 10及以前，默认值：5；API version 11及以后，默认值：20。单位：vp；number类型取值范围大于0；说明：设置小于等于0的值时，按默认值显示。
   *
   * @type { ?(number | Resource) }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * 当前阴影半径。
   *
   * API version 10及以前，默认值：5；API version 11及以后，默认值：20。单位：vp；number类型取值范围大于0；说明：设置小于等于0的值时，按默认值显示。
   *
   * @type { ?(number | Resource) }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  radius?: number | Resource;

  /**
   * 当前阴影的坐标X。
   *
   * X轴偏移量。number类型取值范围不做限制。默认值：5。单位：vp
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 当前阴影的坐标X。
   *
   * X轴偏移量。number类型取值范围不做限制。默认值：5。单位：vp
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * 当前阴影的坐标X。
   *
   * X轴偏移量。number类型取值范围不做限制。默认值：5。单位：vp
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  offsetX?: number | Resource;

  /**
   * 当前的阴影坐标Y。
   *
   * X轴偏移量。number类型取值范围不做限制。默认值：5。单位：vp
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 当前的阴影坐标Y。
   *
   * X轴偏移量。number类型取值范围不做限制。默认值：5。单位：vp
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * 当前的阴影坐标Y。
   *
   * X轴偏移量。number类型取值范围不做限制。默认值：5。单位：vp
   *
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  offsetY?: number | Resource;
}

/**
 * 扩展安全区域的枚举类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SafeAreaType {

  /**
   * 系统默认非安全区域，包括状态栏、导航栏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SYSTEM = 0,

  /**
   * 设备的非安全区域，例如刘海屏或挖孔屏区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CUTOUT = 1,

  /**
   * 软键盘区域。
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
 * 扩展安全区域的边缘。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SafeAreaEdge {

  /**
   * 上方区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP = 0,

  /**
   * 下方区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM = 1,

  /**
   * 前部区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 2,

  /**
   * 尾部区域。
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
 * 扩展布局安全区域的枚举类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LayoutSafeAreaType {

  /**
   * 设置后，组件的布局范围可扩展至组件级安全区([safeAreaPadding]{@link CommonMethod#safeAreaPadding})和页面级安全区（状态栏、导航栏、挖孔区）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SYSTEM = 0
}

/**
 * 扩展安全区域的边缘。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LayoutSafeAreaEdge {

  /**
   * 上方区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 0,

  /**
   * 下方区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 1,

  /**
   * 前部区域。LTR模式时表示左侧区域，RTL模式表示右侧区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  START = 2,

  /**
   * 尾部区域。LTR模式时表示右侧区域，RTL模式表示左侧区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  END = 3,

  /**
   * 垂直区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  VERTICAL = 4,

  /**
   * 水平区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HORIZONTAL = 5,

  /**
   * 全部区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ALL = 6
}

/**
 * 指定半模态的高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SheetSize {
  /**
   * 指定半模态高度为半模态所在窗口的60%。
   * 
   * 在TV设备上半模态高度为半模态所在窗口的50%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MEDIUM = 0,

  /**
   * 指定半模态高度几乎为半模态所在窗口的高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LARGE = 1,

  /**
   * 指定半模态高度为适应内容的高度。
   * 
   * **说明：**
   * 
   * 1. FIT_CONTENT是半模态容器高度去适应孩子builder根节点的布局。此场景下builder根节点的高度不能使用百分比，两者不能相互依赖彼此的布局。
   * 2. 如果半模态使用SheetSize.FIT_CONTENT自适应模式，且类型设置为居中弹窗或跟手弹窗，API version 22及之前版本，高度大于最大高度，则显示最大高度，高度小于最小高度，则显示最小高度。
   * 
   * API version 23开始，高度大于最大高度，则显示最大高度，高度小于最小高度，按照实际自适应高度生效。
   * 
   * 其中居中弹窗和跟手弹窗最小高度为320vp，最大高度为窗口短边的90%。
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
 * 基础事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface BaseEvent {

  /**
   * 触发手势事件的元素对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  target: EventTarget;

  /**
   * 事件时间戳，触发事件时距离系统启动的时间间隔。
   * 
   * 单位：ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  timestamp: number;

  /**
   * 事件输入设备的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  source: SourceType;

  /**
   * 水平轴值。
   * 
   * 默认值：0
   * 
   * **说明：**
   * 
   * 当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。
   * 
   * 对于Shift+鼠标滚轮触发的横向滚动场景，axisHorizontal为0，滚动值体现在axisVertical中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  axisHorizontal ?: number;

  /**
   * 垂直轴值。
   * 
   * 默认值：0
   * 
   * **说明：**
   * 
   * 当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。
   * 
   * 对于Shift+鼠标滚轮触发的横向滚动场景，滚动值体现在axisVertical中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  axisVertical ?: number;

  /**
   * 双指缩放比例。
   * 
   * 默认值：0
   * 
   * **说明：**
   * 
   * 仅在触控板上通过双指缩放操作触发的Pinch手势，或在轴事件中，可以获取该值；在其他场景下，获取到的将是默认值。
   * 
   * 缩放比例是指在双指缩放事件触发过程中，双指当前距离与最初按下时距离的比值。
   * 
   * 取值范围：[0, +∞)
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
   * 按压的压力大小。
   * 
   * 默认值：0
   * 
   * 取值范围：[0,1]，典型值0.913168，压感大小与数值正相关。在部分设备中，由于设备的硬件参数配置不同，可能会返回大于1的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  pressure: number;

  /**
   * 手写笔在设备平面上的投影与设备平面X轴的夹角。
   * 
   * 单位：deg
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tiltX: number;

  /**
   * 手写笔在设备平面上的投影与设备平面Y轴的夹角。
   * 
   * 单位：deg
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tiltY: number;

  /**
   * 手写笔与设备平面的夹角。
   * 
   * 单位：deg
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
   * 事件输入源的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sourceTool: SourceTool;

  /**
   * 获取功能键按压状态。报错信息请参考以下错误码。支持功能键'Ctrl'\|'Alt'\|'Shift'。
   * 
   * > **说明：**
   * >
   * > 此接口不支持在手写笔场景下使用。
   *
   * @param { Array<string> } keys - 功能键列表。
   * @returns { boolean } 返回功能键按压状态。当功能键均处于按压状态时返回true，否则返回false。
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
   * 触发当前事件的输入设备ID。
   * 
   * 默认值：0
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  deviceId?: number;

  /**
   * 事件发生的屏幕ID。  
   * 
   * 默认值：0
   * 
   * 取值范围：[0, +∞)
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
  slice?: Length | EdgeWidths | LocalizedEdgeWidths;

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
  repeat?: RepeatMode;

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
  source?: string | Resource | LinearGradient;

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
  width?: Length | EdgeWidths | LocalizedEdgeWidths;

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
  outset?: Length | EdgeWidths | LocalizedEdgeWidths;

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
 * 用于组件宽度和高度的布局策略。
 * >  **说明：**
 * >
 * > -
 * LayoutPolicy支持设置三种布局策略：matchParent（自适应父组件布局）、wrapContent（根据内容自适应但不超过父组件尺寸的布局）和fixAtIdealSize（根据内容自适应，可能超过父组件尺寸的布局）。具体
 * 示例代码参见[设置布局策略](./ts-universal-attributes-size.md#示例5设置布局策略)。
 * >
 * > - wrapContent和fixAtIdealSize场景，组件无法通过内容确定大小时，如果组件大小有默认值，则按照默认值进行测算；如果没有默认值，则按照宽高(0,0)进行测算。
 * >
 * > -
 * 容器设置wrapContent，并且有子组件设置matchParent时（包括仅一边设置matchParent），容器先由确定大小的子组件撑大，设置matchParent的子组件再匹配容器大小；如果没有确定大小的子组件，容器和子组件大
 * 小均为0。
 * >
 * > - LayoutPolicy优先级低于constraintSize。
 * >
 * > - 从API version 15开始，仅Row和Column组件的width和height属性支持设置LayoutPolicy类型参数，其他组件设置LayoutPolicy类型参数后与不设置宽度或高度表现一致；从API
 * version 20开始，所有基础组件均支持设置LayoutPolicy类型参数。
 * >
 * > -
 * 当Row、Column、Flex组件主轴尺寸自适应子组件，且子组件A仅交叉轴设置matchParent时，API版本26.0.0之前，子组件A不参与Row、Column、Flex组件的主轴尺寸测量过程，此时Row、Column、Fle
 * x组件主轴方向不自适应子组件A的尺寸；从API版本26.0.0开始，子组件A会参与Row、Column、Flex组件的主轴尺寸测量过程，此时Row、Column、Flex组件主轴方向会自适应子组件A的尺寸。交叉轴方向同理。
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
   * 当前组件自适应父组件布局时，其大小与父组件内容区相等，不包括padding，border和safeAreaPadding。
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
   * 当前组件自适应子组件（内容）时，其大小与子组件（内容）相等，并且其大小受父组件内容区大小约束。
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
   * 当前组件自适应子组件（内容）时，其大小与子组件（内容）相等，并且其大小不受父组件内容区大小约束。
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
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ClickEvent extends BaseEvent {

  /**
   * 点击位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * 触摸点在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * 点击位置在当前应用屏幕坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayX: number;

  /**
   * 点击位置在当前应用屏幕坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayY: number;

  /**
   * 点击位置在当前应用窗口坐标系中的X坐标。onClick的distanceThreshold设置后，点击位置为抬手点。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowX: number;

  /**
   * 点击位置在当前应用窗口坐标系中的Y坐标。onClick的distanceThreshold设置后，点击位置为抬手点。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowY: number;

  /**
   * 点击位置在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ClickEvent#windowX
   */
  screenX: number;

  /**
   * 点击位置在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ClickEvent#windowY
   */
  screenY: number;

  /**
   * 点击位置在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。onClick的
   * [distanceThreshold]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}设置后，点击位置为抬手
   * 点。触发事件的是键盘或手柄时，点击位置为被点击元素的中心点。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x: number;

  /**
   * 点击位置在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。onClick的distanceThreshold设置后，点击位置为抬手点。触发事件的是键盘或手柄
   * 时，点击位置为被点击元素的中心点。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y: number;

  /**
   * 表示事件是由左手点击还是右手点击触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * 阻止默认事件。
   * 
   * **说明：** 该接口仅支持部分组件使用，当前支持组件：RichEditor、Hyperlink，不支持的组件使用时会抛出异常。暂不支持异步调用和提供Modifier接口。
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
   * 获取点击位置相对于当前组件实时位置的左上角坐标。
   *
   * @returns { Coordinate2D } - 点击位置相对于当前组件实时位置的左上角坐标。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface HoverEvent extends BaseEvent {

  /**
   * 鼠标光标或手写笔位置在当前组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  x?: number;

  /**
   * 鼠标光标或手写笔位置在当前组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  y?: number;

  /**
   * 鼠标光标或手写笔位置在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  windowX?: number;

  /**
   * 鼠标光标或手写笔位置在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  windowY?: number;

  /**
   * 鼠标光标或手写笔位置在当前应用屏幕坐标系中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  displayX?: number;

  /**
   * 鼠标光标或手写笔位置在当前应用屏幕坐标系中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  displayY?: number;

  /**
   * 鼠标光标或手写笔位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * 相对于全局显示的点的 Y 坐标。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。 
   * 
   * **原子化服务API：**  从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  stopPropagation: () => void;
}

/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface MouseEvent extends BaseEvent {

  /**
   * 鼠标按键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  button: MouseButton;

  /**
   * 鼠标动作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  action: MouseAction;

  /**
   * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * 鼠标光标在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * 鼠标位置在当前应用屏幕坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayX: number;

  /**
   * 鼠标位置在当前应用屏幕坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayY: number;

  /**
   * 鼠标位置在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowX: number;

  /**
   * 鼠标位置在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowY: number;

  /**
   * 鼠标位置在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead MouseEvent#windowX
   */
  screenX: number;

  /**
   * 鼠标位置在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead MouseEvent#windowY
   */
  screenY: number;

  /**
   * 鼠标位置在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  x: number;

  /**
   * 鼠标位置在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  y: number;

  /**
   * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stopPropagation: () => void;

  /**
   * 鼠标设备在二维平面X轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。
   * 
   * **说明：** API版本26.0.0之前，rawDeltaX的返回值并非鼠标硬件的原始移动数据，而是原始数据缩小了X倍，X为系统的显示大小比例。API版本26.0.0开始，rawDeltaX的返回值为鼠标硬件的原始移动数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  rawDeltaX?: number;

  /**
   * 鼠标设备在二维平面Y轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。
   * 
   * **说明：** API版本26.0.0之前，rawDeltaY的返回值并非鼠标硬件的原始移动数据，而是原始数据缩小了X倍，X为系统的显示大小比例。API版本26.0.0开始，rawDeltaY的返回值为鼠标硬件的原始移动数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  rawDeltaY?: number;

  /**
   * 当前按下的鼠标按键集合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  pressedButtons?: MouseButton[];

  /**
   * 获取点击位置相对于当前组件实时位置的左上角坐标。
   *
   * @returns { Coordinate2D } - 点击位置相对于当前组件实时位置的左上角坐标。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;

  /**
   * 用于事件处理的唯一标识。
   * 
   * 取值范围：[0, +∞)
   * 
   * **说明：** 在使用[postInputEventWithStrategy]{@link BuilderNode:BuilderNode#postInputEventWithStrategy}接口分发事件时会使用该字段，事件每分
   * 发一次字段会增加100000。
   * 
   * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  eventHandleId?: number;

  /**
   * 获取当前帧的所有历史点信息。历史点可用于实现更平滑的绘制效果。
   * 
   * 该接口仅能在[MouseEvent]{@link MouseEvent}中调用，用于获取触发[onMouse]{@link CommonMethod#onMouse}时当前帧历史点的相关信息，不同设备每帧的鼠标事件上报频率不同，一
   * 帧通常只会上报一个鼠标事件，如果当前帧收到的[MouseEvent]{@link MouseEvent}数目大于1，会将该帧最后一个点通过[onMouse]{@link CommonMethod#onMouse}返回，其余点作为历
   * 史点。
   *
   * @returns { Array<MouseHistoricalPoint> } 当前帧的所有历史点信息组成的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getHistoricalPoints?(): Array<MouseHistoricalPoint>;
}

/**
 * 鼠标事件历史点信息。
 * 
 * 历史点按时间顺序排列，获取到的第一个历史点是最早发生的事件的信息，最后一个是最新发生事件的信息。历史点的数量取决于系统事件队列的配置和硬件性能。历史点主要用于如下场景：
 * 
 *  1. 平滑绘制：使用历史点可以实现更平滑的绘制效果，特别是在鼠标快速移动时。
 *  
 *  2. 手势识别：通过分析历史点的轨迹，可以识别各种鼠标手势。
 *  
 *  3. 性能优化：在一个事件回调中处理多个历史点，减少事件处理频率，提升性能。
 *  
 *  4. 轨迹分析：分析鼠标移动轨迹，用于绘图应用或手势控制。
 *  
 *  5. 数据分析：历史点中的timestamp可用于计算鼠标移动速度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface MouseHistoricalPoint {

  /**
   * 鼠标指针相对于被点击组件左上角的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * 鼠标指针相对于被点击组件左上角的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * 鼠标指针相对于整个屏幕左上角的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayX: double;

  /**
   * 鼠标指针相对于整个屏幕左上角的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayY: double;

  /**
   * 鼠标指针相对于应用窗口左上角的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  windowX: double;

  /**
   * 鼠标指针相对于应用窗口左上角的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  windowY: double;

  /**
   * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  globalDisplayX: double;

  /**
   * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  globalDisplayY: double;

  /**
   * 鼠标事件的时间戳。
   * 
   * 单位：ns
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
 * @extends BaseEvent
 * @typedef AccessibilityHoverEvent
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
   * @type { AccessibilityHoverType }
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
   * @type { number }
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
   * @type { number }
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
   * @type { number }
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
   * @type { number }
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
   * @type { number }
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
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  windowY: number;

  /**
   * 相对于全局显示的点的 Y 坐标。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;
}

/**
 * 触摸事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TouchObject {

  /**
   * 触摸事件的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type: TouchType;

  /**
   * 手指唯一标识符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  id: number;

  /**
   * 触摸点在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * 点击位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * 触摸点在当前应用屏幕坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayX: number;

  /**
   * 触摸点在当前应用屏幕坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayY: number;

  /**
   * 触摸点在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowX: number;

  /**
   * 触摸点在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  windowY: number;

  /**
   * 触摸点在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TouchObject#windowX
   */
  screenX: number;

  /**
   * 触摸点在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead TouchObject#windowY
   */
  screenY: number;

  /**
   * 触摸点在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x: number;

  /**
   * 触摸点在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y: number;

  /**
   * 表示事件是由左手点击还是右手点击触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hand?: InteractionHand;

  /**
   * 当前手指按下的时间。
   * 
   * 单位：ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pressedTime?: number;

  /**
   * 当前手指按压的压力值。
   * 
   * 取值范围：[0,65535)，压力越大，值越大。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  pressure?: number;

  /**
   * 当前手指按压区域的宽度。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  width?: number;

  /**
   * 当前手指按压区域的高度。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  height?: number;

  /**
   * 获取点击位置相对于当前组件实时位置的左上角坐标。
   *
   * @returns { Coordinate2D } - 点击位置相对于当前组件实时位置的左上角坐标。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * 历史点信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface HistoricalPoint {

  /**
   * 历史点对应触摸事件的基础信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  touchObject: TouchObject;

  /**
   * 历史点对应触摸事件中手指与屏幕的触摸区域大小。
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size: number;

  /**
   * 历史点对应触摸事件的压力大小。
   * 
   * 默认值：0
   * 
   * 取值范围：[0,65535)，压力越大，值越大。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  force: number;

  /**
   * 历史点对应触摸事件的时间戳，表示触发事件时距离系统启动的时间间隔。
   * 
   * 单位：ns
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
 * 继承于[BaseEvent]{@link BaseEvent}。在非事件注入场景下，changedTouches是按屏幕刷新率重采样的点，而touches是按器件刷新率上报的点，因此changedTouches与touches的数据可
 * 能不同。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TouchEvent extends BaseEvent {

  /**
   * 触摸事件的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type: TouchType;

  /**
   * 全部屏幕触点（多指）的信息，每个元素代表一个触点。在使用该属性时，需要校验是否为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  touches: TouchObject[];

  /**
   * 发生变化而产生事件的手指信息。在使用该属性时，需要校验是否为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  changedTouches: TouchObject[];

  /**
   * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stopPropagation: () => void;

  /**
   * 获取当前帧的所有历史点。不同设备每帧的触摸事件频率不同，且该接口仅能在[TouchEvent]{@link TouchEvent}中调用，用于获取触发
   * [onTouch]{@link CommonMethod#onTouch}时当前帧历史点的相关信息。[onTouch]{@link CommonMethod#onTouch}一帧通常只会调用一次，如果当前帧收到的
   * [TouchEvent]{@link TouchEvent}数目大于1，会将该帧最后一个点通过[onTouch]{@link CommonMethod#onTouch}返回，其余点作为历史点。如果多指在同一
   * 帧上报事件，可能触发多次onTouch。
   *
   * @returns { Array<HistoricalPoint> } 由历史点组成的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getHistoricalPoints(): Array<HistoricalPoint>;

  /**
   * 阻止默认事件。
   * 
   * **说明：** 该接口仅支持部分组件使用，当前支持组件：[Hyperlink]{@link hyperlink}，不支持的组件在使用时会抛出异常。暂不支持异步调用和提供Modifier接口。
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
   * 用于事件处理的唯一标识。
   * 
   * 取值范围：[0, +∞)
   * 
   * **说明：** 在使用[postInputEventWithStrategy]{@link BuilderNode:BuilderNode#postInputEventWithStrategy}接口分发事件时会使用该字段，事件每分
   * 发一次字段会增加100000。
   * 
   * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
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
 * 轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 17 dynamic
 */
declare interface AxisEvent extends BaseEvent {

  /**
   * 轴事件的动作类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  action: AxisAction;

  /**
   * 鼠标光标在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayX?: number;

  /**
   * 鼠标光标或手写笔位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  globalDisplayY?: number;

  /**
   * 鼠标光标在当前应用屏幕坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  displayX: number;

  /**
   * 鼠标光标在当前应用屏幕坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  displayY: number;

  /**
   * 鼠标光标在当前应用窗口坐标系中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  windowX: number;

  /**
   * 鼠标光标在当前应用窗口坐标系中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  windowY: number;

  /**
   * 鼠标光标在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  x: number;

  /**
   * 鼠标光标在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  y: number;

  /**
   * 鼠标轴滚动步长配置。
   * 
   * **说明：** 仅支持鼠标滚轮，取值范围：[0~65535]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  scrollStep?: number;

  /**
   * 用于事件处理的唯一标识。
   * 
   * 取值范围：[0, +∞)
   * 
   * **说明：** 在使用[postInputEventWithStrategy]{@link BuilderNode:BuilderNode#postInputEventWithStrategy}接口分发事件时会使用该字段，事件每分
   * 发一次字段会增加100000。
   * 
   * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  eventHandleId?: number;

  /**
   * 激活[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  propagation: Callback<void>;

  /**
   * 获取此次轴事件的水平轴值。
   *
   * @returns { number } 水平轴值。
   *     <br>单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  getHorizontalAxisValue(): number;

  /**
   * 获取此次轴事件的垂直轴值。
   *
   * @returns { number } 垂直轴值。
   *     <br>单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  getVerticalAxisValue(): number;

  /**
   * 返回此次轴事件双指缩放的比例。
   *
   * @returns { number } 双指缩放比例。<br/> **说明：** 缩放比例指的是触控板双指缩放事件触发过程中双指当前的距离与双指最初按下时的距离的比值。<br/>默认值：0
   *     <br/>取值范围：[0, +∞)<br/>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  getPinchAxisScaleValue(): number;

  /**
   * 检测此轴事件是否包含指定的轴类型。
   *
   * @param { AxisType } axisType - 轴事件的轴类型。
   * @returns { boolean } 此轴事件是否包含指定的轴类型。
   *     <br>true：包含指定的轴类型；false：不包含指定的轴类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  hasAxis(axisType: AxisType): boolean;

  /**
   * 获取点击位置相对于当前组件实时位置的左上角坐标。
   *
   * @returns { Coordinate2D } - 点击位置相对于当前组件实时位置的左上角坐标。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCurrentLocalPosition?(): Coordinate2D;
}

/**
 * 组件区域变化时的回调类型。
 * 
 * oldValue表示目标元素变化之前的宽高。
 * 
 * newValue表示目标元素变化之后的宽高。
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
 * 自定义手势识别器判定回调类型。
 *
 * @param { BaseGestureEvent } event - 当前基础手势事件信息。
 * @param { GestureRecognizer } current - 当前即将要响应的识别器对象。
 * @param { Array<GestureRecognizer> } recognizers - 响应链上的其他手势识别器对象。
 * @param { Array<TouchRecognizer> } [touchRecognizers] - 响应链上的Touch识别器对象。 默认值为null，表示在当前手势绑定组件及其子孙组件没有可响应的Touch识别
 *     器。 [since 20]
 * @returns { GestureJudgeResult } 手势是否裁决成功的判定结果。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult;

/**
 * 系统内置手势与响应链上其他组件的手势设置并行关系的回调事件类型。
 *
 * @param { GestureRecognizer } current - 当前组件的系统内置手势识别器，当前版本只提供内置的[GestureType]{@link GestureControl.GestureType}.PAN_GESTURE类型的手势识别器。
 * @param { Array<GestureRecognizer> } others - 响应链上更高优先级的其他组件相同类别的手势识别器。
 * @returns { GestureRecognizer } 与current识别器绑定并行关系的某个手势识别器。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;

/**
 * 手势与响应链上其他组件的手势设置并行关系的回调事件类型。
 *
 * @param { GestureRecognizer } current - 当前组件的手势识别器，当前仅支持[GestureType]{@link GestureControl.GestureType}.PAN_GESTURE类型的手势识别器。
 * @param { Array<GestureRecognizer> } others - 响应链上优先级高于当前组件的其他组件所持有的同类型[GestureType]{@link GestureControl.GestureType}的手势识别器。
 * @returns { GestureRecognizer } 与current识别器绑定并行关系的某个手势识别器。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type ShouldRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;

/**
 * 组件转场动画的结束回调类型。
 *
 * @param { boolean } transitionIn - 该入参表示转场动画的结束回调类型。<br/>该参数为true表示该转场回调是出现动画的结束回调，该参数为false表示该转场回调是消失动画的结束回调。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type TransitionFinishCallback = (transitionIn: boolean) => void;

/**
 * 定义了在onNeedSoftkeyboard中被使用的回调函数类型。
 * 组件获焦时回调函数被调用，返回值表示是否需要拉起键盘。
 *
 * @typedef { function } OnNeedSoftkeyboardCallback
 * @returns { boolean } True表示键盘需要被拉起，false表示不需要被拉起。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare type OnNeedSoftkeyboardCallback = () => boolean;

/**
 * 动态指定手势识别器是否参与手势处理的回调事件类型，回调内参数的生命周期跟随回调本身，参数内的方法仅支持在回调内同步使用。
 *
 * @param { BaseGestureEvent } event - [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后的基础手势事件的信息。 <br/>
 *     **说明：** <br/>仅包含BaseGestureEvent的信息，不包含其子类拓展信息。<br/>axisHorizontal和axisVertical的值为0。
 * @param { Array<GestureRecognizer> } recognizers - [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后，
 *     所有手势识别器对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void;

/**
 * 定义在[onGestureCollectIntercept]{@link CommonMethod#onGestureCollectIntercept}中使用的回调类型。
 *
 * @param { Array<GestureRecognizer> } recognizers - 响应链上组件的手势识别器对象。
 * @param { Array<TouchRecognizer> } [touchRecognizers] - 响应链上组件的触摸识别器对象。<br/>默认值为null。
 * @returns { GestureCollectIntervention } 手势收集干预结果。
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
 * 带有release函数的像素图对象。
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
 * 当设置[DragResult]{@link DragResult}为DROP_ENABLED后，可设置DragBehavior为复制（COPY）或剪切（MOVE）。当DragBehavior为复制（COPY）时，拖拽对象的角标会显示加
 * 号；为剪切（MOVE）时，拖拽对象的角标不会显示加号。DragBehavior用来向开发者描述数据的处理方式是复制（COPY）还是剪切（MOVE），但无法最终决定对数据的实际处理方式。DragBehavior会通过onDragEnd带
 * 回给数据拖出方，发起拖拽的一方可通过DragBehavior来区分做出的是复制（COPY）还是剪切（MOVE）数据的不同行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DragBehavior {

  /**
   * 指定对数据的处理方式为复制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  COPY = 0,

  /**
   * 指定对数据的处理方式为剪切。
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
 * 拖拽动画类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum DragAnimationType {

  /**
   * 使用默认拖拽动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * 使用跟手变形拖拽动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_HAND_MORPH = 1
}

/**
 * 拖拽相关的数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type UnifiedData = import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData;

/**
 * 拖拽相关数据的简介。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Summary = import('../api/@ohos.data.unifiedDataChannel').default.Summary;

/**
 * 标准化数据类型。
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
 * 作为startDataLoading的入参对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type DataSyncOptions = import('../api/@ohos.data.unifiedDataChannel').default.GetDataParams;

/**
 * 落入操作时使用的数据加载参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type DataLoadParams = import('../api/@ohos.data.unifiedDataChannel').default.DataLoadParams;

/**
 * 定义拖拽操作的结果及组件的落入选定状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DragResult {

  /**
   * 拖拽结果尚未设置，在[onDragStart]{@link CommonMethod#onDragStart}，[onDragEnter]{@link CommonMethod#onDragEnter}，
   * [onDragMove]{@link CommonMethod#onDragMove}，[onDragLeave]{@link CommonMethod#onDragLeave}，
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  UNKNOWN = -1,

  /**
   * 拖拽成功，在[onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DRAG_SUCCESSFUL = 0,

  /**
   * 拖拽失败，在[onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DRAG_FAILED = 1,

  /**
   * 拖拽取消，在[onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DRAG_CANCELED = 2,

  /**
   * 组件允许落入，在[onDragEnter]{@link CommonMethod#onDragEnter}，[onDragMove]{@link CommonMethod#onDragMove}，
   * [onDragLeave]{@link CommonMethod#onDragLeave}中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DROP_ENABLED = 3,

  /**
   * 组件不允许落入，在[onDragEnter]{@link CommonMethod#onDragEnter}，[onDragMove]{@link CommonMethod#onDragMove}，
   * [onDragLeave]{@link CommonMethod#onDragLeave}中使用。
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
* 混合模式。
*
* > **说明：**
* >
* > blendMode枚举中，s表示源像素，d表示目标像素，sa表示源像素透明度，da表示目标像素透明度，r表示混合后像素，ra表示混合后像素透明度。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @since 11
 */
/**
* 混合模式。
*
* > **说明：**
* >
* > blendMode枚举中，s表示源像素，d表示目标像素，sa表示源像素透明度，da表示目标像素透明度，r表示混合后像素，ra表示混合后像素透明度。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BlendMode {

  /**
   * 将上层图像直接覆盖到下层图像上，不进行任何混合操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 将上层图像直接覆盖到下层图像上，不进行任何混合操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * 将源像素覆盖的目标像素清除为完全透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 将源像素覆盖的目标像素清除为完全透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  CLEAR = 1,

  /**
   * r = s，只显示源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s，只显示源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC = 2,

  /**
   * r = d，只显示目标像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d，只显示目标像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST = 3,

  /**
   * r = s + (1 - sa) * d，将源像素按照透明度进行混合，覆盖在目标像素上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s + (1 - sa) * d，将源像素按照透明度进行混合，覆盖在目标像素上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_OVER = 4,

  /**
   * r = d + (1 - da) * s，将目标像素按照透明度进行混合，覆盖在源像素上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d + (1 - da) * s，将目标像素按照透明度进行混合，覆盖在源像素上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_OVER = 5,

  /**
   * r = s * da，只显示源像素中与目标像素重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * da，只显示源像素中与目标像素重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_IN = 6,

  /**
   * r = d * sa，只显示目标像素中与源像素重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d * sa，只显示目标像素中与源像素重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_IN = 7,

  /**
   * r = s * (1 - da)，只显示源像素中与目标像素不重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * (1 - da)，只显示源像素中与目标像素不重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_OUT = 8,

  /**
   * r = d * (1 - sa)，只显示目标像素中与源像素不重叠的部分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d * (1 - sa), retains the parts of the destination pixels that do not overlap with the source.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_OUT = 9,

  /**
   * r = s * da + d * (1 - sa)，在源像素和目标像素重叠的地方绘制源像素，在源像素和目标像素不重叠的地方绘制目标像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * da + d * (1 - sa)，在源像素和目标像素重叠的地方绘制源像素，在源像素和目标像素不重叠的地方绘制目标像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SRC_ATOP = 10,

  /**
   * r = d * sa + s * (1 - da)，在源像素和目标像素重叠的地方绘制目标像素，在源像素和目标像素不重叠的地方绘制源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = d * sa + s * (1 - da): The part of the target pixels that overlap with the source pixels
   * and the part of the source pixels that do not overlap with the target pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DST_ATOP = 11,

  /**
   * r = s * (1 - da) + d * (1 - sa)，在源像素和目标像素重叠的地方不显示像素，不重叠的地方显示源像素和目标像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * (1 - da) + d * (1 - sa)，在源像素和目标像素重叠的地方不显示像素，不重叠的地方显示源像素和目标像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  XOR = 12,

  /**
   * r = min(s + d, 1)，将源像素值与目标像素值相加，并将结果作为新的像素值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = min(s + d, 1):
   * New pixels resulting from adding the source pixels to the target pixels are displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  PLUS = 13,

  /**
   * r = s * d，将源像素与目标像素进行乘法运算，并将结果作为新的像素值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * d，将源像素与目标像素进行乘法运算，并将结果作为新的像素值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  MODULATE = 14,

  /**
   * r = s + d - s * d，将两个图像的像素值相加，然后减去它们的乘积来实现混合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s + d - s * d，将两个图像的像素值相加，然后减去它们的乘积来实现混合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SCREEN = 15,

  /**
   * 根据目标像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 根据目标像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAY = 16,

  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver，当两个颜色重叠时，较暗的颜色会覆盖较亮的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver，当两个颜色重叠时，较暗的颜色会覆盖较亮的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DARKEN = 17,

  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver，将源图像和目标图像中的像素进行比较，选取两者中较亮的像素作为最终的混合结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver，将源图像和目标图像中的像素进行比较，选取两者中较亮的像素作为最终的混合结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  LIGHTEN = 18,

  /**
   * 使目标像素变得更亮来反映源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 使目标像素变得更亮来反映源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COLOR_DODGE = 19,

  /**
   * 使目标像素变得更暗来反映源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 使目标像素变得更暗来反映源像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COLOR_BURN = 20,

  /**
   * 根据源像素的值来决定目标像素变得更亮或者更暗。根据源像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 根据源像素的值来决定目标像素变得更亮或者更暗。根据源像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  HARD_LIGHT = 21,

  /**
   * 根据源像素来决定使用LIGHTEN混合模式还是DARKEN混合模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 根据源像素来决定使用LIGHTEN混合模式还是DARKEN混合模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SOFT_LIGHT = 22,

  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生高对比度的效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver: The final pixel is the result of subtracting
   * the darker of the two pixels (source and target) from the lighter one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DIFFERENCE = 23,

  /**
   * rc = s + d - 2 * (s * d), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生柔和的效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * rc = s + d - 2 * (s * d), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生柔和的效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  EXCLUSION = 24,

  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d，将源图像与目标图像进行乘法混合，得到一张新的图像。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d，将源图像与目标图像进行乘法混合，得到一张新的图像。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  MULTIPLY = 25,

  /**
   * 保留源图像的亮度和饱和度，但会使用目标图像的色调来替换源图像的色调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 保留源图像的亮度和饱和度，但会使用目标图像的色调来替换源图像的色调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  HUE = 26,

  /**
   * 保留目标像素的亮度和色调，但会使用源像素的饱和度来替换目标像素的饱和度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 保留目标像素的亮度和色调，但会使用源像素的饱和度来替换目标像素的饱和度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SATURATION = 27,

  /**
   * 保留源像素的饱和度和色调，但会使用目标像素的亮度来替换源像素的亮度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 保留源像素的饱和度和色调，但会使用目标像素的亮度来替换源像素的亮度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  COLOR = 28,

  /**
   * 保留目标像素的色调和饱和度，但会用源像素的亮度替换目标像素的亮度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 保留目标像素的色调和饱和度，但会用源像素的亮度替换目标像素的亮度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  LUMINOSITY = 29
}

/**
* 指示如何将指定的混合模式应用于视图的内容。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @since 11
 */
/**
* 指示如何将指定的混合模式应用于视图的内容。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BlendApplyType {

  /**
   * 在目标图像上按顺序混合视图的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 在目标图像上按顺序混合视图的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  FAST = 0,

  /**
   * 将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  OFFSCREEN = 1,

  /**
   * 创建离屏画布时，先拷贝一份背景初始化画布，再将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。
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
 * 非线性形变动画模式的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum DistortionMode {

  /**
   * distortion动画自适应实现
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DISTORTION_AUTO = 0,

  /**
   * distortion动画一直使能
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DISTORTION_ENABLED = 1,

  /**
   * 禁用distortion动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DISTORTION_DISABLED = 2
}

/**
 * 边缘光效动画模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum EdgeLightMode {
  /**
   * 自适应边缘光效动画。
   * 
   * 根据设备运算能力，在低算力设备上关闭，在中高算力设备上开启。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  EDGELIGHT_AUTO = 0,
  /**
   * 开启边缘光效动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  EDGELIGHT_ENABLED = 1,
  /**
   * 关闭边缘光效动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  EDGELIGHT_DISABLED = 2
}

/**
 * 拖拽事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface DragEvent {

  /**
   * 当前拖拽点相对于全局屏幕的左上角的X坐标。
   *
   * @returns { number } 返回当前拖拽点相对于全局屏幕的左上角的X坐标。<br/>单位：vp，取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalDisplayX(): number;

  /**
   * 当前拖拽点相对于全局屏幕的左上角的Y坐标。
   *
   * @returns { number } 返回当前拖拽点相对于全局屏幕的左上角的Y坐标。<br/>单位：vp，取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalDisplayY(): number;

  /**
   * 获取当前拖拽点相对于屏幕左上角的x轴坐标。
   *
   * @returns { number } 当前拖拽点相对于屏幕左上角的x轴坐标，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getDisplayX(): number;

  /**
   * 获取当前拖拽点相对于屏幕左上角的y轴坐标。
   *
   * @returns { number } 当前拖拽点相对于屏幕左上角的y轴坐标，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getDisplayY(): number;

  /**
   * 获取拖拽点相对于窗口左上角的x轴坐标。
   *
   * @returns { number } 当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getWindowX(): number;

  /**
   * 获取拖拽点相对于窗口左上角的y轴坐标。
   *
   * @returns { number } 当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getWindowY(): number;

  /**
   * 当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。
   * 
   * > **说明：**
   *
   * @returns { number } 返回当前拖拽点相对于窗口左上角的x轴坐标。<br/>单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead DragEvent#getWindowX
   */
  getX(): number;

  /**
   * 当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。
   * 
   * > **说明：**
   *
   * @returns { number } 返回当前拖拽点相对于窗口左上角的y轴坐标。<br/>单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead DragEvent#getWindowY
   */
  getY(): number;

  /**
   * 切换复制和剪贴模式的角标显示状态。
   * 
   * 默认值：DragBehavior.COPY。
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
   * 当拖拽结束时，是否禁用系统默认落位动效。
   * 
   * 应用可将该值设定为true来禁用系统默认落位动效，并实现自己的自定义落位动效。
   * 
   * 当不配置或设置为false时，系统默认落位动效生效，当[setResult]{@link DragEvent#setResult}设置为DRAG_SUCCESSFUL时，落位为缩小消失动效，不为DRAG_SUCCESSFUL时，则
   * 为放大消失动效。
   * 
   * 当未禁用系统默认落位动效时，应用不应再实现自定义动效，以避免动效上的冲突。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  useCustomDropAnimation: boolean;

  /**
   * 设置拖拽动画类型。该属性仅支持在[onDragStart]{@link CommonMethod#onDragStart}阶段设置，可在[onDragStart]{@link CommonMethod#onDragStart}、
   * [onDragEnter]{@link CommonMethod#onDragEnter}、[onDragMove]{@link CommonMethod#onDragMove}、
   * [onDragLeave]{@link CommonMethod#onDragLeave}、
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}、
   * [onDragEnd]{@link CommonMethod#onDragEnd}回调中获取。
   * 
   * 默认值为DEFAULT 
   * 
   * **系统接口：** 此接口为系统接口。
   *
   * @default DragAnimationType.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  dragAnimationType?: DragAnimationType;

  /**
   * 设置拖拽过程中需要自动隐藏的组件uniqueId，支持传入单个uniqueId或数组。
   * 
   * 仅在[onDragStart]{@link CommonMethod#onDragStart}回调中设置生效。拖拽成功发起后，系统会在显示拖拽预览窗口前隐藏目标组件。
   * 
   * 若拖拽源本身也需要隐藏，需要同时传入拖拽源组件的uniqueId。
   * 
   * 组件的uniqueId可通过[UIContext.getFrameNodeById()]{@link @ohos.arkui.UIContext:UIContext#getFrameNodeById}
   * 配合[FrameNode.getUniqueId()]{@link FrameNode:FrameNode#getUniqueId}获取。
   * 
   * 开发者应在[onDragEnd]{@link CommonMethod#onDragEnd}或
   * [onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}中恢复组件显示状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoHideComponentUniqueIds?: int | int[];

  /**
   * 向DragEvent中设置用于拖拽的数据。
   *
   * @param { UnifiedData } unifiedData - 拖拽相关的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setData(unifiedData: UnifiedData): void;

  /**
   * 获取拖拽相关数据。
   *
   * @returns { UnifiedData } 从DragEvent中获取拖拽相关数据。数据获取结果请参考错误码说明。
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
   * 获取所拖拽数据的概要，包括数据类型及大小信息；在延迟拖拽场景下，只能获取到数据类型信息。
   *
   * @returns { Summary } 拖拽相关数据的概要。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSummary(): Summary;

  /**
   * 在DragEvent中设置拖拽结果。
   *
   * @param { DragResult } dragResult - 拖拽结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setResult(dragResult: DragResult): void;

  /**
   * 获取拖拽结果。
   *
   * @returns { DragResult } 从DragEvent中获取的拖拽结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getResult(): DragResult;

  /**
   * 获取拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息。
   *
   * @returns { Rectangle } 拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息，单位vp，其中x和y代表预览图左上角的窗口坐标，width和height代表预览图的尺寸。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getPreviewRect(): Rectangle;

  /**
   * 获取当前拖拽的x轴方向拖动速度。
   *
   * @returns { number } 当前拖拽的x轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从左往右为正，反之为负。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getVelocityX(): number;

  /**
   * 获取当前拖拽的y轴方向拖动速度。
   *
   * @returns { number } 当前拖拽的y轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从上往下为正，反之为负。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getVelocityY(): number;

  /**
   * 获取当前拖拽的主方向拖动速度。
   *
   * @returns { number } 当前拖拽的主方向拖动速度。为xy轴方向速度的平方和的算术平方根，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getVelocity(): number;

  /**
   * 获取功能键按压状态。
   *
   * @param { Array<string> } keys - 获取功能键按压状态。报错信息请参考以下错误码。支持功能键 'Ctrl' | 'Alt' | 'Shift'。<br/>**说明：**<br/>此接口不支持在手写笔场景
   *     下使用。
   * @returns { boolean } 是否被按下，返回true表示被按下，返回false表示未被按下
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
   * 设置自定义落位动效的执行函数，仅在
   * [useCustomDropAnimation]{@link DragEvent#useCustomDropAnimation}为true时有效。
   *
   * @param { Callback<void> } customDropAnimation - 在此回调函数中实现自定义落位动效。<br/> **说明：** <br/>1. 该接口仅在onDrop回调中使用有效。<br/> 2.
   *     使用前需设置useCustomDropAnimation为true，否则该接口不生效。<br/> 3. 不要在动画callback中实现与动效无关的逻辑，避免影响执行效率。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  executeDropAnimation(customDropAnimation: Callback<void>): void;

  /**
   * 设置一个跟手变形落位动效执行完成后的回调，该回调由系统在拖拽框架动效结束后触发。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 1. 该接口仅在[dragAnimationType]{@link DragEvent#dragAnimationType}设置为DragAnimationType.FOLLOW_HAND_MORPH时生效。
   * >
   * > 2. 不要在回调中实现与动效无关的逻辑，避免影响执行效率。
   *
   * @param { Callback<void> } onAnimationFinished - 拖拽框架动效结束后触发的回调。
   * @param { string } [animationOption] - 落位动效参数。<br> 参数为JSON字符串格式，包含以下字段：<br> **CubicCurveEnable**: boolean，表示是否启用三次曲线
   *     动画。设置为true时启用三次曲线动画，设置为false时不启用。<br> **SpringEnable**: boolean，表示是否启用弹簧动画。设置为true时启用弹簧动画效果，设置为false时不启用。 <br>
   *     **dropAnimationCurve**: number[]，表示落位动画曲线参数，其含义由SpringEnable和CubicCurveEnable决定（SpringEnable优先级更高）。当
   *     SpringEnable为true时，数组长度为3，格式为[response, dampingRatio, blendDuration]，对应
   *     [curves.springMotion]{@link @ohos.curves:curves.springMotion}的弹簧曲线参数；当SpringEnable为false且CubicCurveEnable为true
   *     时，数组长度为4，格式为[x1, y1, x2, y2]，对应[curves.cubicBezierCurve]{@link @ohos.curves:curves.cubicBezierCurve}的三次贝塞尔曲线控制点
   *     参数。<br> **说明：** SpringEnable优先级高于CubicCurveEnable，当两者同时为true时，以弹簧动画为准。当SpringEnable和CubicCurveEnable均未正确设置时，使用默
   *     认弹簧动效。<br> **dropPosition**: number[]，落位位置坐标。数组长度为2，格式为[x, y]，单位为px，表示拖拽元素落位时的目标位置坐标，取值范围为(-∞, +∞)。<br>
   *     **dropSize**: number[]，落位尺寸。数组长度为2，格式为[width, height]，单位为px，表示拖拽元素落位时的目标尺寸，取值范围为(0, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  executeFollowHandMorphDropAnimation(onAnimationFinished: Callback<void>, animationOption?: string): void;

  /**
   * 异步获取拖拽数据，并通知开发者当前数据同步进度，仅支持在onDrop阶段使用。
   *
   * @param { DataSyncOptions } options - 获取拖拽数据时的参数，包含目标路径、文件冲突选项、进度条类型等。数据传输过程中可使用
   *     [cancelDataLoading]{@link @ohos.arkui.UIContext:DragController#cancelDataLoading}接口取消数据加载。
   * @returns { string } 拖拽数据的标识，用于区分每次拖拽。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190003 - Operation not allowed for current phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  startDataLoading(options: DataSyncOptions): string;

  /**
   * 获取拖起方包名。
   *
   * @returns { string } 拖起方的包名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  getDragSource(): string;

  /**
   * 获取是否是跨设备拖拽，跨设备拖拽时为true。
   *
   * @returns { boolean } 是否是跨设备拖拽，返回true表示是跨设备拖拽，返回false表示不是跨设备拖拽。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  isRemote(): boolean;

  /**
   * 获取当前拖拽事件发生时所在的屏幕ID，不支持在[onDragEnd]{@link CommonMethod#onDragEnd}阶段使用。
   *
   * @returns { number } 当前拖拽事件发生时所在的屏幕ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getDisplayId(): number;

  /**
   * 设置起拖方延迟提供数据。使用此方法向系统提供数据加载参数，而不是直接提供完整的数据对象。当用户在目标应用程序上落入时，系统将使用此参数从起拖方请求实际数据。与[setData]{@link DragEvent.setData}方法
   * 同时使用，以最后调用的方法为准。该接口仅在[onDragStart]{@link CommonMethod#onDragStart}回调中生效。
   *
   * @param { DataLoadParams } dataLoadParams - 落入操作时使用的数据加载参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  setDataLoadParams(dataLoadParams: DataLoadParams): void;

  /**
   * 使用系统的内置动效，且该动效只有系统应用可使用。仅支持在onDrop阶段使用。
   *
   * @param { string } configuration - 动效配置参数，字符串内容为json格式。
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
 * 拖拽事件的回调函数。
 *
 * @param { DragEvent } event - event为拖拽事件信息，包括拖拽点坐标。
 * @param { string } [extraParams] - extraParams为拖拽事件额外信息，需要解析为JSON格式。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;

/**
 * 设置落入过程的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface DropOptions {

  /**
   * 设置拖拽是否提前获取数据。true表示不提前获取数据，false表示提前获取数据，默认值为false。
   * 
   * **说明：**
   * 
   * 当使用[startDataLoading]{@link DragEvent#startDataLoading}获取数据时需设置该参数为true，防止拖拽提前获取数据。
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
 * 按键对应的意图。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type IntentionCode = import('../api/@ohos.multimodalInput.intentionCode').IntentionCode;

/**
 * 按键事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface KeyEvent {

  /**
   * 按键的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type: KeyType;

  /**
   * 按键的键值。按键设备提供的键值请参考[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  keyCode: number;

  /**
   * 按键的名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  keyText: string;

  /**
   * 触发当前按键的输入设备类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  keySource: KeySource;

  /**
   * 触发当前按键的输入设备ID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  deviceId: number;

  /**
   * 按键发生时元键（即键盘左下角紧挨Ctrl键或Fn标记了窗口logo的按键）的状态，1表示按压态，0表示未按压态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  metaKey: number;

  /**
   * 事件时间戳。触发事件时距离系统启动的时间间隔，单位：ns。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  timestamp: number;

  /**
   * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)传递。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stopPropagation: () => void;

  /**
   * 按键对应的意图。
   * 
   * 默认值：IntentionCode.INTENTION_UNKNOWN。
   *
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  intentionCode: IntentionCode;

  /**
   * 获取功能键按压状态。
   *
   * @param { Array<string> } keys - 功能键列表。支持功能键 'Ctrl'| 'Alt' | 'Shift'。<br/>**说明：**<br/>此接口不支持在手写笔场景下使用。
   * @returns { boolean } 功能键是否被按下。true表示被按下，false表示未被按下。
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
   * 按键的Unicode码值。支持范围为非空格的基本拉丁字符：0x0021-0x007E，不支持字符为0。组合键场景下，返回当前keyEvent对应按键的Unicode码值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  unicode?: number;

  /**
   * NumLock是否锁定（true: 锁定；false: 解锁）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  isNumLockOn?: boolean;

  /**
   * CapsLock是否锁定（true: 锁定；false: 解锁）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  isCapsLockOn?: boolean;

  /**
   * ScrollLock是否锁定（true: 锁定；false: 解锁）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  isScrollLockOn?: boolean;
}

/**
 * 焦点轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 15 dynamic
 */
declare interface FocusAxisEvent extends BaseEvent {

  /**
   * 焦点轴事件的轴值表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  axisMap: Map<AxisModel, number>;

  /**
   * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)传递。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  stopPropagation: Callback<void>;
}

/**
 * 组件接收表冠事件的数据结构。内容包括时间戳、旋转角速度、旋转角度、表冠动作和阻止事件冒泡。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare interface CrownEvent {

  /**
   * 时间戳。触发事件时距离系统启动的时间间隔。
   * 
   * 单位：ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  timestamp: number;

  /**
   * 旋转角速度。
   * 
   * 单位：deg/s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  angularVelocity: number;

  /**
   * 相对旋转角度。
   * 
   * 单位：deg 
   * 
   * 取值范围:[-360, 360]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  degree: number;

  /**
   * 表冠动作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  action: CrownAction;

  /**
   * 阻止[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  stopPropagation: Callback<void>;
}

/**
 * 半模态、全模态的公共配置接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface BindOptions {
  /**
   * 半模态页面的背板颜色。
   * 
   * 默认值：Color.White。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 半模态页面显示（动画结束后）回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAppear?: () => void;

  /**
   * 半模态页面回退（动画结束后）回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDisappear?: () => void;

  /**
   * 半模态页面显示（动画开始前）回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: () => void;

  /**
   * 半模态页面回退（动画开始前）回调函数。
   * 
   * **说明：**
   * 
   * 不允许在onWillDisappear函数中修改状态变量，可能会导致组件行为不稳定。
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
 * @interface DismissContentCoverAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissContentCoverAction {
  /**
   * 全屏模态页面关闭回调函数。开发者需要退出页面时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * 返回本次拦截全屏模态页面退出的事件原因。
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
 * 继承自[BindOptions]{@link BindOptions}。
 * 
 * 全屏模态页面内容选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ContentCoverOptions extends BindOptions {
  /**
   * 全屏模态页面的系统转场方式。
   * 
   * 默认值：ModalTransition.DEFAULT。
   * 
   * **说明：**
   * 
   * 与transition同时设置时，此属性不生效。
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
   * 全屏模态页面交互式关闭回调函数。
   * 
   * **说明：**
   * 
   * 当用户执行back事件关闭交互操作时，如果注册该回调函数，则不会立刻关闭。在回调函数中可以通过reason得到阻拦关闭页面的操作类型，从而根据原因选择是否关闭全屏模态页面。在onWillDismiss回调中，不能再做
   * onWillDismiss拦截。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissContentCoverAction>;

  /**
   * 全屏模态页面的自定义转场方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * 全屏模态是否适配安全区域，true表示全屏模态适配安全区域，将内容限制在安全区内，避让导航条和状态栏，false表示不做处理，和之前的样式保持一致。默认值为false。
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
 * 半模态面板的标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface SheetTitleOptions {
  /**
   * 半模态面板的主标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  title: ResourceStr;

  /**
   * 半模态面板的副标题。
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
 * 半模态弹窗的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SheetType {
  /**
   * 底部弹窗。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  BOTTOM = 0,

  /**
   * 居中弹窗。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CENTER = 1,

  /**
   * 跟手弹窗。跟手弹窗面板不支持跟手滑动，下滑面板不关闭。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  POPUP = 2,

  /**
   * 侧边弹窗。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SIDE = 3,

  /**
   * 全屏弹窗。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CONTENT_COVER = 4
}

/**
 * 半模态的显示层级模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SheetMode {
  /**
   * 设置半模态面板在当前UIContext内顶层显示，在所有页面之上。和弹窗类组件显示在一个层级。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAY = 0,

  /**
   * 设置半模态面板在当前页面内的顶层显示。 
   * 
   * **说明：**
   * 
   * 目前只支持挂载在Page或者NavDestination节点上，若有NavDestination优先挂载在NavDestination上。只支持在这两种页面内顶层显示。
   * 
   * 该模式下新起的页面可以覆盖在半模态弹窗上，页面返回后该半模态依旧存在，半模态面板内容不丢失。 
   * 
   * 该模式下需确保目标页面节点如Page节点已挂载上树，再拉起半模态，否则半模态将无法挂载到对应的页面节点内。
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
 * 半模态面板上下滑动时的内容更新方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ScrollSizeMode {
  /**
   * 设置半模态面板跟手滑动结束后更新内容显示区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FOLLOW_DETENT = 0,

  /**
   * 设置半模态面板在滑动过程中持续更新内容显示区域。
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
 * 半模态激活输入法时对软键盘的避让方式。
 * 
 * > **说明：**
 * >
 * > 设置POPUP_SHEET避让方式时，半模态只避让由面板内的文本框组件拉起的软键盘场景，其他场景半模态无需避让。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare enum SheetKeyboardAvoidMode {
  /**
   * 设置半模态不避让软键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  NONE = 0,

  /**
   * 设置半模态先上抬面板避让软键盘；
   * 
   * 当上抬至最大高度仍不足以避让软键盘时，则通过压缩整体内容完成避让。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  TRANSLATE_AND_RESIZE = 1,

  /**
   * 设置半模态通过压缩整体内容避让软键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  RESIZE_ONLY = 2,

  /**
   * 设置半模态先上抬面板避让软键盘；
   * 
   * 当上抬至最大高度仍不足以避让软键盘时，则通过滚动内容完成避让。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  TRANSLATE_AND_SCROLL = 3,

  /**
   * 设置半模态popup样式弹窗避让软键盘。
   * 
   * 1. 避让软键盘时，在popup样式弹窗当前显示位置无法容纳弹窗尺寸的前提下，遵循先垂直翻转避让，后尝试90°水平旋转避让的规则调整显示位置，以预设方向为下方为例，调整避让顺序依次为：下、上、右、左。
   * 2. 如果设置的对齐方式导致组件布局超出窗口范围，将根据该对齐方式在水平或垂直方向上进行位移，直至组件完全显示在窗口内。
   * 3. 避让软键盘时，如果在四个方向上均无法容纳当前的popup样式弹窗，处理方式遵循开发者设置的placementOnTarget属性：
   * 
   * （1）若属性值为true，将依据设定的placement，向其镜像方向平移，直至弹窗能够完全显示。
   * 
   * （2）若属性值为false，则在四个方向中，选择能够完全展示弹窗宽度且剩余高度最大的方向，通过调整半模态高度以适应当前方向，确保弹窗能够放下，同时保持预设placement对应的对齐方式不变。
   * 
   * 4. 若此时半模态不是跟手样式，则不具备避让软键盘能力。
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
 * 控制半模态的关闭。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface SheetDismiss {
  /**
   * 半模态面板关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
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
 * 半模态关闭前的回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissSheetAction {

  /**
   * 半模态页面关闭回调函数。开发者需要退出页面时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dismiss: Callback<void>;

  /**
   * 返回本次半模态页面退出的操作类型。
   * 
   * **说明：**
   * 
   * DismissReason.SLIDE只生效半模态侧边弹窗形态，表示右滑退出。若镜像场景则表示左滑退出。
   * 
   * DismissReason.SLIDE_DOWN生效半模态底部弹窗形态和居中弹窗形态，表示下滑退出。
   * 
   * 半模态气泡弹窗形态无滑动退出能力。
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
 * 控制半模态关闭前的回弹。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SpringBackAction {
  /**
   * 半模态页面关闭前控制回弹函数，开发者需要半模态回弹时调用。
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
 * 继承自[BindOptions]{@link BindOptions}。
 * 
 * 半模态页面内容选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SheetOptions extends BindOptions {
  /**
   * 半模态高度，默认是LARGE。
   * 
   * **说明：**
   * 
   * 1. API version 14开始，底部弹窗横屏时，无状态栏则最大高度为距离屏幕顶部8vp，有状态栏则最大高度为距离状态栏8vp。
   * 2. 底部弹窗时，当设置detents时，该属性设置无效。
   * 3. 底部弹窗竖屏时，最大高度为距离状态栏8vp。
   * 4. 居中弹窗和跟手弹窗设置类型为SheetSize.LARGE和SheetSize.MEDIUM无效，显示默认高度560vp。
   * 5. 居中弹窗和跟手弹窗最小高度为320vp，最大高度为窗口短边的90%。
   * 6. 居中弹窗和跟手弹窗当使用Length设置的高度时，高度大于最大高度，则显示最大高度，小于最小高度，则显示最小高度。
   * 7. 如果半模态使用SheetSize.FIT_CONTENT自适应模式，且类型设置为居中弹窗或跟手弹窗，API version 22及之前版本，高度大于最大高度时显示最大高度，高度小于最小高度时显示最小高度。从API version 23开始，高度大于最大高度时显示最大高度，高度小于最小高度时按照实际自适应高度生效。
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
   * 是否显示控制条。
   * 
   * 默认值：true 
   * 
   * true：显示控制条。
   * 
   * false：不显示控制条。
   * 
   * **说明：**
   * 
   * 半模态面板的detents属性设置多个不同高度并且设置生效时，默认显示控制条。否则不显示控制条。
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
   * 半模态页面的背景蒙层颜色。
   * 
   * 默认值：$r('sys.color.ohos_id_color_mask_thin')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskColor?: ResourceColor;

  /**
   * 半模态页面的切换高度挡位。
   * 
   * **说明：**
   * 
   * 从API version 12开始，底部弹窗横屏时该属性设置生效。
   * 
   * 底部弹窗竖屏生效，元组中第一个高度为初始高度。
   * 
   * 面板可跟手滑动切换挡位，松手后是否滑动至目标挡位有两个判断条件：速度和距离。速度超过阈值，则执行滑动至与手速方向一致的目标挡位；速度小于阈值，则引入距离判断条件，当位移距离>当前位置与目标位置的1/2，滑动至与手速方向一致的目标挡
   * 位，位移距离当前位置与目标位置的1/2，返回至当前挡位。速度阈值：1000，距离阈值：50%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  detents?: [(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?];

  /**
   * 半模态面板的模糊背景。默认无模糊背景。
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
   * 是否显示关闭图标。
   * 
   * 2in1设备默认无按钮底板。
   * 
   * 默认值：true。
   * 
   * true：显示关闭图标。
   * 
   * false：不显示关闭图标。
   * 
   * **说明：**
   * 
   * Resource需要为boolean类型。
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
   * 半模态页面的样式。
   * 
   * **说明：**
   * 
   * 半模态在不同窗口所支持的显示类型：
   * 
   * 1. 宽度 < 600vp：底部、全屏。默认底部样式。
   * 2. 600vp <= 宽度 < 840vp：底部、居中、跟手、侧边、全屏。默认居中样式。
   * 3. 宽度 >= 840vp：底部、居中、跟手、侧边、全屏。默认跟手样式。
   * 4. API version 20开始，窗口宽度大于600vp时，preferType支持设置为SheetType.SIDE。
   * 5. API version 20开始，preferType支持设置为SheetType.CONTENT_COVER，支持设置为全屏模态样式。
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
   * 半模态面板的标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  title?: SheetTitleOptions | CustomBuilder;

  /**
   * 半模态页面交互式关闭回调函数。
   * 
   * **说明：**
   * 
   * 当用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，如果已注册回调函数，模态窗口将不会立即关闭。要关闭半模态，需在回调函数中调用shouldDismiss.dismiss()方法来实现。
   * 
   * 如果不注册该回调函数，则用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，正常关闭半模态，无其他行为。
   * 
   * 侧拉关闭又包含侧滑（左滑/右滑）、三键back、键盘ESC关闭。
   * 
   * 建议在[二次确认](docroot://ui/arkts-sheet-page.md#二次确认能力)场景使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shouldDismiss?: (sheetDismiss: SheetDismiss) => void;

  /**
   * 半模态页面的交互式关闭回调函数。允许开发者注册，以获取关闭操作的类型，并决定是否关闭半模态状态。
   * 
   * **说明：**
   * 
   * 当用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，若已注册回调函数，则不会立即关闭页面，而是由开发者通过回调函数[DismissSheetAction]{@link DismissSheetAction}中的
   * reason参数判断关闭操作的类型，进而根据具体原因自主选择是否关闭半模态页面。
   * 
   * 如果不注册该回调函数，则用户执行关闭操作时，正常关闭半模态，无其他行为。
   * 
   * 侧拉关闭又包含侧滑（左滑/右滑）、三键back、键盘ESC关闭。
   * 
   * 在onWillDismiss回调中，不能再做onWillDismiss拦截。
   * 
   * 建议在[二次确认](docroot://ui/arkts-sheet-page.md#二次确认能力)场景使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDismiss?: Callback<DismissSheetAction>;

  /**
   * 半模态页面交互式关闭前控制回弹函数。允许开发者注册，以控制半模态页面交互式关闭时的回弹效果。
   * 
   * **说明：**
   * 
   * 当用户触发执行下拉关闭操作并同时注册该回调函数与shouldDismiss或onWillDismiss时，由开发者控制下滑关闭时是否回弹。在回调函数中可以通过调用springBack来实现回弹效果。也可以通过不调用
   * springBack来取消回弹效果。
   * 
   * 若不注册该回调函数，但注册shouldDismiss或onWillDismiss时，则默认在下拉关闭时，会触发回弹效果，回弹后再根据shouldDismiss或onWillDismiss内的回调行为决定半模态是否关闭。
   * 
   * 如果不注册该回调函数，且未注册shouldDismiss或onWillDismiss时，默认在下滑关闭时，触发半模态关闭。
   * 
   * 侧边弹窗样式则是在侧拉关闭场景生效springBack。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;

  /**
   * 半模态页面显示时，其下层页面是否允许交互。
   * 
   * **说明：**
   * 
   * 设置为true时允许交互，不显示蒙层；设置为false时不允许交互，显示蒙层；若不进行设置，默认底部弹窗与居中弹窗不允许交互，跟手弹窗允许交互。当设置为true时，maskColor设置无效。
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
   * 设置半模态页面的宽度。
   * 
   * 百分比参数方式：以父元素宽的百分比来设置半模态页面的宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width?: Dimension;

  /**
   * 设置半模态页面的边框宽度。
   * 
   * 可分别设置4个边框宽度。
   * 
   * 默认值：0
   * 
   * 百分比参数方式：以父元素半模态页面宽的百分比来设置半模态页面的边框宽度。
   * 
   * 当半模态页面左边框和右边框大于半模态页面宽度，半模态页面上边框和下边框大于半模态页面高度，显示可能不符合预期。
   * 
   * **说明：**
   * 
   * 底部弹窗时，底部边框宽度设置无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * 设置半模态页面的边框颜色。
   * 
   * 默认值：Color.Black
   * 
   * 如果使用borderColor属性，需要和borderWidth属性一起使用。 
   * 
   * **说明：**
   * 
   * 底部弹窗时，底部边框颜色设置无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * 设置半模态页面的边框样式。
   * 
   * 默认值：BorderStyle.Solid
   * 
   * 如果使用borderStyle属性，需要和borderWidth属性一起使用。 
   * 
   * **说明：**
   * 
   * 底部弹窗时，底部边框样式设置无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * 设置半模态页面的阴影。
   * 
   * 2in1设备默认值：ShadowStyle.OUTER_FLOATING_SM。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 半模态页面高度变化回调函数。
   * 
   * **说明：**
   * 
   * 底部弹窗时，只有挡位变化和拖拽跟手才返回每一帧高度，拉起半模态和避让软键盘只返回最后的高度，其他弹窗只在半模态拉起返回最后高度。
   * 
   * 返回值为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onHeightDidChange?: Callback<number>;

  /**
   * 设置半模态页面的显示层级。
   * 
   * 默认值：SheetMode.OVERLAY
   * 
   * **说明：**
   * 
   * 1. 半模态显示期间mode属性不支持动态切换，两种模式的显示层级完全不同，无法做到显示期间同一个半模态从一个层级变换到另一个层级。建议在使用时明确诉求固定mode值。 
   *  2. 设置SheetMode.EMBEDDED时不支持设置UIContext属性，两者对应的半模态显示层级效果互相冲突。
   * 3. 使用[openBindSheet](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#openbindsheet12)启动半模态页面，若未传入有效的targetId，则不支持设置为SheetMode.EMBEDDED，默认为SheetMode.OVERLAY。
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
   * 设置半模态面板滑动时，内容区域刷新时机。
   * 
   * 默认值：ScrollSizeMode.FOLLOW_DETENT
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
   * 半模态页面挡位变化回调函数。
   * 
   * **说明：**
   * 
   * 底部弹窗时，挡位变化返回最后的高度。
   * 
   * 返回值为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetentsDidChange?: Callback<number>;

  /**
   * 半模态页面宽度变化回调函数。
   * 
   * **说明：**
   * 
   * 宽度变化时返回最后的宽度。
   * 
   * 返回值为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWidthDidChange?: Callback<number>;

  /**
   * 半模态页面形态变化回调函数。
   * 
   * **说明：**
   * 
   * 形态变化时返回最后的形态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTypeDidChange?: Callback<SheetType>;

  /**
   * 在UIContext实例对应的窗口中显示半模态。
   * 
   * **说明：**
   * 
   * 使用[openBindSheet](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#openbindsheet12)启动的半模态页面，不支持设置、更
   * 新该属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  uiContext?: UIContext;

  /**
   * 设置半模态激活输入法时对软键盘的避让方式。
   * 
   * **默认值：** TRANSLATE_AND_SCROLL
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
   * 是否响应悬停态。
   * 
   * 默认值：false，默认不响应。
   * 
   * 2in1设备默认值：true 
   * 
   * true：响应悬停态。
   * 
   * false：不响应悬停态。
   * 
   * **说明：**
   * 
   * 底部弹窗样式和跟手弹窗样式不响应悬停态。子窗模式不支持悬停态。
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
   * 悬停态下弹窗默认展示区域。
   * 
   * 默认值：HoverModeAreaType.BOTTOM_SCREEN 
   * 
   * 2in1设备默认值：HoverModeAreaType.TOP_SCREEN
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
   * 设置半模态弹窗偏移量。当半模态为底部弹窗时，支持设置底部间距。不支持设置半模态的[SheetOptions]{@link SheetOptions}中的detents属性。y轴设置为负数的时候不生效。
   * 
   * 默认值：x轴为0vp，y轴坐标为0vp。
   * 
   * **系统接口：** 此接口为系统接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  offset?: Position;

  /**
   * 设置半模态面板内容区边缘回弹效果，支持单边生效。
   * 
   * **默认值**：默认双边生效，即[EffectEdge]{@link EffectEdge}.START | [EffectEdge]{@link EffectEdge}.END（即数值3）。
   * 
   * **说明：**
   * 
   * 1. 仅上边缘生效：[EffectEdge]{@link EffectEdge}.START。
   * 2. 仅下边缘生效：[EffectEdge]{@link EffectEdge}.END。
   * 3. 双边生效：[EffectEdge]{@link EffectEdge}.START | [EffectEdge]{@link EffectEdge}.END（即数值3）。
   * 4. 双边不生效：[EffectEdge]{@link EffectEdge}.START & [EffectEdge]{@link EffectEdge}.END（即数值0）。
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
   * 设置半模态页面圆角半径。
   * 
   * 不建议设置4个圆角大小不相等，圆角大小相等时面板视觉体验最佳。
   * 
   * **默认值**：32vp
   * 
   * **说明：**
   * 
   * 1. 根据设置的圆角半径值显示，如果未设置，则使用默认值。底部样式不显示半模态底部2个圆角，即使设置了底部2个圆角也不生效。
   * 2. 分别设置4个方向的圆角半径后，如果某个方向的值异常，异常方向的圆角值重置为默认值，非异常方向的圆角值为已设置的值。统一设置4个方向的圆角时，如果设置的值异常，4个方向的圆角都重置为默认值。
   * 3. 半径设置为百分比时，以半模态页面的宽度为基准。
   * 4. 当圆角的半径大于半模态页面宽度一半时，圆角的半径取值为半模态页面宽度的一半。
   * 5. 当半模态页面高度过小且圆角半径设置过大时，可能导致显示异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * 支持非手势切换挡位。
   * 
   * **默认值：** detents[0]。
   * 
   * **说明：**
   * 
   * 1. 该接口取值范围为detents数组范围，若设值非detents范围，该接口无效。
   * 2. 当设置SheetSize.FIT_CONTENT时，该接口无效。
   * 3. 不建议手势切换挡位与该接口切换挡位同时生效使用。
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
   * 设置半模态popup样式弹窗相对于目标的显示位置。
   * 
   * 默认值：Placement.Bottom
   * 
   * **说明：** 
   * 
   * 1. popup样式弹窗在确保指定位置能容纳弹窗尺寸的前提下，优先依据设定的placement展示弹窗。若不可行，则遵循先垂直翻转，后尝试90°水平旋转的规则调整显示位置，以预设方向为下方为例，调整顺序依次为：下、上、右、左。
   * 2. 如果设置的对齐方式导致组件布局超出窗口范围，将根据该对齐方式在水平或垂直方向上进行位移，直至组件完全显示在窗口内。
   * 3. 如果在四个方向上均无法容纳当前的popup样式弹窗，处理方式遵循开发者设置的placementOnTarget属性：
   * 
   * 1）若属性值为true，将依据设定的placement，向其镜像方向平移，直至弹窗能够完全显示。
   * 
   * 2）若属性值为false，则在四个方向中，选择能够完全展示弹窗宽度且剩余高度最大的方向，通过调整半模态高度以适应当前方向，确保弹窗能够放下，同时保持预设placement对应的对齐方式不变。
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
   * 半模态popup样式弹窗在当前窗口下，四个方向均无法容纳该弹窗大小时，设置是否允许其覆盖在目标节点上。
   * 
   * 默认值：true 
   * 
   * true：允许其覆盖在目标节点上。
   * 
   * false：不允许其覆盖在目标节点上。
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
   * 半模态是否在独立子窗中显示。
   * 
   * 默认值：false
   * 
   * **说明：** 
   * 
   * 1. 若属性值为true，半模态可以在独立子窗口中展示，并且可以超过应用窗口范围。
   * 2. 若属性值为false，半模态只能在应用窗口范围内展示。
   * 3. 不建议在showInSubWindow为true的弹窗嵌套显示另一个showInSubWindow为true的弹窗，半模态可能会影响其他组件行为。
   * 4. 不建议在showInSubWindow为true的弹窗中使用CalendarPicker、CalendarPickerDialog、DatePickerDialog、TextPickerDialog、TimePickerDialog等picker组件，半模态会影响上述组件行为。
   * 5. 半模态显示期间该属性不支持动态切换。
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
   * 控制条是否悬浮显示，true为悬浮显示，false为不悬浮显示。
   * 
   * 默认值：false 
   * 
   * **说明：** 
   * 
   * 悬浮效果只在控制条显示的场景生效，且控制条不占位。
   * 
   * title传入[CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)时enableFloatingDragBar始终为
   * false。
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
   * bindSheet全屏模态样式的系统转场方式。
   * 
   * 默认值：ModalTransition.DEFAULT
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
   * 设置组件绘制圆角的模式。
   * 
   * 默认值：RenderStrategy.FAST 
   * 
   * **说明**: 当半模态设置模糊时，可通过设置为OFFSCREEN离屏模式解决半模态顶部或顶部圆角区域内显示效果异常问题。popup样式不支持设置组件绘制圆角模式。
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
   * 设置组件的系统材质。
   * 
   * 默认值：undefined，会清除由该接口设置的材质效果。 
   * 
   * **说明**: 不同系统材质对应不同的属性影响效果，该接口影响背景色
   * [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、边框
   * 颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。使用示例请参考
   * [示例10（半模态设置系统材质）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sheet-transition.md#示例10半模态设置系统材质)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 设置半模态弹窗边缘光效动画模式。
   * 
   * 默认值：EdgeLightMode.EDGELIGHT_DISABLED
   * 
   * **系统接口：** 此接口为系统接口。
   *
   * @default EdgeLightMode.EDGELIGHT_DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;

  /**
   * 指定是否对半模态启用模糊优化。
   * 启用后，将使用模糊快照渲染半模态背景。
   * 该属性在半模态显示后不能动态切换。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableBlurSnapshot?: boolean;
}

/**
 * 组件不同状态下的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface StateStyles {

  /**
   * 组件无状态时的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  normal?: any;

  /**
   * 组件按下状态的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pressed?: any;

  /**
   * 组件禁用状态的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  disabled?: any;

  /**
   * 组件获焦状态的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  focused?: any;

  /**
   * 组件点击状态的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clicked?: any;

  /**
   * 组件选中状态的样式。
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
   * 组件悬浮状态的样式。
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
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the color of popup text.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the font of popup text.
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
 * 关闭原因类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DismissReason {

  /**
   * Press back
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRESS_BACK = 0,

  /**
   * Touch component outside
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOUCH_OUTSIDE = 1,

  /**
   * Close button
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CLOSE_BUTTON = 2,

  /**
   * Slide down
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SLIDE_DOWN = 3,

  /**
   * 滑动交互，不是向下滑动。
   * 默认表示向右滑动，镜像操作后表示向左滑动。
   * 不支持选择向左或向右滑动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SLIDE = 4
}

/**
 * Popup关闭时的回调对象类型。
 *
 * @interface DismissPopupAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
 * @stagemodelonly
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
   * @stagemodelonly
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
 * @stagemodelonly
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
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color: ResourceColor;
}

/**
 * 弹出边框线性渐变色。
 *
 * @interface PopupBorderLinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  targetSpace?: Length;

  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @default { x: 0, y: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;

  /**
   * 定义popup主题颜色模式
   *
   * @type { ?AnchoredColorMode }
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * 为气泡Popup设置系统风格的材质。不同的材质会产生不同的效果，这些效果会影响菜单的背景颜色、边框、阴影和其他视觉属性。
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 定义Popup的背景模糊样式选项。
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
   * 定义Popup的背景效果选项。
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
   * 定义气泡的显示层级。
   *
   * @type { ?LevelMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;
}

/**
 * Defines the Tips options.
 *
 * @interface TipsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  arrowHeight?: Dimension;

  /**
   * Set the tips posistion.
   *
   * @type { ?TipsAnchorType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showAtAnchor?: TipsAnchorType;

  /**
   * 为组件设置系统风格的材料。不同的材料会产生不同的效果，这些效果会影响组件的背景颜色、边框、阴影和其他视觉属性。
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
   * Content of the popup message.
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
   * @stagemodelonly
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
   * @stagemodelonly
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
  }

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
  }

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
   * @default false
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Parameters of the popup message.
   *
   * @type { ?PopupMessageOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @since 10
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @default { x: 0, y: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Set the background color of the popup.
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;

  /**
   * 定义popup主题颜色模式
   *
   * @type { ?AnchoredColorMode }
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * 为气泡Popup设置系统风格的材质。不同的材质会产生不同的效果，这些效果会影响菜单的背景颜色、边框、阴影和其他视觉属性。
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 定义Popup的背景模糊样式选项。
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
   * 定义Popup的背景效果选项。
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
   * 定义气泡的显示层级。
   *
   * @type { ?LevelMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;
}

/**
 * 定义CustomPopup入参选项。
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义CustomPopup入参选项。
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * 定义CustomPopup入参选项。
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
   * Popup builder.
   * <p><strong>NOTE</strong>:
   * <br>The popup attribute is a universal attribute. A custom popup does not support display of another popup.
   * <br>The position attribute cannot be used for the first-layer container in the builder.
   * <br>If the position attribute is used, the popup will not be displayed.
   * <br>If a custom component is used in the builder, the aboutToAppear and aboutToDisappear lifecycle callbacks
   * of the custom component are irrelevant to the visibility of the popup. As such, the lifecycle of the
   * custom component cannot be used to determine whether the popup is displayed or not.
   * </p>
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
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Preferred position of the popup. If the set position is insufficient for holding the popup,
   * it will be automatically adjusted.
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
   * @default '#4d4d4d'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Color of the popup. To remove the background blur, set backgroundBlurStyle to BlurStyle.NONE.
   *
   * @type { ?(Color | string | Resource | number) }
   * @default TRANSPARENT plus COMPONENT_ULTRA_THICK
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
   * @default true
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
   * Whether to automatically dismiss the popup when an operation is performed on the page.
   * <p><strong>NOTE</strong>:
   * <br>To enable the popup to disappear upon a click on it, place a layout component in the builder place the
   * <Popup> component in the layout component, and modify the value of the bindPopup variable (show: boolean)
   * in the onClick event of the layout component.
   * </p>
   *
   * @type { ?boolean }
   * @default true
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
   * Callback for the popup status change event.
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
   * Offset of the popup arrow relative to the popup. When the arrow is at the top or bottom of the popup:
   * <br>The value 0 indicates that the arrow is located on the leftmost, and any other value indicates the distance
   * from the arrow to the leftmost; the arrow is centered by default. When the arrow is on the left or right
   * side of the popup: The value indicates the distance from the arrow to the top; the arrow is centered by
   * default. When the popup is displayed on either edge of the screen, it will automatically deviate leftward
   * or rightward to stay within the safe area. When the value is 0, the arrow always points to the bound component.
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
   * @default false
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Whether to apply a mask to the popup.
   * <br>The value true means to apply a transparent mask to the popup, false means not to apply a mask to the popup,
   * and a color value means to apply a mask in the corresponding color to the popup.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @default { x: 0, y: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Position of the popup arrow relative to its parent component. Available positions are Start, Center, and End,
   * in both vertical and horizontal directions. All these positions are within the parent component area.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Arrow thickness. If the arrow thickness exceeds the length of the edge minus twice the size of the popup
   * rounded corner, the arrow is not drawn.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * <p><strong>NOTE</strong>:
   * <br>This parameter cannot be set in percentage.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * <p><strong>NOTE</strong>:
   * <br>This parameter cannot be set in percentage.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Rounded corner radius of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Popup shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Background blur style of the popup.
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderLinearGradient?: PopupBorderLinearGradient;

  /**
   * 定义popup主题颜色模式
   *
   * @type { ?AnchoredColorMode }
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * 为气泡Popup设置系统风格的材质。不同的材质会产生不同的效果，这些效果会影响菜单的背景颜色、边框、阴影和其他视觉属性。
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 定义Popup的背景模糊样式选项。
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
   * 定义Popup的背景效果选项。
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
   * 定义气泡的显示层级。
   *
   * @type { ?LevelMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;
}

/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MenuPreviewMode {

  /**
   * No preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * No preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * Defines image type preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The preview is a screenshot of the component on which a long-press triggers the context menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface ContextMenuAnimationOptions {

  /**
   * Sets the start animator scale and end animator scale.
   *
   * @type { ?AnimationRange<number> }
   * @default [0.95, 1.1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Sets the start animator scale and end animator scale.
   *
   * @type { ?AnimationRange<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  hoverScale?: AnimationRange<number>;

  /**
   * 设置是否支持打断hoverScale
   *
   * @type { ?boolean }
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
 * 定义边框圆角的类型。
 *
 * @typedef { Length | BorderRadiuses | LocalizedBorderRadiuses }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;

/**
 * 定义菜单触摸反馈模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum HapticFeedbackMode {

  /**
   * No haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DISABLED = 0,

  /**
   * Defines menu always haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLED = 1,

  /**
   * Defines menu automatically haptic feedback.
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
 * 定义菜单的模态模式
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum ModalMode {

  /**
   * Modal modal automatically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  AUTO = 0,

  /**
   * Operation takes effect around menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NONE = 1,

  /**
   * Operation takes no effect around menu in target window
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
 * 菜单遮罩类型
 *
 * @interface MenuMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum PreviewScaleMode {

  /**
   * 系统自动对预览图做布局
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  AUTO = 0,

  /**
   * 保持预览图设置的尺寸不变
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CONSTANT = 1,

  /**
   * 保持宽高比进行缩放
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
 * Defines the available layout area.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AvailableLayoutArea {

  /**
   * Size of safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SAFE_AREA = 0
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
   * @type { ContentTransitionEffect }
   * @static
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
   * @type { ContentTransitionEffect }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static get OPACITY(): ContentTransitionEffect;
}

/**
 * Menu避让键盘的模式
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare enum MenuKeyboardAvoidMode {

  /**
   * Menu不避让键盘
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  NONE = 0,

  /**
   * Menu首先改变位置避让键盘，如果避让后的位置高度仍不够大则压缩高度
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  TRANSLATE_AND_RESIZE = 1
}

/**
 * 宫格在菜单中的位置。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum MenuGridPosition {

  /**
   * 宫格位于菜单的顶部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOP = 0,

  /**
   * 宫格位于菜单的底部。
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
 * 定义菜单的宫格样式。
 *
 * @interface MenuGridStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface MenuGridStyleOptions {

  /**
   * 宫格的数量。
   *
   * @type { ?number }
   * @default 3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  count?: number;

  /**
   * 宫格中每行的数量
   *
   * @type { ?number }
   * @default 3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  horizontalSize?: number;

  /**
   * 宫格的位置。
   *
   * @type { ?MenuGridPosition }
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
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Offset for showing the context menu, which should not cause the menu to extend beyond the screen.
   * <p><strong>NOTE</strong>:
   * <br>When the menu is displayed relative to the parent component area, the width or height of the area is
   * automatically counted into the offset based on the placement attribute of the menu. When the menu is
   * displayed above the parent component (that is, placement is set to Placement.TopLeft, Placement.Top, or
   * Placement.TopRight), a positive value of x indicates rightward movement relative to the parent component,
   * and a positive value of y indicates upward movement. When the menu is displayed below the parent component
   * (that is, placement is set to Placement.BottomLeft, Placement.Bottom, or Placement.BottomRight), a positive
   * value of x indicates rightward movement relative to the parent component, and a positive value of y indicates
   * downward movement. When the menu is displayed on the left of the parent component (that is, placement is set
   * to Placement.LeftTop, Placement.Left, or Placement.LeftBottom), a positive value of x indicates leftward
   * movement relative to the parent component, and a positive value of y indicates downward movement. When the
   * menu is displayed on the right of the parent component (that is, placement is set to Placement.RightTop,
   * Placement.Right, or Placement.RightBottom), a positive value of x indicates rightward movement relative to
   * the parent component, and a positive value of y indicates downward movement. If the display position of the
   * menu is adjusted (different from the main direction of the initial placement value), the offset value is invalid.
   * </p>
   *
   * @type { ?Position }
   * @default {x:0,y:0} - Percentage values are not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Preferred position of the context menu. If the set position is insufficient for holding the component, it will be
   * automatically adjusted.
   * <p><strong>NOTE</strong>:
   * <br>If a menu is displayed by pressing and holding or right-clicking, the menu is displayed at the clicked
   * position.
   * </p>
   *
   * @type { ?Placement }
   * @default Placement.BottomLeft
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @since 10
   */
  /**
   * whether show arrow belong to the menu, default: false, not show arrow
   * <p><strong>NOTE</strong>:
   * <br>When enableArrow is true, an arrow is displayed in the position specified by placement.
   * <br>If placement is not set or its value is invalid, the arrow is displayed above the target.
   * <br>If the position is insufficient for holding the arrow, it is automatically adjusted.
   * <br>When enableArrow is undefined, no arrow is displayed.
   * <br>This API is supported in bindContextMenu since API version 10 and bindMenu since API version 12.
   * </p>
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableArrow?: boolean;

  /**
   * The horizontal offset to the left of menu or vertical offset to the top of menu
   *
   * @type { ?Length }
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * Offset of the arrow relative to the context menu. The offset settings take effect only when the value is valid,
   * can be converted to a number greater than 0, and does not cause the arrow to extend beyond the safe area of
   * the context menu.
   * <p><strong>NOTE</strong>:
   * <br>The safe distance of the arrow from the four sides of the menu is the sum of the menu's corner radius and
   * half the width of the arrow. The value of placement determines whether the offset is horizontal or vertical.
   * When the arrow is in the horizontal direction of the menu, the offset is the distance from the arrow to the
   * leftmost arrow's safe distance. When the arrow is in the vertical direction of the menu, the offset is the
   * distance from the arrow to the topmost arrow's safe distance. The default position where the arrow is
   * displayed varies with the value of placement: Without any avoidance by the menu, when placement is set to
   * Placement.Top or Placement.Bottom, the arrow is displayed horizontally and is centered by default; when
   * placement is set to Placement.Left or Placement.Right, the arrow is displayed vertically and is centered by
   * default; when placement is set to Placement.TopLeft or Placement.BottomLeft, the arrow is displayed
   * horizontally by default, and the distance from the arrow to the left edge of the menu is the arrow's safe
   * distance; when placement is set to Placement.TopRight or Placement.BottomRight, the arrow is displayed
   * horizontally by default, and the distance from the arrow to the right edge of the menu is the arrow's safe
   * distance; when placement is set to Placement.LeftTop or Placement.RightTop, the arrow is displayed vertically
   * by default, and the distance from the arrow to the top edge of the menu is the arrow's safe distance; when
   * placement is set to Placement.LeftBottom or Placement.RightBottom, the arrow is displayed vertically by
   * default, and the distance from the arrow to the bottom edge of the menu is the arrow's safe distance.
   * <br>This API is supported in bindContextMenu since API version 10 and bindMenu since API version 12.
   * </p>
   *
   * @type { ?Length }
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Preview displayed when the context menu is triggered by a long-press or use the isShown variable of
   * bindContextMenu to display the preview content style of the menu.
   * <p><strong>NOTE</strong>:
   * <br>This parameter has no effect when responseType is set to ResponseType.RightClick.
   * <br>If preview is set to MenuPreviewMode.NONE or is not set, the enableArrow parameter is effective.
   * <br>If preview is set to MenuPreviewMode.IMAGE or CustomBuilder, no arrow will be displayed even when
   * enableArrow is true.
   * </p>
   *
   * @type { ?(MenuPreviewMode | CustomBuilder) }
   * @default MenuPreviewMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  preview?: MenuPreviewMode | CustomBuilder;

  /**
   * Defines the border radius for preview of menu.
   *
   * @type { ?BorderRadiusType }
   * @default 16vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  previewBorderRadius?: BorderRadiusType;

  /**
   * Defines the border radius of menu.
   *
   * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
   * @default 8vp for 2-in-1 devices and 20vp for other devices
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Callback triggered when the menu is displayed.
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
   * Callback function when the context menu disappear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the context menu disappear.
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
   * Callback function before the context menu animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Callback triggered when the menu is about to appear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Callback triggered when the menu is about to disappear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  aboutToDisappear?: () => void;

  /**
   * The margin of menu's layoutRegion.
   *
   * @type { ?Margin }
   * @default 12vp for left and right, 16vp for top and bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The preview animator options.
   *
   * @type { ?ContextMenuAnimationOptions }
   * @default { scale: [0.95, 1.1], transition: undefined, hoverScale: undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Background color of the menu.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Background blur style of the menu.
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  transition?: TransitionEffect;

  /**
   * Determine if it is compatible menu's half folded.
   *
   * @type { ?boolean }
   * @default true for 2-in-1 devices and false for other devices
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * The color of menu's outer border.
   *
   * @type { ?(ResourceColor | EdgeColors) }
   * @default '#19ffffff'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineColor?: ResourceColor | EdgeColors;

  /**
   * The width of menu's outer border.
   *
   * @type { ?(Dimension | EdgeOutlineWidths) }
   * @default 0vp - Percentage values are not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outlineWidth?: Dimension | EdgeOutlineWidths;

  /**
   * 定义menu主题颜色模式
   *
   * @type { ?AnchoredColorMode }
   * @default AnchoredColorMode.FOLLOW_TARGET
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorMode?: AnchoredColorMode;

  /**
   * Defines the haptic feedback mode of menu.
   *
   * @type { ?HapticFeedbackMode }
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  hapticFeedbackMode?: HapticFeedbackMode;

  /**
   * Whether it is a menu without mask.
   *
   * @type { ?(boolean | MenuMaskType) }
   * @default true when preview is enabled, or is false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  modalMode?: ModalMode;

  /**
   * Callback function when the menu appears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  availableLayoutArea?: AvailableLayoutArea;

  /**
   * Defines the menu position.
   *
   * @type { ?Position }
   * @default { x: 0, y: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  anchorPosition?: Position;

  /**
   * 设置Menu如何避让键盘
   *
   * 默认不避让
   *
   * @type { ?MenuKeyboardAvoidMode }
   * @default MenuKeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  keyboardAvoidMode?: MenuKeyboardAvoidMode;

  /**
   * 设置menu和键盘的避让的最小间距
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minKeyboardAvoidDistance?: LengthMetrics;

  /**
   * 设置菜单与目标之间的间距。
   * 当同时设置targetSpace和offset时，它们是相加的。建议使用targetSpace
   * 来设置菜单和目标之间的间距，并使用offset来设置额外的偏移量。
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
   * 为菜单设置系统风格的材质。不同的材质会产生不同的效果，这些效果会影响菜单的背景颜色、边框、阴影和其他视觉属性。
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  /**
   * Set system-styled materials for menu. The material effect behaves differently on devices with different
   * level of computing powers. On devices with lower computing power, it affects attributes such as the
   * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect
   * at the system material layer, which can produce an effect similar to glass.
   *
   * @type { ?SystemUiMaterial }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 设置菜单的滚动条状态。
   *
   * @type { ?BarState }
   * @default BarState.Auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBar?: BarState;

  /**
   * 定义菜单的最大高度
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
   * 设置菜单的非线性形变动画模式。
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;

  /**
   * 设置菜单的流光动画模式。
   *
   * @default EdgeLightMode.EDGELIGHT_DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;

  /**
   * 定义菜单的宫格样式。只有固定风格的菜单才有效。
   * 例如，在bindMenu/bindContextMenu中使用MenuElement，或者在MenuItem中使用MenuItemOptions。
   *
   * @type { ?MenuGridStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  gridStyle?: MenuGridStyleOptions;
}

/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the title of the menu window.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @default true for 2-in-1 devices
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showInSubWindow?: boolean;
}

/**
 * ProgressMask设置遮罩的进度、最大值和颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class ProgressMask {
  /**
   * 构造ProgressMask对象。
   *
   * @param { number } value - 进度遮罩的当前值。<br/> 取值范围：[0.0, +∞)
   * @param { number } total - 进度遮罩的最大值。<br/> 取值范围：[0.0, +∞)
   * @param { ResourceColor } color - 进度遮罩的颜色。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(value: number, total: number, color: ResourceColor);

  /**
   * 更新进度遮罩的进度值。
   *
   * @param { number } value - 进度遮罩的当前值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updateProgress(value: number): void;

  /**
   * 更新进度遮罩的颜色。
   *
   * @param { ResourceColor } value - 进度遮罩的颜色。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updateColor(value: ResourceColor): void;

  /**
   * 进度满时的呼吸光晕动画开关。不设置该接口时，默认关闭呼吸光晕动画。
   *
   * @param { boolean } value - 是否开启呼吸光晕动画。<br/>true：开启呼吸光晕动画。<br/>false：关闭呼吸光晕动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableBreathingAnimation(value: boolean): void;
}

/**
 * 当前屏幕触点所在组件的坐标系、id和尺寸相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class TouchTestInfo {

  /**
   * 按压点相对于窗口左上角的x轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  windowX: number;

  /**
   * 按压点相对于窗口左上角的y轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  windowY: number;

  /**
   * 按压点相对于父组件左上角的x轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  parentX: number;

  /**
   * 按压点相对于父组件左上角的y轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  parentY: number;

  /**
   * 按压点相对于子组件左上角的x轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * 按压点相对于子组件左上角的y轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;

  /**
   * 子组件的位置和宽高。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  rect: RectResult;

  /**
   * 子组件的唯一标识。
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
 * 自定义事件分发结果，开发者通过返回结果来影响事件分发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class TouchResult {

  /**
   * 事件派发策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  strategy: TouchTestStrategy;

  /**
   * 子组件的唯一标识。
   *
   * 当strategy为TouchTestStrategy.DEFAULT时，id是可选的；当strategy是TouchTestStrategy.FORWARD_COMPETITION或
   * TouchTestStrategy.FORWARD时，id是必需的（如果没有返回id，则当成TouchTestStrategy.DEFAULT处理）。
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
 * 深度空间中的三维向量。
 *
 * @interface DepthVector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthVector3 {

  /**
   * X分量。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Y分量。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * Z分量。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  z: double;
}

/**
 * 深度空间中的4D向量。
 *
 * @interface DepthVector4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthVector4 {

  /**
   * X分量。
   *
   * @type { double }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Y分量。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * Z分量。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  z: double;

  /**
   * W分量。
   *
   *
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  w: double;
}

/**
 * 深度空间中的RGB颜色。
 *
 * @interface DepthColorRGB
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthColorRGB {

  /**
   * 红色分量（0-255）。
   *
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  red: int;

  /**
   * 绿色分量（0-255）。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  green: int;

  /**
   * 蓝色分量（0-255）。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  blue: int;
}

/**
 * 三维空间中的空间角位置。
 *
 * @interface SpatialPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface SpatialPosition {

  /**
   * 三维空间中的左上角位置。
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  leftTop: DepthVector3;

  /**
   * 3D空间中的右上角位置。
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rightTop: DepthVector3;

  /**
   * 三维空间中的左下角角位置。
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  leftBottom: DepthVector3;

  /**
   * 三维空间中的右下角位置。
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rightBottom: DepthVector3;
}

/**
 * 空间效果选项。
 *
 * @interface SpatialEffectParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface SpatialEffectParams {

  /**
   * 由角点或深度值定义的空间位置。
   *
   * @type { SpatialPosition | double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  position: SpatialPosition | double;

  /**
   * 空间效果的遮挡权重。
   * <br>取值范围:[0, 1]。默认值:0。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  occlusionWeight?: double;
}

/**
* 像素扩展属性集合，用于描述像素扩展的信息。
*
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
* 像素扩展属性集合，用于描述像素扩展的信息。
*
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface PixelStretchEffectOptions {

  /**
   * 组件图像上边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 组件图像上边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  top?: Length;

  /**
   * 组件图像下边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 组件图像下边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bottom?: Length;

  /**
   * 组件图像左边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 组件图像左边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  left?: Length;

  /**
   * 组件图像右边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 组件图像右边沿像素扩展距离。
   *
   * 默认值：0vp
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  right?: Length;
}

/**
 * 定义点击效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ClickEffect {
  /**
   * 设置当前组件的点击回弹效果。
   * 
   * 默认值：ClickEffectLevel.LIGHT
   * 
   * **说明：**
   * 
   * 当level为undefined或者null时， ClickEffect采用ClickEffectLevel.LIGHT对应的回弹效果，缩放比参照scale说明。
   *
   * @default ClickEffectLevel.LIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  level: ClickEffectLevel;

  /**
   * 回弹缩放比例，支持在设置ClickEffectLevel的基础上微调。
   * 
   * **说明：**
   * 
   * 当level为ClickEffectLevel.LIGHT时，默认值：0.90 
   * 
   * 当level为ClickEffectLevel.MIDDLE或者ClickEffectLevel.HEAVY时，默认值：0.95 
   * 
   * 当level为undefined或者null时，level为ClickEffectLevel.LIGHT，默认值：0.90 
   * 
   * 当scale为undefined或者null时，使用当前level对应的默认缩放比例。
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
 * @typedef FadingEdgeOptions
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
   * @type { LengthMetrics }
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
 * 定义嵌套滚动选项
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * 定义嵌套滚动选项
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * 定义嵌套滚动选项
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the icon of the menu element.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the symbol of the menu element.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * 定义悬停更新属性函数。
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
 * 定义组件内容修改器
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enabled: boolean;

  /**
   * Obtains the contentModifier instance object
   *
   * @type { ContentModifier<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier: ContentModifier<T>;
}

/**
* 外描边样式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @since 11
 */
/**
* 外描边样式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum OutlineStyle {

  /**
   * 显示为一条实线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 显示为一条实线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  SOLID = 0,

  /**
   * 显示为一系列短的方形虚线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 显示为一系列短的方形虚线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DASHED = 1,

  /**
   * 显示为一系列圆点，圆点半径为outlineWidth的一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Dotted border. The radius of a dot is half of **outlineWidth**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DOTTED = 2
}

/**
 * 设置拖拽预览图的显示模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum DragPreviewMode {

  /**
   * 系统根据拖拽场景自动改变跟手点位置，根据规则自动对拖拽背板图进行缩放变换等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  AUTO = 1,

  /**
   * 禁用系统对拖拽背板图的缩放行为。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DISABLE_SCALE = 2,

  /**
   * 启用非文本类组件默认阴影效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  ENABLE_DEFAULT_SHADOW = 3,

  /**
   * 启用非文本类组件统一圆角效果，默认值12vp。当应用自身设置的圆角值大于默认值或modifier设置的圆角时，则显示应用自定义圆角效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  ENABLE_DEFAULT_RADIUS = 4,

  /**
   * 启用支持原拖拽对象灰显（透明度）效果，对文本内容拖拽不生效。用户拖起时原对象显示灰显效果，释放时原对象恢复原有效果。
   *   开启默认灰显效果后，不建议在拖拽开始后自行修改透明度，如果开发者在拖拽发起后自行修改应用透明度，则灰显效果将被覆盖，
   *   且在结束拖拽时无法正确恢复原始透明度效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,

  /**
   * 启用支持多选对象鼠标拖拽不聚拢效果，各拖拽图显示在其原始位置的相对位置，当满足多选的情况下且
   *   isMultiSelectionEnabled为true时该参数才生效。不聚拢效果优先级高于dragPreview。
   *   不支持二次拖拽、圆角和缩放设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ENABLE_MULTI_TILE_EFFECT = 6,

  /**
   * 启用支持以拖拽预览图初始尺寸计算跟手点位置，长按浮起图和拖拽图不一致时使用。
   *   鼠标拖拽，设置DragPreviewMode.ENABLE_MULTI_TILE_EFFECT时不生效。
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
 * 当一个节点上同时设置长按浮起预览（参考bindContextMenu）与拖拽时，使用该字段设置长按浮起预览图与拖拽预览图过渡动效方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum DraggingSizeChangeEffect {

  /**
   * 发起拖拽时直接从菜单预览图切换为最终尺寸的拖拽预览图。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  DEFAULT = 0,

  /**
   * 发起拖拽时，由菜单预览图直接切换为拖拽预览图，尺寸逐步从菜单预览图尺寸过渡到最终预览图尺寸，
   *   设置了DragPreviewMode中的DISABLE_SCALE枚举值时尺寸过渡不生效。这在长按浮起预览图与拖拽预览图相同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  SIZE_TRANSITION = 1,

  /**
   * 发起拖拽时，由菜单预览图逐步过渡切换为最终拖拽预览图，设置DragPreviewMode中的DISABLE_SCALE时尺寸过渡不生效。
   *   这常用于菜单预览图与拖拽预览图差异较大时使用，过渡效果包含内容透明度及尺寸变化。
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
 * Define the menu pop-up policy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MenuPolicy {

  /**
   * Default value. The default logic of whether to pop up a menu depends on the scene.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Hide pop up menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HIDE = 1,

  /**
   * Show pop up menu.
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
 * @typedef { import('../api/arkui/ImageModifier').ImageModifier } ImageModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ImageModifier = import('../api/arkui/ImageModifier').ImageModifier;

/**
 * SymbolGlyphModifier
 *
 * @typedef {import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier} SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
/**
 * SymbolGlyphModifier
 *
 * @typedef {import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier} SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type SymbolGlyphModifier = import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier;

/**
 * 设置拖拽过程中预览图处理模式及数量角标的显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface DragPreviewOptions {

  /**
   * 表示拖拽过程中背板图处理模式。
   *
   * 默认值：DragPreviewMode.AUTO
   *
   * 当组件同时设置DragPreviewMode.AUTO和其它枚举值时，以DragPreviewMode.AUTO为准，其它枚举值设置无效。
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
   * 用于配置拖拽背板图的样式Modifier对象，可使用图片组件所支持的属性和样式来配置背板图样式（参考示例6），当前支持透明度，阴影，背景模糊度，圆角，材质效果。文本拖拽只支持默认效果，不支持通过modifier进行自定义。
   *
   * 1.透明度。
   *
   * 通过[opacity]{@link CommonMethod#opacity(value: number | Resource)}设置不透明度，不透明度的取值范围为0-1。设置0或不设置时采用背板图透明度的默认值0.95，设置1或
   * 异常值时不透明。
   *
   * 2.阴影。
   *
   * 通过[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}设置阴影。
   *
   * 3.背景模糊度。
   *
   * 通过[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}或
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * 设置背景模糊度，如果两者同时设置，以后设置的属性为准。
   *
   * 4.圆角。
   *
   * 通过[border]{@link CommonMethod#border}或
   * [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}设置圆角，当同时在
   * mode和modifier中设置圆角，mode设置的圆角显示优先级低于modifier设置。
   *
   * 5.材质效果，从API版本26.0.0开始支持。
   *
   * 通过[systemMaterial]{@link CommonMethod#systemMaterial}设置系统材质效果。
   *
   * 默认值：空，拖拽背板不设置背板图样式。
   *
   * **说明：**
   *
   * 1.若节点已设置背景模糊或材质效果，直接用作拖拽预览会导致截图包含这些效果，与拖拽modifier属性冲突。建议使用
   * [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}自定义不包含背景模糊和材质效果的预览。
   *
   * 2.[ImmersiveMaterial]{@link @ohos.arkui.uiMaterial:ImmersiveMaterial#immersivematerial}的
   * [colorInvert]{@link @ohos.arkui.uiMaterial:ImmersiveOptions#colorInvert}参数在拖拽中不生效。
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
   * 控制数量角标是否显示，或强制设置显示的数量。当设置数量角标时取值范围为[0，2<sup>31</sup>-1]，超过取值范围时会按默认状态处理。当设置为浮点数时，只显示整数部分。
   *
   * **说明：**
   *
   * 在多选拖拽场景，需通过该接口设置拖拽对象的数量。
   *
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  numberBadge?: boolean | number;

  /**
   * 用于选择长按浮起图与拖拽预览图过渡效果。
   *
   * 默认值：DraggingSizeChangeEffect.DEFAULT。
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
 * 设置拖拽过程中预览图浮起的交互模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DragInteractionOptions {

  /**
   * 表示拖拽过程中背板图是否支持多选聚拢效果。true表示支持多选聚拢效果，false表示不支持多选聚拢效果。该参数只在[Grid]{@link ./grid}和[List]{@link ./list}组件中的
   * [GridItem]{@link ./gridItem}组件和[ListItem]{@link ./list_item}组件生效。
   *
   * 当一个item组件设置为多选拖拽时，该组件的子组件不可拖拽。聚拢组件预览图设置的优先级为
   * [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}中的string，dragPreview中的
   * PixelMap，组件自截图，不支持dragPreview中的Builder形式。
   *
   * 不支持组件绑定
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
   * 中参数存在isShown的模式。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isMultiSelectionEnabled?: boolean;

  /**
   * 表示是否启用长按浮起阶段组件自身的默认点按效果（缩小）。true表示启用默认点按效果，false表示不启用默认点按效果。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  defaultAnimationBeforeLifting?: boolean;

  /**
   * 表示拖拽时是否启用震动。true表示启用震动，false表示不启用震动。仅在存在蒙层的预览（通过
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)}
   * ）场景生效。
   *
   * **注意：** 仅当应用具备 ohos.permission.VIBRATE 权限，且用户启用了触感反馈时才会生效。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * 设置在拖拽至可滚动组件边缘时是否触发自动滚屏。true表示触发自动滚屏，false表示不触发自动滚屏。
   *
   * 默认值：true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableEdgeAutoScroll?: boolean;

  /**
   * 表示长按拖拽时，是否禁用浮起效果。true表示禁用浮起效果，false表示不禁用浮起效果。
   *
   * 如果设置为true，当组件支持拖拽并同时设置
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   * 时，仅弹出配置的自定义菜单预览。
   *
   * 默认值：false
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
 * 配置自定义拖拽过程中的预览图样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface PreviewConfiguration {

  /**
   * 自定义配置的预览图是否仅用于浮起。
   * 
   * **说明：** 
   * 
   * 默认值为false。true表示自定义预览图仅用于浮起，false表示可用于浮起和拖拽。设置为true时，如果发起长按拖拽，浮起时的预览图为自定义配置的预览图，拖拽时的预览图不使用
   * [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}属性，优先使用开发者在
   * [onDragStart]{@link CommonMethod#onDragStart}中返回的预览图，如果[onDragStart]{@link CommonMethod#onDragStart}中没有返回预览图则使用组件自截
   * 图。
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
   * 组件预览builder是否在设置时加载。
   * 
   * 默认值为false。true表示组件预览builder在设置时加载，false表示组件预览builder不在设置时加载。
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
* 前景智能取反色。
*
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 11
 */
/**
* 前景智能取反色。
*
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface InvertOptions {

  /**
   * 背景颜色灰度值大于阈值区间时的取值。
   *
   * 取值范围：[0, 1]
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 背景颜色灰度值大于阈值区间时的取值。
   *
   * 取值范围：[0, 1]
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  low: number;

  /**
   * 背景颜色灰度值小于阈值区间时的取值。
   *
   * 取值范围：[0, 1]
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 背景颜色灰度值小于阈值区间时的取值。
   *
   * 取值范围：[0, 1]
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  high: number;

  /**
   * 灰度阈值。
   *
   * 取值范围：[0, 1]
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 灰度阈值。
   *
   * 取值范围：[0, 1]
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  threshold: number;

  /**
   * 阈值范围。
   *
   * 取值范围：[0, 1]
   *
   * **说明：**
   *
   * 灰度阈值上下偏移thresholdRange构成阈值区间，背景颜色灰度值在区间内取值由high线性渐变到low。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * 阈值范围。
   *
   * 取值范围：[0, 1]
   *
   * **说明：**
   *
   * 灰度阈值上下偏移thresholdRange构成阈值区间，背景颜色灰度值在区间内取值由high线性渐变到low。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  thresholdRange: number;
}

/**
 * 导入CircleShape类型对象。
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
 * 导入EllipseShape类型对象。
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
 * 导入PathShape类型对象。
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
 * 导入RectShape类型对象。
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
* 定义可选类型，其值可以是undefined。
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
 * 使用ResourceStr和StyledString定义TipsMessageType属性。
 *
 * @typedef { ResourceStr | StyledString } TipsMessageType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type TipsMessageType = ResourceStr | StyledString;

/**
 * 为普通方法导入Matrix4Transit类型对象。
 * @typedef { import('../api/@ohos.matrix4').default.Matrix4Transit } Matrix4Transit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type Matrix4Transit = import('../api/@ohos.matrix4').default.Matrix4Transit;

/**
* 系统材质对象基类。
*
 * @typedef { import('../api/@ohos.arkui.uiMaterial').default.Material } SystemUiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @form
 * @since 23 dynamic
 */
/**
* 系统材质对象基类。
*
 * @typedef { import('../api/@ohos.arkui.uiMaterial').default.Material } SystemUiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type SystemUiMaterial = import('../api/@ohos.arkui.uiMaterial').default.Material;

/**
* 定义背景图选项。
*
* > **说明：**
* >
* > 背景图片的同步加载可能会带来潜在性能问题，详情可见[Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1)中说明。
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
   * 是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。
   *
   * 默认值：false
   *
   * false：异步加载图片。
   *
   * true：同步加载图片。
   *
   * @type { ?boolean }
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
   * 设置背景图片的重复样式。默认值为ImageRepeat.NoRepeat。
   *
   * @type { ?ImageRepeat }
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
 * 指定背景选项
 *
 * @interface BackgroundOptions
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
   * The set of edges for which to ignore layout safe area. To respect safe area insets on all edges, explicitly pass empty edge set.
   *
   * @type { ?Array<LayoutSafeAreaEdge> }
   * @default The default value is LayoutSafeAreaEdge.ALL when background is ResourceColor, otherwise it is an empty array [].
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
   * 设置组件自身的宽度，缺省时使用元素自身内容需要的宽度。若子组件的宽大于父组件的宽，则会超出父组件的范围。
   *
   * 从API version 10开始，该接口支持calc计算特性。
   *
   * @param { Length } value - 要设置的组件宽度
   *     >  **说明：**
   *     >
   *     >  - 在{@link TextInput}组件中，width设置auto表示自适应文本宽度。
   *     >
   *     >  - 在 [AlphabetIndexer]{@link AlphabetIndexer}组件中，width设置auto表示自适应宽度最大索引项的宽度
   *     <br>单位为： vp。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width(value: Length): T;

  /**
   * 设置组件自身的宽度或水平方向布局策略，缺省时使用元素自身内容需要的宽度。若子组件的宽大于父组件的宽，则会超出父组件的范围。
   *
   * @param { Length | LayoutPolicy } widthValue - 要设置的组件宽度。
   *     <br>单位为： vp。
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
   * 设置组件自身的高度，缺省时使用元素自身内容需要的高度。若子组件的高大于父组件的高，则会超出父组件的范围。
   * 从API version 10开始，该接口支持calc计算特性。
   *
   * @param { Length } value - 要设置的组件高度。
   *     >  **说明：**
   *     >
   *     >  在[Row]{@link Row}、 [Column]{@link Column}、[RelativeContainer]{@link
   *     RelativeContainer}组件中，width、height设置auto表示自适应子组件。
   *     <br>单位为： vp。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height(value: Length): T;

  /**
   * 设置组件自身的高度或垂直方向布局策略，缺省时使用元素自身内容需要的高度。若子组件的高大于父组件的高，则会超出父组件的范围。
   *
   * @param { Length | LayoutPolicy } heightValue - 要设置的组件高度。
   *     <br>单位为： vp。
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
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  drawModifier(modifier: DrawModifier | undefined): T;

  /**
   * 设置组件的自定义属性。
   *
   * API版本26.0.0之前，[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)不支持设置自定义属性。
   *
   * 从API版本26.0.0开始，自定义组件支持设置并读取自定义属性。
   *
   * @param { string } name - 自定义属性的名称。
   * @param { Optional<Object> } value - 自定义属性的值。
   * @returns { T } 当前控件
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  customProperty(name: string, value: Optional<Object>): T;

  /**
   * 控制组件扩展其安全区域。
   *
   * >  **说明：**
   * >
   * > - 设置expandSafeArea属性进行组件绘制扩展时，建议组件尺寸不要设置固定宽高（百分比除外），当设置固定宽高（包括设置'auto'）时，扩展安全区域的方向只支持[SafeAreaEdge.TOP,
   * SafeAreaEdge.START]，扩展后的组件尺寸保持不变。
   * >
   * > - 安全区域不会限制内部组件的布局和大小，不会裁剪内部组件。
   * >
   * > - 当父容器为滚动容器时，组件设置expandSafeArea属性后，自身不会延伸，但仍可触发其子节点中设置了expandSafeArea的延伸范围更新。
   * >
   * > - 设置expandSafeArea()时，不传参，走默认值处理；设置expandSafeArea([],[])时，相当于入参是空数组，此时expandSafeArea属性设置无效。
   * >
   * > - 组件设置expandSafeArea生效的条件为：
   * >  1.type为SafeAreaType.KEYBOARD时默认生效，表现为组件不避让键盘。<br/>
   * >  2.设置其他type，组件的边界与安全区域重合时组件能够延伸到安全区域下。例如：设备顶部状态栏高度100，那么组件在屏幕中的绝对位置需要为0 <= y <= 100。
   * >
   * > - 组件延伸到避让区时，在避让区的事件如点击事件等可能会被系统拦截，优先给状态栏等系统组件响应。
   * >
   * > -
   * 滚动类容器内的组件不建议设置expandSafeArea属性，如果设置，需要按照组件嵌套关系，将当前节点到滚动类祖先容器间所有直接节点设置expandSafeArea属性，否则expandSafeArea属性在滚动后可能会失效，写
   * 法参考[示例7](#示例7滚动类容器扩展安全区)。
   * >
   * > - expandSafeArea属性仅作用于当前组件，不会向父组件或子组件传递，因此使用过程中，所有相关组件均需配置。
   * >
   * > -
   * 同时设置expandSafeArea和position属性时，position属性会优先生效，expandSafeArea属性会后生效。对于未设置position、offset等绘制属性的组件，如果其边界未与避让区重叠，设置exp
   * andSafeArea属性将不生效，如弹窗和半模态组件。
   * >
   * > - 对于expandSafeArea属性无法生效的场景，若要将组件部署在避让区，需要手动调整组件的坐标。
   *
   * @param { Array<SafeAreaType> } types - 配置扩展安全区域的类型。未添加Metadata配置项时，页面不避让挖孔，CUTOUT类型不生效。
   *     <br>默认值： [SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD]。
   *     <br>非法值：按默认值处理。
   * @param { Array<SafeAreaEdge> } edges - 配置扩展安全区域的边缘。
   *     <br>默认值： [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END]。
   *     <br>非法值：按默认值处理。扩展至所有避让区域。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T;

  /**
   * 扩展组件布局时的安全区。
   *
   * >  **说明：**
   * >
   * >
   * 忽略布局安全区边缘的组件，如果其宽度或高度设置了 [LayoutPolicy.matchParent]{@link LayoutPolicy.matchParent}，其大小和位置都会改变，否则仅改变
   * 其位置。
   * >
   * > 依据safeAreaPadding累积功能，组件可扩展其安全区边缘到所有能感知的连续安全区域。
   * >
   * > 滚动类组件的子元素忽略布局安全区边缘时在滚动方向不考虑滚动组件自身及其父组件的安全区域，包括：List、ArcListItem、Grid、WaterFlow、Swiper和Tabs。
   * >
   * > 忽略布局安全区属性.ignoreLayoutSafeArea和忽略渲染安全区属性.expandSafeArea都设置时，.ignoreLayoutSafeArea先生效，.expandSafeArea在前者基础上再生效。
   *
   * @param { Array<LayoutSafeAreaType> } [types] - 扩展布局安全区域的类型。<br
   *     />默认值：[LayoutSafeAreaType.SYSTEM]，扩展至所有安全区域，比如：状态栏，导航栏和组件级安全区（safeAreaPadding）。<br/>非法值：按默认值处理。
   * @param { Array<LayoutSafeAreaEdge> } [edges] - 扩展布局安全区的边缘，并且支持镜像能力。<br />默认值：[LayoutSafeAreaEdge.ALL]，扩展组件所有边缘。<br
   *     />非法值：按默认值处理。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T;

  /**
   * 设置一个或多个触摸热区。从API版本26.0.0开始，未主动设置时[Button]{@link button}、[Button模式的Toggle]{@link toggle}、[Select]{@link select}、
   * [Chip]{@link @ohos.arkui.advanced.Chip}和[ChipGroup]{@link @ohos.arkui.advanced.ChipGroup}组件的触摸热区默认最小高度从28vp变更为32vp。
   * 该变更仅影响触摸命中范围，不影响组件实际显示高度。
   *
   * @param { Array<Rectangle> | Rectangle } value - 触摸热区，包括位置和大小。<br/>默认触摸热区为整个组件，默认值：<br/>{<br/>x：0,<br/>y：0,<br/>
   *     width：'100%',<br/>height：'100%'<br/>}<br/>
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  responseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * 设置一个或多个鼠标触摸热区。
   *
   * @param { Array<Rectangle> | Rectangle } value - 鼠标触摸热区，包括位置和大小。<br/>默认触摸热区为整个组件，默认值：<br/>{<br/>x：0,<br/>y：0,<br/>
   *     width：'100%',<br/>height：'100%'<br/>}
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mouseResponseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * 设置组件的触摸热区列表。调用该接口时，[responseRegion]{@link CommonMethod#responseRegion}与
   * [mouseResponseRegion]{@link CommonMethod#mouseResponseRegion}接口不再生效。
   *
   * @param { Array<ResponseRegion> } regions - 组件的触摸热区数组。<br/>每个触摸热区均包括输入工具类型、位置和大小。<br/>默认值：<br/>
   *     [{<br/>tool：ResponseRegionSupportedTool.ALL,<br/>x：LengthMetrics.vp(0),<br/>y：LengthMetrics.vp(0),<br/>width：LengthMetrics.percent(1),<br/>height：LengthMetrics.percent(1)<br/>}]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  responseRegionList(regions: Array<ResponseRegion>): T;

  /**
   * 设置组件自身的宽高尺寸。
   *
   * 从API version 10开始，该接口支持calc计算特性。
   *
   * @param { SizeOptions } value - 设置宽高尺寸。异常值：参数为undefined时，属性设置不生效；其它异常值时，size属性恢复到不配置时的默认行为。单位：vp
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  size(value: SizeOptions): T;

  /**
   * 设置约束尺寸，组件布局时，进行尺寸范围限制。
   *
   * 从API version 10开始，该接口支持calc计算特性。
   *
   * **constraintSize(minWidth/maxWidth/minHeight/maxHeight)取值对width/height影响：**
   *
   * | 缺省值                                      | 结果                                       |
   * | ---------------------------------------- | ---------------------------------------- |
   * | \ | width=MAX(minWidth,MIN(maxWidth,width))<br/>height=MAX(minHeight,MIN(maxHeight,height)) |
   * | maxWidth、maxHeight | width=MAX(minWidth,width)<br/>height=MAX(minHeight,height) |
   * | minWidth、minHeight | width=MIN(maxWidth,width)<br/>height=MIN(maxHeight,height) |
   * | width、height |
   * 若minWidth<maxWidth，组件自身布局逻辑生效，width取值范围为[minWidth,maxWidth]；否则，width=MAX(minWidth,maxWidth)。<br/>若minHeight<maxHeig
   * ht，组件自身布局逻辑生效，height取值范围为[minHeight,maxHeight]；否则，height=MAX(minHeight,maxHeight)。 |
   * | width与maxWidth、height与maxHeight | width=minWidth<br/>height=minHeight |
   * | width与minWidth、height与minHeight | 组件自身布局逻辑生效，width取值约束为不大于maxWidth。<br/>组件自身布局逻辑生效，height取值约束为不大于maxHeight。 |
   * | minWidth与maxWidth、minHeight与maxHeight | width以所设值为基础，根据其他布局属性发生可能的拉伸或者压缩。<br/>height以所设值为基础，根据其他布局属性发生可能的拉伸或者压缩。|
   * | width与minWidth与maxWidth | 使用父容器传递的布局限制进行布局。 |
   * | height与minHeight与maxHeight | 使用父容器传递的布局限制进行布局。 |
   *
   * @param { ConstraintSizeOptions } value - 设置约束尺寸。constraintSize的优先级高于Width和Height。取值结果参考constraintSize取值对width/height影响。
   *     <br><br/>默认值：<br/>{<br/>minWidth:&nbsp;0,<br/>maxWidth:&nbsp;Infinity,<br/>minHeight:&nbsp;0,<br/>maxHeight:&nb
   *     sp;Infinity<br/>}<br/>异常值：数值开头的字符串仅解析出数字部分，非数值开头的字符串解析为0；其它异常值时，constraintSize属性恢复到不配置时的默认行为。<br/>单位：vp<br/>。
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
   * 设置当前组件是否可以响应点击事件、触摸事件等手指交互事件。
   *
   * > **说明：**
   *
   * @param { boolean } value - 设置当前组件是否可以响应点击事件、触摸事件等手指交互事件。
   *    默认值：true，可以响应交互事件。设置为false时，不可以响应交互事件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead hitTestBehavior
   */
  touchable(value: boolean): T;

  /**
   * 设置组件的触摸测试类型。如果组件不设置hitTestBehavior，其默认触摸测试类型为HitTestMode.Default。
   *
   * @param { HitTestMode } value - 设置当前组件的触摸测试类型。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  hitTestBehavior(value: HitTestMode): T;

  /**
   * 当前组件通过设置回调，可自定义触摸测试并控制触摸测试中的子节点行为。
   *
   * > **说明：**
   * >
   * > - 子节点信息数组中仅包含命名节点的信息，即开发者通过id属性设置了id的节点。
   * >
   * > - 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } event - 触摸事件信息。value的值为包含子节点信息的数组。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T;

  /**
   * 设置组件的布局权重，使组件在父容器（[Row]{@link Row}/[Column]{@link Column}/[Flex]{@link Flex}的主轴方向按照权重分配尺寸。
   *
   * @param { number | string } value - 组件的布局权重。
   *     <br>父容器尺寸确定时，不设置layoutWeight属性或者layoutWeight属性生效值为0的元素优先占位，这些元素占位后在主轴留下的空间称为主轴剩余空间。设置了layoutWeight属性且layoutWeig
   *     ht属性生效值大于0的子元素会从主轴剩余空间中按照各自所设置的权重占比分配尺寸，分配时会忽略元素本身的尺寸设置。<br/>默认值：0<br/>**说明：** <br/>仅在[Row]{@link
   *     Row}/[Column]{@link Column}/[Flex]{@link
   *     Flex}布局中生效。<br/>可选值为大于等于0的数字，或者可以转换为数字的字符串。<br/>如果容器中有子元素设置了layoutWeight属性，且设置的属性值大于0，则所有子元素不会再基于[flexShrink]{@
   *     link flexShrink}和[flexGrow]{@link flexGrow}布局。
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
   * 对形成链的组件进行重新布局。仅当父组件为[RelativeContainer]{@link RelativeContainer}时生效。
   *
   * > **说明：**
   * >
   * > 从API version 23开始，支持 [attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { ChainWeightOptions } chainWeight - 设置了chainWeight属性的组件与同一条链上的兄弟组件在水平或竖直方向的尺寸会按照设置的权重进行分配，分配时会忽略组件本身尺寸设置，按分配的权重自适应占满剩余空间。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  chainWeight(chainWeight: ChainWeightOptions): T;

  /**
   * 设置组件的内边距属性。
   *
   * 从API version 10开始，该接口支持calc计算特性。
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
   * 设置安全区边距属性。允许容器向自身添加组件级安全区域，供子组件延伸，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * > **说明**
   * >
   * >
   * 当父辈和祖先容器设置了组件级安全区域时，子组件可以感知并利用该区域，称该区域为累计安全区延伸（accumulatedSafeAreaExpand，下文简称SAE），表示子组件在四个方向上各可延伸的长度。当祖辈与更上一级祖辈的saf
   * eAreaPadding相邻接（即未被margin、border、padding分隔）时，SAE将递归地向外累积，直至不存在相邻的更外层safeAreaPadding或递归至页面容器外。系统级避让区域（如状态栏、导航条、挖孔区等，
   * 详情参见安全区域中的说明）可视为页面容器特有的safeAreaPadding，同样参与该延伸范围的计算。
   * >
   * > 通过与其他属性配合使用，可对上述计算得到的组件级安全区区域加以利用。例如，对子组件设置[ignoreLayoutSafeArea]{@link
   * CommonMethod#ignoreLayoutSafeArea}属性，即可利用SAE延伸组件的布局范围。
   *
   * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - 设置组件的安全区边距。
   *     <br>单位为： vp。 默认值： 0。
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
   * 设置组件的外边距属性。在计算位置时外边距视为组件大小的一部分，从而影响组件位置。
   *
   * 从API version 10开始，该接口支持calc计算特性。
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
   * 为组件新增背景
   *
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
   * 为组件新增背景
   *
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
   * 指定当前组件在指定方向上的像素取整对齐方式，某方向不设置时默认在该方向进行四舍五入取整。
   *
   * > **说明：**
   * >
   * > - 在API version 11，本接口采用半像素对齐方式（即0\~0.25取0，0.25\~0.75取0.5，0.75\~1.0取1）。从API version
   * 12开始，本接口采用四舍五入的取整方式，并支持组件级关闭像素取整的能力。
   * >
   * > - 从API version
   * 12开始，该接口支持在[attributeModifier](ts-universal-attributes-attribute-modifier.md#attributemodifier)中调用。
   *
   * 正常计算时，上下方向与组件高度相对应，左右方向（镜像的起始方向称为左）与宽度相对应。为方便描述将两组方向称为左上和右下。
   *
   * - 计算当前组件左上角坐标： 左上角相对父容器偏移量。
   * - 计算当前组件右下角坐标： 左上角相对于父容器偏移量 + 组件自身尺寸。
   * - 重新计算当前组件尺寸： 右下角坐标四舍五入取整 - 左上角坐标四舍五入取整。
   *
   * @param { PixelRoundPolicy } value - 指定当前组件边界取整策略。<br/>**说明：**<br/>该属性用于因浮点数绘制产生视觉异常的场景。取整结果不仅和组件的宽高有关，也与组件的位置有关。即使设置组件的宽高相同，由于以浮点数描述的组件位置不同，舍入后组件的最终宽高也
   *     可能不同。
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
   * @param { SizeOptions | ImageSize } value - 
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
   * 为当前组件提供一种背景材质模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。
   *
   * @param { BlurStyle } value - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。
   * @param { BackgroundBlurStyleOptions } options - 背景模糊选项。用于配置模糊激活策略和不生效时的背景色。不传入时使用默认激活策略
   *     [BlurStyleActivePolicy]{@link BlurStyleActivePolicy}.ALWAYS_ACTIVE。<br/>该参数在ArkTS卡片中，暂不支持使用。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T;

  /**
   * 为当前组件提供一种背景材质模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。与
   * [backgroundBlurStyle<sup>9+</sup>]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * 相比，style参数新增了对undefined类型的支持。
   *
   * @param { Optional<BlurStyle> } style - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。<br/>当style的值为undefined时，恢复为默认关闭模糊
   *     的背景。
   * @param { BackgroundBlurStyleOptions } [options] - 背景模糊选项。用于配置模糊激活策略和不生效时的背景色。不传入时使用默认激活策略
   *     [BlurStyleActivePolicy]{@link BlurStyleActivePolicy}.ALWAYS_ACTIVE。<br/>该参数在ArkTS卡片中，暂不支持使用。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T;

  /**
   * 为当前组件提供一种背景材质模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。与
   * [backgroundBlurStyle<sup>18+</sup>]{@link CommonMethod#backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions)}
   * 相比，新增了sysOptions参数，即支持系统自适应调节参数。
   *
   * @param { Optional<BlurStyle> } style - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。<br/>当style的值为undefined时，恢复为默认关闭模糊
   *     的背景。
   * @param { BackgroundBlurStyleOptions } [options] - 背景模糊选项。<br/>该参数在ArkTS卡片中，暂不支持使用。
   * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * 设置组件背景属性，包括背景模糊半径、亮度、饱和度和颜色等参数。
   *
   * @param { BackgroundEffectOptions } options - 设置组件背景属性包括：背景模糊半径、亮度、饱和度和颜色等参数。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundEffect(options: BackgroundEffectOptions): T;

  /**
   * 设置组件背景属性，包括背景模糊半径、亮度、饱和度和颜色等参数。与
   * [backgroundEffect<sup>11+</sup>]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}相比，options参数
   * 新增了对undefined类型的支持。
   *
   * @param { Optional<BackgroundEffectOptions> } options - 设置组件背景属性包括：背景模糊半径、亮度、饱和度和颜色等参数。<br/>当options的值为undefined时，恢复
   *     为无效果的背景。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>): T;

  /**
   * 设置组件背景属性，包括背景模糊半径、亮度、饱和度和颜色等参数。与
   * [backgroundEffect<sup>18+</sup>]{@link CommonMethod#backgroundEffect(options: Optional<BackgroundEffectOptions>)}相
   * 比，新增了sysOptions参数，即支持系统自适应调节参数。
   * 
   * > **说明：**
   * >
   * > backgroundEffect接口为实时接口，每帧对模糊等效果执行实时渲染，性能负载较大。当组件背景模糊效果无需变动时，推荐采用静态模糊接口
   * > [blur]{@link @ohos.effectKit:effectKit.Filter.blur(radius: double)}实现模糊效果。最佳实践请参考：
   * > [图像模糊动效优化-使用场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519)。
   *
   * @param { Optional<BackgroundEffectOptions> } options - 设置组件背景属性包括：背景模糊半径、亮度、饱和度和颜色等参数。<br/>当options的值为undefined时，恢复
   *     为无效果的背景。
   * @param { SystemAdaptiveOptions } [ sysOptions ] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
   * @returns { T } 返回当前组件。
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
   * 设置组件的前景属性。
   *
   * @param { ForegroundEffectOptions } options - 设置组件前景属性包括：模糊半径。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  foregroundEffect(options: ForegroundEffectOptions): T;

  /**
   * 设置非滤镜视觉效果。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { VisualEffect } effect - 非滤镜视觉效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visualEffect(effect: VisualEffect): T;

  /**
   * 设置背景滤镜视觉效果。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Filter } filter - 背景滤镜视觉效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundFilter(filter: Filter): T;

  /**
   * 设置前景滤镜（内容）视觉效果。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Filter } filter - 前景滤镜（内容）视觉效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  foregroundFilter(filter: Filter): T;

  /**
   * 设置合成滤镜视觉效果。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Filter } filter - 合成滤镜视觉效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compositingFilter(filter: Filter): T;

  /**
   * 设置系统材质滤镜效果，系统材质滤镜的绘制早于[backgroundFilter]{@link CommonMethod#backgroundFilter}绘制，即位于backgroundFilter的更底层。
   * 
   * > **说明：**
   * >
   * > 该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Filter | undefined } filter - 系统材质滤镜视觉效果。设置为undefined时恢复为无系统材质滤镜效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  materialFilter(filter: Filter | undefined): T;

  /**
   * 为当前组件提供内容模糊能力。
   *
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { BlurStyle } value - 内容模糊样式。
   * @param { ForegroundBlurStyleOptions } options - 内容模糊选项。默认值请参考
   *     [ForegroundBlurStyleOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-foreground-blur-style.md#foregroundblurstyleoptions)。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 为当前组件提供内容模糊能力。
   *
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { BlurStyle } value - 内容模糊样式。
   * @param { ForegroundBlurStyleOptions } options - 内容模糊选项。默认值请参考
   *     [ForegroundBlurStyleOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-foreground-blur-style.md#foregroundblurstyleoptions)。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T;

  /**
   * 为当前组件提供内容模糊能力。与
   * [foregroundBlurStyle]{@link CommonMethod#foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions)}
   * 相比，style参数新增了对undefined类型的支持。
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): T;

  /**
   * 为当前组件提供内容模糊能力。与
   * [foregroundBlurStyle<sup>18+</sup>]{@link CommonMethod#foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions)}
   * 相比，新增了sysOptions参数，即支持系统自适应调节参数。
   *
   * > **说明：**
   * >
   * > foregroundBlurStyle接口为实时模糊接口，每帧执行实时渲染，性能负载较大。当模糊内容与模糊半径均无需变动时，推荐采用静态模糊接口
   * > [blur]{@link @ohos.effectKit:effectKit.Filter.blur(radius: double)}。最佳实践请参考：
   * > [图像模糊动效优化-使用场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519)。
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * 设置组件的不透明度。
   *
   * @param { number | Resource } value - 元素的不透明度，取值范围为0到1，若设置的值小于0时，则取值为0，若设置的值大于1时，则取值为1，1表示不透明，0表示完全透明，达到隐藏组件效果，但是在布局
   *     中占位。 <br> 默认值：1 <br/>**说明：** <br/> 子组件会继承父组件的透明度，并与自身的透明度属性叠加。如：父组件透明度为0.1，子组件设置透明度为0.8，则子组件实际透明度为0.1*0.8=0.08。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  opacity(value: number | Resource): T;

  /**
   * 设置组件的不透明度。与[opacity]{@link CommonMethod#opacity(value: number | Resource)}相比，opacity参数新增了对undefined类型的支持。
   *
   * @param { Optional<number | Resource> } opacity - 元素的不透明度，取值范围为0到1，若设置的值小于0时，则取值为0，若设置的值大于1时，则取值为1，1表示不透明，0表示完全透明，达到
   *     隐藏组件效果，但是在布局中占位。 <br/> 默认值：1 <br/>**说明：** <br/> 子组件会继承父组件的透明度，并与自身的透明度属性叠加。如：父组件透明度为0.1，子组件设置透明度为0.8，则子组件实际透明度为
   *     0.1*0.8=0.08。<br/>当opacity的值为undefined时，恢复为默认不透明度为1的状态。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  opacity(opacity: Optional<number | Resource>): T;

  /**
   * 设置边框样式。
   *
   * >  **说明：**
   * >
   * >  color、radius缺省时，为了保证[borderColor]{@link CommonMethod#borderColor}、[borderRadius]{@link
   * CommonMethod#borderradius}生效，需要将[borderColor]{@link CommonMethod#bordercolor}、[borderRadius]{@link
   * CommonMethod#borderradius}设置在[border]{@link CommonMethod#border}后。
   *
   * @param { BorderOptions } value - <br>统一边框样式设置接口。<br/>**说明：** <br/>边框宽度默认值为0，即不显示边框。<br/>从API version
   *     9开始，父节点的border显示在子节点内容之上。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  border(value: BorderOptions): T;

  /**
   * 设置元素的边框线条样式。
   *
   * @param { BorderStyle | EdgeStyles } value - 设置元素的边框样式。<br/>默认值：BorderStyle.Solid
   *     - Border style.<br>Default value: **BorderStyle.Solid**.[since 9]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  borderStyle(value: BorderStyle | EdgeStyles): T;

  /**
   * 设置边框的宽度。
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
   * 设置边框的颜色。
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
   * 设置边框的圆角半径。
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
   * 设置边框的圆角半径和绘制圆角的模式。
   *
   * **注意**
   * 1. **RenderStrategy.FAST**：当前组件及其子组件将直接以圆角效果绘制到画布上。
   * 2. **RenderStrategy.OFFSCREEN**：当前组件及其子组件将首先渲染到一个离屏画布，然后进行圆角裁剪，最后绘制到主画布上。
   *
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value - 设置元素的边框圆角半径，支持百分比，百分比依据组件宽度。设置圆角后，可搭配clip属性进行裁剪，避免子组件超出组件自身。
   * @param { RenderStrategy } [type] - 设置组件绘制圆角的模式。
   *     <br>默认值： **RenderStrategy.FAST**。
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
   * @param { BorderImageOption } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  borderImage(value: BorderImageOption): T;

  /**
   * 统一外描边样式设置接口。
   *
   * @param { OutlineOptions } value - 外描边样式。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 统一外描边样式设置接口。
   *
   * @param { OutlineOptions } value - 外描边样式。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outline(value: OutlineOptions): T;

  /**
   * 统一外描边样式设置接口。与[outline]{@link CommonMethod#outline(value: OutlineOptions)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<OutlineOptions> } options - 外描边样式。<br/>当options的值为undefined时，恢复为无外边框效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outline(options: Optional<OutlineOptions>): T;

  /**
   * 设置元素的外描边样式。不设置该接口时，默认显示为一条实线。
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value - 设置元素的外描边样式。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 设置元素的外描边样式。不设置该接口时，默认显示为一条实线。
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value - 设置元素的外描边样式。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T;

  /**
   * 设置元素的外描边样式。不设置该接口时，默认显示为一条实线。与
   * [outlineStyle]{@link CommonMethod#outlineStyle(value: OutlineStyle | EdgeOutlineStyles)}相比，style参数新增了对undefined类型的支
   * 持。
   *
   * @param { Optional<OutlineStyle | EdgeOutlineStyles> } style - 设置元素的外描边样式。<br/>当style的值为undefined时，恢复为无外描边样式的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T;

  /**
   * 设置元素的外描边宽度。不设置该接口时，默认无变化。
   *
   * @param { Dimension | EdgeOutlineWidths } value - 设置元素的外描边宽度，不支持百分比。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 设置元素的外描边宽度。不设置该接口时，默认无变化。
   *
   * @param { Dimension | EdgeOutlineWidths } value - 设置元素的外描边宽度，不支持百分比。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineWidth(value: Dimension | EdgeOutlineWidths): T;

  /**
   * 设置元素的外描边宽度。不设置该接口时，默认无变化。与[outlineWidth]{@link CommonMethod#outlineWidth(value: Dimension | EdgeOutlineWidths)}相比，
   * width参数新增了对undefined类型的支持。
   *
   * @param { Optional<Dimension | EdgeOutlineWidths> } width - 设置元素的外描边宽度，不支持百分比。<br/>当width的值为undefined时，恢复为无外描边宽度的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T;

  /**
   * 设置元素的外描边颜色。不设置该接口时，默认显示为黑色。
   *
   * @param { ResourceColor | EdgeColors } value - 设置元素的外描边颜色。 [since 11 - 11]
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 设置元素的外描边颜色。不设置该接口时，默认显示为黑色。
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value - 设置元素的外描边颜色。 [since 11 - 11]
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * 设置元素的外描边颜色。不设置该接口时，默认显示为黑色。与
   * [outlineColor]{@link CommonMethod#outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors)}相比，color参数新
   * 增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor | EdgeColors | LocalizedEdgeColors> } color - 设置元素的外描边颜色。<br/>当color的值为undefined时，恢
   *     复为描边颜色为Color.Black的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T;

  /**
   * 设置元素的外描边圆角半径。不设置该接口时，默认无变化。
   *
   * @param { Dimension | OutlineRadiuses } value - 设置元素的外描边圆角半径，不支持百分比。<br/>最大生效值：组件width/2 + outlineWidth或组件height/2 +
   *     outlineWidth。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 设置元素的外描边圆角半径。不设置该接口时，默认无变化。
   *
   * @param { Dimension | OutlineRadiuses } value - 设置元素的外描边圆角半径，不支持百分比。<br/>最大生效值：组件width/2 + outlineWidth或组件height/2 +
   *     outlineWidth。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  outlineRadius(value: Dimension | OutlineRadiuses): T;

  /**
   * 设置元素的外描边圆角半径。不设置该接口时，默认无变化。与[outlineRadius]{@link CommonMethod#outlineRadius(value: Dimension | OutlineRadiuses)}相
   * 比，radius参数新增了对undefined类型的支持。
   *
   * @param { Optional<Dimension | OutlineRadiuses> } radius - 设置元素的外描边圆角半径，不支持百分比。<br/>最大生效值：组件width/2 + outlineWidth或组
   *     件height/2 + outlineWidth。<br/>当radius的值为undefined时，恢复为外描边圆角半径为0的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
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
   * @param { ResourceColor | ColoringStrategy } value - Foreground color. The value can be a specific color or a
   *     coloring strategy. The [attribute animation]{@link common} is not supported.
   * @returns { T }
   Current component.
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { ResourceColor | ColoringStrategy } value - Foreground color. The value can be a specific color or a
   *     coloring strategy. The [attribute animation]{@link common} is not supported.
   * @returns { T }
   Current component.
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  foregroundColor(value: ResourceColor | ColoringStrategy): T;

  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { Optional<ResourceColor | ColoringStrategy> } color -Foreground color. The value can be a specific color
   *     or a coloring strategy. Property animations are not supported.<br>If the color value is **undefined**, the
   *     previous setting or the component's default value is retained. The specific behavior may vary across
   *     components. It is recommended that you use explicit color values or [ColoringStrategy]{@link ColoringStrategy}.
   * @returns { T }
   Current component.
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T;

  /**
   * 点击动作触发该回调。
   * 
   * 触发点击事件的设备类型为键盘或手柄时，事件的SourceTool值为Unknown，事件的[SourceType]{@link SourceType}值为KEY，JOYSTICK。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始，使用卡片能力时存在以下限制：
   * >
   * > 1. 如果手指按下的持续时间超过800ms，不能触发点击事件。
   * >
   * > 2. 如果手指按下后移动位移超过20px，不能触发点击事件。
   *
   * @param { function } event - 点击事件的回调函数。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onClick(event: (event: ClickEvent) => void): T;

  /**
   * 点击动作触发该回调。
   * 
   * 当触发点击事件的设备类型为键盘或手柄时，事件的[SourceTool]{@link SourceTool}值为Unknown，事件的[SourceType]{@link SourceType}值为KEY或JOYSTICK。
   * 
   * 新增distanceThreshold参数，设置点击手势移动阈值。手指移动超出阈值时，点击手势识别失败。
   * 
   * 对于无手指移动距离限制的点击场景，建议使用原有接口。若需限制点击时手指移动范围，建议使用该接口。
   * 
   * > **说明：**
   * >
   * > - 从API version 12开始，在使用卡片能力时，存在以下限制：
   * > >    1. 如果手指按下的持续时间超过800ms，不能触发点击事件。
   * > >    2. 如果手指按下后移动位移超过20px，不能触发点击事件。
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } event - 点击事件的回调函数。
   * @param { number } distanceThreshold - 点击事件移动阈值。当设置的值小于等于0时，会被转化为默认值。<br/>默认值：2^31-1<br/>单位：vp<br/>**说明：**<br/>当手指的移
   *     动距离超出开发者预设的移动阈值时，点击识别失败。如果初始化为默认阈值时，手指移动超过组件热区范围，点击识别失败。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onClick(event: Callback<ClickEvent>, distanceThreshold: number): T;

  /**
   * 鼠标或手写笔进入或退出组件时，触发hover事件。
   *
   * @param { function } event - 鼠标的状态信息。<br />event表示设置阻塞事件冒泡属性，并获取鼠标或手写笔悬浮的位置坐标，从API version 11开始支持。<br />isHover表示鼠标或
   *     手写笔是否悬浮在组件上，进入时为true， 离开时为false。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onHover(event: (isHover: boolean, event: HoverEvent) => void): T;

  /**
   * 手写笔悬浮于组件上方时触发悬浮移动事件。
   *
   * @param { Callback<HoverEvent> } event - 设置阻塞事件冒泡属性，并获取手写笔悬浮的位置坐标。
   * @returns { T } 返回当前组件。
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
   * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
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
   * 设置组件的鼠标悬浮态显示效果。当未设置hoverEffect时，组件默认鼠标悬浮态效果为HoverEffect.Auto。对于应用了悬浮态效果的组件，当鼠标悬浮于组件上并按下时，悬浮态效果会消失；当鼠标松开时，悬浮态效果会恢复。
   *
   * @param { HoverEffect } value - 设置当前组件悬浮态下的悬浮效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hoverEffect(value: HoverEffect): T;

  /**
   * 当前组件被鼠标按键点击时或者鼠标在组件上悬浮移动时，触发该回调。
   *
   * @param { function } event - 返回触发事件时的时间戳、鼠标按键、动作、鼠标位置在整个屏幕上的坐标和相对于当前组件的坐标。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onMouse(event: (event: MouseEvent) => void): T;

  /**
   * 手指触摸动作触发该回调。触摸事件默认[冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)，会被多个组件消费，如果需阻止冒泡，可参考
   * [TouchEvent]{@link TouchEvent}的stopPropagation方法。鼠标左键按下时，对应的事件也会转换成触摸事件并触发该回调。
   *
   * @param { function } event - 获得TouchEvent对象。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onTouch(event: (event: TouchEvent) => void): T;

  /**
   * 绑定该方法的组件获焦后，按键动作触发该回调。
   *
   * @param { function } event - 获得KeyEvent对象。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onKeyEvent(event: (event: KeyEvent) => void): T;

  /**
   * 当绑定该方法的组件获焦后，按键操作将触发此回调。若此回调的返回值为`true`，则视为按键事件已被处理。
   *
   * @param { Callback<KeyEvent, boolean> } event - 按键事件的回调。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onKeyEvent(event: Callback<KeyEvent, boolean>): T;

  /**
   * 组件获焦以后旋转表冠时触发该回调。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<CrownEvent> } event - 获得[CrownEvent]{@link CrownEvent}对象。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T;

  /**
   * 绑定该方法的组件获焦后，按键动作优先触发该回调。
   * 
   * 该回调的返回值为`true`时，视作该按键事件已被消费，后续的事件回调（`keyboardShortcut`、输入法事件、`onKeyEventDispatch`、`onKeyEvent`）会被拦截，不再触发。
   *
   * @param { Callback<KeyEvent, boolean> } event - 处理按键事件的回调。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onKeyPreIme(event: Callback<KeyEvent, boolean>): T;

  /**
   * 对应组件收到按键事件时，会触发该回调，该按键事件不会分发给其子组件。不支持构造KeyEvent进行分发，只支持分发已有的按键事件。
   * 
   * 该回调的返回值为`true`时，视作该按键事件已被消费，不会[冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)给父组件处理。
   *
   * @param { Callback<KeyEvent, boolean> } event - 处理按键事件分发的回调。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T;

  /**
   * 给组件绑定焦点轴事件回调。绑定该方法的组件获焦后，游戏手柄上的摇杆、十字键等的操作会触发该回调。
   *
   * @param { Callback<FocusAxisEvent> } event - 焦点轴事件回调。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  onFocusAxisEvent(event: Callback<FocusAxisEvent>): T;

  /**
   * 鼠标滚轮滚动或触控板双指轻触滑动、双指捏合时触发该回调。
   *
   * @param { Callback<AxisEvent> } event - 获得[AxisEvent]{@link AxisEvent}对象。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  onAxisEvent(event: Callback<AxisEvent>): T;

  /**
   * 设置当前组件是否可以获焦。
   *
   * @param { boolean } value - 设置当前组件是否可以获焦，true表示组件可以获焦，false表示组件不可获焦。<br/>**说明：**<br/>存在默认交互逻辑的组件例如
   *     [Button]{@link button}、[TextInput]{@link text_input}等，默认即为可获焦，[Text]{@link text}、[Image]{@link image}等组件则默认状态为不
   *     可获焦。不可获焦状态下，无法触发[焦点事件]{@link common}。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  focusable(value: boolean): T;

  /**
   * 设置组件的自定义焦点走焦逻辑。
   *
   * @param { FocusMovement } nextStep
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  nextFocus(nextStep: Optional<FocusMovement>): T;

  /**
   * 设置当前容器组件的tabStop，可决定焦点在走焦时是否会停留在当前容器。
   *
   * @param { boolean } isTabStop
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  tabStop(isTabStop: boolean): T;

  /**
   * 当前组件获取焦点时触发的回调。
   *
   * @param { function } event - onFocus的回调函数，表示组件已获焦。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onFocus(event: () => void): T;

  /**
   * 当前组件失去焦点时触发的回调。
   *
   * @param { function } event - onBlur的回调函数，表示组件已失焦。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onBlur(event: () => void): T;

  /**
   * 自定义组件tab键走焦能力。当组件未设置tabIndex时，默认按照预设的焦点移动规则进行焦点移动。
   * 
   * > **说明：**
   * >
   * > - tabIndex只能够自定义Tab键走焦，若想同时自定义方向键等走焦能力，建议使用[nextFocus]{@link CommonMethod#nextFocus}。
   *
   * @param { number } index - 自定义组件tab键走焦能力。若有配置了tabIndex大于0的组件，则tab键走焦只会在tabIndex大于0的组件内按照tabIndex的值从小到大并循环依次走焦。若没有配置
   *     tabIndex大于0的组件，则tabIndex等于0的组件按照组件预设的走焦规则走焦。<br />[UiExtension]{@link @ohos.arkui.uiExtension:uiExtension}组件未适配
   *     tabIndex，在含有[UiExtension]{@link @ohos.arkui.uiExtension:uiExtension}组件的
   *     [层级页面](docroot://ui/arkts-common-events-focus-event.md#基础概念)使用tabIndex会导致走焦错乱。<br />- tabIndex >= 0：表示元素是可聚焦的，并
   *     且可以通过tab键走焦来访问到该元素。<br />- tabIndex < 0（通常是tabIndex = -1）：表示元素是可聚焦的，但是不能通过tab键走焦来访问到该元素。<br/> **说明：**<br/>
   *     tabIndex与focusScopeId不能混用。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tabIndex(index: number): T;

  /**
   * 设置当前组件是否为当前[层级页面](docroot://ui/arkts-common-events-focus-event.md#基础概念)上的默认焦点。当未设置defaultFocus时，组件默认不为当前层级页面的默认焦点。
   * 
   * > **说明：**
   * >
   * > 可以设置默认焦点的页面指的是支持页面路由或是弹窗类的容器组件，例如Page、NaviDestination、NavBar、PopUp、Dialog等。
   *
   * @param { boolean } value - 设置当前组件是否为当前[层级页面](docroot://ui/arkts-common-events-focus-event.md#基础概念)上的默认焦点，仅在初次创建的
   *     层级页面第一次进入时生效。<br/>**说明：** <br/>值为true则表示为默认焦点，值为false时无效。<br/>若层级页面内无任何组件设置defaultFocus(true)，
   *     API version 11及之前，层级页面的默认焦点是当前层级页面上首个可获焦的非容器组件，API version 11之后，层级页面的默认焦点就是层级页面的根容器。<br/>
   *     若某层级页面内有多个组件设置了defaultFocus(true)，则以组件树深度遍历找到的第一个组件为默认焦点。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  defaultFocus(value: boolean): T;

  /**
   * 设置当前组件是否为当前组件所在容器获焦时的默认焦点。当组件未设置groupDefaultFocus时，组件默认不为当前组件所在容器获焦时的默认焦点。
   *
   * @param { boolean } value - 设置当前组件是否为当前组件所在容器获焦时的默认焦点，仅在初次创建容器节点第一次获焦时生效。true表示当前组件为所在容器获焦时的默认焦点，false表示当前组件不是所在容器获焦
   *     时的默认焦点。<br/>**说明：** <br/>必须与[tabIndex]{@link CommonMethod#tabIndex}联合使用，当某个容器设置了tabIndex，且容器内某子组件或容器自身设置了
   *     groupDefaultFocus(true)，当该容器首次TAB键获焦时，会自动将焦点转移至该指定的组件上。若容器内（包含容器本身）有多个组件设置了groupDefaultFocus(true)，则以组件树深度遍历找到的
   *     第一个组件为最终结果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  groupDefaultFocus(value: boolean): T;

  /**
   * 设置当前组件是否支持点击获焦能力。当组件未设置focusOnTouch时，组件默认不支持点击获焦能力。
   *
   * @param { boolean } value - 设置当前组件是否支持点击获焦能力。true表示组件支持点击获焦，false表示不支持点击获焦。<br/>**说明：** <br/>仅在组件可点击时才能正常获取焦点。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  focusOnTouch(value: boolean): T;

  /**
   * 设置当前组件系统焦点框样式。
   *
   * @param { FocusBoxStyle } style - 设置当前组件系统焦点框样式。<br/>**说明：** <br/>仅影响走焦状态下展示了系统焦点框的组件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusBox(style: FocusBoxStyle): T;

  /**
   * 设置当前容器组件的id标识，以及是否为焦点组。
   *
   * @param { string } id - 设置当前容器组件的id标识。<br/>**说明：** <br/>单个
   *     [层级页面](docroot://ui/arkts-common-events-focus-event.md#基础概念)下，id标识全局唯一，不可重复。
   * @param { boolean } [isGroup] - 设置当前容器组件是否为焦点组。true表示容器组件为焦点组，false表示容器组件不是焦点组。默认值为false。<br/>**说明：** <br/>焦点组不可嵌套，不
   *     可重复配置。<br/> 焦点组不能和tabIndex混用。<br/>配置焦点组的目的是使得容器及容器内的元素可以按照焦点组规则走焦。焦点组走焦规则：<br/>1.焦点组容器内只能通过方向键走焦，tab键会使焦点跳出焦点组容
   *     器。<br/>2.通过方向键使焦点从焦点组容器外切换到焦点组容器内时，若焦点组容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由焦点组容器内上次获焦的组件获焦。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusScopeId(id: string, isGroup?: boolean): T;

  /**
   * 设置当前容器组件的id标识，以及是否为焦点组。新增参数arrowStepOut，用于设置能否使用方向键走焦出当前焦点组。
   *
   * @param { string } id - 设置当前容器组件的id标识。<br/>**说明：** <br/>单个
   *     [层级页面](docroot://ui/arkts-common-events-focus-event.md#基础概念)下，id标识全局唯一，不可重复。
   * @param { boolean } [isGroup] - 设置当前容器组件是否为焦点组。true表示容器组件为焦点组，false表示容器组件不是焦点组。默认值为false。<br/>**说明：** <br/>焦点组不可嵌套，不
   *     可重复配置。<br/> 焦点组不能和tabIndex混用。<br/>配置焦点组的目的是使得容器及容器内的元素可以按照焦点组规则走焦。焦点组走焦规则：<br/>1.焦点组容器内只能通过方向键走焦，tab键会使焦点跳出焦点组容
   *     器。<br/>2.通过方向键使焦点从焦点组容器外切换到焦点组容器内时，若焦点组容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由焦点组容器内上次获焦的组件获焦。
   * @param { boolean } [arrowStepOut] - 设置能否使用方向键走焦出当前焦点组。true表示可以使用方向键走焦出当前焦点组，false表示不能使用方向键走焦出当前焦点组。默认值为true。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T;

  /**
   * 设置当前组件在指定容器内获焦的优先级。需要配合[focusScopeId]{@link CommonMethod#focusScopeId(id: string, isGroup?: boolean)}一起使用。
   *
   * @param { string } scopeId
   * @param { FocusPriority } [priority] - 获焦优先级。<br/>**说明：** <br/>未设置priority时，默认为AUTO优先级。<br/>优先级对走焦以及获焦组件的影响：<br/>1.容
   *     器整体获焦（[层级页面](docroot://ui/arkts-common-events-focus-event.md#基础概念)切换/焦点切换到焦点组/容器组件使用requestFocus申请焦点）时，若容器内存在优先
   *     级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由容器内上次获焦的组件获焦。<br/>2.容器非整体获焦（非焦点组场景下使用tab键/方向键走焦）时，若容器为首次获焦，则容器内优先级最高的组件获焦，
   *     若容器非首次获焦，不考虑优先级按照位置顺序走焦。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  focusScopePriority(scopeId: string, priority?: FocusPriority): T;

  /**
   * 设置组件的属性动画。
   *
   * > **说明：**
   * >
   * > - 在单一页面上存在大量应用动效的组件时，可以使用[renderGroup]{@link CommonMethod#renderGroup(value: boolean)}方法来解决卡顿问题，从而提升动画性能。最佳实践请参考
   * > [动画使用指导-使用renderGroup](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fair-use-animation#section1223162922415)。
   * >
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { AnimateParam } value
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 设置组件的属性动画。
   *
   * > **说明：**
   * >
   * > - 在单一页面上存在大量应用动效的组件时，可以使用[renderGroup]{@link CommonMethod#renderGroup(value: boolean)}方法来解决卡顿问题，从而提升动画性能。最佳实践请参考
   * > [动画使用指导-使用renderGroup](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fair-use-animation#section1223162922415)。
   * >
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { AnimateParam } value
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 设置组件的属性动画。
   *
   * > **说明：**
   * >
   * > - 在单一页面上存在大量应用动效的组件时，可以使用[renderGroup]{@link CommonMethod#renderGroup(value: boolean)}方法来解决卡顿问题，从而提升动画性能。最佳实践请参考
   * > [动画使用指导-使用renderGroup](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fair-use-animation#section1223162922415)。
   * >
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { AnimateParam } value
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 设置组件的属性动画。
   *
   * > **说明：**
   * >
   * > - 在单一页面上存在大量应用动效的组件时，可以使用[renderGroup]{@link CommonMethod#renderGroup(value: boolean)}方法来解决卡顿问题，从而提升动画性能。最佳实践请参考
   * > [动画使用指导-使用renderGroup](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fair-use-animation#section1223162922415)。
   * >
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { AnimateParam } value
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  animation(value: AnimateParam): T;

  /**
   * 组件插入显示和删除隐藏的过渡效果。
   *
   * @param { TransitionOptions | TransitionEffect } value - 设置组件插入显示和删除隐藏的过渡效果。<br/>**说明：** <br/>详细描述见
   *     [TransitionOptions]{@link TransitionOptions}和[TransitionEffect]{@link TransitionEffect}对象说明。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  transition(value: TransitionOptions | TransitionEffect): T;

  /**
   * 组件插入显示和删除隐藏的过渡效果。同[transition]{@link CommonMethod#transition(value: TransitionOptions | TransitionEffect)}相比，增加了转场动
   * 画结束的回调。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { TransitionEffect } effect - 设置组件插入显示和删除隐藏的过渡效果。
   * @param { Optional<TransitionFinishCallback> } onFinish - 转场动画结束回调。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T;

  /**
   * 绑定手势。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { GestureType } gesture - 绑定的手势类型。
   * @param { GestureMask } mask - 事件响应设置。<br/>默认值：GestureMask.Normal
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * 绑定优先识别手势。
   * 
   * 1. 默认情况下，子组件优先识别通过gesture绑定的手势，当父组件配置priorityGesture时，父组件优先识别priorityGesture绑定的手势。
   * 2. 绑定长按手势时，设置触发长按的最短时间小的组件会优先响应，会忽略priorityGesture设置。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { GestureType } gesture - 绑定的手势对象。
   * @param { GestureMask } mask - 事件响应设置。<br/>默认值：GestureMask.Normal
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * 绑定可与子组件手势同时触发的手势。手势事件为非冒泡事件。父组件设置parallelGesture时，父子组件相同的手势事件都可以触发，实现类似冒泡效果。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { GestureType } gesture - 绑定的手势对象。
   * @param { GestureMask } mask - 事件响应设置。<br/>默认值：GestureMask.Normal
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * 为组件添加内容模糊效果。
   *
   * @param { number } value
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 为组件添加内容模糊效果。
   *
   * @param { number } value - 当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 为组件添加内容模糊效果。
   *
   * @param { number } value - 当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加内容模糊效果。
   *
   * @param { number } value - 当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。
   * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale:
   *     [0,0] [since 11]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  blur(value: number, options?: BlurOptions): T;

  /**
   * 为组件添加内容模糊效果。与[blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}相比，blurRadius参数新增了对undefined类型的支
   * 持。
   *
   * @param { Optional<number> } blurRadius - 当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>当blurRadius的值为undefined时，维持之前取
   *     值。
   * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale: [0,0]
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions): T;

  /**
   * 为组件添加内容模糊效果。与[blur<sup>18+</sup>]{@link CommonMethod#blur(blurRadius: Optional<number>, options?: BlurOptions)}相比，新
   * 增了sysOptions参数，即支持系统自适应调节参数。
   *
   * @param { Optional<number> } blurRadius - 当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>当blurRadius的值为undefined时，维持之前取
   *     值。
   * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale: [0,0]
   * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * 为组件添加内容线性渐变模糊效果。
   *
   * @param { number } value - 为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>取值范围：[0, 1000]
   * @param { LinearGradientBlurOptions } options - 设置线性渐变模糊效果。  <br/>线性渐变参数，包含模糊程度和模糊位置数组fractionStops，及渐变模糊方向
   *     direction。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  linearGradientBlur(value: number, options: LinearGradientBlurOptions): T;

  /**
   * 为组件添加内容线性渐变模糊效果。与
   * [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)}
   * 相比，新增了对undefined类型的支持。
   *
   * @param { Optional<number> } blurRadius - 为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>取值范围：[0, 1000]<br/>当blurRadius的值为undefined时，恢复
   *     为渐变模糊为0的效果。
   * @param { Optional<LinearGradientBlurOptions> } options - 设置线性渐变模糊效果。<br/>线性渐变参数，包含模糊程度和模糊位置数组fractionStops，及渐变模糊方向
   *     direction。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T;

  /**
   * 在当前组件由缩放大小或位移变化引起的运动过程中，增加动态模糊效果。
   *
   * > **说明：**
   * >
   * > - 不建议在组件内转场、共享元素转场、组件内隐式元素转场和粒子动画场景中使用该属性，否则会产生非预期效果。
   * >
   * > - 该属性需要在开始状态将motionBlur的参数radius设置为0，否则冷启动时会有非预期效果。
   * >
   * > - 该属性需要与动画的AnimateParam的onFinish参数配合使用，需要在运动模糊动画结束后将motionBlur的参数radius置为0，否则会产生非预期效果。
   * >
   * > - 在使用该属性过程中，不要在使用过程中频繁更改同一个组件的模糊半径，否则会产生非预期效果。比如示例中的动画，频繁点击会出现模糊效果偶尔失效的情况。
   * >
   * > - 运动模糊锚点坐标需要与动画缩放的锚点保持一致，否则会产生非预期效果。
   * >
   * > - 模糊半径建议设置1以内，否则会产生非预期效果。
   *
   * @param { MotionBlurOptions } value - 定义运动模糊参数。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  motionBlur(value: MotionBlurOptions):T;

  /**
   * 在当前组件由缩放大小或位移变化引起的运动过程中，增加动态模糊效果。与[motionBlur]{@link CommonMethod#motionBlur(value: MotionBlurOptions)}相比，
   * motionBlur参数新增了对undefined类型的支持。
   *
   * 1、不建议在组件内转场、共享元素转场、组件内隐式元素转场、粒子动画场景下使用该属性，否则会产生非预期效果。
   *
   * 2、该属性需要在开始状态将motionBlur的参数radius设置为0，否则冷启动时会有非预期效果。
   *
   * 3、该属性需要与动画的AnimateParam的onFinish参数配合使用，需要在运动模糊动画结束后将motionBlur的参数radius置为0，否则会产生非预期效果。
   *
   * 4、在使用该属性过程中，不要在使用过程中频繁更改同一个组件的模糊半径，否则会产生非预期效果。比如示例中的动画，频繁点击会出现模糊效果偶尔失效的情况。
   *
   * 5、运动模糊锚点坐标需要与动画缩放的锚点保持一致，否则会产生非预期效果。
   *
   * 6、模糊半径建议设置1以内，否则会产生非预期效果。
   *
   * @param { Optional<MotionBlurOptions> } motionBlur - 定义运动模糊参数。<br/>当motionBlur的值为undefined时，维持之前取值。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  motionBlur(motionBlur: Optional<MotionBlurOptions>):T;

  /**
   * 为组件添加高光效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。<br/>取值范
   *     围：[0, +∞)<br/>推荐取值范围：[0, 2]<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 为组件添加高光效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。<br/>取值范
   *     围：[0, +∞)<br/>推荐取值范围：[0, 2]<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 为组件添加高光效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。<br/>取值范
   *     围：[0, +∞)<br/>推荐取值范围：[0, 2]<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加高光效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。<br/>取值范
   *     围：[0, +∞)<br/>推荐取值范围：[0, 2]<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  brightness(value: number): T;

  /**
   * 为组件添加高光效果。不通过该接口设置时，默认无变化。与[brightness]{@link CommonMethod#brightness(value: number)}相比，brightness参数新增了对undefined类型
   * 的支持。
   *
   * @param { Optional<number> } brightness - 为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2
   *     时会变为全白。<br/>取值范围：
   *     [0, +∞)<br/>推荐取值范围：[0, 2]<br/>**说明：**<br/>设置小于0的值时，按值为0处理。<br/>当brightness的值为undefined时，恢复为亮度为1的高光效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  brightness(brightness: Optional<number>): T;

  /**
   * 为组件添加对比度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。<br/>推
   *     荐取值范围：[0, 10)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @FaAndStageModel
   * @since 7
   */
  /**
   * 为组件添加对比度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。<br/>推
   *     荐取值范围：[0, 10)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * 为组件添加对比度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。<br/>推
   *     荐取值范围：[0, 10)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加对比度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。<br/>推
   *     荐取值范围：[0, 10)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  contrast(value: number): T;

  /**
   * 为组件添加对比度效果。不通过该接口设置时，默认无变化。与[contrast]{@link CommonMethod#contrast(value: number)}相比，contrast参数新增了对undefined类型的支持。
   *
   * @param { Optional<number> } contrast - 为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，
   *     图像变为全灰。<br/>推荐取值范围：[0, 10)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。<br/>当contrast的值为undefined时，恢复为对比度为1的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  contrast(contrast: Optional<number>): T;

  /**
   * 为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - Grayscale conversion ratio of the component.
   * <br>If the value is **1.0**, the component is completely converted to grayscale.
   * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
   * the value applies a linear multiplier on the grayscale effect. The unit is percentage.
   * <br>Default value: **0.0**.
   * <br>Value range: [0.0, 1.0].
   * <p>**NOTE**:
   * <br>A value less than **0.0** evaluates to the value **0.0**.
   * <br>A value greater than **1.0** evaluates to the value **1.0**.
   * </p>
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - Grayscale conversion ratio of the component.
   * <br>If the value is **1.0**, the component is completely converted to grayscale.
   * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
   * the value applies a linear multiplier on the grayscale effect. The unit is percentage.
   * <br>Default value: **0.0**.
   * <br>Value range: [0.0, 1.0].
   * <p>**NOTE**:
   * <br>A value less than **0.0** evaluates to the value **0.0**.
   * <br>A value greater than **1.0** evaluates to the value **1.0**.
   * </p>
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - Grayscale conversion ratio of the component.
   * <br>If the value is **1.0**, the component is completely converted to grayscale.
   * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
   * the value applies a linear multiplier on the grayscale effect. The unit is percentage.
   * <br>Default value: **0.0**.
   * <br>Value range: [0.0, 1.0].
   * <p>**NOTE**:
   * <br>A value less than **0.0** evaluates to the value **0.0**.
   * <br>A value greater than **1.0** evaluates to the value **1.0**.
   * </p>
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加灰度效果。值定义为灰度转换的比例，入参1.0则完全转为灰度图像，入参0.0则图像无变化，入参在0.0和1.0之间时，效果呈线性变化。<br/>取值范围：
   *     [0.0, 1.0]<br/>**说明：**<br/>设置小于0.0的值时，按值为0.0处理，设置大于1.0的值时，按值为1.0处理。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  grayscale(value: number): T;

  /**
   * 为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。与[grayscale]{@link CommonMethod#grayscale(value: number)}相比，grayscale参数新
   * 增了对undefined类型的支持。
   *
   * @param { Optional<number> } grayscale - 为当前组件添加灰度效果。值定义为灰度转换的比例，入参1.0则完全转为灰度图像，入参0.0则图像无变化，入参在0.0和1.0之间时，效果呈线性变化。<
   *     br/>取值范围：[0.0, 1.0]<br/>**说明：**<br/>设置小于0.0的值时，按值为0.0处理，设置大于1.0的值时，按值为1.0处理。<br/>当grayscale的值为undefined时，取默认值0.
   *     0。恢复为无灰度效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  grayscale(grayscale: Optional<number>): T;

  /**
   * 为组件添加颜色叠加效果。
   *
   * @param { Color | string | Resource } value - 为当前组件添加颜色叠加效果，入参为叠加的颜色字符串。取值可为string类型，如'0x000000'，'rgba(0,0,0,1)'。
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 为组件添加颜色叠加效果。
   *
   * @param { Color | string | Resource } value - 为当前组件添加颜色叠加效果，入参为叠加的颜色字符串。取值可为string类型，如'0x000000'，'rgba(0,0,0,1)'。
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 为组件添加颜色叠加效果。
   *
   * @param { Color | string | Resource } value - 为当前组件添加颜色叠加效果，入参为叠加的颜色字符串。取值可为string类型，如'0x000000'，'rgba(0,0,0,1)'。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加颜色叠加效果。
   *
   * @param { Color | string | Resource } value - 为当前组件添加颜色叠加效果，入参为叠加的颜色字符串。取值可为string类型，如'0x000000'，'rgba(0,0,0,1)'。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * 为组件添加颜色叠加效果。与[colorBlend]{@link CommonMethod#colorBlend(value: Color | string | Resource)}相比，color参数新增了对undefined类型
   * 的支持。
   *
   * @param { Optional<Color | string | Resource> } color - 为当前组件添加颜色叠加效果，入参为叠加的颜色。取值可为string类型，如'0x000000'，'rgba(0,0,0,
   *     1)'。<br/>当color的值为undefined时，恢复为无颜色叠加的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  colorBlend(color: Optional<Color | string | Resource>): T;

  /**
   * 为组件添加饱和度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。<br/>推
   *     荐取值范围：[0, 50)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 为组件添加饱和度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。<br/>推
   *     荐取值范围：[0, 50)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 为组件添加饱和度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。<br/>推
   *     荐取值范围：[0, 50)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加饱和度效果。不通过该接口设置时，默认无变化。
   *
   * @param { number } value - 为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。<br/>推
   *     荐取值范围：[0, 50)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  saturate(value: number): T;

  /**
   * 为组件添加饱和度效果。不通过该接口设置时，默认无变化。与[saturate]{@link CommonMethod#saturate(value: number)}相比，saturate参数新增了对undefined类型的支持。
   *
   * @param { Optional<number> } saturate - 为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越
   *     大，饱和度越小。<br/>推荐取值范围：[0, 50)<br/>**说明：**<br/>设置小于0的值时，按值为0处理。<br/>当saturate的值为undefined时。恢复为饱和度为1的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  saturate(saturate: Optional<number>): T;

  /**
   * 将图像转换为深褐色。
   *
   * @param { number } value - 将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮
   *     且色彩更加偏黄/偏红，但不属于标准sepia效果。<br/>取值范围：[0, +∞)，推荐取值范围：(0, 1]。
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 将图像转换为深褐色。
   *
   * @param { number } value - 将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮
   *     且色彩更加偏黄/偏红，但不属于标准sepia效果。<br/>取值范围：[0, +∞)，推荐取值范围：(0, 1]。
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 将图像转换为深褐色。
   *
   * @param { number } value - 将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮
   *     且色彩更加偏黄/偏红，但不属于标准sepia效果。<br/>取值范围：[0, +∞)，推荐取值范围：(0, 1]。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 将图像转换为深褐色。
   *
   * @param { number } value - 将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮
   *     且色彩更加偏黄/偏红，但不属于标准sepia效果。<br/>取值范围：[0, +∞)，推荐取值范围：(0, 1]。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  sepia(value: number): T;

  /**
   * 将图像转换为深褐色。与[sepia]{@link CommonMethod#sepia(value: number)}相比，sepia参数新增了对undefined类型的支持。
   *
   * @param { Optional<number> } sepia - 将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比
   *     例，图像整体会变得更亮且色彩更加偏黄/偏红，但不属于标准sepia效果。<br/>当sepia的值为undefined时，恢复为图像无变化的效果。<br/> 取值范围：[0, +∞)，推荐取值范围：(0, 1]。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sepia(sepia: Optional<number>): T;

  /**
   * 反转输入的图像。
   *
   * @param { number } value
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 反转输入的图像。
   *
   * @param { number } value
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 反转输入的图像。
   *
   * @param { number } value
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 反转输入的图像。
   *
   * @param { number | InvertOptions } value - 反转输入的图像。<br/>入参对象为number时。入参为图像反转的比例，值为1时完全反转，值为0则图像无变化。<br/>取值范围：[0, 1]。<br/>设置小于0的值时，按值
   *     为0处理。设置大于1的值时，按值为1处理。<br/>入参对象为 InvertOptions时，对比背景颜色灰度值和阈值区间，背景颜色灰度值小于阈值区间时反色取high值，当背景颜色灰度值大于阈值区间时反色取low值，背景颜
   *     色灰度值在阈值区间内取值由high线性渐变到low。<br/>**说明：**<br/>number和InvertOptions两种形式的入参对应不同的反转效果。两种类型的入参切换时，不会清除之前已设置的反转效果，两种反转效
   *     果会同时存在，建议始终使用同一种形式的入参。 [since 7 - 10]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  invert(value: number | InvertOptions): T;

  /**
   * 反转输入的图像。与[invert]{@link CommonMethod#invert(value: number | InvertOptions)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<number | InvertOptions> } options - 反转输入的图像。<br/>入参对象为number时。入参为图像反转的比例，值为1时完全反转，值为0则图像无变化。<br/>
   *     取值范围：[0, 1]。<br/>设置小于0的值时，按值为0处理。设置大于1的值时，按值为1处理。<br/>入参对象为 InvertOptions时，对比背景颜色灰度值和阈值区间，背景颜色灰度值小于阈值区间时反色取high
   *     值，当背景颜色灰度值大于阈值区间时反色取low值，背景颜色灰度值在阈值区间内取值由high线性渐变到low。<br/>当options的值为undefined时，恢复为图像无变化的效果。<br/>**说明：**<br/>
   *     number和InvertOptions两种形式的入参对应不同的反转效果。两种类型的入参切换时，不会清除之前已设置的反转效果，两种反转效果会同时存在，建议始终使用同一种形式的入参。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  invert(options: Optional<number | InvertOptions>): T;

  /**
   * 根据背景进行智能反色并且带有模糊效果。
   *
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarEffect(): T;

  /**
   * 色相旋转效果。不通过该接口设置时，默认无变化。
   *
   * @param { number | string } value - 色相旋转效果，输入参数为旋转角度。<br/>取值范围：(-∞, +∞)<br/>**说明：**<br/>色调旋转360度会显示原始颜色。先将色调旋转180 度，
   *     然后再旋转-180度会显示原始颜色。数据类型为number时，值为90和'90deg'效果一致。
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 色相旋转效果。不通过该接口设置时，默认无变化。
   *
   * @param { number | string } value - 色相旋转效果，输入参数为旋转角度。<br/>取值范围：(-∞, +∞)<br/>**说明：**<br/>色调旋转360度会显示原始颜色。先将色调旋转180 度，
   *     然后再旋转-180度会显示原始颜色。数据类型为number时，值为90和'90deg'效果一致。
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 色相旋转效果。不通过该接口设置时，默认无变化。
   *
   * @param { number | string } value - 色相旋转效果，输入参数为旋转角度。<br/>取值范围：(-∞, +∞)<br/>**说明：**<br/>色调旋转360度会显示原始颜色。先将色调旋转180 度，
   *     然后再旋转-180度会显示原始颜色。数据类型为number时，值为90和'90deg'效果一致。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 色相旋转效果。不通过该接口设置时，默认无变化。
   *
   * @param { number | string } value - 色相旋转效果，输入参数为旋转角度。<br/>取值范围：(-∞, +∞)<br/>**说明：**<br/>色调旋转360度会显示原始颜色。先将色调旋转180 度，
   *     然后再旋转-180度会显示原始颜色。数据类型为number时，值为90和'90deg'效果一致。
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  hueRotate(value: number | string): T;

  /**
   * 色相旋转效果。不通过该接口设置时，默认无变化。与[hueRotate]{@link CommonMethod#hueRotate(value: number | string)}相比，rotation参数新增了对undefined
   * 类型的支持。
   *
   * @param { Optional<number | string> } rotation
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  hueRotate(rotation: Optional<number | string>): T;

  /**
   * 控件内部子节点的阴影进行同层绘制，同层元素阴影重叠。
   *
   * @param { boolean } value - 控件内部子节点的阴影是否进行同层绘制。<br/>默认值：false<br/> true：控件内部子节点的阴影进行同层绘制，子节点的阴影不会产生重叠覆盖效果。<br/>
   *     false：控件内部子节点的阴影不进行同层绘制，子节点的阴影重叠区域有覆盖效果。<br/>**说明：**<br/>1. 默认不开启，如果子节点的阴影半径较大，阴影有重叠区域，后绘制的子节点阴影会覆盖在之前绘制的子节点阴影之
   *     上。 当开启时，子节点的阴影将同时绘制，不会产生覆盖效果。<br/>2. 不推荐useShadowBatching嵌套使用，如果嵌套使用，只会对当前的子节点生效，无法递推。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 控件内部子节点的阴影进行同层绘制，同层元素阴影重叠。
   *
   * @param { boolean } value - 控件内部子节点的阴影是否进行同层绘制。<br/>默认值：false<br/> true：控件内部子节点的阴影进行同层绘制，子节点的阴影不会产生重叠覆盖效果。<br/>
   *     false：控件内部子节点的阴影不进行同层绘制，子节点的阴影重叠区域有覆盖效果。<br/>**说明：**<br/>1. 默认不开启，如果子节点的阴影半径较大，阴影有重叠区域，后绘制的子节点阴影会覆盖在之前绘制的子节点阴影之
   *     上。 当开启时，子节点的阴影将同时绘制，不会产生覆盖效果。<br/>2. 不推荐useShadowBatching嵌套使用，如果嵌套使用，只会对当前的子节点生效，无法递推。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  useShadowBatching(value: boolean): T;

  /**
   * 控件内部子节点的阴影进行同层绘制，同层元素阴影重叠。与[useShadowBatching<sup>11+</sup>]{@link CommonMethod#useShadowBatching(value: boolean)}相
   * 比，use参数新增了对undefined类型的支持。
   *
   * @param { Optional<boolean> } use - 控件内部子节点的阴影是否进行同层绘制。<br/>默认值：false<br/> true：控件内部子节点的阴影进行同层绘制，子节点的阴影不会产生重叠覆盖效果。<
   *     br/> false：控件内部子节点的阴影不进行同层绘制，子节点的阴影重叠区域有覆盖效果。<br/>**说明：**<br/>1. 默认不开启，如果子节点的阴影半径较大，阴影有重叠区域，后绘制的子节点阴影会覆盖在之前绘制的子
   *     节点阴影之上。 当开启时，子节点的阴影将同时绘制，不会产生覆盖效果。<br/>2. 不推荐useShadowBatching嵌套使用，如果嵌套使用，只会对当前的子节点生效，无法递推。<br/>当use的值为
   *     undefined时，恢复为不使用元素阴影重叠的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  useShadowBatching(use: Optional<boolean>): T;

  /**
   * 用于设置组件是否应用<!--Del-->父级[EffectComponent]{@link effect_component}或<!--DelEnd-->窗口定义的效果模板。
   *
   * @param { Optional<boolean> } useEffect - 控制组件是否应用<!--Del-->父级EffectComponent或<!--DelEnd-->窗口定义的效果模板。<br/>useEffect为true时表示应用<
   *     !--Del-->父级EffectComponent或<!--DelEnd-->窗口定义的效果模板。<br/>默认值：false
   * @param { EffectType } effectType - 设置组件应用<!--Del-->父级EffectComponent或<!--DelEnd-->窗口定义的效果模板。<br/>默认值：
   *     EffectType.DEFAULT
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  useEffect(useEffect: boolean, effectType: EffectType): T;

  /**
   * 用于设置组件是否应用<!--Del-->父级[EffectComponent]{@link effect_component}或<!--DelEnd-->窗口定义的效果模板。与
   * [useEffect<sup>14+</sup>]{@link CommonMethod#useEffect(useEffect: boolean, effectType: EffectType)}相比，useEffect参数新增
   * 了对undefined类型的支持。
   *
   * @param { Optional<boolean> } useEffect - 控制组件是否应用<!--Del-->父级EffectComponent或<!--DelEnd-->窗口定义的效果模板。<br/>useEffect为
   *     true时表示应用<!--Del-->父级EffectComponent或<!--DelEnd-->窗口定义的效果模板。<br/>默认值：false<br/>当useEffect的值为undefined时，维持之前取值。
   * @param { EffectType } [effectType] - 设置组件应用<!--Del-->父级EffectComponent或<!--DelEnd-->窗口定义的效果模板。<br/>默认值：
   *     EffectType.DEFAULT
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T;

  /**
   * 用于对背景模糊等特效进行绘制合并。
   *
   * @param { boolean } value - 控制组件是否继承特效绘制合并组件的特效属性参数，从而合并绘制特效。<br/>useEffect为true时子组件继承特效绘制合并组件的特效属性参数，为false时子组件不继承特
   *     效绘制合并组件的特效属性参数。<br/>默认值：false
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  useEffect(value: boolean): T;

  /**
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
   * 指定当前组件是否参与祖先组件UnionEffectContainer的融合效果
   *
   * @param { boolean | undefined } value - 组件是否参与融合效果祖先组件**UnionEffectContainer**.<br>值为**true**表示组件参与在祖先组件**UnionEffectContainer**的融合效果中，而**false**表示相反。 <br>值为**t
   *     rue**表示该组件参与祖先组件**UnionEffectContainer**的融合效果，**false**表示相反。
   * @param { GravityCenterOptions } [options] - 引力中心参数。 需要配合UnionMode.GRAVITY_UNION使用。
   * @returns { T } 返回组件属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): T;

  /**
   * 为组件添加背景模糊效果，支持自定义设置模糊半径和灰阶参数。
   *
   * @param { number } value - 为当前组件添加背景模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>取值范围：[0, +∞)<br/>默认值：0
   * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale:
   *     [0,0] [since 11]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  backdropBlur(value: number, options?: BlurOptions): T;

  /**
   * 为组件添加背景模糊效果，支持自定义设置模糊半径和灰阶参数。与[backdropBlur]{@link CommonMethod#backdropBlur(value: number, options?: BlurOptions)}
   * 相比，radius参数新增了对undefined类型的支持。
   *
   * @param { Optional<number> } radius - 为当前组件添加背景模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。当radius的值为undefined时，恢复为默认无模糊的背景。<br/>取
   *     值范围：[0, +∞)<br/>默认值：0<br/>
   * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale: [0,0]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions): T;

  /**
   * 为组件添加背景模糊效果，支持自定义设置模糊半径和灰阶参数。与
   * [backdropBlur<sup>18+</sup>]{@link CommonMethod#backdropBlur(radius: Optional<number>, options?: BlurOptions)}相比，新增
   * 了sysOptions参数，即支持系统自适应调节参数。
   *
   * @param { Optional<number> } radius - 为当前组件添加背景模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>当radius的值为undefined时，恢复为默认无模糊的背景。<
   *     br/>取值范围：[0, +∞)<br/>默认值：0
   * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale: [0,0]
   * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * 设置是否组成节点组。节点组表示当前组件和子组件组成的子树先在离屏画布中渲染，再与父组件融合绘制。设置为节点组后，系统会缓存绘制结果，提升性能。但如果节点组内的组件频繁更新，缓存失效，可能导致性能下降。此外，设置为节点组后，当前组件
   * 的不透明度不为1时，绘制效果可能有差异。
   *
   * 不设置该属性时，默认不组成节点组。
   *
   * @param { boolean } value - 设置当前组件和子组件是否组成节点组。<br/> false表示不组成节点组，不进行离屏渲染直接绘制。<br/> true表示当前组件和子组件组成节点组，进行离屏渲染后再与父组件
   *     融合绘制。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 设置是否组成节点组。节点组表示当前组件和子组件组成的子树先在离屏画布中渲染，再与父组件融合绘制。设置为节点组后，系统会缓存绘制结果，提升性能。但如果节点组内的组件频繁更新，缓存失效，可能导致性能下降。此外，设置为节点组后，当前组件
   * 的不透明度不为1时，绘制效果可能有差异。
   *
   * 不设置该属性时，默认不组成节点组。
   *
   * @param { boolean } value - 设置当前组件和子组件是否组成节点组。<br/> false表示不组成节点组，不进行离屏渲染直接绘制。<br/> true表示当前组件和子组件组成节点组，进行离屏渲染后再与父组件
   *     融合绘制。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * 设置是否组成节点组。节点组表示当前组件和子组件组成的子树先在离屏画布中渲染，再与父组件融合绘制。设置为节点组后，系统会缓存绘制结果，提升性能。但如果节点组内的组件频繁更新，缓存失效，可能导致性能下降。此外，设置为节点组后，当前组件
   * 的不透明度不为1时，绘制效果可能有差异。
   *
   * 不设置该属性时，默认不组成节点组。
   *
   * @param { boolean } value - 设置当前组件和子组件是否组成节点组。<br/> false表示不组成节点组，不进行离屏渲染直接绘制。<br/> true表示当前组件和子组件组成节点组，进行离屏渲染后再与父组件
   *     融合绘制。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  renderGroup(value: boolean): T;

  /**
   * 设置是否组成节点组。节点组表示当前组件和子组件组成的子树先在离屏画布中渲染，再与父组件融合绘制。设置为节点组后，系统会缓存绘制结果，提升性能。但如果节点组内的组件频繁更新，缓存失效，可能导致性能下降。此外，设置为节点组后，当前组件
   * 的不透明度不为1时，绘制效果可能有差异。
   *
   * 与[renderGroup<sup>10+</sup>]{@link CommonMethod#renderGroup(value: boolean)}相比，isGroup参数新增了对undefined类型的支持。
   *
   * 不设置该属性时，默认不组成节点组。
   *
   * @param { Optional<boolean> } isGroup - 设置当前组件和子组件是否组成节点组。<br/> false表示不组成节点组，不进行离屏渲染直接绘制。<br/> true表示当前组件和子组件组成节点组，
   *     进行离屏渲染后再与父组件融合绘制。<br/>当isGroup的值为undefined时，按照不组成节点组处理。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  renderGroup(isGroup: Optional<boolean>): T;

  /**
   * 设置当前组件和其子组件是否从祖先组件的节点组中剔除。需搭配祖先组件设置节点组[renderGroup]{@link CommonMethod#renderGroup(isGroup: Optional<boolean>)}属性使
   * 用，单独使用无效果。
   *
   * 从节点组剔除后，当前组件和子组件不再影响祖先组件的离屏画布，不会引起节点组的缓存失效，从而达到复用节点组缓存的目的。如果当前组件的显示区域只占节点组绘制内容显示区域的一部分，且当前组件及子组件的显示效果频繁更新，设置
   * excludeFromRenderGroup属性有助于绘制性能优化。
   *
   * 不设置该属性时，默认当前组件和其子组件不从祖先组件的节点组中剔除。
   *
   * > **说明：**
   * >
   * > 设置excludeFromRenderGroup为true的组件及其子组件的绘制内容不能超过该组件本身的边界范围，否则会出现显示内容被裁剪的问题。例如当子组件通过
   * > [translate]{@link CommonMethod#translate(value: TranslateOptions)}或
   * > [scale]{@link CommonMethod#scale(value: ScaleOptions)}等属性导致子组件超出当前组件范围，或当前组件上有
   * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}、
   * > [pixelStretchEffect]{@link CommonMethod#pixelStretchEffect(options: PixelStretchEffectOptions)}等属性导致当前组件的绘制内容超出组件
   * > 边界时，可能出现显示内容被裁剪的问题。此类场景不应设置excludeFromRenderGroup属性为true。
   *
   * @param { boolean | undefined } exclude - 设置当前组件及其子组件是否从祖先组件的节点组中剔除。<br/>true表示当前组件及其子组件从祖先组件的节点组中剔除，不属于祖先组件的节点组；
   *     false表示当前组件及其子组件归属于祖先组件的节点组。<br/>当exclude的值为undefined时，按false处理。
   * @returns { T }
   返回当前组件。
   * @systemapi
   * @stagemodelonly
   * @since 22 dynamic
   */
  excludeFromRenderGroup(exclude: boolean | undefined): T;

  /**
   * 设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } value - 设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。当前控件的不透明度不为1时绘制效果可能有差异。<br/>默认值：false <br/> true时
   *     离屏渲染绘制后重复绘制缓存，false时离屏渲染绘制后不重复绘制缓存。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  freeze(value: boolean): T;

  /**
   * 设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。与[freeze]{@link CommonMethod#freeze(value: boolean)}相比，freeze参数新增了对undefined
   * 类型的支持。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<boolean> } freeze - 设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。当前控件的不透明度不为1时绘制效果可能有差异。<br/>默认值：false<
   *     br/> true时离屏渲染绘制后重复绘制缓存，false时离屏渲染绘制后不重复绘制缓存。<br/>当freeze的值为undefined时，维持之前取值。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  freeze(freeze: Optional<boolean>): T;

  /**
   * 设置组件平移。
   *
   * @param { TranslateOptions } value - 可使组件在以组件左上角为坐标原点的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中进行移动（坐标系如下图所示）。其
   *     中，x，y，z的值分别表示在对应轴移动的距离，值为正时表示向对应轴的正向移动，值为负时表示向对应轴的反向移动。移动距离支持数字和字符串（比如'10px'，'10%'）两种类型。<br/>默认值:<br/>{<br/>x: 
   *     0,<br/>y: 0,<br/>z: 0<br/>}<br/>单位：vp<br/>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br/>**说明：**<br/>z轴方向移动时由于观察点位置不
   *     变，z的值接近观察点组件会有放大效果，远离则缩小。<br/>!
   *     [coordinateNode](docroot://reference/apis-arkui/arkui-ts/figures/coordinateNote.png)
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  translate(value: TranslateOptions): T;

  /**
   * 设置组件平移。与[translate]{@link CommonMethod#translate(value: TranslateOptions)}相比，translate参数新增了对undefined类型的支持。
   *
   * @param { Optional<TranslateOptions> } translate - 可使组件在以组件左上角为坐标原点的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中进行
   *     移动（坐标系如下图所示）。其中，x，y，z的值分别表示在对应轴移动的距离，值为正时表示向对应轴的正向移动，值为负时表示向对应轴的反向移动。移动距离支持数字和字符串（比如'10px'，'10%'）两种类型。<br/>默认值:
   *     <br/>{<br/>x: 0,<br/>y: 0,<br/>z: 0<br/>}<br/>单位：vp<br/>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br/>**说明：**<br/>z轴方向移动时由于观察点位置不
   *     变，z的值接近观察点组件会有放大效果，远离则缩小。<br/>!
   *     [coordinateNode](docroot://reference/apis-arkui/arkui-ts/figures/coordinateNote.png)<br/>当translate的值为undefined
   *     时，恢复为无平移效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  translate(translate: Optional<TranslateOptions>): T;

  /**
   * 设置组件缩放。
   *
   * @param { ScaleOptions } value - 可以分别设置X轴、Y轴、Z轴的缩放比例，默认值为1，同时可以通过centerX和centerY设置缩放的中心点。<br/>默认值:<br/>{<br/>x: 1,<
   *     br/>y: 1,<br/>z: 1,<br/>centerX:'50%',<br/>centerY:'50%'<br/>}
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scale(value: ScaleOptions): T;

  /**
   * 设置组件缩放。与[scale]{@link CommonMethod#scale(value: ScaleOptions)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<ScaleOptions> } options - 可以分别设置X轴、Y轴、Z轴的缩放比例，默认值为1，同时可以通过centerX和centerY设置缩放的中心点。<br/>默认值:<br/>{
   *     <br/>x: 1,<br/>y: 1,<br/>z: 1,<br/>centerX:'50%',<br/>centerY:'50%'<br/>}<br/>当options的值为undefined时，恢复为无缩放效果。
   * @returns { T } 返回当前组件。
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
   * 设置组件旋转。
   *
   * @param { RotateOptions } value - 可使组件在以组件左上角为坐标原点的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中进行旋转（坐标系如下图所示）。其中，(
   *     x, y, z）指定一个矢量，作为旋转轴。<br/>旋转轴和旋转中心点都基于坐标系设定，组件发生位移时，坐标系不会随之移动。<br/>默认值: 在x、y、z都不指定时，x、y、z的默认值分别为0、0、1。指定了x、y、z任
   *     何一个值时，x、y、z中未指定的值默认为0。<br/>{<br/>centerX: '50%',<br/>centerY: '50%',<br/>centerZ: 0,<br/>perspective: 0<br/>}<
   *     br/>单位：vp<br/>![coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rotate(value: RotateOptions): T;

  /**
   * 设置组件旋转。与[rotate]{@link CommonMethod#rotate(value: RotateOptions)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<RotateOptions> } options - 可使组件在以组件左上角为坐标原点的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中进行旋转（坐标
   *     系如下图所示）。其中，(x, y, z）指定一个矢量，作为旋转轴。<br/>旋转轴和旋转中心点都基于坐标系设定，组件发生位移时，坐标系不会随之移动。<br/>默认值: 在x、y、z都不指定时，x、y、z的默认值分别为0、0
   *     、1。指定了x、y、z任何一个值时，x、y、z中未指定的值默认为0。<br/>{<br/>centerX: '50%',<br/>centerY: '50%',<br/>centerZ: 0,<br/>
   *     perspective: 0<br/>}<br/>单位：vp<br/>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)。<br/>当options的值为undefined时，恢复为无旋
   *     转效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  rotate(options: Optional<RotateOptions>): T;

  /**
   * 设置组件旋转效果。与[rotate]{@link CommonMethod#rotate(options: Optional<RotateOptions>)}相比，options参数新增了对RotateAngleOptions类型
   * 的支持。
   *
   * @param { Optional<RotateOptions | RotateAngleOptions> } options - RotateOptions可使组件在以组件左上角为坐标原点的坐标系中进行旋转（坐标系如下图所示）。
   *     其中，(x, y, z）指定一个矢量，作为旋转轴。<br/>旋转轴和旋转中心点都基于[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)设定，组件发生位移时，坐标系不会随之移动。<br
   *     />默认值：在x、y、z都不指定时，x、y、z的默认值分别为0、0、1。指定了x、y、z任何一个值时，x、y、z中未指定的值默认为0。<br/>{<br/>centerX: '50%',<br/>centerY: '50%
   *     ',<br/>centerZ: 0,<br/>perspective: 0<br/>}<br/>RotateAngleOptions可使组件在以组件左上角为坐标原点的坐标系中进行旋转（坐标系如下图所示）。其中，(
   *     angleX, angleY, angleZ）指定三个轴方向上的旋转角。<br/>默认值：<br/>{<br/>angleX:0,<br />angleY:0,<br />angleZ:0,<br />centerX: '
   *     50%',<br/>centerY: '50%',<br/>centerZ: 0,<br/>perspective: 0<br/>}<br/>!
   *     [coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br/>当options的值为undefined时，恢复为无旋转
   *     效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  rotate(options: Optional<RotateOptions | RotateAngleOptions>): T;

  /**
   * 可用于显示二维变换时的矩阵变换。包含三维变换时应使用[transform3D]{@link CommonMethod#transform3D}接口。
   *
   * @param { object } value - 设置当前组件的变换矩阵。object当前仅支持[Matrix4Transit]{@link @ohos.matrix4:matrix4.Matrix4Transit}矩阵对象类
   *     型。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  transform(value: object): T;

  /**
   * 可用于显示二维变换时的矩阵变换。包含三维变换时应使用[transform3D]{@link CommonMethod#transform3D}接口。与
   * [transform]{@link CommonMethod#transform(value: object)}相比，transform<sup>18+</sup>参数新增了对undefined类型的支持。
   *
   * @param { Optional<object> } transform - 设置当前组件的变换矩阵。object当前仅支持
   *     [Matrix4Transit]{@link @ohos.matrix4:matrix4.Matrix4Transit}矩阵对象类型。<br/>当transform的值为undefined时，恢复为单位矩阵的效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transform(transform: Optional<object>): T;

  /**
   * 设置组件的三维变换矩阵。当涉及包含透视效果的三维变换时，transform接口显示效果可能有误，推荐使用transform3D接口。
   *
   * @param { Optional<Matrix4Transit> } transform - 三维变换矩阵。<br/>当transform的值为undefined时，恢复为单位矩阵的效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  transform3D(transform: Optional<Matrix4Transit>): T;

  /**
   * 组件挂载后触发此回调。
   * 
   * > **说明：**
   * >
   * > 回调的调用时机有可能发生在组件布局渲染后。
   *
   * @param { function } event - onAppear事件的回调函数，表示组件已挂载显示。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onAppear(event: () => void): T;

  /**
   * 组件从组件树卸载时触发此回调。
   *
   * @param { function } event - onDisAppear事件的回调函数，表示组件已卸载消失。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDisAppear(event: () => void): T;

  /**
   * 组件挂载到组件树时触发此回调。由于以下说明中的限制，建议使用[onAppear]{@link CommonMethod#onAppear}替代此接口。
   * 
   * > **说明：**
   * >
   * > - 回调在组件布局渲染前调用。
   * >
   * > - 不允许在回调中对组件树进行变更，例如启动动画或使用if-else变更组件树结构。
   *
   * @param { Callback<void> } callback - onAttach事件的回调函数，表示组件已经挂载至组件树。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAttach(callback: Callback<void>): T;

  /**
   * 组件从组件树卸载时触发此回调。建议使用[onDisAppear]{@link CommonMethod#onDisAppear}替代此接口。
   *
   * @param { Callback<void> } callback - onDetach事件的回调函数，表示组件已经从组件树卸载。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetach(callback: Callback<void>): T;

  /**
   * 组件区域变化时触发该回调。仅会响应由布局变化所导致的组件大小、位置发生变化时的回调。
   * 
   * 由绘制变化所导致的渲染属性变化不会响应回调，如[translate]{@link CommonMethod#translate(value: TranslateOptions)}、
   * [offset]{@link CommonMethod#offset}、[markAnchor]{@link CommonMethod#markAnchor}、
   * [scale]{@link CommonMethod#scale(value: ScaleOptions)}、[transform]{@link CommonMethod#transform(value: object)}。若组件
   * 自身位置由绘制变化决定也不会响应回调，如[bindSheet]{@link CommonMethod#bindSheet}。
   * 
   * > **说明：**
   * >
   * > 当组件同时绑定onAreaChange事件和[position]{@link CommonMethod#position}属性时，onAreaChange事件响应设置
   * > [Position]{@link Position}类型的position属性变化，不响应设置[Edges]{@link Edges}和[LocalizedEdges]{@link LocalizedEdges}
   * > 类型的position属性变化。
   *
   * @param { function } event - 返回目标元素位置信息变化情况，oldValue为目标元素变化之前的宽高以及目标元素相对父元素和页面左上角的坐标位置。newValue为目标元素变化之后的宽高以及目标元素相对父
   *     元素和页面左上角的坐标位置。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;

  /**
   * 组件区域变化时触发该回调，可通过[AreaChangeOptions]{@link AreaChangeOptions}中的expectedUpdateInterval设置触发回调的间隔。仅会响应由布局变化所导致的组件大小、位置发
   * 生变化时的回调。
   *
   * @param { AreaChangeCallback } event - onAreaChange事件的回调函数。组件显示的尺寸、位置发生变化时触发该回调。
   * @param { AreaChangeOptions } [options] - 区域变化相关的参数。缺省时，expectedUpdateInterval时间间隔按照0处理。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAreaChange(event: AreaChangeCallback, options?: AreaChangeOptions): T;

  /**
   * 控制组件的显示或隐藏。当未设置visibility时，组件默认为显示。
   *
   * @param { Visibility } value - 控制当前组件显示或隐藏。根据具体场景需要可使用
   *     [条件渲染](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)代替。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  visibility(value: Visibility): T;

  /**
   * 设置组件在父容器的剩余空间所占比例。
   *
   * @param { number } value - 设置父容器在主轴方向上的剩余空间分配给此属性所在组件的比例。<br/>取值范围：[0, +∞)<br/>默认值：0<br/>设置异常值时，该属性为默认值。
   *     <br>取值应为≥0的整数。
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
   * 设置父容器压缩尺寸分配给此属性所在组件的比例。当父容器为Column、Row时，需设置主轴方向的尺寸。
   *
   * 使用[getInspectorByKey](ts-universal-attributes-component-id.md#getinspectorbykey9)获取flexShrink属性时，如果该节点未设置flexShrink
   * 属性，默认返回1。
   *
   * @param { number } value - 设置父容器压缩尺寸分配给此属性所在组件的比例。
   *     <br>取值限定为整数，父容器为 [Column]{@link Column} 、[Row]{@link Row}时， 取值范围[0,+∞).
   *     <br/>
   *     父容器为[Flex]{@link Flex}时，默认值：1
   *     <br/>[constraintSize]{@link constraintSize}限制组件的尺寸范围.
   *     Column和Row即使设置了constraintSize，在未设置主轴尺寸width/height/size时仍遵守默认布局行为，在主轴上自适应子组件尺寸，此时flexShrink不生效.<br/>设置异常值时，该属性为
   *     默认值。
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
   * 设置组件的基准尺寸。
   *
   * @param { number | string } value - 设置组件在父容器主轴方向上的基准尺寸。<br/>默认值：'auto'（表示组件在主轴方向上的基准尺寸为组件原本的大小）。<br/>string类型可选值：可以转化为数字的字符串（如'10'）或带长度单位的字符串（如'10px'）或
   *     'auto'，不允许设置百分比字符串。<br/>number：取值范围(0,+∞)，单位为vp。<br/>异常值：默认为'auto'。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  flexBasis(value: number | string): T;

  /**
   * 子组件在父容器交叉轴的对齐格式。
   *
   * @param { ItemAlign } value - 子组件在父容器交叉轴的对齐格式，会覆盖([Flex]{@link Flex}, [Column]{@link Column}, [Row]{@link Row}, or
   *     [GridRow]{@link GridRow})布局容器中的alignItems设置。<br/>[GridCol]{@link
   *     GridCol}可以绑定alignSelf属性来改变它自身在交叉轴方向上的布局。<br/>默认值：ItemAlign.Auto
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignSelf(value: ItemAlign): T;

  /**
   * 单独设置Stack组件中子组件的对齐规则，仅当父组件为Stack时生效。与align属性同时使用时，layoutGravity优先级更高，支持[attributeModifier]{@link
   * attributeModifier}动态设置属性方法。
   *
   * @param { LocalizedAlignment } alignment - 指定设置在Stack组件中子组件的对齐规则。<br/>默认值：LocalizedAlignment.CENTER
   *     。说明：当传入异常值时，按默认值处理。
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
   * 设置当前组件在布局容器中显示的优先级。
   *
   * @param { number } value - 设置当前组件在布局容器中显示的优先级。<br/>默认值：1<br/>**说明：**<br/>仅在[Row]{@link Row}/[Column]{@link
   *     Column}/[Flex(单行)]{@link Flex}容器组件中生效。<br/> 小数点后的数字不作优先级区分，即区间为[x, x +
   *     1)内的数字视为相同优先级。例如：1.0与1.9为同一优先级。<br/>子组件的displayPriority均不大于1时，优先级没有区别。<br/>当子组件的displayPriority大于1时，displayPriority
   *     数值越大，优先级越高。若父容器空间不足，隐藏低优先级子组件。若某一优先级的子组件被隐藏，则优先级更低的子组件也都被隐藏
   *     <br>取值限定为整数。
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
   * 设置组件的堆叠顺序。
   *
   * @param { number } value - 同一容器中兄弟组件显示层级关系。zIndex值越大，显示层级越高，即zIndex值大的组件会覆盖在zIndex值小的组件上方。当不涉及新增或减少兄弟节点，动态改变zIndex时会
   *     在zIndex改变前层级顺序的基础上进行稳定排序。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  zIndex(value: number): T;

  /**
   * 设置共享元素转场动效。
   *
   * @param { string } id - 两个页面中id值相同且不为空字符串的组件即为共享元素，在页面转场时可显示共享元素转场动效。
   * @param { sharedTransitionOptions } options - 共享元素转场动画参数。不设置时使用默认转场动画参数。各参数具体默认值参考
   *     [sharedTransitionOptions]{@link sharedTransitionOptions}。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): T;

  /**
   * 设置当前组件绘制区域内主轴方向上的布局，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
   *
   * @param { Direction } value - 设置当前组件绘制区域内主轴方向上的布局。<br/>属性配置为auto的时候，按照系统语言方向进行布局。<br/>该属性在Column组件上不生效。<br/>默认值：Direction.Auto
   *     <br/>direction取undefined或null时按默认值处理。
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
   * 设置当前组件绘制区域内的子组件的对齐方式，支持 [attributeModifier]{@link attributeModifier}动态设置属性方法。
   *
   * @param { Alignment } value - 设置当前组件绘制区域内的子组件的对齐方式。<br/>只在[Stack]{@link Stack},
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
   *     [NodeContainer]{@link
   *     NodeContainer}中生效，其中和文本相关的组件Marquee、Text、TextArea、TextInput、RichEditor、Hyperlink的align结果参考[textAlign](ts-basic-
   *     components-text.md#textalign)。<br/>不支持textAlign属性的组件则无法设置水平方向的文字对齐。<br/>默认值：Alignment.Center<br/>**说明：**
   *     <br/>该属性在[Stack](ts-container-stack.md)组件上支持镜像能力，在其他组件上不支持镜像能力。<br/>在Stack中该属性与alignContent效果一致，只能设置子组件在当前组件内的对
   *     齐方式。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  align(value: Alignment): T;

  /**
   * 设置当前组件绘制区域内的子组件的对齐方式，增加支持镜像的能力，支持[attributeModifier]{@link attributeModifier}。
   *
   * @param { Alignment | LocalizedAlignment } alignment - 设置当前组件绘制区域内的子组件的对齐方式，增加支持镜像的能力。<br/>[LocalizedAlignment]{@link LocalizedAlignment}只在[Shape]{@link Shape},
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
   *     [ListItem]{@link
   *     ListItem}中有效果。<br/>其中，除ListItem与Alignment的效果保持一致以外，其他组件镜像切换均生效；其他设置LocalizedAlignment无效果的组件按其默认效果显示。<br/>默认值：Al
   *     ignment.Center、LocalizedAlignment.CENTER<br/>设置异常值按默认值处理，效果为居中显示。<br/>**说明：**
   *     <br/>Alignment类型不支持镜像能力；LocalizedAlignment类型支持镜像能力，选择LocalizedAlignment中的枚举值，根据direction或系统语言方向的改变实现镜像切换。其中dire
   *     ction的优先级高于系统语言方向，当设置direction且不为auto时，LocalizedAlignment的镜像按照direction进行布局；当设置direction为auto或未设置时，LocalizedAli
   *     gnment的镜像按照系统语言方向进行布局。
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
   * 绝对定位，确定子组件相对父组件内容区的位置，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
   *
   * > **说明：**
   * >
   * > - position对位置的影响作用在组件的尺寸测量完成之后。
   * > - 当父组件为[Row]{@link Row}、[Column]{@link Column}或[Flex]{@link
   * Flex}时，设置position的子组件不占位。在上述场景中，如果父组件包含的所有子组件均设置了position，此时父组件尺寸无法通过其他子组件确定，将基于尺寸(0, 0)进行布局测算。
   * > -
   * Position类型基于父组件内容区左上角确定位置；Edges类型基于父组件内容区四边确定位置，top/left/right/bottom分别为组件各边距离父组件内容区相应边的边距，通过边距来确定组件相对于父组件内容区的位置；Lo
   * calizedEdges类型基于父组件内容区四边确定位置，支持镜像模式。
   * > - 本属性适用于置顶显示、悬浮按钮等组件在父组件中位置固定的场景。
   * > - 本属性不支持在宽高为零的布局组件上设置。
   * > - 当父组件为[RelativeContainer]{@link RelativeContainer}，且子组件设置了alignRules属性时，子组件的position属性不生效。
   * > - 若本属性所在组件的父组件未设置固定宽高，那么本组件会参考第一个设置固定宽高的祖先组件进行绝对定位。
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
   * 设置元素在位置定位时的锚点，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
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
   * 相对偏移，组件相对原本的布局位置进行偏移。和position一起使用时，position生效，offset不生效，支持[attributeModifier]{@link attributeModifier}动态设置属性方法。
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
   * 设置组件是否可交互。当未设置enabled时，组件默认可交互。
   *
   * @param { boolean } value - 值为true表示组件可交互，响应点击等操作。<br/>值为false表示组件不可交互，不响应点击等操作。
   * @returns { T } 返回当前组件。
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
   * 指定设置在相对布局组件中子组件的对齐规则，仅当父组件为[RelativeContainer]{@link RelativeContainer}时生效，支持[attributeModifier]{@link
   * attributeModifier}动态设置属性方法。
   *
   * @param { AlignRuleOption } value - 指定设置在相对布局组件中子组件的对齐规则。
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  alignRules(value: AlignRuleOption): T;

  /**
   * 指定设置在相对布局组件中子组件的对齐规则，仅当父组件为[RelativeContainer]{@link
   * RelativeContainer}时生效。该方法水平方向上以start和end分别替代原方法的left和right，以便在RTL模式下能镜像显示，建议使用该方法指定设置在相对布局组件中子组件的对齐规则，支持
   * [attributeModifier]{@link attributeModifier}动态设置属性方法。
   *
   * @param { LocalizedAlignRuleOptions } alignRule - 指定设置在相对布局组件中子组件的对齐规则。
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
   * 指定以该组件为链头所构成的链的参数，仅当父组件为RelativeContainer时生效。链头指满足成链规则时链的第一个组件（水平方向从左边起始，镜像语言下从右边起始；竖直方向从上边起始）。
   *
   * @param { Axis } direction - 链的方向。
   * @param { ChainStyle } style - 链的样式。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  chainMode(direction: Axis, style: ChainStyle): T;

  /**
   * 指定当前组件的宽高比，aspectRatio=width/height。
   * - 仅设置width、aspectRatio时，height=width/aspectRatio。
   * - 仅设置height、aspectRatio时，width=height*aspectRatio。
   * - 同时设置width、height和aspectRatio时，height不生效，height=width/aspectRatio。
   *
   * 设置aspectRatio属性后，组件宽高会受父组件内容区大小限制，[constraintSize]{@link constraintSize}的优先级高于aspectRatio。
   *
   * @param { number } value - 指定当前组件的宽高比。<br/>API version 9及以前，默认值为：1.0。<br/>API version
   *     10：无默认值。<br/>**说明：**<br/>该属性在不设置值或者设置非法值(小于等于0)时不生效。<br/>例如，Row只设置宽度且没有子组件，aspectRatio不设置值或者设置成负数时，此时Row高度为0。
   *     <br>取值限定为整数。
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
   * 设置当前组件的点击回弹效果。
   *
   * @param { ClickEffect | null } value - 设置当前组件点击回弹效果。<br/>**说明：**<br/>可通过null取消点击回弹效果。<br/>不建议在组件大小动态变化的场景中使用该功能。<br/
   *     >当组件无法触发通用事件时，不支持该属性。<br/>回弹触发缩放后可能造成触摸点不在控件上，控件上无法响应手势事件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clickEffect(value: ClickEffect | null): T;

  /**
   * 设置当前组件的点击回弹效果。与[clickEffect]{@link CommonMethod#clickEffect(value: ClickEffect | null)}相比，新增了对undefined类型的支持。
   *
   * @param { Optional<ClickEffect | null> } effect - 设置当前组件的点击回弹效果。<br/>**说明：**<br/>可通过undefined或者null取消点击回弹效果。<br/>不建议
   *     在组件大小动态变化的场景中使用该功能。<br/>当组件无法触发通用事件时，不支持该属性。<br/>回弹触发缩放后可能造成触摸点不在控件上，控件上无法响应手势事件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  clickEffect(effect: Optional<ClickEffect | null>): T;

  /**
   * 设置组件是否启用默认点击音效。是否能够发音依赖设备声音相关的设置，如静音模式下不会播放音效。
   *
   * @param { boolean | undefined } enabled - 设置此组件是否启用默认点击音效。
   *    true表示启用默认点击音效；false表示禁用默认点击音效。值为undefined时，启用默认点击音效。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  enableClickSoundEffect(enabled: boolean | undefined): T;

  /**
   * 在手势拖拽场景中，在可拖拽的组件上长按时间超过500ms，然后手指移动距离大于10vp时触发此回调；在鼠标拖拽场景中，鼠标左键在可拖拽的组件上按下并移动超过1vp时，即可触发此回调。
   * 
   * 针对默认支持拖拽能力的组件，如果开发者设置了onDragStart，优先执行onDragStart，并根据执行情况决定是否使用系统默认的拖拽能力，具体规则为：
   * 
   * - 如果开发者返回了自定义预览图，则不再使用系统默认的拖拽预览图；
   * - 如果开发者设置了拖拽数据，则不再使用系统默认填充的拖拽数据。
   * 
   * 文本类组件[Text]{@link text}、[Search]{@link search}、[TextInput]{@link text_input}、[TextArea]{@link text_area}、
   * [RichEditor]{@link rich_editor}对选中的文本内容进行拖拽时，不支持自定义预览图。当onDragStart与菜单预览一起使用或使用了默认支持拖拽能力的组件时，预览及菜单项上的自定义内容不支持拖拽。
   * 
   * > **说明：**
   * >
   * > 从API version 13开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } event - 回调函数。<br/> **说明：**<br/> event参数为拖拽事件的信息。<br/> extraParams参数为拖拽事件的额外信息，需要解析为JSON格式。
   *     <br/>CustomBuilder为拖拽过程中显示的组件信息，不支持全局builder。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T;

  /**
   * 拖拽进入组件范围内时，触发回调，当监听了[onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}事件
   * 时，此事件才有效。
   *
   * @param { function } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * 拖拽在组件范围内移动时，触发回调，当监听了[onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}事件
   * 时，此事件才有效。
   *
   * @param { function } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragMove(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * 拖拽离开组件范围内时，触发回调，当监听了[onDrop]{@link CommonMethod#onDrop(event: (event: DragEvent, extraParams?: string) => void)}事件
   * 时，此事件才有效。
   *
   * @param { function } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * 绑定此事件的组件可作为释放目标。当在本组件范围内停止拖放行为时，将触发回调。如果开发者未在onDrop中主动调用event.setResult()来设置拖拽接收的结果，对于系统支持的默认可拖入组件，处理结果将以系统实际处理的数据为
   * 准。对于其他组件，系统将默认视为数据接收成功。
   *
   * @param { function } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要解析为JSON格式。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDrop(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * 绑定此事件的组件可作为拖拽释放目标，当在本组件范围内停止拖拽行为时，触发回调。如果开发者没有在onDrop中主动调用event.[setResult]{@link DragEvent#setResult}()设置拖拽接收的结果，若
   * 拖拽组件为系统支持默认拖入的组件，以系统实际处理数据结果为准，其它组件则系统按照数据接收成功处理。
   *
   * @param { OnDragEventCallback } eventCallback - 回调函数。
   * @param { DropOptions } [dropOptions] - 落入过程的参数。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T;

  /**
   * 绑定此事件的组件触发的拖拽结束后，触发回调。
   *
   * @param { function } event - 回调函数。<br/>**说明：**<br/> event为拖拽事件信息，在onDragEnd调用中不包括拖拽点坐标。<br/> extraParams为拖拽事件额外信息，需要
   *     解析为JSON格式。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * 设置该组件上允许落入的数据类型。如果未设置allowDrop，组件将默认接受所有数据类型。
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
   * @param { Array<UniformDataType> | null | Array<string> } value - 设置该组件上允许落入的数据类型。从API version 12开始，允许设置成null使该组件不接受
   *     所有的数据类型。从API version 23开始，支持设置自定义数据类型Array<string>，自定义数据类型为应用自行定义的数据类型字符串，字符串无明确格式要求，但不应与UniformDataType标准类型格式重
   *     复，建议以易记易区分为原则来定义。 [since 23]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  allowDrop(value: Array<UniformDataType> | null | Array<string>): T;

  /**
   * 设置该组件是否允许拖拽。默认情况下，组件不允许拖拽。
   *
   * @param { boolean } value - 设置该组件是否允许进行拖拽。true表示允许拖拽，false表示不允许拖拽。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  draggable(value: boolean): T;

  /**
   * 设置组件浮起和拖拽过程中的预览图。
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
   * @param { CustomBuilder | DragItemInfo | string } value - 设置组件浮起和拖拽过程中的预览图，仅在
   *    [onDragStart]{@link CommonMethod#onDragStart}拖拽方式中有效。<br/>当组件支持拖拽并同时设置
   *    [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   *    的预览图时，则长按浮起的预览图以
   *    [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   *    设置的预览图为准。开发者在[onDragStart]{@link CommonMethod#onDragStart}中返回的背板图优先级低于
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}设置的预览图，当设置了
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}预览图时，拖拽过程中的背板图使用
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}预览图。由于
   *    [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)需要离线渲染之后才能使用，因此存在一定的性能开销和时延，
   *    推荐优先使用 [DragItemInfo]{@link DragItemInfo}中的[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}方式。<br/> 当传入类
   *    型为string的id时，则将id对应组件的截图作为预览图。如果id对应的组件无法查找到，或者id对应的组件[Visibility]{@link Visibility}属性设置成None/Hidden，则对组件自身进行截图
   *    作为拖拽预览图。目前截图不含有亮度、阴影、模糊和旋转等视觉效果。 [since 12]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dragPreview(value: CustomBuilder | DragItemInfo | string): T;

  /**
   * 自定义组件拖拽过程中的预览图，仅用于设置浮起效果或者禁用浮起效果。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { CustomBuilder | DragItemInfo | string } preview - 设置组件浮起和拖拽过程中的预览图，仅在
   *    [onDragStart]{@link CommonMethod#onDragStart}拖拽方式中有效。<br/>当组件支持拖拽并同时设置
   *    [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   *    的预览图时，则长按浮起的预览图以
   *    [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   *    设置的预览图为准。开发者在[onDragStart]{@link CommonMethod#onDragStart}中返回的背板图优先级低于
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}设置的预览图，当设置了
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}预览图时，拖拽过程中的背板图使用
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}预览图。由于
   *    [CustomBuilder]{@link CustomBuilder}需要离线渲染之后才能使用，因此存在一定的性能开销和时延，
   *    推荐优先使用 [DragItemInfo]{@link DragItemInfo}中的[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}方式。<br/> 当传入类
   *    型为string的id时，则将id对应组件的截图作为预览图。如果id对应的组件无法查找到，或者id对应的组件[Visibility]{@link Visibility}属性设置成None/Hidden，则对组件自身进行截图
   *    作为拖拽预览图。目前截图不含有亮度、阴影、模糊和旋转等视觉效果。
   * @param { PreviewConfiguration } config - 对自定义拖拽过程中的预览图进行配置。<br/>只对
   *    [dragPreview]{@link CommonMethod#dragPreview(value: CustomBuilder | DragItemInfo | string)}中的预览生效。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T;

  /**
   * 设置拖拽过程中预览图处理模式，数量角标的显示以及预览图浮起的交互模式。不支持onItemDragStart拖拽方式。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { DragPreviewOptions } value - 设置拖拽过程中预览图处理模式及数量角标的显示。
   * @param { DragInteractionOptions } options - 设置拖拽过程中预览图浮起的交互模式。<br/>默认值：空 [since 12]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T;

  /**
   * 绑定此事件的组件，当处于手势拖拽发起前的不同阶段时，触发回调。拖拽发起前的各阶段可参考[PreDragStatus]{@link PreDragStatus}。此接口不支持在鼠标拖拽中触发。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<PreDragStatus> } callback - 回调函数。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onPreDrag(callback: Callback<PreDragStatus>): T;

  /**
   * 在当前组件上，增加遮罩文本或者叠加自定义组件以及[ComponentContent]{@link ComponentContent}作为该组件的浮层。浮层的定位同样基于当前组件进行计算。浮层不通过组件树进行渲染，部分接口（例如
   * [getRectangleById]{@link api\@ohos.arkui.ComponentUtils#getRectangleById}）不支持获取浮层中
   * 的组件。
   *
   * > **说明：**
   * >
   * > - overlay会将浮层组件覆盖在所绑定的组件上方，阻塞用户对浮层下方组件的所有交互操作。
   * > - 多次调用overlay接口时，如果同时传入string类型和
   * > [CustomBuilder]{@link CustomBuilder}类型，或者同时传入string类型和
   * > [ComponentContent]{@link ComponentContent}类型，浮层内容会叠加显示。
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
   * @param { string | CustomBuilder | ComponentContent } value - 遮罩文本内容或自定义组件构造函数。<br/>**说明：**<br/>自定义组件作为浮层时，不支持键盘走焦到自
   *     定义组件中。通过CustomBuilder设置浮层时，浮层中的内容会在页面刷新时销毁并重新创建，存在一定的性能损耗，页面频繁刷新的场景推荐使用ComponentContent方式设置浮层。 [since 12]
   * @param { OverlayOptions } options - 浮层的定位。<br/>**说明：**<br/>API version 12之前，options: <br/>{<br/>align?: 
   *     [Alignment]{@link Alignment}, <br/>offset?: {x?: number, y?: number}<br/>} [since 12]
   * @returns { T } 返回当前组件。
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
   * 线性渐变。
   *
   * @param { object } value - Linear gradient.
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 线性渐变。
   *
   * @param { object } value - Linear gradient.
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 线性渐变。
   *
   * @param { object } value - Linear gradient.
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 线性渐变。
   *
   * @param { object } value - Linear gradient.
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * 线性渐变。
   *
   * @param { object } value - Linear gradient.
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * 线性渐变。
   *
   * @param { object } value - 线性渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradient(value: LinearGradientOptions): T;

  /**
   * 线性渐变。与[linearGradient]{@link CommonMethod#linearGradient(value: LinearGradientOptions)}相比，options参数新增了对undefined类型的
   * 支持。
   *
   * @param { Optional<LinearGradientOptions> } options - 线性渐变。<br/>当options的值为undefined时，恢复为无线性渐变的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  linearGradient(options: Optional<LinearGradientOptions>): T;

  /**
   * 角度渐变。
   *
   * @param { SweepGradientOptions } value - 角度渐变，仅绘制0-360度范围内的角度，超出时不绘制渐变色，只绘制纯色。 [since 18]
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 角度渐变。
   *
   * @param { SweepGradientOptions } value - 角度渐变，仅绘制0-360度范围内的角度，超出时不绘制渐变色，只绘制纯色。 [since 18]
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 角度渐变。
   *
   * @param { SweepGradientOptions } value - 角度渐变，仅绘制0-360度范围内的角度，超出时不绘制渐变色，只绘制纯色。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 角度渐变。
   *
   * @param { SweepGradientOptions } value - 角度渐变，仅绘制0-360度范围内的角度，超出时不绘制渐变色，只绘制纯色。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * 角度渐变。
   *
   * @param { SweepGradientOptions } value - 角度渐变，仅绘制0-360度范围内的角度，超出时不绘制渐变色，只绘制纯色。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * 角度渐变。
   *
   * @param { SweepGradientOptions } value - 角度渐变，仅绘制0-360度范围内的角度，超出时不绘制渐变色，只绘制纯色。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sweepGradient(value: SweepGradientOptions): T;

  /**
   * 角度渐变。与[sweepGradient]{@link CommonMethod#sweepGradient(value: SweepGradientOptions)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<SweepGradientOptions> } options - 角度渐变。<br/>当options的值为undefined时，恢复为无角度渐变的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  sweepGradient(options: Optional<SweepGradientOptions>): T;

  /**
   * 径向渐变。
   *
   * @param { object } value - 径向渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 径向渐变。
   *
   * @param { object } value - 径向渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 径向渐变。
   *
   * @param { object } value - 径向渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 径向渐变。
   *
   * @param { object } value - 径向渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * 径向渐变。
   *
   * @param { object } value - 径向渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * 径向渐变。
   *
   * Anonymous Object Rectification.
   * @param { RadialGradientOptions } value - 径向渐变。 [since 18]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radialGradient(value: RadialGradientOptions): T;

  /**
   * 径向渐变。与[radialGradient]{@link CommonMethod#radialGradient(value: RadialGradientOptions)}相比，options参数新增了对undefined类型的
   * 支持。
   *
   * @param { Optional<RadialGradientOptions> } options - 径向渐变。<br/>当options的值为undefined时，恢复为无径向渐变的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  radialGradient(options: Optional<RadialGradientOptions>): T;

  /**
   * 设置组件的路径动画。
   *
   * @param { MotionPathOptions } value - 设置组件的运动路径。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  motionPath(value: MotionPathOptions): T;

  /**
   * 为组件添加阴影效果。
   *
   * @param { ShadowOptions } value - Shadow of the component.
   * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
   * and offset along the x-axis and y-axis can be specified.
   * @returns { T }
   返回当前组件。
   * @since 7
   */
  /**
   * 为组件添加阴影效果。
   *
   * @param { ShadowOptions } value - Shadow of the component.
   * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
   * and offset along the x-axis and y-axis can be specified.
   * @returns { T }
   返回当前组件。
   * @form
   * @since 9
   */
  /**
   * 为组件添加阴影效果。
   *
   * @param { ShadowOptions | ShadowStyle } value - 为当前组件添加阴影效果。<br/>入参类型为ShadowOptions时，可以指定模糊半径、阴影的颜色、X轴和Y轴的偏移量。<br/>入参类型为
   *     ShadowStyle时，可指定不同阴影样式。 [since 7 - 9]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * 为组件添加阴影效果。
   *
   * @param { ShadowOptions | ShadowStyle } value - 为当前组件添加阴影效果。<br/>入参类型为ShadowOptions时，可以指定模糊半径、阴影的颜色、X轴和Y轴的偏移量。<br/>入参类型为
   *     ShadowStyle时，可指定不同阴影样式。 [since 7 - 9]
   * @returns { T }
   返回当前组件。
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  shadow(value: ShadowOptions | ShadowStyle): T;

  /**
   * 为组件添加阴影效果。与[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}相比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<ShadowOptions | ShadowStyle> } options - 为当前组件添加阴影效果。<br/>入参类型为ShadowOptions时，可以指定模糊半径、阴影的颜色、X轴和Y
   *     轴的偏移量。<br/>入参类型为ShadowStyle时，可指定不同阴影样式。<br/>当options的值为undefined时，恢复为无样式的阴影效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  shadow(options: Optional<ShadowOptions | ShadowStyle>): T;

  /**
   * 为组件添加边缘流光效果。边缘流光效果会在组件的边缘创建发光效果，从指定位置开始并沿边缘延伸，此效果可以增强组件的视觉吸引力并突出显示重要组件。
   *
   * > **说明：**
   * >
   * > - 仅设置edgeLight不会产生边缘流光效果，需结合
   * > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)更改position参数达到流光效果。可参考
   * > [示例4（设置组件边缘流光效果）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect-sys.md#示例4设置组件边缘流光效果)。
   * >
   * >
   * > - 当position参数以对角线方式变更时，边缘流光将沿倾斜角45°的方式运行。
   *
   * @param { EdgeLightParams | undefined } params - 定义边缘流光效果的位置、长度、强度、颜色和厚度。<br/>当params的值为undefined时，移除边缘流光效果。
   * @returns { T }
   返回当前组件。
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLight(params: EdgeLightParams | undefined): T;

  /**
   * 将当前控件的内容（包含子节点内容）与下方画布（可能为离屏画布）已有内容进行混合。
   *
   * @param { BlendMode } value - 混合模式。<br/>默认值：BlendMode.NONE<br/>**说明：**<br/>混合模式设置为BlendMode.NONE时，blend效果实际为默认的
   *     BlendMode.SRC_OVER，且BlendApplyType不生效。
   * @param { BlendApplyType } [type] - blendMode实现方式是否离屏。<br/>默认值：BlendApplyType.FAST<br/>**说明：**<br/>1. 设置
   *     BlendApplyType.FAST时，不离屏。<br/>2. 设置BlendApplyType.OFFSCREEN时，会创建当前组件大小的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再用指定的混合模式与下
   *     方画布已有内容进行混合。使用该实现方式时，将导致
   *     [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)}
   *     、[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、
   *     [brightness]{@link CommonMethod#brightness(value: number)}、
   *     [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}等需要截屏的接口无法截取到正确的画面。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * 将当前控件的内容（包含子节点内容）与下方画布（可能为离屏画布）已有内容进行混合。
   *
   * @param { BlendMode } value - 混合模式。<br/>默认值：BlendMode.NONE<br/>**说明：**<br/>混合模式设置为BlendMode.NONE时，blend效果实际为默认的
   *     BlendMode.SRC_OVER，且BlendApplyType不生效。
   * @param { BlendApplyType } [type] - blendMode实现方式是否离屏。<br/>默认值：BlendApplyType.FAST<br/>**说明：**<br/>1. 设置
   *     BlendApplyType.FAST时，不离屏。<br/>2. 设置BlendApplyType.OFFSCREEN时，会创建当前组件大小的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再用指定的混合模式与下
   *     方画布已有内容进行混合。使用该实现方式时，将导致
   *     [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)}
   *     、[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、
   *     [brightness]{@link CommonMethod#brightness(value: number)}、
   *     [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}等需要截屏的接口无法截取到正确的画面。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  blendMode(value: BlendMode, type?: BlendApplyType): T;

  /**
   * 将当前控件的内容（包含子节点内容）与下方画布（可能为离屏画布）已有内容进行混合。与
   * [blendMode<sup>11+</sup>]{@link CommonMethod#blendMode(value: BlendMode, type?: BlendApplyType)}相比，mode参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<BlendMode> } mode - 混合模式。<br/>默认值：BlendMode.NONE<br/>当mode的值为undefined时，恢复为内容不进行混合的效果。<br/>
   *     **说明：**<br/>混合模式设置为BlendMode.NONE时，blend效果实际为默认的BlendMode.SRC_OVER，且BlendApplyType不生效。
   * @param { BlendApplyType } [type] - blendMode实现方式是否离屏。<br/>默认值：BlendApplyType.FAST<br/>**说明：**<br/>1. 设置
   *     BlendApplyType.FAST时，不离屏。<br/>2. 设置BlendApplyType.OFFSCREEN时，会创建当前组件大小的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再用指定的混合模式与下
   *     方画布已有内容进行混合。使用该实现方式时，将导致
   *     [linearGradientBlur<sup>12+</sup>]{@link CommonMethod#linearGradientBlur(value: number, options: LinearGradientBlurOptions)}
   *     、[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、
   *     [brightness]{@link CommonMethod#brightness(value: number)}、
   *     [blur]{@link CommonMethod#blur(value: number, options?: BlurOptions)}等需要截屏的接口无法截取到正确的画面。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T;

  /**
   * 将当前组件的内容（包含子节点内容）与下方画布（可能为离屏画布）已有内容进行混合。不能与
   * [blendMode]{@link CommonMethod#blendMode(value: BlendMode, type?: BlendApplyType)}接口同时使用。
   *
   * @param { BlendMode | Blender } effect - 入参类型为BlendMode时表示混合模式。<br/>默认值：BlendMode.NONE <br/>入参类型为Blender时表示混合器类型，用于描
   *     述混合效果。<br/>需要使用uiEffect模块中的方法创建Blender实例。例如：
   *     [uiEffect.createBrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#uieffectcreatebrightnessblender)。
   *     使用自定义object作为入参不会生效。
   * @param { BlendApplyType } [type] - blendMode实现方式是否离屏。<br/>默认值：BlendApplyType.FAST<br/>**说明：**<br/>1. 设置为
   *     BlendApplyType.FAST，不离屏。<br/>2. 设置为BlendApplyType.OFFSCREEN，会创建当前组件大小的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再用指定的混合模式与下方
   *     画布已有内容进行混合。<br/>3. 不离屏情况下对文字类组件中emoji表情不生效。<br/>4. 相比BlendApplyType.OFFSCREEN，设置为
   *     BlendApplyType.OFFSCREEN_WITH_BACKGROUND，系统在创建与当前组件大小一致的离屏画布时，会先复制一份带有背景的画布作为初始化底色（BlendApplyType.OFFSCREEN类型的画
   *     布初始为透明背景），随后在此基础上进行混合操作。两者在其他功能特性上保持一致。
   * @returns { T }
   返回当前组件。
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 13 dynamic
   */
  advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T;

  /**
   * 是否对子组件超出当前组件范围外的区域进行裁剪。不设置该接口时，默认不对子组件超出当前组件范围外的区域进行裁剪。
   *
   * @param { boolean } value - 设置子组件是否按照当前组件边缘轮廓进行裁剪。<br/>true表示子组件按照当前组件边缘轮廓进行裁剪，false表示不对子组件进行裁剪。 <br/>**说明：** 设置为
   *     true后，子组件超出当前组件范围外的区域将不响应绑定的手势事件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  clip(value: boolean): T;

  /**
   * 是否对子组件超出当前组件范围外的区域进行裁剪。不设置该接口时，默认不对子组件超出当前组件范围外的区域进行裁剪。与
   * [clip<sup>12+</sup>]{@link CommonMethod#clip(value: boolean)}相比，新增了对undefined类型的支持。
   *
   * @param { Optional<boolean> } clip - 设置子组件是否按照当前组件边缘轮廓进行裁剪。<br/>**说明：** 设置为true后，子组件超出当前组件范围外的区域将不响应绑定的手势事件。<br/>当
   *     clip的值为undefined时，恢复为不对子组件超出当前组件范围外的区域进行裁剪。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  clip(clip: Optional<boolean>): T;

  /**
   * 按指定的形状对当前组件进行裁剪。
   * 
   * > **说明：**  
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - 参数为相应类型的组件，按指定的形状对当
   *     前组件进行裁剪；参数为boolean类型时，设置是否按照父容器边缘轮廓进行裁剪。<br/>默认值：false <br/>**说明：** 参数为对应类型的组件时，裁剪不会导致被裁剪区域无法响应绑定的手势事件。参数为
   *     boolean类型时，裁剪会导致被裁剪区域无法响应绑定的手势事件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead CommonMethod#clipShape(value: CircleShape | EllipseShape | PathShape | RectShape)
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * 按指定的形状（形状中可包含位置信息）对当前组件进行裁剪。
   * 
   * > **说明：**  
   * >
   * > 不同的形状支持的属性范围不同，路径是一种形状，除此之外还有椭圆、矩形等形状。
   * >
   * > 路径的形状不支持设置宽度和高度。具体形状支持的属性参考具体形状的文档。
   * >
   * > 形状中的[fill]{@link @ohos.arkui.shape:CommonShapeMethod#fill}属性对clipShape接口不生效。
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - 参数为相应类型的组件，按指定的形状（形状中可包含位置信息）对当前组件进行裁剪。<br/>
   *     **说明：** 裁剪不会导致被裁剪区域无法响应绑定的手势事件。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * 按指定的形状（形状中可包含位置信息）对当前组件进行裁剪。与
   * [clipShape<sup>12+</sup>]{@link CommonMethod#clipShape(value: CircleShape | EllipseShape | PathShape | RectShape)}相
   * 比，新增了对undefined类型的支持。
   * 
   * > **说明：**  
   * >
   * > 不同的形状支持的属性范围不同，路径是一种形状，除此之外还有椭圆、矩形等形状。
   * >
   * > 路径的形状不支持设置宽度和高度。具体形状支持的属性参考具体形状的文档。
   * >
   * > 形状中的[fill]{@link @ohos.arkui.shape:CommonShapeMethod#fill}属性对clipShape接口不生效。
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - 参数为相应类型的组件，按指定的形状（形状中可包含位置信息）对当前组件进
   *     行裁剪。<br/>**说明：** 裁剪不会导致被裁剪区域无法响应绑定的手势事件。<br/>当shape的值为undefined时，会重置当前值。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * 为组件上添加可调节进度的遮罩。
   *
   * @param { ProgressMask } value - 在当前组件上加上可动态设置进度、最大值和颜色的遮罩。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mask(value: ProgressMask): T;

  /**
   * 为组件上添加可调节进度的遮罩。与[mask<sup>12+</sup>]{@link CommonMethod#mask(value: ProgressMask)}相比，新增了对undefined类型的支持。
   *
   * @param { Optional<ProgressMask> } mask - 在当前组件上加上可动态设置进度、最大值和颜色的遮罩。<br/>当mask的值为undefined时，恢复为无进度遮罩效果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mask(mask: Optional<ProgressMask>): T;

  /**
   * 为组件上添加指定形状的遮罩。
   * 
   * > **说明：**  
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - 在当前组件上加上指定形状的遮
   *     罩。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead CommonMethod#maskShape(value: CircleShape | EllipseShape | PathShape | RectShape)
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;

  /**
   * 为组件上添加指定形状的遮罩。
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - 在当前组件上加上指定形状的遮罩。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * 为组件上添加指定形状的遮罩。与
   * [maskShape<sup>12+</sup>]{@link CommonMethod#maskShape(value: CircleShape | EllipseShape | PathShape | RectShape)}相
   * 比，新增了对undefined类型的支持。
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - 在当前组件上加上指定形状的遮罩。<br/>当shape的值为
   *     undefined时，会重置当前值。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * 控件标识，开发者可以通过标识来区分不同控件
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
   * 控件标识，开发者可以通过标识来区分不同控件
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
   * 组件内隐式共享元素转场。
   *
   * @param { string } id - 用于设置绑定关系，id置空字符串清除绑定关系避免参与共享行为，id可更换重新建立绑定关系。同一个id只能有两个组件绑定且是in/out不同类型角色，不能多个组件绑定同一个id。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  geometryTransition(id: string): T;

  /**
   * 组件内隐式共享元素转场。
   *
   * @param { string } id - 用于设置绑定关系，id置空字符串清除绑定关系避免参与共享行为，id可更换重新建立绑定关系。同一个id只能有两个组件绑定且是in/out不同类型角色，不能多个组件绑定同一个id。
   * @param { GeometryTransitionOptions } options - 组件内共享元素转场动画参数。<br>默认值为 { follow: false }。
   * @returns { T } 返回当前组件。
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
   * <p><strong>NOTE</strong>:
   * <br>The popup can be displayed only after the entire page is fully constructed. Therefore, to avoid incorrect
   * display positions and shapes, do not set this parameter to true while the page is still being constructed.
   * </p>
   *
   * @param { boolean } show - 
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
   * action: () => void }[] | CustomBuilder } content - Indicates the content of menu. [since 11]
   * @param { MenuOptions } options
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Menu control
   *
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
   * action: () => void }[] | CustomBuilder } content - Indicates the content of menu. [since 11]
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Menu control
   *
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu. [since 11]
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
   * component. Only custom menu items are supported.
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu, Long pressing with a mouse device
   *     is not supported.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T;

  /**
   * 将上下文菜单绑定到此组件，当用户长按或右键单击
   * 组件，支持自定义或固定样式的菜单项。
   *
   * @param { CustomBuilder | Array<MenuElement> } content - 上下文菜单的内容。
   * @param { ResponseType } responseType - 上下文菜单响应类型。用鼠标设备长按
   *     不支持。
   * @param { ContextMenuOptions } [options] - 上下文菜单选项。
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
   * 将上下文菜单绑定到组件上，当用户长按或右键该组件时显示。仅支持自定义菜单项。鼠标设备不支持长按操作。
   *
   * @param { CustomBuilderT<ResponseType> | undefined } content - 表示上下文菜单的内容。传入undefined表示解绑。
   * @param { ContextMenuOptions } [options] - 表示上下文菜单的选项。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): T;

  /**
   * 将上下文菜单绑定到此组件，当用户长按或右键单击
   * 组件，支持自定义或固定样式的菜单项。不支持使用鼠标设备长按。
   *
   * @param { CustomBuilderT<ResponseType> | Array<MenuElement> | undefined } content - 上下文菜单的内容。Undefined表示解除绑定。
   * @param { ContextMenuOptions } [options] - 上下文菜单选项。
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
   * ContextMenu control
   *
   * @param { boolean } isShown - true means display content, false means hide content.
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
   * 将上下文菜单绑定到组件，组件的可见性受isShow设置的约束。
   *
   * @param { boolean } isShow - true表示显示内容，false表示隐藏内容，默认为false。
   *     <p><strong>注意</strong>：
   *     <br>只有在构建了相关页面后，菜单才能正常显示。如果设置了该参数在构建完成之前设置为true，显示问题，如错位、扭曲或无法弹出上，可能会发生。不支持长按拖动。
   *     </p>.
   * @param { CustomBuilder | Array<MenuElement> } content - 上下文菜单的内容。
   * @param { ContextMenuOptions } [options] - 上下文菜单选项。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bindContextMenuByIsShow(isShow: boolean, content: CustomBuilder | Array<MenuElement>, options?: ContextMenuOptions): T;

  /**
   * 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，显示方式可设置无动画过渡，上下切换过渡以及透明渐变过渡。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } isShow - 是否显示全屏模态页面。<br/>-true：显示全屏模态页面。<br/>-false：隐藏全屏模态页面。<br/>从API version 10开始，该参数支持
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。<br />从API version 18开始，该参数支持
   *     [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   * @param { CustomBuilder } builder - 配置全屏模态页面内容。builder里面的根节点需要唯一。
   * @param { ModalTransition } type - 全屏模态页面的系统转场方式。<br/> 默认值：ModalTransition.DEFAULT。<br/>**说明：**<br /> 与transition同时设
   *     置时，此属性不生效。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T;

  /**
   * 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，可自定义设置转场方式。
   *
   * @param { boolean } isShow - 是否显示全屏模态页面。<br/>-true：显示全屏模态页面。<br/>-false：隐藏全屏模态页面。<br/>从API version 10开始，该参数支持
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。<br />从API version 18开始，该参数支持
   *     [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   * @param { CustomBuilder } builder - 配置全屏模态页面内容。
   * @param { ContentCoverOptions } options - 配置全屏模态页面的可选属性。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T;

  /**
   * 给组件绑定半模态页面，点击后显示模态页面。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } isShow - 是否显示半模态页面。<br/>true：显示半模态页面。<br/>false：隐藏半模态页面。<br/>从API version 10开始，该参数支持
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。<br />从API version 18开始，该参数支持
   *     [!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   * @param { CustomBuilder } builder - 配置半模态页面内容。
   * @param { SheetOptions } options - 配置半模态页面的可选属性。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T;

  /**
   * 设置组件不同状态下的样式。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * @param { StateStyles } State-specific styles for the component.
   * @returns { T } 返回当前组件。
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
   * 组件可见区域变化时触发该回调。开发指导及常见问题请参考[感知组件可见性](docroot://ui/arkts-manage-components-visibility.md)指南。
   * 
   * > **说明：**
   * >
   * > - 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 仅提供自身节点相对于所有祖先节点（直到window边界）的相对裁切面积与自身面积的比值及其变化趋势。
   * >
   * > - 不支持兄弟组件对自身节点的遮挡计算，不支持所有祖先的兄弟节点对自身节点的遮挡计算，不支持窗口遮挡计算，不支持组件旋转计算，如[Stack]{@link stack}、[Z序控制]{@link CommonMethod#zIndex}、
   * > [rotate]{@link CommonMethod#rotate(value: RotateOptions)}等。
   * >
   * > - 不支持非挂树节点的可见面积变化计算。例如，预加载的节点、通过[overlay]{@link CommonMethod#overlay}能力挂载的自定义节点。
   * >
   * > - 不支持[scale]{@link CommonMethod#scale(value: ScaleOptions)}属性，如果想要支持
   * > [scale]{@link CommonMethod#scale(value: ScaleOptions)}，则需使用
   * > [onVisibleAreaChange<sup>22+</sup>]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean)}
   * > ，将measureFromViewport设置为true。
   *
   * @param { Array<number> } ratios - 阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。当组件可见面积与自身面积的
   *     比值接近阈值时，均会触发该回调。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。<br/>**说明：** <br/>当数值接近边界
   *     0和1时，将会按照误差不超过0.001的规则进行舍入。例如，0.9997会被近似为1。
   * @param { function } event - Callback for visible area changes of the component. [since 9 - 12]
   * @param { VisibleAreaChangeCallback } event - 组件可见区域变化事件的回调。 [since 13]
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T;

  /**
   * 组件可见区域变化时触发该回调。可以通过measureFromViewport设置可见区域计算模式。开发指导及常见问题请参考
   * [感知组件可见性](docroot://ui/arkts-manage-components-visibility.md)指南。
   *
   * @param { Array<number> } ratios - 阈值数组。其中，每个阈值代表组件可见面积与组件自身面积的比值。当组件可见面积与自身面积的比值接近阈值时，均会触发该回调。每个阈值的取值范围为[0.0, 1.0]，
   *     如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。<br/>**说明：**<br/>当数值接近边界0和1时，将会按照误差不超过0.001的规则进行舍入。例如，0.9997会被
   *     近似为1。
   * @param { VisibleAreaChangeCallback } event - 组件可见区域变化事件的回调。
   * @param { boolean } measureFromViewport - 设置可见区域计算模式。<br/>当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的
   *     [clip]{@link CommonMethod#clip(value: boolean)} 属性设置。如果父组件的[clip]{@link CommonMethod#clip(value: boolean)}为
   *     false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的[clip]{@link CommonMethod#clip(value: boolean)}设置为
   *     true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。而当measureFromViewport设置为false时，则不考虑
   *     [clip]{@link CommonMethod#clip(value: boolean)}的影响，直接将组件超出父组件的部分视为不可见区域。<br/>measureFromViewport设置为true时，祖先节点设置
   *     [scale]{@link CommonMethod#scale(value: ScaleOptions)}属性，组件可见比例会被正确计算。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean): T;

  /**
   * 设置onVisibleAreaApproximateChange事件的回调参数，限制它的执行间隔。
   * 
   * > **说明：**
   * >
   * > 从API version 23开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { VisibleAreaEventOptions } options - 可见区域变化相关的参数。
   * @param { VisibleAreaChangeCallback | undefined } event - onVisibleAreaChange事件的回调函数。当组件可见面积与自身面积的比值接近options中设置的阈值时
   *     触发该回调。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): T;

  /**
   * 设置组件的图像球面化程度。
   *
   * @param { number } value - 设置组件的图像球面化程度。<br/>取值范围：[0,1]。<br/>**说明：**<br/>1. 如果value等于0则图像保持原样，如果value等于1则图像为完全球面化效果。
   *     在0和1之间，数值越大，则球面化程度越高。<br/>`value < 0 `或者` value > 1`为异常情况，`value < 0`按0处理，`value > 1`按1处理。<br/>2. 组件阴影和外描边不支持球面
   *     效果。<br>3. 设置value大于0时，组件冻屏并且把组件内容绘制到透明离屏buffer上，如果要更新组件属性则需要把value设置为0。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sphericalEffect(value: number): T;

  /**
   * 设置组件的图像球面化程度。与[sphericalEffect<sup>12+</sup>]{@link CommonMethod#sphericalEffect(value: number)}相比，effect参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<number> } effect - 设置组件的图像球面化程度。<br/>取值范围：[0,1]。<br/>**说明：**<br/>1. 如果value等于0则图像保持原样，如果value等于1则
   *     图像为完全球面化效果。在0和1之间，数值越大，则球面化程度越高。<br/>`effect < 0 `或者` effect > 1`为异常情况，`effect < 0`按0处理，`effect > 1`按1处理。<br/>
   *     2. 组件阴影和外描边不支持球面效果。<br/>3. 设置effect大于0时，组件冻屏并且把组件内容绘制到透明离屏buffer上，如果要更新组件属性则需要把effect设置为0。<br/>当effect的值为
   *     undefined时，恢复为图像球面化程度为0的效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  sphericalEffect(effect: Optional<number>): T;

  /**
   * 设置组件图像亮起程度。
   *
   * @param { number } value - 设置组件图像亮起程度。<br/>取值范围：[0,1]。<br/>如果value等于0则图像为全黑，如果value等于1则图像为全亮效果。0到1之间数值越大，表示图像亮度越高。
   *     `value < 0` 或者 `value > 1`为异常情况，`value < 0`按0处理，`value > 1`按1处理。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lightUpEffect(value: number): T;

  /**
   * 设置组件图像亮起程度。与[lightUpEffect<sup>12+</sup>]{@link CommonMethod#lightUpEffect(value: number)}相比，degree参数新增了对undefined类
   * 型的支持。
   *
   * @param { Optional<number> } degree - 设置组件图像亮起程度。<br/>取值范围：[0,1]。<br/>如果value等于0则图像为全黑，如果value等于1则图像为全亮效果。0到1之间数值越大，
   *     表示图像亮度越高。`degree < 0` 或者 `degree > 1`为异常情况，`degree < 0`按0处理，`degree > 1`按1处理。<br/>当degree的值为undefined时，恢复为亮起为1的
   *     效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  lightUpEffect(degree: Optional<number>): T;

  /**
   * 将空间效果应用于组件。
   *
   * @param { SpatialEffectParams | undefined } params - 空间效果参数。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  spatialEffect(params: SpatialEffectParams | undefined): T;

  /**
   * 设置组件的图像边缘像素扩展距离。
   *
   * @param { PixelStretchEffectOptions } options - 设置组件的图像边缘像素扩展距离。<br/>参数`options`包括上下左右四个方向的边缘像素扩展距离。<br/>**说明：**<br/
   *     >1. 如果距离为正值，表示向外扩展，放大原来图像大小。上下左右四个方向分别用边缘像素填充，填充的距离即为设置的边缘扩展的距离。<br/>2. 如果距离为负值，表示内缩，但是最终图像大小不变。<br/>内缩方式：<br/>
   *     图像根据`options`的设置缩小，缩小大小为四个方向边缘扩展距离的绝对值。<br/>图像用边缘像素扩展到原来大小。<br/>3. 对`options`的输入约束：<br/>上下左右四个方向的扩展统一为非正值或者非负值。
   *     即四个边同时向外扩或者内缩，方向一致。<br/>所有方向的输入均为百分比或者具体值，不支持百分比和具体值混用。<br/>所有异常情况下，显示为{0, 0, 0, 0}效果，即跟原图保持一致。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): T;

  /**
   * 设置组件的图像边缘像素扩展距离。与
   * [pixelStretchEffect<sup>12+</sup>]{@link CommonMethod#pixelStretchEffect(options: PixelStretchEffectOptions)}相比，
   * options参数新增了对undefined类型的支持。
   *
   * @param { Optional<PixelStretchEffectOptions> } options - 设置组件的图像边缘像素扩展距离。<br/>参数`options`包括上下左右四个方向的边缘像素扩展距离。<br/>
   *     **说明：**<br/>1. 如果距离为正值，表示向外扩展，放大原来图像大小。上下左右四个方向分别用边缘像素填充，填充的距离即为设置的边缘扩展的距离。<br/>2. 如果距离为负值，表示内缩，但是最终图像大小不变。<br/
   *     >内缩方式：<br/>图像根据`options`的设置缩小，缩小大小为四个方向边缘扩展距离的绝对值。<br/>图像用边缘像素扩展到原来大小。<br/>3. 对`options`的输入约束：<br/>上下左右四个方向的扩展统
   *     一为非正值或者非负值。即四个边同时向外扩或者内缩，方向一致。<br/>所有方向的输入均为百分比或者具体值，不支持百分比和具体值混用。<br/>所有异常情况下，显示为{0, 0, 0, 0}效果，即跟原图保持一致。<br/>
   *     当options的值为undefined时，恢复为无像素扩展效果。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T;

  /**
   * 设置组件的自定义组合键。
   *
   * @param { string | FunctionKey } value - 热键的单个字符（可以通过键盘输入的字符）或[FunctionKey]{@link FunctionKey}。<br />空字符串意为取消快捷键绑定。<br/>
   * @param { Array<ModifierKey> } keys - 热键组合。<br />仅当value为[FunctionKey]{@link FunctionKey}的情况下keys的值可以为空。<br/>
   * @param { function } [action] - 组合快捷键触发成功后的自定义事件回调。
   * @returns { T } 返回当前组件。
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
   * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility, default value is false.
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
   * Sets accessibility next focus id
   * @param { string } nextId - set component next accessibility focus id
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
   * Sets the accessibility default foucs flag
   * @param { boolean } focus - if the component is accessibility default focus,focus set true
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
   * Sets accessibility same page mode
   * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
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
   * 提供通用属性accessibilityScrollingTriggerable设置控制滚动组件，走焦到边界时，是否需要被屏幕朗读自动滚动
   * @param { boolean } isTriggerable - 是否触发滚动
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
   * <p><strong>NOTE</strong>
   * If a component has both text content and accessibility text, only the accessibility text is announced.
   * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
   * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
   * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
   * </p>
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
   * Sets accessibility role,role indicates the custom type of the component
   * @param { AccessibilityRoleType } role - set accessibility component type
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
   * 注册可访问性操作拦截回调，
   * 当要执行可访问性操作时，将执行回调
   * @param { AccessibilityActionInterceptCallback } callback - 可访问性操作拦截回调函数
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
   * Sets accessibilityTextHint
   *
   * @param { string } value - set accessibility text hint
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
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility, default value is "".
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility, default value is "".
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * Sets accessibilityVirtualNode
   *
   * @param { CustomBuilder } builder - set virtual node of accessibility
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets obscured
   *
   * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * 设置宽高动画过程中的组件内容填充方式。不通过该接口设置，保持动画终态的内容大小，并且内容始终与组件保持左上角对齐。
   *
   * @param { RenderFit } fitMode - 设置宽高动画过程中的组件内容填充方式。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  renderFit(fitMode: RenderFit): T;

  /**
   * 设置宽高动画过程中的组件内容填充方式。不通过该接口设置，保持动画终态的内容大小，并且内容始终与组件保持左上角对齐。与
   * [renderFit]{@link CommonMethod#renderFit(fitMode: RenderFit)}相比，fitMode参数新增了对undefined类型的支持。
   *
   * @param { Optional<RenderFit> } fitMode - 设置宽高动画过程中的组件内容填充方式。<br/>当fitMode的值为undefined时，取默认值。恢复为内容填充方式为
   *     RenderFit.TOP_LEFT的效果。
   * @returns { T } 返回当前组件。
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
   
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  attributeModifier(modifier: AttributeModifier<T>): T;

  /**
   * 动态设置组件绑定的手势。
   *
   * 说明：
   * gestureModifier不支持自定义组件。
   * 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { GestureModifier } modifier 动态设置当前组件的手势绑定，支持if/else语法。
   *    modifier: 手势修改器，开发者需自定义class实现GestureModifier接口。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  gestureModifier(modifier: GestureModifier): T;

  /**
   * 设置组件背景提亮效果。
   *
   * @param { BackgroundBrightnessOptions } params - 设置组件背景提亮效果，包括：亮度变化速率，提亮程度。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBrightness(params: BackgroundBrightnessOptions): T;

  /**
   * 设置组件背景提亮效果。与
   * [backgroundBrightness<sup>12+</sup>]{@link CommonMethod#backgroundBrightness(params: BackgroundBrightnessOptions)}相
   * 比，options参数新增了对undefined类型的支持。
   *
   * @param { Optional<BackgroundBrightnessOptions> } options - 设置组件背景提亮效果，包括：亮度变化速率，提亮程度。<br/>当options的值为undefined时，恢复为
   *     无提亮效果的背景。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T;

  /**
   * 为组件绑定自定义手势判定回调。当手势即将成功时，触发用户定义的回调获取结果。
   * 
   * > **说明：**
   * >
   * > 在Text组件中使用该接口时，不支持对点击事件进行自定义手势判定。
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T;

  /**
   * 给组件绑定自定义手势识别器判定回调。
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - 自定义手势识别器判定回调。当绑定到该组件的手势即将成功时，会触发用户定义的回调来获取结果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T;

  /**
   * 给组件绑定自定义手势识别器判定回调。
   * 
   * 新增exposeInnerGesture参数作为是否将ArkUI系统组合组件的内置组件的手势暴露给开发者的标识。当该标识置为true时，将ArkUI系统组合组件的内置组件的手势暴露给开发者。
   * 
   * 对于不需要将ArkUI系统组合组件的内置组件的手势暴露给开发者的场景，建议采用原有
   * [onGestureRecognizerJudgeBegin]{@link onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback)}
   * 接口。若要求将ArkUI系统组合组件的内置组件的手势暴露给开发者，建议使用该接口并将exposeInnerGesture设置为true。
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - 自定义手势识别器判定回调，当绑定到该组件的手势即将成功时，会触发用户定义的回调来获取结果。
   * @param { boolean } exposeInnerGesture - 暴露内部手势标识。<br/>默认值：false<br/>**说明：** <br/>如果是组合组件，此参数设置true，回调中的current参数则会包含组合组件内部的手势识别器。<br>
   *     当前仅支持[Tabs]{@link tabs}，其他组件请不要设置此参数。<br/>设置为false时，功能与原接口[onGestureRecognizerJudgeBegin]{@link onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback)}
   *     相同。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T;

  /**
   * 提供系统内置手势与响应链上其他组件的手势设置并行关系的回调事件。此接口对应的C API接口为
   * [setInnerGestureParallelTo](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativegestureapi-1.md#setinnergestureparallelto)。
   *
   * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - 系统内置手势与响应链上其他组件的手势设置并行关系的回调事件，当该组件进行触摸碰撞测试时，
   *     会触发用户定义的回调来形成手势并行关系。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T;

  /**
   * 提供手势与响应链上其他组件的手势设置并行关系的回调事件。使用callback异步回调。此接口对应的C API接口为
   * [setGestureParallelTo](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativegestureapi-3.md#setgestureparallelto)。
   *
   * @param { ShouldRecognizerParallelWithCallback } callback - A callback instance used when a component is doing
   *     touch test.
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback): T;

  /**
   * 设置组件是否独占事件。
   *
   * @param { boolean } monopolize - 组件是否独占事件。true表示组件独占事件，false表示组件不独占事件。
   *    默认值：false
   *    说明：
   *    1、如果第一根手指触发了组件事件独占，在抬起前又按下了一根手指，则第二根手指的交互继续处于组件独占状态，依次类推。
   *    2、如果开发者通过[parallelGesture]{@link parallelGesture(gesture: GestureType, mask?: GestureMask)}绑定了与子组件同时触发的手势，如PanGesture，子组件设置了独占控制且首个响应事件，则父组件的手势不会响应。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  monopolizeEvents(monopolize: boolean): T;

  /**
   * 给组件绑定自定义事件拦截回调。
   *
   * @param { Callback<TouchEvent, HitTestMode> } callback - 自定义事件拦截回调。在做触摸测试时回调此函数。
   *    通过返回值设置组件的HitTestMode。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T;

  /**
   * 组件区域变化时触发该回调。仅会响应由布局变化所导致的组件尺寸发生变化时的回调。
   * 
   * > **说明：**
   * >
   * > 1. 该接口在布局发生变化时触发，由于计算精度的关系，其返回值可能与真实物理尺寸存在细微的差异。
   * >
   * > 2. onSizeChange是布局过程中触发的同步回调，直接在其中更改状态变量存在被纳入动画闭包的风险。具体而言，动画会对比动画前的布局与动画闭包后的布局，若onSizeChange的回调在动画前的布局中同步触发，那么
   * > onSizeChange回调中所做的变更将与动画闭包中的变更一同纳入动画过程。为了避免此类问题，可在onSizeChange中使用延迟时间为0的
   * > [setTimeout]{@link api/@internal/ets/global:setTimeout}或
   * > [postFrameCallback]{@link @ohos.arkui.UIContext:UIContext#postFrameCallback}，将UI处理逻辑
   * > 延后至异步执行。
   *
   * @param { SizeChangeCallback } event - 目标元素变化前后的尺寸。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  onSizeChange(event: SizeChangeCallback): T;

  /**
   * 无障碍焦点框绘制层级，默认层级是跟随组件。
   *
   * @param { FocusDrawLevel } drawLevel - 无障碍焦点绘制层级定义
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
   * 提供在[触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后，指定手势识别器是否参与后续处理的能力。
   *
   * @param { TouchTestDoneCallback } callback - 回调函数，用于指定手势识别器是否参与后续处理。在
   *     [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后，开始识别用户手势之前，会触发该回调来动态指定手势识别器是否参与后续处理。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onTouchTestDone(callback: TouchTestDoneCallback): T;

  /**
   * 在当前节点及更高优先级节点上的事件和手势被收集完成后触发该回调。该回调可用于干预事件和手势的收集结果。使用callback异步回调。
   *
   * @param { GestureCollectInterceptCallback } callback - 组件进行触摸测试时使用的回调函数。在当前节点及更高优先级节点上的事件和手势收集完成后执行，以干预收集结果。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onGestureCollectIntercept(callback: GestureCollectInterceptCallback): T;

  /**
   * 绑定此事件的组件可作为具有悬停检测功能的拖拽响应目标。当拖拽对象悬停在目标上时，触发回调通知。此时只有一个目标可以成为响应方，并且子组件始终具有更高的响应优先级。
   * 
   * 关于悬停检测的触发机制及详细使用方法，请参考开发指南[支持悬停检测](docroot://ui/arkts-common-events-drag-event.md#支持悬停检测)。
   *
   * @param { Callback<SpringLoadingContext> | null } callback - 悬停检测回调函数，当值为null时禁用悬停检测。
   * @param { DragSpringLoadingConfiguration } [configuration] - 悬停检测配置信息，为undefined时取
   *     [DragSpringLoadingConfiguration]{@link @ohos.arkui.dragController:dragController#DragSpringLoadingConfiguration}
   *     默认值。
   * @returns { T } 返回当前组件。
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
   * @param { boolean } value - value indicates whether the component enables the ability to invert colors.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  allowForceDark(value: boolean): T;

  /**
   * 设置组件的系统材质。不同系统材质对应不同的属性影响效果，该接口可以影响背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、边
   * 框颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}、材质层滤镜效果，影响的属性与设备算力档位相关，参考
   * [ImmersiveMaterial](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivematerial)。使用示例请参考
   * [示例1（设置沉浸式系统材质）](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#示例1设置沉浸式系统材质)。
   *
   * @param { SystemUiMaterial | undefined } material - 组件的系统材质对象。设置为undefined时恢复为无材质的效果，若同时设置了材质对象影响的通用属性，会恢复至对应通用属性设置的
   *     值，冲突的属性由材质对象决定，参考
   *     [ImmersiveMaterial](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivematerial)。
   * @returns { T }
   返回当前组件。
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  /**
   * Set system-styled materials for the component. The material effect behaves differently on devices with different
   * level of computing powers. On devices with lower computing power, it affects attributes such as the
   * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect
   * at the system material layer, which can produce an effect similar to glass.
   *
   * @param { SystemUiMaterial | undefined } material - 组件的系统材质对象。设置为undefined时恢复为无材质的效果，若同时设置了材质对象影响的通用属性，会恢复至对应通用属性设置的
   *     值，冲突的属性由材质对象决定，参考
   *     [ImmersiveMaterial](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivematerial)。
   * @returns { T }
   返回当前组件。
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial(material: SystemUiMaterial | undefined): T;

  /**
   * 组件获焦时回调函数被调用，返回值表示是否需要拉起键盘。
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
   * 设置组件的状态播报文本，可用于屏幕朗读场景下指示当前组件所处于的状态。屏幕朗读场景下会优先播报状态文本。
   *
   * @param { string | Resource | undefined } description - 无障碍场景组件的状态播报文本。当设置成undefined的时候，会被当作空字符串处理。
   * @returns { T } 返回调用该接口的组件引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityStateDescription(description: string | Resource | undefined): T;

  /**
   * 设置组件的无障碍操作的参数，用于限制或者修改无障碍操作下的行为。无障碍操作由屏幕朗读等辅助应用发起。
   *
   * @param { AccessibilityActionOptions | undefined } option - 无障碍操作的参数，用于限制或者修改无障碍操作下的行为。
   * @returns { T } 返回调用该接口的组件引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityActionOptions(option: AccessibilityActionOptions | undefined): T;

  /**
   * 设置组件的下一个辅助功能焦点ID，使用可选的详细参数。
   * 详细的参数可以为可访问性焦点转换提供额外的行为。
   *
   * @param { string } nextId - 设置组件下一个可访问性焦点ID
   * @param { AccessibilityNextFocusParams | undefined } nextFocusParams - 可访问性下一个焦点处理的详细参数。
   *     Undefined表示恢复默认的详细参数。
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
   * 设置组件智慧手势响应行为配置。
   *
   * @param { SmartGestureShortcutOptions } [options] - 组件智慧手势响应配置。
   *    SmartGestureShortcutOptions中enabled用于配置组件是否响应智慧手势。
   *    selectable用于设置组件被智慧手势操作选中后是否展示并保留选中态。
   *    action用于设置智慧手势响应优先级，当前仅支持GestureShortcut.PRIMARY，会使组件在智慧手势的滑动，点击等操作中作为首选响应目标。
   *    建议显式传入，避免因缺省配置导致预期不一致，缺省配置处理参考[SmartGestureShortcutOptions]{@link SmartGestureShortcutOptions}。
   * @returns { T } 返回当前组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  smartGestureShortcut(options?: SmartGestureShortcutOptions): T;

  /**
   * 设置可在辅助功能下的自定义操作处理中可以处理的AccessibilityCustomActions。
   *
   * @param { Array<AccessibilityCustomAction> | undefined } actions - 设置辅助功能自定义操作。
   * @returns { T } 返回调用方法的组件实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): T;

  /**
   * 设置组件的检查器标签，该标签仅在DevEco Studio上显示。
   *
   * @param { string | undefined } label - 检查器标签。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  inspectorLabel(label: string | undefined): T;

  /**
   * 是否绘制组件的双面。
   *
   * @param { Optional<boolean> } value - 是否绘制组件的双面。<br/>设置为true表示组件的正面和背面都是可见的。<br/>设置为false表示组件的正面是可见的，旋转时组件的背面是不可见的。<
   *     br/>设置为undefined时效果和设置为true时保持一致，默认开启双面绘制。
   * @returns { T }
   返回当前组件。
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
 * IDE使用的CommonInterface
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * IDE使用的CommonInterface
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * IDE使用的CommonInterface
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * IDE使用的CommonInterface
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
   * 构造器。
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
 * 公共通用属性实例
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 公共通用属性实例
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 公共通用属性实例
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 公共通用属性实例
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
 * Common通用接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * Common通用接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * Common通用接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Common通用接口
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
 * 定义CustomBuilder类型。
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义CustomBuilder类型。
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * 定义CustomBuilder类型。
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 定义CustomBuilder类型。
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
 * 定义带参数的CustomBuilder类型
 *
 * @typedef { function } CustomBuilderT<T>
 * @param { T } t - 函数参数
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare type CustomBuilderT<T> = (t: T) => void;

/**
 * 浮层的定位。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 * >
 * > align和offset都设置时，效果重叠，浮层相对于组件方位定位后，再基于当前位置的左上角进行偏移。
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
   * 设置浮层相对于组件的方位。
   *
   * 默认值：TopStart
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  align?: Alignment;

  /**
   * 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。
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
 * 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
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
   * 横向偏移量。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: number;

  /**
   * 纵向偏移量。
   *
   * 默认值：0
   *
   * 单位：vp
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
* 定义模糊段。
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
   * border Color
   *
   * @param { ResourceColor } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value - 
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
   * Fill color.
   *
   * @param { ResourceColor } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value - 
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
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value - 
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
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value - 
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
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value - 
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
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value - 
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
   * fill Opacity
   *
   * @param { number | string | Resource } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value - 
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
   * Sets the width of the dividing line.
   *
   * @param { Length } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value - 
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
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value - 
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
   * Sets the gap for the border.
   *
   * @param { Array<any> } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value - 
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value - 
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
 * 指定组件级像素取整的方向。
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
   * 组件前部边界取整对齐方式。
   * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
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
   * 组件上部边界取整对齐方式。
   * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
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
   * 组件尾部边界取整对齐方式。
   * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
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
   * 组件底部边界取整对齐方式。
   * <br>不设置pixelRound或者设置异常值时按四舍五入规则取整。
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
*
 * @interface LinearGradientBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LinearGradientBlurOptions {

  /**
   * 数组中保存的每一个二元数组（取值0-1，小于0则为0，大于1则为1）表示[模糊程度, 模糊位置]；模糊位置需严格递增，开发者传入的数据不符合规范会记录日志，渐变模糊数组中二元数组个数必须大于等于2，否则渐变模糊不生效。
   *
   * @type { FractionStop[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  fractionStops: FractionStop[];

  /**
   * 渐变模糊方向。
   *
   * 默认值：
   *
   * GradientDirection.Bottom
   *
   * @type { GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @stagemodelonly
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
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Define anchor coordinate y-value.Value range [0.0, 1.0].
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;
}

/**
* 运动模糊选项。
*
 * @interface MotionBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MotionBlurOptions {

  /**
   * 模糊半径，取值范围[0.0, ∞)，建议设置1.0以内。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;

  /**
   * 运动模糊锚点坐标。运动模糊锚点坐标设置时需要与动画缩放的锚点保持一致设置。
   *
   * @type { MotionBlurAnchor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  anchor: MotionBlurAnchor;
}

/**
 * 子组件边框信息
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
   * 子组件边框宽度信息
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
   * 子组件外边距信息
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead getMargin
   */
  margin: Margin;

  /**
   * 子组件内边距信息
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead getPadding
   */
  padding: Padding;
}

/**
 * 子组件布局位置信息
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
   * 子组件位置信息
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Layoutable
   */
  position: Position;

  /**
   * 子组件布局约束
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Layoutable
   */
  constraint: ConstraintSizeOptions;
}

/**
 * 区域变化相关的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface AreaChangeOptions {

  /**
   * 区域变化的计算时间间隔，单位为ms。当该字段大于2^31-1时，默认取值为2^31-1。
   * 
   * 默认值：1000
   *
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
 * 组件区域变化事件的回调类型。
 *
 * @param { Area } oldValue - 区域变化前的信息，包括：目标元素的宽度、高度、相对于父元素的坐标和目标元素左上角在当前窗口坐标系中的位置坐标。
 * @param { Area } newValue - 区域变化后的信息，包括：目标元素的宽度、高度、相对于父元素的坐标和目标元素左上角在当前窗口坐标系中的位置坐标。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type AreaChangeCallback = (oldValue: Area, newValue: Area) => void;

/**
 * 布局和测量发生时，框架传递给子组件的信息。
 *
 * @interface LayoutChild
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead Measurable/Layoutable
 */
declare interface LayoutChild {

  /**
   * 子组件名字
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  name: string;

  /**
   * 子组件id
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  id: string;

  /**
   * 子组件约束
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  constraint: ConstraintSizeOptions;

  /**
   * 子组件边框信息
   *
   * @type { LayoutBorderInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  borderInfo: LayoutBorderInfo;

  /**
   * 子组件位置信息
   *
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead Measurable/Layoutable
   */
  position: Position;

  /**
   * 在 onMeasure 回调中调用此 measure 方法以提供子组件的尺寸。
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
   * 在 onLayout 回调中调用此布局方法，将布局信息分配给子组件。
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
 * 父组件（自定义组件）布局信息，继承自[SizeResult]{@link SizeResult}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface GeometryInfo extends SizeResult {

  /**
   * 父组件（自定义组件）边框宽度。
   * 单位为： vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth: EdgeWidth;

  /**
   * 父组件（自定义组件）margin信息。
   * 单位为： vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  margin: Margin;

  /**
   * 父组件（自定义组件）padding信息。
   * 单位为： vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding: Padding;
}

/**
 * 子组件布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface Layoutable {

  /**
   * 子组件测量后的尺寸信息。
   * 单位为： vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  measureResult: MeasureResult;

  /**
   * 系统为子组件分配的唯一标识UniqueID。
   * 取值应为≥0的整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  uniqueId?: number;

  /**
   * 调用此方法对子组件的位置信息进行限制。
   *
   * @param { Position } position - 绝对位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  layout(position: Position): void;

  /**
   * 调用此方法获取子组件的margin信息。
   *
   * @returns { DirectionalEdgesT<number> } 子组件的margin信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMargin() : DirectionalEdgesT<number>;

  /**
   * 调用此方法获取子组件的padding信息。
   *
   * @returns { DirectionalEdgesT<number> } 子组件的padding信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPadding() : DirectionalEdgesT<number>;

  /**
   * 调用此方法获取子组件的borderWidth信息。
   *
   * @returns { DirectionalEdgesT<number> } 子组件的borderWidth信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getBorderWidth() : DirectionalEdgesT<number>;
}

/**
 * 子组件位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface Measurable {

  /**
   * 系统为子组件分配的唯一标识UniqueID。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  uniqueId?: number;

  /**
   * 调用此方法限制子组件的尺寸范围。
   *
   * @param { ConstraintSizeOptions } constraint - 约束尺寸。
   * @returns { MeasureResult } Provides the measurement result of the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  measure(constraint: ConstraintSizeOptions) : MeasureResult;

  /**
   * 调用此方法获取子组件的margin信息。
   *
   * @returns { DirectionalEdgesT<number> } 子组件的margin信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMargin() : DirectionalEdgesT<number>;

  /**
   * 调用此方法获取子组件的padding信息。
   *
   * @returns { DirectionalEdgesT<number> } 子组件的padding信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPadding() : DirectionalEdgesT<number>;

  /**
   * 调用此方法获取子组件的borderWidth信息。
   *
   * @returns { DirectionalEdgesT<number> } 子组件的borderWidth信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getBorderWidth() : DirectionalEdgesT<number>;
}

/**
 * 组件尺寸信息。
 *
 * > **说明：**
 * >
 * >- 自定义布局暂不支持LazyForEach写法。
 * >- 使用builder形式的自定义布局创建，自定义组件的build()方法内只允许存在this.builder()，即示例的推荐用法。
 * >- 父容器（自定义组件）上设置的尺寸信息，除aspectRatio之外，优先级小于onMeasureSize设置的尺寸信息。
 * >- 子组件设置的位置信息，offset、position、markAnchor优先级大于onPlaceChildren设置的位置信息，其他位置设置属性不生效。
 * >- 使用自定义布局方法时，需要同时调用onMeasureSize和onPlaceChildren方法，否则可能出现布局异常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SizeResult {

  /**
   * 测量后的宽。
   * 单位为： vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  width: number;

  /**
   * 测量后的高。
   * 单位为： vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  height: number;
}

/**
 * Sub component MeasureResult info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface MeasureResult extends SizeResult {}

/**
* NavDestinationInfo实例对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type NavDestinationInfo = import('../api/@ohos.arkui.observer').default.NavDestinationInfo;

/**
* NavigationInfo实例对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type NavigationInfo = import('../api/@ohos.arkui.observer').default.NavigationInfo;

/**
* RouterPageInfo实例对象。
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
 * @typedef { import('../api/arkui/Graphics').DrawContext } DrawContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawContext = import('../api/arkui/Graphics').DrawContext;

/**
 * 导入VisualEffect类型对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VisualEffect = import('../api/@ohos.graphics.uiEffect').default.VisualEffect;

/**
 * 导入Filter类型对象。
 *
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
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Blender } Blender
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @form
 * @since 13 dynamic
 */
declare type Blender = import('../api/@ohos.graphics.uiEffect').default.Blender;

/**
 * 组件内容的实体封装。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ComponentContent<T = Object> = import('../api/arkui/ComponentContent').ComponentContent<T>;

/**
* 主题。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Theme = import('../api/@ohos.arkui.theme').Theme;

/**
 * 从promptAction导入弹出框控制器类型
 *
 * @typedef { import('../api/@ohos.promptAction').promptAction.DialogController } PromptActionDialogController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare type PromptActionDialogController = import('../api/@ohos.promptAction').promptAction.DialogController;

/**
 * 自定义组件
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7
 */
/**
 * 自定义组件
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form
 * @since 9
 */
/**
 * 自定义组件
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 自定义组件
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
 * 自定义组件
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
 * 自定义组件V2
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare class CustomComponentV2 extends BaseCustomComponent {

  /**
   * aboutToReuse Method for @ComponentV2, it is executed when fetching instance of custom component from RecyclePool.
   * It is different from the @Reusable in CustomComponent, there is no param parameter in this callback.
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
 * 自定义组件基类，它是从类CustomComponent迁移过来的。
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare class BaseCustomComponent extends CommonAttribute {

  /**
   * 自定义弹出内容构造函数。
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
   * aboutToAppear方法
   *
   * aboutToAppear函数在创建自定义组件的新实例之后，在执行其构建（）函数之前执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * aboutToAppear方法
   *
   * aboutToAppear函数在创建自定义组件的新实例之后，在执行其构建（）函数之前执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * aboutToAppear方法
   *
   * aboutToAppear函数在创建自定义组件的新实例之后，在执行其构建（）函数之前执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * aboutToAppear方法
   *
   * aboutToAppear函数在创建自定义组件的新实例之后，在执行其构建（）函数之前执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToAppear方法
   *
   * aboutToAppear函数在创建自定义组件的新实例之后，在执行其构建（）函数之前执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear 方法
   *
   * 在自定义组件被销毁之前，aboutToDisappear 函数会执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * aboutToDisappear 方法
   *
   * 在自定义组件被销毁之前，aboutToDisappear 函数会执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * aboutToDisappear 方法
   *
   * 在自定义组件被销毁之前，aboutToDisappear 函数会执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * aboutToDisappear 方法
   *
   * 在自定义组件被销毁之前，aboutToDisappear 函数会执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToDisappear 方法
   *
   * 在自定义组件被销毁之前，aboutToDisappear 函数会执行。
   *
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
   * onWillApplyTheme函数用于获取当前组件上下文的Theme对象，在创建自定义组件的新实例后，在执行其build()函数之前执行。允许在onWillApplyTheme函数中改变状态变量，更改将在后续执行build()函
   * 数中生效。
   *
   * > **说明：**
   * > 从API version 18开始，该接口支持在状态管理V2组件中使用。
   *
   * @param { Theme } theme - 自定义组件当前生效的Theme对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillApplyTheme?(theme: Theme): void;

  /**
   * ArkUI框架会在自定义组件确定位置时，将该自定义组件的子节点自身的尺寸范围通过onPlaceChildren传递给该自定义组件。不允许在onPlaceChildren函数中改变状态变量。
   *
   * @param { GeometryInfo } selfLayoutInfo - 计算自定义组件大小后的自身布局信息。
   * @param { Array<Layoutable> } children - 计算子组件大小后的子组件布局信息。
   * @param { ConstraintSizeOptions } constraint - 自定义组件的布局约束信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 18 dynamic
   */
  onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void;

  /**
   * ArkUI框架会在自定义组件确定尺寸时，将该自定义组件的节点信息和尺寸范围通过onMeasureSize传递给该开发者。不允许在onMeasureSize函数中改变状态变量。
   *
   * @param { GeometryInfo } selfLayoutInfo - 计算自定义组件大小后的自身布局信息。  <br/>**说明：** <br/>第一次布局时以自身设置的属性为准。
   * @param { Array<Measurable> } children - 计算子组件大小后的子组件布局信息。<br/>**说明：**
   *     <br/>如果没有设置子组件的布局信息，子组件会维持上一次的布局信息，当子组件从来没有设置过尺寸时，尺寸默认为0。
   * @param { ConstraintSizeOptions } constraint - 自定义组件的布局约束信息。
   * @returns { SizeResult } Component size information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 18 dynamic
   */
  onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult;

  /**
   * router路由页面（即[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的自定义组件）每次显示时触发一次，包括路由
   * 跳转、应用进入前台等场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPageShow?(): void;

  /**
   * router路由页面（即[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的自定义组件）每次隐藏时触发一次，包括路由
   * 跳转、应用进入后台等场景。
   * > **说明：**
   * > 在该回调函数内，建议避免执行高耗时操作阻塞主线程造成卡顿。对于高耗时操作例如相机资源释放，推荐使用异步方案替代。最佳实践请参考
   * >
   * [优化应用时延问题-延迟执行资源释放操作](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-latency-optimiza
   * tion-cases#section8783201923819)。
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the
   * application entering the background
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
   * 在router路由页面（即[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的自定义组件）生效，当用户点击返回按钮时
   * 触发。返回true表示页面自己处理返回逻辑，不进行页面路由；返回false表示使用默认的路由返回逻辑，不设置返回值按照false处理。
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
   * 查询自定义组件所属的[NavDestination]{@link nav_destination}信息，仅当自定义组件在NavDestination的内部时才生效。
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
   * 查询当前自定义组件距离最近的NavDestination信息（要求该NavDestination是Navigation的导航页或子页），isInner为true表示向内查找，false表示向外查找。
   *
   * @param { Optional<boolean> } [isInner] - -
   *     true：向内查询最近的，且在栈内的NavDestinationInfo的详细信息。<br/>false：向外查询最近的，且在栈内的NavDestinationInfo的详细信息。
   * @returns { NavDestinationInfo | undefined } **NavDestinationInfo** instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined;

  /**
   * 查询自定义组件所属的[Navigation]{@link navigation}信息。
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
   * 获取RouterPageInfo实例对象。
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
   * 该回调仅生效于由[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的、作为[router]{@link
   * @param { ESObject } param - 路由跳转时传递到目标页面的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onNewParam?(param: ESObject): void;
}

/**
 * 自定义组件
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * 自定义组件
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form
 * @since 9 dynamic
 */
declare class View {

  /**
   * 只需使用生成tsbundle
   *
   * @param { any } value
   * @returns { any }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7
   */
  /**
   * 只需使用生成tsbundle
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
 * 位置和尺寸类型，用于描述组件的位置和宽高。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RectResult {

  /**
   * 水平方向横坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  x: number;

  /**
   * 竖直方向纵坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  y: number;

  /**
   * 内容宽度大小。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  width: number;

  /**
   * 内容高度大小。
   *
   * 单位：vp
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
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CaretOffset {

  /**
   * 获取CaretOffset的索引
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * 获取CaretOffset的索引
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Get the x of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Get the x of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * 获取相对位置的y。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * 获取相对位置的y。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
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
 * @stagemodelonly
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
   * @stagemodelonly
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
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Get the index and relative position of the CaretOffset.
   *
   * <p><strong>NOTE</strong>:
   * <br>If this API is called when the caret position is updated in the current frame, it will not take effect.
   * <br>For the Search component, the returned position information is the offset of the first character
   * relative to the search icon in the component.
   * <br>If no text is entered in the Search component,
   * the return value contains the position information relative to the component.
   * <br>The location information in the return value is the location of the caret relative to the editable component.
   * </p>
   *
   * @returns { CaretOffset } index and relative position of the CaretOffset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Get the start and end positions of the text content.
   *
   * <p><strong>NOTE</strong>:
   * <br>If no text is entered, the return value contains the position information, but the size is 0.
   * <br>The position information is the offset of the first character relative to the editable area.
   * <br>For the Search component, the returned position information is the offset of the first character
   * relative to the search icon in the component.
   * <br>If there is input, the width in the return value is the fixed width of the editable area.
   * </p>
   *
   * @returns { RectResult } Text content rect.The unit of the return value is pixel.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Get the lines number of the text content.
   * The getTextContentLineCount type is used to obtain the number of lines of the edited text.
   *
   * @returns { number } Text content line count
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  addText(text: string, textOperationOptions?: TextContentControllerOptions): number;

  /**
   * 设置提示文本的样式。
   *
   * @param { StyledString } styledString - 设置提示文本样式的属性字符串
   *    若传入的入参无效，则本接口不生效
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  setStyledPlaceholder(styledString: StyledString): void;

  /**
   * Delete text in TextRange.
   *
   * @param { TextRange } [range] - range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getSelection(): TextRange;

  /**
   * Clear the content of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  /**
   * Clear the content of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  clearPreviewText(): void;

  /**
   * Gets the text content of the selected range.
   *
   * @param { TextRange } [range] - selected range.
   * @returns { string } text content of the selected range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  getText(range?: TextRange): string;

  /**
   * 删除输入框文本末尾字符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  deleteBackward(): void;

  /**
   * 将输入框文本滚动到可见区。
   *
   * @param { TextRange } [range] - 可见区范围。
   * 若该参数非法，则本方法不会生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  scrollToVisible(range?: TextRange): void;
}

/**
 * Enum of scrollable containers' content clip mode.
 *
 * @enum { number }
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
   * Scrollbar status.
   *
   * @param { BarState } barState - Scrollbar status.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBarColor(color: Color | number | string): T;

  /**
   * Sets the scrollbar color.
   *
   * @param { Color | number | string | Resource } color - Scrollbar color.
   *     <br>Default value: <em>'\#182431'</em> (40% opacity)
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
   * Width of the scrollbar.
   *
   * @param { number | string } value  - Width of the scrollbar.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  scrollBarWidth(value: number | string): T;

  /**
   * 设置滚动条宽度。
   *
   * @param { number | string | Resource } value - 滚动条宽度。
   *     <br>
   *     单位：vp
   *     <br>默认值：<em>4</em>
   *     <br>如果设置为小于0的值，则使用默认值。
   *     值<em>0</em>表示不显示滚动条。
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
   * 设置滚动条自动调整margin以避让组件的padding、safeAreaPadding、contentStartOffset/contentEndOffset。
   *
   * @param { boolean | undefined } enable - 是否启用自动调整滚动条边距。
   *     <br>默认值：false。
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoAdjustScrollBarMargin(enable: boolean | undefined): T;

  /**
   * Edge scrolling effect.
   *
   * @param { EdgeEffect } edgeEffect - edge scrolling effect.
   * @param { EdgeEffectOptions } options - edge scrolling effect options.
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
   * Nested scrolling options.
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
   * Whether to support scroll gestures by finger or mouse.
   *
   * @param { boolean } value - Whether to support scroll gestures by finger or mouse.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  enableScrollInteraction(value: boolean): T;

  /**
   * friction coefficient.
   *
   * @param { number | Resource } value - friction coefficient.
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
   * 设置从内容结尾到可滚动显示区域边界的偏移量。
   *
   * @param { number | Resource } offset - 从内容末尾到可滚动显示区域边界的偏移量。
   * <br>默认值：<em>0</em>
   * <br>单位：vp
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentEndOffset(offset: number | Resource): T;

  /**
   * 启用鼠标左键按住并拖动滚动。
   *
   * @param { boolean | undefined } enabled - 启用鼠标左键按住并拖动滚动。
   *     <br>默认值：false。
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
   * scrollOffset is offset per frame scrolling, ScrollState is current scroll state.
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
   * @param { OnWillStopDraggingCallback } handler - callback of end dragging,
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
   * Called when the scrollable reaches the start position.
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
   * Called when the scrollable reaches the end position.
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
   * Called when the scrollable starts scrolling.
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
   * Called when the scrollable stops scrolling.
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
   * Limit the max speed when fling.
   *
   * @param { number } speedLimit - Max fling speed, the minimum value is 0, the maximum value is not limited.
   *                                The unit is vp/s.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * Controls whether the scrollable scrolls back to top when status bar is clicked.
   *
   * @param { boolean } backToTop - whether the scrollable scrolls back to top when status bar is clicked.
   * The default value is false.
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  backToTop(backToTop: boolean): T;

  /**
   * 设置滚动条滑轨高度。
   *
   * @param { LengthMetrics | undefined } height - 滚动条滑轨高度
   *     <br>取值应≥0，如果设置为undefined或小于0的值，则使用默认值.
   *     如果设置为0，则不显示滚动条。 默认值： 适应可滚动组件的高度。
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ScrollResult {

  /**
   * Actual offset by which the scrollable scrolls in vp.
   * @type { number }
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
 * @typedef { function } OnWillScrollCallback
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
 * @typedef { function } OnScrollCallback
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
 * 定义在onItemDragStart中使用的回调类型。
 *
 * @typedef { function } OnItemDragStartCallback
 * @param { ItemDragInfo } event - 被拖拽项的信息。
 * @param { number } itemIndex - 拖动项的索引号。
 * @returns { CustomBuilder }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: number) => CustomBuilder;

/**
 * 定义EditModeOptions的onGetPreviewBadge中使用的回调类型。
 *
 * @typedef { function } OnGetPreviewBadgeCallback
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
 * @typedef { function } OnWillStopDraggingCallback
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
 * @typedef { function } OnDidStopDraggingCallback
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
 * 定义onScrollIndex的回调类型。
 *
 * @typedef {function} OnVisibleIndexesChangeCallback
 * @param { int } start - 可见区域的第一个索引号。
 * @param { int } end - 可见区域的最后一个索引号。
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
 * @typedef { function } OnMoveHandler
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
 * 定义拖拽事件
 *
 * @interface ItemDragEventHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ItemDragEventHandler {

  /**
   * 当项目被长按时触发此回调。
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onLongPress?: Callback<number>;

  /**
   * 当项目被拖动时，会触发此回调。
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDragStart?: Callback<number>;

  /**
   * 当项目通过其他项目移动时，会触发此回调。
   *
   * @type { ?OnMoveHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onMoveThrough?: OnMoveHandler;

  /**
   * 当项目被释放时，会触发此回调。
   *
   * @type { ?Callback<number> }
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
   * Set the move action.
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
   * 设置移动动作
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
}

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
   * @type { ?number }
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
 * @enum { number }
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
  END = 2
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
   * If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
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
   * If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
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
   * If the main axis is horizontal, it indicates width.
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
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(index: number, childSize: number): void;
}

/**
 * 定义编辑模式选项
 *
 * @interface EditModeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface EditModeOptions {

  /**
   * 定义当项目被长按上下文菜单时，是否在网格或列表中收集选定项目。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  enableGatherSelectedItemsAnimation?: boolean;

  /**
   * 调用以返回是否显示数字脚本或在上下文菜单预览的角标上显示的数字。如果未设置，将使用显示范围内的选定项的数量作为角标。
   * 返回false表示不显示角标。
   * 返回true表示使用显示范围内的选定项的数量。
   * 返回一个数字以包括显示范围之外的选定项。
   *
   * @type { ?OnGetPreviewBadgeCallback } onGetPreviewBadge
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onGetPreviewBadge?: OnGetPreviewBadgeCallback;

  /**
   * 使用默认的多选样式。
   * {@code true}表示进入多选状态后为GridItem或ListItem显示复选框。
   * {@code false}表示进入多选状态后没有默认样式。
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  useDefaultMultiSelectStyle?: boolean;

  /**
   * 启用双指滑动多选。
   * {@code true}表示双指滑动可以进入编辑模式，进行多选操作。
   * {@code false}表示两指滑动不支持多指滑动。
   *
   * @type { ?boolean }
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
 * 背景亮度选项。
 * 
 * > **说明：**
 * >
 * > 对于组件背景内容，每个像素自身的亮度（灰阶值）的计算公式为：
 * > >  `Y = （0.299R + 0.587G + 0.114B）/ 255.0`（R、G、B分别表示像素红色、绿色和蓝色通道的值，Y表示灰阶值），通过上述公式将像素点的灰阶值归一化至0~1的范围。
 * > >  每个像素的亮度提升计算公式为：`ΔY = -rate*Y + lightUpDegree`。例如，当rate=0.5，lightUpDegree=0.5时，对于灰阶值为0.2的像素点，亮度增加值为
 * > `-0.5*0.2 + 0.5 = 0.4`，对于灰阶值为1的像素点，亮度增加值为`-0.5*1 + 0.5 = 0`。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BackgroundBrightnessOptions {

  /**
   * 亮度变化速率。亮度变化速率越大，提亮程度下降速度越快。若rate为0，则lightUpDegree将不生效，即不会产生任何提亮效果。
   * 
   * 默认值：0.0 
   * 
   * 取值范围：(0.0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  rate: number;

  /**
   * 提亮程度。提亮程度越大，亮度提升程度越大。
   * 
   * 默认值：0.0 
   * 
   * 取值范围：[-1.0, 1.0]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  lightUpDegree: number;
}

/**
 * 通过设置光源和被照亮的类型实现点光源照亮周围组件的UI效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface PointLightStyle {

  /**
   * 设置光源属性，光源会影响到周围标记为可以被照亮的组件，并在组件上产生光效。
   *
   * 默认值：无光源
   *
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  lightSource?: LightSource;

  /**
   * 设置当前组件是否可以被光源照亮，以及被照亮的类型。
   *
   * 默认值：IlluminatedType.NONE
   *
   * @default IlluminatedType.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  illuminated?: IlluminatedType;

  /**
   * 设置组件的发光强度，取值范围为[0, 1]，超出取值范围时会转换为默认值。
   *
   * 默认值：0
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
 * 一个组件支持添加1个光源。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface LightSource {

  /**
   * 光源相对于当前组件的X坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  positionX: Dimension;

  /**
   * 光源相对于当前组件的Y坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  positionY: Dimension;

  /**
   * 光源高度。光源越高，照射范围越大。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  positionZ: Dimension;

  /**
   * 光源强度，建议取值范围0-1。当光源强度为0时，光源不发光。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  intensity: number;

  /**
   * 光源颜色。
   *
   * 默认值：Color.White
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  color?: ResourceColor;
}

/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defining wrapBuilder function.
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
 * 定义mutableBuilder中使用的回调类型。
 *
 * @typedef { function } BuilderCallback
 * @param { Args } args - MutableBuilder的参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamiconly
 */
declare type BuilderCallback = (...args: Args) => void;

/**
 * 定义mutableBuilder函数。
 *
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
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WrappedBuilder<Args extends Object[]> {

  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
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
 * 定义MutableBuilder类。
 *
 * @extends WrappedBuilder<Args>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamiconly
 */
declare class MutableBuilder<Args extends Object[]> extends WrappedBuilder<Args> {}

/**
 * 动画选项设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface KeyframeAnimateParam {
  /**
   * 动画的整体延时时间，单位为ms（毫秒），默认不延时播放。
   * 
   * 默认值：0
   * 
   * **说明：** 
   * 
   *  delay>=0为延迟播放，delay<0表示提前播放。对于delay<0的情况：当delay的绝对值小于实际动画时长，动画将在开始后第一帧直接运动到delay绝对值的时刻的状态；当delay的绝对值大于等于实际动画时长，动画将
   * 在开始后第一帧直接运动到终点状态。其中实际动画时长等于单次动画时长乘以动画播放次数。
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
   * 动画播放次数。默认播放一次，设置为-1时表示无限次播放。设置为0时表示无动画效果。
   * 
   * 默认值：1
   * 
   * **取值范围：**[-1, +∞)
   * 
   * **说明：**
   * 
   * - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
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
   * 动画播放完成回调。当keyframe动画所有次数播放完成后调用。在设置的开发者选项中关闭过渡动画，或UIAbility从前台切换至后台时会立即结束仍在播放中的有限循环keyframe动画，触发播放完成回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFinish?: () => void;

  /**
   * 设置动画的期望帧率。
   * 
   * **默认值：**{min:0, max:0, expected:0}，即跟随应用帧率。
   * 
   * **说明：** 
   * 
   * 开发者通过设置有效的期望帧率后，系统会收集设置的请求帧率，进行决策和分发，在渲染管线上进行分频，尽量能够满足开发者的期望帧率。开发者设置的期望帧率值不能代表最终实际效果，会受限于系统能力和屏幕刷新率。
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
 * 设置关键帧选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface KeyframeState {
  /**
   * 该段关键帧动画的持续时间，单位为毫秒。
   * 
   * 取值范围：[0, +∞)
   * 
   * **说明：**
   * 
   * - 设置小于0的值时按0处理。
   * 
   * - 设置浮点型的值时，向下取整。例如，设置值为1.2，按照1处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  duration: number;

  /**
   * 该关键帧使用的动画曲线。
   * 
   * 推荐以Curve或ICurve形式指定。
   * 
   * 当类型为string时，为动画插值曲线，取值参考
   * [AnimateParam](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#animateparam对象说明)的curve参数。
   * 
   * 默认值：Curve.EaseInOut
   * 
   * **说明：**
   * 
   * 由于[springMotion]{@link @ohos.curves:curves.springMotion}、
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}、
   * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}曲线时长不生效，故不支持这三种曲线。
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
   * 指定在该关键帧时刻状态的闭包函数，即在该关键帧时刻要达到的状态。
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
 * 定义基础的回调函数。
 *
 * @typedef Callback<T, V = void>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Callback<T, V = void> {

  /**
   * 定义回调函数的信息。
   *
   * @param { T } data - 将会在回调函数中被使用的数据
   * @returns { V } - 返回回调函数的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  (data: T): V;
}

/**
 * hover事件的回调类型。
 *
 * @param { boolean } isHover - 是否处于hover状态，true表示处于hover状态，false表示不在hover状态。
 * @param { HoverEvent} event - 获取鼠标或手写笔悬浮的位置坐标。
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
 * @typedef { function } AccessibilityCallback
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
 * @typedef { function } AccessibilityTransparentCallback
 * @param { TouchEvent } event - The value of event contains information about original accessibility hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type AccessibilityTransparentCallback = (event: TouchEvent) => void;

/**
 * 关于区域变化相关的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface VisibleAreaEventOptions {

  /**
   * 阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；
   * 如果设置的阈值大于1.0，则实际取值为1.0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ratios: Array<number>;

  /**
   * 定义了开发者期望的计算间隔，单位为ms。当该字段小于100或为NaN时，默认取值为100；当该字段大于2^31-1时，默认取值为2^31-1。
   * 
   * 默认值：1000
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
   * 设置可见区域计算模式。
   * 
   * 当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的[clip]{@link CommonMethod#clip(value: boolean)} 属性设置。如果父组件的
   * [clip]{@link CommonMethod#clip(value: boolean)}为false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的
   * [clip]{@link CommonMethod#clip(value: boolean)}设置为true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。而当measureFromViewport设置
   * 为false时，则不考虑[clip]{@link CommonMethod#clip(value: boolean)}的影响，直接将组件超出父组件的部分视为不可见区域。
   * 
   * 默认值：false 
   * 
   * measureFromViewport设置为true时，祖先节点设置[scale]{@link CommonMethod#scale(value: ScaleOptions)}属性，组件可见比例会被正确计算。
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
 * 组件可见区域变化事件的回调类型。
 *
 * @param { boolean } isVisible - 视组件的可见面积与自身面积的比值与上一次回调相比的情况而定，比值变大为true，比值变小为false。 [since 12 - 12]
 * @param { boolean } isExpanding - 视组件的可见面积与自身面积的比值与上一次回调相比的情况而定，比值变大为true，比值变小为false。 [since 13]
 * @param { number } currentRatio - 触发回调时，组件可见面积与自身面积的比值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;

/**
 * 用于设置基础事件回调。方法入参为undefined的时候，重置对应的事件回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UICommonEvent {

  /**
   * 设置[点击事件]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)}的回调。
   *
   * @param { Callback<ClickEvent> | undefined } callback - 点击事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnClick(callback: Callback<ClickEvent> | undefined): void;

  /**
   * 设置[触摸事件]{@link CommonMethod#onTouch(event: (event: TouchEvent) => void)}的回调。
   *
   * @param { Callback<TouchEvent> | undefined } callback - 触摸事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnTouch(callback: Callback<TouchEvent> | undefined): void;

  /**
   * 设置[onAppear]{@link CommonMethod#onAppear}挂载显示事件的回调。
   *
   * @param { Callback<void> | undefined } callback - 挂载显示事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnAppear(callback: Callback<void> | undefined): void;

  /**
   * 设置[onDisAppear]{@link CommonMethod#onDisAppear}卸载消失事件的回调。
   *
   * @param { Callback<void> | undefined } callback - 卸载消失事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnDisappear(callback: Callback<void> | undefined): void;

  /**
   * 设置[按键事件]{@link common}的回调。
   *
   * @param { Callback<KeyEvent> | undefined } callback - 按键事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;

  /**
   * 设置[onFocus]{@link CommonMethod#onFocus}获焦事件的回调。
   *
   * @param { Callback<void> | undefined } callback - 获焦事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnFocus(callback: Callback<void> | undefined): void;

  /**
   * 设置[onBlur]{@link CommonMethod#onBlur}失焦事件的回调。
   *
   * @param { Callback<void> | undefined } callback - 失焦事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnBlur(callback: Callback<void> | undefined): void;

  /**
   * 设置[onHover]{@link CommonMethod#onHover}悬浮事件的回调。
   *
   * @param { HoverCallback | undefined } callback - 悬浮事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnHover(callback: HoverCallback | undefined): void;

  /**
   * 设置[onMouse]{@link CommonMethod#onMouse}鼠标事件的回调。
   *
   * @param { Callback<MouseEvent> | undefined } callback - 鼠标事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnMouse(callback: Callback<MouseEvent> | undefined): void;

  /**
   * 设置[onSizeChange]{@link CommonMethod#onSizeChange}组件区域变化事件的回调。
   *
   * @param { SizeChangeCallback | undefined } callback - 组件区域变化事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOnSizeChange(callback: SizeChangeCallback | undefined): void;

  /**
   * 设置限制回调间隔的
   * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
   * 可见区域变化事件的回调。
   *
   * @param { VisibleAreaEventOptions } options - 可见区域变化相关的参数。
   * @param { VisibleAreaChangeCallback | undefined } event - 可见区域变化事件的回调函数。当组件可见面积与自身面积的比值接近options中设置的阈值时触发该回调。
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
 * @extends UICommonEvent
 * @interface UIScrollableCommonEvent
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
 * 用于设置组件绑定的手势。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UIGestureEvent {

  /**
   * 添加手势。
   *
   * @param { GestureHandler<T> } gesture - 手势处理器对象。
   * @param { GesturePriority } priority - 绑定手势的优先级。<br>默认值：GesturePriority.NORMAL
   * @param { GestureMask } mask - 事件响应设置。<br>默认值：GestureMask.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void;

  /**
   * 绑定可与子组件手势同时触发的手势。
   *
   * @param { GestureHandler<T> } gesture - 手势处理器对象。
   * @param { GestureMask } mask - 事件响应设置。<br>默认值：GestureMask.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void;

  /**
   * 移除该组件上通过modifier绑定的设置为指定标志的手势。
   *
   * @param { string } tag - 手势处理器标志。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeGestureByTag(tag: string): void;

  /**
   * 清除该组件上通过modifier绑定的所有手势。
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
 * 开发者需要自定义class实现GestureModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GestureModifier {

  /**
   * 手势更新函数。
   *
   * 开发者可根据需要自定义实现该方法，对组件设置需要绑定的手势，支持使用if/else语法进行动态设置。若在当次手势操作过程中触发了组件上的手势动态切换，该切换效果在当次手势结束（所有手指抬起）后的下一次手势操作中生效。
   *
   * @param { UIGestureEvent } event - UIGestureEvent对象，用于设置组件需要绑定的手势。
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
 * @interface SelectionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menuPolicy?: MenuPolicy;
}

/**
 * 设置对应的按键对应的走焦目的组件，缺省则遵循默认走焦规则。
 * 
 * > **说明：**
 * >
 * > 直接使用focusControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取
 * > [UIContext]{@link @ohos.arkui.UIContext:UIContext}实例，并使用
 * > [getFocusController]{@link @ohos.arkui.UIContext:UIContext#getFocusController}获取绑定实例的focusControl。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface FocusMovement {

  /**
   * 通过tab键走焦到组件的id。
   * 
   * 默认值为重置forward为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  forward?: string;

  /**
   * 通过shift+tab键走焦到组件的id。
   * 
   * 默认值为重置backward为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backward?: string;

  /**
   * 通过方向键上键走焦到组件的id。
   * 
   * 默认值为重置up为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  up?: string;

  /**
   * 通过方向键下键走焦到组件的id。
   * 
   * 默认值为重置down为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  down?: string;

  /**
   * 通过方向键左键走焦到组件的id。
   * 
   * 默认值为重置left为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  left?: string;

  /**
   * 通过方向键右键走焦到组件的id。
   * 
   * 默认值为重置right为空。
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
 * enum keyboard avoid mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum KeyboardAvoidMode {

  /**
   * Defines avoid keyboard when keyboard shows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Defines not avoid keyboard when keyboard shows.
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
 * 悬停态显示区域类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum HoverModeAreaType {

  /**
   * 上半屏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  TOP_SCREEN = 0,

  /**
   * 下半屏。
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
 * @interface DateRange
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
   * @type { ?Date }
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
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  end?: Date;
}

/**
 * 输入事件拦截结果接口，用于监听器回调[InputEventListener]{@link InputEventListener}返回是否拦截的决策。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface InputEventInterceptResult {

  /**
   * 输入事件拦截动作。
   * 
   * CONTINUE：允许事件继续传递到UI框架。
   * 
   * BLOCK：阻止事件传递到UI框架。
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
 * 输入事件监听器标识对象。
 * 
 * 此对象由系统创建并返回，作为监听器的唯一标识。
 * 
 * > **说明：**
 * >
 * > - 对象为空对象，不包含任何可访问的成员。
 * >
 * > - 开发者无法主动构造此对象，只能通过[addLocalInputEventMonitor]{@link UIContext:UIContext#addLocalInputEventMonitor}接口注册获取。
 * >
 * > - 用于后续解除注册时验证身份。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface InputEventMonitor {}

/**
 * 原始输入事件包装器类。
 * 
 * 提供统一的接口来访问不同类型的输入事件，确保类型安全和向后兼容性。
 * 
 * 此类封装了原始的MouseEvent、TouchEvent或KeyEvent对象，并通过类型安全的方法访问。
 * 
 * 此类为抽象类，开发者无法自行创建实例。系统会在触发输入事件监听器时自动创建实例并传递回调函数。
 * 
 * > **说明：**
 * >
 * > 由于监听器在事件派发给具体组件之前执行，事件中的一些字段将无法提供有效值：如触发对象[target]{@link EventTarget}、相对于组件的坐标
 * > [x]{@link MouseEvent#x}和[y]{@link MouseEvent#y}、[getCurrentLocalPosition]{@link TouchObject#getCurrentLocalPosition}和
 * > [stopPropagation]{@link TouchEvent#stopPropagation}方法、TouchEvent的[preventDefault]{@link TouchEvent#preventDefault}和
 * > [getHistoricalPoints]{@link TouchEvent#getHistoricalPoints}方法以及KeyEvent的[metaKey]{@link KeyEvent#metaKey}属性和
 * > [getModifierKeyState]{@link KeyEvent#getModifierKeyState}方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare abstract class RawInputEventWrapper {

  /**
   * 判断是否为鼠标事件。
   *
   * @returns { boolean } 判断是否为鼠标事件，如果是鼠标事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isMouseEvent(): boolean;

  /**
   * 判断是否为触摸事件。
   *
   * @returns { boolean } 判断是否为触摸事件，如果是触摸事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isTouchEvent(): boolean;

  /**
   * 判断是否为按键事件。
   *
   * @returns { boolean } 判断是否为按键事件，如果是按键事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isKeyEvent(): boolean;

  /**
   * 获取鼠标事件。
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
   * 获取触摸事件。
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
   * 获取按键事件。
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
 * 输入事件监听器回调函数类型。
 * 
 * > **说明：**
 * >
 * > - RawInputEventWrapper是抽象类，开发者无法使用`new`运算符创建实例。
 * >
 * > - 系统会在事件触发时自动创建实例并通过此参数传递给回调函数。
 * >
 * > - 当前回调参数event仅会封装以下原始输入事件类型：
 * > [MouseEvent]{@link MouseEvent}、[TouchEvent]{@link TouchEvent}、[KeyEvent]{@link KeyEvent}。开发者可通过
 * > [asMouseEvent]{@link RawInputEventWrapper#asMouseEvent}、[asTouchEvent]{@link RawInputEventWrapper#asTouchEvent}、
 * > [asKeyEvent]{@link RawInputEventWrapper#asKeyEvent}获取对应事件对象。
 * >
 * > - 请勿在回调中执行耗时操作（如复杂计算或网络请求），否则可能导致应用卡顿。
 * >
 * > - 监听器在UI线程中同步执行会直接阻塞事件处理流程。建议只进行简单的判断和计算。
 *
 * @param { RawInputEventWrapper } event - 输入事件包装器，系统自动创建和传递，开发者无需手动创建。
 * @returns { InputEventInterceptResult } 事件拦截结果。
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
* 定义边缘流光效果参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface EdgeLightParams {

  /**
   * 边缘流光位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  position: EdgeLightPosition;

  /**
   * 沿流动方向的边缘流光的投影长度（不支持百分比）。
   *
   * 取值范围：[0, +∞)
   *
   * 单位：vp
   *
   * **说明：**
   *
   * 设置小于0的值时，按值为0处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  length: Length;

  /**
   * 边缘流光效果的发光强度。
   *
   * 取值范围：[0, 1]
   *
   * 默认值：1
   *
   * **说明：**
   *
   * 值为0时，流光效果完全不可见。
   *
   * 值为1时，流光效果达到最大亮度。
   *
   * 设置大于1的值时，按值为1处理。
   *
   * 设置小于0的值时，按值为0处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  intensity?: double;

  /**
   * 边缘流光颜色。
   *
   * 默认值：#FFFFFF，显示为白色。
   *
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  color?: ResourceColor;

  /**
   * 边缘流光线条粗细（不支持百分比）。
   *
   * 取值范围：[0, +∞)
   *
   * 单位：vp
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 设置小于0的值时，按值为0处理。
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
 * 定义引力中心的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface GravityCenterOptions {

  /**
   * 指定当前组件是否为引力中心。 默认值： 非。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  gravityCenter?: boolean;

  /**
   * 定义引力中心吸引力/排斥力的引力强度。 负数是排斥力，正数是吸引力。 默认值： 0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  gravityIntensity?: double;
}

/**
 * 智慧手势响应行为配置对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface SmartGestureShortcutOptions {

  /**
   * 智慧手势响应优先级。当前仅支持GestureShortcut.PRIMARY。
   * 
   * 当未显式传入该参数或参数异常时，会清空当前组件的智慧手势响应行为配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: GestureShortcut;

  /**
   * 当前组件是否响应智慧手势。
   * 
   * true表示组件响应智慧手势，false表示组件不响应智慧手势。
   * 
   * 默认值为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enabled?: boolean;

  /**
   * 组件被智慧手势操作选中后是否展示并保留选中态。
   * 
   * true表示显示选中框，false表示不显示选中框。
   * 
   * 当enabled为true时，默认值为true；当enabled为false时，默认值为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectable?: boolean;
}