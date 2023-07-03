/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines the option in number unit of grid-container child component.
 * @form
 * @since 9
 */
/**
 * Defines the option in number unit of grid-container child component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface GridColColumnOption {
  /**
   * Grid Col Column Option xs
   * @form
   * @since 9
   */
  /**
   * Grid Col Column Option xs
   * @form
   * @crossplatform
   * @since 10
   */
  xs?: number,

  /**
   * Grid Col Column Option sm
   * @form
   * @since 9
   */
  /**
   * Grid Col Column Option sm
   * @form
   * @crossplatform
   * @since 10
   */
  sm?: number,

  /**
   * Grid Col Column Option md
   * @form
   * @since 9
   */
  /**
   * Grid Col Column Option md
   * @form
   * @crossplatform
   * @since 10
   */
  md?: number,

  /**
   * Grid Col Column Option lg
   * @form
   * @since 9
   */
  /**
   * Grid Col Column Option lg
   * @form
   * @crossplatform
   * @since 10
   */
  lg?: number,

  /**
   * Grid Col Column Option xl
   * @form
   * @since 9
   */
  /**
   * Grid Col Column Option xl
   * @form
   * @crossplatform
   * @since 10
   */
  xl?: number,

  /**
   * Grid Col Column Option xxl
   * @form
   * @since 9
   */
  /**
   * Grid Col Column Option xxl
   * @form
   * @crossplatform
   * @since 10
   */
  xxl?: number,
}

/**
 * Defines the options of grid-container child component.
 * @form
 * @since 9
 */
/**
 * Defines the options of grid-container child component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface GridColOptions {
  /**
   * Sets the span of current gird-container item.
   * @form
   * @since 9
   */
  /**
   * Sets the span of current gird-container item.
   * @form
   * @crossplatform
   * @since 10
   */
  span?: number | GridColColumnOption;

  /**
   * Sets the offset of current gird-container item.
   * @form
   * @since 9
   */
  /**
   * Sets the offset of current gird-container item.
   * @form
   * @crossplatform
   * @since 10
   */
  offset?: number | GridColColumnOption;

  /**
   * Sets the order of current gird-container item.
   * @form
   * @since 9
   */
  /**
   * Sets the order of current gird-container item.
   * @form
   * @crossplatform
   * @since 10
   */
  order?: number | GridColColumnOption;
}

/**
 * Defines the the new version of grid-container child component.
 * @form
 * @since 9
 */
/**
 * Defines the the new version of grid-container child component.
 * @form
 * @crossplatform
 * @since 10
 */
interface GridColInterface {
  /**
   * Defines the constructor of GridContainer.
   * @form
   * @since 9
   */
  /**
   * Defines the constructor of GridContainer.
   * @form
   * @crossplatform
   * @since 10
   */
  (option?: GridColOptions): GridColAttribute;
}

declare class GridColAttribute extends CommonMethod<GridColAttribute> {
  /**
   * Sets the span of current gird-container item.
   * @form
   * @since 9
   */
  /**
   * Sets the span of current gird-container item.
   * @form
   * @crossplatform
   * @since 10
   */
  span(value: number | GridColColumnOption): GridColAttribute;

  /**
   * Sets the offset of current gird-container item.
   * @form
   * @since 9
   */
  /**
   * Sets the offset of current gird-container item.
   * @form
   * @crossplatform
   * @since 10
   */
  gridColOffset(value: number | GridColColumnOption): GridColAttribute;

  /**
   * Sets the order of current gird-container item.
   * @form
   * @since 9
   */
  /**
   * Sets the order of current gird-container item.
   * @form
   * @crossplatform
   * @since 10
   */
  order(value: number | GridColColumnOption): GridColAttribute;
}

/**
 * Defines GridCol Component.
 * @form
 * @since 9
 */
/**
 * Defines GridCol Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const GridCol: GridColInterface

/**
 * Defines GridCol Component instance.
 * @form
 * @since 9
 */
/**
 * Defines GridCol Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const GridColInstance: GridColAttribute;