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

declare class TSAlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
    pop(): AlphabetIndexerAttribute;
    debugLine(value: string): AlphabetIndexerAttribute;
    create(value: {
        arrayValue: Array<string>;
        selected: number;
    }): AlphabetIndexerAttribute;
}

declare class TSAnimatorAttribute extends CommonMethod<AnimatorAttribute> {
    create(value: string): AnimatorAttribute;
}

declare class TSBadgeAttribute extends CommonMethod<BadgeAttribute> {
    pop(): BadgeAttribute;
    debugLine(value: string): BadgeAttribute;
    create(value: BadgeParamWithNumber | BadgeParamWithString): BadgeAttribute;
}

declare class TSBlankAttribute extends CommonMethod<BlankAttribute> {
    create(min?: number | string): BlankAttribute;
    pop(): BlankAttribute;
    debugLine(value: string): BlankAttribute;
}

declare class TSButtonAttribute extends CommonMethod<ButtonAttribute> {
    createWithChild(label?: ResourceStr, options?: ButtonOption): ButtonAttribute;
    createWithLabel(label?: ResourceStr, options?: ButtonOption): ButtonAttribute;
    pop(): ButtonAttribute;
    debugLine(value: string): ButtonAttribute;
}

declare class TSCalendarAttribute {
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
    pop(): CalendarAttribute;
    debugLine(value: string): CalendarAttribute;
}

declare class TSCanvasAttribute extends CommonMethod<CanvasAttribute> {
    create(context?: CanvasRenderingContext2D): CanvasAttribute;
    pop(): CanvasAttribute;
    debugLine(value: string): CanvasAttribute;
}

declare class TSCheckboxAttribute extends CommonMethod<CheckboxAttribute> {
    create(options?: CheckboxOption): CheckboxAttribute;
    pop(): CheckboxAttribute;
    debugLine(value: string): CheckboxAttribute;
}

declare class TSCheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {
    create(options?: CheckboxGroupOption): CheckboxGroupAttribute;
    pop(): CheckboxGroupAttribute;
    debugLine(value: string): CheckboxGroupAttribute;
}

declare class TSCircleAttribute extends CommonShapeMethod<CircleAttribute> {
    create(value?: CircleOption): CircleAttribute;
    debugLine(value: string): CircleAttribute;
}

declare class TSColumnAttribute extends CommonMethod<ColumnAttribute> {
    create(value?: {
        space?: string | number;
    }): ColumnAttribute;
    pop(): ColumnAttribute;
    debugLine(value: string): ColumnAttribute;
}

declare class TSColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute> {
    create(): ColumnSplitAttribute;
    pop(): ColumnSplitAttribute;
    debugLine(value: string): ColumnSplitAttribute;
}

declare class TSCounterAttribute extends CommonMethod<CounterAttribute> {
    create(): CounterAttribute;
    pop(): CounterAttribute;
    debugLine(value: string): CounterAttribute;
}

declare class TSDataPanelAttribute extends CommonMethod<DataPanelAttribute> {
    create(options: DataPanelOption): DataPanelAttribute;
    pop(): DataPanelAttribute;
    debugLine(value: string): DataPanelAttribute;
}

declare class TSDatePickerAttribute extends CommonMethod<DatePickerAttribute> {
    create(options?: DatePickerOption): DatePickerAttribute;
    pop(): DatePickerAttribute;
    debugLine(value: string): DatePickerAttribute;
}

declare class TSDividerAttribute extends CommonMethod<DividerAttribute> {
    create(): DividerAttribute;
    debugLine(value: string): DividerAttribute;
}

declare class TSEllipseAttribute extends CommonShapeMethod<EllipseAttribute> {
    create(value?: {
        width?: string | number;
        height?: string | number;
    }): EllipseAttribute;
    debugLine(value: string): EllipseAttribute;
}

