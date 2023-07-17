/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Defining Component ClassDecorator
 * @since 7
 */
/**
 * Defining Component ClassDecorator
 * @form
 * @since 9
 */
/**
 * Defining Component ClassDecorator
 * @form
 * @crossplatform
 * @since 10
 */
declare const Component: ClassDecorator;

/**
 * Defines the options of Entry ClassDecorator.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface EntryOptions {
  /**
   * Named route name.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { ?string }
   * @since 10
   */
  routeName? : string,

  /**
   * LocalStorage to be passed.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { ?LocalStorage }
   * @since 10
   */
  storage? : LocalStorage,
}

/**
 * Defines Entry ClassDecorator.
 * @returns { ClassDecorator } Entry is a ClassDecorator.
 * @since 7
 */
/**
 * Defines Entry ClassDecorator.
 * @returns { ClassDecorator & ((storage?: LocalStorage) => ClassDecorator) }
 * Entry is a ClassDecorator and it supports LocalStorage as parameters.
 * @form
 * @since 9
 */
/**
 * Defines Entry ClassDecorator.
 * @returns { ClassDecorator & ((options?: LocalStorage | EntryOptions) => ClassDecorator) }
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Entry: ClassDecorator & ((options?: LocalStorage | EntryOptions) => ClassDecorator);

/**
 * Defining Observed ClassDecorator.
 * @since 7
 */
/**
 * Defining Observed ClassDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Observed ClassDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Observed: ClassDecorator;

/**
 * Defining Preview ClassDecorator.
 * @since 7
 */
/**
 * Defining Preview ClassDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Preview ClassDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);

/**
 * Defining BuilderParam PropertyDecorator
 * @since 7
 */
/**
 * Defining BuilderParam PropertyDecorator
 * @form
 * @since 9
 */
/**
 * Defining BuilderParam PropertyDecorator
 * @form
 * @crossplatform
 * @since 10
 */
declare const BuilderParam: PropertyDecorator;

/**
 * Defining State PropertyDecorator.
 * @since 7
 */
/**
 * Defining State PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining State PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const State: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 * @since 7
 */
/**
 * Defining Prop PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Prop PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 * @since 7
 */
/**
 * Defining Link PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Link PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 * @since 7
 */
/**
 * Defining ObjectLink PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining ObjectLink PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const ObjectLink: PropertyDecorator;

/**
 * Defining Provide PropertyDecorator.
 * @since 7
 */
/**
 * Defining Provide PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Provide PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Provide: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining Consume PropertyDecorator.
 * @since 7
 */
/**
 * Defining Consume PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Consume PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining StorageProp PropertyDecorator.
 * @since 7
 */
/**
 * Defining StorageProp PropertyDecorator.
 * @crossplatform
 * @since 10
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 * @since 7
 */
/**
 * Defining StorageLink PropertyDecorator.
 * @crossplatform
 * @since 10
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 * @since 7
 */
/**
 * Defining Watch PropertyDecorator.
 * @form
 * @since 9
 */
/**
 * Defining Watch PropertyDecorator.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Watch: (value: string) => PropertyDecorator;

/**
 * Defining Builder MethodDecorator
 * @since 7
 */
/**
 * Defining Builder MethodDecorator
 * @form
 * @since 9
 */
/**
 * Defining Builder MethodDecorator
 * @form
 * @crossplatform
 * @since 10
 */
declare const Builder: MethodDecorator;

/**
 * Defining Styles MethodDecorator
 * @since 8
 */
/**
 * Defining Styles MethodDecorator
 * @form
 * @since 9
 */
/**
 * Defining Styles MethodDecorator
 * @form
 * @crossplatform
 * @since 10
 */
declare const Styles: MethodDecorator;

/**
 * Defining Extend MethodDecorator
 * @since 7
 */
/**
 * Defining Extend MethodDecorator
 * @form
 * @since 9
 */
/**
 * Defining Extend MethodDecorator
 * @form
 * @crossplatform
 * @since 10
 */
declare const Extend: MethodDecorator & ((value: any) => MethodDecorator);

/**
 * Define AnimatableExtend MethodDecorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
 declare const AnimatableExtend: MethodDecorator & ((value: Object) => MethodDecorator);

 /**
  * Define AnimatableArithmetic interface
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 10
  */
 declare interface AnimatableArithmetic<T> {
   /**
    * Define plus method
    * @param rhs { AnimatableArithmetic<T> } another value
    * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 10
    */
   plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

   /**
    * Define subtract method
    * @param rhs { AnimatableArithmetic<T> } another value
    * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
   * @since 10
    */
   subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

   /**
    * Define multiply method
    * @param scale { number } scale value
    * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 10
    */
   multiply(scale: number): AnimatableArithmetic<T>;

   /**
    * Define equals method
    * @param rhs { AnimatableArithmetic<T> } another value
    * @returns { boolean } is equals
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 10
    */
   equals(rhs: AnimatableArithmetic<T>): boolean;
 }

/**
 * Defining Concurrent MethodDecorator
 * @since 9
 */
/**
 * Defining Concurrent MethodDecorator
 * @crossplatform
 * @since 10
 */
declare const Concurrent: MethodDecorator;

/**
 * Defining  CustomDialog ClassDecorator
 * @since 7
 */
/**
 * Defining  CustomDialog ClassDecorator
 * @crossplatform
 * @since 10
 */
declare const CustomDialog: ClassDecorator;

/**
 * Defining LocalStorageLink PropertyDecorator.
 * @since 9
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 * @crossplatform
 * @since 10
 */
declare const LocalStorageLink: (value: string) => PropertyDecorator;

/**
 * Defining LocalStorageProp PropertyDecorator
 * @form
 * @since 9
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 * @form
 * @crossplatform
 * @since 10
 */
declare const LocalStorageProp: (value: string) => PropertyDecorator;

/**
 * Obtains the Context object associated with a component on the page.
 * @param { Object } component - indicate the component on the page.
 * @StageModelOnly
 * @since 9
 */
/**
 * Obtains the Context object associated with a component on the page.
 * @param { Object } component - indicate the component on the page.
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
declare function getContext(component?: Object): Context;

/**
 * Defining Reusable ClassDecorator.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Reusable: ClassDecorator;

/**
 * Get context.
 * @StageModelOnly
 * @since 9
 */
/**
 * Get context.
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
declare type Context = import('../api/application/Context').default;

/**
 * Post Card Action.
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @form
 * @StageModelOnly
 * @since 9
 */
/**
 * Post Card Action.
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @form
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
declare function postCardAction(component: Object, action: Object): void;

/**
 * Defines the data type of the interface restriction.
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface Configuration {
  /**
   * Set colorMode.
   * @since 7
   */
  /**
   * Set colorMode.
   * @form
   * @since 9
   */
  /**
   * Set colorMode.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly colorMode: string;

  /**
   * Set fontScale.
   * @since 7
   */
  /**
   * Set fontScale.
   * @form
   * @since 9
   */
  /**
   * Set fontScale.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly fontScale: number;
}

/**
 * Defines the data type of the interface restriction.
 * @since 8
 */
/**
 * Defines the data type of the interface restriction.
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface Rectangle {
  /**
   * x:Horizontal coordinate
   * @since 8
   */
  /**
   * x:Horizontal coordinate
   * @form
   * @since 9
   */
  /**
   * x:Horizontal coordinate
   * @form
   * @crossplatform
   * @since 10
   */
  x?: Length;

  /**
   * y:Vertical axis coordinate.
   * @since 8
   */
  /**
   * y:Vertical axis coordinate.
   * @form
   * @since 9
   */
  /**
   * y:Vertical axis coordinate.
   * @form
   * @crossplatform
   * @since 10
   */
  y?: Length;

  /**
   * Sets the width of the current touchRect.
   * @since 8
   */
  /**
   * Sets the width of the current touchRect.
   * @form
   * @since 9
   */
  /**
   * Sets the width of the current touchRect.
   * @form
   * @crossplatform
   * @since 10
   */
  width?: Length;

  /**
   * Sets the height of the current touchRect.
   * @since 8
   */
  /**
   * Sets the height of the current touchRect.
   * @form
   * @since 9
   */
  /**
   * Sets the height of the current touchRect.
   * @form
   * @crossplatform
   * @since 10
   */
  height?: Length;
}

/**
 * global $r function
 * @since 7
 */
/**
 * global $r function
 * @form
 * @since 9
 */
/**
 * global $r function
 * @form
 * @crossplatform
 * @since 10
 */
declare function $r(value: string, ...params: any[]): Resource;

/**
 * global $rawfile function
 * @since 7
 */
/**
 * global $rawfile function
 * @form
 * @since 9
 */
/**
 * global $rawfile function
 * @form
 * @crossplatform
 * @since 10
 */
declare function $rawfile(value: string): Resource;

/**
 * Defines the animate function params.
 * @since 7
 */
/**
 * Defines the animate function params.
 * @form
 * @since 9
 */
/**
 * Defines the animate function params.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface AnimateParam {
  /**
   * Animation duration, in ms.
   * @since 7
   */
  /**
   * Animation duration, in ms.
   * @form
   * @since 9
   */
  /**
   * Animation duration, in ms.
   * @form
   * @crossplatform
   * @since 10
   */
  duration?: number;
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   * @since 7
   */
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   * @crossplatform
   * @since 10
   */
  tempo?: number;
  /**
   * Animation curve.
   * @type { string | Curve}
   * @since 7
   */
  /**
   * Animation curve.
   * @type { string | Curve | ICurve}
   * @form
   * @since 9
   */
  /**
   * Animation curve.
   * @type { string | Curve | ICurve}
   * @form
   * @crossplatform
   * @since 10
   */
  curve?: Curve | string | ICurve;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @crossplatform
   * @since 10
   */
  delay?: number;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @crossplatform
   * @since 10
   */
  iterations?: number;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @form
   * @since 9
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @form
   * @crossplatform
   * @since 10
   */
  playMode?: PlayMode;

  /**
   * Callback invoked when the animation playback is complete.
   * @since 7
   */
  /**
   * Callback invoked when the animation playback is complete.
   * @form
   * @since 9
   */
  /**
   * Callback invoked when the animation playback is complete.
   * @form
   * @crossplatform
   * @since 10
   */
  onFinish?: () => void;
}

/**
 * Interface for curve object.
 * @form
 * @since 9
 */
/**
 * Interface for curve object.
 * @form
 * @crossplatform
 * @since 10
 */
interface ICurve {
  /**
   * Get curve value by fraction.
   * @form
   * @since 9
   */
  /**
   * Get curve value by fraction.
   * @form
   * @crossplatform
   * @since 10
   */
  interpolate(fraction: number): number;
}

/**
 * Defines the motion path options.
 * @since 7
 */
/**
 * Defines the motion path options.
 * @crossplatform
 * @since 10
 */
declare interface MotionPathOptions {
  /**
   * The path info.
   * @since 7
   */
  /**
   * The path info.
   * @crossplatform
   * @since 10
   */
  path: string;

  /**
   * The origin point info.
   * @since 7
   */
  /**
   * The origin point info.
   * @crossplatform
   * @since 10
   */
  from?: number;

