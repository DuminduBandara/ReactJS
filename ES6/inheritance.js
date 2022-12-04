
class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("walk");
    }
}


class Student extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    study(){
        console.log(this.name, this.degree);
    }
}


const student = new Student("Alex", "SE");
student.study();
student.degree;