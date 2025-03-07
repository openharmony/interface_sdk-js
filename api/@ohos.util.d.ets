declare namespace util {
  /**
   * %s: String will be used to convert all values except BigInt, Object and -0. BigInt values will be represented
   * with an n and Objects that have no user defined toString function are inspected using util.inspect() with
   * options { depth: 0, colors: false, compact: 3 }.
   * %d: Number will be used to convert all values except BigInt and Symbol.
   * %i: parseInt(value, 10) is used for all values except BigInt and Symbol.
   * %f: parseFloat(value) is used for all values except Bigint and Symbol.
   * %j: JSON. Replaced with the string '[Circular]' if the argument contains circular references.
   * %o: Object. A string representation of an object with generic JavaScript object formatting.Similar to
   * util.inspect() with options { showHidden: true, showProxy: true}. This will show the full object including
   * non-enumerable properties and proxies.
   * %O: Object. A string representation of an object with generic JavaScript object formatting.
   * %O: Object. A string representation of an object with generic JavaScript object formatting.Similar to
   * util.inspect() without options. This will show the full object not including non-enumerable properties and
   * proxies.
   * %c: CSS. This specifier is ignored and will skip any CSS passed in.
   * %%: single percent sign ('%'). This does not consume an argument.Returns: <string> The formatted string.
   *
   * @param { string } format - Styled string
   * @param { Object[] } args - Data to be formatted
   * @returns { string } a string formatted in a specific format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 17
   */
  function format(format: string, ...args: Object[]): string;

  /**
   * Generate a random RFC 4122 version 4 UUID using a cryptographically secure random number generator.
   *
   * @param { boolean } [entropyCache] - Whether to generate the UUID with using the cache. Default: true.
   * @returns { string } Return a string representing this UUID.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 17
   */
  function generateRandomUUID(entropyCache?: boolean): string;

  class LRUCache<K, V> {
    /**
     * Default constructor used to create a new LruBuffer instance with the default capacity of 64.
     *
     * @param { number } [capacity] - Indicates the capacity to customize for the buffer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    constructor(capacity?: number);

    /**
     * Updates the buffer capacity to a specified capacity.
     *
     * @param { number } newCapacity - Indicates the new capacity to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    updateCapacity(newCapacity: number): void;

    /**
     * Returns a string representation of the object.
     *
     * @returns { string } Returns the string representation of the object and outputs the string representation of the object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    toString(): string;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @type { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    length: number;

    /**
     * Obtains the capacity of the current buffer.
     *
     * @returns { number } Returns the capacity of the current buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getCapacity(): number;

    /**
     * Clears key-value pairs from the current buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    clear(): void;

    /**
     * Obtains the number of times createDefault(Object) returned a value.
     *
     * @returns { number } Returns the number of times createDefault(java.lang.Object) returned a value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getCreateCount(): number;

    /**
     * Obtains the number of times that the queried values are not matched.
     *
     * @returns { number } Returns the number of times that the queried values are not matched.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getMissCount(): number;

    /**
     * Obtains the number of times that values are evicted from the buffer.
     *
     * @returns { number } Returns the number of times that values are evicted from the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getRemovalCount(): number;

    /**
     * Obtains the number of times that the queried values are successfully matched.
     *
     * @returns { number } Returns the number of times that the queried values are successfully matched.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getMatchCount(): number;

    /**
     * Obtains the number of times that values are added to the buffer.
     *
     * @returns { number } Returns the number of times that values are added to the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    getPutCount(): number;

    /**
     * Checks whether the current buffer is empty.
     *
     * @returns { boolean } Returns true if the current buffer contains no value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    isEmpty(): boolean;

    /**
     * Obtains the value associated with a specified key.
     *
     * @param { K } key - Indicates the key to query.
     * @returns { V | undefined } Returns the value associated with the key if the specified key is present in the buffer; returns null otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    get(key: K): V | undefined;

    /**
     * Adds a key-value pair to the buffer.
     *
     * @param { K } key - Indicates the key to add.
     * @param { V } value - Indicates the value associated with the key to add.
     * @returns { V | undefined } Returns the value associated with the added key; returns the original value if the key to add already exists, returns null otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    put(key: K, value: V | undefined): V | undefined;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @returns { V[] } Returns the list of all values in the current buffer in ascending order, from the most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    values(): V[];

    /**
     * Obtains a list of keys for the values in the current buffer.
     * since 9
     *
     * @returns { K[] } Returns a list of keys sorted from most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    keys(): K[];

    /**
     * Deletes a specified key and its associated value from the current buffer.
     *
     * @param { K } key - Indicates the key to delete.
     * @returns { V | undefined } Returns an Optional object containing the deleted key-value pair; returns an empty Optional object if the key does not exist.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    remove(key: K): V | undefined;

    /**
     * Executes subsequent operations after a value is deleted.
     *
     * @param { boolean } isEvict - The parameter value is true if this method is called due to insufficient capacity,
     * and the parameter value is false in other cases.
     * @param { K } key - Indicates the deleted key.
     * @param { V } value - Indicates the deleted value.
     * @param { V } newValue - The parameter value is the new value associated if the put(java.lang.Object,java.lang.Object)
     * method is called and the key to add already exists. The parameter value is null in other cases.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * Checks whether the current buffer contains a specified key.
     *
     * @param { K } key - Indicates the key to check.
     * @returns { boolean } Returns true if the buffer contains the specified key.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    contains(key: K): boolean;

    /**
     * Executes subsequent operations if miss to compute a value for the specific key.
     *
     * @param { K } key - Indicates the missed key.
     * @returns { V | undefined } Returns the value associated with the key.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    createDefault(key: K): V | undefined;

    /**
     * Returns an array of key-value pairs of enumeratable properties of a given object.
     *
     * @returns { IterableIterator<[K, V]> } Returns an array of key-value pairs for the enumeratable properties of the given object itself.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Specifies the default iterator for an object.
     *
     * @returns { IterableIterator<[K, V]> } Returns a two - dimensional array in the form of key - value pairs.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    $_iterator(): IterableIterator<[K, V]>;
  }
}
export default util;
