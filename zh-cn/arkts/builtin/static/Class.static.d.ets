'use static';
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
 * @file
 * @kit ArkTS
 */

/**
 * 用于描述运行时类型的类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Class {
    /**
     * 获取类在程序集中的名称。
     *
     * @returns { string } 类名。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getName(): string;

    /**
     * 获取类的父类。
     *
     * @returns { Class | undefined } 父类。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getSuper(): Class | undefined;

    /**
     * 判断当前类是否为另一个类的子类型。
     *
     * @param { Class } other - 用于比较的类。
     * @returns { boolean } 如果当前类是另一个类的子类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isSubtypeOf(other: Class): boolean;

    /**
     * 获取与当前类关联的运行时链接器。
     *
     * @returns { RuntimeLinker } 该类对应的运行时链接器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getLinker(): RuntimeLinker;

    /**
     * 如果当前类是定长数组，则获取其元素类型。
     *
     * @returns { Class | undefined } 定长数组的元素类型；如果当前类不是
     *     定长数组，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getFixedArrayComponentType(): Class | undefined;

    /**
     * 获取当前类实现的接口。
     *
     * @returns { FixedArray<Class> } 该类所实现接口组成的定长数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getInterfaces(): FixedArray<Class>;

    /**
     * 如果类尚未初始化，则调用一次类初始化器。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    initialize(): void;

    /**
     * 获取任意类型对象的类。
     *
     * @param { Any } obj - 待获取类信息的对象。
     * @returns { Class | undefined } 该对象的类；如果该对象不是类实例，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static ofAny(obj: Any): Class | undefined;

    /**
     * 获取对象的类。
     *
     * @param { Object | null } obj - 待获取类信息的对象。
     * @returns { Class } 该对象的类。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static of(obj: Object | null): Class;

    /**
     * 获取对象的类。
     *
     * @returns { Class } 该对象的类。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static from<T>(): Class;
    
    /**
     * 获取当前类。
     *
     * @returns { Class } 当前类。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static current(): Class;

    /**
     * 获取调用者的类。
     *
     * @returns { Class | undefined } 调用者的类；如果不存在调用者的托管栈帧，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static ofCaller(): Class | undefined;

    /**
     * 创建当前类的新实例，并调用其无参构造函数。
     *
     * @returns { Object } 该类的新实例。
     * @throws { Error } 当该类不可实例化或没有默认构造函数时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    createInstance(): Object;
    
    /**
     * 获取描述信息。
     *
     * @returns { string } 描述信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getDescriptor(): string;

    /**
     * 判断当前类是否为枚举。
     *
     * @returns { boolean } 如果当前类是枚举则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isEnum(): boolean;

    /**
     * 判断当前类是否为接口。
     *
     * @returns { boolean } 如果当前类是接口则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isInterface(): boolean;


    /**
     * 判断当前类是否为定长数组。
     *
     * @returns { boolean } 如果当前类是定长数组则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isFixedArray(): boolean;

    /**
     * 判断当前类是否为联合类型。
     *
     * @returns { boolean } 如果当前类是联合类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isUnion(): boolean;

    /**
     * 获取类中声明的实例方法（包含所实现接口的默认方法）。
     *
     * @returns { FixedArray<reflect.InstanceMethod> } 由实例方法组成的定长数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getInstanceMethods(): FixedArray<reflect.InstanceMethod>;

    /**
     * 在类中声明的方法（包含所实现接口的默认方法）中查找指定的
     * 实例方法。
     *
     * @param { string } name - 待查找的方法名。
     * @param { FixedArray<Class> } [signature] - 用于确定方法签名的参数类型数组。
     * @returns { reflect.InstanceMethod | undefined } 查找到的实例方法，未找到时返回undefined。
     * @throws { Error } 当省略签名且存在多个重载时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getInstanceMethod(name: string, signature?: FixedArray<Class>): reflect.InstanceMethod | undefined;

    /**
     * 获取类中声明的静态方法。
     *
     * @returns { FixedArray<reflect.StaticMethod> } 由静态方法组成的定长数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getStaticMethods(): FixedArray<reflect.StaticMethod>;

    /**
     * 在类中声明的方法中查找指定的静态方法。
     *
     * @param { string } name - 待查找的方法名。
     * @param { FixedArray<Class> } [signature] - 用于确定方法签名的参数类型数组。
     * @returns { reflect.StaticMethod | undefined } 查找到的静态方法，未找到时返回undefined。
     * @throws { Error } 当省略签名且存在多个重载时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getStaticMethod(name: string, signature?: FixedArray<Class>): reflect.StaticMethod | undefined;

    /**
     * 获取类中声明的实例字段。
     *
     * @returns { FixedArray<reflect.InstanceField> } 由实例字段组成的定长数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getInstanceFields(): FixedArray<reflect.InstanceField>;

    /**
     * 在当前类声明的字段中按名称查找实例字段。
     *
     * @param { string } name - 待查找的字段名。
     * @returns { reflect.InstanceField | undefined } 查找到的实例字段，未找到时返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getInstanceField(name: string): reflect.InstanceField | undefined;

    /**
     * 获取当前类中声明的静态字段。
     *
     * @returns { FixedArray<reflect.StaticField> } 由静态字段组成的定长数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getStaticFields(): FixedArray<reflect.StaticField>;

    /**
     * 在当前类声明的字段中按名称查找静态字段。
     *
     * @param { string } name - 待查找的字段名。
     * @returns { reflect.StaticField | undefined } 查找到的静态字段，未找到时返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getStaticField(name: string): reflect.StaticField | undefined;

    /**
     * 获取类的所有构造函数。
     *
     * @returns { FixedArray<reflect.Constructor> } 由构造函数组成的定长数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getConstructors(): FixedArray<reflect.Constructor>;

    /**
     * 获取联合类型类的所有组成类型。
     *
     * @returns { FixedArray<Class> | undefined } 由各组成类型构成的定长数组；
     *     如果当前类不是联合类型类，则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getUnionConstituentTypes(): FixedArray<Class> | undefined;

    /**
     * 判断该类是否为final类。
     *
     * @returns { boolean } 如果该类是final类则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isFinal(): boolean;

    /**
     * 判断该类是否为抽象类。
     *
     * @returns { boolean } 如果该类是抽象类则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isAbstract(): boolean;

    /**
     * 判断该类是否对应基本类型。
     *
     * @returns { boolean } 如果该类对应基本类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    isPrimitive(): boolean;

    /**
     * 保存boolean基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_BOOLEAN: Class;

    /**
     * 保存byte基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_BYTE: Class;

    /**
     * 保存char基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_CHAR: Class;

    /**
     * 保存short基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_SHORT: Class;

    /**
     * 保存int基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_INT: Class;

    /**
     * 保存long基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_LONG: Class;

    /**
     * 保存float基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_FLOAT: Class;

    /**
     * 保存double基本类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_DOUBLE: Class;

    /**
     * 保存number基本类型对应的Class对象（与double相同）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_NUMBER: Class;

    /**
     * 保存void类型对应的Class对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly PRIMITIVE_VOID: Class;

    /**
     * 判断当前类是否为命名空间。
     *
     * @returns { boolean } 如果当前类是命名空间则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isNamespace(): boolean;
}
