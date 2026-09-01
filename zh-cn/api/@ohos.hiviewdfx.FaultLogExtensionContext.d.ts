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
 * @file 故障延迟通知上下文
 * @kit PerformanceAnalysisKit
 */

import ExtensionContext from './application/ExtensionContext';
/**
 * # 使用说明
 *
 * 通过FaultLogExtensionAbility子类实例来获取。
 *
 * ```ts
 * import { FaultLogExtensionAbility } from '@kit.PerformanceAnalysisKit';
 * export default class MyFaultLogExtension extends FaultLogExtensionAbility {
 *     onFaultReportReady() {
 *         let context = this.context; // 获取FaultLogExtensionContext
 *         console.info('cache dir is ' + context.cacheDir); // 访问context中的成员
 *     }
 * }
 * ```
 */
/**
 * FaultLogExtensionContext是
 * [FaultLogExtensionAbility]{@link @ohos.hiviewdfx.FaultLogExtensionAbility:FaultLogExtensionAbility}的上下文环境，
 * 继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
 * 
 * FaultLogExtensionContext模块提供访问
 * [FaultLogExtensionAbility]{@link @ohos.hiviewdfx.FaultLogExtensionAbility:FaultLogExtensionAbility}的资源的能力，
 * 对于扩展的ExtensionAbility，可直接将ExtensionContext作为上下文环境，
 * 或者定义一个继承自ExtensionContext的类型作为上下文环境。
 * 
 * > **说明：**
 * >
 * > - 本模块接口从API version 21开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
 * @stagemodelonly
 * @since 21 dynamic
 * @since 23 static
 */
export default class FaultLogExtensionContext extends ExtensionContext {}
