// Property Decorator  - similar to method decorator, but no access to PropertyDescriptor

namespace PropertyDecorators {

    function overwritable(canOverwrite: boolean): Function {
        return function (target: any, propertyName: string) {
            const newDescriptor: PropertyDescriptor = { writable: canOverwrite };
            return newDescriptor;
        }
    }
    class AnotherProject {
        @overwritable(false)
        projectName: string;

        constructor(projectName: string) {
            this.projectName = projectName;
        }
    }

    let anotherProject = new AnotherProject("this is the name");

    console.log("The project name is ",anotherProject.projectName)
}

