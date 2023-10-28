/**
 * the ut for method of on or off
 *
 */
export interface Test {
  on(type: string, callback: AsyncCallback<void>): void;
}
