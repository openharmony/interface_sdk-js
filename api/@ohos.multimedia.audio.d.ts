/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import {ErrorCallback, AsyncCallback, Callback} from './basic';

/**
 * @name audio
 * @since 7
 * @import import audio from '@ohos.multimedia.audio'
 */
declare namespace audio {

  /**
   * Obtains an AudioManager instance.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  function getAudioManager(): AudioManager;

  /**
   * Creates a AudioCapturer instance.
   * @param options All options used for audio capturer.
   * @return AudioCapturer instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void;
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer>;

  /**
   * Creates a AudioRenderer instance.
   * @param options All options used for audio renderer.
   * @return AudioRenderer instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>): void;
  function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer>;

  /**
   * Enumerates the rendering states of the current device.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum AudioState {
    /**
     * Invalid state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_INVALID = -1,
    /**
     * Create New instance state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_NEW,
    /**
     * Prepared state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_PREPARED,
    /**
     * Running state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_RUNNING,
    /**
     * Stopped state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_STOPPED,
    /**
     * Released state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_RELEASED,
    /**
     * Paused state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STATE_PAUSED
  }

  /**
   * Enumerates audio stream types.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Volume
   */
  enum AudioVolumeType {
    /**
     * Audio streams for voice calls
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    VOICE_CALL = 0,
    /**
     * Audio streams for ring tones
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    RINGTONE = 2,
    /**
     * Audio streams for media purpose
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    MEDIA = 3,
    /**
     * Audio stream for voice assistant
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    VOICE_ASSISTANT = 9,
  }

  /**
   * Enumerates audio device flags.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  enum DeviceFlag {
    /**
     * Output devices
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    OUTPUT_DEVICES_FLAG = 1,
    /**
     * Input devices
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    INPUT_DEVICES_FLAG = 2,
    /**
     * All devices
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    ALL_DEVICES_FLAG = 3,
  }

  /**
   * Enumerates device roles.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  enum DeviceRole {
    /**
     * Input role
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    INPUT_DEVICE = 1,
    /**
     * Output role
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    OUTPUT_DEVICE = 2,
  }

  /**
   * Enumerates device types.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  enum DeviceType {
    /**
     * Invalid device
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    INVALID = 0,
    /**
     * Speaker
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    SPEAKER = 2,
    /**
     * Wired headset
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    WIRED_HEADSET = 3,
    /**
     * Bluetooth device using the synchronous connection oriented link (SCO)
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    BLUETOOTH_SCO = 7,
    /**
     * Bluetooth device using advanced audio distribution profile (A2DP)
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    BLUETOOTH_A2DP = 8,
    /**
     * Microphone
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    MIC = 15,
  }

  /**
   * Enumerates Active device types.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
   enum ActiveDeviceType {
    /**
     * Speaker
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    SPEAKER = 2,
    /**
     * Bluetooth device using the synchronous connection oriented link (SCO)
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    BLUETOOTH_SCO = 7,
  }

  /**
   * Enumerates Audio Ringer modes
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Communication
   */
  enum AudioRingMode {
    /**
     * Silent mode
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    RINGER_MODE_SILENT = 0,
    /**
     * Vibration mode
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    RINGER_MODE_VIBRATE,
    /**
     * Normal mode
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    RINGER_MODE_NORMAL,
  }

  /**
   * Enumerates the sample format.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum AudioSampleFormat {
    /**
     * Invalid format.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_FORMAT_INVALID = -1,
    /**
     * Unsigned 8 format.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_FORMAT_U8 = 0,
    /**
     * Signed 16 low-end format.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_FORMAT_S16LE = 1,
    /**
     * Signed 24 low-end format.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_FORMAT_S24LE = 2,
    /**
     * Signed 32 low-end format.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_FORMAT_S32LE = 3,
  }

  /**
   * Enumerates the audio channel.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum AudioChannel {
    /**
     * First channel.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CHANNEL_1 = 0x1 << 0,
    /**
     * Second channel.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CHANNEL_2 = 0x1 << 1
  }

  /**
   * Enumerates the audio sampling rate.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum AudioSamplingRate {
    /**
     * 8kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_8000 = 8000,
    /**
     * 11.025kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_11025 = 11025,
    /**
     * 12kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_12000 = 12000,
    /**
     * 16kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_16000 = 16000,
    /**
     * 22.05kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_22050 = 22050,
    /**
     * 24kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_24000 = 24000,
    /**
     * 32kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_32000 = 32000,
    /**
     * 44.1kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_44100 = 44100,
    /**
     * 48kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_48000 = 48000,
    /**
     * 64kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_64000 = 64000,
    /**
     * 96kHz sample rate.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SAMPLE_RATE_96000 = 96000
  }

  /**
   * Enumerates the audio encoding type.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum AudioEncodingType {
    /**
     * Invalid type.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    ENCODING_TYPE_INVALID = -1,
    /**
     * Raw pcm type.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    ENCODING_TYPE_RAW = 0
  }

  /**
   * Enumerates the audio content type.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum ContentType {
    /**
     * Unknown content.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CONTENT_TYPE_UNKNOWN = 0,
    /**
     * Speech content.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CONTENT_TYPE_SPEECH = 1,
    /**
     * Music content.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CONTENT_TYPE_MUSIC = 2,
    /**
     * Movie content.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CONTENT_TYPE_MOVIE = 3,
    /**
     * Notification content.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CONTENT_TYPE_SONIFICATION = 4,
    /**
     * Ringtone content.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    CONTENT_TYPE_RINGTONE = 5,
  }

  /**
   * Enumerates the stream usage.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum StreamUsage {
    /**
     * Unkown usage.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STREAM_USAGE_UNKNOWN = 0,
    /**
     * Media usage.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STREAM_USAGE_MEDIA = 1,
    /**
     * Voice communication usage.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STREAM_USAGE_VOICE_COMMUNICATION = 2,
    /**
     * Notification or ringtone usage.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    STREAM_USAGE_NOTIFICATION_RINGTONE = 3
  }

  /**
   * Interface for audio stream info
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  interface AudioStreamInfo {
    /**
     * Audio sampling rate
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    samplingRate: AudioSamplingRate;
    /**
     * Audio channels
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    channels: AudioChannel;
    /**
     * Audio sample format
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    sampleFormat: AudioSampleFormat;
    /**
     * Audio encoding type
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    encodingType: AudioEncodingType;
  }

  /**
   * Interface for audio renderer info
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  interface AudioRendererInfo {
    /**
     * Audio content type
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    content: ContentType;
    /**
     * Audio stream usage
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    usage: StreamUsage;
    /**
     * Audio renderer flags
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    rendererFlags: number;
  }

  /**
   * Interface for audio renderer options
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  interface AudioRendererOptions {
    /**
     * Audio stream info
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    streamInfo: AudioStreamInfo;
    /**
     * Audio renderer info
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    rendererInfo: AudioRendererInfo;
  }

  /**
   * Enum for audio renderer rate
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  enum AudioRendererRate {
    /**
     * Normal rate
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    RENDER_RATE_NORMAL = 0,
    /**
     * Double rate
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    RENDER_RATE_DOUBLE = 1,
    /**
     * Half rate
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    RENDER_RATE_HALF = 2
  }

  /**
   * Enumerates audio interruption event types.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  enum InterruptType {
    /**
     * An audio interruption event starts.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_TYPE_BEGIN = 1,

    /**
     * An audio interruption event ends.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_TYPE_END = 2
  }

  /**
   * Enumerates the types of hints for audio interruption.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  enum InterruptHint {
    /**
     * Audio no interrupt.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_HINT_NONE = 0,
    /**
     * Audio resumed.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_HINT_RESUME = 1,

    /**
     * Audio paused.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_HINT_PAUSE = 2,

    /**
     * Audio stopped.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_HINT_STOP = 3,

    /**
     * Audio ducking. (In ducking, the audio volume is reduced, but not silenced.)
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_HINT_DUCK = 4,

    /**
     * Audio unducking.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_HINT_UNDUCK = 5,
  }

  /**
   * Interrupt force type.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  enum InterruptForceType {
    /**
     * Force type, system change audio state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_FORCE = 0,
    /**
     * Share type, application change audio state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    INTERRUPT_SHARE
  }

  /**
   * Interrupt events
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  interface InterruptEvent {
    /**
     * Interrupt event type, begin or end
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    eventType: InterruptType;

    /**
     * Interrupt force type, force or share
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    forceType: InterruptForceType;

    /**
     * Interrupt hint type. In force type, the audio state already changed,
     * but in share mode, only provide a hint for application to decide.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    hintType: InterruptHint;
  }

  /**
   * Enumerates device change types.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  enum DeviceChangeType {
    /**
     * Device connection.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    CONNECT = 0,

    /**
     * Device disconnection.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    DISCONNECT = 1,
  }

  /**
   * Enumerates audio scenes.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Communication
  */
  enum AudioScene {
    /**
     * Default audio scene
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    AUDIO_SCENE_DEFAULT = 0,
    /**
     * Ringing audio scene
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     */
    AUDIO_SCENE_RINGING,
    /**
     * Phone call audio scene
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     */
    AUDIO_SCENE_PHONE_CALL,
    /**
     * Voice chat audio scene
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    AUDIO_SCENE_VOICE_CHAT
  }

  /**
   * Manages audio volume and audio device information.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  interface AudioManager {
    /**
     * Sets volume for a stream. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    setVolume(audioType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void;
    /**
     * Sets volume for a stream. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    setVolume(audioType: AudioVolumeType, volume: number): Promise<void>;
    /**
     * Obtains volume of a stream. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    getVolume(audioType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the volume of a stream. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    getVolume(audioType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the minimum volume allowed for a stream. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    getMinVolume(audioType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the minimum volume allowed for a stream. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    getMinVolume(audioType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the maximum volume allowed for a stream. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    getMaxVolume(audioType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the maximum volume allowed for a stream. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    getMaxVolume(audioType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the audio devices of a specified flag. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Obtains the audio devices with a specified flag. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * Sets the stream to mute. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    mute(audioType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the stream to mute. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    mute(audioType: AudioVolumeType, mute: boolean): Promise<void>;
    /**
     * Checks whether the stream is muted. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    isMute(audioType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the stream is muted. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    isMute(audioType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether the stream is active. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    isActive(audioType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the stream is active. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    isActive(audioType: AudioVolumeType): Promise<boolean>;
    /**
     * Mute/Unmutes the microphone. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mute/Unmutes the microphone. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    setMicrophoneMute(mute: boolean): Promise<void>;
    /**
     * Checks whether the microphone is muted. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the microphone is muted. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * Sets the ringer mode. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     * Sets the ringer mode. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;
    /**
     * Gets the ringer mode. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * Gets the ringer mode. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * Sets the audio parameter. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets the audio parameter. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    setAudioParameter(key: string, value: string): Promise<void>;
    /**
     * Gets the audio parameter. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    getAudioParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Gets the audio parameter. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    getAudioParameter(key: string): Promise<string>;
    /**
     * Activates the device. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * Activates the device. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>;
    /**
     * Checks whether the device is active. This method uses an asynchronous callback to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the device is active. This method uses a promise to return the execution result.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>;
    /**
     * Subscribes volume change event callback, only for system
     * @return VolumeEvent callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     */
    on(type: 'volumeChange', callback: Callback<VolumeEvent>): void;
    /**
     * Monitors ringer mode change
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;
    /**
     * Sets the audio scene mode to change audio strategy.
     * This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    setAudioScene(scene: AudioScene, callback: AsyncCallback<void> ): void;
    /**
     * Sets the audio scene mode to change audio strategy. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    setAudioScene(scene: AudioScene): Promise<void>;
    /**
     * Obtains the system audio scene mode. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    getAudioScene(callback: AsyncCallback<AudioScene> ): void;
    /**
     * Obtains the system audio scene mode. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Communication
     */
    getAudioScene(): Promise<AudioScene>;
    /**
    * Monitors device changes
    * @since 7
    * @syscap SystemCapability.Multimedia.Audio.Device
    */
    on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void;
  }

