/**
 * the ut for method of on or off
 *
 */
export interface Test {
  on(type: 'add' | 'reduce', callback: AsyncCallback<number>): void;
}
