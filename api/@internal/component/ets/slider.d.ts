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
 * Declare sliderstyle
 * @since 7
 */
/**
 * Declare sliderstyle
 * @form
 * @since 9
 */
/**
 * Declare sliderstyle
 * @form
 * @crossplatform
 * @since 10
 */
declare enum SliderStyle {
  /**
   * The slider is on the slide rail.
   * @since 7
   */
  /**
   * The slider is on the slide rail.
   * @form
   * @since 9
   */
  /**
   * The slider is on the slide rail.
   * @form
   * @crossplatform
   * @since 10
   */
  OutSet,

  /**
   * The slider is in the slide rail.
   * @since 7
   */
  /**
   * The slider is in the slide rail.
   * @form
   * @since 9
   */
  /**
   * The slider is in the slide rail.
   * @form
   * @crossplatform
   * @since 10
   */
  InSet,
}

/**
 * Declare SliderChangeMode
 * @since 7
 */
/**
 * Declare SliderChangeMode
 * @form
 * @since 9
 */
/**
 * Declare SliderChangeMode
 * @form
 * @crossplatform
 * @since 10
 */
declare enum SliderChangeMode {
  /**
   * Start dragging the slider.
   * @since 7
   */
  /**
   * Start dragging the slider.
   * @form
   * @since 9
   */
  /**
   * Start dragging the slider.
   * @form
   * @crossplatform
   * @since 10
   */
  Begin,

  /**
   * Drag the slider.
   * @since 7
   */
  /**
   * Drag the slider.
   * @form
   * @since 9
   */
  /**
   * Drag the slider.
   * @form
   * @crossplatform
   * @since 10
   */
  Moving,

  /**
   * End dragging the slider.
   * @since 7
   */
  /**
   * End dragging the slider.
   * @form
   * @since 9
   */
  /**
   * End dragging the slider.
   * @form
   * @crossplatform
   * @since 10
   */
  End,

  /**
   * Click the slider.
   * @since 8
   */
  /**
   * Click the slider.
   * @form
   * @since 9
   */
  /**
   * Click the slider.
   * @form
   * @crossplatform
   * @since 10
   */
  Click,
}

/**
 * Defines the options of Slider.
 * @since 7
 */
/**
 * Defines the options of Slider.
 * @form
 * @since 9
 */
/**
 * Defines the options of Slider.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface SliderOptions {
  /**
   * Current value of Slider.
   * @since 7
   */
  /**
   * Current value of Slider.
   * @form
   * @since 9
   */
  /**
   * Current value of Slider.
   * @form
   * @crossplatform
   * @since 10
   */
  value?: number;

  /**
   * Sets the min value of Slider.
   * @since 7
   */
  /**
   * Sets the min value of Slider.
   * @form
   * @since 9
   */
  /**
   * Sets the min value of Slider.
   * @form
   * @crossplatform
   * @since 10
   */
  min?: number;

  /**
   * Sets the max value of Slider.
   * @since 7
   */
  /**
   * Sets the max value of Slider.
   * @form
   * @since 9
   */
  /**
   * Sets the max value of Slider.
   * @form
   * @crossplatform
   * @since 10
   */
  max?: number;

  /**
   * Sets the step of each slide value.
   * @since 7
   */
  /**
   * Sets the step of each slide value.
   * @form
   * @since 9
   */
  /**
   * Sets the step of each slide value.
   * @form
   * @crossplatform
   * @since 10
   */
  step?: number;

  /**
   * Sets the slider style.
   * @since 7
   */
  /**
   * Sets the slider style.
   * @form
   * @since 9
   */
  /**
   * Sets the slider style.
   * @form
   * @crossplatform
   * @since 10
   */
  style?: SliderStyle;

  /**
   * Sets the slider direction style.
   * @since 8
   */
  /**
   * Sets the slider direction style.
   * @form
   * @since 9
   */
  /**
   * Sets the slider direction style.
   * @form
   * @crossplatform
   * @since 10
   */
  direction?: Axis;

  /**
   * Set whether the direction of the slider needs to be reversed.
   * @since 8
   */
  /**
   * Set whether the direction of the slider needs to be reversed.
   * @form
   * @since 9
   */
  /**
   * Set whether the direction of the slider needs to be reversed.
   * @form
   * @crossplatform
   * @since 10
   */
  reverse?: boolean;
}

/**
 * Declare SliderBlockType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SliderBlockType {
  /**
   * Use the default block.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  DEFAULT,

  /**
   * Use an image as the slider block.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  IMAGE,

  /**
   * Use a shape as the slider block.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SHAPE,
}

/**
 * Defines the style of slider block.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SliderBlockStyle {
  /**
   * Sets the type of slider block.
   * @type { SliderBlockType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  type: SliderBlockType;

  /**
   * Sets the image of slider block while the type is set to SliderBlockType.Image.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  image?: ResourceStr;

  /**
   * Sets the shape of slider block while the type is set to SliderBlockType.Shape.
   * @type { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  shape?: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute;
}

/**
 * Provides an interface for the slide bar component.
 * @since 7
 */
