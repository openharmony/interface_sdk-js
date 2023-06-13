
/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

const path = require('path');
const fs = require('fs');
const etsComponentSet = new Set([
  "AbilityComponent",
  "AlphabetIndexer",
  "Animator",
  "Badge",
  "Blank",
  "Button",
  "Calendar",
  "Camera",
  "Canvas",
  "Checkbox",
  "CheckboxGroup",
  "Circle",
  "ColorPicker",
  "ColorPickerDialog",
  "Column",
  "ColumnSplit",
  "Counter",
  "DataPanel",
  "DatePicker",
  "Divider",
  "Ellipse",
  "Flex",
  "FormComponent",
  "FormLink",
  "Gauge",
  "GeometryView",
  "Grid",
  "GridItem",
  "GridContainer",
  "Hyperlink",
  "Image",
  "ImageAnimator",
  "Line",
  "List",
  "ListItem",
  "ListItemGroup",
  "LoadingProgress",
  "Marquee",
  "Menu",
  "Navigation",
  "Navigator",
  "Option",
  "PageTransitionEnter",
  "PageTransitionExit",
  "Panel",
  "Path",
  "PatternLock",
  "Piece",
  "PluginComponent",
  "Polygon",
  "Polyline",
  "Progress",
  "QRCode",
  "Radio",
  "Rating",
  "Rect",
  "Refresh",
  "RelativeContainer",
  "RemoteWindow",
  "Row",
  "RowSplit",
  "RichText",
  "Scroll",
  "ScrollBar",
  "Search",
  "Section",
  "Select",
  "Shape",
  "Sheet",
  "SideBarContainer",
  "Slider",
  "Span",
  "Stack",
  "Stepper",
  "StepperItem",
  "Swiper",
  "TabContent",
  "Tabs",
  "Text",
  "TextPicker",
  "TextClock",
  "TextArea",
  "TextInput",
  "TextTimer",
  "TimePicker",
  "Toggle",
  "Video",
  "Web",
  "XComponent",
  "GridRow",
  "GridCol",
  "CustomDialogController",
  "PanGesture"
]);
exports.etsComponentSet = etsComponentSet;
function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    })
  } catch (e) {
    console.log('ETS ERROR: ' + e);
  }
}
exports.readFile = readFile;

function collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, interfaceName,
  value, type, notes, node) {
  const basePath = __dirname.replace('src', '');
  const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
  return {
    callLocation: `${url.replace(basePath, '')}(line:${posOfNode.line + 1},` +
      ` col:${posOfNode.character + 1})`,
    moduleName: moduleName,
    apiName: apiName,
    packageName: '',
    instantiateObject: instantiateObject,
    interfaceName: interfaceName,
    value: value,
    type: type,
    notes: notes
  }
}

let callMethod = {
  /**
   * 调用方式示例代码
   * const atManager = abilityAccessCtrl.createAtManager();
   * let result = await atManager.verifyAccessToken(tokenID, array[i]);
   */
  firstCallMethod:'实例化调用方式1',
  /**
   * 调用方式示例代码
   * private mCameraInput!: camera.CameraInput
   * this.mCameraInput.release()
   */
  secondCallMethod:'实例化调用方式2',
  /**
   * 调用方式示例代码
   * private mListeners:ArrayList<Listener> = new ArrayList();
   * this.mListeners.add(listener);
   */
  thirdCallMethod:'实例化调用方式3',
  /**
   * 调用方式示例代码
   * userAuthManager = new osAccount.UserAuth();
   * this.userAuthManager.authUser();
   */
  fourthCallMethod:'实例化调用方式4'
}
exports.collectAllApi = collectAllApi;
exports.callMethod = callMethod;