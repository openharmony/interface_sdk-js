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
declare interface Resource {
  /**
   * Set id.
   * @since 7
   */
  /**
   * Set id.
   * @form
   * @since 9
   */
  /**
   * Set id.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly id: number;

  /**
   * Set type.
   * @since 7
   */
  /**
   * Set type.
   * @form
   * @since 9
   */
  /**
   * Set type.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly type: number;

  /**
   * Set params.
   * @since 7
   */
  /**
   * Set params.
   * @form
   * @since 9
   */
  /**
   * Set params.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly params?: any[];

  /**
   * Set bundleName.
   * @form
   * @since 9
   */
  /**
   * Set bundleName.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly bundleName: string;

  /**
   * Set moduleName.
   * @form
   * @since 9
   */
  /**
   * Set moduleName.
   * @form
   * @crossplatform
   * @since 10
   */
  readonly moduleName: string;
}

/**
 * Defines the length property with string, number and resource unit.
 * @since 7
 */
/**
 * Defines the length property with string, number and resource unit.
 * @form
 * @since 9
 */
/**
 * Defines the length property with string, number and resource unit.
 * @form
 * @crossplatform
 * @since 10
 */
declare type Length = string | number | Resource;

/**
 * Defines the length property with number in units of px.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type PX = `${number}px`;

/**
 * Defines the length property with number in units of vp.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type VP = `${number}vp`;

/**
 * Defines the length property with number in units of fp.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type FP = `${number}fp`;

/**
 * Defines the length property with number in units of lpx.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type LPX = `${number}lpx`;

/**
 * Defines the length property with number in units of Percentage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Percentage = `${number}%`;

/**
 * Defines the angle property with number in units of deg.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Degree = `${number}deg`;

/**
 * Defines the dimension property with number with units(vp|px|fp|lpx|%), number and resource unit.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Dimension = PX | VP | FP | LPX | Percentage | number | Resource;

/**
 * Defines the string which can use resource.
 * @since 7
 */
/**
 * Defines the string which can use resource.
 * @form
 * @since 9
 */
/**
 * Defines the string which can use resource.
 * @form
 * @crossplatform
 * @since 10
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the padding property.
 * @since 7
 */
/**
 * Defines the padding property.
 * @form
 * @since 9
 */
/**
 * Defines the padding property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type Padding = {
  /**
   * top property.
   * @since 7
   */
  /**
   * top property.
   * @form
   * @since 9
   */
  /**
   * top property.
   * @form
   * @crossplatform
   * @since 10
   */
  top?: Length;

  /**
   * right property.
   * @since 7
   */
  /**
   * right property.
   * @form
   * @since 9
   */
  /**
   * right property.
   * @form
   * @crossplatform
   * @since 10
   */
  right?: Length;

  /**
   * bottom property.
   * @since 7
   */
  /**
   * bottom property.
   * @form
   * @since 9
   */
  /**
   * bottom property.
   * @form
   * @crossplatform
   * @since 10
   */
  bottom?: Length;

  /**
   * left property.
   * @since 7
   */
  /**
   * left property.
   * @form
   * @since 9
   */
  /**
   * left property.
   * @form
   * @crossplatform
   * @since 10
   */
  left?: Length;
};

/**
 * Defines the margin property.
 * @since 7
 */
/**
 * Defines the margin property.
 * @form
 * @since 9
 */
/**
 * Defines the margin property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type Margin = Padding;

/**
 * Defines the border width property.
 * @form
 * @since 9
 */
/**
 * Defines the border width property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type EdgeWidths = {
  /**
   * top property.
   * @form
   * @since 9
   */
  /**
   * top property.
   * @form
   * @crossplatform
   * @since 10
   */
  top?: Length;

  /**
   * right property.
   * @form
   * @since 9
   */
  /**
   * right property.
   * @form
   * @crossplatform
   * @since 10
   */
  right?: Length;

  /**
   * bottom property.
   * @form
   * @since 9
   */
  /**
   * bottom property.
   * @form
   * @crossplatform
   * @since 10
   */
  bottom?: Length;

  /**
   * left property.
   * @form
   * @since 9
   */
  /**
   * left property.
   * @form
   * @crossplatform
   * @since 10
   */
  left?: Length;
};

/**
 * Defines the border radius property.
 * @form
 * @since 9
 */
/**
 * Defines the border radius property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type BorderRadiuses = {
  /**
   * top-left property.
   * @form
   * @since 9
   */
  /**
   * top-left property.
   * @form
   * @crossplatform
   * @since 10
   */
  topLeft?: Length;

  /**
   * top-right property.
   * @form
   * @since 9
   */
  /**
   * top-right property.
   * @form
   * @crossplatform
   * @since 10
   */
  topRight?: Length;

  /**
   * bottom-left property.
   * @form
   * @since 9
   */
  /**
   * bottom-left property.
   * @form
   * @crossplatform
   * @since 10
   */
  bottomLeft?: Length;

  /**
   * bottom-right property.
   * @form
   * @since 9
   */
  /**
   * bottom-right property.
   * @form
   * @crossplatform
   * @since 10
   */
  bottomRight?: Length;
};

