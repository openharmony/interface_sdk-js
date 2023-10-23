
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @since 8
 */
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @since 10
 */
declare namespace abilityAccessCtrl {

  interface AtManager {
    requestPermissionsFromUser(context: Context, permissions: Array<Permissions>): Promise<PermissionRequestResult>;
  }
}
