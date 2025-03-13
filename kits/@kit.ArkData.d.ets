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
 * @kit ArkData
 */
import DataShareExtensionAbility from '../api/@ohos.application.DataShareExtensionAbility';
import cloudData from '../api/@ohos.data.cloudData';
import cloudExtension from '../api/@ohos.data.cloudExtension';
import commonType from '../api/@ohos.data.commonType';
import dataAbility from '../api/@ohos.data.dataAbility';
import dataShare from '../api/@ohos.data.dataShare';
import dataSharePredicates from '../api/@ohos.data.dataSharePredicates';
import DataShareResultSet from '../api/@ohos.data.DataShareResultSet';
import { DataType } from '../api/@ohos.data.DataShareResultSet';
import distributedDataObject from '../api/@ohos.data.distributedDataObject';
import distributedKVStore from '../api/@ohos.data.distributedKVStore';
import preferences from '../api/@ohos.data.preferences';
import relationalStore from '../api/@ohos.data.relationalStore';
import unifiedDataChannel from '../api/@ohos.data.unifiedDataChannel';
import uniformTypeDescriptor from '../api/@ohos.data.uniformTypeDescriptor';
import uniformDataStruct from '../api/@ohos.data.uniformDataStruct';
import { ValueType, ValuesBucket } from '../api/@ohos.data.ValuesBucket';
import sendablePreferences from '../api/@ohos.data.sendablePreferences';
import sendableRelationalStore from '../api/@ohos.data.sendableRelationalStore';
// import graphStore from '@ohos.data.graphStore';
// import collaborationEditObject from '@ohos.data.collaborationEditObject';
// import intelligence from '@ohos.data.intelligence';

export {
  DataShareExtensionAbility
  , DataShareResultSet, DataType, ValueType, ValuesBucket, cloudData, cloudExtension, 
  commonType, dataShare, dataSharePredicates, distributedDataObject, distributedKVStore, preferences,
  relationalStore, unifiedDataChannel, uniformTypeDescriptor, uniformDataStruct, sendablePreferences, dataAbility,
  sendableRelationalStore
  // , graphStore, collaborationEditObject, intelligence
};
