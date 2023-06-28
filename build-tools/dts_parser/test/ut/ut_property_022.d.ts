/**
 * the ut for property in interface, the property has two jsDoc and first is required but second is not required
 */
export interface test {
  /**
   * @type { (string | Curve) }
   */
  /**
   * @type { ?(string | Curve | ICurve) }
   */
  name?: string | Curve | ICurve;
}