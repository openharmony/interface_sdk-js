/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { Resource } from '../../global/resource';
import {
  VoidCallback, ResourceStr, ResourceColor, Dimension, BorderRadiuses, LocalizedEdgeColors, EdgeColors,
  EdgeWidths, LocalizedEdgeWidths, EdgeStyles, LocalizedBorderRadiuses
} from './units';
import { Callback, DismissReason, Rectangle, BlurStyle, TransitionEffect, ShadowOptions, HoverModeAreaType, 
  ShadowStyle, BackgroundBlurStyleOptions, BackgroundEffectOptions } from './common';
import { DialogButtonStyle, BorderStyle } from './enums';
import { DialogAlignment } from './alertDialog';
import { LevelOrder, LevelMode, ImmersiveMode } from '../../@ohos.promptAction';
/*** endif */

/**
 * The information of sheet.
 *
 * @interface SheetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The information of sheet.
 *
 * @interface SheetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The information of sheet.
 *
 * @interface SheetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SheetInfo {
  /**
   * Title Properties
   * 
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Title Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Title Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  title: string | Resource;

  /**
   * Icon Properties.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Icon Properties.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Icon Properties.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: string | Resource;

  /**
   * Callback method after the operation.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback method after the operation.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback method after the operation.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Callback method after the operation.
   *
   * @type { VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  action: VoidCallback;
}

/**
 * Component dialog dismiss action.
 *
 * @interface DismissDialogAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface DismissDialogAction {
  /**
   * Defines dialog dismiss function.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: Callback<void>;

  /**
   * Defines dialog dismiss function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  dismiss(): void;
  
  /**
   * Dismiss reason type.
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  reason: DismissReason;
}

/**
 * Base button params used for ActionSheet.
 *
 * @interface ActionSheetButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ActionSheetButtonOptions {
  /**
   * Enable switch of confirmation button
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Enable switch of confirmation button
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enabled?: boolean;

  /**
   * Default focus switch of confirmation button
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default focus switch of confirmation button
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  defaultFocus?: boolean;

  /**
   * Style of confirmation button.
   * @type { ?DialogButtonStyle }
   * @default DialogButtonStyle.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Style of confirmation button.
   * @type { ?DialogButtonStyle }
   * @default DialogButtonStyle.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: DialogButtonStyle;

  /**
   * Text content of the confirmation button.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Text content of the confirmation button.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text content of the confirmation button.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string | Resource;

  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Method executed by the callback.
   *
   * @type { VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  action: VoidCallback;
}

/**
 * ActionSheet offset.
 *
 * @interface ActionSheetOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ActionSheetOffset {
  /**
   * Dx of the pop-up window relative to the alignment position.
   *
   * @type { number | string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dx: number | string | Resource;
  /**
   * Dy of the pop-up window relative to the alignment position.
   *
   * @type { number | string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dy: number | string | Resource;
}

/**
 * Import the LevelMode type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').LevelMode } LevelMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type LevelMode = import('../api/@ohos.promptAction').LevelMode;

/**
 * Import the ImmersiveMode type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').ImmersiveMode } ImmersiveMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type ImmersiveMode = import('../api/@ohos.promptAction').ImmersiveMode;

/**
 * The options of ActionSheet.
 *
 * @interface ActionSheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The options of ActionSheet.
 *
 * @interface ActionSheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The options of ActionSheet.
 *
 * @interface ActionSheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ActionSheetOptions
{
  /**
   * Title Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Title Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Title Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  title: string | Resource;
  
  /**
   * Subtitle Properties
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Subtitle Properties
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  subtitle?: ResourceStr;

  /**
   * message Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * message Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * message Properties
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  message: string | Resource;

  /**
   * Invoke the commit function.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Invoke the commit function.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Invoke the commit function.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Invoke the commit function.
   *
   * @type { ?ActionSheetButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  confirm?: ActionSheetButtonOptions;

  /**
   * Execute Cancel Function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Execute Cancel Function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Execute Cancel Function.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Execute Cancel Function.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  cancel?: VoidCallback;

  /**
   * The Array of sheets
   *
   * @type { Array<SheetInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The Array of sheets
   *
   * @type { Array<SheetInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Array of sheets
   *
   * @type { Array<SheetInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  sheets: Array<SheetInfo>;

  /**
   * Allows users to click the mask layer to exit.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Allows users to click the mask layer to exit.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Allows users to click the mask layer to exit.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  autoCancel?: boolean;

  /**
   * Alignment in the vertical direction.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Alignment in the vertical direction.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Alignment in the vertical direction.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   *
   * @type { ?ActionSheetOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offset?: ActionSheetOffset;

  /**
   * Mask Region of dialog. The size cannot exceed the main window.
   *
   * @type { ?Rectangle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Mask Region of dialog. The size cannot exceed the main window.
   *
   * @type { ?Rectangle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maskRect?: Rectangle;
    
  /**
   * Whether to display in the sub window.
   * 
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether to display in the sub window.
   * 
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showInSubWindow?: boolean;

  /**
   * Whether it is a modal dialog
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether it is a modal dialog
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isModal?: boolean;

  /**
   * Defines the actionSheet's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the actionSheet's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines the actionSheet's background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the actionSheet's background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the actionSheet's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the actionSheet's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Callback function when the actionSheet interactive dismiss
   *
   * @type { ?Callback<DismissDialogAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillDismiss?: Callback<DismissDialogAction>;

  /**
   * Transition parameters of opening/closing ActionSheet.
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  transition?: TransitionEffect;

  /**
   * Defines the actionSheet's corner radius.
   *
   * @type { ?(Dimension | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Defines the actionSheet's width.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  width?: Dimension;

  /**
   * Defines the actionSheet's height.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  height?: Dimension;

  /**
   * Defines the actionSheet's border width.
   *
   * @type { ?(Dimension | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * Defines the actionSheet's border color.
   *
   * @type { ?(ResourceColor | EdgeColors | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * Defines the actionSheet's border style.
   *
   * @type { ?(BorderStyle | EdgeStyles) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * Defines the actionSheet's shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines whether to respond to the hover mode.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableHoverMode?: boolean;

  /**
   * Defines the actionSheet's display area in hover mode.
   *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Callback function when the dialog appears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidAppear?: Callback<void>;

  /**
   * Callback function when the dialog disappears.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidDisappear?: Callback<void>;

  /**
   * Callback function before the dialog openAnimation starts.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillAppear?: Callback<void>;

  /**
   * Callback function before the dialog closeAnimation starts.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillDisappear?: Callback<void>;

  /**
   * Determine the display level of the dialog.
   *
   * @type { ?LevelMode }
   * @default LevelMode.OVERLAY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  levelMode?: LevelMode;

  /**
   * The uniqueId of any node in the router or navigation page.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  levelUniqueId?: number;

  /**
   * Determine the immersive mode of the dialog.
   *
   * @type { ?ImmersiveMode }
   * @default ImmersiveMode.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  immersiveMode?: ImmersiveMode;

  /**
   * Determine the display order of the dialog.
   *
   * @type { ?LevelOrder }
   * @default The value returns by LevelOrder.clamp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  levelOrder?: LevelOrder;
}

/**
 * Declare the ActionSheet
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Declare the ActionSheet
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare the ActionSheet
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class ActionSheet {
  /**
   * Invoking method display.
   *
   * @param { ActionSheetOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Invoking method display.
   *
   * @param { ActionSheetOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Invoking method display.
   *
   * @param { ActionSheetOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showActionSheet
   */
  static show(value: ActionSheetOptions);
}
