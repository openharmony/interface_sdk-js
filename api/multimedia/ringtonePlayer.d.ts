import { Callback, AsyncCallback } from "../basic";
import audio from "../@ohos.multimedia.audio";
import media from "../@ohos.multimedia.media";

/**
 * Interface for ringtone options.
 * @syscap SystemCapability.MultiMedia.SystemSound.Core
 * @since 10
 */
export interface RingtoneOptions {
  /**
   * Ringtone volume.
   * @since 10
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   */
  volume: number;
  /**
   * Loop value.
   * @since 10
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   */
  loop: boolean;
}

/**
 * Ringtone player object.
 * @syscap SystemCapability.MultiMedia.SystemSound.Core
 * @since 10
 */
export interface RingtonePlayer {
  /**
   * Gets player state.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  readonly state: media.AVPlayerState;

  /**
   * Gets the title of ringtone.
   * @param callback Callback used to return the title.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  getTitle(callback: AsyncCallback<string>): void;
  /**
   * Gets the title of ringtone.
   * @returns Promise used to return the title.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  getTitle(): Promise<string>;

  /**
   * Gets audio renderer info.
   * @param callback Callback used to return AudioRendererInfo value.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void;
  /**
   * Gets audio renderer info.
   * @returns Promise used to return AudioRendererInfo value.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  getAudioRendererInfo(): Promise<audio.AudioRendererInfo>;

  /**
   * Configure ringtone options.
   * @param options Ringtone configure options.
   * @param callback Callback used to return configuration result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  configure(options: RingtoneOptions, callback: AsyncCallback<void>): void;
  /**
   * Configure ringtone options.
   * @param options Ringtone configure options.
   * @returns Promise used to return configuration result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  configure(options: RingtoneOptions): Promise<void>;

  /**
   * Starts playing ringtone.
   * @param callback Callback used to return the starting result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  start(callback: AsyncCallback<void>): void;
  /**
   * Starts playing ringtone.
   * @returns Promise used to return the starting result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  start(): Promise<void>;

  /**
   * Stop playing ringtone.
   * @param callback Callback used to return the stoping result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  stop(callback: AsyncCallback<void>): void;
  /**
   * Stop playing ringtone.
   * @returns Promise used to return the stoping result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  stop(): Promise<void>;

  /**
   * Release ringtone player resource.
   * @param callback Callback used to return the releasing result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  release(callback: AsyncCallback<void>): void;
  /**
   * Release ringtone player resource.
   * @returns Promise used to return the releasing result.
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  release(): Promise<void>;

  /**
   * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
   * triggered when audio playback is interrupted.
   * @param callback Callback used to listen for interrupt callback.
   * @throws { BusinessError } 401 - if input parameter type or number mismatch
   * @throws { BusinessError } 6800101 - if input parameter value error
   * @syscap SystemCapability.MultiMedia.SystemSound.Core
   * @since 10
   */
  on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;
}