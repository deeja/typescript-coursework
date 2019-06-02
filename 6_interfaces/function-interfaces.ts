namespace InterfaceFunctionTypes{

    interface IFunctionType{
        (num1: number, num2: number): number;        
    }

    let myFunctionType: IFunctionType;
    myFunctionType = function(num1: number, num2: number): number {
        return num1 * num2
    }
    let returnedValue: number = myFunctionType(1,2);


}