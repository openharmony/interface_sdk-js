/**
 * the ut for jsdoc about throws
 *
 */
export class Test {
  /**
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   */
  func(str: string): void;
}
