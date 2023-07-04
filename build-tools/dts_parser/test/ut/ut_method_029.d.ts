/**
 * the ut for method in class, method is promise
 */
export class Test {
  /**
   * the ut for method in class, method has event subscription
   */
  on(type: 'play', callback: Callback<void>): void;

  /**
   * the ut for method in class, method has event subscription
   */
  off(type: 'play', callback: Callback<void>): void;
}