/**
 * the ut for method in namespace
 */
export namespace test {
  /**
   * the ut for method in namespace, method has event subscription
   */
  function on(type: 'play', callback: Callback<void>): void;

  /**
   * the ut for method in namespace, method has event subscription
   */
  function off(type: 'play', callback: Callback<void>): void;
}