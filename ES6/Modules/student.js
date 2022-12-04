import { Person } from "./Person"

export class Student extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    study(){
        console.log(this.name, this.degree);
    }
}