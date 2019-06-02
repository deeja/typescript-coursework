// Static members

class Helpers {
    static PI: number = 3.14;

    static calculateCircumference(radius: number): number {
        return this.PI * (2 * radius);
    }
}

let sizeOfMyCircle : number = Helpers.calculateCircumference(55);





