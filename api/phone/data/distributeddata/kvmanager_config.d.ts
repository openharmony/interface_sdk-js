/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Provides configuration information for {@link KVManager} instances,
 * including the caller's package name and distributed network type.
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @devices phone, tablet
 * @since 7
 */
export interface KVManagerConfig {
    /**
     * Indicates the user information
     */
    userInfo: UserInfo;

    /**
     * Indicates the bundleName
     */
    bundleName: string;
}

/**
 * Manages user information.
 *
 * <p>This class provides methods for obtaining the user ID and type, setting the user ID and type,
 * and checking whether two users are the same.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 */
export interface UserInfo {
    /** Indicates the user ID to set */
    userId?: string;

    /** Indicates the user type to set */
    userType?: UserType;
}

/**
 * Enumerates user types.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 */
export enum UserType {
    /** Indicates a user that logs in to different devices using the same account. */
    SAME_USER_ID = 0
}