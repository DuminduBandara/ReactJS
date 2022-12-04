const person = {
    name: 'John',
    walk(){
        console.log(this);
    }
};


const n = person.name = "Alex";
const p = person.walk.bind(person);
p();
console.log(n);

