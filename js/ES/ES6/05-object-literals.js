// Enhanced Object Literals
function newUser (user, country, uID) {
    return {
        user,
        country,
        id: uID
    }
}

console.log(newUser('John', 'USA', 1));

let user = 'cychitivav';

console.log({user});