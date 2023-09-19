/**
 * the ut for method of on or off
 *
 */
export interface Test {
  on(type: ChangeEvent, callback: Callback<void>): void;
}
type ChangeEvent = 'deviceChange' | 'albumChange' | 'imageChange' | 'audioChange' | 'videoChange' | 'remoteFileChange';
