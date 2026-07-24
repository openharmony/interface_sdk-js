/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file 智慧数据平台
 * @kit ArkData
 */

/**
 * 智慧数据平台（ArkData Intelligence Platform，AIP）提供端侧数据智慧化构建，使应用数据向量化，通过嵌入模型将非结构化的文本、图像等多模态数据，转换成具有语义的向量。适用于智能检索、内容理解、相似度匹配等场
 * 景，帮助开发者解决非结构化数据难以计算和比较的问题，提升应用在推荐系统、智能问答、图像识别等场景下的处理效率和准确性。
 *
 * @namespace intelligence
 * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
 * @since 15 dynamic
 * @since 23 static
 */
declare namespace intelligence {
  /**
   * 获取文本嵌入模型。使用Promise异步回调。
   *
   * @param { ModelConfig } config - 嵌入模型的配置信息。
   * @returns { Promise<TextEmbedding> } Promise对象，返回文本嵌入模型，用于文本向量化。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>;

  /**
   * 获取图像嵌入模型。使用Promise异步回调。
   *
   * @param { ModelConfig } config - 嵌入模型的配置信息。
   * @returns { Promise<ImageEmbedding> } Promise对象，返回图像嵌入模型，用于图像向量化。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function getImageEmbeddingModel(config: ModelConfig): Promise<ImageEmbedding>;

  /**
   * 云侧模型的配置信息，在使用云侧文本向量模型时配置，可通过[getSupportedCloudModel]{@link intelligence.getSupportedCloudModel}接口获取当前设备支持的云侧模型信息。
   *
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CloudModelInfo {
    /**
     * 模型类型名称，如"arkdata_text_embedding"表示云侧文本向量模型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelType: string;

    /**
     * 模型版本，默认值为空。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelVersionCode?: string;
  }

  /**
   * 下载云侧模型的网络策略枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum NetworkPolicy {
    /**
     * 仅在Wi-Fi状态下下载模型，适用于需要节省移动数据流量的场景。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_ONLY = 0,

    /**
     * 在Wi-Fi和蜂窝网络状态下下载模型，适用于需要快速获取模型且允许使用移动数据的场景。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_AND_CELLULAR = 1
  }

  /**
   * 管理嵌入模型的配置信息。
   *
   * @interface ModelConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface ModelConfig {
    /**
     * 模型的版本。
     *
     * @type { ModelVersion }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    version: ModelVersion;

    /**
     * 指示是否使用NPU加速向量化过程，true表示使用，false表示不使用。如果设备不支持NPU，调用加载模型会失败，并抛出错误码31300000。
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    isNpuAvailable: boolean;

    /**
     * 如果使用NPU进行加速，则需要本地路径进行模型缓存。格式为/xxx/xxx/xxx，xxx为路径地址，例如"/data"。长度上限为512个字符。默认值为""。超出长度时抛出异常。
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    cachePath?: string;

    /**
     * 云侧模型类型和版本信息，在使用文本向量模型时配置，通过[getSupportedCloudModel]{@link intelligence.getSupportedCloudModel}接口获取支持的模型信息，默认值为空。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelInfo?: CloudModelInfo;

    /**
     * 下载云侧模型时使用的网络策略，默认值为WIFI_ONLY。此参数仅在使用文本嵌入模型时生效，在使用图像嵌入模型场景此参数不生效。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    networkPolicy?: NetworkPolicy;
  }

  /**
   * 模型版本枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum ModelVersion {
    /**
     * 基本嵌入模型版本。
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODEL = 0
  }

  /**
   * 描述文本嵌入模型的文本嵌入函数。
   *
   * 下列接口都需先使用[intelligence.getTextEmbeddingModel]{@link intelligence.getTextEmbeddingModel}获取到TextEmbedding实例，再通过此实例调用对
   * 应接口。
   *
   * @interface TextEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface TextEmbedding {
    /**
     * 加载文本嵌入模型。使用Promise异步回调。
     *
     * **配对调用：**
     *- 调用loadModel()后，必须在使用完毕后调用[releaseModel()](#releasemodel)释放模型资源。
     *- 未调用releaseModel()会导致资源泄漏，影响系统性能。
     *- 建议将releaseModel()放在finally块中确保资源被正确释放。
     * @returns { Promise<void> } 无返回结果的Promise。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    loadModel(): Promise<void>;

    /**
     * 释放文本嵌入模型。使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    releaseModel(): Promise<void>;

    /**
     * 获取给定文本的嵌入向量。使用Promise异步回调。
     *
     * 该接口需先调用[loadModel]{@link intelligence.TextEmbedding.loadModel}加载嵌入模型，加载成功后调用getEmbedding。
     *
     * @param { string } text - 嵌入模型的输入文本。长度上限为512个字符。
     * @returns { Promise<Array<double>> } Promise对象，返回向量化结果的数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    getEmbedding(text: string): Promise<Array<double>>;

    /**
     * 获取给定批次文本的嵌入向量。批量处理可以提高性能，适用于需要同时处理多个文本的场景。使用Promise异步回调。
     *
     * 该接口需先调用[loadModel]{@link intelligence.TextEmbedding.loadModel}加载嵌入模型，加载成功后调用getEmbedding。
     *
     * @param { Array<string> } batchTexts - 嵌入模型的文本输入批次。单个文本长度上限为512个字符。
     * @returns { Promise<Array<Array<double>>> } Promise对象，返回批次向量化结果的二维数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    getEmbedding(batchTexts: Array<string>): Promise<Array<Array<double>>>;
  }

  /**
   * 描述多模态嵌入模型的图像嵌入函数。
   *
   * 下列接口都需先使用[intelligence.getImageEmbeddingModel]{@link intelligence.getImageEmbeddingModel}获取到ImageEmbedding实例，再通过此实例
   * 调用对应接口。
   *
   * @interface ImageEmbedding
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface ImageEmbedding {
    /**
     * 加载图像嵌入模型。使用Promise异步回调。
     *
     * **配对调用：**
     *- 调用loadModel()后，必须在使用完毕后调用[releaseModel()](#releasemodel-1)释放模型资源。
     *- 未调用releaseModel()会导致资源泄漏，影响系统性能。
     *- 建议将releaseModel()放在finally块中确保资源被正确释放。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    loadModel(): Promise<void>;

    /**
     * 释放图像嵌入模型。使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    releaseModel(): Promise<void>;

    /**
     * 获取给定图像的嵌入向量。使用Promise异步回调。
     *
     * 该接口需先调用[loadModel]{@link intelligence.TextEmbedding.loadModel}加载嵌入模型，加载成功后调用getEmbedding。
     *
     * @param { Image } image - 嵌入模型的输入图像类型的URI地址。
     * @returns { Promise<Array<double>> } Promise对象，返回向量化结果的数组对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    getEmbedding(image: Image): Promise<Array<double>>;
  }

  /**
   * 表示图片的URI地址，为string类型。
   *
   * @typedef { string } Image
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 15 dynamic
   * @since 23 static
   */
  type Image = string;

