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
import { InputEvent } from "./@ohos.multimodalInput.inputEvent"
import { KeyCode } from "./@ohos.multimodalInput.keyCode"

/**
* MouseEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
* @permission N/A
*/

export enum Action {
	// 取消
	Cancel = 0,
	// 鼠标关联的轴事件开始
	AxisBegin = 4,
	// 鼠标关联的轴事件更新
	AxisUpdate = 5,
	// 鼠标关联的轴事件结束
	AxisEnd = 6,
}

export enum Axis {
	// 垂直滚动轴
	ScrollVertical = 0,
	// 水平滚动轴
	ScrollHorizontal = 1,
	// 捏合轴
	Pinch = 2,
}

export interface AxisValue {

	// 轴类型
	axis: Axis;
	// 轴的值
	value: number
}

export declare interface MouseEvent extends InputEvent {
	// 轴事件动作
	action: Action;

	// 轴的数据
	axes: AxisValue[],

	// 当前处于按下状态的按键列表
	pressedKeys: KeyCode[],

	// 当前ctrlKey是否处于按下状态
	readonly ctrlKey: boolean

	// 当前altKey是否处于按下状态
	readonly altKey: boolean

	// 当前shiftKey是否处于按下状态
	readonly shiftKey: boolean

	// 当前metaKey是否处于按下状态
	readonly metaKey: boolean

	// 当前fnKey是否处于按下状态
	readonly fnKey: boolean

	// 当前capsLock是否处于激活状态
	capsLock: boolean

	// 当前numLock是否处于激活状态
	numLock: boolean

	// 当前scrollLock是否处于激活状态
	scrollLock: boolean
	
	// 指定按键是否处于按下状态
	isKeyDown(keyCode: KeyCode): boolean
}