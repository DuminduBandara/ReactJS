const person = {
    talk() {
        var self = this;
        setTimeout(()=>{
            console.log("this", this)
        },2000);
    }
};

person.talk();