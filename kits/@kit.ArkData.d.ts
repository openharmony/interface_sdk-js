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

import DataShareExtensionAbility from '@ohos.application.DataShareExtensionAbility';
import cloudData from '@ohos.data.cloudData';
import commonType from '@ohos.data.commonType';
import dataAbility from '@ohos.data.dataAbility';
import dataShare from '@ohos.data.dataShare';
import dataSharePredicates from '@ohos.data.dataSharePredicates';
import DataShareResultSet, { DataType } from '@ohos.data.DataShareResultSet';
import distributedData from '@ohos.data.distributedData';
import distributedDataObject from '@ohos.data.distributedDataObject';
import distributedKVStore from '@ohos.data.distributedKVStore';
import preferences from '@ohos.data.preferences';
import rdb from '@ohos.data.rdb';
import relationalStore from '@ohos.data.relationalStore';
import storage from '@ohos.data.storage';
import unifiedDataChannel from '@ohos.data.unifiedDataChannel';
import uniformTypeDescriptor from '@ohos.data.uniformTypeDescriptor';
import { ValueType, ValuesBucket } from '@ohos.data.ValuesBucket';
import Storage, {
  ClearStorageOptions, DeleteStorageOptions, GetStorageOptions, SetStorageOptions
} from '@system.storage';

export {
  ClearStorageOptions, DataShareExtensionAbility, DataShareResultSet, DataType, DeleteStorageOptions,
  GetStorageOptions, SetStorageOptions, Storage, ValueType, ValuesBucket, cloudData, commonType,
  dataAbility, dataShare, dataSharePredicates, distributedData, distributedDataObject, distributedKVStore,
  preferences, rdb, relationalStore, storage, unifiedDataChannel, uniformTypeDescriptor
};
