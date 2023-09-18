/**
 * the ut for method in class, method is promise
 */
export class Test {
  /**
   * the ut for method in class, method has permission
   * 
   * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
   */
  test(param1: string): Promise<Want>;

  /**
   * the ut for method in class, method has permissions
   * 
   * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
   */
  test(param1: string): Promise<Want>;

  /**
   * the ut for method in class, method has permissions
   * 
   * @permission
   */
  test(param1: string): Promise<Want>;
}