declare class TSFlexAttribute extends CommonMethod<FlexAttribute> {
    create(value?: FlexOption): FlexAttribute;
    pop(): FlexAttribute;
    debugLine(value: string): FlexAttribute;
}

declare class TSForEachInterface {
    create(arr: Array<any>, itemGenerator: (item: any, index?: number) => void, keyGenerator?: (item: any, index?: number) => string): ForEachInterface;
    pop(): ForEachInterface;
    debugLine(value: string): ForEachInterface;
}

declare class TSFormComponentAttribute extends CommonMethod<FormComponentAttribute> {
    create(value: {
        id: number;
        name: string;
        bundle: string;
        ability: string;
        module: string;
        dimension?: FormDimension;
        temporary?: boolean;
    }): FormComponentAttribute;
    debugLine(value: string): FormComponentAttribute;
}

declare class TSGaugeAttribute extends CommonMethod<GaugeAttribute> {
    create(options: {
        value: number;
        min?: number;
        max?: number;
    }): GaugeAttribute;
    debugLine(value: string): GaugeAttribute;
}

declare class TSGridAttribute extends CommonMethod<GridAttribute> {
    create(scroller?: Scroller): GridAttribute;
    pop(): GridAttribute;
    debugLine(value: string): GridAttribute;
}

declare class TSGridItemAttribute extends CommonMethod<GridItemAttribute> {
    create(): GridItemAttribute;
    pop(): GridItemAttribute;
    debugLine(value: string): GridItemAttribute;
}

declare class TSGridContainerAttribute extends ColumnAttribute {
    create(value?: GridContainerOption): GridContainerAttribute;
    pop(): GridContainerAttribute;
    debugLine(value: string): GridContainerAttribute;
}

declare class TSImageAttribute extends CommonMethod<ImageAttribute> {
    create(src: string | PixelMap | Resource): ImageAttribute;
    debugLine(value: string): ImageAttribute;
}

declare class TSImageAnimatorAttribute extends CommonMethod<ImageAnimatorAttribute> {
    create(): ImageAnimatorAttribute;
    debugLine(value: string): ImageAnimatorAttribute;
}

declare class TSLazyForEachInterface {
    create(dataSource: IDataSource, itemGenerator: (item: any, index?: number) => void, keyGenerator?: (item: any, index?: number) => string): LazyForEachInterface;
    pop(): LazyForEachInterface;
    debugLine(value: string): LazyForEachInterface;
}

declare class TSLineAttribute extends CommonShapeMethod<LineAttribute> {
    create(value?: {
        width?: string | number;
        height?: string | number;
    }): LineAttribute;
    debugLine(value: string): LineAttribute;
}

declare class TSListAttribute extends CommonMethod<ListAttribute> {
    create(value?: {
        initialIndex?: number;
        space?: number | string;
        scroller?: Scroller;
    }): ListAttribute;
    pop(): ListAttribute;
    debugLine(value: string): ListAttribute;
}

declare class TSListItemAttribute extends CommonMethod<ListItemAttribute> {
    create(value?: string): ListItemAttribute;
    pop(): ListItemAttribute;
    debugLine(value: string): ListItemAttribute;
}

declare class TSLoadingProgressAttribute extends CommonMethod<LoadingProgressAttribute> {
    create(): LoadingProgressAttribute;
    debugLine(value: string): LoadingProgressAttribute;
    color(value: ResourceColor): LoadingProgressAttribute;
}

declare class TSMarqueeAttribute extends CommonMethod<MarqueeAttribute> {
    create(value: {
        start: boolean;
        step?: number;
        loop?: number;
        fromStart?: boolean;
        src: string;
    }): MarqueeAttribute;
    pop(): MarqueeAttribute;
    debugLine(value: string): MarqueeAttribute;
}

declare class TSNavigationAttribute extends CommonMethod<NavigationAttribute> {
    create(): NavigationAttribute;
    pop(): NavigationAttribute;
    debugLine(value: string): NavigationAttribute;
}

