/**
 * the ut for jsdoc about add throws
 *
 */
export class Test {
  /**
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - non-system app called system api.
   * @throws { BusinessError } 401 - Input parameter error.
   */
  func(str: string): void;
}
