  
import { AsyncCallback } from './basic';
import Context from './application/Context';
import { RingtonePlayer as _RingtonePlayer } from './multimedia/ringtonePlayer';
import { RingtoneOptions as _RingtoneOptions } from './multimedia/ringtonePlayer';

/**
 * Provides ringtone player interfaces.
 *
 * @since 10
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 */
declare namespace systemSoundManager {
  /**
   * Enum for ringtone type.
   * @since 10
   */
  enum RingtoneType {
    /**
     * Default type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    RINGTONE_TYPE_DEFAULT = 0,
    /**
     * Multi-sim type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    RINGTONE_TYPE_MULTISIM = 1,
  }

  /**
   * Gets system sound manager for all type sound.
   * @return SystemSoundManager instance.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   */
  function getSystemSoundManager(): SystemSoundManager;

  /**
   * System sound manager object.
   * @since 10
   */
  interface SystemSoundManager {
    /**
     * Sets the ringtone uri to system.
     * @param context Current application context.
     * @param uri Ringtone uri to set.
     * @param type Ringtone type to set.
     * @param callback Callback used to return the set uri result.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType, callback: AsyncCallback<void>): void;
    /**
     * Sets the ringtone uri to system.
     * @param context Current application context.
     * @param uri Ringtone uri to set.
     * @param type Ringtone type to set.
     * @returns Promise used to return the set uri result.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>;

    /**
     * Gets the ringtone uri.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @param callback Callback used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType, callback: AsyncCallback<string>): void;
    /**
     * Gets the ringtone uri.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @returns Promise used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>;

    /**
     * Gets the ringtone player.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @param callback Callback used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType, callback: AsyncCallback<RingtonePlayer>): void;
    /**
     * Gets the ringtone player.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @returns Promise used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>;
  }

  /**
   * Ringtone player object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   */
  type RingtonePlayer = _RingtonePlayer;

  /**
   * Interface for ringtone options.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   */
  type RingtoneOptions = _RingtoneOptions;
}

export default systemSoundManager;