  /**
   * 获取文本的分块。使用Promise异步回调。
   *
   * @param { string } text - 待分块的文本。单个文本长度上限为100000个字符。超出长度时抛出异常。
   * @param { SplitConfig } config - 文本分块的配置信息。
   * @returns { Promise<Array<string>> } Promise对象，返回分块结果的数组。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 31300000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function splitText(text: string, config: SplitConfig): Promise<Array<string>>;

  /**
   * 获取支持的云侧模型信息。使用Promise异步回调。
   *
   * @returns { Promise<Array<CloudModelInfo>> } Promise对象，返回支持的云侧模型信息。
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSupportedCloudModel(): Promise<Array<CloudModelInfo>>;

  /**
   * 管理文本分块的配置信息。
   *
   * @interface SplitConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface SplitConfig {
    /**
     * 分块的最大大小，取值为非负整数。较小的size值适用于需要精细化分块或处理内存受限场景，较大的size值适用于处理大数据量时减少分块数量。
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * 相邻分块之间的重叠比率。范围为[0,1]，0表示重叠比率最低，1表示重叠比率最高。较高的重叠比率适用于需要保持语义连贯性的长文本场景，较低的比率适用于需要减少重复计算的短文本场景。
     *
     * @type { double }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @since 15 dynamic
     * @since 23 static
     */
    overlapRatio: double;
  }
}

export default intelligence;