/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file formInfo
 * @kit FormKit
 */

import Want from './@ohos.app.ability.Want';

/**
 * formInfo模块提供了卡片信息和状态等相关类型和枚举。
 * 
 * > **说明：**
 * >
 * > 当前页面仅包含本模块的系统接口，其他公共接口参见[@ohos.app.form.formInfo (formInfo)]{@link formInfo}。
 *
 * @syscap SystemCapability.Ability.Form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace formInfo {

  /**
   * 卡片配置信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface FormInfo {
    /**
     * 卡片所属包的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 卡片所属模块的模块名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * 卡片所属的Ability名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 卡片名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 卡片展示名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    displayName: string;

    /**
     * 卡片预览时标识卡片名称的ID。 
     * 
     * **说明：** 数值为大于0小于2^32的整数。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    displayNameId: int;

    /**
     * 卡片描述。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * 卡片描述ID。 
     * 
     * **说明：** 数值为大于0小于2^32的整数。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    descriptionId: int;

    /**
     * 卡片类型。当前支持JS卡片、ArkTS卡片。
     * 
     * **说明：** 当卡片类型为JS时，isDynamic强制为true，transparencyEnabled不生效，jsComponentName为必填项。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    type: FormType;

    /**
     * JS卡片的组件名，仅当卡片类型为JS时有效。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    jsComponentName: string;

    /**
     * 卡片颜色模式。 
     * 
     * **说明：** 
     * 
     * 从API version 9开始支持，从API version 20开始废弃。无替代接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    colorMode: ColorMode;

    /**
     * 卡片是否是默认卡片。
     * 
     * - true：默认卡片。
     * 
     * - false：非默认卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    isDefault: boolean;

    /**
     * 卡片是否使能更新。
     * 
     * - true：表示支持周期性刷新。
     * 
     * - false：表示不支持周期性刷新。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    updateEnabled: boolean;

    /**
     * 卡片是否使能可见通知。
     * 
     * - true：通知卡片提供方可见状态变化。
     * 
     * - false：不通知卡片提供方可见状态变化。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    formVisibleNotify: boolean;

    /**
     * 卡片更新时间。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scheduledUpdateTime: string;

    /**
     * 卡片配置Ability。指定长按卡片弹出的选择框内，编辑选项所对应的Ability。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    formConfigAbility: string;

    /**
     * 卡片更新周期。 
     * 
     * **说明：** 数值为[0, 336]的整数。超出范围时抛出异常。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    updateDuration: int;

    /**
     * 卡片规格。具体可选规格参考[FormDimension]{@link formInfo.FormDimension}。  
     * 
     * **说明：** 数值为[1, 9]的整数，数值5从API version 9开始支持，从API version 20开始废弃。超出范围时抛出异常。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    defaultDimension: int;

    /**
     * 卡片支持的规格。具体可选规格参考[FormDimension]{@link formInfo.FormDimension}。 
     * 
     * **说明：** 最大长度为9，数值取值范围[1, 9]的整数的数组，数值5从API version 9开始支持，从API version 20开始废弃。超出范围时抛出异常。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    supportDimensions: Array<int>;

    /**
     * 卡片用户数据。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    customizeData: Record<string, string>;

    /**
     * 卡片是否为动态卡片。
     * 
     * 仅ArkTS卡片区分动静态卡片，JS卡片均为动态卡片。
     * 
     * - true：为动态卡片。
     * 
     * - false：为静态卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    isDynamic: boolean;

    /**
     * 卡片是否支持设置背景透明度。
     * 
     * ArkTS卡片由用户配置决定是否支持，JS卡片均不支持。
     * 
     * - true：表示是透明卡片。
     * 
     * - false：表示不是透明卡片。
     *
     * @default false
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    transparencyEnabled: boolean;

    /**
     * 卡片支持的形状。具体可选形状参考[FormShape<sup>12+</sup>]{@link formInfo.FormShape} 
     * 
     * **说明：** 1代表方形，2代表圆形。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    supportedShapes: Array<int>;

    /**
     * 卡片预览图资源ID。
     * 
     * **说明：** 值为正整数的数组。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    readonly previewImages?: Array<int>;

    /**
     * 卡片是否使用模糊背板。
     * 
     * - true：开启模糊背板。
     * 
     * - false：关闭模糊背板。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly enableBlurBackground?: boolean;

    /**
     * 卡片渲染模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly renderingMode?: RenderingMode;
    
    /**
     * 表示是否可以拖拽卡片调整大小。调整值必须在该卡片或者同groupId卡片的supportDimensions配置列表中。
     * 
     * - true：可以调整大小。
     * 
     * - false：不可以调整大小。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly resizable?: boolean;

    /**
     * 表示一组卡片的共同id。多张卡片的groupId相同且resizable为true时，多张卡片的supportDimensions配置共享。例如，卡片A和B的groupId相同且resizable均为true，则卡片A可以调整
     * 为卡片A和B的supportDimensions配置中的任意尺寸。
     * 
     * 推荐多张卡片功能相同且需要调整卡片尺寸时配置。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly groupId?: string;

    /**
     * 趣味交互卡片配置参数。主要配置互动卡片激活态时长等参数。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly funInteractionParams?: FunInteractionParams;

    /**
     * 场景动效卡片配置参数。主要配置互动卡片触发方式和禁用手势等参数。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly sceneAnimationParams?: SceneAnimationParams;

    /**
     * 表示卡片是否是模板卡。
     * 
     * - true：是模板卡。
     * 
     * - false：不是模板卡。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly isTemplateForm?: boolean;

    /**
     * 卡片是否支持在灵动显示界面展示。
     * 
     * - true：支持灵动显示。
     * 
     * - false：不支持灵动显示。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly isStandbySupported?: boolean;

    
    /**
     * 卡片是否已适配灵动显示规则。
     * 
     * - true：已适配灵动显示。
     * 
     * - false：未适配灵动显示。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly isStandbyAdapted?: boolean;

    /**
     * 卡片是否是隐私敏感卡片。
     * 
     * - true：是隐私敏感卡片。
     * 
     * - false：不是隐私敏感卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly isPrivacySensitive?: boolean;

    /**
     * 卡片的字体缩放是否跟随系统，默认值为true。
     * 
     * - true：字体缩放跟随系统。
     * 
     * - false：字体缩放不会跟随系统。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFontScaleFollowSystem?: boolean;
  }

  /**
   * 卡片支持的渲染模式枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum RenderingMode {
    /**
     * 表示自动模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    AUTO_COLOR = 0,
    /**
     * 表示全色模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    FULL_COLOR = 1,
    /**
     * 表示单色模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SINGLE_COLOR = 2
  }

  /**
   * 支持的卡片类型枚举。JS卡片使用Web技术实现，适合简单的展示类卡片；ArkTS卡片使用ArkTS语言开发，支持更丰富的交互和动画效果。开发时应根据卡片复杂度和交互需求选择合适类型。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum FormType {
    /**
     * 卡片类型为JS。使用Web技术开发，功能相对基础，适合简单场景。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    JS = 1,

    /**
     * 卡片类型为ArkTS。使用ArkTS语言开发，支持丰富的交互和动画，适合复杂场景。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    eTS = 2
  }

  /**
   * 卡片主题样式统一跟随系统的颜色模式，卡片支持的颜色模式枚举。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 20开始废弃。无替代接口。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 20
   */
  enum ColorMode {
    /**
     * 表示自动模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    MODE_AUTO = -1,

    /**
     * 表示暗色。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    MODE_DARK = 0,

    /**
     * 表示亮色。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    MODE_LIGHT = 1
  }

  /**
   * 卡片状态信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface FormStateInfo {
    /**
     * 卡片状态，用于标识卡片当前状态（如未知、默认、就绪）。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    formState: FormState;

    /**
     * Want对象，用于承载卡片状态切换时的意图信息。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    want: Want;
  }

  /**
   * 卡片状态枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum FormState {
    /**
     * 表示未知状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * 表示默认状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 表示就绪状态。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    READY = 1
  }

  /**
   * 卡片更新原因枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FormUpdateReason {
    /**
     * 卡片更新的原因未知。
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    UNKNOWN = -1,
    /**
     * 卡片更新的原因是节点复用。
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FORM_NODE_REUSE = 0
  }

  /**
   * 卡片参数枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum FormParam {
    /**
     * 卡片标识。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    IDENTITY_KEY = "ohos.extra.param.key.form_identity",

    /**
     * 卡片规格，规格尺寸参考[FormDimension]{@link formInfo.FormDimension}。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DIMENSION_KEY = "ohos.extra.param.key.form_dimension",

    /**
     * 卡片名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NAME_KEY = "ohos.extra.param.key.form_name",

    /**
     * 卡片所属模块名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MODULE_NAME_KEY = "ohos.extra.param.key.module_name",

    /**
     * 卡片宽度。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_KEY = "ohos.extra.param.key.form_width",

    /**
     * 卡片高度。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    HEIGHT_KEY = "ohos.extra.param.key.form_height",

    /**
     * 临时卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TEMPORARY_KEY = "ohos.extra.param.key.form_temporary",

    /**
     * Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    BUNDLE_NAME_KEY = "ohos.extra.param.key.bundle_name",

    /**
     * Ability名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ABILITY_NAME_KEY = "ohos.extra.param.key.ability_name",

    /**
     * 主题标识。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    THEME_KEY = 'ohos.extra.param.key.form_is_theme',

    /**
     * 设备标识。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE_ID_KEY = "ohos.extra.param.key.device_id",

    /**
     * 卡片创建原因。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    LAUNCH_REASON_KEY = "ohos.extra.param.key.form_launch_reason",

    /**
     * 自定义数据。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    PARAM_FORM_CUSTOMIZE_KEY = "ohos.extra.param.key.form_customize",

    /**
     * 卡片位置。 具体可选位置参考[FormLocation]{@link formInfo.FormLocation}。
     *
     * @syscap SystemCapability.Ability.Form
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_LOCATION_KEY = 'ohos.extra.param.key.form_location',

    /**
     * 卡片渲染模式。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FORM_RENDERING_MODE_KEY = 'ohos.extra.param.key.form_rendering_mode',

    /**
     * 卡片使用方的背景反色颜色值。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    HOST_BG_INVERSE_COLOR_KEY = 'ohos.extra.param.key.host_bg_inverse_color',

    /**
     * 用户授权权限名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_PERMISSION_NAME_KEY = 'ohos.extra.param.key.permission_name',

    /**
     * 用户是否授权。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_PERMISSION_GRANTED_KEY = 'ohos.extra.param.key.permission_granted',

    /**
     * 用groupId关联的一组卡片，在调整大小时，会先创建新尺寸的卡片，再删除旧尺寸的卡片。新尺寸卡片创建时want参数会通过该key传递旧尺寸卡片的卡片id。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ORIGINAL_FORM_KEY = 'ohos.extra.param.key.original_form_id',

    /**
     * 在半模态页面的卡片编辑中，通过onAddForm回调函数传递该key表示被编辑的卡片id，用来确保预览卡片与被编辑卡片信息同步。如果卡片onAddForm回调函数中携带了该key，则说明当前卡片为半模态页面中的预览卡片，需要基
     * 于被编辑卡片来筛选预览卡片内容。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    EDIT_FORM_KEY = 'ohos.extra.param.key.edit_form_id',

    /**
     * 打开卡片管理页是否只显示特定单张卡片 
     * 
     * - true：表示只显示特定单张卡片。
     * 
     * - false：表示显示所有卡片。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    FORM_MANAGER_SHOW_SINGLE_FORM = 'ohos.extra.param.key.form_manager_show_single_form',

    /**
     * 模板卡片id。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DETAIL_ID = 'ohos.extra.param.key.template_form_detail_id',
      
    /**
     * 模板卡片数据。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DATA = 'ohos.extra.param.key.template_form_data',

    /**
     * 模板卡片显示名称。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DISPLAY_NAME = 'ohos.extra.param.key.template_form_display_name',
    
    /**
     * 模板卡片描述。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DESCRIPTION = 'ohos.extra.param.key.template_form_description',

    /**
     * Indicates the key specifying the reason for the form update.
     * which is represented as
     * want: {
     *   "parameters": {
     *       UPDATE_FORM_REASON_KEY: FormUpdateReason.FORM_NODE_REUSE
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    UPDATE_FORM_REASON_KEY = 'ohos.extra.param.key.update_form_reason',

    /**
     * 卡片字体大小缩放键值。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FORM_FONT_SIZE_SCALE_KEY = 'ohos.extra.param.key.form_font_size_scale',

    /**
     * 卡片字重缩放键值。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FORM_FONT_WEIGHT_SCALE_KEY = 'ohos.extra.param.key.form_font_weight_scale'
  }

  /**
   * 卡片信息过滤器，仅将符合过滤器内要求的卡片信息返回。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface FormInfoFilter {
    /**
     * 选填，仅保留含bundleName与提供值相符的卡片信息，未填写时则不通过bundleName进行过滤。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * optional moduleName that used to ask getFormsInfo to return
     * form infos with the same moduleName.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moduleName?: string;

    /**
     * 选填，仅保留含supportedDimensions提供值相符的卡片信息，未填写时则不通过supportedDimensions进行过滤。
     * 
     * **系统接口：** 此接口为系统接口。
     * 
     * **说明：** 最大长度为9，数值取值范围[1, 9]的整数的数组，数值5从API version 9开始支持，从API version 20开始废弃。
     * 
     * 具体规格参考 [formInfo.FormDimension]{@link formInfo.FormDimension}。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    supportedDimensions?: Array<int>;

    /**
     * 选填，仅保留含supportedShapes提供值相符的卡片信息，未填写时则不通过supportedShapes进行过滤。
     * 
     * **系统接口：** 此接口为系统接口。
     * 
     * **说明：** 只有1和2两个值。1代表方形，2代表圆形。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    supportedShapes?: Array<int>;
  }

  /**
   * 定义卡片尺寸枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum FormDimension {
    /**
     * 1 x 2 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    Dimension_1_2 = 1,

    /**
     * 2 x 2 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    Dimension_2_2 = 2,

    /**
     * 2 x 4 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    Dimension_2_4 = 3,

    /**
     * 4 x 4 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    Dimension_4_4 = 4,

    /**
     * 2 x 1 form。
     * 
     * **说明：** 该字段从API version 9开始支持，从API version 20开始废弃。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    Dimension_2_1,

    /**
     * 1 x 1 form。
     * 
     * **说明：** 该尺寸仅在锁屏卡片上生效。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DIMENSION_1_1 = 6,

    /**
     * 6 x 4 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DIMENSION_6_4 = 7,

    /**
     * 2 x 3 form。
     * 
     * 该字段仅在Wearable上生效，在其他设备类型中无效果。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DIMENSION_2_3 = 8,

    /**
     * 3 x 3 form。
     * 
     * 该字段仅在Wearable上生效，在其他设备类型中无效果。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DIMENSION_3_3 = 9
  }

  /**
   * 定义卡片形状枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum FormShape {
    /**
     * 矩形 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RECT = 1,

    /**
     * 圆形 form。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CIRCLE = 2
  }

  /**
   * 卡片当前可见类型枚举。表示卡片在宿主界面上的可见状态，当卡片从桌面移入/移出屏幕或切换应用时状态会发生变化，开发者可据此优化卡片刷新策略。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum VisibilityType {
    /**
     * 表示卡片为未知。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,
    /**
     * 表示卡片为可见。卡片在前台显示，会正常接收更新和可见性通知。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FORM_VISIBLE = 1,
    /**
     * 表示卡片为不可见。卡片不在前台显示，系统可能暂停更新以节省资源。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FORM_INVISIBLE = 2
  }

  /**
   * 卡片创建原因枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum LaunchReason {
    /**
     * 表示卡片创建原因为默认创建。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    FORM_DEFAULT = 1,
    /**
     * 表示卡片创建原因为共享创建。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    FORM_SHARE = 2,
    /**
     * 表示卡片创建原因为尺寸变化。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FORM_SIZE_CHANGE = 3,
  }

  /**
   * 发布卡片加桌结果。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface PublishFormResult {
    /**
     * 发布卡片加桌错误码。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    code: PublishFormErrorCode;

    /**
     * 设置卡片加桌结果返回信息。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * 发布卡片加桌错误码枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum PublishFormErrorCode {
    /**
     * 表示卡片加桌成功。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * 表示没有空间添加卡片。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NO_SPACE = 1,

    /**
     * 表示参数检查失败。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PARAM_ERROR = 2,

    /**
     * 表示卡片处理过程中出现内部错误。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    INTERNAL_ERROR = 3,
    /**
     * Indicates that the host does not support the form dimension.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    NOT_SUPPORT = 4
  }

  /**
   * Information about a running form.
   *
   * @typedef FormProviderFilter
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface FormProviderFilter {
    /**
     * Obtains the bundle name of the provider application.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Obtains the form name of the provider application form.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    formName ?: string;

    /**
     * Obtains the module name of the provider application module.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    moduleName ?: string;

    /**
     * Obtains the ability name of the provider application module.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    abilityName ?: string;

    /**
     * Indicates whether to include unused form.
     *
     * @default false
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    isUnusedIncluded?: boolean;
  }

  /**
   * 已经添加到桌面的卡片信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi [since 10 - 19]
   * @publicapi [since 20]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  interface RunningFormInfo {
    /**
     * 卡片唯一标识，用于识别和管理已添加到桌面的卡片实例。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 10 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly formId: string;

    /**
     * 卡片提供方所属包的Bundle名称，用于定位卡片提供方应用。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 10 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * 使用方卡片所属包的Bundle名称。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    readonly hostBundleName: string;

    /**
     * 卡片位置信息，用于标识卡片当前所在的位置（如桌面、卡片中心等）。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly formLocation: FormLocation;

    /**
     * 卡片当前可见类型枚举。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    readonly visibilityType: VisibilityType;

    /**
     * 卡片所属模块的名称，用于定位卡片提供方的具体模块。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 10 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * 卡片所属的Ability名称，用于定位卡片提供方的具体Ability组件。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 10 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * 卡片名称，用于标识和区分同一模块中的不同卡片。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 10 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly formName: string;

    /**
     * 卡片尺寸，用于标识卡片的大小规格。取值及其对应含义请参考[FormDimension]{@link formInfo.FormDimension}。
     * 
     * **说明：** 取值范围[1, 9]的整数，数值5从API version 9开始支持，从API version 20开始废弃。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 10 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly dimension: int;

    /**
     * 卡片当前使用状态枚举。默认值为FormUsageState.USED
     *
     * @default FormUsageState.USED
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly formUsageState: FormUsageState;

    /**
     * 提供方卡片配置文件中的描述信息。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly formDescription: string;

    /**
     * 卡片的额外数据。
     *
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly extraData?: Record<string, Object>;
  }

  /**
   * 卡片当前使用状态枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum FormUsageState {
    /**
     * 表示卡片在使用中。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    USED = 0,
    /**
     * 表示卡片未被使用。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UNUSED = 1
  }

  /**
   * 卡片当前位置枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @atomicservice [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FormLocation {
    /**
     * 表示卡片位于其他位置。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OTHER = -1,

    /**
     * 表示卡片位于桌面。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DESKTOP = 0,

    /**
     * 表示卡片位于桌面的卡片中心。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_CENTER = 1,

    /**
     * 表示卡片位于桌面的卡片管理器。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_MANAGER = 2,

    /**
     * 表示卡片位于负一屏。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    NEGATIVE_SCREEN = 3,

    /**
     * 表示卡片位于负一屏的服务中心。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_CENTER_NEGATIVE_SCREEN = 4,

    /**
     * 表示卡片位于负一屏的卡片管理器。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_MANAGER_NEGATIVE_SCREEN = 5,

    /**
     * 表示卡片位于锁屏。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    SCREEN_LOCK = 6,

    /**
     * 表示卡片位于AI智慧助手推荐区。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    AI_SUGGESTION = 7,

    /**
     * 表示卡片位于灵动显示界面。
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    STANDBY = 8
  }

  /**
   * 互动卡片动效信息。
   *
   * @typedef { OverflowInfo }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface OverflowInfo {
    /**
     * 描述互动卡片动效区域范围，以卡片左上角为原点。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    area: Rect;

    /**
     * 互动卡片动效持续时长，单位ms。取值为大于0的整数，<!--Del-->针对三方应用，<!--DelEnd-->取值要求不大于3500<!--Del-->，系统应用无此限制<!--DelEnd-->。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    duration: int;

    /**
     * 互动卡片状态切换时是否启动系统提供的默认动效，默认为true。
     * 
     * - true：表示系统提供默认切换动效。
     * 
     * - false：表示系统不提供切换动效，画面直接切换，适合切换时非激活态和激活态UI完全一致的场景。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    useDefaultAnimation?: boolean;
  }

  /**
   * 通用矩形区域信息。可用于描述卡片坐标区域、互动卡片动效区域等信息。
   *
   * @typedef Rect
   * @syscap SystemCapability.Ability.Form
   * @atomicservice 
   * @since 20 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * 描述矩形的左上角顶点的 x 坐标，单位：vp，用于定位卡片区域的位置。范围参考
     * [请求参数约束](docroot://form/arkts-ui-liveform-sceneanimation-development.md#请求参数约束)。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    left: double;
    /**
     * 描述矩形的左上角顶点的 y 坐标，单位：vp，用于定位卡片区域的位置。范围参考
     * [请求参数约束](docroot://form/arkts-ui-liveform-sceneanimation-development.md#请求参数约束)。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    top: double;
    /**
     * 描述矩形的宽度，单位：vp，用于定义卡片区域的尺寸。范围参考[请求参数约束](docroot://form/arkts-ui-liveform-sceneanimation-development.md#请求参数约束)。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    width: double;
    /**
     * 描述矩形的高度，单位：vp，用于定义卡片区域的尺寸。范围参考[请求参数约束](docroot://form/arkts-ui-liveform-sceneanimation-development.md#请求参数约束)。
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    height: double;
  }

  /**
   * 趣味交互卡片配置参数。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface FunInteractionParams {
    /**
     * 趣味交互场景 extensionAbility 名称，默认为空。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;

    /**
     * 趣味交互场景
     * [主包包名](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-independent-subpackage-0000002076341729)。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    targetBundleName: string;

    /**
     * 趣味交互场景
     * [独立分包名](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-independent-subpackage-0000002076341729)。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    subBundleName: string;
    /**
     * 趣味交互场景无交互时，激活态保持时长。默认值为10000，单位ms。取值为(0,60000]的整数，超过取值范围则取最大值60000。
     * 
     * **说明：** 在API版本26.0.0之前该字段为(0,10000]的整数，超过取值范围则取默认值10000。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    keepStateDuration?: int;
  }

  /**
   * 场景动效卡片配置参数。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface SceneAnimationParams {

    /**
     * 场景动效 extensionAbility 名称，如卡片提供方LiveFormExtensionAbility名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 支持的取值包括SWIPE_DESKTOP（滑动桌面）、PULL_DOWN_SEARCH（下拉全搜）、LONG_CLICK（长按）、DRAG（拖动）。可以取值一个或多个，不同行为通过 | 拼接，例如SWIPE_DESKTOP|
     * PULL_DOWN_SEARCH。缺省表示不禁用任何行为。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    disabledDesktopBehaviors?: string;

    /**
      * 场景动效卡片触发类型。
      *
      * @syscap SystemCapability.Ability.Form
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     triggerTypes?: Array<SceneAnimationTriggerType>;
  }
  
  /**
   * 互动卡片动效请求信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface OverflowRequest {
    /**
     * 卡片id。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    formId: string;

    /**
     * 动效请求类型标记，true 表示互动卡片请求触发动效，false 表示互动卡片请求取消动效。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isOverflow: boolean;

    /**
     * 动效请求参数信息，包括动效时长（单位：ms）和动效区域（动效区域范围以卡片左上角为原点，单位为vp），默认值为空。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    overflowInfo?: OverflowInfo;
  }

  /**
   * 互动卡片状态切换请求信息。互动卡片状态分为激活态和非激活态，非激活态下，互动卡片同普通卡片一致；激活态下，互动卡片支持拉起卡片提供方所开发的LiveFormExtensionAbility进程，实现互动卡片动效。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChangeSceneAnimationStateRequest {
    /**
     * 卡片id。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    formId: string;

    /**
     * 状态切换请求类型标记：1 表示请求切换为激活态，0 表示请求切换为非激活态。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    state: int;
  }

  /**
   * 卡片位置、尺寸查询回调。使用Promise异步回调。
   *
   * @param { string } formId - 卡片Id。
   * @returns { Promise<formInfo.Rect> } Promise对象，返回卡片相对屏幕左上角的位置信息和卡片尺寸信息。
   * @throws { BusinessError } 202 - The application must be system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type GetFormRectInfoCallback = (formId: string) => Promise<formInfo.Rect>;

  /**
   * Get live form status info callback
   *
   * @typedef { function } GetLiveFormStatusCallback
   * @returns { Record<string, string> } form status info, the key is formId, value is one of "INACTIVE" "PAUSE" "ACTIVE".
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type GetLiveFormStatusCallback = () => Record<string, string>;

  /**
   * 模板卡对应的真实卡片信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface TemplateFormDetailInfo {  
    /**
     * 卡片所属包的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName: string;

    /**
     * 卡片所属模块的名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    moduleName: string;

    /**
     * 卡片所属的Ability名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    abilityName: string;

    /**
     * 卡片名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    formName: string;

    /**
     * 卡片规格
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dimension: FormDimension;

    /**
     * 卡片信息id
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    detailId: string;

    /**
     * 卡片展示名称
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayName: string;

    /**
     * 卡片描述
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    description: string;
  }

  /**
   * 模板卡真实卡片信息回调。
   *
   * @param { Array<TemplateFormDetailInfo> } info - 模板卡真实卡片信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type TemplateFormDetailInfoCallback = (info: Array<TemplateFormDetailInfo>) => void;

  /**
   * 跨应用加卡管控信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PublishFormCrossBundleInfo {  
    /**
     * 跨应用加卡拉起方的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    callerBundleName: string;

    /**
     * 跨应用加卡被拉起方的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    targetBundleName: string;

    /**
     * 被添加的真实卡片信息id
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    targetTemplateFormDetailId: string;
  }

  /**
   * 跨应用加卡管控回调。
   *
   * @param { PublishFormCrossBundleInfo } info - 跨应用加卡管控信息。
   * @returns { boolean } 跨应用加卡管控结果。<br/>- true：表示管控通过。<br/>- false：表示管控未通过。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type PublishFormCrossBundleControlCallback = (info: PublishFormCrossBundleInfo) => boolean;

  /**
   * 场景动效卡片触发类型枚举。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum SceneAnimationTriggerType {
    /**
     * 摇一摇。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SHAKE = 1
  }

  /**
   * 获取卡片参数回调。
   *
   * @param { Array<formInfo.FormInfo> } formInfo - 卡片信息列表。
   * @returns { Array<Record<string, Object>> } 返回卡片参数列表，与输入的卡片信息列表一一对应。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type GetWantParamsCallback = (formInfo: Array<formInfo.FormInfo>) => Array<Record<string, Object>>;

  /**
   * 卡片自定义配置信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FormCustomConfig {  
    /**
     * 卡片所属包的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;
    /**
     * 卡片所属模块的名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    moduleName: string;
    /**
     * 卡片所属的Ability名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    abilityName: string;
    /**
     * 卡片名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    formName: string;
    /**
     * 卡片是否在卡片中心展示。
     * 
     * - true：在卡片中心展示。
     * 
     * - false：不在卡片中心展示。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isShowInFormCenter: boolean;
    /**
     * 关联的Bundle名称。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    relatedBundleName: string;
    /**
     * 卡片是否支持重复添加。
     * 
     * - true：支持重复添加。
     * 
     * - false：不支持重复添加。
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRepeatAdditionSupported: boolean;
  }

  /**
   * 卡片配置更新回调。
   *
   * @param { Array<FormCustomConfig> } configInfo - 卡片配置信息列表。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type UpdateFormsConfigCallback = (configInfo: Array<FormCustomConfig>) => void;

  /**
   * 卡片删除回调。
   *
   * @param { Array<string> } formIds - 被删除的卡片标识列表。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type DeleteFormsCallback = (formIds: Array<string>) => void;
}
export default formInfo;