  /**
   * The distance point info.
   * @since 7
   */
  /**
   * The distance point info.
   * @crossplatform
   * @since 10
   */
  to?: number;

  /**
   * The rotate info.
   * @since 7
   */
  /**
   * The rotate info.
   * @crossplatform
   * @since 10
   */
  rotatable?: boolean;
}

/**
 * Defines the shard transition function params.
 * @since 7
 */
/**
 * Defines the shard transition function params.
 * @crossplatform
 * @since 10
 */
declare interface sharedTransitionOptions {
  /**
   * Animation duration, in ms.
   * @since 7
   */
  /**
   * Animation duration, in ms.
   * @crossplatform
   * @since 10
   */
  duration?: number;

  /**
   * Animation duration, in ms.
   * @since 7
   */
  /**
   * Animation duration, in ms.
   * @crossplatform
   * @since 10
   */
  curve?: Curve | string;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @crossplatform
   * @since 10
   */
  delay?: number;

  /**
   * The motion path info.
   * @since 7
   */
  /**
   * The motion path info.
   * @crossplatform
   * @since 10
   */
  motionPath?: MotionPathOptions;

  /**
   * Z index info.
   * @since 7
   */
  /**
   * Z index info.
   * @crossplatform
   * @since 10
   */
  zIndex?: number;

  /**
   * the animate type.
   * @since 7
   */
  /**
   * the animate type.
   * @crossplatform
   * @since 10
   */
  type?: SharedTransitionEffectType;
}

/**
 * Defines the options of translate.
 * @since 7
 */
/**
 * Defines the options of translate.
 * @form
 * @since 9
 */
/**
 * Defines the options of translate.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface TranslateOptions {
  /**
   * The param of x direction.
   * @since 7
   */
  /**
   * The param of x direction.
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   * @form
   * @crossplatform
   * @since 10
   */
  x?: number | string;

  /**
   * The param of y direction.
   * @since 7
   */
  /**
   * The param of y direction.
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   * @form
   * @crossplatform
   * @since 10
   */
  y?: number | string;

  /**
   * The param of z direction.
   * @since 7
   */
  /**
   * The param of z direction.
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   * @form
   * @crossplatform
   * @since 10
   */
  z?: number | string;
}

/**
 * Defines the options of scale.
 * @since 7
 */
/**
 * Defines the options of scale.
 * @form
 * @since 9
 */
/**
 * Defines the options of scale.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface ScaleOptions {
  /**
   * The param of x direction.
   * @since 7
   */
  /**
   * The param of x direction.
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   * @form
   * @crossplatform
   * @since 10
   */
  x?: number;

  /**
   * The param of y direction.
   * @since 7
   */
  /**
   * The param of y direction.
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   * @form
   * @crossplatform
   * @since 10
   */
  y?: number;

  /**
   * The param of z direction.
   * @since 7
   */
  /**
   * The param of z direction.
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   * @form
   * @crossplatform
   * @since 10
   */
  z?: number;

  /**
   * The param of center point of x.
   * @since 7
   */
  /**
   * The param of center point of x.
   * @form
   * @since 9
   */
  /**
   * The param of center point of x.
   * @form
   * @crossplatform
   * @since 10
   */
  centerX?: number | string;

  /**
   * The param of center point of y.
   * @since 7
   */
  /**
   * The param of center point of y.
   * @form
   * @since 9
   */
  /**
   * The param of center point of y.
   * @form
   * @crossplatform
   * @since 10
   */
  centerY?: number | string;
}

/**
 * Defines the align rule options of relative container.
 * @form
 * @since 9
 */
/**
 * Defines the align rule options of relative container.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface AlignRuleOption {
  /**
   * The param of left align.
   * @form
   * @since 9
   */
  /**
   * The param of left align.
   * @form
   * @crossplatform
   * @since 10
   */
  left?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of right align.
   * @form
   * @since 9
   */
  /**
   * The param of right align.
   * @form
   * @crossplatform
   * @since 10
   */
  right?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of middle align.
   * @form
   * @since 9
   */
  /**
   * The param of middle align.
   * @form
   * @crossplatform
   * @since 10
   */
  middle?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of top align.
   * @form
   * @since 9
   */
  /**
   * The param of top align.
   * @form
   * @crossplatform
   * @since 10
   */
  top?: { anchor: string, align: VerticalAlign };

  /**
   * The param of bottom align.
   * @form
   * @since 9
   */
  /**
   * The param of bottom align.
   * @form
   * @crossplatform
   * @since 10
   */
  bottom?: { anchor: string, align: VerticalAlign };

  /**
   * The param of center align.
   * @form
   * @since 9
   */
    /**
   * The param of center align.
   * @form
   * @crossplatform
   * @since 10
   */
  center?: { anchor: string, align: VerticalAlign };
}

/**
 * The param of rotate.
 * @since 7
 */
/**
 * The param of rotate.
 * @form
 * @since 9
 */
/**
 * The param of rotate.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface RotateOptions {
  /**
   * The param of x direction.
   * @since 7
   */
  /**
   * The param of x direction.
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   * @form
   * @crossplatform
   * @since 10
   */
  x?: number;

  /**
   * The param of y direction.
   * @since 7
   */
  /**
   * The param of y direction.
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   * @form
   * @crossplatform
   * @since 10
   */
  y?: number;

  /**
   * The param of z direction.
   * @since 7
   */
  /**
   * The param of z direction.
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   * @form
   * @crossplatform
   * @since 10
   */
  z?: number;

  /**
   * The param of center point of x.
   * @since 7
   */
  /**
   * The param of center point of x.
   * @form
   * @since 9
   */
  /**
   * The param of center point of x.
   * @form
   * @crossplatform
   * @since 10
   */
  centerX?: number | string;

  /**
   * The param of center point of y.
   * @since 7
   */
  /**
   * The param of center point of y.
   * @form
   * @since 9
   */
  /**
   * The param of center point of y.
   * @form
   * @crossplatform
   * @since 10
   */
  centerY?: number | string;

  /**
   * The param of angle.
   * @since 7
   */
  /**
   * The param of angle.
   * @form
   * @since 9
   */
  /**
   * The param of angle.
   * @form
   * @crossplatform
   * @since 10
   */
  angle: number | string;
}

/**
 * Defines the param of transition.
 * @since 7
 * @deprecated since 10
 * @useinstead TransitionEffect
 */
declare interface TransitionOptions {
  /**
   * Defines the param of type.
   * @since 7
   */
  type?: TransitionType;
  /**
   * Defines the param of opacity.
   * @since 7
   */
  opacity?: number;
  /**
   * Defines the param of translate.
   * @since 7
   */
  translate?: TranslateOptions;
  /**
   * Defines the param of scale.
   * @since 7
   */
  scale?: ScaleOptions;
  /**
   * Defines the param of rotate.
   * @since 7
   */
  rotate?: RotateOptions;
}

/**
 * Defines the Edge object.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum TransitionEdge {
  /**
   * Top edge
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  TOP,

  /**
   * Bottom edge
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  BOTTOM,

  /**
   * Start edge
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  START,

  /**
   * End edge
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  END
}

/**
 * Defines all transition effects.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
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
 * Defines the transition effect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class TransitionEffect<
  Type extends keyof TransitionEffects = keyof TransitionEffects,
  Effect extends TransitionEffects[Type] = TransitionEffects[Type]
> {
  /**
   * Defines an identity transition effect
   * @constant
   * @type { TransitionEffect<"identity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static readonly IDENTITY: TransitionEffect<"identity">;

  /**
   * Defines an opacity transition effect
   * @constant
   * @type { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static readonly OPACITY: TransitionEffect<"opacity">;

  /**
   * Defines a slide transition effect
   * @constant
   * @type { TransitionEffect<"asymmetric"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static readonly SLIDE: TransitionEffect<
    "asymmetric",
    {
      appear: TransitionEffect<"move", TransitionEdge>;
      disappear: TransitionEffect<"move", TransitionEdge>;
    }
  >;

  /**
   * Defines a slide & switch transition effect
   * @constant
   * @type { TransitionEffect<"slideSwitch"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static readonly SLIDE_SWITCH: TransitionEffect<"slideSwitch">;

  /**
   * Creates a translate transition effect
   * @param { TranslateOptions } options translate options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static translate(options: TranslateOptions): TransitionEffect<"translate">;

  /**
   * Creates a rotation transition effect
   * @param { RotateOptions } options rotate options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static rotate(options: RotateOptions): TransitionEffect<"rotate">;

  /**
   * Creates a scale transition effect
   * @param { ScaleOptions } options scale options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static scale(options: ScaleOptions): TransitionEffect<"scale">;

  /**
   * Creates an opacity transition effect with alpha value
   * @param { number } alpha opacity alpha value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static opacity(alpha: number): TransitionEffect<"opacity">;

  /**
   * Creates a move transition effect
   * @param { TransitionEdge } edge the edge that component will move to
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static move(edge: TransitionEdge): TransitionEffect<"move">;

  /**
   * Creates an asymmetric transition effect
   * @param { TransitionEffect } appear the transition which will be attached when the component is appear
   * @param { TransitionEffect } disappear the transition which will be attached when the component is disappear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static asymmetric(
    appear: TransitionEffect,
    disappear: TransitionEffect
  ): TransitionEffect<"asymmetric">;

  /**
   * TransitionEffect constructor
   * @param { Type extends keyof TransitionEffects } type transition type
   * @param { Effect extends TransitionEffects[Type] } effect transition options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor(type: Type, effect: Effect);

  /**
   * Set the animation of current transition effect
   * @param { AnimateParam } value animation parameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  animation(value: AnimateParam): TransitionEffect;

  /**
   * Combines another transition effect
   * @param { TransitionEffect } transitionEffect transition effect which is be combined
   * @returns { TransitionEffect } combined transition effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  combine(transitionEffect: TransitionEffect): TransitionEffect;
}

/**
 * Define Preview property
 * @form
 * @since 9
 */
interface PreviewParams {
  /**
   * Define Preview title
   * @form
   * @since 9
   */
  title?: string;

  /**
   * Define Preview width
   * @form
   * @since 9
   */
  width?: number;

  /**
   * Define Preview height
   * @form
   * @since 9
   */
  height?: number;

  /**
   * Define Preview locale
   * @form
   * @since 9
   */
  locale?: string;

  /**
   * Define Preview colorMode
   * @form
   * @since 9
   */
  colorMode?: string;

  /**
   * Define Preview deviceType
   * @form
   * @since 9
   */
  deviceType?: string;

  /**
   * Define Preview dpi
   * @form
   * @since 9
   */
  dpi?: number;

  /**
   * Define Preview orientation
   * @form
   * @since 9
   */
  orientation?: string;

  /**
   * Define Preview roundScreen
   * @form
   * @since 9
   */
  roundScreen?: boolean;
}

/**
 * ItemDragInfo object description
 * @since 8
 */
/**
 * ItemDragInfo object description
 * @crossplatform
 * @since 10
 */
declare interface ItemDragInfo {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @since 8
   */
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @crossplatform
   * @since 10
   */
  x: number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @since 8
   */
  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @crossplatform
   * @since 10
   */
  y: number;
}

/**
 * DragItemInfo object description
 * @since 8
 */
/**
 * DragItemInfo object description
 * @crossplatform
 * @since 10
 */
