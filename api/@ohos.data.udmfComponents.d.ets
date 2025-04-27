/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkData
 */
import uniformDataStruct from '@ohos.data.uniformDataStruct';

/**
 * Enumerates the form type of ContetnFormCard.
 *
 * @enum { number }
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 20
 */
declare enum FormType {
    /**
     * Fixed style.
     * <p>It's provided for the form card type of TYPE_BIG.
     * When the flag is set, the form card fixed 4x4.</p>
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    TYPE_BIG = 0,
    /**
     * Fixed style.
     * <p>It's provided for the form card type of TYPE_MID.
     * When the flag is set, the form card fixed 4x2.</p>
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    TYPE_MID = 1,
    /**
     * Fixed style.
     * <p>It's provided for the form card type of TYPE_SMALL.
     * When the flag is set, the form card fixed 2x1.</p>
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    TYPE_SMALL = 2
}

/**
 * Declare ContentForm card.
 *
 * @struct { ContentFormCard }
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 20
 */
@Component
declare struct ContentFormCard {
    /**
     * Sets the content form data.
     *
     * @type { uniformDataStruct.ContentForm }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    contentFormData: uniformDataStruct.ContentForm;
    /**
     * Sets the content from type.
     *
     * @type { FormType }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    @Prop
    formType: FormType;
    /**
     * Sets the card width.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    @Prop
    formWidth?: number;
    /**
     * Sets the card width.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    @Prop
    formHeight?: number;
    /**
     * An callback. When the card is clicked, the callback will be invoked.
     *
     * @type { ?Function }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 20
     */
    handleOnClick?: Function;
}

export { ContentFormCard, FormType };