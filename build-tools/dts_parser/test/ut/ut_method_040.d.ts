/**
 * the ut for method in interface, method is promise
 */
export interface Test {
  /**
   * the ut for method in interface, method has event subscription and type is union type
   */
  on(type: 'play' | 'pause', callback: Callback<void>): void;

  /**
   * the ut for method in interface, method has event subscription and type is union type
   */
  off(type: 'play' | 'pause', callback: Callback<void>): void;

    /**
   * the ut for method in interface, method has event subscription and type is string
   */
    on(type: string, callback: Callback<void>): void;

    /**
     * the ut for method in interface, method has event subscription and type is string
     */
    off(type: string, callback: Callback<void>): void;
}