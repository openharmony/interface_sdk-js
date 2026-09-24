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
 * @file Declares the APIs for privacy-preserving computation, including privacy target generation,
 *        privacy search, and search result retrieval.
 * @kit DataProtectionKit
 */

/**
 * privateComputation的命名空间，提供隐私保护的计算能力。
 * 如隐私目标生成、隐私搜索、搜索结果检索等。
 *
 * @syscap SystemCapability.Security.Asset
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.1
 */
declare namespace privacyComputation {
  /**
   * 为给定元素生成隐私目标。隐私目标是加密的表示
   * 的搜索元素，可以用于保护隐私的搜索，而不会泄露原始数据。
   *
   * @param { TargetElement } targetElement - 要搜索的元素，包括其原始数据和可选的散列
   *     算法。
   * @param { PrivacyProtocol } privacyProtocol - 隐私协议配置，包括数据集大小和
   *     协议类型。
   * @returns { Promise<Uint8Array> } Promise用于返回加密结果。
   * @throws { BusinessError } 24000001 - The service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @throws { BusinessError } 24000018 - Parameter verification failed.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  function genPrivacyTarget(targetElement: TargetElement, privacyProtocol: PrivacyProtocol): Promise<Uint8Array>;

  /**
   * 执行隐私保护搜索。根据加密的隐私目标搜索给定的数据集元素
   * 而不向对方透露目标或数据集内容。
   *
   * @param { Uint8Array } privacyTarget - 用genPrivateTarget生成的加密隐私目标。
   * @param { Element[] } elements - 要搜索的数据集元素。
   * @param { PrivacyProtocol } privacyProtocol - 隐私协议配置，包括数据集大小和
   *     协议类型。
   * @returns { Promise<PrivacySearchResult> } 用于返回隐私搜索结果的Promise。
   * @throws { BusinessError } 24000001 - The service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @throws { BusinessError } 24000018 - Parameter verification failed.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  function privacySearch(privacyTarget: Uint8Array, elements: Element[], privacyProtocol: PrivacyProtocol):
        Promise<PrivacySearchResult>;
  /**
   * 获取隐私搜索结果和最终搜索结果。解密搜索结果密文
   * privateSearch返回，获取最终匹配结果和可选的附加值。
   *
   * @param { PrivacySearchResult } privacySearchResult - 隐私搜索返回的结果。
   * @param { PrivacyProtocol } privacyProtocol - 隐私协议配置，包括数据集大小和
   *     协议类型。
   * @returns { Promise<SearchResult> } Promise用于返回searchResult。
   * @throws { BusinessError } 24000001 - The service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @throws { BusinessError } 24000018 - Parameter verification failed.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  function getSearchResult(privacySearchResult: PrivacySearchResult, privacyProtocol: PrivacyProtocol):
        Promise<SearchResult>;
  /**
   * 定义用于隐私保护计算的哈希算法。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  enum HashAlg {
    /**
     * 没有哈希算法。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    NONE = 0,
    /**
     * SHA256哈希算法。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    SHA256 = 1,
    /**
     * SHA384哈希算法。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    SHA384 = 2,
    /**
     * SHA512哈希算法。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    SHA512 = 3
  }

  /**
   * 枚举隐私协议支持的数据集大小。数据集大小定义
   * 单个结果密文可以包含的比较次数。的总数
   * 生成的结果密文由elements.size/dataSetSize决定。选择一个
   * 根据隐私搜索中元素的数量和可接受的
   * 每个结果密文的大小。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  enum DataSetSize {
    /**
     * 单个结果密文可以包含128次比较。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    SIZE_128 = 0,
    /**
     * 单个结果密文可以包含256次比较。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    SIZE_256 = 1,
    /**
     * 单个结果密文可以包含512次比较。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    SIZE_512 = 2
  }

  /**
   * 枚举隐私协议类型。协议类型决定隐私保护
   * 用于搜索操作的计算方法。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  enum ProtocolType {
    /**
     * 私有集交集（PSI）协议。判断目标元素是否存在
     * 在数据集中，而不显示元素或数据集内容。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    PSI_PROTOCOL = 0,
    /**
     * 私有信息检索（PIR）协议。用于检索与
     * 数据集中匹配的键，而不显示键或检索到的值。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    PIR_PROTOCOL = 1
  }

  /**
   * 定义隐私协议配置，包括数据集大小、协议类型等。
   * 用于隐私保护计算。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  interface PrivacyProtocol {
    /**
     * 隐私协议的数据集大小。确定比较次数
     * 单个结果密文可以包含。结果密文总数
     * 生成的是由element.size/dataSetSize决定的。选择合适的数据集
     * 大小基于隐私搜索中元素的数量和每个元素的可接受大小
     * 结果密文。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    dataSetSize: DataSetSize;
    /**
     * 隐私计算的协议类型。决定隐私保护
     * 计算方法（PSI或PIR）。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    protocolType: ProtocolType;
  }

  /**
   * 定义隐私计算的目标元素，包括原始元素数据
   * 和可选的哈希算法。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  interface TargetElement {
    /**
     * 要搜索的目标元素的原始数据。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    elemData: Uint8Array;
    /**
     * 用于散列目标元素的散列算法。如果未指定，则元素
     * 数据将与SHA256默认值一起使用。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    hashAlg?: HashAlg;
  }

  /**
   * 定义隐私搜索使用的数据集元素。每个元素包含一个用于匹配的键。
   * 可选的哈希算法，以及用于PIR协议检索的可选值。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  interface Element {
    /**
     * 数据集元素的键，用于与隐私目标进行匹配。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    elemKey: Uint8Array;
    /**
     * 用于散列元素键的散列算法。如果未指定，则元素键
     * 将与SHA256默认值一起使用。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    hashAlg?: HashAlg;
    /**
     * 与元素键关联的值。该字段在PIR协议中使用。
     * 当找到匹配项时，检索附加的值。如果未指定，则元素
     * 只支持键匹配，不支持值检索。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    elemValue?: Uint8Array;
  }

  /**
   * 定义隐私搜索操作的结果，包含结果的密文。
   * 和可选值密文。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  interface PrivacySearchResult {
    /**
     * 隐私搜索生成的结果密文数组。
     * 这些密文对搜索结果进行编码，需要通过getSearchResult进行解密。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    resultCipherText: Uint8Array[];
    /**
     * 使用PIR协议进行隐私搜索时生成的值密文数组。
     * 这些密文包含与匹配元素相关的加密值。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    valueCipherText?: Uint8Array[];
  }

  /**
   * 定义解密后的最终搜索结果，指示是否找到匹配项
   * 以及与匹配元素关联的可选附加值。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.1
   */
  interface SearchResult {
    /**
     * 指示是否在数据集中找到隐私目标。True表示找到了匹配项；
     * false表示不匹配。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    matchedResult: boolean;
    /**
     * 与匹配元素关联的附加值。此字段仅在以下情况下可用：
     * 使用PIR协议并找到匹配项；否则未定义。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.1
     */
    attachedValues?: Uint8Array[];
  }
}

export default privacyComputation;
