// const person = {
//   name: 'Mark',
//   age: 26,
//   location: {
//     city: 'El Paso',
//     temp: 42,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['321 Canyon Vista', 'El Paso', 'TX', '79928'];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [coffee, , msize] = item;

console.log(`A medium ${coffee} cost ${msize}`);
