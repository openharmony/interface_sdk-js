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
 * @file 设备状态通知能力上下文
 * @kit ConnectivityKit
 */

import type ExtensionContext from './application/ExtensionContext';

/**
 * PartnerAgentExtensionContext模块是三方外设的发现和连接管理功能的上下文，提供外设发现、配对连接、状态通知等能力，适用于应用需要接入和管理第三方外设并获取其状态信息的场景，帮助开发者统一管理外设的连接生命周
 * 期。
 * 
 * - 本模块接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * - 仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Communication.FusionConnectivity.Core
 * @stagemodelonly
 * @since 23 dynamic
 * @since 26.1.0 static
 */
export default class PartnerAgentExtensionContext extends ExtensionContext {}