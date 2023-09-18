/**
 * the ut for method in interface, method is callSignature
 */
export interface Test {
  (): ButtonAttribute;
  (options: ButtonOptions): ButtonAttribute;
  (label: ResourceStr, options?: ButtonOptions): ButtonAttribute;
}