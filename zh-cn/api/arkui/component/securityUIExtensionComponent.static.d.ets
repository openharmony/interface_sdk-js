'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */
import Want from '../../@ohos.app.ability.Want';
import { Callback, ErrorCallback, BusinessError, RecordData } from '../../@ohos.base';
import { AttributeModifier, CommonMethod, TerminationInfo } from './common';
import { ComponentContent } from '../ComponentContent';
import { ComponentBuilder, CustomBuilder, CustomBuilderT  } from './builder';
import { Builder } from '@ohos.arkui.component';

/**
 * 定义SecurityUIExtensionComponent内容分辨率跟随策略的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SecurityDpiFollowStrategy {
  /**
   * 表示分辨率跟随宿主。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOLLOW_HOST_DPI = 0,
  /**
   * 表示分辨率跟随UIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
/**
 * 用于构造SecurityUIExtensionComponent时传递参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SecurityUIExtensionOptions {
  /**
   * 在使用SecurityUIExtensionComponent嵌套时，设置当前组件是否转发上一级调用方的Caller信息（即发起调用的Ability身份信息），用于支持多级嵌套场景下的调用链传递。<br/>
   * true：转发上一级的Caller信息；false：不转发上一级的Caller信息。<br/>
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isTransferringCaller?: boolean;
  /**
   * 设置占位符，在SecurityUIExtensionComponent与UIExtensionAbility建立连接前显示。
   * 未设置时不显示占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  placeholder?: ComponentContent;
  /**
   * 设置SecurityUIExtensionComponent内容分辨率跟随策略，用于控制嵌入的UIExtensionAbility内容是跟随宿主应用的分辨率还是使用自身的分辨率。
   *
   * @default SecurityDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dpiFollowStrategy?: SecurityDpiFollowStrategy;
}
/**
 * 回调函数，返回收到的来自对端Ability的数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ReceiveCallback = Callback<Record<string, RecordData>>;
/**
 * 用于在双方建立连接成功后，向被拉起的Ability发送数据，以及订阅和取消订阅事件回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SecurityUIExtensionProxy {
  /**
   * 用于在双方建立连接成功后，向被拉起的Ability发送数据，提供异步发送能力。数据将被扩展Ability通过setReceiveDataCallback接收处理。
   * AnonyMous Object Rectification
   *
   * @param { Record<string, RecordData> } data - 异步发送给被拉起的Ability的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  send(data: Record<string, RecordData>): void;
  /**
   * 用于在双方建立连接成功后，向被拉起的Ability同步发送数据，数据将被拉起的Ability通过setReceiveDataForResultCallback处理并返回结果。
   * AnonyMous Object Rectification
   *
   * @param { Record<string, RecordData> } data - 同步发送给被拉起的Ability的数据。
   * @returns { Record<string, RecordData> } data - 被拉起的Ability对同步发送请求处理后返回的响应数据。
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  sendSync(data: Record<string, RecordData>): Record<string, RecordData>;
  /**
   * 订阅被拉起的Ability发生异步注册的回调。使用callback异步回调。
   * AnonyMous Object Rectification
   *
   * @param { Callback<SecurityUIExtensionProxy> } callback - 回调函数。订阅扩展Ability注册setReceiveDataCallback后触发的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAsyncReceiverRegister(callback: Callback<SecurityUIExtensionProxy>): void;
  /**
   * 订阅被拉起的Ability发生同步注册的回调。使用callback异步回调。
   * AnonyMous Object Rectification
   *
   * @param { Callback<SecurityUIExtensionProxy> } callback - 回调函数。扩展Ability注册setReceiveDataForResultCallback后触发的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onSyncReceiverRegister(callback: Callback<SecurityUIExtensionProxy>): void;
  /**
   * 取消订阅被拉起的Ability发生异步注册的回调。使用callback异步回调。
   * AnonyMous Object Rectification
   *
   * @param { Callback<SecurityUIExtensionProxy> } [callback] - 回调函数。为空代表取消订阅所有扩展Ability异步注册后触发回调。非空代表取消订阅异步对应回调。
   *     ArkTS-Sta模式下，可传入undefined，表示取消所有回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offAsyncReceiverRegister(callback?: Callback<SecurityUIExtensionProxy>): void;
  /**
   * 取消订阅被拉起的Ability发生同步注册的回调。使用callback异步回调。
   * AnonyMous Object Rectification
   *
   * @param { Callback<SecurityUIExtensionProxy> } [callback] - 回调函数。为空代表取消订阅所有扩展Ability同步注册后触发回调。非空代表取消订阅同步对应回调。
   *     ArkTS-Sta模式下，可传入undefined，表示取消所有回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offSyncReceiverRegister(callback?: Callback<SecurityUIExtensionProxy>): void;
}

/**
 * 定义SecurityUIExtensionComponent的属性函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface SecurityUIExtensionComponentAttribute extends CommonMethod {
  /**
   * 设置SecurityUIExtensionComponent的选项。
   *
   * @param { Want } want - Want对象
   * @param { SecurityUIExtensionOptions } [options] - 选项
   * @returns { this } SecurityUIExtensionComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setSecurityUIExtensionComponentOptions(want: Want, options?: SecurityUIExtensionOptions): this;
  /**
   * UIExtensionAbility连接完成时触发的回调，使用callback异步回调。之后可通过返回的SecurityUIExtensionProxy向被拉起的Ability发送数据。
   *
   * @param { Callback<SecurityUIExtensionProxy> | undefined } callback - 回调函数，入参为SecurityUIExtensionProxy，
   *     可用于向对端Ability发送数据及事件订阅。<br/>ArkTS-Sta模式下，可传入undefined，表示取消回调函数。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onRemoteReady(callback: Callback<SecurityUIExtensionProxy> | undefined): this;
  /**
   * 收到被拉起的Ability发送的数据时触发的回调。使用callback异步回调。<br/>AnonyMous Object Rectification
   *
   * @param { ReceiveCallback | undefined } callback - 回调函数，返回收到的来自对端Ability的数据。<br/>ArkTS-Sta模式下，可传入undefined，表示取消回调函数。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onReceive(callback: ReceiveCallback | undefined): this;
  /**
   * 被拉起的UIExtensionAbility在运行过程中发生异常时触发的回调，不包含与UIExtensionAbility断开连接场景。使用callback异步回调。
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback - 回调函数，入参用于接收异常信息。
   *     <br/>ArkTS-Sta模式下，可传入undefined，表示取消回调函数。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onError(callback: ErrorCallback<BusinessError> | undefined): this;
  /**
   * 被拉起的UIExtensionAbility通过调用terminateSelfWithResult或terminateSelf正常退出时触发此回调。使用callback异步回调。
   *
   * @param { Callback<TerminationInfo> | undefined } callback - 回调函数，入参用于接收UIExtensionAbility的返回结果。
   *     <br/>ArkTS-Sta模式下，可传入undefined，表示取消回调函数。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onTerminated(callback: Callback<TerminationInfo> | undefined): this;
  /**
   * 设置SecurityUIExtensionComponent组件的属性修饰器。
   *
   * @param { AttributeModifier<SecurityUIExtensionComponentAttribute> | undefined } modifier
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  attributeModifier(modifier: AttributeModifier<SecurityUIExtensionComponentAttribute> | undefined): this;
}

/**
 * 创建SecurityUIExtensionComponent组件，用于嵌入显示远程UIExtensionAbility提供的UI。
 *
 * @param { Want } want - 要加载的Ability信息。
 *     通过bundleName和abilityName共同确定被拉起的UIExtensionAbility，
 *     同时需要在parameters中配置ability.want.params.uiExtensionType字段指定UIExtensionAbility的类型，当前仅支持'sysPicker/photoPicker'。
 * @param { SecurityUIExtensionOptions } [options] - 用于构造SecurityUIExtensionComponent的参数。不填时各字段使用默认值。
 * @param { CustomBuilder } [content_] - 容器内容构建器。ArkTS-Sta模式下可传入自定义内容构建器。
 * @returns { SecurityUIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function SecurityUIExtensionComponent(
    want: Want, options?: SecurityUIExtensionOptions, 
    content_?: CustomBuilder,
): SecurityUIExtensionComponentAttribute;

/**
 * 定义SecurityUIExtensionComponent组件。
 *
 * @param { CustomBuilderT<SecurityUIExtensionComponentAttribute> } style - 用于设置
 *     SecurityUIExtensionComponent属性的回调。
 * @param { CustomBuilder } [content_] - 容器
 * @returns { SecurityUIExtensionComponentAttribute } SecurityUIExtensionComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function SecurityUIExtensionComponent(
    style: CustomBuilderT<SecurityUIExtensionComponentAttribute>,
    content_?: CustomBuilder,
): SecurityUIExtensionComponentAttribute;