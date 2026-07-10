'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { Callback } from './@ohos.base';

/**
 * 提供根据不同媒体类型定义不同的样式。
 *
 * > **说明：**
 * >
 * > - 以下API需先使用UIContext中的[getMediaQuery()](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmediaquery)方法
 * > 获取到MediaQuery对象，再通过该对象调用对应方法。
 *
 * @namespace mediaquery
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace mediaquery {

  /**
   * 用于执行媒体查询操作。
   *
   * @interface MediaQueryResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface MediaQueryResult {

    /**
     * 是否符合匹配条件。true表示满足查询条件，false表示不满足查询条件。
     * 此属性为只读属性。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly matches: boolean;

    /**
     * 媒体事件的匹配条件。
     * 此属性为只读属性。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly media: string;
  }

  /**
   * 媒体查询的句柄，并包含了申请句柄时的首次查询结果。媒体查询根据设置的条件语句，
   * 比如'(width <= 600vp)'，比较系统信息，若首次查询时相关信息未初始化，matches返回false。
   *
   * 继承自[MediaQueryResult]{@link mediaquery.MediaQueryResult}。
   *
   * @interface MediaQueryListener
   * @extends MediaQueryResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface MediaQueryListener extends MediaQueryResult {

    /**
     * 通过句柄向对应的查询条件注册回调，当媒体属性发生变更时会触发该回调。
     *
     * @param { Callback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onChange(callback: Callback<MediaQueryResult>): void

    /**
     * 通过句柄向对应的查询条件取消注册回调，当媒体属性发生变更时不再触发指定的回调。
     *
     * @param { Callback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offChange(callback?: Callback<MediaQueryResult>): void
  }
}

export default mediaquery;
