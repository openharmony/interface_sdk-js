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
 * @kit ArkUI
 */

/**
 * Defines the **SymbolGlyphModifier**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export declare class SymbolGlyphModifier extends SymbolGlyphAttribute implements AttributeModifier<SymbolGlyphAttribute> {
  /**
   * A constructor used to create a **SymbolGlyphModifier** object.
   *
   * @param { Resource } src - Sets the symbol icon resource to be displayed by the SymbolGlyph component. If not
   *     passed, no resource is loaded.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(src?: Resource);

  /**
   * Sets the style of the component in the normal state (that is, the default interaction state in which the component
   * is not pressed, does not have focus, and so on). This method is a callback method that is automatically invoked by
   * the framework when the component is in the normal state. Developers can dynamically set the style of the
   * SymbolGlyph component by modifying the properties of the instance object in the method body.
   *
   * @param { SymbolGlyphAttribute } instance - Instance of SymbolGlyphAttribute, used to dynamically set the properties
   *     and styles of the SymbolGlyph component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  applyNormalAttribute?(instance: SymbolGlyphAttribute): void;
}