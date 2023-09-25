/**
 * the ut for method in interface, method is callback
 */
export interface Test {
  test(param1: string, callback: AsyncCallback<Want>): void;
}