declare class TSNavigatorAttribute extends CommonMethod<NavigatorAttribute> {
    create(value?: {
        target: string;
        type?: NavigationType;
    }): NavigatorAttribute;
    pop(): NavigatorAttribute;
    debugLine(value: string): NavigatorAttribute;
}

declare class TSPageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
    create(value: {
        type?: RouteType;
        duration?: number;
        curve?: Curve | string;
        delay?: number;
    }): PageTransitionEnterInterface;
}

declare class TSPageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
    create(value: {
        type?: RouteType;
        duration?: number;
        curve?: Curve | string;
        delay?: number;
    }): PageTransitionExitInterface;
}

declare class TSPanelAttribute extends CommonMethod<PanelAttribute> {
    create(show: boolean): PanelAttribute;
    pop(): PanelAttribute;
    debugLine(value: string): PanelAttribute;
}

declare class TSPathAttribute extends CommonShapeMethod<PathAttribute> {
    create(value?: {
        width?: number | string;
        height?: number | string;
        commands?: string;
    }): PathAttribute;
    pop(): PathAttribute;
    debugLine(value: string): PathAttribute;
}

declare class TSPatternLockAttribute extends CommonMethod<TSPatternLockAttribute> {
    create(controller?: PatternLockController): TSPatternLockAttribute;
    pop(): TSPatternLockAttribute;
    debugLine(value: string): TSPatternLockAttribute;
}

declare class TSPieceAttribute extends CommonMethod<PieceAttribute> {
    create(options?: {
        content: string;
        icon?: string;
    }): PieceAttribute;
    pop(): PieceAttribute;
    debugLine(value: string): PieceAttribute;
}

declare class TSPluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
    create(value: {
        template: PluginComponentTemplate;
        data: any;
    }): PluginComponentAttribute;
    pop(): PluginComponentAttribute;
    debugLine(value: string): PluginComponentAttribute;
}

declare class TSPolygonAttribute extends CommonShapeMethod<PolygonAttribute> {
    create(value?: {
        width?: string | number;
        height?: string | number;
    }): PolygonAttribute;
    debugLine(value: string): PolygonAttribute;
}

declare class TSPolylineAttribute extends CommonShapeMethod<PolylineAttribute> {
    create(value?: {
        width?: string | number;
        height?: string | number;
    }): PolylineAttribute;
    debugLine(value: string): PolylineAttribute;
}

declare class TSProgressAttribute extends CommonMethod<ProgressAttribute> {
    create(object: {
        value: number;
        total?: number;
        style?: ProgressStyle;
    }): ProgressAttribute;
    debugLine(value: string): ProgressAttribute;
}

declare class TSQRCodeAttribute extends CommonMethod<QRCodeAttribute> {
    create(value: string): QRCodeAttribute;
    pop(): QRCodeAttribute;
    debugLine(value: string): QRCodeAttribute;
}

declare class TSRadioAttribute extends CommonMethod<RadioAttribute> {
    create(options: RadioOption): RadioAttribute;
    debugLine(value: string): RadioAttribute;
}

declare class TSRatingAttribute extends CommonMethod<RatingAttribute> {
    create(options?: {
        rating: number;
        indicator?: boolean;
    }): RatingAttribute;
    pop(): RatingAttribute;
    debugLine(value: string): RatingAttribute;
}

declare class TSRectAttribute extends CommonShapeMethod<RectAttribute> {
    create(value?: {
        width?: number | string;
        height?: number | string;
        radius?: number | string | Array<any>;
    } | {
        width?: number | string;
        height?: number | string;
        radiusWidth?: number | string;
        radiusHeight?: number | string;
    }): RectAttribute;
    debugLine(value: string): RectAttribute;
}

