/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file transfer模块
 * @kit ArkTS
 */

/**
 * transfer模块提供子系统类或接口的转换能力。
 *
 * @namespace transfer
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 23 staticonly
 */
declare namespace transfer {

    /**
     * 将1.0对象转换为1.2对象。
     *
     * @param { Any } input 需要转换的1.0对象。
     * @param { string } inputName 子系统注册的名称。
     * @returns { Object } 转换后的对象。
     * @throws { BusinessError } 10200067 - 转换错误，不支持的输入名称！
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 staticonly
     */
    function transferStatic(input: Any, inputName: string): Object;

    /**
     * 将1.2对象转换为1.0对象。
     *
     * @param { Object } input 需要转换的1.2对象。
     * @param { string } inputName 子系统注册的名称。
     * @returns { Any } 转换后的对象。
     * @throws { BusinessError } 10200067 - 转换错误，不支持的输入名称！
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 staticonly
     */
    function transferDynamic(input: Object, inputName: string): Any;

} export default transfer;
