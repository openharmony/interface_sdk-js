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

/**
 * appMemoryOptimizer提供应用内存优化的能力，包括释放指定文件的文件页缓存、释放指定模块的文件页缓存等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace appMemoryOptimizer {
  /**
   * 向系统发出释放指定文件的文件页缓存请求，系统会根据当前内存状况决定是否真正执行释放，不保证一定释放成功。
   *
   * @param { Array<string> } fileNames - 需要释放文件页缓存的文件名数组，文件名必须以.so、.hap 或.hsp结尾。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 16000163 - 文件类型错误。文件名未以.so、.hap或.hsp结尾。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function evictFilePages(fileNames: Array<string>): Promise<void>;

  /**
   * 向系统发出释放指定模块的文件页缓存请求，系统会根据当前内存状况决定是否真正执行释放，不保证一定释放成功。
   * 系统会读取对应模块中的memory_optimizer.json配置文件，获取evictFilePages数组，然后对数组中的文件执行文件页缓存释放操作。
   *
   * 配置文件路径：{模块目录}/src/main/resources/rawfile/memory_optimizer.json
   * 配置文件中evictFilePages数组里的文件名必须以 .so、.hap 或 .hsp 结尾。
   *
   * @param { Array<string> } moduleNames - 需要释放文件页缓存的模块名数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 16000163 - 文件类型错误。配置文件中evictFilePages数组中的文件名未以.so、.hap或.hsp 结尾。
   * @throws { BusinessError } 16000164 - 解析配置文件失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function evictModuleFilePages(moduleNames: Array<string>): Promise<void>;
}

export default appMemoryOptimizer;
