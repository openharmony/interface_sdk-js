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
import call from '@ohos.telephony.call';
import { common } from '@kit.AbilityKit';

export type MarkType = call.MarkType;

/**
 * Provides methods related to call management.
 *
 * @namespace call
 * @syscap SystemCapability.Telephony.CallManager
 * @atomicservice
 * @since 11
 */
declare namespace numberLookup {

  export interface MarkNumberParams {
    markType: MarkType;
    accountNumber: string;
    formatNumber: string;
    customMark?: string;
  }

  function setNumberMarkInfo(
    context: common.Context, 
    accountNumber: string, 
    markType: call.MarkType, 
    customMark?: string
  ): Promise<void>;

  function getNumberMarkInfo(
    context: common.Context,
    accountNumber: string,
  ): Promise<call.NumberMarkInfo>;

  function getNumberLocations(
    context: common.Context,
    accountNumber: string,
  ): Promise<call.NumberMarkInfo>;

    function getNumberLocation(
    context: common.Context,
    accountNumber: string,
    isExactMatch?: boolean
  ): Promise<string>;

    function getNumberLocations(
    context: common.Context,
    accountNumbers: Array<string>
  ): Promise<Array<string>>;

}

export default numberLookup;