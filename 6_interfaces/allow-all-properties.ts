// Using the index signature to allow any property

namespace InterfacesAllowAllProperties {
  interface IAllowAllProperties {
    [propName: string]: any;   // this acts a bit like a dynamic
  }


  class TestClass implements IAllowAllProperties {
    // no properties here
  }

  let testOne: TestClass = new TestClass();
  // let testValue = testOne.anyPropertyNameIWant; // can't compile as doesn't find property

  let testTwo: IAllowAllProperties = new TestClass();
  let testValue = testTwo.anyPropertyNameIWant; // compiles fine
}