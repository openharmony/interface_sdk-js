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
  * @file
  * @kit NetworkKit
 */

/**
 * **表2** responseType与success中data关系
 *
 * | responseType | data | 说明 |
 * | -------- | -------- | -------- |
 * | 无 | string | 服务器返回的header中的type如果是text/\*或application/json、application/javascript、application/xml，值为文本内容。 |
 * | text | string | 返回文本内容。 |
 * | json | Object | 返回json格式的对象。 |
 *
 * @syscap SystemCapability.Communication.NetStack
 * @since 3
 */
export interface FetchResponse {
  /**
   * 表示服务器的状态code。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 3
   */
  code: number;

  /**
   * 返回数据类型由responseType确定，详见表 responseType与success中data关系。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 3
   */
  data: string | object;

  /**
   * 表示服务器response的所有header。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 3
   */
  headers: Object;
}

/**
 * **表1** data与Content-Type关系
 *
 * | data | Content-Type | 说明 |
 * | -------- | -------- | -------- |
 * | string | 不设置 | Content-Type默认为&nbsp;text/plain，data值作为请求的body。 |
 * | string | 任意&nbsp;Type | data值作为请求的body。 |
 * | Object | 不设置 | Content-Type默认为application/x-www-form-urlencoded，data按照资源地址规则进行encode拼接作为请求的body。 |
 * | Object | application/x-www-form-urlencoded | data按照资源地址规则进行encode拼接作为请求的body。 |
 *
 * @syscap SystemCapability.Communication.NetStack
 * @since 3
 */
export default class Fetch {
  /**
   * Obtains data through the network.
   *
   * @param { object } options - Options.
   * @syscap SystemCapability.Communication.NetStack
   * @since 3
   */
  static fetch(options: {
    /**
     * Resource URL.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    url: string;

    /**
     * Request parameter, which can be of the string type or a JSON object.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    data?: string | object;

    /**
     * Request header, which accommodates all attributes of the request.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    header?: Object;

    /**
     * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    method?: string;

    /**
     * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    responseType?: string;

    /**
     * Called when the network data is obtained successfully.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    success?: (data: FetchResponse) => void;

    /**
     * Called when the network data fails to be obtained.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution is completed.
     * @syscap SystemCapability.Communication.NetStack
     * @since 3
     */
    complete?: () => void;
  }): void;
}