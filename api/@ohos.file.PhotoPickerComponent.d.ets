/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';

/**
 * Declare struct PhotoPickerComponent
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
@Component
export declare struct PhotoPickerComponent {
  /**
   * PickerOptions
   *
   * @type { ?PickerOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  pickerOptions?: PickerOptions;

  /**
   * Callback when select photos or videos
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  onSelect?: (uri: string) => void;

  /**
   * Callback when Deselect photos or videos
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  onDeselect?: (uri: string) => void;

  /**
   * PickerController
   *
   * @type { ?PickerController }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  @ObjectLink
  pickController: PickerController;

  /**
   * Build function of PhotoPickerComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  build(): void;
}

/**
 * The class for PickerController
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
@Observed
export declare class PickerController {
  /**
   * Set data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  setData(dataType: DataType, data: Object): void;
}

/**
 * PickerOptions Object
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
  /**
   * Support set checkBox color
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  checkBoxColor?: string;

  /**
   * Support set backgroundColor
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  backgroundColor?: string;

  /**
   * Support repeat select
   *
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  isRepeatSelectSupported?: boolean;
}

/**
 * DataType represents the type of the data set to picker component
 *
 * @enum { number } DataType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
export declare enum DataType {
  /**
   * DataType: set selected uris to picker component, the data should be a array of uri
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12
   */
  SET_SELECTED_URIS = 1
}