declare class TSRefreshAttribute extends CommonMethod<RefreshAttribute> {
    create(value: {
        refreshing: boolean;
        offset?: number | string;
        friction?: number | string;
    }): RefreshAttribute;
    pop(): RefreshAttribute;
    debugLine(value: string): RefreshAttribute;
}

declare class TSRowAttribute extends CommonMethod<RowAttribute> {
    create(value?: {
        space?: string | number;
    }): RowAttribute;
    pop(): RowAttribute;
    debugLine(value: string): RowAttribute;
}

declare class TSRowSplitAttribute extends CommonMethod<RowSplitAttribute> {
    create(): RowSplitAttribute;
    pop(): RowSplitAttribute;
    debugLine(value: string): RowSplitAttribute;
}

declare class TSScrollAttribute extends CommonMethod<ScrollAttribute> {
    create(scroller?: Scroller): ScrollAttribute;
    pop(): ScrollAttribute;
    debugLine(value: string): ScrollAttribute;
}

declare class TSScrollBarAttribute extends CommonMethod<ScrollBarAttribute> {
    create(value: ScrollBarOption): ScrollBarAttribute;
    pop(): ScrollBarAttribute;
    debugLine(value: string): ScrollBarAttribute;
}

declare class TSSearchAttribute extends CommonMethod<SearchAttribute> {
    create(options?: {
        value?: string;
        placeholder?: string;
        icon?: string;
        controller?: SearchController;
    }): SearchAttribute;
    pop(): SearchAttribute;
    debugLine(value: string): SearchAttribute;
}

declare class TSSelectAttribute extends CommonMethod<SelectAttribute> {
    create(options: Array<SelectOption>): SelectAttribute;
    pop(): SelectAttribute;
    debugLine(value: string): SelectAttribute;
}

declare class TSShapeAttribute extends CommonMethod<ShapeAttribute> {
    create(value?: PixelMap): ShapeAttribute;
    pop(): ShapeAttribute;
    debugLine(value: string): ShapeAttribute;
}

declare class TSSheetAttribute extends CommonMethod<SheetAttribute> {
    create(): SheetAttribute;
    pop(): SheetAttribute;
    debugLine(value: string): SheetAttribute;
}

declare class TSSliderAttribute extends CommonMethod<SliderAttribute> {
    create(options?: SliderOption): SliderAttribute;
    debugLine(value: string): SliderAttribute;
}

declare class TSSpanAttribute extends CommonMethod<SpanAttribute> {
    create(value: string | Resource): SpanAttribute;
    debugLine(value: string): SpanAttribute;
}

declare class TSStackAttribute extends CommonMethod<StackAttribute> {
    create(value?: {
        alignContent?: Alignment;
    }): StackAttribute;
    pop(): StackAttribute;
    debugLine(value: string): StackAttribute;
}

declare class TSStepperAttribute extends CommonMethod<StepperAttribute> {
    create(value?: {
        index?: number;
    }): StepperAttribute;
    pop(): StepperAttribute;
    debugLine(value: string): StepperAttribute;
}

declare class TSStepperItemAttribute extends CommonMethod<StepperItemAttribute> {
    create(): StepperItemAttribute;
    pop(): StepperItemAttribute;
    debugLine(value: string): StepperItemAttribute;
}

declare class TSSwiperAttribute extends CommonMethod<SwiperAttribute> {
    create(controller?: SwiperController): SwiperAttribute;
    pop(): SwiperAttribute;
    debugLine(value: string): SwiperAttribute;
}

declare class TSTabContentAttribute extends CommonMethod<TabContentAttribute> {
    create(): TabContentAttribute;
    pop(): TabContentAttribute;
    debugLine(value: string): TabContentAttribute;
}

declare class TSTabsAttribute extends CommonMethod<TabsAttribute> {
    create(value?: {
        barPosition?: BarPosition;
        index?: number;
        controller?: TabsController;
    }): TabsAttribute;
    pop(): TabsAttribute;
    debugLine(value: string): TabsAttribute;
}

