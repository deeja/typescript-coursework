// method decorators 
// `function( target: any, propName: string, descriptor: PropertyDecorator){ .. some code ...}`

namespace MethodDecorators{

    // using a factory here
    function editable(value: boolean): Function{
        return function( target: any, propName: string, descriptor: PropertyDecorator){
            descriptor.arguments.writable = value; // no longer writable
        }
    }

    class ProjectOfSomeSort {
        projectName : string; 

        constructor (projectName:string){
            this.projectName = projectName
        }

        @editable(false) // prevents this method from being edited
        calculateBudget(){
            console.log(1000)
        }

    }

}