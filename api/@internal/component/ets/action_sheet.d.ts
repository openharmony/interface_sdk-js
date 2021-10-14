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

import { DialogAlignment } from "./alert_dialog";
import {CommonMethod, Resource} from "./common"

/**
 * The information of sheet.
 * @devices phone, tablet, car.
 * @since 7
 */
interface SheetInfo {
  /**
   * Title Properties
   * @devices phone, tablet, car.
   * @since 7
   */
  title: string | Resource;

  /**
   * Icon Properties.
   * @devices phone, tablet, car.
   * @since 7
   */
  icon?: string | Resource;

  /**
   * Callback method after the operation.
   * @devices phone, tablet, car.
   * @since 7
   */
  action: () => void;
}

/**
 * Callback method after the operation.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class ActionSheetExtend<T> extends ActionSheetAttribute<T> {
}

/**
 * create ActionSheet.
 * @devices phone, tablet, car.
 * @since 7
 */
interface ActionSheet extends ActionSheetAttribute<ActionSheet> {
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class ActionSheetAttribute<T> extends CommonMethod<T> {
  /**
   * Invoking method display.
   * @devices phone, tablet, car.
   * @since 7
   */
  show(value: {
    title: string | Resource;
    message: string | Resource;
    confirm?: {
      value: string | Resource;
      action: () => void;
    };
    cancel?: () => void;
    sheets: Array<SheetInfo>;
    autoCancel?: boolean;
    alignment?: DialogAlignment;
    offset?: { dx: number | string | Resource, dy: number | string | Resource };
  });
}

/**
 * Definitions ActionSheetInterface.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const ActionSheetInterface: ActionSheet;
