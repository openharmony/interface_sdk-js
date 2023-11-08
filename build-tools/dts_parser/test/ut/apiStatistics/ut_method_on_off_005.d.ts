/**
 * the ut for method of on or off
 *
 */
export interface Test {
  on(type: SensorId.COLOR, callback: AsyncCallback<ColorResponse>, options?: Options): void;
}
