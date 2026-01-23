'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { ComponentBuilder } from "./builder";
import { ExtendableComponent } from './extendableComponent';
import { CommonAttribute, GeometryInfo, Layoutable, Measurable, SizeResult } from './common'
import { ConstraintSizeOptions } from './units'
import { Builder, WrappedBuilder, CustomBuilder } from './builder'
import { LocalStorage } from './../stateManagement/storage/localStorage';
import { CustomDialogController } from './customDialogController';
import { RecordData } from '@ohos.base';

/**
  * Define ReuseObject for aboutToReuse method.
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 23 static
  */
export declare class ReuseObject {
    /**
     * Get the raw data of ReuseObject to get values.
     *
     * @returns { RecordData } - Returns the raw data of ReuseObject.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get raw(): RecordData;

    /**
     * Get value from the ReuseObject by key.
     *
     * @param { string } key - the key of target value.
     * @returns { RecordData } - the target value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    $_get(key: string): RecordData;

   /**
    * Returns if the key is in the ReuseObject.
    *
    * @param { string } key - the key of target value.
    * @returns { boolean } - if the key is in the ReuseObject.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    has(key: string): boolean;

   /**
    * Returns the keys array of the ReuseObject.
    *
    * @returns { string[] } - the keys array of the ReuseObject.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    keys(): string[];
}

/**
 * Defines Entry Annotation.
 *
 * Entry is an Annotation and it supports parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Entry {
    /**
     * Named route name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    routeName: string = "";

    /**
     * Name of the function which returns LocalStorage instance.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    storage: string = "";

    /**
     * Determines whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    useSharedStorage: boolean = false;
}

/**
 * Defining Component Annotation
 *
 * Component is an Annotation to define a custom component using state management V1.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Component {}

/**
 * Defining ComponentV2 Annotation
 *
 * ComponentV2 is an Annotation to define a custom component using state management V2.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ComponentV2 {}

/**
 * Defining Reusable Annotation that is used to decorate @Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Reusable {}

/**
 * Defining ReusableV2 Annotation that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ReusableV2 {}

/**
 * Defining CustomLayout Annotation that is used to decorate @Component and @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface CustomLayout {}

/**
 * Defining of entry of page
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class EntryPoint {

    /**
     * Define entry function of page
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @Builder entry(): void;
}

/**
 * Defining CustomDialog Annotation
 *
 * CustomDialog is an Annotation to define a custom dialog.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface CustomDialog {}

/**
 * Definition of base custom dialog class.
 *
 * @extends ExtendableComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class BaseCustomDialog<T extends BaseCustomDialog<T, T_Options>, T_Options> extends ExtendableComponent {
   /**
    * Constructor to use to create a custom dialog instance.
    * @param {boolean} [useSharedStorage] - determine whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
    * @param {LocalStorage} [storage] - localStorage instance.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
   constructor(useSharedStorage?: boolean, storage?: LocalStorage);

    /**
     * Implementation for creating a custom dialog
     * @param { function } factory - factory to create instance of custom dialog
     * @param { function } [initializers] - initial data for all the fields in custom dialog
     * @param { CustomBuilder } [content] - tail closure for custom dialog
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @Builder
    static _invokeImpl<S extends BaseCustomDialog<S, S_Options>, S_Options>(
        factory: () => S,
        initializers?: () => S_Options,
        content?: CustomBuilder
    ): void;
}

/**
 * Definition of base custom component, which is base class of custom component.
 * 
 * @extends ExtendableComponent
 * @implements CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class BaseCustomComponent<T_Options> extends ExtendableComponent implements CommonAttribute {
    /**
     * aboutToRecycle Method.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    aboutToRecycle(): void;
}

/**
 * Definition of custom component class.
 * @extends BaseCustomComponent<T_Options>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class CustomComponent<T extends CustomComponent<T, T_Options>, T_Options> extends BaseCustomComponent<T_Options> {
   /**
    * Constructor to use to create a customComponent instance.
    * @param {boolean} [useSharedStorage] - determine whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
    * @param {LocalStorage} [storage] - localStorage instance.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
   constructor(useSharedStorage?: boolean, storage?: LocalStorage);
    
    /**
     * Implementation for creating a custom component
     * @param { function } styles - styles of custom component
     * @param { function } factory - factory to create instance of custom component
     * @param { function } [initializers] - initial data for all the fields in custom component
     * @param { string } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @Reusable
     * @param { CustomBuilder } [content] - tail closure for custom component
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @Builder
    static _invokeImpl<S extends CustomComponent<S, S_Options>, S_Options>(
        @Builder styles: (instance: S) => void,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: string,
        content?: CustomBuilder
    ): void;

    /**
     * aboutToReuse Method
     *
     * @param { ReuseObject } params - Custom component init params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    aboutToReuse(params: ReuseObject): void;
}

/**
 * Definition of V2 custom component class.
 * @extends BaseCustomComponent<T_Options>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class CustomComponentV2<T extends CustomComponentV2<T, T_Options>, T_Options> extends BaseCustomComponent<T_Options> {
    /**
     * Implementation for creating a v2 custom component
     *
     * @param { function } styles - styles of custom component
     * @param { function } factory - factory to create instance of custom component
     * @param { function } [initializers] - initial data for all the fields in custom component
     * @param { function } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @ReusableV2
     * @param { CustomBuilder } [content] - tail closure for custom component
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @Builder
    static _invokeImpl<S extends CustomComponentV2<S, S_Options>, S_Options>(
        @Builder styles: (instance: S) => void,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: () => string,
        content?: CustomBuilder
    ): void;

    /**
     * Implementation for creating a v2 custom component
     *
     * @param { function } styles - styles of custom component
     * @param { function } factory - factory to create instance of custom component
     * @param { function } [initializers] - initial data for all the fields in custom component
     * @param { function } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @ReusableV2
     * @param { CustomBuilder } [content] - tail closure for custom component
     * @param { CustomComponentInvokeOptions } [options] - additional invoke options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Builder
    static _invokeImpl<S extends CustomComponentV2<S, S_Options>, S_Options>(
        @Builder styles: (instance: S) => void,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: () => string,
        content?: CustomBuilder,
        options?: CustomComponentInvokeOptions
    ): void;

    /**
     * aboutToReuse Method
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    aboutToReuse(): void;

    /**
     * Reset state variable
     *
     * @param { T_Options } [params] - data for all the fields in custom component
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    resetStateVarsOnReuse(params?: T_Options): void;
}

/**
 * Defining interface of PageLifeCycle for custom component, when decorate with @Entry.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PageLifeCycle {
    /**
     * onPageShow Method.
     *
     * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onPageShow(): void {}

    /**
     * onPageHide Method.
     *
     * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onPageHide(): void {}

    /**
     * onBackPress Method.
     *
     * Triggered when the user clicks the back button
     *
     * @returns { boolean } true means that the page itself processes the return logic.
     *     false means that the default return logic is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onBackPress(): boolean { return false; }

    /**
     * PageTransition Method.
     * Implement Animation when enter this page or move to other pages.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pageTransition(): void {}

    /**
     * Triggered when the Entry custom component has been pushed with singleton mode.
     *
     * @param { object | undefined | null } param - New parameters pushed with singleton mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onNewParam(param: object | undefined | null): void {}
}

/**
 * Defining interface of LayoutCallbacks for custom component, when decorate with @Layoutable.
 *
 * typedef LayoutCallbacks
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface LayoutCallbacks {
    /**
     * Custom component override this method to layout each of its sub components.
     *
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Layoutable> } children
     * @param { ConstraintSizeOptions } constraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void {}

    /**
     * Custom component override this method to measure each of its sub components.
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Measurable> } children - indicate the measure child
     * @param { ConstraintSizeOptions } constraint - indicate child constraint size
     * @returns { SizeResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult {
        return {width: 0, height: 0} as SizeResult;
    }
}

/**
 * Defining interface for _invokeImpl options.
 *
 * @typedef CustomComponentInvokeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface CustomComponentInvokeOptions {
    /**
     * CustomComponent Class object. Used to generate default reuse key.
     *
     * @type { ?Class }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    sClass?: Class;
}
