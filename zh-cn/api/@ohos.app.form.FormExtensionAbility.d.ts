/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * FormExtensionAbility为卡片扩展模块，提供卡片创建、销毁、刷新等生命周期回调。适用于需要在应用中实现卡片功能的场景，帮助开发者快速构建卡片数据更新机制，提升用户与应用的交互体验。
 * 
 * > **说明：**
 * >
 * > FormExtensionAbility创建后10秒内无操作将会被清理。
 * 
 * ###### 约束限制
 * 
 * 为保障系统安全性和稳定性，防止 FormExtensionAbility 滥用系统资源，系统对其能力进行管控， 不支持以下模块的引用：
 * 
 * - [@ohos.ability.particleAbility (ParticleAbility模块)]{@link @ohos.ability.particleAbility:particleAbility}
 * - [@ohos.multimedia.audio (音频管理)]{@link @ohos.multimedia.audio:audio}
 * - [@ohos.multimedia.camera (相机管理)]{@link @ohos.multimedia.camera:camera}
 * - [@ohos.multimedia.media (媒体服务)]{@link @ohos.multimedia.media:media}
 * - 
 * [@ohos.resourceschedule.backgroundTaskManager (后台任务管理)]{@link @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager}
 *
 * @file FormExtensionAbility
 * @kit FormKit
 */

import formBindingData from './@ohos.app.form.formBindingData';
import formInfo from './@ohos.app.form.formInfo';
import FormExtensionContext from './application/FormExtensionContext';
import Want from './@ohos.app.ability.Want';
import { Configuration } from './@ohos.app.ability.Configuration';

