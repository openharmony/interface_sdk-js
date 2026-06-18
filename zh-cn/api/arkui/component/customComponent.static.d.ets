'use static';
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

import { CommonAttribute, GeometryInfo, Layoutable, Measurable, SizeResult } from './common';

import { ConstraintSizeOptions } from './units';

import { Builder, WrappedBuilder, CustomBuilder } from './builder';

import { LocalStorage } from './../stateManagement/storage/localStorage';

import { CustomDialogController } from './customDialogController';

import { RecordData } from '@ohos.base';

/**
  * Define ReuseObject for aboutToReuse method.
  *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ReuseObject {

  /**
     * Get the raw data of ReuseObject to get values.
     *
   * @returns { RecordData } - Returns the raw data of ReuseObject.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get raw(): RecordData;

  /**
     * Get value from the ReuseObject by key.
     *
   * @param { string } key - the key of target value.
   * @returns { RecordData } - the target value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  $_get(key: string): RecordData;

  /**
    * Returns if the key is in the ReuseObject.
    *
   * @param { string } key - the key of target value.
   * @returns { boolean } - if the key is in the ReuseObject.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  has(key: string): boolean;

  /**
    * Returns the keys array of the ReuseObject.
    *
   * @returns { string[] } - the keys array of the ReuseObject.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  keys(): string[];
}

/**
 * Defines Entry Annotation.
 *
 * Entry is an Annotation and it supports parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Entry {

  /**
     * Named route name.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  routeName: string = "";

  /**
     * Name of the function which returns LocalStorage instance.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  storage: string = "";

  /**
     * Determines whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  useSharedStorage: boolean = false;
}

/**
 * 重用池所有权的枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ReusePoolOwnership {

  /**
   * 共享所有权。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SHARED = 'shared',

  /**
   * 重用池是每个实例拥有的，而不是共享的。
   * 这是自定义组件复用池的默认模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PER_INSTANCE = 'perInstance',

  /**
   * 复用池关闭。
   * 这是自定义组件复用池的默认模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  OFF = 'off'
}

/**
 * Defining Component Annotation
 *
 * Component is an Annotation to define a custom component using state management V1.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Component {

  /**
   * 自定义组件的重用类型。默认值为OFF。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reusePool: ReusePoolOwnership = ReusePoolOwnership.OFF;

  /**
   * 要重用的自定义组件的集合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  poolAccepts: string[] = [];
}

/**
 * Defining ComponentV2 Annotation
 *
 * ComponentV2 is an Annotation to define a custom component using state management V2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ComponentV2 {

  /**
   * 自定义组件的重用类型。默认值为OFF。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reusePool: ReusePoolOwnership = ReusePoolOwnership.OFF;

  /**
   * 要重用的自定义组件的集合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  poolAccepts: string[] = [];
}

/**
 * Defining Reusable Annotation that is used to decorate @Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface Reusable {}

/**
 * Defining ReusableV2 Annotation that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ReusableV2 {}

/**
 * Defining CustomLayout Annotation that is used to decorate @Component and @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface CustomLayout {}

/**
 * Defining of entry of page
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class EntryPoint {

  /**
     * Define entry function of page
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  entry(): void;
}

/**
 * Defining CustomDialog Annotation
 *
 * CustomDialog is an Annotation to define a custom dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface CustomDialog {
}

/**
 * Definition of base custom dialog class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class BaseCustomDialog<T extends BaseCustomDialog<T, T_Options>, T_Options> extends ExtendableComponent {

  /**
    * Constructor to use to create a custom dialog instance.
   * @param {boolean} [useSharedStorage] - determine whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
   * @param {LocalStorage} [storage] - localStorage instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(useSharedStorage?: boolean, storage?: LocalStorage);

  /**
   * 创建自定义对话框的实现
   * @param { function } factory - 用于创建自定义对话框实例的工厂
   * @param { function } [initializers] - 自定义对话框中所有字段的初始数据
   * @param { CustomBuilder } [content] - 自定义对话框的尾随闭包
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * 基础自定义组件的定义，它是所有自定义组件的基类。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class BaseCustomComponent<T_Options> extends ExtendableComponent implements CommonAttribute {

  /**
   * 组件复用在放入复用驰时，会触发回调
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  aboutToRecycle(): void;
}

/**
 * 定义自定义组件类
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class CustomComponent<T extends CustomComponent<T, T_Options>, T_Options> extends BaseCustomComponent<T_Options> {

  /**
   * Constructor to use to create a customComponent instance.
   *
   * @param { boolean } [useSharedStorage] - determine whether to use the LocalStorage instance object returned by 
   *     UIContext.getSharedLocalStorage() interface.
   * @param { LocalStorage } [storage] - localStorage instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(useSharedStorage?: boolean, storage?: LocalStorage);

  /**
   * Implementation for creating a custom component
   *
   * @param { function | undefined } styles - styles of custom component
   * @param { function } factory - factory to create instance of custom component
   * @param { function } [initializers] - initial data for all the fields in custom component
   * @param { string } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @Reusable
   * @param { CustomBuilder } [content] - tail closure for custom component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  static _invokeImpl<S extends CustomComponent<S, S_Options>, S_Options>(
        @Builder styles: ((instance: S) => void) | undefined,
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
   * @stagemodelonly
   * @since 23 static
   */
  aboutToReuse(params: ReuseObject): void;

  /**
   * 重新初始化@消费变量。
   *
   * @param { string } alias - @Consume别名
   * @param { string } varName - 变量名
   * @param { T } [defaultValue] - 默认值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reInitializeConsume<T>(alias: string, varName: string, defaultValue?: T): void;
}

/**
 * V2自定义组件类的定义。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class CustomComponentV2<T extends CustomComponentV2<T, T_Options>, T_Options> extends BaseCustomComponent<T_Options> {

  /**
   * Implementation for creating a v2 custom component
   *
   * @param { function | undefined } styles - styles of custom component
   * @param { function } factory - factory to create instance of custom component
   * @param { function } [initializers] - initial data for all the fields in custom component
   * @param { function } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @ReusableV2
   * @param { CustomBuilder } [content] - tail closure for custom component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  static _invokeImpl<S extends CustomComponentV2<S, S_Options>, S_Options>(
        @Builder styles: ((instance: S) => void) | undefined,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: () => string,
        content?: CustomBuilder
    ): void;

  /**
   * Implementation for creating a v2 custom component
   *
   * @param { function | undefined } styles - styles of custom component
   * @param { function } factory - factory to create instance of custom component
   * @param { function } [initializers] - initial data for all the fields in custom component
   * @param { function } [reuseId] - reuse id for reusable. Only valid if custom component decorated with @ReusableV2
   * @param { CustomBuilder } [content] - tail closure for custom component
   * @param { CustomComponentInvokeOptions } [options] - additional invoke options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 staticonly
   */
  @Builder
  static _invokeImpl<S extends CustomComponentV2<S, S_Options>, S_Options>(
        @Builder styles: ((instance: S) => void) | undefined,
        factory: () => S,
        initializers?: () => S_Options,
        reuseId?: () => string,
        content?: CustomBuilder,
        options?: CustomComponentInvokeOptions
    ): void;

  /**
   * 组件复用时，触发回调
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  aboutToReuse(): void;

  /**
   * 重置状态变量
   *
   * @param { T_Options } [params] - 自定义组件成员变量的数据
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
 * @stagemodelonly
 * @since 23 static
 */
