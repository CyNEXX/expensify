/* const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Buzau',
        temp: 8
    }
};

const { name: firstName = 'Anonymous', age } = { person };
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is th Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher; 

console.log(publisherName);*/

const item = ['Coffee (hot)', '$2.00', '$3.50', '$2.75'];

const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);