/**
 * the ut for method in namespace
 */
export namespace test {
  /**
   * the ut for method in sourcefile, method has error codes
   * 
   * @throws { BusinessError } 401 - The parameter check failed.
   */
  function test1(param1: string): number;

  /**
   * the ut for method in sourcefile, method has error codes
   * 
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 402 - The parameter check failed.
   */
  function test2(param1: string): number;

  /**
   * the ut for method in sourcefile, method has error codes but forget to write
   * 
   * @throws { BusinessError } The parameter check failed.
   */
  function test1(param1: string): number;
}