export interface PageLifeCycle {

  /**
   * onPageShow Method.
   *
   * The page is triggered once each time it is displayed, including scenarios such as
   *     the routing process and the application entering the foreground
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onPageShow(): void {};

  /**
   * onPageHide Method.
   *
   * It is triggered once each time the page is hidden, including scenarios such as
   *     the routing process and the application entering the background
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onPageHide(): void {};

  /**
   * onBackPress Method.
   *
   * Triggered when the user clicks the back button
   *
   * @returns { boolean } true means that the page itself processes the return logic.
   *     false means that the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onBackPress(): boolean { return false; };

  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pageTransition(): void {};

  /**
   * Triggered when the Entry custom component has been pushed with singleton mode.
   *
   * @param { object | undefined | null } param - New parameters pushed with singleton mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNewParam(param: object | undefined | null): void {};
}

/**
 * Defining interface of LayoutCallbacks for custom component, when decorate with @Layoutable.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * @stagemodelonly
   * @since 23 static
   */
  onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void {};

  /**
   * Custom component override this method to measure each of its sub components.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult {
        return {width: 0, height: 0} as SizeResult;
    };
}

/** 
 * Defining interface for _invokeImpl options. 
 * 
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

/**
 * CustomComponentLifecycle用于监控自定义组件生命周期的变化，开发者可以通过
 * [UIUtils.getLifecycle]{@link @ohos.arkui.StateManagement:UIUtils#getLifecycle}获取CustomComponentLifecycle实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface CustomComponentLifecycle {

  /**
   * getCurrentState函数用于获得自定义组件当前的生命周期状态。
   *
   * @returns { CustomComponentLifecycleState } - 自定义组件当前的生命周期状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getCurrentState(): CustomComponentLifecycleState;

  /**
   * addObserver函数用于注册自定义组件生命周期监听器。当自定义组件的生命周期发生变化时，会触发监听器中相应的生命周期回调函数。
   *
   * @param { CustomComponentLifecycleObserver } observer - 监听自定义组件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  addObserver(observer: CustomComponentLifecycleObserver): void;

  /**
   * removeObserver函数用于移除自定义组件生命周期监听器。解除注册后，即使自定义组件的生命周期状态发生变化，也不会触发监听器中相应的生命周期回调函数。
   *
   * @param { CustomComponentLifecycleObserver } observer - 监听自定义组件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  removeObserver(observer: CustomComponentLifecycleObserver): void;
}

/**
 * 用户注册自定义组件生命周期回调后，当该自定义组件的生命周期发生变化时，将触发监听器中相应的生命周期回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface CustomComponentLifecycleObserver {

  /**
   * aboutToAppear函数在创建自定义组件的新实例后，执行其build()函数之前执行。开发者可以在此阶段修改状态变量。其功能与
   * [aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)类似，但是在自定义组件状
   * 态机的约束下触发的。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToAppear(): void;

  /**
   * onDidBuild函数在自定义组件的新实例构建完成后，执行其build()函数之后执行。开发者可以在此阶段实现一些不影响实际UI的功能，例如事件数据上报。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default onDidBuild(): void;

  /**
   * aboutToDisappear函数在自定义组件被销毁之前执行。不建议在aboutToDisappear函数中修改状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。其功能与
   * [aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear)类似，不同的
   * 是，CustomComponentLifecycleObserver中的aboutToDisappear函数受状态机约束，只有被监听的自定义组件状态向
   * CustomComponentLifecycleState.DISAPPEARED转变前触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToDisappear(): void;

  /**
   * 当可复用的自定义组件从缓存中重新添加到节点树时调用aboutToReuse函数，以接收组件的构造参数。当params存在时，表示V1组件的复用回调。
   *
   * @param { ReuseObject } [params] - 当params存在时，表示V1组件的复用回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToReuse(params?: ReuseObject): void;

  /**
   * 当组件被回收后触发，先执行应用程序中定义的必要回收操作，完成回收后调用aboutToRecycle函数。随后该组件被冻结，以避免该组件处于回收池时进行UI更新。最后，aboutToRecycle函数会递归遍历所有子组件，对每个完成
   * 回收的组件调用aboutToRecycle函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default aboutToRecycle(): void;
}

/**
 * 自定义组件当前的生命周期状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum CustomComponentLifecycleState {

  /**
   * 初始化状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  INIT = 0,

  /**
   * 准备展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  APPEARED = 1,

  /**
   * 已展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BUILT = 2,

  /**
   * 回收状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  RECYCLED = 3,

  /**
   * 删除状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DISAPPEARED = 4,
}