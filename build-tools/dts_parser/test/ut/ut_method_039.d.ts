/**
 * the ut for method in interface, method is promise
 */
export interface Test {
  /**
   * the ut for method in interface, method has event subscription
   */
  on(type: 'play', callback: Callback<void>): void;

  /**
   * the ut for method in interface, method has event subscription
   */
  off(type: 'play', callback: Callback<void>): void;
}