  /**
   * Describes an audio device.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  interface AudioDeviceDescriptor {
    /**
     * Audio device role
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    readonly deviceRole: DeviceRole;
    /**
     * Audio device type
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    readonly deviceType: DeviceType;
  }

  /**
   * A queue of AudioDeviceDescriptor, which is read-only.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  type AudioDeviceDescriptors = Array<Readonly<AudioDeviceDescriptor>>;

  /**
   * Audio volume event
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   */
  interface VolumeEvent {
    /**
     * volumeType of current stream
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    volumeType: AudioVolumeType;
    /**
     * volume level
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    volume: number;
    /**
     * updateUi show volume change in Ui
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Volume
     */
    updateUi: boolean;
  }

  /**
   * Describes the device change type and device information.
   * @since 7
   * @syscap SystemCapability.Multimedia.Audio.Device
   */
  interface DeviceChangeAction {
    /**
     * Device change type.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    type: DeviceChangeType;

    /**
     * Device information.
     * @since 7
     * @syscap SystemCapability.Multimedia.Audio.Device
     */
    deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * Provides functions for applications for audio playback.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   */
  interface AudioRenderer {
    /**
     * Gets audio state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    readonly state: AudioState;
    /**
     * Gets audio renderer info.
     * @return AudioRendererInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void;
    /**
     * Gets audio renderer info.
     * @return AudioRendererInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getRendererInfo(): Promise<AudioRendererInfo>;
    /**
     * Gets audio stream info.
     * @return AudioStreamInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * Gets audio stream info.
     * @return AudioStreamInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * Starts audio rendering. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts audio rendering. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    start(): Promise<void>;
    /**
     * Render audio data. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;
    /**
     * Render audio data. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    write(buffer: ArrayBuffer): Promise<number>;
    /**
     * Obtains the current timestamp. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getAudioTime(callback: AsyncCallback<number>): void;
    /**
     * Obtains the current timestamp. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getAudioTime(): Promise<number>;
    /**
     * Drain renderer buffer. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    drain(callback: AsyncCallback<void>): void;
    /**
     * Drain renderer buffer. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    drain(): Promise<void>;
    /**
     * Pauses audio rendering. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * Pauses audio rendering. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    pause(): Promise<void>;
    /**
     * Stops audio rendering. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops audio rendering. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    stop(): Promise<void>;
    /**
     * Releases resources. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases resources. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    release(): Promise<void>;
    /**
     * Obtains a reasonable minimum buffer size for renderer, however, the renderer can
     * accept other read sizes as well. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getBufferSize(callback: AsyncCallback<number>): void;
    /**
     * Obtains a reasonable minimum buffer size for renderer, however, the renderer can
     * accept other read sizes as well. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getBufferSize(): Promise<number>;
    /**
     * Set the render rate. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void;
    /**
     * Set the render rate. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    setRenderRate(rate: AudioRendererRate): Promise<void>;
    /**
     * Obtains the current render rate. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getRenderRate(callback: AsyncCallback<AudioRendererRate>): void;
    /**
     * Obtains the current render rate. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    getRenderRate(): Promise<AudioRendererRate>;
    /**
     * Subscribes for audio interrupt event callback.
     * @param type Event type.
     * @return InterruptEvent callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     */
    on(type: 'interrupt', callback: Callback<InterruptEvent>): void;
    /**
     * Subscribes mark reach event callback.
     * @param type Event type.
     * @param frame Mark reach frame count.
     * @return Mark reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @initial
     */
    on(type: "markReach", frame: number, callback: (position: number) => {}): void;
    /**
     * Unsubscribes mark reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @initial
     */
    off(type: "markReach"): void;
    /**
     * Subscribes period reach event callback.
     * @param type Event type.
     * @param frame Period reach frame count.
     * @return Period reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @initial
     */
    on(type: "periodReach", frame: number, callback: (position: number) => {}): void;
    /**
     * Unsubscribes period reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @initial
     */
    off(type: "periodReach"): void;
    /**
     * Subscribes audio state change event callback.
     * @param type Event type.
     * @param callback Callback used to listen for the audio state change event
     * @return AudioState
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @initial
     */
    on(type: "stateChange", callback: Callback<AudioState>): void;
  }

