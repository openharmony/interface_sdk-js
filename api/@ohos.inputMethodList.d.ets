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
 * @brief The **inputMethodList** module is oriented to system applications and input method applications.
 * It provides APIs for implementing an input method list. This list displays the default input method subtypes and
 * third-party input methods. Users can use this list to switch from the default input method to another input method.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > This component is supported since API version 11.
 * Updates will be marked with a superscript to indicate their earliest API version.
 * <br>
 * <br>###### Child Components
 * <br>
 * <br>Not supported
 * <br>
 * <br>###### Attributes
 * <br>
 * <br>The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 * <br>
 * <br>######  Events
 * <br>
 * <br>The [universal events]{@link ./@internal/component/ets/common} are not supported.
 * <br>
 * <br>##  Example
 * <br>
 * <br>```ts
 * <br>import { Pattern, PatternOptions } from '@kit.IMEKit';
 * <br>
 * <br>@Entry
 * <br>// Configure the component.
 * <br>@Component
 * <br>struct SettingsItem {
 * <br>  @State defaultPattern: number = 1;
 * <br>  private oneHandAction: PatternOptions = {
 * <br>    defaultSelected: this.defaultPattern,
 * <br>    patterns: [ // Icons in patterns can be used only after the corresponding icon resources have been added to
 * the resource directory of the project.
 * <br>      {
 * <br>        icon: $r('app.media.hand_icon'), // Icon resource for the input method mode option, for example,
 * the icon for the one-handed mode.
 * <br>        selectedIcon: $r('app.media.hand_icon_selected') // Icon resource for the input method mode option in
 * the selected state, for example, the icon for the one-handed mode in the selected state.
 * <br>      },
 * <br>      {
 * <br>        icon: $r('app.media.hand_icon1'),
 * <br>        selectedIcon: $r('app.media.hand_icon_selected1')
 * <br>      },
 * <br>      {
 * <br>        icon: $r('app.media.hand_icon2'),
 * <br>        selectedIcon: $r('app.media.hand_icon_selected2'),
 * <br>      }],
 * <br>    action:(index: number)=>{
 * <br>      console.info(`pattern is changed, current is ${index}`);
 * <br>      this.defaultPattern = index;
 * <br>    }
 * <br>  };
 * <br>  private listController: CustomDialogController = new CustomDialogController({
 * <br>    builder: InputMethodListDialog({ patternOptions: this.oneHandAction }),
 * <br>    customStyle: true,
 * <br>    maskColor: '#00000000'
 * <br>  });
 * <br>
 * <br>  build() {
 * <br>    Column() {
 * <br>      Flex({ direction: FlexDirection.Column,
 * <br>        alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
 * <br>        Text("Input Method List").fontSize(20)
 * <br>      }
 * <br>    }
 * <br>    .width("13%")
 * <br>    .id('bindInputMethod')
 * <br>    .onClick((event?: ClickEvent) => {
 * <br>      this.listController.open();
 * <br>    })
 * <br>  }
 * <br>}
 * <br>```
 *
 * @file Input Method List
 * @kit IMEKit
 */

 /*** if arkts static */
 import { CustomDialogController, CustomDialog } from '@ohos.arkui.component';
 import { Resource } from './global/resource';
 /*** endif */

/**
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PatternOptions {
  /**
   * @brief Optional. Default selected pattern.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  defaultSelected?: int;
  /**
   * @brief Mandatory. Resource of the pattern option.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patterns: Array<Pattern>;
  /**
   * @brief Mandatory. Callback invoked when the pattern option changes.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  action: (index: int) => void;
}

/**
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface Pattern {
  /**
   * @brief Mandatory. Default icon.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  icon: Resource;
  /**
   * @brief Mandatory. Icon for the selected option.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  selectedIcon: Resource;
}

/**
 * @brief InputMethodListDialog({controller: CustomDialogController, patternOptions?: PatternOptions})
 * <br>
 * <br>Implements a dialog box showing the input method list.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
@CustomDialog
export declare struct InputMethodListDialog {
  /**
   * @brief Sets the controller.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * @brief Sets the pattern options. This parameter can be left blank when it is not default input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patternOptions?: PatternOptions;

  /**
   * @brief The method to build component.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}