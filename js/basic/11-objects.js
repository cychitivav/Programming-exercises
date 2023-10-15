// Objects are a collection of properties
// Properties are a key-value pair
// Key is a string
// Value can be anything

// Object literal
const person = {
  name: 'Cristian',
  age: 25,
  hobbies: ['cycling', 'reading', 'coding'],
  location: {
    city: 'Bogota',
    country: 'Colombia'
  },
  greetings: function() {
    console.log('Hello' + ' ' + this.name); // this refers to the object
  }
}
