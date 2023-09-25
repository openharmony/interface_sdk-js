/**
 * the ut for method in class, method is promise
 */
export class Test {
  /**
   * the ut for method in sourcefile, method has error codes
   * 
   * @throws { BusinessError } 401 - The parameter check failed.
   */
  test1(param1: string): number;

  /**
   * the ut for method in sourcefile, method has error codes
   * 
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 402 - The parameter check failed.
   */
  test2(param1: string): number;

  /**
   * the ut for method in sourcefile, method has error codes but forget to write
   * 
   * @throws { BusinessError } The parameter check failed.
   */
  test1(param1: string): number;
}