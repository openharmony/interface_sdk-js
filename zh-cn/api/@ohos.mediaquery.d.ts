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
 * @file 媒体查询
 * @kit ArkUI
 */

import { Callback } from './@ohos.base';

/**
 * 提供根据不同媒体类型定义不同的样式。
 * 
 * > **说明：**
 * >
 * > - 该模块不支持在[UIAbility]{@link @ohos.app.ability.UIAbility}的文件声明处使用，即不能在UIAbility的生命周期中调用，需要在创建组件实例后使用。
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare namespace mediaquery {

  /**
   * 用于执行媒体查询操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface MediaQueryResult {
    /**
     * 是否符合匹配条件。true表示满足查询条件，false表示不满足查询条件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    readonly matches: boolean;

    /**
     * 媒体事件的匹配条件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    readonly media: string;
  }

  /**
   * 媒体查询的句柄，并包含了申请句柄时的首次查询结果。媒体查询根据设置的条件语句，比如'(width <= 600vp)'，比较系统信息，若首次查询时相关信息未初始化，matches返回false。
   * 
   * 继承自[MediaQueryResult]{@link mediaquery.MediaQueryResult}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface MediaQueryListener extends MediaQueryResult {
    /**
     * 通过句柄向对应的查询条件注册回调，当媒体属性发生变更时会触发该回调。
     * 
     * > **说明：** 
     * >
     * > 注册的回调中不允许进一步调用on或off。
     *
     * @param { 'change' } type - 必须填写字符串'change'。
     * @param { Callback<MediaQueryResult> } callback - 向媒体查询注册的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    on(type: 'change', callback: Callback<MediaQueryResult>): void;

    /**
     * 通过句柄向对应的查询条件取消注册回调，当媒体属性发生变更时不再触发指定的回调。
     *
     * @param { 'change' } type - 必须填写字符串'change'。
     * @param { Callback<MediaQueryResult> } callback - 需要取消注册的回调，如果参数缺省则注销该句柄下所有的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    off(type: 'change', callback?: Callback<MediaQueryResult>): void;
  }

  /**
   * 设置媒体查询的查询条件，并返回对应的监听句柄。
   * 
   * > **说明：** 
   * >
   * > -matchMediaSync需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMediaQuery](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmediaquery)方法获取
   * > [MediaQuery]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMediaQuery](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmediaquery)方法获取当前UI上下文关联的
   * > [MediaQuery]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { string } condition - 媒体事件的匹配条件，具体可参考[媒体查询语法规则](docroot://ui/arkts-layout-development-media-query.md#语法规则)。
   * @returns { MediaQueryListener } 媒体事件监听句柄，用于注册和注销监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.MediaQuery#matchMediaSync
   */
  function matchMediaSync(condition: string): MediaQueryListener;
}

export default mediaquery;