/**
 * Provides an interface for the slide bar component.
 * @form
 * @since 9
 */
/**
 * Provides an interface for the slide bar component.
 * @form
 * @crossplatform
 * @since 10
 */
interface SliderInterface {
  /**
   * Called when the slider bar component is used.
   * @since 7
   */
  /**
   * Called when the slider bar component is used.
   * @form
   * @since 9
   */
  /**
   * Called when the slider bar component is used.
   * @form
   * @crossplatform
   * @since 10
   */
  (options?: SliderOptions): SliderAttribute;
}

/**
 * Defines the attribute functions of Slider.
 * @since 7
 */
/**
 * Defines the attribute functions of Slider.
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of Slider.
 * @form
 * @crossplatform
 * @since 10
 */
declare class SliderAttribute extends CommonMethod<SliderAttribute> {
  /**
   * Called when the slider color of the slider bar is set.
   * @since 7
   */
  /**
   * Called when the slider color of the slider bar is set.
   * @form
   * @since 9
   */
  /**
   * Called when the slider color of the slider bar is set.
   * @form
   * @crossplatform
   * @since 10
   */
  blockColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the track color of the slider is set.
   * @since 7
   */
  /**
   * Called when the track color of the slider is set.
   * @form
   * @since 9
   */
  /**
   * Called when the track color of the slider is set.
   * @form
   * @crossplatform
   * @since 10
   */
  trackColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the slider of the slider bar is set to slide over the area color.
   * @since 7
   */
  /**
   * Called when the slider of the slider bar is set to slide over the area color.
   * @form
   * @since 9
   */
  /**
   * Called when the slider of the slider bar is set to slide over the area color.
   * @form
   * @crossplatform
   * @since 10
   */
  selectedColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the minimum label is set.
   * @since 7
   * @deprecated since 9
   * @useinstead min
   */
  minLabel(value: string): SliderAttribute;

  /**
   * Called when the maximum label is set.
   * @since 7
   * @deprecated since 9
   * @useinstead max
   */
  maxLabel(value: string): SliderAttribute;

  /**
   * Called when setting whether to display step size.
   * @since 7
   */
  /**
   * Called when setting whether to display step size.
   * @form
   * @since 9
   */
  /**
   * Called when setting whether to display step size.
   * @form
   * @crossplatform
   * @since 10
   */
  showSteps(value: boolean): SliderAttribute;

  /**
   * Called when the percentage of bubble prompt is set when sliding.
   * @since 7
   */
  /**
   * Called when the percentage of bubble prompt is set when sliding.
   * @form
   * @since 9
   */
  /**
   * Called when the percentage of bubble prompt is set when sliding.
   * @param { boolean } value - Whether to display the bubble.
   * @param { ResourceStr } content - Text content in the bubble. If the content is not specified, the current
   *                                  percentage is displayed by default.
   * @default value false
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showTips(value: boolean, content?: ResourceStr): SliderAttribute;

  /**
   * Called when the thickness of track is set.
   * @since 8
   */
  /**
   * Called when the thickness of track is set.
   * @form
   * @since 9
   */
  /**
   * Called when the thickness of track is set.
   * @form
   * @crossplatform
   * @since 10
   */
  trackThickness(value: Length): SliderAttribute;

  /**
   * Called when the selection value changes.
   * @since 7
   */
  /**
   * Called when the selection value changes.
   * @form
   * @since 9
   */
  /**
   * Called when the selection value changes.
   * @form
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: number, mode: SliderChangeMode) => void): SliderAttribute;

  /**
   * Called when the border color of block is set.
   * @param { ResourceColor } value - the border color of block.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  blockBorderColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the border width of block is set.
   * @param { Length } value - the border width of block. 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  blockBorderWidth(value: Length): SliderAttribute;

  /**
   * Called when the color of step is set.
   * @param { ResourceColor } value - the color of step. 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  stepColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the radius of track border is set.
   * @param { Length } value - the radius of track border.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  trackBorderRadius(value: Length): SliderAttribute;

  /**
   * Called when the size of block is set.
   * @param { SizeOptions } value - the size of block.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  blockSize(value: SizeOptions): SliderAttribute;

  /**
   * Called when the style of block is set.
   * @param { SliderBlockStyle } value - the style of block.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  blockStyle(value: SliderBlockStyle): SliderAttribute;

  /**
   * Called when the diameter of step is set.
   * @param { Length } value - the diameter of step.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  stepSize(value: Length): SliderAttribute;
}

/**
 * Defines Slider Component.
 * @since 7
 */
/**
 * Defines Slider Component.
 * @form
 * @since 9
 */
/**
 * Defines Slider Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Slider: SliderInterface;

/**
 * Defines Slider Component instance.
 * @since 7
 */
/**
 * Defines Slider Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Slider Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const SliderInstance: SliderAttribute;