declare interface DragItemInfo {
  /**
   * Uses the pixelMap object for drawing.
   * @since 8
   */
  /**
   * Uses the pixelMap object for drawing.
   * @crossplatform
   * @since 10
   */
  pixelMap?: PixelMap;

  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   * @since 8
   */
  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   * @crossplatform
   * @since 10
   */
  builder?: CustomBuilder;

  /**
   * Sets the extra info for drag event.
   * @since 8
   */
  /**
   * Sets the extra info for drag event.
   * @crossplatform
   * @since 10
   */
  extraInfo?: string;
}

/**
 * Defining animation function.
 * @since 7
 */
/**
 * Defining animation function.
 * @form
 * @since 9
 */
/**
 * Defining animation function.
 * @form
 * @crossplatform
 * @since 10
 */
declare function animateTo(value: AnimateParam, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 * @since 7
 */
/**
 * Converts a value in vp units to a value in px.
 * @form
 * @since 9
 */
/**
 * Converts a value in vp units to a value in px.
 * @form
 * @crossplatform
 * @since 10
 */
declare function vp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of vp.
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * @form
 * @crossplatform
 * @since 10
 */
declare function px2vp(value: number): number;

/**
 * Converts a number in fp units to a number in px.
 * @since 7
 */
/**
 * Converts a number in fp units to a number in px.
 * @form
 * @since 9
 */
/**
 * Converts a number in fp units to a number in px.
 * @form
 * @crossplatform
 * @since 10
 */
declare function fp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of fp.
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of fp.
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of fp.
 * @form
 * @crossplatform
 * @since 10
 */
declare function px2fp(value: number): number;

/**
 * Converts a number in units of lpx to a number in units of px.
 * @since 7
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 * @form
 * @since 9
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 * @form
 * @crossplatform
 * @since 10
 */
declare function lpx2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of lpx.
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 * @form
 * @crossplatform
 * @since 10
 */
declare function px2lpx(value: number): number;

declare namespace focusControl {
  /**
   * Request focus to the specific component by param: 'id/key'.
   * @since 9
   */
  /**
   * Request focus to the specific component by param: 'id/key'.
   * @crossplatform
   * @since 10
   */
  function requestFocus(value: string): boolean;
}

/**
 * Defines the event target.
 * @since 8
 */
/**
 * Defines the event target.
 * @form
 * @since 9
 */
/**
 * Defines the event target.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface EventTarget {
  /**
   * Area of current target.
   * @since 8
   */
  /**
   * Area of current target.
   * @form
   * @since 9
   */
  /**
   * Area of current target.
   * @form
   * @crossplatform
   * @since 10
   */
  area: Area;
}

/**
 * Defines the event source type.
 * @since 8
 */
/**
 * Defines the event source type.
 * @crossplatform
 * @since 10
 */
declare enum SourceType {
  /**
   * Unknown type.
   * @since 8
   */
  /**
   * Unknown type.
   * @crossplatform
   * @since 10
   */
  Unknown,

  /**
   * The mouse type.
   * @since 8
   */
  /**
   * The mouse type.
   * @crossplatform
   * @since 10
   */
  Mouse,

  /**
   * The touch screen type.
   * @since 8
   */
  /**
   * The touch screen type.
   * @crossplatform
   * @since 10
   */
  TouchScreen,
}

/**
 * Defines the event tool type.
 * @since 9
 */
/**
 * Defines the event tool type.
 * @crossplatform
 * @since 10
 */
declare enum SourceTool {
  /**
   * Unknown type.
   * @since 9
   */
  /**
   * Unknown type.
   * @crossplatform
   * @since 10
   */
  Unknown,

  /**
   * The finger type.
   * @since 9
   */
  /**
   * The finger type.
   * @crossplatform
   * @since 10
   */
  Finger,

  /**
   * The pen type.
   * @since 9
   */
  /**
   * The pen type.
   * @crossplatform
   * @since 10
   */
  Pen,
}

/**
 * Defines the Border Image Repeat Mode.
 * @form
 * @since 9
 */
/**
 * Defines the Border Image Repeat Mode.
 * @form
 * @crossplatform
 * @since 10
 */
declare enum RepeatMode {
  /**
   * Repeat mode.
   * @form
   * @since 9
   */
  /**
   * Repeat mode.
   * @form
   * @crossplatform
   * @since 10
   */
  Repeat,

  /**
   * Stretch mode.
   * @form
   * @since 9
   */
  /**
   * Stretch mode.
   * @form
   * @crossplatform
   * @since 10
   */
  Stretch,

  /**
   * Round mode.
   * @form
   * @since 9
   */
  /**
   * Round mode.
   * @form
   * @crossplatform
   * @since 10
   */
  Round,

  /**
   * Space mode.
   * @form
   * @since 9
   */
  /**
   * Space mode.
   * @form
   * @crossplatform
   * @since 10
   */
  Space,
}

/**
 * enum Blur style
 * @form
 * @since 9
 */
/**
 * enum Blur style
 * @form
 * @crossplatform
 * @since 10
 */
declare enum BlurStyle {
  /**
   * Defines the thin card material.
   * @form
   * @since 9
   */
  /**
   * Defines the thin card material.
   * @form
   * @crossplatform
   * @since 10
   */
  Thin,

  /**
   * Defines the regular card material.
   * @form
   * @since 9
   */
  /**
   * Defines the regular card material.
   * @form
   * @crossplatform
   * @since 10
   */
  Regular,

  /**
   * Defines the thick card material.
   * @form
   * @since 9
   */
  /**
   * Defines the thick card material.
   * @form
   * @crossplatform
   * @since 10
   */
  Thick,

  /**
   * Defines the thin background material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  BACKGROUND_THIN,

  /**
   * Defines the thin regular material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  BACKGROUND_REGULAR,

  /**
   * Defines the thin thick material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  BACKGROUND_THICK,

  /**
   * Defines the thin ultra thick material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  BACKGROUND_ULTRA_THICK,

  /**
   * Defines none material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */  
  NONE,    
}

/**
 * enum color mode
 * @crossplatform
 * @since 10
 */
declare enum ThemeColorMode {
  /**
   * Defines the mode which is follow up with system.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SYSTEM,

  /**
   * Defines the light mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  LIGHT,

  /**
   * Defines the dark mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DARK,
}

/**
 * Defines adaptive color
 * @crossplatform
 * @since 10
 */
declare enum AdaptiveColor {
  /**
   * Defines the fixed value color adaptive mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DEFAULT,

  /**
   * Defines the background average color adaptive mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  AVERAGE,
}

/**
 * Defines modal transition type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ModalTransition {
  /**
   * Use default animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DEFAULT,

  /**
   * Use none animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  NONE,

  /**
   * Use alpha animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  ALPHA,
}

/**
 * Defines the options of backgroundBlurStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {}

/**
 * Defines the options of ForegroundBlurStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {}

/**
 * Defines the options of blurStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface BlurStyleOptions {
  /**
   * color mode
   * @type { ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  colorMode?: ThemeColorMode;

  /**
   * adaptive color
   * @type { AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Define the scale of blur effect. 
   * The range of value is [0, 1]. The larger the value, the more obvious the blurring effect.
   * A value of 0 indicates no blur effect and a value of 1 indicates a complete blur effect.
   * @type { number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  scale?: number;
}

/**
 * Provide an interface for the text style of picker
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface PickerTextStyle {
  /**
   * Define the text color of picker.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color?: ResourceColor;

  /**
   * Define the text font of picker.
   * Only support size and weight.
   * @type { Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  font?: Font;
}

/**
 * Define the type of shadow
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ShadowType {
  /**
   * Define a color type of shadow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  COLOR,

  /**
   * Define a blur type of shadow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  BLUR,
}

/**
 * Define the options of shadow
 * @since 7
 */
/**
 * Define the options of shadow
 * @form
 * @since 9
 */
/**
 * Define the options of shadow
 * @form
 * @crossplatform
 * @since 10
 */
declare interface ShadowOptions {
  /**
   * Define the radius size of shadow
   * @since 7
   */
  /**
   * Define the radius size of shadow
   * @form
   * @since 9
   */
  /**
   * Define the radius size of shadow
   * @form
   * @crossplatform
   * @since 10
   */
  radius: number | Resource;

  /**
   * Define the type of shadow
   * @type { ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  type?: ShadowType;

  /**
   * Define the color of shadow
   * @since 7
   */
  /**
   * Define the color of shadow
   * @form
   * @since 9
   */
  /**
   * Define the color of shadow
   * @form
   * @crossplatform
   * @since 10
   */
  color?: Color | string | Resource;

  /**
   * Define the horizontal offset size of shadow
   * @since 7
   */
  /**
   * Define the horizontal offset size of shadow
   * @form
   * @since 9
   */
  /**
   * Define the horizontal offset size of shadow
   * @form
   * @crossplatform
   * @since 10
   */
  offsetX?: number | Resource;

  /**
   * Define the vertical offset size of shadow
   * @since 7
   */
  /**
   * Define the vertical offset size of shadow
   * @form
   * @since 9
   */
  /**
   * Define the vertical offset size of shadow
   * @form
   * @crossplatform
   * @since 10
   */
  offsetY?: number | Resource;
}

/**
 * enum Shadow style
 * @crossplatform
 * @since 10
 */
declare enum ShadowStyle {
  /**
   * Defines the super small default shadow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  OUTER_DEFAULT_XS,

  /**
   * Defines the small default shadow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  OUTER_DEFAULT_SM,

  /**
   * Defines the medium default shadow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  OUTER_DEFAULT_MD,

  /**
   * Defines the large default shadow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  OUTER_DEFAULT_LG,

  /**
   * Defines the small floating shadow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  OUTER_FLOATING_SM,

  /**
   * Defines the medium floating shadow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  OUTER_FLOATING_MD,
}

/**
 * Enumerates the safe area types.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SafeAreaType {
  /**
   * Default area of the system, including the status bar and navigation bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SYSTEM,

  /**
   * Notch or punch hole.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CUTOUT,

  /**
   * Soft keyboard area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  KEYBOARD
}

/**
 * Enumerates the safe area edges.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SafeAreaEdge {
  /**
   * Top edge of the safe area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TOP,

  /**
   * Bottom edge of the safe area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BOTTOM,

  /**
   * Start edge of the safe area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  START,

  /**
   * End edge of the safe area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  END
}

/**
 * Defines sheet size type.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SheetSize {
  /**
   * Defines the sheet size medium height type. The height is half the screen height
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  MEDIUM,

  /**
   * Defines the sheet size large height type. The height is almost screen height.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  LARGE,
}

/**
 * Defines the base event.
 * @since 8
 */
/**
 * Defines the base event.
 * @form
 * @since 9
 */
/**
 * Defines the base event.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BaseEvent {
  /**
   * Defines the current target which fires this event.
   * @since 8
   */
  /**
   * Defines the current target which fires this event.
   * @form
   * @since 9
   */
  /**
   * Defines the current target which fires this event.
   * @form
   * @crossplatform
   * @since 10
   */
  target: EventTarget;

  /**
   * Event timestamp.
   * @since 8
   */
  /**
   * Event timestamp.
   * @form
   * @since 9
   */
  /**
   * Event timestamp.
   * @form
   * @crossplatform
   * @since 10
   */
  timestamp: number;

