/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSAlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): AlphabetIndexerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): AlphabetIndexerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: { arrayValue: Array<string>; selected: number }): AlphabetIndexerAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSAnimatorAttribute extends CommonMethod<AnimatorAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: string): AnimatorAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSBadgeAttribute extends CommonMethod<BadgeAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { BadgeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): BadgeAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { BadgeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): BadgeAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { BadgeParamWithNumber | BadgeParamWithString } value
   * @returns { BadgeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: BadgeParamWithNumber | BadgeParamWithString): BadgeAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSBlankAttribute extends CommonMethod<BlankAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { number | string } min
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(min?: number | string): BlankAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): BlankAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): BlankAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSButtonAttribute extends CommonMethod<ButtonAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { ResourceStr } label
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  createWithChild(label?: ResourceStr, options?: ButtonOptions): ButtonAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { ResourceStr } label
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  createWithLabel(label?: ResourceStr, options?: ButtonOptions): ButtonAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ButtonAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ButtonAttribute;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSCalendarAttribute {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: {
    date: {
      year: number;
      month: number;
      day: number;
    };
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
  }): CalendarAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): CalendarAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): CalendarAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSCanvasAttribute extends CommonMethod<CanvasAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { CanvasRenderingContext2D } context
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(context?: CanvasRenderingContext2D): CanvasAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): CanvasAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): CanvasAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSCheckboxAttribute extends CommonMethod<CheckboxAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: CheckboxOptions): CheckboxAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): CheckboxAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): CheckboxAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSCheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { CheckboxGroupOptions } options
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: CheckboxGroupOptions): CheckboxGroupAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): CheckboxGroupAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): CheckboxGroupAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSCircleAttribute extends CommonShapeMethod<CircleAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: CircleOptions): CircleAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): CircleAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSColumnAttribute extends CommonMethod<ColumnAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { space?: string | number }): ColumnAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ColumnAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ColumnAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): ColumnSplitAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ColumnSplitAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ColumnSplitAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSCounterAttribute extends CommonMethod<CounterAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): CounterAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): CounterAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): CounterAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSDataPanelAttribute extends CommonMethod<DataPanelAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { DataPanelOptions } options
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options: DataPanelOptions): DataPanelAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): DataPanelAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): DataPanelAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSDatePickerAttribute extends CommonMethod<DatePickerAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { DatePickerOptions } options
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: DatePickerOptions): DatePickerAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): DatePickerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): DatePickerAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSDividerAttribute extends CommonMethod<DividerAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): DividerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): DividerAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSEllipseAttribute extends CommonShapeMethod<EllipseAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { width?: string | number; height?: string | number }): EllipseAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): EllipseAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSFlexAttribute extends CommonMethod<FlexAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { FlexOptions } value
   * @returns { FlexAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: FlexOptions): FlexAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { FlexAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): FlexAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { FlexAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): FlexAttribute;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSForEachInterface {
  /**
   * Used for TS compiler.
   *
   * @param { Array<any> } arr
   * @param { function } itemGenerator
   * @param { function } keyGenerator
   * @returns { ForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(
    arr: Array<any>,
    itemGenerator: (item: any, index?: number) => void,
    keyGenerator?: (item: any, index?: number) => string,
  ): ForEachInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { ForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ForEachInterface;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ForEachInterface;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSFormComponentAttribute extends CommonMethod<FormComponentAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: {
    id: number;
    name: string;
    bundle: string;
    ability: string;
    module: string;
    dimension?: FormDimension;
    temporary?: boolean;
  }): FormComponentAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { FormComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): FormComponentAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSGaugeAttribute extends CommonMethod<GaugeAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } options
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options: { value: number; min?: number; max?: number }): GaugeAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): GaugeAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSGridAttribute extends CommonMethod<GridAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { Scroller } scroller
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(scroller?: Scroller): GridAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): GridAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): GridAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSGridItemAttribute extends CommonMethod<GridItemAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): GridItemAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): GridItemAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): GridItemAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends ColumnAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSGridContainerAttribute extends ColumnAttribute {
  /**
   * Used for TS compiler.
   *
   * @param { GridContainerOptions } value
   * @returns { GridContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: GridContainerOptions): GridContainerAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { GridContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): GridContainerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { GridContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): GridContainerAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSImageAttribute extends CommonMethod<ImageAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { string | PixelMap | Resource } src
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(src: string | PixelMap | Resource): ImageAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ImageAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSImageAnimatorAttribute extends CommonMethod<ImageAnimatorAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): ImageAnimatorAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ImageAnimatorAttribute;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSLazyForEachInterface {
  /**
   * Used for TS compiler.
   *
   * @param { IDataSource } dataSource
   * @param { function } itemGenerator
   * @param { function } keyGenerator
   * @returns { LazyForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(
    dataSource: IDataSource,
    itemGenerator: (item: any, index?: number) => void,
    keyGenerator?: (item: any, index?: number) => string,
  ): LazyForEachInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { LazyForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): LazyForEachInterface;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { LazyForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): LazyForEachInterface;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSLineAttribute extends CommonShapeMethod<LineAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { width?: string | number; height?: string | number }): LineAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): LineAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSListAttribute extends CommonMethod<ListAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { initialIndex?: number; space?: number | string; scroller?: Scroller }): ListAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ListAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ListAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSListItemAttribute extends CommonMethod<ListItemAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: string): ListItemAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ListItemAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ListItemAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSLoadingProgressAttribute extends CommonMethod<LoadingProgressAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { LoadingProgressAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): LoadingProgressAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { LoadingProgressAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): LoadingProgressAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { ResourceColor } value
   * @returns { LoadingProgressAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  color(value: ResourceColor): LoadingProgressAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSMarqueeAttribute extends CommonMethod<MarqueeAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: { start: boolean; step?: number; loop?: number; fromStart?: boolean; src: string }): MarqueeAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): MarqueeAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): MarqueeAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSNavigationAttribute extends CommonMethod<NavigationAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): NavigationAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): NavigationAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): NavigationAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSNavigatorAttribute extends CommonMethod<NavigatorAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { target: string; type?: NavigationType }): NavigatorAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): NavigatorAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): NavigatorAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: {
    type?: RouteType;
    duration?: number;
    curve?: Curve | string;
    delay?: number;
  }): PageTransitionEnterInterface;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: {
    type?: RouteType;
    duration?: number;
    curve?: Curve | string;
    delay?: number;
  }): PageTransitionExitInterface;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPanelAttribute extends CommonMethod<PanelAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { boolean } show
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(show: boolean): PanelAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): PanelAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): PanelAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPathAttribute extends CommonShapeMethod<PathAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { width?: number | string; height?: number | string; commands?: string }): PathAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): PathAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): PathAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPatternLockAttribute extends CommonMethod<TSPatternLockAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { PatternLockController } controller
   * @returns { TSPatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(controller?: PatternLockController): TSPatternLockAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TSPatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TSPatternLockAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TSPatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TSPatternLockAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPieceAttribute extends CommonMethod<PieceAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } options
   * @returns { PieceAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: { content: string; icon?: string }): PieceAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { PieceAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): PieceAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { PieceAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): PieceAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: { template: PluginComponentTemplate; data: any }): PluginComponentAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): PluginComponentAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): PluginComponentAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPolygonAttribute extends CommonShapeMethod<PolygonAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PolygonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { width?: string | number; height?: string | number }): PolygonAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { PolygonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): PolygonAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPolylineAttribute extends CommonShapeMethod<PolylineAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PolylineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { width?: string | number; height?: string | number }): PolylineAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { PolylineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): PolylineAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSProgressAttribute extends CommonMethod<ProgressAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { ProgressOptions } options
   * @returns { ProgressAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options: ProgressOptions): ProgressAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ProgressAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ProgressAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSQRCodeAttribute extends CommonMethod<QRCodeAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: string): QRCodeAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): QRCodeAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): QRCodeAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRadioAttribute extends CommonMethod<RadioAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options: RadioOptions): RadioAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RadioAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRatingAttribute extends CommonMethod<RatingAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } options
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: { rating: number; indicator?: boolean }): RatingAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): RatingAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RatingAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RatingAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRectAttribute extends CommonShapeMethod<RectAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { | { width?: number | string;height?: number | string;radius?: number | string | Array<any>;}
   * | {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(
    value?:
      | {
        width?: number | string;
        height?: number | string;
        radius?: number | string | Array<any>;
        }
      | {
        width?: number | string;
        height?: number | string;
        radiusWidth?: number | string;
        radiusHeight?: number | string;
      },
  ): RectAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RectAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRefreshAttribute extends CommonMethod<RefreshAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: { refreshing: boolean; offset?: number | string; friction?: number | string }): RefreshAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): RefreshAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RefreshAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RefreshAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRowAttribute extends CommonMethod<RowAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { space?: string | number }): RowAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): RowAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RowAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRowSplitAttribute extends CommonMethod<RowSplitAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): RowSplitAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): RowSplitAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RowSplitAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSScrollAttribute extends CommonMethod<ScrollAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { Scroller } scroller
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(scroller?: Scroller): ScrollAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ScrollAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ScrollAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSScrollBarAttribute extends CommonMethod<ScrollBarAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { ScrollBarOptions } value
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: ScrollBarOptions): ScrollBarAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ScrollBarAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ScrollBarAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSearchAttribute extends CommonMethod<SearchAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } options
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: {
    value?: string;
    placeholder?: string;
    icon?: string;
    controller?: SearchController;
  }): SearchAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): SearchAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): SearchAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSelectAttribute extends CommonMethod<SelectAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { Array<SelectOptions> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options: Array<SelectOptions>): SelectAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): SelectAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): SelectAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSShapeAttribute extends CommonMethod<ShapeAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { PixelMap } value
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: PixelMap): ShapeAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ShapeAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ShapeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ShapeAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSheetAttribute extends CommonMethod<SheetAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { SheetAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): SheetAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { SheetAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): SheetAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { SheetAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): SheetAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSliderAttribute extends CommonMethod<SliderAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { SliderOptions } options
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: SliderOptions): SliderAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): SliderAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSpanAttribute extends CommonMethod<SpanAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { string | Resource } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: string | Resource): SpanAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { SpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): SpanAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSStackAttribute extends CommonMethod<StackAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { alignContent?: Alignment }): StackAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): StackAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): StackAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSStepperAttribute extends CommonMethod<StepperAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { index?: number }): StepperAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): StepperAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): StepperAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSStepperItemAttribute extends CommonMethod<StepperItemAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): StepperItemAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): StepperItemAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): StepperItemAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSwiperAttribute extends CommonMethod<SwiperAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { SwiperController } controller
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(controller?: SwiperController): SwiperAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): SwiperAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): SwiperAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTabContentAttribute extends CommonMethod<TabContentAttribute> {
  /**
   * Used for TS compiler.
   *
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(): TabContentAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TabContentAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TabContentAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTabsAttribute extends CommonMethod<TabsAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { barPosition?: BarPosition; index?: number; controller?: TabsController }): TabsAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TabsAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TabsAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTextAttribute extends CommonMethod<TextAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { string | Resource } content
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(content?: string | Resource): TextAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TextAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TextAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTextAreaAttribute extends CommonMethod<TextAreaAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { TextAreaOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: TextAreaOptions): TextAreaAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TextAreaAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTextClockAttribute extends CommonMethod<TextClockAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } options
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: { timeZoneOffset?: number; controller?: TextClockController }): TextClockAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TextClockAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TextClockAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTextInputAttribute extends CommonMethod<TextInputAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { TextInputOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: TextInputOptions): TextInputAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TextInputAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTextPickerAttribute extends CommonMethod<TextPickerAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { TextPickerOptions } options
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: TextPickerOptions): TextPickerAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TextPickerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TextPickerAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTextTimerAttribute extends CommonMethod<TextTimerAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { TextTimerOptions } options
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options?: TextTimerOptions): TextTimerAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TextTimerAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): TextTimerAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSToggleAttribute extends CommonMethod<ToggleAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } options
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(options: { type: ToggleType; isOn?: boolean }): ToggleAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): ToggleAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): ToggleAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSVideoAttribute extends CommonMethod<VideoAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: {
    src?: string | Resource;
    previewUri?: string | PixelMap | Resource;
    controller?: VideoController;
  }): VideoAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): VideoAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSWebAttribute extends CommonMethod<WebAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { WebOptions } value
   * @returns { WebAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: WebOptions): WebAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { WebAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): WebAttribute;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSXComponentAttribute extends CommonMethod<XComponentAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value: {
    id: string;
    type: string;
    libraryname?: string;
    controller?: XComponentController;
  }): XComponentAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): XComponentAttribute;
}

/**
 * Used for TS compiler.
 *
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRichTextAttribute {
  /**
   * Used for TS compiler.
   *
   * @param { string } content
   * @returns { RichTextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(content: string): RichTextAttribute;
  /**
   * Used for TS compiler.
   *
   * @returns { RichTextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): RichTextAttribute;
  /**
   * Used for TS compiler.
   *
   * @param { string } value
   * @returns { RichTextAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  debugLine(value: string): RichTextAttribute;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSTapGestureInterface {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { count?: number; fingers?: number }): TapGestureInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): TapGestureInterface;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSLongPressGestureInterface {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGestureInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): LongPressGestureInterface;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPanGestureInterface {
  /**
   * Used for TS compiler.
   *
   * @param { | {fingers?: number;direction?: PanDirection;distance?: number;} | PanGestureOptions } value
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(
    value?:
      | {
        fingers?: number;
        direction?: PanDirection;
        distance?: number;
      }
      | PanGestureOptions,
  ): PanGestureInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): PanGestureInterface;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSSwipeGestureInterface {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { fingers?: number; direction?: SwipeDirection; speed?: number }): SwipeGestureInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): SwipeGestureInterface;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSPinchGestureInterface {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { fingers?: number; distance?: number }): PinchGestureInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): PinchGestureInterface;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSRotationGestureInterface {
  /**
   * Used for TS compiler.
   *
   * @param { object } value
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(value?: { fingers?: number; angle?: number }): RotationGestureInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): RotationGestureInterface;
}

/**
 * Used for TS compiler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 8
 * @ignore
 */
declare class TSGestureGroupInterface {
  /**
   * Used for TS compiler.
   *
   * @param { GestureMode } mode
   * @param { GestureType[] } gesture
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  create(mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface;
  /**
   * Used for TS compiler.
   *
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 8
   * @ignore
   */
  pop(): GestureGroupInterface;
}

/**
 * Used for TS compiler.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9
 * @ignore
 */
declare class TSRemoteWindowAttribute extends CommonMethod<RemoteWindowAttribute> {
  /**
   * Used for TS compiler.
   *
   * @param { WindowAnimationTarget } target
   * @returns { RemoteWindowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   * @ignore
   */
  create(target: WindowAnimationTarget): RemoteWindowAttribute;

  /**
   * Used for TS compiler.
   *
   * @returns { RemoteWindowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   * @ignore
   */
  pop(): RemoteWindowAttribute;
}
