class Person{

    constructor(name){
        this.name = name;
    }

    walk(){
        console.log('walk');
    }
}


const person = new Person("Rox");
console.log(person.name);