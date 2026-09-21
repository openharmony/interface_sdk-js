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
 * @kit AbilityKit
 */

import { CliToolEvent } from './CliToolEvent';

/**
 * Defines the callback function type for receiving CLI tool events.
 *
 * @param { CliToolEvent } event - The event sent by cli tool.
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi [since 26.0.0 - 26.0.0]
 * @publicapi [since 26.0.1]
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
type OnEventFn = (event: CliToolEvent) => void;

/**
 * ToolEventCallback is used to receive session events generated during the running of the CLI tool process.
 *
 * @interface ToolEventCallback
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi [since 26.0.0 - 26.0.0]
 * @publicapi [since 26.0.1]
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface ToolEventCallback {
  /**
   * Callback invoked when a CLI tool event is triggered.
   *
   * The {@link CliToolEvent} parameter contains the event type
   * ({@link ToolEventType}) and the associated data. The caller can inspect
   * the event type to determine how to handle the data — for example,
   * displaying stdout output to the user, logging stderr for diagnostics,
   * or checking the exit code when an exit event is received.
   *
   * @typedef { OnEventFn }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi [since 26.0.0 - 26.0.0]
   * @publicapi [since 26.0.1]
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  onEvent: OnEventFn;
}