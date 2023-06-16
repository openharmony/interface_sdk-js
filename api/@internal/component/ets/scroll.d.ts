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
 * Content scroll direction.
 * @since 7
 */
/**
 * Content scroll direction.
 * @crossplatform
 * @since 10
 */
declare enum ScrollDirection {
  /**
   * Vertical scrolling is supported.
   * @since 7
   */
  /**
   * Vertical scrolling is supported.
   * @crossplatform
   * @since 10
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   * @since 7
   */
  /**
   * Horizontal scrolling is supported.
   * @crossplatform
   * @since 10
   */
  Horizontal,

  /**
   * Free scrolling is supported.
   * @since 7
   * @deprecated since 9
   */
  Free,

  /**
   * Non-scrollable.
   * @since 7
   */
  /**
   * Non-scrollable.
   * @crossplatform
   * @since 10
   */
  None,
}

/**
 * ScrollAlign.
 * @enum { number } ScrollAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ScrollAlign {
  /**
   * Start position alignment.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  START,

  /**
   * Center alignment.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CENTER,

  /**
   * End position alignment.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  END,

  /**
   * Scroll the minimum distance to fully display the specified item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  AUTO,
}

/**
 * @since 7
 */
/**
 * @crossplatform
 * @since 10
 */
declare class Scroller {
  /**
   * constructor.
   * @since 7
   */
  /**
   * constructor.
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Called when the setting slides to the specified position.
   * @since 7
   */
  /**
   * Called when the setting slides to the specified position.
   * @crossplatform
   * @since 10
   */
  scrollTo(value: {
    /**
     * The X-axis offset.
     * @crossplatform
     * @since 10
     */
    xOffset: number | string;

    /**
     * The Y-axis offset.
     * @crossplatform
     * @since 10
     */
    yOffset: number | string;

    /**
     * Descriptive animation.
     * @crossplatform
     * @since 10
     */
    animation?: { duration: number; curve: Curve };
  });

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
   */
  /**
   * Called when scrolling to the edge of the container.
   * @crossplatform
   * @since 10
   */
  scrollEdge(value: Edge);

  /**
   * Called when page turning mode is set.
   * @since 7
   * @deprecated since 9
   */
  scrollPage(value: { next: boolean; direction?: Axis });

  /**
   * Called when page turning mode is set.
   * @since 9
   */
  /**
   * Called when page turning mode is set.
   * @crossplatform
   * @since 10
   */
  scrollPage(value: { next: boolean });

  /**
   * Called when viewing the scroll offset.
   * @since 7
   */
  /**
   * Called when viewing the scroll offset.
   * @crossplatform
   * @since 10
   */
  currentOffset();

  /**
   * Called when sliding to the specified index.
   * @since 7
   */
  /**
   * Called when sliding to the specified index.
   * @param { number } value - Index to jump to.
   * @param { boolean } smooth - If true, scroll to index item with animation. If false, scroll to index item without animation.
   * @param { ScrollAlign } align - Sets the alignment mode of a specified index.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scrollToIndex(value: number, smooth?:boolean, align?: ScrollAlign);

  /**
   * Called when the setting slides by offset.
   * @since 9
   */
  /**
   * Called when the setting slides by offset.
   * @crossplatform
   * @since 10
   */
  scrollBy(dx: Length, dy: Length);
}

/**
 * Provides interfaces for scrollable containers.
 * @since 7
 */
/**
 * Provides interfaces for scrollable containers.
 * @crossplatform
 * @since 10
 */
interface ScrollInterface {
  /**
   * Called when a scrollable container is set.
   * @since 7
   */
  /**
   * Called when a scrollable container is set.
   * @crossplatform
   * @since 10
   */
  (scroller?: Scroller): ScrollAttribute;
}

/**
 * Defines the scroll attribute functions.
 * @since 7
 */
/**
 * Defines the scroll attribute functions.
 * @crossplatform
 * @since 10
 */
declare class ScrollAttribute extends CommonMethod<ScrollAttribute> {
  /**
   * Called when the scroll method is slid.
   * @since 7
   */
  /**
   * Called when the scroll method is slid.
   * @crossplatform
   * @since 10
   */
  scrollable(value: ScrollDirection): ScrollAttribute;

  /**
   * Called when the setting slides to the specified position.
   * @since 7
   */
  /**
   * Called when the setting slides to the specified position.
   * @crossplatform
   * @since 10
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): ScrollAttribute;

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
   */
  /**
   * Called when scrolling to the edge of the container.
   * @crossplatform
   * @since 10
   */
  onScrollEdge(event: (side: Edge) => void): ScrollAttribute;

  /**
   * Called when scrolling start.
   * @since 9
   */
  /**
   * Called when scrolling start.
   * @crossplatform
   * @since 10
   */
  onScrollStart(event: () => void): ScrollAttribute;

  /**
   * Called when scrolling has stopped.
   * @since 7
   * @deprecated since 9
   * @useinstead scroll/Scroll#onScrollStop
   */
  onScrollEnd(event: () => void): ScrollAttribute;

  /**
   * Called when scrolling has stopped.
   * @since 9
   */
  /**
   * Called when scrolling has stopped.
   * @crossplatform
   * @since 10
   */
  onScrollStop(event: () => void): ScrollAttribute;

  /**
   * Called when the status of the scroll bar is set.
   * @since 7
   */
  /**
   * Called when the status of the scroll bar is set.
   * @crossplatform
   * @since 10
   */
  scrollBar(barState: BarState): ScrollAttribute;

  /**
   * Called when the color of the scroll bar is set.
   * @since 7
   */
  /**
   * Called when the color of the scroll bar is set.
   * @crossplatform
   * @since 10
   */
  scrollBarColor(color: Color | number | string): ScrollAttribute;

  /**
   * Called when the width of the scroll bar is set.
   * @since 7
   */
  /**
   * Called when the width of the scroll bar is set.
   * @crossplatform
   * @since 10
   */
  scrollBarWidth(value: number | string): ScrollAttribute;

  /**
   * Called when the sliding effect is set.
   * @since 7
   */
  /**
   * Called when the sliding effect is set.
   * @crossplatform
   * @since 10
   */
  edgeEffect(edgeEffect: EdgeEffect): ScrollAttribute;

  /**
   * Called when scrolling begin each frame.
   * @since 9
   */
  /**
   * Called when scrolling begin each frame.
   * @crossplatform
   * @since 10
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): ScrollAttribute;
}

/**
 * Defines Scroll Component.
 * @since 7
 */
/**
 * Defines Scroll Component.
 * @crossplatform
 * @since 10
 */
declare const Scroll: ScrollInterface;

/**
 * Defines Scroll Component instance.
 * @since 7
 */
/**
 * Defines Scroll Component instance.
 * @crossplatform
 * @since 10
 */
declare const ScrollInstance: ScrollAttribute;