/**
 * Called to return a {@link FormState} object.
 * <p>You must override this callback if you want this ability to return the actual form state. Otherwise,
 * this method returns {@link FormState#DEFAULT} by default.</p>
 *
 * @typedef { function }
 * @param { Want } want - Indicates the description of the form for which the {@link formInfo#FormState}
 *                        is obtained. The description covers the bundle name, ability name, module name,
 *                        form name, and form dimensions.
 * @returns { formInfo.FormState } Returns the {@link formInfo#FormState} object.
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
type OnAcquireFormStateFn = (want: Want) => formInfo.FormState;

/**
 * Called when the system shares the form.
 *
 * @typedef { function }
 * @param { string } formId - Indicates the ID of the form.
 * @returns { Record<string, Object> } Returns the wantParams object.
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type OnShareFormFn = (formId: string) => Record<string, Object>;

/**
 * Called when the system acquire the form data.
 *
 * @typedef { function }
 * @param { string } formId - Indicates the ID of the form.
 * @returns { Record<string, Object> } Returns the wantParams object.
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type OnAcquireFormDataFn = (formId: string) => Record<string, Object>;

/**
 * Called when this ability breaks the last link, notifying the provider that the provider process is about to stop.
 *
 * @typedef { function }
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
type OnStopFn = () => void;

/**
 * 卡片扩展类。包含卡片提供方接收创建卡片、修改可见性等的通知接口。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class FormExtensionAbility {
  /**
   * FormExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  context: FormExtensionContext;

  /**
   * 卡片提供方接收创建卡片的通知接口。需要注意：FormExtensionAbility创建后10秒内无操作将会被清理，请避免在回调中执行耗时操作。
   * 
   * - 必须调用
   * [formBindingData.createFormBindingData()]{@link @ohos.app.form.formBindingData:formBindingData.createFormBindingData}
   * 创建卡片数据对象。
   * - 调用顺序：先创建数据对象（如dataObj1），再调用formBindingData.createFormBindingData(dataObj1)创建FormBindingData对象。
   * - 返回要求：必须返回FormBindingData对象，卡片要显示的数据通过参数传入。
   *
   * @param { Want } want - 当前卡片相关的Want类型信息，其中Want中的parameters为自定义取值，取值可以包含
   *     [卡片参数枚举]{@link @ohos.app.form.formInfo:formInfo.FormParam}中的一个或多个，如卡片ID、卡片名称、卡片样式等。这些卡片信息必须作为持久数据进行管理，以便后续更新和删除
   *     卡片。
   * @returns { formBindingData.FormBindingData } formBindingData.FormBindingData对象，卡片要显示的数据。可通过
   *     [formBindingData.createFormBindingData()]{@link @ohos.app.form.formBindingData:formBindingData.createFormBindingData}
   *     创建。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAddForm(want: Want): formBindingData.FormBindingData;

  /**
   * 卡片提供方收到卡片使用方将临时卡片转常态卡片的通知接口。临时卡片、常态卡片是卡片使用方的概念，其中：临时卡片是短期存在的，在特定事件或用户行为后显示，完成后自动消失。常态卡片具有持久性，在用户主动清除或更改前将一直保留；日常开发的
   * 功能卡片均归属此类。在当前版本，卡片使用方不使用临时卡片。
   *
   * @param { string } formId - 请求转换为常态的卡片标识。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onCastToNormalForm(formId: string): void;

  /**
   * 卡片提供方接收携带参数的更新卡片的通知接口。获取最新数据后调用formProvider的[updateForm]{@link @ohos.app.form.formProvider:formProvider.updateForm}
   * 接口刷新卡片数据。需要传入formId和FormBindingData对象，可通过formBindingData.createFormBindingData()创建数据对象。
   *
   * @param { string } formId - 请求更新的卡片标识。
   * @param { Record<string, Object> } [wantParams] - 更新参数，用于携带卡片更新的额外信息。当需要传递自定义参数更新卡片时传入，不传入时为undefined。支持的参数包括：
   *     ohos.extra.param.key.host_bg_inverse_color（是否启用宿主背景反色）等。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onUpdateForm(formId: string, wantParams?: Record<string, Object>): void;

  /**
   * 卡片提供方接收修改可见性的通知接口。当卡片在桌面上的可见性发生变化（如卡片被遮挡、移出屏幕等）时，会触发此回调。开发者可以在此优化卡片的资源占用或暂停不必要的更新操作，并通过formProvider.updateForm()更新卡
   * 片数据。仅当FormExtensionAbility存活时才会触发此回调。该接口仅对系统应用生效，且需要将formVisibleNotify配置为true。
   *
   * @param { object } newStatus - 请求修改的卡片标识和可见状态。
   *     <br>**说明：** number参数是取值范围[0, 2]的整数，0是未知类型，1是可见状态，2是不可见状态。超出范围的值无效，不产生任何效果。该接口仅对系统应用生效，且需要将formVisibleNotify配置为
   *     true。
   *     <br>详细参考 [formInfo.VisibilityType]{@link @ohos.app.form.formInfo:formInfo.VisibilityType} [since 9 - 10]
   * @param { Record<string, int> } newStatus - 请求修改的卡片标识和可见状态。
   *     <br>**说明：** number参数是取值范围[0, 2]的整数，0是未知类型，1是可见状态，2是不可见状态。超出范围的值无效，不产生任何效果。该接口仅对系统应用生效，且需要将formVisibleNotify配置为
   *     true。
   *     <br>详细参考 [formInfo.VisibilityType]{@link @ohos.app.form.formInfo:formInfo.VisibilityType} [since 11]
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onChangeFormVisibility(newStatus: Record<string, int>): void;

  /**
   * 卡片提供方接收处理卡片事件的通知接口，例如卡片使用方触发的自定义事件。
   *
   * @param { string } formId - 请求触发事件的卡片标识。
   * @param { string } message - 事件消息，用于传递卡片事件的具体信息。消息内容由开发者自定义，通常为JSON格式字符串或特定标识符，用于标识事件类型或传递事件数据。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onFormEvent(formId: string, message: string): void;

  /**
   * 卡片提供方接收销毁卡片的通知接口。
   *
   * @param { string } formId - 请求销毁的卡片标识。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onRemoveForm(formId: string): void;

  /**
   * 当系统配置项变更时调用，仅当FormExtensionAbility存活时才会触发onConfigurationUpdate回调。<!--Del-->此外，从API version 20开始，对于系统应用，当系统语言发生变更时会拉
   * 起FormExtensionAbility再触发onConfigurationUpdate回调。<!--DelEnd-->
   *
   * @param { Configuration } newConfig - 表示需要更新的配置信息。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onConfigurationUpdate(newConfig: Configuration): void;

  /**
   * 卡片提供方接收查询卡片状态通知接口。当卡片使用方（如桌面）需要获取卡片当前状态（如卡片是否可用、是否需要更新等）时，会调用此方法，该方法可重写。默认返回卡片初始状态（该方法可以选择性重写）。
   *
   * @param { Want } want - want表示获取卡片状态的描述。描述包括Bundle名称、能力名称、模块名称、卡片名称等。
   * @returns { formInfo.FormState } formInfo.FormState枚举，表示卡片当前的状态。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onAcquireFormState?(want: Want): formInfo.FormState;

  /**
   * Called to return a {@link FormState} object.
   * 
   * <p>You must override this callback if you want this ability to return the actual form state. Otherwise,
   * this method returns {@link FormState#DEFAULT} by default.</p>
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
   onAcquireFormState?: OnAcquireFormStateFn;

  /**
   * Called when the system shares the form.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @returns { object } Returns the wantParams object. [since 9 - 10]
   * @returns { Record<string, Object> } Returns the wantParams object. [since 11]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  onShareForm?(formId: string): Record<string, Object>;

  /**
   * Called when the system shares the form.
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onShareForm?: OnShareFormFn;

  /**
   * Called when the system acquire the form data.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @returns { object } Returns the wantParams object. [since 10 - 10]
   * @returns { Record<string, Object> } Returns the wantParams object. [since 11]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onAcquireFormData?(formId: string): Record<string, Object>;

  /**
   * Called when the system acquire the form data.
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onAcquireFormData?: OnAcquireFormDataFn;

  /**
   * 当卡片提供方的卡片进程退出时，触发该回调。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onStop?(): void;

  /**
   * Called when this ability breaks the last link, notifying the provider that the provider process is about to stop.
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  onStop?: OnStopFn;

  /**
   * 当卡片大小发生变化时（如用户调整卡片尺寸），触发该回调。
   *
   * @param { string } formId - 发生大小变化的卡片标识。
   * @param { formInfo.FormDimension } newDimension - 卡片尺寸，例如 Dimension_1_2，表示 1 x 2 卡片。
   * @param { formInfo.Rect } newRect - 卡片位置信息，包括卡片左上角顶点的xy坐标和卡片的宽高。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onSizeChanged(formId: string, newDimension: formInfo.FormDimension, newRect: formInfo.Rect): void;
  
  /**
   * 当卡片位置发生变化时，触发该回调。开发者可以根据新的位置信息调整卡片的展示或预加载相关内容。
   *
   * @param { string } formId - 发生位置变化的卡片标识。
   * @param { formInfo.FormLocation } newFormLocation - 卡片最新位置的枚举值，表示卡片当前所在的位置（如桌面、卡片中心等）。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onFormLocationChanged(formId: string, newFormLocation: formInfo.FormLocation): void;
}
export default FormExtensionAbility;