declare class TSTextAttribute extends CommonMethod<TextAttribute> {
    create(content?: string | Resource): TextAttribute;
    pop(): TextAttribute;
    debugLine(value: string): TextAttribute;
}

declare class TSTextAreaAttribute extends CommonMethod<TextAreaAttribute> {
    create(value?: TextAreaOption): TextAreaAttribute;
    debugLine(value: string): TextAreaAttribute;
}

declare class TSTextClockAttribute extends CommonMethod<TextClockAttribute> {
    create(options?: {
        timeZoneOffset?: number;
        controller?: TextClockController;
    }): TextClockAttribute;
    pop(): TextClockAttribute;
    debugLine(value: string): TextClockAttribute;
}

declare class TSTextInputAttribute extends CommonMethod<TextInputAttribute> {
    create(value?: TextInputOption): TextInputAttribute;
    debugLine(value: string): TextInputAttribute;
}

declare class TSTextPickerAttribute extends CommonMethod<TextPickerAttribute> {
    create(options?: TextPickerOption): TextPickerAttribute;
    pop(): TextPickerAttribute;
    debugLine(value: string): TextPickerAttribute;
}

declare class TSTextTimerAttribute extends CommonMethod<TextTimerAttribute> {
    create(options?: TextTimerOption): TextTimerAttribute;
    pop(): TextTimerAttribute;
    debugLine(value: string): TextTimerAttribute;
}

declare class TSToggleAttribute extends CommonMethod<ToggleAttribute> {
    create(options: {
        type: ToggleType;
        isOn?: boolean;
    }): ToggleAttribute;
    pop(): ToggleAttribute;
    debugLine(value: string): ToggleAttribute;
}

declare class TSVideoAttribute extends CommonMethod<VideoAttribute> {
    create(value: {
        src?: string | Resource;
        previewUri?: string | PixelMap | Resource;
        controller?: VideoController;
    }): VideoAttribute;
    debugLine(value: string): VideoAttribute;
}

declare class TSWebAttribute extends CommonMethod<WebAttribute> {
    create(value: WebOptions): WebAttribute;
    debugLine(value: string): WebAttribute;
}

declare class TSXComponentAttribute extends CommonMethod<XComponentAttribute> {
    create(value: {
        id: string;
        type: string;
        libraryname?: string;
        controller?: XComponentController;
    }): XComponentAttribute;
    debugLine(value: string): XComponentAttribute;
}

declare class TSRichTextAttribute {
    create(content: string): RichTextAttribute;
    pop(): RichTextAttribute;
    debugLine(value: string): RichTextAttribute;
}

declare class TSTapGestureInterface {
    create(value?: {
        count?: number;
        fingers?: number;
    }): TapGestureInterface;
    pop(): TapGestureInterface;
}

declare class TSLongPressGestureInterface {
    create(value?: {
        fingers?: number;
        repeat?: boolean;
        duration?: number;
    }): LongPressGestureInterface;
    pop(): LongPressGestureInterface;
}

declare class TSPanGestureInterface {
    create(value?: {
        fingers?: number;
        direction?: PanDirection;
        distance?: number;
    } | PanGestureOption): PanGestureInterface;
    pop(): PanGestureInterface;
}

declare class TSSwipeGestureInterface {
    create(value?: {
        fingers?: number;
        direction?: SwipeDirection;
        speed?: number;
    }): SwipeGestureInterface;
    pop(): SwipeGestureInterface;
}

declare class TSPinchGestureInterface {
    create(value?: {
        fingers?: number;
        distance?: number;
    }): PinchGestureInterface;
    pop(): PinchGestureInterface;
}

declare class TSRotationGestureInterface {
    create(value?: {
        fingers?: number;
        angle?: number;
    }): RotationGestureInterface;
    pop(): RotationGestureInterface;
}

declare class TSGestureGroupInterface {
    create(mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface;
    pop(): GestureGroupInterface;
}
