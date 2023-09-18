/**
 * the ut for method of on or off
 *
 */
export interface Test {
  on(type: 'add' | 'remove' | 'change', callback: Callback<number>): void;
}
