/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * 定义MediaQuery事件。
 *
 * @interface MediaQueryEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface MediaQueryEvent {
  /**
   * 匹配结果。true表示满足查询条件，false表示不满足查询条件。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  matches: boolean;
}

/**
 * 定义MediaQuery列表信息。
 *
 * @interface MediaQueryList
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface MediaQueryList {
  /**
   * 序列化媒体查询条件。
   * 该参数为只读。
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  media?: string;

  /**
   * 匹配结果。 true表示满足查询条件，false表示不满足查询条件。
   * 该参数为只读。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  matches?: boolean;

  /**
   * 匹配结果发生变化时的执行函数。matches表示是否匹配媒体查询条件，true满足查询条件，false不满足查询条件。
   * 该参数为只读。
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onchange?: (matches: boolean) => void;

  /**
   * 给MediaQueryList添加回调函数，回调函数应在onShow生命周期之前添加，即需要在onInit或onReady生命周期里添加。
   *
   * @param { function } callback - 匹配条件发生变化时触发的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addListener(callback: (event: MediaQueryEvent) => void): void;

  /**
   * 移除MediaQueryList中的回调函数。
   *
   * @param { function } callback - 匹配条件发生变化时触发的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeListener(callback: (event: MediaQueryEvent) => void): void;
}

/**
 * 提供根据不同媒体类型定义不同的样式。
 * 定义MediaQuery接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare class MediaQuery {
  /**
   * 根据媒体查询条件，创建MediaQueryList对象。
   *
   * @param { string } condition - 用于查询的条件。
   * @returns { MediaQueryList } 创建MediaQueryList对象，详情见下表说明。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static matchMedia(condition: string): MediaQueryList;
}
export default MediaQuery
