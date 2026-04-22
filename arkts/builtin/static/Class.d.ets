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
 * Class used to describe runtime types
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
class Class {
    /**
     * Get the name of a class in assembly
     *
     * @returns { string } return class name
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getName(): string;

    /**
     * Get the super class of a class
     *
     * @returns { Class | undefined } return the super class
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getSuper(): Class | undefined;

    /**
     * Check if this class is a subtype of another class.
     *
     * @param { Class } other - The class to check against.
     * @returns { boolean } Returns true if this class is a subtype of the other class, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isSubtypeOf(other: Class): boolean;

    /**
     * Get the runtime linker associated with this class.
     *
     * @returns { RuntimeLinker } the runtime linker for this class
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getLinker(): RuntimeLinker;

    /**
     * Get the component type of this class if it is a fixed array.
     *
     * @returns { Class | undefined } the component type of the fixed array, or undefined if this class is not a fixed array.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getFixedArrayComponentType(): Class | undefined;

    /**
     * Get the interfaces implemented by this class.
     *
     * @returns { FixedArray<Class> } a fixed array of interfaces implemented by the class.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getInterfaces(): FixedArray<Class>;

    /**
     * Invoke class initializer once if class is not initialized.
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    initialize(): void;

    /**
     * Get the class of an object of any type.
     *
     * @param { Any } obj - The object to get the class from.
     * @returns { Class | undefined } the class of the object, or undefined if the object is not a class instance.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static ofAny(obj: Any): Class | undefined;

    /**
     * Get the class of an object.
     *
     * @param { Object | null } obj - The object to get the class from.
     * @returns { Class } the class of the object.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static of(obj: Object | null): Class;

    /**
     * Get the class of an object.
     *
     * @returns { Class } the class of the object.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static from<T>(): Class;
    
    /**
     * Get current class.
     *
     * @returns { Class } the current class.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static current(): Class;

    /**
     * Get class of caller.
     *
     * @returns { Class | undefined } the class of the caller, or undefined if there is no caller managed frame.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static ofCaller(): Class | undefined;

    /**
     * Create a new instance of this class and invokes its parameterless constructor.
     *
     * @returns { Object } a new instance of this class.
     * @throws { Error } if - the class is not instantiable or does not have a default constructor.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    createInstance(): Object;
    
    /**
     * Get the description.
     *
     * @returns { string } a desceription.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getDescriptor(): string;

    /**
     * Check if this class is an enum.
     *
     * @returns { boolean } true if this class is an enum, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isEnum(): boolean;

    /**
     * Check if this class is an interface.
     *
     * @returns { boolean } true if this class is an interface, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isInterface(): boolean;


    /**
     * Check if this class is a fixed array.
     *
     * @returns { boolean } true if this class is a fixed array, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isFixedArray(): boolean;

    /**
     * Check if this class is a union type.
     *
     * @returns { boolean } true if this class is a union type, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isUnion(): boolean;

    /**
     * Get instance methods (including default methods from implemented interfaces) declared in the class.
     *
     * @returns { FixedArray<reflect.InstanceMethod> } a fixed array of instance methods.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getInstanceMethods(): FixedArray<reflect.InstanceMethod>;

    /**
     * Look up a instance method (including default methods from implemented interfaces) among the methods
     * declared in the class.
     *
     * @param { string } name - The method name to search for.
     * @param { FixedArray<Class> } [signature] - Array of parameter classes defining the method signature.
     * @returns { reflect.InstanceMethod | undefined } the found instance method, or undefined if not found.
     * @throws { Error } When - signature is omitted and multiple overloads exist
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getInstanceMethod(name: string, signature?: FixedArray<Class>): reflect.InstanceMethod | undefined;

    /**
     * Get static methods declared in the class.
     *
     * @returns { FixedArray<reflect.StaticMethod> } a fixed array of static methods.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getStaticMethods(): FixedArray<reflect.StaticMethod>;

    /**
     * Look up a static method among the methods declared in the class.
     *
     * @param { string } name - The method name to search for.
     * @param { FixedArray<Class> } [signature] - Array of parameter classes defining the method signature.
     * @returns { reflect.StaticMethod | undefined } the found static method, or undefined if not found.
     * @throws { Error } When - signature is omitted and multiple overloads exist
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getStaticMethod(name: string, signature?: FixedArray<Class>): reflect.StaticMethod | undefined;

    /**
     * Get instance fields declared in the class.
     *
     * @returns { FixedArray<reflect.InstanceField> } a fixed array of instance fields.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getInstanceFields(): FixedArray<reflect.InstanceField>;

    /**
     * Look up a instance field by name among the fields declared in this class.
     *
     * @param { string } name - The field name to search for.
     * @returns { reflect.InstanceField | undefined } the found instance field, or undefined if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getInstanceField(name: string): reflect.InstanceField | undefined;

    /**
     * Get static fields declared in this class.
     *
     * @returns { FixedArray<reflect.StaticField> } a fixed array of static fields.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getStaticFields(): FixedArray<reflect.StaticField>;

    /**
     * Look up a static field by name among the fields declared in this class.
     *
     * @param { string } name - The field name to search for.
     * @returns { reflect.StaticField | undefined } the found static field, or undefined if not found.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getStaticField(name: string): reflect.StaticField | undefined;

    /**
     * Get all constructors of a class.
     *
     * @returns { FixedArray<reflect.Constructor> } a fixed array of constructors.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getConstructors(): FixedArray<reflect.Constructor>;

    /**
     * Get all constituent types of a union class.
     *
     * @returns { FixedArray<Class> | undefined } a fixed array of constituent types,
     *     or undefined if this is not a union class.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getUnionConstituentTypes(): FixedArray<Class> | undefined;

    /**
     * Check the class is final
     *
     * @returns { boolean } true if the class is fianl
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isFinal(): boolean;

    /**
     * Check the class is abstract
     *
     * @returns { boolean } true if the class is abstract
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isAbstract(): boolean;

    /**
     * Check if class is primitive type
     *
     * @returns { boolean } true if the class corresponds to a primitive type
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    isPrimitive(): boolean;
}
