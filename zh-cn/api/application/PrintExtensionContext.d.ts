/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 打印扩展上下文
 * @file
 打印扩展上下文
 * @kit BasicServicesKit
 */

import ExtensionContext from './ExtensionContext';
/**
 * PrintExtensionContext是PrintExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./ExtensionContext:ExtensionContext}。
 * 
 * PrintExtensionContext可直接作为PrintExtensionAbility的上下文环境，用于在打印扩展开发场景中获取和管理打印相关资源，以完成打印任务相关操作。关于PrintExtensionContext的设计逻
 * 辑与可访问资源，请参见[PrintExtensionAbility]{@link @ohos.app.ability.PrintExtensionAbility:PrintExtensionAbility}与
 * [ExtensionContext]{@link ./ExtensionContext:ExtensionContext}。
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export default class PrintExtensionContext extends ExtensionContext {}