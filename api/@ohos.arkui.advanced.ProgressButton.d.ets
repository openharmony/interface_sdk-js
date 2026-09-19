/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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

/**
 * The **ProgressButton** component is a text-based download button with a progress indicator that shows the download 
 * progress.
 * 
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ProgressButton** component has [universal attributes]{@link CommonMethod} and 
 * > [universal events]{@link CommonMethod} configured, the compiler toolchain automatically 
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node 
 * > rather than the **ProgressButton** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events 
 * > with the **ProgressButton** component.
 *
 * The [universal events]{@link CommonMethod} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct ProgressButton {
  /**
   * Current download progress.
   * 
   * The value ranges from 0 to 100. Values less than 0 are adjusted to **0**, and values greater than 100 are capped at
   * **100**.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop progress: number;

  /**
   * Button text.
   * 
   * The default value is an empty string.
   * 
   * Note: The text is truncated with an ellipsis (...) if it exceeds the maximum display width of the component. The 
   * Resource type is supported since API version 20.
   *
   * @type { string }. [since 10 - 19]
   * @type { ResourceStr }. [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop content: ResourceStr;

  /**
   * Button width, in vp.
   * 
   * The value must be greater than or equal to 44 vp.
   * 
   * The default value is **44vp**. If the provided value is not of the Resource type and is either less than the 
   * default value or invalid, the system will automatically use the default value. If the provided value is of the 
   * Resource type but is less than the default value, the system will automatically use the default value. If the 
   * provided value is invalid, the button width will be 100% of the container width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  progressButtonWidth?: Length;

  /**
   * Callback invoked when the button is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clickCallback: () => void;

  /**
   * Whether the button can be clicked.
   * 
   * **true**: The button can be clicked.
   * 
   * **false**: The button cannot be clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop enable: boolean;

  /**
   * Color options of the button. This parameter is used to customize the color of each part of the button (progress 
   * indicator, stroke, text, and background). This parameter is passed in when a custom color is required. If it is not
   * passed, the default color scheme is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop colorOptions?: ProgressButtonColorOptions;
  
  /**
   * Corner radius of the button. It cannot be set in percentage.
   * 
   * Value range: [0, height/2]
   * 
   * Default value: height/2
   * 
   * If the value is less than 0, the value **0** is used. If the value is invalid, the default value is used. If the 
   * input parameter is **undefined**, the default value is used. When using LengthMetrics.vp, you are advised to 
   * provide a specific numeric value. Passing **null** or **undefined** will result in an exception.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop progressButtonRadius?: LengthMetrics;
}

/**
 * Defines the color options for the download button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 18 dynamic
 */
export declare interface ProgressButtonColorOptions {

  /**
   * Color of the progress indicator.
   * 
   * Default value: **#330A59F7**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  progressColor?: ResourceColor;

  /**
   * Border color of the button.
   * 
   * Default value: **#330A59F7**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  borderColor?: ResourceColor;

  /**
   * Text color of the button.
   * 
   * Default value: system default value **#CE000000**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  textColor?: ResourceColor;

  /**
   * Background color of the button.
   * 
   * Default value: **$r('sys.color.ohos_id_color_foreground_contrary')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor?: ResourceColor;
}