  /**
   * the event source info.
   * @since 8
   */
  /**
   * the event source info.
   * @form
   * @since 9
   */
  /**
   * the event source info.
   * @form
   * @crossplatform
   * @since 10
   */
  source: SourceType;

  /**
   * Touch pressure.
   * @form
   * @since 9
   */
  /**
   * Touch pressure.
   * @form
   * @crossplatform
   * @since 10
   */
  pressure: number;

  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   * @form
   * @since 9
   */
  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   * @form
   * @crossplatform
   * @since 10
   */
  tiltX: number;

  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   * @form
   * @since 9
   */
  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   * @form
   * @crossplatform
   * @since 10
   */
  tiltY: number;

  /**
   * The event tool type info.
   * @form
   * @since 9
   */
  /**
   * The event tool type info.
   * @form
   * @crossplatform
   * @since 10
   */
  sourceTool: SourceTool;
}

/**
 * Border image option
 * @form
 * @since 9
 */
/**
 * Border image option
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BorderImageOption {
  /**
   * Border image slice
   * @form
   * @since 9
   */
  /**
   * Border image slice
   * @form
   * @crossplatform
   * @since 10
   */
  slice?: Length | EdgeWidths,

  /**
   * Border image repeat
   * @form
   * @since 9
   */
  /**
   * Border image repeat
   * @form
   * @crossplatform
   * @since 10
   */
  repeat?: RepeatMode,

  /**
   * Border image source
   * @form
   * @since 9
   */
  /**
   * Border image source
   * @form
   * @crossplatform
   * @since 10
   */
  source?: string | Resource | LinearGradient,

  /**
   * Border image width
   * @form
   * @since 9
   */
  /**
   * Border image width
   * @form
   * @crossplatform
   * @since 10
   */
  width?: Length | EdgeWidths,

  /**
   * Border image outset
   * @form
   * @since 9
   */
  /**
   * Border image outset
   * @form
   * @crossplatform
   * @since 10
   */
  outset?: Length | EdgeWidths,

  /**
   * Border image center fill
   * @form
   * @since 9
   */
  /**
   * Border image center fill
   * @form
   * @crossplatform
   * @since 10
   */
  fill?: boolean
}

/**
 * The tap action triggers this method invocation.
 * @since 7
 */
/**
 * The tap action triggers this method invocation.
 * @form
 * @since 9
 */
/**
 * The tap action triggers this method invocation.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface ClickEvent extends BaseEvent {
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayY: number;

  /**
   * X coordinate of the click point relative to the left edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  windowX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  windowY: number;

  /**
   * X coordinate of the click point relative to the left edge of the current window.
   * @since 7
   * @deprecated since 10
   * @useinstead ClickEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   * @since 7
   * @deprecated since 10
   * @useinstead ClickEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @since 7
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @form
   * @since 9
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @form
   * @crossplatform
   * @since 10
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   * @since 7
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   * @form
   * @since 9
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   * @form
   * @crossplatform
   * @since 10
   */
  y: number;
}

/**
 * The hover action triggers this method invocation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface HoverEvent extends BaseEvent {
  /**
   * The blocking hover event pops up.
   * @type { ?() => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  stopPropagation?: () => void;
}

/**
 * The mouse click action triggers this method invocation.
 * @since 8
 */
/**
 * The mouse click action triggers this method invocation.
 * @crossplatform
 * @since 10
 */
declare interface MouseEvent extends BaseEvent {
  /**
   * Mouse button of the click event.
   * @since 8
   */
  /**
   * Mouse button of the click event.
   * @crossplatform
   * @since 10
   */
  button: MouseButton;

  /**
   * Mouse action of the click event.
   * @since 8
   */
  /**
   * Mouse action of the click event.
   * @crossplatform
   * @since 10
   */
  action: MouseAction;

  /**
   * X coordinate of the mouse point relative to the left edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  windowX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  windowY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   * @since 8
   * @deprecated since 10
   * @useinstead MouseEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   * @since 8
   * @deprecated since 10
   * @useinstead MouseEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the mouse hit element.
   * @since 8
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the mouse hit element.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  x: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
   * @since 8
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  y: number;

  /**
   * The blocking event pops up.
   * @since 8
   */
  /**
   * The blocking event pops up.
   * @crossplatform
   * @since 10
   */
  stopPropagation?: () => void;
}

/**
 * Type of the touch event.
 * @since 7
 */
/**
 * Type of the touch event.
 * @crossplatform
 * @since 10
 */
declare interface TouchObject {
  /**
   * Type of the touch event.
   * @since 7
   */
  /**
   * Type of the touch event.
   * @crossplatform
   * @since 10
   */
  type: TouchType;

  /**
   * Finger unique identifier.
   * @since 7
   */
  /**
   * Finger unique identifier.
   * @crossplatform
   * @since 10
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  windowX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  windowY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   * @since 7
   * @deprecated since 10
   * @useinstead TouchObject#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   * @since 7
   * @deprecated since 10
   * @useinstead TouchObject#windowY
   */
  screenY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @since 7
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  x: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @since 7
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  y: number;
}

/**
 * Touch Action Function Parameters
 * @since 7
 */
/**
 * Touch Action Function Parameters
 * @crossplatform
 * @since 10
 */
declare interface TouchEvent extends BaseEvent {
  /**
   * Type of the touch event.
   * @since 7
   */
  /**
   * Type of the touch event.
   * @crossplatform
   * @since 10
   */
  type: TouchType;

  /**
   * All finger information.
   * @since 7
   */
  /**
   * All finger information.
   * @crossplatform
   * @since 10
   */
  touches: TouchObject[];

  /**
   * Indicates the current changed finger information.
   * @since 7
   */
  /**
   * Indicates the current changed finger information.
   * @crossplatform
   * @since 10
   */
  changedTouches: TouchObject[];

  /**
   * The blocking event pops up.
   * @since 7
   */
  /**
   * The blocking event pops up.
   * @crossplatform
   * @since 10
   */
  stopPropagation?: () => void;
}

/**
 * Defines the PixelMap type object for ui component.
 * @since 7
 */
/**
 * Defines the PixelMap type object for ui component.
 * @crossplatform
 * @since 10
 */
declare type PixelMap = import('../api/@ohos.multimedia.image').default.PixelMap;

/**
 * pixelmap object with release function.
 * @systemapi
 * @since 7
 */
declare interface PixelMapMock {
  /**
   * release function.
   * @systemapi
   * @since 7
   */
  release(): void;
}

/**
 * Enum for Drag Behavior.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum DragBehavior {
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  COPY,

  /**
   * If drag use move event, then set DragBehavior.MOVE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  MOVE
}

/**
 * Import the UnifiedData, Summary, UnifiedDataType type object for ui component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type UnifiedData = import('../api/@ohos.data.UDMF').UnifiedData;
declare type Summary = import('../api/@ohos.data.UDMF').Summary;
declare type UnifiedDataType = import('../api/@ohos.data.UDMF').UnifiedDataType;

/**
 * Enum for Drag Result.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum DragRet {
  /**
   * If drag success, return DragRet.DRAG_SUCCESS.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DRAG_SUCCESS,

  /**
   * If drag fail, return DragRet.DRAG_FAILED.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DRAG_FAILED,

  /**
   * If drag action cancel, return DragRet.DRAG_CANCELED.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DRAG_CANCELED,

  /**
   * If node allow drop in, return DragRet.DROP_ENABLED.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DROP_ENABLED,

  /**
   * If node don't allow drop in, return DragRet.DROP_DISABLED.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DROP_DISABLED
}

/**
 * DragEvent object description
 * @since 7
 */
/**
 * DragEvent object description
 * @crossplatform
 * @since 10
 */
declare interface DragEvent {
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  getDisplayX(): number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  getDisplayY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  getWindowX(): number;

  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  getWindowY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window. in vp.
   * @since 7
   * @deprecated since 10
   * @useinstead DragEvent#getWindowX()
   */
  getX(): number;

  /**
   * Y coordinate of the touch point relative to the left edge of the current window. in vp.
   * @since 7
   * @deprecated since 10
   * @useinstead DragEvent#getWindowY()
   */
  getY(): number;

 /**
  * If copy is COPY, this DragEvent is a copy event.
  * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
  * @default COPY
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 10
  */
 dragBehavior: DragBehavior;

  /**
   * If useCustomDropAnimation is true, System will not use drop animation.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  useCustomDropAnimation: boolean;

  /**
   * Set dragData into DragEvent.
   * @param { UnifiedData } unifiedData - dragData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  setData(unifiedData: UnifiedData): void;

  /**
   * Get dragData from DragEvent.
   * @returns { UnifiedData } - get dragData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getData(): UnifiedData;

  /**
   * Get dragData summary from DragEvent.
   * @returns { Summary } - get Summary Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getSummary(): Summary;

  /**
   * Set dragEvent result to DragEvent.
   * @param { DragRet } dragRet - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  setResult(dragRet: DragRet): void;

  /**
   * Get dragEvent result from DragEvent.
   * @returns { DragRet } - dragRet Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  getResult(): DragRet;

  /**
   * Get the rectangle of drag window.
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  getPreviewRect(): Rectangle;
}

/**
 * Import the IntentionCode type object for IntentionCode.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type IntentionCode = import('../api/@ohos.multimodalInput.IntentionCode').IntentionCode;
/**
 * KeyEvent object description:
 * @since 7
 */
/**
 * KeyEvent object description:
 * @crossplatform
 * @since 10
 */
declare interface KeyEvent {
  /**
   * Type of a key.
   * @since 7
   */
  /**
   * Type of a key.
   * @crossplatform
   * @since 10
   */
  type: KeyType;

  /**
   * Key code of a key
   * @since 7
   */
  /**
   * Key code of a key
   * @crossplatform
   * @since 10
   */
  keyCode: number;

  /**
   * Key value of a key.
   * @since 7
   */
  /**
   * Key value of a key.
   * @crossplatform
   * @since 10
   */
  keyText: string;

  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   * @since 7
   */
  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   * @crossplatform
   * @since 10
   */
  keySource: KeySource;

  /**
   * Indicates the ID of the input device that triggers the current key.
   * @since 7
   */
  /**
   * Indicates the ID of the input device that triggers the current key.
   * @crossplatform
   * @since 10
   */
  deviceId: number;

  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   * @since 7
   */
  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   * @crossplatform
   * @since 10
   */
  metaKey: number;

  /**
   * Timestamp when the key was pressed.
   * @since 7
   */
  /**
   * Timestamp when the key was pressed.
   * @crossplatform
   * @since 10
   */
  timestamp: number;

  /**
   * Block event bubbling.
   * @since 7
   */
  /**
   * Block event bubbling.
   * @crossplatform
   * @since 10
   */
  stopPropagation?: () => void;

