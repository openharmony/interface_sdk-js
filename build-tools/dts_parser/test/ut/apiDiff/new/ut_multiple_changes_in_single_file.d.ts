/**
 * @since 10
 */
export namespace test {
  /**
   * @permission ohos.permission.GET_PERMISSIONS
   */
  function func(str: string): void;

  interface test1 {
    func1(str: string, str1: number): void;
  }

  enum Test3 {
    VALUE_ONE = 1,

    VALUE_TWO,
  }
}
