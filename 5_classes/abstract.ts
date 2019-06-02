// Abstract classes and such


namespace AbstractClasses {

    abstract class Animal {
        // abstract properties can only be PUBLIC or PROTECTED
        protected abstract animalYearsPerActualYear: number;

        age: number = 0;

        increaseActualAgeByAYear(): void {
            this.age++;
        }

        get animalAge(){
            return this.age * this.animalYearsPerActualYear;
        }
    }

    class Person extends Animal {
        animalYearsPerActualYear: number = 1;

    }

    class Dog extends Animal{
        animalYearsPerActualYear: number = 7;
    }


    var someDog = new Dog();
    someDog.increaseActualAgeByAYear();
    console.log(someDog.animalAge); // 7

    var somePerson = new Person();
    somePerson.increaseActualAgeByAYear();
    console.log(somePerson.animalAge); // 1

}