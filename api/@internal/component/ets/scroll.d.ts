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
 * @form
 * @since 9
 */
declare enum ScrollDirection {
  /**
   * Vertical scrolling is supported.
   * @since 7
   */
  /**
   * Vertical scrolling is supported.
   * @form
   * @since 9
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   * @since 7
   */
  /**
   * Horizontal scrolling is supported.
   * @form
   * @since 9
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
   * @form
   * @since 9
   */
  None,
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
declare class Scroller {
  /**
   * constructor.
   * @since 7
   */
  /**
   * constructor.
   * @form
   * @since 9
   */
  constructor();

  /**
   * Called when the setting slides to the specified position.
   * @since 7
   */
  /**
   * Called when the setting slides to the specified position.
   * @form
   * @since 9
   */
  scrollTo(value: {
    xOffset: number | string;
    yOffset: number | string;
    animation?: { duration: number; curve: Curve };
  });

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
   */
  /**
   * Called when scrolling to the edge of the container.
   * @form
   * @since 9
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
   * @form
   * @since 9
   */
  scrollPage(value: { next: boolean });
  
  /**
   * Called when viewing the scroll offset.
   * @form
   * @since 7
   */
  currentOffset();

  /**
   * Called when sliding to the specified index.
   * @since 7
   */
  /**
   * Called when sliding to the specified index.
   * @form
   * @since 9
   */
  scrollToIndex(value: number);

  /**
   * Called when the setting slides by offset.
   * @form
   * @since 9
   */
  scrollBy(dx: Length, dy: Length);
}

/**
 * Provides interfaces for scrollable containers.
 * @since 7
 */
/**
 * Provides interfaces for scrollable containers.
 * @form
 * @since 9
 */
interface ScrollInterface {
  /**
   * Called when a scrollable container is set.
   * @since 7
   */
  /**
   * Called when a scrollable container is set.
   * @form
   * @since 9
   */
  (scroller?: Scroller): ScrollAttribute;
}

/**
 * Defines the scroll attribute functions.
 * @since 7
 */
/**
 * Defines the scroll attribute functions.
 * @form
 * @since 9
 */
declare class ScrollAttribute extends CommonMethod<ScrollAttribute> {
  /**
   * Called when the scroll method is slid.
   * @since 7
   */
  /**
   * Called when the scroll method is slid.
   * @form
   * @since 9
   */
  scrollable(value: ScrollDirection): ScrollAttribute;

  /**
   * Called when the setting slides to the specified position.
   * @since 7
   */
  /**
   * Called when the setting slides to the specified position.
   * @form
   * @since 9
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): ScrollAttribute;

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
   */
  /**
   * Called when scrolling to the edge of the container.
   * @form
   * @since 9
   */
  onScrollEdge(event: (side: Edge) => void): ScrollAttribute;

  /**
   * Called when scrolling has stopped.
   * @since 7
   */
  /**
   * Called when scrolling has stopped.
   * @form
   * @since 9
   */
  onScrollEnd(event: () => void): ScrollAttribute;

  /**
   * Called when the status of the scroll bar is set.
   * @since 7
   */
  /**
   * Called when the status of the scroll bar is set.
   * @form
   * @since 9
   */
  scrollBar(barState: BarState): ScrollAttribute;

  /**
   * Called when the color of the scroll bar is set.
   * @since 7
   */
  /**
   * Called when the color of the scroll bar is set.
   * @form
   * @since 9
   */
  scrollBarColor(color: Color | number | string): ScrollAttribute;

  /**
   * Called when the width of the scroll bar is set.
   * @since 7
   */
  /**
   * Called when the width of the scroll bar is set.
   * @form
   * @since 9
   */
  scrollBarWidth(value: number | string): ScrollAttribute;

  /**
   * Called when the sliding effect is set.
   * @since 7
   */
  /**
   * Called when the sliding effect is set.
   * @form
   * @since 9
   */
  edgeEffect(edgeEffect: EdgeEffect): ScrollAttribute;

  /**
   * Event called when Scroll will scroll.
   * @form
   * @since 9
   */
  onScrollBegin(event: (dx: number, dy: number) => { dxRemain: number, dyRemain: number }): ScrollAttribute;
}

declare const Scroll: ScrollInterface;
declare const ScrollInstance: ScrollAttribute;
