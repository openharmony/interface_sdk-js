/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ApiDesigner
 */

/**
 * this interface example testInterface1724916727739
 * @interface testInterface1
 * @syscap system.ability1
 * @since 5
 */
declare interface testInterface1 {
  /**
   * the function example testFunc1724916758997
   * @param { string } userName string param example
   * @syscap system.ability5
   * @since 5
   * @param { string } age age desc
   */
  testMethod1(str: string): void;
}

/**
 * this interface example testInterface1724723220578
 * @interface testInterface4
 * @syscap system.ability
 * @since 5
 */
declare interface testHcInterface4 {
  /**
   * the function example testFunc1724723252039
   * @param { string } userName string param example
   * @syscap system.ability
   * @since 5
   * @param { string } age age desc
   */
  testHcMethod(str: string): void;
}

/**
 * this nameSpace example testNamespace1724729692268
 * @namespace testNamespace3
 * @syscap system.ability
 * @since 5
 */
declare namespace testHcNamespace3 {
  /**
   * the function example testFunc1724729727130
   * @param { string } userName string param example
   * @syscap system.ability
   * @since 5
   * @param { string } age age desc
   */
  function testMethod(str: string): void;
}

/**
 * this interface example testInterface1724814348478
 * @interface testInterface2
 * @syscap system.ability
 * @since 5
 */
declare interface hcTestInterface2 {}

/**
 * this nameSpace example testNamespace172466263204
 * @namespace testNamespace172466263204
 * @syscap system.ability
 * @since 5
 */
declare namespace testNamespace1724662632041 {}

/**
 * this nameSpace example testNamespace1729215187575
 * @namespace testNamespace
 * @syscap system.ability
 * @since 1
 */
declare namespace testNamespace1729215187575 {
  /**
   * the function example testFunc1729215244344
   * @param { string } str string param example
   * @syscap system.ability
   * @since 1
   */
  function testFunc1729215244344(str: string): void;

  /**
   * the function example testFunc1729215246949
   * @param { string } str string param example
   * @syscap system.ability
   * @since 1
   */
  function testFunc1729215246949(str: string): void;
}