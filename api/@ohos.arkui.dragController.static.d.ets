/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */
import { DragEvent, DragPreviewOptions, DragItemInfo, ICurve } from '@ohos.arkui.component';
import { CustomBuilder } from '@ohos.arkui.component';
import { TouchPoint, ResourceColor } from '@ohos.arkui.component';
import { Curve } from '@ohos.arkui.component';
import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';
import type unifiedDataChannel from './@ohos.data.unifiedDataChannel';


/**
 * This module allows developers to trigger a drag event.
 * @namespace dragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare namespace dragController {
    
    
    /**
     * Defines the Drag Status.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    const enum DragStatus {
        
        
        /**
         * Drag has started.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        STARTED = 0,
        
        
        /**
         * Drag has ended.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ENDED = 1
    }
    
    
    /**
     * Drag and drop information
     *
     * @interface DragAndDropInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    interface DragAndDropInfo {
        
        
        /**
         * The drag status.
         * @type { DragStatus }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        status: DragStatus;
        
        
        /**
         * The information containing the drag event.
         * @type { DragEvent }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        event: DragEvent;
        
        
        /**
         * Additional information about the drag info.
         * @type { ?string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        extraParams?: string;
    }
    
    
    /**
     * One drag action object for drag process
     *
     * @interface DragAction
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    interface DragAction {
        /**
         * trigger drag action
         *
         * @returns { Promise<void> | null } A Promise can indicate the start result is returned, or null is returned
         *     if it's failed for some errors, for example: execution environment broken or excess parameters passed in.
         * @throws { BusinessError } 100001 - Internal handling failed.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        startDrag(): Promise<void> | null;
        
        
        /**
         * Registers a callback for listening on drag status changes.
         * This callback is triggered when the drag status change.
         *
         * @param { Callback<DragAndDropInfo> } callback with drag event and status information
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onStatusChange(callback: Callback<DragAndDropInfo>): void;
        
        
        /**
         * Deregisters a callback for listening on drag status changes.
         * This callback is not triggered when the drag status change.
         *
         * @param { Callback<DragAndDropInfo> } [callback] with drag event and status information
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offStatusChange(callback?: Callback<DragAndDropInfo>): void;
    }
    
    
    /**
     * DragInfo object description
     *
     * @interface DragInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    interface DragInfo {
        
        
        /**
         * A unique identifier to identify which touch point.
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        pointerId: int;
        
        
        /**
         * Drag data.
         * @type { ?unifiedDataChannel.UnifiedData }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        data?: unifiedDataChannel.UnifiedData;
        
        
        /**
         * Additional information about the drag info.
         * @type { ?string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        extraParams?: string;
        
        
        /**
         * Touch point coordinates.
         * @type { ?TouchPoint }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        touchPoint?: TouchPoint;
        
        
        /**
         * Drag preview options.
         * @type { ?DragPreviewOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        previewOptions?: DragPreviewOptions;
    }
    
    
    /**
     * Defines the animation options for drag preview.
     *
     * @interface AnimationOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    interface AnimationOptions {
        
        
        /**
         * Animation duration, in ms.
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        duration?: int;
        
        
        /**
         * Animation curve.
         * @type { ?(Curve | ICurve) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        curve?: Curve | ICurve;
    }
    
    
    /**
     * Provides the functions of setting color or updating animation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export class DragPreview {
        
        
        /**
         * change foreground color of preview
         * @param { ResourceColor } color - color value
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        setForegroundColor(color: ResourceColor): void;
        
        
        /**
         * update preview style with animation
         * @param { AnimationOptions } options - animation options
         * @param { function } handler - change style functions
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        animate(options: AnimationOptions, handler: () => void): void;
    }
    
    /**
     * Define the drag event paramters
     *
     * @interface DragEventParam
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    interface DragEventParam {
        
        
        /**
         * The information containing the drag event.
         * @type { DragEvent }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        event: DragEvent;
        
        
        /**
         * Additional information about the drag info.
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        extraParams: string;
    }
    /**
     * Define the status for the application to notify the framework whether to execute drag.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    const enum DragStartRequestStatus {
        /**
         * Notify the framework that the application is not yet ready and needs to temporarily block
         * the start of drag, only effective in onDragStart calls.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        WAITING = 0,
        /**
         * Notify the framework that the drag can continue to be started, but only during the start
         * of drag, and will not take effect when the drag is started.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        READY = 1
    }
}
export default dragController;
