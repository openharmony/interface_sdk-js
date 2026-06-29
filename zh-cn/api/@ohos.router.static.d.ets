
'use static';
/**
 *
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

/**
 * @namespace router
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
 * @stagemodelonly
 * @since 23 static
 */
declare namespace router {

  /**
   * 路由跳转模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export enum RouterMode {

    /**
     * Default route mode.
     * The page will be added to the top of the page stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Standard = 0,

    /**
     * Single route mode.
     * If the target page already has the same url page in the page stack,
     * the same url page closest to the top of the stack will be moved to the top of the stack.
     * If the target page url does not exist in the page stack, route will use default route mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Single = 1
  }

  /** @syscap SystemCapability.ArkUI.ArkUI.Lite @since 23 static/
  interface RouterOptions {

    /**
     * 表示目标页面的url，可以用以下两种格式：
     * -?页面绝对路径，由配置文件中pages列表提供，例如：
     * ??-?pages/index/index
     * ??-?pages/detail/detail
     * -?特殊值，如果url的值是"/"，则跳转到首页，首页默认为页面跳转配置项src数组的第一个数据项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 23 static
     */
    url: string;

    /**
     * 表示路由跳转时要同时传递到目标页面的数据，切换到其他页面时，当前接收的数据失效。跳转到目标页面后，使用router.getParams()获取传递的参数，此外，在类web范式中，参数也可以在页面中直接使用，如
     * this.keyValue(keyValue为跳转时params参数中的key值)，如果目标页面中已有该字段，则其值会被传入的字段值覆盖。
     * **说明：**
     * params参数只能传递可序列化的参数，不能传递方法和系统接口返回的对象（例如，媒体接口定义和返回的PixelMap对象）。建议开发者提取系统接口返回的对象中需要被传递的基础类型属性，自行构造object类型对象进行传递。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @stagemodelonly
     * @since 23 static
     */
    params?: Object;

    /**
     * 表示对应的页面是否可恢复，默认为true。当为true时，表示可恢复，当为false时，表示不可恢复。
     * **说明：**
     * 当应用退到后台，并且在未来的某个时间点，由于系统资源限制等原因被系统杀死，如果某个页面被设置成可恢复，那么该应用再次被拉到前台后系统可以恢复出页面，详细说明请参考
     * [UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 23 static
     */
    recoverable?: boolean;
  }

  /** @syscap SystemCapability.ArkUI.ArkUI.Full @stagemodelonly @since 23 static/
  interface RouterState {

    /**
     * 表示当前页面在页面栈中的索引。从栈底到栈顶，index从1开始递增。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;

    /**
     * 表示当前页面的名称，即对应文件名。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * 表示当前页面的路径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    path: string;

    /**
     * 表示当前页面携带的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    params: Object;
  }

  /** @syscap SystemCapability.ArkUI.ArkUI.Full @stagemodelonly @since 23 static/
  interface EnableAlertOptions {

    /**
     * 询问对话框内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    message: string;
  }

  /** @syscap SystemCapability.ArkUI.ArkUI.Full @stagemodelonly @since 23 static/
  interface NamedRouterOptions {

    /**
     * 表示目标命名路由页面的name。
     * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * 表示路由跳转时要同时传递到目标页面的数据。跳转到目标页面后，使用router.getParams()获取传递的参数，此外，在类web范式中，参数也可以在页面中直接使用，如this.keyValue(keyValue为跳转时
     * params参数中的key值)，如果目标页面中已有该字段，则其值会被传入的字段值覆盖。
     * **说明：**
     * params参数不能传递方法和系统接口返回的对象（例如，媒体接口定义和返回的PixelMap对象）。建议开发者提取系统接口返回的对象中需要被传递的基础类型属性，自行构造object类型对象进行传递。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    params?: Object;

    /**
     * 表示对应的页面是否可恢复，默认为true。当为true时，表示可恢复，当为false时，表示不可恢复。
     * **说明：**
     * 当应用退到后台，并且在未来的某个时间点，由于系统资源限制等原因被系统杀死，如果某个页面被设置成可恢复，那么该应用再次被拉到前台后系统可以恢复出页面，详细说明请参考
     * [UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 23 static
     */
    recoverable?: boolean;
  }
}

export default router;