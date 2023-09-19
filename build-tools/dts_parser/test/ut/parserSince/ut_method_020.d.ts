/**
 * the ut for method in namespace
 */
export namespace test {
  /**
   * the ut for method in namespace, method has event subscription and type is union type
   */
  function on(type: 'play' | 'pause', callback: Callback<void>): void;

  /**
   * the ut for method in namespace, method has event subscription and type is union type
   */
  function off(type: 'play' | 'pause', callback: Callback<void>): void;
}