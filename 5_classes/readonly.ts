// Read only properties

namespace ReadonlyExamples {
    class MyClassWithReadonlyProperties{
        readonly youCantTouchThis: string;
         constructor(incomingString : string){
             this.youCantTouchThis = incomingString;
         }        
    }
}