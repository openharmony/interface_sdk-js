/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import type { AbilityResult } from '../ability/abilityResult';
import image from '../@ohos.multimedia.image';

/**
 * The context of Photo Editor extension. It allows access to PhotoEditorExtension-specific resources.
 *
 * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
 * @StageModelOnly
 * @since 12
 */
export default class PhotoEditorExtensionContext extends ExtensionContext {
    /**
     * Save image data by uri.
     *
     * @param { string } uri Image editing URI.
     * @param { AsyncCallback<AbilityResult> } callback Callback used to return the result of save.
     * @throws { BusinessError } 29600001 - Invalid input parameter.
     * @throws { BusinessError } 29600002 - Internal error.
     * @throws { BusinessError } 29600003 - Image input error.
     * @throws { BusinessError } 29600004 - Image too big error.
     * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
     * @since 12
     */
    saveEditedContentWithUri(uri: string, callback: AsyncCallback<AbilityResult>): void;

    /**
     * Save image data by uri.
     *
     * @param { string } uri Image editing URI.
     * @returns { Promise<AbilityResult> } Returns the result of save.
     * @throws { BusinessError } 29600001 - Invalid input parameter.
     * @throws { BusinessError } 29600002 - Internal error.
     * @throws { BusinessError } 29600003 - Image input error.
     * @throws { BusinessError } 29600004 - Image too big error.
     * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
     * @since 12
     */
    saveEditedContentWithUri(uri: string): Promise<AbilityResult>;

    /**
     * Save image data by image pixmap.
     *
     * @param { image.PixelMap } image Image pixmap.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<AbilityResult> } callback Callback used to return the result of save.
     * @throws { BusinessError } 29600001 - Invalid input parameter.
     * @throws { BusinessError } 29600002 - Internal error.
     * @throws { BusinessError } 29600003 - Image input error.
     * @throws { BusinessError } 29600004 - Image too big error.
     * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
     * @since 12
     */
    saveEditedContentWithImage(image: image.PixelMap, option: image.PackingOption,
        callback: AsyncCallback<AbilityResult>): void;

    /**
     * Save image data by image pixmap.
     *
     * @param { image.PixelMap } image Image pixmap.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<AbilityResult> } Returns the result of save.
     * @throws { BusinessError } 29600001 - Invalid input parameter.
     * @throws { BusinessError } 29600002 - Internal error.
     * @throws { BusinessError } 29600003 - Image input error.
     * @throws { BusinessError } 29600004 - Image too big error.
     * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
     * @since 12
     */
    saveEditedContentWithImage(image: image.PixelMap, option: image.PackingOption): Promise<AbilityResult>;
}