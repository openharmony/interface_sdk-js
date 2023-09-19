declare namespace testNamespace {
  class TestInterface {
    static registerInputer(authType: AuthType, inputer: IInputer): void;
  }

  function isOpenAccessibility(): TestInterface.registerInputer;
}