  /**
   * Intention code of a key or modifier keys.
   * @type { IntentionCode }
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  intentionCode: IntentionCode;
}

/**
 * Overlay module options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface BindOptions {
  /**
   * Defines the background color
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  backgroundColor?: ResourceColor;

  /**
   * Callback function when overlay interface appears
   * @type { ?(() => void) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onAppear?: () => void;

  /**
   * Callback function when overlay interface exits
   * @type { ?(() => void) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onDisappear?: () => void;
}

/**
 * Component content cover options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ContentCoverOptions extends BindOptions {
  /**
   * Defines transition type
   * @type { ?ModalTransition }
   * @default ModalTransition.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  modalTransition?: ModalTransition,
}

/**
 * Component sheet options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SheetOptions extends BindOptions {
  /**
   * Defines sheet height
   * @type { ?(SheetSize | Length) }
   * @default Sheet.LARGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  height?: SheetSize | Length;

  /**
   * Defines whether the control bar is displayed.
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  dragBar?: boolean;

  /**
   * Defines sheet maskColor
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  maskColor?: ResourceColor;
}

/**
 * Component State Styles.
 * @since 8
 */
/**
 * Component State Styles.
 * @form
 * @since 9
 */
/**
 * Component State Styles.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface StateStyles {
  /**
   * Defines normal state styles.
   * @since 8
   */
  /**
   * Defines normal state styles.
   * @form
   * @since 9
   */
  /**
   * Defines normal state styles.
   * @form
   * @crossplatform
   * @since 10
   */
  normal?: any;

  /**
   * Defines pressed state styles.
   * @since 8
   */
  /**
   * Defines pressed state styles.
   * @form
   * @since 9
   */
  /**
   * Defines pressed state styles.
   * @form
   * @crossplatform
   * @since 10
   */
  pressed?: any;

  /**
   * Defines disabled state styles.
   * @since 8
   */
  /**
   * Defines disabled state styles.
   * @form
   * @since 9
   */
  /**
   * Defines disabled state styles.
   * @form
   * @crossplatform
   * @since 10
   */
  disabled?: any;

  /**
   * Defines focused state styles.
   * @since 8
   */
  /**
   * Defines focused state styles.
   * @form
   * @since 9
   */
  /**
   * Defines focused state styles.
   * @form
   * @crossplatform
   * @since 10
   */
  focused?: any;

  /**
   * Defines clicked state styles.
   * @since 8
   */
  /**
   * Defines clicked state styles.
   * @form
   * @since 9
   */
  /**
   * Defines clicked state styles.
   * @form
   * @crossplatform
   * @since 10
   */
  clicked?: any;

  /**
   * Defines selected state styles.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  selected?: object;
}

/**
 * Defines the options of popup message.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface PopupMessageOptions {
  /**
   * Sets the color of popup text.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  textColor?: ResourceColor;

  /**
   * Sets the font of popup text.
   * @type { Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  font?: Font;
}

/**
 * Defines the popup options.
 * @since 7
 */
/**
 * Defines the popup options.
 * @crossplatform
 * @since 10
 */
declare interface PopupOptions {
  /**
   * Information in the pop-up window.
   * @since 7
   */
  /**
   * Information in the pop-up window.
   * @crossplatform
   * @since 10
   */
  message: string;

  /**
   * placement On Top
   * @since 7
   * @deprecated since 10
   * @useinstead PopupOptions#placement
   */
  placementOnTop?: boolean;

  /**
   * The placement of popup.
   * Supports all positions defined in Placement.
   * @type { Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  placement?: Placement;

  /**
   * The first button.
   * @since 7
   */
  /**
   * The first button.
   * @crossplatform
   * @since 10
   */
  primaryButton?: {
    /**
     * Button text value
     * @since 7
     */
    /**
     * Button text value
     * @crossplatform
     * @since 10
     */
    value: string;

    /**
     * action
     * @since 7
     */
    /**
     * action
     * @crossplatform
     * @since 10
     */
    action: () => void;
  };

  /**
   * The second button.
   * @since 7
   */
  /**
   * The second button.
   * @crossplatform
   * @since 10
   */
  secondaryButton?: {
    /**
     * Button text value
     * @since 7
     */
    /**
     * Button text value
     * @crossplatform
     * @since 10
     */
    value: string;

    /**
     * action
     * @since 7
     */
    /**
     * action
     * @crossplatform
     * @since 10
     */
    action: () => void;
  };

  /**
   * on State Change
   * @since 7
   */
  /**
   * on State Change
   * @crossplatform
   * @since 10
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     * @crossplatform
     * @since 10
     */
    isVisible: boolean
  }) => void;

  /**
   * The offset of the sharp corner of popup.
   * @since 9
   */
  /**
   * The offset of the sharp corner of popup.
   * @crossplatform
   * @since 10
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   * @since 9
   */
  /**
   * Whether to display in the sub window.
   * @crossplatform
   * @since 10
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   * @crossplatform
   * @since 10
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Sets the options of popup message.
   * @type { PopupMessageOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  messageOptions?: PopupMessageOptions

  /**
   * Sets the space of between the popup and target.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  targetSpace?: Length

  /**
   * whether show arrow
   * @type { boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  enableArrow?: boolean;
   /**
   * Sets the position offset of the popup.
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  offset?: Position
}

/**
 * Defines the custom popup options.
 * @since 8
 */
/**
 * Defines the custom popup options.
 * @crossplatform
 * @since 10
 */
declare interface CustomPopupOptions {
  /**
   * builder of popup
   * @since 8
   */
  /**
   * builder of popup
   * @crossplatform
   * @since 10
   */
  builder: CustomBuilder;

  /**
   * placement of popup
   * @since 8
   */
  /**
   * placement of popup
   * @crossplatform
   * @since 10
   */
  placement?: Placement;

  /**
   * mask color of popup
   * @since 8
   * @deprecated since 10
   * @useinstead CustomPopupOptions#mask
   */
  maskColor?: Color | string | Resource | number;

  /**
   * background color of popup
   * @since 8
   */
  /**
   * background color of popup
   * @crossplatform
   * @since 10
   */
  popupColor?: Color | string | Resource | number;

  /**
   * whether show arrow
   * @since 8
   */
  /**
   * whether show arrow
   * @crossplatform
   * @since 10
   */
  enableArrow?: boolean;

  /**
   * whether hide popup when click mask
   * @since 8
   */
  /**
   * whether hide popup when click mask
   * @crossplatform
   * @since 10
   */
  autoCancel?: boolean;

  /**
   * on State Change
   * @since 8
   */
  /**
   * on State Change
   * @crossplatform
   * @since 10
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     * @crossplatform
     * @since 10
     */
    isVisible: boolean
  }) => void;

  /**
   * The offset of the sharp corner of popup.
   * @since 9
   */
  /**
   * The offset of the sharp corner of popup.
   * @crossplatform
   * @since 10
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   * @since 9
   */
  /**
   * Whether to display in the sub window.
   * @crossplatform
   * @since 10
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   * @crossplatform
   * @since 10
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Sets the space of between the popup and target.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  targetSpace?: Length

  /**
   * Sets the position offset of the popup.
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  offset?: Position
}

/**
 * Defines the context menu options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ContextMenuOptions {
  /**
   * Sets the position offset of the context menu window.
   * @type { ?Position }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  offset?: Position;

  /**
   * Sets the placement of the context menu window.
   * @type { ?Placement }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  placement?: Placement;

  /**
   * whether show arrow belong to the menu, default: false, not show arrow
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  enableArrow?: boolean;

  /**
    * The horizontal offset to the left of menu or vertical offset to the top of menu
    * @type { ?Length }
    * @default 0
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
  arrowOffset?: Length; 

  /**
   * Callback function when the context menu appears.
   * @type { ?() => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onAppear?: () => void;

  /**
   * Callback function when the context menu disappear.
   * @type { ?() => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onDisappear?: () => void;
}

/**
 * Defines the menu options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface MenuOptions extends ContextMenuOptions {
  /**
   * Sets the title of the menu window.
   * @type { ?ResourceStr }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  title?: ResourceStr;
}

/**
 * Defines the ProgressMask class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class ProgressMask {
  /**
   * constructor.
   * @param { number } value - indicates the current value of the progress.
   * @param { number } total - indicates the total value of the progress.
   * @param { ResourceColor } color - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor(value: number, total: number, color: ResourceColor);

  /**
   * Update the current value of the progress.
   * @param { number } value - indicates the current value of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  updateProgress(value: number): void;

  /**
   * Update the color of the mask.
   * @param { ResourceColor } value - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  updateColor(value: ResourceColor): void;
}

/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface PixelStretchEffectOptions {
  /**
   * top property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   * @type { Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  top?: Length;

  /**
   * bottom property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   * @type { Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bottom?: Length;

  /**
   * left property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   * @type { Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  left?: Length;

  /**
   * right property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  right?: Length;
}

/**
 * Defines the click effect.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ClickEffect {
  /**
   * Set the click effect level.
   * When level is undefined or null, the level is equal to ClickEffectLevel.Light.
   * @type { ClickEffectLevel }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  level: ClickEffectLevel;

  /**
   * Set scale number.
   * This default scale is same as the scale of click effect level.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scale?: number;
}

/*
 * Define nested scroll options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface NestedScrollOptions {
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scrollForward: NestedScrollMode;

  /**
   * Set NestedScrollMode when the scrollable component scrolls backward
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scrollBackward: NestedScrollMode;
}

/**
 * CommonMethod.
 * @since 7
 */
/**
 * CommonMethod.
 * @form
 * @since 9
 */
/**
 * CommonMethod.
 * @form
 * @crossplatform
 * @since 10
 */
declare class CommonMethod<T> {
  /**
   * constructor.
   * @systemapi
   * @since 7
   * @ignore
   */
  /**
   * constructor.
   * @form
   * @systemapi
   * @since 9
   * @ignore
   */
  constructor();

  /**
   * Sets the width of the current component.
   * @since 7
   */
  /**
   * Sets the width of the current component.
   * @form
   * @since 9
   */
  /**
   * Sets the width of the current component.
   * @form
   * @crossplatform
   * @since 10
   */
  width(value: Length): T;

  /**
   * Sets the height of the current component.
   * @since 7
   */
  /**
   * Sets the height of the current component.
   * @form
   * @since 9
   */
  /**
   * Sets the height of the current component.
   * @form
   * @crossplatform
   * @since 10
   */
  height(value: Length): T;

