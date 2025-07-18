/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
export enum ImageAnalyzerType {
    SUBJECT = 0,
    TEXT = 1,
    OBJECT_LOOKUP = 2
}
export interface ImageAnalyzerController {
    getImageAnalyzerSupportTypes(): Array<ImageAnalyzerType>
}
export interface ImageAnalyzerConfig {
    types: Array<ImageAnalyzerType>;
}
export interface ImageAIOptions {
    types?: Array<ImageAnalyzerType>;
    aiController?: ImageAnalyzerController;
}
