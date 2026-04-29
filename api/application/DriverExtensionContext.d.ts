/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file Defines the context of driver extension
 * @kit DriverDevelopmentKit
 */

import ExtensionContext from './ExtensionContext';

/**
 * The **DriverExtensionContext** module provides the context of **DriverExtensionAbility**. It inherits from
 * **ExtensionContext**.
 * The **DriverExtensionContext** module provides the operations that need to be actively initiated in the
 * **DriverExtensionAbility** implementation.
 *
 * > **NOTE**
 * > - The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.Driver.ExternalDevice
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
declare class DriverExtensionContext extends ExtensionContext {
  /**
   * Updates the driver state. This interface is reserved and does not provide specific functionality currently.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  updateDriverState(): void;
}
/**
 * Define a DriverExtensionContext.
 *
 * @typedef { DriverExtensionContext }
 * @syscap SystemCapability.Driver.ExternalDevice
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export default DriverExtensionContext;
