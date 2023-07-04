/**
 * the ut for method in interface, method is promise
 */
export interface Test {
  /**
   * the ut for method in interface, method has permission
   * 
   * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
   */
  test(param1: string): Promise<Want>;

  /**
   * the ut for method in interface, method has permissions
   * 
   * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
   */
  test(param1: string): Promise<Want>;

  /**
   * the ut for method in interface, method has permissions
   * 
   * @permission
   */
  test(param1: string): Promise<Want>;
}