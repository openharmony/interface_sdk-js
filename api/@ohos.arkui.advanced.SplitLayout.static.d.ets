'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */
import { ResourceStr } from '@ohos.arkui.component';
import { State, PropRef } from './arkui/stateManagement/decorator';
import { Component } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
/**
 * Declare SplitLayout.The SplitLayout is used for upper and lower graphic layouts.
 * @struct { SplitLayout }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct SplitLayout {
    /**
     * Container in the user-defined splitlayout display area.
     *
     * @type { function }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @BuilderParam
    container: () => void;
    /**
     * Image in the layout.
     *
     * @type { ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @State
    mainImage: ResourceStr;
    /**
     * Title text in the layout.
     *
     * @type { ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    primaryText: ResourceStr;
    /**
     * Description text in the layout.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    secondaryText?: ResourceStr;
    /**
     * Auxiliary text in the layout.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    tertiaryText?: ResourceStr;
    /**
     * The method to build component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @Builder
    build(): void;
}