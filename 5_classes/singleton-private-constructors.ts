// Singletons and private constructors
namespace FactoryPrivateConstructor{
    class ClassThatNeedsFactoryStyleCreation {
        private something: string;

        private constructor(something: string){
            this.something = something;
        }

        Create(): ClassThatNeedsFactoryStyleCreation{
            return new ClassThatNeedsFactoryStyleCreation("a string that was needed to be entered by this class for some good reason")
        }
    }
}


namespace Singleton {

    // singleton example
    class MyAwesomeSingleton {

        private constructor() {
            // can't use this outside of this object          
        }

        // must be static 
        private static instance: MyAwesomeSingleton;

        static getInstance() {
            if (!this.instance) {
                this.instance = new MyAwesomeSingleton();
            }
            return this.instance;
        }
    }

}