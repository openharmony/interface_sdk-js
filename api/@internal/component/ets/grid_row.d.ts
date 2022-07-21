/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
* Defines the option in length unit of grid-container component.
* @since 9
*/
declare interface GridRowSizeOption {
    /**
    * Grid Row Size Option xs
    * @since 9
    */
    xs?: Length,

    /**
    * Grid Row Size Option sm
    * @since 9
    */
    sm?: Length,

    /**
    * Grid Row Size Option md
    * @since 9
    */
    md?: Length,

    /**
    * Grid Row Size Option lg
    * @since 9
    */
    lg?: Length,

    /**
    * Grid Row Size Option xl
    * @since 9
    */
    xl?: Length,

    /**
    * Grid Row Size Option xxl
    * @since 9
    */
    xxl?: Length,
}

/**
* Defines the option in number unit of grid-container component.
* @since 9
*/
declare interface GridRowColumnOption {
    /**
    * Grid Row Column Option xs
    * @since 9
    */
    xs?: number,

    /**
    * Grid Row Column Option sm
    * @since 9
    */
    sm?: number,
    
    /**
    * Grid Row Column Option md
    * @since 9
    */
    md?: number,
    
    /**
    * Grid Row Column Option lg
    * @since 9
    */
    lg?: number,
    
    /**
    * Grid Row Column Option xl
    * @since 9
    */
    xl?: number,
    
    /**
    * Grid Row Column Option xxl
    * @since 9
    */
    xxl?: number,
}

/**
* Defines the getter of grid-container component.
* @since 9
*/
declare interface GetterOption {
    /**
    * Define x in getteroption
    * @since 9
    */
    x?: Length | GridRowSizeOption,
    
    /**
    * Define y in getteroption
    * @since 9
    */
    y?: Length | GridRowSizeOption
}

/**
* Defines the breakpoint reference of grid-container component.
* @since 9
*/
declare enum BreakpointsReference {
    /**
    * Respond to breakpoint changes according to window width
    * @since 9
    */
    WindowSize,

    /**
    * Respond to breakpoint changes according to component width
    * @since 9
    */
    ComponentSize,
}

/**
* Defines the direction of grid-container component.
* @since 9
*/
declare enum GridRowDirection {
    /**
    * The elements in the grid component are arranged in rows
    * @since 9
    */
    Row,

    /**
    * The elements in the grid component are arranged in reverse order of rows
    * @since 9
    */
    RowReverse,
}

/**
* Defines the breakpoints of grid-container component.
* @since 9
*/
declare interface BreakPoints {
    /**
    * Breakpoint array
    * @since 9
    */
    value?: Array<string>,

    /**
    * Set breakpoint reference
    * @since 9
    */
    reference?: BreakpointsReference,
}

/**
 * Defines the options of grid-container component.
 * @since 9
 */
declare interface GridRowOptions {
    /**
     * grid-container layout column spacing.
     * @since 9
     */
    gutter?: Length | GetterOption;

    /**
     * Sets the total number of columns in the current layout.
     * @since 9
     */
    columns?: number | GridRowColumnOption;

    /**
     * grid-container layout breakpoints.
     * @since 9
     */
    breakpoints?: BreakPoints;

    /**
     * grid-container layout direction.
     * @since 9
     */
    direction?: GridRowDirection;
}


/**
 * Defines the the new version of grid-container component.
 * @since 9
 */
interface GridRowInterface {
    /**
     * Defines the constructor of GridContainer.
     * @since 9
     */
    (optiion?: GridRowOptions): GridRowAttribute;
}

declare class GridRowAttribute extends CommonMethod<GridRowAttribute> {
    /**
    * Callback triggered when the breakpoint changes
    * @since 9
    */
    onBreakpointChange(callback: (breakpoints: string) => void): GridRowAttribute;
}

declare const GridRow: GridRowInterface;
declare const GridRowInstance: GridRowAttribute;