/**
 * Defines the border color property.
 * @form
 * @since 9
 */
/**
 * Defines the border color property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type EdgeColors = {
  /**
   * top property.
   * @form
   * @since 9
   */
  /**
   * top property.
   * @form
   * @crossplatform
   * @since 10
   */
  top?: ResourceColor;

  /**
   * right property.
   * @form
   * @since 9
   */
  /**
   * right property.
   * @form
   * @crossplatform
   * @since 10
   */
  right?: ResourceColor;

  /**
   * bottom property.
   * @form
   * @since 9
   */
  /**
   * bottom property.
   * @form
   * @crossplatform
   * @since 10
   */
  bottom?: ResourceColor;

  /**
   * left property.
   * @form
   * @since 9
   */
  /**
   * left property.
   * @form
   * @crossplatform
   * @since 10
   */
  left?: ResourceColor;
};

/**
 * Defines the border style property.
 * @form
 * @since 9
 */
/**
 * Defines the border style property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type EdgeStyles = {
  /**
   * top property.
   * @form
   * @since 9
   */
  /**
   * top property.
   * @form
   * @crossplatform
   * @since 10
   */
  top?: BorderStyle;

  /**
   * right property.
   * @form
   * @since 9
   */
  /**
   * right property.
   * @form
   * @crossplatform
   * @since 10
   */
  right?: BorderStyle;

  /**
   * bottom property.
   * @form
   * @since 9
   */
  /**
   * bottom property.
   * @form
   * @crossplatform
   * @since 10
   */
  bottom?: BorderStyle;

  /**
   * left property.
   * @form
   * @since 9
   */
  /**
   * left property.
   * @form
   * @crossplatform
   * @since 10
   */
  left?: BorderStyle;
};

/**
 * Defines the offset property.
 * @since 7
 */
/**
 * Defines the offset property.
 * @crossplatform
 * @since 10
 */
declare type Offset = {
  /**
   * dx property.
   */
  /**
   * dx property.
   * @crossplatform
   * @since 10
   */
   dx: Length;

  /**
   * dy property.
   */
  /**
   * dy property.
   * @crossplatform
   * @since 10
   */
  dy: Length;
};

/**
 * Defines the color which can use resource.
 * @since 7
 */
/**
 * Defines the color which can use resource.
 * @form
 * @since 9
 */
/**
 * Defines the color which can use resource.
 * @form
 * @crossplatform
 * @since 10
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the length constrain property.
 * @form
 * @since 9
 */
/**
 * Defines the length constrain property.
 * @form
 * @crossplatform
 * @since 10
 */
declare type LengthConstrain = {
  /**
   * minimum length.
   * @form
   * @since 9
   */
  /**
   * minimum length.
   * @form
   * @crossplatform
   * @since 10
   */
  minLength: Length;

  /**
   * maximum length.
   * @form
   * @since 9
   */
  /**
   * maximum length.
   * @form
   * @crossplatform
   * @since 10
   */
  maxLength: Length;
};

/**
 * Defines the font used for text.
 * @since 7
 */
/**
 * Defines the font used for text.
 * @crossplatform
 * @since 10
 */
declare interface Font {
  /**
   * font size.
   */
  /**
   * font size.
   * @crossplatform
   * @since 10
   */
  size?: Length;

  /**
   * font weight.
   */
  /**
   * font weight.
   * @crossplatform
   * @since 10
   */
  weight?: FontWeight | number | string;

  /**
   * font family.
   */
  /**
   * font family.
   * @crossplatform
   * @since 10
   */
  family?: string | Resource;

  /**
   * font style.
   */
  /**
   * font style.
   * @crossplatform
   * @since 10
   */
  style?: FontStyle;
}

/**
 * Defines the area property.
 * @since 8
 */
/**
 * Defines the area property.
 * @form
 * @since 9
 */
/**
 * Defines the area property.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface Area {
  /**
   * Defines the width property.
   * @since 8
   */
  /**
   * Defines the width property.
   * @form
   * @since 9
   */
  /**
   * Defines the width property.
   * @form
   * @crossplatform
   * @since 10
   */
  width: Length;

  /**
   * Defines the height property.
   * @since 8
   */
  /**
   * Defines the height property.
   * @form
   * @since 9
   */
  /**
   * Defines the height property.
   * @form
   * @crossplatform
   * @since 10
   */
  height: Length;

  /**
   * Defines the local position.
   * @since 8
   */
  /**
   * Defines the local position.
   * @form
   * @since 9
   */
  /**
   * Defines the local position.
   * @form
   * @crossplatform
   * @since 10
   */
  position: Position;

  /**
   * Defines the global position.
   * @since 8
   */
  /**
   * Defines the global position.
   * @form
   * @since 9
   */
  /**
   * Defines the global position.
   * @form
   * @crossplatform
   * @since 10
   */
  globalPosition: Position;
}

/**
 * Defines the position.
 * @since 7
 */
/**
 * Defines the position.
 * @form
 * @since 9
 */
