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

/*** if arkts 1.2 */
import { Resource } from './../../../api/global/resource';
import { CommonMethod, AttributeModifier } from './common';
import { ResourceColor } from './units';
import { FontWeight } from './enums';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';
/*** endif */

/**
 * Provides an interface for SymbolSpan.
 *
 * @interface SymbolSpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Provides an interface for SymbolSpan.
 *
 * @interface SymbolSpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Provides an interface for SymbolSpan.
 *
 * @interface SymbolSpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
interface SymbolSpanInterface {
  /**
   * Called when resource is entered in SymbolSpan.
   * 
   * @param { Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when resource is entered in SymbolSpan.
   * 
   * @param { Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when resource is entered in SymbolSpan.
   * 
   * @param { Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  (value: Resource): SymbolSpanAttribute;
}

/**
 * Provides attribute for SymbolSpan.
 * 
 * @extends CommonMethod<SymbolSpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Provides attribute for SymbolSpan.
 * 
 * @extends CommonMethod<SymbolSpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Provides attribute for SymbolSpan.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare class SymbolSpanAttribute {
  /**
   * Called when the SymbolSpan size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the SymbolSpan size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the SymbolSpan size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  fontSize(value: number | string | Resource): SymbolSpanAttribute;

  /**
   * Called when the SymbolSpan color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the SymbolSpan color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the SymbolSpan color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  fontColor(value: Array<ResourceColor>): SymbolSpanAttribute;

  /**
   * Called when the font SymbolSpan weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the font SymbolSpan weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the font SymbolSpan weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  fontWeight(value: number | FontWeight | string): SymbolSpanAttribute;

  /**
   * Called when the SymbolSpan effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the SymbolSpan effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the SymbolSpan effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  effectStrategy(value: SymbolEffectStrategy): SymbolSpanAttribute;

  /**
   * Called when the SymbolSpan rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the SymbolSpan rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the SymbolSpan rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  renderingStrategy(value: SymbolRenderingStrategy): SymbolSpanAttribute;

  /**
   * Sets the attribute modifier.
   * 
   * @param { AttributeModifier<SymbolSpanAttribute> } modifier - The instance of symbol span modifier.
   * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the attribute modifier.
   * 
   * @param { AttributeModifier<SymbolSpanAttribute> } modifier - The instance of symbol span modifier.
   * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute>): SymbolSpanAttribute;

  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  id(value: string): SymbolSpanAttribute;

  /**
   * Key. User can set an key to the component to identify it.
   *
   * @param { string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @test
   */
  key(value: string): SymbolSpanAttribute;

  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when a click event occurs.
   *
   * <p><strong>NOTE</strong>:
   * <br> Since API version 9, the following constraints apply when this API is used in service widgets:
   * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
   * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
   * </p>
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onClick(event: (event: ClickEvent) => void): SymbolSpanAttribute;

  /**
   * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold. 
   *
   * <p><strong>NOTE</strong>:
   * <br> If the distanceThreshold value specified is less than or equal to 0 vp, it will be converted to the default value.
   * <br> Since API version 9, the following constraints apply when this API is used in service widgets:
   * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
   * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
   * </p>
   * @param { function } event - this function callback executed when the click action is recognized
   * @param { number } distanceThreshold - the distance threshold of finger's movement when detecting a click action
   * @default (2^31-1)vp 
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onClick(event: Callback<ClickEvent>, distanceThreshold: number): SymbolSpanAttribute;

  /**
   * Trigger a hover event.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a hover event.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onHover(event: (isHover: boolean, event: HoverEvent) => void): SymbolSpanAttribute;

  /**
   * Set the animation of current transition effect
   *
   * @param { AnimateParam } value - animation parameters
   * @returns { TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  animation(value: AnimateParam): TransitionEffect;

  /**
   * Sets the alignment mode of the child components along the cross axis of the parent container.
   * Default value: **ItemAlign.Auto**.
   *
   * @param { ItemAlign } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  alignSelf(value: ItemAlign): SymbolSpanAttribute;

  /**
   * Sets the alignment mode of the component content in the drawing area.
   * Default value: **Alignment.Center**.
   *
   * @param { Alignment } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  align(value: Alignment): SymbolSpanAttribute;

  /**
   * Sets the alignment rules in the relative container.
   * This API is valid only when the container is RelativeContainer.
   *
   * @param { AlignRuleOption } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  alignRules(value: AlignRuleOption): SymbolSpanAttribute;

  /**
   * Sets the alignment rules in the relative container.
   * <br>This API is valid only when the container is RelativeContainer.
   * <br>This API takes the right-to-left scripts into account, using start and end instead of
   * left and right for alignment in the horizontal direction. Prioritize this API in aligning
   * child components in the relative container.
   *
   * @param { LocalizedAlignRuleOptions } alignRule
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  alignRules(alignRule: LocalizedAlignRuleOptions): SymbolSpanAttribute;

  /**
   * Sets the aspect ratio of the component, which can be obtained using the following formula: width/height.
   * <br>If only width and aspectRatio are set, the height is calculated using the following formula: width/aspectRatio.
   * <br>If only height and aspectRatio are set, the width is calculated using the following formula: height x aspectRatio.
   * <br>If width, height, and aspectRatio are all set, the explicitly set height is ignored, and the effective height is
   * calculated using the following formula: width/aspectRatio.
   * <br>This parameter takes effect only when a valid value greater than 0 is specified.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  aspectRatio(value: number): SymbolSpanAttribute;

  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> | null } value - the uniformData type for this node.
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  allowDrop(value: Array<UniformDataType> | null): SymbolSpanAttribute;

  /**
   * Sets whether to enable accessibility grouping.
   * 
   * <p><strong>NOTE</strong>
   * <br>Whether to enable accessibility grouping. When accessibility grouping is enabled,
   * <br>the component and all its children are treated as a single selectable unit, and the accessibility
   * <br>service will no longer focus on the individual child components.</p>
   *
   * @param { boolean } value - set group with accessibility, default value is false.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityGroup(value: boolean): SymbolSpanAttribute;

  /**
   * Sets whether to enable accessibility grouping.
   * 
   * <p><strong>NOTE</strong>
   * <br>If accessibility grouping is enabled and the component does not contain a universal text attribute
   * <br>or an accessibility text attribute, the system will concatenate the universal text attributes of
   * <br>its child components to form a merged text for the component. If a child component lacks a universal
   * <br>text attribute, it will be ignored in the concatenation process.
   * 
   * <br>When accessibilityPreferred is set to true, the system will prioritize concatenating the accessibility
   * <br>text attributes of the child components to form the merged text. If a child component lacks an
   * <br>accessibility text attribute, the system will continue to concatenate its universal text attribute.
   * <br>If a child component lacks both, it will be ignored.</p>
   *
   * @param { boolean } isGroup - set group with accessibility, default value is false.
   * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility, default value is false.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): SymbolSpanAttribute;

  /**
   * Sets the accessibility text.
   * When a component does not contain a text attribute, you can use this API to set an accessibility
   * text attribute, so that accessibility services can announce the specified content for the component.
   * 
   * @param { string } value - set accessibility text, default value is "".
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityText(value: string): SymbolSpanAttribute;

  /**
   * Sets accessibility next focus id
   * @param { string } nextId - set component next accessibility focus id
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  accessibilityNextFocusId(nextId: string): SymbolSpanAttribute;

    /**
   * Sets the accessibility default foucs flag
   * @param { boolean } focus - if the component is accessibility default focus,focus set true
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  accessibilityDefaultFocus(focus: boolean): SymbolSpanAttribute;
  
  /**
   * Sets accessibility same page mode
   * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): SymbolSpanAttribute;

  /**
   * Sets accessibilityScrollTriggerable
   * @param { boolean } isTriggerable - set property of supporting scroll in accessibility
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  accessibilityScrollTriggerable(isTriggerable: boolean): SymbolSpanAttribute;

  /**
   * Sets the accessibility text.
   * <p><strong>NOTE</strong>
   * If a component has both text content and accessibility text, only the accessibility text is announced.
   * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
   * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
   * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
   * </p>
   * @param { Resource } text - set accessibility text
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityText(text: Resource): SymbolSpanAttribute;
  
  /**
   * Sets accessibility role,role indicates the custom type of the component
   * @param { AccessibilityRoleType } role - set accessibility component type
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  accessibilityRole(role: AccessibilityRoleType): SymbolSpanAttribute;

  /**
   * Sets accessibilityTextHint
   *
   * @param { string } value - set accessibility text hint
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityTextHint(value: string): SymbolSpanAttribute;

  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility, default value is "".
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityDescription(value: string): SymbolSpanAttribute;

  /**
   * Sets accessibilityDescription
   * 
   * with support for resource references using Resource.
   * This property provides additional context or explanation for the component,
   * helping users understand the action or function it performs.
   * <p><strong>NOTE</strong>:
   * <br>Reference resource of the accessibility description. You can specify further explanation
   * <br>of the current component, for example, possible operation consequences, especially those that
   * <br>cannot be learned from component attributes and accessibility text. If a component contains
   * <br>both text information and the accessibility description, the text is read first and then the
   * <br>accessibility description, when the component is selected.</p>
   * @param { Resource } description - set description of accessibility
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityDescription(description: Resource): SymbolSpanAttribute;

  /**
   * Sets the accessibility level.
   * This property determines whether the component can be recognized by accessibility services.
   * <p>
   * Accessibility level, which is used to decide whether a component can be identified by the accessibility service.
   * <br>The options are as follows:
   * <br>"auto": The component's recognizability is determined by the accessibility grouping service and ArkUI.
   * <br>"yes": The component can be recognized by accessibility services.
   * <br>"no": The component cannot be recognized by accessibility services.
   * <br>"no-hide-descendants": Neither the component nor its child components can be recognized by accessibility services.
   * <strong>NOTE</strong>
   * <br>When accessibilityLevel is set to "auto", the component's recognizability depends on the following factors:
   * <br>1. The accessibility service internally determines whether the component can be recognized.
   * <br>2. If the parent component's accessibilityGroup property has isGroup set to true, the accessibility service will
   * <br>not focus on its child components, making them unrecognizable.
   * <br>3. If the parent component's accessibilityLevel is set to "no-hide-descendants", the component will not be
   * <br>recognized by accessibility services.</p>
   * @param { string } value - set accessibility level, default value is auto.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityLevel(value: string): SymbolSpanAttribute;

  /**
   * Sets accessibilityVirtualNode
   *
   * @param { CustomBuilder } builder - set virtual node of accessibility
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  accessibilityVirtualNode(builder: CustomBuilder): SymbolSpanAttribute;

  /**
   * Sets accessibilityChecked
   *
   * @param { boolean } isCheck - set accessibility checked status
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13
   * @deprecated since 20
   */
  accessibilityChecked(isCheck: boolean): SymbolSpanAttribute;

  /**
   * Sets accessibilitySelected
   *
   * @param { boolean } isSelect - set accessibility selected status
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13
   * @deprecated since 20
   */
  accessibilitySelected(isSelect: boolean): SymbolSpanAttribute;

  /**
   * Sets the background color of the component.
   *
   * @param { CustomBuilder } builder - Custom background.
   * @param { object } options - Alignment mode between the custom background and the component.
   * <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
   * <br>They will all take effect, with **background** at the top layer.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  background(builder: CustomBuilder, options?: { align?: Alignment }): SymbolSpanAttribute;

  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  backgroundColor(value: ResourceColor): SymbolSpanAttribute;

  /**
   * Background color
   *
   * @param { Optional<ResourceColor> } color
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  backgroundColor(color: Optional<ResourceColor>): SymbolSpanAttribute;

  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr | PixelMap } src
   * @param { ImageRepeat } repeat
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): SymbolSpanAttribute;

  /**
   * Background image
   *
   * @param { ResourceStr | PixelMap } src - the background image source
   * @param { BackgroundImageOptions } options - config the options
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): SymbolSpanAttribute;

  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value - The width and height of the background image.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  backgroundImageSize(value: SizeOptions | ImageSize): SymbolSpanAttribute;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  backgroundImagePosition(value: Position | Alignment): SymbolSpanAttribute;

  /**
   * Sets the background effect of the component, including the blur radius, brightness, saturation, and color.
   *
   * @param { BackgroundEffectOptions } options - Background effect, including saturation, brightness, and color.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  backgroundEffect(options: BackgroundEffectOptions): SymbolSpanAttribute;

  /**
   * Sets the background effect of the component, including the blur radius, brightness,
   * saturation, and color. Compared to backgroundEffect<sup>11+</sup>,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<BackgroundEffectOptions> } options - Background effect, including saturation,
   * brightness, and color.
   * <br>If **options** is **undefined**, the background reverts to its default state with no effect.
   * @param { SystemAdaptiveOptions } [ sysOptions ] - System adaptive adjustment options.
   * <br>Default value: **{ disableSystemAdaptation: false }**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>): SymbolSpanAttribute;

  /**
   * options:background effect options.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BackgroundEffectOptions> } options - options indicates the effect options.
   * @param { SystemAdaptiveOptions } [ sysOptions ] - system adaptive options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   * @deprecated since 20
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): SymbolSpanAttribute;

  /**
   * Background image resizable.
   * value:resizable options
   *
   * @param { ResizableOptions } value - Indicates the resizable options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  backgroundImageResizable(value: ResizableOptions): SymbolSpanAttribute;

  /**
   * Defines the blur style to apply between the background and content of a component.
   * It encapsulates various blur radius, mask color, mask opacity, saturation.
   * And brightness values through enum values.
   *
   * @param { BlurStyle } value - Settings of the background blur style
   * <br>including the blur radius, mask color, mask opacity, saturation, and brightness.
   * @param { BackgroundBlurStyleOptions } options - Background blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): SymbolSpanAttribute;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { Optional<BlurStyle> } style
   * @param { BackgroundBlurStyleOptions } [options]
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): SymbolSpanAttribute;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BlurStyle> } style
   * @param { BackgroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19
   * @deprecated since 20
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): SymbolSpanAttribute;

  /**
   * Sets the visual effect of the background filter.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  backgroundFilter(filter: Filter): SymbolSpanAttribute;

  /**
   * Sets the border.
   *
   * @param { BorderOptions } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  border(value: BorderOptions): SymbolSpanAttribute;

  /**
   * Sets the border style.
   * Default value: **BorderStyle.Solid**.
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  borderStyle(value: BorderStyle | EdgeStyles): SymbolSpanAttribute;

  /**
   * Sets the border width.
   * Percentage values are not supported.
   *
   * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): SymbolSpanAttribute;

  /**
   * Sets the border color.
   * Default value: **Color.Black**.
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): SymbolSpanAttribute;

  /**
   * Sets the radius of the border rounded corners.
   * <br>The radius is restricted by the component size. The maximum value is half of the component width or height.
   *
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): SymbolSpanAttribute;

  /**
   * Sets the border image of the component.
   *
   * @param { BorderImageOption } value - Border image or border gradient.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  borderImage(value: BorderImageOption): SymbolSpanAttribute;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  blur(value: number, options?: BlurOptions): SymbolSpanAttribute;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions): SymbolSpanAttribute;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19
   * @deprecated since 20
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): SymbolSpanAttribute;

  /**
   * Applies a brightness effect to the component.
   *
   * @param { number } value - Brightness of the component. The value **1** indicates no effects.
   * The value **0** indicates the complete darkness. If the value is less than **1**, the brightness
   * decreases. If the value is greater than **1**, the brightness increases. A larger value indicates
   * a higher brightness. A brightness of 2 turns the component completely white.
   * <br>Default value: **1.0**<br>Recommended value range: [0, 2].
   * <br>**NOTE**
   * <br>A value less than 0 evaluates to the value **0**.
   * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 9.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  brightness(value: number): SymbolSpanAttribute;

  /**
   * Applies a brightness effect to the component. Compared to brightness, this
   * API supports the **undefined** type for the **brightness** parameter.
   *
   * @param { Optional<number> } brightness - Brightness of the component. The value **1** indicates
   * no effects. The value **0** indicates the complete darkness. If the value is less than **1**,
   * the brightness decreases. If the value is greater than **1**, the brightness increases. A larger
   * value indicates a higher brightness. A brightness of 2 turns the component completely white.
   * <br>Default value: **1.0**.
   * <br>Recommended value range: [0, 2].
   * <br>**NOTE**
   * <br>A value less than 0 evaluates to the value **0**.
   * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 16.
   * <br>If **brightness** is **undefined**, the brightness level is reset to **0**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  brightness(brightness: Optional<number>): SymbolSpanAttribute;

  /**
   * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.
   *
   * @param { number } value - Background blur effect to apply to the component.
   * <br>The input parameter is the blur radius. The larger the radius is, the more blurred the background is.
   * <br>If the value is **0**, the background is not blurred.
   * @param { BlurOptions } [options] - Grayscale parameters.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  backdropBlur(value: number, options?: BlurOptions): SymbolSpanAttribute;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions): SymbolSpanAttribute;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19
   * @deprecated since 20
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): SymbolSpanAttribute;

  /**
   * Defines how the component's content (including the content of it child components)
   * is blended with the existing content on the canvas (possibly offscreen canvas) below.
   *
   * @param { BlendMode } value - Blend mode.
   * <br>Default value: **BlendMode.NONE**.
   * <br>**NOTE**
   * <br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER**
   * by default, and **BlendApplyType** does not take effect.
   * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.
   * <br>Default value: **BlendApplyType.FAST**.
   * <br>**NOTE**
   * <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
   * <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
   * is created. The content of the current component (including child components) is then drawn
   * onto the offscreen canvas, and blended with the existing content on the canvas below using
   * the specified blend mode. This approach may cause issues with screen capture for APIs such
   * as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  blendMode(value: BlendMode, type?: BlendApplyType): SymbolSpanAttribute;

  /**
   * Defines how the component's content (including the content of it child components) is
   * blended with the existing content on the canvas (possibly offscreen canvas) below.
   * Compared to blendMode<sup>11+</sup>, this API supports the **undefined**
   * type for the **mode** parameter.
   *
   * @param { Optional<BlendMode> } mode - Blend mode.
   * <br>Default value: **BlendMode.NONE**.
   * <br>If **mode** is **undefined**, the component reverts to its original effect of not
   * enabling offscreen rendering as a whole before blending with the parent component.
   * <br>**NOTE**
   * <br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER**
   * by default, and **BlendApplyType** does not take effect.
   * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.
   * <br>Default value: **BlendApplyType.FAST**.
   * <br>**NOTE**
   * <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
   * <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
   * is created. The content of the current component (including child components) is then drawn
   * onto the offscreen canvas, and blended with the existing content on the canvas below using
   * the specified blend mode. This approach may cause issues with screen capture for APIs such
   * as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): SymbolSpanAttribute;

  /**
  * Tips control
  *
  * @param { TipsMessageType } message
  * @param { TipsOptions } [options]
  * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 19
  * @deprecated since 20
  */
  bindTips(message: TipsMessageType, options?: TipsOptions): SymbolSpanAttribute;

  /**
   * Popup control
   * <p><strong>NOTE</strong>:
   * <br>The popup can be displayed only after the entire page is fully constructed. Therefore, to avoid incorrect
   * display positions and shapes, do not set this parameter to true while the page is still being constructed.
   * </p>
   *
   * @param { boolean } show - Whether to show the popup, default is false.
   * @param { PopupOptions | CustomPopupOptions } popup
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): SymbolSpanAttribute;

  /**
   * Menu control
   *
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): SymbolSpanAttribute;

  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu, default is false.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): SymbolSpanAttribute;

  /**
   * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
   * component. Only custom menu items are supported.
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu, Long pressing with a mouse device
   * is not supported.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): SymbolSpanAttribute;

  /**
   * Binds a context menu to the component, whose visibility is subject to the isShown settings.
   *
   * @param { boolean } isShown - true means display content, false means hide content, default is false.
   * <p><strong>NOTE</strong>:
   * <br>The menu can be displayed properly only when the related page has been constructed. If this parameter is set
   * to true before the construction is complete, display issues, such as misplacement, distortion, or failure to pop
   * up, may occur. To trigger dragging by long presses is not supported.
   * </p>
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): SymbolSpanAttribute;

  /**
   * Binds a modal page to the component, whose visibility is subject to the isShow settings.
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } type - transition type.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): SymbolSpanAttribute;

  /**
   * Binds a modal page to the component, whose visibility is subject to the isShow settings.
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } options - options of content cover.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): SymbolSpanAttribute;

  /**
   * Binds a sheet page to the component, whose visibility is subject to the isShow settings.
   *
   * @param { boolean } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } options - options of sheet.
   * @returns { SymbolSpanAttribute } - template type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): SymbolSpanAttribute;

  /**
   * Sets the background brightness of the component.
   *
   * @param { BackgroundBrightnessOptions } params - Parameters for setting the background brightness.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  backgroundBrightness(params: BackgroundBrightnessOptions): SymbolSpanAttribute;

  /**
   * Sets the background brightness of the component. Compared to backgroundBrightness<sup>12+</sup>,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<BackgroundBrightnessOptions> } options - Parameters for setting the background brightness.
   * <br>If **options** is **undefined**, the background reverts to its default state with no brightness effect.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): SymbolSpanAttribute;

  /**
   * Sets the custom property of the current component.
   * This API does not work for custom components.
   *
   * @param { string } name - the name of the custom property.
   * @param { Optional<Object> } value - the value of the custom property.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  customProperty(name: string, value: Optional<Object>): SymbolSpanAttribute;

  /**
   * Sets the constraint size of the component, which is used to limit the size range during component layout.
   * Default value: **{minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity}**.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  constraintSize(value: ConstraintSizeOptions): SymbolSpanAttribute;

  /**
   * Sets the weight of the component in a chain, which is used to re-lay out components that form the chain.
   * <br>This API has effect only when the parent container is RelativeContainer.
   *
   * @param { ChainWeightOptions } chainWeight
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  chainWeight(chainWeight: ChainWeightOptions): SymbolSpanAttribute;

  /**
   * Sets the visual effect of the compositing filter.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  compositingFilter(filter: Filter): SymbolSpanAttribute;

  /**
   * Applies a contrast effect to the component.
   *
   * @param { number } value - Contrast of the component. The input parameter is a
   * contrast value. If the value is **1**, the source image is displayed. If the
   * value is greater than 1, a larger value indicates a higher contrast and a clearer
   * image. If the value is less than 1, a smaller value indicates a lower contrast is.
   * If the value is **0**, the image becomes all gray. The unit is percentage.
   * <br>Default value: **1.0**.
   * <br>Recommended value range: [0, 10).
   * <br>**NOTE**
   * <br>A value less than 0 evaluates to the value **0**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  contrast(value: number): SymbolSpanAttribute;

  /**
   * Applies a contrast effect to the component. Compared to contrast,
   * this API supports the **undefined** type for the **contrast** parameter.
   *
   * @param { Optional<number> } contrast - Contrast of the component. The input parameter
   * is a contrast value. If the value is **1**, the source image is displayed. If the value
   * is greater than 1, a larger value indicates a higher contrast and a clearer image. If the
   * value is less than 1, a smaller value indicates a lower contrast is. If the value is **0**,
   * the image becomes all gray. The unit is percentage.
   * <br>Default value: **1.0**.
   * <br>Recommended value range: [0, 10).
   * <br>**NOTE**
   * <br>A value less than 0 evaluates to the value **0**.
   * <br>If **contrast** is **undefined**, the contrast effect is reset to **1.0**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  contrast(contrast: Optional<number>): SymbolSpanAttribute;

  /**
   * Applies a color blend effect to the component.
   *
   * @param { Color | string | Resource } value - Color to blend with the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  colorBlend(value: Color | string | Resource): SymbolSpanAttribute;

  /**
   * Applies a color blend effect to the component.
   * Compared to {@link colorBlend}, this API supports the **undefined** type for the **color** parameter.
   *
   * @param { Optional<Color | string | Resource> } color - Color to blend with the component.
   * <br>If **color** is **undefined**, the component reverts to its original effect with no color blending.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  colorBlend(color: Optional<Color | string | Resource>): SymbolSpanAttribute;

  /**
   * Sets the parameters of the chain in which the component is the head.
   * <br>This parameter has effect only when the parent container is RelativeContainer.
   * <br>The chain head is the first component in the chain that satisfies the chain formation rules.
   * In a horizontal layout, it starts from the left (or from the right in a mirrored language
   * layout). In a vertical layout, it starts from the top.
   *
   * @param { Axis } direction - indicates direction of the chain
   * @param { ChainStyle } style - indicates style of the chain
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  chainMode(direction: Axis, style: ChainStyle): SymbolSpanAttribute;

  /**
   * The click effect level and scale number.
   *
   * @param { ClickEffect | null } value
   * @returns { SymbolSpanAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  clickEffect(value: ClickEffect | null): SymbolSpanAttribute;

  /**
   * The click effect level and scale number.
   *
   * @param { Optional<ClickEffect | null> } effect
   * @returns { SymbolSpanAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  clickEffect(effect: Optional<ClickEffect | null>): SymbolSpanAttribute;

  /**
   * Sets whether to clip the areas of child components that extend beyond this component's boundaries,
   * That is, whether to perform clipping based on the edge contour of the parent container.
   *
   * @param { boolean } value - Whether to perform clipping based on the edge contour of the parent container.
   * <br>Default value: **false**.
   * <br>**true**: Perform clipping. **false**: Do not perform clipping.
   * <br>If this parameter is set to **true**.
   * <br>child components exceeding the current component's bounds will not respond to bound gesture events.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  clip(value: boolean): SymbolSpanAttribute;

  /**
   * Sets whether to clip the areas of child components that extend beyond this component's boundaries,
   * That is, whether to perform clipping based on the edge contour of the parent container.
   * This API supports the **undefined** type for the **clip** parameter.
   *
   * @param { Optional<boolean> } clip - Whether to perform clipping based on the edge contour of the parent container.
   * <br>Default value: **false**.
   * <br>If this parameter is set to **true**,
   * child components exceeding the current component's bounds will not respond to bound gesture events.
   * <br>If **clip** is set to **undefined**, clipping is disabled, and child components are not clipped.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  clip(clip: Optional<boolean>): SymbolSpanAttribute;

  /**
  * Clips this component based on the given shape.
  *
  * @param { CircleShape | EllipseShape | PathShape | RectShape } value - Shape that the component to be clipped into.
  * <br>The clipped area remains responsive to bound gesture events.
  * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  * @deprecated since 20
  */
  clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): SymbolSpanAttribute;

  /**
  * Sets whether to clip this component based on the given shape.
  * Compared to {@link clipShape}, this API supports the **undefined** type for the **shape** parameter.
  *
  * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - Shape that the component to
  * <br>be clipped into.
  * <br>The clipped area remains responsive to bound gesture events.
  * <br>If **shape** is set to **undefined**, the previous value is retained.
  * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  * @deprecated since 20
  */
  clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): SymbolSpanAttribute;

  /**
   * Sets the drawModifier of the current component.
   *
   * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
   * Default value: undefined
   * A custom modifier applies only to the FrameNode of the currently bound component, not to its subnodes.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  drawModifier(modifier: DrawModifier | undefined): SymbolSpanAttribute;

  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value - True means to set the component as the default focus, and the value false has no effect.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  defaultFocus(value: boolean): SymbolSpanAttribute;

  /**
   * Sets the display priority for the component in the layout container.
   * <br>This parameter is only effective in Row, Column, and Flex (single-line) container components.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  displayPriority(value: number): SymbolSpanAttribute;

  /**
   * Sets how elements are laid out along the main axis of the container.
   * Default value: **Direction.Auto**.
   *
   * @param { Direction } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  direction(value: Direction): SymbolSpanAttribute;

  /**
   * Enable the selectable area can be dragged.
   *
   * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
   * The default value is false.
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  draggable(value: boolean): SymbolSpanAttribute;

  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo | string } value - preview of the component for dragging process
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  dragPreview(value: CustomBuilder | DragItemInfo | string): SymbolSpanAttribute;

  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo | string } preview - preview of the component for dragging process
   * @param { PreviewConfiguration } config - drag preview configuration.
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): SymbolSpanAttribute;

  /**
   * Set the selectable area drag preview options.
   *
   * @param { DragPreviewOptions } value - preview options value.
   * @param { DragInteractionOptions } options - drag interaction options value.
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): SymbolSpanAttribute;

  /**
   * Sets the safe area to be expanded to.
   * <br>default:{types: [SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD],
   * edges: [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END]}
   *
   * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
   * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
   * @returns { SymbolSpanAttribute } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): SymbolSpanAttribute;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   * If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  enabled(value: boolean): SymbolSpanAttribute;

  /**
   * Foreground effect.
   *
   * @param { ForegroundEffectOptions } options - options indicates the effect options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  foregroundEffect(options: ForegroundEffectOptions): SymbolSpanAttribute;

  /**
   * Sets the visual effect of the foreground (content) filter.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  foregroundFilter(filter: Filter): SymbolSpanAttribute;

  /**
   * Applies a foreground blur style to the component.
   *
   * @param { BlurStyle } value - Settings of the foreground blur style.
   * @param { ForegroundBlurStyleOptions } options - Foreground blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): SymbolSpanAttribute;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): SymbolSpanAttribute;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   * @deprecated since 20
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): SymbolSpanAttribute;

  /**
   * Sets the foreground color of the component.
   * If the component does not have a foreground color set, it inherits the color from its parent component by default.
   *
   * @param { ResourceColor | ColoringStrategy } value - Foreground color.
   * <br>The value can be a specific color or a coloring strategy. Property animations are supported.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  foregroundColor(value: ResourceColor | ColoringStrategy): SymbolSpanAttribute;

  /**
   * Sets the foreground color of the component.
   * If the component does not have a foreground color set, it inherits the color from its parent component by default.
   * Compared to {@link foregroundColor}, this API supports the **undefined** type for the **color** parameter.
   *
   * @param { Optional<ResourceColor | ColoringStrategy> } color -Foreground color.
   * <br>The value can be a specific color or a coloring strategy. Property animations are supported.
   * <br>If **color** is set to **undefined**, the previous value is retained.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): SymbolSpanAttribute;

  /**
   * Set focusable.
   * Components that have default interaction logic, such as Button and TextInput, are focusable by default. Other 
   * components, such as Text and Image, are not focusable by default. Only focusable components can trigger a focus 
   * event.
   * 
   * @param { boolean } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  focusable(value: boolean): SymbolSpanAttribute;

  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value - True means the component is focusable on touch, false means the component is not focusable on touch.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  focusOnTouch(value: boolean): SymbolSpanAttribute;

  /**
   * Set the component's focusBox style.
   *
   * @param { FocusBoxStyle } style - Component's focusBox style.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  focusBox(style: FocusBoxStyle): SymbolSpanAttribute;

  /**
  * Set container as a focus group with a specific identifier.
  *
  * @param { string } id - focus scope identifier.
  * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false
  * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  * @deprecated since 20
  */
 focusScopeId(id: string, isGroup?: boolean): SymbolSpanAttribute;
  /**
  * Set container as a focus group with a specific identifier.
  *
  * @param { string } id - focus scope identifier.
  * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
  * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
  * only effective when isGroup is true, the default value is true.
  * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 14
  * @deprecated since 20
  */
 focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): SymbolSpanAttribute;

  /**
  * Set the focus priority of component in a specific focus scope.
  *
  * @param { string } scopeId
  * @param { FocusPriority } [priority] - the default value is AUTO
  * @returns { SymbolSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  * @deprecated since 20
  */
 focusScopePriority(scopeId: string, priority?: FocusPriority): SymbolSpanAttribute;

  /**
   * Sets whether to freeze the component. When frozen, the component and its children are cached for
   * repeated drawing after offscreen rendering, without updating internal attributes.
   *
   * @param { boolean } value - Whether to freeze the component. When frozen, the component and its children
   * are cached for repeated drawing after offscreen rendering, without updating internal attributes. If the
   * opacity of the component is not 1, the drawing effect may vary depending on the value.
   * <br>Default value: **false**.
   * <br> **true**: Freeze the component.
   * <br>**false**: Do not freeze the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  freeze(value: boolean): SymbolSpanAttribute;

  /**
   * Sets whether to freeze the component. When frozen, the component and its children are cached for repeated
   * drawing after offscreen rendering, without updating internal attributes. Compared to freeze,
   * this API supports the **undefined** type for the **freeze** parameter.
   *
   * @param { Optional<boolean> } freeze - Whether to freeze the component. When frozen, the component and its
   * children are cached for repeated drawing after offscreen rendering, without updating internal attributes.
   * If the opacity of the component is not 1, the drawing effect may vary depending on the value.
   * <br>Default value: **false**.
   * <br> **true**: Freeze the component.
   * <br>**false**: Do not freeze the component.
   * <br>If **freeze** is set to **undefined**, the previous value is retained.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  freeze(freeze: Optional<boolean>): SymbolSpanAttribute;

  /**
   * Sets the percentage of the parent container's remaining space that is allocated to the component.
   * Default value: **0**.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  flexGrow(value: number): SymbolSpanAttribute;

  /**
   * Sets the percentage of the parent container's shrink size that is allocated to the component.
   * Default value: 0 when the parent container is Column or Row, 1 when the parent container is Flex..
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  flexShrink(value: number): SymbolSpanAttribute;

  /**
   * Sets the base size of the component in the main axis of the parent container.
   * Default value: **'auto'**.
   *
   * @param { number | string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  flexBasis(value: number | string): SymbolSpanAttribute;

  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value - True means the component is the default focus of the parent container, and
   * false means the component is not the default focus of the parent container.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  groupDefaultFocus(value: boolean): SymbolSpanAttribute;

  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  gesture(gesture: GestureType, mask?: GestureMask): SymbolSpanAttribute;

  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 14
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  gridSpan(value: number): SymbolSpanAttribute;

  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 14
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  gridOffset(value: number): SymbolSpanAttribute;

  /**
   * Applies a grayscale effect to the component.
   * 
   * @param { number } value - Grayscale conversion ratio of the component.
   * <br>If the value is **1.0**, the component is completely converted to grayscale.
   * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
   * <br>the value applies a linear multiplier on the grayscale effect. The unit is percentage.
   * <br>Default value: **0.0**.
   * <br>Value range: [0.0, 1.0].
   * <p>**NOTE**:
   * <br>A value less than **0.0** evaluates to the value **0.0**.
   * <br>A value greater than **1.0** evaluates to the value **1.0**.
   * </p>
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  grayscale(value: number): SymbolSpanAttribute;

  /**
   * Applies a grayscale effect to the component.
   * Compared to grayscale, this API supports the **undefined** type for the **grayscale** parameter.
   *
   * @param { Optional<number> } grayscale - Grayscale conversion ratio of the component.
   * <br>If the value is **1.0**, the component is completely converted to grayscale.
   * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
   * <br>the value applies a linear multiplier on the grayscale effect. The unit is percentage.
   * <br>Default value: **0.0**.
   * <br>Value range: [0.0, 1.0].
   * <p>**NOTE**
   * <br>A value less than **0.0** evaluates to the value **0.0**. 
   * <br>A value greater than **1.0** evaluates to the value **1.0**.
   * </p>
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  grayscale(grayscale: Optional<number>): SymbolSpanAttribute;

  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  geometryTransition(id: string): SymbolSpanAttribute;
  /**
   * Shared geometry transition
   *
   * @param { string } id - geometry transition id
   * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Shared geometry transition
   *
   * @param { string } id - geometry transition id
   * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  geometryTransition(id: string, options?: GeometryTransitionOptions): SymbolSpanAttribute;

  /**
   * Sets the gesture modifier.
   *
   * @param { GestureModifier } modifier
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  gestureModifier(modifier: GestureModifier): SymbolSpanAttribute;

  /**
   * Sets the height of the component. By default, the height required to fully hold the
   * component content is used. If the height of the component is greater than that of
   * the parent container, the component will be drawn beyond the parent container scope.
   *
   * @param { Length } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  height(value: Length): SymbolSpanAttribute;
  /**
   * Sets the height of the component or its vertical layout policy. By default, the
   * component uses the height required for its content. If the height of the component
   * is greater than that of the parent container, the component will be drawn beyond
   * the parent container scope.
   *
   * @param { Length | LayoutPolicy } heightValue
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  height(heightValue: Length | LayoutPolicy): SymbolSpanAttribute;

  /**
   * Sets how the component behaves during hit testing.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @default HitTestMode.default - Both the node and its child nodes respond to the hit test of a touch event,
   * but its sibling nodes are blocked from the hit test. The hit test for ancestor nodes is not affected.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  hitTestBehavior(value: HitTestMode): SymbolSpanAttribute;

  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value - Hover effect of the component in hover state.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  hoverEffect(value: HoverEffect): SymbolSpanAttribute;

  /**
   * Rotates the hue of the component.
   *
   * @param { number | string } value - Hue rotation angle of the component.
   * <br>A rotation of 360 degrees leaves the color unchanged.
   * <br>A rotation of 180 degrees and then -180 degrees also leaves the color unchanged.
   * <br>When the data type is number, the value **90** is equivalent to **'90deg'**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  hueRotate(value: number | string): SymbolSpanAttribute;

  /**
   * Rotates the hue of the component. Compared to hueRotate,
   * this API supports the **undefined** type for the **rotation** parameter.
   *
   * @param { Optional<number | string> } rotation
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  hueRotate(rotation: Optional<number | string>): SymbolSpanAttribute;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  invert(value: number | InvertOptions): SymbolSpanAttribute;

  /**
   * Inverts the image. Compared to invert,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<number | InvertOptions> } options - How the image is inverted.
   * <br>If the value is of the number type,
   * <br>it indicates the inversion ratio. If the value is **1**,
   * <br>the image is completely inverted. If the value is **0**, the image remains unchanged.
   * <br>The unit is percentage.<br>Value range: [0, 1]<br>A value less than 0 evaluates to the value **0**.
   * <br>If the value is of the InvertOptions type, the grayscale value of the background color is compared
   * <br>with the threshold range. If the grayscale value is greater than the upper bound of the threshold range,
   * <br>the **high** value is used. If the grayscale value is less than the lower bound of the threshold range,
   * <br>the **low** value is used. If the grayscale value is within the threshold range,
   * <br>the background color changes linearly from high to low.<br>If **options** is **undefined**,
   * <br>the component reverts to its original effect.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  invert(options: Optional<number | InvertOptions>): SymbolSpanAttribute;

  /**
   * Sets hot keys
   *
   * @param { string | FunctionKey } value - Character of the combination key.
   * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
   * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): SymbolSpanAttribute;

  /**
   * Sets the weight of the component during layout. A component with this attribute is allocated space
   * along the main axis of its parent container (Row, Column, or Flex) based on its specified weight.
   * Default value: **0**.
   *
   * @param { number | string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  layoutWeight(value: number | string): SymbolSpanAttribute;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value - Linear gradient.
   * <br>If **options** is **undefined**, the linear gradient is disabled.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  linearGradient(value: LinearGradientOptions): SymbolSpanAttribute;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { Optional<LinearGradientOptions> } options - Linear gradient.
   * <br>If **options** is **undefined**, the linear gradient is disabled.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  linearGradient(options: Optional<LinearGradientOptions>): SymbolSpanAttribute;

  /**
   * Applies a linear gradient foreground blur effect to the component.
   *
   * @param { number } value - the blurring radius.
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  linearGradientBlur(value: number, options: LinearGradientBlurOptions): SymbolSpanAttribute;

  /**
   * Applies a linear gradient foreground blur effect to the component.
   *
   * @param { Optional<number> } blurRadius - the blurring radius.
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { Optional<LinearGradientBlurOptions> } options - the linear gradient blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): SymbolSpanAttribute;

    /**
   * Applies a light up effect to the component.
   *
   * @param { number } value - Light up degree of the component.
   * <br>The value ranges from 0 to 1.
   * <br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated.
   * <br>Between **0** and **1**, a larger value indicates higher luminance.
   * <br>A value less than 0 is handled as the value **0**.
   * <br>A value greater than 1 is handled as the value **1**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  lightUpEffect(value: number): SymbolSpanAttribute;

  /**
   * Applies a light up effect to the component. Compared to lightUpEffect,
   * this API supports the **undefined** type for the **degree** parameter.
   *
   * @param { Optional<number> } degree - Light up degree of the component.
   * <br>The value ranges from 0 to 1.
   * <br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated.
   * <br>Between **0** and **1**, a larger value indicates higher luminance.
   * <br>A value less than 0 is handled as the value **0**.
   * <br>A value greater than 1 is handled as the value **1**.
   * <br>If **degree** is **undefined**, the light up degree reverts to **1**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  lightUpEffect(degree: Optional<number>): SymbolSpanAttribute;

  /**
   * Sets the mouse response region of current component
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { SymbolSpanAttribute } return the component attribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  mouseResponseRegion(value: Array<Rectangle> | Rectangle): SymbolSpanAttribute;

  /**
   * Sets the margin of the component.
   * Default value: **0**.
   *
   * @param { Margin | Length | LocalizedMargin } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  margin(value: Margin | Length | LocalizedMargin): SymbolSpanAttribute;

  /**
   * Adds a mask to the component to indicate the progress.
   *
   * @param { ProgressMask } value - Mask to add to the component, which allows for dynamic
   * adjustment of progress, maximum value, and color settings.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  mask(value: ProgressMask): SymbolSpanAttribute;

  /**
   * Adds a mask to the component to indicate the progress. Compared to mask<sup>12+</sup>,
   * this API supports the **undefined** type for the **mask** parameter.
   *
   * @param { Optional<ProgressMask> } mask - Mask to add to the component, which allows for dynamic
   * adjustment of progress, maximum value, and color settings.<br>If **mask** is set to **undefined**,
   * the component to revert to its original effect without the mask to indicate the progress.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  mask(mask: Optional<ProgressMask>): SymbolSpanAttribute;

  /**
   * Adds a mask of the specified shape to the component.
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - Mask of the specified
   * shape to add to the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): SymbolSpanAttribute;

  /**
   * Adds a mask of the specified shape to the component. Compared to maskShape<sup>12+</sup>,
   * this API supports the **undefined** type for the **shape** parameter.
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - Mask of the specified shape to
   * add to the component.<br>If **shape** is set to **undefined**, the previous value is retained.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): SymbolSpanAttribute;

  /**
   * Sets the anchor for locating the component, which is used to move the component
   * further away from the position specified by position or offset.
   *
   * @param { Position | LocalizedPosition} value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  markAnchor(value: Position | LocalizedPosition): SymbolSpanAttribute;

  /**
   * Apply a motion blur effect to the component being scaled or moved.
   * 1.Do not use this API in intra-component transitions, shared element transitions,
   * implicit element transitions, or particle animations. Doing so may cause unexpected results.
   * 2.The **radius** parameter of **motionBlur** must be set to **0** for the initial state.
   * Otherwise, there may be unexpected results during a cold start.
   * 3.This API must be used together with the **onFinish** parameter of **AnimateParam**.
   * Its **radius** parameter must be set to **0** when the animation ends; otherwise, there may be unexpected results.
   * 4.When using this API, do not frequently change the blur radius of the same component;
   * otherwise, there may be unexpected results.
   * For example, if you frequently click the image in the example, the blur effect may not work sometimes.
   * 5.To avoid unexpected results, make sure the coordinates of
   * the motion blur anchor point are the same as those of the animation scaling anchor point.
   * 6.To avoid unexpected results, set the blur radius to a value less than 1.
   * 
   * @param { MotionBlurOptions } value - Motion blur options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  motionBlur(value: MotionBlurOptions):SymbolSpanAttribute;

  /**
   * Component motion blur interface.
   *
   * @param { Optional<MotionBlurOptions> } motionBlur - the attributes of motion blur.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  motionBlur(motionBlur: Optional<MotionBlurOptions>):SymbolSpanAttribute;

  /**
   * Set the motion path of the component.
   *
   * @param { MotionPathOptions } value - Motion path of the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  motionPath(value: MotionPathOptions): SymbolSpanAttribute;

  /**
   * Sets whether the component exclusively handles events.
   * true: The component exclusively handles events. false: The component does not exclusively handle events.
   *
   * @param { boolean } monopolize - indicate the monopoly of events
   * @default false
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  monopolizeEvents(monopolize: boolean): SymbolSpanAttribute;

  /**
   * Set nextFocus.
   *
   * @param { FocusMovement } nextStep
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  nextFocus(nextStep: Optional<FocusMovement>): SymbolSpanAttribute;

  /**
   * Called to specify how to perform the touch test on the children of this component.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): SymbolSpanAttribute;

  /**
   * Sets the opacity of the component.
   *
   * @param { number | Resource } value - Opacity of the component. The value ranges from 0 to 1.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  opacity(value: number | Resource): SymbolSpanAttribute;

  /**
   * Sets the opacity of the component.
   *
   * @param { Optional<number | Resource> } opacity - Opacity of the component. The value ranges from 0 to 1.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  opacity(opacity: Optional<number | Resource>): SymbolSpanAttribute;

  /**
   * Sets the outline attributes in one declaration.
   *
   * @param { OutlineOptions } value - Outline attributes.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  outline(value: OutlineOptions): SymbolSpanAttribute;

  /**
   * Sets the outline attributes in one declaration. Compared to outline,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<OutlineOptions> } options - Outline attributes.<br>If **options** is **undefined**,
   * the component reverts to its original style with no outline.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  outline(options: Optional<OutlineOptions>): SymbolSpanAttribute;

  /**
   * Sets the style of the outline.
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value - Outline style.
   * <br>Default value: **OutlineStyle.SOLID**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  outlineStyle(value: OutlineStyle | EdgeOutlineStyles): SymbolSpanAttribute;

  /**
   * Sets the style of the outline. Compared to outlineStyle,
   * this API supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<OutlineStyle | EdgeOutlineStyles> } style - Outline style.
   * <br>Default value: **OutlineStyle.SOLID**.
   * <br>If **style** is **undefined**, the component reverts to its original
   * style with no outline.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): SymbolSpanAttribute;

  /**
   * Sets the thickness of the outline.
   *
   * @param { Dimension | EdgeOutlineWidths } value - Outline thickness. Percentage values are not supported.
   * <br>Default value: **0**Outline thickness. Percentage values are not supported.
   * <br>Default value: **0**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  outlineWidth(value: Dimension | EdgeOutlineWidths): SymbolSpanAttribute;

  /**
   * Sets the thickness of the outline. Compared to outlineWidth,
   * this API supports the **undefined** type for the **width** parameter.
   *
   * @param { Optional<Dimension | EdgeOutlineWidths> } width - Outline thickness. Percentage values are not supported.
   * <br>Default value: **0**.
   * <br>If **width** is **undefined**, the component reverts to its original style with no outline width.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): SymbolSpanAttribute;

  /**
   * Sets the color of the outline.
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value - Outline color.
   * <br>Default value: **Color.Black**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): SymbolSpanAttribute;

  /**
   * Sets the color of the outline. Compared to outlineColor,
   * this API supports the **undefined** type for the **color** parameter.
   *
   * @param { Optional<ResourceColor | EdgeColors | LocalizedEdgeColors> } color - Outline color.
   * <br>Default value: **Color.Black**.
   * <br>If **color** is **undefined**, the component reverts to its original style with the
   * outline color of **Color.Black**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): SymbolSpanAttribute;

  /**
   * Sets the radius of the outline corners.
   *
   * @param { Dimension | OutlineRadiuses } value - adius of the outline corners. Percentage
   * values are not supported.
   * <br>Default value: **0**.
   * <br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  outlineRadius(value: Dimension | OutlineRadiuses): SymbolSpanAttribute;

  /**
   * Sets the radius of the outline corners. Compared to outlineRadius, this API
   * supports the **undefined** type for the **radius** parameter.
   *
   * @param { Optional<Dimension | OutlineRadiuses> } radius - Radius of the outline corners. Percentage
   * values are not supported.
   * <br>Default value: **0**.
   * <br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth.
   * <br>If **radius** is **undefined**, the component reverts to its original style with the
   * outline corner radius of 0.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): SymbolSpanAttribute;

  /**
   * Trigger a hover move event.
   *
   * @param { Callback<HoverEvent> } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  onHoverMove(event: Callback<HoverEvent>): SymbolSpanAttribute;

  /**
   * Trigger a accessibility hover event.
   *
   * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onAccessibilityHover(callback: AccessibilityCallback): SymbolSpanAttribute;

  /**
   * prompt for current component and descendants unable to handle accessibility hover event
   *
   * @param { AccessibilityTransparentCallback } callback - A callback instance used when current component and 
   * descendants not handled accessibility hover event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @deprecated since 20
   */
  onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): SymbolSpanAttribute;

  /**
   * Triggered when the component is clicked by a mouse button or the mouse pointer moves on the component.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onMouse(event: (event: MouseEvent) => void): SymbolSpanAttribute;

  /**
   * Invoked when a touch event is triggered.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onTouch(event: (event: TouchEvent) => void): SymbolSpanAttribute;

  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onKeyEvent(event: (event: KeyEvent) => void): SymbolSpanAttribute;

  /**
   * Keyboard input
   *
   * @param { Callback<KeyEvent, boolean> } event - Callback for handling the key event.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  onKeyEvent(event: Callback<KeyEvent, boolean>): SymbolSpanAttribute;

  /**
   * Digital crown input.
   *
   * @param { Callback<CrownEvent> } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  onDigitalCrown(handler: Optional<Callback<CrownEvent>>): SymbolSpanAttribute;

  /**
   * Handle keyboard events before input method events.
   *
   * @param { Callback<KeyEvent, boolean> } event - Callback for handling the key event.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onKeyPreIme(event: Callback<KeyEvent, boolean>): SymbolSpanAttribute;

  /**
   * Customize the handling and distribution of key events.
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  onKeyEventDispatch(event: Callback<KeyEvent, boolean>): SymbolSpanAttribute;

  /**
   * Trigger a FocusAxisEvent.
   *
   * @param { Callback<FocusAxisEvent> } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  onFocusAxisEvent(event: Callback<FocusAxisEvent>): SymbolSpanAttribute;

  /**
   * Handle axis events.
   *
   * @param { Callback<AxisEvent> } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   * @deprecated since 20
   */
  onAxisEvent(event: Callback<AxisEvent>): SymbolSpanAttribute;

  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onFocus(event: () => void): SymbolSpanAttribute;

  /**
   * Triggered when the current component loses focus.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onBlur(event: () => void): SymbolSpanAttribute;

  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onAppear(event: () => void): SymbolSpanAttribute;

  /**
   * This callback is triggered when a component mounts to view tree.
   *
   * @param { Callback<void> } callback
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onAttach(callback: Callback<void>): SymbolSpanAttribute;

  /**
   * This callback is triggered when a component is detached from view tree.
   *
   * @param { Callback<void> } callback
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onDetach(callback: Callback<void>): SymbolSpanAttribute;

  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): SymbolSpanAttribute;

  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  onDisAppear(event: () => void): SymbolSpanAttribute;

  /**
   * Sets the offset of the component relative to its original position.
   * <br>The offset attribute does not affect the layout of the parent container.
   * It adjusts the component position only during drawing.
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  offset(value: Position | Edges | LocalizedEdges): SymbolSpanAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * 
   * <strong>NOTE</strong>:<br>
   * The global builder is not supported.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): SymbolSpanAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  onDragEnter(event: (event: DragEvent, extraParams?: string) => void): SymbolSpanAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  onDragMove(event: (event: DragEvent, extraParams?: string) => void): SymbolSpanAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  onDragLeave(event: (event: DragEvent, extraParams?: string) => void): SymbolSpanAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  onDrop(event: (event: DragEvent, extraParams?: string) => void): SymbolSpanAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { OnDragEventCallback } eventCallback - event callback.
   * @param { DropOptions } [dropOptions] - the drop handling options.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): SymbolSpanAttribute;

  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  onDragEnd(event: (event: DragEvent, extraParams?: string) => void): SymbolSpanAttribute;

  /**
   * After binding, a callback is triggered when the preDrag status change finished.
   *
   * @param { Callback<PreDragStatus> } callback callback - The callback will be triggered when the preDrag status change.
   * @returns { SymbolSpanAttribute } property value of type SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onPreDrag(callback: Callback<PreDragStatus>): SymbolSpanAttribute;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder | ComponentContent } value
   * @param { OverlayOptions } options
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): SymbolSpanAttribute;

  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios - Threshold array. Each threshold represents a ratio of the component's visible area to the component's total area.
   * The value range of the threshold is [0.0, 1.0].
   * @param { VisibleAreaChangeCallback } event - Callback for visible area changes of the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   * @deprecated since 20
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): SymbolSpanAttribute;


  /**
   * Set or reset the callback which is triggered when the visibleArea of component changed.
   * The interval between two visible area change callbacks will not be less than the expected update interval.
   *
   * @param { VisibleAreaEventOptions } options - The options for the visibility event.
   * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
   * If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 17
   * @deprecated since 20
   */
  onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;

  /**
   * Sets obscured
   *
   * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  obscured(reasons: Array<ObscuredReasons>): SymbolSpanAttribute;

  /**
   * Binds a custom gesture recognizer judgment callback to the component.
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): SymbolSpanAttribute;

  /**
   * Binds a custom gesture recognizer judgment callback to the component.
   * 
   * <p><strong>NOTE</strong>:
   * <br> For a composite component, setting exposeInnerGesture to true exposes the internal gesture recognizer of the
   * <br> composite component in the current parameter callback. Currently, only the Tabs component is supported. 
   * 
   * <br> Do not set exposeInnerGesture for other components. When exposeInnerGesture is set to false, this API provides the same functionality
   * <br> as the onGestureRecognizerJudgeBegin API.
   * </p>
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal gestures.
   * @default false 
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * 
   * @since 13
   * @deprecated since 20
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): SymbolSpanAttribute;

  /**
   * When the component does a touch test, a user-defined callback is triggered.
   *
   * @param { Callback<TouchEvent, HitTestMode> } callback - A callback instance used when the component does a touch test.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): SymbolSpanAttribute;

  /**
   * This callback is triggered when the component size changes due to layout updates.
   * This event is not triggered for render attribute changes caused by re-rendering.
   *
   * @param { SizeChangeCallback } event - event callback.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onSizeChange(event: SizeChangeCallback): SymbolSpanAttribute;

  /**
   * Sets the padding of the component.
   * Default value: **0**.
   *
   * @param { Padding | Length | LocalizedPadding } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  padding(value: Padding | Length | LocalizedPadding): SymbolSpanAttribute;

  /**
   * Sets the pixel rounding policy for the current component in the specified direction.
   * <br>If a direction is not set, the pixels are rounded to the nearest whole number in that direction.
   *
   * @param { PixelRoundPolicy } value - indicates the rounding policy for the bounds of the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  pixelRound(value: PixelRoundPolicy): SymbolSpanAttribute;

  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): SymbolSpanAttribute;

  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): SymbolSpanAttribute;

  /**
   * Sets the absolute position of the component relative to the position of the parent component.
   * <br>The attribute is not available for a layout container whose width and height are zero.
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  position(value: Position | Edges | LocalizedEdges): SymbolSpanAttribute;

  /**
   * Applies a pixel stretch effect to the component.
   *
   * @param { PixelStretchEffectOptions } options - Pixel stretch effect options.
   * <br>The value includes the length by which a pixel is stretched toward the four edges.
   * <p>**NOTE**:
   * <br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge
   * pixels grow by the set length toward the top, bottom, left, and right edges.
   * <br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains 
   * unchanged:
   * <br>Shrinking mode:
   * <br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.
   * <br>(2) The image is stretched back to the original size with edge pixels.
   * <br>3. Constraints on **options**:
   * <br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are
   * stretched or shrink at the same time in the same direction.
   * <br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and
   * specific value is not allowed.
   * <br>(3) If the input value is invalid, the image is displayed as {0, 0, 0, 0}, that is, the image is the same as
   * the original image.
   * </p>
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): SymbolSpanAttribute;

  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  responseRegion(value: Array<Rectangle> | Rectangle): SymbolSpanAttribute;

  /**
   * Sets whether the component and its child components are rendered off
   * the screen as a whole before being blended with its parent.
   *
   * @param { boolean } value - Whether the component and its child components are rendered
   * off the screen as a whole before being blended with its parent. If the opacity of the
   * component is not 1, the drawing effect may vary depending on the value.
   * <br>Default value: **false**.
   * <br> The value **true** means the component and its child components are rendered off
   * the screen as a whole, and **false** means the opposite.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  renderGroup(value: boolean): SymbolSpanAttribute;

  /**
   * Sets whether the component and its child components are rendered off the screen as a whole
   * before being blended with its parent. Compared to renderGroup<sup>10+</sup>,
   * this API supports the **undefined** type for the **isGroup** parameter.
   *
   * @param { Optional<boolean> } isGroup - Whether the component and its child components are rendered
   * off the screen as a whole before being blended with its parent. If the opacity of the component is
   * not 1, the drawing effect may vary depending on the value.
   * <br>Default value: **false**.
   * <br>If **isGroup** is **undefined**, the component reverts to its original effect of not enabling
   * offscreen rendering as a whole before blending with the parent component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  renderGroup(isGroup: Optional<boolean>): SymbolSpanAttribute;

  /**
   * Set component rotation.
   *
   * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  rotate(value: RotateOptions): SymbolSpanAttribute;

  /**
   * Rotates the component. This API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<RotateOptions> } options default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  rotate(options: Optional<RotateOptions>): SymbolSpanAttribute;

  /**
   * Creates a radial gradient.
   *
   * Anonymous Object Rectification.
   * @param { RadialGradientOptions } value - Radial gradient.
   * <br>- **center**: center of the radial gradient, that is, the coordinates relative
   * to the upper left corner of the current component.
   * <br>- **radius**: radius of the radial gradient.
   * <br> Value range: [0, +∞).
   * <br>**NOTE**
   * <br>A value less than 0 is treated as **0**.
   * <br>- colors: array of color stops, each of which consists
   * of a color and its stop position. Invalid colors are automatically skipped.
   * <br>- **repeating**: whether the colors are repeated.
   * <br>  Default value: **false**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  radialGradient(value: RadialGradientOptions): SymbolSpanAttribute;

  /**
   * Creates a radial gradient. Compared to radialGradient,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<RadialGradientOptions> } options - Radial gradient.
   * <br>If **options** is **undefined**, the radial gradient is disabled.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  radialGradient(options: Optional<RadialGradientOptions>): SymbolSpanAttribute;

  /**
   * id for distribute identification.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  restoreId(value: number): SymbolSpanAttribute;

  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  reuseId(id: string): SymbolSpanAttribute;

   /**
   * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
   *
   * @param { ReuseOptions } options - The configuration parameter for reusable custom component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
   reuse(options: ReuseOptions): SymbolSpanAttribute;

  /**
   * How the final state of the component's content is rendered during its width and height animation process.
   *
   * @param { RenderFit } fitMode - How the final state of the component's content is rendered during.
   * <br>its width and height animation process.
   * <br>If **renderFit** is not set, the default value **RenderFit.TOP_LEFT** is used.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  renderFit(fitMode: RenderFit): SymbolSpanAttribute;

  /**
   * How the final state of the component's content is rendered during its width and height animation process.
   * Compared to {@link renderFit}, this API supports the **undefined** type for the **fitMode** parameter.
   *
   * @param { Optional<RenderFit> } fitMode - How the final state of the component's content is rendered during.
   * <br>its width and height animation process.
   * <br>If **fitMode** is set to **undefined**, the default value is used,
   * which is equivalent to **RenderFit.TOP_LEFT**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  renderFit(fitMode: Optional<RenderFit>): SymbolSpanAttribute;

  /**
   * Sets the size of the component.
   *
   * @param { SizeOptions } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  size(value: SizeOptions): SymbolSpanAttribute;

  /**
   * Sets the safe area padding. It enables a container to add a component-level
   * safe area for child components to expand into.
   * Default value: **LengthMetrics.vp(0)**
   *
   * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Indicates safeArea padding values
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): SymbolSpanAttribute;

  /**
   * Applies a saturation effect to the component.
   *
   * @param { number } value - Saturation of the component. The saturation is the ratio of the
   * chromatic component to the achromatic component (gray) in a color. If the value is **1**,
   * the original image is displayed. If the value is greater than **1**, a higher percentage of
   * the chromatic component indicates a higher saturation. If the value is less than **1**, a higher
   * percentage of the achromatic component indicates a lower saturation. The unit is percentage.
   * <br>Default value: **1.0**.
   * <br>Recommended value range: [0, 50).
   * <br>**NOTE**
   * <br>A value less than 0 evaluates to the value **0**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  saturate(value: number): SymbolSpanAttribute;

  /**
   * Applies a saturation effect to the component. Compared to saturate, this API supports
   * the **undefined** type for the **saturate** parameter.
   *
   * @param { Optional<number> } saturate - Saturation of the component. The saturation is the ratio of
   * the chromatic component to the achromatic component (gray) in a color. If the value is **1**, the
   * original image is displayed. If the value is greater than **1**, a higher percentage of the chromatic
   * component indicates a higher saturation. If the value is less than **1**, a higher percentage of the
   * achromatic component indicates a lower saturation. The unit is percentage.
   * <br>Default value: **1.0**.
   * <br>Recommended value range: [0, 50).
   * <br>**NOTE**
   * <br>A value less than 0 evaluates to the value **0**.
   * <br>If **saturate** is **undefined**, the saturation effect is reset to **1.0**.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  saturate(saturate: Optional<number>): SymbolSpanAttribute;

  /**
   * Sepia conversion ratio of the component.
   *
   * @param { number } value - Sepia conversion ratio of the component. If the value is **1**, the image
   * is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
   * <br> Value range: [0, +∞).
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  sepia(value: number): SymbolSpanAttribute;

  /**
   * Sepia conversion ratio of the component. Compared to sepia,
   * this API supports the **undefined** type for the **sepia** parameter.
   *
   * @param { Optional<number> } sepia - Sepia conversion ratio of the component. If the value is **1**, the
   * image is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
   * <br>If **sepia** is **undefined**, the component reverts to its original effect.
   * <br> Value range: [0, +∞).
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  sepia(sepia: Optional<number>): SymbolSpanAttribute;

  /**
   * Applies a system bar effect to the component, which means to invert colors based on the background and add a blur.
   *
   * @returns { SymbolSpanAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  systemBarEffect(): SymbolSpanAttribute;

  /**
   * Scales the component.
   *
   * @param { ScaleOptions } value - Scale ratio along the x-, y-, and z-axis. The default value is **1**.
   * <br>**centerX** and **centerY** are used to set the scale center point.
   * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  scale(value: ScaleOptions): SymbolSpanAttribute;

  /**
   * Scales the component.
   * Compared to {@link scale} , this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<ScaleOptions> } options - Scale ratio along the x-, y-, and z-axis.
   * <br>The default value is **1**. **centerX** and **centerY** are used to set the scale center point.
   * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * <br>If **options** is **undefined**, the component reverts to its original state with no scaling.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  scale(options: Optional<ScaleOptions>): SymbolSpanAttribute;

  /**
   * If the components of the two pages are configured with the same ID.
   * The shared element transition is performed during transition.
   * If the parameter is set to an empty string, the shared element transition does not occur.
   * For details about the options parameter, see the options parameter description.
   *
   * @param { string } id - Transition of the shared element.
   * <br>If the same **id** value is configured for a component on the two pages,
   * <br>this component is considered as a shared element of the pages.
   * <br>If the **id** value is an empty string, no transition will be applied to the component.
   * @param { sharedTransitionOptions } options - Parameters of the shared element transition animation.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): SymbolSpanAttribute;

  /**
   * Creates a sweep gradient.
   *
   * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
   * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
   * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
   * is, the coordinates relative to the upper left corner of the current component.
   * <br>- **start**: start angle of the sweep gradient.
   * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
   * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
   * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
   * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
   * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
   * and turn types are supported.<br>- colors: array of color stops,
   * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
   * <br>- **repeating**: whether the colors are repeated.
   * <br>  Default value: **false**.
   * <br>**NOTE**
   * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
   * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
   * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
   * are "90", "90deg", and "1.57rad".
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  sweepGradient(value: SweepGradientOptions): SymbolSpanAttribute;

  /**
   * Creates a sweep gradient. Compared to sweepGradient,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<SweepGradientOptions> } options - Sweep gradient.
   * <br>If **options** is **undefined**, the sweep gradient is disabled.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  sweepGradient(options: Optional<SweepGradientOptions>): SymbolSpanAttribute;

  /**
   * Applies a shadow effect to the component.
   *
   * @param { ShadowOptions | ShadowStyle } value - Shadow of the component.
   * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
   * and offset along the x-axis and y-axis can be specified.
   * <br>When the value type is **ShadowStyle**, the shadow style can be specified.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  shadow(value: ShadowOptions | ShadowStyle): SymbolSpanAttribute;

  /**
   * Applies a shadow effect to the component.
   * Compared to {@link shadow}, this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<ShadowOptions | ShadowStyle> } options - Shadow of the component.
   * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
   * and offset along the x-axis and y-axis can be specified.
   * <br>When the value type is **ShadowStyle**, the shadow style can be specified.
   * <br>If **options** is **undefined**, the component reverts to its original effect with no shadow.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  shadow(options: Optional<ShadowOptions | ShadowStyle>): SymbolSpanAttribute;

  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  stateStyles(value: StateStyles): SymbolSpanAttribute;

  /**
   * Applies a spherical effect to the component.
   *
   * @param { number } value - Spherical degree of the component.
   * <br>The value ranges from 0 to 1.
   * <p>**NOTE**:
   * <br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely
   * spherical. Between **0** and **1**, a larger value indicates a higher spherical degree. A value less than 0 is
   * handled as the value **0**. A value greater than 1 is handled as the value **1**.
   * <br>2. The component's shadow and outer stroke do not support spherical effects.
   * <br>3. If the value is greater than 0, the component is frozen and not updated, and its content is drawn to the
   * transparent offscreen buffer. To update the component attributes, set the value to **0**.
   * </p>
   * 
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  sphericalEffect(value: number): SymbolSpanAttribute;

  /**
   * Set the spherical effect of the component.
   *
   * @param { Optional<number> } effect - The value ranges from 0 to 1.
   * <p>**NOTE**:
   * <br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely
   * spherical. Between **0** and **1**, a larger value indicates a higher spherical degree.A value less than 0 is
   * handled as the value **0**. A value greater than 1 is handled as the value **1**.
   * <br>2. The component's shadow and outer stroke do not support spherical effects.
   * <br>3. If the value is greater than 0, the component is frozen and not updated, and its content is drawn to the
   * transparent offscreen buffer. To update the component attributes, set the value to **0**. If **effect** is
   * **undefined**, the spherical degree reverts to **0**.
   * </p>
   * 
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  sphericalEffect(effect: Optional<number>): SymbolSpanAttribute;

  /**
   * Provides a callback to set the parallel relationship between built-in gestures and gestures of other components in the response chain.
   *
   * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is doing touch test.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): SymbolSpanAttribute;

  /**
   * Sets the touchable of the current component
   *
   * @param { boolean } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   * @useinstead hitTestBehavior
   */
  touchable(value: boolean): SymbolSpanAttribute;

  /**
   * Set TabStop on component focus
   *
   * @param { boolean } isTabStop
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  tabStop(isTabStop: boolean): SymbolSpanAttribute;

  /**
   * Set focus index by key tab.
   * The tabIndex and focusScopeId cannot be used together.
   * @param { number } index
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  tabIndex(index: number): SymbolSpanAttribute;

  /**
   * Transition effects for when the component is inserted to show and removed to hide
   * as well as the callback for the end of the transition animation.
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  transition(value: TransitionOptions | TransitionEffect): SymbolSpanAttribute;

  /**
   * Set the transition effect of component when it appears and disappears.
   *
   * @param { TransitionEffect } effect - transition effect
   * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): SymbolSpanAttribute;

  /**
   * Sets the translation effect for page transitions.
   *
   * @param { TranslateOptions } value - Translation effect for page transitions
   * <br>specifying the start value for entrance and the end value for exit. default:{x:0,y:0,z:0}
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  translate(value: TranslateOptions): SymbolSpanAttribute;

  /**
   * Translates the component. 
   * Compared to {@link translate}, this API supports the **undefined** type for the **translate** parameter.

   *
   * @param { Optional<TranslateOptions> } translate - How the component is translated in the coordinate
   * <br>system (as shown below) with the upper left corner of the component as the coordinate origin.
   * <br>Values of **x**, **y**, and **z** indicate the translation distance along the respective axis.
   * <br>default:{x:0,y:0,z:0}
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  translate(translate: Optional<TranslateOptions>): SymbolSpanAttribute;

  /**
   * Sets the transformation matrix of the component.
   *
   * @param { object } value - Transformation matrix of the component.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  transform(value: object): SymbolSpanAttribute;

  /**
   * Sets the transformation matrix of the component.
   * Compared to {@link transform}, this API supports the **undefined** type for the **transform** parameter.
   *
   * @param { Optional<object> } transform - How the component is translated in the coordinate
   * <br>system (as shown below) with the upper left corner of the component as the coordinate origin.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  transform(transform: Optional<object>): SymbolSpanAttribute;

  /**
   * Sets whether to draw shadows of child nodes in the component at the same layer,
   * so that the shadows of elements at the same layer overlap.
   *
   * @param { boolean } value - Whether to draw shadows of child nodes in the component
   * at the same layer, so that the shadows of elements at the same layer overlap.
   * <br>Default value: **false**.
   * <br>**NOTE**
   * <br>1. When this feature is disabled (default), if the shadow radius of a child node
   * is large, the shadows of the child nodes may overlap. This overlap issue does not occur
   * when the feature is enabled.
   * <br>2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching**
   * takes effect for the current child node only and cannot be recursively used.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  useShadowBatching(value: boolean): SymbolSpanAttribute;

  /**
   * Sets whether to draw shadows of child nodes in the component at the same layer,
   * so that the shadows of elements at the same layer overlap. Compared to
   * useShadowBatching<sup>11+</sup>, this API supports the
   * **undefined** type for the **use** parameter.
   *
   * @param { Optional<boolean> } use - Whether to draw shadows of child nodes in the
   * component at the same layer, so that the shadows of elements at the same layer overlap.
   * <br>Default value: **false**.
   * <br>**NOTE**
   * <br>1. When this feature is disabled (default), if the shadow radius of a child node is large,
   * the shadows of the child nodes may overlap. This overlap issue does not occur when the feature
   * is enabled.<br>2. Avoid nesting **useShadowBatching**. When used in nested mode,
   * **useShadowBatching** takes effect for the current child node only and cannot be recursively used.
   * <br>If **use** is **undefined**, the component reverts to its original effect of not using
   * shadow overlapping.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  useShadowBatching(use: Optional<boolean>): SymbolSpanAttribute;

   /**
   * Specifies whether to apply the effect defined by <!--Del-->the parent
   * [EffectComponent](ts-container-effectcomponent-sys.md) or <!--DelEnd-->the window.
   *
   * @param { Optional<boolean> } useEffect - Whether to apply the effect defined by <!--Del-->the parent
   * **EffectComponent** or <!--DelEnd-->the window.
   * <br>The value **true** means to apply the effect defined by <!--Del-->the parent **EffectComponent**
   * or <!--DelEnd-->the window.
   * <br>Default value: **false**.
   * @param { EffectType } [effectType] - Type of effect to apply to the component, which is defined by
   * <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
   * <br>Default value: **EffectType.DEFAULT**.
   * @returns { SymbolSpanAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14
   * @deprecated since 20
   */
  useEffect(useEffect: boolean, effectType: EffectType): SymbolSpanAttribute;

  /**
   * Specifies whether to apply the effect defined by <!--Del-->the parent
   * EffectComponent or
   * <!--DelEnd-->the window. Compared to useEffect<sup>14+</sup>,
   * this API supports the **undefined** type for the **useEffect** parameter.
   *
   * @param { Optional<boolean> } useEffect - Whether to apply the effect defined by
   * <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
   * <br>The value **true** means to apply the effect defined by <!--Del-->the parent
   * **EffectComponent** or <!--DelEnd-->the window.
   * <br>Default value: **false**.
   * <br>If **useEffect** is set to **undefined**, the previous value is retained.
   * @param { EffectType } [effectType] - Type of effect to apply to the component, which
   * is defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
   * <br>Default value: **EffectType.DEFAULT**.
   * @returns { SymbolSpanAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  useEffect(useEffect: Optional<boolean>, effectType?: EffectType): SymbolSpanAttribute;

  /**
   * Specifies whether to combine the drawing of special effects, such as background blur.
   *
   * @param { boolean } value - Whether the component inherits the special effect settings of the
   * **EffectComponent** component.<br>The value **true** means that the component inherits the
   * special effect settings of the **EffectComponent** component, and **false** means the opposite.
   * <br>Default value: **false**.
   * @returns { SymbolSpanAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  useEffect(value: boolean): SymbolSpanAttribute;

  /**
   * Sets the number of occupied columns and offset columns for a specific device width type.
   *
   * @param { object } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): SymbolSpanAttribute;

  /**
   * Sets a visual effect that is not a filter effect.
   *
   * @param { VisualEffect } effect - Visual effect parameters.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  visualEffect(effect: VisualEffect): SymbolSpanAttribute;

  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value - Whether the component is visible.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  visibility(value: Visibility): SymbolSpanAttribute;

  /**
   * Sets the width of the component. By default, the width required to fully hold the
   * component content is used.If the width of the component is greater than that of
   * the parent container, the component will be drawn beyond the parent container scope.
   *
   * @param { Length } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  width(value: Length): SymbolSpanAttribute;
  /**
   * Sets the width of the component or its horizontal layout policy. By default, the
   * component uses the width required for its content. If the width of the component is
   * greater than that of the parent container, the component will be drawn beyond the
   * parent container scope.
   *
   * @param { Length | LayoutPolicy } widthValue
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15
   * @deprecated since 20
   */
  width(widthValue: Length | LayoutPolicy): SymbolSpanAttribute;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 20
   */
  zIndex(value: number): SymbolSpanAttribute;

  /**
   * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
   *
   * @param { FocusDrawLevel } drawLevel - indicates accessibility focus draw level.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19
   * @deprecated since 20
   */
  accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): SymbolSpanAttribute;

  /**
   * Applies a pixel stretch effect to the component. Compared to pixelStretchEffect,
   * this API supports the **undefined** type for the **options** parameter.
   *
   * @param { Optional<PixelStretchEffectOptions> } options - Pixel stretch effect options.
   * <br>The value includes the length by which a pixel is stretched toward the four edges.
   * <p>**NOTE**:
   * <br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge
   * pixels grow by the set length toward the top, bottom, left, and right edges.
   * <br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains 
   * unchanged:
   * <br>Shrinking mode:
   * <br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.
   * <br>(2) The image is stretched back to the original size with edge pixels.
   * <br>3. Constraints on **options**:
   * <br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are
   * stretched or shrink at the same time in the same direction.
   * <br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and
   * specific value is not allowed.
   * <br>(3) If the input value is invalid, the image is displayed as {0, 0, 0, 0}, that is, the image is the same as
   * the original image.
   * </p>
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): SymbolSpanAttribute;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - Clip mode.
   * <br>If the value is a shape attribute, the component is clipped based on the specified shape.
   * <br>If the value is of the Boolean type,
   * it specifies whether to clip the component based on the boundaries of the parent container.
   * <br>Default value: **false**.
   * <br>If the value is a shape attribute, the clipped area can still respond to bound gesture events.
   * <br>If the value is of the Boolean type, the clipped area will not respond to bound gesture events.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead CommonMethod#clipShape
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): SymbolSpanAttribute;

  /**
   * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
   * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   * @deprecated since 20
   */
  onAccessibilityFocus(callback: AccessibilityFocusCallback): SymbolSpanAttribute;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead CommonMethod#maskShape
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): SymbolSpanAttribute;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   */
  onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): SymbolSpanAttribute;

  /**
   * Add a blendMode effect to the current component.Cannot be used together with the blendMode interface.
   * 
   * @param { BlendMode | Blender } effect - When the effect type is BlendMode type, define Different hybrid modes.
   * When the effect type is Blender type, Define the corresponding blending effect.
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 13
   * @deprecated since 20
   */
  advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): SymbolSpanAttribute;
}

/**
 * Defines SymbolSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines SymbolSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines SymbolSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare const SymbolSpan: SymbolSpanInterface;

/**
 * Defines SymbolSpan Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines SymbolSpan Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines SymbolSpan Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare const SymbolSpanInstance: SymbolSpanAttribute;
