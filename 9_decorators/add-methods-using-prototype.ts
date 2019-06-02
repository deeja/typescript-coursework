// adding a method using the JS prototype 
namespace DecoratorAddingMethods{

    // add an incredibly annoying show alert method
    function addShowAlert(constructor: Function): void {
        constructor.prototype.showAlert = function(message: string){
            alert(message);
        }
    }

    @addShowAlert
    class NoAlertOnThisClass{
        // nothing in here but us chickens
    }

    // need to cast to any to allow the dynamically added method to be used
    let instance: NoAlertOnThisClass = new NoAlertOnThisClass();

    // casting to any
    (<any>instance).showAlert("here is the alert!");
}