/**
 * Defines the position.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface Position {
  /**
   * Coordinate x of the Position.
   * @since 7
   */
  /**
   * Coordinate x of the Position.
   * @form
   * @since 9
   */
  /**
   * Coordinate x of the Position.
   * @form
   * @crossplatform
   * @since 10
   */
  x?: Length;

  /**
   * Coordinate y of the Position.
   * @since 7
   */
  /**
   * Coordinate y of the Position.
   * @form
   * @since 9
   */
  /**
   * Coordinate y of the Position.
   * @form
   * @crossplatform
   * @since 10
   */
  y?: Length;
}

/**
 * Defines the constrain size options.
 * @since 7
 */
/**
 * Defines the constrain size options.
 * @form
 * @since 9
 */
/**
 * Defines the constrain size options.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface ConstraintSizeOptions {
  /**
   * Defines the min width.
   * @since 7
   */
  /**
   * Defines the min width.
   * @form
   * @since 9
   */
  /**
   * Defines the min width.
   * @form
   * @crossplatform
   * @since 10
   */
  minWidth?: Length;

  /**
   * Defines the max width.
   * @since 7
   */
  /**
   * Defines the max width.
   * @form
   * @since 9
   */
  /**
   * Defines the max width.
   * @form
   * @crossplatform
   * @since 10
   */
  maxWidth?: Length;

  /**
   * Defines the min height.
   * @since 7
   */
  /**
   * Defines the min height.
   * @form
   * @since 9
   */
  /**
   * Defines the min height.
   * @form
   * @crossplatform
   * @since 10
   */
  minHeight?: Length;

  /**
   * Defines the max height.
   * @since 7
   */
  /**
   * Defines the max height.
   * @form
   * @since 9
   */
  /**
   * Defines the max height.
   * @form
   * @crossplatform
   * @since 10
   */
  maxHeight?: Length;
}

/**
 * Defines the size options.
 * @since 7
 */
/**
 * Defines the size options.
 * @form
 * @since 9
 */
/**
 * Defines the size options.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface SizeOptions {
  /**
   * Defines the width.
   * @since 7
   */
  /**
   * Defines the width.
   * @form
   * @since 9
   */
  /**
   * Defines the width.
   * @form
   * @crossplatform
   * @since 10
   */
  width?: Length;

  /**
   * Defines the height.
   * @since 7
   */
  /**
   * Defines the height.
   * @form
   * @since 9
   */
  /**
   * Defines the height.
   * @form
   * @crossplatform
   * @since 10
   */
  height?: Length;
}

/**
 * Defines the options of border.
 * @since 7
 */
/**
 * Defines the options of border.
 * @form
 * @since 9
 */
/**
 * Defines the options of border.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BorderOptions {
  /**
   * Defines the border width.
   * @type { Length }
   * @since 7
   */
  /**
   * Defines the border width.
   * @type { EdgeWidths | Length }
   * @form
   * @since 9
   */
  /**
   * Defines the border width.
   * @type { EdgeWidths | Length }
   * @form
   * @crossplatform
   * @since 10
   */
  width?: EdgeWidths | Length;

  /**
   * Defines the border color.
   * @type { ResourceColor }
   * @since 7
   */
  /**
   * Defines the border color.
   * @type { EdgeColors | ResourceColor }
   * @form
   * @since 9
   */
  /**
   * Defines the border color.
   * @type { EdgeColors | ResourceColor }
   * @form
   * @crossplatform
   * @since 10
   */
  color?: EdgeColors | ResourceColor;

  /**
   * Defines the border radius.
   * @type { Length }
   * @since 7
   */
  /**
   * Defines the border radius.
   * @type { BorderRadiuses | Length }
   * @form
   * @since 9
   */
  /**
   * Defines the border radius.
   * @type { BorderRadiuses | Length }
   * @form
   * @crossplatform
   * @since 10
   */
  radius?: BorderRadiuses | Length;

  /**
   * Defines the border style.
   * @type { BorderStyle }
   * @since 7
   */
  /**
   * Defines the border style.
   * @type { EdgeStyles | BorderStyle }
   * @form
   * @since 9
   */
  /**
   * Defines the border style.
   * @type { EdgeStyles | BorderStyle }
   * @form
   * @crossplatform
   * @since 10
   */
  style?: EdgeStyles | BorderStyle;
}

/**
 * Define the style of checkbox mark.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface MarkStyle {
  /**
   * Define the stroke color of checkbox mark.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeColor?: ResourceColor;

  /**
   * Define the size of checkbox mark.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  size?: Length;

  /**
   * Define the stroke width of checkbox mark.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeWidth?: Length;
}

/**
 * Defines the ColorFilter object.
 * @form
 * @since 9
 */
/**
 * Defines the ColorFilter object.
 * @form
 * @crossplatform
 * @since 10
 */
declare class ColorFilter {
  /**
   * Creates ColorFilter with 4*5 matrix.
   * @param value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @form
   * @since 9
   */
  /**
   * Creates ColorFilter with 4*5 matrix.
   * @param value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @form
   * @crossplatform
   * @since 10
   */
  constructor(value: number[]);
}

declare module "GlobalResource" {
  module "GlobalResource" {
    // @ts-ignore
    export { Resource };
  }
}
