/**
 * the ut for method in interface, which has params and return value, one of params is optional
 */
export interface Test {
  test(param1: string, param2?: string): number;
}