  /**
   * Expands the safe area.
   * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
   * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T;

  /**
   * Sets the response region of the current component.
   * @since 8
   */
  /**
   * Sets the response region of the current component.
   * @form
   * @since 9
   */
  /**
   * Sets the response region of the current component.
   * @form
   * @crossplatform
   * @since 10
   */
  responseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * Sets the mouse response region of current component
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T } return the component attribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform 
   * @since 10
   */
  mouseResponseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * The size of the current component.
   * @since 7
   */
  /**
   * The size of the current component.
   * @form
   * @since 9
   */
  /**
   * The size of the current component.
   * @form
   * @crossplatform
   * @since 10
   */
  size(value: SizeOptions): T;

  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   * @since 7
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   * @form
   * @since 9
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   * @form
   * @crossplatform
   * @since 10
   */
  constraintSize(value: ConstraintSizeOptions): T;

  /**
   * Sets the touchable of the current component
   * @since 7
   * @deprecated since 9
   * @useinstead hitTestBehavior
   */
  touchable(value: boolean): T;

  /**
   * Defines the component's hit test behavior in touch events.
   * @param value the hit test mode.
   * @since 9
   */
  /**
   * Defines the component's hit test behavior in touch events.
   * @param value the hit test mode.
   * @crossplatform
   * @since 10
   */
  hitTestBehavior(value: HitTestMode): T;

  /**
   * layout Weight
   * @since 7
   */
  /**
   * layout Weight
   * @form
   * @since 9
   */
  /**
   * layout Weight
   * @form
   * @crossplatform
   * @since 10
   */
  layoutWeight(value: number | string): T;

  /**
   * Inner margin.
   * @since 7
   */
  /**
   * Inner margin.
   * @form
   * @since 9
   */
  /**
   * Inner margin.
   * @form
   * @crossplatform
   * @since 10
   */
  padding(value: Padding | Length): T;

  /**
   * Outer Margin.
   * @since 7
   */
  /**
   * Outer Margin.
   * @form
   * @since 9
   */
  /**
   * Outer Margin.
   * @form
   * @crossplatform
   * @since 10
   */
  margin(value: Margin | Length): T;

  /**
   * Background.
   * @param { CustomBuilder } builder
   * @param { ?{ align?: Alignment } } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  background(builder: CustomBuilder, options?: { align?: Alignment }): T;

  /**
   * Background color
   * @since 7
   */
  /**
   * Background color
   * @form
   * @since 9
   */
  /**
   * Background color
   * @form
   * @crossplatform
   * @since 10
   */
  backgroundColor(value: ResourceColor): T;

  /**
   * Background image
   * src: Image address url
   * @since 7
   */
  /**
   * Background image
   * src: Image address url
   * @form
   * @since 9
   */
  /**
   * Background image
   * src: Image address url
   * @form
   * @crossplatform
   * @since 10
   */
  backgroundImage(src: ResourceStr, repeat?: ImageRepeat): T;

  /**
   * Background image size
   * @since 7
   */
  /**
   * Background image size
   * @form
   * @since 9
   */
  /**
   * Background image size
   * @form
   * @crossplatform
   * @since 10
   */
  backgroundImageSize(value: SizeOptions | ImageSize): T;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   * @since 7
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   * @form
   * @since 9
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   * @form
   * @crossplatform
   * @since 10
   */
  backgroundImagePosition(value: Position | Alignment): T;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   * @param { BlurStyle } value
   * @form
   * @since 9
   */
  /**
   * Background blur style.
   * blurStyle:Blur style type.
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @form
   * @crossplatform
   * @since 10
   */
  backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   * @param { BlurStyle } value
   * @param { ForegroundBlurStyleOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform 
   * @since 10
   */
  foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T;

  /**
   * Opacity
   * @since 7
   */
  /**
   * Opacity
   * @form
   * @since 9
   */
  /**
   * Opacity
   * @form
   * @crossplatform
   * @since 10
   */
  opacity(value: number | Resource): T;

  /**
   * Opacity
   * width:Border width;color:Border color;radius:Border radius;
   * @since 7
   */
  /**
   * Opacity
   * width:Border width;color:Border color;radius:Border radius;
   * @form
   * @since 9
   */
  /**
   * Opacity
   * width:Border width;color:Border color;radius:Border radius;
   * @form
   * @crossplatform
   * @since 10
   */
  border(value: BorderOptions): T;

  /**
   * Border style
   * @since 7
   */
  /**
   * Border style
   * @form
   * @since 9
   */
  /**
   * Border style
   * @param { BorderStyle | EdgeStyles } value
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  borderStyle(value: BorderStyle | EdgeStyles): T;

  /**
   * Border width
   * @since 7
   */
  /**
   * Border width
   * @form
   * @since 9
   */
  /**
   * Border width
   * @param { Length | EdgeWidths } value
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  borderWidth(value: Length | EdgeWidths): T;

  /**
   * Border color
   * @since 7
   */
  /**
   * Border color
   * @form
   * @since 9
   */
  /**
   * Border color
   * @param { ResourceColor | EdgeColors } value
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  borderColor(value: ResourceColor | EdgeColors): T;

  /**
   * Border radius
   * @since 7
   */
  /**
   * Border radius
   * @form
   * @since 9
   */
  /**
   * Border radius
   * @param { Length | BorderRadiuses } value
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  borderRadius(value: Length | BorderRadiuses): T;

  /**
   * Border image
   * @form
   * @since 9
   */
  /**
   * Border image
   * @form
   * @crossplatform
   * @since 10
   */
  borderImage(value: BorderImageOption): T;

  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   * @param {ResourceColor | ColoringStrategy} value indicates the color or color selection strategy
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  foregroundColor(value: ResourceColor | ColoringStrategy): T;

  /**
   * Trigger a click event when a click is clicked.
   * @since 7
   */
  /**
   * Trigger a click event when a click is clicked.
   * @form
   * @since 9
   */
  /**
   * Trigger a click event when a click is clicked.
   * @form
   * @crossplatform
   * @since 10
   */
  onClick(event: (event?: ClickEvent) => void): T;

  /**
   * Trigger a hover event.
   * @since 8
   */
  /**
   * Trigger a hover event.
   * @param {(isHover?: boolean, event?: HoverEvent} callback of onHover, isHover described entry or leave component, use HoverEvent to set up stopPropagation.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onHover(event: (isHover?: boolean, event?: HoverEvent) => void): T;

  /**
   * Set hover effect.
   * @since 8
   */
  /**
   * Set hover effect.
   * @crossplatform
   * @since 10
   */
  hoverEffect(value: HoverEffect): T;

  /**
   * Trigger a mouse event.
   * @since 8
   */
  /**
   * Trigger a mouse event.
   * @crossplatform
   * @since 10
   */
  onMouse(event: (event?: MouseEvent) => void): T;

  /**
   * Trigger a touch event when touched.
   * @since 7
   */
  /**
   * Trigger a touch event when touched.
   * @crossplatform
   * @since 10
   */
  onTouch(event: (event?: TouchEvent) => void): T;

  /**
   * Keyboard input
   * @since 7
   */
  /**
   * Keyboard input
   * @crossplatform
   * @since 10
   */
  onKeyEvent(event: (event?: KeyEvent) => void): T;

  /**
   * Set focusable.
   * @since 8
   */
  /**
   * Set focusable.
   * @crossplatform
   * @since 10
   */
  focusable(value: boolean): T;

  /**
   * Trigger a event when got focus.
   * @since 8
   */
  /**
   * Trigger a event when got focus.
   * @crossplatform
   * @since 10
   */
  onFocus(event: () => void): T;

  /**
   * Trigger a event when lose focus.
   * @since 8
   */
  /**
   * Trigger a event when lose focus.
   * @crossplatform
   * @since 10
   */
  onBlur(event: () => void): T;

  /**
   * Set focus index by key tab.
   * @since 9
   */
  /**
   * Set focus index by key tab.
   * @crossplatform
   * @since 10
   */
  tabIndex(index: number): T;

  /**
   * Set default focused component when a page create.
   * @since 9
   */
  /**
   * Set default focused component when a page create.
   * @crossplatform
   * @since 10
   */
  defaultFocus(value: boolean): T;

  /**
   * Set default focused component when focus on a focus group.
   * @since 9
   */
  /**
   * Set default focused component when focus on a focus group.
   * @crossplatform
   * @since 10
   */
  groupDefaultFocus(value: boolean): T;

  /**
   * Set a component focused when the component be touched.
   * @since 9
   */
  /**
   * Set a component focused when the component be touched.
   * @crossplatform
   * @since 10
   */
  focusOnTouch(value: boolean): T;

  /**
   * animation
   * @since 7
   */
  /**
   * animation
   * @form
   * @since 9
   */
    /**
   * animation
   * @form
   * @crossplatform
   * @since 10
   */
  animation(value: AnimateParam): T;

  /**
   * Transition parameter
   * @since 7
   */
  /**
   * Transition parameter
   * @form
   * @since 9
   * @param { TransitionOptions } value transition options
   */
  /**
   * Transition parameter
   * @param { TransitionOptions | TransitionEffect } value transition options or transition effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  transition(value: TransitionOptions | TransitionEffect): T;

  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @since 7
   */
  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @crossplatform
   * @since 10
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @since 7
   */
  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @crossplatform
   * @since 10
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @since 7
   */
  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @crossplatform
   * @since 10
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   * @since 7
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   * @form
   * @since 9
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   * @form
   * @crossplatform
   * @since 10
   */
  blur(value: number): T;

  /**
   * Adds the content linear gradient blurring effect for the current component. The input parameter is the blurring radius.
   * @param { number } value - the blurring radius. 
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  linearGradientBlur(value: number, options: LinearGradientBlurOptions): T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   * @since 7
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   * @form
   * @since 9
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   * @form
   * @crossplatform
   * @since 10
   */
  brightness(value: number): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   * @since 7
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   * @form
   * @since 9
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   * @form
   * @crossplatform
   * @since 10
   */
  contrast(value: number): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   * @since 7
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   * @form
   * @since 9
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   * @form
   * @crossplatform
   * @since 10
   */
  grayscale(value: number): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   * @since 7
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   * @form
   * @since 9
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   * @form
   * @crossplatform
   * @since 10
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   * @since 7
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   * @form
   * @since 9
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   * @form
   * @crossplatform
   * @since 10
   */
  saturate(value: number): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   * @since 7
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   * @form
   * @since 9
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   * @form
   * @crossplatform
   * @since 10
   */
  sepia(value: number): T;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   * @since 7
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   * @form
   * @since 9
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   * @form
   * @crossplatform
   * @since 10
   */
  invert(value: number): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   * @since 7
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   * @form
   * @since 9
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   * @form
   * @crossplatform
   * @since 10
   */
  hueRotate(value: number | string): T;

  /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   * @param { boolean } value - true means the component should apply the effects template.
   * @default false
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  useEffect(value: boolean): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   * @since 7
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   * @form
   * @since 9
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   * @form
   * @crossplatform
   * @since 10
   */
  backdropBlur(value: number): T;

  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   * @since 7
   */
  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   * @form
   * @since 9
   */
  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   * @form
   * @crossplatform
   * @since 10
   */
  translate(value: TranslateOptions): T;

  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   * @since 7
   */
  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   * @form
   * @since 9
   */
  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   * @form
   * @crossplatform
   * @since 10
   */
  scale(value: ScaleOptions): T;

  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   * @since 7
   */
  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   * @crossplatform
   * @since 10
   */
  gridSpan(value: number): T;

  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   * @since 7
   */
  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   * @crossplatform
   * @since 10
   */
  gridOffset(value: number): T;

  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   * @since 7
   */
  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   * @form
   * @since 9
   */
  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   * @form
   * @crossplatform
   * @since 10
   */
  rotate(value: RotateOptions): T;

  /**
   * Sets the transformation matrix for the current component.
   * @since 7
   */
  /**
   * Sets the transformation matrix for the current component.
   * @crossplatform
   * @since 10
   */
  transform(value: object): T;

  /**
   * This callback is triggered when a component mounts a display.
   * @since 7
   */
  /**
   * This callback is triggered when a component mounts a display.
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when a component mounts a display.
   * @form
   * @crossplatform
   * @since 10
   */
  onAppear(event: () => void): T;

  /**
   * This callback is triggered when component uninstallation disappears.
   * @since 7
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   * @form
   * @crossplatform
   * @since 10
   */
  onDisAppear(event: () => void): T;

  /**
   * This callback is triggered when the size or position of this component change finished.
   * @param event event callback.
   * @since 8
   */
  /**
   * This callback is triggered when the size or position of this component change finished.
   * @param event event callback.
   * @crossplatform
   * @since 10
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;

  /**
   * Controls the display or hide of the current component.
   * @since 7
   */
  /**
   * Controls the display or hide of the current component.
   * @form
   * @since 9
   */
  /**
   * Controls the display or hide of the current component.
   * @form
   * @crossplatform
   * @since 10
   */
  visibility(value: Visibility): T;

  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   * @since 7
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   * @form
   * @since 9
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   * @form
   * @crossplatform
   * @since 10
   */
  flexGrow(value: number): T;

  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   * @since 7
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   * @form
   * @since 9
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   * @form
   * @crossplatform
   * @since 10
   */
  flexShrink(value: number): T;

  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   * @since 7
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   * @form
   * @since 9
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   * @form
   * @crossplatform
   * @since 10
   */
  flexBasis(value: number | string): T;

  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   * @since 7
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   * @form
   * @since 9
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   * @form
   * @crossplatform
   * @since 10
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   * @since 7
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   * @form
   * @since 9
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   * @form
   * @crossplatform
   * @since 10
   */
  displayPriority(value: number): T;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   * @since 7
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   * @form
   * @since 9
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   * @form
   * @crossplatform
   * @since 10
   */
  zIndex(value: number): T;

  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   * @since 7
   */
  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   * @crossplatform
   * @since 10
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): T;

  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   * @since 7
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   * @form
   * @since 9
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   * @form
   * @crossplatform
   * @since 10
   */
  direction(value: Direction): T;

  /**
   * align
   * @since 7
   */
  /**
   * align
   * @form
   * @since 9
   */
  /**
   * align
   * @form
   * @crossplatform
   * @since 10
   */
  align(value: Alignment): T;

  /**
   * position
   * @since 7
   */
  /**
   * position
   * @form
   * @since 9
   */
  /**
   * position
   * @form
   * @crossplatform
   * @since 10
   */
  position(value: Position): T;

  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   * @since 7
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   * @form
   * @since 9
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   * @form
   * @crossplatform
   * @since 10
   */
  markAnchor(value: Position): T;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   * @since 7
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   * @form
   * @since 9
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   * @form
   * @crossplatform
   * @since 10
   */
  offset(value: Position): T;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   * @since 7
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   * @form
   * @since 9
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   * @form
   * @crossplatform
   * @since 10
   */
  enabled(value: boolean): T;

  /**
   * Sets the number of occupied columns and offset columns for a specific device width type.
   * @since 7
   * @deprecated since 9
   * @useinstead grid_col/[GridColColumnOption] and grid_row/[GridRowColumnOption]
   */
  useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T;

  /**
   * Specifies the alignRules of relative container
   * @form
   * @since 9
   */
  /**
   * Specifies the alignRules of relative container
   * @form
   * @crossplatform
   * @since 10
   */
  alignRules(value: AlignRuleOption): T;

  /**
   * Specifies the aspect ratio of the current component.
   * @since 7
   */
  /**
   * Specifies the aspect ratio of the current component.
   * @form
   * @since 9
   */
  /**
   * Specifies the aspect ratio of the current component.
   * @form
   * @crossplatform
   * @since 10
   */
  aspectRatio(value: number): T;

  /**
   * The click effect level and scale number.
   * @param { ClickEffect | null } value.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  clickEffect(value: ClickEffect | null): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @crossplatform
   * @since 10
   */
  onDragStart(event: (event?: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.\
   * @crossplatform
   * @since 10
   */
  onDragEnter(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @crossplatform
   * @since 10
   */
  onDragMove(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @crossplatform
   * @since 10
   */
  onDragLeave(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @crossplatform
   * @since 10
   */
  onDrop(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * This function is called when the drag event is end.
   * @param { DragEvent } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Allowed drop unifiedData type for this node.
   * @param { Array<UnifiedDataType> } value - the unifiedData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  allowDrop(value: Array<UnifiedDataType>): T;

  /**
   * Enable the selectable area can be dragged.
   * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
   * @default false
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  draggable(value: boolean): T;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   * @since 7
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   * @form
   * @since 9
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   * @param { (string | CustomBuilder) } value
   * @param { ?{ align?: Alignment; offset?: { x?: number; y?: number } } options
   * @returns { T }
   * @form
   * @crossplatform
   * @since 10
   */
  overlay(value: string | CustomBuilder, options?: { align?: Alignment; offset?: { x?: number; y?: number } }): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
   * @since 7
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
   * @form
   * @since 9
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
   * @form
   * @crossplatform
   * @since 10
   */
  linearGradient(value: {
    angle?: number | string;
    direction?: GradientDirection;
    colors: Array<any>;
    repeating?: boolean;
  }): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient
   * end:End point of angle gradient
   * number:number
   * rotating:rotating
   * colors:Color description for gradients
   * repeating:repeating
   * @since 7
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
   * @form
   * @since 9
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
   * @form
   * @crossplatform
   * @since 10
   */
  sweepGradient(value: {
    center: Array<any>;
    start?: number | string;
    end?: number | string;
    rotation?: number | string;
    colors: Array<any>;
    repeating?: boolean;
  }): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient
   * colors:Color description for gradients
   * repeating: Refill
   * @since 7
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient
   * colors:Color description for gradients
   * repeating: Refill
   * @form
   * @since 9
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient
   * colors:Color description for gradients
   * repeating: Refill
   * @form
   * @crossplatform
   * @since 10
   */
  radialGradient(value: { center: Array<any>; radius: number | string; colors: Array<any>; repeating?: boolean }): T;

  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   * @since 7
   */
  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   * @crossplatform
   * @since 10
   */
  motionPath(value: MotionPathOptions): T;

  /**
   * Add a shadow effect to the current component
   * @param { ShadowOptions } value
   * @since 7
   */
  /**
   * Add a shadow effect to the current component
   * @param { ShadowOptions } value
   * @form
   * @since 9
   */
  /**
   * Add a shadow effect to the current component
   * @param { ShadowOptions | ShadowStyle } value
   * @form
   * @since 10
   */
    /**
   * Add a shadow effect to the current component
   * @param { ShadowOptions | ShadowStyle } value
   * @form
   * @crossplatform
   * @since 10
   */
  shadow(value: ShadowOptions | ShadowStyle): T;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   * @since 7
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   * @form
   * @since 9
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   * @form
   * @crossplatform
   * @since 10
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   * @since 7
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - indicates the shape of the mask.
   * @form
   * @since 9
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;

  /**
   * Key. User can set an key to the component to identify it.
   * @since 8
   * @systemapi
   * @test
   */
  key(value: string): T;

  /**
   * Id. User can set an id to the component to identify it.
   * @since 8
   */
  /**
   * Id. User can set an id to the component to identify it.
   * @form
   * @since 9
   */
  /**
   * Id. User can set an id to the component to identify it.
   * @form
   * @crossplatform
   * @since 10
   */
  id(value: string): T;

  /**
   * geometryTransition
   * @since 7
   */
  /**
   * geometryTransition
   * @crossplatform
   * @since 10
   */
  geometryTransition(id: string): T;

  /**
   * Popup control
   * @since 7
   */
  bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T;

  /**
   * Menu control
   * @param { { value: ResourceStr; action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
   * @since 7
   */
  /**
   * Menu control
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bindMenu(content: { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder, options?: MenuOptions): T;

  /**
   * ContextMenu control
   * @since 8
   */
  /**
   * ContextMenu control
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { responseType } responseType - Indicates response type of context menu.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T;

  /**
   * Bind content cover
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } type - transition type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T;

  /**
   * Bind content cover
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } options - options of content cover.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T;

  /**
   * Bind sheet
   * @param { boolean } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } options - options of sheet.
   * @returns { T } - template type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T;

  /**
   * Sets styles for component state.
   * @since 8
   */
  /**
   * Sets styles for component state.
   * @form
   * @since 9
   */
  /**
   * Sets styles for component state.
   * @form
   * @crossplatform
   * @since 10
   */
  stateStyles(value: StateStyles): T;

  /**
   * id for distribute identification.
   * @since 8
   */
  restoreId(value: number): T;

  /**
   * Trigger a visible area change event.
   * @since 9
   */
  /**
   * Trigger a visible area change event.
   * @crossplatform
   * @since 10
   */
  onVisibleAreaChange(ratios: Array<number>, event: (isVisible: boolean, currentRatio: number) => void): T;

  /**
   * Set the spherical effect of the component.
   * @param {number} value - set the degree of spherical effect, value range [0, 1].
   * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  sphericalEffect(value: number): T;

  /**
   * Set the light up effect of the component
   * @param {number} value - set the degree to which the component lights up, value range [0, 1].
   * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  lightUpEffect(value: number): T;

  /**
   * Set the edge pixel stretch effect of the Component.
   * @param {PixelStretchEffectOptions} options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): T;

  /**
   * Sets hot keys
   * @param { string | FunctionKey } value - Character of the combination key.
   * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
   * @param { () => void } action - Callback function, triggered when the shortcut keyboard is pressed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T;

  /**
   * Sets accessibilityGroup
   * @param { boolean } value , set group with accessibility
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @returns { T }
   * @since 10
   */
  accessibilityGroup(value: boolean): T;

  /**
   * Sets accessibilityText
   * @param { string } value , set accessibility text
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { T }
   * @crossplatform
   * @since 10
   */
  accessibilityText(value: string): T;

  /**
   * Sets accessibilityDescription
   * @param { string } value , set description of accessibility
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { T }
   * @crossplatform
   * @since 10
   */
  accessibilityDescription(value: string): T;

  /**
   * Sets accessibilityLevel
   * @param { string } value , set accessibility level
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { T }
   * @crossplatform
   * @since 10
   */
  accessibilityLevel(value: string): T;

  /**
   * Sets obscured
   * @param { Array<ObscuredReasons> } reasons , reasons of obscuration
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { T }
   * @since 10
   */
  obscured(reasons: Array<ObscuredReasons>): T;

  /**
   * Reuse id is used for identify the reuse type for each custom node.
   * @param { string } id - The id for reusable custom node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  reuseId(id: string)

  /**
   * Sets how content is drawn within nodes duration animation
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  renderFit(fitMode: RenderFit): T;
}

/**
 * CommonAttribute for ide.
 * @since 7
 */
/**
 * CommonAttribute for ide.
 * @form
 * @since 9
 */
/**
 * CommonAttribute for ide.
 * @form
 * @crossplatform
 * @since 10
 */
declare class CommonAttribute extends CommonMethod<CommonAttribute> {}

/**
 * CommonInterface for ide.
 * @since 7
 */
/**
 * CommonInterface for ide.
 * @form
 * @since 9
 */
/**
 * CommonInterface for ide.
 * @form
 * @crossplatform
 * @since 10
 */
interface CommonInterface {
  (): CommonAttribute;
}

/**
 * CommonInstance for ide.
 * @since 7
 */
/**
 * CommonInstance for ide.
 * @form
 * @since 9
 */
/**
 * CommonInstance for ide.
 * @form
 * @crossplatform
 * @since 10
 */
declare const CommonInstance: CommonAttribute;

/**
 * Common for ide.
 * @since 7
 */
/**
 * Common for ide.
 * @form
 * @since 9
 */
/**
 * Common for ide.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Common: CommonInterface;

/**
 * Defines the CustomBuilder Type.
 * @since 7
 */
/**
 * Defines the CustomBuilder Type.
 * @form
 * @since 9
 */
/**
 * Defines the CustomBuilder Type.
 * @form
 * @crossplatform
 * @since 10
 */
declare type CustomBuilder = (() => any) | void;

/**
 * Defines the segment of blur.
 * The first element in the tuple means fraction. 
 * The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
 * The second element means the stop position.
 * The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.
 * @type { [ number , number ] }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare type FractionStop = [ number, number ];

/**
 * CommonShapeMethod
 * @since 7
 */
/**
 * CommonShapeMethod
 * @form
 * @since 9
 */
/**
 * CommonShapeMethod
 * @form
 * @crossplatform
 * @since 10
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   * @since 7
   * @systemapi
   */
  /**
   * constructor.
   * @form
   * @since 9
   * @systemapi
   */
  constructor();

  /**
   * border Color
   * @since 7
   */
  /**
   * border Color
   * @form
   * @since 9
   */
  /**
   * border Color
   * @form
   * @crossplatform
   * @since 10
   */
  stroke(value: ResourceColor): T;

  /**
   * Fill color.
   * @since 7
   */
  /**
   * Fill color.
   * @form
   * @since 9
   */
  /**
   * Fill color.
   * @form
   * @crossplatform
   * @since 10
   */
  fill(value: ResourceColor): T;

  /**
   * Offset from the start point of the border drawing.
   * @since 7
   */
  /**
   * Offset from the start point of the border drawing.
   * @form
   * @since 9
   */
  /**
   * Offset from the start point of the border drawing.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Path endpoint drawing style.
   * @since 7
   */
  /**
   * Path endpoint drawing style.
   * @form
   * @since 9
   */
  /**
   * Path endpoint drawing style.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Border corner drawing style.
   * @since 7
   */
  /**
   * Border corner drawing style.
   * @form
   * @since 9
   */
  /**
   * Border corner drawing style.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Limits for drawing acute angles as bevels
   * @since 7
   */
  /**
   * Limits for drawing acute angles as bevels
   * @form
   * @since 9
   */
  /**
   * Limits for drawing acute angles as bevels
   * @form
   * @crossplatform
   * @since 10
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the opacity of the border.
   * @since 7
   */
  /**
   * Sets the opacity of the border.
   * @form
   * @since 9
   */
  /**
   * Sets the opacity of the border.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * fill Opacity
   * @since 7
   */
  /**
   * fill Opacity
   * @form
   * @since 9
   */
  /**
   * fill Opacity
   * @form
   * @crossplatform
   * @since 10
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the width of the dividing line.
   * @since 7
   */
  /**
   * Sets the width of the dividing line.
   * @form
   * @since 9
   */
  /**
   * Sets the width of the dividing line.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeWidth(value: Length): T;

  /**
   * Indicates whether to enable anti-aliasing
   * @since 7
   */
  /**
   * Indicates whether to enable anti-aliasing
   * @form
   * @since 9
   */
  /**
   * Indicates whether to enable anti-aliasing
   * @form
   * @crossplatform
   * @since 10
   */
  antiAlias(value: boolean): T;

  /**
   * Sets the gap for the border.
   * @since 7
   */
  /**
   * Sets the gap for the border.
   * @form
   * @since 9
   */
  /**
   * Sets the gap for the border.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeDashArray(value: Array<any>): T;
}

/**
 * Linear Gradient Interface
 * @param { number | string } angle - Angle of Linear Gradient.
 * @param { GradientDirection } direction - Direction of Linear Gradient.
 * @param { Array<any> } colors - Array of colors
 * @param { boolean } repeating: Image slice repeating.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Linear Gradient Interface
 * @param { number | string } angle - Angle of Linear Gradient.
 * @param { GradientDirection } direction - Direction of Linear Gradient.
 * @param { Array<any> } colors - Array of colors
 * @param { boolean } repeating: Image slice repeating.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface LinearGradient {
  angle?: number | string;
  direction?: GradientDirection;
  colors: Array<any>;
  repeating?: boolean;
}

/**
 * Linear Gradient Blur Interface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare interface LinearGradientBlurOptions {
  /**
   * Percentage of blurring effect.
   * @type { FractionStop[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */  
  fractionStops: FractionStop[];
  /**
   * Direction of linear gradient blur.
   * @type { GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */  
  direction: GradientDirection;
}

/**
 * Sub component border info.
 * @form
 * @since 9
 */
/**
 * Sub component border info.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface LayoutBorderInfo {
  /**
   * Sub component borderWidth info.
   * @form
   * @since 9
   */
  /**
   * Sub component borderWidth info.
   * @form
   * @crossplatform
   * @since 10
   */
  borderWidth: EdgeWidths,

  /**
   * Sub component margin info.
   * @form
   * @since 9
   */
  /**
   * Sub component margin info.
   * @form
   * @crossplatform
   * @since 10
   */
  margin: Margin,

  /**
   * Sub component padding info.
   * @form
   * @since 9
   */
  /**
   * Sub component padding info.
   * @form
   * @crossplatform
   * @since 10
   */
  padding: Padding,
}

/**
 * Sub component layout info.
 * @form
 * @since 9
 */
/**
 * Sub component layout info.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface LayoutInfo {
  /**
   * Sub component position info.
   * @form
   * @since 9
   */
  /**
   * Sub component position info.
   * @form
   * @crossplatform
   * @since 10
   */
  position: Position,

  /**
   * Sub component constraint info.
   * @form
   * @since 9
   */
  /**
   * Sub component constraint info.
   * @form
   * @crossplatform
   * @since 10
   */
  constraint: ConstraintSizeOptions,
}

/**
 * Sub component info passed from framework when layout and measure happens.
 * @form
 * @since 9
 */
/**
 * Sub component info passed from framework when layout and measure happens.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface LayoutChild {
  /**
   * Sub component name.
   * @form
   * @since 9
   */
  /**
   * Sub component name.
   * @form
   * @crossplatform
   * @since 10
   */
  name: string,

  /**
   * Sub component id.
   * @form
   * @since 9
   */
  /**
   * Sub component id.
   * @form
   * @crossplatform
   * @since 10
   */
  id: string,

  /**
   * Sub component constraint.
   * @form
   * @since 9
   */
  /**
   * Sub component constraint.
   * @form
   * @crossplatform
   * @since 10
   */
  constraint: ConstraintSizeOptions,

  /**
   * Sub component border info.
   * @form
   * @since 9
   */
  /**
   * Sub component border info.
   * @form
   * @crossplatform
   * @since 10
   */
  borderInfo: LayoutBorderInfo,

  /**
   * Sub component position.
   * @form
   * @since 9
   */
  /**
   * Sub component position.
   * @form
   * @crossplatform
   * @since 10
   */
  position: Position,

  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   * @form
   * @since 9
   */
  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   * @form
   * @crossplatform
   * @since 10
   */
  measure(childConstraint: ConstraintSizeOptions),

  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   * @form
   * @since 9
   */
  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   * @form
   * @crossplatform
   * @since 10
   */
  layout(childLayoutInfo: LayoutInfo)
}

/**
 * Custom Component
 * @since 7
 */
/**
 * Custom Component
 * @extends CommonAttribute
 * @form
 * @since 9
 */
/**
 * Custom Component
 * @extends CommonAttribute
 * @form
 * @crossplatform
 * @since 10
 */
declare class CustomComponent extends CommonAttribute {
  /**
   * Customize the pop-up content constructor.
   * @since 7
   */
  /**
   * Customize the pop-up content constructor.
   * @form
   * @since 9
   */
  /**
   * Customize the pop-up content constructor.
   * @form
   * @crossplatform
   * @since 10
   */
  build(): void;

  /**
   * aboutToAppear Method
   * @since 7
   */
  /**
   * aboutToAppear Method
   * @form
   * @since 9
   */
  /**
   * aboutToAppear Method
   * @form
   * @crossplatform
   * @since 10
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear Method
   * @since 7
   */
  /**
   * aboutToDisappear Method
   * @form
   * @since 9
   */
  /**
   * aboutToDisappear Method
   * @form
   * @crossplatform
   * @since 10
   */
  aboutToDisappear?(): void;

  /**
   * aboutToReuse Method
   * @param {{ [key: string]: unknown }} params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  aboutToReuse?(params: { [key: string]: unknown }): void;

  /**
   * Custom component override this method to layout each of its sub components.
   * @form
   * @since 9
   */
  /**
   * Custom component override this method to layout each of its sub components.
   * @form
   * @crossplatform
   * @since 10
   */
  onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;

  /**
   * Custom component override this method to measure each of its sub components.
   * @form
   * @since 9
   */
  /**
   * Custom component override this method to measure each of its sub components.
   * @form
   * @crossplatform
   * @since 10
   */
  onMeasure?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;

  /**
   * onPageShow Method
   * @since 7
   */
  /**
   * onPageShow Method
   * @crossplatform
   * @since 10
   */
  onPageShow?(): void;

  /**
   * onPageHide Method
   * @since 7
   */
  /**
   * onPageHide Method
   * @crossplatform
   * @since 10
   */
  onPageHide?(): void;

  /**
   * onBackPress Method
   * @since 7
   */
  /**
   * onBackPress Method
   * @crossplatform
   * @since 10
   */
  onBackPress?(): void;

  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   * @since 9
   */
  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   * @crossplatform
   * @since 10
   */
  pageTransition?(): void;
}

/**
 * View
 * @ignore ide should ignore this class
 * @systemapi
 * @since 7
 */
/**
 * View
 * @ignore ide should ignore this class
 * @systemapi
 * @form
 * @since 9
 */
declare class View {
  /**
   * Just use for generate tsbundle
   * @ignore ide should ignore this attribute
   * @systemapi
   * @since 7
   */
  /**
   * Just use for generate tsbundle
   * @ignore ide should ignore this attribute
   * @systemapi
   * @form
   * @since 9
   */
  create(value: any): any;
}

/**
 * Rect info.
 * @crossplatform
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RectResult {
  /**
   * x:Horizontal coordinate relative to the component.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  x: number;

  /**
   * y:Vertical axis coordinate relative to the component.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  y: number;

  /**
   * Get the width of the current textRect.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  width: number;

  /**
   * Get the height of the current textRect.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  height: number;
}

/**
 * TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare abstract class TextContentControllerBase {
  /**
   * Get the start and end positions of the text content.
   * @returns { RectResult } Text content rect.
   * @crossplatform
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getTextContentRect() : RectResult;

  /**
   * Get the lines number of the text content.
   * @returns { number } Text content line count
   * @crossplatform
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getTextContentLineCount() : number;
}

declare module "SpecialEvent" {
  module "SpecialEvent" {
    // @ts-ignore
    export { TouchObject, KeyEvent, MouseEvent };
  }
}

declare module "AnimateToParam" {
  module "AnimateToParam" {
    // @ts-ignore
    export { AnimateParam };
  }
}
