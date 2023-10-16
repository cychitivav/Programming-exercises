class User {};
// Instanciate a class
const newUser = new User();


class AnotherUser {
    greeting() {
        return `Hello`;
    }
}

const gndx = new AnotherUser();
console.log(gndx.greeting());


class developer {
    constructor() {
        console.log('New developer created');
    }
    greeting() {
        return `Hello`;
    }
}

const david = new developer();


class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Methods
    speak() {
        return('Hello');
    }
    greeting() {
        return(this.speak() + ' my name is ' + this.name);
    }
    get uAge() {
        return this.age;
    }

}

const ana = new user('Ana', 21);
console.log(ana.greeting());
console.log(ana.uAge);
console.log(ana.age);
console.log(ana.uAge = 1);
console.log(ana);