  /**
   * Enum for source type.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  enum SourceType {
    /**
     * Invalid source type.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SOURCE_TYPE_INVALID = -1,
    /**
     * Mic source type.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    SOURCE_TYPE_MIC
  }

  /**
   * Interface for audio capturer info.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Core
   */
  interface AudioCapturerInfo {
    /**
     * Audio source type
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    source: SourceType;
    /**
     * Audio capturer flags
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Core
     */
    capturerFlags: number;
  }

  /**
   * Interface for audio capturer options.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   */
  interface AudioCapturerOptions {
    /**
     * Audio stream info.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    streamInfo: AudioStreamInfo;
    /**
     * Audio capturer info.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    capturerInfo: AudioCapturerInfo;
  }

  /**
   * Provides functions for applications to manage audio capturing.
   * @since 8
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   */
  interface AudioCapturer {
    /**
     * Gets capture state.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    readonly state: AudioState;
    /**
     * Gets audio capturer info.
     * @return AudioCapturerInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void;
    /**
     * Gets audio capturer info.
     * @return AudioCapturerInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getCapturerInfo(): Promise<AudioCapturerInfo>;

    /**
     * Gets audio stream info.
     * @return AudioStreamInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * Gets audio stream info.
     * @return AudioStreamInfo value
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getStreamInfo(): Promise<AudioStreamInfo>;

    /**
     * Starts audio capturing. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts audio capturing. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    start(): Promise<void>;

    /**
     * Capture audio data. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void;
    /**
     * Capture audio data. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>;

    /**
     * Obtains the current timestamp. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getAudioTime(callback: AsyncCallback<number>): void;
    /**
     * Obtains the current timestamp. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getAudioTime(): Promise<number>;

    /**
     * Stops audio capturing. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops audio capturing. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    stop(): Promise<void>;

    /**
     * Releases a capture resources. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases a capture resources. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    release(): Promise<void>;

    /**
     * Obtains a reasonable minimum buffer size for capturer, however, the capturer can
     * accept other read sizes as well. This method uses an asynchronous callback to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getBufferSize(callback: AsyncCallback<number>): void;
    /**
     * Obtains a reasonable minimum buffer size for capturer, however, the capturer can
     * accept other read sizes as well. This method uses a promise to return the execution result.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     */
    getBufferSize(): Promise<number>;

    /**
     * Subscribes mark reach event callback.
     * @param type Event type.
     * @param frame Mark reach frame count.
     * @return Mark reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @initial
     */
    on(type: "markReach", frame: number, callback: (position: number) => {}): void;
    /**
     * Unsubscribes mark reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @initial
     */
    off(type: "markReach"): void;

    /**
     * Subscribes period reach event callback.
     * @param type Event type.
     * @param frame Period reach frame count.
     * @return Period reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @initial
     */
    on(type: "periodReach", frame: number, callback: (position: number) => {}): void;
    /**
     * Unsubscribes period reach event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @initial
     */
    off(type: "periodReach"): void;

    /**
     * Subscribes audio state change event callback.
     * @param type Event type.
     * @param callback Callback used to listen for the audio state change event
     * @return AudioState
     * @since 8
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @initial
     */
    on(type: "stateChange", callback: Callback<AudioState>): void;
  }
}

export default audio;
