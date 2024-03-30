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
 * @file
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * Declare Component UserAuthIcon.
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @since 12
 */
@Component
export default struct UserAuthIcon {

    /**
     * Set user auth parameter.
     * @type { userAuth.AuthParam }.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    authParam: userAuth.AuthParam;

    /**
     * Set auth widget parameter.
     * @type { userAuth.WidgetParam }
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    widgetParam: userAuth.WidgetParam;

    /**
     * Set the height of the icon with a 1:1 aspect ratio.
     * @type { ?Dimension }
     * @default 64
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    iconHeight?: Dimension;

    /**
     * Set the color of the icon.
     * @type { ?ResourceColor }
     * @default $r('sys.color.ohos_id_color_activated')
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    iconColor?: ResourceColor;

    /**
     * The user auth result callback.
     * @param { userAuth.UserAuthResult } result - Auth result info.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    onAuthResult: (result: userAuth.UserAuthResult) => void;

    /**
     * The icon click event callback.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    onIconClick?: () => void;
}